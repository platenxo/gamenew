const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());

// ================================================================
// 🛡️ GÜVENLİK BAŞLIKLARI (Cross-Origin-Opener-Policy hatasını çözer)
// ================================================================
app.use((req, res, next) => {
    // Google Login pop-up'ının ana sayfaya postMessage göndermesine izin verir
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    // Pop-up ile ilgili ek güvenlik kısıtlamasını kaldırır
    res.setHeader('Cross-Origin-Embedder-Policy', 'unsafe-none');
    next();
});
// ================================================================

const server = http.createServer(app);
const wss = new WebSocket.Server({ server, path: '/ws' });

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '337143823950-ni8amg87q94tqnlv3fst5hmdcitnbenu.apps.googleusercontent.com';
const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || 'demirdagserkan323@gmail.com').split(',').map(s => s.trim()).filter(Boolean);
const VIP_EMAILS = (process.env.VIP_EMAILS || '').split(',').map(s => s.trim()).filter(Boolean);

// In-memory user store: key by google sub or email
const USERS = new Map();

// Statik dosyalar
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/config', (req, res) => {
    res.json({ googleClientId: GOOGLE_CLIENT_ID });
});

app.post('/verify-token', async (req, res) => {
    const token = req.body && req.body.token;
    if (!token) {
        return res.status(400).json({ success: false, message: 'Token gereklidir.' });
    }

    const payload = await verifyIdToken(token);
    if (!payload) {
        return res.status(401).json({ success: false, message: 'Geçersiz veya süresi dolmuş token.' });
    }

    res.json({ success: true, payload });
});

// Oyun konfigürasyonu
const CONFIG = {
    WORLD_SIZE: 10000,
    MAX_PLAYERS: 50,
    PLAYER_SPEED: 16,
    RESPAWN_TIME: 3000,
    SCORE_PER_KILL: 30000,
    FOOD_COUNT: 1000,
    FOOD_RADIUS: 8,
    PLAYER_START_RADIUS: 12,
    GROWTH_PER_FOOD: 1.2,
    SEGMENT_DISTANCE: 8,
    COINS_PER_FOOD: 1
};

// Mağaza verileri
const STORE = {
    skins: [
        { id: 'default', name: 'Klasik', price: 0, color: 0x4CAF50, icon: '🐛' },
        { id: 'gold', name: 'Altın', price: 100, color: 0xFFD700, icon: '🌟' },
        { id: 'fire', name: 'Ateş', price: 150, color: 0xFF4444, icon: '🔥' },
        { id: 'ice', name: 'Buz', price: 150, color: 0x44DDFF, icon: '❄️' },
        { id: 'neon', name: 'Neon', price: 200, color: 0xFF00FF, icon: '💜' },
        { id: 'rainbow', name: 'Gökkuşağı', price: 300, color: 0xFF6B6B, icon: '🌈' },
        { id: 'crystal', name: 'Kristal', price: 250, color: 0xAAEEFF, icon: '💎' },
        { id: 'lava', name: 'Lav', price: 200, color: 0xFF6600, icon: '🌋' },
        { id: 'space', name: 'Uzay', price: 350, color: 0x6633CC, icon: '🚀' },
        { id: 'pixel', name: 'Piksel', price: 180, color: 0x33FF33, icon: '🟩' }
    ],
    trails: [
        { id: 'default', name: 'Yok', price: 0, icon: '➖' },
        { id: 'sparkle', name: 'Parlak', price: 80, icon: '✨' },
        { id: 'fire', name: 'Ateş', price: 120, icon: '🔥' },
        { id: 'ice', name: 'Buz', price: 120, icon: '❄️' },
        { id: 'rainbow', name: 'Gökkuşağı', price: 200, icon: '🌈' },
        { id: 'heart', name: 'Kalp', price: 150, icon: '❤️' }
    ],
    hats: [
        { id: 'none', name: 'Yok', price: 0, icon: '👤' },
        { id: 'crown', name: 'Taç', price: 200, icon: '👑' },
        { id: 'tophat', name: 'Silindir', price: 150, icon: '🎩' },
        { id: 'party', name: 'Parti', price: 100, icon: '🎉' },
        { id: 'santa', name: 'Noel', price: 120, icon: '🎅' },
        { id: 'pirate', name: 'Korsan', price: 180, icon: '🏴‍☠️' }
    ]
};

// Oyun durumu
const gameState = {
    players: new Map(),
    foods: [],
    particles: []
};

const clients = new Map();
let nextClientId = 1;

// Renk paleti
const COLORS = [
    0xFF6B6B, 0xFFB84D, 0xFFD93D, 0x6BCB77, 0x4D96FF,
    0x9B59B6, 0xFF6B9D, 0x00D2FF, 0xFF8A5C, 0xA8E6CF,
    0xF38181, 0xAAE3E2, 0xFFD3E0, 0x95E1D3, 0xFCE38A,
    0x81ECEC, 0xFF9FF3, 0xF368E0, 0x54A0FF, 0x5F27CD
];

function spawnFood() {
    const halfWorld = CONFIG.WORLD_SIZE / 2;
    const colors = [0x4CAF50, 0xFFD93D, 0xFF6B6B, 0x6BCB77, 0x4D96FF, 0xFF8A5C];
    return {
        id: `food_${Date.now()}_${Math.random()}`,
        x: (Math.random() - 0.5) * CONFIG.WORLD_SIZE,
        y: (Math.random() - 0.5) * CONFIG.WORLD_SIZE,
        radius: CONFIG.FOOD_RADIUS + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)]
    };
}

function createPlayer(clientId) {
    const halfWorld = CONFIG.WORLD_SIZE / 2;
    const startX = (Math.random() - 0.5) * CONFIG.WORLD_SIZE;
    const startY = (Math.random() - 0.5) * CONFIG.WORLD_SIZE;
    
    const segments = [];
    for (let i = 0; i < 5; i++) {
        segments.push({
            x: startX - i * CONFIG.SEGMENT_DISTANCE,
            y: startY + i * 2
        });
    }
    
    return {
        id: `player_${clientId}`,
        segments: segments,
        targetX: startX,
        targetY: startY,
        radius: CONFIG.PLAYER_START_RADIUS,
        color: COLORS[clientId % COLORS.length],
        nickname: `Worm${clientId}`,
        score: 0,
        kills: 0,
        deaths: 0,
        alive: true,
        length: 5,
        direction: { x: 0, y: -1 },
        coins: 0,
        skin: 'default',
        trail: 'default',
        hat: 'none',
        ownedSkins: ['default'],
        ownedTrails: ['default'],
        ownedHats: ['none']
    };
}

function createParticles(x, y, color, count, speed = 5) {
    for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const spd = Math.random() * speed + 1;
        gameState.particles.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * spd,
            vy: Math.sin(angle) * spd,
            radius: Math.random() * 3 + 2,
            color: color,
            life: 30 + Math.random() * 20,
            maxLife: 30 + Math.random() * 20
        });
    }
}

async function verifyIdToken(id_token) {
    try {
        const res = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${id_token}`);
        if (!res.ok) return null;
        const payload = await res.json();
        // payload.aud should match GOOGLE_CLIENT_ID if provided
        if (GOOGLE_CLIENT_ID && payload.aud !== GOOGLE_CLIENT_ID) {
            console.warn('Token audience mismatch:', payload.aud);
            return null;
        }
        return payload; // contains sub, email, name, picture
    } catch (e) {
        console.error('Token doğrulama hatası:', e);
        return null;
    }
}

wss.on('connection', async (ws, req) => {
    if (clients.size >= CONFIG.MAX_PLAYERS) {
        ws.send(JSON.stringify({ type: 'error', message: 'Sunucu dolu!' }));
        ws.close();
        return;
    }

    // read token from query string if provided
    let token = null;
    try {
        const url = new URL(req.url, `http://${req.headers.host}`);
        token = url.searchParams.get('token');
    } catch (e) {
        // ignore
    }

    let user = null;
    if (token) {
        const payload = await verifyIdToken(token);
        if (payload) {
            const key = payload.sub || payload.email;
            user = USERS.get(key) || {
                id: key,
                email: payload.email,
                name: payload.name,
                isAdmin: ADMIN_EMAILS.includes((payload.email || '').toLowerCase()),
                isVIP: VIP_EMAILS.includes((payload.email || '').toLowerCase()),
                vipName: null,
                coins: 0,
                ownedSkins: [],
                ownedTrails: [],
                ownedHats: []
            };
            USERS.set(key, user);
        }
    }

    if (!user) {
        ws.send(JSON.stringify({ type: 'error', message: 'Google ile doğrulanmış giriş zorunludur.' }));
        ws.close();
        return;
    }

    const clientId = nextClientId++;
    const player = createPlayer(clientId);

    // if logged in user, apply saved preferences
    if (user) {
        player.nickname = (user.isVIP && user.vipName) ? user.vipName : (user.name || player.nickname);
        player.coins = user.coins || player.coins;
        player.ownedSkins = user.ownedSkins && user.ownedSkins.length ? user.ownedSkins : player.ownedSkins;
        player.ownedTrails = user.ownedTrails && user.ownedTrails.length ? user.ownedTrails : player.ownedTrails;
        player.ownedHats = user.ownedHats && user.ownedHats.length ? user.ownedHats : player.ownedHats;
        player.skin = user.skin || player.skin;
        player.trail = user.trail || player.trail;
        player.hat = user.hat || player.hat;
        player.isAdmin = user.isAdmin;
        player.isVIP = user.isVIP;
    }

    clients.set(clientId, { ws, playerData: player, userKey: user ? (user.id || user.email) : null });
    gameState.players.set(player.id, player);

    console.log(`🐛 Oyuncu bağlandı: ${player.nickname} (${clients.size}/${CONFIG.MAX_PLAYERS})`);

    ws.send(JSON.stringify({
        type: 'init',
        playerId: player.id,
        gameState: getGameStateForClient(),
        store: STORE,
        playerData: {
            coins: player.coins,
            skin: player.skin,
            trail: player.trail,
            hat: player.hat,
            ownedSkins: player.ownedSkins,
            ownedTrails: player.ownedTrails,
            ownedHats: player.ownedHats,
            isAdmin: !!player.isAdmin,
            isVIP: !!player.isVIP,
            vipName: (player.isVIP && user && user.vipName) ? user.vipName : null
        }
    }));

    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message);
            handleClientMessage(clientId, data);
        } catch (error) {
            console.error('❌ Mesaj hatası:', error);
        }
    });

    ws.on('close', () => {
        console.log(`❌ Oyuncu ayrıldı: ${player.nickname}`);
        gameState.players.delete(player.id);
        clients.delete(clientId);
        broadcast({ type: 'playerLeft', playerId: player.id });
    });
});

function handleClientMessage(clientId, data) {
    const client = clients.get(clientId);
    if (!client) return;
    const player = client.playerData;
    if (!player) return;
    
    switch (data.type) {
        case 'move':
            if (!player.alive) return;
            const halfWorld = CONFIG.WORLD_SIZE / 2;
            player.targetX = Math.max(-halfWorld, Math.min(halfWorld, data.x));
            player.targetY = Math.max(-halfWorld, Math.min(halfWorld, data.y));
            
            const head = player.segments[0];
            const dx = player.targetX - head.x;
            const dy = player.targetY - head.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > 1) {
                player.direction.x = dx / dist;
                player.direction.y = dy / dist;
            }
            break;
            
        case 'setNickname':
            if (data.nickname && data.nickname.length > 0 && data.nickname.length <= 20) {
                // Only allow VIPs to set custom vipName
                const client = clients.get(clientId);
                const isVIP = client && client.userKey && USERS.get(client.userKey) && USERS.get(client.userKey).isVIP;
                if (isVIP && data.nickname.startsWith('@')) {
                    // VIP personal name, stored separately
                    const user = USERS.get(client.userKey);
                    if (user) {
                        user.vipName = data.nickname.substring(1, 21);
                        player.nickname = user.vipName;
                    }
                } else {
                    // normal nickname change
                    player.nickname = data.nickname.substring(0, 20);
                }

                broadcast({
                    type: 'playerUpdate',
                    playerId: player.id,
                    nickname: player.nickname
                });
            }
            break;
            
        case 'buyItem':
            const { category, itemId } = data;
            let item = null;
            let ownedList = null;
            
            if (category === 'skins') {
                item = STORE.skins.find(s => s.id === itemId);
                ownedList = player.ownedSkins;
            } else if (category === 'trails') {
                item = STORE.trails.find(t => t.id === itemId);
                ownedList = player.ownedTrails;
            } else if (category === 'hats') {
                item = STORE.hats.find(h => h.id === itemId);
                ownedList = player.ownedHats;
            }
            
            if (!item || ownedList.includes(itemId) || player.coins < item.price) {
                ws.send(JSON.stringify({ type: 'buyError', message: 'Yetersiz bakiye veya zaten sahipsiniz!' }));
                return;
            }
            
            player.coins -= item.price;
            ownedList.push(itemId);
            
            if (category === 'skins') player.skin = itemId;
            else if (category === 'trails') player.trail = itemId;
            else if (category === 'hats') player.hat = itemId;
            
            ws.send(JSON.stringify({
                type: 'buySuccess',
                category: category,
                itemId: itemId,
                coins: player.coins,
                ownedList: ownedList
            }));
            
            broadcast({
                type: 'playerUpdate',
                playerId: player.id,
                skin: player.skin,
                trail: player.trail,
                hat: player.hat
            });
            break;
            
        case 'equipItem':
            const { category: cat, itemId: id } = data;
            if (cat === 'skins' && player.ownedSkins.includes(id)) player.skin = id;
            else if (cat === 'trails' && player.ownedTrails.includes(id)) player.trail = id;
            else if (cat === 'hats' && player.ownedHats.includes(id)) player.hat = id;
            
            broadcast({
                type: 'playerUpdate',
                playerId: player.id,
                skin: player.skin,
                trail: player.trail,
                hat: player.hat
            });
            break;
            
        case 'chat':
            if (data.message && data.message.length > 0 && data.message.length <= 100) {
                broadcast({
                    type: 'chat',
                    playerId: player.id,
                    nickname: player.nickname,
                    message: data.message.substring(0, 100)
                });
            }
            break;
    }
}

function getSkinColor(player) {
    const skin = STORE.skins.find(s => s.id === player.skin);
    return skin ? skin.color : player.color;
}

function getGameStateForClient() {
    return {
        players: Array.from(gameState.players.values()).map(p => ({
            id: p.id,
            segments: p.segments,
            radius: p.radius,
            color: getSkinColor(p),
            score: p.score,
            kills: p.kills,
            deaths: p.deaths,
            nickname: p.nickname,
            alive: p.alive,
            length: p.length,
            skin: p.skin,
            trail: p.trail,
            hat: p.hat
        })),
        foods: gameState.foods
    };
}

function updatePlayerMovement(player) {
    if (!player.alive) return;
    
    const head = player.segments[0];
    const dx = player.targetX - head.x;
    const dy = player.targetY - head.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    if (dist > 2) {
        const speed = CONFIG.PLAYER_SPEED;
        const moveX = (dx / dist) * speed;
        const moveY = (dy / dist) * speed;
        
        head.x += moveX;
        head.y += moveY;
        
        for (let i = 1; i < player.segments.length; i++) {
            const prev = player.segments[i - 1];
            const curr = player.segments[i];
            const dx2 = prev.x - curr.x;
            const dy2 = prev.y - curr.y;
            const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            
            if (dist2 > CONFIG.SEGMENT_DISTANCE * 1.2) {
                const ratio = 0.15;
                curr.x += dx2 * ratio;
                curr.y += dy2 * ratio;
            }
        }
    }
}

function checkFoodCollisions(player) {
    if (!player.alive) return;
    
    const head = player.segments[0];
    for (let i = gameState.foods.length - 1; i >= 0; i--) {
        const food = gameState.foods[i];
        const dx = head.x - food.x;
        const dy = head.y - food.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < player.radius + food.radius) {
            player.radius += CONFIG.GROWTH_PER_FOOD;
            player.score++;
            player.coins += CONFIG.COINS_PER_FOOD;
            player.length++;
            
            const last = player.segments[player.segments.length - 1];
            player.segments.push({
                x: last.x + (Math.random() - 0.5) * 2,
                y: last.y + (Math.random() - 0.5) * 2
            });
            
            createParticles(food.x, food.y, food.color, 15);
            
            gameState.foods.splice(i, 1);
            gameState.foods.push(spawnFood());
            
            broadcast({
                type: 'foodEaten',
                playerId: player.id,
                position: { x: food.x, y: food.y },
                newFood: gameState.foods[gameState.foods.length - 1],
                coins: player.coins,
                score: player.score
            });
        }
    }
}

function checkPlayerCollisions() {
    const players = Array.from(gameState.players.values());
    
    for (let i = 0; i < players.length; i++) {
        const p1 = players[i];
        if (!p1.alive) continue;
        
        const head1 = p1.segments[0];
        
        for (let j = 0; j < players.length; j++) {
            if (i === j) continue;
            const p2 = players[j];
            if (!p2.alive) continue;
            
            for (let k = 1; k < p2.segments.length; k++) {
                const seg = p2.segments[k];
                const dx = head1.x - seg.x;
                const dy = head1.y - seg.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < p1.radius + p2.radius * 0.7) {
                    killPlayer(p1.id, p2.id);
                    break;
                }
            }
            
            const head2 = p2.segments[0];
            for (let k = 1; k < p1.segments.length; k++) {
                const seg = p1.segments[k];
                const dx = head2.x - seg.x;
                const dy = head2.y - seg.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < p2.radius + p1.radius * 0.7) {
                    killPlayer(p2.id, p1.id);
                    break;
                }
            }
        }
    }
}

function killPlayer(playerId, killerId) {
    const player = gameState.players.get(playerId);
    const killer = gameState.players.get(killerId);
    
    if (!player || !player.alive) return;
    
    player.alive = false;
    player.deaths++;
    player.radius = CONFIG.PLAYER_START_RADIUS;
    
    if (killer) {
        killer.score += CONFIG.SCORE_PER_KILL;
        killer.kills++;
        killer.coins += 5;
        createParticles(player.segments[0].x, player.segments[0].y, player.color, 40, 8);
    }
    
    broadcast({
        type: 'playerDied',
        playerId: playerId,
        killerId: killerId,
        killerName: killer ? killer.nickname : 'Unknown',
        playerName: player.nickname,
        position: { x: player.segments[0].x, y: player.segments[0].y }
    });
    
    setTimeout(() => {
        const halfWorld = CONFIG.WORLD_SIZE / 2;
        const startX = (Math.random() - 0.5) * CONFIG.WORLD_SIZE;
        const startY = (Math.random() - 0.5) * CONFIG.WORLD_SIZE;
        
        const segments = [];
        for (let i = 0; i < 5; i++) {
            segments.push({
                x: startX - i * CONFIG.SEGMENT_DISTANCE,
                y: startY + i * 2
            });
        }
        
        player.segments = segments;
        player.radius = CONFIG.PLAYER_START_RADIUS;
        player.targetX = startX;
        player.targetY = startY;
        player.alive = true;
        player.length = 5;
        player.direction = { x: 0, y: -1 };
        
        createParticles(startX, startY, player.color, 20, 10);
        
        broadcast({
            type: 'playerRespawn',
            playerId: playerId,
            position: { x: startX, y: startY }
        });
    }, CONFIG.RESPAWN_TIME);
}

function gameLoop() {
    for (const [id, player] of gameState.players) {
        updatePlayerMovement(player);
        checkFoodCollisions(player);
    }
    
    checkPlayerCollisions();
    
    for (let i = gameState.particles.length - 1; i >= 0; i--) {
        const p = gameState.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.life--;
        if (p.life <= 0) {
            gameState.particles.splice(i, 1);
        }
    }
    
    while (gameState.foods.length < CONFIG.FOOD_COUNT) {
        gameState.foods.push(spawnFood());
    }
    
    broadcast({
        type: 'gameState',
        players: Array.from(gameState.players.values()).map(p => ({
            id: p.id,
            segments: p.segments,
            radius: p.radius,
            color: getSkinColor(p),
            score: p.score,
            kills: p.kills,
            deaths: p.deaths,
            nickname: p.nickname,
            alive: p.alive,
            length: p.length,
            skin: p.skin,
            trail: p.trail,
            hat: p.hat
        })),
        foods: gameState.foods,
        particles: gameState.particles.slice(0, 100)
    });
}

function broadcast(data) {
    const message = JSON.stringify(data);
    for (const [id, client] of clients) {
        if (client.ws.readyState === WebSocket.OPEN) {
            client.ws.send(message);
        }
    }
}

const TICK_RATE = 30;
const TICK_INTERVAL = 1000 / TICK_RATE;

for (let i = 0; i < CONFIG.FOOD_COUNT; i++) {
    gameState.foods.push(spawnFood());
}

setInterval(gameLoop, TICK_INTERVAL);

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`🐛 Wormate.io Sunucu ${PORT} portunda çalışıyor`);
    console.log(`🛒 Mağaza: ${STORE.skins.length} deri, ${STORE.trails.length} iz, ${STORE.hats.length} şapka`);
});