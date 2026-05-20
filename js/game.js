document.documentElement.insertAdjacentHTML("afterbegin", "\n    <style>\n        /* Preloader en pantalla completa */\n        .fixed-background {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background-color: black;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            z-index: 99999;\n            transition: opacity 0.5s ease-out;\n        }\n\n        /* Imagen de fondo */\n        .background-image {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            background: url('https://i.imgur.com/oXntzBc.jpeg') no-repeat center center/cover;\n            background-size: cover;\n            background-position: center;\n            opacity: 0.3;\n            filter: blur(5px) opacity(1.5);\n        }\n\n        /* Estilos del logo */\n        .logo {\n            width: 200px;\n            animation: pulse 4s infinite;\n            margin-bottom: 70px;\n        }\n\n        /* Animación de pulso */\n        @keyframes pulse {\n            0% { transform: scale(2); opacity: 1; }\n            50% { transform: scale(2.1); opacity: 0.8; }\n            100% { transform: scale(2); opacity: 1; }\n        }\n\n        /* Barra de carga */\n        .progress-bar-container {\n            width: 50%;\n            height: 10px;\n            background: rgba(255, 255, 255, 0.2);\n            border-radius: 5px;\n            overflow: hidden;\n            position: relative;\n        }\n\n        .progress-bar {\n            width: 0%;\n            height: 100%;\n            background: #252535;\n            transition: width 2s linear;\n        }\n\n        /* GIF de rotación */\n        .rotate-gif {\n            display: none; /* Oculto por defecto */\n            margin-top: 20px;\n            width: 150px;\n        }\n\n        /* Corazones */\n        .hearts {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -100%);\n            display: flex;\n            gap: 10px;\n        }\n\n        .one, .two, .three, .four, .five {\n            background-color: #252535;\n            display: inline-block;\n            height: 10px;\n            width: 10px;\n            transform: rotate(-45deg);\n            position: relative;\n        }\n\n        .one:before, .one:after,\n        .two:before, .two:after,\n        .three:before, .three:after,\n        .four:before, .four:after,\n        .five:before, .five:after {\n            content: \"\";\n            background-color: #252535;\n            border-radius: 50%;\n            height: 10px;\n            width: 10px;\n            position: absolute;\n        }\n\n        .one:before, .two:before, .three:before, .four:before, .five:before {\n            top: -5px;\n            left: 0;\n        }\n\n        .one:after, .two:after, .three:after, .four:after, .five:after {\n            left: 5px;\n            top: 0;\n        }\n\n        /* Animación de los corazones */\n        @keyframes heart {\n            0% {\n                transform: translateY(0) rotate(-45deg) scale(0.3);\n                opacity: 1;\n            }\n            100% {\n                transform: translateY(-150px) rotate(-45deg) scale(1.3);\n                opacity: 0;\n            }\n        }\n\n        .one { animation: heart 1s ease-out infinite; }\n        .two { animation: heart 2s ease-out infinite; }\n        .three { animation: heart 1.5s ease-out infinite; }\n        .four { animation: heart 2.3s ease-out infinite; }\n        .five { animation: heart 1.7s ease-out infinite; }\n    </style>\n\n    <div class=\"fixed-background\" id=\"loading-screen\">\n        <div class=\"background-image\"></div>\n        <img src=\"https://i.imgur.com/jXzoG5D.png\" alt=\"server logo\" class=\"logo\">\n\n        <div class=\"hearts\">\n            <div class=\"one\"></div>\n            <div class=\"two\"></div>\n            <div class=\"three\"></div>\n            <div class=\"four\"></div>\n            <div class=\"five\"></div>\n        </div>\n\n        <div class=\"progress-bar-container\">\n            <div class=\"progress-bar\" id=\"progress-bar\"></div>\n        </div>\n\n        <!-- GIF de rotación para móviles en vertical -->\n        <img src=\"https://i.imgur.com/CVpwetK.gif\" alt=\"Rotar el dispositivo\" class=\"rotate-gif\" id=\"rotate-gif\">\n    </div>\n");
window._alreadyScaledWormTextures = window._alreadyScaledWormTextures || new Set();
const resolutionLimit = 0.025;
const scaleFactor = 0.5;
function optimizarTextura(p) {
  if (!p || !p.Hc || !p.Hc.baseTexture) {
    console.warn("⚠️ Textura inválida o sin baseTexture.");
    return;
  }
  const v = p.Hc.baseTexture;
  const v2 = v.cacheId || v.resource?.url || v.resource?.source?.src || "";
  if (!v2 || window._alreadyScaledWormTextures.has(v2)) {
    return;
  }
  try {
    if (v2.includes("100300_portions.png") && v.resolution > resolutionLimit) {
      v.resolution = resolutionLimit;
      console.log("🛠️ Resolución ajustada (" + v.resolution + "): " + v2);
    }
    if ("mipmap" in v) {
      v.mipmap = false;
    } else if ("mipmap" in v.baseTexture) {
      v.baseTexture.mipmap = false;
    }
    if ("anisotropicLevel" in v) {
      v.anisotropicLevel = 1;
    } else if ("anisotropicLevel" in v.baseTexture) {
      v.baseTexture.anisotropicLevel = 1;
    }
    const vLN1024 = 1024;
    const vLN10242 = 1024;
    if (v.width > vLN1024 || v.height > vLN10242) {
      const v3 = vLN1024 / v.width;
      const v4 = vLN10242 / v.height;
      const v5 = Math.min(v3, v4);
      if (v.setSize) {
        v.setSize(v.width * v5, v.height * v5);
      } else if (v.resource?.source instanceof HTMLImageElement) {
        v.resource.source.width *= v5;
        v.resource.source.height *= v5;
      }
      console.log("🔧 Imagen escalada (" + Math.round(v5 * 100) + "%): " + v2);
    }
    if (v.isPowerOfTwo && !v2.includes("atlas") && !v2.includes("sprite")) {
      v.isPowerOfTwo = false;
    }
    if (v.destroyed || v.resource?.destroyed) {
      v.destroy(true);
      console.log("🗑️ Textura destruida por estado inválido: " + v2);
    }
    window._alreadyScaledWormTextures.add(v2);
    console.log("✅ Optimización completa: " + v2);
  } catch (e2) {
    console.error("❌ Error al optimizar textura: " + v2, e2);
  }
}
function checkOrientation() {
  const v6 = document.getElementById("rotate-gif");
  if (window.matchMedia("(orientation: portrait)").matches) {
    v6.style.display = "block";
  } else {
    v6.style.display = "none";
  }
}
window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
window.onload = function () {
  document.getElementById("progress-bar").style.width = "100%";
  setTimeout(() => {
    document.getElementById("loading-screen").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("loading-screen").remove();
    }, 500);
  }, 2000);
};
var __extends = this && this.__extends || function () {
  var vF = function (p2, p3) {
    vF = Object.setPrototypeOf || {
      "__proto__": []
    } instanceof Array && function (p4, p5) {
      p4.__proto__ = p5;
    } || function (p6, p7) {
      for (var v7 in p7) {
        if (Object.prototype.hasOwnProperty.call(p7, v7)) {
          p6[v7] = p7[v7];
        }
      }
    };
    return vF(p2, p3);
  };
  return function (p8, p9) {
    if (typeof p9 !== "function" && p9 !== null) {
      throw new TypeError("Class extends value " + String(p9) + " is not a constructor or null");
    }
    vF(p8, p9);
    function f() {
      this.constructor = p8;
    }
    p8.prototype = p9 === null ? Object.create(p9) : (f.prototype = p9.prototype, new f());
  };
}();
var Direction;
(function (p10) {
  p10.LEFT = "left";
  p10.TOP = "top";
  p10.BOTTOM = "bottom";
  p10.RIGHT = "right";
  p10.TOP_LEFT = "top_left";
  p10.TOP_RIGHT = "top_right";
  p10.BOTTOM_LEFT = "bottom_left";
  p10.BOTTOM_RIGHT = "bottom_right";
})(Direction = {});
var Joystick = function (p13) {
  __extends(f2, p13);
  function f2(p18) {
    var v24 = p13.call(this) || this;
    v24.outerRadius = 0;
    v24.innerRadius = 0;
    v24.innerAlphaStandby = 0.5;
    v24.settings = Object.assign({
      outerScale: {
        x: 1,
        y: 1
      },
      innerScale: {
        x: 1,
        y: 1
      }
    }, p18);
    if (!v24.settings.outer) {
      var v25 = new PIXI.Graphics();
      v25.beginFill(16711680);
      v25.drawCircle(0, 0, 60);
      v25.alpha = 0.5;
      v24.settings.outer = v25;
    }
    if (!v24.settings.inner) {
      var v26 = new PIXI.Graphics();
      v26.beginFill(16711680);
      v26.drawCircle(0, 0, 35);
      v26.alpha = v24.innerAlphaStandby;
      v24.settings.inner = v26;
    }
    v24.initialize();
    return v24;
  }
  f2.prototype.initialize = function () {
    this.outer = this.settings.outer;
    this.inner = this.settings.inner;
    this.outer.scale.set(this.settings.outerScale.x, this.settings.outerScale.y);
    this.inner.scale.set(this.settings.innerScale.x, this.settings.innerScale.y);
    if ("anchor" in this.outer) {
      this.outer.anchor.set(0.5);
    }
    if ("anchor" in this.inner) {
      this.inner.anchor.set(0.5);
    }
    this.addChild(this.outer);
    this.addChild(this.inner);
    this.outerRadius = this.width / 2.5;
    this.innerRadius = this.inner.width / 2;
    this.bindEvents();
  };
  f2.prototype.bindEvents = function () {
    var vThis = this;
    this.interactive = true;
    var v27 = false;
    var v28;
    var v29;
    var v30;
    this.onDragStart = function (p19) {
      var v31;
      var v32;
      v28 = p19;
      v30 = this.toLocal(v28);
      v27 = true;
      vThis.inner.alpha = 1;
      if ((v32 = (v31 = vThis.settings).onStart) === null || v32 === undefined) {
        undefined;
      } else {
        v32.call(v31);
      }
    };
    this.onDragEnd = function (p20) {
      var v33;
      var v34;
      if (v27 == false) {
        return;
      }
      vThis.inner.position.set(0, 0);
      v27 = false;
      vThis.inner.alpha = vThis.innerAlphaStandby;
      if ((v34 = (v33 = vThis.settings).onEnd) === null || v34 === undefined) {
        undefined;
      } else {
        v34.call(v33);
      }
    };
    this.onDragMove = function (p21) {
      this.outerRadius = this.width / 2.5;
      this.innerRadius = this.inner.width / 2;
      var v35;
      var v36;
      var v37;
      var v38;
      var v39;
      var v40;
      if (v27 == false) {
        return;
      }
      var v41 = this.toLocal(p21);
      var v42 = v41.x - v30.x;
      var v43 = v41.y - v30.y;
      var v44 = new PIXI.Point(0, 0);
      var vLN02 = 0;
      if (v42 == 0 && v43 == 0) {
        return;
      }
      var vLN03 = 0;
      if (v42 * v42 + v43 * v43 >= vThis.outerRadius * vThis.outerRadius) {
        vLN03 = vThis.outerRadius;
      } else {
        vLN03 = vThis.outerRadius - vThis.innerRadius;
      }
      var v45 = Direction.LEFT;
      if (v42 == 0) {
        if (v43 > 0) {
          v44.set(0, v43 > vThis.outerRadius ? vThis.outerRadius : v43);
          vLN02 = 270;
          v45 = Direction.BOTTOM;
        } else {
          v44.set(0, -(Math.abs(v43) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v43)));
          vLN02 = 90;
          v45 = Direction.TOP;
        }
        vThis.inner.position.set(v44.x, v44.y);
        v29 = vThis.getPower(v44);
        if ((v36 = (v35 = vThis.settings).onChange) === null || v36 === undefined) {
          undefined;
        } else {
          v36.call(v35, {
            angle: vLN02,
            direction: v45,
            power: v29
          });
        }
        return;
      }
      if (v43 == 0) {
        if (v42 > 0) {
          v44.set(Math.abs(v42) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v42), 0);
          vLN02 = 0;
          v45 = Direction.LEFT;
        } else {
          v44.set(-(Math.abs(v42) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v42)), 0);
          vLN02 = 180;
          v45 = Direction.RIGHT;
        }
        vThis.inner.position.set(v44.x, v44.y);
        v29 = vThis.getPower(v44);
        if ((v38 = (v37 = vThis.settings).onChange) === null || v38 === undefined) {
          undefined;
        } else {
          v38.call(v37, {
            angle: vLN02,
            direction: v45,
            power: v29
          });
        }
        return;
      }
      var v46 = Math.abs(v43 / v42);
      var v47 = Math.atan(v46);
      vLN02 = v47 * 180 / Math.PI;
      var vLN04 = 0;
      var vLN05 = 0;
      if (v42 * v42 + v43 * v43 >= vThis.outerRadius * vThis.outerRadius) {
        vLN04 = vThis.outerRadius * Math.cos(v47);
        vLN05 = vThis.outerRadius * Math.sin(v47);
      } else {
        vLN04 = Math.abs(v42) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v42);
        vLN05 = Math.abs(v43) > vThis.outerRadius ? vThis.outerRadius : Math.abs(v43);
      }
      if (v43 < 0) {
        vLN05 = -Math.abs(vLN05);
      }
      if (v42 < 0) {
        vLN04 = -Math.abs(vLN04);
      }
      if (v42 > 0 && v43 < 0) {} else if (v42 < 0 && v43 < 0) {
        vLN02 = 180 - vLN02;
      } else if (v42 < 0 && v43 > 0) {
        vLN02 = vLN02 + 180;
      } else if (v42 > 0 && v43 > 0) {
        vLN02 = 360 - vLN02;
      }
      v44.set(vLN04, vLN05);
      v29 = vThis.getPower(v44);
      v45 = vThis.getDirection(v44);
      vThis.inner.position.set(v44.x, v44.y);
      if ((v40 = (v39 = vThis.settings).onChange) === null || v40 === undefined) {
        undefined;
      } else {
        v40.call(v39, {
          angle: vLN02,
          direction: v45,
          power: v29
        });
      }
    };
  };
  f2.prototype.getPower = function (p22) {
    var v48 = p22.x - 0;
    var v49 = p22.y - 0;
    return Math.min(1, Math.sqrt(v48 * v48 + v49 * v49) / this.outerRadius);
  };
  f2.prototype.getDirection = function (p23) {
    var v50 = Math.atan2(p23.y, p23.x);
    if (v50 >= -Math.PI / 8 && v50 < 0 || v50 >= 0 && v50 < Math.PI / 8) {
      return Direction.RIGHT;
    } else if (v50 >= Math.PI / 8 && v50 < Math.PI * 3 / 8) {
      return Direction.BOTTOM_RIGHT;
    } else if (v50 >= Math.PI * 3 / 8 && v50 < Math.PI * 5 / 8) {
      return Direction.BOTTOM;
    } else if (v50 >= Math.PI * 5 / 8 && v50 < Math.PI * 7 / 8) {
      return Direction.BOTTOM_LEFT;
    } else if (v50 >= Math.PI * 7 / 8 && v50 < Math.PI || v50 >= -Math.PI && v50 < Math.PI * -7 / 8) {
      return Direction.LEFT;
    } else if (v50 >= Math.PI * -7 / 8 && v50 < Math.PI * -5 / 8) {
      return Direction.TOP_LEFT;
    } else if (v50 >= Math.PI * -5 / 8 && v50 < Math.PI * -3 / 8) {
      return Direction.TOP;
    } else {
      return Direction.TOP_RIGHT;
    }
  };
  return f2;
}(PIXI.Container);
function _typeof(p24) {
  '@babel/helpers - typeof';

  return (_typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p25) {
    return typeof p25;
  } : function (p26) {
    if (p26 && typeof Symbol == "function" && p26.constructor === Symbol && p26 !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof p26;
    }
  })(p24);
}
var lenguaje = {
  es: {
    opciones: "opciones",
    zoomVelocidad: "Zoom Velocidad",
    anchoPotenciador: "ancho del potenciador",
    auraPotenciador: "aura del potenciador",
    anchoComida: "ancho de la comida",
    brilloComida: "brillo de la comida",
    fondo: "fondo Solido",
    laser: "laser de cabeza",
    sectores: "sectores",
    colorJuego: "color del juego",
    colorLaser: "color del laser",
    colorBorde: "color del borde",
    copiar: "copiar",
    fondos: "fondos",
    fondo0: "por defecto",
    fondo1: "espacio",
    fondo2: "espacio 2",
    fondo3: "azul",
    fondo4: "espacio 3",
    skinVisible: "SkinVisible(Para publico)",
    soundTuto1: "descargar sonido",
    soundTuto2: "subir sonido",
    soundTuto3: "sonido link cabeza",
    soundTuto4: "sonido link 10cabezas"
  },
  en: {
    opciones: "settings",
    zoomVelocidad: "Zoom Speed",
    anchoPotenciador: "booster width",
    auraPotenciador: "power up glow",
    anchoComida: "size of food",
    brilloComida: "food shine",
    fondo: "Solid background",
    laser: "Center laser",
    sectores: "sectors",
    colorJuego: "game color",
    colorLaser: "laser color",
    colorBorde: "border color",
    copiar: "copy",
    fondos: "background",
    fondo0: "default",
    fondo1: "Green",
    fondo2: "Blue",
    fondo3: "Blue Black",
    fondo4: "Blue Light",
    skinVisible: "SkinVisible(For public)",
    soundTuto1: "download sounds",
    soundTuto2: "turn up sound",
    soundTuto3: "sound link head",
    soundTuto4: "sound link 10heads"
  },
  uk: {
    opciones: "????????????",
    anchoPotenciador: "?????? ???????????",
    auraPotenciador: "????? ???????????",
    anchoComida: "?????? ???",
    brilloComida: "????? ???",
    fondo: "??????? ???",
    laser: "??????????? ?????",
    sectores: "???????",
    colorJuego: "????? ???",
    colorLaser: "????? ??????",
    colorBorde: "????? ????",
    copiar: "?????????",
    fondos: "????",
    fondo0: "?? ?????????????",
    fondo1: "??????",
    fondo2: "?????? 2",
    fondo3: "?????",
    fondo4: "?????? 3",
    skinVisible: "SkinVisible(??? ???????)",
    soundTuto1: "??????????? ????",
    soundTuto2: "??????????? ????",
    soundTuto3: "???? ??? ??????",
    soundTuto4: "???? ??? 10 ?????"
  }
};
const _wrmxt = {
  isSkinCustom(p27) {
    var v51 = /[a-zA-Z]/;
    return typeof p27 === "string" && v51.test(p27);
  },
  testSkinCustom: function (p28) {
    if (_wrmxt.isSkinCustom(p28)) {
      return 34 || 33;
    } else {
      return p28;
    }
  },
  testSkinMod: function (p29) {
    return p29 >= 399 && p29 < 999;
  },
  testWear: function (p30) {
    return p30 >= 399 && p30 < 999;
  },
  isNumberValid: function (p31) {
    return p31 !== "" && p31 !== null && p31 !== undefined && !isNaN(p31);
  },
  validInput: function (p32) {
    if (!_wrmxt.testSkinMod(p32) && !_wrmxt.isSkinCustom(p32)) {
      return p32;
    }
    try {
      let v52 = $("#inputReplaceSkin").val();
      return encodeURI(_wrmxt.isNumberValid(v52) ? v52 : 35);
    } catch (e4) {
      return encodeURI(35);
    }
  },
  aload: false,
  aId: 0
};
let lastSendTime = Date.now();
const setIdReplaceSkin = function (p33) {
  theoKzObjects.idReplaceSkin = _wrmxt.isNumberValid(p33.value) ? p33.value : 35;
  localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
};
var intervalID = null;
var isRunning = false;
var initialInterval = 55;
var cycleCounter = 1;
var isIncrementing = true;
let pixi = new Function("return PIXI;")();
let girotexture = pixi.Texture.from("https://i.imgur.com/0aN5Zek.png");
let ungirotexture = pixi.Texture.from("https://i.imgur.com/12MgJyy.png");
let explotWtexture = pixi.Texture.from("https://i.imgur.com/DbWbUxD.png");
var keys = {
  zoom: "z",
  restart: "r",
  giro: "s",
  wormExplot: "x",
  laserHS: "l",
  sectores: "q",
  background: "c",
  noSkin: "f",
  noAuras: "g"
};
function cambiarKey(p34, p35) {
  if (keys.hasOwnProperty(p34)) {
    keys[p34] = p35;
  }
}
let theoObjects = {
  teamColor: "FFFFFF",
  laserColor: "FFFFFF",
  colorFondo: "0D0400",
  colorBorde: "FF0000",
  hsTextColor: "FFFFFF",
  killTextColor: "FFFFFF",
  minimapBorderColor: "FFFFFF"
};
var zw_updatezoom;
var zw_multiplier;
var zw_zoomtext;
var crearRegion2;
var qkq2089cen = null;
var zw_servertext;
var zw_serverping;
let ping;
var zw_serverfps;
let canSendMessage = true;
var zw_TopHS_RecordHs;
var zw_Top3HS_RecordHs;
var zw_TopFriends_list;
var zw_TopHS_BestPlayers;
var zw_MinimapTeamCode;
var zw_MinimapSombra;
var zw_lastserver;
var zw_toplist;
var zw_Background;
var ctxHeadshotLine;
var zw_zoomplustexture;
var zw_zoomsubtracttexture;
var zw_giroplustexture;
var zw_girosubtracttexture;
var zw_explotWubtracttexture;
var zw_settingsblockbadwords;
var zw_selectedbackground;
var zw_joystick;
var zw_mobilecontrol;
var zw_mobilecontrol2;
var zw_mobilecontroltextures;
var zw_mobilepredictiontextures;
var zw_mobileprediction;
var zw_joysticks;
var zw_mobilearrowtexture;
var zw_mobilepeedtexture;
var zw_mobilefullscreenstatus;
var zw_mobilecheck;
zw_multiplier = 1;
let frameTimes = [];
let lastFrameTime = performance.now();
var killtext;
var hstext;
var circle;
var backgrounds = ["https://asserts.wormworld.io/backgrounds/bkgnd0.png", "https://asserts.wormworld.io/backgrounds/bkgnd8.png", "https://asserts.wormworld.io/backgrounds/bkgnd9.png", "https://asserts.wormworld.io/backgrounds/bkgnd10.png", "https://asserts.wormworld.io/backgrounds/bkgnd6.png", "https://asserts.wormworld.io/backgrounds/bkgnd11.png", "https://asserts.wormworld.io/backgrounds/bg_sky_1.png", "https://asserts.wormworld.io/backgrounds/bg_sky_2.png", "https://asserts.wormworld.io/backgrounds/bg_sky_3.png", "https://asserts.wormworld.io/backgrounds/bg_sky_4.png", "https://asserts.wormworld.io/backgrounds/bg_sky_5.png", "https://asserts.wormworld.io/backgrounds/arena01.png", "https://asserts.wormworld.io/backgrounds/arena02.png", "https://asserts.wormworld.io/backgrounds/arena03.png", "https://asserts.wormworld.io/backgrounds/arena04.png"];
let currentIndex = localStorage.getItem("selectedBackground") ? parseInt(localStorage.getItem("selectedBackground")) : 0;
var fonts = ["Arial, sans-serif", "Verdana, sans-serif", "Tahoma, sans-serif", "'Courier New', monospace", "'Georgia', serif", "'Times New Roman', serif", "'Comic Sans MS', cursive", "'Impact', sans-serif", "'Lucida Console', monospace", "'Trebuchet MS', sans-serif"];
let currentFontIndex = localStorage.getItem("selectedFont") ? parseInt(localStorage.getItem("selectedFont")) : 0;
function getPingColor(p36) {
  if (p36 <= 50) {
    return "#00FF00";
  }
  if (p36 <= 80) {
    return "#ADFF2F";
  }
  if (p36 <= 120) {
    return "#FFFF00";
  }
  if (p36 <= 180) {
    return "#FFA500";
  }
  if (p36 <= 250) {
    return "#FF4500";
  }
  return "#FF0000";
}
function getFPSColor(p37) {
  if (p37 >= 60) {
    return "#00FF00";
  }
  if (p37 >= 50) {
    return "#ADFF2F";
  }
  if (p37 >= 40) {
    return "#FFFF00";
  }
  if (p37 >= 30) {
    return "#FFA500";
  }
  if (p37 >= 20) {
    return "#FF4500";
  }
  return "#FF0000";
}
window.onwheel = p38 => {
  if (p38.deltaY > 0) {
    zw_updatezoom(Math.max(zw_multiplier - parseFloat(theoKzObjects.zoomSpeed) * 0.75, 0.5));
  } else {
    zw_updatezoom(Math.min(zw_multiplier + parseFloat(theoKzObjects.zoomSpeed) * 1.05, 50));
  }
};
var zw_mobilecheck = function () {
  var v54 = new Function("return RegExp;")();
  return new v54("iPhone|iPad|iPod|Android", "i").test(navigator.userAgent);
};
var zw_updatezoom = function (p39) {
  zw_multiplier = p39;
  var vParseFloat = parseFloat(zw_multiplier.toFixed(2));
  if (Math.abs(vParseFloat) < 0.01) {
    vParseFloat = 0;
  } else if (Math.abs(vParseFloat - 1) < 0.01) {
    vParseFloat = 1;
  }
  zw_zoomtext.text = vParseFloat + "x";
};
var inputReplaceSkin = localStorage.getItem("inputReplaceSkin");
var PilotoAutomatico = null;
var isPlaying = false;
window.keyMove = 81;
var theoEvents = {
  eventoPrincipal: null,
  joystick: {
    positionMode: "L",
    checked: true,
    size: 90,
    mode: "dynamic",
    position: {
      left: "110px",
      bottom: "110px"
    },
    color: "#222",
    pxy: 110
  }
};
var idiomaActual = window.location.href.includes("/es") ? "es" : window.location.href.includes("/uk") ? "uk" : "en";
let lastHsTextColor = null;
let lastKillTextColor = null;
let lastMinimapBorderColor = null;
let frameCount = 0;
let totalFPSTime = 0;
const FPS_AVERAGE_WINDOW = 20;
const TWO_PI = Math.PI * 2;
if (typeof window.coords === "undefined") {
  window.coords = {
    playerX: 0,
    playerY: 0
  };
}
var theoKzObjects = {
  FB_UserID: "",
  fps: false,
  ping: false,
  chngBotSkins: false,
  chngPersonsSkins: false,
  minimapTeamcod: false,
  hideYouNameInMinimap: false,
  Incognito: false,
  laserHS: false,
  spawnInfinity: false,
  backgroundSolid: false,
  sectores: false,
  visiblePowersAll: false,
  speed_zigzag: true,
  timerSpZg: false,
  zoomSpeed: localStorage.getItem("zoomSpeed") || 1,
  PotenciadorSize: localStorage.getItem("PotenciadorSize") || 2,
  PotenciadorAura: localStorage.getItem("PotenciadorAura") || 1.2,
  ComidaShadow: localStorage.getItem("ComidaShadow") || 2,
  ComidaSize: localStorage.getItem("ComidaSize") || 2,
  mouseDelay: localStorage.getItem("mouseDelay") || 20,
  smoothCamera: localStorage.getItem("smoothCamera") || 0.5,
  eat_animation: 0.0025,
  PortionSize: localStorage.PotenciadorSize || 2,
  PortionAura: localStorage.PotenciadorAura || 1.2,
  PortionTransparent: 0.8,
  FoodTransparent: 0.3,
  showTeamList: true,
  animationHeadshot: true,
  top8: true,
  killFeed: false,
  noAuras: true,
  noSkin: true,
  KeyCodeRespawn: localStorage.KeyRespawn || 82,
  KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
  AbilityZ: false,
  dead: false,
  FoodShadow: localStorage.ComidaShadow || 2,
  FoodSize: localStorage.ComidaSize || 2,
  headshot: 0,
  idReplaceSkin: 35,
  visibleSkin: [],
  pL: [],
  gamePad: theoEvents.joystick,
  mobile: false,
  loading: false,
  kill: 0,
  totalKills: 0,
  totalHeadshots: 0,
  adblock: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4
};
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && saveGameLocal !== "null") {
  let t = JSON.parse(saveGameLocal);
  for (let e in t) {
    theoKzObjects[e] = t[e];
  }
}
theoKzObjects.loading = true;
let soundEnabled;
var zwormData = {
  id_user: "",
  nickname: "zworm",
  enemyNameHs: "zworm",
  teamCode: "",
  playerX: 0,
  playerY: 0,
  hs: 0,
  kill: 0,
  message: "",
  teamColor: localStorage.getItem("teamColor") || "0xffffff",
  wssServer: ""
};
const socket = new WebSocket("wss://zworm.xyz:9800");
const gameState = {
  players: new Map()
};
let lastUpdate = 0;
const UPDATE_INTERVAL = 50;
socket.addEventListener("open", () => console.log("Conectado al servidor WebSocket"));
socket.addEventListener("close", () => console.log("Desconectado del servidor WebSocket"));
socket.addEventListener("message", async p40 => {
  try {
    const v55 = typeof p40.data === "string" ? JSON.parse(p40.data) : JSON.parse(await p40.data.text());
    handleMessage(v55);
  } catch (e6) {
    console.error("Error al procesar el mensaje:", e6);
  }
});
function handleMessage(p41) {
  if (!p41 || p41.wssServer !== zwormData.wssServer) {
    return;
  }
  if (p41.id_user && ["gg_107164783301809303612", "gg_107696732696574095850", "gg_110413852592088957484"].includes(p41.id_user)) {
    createServerMessage("[Zworm OWNER]", p41.message);
    console.log("Servidor " + p41.id_user + " ha enviado un mensaje: " + p41.message);
  }
  switch (p41.type) {
    case "initialState":
      handlers.initialState(p41.players);
      break;
    case "playerUpdate":
      handlers.playerUpdate(p41);
      break;
    case "hsKillUpdate":
      handlers.hsKillUpdate(p41);
      break;
    case "playerDeath":
      handlers.playerDeath(p41);
      break;
    case "playerDisconnect":
      removePlayer(p41.id);
      break;
    default:
      console.log("Mensaje desconocido:", p41);
  }
}
function getUserData(p42) {
  return clientes.clientesActivos.find(p43 => p43.client_ID === p42);
}
let messageQueue = [];
let isProcessingQueue = false;
function sendMessage() {
  if (!canSendMessage) {
    console.log("⏳ Espera antes de enviar otro mensaje...");
    return;
  }
  const v56 = $("#chat-input").val().trim();
  if (!v56) {
    return;
  }
  canSendMessage = false;
  setTimeout(() => canSendMessage = true, 1000);
  const v57 = zwormData.nickname.substring(0, 16);
  const vGetUserData = getUserData(zwormData.id_user);
  const vO = {
    type: "chatMessage",
    id_user: zwormData.id_user,
    nickname: v57,
    message: v56,
    wssServer: zwormData.wssServer,
    color: vGetUserData?.color || "rgba(255, 255, 255, 0.1)",
    image: vGetUserData?.image || "default_icon.png"
  };
  messageQueue.push(vO);
  processMessageQueue();
  displayMessage(v57, v56, zwormData.id_user, vO.color, vO.image, true);
  $("#chat-input").val("");
}
async function processMessageQueue() {
  if (isProcessingQueue || messageQueue.length === 0) {
    return;
  }
  isProcessingQueue = true;
  while (messageQueue.length > 0) {
    const v58 = messageQueue.shift();
    try {
      socket.send(JSON.stringify(v58));
      await new Promise(p44 => setTimeout(p44, 50));
    } catch (e7) {
      console.error("Error enviando mensaje:", e7);
    }
  }
  isProcessingQueue = false;
}
function displayMessage(p45, p46, p47, p48, p49, p50 = false) {
  const v59 = p48 || "rgba(255, 255, 255, 0.1)";
  const v60 = p49 ? "<img src=\"" + p49 + "\" alt=\"User Icon\" style=\"width: 20px; height: 20px; margin-right: 5px; border-radius: 50%;\">" : "";
  const v61 = "\n        <div class=\"chat-message\" style=\"background: " + v59 + ";\">\n            " + v60 + "\n            <strong id=\"" + p47 + "\" style=\"color: " + (p50 ? "lightblue" : "white") + "\">" + p45 + ":</strong>\n            <span>" + p46 + "</span>\n        </div>\n    ";
  $("#chat-history").append(v61).scrollTop($("#chat-history")[0].scrollHeight);
}
const handlers = {
  initialState: p51 => {
    p51.forEach(p52 => gameState.players.set(p52.id_user, p52));
    console.log("Estado inicial recibido:", p51);
  },
  playerUpdate: p53 => {
    gameState.players.set(p53.id_user, {
      ...p53
    });
    updateTop8Hs();
    if (p53.teamCode && p53.teamCode === zwormData.teamCode) {
      createTeamUbication(p53.teamCode, p53.teamColor);
      createTeamMessage(p53.teamCode, p53.nickname, p53.message);
    }
  },
  hsKillUpdate: p54 => {
    const v62 = gameState.players.get(p54.id_user);
    if (v62) {
      v62.hskill = p54.hskill;
    } else {
      gameState.players.set(p54.id_user, {
        ...p54,
        position: {
          x: 0,
          y: 0
        }
      });
    }
    updateTop8Hs();
  },
  playerDeath: p55 => {
    gameState.players.delete(p55.id_user);
    console.log("El jugador " + p55.nickname + " ha muerto.");
    updateTop8Hs();
    clearTeamUbication();
  }
};
Object.assign(window, handlers);
let pendingUpdate = null;
let updateTimeout = null;
function sendUpdate(p56, p57 = {}) {
  const vO2 = {
    type: p56,
    id_user: zwormData.id_user,
    nickname: zwormData.nickname,
    enemyNameHs: zwormData.enemyNameHs,
    hskill: {
      hs: zwormData.hs,
      kill: zwormData.kill
    },
    position: {
      x: zwormData.playerX,
      y: zwormData.playerY
    },
    message: zwormData.message,
    teamCode: zwormData.teamCode,
    teamColor: zwormData.teamColor,
    wssServer: zwormData.wssServer,
    ...p57
  };
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(vO2));
  }
}
function sendPlayerUpdate(p58, p59) {
  const v63 = Date.now();
  if (v63 - lastUpdate < UPDATE_INTERVAL) {
    if (pendingUpdate) {
      clearTimeout(updateTimeout);
    }
    pendingUpdate = {
      x: p58,
      y: p59
    };
    updateTimeout = setTimeout(() => {
      if (pendingUpdate) {
        zwormData.playerX = pendingUpdate.x;
        zwormData.playerY = pendingUpdate.y;
        sendUpdate("playerUpdate", {
          position: pendingUpdate
        });
        pendingUpdate = null;
        lastUpdate = Date.now();
      }
    }, UPDATE_INTERVAL - (v63 - lastUpdate));
    return;
  }
  zwormData.playerX = p58;
  zwormData.playerY = p59;
  sendUpdate("playerUpdate", {
    position: {
      x: p58,
      y: p59
    }
  });
  lastUpdate = v63;
}
function sendPlayerDeath(p60, p61) {
  sendUpdate("playerDeath", {
    hskill: {
      hs: p60,
      kill: p61
    }
  });
}
function sendHSKillUpdate(p62, p63) {
  sendUpdate("hsKillUpdate", {
    hskill: {
      hs: p62,
      kill: p63
    }
  });
}
let clientes = {
  clientesVencidos: [],
  clientesActivos: []
};
let clientsSkins = {
  clientsSkinsVencidos: [],
  clientsSkinsActivos: []
};
var TIME = new Date().getTime();
async function loadUsers() {
  await fetch("https://zwormextenstion.com/wormExtension/api/clients.php?v=" + TIME).then(p64 => p64.json()).then(p65 => {
    console.log(p65);
    if (p65.success) {
      let v64 = p65.Users;
      clientes.clientesActivos = v64.filter(p66 => {
        return p66.client_ID;
      });
    } else {
      clientes = {
        clientesVencidos: [],
        clientesActivos: []
      };
      alert("An error occurred while loading clients");
    }
  });
}
loadUsers();
async function loadSkinUnlock() {
  await fetch("https://zwormextenstion.com/wormExtension/api/skinsActived.php?v=" + TIME).then(p67 => p67.json()).then(p68 => {
    console.log(p68);
    if (p68.success) {
      let v65 = p68.Users;
      clientsSkins.clientsSkinsActivos = v65.filter(p69 => {
        return p69.client_ID;
      });
    } else {
      clientsSkins = {
        clientsSkinsVencidos: [],
        clientsSkinsActivos: []
      };
      alert("An error occurred while loading clients");
    }
  });
}
loadSkinUnlock();
let serverDataTimMap = [];
async function loadServersTimMap() {
  const v66 = "https://zwormextenstion.com/wormExtension/api/serversTimMap.php?v=" + TIME;
  try {
    const v67 = await fetch(v66);
    const v68 = await v67.text();
    const v69 = /<div class=\\"div_item\\">([\s\S]*?)<\\\/div>/g;
    const vA2 = [...v68.matchAll(v69)];
    serverDataTimMap = vA2.map(p70 => {
      const v70 = p70[1];
      const v71 = /<a href=\\"(.*?)\\" class=\\"select_item\\" data-name=\\"(.*?)\\" data-port=\\"(.*?)\\">(.*?)<\\\/a>/;
      const v72 = v70.match(v71);
      if (!v72) {
        return null;
      }
      const v73 = v72[3].replace(/\\\//g, "/");
      const v74 = v72[2];
      const vDecodeUnicode = decodeUnicode(v72[4].trim());
      const v75 = /<img src=\\"(.*?)\\"/;
      const v76 = v70.match(v75);
      const v77 = v76 ? v76[1].replace(/\\\//g, "/") : "";
      return {
        dataCon: v73,
        dataRoom: v74,
        dataType: "false",
        imgSrc: v77,
        serverName: vDecodeUnicode
      };
    }).filter(Boolean);
  } catch (e8) {
    console.error("Error al cargar servidores TimMap:", e8);
  }
}
var top1Servers = {};
async function extractTopScores() {
  const v78 = "https://zworm.xyz:3305/data?v=" + Date.now();
  try {
    let v79 = await fetch(v78);
    if (!v79.ok) {
      throw new Error("HTTP error! Status: " + v79.status);
    }
    let v80 = await v79.json();
    top1Servers = {};
    for (let v81 in v80) {
      const v82 = v80[v81];
      if (!v82.wsUrl) {
        continue;
      }
      const v83 = v82.players || [];
      const v84 = v82.wsUrl;
      if (v83.length > 0) {
        let v85 = v83.reduce((p71, p72) => p72.Score > p71.Score ? p72 : p71, v83[0]);
        let vFormatScore = formatScore(v85.Score);
        let vGetStatusColor = getStatusColor(v85.Score);
        top1Servers[v84] = {
          ServerName: v85.ServerName,
          Initials: v81,
          Score: vFormatScore,
          StatusColor: vGetStatusColor,
          Avatar: v82.avatar || null,
          Name: v85.Name || "(unknown)",
          TopPlayers: v83.slice(0, 10)
        };
      } else if (v82.wsUrl) {
        top1Servers[v84] = {
          ServerName: v82.serverName,
          Initials: v81,
          Score: "Vacío",
          StatusColor: "gray",
          Avatar: v82.avatar || "https://i.imgur.com/placeholder.png",
          Name: "(N/A)",
          TopPlayers: []
        };
      }
    }
    console.log("Datos de Top 1 organizados por WSS:", top1Servers);
  } catch (e9) {
    console.error("Error fetching server data:", e9);
  }
}
let serverData = [];
async function loadServersWormWorld() {
  const v86 = Date.now();
  const v87 = "https://zwormextenstion.com/wormExtension/api/servers/wormworld.php?v=" + v86;
  try {
    const v88 = await fetch(v87);
    const v89 = await v88.json();
    serverData = v89.map(p73 => ({
      dataCon: p73.dataCon,
      dataRoom: p73.dataRoom,
      serverName: p73.serverName,
      dataType: p73.dataType,
      imgSrc: p73.imgSrc
    }));
    console.log(serverData);
  } catch (e10) {
    console.error("Error al cargar los servidores:", e10);
  }
}
function formatScore(p74) {
  if (p74 >= 1000000) {
    return (p74 / 1000000).toFixed(1) + "M";
  } else if (p74 >= 1000) {
    return (p74 / 1000).toFixed(1) + "K";
  }
  return p74.toString();
}
function getStatusColor(p75) {
  if (p75 > 10000000) {
    return "green";
  } else if (p75 > 2000000) {
    return "orange";
  } else {
    return "red";
  }
}
async function registerUpdatePlayer(p76) {
  await fetch("https://swykz.theoxt.com/api/users/register_update_player.php", {
    method: "POST",
    body: JSON.stringify({
      data: p76
    })
  }).then(p77 => p77.json()).then(p78 => {
    console.log(p78);
  });
}
async function checkSubscriptionExpired(p79) {
  await fetch("https://swykz.theoxt.com/api/users/checkSubscriptionExpired.php", {
    method: "POST",
    body: JSON.stringify({
      code: p79
    })
  }).then(p80 => p80.json()).then(p81 => {
    console.log(p81);
  });
}
function fetchCustomLogo(p82) {
  $.ajax({
    url: "https://swykz.theoxt.com/api/streming.php",
    method: "GET",
    dataType: "json",
    success: function (p83) {
      var v90 = p83.allstreamers.streamers.filter(function (p84) {
        return p84.id_game === p82;
      });
      if (v90.length === 0) {
        console.log("No hay streamers online.");
        return;
      }
      var v91 = v90[0];
      $(".mm-logo").attr("src", v91.logo);
      $(".loading-logo").attr("src", v91.logo);
      $(".mm-logo").attr("src", v91.logo);
    },
    error: function (p85) {
      console.error("Error al obtener los datos:", p85);
    }
  });
}
async function init() {
  await Promise.all([extractTopScores(), loadServersWormWorld(), loadServersTimMap()]);
  console.log("Todo listo");
  renderInterface(serverData, serverDataTimMap, top1Servers);
}
function renderInterface(p86, p87, p88) {
  $(".description-text").empty();
  let vLSWormworld = "wormworld";
  const vO3 = {
    sao: "br",
    vin: "us",
    dal: "us",
    fra: "de",
    sgp: "sg",
    tok: "jp",
    syd: "au",
    lon: "gb",
    tor: "ca",
    mex: "mx",
    sin: "sg",
    hil: "us",
    gra: "de"
  };
  const vA3 = [{
    code: "br",
    name: "Peru"
  }, {
    code: "mx",
    name: "Mexico"
  }, {
    code: "us",
    name: "EEUU"
  }, {
    code: "ca",
    name: "Canada"
  }, {
    code: "de",
    name: "Germania"
  }, {
    code: "fr",
    name: "Francia"
  }, {
    code: "sg",
    name: "Singapur"
  }, {
    code: "jp",
    name: "Japon"
  }, {
    code: "au",
    name: "Australia"
  }, {
    code: "gb",
    name: "Granbretana"
  }];
  function f3(p89) {
    if (/^\d+[a-z]{2}$/i.test(p89)) {
      return p89.slice(-2).toLowerCase();
    } else if (/^[A-Z]{2}_\d+$/i.test(p89)) {
      return p89.split("_")[0].toLowerCase();
    } else {
      return "otros";
    }
  }
  $(".description-text").append("\n        <div class=\"switchServerSource\" style=\"position: absolute; top: -5px; left: 200px; width: 200px;\">\n            <button id=\"toggleServerSource\" style=\"margin-bottom: 10px; padding: 6px 12px; background: #252535; color: white; border: 1px solid; border-radius: 1px;\">\n                🔄 Switch to TimMap Servers\n            </button>\n        </div>\n        <div class=\"containerDoorsServers\">\n            <select id=\"optionSelect\">\n                <option value=\"sao-a.wormate.io\">sao-a</option>\n                <option value=\"mum-a.wormate.io\">mum-a</option>\n                <option value=\"dxb-a.wormate.io\">dxb-a</option>\n                <option value=\"fra-e.wormate.io\">fra-e</option>\n                <option value=\"fra-d.wormate.io\">fra-d</option>\n                <option value=\"fra-c.wormate.io\">fra-c</option>\n                <option value=\"fra-b.wormate.io\">fra-b</option>\n                <option value=\"waw-a.wormate.io\">waw-a</option>\n                <option value=\"dal-b.wormate.io\">dal-b</option>\n                <option value=\"vin-a.wormate.io\">vin-a</option>\n                <option value=\"dal-a.wormate.io\">dal-a</option>\n                <option value=\"sao-c.wormate.io\">sao-c</option>\n                <option value=\"bhs-a.wormate.io\">bhs-a</option>\n                <option value=\"sao-b.wormate.io\">sao-b</option>\n                <option value=\"hil-a.wormate.io\">hil-a</option>\n                <option value=\"syd-a.wormate.io\">syd-a</option>\n                <option value=\"sin-g.wormate.io\">sin-g</option>\n                <option value=\"gra-a.wormate.io\">gra-a</option>\n                <option value=\"sin-i.wormate.io\">sin-i</option>\n                <option value=\"sin-h.wormate.io\">sin-h</option>\n                <option value=\"sin-f.wormate.io\">sin-f</option>\n                <option value=\"sin-c.wormate.io\">sin-c</option>\n                <option value=\"sin-b.wormate.io\">sin-b</option>\n                <option value=\"sin-a.wormate.io\">sin-a</option>\n                <option value=\"tok-b.wormate.io\">tok-b</option>\n                <option value=\"sin-d.wormate.io\">sin-d</option>\n                <option value=\"sin-e.wormate.io\">sin-e</option>\n            </select>\n            <input type=\"number\" id=\"numberInput\" min=\"0\" placeholder=\"ROOM NUMBER\">\n            <button id=\"connectButton\">CONNECT</button>\n        </div>\n    ");
  $("#connectButton").click(function () {
    let v92 = $("#optionSelect").val();
    let v93 = $("#numberInput").val();
    if (!v92 || v93 === "") {
      alert("Por favor, selecciona una opción y escribe un número antes de conectar.");
      return;
    }
    zw_lastserver = "wss://" + v92 + ":" + v93 + "/wormy";
    anApp.r.Hd();
    anApp.sa(zw_lastserver);
    zw_servertext.text = "" + zw_lastserver.replace("wss://", "").replace(".wormate.io", "").replace("/wormy", "");
  });
  const v$ = $("<ul class=\"ui-tabs-nav\"></ul>");
  const v$2 = $("<div class=\"servers-container\"></div>");
  vA3.forEach(function (p90, p91) {
    v$.append("\n            <li class=\"ui-tabs-tab ui-tab " + (p91 === 0 ? "ui-tab-active" : "") + "\" data-country=\"" + p90.code + "\">\n                <a><span class=\"flag " + p90.code + "\"></span></a>\n            </li>\n        ");
    v$2.append("\n            <div class=\"servers-" + p90.code + "\" style=\"display: " + (p91 === 0 ? "block" : "none") + ";\">\n                <table class=\"server-table\">\n                    <thead>\n                        <tr>\n                            <th>On/Off</th>\n                            <th>Name</th>\n                            <th>Región</th>\n                            <th>Top 1</th>\n                            <th>Streamer</th>\n                            <th>Doors</th>\n                        </tr>\n                    </thead>\n                    <tbody></tbody>\n                </table>\n            </div>\n        ");
  });
  $(".description-text").append(v$, v$2);
  $(".ui-tabs-tab").click(function () {
    var v94 = $(this).data("country");
    $(".ui-tabs-tab").removeClass("ui-tab-active");
    $(this).addClass("ui-tab-active");
    $(".servers-container > div").hide();
    $(".servers-" + v94).fadeIn(200);
  });
  function f4(p92) {
    $(".server-table tbody").empty();
    p92.forEach(function (p93) {
      const vO4 = {
        serverName: p93.serverName || p93.name || "???",
        dataCon: p93.dataCon || p93.wss,
        dataRoom: p93.dataRoom || p93.room || "???",
        imgSrc: p93.imgSrc || p93.streamerImg || "https://i.imgur.com/placeholder.png"
      };
      f5(vO4, p88);
    });
  }
  $(document).on("click", "#toggleServerSource", function () {
    vLSWormworld = vLSWormworld === "wormworld" ? "timmap" : "wormworld";
    $(this).text(vLSWormworld === "wormworld" ? "🔄 Switch to TimMap Servers" : "🔄 Switch to WormWorld Servers");
    f4(vLSWormworld === "wormworld" ? p86 : p87);
  });
  f4(p86);
  function f5(p94, p95) {
    let vF32 = f3(p94.dataRoom);
    if (vF32 === "ae") {
      vF32 = "gb";
    }
    if (!vA3.some(p96 => p96.code === vF32)) {
      return;
    }
    let v95 = p94.dataCon?.match(/wss:\/\/([a-z]+)-/i);
    let v96 = v95 ? v95[1] : null;
    let v97 = vO3[v96] ? vO3[v96].toUpperCase() : "Desconocido";
    let v98 = p94.dataRoom.trim().toLowerCase();
    const v99 = p94.dataCon || p94.wss;
    let v100 = p95[v99] || {
      Score: "???",
      StatusColor: "gray",
      Avatar: "https://i.imgur.com/placeholder.png"
    };
    let v$3 = $("\n            <tr class=\"server-row\" data-wss=\"" + v99 + "\" value=\"" + p94.dataRoom + "\">\n                <td class=\"server-status\" data-score=\"" + v100.Score + "\" data-img=\"" + v100.Avatar + "\">\n                    <span class=\"status-dot\" style=\"background-color: " + v100.StatusColor + ";\"></span>\n                </td>\n                <td class=\"server-name\">" + p94.serverName + "</td>\n                <td class=\"server-region\">" + v97 + "</td>\n                <td class=\"server-top1\" data-score=\"" + v100.Score + "\" data-img=\"" + v100.Avatar + "\">" + v100.Score + "</td>\n                <td><img src=\"" + p94.imgSrc + "\" class=\"streamer-image\"></td>\n                <td><button class=\"btn-check-ports\">📡📶</button></td>\n            </tr>\n        ");
    $(".servers-" + vF32 + " tbody").append(v$3);
  }
  $(document).on("click", ".server-row", function () {
    let v101 = $(this).attr("value");
    let v102 = $(this).attr("data-wss");
    if (v102) {
      anApp.r.Hd();
      anApp.sa(v102);
      zw_servertext.text = v101;
      setTimeout(() => {
        zw_servertext.text = v101;
      }, 2000);
    }
  });
  createFloatingElements();
  bindHoverEvents(".server-top1");
  bindHoverEvents(".server-status");
}
function createFloatingElements() {
  if (!document.getElementById("avatarPreview")) {
    const v103 = document.createElement("div");
    v103.id = "avatarPreview";
    Object.assign(v103.style, {
      position: "absolute",
      display: "none",
      pointerEvents: "none",
      opacity: "0",
      transition: "opacity 0.3s ease",
      zIndex: "9999"
    });
    const v104 = document.createElement("img");
    v104.id = "avatarImage";
    Object.assign(v104.style, {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      border: "2px solid #fff",
      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      backgroundColor: "#1a1a1a"
    });
    v103.appendChild(v104);
    document.body.appendChild(v103);
  }
  if (!document.getElementById("top10Preview")) {
    const v105 = document.createElement("div");
    v105.id = "top10Preview";
    Object.assign(v105.style, {
      position: "absolute",
      display: "none",
      pointerEvents: "none",
      opacity: "0",
      transition: "opacity 0.3s ease",
      zIndex: "9999",
      padding: "10px",
      borderRadius: "8px",
      backgroundColor: "rgba(30, 30, 40, 0.95)",
      color: "#fff",
      fontSize: "12px",
      minWidth: "230px",
      boxShadow: "0 0 10px rgba(0,0,0,0.6)",
      fontFamily: "Segoe UI, sans-serif"
    });
    const v106 = document.createElement("div");
    v106.id = "top10List";
    v105.appendChild(v106);
    document.body.appendChild(v105);
  }
}
function showAvatar(p97, p98) {
  if (p98) {
    $("#avatarImage").attr("src", p98);
    $("#avatarPreview").css({
      top: p97.pageY + 10 + "px",
      left: p97.pageX + 10 + "px",
      display: "block"
    }).stop(true, true).fadeTo(200, 1);
  }
}
function showTop10(p99, p100) {
  if (p100.length > 0) {
    let vLSdivStylefontsize14px = "<div style=\"font-size:14px; font-weight:bold; text-align:center; margin-bottom:8px;\">🏆 Top 10 🏆</div><hr style=\"border-color:#444;\">";
    vLSdivStylefontsize14px += p100.map((p101, p102) => {
      const v107 = p102 === 0;
      return "\n                <div style=\"display:flex; justify-content:space-between; margin: 4px 0; " + (v107 ? "font-weight:bold; color:#ffd700;" : "") + "\">\n                    <span>" + (v107 ? "⭐️" : p102 + 1 + ".") + " " + sanitize(p101.Name) + "</span>\n                    <span>" + formatScore(p101.Score) + "</span>\n                </div>";
    }).join("");
    $("#top10List").html(vLSdivStylefontsize14px);
    const vLN100 = 100;
    $("#top10Preview").css({
      top: p99.pageY + 10 + vLN100 + 10 + "px",
      left: p99.pageX + 10 + "px",
      display: "block"
    }).stop(true, true).fadeTo(200, 1);
  }
}
function bindHoverEvents(p103) {
  $(document).off("mouseenter", p103).on("mouseenter", p103, function (p104) {
    const v108 = $(this).closest("tr").attr("data-wss");
    if (!v108) {
      return;
    }
    const v109 = top1Servers[v108];
    if (v109) {
      showAvatar(p104, v109.Avatar);
      showTop10(p104, v109.TopPlayers || []);
    }
  });
  $(document).off("mousemove", p103).on("mousemove", p103, function (p105) {
    const vLN1002 = 100;
    $("#avatarPreview").css({
      top: p105.pageY + 10 + "px",
      left: p105.pageX + 10 + "px"
    });
    $("#top10Preview").css({
      top: p105.pageY + 10 + vLN1002 + 10 + "px",
      left: p105.pageX + -75 + "px"
    });
  });
  $(document).off("mouseleave", p103).on("mouseleave", p103, function () {
    $("#avatarPreview").stop(true, true).fadeTo(300, 0, function () {
      $(this).hide();
    });
    $("#top10Preview").stop(true, true).fadeTo(300, 0, function () {
      $(this).hide();
    });
  });
}
init();
function sanitize(p106) {
  return p106.replace(/[^\x20-\x7E¡-ÿ\u0E00-\u0E7F\u0900-\u097F]/g, "").trim();
}
function obtenerImagenPorSeleccion(p107) {
  let vLS = "";
  switch (p107) {
    case "0":
      vLS = "https://asserts.wormworld.io/backgrounds/bkgnd0.png";
      break;
    case "1":
      vLS = "https://asserts.wormworld.io/backgrounds/bkgnd8.png";
      break;
    case "2":
      vLS = "https://asserts.wormworld.io/backgrounds/bkgnd9.png";
      break;
    case "3":
      vLS = "https://asserts.wormworld.io/backgrounds/bkgnd10.png";
      break;
    case "4":
      vLS = "https://asserts.wormworld.io/backgrounds/bkgnd6.png";
      break;
    case "5":
      vLS = "https://asserts.wormworld.io/backgrounds/bkgnd11.png";
      break;
    case "6":
      vLS = "https://asserts.wormworld.io/backgrounds/bg_sky_1.png";
      break;
    case "7":
      vLS = "https://asserts.wormworld.io/backgrounds/bg_sky_2.png";
      break;
    case "8":
      vLS = "https://asserts.wormworld.io/backgrounds/bg_sky_3.png";
      break;
    case "9":
      vLS = "https://asserts.wormworld.io/backgrounds/bg_sky_4.png";
      break;
    case "10":
      vLS = "https://asserts.wormworld.io/backgrounds/bg_sky_5.png";
      break;
    case "11":
      vLS = "https://asserts.wormworld.io/backgrounds/arena01.png";
      break;
    case "12":
      vLS = "https://asserts.wormworld.io/backgrounds/arena02.png";
      break;
    case "13":
      vLS = "https://asserts.wormworld.io/backgrounds/arena03.png";
      break;
    case "14":
      vLS = "https://asserts.wormworld.io/backgrounds/arena04.png";
      break;
    default:
      console.warn("Valor no v�lido, se utilizar� una imagen por defecto.");
  }
  return vLS;
}
function startInterval() {
  clearInterval(intervalID);
  if (intervalID === null) {
    intervalID = setInterval(function () {
      var v110 = anApp.s.H.sk;
      let v111 = Math.PI;
      var v112 = v110 + v111 / 360 * 9;
      if (v112 >= v111) {
        v112 = -v110;
      }
      anApp.s.H.sk = v112;
    }, 55);
  }
}
function adjustInterval() {
  if (cycleCounter >= 40) {
    if (isIncrementing) {
      initialInterval += 25;
    } else {
      initialInterval -= 100;
    }
    cycleCounter = 1;
  }
}
function controlIntervalAdjustment() {
  if (initialInterval === 55 && cycleCounter >= 40) {
    initialInterval += 25;
    cycleCounter = 1;
    isIncrementing = true;
  }
  if (initialInterval === 80) {
    adjustInterval();
  }
  if (initialInterval === 105) {
    adjustInterval();
  }
  if (initialInterval === 130) {
    adjustInterval();
  }
  if (initialInterval === 155) {
    adjustInterval();
  }
  if (initialInterval === 180) {
    adjustInterval();
  }
  if (initialInterval === 205) {
    adjustInterval();
  }
  if (initialInterval === 230) {
    adjustInterval();
  }
  if (initialInterval === 255) {
    adjustInterval();
  }
  if (initialInterval === 280) {
    adjustInterval();
  }
  if (initialInterval === 305) {
    adjustInterval();
  }
  if (initialInterval === 330) {
    adjustInterval();
  }
  if (initialInterval === 355) {
    adjustInterval();
  }
  if (initialInterval === 380) {
    adjustInterval();
  }
  if (initialInterval === 405) {
    adjustInterval();
  }
  if (initialInterval === 430) {
    adjustInterval();
  }
  if (initialInterval === 455 && cycleCounter >= 40) {
    initialInterval -= 100;
    cycleCounter = 1;
    isIncrementing = false;
  }
}
function manageIntervalCycle() {
  clearInterval(intervalID);
  if (intervalID === null) {
    let v113 = anApp.s.H.sk;
    let v114 = Math.PI;
    let v115 = v113 + v114 / 360 * 9;
    if (v115 >= v114) {
      v115 = -v113;
    }
    anApp.s.H.sk = v115;
    cycleCounter += 1;
    controlIntervalAdjustment();
    if (isRunning) {
      intervalID = setInterval(manageIntervalCycle, initialInterval);
    }
  }
}
function starAutoCircle() {
  isRunning = true;
  initialInterval = 55;
  cycleCounter = 1;
  isIncrementing = true;
  manageIntervalCycle();
}
const isPremiumUser = localStorage.getItem("premium") === "true";
const wormxt_5dlrs_Obj = {
  visiblePowersAll: false,
  speed_zigzag: true
};
var wormxt_Obj = {
  laserColor: "FFFFFF",
  colorFondo: "0D0400",
  colorBorde: "FF0000",
  laserHS: false,
  spawnInfinity: false,
  backgroundSolid: false,
  sectores: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4
};
const showVersionPays = async function (p108) {
  var v116 = clientes.clientesActivos.find(function (p109) {
    return p109.client_ID === p108.user_data.userId;
  });
  if (v116) {
    console.log("El ID " + p108.user_data.userId + " coincide con un ID almacenado en la base de datos.");
    const v117 = new Date();
    const v118 = new Date(v116.client_DateExpired);
    if (v117 > v118) {
      console.log("La fecha de expiraci�n ha vencido.");
      localStorage.setItem("premium", "false");
    } else {
      console.log("La fecha de expiraci�n es v�lida.");
      settings5dolars(v116.client_DateExpired);
      localStorage.setItem("premium", "true");
    }
  } else {
    console.log("El ID generado no coincide con ning�n ID almacenado en la base de datos.");
    localStorage.setItem("premium", "false");
  }
};
function setSectorsGame() {
  zw_Background.removeChildren();
  zw_Background.clear();
  console.log(theoObjects.colorFondo);
  if (theoKzObjects.backgroundSolid) {
    zw_Background.beginFill("0x" + theoObjects.colorFondo, 1);
    zw_Background.lineStyle(1, "0x" + theoObjects.colorBorde, 1);
    zw_Background.drawCircle(0, 0, 500);
    zw_Background.endFill();
  } else if (theoKzObjects.sectores) {
    var vLN06 = 0;
    var vLN07 = 0;
    var vLN500 = 500;
    var vVLN500 = vLN500;
    var v119 = vVLN500 * 2 / 5;
    var v120 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var v121 = Math.PI * 2 / 10;
    for (var vLN08 = 0; vLN08 < 5; vLN08++) {
      for (var vLN09 = 0; vLN09 < 10; vLN09++) {
        var v122 = vLN09 * v121;
        var v123 = (vLN09 + 1) * v121;
        var v124 = vLN500 - (vLN08 + 0.01) * (v119 / 2);
        var v125 = vLN06 + Math.cos(v122) * v124;
        var v126 = vLN07 + Math.sin(v122) * v124;
        zw_Background.beginFill("0x" + theoObjects.colorFondo, 1);
        zw_Background.lineStyle(0.5, "0x" + theoObjects.colorBorde, 1);
        zw_Background.moveTo(vLN06, vLN07);
        zw_Background.lineTo(v125, v126);
        zw_Background.arc(vLN06, vLN07, v124, v122, v123);
        zw_Background.lineTo(vLN06, vLN07);
        zw_Background.endFill();
        if (vLN08 < 4) {
          var v127 = v120[vLN08] + (vLN09 + 1);
          if (!zw_Background.getChildByName(v127)) {
            var v128 = new PIXI.TextStyle({
              fontSize: "15px",
              fill: "0x00243E"
            });
            var v129 = new PIXI.Text(v127, v128);
            v129.anchor.set(0.5);
            var v130 = v122 + (v123 - v122) / 2;
            var v131 = v124 - v119 / 4;
            var v132 = vLN06 + Math.cos(v130) * v131;
            var v133 = vLN07 + Math.sin(v130) * v131;
            v129.position.set(v132, v133);
            v129.name = v127;
            zw_Background.addChild(v129);
          }
        }
      }
    }
  } else {
    zw_Background.removeChildren();
    zw_Background.clear();
    zw_Background.lineStyle(1, 16711680, 1);
    zw_Background.drawCircle(0, 0, 500);
    zw_Background.endFill();
  }
}
function decodeUnicode(p110) {
  return p110.replace(/\\u[\dA-F]{4}/gi, function (p111) {
    return String.fromCharCode(parseInt(p111.replace(/\\u/, ""), 16));
  }).replace(/\\u[0-9A-F]{2}/g, function (p112) {
    return String.fromCharCode(parseInt(p112.replace(/\\u/, ""), 16));
  });
}
const settings5dolars = async function (p113) {
  var v$4 = $("div[category='theme']");
  addMinicolor(v$4[1], "gameColorGroup", "GAME", "colorFondo", theoObjects.colorFondo);
  addMinicolor(v$4[1], "borderColorGroup", "BORDE GAME", "colorBorde", theoObjects.colorBorde);
  addMinicolor(v$4[1], "laserColorGroup", "LASER", "laserColor", theoObjects.laserColor);
  addMinicolor(v$4[1], "hsTextColorGroup", "HS TEXT", "hsTextColor", theoObjects.hsTextColor);
  addMinicolor(v$4[1], "killTextColorGroup", "KILL TEXT", "killTextColor", theoObjects.killTextColor);
  addMinicolor(v$4[1], "minimapBorderColorGroup", "MINIMAP BORDER", "minimapBorderColor", theoObjects.minimapBorderColor);
  wormxt_5dlrs_Obj.visiblePowersAll = false;
  wormxt_5dlrs_Obj.speed_zigzag = true;
  $("#game-view").append("<i class=\"material-icons\"  id=\"user_config\" style=\"position: absolute;background-color: transparent;border-radius: 5px;\">menu</i>");
  $("#user_config").on("click", function () {
    $("#settings-container2, #clossed_Setings").css("position", "absolute").css("display", "block");
    giroActive = false;
    toggleGiro();
  });
  let v134 = localStorage.getItem("showTeamList");
  let v135;
  if (v134 === "true") {
    v135 = true;
    theoKzObjects.showTeamList = true;
  } else if (v134 === "false") {
    v135 = false;
    theoKzObjects.showTeamList = false;
  } else {
    v135 = theoKzObjects.showTeamList;
  }
  let v136 = localStorage.getItem("showAnimationHeadshot");
  let v137;
  if (v136 === "true") {
    v137 = true;
    theoKzObjects.animationHeadshot = true;
  } else if (v136 === "false") {
    v137 = false;
    theoKzObjects.animationHeadshot = false;
  } else {
    v137 = theoKzObjects.animationHeadshot;
  }
  $("#settings-backgroundSolid-switch").prop("checked", wormxt_Obj.backgroundSolid);
  $("#settings-backgroundSolid-switch").on("click", function () {
    if (this.checked) {
      wormxt_Obj.backgroundSolid = true;
      setSectorsGame();
    } else {
      wormxt_Obj.backgroundSolid = false;
      setSectorsGame();
    }
  });
  $("#showAnimationHeadshot").on("change", function () {
    theoKzObjects.animationHeadshot = $(this).is(":checked");
    localStorage.setItem("showAnimationHeadshot", theoKzObjects.animationHeadshot);
    console.log("Mostrar lista de amigos:", theoKzObjects.animationHeadshot);
  });
  $("#showTeamList").on("change", function () {
    theoKzObjects.showTeamList = $(this).is(":checked");
    localStorage.setItem("showTeamList", theoKzObjects.showTeamList);
    console.log("Mostrar lista de amigos:", theoKzObjects.showTeamList);
  });
  $("#clossed_Setings").on("click", function () {
    $("#settings-container2, #clossed_Setings").css("display", "none");
    giroActive = true;
    toggleGiro();
  });
  function f6(p114, p115, p116) {
    $(p114).on("input", function () {
      wormxt_Obj[p115] = $(this).val();
      localStorage.setItem(p116, $(this).val());
      console.log("Valor guardado en localStorage:", localStorage.getItem(p116));
    });
  }
  let v$5 = $("<div class=\"cursor-menu\"></div>");
  let v$6 = $("<div class=\"icon-selector\"></div>");
  for (let vLN1 = 1; vLN1 < 42; vLN1++) {
    const v138 = "https://deltav4.gitlab.io/v7/assets/cursors/cursor_" + vLN1.toString().padStart(2, "0") + ".cur";
    const v139 = vLN1 === 1 ? "active" : "";
    const v140 = $("<img>").attr({
      src: v138,
      "data-cursor": v138,
      alt: "Cursor " + vLN1
    });
    const v141 = $("<div>").addClass("cursor-box icon-selector__item").addClass(v139).append(v140);
    v$6.append(v141);
  }
  v$5.append(v$6);
  $(".options-list.ps div[category=\"cursor\"]").append(v$5);
  $("#background-canvas").after("<div id=\"firefly-container\"></div>");
  const vLN20 = 20;
  const v$7 = $("#firefly-container");
  for (let vLN010 = 0; vLN010 < vLN20; vLN010++) {
    let v142 = $("<div>").addClass("firefly");
    v142.css({
      left: Math.random() * window.innerWidth + "px",
      top: Math.random() * window.innerHeight + "px",
      animationDuration: 2 + Math.random() + "s, " + (5 + Math.random() * 10) + "s"
    });
  }
  $(".profile-info").prepend("\n        <div class=\"premium-badge\">\n            ⭐ Premium ⭐ <br> \n            Expire: <span id=\"premium-expiration\">" + p113 + "</span>\n        </div>\n    ");
  $(".hotkey-container").append("\n\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Zoom</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"zoom-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Replay</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"restart-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Explote</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"wormExplot-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">LaserHS</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"laserHSkey-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Sectors</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"sectores-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Background</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"background-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Giro</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"giro-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">No Skins</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"noSkin-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">No Auras</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"noAuras-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        ");
  $("#zoom-key").val(keys.zoom);
  $("#restart-key").val(keys.restart);
  $("#laserHSkey-key").val(keys.laserHS);
  $("#wormExplot-key").val(keys.wormExplot);
  $("#giro-key").val(keys.giro);
  $("#noSkin-key").val(keys.noSkin);
  $("#noAuras-key").val(keys.noAuras);
  $("#sectores-key").val(keys.sectores);
  $("#background-key").val(keys.background);
  $("#hotkeys-icon").on("click", function () {
    $("#hotkeys-icon").addClass("active");
    $("#user-icon").removeClass("active");
    $("#hotkeys-section").toggle();
    $("#user-section").hide();
  });
  $(".key-input").keydown(function (p117) {
    p117.stopPropagation();
  });
  $(".key-input").keypress(function (p118) {
    p118.preventDefault();
    var v143 = p118.key.toLowerCase();
    $(this).val(v143);
    var v144 = $(this).attr("id");
    switch (v144) {
      case "zoom-key":
        cambiarKey("zoom", v143);
        break;
      case "restart-key":
        cambiarKey("restart", v143);
        break;
      case "wormExplot-key":
        cambiarKey("wormExplot", v143);
        break;
      case "laserHSkey-key":
        cambiarKey("laserHS", v143);
        break;
      case "giro-key":
        cambiarKey("giro", v143);
        break;
      case "noSkin-key":
        cambiarKey("noSkin", v143);
        break;
      case "noAuras-key":
        cambiarKey("noAuras", v143);
        break;
      case "sectores-key":
        cambiarKey("sectores", v143);
        break;
      case "background-key":
        cambiarKey("background", v143);
        break;
    }
    $(this).blur();
  });
  $("#user-section").append(v$6);
  $(".cursor-box").on("click", function () {
    var v145 = $(this).find("img").attr("src");
    $("body, button, input, a, textarea, select, div, span, p").css({
      cursor: "url(" + v145 + "), auto"
    });
    $(".cursor-box").removeClass("active");
    $(this).addClass("active");
  });
  $("#mm-event-text").html("<span style='color: #98928a;' class='settings_span'>EXP: " + p113 + "</span>");
  $("#sound-hs").val("https://zwormextenstion.com/wormExtension/sounds/headshot_4.mp3");
  $("#sound-10hs").val("https://zwormextenstion.com/wormExtension/sounds/hea-hea-headshot.mp3");
  zw_hssound = new Audio($("#sound-hs").val());
  zw_laughsound = new Audio($("#sound-10hs").val());
  $("#sound-hs").on("input", function () {
    zw_hssound.src = $(this).val();
  });
  $("#sound-10hs").on("input", function () {
    zw_laughsound.src = $(this).val();
  });
  $("#settings5dolars").after("<div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-laserHS-switch\"><span class=\"names_settings\" id=\"laser\"> " + lenguaje[idiomaActual].laser + "</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-sectores-switch\"><span class=\"names_settings\" id=\"sectores\"> " + lenguaje[idiomaActual].sectores + "</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-notAbilityAll-switch\"><span class=\"names_settings\"> : Show All Power-Ups</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-Speed_ZigZag-switch\"><span class=\"names_settings\"> : Show Speed&Zigzag</span></div><div id=\"display_color\"><div class=\"container\"><input id=\"color_paletRGB\" type=\"color\" value=\"#000A11\"><span class=\"names_settings\"  id=\"colorJuego\" > " + lenguaje[idiomaActual].colorJuego + " </span></div><div class=\"container\"><input id=\"color_palet\" type=\"color\" value=\"#00243E\"><span class=\"names_settings\" id=\"colorLaser\"> " + lenguaje[idiomaActual].colorLaser + " </span></div><div class=\"container\"><input id=\"color_palet2\" type=\"color\" value=\"#01D9CC\"><span class=\"names_settings\" id=\"colorBorde\"> " + lenguaje[idiomaActual].colorBorde + "</span></div>");
  const vO5 = {
    color_paletRGB: p119 => wormxt_Obj.colorFondo = p119,
    color_palet: p120 => wormxt_Obj.laserColor = p120,
    color_palet2: p121 => wormxt_Obj.colorBorde = p121
  };
  $("#color_paletRGB, #color_palet, #color_palet2").change(function () {
    const v146 = $(this).attr("id");
    const v147 = $(this).val().replace("#", "");
    setSectorsGame();
    console.log("Recibiendo el color reemplazado para " + v146 + ": " + v147);
    if (vO5[v146]) {
      vO5[v146](v147);
    }
    setSectorsGame();
  });
  wormxt_5dlrs_Obj.visiblePowersAll = false;
  $("#settings-notAbilityAll-switch").prop("checked", wormxt_5dlrs_Obj.visiblePowersAll);
  $("#settings-notAbilityAll-switch").on("click", function () {
    if (this.checked) {
      wormxt_5dlrs_Obj.visiblePowersAll = true;
    } else {
      wormxt_5dlrs_Obj.visiblePowersAll = false;
    }
  });
  wormxt_5dlrs_Obj.speed_zigzag = true;
  $("#settings-Speed_ZigZag-switch").prop("checked", wormxt_5dlrs_Obj.speed_zigzag);
  $("#settings-Speed_ZigZag-switch").on("click", function () {
    if (this.checked) {
      wormxt_5dlrs_Obj.speed_zigzag = true;
    } else {
      wormxt_5dlrs_Obj.speed_zigzag = false;
    }
  });
  $("#settings-laserHS-switch").prop("checked", wormxt_Obj.laserHS);
  $("#settings-laserHS-switch").on("click", function () {
    if (this.checked) {
      wormxt_Obj.laserHS = true;
    } else {
      wormxt_Obj.laserHS = false;
    }
  });
  $("#settings-interactive-switch").prop("checked", wormxt_Obj.interactive);
  $("#settings-interactive-switch").on("click", function () {
    if (this.checked) {
      zw_explotWubtracttexture.interactive = false;
    } else {}
  });
  $("#settings-sectores-switch").prop("checked", wormxt_Obj.sectores);
  $("#settings-sectores-switch").on("click", function () {
    if (this.checked) {
      wormxt_Obj.sectores = true;
      setSectorsGame();
    } else {
      wormxt_Obj.sectores = false;
      setSectorsGame();
    }
  });
};
var TIME = new Date().getTime();
var linkCSS = "https://zwormextenstion.com/wormExtension/css/style2.css?v=" + TIME;
var unlockSkinsExecuted = false;
var unlockSkinsPrivate = async function (p122) {
  if (unlockSkinsExecuted) {
    console.log("unlockSkinsPrivate ya fue ejecutada anteriormente.");
    return;
  }
  unlockSkinsExecuted = true;
  var v148 = p122.u.si.userId;
  var v149 = clientsSkins.clientsSkinsActivos.find(p123 => p123.client_ID === v148);
  if (v149 && v149.Client_VisibleSkinPrivate) {
    console.log(v149);
    const v150 = new Date();
    const v151 = new Date(v149.client_DateExpired);
    if (v150 > v151) {
      console.log("La fecha de skins expiración ha vencido.");
    } else {
      console.log("La fecha de skins expiración es válida.");
      let v152 = Array.isArray(v149.Client_VisibleSkinPrivate) ? v149.Client_VisibleSkinPrivate : [v149.Client_VisibleSkinPrivate];
      v152.forEach(p124 => {
        let v153 = theoKzObjects.idSkin.find(p125 => p125.id === p124);
        if (v153) {
          v153.nonbuyable = false;
        }
      });
      console.log("Skins privadas desbloqueadas para el usuario " + v148 + ":", v152);
    }
  } else {
    console.log("No se encontraron skins privadas para el usuario " + v148 + ".");
  }
};
let giroActive = false;
function toggleGiro() {
  if (giroActive) {
    zw_girosubtracttexture.texture = ungirotexture;
    zw_girosubtracttexture.alpha = 0.25;
    console.log("Giro deactivated");
    isRunning = false;
    initialInterval = 55;
    cycleCounter = 1;
    isIncrementing = true;
    clearInterval(intervalID);
    intervalID = null;
  } else {
    zw_girosubtracttexture.alpha = 0.75;
    console.log("Giro activated");
    startInterval();
    isRunning = true;
  }
  giroActive = !giroActive;
}
const showServer2 = async function (p126) {
  updateBackground();
  fetchCustomLogo(p126.u.si.userId);
  zwormData.id_user = p126.u.si.userId;
  loadStylesheet(linkCSS);
  loadStylesheet("https://fonts.googleapis.com/icon?family=Material+Icons");
  console.log(p126, p126.u.si.userId);
  zw_hssound = new Audio("https://zwormextenstion.com/wormExtension/sounds/headshot_4.mp3");
  zw_laughsound = new Audio("https://zwormextenstion.com/wormExtension/sounds/hea-hea-headshot.mp3");
  zw_explotWubtracttexture = new pixi.Sprite();
  zw_explotWubtracttexture.texture = explotWtexture;
  zw_explotWubtracttexture.interactive = true;
  zw_explotWubtracttexture.buttonMode = true;
  zw_explotWubtracttexture.x = -45;
  zw_explotWubtracttexture.y = 10;
  zw_explotWubtracttexture.alpha = 0.25;
  function f7() {
    zw_explotWubtracttexture.interactive = false;
    var vLN10000 = 10000;
    var vLN12 = 1;
    var vLN025 = 0.25;
    var vLN1003 = 100;
    var v154 = (vLN12 - vLN025) / vLN1003;
    var vLN011 = 0;
    var vSetInterval = setInterval(function () {
      var v155 = vLN12 - v154 * vLN011;
      zw_explotWubtracttexture.alpha = v155;
      vLN011++;
      if (vLN011 > vLN1003) {
        clearInterval(vSetInterval);
        zw_explotWubtracttexture.alpha = vLN025;
        zw_explotWubtracttexture.interactive = true;
      }
    }, vLN10000 / vLN1003);
  }
  zw_explotWubtracttexture.on("mouseup", function () {
    f7();
    const v156 = new Uint8Array([NaN, NaN]);
    anApp.o.Wb(v156);
    setTimeout(() => {
      let vZw_lastserver = zw_lastserver;
      $(".overlay-2").css("position", "static");
      if (vZw_lastserver) {
        anApp.r.Hd();
        anApp.sa(vZw_lastserver);
      }
    }, 1000);
  });
  zw_girosubtracttexture = new pixi.Sprite();
  zw_girosubtracttexture.texture = ungirotexture;
  zw_girosubtracttexture.interactive = true;
  zw_girosubtracttexture.buttonMode = true;
  zw_girosubtracttexture.x = -10;
  zw_girosubtracttexture.y = 10;
  zw_girosubtracttexture.alpha = 0.25;
  zw_girosubtracttexture.on("mouseup", function () {
    toggleGiro();
  });
  if (zw_mobilecheck()) {
    zw_girosubtracttexture.x = -90;
    zw_explotWubtracttexture.x = -135;
    zw_explotWubtracttexture.y = 10;
    let v157 = new Function("return PIXI;")();
    let v158 = v157.Texture.from("https://i.imgur.com/kGjR9yf.png");
    let v159 = v157.Texture.from("https://i.imgur.com/4JZUa1u.png");
    zw_zoomplustexture = new v157.Sprite();
    zw_zoomplustexture.texture = v158;
    zw_zoomplustexture.interactive = true;
    zw_zoomplustexture.buttonMode = true;
    zw_zoomplustexture.x = -10;
    zw_zoomplustexture.y = 10;
    zw_zoomplustexture.alpha = 0.25;
    zw_zoomplustexture.on("mouseup", function () {
      zw_updatezoom(Math.min(zw_multiplier + 0.25, 50));
    });
    zw_zoomsubtracttexture = new v157.Sprite();
    zw_zoomsubtracttexture.texture = v159;
    zw_zoomsubtracttexture.interactive = true;
    zw_zoomsubtracttexture.buttonMode = true;
    zw_zoomsubtracttexture.x = -43;
    zw_zoomsubtracttexture.y = 10;
    zw_zoomsubtracttexture.alpha = 0.25;
    zw_zoomsubtracttexture.on("mouseup", function () {
      zw_updatezoom(Math.max(zw_multiplier - 0.25, 0.25));
    });
  }
  $("#game-canvas").after("<input type=\"text\" id=\"chatInput\" style=\"display: none; position: absolute;\" placeholder=\"Escribe tu mensaje...\" />");
  var vF6 = function () {
    $("#chatInput").css("display", "none").val("");
    $("#game-canvas").focus();
  };
  var vF7 = function () {
    let v160 = $("#chatInput").val();
    if ($.trim(v160) !== "") {
      console.log("Mensaje enviado:", v160);
      zwormData.message = v160;
      setTimeout(() => {
        zwormData.message = "";
      }, 1500);
    }
  };
  $("#chatInput").on("keydown", function (p127) {
    if (p127.key === "Enter") {
      vF7();
      vF6();
    } else if (p127.key === "Escape") {
      vF6();
    }
  });
  $("#mm-action-play").html("<i class=\"material-icons\">play_circle_filled</i><span>PLAY</span>");
  $("#mm-settings").html("<i class=\"material-icons\">settings</i>");
  $("#mm-leaders").html("<i class=\"material-icons\">leaderboard</i>");
  $("#mm-store").html("<i class=\"material-icons\">store</i>");
  $("#mm-zw-settings").html("<i class=\"material-icons\">manage_accounts</i>");
  $("#user-icon").on("click", function () {
    $("#user-icon").addClass("active");
    $("#hotkeys-icon").removeClass("active");
    $("#user-section").toggle();
    $("#hotkeys-section").hide();
  });
  $("#background-canvas").replaceWith("<canvas id=\"background-canvas\"></canvas>");
  $("#game-view").append("<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>");
  $("#game-view").append("<span id=\"ping\"></span>");
  $("#aqnvgcpz05orkobh").replaceWith("\n    <div id=\"premium-panel\" style=\"box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 1px 0px; background-color: transparent; border-radius: 8px; padding: 20px; text-align: center;\">\n        <h2 style=\"color: #fff;\">Get the Premium Version!</h2>\n        <p style=\"color: #f9f9f9;\">Access exclusive benefits by purchasing the premium version. Dedicated support, more options, and much more.</p>\n        <p style=\"color: #fff; font-weight: bold;\">Advertise with more visibility and reach more customers!</p>\n\n        <!-- Button to redirect to Discord -->\n        <button id=\"buy-premium\" style=\"background-color: #7289da; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;\">\n            Buy on Discord\n        </button>\n    </div>\n        ");
  $("#buy-premium").on("click", function () {
    window.open("https://discord.gg/sJ5R95Rc6Z", "_blank");
  });
  $("#social-buttons").replaceWith("");
  $("#mm-skin-prev svg").remove();
  $("#mm-skin-next svg").remove();
  $(".mm-logo").attr("src", "https://i.imgur.com/jXzoG5D.png");
  $(".loading-logo").attr("src", "https://i.imgur.com/jXzoG5D.png");
  $("#mm-coins-buy span").remove();
  $("#mm-coins-box .mm-coins-img").remove();
  $("#mm-action-play, #zwplayagain, #final-replay").click(function () {
    $(".overlay-2").css("position", "static");
  });
  $("#mm-zw-settings").click(function () {
    $("#settings-menu").css({
      display: "flex",
      opacity: "1"
    });
  });
  $("#popup-menu-back").click(function () {
    $("#settings-menu").css("opacity", "0");
  });
  $("#mm-skin-next").click(function () {
    $("#mm-skin-canv").addClass("cambio-skin2");
    setTimeout(function () {
      $("#mm-skin-canv").removeClass("cambio-skin2");
    }, 350);
  });
  $("#mm-skin-prev").click(function () {
    $("#mm-skin-canv").addClass("cambio-skin2");
    setTimeout(function () {
      $("#mm-skin-canv").removeClass("cambio-skin2");
    }, 350);
  });
  const vA4 = ["#mm-player-info", "#mm-skin-canv", "#mm-settings", "#mm-leaders", "#mm-store", "#mm-coins-box"];
  $(vA4.join(", ")).click(function () {
    $("#settings-menu").css({
      display: "none",
      opacity: "0"
    });
  });
  const vA5 = ["#mm-action-play", "#mm-settings", "#mm-leaders", "#mm-store", "#mm-zw-settings"];
  vA5.forEach(function (p128) {
    $(p128).hover(function () {
      $(this).css({
        "box-shadow": "inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2)"
      });
    }, function () {
      $(this).css({
        "box-shadow": "0 1px 1px 0 rgba(0,0,0,.5)"
      });
    });
  });
  $(".mm-merchant-cont").replaceWith("");
  $("#fullscreen").prepend("<i class=\"material-icons\">fullscreen</i>");
  $("#zwplayagain").prepend("<i class=\"material-icons\">replay</i>");
  $(".mm-logo").on("click", function () {
    var vPrompt = prompt("Extension 'W' or 'T':");
    if (vPrompt === "W") {
      $(".mm-logo").text("Loading.");
      setTimeout(() => {
        $(".mm-logo").text("Loading..");
        setTimeout(() => {
          $(".mm-logo").text("Loading...");
          setTimeout(() => {
            $(".mm-logo").text("WormWorld");
          }, 2000);
        }, 1500);
      }, 1000);
      $(".servers-peru").html("");
      $(".servers-mexico").html("");
      $(".servers-eeuu").html("");
      $(".servers-canada").html("");
      $(".servers-germania").html("");
      $(".servers-francia").html("");
      $(".servers-singapur").html("");
      $(".servers-japon").html("");
      $(".servers-australia").html("");
      $(".servers-granbretana").html("");
      setTimeout(() => {
        for (a = 0; a < serverData.length; a++) {
          var v161 = serverData[a].dataCon;
          var v162 = serverData[a].dataRoom;
          var v163 = serverData[a].serverName;
          var vLSHttpsxdcom = "https://xd.com";
          var v164 = serverData[a].imgSrc;
          let v165 = "<a>\n                        <img src=\"" + v164 + "\"    style=\"margin-left: 100px;\">\n                    </a>";
          let v166 = v162.match(/[a-zA-Z]+/g).join("");
          let v167 = document.createElement("p");
          v167.value = v161;
          v167.innerHTML = v163;
          let v168 = document.createElement("div");
          v168.setAttribute("class", "conteiner");
          if (v166 == "br") {
            $(".servers-peru").append(v168);
            $(v168).append(v167);
            $(v167).append(v165);
          } else if (v166 == "mx") {
            $(".servers-mexico").append(v168);
            $(v168).append(v167);
            $(v167).append(v165);
          } else if (v166 == "us") {
            $(".servers-eeuu").append(v168);
            $(v168).append(v167);
            $(v167).append(v165);
          } else if (v166 == "ca") {
            $(".servers-canada").append(v168);
            $(v168).append(v167);
            $(v167).append(v165);
          } else if (v166 == "de") {
            $(".servers-germania").append(v168);
            $(v168).append(v167);
            $(v167).append(v165);
          } else if (v166 == "fr") {
            $(".servers-francia").append(v168);
            $(v168).append(v167);
            $(v167).append(v165);
          } else if (v166 == "sg") {
            $(".servers-singapur").append(v168);
            $(v168).append(v167);
            $(v167).append(v165);
          } else if (v166 == "jp") {
            $(".servers-japon").append(v168);
            $(v168).append(v167);
            $(v167).append(v165);
          } else if (v166 == "au") {
            $(".servers-australia").append(v168);
            $(v168).append(v167);
            $(v167).append(v165);
          } else if (v166 == "ae") {
            $(".servers-granbretana").append(v168);
            $(v168).append(v167);
            $(v167).append(v165);
          }
          $(v167).attr("class", "selectSala");
          $(v167).attr("value", v162);
          $(v167).attr("data-con", v161);
          $(v167).click(function () {
            $(".overlay-2").css("position", "static");
            let v169 = $(this).attr("data-con");
            console.log(v169);
            if (v169) {
              p126.r.Hd();
              p126.sa(v169);
              zw_servertext.text = $(this).text();
              console.log($(this).text());
            }
          });
        }
      }, 3000);
    } else if (vPrompt === "T") {
      $(".mm-logo").text("Loading.");
      setTimeout(() => {
        $(".mm-logo").text("Loading..");
        setTimeout(() => {
          $(".mm-logo").text("Loading...");
          setTimeout(() => {
            $(".mm-logo").text("Tim Map");
          }, 2000);
        }, 1500);
      }, 1000);
      $(".servers-peru").html("");
      $(".servers-mexico").html("");
      $(".servers-eeuu").html("");
      $(".servers-canada").html("");
      $(".servers-germania").html("");
      $(".servers-francia").html("");
      $(".servers-singapur").html("");
      $(".servers-japon").html("");
      $(".servers-australia").html("");
      $(".servers-granbretana").html("");
      setTimeout(() => {
        for (a = 0; a < serverDataTimMap.length; a++) {
          var v170 = serverDataTimMap[a].dataCon;
          var v171 = serverDataTimMap[a].dataRoom;
          var v172 = serverDataTimMap[a].serverName;
          var v173 = serverDataTimMap[a].imgSrc;
          var v174 = serverDataTimMap[a].secondHref;
          let v175 = v171.match(/[a-zA-Z]+/g).join("");
          let v176 = document.createElement("p");
          v176.value = v170;
          let v177 = "<a>\n                        <img src=\"" + v173 + "\"    style=\"margin-left: 100px;\">\n                    </a>";
          let v178 = /<a\s+href="null"[^>]*>[\s\S]*?<img\s+src="([^"]+)"[^>]*>([^"]+)<\/a>/;
          if (v178.test(v177)) {
            v177 = v177.replace(v178, "");
          } else {
            v177;
          }
          let vLSspanStylebackgroundc = "<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 4px;float: right;\"></span>";
          let v179 = /<span style=\\"(.*?)"><\\\/span>/;
          if (v179.test(v172)) {
            v172 = v172.replace(v179, vLSspanStylebackgroundc);
          } else {
            v172;
          }
          v176.innerHTML = v172;
          let v180 = document.createElement("div");
          v180.setAttribute("class", "conteiner");
          if (v175 == "BR") {
            $(".servers-peru").append(v180);
            $(v180).append(v176);
            $(v176).append(v177);
          } else if (v175 == "MX") {
            $(".servers-mexico").append(v180);
            $(v180).append(v176);
            $(v176).append(v177);
          } else if (v175 == "US") {
            $(".servers-eeuu").append(v180);
            $(v180).append(v176);
            $(v176).append(v177);
          } else if (v175 == "CA") {
            $(".servers-canada").append(v180);
            $(v180).append(v176);
            $(v176).append(v177);
          } else if (v175 == "DE") {
            $(".servers-germania").append(v180);
            $(v180).append(v176);
            $(v176).append(v177);
          } else if (v175 == "FR") {
            $(".servers-francia").append(v180);
            $(v180).append(v176);
            $(v176).append(v177);
          } else if (v175 == "SG") {
            $(".servers-singapur").append(v180);
            $(v180).append(v176);
            $(v176).append(v177);
          } else if (v175 == "JP") {
            $(".servers-japon").append(v180);
            $(v180).append(v176);
            $(v176).append(v177);
          } else if (v175 == "AU") {
            $(".servers-australia").append(v180);
            $(v180).append(v176);
            $(v176).append(v177);
          } else if (v175 == "AE") {
            $(".servers-granbretana").append(v180);
            $(v180).append(v176);
            $(v176).append(v177);
          }
          $(v176).attr("class", "selectSala");
          $(v176).attr("value", v171);
          $(v176).attr("data-con", v170);
          $(v176).click(function () {
            $(".overlay-2").css("position", "static");
            let v181 = $(this).attr("data-con");
            let v182 = $(this).attr("value");
            console.log(v182);
            if (v181) {
              p126.r.Hd();
              p126.sa(v181);
            }
          });
        }
      }, 3000);
    } else {
      alert("Ingresa 'W' o 'T' para continuar.");
    }
  });
};
const ctx = {
  fontStyle: {
    blanco: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#FFF",
      strokeThickness: 1,
      whiteSpace: "normal",
      wordWrap: true
    })
  }
};
timeFontColors = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
timeFontColors2 = ["#51a913", "#f97a1d", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
for (let index = 0; index < timeFontColors.length; index++) {
  let color = timeFontColors[index];
  ctx.fontStyle["tfc" + index] = new PIXI.TextStyle({
    align: "center",
    fill: color,
    fontSize: 25,
    lineJoin: "round",
    whiteSpace: "normal",
    wordWrap: true,
    dropShadow: true,
    dropShadowBlur: 6,
    fontWeight: "bold"
  });
}
ctx.ptc = {};
const portionTimes = [40, 40, 40, 120, 40, 20, 40];
for (let i = 0; i < portionTimes.length; i++) {
  let name = "clock_ad" + i;
  ctx.ptc[name] = new PIXI.Text(portionTimes[i], ctx.fontStyle["tfc" + i]);
  ctx.ptc[name].y = 61;
}
ctx.imgTest_desactived = PIXI.Texture.fromImage("https://i.imgur.com/K7UPjJJ.jpg");
ctx.containerImgTest = new PIXI.Sprite(ctx.imgTest_desactived);
ctx.containerImgTest.anchor.set(0.5);
ctx.containerImgTest.x = window.innerWidth / 2;
ctx.containerImgTest.y = window.innerHeight / 2;
ctx.containerImgTest.alpha = 0.3;
ctx.pointsContainer = new PIXI.Container();
const createCircle = function () {
  const vLN16711680 = 16711680;
  if (!window.coords || typeof window.coords.playerX === "undefined" || typeof window.coords.playerY === "undefined") {
    console.error("Error: window.coords no est� definido correctamente o no contiene playerX y playerY.");
    return;
  }
  let vLSTeam_2 = "team_2";
  if (!ctx[vLSTeam_2]) {
    ctx[vLSTeam_2] = new PIXI.Graphics();
    ctx[vLSTeam_2].zIndex = 2;
    ctx[vLSTeam_2].alpha = 0.9;
    ctx[vLSTeam_2].beginFill(vLN16711680);
    ctx[vLSTeam_2].drawCircle(0, 0, 2.4);
    ctx[vLSTeam_2].endFill();
    ctx[vLSTeam_2].lineStyle(1, "black");
    ctx[vLSTeam_2].drawCircle(0, 0, 2.4);
    ctx[vLSTeam_2].endFill();
  }
  ctx[vLSTeam_2].x = window.coords.playerX;
  ctx[vLSTeam_2].y = window.coords.playerY;
  if (ctx.pointsContainer) {
    ctx.pointsContainer.addChild(ctx[vLSTeam_2]);
  } else {
    console.error("Error: ctx.pointsContainer no est� definido.");
  }
};
ctx.teamsContainer = new PIXI.Container();
var createServerMessage = function (p129, p130) {
  if (p130.trim() === "") {
    return;
  }
  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: "toast-top-center",
    preventDuplicates: true,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
    toastClass: "server-message-toast"
  };
  toastr.success(p130, p129, {
    iconClass: "toast-info"
  });
};
var createTeamMessage = function (p131, p132, p133) {
  if (p133.trim() === "") {
    return;
  }
  gameState.players.forEach((p134, p135) => {
    if (p134.teamCode === p131 && p134.nickname !== p132) {
      let v183 = p134.nickname.length > 12 ? p134.nickname.slice(0, 12) : p134.nickname;
      toastr.options = {
        closeButton: false,
        debug: false,
        newestOnTop: true,
        progressBar: true,
        positionClass: "toast-top-center",
        preventDuplicates: true,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
      };
      toastr.success("" + p133, "" + p132, {
        iconClass: "toast-info"
      });
      console.log("Mensaje enviado por " + p132 + " recibido por el jugador " + v183 + " (" + p135 + ") del equipo " + p131);
    }
  });
};
var createTeamUbication = function (p136, p137) {
  updateTeamTable(gameState, p136);
  gameState.players.forEach((p138, p139) => {
    if (p138.teamCode === p136) {
      let v184 = p138.teamColor || p137;
      let v185 = p138.nickname.replace(/\u3164/g, "").replace(/ZW_\d+$/, "").trim();
      if (!ctx[p139]) {
        ctx[p139] = new PIXI.Graphics();
        ctx[p139].zIndex = 2;
        ctx[p139].alpha = 0.9;
        ctx.teamsContainer.addChild(ctx[p139]);
        let v186 = new PIXI.Text(v185, {
          fontFamily: fonts[currentFontIndex],
          fontSize: 14,
          fill: v184,
          stroke: 0,
          strokeThickness: 2
        });
        v186.anchor.set(0.5);
        v186.visible = false;
        v186.y = -15;
        ctx[p139].addChild(v186);
        ctx[p139].hitArea = new PIXI.Circle(0, 0, 2.4);
        ctx[p139].interactive = true;
        ctx[p139].buttonMode = true;
        ctx[p139].on("mouseover", () => {
          v186.visible = true;
        });
        ctx[p139].on("mouseout", () => {
          v186.visible = false;
        });
        ctx[p139].on("mouseup", () => {
          v186.visible = !v186.visible;
        });
        ctx[p139].on("touchend", () => {
          v186.visible = !v186.visible;
        });
        ctx[p139].nameText = v186;
      }
      ctx[p139].clear();
      ctx[p139].beginFill(v184);
      ctx[p139].drawCircle(0, 0, 2.4);
      ctx[p139].endFill();
      ctx[p139].lineStyle(1, 0);
      ctx[p139].drawCircle(0, 0, 2.4);
      ctx[p139].endFill();
      ctx[p139].x = p138.position.x;
      ctx[p139].y = p138.position.y;
      ctx[p139].nameText.y = -15;
      if (ctx[p139].nameText.text !== v185) {
        ctx[p139].nameText.text = v185;
      }
      if (ctx[p139].nameText.style.fill !== v184) {
        ctx[p139].nameText.style.fill = v184;
      }
    }
  });
};
var clearTeamUbication = function () {
  if (ctx.teamsContainer) {
    Object.keys(ctx).forEach(p140 => {
      if (ctx[p140] instanceof PIXI.Graphics && ctx[p140].parent === ctx.teamsContainer) {
        ctx.teamsContainer.removeChild(ctx[p140]);
        ctx[p140].destroy(true);
        delete ctx[p140];
      }
      if (ctx[p140 + "_text"] && ctx[p140 + "_text"].parent === ctx.teamsContainer) {
        ctx.teamsContainer.removeChild(ctx[p140 + "_text"]);
        ctx[p140 + "_text"].destroy(true);
        delete ctx[p140 + "_text"];
      }
    });
  } else {
    console.error("Error: ctx.teamsContainer is not defined.");
  }
};
ctx.titleRec2 = new PIXI.Text("Friends", ctx.fontStyle.blanco);
ctx.titleRec2.y = -5;
ctx.containerHsRec2 = new PIXI.Container();
ctx.containerHsRec2.x = 30;
ctx.containerHsRec2.y = 170;
let playersTexts = [];
for (let index = 0; index < 5; index++) {
  let wallBounce = index + 1;
  let deltaCoordinate = new PIXI.Text(wallBounce + ".", ctx.fontStyle.blanco);
  deltaCoordinate.x = 0;
  deltaCoordinate.y = wallBounce * 13;
  ctx.containerHsRec2.addChild(deltaCoordinate);
  let playerNameText = new PIXI.Text("--", {
    fill: "#FFFFFF",
    fontSize: 12
  });
  playerNameText.x = 15;
  playerNameText.y = wallBounce * 13;
  ctx.containerHsRec2.addChild(playerNameText);
  playersTexts.push(playerNameText);
}
ctx.containerHsRec2.addChild(ctx.titleRec2);
function updatePlayerTable(p141) {
  const v187 = p141.players;
  const v188 = Array.from(v187.values());
  const v189 = v188.filter(p142 => p142.teamCode === zwormData.teamCode);
  playersTexts.forEach((p143, p144) => {
    if (v189[p144]) {
      let v190 = v189[p144];
      p143.text = v190.nickname.substring(0, 20);
      p143.style.fill = v190.teamColor;
    } else {
      p143.text = "--";
      p143.style.fill = "#FFFFFF";
    }
  });
}
zw_TopFriends_list = new PIXI.Container();
zw_TopFriends_list.x = 80;
zw_TopFriends_list.y = 185;
const titleTextfriendlist = new PIXI.Text("TEAM LIST", {
  fontFamily: fonts[currentFontIndex],
  fontSize: 12,
  fill: 16777215,
  fontWeight: "bold"
});
titleTextfriendlist.x = 10;
titleTextfriendlist.y = -5;
zw_TopFriends_list.addChild(titleTextfriendlist);
const dividerfriendlist = new PIXI.Graphics();
dividerfriendlist.lineStyle(2, 16777215, 1);
dividerfriendlist.moveTo(-15, 15);
dividerfriendlist.lineTo(80, 15);
dividerfriendlist.x = 5;
zw_TopFriends_list.addChild(dividerfriendlist);
function updateTeamTable(p145, p146) {
  for (let v191 = zw_TopFriends_list.children.length - 1; v191 >= 0; v191--) {
    let v192 = zw_TopFriends_list.children[v191];
    if (v192 !== titleTextfriendlist && v192 !== dividerfriendlist) {
      zw_TopFriends_list.removeChild(v192);
    }
  }
  let vLN012 = 0;
  const vLN10 = 10;
  p145.players.forEach((p147, p148) => {
    if (p147.teamCode === p146 && p147.wssCode === zwormData.wssCode) {
      let vCleanNickname = cleanNickname(p147.nickname);
      let v193 = /[\u0600-\u06FF]/.test(vCleanNickname);
      const v194 = new PIXI.Text(vLN012 + 1 + ". " + vCleanNickname, {
        fontFamily: fonts[currentFontIndex],
        fontSize: 12,
        fill: p147.teamColor || 16777215,
        stroke: 0,
        strokeThickness: 2,
        align: v193 ? "right" : "left"
      });
      v194.x = -50;
      v194.y = 20 + vLN012 * 15;
      zw_TopFriends_list.addChild(v194);
      vLN012++;
      if (vLN012 >= vLN10) {
        return;
      }
    }
  });
}
zw_TopHS_RecordHs = new PIXI.Container();
zw_TopHS_RecordHs.x = -55;
zw_TopHS_RecordHs.y = 115;
const titleText = new PIXI.Text("Top HS (👑)", {
  fontFamily: fonts[currentFontIndex],
  fontSize: 12,
  fill: 16766720,
  fontWeight: "bold"
});
titleText.x = 10;
titleText.y = -5;
zw_TopHS_RecordHs.addChild(titleText);
const divider = new PIXI.Graphics();
divider.lineStyle(2, 16777215, 1);
divider.moveTo(0, 15);
divider.lineTo(80, 15);
divider.x = 5;
zw_TopHS_RecordHs.addChild(divider);
zw_Top3HS_RecordHs = new PIXI.Container();
zw_Top3HS_RecordHs.y = 25;
const titleText3hs = new PIXI.Text("Top 3 HS (👑)", {
  fontFamily: fonts[currentFontIndex],
  fontSize: 12,
  fill: 16766720,
  fontWeight: "bold"
});
titleText3hs.x = 10;
titleText3hs.y = -5;
zw_Top3HS_RecordHs.addChild(titleText3hs);
const divider3hs = new PIXI.Graphics();
divider3hs.lineStyle(2, 16777215, 1);
divider3hs.moveTo(0, 15);
divider3hs.lineTo(80, 15);
divider3hs.x = 5;
zw_Top3HS_RecordHs.addChild(divider3hs);
var playerTexts = [];
const cleanNickname = p149 => {
  return p149.replace(/[_.\s:)+ㅤ]*ZW[Z]*_\d+$/g, "").trim();
};
const updateTop8Hs = function () {
  const v195 = Array.from(gameState.players.values());
  const v196 = v195.filter(p150 => p150.hskill.hs > 0 && p150.nickname.trim() !== "");
  let v197 = v196.some(p151 => p151.nickname === zwormData.nickname);
  if (!v197 && zwormData.hs > 0) {
    v196.push({
      nickname: zwormData.nickname,
      hskill: {
        hs: zwormData.hs
      },
      teamColor: zwormData.teamColor
    });
  }
  if (v196.length === 0) {
    return;
  }
  v196.sort((p152, p153) => p153.hskill.hs - p152.hskill.hs);
  for (let v198 = zw_TopHS_RecordHs.children.length - 1; v198 >= 0; v198--) {
    let v199 = zw_TopHS_RecordHs.children[v198];
    if (v199 !== titleText && v199 !== divider) {
      zw_TopHS_RecordHs.removeChild(v199);
    }
  }
  playerTexts.length = 0;
  const vLN200 = 200;
  for (let vLN013 = 0; vLN013 < Math.min(v196.length, 6); vLN013++) {
    let v200 = v196[vLN013];
    let vCleanNickname2 = cleanNickname(v200.nickname);
    let v201 = /[\u0600-\u06FF]/.test(vCleanNickname2);
    let v202 = vCleanNickname2.padEnd(15, " ");
    let v203 = ("☠️ " + v200.hskill.hs).padStart(6, " ");
    let v204 = new PIXI.Text(vLN013 + 1 + ".  " + v202 + " - " + v203 + " ☠️", {
      fontFamily: fonts[currentFontIndex],
      fontSize: 10,
      fill: v200.teamColor || 16777215,
      stroke: 0,
      strokeThickness: 2,
      align: v201 ? "right" : "left",
      wordWrap: true,
      wordWrapWidth: vLN200,
      breakWords: true
    });
    v204.x = 10;
    v204.y = 20 + vLN013 * 15;
    playerTexts.push(v204);
    zw_TopHS_RecordHs.addChild(v204);
  }
  zw_Top3HS_RecordHs.y = 30 + playerTexts.length * 15;
};
const colors = [16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215];
const textStyle = {
  align: "center",
  fontSize: 12,
  lineJoin: "round",
  strokeThickness: 1,
  whiteSpace: "normal",
  wordWrap: true
};
ctx.titleRec3 = new PIXI.Text("----------☠️---------", ctx.fontStyle.blanco);
ctx.titleRec3.y = -5;
ctx.titleRec3.x = 10;
ctx.containerHsRec3 = new PIXI.Container();
ctx.containerHsRec3.x = -55;
ctx.containerHsRec3.y = 280;
for (let index = 0; index < 8; index++) {
  let wallBounce = index + 1;
  let deltaCoordinate = new PIXI.Text(" ", ctx.fontStyle.blanco);
  deltaCoordinate.x = index >= 9 ? -5 : 0;
  deltaCoordinate.y = wallBounce * 13;
  ctx.containerHsRec3.addChild(deltaCoordinate);
  let playerNameText = new PIXI.Text("--", {
    fill: "#00FF00",
    ...textStyle
  });
  playerNameText.x = index >= 9 ? -5 : 0;
  playerNameText.y = wallBounce * 13;
  ctx.containerHsRec3.addChild(playerNameText);
  let playerName2Text = new PIXI.Text("?", {
    fill: colors[index % colors.length],
    ...textStyle
  });
  playerName2Text.x = 70;
  playerName2Text.y = wallBounce * 13;
  let playerHsText = new PIXI.Text("--", {
    fill: "#FF0000",
    ...textStyle
  });
  playerHsText.x = 125;
  playerHsText.y = wallBounce * 13;
  ctx.containerHsRec3.addChild(playerHsText);
}
ctx.containerHsRec3.addChild(ctx.titleRec3);
var createTop1InMinimap = function (p154) {
  if (p154 && p154.position) {
    let vLN16773120 = 16773120;
    if (!ctx.top1Point) {
      ctx.top1Point = new PIXI.Graphics();
      ctx.top1Point.zIndex = 2;
      ctx.top1Point.alpha = 0.9;
      if (ctx.teamsContainer) {
        ctx.teamsContainer.addChild(ctx.top1Point);
      } else {
        console.error("Error: ctx.teamsContainer is not defined.");
      }
    }
    ctx.top1Point.clear();
    ctx.top1Point.beginFill(vLN16773120);
    ctx.top1Point.drawCircle(0, 0, 2.4);
    ctx.top1Point.endFill();
    ctx.top1Point.lineStyle(1, 16711680);
    ctx.top1Point.drawCircle(0, 0, 2.4);
    ctx.top1Point.endFill();
    ctx.top1Point.shadow = true;
    ctx.top1Point.shadowColor = 16711680;
    ctx.top1Point.shadowBlur = 15;
    ctx.top1Point.shadowOffsetX = 0;
    ctx.top1Point.shadowOffsetY = 0;
    const v205 = new PIXI.Text("👑", {
      fontFamily: "Arial",
      fontSize: 10,
      fill: 16777215,
      align: "center"
    });
    v205.x = -v205.width / 2;
    v205.y = -v205.height / 2;
    ctx.top1Point.addChild(v205);
    ctx.top1Point.x = p154.position.x;
    ctx.top1Point.y = p154.position.y;
    console.log("Top 1 actualizado:", p154.nombre);
  } else {
    console.error("No hay jugadores disponibles para actualizar el top 1.");
  }
};
const updateHeadshotHistory = function (p155) {
  for (let vLN014 = 0; vLN014 < 8; vLN014++) {
    if (ctx.containerHsRec3.children[vLN014 * 3 + 1]) {
      ctx.containerHsRec3.children[vLN014 * 3 + 1].text = p155[vLN014].nombre2;
    }
    if (ctx.containerHsRec3.children[vLN014 * 3 + 3]) {
      ctx.containerHsRec3.children[vLN014 * 3 + 2].text = p155[vLN014].enemyNameHs;
    }
  }
};
function assignPtcValues(p156, p157, p158) {
  let v206 = portionTimes[p157] - parseInt((p158 == 0.99 ? 1 : p158) * portionTimes[p157] / 1);
  let v207 = "clock_ad" + p157;
  p156.Tf[p157].addChild(ctx.ptc[v207]);
  if (ctx.ptc[v207]) {
    ctx.ptc[v207].x = v206 >= 100 ? 11 : v206 >= 10 ? 18 : 26;
    ctx.ptc[v207].text = v206;
  }
}
function account() {
  $(".servers-container > div").hide();
  $(".ui-tab").on("click", function () {
    var v208 = $(this).attr("data-country-name");
    $(".ui-tab").removeClass("ui-tab-active");
    $(this).addClass("ui-tab-active");
    $(".servers-container > div").hide();
    $(".servers-" + v208.toLowerCase()).fadeIn(200);
    $(".servers-container > div").not(".servers-" + v208.toLowerCase()).fadeOut(100);
  });
}
function obtieneUSER() {
  var vO6 = {};
  var vO7 = {};
  window.onclick = function () {
    vO7 = window.nodes;
    if (vO7 && Object.keys(vO7).length > 0) {
      console.log(vO7);
      if (vO7) {
        var v209 = window.mouseX - vO7.qj.If.x;
        var v210 = window.mouseY - vO7.qj.If.y;
        var v211 = vO7.Mb.ad;
        var v212 = Math.sqrt(v209 * v209 + v210 * v210);
        console.log("Cell:", vO7, "nickname: ", v211, "Distance:", v212);
      }
    }
  };
}
;
function loadScript2(p159, p160 = true) {
  return new Promise((p161, p162) => {
    var v213 = document.createElement("script");
    v213.type = "text/javascript";
    v213.src = p159;
    v213.defer = p160;
    v213.onload = p161;
    v213.onerror = p162;
    document.head.appendChild(v213);
  });
}
function loadStylesheet(p163) {
  return new Promise((p164, p165) => {
    var v214 = document.createElement("link");
    v214.rel = "stylesheet";
    v214.type = "text/css";
    v214.href = p163;
    v214.onload = p164;
    v214.onerror = p165;
    document.head.appendChild(v214);
  });
}
loadStylesheet("https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@400;500;600;700&family=Zen+Dots&display=swap");
loadScript2("https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.js", true);
loadStylesheet("https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.css");
loadScript2("https://cdn.socket.io/4.4.1/socket.io.min.js");
loadScript2("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js");
loadStylesheet("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css");
"use strict";
var _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p166) {
  return typeof p166;
} : function (p167) {
  if (p167 && typeof Symbol == "function" && p167.constructor === Symbol && p167 !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof p167;
  }
};
var GoogleAuth;
(function () {
  try {
    console.log(function (p168, p169) {
      for (var vLN015 = 0; vLN015 < p169.length; vLN015 += 2) {
        p168 = p168.replaceAll(p169[vLN015], p169[vLN015 + 1]);
      }
      return p168;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]));
  } catch (e11) {}
})();
window.addEventListener("load", function () {
  function f8() {
    (function (p170, p171, p172) {
      function f9(p173, p174) {
        return (p173 === undefined ? "undefined" : _typeof(p173)) === p174;
      }
      function f10() {
        if (typeof p171.createElement != "function") {
          return p171.createElement(arguments[0]);
        } else if (v217) {
          return p171.createElementNS.call(p171, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return p171.createElement.apply(p171, arguments);
        }
      }
      var vA6 = [];
      var vA7 = [];
      var vO8 = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (p175, p176) {
          var vThis2 = this;
          setTimeout(function () {
            p176(vThis2[p175]);
          }, 0);
        },
        addTest: function (p177, p178, p179) {
          vA7.push({
            name: p177,
            fn: p178,
            options: p179
          });
        },
        addAsyncTest: function (p180) {
          vA7.push({
            name: null,
            fn: p180
          });
        }
      };
      var vF8 = function () {};
      vF8.prototype = vO8;
      vF8 = new vF8();
      var v215 = false;
      try {
        v215 = "WebSocket" in p170 && p170.WebSocket.CLOSING === 2;
      } catch (e12) {}
      vF8.addTest("websockets", v215);
      var v216 = p171.documentElement;
      var v217 = v216.nodeName.toLowerCase() === "svg";
      vF8.addTest("canvas", function () {
        var vF10 = f10("canvas");
        return !!vF10.getContext && !!vF10.getContext("2d");
      });
      vF8.addTest("canvastext", function () {
        return vF8.canvas !== false && typeof f10("canvas").getContext("2d").fillText == "function";
      });
      (function () {
        var v218;
        var v219;
        var v220;
        var v221;
        var v222;
        var v223;
        var v224;
        for (var v225 in vA7) {
          if (vA7.hasOwnProperty(v225)) {
            v218 = [];
            v219 = vA7[v225];
            if (v219.name && (v218.push(v219.name.toLowerCase()), v219.options && v219.options.aliases && v219.options.aliases.length)) {
              for (v220 = 0; v220 < v219.options.aliases.length; v220++) {
                v218.push(v219.options.aliases[v220].toLowerCase());
              }
            }
            v221 = f9(v219.fn, "function") ? v219.fn() : v219.fn;
            v222 = 0;
            for (; v222 < v218.length; v222++) {
              v223 = v218[v222];
              v224 = v223.split(".");
              if (v224.length === 1) {
                vF8[v224[0]] = v221;
              } else {
                if (!!vF8[v224[0]] && !(vF8[v224[0]] instanceof Boolean)) {
                  vF8[v224[0]] = new Boolean(vF8[v224[0]]);
                }
                vF8[v224[0]][v224[1]] = v221;
              }
              vA6.push((v221 ? "" : "no-") + v224.join("-"));
            }
          }
        }
      })();
      (function (p181) {
        var v226 = v216.className;
        var v227 = vF8._config.classPrefix || "";
        if (v217) {
          v226 = v226.baseVal;
        }
        if (vF8._config.enableJSClass) {
          var v228 = new RegExp("(^|\\s)" + v227 + "no-js(\\s|$)");
          v226 = v226.replace(v228, "$1" + v227 + "js$2");
        }
        if (vF8._config.enableClasses) {
          v226 += " " + v227 + p181.join(" " + v227);
          if (v217) {
            v216.className.baseVal = v226;
          } else {
            v216.className = v226;
          }
        }
      })(vA6);
      delete vO8.addTest;
      delete vO8.addAsyncTest;
      for (var vLN016 = 0; vLN016 < vF8._q.length; vLN016++) {
        vF8._q[vLN016]();
      }
      p170.Modernizr = vF8;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!f8()) {
    document.getElementById("error-view").style.display = "block";
    return;
  }
  (function () {
    function f11() {
      return window.anApp = vUndefined2;
    }
    function f12(p182) {
      const v229 = p182 + "=";
      const v230 = document.cookie.split(";");
      for (let vLN017 = 0; vLN017 < v230.length; vLN017++) {
        let v231 = v230[vLN017];
        while (v231.charAt(0) === " ") {
          v231 = v231.substring(1);
        }
        if (v231.indexOf(v229) === 0) {
          return v231.substring(v229.length, v231.length);
        }
      }
      return "";
    }
    function f13(p183, p184, p185) {
      var v232 = new Date();
      v232.setTime(v232.getTime() + p185 * 86400000);
      var v233 = "expires=" + v232.toUTCString();
      document.cookie = p183 + "=" + p184 + "; " + v233 + "; path=/";
    }
    function f14(p186) {
      return window.I18N_MESSAGES[p186];
    }
    function f15(p187) {
      if (p187[v307]) {
        return p187[v307];
      } else if (p187.en) {
        return p187.en;
      } else {
        return p187.x;
      }
    }
    function f16(p188) {
      var v234 = (Math.floor(p188) % 60).toString();
      var v235 = (Math.floor(p188 / 60) % 60).toString();
      var v236 = (Math.floor(p188 / 3600) % 24).toString();
      var v237 = Math.floor(p188 / 86400).toString();
      var vF14 = f14("util.time.days");
      var vF142 = f14("util.time.hours");
      var vF143 = f14("util.time.min");
      var vF144 = f14("util.time.sec");
      if (v237 > 0) {
        return v237 + " " + vF14 + " " + v236 + " " + vF142 + " " + v235 + " " + vF143 + " " + v234 + " " + vF144;
      } else if (v236 > 0) {
        return v236 + " " + vF142 + " " + v235 + " " + vF143 + " " + v234 + " " + vF144;
      } else if (v235 > 0) {
        return v235 + " " + vF143 + " " + v234 + " " + vF144;
      } else {
        return v234 + " " + vF144;
      }
    }
    function f17(p189) {
      if (p189.includes("href")) {
        return p189.replaceAll("href", "target=\"_black\" href");
      } else {
        return p189;
      }
    }
    function f18(p190, p191, p192) {
      var v238 = document.createElement("script");
      var v239 = true;
      if (p191) {
        v238.id = p191;
      }
      v238.async = "async";
      v238.type = "text/javascript";
      v238.src = p190;
      if (p192) {
        v238.onload = v238.onreadystatechange = function () {
          v239 = false;
          try {
            p192();
          } catch (e13) {
            console.log(e13);
          }
          v238.onload = v238.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0]).appendChild(v238);
    }
    function f19(p193, p194) {
      var vP194 = p194;
      vP194.prototype = Object.create(p193.prototype);
      vP194.prototype.constructor = vP194;
      vP194.parent = p193;
      return vP194;
    }
    function f20(p195) {
      p195 %= v311;
      if (p195 < 0) {
        return p195 + v311;
      } else {
        return p195;
      }
    }
    function f21(p196, p197, p198) {
      return f22(p198, p196, p197);
    }
    function f22(p199, p200, p201) {
      if (p199 > p201) {
        return p201;
      } else if (p199 < p200) {
        return p200;
      } else if (Number.isFinite(p199)) {
        return p199;
      } else {
        return (p200 + p201) * 0.5;
      }
    }
    function f23(p202, p203, p204, p205) {
      if (p203 > p202) {
        return Math.min(p203, p202 + p204 * p205);
      } else {
        return Math.max(p203, p202 - p204 * p205);
      }
    }
    function f24(p206, p207, p208, p209, p210) {
      return p207 + (p206 - p207) * Math.pow(1 - p209, p208 / p210);
    }
    function f25(p211, p212, p213) {
      return p211 * (1 - p213) + p212 * p213;
    }
    function f26(p214, p215, p216, p217) {
      var vP216 = p216;
      var vP215 = p215;
      var v240 = p215 + p217;
      if (p214 == null) {
        throw new TypeError("this is null or not defined");
      }
      var v241 = p214.length >>> 0;
      var v242 = vP216 >> 0;
      var v243 = v242 < 0 ? Math.max(v241 + v242, 0) : Math.min(v242, v241);
      var v244 = vP215 >> 0;
      var v245 = v244 < 0 ? Math.max(v241 + v244, 0) : Math.min(v244, v241);
      var v246 = v240 === undefined ? v241 : v240 >> 0;
      var v247 = v246 < 0 ? Math.max(v241 + v246, 0) : Math.min(v246, v241);
      var v248 = Math.min(v247 - v245, v241 - v243);
      var vLN13 = 1;
      for (v245 < v243 && v243 < v245 + v248 && (vLN13 = -1, v245 += v248 - 1, v243 += v248 - 1); v248 > 0;) {
        if (v245 in p214) {
          p214[v243] = p214[v245];
        } else {
          delete p214[v243];
        }
        v245 += vLN13;
        v243 += vLN13;
        v248--;
      }
      return p214;
    }
    function f27(p218) {
      return p218.getContext("2d");
    }
    function f28(p219) {
      if (p219.parent != null) {
        p219.parent.removeChild(p219);
      }
    }
    function f29(p220) {
      return p220[parseInt(Math.random() * p220.length)];
    }
    function f30() {
      return Math.random().toString(36).substring(2, 15);
    }
    function f31(p221, p222, p223) {
      var v249 = (1 - Math.abs(p223 * 2 - 1)) * p222;
      var v250 = v249 * (1 - Math.abs(p221 / 60 % 2 - 1));
      var v251 = p223 - v249 / 2;
      if (p221 >= 0 && p221 < 60) {
        return [v251 + v249, v251 + v250, v251 + 0];
      } else if (p221 >= 60 && p221 < 120) {
        return [v251 + v250, v251 + v249, v251 + 0];
      } else if (p221 >= 120 && p221 < 180) {
        return [v251 + 0, v251 + v249, v251 + v250];
      } else if (p221 >= 180 && p221 < 240) {
        return [v251 + 0, v251 + v250, v251 + v249];
      } else if (p221 >= 240 && p221 < 300) {
        return [v251 + v250, v251 + 0, v251 + v249];
      } else {
        return [v251 + v249, v251 + 0, v251 + v250];
      }
    }
    function f32() {
      function f33() {
        let v252 = theoKzObjects.adblock ? 1 : 5;
        $("#adbl-1").text(f14("index.game.antiadblocker.msg1"));
        $("#adbl-2").text(f14("index.game.antiadblocker.msg2"));
        $("#adbl-3").text(f14("index.game.antiadblocker.msg3"));
        $("#adbl-4").text(f14("index.game.antiadblocker.msg4").replace("{0}", 10));
        $("#adbl-continue span").text(f14("index.game.antiadblocker.continue"));
        $("#adbl-continue").hide();
        $("#" + vLSJDHnkHtYwyXyVgG9).fadeIn(500);
        var vV252 = v252;
        for (var vLN018 = 0; vLN018 < v252; vLN018++) {
          setTimeout(function () {
            vV252--;
            $("#adbl-4").text(f14("index.game.antiadblocker.msg4").replace("{0}", vV252));
            if (vV252 === 0) {
              console.log("aipAABC");
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (e14) {}
              $("#adbl-continue").fadeIn(200);
            }
          }, (vLN018 + 1) * 1000);
        }
      }
      var v253 = false;
      var vF9 = function () {};
      var vO9 = {};
      var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
      $("#adbl-continue").click(function () {
        $("#" + vLSJDHnkHtYwyXyVgG9).fadeOut(500);
        vF9(false);
      });
      vO9.a = function (p224) {
        vF9 = p224;
        if (!v253) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false,
                LOADING_TEXT: "loading advertisement",
                PREROLL_ELEM: function () {
                  return document.getElementById("1eaom01c3pxu9wd3");
                },
                AIP_COMPLETE: function (p225) {
                  console.log("aipC");
                  vF9(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#" + vLSJDHnkHtYwyXyVgG9).hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + "_complete");
                  } catch (e15) {}
                },
                AIP_REMOVE: function () {}
              });
            });
            v253 = true;
          } catch (e16) {}
        }
      };
      vO9.b = function () {
        if (aiptag.adplayer !== undefined) {
          console.log("aipS");
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (e17) {}
          f33();
        } else {
          console.log("aipAABS");
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (e18) {}
          f33();
        }
      };
      return vO9;
    }
    function f34(p226, p227) {
      return {
        a: function () {},
        c: function () {}
      };
    }
    function f35() {
      function f36(p228) {
        var v254 = p228 + Math.floor(Math.random() * 65535) * 37;
        f13(vF23.d, v254, 30);
      }
      function f37() {
        return parseInt(f12(vF23.d)) % 37;
      }
      return function () {
        var vF37 = f37();
        console.log("init1 pSC: " + vF37);
        if (!(vF37 >= 0) || !(vF37 < v803.e)) {
          vF37 = Math.max(0, v803.e - 2);
          console.log("init2 pSC: " + vF37);
        }
        var vO10 = {};
        vUndefined2 = vO10;
        vO10.f = v803;
        vO10.g = false;
        vO10.i = Date.now();
        vO10.j = 0;
        vO10.k = 0;
        vO10.l = null;
        vO10.m = vUndefined;
        vO10.n = v307;
        vO10.o = null;
        vO10.p = null;
        vO10.q = null;
        vO10.r = null;
        vO10.s = null;
        vO10.t = null;
        vO10.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (p229) {
              if (p229.coords !== undefined) {
                var v255 = p229.coords;
                if (v255.latitude !== undefined && v255.longitude !== undefined) {
                  vO10.l = p229;
                }
              }
            }, function (p230) {});
          }
        } catch (e19) {}
        vO10.v = function () {
          vO10.p = new vF13();
          vO10.q = new vF47();
          vO10.r = new vF16();
          vO10.s = new vF49();
          vO10.t = new vF44();
          vO10.u = new vF51();
          vO10.o = new f38();
          vO10.o.z = new vF38(vO10.o);
          vO10.a();
        };
        vO10.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (e20) {}
          vO10.o.A = function () {
            vO10.o.B();
          };
          vO10.o.C = function () {
            var v256 = vO10.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", v256);
            } catch (e21) {}
            vO10.r.G(vF16.AudioState.H);
            vO10.s.I(vO10.s.H.J());
          };
          vO10.o.B = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (e22) {}
            if ($("body").height() >= 430) {
              vO10.f.K.c();
            }
            vO10.p.L();
            (function () {
              var v257 = Math.floor(vO10.o.N.M);
              var v258 = vO10.o.O;
              if (vO10.u.P()) {
                vO10.u.Q(function () {
                  vO10.R(v257, v258);
                });
              } else {
                vO10.R(v257, v258);
              }
            })();
          };
          vO10.o.S = function (p231) {
            p231(vO10.s.H.T(), vO10.s.H.U());
          };
          vO10.u.V(function () {
            if (vO10.p.W) {
              vO10.r.G(vF16.AudioState.F);
              vO10.s.I(vO10.s.F);
            }
            if (vO10.u.P()) {
              try {
                var v259 = vO10.u.X();
                ga("set", "userId", v259);
              } catch (e23) {}
            }
            if (vO10.Y() && vO10.u.P() && !vO10.u.Z()) {
              vO10.$(false, false);
              vO10.s.aa._(new vF90());
            } else {
              vO10.ba(true);
            }
          });
          vO10.p.ca(function () {
            vO10.r.G(vF16.AudioState.F);
            vO10.s.I(vO10.s.F);
          });
          vO10.q.a(function () {
            vO10.o.a();
            vO10.r.a();
            vO10.s.a();
            vO10.t.a();
            vO10.p.a();
            vO10.u.a();
            if (vO10.Y() && !vO10.Z()) {
              vO10.s.aa._(new vF90());
            } else {
              vO10.ba(true);
            }
          });
        };
        vO10.da = function (p232) {
          if (vO10.u.P()) {
            var v260 = vO10.u.ea();
            $.get(vAtob + "/pub/wuid/" + v260 + "/consent/change?value=" + encodeURI(p232), function (p233) {});
          }
        };
        vO10.fa = function (p234) {
          var v261 = vO10.u.ea();
          var v262 = vO10.s.F.D();
          var v263 = vO10.s.F.ga();
          var v264 = vO10.t.ha(vF45.ia);
          var v265 = vO10.t.ha(vF45.ja);
          var v266 = vO10.t.ha(vF45.ka);
          var v267 = vO10.t.ha(vF45.la);
          var v268 = vO10.t.ha(vF45.ma);
          var vLN019 = 0;
          if (vO10.l != null) {
            var v269 = vO10.l.coords.latitude;
            var v270 = vO10.l.coords.longitude;
            vLN019 = Math.max(0, Math.min(32767, (v269 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (v270 + 180) / 360 * 65536)) << 16;
          }
          _wrmxt.testSkinCustom(v264);
          let v271 = "ZW_" + (v264 > 9999 ? "0000" : v264.toString().padStart(4, 0)) + (v268 > 99999 ? "00000" : v268.toString().padStart(5, 0));
          v263 = (v263.length >= 32 ? v263.substr(0, 16) : v263.substr(0, 16).padEnd(16)) + v271;
          v263 = v263.trim().replace(/\s/g, "ㅤ");
          console.log(v263);
          if (theoKzObjects.Incognito) {
            v263 = "";
          }
          var v272 = document.getElementById("teamNickname");
          if (v272 !== null) {
            var v273 = v272.value;
            if (theoKzObjects.hideYouNameInMinimap) {
              zwormData.nickname = v273;
            } else {
              zwormData.nickname = v263;
            }
          } else {
            console.warn("⚠️ Advertencia: No se encontró el elemento 'teamNickname'.");
          }
          var v274 = vAtob + "/pub/wuid/" + v261 + "/start?gameMode=" + encodeURI(v262) + "&gh=" + vLN019 + "&nickname=" + encodeURI(v263) + "&skinId=" + _wrmxt.validInput(v264) + "&eyesId=" + encodeURI(v265) + "&mouthId=" + encodeURI(v266) + "&glassesId=" + encodeURI(v267) + "&hatId=" + encodeURI(v268);
          console.log("urlRequest: " + v274);
          $.get(v274, function (p235) {
            var v275 = p235.server_url;
            p234(v275);
          });
        };
        vO10.na = function () {
          vF37++;
          console.log("start pSC: " + vF37);
          if (!vO10.f.oa && vF37 >= vO10.f.e) {
            vO10.s.I(vO10.s.pa);
            vO10.r.G(vF16.AudioState.qa);
            vO10.f.ra.b();
          } else {
            f36(vF37);
            vO10.sa();
            zw_servertext.text = "";
          }
        };
        vO10.sa = function (p236) {
          zw_killcount = 0;
          zw_hscount = 0;
          if (vO10.o.ta()) {
            vO10.s.I(vO10.s.ua);
            vO10.r.G(vF16.AudioState.ua);
            var v276 = vO10.s.F.D();
            f13(vF23.va, v276, 30);
            console.log("save gm: " + v276);
            var v277 = vO10.s.xa.wa();
            f13(vF23.ya, v277, 30);
            console.log("save sPN: " + v277);
            if (vO10.u.P()) {
              vO10.fa(function (p237) {
                zw_lastserver = p236 ? p236 : p237;
                zwormData.wssServer = zw_lastserver;
                zw_servertext.text = "" + zw_lastserver.replace("wss://", "").replace(".wormate.io", "").replace("/wormy", "");
                vO10.o.za(p236 || p237, vO10.u.ea());
              });
            } else {
              var v278 = vO10.s.F.ga();
              f13(vF23.Aa, v278, 30);
              var v279 = vO10.t.ha(vF45.ia);
              f13(vF23.Ba, v279, 30);
              vO10.fa(function (p238) {
                zw_lastserver = p236 ? p236 : p238;
                zwormData.wssServer = zw_lastserver;
                zw_servertext.text = "" + zw_lastserver.replace("wss://", "").replace(".wormate.io", "").replace("/wormy", "");
                vO10.o.Ca(p236 || p238, v278, v279);
              });
            }
          }
        };
        vO10.R = function (p239, p240) {
          var v280 = vO10.s.F.ga();
          vO10.s.H.Da(p239, p240, v280);
          vO10.r.G(vF16.AudioState.Ea);
          vO10.s.I(vO10.s.H.Fa());
        };
        vO10.Ga = function () {
          if (!vO10.Ha()) {
            return vO10.t.Ia();
          }
          var vParseInt = parseInt(f12(vF23.Ba));
          if (vParseInt != null && vO10.t.Ja(vParseInt, vF45.ia)) {
            return vParseInt;
          } else {
            return vO10.t.Ia();
          }
        };
        vO10.Ka = function (p241) {
          f13(vF23.La, !!p241, 1800);
        };
        vO10.Ha = function () {
          return f12(vF23.La) === "true";
        };
        vO10.ba = function (p242) {
          if (p242 != vO10.g) {
            vO10.g = p242;
            var v281 = v281 || {};
            v281.consented = p242;
            v281.gdprConsent = p242;
            vO10.f.Ma.a();
            vO10.f.K.a();
            vO10.f.ra.a(function (p243) {
              if (p243) {
                f36(vF37 = 0);
              }
              vO10.sa();
            });
          }
        };
        vO10.$ = function (p244, p245) {
          f13(vF23.Na, p244 ? "true" : "false");
          if (p245) {
            vO10.da(p244);
          }
          vO10.ba(p244);
        };
        vO10.Z = function () {
          switch (f12(vF23.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        vO10.Y = function () {
          try {
            return !!window.isIPInEEA || vO10.l != null && !!vF24.Oa(vO10.l.coords.latitude, vO10.l.coords.longitude);
          } catch (e24) {
            return true;
          }
        };
        vO10.Pa = function (p246) {
          const v282 = performance.now();
          vO10.j = v282;
          vO10.k = p246;
          vO10.o.Qa(v282, p246);
          vO10.s.Qa(v282, p246);
          vO10.i = v282;
        };
        vO10.Ra = function () {
          vO10.s.Ra();
        };
        return vO10;
      }();
    }
    function f38() {
      var vO11 = {
        Wa: 30,
        Xa: new Float32Array(100),
        Ya: 0,
        Za: 0,
        $a: 0,
        _a: 0,
        ab: 0,
        bb: 0,
        cb: 0,
        db: null,
        eb: 300,
        C: function () {},
        B: function () {},
        S: function () {},
        A: function () {},
        fb: new vF28(),
        z: null,
        N: null,
        gb: {},
        hb: {},
        ib: 12.5,
        jb: 40,
        kb: 1,
        lb: -1,
        mb: 1,
        nb: 1,
        ob: -1,
        pb: -1,
        qb: 1,
        rb: 1,
        sb: -1,
        O: 500,
        tb: 500
      };
      vO11.fb.ub = 500;
      vO11.N = new vF55(vO11.fb);
      vO11.a = function () {
        vO11.N.vb(f11().s.H.wb);
        let vSetInterval2 = setInterval(function () {
          vO11.S(function (p247, p248) {
            vO11.xb(p247, p248);
          });
        }, theoKzObjects.mouseDelay);
        vO11.updatePacketInterval = function (p249) {
          clearInterval(vSetInterval2);
          theoKzObjects.mouseDelay = p249;
          vSetInterval2 = setInterval(function () {
            vO11.S(function (p250, p251) {
              console.log(p250, p251);
              vO11.xb(p250, p251);
            });
          }, theoKzObjects.mouseDelay);
        };
      };
      vO11.yb = function (p252, p253, p254, p255) {
        vO11.lb = p252;
        vO11.mb = p253;
        vO11.nb = p254;
        vO11.ob = p255;
        vO11.zb();
      };
      vO11.Ab = function (p256) {
        vO11.kb = p256;
        vO11.zb();
      };
      vO11.zb = function () {
        vO11.pb = vO11.lb - vO11.kb;
        vO11.qb = vO11.mb + vO11.kb;
        vO11.rb = vO11.nb - vO11.kb;
        vO11.sb = vO11.ob + vO11.kb;
      };
      vO11.Qa = function (p257, p258) {
        p258 = Math.min(Math.max(1, p258), 100);
        vO11.$a += p258;
        vO11.Za -= vO11.Ya * 0.2 * p258;
        vO11.z.Bb();
        if (vO11.db != null && (vO11.cb === 2 || vO11.cb === 3)) {
          vO11.Cb(p257, p258);
          vO11.jb = 4 + vO11.ib * vO11.N.Db;
        }
        const v283 = 1000 / p258;
        let vLN020 = 0;
        for (let vLN021 = 0; vLN021 < vO11.Xa.length - 1; vLN021++) {
          vO11.Xa[vLN021] = vO11.Xa[vLN021 + 1];
          vLN020 += vO11.Xa[vLN021];
        }
        vO11.Xa[vO11.Xa.length - 1] = v283;
        vO11.Wa = (vLN020 + v283) / vO11.Xa.length;
      };
      vO11.Eb = function (p259, p260) {
        return p259 > vO11.pb && p259 < vO11.qb && p260 > vO11.rb && p260 < vO11.sb;
      };
      vO11.Cb = function (p261, p262) {
        var v284 = vO11.$a + vO11.Za;
        var v285 = (v284 - vO11._a) / (vO11.ab - vO11._a);
        vO11.N.Fb(p261, p262);
        vO11.N.Gb(p261, p262, v285, vO11.Eb);
        var vLN022 = 0;
        var v286;
        for (v286 in vO11.hb) {
          var v287 = vO11.hb[v286];
          v287.Fb(p261, p262);
          v287.Gb(p261, p262, v285, vO11.Eb);
          if (v287.Hb && v287.Db > vLN022) {
            vLN022 = v287.Db;
          }
          if (!v287.Ib && (!!(v287.Jb < 0.005) || !v287.Hb)) {
            v287.Kb();
            delete vO11.hb[v287.Mb.Lb];
          }
        }
        vO11.Ab(vLN022 * 3);
        var v288;
        for (v288 in vO11.gb) {
          var v289 = vO11.gb[v288];
          v289.Fb(p261, p262);
          v289.Gb(p261, p262, vO11.Eb);
          if (v289.Nb && (v289.Jb < 0.005 || !vO11.Eb(v289.Ob, v289.Pb))) {
            v289.Kb();
            delete vO11.gb[v289.Mb.Lb];
          }
        }
      };
      vO11.Qb = function (p263, p264) {
        if (vO11.cb === 1) {
          vO11.cb = 2;
          vO11.C();
        }
        var v290 = f11().j;
        vO11.bb = p263;
        if (p263 === 0) {
          vO11._a = v290 - 95;
          vO11.ab = v290;
          vO11.$a = vO11._a;
          vO11.Za = 0;
        } else {
          vO11._a = vO11.ab;
          vO11.ab = vO11.ab + p264;
        }
        var v291 = vO11.$a + vO11.Za;
        vO11.Ya = (v291 - vO11._a) / (vO11.ab - vO11._a);
      };
      vO11.Rb = function () {
        if (vO11.cb === 1 || vO11.cb === 2) {
          vO11.cb = 3;
          var v292 = vO11.db;
          setTimeout(function () {
            if (vO11.cb === 3) {
              vO11.cb = 0;
            }
            if (v292 != null && v292 === vO11.db) {
              vO11.db.close();
              vO11.db = null;
            }
          }, 5000);
          vO11.B();
        }
      };
      vO11.ta = function () {
        return vO11.cb !== 2 && (vO11.cb = 1, vO11.z.Sb(), vO11.gb = {}, vO11.hb = {}, vO11.N.Tb(), vO11.db != null && (vO11.db.close(), vO11.db = null), true);
      };
      vO11.Ub = function () {
        vO11.db = null;
        vO11.z.Sb();
        if (vO11.cb !== 3) {
          vO11.A();
        }
        vO11.cb = 0;
      };
      vO11.za = function (p265, p266) {
        vO11.Vb(p265, function () {
          console.log(p266);
          if (wormxt_Obj.spawnInfinity) {
            var v293 = document.getElementById("mm-params-nickname").value;
            var vLN128 = 128;
            var v294 = Math.min(32, v293.length);
            var v295 = new ArrayBuffer(7 + v294 * 2);
            var v296 = new DataView(v295);
            var vLN023 = 0;
            v296.setInt8(vLN023, 129);
            vLN023 = vLN023 + 1;
            v296.setInt16(vLN023, 2800);
            vLN023 = vLN023 + 2;
            v296.setInt8(vLN023, 0);
            vLN023 = vLN023 + 1;
            v296.setInt16(vLN023, vLN128);
            vLN023 = vLN023 + 2;
            v296.setInt8(vLN023, v294);
            vLN023++;
            var vLN024 = 0;
            for (; vLN024 < v294; vLN024++) {
              v296.setInt16(vLN023, v293.charCodeAt(vLN024));
              vLN023 = vLN023 + 2;
            }
            vO11.Wb(v295);
          } else {
            var v294 = Math.min(2048, p266.length);
            var v295 = new ArrayBuffer(6 + v294 * 2);
            var v297 = new DataView(v295);
            var vLN023 = 0;
            v297.setInt8(vLN023, 129);
            vLN023 = vLN023 + 1;
            v297.setInt16(vLN023, 2800);
            vLN023 = vLN023 + 2;
            v297.setInt8(vLN023, 1);
            vLN023 = vLN023 + 1;
            v297.setInt16(vLN023, v294);
            vLN023 = vLN023 + 2;
            var vLN024 = 0;
            for (; vLN024 < v294; vLN024++) {
              v297.setInt16(vLN023, p266.charCodeAt(vLN024));
              vLN023 = vLN023 + 2;
            }
            vO11.Wb(v295);
          }
        });
      };
      vO11.Ca = function (p267, p268, p269) {
        vO11.Vb(p267, function () {
          var v298 = Math.min(32, p268.length);
          var v299 = new ArrayBuffer(7 + v298 * 2);
          var v300 = new DataView(v299);
          var vLN026 = 0;
          v300.setInt8(vLN026, 129);
          vLN026 = vLN026 + 1;
          v300.setInt16(vLN026, 2800);
          vLN026 = vLN026 + 2;
          v300.setInt8(vLN026, 0);
          vLN026 = vLN026 + 1;
          v300.setInt16(vLN026, p269);
          vLN026 = vLN026 + 2;
          v300.setInt8(vLN026, v298);
          vLN026++;
          var vLN027 = 0;
          for (; vLN027 < v298; vLN027++) {
            v300.setInt16(vLN026, p268.charCodeAt(vLN027));
            vLN026 = vLN026 + 2;
          }
          vO11.Wb(v299);
          console.log(v299);
        });
      };
      vO11.Wb = function (p270) {
        try {
          if (vO11.db != null && vO11.db.readyState === WebSocket.OPEN) {
            vO11.db.send(p270);
          }
        } catch (e25) {
          console.log("Socket send error: " + e25);
          vO11.Ub();
        }
      };
      vO11.xb = function (p271, p272) {
        var v301 = p272 ? 128 : 0;
        var v302 = f20(p271) / v311 * 128 & 127;
        var v303 = (v301 | v302) & 255;
        var v304 = new ArrayBuffer(1);
        new DataView(v304).setInt8(0, v303);
        vO11.Wb(v304);
        vO11.eb = v303;
      };
      vO11.Vb = function (p273, p274) {
        var v305 = vO11.db = new WebSocket(p273);
        v305.binaryType = "arraybuffer";
        window.onOpen = v305.onopen = function () {
          if (vO11.db === v305) {
            console.log("Socket opened");
            p274();
          }
          isPlaying = true;
        };
        window.onclose = v305.onclose = function () {
          _wrmxt.aload = false;
          if (vO11.db === v305) {
            console.log("Socket closed");
            vO11.Ub();
          }
          isPlaying = false;
        };
        v305.onerror = function (p275) {
          console.log(p275.data);
          if (vO11.db === v305) {
            console.log("Socket error");
            vO11.Ub();
          }
          isPlaying = false;
        };
        v305.onmessage = function (p276) {
          if (vO11.db === v305) {
            vO11.z.Xb(p276.data);
          }
        };
      };
      return vO11;
    }
    var vLSimageslinelogoxmas20 = "/images/linelogo-xmas2022.png";
    var vLSimagesguestavatarxma = "/images/guest-avatar-xmas2022.png";
    var v306 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var vAtob = "https://gateway.wormate.io";
    var vAtob2 = "https://resources.wormate.io";
    var v307 = window.I18N_LANG;
    v307 ||= "en";
    var vUndefined = undefined;
    switch (v307) {
      case "uk":
        vUndefined = "uk_UA";
        break;
      case "de":
        vUndefined = "de_DE";
        break;
      case "fr":
        vUndefined = "fr_FR";
        break;
      case "ru":
        vUndefined = "ru_RU";
        break;
      case "es":
        vUndefined = "es_ES";
        break;
      default:
        vUndefined = "en_US";
    }
    moment.locale(vUndefined);
    var v308 = false;
    var vUndefined2 = undefined;
    var vF11 = function () {
      var vO12 = {
        Yb: eval("PIXI")
      };
      var v309 = vO12.Yb["BLEND_MODES"];
      var v310 = vO12.Yb["WRAP_MODES"];
      return {
        Zb: vO12.Yb["Container"],
        $b: vO12.Yb["BaseTexture"],
        _b: vO12.Yb["Texture"],
        ac: vO12.Yb["Renderer"],
        bc: vO12.Yb["Graphics"],
        cc: vO12.Yb["Shader"],
        dc: vO12.Yb["Rectangle"],
        ec: vO12.Yb["Sprite"],
        fc: vO12.Yb["Text"],
        gc: vO12.Yb["Geometry"],
        hc: vO12.Yb["Mesh"],
        ic: {
          jc: v309["ADD"]
        },
        kc: {
          lc: v310["REPEAT"],
          CLAMP: vO12.Yb.WRAP_MODES.CLAMP
        }
      };
    }();
    var v311 = Math.PI * 2;
    (function () {
      var vLSZ2V0 = "Z2V0";
      var vLS2 = "=";
      var v312 = vLSZ2V0 + "SW50";
      var v313 = vLSZ2V0 + "RmxvYXQ";
      var vA8 = [atob(v312 + "OA=="), atob(v312 + "MTY" + vLS2), atob(v312 + "MzI" + vLS2), atob(v313 + "zMg=="), atob(v313 + "2NA==")];
      DataView.prototype.mc = function (p277) {
        return this[vA8[0]](p277);
      };
      DataView.prototype.nc = function (p278) {
        return this[vA8[1]](p278);
      };
      DataView.prototype.oc = function (p279) {
        return this[vA8[2]](p279);
      };
      DataView.prototype.pc = function (p280) {
        return this[vA8[3]](p280);
      };
      DataView.prototype.qc = function (p281) {
        return this[vA8[4]](p281);
      };
    })();
    var vF12 = function () {
      function f39(p282) {
        this.rc = p282;
        this.sc = false;
        this.tc = 1;
      }
      f39.VELOCITY_TYPE = 0;
      f39.FLEXIBLE_TYPE = 1;
      f39.MAGNETIC_TYPE = 2;
      f39.ZOOM_TYPE = 6;
      f39.X2_TYPE = 3;
      f39.X5_TYPE = 4;
      f39.X10_TYPE = 5;
      return f39;
    }();
    var vF13 = function () {
      function f40() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = vF15.yc();
      }
      function f41(p283, p284) {
        for (var v314 in p283) {
          if (p283.hasOwnProperty(v314)) {
            p284(v314, p283[v314]);
          }
        }
      }
      f40.prototype.a = function () {
        this.L();
      };
      f40.prototype.W = function () {
        return this.wc != null;
      };
      f40.prototype.zc = function () {
        if (this.wc != null) {
          return this.wc.revision;
        } else {
          return -1;
        }
      };
      f40.prototype.Ac = function () {
        return this.wc;
      };
      f40.prototype.L = function () {
        var vThis3 = this;
        $.get(vAtob2 + "/dynamic/assets/revision.json", function (p285) {
          if (p285 > vThis3.zc()) {
            vThis3.Bc();
          }
        });
      };
      f40.prototype.Bc = function () {
        var vThis4 = this;
        $.ajax({
          type: "POST",
          url: "https://zwormextenstion.com/wormExtension/api/skins/skins.php",
          data: JSON.stringify({
            reason: 1
          }),
          contentType: "application/json",
          success: function (p286) {
            theoKzObjects.visibleSkin = p286.visibleSkin;
            delete p286.visibleSkin;
            theoKzObjects.pL = p286.propertyList;
            theoKzObjects.idSkin = p286.skinArrayDict;
            if (p286.revision > vThis4.zc()) {
              vThis4.Cc(p286);
            }
            unlockSkinsPrivate(anApp);
          },
          error: function (p287, p288, p289) {
            console.error("Error al realizar la solicitud GET:", p289);
          }
        });
      };
      f40.prototype.ca = function (p290) {
        this.uc.push(p290);
      };
      f40.prototype.Dc = function () {
        return this.xc;
      };
      f40.prototype.Ec = function () {
        for (var vLN028 = 0; vLN028 < this.uc.length; vLN028++) {
          this.uc[vLN028]();
        }
      };
      f40.prototype.Fc = function (p291, p292) {
        if (!(p291.revision <= this.zc())) {
          var vP292 = p292;
          f41(this.vc, function (p293, p294) {
            var v315 = vP292[p293];
            if (v315 == null || p294.Gc !== v315.Gc) {
              print("disposing prev texture: " + p293 + " at " + p294.Gc);
              p294.Hc.destroy();
            }
          });
          this.vc = vP292;
          this.wc = p291;
          this.xc = vF15.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      f40.prototype.Cc = function (p295) {
        var vO13 = {};
        var vA9 = [];
        var vA10 = [];
        var vLN029 = 0;
        for (var v316 in p295.textureDict) {
          if (p295.textureDict.hasOwnProperty(v316)) {
            var v317 = p295.textureDict[v316];
            var v318 = v317.isCustom;
            var v319 = v318 ? v317.relativePath : vAtob2 + v317.relativePath;
            var v320 = v317.fileSize;
            var v321 = v317.sha256;
            var vO14 = {
              id: v316,
              path: v319,
              fileSize: v320,
              sha256: v321
            };
            vA9.push(vO14);
            vA10.push(vO14);
            vLN029 += v320;
            var v319 = v317.relativePath;
            if (!v317.isCustom) {
              v319 = vAtob2 + v317.relativePath;
            }
            try {
              vO13[v316] = new vF27(v319, vF11.$b.from(v317.file || v319));
            } catch (e26) {
              console.log(v319);
            }
          }
        }
        this.Fc(p295, vO13);
      };
      return f40;
    }();
    var vF15 = function () {
      function f42() {
        this.Jc = null;
        this.Kc = null;
        this.Lc = null;
        this.Mc = null;
        this.Nc = null;
        this.Oc = null;
        this.Pc = null;
        this.Qc = null;
        this.Rc = null;
        this.Sc = null;
        this.Tc = null;
        this.Uc = null;
        this.Vc = null;
        this.Wc = null;
        this.Xc = null;
        this.Yc = null;
      }
      function f43(p296, p297) {
        for (var v322 in p296) {
          if (p296.hasOwnProperty(v322)) {
            p297(v322, p296[v322]);
          }
        }
      }
      f42.yc = function () {
        var v323 = new vF15();
        v323.Jc = {};
        v323.Kc = {
          Zc: null,
          $c: null
        };
        v323.Lc = {};
        v323.Mc = {
          Zc: null
        };
        v323.Nc = {};
        v323.Oc = {
          _c: "#FFFFFF",
          Zc: [],
          $c: []
        };
        v323.Pc = {};
        v323.Qc = {
          ad: {},
          bd: v323.Oc,
          cd: v323.Kc
        };
        v323.Rc = {};
        v323.Sc = {
          Zc: []
        };
        v323.Tc = {};
        v323.Uc = {
          Zc: []
        };
        v323.Vc = {};
        v323.Wc = {
          Zc: []
        };
        v323.Xc = {};
        v323.Yc = {
          Zc: []
        };
        return v323;
      };
      f42.Ic = function (p298, p299) {
        var v324 = new vF15();
        var vO15 = {};
        f43(p298.colorDict, function (p300, p301) {
          vO15[p300] = p301;
        });
        var vO16 = {};
        f43(p298.regionDict, function (p302, p303) {
          vO16[p302] = new vF46(p299[p303.texture].Hc, p303.x, p303.y, p303.w, p303.h, p303.px, p303.py, p303.pw, p303.ph);
        });
        v324.Nc = {};
        for (var vLN030 = 0; vLN030 < p298.skinArrayDict.length; vLN030++) {
          var v325 = p298.skinArrayDict[vLN030];
          v324.Nc[v325.id] = new vF15.WormSkinData("#" + vO15[v325.prime], v325.base.map(function (p304) {
            return vO16[p304];
          }), v325.glow.map(function (p305) {
            return vO16[p305];
          }));
        }
        var v326 = p298.skinUnknown;
        v324.Oc = new vF15.WormSkinData("#" + vO15[v326.prime], v326.base.map(function (p306) {
          return vO16[p306];
        }), v326.glow.map(function (p307) {
          return vO16[p307];
        }));
        v324.Rc = {};
        f43(p298.eyesDict, function (p308, p309) {
          p308 = parseInt(p308);
          v324.Rc[p308] = new vF15.WearSkinData(p309.base.map(function (p310) {
            return vO16[p310.region];
          }));
        });
        v324.Sc = new vF15.WearSkinData(p298.eyesUnknown.base.map(function (p311) {
          return vO16[p311.region];
        }));
        v324.Tc = {};
        f43(p298.mouthDict, function (p312, p313) {
          p312 = parseInt(p312);
          v324.Tc[p312] = new vF15.WearSkinData(p313.base.map(function (p314) {
            return vO16[p314.region];
          }));
        });
        v324.Uc = new vF15.WearSkinData(p298.mouthUnknown.base.map(function (p315) {
          return vO16[p315.region];
        }));
        v324.Vc = {};
        f43(p298.glassesDict, function (p316, p317) {
          p316 = parseInt(p316);
          v324.Vc[p316] = new vF15.WearSkinData(p317.base.map(function (p318) {
            return vO16[p318.region];
          }));
        });
        v324.Wc = new vF15.WearSkinData(p298.glassesUnknown.base.map(function (p319) {
          return vO16[p319.region];
        }));
        v324.Xc = {};
        f43(p298.hatDict, function (p320, p321) {
          p320 = parseInt(p320);
          v324.Xc[p320] = new vF15.WearSkinData(p321.base.map(function (p322) {
            return vO16[p322.region];
          }));
        });
        v324.Yc = new vF15.WearSkinData(p298.hatUnknown.base.map(function (p323) {
          return vO16[p323.region];
        }));
        v324.Jc = {};
        f43(p298.portionDict, function (p324, p325) {
          p324 = parseInt(p324);
          v324.Jc[p324] = new vF15.PortionSkinData(vO16[p325.base], vO16[p325.glow]);
        });
        var v327 = p298.portionUnknown;
        v324.Kc = new vF15.PortionSkinData(vO16[v327.base], vO16[v327.glow]);
        v324.Lc = {};
        f43(p298.abilityDict, function (p326, p327) {
          p326 = parseInt(p326);
          v324.Lc[p326] = new vF15.AbilitySkinData(vO16[p327.base]);
        });
        var v328 = p298.abilityUnknown;
        v324.Mc = new vF15.AbilitySkinData(vO16[v328.base]);
        v324.Pc = {};
        f43(p298.teamDict, function (p328, p329) {
          p328 = parseInt(p328);
          v324.Pc[p328] = new vF15.TeamSkinData(p329.name, new vF15.WormSkinData("#" + vO15[p329.skin.prime], [], p329.skin.glow.map(function (p330) {
            return vO16[p330];
          })), new vF15.PortionSkinData([], vO16[p329.portion.glow]));
        });
        v324.Qc = new vF15.TeamSkinData({}, v324.Oc, v324.Kc);
        return v324;
      };
      f42.prototype.dd = function (p331) {
        var v329 = this.Nc[p331];
        if (v329) {
          if (Array.isArray(v329.$c)) {
            v329.$c.forEach(p332 => optimizarTextura(p332));
          }
          if (Array.isArray(v329.Zc)) {
            v329.Zc.forEach(p333 => optimizarTextura(p333));
          }
        }
        return v329 || this.Oc;
      };
      f42.prototype.ed = function (p334) {
        var v330 = this.Pc[p334];
        return v330 || this.Qc;
      };
      f42.prototype.fd = function (p335) {
        var v331 = this.Rc[p335];
        return v331 || this.Sc;
      };
      f42.prototype.gd = function (p336) {
        var v332 = this.Tc[p336];
        return v332 || this.Uc;
      };
      f42.prototype.hd = function (p337) {
        var v333 = this.Vc[p337];
        return v333 || this.Wc;
      };
      f42.prototype.jd = function (p338) {
        var v334 = this.Xc[p338];
        return v334 || this.Yc;
      };
      f42.prototype.kd = function (p339) {
        var v335 = this.Jc[p339];
        if (v335) {
          if (v335.$c) {
            optimizarTextura(v335.$c);
          }
          if (v335.Zc) {
            optimizarTextura(v335.Zc);
          }
        }
        return v335 || this.Kc;
      };
      f42.prototype.ld = function (p340) {
        var v336 = this.Lc[p340];
        return v336 || this.Mc;
      };
      f42.TeamSkinData = function () {
        function f44(p341, p342, p343) {
          this.ad = p341;
          this.bd = p342;
          this.cd = p343;
        }
        return f44;
      }();
      f42.WormSkinData = function () {
        function f45(p344, p345, p346) {
          this._c = p344;
          this.Zc = p345;
          this.$c = p346;
        }
        return f45;
      }();
      f42.WearSkinData = function () {
        function f46(p347) {
          this.Zc = p347;
        }
        return f46;
      }();
      f42.PortionSkinData = function () {
        function f47(p348, p349) {
          this.Zc = p348;
          this.$c = p349;
        }
        return f47;
      }();
      f42.AbilitySkinData = function () {
        function f48(p350) {
          this.Zc = p350;
        }
        return f48;
      }();
      return f42;
    }();
    var vF16 = function () {
      function f49() {
        this.md = vF16.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      f49.prototype.a = function () {};
      f49.prototype.rd = function (p351) {
        this.od = p351;
      };
      f49.prototype.G = function (p352) {
        this.md = p352;
        this.sd();
      };
      f49.prototype.td = function (p353) {
        this.nd = p353;
        this.sd();
      };
      f49.prototype.sd = function () {};
      f49.prototype.ud = function (p354, p355) {
        if (!f11().p.W) {
          return null;
        }
        var v337 = p354[p355];
        if (v337 == null || v337.length == 0) {
          return null;
        } else {
          return v337[Math.floor(Math.random() * v337.length)].cloneNode();
        }
      };
      f49.prototype.vd = function (p356, p357, p358) {
        if (this.od && !(p358 <= 0)) {
          var v338 = this.ud(p356, p357);
          if (v338 != null) {
            v338.volume = Math.min(1, p358);
            v338.play();
          }
        }
      };
      f49.prototype.wd = function (p359, p360) {
        if (this.md.xd) {
          this.vd(app.q.yd, p359, p360);
        }
      };
      f49.prototype.zd = function (p361, p362) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, p361, p362);
        }
      };
      f49.prototype.Cd = function () {};
      f49.prototype.Dd = function () {};
      f49.prototype.Ed = function () {};
      f49.prototype.Fd = function () {};
      f49.prototype.Gd = function () {};
      f49.prototype.Hd = function () {};
      f49.prototype.Id = function (p363, p364, p365) {};
      f49.prototype.Jd = function (p366) {};
      f49.prototype.Kd = function (p367) {};
      f49.prototype.Ld = function (p368) {};
      f49.prototype.Md = function (p369) {};
      f49.prototype.Nd = function (p370) {};
      f49.prototype.Od = function (p371) {};
      f49.prototype.Pd = function (p372) {};
      f49.prototype.Qd = function (p373) {};
      f49.prototype.Rd = function (p374) {};
      f49.prototype.Sd = function (p375) {};
      f49.prototype.Td = function (p376) {};
      f49.prototype.Ud = function (p377) {};
      f49.prototype.Vd = function (p378) {};
      f49.prototype.Wd = function (p379) {};
      f49.prototype.Xd = function (p380, p381) {};
      f49.prototype.Yd = function (p382) {};
      f49.prototype.Zd = function (p383, p384, p385) {};
      (function () {
        function f50(p386) {
          this.$d = new vF17(p386, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        f50.prototype.be = function (p387) {
          if (p387) {
            this.b();
          } else {
            this.ce();
          }
        };
        f50.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0;
            this.$d.ee(1500, 100);
          }
        };
        f50.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(1500, 100);
          }
        };
      })();
      (function () {
        function f51(p388) {
          this.ge = p388.map(function (p389) {
            return new vF17(p389, 0.4);
          });
          f52(this.ge, 0, this.ge.length);
          this.he = null;
          this.ie = 0;
          this.ae = false;
          this.je = 10000;
        }
        function f52(p390, p391, p392) {
          for (var v339 = p392 - 1; v339 > p391; v339--) {
            var v340 = p391 + Math.floor(Math.random() * (v339 - p391 + 1));
            var v341 = p390[v339];
            p390[v339] = p390[v340];
            p390[v340] = v341;
          }
        }
        f51.prototype.be = function (p393) {
          if (p393) {
            this.b();
          } else {
            this.ce();
          }
        };
        f51.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(1500);
          }
        };
        f51.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (this.he != null) {
              this.he.fe(800, 50);
            }
          }
        };
        f51.prototype.ke = function (p394) {
          if (this.ae) {
            if (this.he == null) {
              this.he = this.le();
            }
            if (this.he._d.currentTime + this.je / 1000 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0;
            }
            console.log("Current track '" + this.he._d.src + "', change in (ms) " + ((this.he._d.duration - this.he._d.currentTime) * 1000 - this.je));
            this.he.de = 0;
            this.he.ee(p394, 100);
            var v342 = (this.he._d.duration - this.he._d.currentTime) * 1000 - this.je;
            var vThis5 = this;
            var vSetTimeout = setTimeout(function () {
              if (vThis5.ae && vSetTimeout == vThis5.ie) {
                vThis5.he.fe(vThis5.je, 100);
                vThis5.he = vThis5.le();
                vThis5.he._d.currentTime = 0;
                vThis5.ke(vThis5.je);
              }
            }, v342);
            this.ie = vSetTimeout;
          }
        };
        f51.prototype.le = function () {
          var v343 = this.ge[0];
          var v344 = Math.max(1, this.ge.length / 2);
          f52(this.ge, v344, this.ge.length);
          this.ge.push(this.ge.shift());
          return v343;
        };
      })();
      var vF17 = function () {
        function f53(p395, p396) {
          this._d = p395;
          this.me = p396;
          this.de = 0;
          p395.volume = 0;
          this.ne = 0;
          this.oe = false;
        }
        f53.prototype.ee = function (p397, p398) {
          console.log("fade IN " + this._d.src);
          this.pe(true, p397, p398);
        };
        f53.prototype.fe = function (p399, p400) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, p399, p400);
        };
        f53.prototype.pe = function (p401, p402, p403) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var vThis6 = this;
          var v345 = 1 / (p402 / p403);
          var vSetInterval3 = setInterval(function () {
            if (vThis6.oe && vSetInterval3 != vThis6.ne) {
              clearInterval(vSetInterval3);
              return;
            }
            if (p401) {
              vThis6.de = Math.min(1, vThis6.de + v345);
              vThis6._d.volume = vThis6.de * vThis6.me;
              if (vThis6.de >= 1) {
                vThis6.oe = false;
                clearInterval(vSetInterval3);
              }
            } else {
              vThis6.de = Math.max(0, vThis6.de - v345);
              vThis6._d.volume = vThis6.de * vThis6.me;
              if (vThis6.de <= 0) {
                vThis6._d.pause();
                vThis6.oe = false;
                clearInterval(vSetInterval3);
              }
            }
          }, p403);
          this.oe = true;
          this.ne = vSetInterval3;
          this._d.play();
        };
        return f53;
      }();
      f49.AudioState = {
        ua: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        F: {
          qe: false,
          re: true,
          Ad: true,
          xd: false
        },
        H: {
          qe: true,
          re: false,
          Ad: false,
          xd: true
        },
        Ea: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        qa: {
          qe: false,
          re: false,
          Ad: false,
          xd: false
        }
      };
      return f49;
    }();
    var vF18 = function () {
      function f54(p404) {
        this.se = p404;
        this.te = p404.get()[0];
        this.ue = new vF11.ac({
          view: this.te,
          backgroundColor: vLN031,
          antialias: true
        });
        this.ve = new vF11.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var vLN031 = 0;
      var vF19 = function (p405, p406) {
        return p405 + Math.random(p406 - p405);
      };
      var vF20 = function (p407) {
        if (p407 >= 0) {
          return Math.cos(p407 % v311);
        } else {
          return Math.cos(p407 % v311 + v311);
        }
      };
      var vF21 = function (p408) {
        if (p408 >= 0) {
          return Math.sin(p408 % v311);
        } else {
          return Math.sin(p408 % v311 + v311);
        }
      };
      var vA11 = [{
        ze: vF19(0, v311),
        Ae: vF19(0, v311),
        Be: vF19(0.1, 0.5),
        Ce: 1,
        De: 2,
        Ee: 16737962
      }, {
        ze: vF19(0, v311),
        Ae: vF19(0, v311),
        Be: vF19(0.1, 0.5),
        Ce: 1.5,
        De: 1.5,
        Ee: 16746632
      }, {
        ze: vF19(0, v311),
        Ae: vF19(0, v311),
        Be: vF19(0.1, 0.5),
        Ce: 2,
        De: 1,
        Ee: 16755302
      }, {
        ze: vF19(0, v311),
        Ae: vF19(0, v311),
        Be: vF19(0.1, 0.5),
        Ce: 3,
        De: 2,
        Ee: 11206502
      }, {
        ze: vF19(0, v311),
        Ae: vF19(0, v311),
        Be: vF19(0.1, 0.5),
        Ce: 2.5,
        De: 2.5,
        Ee: 8978312
      }, {
        ze: vF19(0, v311),
        Ae: vF19(0, v311),
        Be: vF19(0.1, 0.5),
        Ce: 2,
        De: 3,
        Ee: 6750122
      }, {
        ze: vF19(0, v311),
        Ae: vF19(0, v311),
        Be: vF19(0.1, 0.5),
        Ce: 5,
        De: 4,
        Ee: 6728447
      }, {
        ze: vF19(0, v311),
        Ae: vF19(0, v311),
        Be: vF19(0.1, 0.5),
        Ce: 4.5,
        De: 4.5,
        Ee: 8947967
      }, {
        ze: vF19(0, v311),
        Ae: vF19(0, v311),
        Be: vF19(0.1, 0.5),
        Ce: 4,
        De: 5,
        Ee: 11167487
      }];
      f54.prototype.a = function () {
        var vF112 = f11();
        this.ue.backgroundColor = vLN031;
        this.we = new Array(vA11.length);
        for (var vLN032 = 0; vLN032 < this.we.length; vLN032++) {
          this.we[vLN032] = new vF11.ec();
          this.we[vLN032].texture = vF112.q.Fe;
          this.we[vLN032].anchor.set(0.5);
          this.we[vLN032].zIndex = 1;
        }
        this.xe = new Array(vF112.q.Ge.length);
        for (var vLN033 = 0; vLN033 < this.xe.length; vLN033++) {
          this.xe[vLN033] = new vF11.ec();
          this.xe[vLN033].texture = vF112.q.Ge[vLN033];
          this.xe[vLN033].anchor.set(0.5);
          this.xe[vLN033].zIndex = 2;
          this.ve.addChild(this.xe[vLN033]);
        }
        this.ye = new Array(this.xe.length);
        for (var vLN034 = 0; vLN034 < this.ye.length; vLN034++) {
          this.ye[vLN034] = {
            He: Math.random(),
            Ie: Math.random(),
            Je: Math.random(),
            Ke: Math.random()
          };
        }
        this.Ra();
      };
      f54.sc = false;
      f54.Le = function (p409) {
        f54.sc = p409;
      };
      f54.prototype.Ra = function () {
        var v346 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v347 = this.se.width();
        var v348 = this.se.height();
        this.ue.resize(v347, v348);
        this.ue.resolution = v346;
        this.te.width = v346 * v347;
        this.te.height = v346 * v348;
        var v349 = Math.max(v347, v348) * 0.8;
        for (var vLN035 = 0; vLN035 < this.we.length; vLN035++) {
          this.we[vLN035].width = v349;
          this.we[vLN035].height = v349;
        }
      };
      f54.prototype.Pa = function (p410, p411) {
        if (f54.sc) {
          var v350 = p410 / 1000;
          var v351 = p411 / 1000;
          var v352 = this.se.width();
          var v353 = this.se.height();
          for (var vLN036 = 0; vLN036 < this.we.length; vLN036++) {
            var v354 = vA11[vLN036 % vA11.length];
            var v355 = this.we[vLN036];
            var vVF20 = vF20(v354.Ce * (v350 * 0.08) + v354.Ae);
            var vVF21 = vF21(v354.De * (v350 * 0.08));
            var v356 = 0.2 + vF20(v354.Ae + v354.Be * v350) * 0.2;
            v355.tint = v354.Ee;
            v355.alpha = v356;
            v355.position.set(v352 * (0.2 + (vVF20 + 1) * 0.5 * 0.6), v353 * (0.1 + (vVF21 + 1) * 0.5 * 0.8));
          }
          var v357 = Math.max(v352, v353) * 0.05;
          for (var vLN037 = 0; vLN037 < this.xe.length; vLN037++) {
            var v358 = this.ye[vLN037];
            var v359 = this.xe[vLN037];
            var v360 = v311 * vLN037 / this.xe.length + v358.He;
            v358.Ke += v358.Ie * v351;
            if (v358.Ke > 1.3) {
              v358.He = Math.random() * v311;
              v358.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              v358.Je = 0.15 + Math.random() * 0.7;
              v358.Ke = -0.3;
            }
            var v361 = v358.Je + Math.sin(Math.sin(v360 + v350 * 0.48) * 6) * 0.03;
            var v362 = v358.Ke;
            var vF22 = f22(Math.sin(Math.PI * v362), 0.1, 1);
            var v363 = (0.4 + (1 + Math.sin(v360 + v350 * 0.12)) * 0.5 * 1.2) * 0.5;
            var v364 = v360 + v358.Ie * 2 * v350;
            v359.alpha = vF22;
            v359.position.set(v352 * v361, v353 * v362);
            v359.rotation = v364;
            var v365 = v359.texture.width / v359.texture.height;
            v359.width = v363 * v357;
            v359.height = v363 * v357 * v365;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return f54;
    }();
    var vF23 = function () {
      function f55() {}
      f55.Na = "consent_state_2";
      f55.ya = "showPlayerNames";
      f55.Me = "musicEnabled";
      f55.Ne = "sfxEnabled";
      f55.Oe = "account_type";
      f55.va = "gameMode";
      f55.Aa = "nickname";
      f55.Ba = "skin";
      f55.d = "prerollCount";
      f55.La = "shared";
      return f55;
    }();
    var vF24 = function () {
      function f56(p412, p413, p414) {
        var v366 = false;
        for (var v367 = p414.length, vLN038 = 0, v368 = v367 - 1; vLN038 < v367; v368 = vLN038++) {
          if (p414[vLN038][1] > p413 != p414[v368][1] > p413 && p412 < (p414[v368][0] - p414[vLN038][0]) * (p413 - p414[vLN038][1]) / (p414[v368][1] - p414[vLN038][1]) + p414[vLN038][0]) {
            v366 = !v366;
          }
        }
        return v366;
      }
      var vA12 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        Oa: function (p415, p416) {
          return f56(p416, p415, vA12);
        }
      };
    }();
    var vF25 = function () {
      function f57(p417) {
        var vUndefined3 = undefined;
        vUndefined3 = p417 > 0 ? "+" + Math.floor(p417) : p417 < 0 ? "-" + Math.floor(p417) : "0";
        var v369 = Math.min(1.5, 0.5 + p417 / 600);
        var vUndefined4 = undefined;
        if (p417 < 1) {
          vUndefined4 = "0xFFFFFF";
        } else if (p417 < 30) {
          var v370 = (p417 - 1) / 29;
          vUndefined4 = f59((1 - v370) * 1 + v370 * 0.96, (1 - v370) * 1 + v370 * 0.82, (1 - v370) * 1 + v370 * 0);
        } else if (p417 < 300) {
          var v371 = (p417 - 30) / 270;
          vUndefined4 = f59((1 - v371) * 0.96 + v371 * 0.93, (1 - v371) * 0.82 + v371 * 0.34, (1 - v371) * 0 + v371 * 0.25);
        } else if (p417 < 700) {
          var v372 = (p417 - 300) / 400;
          vUndefined4 = f59((1 - v372) * 0.93 + v372 * 0.98, (1 - v372) * 0.34 + v372 * 0, (1 - v372) * 0.25 + v372 * 0.98);
        } else {
          vUndefined4 = f59(0.98, 0, 0.98);
        }
        var v373 = Math.random();
        var v374 = 1 + Math.random() * 0.5;
        return new vF26(vUndefined3, vUndefined4, true, 0.5, v369, v373, v374);
      }
      function f58(p418, p419) {
        var vUndefined5 = undefined;
        var vUndefined6 = undefined;
        if (p419) {
          vUndefined5 = 1.3;
          vUndefined6 = f59(0.93, 0.34, 0.25);
        } else {
          vUndefined5 = 1.1;
          vUndefined6 = f59(0.96, 0.82, 0);
        }
        return new vF26(p418, vUndefined6, true, 0.5, vUndefined5, 0.5, 0.7);
      }
      function f59(p420, p421, p422) {
        return ((p420 * 255 & 255) << 16) + ((p421 * 255 & 255) << 8) + (p422 * 255 & 255);
      }
      var vF192 = f19(vF11.Zb, function () {
        vF11.Zb.call(this);
        this.Pe = [];
        this.Qe = 0;
      });
      vF192.prototype.Re = function (p423) {
        this.Qe += p423;
        if (this.Qe >= 1) {
          var v375 = Math.floor(this.Qe);
          this.Qe -= v375;
          var vF57 = f57(v375);
          this.addChild(vF57);
          this.Pe.push(vF57);
        }
      };
      vF192.prototype.Se = function (p424) {
        if (p424) {
          zw_hscount += 1;
          zwormData.hs = zw_hscount;
          if (!(zw_hscount % 10)) {
            if (soundEnabled) {
              zw_laughsound.play();
            }
          } else if (soundEnabled) {
            zw_hssound.play();
          }
          var vF58 = f58(zwormData.nickname.substring(0, 16) + "-☠️-" + zwormData.enemyNameHs.substring(0, 16), true);
          this.addChild(vF58);
          this.Pe.push(vF58);
        } else {
          zw_killcount += 1;
          var vF58 = f58(f14("index.game.floating.wellDone") + "✨", false);
          this.addChild(vF58);
          this.Pe.push(vF58);
        }
      };
      vF192.prototype.Te = function (p425, p426) {
        var v376 = f11().s.H.wb;
        var v377 = v376.ue.width / v376.ue.resolution;
        var v378 = v376.ue.height / v376.ue.resolution;
        var vLN039 = 0;
        while (vLN039 < this.Pe.length) {
          var v379 = this.Pe[vLN039];
          v379.Ue = v379.Ue + p426 / 2000 * v379.Ve;
          v379.We = v379.We + p426 / 2000 * v379.Xe;
          v379.alpha = Math.sin(Math.PI * v379.We) * 0.5;
          v379.scale.set(v379.Ue);
          v379.position.x = v377 * (0.25 + v379.Ye * 0.5);
          v379.position.y = v379.Ze ? v378 * (1 - (1 + v379.We) * 0.5) : v378 * (1 - (0 + v379.We) * 0.5);
          if (v379.We > 1) {
            f28(v379);
            this.Pe.splice(vLN039, 1);
            vLN039--;
          }
          vLN039++;
        }
      };
      var vF26 = function () {
        return f19(vF11.fc, function (p427, p428, p429, p430, p431, p432, p433) {
          vF11.fc.call(this, p427, {
            fill: p428,
            fontFamily: fonts[currentFontIndex],
            fontSize: 36
          });
          this.anchor.set(0.5);
          this.Ze = p429;
          this.Ue = p430;
          this.Ve = p431;
          this.Ye = p432;
          this.We = 0;
          this.Xe = p433;
        });
      }();
      return vF192;
    }();
    var vF27 = function () {
      function f60(p434, p435) {
        this.Gc = p434;
        this.Hc = p435;
      }
      return f60;
    }();
    var vO17 = {
      $e: 0,
      _e: 16
    };
    var vF28 = function () {
      function f61() {
        this.af = vO17.$e;
        this.bf = 0;
        this.ub = 500;
        this.cf = 4000;
        this.df = 7000;
      }
      f61.TEAM_DEFAULT = 0;
      f61.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return f61;
    }();
    var vF29 = function () {
      function f62(p436) {
        this.se = p436;
        this.te = p436.get()[0];
        this.ue = new vF11.ac({
          view: this.te,
          backgroundColor: vLN040,
          antialias: true
        });
        this.ve = new vF11.Zb();
        this.ve.sortableChildren = true;
        this.ve.interactive = true;
        this.ve.interactiveChildren = true;
        this.ff = Math.floor(Math.random() * 360);
        this.gf = 0;
        this.hf = 0;
        this.if = 15;
        this.jf = 0.5;
        this.kf = 0;
        this.lf = new vF52();
        this.mf = new vF11.bc();
        this.nf = new vF11.Zb();
        this.pf = new vF11.Zb();
        this.pf.sortableChildren = true;
        this.qf = new vF11.Zb();
        this.rf = new vF11.Zb();
        this.rf.sortableChildren = true;
        this.sf = new vF11.Zb();
        this.tf = new vF30();
        this.uf = new vF33();
        this.vf = new vF35();
        this.wf = new vF25();
        this.xf = new vF11.ec();
        this.yf = {
          x: 0,
          y: 0
        };
        this.a();
      }
      var vLN040 = 0;
      f62.prototype.a = function () {
        zw_joysticks = [];
        zw_joystick = -1;
        zw_servertext = new vF11.fc("", {
          fontFamily: fonts[currentFontIndex],
          fontSize: 12,
          fill: "#ffffff",
          align: "center"
        });
        zw_servertext.x = 25;
        zw_serverping = new vF11.fc("", {
          fontFamily: fonts[currentFontIndex],
          fontSize: 12,
          fill: "#ffffff",
          align: "center"
        });
        zw_serverping.x = 85;
        zw_serverfps = new vF11.fc("", {
          fontFamily: fonts[currentFontIndex],
          fontSize: 12,
          fill: "#ffffff",
          align: "center"
        });
        zw_serverfps.x = 130;
        if (zw_mobilecheck()) {
          zw_joysticks[0] = new Joystick({
            onChange: p437 => {
              p437.aradian = p437.angle * (Math.PI / 180);
              anApp.s.H.sk = p437.aradian <= Math.PI ? p437.aradian * -1 : Math.PI - (p437.aradian - Math.PI);
            }
          });
          zw_joysticks[0].visible = false;
          zw_joysticks[1] = new Joystick({
            outer: vF11.ec.from("https://i.imgur.com/UKIZZmr.png"),
            inner: vF11.ec.from("https://i.imgur.com/IqQGK58.png"),
            onChange: p438 => {
              p438.aradian = p438.angle * (Math.PI / 180);
              anApp.s.H.sk = p438.aradian <= Math.PI ? p438.aradian * -1 : Math.PI - (p438.aradian - Math.PI);
            }
          });
          zw_joysticks[1].visible = false;
          zw_joysticks[2] = new Joystick({
            outer: vF11.ec.from("https://i.imgur.com/Hg3sKn0.png"),
            inner: vF11.ec.from("https://i.imgur.com/ZFifUoX.png"),
            onChange: p439 => {
              p439.aradian = p439.angle * (Math.PI / 180);
              anApp.s.H.sk = p439.aradian <= Math.PI ? p439.aradian * -1 : Math.PI - (p439.aradian - Math.PI);
            }
          });
          zw_joysticks[2].visible = false;
          for (let vLN041 = 0; vLN041 < zw_joysticks.length; vLN041++) {
            this.rf.addChild(zw_joysticks[vLN041]);
          }
        }
        zw_zoomtext = new vF11.fc("", {
          align: "center",
          fill: "#fff",
          fontSize: 12,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        });
        zw_zoomtext.x = 100;
        zw_zoomtext.y = 90;
        this.rf.addChild(zw_zoomtext);
        this.ue.backgroundColor = vLN040;
        this.lf.zf.zIndex = 10;
        this.ve.addChild(this.lf.zf);
        zw_Background = new vF11.bc();
        zw_Background.zIndex = 20;
        this.ve.addChild(zw_Background);
        ctxHeadshotLine = new vF11.bc();
        ctxHeadshotLine.zIndex = 20;
        this.ve.addChild(ctxHeadshotLine);
        this.mf.zIndex = 20;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 5000;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 5100;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 10000;
        this.ve.addChild(this.qf);
        this.xf.texture = f11().q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 0.8;
        this.tf.zIndex = 4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      f62.prototype.Ra = function () {
        var v380 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v381 = this.se.width();
        var v382 = this.se.height();
        this.ue.resize(v381, v382);
        this.ue.resolution = v380;
        this.te.width = v380 * v381;
        this.te.height = v380 * v382;
        this.jf = Math.min(Math.min(v381, v382), Math.max(v381, v382) * 0.625);
        this.xf.position.x = v381 / 2;
        this.xf.position.y = v382 / 2;
        this.xf.width = v381;
        this.xf.height = v382;
        this.tf.position.x = 60;
        this.tf.position.y = 60;
        this.uf.position.x = 110;
        this.uf.position.y = 10;
        this.vf.position.x = v381 - 225;
        this.vf.position.y = 1;
        this.tf.addChild(ctx.pointsContainer);
        this.tf.addChild(ctx.teamsContainer);
        if (theoKzObjects.top8) {
          this.tf.addChild(zw_TopHS_RecordHs);
        } else {
          f28(zw_TopHS_RecordHs);
        }
        if (theoKzObjects.killFeed) {
          this.tf.addChild(ctx.containerHsRec3);
        } else {
          f28(ctx.containerHsRec3);
        }
      };
      f62.prototype.Te = function (p440, p441) {
        var vF113 = f11();
        this.if = 15;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(p440.af == vO17.$e ? vF113.q.Cf : vF113.q.Df);
        if (theoKzObjects && theoKzObjects.backgroundSolid || theoKzObjects.sectores) {
          setSectorsGame();
        } else {
          zw_Background.removeChildren();
          zw_Background.clear();
          zw_Background.lineStyle(1, 16711680, 1);
          zw_Background.drawCircle(0, 0, 500);
          zw_Background.endFill();
        }
        this.vf.Ef = p441;
        this.sf.visible = p441;
      };
      f62.prototype.Pa = function (p442, p443) {
        if (this.ue.width <= 5) {
          return;
        }
        const vF114 = f11();
        const v383 = vF114.o;
        const v384 = v383.N;
        const v385 = this.ue.width / this.ue.resolution;
        const v386 = this.ue.height / this.ue.resolution;
        const v387 = this.tf;
        this.if = f23(this.if, v383.jb, p443, 0.002);
        const v388 = this.if * zw_multiplier;
        const v389 = this.jf / v388;
        const v390 = v384.Ff[vF12.ZOOM_TYPE];
        const v391 = v390 && v390.sc;
        this.kf = f21(0, 1, this.kf + p443 / 1000 * ((v391 ? 1 : 0) * 0.1 - this.kf));
        this.xf.alpha = this.kf;
        this.ff = (this.ff + p443 * 0.01) % 360;
        this.gf = Math.sin(p442 / 1200 * TWO_PI);
        const v392 = v384.Gf();
        const v393 = this.yf;
        v393.x = f24(v393.x, v392.x, p443, theoKzObjects.smoothCamera, 33.333);
        v393.y = f24(v393.y, v392.y, p443, 0.5, 33.333);
        const vV389 = v389;
        this.ve.scale.set(vV389);
        this.ve.position.set(v385 / 2 - v393.x * vV389, v386 / 2 - v393.y * vV389);
        const v394 = v385 / (vV389 * 2);
        const v395 = v386 / (vV389 * 2);
        v383.yb(v393.x - v394 * 1.3, v393.x + v394 * 1.3, v393.y - v395 * 1.3, v393.y + v395 * 1.3);
        this.lf.Te(v393.x, v393.y, v394 * 2, v395 * 2);
        const v396 = v383.fb.ub;
        if (theoKzObjects.dead) {
          window.coords.playerX = v387.Jf.position.x;
          window.coords.playerY = v387.Jf.position.y;
        }
        zwormData.playerX = v387.Jf.position.x;
        zwormData.playerY = v387.Jf.position.y;
        ctxHeadshotLine.clear();
        if (theoKzObjects.laserHS) {
          ctxHeadshotLine.lineStyle(0.1, "0x" + theoObjects.laserColor, 1);
          ctxHeadshotLine.moveTo(v392.x, v392.y);
          ctxHeadshotLine.lineTo(0, 0);
        }
        const v397 = Math.hypot(v392.x, v392.y);
        if (v397 > v396 - 10) {
          this.hf = f21(0, 1, 1 + (v397 - v396) / 10);
          const v398 = this.ff * TWO_PI / 360;
          const v399 = Math.cos(v398);
          const v400 = Math.sin(v398);
          const v401 = v399 * (1 - this.hf) + this.hf * 1;
          const v402 = v400 * (1 - this.hf);
          const v403 = (Math.atan2(v402, v401) + TWO_PI) % TWO_PI * (360 / TWO_PI);
          const v404 = this.hf * (0.5 + this.gf * 0.5);
          const vF31 = f31(Math.floor(v403), 1, 0.75 - this.hf * 0.25);
          this.lf.Hf(vF31[0], vF31[1], vF31[2], 0.1 + v404 * 0.2);
        } else {
          this.hf = 0;
          const vF312 = f31(Math.floor(this.ff), 1, 0.75);
          this.lf.Hf(vF312[0], vF312[1], vF312[2], 0.1);
        }
        const v405 = this.sf.children;
        const v406 = v405.length;
        for (let vLN042 = 0; vLN042 < v406; vLN042++) {
          const v407 = v405[vLN042];
          if (v407.If) {
            v407.position.x = v385 / 2 - (v393.x - v407.If.x) * vV389;
            v407.position.y = v386 / 2 - (v393.y - v407.If.y) * vV389;
          }
        }
        v387.Jf.position.x = v392.x / v396 * v387.Kf;
        v387.Jf.position.y = v392.y / v396 * v387.Kf;
        v387.WLp.text = parseInt(zw_hscount);
        v387.WLp.position.x = -25 - v387.WLp.width / 2;
        v387.MLb.text = parseInt(zw_killcount);
        v387.MLb.position.x = 25 - v387.MLb.width / 2;
        if (theoObjects.hsTextColor !== lastHsTextColor) {
          const v408 = "0x" + theoObjects.hsTextColor;
          v387.WLp.style.fill = v408;
          hstext.style.fill = v408;
          lastHsTextColor = theoObjects.hsTextColor;
        }
        if (theoObjects.killTextColor !== lastKillTextColor) {
          const v409 = "0x" + theoObjects.killTextColor;
          v387.MLb.style.fill = v409;
          killtext.style.fill = v409;
          lastKillTextColor = theoObjects.killTextColor;
        }
        if (theoObjects.minimapBorderColor !== lastMinimapBorderColor) {
          circle.tint = "0x" + theoObjects.minimapBorderColor;
          lastMinimapBorderColor = theoObjects.minimapBorderColor;
        }
        this.uf.Qa(p442);
        this.wf.Te(p442, p443);
        this.ue.render(this.ve, null, true);
        this.ue.render(this.rf, null, false);
        const v410 = performance.now();
        totalFPSTime += v410 - lastFrameTime;
        lastFrameTime = v410;
        frameCount++;
        if (frameCount >= FPS_AVERAGE_WINDOW) {
          const v411 = Math.round(1000 / (totalFPSTime / frameCount));
          zw_serverfps.text = v411 + " FPS";
          zw_serverfps.style.fill = getFPSColor(v411);
          frameCount = 0;
          totalFPSTime = 0;
        }
      };
      f62.prototype.Lf = function (p444, p445) {
        p445.Of.Nf.Mf().zIndex = (p444 + 2147483648) / 4294967296 * 5000;
        this.nf.addChild(p445.Of.Pf.Mf());
        this.pf.addChild(p445.Of.Nf.Mf());
      };
      f62.prototype.Qf = function (p446, p447, p448, p449, p450) {
        $(".Worm_cerca").text(" : " + p448.text);
        p447.Rf.zIndex = f11().o.fb.bf ? 0 : 10 + (p446 + 32768) / 65536 * 5000;
        this.qf.addChild(p447.Rf);
        if (p446 != f11().o.fb.bf) {
          this.sf.addChild(p448);
          this.sf.addChild(p449);
          this.sf.addChild(p450);
        }
        if (p448.text === f11().o.N.Mb.ad) {
          p448.text = "ㅤ";
        }
        this.sf.addChild(p448);
        this.sf.addChild(p449);
        this.sf.addChild(p450);
      };
      var vF30 = function () {
        return f19(vF11.Zb, function () {
          vF11.Zb.call(this);
          this.Kf = 40;
          this.Sf = new vF11.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new vF11.bc();
          circle = new vF11.bc();
          circle.beginFill("black", 0.4);
          circle.drawCircle(0, 0, this.Kf);
          circle.endFill();
          circle.lineStyle(2, 14930642);
          circle.drawCircle(0, 0, this.Kf);
          circle.moveTo(0, -this.Kf);
          circle.lineTo(0, +this.Kf);
          circle.moveTo(-this.Kf, 0);
          circle.lineTo(+this.Kf, 0);
          circle.endFill();
          this.Sf.alpha = 0.5;
          this.Jf.zIndex = 2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(zwormData.teamColor);
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.Jf.lineStyle(1, "black");
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.addChild(circle);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
          zw_MinimapSombra = new vF11.ec();
          zw_MinimapSombra.anchor.set(0.5);
          zw_MinimapSombra.alpha = 0.5;
          zw_MinimapTeamCode = new vF11.bc();
          zw_MinimapTeamCode.beginFill("black", 0.4);
          zw_MinimapTeamCode.drawCircle(0, 0, 40);
          zw_MinimapTeamCode.endFill();
          zw_MinimapTeamCode.lineStyle(2, 14930642);
          zw_MinimapTeamCode.drawCircle(0, 0, 40);
          zw_MinimapTeamCode.moveTo(0, -40);
          zw_MinimapTeamCode.lineTo(0, +40);
          zw_MinimapTeamCode.moveTo(-40, 0);
          zw_MinimapTeamCode.lineTo(+40, 0);
          zw_MinimapTeamCode.endFill();
          zw_MinimapTeamCode.y = 220;
          zw_MinimapTeamCode.x = 150;
          zw_MinimapTeamCode.addChild(zw_MinimapSombra);
          console.log(this.Kf);
          hstext = new vF11.fc("HS", {
            fontFamily: fonts[currentFontIndex],
            fontSize: 16,
            fill: "0x" + theoObjects.hsTextColor,
            align: "center"
          });
          hstext.position.y = 50;
          hstext.position.x = -35;
          killtext = new vF11.fc("KILL", {
            fontFamily: fonts[currentFontIndex],
            fontSize: 16,
            fill: "0x" + theoObjects.killTextColor,
            align: "center"
          });
          killtext.position.y = 50;
          killtext.position.x = 10;
          this.addChild(hstext);
          this.addChild(killtext);
          zw_killcount = 0;
          zw_hscount = 0;
          this.WLp = new vF11.fc("", {
            fontFamily: fonts[currentFontIndex],
            fontSize: 14,
            fill: "#FFFFFF",
            align: "center"
          });
          this.WLp.position.y = 67;
          this.WLp.position.x = -45;
          this.MLb = new vF11.fc("", {
            fontFamily: fonts[currentFontIndex],
            fontSize: 14,
            fill: "#FFFFFF",
            align: "center"
          });
          this.MLb.position.y = 67;
          this.MLb.position.x = 20;
          this.addChild(this.WLp);
          this.addChild(this.MLb);
          let v412 = new vF11._b(vF11.$b.from("https://i.imgur.com/VPkrI9l.png"));
          let v413 = new vF11.ec();
          v413.texture = v412;
          v413.width = 100;
          v413.height = 100;
          v413.x = -50;
          v413.y = -50;
          this.addChild(v413);
          let v414 = new vF11.ec();
          v414.texture = v412;
          v414.width = 100;
          v414.height = 100;
          v414.x = -50;
          v414.y = -50;
          zw_MinimapTeamCode.addChild(v414);
          if (zw_mobilecheck()) {
            var v415 = document.getElementById("game-cont");
            zw_mobilecontrol = 0;
            zw_mobilecontrol2 = -1;
            zw_mobileprediction = 0;
            zw_mobilecontroltextures = [];
            zw_mobilepredictiontextures = [];
            zw_mobilecontroltextures[0] = new vF11.ec.from("https://i.imgur.com/aOyOob6.png");
            zw_mobilecontroltextures[0].width = 80;
            zw_mobilecontroltextures[0].height = 40;
            zw_mobilecontroltextures[0].x = -100 + v415.offsetWidth * 0.5;
            zw_mobilecontroltextures[0].y = -60;
            zw_mobilecontroltextures[0].on("tap", () => {
              zw_mobilecontrol++;
              zw_joystick = 0;
              zw_mobileprediction = -1;
              for (let vLN043 = 0; vLN043 < zw_mobilepredictiontextures.length; vLN043++) {
                zw_mobilepredictiontextures[vLN043].visible = false;
              }
              for (let vLN044 = 0; vLN044 < zw_mobilecontroltextures.length; vLN044++) {
                zw_mobilecontroltextures[vLN044].visible = zw_mobilecontrol === vLN044;
              }
            });
            zw_mobilecontroltextures[1] = new vF11.ec.from("https://i.imgur.com/9ui2KwE.png");
            zw_mobilecontroltextures[1].width = 80;
            zw_mobilecontroltextures[1].height = 40;
            zw_mobilecontroltextures[1].x = -100 + v415.offsetWidth * 0.5;
            zw_mobilecontroltextures[1].y = -60;
            zw_mobilecontroltextures[1].visible = false;
            zw_mobilecontroltextures[1].on("tap", () => {
              if (zw_mobilecontrol2 !== 1) {
                zw_mobilecontrol2++;
                if (zw_mobilecontrol2 === 0) {
                  zw_mobilearrowtexture.x = 15;
                  zw_mobilepeedtexture.x = -250 + v415.offsetWidth;
                  zw_mobilearrowtexture.visible = true;
                  zw_mobilepeedtexture.visible = true;
                }
                if (zw_mobilecontrol2 === 1) {
                  zw_mobilearrowtexture.x = -250 + v415.offsetWidth;
                  zw_mobilepeedtexture.x = 15;
                }
                zw_mobileprediction = 1;
                zw_joystick = -1;
                for (let vLN045 = 0; vLN045 < zw_mobilepredictiontextures.length; vLN045++) {
                  zw_mobilepredictiontextures[vLN045].visible = zw_mobileprediction === vLN045;
                }
                return;
              }
              zw_mobilearrowtexture.visible = false;
              zw_mobilepeedtexture.visible = false;
              zw_joystick = 1;
              zw_mobilecontrol++;
              for (let vLN046 = 0; vLN046 < zw_mobilecontroltextures.length; vLN046++) {
                zw_mobilecontroltextures[vLN046].visible = zw_mobilecontrol === vLN046;
              }
            });
            zw_mobilecontroltextures[2] = new vF11.ec.from("https://i.imgur.com/NKAyYa8.png");
            zw_mobilecontroltextures[2].width = 80;
            zw_mobilecontroltextures[2].height = 40;
            zw_mobilecontroltextures[2].x = -100 + v415.offsetWidth * 0.5;
            zw_mobilecontroltextures[2].y = -60;
            zw_mobilecontroltextures[2].visible = false;
            zw_mobilecontroltextures[2].on("tap", () => {
              zw_mobilecontrol++;
              zw_mobileprediction = 2;
              zw_joystick = 2;
              for (let vLN047 = 0; vLN047 < zw_mobilepredictiontextures.length; vLN047++) {
                zw_mobilepredictiontextures[vLN047].visible = zw_mobileprediction === vLN047;
              }
              for (let vLN048 = 0; vLN048 < zw_mobilecontroltextures.length; vLN048++) {
                zw_mobilecontroltextures[vLN048].visible = zw_mobilecontrol === vLN048;
              }
            });
            zw_mobilecontroltextures[3] = new vF11.ec.from("https://i.imgur.com/n1jVrwm.png");
            zw_mobilecontroltextures[3].width = 80;
            zw_mobilecontroltextures[3].height = 40;
            zw_mobilecontroltextures[3].x = -100 + v415.offsetWidth * 0.5;
            zw_mobilecontroltextures[3].y = -60;
            zw_mobilecontroltextures[3].visible = false;
            zw_mobilecontroltextures[3].on("tap", () => {
              zw_mobilecontrol = 0;
              zw_mobilecontrol2 = -1;
              zw_mobileprediction = 0;
              zw_joystick = -1;
              for (let vLN049 = 0; vLN049 < zw_mobilepredictiontextures.length; vLN049++) {
                zw_mobilepredictiontextures[vLN049].visible = zw_mobileprediction === vLN049;
              }
              for (let vLN050 = 0; vLN050 < zw_mobilecontroltextures.length; vLN050++) {
                zw_mobilecontroltextures[vLN050].visible = zw_mobilecontrol === vLN050;
              }
            });
            zw_mobilepredictiontextures[0] = new vF11.ec.from("https://i.imgur.com/4ccZ556.png");
            zw_mobilepredictiontextures[0].width = 16;
            zw_mobilepredictiontextures[0].height = 16;
            zw_mobilepredictiontextures[0].x = 0;
            zw_mobilepredictiontextures[0].y = 0;
            zw_mobilepredictiontextures[0].alpha = 0;
            zw_mobilepredictiontextures[1] = new vF11.ec.from("https://i.imgur.com/hUVCdUv.png");
            zw_mobilepredictiontextures[1].width = 16;
            zw_mobilepredictiontextures[1].height = 16;
            zw_mobilepredictiontextures[1].x = 0;
            zw_mobilepredictiontextures[1].y = 0;
            zw_mobilepredictiontextures[1].visible = false;
            zw_mobilepredictiontextures[2] = new vF11.ec.from("https://i.imgur.com/WqWsDfi.png");
            zw_mobilepredictiontextures[2].width = 16;
            zw_mobilepredictiontextures[2].height = 16;
            zw_mobilepredictiontextures[2].x = 0;
            zw_mobilepredictiontextures[2].y = 0;
            zw_mobilepredictiontextures[2].visible = false;
            zw_mobilearrowtexture = new vF11.ec.from("https://i.imgur.com/mHp0ozi.png");
            zw_mobilearrowtexture.width = 100;
            zw_mobilearrowtexture.height = 100;
            zw_mobilearrowtexture.x = 15;
            zw_mobilearrowtexture.y = -210 + v415.offsetHeight;
            zw_mobilearrowtexture.visible = false;
            zw_mobilepeedtexture = new vF11.ec.from("https://i.imgur.com/0G8cFtP.png");
            zw_mobilepeedtexture.width = 80;
            zw_mobilepeedtexture.height = 80;
            zw_mobilepeedtexture.x = -250 + v415.offsetWidth;
            zw_mobilepeedtexture.y = -200 + v415.offsetHeight;
            zw_mobilepeedtexture.visible = false;
            zw_mobilepeedtexture.alpha = 0.5;
            this.addChild(zw_mobilearrowtexture);
            this.addChild(zw_mobilepeedtexture);
            for (let vLN051 = 0; vLN051 < zw_mobilecontroltextures.length; vLN051++) {
              this.addChild(zw_mobilecontroltextures[vLN051]);
            }
            for (let vLN052 = 0; vLN052 < zw_mobilepredictiontextures.length; vLN052++) {
              this.addChild(zw_mobilepredictiontextures[vLN052]);
            }
          }
        });
      }();
      var vF33 = function () {
        var vF193 = f19(vF11.Zb, function () {
          vF11.Zb.call(this);
          this.Tf = {};
        });
        vF193.prototype.Qa = function (p451) {
          var v416 = 0.5 + Math.cos(v311 * (p451 / 1000 / 1.6)) * 0.5;
          var v417;
          for (v417 in this.Tf) {
            var v418 = this.Tf[v417];
            var v419 = v418.Uf;
            v418.alpha = 1 - v419 + v419 * v416;
          }
        };
        vF193.prototype.Te = function (p452) {
          var v420;
          for (v420 in this.Tf) {
            if (p452[v420] == null || !p452[v420].sc) {
              f28(this.Tf[v420]);
              delete this.Tf[v420];
            }
          }
          var vLN053 = 0;
          var v421;
          for (v421 in p452) {
            var v422 = p452[v421];
            if (v422.sc) {
              var v423 = this.Tf[v421];
              if (!v423) {
                var v424 = f11().p.Dc().ld(v422.rc).Zc;
                v423 = new vF34();
                v423.texture = v424.Hc;
                v423.width = 40;
                v423.height = 40;
                this.Tf[v421] = v423;
                this.addChild(v423);
              }
              assignPtcValues(this, v421, v422.tc);
              v423.Uf = v422.tc;
              v423.position.x = vLN053;
              vLN053 = vLN053 + 40;
            }
          }
        };
        var vF34 = function () {
          return f19(vF11.ec, function () {
            vF11.ec.call(this);
            this.Uf = 0;
          });
        }();
        return vF193;
      }();
      var vF35 = function () {
        var vF194 = f19(vF11.Zb, function () {
          vF11.Zb.call(this);
          this.Ef = true;
          this.Vf = 12;
          this.Wf = 9;
          this.Pe = [];
          var vLN054 = 0;
          for (; vLN054 < 14; vLN054++) {
            this.Xf();
          }
        });
        vF194.prototype.Te = function (p453) {
          if (zw_zoomplustexture) {
            this.addChild(zw_zoomplustexture);
          }
          if (zw_zoomsubtracttexture) {
            this.addChild(zw_zoomsubtracttexture);
          }
          if (zw_girosubtracttexture) {
            this.addChild(zw_girosubtracttexture);
          }
          if (zw_explotWubtracttexture) {
            this.addChild(zw_explotWubtracttexture);
          }
          if (zw_servertext.text !== "") {
            this.addChild(zw_servertext);
            if (theoKzObjects.minimapTeamcod) {
              this.addChild(zw_TopFriends_list);
            } else {
              this.removeChild(zw_TopFriends_list);
            }
          }
          if (zwormData && gameState.players.size > 0) {
            sendPlayerUpdate(zwormData.playerX, zwormData.playerY);
          } else {}
          var vF115 = f11();
          var v425 = vF115.o.fb.af == vO17._e;
          var vLN055 = 0;
          var vLN056 = 0;
          if (vLN056 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[vLN056].Yf(1, "white");
          this.Pe[vLN056].Zf("", zw_servertext.text === "" ? "Top " + zw_toplist : "", `(${vF115.o.tb} 🌎)`);
          this.Pe[vLN056].position.y = vLN055;
          vLN055 = vLN055 + this.Vf;
          vLN056 = vLN056 + 1;
          if (p453.$f.length > 0) {
            vLN055 = vLN055 + this.Wf;
          }
          var vLN057 = 0;
          for (; vLN057 < p453.$f.length; vLN057++) {
            var v426 = p453.$f[vLN057];
            var v427 = vF115.p.Dc().ed(v426._f);
            if (vLN056 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN056].Yf(0.8, v427.bd._c);
            console.log(v427);
            this.Pe[vLN056].Zf("" + (vLN057 + 1), "Equipos / Teams", "" + Math.floor(v426.M));
            this.Pe[vLN056].position.y = vLN055;
            vLN055 = vLN055 + this.Vf;
            vLN056 = vLN056 + 1;
          }
          if (p453.ag.length > 0) {
            vLN055 = vLN055 + this.Wf;
          }
          var vLN058 = 0;
          for (; vLN058 < p453.ag.length; vLN058++) {
            var v428 = p453.ag[vLN058];
            var v429 = vF115.o.fb.bf == v428.bg;
            var vUndefined7 = undefined;
            var vUndefined8 = undefined;
            if (v429) {
              vUndefined7 = "white";
              vUndefined8 = vF115.o.N.Mb.ad;
            } else {
              var v430 = vF115.o.hb[v428.bg];
              if (v430 != null) {
                vUndefined7 = v425 ? vF115.p.Dc().ed(v430.Mb.cg).bd._c : vF115.p.Dc().dd(v430.Mb.dg)._c;
                vUndefined8 = this.Ef ? v430.Mb.ad : "---";
              } else {
                vUndefined7 = "gray";
                vUndefined8 = "?";
              }
            }
            if (v429) {
              vLN055 = vLN055 + this.Wf;
            }
            if (vLN056 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN056].Yf(v429 ? 1 : 0.8, vUndefined7);
            if (vF115.o.O === vLN056) {
              this.Pe[vLN056].Yf(1, "white");
            }
            var v431 = Math.floor(v428.M);
            v431.customFormat();
            this.Pe[vLN056].Zf("" + (vLN058 + 1), vUndefined8, "" + v431.customFormat());
            this.Pe[vLN056].position.y = vLN055;
            vLN055 = vLN055 + this.Vf;
            vLN056 = vLN056 + 1;
            if (v429) {
              vLN055 = vLN055 + this.Wf;
            }
          }
          if (vF115.o.O > p453.ag.length) {
            vLN055 = vLN055 + this.Wf;
            if (vLN056 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN056].Yf(1, "#FFFFFF");
            window.tuNewScore = Math.floor(vF115.o.N.M);
            window.tuNewScore.customFormat();
            this.Pe[vLN056].Zf("" + vF115.o.O, vF115.o.N.Mb.ad, "" + window.tuNewScore.customFormat());
            this.Pe[vLN056].position.y = vLN055;
            vLN055 = vLN055 + this.Vf;
            vLN056 = vLN056 + 1;
            vLN055 = vLN055 + this.Wf;
          }
          while (this.Pe.length > vLN056) {
            f28(this.Pe.pop());
          }
        };
        vF194.prototype.Xf = function () {
          var v432 = new vF36();
          v432.position.y = 0;
          if (this.Pe.length > 0) {
            v432.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf;
          }
          this.Pe.push(v432);
          this.addChild(v432);
        };
        var vF36 = function () {
          var vF195 = f19(vF11.Zb, function () {
            vF11.Zb.call(this);
            this.eg = new vF11.fc("", {
              dropShadow: false,
              dropShadowBlur: 5,
              dropShadowColor: "#707070",
              dropShadowDistance: 3,
              fontFamily: fonts[currentFontIndex],
              fontSize: 12,
              fill: "white"
            });
            this.eg.anchor.x = 1;
            this.eg.position.x = 30;
            this.addChild(this.eg);
            this.fg = new vF11.fc("", {
              dropShadow: false,
              dropShadowBlur: 5,
              dropShadowColor: "#707070",
              dropShadowDistance: 3,
              fontFamily: fonts[currentFontIndex],
              fontSize: 12,
              fill: "white"
            });
            this.fg.anchor.x = 0;
            this.fg.position.x = 35;
            this.addChild(this.fg);
            this.gg = new vF11.fc("", {
              dropShadow: false,
              dropShadowBlur: 5,
              dropShadowColor: "#707070",
              dropShadowDistance: 3,
              fontFamily: fonts[currentFontIndex],
              fontSize: 12,
              fill: "white"
            });
            this.gg.anchor.x = 1;
            this.gg.position.x = 220;
            this.addChild(this.gg);
          });
          vF195.prototype.Zf = function (p454, p455, p456) {
            this.eg.text = p454;
            this.gg.text = p456;
            var vP455 = p455;
            this.fg.text = vP455;
            while (this.fg.width > 100) {
              vP455 = vP455.substring(0, vP455.length - 1);
              this.fg.text = vP455 + "..";
            }
          };
          vF195.prototype.Yf = function (p457, p458) {
            this.eg.alpha = p457;
            this.eg.style.fill = p458;
            this.fg.alpha = p457;
            this.fg.style.fill = p458;
            this.gg.alpha = p457;
            this.gg.style.fill = p458;
          };
          return vF195;
        }();
        return vF194;
      }();
      return f62;
    }();
    var vF38 = function () {
      function f63(p459) {
        this.o = p459;
        this.hg = [];
        this.ig = 0;
      }
      f63.prototype.Xb = function (p460) {
        this.hg.push(new DataView(p460));
      };
      f63.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0;
      };
      f63.prototype.Bb = function () {
        if (this.hg.length === 0) {
          return;
        }
        let v433 = navigator.hardwareConcurrency ? Math.max(5, navigator.hardwareConcurrency) : 10;
        const vF39 = () => {
          let vLN059 = 0;
          const v434 = performance.now();
          const vLN6 = 6;
          while (vLN059 < v433 && this.hg.length > 0) {
            const v435 = this.hg.shift();
            try {
              this.jg(v435);
            } catch (e27) {
              console.log("DataReader error: " + e27);
            }
            vLN059++;
            if (performance.now() - v434 > vLN6) {
              break;
            }
          }
          if (this.hg.length > 0) {
            setTimeout(vF39, 0);
          }
        };
        vF39();
      };
      f63.prototype.jg = function (p461) {
        switch (p461.mc(0) & 255) {
          case 0:
            this.kg(p461, 1);
            return;
          case 1:
            this.lg(p461, 1);
            return;
          case 2:
            this.mg(p461, 1);
            return;
          case 3:
            this.ng(p461, 1);
            return;
          case 4:
            this.og(p461, 1);
            return;
          case 5:
            this.pg(p461, 1);
            return;
        }
      };
      f63.prototype.kg = function (p462, p463) {
        console.log("sgp1");
        this.o.fb.af = p462.mc(p463);
        p463 = p463 + 1;
        var v436 = p462.nc(p463);
        p463 = p463 + 2;
        this.o.fb.bf = v436;
        this.o.N.Mb.Lb = v436;
        this.o.fb.ub = p462.pc(p463);
        p463 = p463 + 4;
        this.o.fb.cf = p462.pc(p463);
        p463 = p463 + 4;
        this.o.fb.df = p462.pc(p463);
        p463 = p463 + 4;
        f11().s.H.wb.Te(this.o.fb, f11().s.xa.wa());
        console.log("sgp2");
        return p463;
      };
      f63.prototype.lg = function (p464, p465) {
        var v437 = this.ig++;
        var v438 = p464.nc(p465);
        p465 += 2;
        var vUndefined9 = undefined;
        vUndefined9 = this.qg(p464, p465);
        p465 += this.rg(vUndefined9);
        for (var vLN060 = 0; vLN060 < vUndefined9; vLN060++) {
          p465 = this.sg(p464, p465);
        }
        vUndefined9 = this.qg(p464, p465);
        p465 += this.rg(vUndefined9);
        for (var vLN061 = 0; vLN061 < vUndefined9; vLN061++) {
          p465 = this.tg(p464, p465);
        }
        vUndefined9 = this.qg(p464, p465);
        p465 += this.rg(vUndefined9);
        for (var vLN062 = 0; vLN062 < vUndefined9; vLN062++) {
          p465 = this.ug(p464, p465);
        }
        vUndefined9 = this.qg(p464, p465);
        p465 += this.rg(vUndefined9);
        for (var vLN063 = 0; vLN063 < vUndefined9; vLN063++) {
          p465 = this.vg(p464, p465);
        }
        vUndefined9 = this.qg(p464, p465);
        p465 += this.rg(vUndefined9);
        for (var vLN064 = 0; vLN064 < vUndefined9; vLN064++) {
          p465 = this.wg(p464, p465);
        }
        vUndefined9 = this.qg(p464, p465);
        p465 += this.rg(vUndefined9);
        for (var vLN065 = 0; vLN065 < vUndefined9; vLN065++) {
          p465 = this.xg(p464, p465);
        }
        vUndefined9 = this.qg(p464, p465);
        p465 += this.rg(vUndefined9);
        for (var vLN066 = 0; vLN066 < vUndefined9; vLN066++) {
          p465 = this.yg(p464, p465);
        }
        vUndefined9 = this.qg(p464, p465);
        p465 += this.rg(vUndefined9);
        for (var vLN067 = 0; vLN067 < vUndefined9; vLN067++) {
          p465 = this.zg(p464, p465);
        }
        if (v437 > 0) {
          p465 = this.Ag(p464, p465);
        }
        this.o.Qb(v437, v438);
        return p465;
      };
      f63.prototype.vg = function (p466, p467) {
        var v439 = new vF55.Config();
        v439.Lb = p466.nc(p467);
        p467 = p467 + 2;
        v439.cg = this.o.fb.af == vO17._e ? p466.mc(p467++) : vF28.TEAM_DEFAULT;
        v439.dg = p466.nc(p467);
        let vP467 = p467;
        p467 = p467 + 2;
        v439.Bg = p466.nc(p467);
        let vP4672 = p467;
        p467 = p467 + 2;
        v439.Cg = p466.nc(p467);
        let vP4673 = p467;
        p467 = p467 + 2;
        v439.Dg = p466.nc(p467);
        let vP4674 = p467;
        p467 = p467 + 2;
        v439.Eg = p466.nc(p467);
        let vP4675 = p467;
        p467 = p467 + 2;
        var v440 = p466.mc(p467);
        p467 = p467 + 1;
        var vLS3 = "";
        var vLN068 = 0;
        for (; vLN068 < v440; vLN068++) {
          vLS3 = vLS3 + String.fromCharCode(p466.nc(p467));
          p467 = p467 + 2;
        }
        if (p467 > 210) {
          for (let v441 in this.o.hb) {
            if (theoKzObjects.chngBotSkins) {
              var v442 = this.o.hb[v441].Mb.dg;
              if (v442 >= 32 && v442 <= 35) {
                var v443 = Math.floor(Math.random() * 49) + 1500;
                this.o.hb[v441].Mb.dg = v443;
              }
            }
            if (theoKzObjects.chngPersonsSkins) {
              if (/^(.+?)@(.+)/.test(this.o.hb[v441].Mb.ad)) {
                const v444 = this.o.hb[v441].Mb.dg;
                if (v444 >= 32 && v444 <= 35) {
                  const v445 = Math.floor(Math.random() * 49) + 1500;
                  this.o.hb[v441].Mb.dg = v445;
                }
              }
              if (/^(.+?)[a-zA-Z1-9@]+_+\d+(.+)/.test(this.o.hb[v441].Mb.ad)) {
                const v446 = this.o.hb[v441].Mb.dg;
                if (v446 >= 32 && v446 <= 35) {
                  const v447 = Math.floor(Math.random() * 49) + 1500;
                  this.o.hb[v441].Mb.dg = v447;
                }
              }
            }
            if (/^(.{16})(ZW_\d{9})$/.test(this.o.hb[v441].Mb.ad)) {
              console.log("nombre: " + this.o.hb[v441].Mb.ad);
              var v448 = this.o.hb[v441].Mb.ad.substr(-10);
              let v449 = v448.substr(1, 4);
              console.log("skinId_A: " + v449);
              let v450 = v448.substr(5, 5);
              let v451 = v448.substr(6, 3);
              let v452 = v448.substr(9, 3);
              if (v449 !== "0000" && theoKzObjects.visibleSkin.indexOf(parseInt(v449)) !== -1) {
                this.o.hb[v441].Mb.dg = parseInt(v449);
              }
              if (v450 !== "00000") {
                this.o.hb[v441].Mb.Eg = parseInt(v450);
              }
              if (v451 !== "000") {
                this.o.hb[v441].Mb.Bg = parseInt(v451);
              }
              if (v452 !== "000") {
                this.o.hb[v441].Mb.Cg = parseInt(v452);
              }
            }
          }
        }
        if (f11().o.N.Mb.Lb === v439.Lb) {
          v439.dg = theoKzObjects?.PropertyManager?.rh ?? 0;
          v439.Bg = theoKzObjects?.PropertyManager?.sh ?? 0;
          v439.Cg = theoKzObjects?.PropertyManager?.th ?? 0;
          v439.Dg = theoKzObjects?.PropertyManager?.uh ?? 0;
          v439.Eg = theoKzObjects?.PropertyManager?.vh ?? 0;
          p466.setInt16(vP467, v439.dg);
          p466.setInt16(vP4672, v439.Bg);
          p466.setInt16(vP4673, v439.Cg);
          p466.setInt16(vP4674, v439.Dg);
          p466.setInt16(vP4675, v439.Eg);
          _wrmxt.aload = true;
          _wrmxt.aId = vP467;
        }
        v439.ad = vLS3;
        if (this.o.fb.bf === v439.Lb) {
          this.o.N.Fg(v439);
          v439.Mb = v439.Lb;
          v439.bd = v439.ad;
        } else {
          var v453 = this.o.hb[v439.Lb];
          if (v453 != null) {
            v453.Kb();
          }
          var v454 = new vF55(this.o.fb);
          v454.vb(f11().s.H.wb);
          this.o.hb[v439.Lb] = v454;
          v454.Fg(v439);
        }
        return p467;
      };
      f63.prototype.wg = function (p468, p469) {
        var v455 = p468.nc(p469);
        p469 += 2;
        var v456 = p468.mc(p469);
        p469++;
        var v457 = !!(v456 & 1);
        var v458 = !!(v456 & 2);
        var vLN069 = 0;
        if (v457) {
          vLN069 = p468.nc(p469);
          p469 += 2;
        }
        var v459 = this.Gg(v455);
        if (v459 === undefined) {
          return p469;
        }
        v459.Ib = false;
        if (!v459.Hb) {
          return p469;
        }
        var v460 = this.Gg(v455);
        if (v457 && v460 !== undefined && v460.Hb) {
          if (vLN069 === this.o.fb.bf) {
            var v461 = this.o.N.Gf();
            var v462 = v459.Hg(v461.x, v461.y);
            if (v458 === true) {
              zwormData.enemyNameHs = v459.Mb.ad;
            }
            Math.max(0, 1 - v462.distance / (this.o.jb * 0.5));
            if (v462.distance < this.o.jb * 0.5) {
              f11().s.H.wb.wf.Se(v458);
            }
          } else if (v455 === this.o.fb.bf) {} else {
            var v463 = this.o.N.Gf();
            var v464 = v459.Hg(v463.x, v463.y);
            Math.max(0, 1 - v464.distance / (this.o.jb * 0.5));
          }
        } else if (v455 === this.o.fb.bf) {} else {
          var v465 = this.o.N.Gf();
          var v466 = v459.Hg(v465.x, v465.y);
          Math.max(0, 1 - v466.distance / (this.o.jb * 0.5));
        }
        return p469;
      };
      f63.prototype.zg = function (p470, p471) {
        var v467 = p470.nc(p471);
        p471 += 2;
        var v468 = v467 === this.o.fb.bf ? null : this.o.hb[v467];
        var v469 = p470.mc(p471);
        p471 += 1;
        var v470 = !!(v469 & 1);
        if (v469 & 2) {
          var v471 = p470.pc(p471);
          p471 += 4;
          if (v468) {
            v468.Ig(v471);
          }
        }
        var v472 = this.Jg(p470.mc(p471++), p470.mc(p471++), p470.mc(p471++));
        var v473 = this.Jg(p470.mc(p471++), p470.mc(p471++), p470.mc(p471++));
        if (v468) {
          v468.Kg(v472, v473, v470);
          var v474 = this.o.N.Gf();
          var v475 = v468.Gf();
          var v476 = Math.max(0, 1 - Math.hypot(v474.x - v475.x, v474.y - v475.y) / (this.o.jb * 0.5));
          f11().r.Zd(v476, v467, v470);
        }
        var v477 = this.qg(p470, p471);
        p471 += this.rg(v477);
        if (v468) {
          var v478;
          for (v478 in v468.Ff) {
            var v479 = v468.Ff[v478];
            if (v479) {
              v479.sc = false;
            }
          }
        }
        var vLN070 = 0;
        for (; vLN070 < v477; vLN070++) {
          var v480 = p470.mc(p471);
          p471++;
          var v481 = p470.mc(p471);
          p471++;
          if (v468) {
            var v482 = v468.Ff[v480];
            if (!v482) {
              v482 = v468.Ff[v480] = new vF12(v480);
            }
            v482.sc = true;
            v482.tc = Math.min(1, Math.max(0, v481 / 100));
          }
        }
        return p471;
      };
      f63.prototype.Ag = function (p472, p473) {
        var v483 = this.o.N;
        var v484 = p472.mc(p473);
        p473 += 1;
        var v485 = !!(v484 & 1);
        var v486 = !!(v484 & 2);
        var v487 = !!(v484 & 4);
        if (v486) {
          var v488 = v483.M;
          v483.Ig(p472.pc(p473));
          p473 += 4;
          v488 = v483.M - v488;
          if (v488 > 0) {
            f11().s.H.wb.wf.Re(v488);
          }
        }
        if (v487) {
          this.o.ib = p472.pc(p473);
          p473 += 4;
        }
        var v489 = this.Jg(p472.mc(p473++), p472.mc(p473++), p472.mc(p473++));
        var v490 = this.Jg(p472.mc(p473++), p472.mc(p473++), p472.mc(p473++));
        v483.Kg(v489, v490, v485);
        f11().r.Zd(0.5, this.o.fb.bf, v485);
        var v491 = this.qg(p472, p473);
        p473 += this.rg(v491);
        for (var v492 in v483.Ff) {
          var v493 = v483.Ff[v492];
          if (v493) {
            v493.sc = false;
          }
        }
        for (var vLN071 = 0; vLN071 < v491; vLN071++) {
          var v494 = p472.mc(p473);
          p473++;
          var v495 = p472.mc(p473);
          p473++;
          var v496 = v483.Ff[v494];
          if (!v496) {
            v496 = new vF12(v494);
            v483.Ff[v494] = v496;
          }
          v496.sc = true;
          v496.tc = Math.min(1, Math.max(0, v495 / 100));
        }
        f11().s.H.wb.uf.Te(v483.Ff);
      };
      f63.prototype.xg = function (p474, p475) {
        var vThis7 = this;
        var v497 = p474.nc(p475);
        p475 += 2;
        var v498 = this.Gg(v497);
        var v499 = p474.pc(p475);
        p475 += 4;
        var vA13 = [];
        for (var v500 in v498.Ff) {
          if (v500 == 0) {
            vA13.push("velocidad");
            $(".v0").fadeIn();
          } else if (v500 == 1) {
            vA13.push("movimiento");
            $(".v1").fadeIn();
          } else if (v500 == 2) {
            vA13.push("iman");
            $(".v2").fadeIn();
          } else if (v500 == 3) {
            vA13.push("comidax2");
            $(".v3").fadeIn();
          } else if (v500 == 4) {
            vA13.push("comidax5");
            $(".v4").fadeIn();
          } else if (v500 == 5) {
            vA13.push("comidax10");
            $(".v5").fadeIn();
          } else if (v500 == 6) {
            vA13.push("zoom");
            $(".v6").fadeIn();
          } else {
            console.log("comiste otro potenciador");
          }
        }
        window.nombres2 = vA13;
        if (v498.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 3000);
        } else {}
        var v501 = this.qg(p474, p475);
        p475 += this.rg(v501);
        if (v498) {
          v498.Ig(v499);
          v498.Lg(function () {
            return vThis7.Jg(p474.mc(p475++), p474.mc(p475++), p474.mc(p475++));
          }, v501);
          v498.Mg(true);
          var v502 = this.o.N.Gf();
          var v503 = v498.Gf();
          var v504 = Math.max(0, 1 - Math.hypot(v502.x - v503.x, v502.y - v503.y) / (this.o.jb * 0.5));
          f11().r.Xd(v504, v497);
        } else {
          p475 += v501 * 6;
        }
        return p475;
      };
      f63.prototype.yg = function (p476, p477) {
        var v505 = p476.nc(p477);
        p477 += 2;
        var v506 = this.o.hb[v505];
        var vA14 = [];
        if (v506 && v506.Ib) {
          v506.Mg(false);
        }
        f11().r.Yd(v505);
        return p477;
      };
      f63.prototype.sg = function (p478, p479) {
        var v507 = new vF41.Config();
        v507.Lb = p478.oc(p479);
        p479 += 4;
        v507.cg = this.o.fb.af === vO17._e ? p478.mc(p479++) : vF28.TEAM_DEFAULT;
        v507.Ng = this.Jg(p478.mc(p479++), p478.mc(p479++), p478.mc(p479++));
        v507.dg = p478.mc(p479++);
        var v508 = this.o.gb[v507.Lb];
        if (v508 != null) {
          v508.Kb();
        }
        var v509 = new vF41(v507, f11().s.H.wb);
        v509.Og(this.Pg(v507.Lb), this.Qg(v507.Lb), true);
        this.o.gb[v507.Lb] = v509;
        return p479;
      };
      f63.prototype.tg = function (p480, p481) {
        var v510 = p480.oc(p481);
        p481 += 4;
        var v511 = this.o.gb[v510];
        if (v511) {
          v511.Rg = 0;
          v511.Sg = v511.Sg * 1.5;
          v511.Nb = true;
        }
        return p481;
      };
      f63.prototype.ug = function (p482, p483) {
        var v512 = p482.oc(p483);
        p483 += 4;
        var v513 = p482.nc(p483);
        p483 += 2;
        var v514 = this.o.gb[v512];
        if (v514) {
          v514.Rg = 0;
          v514.Sg = v514.Sg * 0.1;
          v514.Nb = true;
          var v515 = this.Gg(v513);
          if (v515 && v515.Hb) {
            this.o.fb.bf;
            var v516 = v515.Gf();
            v514.Og(v516.x, v516.y, false);
          }
        }
        return p483;
      };
      var vA15 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      f63.prototype.mg = function (p484) {
        var v517 = f11().q.Ug.Tg;
        var v518 = v517.getImageData(0, 0, 80, 80);
        var v519 = vA15[0];
        var v520 = 80 - v519;
        var vLN072 = 0;
        for (var vLN073 = 0; vLN073 < 628; vLN073++) {
          var v521 = p484.mc(1 + vLN073);
          for (var vLN074 = 0; vLN074 < 8; vLN074++) {
            var v522 = (v521 >> vLN074 & 1) != 0;
            var v523 = (v519 + vLN072 * 80) * 4;
            if (v522) {
              v518.data[v523] = 255;
              v518.data[v523 + 1] = 255;
              v518.data[v523 + 2] = 255;
              v518.data[v523 + 3] = 255;
            } else {
              v518.data[v523 + 3] = 0;
            }
            if (++v519 >= v520 && ++vLN072 < 80) {
              v519 = vA15[vLN072];
              v520 = 80 - v519;
            }
          }
        }
        v517.putImageData(v518, 0, 0);
        var v524 = f11().s.H.wb.tf.Sf;
        v524.texture = f11().q.Ug.Hc;
        v524.texture.update();
      };
      f63.prototype.og = function (p485, p486) {
        var v525 = p485.oc(p486);
        p486 += 4;
        console.log("Wormy Error: " + v525);
      };
      f63.prototype.pg = function (p487, p488) {
        if (zw_joystick !== -1) {
          zw_joysticks[zw_joystick].visible = false;
        }
        theoKzObjects.emoji = false;
        theoKzObjects.dead = true;
        createCircle();
        zwormData.hs = 0;
        sendPlayerDeath(0, 0);
        sendPlayerUpdate(999999, 999999);
        clearTeamUbication();
        console.log("g.o");
      };
      f63.prototype.ng = function (p489, p490) {
        this.o.tb = p489.nc(p490);
        p490 += 2;
        this.o.O = p489.nc(p490);
        p490 += 2;
        var v526 = new vF50();
        v526.ag = [];
        for (var v527 = p489.mc(p490++), vLN075 = 0; vLN075 < v527; vLN075++) {
          var v528 = p489.nc(p490);
          p490 += 2;
          var v529 = p489.pc(p490);
          p490 += 4;
          v526.ag.push(vF50.Vg(v528, v529));
        }
        v526.$f = [];
        if (this.o.fb.af === vO17._e) {
          for (var v530 = p489.mc(p490++), vLN076 = 0; vLN076 < v530; vLN076++) {
            var v531 = p489.mc(p490);
            p490 += 1;
            var v532 = p489.pc(p490);
            p490 += 4;
            v526.$f.push(vF50.Wg(v531, v532));
          }
        }
        f11().s.H.wb.vf.Te(v526);
      };
      f63.prototype.Gg = function (p491) {
        if (p491 === this.o.fb.bf) {
          return this.o.N;
        } else {
          return this.o.hb[p491];
        }
      };
      f63.prototype.Jg = function (p492, p493, p494) {
        return (((p494 & 255 | p493 << 8 & 65280 | p492 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      f63.prototype.Pg = function (p495) {
        return ((p495 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f63.prototype.Qg = function (p496) {
        return ((p496 >> 16 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f63.prototype.qg = function (p497, p498) {
        var v533 = p497.mc(p498);
        if ((v533 & 128) == 0) {
          return v533;
        }
        var v534 = p497.mc(p498 + 1);
        if ((v534 & 128) == 0) {
          return v534 | v533 << 7 & 16256;
        }
        var v535 = p497.mc(p498 + 2);
        if ((v535 & 128) == 0) {
          return v535 | v534 << 7 & 16256 | v533 << 14 & 2080768;
        }
        var v536 = p497.mc(p498 + 3);
        if ((v536 & 128) == 0) {
          return v536 | v535 << 7 & 16256 | v534 << 14 & 2080768 | v533 << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      f63.prototype.rg = function (p499) {
        if (p499 < 128) {
          return 1;
        } else if (p499 < 16384) {
          return 2;
        } else if (p499 < 2097152) {
          return 3;
        } else if (p499 < 268435456) {
          return 4;
        } else {
          return undefined;
        }
      };
      return f63;
    }();
    var vF40 = function () {
      function f64(p500) {
        this.Xg = p500;
      }
      f64.Yg = function () {
        return new vF40(null);
      };
      f64.Zg = function (p501) {
        return new vF40(p501);
      };
      f64.prototype.$g = function () {
        return this.Xg;
      };
      f64.prototype._g = function () {
        return this.Xg != null;
      };
      f64.prototype.ah = function (p502) {
        if (this.Xg != null) {
          p502(this.Xg);
        }
      };
      return f64;
    }();
    var vF41 = function () {
      function f65(p503, p504) {
        this.Mb = p503;
        this.bh = p503.dg >= 80;
        this.Ob = 0;
        this.Pb = 0;
        this.ch = 0;
        this.dh = 0;
        this.Sg = this.bh ? 1 : p503.Ng;
        this.Rg = 1;
        this.Nb = false;
        this.eh = 0;
        this.fh = 0;
        this.Jb = 1;
        this.Ae = Math.PI * 2 * Math.random();
        this.gh = new vF42();
        this.gh.hh(f11().o.fb.af, this.Mb.cg === vF28.TEAM_DEFAULT ? null : f11().p.Dc().ed(this.Mb.cg), f11().p.Dc().kd(this.Mb.dg));
        p504.Lf(p503.Lb, this.gh);
      }
      f65.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      f65.prototype.Og = function (p505, p506, p507) {
        this.Ob = p505;
        this.Pb = p506;
        if (p507) {
          this.ch = p505;
          this.dh = p506;
        }
      };
      f65.prototype.Fb = function (p508, p509) {
        var v537 = Math.min(0.5, this.Sg * 1);
        var v538 = Math.min(2.5, this.Sg * 1.5);
        this.eh = f23(this.eh, v537, p509, 0.0025);
        this.fh = f23(this.fh, v538, p509, 0.0025);
        this.Jb = f23(this.Jb, this.Rg, p509, 0.0025);
      };
      f65.prototype.Gb = function (p510, p511, p512) {
        this.ch = f23(this.ch, this.Ob, p511, theoKzObjects.eat_animation);
        this.dh = f23(this.dh, this.Pb, p511, 0.0025);
        this.gh.Te(this, p510, p511, p512);
      };
      f65.Config = function () {
        function f66() {
          this.Lb = 0;
          this.cg = vF28.TEAM_DEFAULT;
          this.Ng = 0;
          this.dg = 0;
        }
        return f66;
      }();
      return f65;
    }();
    var vF42 = function () {
      function f67() {
        this.Of = new vF43(new vF53(), new vF53());
        this.Of.Pf.jh.blendMode = vF11.ic.jc;
        this.Of.Pf.jh.zIndex = vLN1004;
        this.Of.Nf.jh.zIndex = vLN5002;
      }
      var vLN5002 = 500;
      var vLN1004 = 100;
      f67.prototype.hh = function (p513, p514, p515) {
        var v539 = p515.Zc;
        if (v539 != null) {
          this.Of.Nf.kh(v539);
        }
        var v540 = p513 == vO17._e && p514 != null ? p514.cd.$c : p515.$c;
        if (v540 != null) {
          this.Of.Pf.kh(v540);
        }
      };
      f67.prototype.Te = function (p516, p517, p518, p519) {
        if (!p519(p516.ch, p516.dh)) {
          this.Of.lh();
          return;
        }
        var v541 = p516.fh * (1 + Math.cos(p516.Ae + p517 / 200) * 0.3);
        if (p516.bh) {
          this.Of.mh(p516.ch, p516.dh, theoKzObjects.PotenciadorSize * p516.eh, p516.Jb * 1, theoKzObjects.PotenciadorAura * v541, p516.Jb * 0.8);
        } else {
          this.Of.mh(p516.ch, p516.dh, theoKzObjects.ComidaSize * p516.eh, p516.Jb * 1, theoKzObjects.ComidaShadow * v541, p516.Jb * 0.3);
        }
      };
      var vF43 = function () {
        function f68(p520, p521) {
          this.Nf = p520;
          this.Pf = p521;
        }
        f68.prototype.mh = function (p522, p523, p524, p525, p526, p527) {
          this.Nf.Mg(true);
          this.Nf.nh(p522, p523);
          this.Nf.oh(p524);
          this.Nf.qh(p525);
          this.Pf.Mg(true);
          this.Pf.nh(p522, p523);
          this.Pf.oh(p526);
          this.Pf.qh(p527);
        };
        f68.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return f68;
      }();
      return f67;
    }();
    var vF44 = function () {
      function f69() {
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.wh = [];
      }
      function f70(p528, p529) {
        if (!f11().p.W()) {
          return null;
        }
        var v542 = f11().p.Ac();
        if (p529 === vF45.ia) {
          var v_0x19e512 = f71(v542.skinArrayDict, p528);
          if (v_0x19e512 < 0) {
            return null;
          } else {
            console.log(v542.skinArrayDict[v_0x19e512]);
            return v542.skinArrayDict[v_0x19e512];
          }
        }
        switch (p529) {
          case vF45.ja:
            return v542.eyesDict[p528];
          case vF45.ka:
            return v542.mouthDict[p528];
          case vF45.la:
            return v542.glassesDict[p528];
          case vF45.ma:
            return v542.hatDict[p528];
        }
        return null;
      }
      function f71(p530, p531) {
        for (var vLN077 = 0; vLN077 < p530.length; vLN077++) {
          if (p530[vLN077].id == p531) {
            return vLN077;
          }
        }
        return -1;
      }
      f69.prototype.a = function () {};
      f69.prototype.ha = function (p532) {
        if (!theoKzObjects.loading) {
          theoKzObjects.PropertyManager = this;
          localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
        }
        switch (p532) {
          case vF45.ia:
            return this.rh;
          case vF45.ja:
            return this.sh;
          case vF45.ka:
            return this.th;
          case vF45.la:
            return this.uh;
          case vF45.ma:
            return this.vh;
        }
        return 0;
      };
      f69.prototype.xh = function (p533) {
        this.wh.push(p533);
        this.yh();
      };
      f69.prototype.Ia = function () {
        if (!f11().p.W()) {
          return f29([32, 33, 34, 35]);
        }
        for (var v543 = f11().p.Ac(), vA16 = [], vLN078 = 0; vLN078 < v543.skinArrayDict.length; vLN078++) {
          var v544 = v543.skinArrayDict[vLN078];
          if (this.Ja(v544.id, vF45.ia)) {
            vA16.push(v544);
          }
        }
        if (vA16.length === 0) {
          return 0;
        } else {
          return vA16[parseInt(vA16.length * Math.random())].id;
        }
      };
      f69.prototype.zh = function () {
        if (f11().p.W) {
          var v545 = f11().p.Ac().skinArrayDict;
          var vF71 = f71(v545, this.rh);
          if (!(vF71 < 0)) {
            for (var v546 = vF71 + 1; v546 < v545.length; v546++) {
              if (this.Ja(v545[v546].id, vF45.ia)) {
                this.rh = v545[v546].id;
                this.yh();
                return;
              }
            }
            for (var vLN079 = 0; vLN079 < vF71; vLN079++) {
              if (this.Ja(v545[vLN079].id, vF45.ia)) {
                this.rh = v545[vLN079].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f69.prototype.Ah = function () {
        if (f11().p.W) {
          var v547 = f11().p.Ac().skinArrayDict;
          var vF712 = f71(v547, this.rh);
          if (!(vF712 < 0)) {
            for (var v548 = vF712 - 1; v548 >= 0; v548--) {
              if (this.Ja(v547[v548].id, vF45.ia)) {
                this.rh = v547[v548].id;
                this.yh();
                return;
              }
            }
            for (var v549 = v547.length - 1; v549 > vF712; v549--) {
              if (this.Ja(v547[v549].id, vF45.ia)) {
                this.rh = v547[v549].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f69.prototype.Bh = function (p534, p535) {
        if (!f11().p.W() || this.Ja(p534, p535)) {
          switch (p535) {
            case vF45.ia:
              if (this.rh != p534) {
                this.rh = p534;
                this.yh();
              }
              return;
            case vF45.ja:
              if (this.sh != p534) {
                this.sh = p534;
                this.yh();
              }
              return;
            case vF45.ka:
              if (this.th != p534) {
                this.th = p534;
                this.yh();
              }
              return;
            case vF45.la:
              if (this.uh != p534) {
                this.uh = p534;
                this.yh();
              }
              return;
            case vF45.ma:
              if (this.vh != p534) {
                this.vh = p534;
                this.yh();
              }
              return;
          }
        }
      };
      f69.prototype.Ja = function (p536, p537) {
        var vF70 = f70(p536, p537);
        return vF70 != null && (f11().u.P() ? vF70.price == 0 && !vF70.nonbuyable || f11().u.Ch(p536, p537) : vF70.guest);
      };
      f69.prototype.yh = function () {
        for (var vLN080 = 0; vLN080 < this.wh.length; vLN080++) {
          this.wh[vLN080]();
        }
      };
      return f69;
    }();
    var vF45 = function () {
      function f72() {}
      f72.ia = "SKIN";
      f72.ja = "EYES";
      f72.ka = "MOUTH";
      f72.la = "GLASSES";
      f72.ma = "HAT";
      return f72;
    }();
    var vF46 = function () {
      function f73(p538, p539, p540, p541, p542, p543, p544, p545, p546) {
        this.Hc = new vF11._b(p538, new vF11.dc(p539, p540, p541, p542));
        this.Dh = p539;
        this.Eh = p540;
        this.Fh = p541;
        this.Gh = p542;
        this.Hh = p543 || (p545 || p541) / 2;
        this.Ih = p544 || (p546 || p542) / 2;
        this.Jh = p545 || p541;
        this.Kh = p546 || p542;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return f73;
    }();
    var vF47 = function () {
      function f74() {
        this.fn_o = vF48;
        this.Fe = new vF11._b(vF11.$b.from("/images/bg-obstacle.png"));
        var v550 = vF11.$b.from("https://i.imgur.com/gvMlosm.png");
        this.Ge = [new vF11._b(v550, new vF11.dc(0, 0, 128, 128)), new vF11._b(v550, new vF11.dc(0, 0, 128, 128)), new vF11._b(v550, new vF11.dc(0, 0, 128, 128)), new vF11._b(v550, new vF11.dc(0, 0, 128, 128)), new vF11._b(v550, new vF11.dc(0, 0, 128, 128)), new vF11._b(v550, new vF11.dc(0, 0, 128, 128)), new vF11._b(v550, new vF11.dc(0, 0, 128, 128)), new vF11._b(v550, new vF11.dc(0, 0, 128, 128)), new vF11._b(v550, new vF11.dc(0, 0, 128, 128)), new vF11._b(v550, new vF11.dc(0, 0, 128, 128)), new vF11._b(v550, new vF11.dc(0, 0, 128, 128)), new vF11._b(v550, new vF11.dc(0, 0, 128, 128)), new vF11._b(v550, new vF11.dc(0, 0, 128, 128)), new vF11._b(v550, new vF11.dc(0, 0, 128, 128)), new vF11._b(v550, new vF11.dc(0, 0, 128, 128)), new vF11._b(v550, new vF11.dc(0, 0, 128, 128))];
        this.Cf = new vF11._b(vF48());
        this.Df = new vF11._b(function () {
          var v551 = vF11.$b.from("/images/bg-pattern-pow2-TEAM2.png");
          v551.wrapMode = vF11.kc.lc;
          return v551;
        }());
        this.Af = new vF11._b(vF11.$b.from("/images/lens.png"));
        var v552 = vF11.$b.from("https://i.imgur.com/VPh6J5u.png");
        this.Ph = new vF46(v552, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.Qh = new vF46(v552, 158, 4, 87, 74, 203, 63.5, 128, 128);
        var v553 = vF11.$b.from("https://i.imgur.com/LvJ1RxC.png");
        var v554 = vF11.$b.from("https://i.imgur.com/iqKabEA.png");
        this.emoji = new vF46(v554, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.Rh = new vF46(v553, 156, 4, 87, 74, 285, 63.5, 128, 128);
        this.X_x5 = new vF46(v553, 156, 80, 87, 60, 170, 1.5, 128, 128);
        this.X_x2 = new vF46(v553, 156, 140, 87, 60, 170, 128.5, 128, 128);
        this.X_x10 = new vF46(v553, 158, 200, 95, 55, 265, 128.5, 128, 128);
        this.X_xxlupa = new vF46(v553, 79, 8, 75, 77, 265, 1.5, 128, 128);
        this.Ug = function () {
          var v555 = window.document.createElement("canvas");
          v555.width = 80;
          v555.height = 80;
          return {
            te: v555,
            Tg: v555.getContext("2d"),
            Hc: new vF11._b(vF11.$b.from(v555))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      var vF48 = function (p547) {
        var v556 = vF11.$b.from(p547 || "/images/bg-pattern-pow2-ARENA.png");
        v556.wrapMode = vF11.kc.lc;
        return v556;
      };
      f74.prototype.a = function (p548) {
        function f75() {
          if (--vLN4 == 0) {
            p548();
          }
        }
        var vLN4 = 4;
        this.Bd = {};
        f75();
        this.yd = {};
        f75();
        this.Sh = [];
        f75();
        this.Th = null;
        f75();
      };
      return f74;
    }();
    var vF49 = function () {
      function f76() {
        this.H = new vF64();
        this.F = new vF67();
        this.Uh = new vF85();
        this.Vh = new vF86();
        this.Wh = new vF73();
        this.Xh = new vF74();
        this.Yh = new vF76();
        this.Zh = new vF75();
        this.xa = new vF77();
        this.zwset = new vF82();
        this.$h = new vF78();
        this._h = new vF81();
        this.ai = new vF83();
        this.aa = new vF69();
        this.ua = new vF66();
        this.pa = new vF68();
        this.bi = [];
        this.ci = null;
      }
      function f77(p549, p550) {
        if (p550 != 0) {
          var v557 = p549[p550];
          f26(p549, 0, 1, p550);
          p549[0] = v557;
        }
      }
      function f78(p551, p552) {
        if (p552 != p551.length + 1) {
          var v558 = p551[p552];
          f26(p551, p552 + 1, p552, p551.length - p552 - 1);
          p551[p551.length - 1] = v558;
        }
      }
      function f79(p553, p554) {
        for (var vLN081 = 0; vLN081 < p553.length; vLN081++) {
          if (p553[vLN081] == p554) {
            return vLN081;
          }
        }
        return -1;
      }
      f76.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.zwset, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var vLN082 = 0; vLN082 < this.bi.length; vLN082++) {
          this.bi[vLN082].a();
        }
        this.ci = new vF18(vF63.di);
      };
      f76.prototype.Qa = function (p555, p556) {
        for (var v559 = this.bi.length - 1; v559 >= 0; v559--) {
          this.bi[v559].Pa(p555, p556);
        }
        if (this.bi[0] != this.H && this.bi[0] != this.pa && this.ci != null) {
          this.ci.Pa(p555, p556);
        }
      };
      f76.prototype.Ra = function () {
        for (var v560 = this.bi.length - 1; v560 >= 0; v560--) {
          this.bi[v560].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      f76.prototype.I = function (p557) {
        var vF79 = f79(this.bi, p557);
        if (!(vF79 < 0)) {
          this.bi[0].ei();
          f77(this.bi, vF79);
          this.fi();
        }
      };
      f76.prototype.gi = function () {
        this.bi[0].ei();
        do {
          f78(this.bi, 0);
        } while (this.bi[0].rc != 1);
        this.fi();
      };
      f76.prototype.fi = function () {
        var v561 = this.bi[0];
        v561.ii();
        v561.ji();
        this.ki();
      };
      f76.prototype.li = function () {
        return this.bi.length != 0 && this.bi[0].rc == 1 && this.aa.mi();
      };
      f76.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return f76;
    }();
    var vF50 = function () {
      function f80() {
        this.ag = [];
        this.$f = [];
      }
      f80.Vg = function (p558, p559) {
        return {
          bg: p558,
          M: p559
        };
      };
      f80.Wg = function (p560, p561) {
        return {
          _f: p560,
          M: p561
        };
      };
      return f80;
    }();
    var vF51 = function () {
      function f81() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = vLSGuest;
        this.si = {};
        this.ti = null;
      }
      var vLSGuest = "guest";
      f81.prototype.a = function () {
        this.vi();
      };
      f81.prototype.X = function () {
        if (this.qi) {
          return this.si.userId;
        } else {
          return "";
        }
      };
      f81.prototype.wi = function () {
        if (this.qi) {
          return this.si.username;
        } else {
          return "";
        }
      };
      f81.prototype.ga = function () {
        if (this.qi) {
          return this.si.nickname;
        } else {
          return "";
        }
      };
      f81.prototype.xi = function () {
        if (this.qi) {
          return this.si.avatarUrl;
        } else {
          return vLSimagesguestavatarxma;
        }
      };
      f81.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      f81.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      f81.prototype.zi = function () {
        if (this.qi) {
          return this.si.coins;
        } else {
          return 0;
        }
      };
      f81.prototype.Ai = function () {
        if (this.qi) {
          return this.si.level;
        } else {
          return 1;
        }
      };
      f81.prototype.Bi = function () {
        if (this.qi) {
          return this.si.expOnLevel;
        } else {
          return 0;
        }
      };
      f81.prototype.Ci = function () {
        if (this.qi) {
          return this.si.expToNext;
        } else {
          return 50;
        }
      };
      f81.prototype.Di = function () {
        if (this.qi) {
          return this.si.skinId;
        } else {
          return 0;
        }
      };
      f81.prototype.Ei = function () {
        if (this.qi) {
          return this.si.eyesId;
        } else {
          return 0;
        }
      };
      f81.prototype.Fi = function () {
        if (this.qi) {
          return this.si.mouthId;
        } else {
          return 0;
        }
      };
      f81.prototype.Gi = function () {
        if (this.qi) {
          return this.si.glassesId;
        } else {
          return 0;
        }
      };
      f81.prototype.Hi = function () {
        if (this.qi) {
          return this.si.hatId;
        } else {
          return 0;
        }
      };
      f81.prototype.Ii = function () {
        if (this.qi) {
          return this.si.highScore;
        } else {
          return 0;
        }
      };
      f81.prototype.Ji = function () {
        if (this.qi) {
          return this.si.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      f81.prototype.Ki = function () {
        if (this.qi) {
          return this.si.kills;
        } else {
          return 0;
        }
      };
      f81.prototype.Li = function () {
        if (this.qi) {
          return this.si.headShots;
        } else {
          return 0;
        }
      };
      f81.prototype.Mi = function () {
        if (this.qi) {
          return this.si.sessionsPlayed;
        } else {
          return 0;
        }
      };
      f81.prototype.Ni = function () {
        if (this.qi) {
          return this.si.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      f81.prototype.Oi = function () {
        if (this.qi) {
          return this.si.regDate;
        } else {
          return {};
        }
      };
      f81.prototype.V = function (p562) {
        this.ni.push(p562);
        p562();
      };
      f81.prototype.Pi = function (p563) {
        this.oi.push(p563);
        p563();
      };
      f81.prototype.Qi = function (p564) {
        this.pi.push(p564);
      };
      f81.prototype.Ch = function (p565, p566) {
        var v562 = this.si.propertyList.concat(theoKzObjects.pL || []);
        if (!v562) {
          return false;
        }
        for (var vLN083 = 0; vLN083 < v562.length; vLN083++) {
          var v563 = v562[vLN083];
          if (v563.id == p565 && v563.type === p566) {
            return true;
          }
        }
        return false;
      };
      f81.prototype.P = function () {
        return this.qi;
      };
      f81.prototype.ea = function () {
        return this.ri;
      };
      f81.prototype.Q = function (p567) {
        var vThis8 = this;
        if (this.qi) {
          this.Ri(function (p568) {
            if (p568) {
              var v564 = vThis8.zi();
              var v565 = vThis8.Ai();
              vThis8.si = p568;
              vF91(vThis8.si);
              vThis8.Si();
              var v566 = vThis8.zi();
              var v567 = vThis8.Ai();
              if (v567 > 1 && v567 != v565) {
                f11().s.aa.Ti(new vF89(v567));
              }
              var v568 = v566 - v564;
              if (v568 >= 20) {
                f11().s.aa.Ti(new vF88(v568));
              }
            }
            if (p567) {
              p567();
            }
          });
        }
      };
      f81.prototype.Ri = function (p569) {
        $.get(vAtob + "/pub/wuid/" + this.ri + "/getUserData", function (p570) {
          p569(p570.user_data);
        });
      };
      f81.prototype.Ui = function (p571, p572, p573) {
        var vThis9 = this;
        $.get(vAtob + "/pub/wuid/" + this.ri + "/buyProperty?id=" + p571 + "&type=" + p572, function (p574) {
          if (p574.code == 1200) {
            vThis9.Q(p573);
          } else {
            p573();
          }
        }).fail(function () {
          p573();
        });
      };
      f81.prototype.Vi = function () {
        var vThis10 = this;
        this.Wi();
        if (typeof FB == "undefined") {
          this.Xi();
          return;
        }
        FB.getLoginStatus(function (p575) {
          if (p575.status === "connected") {
            if (p575.authResponse && p575.authResponse.accessToken) {
              vThis10.Yi("facebook", "fb_" + p575.authResponse.accessToken);
            } else {
              vThis10.Xi();
            }
            return;
          }
          FB.login(function (p576) {
            if (p576.status === "connected" && p576.authResponse && p576.authResponse.accessToken) {
              vThis10.Yi("facebook", "fb_" + p576.authResponse.accessToken);
            } else {
              vThis10.Xi();
            }
          });
        });
      };
      f81.prototype.Zi = function () {
        var vThis11 = this;
        this.Wi();
        if (typeof GoogleAuth === "undefined") {
          this.Xi();
          return;
        }
        console.log("gsi:l");
        GoogleAuth.then(function () {
          console.log("gsi:then");
          if (GoogleAuth.isSignedIn.get()) {
            console.log("gsi:sil");
            var v569 = GoogleAuth.currentUser.get();
            vThis11.Yi("google", "gg_" + v569.getAuthResponse().id_token);
            return;
          }
          GoogleAuth.signIn().then(function (p577) {
            if (typeof p577.error !== "undefined") {
              console.log("gsi:e: " + p577.error);
              vThis11.Xi();
              return;
            }
            if (p577.isSignedIn()) {
              console.log("gsi:s");
              vThis11.Yi("google", "gg_" + p577.getAuthResponse().id_token);
            } else {
              console.log("gsi:c");
              vThis11.Xi();
            }
          });
        });
      };
      f81.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var v570 = this.ri;
        var v571 = this.ti;
        this.qi = false;
        this.ri = vLSGuest;
        this.si = {};
        this.ti = null;
        f13(vF23.Oe, "", 60);
        switch (v571) {
          case "facebook":
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (v570 !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      f81.prototype.bj = function () {
        console.log("dA");
        if (this.qi) {
          $.get(vAtob + "/pub/wuid/" + this.ri + "/deleteAccount", function (p578) {
            if (p578.code === 1200) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      f81.prototype.vi = function () {
        console.log("rs");
        var vF122 = f12(vF23.Oe);
        var vThis12 = this;
        if (vF122 == "facebook") {
          console.log("rs:fb");
          (function f82() {
            if (typeof FB != "undefined") {
              vThis12.Vi();
            } else {
              setTimeout(f82, 100);
            }
          })();
        } else if (vF122 == "google") {
          console.log("rs:gg");
          (function f83() {
            if (GoogleAuth !== undefined) {
              vThis12.Zi();
            } else {
              setTimeout(f83, 100);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      f81.prototype.aj = function () {
        var vLN084 = 0;
        for (; vLN084 < this.ni.length; vLN084++) {
          this.ni[vLN084]();
        }
        this.Si();
      };
      f81.prototype.Si = function () {
        var vLN085 = 0;
        for (; vLN085 < this.oi.length; vLN085++) {
          this.oi[vLN085]();
        }
        var v572 = this.pi;
        this.pi = [];
        var vLN086 = 0;
        for (; vLN086 < v572.length; vLN086++) {
          v572[vLN086]();
        }
      };
      f81.prototype.Yi = function (p579, p580) {
        var vThis13 = this;
        $.get(vAtob + "/pub/wuid/" + p580 + "/login", function (p581) {
          if (p581 && p581.user_data) {
            checkSubscriptionExpired(p581.user_data.userId);
            registerUpdatePlayer(p581.user_data);
            vF91(p581.user_data);
            var v573 = this.ri;
            vThis13.qi = true;
            vThis13.ri = p580;
            vThis13.si = p581.user_data;
            vThis13.ti = p579;
            f13(vF23.Oe, vThis13.ti, 60);
            console.log(vThis13);
            showServer2(vUndefined2);
            showVersionPays(p581);
            zw_userId = p581.user_data.userId;
            $("#userid").text(zw_userId);
            $("#avatarUrl").attr("src", p581.user_data.avatarUrl);
            $("#zw-settings-id").text("ID: " + zw_userId);
            theoKzObjects.loading = false;
            if (v573 !== p580) {
              vThis13.aj();
            } else {
              vThis13.Si();
            }
          } else {
            vThis13.Xi();
          }
        }).fail(function () {
          vThis13.Xi();
        });
      };
      f81.prototype.Xi = function () {
        this.Wi();
      };
      f81.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      f81.prototype._i = function () {
        console.log("lo:gg");
        GoogleAuth.signOut();
      };
      return f81;
    }();
    var vF52 = function () {
      function f84() {
        this.cj = {};
        this.cj[v577] = [1, 0.5, 0.25, 0.5];
        this.cj[v578] = vF11._b.WHITE;
        this.cj[v579] = [0, 0];
        this.cj[v580] = [0, 0];
        var v574 = vF11.cc.from(v583, v584, this.cj);
        this.zf = new vF11.hc(v582, v574);
      }
      var v575 = "a1_" + f30();
      var v576 = "a2_" + f30();
      var vAtob3 = "translationMatrix";
      var vAtob4 = "projectionMatrix";
      var v577 = "u3_" + f30();
      var v578 = "u4_" + f30();
      var v579 = "u5_" + f30();
      var v580 = "u6_" + f30();
      var v581 = "v1_" + f30();
      var v582 = new vF11.gc().addAttribute(v575, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v576, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var v583 = "precision mediump float;attribute vec2 " + v575 + ";attribute vec2 " + v576 + ";uniform mat3 " + vAtob3 + ";uniform mat3 " + vAtob4 + ";varying vec2 " + v581 + ";void main(){" + v581 + "=" + v576 + ";gl_Position=vec4((" + vAtob4 + "*" + vAtob3 + "*vec3(" + v575 + ",1.0)).xy,0.0,1.0);}";
      var v584 = "precision highp float;varying vec2 " + v581 + ";uniform vec4 " + v577 + ";uniform sampler2D " + v578 + ";uniform vec2 " + v579 + ";uniform vec2 " + v580 + ";void main(){vec2 coord=" + v581 + "*" + v579 + "+" + v580 + ";vec4 v_color_mix=" + v577 + ";gl_FragColor=texture2D(" + v578 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
      f84.prototype.Hf = function (p582, p583, p584, p585) {
        var v585 = this.cj[v577];
        v585[0] = p582;
        v585[1] = p583;
        v585[2] = p584;
        v585[3] = p585;
      };
      f84.prototype.Bf = function (p586) {
        this.cj[v578] = p586;
      };
      f84.prototype.Te = function (p587, p588, p589, p590) {
        this.zf.position.x = p587;
        this.zf.position.y = p588;
        this.zf.scale.x = p589;
        this.zf.scale.y = p590;
        var v586 = this.cj[v579];
        v586[0] = p589 * 0.2520615384615385;
        v586[1] = p590 * 0.4357063736263738;
        var v587 = this.cj[v580];
        v587[0] = p587 * 0.2520615384615385;
        v587[1] = p588 * 0.4357063736263738;
      };
      return f84;
    }();
    var vF53 = function () {
      function f85() {
        this.jh = new vF11.ec();
        this.dj = 0;
        this.ej = 0;
        this.cachedTexture = null;
        this.cachedScaleX = 0;
        this.cachedScaleY = 0;
      }
      f85.prototype.kh = function (p591) {
        if (this.cachedTexture !== p591.Hc) {
          this.cachedTexture = p591.Hc;
          this.jh.texture = p591.Hc;
          this.jh.anchor.set(p591.Lh, p591.Mh);
          const v588 = p591.Hc.width;
          const v589 = p591.Hc.height;
          const v590 = p591.Nh / v588;
          const v591 = p591.Oh / v589;
          if (this.cachedScaleX !== v590 || this.cachedScaleY !== v591) {
            this.dj = v590;
            this.ej = v591;
            this.jh.scale.set(v590, v591);
            this.cachedScaleX = v590;
            this.cachedScaleY = v591;
          }
        }
      };
      f85.prototype.oh = function (p592) {
        const v592 = this.dj * p592;
        const v593 = this.ej * p592;
        if (this.jh.scale.x !== v592 || this.jh.scale.y !== v593) {
          this.jh.scale.set(v592, v593);
        }
      };
      f85.prototype.fj = function (p593) {
        this.jh.rotation = p593;
      };
      f85.prototype.nh = function (p594, p595) {
        this.jh.position.set(p594, p595);
      };
      f85.prototype.Mg = function (p596) {
        this.jh.visible = p596;
      };
      f85.prototype.gj = function () {
        return this.jh.visible;
      };
      f85.prototype.qh = function (p597) {
        this.jh.alpha = p597;
      };
      f85.prototype.Mf = function () {
        return this.jh;
      };
      f85.prototype.ih = function () {
        f28(this.jh);
      };
      return f85;
    }();
    var vF54 = function () {
      function f86() {
        this.jh = new PIXI.Graphics();
        this.radius = 0.3;
      }
      f86.prototype.kh = function (p598) {
        const {
          color = 16777215,
          radius = 0.3
        } = p598;
        this.jh.clear();
        this.jh.beginFill(color);
        this.jh.drawCircle(0, 0, radius);
        this.jh.endFill();
        this.radius = radius;
        this.jh.scale.set(1, 1);
      };
      f86.prototype.oh = function (p599) {
        this.jh.scale.set(p599, p599);
      };
      f86.prototype.fj = function (p600) {
        this.jh.rotation = p600;
      };
      f86.prototype.nh = function (p601, p602) {
        this.jh.position.set(p601, p602);
      };
      f86.prototype.Mg = function (p603) {
        this.jh.visible = p603;
      };
      f86.prototype.gj = function () {
        return this.jh.visible;
      };
      f86.prototype.qh = function (p604) {
        this.jh.alpha = p604;
      };
      f86.prototype.Mf = function () {
        return this.jh;
      };
      f86.prototype.ih = function () {
        f28(this.jh);
      };
      return f86;
    }();
    var vF55 = function () {
      function f87(p605) {
        this.fb = p605;
        this.Mb = new vF55.Config();
        this.Hb = false;
        this.Ib = true;
        this.hj = false;
        this.Db = 0;
        this.ij = 0;
        this.Jb = 1;
        this.jj = 0;
        this.M = 0;
        this.Ff = {};
        this.kj = 0;
        this.lj = new Float32Array(vLN2002 * 2);
        this.mj = new Float32Array(vLN2002 * 2);
        this.nj = new Float32Array(vLN2002 * 2);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.b = null;
        this.zw_msg = null;
        this.Tb();
      }
      var vLN2002 = 200;
      f87.prototype.Kb = function () {
        if (this.pj != null) {
          f28(this.pj.Rf);
        }
        if (this.qj != null) {
          f28(this.qj);
        }
        if (this.b != null) {
          f28(this.b);
        }
        if (this.zw_msg != null) {
          f28(this.zw_msg);
        }
      };
      f87.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = "";
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      f87.prototype.Fg = function (p606) {
        this.Mb = p606;
        this.rj(this.Hb);
      };
      f87.prototype.Mg = function (p607) {
        var v594 = this.Hb;
        this.Hb = p607;
        this.rj(v594);
      };
      f87.prototype.Ig = function (p608) {
        this.M = p608 * 50;
        var vP608 = p608;
        if (p608 > this.fb.cf) {
          vP608 = Math.atan((p608 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var v595 = Math.sqrt(Math.pow(vP608 * 5, 0.707106781186548) * 4 + 25);
        var v596 = Math.min(vLN2002, Math.max(3, (v595 - 5) * 5 + 1));
        var v597 = this.kj;
        this.Db = (5 + v595 * 0.9) * 0.025;
        this.kj = Math.floor(v596);
        this.ij = v596 - this.kj;
        if (v597 > 0 && v597 < this.kj) {
          var v598 = this.lj[v597 * 2 - 2];
          var v599 = this.lj[v597 * 2 - 1];
          var v600 = this.mj[v597 * 2 - 2];
          var v601 = this.mj[v597 * 2 - 1];
          var v602 = this.nj[v597 * 2 - 2];
          var v603 = this.nj[v597 * 2 - 1];
          for (var vV597 = v597; vV597 < this.kj; vV597++) {
            this.lj[vV597 * 2] = v598;
            this.lj[vV597 * 2 + 1] = v599;
            this.mj[vV597 * 2] = v600;
            this.mj[vV597 * 2 + 1] = v601;
            this.nj[vV597 * 2] = v602;
            this.nj[vV597 * 2 + 1] = v603;
          }
        }
      };
      f87.prototype.Lg = function (p609, p610) {
        this.kj = p610;
        for (var vLN087 = 0; vLN087 < this.kj; vLN087++) {
          this.lj[vLN087 * 2] = this.mj[vLN087 * 2] = this.nj[vLN087 * 2] = p609();
          this.lj[vLN087 * 2 + 1] = this.mj[vLN087 * 2 + 1] = this.nj[vLN087 * 2 + 1] = p609();
        }
      };
      f87.prototype.Kg = function (p611, p612, p613) {
        this.hj = p613;
        for (var vLN088 = 0; vLN088 < this.kj; vLN088++) {
          this.lj[vLN088 * 2] = this.mj[vLN088 * 2];
          this.lj[vLN088 * 2 + 1] = this.mj[vLN088 * 2 + 1];
        }
        var v604 = p611 - this.mj[0];
        var v605 = p612 - this.mj[1];
        this.sj(v604, v605, this.kj, this.mj);
      };
      f87.prototype.sj = function (p614, p615, p616, p617) {
        var v606 = Math.hypot(p614, p615);
        if (!(v606 <= 0)) {
          var v607 = p617[0];
          var vUndefined10 = undefined;
          p617[0] += p614;
          var v608 = p617[1];
          var vUndefined11 = undefined;
          p617[1] += p615;
          var v609 = this.Db / (this.Db + v606);
          var v610 = 1 - v609 * 2;
          for (var vLN14 = 1, v611 = p616 - 1; vLN14 < v611; vLN14++) {
            vUndefined10 = p617[vLN14 * 2];
            p617[vLN14 * 2] = p617[vLN14 * 2 - 2] * v610 + (vUndefined10 + v607) * v609;
            v607 = vUndefined10;
            vUndefined11 = p617[vLN14 * 2 + 1];
            p617[vLN14 * 2 + 1] = p617[vLN14 * 2 - 1] * v610 + (vUndefined11 + v608) * v609;
            v608 = vUndefined11;
          }
          v609 = this.ij * this.Db / (this.ij * this.Db + v606);
          v610 = 1 - v609 * 2;
          p617[p616 * 2 - 2] = p617[p616 * 2 - 4] * v610 + (p617[p616 * 2 - 2] + v607) * v609;
          p617[p616 * 2 - 1] = p617[p616 * 2 - 3] * v610 + (p617[p616 * 2 - 1] + v608) * v609;
        }
      };
      f87.prototype.Gf = function () {
        return {
          x: this.nj[0],
          y: this.nj[1]
        };
      };
      f87.prototype.Hg = function (p618, p619) {
        var vLN1000000 = 1000000;
        var vP618 = p618;
        var vP619 = p619;
        for (var vLN089 = 0; vLN089 < this.kj; vLN089++) {
          var v612 = this.nj[vLN089 * 2];
          var v613 = this.nj[vLN089 * 2 + 1];
          var v614 = Math.hypot(p618 - v612, p619 - v613);
          if (v614 < vLN1000000) {
            vLN1000000 = v614;
            vP618 = v612;
            vP619 = v613;
          }
        }
        return {
          x: vP618,
          y: vP619,
          distance: vLN1000000
        };
      };
      f87.prototype.vb = function (p620) {
        this.oj = p620;
      };
      f87.prototype.Fb = function (p621, p622) {
        this.Jb = f23(this.Jb, this.Ib ? this.hj ? 0.9 + Math.cos(p621 / 400 * Math.PI) * 0.1 : 1 : 0, p622, 1 / 800);
        this.jj = f23(this.jj, this.Ib ? this.hj ? 1 : 0 : 1, p622, 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      f87.prototype.Gb = function (p623, p624, p625, p626) {
        if (this.Hb && this.Ib) {
          var v615 = Math.pow(0.11112, p624 / 95);
          var vLN090 = 0;
          for (; vLN090 < this.kj; vLN090++) {
            var vF252 = f25(this.lj[vLN090 * 2], this.mj[vLN090 * 2], p625);
            var vF253 = f25(this.lj[vLN090 * 2 + 1], this.mj[vLN090 * 2 + 1], p625);
            this.nj[vLN090 * 2] = f25(vF252, this.nj[vLN090 * 2], v615);
            this.nj[vLN090 * 2 + 1] = f25(vF253, this.nj[vLN090 * 2 + 1], v615);
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, p623, p624, p626);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0];
          this.qj.If.y = this.nj[1] - this.Db * 3;
        }
        if (this.b != null) {
          var v616;
          this.b.x = this.qj.position.x;
          this.b.y = this.qj.position.y + 1;
          for (v616 in this.b.he) {
            if (this.Ff[v616] == null || !this.Ff[v616].sc) {
              this.b.removeChild(this.b.he[v616]);
              delete this.b.he[v616];
            }
          }
          var v617;
          var vLN091 = 0;
          c = 0;
          for (v617 in this.Ff) {
            if (v617 !== "0" && v617 !== "1") {
              continue;
            }
            if (p624 = this.Ff[v617]) {
              if (p624.sc && theoKzObjects.timerSpZg) {
                var v618 = this.b.he[v617];
                if (!v618) {
                  const v619 = portionTimes[v617];
                  const v620 = timeFontColors2[v617];
                  let v621 = p624.tc;
                  if (v621 === 0.99) {
                    v621 = 1;
                  }
                  let v622 = v619 - parseInt(v621 * v619);
                  v618 = new PIXI.Text(v622, {
                    align: "center",
                    fill: v620,
                    fontSize: 20,
                    lineJoin: "round",
                    whiteSpace: "normal",
                    wordWrap: true,
                    dropShadow: true,
                    dropShadowBlur: 6,
                    fontWeight: "bold"
                  });
                  this.b.he[v617] = v618;
                  this.b.addChild(v618);
                }
                const v623 = portionTimes[v617];
                let v624 = p624.tc;
                if (v624 === 0.99) {
                  v624 = 1;
                }
                let v625 = v623 - parseInt(v624 * v623);
                v618.text = v625;
                v618.x = vLN091;
                v618.y = 0;
                vLN091 += v618.width + 10;
              }
            }
          }
          this.b.pivot.x = this.b.width * 0.5;
          this.b.pivot.y = this.b.height;
        }
      };
      f87.prototype.rj = function (p627) {
        if (this.Hb) {
          if (!p627) {
            this.uj();
          }
        } else {
          if (this.pj != null) {
            f28(this.pj.Rf);
          }
          if (this.qj != null) {
            f28(this.qj);
          }
          if (this.b != null) {
            f28(this.b);
          }
          if (this.zw_msg != null) {
            f28(this.zw_msg);
          }
        }
      };
      f87.prototype.uj = function () {
        var vF116 = f11();
        if (this.pj == null) {
          this.pj = new vF59();
        } else {
          f28(this.pj.Rf);
        }
        this.pj.hh(vF116.o.fb.af, vF116.p.Dc().ed(this.Mb.cg), vF116.p.Dc().dd(this.Mb.dg), vF116.p.Dc().fd(this.Mb.Bg), vF116.p.Dc().gd(this.Mb.Cg), vF116.p.Dc().hd(this.Mb.Dg), vF116.p.Dc().jd(this.Mb.Eg));
        if (this.qj == null) {
          this.qj = new vF56("");
          this.qj.style.fontFamily = fonts[currentFontIndex];
          this.qj.anchor.set(0.5);
        } else {
          f28(this.qj);
        }
        if (this.b == null) {
          this.b = new vF11.Zb();
          this.b.he = {};
        } else {
          f28(this.b);
        }
        if (this.zw_msg == null) {
          this.zw_msg = new vF11.Zb();
        } else {
          f28(this.zw_msg);
        }
        this.qj.style.fontSize = 14;
        this.qj.style.fill = vF116.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj, this.b, this.zw_msg);
      };
      f87.Config = function () {
        function f88() {
          this.Lb = 0;
          this.cg = vF28.TEAM_DEFAULT;
          this.dg = 0;
          this.Bg = 0;
          this.Cg = 0;
          this.Dg = 0;
          this.Eg = 0;
          this.ad = "";
        }
        return f88;
      }();
      return f87;
    }();
    var vF56 = function () {
      return f19(vF11.fc, function (p628, p629, p630) {
        vF11.fc.call(this, p628, p629, p630);
        this.If = {
          x: 0,
          y: 0
        };
      });
    }();
    var vF59 = function () {
      function f89() {
        this.Rf = new vF11.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new vF60();
        this.vj.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
        this.wj = 0;
        this.xj = new Array(vLN797);
        this.xj[0] = this.yj(0, new vF53(), new vF53());
        for (let vLN092 = 0; vLN092 < vLN797; vLN092++) {
          this.xj[vLN092] = this.yj(vLN092, new vF53(), new vF53());
        }
        this.zj = 0;
        this.Aj = 0;
        this.Bj = 0;
      }
      var vLN0001 = 0.001;
      var vLN797 = 797;
      var v626 = Math.PI * 0.1;
      var v627 = -0.06640625;
      var vLN084375 = 0.84375;
      var vLN02578125 = 0.2578125;
      var v628 = -0.03515625;
      var v629 = -0.0625;
      var vLN05625 = 0.5625;
      var v630 = v627 * 3 + vLN084375;
      var v631 = vLN02578125 - v627 * 3;
      var v632 = v627 + v628;
      var vLN0375 = 0.375;
      var vLN0752 = 0.75;
      var v633 = v629 + v629;
      var v634 = v628 * 3 + vLN02578125;
      var v635 = vLN084375 - v628 * 3;
      var v636 = v628 + v627;
      f89.prototype.yj = function (p631, p632, p633) {
        var v637 = new vF61(p632, p633);
        const v638 = vLN0001 * ((vLN797 - p631) * 2 + 1 + 3);
        const v639 = vLN0001 * ((vLN797 - p631) * 2 - 2 + 3);
        p632.jh.zIndex = v638;
        p633.jh.zIndex = v639;
        return v637;
      };
      f89.prototype.hh = function (p634, p635, p636, p637, p638, p639, p640) {
        var v640 = p636.Zc;
        var v641 = p634 == vO17._e ? p635.bd.$c : p636.$c;
        if (v640.length && v641.length) {
          this.xj.forEach((p641, p642) => {
            p641.Nf.kh(v640[p642 % v640.length]);
            p641.Pf.kh(v641[p642 % v641.length]);
          });
        }
        this.vj.hh(p637, p638, p639, p640);
      };
      var vF60 = function () {
        var vF196 = f19(vF11.Zb, function () {
          vF11.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new vF11.Zb();
          this.Hj = [];
          for (var vLN093 = 0; vLN093 < 4; vLN093++) {
            var v642 = new vF53();
            v642.kh(f11().q.Ph);
            this.Gj.addChild(v642.jh);
            this.Hj.push(v642);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new vF53();
          this.Jj.kh(f11().q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.flx = new vF53();
          this.flx.kh(f11().q.Rh);
          this.flx.jh.zIndex = 0.001;
          this.addChild(this.flx.jh);
          this.flexx();
          this.xxx5 = new vF53();
          this.xxx5.kh(f11().q.X_x5);
          this.xxx5.jh.zIndex = 0.001;
          this.addChild(this.xxx5.jh);
          this.xXx5();
          this.xxx2 = new vF53();
          this.xxx2.kh(f11().q.X_x2);
          this.xxx2.jh.zIndex = 0.001;
          this.addChild(this.xxx2.jh);
          this.xXx2();
          this.xxx10 = new vF53();
          this.xxx10.kh(f11().q.X_x10);
          this.xxx10.jh.zIndex = 0.001;
          this.addChild(this.xxx10.jh);
          this.xXx10();
          this.xxxLupatype = new vF53();
          this.xxxLupatype.kh(f11().q.X_xxlupa);
          this.xxxLupatype.jh.zIndex = 0.001;
          this.addChild(this.xxxLupatype.jh);
          this.xXxLupaZ();
          this.xxxEmojiType = new vF53();
          this.xxxEmojiType.kh(f11().q.emoji);
          this.xxxEmojiType.jh.zIndex = 0.001;
          this.addChild(this.xxxEmojiType.jh);
          this.x_emoji();
        });
        vF196.prototype.hh = function (p643, p644, p645, p646) {
          this.Lj(0.002, this.Cj, p643.Zc);
          this.Lj(0.003, this.Dj, p644.Zc);
          this.Lj(0.004, this.Fj, p646.Zc);
          this.Lj(0.005, this.Ej, p645.Zc);
        };
        vF196.prototype.Lj = function (p647, p648, p649) {
          const v643 = p649.length;
          const v644 = p648.length;
          for (let vV644 = v644; vV644 < v643; vV644++) {
            const v645 = new vF53();
            p648.push(v645);
            this.addChild(v645.Mf());
          }
          for (let vV6442 = v644; vV6442 > v643; vV6442--) {
            p648.pop().ih();
          }
          let vP647 = p647;
          for (let vLN094 = 0; vLN094 < v643; vLN094++) {
            vP647 += 0.0001;
            const v646 = p648[vLN094];
            v646.kh(p649[vLN094]);
            v646.jh.zIndex = vP647;
          }
        };
        vF196.prototype.mh = function (p650, p651, p652, p653) {
          this.visible = true;
          this.position.set(p650, p651);
          this.rotation = p653;
          [this.Cj, this.Dj, this.Ej, this.Fj].forEach((p654, p655) => {
            const v647 = ["Cj (ojos)", "Dj (boca)", "Ej (gorra?)", "Fj (otros)"][p655];
            p654.forEach(p656 => p656.oh(p652));
          });
        };
        vF196.prototype.lh = function () {
          this.visible = false;
        };
        vF196.prototype.Mj = function (p657, p658, p659, p660) {
          this.Gj.visible = true;
          var v648 = p659 / 1000;
          var v649 = 1 / this.Hj.length;
          for (var vLN095 = 0; vLN095 < this.Hj.length; vLN095++) {
            var v650 = 1 - (v648 + v649 * vLN095) % 1;
            this.Hj[vLN095].jh.alpha = 1 - v650;
            this.Hj[vLN095].oh(p658 * (0.5 + v650 * 4.5));
          }
        };
        vF196.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        vF196.prototype.Nj = function (p661, p662, p663, p664) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = f23(this.Jj.jh.alpha, p661.hj ? 0.9 : 0.2, p664, 0.0025);
          this.Jj.oh(p662);
        };
        vF196.prototype.Nflex = function (p665, p666, p667, p668) {
          this.flx.jh.visible = true;
          this.flx.oh(p666);
        };
        vF196.prototype.flexx = function () {
          this.flx.jh.visible = false;
        };
        vF196.prototype.ActiveX5 = function (p669, p670, p671, p672) {
          this.xxx5.jh.visible = true;
          this.xxx5.jh.alpha = f23(this.Jj.jh.alpha, p669.hj ? 0.9 : 0.2, p672, 0.0025);
          this.xxx5.oh(p670);
        };
        vF196.prototype.xXx5 = function () {
          this.xxx5.jh.visible = false;
        };
        vF196.prototype.ActiveEmoji = function (p673, p674, p675, p676) {
          this.xxxEmojiType.jh.visible = true;
          this.xxxEmojiType.oh(p674);
        };
        vF196.prototype.x_emoji = function () {
          this.xxxEmojiType.jh.visible = false;
        };
        vF196.prototype.ActiveX2 = function (p677, p678, p679, p680) {
          this.xxx2.jh.visible = true;
          this.xxx2.jh.alpha = f23(this.Jj.jh.alpha, p677.hj ? 0.9 : 0.2, p680, 0.0025);
          this.xxx2.oh(p678);
        };
        vF196.prototype.xXx2 = function () {
          this.xxx2.jh.visible = false;
        };
        vF196.prototype.ActiveX10 = function (p681, p682, p683, p684) {
          this.xxx10.jh.visible = true;
          this.xxx10.jh.alpha = f23(this.Jj.jh.alpha, p681.hj ? 0.9 : 0.2, p684, 0.0025);
          this.xxx10.oh(p682);
        };
        vF196.prototype.xXx10 = function () {
          this.xxx10.jh.visible = false;
        };
        vF196.prototype.ActiveZlupa = function (p685, p686, p687, p688) {
          this.xxxLupatype.jh.visible = true;
          this.xxxLupatype.jh.alpha = f23(this.Jj.jh.alpha, p685.hj ? 0.9 : 0.2, p688, 0.0025);
          this.xxxLupatype.oh(p686);
        };
        vF196.prototype.xXxLupaZ = function () {
          this.xxxLupatype.jh.visible = false;
        };
        vF196.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        return vF196;
      }();
      f89.prototype.Oj = function (p689) {
        return this.Aj + this.Bj * Math.sin(p689 * v626 - this.zj);
      };
      f89.prototype.tj = function (p690, p691, p692, p693) {
        const v651 = p690.Db * 2;
        const v652 = p690.nj;
        const v653 = p690.kj;
        const v654 = v653 * 4 - 3;
        this.zj = p691 / 400 * Math.PI;
        this.Aj = v651 * 1.5;
        this.Bj = v651 * 0.1 * p690.jj;
        let v655 = v652[0];
        let v656 = v652[1];
        let v657;
        let v658;
        let v659;
        let v660;
        if (p693(v655, v656)) {
          v657 = v652[2];
          v658 = v652[3];
          v659 = v652[4];
          v660 = v652[5];
          const v661 = Math.atan2(v660 + v656 * 2 - v658 * 3, v659 + v655 * 2 - v657 * 3);
          const v662 = vF61.angleBetween;
          this.vj.mh(v655, v656, v651, v661);
          this.xj[0].mh(v655, v656, v651, this.Oj(0), v661);
          this.xj[1].mh(v630 * v655 + v631 * v657 + v632 * v659, v630 * v656 + v631 * v658 + v632 * v660, v651, this.Oj(1), v662(this.xj[0], this.xj[2]));
          this.xj[2].mh(vLN0375 * v655 + vLN0752 * v657 + v633 * v659, vLN0375 * v656 + vLN0752 * v658 + v633 * v660, v651, this.Oj(2), v662(this.xj[1], this.xj[3]));
          this.xj[3].mh(v634 * v655 + v635 * v657 + v636 * v659, v634 * v656 + v635 * v658 + v636 * v660, v651, this.Oj(3), v662(this.xj[2], this.xj[4]));
        } else {
          for (let vLN096 = 0; vLN096 < 4; vLN096++) {
            this.xj[vLN096].lh();
          }
          this.vj.lh();
        }
        let vLN42 = 4;
        const v663 = v653 * 2 - 4;
        for (let vLN2 = 2; vLN2 < v663; vLN2 += 2) {
          v655 = v652[vLN2];
          v656 = v652[vLN2 + 1];
          const vP693 = p693(v655, v656);
          if (vP693) {
            const v664 = v652[vLN2 - 2];
            const v665 = v652[vLN2 - 1];
            v657 = v652[vLN2 + 2];
            v658 = v652[vLN2 + 3];
            v659 = v652[vLN2 + 4];
            v660 = v652[vLN2 + 5];
            this.xj[vLN42].mh(v655, v656, v651, this.Oj(vLN42), vF61.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v627 * v664 + vLN084375 * v655 + vLN02578125 * v657 + v628 * v659, v627 * v665 + vLN084375 * v656 + vLN02578125 * v658 + v628 * v660, v651, this.Oj(vLN42), vF61.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v629 * v664 + vLN05625 * v655 + vLN05625 * v657 + v629 * v659, v629 * v665 + vLN05625 * v656 + vLN05625 * v658 + v629 * v660, v651, this.Oj(vLN42), vF61.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v628 * v664 + vLN02578125 * v655 + vLN084375 * v657 + v627 * v659, v628 * v665 + vLN02578125 * v656 + vLN084375 * v658 + v627 * v660, v651, this.Oj(vLN42), vF61.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
          } else {
            for (let vLN097 = 0; vLN097 < 4; vLN097++) {
              this.xj[vLN42++].lh();
            }
          }
        }
        const v666 = v653 * 2 - 4;
        v655 = v652[v666];
        v656 = v652[v666 + 1];
        if (p693(v655, v656)) {
          const v667 = v652[v666 - 2];
          const v668 = v652[v666 - 1];
          v657 = v652[v666 + 2];
          v658 = v652[v666 + 3];
          const v669 = this.Oj.bind(this);
          const v670 = vF61.angleBetween;
          this.xj[v654 - 5].mh(v655, v656, v651, v669(v654 - 5), v670(this.xj[v654 - 6], this.xj[v654 - 4]));
          this.xj[v654 - 4].mh(v636 * v667 + v635 * v655 + v634 * v657, v636 * v668 + v635 * v656 + v634 * v658, v651, v669(v654 - 4), v670(this.xj[v654 - 5], this.xj[v654 - 3]));
          this.xj[v654 - 3].mh(v633 * v667 + vLN0752 * v655 + vLN0375 * v657, v633 * v668 + vLN0752 * v656 + vLN0375 * v658, v651, v669(v654 - 3), v670(this.xj[v654 - 4], this.xj[v654 - 2]));
          this.xj[v654 - 2].mh(v632 * v667 + v631 * v655 + v630 * v657, v632 * v668 + v631 * v656 + v630 * v658, v651, v669(v654 - 2), v670(this.xj[v654 - 3], this.xj[v654 - 1]));
          this.xj[v654 - 1].mh(v657, v658, v651, v669(v654 - 1), v670(this.xj[v654 - 2], this.xj[v654 - 1]));
        } else {
          for (let v671 = v654 - 5; v671 <= v654 - 1; v671++) {
            this.xj[v671].lh();
          }
        }
        if (this.wj === 0 && v654 > 0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0 && v654 === 0) {
          f28(this.vj);
        }
        while (this.wj < v654) {
          const v672 = this.xj[this.wj];
          this.Rf.addChild(v672.Nf.Mf());
          this.Rf.addChild(v672.Pf.Mf());
          this.wj++;
        }
        while (this.wj > v654) {
          this.wj--;
          const v673 = this.xj[this.wj];
          v673.Pf.ih();
          v673.Nf.ih();
        }
        const v674 = theoKzObjects.emoji && p690?.Mb?.Mb;
        if (v674) {
          this.vj.ActiveEmoji(p690, v651, p691, p692);
        } else {
          this.vj.x_emoji();
        }
        const v675 = this.xj[0].gj();
        if (!v675) {
          this.vj.Ij();
          this.vj.Kj();
          this.vj.flexx();
          this.vj.xXx2();
          this.vj.xXx5();
          this.vj.xXx10();
          this.vj.xXxLupaZ();
          return;
        }
        const v676 = p690.Ff;
        const v677 = v676[vF12.MAGNETIC_TYPE];
        const v678 = v676[vF12.VELOCITY_TYPE];
        const v679 = v676[vF12.FLEXIBLE_TYPE];
        const v680 = v676[vF12.X2_TYPE];
        const v681 = v676[vF12.X5_TYPE];
        const v682 = v676[vF12.X10_TYPE];
        const v683 = v676[vF12.ZOOM_TYPE];
        if (v677?.sc) {
          this.vj.Mj(p690, v651, p691, p692);
        } else {
          this.vj.Ij();
        }
        if (v678?.sc) {
          this.vj.Nj(p690, v651, p691, p692);
        } else {
          this.vj.Kj();
        }
        if (theoKzObjects.speed_zigzag && v679?.sc) {
          this.vj.Nflex(p690, v651, p691, p692);
        } else {
          this.vj.flexx();
        }
        if (theoKzObjects.visiblePowersAll) {
          if (v680?.sc) {
            this.vj.ActiveX2(p690, v651, p691, p692);
          } else {
            this.vj.xXx2();
          }
          if (v681?.sc) {
            this.vj.ActiveX5(p690, v651, p691, p692);
          } else {
            this.vj.xXx5();
          }
          if (v682?.sc) {
            this.vj.ActiveX10(p690, v651, p691, p692);
          } else {
            this.vj.xXx10();
          }
          if (v683?.sc) {
            this.vj.ActiveZlupa(p690, v651, p691, p692);
          } else {
            this.vj.xXxLupaZ();
          }
        } else {
          this.vj.xXx2();
          this.vj.xXx5();
          this.vj.xXx10();
          this.vj.xXxLupaZ();
        }
      };
      var vF61 = function () {
        function f90(p694, p695) {
          this.Nf = p694;
          this.Nf.Mg(false);
          this.Pf = p695;
          this.Pf.Mg(false);
        }
        f90.prototype.mh = function (p696, p697, p698, p699, p700) {
          this.Nf.Mg(theoKzObjects.noSkin);
          this.Nf.nh(p696, p697);
          this.Nf.oh(p698);
          this.Nf.fj(p700);
          this.Pf.Mg(theoKzObjects.noAuras);
          this.Pf.nh(p696, p697);
          this.Pf.oh(p699);
          this.Pf.fj(p700);
        };
        f90.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        f90.prototype.gj = function () {
          return this.Nf.gj();
        };
        f90.angleBetween = function (p701, p702) {
          return Math.atan2(p701.Nf.jh.position.y - p702.Nf.jh.position.y, p701.Nf.jh.position.x - p702.Nf.jh.position.x);
        };
        return f90;
      }();
      return f89;
    }();
    var vF62 = function () {
      function f91(p703) {
        this.se = p703;
        this.te = p703.get()[0];
        this.ue = new vF11.ac({
          view: this.te,
          transparent: true
        });
        this.sc = false;
        this.Pj = new vF59();
        this.Pj.Rf.addChild(this.Pj.vj);
        this.Qj = 0;
        this.Rj = 0;
        this.Ng = 1;
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.Sj = false;
        this.Tj = false;
        this.Uj = false;
        this.Vj = false;
        this.Wj = false;
        this.Xj = false;
        this.Yj = false;
        this.Zj = false;
        this.$j = false;
        this._j = false;
        this.Ra();
        this.Fb();
        var vThis14 = this;
        f11().p.ca(function () {
          if (f11().p.W()) {
            vThis14.Fb();
          }
        });
      }
      f91.prototype.Fb = function () {
        var vF117 = f11();
        this.Pj.hh(vO17.$e, null, vF117.p.Dc().dd(this.rh), vF117.p.Dc().fd(this.sh), vF117.p.Dc().gd(this.th), vF117.p.Dc().hd(this.uh), vF117.p.Dc().jd(this.vh));
      };
      f91.prototype.Le = function (p704) {
        this.sc = p704;
      };
      f91.prototype.ak = function (p705, p706, p707) {
        this.rh = p705;
        this.Sj = p706;
        this.Xj = p707;
        this.Fb();
      };
      f91.prototype.bk = function (p708, p709, p710) {
        this.sh = p708;
        this.Tj = p709;
        this.Yj = p710;
        this.Fb();
      };
      f91.prototype.ck = function (p711, p712, p713) {
        this.th = p711;
        this.Uj = p712;
        this.Zj = p713;
        this.Fb();
      };
      f91.prototype.dk = function (p714, p715, p716) {
        this.uh = p714;
        this.Vj = p715;
        this.$j = p716;
        this.Fb();
      };
      f91.prototype.ek = function (p717, p718, p719) {
        this.vh = p717;
        this.Wj = p718;
        this._j = p719;
        this.Fb();
      };
      f91.prototype.Ra = function () {
        var v684 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = v684;
        this.te.width = v684 * this.Qj;
        this.te.height = v684 * this.Rj;
        this.Ng = this.Rj / 4;
        var vF212 = f21(1, this.Pj.xj.length, Math.floor(this.Qj / this.Ng) * 2 - 5);
        if (this.Pj.wj != vF212) {
          for (var vVF212 = vF212; vVF212 < this.Pj.xj.length; vVF212++) {
            this.Pj.xj[vVF212].lh();
          }
          while (this.Pj.wj < vF212) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 1;
          }
          while (this.Pj.wj > vF212) {
            this.Pj.wj -= 1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      f91.prototype.Pa = function () {
        if (this.sc) {
          if (f11().p.W) {
            var v685 = Date.now();
            var v686 = v685 / 200;
            var v687 = Math.sin(v686);
            var v688 = this.Ng;
            var v689 = this.Ng * 1.5;
            var v690 = this.Qj - (this.Qj - v688 * 0.5 * (this.Pj.wj - 1)) * 0.5;
            var v691 = this.Rj * 0.5;
            var vLN098 = 0;
            var vLN099 = 0;
            for (var v692 = -1; v692 < this.Pj.wj; v692++) {
              var vV692 = v692;
              var v693 = Math.cos(vV692 * 1 / 12 * Math.PI - v686) * (1 - Math.pow(16, vV692 * -1 / 12));
              if (v692 >= 0) {
                var v694 = v690 + v688 * -0.5 * vV692;
                var v695 = v691 + v688 * 0.5 * v693;
                var v696 = v688 * 2;
                var v697 = v689 * 2;
                var v698 = Math.atan2(vLN099 - v693, vV692 - vLN098);
                if (v692 == 0) {
                  this.Pj.vj.mh(v694, v695, v696, v698);
                }
                this.Pj.xj[v692].mh(v694, v695, v696, v697, v698);
                var v699 = this.Sj ? this.Xj ? 0.4 + v687 * 0.2 : 0.9 + v687 * 0.1 : this.Xj ? 0.4 : 1;
                this.Pj.xj[v692].Nf.qh(v699);
                this.Pj.xj[v692].Pf.qh(v699);
              }
              vLN098 = vV692;
              vLN099 = v693;
            }
            for (var vLN0100 = 0; vLN0100 < this.Pj.vj.Cj.length; vLN0100++) {
              var v700 = this.Tj ? this.Yj ? 0.4 + v687 * 0.2 : 0.9 + v687 * 0.1 : this.Yj ? 0.4 : 1;
              this.Pj.vj.Cj[vLN0100].qh(v700);
            }
            for (var vLN0101 = 0; vLN0101 < this.Pj.vj.Dj.length; vLN0101++) {
              var v701 = this.Uj ? this.Zj ? 0.4 + v687 * 0.2 : 0.9 + v687 * 0.1 : this.Zj ? 0.4 : 1;
              this.Pj.vj.Dj[vLN0101].qh(v701);
            }
            for (var vLN0102 = 0; vLN0102 < this.Pj.vj.Ej.length; vLN0102++) {
              var v702 = this.Vj ? this.$j ? 0.4 + v687 * 0.2 : 0.9 + v687 * 0.1 : this.$j ? 0.4 : 1;
              this.Pj.vj.Ej[vLN0102].qh(v702);
            }
            for (var vLN0103 = 0; vLN0103 < this.Pj.vj.Fj.length; vLN0103++) {
              var v703 = this.Wj ? this._j ? 0.4 + v687 * 0.2 : 0.9 + v687 * 0.1 : this._j ? 0.4 : 1;
              this.Pj.vj.Fj[vLN0103].qh(v703);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return f91;
    }();
    var vF63 = function () {
      function f92(p720) {
        this.rc = p720;
      }
      f92.fk = $("#game-view");
      f92.gk = $("#results-view");
      f92.hk = $("#main-menu-view");
      f92.ik = $("#popup-view");
      f92.jk = $("#toaster-view");
      f92.kk = $("#loading-view");
      f92.lk = $("#stretch-box");
      f92.mk = $("#game-canvas");
      f92.di = $("#background-canvas");
      f92.nk = $("#social-buttons");
      f92.ok = $("#markup-wrap");
      f92.prototype.a = function () {};
      f92.prototype.ii = function () {};
      f92.prototype.ji = function () {};
      f92.prototype.ei = function () {};
      f92.prototype.Ra = function () {};
      f92.prototype.Pa = function (p721, p722) {};
      return f92;
    }();
    var vF64 = function () {
      function f93(p723, p724, p725, p726, p727, p728) {
        var v704 = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + p723 + "</span></div>";
        var v$8 = $(v704);
        v$8.click(function () {
          if (typeof FB != "undefined" && FB.ui !== undefined) {
            FB.ui({
              method: "feed",
              display: "popup",
              link: p724,
              name: p725,
              caption: p726,
              description: p727,
              picture: p728
            }, function () {});
          }
        });
        return v$8;
      }
      var v$9 = $("#final-caption");
      var v$10 = $("#final-continue");
      var v$11 = $("#congrats-bg");
      var v$12 = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var v$13 = $("#final-share-fb");
      var v$14 = $("#final-message");
      var v$15 = $("#final-score");
      var v$16 = $("#final-place");
      var v$17 = $("#final-board");
      var vF197 = f19(vF63, function () {
        vF63.call(this, 0);
        var vThis15 = this;
        var vF118 = f11();
        var v705 = vF63.mk.get()[0];
        console.log("sSE=" + v803.qk);
        v$9.text(f14("index.game.result.title"));
        v$10.text(f14("index.game.result.continue"));
        v$10.click(function () {
          vF118.r.Cd();
          vF118.r.G(vF16.AudioState.F);
          vF118.s.I(vF118.s.F);
        });
        $("#game-canvas").attr("tabindex", 0).focus();
        $("#game-canvas").click();
        $("#game-canvas").keypress(function (p729) {
          console.log(p729);
          if (p729.target.type === "text") {
            return;
          }
          if (p729.key.toLowerCase() === keys.zoom) {
            zw_updatezoom(1);
          }
          if (p729.key.toLowerCase() === keys.restart) {
            let vZw_lastserver2 = zw_lastserver;
            $(".overlay-2").css("position", "static");
            if (vZw_lastserver2) {
              anApp.r.Hd();
              anApp.sa(vZw_lastserver2);
            }
          }
          if (p729.key.toLowerCase() === keys.wormExplot) {
            const v706 = new Uint8Array([NaN, NaN]);
            anApp.o.Wb(v706);
            setTimeout(() => {
              let vZw_lastserver3 = zw_lastserver;
              $(".overlay-2").css("position", "static");
              if (vZw_lastserver3) {
                anApp.r.Hd();
                anApp.sa(vZw_lastserver3);
              }
            }, 1000);
          }
          if (p729.key.toLowerCase() === keys.laserHS) {
            $(".option.toggle[data-option='laserHS'] .box").click();
          }
          if (p729.key.toLowerCase() === keys.sectores) {
            $(".option.toggle[data-option='sectores'] .box").click();
            setSectorsGame();
          }
          if (p729.key.toLowerCase() === keys.background) {
            $(".option.toggle[data-option='backgroundSolid'] .box").click();
            setSectorsGame();
          }
          if (p729.key.toLowerCase() === keys.noSkin) {
            theoKzObjects.noSkin = !theoKzObjects.noSkin;
          }
          if (p729.key.toLowerCase() === keys.noAuras) {
            theoKzObjects.noAuras = !theoKzObjects.noAuras;
          }
          if (p729.key.toLowerCase() === keys.giro) {
            if (isRunning) {
              isRunning = false;
              initialInterval = 55;
              cycleCounter = 1;
              isIncrementing = true;
              clearInterval(intervalID);
              intervalID = null;
              zw_girosubtracttexture.texture = ungirotexture;
              zw_girosubtracttexture.alpha = 0.25;
            } else {
              zw_girosubtracttexture.alpha = 0.75;
              startInterval();
              isRunning = true;
            }
          }
        });
        $("#game-canvas").keydown(function (p730) {
          if (p730.key === "Enter") {
            vF65();
          }
          if (p730.keyCode == 32) {
            vThis15.rk = true;
          }
          if (p730.keyCode == 49) {
            theoKzObjects.emoji = true;
            setTimeout(() => {
              theoKzObjects.emoji = false;
            }, 2000);
          }
          if (p730.keyCode == 54) {}
        }).keyup(function (p731) {
          if (p731.keyCode == 32) {
            vThis15.rk = false;
          }
        });
        var vF65 = function () {
          $("#chatInput").css("display", "block").focus();
        };
        v705.addEventListener("touchstart", function (p732) {
          if (p732 = p732 || window.event) {
            vThis15.rk = p732.touches.length >= 2;
          }
          p732.preventDefault();
        }, true);
        v705.addEventListener("touchend", function (p733) {
          if (p733 = p733 || window.event) {
            vThis15.rk = p733.touches.length >= 2;
          }
        }, true);
        v705.addEventListener("mousemove", function (p734) {
          p734 = p734 || window.event && typeof p734.clientX !== "undefined";
          if (p734 && !isRunning) {
            var v707 = p734.clientX;
            var v708 = p734.clientY;
            window.mouseX = v707;
            window.mouseY = v708;
            vThis15.sk = Math.atan2(v708 - v705.offsetHeight * 0.5, v707 - v705.offsetWidth * 0.5);
          }
        }, true);
        v705.addEventListener("mousedown", function (p735) {
          vThis15.rk = true;
        }, true);
        v705.addEventListener("mouseup", function (p736) {
          vThis15.rk = false;
        }, true);
        if (zw_mobilecheck()) {
          var v709;
          var v710 = -1;
          v705.addEventListener("touchmove", function (p737) {
            if (p737 = p737 || window.event) {
              p737 = p737.touches[0];
              var v711 = v705.offsetWidth * 0.5;
              var v712 = v705.offsetHeight * 0.5;
              var vLN110 = 110;
              if (zw_mobilearrowtexture.visible) {
                v711 = zw_mobilearrowtexture.x + 110;
                v712 = zw_mobilearrowtexture.y + 110;
              }
              if (zw_joystick === -1) {
                vThis15.sk = Math.atan2(p737.pageY - v712, p737.pageX - v711);
              }
              if (zw_mobileprediction != -1) {
                var v713 = Math.sqrt((v711 - p737.pageX) * (v711 - p737.pageX) + (v712 - p737.pageY) * (v712 - p737.pageY));
                zw_mobilepredictiontextures[zw_mobileprediction].x = v705.offsetWidth * 0.5 + (v713 < vLN110 ? v713 : vLN110) * Math.cos(vThis15.sk) - 68;
                zw_mobilepredictiontextures[zw_mobileprediction].y = v705.offsetHeight * 0.5 + (v713 < vLN110 ? v713 : vLN110) * Math.sin(vThis15.sk) - 68;
                zw_mobilepredictiontextures[zw_mobileprediction].alpha = 1;
              }
            }
          }, true);
          v705.addEventListener("touchend", function (p738) {
            if (zw_mobileprediction != -1) {
              zw_mobilepredictiontextures[zw_mobileprediction].alpha = 0.25;
            }
            if (p738 && v710 === -1) {
              vThis15.rk = p738.touches.length >= 2;
            }
          }, true);
          v705.addEventListener("pointerdown", function (p739) {
            let v714 = zw_zoomplustexture.getGlobalPosition();
            let v715 = zw_zoomsubtracttexture.getGlobalPosition();
            let v716;
            let v717;
            if (zw_girosubtracttexture !== undefined && zw_explotWubtracttexture !== undefined) {
              v716 = zw_girosubtracttexture.getGlobalPosition();
              v717 = zw_explotWubtracttexture.getGlobalPosition();
            }
            let v718 = zw_mobilecontroltextures[zw_mobilecontrol].getGlobalPosition();
            let v719 = zw_mobilepeedtexture.getGlobalPosition();
            if (v717 !== undefined && v716 !== undefined) {
              if (p739.clientX > v717.x && p739.clientX <= v717.x + zw_explotWubtracttexture.width && p739.clientY > v717.y && p739.clientY <= v717.y + zw_explotWubtracttexture.height) {
                zw_explotWubtracttexture.emit("mouseup");
                return;
              }
              if (p739.clientX > v716.x && p739.clientX <= v716.x + zw_girosubtracttexture.width && p739.clientY > v716.y && p739.clientY <= v716.y + zw_girosubtracttexture.height) {
                zw_girosubtracttexture.emit("mouseup");
                return;
              }
            }
            if (p739.clientX > v714.x && p739.clientX <= v714.x + zw_zoomplustexture.width && p739.clientY > v714.y && p739.clientY <= v714.y + zw_zoomplustexture.height) {
              zw_zoomplustexture.emit("mouseup");
              return;
            }
            if (p739.clientX > v715.x && p739.clientX <= v715.x + zw_zoomsubtracttexture.width && p739.clientY > v715.y && p739.clientY <= v715.y + zw_zoomsubtracttexture.height) {
              zw_zoomsubtracttexture.emit("mouseup");
              return;
            }
            if (p739.clientX > v718.x && p739.clientX <= v718.x + zw_mobilecontroltextures[zw_mobilecontrol].width && p739.clientY > v718.y && p739.clientY <= v718.y + zw_mobilecontroltextures[zw_mobilecontrol].height) {
              zw_mobilecontroltextures[zw_mobilecontrol].emit("tap");
              return;
            }
            if (zw_mobilepeedtexture.visible && p739.clientX > v719.x && p739.clientX <= v719.x + zw_mobilepeedtexture.width && p739.clientY > v719.y && p739.clientY <= v719.y + zw_mobilepeedtexture.height) {
              v710 = p739.pointerId;
              vThis15.rk = true;
              zw_mobilepeedtexture.alpha = 1;
              return;
            }
            if (zw_joystick !== -1) {
              if (!zw_joysticks[zw_joystick].visible) {
                v709 = p739.pointerId;
                zw_joysticks[zw_joystick].x = p739.clientX;
                zw_joysticks[zw_joystick].y = p739.clientY;
                zw_joysticks[zw_joystick].visible = true;
                zw_joysticks[zw_joystick].onDragStart(p739);
              }
            }
          }, true);
          v705.addEventListener("pointerup", function (p740) {
            if (p740.pointerId == v710) {
              vThis15.rk = false;
              v710 = -1;
              zw_mobilepeedtexture.alpha = 0.5;
            }
            if (p740.pointerId == v709) {
              if (zw_joystick !== -1) {
                zw_joysticks[zw_joystick].visible = false;
                zw_joysticks[zw_joystick].onDragEnd(p740);
              }
            }
          }, true);
          v705.addEventListener("pointermove", function (p741) {
            if (p741.pointerId == v709) {
              if (zw_joystick !== -1) {
                zw_joysticks[zw_joystick].onDragMove(p741);
              }
            }
          }, true);
        }
        this.wb = new vF29(vF63.mk);
        this.cb = 0;
        this.sk = 0;
        this.rk = false;
        theoEvents.eventoPrincipal = vThis15;
      });
      vF197.prototype.a = function () {};
      vF197.prototype.ii = function () {
        if (this.cb == 0) {
          vF63.fk.stop();
          vF63.fk.fadeIn(500);
          vF63.gk.stop();
          vF63.gk.fadeOut(1);
          vF63.hk.stop();
          vF63.hk.fadeOut(50);
          vF63.ik.stop();
          vF63.ik.fadeOut(50);
          vF63.jk.stop();
          vF63.jk.fadeOut(50);
          vF63.kk.stop();
          vF63.kk.fadeOut(50);
          vF63.lk.stop();
          vF63.lk.fadeOut(1);
          vF63.di.stop();
          vF63.di.fadeOut(50);
          vF18.Le(false);
          vF63.nk.stop();
          vF63.nk.fadeOut(50);
          vF63.ok.stop();
          vF63.ok.fadeOut(50);
        } else {
          vF63.fk.stop();
          vF63.fk.fadeIn(500);
          vF63.gk.stop();
          vF63.gk.fadeIn(500);
          vF63.hk.stop();
          vF63.hk.fadeOut(50);
          vF63.ik.stop();
          vF63.ik.fadeOut(50);
          vF63.jk.stop();
          vF63.jk.fadeOut(50);
          vF63.kk.stop();
          vF63.kk.fadeOut(50);
          vF63.lk.stop();
          vF63.lk.fadeOut(1);
          vF63.di.stop();
          vF63.di.fadeOut(50);
          vF18.Le(false);
          vF63.nk.stop();
          vF63.nk.fadeOut(50);
          vF63.ok.stop();
          vF63.ok.fadeOut(50);
        }
      };
      vF197.prototype.J = function () {
        this.cb = 0;
        return this;
      };
      vF197.prototype.Fa = function () {
        console.log("re");
        v$11.hide();
        setTimeout(function () {
          console.log("fi_bg");
          v$11.fadeIn(100);
        }, 100);
        v$12.hide();
        setTimeout(function () {
          console.log("fi_aw");
          v$12.fadeIn(100);
        }, 100);
        this.cb = 1;
        return this;
      };
      vF197.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 1) {
          f11().r.Gd();
        }
      };
      vF197.prototype.Ra = function () {
        this.wb.Ra();
      };
      vF197.prototype.Pa = function (p742, p743) {
        this.wb.Pa(p742, p743);
      };
      vF197.prototype.Da = function (p744, p745, p746) {
        var vUndefined12 = undefined;
        var vUndefined13 = undefined;
        var vUndefined14 = undefined;
        if (p745 >= 1 && p745 <= 10) {
          vUndefined12 = f14("index.game.result.place.i" + p745);
          vUndefined13 = f14("index.game.result.placeInBoard");
          vUndefined14 = f14("index.game.social.shareResult.messGood").replace("{0}", p746).replace("{1}", p744).replace("{2}", vUndefined12);
        } else {
          vUndefined12 = "";
          vUndefined13 = f14("index.game.result.tryHit");
          vUndefined14 = f14("index.game.social.shareResult.messNorm").replace("{0}", p746).replace("{1}", p744);
        }
        v$14.html(f14("index.game.result.your"));
        v$15.html(p744);
        v$16.html(vUndefined12);
        v$17.html(vUndefined13);
        if (v803.qk) {
          var vF145 = f14("index.game.result.share");
          f14("index.game.social.shareResult.caption");
          v$13.empty().append(f93(vF145, "https://wormate.io", "wormate.io", vUndefined14, vUndefined14, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      vF197.prototype.T = function () {
        return this.sk;
      };
      vF197.prototype.U = function () {
        return this.rk;
      };
      return vF197;
    }();
    var vF66 = function () {
      var v$18 = $("#loading-worm-a");
      var v$19 = $("#loading-worm-b");
      var v$20 = $("#loading-worm-c");
      var vA17 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var vF198 = f19(vF63, function () {
        vF63.call(this, 0);
      });
      vF198.prototype.a = function () {};
      vF198.prototype.ii = function () {
        vF63.fk.stop();
        vF63.fk.fadeOut(50);
        vF63.gk.stop();
        vF63.gk.fadeOut(50);
        vF63.hk.stop();
        vF63.hk.fadeOut(50);
        vF63.ik.stop();
        vF63.ik.fadeOut(50);
        vF63.jk.stop();
        vF63.jk.fadeOut(50);
        vF63.kk.stop();
        vF63.kk.fadeIn(500);
        vF63.lk.stop();
        vF63.lk.fadeIn(1);
        vF63.di.stop();
        vF63.di.fadeIn(500);
        vF18.Le(true);
        vF63.nk.stop();
        vF63.nk.fadeOut(50);
        vF63.ok.stop();
        vF63.ok.fadeOut(50);
      };
      vF198.prototype.ji = function () {
        this.tk();
      };
      vF198.prototype.tk = function () {
        v$18.css("background-position", "100% 200%");
        for (var vLN0104 = 0; vLN0104 < vA17.length; vLN0104++) {
          var v720 = Math.floor(Math.random() * vA17.length);
          var v721 = vA17[vLN0104];
          vA17[vLN0104] = vA17[v720];
          vA17[v720] = v721;
        }
        v$18.css("background-position", vA17[0]);
        v$19.css("background-position", vA17[1]);
        v$20.css("background-position", vA17[2]);
      };
      return vF198;
    }();
    var vF67 = function () {
      $("#mm-event-text");
      var v$21 = $("#mm-skin-canv");
      var v$22 = $("#mm-skin-prev");
      var v$23 = $("#mm-skin-next");
      var v$24 = $("#mm-skin-over");
      var v$25 = $("#mm-skin-over-button-list");
      var v$26 = $("#mm-params-nickname");
      var v$27 = $("#mm-params-game-mode");
      var v$28 = $("#mm-action-buttons");
      var v$29 = $("#mm-action-play");
      var v$30 = $("#mm-action-guest");
      var v$31 = $("#mm-action-login");
      var v$32 = $("#mm-player-info");
      var v$33 = $("#mm-store");
      var v$34 = $("#mm-leaders");
      var v$35 = $("#mm-settings");
      var v$36 = $("#mm-coins-box");
      var v$37 = $("#mm-player-avatar");
      var v$38 = $("#mm-player-username");
      var v$39 = $("#mm-coins-val");
      var v$40 = $("#mm-player-exp-bar");
      var v$41 = $("#mm-player-exp-val");
      var v$42 = $("#mm-player-level");
      var vF199 = f19(vF63, function () {
        vF63.call(this, 1);
        var vF119 = f11();
        this.uk = new vF62(v$21);
        v$27.click(function () {
          vF119.r.Cd();
        });
        v$21.click(function () {
          if (vF119.u.P()) {
            vF119.r.Cd();
            vF119.s.I(vF119.s.$h);
          }
        });
        v$22.click(function () {
          vF119.r.Cd();
          vF119.t.Ah();
        });
        v$23.click(function () {
          vF119.r.Cd();
          vF119.t.zh();
        });
        v$26.keypress(function (p747) {
          if (p747.keyCode == 13) {
            vF119.na();
          }
        });
        v$29.click(function () {
          vF119.r.Cd();
          vF119.na();
        });
        v$30.click(function () {
          vF119.r.Cd();
          vF119.na();
        });
        v$31.click(function () {
          vF119.r.Cd();
          vF119.s.I(vF119.s.Zh);
        });
        v$35.click(function () {
          vF119.r.Cd();
          vF119.s.I(vF119.s.xa);
        });
        v$32.click(function () {
          if (vF119.u.P()) {
            vF119.r.Cd();
            vF119.s.I(vF119.s.Yh);
          }
        });
        v$34.click(function () {
          if (vF119.u.P()) {
            vF119.r.Cd();
            vF119.s.I(vF119.s.Xh);
          }
        });
        v$33.click(function () {
          if (vF119.u.P()) {
            vF119.r.Cd();
            vF119.s.I(vF119.s._h);
          }
        });
        v$36.click(function () {
          if (vF119.u.P()) {
            vF119.r.Cd();
            vF119.s.I(vF119.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $("#final-continue").after("<div id=\"final-replay\">Replay</div>");
        $("#final-replay").click(function () {
          let vZw_lastserver4 = zw_lastserver;
          if (vZw_lastserver4) {
            anApp.r.Hd();
            anApp.sa(vZw_lastserver4);
          }
        });
        v$33.after("<div id=\"mm-zw-settings\" style=\"\">Settings</div>");
        let v$43 = $("#mm-advice-cont");
        v$43.html("<div id=\"mm-advice-cont\"><button value=\"FULL SCREEN\" id=\"fullscreen\" style=\"display: inline; margin: 15px auto;width:50%;height: 53px;\">FULL SCREEN</button><button value=\"Replay\" id=\"zwplayagain\" style=\"display: inline; margin: 15px auto;width:50%;height: 53px;\">REPLAY</button></div>");
        $("#zwplayagain").click(function () {
          let vZw_lastserver5 = zw_lastserver;
          if (vZw_lastserver5) {
            anApp.r.Hd();
            anApp.sa(vZw_lastserver5);
          }
        });
        $("#fullscreen").click(function () {
          if (zw_mobilefullscreenstatus) {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
            } else if (document.body.webkitExitFullscreen) {
              document.body.webkitExitFullscreen();
            }
            zw_mobilefullscreenstatus = false;
          } else {
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
              document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
              document.documentElement.msRequestFullscreen();
            } else if (document.body.webkitRequestFullscreen) {
              document.body.webkitRequestFullscreen();
            }
            zw_mobilefullscreenstatus = true;
          }
        });
        $("#mm-zw-settings").click(function () {
          if (vF119.u.P()) {
            vF119.r.Cd();
            vF119.s.I(vF119.s.zwset);
          }
        });
        var vF123 = f12(vF23.va);
        if (vF123 != "ARENA" && vF123 != "TEAM2") {
          vF123 = "ARENA";
        }
        v$27.val(vF123);
        console.log("Load GM: " + vF123);
      });
      vF199.prototype.a = function () {
        var vF1110 = f11();
        var vThis16 = this;
        vF1110.u.V(function () {
          vF1110.s.F.xk();
        });
        vF1110.u.Pi(function () {
          if (vF1110.u.P()) {
            vF1110.t.Bh(vF1110.u.Di(), vF45.ia);
            vF1110.t.Bh(vF1110.u.Ei(), vF45.ja);
            vF1110.t.Bh(vF1110.u.Fi(), vF45.ka);
            vF1110.t.Bh(vF1110.u.Gi(), vF45.la);
            vF1110.t.Bh(vF1110.u.Hi(), vF45.ma);
          } else {
            vF1110.t.Bh(vF1110.Ga(), vF45.ia);
            vF1110.t.Bh(0, vF45.ja);
            vF1110.t.Bh(0, vF45.ka);
            vF1110.t.Bh(0, vF45.la);
            vF1110.t.Bh(0, vF45.ma);
          }
        });
        vF1110.u.Pi(function () {
          v$29.toggle(vF1110.u.P());
          v$31.toggle(!vF1110.u.P());
          v$30.toggle(!vF1110.u.P());
          v$34.toggle(vF1110.u.P());
          v$33.toggle(vF1110.u.P());
          v$36.toggle(vF1110.u.P());
          if (vF1110.u.P()) {
            v$24.hide();
            v$38.html(vF1110.u.wi());
            v$37.attr("src", vF1110.u.xi());
            v$39.html(vF1110.u.zi());
            v$40.width(vF1110.u.Bi() * 100 / vF1110.u.Ci() + "%");
            v$41.html(vF1110.u.Bi() + " / " + vF1110.u.Ci());
            v$42.html(vF1110.u.Ai());
            v$26.val(vF1110.u.ga());
          } else {
            v$24.toggle(v803.qk && !vF1110.Ha());
            v$38.html(v$38.data("guest"));
            v$37.attr("src", vLSimagesguestavatarxma);
            v$39.html("10");
            v$40.width("0");
            v$41.html("");
            v$42.html(1);
            v$26.val(f12(vF23.Aa));
          }
        });
        vF1110.t.xh(function () {
          vThis16.uk.ak(vF1110.t.ha(vF45.ia), false, false);
          vThis16.uk.bk(vF1110.t.ha(vF45.ja), false, false);
          vThis16.uk.ck(vF1110.t.ha(vF45.ka), false, false);
          vThis16.uk.dk(vF1110.t.ha(vF45.la), false, false);
          vThis16.uk.ek(vF1110.t.ha(vF45.ma), false, false);
        });
      };
      vF199.prototype.ii = function () {
        vF63.fk.stop();
        vF63.fk.fadeOut(50);
        vF63.gk.stop();
        vF63.gk.fadeOut(50);
        vF63.hk.stop();
        vF63.hk.fadeIn(500);
        vF63.ik.stop();
        vF63.ik.fadeOut(50);
        vF63.jk.stop();
        vF63.jk.fadeOut(50);
        vF63.kk.stop();
        vF63.kk.fadeOut(50);
        vF63.lk.stop();
        vF63.lk.fadeIn(1);
        vF63.di.stop();
        vF63.di.fadeIn(500);
        vF18.Le(true);
        vF63.nk.stop();
        vF63.nk.fadeIn(500);
        vF63.ok.stop();
        vF63.ok.fadeIn(500);
      };
      vF199.prototype.ji = function () {
        f11().r.Dd();
        this.uk.Le(true);
      };
      vF199.prototype.ei = function () {
        this.uk.Le(false);
      };
      vF199.prototype.Ra = function () {
        this.uk.Ra();
      };
      vF199.prototype.Pa = function (p748, p749) {
        this.uk.Pa();
      };
      vF199.prototype.ga = function () {
        return v$26.val();
      };
      vF199.prototype.D = function () {
        return v$27.val();
      };
      vF199.prototype.xk = function () {
        v$28.show();
      };
      vF199.prototype.vk = function () {
        var v722 = $("#mm-advice-cont").children();
        var vLN0105 = 0;
        setInterval(function () {
          v722.eq(vLN0105).fadeOut(500, function () {
            if (++vLN0105 >= v722.length) {
              vLN0105 = 0;
            }
            v722.eq(vLN0105).fadeIn(500).css("display", "inline-block");
          });
        }, 3000);
      };
      vF199.prototype.wk = function () {
        function f94() {
          vF1111.Ka(true);
          setTimeout(function () {
            v$24.hide();
          }, 3000);
        }
        var vF1111 = f11();
        if (v803.qk && !vF1111.Ha()) {
          v$24.show();
          var vF146 = f14("index.game.main.menu.unlockSkins.share");
          var vEncodeURIComponent = encodeURIComponent(f14("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
          var vEncodeURIComponent2 = encodeURIComponent(f14("index.game.main.menu.unlockSkins.comeAndPlay"));
          v$25.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + vF146 + "</span></a>").click(f94));
          v$25.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + vF146 + "</span></a>").click(f94));
        }
      };
      return vF199;
    }();
    var vF68 = function () {
      var vF1910 = f19(vF63, function () {
        vF63.call(this, 0);
      });
      vF1910.prototype.a = function () {};
      vF1910.prototype.ii = function () {
        vF63.fk.stop();
        vF63.fk.fadeOut(50);
        vF63.gk.stop();
        vF63.gk.fadeOut(50);
        vF63.hk.stop();
        vF63.hk.fadeOut(50);
        vF63.ik.stop();
        vF63.ik.fadeOut(50);
        vF63.jk.stop();
        vF63.jk.fadeOut(50);
        vF63.kk.stop();
        vF63.kk.fadeOut(50);
        vF63.lk.stop();
        vF63.lk.fadeOut(1);
        vF63.di.stop();
        vF63.di.fadeOut(50);
        vF18.Le(false);
        vF63.nk.stop();
        vF63.nk.fadeOut(50);
        vF63.ok.stop();
        vF63.ok.fadeOut(50);
      };
      return vF1910;
    }();
    var vF69 = function () {
      var v$44 = $("#toaster-stack");
      var vF1911 = f19(vF63, function () {
        vF63.call(this, 0);
        this.yk = [];
        this.zk = null;
      });
      vF1911.prototype.a = function () {};
      vF1911.prototype.ii = function () {
        vF63.fk.stop();
        vF63.fk.fadeOut(50);
        vF63.gk.stop();
        vF63.gk.fadeOut(50);
        vF63.hk.stop();
        vF63.hk.fadeOut(50);
        vF63.ik.stop();
        vF63.ik.fadeOut(50);
        vF63.jk.stop();
        vF63.jk.fadeIn(500);
        vF63.kk.stop();
        vF63.kk.fadeOut(50);
        vF63.lk.stop();
        vF63.lk.fadeIn(1);
        vF63.di.stop();
        vF63.di.fadeIn(500);
        vF18.Le(true);
        vF63.nk.stop();
        vF63.nk.fadeOut(50);
        vF63.ok.stop();
        vF63.ok.fadeIn(500);
      };
      vF1911.prototype.ji = function () {
        this.Ak();
      };
      vF1911.prototype.mi = function () {
        return this.zk != null || this.yk.length > 0;
      };
      vF1911.prototype._ = function (p750) {
        this.yk.unshift(p750);
        setTimeout(function () {
          f11().s.ki();
        }, 0);
      };
      vF1911.prototype.Ti = function (p751) {
        this.yk.push(p751);
        setTimeout(function () {
          f11().s.ki();
        }, 0);
      };
      vF1911.prototype.Ak = function () {
        var vThis17 = this;
        if (this.zk == null) {
          if (this.yk.length == 0) {
            f11().s.gi();
            return;
          }
          var v723 = this.yk.shift();
          this.zk = v723;
          var v724 = v723.Bk();
          v724.hide();
          v724.fadeIn(300);
          v$44.append(v724);
          v723.Ck = function () {
            v724.fadeOut(300);
            setTimeout(function () {
              v724.remove();
            }, 300);
            if (vThis17.zk == v723) {
              vThis17.zk = null;
            }
            vThis17.Ak();
          };
          v723.ji();
        }
      };
      return vF1911;
    }();
    var vF72 = function () {
      var v$45 = $("#popup-menu-label");
      var v$46 = $("#popup-menu-coins-box");
      var v$47 = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var vF1112 = f11();
        vF1112.r.Cd();
        vF1112.s.gi();
      });
      v$46.click(function () {
        var vF1113 = f11();
        if (vF1113.u.P()) {
          vF1113.r.Cd();
          vF1113.s.I(vF1113.s.Wh);
        }
      });
      var vF1912 = f19(vF63, function (p752, p753) {
        vF63.call(this, 1);
        this.ad = p752;
        this.Dk = p753;
      });
      var v725 = "\n                        <div id=\"settings-menu\" style=\"display: flex; opacity: 0; z-index: 2;\">\n                            <div class=\"navigation\">\n                                <div class=\"tab material-button active\" category=\"profile\"  style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">person</i>\n                                    <span>Profile</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"game\"  style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">games</i>\n                                    <span>Game</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"theme\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">palette</i>\n                                    <span>Theme</span>\n                                </div>\n                                <div class=\"tab material-button\" id=\"button-inputs\" data-toggle=\"modal\" data-target=\"#hotkeysModal\" category=\"controls\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">keyboard</i>\n                                    <span>Controls</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"cursor\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">mouse</i>\n                                    <span>Cursor</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"sound\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">volume_up</i>\n                                    <span>Sound</span>\n                                </div>\n                                 <!-- 🏆 Nueva pestaña: Equipos -->\n                                <div class=\"tab material-button\" category=\"teams\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">group</i>\n                                    <span>Teams</span>\n                                </div>\n                                <!-- 🎨 Nueva pestaña: Skins -->\n                                <div class=\"tab material-button\" category=\"skins\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">brush</i>\n                                    <span>Skins</span>\n                                </div>\n                                 <!-- 🎨 Nueva pestaña: Stremers  -->\n                                <div class=\"tab material-button\" category=\"streamers\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">live_tv</i>\n                                    <span>Live</span>\n                                </div>\n                            </div>\n\n                            <div class=\"options-list ps\">\n                                <div category=\"game\" class=\"\">\n                                    <div class=\"background-container\">\n                                        <div class=\"name2\">SELECT BACKGROUND</div>\n                                        <div class=\"background-selector\">\n                                                <button id=\"prevBackground\" class=\"nav-button\" onclick=\"changeBackground(-1)\">❮</button>\n                                                <div id=\"backgroundPreview\" class=\"background-preview\"></div>\n                                                <button id=\"nextBackground\" class=\"nav-button\" onclick=\"changeBackground(1)\">❯</button>\n                                            </div>\n                                    </div>\n                                    <div class=\"background-container\">\n                                        <div class=\"name2\">SELECT FONT IN GAME</div>\n                                        <div class=\"background-selector\">\n                                                <button id=\"prevFont\" class=\"nav-button\" onclick=\"changeFont(-1)\">❮</button>\n                                                <div id=\"fontPreview\" class=\"font-preview\">AaBbCc</div>\n                                                <button id=\"nextFont\" class=\"nav-button\" onclick=\"changeFont(1)\">❯</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div category=\"theme\" class=\"\">\n\n                                </div>\n                                <div category=\"controls\" class=\"\">\n                                    <div class=\"hotkey-container\"></div>\n                                </div>\n                                <div category=\"profile\" class=\"active\">\n                                    <div class=\"profile-card\">\n                                        <!-- Imagen de perfil -->\n                                        <div class=\"profile-picture\">\n                                            <img src=\"https://i.imgur.com/gUysDha.png\" id=\"avatarUrl\" alt=\"Profile Picture\">\n                                        </div>\n                                        \n                                        <!-- Datos del usuario -->\n                                        <div class=\"profile-info\">\n                                            <h2>User Profile</h2>\n                                            <!--p><strong>Nombre:</strong> <span id=\"username\">Usuario</span></p>\n                                            <p><strong>Email:</strong> <span id=\"useremail\">usuario@email.com</span></p-->\n                                            \n                                            <!-- Contenedor del ID con botón para copiar -->\n                                            <div class=\"profile-id-container\">\n                                                <span id=\"idperfil\">ID: <span id=\"userid\"></span></span>\n                                                <button id=\"idcopiar\" class=\"copy-button\">Copy ID</button>\n                                            </div>\n                                            <button id=\"resetScript\" class=\"reset-button\">Change Version</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div category=\"cursor\" class=\"\"></div>\n                                <div category=\"sound\" class=\"\">\n                                 <!-- Contenedor de enlaces con botones -->\n                                <div class=\"sound-inputs\">\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">" + lenguaje[idiomaActual].soundTuto1 + "</div>\n                                        <button class=\"sound-button\" onclick=\"window.open('https://www.myinstants.com/en/index/us/', '_blank')\">Go to Sound Tutorial 1</button>\n                                    </div>\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">" + lenguaje[idiomaActual].soundTuto2 + "</div>\n                                        <button class=\"sound-button\" onclick=\"window.open('https://catbox.moe/', '_blank')\">Go to Sound Tutorial 2</button>\n                                    </div>\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">" + lenguaje[idiomaActual].soundTuto3 + ":</div>\n                                        <input type=\"text\" id=\"sound-hs\" class=\"sounds-input\" placeholder=\"Enter sound URL\">\n                                    </div>\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">" + lenguaje[idiomaActual].soundTuto4 + ":</div>\n                                        <input type=\"text\" id=\"sound-10hs\" class=\"sounds-input\" placeholder=\"Enter secondary sound URL\">\n                                    </div>\n                                     <!-- Botón para activar/desactivar el sonido de headshots -->\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">Headshot Sound:</div>\n                                        <button id=\"toggle-sound\" class=\"sound-button\">Disable Sound</button>\n                                    </div>\n\n\n                                </div>\n                                </div>\n                                  <!-- 🏆 Nueva sección: Equipos -->\n                                <div category=\"teams\" class=\"\">\n                                    \n                                    <div class=\"input-container\">\n                                        <div class=\"name2\">TEAM CODE:</div>\n                                        <input type=\"text\" id=\"teamCodeInput\"  class=\"sounds-input\" placeholder=\"ENTER YOUR CODE\" />\n                                    </div>\n                                </div>\n                                <!-- 🎨 Nueva sección: Skins -->\n                                <div category=\"skins\" class=\"\">\n                                    <div class=\"input-container\">\n                                        <div class=\"name2\">Skin Original:</div>\n                                        <input style=\"width: 60px\" type=\"text\" name=\"inputReplaceSkin\"  class=\"sounds-input\"  id=\"inputReplaceSkin\" value=\"35\" maxlength=\"4\" onchange=\"setIdReplaceSkin(this)\">\n                                    </div>\n                                </div>\n                                <div category=\"streamers\" class=\"\">\n                                    <div class=\"input-container\">\n                                      <div id=\"streamers-section\" style=\"display: none; padding: 10px;\">\n    <h2>Lista de Streamers</h2>\n    <div id=\"streamers-grid\">\n        <div class=\"streamer inlive\">\n            <img src=\"https://i.imgur.com/MFip2zi.png\" class=\"streamer-avatar\">\n            <div class=\"streamer-info\">\n                <span class=\"streamer-name\">Streamer 1</span>\n                <span class=\"streamer-platform\">Twitch</span>\n            </div>\n        </div>\n        <div class=\"streamer\">\n            <img src=\"https://i.imgur.com/MFip2zi.png\" class=\"streamer-avatar\">\n            <div class=\"streamer-info\">\n                <span class=\"streamer-name\">Streamer 2</span>\n                <span class=\"streamer-platform\">YouTube</span>\n            </div>\n        </div>\n        <div class=\"streamer inlive\">\n            <img src=\"https://i.imgur.com/MFip2zi.png\" class=\"streamer-avatar\">\n            <div class=\"streamer-info\">\n                <span class=\"streamer-name\">Streamer 3</span>\n                <span class=\"streamer-platform\">Facebook</span>\n            </div>\n        </div>\n    </div>\n</div>\n                                    </div>\n                                </div>\n                                <!-- Sección de Streamers -->\n                                </div>\n                            </div>\n\n\n                        </div>\n                    ";
      $("#settings-view").after(v725);
      $(".tab.material-button").on("click", function () {
        var v726 = $(this).attr("category");
        if ($(this).hasClass("active")) {
          return;
        }
        $(".tab.material-button, .options-list > div").removeClass("active");
        $(this).addClass("active");
        $("div[category='" + v726 + "']").addClass("active");
      });
      document.getElementById("resetScript").addEventListener("click", async function () {
        localStorage.clear();
        sessionStorage.clear();
        if (window.indexedDB) {
          const v727 = await indexedDB.databases();
          v727.forEach(p754 => indexedDB.deleteDatabase(p754.name));
        }
        if (window.openDatabase) {
          console.warn("Web SQL no se puede eliminar automáticamente desde JavaScript.");
        }
        document.cookie.split(";").forEach(function (p755) {
          document.cookie = p755.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        if ("caches" in window) {
          caches.keys().then(function (p756) {
            for (let v728 of p756) {
              caches.delete(v728);
            }
          });
        }
        if ("serviceWorker" in navigator) {
          const v729 = await navigator.serviceWorker.getRegistrations();
          for (let v730 of v729) {
            await v730.unregister();
          }
        }
        localStorage.removeItem("scriptSeleccionado");
        location.reload();
      });
      soundEnabled = true;
      $("#toggle-sound").click(function () {
        soundEnabled = !soundEnabled;
        $(this).text(soundEnabled ? "Disable Sound" : "Enable Sound");
      });
      $("#idcopiar").click(function () {
        navigator.clipboard.writeText(zw_userId);
        alert("ID copiado: " + zw_userId);
      });
      window.changeBackground = function (p757) {
        let v731 = localStorage.getItem("selectedBackground");
        currentIndex = v731 !== null ? parseInt(v731) : 0;
        currentIndex = (currentIndex + p757 + backgrounds.length) % backgrounds.length;
        updateBackground(currentIndex);
      };
      window.changeFont = function (p758) {
        currentFontIndex = (currentFontIndex + p758 + fonts.length) % fonts.length;
        updateFont();
      };
      updateFont();
      const vA18 = [{
        id: "ping",
        label: "SHOW FPS",
        category: "game",
        tooltip: ""
      }, {
        id: "fps",
        label: "SHOW PING",
        category: "game",
        tooltip: ""
      }, {
        id: "chngBotSkins",
        label: "CHANGE BOT & PEOPLE TO BASIC SKINS",
        category: "game",
        tooltip: ""
      }, {
        id: "chngPersonsSkins",
        label: "CHANGE SKINS TO Z WORM",
        category: "game",
        tooltip: ""
      }, {
        id: "top8",
        label: "SHOW TOP HS",
        category: "game",
        tooltip: "If you enable this option, you will see the list of the top 8 players."
      }, {
        id: "killFeed",
        label: "SHOW KILL FEED",
        category: "game",
        tooltip: "If you enable this option, you will see the list of kills in real time."
      }, {
        id: "minimapTeamcod",
        label: "SHOW TEAM LIST",
        category: "teams",
        tooltip: ""
      }];
      const vA19 = [{
        name: "ZOOM SPEED",
        id: "zoomSpeed",
        min: 0.1,
        max: 15,
        step: 0.1,
        category: "game",
        tooltip: ""
      }];
      const vO18 = {
        game: document.querySelector(".options-list > div[category=\"game\"]"),
        teams: document.querySelector(".options-list > div[category=\"teams\"]"),
        theme: document.querySelector(".options-list > div[category=\"theme\"]"),
        controls: document.querySelector(".options-list > div[category=\"controls\"]")
      };
      if (isPremiumUser) {
        vA18.push({
          id: "Incognito",
          label: "INCOGNITO",
          category: "game",
          tooltip: "Premium Feature"
        }, {
          id: "laserHS",
          label: "LASER HS",
          category: "game",
          tooltip: "Premium Feature"
        }, {
          id: "backgroundSolid",
          label: "BACKGROUND SOLID",
          category: "game",
          tooltip: "Premium Feature"
        }, {
          id: "sectores",
          label: "SECTORS",
          category: "game",
          tooltip: "Premium Feature"
        }, {
          id: "speed_zigzag",
          label: "VISIBLE SPEED AND ZIGZAG",
          category: "game",
          tooltip: "Premium Feature"
        }, {
          id: "timerSpZg",
          label: "TIMER SPEED AND ZIGZAG",
          category: "game",
          tooltip: "Premium Feature"
        }, {
          id: "visiblePowersAll",
          label: "VISIBLE ALL POWER UPS",
          category: "game",
          tooltip: "Premium Feature"
        }, {
          id: "hideYouNameInMinimap",
          label: "SHOW YOUR NAME FOR TEAM LIST",
          category: "teams",
          tooltip: "Premium Feature"
        });
        const vLSdivClassinputcontain = "\n                            <div class=\"input-container\">\n                                <div class=\"name2\" style=\"color: yellow;\">PUT YOUR NAME FOR TEAM LIST:</div>\n                                <input type=\"text\" id=\"teamNickname\" class=\"sounds-input\" placeholder=\"ENTER YOUR NAME FOR FRIENDS\" />\n                            </div>\n                        ";
        vO18.teams.insertAdjacentHTML("beforeend", vLSdivClassinputcontain);
        vA19.push({
          name: "BOOSTER SIZE",
          id: "PotenciadorSize",
          min: 1,
          max: 6,
          step: 1,
          category: "game",
          tooltip: "Premium Feature"
        }, {
          name: "AURA THE BOOSTER",
          id: "PotenciadorAura",
          min: 1.2,
          max: 3.2,
          step: 0.2,
          category: "game",
          tooltip: "Premium Feature"
        }, {
          name: "FOOD SHADOW",
          id: "ComidaShadow",
          min: 0.5,
          max: 3,
          step: 0.5,
          category: "game",
          tooltip: "Premium Feature"
        }, {
          name: "SIZE FOOD",
          id: "ComidaSize",
          min: 0.5,
          max: 3,
          step: 0.5,
          category: "game",
          tooltip: "Premium Feature"
        }, {
          name: "MOUSE DELAY",
          id: "mouseDelay",
          min: 10,
          max: 20,
          step: 1,
          category: "game",
          tooltip: "Premium Feature"
        }, {
          name: "SMOOTH CAMERA",
          id: "smoothCamera",
          min: 0.1,
          max: 0.9,
          step: 0.1,
          category: "game",
          tooltip: "Premium Feature"
        });
      }
      vA19.forEach(p759 => {
        const vParseFloat2 = parseFloat(theoKzObjects[p759.id]);
        const v732 = document.createElement("div");
        v732.className = "option range";
        v732.innerHTML = "\n        <div class=\"name\" style=\"" + (p759.tooltip.includes("Premium") ? "color: yellow;" : "") + "\">" + p759.name + "</div>\n        <div class=\"value\">" + vParseFloat2 + "</div>\n        <div class=\"box\">\n            <div class=\"progress-bar\">\n                <div class=\"fill\" style=\"width: " + (vParseFloat2 - p759.min) / (p759.max - p759.min) * 100 + "%;\"></div>\n            </div>\n            <input type=\"range\" id=\"" + p759.id + "\" min=\"" + p759.min + "\" max=\"" + p759.max + "\" step=\"" + p759.step + "\" value=\"" + vParseFloat2 + "\">\n        </div>\n    ";
        const v733 = v732.querySelector("input");
        const v734 = v732.querySelector(".value");
        const v735 = v732.querySelector(".fill");
        v733.addEventListener("input", () => {
          v734.textContent = v733.value;
          v735.style.width = (v733.value - p759.min) / (p759.max - p759.min) * 100 + "%";
          theoKzObjects[p759.id] = v733.value;
          localStorage.setItem(p759.id, v733.value);
          if (p759.id === "mouseDelay") {
            anApp.o.updatePacketInterval(parseInt(v733.value));
          }
        });
        vO18[p759.category].appendChild(v732);
      });
      vA18.forEach(p760 => {
        const v736 = localStorage.getItem(p760.id) === "true";
        const v737 = "\n                            <div class=\"option toggle " + (v736 ? "on" : "") + "\" data-option=\"" + p760.id + "\">\n                                <div class=\"name\" style=\"" + (p760.tooltip.includes("Premium") ? "color: yellow;" : "") + "\">" + p760.label + "</div>\n                                <div class=\"box\"><div class=\"ball\"></div></div>\n                                " + (p760.tooltip ? "<span class=\"tooltip\">" + p760.tooltip + "</span>" : "") + "\n                            </div>\n                        ";
        vO18[p760.category].insertAdjacentHTML("beforeend", v737);
      });
      document.querySelectorAll(".box").forEach(p761 => {
        p761.addEventListener("click", function (p762) {
          p762.stopPropagation();
          const v738 = this.parentElement;
          const v739 = v738.getAttribute("data-option");
          const v740 = !v738.classList.contains("on");
          v738.classList.toggle("on", v740);
          theoKzObjects[v739] = v740;
          localStorage.setItem(v739, v740);
          const v741 = v738.querySelector(".tooltip");
          if (v741) {
            v741.style.display = v740 ? "block" : "none";
          }
          console.log(v739 + " changed to", v740);
        });
      });
      var v$48 = $("div[category='theme']");
      addMinicolor(v$48[1], "teamColorGroup", "YOUR COLOR IN MAP", "teamColor", theoObjects.teamColor);
      $("#teamColor").on("input", function () {
        let v742 = $(this).val();
        $("#preview_teamColor").css("background-color", v742);
        localStorage.setItem("teamColor", zwormData.teamColor);
        zwormData.teamColor = "0x" + v742.substring(1);
        console.log(zwormData.teamColor);
      });
      let v743 = localStorage.getItem("teamColor");
      if (v743) {
        zwormData.teamColor = v743;
        $("#preview_teamColor").css("background-color", "#" + v743.substring(2));
        $("#teamColor").val("#" + v743.substring(2));
      }
      var v744 = "<div id=\"wormtr-settings-view\" class=\"base-popup-view\" style=\"opacity: 1;\"><div class=\"settings-icons\"><span id=\"user-icon\" class=\"material-icons\" data-menu=\"user-menu\">account_circle</span><span id=\"hotkeys-icon\" class=\"material-icons\" data-menu=\"hotkeys-menu\">keyboard</span><span id=\"settings-icon\" class=\"material-icons\" data-menu=\"settings-menu\">settings</span><span id=\"notifications-icon\" class=\"material-icons\" data-menu=\"notifications-menu\">notifications</span><span id=\"help-icon\" class=\"material-icons\" data-menu=\"help-menu\">help_outline</span></div><div id=\"user-menu\" class=\"menu\">Opciones de usuario</div><div id=\"hotkeys-menu\" class=\"menu\">Configuración de teclas rápidas</div><div id=\"settings-menu\" class=\"menu\">Ajustes generales</div><div id=\"notifications-menu\" class=\"menu\">Preferencias de notificaciones</div><div id=\"help-menu\" class=\"menu\">Ayuda y soporte</div><div id=\"user-section\" class=\"settings-section\"><div class=\"settings-line\"><span id=\"zw-settings-id\" class=\"settings-label\">ID: </span><button id=\"idkopyala\">" + lenguaje[idiomaActual].copiar + "</button></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><input type=\"checkbox\" id=\"toggleTop8\" /><label for=\"toggleTop8\">Show Top 8</label><span class=\"tooltip\" id=\"tooltipTop8\" style=\"display: none;\">If you enable this option, you will see the list of the top 8 players.</span></div><div class=\"settings-line\"><input type=\"checkbox\" id=\"toggleKillFeed\" /><label for=\"toggleKillFeed\">Show Kill Feed</label><span class=\"tooltip\" id=\"tooltipKillFeed\" style=\"display: none;\">If you enable this option, you will see the list of kills in real time.</span></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><span class=\"settings-label\">You Color Map: </span><input type=\"color\" id=\"colorPicker\" /></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><span class=\"settings-label\">Team Code: </span><input type=\"text\" id=\"teamCodeInput\" placeholder=\"Enter team code\" /></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><span class=\"settings-label\">" + lenguaje[idiomaActual].fondos + "</span><select id=\"arkaplan\"><option value=\"0\">" + lenguaje[idiomaActual].fondo0 + "</option><option value=\"1\">" + lenguaje[idiomaActual].fondo1 + "</option><option value=\"2\">" + lenguaje[idiomaActual].fondo2 + "</option><option value=\"3\">" + lenguaje[idiomaActual].fondo3 + "</option><option value=\"4\">" + lenguaje[idiomaActual].fondo4 + "</option><option value=\"5\">Textil</option><option value=\"6\">Sky Blue</option><option value=\"7\">Sky Purp</option><option value=\"8\">Sky Violet</option><option value=\"9\">Sky Orange</option><option value=\"10\">Sky Write</option><option value=\"11\">Arena 1</option><option value=\"12\">Arena 2</option><option value=\"13\">Arena 3</option><option value=\"14\">Arena 4</option></select></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><span class=\"settings-label\">Top</span><select id=\"zwtop\"><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><span class=\"settings_span\" >" + lenguaje[idiomaActual].skinVisible + "</span><input style=\"width: 60px\" type=\"text\" name=\"inputReplaceSkin\" id=\"inputReplaceSkin\" value=\"35\" maxlength=\"4\" onchange=\"setIdReplaceSkin(this)\"></div><div class=\"popup-sep\"></div><span id=\"zw-settings-version\" class=\"settings-line\"></span></div></div>";
      let v745 = localStorage.getItem("top8") === "true" ? true : localStorage.getItem("top8") === "false" ? false : theoKzObjects.top8;
      let v746 = localStorage.getItem("killFeed") === "true" ? true : localStorage.getItem("killFeed") === "false" ? false : theoKzObjects.killFeed;
      $("#toggleTop8").prop("checked", v745);
      $("#toggleKillFeed").prop("checked", v746);
      $("#top8List").toggle(v745);
      $("#killFeed").toggle(v746);
      if (localStorage.getItem("top8") === "true" || localStorage.getItem("top8") === "false") {
        theoKzObjects.top8 = v745;
        localStorage.setItem("top8", v745);
      }
      if (localStorage.getItem("killFeed") === "true" || localStorage.getItem("killFeed") === "false") {
        theoKzObjects.killFeed = v746;
        localStorage.setItem("killFeed", v746);
      }
      $("#toggleTop8").on("change", function () {
        theoKzObjects.top8 = this.checked;
        $("#top8List").toggle(this.checked);
        localStorage.setItem("top8", theoKzObjects.top8);
      });
      $("#toggleKillFeed").on("change", function () {
        theoKzObjects.killFeed = this.checked;
        $("#killFeed").toggle(this.checked);
        localStorage.setItem("killFeed", theoKzObjects.killFeed);
      });
      $("#toggleTop8").hover(function () {
        $("#tooltipTop8").fadeIn();
      }, function () {
        $("#tooltipTop8").fadeOut();
      });
      $("#toggleKillFeed").hover(function () {
        $("#tooltipKillFeed").fadeIn();
      }, function () {
        $("#tooltipKillFeed").fadeOut();
      });
      $("#teamCodeInput").on("input", function () {
        zwormData.teamCode = $(this).val();
        localStorage.setItem("teamCode", zwormData.teamCode);
        console.log("Team Code updated:", zwormData.teamCode);
      });
      let v747 = localStorage.getItem("teamCode");
      if (v747) {
        zwormData.teamCode = v747;
        $("#teamCodeInput").val(v747);
      }
      zw_selectedbackground = 0;
      zw_toplist = 10;
      var v$49 = $("#arkaplan");
      var v$50 = $("#zwtop");
      var v748 = localStorage.getItem("zw-background");
      if (v748) {
        var vParseInt2 = parseInt(v748);
        v$49.val(vParseInt2);
        zw_selectedbackground = vParseInt2;
      }
      const v749 = localStorage.getItem("zw-toplist");
      if (v749) {
        const vParseInt3 = parseInt(v749);
        zw_toplist = vParseInt3;
      }
      let v750 = _wrmxt.isNumberValid(theoKzObjects.idReplaceSkin);
      if (v750) {
        $("#inputReplaceSkin").val(theoKzObjects.idReplaceSkin);
      } else {
        let v751 = $("#inputReplaceSkin").val();
        v750 = _wrmxt.isNumberValid(v751);
        theoKzObjects.idReplaceSkin = v750 ? v751 : 35;
      }
      ;
      v$50.val(zw_toplist);
      v$49.change(function (p763) {
        zw_selectedbackground = this.value;
        var vObtenerImagenPorSeleccion = obtenerImagenPorSeleccion(zw_selectedbackground);
        if (vObtenerImagenPorSeleccion) {
          anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(vObtenerImagenPorSeleccion));
        }
        localStorage.setItem("zw-background", this.value.toString());
      });
      v$50.change(function (p764) {
        zw_toplist = this.value;
        localStorage.setItem("zw-toplist", this.value.toString());
      });
      $("#idkopyala").click(function () {
        navigator.clipboard.writeText(zw_userId);
      });
      vF1912.prototype.a = function () {
        vF1912.parent.prototype.a.call(this);
        if (!vF1912.Ek) {
          vF1912.Ek = true;
          var vF1114 = f11();
          vF1114.u.Pi(function () {
            if (vF1114.u.P()) {
              v$47.html(vF1114.u.zi());
            } else {
              v$47.html("0");
            }
          });
        }
      };
      vF1912.Fk = $("#coins-view");
      vF1912.Gk = $("#leaders-view");
      vF1912.Hk = $("#profile-view");
      vF1912.Ik = $("#settings-view");
      vF1912.Jk = $("#login-view");
      vF1912.Kk = $("#skins-view");
      vF1912.Lk = $("#store-view");
      vF1912.zwset = $("#wormtr-settings-view");
      vF1912.Mk = $("#wear-view");
      vF1912.Nk = $("#withdraw-consent-view");
      vF1912.Ok = $("#delete-account-view");
      vF1912.Pk = $("#please-wait-view");
      vF1912.prototype.ii = function () {
        vF63.fk.stop();
        vF63.fk.fadeOut(200);
        vF63.gk.stop();
        vF63.gk.fadeOut(200);
        vF63.hk.stop();
        vF63.hk.fadeOut(200);
        vF63.ik.stop();
        vF63.ik.fadeIn(200);
        vF63.jk.stop();
        vF63.jk.fadeOut(200);
        vF63.kk.stop();
        vF63.kk.fadeOut(200);
        vF63.nk.stop();
        vF63.nk.fadeIn(200);
        vF63.ok.stop();
        vF63.ok.fadeIn(200);
        v$45.html(this.ad);
        v$46.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      vF1912.prototype.Rk = function () {};
      vF1912.prototype.Sk = function () {
        vF72.Pk.stop();
        vF72.Pk.fadeIn(300);
      };
      vF1912.prototype.Qk = function () {
        vF72.Pk.stop();
        vF72.Pk.fadeOut(300);
      };
      return vF1912;
    }();
    var vF73 = function () {
      var v$51 = $("#store-buy-coins_125000");
      var v$52 = $("#store-buy-coins_50000");
      var v$53 = $("#store-buy-coins_16000");
      var v$54 = $("#store-buy-coins_7000");
      var v$55 = $("#store-buy-coins_3250");
      var v$56 = $("#store-buy-coins_1250");
      var vF1913 = f19(vF72, function () {
        vF72.call(this, f14("index.game.popup.menu.coins.tab"), false);
        var vF1115 = f11();
        var vThis18 = this;
        v$51.click(function () {
          vF1115.r.Cd();
          vThis18.Tk("coins_125000");
        });
        v$52.click(function () {
          vF1115.r.Cd();
          vThis18.Tk("coins_50000");
        });
        v$53.click(function () {
          vF1115.r.Cd();
          vThis18.Tk("coins_16000");
        });
        v$54.click(function () {
          vF1115.r.Cd();
          vThis18.Tk("coins_7000");
        });
        v$55.click(function () {
          vF1115.r.Cd();
          vThis18.Tk("coins_3250");
        });
        v$56.click(function () {
          vF1115.r.Cd();
          vThis18.Tk("coins_1250");
        });
      });
      vF1913.prototype.a = function () {
        vF1913.parent.prototype.a.call(this);
      };
      vF1913.prototype.Rk = function () {
        vF72.Fk.stop();
        vF72.Fk.fadeIn(200);
        vF72.Gk.stop();
        vF72.Gk.fadeOut(50);
        vF72.Hk.stop();
        vF72.Hk.fadeOut(50);
        vF72.Jk.stop();
        vF72.Jk.fadeOut(50);
        vF72.Ik.stop();
        vF72.Ik.fadeOut(50);
        vF72.Kk.stop();
        vF72.Kk.fadeOut(50);
        vF72.Lk.stop();
        vF72.Lk.fadeOut(50);
        vF72.Mk.stop();
        vF72.Mk.fadeOut(50);
        vF72.zwset.stop();
        vF72.zwset.fadeOut(50);
        vF72.Nk.stop();
        vF72.Nk.fadeOut(50);
        vF72.Ok.stop();
        vF72.Ok.fadeOut(50);
      };
      vF1913.prototype.ji = function () {
        f11().r.Dd();
      };
      vF1913.prototype.Tk = function (p765) {};
      return vF1913;
    }();
    var vF74 = function () {
      var v$57 = $("#highscore-table");
      var v$58 = $("#leaders-button-level");
      var v$59 = $("#leaders-button-highscore");
      var v$60 = $("#leaders-button-kills");
      var vF1914 = f19(vF72, function () {
        vF72.call(this, f14("index.game.popup.menu.leaders.tab"), true);
        var vF1116 = f11();
        var vThis19 = this;
        this.Uk = {};
        this.Vk = {
          Wk: {
            Xk: v$58,
            Yk: "byLevel"
          },
          Zk: {
            Xk: v$59,
            Yk: "byHighScore"
          },
          $k: {
            Xk: v$60,
            Yk: "byKillsAndHeadShots"
          }
        };
        v$58.click(function () {
          vF1116.r.Cd();
          vThis19._k(vThis19.Vk.Wk);
        });
        v$59.click(function () {
          vF1116.r.Cd();
          vThis19._k(vThis19.Vk.Zk);
        });
        v$60.click(function () {
          vF1116.r.Cd();
          vThis19._k(vThis19.Vk.$k);
        });
      });
      vF1914.prototype.a = function () {
        vF1914.parent.prototype.a.call(this);
      };
      vF1914.prototype.Rk = function () {
        vF72.Fk.stop();
        vF72.Fk.fadeOut(50);
        vF72.Gk.stop();
        vF72.Gk.fadeIn(200);
        vF72.Hk.stop();
        vF72.Hk.fadeOut(50);
        vF72.Jk.stop();
        vF72.Jk.fadeOut(50);
        vF72.Ik.stop();
        vF72.Ik.fadeOut(50);
        vF72.Kk.stop();
        vF72.Kk.fadeOut(50);
        vF72.Lk.stop();
        vF72.Lk.fadeOut(50);
        vF72.Mk.stop();
        vF72.Mk.fadeOut(50);
        vF72.zwset.stop();
        vF72.zwset.fadeOut(50);
        vF72.Nk.stop();
        vF72.Nk.fadeOut(50);
        vF72.Ok.stop();
        vF72.Ok.fadeOut(50);
      };
      vF1914.prototype.ji = function () {
        f11().r.Dd();
        var vThis20 = this;
        this.Sk();
        $.get(vAtob + "/pub/leaders", function (p766) {
          vThis20.Uk = p766;
          vThis20._k(vThis20.al ?? vThis20.Vk.Wk);
          vThis20.Qk();
        }).done(function () {
          vThis20.Qk();
        });
      };
      vF1914.prototype._k = function (p767) {
        this.al = p767;
        for (var v752 in this.Vk) {
          if (this.Vk.hasOwnProperty(v752)) {
            var v753 = this.Vk[v752];
            v753.Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass("pressed");
        for (var v754 = this.Uk[this.al.Yk], vLS4 = "", vLN0106 = 0; vLN0106 < v754.length; vLN0106++) {
          var v755 = v754[vLN0106];
          vLS4 += "<div class=\"table-row\"><span>" + (vLN0106 + 1) + "</span><span><img src=\"" + v755.avatarUrl + "\"/></span><span>" + v755.username + "</span><span>" + v755.level + "</span><span>" + v755.highScore + "</span><span>" + v755.headShots + " / " + v755.kills + "</span></div>";
        }
        v$57.empty();
        v$57.append(vLS4);
      };
      return vF1914;
    }();
    var vF75 = function () {
      var v$61 = $("#popup-login-gg");
      var v$62 = $("#popup-login-fb");
      var vF1915 = f19(vF72, function () {
        vF72.call(this, f14("index.game.popup.menu.login.tab"), false);
        var vF1117 = f11();
        var vThis21 = this;
        v$61.click(function () {
          vF1117.r.Cd();
          vThis21.Sk();
          vF1117.u.Qi(function () {
            vThis21.Qk();
          });
          setTimeout(function () {
            vThis21.Qk();
          }, 10000);
          vF1117.u.Zi();
        });
        v$62.click(function () {
          vF1117.r.Cd();
          vThis21.Sk();
          vF1117.u.Qi(function () {
            vThis21.Qk();
          });
          setTimeout(function () {
            vThis21.Qk();
          }, 10000);
          vF1117.u.Vi();
        });
      });
      vF1915.prototype.a = function () {
        vF1915.parent.prototype.a.call(this);
      };
      vF1915.prototype.Rk = function () {
        vF72.Fk.stop();
        vF72.Fk.fadeOut(50);
        vF72.Gk.stop();
        vF72.Gk.fadeOut(50);
        vF72.Hk.stop();
        vF72.Hk.fadeOut(50);
        vF72.Jk.stop();
        vF72.Jk.fadeIn(200);
        vF72.Ik.stop();
        vF72.Ik.fadeOut(50);
        vF72.Kk.stop();
        vF72.Kk.fadeOut(50);
        vF72.Lk.stop();
        vF72.Lk.fadeOut(50);
        vF72.Mk.stop();
        vF72.Mk.fadeOut(50);
        vF72.zwset.stop();
        vF72.zwset.fadeOut(50);
        vF72.Nk.stop();
        vF72.Nk.fadeOut(50);
        vF72.Ok.stop();
        vF72.Ok.fadeOut(50);
      };
      vF1915.prototype.ji = function () {
        f11().r.Dd();
      };
      return vF1915;
    }();
    var vF76 = function () {
      var v$63 = $("#profile-avatar");
      var v$64 = $("#profile-username");
      var v$65 = $("#profile-experience-bar");
      var v$66 = $("#profile-experience-val");
      var v$67 = $("#profile-level");
      var v$68 = $("#profile-stat-highScore");
      var v$69 = $("#profile-stat-bestSurvivalTime");
      var v$70 = $("#profile-stat-kills");
      var v$71 = $("#profile-stat-headshots");
      var v$72 = $("#profile-stat-gamesPlayed");
      var v$73 = $("#profile-stat-totalTimeSpent");
      var v$74 = $("#profile-stat-registrationDate");
      var vF1916 = f19(vF72, function () {
        vF72.call(this, f14("index.game.popup.menu.profile.tab"), true);
      });
      vF1916.prototype.a = function () {
        vF1916.parent.prototype.a.call(this);
      };
      vF1916.prototype.Rk = function () {
        vF72.Fk.stop();
        vF72.Fk.fadeOut(50);
        vF72.Gk.stop();
        vF72.Gk.fadeOut(50);
        vF72.Hk.stop();
        vF72.Hk.fadeIn(200);
        vF72.Jk.stop();
        vF72.Jk.fadeOut(50);
        vF72.Ik.stop();
        vF72.Ik.fadeOut(50);
        vF72.Kk.stop();
        vF72.Kk.fadeOut(50);
        vF72.Lk.stop();
        vF72.Lk.fadeOut(50);
        vF72.Mk.stop();
        vF72.Mk.fadeOut(50);
        vF72.zwset.stop();
        vF72.zwset.fadeOut(50);
        vF72.Nk.stop();
        vF72.Nk.fadeOut(50);
        vF72.Ok.stop();
        vF72.Ok.fadeOut(50);
      };
      vF1916.prototype.ji = function () {
        var vF1118 = f11();
        vF1118.r.Dd();
        var v756 = vF1118.u.Oi();
        var v757 = moment([v756.year, v756.month - 1, v756.day]).format("LL");
        v$64.html(vF1118.u.wi());
        v$63.attr("src", vF1118.u.xi());
        v$65.width(vF1118.u.Bi() * 100 / vF1118.u.Ci() + "%");
        v$66.html(vF1118.u.Bi() + " / " + vF1118.u.Ci());
        v$67.html(vF1118.u.Ai());
        v$68.html(vF1118.u.Ii());
        v$69.html(f16(vF1118.u.Ji()));
        v$70.html(vF1118.u.Ki());
        v$71.html(vF1118.u.Li());
        v$72.html(vF1118.u.Mi());
        v$73.html(f16(vF1118.u.Ni()));
        v$74.html(v757);
      };
      return vF1916;
    }();
    var vF77 = function () {
      var v$75 = $("#settings-music-enabled-switch");
      var v$76 = $("#settings-sfx-enabled-switch");
      var v$77 = $("#settings-show-names-switch");
      var v$78 = $("#popup-logout");
      var v$79 = $("#popup-logout-container");
      var v$80 = $("#popup-delete-account");
      var v$81 = $("#popup-delete-account-container");
      var v$82 = $("#popup-withdraw-consent");
      var vF1917 = f19(vF72, function () {
        vF72.call(this, f14("index.game.popup.menu.settings.tab"), false);
        var vThis22 = this;
        var vF1119 = f11();
        v$75.click(function () {
          var v758 = !!v$75.prop("checked");
          f13(vF23.Me, v758, 30);
          vF1119.r.td(v758);
          vF1119.r.Cd();
        });
        v$76.click(function () {
          var v759 = !!v$76.prop("checked");
          f13(vF23.Ne, v759, 30);
          vF1119.r.rd(v759);
          vF1119.r.Cd();
        });
        v$77.click(function () {
          vF1119.r.Cd();
        });
        v$78.click(function () {
          vF1119.r.Cd();
          vThis22.Sk();
          setTimeout(function () {
            vThis22.Qk();
          }, 2000);
          vF1119.u.Wi();
        });
        v$80.click(function () {
          if (vF1119.u.P()) {
            vF1119.r.Cd();
            vF1119.s.I(vF1119.s.Vh);
          } else {
            vF1119.r.Hd();
          }
        });
        v$82.click(function () {
          if (vF1119.Y()) {
            vF1119.r.Cd();
            vF1119.s.I(vF1119.s.Uh);
          } else {
            vF1119.r.Hd();
          }
        });
      });
      vF1917.prototype.a = function () {
        vF1917.parent.prototype.a.call(this);
        var vF1120 = f11();
        var vUndefined15 = undefined;
        switch (f12(vF23.Me)) {
          case "false":
            vUndefined15 = false;
            break;
          default:
            vUndefined15 = true;
        }
        v$75.prop("checked", vUndefined15);
        vF1120.r.td(vUndefined15);
        var vUndefined16 = undefined;
        switch (f12(vF23.Ne)) {
          case "false":
            vUndefined16 = false;
            break;
          default:
            vUndefined16 = true;
        }
        v$76.prop("checked", vUndefined16);
        vF1120.r.rd(vUndefined16);
        var vUndefined17 = undefined;
        switch (f12(vF23.ya)) {
          case "false":
            vUndefined17 = false;
            break;
          default:
            vUndefined17 = true;
        }
        console.log("Load sPN: " + vUndefined17);
        v$77.prop("checked", vUndefined17);
        vF1120.u.V(function () {
          v$79.toggle(vF1120.u.P());
          v$81.toggle(vF1120.u.P());
        });
      };
      vF1917.prototype.Rk = function () {
        vF72.Fk.stop();
        vF72.Fk.fadeOut(50);
        vF72.Gk.stop();
        vF72.Gk.fadeOut(50);
        vF72.Hk.stop();
        vF72.Hk.fadeOut(50);
        vF72.Jk.stop();
        vF72.Jk.fadeOut(50);
        vF72.Ik.stop();
        vF72.Ik.fadeIn(200);
        vF72.Kk.stop();
        vF72.Kk.fadeOut(50);
        vF72.Lk.stop();
        vF72.Lk.fadeOut(50);
        vF72.Mk.stop();
        vF72.Mk.fadeOut(50);
        vF72.zwset.stop();
        vF72.zwset.fadeOut(50);
        vF72.Nk.stop();
        vF72.Nk.fadeOut(50);
        vF72.Ok.stop();
        vF72.Ok.fadeOut(50);
      };
      vF1917.prototype.ji = function () {
        var vF1121 = f11();
        vF1121.r.Dd();
        if (vF1121.Y()) {
          v$82.show();
        } else {
          v$82.hide();
        }
      };
      vF1917.prototype.wa = function () {
        return v$77.prop("checked");
      };
      return vF1917;
    }();
    var vF78 = function () {
      var v$83 = $("#store-view-canv");
      var v$84 = $("#skin-description-text");
      var v$85 = $("#skin-group-description-text");
      var v$86 = $("#store-locked-bar");
      var v$87 = $("#store-locked-bar-text");
      var v$88 = $("#store-buy-button");
      var v$89 = $("#store-item-price");
      var v$90 = $("#store-groups");
      var v$91 = $("#store-view-prev");
      var v$92 = $("#store-view-next");
      var vF1918 = f19(vF72, function () {
        vF72.call(this, f14("index.game.popup.menu.skins.tab"), true);
        var vThis23 = this;
        var vF1122 = f11();
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new vF62(v$83);
        v$88.click(function () {
          vF1122.r.Cd();
          vThis23.fl();
        });
        v$91.click(function () {
          vF1122.r.Cd();
          vThis23.bl.gl();
        });
        v$92.click(function () {
          vF1122.r.Cd();
          vThis23.bl.hl();
        });
      });
      vF1918.prototype.a = function () {
        vF1918.parent.prototype.a.call(this);
        var vThis24 = this;
        var vF1123 = f11();
        vF1123.p.ca(function () {
          var v760 = vF1123.p.Ac();
          if (v760 != null) {
            vThis24.cl = [];
            for (var vLN0107 = 0; vLN0107 < v760.skinGroupArrayDict.length; vLN0107++) {
              vThis24.cl.push(new vF80(vThis24, v760.skinGroupArrayDict[vLN0107]));
            }
            vThis24.dl = {};
            for (var vLN0108 = 0; vLN0108 < v760.skinArrayDict.length; vLN0108++) {
              var v761 = v760.skinArrayDict[vLN0108];
              vThis24.dl[v761.id] = v761;
            }
          }
        });
        this.il(false);
        vF1123.t.xh(function () {
          vThis24.il(false);
        });
      };
      vF1918.prototype.Rk = function () {
        vF72.Fk.stop();
        vF72.Fk.fadeOut(50);
        vF72.Gk.stop();
        vF72.Gk.fadeOut(50);
        vF72.Hk.stop();
        vF72.Hk.fadeOut(50);
        vF72.Jk.stop();
        vF72.Jk.fadeOut(50);
        vF72.Ik.stop();
        vF72.Ik.fadeOut(50);
        vF72.Kk.stop();
        vF72.Kk.fadeIn(200);
        vF72.Lk.stop();
        vF72.Lk.fadeOut(50);
        vF72.Mk.stop();
        vF72.Mk.fadeOut(50);
        vF72.zwset.stop();
        vF72.zwset.fadeOut(50);
        vF72.Nk.stop();
        vF72.Nk.fadeOut(50);
        vF72.Ok.stop();
        vF72.Ok.fadeOut(50);
      };
      vF1918.prototype.ji = function () {
        f11().r.Dd();
        this.jl();
        this.el.Le(true);
      };
      vF1918.prototype.ei = function () {
        this.el.Le(false);
      };
      vF1918.prototype.Ra = function () {
        this.el.Ra();
      };
      vF1918.prototype.Pa = function (p768, p769) {
        this.el.Pa();
      };
      vF1918.prototype.jl = function () {
        var vThis25 = this;
        var vThis26 = this;
        var vF1124 = f11();
        v$90.empty();
        for (var vLN0109 = 0; vLN0109 < this.cl.length; vLN0109++) {
          (function (p770) {
            var v762 = vThis25.cl[p770];
            var v763 = document.createElement("li");
            v$90.append(v763);
            var v$93 = $(v763);
            v$93.html(v762.kl());
            v$93.click(function () {
              vF1124.r.Cd();
              vThis26.ll(v762);
            });
            v762.ml = v$93;
          })(vLN0109);
        }
        if (this.cl.length > 0) {
          var v764 = vF1124.t.ha(vF45.ia);
          for (var vLN0109 = 0; vLN0109 < this.cl.length; vLN0109++) {
            var v765 = this.cl[vLN0109];
            for (var v766 = v765.nl.list, vLN0110 = 0; vLN0110 < v766.length; vLN0110++) {
              if (v766[vLN0110] == v764) {
                v765.ol = vLN0110;
                this.ll(v765);
                return;
              }
            }
          }
          this.ll(this.cl[0]);
        }
      };
      vF1918.prototype.ll = function (p771) {
        if (this.bl != p771) {
          var vF1125 = f11();
          this.bl = p771;
          v$90.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          v$85.html("");
          if (p771.nl != null) {
            var v767 = vF1125.p.Ac().textDict[p771.nl.description];
            if (v767 != null) {
              v$85.html(f17(f15(v767)));
            }
          }
          this.il(true);
        }
      };
      vF1918.prototype.pl = function () {
        if (this.bl == null) {
          return vF40.Yg();
        } else {
          return this.bl.ql();
        }
      };
      vF1918.prototype.fl = function () {
        var vThis27 = this;
        this.pl().ah(function (p772) {
          vThis27.rl(p772);
        });
      };
      vF1918.prototype.rl = function (p773) {
        var vThis28 = this;
        var vF1126 = f11();
        var v768 = this.dl[p773].price;
        if (!(vF1126.u.zi() < v768)) {
          this.Sk();
          var v769 = vF1126.t.ha(vF45.ia);
          var v770 = vF1126.t.ha(vF45.ja);
          var v771 = vF1126.t.ha(vF45.ka);
          var v772 = vF1126.t.ha(vF45.la);
          var v773 = vF1126.t.ha(vF45.ma);
          vF1126.u.Ui(p773, vF45.ia, function () {
            vF1126.t.Bh(v769, vF45.ia);
            vF1126.t.Bh(v770, vF45.ja);
            vF1126.t.Bh(v771, vF45.ka);
            vF1126.t.Bh(v772, vF45.la);
            vF1126.t.Bh(v773, vF45.ma);
            if (vF1126.u.Ch(p773, vF45.ia)) {
              vF1126.t.Bh(p773, vF45.ia);
            }
            vThis28.Qk();
          });
        }
      };
      vF1918.prototype.il = function (p774) {
        var vF1127 = f11();
        this.el.bk(vF1127.t.ha(vF45.ja), false, false);
        this.el.ck(vF1127.t.ha(vF45.ka), false, false);
        this.el.dk(vF1127.t.ha(vF45.la), false, false);
        this.el.ek(vF1127.t.ha(vF45.ma), false, false);
        var v774 = this.pl();
        if (v774._g()) {
          var v775 = v774.$g();
          var v776 = this.dl[v775];
          var v777 = false;
          if (vF1127.t.Ja(v775, vF45.ia)) {
            v$86.hide();
            v$88.hide();
          } else if (v776 == null || v776.nonbuyable == 1) {
            v777 = true;
            v$86.show();
            v$88.hide();
            v$87.text(f14("index.game.popup.menu.store.locked"));
            if (v776 != null && v776.nonbuyable && v776.nonbuyableCause != null) {
              var v778 = vF1127.p.Ac().textDict[v776.nonbuyableCause];
              if (v778 != null) {
                v$87.text(f15(v778));
              }
            }
          } else {
            v$86.hide();
            v$88.show();
            v$89.html(v776.price);
          }
          v$84.html("ID: " + v775 + " TYPE: " + vF45.ia);
          if (v776 != null && v776.description != null) {
            var v779 = vF1127.p.Ac().textDict[v776.description];
            if (v779 != null) {
              v$84.html(f17(f15(v779)));
            }
          }
          this.el.ak(v775, true, v777);
          if (p774) {
            vF1127.t.Bh(v775, vF45.ia);
          }
        }
      };
      var vF80 = function () {
        function f95(p775, p776) {
          this.sl = p775;
          this.ol = 0;
          this.nl = p776;
        }
        f95.prototype.gl = function () {
          if (--this.ol < 0) {
            this.ol = this.nl.list.length - 1;
          }
          this.sl.il(true);
        };
        f95.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0;
          }
          this.sl.il(true);
        };
        f95.prototype.kl = function () {
          let vF152 = f15(this.nl.name);
          console.log(this.nl);
          if (this.nl.img) {
            vF152 = "<img src=\"" + this.nl.img + "\" height=\"43\" width=\"180\" />";
          }
          return vF152;
        };
        f95.prototype.ql = function () {
          if (this.ol >= this.nl.list.length) {
            return vF40.Yg();
          } else {
            return vF40.Zg(this.nl.list[this.ol]);
          }
        };
        return f95;
      }();
      return vF1918;
    }();
    var vF81 = function () {
      var v$94 = $("#store-go-coins-button");
      var v$95 = $("#store-go-skins-button");
      var v$96 = $("#store-go-wear-button");
      var vF1919 = f19(vF72, function () {
        vF72.call(this, f14("index.game.popup.menu.store.tab"), true);
        var vF1128 = f11();
        v$94.click(function () {
          vF1128.r.Cd();
          vF1128.s.I(vF1128.s.Wh);
        });
        v$95.click(function () {
          vF1128.r.Cd();
          vF1128.s.I(vF1128.s.$h);
        });
        v$96.click(function () {
          vF1128.r.Cd();
          vF1128.s.I(vF1128.s.ai);
        });
      });
      vF1919.prototype.a = function () {
        vF1919.parent.prototype.a.call(this);
      };
      vF1919.prototype.Rk = function () {
        vF72.Fk.stop();
        vF72.Fk.fadeOut(50);
        vF72.Gk.stop();
        vF72.Gk.fadeOut(50);
        vF72.Hk.stop();
        vF72.Hk.fadeOut(50);
        vF72.Jk.stop();
        vF72.Jk.fadeOut(50);
        vF72.Ik.stop();
        vF72.Ik.fadeOut(50);
        vF72.Kk.stop();
        vF72.Kk.fadeOut(50);
        vF72.Lk.stop();
        vF72.Lk.fadeIn(200);
        vF72.Mk.stop();
        vF72.Mk.fadeOut(50);
        vF72.zwset.stop();
        vF72.zwset.fadeOut(50);
        vF72.Nk.stop();
        vF72.Nk.fadeOut(50);
        vF72.Ok.stop();
        vF72.Ok.fadeOut(50);
      };
      vF1919.prototype.ji = function () {
        f11().r.Dd();
      };
      return vF1919;
    }();
    var vF82 = function () {
      var v$97 = $("#settings-kufur-isim");
      var vF1920 = f19(vF72, function () {
        vF72.call(this, "ZWORM SETTINGS", 0);
      });
      vF1920.prototype.a = function () {
        vF1920.parent.prototype.a.call(this);
      };
      vF1920.prototype.Rk = function () {
        vF72.Fk.stop();
        vF72.Fk.fadeOut(50);
        vF72.Gk.stop();
        vF72.Gk.fadeOut(50);
        vF72.Hk.stop();
        vF72.Hk.fadeOut(50);
        vF72.Jk.stop();
        vF72.Jk.fadeOut(50);
        vF72.Kk.stop();
        vF72.Kk.fadeOut(50);
        vF72.Lk.stop();
        vF72.Lk.fadeOut(50);
        vF72.Mk.stop();
        vF72.Mk.fadeOut(50);
        vF72.Nk.stop();
        vF72.Nk.fadeOut(50);
        vF72.Ok.stop();
        vF72.Ok.fadeOut(50);
        vF72.zwset.stop();
        vF72.zwset.fadeIn(200);
      };
      vF1920.prototype.ji = function () {
        var vF1129 = f11();
        vF1129.r.Dd();
      };
      return vF1920;
    }();
    var vF83 = function () {
      var v$98 = $("#wear-view-canv");
      var v$99 = $("#wear-description-text");
      var v$100 = $("#wear-locked-bar");
      var v$101 = $("#wear-locked-bar-text");
      var v$102 = $("#wear-buy-button");
      var v$103 = $("#wear-item-price");
      var v$104 = $("#wear-eyes-button");
      var v$105 = $("#wear-mouths-button");
      var v$106 = $("#wear-glasses-button");
      var v$107 = $("#wear-hats-button");
      var v$108 = $("#wear-tint-chooser");
      var v$109 = $("#wear-view-prev");
      var v$110 = $("#wear-view-next");
      var vF1921 = f19(vF72, function () {
        var vThis29 = this;
        vF72.call(this, f14("index.game.popup.menu.wear.tab"), true);
        var vF1130 = f11();
        var vThis30 = this;
        this.tl = [];
        this.ja = new vF84(this, vF45.ja, v$104);
        this.ka = new vF84(this, vF45.ka, v$105);
        this.la = new vF84(this, vF45.la, v$106);
        this.ma = new vF84(this, vF45.ma, v$107);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new vF62(v$98);
        v$102.click(function () {
          vF1130.r.Cd();
          vThis30.Bl();
        });
        v$109.click(function () {
          vF1130.r.Cd();
          vThis30.ul.Cl();
        });
        v$110.click(function () {
          vF1130.r.Cd();
          vThis30.ul.Dl();
        });
        v$104.click(function () {
          vF1130.r.Cd();
          vThis30.El(vThis29.ja);
        });
        v$105.click(function () {
          vF1130.r.Cd();
          vThis30.El(vThis29.ka);
        });
        v$106.click(function () {
          vF1130.r.Cd();
          vThis30.El(vThis29.la);
        });
        v$107.click(function () {
          vF1130.r.Cd();
          vThis30.El(vThis29.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      vF1921.prototype.a = function () {
        vF1921.parent.prototype.a.call(this);
        var vF1131 = f11();
        var vThis31 = this;
        vF1131.p.ca(function () {
          var v780 = vF1131.p.Ac();
          if (v780 != null) {
            vThis31.vl = v780.eyesDict;
            vThis31.wl = v780.mouthDict;
            vThis31.xl = v780.glassesDict;
            vThis31.yl = v780.hatDict;
            vThis31.zl = v780.colorDict;
            vThis31.ja.Fl(v780.eyesVariantArray);
            vThis31.ja.Gl(vThis31.vl);
            vThis31.ka.Fl(v780.mouthVariantArray);
            vThis31.ka.Gl(vThis31.wl);
            vThis31.la.Fl(v780.glassesVariantArray);
            vThis31.la.Gl(vThis31.xl);
            vThis31.ma.Fl(v780.hatVariantArray);
            vThis31.ma.Gl(vThis31.yl);
          }
        });
        this.il(false);
        vF1131.t.xh(function () {
          vThis31.il(false);
        });
      };
      vF1921.prototype.Rk = function () {
        vF72.Fk.stop();
        vF72.Fk.fadeOut(50);
        vF72.Gk.stop();
        vF72.Gk.fadeOut(50);
        vF72.Hk.stop();
        vF72.Hk.fadeOut(50);
        vF72.Jk.stop();
        vF72.Jk.fadeOut(50);
        vF72.Ik.stop();
        vF72.Ik.fadeOut(50);
        vF72.Kk.stop();
        vF72.Kk.fadeOut(50);
        vF72.Lk.stop();
        vF72.Lk.fadeOut(50);
        vF72.Mk.stop();
        vF72.Mk.fadeIn(200);
        vF72.zwset.stop();
        vF72.zwset.fadeOut(50);
        vF72.Nk.stop();
        vF72.Nk.fadeOut(50);
        vF72.Ok.stop();
        vF72.Ok.fadeOut(50);
      };
      vF1921.prototype.ji = function () {
        f11().r.Dd();
        this.El(this.ul ?? this.ja);
        this.Al.Le(true);
      };
      vF1921.prototype.ei = function () {
        this.Al.Le(false);
      };
      vF1921.prototype.Ra = function () {
        this.Al.Ra();
      };
      vF1921.prototype.Pa = function (p777, p778) {
        this.Al.Pa();
      };
      vF1921.prototype.El = function (p779) {
        this.ul = p779;
        for (var vLN0111 = 0; vLN0111 < this.tl.length; vLN0111++) {
          this.tl[vLN0111].Xk.removeClass("pressed");
        }
        this.ul.Xk.addClass("pressed");
        this.ul.ii();
      };
      vF1921.prototype.Hl = function () {
        if (this.ul == null) {
          return vF40.Yg();
        } else {
          return vF40.Zg({
            Lb: this.ul.ql(),
            rc: this.ul.rc
          });
        }
      };
      vF1921.prototype.Bl = function () {
        var vThis32 = this;
        this.Hl().ah(function (p780) {
          vThis32.Ui(p780.Lb, p780.rc);
        });
      };
      vF1921.prototype.Ui = function (p781, p782) {
        var vThis33 = this;
        var vF1132 = f11();
        var vUndefined18 = undefined;
        switch (p782) {
          case vF45.ja:
            vUndefined18 = this.vl[p781].price;
            break;
          case vF45.ka:
            vUndefined18 = this.wl[p781].price;
            break;
          case vF45.la:
            vUndefined18 = this.xl[p781].price;
            break;
          case vF45.ma:
            vUndefined18 = this.yl[p781].price;
            break;
          default:
            return;
        }
        if (!(vF1132.u.zi() < vUndefined18)) {
          this.Sk();
          var v781 = vF1132.t.ha(vF45.ia);
          var v782 = vF1132.t.ha(vF45.ja);
          var v783 = vF1132.t.ha(vF45.ka);
          var v784 = vF1132.t.ha(vF45.la);
          var v785 = vF1132.t.ha(vF45.ma);
          vF1132.u.Ui(p781, p782, function () {
            vF1132.t.Bh(v781, vF45.ia);
            vF1132.t.Bh(v782, vF45.ja);
            vF1132.t.Bh(v783, vF45.ka);
            vF1132.t.Bh(v784, vF45.la);
            vF1132.t.Bh(v785, vF45.ma);
            if (vF1132.u.Ch(p781, p782)) {
              vF1132.t.Bh(p781, p782);
            }
            vThis33.Qk();
          });
        }
      };
      vF1921.prototype.Il = function (p783, p784) {
        switch (p784) {
          case vF45.ja:
            return this.vl[p783];
          case vF45.ka:
            return this.wl[p783];
          case vF45.la:
            return this.xl[p783];
          case vF45.ma:
            return this.yl[p783];
        }
        return null;
      };
      vF1921.prototype.il = function (p785) {
        var vF1133 = f11();
        this.Al.ak(vF1133.t.ha(vF45.ia), false, false);
        this.Al.bk(vF1133.t.ha(vF45.ja), false, false);
        this.Al.ck(vF1133.t.ha(vF45.ka), false, false);
        this.Al.dk(vF1133.t.ha(vF45.la), false, false);
        this.Al.ek(vF1133.t.ha(vF45.ma), false, false);
        var v786 = this.Hl();
        if (v786._g()) {
          var v787 = v786.$g();
          var v788 = this.Il(v787.Lb, v787.rc);
          var v789 = false;
          if (vF1133.t.Ja(v787.Lb, v787.rc)) {
            v$100.hide();
            v$102.hide();
          } else if (v788 == null || v788.nonbuyable == 1) {
            v789 = true;
            v$100.show();
            v$102.hide();
            v$101.text(f14("index.game.popup.menu.store.locked"));
            if (v788 != null && v788.nonbuyable && v788.nonbuyableCause != null) {
              var v790 = vF1133.p.Ac().textDict[v788.nonbuyableCause];
              if (v790 != null) {
                v$101.text(f15(v790));
              }
            }
          } else {
            v$100.hide();
            v$102.show();
            v$103.html(v788.price);
          }
          v$99.html("ID: " + v787.Lb);
          if (v788 != null && v788.description != null) {
            var v791 = vF1133.p.Ac().textDict[v788.description];
            if (v791 != null) {
              v$99.html(f17(f15(v791)));
            }
          }
          switch (v787.rc) {
            case vF45.ja:
              this.Al.bk(v787.Lb, true, v789);
              break;
            case vF45.ka:
              this.Al.ck(v787.Lb, true, v789);
              break;
            case vF45.la:
              this.Al.dk(v787.Lb, true, v789);
              break;
            case vF45.ma:
              this.Al.ek(v787.Lb, true, v789);
              break;
          }
          if (p785) {
            vF1133.t.Bh(v787.Lb, v787.rc);
          }
        }
      };
      var vF84 = function () {
        function f96(p786, p787, p788) {
          this.sl = p786;
          this.rc = p787;
          this.Xk = p788;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -10;
          this.Ml = -10;
        }
        f96.prototype.Fl = function (p789) {
          this.Kl = p789;
        };
        f96.prototype.Gl = function (p790) {
          this.Jl = p790;
        };
        f96.prototype.ii = function () {
          var vF1134 = f11();
          var v792 = vF1134.t.ha(this.rc);
          for (var vLN0112 = 0; vLN0112 < this.Kl.length; vLN0112++) {
            for (var vLN0113 = 0; vLN0113 < this.Kl[vLN0112].length; vLN0113++) {
              if (this.Kl[vLN0112][vLN0113] == v792) {
                this.Nl(vLN0112);
                this.Ol(vLN0113);
                return;
              }
            }
          }
          this.Nl(0);
          this.Ol(0);
        };
        f96.prototype.Cl = function () {
          var v793 = this.Ll - 1;
          if (v793 < 0) {
            v793 = this.Kl.length - 1;
          }
          this.Nl(v793);
          this.Ol(this.Ml % this.Kl[v793].length);
        };
        f96.prototype.Dl = function () {
          var v794 = this.Ll + 1;
          if (v794 >= this.Kl.length) {
            v794 = 0;
          }
          this.Nl(v794);
          this.Ol(this.Ml % this.Kl[v794].length);
        };
        f96.prototype.Nl = function (p791) {
          var vThis34 = this;
          if (!(p791 < 0) && !(p791 >= this.Kl.length)) {
            this.Ll = p791;
            v$108.empty();
            var v795 = this.Kl[this.Ll];
            if (v795.length > 1) {
              for (var vLN0114 = 0; vLN0114 < v795.length; vLN0114++) {
                (function (p792) {
                  var v796 = v795[p792];
                  var v797 = vThis34.Jl[v796];
                  var v798 = "#" + vThis34.sl.zl[v797.prime];
                  var v$111 = $("<div style=\"border-color:" + v798 + "\"></div>");
                  v$111.click(function () {
                    f11().r.Cd();
                    vThis34.Ol(p792);
                  });
                  v$108.append(v$111);
                })(vLN0114);
              }
            }
          }
        };
        f96.prototype.Ol = function (p793) {
          if (!(p793 < 0) && !(p793 >= this.Kl[this.Ll].length)) {
            this.Ml = p793;
            v$108.children().css("background-color", "transparent");
            var v799 = v$108.children(":nth-child(" + (1 + p793) + ")");
            v799.css("background-color", v799.css("border-color"));
            this.sl.il(true);
          }
        };
        f96.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return f96;
      }();
      return vF1921;
    }();
    var vF85 = function () {
      var v$112 = $("#withdraw-consent-yes");
      var v$113 = $("#withdraw-consent-no");
      var vF1922 = f19(vF72, function () {
        vF72.call(this, f14("index.game.popup.menu.consent.tab"), false);
        var vF1135 = f11();
        v$112.click(function () {
          vF1135.r.Cd();
          if (vF1135.Y()) {
            vF1135.s.I(vF1135.s.F);
            vF1135.$(false, true);
            vF1135.s.aa._(new vF90());
          } else {
            vF1135.s.gi();
          }
        });
        v$113.click(function () {
          vF1135.r.Cd();
          vF1135.s.gi();
        });
      });
      vF1922.prototype.a = function () {
        vF1922.parent.prototype.a.call(this);
      };
      vF1922.prototype.Rk = function () {
        vF72.Fk.stop();
        vF72.Fk.fadeOut(50);
        vF72.Gk.stop();
        vF72.Gk.fadeOut(50);
        vF72.Hk.stop();
        vF72.Hk.fadeOut(50);
        vF72.Jk.stop();
        vF72.Jk.fadeOut(50);
        vF72.Ik.stop();
        vF72.Ik.fadeOut(50);
        vF72.Kk.stop();
        vF72.Kk.fadeOut(50);
        vF72.Lk.stop();
        vF72.Lk.fadeOut(50);
        vF72.Mk.stop();
        vF72.Mk.fadeOut(50);
        vF72.zwset.stop();
        vF72.zwset.fadeOut(50);
        vF72.Nk.stop();
        vF72.Nk.fadeIn(200);
        vF72.Ok.stop();
        vF72.Ok.fadeOut(50);
      };
      vF1922.prototype.ji = function () {
        f11().r.Dd();
      };
      return vF1922;
    }();
    var vF86 = function () {
      var v$114 = $("#delete-account-timer");
      var v$115 = $("#delete-account-yes");
      var v$116 = $("#delete-account-no");
      var vF1923 = f19(vF72, function () {
        vF72.call(this, f14("index.game.popup.menu.delete.tab"), false);
        var vF1136 = f11();
        v$115.click(function () {
          vF1136.r.Cd();
          if (vF1136.u.P()) {
            vF1136.u.bj();
            vF1136.u.Wi();
          } else {
            vF1136.s.gi();
          }
        });
        v$116.click(function () {
          vF1136.r.Cd();
          vF1136.s.gi();
        });
        this.Pl = [];
      });
      vF1923.prototype.a = function () {
        vF1923.parent.prototype.a.call(this);
      };
      vF1923.prototype.Rk = function () {
        vF72.Fk.stop();
        vF72.Fk.fadeOut(50);
        vF72.Gk.stop();
        vF72.Gk.fadeOut(50);
        vF72.Hk.stop();
        vF72.Hk.fadeOut(50);
        vF72.Jk.stop();
        vF72.Jk.fadeOut(50);
        vF72.Ik.stop();
        vF72.Ik.fadeOut(50);
        vF72.Kk.stop();
        vF72.Kk.fadeOut(50);
        vF72.Lk.stop();
        vF72.Lk.fadeOut(50);
        vF72.Mk.stop();
        vF72.Mk.fadeOut(50);
        vF72.zwset.stop();
        vF72.zwset.fadeOut(50);
        vF72.Nk.stop();
        vF72.Nk.fadeOut(50);
        vF72.Ok.stop();
        vF72.Ok.fadeIn(200);
      };
      vF1923.prototype.ji = function () {
        f11().r.Hd();
        v$115.stop();
        v$115.hide();
        v$114.stop();
        v$114.show();
        v$114.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          v$114.text(".. 9 ..");
        }, 1000);
        this.Rl(function () {
          v$114.text(".. 8 ..");
        }, 2000);
        this.Rl(function () {
          v$114.text(".. 7 ..");
        }, 3000);
        this.Rl(function () {
          v$114.text(".. 6 ..");
        }, 4000);
        this.Rl(function () {
          v$114.text(".. 5 ..");
        }, 5000);
        this.Rl(function () {
          v$114.text(".. 4 ..");
        }, 6000);
        this.Rl(function () {
          v$114.text(".. 3 ..");
        }, 7000);
        this.Rl(function () {
          v$114.text(".. 2 ..");
        }, 8000);
        this.Rl(function () {
          v$114.text(".. 1 ..");
        }, 9000);
        this.Rl(function () {
          v$114.hide();
          v$115.fadeIn(300);
        }, 10000);
      };
      vF1923.prototype.Rl = function (p794, p795) {
        var vSetTimeout2 = setTimeout(p794, p795);
        this.Pl.push(vSetTimeout2);
      };
      vF1923.prototype.Ql = function () {
        for (var vLN0115 = 0; vLN0115 < this.Pl.length; vLN0115++) {
          clearTimeout(this.Pl[vLN0115]);
        }
        this.Pl = [];
      };
      return vF1923;
    }();
    var vF87 = function () {
      function f97() {
        this.Ck = function () {};
      }
      f97.prototype.Bk = function () {};
      f97.prototype.ji = function () {};
      return f97;
    }();
    var vF88 = function () {
      var vF1924 = f19(vF87, function (p796) {
        vF87.call(this);
        var v800 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v800 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + p796 + "</div>    <div class=\"toaster-coins-close\">" + f14("index.game.toaster.continue") + "</div></div>");
        var vThis35 = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          f11().r.Cd();
          vThis35.Ck();
        });
      });
      vF1924.prototype.Bk = function () {
        return this.Sl;
      };
      vF1924.prototype.ji = function () {
        f11().r.Fd();
      };
      return vF1924;
    }();
    var vF89 = function () {
      var vF1925 = f19(vF87, function (p797) {
        vF87.call(this);
        var v801 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v801 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + p797 + "</div>    <div class=\"toaster-levelup-text\">" + f14("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + f14("index.game.toaster.continue") + "</div></div>");
        var vThis36 = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          f11().r.Cd();
          vThis36.Ck();
        });
      });
      vF1925.prototype.Bk = function () {
        return this.Sl;
      };
      vF1925.prototype.ji = function () {
        f11().r.Ed();
      };
      return vF1925;
    }();
    var vF90 = function () {
      var vF1926 = f19(vF87, function () {
        vF87.call(this);
        var vThis37 = this;
        var vF1137 = f11();
        var v802 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v802 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + vLSimageslinelogoxmas20 + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + f14("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + f14("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + f14("index.game.toaster.consent.iAccept") + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          vF1137.r.Cd();
          if (vF1137.Y()) {
            vF1137.$(true, true);
          }
          vThis37.Ck();
        });
      });
      vF1926.prototype.Bk = function () {
        return this.Sl;
      };
      vF1926.prototype.ji = function () {
        var vThis38 = this;
        var vF1138 = f11();
        if (vF1138.Y() && !vF1138.Z()) {
          vF1138.r.Hd();
          setTimeout(function () {
            vThis38.Tl.fadeIn(300);
          }, 2000);
        } else {
          setTimeout(function () {
            vThis38.Ck();
          }, 0);
        }
      };
      return vF1926;
    }();
    var vO19 = {};
    vO19.main = {
      Ma: f34("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f34("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f32(),
      e: 4,
      oa: false,
      qk: true
    };
    vO19.miniclip = {
      Ma: f34("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f34("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f32(),
      e: 4,
      oa: false,
      qk: false
    };
    var v803 = vO19[window.ENV];
    v803 ||= vO19.main;
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (p798) {
      p798.preventDefault();
      p798.stopPropagation();
      return false;
    });
    f18("//connect.facebook.net/" + vUndefined + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        appId: "861926850619051",
        cookie: true,
        xfbml: true,
        status: true,
        version: "v8.0"
      });
    });
    f18("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        GoogleAuth = gapi.auth2.init({
          client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
        });
      });
    });
    vUndefined2 = f35();
    vUndefined2.v();
    $("#mm-menu-cont").css("display", "block");
    theoKzObjects.loading = true;
    var vObtenerImagenPorSeleccion2 = obtenerImagenPorSeleccion(localStorage.getItem("zw-background"));
    if (vObtenerImagenPorSeleccion2) {
      anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(vObtenerImagenPorSeleccion2));
      console.log("Fondo cargado desde almacenamiento:", vObtenerImagenPorSeleccion2);
    }
    var vF91 = function (p799) {
      if (theoKzObjects.PropertyManager) {
        p799.skinId = theoKzObjects.PropertyManager.rh;
        p799.eyesId = theoKzObjects.PropertyManager.sh;
        p799.mouthId = theoKzObjects.PropertyManager.th;
        p799.glassesId = theoKzObjects.PropertyManager.uh;
        p799.hatId = theoKzObjects.PropertyManager.vh;
      }
    };
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
    }
    if (!Number.prototype.customFormat) {
      Number.prototype.customFormat = function () {
        if (this >= 1000000) {
          return (this / 1000000).toFixed(1) + "M🧁";
        } else if (this >= 100000) {
          return (this / 1000).toFixed(0) + "k🍬";
        } else {
          return this.dotFormat();
        }
      };
    }
    (() => {
      const vF1139 = f11();
      const vLN1005 = 100;
      let v804 = performance.now();
      let v805 = true;
      document.addEventListener("visibilitychange", () => {
        v805 = !document.hidden;
        if (v805) {
          v804 = performance.now();
        }
      });
      function f98(p800) {
        requestAnimationFrame(f98);
        if (!v805) {
          return;
        }
        let v806 = p800 - v804;
        if (v806 > vLN1005) {
          v806 = vLN1005;
        }
        v804 = p800;
        vF1139.Pa(v806);
        if (typeof vF1139.draw === "function") {
          vF1139.draw();
        }
      }
      requestAnimationFrame(f98);
    })();
    var vF92 = function () {
      var v807 = v$117.width();
      var v808 = v$117.height();
      var v809 = v$118.outerWidth();
      var v810 = v$118.outerHeight();
      var v811 = v$119.outerHeight();
      var v812 = v$120.outerHeight();
      var v813 = Math.min(1, Math.min((v808 - v812 - v811) / v810, v807 / v809));
      var v814 = "translate(-50%, -50%) scale(" + v813 + ")";
      v$118.css({
        "-webkit-transform": v814,
        "-moz-transform": v814,
        "-ms-transform": v814,
        "-o-transform": v814,
        transform: v814
      });
      f11().Ra();
      window.scrollTo(0, 1);
    };
    var v$117 = $("body");
    var v$118 = $("#stretch-box");
    var v$119 = $("#markup-header");
    var v$120 = $("#markup-footer");
    vF92();
    $(window).resize(vF92);
  })();
});
function addMinicolor(p801, p802, p803, p804, p805, p806) {
  var v815 = localStorage.getItem(p804);
  if (v815) {
    if (v815.startsWith("0x")) {
      v815 = "#" + v815.substring(2);
    } else if (!v815.startsWith("#")) {
      v815 = "#" + v815;
    }
  }
  theoObjects[p804] = v815 || p805;
  $(p801).append("<div class=\"option colorpicker\"><div class=\"name\">" + p803 + "</div><input id=\"" + p804 + "\" type=\"text\" class=\"minicolors form-control\"><div class=\"color-preview\" id=\"preview_" + p804 + "\" style=\"background-color: " + theoObjects[p804] + ";\" onclick=\"openColorPanel('" + p804 + "')\"></div></div>");
  if (localStorage.getItem(p804) !== null) {
    theoObjects[p804] = localStorage.getItem(p804);
  }
  if (p806) {
    p806();
  }
  $("#" + p804).minicolors({
    control: $(this).attr("data-control") || "hue",
    defaultValue: theoObjects[p804] || p805,
    format: $(this).attr("data-format") || "hex",
    inline: $(this).attr("data-inline") === "true",
    letterCase: $(this).attr("data-letterCase") || "lowercase",
    opacity: $(this).attr("data-opacity") || true,
    position: $(this).attr("data-position") || "bottom left",
    theme: "default",
    change: function (p807, p808) {
      var v816 = p807.replace("#", "");
      theoObjects[p804] = v816;
      localStorage.setItem(p804, v816);
      if (p806) {
        p806();
      }
      $("#preview_" + p804).css("background-color", p807);
    }
  });
}
function openColorPanel(p809) {
  $("#" + p809).minicolors("show");
}
function updateBackground(p810 = null) {
  var v817 = document.getElementById("backgroundPreview");
  let v818 = localStorage.getItem("selectedBackground");
  if (p810 === null && v818 !== null) {
    p810 = parseInt(v818);
  }
  if (p810 === null || p810 < 0 || p810 >= backgrounds.length) {
    p810 = 0;
  }
  var v819 = backgrounds[p810];
  v817.style.backgroundImage = "url(" + v819 + ")";
  if (typeof anApp !== "undefined" && anApp.q && anApp.q.Cf) {
    anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(v819));
  }
  localStorage.setItem("selectedBackground", p810);
}
function updateFont() {
  var v820 = document.getElementById("fontPreview");
  const v821 = fonts[currentFontIndex];
  v820.style.fontFamily = v821;
  localStorage.setItem("selectedFont", currentFontIndex);
}
const servers = ["sao-a.wormate.io", "mum-a.wormate.io", "dxb-a.wormate.io", "fra-e.wormate.io", "fra-d.wormate.io", "fra-c.wormate.io", "fra-b.wormate.io", "waw-a.wormate.io", "dal-b.wormate.io", "vin-a.wormate.io", "dal-a.wormate.io", "sao-c.wormate.io", "bhs-a.wormate.io", "sao-b.wormate.io", "hil-a.wormate.io", "syd-a.wormate.io", "sin-g.wormate.io", "gra-a.wormate.io", "sin-i.wormate.io", "sin-h.wormate.io", "sin-f.wormate.io", "sin-c.wormate.io", "sin-b.wormate.io", "sin-a.wormate.io", "tok-b.wormate.io", "sin-d.wormate.io", "sin-e.wormate.io"];
async function testPortOnServers(p811) {
  console.log("\n🔍 Probando servidores Wormate.io (puerto " + p811 + ")...\n");
  const vA20 = [];
  const v$121 = $("<ul></ul>");
  $("#resultadoPuertas").html("");
  $("#resultadoPuertas").append(v$121);
  for (const v822 of servers) {
    const v823 = "wss://" + v822 + ":" + p811 + "/wormy";
    const v824 = performance.now();
    let v825 = false;
    const v826 = await new Promise(p812 => {
      const v827 = new WebSocket(v823);
      const vF93 = (p813, p814 = null) => {
        if (v825) {
          return;
        }
        v825 = true;
        v827.close();
        p812({
          host: v822,
          status: p813,
          latency: p814
        });
      };
      v827.onerror = () => vF93("❌ Cerrado");
      v827.onclose = () => vF93("❌ Cerrado");
      v827.onopen = () => {
        const v828 = Math.round(performance.now() - v824);
        vF93("✅ ", v828);
      };
      setTimeout(() => vF93("⏱️ Timeout"), 10000);
    });
    if (v826.status === "✅ ") {
      vA20.push(v826);
      const v829 = v826.latency !== null ? " - Ping: " + v826.latency + " ms" : "";
      const v830 = "wss://" + v826.host + ":" + p811 + "/wormy";
      const v$122 = $("\n                <li>\n                    " + v826.status + v829 + "\n                    <button class=\"connect-button\" data-server=\"" + v830 + "\" style=\"margin-left: 10px;\">Connect</button>\n                </li>\n            ");
      v$121.append(v$122);
    }
    await new Promise(p815 => setTimeout(p815, 200));
  }
  if (vA20.length > 0) {
    vA20.sort((p816, p817) => p816.latency - p817.latency);
    const v831 = vA20[0];
    const v832 = "<strong>🏆 Best server: " + v831.host + " - Ping: " + v831.latency + " ms</strong>";
    v$121.append("<li style=\"margin-top:10px;\">" + v832 + "</li>");
  } else {
    v$121.append("<li><strong>❌ No se encontraron puertas abiertas.</strong></li>");
  }
  $(document).off("click", ".connect-button").on("click", ".connect-button", function () {
    const v833 = $(this).data("server");
    anApp.sa(v833);
    console.log("Conectando a:", v833);
  });
}
console.log("GAME JS 2023 BY SWYKZ");