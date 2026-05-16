
window.detectLog = null;
const _wrmxt = {
  BETAisSkinCustom(p) {
    var v = /[a-zA-Z]/;
    return typeof p === "string" && v.test(p);
  },
  testSkinCustom: function (p2) {
    if (_wrmxt.BETAisSkinCustom(p2)) {
      return 34 || 33;
    } else {
      return p2;
    }
  },
  testSkinMod: function (p3) {
    return p3 >= 399 && p3 < 999;
  },
  testWear: function (p4) {
    return p4 >= 399 && p4 < 999;
  },
  isNumberValid: function (p5) {
    return p5 !== "" && p5 !== null && p5 !== undefined && !isNaN(p5);
  },
  validInput: function (p6) {
    if (!_wrmxt.testSkinMod(p6) && !_wrmxt.BETAisSkinCustom(p6)) {
      return p6;
    }
    try {
      let v2 = $("#inputReplaceSkin").val();
      return encodeURI(_wrmxt.isNumberValid(v2) ? v2 : 35);
    } catch (e2) {
      return encodeURI(35);
    }
  },
  aload: false,
  aId: 0
};
var inputReplaceSkin = localStorage.getItem("inputReplaceSkin");
var PilotoAutomatico = null;
var isPlaying = false;
var pwrups = {};
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
    backgroundImage: "url('path_to_image.png')",
    pxy: 110
  }
};
var gameSettings = {
  s_l:"https://game.platenn.store",
  FB_UserID: "",
  smoothCamera: 0.5,
  eat_animation: 0.005,
  flag:"https://game.platenn.store/images/flag.png",
  PortionSize: localStorage.PotenciadorSize || 2,
  PortionAura: localStorage.PotenciadorAura || 1.2,
  PortionTransparent: 0.8,
  FoodTransparent: 0.3,
  ModeStremer: false,
  ModeStremerbatop: false,
  ModeStremermuiten: false,
  ModeStremeremoj: false,
  ModeStremerheadshot: false,
  ModeStremersaveheadshot: false,
  arrow: false,
  KeyCodeRespawn: localStorage.KeyRespawn || 82,
  KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
  AbilityZ: false,
  FoodShadow: localStorage.ComidaShadow || 2,
  FoodSize: localStorage.ComidaSize || 2,
  headshot: 0,
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
    gameSettings[e] = t[e];
  }
}
gameSettings.loading = true;
const PhoneChecked = function () {
  let v3 = false;
  gameSettings.mobile = false;
  var v4 = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(v4) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(v4.substr(0, 4))) {
    gameSettings.mobile = true;
    v3 = true;
  }
  return v3;
};
const RechekingPhone = function () {
  let v5 = false;
  var v6 = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(v6) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(v6.substr(0, 4))) {
    v5 = true;
  }
  return v5;
};
const loadJoy = function (p7) {
  let v7;
  try {
    console.log(p7);
    gameSettings.gamePad ||= theoEvents.joystick;
    if (RechekingPhone() && (p7 || gameSettings.gamePad.checked)) {
      v7 = nipplejs.create(gameSettings.gamePad);
      v7.on("move", function (p8, p9) {
        theoEvents.eventoPrincipal.sk = p9.angle.radian <= Math.PI ? p9.angle.radian * -1 : Math.PI - (p9.angle.radian - Math.PI);
        console.log(p9);
      });
    }
    return v7;
  } catch (e3) {
    console.log(e3);
  }
};
let clientes = {
  clientesVencidos: [],
  clientesActivos: []
};
let servers = {
  Api_listServer: []
};
async function loadUsers() {
  await fetch(gameSettings.s_l + "/users").then(p10 => p10.json()).then(p11 => {
    if (p11.success) {
      let v8 = p11.Users;
      clientes.clientesActivos = v8.filter(p12 => {
        return p12.cliente_ID;
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
async function loadServers() {
  await fetch(gameSettings.s_l + "/servers").then(p17 => p17.json()).then(p18 => {
    if (p18.success) {
      let v20 = p18.servers;
      servers.Api_listServer = v20.filter(p19 => {
        return p19.serverUrl;
      });
    } else {
      servers = {
        Api_listServer: []
      };
      alert("An error occurred while loading the servers");
    }
  });
}
loadUsers();
loadServers();
$(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
var StoreSkinID = $("#idReplaceSkin");
const ctx = {
  fontStyle: {
    name: new PIXI.TextStyle({
      fill: "#FFFF00",
      fontSize: 11,
      lineJoin: "round",
      stroke: "#EFFA45",
      fontFamily: "vuonghiep",
      fontWeight: "bold"
    }),
    blanco: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#FFF",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    morado: new PIXI.TextStyle({
      align: "center",
      fill: "#FFFF00",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    morado1: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    amarillo: new PIXI.TextStyle({
      align: "center",
      fill: "#FFFF00",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    amarillo1: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    anheadshot: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 0,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    keysColor: new PIXI.TextStyle({
      align: "center",
      fill: "#fff009",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#fff009",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontWeight: "bold",
      fontFamily: "vuonghiep",
      wordWrap: true
    })
  }
};
ctx.clock = PIXI.Sprite.fromImage(gameSettings.s_l + "/images/clock.png");
ctx.clock.width = 100;
ctx.clock.height = 100;
ctx.clock.x = -50;
ctx.clock.y = -50;
ctx.clockan = PIXI.Sprite.fromImage(gameSettings.s_l + "/images/clockan.png");
if (gameSettings.ModeStremeranclock) {
  ctx.clockan.width = 100;
  ctx.clockan.height = 100;
  ctx.clockan.x = -50;
  ctx.clockan.y = -50;
} else {
  ctx.clockan.width = 0;
  ctx.clockan.height = 0;
  ctx.clockan.x = -50;
  ctx.clockan.y = -50;
}
ctx.value_server = new PIXI.Text("WFC", ctx.fontStyle.name);
ctx.value_server.x = 55;
ctx.value_server.y = 0;
ctx.label_hs = new PIXI.Text("HS", ctx.fontStyle.amarillo);
ctx.value1_hs = new PIXI.Text("0", ctx.fontStyle.amarillo);
ctx.label_kill = new PIXI.Text("KL", ctx.fontStyle.morado);
ctx.value1_kill = new PIXI.Text("0", ctx.fontStyle.morado);
if (gameSettings.ModeStremersaveheadshot) {
  ctx.value2_hs = new PIXI.Text("", ctx.fontStyle.amarillo1);
  ctx.value2_kill = new PIXI.Text("", ctx.fontStyle.morado1);
} else {
  ctx.value2_hs = new PIXI.Text("", ctx.fontStyle.amarillo1);
  ctx.value2_kill = new PIXI.Text("", ctx.fontStyle.morado1);
}
;
ctx.label_hs.x = 15;
ctx.label_hs.y = 100;
ctx.label_kill.x = 65;
ctx.label_kill.y = 100;
ctx.value1_hs.x = 15;
ctx.value1_hs.y = 116;
ctx.value1_kill.x = 65;
ctx.value1_kill.y = 116;
ctx.value2_hs.x = 15;
ctx.value2_hs.y = 133;
ctx.value2_kill.x = 65;
ctx.value2_kill.y = 133;
ctx.containerCountInfo = new PIXI.Container();
ctx.containerCountInfo.x = -45;
ctx.containerCountInfo.y = -52;
ctx.containerCountInfo.addChild(ctx.value_server);
ctx.containerCountInfo.addChild(ctx.label_hs);
ctx.containerCountInfo.addChild(ctx.value1_hs);
ctx.containerCountInfo.addChild(ctx.value2_hs);
ctx.containerCountInfo.addChild(ctx.label_kill);
ctx.containerCountInfo.addChild(ctx.value1_kill);
ctx.containerCountInfo.addChild(ctx.value2_kill);
ctx.imgServerbase = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");
ctx.borderurl = PIXI.Texture.fromImage("https://i.imgur.com/wYJAfmO0.png");
ctx.onclickServer = PIXI.Texture.fromImage(gameSettings.flag);
ctx.containerImgS = new PIXI.Sprite(ctx.imgServerbase);
ctx.containerImgS.anchor.set(0.5);
ctx.containerImgS.x = 0;
ctx.containerImgS.y = 8;
ctx.containerImgS.width = 0;
ctx.containerImgS.height = 0;
ctx.borderImg = new PIXI.Sprite(ctx.borderurl);
ctx.borderImg.anchor.set(0.5);
ctx.borderImg.x = -2;
ctx.borderImg.y = 78;
ctx.borderImg.width = 110;
ctx.borderImg.height = 60;
ctx.setServer = function (p20) {
  ctx.value_server.text = p20 || "WFC";
};
ctx.setCountGame = function (p21, p22, p23, p24) {
  ctx.value1_hs.text = p22;
  ctx.value1_kill.text = p21;
  ;
  if (gameSettings.ModeStremersaveheadshot) {
    ctx.value2_hs.text = p24;
    ctx.value2_kill.text = p23;
  } else {}
  ;
};
"use strict";
var _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p25) {
  return typeof p25;
} : function (p26) {
  if (p26 && typeof Symbol == "function" && p26.constructor === Symbol && p26 !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof p26;
  }
};
var GoogleAuth;
(function () {
  try {
    console.log(function (p27, p28) {
      for (var vLN02 = 0; vLN02 < p28.length; vLN02 += 2) {
        p27 = p27.replaceAll(p28[vLN02], p28[vLN02 + 1]);
      }
      return p27;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]));
  } catch (e5) {}
})();
window.addEventListener("load", function () {
  function f() {
    (function (p29, p30, p31) {
      function f2(p32, p33) {
        return (p32 === undefined ? "undefined" : _typeof(p32)) === p33;
      }
      function f3() {
        if (typeof p30.createElement != "function") {
          return p30.createElement(arguments[0]);
        } else if (v23) {
          return p30.createElementNS.call(p30, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return p30.createElement.apply(p30, arguments);
        }
      }
      var vA2 = [];
      var vA3 = [];
      var vO = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (p34, p35) {
          var vThis = this;
          setTimeout(function () {
            p35(vThis[p34]);
          }, 0);
        },
        addTest: function (p36, p37, p38) {
          vA3.push({
            name: p36,
            fn: p37,
            options: p38
          });
        },
        addAsyncTest: function (p39) {
          vA3.push({
            name: null,
            fn: p39
          });
        }
      };
      var vF4 = function () {};
      vF4.prototype = vO;
      vF4 = new vF4();
      var v21 = false;
      try {
        v21 = "WebSocket" in p29 && p29.WebSocket.CLOSING === 2;
      } catch (e6) {}
      vF4.addTest("websockets", v21);
      var v22 = p30.documentElement;
      var v23 = v22.nodeName.toLowerCase() === "svg";
      vF4.addTest("canvas", function () {
        var vF32 = f3("canvas");
        return !!vF32.getContext && !!vF32.getContext("2d");
      });
      vF4.addTest("canvastext", function () {
        return vF4.canvas !== false && typeof f3("canvas").getContext("2d").fillText == "function";
      });
      (function () {
        var v24;
        var v25;
        var v26;
        var v27;
        var v28;
        var v29;
        var v30;
        for (var v31 in vA3) {
          if (vA3.hasOwnProperty(v31)) {
            v24 = [];
            v25 = vA3[v31];
            if (v25.name && (v24.push(v25.name.toLowerCase()), v25.options && v25.options.aliases && v25.options.aliases.length)) {
              for (v26 = 0; v26 < v25.options.aliases.length; v26++) {
                v24.push(v25.options.aliases[v26].toLowerCase());
              }
            }
            v27 = f2(v25.fn, "function") ? v25.fn() : v25.fn;
            v28 = 0;
            for (; v28 < v24.length; v28++) {
              v29 = v24[v28];
              v30 = v29.split(".");
              if (v30.length === 1) {
                vF4[v30[0]] = v27;
              } else {
                if (!!vF4[v30[0]] && !(vF4[v30[0]] instanceof Boolean)) {
                  vF4[v30[0]] = new Boolean(vF4[v30[0]]);
                }
                vF4[v30[0]][v30[1]] = v27;
              }
              vA2.push((v27 ? "" : "no-") + v30.join("-"));
            }
          }
        }
      })();
      (function (p40) {
        var v32 = v22.className;
        var v33 = vF4._config.classPrefix || "";
        if (v23) {
          v32 = v32.baseVal;
        }
        if (vF4._config.enableJSClass) {
          var v34 = new RegExp("(^|\\s)" + v33 + "no-js(\\s|$)");
          v32 = v32.replace(v34, "$1" + v33 + "js$2");
        }
        if (vF4._config.enableClasses) {
          v32 += " " + v33 + p40.join(" " + v33);
          if (v23) {
            v22.className.baseVal = v32;
          } else {
            v22.className = v32;
          }
        }
      })(vA2);
      delete vO.addTest;
      delete vO.addAsyncTest;
      for (var vLN03 = 0; vLN03 < vF4._q.length; vLN03++) {
        vF4._q[vLN03]();
      }
      p29.Modernizr = vF4;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  function f4(p41, p42, p43) {
    const vA4 = [38, 38, 38, 120, 38, 25, 38];
    const vA5 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
    let v35 = vA4[p42] - parseInt((p43 == 0.99 ? 1 : p43) * vA4[p42] / 1);
    const v36 = new PIXI.TextStyle({
      align: "center",
      fill: vA5[p42],
      fontSize: 25,
      lineJoin: "round",
      whiteSpace: "normal",
      wordWrap: true,
      fontFamily: "vuonghiep",
      fontWeight: "bold"
    });
    let v37 = "pwr_clock" + p42;
    if (!pwrups[v37] && vA4[p42] === v35) {
      pwrups[v37] = new PIXI.Text(v35, v36);
      pwrups[v37].y = 61;
      p41.Tf[p42].addChild(pwrups[v37]);
    }
    if (pwrups[v37]) {
      pwrups[v37].x = v35 >= 100 ? 11 : v35 >= 10 ? 18 : 26;
      pwrups[v37].text = v35;
      if (v35 === 0) {
        delete pwrups[v37];
      }
    }
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!f()) {
    document.getElementById("error-view").style.display = "block";
    return;
  }
  (function () {
    function f5() {
      return window.anApp = vUndefined2;
    }
    function f6(p44) {
      const v38 = p44 + "=";
      const v39 = document.cookie.split(";");
      for (let vLN04 = 0; vLN04 < v39.length; vLN04++) {
        let v40 = v39[vLN04];
        while (v40.charAt(0) === " ") {
          v40 = v40.substring(1);
        }
        if (v40.indexOf(v38) === 0) {
          return v40.substring(v38.length, v40.length);
        }
      }
      return "";
    }
    function f7(p45, p46, p47) {
      var v41 = new Date();
      v41.setTime(v41.getTime() + p47 * 86400000);
      var v42 = "expires=" + v41.toUTCString();
      document.cookie = p45 + "=" + p46 + "; " + v42 + "; path=/";
    }
    function f8(p48) {
      return window.I18N_MESSAGES[p48];
    }
    function f9(p49) {
      if (p49[v115]) {
        return p49[v115];
      } else if (p49.en) {
        return p49.en;
      } else {
        return p49.x;
      }
    }
    function f10(p50) {
      var v43 = (Math.floor(p50) % 60).toString();
      var v44 = (Math.floor(p50 / 60) % 60).toString();
      var v45 = (Math.floor(p50 / 3600) % 24).toString();
      var v46 = Math.floor(p50 / 86400).toString();
      var vF8 = f8("util.time.days");
      var vF82 = f8("util.time.hours");
      var vF83 = f8("util.time.min");
      var vF84 = f8("util.time.sec");
      if (v46 > 0) {
        return v46 + " " + vF8 + " " + v45 + " " + vF82 + " " + v44 + " " + vF83 + " " + v43 + " " + vF84;
      } else if (v45 > 0) {
        return v45 + " " + vF82 + " " + v44 + " " + vF83 + " " + v43 + " " + vF84;
      } else if (v44 > 0) {
        return v44 + " " + vF83 + " " + v43 + " " + vF84;
      } else {
        return v43 + " " + vF84;
      }
    }
    function f11(p51) {
      if (p51.includes("href")) {
        return p51.replaceAll("href", "target=\"_black\" href");
      } else {
        return p51;
      }
    }
    function f12(p52, p53, p54) {
      var v47 = document.createElement("script");
      var v48 = true;
      if (p53) {
        v47.id = p53;
      }
      v47.async = "async";
      v47.type = "text/javascript";
      v47.src = p52;
      if (p54) {
        v47.onload = v47.onreadystatechange = function () {
          v48 = false;
          try {
            p54();
          } catch (e7) {
            console.log(e7);
          }
          v47.onload = v47.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0]).appendChild(v47);
    }
    function f13(p55, p56) {
      var vP56 = p56;
      vP56.prototype = Object.create(p55.prototype);
      vP56.prototype.constructor = vP56;
      vP56.parent = p55;
      return vP56;
    }
    function f14(p57) {
      p57 %= v119;
      if (p57 < 0) {
        return p57 + v119;
      } else {
        return p57;
      }
    }
    function f15(p58, p59, p60) {
      return f16(p60, p58, p59);
    }
    function f16(p61, p62, p63) {
      if (p61 > p63) {
        return p63;
      } else if (p61 < p62) {
        return p62;
      } else if (Number.isFinite(p61)) {
        return p61;
      } else {
        return (p62 + p63) * 0.5;
      }
    }
    function f17(p64, p65, p66, p67) {
      if (p65 > p64) {
        return Math.min(p65, p64 + p66 * p67);
      } else {
        return Math.max(p65, p64 - p66 * p67);
      }
    }
    function f18(p68, p69, p70, p71, p72) {
      return p69 + (p68 - p69) * Math.pow(1 - p71, p70 / p72);
    }
    function f19(p73, p74, p75) {
      return p73 * (1 - p75) + p74 * p75;
    }
    function f20(p76, p77, p78, p79) {
      var vP78 = p78;
      var vP77 = p77;
      var v49 = p77 + p79;
      if (p76 == null) {
        throw new TypeError("this is null or not defined");
      }
      var v50 = p76.length >>> 0;
      var v51 = vP78 >> 0;
      var v52 = v51 < 0 ? Math.max(v50 + v51, 0) : Math.min(v51, v50);
      var v53 = vP77 >> 0;
      var v54 = v53 < 0 ? Math.max(v50 + v53, 0) : Math.min(v53, v50);
      var v55 = v49 === undefined ? v50 : v49 >> 0;
      var v56 = v55 < 0 ? Math.max(v50 + v55, 0) : Math.min(v55, v50);
      var v57 = Math.min(v56 - v54, v50 - v52);
      var vLN1 = 1;
      for (v54 < v52 && v52 < v54 + v57 && (vLN1 = -1, v54 += v57 - 1, v52 += v57 - 1); v57 > 0;) {
        if (v54 in p76) {
          p76[v52] = p76[v54];
        } else {
          delete p76[v52];
        }
        v54 += vLN1;
        v52 += vLN1;
        v57--;
      }
      return p76;
    }
    function f21(p80) {
      return p80.getContext("2d");
    }
    function f22(p81) {
      if (p81.parent != null) {
        p81.parent.removeChild(p81);
      }
    }
    function f23(p82) {
      return p82[parseInt(Math.random() * p82.length)];
    }
    function f24() {
      return Math.random().toString(36).substring(2, 15);
    }
    function f25(p83, p84, p85) {
      var v58 = (1 - Math.abs(p85 * 2 - 1)) * p84;
      var v59 = v58 * (1 - Math.abs(p83 / 60 % 2 - 1));
      var v60 = p85 - v58 / 2;
      if (p83 >= 0 && p83 < 60) {
        return [v60 + v58, v60 + v59, v60 + 0];
      } else if (p83 >= 60 && p83 < 120) {
        return [v60 + v59, v60 + v58, v60 + 0];
      } else if (p83 >= 120 && p83 < 180) {
        return [v60 + 0, v60 + v58, v60 + v59];
      } else if (p83 >= 180 && p83 < 240) {
        return [v60 + 0, v60 + v59, v60 + v58];
      } else if (p83 >= 240 && p83 < 300) {
        return [v60 + v59, v60 + 0, v60 + v58];
      } else {
        return [v60 + v58, v60 + 0, v60 + v59];
      }
    }
    function f26() {
      function f27() {
        let v61 = gameSettings.adblock ? 1 : 5;
        $("#adbl-1").text(f8("index.game.antiadblocker.msg1"));
        $("#adbl-2").text(f8("index.game.antiadblocker.msg2"));
        $("#adbl-3").text(f8("index.game.antiadblocker.msg3"));
        $("#adbl-4").text(f8("index.game.antiadblocker.msg4").replace("{0}", 10));
        $("#adbl-continue span").text(f8("index.game.antiadblocker.continue"));
        $("#adbl-continue").hide();
        $("#" + vLSJDHnkHtYwyXyVgG9).fadeIn(500);
        var vV61 = v61;
        for (var vLN05 = 0; vLN05 < v61; vLN05++) {
          setTimeout(function () {
            vV61--;
            $("#adbl-4").text(f8("index.game.antiadblocker.msg4").replace("{0}", vV61));
            if (vV61 === 0) {
              console.log("aipAABC");
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (e8) {}
              $("#adbl-continue").fadeIn(200);
            }
          }, (vLN05 + 1) * 1000);
        }
      }
      var v62 = false;
      var vF5 = function () {};
      var vO2 = {};
      var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
      $("#adbl-continue").click(function () {
        $("#" + vLSJDHnkHtYwyXyVgG9).fadeOut(500);
        vF5(false);
      });
      vO2.a = function (p86) {
        vF5 = p86;
        if (!v62) {
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
                AIP_COMPLETE: function (p87) {
                  console.log("aipC");
                  vF5(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#" + vLSJDHnkHtYwyXyVgG9).hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + "_complete");
                  } catch (e9) {}
                },
                AIP_REMOVE: function () {}
              });
            });
            v62 = true;
          } catch (e10) {}
        }
      };
      vO2.b = function () {
        if (aiptag.adplayer !== undefined) {
          console.log("aipS");
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (e11) {}
          f27();
        } else {
          console.log("aipAABS");
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (e12) {}
          f27();
        }
      };
      return vO2;
    }
    function f28(p88, p89) {
      var v$ = $("#" + p88);
      var vP89 = p89;
      var vO3 = {};
      var v63 = false;
      vO3.a = function () {
        if (!v63) {
          v$.empty();
          v$.append("<div id='" + vP89 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + "_display");
            } catch (e13) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(vP89);
            });
            v63 = true;
          } catch (e14) {}
        }
      };
      vO3.c = function () {
        try {
          try {
            ga("send", "event", "banner", window.runtimeHash + "_refresh");
          } catch (e15) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(vP89);
          });
        } catch (e16) {}
      };
      return vO3;
    }
    function f29() {
      function f30(p90) {
        var v64 = p90 + Math.floor(Math.random() * 65535) * 37;
        f7(vF17.d, v64, 30);
      }
      function f31() {
        return parseInt(f6(vF17.d)) % 37;
      }
      return function () {
        var vF31 = f31();
        console.log("init1 pSC: " + vF31);
        if (!(vF31 >= 0) || !(vF31 < v527.e)) {
          vF31 = Math.max(0, v527.e - 2);
          console.log("init2 pSC: " + vF31);
        }
        var vO4 = {};
        vUndefined2 = vO4;
        vO4.f = v527;
        vO4.g = false;
        vO4.i = Date.now();
        vO4.j = 0;
        vO4.k = 0;
        vO4.l = null;
        vO4.m = vUndefined;
        vO4.n = v115;
        vO4.o = null;
        vO4.p = null;
        vO4.q = null;
        vO4.r = null;
        vO4.s = null;
        vO4.t = null;
        vO4.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (p91) {
              if (p91.coords !== undefined) {
                var v65 = p91.coords;
                if (v65.latitude !== undefined && v65.longitude !== undefined) {
                  vO4.l = p91;
                }
              }
            }, function (p92) {});
          }
        } catch (e17) {}
        vO4.v = function () {
          vO4.p = new vF9();
          vO4.q = new vF40();
          vO4.r = new vF11();
          vO4.s = new vF42();
          vO4.t = new vF37();
          vO4.u = new vF44();
          vO4.o = new f32();
          vO4.o.z = new vF30(vO4.o);
          vO4.a();
        };
        vO4.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (e18) {}
          vO4.o.A = function () {
            vO4.o.B();
          };
          vO4.o.C = function () {
            var v66 = vO4.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", v66);
            } catch (e19) {}
            vO4.r.G(vF11.AudioState.H);
            vO4.s.I(vO4.s.H.J());
          };
          vO4.o.B = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (e20) {}
            if ($("body").height() >= 430) {
              vO4.f.K.c();
            }
            vO4.p.L();
            (function () {
              var v67 = Math.floor(vO4.o.N.M);
              var v68 = vO4.o.O;
              if (vO4.u.P()) {
                vO4.u.Q(function () {
                  vO4.R(v67, v68);
                });
              } else {
                vO4.R(v67, v68);
              }
            })();
          };
          vO4.o.S = function (p93) {
            p93(vO4.s.H.T(), vO4.s.H.U());
          };
          vO4.u.V(function () {
            if (vO4.p.W) {
              vO4.r.G(vF11.AudioState.F);
              vO4.s.I(vO4.s.F);
            }
            if (vO4.u.P()) {
              try {
                var v69 = vO4.u.X();
                ga("set", "userId", v69);
              } catch (e21) {}
            }
            if (vO4.Y() && vO4.u.P() && !vO4.u.Z()) {
              vO4.$(false, false);
              vO4.s.aa._(new vF93());
            } else {
              vO4.ba(true);
            }
          });
          vO4.p.ca(function () {
            vO4.r.G(vF11.AudioState.F);
            vO4.s.I(vO4.s.F);
          });
          vO4.q.a(function () {
            vO4.o.a();
            vO4.r.a();
            vO4.s.a();
            vO4.t.a();
            vO4.p.a();
            vO4.u.a();
            if (vO4.Y() && !vO4.Z()) {
              vO4.s.aa._(new vF93());
            } else {
              vO4.ba(true);
            }
          });
        };
        vO4.da = function (p94) {
          if (vO4.u.P()) {
            var v70 = vO4.u.ea();
            $.get(vAtob + "/pub/wuid/" + v70 + "/consent/change?value=" + encodeURI(p94), function (p95) {});
          }
        };
        vO4.fa = function (p96) {
          var v71 = vO4.u.ea();
          var v72 = vO4.s.F.D();
          var v73 = vO4.s.F.ga();
          var v74 = vO4.t.ha(vF38.ia);
          var v75 = vO4.t.ha(vF38.ja);
          var v76 = vO4.t.ha(vF38.ka);
          var v77 = vO4.t.ha(vF38.la);
          var v78 = vO4.t.ha(vF38.ma);
          var vLN06 = 0;
          if (vO4.l != null) {
            var v79 = vO4.l.coords.latitude;
            var v80 = vO4.l.coords.longitude;
            vLN06 = Math.max(0, Math.min(32767, (v79 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (v80 + 180) / 360 * 65536)) << 16;
          }
          _wrmxt.testSkinCustom(v74);
          let v81 = "x" + (v74 > 9999 ? "0000" : v74.toString().padStart(4, 0)) + (v78 > 999 ? "000" : v78.toString().padStart(3, 0)) + (v75 > 999 ? "000" : v75.toString().padStart(3, 0)) + (v76 > 999 ? "000" : v76.toString().padStart(3, 0));
          v73 = (v73.length >= 32 ? v73.substr(0, 16) : v73.substr(0, 16).padEnd(16, "x")) + v81;
          v73 = v73.trim();
          console.log(v73);
          var v82 = vAtob + "/pub/wuid/" + v71 + "/start?gameMode=" + encodeURI(v72) + "&gh=" + vLN06 + "&nickname=" + encodeURI(v73) + "&skinId=" + _wrmxt.validInput(v74) + "&eyesId=" + encodeURI(v75) + "&mouthId=" + encodeURI(v76) + "&glassesId=" + encodeURI(v77) + "&hatId=" + encodeURI(v78);
          console.log("urlRequest: " + v82);
          $.get(v82, function (p97) {
            var v83 = p97.server_url;
            p96(v83);
          });
        };
        vO4.na = function () {
          vF31++;
          console.log("start pSC: " + vF31);
          if (!vO4.f.oa && vF31 >= vO4.f.e) {
            vO4.s.I(vO4.s.pa);
            vO4.r.G(vF11.AudioState.qa);
            vO4.f.ra.b();
          } else {
            f30(vF31);
            vO4.sa();
          }
        };
        vO4.sa = function (p98) {
          if (vO4.o.ta()) {
            vO4.s.I(vO4.s.ua);
            vO4.r.G(vF11.AudioState.ua);
            var v84 = vO4.s.F.D();
            f7(vF17.va, v84, 30);
            console.log("save gm: " + v84);
            var v85 = vO4.s.xa.wa();
            f7(vF17.ya, v85, 30);
            console.log("save sPN: " + v85);
            if (vO4.u.P()) {
              vO4.fa(function (p99) {
                hoisinhnhanh = p98 ? p98 : p99;
                vO4.o.za(window.server_url || p99, vO4.u.ea());
              });
            } else {
              var v86 = vO4.s.F.ga();
              f7(vF17.Aa, v86, 30);
              var v87 = vO4.t.ha(vF38.ia);
              f7(vF17.Ba, v87, 30);
              vO4.fa(function (p100) {
                hoisinhnhanh = p98 ? p98 : p100;
                vO4.o.Ca(p100, v86, v87);
              });
            }
          }
        };
        vO4.R = function (p101, p102) {
          var v88 = vO4.s.F.ga();
          vO4.s.H.Da(p101, p102, v88);
          vO4.r.G(vF11.AudioState.Ea);
          vO4.s.I(vO4.s.H.Fa());
        };
        vO4.Ga = function () {
          if (!vO4.Ha()) {
            return vO4.t.Ia();
          }
          var vParseInt = parseInt(f6(vF17.Ba));
          if (vParseInt != null && vO4.t.Ja(vParseInt, vF38.ia)) {
            return vParseInt;
          } else {
            return vO4.t.Ia();
          }
        };
        vO4.Ka = function (p103) {
          f7(vF17.La, !!p103, 1800);
        };
        vO4.Ha = function () {
          return f6(vF17.La) === "true";
        };
        vO4.ba = function (p104) {
          if (p104 != vO4.g) {
            vO4.g = p104;
            var v89 = v89 || {};
            v89.consented = p104;
            v89.gdprConsent = p104;
            vO4.f.Ma.a();
            vO4.f.K.a();
            vO4.f.ra.a(function (p105) {
              if (p105) {
                f30(vF31 = 0);
              }
              vO4.sa();
            });
          }
        };
        vO4.$ = function (p106, p107) {
          f7(vF17.Na, p106 ? "true" : "false");
          if (p107) {
            vO4.da(p106);
          }
          vO4.ba(p106);
        };
        vO4.Z = function () {
          switch (f6(vF17.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        vO4.Y = function () {
          try {
            return !!window.isIPInEEA || vO4.l != null && !!vF18.Oa(vO4.l.coords.latitude, vO4.l.coords.longitude);
          } catch (e22) {
            return true;
          }
        };
        vO4.Pa = function () {
          vO4.j = Date.now();
          vO4.k = vO4.j - vO4.i;
          vO4.o.Qa(vO4.j, vO4.k);
          vO4.s.Qa(vO4.j, vO4.k);
          vO4.i = vO4.j;
        };
        vO4.Ra = function () {
          vO4.s.Ra();
        };
        return vO4;
      }();
    }
    function f32() {
      var vO5 = {
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
        fb: new vF22(),
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
      vO5.fb.ub = 500;
      vO5.N = new vF47(vO5.fb);
      vO5.a = function () {
        vO5.N.vb(f5().s.H.wb);
        setInterval(function () {
          vO5.S(function (p108, p109) {
            vO5.xb(p108, p109);
          });
        }, 10);
      };
      vO5.yb = function (p110, p111, p112, p113) {
        vO5.lb = p110;
        vO5.mb = p111;
        vO5.nb = p112;
        vO5.ob = p113;
        vO5.zb();
      };
      vO5.Ab = function (p114) {
        vO5.kb = p114;
        vO5.zb();
      };
      vO5.zb = function () {
        vO5.pb = vO5.lb - vO5.kb;
        vO5.qb = vO5.mb + vO5.kb;
        vO5.rb = vO5.nb - vO5.kb;
        vO5.sb = vO5.ob + vO5.kb;
      };
      vO5.Qa = function (p115, p116) {
        vO5.$a += p116;
        vO5.Za -= vO5.Ya * 0.2 * p116;
        vO5.z.Bb();
        if (vO5.db != null && (vO5.cb === 2 || vO5.cb === 3)) {
          vO5.Cb(p115, p116);
          vO5.jb = 4 + vO5.ib * vO5.N.Db;
        }
        var v90 = 1000 / Math.max(1, p116);
        var vLN07 = 0;
        var vLN08 = 0;
        for (; vLN08 < vO5.Xa.length - 1; vLN08++) {
          vLN07 = vLN07 + vO5.Xa[vLN08];
          vO5.Xa[vLN08] = vO5.Xa[vLN08 + 1];
        }
        vO5.Xa[vO5.Xa.length - 1] = v90;
        vO5.Wa = (vLN07 + v90) / vO5.Xa.length;
      };
      vO5.Eb = function (p117, p118) {
        return p117 > vO5.pb && p117 < vO5.qb && p118 > vO5.rb && p118 < vO5.sb;
      };
      vO5.Cb = function (p119, p120) {
        var v91 = vO5.$a + vO5.Za;
        var v92 = (v91 - vO5._a) / (vO5.ab - vO5._a);
        vO5.N.Fb(p119, p120);
        vO5.N.Gb(p119, p120, v92, vO5.Eb);
        var vLN09 = 0;
        var v93;
        for (v93 in vO5.hb) {
          var v94 = vO5.hb[v93];
          v94.Fb(p119, p120);
          v94.Gb(p119, p120, v92, vO5.Eb);
          if (v94.Hb && v94.Db > vLN09) {
            vLN09 = v94.Db;
          }
          if (!v94.Ib && (!!(v94.Jb < 0.005) || !v94.Hb)) {
            v94.Kb();
            delete vO5.hb[v94.Mb.Lb];
          }
        }
        vO5.Ab(vLN09 * 3);
        var v95;
        for (v95 in vO5.gb) {
          var v96 = vO5.gb[v95];
          v96.Fb(p119, p120);
          v96.Gb(p119, p120, vO5.Eb);
          if (v96.Nb && (v96.Jb < 0.005 || !vO5.Eb(v96.Ob, v96.Pb))) {
            v96.Kb();
            delete vO5.gb[v96.Mb.Lb];
          }
        }
      };
      vO5.Qb = function (p121, p122) {
        if (vO5.cb === 1) {
          vO5.cb = 2;
          vO5.C();
        }
        var v97 = f5().j;
        vO5.bb = p121;
        if (p121 === 0) {
          vO5._a = v97 - 95;
          vO5.ab = v97;
          vO5.$a = vO5._a;
          vO5.Za = 0;
        } else {
          vO5._a = vO5.ab;
          vO5.ab = vO5.ab + p122;
        }
        var v98 = vO5.$a + vO5.Za;
        vO5.Ya = (v98 - vO5._a) / (vO5.ab - vO5._a);
      };
      vO5.Rb = function () {
        if (vO5.cb === 1 || vO5.cb === 2) {
          vO5.cb = 3;
          var v99 = vO5.db;
          setTimeout(function () {
            if (vO5.cb === 3) {
              vO5.cb = 0;
            }
            if (v99 != null && v99 === vO5.db) {
              vO5.db.close();
              vO5.db = null;
            }
          }, 5000);
          vO5.B();
        }
      };
      vO5.ta = function () {
        return vO5.cb !== 2 && (vO5.cb = 1, vO5.z.Sb(), vO5.gb = {}, vO5.hb = {}, vO5.N.Tb(), vO5.db != null && (vO5.db.close(), vO5.db = null), true);
      };
      vO5.Ub = function () {
        vO5.db = null;
        vO5.z.Sb();
        if (vO5.cb !== 3) {
          vO5.A();
        }
        vO5.cb = 0;
      };
      vO5.za = function (p123, p124) {
        vO5.Vb(p123, function () {
          var v100 = Math.min(2048, p124.length);
          var v101 = new ArrayBuffer(6 + v100 * 2);
          var v102 = new DataView(v101);
          var vLN010 = 0;
          v102.setInt8(vLN010, 129);
          vLN010 = vLN010 + 1;
          v102.setInt16(vLN010, 2800);
          vLN010 = vLN010 + 2;
          v102.setInt8(vLN010, 1);
          vLN010 = vLN010 + 1;
          v102.setInt16(vLN010, v100);
          vLN010 = vLN010 + 2;
          var vLN011 = 0;
          for (; vLN011 < v100; vLN011++) {
            v102.setInt16(vLN010, p124.charCodeAt(vLN011));
            vLN010 = vLN010 + 2;
          }
          vO5.Wb(v101);
        });
      };
      vO5.Ca = function (p125, p126, p127) {
        vO5.Vb(p125, function () {
          var v103 = Math.min(32, p126.length);
          var v104 = new ArrayBuffer(7 + v103 * 2);
          var v105 = new DataView(v104);
          var vLN012 = 0;
          v105.setInt8(vLN012, 129);
          vLN012 = vLN012 + 1;
          v105.setInt16(vLN012, 2800);
          vLN012 = vLN012 + 2;
          v105.setInt8(vLN012, 0);
          vLN012 = vLN012 + 1;
          v105.setInt16(vLN012, p127);
          vLN012 = vLN012 + 2;
          v105.setInt8(vLN012, v103);
          vLN012++;
          var vLN013 = 0;
          for (; vLN013 < v103; vLN013++) {
            v105.setInt16(vLN012, p126.charCodeAt(vLN013));
            vLN012 = vLN012 + 2;
          }
          vO5.Wb(v104);
        });
      };
      vO5.Wb = function (p128) {
        try {
          if (vO5.db != null && vO5.db.readyState === WebSocket.OPEN) {
            vO5.db.send(p128);
          }
        } catch (e23) {
          console.log("Socket send error: " + e23);
          vO5.Ub();
        }
      };
      vO5.xb = function (p129, p130) {
        if (!Number.isFinite(p129)) {
          p129 = 0;
        }
        if (vO5._keepAliveMs == null) {
          vO5._keepAliveMs = 1000;
        }
        if (vO5._lastInputSentAt == null) {
          vO5._lastInputSentAt = 0;
        }
        var v106 = p130 ? 128 : 0;
        var v107 = f14(p129) / v119 * 128 & 127;
        var v108 = (v106 | v107) & 255;
        var v109 = typeof performance !== "undefined" && performance.now ? performance.now() : Date.now();
        var v110 = v109 - vO5._lastInputSentAt > vO5._keepAliveMs;
        if (vO5.eb !== v108 || v110) {
          var v111 = new ArrayBuffer(1);
          new DataView(v111).setInt8(0, v108);
          vO5.Wb(v111);
          vO5.eb = v108;
          vO5._lastInputSentAt = v109;
        }
      };
      vO5.Vb = function (p131, p132) {
        let vLoadJoy = loadJoy(!gameSettings.mobile);
        var v112 = vO5.db = new WebSocket(p131);
        v112.binaryType = "arraybuffer";
        window.onOpen = v112.onopen = function () {
          vF100("open");
          if (vO5.db === v112) {
            console.log("Socket opened");
            p132();
            try {
              vO5.xb(0, false);
            } catch (e24) {}
            try {
              if (vO5._kaTimer) {
                clearInterval(vO5._kaTimer);
                vO5._kaTimer = null;
              }
              if (vO5._keepAliveMs == null) {
                vO5._keepAliveMs = 1000;
              }
              if (typeof vO5.eb !== "number") {
                vO5.eb = 0;
              }
              vO5._kaTimer = setInterval(function () {
                if (!vO5.db || vO5.db.readyState !== WebSocket.OPEN) {
                  return;
                }
                var v113 = new ArrayBuffer(1);
                new DataView(v113).setInt8(0, vO5.eb & 255);
                vO5.Wb(v113);
                vO5._lastInputSentAt = typeof performance !== "undefined" && performance.now ? performance.now() : Date.now();
              }, Math.max(500, vO5._keepAliveMs));
            } catch (e25) {
              console.log(e25);
            }
          }
          isPlaying = true;
        };
        window.onclose = v112.onclose = function () {
          vF100("closed");
          _wrmxt.aload = false;
          try {
            if (vO5._kaTimer) {
              clearInterval(vO5._kaTimer);
              vO5._kaTimer = null;
            }
          } catch (e26) {}
          if (vO5.db === v112) {
            console.log("Socket closed");
            vO5.Ub();
          }
          isPlaying = false;
          if (vLoadJoy) {
            vLoadJoy.destroy();
          }
        };
        v112.onerror = function (p133) {
          try {
            if (vO5._kaTimer) {
              clearInterval(vO5._kaTimer);
              vO5._kaTimer = null;
            }
          } catch (e27) {}
          if (vO5.db === v112) {
            console.log("Socket error");
            vO5.Ub();
          }
          isPlaying = false;
          if (vLoadJoy) {
            vLoadJoy.destroy();
          }
        };
        v112.onmessage = function (p134) {
          if (vO5.db === v112) {
            vO5.z.Xb(p134.data);
          }
        };
      };
      return vO5;
    }
    var vLSHttpswormateioimages = "https://wormate.io/images/linelogo-xmas2022.png";
    var vLSimagesguestavatarxma = "/images/guest-avatar-xmas2022.png";
    var v114 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var vAtob = "https://gateway.wormate.io";
    var vAtob2 = "https://resources.wormate.io";
    var v115 = window.I18N_LANG;
    v115 ||= "en";
    var vUndefined = undefined;
    switch (v115) {
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
    var v116 = false;
    var vUndefined2 = undefined;
    var vF6 = function () {
      var vO6 = {
        Yb: eval("PIXI")
      };
      var v117 = vO6.Yb["BLEND_MODES"];
      var v118 = vO6.Yb["WRAP_MODES"];
      return {
        Zb: vO6.Yb["Container"],
        $b: vO6.Yb["BaseTexture"],
        _b: vO6.Yb["Texture"],
        ac: vO6.Yb["Renderer"],
        bc: vO6.Yb["Graphics"],
        cc: vO6.Yb["Shader"],
        dc: vO6.Yb["Rectangle"],
        ec: vO6.Yb["Sprite"],
        fc: vO6.Yb["Text"],
        gc: vO6.Yb["Geometry"],
        hc: vO6.Yb["Mesh"],
        ic: {
          jc: v117["ADD"]
        },
        kc: {
          lc: v118["REPEAT"]
        }
      };
    }();
    var v119 = Math.PI * 2;
    (function () {
      var vLSZ2V0 = "Z2V0";
      var vLS = "=";
      var v120 = vLSZ2V0 + "SW50";
      var v121 = vLSZ2V0 + "RmxvYXQ";
      var vA6 = [atob(v120 + "OA=="), atob(v120 + "MTY" + vLS), atob(v120 + "MzI" + vLS), atob(v121 + "zMg=="), atob(v121 + "2NA==")];
      DataView.prototype.mc = function (p135) {
        return this[vA6[0]](p135);
      };
      DataView.prototype.nc = function (p136) {
        return this[vA6[1]](p136);
      };
      DataView.prototype.oc = function (p137) {
        return this[vA6[2]](p137);
      };
      DataView.prototype.pc = function (p138) {
        return this[vA6[3]](p138);
      };
      DataView.prototype.qc = function (p139) {
        return this[vA6[4]](p139);
      };
    })();
    var vF7 = function () {
      function f33(p140) {
        this.rc = p140;
        this.sc = false;
        this.tc = 1;
      }
      f33.VELOCITY_TYPE = 0;
      f33.FLEXIBLE_TYPE = 1;
      f33.MAGNETIC_TYPE = 2;
      f33.ZOOM_TYPE = 6;
      f33.X2_TYPE = 3;
      f33.X5_TYPE = 4;
      f33.X10_TYPE = 5;
      return f33;
    }();
    var vF9 = function () {
      function f34() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = vF10.yc();
      }
      function f35(p141, p142) {
        for (var v122 in p141) {
          if (p141.hasOwnProperty(v122)) {
            p142(v122, p141[v122]);
          }
        }
      }
      f34.prototype.a = function () {
        this.L();
      };
      f34.prototype.W = function () {
        return this.wc != null;
      };
      f34.prototype.zc = function () {
        if (this.wc != null) {
          return this.wc.revision;
        } else {
          return -1;
        }
      };
      f34.prototype.Ac = function () {
        return this.wc;
      };
      f34.prototype.L = function () {
        var vThis2 = this;
        $.get(vAtob2 + "/dynamic/assets/revision.json", function (p143) {
          if (p143 > vThis2.zc()) {
            vThis2.Bc();
          }
        });
      };
      f34.prototype.Bc = function () {
        var vThis3 = this;
        $.get(vAtob2 + "/dynamic/assets/registry.json", function (p144) {
          if (p144.revision > vThis3.zc()) {
            vThis3.Cc(p144);
          }
        });
      };
      f34.prototype.ca = function (p145) {
        this.uc.push(p145);
      };
      f34.prototype.Dc = function () {
        return this.xc;
      };
      f34.prototype.Ec = function () {
        for (var vLN014 = 0; vLN014 < this.uc.length; vLN014++) {
          this.uc[vLN014]();
        }
      };
      f34.prototype.Fc = function (p146, p147) {
        if (!(p146.revision <= this.zc())) {
          var vP147 = p147;
          f35(this.vc, function (p148, p149) {
            var v123 = vP147[p148];
            if (v123 == null || p149.Gc !== v123.Gc) {
              print("disposing prev texture: " + p148 + " at " + p149.Gc);
              p149.Hc.destroy();
            }
          });
          this.vc = vP147;
          this.wc = p146;
          this.xc = vF10.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      f34.prototype.Cc = function (p150) {
        var vO7 = {};
        (function (p151, p152) {
          for (var v124 in p151) {
            if (p151.hasOwnProperty(v124)) {
              p152(v124, p151[v124]);
            }
          }
        })(p150.textureDict, function (p153, p154) {
          var v125 = p154.custom ? p154.relativePath : vAtob2 + p154.relativePath;
          try {
            vO7[p153] = new vF21(v125, vF6.$b.from(p154.file || v125));
          } catch (e28) {
            console.log(v125);
          }
        });
        this.Fc(p150, vO7);
      };
      return f34;
    }();
    var vF10 = function () {
      function f36() {
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
      function f37(p155, p156) {
        for (var v126 in p155) {
          if (p155.hasOwnProperty(v126)) {
            p156(v126, p155[v126]);
          }
        }
      }
      f36.yc = function () {
        var v127 = new vF10();
        v127.Jc = {};
        v127.Kc = {
          Zc: null,
          $c: null
        };
        v127.Lc = {};
        v127.Mc = {
          Zc: null
        };
        v127.Nc = {};
        v127.Oc = {
          _c: "#FFFFFF",
          Zc: [],
          $c: []
        };
        v127.Pc = {};
        v127.Qc = {
          ad: {},
          bd: v127.Oc,
          cd: v127.Kc
        };
        v127.Rc = {};
        v127.Sc = {
          Zc: []
        };
        v127.Tc = {};
        v127.Uc = {
          Zc: []
        };
        v127.Vc = {};
        v127.Wc = {
          Zc: []
        };
        v127.Xc = {};
        v127.Yc = {
          Zc: []
        };
        return v127;
      };
      f36.Ic = function (p157, p158) {
        var v128 = new vF10();
        var vO8 = {};
        f37(p157.colorDict, function (p159, p160) {
          vO8[p159] = p160;
        });
        var vO9 = {};
        f37(p157.regionDict, function (p161, p162) {
          vO9[p161] = new vF39(p158[p162.texture].Hc, p162.x, p162.y, p162.w, p162.h, p162.px, p162.py, p162.pw, p162.ph);
        });
        v128.Nc = {};
        for (var vLN015 = 0; vLN015 < p157.skinArrayDict.length; vLN015++) {
          var v129 = p157.skinArrayDict[vLN015];
          v128.Nc[v129.id] = new vF10.WormSkinData("#" + vO8[v129.prime], v129.base.map(function (p163) {
            return vO9[p163];
          }), v129.glow.map(function (p164) {
            return vO9[p164];
          }));
        }
        var v130 = p157.skinUnknown;
        v128.Oc = new vF10.WormSkinData("#" + vO8[v130.prime], v130.base.map(function (p165) {
          return vO9[p165];
        }), v130.glow.map(function (p166) {
          return vO9[p166];
        }));
        v128.Rc = {};
        f37(p157.eyesDict, function (p167, p168) {
          p167 = parseInt(p167);
          v128.Rc[p167] = new vF10.WearSkinData(p168.base.map(function (p169) {
            return vO9[p169.region];
          }));
        });
        v128.Sc = new vF10.WearSkinData(p157.eyesUnknown.base.map(function (p170) {
          return vO9[p170.region];
        }));
        v128.Tc = {};
        f37(p157.mouthDict, function (p171, p172) {
          p171 = parseInt(p171);
          v128.Tc[p171] = new vF10.WearSkinData(p172.base.map(function (p173) {
            return vO9[p173.region];
          }));
        });
        v128.Uc = new vF10.WearSkinData(p157.mouthUnknown.base.map(function (p174) {
          return vO9[p174.region];
        }));
        v128.Vc = {};
        f37(p157.glassesDict, function (p175, p176) {
          p175 = parseInt(p175);
          v128.Vc[p175] = new vF10.WearSkinData(p176.base.map(function (p177) {
            return vO9[p177.region];
          }));
        });
        v128.Wc = new vF10.WearSkinData(p157.glassesUnknown.base.map(function (p178) {
          return vO9[p178.region];
        }));
        v128.Xc = {};
        f37(p157.hatDict, function (p179, p180) {
          p179 = parseInt(p179);
          v128.Xc[p179] = new vF10.WearSkinData(p180.base.map(function (p181) {
            return vO9[p181.region];
          }));
        });
        v128.Yc = new vF10.WearSkinData(p157.hatUnknown.base.map(function (p182) {
          return vO9[p182.region];
        }));
        v128.Jc = {};
        f37(p157.portionDict, function (p183, p184) {
          p183 = parseInt(p183);
          v128.Jc[p183] = new vF10.PortionSkinData(vO9[p184.base], vO9[p184.glow]);
        });
        var v131 = p157.portionUnknown;
        v128.Kc = new vF10.PortionSkinData(vO9[v131.base], vO9[v131.glow]);
        v128.Lc = {};
        f37(p157.abilityDict, function (p185, p186) {
          p185 = parseInt(p185);
          v128.Lc[p185] = new vF10.AbilitySkinData(vO9[p186.base]);
        });
        var v132 = p157.abilityUnknown;
        v128.Mc = new vF10.AbilitySkinData(vO9[v132.base]);
        v128.Pc = {};
        f37(p157.teamDict, function (p187, p188) {
          p187 = parseInt(p187);
          v128.Pc[p187] = new vF10.TeamSkinData(p188.name, new vF10.WormSkinData("#" + vO8[p188.skin.prime], [], p188.skin.glow.map(function (p189) {
            return vO9[p189];
          })), new vF10.PortionSkinData([], vO9[p188.portion.glow]));
        });
        v128.Qc = new vF10.TeamSkinData({}, v128.Oc, v128.Kc);
        return v128;
      };
      f36.prototype.dd = function (p190) {
        var v133 = this.Nc[p190];
        return v133 || this.Oc;
      };
      f36.prototype.ed = function (p191) {
        var v134 = this.Pc[p191];
        return v134 || this.Qc;
      };
      f36.prototype.fd = function (p192) {
        var v135 = this.Rc[p192];
        return v135 || this.Sc;
      };
      f36.prototype.gd = function (p193) {
        var v136 = this.Tc[p193];
        return v136 || this.Uc;
      };
      f36.prototype.hd = function (p194) {
        var v137 = this.Vc[p194];
        return v137 || this.Wc;
      };
      f36.prototype.jd = function (p195) {
        var v138 = this.Xc[p195];
        return v138 || this.Yc;
      };
      f36.prototype.kd = function (p196) {
        var v139 = this.Jc[p196];
        return v139 || this.Kc;
      };
      f36.prototype.ld = function (p197) {
        var v140 = this.Lc[p197];
        return v140 || this.Mc;
      };
      f36.TeamSkinData = function () {
        function f38(p198, p199, p200) {
          this.ad = p198;
          this.bd = p199;
          this.cd = p200;
        }
        return f38;
      }();
      f36.WormSkinData = function () {
        function f39(p201, p202, p203) {
          this._c = p201;
          this.Zc = p202;
          this.$c = p203;
        }
        return f39;
      }();
      f36.WearSkinData = function () {
        function f40(p204) {
          this.Zc = p204;
        }
        return f40;
      }();
      f36.PortionSkinData = function () {
        function f41(p205, p206) {
          this.Zc = p205;
          this.$c = p206;
        }
        return f41;
      }();
      f36.AbilitySkinData = function () {
        function f42(p207) {
          this.Zc = p207;
        }
        return f42;
      }();
      return f36;
    }();
    var vF11 = function () {
      function f43() {
        this.md = vF11.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      f43.prototype.a = function () {};
      f43.prototype.rd = function (p208) {
        this.od = p208;
      };
      f43.prototype.G = function (p209) {
        this.md = p209;
        this.sd();
      };
      f43.prototype.td = function (p210) {
        this.nd = p210;
        this.sd();
      };
      f43.prototype.sd = function () {};
      f43.prototype.ud = function (p211, p212) {
        if (!f5().p.W) {
          return null;
        }
        var v141 = p211[p212];
        if (v141 == null || v141.length == 0) {
          return null;
        } else {
          return v141[Math.floor(Math.random() * v141.length)].cloneNode();
        }
      };
      f43.prototype.vd = function (p213, p214, p215) {
        if (this.od && !(p215 <= 0)) {
          var v142 = this.ud(p213, p214);
          if (v142 != null) {
            v142.volume = Math.min(1, p215);
            v142.play();
          }
        }
      };
      f43.prototype.wd = function (p216, p217) {
        if (this.md.xd) {
          this.vd(app.q.yd, p216, p217);
        }
      };
      f43.prototype.zd = function (p218, p219) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, p218, p219);
        }
      };
      f43.prototype.Cd = function () {};
      f43.prototype.Dd = function () {};
      f43.prototype.Ed = function () {};
      f43.prototype.Fd = function () {};
      f43.prototype.Gd = function () {};
      f43.prototype.Hd = function () {};
      f43.prototype.Id = function (p220, p221, p222) {};
      f43.prototype.Jd = function (p223) {};
      f43.prototype.Kd = function (p224) {};
      f43.prototype.Ld = function (p225) {};
      f43.prototype.Md = function (p226) {};
      f43.prototype.Nd = function (p227) {};
      f43.prototype.Od = function (p228) {};
      f43.prototype.Pd = function (p229) {};
      f43.prototype.Qd = function (p230) {};
      f43.prototype.Rd = function (p231) {};
      f43.prototype.Sd = function (p232) {};
      f43.prototype.Td = function (p233) {};
      f43.prototype.Ud = function (p234) {};
      f43.prototype.Vd = function (p235) {};
      f43.prototype.Wd = function (p236) {};
      f43.prototype.Xd = function (p237, p238) {};
      f43.prototype.Yd = function (p239) {};
      f43.prototype.Zd = function (p240, p241, p242) {};
      (function () {
        function f44(p243) {
          this.$d = new vF12(p243, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        f44.prototype.be = function (p244) {
          if (p244) {
            this.b();
          } else {
            this.ce();
          }
        };
        f44.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0;
            this.$d.ee(1500, 100);
          }
        };
        f44.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(1500, 100);
          }
        };
      })();
      (function () {
        function f45(p245) {
          this.ge = p245.map(function (p246) {
            return new vF12(p246, 0.4);
          });
          f46(this.ge, 0, this.ge.length);
          this.he = null;
          this.ie = 0;
          this.ae = false;
          this.je = 10000;
        }
        function f46(p247, p248, p249) {
          for (var v143 = p249 - 1; v143 > p248; v143--) {
            var v144 = p248 + Math.floor(Math.random() * (v143 - p248 + 1));
            var v145 = p247[v143];
            p247[v143] = p247[v144];
            p247[v144] = v145;
          }
        }
        f45.prototype.be = function (p250) {
          if (p250) {
            this.b();
          } else {
            this.ce();
          }
        };
        f45.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(1500);
          }
        };
        f45.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (this.he != null) {
              this.he.fe(800, 50);
            }
          }
        };
        f45.prototype.ke = function (p251) {
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
            this.he.ee(p251, 100);
            var v146 = (this.he._d.duration - this.he._d.currentTime) * 1000 - this.je;
            var vThis4 = this;
            var vSetTimeout = setTimeout(function () {
              if (vThis4.ae && vSetTimeout == vThis4.ie) {
                vThis4.he.fe(vThis4.je, 100);
                vThis4.he = vThis4.le();
                vThis4.he._d.currentTime = 0;
                vThis4.ke(vThis4.je);
              }
            }, v146);
            this.ie = vSetTimeout;
          }
        };
        f45.prototype.le = function () {
          var v147 = this.ge[0];
          var v148 = Math.max(1, this.ge.length / 2);
          f46(this.ge, v148, this.ge.length);
          this.ge.push(this.ge.shift());
          return v147;
        };
      })();
      var vF12 = function () {
        function f47(p252, p253) {
          this._d = p252;
          this.me = p253;
          this.de = 0;
          p252.volume = 0;
          this.ne = 0;
          this.oe = false;
        }
        f47.prototype.ee = function (p254, p255) {
          console.log("fade IN " + this._d.src);
          this.pe(true, p254, p255);
        };
        f47.prototype.fe = function (p256, p257) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, p256, p257);
        };
        f47.prototype.pe = function (p258, p259, p260) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var vThis5 = this;
          var v149 = 1 / (p259 / p260);
          var vSetInterval = setInterval(function () {
            if (vThis5.oe && vSetInterval != vThis5.ne) {
              clearInterval(vSetInterval);
              return;
            }
            if (p258) {
              vThis5.de = Math.min(1, vThis5.de + v149);
              vThis5._d.volume = vThis5.de * vThis5.me;
              if (vThis5.de >= 1) {
                vThis5.oe = false;
                clearInterval(vSetInterval);
              }
            } else {
              vThis5.de = Math.max(0, vThis5.de - v149);
              vThis5._d.volume = vThis5.de * vThis5.me;
              if (vThis5.de <= 0) {
                vThis5._d.pause();
                vThis5.oe = false;
                clearInterval(vSetInterval);
              }
            }
          }, p260);
          this.oe = true;
          this.ne = vSetInterval;
          this._d.play();
        };
        return f47;
      }();
      f43.AudioState = {
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
      return f43;
    }();
    var vF13 = function () {
      function f48(p261) {
        this.se = p261;
        this.te = p261.get()[0];
        this.ue = new vF6.ac({
          view: this.te,
          backgroundColor: vLN016,
          antialias: true
        });
        this.ve = new vF6.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var vLN016 = 0;
      var vF14 = function (p262, p263) {
        return p262 + Math.random(p263 - p262);
      };
      var vF15 = function (p264) {
        if (p264 >= 0) {
          return Math.cos(p264 % v119);
        } else {
          return Math.cos(p264 % v119 + v119);
        }
      };
      var vF16 = function (p265) {
        if (p265 >= 0) {
          return Math.sin(p265 % v119);
        } else {
          return Math.sin(p265 % v119 + v119);
        }
      };
      var vA7 = [{
        ze: vF14(0, v119),
        Ae: vF14(0, v119),
        Be: vF14(0.1, 0.5),
        Ce: 1,
        De: 2,
        Ee: 16737962
      }, {
        ze: vF14(0, v119),
        Ae: vF14(0, v119),
        Be: vF14(0.1, 0.5),
        Ce: 1.5,
        De: 1.5,
        Ee: 16746632
      }, {
        ze: vF14(0, v119),
        Ae: vF14(0, v119),
        Be: vF14(0.1, 0.5),
        Ce: 2,
        De: 1,
        Ee: 16755302
      }, {
        ze: vF14(0, v119),
        Ae: vF14(0, v119),
        Be: vF14(0.1, 0.5),
        Ce: 3,
        De: 2,
        Ee: 11206502
      }, {
        ze: vF14(0, v119),
        Ae: vF14(0, v119),
        Be: vF14(0.1, 0.5),
        Ce: 2.5,
        De: 2.5,
        Ee: 8978312
      }, {
        ze: vF14(0, v119),
        Ae: vF14(0, v119),
        Be: vF14(0.1, 0.5),
        Ce: 2,
        De: 3,
        Ee: 6750122
      }, {
        ze: vF14(0, v119),
        Ae: vF14(0, v119),
        Be: vF14(0.1, 0.5),
        Ce: 5,
        De: 4,
        Ee: 6728447
      }, {
        ze: vF14(0, v119),
        Ae: vF14(0, v119),
        Be: vF14(0.1, 0.5),
        Ce: 4.5,
        De: 4.5,
        Ee: 8947967
      }, {
        ze: vF14(0, v119),
        Ae: vF14(0, v119),
        Be: vF14(0.1, 0.5),
        Ce: 4,
        De: 5,
        Ee: 11167487
      }];
      f48.prototype.a = function () {
        var vF52 = f5();
        this.ue.backgroundColor = vLN016;
        this.we = new Array(vA7.length);
        for (var vLN017 = 0; vLN017 < this.we.length; vLN017++) {
          this.we[vLN017] = new vF6.ec();
          this.we[vLN017].texture = vF52.q.Fe;
          this.we[vLN017].anchor.set(0.5);
          this.we[vLN017].zIndex = 1;
          this.ve.addChild(this.we[vLN017]);
        }
        this.xe = new Array(vF52.q.Ge.length);
        for (var vLN018 = 0; vLN018 < this.xe.length; vLN018++) {
          this.xe[vLN018] = new vF6.ec();
          this.xe[vLN018].texture = vF52.q.Ge[vLN018];
          this.xe[vLN018].anchor.set(0.5);
          this.xe[vLN018].zIndex = 2;
          this.ve.addChild(this.xe[vLN018]);
        }
        this.ye = new Array(this.xe.length);
        for (var vLN019 = 0; vLN019 < this.ye.length; vLN019++) {
          this.ye[vLN019] = {
            He: Math.random(),
            Ie: Math.random(),
            Je: Math.random(),
            Ke: Math.random()
          };
        }
        this.Ra();
      };
      f48.sc = false;
      f48.Le = function (p266) {
        f48.sc = p266;
      };
      f48.prototype.Ra = function () {
        var v150 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v151 = this.se.width();
        var v152 = this.se.height();
        this.ue.resize(v151, v152);
        this.ue.resolution = v150;
        this.te.width = v150 * v151;
        this.te.height = v150 * v152;
        var v153 = Math.max(v151, v152) * 0.8;
        for (var vLN020 = 0; vLN020 < this.we.length; vLN020++) {
          this.we[vLN020].width = v153;
          this.we[vLN020].height = v153;
        }
      };
      f48.prototype.Pa = function (p267, p268) {
        if (f48.sc) {
          var v154 = p267 / 1000;
          var v155 = p268 / 1000;
          var v156 = this.se.width();
          var v157 = this.se.height();
          for (var vLN021 = 0; vLN021 < this.we.length; vLN021++) {
            var v158 = vA7[vLN021 % vA7.length];
            var v159 = this.we[vLN021];
            var vVF15 = vF15(v158.Ce * (v154 * 0.08) + v158.Ae);
            var vVF16 = vF16(v158.De * (v154 * 0.08));
            var v160 = 0.2 + vF15(v158.Ae + v158.Be * v154) * 0.2;
            v159.tint = v158.Ee;
            v159.alpha = v160;
            v159.position.set(v156 * (0.2 + (vVF15 + 1) * 0.5 * 0.6), v157 * (0.1 + (vVF16 + 1) * 0.5 * 0.8));
          }
          var v161 = Math.max(v156, v157) * 0.05;
          for (var vLN022 = 0; vLN022 < this.xe.length; vLN022++) {
            var v162 = this.ye[vLN022];
            var v163 = this.xe[vLN022];
            var v164 = v119 * vLN022 / this.xe.length + v162.He;
            v162.Ke += v162.Ie * v155;
            if (v162.Ke > 1.3) {
              v162.He = Math.random() * v119;
              v162.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              v162.Je = 0.15 + Math.random() * 0.7;
              v162.Ke = -0.3;
            }
            var v165 = v162.Je + Math.sin(Math.sin(v164 + v154 * 0.48) * 6) * 0.03;
            var v166 = v162.Ke;
            var vF162 = f16(Math.sin(Math.PI * v166), 0.1, 1);
            var v167 = (0.4 + (1 + Math.sin(v164 + v154 * 0.12)) * 0.5 * 1.2) * 0.5;
            var v168 = v164 + v162.Ie * 2 * v154;
            v163.alpha = vF162;
            v163.position.set(v156 * v165, v157 * v166);
            v163.rotation = v168;
            var v169 = v163.texture.width / v163.texture.height;
            v163.width = v167 * v161;
            v163.height = v167 * v161 * v169;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return f48;
    }();
    var vF17 = function () {
      function f49() {}
      f49.Na = "consent_state_2";
      f49.ya = "showPlayerNames";
      f49.Me = "musicEnabled";
      f49.Ne = "sfxEnabled";
      f49.Oe = "account_type";
      f49.va = "gameMode";
      f49.Aa = "nickname";
      f49.Ba = "skin";
      f49.d = "prerollCount";
      f49.La = "shared";
      return f49;
    }();
    var vF18 = function () {
      function f50(p269, p270, p271) {
        var v170 = false;
        for (var v171 = p271.length, vLN023 = 0, v172 = v171 - 1; vLN023 < v171; v172 = vLN023++) {
          if (p271[vLN023][1] > p270 != p271[v172][1] > p270 && p269 < (p271[v172][0] - p271[vLN023][0]) * (p270 - p271[vLN023][1]) / (p271[v172][1] - p271[vLN023][1]) + p271[vLN023][0]) {
            v170 = !v170;
          }
        }
        return v170;
      }
      var vA8 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        Oa: function (p272, p273) {
          return f50(p273, p272, vA8);
        }
      };
    }();
    var vF19 = function () {
      function f51(p274) {
        var vUndefined3 = undefined;
        vUndefined3 = p274 > 0 ? "+" + Math.floor(p274) : p274 < 0 ? "-" + Math.floor(p274) : "0";
        var v173 = Math.min(1.5, 0.5 + p274 / 600);
        var vUndefined4 = undefined;
        if (p274 < 1) {
          vUndefined4 = "0xFFFFFF";
        } else if (p274 < 30) {
          var v174 = (p274 - 1) / 29;
          vUndefined4 = f53((1 - v174) * 1 + v174 * 0.96, (1 - v174) * 1 + v174 * 0.82, (1 - v174) * 1 + v174 * 0);
        } else if (p274 < 300) {
          var v175 = (p274 - 30) / 270;
          vUndefined4 = f53((1 - v175) * 0.96 + v175 * 0.93, (1 - v175) * 0.82 + v175 * 0.34, (1 - v175) * 0 + v175 * 0.25);
        } else if (p274 < 700) {
          var v176 = (p274 - 300) / 400;
          vUndefined4 = f53((1 - v176) * 0.93 + v176 * 0.98, (1 - v176) * 0.34 + v176 * 0, (1 - v176) * 0.25 + v176 * 0.98);
        } else {
          vUndefined4 = f53(0.98, 0, 0.98);
        }
        var v177 = Math.random();
        var v178 = 1 + Math.random() * 0.5;
        return new vF20(vUndefined3, vUndefined4, true, 0.5, v173, v177, v178);
      }
      function f52(p275, p276) {
        var vUndefined5 = undefined;
        var vUndefined6 = undefined;
        if (p276) {
          vUndefined5 = 1.3;
          vUndefined6 = f53(0.93, 0.34, 0.25);
        } else {
          vUndefined5 = 1.1;
          vUndefined6 = f53(0.96, 0.82, 0);
        }
        return new vF20(p275, vUndefined6, true, 0.5, vUndefined5, 0.5, 0.7);
      }
      function f53(p277, p278, p279) {
        return ((p277 * 255 & 255) << 16) + ((p278 * 255 & 255) << 8) + (p279 * 255 & 255);
      }
      var vF132 = f13(vF6.Zb, function () {
        vF6.Zb.call(this);
        this.Pe = [];
        this.Qe = 0;
      });
      vF132.prototype.Re = function (p280) {
        this.Qe += p280;
        if (this.Qe >= 1) {
          var v179 = Math.floor(this.Qe);
          this.Qe -= v179;
          var vF51 = f51(v179);
          this.addChild(vF51);
          this.Pe.push(vF51);
        }
      };
      vF132.prototype.Se = function (p281) {
        vF100("count", p281);
        if (p281) {
          if (gameSettings.ModeStremerheadshot) {} else {
            var v180 = document.createElement("audio");
            v180.src = "https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3";
            v180.preload = "auto";
            v180.play();
          }
          ;
          var vF522 = f52(f8("index.game.floating.headshot") + "☠️", true);
          this.addChild(vF522);
          this.Pe.push(vF522);
          if (vF522) {
            gameSettings.emoji_headshot = true;
            setTimeout(function () {
              gameSettings.emoji_headshot = false;
            }, 3000);
          }
        } else {
          var vF522 = f52(f8("index.game.floating.wellDone") + "🔪", false);
          this.addChild(vF522);
          this.Pe.push(vF522);
          if (vF522) {
            gameSettings.emoji_kill = true;
            setTimeout(function () {
              gameSettings.emoji_kill = false;
            }, 3000);
          }
        }
      };
      vF132.prototype.Te = function (p282, p283) {
        var v181 = f5().s.H.wb;
        var v182 = v181.ue.width / v181.ue.resolution;
        var v183 = v181.ue.height / v181.ue.resolution;
        var vLN024 = 0;
        while (vLN024 < this.Pe.length) {
          var v184 = this.Pe[vLN024];
          v184.Ue = v184.Ue + p283 / 2000 * v184.Ve;
          v184.We = v184.We + p283 / 2000 * v184.Xe;
          v184.alpha = Math.sin(Math.PI * v184.We) * 0.5;
          v184.scale.set(v184.Ue);
          v184.position.x = v182 * (0.25 + v184.Ye * 0.5);
          v184.position.y = v184.Ze ? v183 * (1 - (1 + v184.We) * 0.5) : v183 * (1 - (0 + v184.We) * 0.5);
          if (v184.We > 1) {
            f22(v184);
            this.Pe.splice(vLN024, 1);
            vLN024--;
          }
          vLN024++;
        }
      };
      var vF20 = function () {
        return f13(vF6.fc, function (p284, p285, p286, p287, p288, p289, p290) {
          vF6.fc.call(this, p284, {
            fill: p285,
            fontFamily: "vuonghiep",
            fontSize: 36,
            fontWeight: "bold"
          });
          this.anchor.set(0.5);
          this.Ze = p286;
          this.Ue = p287;
          this.Ve = p288;
          this.Ye = p289;
          this.We = 0;
          this.Xe = p290;
        });
      }();
      return vF132;
    }();
    var vF21 = function () {
      function f54(p291, p292) {
        this.Gc = p291;
        this.Hc = p292;
      }
      return f54;
    }();
    var vO10 = {
      $e: 0,
      _e: 16
    };
    var vF22 = function () {
      function f55() {
        this.af = vO10.$e;
        this.bf = 0;
        this.ub = 500;
        this.cf = 4000;
        this.df = 7000;
      }
      f55.TEAM_DEFAULT = 0;
      f55.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return f55;
    }();
    var vF23 = function () {
      function f56(p293) {
        this.se = p293;
        this.te = p293.get()[0];
        this.ue = new vF6.ac({
          view: this.te,
          backgroundColor: vLN025,
          antialias: true
        });
        this.ve = new vF6.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(Math.random() * 360);
        this.gf = 0;
        this.hf = 0;
        this.if = 15;
        this.jf = 0.5;
        this.kf = 0;
        this.lf = new vF45();
        this.mf = new vF6.bc();
        this.nf = new vF6.Zb();
        this.pf = new vF6.Zb();
        this.pf.sortableChildren = true;
        this.qf = new vF6.Zb();
        this.rf = new vF6.Zb();
        this.rf.sortableChildren = true;
        this.sf = new vF6.Zb();
        this.tf = new vF24();
        this.uf = new vF26();
        this.vf = new vF28();
        this.wf = new vF19();
        this.xf = new vF6.ec();
        this.yf = {
          x: 0,
          y: -20
        };
        this.a();
      }
      var vLN025 = 0;
      f56.prototype.a = function () {
        this.ue.backgroundColor = vLN025;
        this.lf.zf.zIndex = 10;
        this.ve.addChild(this.lf.zf);
        this.mf.zIndex = 20;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 5000;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 5100;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 10000;
        this.ve.addChild(this.qf);
        this.xf.texture = f5().q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 1;
        this.tf.zIndex = 4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      f56.prototype.Ra = function () {
        var v185 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v186 = this.se.width();
        var v187 = this.se.height();
        this.ue.resize(v186, v187);
        this.ue.resolution = v185;
        this.te.width = v185 * v186;
        this.te.height = v185 * v187;
        this.jf = Math.min(Math.min(v186, v187), Math.max(v186, v187) * 0.625);
        this.xf.position.x = v186 / 2;
        this.xf.position.y = v187 / 2;
        this.xf.width = v186;
        this.xf.height = v187;
        this.vf.position.x = v186 - 225;
        this.vf.position.y = 1;
        window.changedNf = () => this.jf = Math.min(Math.max(v186, v187), window.multiplier * Math.min(v186, v187));
        if (gameSettings.ModeStremer) {
          var v188 = v186 / 2;
          var v189 = v187 / 2;
          var vLN100 = 100;
          this.tf.position.x = v188 + this.tf.width / 9 + vLN100;
          this.uf.position.x = v188 - this.tf.width / 0.7 + vLN100;
          this.vf.position.x = v188 - this.vf.width / 4 - vLN100;
        } else {
          this.tf.position.x = 60;
          this.uf.position.x = 110;
          this.vf.position.x = v186 - 200;
        }
        this.tf.position.y = 60;
        this.uf.position.y = 10;
        this.vf.position.y = 2;
        this.tf.addChild(ctx.clock);
        this.tf.addChild(ctx.clockan);
        this.vf.addChild(ctx.value_server);
        this.vf.addChild(ctx.containerImgS);
        this.tf.addChild(ctx.borderImg);
        window.retundFlagError = () => {
          return ctx.containerImgS.texture = PIXI.Texture.fromImage(gameSettings.flag);
        };
        this.tf.addChild(ctx.containerCountInfo);
      };
      f56.prototype.Te = function (p294, p295) {
        var vF53 = f5();
        this.if = 15;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(p294.af == vO10.$e ? vF53.q.Cf : vF53.q.Df);
        var v190 = this.mf;
        v190.clear();
        v190.lineStyle(0.8, 65535);
        v190.drawCircle(0, 0, p294.ub);
        v190.endFill();
        this.vf.Ef = p295;
        this.sf.visible = p295;
      };
      f56.prototype.Pa = function (p296, p297) {
        if (!(this.ue.width <= 5)) {
          var vF54 = f5();
          var v191 = vF54.o.N;
          var v192 = this.ue.width / this.ue.resolution;
          var v193 = this.ue.height / this.ue.resolution;
          this.if = f17(this.if, vF54.o.jb, p297, 0.002);
          var v194 = this.jf / this.if;
          var v195 = vF54.o.N.Ff[vF7.ZOOM_TYPE];
          var v196 = v195 != null && v195.sc;
          this.kf = f15(0, 1, this.kf + p297 / 1000 * ((v196 ? 1 : 0) * 0.1 - this.kf));
          this.xf.alpha = this.kf;
          this.ff = this.ff + p297 * 0.01;
          if (this.ff > 360) {
            this.ff = this.ff % 360;
          }
          this.gf = Math.sin(p296 / 1200 * 2 * Math.PI);
          var v197 = v191.Gf();
          this.yf.x = f18(this.yf.x, v197.x, p297, gameSettings.smoothCamera, 33.333);
          this.yf.y = f18(this.yf.y, v197.y, p297, 0.5, 33.333);
          var v198 = v192 / v194 / 2;
          var v199 = v193 / v194 / 2;
          vF54.o.yb(this.yf.x - v198 * 1.3, this.yf.x + v198 * 1.3, this.yf.y - v199 * 1.3, this.yf.y + v199 * 1.3);
          this.lf.Te(this.yf.x, this.yf.y, v198 * 2, v199 * 2);
          var v200 = vF54.o.fb.ub;
          this.ve.scale.x = v194;
          this.ve.scale.y = v194;
          this.ve.position.x = v192 / 2 - this.yf.x * v194;
          this.ve.position.y = v193 / 2 - this.yf.y * v194;
          var v201 = Math.hypot(v197.x, v197.y);
          if (v201 > v200 - 10) {
            this.hf = f15(0, 1, 1 + (v201 - v200) / 10);
            var v202 = Math.cos(this.ff * v119 / 360) * (1 - this.hf) + this.hf * 1;
            var v203 = Math.sin(this.ff * v119 / 360) * (1 - this.hf);
            var v204 = (Math.atan2(v203, v202) + v119) % v119 * 360 / v119;
            var v205 = this.hf * (0.5 + this.gf * 0.5);
            var vF25 = f25(Math.floor(v204), 1, 0.75 - this.hf * 0.25);
            this.lf.Hf(vF25[0], vF25[1], vF25[2], 0.1 + v205 * 0.2);
          } else {
            this.hf = 0;
            var vF252 = f25(Math.floor(this.ff), 1, 0.75);
            this.lf.Hf(vF252[0], vF252[1], vF252[2], 0.1);
          }
          var vLN026 = 0;
          for (; vLN026 < this.sf.children.length; vLN026++) {
            var v206 = this.sf.children[vLN026];
            v206.position.x = v192 / 2 - (this.yf.x - v206.If.x) * v194;
            v206.position.y = v193 / 2 - (this.yf.y - v206.If.y) * v194;
          }
          this.tf.Jf.position.x = v197.x / v200 * this.tf.Kf;
          this.tf.Jf.position.y = v197.y / v200 * this.tf.Kf;
          this.uf.Qa(p296);
          this.wf.Te(p296, p297);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      f56.prototype.Lf = function (p298, p299) {
        p299.Of.Nf.Mf().zIndex = (p298 + 2147483648) / 4294967296 * 5000;
        this.nf.addChild(p299.Of.Pf.Mf());
        this.pf.addChild(p299.Of.Nf.Mf());
      };
      f56.prototype.Qf = function (p300, p301, p302) {
        p301.Rf.zIndex = f5().o.fb.bf ? 0 : 10 + (p300 + 32768) / 65536 * 5000;
        this.qf.addChild(p301.Rf);
        if (p300 != f5().o.fb.bf) {
          this.sf.addChild(p302);
        }
      };
      var vF24 = function () {
        return f13(vF6.Zb, function () {
          vF6.Zb.call(this);
          this.Kf = 40;
          this.Sf = new vF6.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new vF6.bc();
          var v207 = new vF6.bc();
          v207.beginFill("black", 0.4);
          v207.drawCircle(0, 0, this.Kf);
          v207.endFill();
          v207.lineStyle(2, 16777215);
          v207.drawCircle(0, 0, this.Kf);
          v207.moveTo(0, -this.Kf);
          v207.lineTo(0, +this.Kf);
          v207.moveTo(-this.Kf, 0);
          v207.lineTo(+this.Kf, 0);
          v207.endFill();
          this.Sf.alpha = 0.55;
          this.Jf.zIndex = 2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(16711680);
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.Jf.lineStyle(1, "black");
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.addChild(v207);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
        });
      }();
      var vF26 = function () {
        var vF133 = f13(vF6.Zb, function () {
          vF6.Zb.call(this);
          this.Tf = {};
        });
        vF133.prototype.Qa = function (p303) {
          var v208 = 0.5 + Math.cos(v119 * (p303 / 1000 / 1.6)) * 0.5;
          var v209;
          for (v209 in this.Tf) {
            var v210 = this.Tf[v209];
            var v211 = v210.Uf;
            v210.alpha = 1 - v211 + v211 * v208;
          }
        };
        vF133.prototype.Te = function (p304) {
          var v212;
          for (v212 in this.Tf) {
            if (p304[v212] == null || !p304[v212].sc) {
              f22(this.Tf[v212]);
              delete this.Tf[v212];
            }
          }
          var vLN027 = 0;
          var v213;
          for (v213 in p304) {
            var v214 = p304[v213];
            if (v214.sc) {
              var v215 = this.Tf[v213];
              if (!v215) {
                var v216 = f5().p.Dc().ld(v214.rc).Zc;
                v215 = new vF27();
                v215.texture = v216.Hc;
                v215.width = 35;
                v215.height = 35;
                this.Tf[v213] = v215;
                this.addChild(v215);
              }
              f4(this, v213, v214.tc);
              v215.Uf = v214.tc;
              if (gameSettings.ModeStremer) {
                v215.position.x = vLN027 + 225;
              } else {
                v215.position.x = vLN027;
              }
              vLN027 = vLN027 + 40;
            }
          }
        };
        var vF27 = function () {
          return f13(vF6.ec, function () {
            vF6.ec.call(this);
            this.Uf = 0;
          });
        }();
        return vF133;
      }();
      var vF28 = function () {
        var vF134 = f13(vF6.Zb, function () {
          vF6.Zb.call(this);
          this.Ef = true;
          this.Vf = 12;
          this.Wf = 9;
          this.Pe = [];
          var vLN028 = 0;
          for (; vLN028 < 14; vLN028++) {
            this.Xf();
          }
        });
        vF134.prototype.Te = function (p305) {
          var vF55 = f5();
          var v217 = vF55.o.fb.af == vO10._e;
          var vLN029 = 0;
          var vLN030 = 0;
          if (vLN030 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[vLN030].Yf(5, "white");
          this.Pe[vLN030].Zf("", f8("index.game.leader.top10"), "(" + vF55.o.tb + " online)");
          this.Pe[vLN030].position.y = vLN029;
          vLN029 = vLN029 + this.Vf;
          vLN030 = vLN030 + 1;
          if (p305.$f.length > 0) {
            vLN029 = vLN029 + this.Wf;
          }
          var vLN031 = 0;
          for (; vLN031 < p305.$f.length; vLN031++) {
            var v218 = p305.$f[vLN031];
            var v219 = vF55.p.Dc().ed(v218._f);
            if (vLN030 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN030].Yf(0.8, v219.bd._c);
            this.Pe[vLN030].Zf("" + (vLN031 + 1), f9(v219.ad), "" + Math.floor(v218.M));
            this.Pe[vLN030].position.y = vLN029;
            vLN029 = vLN029 + this.Vf;
            vLN030 = vLN030 + 1;
          }
          if (p305.ag.length > 0) {
            vLN029 = vLN029 + this.Wf;
          }
          var vLN032 = 0;
          for (; vLN032 < p305.ag.length; vLN032++) {
            var v220 = p305.ag[vLN032];
            var v221 = vF55.o.fb.bf == v220.bg;
            var vUndefined7 = undefined;
            var vUndefined8 = undefined;
            if (v221) {
              vUndefined7 = "yellow";
              vUndefined8 = vF55.o.N.Mb.ad;
            } else {
              var v222 = vF55.o.hb[v220.bg];
              if (v222 != null) {
                vUndefined7 = v217 ? vF55.p.Dc().ed(v222.Mb.cg).bd._c : vF55.p.Dc().dd(v222.Mb.dg)._c;
                vUndefined8 = this.Ef ? v222.Mb.ad : "---";
              } else {
                vUndefined7 = "gray";
                vUndefined8 = "?";
              }
            }
            if (v221) {
              vLN029 = vLN029 + this.Wf;
            }
            if (vLN030 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN030].Yf(v221 ? 1 : 0.8, vUndefined7);
            var v223 = Math.floor(v220.M);
            v223.customFormat();
            this.Pe[vLN030].Zf("" + (vLN032 + 1), vUndefined8, "" + v223.customFormat());
            this.Pe[vLN030].position.y = vLN029;
            vLN029 = vLN029 + this.Vf;
            vLN030 = vLN030 + 1;
            if (v221) {
              vLN029 = vLN029 + this.Wf;
            }
          }
          if (vF55.o.O > p305.ag.length) {
            vLN029 = vLN029 + this.Wf;
            if (vLN030 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN030].Yf(2, "white");
            window.tuNewScore = Math.floor(vF55.o.N.M);
            window.tuNewScore.customFormat();
            this.Pe[vLN030].Zf("" + vF55.o.O, vF55.o.N.Mb.ad, "" + window.tuNewScore.customFormat());
            this.Pe[vLN030].position.y = vLN029;
            vLN029 = vLN029 + this.Vf;
            vLN030 = vLN030 + 1;
            vLN029 = vLN029 + this.Wf;
          }
          while (this.Pe.length > vLN030) {
            f22(this.Pe.pop());
          }
        };
        vF134.prototype.Xf = function () {
          var v224 = new vF29();
          v224.position.y = 0;
          if (this.Pe.length > 0) {
            v224.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf;
          }
          this.Pe.push(v224);
          this.addChild(v224);
        };
        var vF29 = function () {
          var vF135 = f13(vF6.Zb, function () {
            vF6.Zb.call(this);
            this.eg = new vF6.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold"
            });
            this.eg.anchor.x = 1;
            this.eg.position.x = -5;
            this.addChild(this.eg);
            this.fg = new vF6.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold"
            });
            this.fg.anchor.x = 0;
            this.fg.position.x = 4;
            this.addChild(this.fg);
            this.gg = new vF6.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold"
            });
            this.gg.anchor.x = 1;
            this.gg.position.x = 200;
            this.addChild(this.gg);
          });
          vF135.prototype.Zf = function (p306, p307, p308) {
            this.eg.text = p306;
            this.gg.text = p308;
            var vP307 = p307;
            this.fg.text = vP307;
            const v225 = /x.*$/;
            while (this.fg.width > 110) {
              vP307 = vP307.replace(v225, ".");
              if (this.fg.width > 110) {
                vP307 = vP307.substring(0, vP307.length - 1);
              }
              this.fg.text = vP307;
            }
          };
          vF135.prototype.Yf = function (p309, p310) {
            this.eg.alpha = p309;
            this.eg.style.fill = p310;
            this.fg.alpha = p309;
            this.fg.style.fill = p310;
            this.gg.alpha = p309;
            this.gg.style.fill = p310;
          };
          return vF135;
        }();
        return vF134;
      }();
      return f56;
    }();
    var vF30 = function () {
      function f57(p311) {
        this.o = p311;
        this.hg = [];
        this.ig = 0;
      }
      f57.prototype.Xb = function (p312) {
        this.hg.push(new DataView(p312));
      };
      f57.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0;
      };
      f57.prototype.Bb = function () {
        for (var vLN033 = 0; vLN033 < 10; vLN033++) {
          if (this.hg.length === 0) {
            return;
          }
          var v226 = this.hg.shift();
          try {
            this.jg(v226);
          } catch (e29) {
            console.log("DataReader error: " + e29);
            throw e29;
          }
        }
      };
      f57.prototype.jg = function (p313) {
        switch (p313.mc(0) & 255) {
          case 0:
            this.kg(p313, 1);
            return;
          case 1:
            this.lg(p313, 1);
            return;
          case 2:
            this.mg(p313, 1);
            return;
          case 3:
            this.ng(p313, 1);
            return;
          case 4:
            this.og(p313, 1);
            return;
          case 5:
            this.pg(p313, 1);
            return;
        }
      };
      f57.prototype.kg = function (p314, p315) {
        console.log("sgp1");
        this.o.fb.af = p314.mc(p315);
        p315 = p315 + 1;
        var v227 = p314.nc(p315);
        p315 = p315 + 2;
        this.o.fb.bf = v227;
        this.o.N.Mb.Lb = v227;
        this.o.fb.ub = p314.pc(p315);
        p315 = p315 + 4;
        this.o.fb.cf = p314.pc(p315);
        p315 = p315 + 4;
        this.o.fb.df = p314.pc(p315);
        p315 = p315 + 4;
        f5().s.H.wb.Te(this.o.fb, f5().s.xa.wa());
        console.log("sgp2");
        return p315;
      };
      f57.prototype.lg = function (p316, p317) {
        var v228 = this.ig++;
        var v229 = p316.nc(p317);
        p317 += 2;
        var vUndefined9 = undefined;
        vUndefined9 = this.qg(p316, p317);
        p317 += this.rg(vUndefined9);
        for (var vLN034 = 0; vLN034 < vUndefined9; vLN034++) {
          p317 = this.sg(p316, p317);
        }
        vUndefined9 = this.qg(p316, p317);
        p317 += this.rg(vUndefined9);
        for (var vLN035 = 0; vLN035 < vUndefined9; vLN035++) {
          p317 = this.tg(p316, p317);
        }
        vUndefined9 = this.qg(p316, p317);
        p317 += this.rg(vUndefined9);
        for (var vLN036 = 0; vLN036 < vUndefined9; vLN036++) {
          p317 = this.ug(p316, p317);
        }
        vUndefined9 = this.qg(p316, p317);
        p317 += this.rg(vUndefined9);
        for (var vLN037 = 0; vLN037 < vUndefined9; vLN037++) {
          p317 = this.vg(p316, p317);
        }
        vUndefined9 = this.qg(p316, p317);
        p317 += this.rg(vUndefined9);
        for (var vLN038 = 0; vLN038 < vUndefined9; vLN038++) {
          p317 = this.wg(p316, p317);
        }
        vUndefined9 = this.qg(p316, p317);
        p317 += this.rg(vUndefined9);
        for (var vLN039 = 0; vLN039 < vUndefined9; vLN039++) {
          p317 = this.xg(p316, p317);
        }
        vUndefined9 = this.qg(p316, p317);
        p317 += this.rg(vUndefined9);
        for (var vLN040 = 0; vLN040 < vUndefined9; vLN040++) {
          p317 = this.yg(p316, p317);
        }
        vUndefined9 = this.qg(p316, p317);
        p317 += this.rg(vUndefined9);
        for (var vLN041 = 0; vLN041 < vUndefined9; vLN041++) {
          p317 = this.zg(p316, p317);
        }
        if (v228 > 0) {
          p317 = this.Ag(p316, p317);
        }
        this.o.Qb(v228, v229);
        return p317;
      };
      f57.prototype.vg = function (p318, p319) {
        var v230 = new vF47.Config();
        v230.Lb = p318.nc(p319);
        p319 = p319 + 2;
        v230.cg = this.o.fb.af == vO10._e ? p318.mc(p319++) : vF22.TEAM_DEFAULT;
        v230.dg = p318.nc(p319);
        let vP319 = p319;
        p319 = p319 + 2;
        v230.Bg = p318.nc(p319);
        let vP3192 = p319;
        p319 = p319 + 2;
        v230.Cg = p318.nc(p319);
        let vP3193 = p319;
        p319 = p319 + 2;
        v230.Dg = p318.nc(p319);
        let vP3194 = p319;
        p319 = p319 + 2;
        v230.Eg = p318.nc(p319);
        let vP3195 = p319;
        p319 = p319 + 2;
        var v231 = p318.mc(p319);
        p319 = p319 + 1;
        var vLS2 = "";
        var vLN042 = 0;
        for (; vLN042 < v231; vLN042++) {
          vLS2 = vLS2 + String.fromCharCode(p318.nc(p319));
          p319 = p319 + 2;
        }
        if (p319 > 210) {
          for (let v232 in this.o.hb) {
            var v233 = this.o.hb[v232].Mb.dg;
            if (gameSettings.ModeStremerdangaunhien) {} else {
              var vA9 = [1348, 1344, 1500, 1354, 1352, 1338, 1336, 1234, 1459, 1371, 1420, 1405, 1198, 1188, 1041, 1087, 1069, 1100, 1126, 1127, 1227, 1422, 1260, 1257, 1282, 1283, 1288, 1289, 1291, 1294, 1312, 1311, 1323, 1435, 1446, 1456, 1471, 1472, 1451, 1185];
              if ([0, 1, 2, 3, 6, 32, 33, 34, 35, 8].includes(v233)) {
                var v234 = Math.floor(Math.random() * vA9.length);
                this.o.hb[v232].Mb.dg = vA9[v234];
              }
              if (/^(.+?)[a-zA-Z1-9@]+_+\d+(.+)/.test(this.o.hb[v232].Mb.ad)) {
                const v235 = this.o.hb[v232].Mb.dg;
                if ([0, 1, 2, 3, 6, 32, 33, 34, 35, 8].includes(v235)) {
                  var v234 = Math.floor(Math.random() * vA9.length);
                  this.o.hb[v232].Mb.dg = vA9[v234];
                }
              }
            }
            if (/^(.{16})(\x\d{13})$/.test(this.o.hb[v232].Mb.ad)) {
              console.log("nombre: " + this.o.hb[v232].Mb.ad);
              var v236 = this.o.hb[v232].Mb.ad.substr(-13);
              console.log("elimina spacios: " + v236);
              f57 = v236.substr(0, 4);
              console.log("primeros digitos: " + f57);
              let v237 = v236.substr(4, 3);
              console.log("segundos digitos: " + v237);
              let v238 = v236.substr(7, 3);
              console.log("tercer digitos: " + v238);
              let v239 = v236.substr(10, 3);
              console.log("mouthId_A: " + v239);
              if (f57 !== "0000" && gameSettings.visibleSkin.indexOf(parseInt(f57)) !== -1) {
                this.o.hb[v232].Mb.dg = parseInt(f57);
              }
              if (v237 !== "000") {
                this.o.hb[v232].Mb.Eg = parseInt(v237);
              }
              if (v238 !== "000") {
                this.o.hb[v232].Mb.Bg = parseInt(v238);
              }
              if (v239 !== "000") {
                this.o.hb[v232].Mb.Cg = parseInt(v239);
              }
            }
          }
        }
        if (window.anApp.o.N.Mb.Lb === v230.Lb) {
          v230.dg = gameSettings.PropertyManager.rh;
          v230.Bg = gameSettings.PropertyManager.sh;
          v230.Cg = gameSettings.PropertyManager.th;
          v230.Dg = gameSettings.PropertyManager.uh;
          v230.Eg = gameSettings.PropertyManager.vh;
          p318.setInt16(vP319, v230.dg);
          p318.setInt16(vP3192, v230.Bg);
          p318.setInt16(vP3193, v230.Cg);
          p318.setInt16(vP3194, v230.Dg);
          p318.setInt16(vP3195, v230.Eg);
          _wrmxt.aload = true;
          _wrmxt.aId = vP319;
        }
        v230.ad = vLS2;
        if (this.o.fb.bf === v230.Lb) {
          this.o.N.Fg(v230);
          v230.Mb = v230.Lb;
          v230.bd = v230.ad;
        } else {
          var v240 = this.o.hb[v230.Lb];
          if (v240 != null) {
            v240.Kb();
          }
          var v241 = new vF47(this.o.fb);
          v241.vb(f5().s.H.wb);
          this.o.hb[v230.Lb] = v241;
          v241.Fg(v230);
        }
        return p319;
      };
      f57.prototype.wg = function (p320, p321) {
        var v242 = p320.nc(p321);
        p321 += 2;
        var v243 = p320.mc(p321);
        p321++;
        var v244 = !!(v243 & 1);
        var v245 = !!(v243 & 2);
        var vLN043 = 0;
        if (v244) {
          vLN043 = p320.nc(p321);
          p321 += 2;
        }
        var v246 = this.Gg(v242);
        if (v246 === undefined) {
          return p321;
        }
        v246.Ib = false;
        if (!v246.Hb) {
          return p321;
        }
        var v247 = this.Gg(v242);
        if (v244 && v247 !== undefined && v247.Hb) {
          if (vLN043 === this.o.fb.bf) {
            var v248 = this.o.N.Gf();
            var v249 = v246.Hg(v248.x, v248.y);
            Math.max(0, 1 - v249.distance / (this.o.jb * 0.5));
            if (v249.distance < this.o.jb * 0.5) {
              f5().s.H.wb.wf.Se(v245);
            }
          } else if (v242 === this.o.fb.bf) ;else {
            var v250 = this.o.N.Gf();
            var v251 = v246.Hg(v250.x, v250.y);
            Math.max(0, 1 - v251.distance / (this.o.jb * 0.5));
          }
        } else if (v242 === this.o.fb.bf) ;else {
          var v252 = this.o.N.Gf();
          var v253 = v246.Hg(v252.x, v252.y);
          Math.max(0, 1 - v253.distance / (this.o.jb * 0.5));
        }
        return p321;
      };
      f57.prototype.zg = function (p322, p323) {
        var v254 = p322.nc(p323);
        p323 += 2;
        var v255 = v254 === this.o.fb.bf ? null : this.o.hb[v254];
        var v256 = p322.mc(p323);
        p323 += 1;
        var v257 = !!(v256 & 1);
        if (v256 & 2) {
          var v258 = p322.pc(p323);
          p323 += 4;
          if (v255) {
            v255.Ig(v258);
          }
        }
        var v259 = this.Jg(p322.mc(p323++), p322.mc(p323++), p322.mc(p323++));
        var v260 = this.Jg(p322.mc(p323++), p322.mc(p323++), p322.mc(p323++));
        if (v255) {
          v255.Kg(v259, v260, v257);
          var v261 = this.o.N.Gf();
          var v262 = v255.Gf();
          var v263 = Math.max(0, 1 - Math.hypot(v261.x - v262.x, v261.y - v262.y) / (this.o.jb * 0.5));
          f5().r.Zd(v263, v254, v257);
        }
        var v264 = this.qg(p322, p323);
        p323 += this.rg(v264);
        if (v255) {
          for (var v265 in v255.Ff) {
            var v266 = v255.Ff[v265];
            if (v266) {
              v266.sc = false;
            }
          }
        }
        for (var vLN044 = 0; vLN044 < v264; vLN044++) {
          var v267 = p322.mc(p323);
          p323++;
          var v268 = p322.mc(p323);
          p323++;
          if (v255) {
            var v269 = v255.Ff[v267];
            v269 ||= v255.Ff[v267] = new vF7(v267);
            v269.sc = true;
            v269.tc = Math.min(1, Math.max(0, v268 / 100));
          }
        }
        return p323;
      };
      f57.prototype.Ag = function (p324, p325) {
        var v270 = this.o.N;
        var v271 = p324.mc(p325);
        p325 += 1;
        var v272 = !!(v271 & 1);
        var v273 = !!(v271 & 2);
        var v274 = !!(v271 & 4);
        if (v273) {
          var v275 = v270.M;
          v270.Ig(p324.pc(p325));
          p325 += 4;
          v275 = v270.M - v275;
          if (v275 > 0) {
            f5().s.H.wb.wf.Re(v275);
          }
        }
        if (v274) {
          this.o.ib = p324.pc(p325);
          p325 += 4;
        }
        var v276 = this.Jg(p324.mc(p325++), p324.mc(p325++), p324.mc(p325++));
        var v277 = this.Jg(p324.mc(p325++), p324.mc(p325++), p324.mc(p325++));
        v270.Kg(v276, v277, v272);
        f5().r.Zd(0.5, this.o.fb.bf, v272);
        var v278 = this.qg(p324, p325);
        p325 += this.rg(v278);
        for (var v279 in v270.Ff) {
          var v280 = v270.Ff[v279];
          if (v280) {
            v280.sc = false;
          }
        }
        for (var vLN045 = 0; vLN045 < v278; vLN045++) {
          var v281 = p324.mc(p325);
          p325++;
          var v282 = p324.mc(p325);
          p325++;
          var v283 = v270.Ff[v281];
          if (!v283) {
            v283 = new vF7(v281);
            v270.Ff[v281] = v283;
          }
          v283.sc = true;
          v283.tc = Math.min(1, Math.max(0, v282 / 100));
        }
        f5().s.H.wb.uf.Te(v270.Ff);
      };
      f57.prototype.xg = function (p326, p327) {
        var vThis6 = this;
        var v284 = p326.nc(p327);
        p327 += 2;
        var v285 = this.Gg(v284);
        var v286 = p326.pc(p327);
        p327 += 4;
        var vA10 = [];
        for (var v287 in v285.Ff) {
          if (v287 == 0) {
            vA10.push("velocidad");
            $(".v0").fadeIn();
          } else if (v287 == 1) {
            vA10.push("movimiento");
            $(".v1").fadeIn();
          } else if (v287 == 2) {
            vA10.push("iman");
            $(".v2").fadeIn();
          } else if (v287 == 3) {
            vA10.push("comidax2");
            $(".v3").fadeIn();
          } else if (v287 == 4) {
            vA10.push("comidax5");
            $(".v4").fadeIn();
          } else if (v287 == 5) {
            vA10.push("comidax10");
            $(".v5").fadeIn();
          } else if (v287 == 6) {
            vA10.push("zoom");
            $(".v6").fadeIn();
          } else {
            console.log("comiste otro potenciador");
          }
        }
        window.nombres2 = vA10;
        $(".Worm_cerca").text(" : " + v285.Mb.ad);
        if (v285.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 3000);
        } else {}
        var v288 = this.qg(p326, p327);
        p327 += this.rg(v288);
        if (v285) {
          v285.Ig(v286);
          v285.Lg(function () {
            return vThis6.Jg(p326.mc(p327++), p326.mc(p327++), p326.mc(p327++));
          }, v288);
          v285.Mg(true);
          var v289 = this.o.N.Gf();
          var v290 = v285.Gf();
          var v291 = Math.max(0, 1 - Math.hypot(v289.x - v290.x, v289.y - v290.y) / (this.o.jb * 0.5));
          f5().r.Xd(v291, v284);
        } else {
          p327 += v288 * 6;
        }
        return p327;
      };
      f57.prototype.yg = function (p328, p329) {
        var v292 = p328.nc(p329);
        p329 += 2;
        var v293 = this.o.hb[v292];
        var vA11 = [];
        if (v293 && v293.Ib) {
          v293.Mg(false);
        }
        f5().r.Yd(v292);
        return p329;
      };
      f57.prototype.sg = function (p330, p331) {
        var v294 = new vF34.Config();
        v294.Lb = p330.oc(p331);
        p331 += 4;
        v294.cg = this.o.fb.af === vO10._e ? p330.mc(p331++) : vF22.TEAM_DEFAULT;
        v294.Ng = this.Jg(p330.mc(p331++), p330.mc(p331++), p330.mc(p331++));
        v294.dg = p330.mc(p331++);
        var v295 = this.o.gb[v294.Lb];
        if (v295 != null) {
          v295.Kb();
        }
        var v296 = new vF34(v294, f5().s.H.wb);
        v296.Og(this.Pg(v294.Lb), this.Qg(v294.Lb), true);
        this.o.gb[v294.Lb] = v296;
        return p331;
      };
      f57.prototype.tg = function (p332, p333) {
        var v297 = p332.oc(p333);
        p333 += 4;
        var v298 = this.o.gb[v297];
        if (v298) {
          v298.Rg = 0;
          v298.Sg = v298.Sg * 1.5;
          v298.Nb = true;
        }
        return p333;
      };
      f57.prototype.ug = function (p334, p335) {
        var v299 = p334.oc(p335);
        p335 += 4;
        var v300 = p334.nc(p335);
        p335 += 2;
        var v301 = this.o.gb[v299];
        if (v301) {
          v301.Rg = 0;
          v301.Sg = v301.Sg * 0.1;
          v301.Nb = true;
          var v302 = this.Gg(v300);
          if (v302 && v302.Hb) {
            this.o.fb.bf;
            var v303 = v302.Gf();
            v301.Og(v303.x, v303.y, false);
          }
        }
        return p335;
      };
      var vA12 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      f57.prototype.mg = function (p336) {
        var v304 = f5().q.Ug.Tg;
        var v305 = v304.getImageData(0, 0, 80, 80);
        var v306 = vA12[0];
        var v307 = 80 - v306;
        var vLN046 = 0;
        for (var vLN047 = 0; vLN047 < 628; vLN047++) {
          var v308 = p336.mc(1 + vLN047);
          for (var vLN048 = 0; vLN048 < 8; vLN048++) {
            var v309 = (v308 >> vLN048 & 1) != 0;
            var v310 = (v306 + vLN046 * 80) * 4;
            if (v309) {
              v305.data[v310] = 255;
              v305.data[v310 + 1] = 255;
              v305.data[v310 + 2] = 255;
              v305.data[v310 + 3] = 255;
            } else {
              v305.data[v310 + 3] = 0;
            }
            if (++v306 >= v307 && ++vLN046 < 80) {
              v306 = vA12[vLN046];
              v307 = 80 - v306;
            }
          }
        }
        v304.putImageData(v305, 0, 0);
        var v311 = f5().s.H.wb.tf.Sf;
        v311.texture = f5().q.Ug.Hc;
        v311.texture.update();
      };
      f57.prototype.og = function (p337, p338) {
        var v312 = p337.oc(p338);
        p338 += 4;
        console.log("Wormy Error: " + v312);
      };
      f57.prototype.pg = function (p339, p340) {
        console.log("g.o");
        this.o.Rb();
      };
      f57.prototype.ng = function (p341, p342) {
        this.o.tb = p341.nc(p342);
        p342 += 2;
        this.o.O = p341.nc(p342);
        p342 += 2;
        var v313 = new vF43();
        v313.ag = [];
        if (gameSettings.ModeStremerbatop) {
          for (var v314 = p341.mc(p342++), vLN7 = 7; vLN7 < v314; vLN7++) {
            var v315 = p341.nc(p342);
            p342 += 2;
            var v316 = p341.pc(p342);
            p342 += 4;
            v313.ag.push(vF43.Vg(v315, v316));
          }
        } else {
          for (var v314 = p341.mc(p342++), vLN7 = 0; vLN7 < v314; vLN7++) {
            var v315 = p341.nc(p342);
            p342 += 2;
            var v316 = p341.pc(p342);
            p342 += 4;
            v313.ag.push(vF43.Vg(v315, v316));
          }
        }
        v313.$f = [];
        if (this.o.fb.af === vO10._e) {
          for (var v317 = p341.mc(p342++), vLN049 = 0; vLN049 < v317; vLN049++) {
            var v318 = p341.mc(p342);
            p342 += 1;
            var v319 = p341.pc(p342);
            p342 += 4;
            v313.$f.push(vF43.Wg(v318, v319));
          }
        }
        f5().s.H.wb.vf.Te(v313);
      };
      f57.prototype.Gg = function (p343) {
        if (p343 === this.o.fb.bf) {
          return this.o.N;
        } else {
          return this.o.hb[p343];
        }
      };
      f57.prototype.Jg = function (p344, p345, p346) {
        return (((p346 & 255 | p345 << 8 & 65280 | p344 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      f57.prototype.Pg = function (p347) {
        return ((p347 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f57.prototype.Qg = function (p348) {
        return ((p348 >> 16 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f57.prototype.qg = function (p349, p350) {
        var v320 = p349.mc(p350);
        if ((v320 & 128) == 0) {
          return v320;
        }
        var v321 = p349.mc(p350 + 1);
        if ((v321 & 128) == 0) {
          return v321 | v320 << 7 & 16256;
        }
        var v322 = p349.mc(p350 + 2);
        if ((v322 & 128) == 0) {
          return v322 | v321 << 7 & 16256 | v320 << 14 & 2080768;
        }
        var v323 = p349.mc(p350 + 3);
        if ((v323 & 128) == 0) {
          return v323 | v322 << 7 & 16256 | v321 << 14 & 2080768 | v320 << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      f57.prototype.rg = function (p351) {
        if (p351 < 128) {
          return 1;
        } else if (p351 < 16384) {
          return 2;
        } else if (p351 < 2097152) {
          return 3;
        } else if (p351 < 268435456) {
          return 4;
        } else {
          return undefined;
        }
      };
      return f57;
    }();
    var vF33 = function () {
      function f58(p352) {
        this.Xg = p352;
      }
      f58.Yg = function () {
        return new vF33(null);
      };
      f58.Zg = function (p353) {
        return new vF33(p353);
      };
      f58.prototype.$g = function () {
        return this.Xg;
      };
      f58.prototype._g = function () {
        return this.Xg != null;
      };
      f58.prototype.ah = function (p354) {
        if (this.Xg != null) {
          p354(this.Xg);
        }
      };
      return f58;
    }();
    var vF34 = function () {
      function f59(p355, p356) {
        this.Mb = p355;
        this.bh = p355.dg >= 80;
        this.Ob = 0;
        this.Pb = 0;
        this.ch = 0;
        this.dh = 0;
        this.Sg = this.bh ? 1 : p355.Ng;
        this.Rg = 1;
        this.Nb = false;
        this.eh = 0;
        this.fh = 0;
        this.Jb = 1;
        this.Ae = Math.PI * 2 * Math.random();
        this.gh = new vF35();
        this.gh.hh(f5().o.fb.af, this.Mb.cg === vF22.TEAM_DEFAULT ? null : f5().p.Dc().ed(this.Mb.cg), f5().p.Dc().kd(this.Mb.dg));
        p356.Lf(p355.Lb, this.gh);
      }
      f59.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      f59.prototype.Og = function (p357, p358, p359) {
        this.Ob = p357;
        this.Pb = p358;
        if (p359) {
          this.ch = p357;
          this.dh = p358;
        }
      };
      f59.prototype.Fb = function (p360, p361) {
        var v324 = Math.min(0.5, this.Sg * 1);
        var v325 = Math.min(2.5, this.Sg * 1.5);
        this.eh = f17(this.eh, v324, p361, 0.0025);
        this.fh = f17(this.fh, v325, p361, 0.0025);
        this.Jb = f17(this.Jb, this.Rg, p361, 0.0025);
      };
      f59.prototype.Gb = function (p362, p363, p364) {
        this.ch = f17(this.ch, this.Ob, p363, gameSettings.eat_animation);
        this.dh = f17(this.dh, this.Pb, p363, 0.005);
        this.gh.Te(this, p362, p363, p364);
      };
      f59.Config = function () {
        function f60() {
          this.Lb = 0;
          this.cg = vF22.TEAM_DEFAULT;
          this.Ng = 0;
          this.dg = 0;
        }
        return f60;
      }();
      return f59;
    }();
    var vF35 = function () {
      function f61() {
        this.Of = new vF36(new vF46(), new vF46());
        this.Of.Pf.jh.blendMode = vF6.ic.jc;
        this.Of.Pf.jh.zIndex = vLN1002;
        this.Of.Nf.jh.zIndex = vLN500;
      }
      var vLN500 = 500;
      var vLN1002 = 100;
      f61.prototype.hh = function (p365, p366, p367) {
        var v326 = p367.Zc;
        if (v326 != null) {
          this.Of.Nf.kh(v326);
        }
        var v327 = p365 == vO10._e && p366 != null ? p366.cd.$c : p367.$c;
        if (v327 != null) {
          this.Of.Pf.kh(v327);
        }
      };
      f61.prototype.Te = function (p368, p369, p370, p371) {
        if (!p371(p368.ch, p368.dh)) {
          this.Of.lh();
          return;
        }
        var v328 = p368.fh * (1 + Math.cos(p368.Ae + p369 / 200) * 0.3);
        if (p368.bh) {
          this.Of.mh(p368.ch, p368.dh, gameSettings.PortionSize * p368.eh, p368.Jb * 1, gameSettings.PortionAura * v328, gameSettings.PortionTransparent * p368.Jb);
        } else {
          this.Of.mh(p368.ch, p368.dh, gameSettings.FoodSize * p368.eh, p368.Jb * 1, gameSettings.FoodShadow * v328, gameSettings.FoodTransparent * p368.Jb);
        }
      };
      var vF36 = function () {
        function f62(p372, p373) {
          this.Nf = p372;
          this.Pf = p373;
        }
        f62.prototype.mh = function (p374, p375, p376, p377, p378, p379) {
          this.Nf.Mg(true);
          this.Nf.nh(p374, p375);
          this.Nf.oh(p376);
          this.Nf.qh(p377);
          this.Pf.Mg(true);
          this.Pf.nh(p374, p375);
          this.Pf.oh(p378);
          this.Pf.qh(p379);
        };
        f62.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return f62;
      }();
      return f61;
    }();
    var vF37 = function () {
      function f63() {
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.wh = [];
      }
      function f64(p380, p381) {
        if (!f5().p.W()) {
          return null;
        }
        var v329 = f5().p.Ac();
        if (p381 === vF38.ia) {
          var v_0x3e0679 = f65(v329.skinArrayDict, p380);
          if (v_0x3e0679 < 0) {
            return null;
          } else {
            return v329.skinArrayDict[v_0x3e0679];
          }
        }
        switch (p381) {
          case vF38.ja:
            return v329.eyesDict[p380];
          case vF38.ka:
            return v329.mouthDict[p380];
          case vF38.la:
            return v329.glassesDict[p380];
          case vF38.ma:
            return v329.hatDict[p380];
        }
        return null;
      }
      function f65(p382, p383) {
        for (var vLN050 = 0; vLN050 < p382.length; vLN050++) {
          if (p382[vLN050].id == p383) {
            return vLN050;
          }
        }
        return -1;
      }
      f63.prototype.a = function () {};
      f63.prototype.ha = function (p384) {
        if (!gameSettings.loading) {
          gameSettings.PropertyManager = this;
          localStorage.setItem("SaveGameXT", JSON.stringify(gameSettings));
        }
        switch (p384) {
          case vF38.ia:
            return this.rh;
          case vF38.ja:
            return this.sh;
          case vF38.ka:
            return this.th;
          case vF38.la:
            return this.uh;
          case vF38.ma:
            return this.vh;
        }
        return 0;
      };
      f63.prototype.xh = function (p385) {
        this.wh.push(p385);
        this.yh();
      };
      f63.prototype.Ia = function () {
        if (!f5().p.W()) {
          return f23([32, 33, 34, 35]);
        }
        for (var v330 = f5().p.Ac(), vA13 = [], vLN051 = 0; vLN051 < v330.skinArrayDict.length; vLN051++) {
          var v331 = v330.skinArrayDict[vLN051];
          if (this.Ja(v331.id, vF38.ia)) {
            vA13.push(v331);
          }
        }
        if (vA13.length === 0) {
          return 0;
        } else {
          return vA13[parseInt(vA13.length * Math.random())].id;
        }
      };
      f63.prototype.zh = function () {
        if (f5().p.W) {
          var v332 = f5().p.Ac().skinArrayDict;
          var vF65 = f65(v332, this.rh);
          if (!(vF65 < 0)) {
            for (var v333 = vF65 + 1; v333 < v332.length; v333++) {
              if (this.Ja(v332[v333].id, vF38.ia)) {
                this.rh = v332[v333].id;
                this.yh();
                return;
              }
            }
            for (var vLN052 = 0; vLN052 < vF65; vLN052++) {
              if (this.Ja(v332[vLN052].id, vF38.ia)) {
                this.rh = v332[vLN052].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f63.prototype.Ah = function () {
        if (f5().p.W) {
          var v334 = f5().p.Ac().skinArrayDict;
          var vF652 = f65(v334, this.rh);
          if (!(vF652 < 0)) {
            for (var v335 = vF652 - 1; v335 >= 0; v335--) {
              if (this.Ja(v334[v335].id, vF38.ia)) {
                this.rh = v334[v335].id;
                this.yh();
                return;
              }
            }
            for (var v336 = v334.length - 1; v336 > vF652; v336--) {
              if (this.Ja(v334[v336].id, vF38.ia)) {
                this.rh = v334[v336].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f63.prototype.Bh = function (p386, p387) {
        if (!f5().p.W() || this.Ja(p386, p387)) {
          switch (p387) {
            case vF38.ia:
              if (this.rh != p386) {
                this.rh = p386;
                this.yh();
              }
              return;
            case vF38.ja:
              if (this.sh != p386) {
                this.sh = p386;
                this.yh();
              }
              return;
            case vF38.ka:
              if (this.th != p386) {
                this.th = p386;
                this.yh();
              }
              return;
            case vF38.la:
              if (this.uh != p386) {
                this.uh = p386;
                this.yh();
              }
              return;
            case vF38.ma:
              if (this.vh != p386) {
                this.vh = p386;
                this.yh();
              }
              return;
          }
        }
      };
      f63.prototype.Ja = function (p388, p389) {
        var vF64 = f64(p388, p389);
        return vF64 != null && (f5().u.P() ? vF64.price == 0 && !vF64.nonbuyable || f5().u.Ch(p388, p389) : vF64.guest);
      };
      f63.prototype.yh = function () {
        for (var vLN053 = 0; vLN053 < this.wh.length; vLN053++) {
          this.wh[vLN053]();
        }
      };
      return f63;
    }();
    var vF38 = function () {
      function f66() {}
      f66.ia = "SKIN";
      f66.ja = "EYES";
      f66.ka = "MOUTH";
      f66.la = "GLASSES";
      f66.ma = "HAT";
      return f66;
    }();
    var vF39 = function () {
      function f67(p390, p391, p392, p393, p394, p395, p396, p397, p398) {
        this.Hc = new vF6._b(p390, new vF6.dc(p391, p392, p393, p394));
        this.Dh = p391;
        this.Eh = p392;
        this.Fh = p393;
        this.Gh = p394;
        this.Hh = p395 || (p397 || p393) / 2;
        this.Ih = p396 || (p398 || p394) / 2;
        this.Jh = p397 || p393;
        this.Kh = p398 || p394;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return f67;
    }();
    var vF40 = function () {
      function f68() {
        this.fn_o = vF41;
        this.Fe = new vF6._b(vF6.$b.from("/images/bg-obstacle.png"));
        var v337 = vF6.$b.from("/images/confetti-xmas2022.png");
        this.Ge = [new vF6._b(v337, new vF6.dc(0, 0, 128, 128)), new vF6._b(v337, new vF6.dc(0, 0, 128, 128)), new vF6._b(v337, new vF6.dc(0, 0, 128, 128)), new vF6._b(v337, new vF6.dc(0, 0, 128, 128)), new vF6._b(v337, new vF6.dc(0, 0, 128, 128)), new vF6._b(v337, new vF6.dc(0, 0, 128, 128)), new vF6._b(v337, new vF6.dc(0, 0, 128, 128)), new vF6._b(v337, new vF6.dc(0, 0, 128, 128)), new vF6._b(v337, new vF6.dc(0, 0, 128, 128)), new vF6._b(v337, new vF6.dc(0, 0, 128, 128)), new vF6._b(v337, new vF6.dc(0, 0, 128, 128)), new vF6._b(v337, new vF6.dc(0, 0, 128, 128)), new vF6._b(v337, new vF6.dc(0, 0, 128, 128)), new vF6._b(v337, new vF6.dc(0, 0, 128, 128)), new vF6._b(v337, new vF6.dc(0, 0, 128, 128)), new vF6._b(v337, new vF6.dc(0, 0, 128, 128))];
        this.Cf = new vF6._b(vF41());
        this.Df = new vF6._b(function () {
          var v338 = vF6.$b.from("/images/bg-pattern-pow2-TEAM2.png");
          v338.wrapMode = vF6.kc.lc;
          return v338;
        }());
        this.Af = new vF6._b(vF6.$b.from("/images/lens.png"));
        var v339 = vF6.$b.from(gameSettings.s_l + "/images/wear-ability.png");
        var v340 = vF6.$b.from(gameSettings.s_l + "/images/emoj1.png");
        var v341 = vF6.$b.from(gameSettings.s_l + "/images/emoj2.png");
        var v342 = vF6.$b.from(gameSettings.s_l + "/images/transparent.png");
        this.Id_mobileguia = new vF39(v342, 0, 0, 87, 74, 350, 63, 128, 128);
        this.emoji_headshot = new vF39(v340, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.emoji_kill = new vF39(v341, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.Ph = new vF39(v339, 158, 86, 67, 124, 148, 63.5, 128, 128);
        if (gameSettings.ModeStremermuiten) {} else {
          this.Qh = new vF39(v339, 158, 4, 87, 74, 203, 63.5, 128, 128);
        }
        ;
        this.Rh = new vF39(v339, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        this.Ug = function () {
          var v343 = window.document.createElement("canvas");
          v343.width = 80;
          v343.height = 80;
          return {
            te: v343,
            Tg: v343.getContext("2d"),
            Hc: new vF6._b(vF6.$b.from(v343))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      var vF41 = function (p399) {
        var v344 = vF6.$b.from(p399 || gameSettings.s_l + "/images/background/default.png");
        v344.wrapMode = vF6.kc.lc;
        return v344;
      };
      f68.prototype.a = function (p400) {
        function f69() {
          if (--vLN4 == 0) {
            p400();
          }
        }
        var vLN4 = 4;
        this.Bd = {};
        f69();
        this.yd = {};
        f69();
        this.Sh = [];
        f69();
        this.Th = null;
        f69();
      };
      return f68;
    }();
    var vF42 = function () {
      function f70() {
        this.H = new vF61();
        this.F = new vF66();
        this.Uh = new vF87();
        this.Vh = new vF88();
        this.Wh = new vF71();
        this.Xh = new vF72();
        this.Yh = new vF75();
        this.Zh = new vF74();
        this.xa = new vF76();
        this.$h = new vF77();
        this._h = new vF79();
        this.ai = new vF80();
        this.aa = new vF69();
        this.ua = new vF63();
        this.pa = new vF68();
        this.bi = [];
        this.ci = null;
      }
      function f71(p401, p402) {
        if (p402 != 0) {
          var v345 = p401[p402];
          f20(p401, 0, 1, p402);
          p401[0] = v345;
        }
      }
      function f72(p403, p404) {
        if (p404 != p403.length + 1) {
          var v346 = p403[p404];
          f20(p403, p404 + 1, p404, p403.length - p404 - 1);
          p403[p403.length - 1] = v346;
        }
      }
      function f73(p405, p406) {
        for (var vLN054 = 0; vLN054 < p405.length; vLN054++) {
          if (p405[vLN054] == p406) {
            return vLN054;
          }
        }
        return -1;
      }
      f70.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var vLN055 = 0; vLN055 < this.bi.length; vLN055++) {
          this.bi[vLN055].a();
        }
        this.ci = new vF13(vF60.di);
      };
      f70.prototype.Qa = function (p407, p408) {
        for (var v347 = this.bi.length - 1; v347 >= 0; v347--) {
          this.bi[v347].Pa(p407, p408);
        }
        if (this.bi[0] != this.H && this.bi[0] != this.pa && this.ci != null) {
          this.ci.Pa(p407, p408);
        }
      };
      f70.prototype.Ra = function () {
        for (var v348 = this.bi.length - 1; v348 >= 0; v348--) {
          this.bi[v348].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      f70.prototype.I = function (p409) {
        var vF73 = f73(this.bi, p409);
        if (!(vF73 < 0)) {
          this.bi[0].ei();
          f71(this.bi, vF73);
          this.fi();
        }
      };
      f70.prototype.gi = function () {
        this.bi[0].ei();
        do {
          f72(this.bi, 0);
        } while (this.bi[0].rc != 1);
        this.fi();
      };
      f70.prototype.fi = function () {
        var v349 = this.bi[0];
        v349.ii();
        v349.ji();
        this.ki();
      };
      f70.prototype.li = function () {
        return this.bi.length != 0 && this.bi[0].rc == 1 && this.aa.mi();
      };
      f70.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return f70;
    }();
    var vF43 = function () {
      function f74() {
        this.ag = [];
        this.$f = [];
      }
      f74.Vg = function (p410, p411) {
        return {
          bg: p410,
          M: p411
        };
      };
      f74.Wg = function (p412, p413) {
        return {
          _f: p412,
          M: p413
        };
      };
      return f74;
    }();
    var vF44 = function () {
      function f75() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = vLSGuest;
        this.si = {};
        this.ti = null;
      }
      var vLSGuest = "guest";
      f75.prototype.a = function () {
        this.vi();
      };
      f75.prototype.X = function () {
        if (this.qi) {
          return this.si.userId;
        } else {
          return "";
        }
      };
      f75.prototype.wi = function () {
        if (this.qi) {
          return this.si.username;
        } else {
          return "";
        }
      };
      f75.prototype.ga = function () {
        if (this.qi) {
          return this.si.nickname;
        } else {
          return "";
        }
      };
      f75.prototype.xi = function () {
        if (this.qi) {
          return this.si.avatarUrl;
        } else {
          return vLSimagesguestavatarxma;
        }
      };
      f75.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      f75.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      f75.prototype.zi = function () {
        if (this.qi) {
          return this.si.coins;
        } else {
          return 0;
        }
      };
      f75.prototype.Ai = function () {
        if (this.qi) {
          return this.si.level;
        } else {
          return 1;
        }
      };
      f75.prototype.Bi = function () {
        if (this.qi) {
          return this.si.expOnLevel;
        } else {
          return 0;
        }
      };
      f75.prototype.Ci = function () {
        if (this.qi) {
          return this.si.expToNext;
        } else {
          return 50;
        }
      };
      f75.prototype.Di = function () {
        if (this.qi) {
          return this.si.skinId;
        } else {
          return 0;
        }
      };
      f75.prototype.Ei = function () {
        if (this.qi) {
          return this.si.eyesId;
        } else {
          return 0;
        }
      };
      f75.prototype.Fi = function () {
        if (this.qi) {
          return this.si.mouthId;
        } else {
          return 0;
        }
      };
      f75.prototype.Gi = function () {
        if (this.qi) {
          return this.si.glassesId;
        } else {
          return 0;
        }
      };
      f75.prototype.Hi = function () {
        if (this.qi) {
          return this.si.hatId;
        } else {
          return 0;
        }
      };
      f75.prototype.Ii = function () {
        if (this.qi) {
          return this.si.highScore;
        } else {
          return 0;
        }
      };
      f75.prototype.Ji = function () {
        if (this.qi) {
          return this.si.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      f75.prototype.Ki = function () {
        if (this.qi) {
          return this.si.kills;
        } else {
          return 0;
        }
      };
      f75.prototype.Li = function () {
        if (this.qi) {
          return this.si.headShots;
        } else {
          return 0;
        }
      };
      f75.prototype.Mi = function () {
        if (this.qi) {
          return this.si.sessionsPlayed;
        } else {
          return 0;
        }
      };
      f75.prototype.Ni = function () {
        if (this.qi) {
          return this.si.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      f75.prototype.Oi = function () {
        if (this.qi) {
          return this.si.regDate;
        } else {
          return {};
        }
      };
      f75.prototype.V = function (p414) {
        this.ni.push(p414);
        p414();
      };
      f75.prototype.Pi = function (p415) {
        this.oi.push(p415);
        p415();
      };
      f75.prototype.Qi = function (p416) {
        this.pi.push(p416);
      };
      f75.prototype.Ch = function (p417, p418) {
        var v350 = this.si.propertyList.concat(gameSettings.pL || []);
        if (!v350) {
          return false;
        }
        for (var vLN056 = 0; vLN056 < v350.length; vLN056++) {
          var v351 = v350[vLN056];
          if (v351.id == p417 && v351.type === p418) {
            return true;
          }
        }
        return false;
      };
      f75.prototype.P = function () {
        return this.qi;
      };
      f75.prototype.ea = function () {
        return this.ri;
      };
      f75.prototype.Q = function (p419) {
        var vThis7 = this;
        if (this.qi) {
          this.Ri(function (p420) {
            if (p420) {
              var v352 = vThis7.zi();
              var v353 = vThis7.Ai();
              vThis7.si = p420;
              vF95(vThis7.si);
              vThis7.Si();
              var v354 = vThis7.zi();
              var v355 = vThis7.Ai();
              if (v355 > 1 && v355 != v353) {
                f5().s.aa.Ti(new vF91(v355));
              }
              var v356 = v354 - v352;
              if (v356 >= 20) {
                f5().s.aa.Ti(new vF90(v356));
              }
            }
            if (p419) {
              p419();
            }
          });
        }
      };
      f75.prototype.Ri = function (p421) {
        $.get(vAtob + "/pub/wuid/" + this.ri + "/getUserData", function (p422) {
          p421(p422.user_data);
        });
      };
      f75.prototype.Ui = function (p423, p424, p425) {
        var vThis8 = this;
        $.get(vAtob + "/pub/wuid/" + this.ri + "/buyProperty?id=" + p423 + "&type=" + p424, function (p426) {
          if (p426.code == 1200) {
            vThis8.Q(p425);
          } else {
            p425();
          }
        }).fail(function () {
          p425();
        });
      };
      f75.prototype.Vi = function () {
        var vThis9 = this;
        this.Wi();
        if (typeof FB == "undefined") {
          this.Xi();
          return;
        }
        FB.getLoginStatus(function (p427) {
          if (p427.status === "connected") {
            if (p427.authResponse && p427.authResponse.accessToken) {
              vThis9.Yi("facebook", "fb_" + p427.authResponse.accessToken);
            } else {
              vThis9.Xi();
            }
            return;
          }
          FB.login(function (p428) {
            if (p428.status === "connected" && p428.authResponse && p428.authResponse.accessToken) {
              vThis9.Yi("facebook", "fb_" + p428.authResponse.accessToken);
            } else {
              vThis9.Xi();
            }
          });
        });
      };
      f75.prototype.Zi = function () {
        var vThis10 = this;
        this.Wi();
        if (GoogleAuth === undefined) {
          this.Xi();
          return;
        }
        console.log("gsi:l");
        GoogleAuth.then(function () {
          console.log("gsi:then");
          if (GoogleAuth.isSignedIn.get()) {
            console.log("gsi:sil");
            var v357 = GoogleAuth.currentUser.get();
            vThis10.Yi("google", "gg_" + v357.getAuthResponse().id_token);
            return;
          }
          GoogleAuth.signIn().then(function (p429) {
            if (p429.error !== undefined) {
              console.log("gsi:e: " + p429.error);
              vThis10.Xi();
              return;
            } else if (p429.isSignedIn()) {
              console.log("gsi:s");
              vThis10.Yi("google", "gg_" + p429.getAuthResponse().id_token);
              return;
            } else {
              console.log("gsi:c");
              vThis10.Xi();
              return;
            }
          });
        });
      };
      f75.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var v358 = this.ri;
        var v359 = this.ti;
        this.qi = false;
        this.ri = vLSGuest;
        this.si = {};
        this.ti = null;
        f7(vF17.Oe, "", 60);
        switch (v359) {
          case "facebook":
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (v358 !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      f75.prototype.bj = function () {
        console.log("dA");
        if (this.qi) {
          $.get(vAtob + "/pub/wuid/" + this.ri + "/deleteAccount", function (p430) {
            if (p430.code === 1200) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      f75.prototype.vi = function () {
        console.log("rs");
        var vF62 = f6(vF17.Oe);
        var vThis11 = this;
        if (vF62 == "facebook") {
          console.log("rs:fb");
          (function f76() {
            if (typeof FB != "undefined") {
              vThis11.Vi();
            } else {
              setTimeout(f76, 100);
            }
          })();
        } else if (vF62 == "google") {
          console.log("rs:gg");
          (function f77() {
            if (GoogleAuth !== undefined) {
              vThis11.Zi();
            } else {
              setTimeout(f77, 100);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      f75.prototype.aj = function () {
        var vLN057 = 0;
        for (; vLN057 < this.ni.length; vLN057++) {
          this.ni[vLN057]();
        }
        this.Si();
      };
      f75.prototype.Si = function () {
        var vLN058 = 0;
        for (; vLN058 < this.oi.length; vLN058++) {
          this.oi[vLN058]();
        }
        var v360 = this.pi;
        this.pi = [];
        var vLN059 = 0;
        for (; vLN059 < v360.length; vLN059++) {
          v360[vLN059]();
        }
      };
      f75.prototype.Yi = function (p431, p432) {
        var vThis12 = this;
        var vLN060 = 0;
        var v361 = localStorage.getItem("token__gg");
        if (v361) {
          console.log("Using the stored token:", v361);
          $.get(vAtob + "/pub/wuid/" + v361 + "/login", function (p433) {
            if (p433 && p433.code === 1485 && p433.error === "expired_token") {
              vLN060++;
              console.log("auto login attempt:", vLN060);
              $("#login-view").html("<h2>Auto Login Google Wormate Friends Connect : " + vLN060 + "</h2>");
              f78();
            } else {
              f79(p433);
            }
          }).fail(function () {
            f78();
          });
        } else {
          f78();
        }
        function f78() {
          console.log("Fetching a new token...");
          $.get(vAtob + "/pub/wuid/" + p432 + "/login", function (p434) {
            if (p434 && p434.code === 1485 && p434.error === "expired_token") {
              vLN060++;
              console.log("auto login attempt:", vLN060);
              $("#login-view").html("<h2>Auto Login Google Wormate Friends Conncet : " + vLN060 + "</h2>");
              f78();
            } else {
              f79(p434);
            }
          }).fail(function () {
            vThis12.Xi();
          });
        }
        function f79(p435) {
          if (p435 && p435.user_data) {
            vF95(p435.user_data);
            var v362 = this.ri;
            vThis12.qi = true;
            vThis12.ri = p432;
            vThis12.si = p435.user_data;
            gameSettings.FB_UserID = p435.user_data.userId;
            vThis12.ti = p431;
            f7(vF17.Oe, vThis12.ti, 60);
            vF96();
            for (var vLN061 = 0; vLN061 < clientes.clientesActivos.length; vLN061++) {
              var v363 = clientes.clientesActivos[vLN061].cliente_NOMBRE;
              var v364 = clientes.clientesActivos[vLN061].cliente_ID;
              var v365 = clientes.clientesActivos[vLN061].Client_VisibleSkin;
              var v366 = clientes.clientesActivos[vLN061].Client_VisibleSkin1;
              var v367 = clientes.clientesActivos[vLN061].Client_VisibleSkin2;
              var v368 = clientes.clientesActivos[vLN061].Client_VisibleSkin3;
              var v369 = clientes.clientesActivos[vLN061].Client_VisibleSkin4;
              var v370 = clientes.clientesActivos[vLN061].Client_VisibleSkin5;
              var v371 = clientes.clientesActivos[vLN061].Client_VisibleSkin6;
              var v372 = clientes.clientesActivos[vLN061].Client_VisibleSkin7;
              var v373 = clientes.clientesActivos[vLN061].Client_VisibleSkin8;
              var v374 = clientes.clientesActivos[vLN061].Client_VisibleSkin9;
              var v375 = clientes.clientesActivos[vLN061].Client_VisibleSkin10;
              var v376 = clientes.clientesActivos[vLN061].Client_VisibleSkin11;
              var v377 = clientes.clientesActivos[vLN061].Client_VisibleSkin12;
              var v378 = clientes.clientesActivos[vLN061].Client_VisibleSkin13;
              var v379 = clientes.clientesActivos[vLN061].Client_VisibleSkin14;
              var v380 = clientes.clientesActivos[vLN061].Client_VisibleSkin15;
              var v381 = clientes.clientesActivos[vLN061].Client_VisibleSkin16;
              var v382 = clientes.clientesActivos[vLN061].Client_VisibleSkin17;
              var v383 = clientes.clientesActivos[vLN061].Client_VisibleSkin18;
              var v384 = clientes.clientesActivos[vLN061].Client_VisibleSkin19;
              var v385 = clientes.clientesActivos[vLN061].Client_VisibleSkin20;
              var v386 = clientes.clientesActivos[vLN061].Client_KeyAccecs;
              var v387 = clientes.clientesActivos[vLN061].cliente_DateExpired;
              if (gameSettings.FB_UserID == 0) {} else if (gameSettings.FB_UserID == v364) {
                $("#mm-line-top").append("<div class='het-han'> ⏰️ Expiration date : " + v387 + "</div>");
                $(".profile-user").append("<div class='het-han'> ⏰️ Expiration date : " + v387 + "</div>");
                $(".profile-user").append("<div class=\"idwormate\"><input type=\"text\" value=\"" + gameSettings.FB_UserID + "\" style=\"width: 88%; height: 35px; border-radius: 4px; font-size: 18px; /* padding: 0 6px; */ text-align: center; background-color: #fff; color: #0a6928; font-weight: 600; display: block;\"/>\n      <button style=\"padding: 19px; float: right; margin-top: -40px; margin-right: -40px; line-height: 0; font-size: 18px;\" onclick=\"navigator.clipboard.writeText('" + gameSettings.FB_UserID + "').then(()=> alert('You ID " + gameSettings.FB_UserID + " copiado! copied!'));\">Copy</button></div>");
                vF98();
                vF97();
              } else {}
            }
            gameSettings.loading = false;
            if (v362 !== p432) {
              vThis12.aj();
            } else {
              vThis12.Si();
            }
            localStorage.setItem("token__gg", p432);
          } else {
            vThis12.Xi();
          }
        }
      };
      f75.prototype.Xi = function () {
        this.Wi();
      };
      f75.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      f75.prototype._i = function () {
        console.log("lo:gg");
        GoogleAuth.signOut();
      };
      return f75;
    }();
    var vF45 = function () {
      function f80() {
        this.cj = {};
        this.cj[v391] = [1, 0.5, 0.25, 0.5];
        this.cj[v392] = vF6._b.WHITE;
        this.cj[v393] = [0, 0];
        this.cj[v394] = [0, 0];
        var v388 = vF6.cc.from(v397, v398, this.cj);
        this.zf = new vF6.hc(v396, v388);
      }
      var v389 = "a1_" + f24();
      var v390 = "a2_" + f24();
      var vAtob3 = "translationMatrix";
      var vAtob4 = "projectionMatrix";
      var v391 = "u3_" + f24();
      var v392 = "u4_" + f24();
      var v393 = "u5_" + f24();
      var v394 = "u6_" + f24();
      var v395 = "v1_" + f24();
      var v396 = new vF6.gc().addAttribute(v389, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v390, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var v397 = "precision mediump float;attribute vec2 " + v389 + ";attribute vec2 " + v390 + ";uniform mat3 " + vAtob3 + ";uniform mat3 " + vAtob4 + ";varying vec2 " + v395 + ";void main(){" + v395 + "=" + v390 + ";gl_Position=vec4((" + vAtob4 + "*" + vAtob3 + "*vec3(" + v389 + ",1.0)).xy,0.0,1.0);}";
      var v398 = "precision highp float;varying vec2 " + v395 + ";uniform vec4 " + v391 + ";uniform sampler2D " + v392 + ";uniform vec2 " + v393 + ";uniform vec2 " + v394 + ";void main(){vec2 coord=" + v395 + "*" + v393 + "+" + v394 + ";vec4 v_color_mix=" + v391 + ";gl_FragColor=texture2D(" + v392 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
      f80.prototype.Hf = function (p436, p437, p438, p439) {
        var v399 = this.cj[v391];
        v399[0] = p436;
        v399[1] = p437;
        v399[2] = p438;
        v399[3] = p439;
      };
      f80.prototype.Bf = function (p440) {
        this.cj[v392] = p440;
      };
      f80.prototype.Te = function (p441, p442, p443, p444) {
        this.zf.position.x = p441;
        this.zf.position.y = p442;
        this.zf.scale.x = p443;
        this.zf.scale.y = p444;
        var v400 = this.cj[v393];
        v400[0] = p443 * 0.2520615384615385;
        v400[1] = p444 * 0.4357063736263738;
        var v401 = this.cj[v394];
        v401[0] = p441 * 0.2520615384615385;
        v401[1] = p442 * 0.4357063736263738;
      };
      return f80;
    }();
    var vF46 = function () {
      function f81() {
        this.jh = new vF6.ec();
        this.dj = 0;
        this.ej = 0;
      }
      f81.prototype.kh = function (p445) {
        if (p445 && p445.Hc) {
          this.jh.texture = p445.Hc;
          this.jh.anchor.set(p445.Lh, p445.Mh);
          this.dj = p445.Nh;
          this.ej = p445.Oh;
        }
      };
      f81.prototype.oh = function (p446) {
        this.jh.width = p446 * this.dj;
        this.jh.height = p446 * this.ej;
      };
      f81.prototype.fj = function (p447) {
        this.jh.rotation = p447;
      };
      f81.prototype.nh = function (p448, p449) {
        this.jh.position.set(p448, p449);
      };
      f81.prototype.Mg = function (p450) {
        this.jh.visible = p450;
      };
      f81.prototype.gj = function () {
        return this.jh.visible;
      };
      f81.prototype.qh = function (p451) {
        this.jh.alpha = p451;
      };
      f81.prototype.Mf = function () {
        return this.jh;
      };
      f81.prototype.ih = function () {
        f22(this.jh);
      };
      return f81;
    }();
    var vF47 = function () {
      function f82(p452) {
        this.fb = p452;
        this.Mb = new vF47.Config();
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
        this.lj = new Float32Array(vLN200 * 2);
        this.mj = new Float32Array(vLN200 * 2);
        this.nj = new Float32Array(vLN200 * 2);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      var vLN200 = 200;
      f82.prototype.Kb = function () {
        if (this.pj != null) {
          f22(this.pj.Rf);
        }
        if (this.qj != null) {
          f22(this.qj);
        }
      };
      f82.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = "";
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      f82.prototype.Fg = function (p453) {
        this.Mb = p453;
        this.rj(this.Hb);
      };
      f82.prototype.Mg = function (p454) {
        var v402 = this.Hb;
        this.Hb = p454;
        this.rj(v402);
      };
      f82.prototype.Ig = function (p455) {
        this.M = p455 * 50;
        var vP455 = p455;
        if (p455 > this.fb.cf) {
          vP455 = Math.atan((p455 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var v403 = Math.sqrt(Math.pow(vP455 * 5, 0.707106781186548) * 4 + 25);
        var v404 = Math.min(vLN200, Math.max(3, (v403 - 5) * 5 + 1));
        var v405 = this.kj;
        this.Db = (5 + v403 * 0.9) * 0.025;
        this.kj = Math.floor(v404);
        this.ij = v404 - this.kj;
        if (v405 > 0 && v405 < this.kj) {
          var v406 = this.lj[v405 * 2 - 2];
          var v407 = this.lj[v405 * 2 - 1];
          var v408 = this.mj[v405 * 2 - 2];
          var v409 = this.mj[v405 * 2 - 1];
          var v410 = this.nj[v405 * 2 - 2];
          var v411 = this.nj[v405 * 2 - 1];
          for (var vV405 = v405; vV405 < this.kj; vV405++) {
            this.lj[vV405 * 2] = v406;
            this.lj[vV405 * 2 + 1] = v407;
            this.mj[vV405 * 2] = v408;
            this.mj[vV405 * 2 + 1] = v409;
            this.nj[vV405 * 2] = v410;
            this.nj[vV405 * 2 + 1] = v411;
          }
        }
      };
      f82.prototype.Lg = function (p456, p457) {
        this.kj = p457;
        for (var vLN062 = 0; vLN062 < this.kj; vLN062++) {
          this.lj[vLN062 * 2] = this.mj[vLN062 * 2] = this.nj[vLN062 * 2] = p456();
          this.lj[vLN062 * 2 + 1] = this.mj[vLN062 * 2 + 1] = this.nj[vLN062 * 2 + 1] = p456();
        }
      };
      f82.prototype.Kg = function (p458, p459, p460) {
        this.hj = p460;
        for (var vLN063 = 0; vLN063 < this.kj; vLN063++) {
          this.lj[vLN063 * 2] = this.mj[vLN063 * 2];
          this.lj[vLN063 * 2 + 1] = this.mj[vLN063 * 2 + 1];
        }
        var v412 = p458 - this.mj[0];
        var v413 = p459 - this.mj[1];
        this.sj(v412, v413, this.kj, this.mj);
      };
      f82.prototype.sj = function (p461, p462, p463, p464) {
        var v414 = Math.hypot(p461, p462);
        if (!(v414 <= 0)) {
          var v415 = p464[0];
          var vUndefined10 = undefined;
          p464[0] += p461;
          var v416 = p464[1];
          var vUndefined11 = undefined;
          p464[1] += p462;
          var v417 = this.Db / (this.Db + v414);
          var v418 = 1 - v417 * 2;
          for (var vLN12 = 1, v419 = p463 - 1; vLN12 < v419; vLN12++) {
            vUndefined10 = p464[vLN12 * 2];
            p464[vLN12 * 2] = p464[vLN12 * 2 - 2] * v418 + (vUndefined10 + v415) * v417;
            v415 = vUndefined10;
            vUndefined11 = p464[vLN12 * 2 + 1];
            p464[vLN12 * 2 + 1] = p464[vLN12 * 2 - 1] * v418 + (vUndefined11 + v416) * v417;
            v416 = vUndefined11;
          }
          v417 = this.ij * this.Db / (this.ij * this.Db + v414);
          v418 = 1 - v417 * 2;
          p464[p463 * 2 - 2] = p464[p463 * 2 - 4] * v418 + (p464[p463 * 2 - 2] + v415) * v417;
          p464[p463 * 2 - 1] = p464[p463 * 2 - 3] * v418 + (p464[p463 * 2 - 1] + v416) * v417;
        }
      };
      f82.prototype.Gf = function () {
        return {
          x: this.nj[0],
          y: this.nj[1]
        };
      };
      f82.prototype.Hg = function (p465, p466) {
        var vLN1000000 = 1000000;
        var vP465 = p465;
        var vP466 = p466;
        for (var vLN064 = 0; vLN064 < this.kj; vLN064++) {
          var v420 = this.nj[vLN064 * 2];
          var v421 = this.nj[vLN064 * 2 + 1];
          var v422 = Math.hypot(p465 - v420, p466 - v421);
          if (v422 < vLN1000000) {
            vLN1000000 = v422;
            vP465 = v420;
            vP466 = v421;
          }
        }
        return {
          x: vP465,
          y: vP466,
          distance: vLN1000000
        };
      };
      f82.prototype.vb = function (p467) {
        this.oj = p467;
      };
      f82.prototype.Fb = function (p468, p469) {
        this.Jb = f17(this.Jb, this.Ib ? this.hj ? 0.9 + Math.cos(p468 / 400 * Math.PI) * 0.1 : 1 : 0, p469, 1 / 800);
        this.jj = f17(this.jj, this.Ib ? this.hj ? 1 : 0 : 1, p469, 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      f82.prototype.Gb = function (p470, p471, p472, p473) {
        if (this.Hb && this.Ib) {
          var v423 = Math.pow(0.11112, p471 / 95);
          for (var vLN065 = 0; vLN065 < this.kj; vLN065++) {
            var vF192 = f19(this.lj[vLN065 * 2], this.mj[vLN065 * 2], p472);
            var vF193 = f19(this.lj[vLN065 * 2 + 1], this.mj[vLN065 * 2 + 1], p472);
            this.nj[vLN065 * 2] = f19(vF192, this.nj[vLN065 * 2], v423);
            this.nj[vLN065 * 2 + 1] = f19(vF193, this.nj[vLN065 * 2 + 1], v423);
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, p470, p471, p473);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0];
          this.qj.If.y = this.nj[1] - this.Db * 3;
        }
      };
      f82.prototype.rj = function (p474) {
        if (this.Hb) {
          if (!p474) {
            this.uj();
          }
        } else {
          if (this.pj != null) {
            f22(this.pj.Rf);
          }
          if (this.qj != null) {
            f22(this.qj);
          }
        }
      };
      f82.prototype.uj = function () {
        var vF56 = f5();
        if (this.pj == null) {
          this.pj = new vF49();
        } else {
          f22(this.pj.Rf);
        }
        this.pj.hh(vF56.o.fb.af, vF56.p.Dc().ed(this.Mb.cg), vF56.p.Dc().dd(this.Mb.dg), vF56.p.Dc().fd(this.Mb.Bg), vF56.p.Dc().gd(this.Mb.Cg), vF56.p.Dc().hd(this.Mb.Dg), vF56.p.Dc().jd(this.Mb.Eg));
        if (this.qj == null) {
          this.qj = new vF48("");
          this.qj.style.fontFamily = "vuonghiep";
          this.qj.anchor.set(0.5);
        } else {
          f22(this.qj);
        }
        this.qj.style.fontSize = 15;
        this.qj.style.fill = vF56.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      f82.Config = function () {
        function f83() {
          this.Lb = 0;
          this.cg = vF22.TEAM_DEFAULT;
          this.dg = 0;
          this.Bg = 0;
          this.Cg = 0;
          this.Dg = 0;
          this.Eg = 0;
          this.ad = "";
        }
        return f83;
      }();
      return f82;
    }();
    var vF48 = function () {
      return f13(vF6.fc, function (p475, p476, p477) {
        vF6.fc.call(this, p475, p476, p477);
        this.If = {
          x: 0,
          y: 0
        };
      });
    }();
    var vF49 = function () {
      function f84() {
        this.Rf = new vF6.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new vF50();
        this.vj.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
        this.wj = 0;
        this.xj = new Array(vLN797);
        this.xj[0] = this.yj(0, new vF46(), new vF46());
        for (var vLN13 = 1; vLN13 < vLN797; vLN13++) {
          this.xj[vLN13] = this.yj(vLN13, new vF46(), new vF46());
        }
        this.zj = 0;
        this.Aj = 0;
        this.Bj = 0;
      }
      var vLN0001 = 0.001;
      var vLN797 = 797;
      var v424 = Math.PI * 0.1;
      var v425 = -0.06640625;
      var vLN084375 = 0.84375;
      var vLN02578125 = 0.2578125;
      var v426 = -0.03515625;
      var v427 = -0.0625;
      var vLN05625 = 0.5625;
      var v428 = v425 * 3 + vLN084375;
      var v429 = vLN02578125 - v425 * 3;
      var v430 = v425 + v426;
      var vLN0375 = 0.375;
      var vLN075 = 0.75;
      var v431 = v427 + v427;
      var v432 = v426 * 3 + vLN02578125;
      var v433 = vLN084375 - v426 * 3;
      var v434 = v426 + v425;
      f84.prototype.yj = function (p478, p479, p480) {
        var v435 = new vF57(p479, p480);
        p479.jh.zIndex = vLN0001 * ((vLN797 - p478) * 2 + 1 + 3);
        p480.jh.zIndex = vLN0001 * ((vLN797 - p478) * 2 - 2 + 3);
        return v435;
      };
      f84.prototype.hh = function (p481, p482, p483, p484, p485, p486, p487) {
        var v436 = p483.Zc;
        var v437 = p481 == vO10._e ? p482.bd.$c : p483.$c;
        if (v436.length > 0 && v437.length > 0) {
          for (var vLN066 = 0; vLN066 < this.xj.length; vLN066++) {
            this.xj[vLN066].Nf.kh(v436[vLN066 % v436.length]);
            this.xj[vLN066].Pf.kh(v437[vLN066 % v437.length]);
          }
        }
        this.vj.hh(p484, p485, p486, p487);
      };
      var vF50 = function () {
        var vF136 = f13(vF6.Zb, function () {
          vF6.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new vF6.Zb();
          this.Hj = [];
          for (var vLN067 = 0; vLN067 < 4; vLN067++) {
            var v438 = new vF46();
            v438.kh(f5().q.Ph);
            this.Gj.addChild(v438.jh);
            this.Hj.push(v438);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new vF46();
          this.Jj.kh(f5().q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.xEmojiType_headshot = new vF46();
          this.xEmojiType_headshot.kh(f5().q.emoji_headshot);
          this.xEmojiType_headshot.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_headshot.jh);
          this.xzs();
          this.xEmojiType_kill = new vF46();
          this.xEmojiType_kill.kh(f5().q.emoji_kill);
          this.xEmojiType_kill.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_kill.jh);
          this.zas();
          this.guia_mobile = new vF46();
          this.guia_mobile.kh(f5().q.Id_mobileguia);
          this.guia_mobile.jh.zIndex = 0.001;
          this.addChild(this.guia_mobile.jh);
        });
        vF136.prototype.hh = function (p488, p489, p490, p491) {
          this.Lj(0.002, this.Cj, p488.Zc);
          this.Lj(0.003, this.Dj, p489.Zc);
          this.Lj(0.004, this.Fj, p491.Zc);
          this.Lj(0.005, this.Ej, p490.Zc);
        };
        vF136.prototype.Lj = function (p492, p493, p494) {
          while (p494.length > p493.length) {
            var v439 = new vF46();
            p493.push(v439);
            this.addChild(v439.Mf());
          }
          while (p494.length < p493.length) {
            p493.pop().ih();
          }
          var vP492 = p492;
          for (var vLN068 = 0; vLN068 < p494.length; vLN068++) {
            vP492 += 0.0001;
            var v440 = p493[vLN068];
            v440.kh(p494[vLN068]);
            v440.jh.zIndex = vP492;
          }
        };
        vF136.prototype.mh = function (p495, p496, p497, p498) {
          this.visible = true;
          this.position.set(p495, p496);
          this.rotation = p498;
          for (var vLN069 = 0; vLN069 < this.Cj.length; vLN069++) {
            this.Cj[vLN069].oh(p497);
          }
          for (var vLN070 = 0; vLN070 < this.Dj.length; vLN070++) {
            this.Dj[vLN070].oh(p497);
          }
          for (var vLN071 = 0; vLN071 < this.Ej.length; vLN071++) {
            this.Ej[vLN071].oh(p497);
          }
          for (var vLN072 = 0; vLN072 < this.Fj.length; vLN072++) {
            this.Fj[vLN072].oh(p497);
          }
        };
        vF136.prototype.lh = function () {
          this.visible = false;
        };
        vF136.prototype.Mj = function (p499, p500, p501, p502) {
          this.Gj.visible = true;
          var v441 = p501 / 1000;
          var v442 = 1 / this.Hj.length;
          for (var vLN073 = 0; vLN073 < this.Hj.length; vLN073++) {
            var v443 = 1 - (v441 + v442 * vLN073) % 1;
            this.Hj[vLN073].jh.alpha = 1 - v443;
            this.Hj[vLN073].oh(p500 * (0.5 + v443 * 4.5));
          }
        };
        vF136.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        vF136.prototype.Nj = function (p503, p504, p505, p506) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = f17(this.Jj.jh.alpha, p503.hj ? 0.9 : 0.2, p506, 0.0025);
          this.Jj.oh(p504);
        };
        vF136.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        vF136.prototype.xzs = function () {
          this.xEmojiType_headshot.jh.visible = false;
        };
        vF136.prototype.zas = function () {
          this.xEmojiType_kill.jh.visible = false;
        };
        vF136.prototype.Rx = function (p507, p508, p509, p510) {
          this.guia_mobile.jh.visible = true;
          this.guia_mobile.oh(p508);
        };
        vF136.prototype.Njh = function (p511, p512, p513, p514) {
          this.xEmojiType_headshot.jh.visible = true;
          this.xEmojiType_headshot.oh(p512);
        };
        vF136.prototype.Njk = function (p515, p516, p517, p518) {
          this.xEmojiType_kill.jh.visible = true;
          this.xEmojiType_kill.oh(p516);
        };
        return vF136;
      }();
      f84.prototype.Oj = function (p519) {
        return this.Aj + this.Bj * Math.sin(p519 * v424 - this.zj);
      };
      f84.prototype.tj = function (p520, p521, p522, p523) {
        var v444 = p520.Db * 2;
        var v445 = p520.nj;
        var v446 = p520.kj;
        var v447 = v446 * 4 - 3;
        var vV447 = v447;
        this.zj = p521 / 400 * Math.PI;
        this.Aj = v444 * 1.5;
        this.Bj = v444 * 0.15 * p520.jj;
        var vUndefined12 = undefined;
        var vUndefined13 = undefined;
        var vUndefined14 = undefined;
        var vUndefined15 = undefined;
        var vUndefined16 = undefined;
        var vUndefined17 = undefined;
        var vUndefined18 = undefined;
        var vUndefined19 = undefined;
        vUndefined13 = v445[0];
        vUndefined17 = v445[1];
        if (p523(vUndefined13, vUndefined17)) {
          vUndefined14 = v445[2];
          vUndefined18 = v445[3];
          vUndefined15 = v445[4];
          vUndefined19 = v445[5];
          var v448 = Math.atan2(vUndefined19 + vUndefined17 * 2 - vUndefined18 * 3, vUndefined15 + vUndefined13 * 2 - vUndefined14 * 3);
          this.vj.mh(vUndefined13, vUndefined17, v444, v448);
          this.xj[0].mh(vUndefined13, vUndefined17, v444, this.Oj(0), v448);
          this.xj[1].mh(v428 * vUndefined13 + v429 * vUndefined14 + v430 * vUndefined15, v428 * vUndefined17 + v429 * vUndefined18 + v430 * vUndefined19, v444, this.Oj(1), vF57.angleBetween(this.xj[0], this.xj[2]));
          this.xj[2].mh(vLN0375 * vUndefined13 + vLN075 * vUndefined14 + v431 * vUndefined15, vLN0375 * vUndefined17 + vLN075 * vUndefined18 + v431 * vUndefined19, v444, this.Oj(2), vF57.angleBetween(this.xj[1], this.xj[3]));
          this.xj[3].mh(v432 * vUndefined13 + v433 * vUndefined14 + v434 * vUndefined15, v432 * vUndefined17 + v433 * vUndefined18 + v434 * vUndefined19, v444, this.Oj(3), vF57.angleBetween(this.xj[2], this.xj[4]));
        } else {
          this.vj.lh();
          this.xj[0].lh();
          this.xj[1].lh();
          this.xj[2].lh();
          this.xj[3].lh();
        }
        var vLN42 = 4;
        for (var vLN2 = 2, v449 = v446 * 2 - 4; vLN2 < v449; vLN2 += 2) {
          vUndefined13 = v445[vLN2];
          vUndefined17 = v445[vLN2 + 1];
          if (p523(vUndefined13, vUndefined17)) {
            vUndefined12 = v445[vLN2 - 2];
            vUndefined16 = v445[vLN2 - 1];
            vUndefined14 = v445[vLN2 + 2];
            vUndefined18 = v445[vLN2 + 3];
            vUndefined15 = v445[vLN2 + 4];
            vUndefined19 = v445[vLN2 + 5];
            this.xj[vLN42].mh(vUndefined13, vUndefined17, v444, this.Oj(vLN42), vF57.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v425 * vUndefined12 + vLN084375 * vUndefined13 + vLN02578125 * vUndefined14 + v426 * vUndefined15, v425 * vUndefined16 + vLN084375 * vUndefined17 + vLN02578125 * vUndefined18 + v426 * vUndefined19, v444, this.Oj(vLN42), vF57.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v427 * vUndefined12 + vLN05625 * vUndefined13 + vLN05625 * vUndefined14 + v427 * vUndefined15, v427 * vUndefined16 + vLN05625 * vUndefined17 + vLN05625 * vUndefined18 + v427 * vUndefined19, v444, this.Oj(vLN42), vF57.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v426 * vUndefined12 + vLN02578125 * vUndefined13 + vLN084375 * vUndefined14 + v425 * vUndefined15, v426 * vUndefined16 + vLN02578125 * vUndefined17 + vLN084375 * vUndefined18 + v425 * vUndefined19, v444, this.Oj(vLN42), vF57.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
          } else {
            this.xj[vLN42].lh();
            vLN42++;
            this.xj[vLN42].lh();
            vLN42++;
            this.xj[vLN42].lh();
            vLN42++;
            this.xj[vLN42].lh();
            vLN42++;
          }
        }
        vUndefined13 = v445[v446 * 2 - 4];
        vUndefined17 = v445[v446 * 2 - 3];
        if (p523(vUndefined13, vUndefined17)) {
          vUndefined12 = v445[v446 * 2 - 6];
          vUndefined16 = v445[v446 * 2 - 5];
          vUndefined14 = v445[v446 * 2 - 2];
          vUndefined18 = v445[v446 * 2 - 1];
          this.xj[v447 - 5].mh(vUndefined13, vUndefined17, v444, this.Oj(v447 - 5), vF57.angleBetween(this.xj[v447 - 6], this.xj[v447 - 4]));
          this.xj[v447 - 4].mh(v434 * vUndefined12 + v433 * vUndefined13 + v432 * vUndefined14, v434 * vUndefined16 + v433 * vUndefined17 + v432 * vUndefined18, v444, this.Oj(v447 - 4), vF57.angleBetween(this.xj[v447 - 5], this.xj[v447 - 3]));
          this.xj[v447 - 3].mh(v431 * vUndefined12 + vLN075 * vUndefined13 + vLN0375 * vUndefined14, v431 * vUndefined16 + vLN075 * vUndefined17 + vLN0375 * vUndefined18, v444, this.Oj(v447 - 3), vF57.angleBetween(this.xj[v447 - 4], this.xj[v447 - 2]));
          this.xj[v447 - 2].mh(v430 * vUndefined12 + v429 * vUndefined13 + v428 * vUndefined14, v430 * vUndefined16 + v429 * vUndefined17 + v428 * vUndefined18, v444, this.Oj(v447 - 2), vF57.angleBetween(this.xj[v447 - 3], this.xj[v447 - 1]));
          this.xj[v447 - 1].mh(vUndefined14, vUndefined18, v444, this.Oj(v447 - 1), vF57.angleBetween(this.xj[v447 - 2], this.xj[v447 - 1]));
        } else {
          this.xj[v447 - 5].lh();
          this.xj[v447 - 4].lh();
          this.xj[v447 - 3].lh();
          this.xj[v447 - 2].lh();
          this.xj[v447 - 1].lh();
        }
        if (this.wj == 0 && vV447 > 0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0 && vV447 == 0) {
          f22(this.vj);
        }
        while (this.wj < vV447) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 1;
        }
        while (this.wj > vV447) {
          this.wj -= 1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        var v450 = p520.Ff[vF7.MAGNETIC_TYPE];
        if (this.xj[0].gj() && v450 != null && v450.sc) {
          this.vj.Mj(p520, v444, p521, p522);
        } else {
          this.vj.Ij();
        }
        var v451 = p520.Ff[vF7.VELOCITY_TYPE];
        if (this.xj[0].gj() && v451 != null && v451.sc) {
          this.vj.Nj(p520, v444, p521, p522);
        } else {
          this.vj.Kj();
        }
        ;
        if (gameSettings.ModeStremeremoj) {} else {
          if (gameSettings.emoji_headshot && p520 && p520.Mb && p520.Mb.Mb) {
            this.vj.Njh(p520, v444, p521, p522);
          } else {
            this.vj.xzs();
          }
          if (gameSettings.emoji_kill && p520 && p520.Mb && p520.Mb.Mb) {
            this.vj.Njk(p520, v444, p521, p522);
          } else {
            this.vj.zas();
          }
        }
        ;
        if (gameSettings.mobile && gameSettings.arrow && p520 && p520.Mb && p520.Mb.Mb) {
          this.vj.Rx(p520, v444, p521, p522);
        }
      };
      var vF57 = function () {
        function f85(p524, p525) {
          this.Nf = p524;
          this.Nf.Mg(false);
          this.Pf = p525;
          this.Pf.Mg(false);
        }
        f85.prototype.mh = function (p526, p527, p528, p529, p530) {
          this.Nf.Mg(true);
          this.Nf.nh(p526, p527);
          this.Nf.oh(p528);
          this.Nf.fj(p530);
          this.Pf.Mg(true);
          this.Pf.nh(p526, p527);
          this.Pf.oh(p529);
          this.Pf.fj(p530);
        };
        f85.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        f85.prototype.gj = function () {
          return this.Nf.gj();
        };
        f85.angleBetween = function (p531, p532) {
          return Math.atan2(p531.Nf.jh.position.y - p532.Nf.jh.position.y, p531.Nf.jh.position.x - p532.Nf.jh.position.x);
        };
        return f85;
      }();
      return f84;
    }();
    var vF58 = function () {
      function f86(p533) {
        this.se = p533;
        this.te = p533.get()[0];
        this.ue = new vF6.ac({
          view: this.te,
          transparent: true
        });
        this.sc = false;
        this.Pj = new vF49();
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
        var vThis13 = this;
        f5().p.ca(function () {
          if (f5().p.W()) {
            vThis13.Fb();
          }
        });
      }
      f86.prototype.Fb = function () {
        var vF59 = f5();
        this.Pj.hh(vO10.$e, null, vF59.p.Dc().dd(this.rh), vF59.p.Dc().fd(this.sh), vF59.p.Dc().gd(this.th), vF59.p.Dc().hd(this.uh), vF59.p.Dc().jd(this.vh));
      };
      f86.prototype.Le = function (p534) {
        this.sc = p534;
      };
      f86.prototype.ak = function (p535, p536, p537) {
        this.rh = p535;
        this.Sj = p536;
        this.Xj = p537;
        this.Fb();
      };
      f86.prototype.bk = function (p538, p539, p540) {
        this.sh = p538;
        this.Tj = p539;
        this.Yj = p540;
        this.Fb();
      };
      f86.prototype.ck = function (p541, p542, p543) {
        this.th = p541;
        this.Uj = p542;
        this.Zj = p543;
        this.Fb();
      };
      f86.prototype.dk = function (p544, p545, p546) {
        this.uh = p544;
        this.Vj = p545;
        this.$j = p546;
        this.Fb();
      };
      f86.prototype.ek = function (p547, p548, p549) {
        this.vh = p547;
        this.Wj = p548;
        this._j = p549;
        this.Fb();
      };
      f86.prototype.Ra = function () {
        var v452 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = v452;
        this.te.width = v452 * this.Qj;
        this.te.height = v452 * this.Rj;
        this.Ng = this.Rj / 4;
        var vF152 = f15(1, this.Pj.xj.length, Math.floor(this.Qj / this.Ng) * 2 - 5);
        if (this.Pj.wj != vF152) {
          for (var vVF152 = vF152; vVF152 < this.Pj.xj.length; vVF152++) {
            this.Pj.xj[vVF152].lh();
          }
          while (this.Pj.wj < vF152) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 1;
          }
          while (this.Pj.wj > vF152) {
            this.Pj.wj -= 1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      f86.prototype.Pa = function () {
        if (this.sc) {
          if (f5().p.W) {
            var v453 = Date.now();
            var v454 = v453 / 200;
            var v455 = Math.sin(v454);
            var v456 = this.Ng;
            var v457 = this.Ng * 1.5;
            var v458 = this.Qj - (this.Qj - v456 * 0.5 * (this.Pj.wj - 1)) * 0.5;
            var v459 = this.Rj * 0.5;
            var vLN074 = 0;
            var vLN076 = 0;
            for (var v460 = -1; v460 < this.Pj.wj; v460++) {
              var vV460 = v460;
              var v461 = Math.cos(vV460 * 1 / 12 * Math.PI - v454) * (1 - Math.pow(16, vV460 * -1 / 12));
              if (v460 >= 0) {
                var v462 = v458 + v456 * -0.5 * vV460;
                var v463 = v459 + v456 * 0.5 * v461;
                var v464 = v456 * 2;
                var v465 = v457 * 2;
                var v466 = Math.atan2(vLN076 - v461, vV460 - vLN074);
                if (v460 == 0) {
                  this.Pj.vj.mh(v462, v463, v464, v466);
                }
                this.Pj.xj[v460].mh(v462, v463, v464, v465, v466);
                var v467 = this.Sj ? this.Xj ? 0.4 + v455 * 0.2 : 0.9 + v455 * 0.1 : this.Xj ? 0.4 : 1;
                this.Pj.xj[v460].Nf.qh(v467);
                this.Pj.xj[v460].Pf.qh(v467);
              }
              vLN074 = vV460;
              vLN076 = v461;
            }
            for (var vLN077 = 0; vLN077 < this.Pj.vj.Cj.length; vLN077++) {
              var v468 = this.Tj ? this.Yj ? 0.4 + v455 * 0.2 : 0.9 + v455 * 0.1 : this.Yj ? 0.4 : 1;
              this.Pj.vj.Cj[vLN077].qh(v468);
            }
            for (var vLN078 = 0; vLN078 < this.Pj.vj.Dj.length; vLN078++) {
              var v469 = this.Uj ? this.Zj ? 0.4 + v455 * 0.2 : 0.9 + v455 * 0.1 : this.Zj ? 0.4 : 1;
              this.Pj.vj.Dj[vLN078].qh(v469);
            }
            for (var vLN079 = 0; vLN079 < this.Pj.vj.Ej.length; vLN079++) {
              var v470 = this.Vj ? this.$j ? 0.4 + v455 * 0.2 : 0.9 + v455 * 0.1 : this.$j ? 0.4 : 1;
              this.Pj.vj.Ej[vLN079].qh(v470);
            }
            for (var vLN080 = 0; vLN080 < this.Pj.vj.Fj.length; vLN080++) {
              var v471 = this.Wj ? this._j ? 0.4 + v455 * 0.2 : 0.9 + v455 * 0.1 : this._j ? 0.4 : 1;
              this.Pj.vj.Fj[vLN080].qh(v471);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return f86;
    }();
    var vF60 = function () {
      function f87(p550) {
        this.rc = p550;
      }
      f87.fk = $("#game-view");
      f87.gk = $("#results-view");
      f87.hk = $("#main-menu-view");
      f87.ik = $("#popup-view");
      f87.jk = $("#toaster-view");
      f87.kk = $("#loading-view");
      f87.lk = $("#stretch-box");
      f87.mk = $("#game-canvas");
      f87.di = $("#background-canvas");
      f87.nk = $("#social-buttons");
      f87.ok = $("#markup-wrap");
      f87.prototype.a = function () {};
      f87.prototype.ii = function () {};
      f87.prototype.ji = function () {};
      f87.prototype.ei = function () {};
      f87.prototype.Ra = function () {};
      f87.prototype.Pa = function (p551, p552) {};
      return f87;
    }();
    var vF61 = function () {
      function f88(p553, p554, p555, p556, p557, p558) {}
      var v$2 = $("#final-caption");
      var v$3 = $("#final-continue");
      var v$4 = $("#congrats-bg");
      var v$5 = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var v$6 = $("#final-share-fb");
      var v$7 = $("#final-message");
      var v$8 = $("#final-score");
      var v$9 = $("#final-place");
      var v$10 = $("#final-board");
      var vF137 = f13(vF60, function () {
        vF60.call(this, 0);
        var vThis14 = this;
        var vF510 = f5();
        var v472 = vF60.mk.get()[0];
        console.log("sSE=" + v527.qk);
        v$6.toggle(v527.qk);
        v$2.text(f8("index.game.result.title"));
        v$3.text(f8("index.game.result.continue"));
        v$3.click(function () {
          vF510.r.Cd();
          vF510.f.Ma.c();
          vF510.r.G(vF11.AudioState.F);
          vF510.s.I(vF510.s.F);
        });
        $("html").keydown(function (p559) {
          if (p559.keyCode == 32) {
            vThis14.rk = true;
          }
          if (p559.keyCode == 107) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (p559.keyCode == 109) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (gameSettings.KeyCodeRespawn == p559.keyCode) {
            vThis14.rk = true;
            window.onclose();
            setTimeout(function () {
              $("#final-continue").click();
              $("#mm-action-play").click();
              $("#adbl-continue").click();
            }, 1000);
          }
        }).keyup(function (p560) {
          if (p560.keyCode == 32) {
            vThis14.rk = false;
          }
        });
        v472.addEventListener("touchmove", function (p561) {
          if (!RechekingPhone() || !gameSettings.gamePad.checked) {
            if (p561 = p561 || window.event) {
              p561 = p561.touches[0];
              if (p561.clientX !== undefined) {
                vThis14.sk = Math.atan2(p561.clientY - v472.offsetHeight * 0.5, p561.clientX - v472.offsetWidth * 0.5);
              } else {
                vThis14.sk = Math.atan2(p561.pageY - v472.offsetHeight * 0.5, p561.pageX - v472.offsetWidth * 0.5);
              }
            }
          }
        }, true);
        v472.addEventListener("touchstart", function (p562) {
          if (p562 = p562 || window.event) {
            vThis14.rk = p562.touches.length >= 2;
          }
          p562.preventDefault();
        }, true);
        v472.addEventListener("touchend", function (p563) {
          if (p563 = p563 || window.event) {
            vThis14.rk = p563.touches.length >= 2;
          }
        }, true);
        v472.addEventListener("mousemove", function (p564) {
          if (!PilotoAutomatico) {
            if (p564 = p564 || window.event && p564.clientX !== undefined) {
              vThis14.sk = Math.atan2(p564.clientY - v472.offsetHeight * 0.5, p564.clientX - v472.offsetWidth * 0.5);
            }
          }
        }, true);
        v472.addEventListener("mousedown", function (p565) {
          console.log(p565);
          vThis14.rk = true;
        }, true);
        v472.addEventListener("mouseup", function (p566) {
          console.log(p566);
          vThis14.rk = false;
        }, true);
        this.wb = new vF23(vF60.mk);
        this.cb = 0;
        this.sk = 0;
        this.rk = false;
        theoEvents.eventoPrincipal = vThis14;
      });
      vF137.prototype.a = function () {};
      vF137.prototype.ii = function () {
        if (this.cb == 0) {
          vF60.fk.stop();
          vF60.fk.fadeIn(500);
          vF60.gk.stop();
          vF60.gk.fadeOut(1);
          vF60.hk.stop();
          vF60.hk.fadeOut(50);
          vF60.ik.stop();
          vF60.ik.fadeOut(50);
          vF60.jk.stop();
          vF60.jk.fadeOut(50);
          vF60.kk.stop();
          vF60.kk.fadeOut(50);
          vF60.lk.stop();
          vF60.lk.fadeOut(1);
          vF60.di.stop();
          vF60.di.fadeOut(50);
          vF13.Le(false);
          vF60.nk.stop();
          vF60.nk.fadeOut(50);
          vF60.ok.stop();
          vF60.ok.fadeOut(50);
        } else {
          vF60.fk.stop();
          vF60.fk.fadeIn(500);
          vF60.gk.stop();
          vF60.gk.fadeIn(500);
          vF60.hk.stop();
          vF60.hk.fadeOut(50);
          vF60.ik.stop();
          vF60.ik.fadeOut(50);
          vF60.jk.stop();
          vF60.jk.fadeOut(50);
          vF60.kk.stop();
          vF60.kk.fadeOut(50);
          vF60.lk.stop();
          vF60.lk.fadeOut(1);
          vF60.di.stop();
          vF60.di.fadeOut(50);
          vF13.Le(false);
          vF60.nk.stop();
          vF60.nk.fadeOut(50);
          vF60.ok.stop();
          vF60.ok.fadeOut(50);
        }
      };
      vF137.prototype.J = function () {
        this.cb = 0;
        return this;
      };
      vF137.prototype.Fa = function () {
        console.log("re");
        v$4.hide();
        setTimeout(function () {
          console.log("fi_bg");
          v$4.fadeIn(500);
        }, 3000);
        v$5.hide();
        setTimeout(function () {
          console.log("fi_aw");
          v$5.fadeIn(500);
        }, 500);
        this.cb = 1;
        return this;
      };
      vF137.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 1) {
          f5().r.Gd();
        }
      };
      vF137.prototype.Ra = function () {
        this.wb.Ra();
      };
      vF137.prototype.Pa = function (p567, p568) {
        this.wb.Pa(p567, p568);
      };
      vF137.prototype.Da = function (p569, p570, p571) {
        var vUndefined20 = undefined;
        var vUndefined21 = undefined;
        var vUndefined22 = undefined;
        if (p570 >= 1 && p570 <= 10) {
          vUndefined20 = f8("index.game.result.place.i" + p570);
          vUndefined21 = f8("index.game.result.placeInBoard");
          vUndefined22 = f8("index.game.social.shareResult.messGood").replace("{0}", p571).replace("{1}", p569).replace("{2}", vUndefined20);
        } else {
          vUndefined20 = "";
          vUndefined21 = f8("index.game.result.tryHit");
          vUndefined22 = f8("index.game.social.shareResult.messNorm").replace("{0}", p571).replace("{1}", p569);
        }
        v$7.html(f8("index.game.result.your"));
        v$8.html(p569);
        v$9.html(vUndefined20);
        v$10.html(vUndefined21);
        if (v527.qk) {
          var vF85 = f8("index.game.result.share");
          f8("index.game.social.shareResult.caption");
          v$6.empty().append(f88(vF85, "https://wormate.io", "wormate.io", vUndefined22, vUndefined22, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      vF137.prototype.T = function () {
        return this.sk;
      };
      vF137.prototype.U = function () {
        return this.rk;
      };
      return vF137;
    }();
    var vF63 = function () {
      var v$11 = $("#loading-worm-a");
      var v$12 = $("#loading-worm-b");
      var v$13 = $("#loading-worm-c");
      var vA14 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var vF138 = f13(vF60, function () {
        vF60.call(this, 0);
      });
      vF138.prototype.a = function () {};
      vF138.prototype.ii = function () {
        vF60.fk.stop();
        vF60.fk.fadeOut(50);
        vF60.gk.stop();
        vF60.gk.fadeOut(50);
        vF60.hk.stop();
        vF60.hk.fadeOut(50);
        vF60.ik.stop();
        vF60.ik.fadeOut(50);
        vF60.jk.stop();
        vF60.jk.fadeOut(50);
        vF60.kk.stop();
        vF60.kk.fadeIn(500);
        vF60.lk.stop();
        vF60.lk.fadeIn(1);
        vF60.di.stop();
        vF60.di.fadeIn(500);
        vF13.Le(true);
        vF60.nk.stop();
        vF60.nk.fadeOut(50);
        vF60.ok.stop();
        vF60.ok.fadeOut(50);
      };
      vF138.prototype.ji = function () {
        this.tk();
      };
      vF138.prototype.tk = function () {
        v$11.css("background-position", "100% 200%");
        for (var vLN081 = 0; vLN081 < vA14.length; vLN081++) {}
        v$11.css("background-position", vA14[0]);
        v$12.css("background-position", vA14[1]);
        v$13.css("background-position", vA14[2]);
      };
      return vF138;
    }();
    var vF66 = function () {
      $("#mm-event-text");
      var v$14 = $("#mm-skin-canv");
      var v$15 = $("#mm-skin-prev");
      var v$16 = $("#mm-skin-next");
      var v$17 = $("#mm-skin-over");
      var v$18 = $("#mm-skin-over-button-list");
      var v$19 = $("#mm-params-nickname");
      var v$20 = $("#mm-params-game-mode");
      var v$21 = $("#mm-action-buttons");
      var v$22 = $("#mm-action-play");
      var v$23 = $("#mm-action-guest");
      var v$24 = $("#mm-action-login");
      var v$25 = $("#mm-player-info");
      var v$26 = $("#mm-store");
      var v$27 = $("#mm-leaders");
      var v$28 = $("#mm-settings");
      var v$29 = $("#mm-coins-box");
      var v$30 = $("#mm-player-avatar");
      var v$31 = $("#mm-player-username");
      var v$32 = $("#mm-coins-val");
      var v$33 = $("#mm-player-exp-bar");
      var v$34 = $("#mm-player-exp-val");
      var v$35 = $("#mm-player-level");
      var vF139 = f13(vF60, function () {
        vF60.call(this, 1);
        var vF511 = f5();
        this.uk = new vF58(v$14);
        v$20.click(function () {
          vF511.r.Cd();
        });
        v$14.click(function () {
          if (vF511.u.P()) {
            vF511.r.Cd();
            vF511.s.I(vF511.s.$h);
          }
        });
        v$15.click(function () {
          vF511.r.Cd();
          vF511.t.Ah();
        });
        v$16.click(function () {
          vF511.r.Cd();
          vF511.t.zh();
        });
        v$19.keypress(function (p572) {
          if (p572.keyCode == 13) {
            vF511.na();
          }
        });
        v$22.click(function () {
          vF511.r.Cd();
          vF511.na();
        });
        v$23.click(function () {
          vF511.r.Cd();
          vF511.na();
        });
        v$24.click(function () {
          vF511.r.Cd();
          vF511.s.I(vF511.s.Zh);
        });
        v$28.click(function () {
          vF511.r.Cd();
          vF511.s.I(vF511.s.xa);
        });
        v$25.click(function () {
          if (vF511.u.P()) {
            vF511.r.Cd();
            vF511.s.I(vF511.s.Yh);
          }
        });
        v$27.click(function () {
          if (vF511.u.P()) {
            vF511.r.Cd();
            vF511.s.I(vF511.s.Xh);
          }
        });
        v$26.click(function () {
          if (vF511.u.P()) {
            vF511.r.Cd();
            vF511.s.I(vF511.s._h);
          }
        });
        v$29.click(function () {
          if (vF511.u.P()) {
            vF511.r.Cd();
            vF511.s.I(vF511.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $("#final-continue").html("\n                         <div id=\"final-continue1\">Continue(Home)</div>\n                         ");
        $("#final-continue").after("<div id='final-replay'>Replay</div>");
        $("#final-replay").click(function () {
          let vHoisinhnhanh = hoisinhnhanh;
          if (vHoisinhnhanh) {
            anApp.r.Hd();
            anApp.sa(vHoisinhnhanh);
          }
        });
        var vF67 = f6(vF17.va);
        if (vF67 != "ARENA" && vF67 != "TEAM2") {
          vF67 = "ARENA";
        }
        v$20.val(vF67);
        console.log("Load GM: " + vF67);
      });
      vF139.prototype.a = function () {
        var vF512 = f5();
        var vThis15 = this;
        vF512.u.V(function () {
          vF512.s.F.xk();
        });
        vF512.u.Pi(function () {
          if (vF512.u.P()) {
            vF512.t.Bh(vF512.u.Di(), vF38.ia);
            vF512.t.Bh(vF512.u.Ei(), vF38.ja);
            vF512.t.Bh(vF512.u.Fi(), vF38.ka);
            vF512.t.Bh(vF512.u.Gi(), vF38.la);
            vF512.t.Bh(vF512.u.Hi(), vF38.ma);
          } else {
            vF512.t.Bh(vF512.Ga(), vF38.ia);
            vF512.t.Bh(0, vF38.ja);
            vF512.t.Bh(0, vF38.ka);
            vF512.t.Bh(0, vF38.la);
            vF512.t.Bh(0, vF38.ma);
          }
        });
        vF512.u.Pi(function () {
          v$22.toggle(vF512.u.P());
          v$24.toggle(!vF512.u.P());
          v$23.toggle(!vF512.u.P());
          v$27.toggle(vF512.u.P());
          v$26.toggle(vF512.u.P());
          v$29.toggle(vF512.u.P());
          if (vF512.u.P()) {
            v$17.hide();
            v$31.html(vF512.u.wi());
            v$30.attr("src", vF512.u.xi());
            v$32.html(vF512.u.zi());
            v$33.width(vF512.u.Bi() * 100 / vF512.u.Ci() + "%");
            v$34.html(vF512.u.Bi() + " / " + vF512.u.Ci());
            v$35.html(vF512.u.Ai());
            v$19.val(vF512.u.ga());
          } else {
            v$17.toggle(v527.qk && !vF512.Ha());
            v$31.html(v$31.data("guest"));
            v$30.attr("src", vLSimagesguestavatarxma);
            v$32.html("10");
            v$33.width("0");
            v$34.html("");
            v$35.html(1);
            v$19.val(f6(vF17.Aa));
          }
        });
        vF512.t.xh(function () {
          vThis15.uk.ak(vF512.t.ha(vF38.ia), false, false);
          vThis15.uk.bk(vF512.t.ha(vF38.ja), false, false);
          vThis15.uk.ck(vF512.t.ha(vF38.ka), false, false);
          vThis15.uk.dk(vF512.t.ha(vF38.la), false, false);
          vThis15.uk.ek(vF512.t.ha(vF38.ma), false, false);
        });
      };
      vF139.prototype.ii = function () {
        vF60.fk.stop();
        vF60.fk.fadeOut(50);
        vF60.gk.stop();
        vF60.gk.fadeOut(50);
        vF60.hk.stop();
        vF60.hk.fadeIn(500);
        vF60.ik.stop();
        vF60.ik.fadeOut(50);
        vF60.jk.stop();
        vF60.jk.fadeOut(50);
        vF60.kk.stop();
        vF60.kk.fadeOut(50);
        vF60.lk.stop();
        vF60.lk.fadeIn(1);
        vF60.di.stop();
        vF60.di.fadeIn(500);
        vF13.Le(true);
        vF60.nk.stop();
        vF60.nk.fadeIn(500);
        vF60.ok.stop();
        vF60.ok.fadeIn(500);
      };
      vF139.prototype.ji = function () {
        f5().r.Dd();
        this.uk.Le(true);
      };
      vF139.prototype.ei = function () {
        this.uk.Le(false);
      };
      vF139.prototype.Ra = function () {
        this.uk.Ra();
      };
      vF139.prototype.Pa = function (p573, p574) {
        this.uk.Pa();
      };
      vF139.prototype.ga = function () {
        return v$19.val();
      };
      vF139.prototype.D = function () {
        return v$20.val();
      };
      vF139.prototype.xk = function () {
        v$21.show();
      };
      vF139.prototype.vk = function () {
        var v473 = $("#mm-advice-cont").children();
        var vLN082 = 0;
        setInterval(function () {
          v473.eq(vLN082).fadeOut(500, function () {
            if (++vLN082 >= v473.length) {
              vLN082 = 0;
            }
            v473.eq(vLN082).fadeIn(500).css("display", "inline-block");
          });
        }, 3000);
      };
      vF139.prototype.wk = function () {
        function f89() {
          vF513.Ka(true);
          setTimeout(function () {
            v$17.hide();
          }, 3000);
        }
        var vF513 = f5();
        if (v527.qk && !vF513.Ha()) {
          v$17.show();
          var vF86 = f8("index.game.main.menu.unlockSkins.share");
          var vEncodeURIComponent = encodeURIComponent(f8("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
          var vEncodeURIComponent2 = encodeURIComponent(f8("index.game.main.menu.unlockSkins.comeAndPlay"));
          v$18.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + vF86 + "</span></a>").click(f89));
          v$18.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + vF86 + "</span></a>").click(f89));
        }
      };
      return vF139;
    }();
    var vF68 = function () {
      var vF1310 = f13(vF60, function () {
        vF60.call(this, 0);
      });
      vF1310.prototype.a = function () {};
      vF1310.prototype.ii = function () {
        vF60.fk.stop();
        vF60.fk.fadeOut(50);
        vF60.gk.stop();
        vF60.gk.fadeOut(50);
        vF60.hk.stop();
        vF60.hk.fadeOut(50);
        vF60.ik.stop();
        vF60.ik.fadeOut(50);
        vF60.jk.stop();
        vF60.jk.fadeOut(50);
        vF60.kk.stop();
        vF60.kk.fadeOut(50);
        vF60.lk.stop();
        vF60.lk.fadeOut(1);
        vF60.di.stop();
        vF60.di.fadeOut(50);
        vF13.Le(false);
        vF60.nk.stop();
        vF60.nk.fadeOut(50);
        vF60.ok.stop();
        vF60.ok.fadeOut(50);
      };
      return vF1310;
    }();
    var vF69 = function () {
      var v$36 = $("#toaster-stack");
      var vF1311 = f13(vF60, function () {
        vF60.call(this, 0);
        this.yk = [];
        this.zk = null;
      });
      vF1311.prototype.a = function () {};
      vF1311.prototype.ii = function () {
        vF60.fk.stop();
        vF60.fk.fadeOut(50);
        vF60.gk.stop();
        vF60.gk.fadeOut(50);
        vF60.hk.stop();
        vF60.hk.fadeOut(50);
        vF60.ik.stop();
        vF60.ik.fadeOut(50);
        vF60.jk.stop();
        vF60.jk.fadeIn(500);
        vF60.kk.stop();
        vF60.kk.fadeOut(50);
        vF60.lk.stop();
        vF60.lk.fadeIn(1);
        vF60.di.stop();
        vF60.di.fadeIn(500);
        vF13.Le(true);
        vF60.nk.stop();
        vF60.nk.fadeOut(50);
        vF60.ok.stop();
        vF60.ok.fadeIn(500);
      };
      vF1311.prototype.ji = function () {
        this.Ak();
      };
      vF1311.prototype.mi = function () {
        return this.zk != null || this.yk.length > 0;
      };
      vF1311.prototype._ = function (p575) {
        this.yk.unshift(p575);
        setTimeout(function () {
          f5().s.ki();
        }, 0);
      };
      vF1311.prototype.Ti = function (p576) {
        this.yk.push(p576);
        setTimeout(function () {
          f5().s.ki();
        }, 0);
      };
      vF1311.prototype.Ak = function () {
        var vThis16 = this;
        if (this.zk == null) {
          if (this.yk.length == 0) {
            f5().s.gi();
            return;
          }
          var v474 = this.yk.shift();
          this.zk = v474;
          var v475 = v474.Bk();
          v475.hide();
          v475.fadeIn(300);
          v$36.append(v475);
          v474.Ck = function () {
            v475.fadeOut(300);
            setTimeout(function () {
              v475.remove();
            }, 300);
            if (vThis16.zk == v474) {
              vThis16.zk = null;
            }
            vThis16.Ak();
          };
          v474.ji();
        }
      };
      return vF1311;
    }();
    var vF70 = function () {
      var v$37 = $("#popup-menu-label");
      var v$38 = $("#popup-menu-coins-box");
      var v$39 = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var vF514 = f5();
        vF514.r.Cd();
        vF514.s.gi();
      });
      v$38.click(function () {
        var vF515 = f5();
        if (vF515.u.P()) {
          vF515.r.Cd();
          vF515.s.I(vF515.s.Wh);
        }
      });
      var vF1312 = f13(vF60, function (p577, p578) {
        vF60.call(this, 1);
        this.ad = p577;
        this.Dk = p578;
      });
      vF1312.prototype.a = function () {
        vF1312.parent.prototype.a.call(this);
        if (!vF1312.Ek) {
          vF1312.Ek = true;
          var vF516 = f5();
          vF516.u.Pi(function () {
            if (vF516.u.P()) {
              v$39.html(vF516.u.zi());
            } else {
              v$39.html("0");
            }
          });
        }
      };
      vF1312.Fk = $("#coins-view");
      vF1312.Gk = $("#leaders-view");
      vF1312.Hk = $("#profile-view");
      vF1312.Ik = $("#settings-view");
      vF1312.Jk = $("#login-view");
      vF1312.Kk = $("#skins-view");
      vF1312.Lk = $("#store-view");
      vF1312.Mk = $("#wear-view");
      vF1312.Nk = $("#withdraw-consent-view");
      vF1312.Ok = $("#delete-account-view");
      vF1312.Pk = $("#please-wait-view");
      vF1312.prototype.ii = function () {
        vF60.fk.stop();
        vF60.fk.fadeOut(200);
        vF60.gk.stop();
        vF60.gk.fadeOut(200);
        vF60.hk.stop();
        vF60.hk.fadeOut(200);
        vF60.ik.stop();
        vF60.ik.fadeIn(200);
        vF60.jk.stop();
        vF60.jk.fadeOut(200);
        vF60.kk.stop();
        vF60.kk.fadeOut(200);
        vF60.nk.stop();
        vF60.nk.fadeIn(200);
        vF60.ok.stop();
        vF60.ok.fadeIn(200);
        v$37.html(this.ad);
        v$38.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      vF1312.prototype.Rk = function () {};
      vF1312.prototype.Sk = function () {
        vF70.Pk.stop();
        vF70.Pk.fadeIn(300);
      };
      vF1312.prototype.Qk = function () {
        vF70.Pk.stop();
        vF70.Pk.fadeOut(300);
      };
      return vF1312;
    }();
    var vF71 = function () {
      var v$40 = $("#store-buy-coins_125000");
      var v$41 = $("#store-buy-coins_50000");
      var v$42 = $("#store-buy-coins_16000");
      var v$43 = $("#store-buy-coins_7000");
      var v$44 = $("#store-buy-coins_3250");
      var v$45 = $("#store-buy-coins_1250");
      var vF1313 = f13(vF70, function () {
        vF70.call(this, f8("index.game.popup.menu.coins.tab"), false);
        var vF517 = f5();
        var vThis17 = this;
        v$40.click(function () {
          vF517.r.Cd();
          vThis17.Tk("coins_125000");
        });
        v$41.click(function () {
          vF517.r.Cd();
          vThis17.Tk("coins_50000");
        });
        v$42.click(function () {
          vF517.r.Cd();
          vThis17.Tk("coins_16000");
        });
        v$43.click(function () {
          vF517.r.Cd();
          vThis17.Tk("coins_7000");
        });
        v$44.click(function () {
          vF517.r.Cd();
          vThis17.Tk("coins_3250");
        });
        v$45.click(function () {
          vF517.r.Cd();
          vThis17.Tk("coins_1250");
        });
      });
      vF1313.prototype.a = function () {
        vF1313.parent.prototype.a.call(this);
      };
      vF1313.prototype.Rk = function () {
        vF70.Fk.stop();
        vF70.Fk.fadeIn(200);
        vF70.Gk.stop();
        vF70.Gk.fadeOut(50);
        vF70.Hk.stop();
        vF70.Hk.fadeOut(50);
        vF70.Jk.stop();
        vF70.Jk.fadeOut(50);
        vF70.Ik.stop();
        vF70.Ik.fadeOut(50);
        vF70.Kk.stop();
        vF70.Kk.fadeOut(50);
        vF70.Lk.stop();
        vF70.Lk.fadeOut(50);
        vF70.Mk.stop();
        vF70.Mk.fadeOut(50);
        vF70.Nk.stop();
        vF70.Nk.fadeOut(50);
        vF70.Ok.stop();
        vF70.Ok.fadeOut(50);
      };
      vF1313.prototype.ji = function () {
        f5().r.Dd();
      };
      vF1313.prototype.Tk = function (p579) {};
      return vF1313;
    }();
    var vF72 = function () {
      var v$46 = $("#highscore-table");
      var v$47 = $("#leaders-button-level");
      var v$48 = $("#leaders-button-highscore");
      var v$49 = $("#leaders-button-kills");
      var vF1314 = f13(vF70, function () {
        vF70.call(this, f8("index.game.popup.menu.leaders.tab"), true);
        var vF518 = f5();
        var vThis18 = this;
        this.Uk = {};
        this.Vk = {
          Wk: {
            Xk: v$47,
            Yk: "byLevel"
          },
          Zk: {
            Xk: v$48,
            Yk: "byHighScore"
          },
          $k: {
            Xk: v$49,
            Yk: "byKillsAndHeadShots"
          }
        };
        v$47.click(function () {
          vF518.r.Cd();
          vThis18._k(vThis18.Vk.Wk);
        });
        v$48.click(function () {
          vF518.r.Cd();
          vThis18._k(vThis18.Vk.Zk);
        });
        v$49.click(function () {
          vF518.r.Cd();
          vThis18._k(vThis18.Vk.$k);
        });
      });
      vF1314.prototype.a = function () {
        vF1314.parent.prototype.a.call(this);
      };
      vF1314.prototype.Rk = function () {
        vF70.Fk.stop();
        vF70.Fk.fadeOut(50);
        vF70.Gk.stop();
        vF70.Gk.fadeIn(200);
        vF70.Hk.stop();
        vF70.Hk.fadeOut(50);
        vF70.Jk.stop();
        vF70.Jk.fadeOut(50);
        vF70.Ik.stop();
        vF70.Ik.fadeOut(50);
        vF70.Kk.stop();
        vF70.Kk.fadeOut(50);
        vF70.Lk.stop();
        vF70.Lk.fadeOut(50);
        vF70.Mk.stop();
        vF70.Mk.fadeOut(50);
        vF70.Nk.stop();
        vF70.Nk.fadeOut(50);
        vF70.Ok.stop();
        vF70.Ok.fadeOut(50);
      };
      vF1314.prototype.ji = function () {
        f5().r.Dd();
        var vThis19 = this;
        this.Sk();
        $.get(vAtob + "/pub/leaders", function (p580) {
          vThis19.Uk = p580;
          vThis19._k(vThis19.al ?? vThis19.Vk.Wk);
          vThis19.Qk();
        }).done(function () {
          vThis19.Qk();
        });
      };
      vF1314.prototype._k = function (p581) {
        this.al = p581;
        for (var v476 in this.Vk) {
          if (this.Vk.hasOwnProperty(v476)) {
            var v477 = this.Vk[v476];
            v477.Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass("pressed");
        for (var v478 = this.Uk[this.al.Yk], vLS3 = "", vLN083 = 0; vLN083 < v478.length; vLN083++) {
          var v479 = v478[vLN083];
          vLS3 += "<div class=\"table-row\"><span>" + (vLN083 + 1) + "</span><span><img src=\"" + v479.avatarUrl + "\"/></span><span>" + v479.username + "</span><span>" + v479.level + "</span><span>" + v479.highScore + "</span><span>" + v479.headShots + " / " + v479.kills + "</span></div>";
        }
        v$46.empty();
        v$46.append(vLS3);
      };
      return vF1314;
    }();
    var vF74 = function () {
      var v$50 = $("#popup-login-gg");
      var v$51 = $("#popup-login-fb");
      var vF1315 = f13(vF70, function () {
        vF70.call(this, f8("index.game.popup.menu.login.tab"), false);
        var vF519 = f5();
        var vThis20 = this;
        v$50.click(function () {
          vF519.r.Cd();
          vThis20.Sk();
          vF519.u.Qi(function () {
            vThis20.Qk();
          });
          setTimeout(function () {
            vThis20.Qk();
          }, 10000);
          vF519.u.Zi();
        });
        v$51.click(function () {
          vF519.r.Cd();
          vThis20.Sk();
          vF519.u.Qi(function () {
            vThis20.Qk();
          });
          setTimeout(function () {
            vThis20.Qk();
          }, 10000);
          vF519.u.Vi();
        });
      });
      vF1315.prototype.a = function () {
        vF1315.parent.prototype.a.call(this);
      };
      vF1315.prototype.Rk = function () {
        vF70.Fk.stop();
        vF70.Fk.fadeOut(50);
        vF70.Gk.stop();
        vF70.Gk.fadeOut(50);
        vF70.Hk.stop();
        vF70.Hk.fadeOut(50);
        vF70.Jk.stop();
        vF70.Jk.fadeIn(200);
        vF70.Ik.stop();
        vF70.Ik.fadeOut(50);
        vF70.Kk.stop();
        vF70.Kk.fadeOut(50);
        vF70.Lk.stop();
        vF70.Lk.fadeOut(50);
        vF70.Mk.stop();
        vF70.Mk.fadeOut(50);
        vF70.Nk.stop();
        vF70.Nk.fadeOut(50);
        vF70.Ok.stop();
        vF70.Ok.fadeOut(50);
      };
      vF1315.prototype.ji = function () {
        f5().r.Dd();
      };
      return vF1315;
    }();
    var vF75 = function () {
      var v$52 = $("#profile-avatar");
      var v$53 = $("#profile-username");
      var v$54 = $("#profile-experience-bar");
      var v$55 = $("#profile-experience-val");
      var v$56 = $("#profile-level");
      var v$57 = $("#profile-stat-highScore");
      var v$58 = $("#profile-stat-bestSurvivalTime");
      var v$59 = $("#profile-stat-kills");
      var v$60 = $("#profile-stat-headshots");
      var v$61 = $("#profile-stat-gamesPlayed");
      var v$62 = $("#profile-stat-totalTimeSpent");
      var v$63 = $("#profile-stat-registrationDate");
      var vF1316 = f13(vF70, function () {
        vF70.call(this, f8("index.game.popup.menu.profile.tab"), true);
      });
      vF1316.prototype.a = function () {
        vF1316.parent.prototype.a.call(this);
      };
      vF1316.prototype.Rk = function () {
        vF70.Fk.stop();
        vF70.Fk.fadeOut(50);
        vF70.Gk.stop();
        vF70.Gk.fadeOut(50);
        vF70.Hk.stop();
        vF70.Hk.fadeIn(200);
        vF70.Jk.stop();
        vF70.Jk.fadeOut(50);
        vF70.Ik.stop();
        vF70.Ik.fadeOut(50);
        vF70.Kk.stop();
        vF70.Kk.fadeOut(50);
        vF70.Lk.stop();
        vF70.Lk.fadeOut(50);
        vF70.Mk.stop();
        vF70.Mk.fadeOut(50);
        vF70.Nk.stop();
        vF70.Nk.fadeOut(50);
        vF70.Ok.stop();
        vF70.Ok.fadeOut(50);
      };
      vF1316.prototype.ji = function () {
        var vF520 = f5();
        vF520.r.Dd();
        var v480 = vF520.u.Oi();
        var v481 = moment([v480.year, v480.month - 1, v480.day]).format("LL");
        v$53.html(vF520.u.wi());
        v$52.attr("src", vF520.u.xi());
        v$54.width(vF520.u.Bi() * 100 / vF520.u.Ci() + "%");
        v$55.html(vF520.u.Bi() + " / " + vF520.u.Ci());
        v$56.html(vF520.u.Ai());
        v$57.html(vF520.u.Ii());
        v$58.html(f10(vF520.u.Ji()));
        v$59.html(vF520.u.Ki());
        v$60.html(vF520.u.Li());
        v$61.html(vF520.u.Mi());
        v$62.html(f10(vF520.u.Ni()));
        v$63.html(v481);
      };
      return vF1316;
    }();
    var vF76 = function () {
      var v$64 = $("#settings-music-enabled-switch");
      var v$65 = $("#settings-sfx-enabled-switch");
      var v$66 = $("#settings-show-names-switch");
      var v$67 = $("#popup-logout");
      var v$68 = $("#popup-logout-container");
      var v$69 = $("#popup-delete-account");
      var v$70 = $("#popup-delete-account-container");
      var v$71 = $("#popup-withdraw-consent");
      var vF1317 = f13(vF70, function () {
        vF70.call(this, f8("index.game.popup.menu.settings.tab"), false);
        var vThis21 = this;
        var vF521 = f5();
        v$64.click(function () {
          var v482 = !!v$64.prop("checked");
          f7(vF17.Me, v482, 30);
          vF521.r.td(v482);
          vF521.r.Cd();
        });
        v$65.click(function () {
          var v483 = !!v$65.prop("checked");
          f7(vF17.Ne, v483, 30);
          vF521.r.rd(v483);
          vF521.r.Cd();
        });
        v$66.click(function () {
          vF521.r.Cd();
        });
        v$67.click(function () {
          vF521.r.Cd();
          vThis21.Sk();
          setTimeout(function () {
            vThis21.Qk();
          }, 2000);
          vF521.u.Wi();
        });
        v$69.click(function () {
          if (vF521.u.P()) {
            vF521.r.Cd();
            vF521.s.I(vF521.s.Vh);
          } else {
            vF521.r.Hd();
          }
        });
        v$71.click(function () {
          if (vF521.Y()) {
            vF521.r.Cd();
            vF521.s.I(vF521.s.Uh);
          } else {
            vF521.r.Hd();
          }
        });
      });
      vF1317.prototype.a = function () {
        vF1317.parent.prototype.a.call(this);
        var vF523 = f5();
        var vUndefined23 = undefined;
        switch (f6(vF17.Me)) {
          case "false":
            vUndefined23 = false;
            break;
          default:
            vUndefined23 = true;
        }
        v$64.prop("checked", vUndefined23);
        vF523.r.td(vUndefined23);
        var vUndefined24 = undefined;
        switch (f6(vF17.Ne)) {
          case "false":
            vUndefined24 = false;
            break;
          default:
            vUndefined24 = true;
        }
        v$65.prop("checked", vUndefined24);
        vF523.r.rd(vUndefined24);
        var vUndefined25 = undefined;
        switch (f6(vF17.ya)) {
          case "false":
            vUndefined25 = false;
            break;
          default:
            vUndefined25 = true;
        }
        console.log("Load sPN: " + vUndefined25);
        v$66.prop("checked", vUndefined25);
        vF523.u.V(function () {
          v$68.toggle(vF523.u.P());
          v$70.toggle(vF523.u.P());
        });
      };
      vF1317.prototype.Rk = function () {
        vF70.Fk.stop();
        vF70.Fk.fadeOut(50);
        vF70.Gk.stop();
        vF70.Gk.fadeOut(50);
        vF70.Hk.stop();
        vF70.Hk.fadeOut(50);
        vF70.Jk.stop();
        vF70.Jk.fadeOut(50);
        vF70.Ik.stop();
        vF70.Ik.fadeIn(200);
        vF70.Kk.stop();
        vF70.Kk.fadeOut(50);
        vF70.Lk.stop();
        vF70.Lk.fadeOut(50);
        vF70.Mk.stop();
        vF70.Mk.fadeOut(50);
        vF70.Nk.stop();
        vF70.Nk.fadeOut(50);
        vF70.Ok.stop();
        vF70.Ok.fadeOut(50);
      };
      vF1317.prototype.ji = function () {
        var vF524 = f5();
        vF524.r.Dd();
        if (vF524.Y()) {
          v$71.show();
        } else {
          v$71.hide();
        }
      };
      vF1317.prototype.wa = function () {
        return v$66.prop("checked");
      };
      return vF1317;
    }();
    var vF77 = function () {
      var v$72 = $("#store-view-canv");
      var v$73 = $("#skin-description-text");
      var v$74 = $("#skin-group-description-text");
      var v$75 = $("#store-locked-bar");
      var v$76 = $("#store-locked-bar-text");
      var v$77 = $("#store-buy-button");
      var v$78 = $("#store-item-price");
      var v$79 = $("#store-groups");
      var v$80 = $("#store-view-prev");
      var v$81 = $("#store-view-next");
      var vF1318 = f13(vF70, function () {
        vF70.call(this, f8("index.game.popup.menu.skins.tab"), true);
        var vThis22 = this;
        var vF525 = f5();
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new vF58(v$72);
        v$77.click(function () {
          vF525.r.Cd();
          vThis22.fl();
        });
        v$80.click(function () {
          vF525.r.Cd();
          vThis22.bl.gl();
        });
        v$81.click(function () {
          vF525.r.Cd();
          vThis22.bl.hl();
        });
      });
      vF1318.prototype.a = function () {
        vF1318.parent.prototype.a.call(this);
        var vThis23 = this;
        var vF526 = f5();
        vF526.p.ca(function () {
          var v484 = vF526.p.Ac();
          if (v484 != null) {
            vThis23.cl = [];
            for (var vLN084 = 0; vLN084 < v484.skinGroupArrayDict.length; vLN084++) {
              vThis23.cl.push(new vF78(vThis23, v484.skinGroupArrayDict[vLN084]));
            }
            vThis23.dl = {};
            for (var vLN085 = 0; vLN085 < v484.skinArrayDict.length; vLN085++) {
              var v485 = v484.skinArrayDict[vLN085];
              vThis23.dl[v485.id] = v485;
            }
          }
        });
        this.il(false);
        vF526.t.xh(function () {
          vThis23.il(false);
        });
      };
      vF1318.prototype.Rk = function () {
        vF70.Fk.stop();
        vF70.Fk.fadeOut(50);
        vF70.Gk.stop();
        vF70.Gk.fadeOut(50);
        vF70.Hk.stop();
        vF70.Hk.fadeOut(50);
        vF70.Jk.stop();
        vF70.Jk.fadeOut(50);
        vF70.Ik.stop();
        vF70.Ik.fadeOut(50);
        vF70.Kk.stop();
        vF70.Kk.fadeIn(200);
        vF70.Lk.stop();
        vF70.Lk.fadeOut(50);
        vF70.Mk.stop();
        vF70.Mk.fadeOut(50);
        vF70.Nk.stop();
        vF70.Nk.fadeOut(50);
        vF70.Ok.stop();
        vF70.Ok.fadeOut(50);
      };
      vF1318.prototype.ji = function () {
        f5().r.Dd();
        this.jl();
        this.el.Le(true);
      };
      vF1318.prototype.ei = function () {
        this.el.Le(false);
      };
      vF1318.prototype.Ra = function () {
        this.el.Ra();
      };
      vF1318.prototype.Pa = function (p582, p583) {
        this.el.Pa();
      };
      vF1318.prototype.jl = function () {
        var vThis24 = this;
        var vThis25 = this;
        var vF527 = f5();
        v$79.empty();
        for (var vLN086 = 0; vLN086 < this.cl.length; vLN086++) {
          (function (p584) {
            var v486 = vThis24.cl[p584];
            var v487 = document.createElement("li");
            v$79.append(v487);
            var v$82 = $(v487);
            v$82.html(v486.kl());
            v$82.click(function () {
              vF527.r.Cd();
              vThis25.ll(v486);
            });
            v486.ml = v$82;
          })(vLN086);
        }
        if (this.cl.length > 0) {
          var v488 = vF527.t.ha(vF38.ia);
          for (var vLN086 = 0; vLN086 < this.cl.length; vLN086++) {
            var v489 = this.cl[vLN086];
            for (var v490 = v489.nl.list, vLN087 = 0; vLN087 < v490.length; vLN087++) {
              if (v490[vLN087] == v488) {
                v489.ol = vLN087;
                this.ll(v489);
                return;
              }
            }
          }
          this.ll(this.cl[0]);
        }
      };
      vF1318.prototype.ll = function (p585) {
        if (this.bl != p585) {
          var vF528 = f5();
          this.bl = p585;
          v$79.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          v$74.html("");
          if (p585.nl != null) {
            var v491 = vF528.p.Ac().textDict[p585.nl.description];
            if (v491 != null) {
              v$74.html(f11(f9(v491)));
            }
          }
          this.il(true);
        }
      };
      vF1318.prototype.pl = function () {
        if (this.bl == null) {
          return vF33.Yg();
        } else {
          return this.bl.ql();
        }
      };
      vF1318.prototype.fl = function () {
        var vThis26 = this;
        this.pl().ah(function (p586) {
          vThis26.rl(p586);
        });
      };
      vF1318.prototype.rl = function (p587) {
        var vThis27 = this;
        var vF529 = f5();
        var v492 = this.dl[p587].price;
        if (!(vF529.u.zi() < v492)) {
          this.Sk();
          var v493 = vF529.t.ha(vF38.ia);
          var v494 = vF529.t.ha(vF38.ja);
          var v495 = vF529.t.ha(vF38.ka);
          var v496 = vF529.t.ha(vF38.la);
          var v497 = vF529.t.ha(vF38.ma);
          vF529.u.Ui(p587, vF38.ia, function () {
            vF529.t.Bh(v493, vF38.ia);
            vF529.t.Bh(v494, vF38.ja);
            vF529.t.Bh(v495, vF38.ka);
            vF529.t.Bh(v496, vF38.la);
            vF529.t.Bh(v497, vF38.ma);
            if (vF529.u.Ch(p587, vF38.ia)) {
              vF529.t.Bh(p587, vF38.ia);
            }
            vThis27.Qk();
          });
        }
      };
      vF1318.prototype.il = function (p588) {
        var vF530 = f5();
        this.el.bk(vF530.t.ha(vF38.ja), false, false);
        this.el.ck(vF530.t.ha(vF38.ka), false, false);
        this.el.dk(vF530.t.ha(vF38.la), false, false);
        this.el.ek(vF530.t.ha(vF38.ma), false, false);
        var v498 = this.pl();
        if (v498._g()) {
          var v499 = v498.$g();
          var v500 = this.dl[v499];
          var v501 = false;
          if (vF530.t.Ja(v499, vF38.ia)) {
            v$75.hide();
            v$77.hide();
          } else if (v500 == null || v500.nonbuyable == 1) {
            v501 = true;
            v$75.show();
            v$77.hide();
            v$76.text(f8("index.game.popup.menu.store.locked"));
            if (v500 != null && v500.nonbuyable && v500.nonbuyableCause != null) {
              var v502 = vF530.p.Ac().textDict[v500.nonbuyableCause];
              if (v502 != null) {
                v$76.text(f9(v502));
              }
            }
          } else {
            v$75.hide();
            v$77.show();
            v$78.html(v500.price);
          }
          v$73.html("");
          if (v500 != null && v500.description != null) {
            var v503 = vF530.p.Ac().textDict[v500.description];
            if (v503 != null) {
              v$73.html(f11(f9(v503)));
            }
          }
          StoreSkinID.html(v500.id);
          this.el.ak(v499, true, v501);
          if (p588) {
            vF530.t.Bh(v499, vF38.ia);
          }
        }
      };
      var vF78 = function () {
        function f90(p589, p590) {
          this.sl = p589;
          this.ol = 0;
          this.nl = p590;
        }
        f90.prototype.gl = function () {
          if (--this.ol < 0) {
            this.ol = this.nl.list.length - 1;
          }
          this.sl.il(true);
        };
        f90.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0;
          }
          this.sl.il(true);
        };
        f90.prototype.kl = function () {
          let vF92 = f9(this.nl.name);
          if (this.nl.img) {
            var vLSimgSrc = "<img src=\"";
            vLSimgSrc = vLSimgSrc + SITE_XTHOST + "/images/paths/" + this.nl.img;
            vF92 = vLSimgSrc = vLSimgSrc + "\" height=\"43\" width=\"220\" />";
          }
          return vF92;
        };
        f90.prototype.ql = function () {
          if (this.ol >= this.nl.list.length) {
            return vF33.Yg();
          } else {
            return vF33.Zg(this.nl.list[this.ol]);
          }
        };
        return f90;
      }();
      return vF1318;
    }();
    var vF79 = function () {
      var v$83 = $("#store-go-coins-button");
      var v$84 = $("#store-go-skins-button");
      var v$85 = $("#store-go-wear-button");
      var vF1319 = f13(vF70, function () {
        vF70.call(this, f8("index.game.popup.menu.store.tab"), true);
        var vF531 = f5();
        v$83.click(function () {
          vF531.r.Cd();
          vF531.s.I(vF531.s.Wh);
        });
        v$84.click(function () {
          vF531.r.Cd();
          vF531.s.I(vF531.s.$h);
        });
        v$85.click(function () {
          vF531.r.Cd();
          vF531.s.I(vF531.s.ai);
        });
      });
      vF1319.prototype.a = function () {
        vF1319.parent.prototype.a.call(this);
      };
      vF1319.prototype.Rk = function () {
        vF70.Fk.stop();
        vF70.Fk.fadeOut(50);
        vF70.Gk.stop();
        vF70.Gk.fadeOut(50);
        vF70.Hk.stop();
        vF70.Hk.fadeOut(50);
        vF70.Jk.stop();
        vF70.Jk.fadeOut(50);
        vF70.Ik.stop();
        vF70.Ik.fadeOut(50);
        vF70.Kk.stop();
        vF70.Kk.fadeOut(50);
        vF70.Lk.stop();
        vF70.Lk.fadeIn(200);
        vF70.Mk.stop();
        vF70.Mk.fadeOut(50);
        vF70.Nk.stop();
        vF70.Nk.fadeOut(50);
        vF70.Ok.stop();
        vF70.Ok.fadeOut(50);
      };
      vF1319.prototype.ji = function () {
        f5().r.Dd();
      };
      return vF1319;
    }();
    var vF80 = function () {
      var v$86 = $("#wear-view-canv");
      var v$87 = $("#wear-description-text");
      var v$88 = $("#wear-locked-bar");
      var v$89 = $("#wear-locked-bar-text");
      var v$90 = $("#wear-buy-button");
      var v$91 = $("#wear-item-price");
      var v$92 = $("#wear-eyes-button");
      var v$93 = $("#wear-mouths-button");
      var v$94 = $("#wear-glasses-button");
      var v$95 = $("#wear-hats-button");
      var v$96 = $("#wear-tint-chooser");
      var v$97 = $("#wear-view-prev");
      var v$98 = $("#wear-view-next");
      var vF1320 = f13(vF70, function () {
        var vThis28 = this;
        vF70.call(this, f8("index.game.popup.menu.wear.tab"), true);
        var vF532 = f5();
        var vThis29 = this;
        this.tl = [];
        this.ja = new vF81(this, vF38.ja, v$92);
        this.ka = new vF81(this, vF38.ka, v$93);
        this.la = new vF81(this, vF38.la, v$94);
        this.ma = new vF81(this, vF38.ma, v$95);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new vF58(v$86);
        v$90.click(function () {
          vF532.r.Cd();
          vThis29.Bl();
        });
        v$97.click(function () {
          vF532.r.Cd();
          vThis29.ul.Cl();
        });
        v$98.click(function () {
          vF532.r.Cd();
          vThis29.ul.Dl();
        });
        v$92.click(function () {
          vF532.r.Cd();
          vThis29.El(vThis28.ja);
        });
        v$93.click(function () {
          vF532.r.Cd();
          vThis29.El(vThis28.ka);
        });
        v$94.click(function () {
          vF532.r.Cd();
          vThis29.El(vThis28.la);
        });
        v$95.click(function () {
          vF532.r.Cd();
          vThis29.El(vThis28.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      vF1320.prototype.a = function () {
        vF1320.parent.prototype.a.call(this);
        var vF533 = f5();
        var vThis30 = this;
        vF533.p.ca(function () {
          var v504 = vF533.p.Ac();
          if (v504 != null) {
            vThis30.vl = v504.eyesDict;
            vThis30.wl = v504.mouthDict;
            vThis30.xl = v504.glassesDict;
            vThis30.yl = v504.hatDict;
            vThis30.zl = v504.colorDict;
            vThis30.ja.Fl(v504.eyesVariantArray);
            vThis30.ja.Gl(vThis30.vl);
            vThis30.ka.Fl(v504.mouthVariantArray);
            vThis30.ka.Gl(vThis30.wl);
            vThis30.la.Fl(v504.glassesVariantArray);
            vThis30.la.Gl(vThis30.xl);
            vThis30.ma.Fl(v504.hatVariantArray);
            vThis30.ma.Gl(vThis30.yl);
          }
        });
        this.il(false);
        vF533.t.xh(function () {
          vThis30.il(false);
        });
      };
      vF1320.prototype.Rk = function () {
        vF70.Fk.stop();
        vF70.Fk.fadeOut(50);
        vF70.Gk.stop();
        vF70.Gk.fadeOut(50);
        vF70.Hk.stop();
        vF70.Hk.fadeOut(50);
        vF70.Jk.stop();
        vF70.Jk.fadeOut(50);
        vF70.Ik.stop();
        vF70.Ik.fadeOut(50);
        vF70.Kk.stop();
        vF70.Kk.fadeOut(50);
        vF70.Lk.stop();
        vF70.Lk.fadeOut(50);
        vF70.Mk.stop();
        vF70.Mk.fadeIn(200);
        vF70.Nk.stop();
        vF70.Nk.fadeOut(50);
        vF70.Ok.stop();
        vF70.Ok.fadeOut(50);
      };
      vF1320.prototype.ji = function () {
        f5().r.Dd();
        this.El(this.ul ?? this.ja);
        this.Al.Le(true);
      };
      vF1320.prototype.ei = function () {
        this.Al.Le(false);
      };
      vF1320.prototype.Ra = function () {
        this.Al.Ra();
      };
      vF1320.prototype.Pa = function (p591, p592) {
        this.Al.Pa();
      };
      vF1320.prototype.El = function (p593) {
        this.ul = p593;
        for (var vLN088 = 0; vLN088 < this.tl.length; vLN088++) {
          this.tl[vLN088].Xk.removeClass("pressed");
        }
        this.ul.Xk.addClass("pressed");
        this.ul.ii();
      };
      vF1320.prototype.Hl = function () {
        if (this.ul == null) {
          return vF33.Yg();
        } else {
          return vF33.Zg({
            Lb: this.ul.ql(),
            rc: this.ul.rc
          });
        }
      };
      vF1320.prototype.Bl = function () {
        var vThis31 = this;
        this.Hl().ah(function (p594) {
          vThis31.Ui(p594.Lb, p594.rc);
        });
      };
      vF1320.prototype.Ui = function (p595, p596) {
        var vThis32 = this;
        var vF534 = f5();
        var vUndefined26 = undefined;
        switch (p596) {
          case vF38.ja:
            vUndefined26 = this.vl[p595].price;
            break;
          case vF38.ka:
            vUndefined26 = this.wl[p595].price;
            break;
          case vF38.la:
            vUndefined26 = this.xl[p595].price;
            break;
          case vF38.ma:
            vUndefined26 = this.yl[p595].price;
            break;
          default:
            return;
        }
        if (!(vF534.u.zi() < vUndefined26)) {
          this.Sk();
          var v505 = vF534.t.ha(vF38.ia);
          var v506 = vF534.t.ha(vF38.ja);
          var v507 = vF534.t.ha(vF38.ka);
          var v508 = vF534.t.ha(vF38.la);
          var v509 = vF534.t.ha(vF38.ma);
          vF534.u.Ui(p595, p596, function () {
            vF534.t.Bh(v505, vF38.ia);
            vF534.t.Bh(v506, vF38.ja);
            vF534.t.Bh(v507, vF38.ka);
            vF534.t.Bh(v508, vF38.la);
            vF534.t.Bh(v509, vF38.ma);
            if (vF534.u.Ch(p595, p596)) {
              vF534.t.Bh(p595, p596);
            }
            vThis32.Qk();
          });
        }
      };
      vF1320.prototype.Il = function (p597, p598) {
        switch (p598) {
          case vF38.ja:
            return this.vl[p597];
          case vF38.ka:
            return this.wl[p597];
          case vF38.la:
            return this.xl[p597];
          case vF38.ma:
            return this.yl[p597];
        }
        return null;
      };
      vF1320.prototype.il = function (p599) {
        var vF535 = f5();
        this.Al.ak(vF535.t.ha(vF38.ia), false, false);
        this.Al.bk(vF535.t.ha(vF38.ja), false, false);
        this.Al.ck(vF535.t.ha(vF38.ka), false, false);
        this.Al.dk(vF535.t.ha(vF38.la), false, false);
        this.Al.ek(vF535.t.ha(vF38.ma), false, false);
        var v510 = this.Hl();
        if (v510._g()) {
          var v511 = v510.$g();
          var v512 = this.Il(v511.Lb, v511.rc);
          var v513 = false;
          if (vF535.t.Ja(v511.Lb, v511.rc)) {
            v$88.hide();
            v$90.hide();
          } else if (v512 == null || v512.nonbuyable == 1) {
            v513 = true;
            v$88.show();
            v$90.hide();
            v$89.text(f8("index.game.popup.menu.store.locked"));
            if (v512 != null && v512.nonbuyable && v512.nonbuyableCause != null) {
              var v514 = vF535.p.Ac().textDict[v512.nonbuyableCause];
              if (v514 != null) {
                v$89.text(f9(v514));
              }
            }
          } else {
            v$88.hide();
            v$90.show();
            v$91.html(v512.price);
          }
          v$87.html("");
          if (v512 != null && v512.description != null) {
            var v515 = vF535.p.Ac().textDict[v512.description];
            if (v515 != null) {
              v$87.html(f11(f9(v515)));
            }
          }
          switch (v511.rc) {
            case vF38.ja:
              this.Al.bk(v511.Lb, true, v513);
              break;
            case vF38.ka:
              this.Al.ck(v511.Lb, true, v513);
              break;
            case vF38.la:
              this.Al.dk(v511.Lb, true, v513);
              break;
            case vF38.ma:
              this.Al.ek(v511.Lb, true, v513);
          }
          if (p599) {
            vF535.t.Bh(v511.Lb, v511.rc);
          }
        }
      };
      var vF81 = function () {
        function f91(p600, p601, p602) {
          this.sl = p600;
          this.rc = p601;
          this.Xk = p602;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -10;
          this.Ml = -10;
        }
        f91.prototype.Fl = function (p603) {
          this.Kl = p603;
        };
        f91.prototype.Gl = function (p604) {
          this.Jl = p604;
        };
        f91.prototype.ii = function () {
          var vF536 = f5();
          var v516 = vF536.t.ha(this.rc);
          for (var vLN089 = 0; vLN089 < this.Kl.length; vLN089++) {
            for (var vLN090 = 0; vLN090 < this.Kl[vLN089].length; vLN090++) {
              if (this.Kl[vLN089][vLN090] == v516) {
                this.Nl(vLN089);
                this.Ol(vLN090);
                return;
              }
            }
          }
          this.Nl(0);
          this.Ol(0);
        };
        f91.prototype.Cl = function () {
          var v517 = this.Ll - 1;
          if (v517 < 0) {
            v517 = this.Kl.length - 1;
          }
          this.Nl(v517);
          this.Ol(this.Ml % this.Kl[v517].length);
        };
        f91.prototype.Dl = function () {
          var v518 = this.Ll + 1;
          if (v518 >= this.Kl.length) {
            v518 = 0;
          }
          this.Nl(v518);
          this.Ol(this.Ml % this.Kl[v518].length);
        };
        f91.prototype.Nl = function (p605) {
          var vThis33 = this;
          if (!(p605 < 0) && !(p605 >= this.Kl.length)) {
            this.Ll = p605;
            v$96.empty();
            var v519 = this.Kl[this.Ll];
            if (v519.length > 1) {
              for (var vLN091 = 0; vLN091 < v519.length; vLN091++) {
                (function (p606) {
                  var v520 = v519[p606];
                  var v521 = vThis33.Jl[v520];
                  var v522 = "#" + vThis33.sl.zl[v521.prime];
                  var v$99 = $("<div style=\"border-color:" + v522 + "\"></div>");
                  v$99.click(function () {
                    f5().r.Cd();
                    vThis33.Ol(p606);
                  });
                  v$96.append(v$99);
                })(vLN091);
              }
            }
          }
        };
        f91.prototype.Ol = function (p607) {
          if (!(p607 < 0) && !(p607 >= this.Kl[this.Ll].length)) {
            this.Ml = p607;
            v$96.children().css("background-color", "transparent");
            var v523 = v$96.children(":nth-child(" + (1 + p607) + ")");
            v523.css("background-color", v523.css("border-color"));
            this.sl.il(true);
          }
        };
        f91.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return f91;
      }();
      return vF1320;
    }();
    var vF87 = function () {
      var v$100 = $("#withdraw-consent-yes");
      var v$101 = $("#withdraw-consent-no");
      var vF1321 = f13(vF70, function () {
        vF70.call(this, f8("index.game.popup.menu.consent.tab"), false);
        var vF537 = f5();
        v$100.click(function () {
          vF537.r.Cd();
          if (vF537.Y()) {
            vF537.s.I(vF537.s.F);
            vF537.$(false, true);
            vF537.s.aa._(new vF93());
          } else {
            vF537.s.gi();
          }
        });
        v$101.click(function () {
          vF537.r.Cd();
          vF537.s.gi();
        });
      });
      vF1321.prototype.a = function () {
        vF1321.parent.prototype.a.call(this);
      };
      vF1321.prototype.Rk = function () {
        vF70.Fk.stop();
        vF70.Fk.fadeOut(50);
        vF70.Gk.stop();
        vF70.Gk.fadeOut(50);
        vF70.Hk.stop();
        vF70.Hk.fadeOut(50);
        vF70.Jk.stop();
        vF70.Jk.fadeOut(50);
        vF70.Ik.stop();
        vF70.Ik.fadeOut(50);
        vF70.Kk.stop();
        vF70.Kk.fadeOut(50);
        vF70.Lk.stop();
        vF70.Lk.fadeOut(50);
        vF70.Mk.stop();
        vF70.Mk.fadeOut(50);
        vF70.Nk.stop();
        vF70.Nk.fadeIn(200);
        vF70.Ok.stop();
        vF70.Ok.fadeOut(50);
      };
      vF1321.prototype.ji = function () {
        f5().r.Dd();
      };
      return vF1321;
    }();
    var vF88 = function () {
      var v$102 = $("#delete-account-timer");
      var v$103 = $("#delete-account-yes");
      var v$104 = $("#delete-account-no");
      var vF1322 = f13(vF70, function () {
        vF70.call(this, f8("index.game.popup.menu.delete.tab"), false);
        var vF538 = f5();
        v$103.click(function () {
          vF538.r.Cd();
          if (vF538.u.P()) {
            vF538.u.bj();
            vF538.u.Wi();
          } else {
            vF538.s.gi();
          }
        });
        v$104.click(function () {
          vF538.r.Cd();
          vF538.s.gi();
        });
        this.Pl = [];
      });
      vF1322.prototype.a = function () {
        vF1322.parent.prototype.a.call(this);
      };
      vF1322.prototype.Rk = function () {
        vF70.Fk.stop();
        vF70.Fk.fadeOut(50);
        vF70.Gk.stop();
        vF70.Gk.fadeOut(50);
        vF70.Hk.stop();
        vF70.Hk.fadeOut(50);
        vF70.Jk.stop();
        vF70.Jk.fadeOut(50);
        vF70.Ik.stop();
        vF70.Ik.fadeOut(50);
        vF70.Kk.stop();
        vF70.Kk.fadeOut(50);
        vF70.Lk.stop();
        vF70.Lk.fadeOut(50);
        vF70.Mk.stop();
        vF70.Mk.fadeOut(50);
        vF70.Nk.stop();
        vF70.Nk.fadeOut(50);
        vF70.Ok.stop();
        vF70.Ok.fadeIn(200);
      };
      vF1322.prototype.ji = function () {
        f5().r.Hd();
        v$103.stop();
        v$103.hide();
        v$102.stop();
        v$102.show();
        v$102.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          v$102.text(".. 9 ..");
        }, 1000);
        this.Rl(function () {
          v$102.text(".. 8 ..");
        }, 2000);
        this.Rl(function () {
          v$102.text(".. 7 ..");
        }, 3000);
        this.Rl(function () {
          v$102.text(".. 6 ..");
        }, 4000);
        this.Rl(function () {
          v$102.text(".. 5 ..");
        }, 5000);
        this.Rl(function () {
          v$102.text(".. 4 ..");
        }, 6000);
        this.Rl(function () {
          v$102.text(".. 3 ..");
        }, 7000);
        this.Rl(function () {
          v$102.text(".. 2 ..");
        }, 8000);
        this.Rl(function () {
          v$102.text(".. 1 ..");
        }, 9000);
        this.Rl(function () {
          v$102.hide();
          v$103.fadeIn(300);
        }, 10000);
      };
      vF1322.prototype.Rl = function (p608, p609) {
        var vSetTimeout2 = setTimeout(p608, p609);
        this.Pl.push(vSetTimeout2);
      };
      vF1322.prototype.Ql = function () {
        for (var vLN092 = 0; vLN092 < this.Pl.length; vLN092++) {
          clearTimeout(this.Pl[vLN092]);
        }
        this.Pl = [];
      };
      return vF1322;
    }();
    var vF89 = function () {
      function f92() {
        this.Ck = function () {};
      }
      f92.prototype.Bk = function () {};
      f92.prototype.ji = function () {};
      return f92;
    }();
    var vF90 = function () {
      var vF1323 = f13(vF89, function (p610) {
        vF89.call(this);
        var v524 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v524 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + p610 + "</div>    <div class=\"toaster-coins-close\">" + f8("index.game.toaster.continue") + "</div></div>");
        var vThis34 = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          f5().r.Cd();
          vThis34.Ck();
        });
      });
      vF1323.prototype.Bk = function () {
        return this.Sl;
      };
      vF1323.prototype.ji = function () {
        f5().r.Fd();
      };
      return vF1323;
    }();
    var vF91 = function () {
      var vF1324 = f13(vF89, function (p611) {
        vF89.call(this);
        var v525 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v525 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + p611 + "</div>    <div class=\"toaster-levelup-text\">" + f8("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + f8("index.game.toaster.continue") + "</div></div>");
        var vThis35 = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          f5().r.Cd();
          vThis35.Ck();
        });
      });
      vF1324.prototype.Bk = function () {
        return this.Sl;
      };
      vF1324.prototype.ji = function () {
        f5().r.Ed();
      };
      return vF1324;
    }();
    var vF93 = function () {
      var vF1325 = f13(vF89, function () {
        vF89.call(this);
        var vThis36 = this;
        var vF539 = f5();
        var v526 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v526 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + vLSHttpswormateioimages + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + f8("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + f8("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + f8("index.game.toaster.consent.iAccept") + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          vF539.r.Cd();
          if (vF539.Y()) {
            vF539.$(true, true);
          }
          vThis36.Ck();
        });
      });
      vF1325.prototype.Bk = function () {
        return this.Sl;
      };
      vF1325.prototype.ji = function () {
        var vThis37 = this;
        var vF540 = f5();
        if (vF540.Y() && !vF540.Z()) {
          vF540.r.Hd();
          setTimeout(function () {
            vThis37.Tl.fadeIn(300);
          }, 2000);
        } else {
          setTimeout(function () {
            vThis37.Ck();
          }, 0);
        }
      };
      return vF1325;
    }();
    var vO11 = {};
    vO11.main = {
      Ma: f28("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f28("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f26(),
      e: 4,
      oa: false,
      qk: true
    };
    vO11.miniclip = {
      Ma: f28("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f28("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f26(),
      e: 4,
      oa: false,
      qk: false
    };
    var v527 = vO11[window.ENV];
    v527 ||= vO11.main;
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (p612) {
      p612.preventDefault();
      p612.stopPropagation();
      return false;
    });
    f12("//connect.facebook.net/" + vUndefined + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        appId: "861926850619051",
        cookie: true,
        xfbml: true,
        status: true,
        version: "v8.0"
      });
    });
    f12("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        GoogleAuth = gapi.auth2.init({
          client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
        });
      });
    });
    vUndefined2 = f29();
    vUndefined2.v();
    if (PhoneChecked()) {
      f12(gameSettings.s_l + "/js/joy.min.js", "mobileconfig", function () {
        vF94();
      });
    }
    ;
    let vF94 = function () {
      $("#game-canvas").after("<div id=\"key-container\"><div class=\"key\">Q</div></div>\n        <div id='zoom-container'>\n        \n                                 <input id=\"zoom-slider\" type=\"range\" min=\"10\" max=\"100\" value=\"70\" step=\"1\">\n  <div id=\"zoom-percentage\">50%</div>\n  \n                                         </div>\n               \n                                         \n                                         \n                                         \n                                         ");
    };
    window.addEventListener("keydown", function (p613) {
      console.log("event.keyCode " + p613.keyCode);
      p613 = p613.which || p613.keyCode || 0;
      if (p613 !== 113 && window.keyMove !== p613 || !isPlaying || PilotoAutomatico) {
        clearInterval(PilotoAutomatico);
        PilotoAutomatico = null;
      } else {
        let v528 = theoEvents.eventoPrincipal.sk = 0;
        p613 = window.tuNewScore;
        PilotoAutomatico = setInterval(function () {
          let vParseFloat = parseFloat(theoEvents.eventoPrincipal.sk);
          theoEvents.eventoPrincipal.sk = (vParseFloat >= Math.PI ? -vParseFloat : vParseFloat) + (v528 === 20 ? 0 : Math.PI / 20);
          v528++;
        }, 120 + (p613 >= 100000 ? 5 : p613 >= 10000 ? 10 : 0));
      }
      localStorage.setItem("SaveGameXT", JSON.stringify(gameSettings));
    }, false);
    let vA15 = [{
      nombre: "chuot 01",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_01.cur"
    }, {
      nombre: "chuot 02",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_02.cur"
    }, {
      nombre: "chuot 03",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_03.cur"
    }, {
      nombre: "chuot 04",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_04.cur"
    }, {
      nombre: "chuot 05",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_05.cur"
    }, {
      nombre: "chuot 06",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_06.cur"
    }, {
      nombre: "chuot 07",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_07.cur"
    }, {
      nombre: "chuot 08",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_08.cur"
    }, {
      nombre: "chuot 09",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_09.cur"
    }, {
      nombre: "chuot 10",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_10.cur"
    }, {
      nombre: "chuot 11",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_11.cur"
    }, {
      nombre: "chuot 12",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_12.cur"
    }, {
      nombre: "chuot 13",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_13.cur"
    }, {
      nombre: "chuot 14",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_14.cur"
    }, {
      nombre: "chuot 15",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_15.cur"
    }, {
      nombre: "chuot 16",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_16.cur"
    }, {
      nombre: "chuot 17",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_17.cur"
    }, {
      nombre: "chuot 18",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_18.cur"
    }, {
      nombre: "chuot 19",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_19.cur"
    }, {
      nombre: "chuot 20",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_20.cur"
    }, {
      nombre: "chuot 21",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_21.cur"
    }, {
      nombre: "chuot 22",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_22.cur"
    }, {
      nombre: "chuot 23",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_23.cur"
    }, {
      nombre: "chuot 24",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_24.cur"
    }, {
      nombre: "chuot 25",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_25.cur"
    }, {
      nombre: "chuot 26",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_26.cur"
    }, {
      nombre: "chuot 27",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_27.cur"
    }, {
      nombre: "chuot 28",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_28.cur"
    }, {
      nombre: "chuot 29",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_29.cur"
    }, {
      nombre: "chuot 30",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_30.cur"
    }, {
      nombre: "chuot 31",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_31.cur"
    }, {
      nombre: "chuot 32",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_32.cur"
    }, {
      nombre: "chuot 33",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_33.cur"
    }, {
      nombre: "chuot 34",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_34.cur"
    }, {
      nombre: "chuot 35",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_35.cur"
    }, {
      nombre: "chuot 36",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_36.cur"
    }, {
      nombre: "chuot 37",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_37.cur"
    }, {
      nombre: "chuot 38",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_38.cur"
    }, {
      nombre: "chuot 39",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_39.cur"
    }, {
      nombre: "chuot 40",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_40.cur"
    }, {
      nombre: "chuot 41",
      url: "https://deltav4.gitlab.io/v7/assets/cursors/cursor_41.cur"
    }, {
      nombre: "Cherries_Pointer",
      url: "https://cdn.custom-cursor.com/db/pointer/32/Cherries_Pointer.png"
    }];
    let vA16 = [{
      nombre: "Default",
      url: gameSettings.s_l + "/images/background/default.png"
    }, {
      nombre: "Schwarze Background",
      url: gameSettings.s_l + "/images/background/Schwarze.png"
    }, {
      nombre: "light blue",
      url: gameSettings.s_l + "/images/background/light_blue.png"
    }, {
      nombre: "woman",
      url: gameSettings.s_l + "/images/background/woman.png"
    }, {
      nombre: "Navidad",
      url: gameSettings.s_l + "/images/background/Navidad.png"
    }, {
      nombre: "Mal3ab",
      url: gameSettings.s_l + "/images/background/Mal3ab.png"
    }, {
      nombre: "Galaxy_Star",
      url: gameSettings.s_l + "/images/background/Galaxy_Star.png"
    }, {
      nombre: "Desert",
      url: gameSettings.s_l + "/images/background/Desert.png"
    }, {
      nombre: "Sky 1",
      url: gameSettings.s_l + "/images/background/Sky_1.png"
    }, {
      nombre: "Sky 2",
      url: gameSettings.s_l + "/images/background/Sky_2.png"
    }, {
      nombre: "Sky 3",
      url: gameSettings.s_l + "/images/background/Sky_3.png"
    }, {
      nombre: "Sky 4",
      url: gameSettings.s_l + "/images/background/Sky_4.png"
    }];
    gameSettings.loading = true;
    var vLS4 = "";
    vLS4 += "</div>";
    vLS4 += "</div>";
    vLS4 += "</div>";
    vLS4 += "<div id=\"wormcerca\">";
    vLS4 += "<img class=\"pwrups v0\" style=\"display: none;\" src=\"https://i.imgur.com/M1LFPpp.png\">";
    vLS4 += "<img class=\"pwrups v1\" style=\"display: none;\" src=\"https://i.imgur.com/z162iYa.png\">";
    vLS4 += "<img class=\"pwrups v2\" style=\"display: none;\" src=\"https://i.imgur.com/kXlF32q.png\">";
    vLS4 += "<img class=\"pwrups v3\" style=\"display: none;\" src=\"https://i.imgur.com/kJ6oz7e.png\">";
    vLS4 += "<img class=\"pwrups v4\" style=\"display: none;\" src=\"https://i.imgur.com/l3ds43O.png\">";
    vLS4 += "<img class=\"pwrups v5\" style=\"display: none;\" src=\"https://i.imgur.com/FqA56k6.png\">";
    vLS4 += "<img class=\"pwrups v6\" style=\"display: none;\" src=\"https://i.imgur.com/mSCZeEp.png\">";
    vLS4 += "</div>";
    vLS4 += "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>";
    vLS4 += "\n      \n      \n        \n        \n        <input style=\"display:none\" id=\"zoom-slider\" type=\"range\" min=\"0\" max=\"100\" value=\"50\" step=\"1\">\n        <div style=\"display:none\" class=\"key\">Q</div>\n        <div class=\"worm_2\">\n        <button id=\"settingBtn\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:yellow;font-size: 23px;\"></i></button>\n        \n        <div id=\"settingContent\">\n        \n        \n        <div class=\"container1\">\n                    <span class=\"settings_span\">Spin-Fast: </span>\n                    <input id=\"smoothCamera\" class=\"range\" type=\"range\" min=\"0.3\" max=\"0.6\" value=\"' + gameSettings.smoothCamera + '\" step=\"0.1\" onmousemove=\"smoothCameraValue.value=value\" />\n        </div>         \n        \n        <div class=\"container1\">\n        <span class=\"settings_span\">Power-ups-Size: </span>\n        <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"' + gameSettings.PortionSize + '\" step=\"1\" onmousemove=\"rangevalue1.value=value\" />\n        </div>\n        \n      <div class=\"container1\">\n      <span class=\"settings_span\">Power-ups-Aura: </span>\n      <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"' + gameSettings.PortionAura + '\" step=\"0.2\" onmousemove=\"PortionAuravalue.value=value\" />\n      </div>\n       \n      <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Size: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + gameSettings.FoodSize + '\" step=\"0.5\" onmousemove=\"rangevalue2.value=value\" />\n                    </div>\n                    <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Shadow: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + gameSettings.FoodShadow + '\" step=\"0.5\" onmousemove=\"FoodShadowvalue.value=value\" />\n                    </div>\n    </div>\n    </div>";
    $("#game-view").append(vLS4);
    var vF95 = function (p614) {
      if (gameSettings.PropertyManager) {
        p614.skinId = gameSettings.PropertyManager.rh;
        p614.eyesId = gameSettings.PropertyManager.sh;
        p614.mouthId = gameSettings.PropertyManager.th;
        p614.glassesId = gameSettings.PropertyManager.uh;
        p614.hatId = gameSettings.PropertyManager.vh;
      }
    };
    var vF96 = function () {
      $("#mm-event-text");
      $(".mm-merchant-cont").replaceWith("<div class='youid'><button style=\"float: right;position: relative;min-width: 95px;background:#ff0000;height: 50px;\" onclick=\"navigator.clipboard.writeText('" + gameSettings.FB_UserID + "').then(()=> alert('You ID " + gameSettings.FB_UserID + " copiado! copied!'));\">YOUR ID</button></div>");
      $("#loa831pibur0w4gv").replaceWith("\n           \n           \n           \n           <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n  \n    <div class=\"label\" id=\"titleSetings\">Notification</div>\n    <div class=\"bao-list1\">\n      \n      <input type=\"text\" value=\"" + gameSettings.FB_UserID + "\" style=\"width: 85%;height: 23px;border-radius: 4px;font-size: 12px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\"/>\n      <button style=\"height: 25px;float: right;margin-top: -24px;margin-right: -6px;line-height: 1.2;font-size: 14px;\" onclick=\"navigator.clipboard.writeText('" + gameSettings.FB_UserID + "').then(()=> alert('You ID " + gameSettings.FB_UserID + " copiado! copied!'));\">Copy</button>\n      <center>\n        <div class=\"hg\"><a target=\"_blank\" href=\"https://thanhtoan.vuonghiep.com/\">Activated</a> </div>\n      </center>\n     <i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color:48ff00;\"></i> Instructions for installing on IOS and iPad New 2024: <a style=\"color: #2ae1eb; font-weight: 600;\" href=\"https://www.youtube.com/watch?v=uyHHXWKHgRw\">https://www.youtube.com/watch?v=uyHHXWKHgRw</a> </div>\n      \n    \n</div>");
      var v529 = document.getElementById("settingBtn");
      var v530 = document.getElementById("settingContent");
      function f93() {
        var v531 = window.getComputedStyle(v530);
        var v532 = v531.getPropertyValue("display");
        if (v532 === "none") {
          v530.style.display = "block";
        } else {
          v530.style.display = "none";
        }
      }
      v529.addEventListener("click", f93);
      v529.addEventListener("touchstart", function (p615) {
        p615.preventDefault();
        f93();
      });
      function f94() {
        const v533 = new KeyboardEvent("keydown", {
          key: "q",
          code: "KeyQ",
          keyCode: 81,
          charCode: 0,
          which: 81,
          bubbles: true
        });
        document.dispatchEvent(v533);
      }
      const v534 = document.querySelector(".key");
      v534.addEventListener("click", f94);
      v534.addEventListener("touchstart", p616 => {
        p616.preventDefault();
        f94();
      });
      $("#PortionSize").on("input", function () {
        gameSettings.PortionSize = $(this).val();
        localStorage.PotenciadorSize = gameSettings.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        gameSettings.PortionAura = $(this).val();
        localStorage.PotenciadorAura = gameSettings.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        gameSettings.smoothCamera = $(this).val();
        localStorage.smoothCamera = gameSettings.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        gameSettings.FoodSize = $(this).val();
        localStorage.ComidaSize = gameSettings.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        gameSettings.FoodShadow = $(this).val();
        localStorage.ComidaShadow = gameSettings.FoodShadow;
      });
      $("#mm-advice-cont").html("<div class=\"vietnam\" style=\"display: grid !important; grid-template-columns: 1fr 1fr 1fr 1fr;gap: 8.5px;\">\n            \n            \n    <input type=\"button\" value=\"F.SCREEN\" class=\"fullscreen_button\">\n    \n    \n    <input type=\"button\" value=\"RESPAWN\" id=\"hoisinh\" class=\"fullscreen_respawn\">");
      $(".mm-merchant-cont").html("\n ");
      $(document).ready(function () {
        $(".fullscreen_button").on("click", function () {
          if (document.fullScreenElement && document.fullScreenElement !== null || !document.mozFullScreen && !document.webkitIsFullScreen) {
            if (document.documentElement.requestFullScreen) {
              document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
              document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          } else if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        });
      });
      $("#hoisinh").click(function () {
        let vHoisinhnhanh2 = hoisinhnhanh;
        if (vHoisinhnhanh2) {
          anApp.r.Hd();
          anApp.sa(vHoisinhnhanh2);
        }
      });
      $(".mm-merchant").replaceWith("");
      $(".description-text").replaceWith("\n  <div class=\"description-text\">\n  <div class=\"title-wormate-server\" \n>S E R V E R S</div>\n  <div class=\"description-text-hiep\">\n  <ul class=\"ui-tabs-nav\">\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin: -5px\">\n      <a> <span class=\"flag br\" value=\"https://i.imgur.com/dixYLjk.png\"></span> </a>\n    </li>\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin: -5px\">\n      <a> <span class=\"flag mx\" value=\"https://i.imgur.com/JMAvuFN.png\"></span> </a>\n    </li>\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin: -5px\">\n      <a> <span class=\"flag us\" value=\"https://i.imgur.com/Jb2FF0y.png\"></span> </a>\n    </li>\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin: -5px\">\n      <a> <span class=\"flag ca\" value=\"https://i.imgur.com/m1skEsB.png\"></span> </a>\n    </li>\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin: -5px\">\n      <a> <span class=\"flag de\" value=\"https://i.imgur.com/VgCH8iy.png\"></span> </a>\n    </li>\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin: -5px\">\n      <a> <span class=\"flag fr\" value=\"https://i.imgur.com/QuEjBr0.png\"></span> </a>\n    </li>\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin: -5px\">\n      <a> <span class=\"flag sg\" value=\"https://i.imgur.com/bT3xWqF.png\"></span> </a>\n    </li>\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin: -5px\">\n      <a> <span class=\"flag jp\" value=\"https://i.imgur.com/P2rYk1k.png\"></span> </a>\n    </li>\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin: -5px\">\n      <a> <span class=\"flag au\" value=\"https://i.imgur.com/X0co8Ao.png\"></span> </a>\n    </li>\n    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin: -5px\">\n      <a> <span class=\"flag gb\" value=\"https://i.imgur.com/8pQY6RW.png\"></span> </a>\n    </li>\n  </ul>\n  <div class=\"gachngang\"></div>\n    <div id='mapsv'><div class='tensv'>Name</div><div class='valusv'>Region</div><div class='onlinesv'>On/Off</div><div class='img-teamsv'>Streamer</div></div>\n    \n    <div class=\"gachngang\"></div>\n    <div class=\"servers-container\">\n      <div class=\"servers-peru\"></div>\n      <div class=\"servers-mexico\" style=\"display: none;\"></div>\n      <div class=\"servers-eeuu\" style=\"display: none;\"></div>\n      <div class=\"servers-canada\" style=\"display: none;\"></div>\n      <div class=\"servers-germania\" style=\"display: none;\"></div>\n      <div class=\"servers-francia\" style=\"display: none;\"></div>\n      <div class=\"servers-singapur\" style=\"display: none;\"></div>\n      <div class=\"servers-japon\" style=\"display: none;\"></div>\n      <div class=\"servers-australia\" style=\"display: none;\"></div>\n      <div class=\"servers-granbretana\" style=\"display: none;\"></div>\n    </div>\n  </div>\n            \n             \n                    ");
      $(".ui-tab").on("click", account);
      $(".flag").click(function () {
        let v535 = $(this).attr("value");
        gameSettings.flag = v535;
        ctx.containerImgS.texture = ctx.onclickServer;
        retundFlagError();
        console.log(v535);
      });
      for (a = 0; a < servers.Api_listServer.length; a++) {
        var v536 = servers.Api_listServer[a].serverUrl;
        var v537 = servers.Api_listServer[a].name;
        var v538 = servers.Api_listServer[a].region;
        let v539 = document.createElement("p");
        v539.value = v536;
        v539.innerHTML = v537;
        if (v538 == "peru") {
          $(".servers-peru").prepend(v539);
        } else if (v538 == "mexico") {
          $(".servers-mexico").prepend(v539);
        } else if (v538 == "eeuu") {
          $(".servers-eeuu").prepend(v539);
        } else if (v538 == "canada") {
          $(".servers-canada").prepend(v539);
        } else if (v538 == "germania") {
          $(".servers-germania").prepend(v539);
        } else if (v538 == "francia") {
          $(".servers-francia").prepend(v539);
        } else if (v538 == "singapur") {
          $(".servers-singapur").prepend(v539);
        } else if (v538 == "japon") {
          $(".servers-japon").prepend(v539);
        } else if (v538 == "australia") {
          $(".servers-australia").prepend(v539);
        } else if (v538 == "granbretana") {
          $(".servers-granbretana").prepend(v539);
        }
        $(v539).attr("id", v538);
        $(v539).attr("class", "selectSala");
        $(v539).attr("value", v537);
        $(v539).click(function () {
          let v540 = $(this).find("#svhiep .valu").text().trim();
          ctx.setServer(v540);
          let v541 = $(this).val();
          ctx.containerImgS.texture = ctx.onclickServer;
          retundFlagError();
          window.server_url = v541;
          $("#mm-action-play").click();
          $("#adbl-continue").click();
        });
      }
    };
    var vF97 = function () {
      $("#getskin").on("click", function () {
        for (var vLN093 = 0; vLN093 < clientes.clientesActivos.length; vLN093++) {
          var v542 = clientes.clientesActivos[vLN093].cliente_NOMBRE;
          var v543 = clientes.clientesActivos[vLN093].cliente_ID;
          var v544 = clientes.clientesActivos[vLN093].Client_VisibleSkin;
          var v545 = clientes.clientesActivos[vLN093].Client_VisibleSkin1;
          var v546 = clientes.clientesActivos[vLN093].Client_VisibleSkin2;
          var v547 = clientes.clientesActivos[vLN093].Client_VisibleSkin3;
          var v548 = clientes.clientesActivos[vLN093].Client_VisibleSkin4;
          var v549 = clientes.clientesActivos[vLN093].Client_VisibleSkin5;
          var v550 = clientes.clientesActivos[vLN093].Client_VisibleSkin6;
          var v551 = clientes.clientesActivos[vLN093].Client_VisibleSkin7;
          var v552 = clientes.clientesActivos[vLN093].Client_VisibleSkin8;
          var v553 = clientes.clientesActivos[vLN093].Client_VisibleSkin9;
          var v554 = clientes.clientesActivos[vLN093].Client_VisibleSkin10;
          var v555 = clientes.clientesActivos[vLN093].Client_VisibleSkin11;
          var v556 = clientes.clientesActivos[vLN093].Client_VisibleSkin12;
          var v557 = clientes.clientesActivos[vLN093].Client_VisibleSkin13;
          var v558 = clientes.clientesActivos[vLN093].Client_VisibleSkin14;
          var v559 = clientes.clientesActivos[vLN093].Client_VisibleSkin15;
          var v560 = clientes.clientesActivos[vLN093].Client_VisibleSkin16;
          var v561 = clientes.clientesActivos[vLN093].Client_VisibleSkin17;
          var v562 = clientes.clientesActivos[vLN093].Client_VisibleSkin18;
          var v563 = clientes.clientesActivos[vLN093].Client_VisibleSkin19;
          var v564 = clientes.clientesActivos[vLN093].Client_VisibleSkin20;
          var v565 = clientes.clientesActivos[vLN093].Client_KeyAccecs;
          if (gameSettings.FB_UserID == 0) {} else if (gameSettings.FB_UserID == v543) {
            if (v565 == "XTPRIVATESKIN") {
              for (let vLN094 = 0; vLN094 < gameSettings.idSkin.length; vLN094++) {
                const v566 = gameSettings.idSkin[vLN094];
                if (v566.id == v544 || v566.id == v545 || v566.id == v546 || v566.id == v547 || v566.id == v548 || v566.id == v549 || v566.id == v550 || v566.id == v551 || v566.id == v552 || v566.id == v553 || v566.id == v554 || v566.id == v555 || v566.id == v556 || v566.id == v557 || v566.id == v558 || v566.id == v559 || v566.id == v560 || v566.id == v561 || v566.id == v562 || v566.id == v563 || v566.id == v564) {
                  v566.nonbuyable = false;
                }
              }
            } else {}
          } else {}
        }
      });
    };
    var vF98 = function () {
      gameSettings.adblock = true;
      $(".youid").css("display", "none");
      $("#mm-store").after("\n            \n            <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' rel='stylesheet'/>\n            \n           \n        <div id=\"mm-store\" style=\"float: right;position: relative;min-width: 95px;background:#ff0000\" onclick=\"openPopup()\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:white;font-size: 23px;\"></i>Tool</div>\n        <div id=\"popup\" class=\"popup\">\n        \n        <div class=\"phdr1\"> \n        <button style=\"float: right;background: #00000000;float: right;height: 40px;border: none;font-size: 16px;font-weight: 600;\" onclick=\"navigator.clipboard.writeText('" + gameSettings.FB_UserID + "').then(()=> alert('You ID " + gameSettings.FB_UserID + " copied!'));\">Copy ID</button>\n        \n        \n        </div>\n        <div class=\"close-button\" onclick=\"closePopup()\"></div>\n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\">\n                   <div class=\"layout\">\n      <div class=\"sidebar\">\n          <ul>\n              <li><div class=\"hii\" style=\"background: none; border: none;\" id=\"click-btn\"><i class=\"fas fa-user\"></i> Profile</div></li>\n              <li id=\"toolgame-btn\" class=\"selected\" onclick=\"displayContent('toolgame', this)\">\n            <i class=\"fas fa-cogs\"></i> Tool Game\n        </li>\n        <li id=\"skins-btn\" onclick=\"displayContent('skins', this)\">\n            <i class=\"fas fa-paint-brush\"></i> Skins\n        </li>\n        <li id=\"chuot-btn\" onclick=\"displayContent('chuot', this)\">\n            <i class=\"fas fa-mouse\"></i> Cursor\n        </li>\n        <li id=\"gioithieu-btn\" onclick=\"displayContent('gioithieu', this)\">\n            <i class=\"fas fa-info-circle\"></i> Giới Thiệu\n        </li>\n          </ul>\n      </div>\n\n      <div class=\"main-content\">\n      \n          <div id=\"toolgame\" class=\"content-section\">\n              \n        <!-- Container cho 2 phần tử (hàng 1) -->\n<div class=\"settings-row\">\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fas fa-bolt yellow-icon\"></i> Eat Fast:\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-Abilityzoom-switch\" type=\"checkbox\"/>\n        <label for=\"settings-Abilityzoom-switch\"></label>\n    </div>\n\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n            <i class=\"fas fa-video yellow-icon\"></i> Center Streamer :\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmode-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmode-switch\"></label>\n    </div>\n</div>\n\n<!-- Container cho 2 phần tử (hàng 2) -->\n<div class=\"settings-row\">\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fas fa-trophy yellow-icon\"></i> 3 Top Score :\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodebatop-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodebatop-switch\"></label>\n    </div>\n\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n            <i class=\"fas fa-toggle-off yellow-icon\"></i> Turn Off <img style=\"height: 18px;\" src=\"https://i.imgur.com/cOrk9pM.png\" alt=\"Turn on\"/> :\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodemuiten-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodemuiten-switch\"></label>\n    </div>\n</div>\n\n<!-- Container cho 2 phần tử (hàng 2) -->\n<div class=\"settings-row\">\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fas fa-chart-bar yellow-icon\"></i> Total Kill :\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodesaveheadshot-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodesaveheadshot-switch\"></label>\n    </div>\n\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fas fa-smile yellow-icon\"></i> Off Emoj:\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodeemoj-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodeemoj-switch\"></label>\n    </div>\n</div>\n\n<!-- Container cho 2 phần tử (hàng 2) -->\n<div class=\"settings-row\">\n     <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fas fa-volume-mute yellow-icon\"></i> Off Sounds:\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodeheadshot-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodeheadshot-switch\"></label>\n    </div>\n\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fa fa-eye-slash\"></i> Hide Map\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodeanclock-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodeanclock-switch\"></label>\n    </div>\n</div>\n\n\n<div class=\"settings-row\">\n     <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fas fa-toggle-off yellow-icon\"></i> Off random skins :\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodedangaunhien-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodedangaunhien-switch\"></label>\n    </div>\n\n    <div class=\"settings-lineZoom\">\n        <span class=\"settings-labelZoom\">\n             <i class=\"fa fa-eye-slash\"></i> Updating... !\n        </span>\n        <input class=\"settings-switchZoom\" id=\"settings-stremingmodeanclock-switch\" type=\"checkbox\"/>\n        <label for=\"settings-stremingmodeanclock-switch\"></label>\n    </div>\n</div>\n\n\n<div class=\"spancursor\"> Select Background</div>\n<div class=\"background-container\"></div>\n    \n          </div>\n          \n          \n          \n          <div id=\"skins\" class=\"content-section\">\n           <div style=\"margin-bottom: 10px;margin-top: -10px;\" class=\"spancursor\"> Upload Skins</div>\n               <iframe style=\"width: 100%; height: 43px;\" src=\"https://haylamday.com/api/skins_upload.php\" scrolling=\"no\" frameborder=\"0\"></iframe>\n               \n           <div style=\"margin-top: 20px;margin-bottom: 20px;\" class=\"spancursor\"> Upload Hat</div>\n <iframe style=\"width: 100%; height: 40px;\" src=\"https://haylamday.com/api/hat_upload.php\" scrolling=\"no\" frameborder=\"0\"></iframe>\n \n  <div class=\"spancursor\">NOTE : </div>\n                <ul><li>\n                 Uploading 18+ sex skins is prohibited. ID will be locked if violated.</li>\n                 <li>\n                 Vui lòng không tải lên skin sex 18+. Bị phát hiện sẽ bị khóa. Xin cảm ơn !</li></ul>\n            \n \n          </div>\n          \n         \n          <div id=\"chuot\" class=\"content-section\">\n              <div class=\"spancursor\"> Select Cursor</div>\n        <div class=\"cursor-container\">\n            <div id=\"default-cursor-btn\">\n                <img src=\"https://i.imgur.com/lWpvpbL.png\">\n            </div>\n        </div>\n          </div>\n          <div id=\"gioithieu\" class=\"content-section\">\n              <h2>Giới Thiệu</h2>\n              <p>Đây là nội dung Giới Thiệu.</p>\n          </div>\n      </div>\n  </div>\n\n  <script>\n      function displayContent(sectionId, element) {\n          // Ẩn tất cả các mục nội dung\n          let sections = document.querySelectorAll('.content-section');\n          sections.forEach(section => section.style.display = 'none');\n\n          // Hiển thị mục nội dung tương ứng\n          let activeSection = document.getElementById(sectionId);\n          if (activeSection) {\n              activeSection.style.display = 'block';\n          }\n\n          // Đổi màu mục đã chọn\n          let menuItems = document.querySelectorAll('.sidebar ul li');\n          menuItems.forEach(item => item.classList.remove('selected')); // Loại bỏ class 'selected' khỏi tất cả mục\n          \n          // Thêm class 'selected' cho mục được chọn\n          element.classList.add('selected');\n      }\n\n      // Hiển thị nội dung mặc định khi tải trang\n      window.onload = function() {\n          displayContent('toolgame', document.getElementById('toolgame-btn'));\n      };\n      \n       // Lấy phần tử nút và div\n        const button = document.getElementById(\"click-btn\");\n        const playerInfo = document.getElementById(\"mm-player-info\");\n\n        // Xử lý sự kiện click vào nút\n        button.addEventListener(\"click\", function() {\n            // Mô phỏng click vào div khi nhấn nút\n            playerInfo.click();\n        });\n\n        // Xử lý sự kiện click trực tiếp vào div\n        playerInfo.addEventListener(\"click\", function() {\n            // Tại đây bạn có thể thực hiện hành động khác khi click vào div, ví dụ:\n            console.log(\"Div đã được click!\");\n        });\n\n      \n      \n      \n  </script>\n        <style>\n        .yellow-icon {\n    color: gold;  /* Chỉnh màu vàng */\n}\n        .layout {\n          display: flex;\n          width: 100%;\n          height: 90%;\n      }\n\n      .sidebar {\n          width: 140px;\n          background: #252535;\n          box-shadow: 0px 0px 10px #252535;\n          color: #fff;\n      }\n\n      .sidebar ul {\n          list-style-type: none;\n          padding: 0;\n          margin: 0;\n      }\n\n      .sidebar ul li {\n          padding: 12px;\n          cursor: pointer;\n          border-bottom: 1px solid #ddd;\n          width: 140px;\n      }\n\n      .sidebar ul li:hover {\n          background-color: #666;\n      }\n\n      .sidebar ul li.selected {\n          background-color: #000; /* Màu nền khi mục được chọn */\n          color: white;\n      }\n\n      .main-content {\n          flex-grow: 1;\n          padding: 20px;\n          background: #393e43;\n          color: #fff;\n      }\n\n      .content-section {\n          display: none;\n          transition: display 0.3s ease-in-out;\n      }\n\n      #toolgame {\n          display: block; /* Mặc định hiển thị nội dung Tool Game */\n      }\n\n      h2 {\n          margin-top: 0;\n      }\n\n      /* Thêm hiệu ứng cho hover */\n      .sidebar ul li:hover {\n          background-color: #666;\n      }</style>\n        </div>");
      $("#loa831pibur0w4gv").replaceWith("\n              \n              <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n              <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n              <div class=\"label\" id=\"titleSetings\">Notification</div>\n                \n                 <div class=\"bao-list1\">\n                <div class=\"list1\"><li>\n                 21/02/2025: Updated !</li>\n                </div>\n                <div class=\"list1\"><li>\n                 Uploading 18+ sex skins is prohibited. ID will be locked if violated. Thank you !</li>\n                </div>\n                <div class=\"list1\"><li>\n                 Vui lòng không tải lên skin sex 18+. Bị phát hiện sẽ bị khóa. Xin cảm ơn !</li>\n                </div>\n                \n                   <div class=\"list1\"><li> Instructions for installing on IOS and iPad New 2024: <a href=\"https://www.youtube.com/watch?v=uyHHXWKHgRw\">https://www.youtube.com/watch?v=uyHHXWKHgRw</a></li></div></div>\n              \n                   ");
      $("#mm-coins-box").replaceWith("<div style=\"margin: 0;\" id=\"mm-coins-box\">\n                \n                <button style='width: 140px;height: 45px;float: right;border-radius: 10px;border: solid #fac 2px;display:none' id='getskin'>Unlock Skins</button>\n                </div>\n                </div>");
      window.multiplier = 0.625;
      window.zoomLevel = 5;
      function f95() {
        window.zoomLevel++;
        window.multiplier *= 0.8;
        changedNf();
        f97();
      }
      function f96() {
        if (window.zoomLevel > 0) {
          window.zoomLevel--;
          window.multiplier /= 0.8;
          changedNf();
          f97();
        }
      }
      function f97() {
        var v567 = Math.round(window.multiplier / 0.625 * 100);
        v567 = Math.min(100, v567);
        var v568 = document.getElementById("zoom-percentage");
        v568.textContent = v567 + "%";
      }
      document.getElementById("zoom-slider").addEventListener("input", function (p617) {
        const v569 = p617.target.value;
        const vV569 = v569;
        window.zoomLevel = Math.round(v569 / 10);
        window.multiplier = vV569 / 50 * 0.625;
        changedNf();
        f97();
      });
      window.onwheel = p618 => {
        p618.preventDefault();
        if (p618.deltaY < 0) {
          f95();
        } else {
          f96();
        }
      };
      $("#settings-Abilityzoom-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          gameSettings.eat_animation = 1;
          localStorage.setItem("mySwitch", "on");
        } else {
          console.log("I'm not checked");
          gameSettings.eat_animation = 0.005;
          localStorage.setItem("mySwitch", "off");
        }
      });
      $(document).ready(function () {
        var v570 = localStorage.getItem("mySwitch");
        if (v570 === "on") {
          $("#settings-Abilityzoom-switch").prop("checked", true);
          gameSettings.eat_animation = 1;
        } else {
          $("#settings-Abilityzoom-switch").prop("checked", false);
          gameSettings.eat_animation = 0.005;
        }
      });
      $("#settings-stremingmode-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          gameSettings.ModeStremer = true;
          localStorage.setItem("ModeStremer", "true");
        } else {
          console.log("I'm not checked");
          gameSettings.ModeStremer = false;
          localStorage.setItem("ModeStremer", "false");
        }
      });
      $(document).ready(function () {
        var v571 = localStorage.getItem("ModeStremer");
        if (v571 === "true") {
          gameSettings.ModeStremer = true;
          $("#settings-stremingmode-switch").prop("checked", true);
        } else {
          gameSettings.ModeStremer = false;
          $("#settings-stremingmode-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodebatop-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          gameSettings.ModeStremerbatop = true;
          localStorage.setItem("ModeStremerbatop", "true");
        } else {
          console.log("I'm not checked");
          gameSettings.ModeStremerbatop = false;
          localStorage.setItem("ModeStremerbatop", "false");
        }
      });
      $(document).ready(function () {
        var v572 = localStorage.getItem("ModeStremerbatop");
        if (v572 === "true") {
          gameSettings.ModeStremerbatop = true;
          $("#settings-stremingmodebatop-switch").prop("checked", true);
        } else {
          gameSettings.ModeStremerbatop = false;
          $("#settings-stremingmodebatop-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodedangaunhien-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          gameSettings.ModeStremerdangaunhien = true;
          localStorage.setItem("ModeStremerdangaunhien", "true");
        } else {
          console.log("I'm not checked");
          gameSettings.ModeStremerdangaunhien = false;
          localStorage.setItem("ModeStremerdangaunhien", "false");
        }
      });
      $(document).ready(function () {
        var v573 = localStorage.getItem("ModeStremerdangaunhien");
        if (v573 === "true") {
          gameSettings.ModeStremerdangaunhien = true;
          $("#settings-stremingmodedangaunhien-switch").prop("checked", true);
        } else {
          gameSettings.ModeStremerdangaunhien = false;
          $("#settings-stremingmodedangaunhien-switch").prop("checked", false);
        }
      });
      $(document).ready(function () {
        var v574 = localStorage.getItem("ModeStremeranclock");
        if (v574 === "true") {
          gameSettings.ModeStremeranclock = true;
          $("#settings-stremingmodeanclock-switch").prop("checked", true);
        } else {
          gameSettings.ModeStremeranclock = false;
          $("#settings-stremingmodeanclock-switch").prop("checked", false);
        }
        if (gameSettings.ModeStremeranclock) {
          ctx.clockan.width = 100;
          ctx.clockan.height = 100;
          ctx.clockan.x = -50;
          ctx.clockan.y = -50;
        } else {
          ctx.clockan.width = 0;
          ctx.clockan.height = 0;
          ctx.clockan.x = -50;
          ctx.clockan.y = -50;
        }
      });
      $("#settings-stremingmodeanclock-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          gameSettings.ModeStremeranclock = true;
          localStorage.setItem("ModeStremeranclock", "true");
        } else {
          console.log("I'm not checked");
          gameSettings.ModeStremeranclock = false;
          localStorage.setItem("ModeStremeranclock", "false");
        }
        if (gameSettings.ModeStremeranclock) {
          ctx.clockan.width = 100;
          ctx.clockan.height = 100;
          ctx.clockan.x = -50;
          ctx.clockan.y = -50;
        } else {
          ctx.clockan.width = 0;
          ctx.clockan.height = 0;
          ctx.clockan.x = -50;
          ctx.clockan.y = -50;
        }
      });
      $("#settings-stremingmodemuiten-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          gameSettings.ModeStremermuiten = true;
          localStorage.setItem("ModeStremermuiten", "true");
        } else {
          console.log("I'm not checked");
          gameSettings.ModeStremermuiten = false;
          localStorage.setItem("ModeStremermuiten", "false");
        }
        $("#svhiep").click();
        setTimeout(function () {
          location.reload();
        }, 1000);
      });
      $(document).ready(function () {
        var v575 = localStorage.getItem("ModeStremermuiten");
        if (v575 === "true") {
          gameSettings.ModeStremermuiten = true;
          $("#settings-stremingmodemuiten-switch").prop("checked", true);
        } else {
          gameSettings.ModeStremermuiten = false;
          $("#settings-stremingmodemuiten-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeemoj-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          gameSettings.ModeStremeremoj = true;
          localStorage.setItem("ModeStremeremoj", "true");
        } else {
          console.log("I'm not checked");
          gameSettings.ModeStremeremoj = false;
          localStorage.setItem("ModeStremeremoj", "false");
        }
      });
      $(document).ready(function () {
        var v576 = localStorage.getItem("ModeStremeremoj");
        if (v576 === "true") {
          gameSettings.ModeStremeremoj = true;
          $("#settings-stremingmodeemoj-switch").prop("checked", true);
        } else {
          gameSettings.ModeStremeremoj = false;
          $("#settings-stremingmodeemoj-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          gameSettings.ModeStremerheadshot = true;
          localStorage.setItem("ModeStremerheadshot", "true");
        } else {
          console.log("I'm not checked");
          gameSettings.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function () {
        var v577 = localStorage.getItem("ModeStremerheadshot");
        if (v577 === "true") {
          gameSettings.ModeStremerheadshot = true;
          $("#settings-stremingmodeheadshot-switch").prop("checked", true);
        } else {
          gameSettings.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          gameSettings.ModeStremerheadshot = true;
          localStorage.setItem("ModeStremerheadshot", "true");
        } else {
          console.log("I'm not checked");
          gameSettings.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function () {
        var v578 = localStorage.getItem("ModeStremerheadshot");
        if (v578 === "true") {
          gameSettings.ModeStremerheadshot = true;
          $("#settings-stremingmodeheadshot-switch").prop("checked", true);
        } else {
          gameSettings.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodesaveheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          gameSettings.ModeStremersaveheadshot = true;
          localStorage.setItem("ModeStremersaveheadshot", "true");
        } else {
          console.log("I'm not checked");
          gameSettings.ModeStremersaveheadshot = false;
          localStorage.setItem("ModeStremersaveheadshot", "false");
        }
        location.reload();
      });
      $(document).ready(function () {
        var v579 = localStorage.getItem("ModeStremersaveheadshot");
        if (v579 === "true") {
          gameSettings.ModeStremersaveheadshot = true;
          $("#settings-stremingmodesaveheadshot-switch").prop("checked", true);
        } else {
          gameSettings.ModeStremersaveheadshot = false;
          $("#settings-stremingmodesaveheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-arrowmobile-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          gameSettings.arrow = false;
        } else {
          console.log("I'm not checked");
          gameSettings.arrow = true;
        }
      });
      $("#PortionSize").on("input", function () {
        gameSettings.PortionSize = $(this).val();
        localStorage.PotenciadorSize = gameSettings.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        gameSettings.PortionAura = $(this).val();
        localStorage.PotenciadorAura = gameSettings.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        gameSettings.smoothCamera = $(this).val();
        localStorage.smoothCamera = gameSettings.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        gameSettings.FoodSize = $(this).val();
        localStorage.ComidaSize = gameSettings.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        gameSettings.FoodShadow = $(this).val();
        localStorage.ComidaShadow = gameSettings.FoodShadow;
      });
      for (a = 0; a < vA15.length; a++) {
        var v580 = vA15[a].url;
        var v581 = vA15[a].nombre;
        let v582 = document.createElement("img");
        v582.src = v580;
        $(".cursor-container").prepend(v582);
        $(v582).attr("class", "cursor");
        $(v582).click(function () {
          let v583 = $(this).attr("src");
          localStorage.cursorSeleccionado = v583;
          $("#game-cont").css({
            cursor: "url(" + v583 + "), default"
          });
          $("#game-canvas").css({
            cursor: "url(" + v583 + "), default"
          });
          $("body").css({
            cursor: "url(" + v583 + "), default"
          });
        });
        $("#default-cursor-btn").click(function () {
          delete localStorage.cursorSeleccionado;
          $("#game-cont, #game-canvas, body").css("cursor", "default");
        });
      }
      $("#game-cont").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("#game-canvas").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("body").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      for (a = 0; a < vA16.length; a++) {
        var v584 = vA16[a].url;
        var v585 = vA16[a].nombre;
        let v586 = document.createElement("img");
        v586.src = v584;
        $(".background-container").prepend(v586);
        $(v586).attr("class", "background");
        $(v586).attr("value", v585);
        $(v586).click(function () {
          let v587 = $(this).attr("src");
          let v588 = $(this).attr("value");
          backgroundIMG = v587;
          localStorage.fondoSeleccionado = backgroundIMG;
          alert("You selected the background: " + v588);
          vUndefined2.q.Cf = new vF6._b(vUndefined2.q.fn_o(v587));
        });
      }
      $(".background-container").prepend("");
      vUndefined2.q.Cf = new vF6._b(vUndefined2.q.fn_o(localStorage.fondoSeleccionado));
    };
    var vF99 = function () {
      $(".description-text").replaceWith("<div class=\"description-text\">");
      $(".description-text").prepend("<p id='title'>Wormate Friends</p>");
      $("#title").after("<div id=\"idwormworld\" style=\"text-align: center\"><div class='logo'><img src='https://haylamday.com/images/hiep_img/logo.png'/></div>\n        <input type=\"text\" value=\"" + gameSettings.FB_UserID + "\" style=\"width: 230px;text-align: center;border-radius: 4px;font-size: 20px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\">\n        <button onclick=\"navigator.clipboard.writeText('" + gameSettings.FB_UserID + "').then(()=> alert('You ID " + gameSettings.FB_UserID + " copiado! copied!'));\">COPY</button>\n    </div>\n<div></div>\n<div><input type=\"button\" value=\"ACTIVATE ALL\" target=\"_blank\" onclick=\"window.location.href='" + MYPAGE + "'\" style=\"margin-top: 5px; width: 100%\"></div>");
    };
    function f98() {
      localStorage.setItem("totalKills", gameSettings.totalKills);
      localStorage.setItem("totalHeadshots", gameSettings.totalHeadshots);
    }
    function f99() {
      gameSettings.totalKills = parseInt(localStorage.getItem("totalKills")) || 0;
      gameSettings.totalHeadshots = parseInt(localStorage.getItem("totalHeadshots")) || 0;
    }
    var vF100 = function (p619, p620) {
      let vF101 = function (p621, p622, p623, p624) {
        ctx.setCountGame(p621, p622, p623, p624);
      };
      f99();
      if (p619 === "count") {
        gameSettings.kill = (gameSettings.kill || 0) + (p620 ? 0 : 1);
        gameSettings.headshot = (gameSettings.headshot || 0) + (p620 ? 1 : 0);
        gameSettings.totalKills = gameSettings.totalKills + (p620 ? 0 : 1);
        gameSettings.totalHeadshots = gameSettings.totalHeadshots + (p620 ? 1 : 0);
        f98();
        vF101(gameSettings.kill, gameSettings.headshot, gameSettings.totalKills, gameSettings.totalHeadshots);
      }
      if (p619 === "open") {
        gameSettings.kill = 0;
        gameSettings.headshot = 0;
        $("#contadorKill_12").show();
        vF101(gameSettings.kill, gameSettings.headshot, gameSettings.totalKills, gameSettings.totalHeadshots);
      }
      if (p619 === "closed") {
        pwrups = {};
      }
      if (p619 === "cerrar") {
        gameSettings.kill = 0;
        gameSettings.headshot = 0;
        gameSettings.totalKills = 0;
        gameSettings.totalHeadshots = 0;
        f98();
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
          return (this / 1000000).toFixed(1) + "M🍰";
        } else if (this >= 100000) {
          return (this / 1000).toFixed(0) + "k🍰";
        } else {
          return this.dotFormat();
        }
      };
    }
    setTimeout(function () {
      var vA17 = ["fuck you", "địt", "cái lồn", "chó", "đéo", "lồn", "đéo", "địt", "vãi lồn", "cặc"];
      const v589 = document.getElementById("mm-params-nickname");
      const v590 = v589.value;
      const v591 = v590.indexOf("x");
      if (v591 !== -1) {
        const v592 = v590.substring(0, v591);
        v589.value = v592;
      }
      ;
      $("#mm-action-play").on("click", function () {
        var v593 = $("#mm-params-nickname").val();
        var v594 = vA17.some(function (p625) {
          return v593.toLowerCase().includes(p625.toLowerCase());
        });
        if (v594) {
          $("#mm-params-nickname").val("I Love Việt Nam");
        }
      });
      $(document).ready(function () {
        $("#getskin").click();
      });
      $("#final-share-fb").css("display", "none");
      $("#unl6wj4czdl84o9b").css("display", "none");
      $("#mm-action-guest").css("display", "none");
      $("#mm-menu-cont").css("display", "block");
      $("#mm-bottom-buttons").css("display", "block");
      $("#mm-player-info").css("display", "block");
      $("#relojHelp").css("position", "absolute");
      $("#relojHelp").css("top", "12px");
      $("#relojHelp").css("left", "5px");
      $("#delete-account-view").css("display", "none");
    }, 3000);
    var v_0x569a61 = function f100() {
      requestAnimationFrame(f100);
      f5().Pa();
    };
    v_0x569a61();
    var vF102 = function () {
      var v595 = v$105.width();
      var v596 = v$105.height();
      var v597 = v$106.outerWidth();
      var v598 = v$106.outerHeight();
      var v599 = v$107.outerHeight();
      var v600 = v$108.outerHeight();
      var v601 = Math.min(1, Math.min((v596 - v600 - v599) / v598, v595 / v597));
      var v602 = "translate(-50%, -50%) scale(" + v601 + ")";
      v$106.css({
        "-webkit-transform": v602,
        "-moz-transform": v602,
        "-ms-transform": v602,
        "-o-transform": v602,
        transform: v602
      });
      f5().Ra();
      window.scrollTo(0, 1);
    };
    var v$105 = $("body");
    var v$106 = $("#stretch-box");
    var v$107 = $("#markup-header");
    var v$108 = $("#markup-footer");
    vF102();
    $(window).resize(vF102);
  })();
  window.anApp.p.Bc = function () {
    var v603 = window.anApp.p;
    var vO12 = {};
    $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (p626) {
      vO12 = p626;
      $.ajax({
        url: gameSettings.s_l + "/store",
        method: "GET",
        dataType: "json",
        success: function (p627) {
          gameSettings.visibleSkin = p627.visibleSkin;
          delete p627.visibleSkin;
          for (let v604 in p627) {
            if (v604 !== "propertyList") {
              if (Array.isArray(p627[v604])) {
                p626[v604] = p626[v604].concat(p627[v604]);
              } else {
                p626[v604] = {
                  ...p626[v604],
                  ...p627[v604]
                };
              }
            }
          }
          gameSettings.pL = p627.propertyList;
          gameSettings.idSkin = p627.skinArrayDict;
          v603.Cc(p626);
        },
        error: function (p628, p629, p630) {
          console.error(p630);
          v603.Cc(vO12);
        }
      });
    });
  };
  $("#background-canvas").replaceWith("<canvas id=\"background-canvas\">\n   </canvas>\n   ");
  $("#popup-login-gg").html("<div class=\"settings-line\" id=\"popup-login-gg1\">Login via Google</div>");
  $("#social-buttons").replaceWith("");
  $("#markup-footer").replaceWith("\n    \n \n\n<footer id=\"markup-footer\">\n            <div class=\"lang-menu\"><button class=\"lang-button\">Language ▴</button>\n            <div class=\"lang-list\"><a hreflang=\"en\" href=\"/\">English</a>\n<a hreflang=\"uk\" href=\"/uk/\">Українська</a>\n<a hreflang=\"de\" href=\"/de/\">Deutsch</a>\n<a hreflang=\"fr\" href=\"/fr/\">Français</a>\n<a hreflang=\"es\" href=\"/es/\">Español</a>\n</div></div>\n            \n            <a class=\"link\" hreflang=\"en\" href=\"https://VuongHiep.Com\">© 2025 Wormate Friends Connect</a>\n          <a style=\"font-size: 17px;font-weight: 500;color: #1200ff;\"> Made with <i class='fa fa-heart animated infinite pulse' style='color:red'></i> in Bà Rịa Vũng Tàu !</a>\n            </footer>\n\n        ");
});
if (!sessionStorage.getItem("visited")) {
  sessionStorage.setItem("visited", "true");
  location.reload(true);
}
function openPopup() {
  var v605 = document.getElementById("popup");
  var v606 = document.getElementById("overlay");
  v605.style.display = "block";
  v606.style.display = "block";
}
function closePopup() {
  var v607 = document.getElementById("popup");
  var v608 = document.getElementById("overlay");
  v607.style.display = "none";
  v608.style.display = "none";
}
function account() {
  $(".mx").on("click", function () {
    $(".servers-mexico").fadeIn(500);
    $("#addflag").attr("class", "flag mx");
    $(".ui-tab-inactive1").attr("class", "ui-tab-active ui-tab-inactive1");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".br").on("click", function () {
    $(".servers-mexico").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
    $(".ui-tab-inactive0").attr("class", "ui-tab-active ui-tab-inactive0");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeIn(500);
    $("#addflag").attr("class", "flag br");
  });
  $(".us").on("click", function () {
    $(".servers-eeuu").fadeIn(500);
    $("#addflag").attr("class", "flag us");
    $(".ui-tab-inactive2").attr("class", "ui-tab-active ui-tab-inactive2");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".ca").on("click", function () {
    $(".servers-canada").fadeIn(500);
    $("#addflag").attr("class", "flag ca");
    $(".ui-tab-inactive3").attr("class", "ui-tab-active ui-tab-inactive3");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".de").on("click", function () {
    $(".servers-germania").fadeIn(500);
    $("#addflag").attr("class", "flag de");
    $(".ui-tab-inactive4").attr("class", "ui-tab-active ui-tab-inactive4");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-canada").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".fr").on("click", function () {
    $(".servers-francia").fadeIn(500);
    $("#addflag").attr("class", "flag fr");
    $(".ui-tab-inactive5").attr("class", "ui-tab-active ui-tab-inactive5");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".sg").on("click", function () {
    $(".servers-singapur").fadeIn(500);
    $("#addflag").attr("class", "flag sg");
    $(".ui-tab-inactive6").attr("class", "ui-tab-active ui-tab-inactive6");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".jp").on("click", function () {
    $(".servers-japon").fadeIn(500);
    $("#addflag").attr("class", "flag jp");
    $(".ui-tab-inactive7").attr("class", "ui-tab-active ui-tab-inactive7");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".au").on("click", function () {
    $(".servers-australia").fadeIn(500);
    $("#addflag").attr("class", "flag au");
    $(".ui-tab-inactive8").attr("class", "ui-tab-active ui-tab-inactive8");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".gb").on("click", function () {
    $(".servers-granbretana").fadeIn(500);
    $("#addflag").attr("class", "flag gb");
    $(".ui-tab-inactive9").attr("class", "ui-tab-active ui-tab-inactive9");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
  });
}
getPresedKey = function (p631) {
  var vLS5 = "";
  if (p631.keyCode == 9) {
    vLS5 += "TAB";
  } else if (p631.keyCode == 13) {
    vLS5 += "ENTER";
  } else if (p631.keyCode == 16) {
    vLS5 += "SHIFT";
  } else {
    vLS5 += String.fromCharCode(p631.keyCode);
  }
  return vLS5;
};
getStringKey = function (p632) {
  var vLS6 = "";
  if (p632 == 9) {
    vLS6 += "TAB";
  } else if (p632 == 13) {
    vLS6 += "ENTER";
  } else if (p632 == 16) {
    vLS6 += "SHIFT";
  } else if (p632 == 32) {
    vLS6 += "SPACE";
  } else if (p632 == 27) {
    vLS6 += "ESC";
  } else {
    vLS6 += String.fromCharCode(p632);
  }
  return vLS6;
};
isValidHotkey = function (p633) {
  if (p633.keyCode >= 48 && p633.keyCode <= 57 || p633.keyCode >= 65 && p633.keyCode <= 90 || p633.keyCode == 9 || p633.keyCode == 13 || p633.keyCode == 16 || p633.keyCode == 32 || p633.keyCode == 27) {
    return true;
  } else {
    return false;
  }
};
window.onload = function () {
  var vA18 = [{
    gradient: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><polygon points='50,5 61,35 95,35 67,57 76,91 50,70 24,91 33,57 5,35 39,35' fill='rgba(255, 255, 255, 0.3)'/></svg>\") repeat,linear-gradient(45deg, #32CD32 20%, #FFD700 100%)",
    size: "120px 120px, 100% 100%"
  }, {
    gradient: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect x='30' y='30' width='40' height='40' fill='rgba(255,255,255,0.2)'/></svg>\") repeat,linear-gradient(45deg, #0000FF 20%, #8A2BE2 100%)",
    size: "100px 100px, 100% 100%"
  }, {
    gradient: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><polygon points='50,10 90,50 50,90 10,50' fill='rgba(255,255,255,0.25)'/></svg>\") repeat,linear-gradient(45deg, #0000FF 20%, #8A2BE2 100%)",
    size: "100px 100px, 100% 100%"
  }];
  var v609 = localStorage.getItem("lastSelected");
  var v610 = vA18.map((p634, p635) => p635).filter(p636 => p636 != v609);
  var v611 = v610[Math.floor(Math.random() * v610.length)];
  var v612 = vA18[v611];
  localStorage.setItem("lastSelected", v611);
  var v613 = document.getElementById("game-wrap");
  v613.style.background = v612.gradient;
  v613.style.backgroundSize = v612.size;
};
console.log("Core 2022 THEO Update 2023");
(function () {
  var vSetInterval2 = setInterval(function () {
    try {} catch (e30) {}
  }, 100);
})();
document.addEventListener("keydown", function (p637) {
  if (p637.key === "F12") {
    p637.preventDefault();
  }
  if (p637.ctrlKey && p637.shiftKey && p637.key === "I") {
    p637.preventDefault();
  }
  if (p637.ctrlKey && p637.key === "U") {
    p637.preventDefault();
  }
});
document.addEventListener("contextmenu", function (p638) {
  p638.preventDefault();
});
var link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://game.platenn.store/css/game.css";
document.head.appendChild(link);
(function () {
  var v614 = document.createElement("script");
  v614.textContent = "\n        (function() {\n            var preventDebugging = setInterval(function() {\n                if (window.console) {\n                    console.log = function() {}; \n                    console.debug = function() {}; \n                    console.error = function() {}; \n                    console.info = function() {};  \n                }\n            }, 1000);\n        })();\n    ";
  document.head.appendChild(v614);
})();