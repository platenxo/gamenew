class WormGame {
    constructor() {
        this.initPixi();
        this.players = new Map();
        this.foods = [];
        this.particles = [];
        this.localPlayerId = null;
        this.socket = null;
        this.reconnectAttempts = 0;
        this.camera = { x: 0, y: 0 };
        this.zoom = 0.8;
        this.targetZoom = 0.8;
        this.mouseX = 0;
        this.mouseY = 0;
        this.lastSendTime = 0;
        this.sendInterval = 50;
        this.coins = 0;
        this.store = null;
        this.playerData = null;
        this.token = null;
        this.googleClientId = null;
        this.authOverlay = null;
        this.authMessage = null;
        
        // UI Elemanları
        this.statusEl = null;
        this.scoreList = null;
        this.chatMessages = null;
        this.chatInput = null;
        this.coinDisplay = null;
        this.storeBtn = null;
        this.storeModal = null;
        this.storeContent = null;
    }
    
    async initPixi() {
        try {
            this.app = new PIXI.Application();
            await this.app.init({
                width: window.innerWidth,
                height: window.innerHeight,
                backgroundColor: 0x0a0a1a,
                antialias: true,
                resolution: window.devicePixelRatio || 1,
                autoDensity: true
            });
            document.body.prepend(this.app.canvas);
            
            this.stage = new PIXI.Container();
            this.app.stage.addChild(this.stage);
            
            // Harita ve Arka Plan
            this.createMap();
            
            // Oyun Katmanları
            this.foodLayer = new PIXI.Container();
            this.playerLayer = new PIXI.Container();
            this.particleLayer = new PIXI.Container();
            this.stage.addChild(this.foodLayer);
            this.stage.addChild(this.playerLayer);
            this.stage.addChild(this.particleLayer);
            
            // UI Elemanlarını Bağla
            this.statusEl = document.getElementById('status');
            this.scoreList = document.getElementById('scoreList');
            this.chatMessages = document.getElementById('chatMessages');
            this.chatInput = document.getElementById('chatInput');
            this.coinDisplay = document.getElementById('coinDisplay');
            this.storeBtn = document.getElementById('storeBtn');
            this.storeModal = document.getElementById('storeModal');
            this.storeContent = document.getElementById('storeItemsContainer');
            this.lobby = document.getElementById('lobby');
            this.lobbyContent = document.getElementById('lobbyStoreContent');
            this.startBtn = document.getElementById('startBtn');
            this.closeLobbyBtn = document.getElementById('closeLobby');
            
            // Olayları Ayarla
            this.setupEvents();
            this.setupStore();
            await this.initAuth();

            // Development fallback: eğer sunucudan mağaza gelmediyse örnek bir skin ekle
            this.setupDevStore();

            // Başlangıçta lobiyi göster (kullanıcı skin seçsin)
            if (this.lobby) this.toggleLobby(true);
            
            // Oyun Döngüsü
            this.app.ticker.add(() => this.update());
            
            // Pencere Yeniden Boyutlandırma
            window.addEventListener('resize', () => {
                this.app.renderer.resize(window.innerWidth, window.innerHeight);
            });
            
            console.log('🐛 Wormate.io başlatıldı!');
        } catch (error) {
            console.error('❌ Başlatma hatası:', error);
            this.showStatus('Oyun başlatılamadı ❌', '#f44336');
        }
    }
    
    async initAuth() {
        this.authOverlay = document.getElementById('authOverlay');
        this.authMessage = document.getElementById('authMessage');
        const loginButtonContainer = document.getElementById('googleLoginBtn');

        try {
            const res = await fetch('/config');
            const config = await res.json();
            this.googleClientId = config.googleClientId;
        } catch (error) {
            console.error('Auth config yüklenemedi:', error);
            if (this.authMessage) this.authMessage.textContent = 'Sunucu yapılandırması alınamadı.';
            return;
        }

        if (!this.googleClientId) {
            if (this.authMessage) this.authMessage.textContent = 'Google Client ID yapılandırılmadı.';
            return;
        }

        window.onGoogleLoginSuccess = async (response) => {
            if (!response || !response.credential) {
                if (this.authMessage) this.authMessage.textContent = 'Google kimlik doğrulama başarısız oldu.';
                return;
            }
            this.token = response.credential;
            if (this.authMessage) this.authMessage.textContent = 'Token doğrulanıyor...';
            const valid = await this.verifyTokenWithServer(this.token);
            if (!valid) {
                if (this.authMessage) this.authMessage.textContent = 'Doğrulama başarısız. Lütfen tekrar deneyin.';
                return;
            }
            this.hideAuthOverlay();
            this.connectToServer();
        };

        google.accounts.id.initialize({
            client_id: this.googleClientId,
            callback: window.onGoogleLoginSuccess,
            ux_mode: 'popup',
            auto_select: false
        });
        google.accounts.id.renderButton(loginButtonContainer, {
            theme: 'outline',
            size: 'large',
            width: '100%',
            text: 'signin_with',
            shape: 'rectangular'
        });
        google.accounts.id.prompt();
    }

    async verifyTokenWithServer(token) {
        try {
            const res = await fetch('/verify-token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token })
            });
            if (!res.ok) return false;
            const data = await res.json();
            return data.success === true;
        } catch (error) {
            console.error('Token doğrulama isteği başarısız:', error);
            return false;
        }
    }

    hideAuthOverlay() {
        if (this.authOverlay) this.authOverlay.classList.remove('active');
        if (this.lobby) this.lobby.style.display = 'flex';
    }

    createMap() {
        const halfWorld = 1500;
        
        // Arka Plan (Koyu Zemin)
        const bg = new PIXI.Graphics();
        bg.beginFill(0x0a0a1a);
        bg.drawRect(-halfWorld, -halfWorld, halfWorld * 2, halfWorld * 2);
        bg.endFill();
        
        // Izgara (Arena Görünümü)
        bg.lineStyle(1, 0x1a1a3a, 0.4);
        for (let i = -halfWorld; i <= halfWorld; i += 100) {
            bg.moveTo(i, -halfWorld);
            bg.lineTo(i, halfWorld);
            bg.moveTo(-halfWorld, i);
            bg.lineTo(halfWorld, i);
        }
        
        // Merkez Halkalar
        bg.lineStyle(2, 0x2a2a5a, 0.6);
        bg.drawCircle(0, 0, 100);
        bg.drawCircle(0, 0, 200);
        bg.drawCircle(0, 0, 300);
        
        // Sınır Çizgisi
        bg.lineStyle(3, 0x4a4a8a, 0.8);
        bg.drawRect(-halfWorld, -halfWorld, halfWorld * 2, halfWorld * 2);
        
        // Rastgele Engeller (Dekoratif)
        for (let i = 0; i < 20; i++) {
            const x = (Math.random() - 0.5) * 2400;
            const y = (Math.random() - 0.5) * 2400;
            const w = 30 + Math.random() * 60;
            const h = 30 + Math.random() * 60;
            bg.beginFill(0x1a1a3a);
            bg.drawRect(x - w/2, y - h/2, w, h);
            bg.endFill();
            bg.lineStyle(1, 0x2a2a5a, 0.3);
            bg.drawRect(x - w/2, y - h/2, w, h);
        }
        
        this.stage.addChildAt(bg, 0);
    }
    
    connectToServer() {
        if (!this.token) {
            console.warn('Google token yok, sunucuya bağlanma işlemi durduruldu.');
            this.showStatus('Google ile giriş yapılmadı.', '#ff9800');
            return;
        }

        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const host = window.location.hostname;
        const port = window.location.port || '3000';
        
        let wsUrl;
        if (host.includes('github.dev') || host.includes('codespaces') || host.includes('app.github.dev')) {
            wsUrl = `${protocol}//${host}/ws?token=${encodeURIComponent(this.token)}`;
        } else {
            wsUrl = `${protocol}//${host}:${port}/ws?token=${encodeURIComponent(this.token)}`;
        }
        
        console.log('🔗 Bağlanılıyor:', wsUrl);
        this.socket = new WebSocket(wsUrl);
        
        this.socket.onopen = () => {
            console.log('✅ Bağlandı');
            this.reconnectAttempts = 0;
            this.showStatus('Bağlandı ✅', '#4CAF50');
        };
        
        this.socket.onmessage = (e) => {
            try {
                const data = JSON.parse(e.data);
                this.handleMessage(data);
            } catch (error) {
                console.error('❌ Mesaj hatası:', error);
            }
        };
        
        this.socket.onclose = () => {
            console.log('❌ Bağlantı kesildi');
            this.showStatus('Yeniden bağlanılıyor... 🔄', '#ff9800');
            if (this.reconnectAttempts < 10) {
                this.reconnectAttempts++;
                setTimeout(() => this.connectToServer(), 3000 * this.reconnectAttempts);
            }
        };
        
        this.socket.onerror = (error) => {
            console.error('⚠️ WebSocket hatası:', error);
            this.showStatus('Bağlantı hatası ❌', '#f44336');
        };
    }
    
    showStatus(text, color) {
        if (!this.statusEl) return;
        this.statusEl.textContent = text;
        this.statusEl.style.borderColor = color;
        this.statusEl.style.color = color;
        this.statusEl.className = 'show';
        
        clearTimeout(this.statusTimeout);
        if (text === 'Bağlandı ✅') {
            this.statusTimeout = setTimeout(() => {
                if (this.statusEl) this.statusEl.className = '';
            }, 3000);
        }
    }
    
    handleMessage(data) {
        switch (data.type) {
            case 'init':
                this.localPlayerId = data.playerId;
                this.store = data.store;
                this.playerData = data.playerData;
                this.coins = data.playerData.coins;
                this.updateCoins();
                this.updateGameState(data.gameState);
                this.showStatus('Oyuna Hoş Geldin! 🐛', '#4CAF50');
                this.renderStore();
                if (this.lobbyContent) this.renderStore('skins', this.lobbyContent);
                break;
                
            case 'gameState':
                this.updateGameState(data);
                break;
                
            case 'playerUpdate':
                const player = this.players.get(data.playerId);
                if (player) {
                    if (data.nickname) player.nickname = data.nickname;
                    if (data.skin) player.skin = data.skin;
                    if (data.trail) player.trail = data.trail;
                    if (data.hat) player.hat = data.hat;
                }
                break;
                
            case 'playerLeft':
                this.removePlayer(data.playerId);
                break;
                
            case 'playerDied':
                const dead = this.players.get(data.playerId);
                if (dead && dead.segments && dead.segments.length > 0) {
                    this.createDeathEffect(dead.segments[0].x, dead.segments[0].y, dead.color);
                    this.removePlayer(data.playerId);
                }
                if (data.killerName) {
                    this.addChatMessage(`💀 ${data.killerName} → ${data.playerName}`, '#ff6b6b');
                }
                break;
                
            case 'playerRespawn':
                const respawned = this.players.get(data.playerId);
                if (respawned) {
                    respawned.alive = true;
                    respawned.segments = this.createSegments(data.position.x, data.position.y);
                    respawned.radius = 12;
                    respawned.length = 5;
                    this.createParticles(data.position.x, data.position.y, respawned.color, 20);
                }
                break;
                
            case 'foodEaten':
                this.createParticles(data.position.x, data.position.y, 0x4CAF50, 15);
                if (data.newFood) this.foods.push(data.newFood);
                if (data.coins !== undefined) {
                    this.coins = data.coins;
                    this.updateCoins();
                }
                break;
                
            case 'chat':
                this.addChatMessage(`${data.nickname}: ${data.message}`, '#ffffff');
                break;
                
            case 'buySuccess':
                this.coins = data.coins;
                this.updateCoins();
                if (data.category === 'skins') this.playerData.ownedSkins = data.ownedList;
                else if (data.category === 'trails') this.playerData.ownedTrails = data.ownedList;
                else if (data.category === 'hats') this.playerData.ownedHats = data.ownedList;
                else if (data.category === 'flags') this.playerData.ownedFlags = data.ownedList;
                this.renderStore();
                this.showStatus('🛒 Satın alındı!', '#4CAF50');
                break;
                
            case 'buyError':
                this.showStatus('⚠️ ' + data.message, '#f44336');
                break;
                
            case 'error':
                this.showStatus('⚠️ ' + data.message, '#f44336');
                break;
        }
    }
    
    createSegments(x, y) {
        const segments = [];
        for (let i = 0; i < 5; i++) {
            segments.push({ x: x - i * 8, y: y + i * 2 });
        }
        return segments;
    }
    
    updateGameState(data) {
        if (data.players) {
            const activeIds = new Set();
            for (const pData of data.players) {
                activeIds.add(pData.id);
                if (this.players.has(pData.id)) {
                    const existing = this.players.get(pData.id);
                    existing.segments = pData.segments;
                    existing.radius = pData.radius;
                    existing.score = pData.score;
                    existing.kills = pData.kills;
                    existing.deaths = pData.deaths;
                    existing.nickname = pData.nickname;
                    existing.alive = pData.alive;
                    existing.length = pData.length;
                    existing.color = pData.color;
                    existing.skin = pData.skin;
                    existing.trail = pData.trail;
                    existing.hat = pData.hat;
                } else {
                    this.addPlayer(pData);
                }
            }
            for (const [id] of this.players) {
                if (!activeIds.has(id)) this.removePlayer(id);
            }
        }
        
        if (data.foods) this.foods = data.foods;
        if (data.particles) this.particles = data.particles;
        
        this.updateScoreboard();
    }
    
    addPlayer(data) {
        const player = {
            id: data.id,
            segments: data.segments || this.createSegments(0, 0),
            radius: data.radius || 12,
            color: data.color || 0xffffff,
            score: data.score || 0,
            kills: data.kills || 0,
            deaths: data.deaths || 0,
            nickname: data.nickname || 'Player',
            alive: data.alive !== false,
            length: data.length || 5,
            skin: data.skin || 'default',
            trail: data.trail || 'default',
            hat: data.hat || 'none',
            container: null
        };
        this.players.set(data.id, player);
        this.updatePlayerSprite(player);
    }
    
    removePlayer(id) {
        const player = this.players.get(id);
        if (player && player.container) {
            this.playerLayer.removeChild(player.container);
        }
        this.players.delete(id);
    }
    
    getSkinColor(player) {
        if (!this.store) return player.color;
        const skin = this.store.skins.find(s => s.id === player.skin);
        return skin ? skin.color : player.color;
    }

    getSkinTexture(player) {
        if (!this.store || !player.skin) return null;
        const skin = this.store.skins.find(s => s.id === player.skin);
        if (!skin || !skin.image) return null;
        try {
            return PIXI.Texture.from(skin.image);
        } catch (e) {
            console.warn('Skin texture yüklenemedi:', skin.image, e);
            return null;
        }
    }
    
    updatePlayerSprite(player) {
        if (!player || !player.segments || player.segments.length < 2) return;
        
        if (!player.container) {
            player.container = new PIXI.Container();
            this.playerLayer.addChild(player.container);
        }
        
        while (player.container.children.length > 0) {
            player.container.removeChildAt(0);
        }
        
        const isLocal = player.id === this.localPlayerId;
        const radius = player.radius || 12;
        const color = this.getSkinColor(player);
        const alive = player.alive !== false;
        
        // Draw from tail to head so head is rendered on top. Use equal-sized circles for body segments.
        for (let idx = player.segments.length - 1; idx >= 0; idx--) {
            const i = idx;
            const seg = player.segments[i];
            const ratio = i / player.segments.length;
            const segRadius = i === 0 ? radius * 1.1 : radius; // head slightly larger

            const texture = this.getSkinTexture(player);

            if (texture) {
                // Use sprite with circular mask to apply skin image to segment
                const sprite = new PIXI.Sprite(texture);
                sprite.anchor.set(0.5);
                const diameter = segRadius * 2;
                sprite.width = diameter;
                sprite.height = diameter;

                const mask = new PIXI.Graphics();
                mask.beginFill(0xffffff);
                mask.drawCircle(0, 0, segRadius);
                mask.endFill();

                sprite.x = seg.x;
                sprite.y = seg.y;
                mask.x = seg.x;
                mask.y = seg.y;

                player.container.addChild(sprite);
                player.container.addChild(mask);
                sprite.mask = mask;

                if (i === 0) {
                    // draw eyes and hat on top of sprite
                    const g = new PIXI.Graphics();
                    const eyeSize = segRadius * 0.25;
                    const eyeOffset = segRadius * 0.35;
                    g.beginFill(0xffffff);
                    g.drawCircle(-eyeOffset, -eyeOffset * 0.5, eyeSize);
                    g.drawCircle(eyeOffset, -eyeOffset * 0.5, eyeSize);
                    g.endFill();

                    g.beginFill(0x2c3e50);
                    g.drawCircle(-eyeOffset + eyeSize * 0.3, -eyeOffset * 0.5 + eyeSize * 0.3, eyeSize * 0.5);
                    g.drawCircle(eyeOffset + eyeSize * 0.3, -eyeOffset * 0.5 + eyeSize * 0.3, eyeSize * 0.5);
                    g.endFill();

                    g.beginFill(0xffffff, 0.15);
                    g.drawCircle(-segRadius * 0.25, -segRadius * 0.25, segRadius * 0.4);
                    g.endFill();

                    g.x = seg.x;
                    g.y = seg.y;
                    player.container.addChild(g);

                    if (player.hat && player.hat !== 'none' && this.store) {
                        const hat = this.store.hats.find(h => h.id === player.hat);
                        if (hat) {
                            const hatText = new PIXI.Text(hat.icon, {
                                fontSize: segRadius * 1.2,
                                align: 'center'
                            });
                            hatText.anchor.set(0.5);
                            hatText.x = seg.x;
                            hatText.y = seg.y - segRadius * 1.1;
                            player.container.addChild(hatText);
                        }
                    }
                }
            } else {
                const graphics = new PIXI.Graphics();

                if (i === 0) {
                    graphics.beginFill(color);
                    graphics.drawCircle(0, 0, segRadius);
                    graphics.endFill();

                    const eyeSize = segRadius * 0.25;
                    const eyeOffset = segRadius * 0.35;
                    graphics.beginFill(0xffffff);
                    graphics.drawCircle(-eyeOffset, -eyeOffset * 0.5, eyeSize);
                    graphics.drawCircle(eyeOffset, -eyeOffset * 0.5, eyeSize);
                    graphics.endFill();

                    graphics.beginFill(0x2c3e50);
                    graphics.drawCircle(-eyeOffset + eyeSize * 0.3, -eyeOffset * 0.5 + eyeSize * 0.3, eyeSize * 0.5);
                    graphics.drawCircle(eyeOffset + eyeSize * 0.3, -eyeOffset * 0.5 + eyeSize * 0.3, eyeSize * 0.5);
                    graphics.endFill();

                    graphics.beginFill(0xffffff, 0.15);
                    graphics.drawCircle(-segRadius * 0.25, -segRadius * 0.25, segRadius * 0.4);
                    graphics.endFill();

                    if (player.hat && player.hat !== 'none' && this.store) {
                        const hat = this.store.hats.find(h => h.id === player.hat);
                        if (hat) {
                            const hatText = new PIXI.Text(hat.icon, {
                                fontSize: segRadius * 1.2,
                                align: 'center'
                            });
                            hatText.anchor.set(0.5);
                            hatText.x = 0;
                            hatText.y = -segRadius * 1.1;
                            graphics.addChild(hatText);
                        }
                    }
                } else {
                    const r = ((color >> 16) & 0xFF) * (1 - ratio * 0.4);
                    const g = ((color >> 8) & 0xFF) * (1 - ratio * 0.4);
                    const b = (color & 0xFF) * (1 - ratio * 0.4);
                    const bodyColor = (Math.round(Math.max(0, r)) << 16) | 
                                     (Math.round(Math.max(0, g)) << 8) | 
                                     Math.round(Math.max(0, b));

                    graphics.beginFill(bodyColor);
                    graphics.drawCircle(0, 0, segRadius);
                    graphics.endFill();

                    // subtle highlight for nested look
                    graphics.beginFill(0xffffff, 0.06);
                    graphics.drawCircle(-segRadius * 0.18, -segRadius * 0.18, segRadius * 0.35);
                    graphics.endFill();
                }

                graphics.x = seg.x;
                graphics.y = seg.y;
                player.container.addChild(graphics);
            }
        }
        
        if (player.segments.length > 0) {
            const label = new PIXI.Text(player.nickname, {
                fontFamily: 'Segoe UI, Arial, sans-serif',
                fontSize: Math.max(12, radius * 0.8),
                fill: isLocal ? 0xffff00 : 0xffffff,
                stroke: 0x000000,
                strokeThickness: 3,
                align: 'center',
                fontWeight: 'bold'
            });
            label.anchor.set(0.5);
            label.x = player.segments[0].x;
            label.y = player.segments[0].y - radius * 1.8;
            player.container.addChild(label);
        }
        
        player.container.x = 0;
        player.container.y = 0;
        player.container.visible = alive;
    }
    
    createParticles(x, y, color, count) {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 3 + 1;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                radius: Math.random() * 3 + 1,
                color: color,
                life: 30 + Math.random() * 20,
                maxLife: 30 + Math.random() * 20
            });
        }
    }
    
    createDeathEffect(x, y, color) {
        for (let i = 0; i < 50; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 8 + 2;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                radius: Math.random() * 5 + 2,
                color: color,
                life: 60 + Math.random() * 30,
                maxLife: 60 + Math.random() * 30
            });
        }
    }
    
    updateCoins() {
        if (this.coinDisplay) {
            this.coinDisplay.innerHTML = `
                <span class="coin-icon">🪙</span>
                <span class="coin-amount">${this.coins}</span>
            `;
        }
    }
    
    update() {
        if (this.localPlayerId) {
            const local = this.players.get(this.localPlayerId);
            if (local && local.alive && local.segments && local.segments.length > 0) {
                const head = local.segments[0];
                this.camera.x += (head.x - this.camera.x) * 0.08;
                this.camera.y += (head.y - this.camera.y) * 0.08;
            }
        }
        
        this.zoom += (this.targetZoom - this.zoom) * 0.05;
        
        const halfW = this.app.renderer.width / 2;
        const halfH = this.app.renderer.height / 2;
        this.stage.x = halfW - this.camera.x * this.zoom;
        this.stage.y = halfH - this.camera.y * this.zoom;
        this.stage.scale.set(this.zoom);
        
        for (const [id, player] of this.players) {
            if (player.alive) {
                this.updatePlayerSprite(player);
            } else if (player.container) {
                player.container.visible = false;
            }
        }
        
        this.drawFoods();
        this.drawParticles();
        this.sendMove();
    }
    
    drawFoods() {
        while (this.foodLayer.children.length > 0) {
            this.foodLayer.removeChildAt(0);
        }
        
        for (const food of this.foods) {
            const g = new PIXI.Graphics();
            const radius = food.radius || 6;
            const color = food.color || 0x4CAF50;
            
            g.beginFill(color);
            g.drawCircle(0, 0, radius);
            g.endFill();
            
            g.beginFill(0xffffff, 0.15);
            g.drawCircle(-radius * 0.2, -radius * 0.2, radius * 0.4);
            g.endFill();
            
            g.x = food.x;
            g.y = food.y;
            this.foodLayer.addChild(g);
        }
    }
    
    drawParticles() {
        while (this.particleLayer.children.length > 0) {
            this.particleLayer.removeChildAt(0);
        }
        
        for (const p of this.particles) {
            const g = new PIXI.Graphics();
            const alpha = Math.max(0, p.life / p.maxLife);
            g.beginFill(p.color, alpha);
            g.drawCircle(0, 0, Math.max(0.5, p.radius * alpha));
            g.endFill();
            g.x = p.x;
            g.y = p.y;
            this.particleLayer.addChild(g);
            
            p.x += p.vx || 0;
            p.y += p.vy || 0;
            if (p.vx !== undefined) p.vx *= 0.98;
            if (p.vy !== undefined) p.vy *= 0.98;
            p.life = (p.life || 0) - 1;
        }
        
        this.particles = this.particles.filter(p => (p.life || 0) > 0);
    }
    
    sendMove() {
        const now = Date.now();
        if (now - this.lastSendTime < this.sendInterval) return;
        this.lastSendTime = now;
        
        if (this.socket && this.socket.readyState === WebSocket.OPEN && this.localPlayerId) {
            const local = this.players.get(this.localPlayerId);
            if (local && local.alive && local.segments && local.segments.length > 0) {
                const rect = this.app.canvas.getBoundingClientRect();
                const mx = (this.mouseX || 0) - rect.left;
                const my = (this.mouseY || 0) - rect.top;
                
                const worldX = (mx - this.stage.x) / this.zoom;
                const worldY = (my - this.stage.y) / this.zoom;
                
                this.socket.send(JSON.stringify({
                    type: 'move',
                    x: worldX,
                    y: worldY
                }));
            }
        }
    }
    
    setupEvents() {
        if (!this.app || !this.app.canvas) return;
        
        this.app.canvas.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
        
        this.app.canvas.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? 0.9 : 1.1;
            this.targetZoom = Math.min(Math.max(this.targetZoom * delta, 0.1), 2);
        }, { passive: false });
        
        const zoomIn = document.querySelector('.zoom-in');
        const zoomOut = document.querySelector('.zoom-out');
        if (zoomIn) zoomIn.addEventListener('click', () => {
            this.targetZoom = Math.min(this.targetZoom * 1.1, 2);
        });
        if (zoomOut) zoomOut.addEventListener('click', () => {
            this.targetZoom = Math.max(this.targetZoom / 1.1, 0.1);
        });
        
        const setNicknameBtn = document.getElementById('setNicknameBtn');
        const nicknameInput = document.getElementById('nicknameInput');
        if (setNicknameBtn && nicknameInput) {
            setNicknameBtn.addEventListener('click', () => {
                const name = nicknameInput.value.trim();
                if (name && this.socket && this.socket.readyState === WebSocket.OPEN) {
                    this.socket.send(JSON.stringify({
                        type: 'setNickname',
                        nickname: name
                    }));
                    nicknameInput.value = '';
                    this.showStatus('İsim güncellendi! ✏️', '#4CAF50');
                }
            });
        }
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (this.chatInput && this.chatInput.style.display === 'block') {
                    this.sendChat();
                } else if (this.chatInput) {
                    this.chatInput.style.display = 'block';
                    this.chatInput.focus();
                }
            }
            if (e.key === 'Escape') {
                if (this.chatInput) {
                    this.chatInput.style.display = 'none';
                    this.chatInput.value = '';
                    this.chatInput.blur();
                }
            }
        });
        
        if (this.chatInput) {
            this.chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.sendChat();
            });
        }
        
        if (this.storeBtn) {
            this.storeBtn.addEventListener('click', () => {
                this.toggleStore(true);
            });
        }
    }
    
    setupStore() {
        const closeBtn = document.getElementById('closeStore');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.toggleStore(false));
        }

        if (this.storeModal) {
            this.storeModal.addEventListener('click', (e) => {
                if (e.target === this.storeModal) this.toggleStore(false);
            });
        }

        // Lobby close/start buttons
        if (this.closeLobbyBtn) this.closeLobbyBtn.addEventListener('click', () => this.toggleLobby(false));
        if (this.startBtn) this.startBtn.addEventListener('click', () => this.toggleLobby(false));

        document.querySelectorAll('.store-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                // deactivate all tabs in same parent
                const parent = tab.parentElement;
                parent.querySelectorAll('.store-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // choose target based on which tab was clicked (lobby or modal)
                const isInLobby = !!tab.closest('#lobby');
                const target = isInLobby ? this.lobbyContent : this.storeContent;
                this.renderStore(tab.dataset.category, target);
            });
        });
    }
    
    toggleStore(show) {
        if (this.storeModal) {
            this.storeModal.classList.toggle('active', show);
            if (show) this.renderStore();
        }
    }

    toggleLobby(show) {
        if (!this.lobby) return;
        this.lobby.style.display = show ? 'flex' : 'none';
        if (show) {
            // render lobby store
            this.renderStore('skins', this.lobbyContent);
        }
    }

    setupDevStore() {
        // only add dev store if server didn't provide one
        if (this.store) return;

        this.store = {
            skins: [
                { id: 'turkey', name: 'Türk Bayrağı', price: 0, icon: '🇹🇷', image: 'assets/turkey.svg' }
            ],
            trails: [],
            hats: [],
            flags: [
                { id: 'flag_turkey', name: 'Türkiye', price: 10000, icon: '🇹🇷', image: 'assets/turkey.svg' },
                { id: 'flag_usa', name: 'USA', price: 12000, icon: '🇺🇸', image: 'assets/turkey.svg' },
                { id: 'flag_uk', name: 'United Kingdom', price: 11000, icon: '🇬🇧', image: 'assets/turkey.svg' },
                { id: 'flag_germany', name: 'Germany', price: 10000, icon: '🇩🇪', image: 'assets/turkey.svg' },
                { id: 'flag_france', name: 'France', price: 10000, icon: '🇫🇷', image: 'assets/turkey.svg' },
                { id: 'flag_spain', name: 'Spain', price: 9000, icon: '🇪🇸', image: 'assets/turkey.svg' },
                { id: 'flag_italy', name: 'Italy', price: 9000, icon: '🇮🇹', image: 'assets/turkey.svg' },
                { id: 'flag_japan', name: 'Japan', price: 11000, icon: '🇯🇵', image: 'assets/turkey.svg' },
                { id: 'flag_russia', name: 'Russia', price: 10000, icon: '🇷🇺', image: 'assets/turkey.svg' }
            ]
        };

        if (!this.playerData) this.playerData = {};
        if (!Array.isArray(this.playerData.ownedSkins)) this.playerData.ownedSkins = ['turkey'];
        if (!Array.isArray(this.playerData.ownedTrails)) this.playerData.ownedTrails = [];
        if (!Array.isArray(this.playerData.ownedHats)) this.playerData.ownedHats = [];
        if (!Array.isArray(this.playerData.ownedFlags)) this.playerData.ownedFlags = [];
        if (!this.playerData.skin) this.playerData.skin = 'turkey';
        this.coins = this.coins || 0;
        if (this.coinDisplay) this.updateCoins();
    }
    
    renderStore(category = 'skins', target = null) {
        const targetEl = target || this.storeContent;
        if (!this.store || !targetEl) return;

        const categories = {
            skins: { data: this.store.skins, owned: this.playerData.ownedSkins, label: 'Deriler' },
            trails: { data: this.store.trails, owned: this.playerData.ownedTrails, label: 'İzler' },
            hats: { data: this.store.hats, owned: this.playerData.ownedHats, label: 'Şapkalar' },
            flags: { data: this.store.flags, owned: this.playerData.ownedFlags, label: 'Bayraklar' }
        };

        const cat = categories[category];
        if (!cat) return;

        let html = `<div class="store-items">`;

        for (const item of cat.data) {
            const owned = (cat.owned || []).includes(item.id);
            const equipped = this.playerData && this.playerData[category.slice(0, -1)] === item.id;
            let status = '';
            let statusClass = '';

            if (equipped) {
                status = '✅ Kullanılıyor';
                statusClass = 'equipped';
            } else if (owned) {
                status = '👤 Sahip';
                statusClass = 'owned';
            } else if (item.price === 0) {
                status = '🆓 Ücretsiz';
                statusClass = 'owned';
            } else if (this.coins >= item.price) {
                status = `🪙 ${item.price} Satın Al`;
                statusClass = 'buy';
            } else {
                status = `🔒 ${item.price}🪙`;
                statusClass = 'locked';
            }

            const canBuy = !owned && (item.price === 0 || this.coins >= item.price);
            const canEquip = owned && !equipped;

            const thumb = item.image ? `<img src="${item.image}" class="item-thumb" alt="${item.name}">` : `<span class="item-icon">${item.icon || '🐛'}</span>`;
            html += `
                <div class="store-item ${equipped ? 'equipped' : owned ? 'owned' : ''}" 
                     data-category="${category}" 
                     data-item="${item.id}"
                     data-canbuy="${canBuy}"
                     data-canequip="${canEquip}">
                    ${thumb}
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">${item.price > 0 ? `🪙 ${item.price}` : '🆓 Ücretsiz'}</div>
                    <div class="item-status ${statusClass}">${status}</div>
                </div>
            `;
        }

        html += `</div>`;
        targetEl.innerHTML = html;

        targetEl.querySelectorAll('.store-item').forEach(el => {
            el.addEventListener('click', () => {
                const category = el.dataset.category;
                const itemId = el.dataset.item;
                const canBuy = el.dataset.canbuy === 'true';
                const canEquip = el.dataset.canequip === 'true';

                if (canBuy) {
                    this.buyItem(category, itemId);
                } else if (canEquip) {
                    this.equipItem(category, itemId);
                }
            });
        });
    }
    
    buyItem(category, itemId) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify({
                type: 'buyItem',
                category: category,
                itemId: itemId
            }));
        }
    }
    
    equipItem(category, itemId) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify({
                type: 'equipItem',
                category: category,
                itemId: itemId
            }));
            if (category === 'skins') this.playerData.skin = itemId;
            else if (category === 'trails') this.playerData.trail = itemId;
            else if (category === 'hats') this.playerData.hat = itemId;
            else if (category === 'flags') {
                // equipping a flag sets it as the active skin
                this.playerData.skin = itemId;
                // ensure ownedFlags contains it
                if (!Array.isArray(this.playerData.ownedFlags)) this.playerData.ownedFlags = [];
                if (!this.playerData.ownedFlags.includes(itemId)) this.playerData.ownedFlags.push(itemId);
            }
            // refresh both modal and lobby stores if present
            this.renderStore(category, this.storeContent);
            if (this.lobbyContent) this.renderStore(category, this.lobbyContent);
        }
    }
    
    sendChat() {
        if (!this.chatInput) return;
        const message = this.chatInput.value.trim();
        if (message && this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify({
                type: 'chat',
                message: message
            }));
            this.chatInput.value = '';
            this.chatInput.style.display = 'none';
            this.chatInput.blur();
        }
    }
    
    addChatMessage(text, color = '#ffffff') {
        if (!this.chatMessages) return;
        const msg = document.createElement('div');
        msg.className = 'chat-msg';
        msg.innerHTML = text;
        msg.style.color = color;
        this.chatMessages.appendChild(msg);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        
        setTimeout(() => {
            if (msg.parentNode) msg.remove();
        }, 30000);
        
        while (this.chatMessages.children.length > 50) {
            this.chatMessages.removeChild(this.chatMessages.firstChild);
        }
    }
    
    updateScoreboard() {
        if (!this.scoreList) return;
        
        const sorted = Array.from(this.players.values())
            .filter(p => p.alive)
            .sort((a, b) => b.score - a.score)
            .slice(0, 20);
        
        let html = '';
        for (let i = 0; i < sorted.length; i++) {
            const p = sorted[i];
            const isLocal = p.id === this.localPlayerId;
            const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i+1}.`;
            
            html += `
                <div class="score-item ${isLocal ? 'local' : ''}">
                    <span class="rank">${medal}</span>
                    <span class="name ${isLocal ? 'local' : ''}">${p.nickname}</span>
                    <span class="score">${p.score}</span>
                    <span class="length">📏${p.length || 5}</span>
                    <span class="kills">💀${p.kills || 0}</span>
                </div>
            `;
        }
        
        if (sorted.length === 0) {
            html = '<div style="color:#666;text-align:center;padding:20px;">Oyuncu bekleniyor...</div>';
        }
        
        this.scoreList.innerHTML = html;
    }
}

// Oyunu Başlat
const game = new WormGame();
console.log('🐛 Wormate.io yükleniyor...');