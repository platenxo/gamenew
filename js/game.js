(() => {
  var vA2 = [(p6, p7, p8) => {
    'use strict';

    p8.r(p7);
    var vP8 = p8(1);
    var v12 = p8.n(vP8);
    var vP82 = p8(2);
    p6 = p8.hmd(p6);
    function f(p9, p10) {
      if (!(p9 instanceof p10)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function f2(p11, p12) {
      for (var vLN02 = 0; vLN02 < p12.length; vLN02++) {
        var v13 = p12[vLN02];
        v13.enumerable = v13.enumerable || false;
        v13.configurable = true;
        if ("value" in v13) {
          v13.writable = true;
        }
        Object.defineProperty(p11, f21(v13.key), v13);
      }
    }
    function f3(p13, p14, p15) {
      if (p14) {
        f2(p13.prototype, p14);
      }
      if (p15) {
        f2(p13, p15);
      }
      Object.defineProperty(p13, "prototype", {
        writable: false
      });
      return p13;
    }
    function f4(p16) {
      return f7(p16) || f6(p16) || f16(p16) || f5();
    }
    function f5() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function f6(p17) {
      if (typeof Symbol != "undefined" && p17[Symbol.iterator] != null || p17["@@iterator"] != null) {
        return Array.from(p17);
      }
    }
    function f7(p18) {
      if (Array.isArray(p18)) {
        return f17(p18);
      }
    }
    function f8(p19, p20) {
      var v14 = typeof Symbol != "undefined" && p19[Symbol.iterator] || p19["@@iterator"];
      if (!v14) {
        if (Array.isArray(p19) || (v14 = f16(p19)) || p20 && p19 && typeof p19.length == "number") {
          if (v14) {
            p19 = v14;
          }
          var vLN03 = 0;
          var vF92 = function f9() {};
          return {
            s: vF92,
            n: function (p21) {
              function f10() {
                return p21.apply(this, arguments);
              }
              f10.toString = function () {
                return p21.toString();
              };
              return f10;
            }(function () {
              if (vLN03 >= p19.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: p19[vLN03++]
                };
              }
            }),
            e: function f11(p22) {
              throw p22;
            },
            f: vF92
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var v15;
      var v16 = true;
      var v17 = false;
      return {
        s: function f12() {
          v14 = v14.call(p19);
        },
        n: function f13() {
          var v18 = v14.next();
          v16 = v18.done;
          return v18;
        },
        e: function f14(p23) {
          v17 = true;
          v15 = p23;
        },
        f: function f15() {
          try {
            if (!v16 && v14.return != null) {
              v14.return();
            }
          } finally {
            if (v17) {
              throw v15;
            }
          }
        }
      };
    }
    function f16(p24, p25) {
      if (p24) {
        if (typeof p24 == "string") {
          return f17(p24, p25);
        }
        var v19 = {}.toString.call(p24).slice(8, -1);
        if (v19 === "Object" && p24.constructor) {
          v19 = p24.constructor.name;
        }
        if (v19 === "Map" || v19 === "Set") {
          return Array.from(p24);
        } else if (v19 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v19)) {
          return f17(p24, p25);
        } else {
          return undefined;
        }
      }
    }
    function f17(p26, p27) {
      if (p27 == null || p27 > p26.length) {
        p27 = p26.length;
      }
      for (var vLN04 = 0, vArray = Array(p27); vLN04 < p27; vLN04++) {
        vArray[vLN04] = p26[vLN04];
      }
      return vArray;
    }
    function f18(p28, p29) {
      var v20 = Object.keys(p28);
      if (Object.getOwnPropertySymbols) {
        var v21 = Object.getOwnPropertySymbols(p28);
        if (p29) {
          v21 = v21.filter(function (p30) {
            return Object.getOwnPropertyDescriptor(p28, p30).enumerable;
          });
        }
        v20.push.apply(v20, v21);
      }
      return v20;
    }
    function f19(p31) {
      for (var vLN1 = 1; vLN1 < arguments.length; vLN1++) {
        var v22 = arguments[vLN1] ?? {};
        if (vLN1 % 2) {
          f18(Object(v22), true).forEach(function (p32) {
            f20(p31, p32, v22[p32]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(p31, Object.getOwnPropertyDescriptors(v22));
        } else {
          f18(Object(v22)).forEach(function (p33) {
            Object.defineProperty(p31, p33, Object.getOwnPropertyDescriptor(v22, p33));
          });
        }
      }
      return p31;
    }
    function f20(p34, p35, p36) {
      if ((p35 = f21(p35)) in p34) {
        Object.defineProperty(p34, p35, {
          value: p36,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        p34[p35] = p36;
      }
      return p34;
    }
    function f22(p38, p39) {
      if (f39(p38) != "object" || !p38) {
        return p38;
      }
      var v23 = p38[Symbol.toPrimitive];
      if (v23 !== undefined) {
        var v24 = v23.call(p38, p39 || "default");
        if (f39(v24) != "object") {
          return v24;
        }
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (p39 === "string" ? String : Number)(p38);
    }
    function f23() {
      var v25;
      var v26;
      var v27 = typeof Symbol == "function" ? Symbol : {};
      var v28 = v27.iterator || "@@iterator";
      var v29 = v27.toStringTag || "@@toStringTag";
      function f24(p40, p41, p42, p43) {
        var v30 = p41 && p41.prototype instanceof f27 ? p41 : f27;
        var v31 = Object.create(v30.prototype);
        f32(v31, "_invoke", function (p44, p45, p46) {
          var v32;
          var v33;
          var v34;
          var vLN05 = 0;
          var v35 = p46 || [];
          var v36 = false;
          var vO = {
            p: 0,
            n: 0,
            v: v25,
            a: f26,
            f: f26.bind(v25, 4),
            d: function f25(p47, p48) {
              v32 = p47;
              v33 = 0;
              v34 = v25;
              vO.n = p48;
              return vO2;
            }
          };
          function f26(p49, p50) {
            v33 = p49;
            v34 = p50;
            v26 = 0;
            for (; !v36 && vLN05 && !v37 && v26 < v35.length; v26++) {
              var v37;
              var v38 = v35[v26];
              var v39 = vO.p;
              var v40 = v38[2];
              if (p49 > 3) {
                if (v37 = v40 === p50) {
                  v34 = v38[(v33 = v38[4]) ? 5 : (v33 = 3, 3)];
                  v38[4] = v38[5] = v25;
                }
              } else if (v38[0] <= v39) {
                if (v37 = p49 < 2 && v39 < v38[1]) {
                  v33 = 0;
                  vO.v = p50;
                  vO.n = v38[1];
                } else if (v39 < v40 && (v37 = p49 < 3 || v38[0] > p50 || p50 > v40)) {
                  v38[4] = p49;
                  v38[5] = p50;
                  vO.n = v40;
                  v33 = 0;
                }
              }
            }
            if (v37 || p49 > 1) {
              return vO2;
            }
            v36 = true;
            throw p50;
          }
          return function (p51, p52, p53) {
            if (vLN05 > 1) {
              throw TypeError("Generator is already running");
            }
            if (v36 && p52 === 1) {
              f26(p52, p53);
            }
            v33 = p52;
            v34 = p53;
            while ((v26 = v33 < 2 ? v25 : v34) || !v36) {
              if (!v32) {
                if (v33) {
                  if (v33 < 3) {
                    if (v33 > 1) {
                      vO.n = -1;
                    }
                    f26(v33, v34);
                  } else {
                    vO.n = v34;
                  }
                } else {
                  vO.v = v34;
                }
              }
              try {
                vLN05 = 2;
                if (v32) {
                  if (!v33) {
                    p51 = "next";
                  }
                  if (v26 = v32[p51]) {
                    if (!(v26 = v26.call(v32, v34))) {
                      throw TypeError("iterator result is not an object");
                    }
                    if (!v26.done) {
                      return v26;
                    }
                    v34 = v26.value;
                    if (v33 < 2) {
                      v33 = 0;
                    }
                  } else {
                    if (v33 === 1 && (v26 = v32.return)) {
                      v26.call(v32);
                    }
                    if (v33 < 2) {
                      v34 = TypeError("The iterator does not provide a '" + p51 + "' method");
                      v33 = 1;
                    }
                  }
                  v32 = v25;
                } else if ((v26 = (v36 = vO.n < 0) ? v34 : p44.call(p45, vO)) !== vO2) {
                  break;
                }
              } catch (e2) {
                v32 = v25;
                v33 = 1;
                v34 = e2;
              } finally {
                vLN05 = 1;
              }
            }
            return {
              value: v26,
              done: v36
            };
          };
        }(p40, p42, p43), true);
        return v31;
      }
      var vO2 = {};
      function f27() {}
      function f28() {}
      function f29() {}
      v26 = Object.getPrototypeOf;
      var v41 = [][v28] ? v26(v26([][v28]())) : (f32(v26 = {}, v28, function () {
        return this;
      }), v26);
      var v42 = f29.prototype = f27.prototype = Object.create(v41);
      function f30(p54) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(p54, f29);
        } else {
          p54.__proto__ = f29;
          f32(p54, v29, "GeneratorFunction");
        }
        p54.prototype = Object.create(v42);
        return p54;
      }
      f28.prototype = f29;
      f32(v42, "constructor", f29);
      f32(f29, "constructor", f28);
      f28.displayName = "GeneratorFunction";
      f32(f29, v29, "GeneratorFunction");
      f32(v42);
      f32(v42, v29, "Generator");
      f32(v42, v28, function () {
        return this;
      });
      f32(v42, "toString", function () {
        return "[object Generator]";
      });
      return (f23 = function f31() {
        return {
          w: f24,
          m: f30
        };
      })();
    }
    function f32(p55, p56, p57, p58) {
      var v43 = Object.defineProperty;
      try {
        v43({}, "", {});
      } catch (e3) {
        v43 = 0;
      }
      f32 = function f33(p59, p60, p61, p62) {
        function f34(p63, p64) {
          f32(p59, p63, function (p65) {
            return this._invoke(p63, p64, p65);
          });
        }
        if (p60) {
          if (v43) {
            v43(p59, p60, {
              value: p61,
              enumerable: !p62,
              configurable: !p62,
              writable: !p62
            });
          } else {
            p59[p60] = p61;
          }
        } else {
          f34("next", 0);
          f34("throw", 1);
          f34("return", 2);
        }
      };
      f32(p55, p56, p57, p58);
    }
    function f35(p66, p67, p68, p69, p70, p71, p72) {
      try {
        var v44 = p66[p71](p72);
        var v45 = v44.value;
      } catch (e4) {
        p68(e4);
        return;
      }
      if (v44.done) {
        p67(v45);
      } else {
        Promise.resolve(v45).then(p69, p70);
      }
    }
    function f36(p73) {
      return function () {
        var vThis = this;
        var vArguments = arguments;
        return new Promise(function (p74, p75) {
          var v46 = p73.apply(vThis, vArguments);
          function f37(p76) {
            f35(v46, p74, p75, f37, f38, "next", p76);
          }
          function f38(p77) {
            f35(v46, p74, p75, f37, f38, "throw", p77);
          }
          f37(undefined);
        });
      };
    }
    function f39(p78) {
      '@babel/helpers - typeof';

      f39 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p79) {
        return typeof p79;
      } : function (p80) {
        if (p80 && typeof Symbol == "function" && p80.constructor === Symbol && p80 !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof p80;
        }
      };
      return f39(p78);
    }
    var vLN06 = 0;
    window.URLSERV_WORMWORLD = vLN06 ? "http://localhost:3102" : "https://wormworld.io/extension";
    window.URL_CDN = vLN06 ? "http://localhost:3000" : "https://asserts.wormworld.io";
    window.URL_CDN_B = vLN06 ? "localhost:3000" : "asserts.wormworld.io";
    window.URL_CDN_C = vLN06;
    window.URL_CDN_IKIT = "https://ik.imagekit.io/jdfnxk119";
    var v47 = /(.{18})(([AB])([0-9A-Za-z_]{2})([0-9A-Za-z]{3})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2}))/;
    var v48 = true;
    var v49 = true;
    var v50 = false;
    var vLN18 = 18;
    window.backgroundArena = [{
      nome: "Default",
      uri: window.URL_CDN + "/backgrounds/bkgnd0.png"
    }, {
      nome: "Green",
      uri: window.URL_CDN + "/backgrounds/bkgnd8.png"
    }, {
      nome: "Blue",
      uri: window.URL_CDN + "/backgrounds/bkgnd9.png"
    }, {
      nome: "Blue Black",
      uri: window.URL_CDN + "/backgrounds/bkgnd10.png"
    }, {
      nome: "Blue Light",
      uri: window.URL_CDN + "/backgrounds/bkgnd6.png"
    }, {
      nome: "Desert",
      uri: window.URL_CDN + "/backgrounds/bkgnd7.png"
    }, {
      nome: "Textil",
      uri: window.URL_CDN + "/backgrounds/bkgnd11.png"
    }, {
      nome: "Sky Blue",
      uri: window.URL_CDN + "/backgrounds/bg_sky_1.png"
    }, {
      nome: "Sky Purp",
      uri: window.URL_CDN + "/backgrounds/bg_sky_2.png"
    }, {
      nome: "Sky Violet",
      uri: window.URL_CDN + "/backgrounds/bg_sky_3.png"
    }, {
      nome: "Sky Orange",
      uri: window.URL_CDN + "/backgrounds/bg_sky_4.png"
    }, {
      nome: "Sky Write",
      uri: window.URL_CDN + "/backgrounds/bg_sky_5.png"
    }, {
      nome: "Arena 1",
      uri: window.URL_CDN + "/backgrounds/arena01.png",
      w: 1100,
      h: 1100
    }, {
      nome: "Arena 2",
      uri: window.URL_CDN + "/backgrounds/arena02.png",
      w: 1100,
      h: 1100
    }, {
      nome: "Arena 3",
      uri: window.URL_CDN + "/backgrounds/arena03.png",
      w: 1100,
      h: 1100
    }, {
      nome: "Arena 4",
      uri: window.URL_CDN + "/backgrounds/arena04.png",
      w: 1100,
      h: 1100
    }];
    (function (p81) {
      if ((typeof exports === "undefined" ? "undefined" : f39(exports)) === "object" && "object" !== "undefined") {
        p6.exports = p81();
      } else if (typeof define === "function" && p8.amdO) {
        define([], p81);
      } else {
        var v51;
        if (typeof window !== "undefined") {
          v51 = window;
        } else if (typeof p8.g !== "undefined") {
          v51 = p8.g;
        } else if (typeof self !== "undefined") {
          v51 = self;
        } else {
          v51 = this;
        }
        v51.nipplejs = p81();
      }
    })(function () {
      var v52;
      var v53;
      var v54;
      "use strict";
      var v55 = !!("ontouchstart" in window);
      var v56 = window.PointerEvent ? true : false;
      var v57 = window.MSPointerEvent ? true : false;
      var vO3 = {
        touch: {
          start: "touchstart",
          move: "touchmove",
          end: "touchend, touchcancel"
        },
        mouse: {
          start: "mousedown",
          move: "mousemove",
          end: "mouseup"
        },
        pointer: {
          start: "pointerdown",
          move: "pointermove",
          end: "pointerup, pointercancel"
        },
        MSPointer: {
          start: "MSPointerDown",
          move: "MSPointerMove",
          end: "MSPointerUp"
        }
      };
      var v58;
      var vO4 = {};
      if (v56) {
        v58 = vO3.pointer;
      } else if (v57) {
        v58 = vO3.MSPointer;
      } else if (v55) {
        v58 = vO3.touch;
        vO4 = vO3.mouse;
      } else {
        v58 = vO3.mouse;
      }
      var vO5 = {};
      vO5.distance = function (p82, p83) {
        var v59 = p83.x - p82.x;
        var v60 = p83.y - p82.y;
        return Math.sqrt(v59 * v59 + v60 * v60);
      };
      vO5.angle = function (p84, p85) {
        var v61 = p85.x - p84.x;
        var v62 = p85.y - p84.y;
        return vO5.degrees(Math.atan2(v62, v61));
      };
      vO5.findCoord = function (p86, p87, p88) {
        var vO6 = {
          x: 0,
          y: 0
        };
        p88 = vO5.radians(p88);
        vO6.x = p86.x - p87 * Math.cos(p88);
        vO6.y = p86.y - p87 * Math.sin(p88);
        return vO6;
      };
      vO5.radians = function (p89) {
        return p89 * (Math.PI / 180);
      };
      vO5.degrees = function (p90) {
        return p90 * (180 / Math.PI);
      };
      vO5.bindEvt = function (p91, p92, p93) {
        var v63 = p92.split(/[ ,]+/g);
        var v64;
        for (var vLN07 = 0; vLN07 < v63.length; vLN07 += 1) {
          v64 = v63[vLN07];
          if (p91.addEventListener) {
            p91.addEventListener(v64, p93, false);
          } else if (p91.attachEvent) {
            p91.attachEvent(v64, p93);
          }
        }
      };
      vO5.unbindEvt = function (p94, p95, p96) {
        var v65 = p95.split(/[ ,]+/g);
        var v66;
        for (var vLN08 = 0; vLN08 < v65.length; vLN08 += 1) {
          v66 = v65[vLN08];
          if (p94.removeEventListener) {
            p94.removeEventListener(v66, p96);
          } else if (p94.detachEvent) {
            p94.detachEvent(v66, p96);
          }
        }
      };
      vO5.trigger = function (p97, p98, p99) {
        var v67 = new CustomEvent(p98, p99);
        p97.dispatchEvent(v67);
      };
      vO5.prepareEvent = function (p100) {
        p100.preventDefault();
        if (p100.type.match(/^touch/)) {
          return p100.changedTouches;
        } else {
          return p100;
        }
      };
      vO5.getScroll = function () {
        var v68 = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
        var v69 = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        return {
          x: v68,
          y: v69
        };
      };
      vO5.applyPosition = function (p101, p102) {
        if (p102.top || p102.right || p102.bottom || p102.left) {
          p101.style.top = p102.top;
          p101.style.right = p102.right;
          p101.style.bottom = p102.bottom;
          p101.style.left = p102.left;
        } else {
          p101.style.left = p102.x + "px";
          p101.style.top = p102.y + "px";
        }
      };
      vO5.getTransitionStyle = function (p103, p104, p105) {
        var v70 = vO5.configStylePropertyObject(p103);
        for (var v71 in v70) {
          if (v70.hasOwnProperty(v71)) {
            if (typeof p104 === "string") {
              v70[v71] = p104 + " " + p105;
            } else {
              var vLS = "";
              for (var vLN09 = 0, v72 = p104.length; vLN09 < v72; vLN09 += 1) {
                vLS += p104[vLN09] + " " + p105 + ", ";
              }
              v70[v71] = vLS.slice(0, -2);
            }
          }
        }
        return v70;
      };
      vO5.getVendorStyle = function (p106, p107) {
        var v73 = vO5.configStylePropertyObject(p106);
        for (var v74 in v73) {
          if (v73.hasOwnProperty(v74)) {
            v73[v74] = p107;
          }
        }
        return v73;
      };
      vO5.configStylePropertyObject = function (p108) {
        var vO7 = {
          [p108]: ""
        };
        var vA3 = ["webkit", "Moz", "o"];
        vA3.forEach(function (p109) {
          vO7[p109 + p108.charAt(0).toUpperCase() + p108.slice(1)] = "";
        });
        return vO7;
      };
      vO5.extend = function (p110, p111) {
        for (var v75 in p111) {
          if (p111.hasOwnProperty(v75)) {
            p110[v75] = p111[v75];
          }
        }
        return p110;
      };
      vO5.safeExtend = function (p112, p113) {
        var vO8 = {};
        for (var v76 in p112) {
          if (p112.hasOwnProperty(v76) && p113.hasOwnProperty(v76)) {
            vO8[v76] = p113[v76];
          } else if (p112.hasOwnProperty(v76)) {
            vO8[v76] = p112[v76];
          }
        }
        return vO8;
      };
      vO5.map = function (p114, p115) {
        if (p114.length) {
          for (var vLN010 = 0, v77 = p114.length; vLN010 < v77; vLN010 += 1) {
            p115(p114[vLN010]);
          }
        } else {
          p115(p114);
        }
      };
      function f40() {}
      ;
      f40.prototype.on = function (p116, p117) {
        var vThis2 = this;
        var v78 = p116.split(/[ ,]+/g);
        var v79;
        vThis2._handlers_ = vThis2._handlers_ || {};
        for (var vLN011 = 0; vLN011 < v78.length; vLN011 += 1) {
          v79 = v78[vLN011];
          vThis2._handlers_[v79] = vThis2._handlers_[v79] || [];
          vThis2._handlers_[v79].push(p117);
        }
        return vThis2;
      };
      f40.prototype.off = function (p118, p119) {
        var vThis3 = this;
        vThis3._handlers_ = vThis3._handlers_ || {};
        if (p118 === undefined) {
          vThis3._handlers_ = {};
        } else if (p119 === undefined) {
          vThis3._handlers_[p118] = null;
        } else if (vThis3._handlers_[p118] && vThis3._handlers_[p118].indexOf(p119) >= 0) {
          vThis3._handlers_[p118].splice(vThis3._handlers_[p118].indexOf(p119), 1);
        }
        return vThis3;
      };
      f40.prototype.trigger = function (p120, p121) {
        var vThis4 = this;
        var v80 = p120.split(/[ ,]+/g);
        var v81;
        vThis4._handlers_ = vThis4._handlers_ || {};
        for (var vLN012 = 0; vLN012 < v80.length; vLN012 += 1) {
          v81 = v80[vLN012];
          if (vThis4._handlers_[v81] && vThis4._handlers_[v81].length) {
            vThis4._handlers_[v81].forEach(function (p122) {
              p122.call(vThis4, {
                type: v81,
                target: vThis4
              }, p121);
            });
          }
        }
      };
      f40.prototype.config = function (p123) {
        var vThis5 = this;
        vThis5.options = vThis5.defaults || {};
        if (p123) {
          vThis5.options = vO5.safeExtend(vThis5.options, p123);
        }
      };
      f40.prototype.bindEvt = function (p124, p125) {
        var vThis6 = this;
        vThis6._domHandlers_ = vThis6._domHandlers_ || {};
        vThis6._domHandlers_[p125] = function () {
          if (typeof vThis6["on" + p125] === "function") {
            vThis6["on" + p125].apply(vThis6, arguments);
          } else {
            console.warn("[WARNING] : Missing \"on" + p125 + "\" handler.");
          }
        };
        vO5.bindEvt(p124, v58[p125], vThis6._domHandlers_[p125]);
        if (vO4[p125]) {
          vO5.bindEvt(p124, vO4[p125], vThis6._domHandlers_[p125]);
        }
        return vThis6;
      };
      f40.prototype.unbindEvt = function (p126, p127) {
        var vThis7 = this;
        vThis7._domHandlers_ = vThis7._domHandlers_ || {};
        vO5.unbindEvt(p126, v58[p127], vThis7._domHandlers_[p127]);
        if (vO4[p127]) {
          vO5.unbindEvt(p126, vO4[p127], vThis7._domHandlers_[p127]);
        }
        delete vThis7._domHandlers_[p127];
        return this;
      };
      function f41(p128, p129) {
        this.identifier = p129.identifier;
        this.position = p129.position;
        this.frontPosition = p129.frontPosition;
        this.collection = p128;
        this.defaults = {
          size: 100,
          threshold: 0.1,
          color: "white",
          fadeTime: 250,
          dataOnly: false,
          restJoystick: true,
          restOpacity: 0.5,
          mode: "dynamic",
          zone: document.body,
          lockX: false,
          lockY: false,
          dumbBox: null
        };
        this.config(p129);
        if (this.options.mode === "dynamic") {
          this.options.restOpacity = 0;
        }
        this.id = f41.id;
        f41.id += 1;
        this.buildEl().stylize();
        this.instance = {
          el: this.ui.el,
          on: this.on.bind(this),
          off: this.off.bind(this),
          show: this.show.bind(this),
          hide: this.hide.bind(this),
          add: this.addToDom.bind(this),
          remove: this.removeFromDom.bind(this),
          destroy: this.destroy.bind(this),
          resetDirection: this.resetDirection.bind(this),
          computeDirection: this.computeDirection.bind(this),
          trigger: this.trigger.bind(this),
          position: this.position,
          frontPosition: this.frontPosition,
          ui: this.ui,
          identifier: this.identifier,
          id: this.id,
          options: this.options
        };
        return this.instance;
      }
      ;
      f41.prototype = new f40();
      f41.constructor = f41;
      f41.id = 0;
      f41.prototype.buildEl = function (p130) {
        this.ui = {};
        if (this.options.dataOnly) {
          return this;
        }
        this.ui.el = document.createElement("div");
        this.ui.back = document.createElement("div");
        this.ui.front = document.createElement("div");
        this.ui.el.className = "nipple collection_" + this.collection.id;
        this.ui.back.className = "back";
        this.ui.front.className = "front";
        this.ui.el.setAttribute("id", "nipple_" + this.collection.id + "_" + this.id);
        this.ui.el.appendChild(this.ui.back);
        this.ui.el.appendChild(this.ui.front);
        return this;
      };
      f41.prototype.stylize = function () {
        if (this.options.dataOnly) {
          return this;
        }
        var v82 = this.options.fadeTime + "ms";
        var v83 = vO5.getVendorStyle("borderRadius", "50%");
        var v84 = vO5.getTransitionStyle("transition", "opacity", v82);
        var vO9 = {
          el: {
            position: "absolute",
            opacity: this.options.restOpacity,
            display: "block",
            zIndex: 999
          },
          back: {
            position: "absolute",
            display: "block",
            width: this.options.size + "px",
            height: this.options.size + "px",
            marginLeft: -this.options.size / 2 + "px",
            marginTop: -this.options.size / 2 + "px",
            background: this.options.color,
            opacity: ".5"
          },
          front: {
            width: this.options.size / 2 + "px",
            height: this.options.size / 2 + "px",
            position: "absolute",
            display: "block",
            marginLeft: -this.options.size / 4 + "px",
            marginTop: -this.options.size / 4 + "px",
            background: this.options.color,
            opacity: ".5"
          }
        };
        vO5.extend(vO9.el, v84);
        vO5.extend(vO9.back, v83);
        vO5.extend(vO9.front, v83);
        this.applyStyles(vO9);
        return this;
      };
      f41.prototype.applyStyles = function (p131) {
        for (var v85 in this.ui) {
          if (this.ui.hasOwnProperty(v85)) {
            for (var v86 in p131[v85]) {
              this.ui[v85].style[v86] = p131[v85][v86];
            }
          }
        }
        return this;
      };
      f41.prototype.addToDom = function () {
        if (this.options.dataOnly || document.body.contains(this.ui.el)) {
          return this;
        }
        this.options.zone.appendChild(this.ui.el);
        return this;
      };
      f41.prototype.removeFromDom = function () {
        if (this.options.dataOnly || !document.body.contains(this.ui.el)) {
          return this;
        }
        this.options.zone.removeChild(this.ui.el);
        return this;
      };
      f41.prototype.destroy = function () {
        clearTimeout(this.removeTimeout);
        clearTimeout(this.showTimeout);
        clearTimeout(this.restTimeout);
        this.trigger("destroyed", this.instance);
        this.removeFromDom();
        this.off();
      };
      f41.prototype.show = function (p132) {
        var vThis8 = this;
        if (vThis8.options.dataOnly) {
          return vThis8;
        }
        clearTimeout(vThis8.removeTimeout);
        clearTimeout(vThis8.showTimeout);
        clearTimeout(vThis8.restTimeout);
        vThis8.addToDom();
        vThis8.restCallback();
        setTimeout(function () {
          vThis8.ui.el.style.opacity = 1;
        }, 0);
        vThis8.showTimeout = setTimeout(function () {
          vThis8.trigger("shown", vThis8.instance);
          if (typeof p132 === "function") {
            p132.call(this);
          }
        }, vThis8.options.fadeTime);
        return vThis8;
      };
      f41.prototype.hide = function (p133) {
        var vThis9 = this;
        if (vThis9.options.dataOnly) {
          return vThis9;
        }
        vThis9.ui.el.style.opacity = vThis9.options.restOpacity;
        clearTimeout(vThis9.removeTimeout);
        clearTimeout(vThis9.showTimeout);
        clearTimeout(vThis9.restTimeout);
        vThis9.removeTimeout = setTimeout(function () {
          var v87 = vThis9.options.mode === "dynamic" ? "none" : "block";
          vThis9.ui.el.style.display = v87;
          if (typeof p133 === "function") {
            p133.call(vThis9);
          }
          vThis9.trigger("hidden", vThis9.instance);
        }, vThis9.options.fadeTime);
        if (vThis9.options.restJoystick) {
          vThis9.restPosition();
        }
        return vThis9;
      };
      f41.prototype.restPosition = function (p134) {
        var vThis10 = this;
        vThis10.frontPosition = {
          x: 0,
          y: 0
        };
        var v88 = vThis10.options.fadeTime + "ms";
        var vO10 = {};
        vO10.front = vO5.getTransitionStyle("transition", ["top", "left"], v88);
        var vO11 = {
          front: {}
        };
        vO11.front = {
          left: vThis10.frontPosition.x + "px",
          top: vThis10.frontPosition.y + "px"
        };
        vThis10.applyStyles(vO10);
        vThis10.applyStyles(vO11);
        vThis10.restTimeout = setTimeout(function () {
          if (typeof p134 === "function") {
            p134.call(vThis10);
          }
          vThis10.restCallback();
        }, vThis10.options.fadeTime);
      };
      f41.prototype.restCallback = function () {
        var vThis11 = this;
        var vO12 = {};
        vO12.front = vO5.getTransitionStyle("transition", "none", "");
        vThis11.applyStyles(vO12);
        vThis11.trigger("rested", vThis11.instance);
      };
      f41.prototype.resetDirection = function () {
        this.direction = {
          x: false,
          y: false,
          angle: false
        };
      };
      f41.prototype.computeDirection = function (p135) {
        var v89 = p135.angle.radian;
        var v90 = Math.PI / 4;
        var v91 = Math.PI / 2;
        var v92;
        var v93;
        var v94;
        if (v89 > v90 && v89 < v90 * 3 && !p135.lockX) {
          v92 = "up";
        } else if (v89 > -v90 && v89 <= v90 && !p135.lockY) {
          v92 = "left";
        } else if (v89 > -v90 * 3 && v89 <= -v90 && !p135.lockX) {
          v92 = "down";
        } else if (!p135.lockY) {
          v92 = "right";
        }
        if (!p135.lockY) {
          if (v89 > -v91 && v89 < v91) {
            v93 = "left";
          } else {
            v93 = "right";
          }
        }
        if (!p135.lockX) {
          if (v89 > 0) {
            v94 = "up";
          } else {
            v94 = "down";
          }
        }
        if (p135.force > this.options.threshold) {
          var vO13 = {};
          for (var v95 in this.direction) {
            if (this.direction.hasOwnProperty(v95)) {
              vO13[v95] = this.direction[v95];
            }
          }
          var vO14 = {};
          this.direction = {
            x: v93,
            y: v94,
            angle: v92
          };
          p135.direction = this.direction;
          for (var v95 in vO13) {
            if (vO13[v95] === this.direction[v95]) {
              vO14[v95] = true;
            }
          }
          if (vO14.x && vO14.y && vO14.angle) {
            return p135;
          }
          if (!vO14.x || !vO14.y) {
            this.trigger("plain", p135);
          }
          if (!vO14.x) {
            this.trigger("plain:" + v93, p135);
          }
          if (!vO14.y) {
            this.trigger("plain:" + v94, p135);
          }
          if (!vO14.angle) {
            this.trigger("dir dir:" + v92, p135);
          }
        }
        return p135;
      };
      function f42(p136, p137) {
        var vThis12 = this;
        vThis12.nipples = [];
        vThis12.idles = [];
        vThis12.actives = [];
        vThis12.ids = [];
        vThis12.pressureIntervals = {};
        vThis12.manager = p136;
        vThis12.id = f42.id;
        f42.id += 1;
        vThis12.defaults = {
          zone: document.body,
          multitouch: false,
          maxNumberOfNipples: 10,
          mode: "dynamic",
          position: {
            top: 0,
            left: 0
          },
          catchDistance: 200,
          size: 100,
          threshold: 0.1,
          color: "white",
          fadeTime: 250,
          dataOnly: false,
          restJoystick: true,
          restOpacity: 0.5,
          lockX: false,
          lockY: false,
          dumbBox: null
        };
        vThis12.config(p137);
        if (vThis12.options.mode === "static" || vThis12.options.mode === "semi") {
          vThis12.options.multitouch = false;
        }
        if (!vThis12.options.multitouch) {
          vThis12.options.maxNumberOfNipples = 1;
        }
        vThis12.updateBox();
        vThis12.prepareNipples();
        vThis12.bindings();
        vThis12.begin();
        return vThis12.nipples;
      }
      f42.prototype = new f40();
      f42.constructor = f42;
      f42.id = 0;
      f42.prototype.prepareNipples = function () {
        var vThis13 = this;
        var v96 = vThis13.nipples;
        v96.on = vThis13.on.bind(vThis13);
        v96.off = vThis13.off.bind(vThis13);
        v96.options = vThis13.options;
        v96.destroy = vThis13.destroy.bind(vThis13);
        v96.ids = vThis13.ids;
        v96.id = vThis13.id;
        v96.processOnMove = vThis13.processOnMove.bind(vThis13);
        v96.processOnEnd = vThis13.processOnEnd.bind(vThis13);
        v96.get = function (p138) {
          if (p138 === undefined) {
            return v96[0];
          }
          for (var vLN013 = 0, v97 = v96.length; vLN013 < v97; vLN013 += 1) {
            if (v96[vLN013].identifier === p138) {
              return v96[vLN013];
            }
          }
          return false;
        };
      };
      f42.prototype.bindings = function () {
        var vThis14 = this;
        vThis14.bindEvt(vThis14.options.zone, "start");
        vThis14.options.zone.style.touchAction = "none";
        vThis14.options.zone.style.msTouchAction = "none";
      };
      f42.prototype.begin = function () {
        var vThis15 = this;
        var v98 = vThis15.options;
        if (v98.mode === "static") {
          var v99 = vThis15.createNipple(v98.position, vThis15.manager.getIdentifier());
          v99.add();
          vThis15.idles.push(v99);
        }
      };
      f42.prototype.createNipple = function (p139, p140) {
        var vThis16 = this;
        var v100 = vO5.getScroll();
        var vO15 = {};
        var v101 = vThis16.options;
        if (p139.x && p139.y) {
          vO15 = {
            x: p139.x - (v100.x + vThis16.box.left),
            y: p139.y - (v100.y + vThis16.box.top)
          };
        } else if (p139.top || p139.right || p139.bottom || p139.left) {
          var v102 = document.createElement("DIV");
          v102.style.display = "hidden";
          v102.style.top = p139.top;
          v102.style.right = p139.right;
          v102.style.bottom = p139.bottom;
          v102.style.left = p139.left;
          v102.style.position = "absolute";
          v101.zone.appendChild(v102);
          var v103 = v102.getBoundingClientRect();
          v101.zone.removeChild(v102);
          vO15 = p139;
          p139 = {
            x: (v101.dumbBox ? v101.dumbBox.left : v103.left) + v100.x,
            y: (v101.dumbBox ? v101.dumbBox.top : v103.top) + v100.y
          };
        }
        var v104 = new f41(vThis16, {
          color: v101.color,
          size: v101.size,
          threshold: v101.threshold,
          fadeTime: v101.fadeTime,
          dataOnly: v101.dataOnly,
          restJoystick: v101.restJoystick,
          restOpacity: v101.restOpacity,
          mode: v101.mode,
          identifier: p140,
          position: p139,
          zone: v101.zone,
          frontPosition: {
            x: 0,
            y: 0
          }
        });
        if (!v101.dataOnly) {
          vO5.applyPosition(v104.ui.el, vO15);
          vO5.applyPosition(v104.ui.front, v104.frontPosition);
        }
        vThis16.nipples.push(v104);
        vThis16.trigger("added " + v104.identifier + ":added", v104);
        vThis16.manager.trigger("added " + v104.identifier + ":added", v104);
        vThis16.bindNipple(v104);
        return v104;
      };
      f42.prototype.updateBox = function () {
        var vThis17 = this;
        vThis17.box = vThis17.options.zone.getBoundingClientRect();
      };
      f42.prototype.bindNipple = function (p141) {
        var vThis18 = this;
        var v105;
        var vF432 = function f43(p142, p143) {
          v105 = p142.type + " " + p143.id + ":" + p142.type;
          vThis18.trigger(v105, p143);
        };
        p141.on("destroyed", vThis18.onDestroyed.bind(vThis18));
        p141.on("shown hidden rested dir plain", vF432);
        p141.on("dir:up dir:right dir:down dir:left", vF432);
        p141.on("plain:up plain:right plain:down plain:left", vF432);
      };
      f42.prototype.pressureFn = function (p144, p145, p146) {
        var vThis19 = this;
        var vLN014 = 0;
        clearInterval(vThis19.pressureIntervals[p146]);
        vThis19.pressureIntervals[p146] = setInterval(function () {
          var v106 = p144.force || p144.pressure || p144.webkitForce || 0;
          if (v106 !== vLN014) {
            p145.trigger("pressure", v106);
            vThis19.trigger("pressure " + p145.identifier + ":pressure", v106);
            vLN014 = v106;
          }
        }.bind(vThis19), 100);
      };
      f42.prototype.onstart = function (p147) {
        var vThis20 = this;
        var v107 = vThis20.options;
        p147 = vO5.prepareEvent(p147);
        vThis20.updateBox();
        var vF442 = function f44(p148) {
          if (vThis20.actives.length < v107.maxNumberOfNipples) {
            vThis20.processOnStart(p148);
          }
        };
        vO5.map(p147, vF442);
        vThis20.manager.bindDocument();
        return false;
      };
      f42.prototype.processOnStart = function (p149) {
        var vThis21 = this;
        var v108 = vThis21.options;
        var v109;
        var v110 = vThis21.manager.getIdentifier(p149);
        var v111 = p149.force || p149.pressure || p149.webkitForce || 0;
        var vO16 = {
          x: p149.pageX,
          y: p149.pageY
        };
        var v112 = vThis21.getOrCreate(v110, vO16);
        if (v112.identifier !== v110) {
          vThis21.manager.removeIdentifier(v112.identifier);
        }
        v112.identifier = v110;
        var vF452 = function f45(p150) {
          p150.trigger("start", p150);
          vThis21.trigger("start " + p150.id + ":start", p150);
          p150.show();
          if (v111 > 0) {
            vThis21.pressureFn(p149, p150, p150.identifier);
          }
          vThis21.processOnMove(p149);
        };
        if ((v109 = vThis21.idles.indexOf(v112)) >= 0) {
          vThis21.idles.splice(v109, 1);
        }
        vThis21.actives.push(v112);
        vThis21.ids.push(v112.identifier);
        if (v108.mode !== "semi") {
          vF452(v112);
        } else {
          var v113 = vO5.distance(vO16, v112.position);
          if (v113 <= v108.catchDistance) {
            vF452(v112);
          } else {
            v112.destroy();
            vThis21.processOnStart(p149);
            return;
          }
        }
        return v112;
      };
      f42.prototype.getOrCreate = function (p151, p152) {
        var vThis22 = this;
        var v114 = vThis22.options;
        var v115;
        if (/(semi|static)/.test(v114.mode)) {
          v115 = vThis22.idles[0];
          if (v115) {
            vThis22.idles.splice(0, 1);
            return v115;
          }
          if (v114.mode === "semi") {
            return vThis22.createNipple(p152, p151);
          }
          console.warn("Coudln't find the needed nipple.");
          return false;
        }
        v115 = vThis22.createNipple(p152, p151);
        return v115;
      };
      f42.prototype.processOnMove = function (p153) {
        var vThis23 = this;
        var v116 = vThis23.options;
        var v117 = vThis23.manager.getIdentifier(p153);
        var v118 = vThis23.nipples.get(v117);
        if (!v118) {
          console.error("Found zombie joystick with ID " + v117);
          vThis23.manager.removeIdentifier(v117);
          return;
        }
        v118.identifier = v117;
        var v119 = v118.options.size / 2;
        var vO17 = {
          x: p153.pageX,
          y: p153.pageY
        };
        var v120 = vO5.distance(vO17, v118.position);
        var v121 = vO5.angle(vO17, v118.position);
        var v122 = vO5.radians(v121);
        var v123 = v120 / v119;
        if (v120 > v119) {
          v120 = v119;
          vO17 = vO5.findCoord(v118.position, v120, v121);
        }
        var v124 = vO17.x - v118.position.x;
        var v125 = vO17.y - v118.position.y;
        if (v116.lockX) {
          v125 = 0;
        }
        if (v116.lockY) {
          v124 = 0;
        }
        v118.frontPosition = {
          x: v124,
          y: v125
        };
        if (!v116.dataOnly) {
          vO5.applyPosition(v118.ui.front, v118.frontPosition);
        }
        var vO18 = {
          identifier: v118.identifier,
          position: vO17,
          force: v123,
          pressure: p153.force || p153.pressure || p153.webkitForce || 0,
          distance: v120,
          angle: {
            radian: v122,
            degree: v121
          },
          instance: v118,
          lockX: v116.lockX,
          lockY: v116.lockY
        };
        vO18 = v118.computeDirection(vO18);
        vO18.angle = {
          radian: vO5.radians(180 - v121),
          degree: 180 - v121
        };
        v118.trigger("move", vO18);
        vThis23.trigger("move " + v118.id + ":move", vO18);
      };
      f42.prototype.processOnEnd = function (p154) {
        var vThis24 = this;
        var v126 = vThis24.options;
        var v127 = vThis24.manager.getIdentifier(p154);
        var v128 = vThis24.nipples.get(v127);
        var v129 = vThis24.manager.removeIdentifier(v128.identifier);
        if (!v128) {
          return;
        }
        if (!v126.dataOnly) {
          v128.hide(function () {
            if (v126.mode === "dynamic") {
              v128.trigger("removed", v128);
              vThis24.trigger("removed " + v128.id + ":removed", v128);
              vThis24.manager.trigger("removed " + v128.id + ":removed", v128);
              v128.destroy();
            }
          });
        }
        clearInterval(vThis24.pressureIntervals[v128.identifier]);
        v128.resetDirection();
        v128.trigger("end", v128);
        vThis24.trigger("end " + v128.id + ":end", v128);
        if (vThis24.ids.indexOf(v128.identifier) >= 0) {
          vThis24.ids.splice(vThis24.ids.indexOf(v128.identifier), 1);
        }
        if (vThis24.actives.indexOf(v128) >= 0) {
          vThis24.actives.splice(vThis24.actives.indexOf(v128), 1);
        }
        if (/(semi|static)/.test(v126.mode)) {
          vThis24.idles.push(v128);
        } else if (vThis24.nipples.indexOf(v128) >= 0) {
          vThis24.nipples.splice(vThis24.nipples.indexOf(v128), 1);
        }
        vThis24.manager.unbindDocument();
        if (/(semi|static)/.test(v126.mode)) {
          vThis24.manager.ids[v129.id] = v129.identifier;
        }
      };
      f42.prototype.onDestroyed = function (p155, p156) {
        var vThis25 = this;
        if (vThis25.nipples.indexOf(p156) >= 0) {
          vThis25.nipples.splice(vThis25.nipples.indexOf(p156), 1);
        }
        if (vThis25.actives.indexOf(p156) >= 0) {
          vThis25.actives.splice(vThis25.actives.indexOf(p156), 1);
        }
        if (vThis25.idles.indexOf(p156) >= 0) {
          vThis25.idles.splice(vThis25.idles.indexOf(p156), 1);
        }
        if (vThis25.ids.indexOf(p156.identifier) >= 0) {
          vThis25.ids.splice(vThis25.ids.indexOf(p156.identifier), 1);
        }
        vThis25.manager.removeIdentifier(p156.identifier);
        vThis25.manager.unbindDocument();
      };
      f42.prototype.destroy = function () {
        var vThis26 = this;
        vThis26.unbindEvt(vThis26.options.zone, "start");
        vThis26.nipples.forEach(function (p157) {
          p157.destroy();
        });
        for (var v130 in vThis26.pressureIntervals) {
          if (vThis26.pressureIntervals.hasOwnProperty(v130)) {
            clearInterval(vThis26.pressureIntervals[v130]);
          }
        }
        vThis26.trigger("destroyed", vThis26.nipples);
        vThis26.manager.unbindDocument();
        vThis26.off();
      };
      function f46(p158) {
        var vThis27 = this;
        vThis27.ids = {};
        vThis27.index = 0;
        vThis27.collections = [];
        vThis27.config(p158);
        vThis27.prepareCollections();
        var v131;
        vO5.bindEvt(window, "resize", function (p159) {
          clearTimeout(v131);
          v131 = setTimeout(function () {
            var v132;
            var v133 = vO5.getScroll();
            vThis27.collections.forEach(function (p160) {
              p160.forEach(function (p161) {
                v132 = p161.el.getBoundingClientRect();
                p161.position = {
                  x: v133.x + v132.left,
                  y: v133.y + v132.top
                };
              });
            });
          }, 100);
        });
        return vThis27.collections;
      }
      ;
      f46.prototype = new f40();
      f46.constructor = f46;
      f46.prototype.prepareCollections = function () {
        var vThis28 = this;
        vThis28.collections.create = vThis28.create.bind(vThis28);
        vThis28.collections.on = vThis28.on.bind(vThis28);
        vThis28.collections.off = vThis28.off.bind(vThis28);
        vThis28.collections.destroy = vThis28.destroy.bind(vThis28);
        vThis28.collections.get = function (p162) {
          var v134;
          vThis28.collections.every(function (p163) {
            if (v134 = p163.get(p162)) {
              return false;
            }
            return true;
          });
          return v134;
        };
      };
      f46.prototype.create = function (p164) {
        return this.createCollection(p164);
      };
      f46.prototype.createCollection = function (p165) {
        var vThis29 = this;
        var v135 = new f42(vThis29, p165);
        vThis29.bindCollection(v135);
        vThis29.collections.push(v135);
        return v135;
      };
      f46.prototype.bindCollection = function (p166) {
        var vThis30 = this;
        var v136;
        var vF472 = function f47(p167, p168) {
          v136 = p167.type + " " + p168.id + ":" + p167.type;
          vThis30.trigger(v136, p168);
        };
        p166.on("destroyed", vThis30.onDestroyed.bind(vThis30));
        p166.on("shown hidden rested dir plain", vF472);
        p166.on("dir:up dir:right dir:down dir:left", vF472);
        p166.on("plain:up plain:right plain:down plain:left", vF472);
      };
      f46.prototype.bindDocument = function () {
        var vThis31 = this;
        if (!vThis31.binded) {
          vThis31.bindEvt(document, "move").bindEvt(document, "end");
          vThis31.binded = true;
        }
      };
      f46.prototype.unbindDocument = function (p169) {
        var vThis32 = this;
        if (!Object.keys(vThis32.ids).length || p169 === true) {
          vThis32.unbindEvt(document, "move").unbindEvt(document, "end");
          vThis32.binded = false;
        }
      };
      f46.prototype.getIdentifier = function (p170) {
        var v137;
        if (!p170) {
          v137 = this.index;
        } else {
          v137 = p170.identifier === undefined ? p170.pointerId : p170.identifier;
          if (v137 === undefined) {
            v137 = this.latest || 0;
          }
        }
        if (this.ids[v137] === undefined) {
          this.ids[v137] = this.index;
          this.index += 1;
        }
        this.latest = v137;
        return this.ids[v137];
      };
      f46.prototype.removeIdentifier = function (p171) {
        var vO19 = {};
        for (var v138 in this.ids) {
          if (this.ids[v138] === p171) {
            vO19.id = v138;
            vO19.identifier = this.ids[v138];
            delete this.ids[v138];
            break;
          }
        }
        return vO19;
      };
      f46.prototype.onmove = function (p172) {
        var vThis33 = this;
        vThis33.onAny("move", p172);
        return false;
      };
      f46.prototype.onend = function (p173) {
        var vThis34 = this;
        vThis34.onAny("end", p173);
        return false;
      };
      f46.prototype.oncancel = function (p174) {
        var vThis35 = this;
        vThis35.onAny("end", p174);
        return false;
      };
      f46.prototype.onAny = function (p175, p176) {
        var vThis36 = this;
        var v139;
        var v140 = "processOn" + p175.charAt(0).toUpperCase() + p175.slice(1);
        p176 = vO5.prepareEvent(p176);
        var vF482 = function f48(p177, p178, p179) {
          if (p179.ids.indexOf(p178) >= 0) {
            p179[v140](p177);
            p177._found_ = true;
          }
        };
        var vF492 = function f49(p180) {
          v139 = vThis36.getIdentifier(p180);
          vO5.map(vThis36.collections, vF482.bind(null, p180, v139));
          if (!p180._found_) {
            vThis36.removeIdentifier(v139);
          }
        };
        vO5.map(p176, vF492);
        return false;
      };
      f46.prototype.destroy = function () {
        var vThis37 = this;
        vThis37.unbindDocument(true);
        vThis37.ids = {};
        vThis37.index = 0;
        vThis37.collections.forEach(function (p181) {
          p181.destroy();
        });
        vThis37.off();
      };
      f46.prototype.onDestroyed = function (p182, p183) {
        var vThis38 = this;
        if (vThis38.collections.indexOf(p183) < 0) {
          return false;
        }
        vThis38.collections.splice(vThis38.collections.indexOf(p183), 1);
      };
      var v141 = new f46();
      return {
        create: function f50(p184) {
          return v141.create(p184);
        },
        factory: v141
      };
    });
    var v142 = false;
    var v143 = true;
    var vLN2 = 2;
    var v144 = null;
    var vLN12 = 1;
    var vO20 = {};
    var vLN015 = 0;
    window.createLine = function (p185, p186) {
      var v145 = new PIXI.Graphics();
      var vLSff0000 = "#ff0000";
      if (bbs.laserColor && typeof bbs.laserColor === "string") {
        vLSff0000 = parseInt(bbs.laserColor.toString().replace("#", "0x"));
      }
      v145.lineStyle(bbs.laser || 0.2, vLSff0000, 1);
      v145.moveTo(0, 0);
      v145.lineTo(0, 0);
      v145.zIndex = 10001;
      v145.name = "lineHS";
      v145.alpha = 0;
      v145.filters = [new PIXI.filters.BlurFilter(5)];
      p185.addChild(v145);
    };
    window.movimentaLinha = function () {
      try {
        if (!_wwc._anApp.dh.ch.Nm) {
          return;
        }
        var v146 = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS");
        var v147 = _wwc._anApp.dh.ch.Nm.oc;
        var v148 = v147.position.x;
        var v149 = v147.position.y;
        var vLSff00002 = "#ff0000";
        if (bbs.laserColor && typeof bbs.laserColor === "string") {
          vLSff00002 = parseInt(bbs.laserColor.toString().replace("#", "0x"));
        }
        v146.lineStyle(bbs.laser || 0.2, vLSff00002, 1);
        v146.clear();
        v146.lineStyle(bbs.laser || 0.1, vLSff00002, 1);
        v146.moveTo(0, 0);
        v146.lineTo(v148, v149);
        if (bbs.laserActive && _wwc.ismobile) {
          v146.alpha = 0.3;
        }
        v146.filters = [new PIXI.filters.BlurFilter(5)];
      } catch (e5) {
        console.error(e5);
      }
    };
    window.gerarCodigoUnico = function () {
      var v150 = bbs.userId || "";
      var v151 = v150.match(/\d/g);
      var v152 = (v151 || []).reduce(function (p187, p188) {
        return p187 + parseInt(p188, 10);
      }, 0);
      var vLS0123456789ABCDEFGHIJ = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      var vLN5 = 5;
      var vLS2 = "";
      var vLS3 = "";
      for (var vLN016 = 0; vLN016 < vLN5; vLN016++) {
        var v153 = Math.floor(Math.random() * vLS0123456789ABCDEFGHIJ.length);
        vLS2 += vLS0123456789ABCDEFGHIJ.charAt(v153);
        var v154 = Math.floor(Math.random() * vLS0123456789ABCDEFGHIJ.length);
        vLS3 += vLS0123456789ABCDEFGHIJ.charAt(v154);
      }
      return "ROOM" + vLS3 + "_" + v152 + "_" + vLS2;
    };
    var vO21 = {
      sao: "wss://nycsam01.wormworld.io",
      dal: "wss://nycsam01.wormworld.io",
      hil: "wss://nycsam01.wormworld.io",
      vin: "wss://nycsam01.wormworld.io",
      fra: "wss://fraceu01.wormworld.io",
      gra: "wss://fraceu01.wormworld.io",
      dxb: "wss://fraceu01.wormworld.io",
      sin: "wss://fraceu01.wormworld.io",
      tok: "wss://fraceu01.wormworld.io",
      local: "ws://localhost:5001"
    };
    var vO22 = {
      fra: [30055, 31770, 30106, 30339, 30106],
      gra: [32054, 31038],
      sin: [31764, 30165, 30703, 31211, 31026, 32677, 31211, 31203],
      tok: [30171, 31091],
      sao: [30208, 31770, 31533, 30208, 30327, 30786, 32609],
      hil: [30162, 30042, 32403, 30296],
      dal: [31091, 31230, 32584, 31750],
      dxb: [32703, 31975, 32650],
      vin: [32368]
    };
    var vA4 = ["sao", "dal", "hil", "vin", "fra", "gra", "sin", "tok", "dxb"];
    var vO23 = {
      loaded: false,
      sprites: {},
      textures: {},
      resources: {}
    };
    $("#mm-params-nickname").attr("maxlength", vLN18);
    var vO24 = {
      ref: [],
      hs: {},
      fxdo: function f51(p189) {
        if (bbs.activeSounds2 && bbs.start) {
          if (!vO24[p189].playing()) {
            vO24[p189].play();
          }
        }
      },
      fxAux: function f52(p190, p191) {
        if (p191 === 1 && !vO24.fxStatus.top1) {
          vO24.fxStatus.top1 = true;
          vO24.fxdo("top1");
        }
        return p190;
      },
      fxStatus: {
        top1: false
      }
    };
    window._wwcio = {
      message: null,
      obj: {},
      player: {},
      socket: false,
      connecting: false,
      join: function f53() {},
      update: function f54() {},
      leave: function f55() {},
      leaderboardUpdated: function f56(p192, p193) {
        vF96(p192, p193);
      },
      sendLocation: function f57() {},
      findFriend: function f58() {},
      close: function f59() {},
      set: function f60(p194) {
        return p194;
      },
      friend: null,
      myLocation: {},
      crown: null
    };
    window._wwc = {
      deadPositionMap: function f61() {
        var v155 = new PIXI.Text("X", _wwc.fontStyleMap());
        v155.position.x = _wwc.memory.positionOfDead.x;
        v155.position.y = _wwc.memory.positionOfDead.y;
        _wwc._anApp.og.af.ng.Tg.addChild(v155);
        var vLN017 = 0;
        var vSetInterval = setInterval(function () {
          vLN017 = !vLN017;
          v155.alpha = vLN017;
        }, 500);
        var vSetTimeout = setTimeout(function () {
          clearInterval(vSetInterval);
          if (!_wwc._anApp.og.af.ng.Tg) {
            return;
          }
          _wwc._anApp.og.af.ng.Tg.removeChild(v155);
          v155.destroy();
        }, 60000);
        _wwc.removeDeadPositionMap = function () {
          clearInterval(vSetInterval);
          clearTimeout(vSetTimeout);
          if (!_wwc._anApp.og.af.ng.Tg) {
            return;
          }
          _wwc._anApp.og.af.ng.Tg.removeChild(v155);
          if (v155 && v155.destroy) {
            v155.destroy();
          }
        };
      },
      fontStyleMap: function f62(p195) {
        return {
          fontFamily: "Arial",
          fontSize: "12px",
          fill: "red",
          align: "center",
          fontWeight: "bold"
        };
      },
      startGame: function f63() {
        if (_wwc.memory.positionOfDead) {
          var v156 = _wwc.deadPositionMap();
        }
      },
      stopGame: function f64() {
        var v157;
        var v158;
        _wwcio.close();
        _wwcio.findFriendActived = false;
        if (!_wwcio.myLocation) {
          return;
        }
        _wwc.memory.positionOfDead = {
          x: (v157 = _wwcio.myLocation) === null || v157 === undefined || (v157 = v157.position) === null || v157 === undefined ? undefined : v157.x,
          y: (v158 = _wwcio.myLocation) === null || v158 === undefined || (v158 = v158.position) === null || v158 === undefined ? undefined : v158.y
        };
        if (_wwc.removeDeadPositionMap) {
          _wwc.removeDeadPositionMap();
        }
      },
      memory: {},
      mySkin: null,
      customPaths: {
        map: null
      },
      _ass_type: [],
      testSkinMod: function f65(p196) {
        var v159 = typeof p196 === "string";
        p196 = parseInt(p196);
        if (v159 && isNaN(p196)) {
          return false;
        } else {
          return parseInt(p196) >= 399 && parseInt(p196) < 8999;
        }
      },
      testWear: function f66(p197) {
        var v160 = typeof p197 === "string";
        p197 = parseInt(p197);
        if (v160 && isNaN(p197)) {
          return false;
        } else {
          return parseInt(p197) >= 399 && parseInt(p197) < 8999;
        }
      },
      isNumberValid: function f67(p198) {
        return p198 !== "" && p198 !== null && p198 !== undefined && !isNaN(p198);
      },
      validInputWear: function f68(p199) {
        var v161 = _wwc.testWear(p199);
        var v162 = typeof skinId === "string";
        if (!v161 && !v162) {
          return p199;
        }
        return 0;
      },
      validInput: function f69(p200) {
        var v163 = _wwc.testSkinMod(p200);
        var v164 = typeof p200 === "string";
        if (!v163 && !v164) {
          return p200;
        }
        try {
          var v165 = $("#inputReplaceSkin").val();
          return encodeURI(_wwc.isNumberValid(v165) ? v165 : bbs.idReplaceSkin || 35);
        } catch (e6) {
          return encodeURI(35);
        }
      },
      fullscreen: null,
      joystick: function f70(p201) {
        var vO25 = {
          checked: true,
          color: "red",
          mode: "dynamic",
          positionMode: "L",
          size: 100,
          pxy: 100
        };
        return vO25;
      },
      load_con: function f71() {
        $(".selecionar-sala-v2").click(function (p202) {
          p202.preventDefault();
          var v166 = $(this).attr("data-con") || bbs.con;
          var v167 = $(this).attr("data-type");
          w2c2020.addRoom($(this).attr("data-room"));
          vO30.dh.Zp = function (p203, p204, p205) {
            bbs.con = p205 ? p203 : v166 || p203;
            _wwc.Zp(bbs.con, p204);
          };
          vO30.Pn();
        });
      },
      fnSaveGame: function f72() {
        var v$ = $("#saveGame");
        v$.prop("checked", bbs.saveGame);
        v$.change(function () {
          if (!this.checked) {
            var vConfirm = confirm("PORTUGUES:\nAtenÃ§Ã£o: os registros seram apagados; Confirma?\n\nEnglish:\nAttention: the records will be deleted; Confirm?\n\nArabic:\nØªÙ†Ø¨ÙŠÙ‡: Ø³ÙŠØªÙ… Ø­Ø°Ù� Ø§Ù„Ø³Ø¬Ù„Ø§Øª Ø› ØªØ¤ÙƒØ¯ØŸ");
            $(this).prop("checked", !vConfirm);
            if (!this.checked) {
              _wwc.fnSetCounts("zerar");
            }
          }
          bbs.saveGame = this.checked;
          w2c2020.hsTotal.alpha = this.checked ? 1 : 0;
          w2c2020.killTotal.alpha = this.checked ? 1 : 0;
          localStorage.setItem("wwcSaveGame", this.checked ? JSON.stringify(bbs) : null);
        });
      },
      fnSetCounts: function f73(p206, p207) {
        var vF74 = function f74(p208, p209, p210, p211) {
          _wwc.setCountGame(p208, p209, p210, p211);
        };
        if (p206 === "count") {
          bbs.kill = (bbs.kill || 0) + (p207 ? 0 : 1);
          bbs.headshot = (bbs.headshot || 0) + (p207 ? 1 : 0);
          bbs.HOL = bbs.headshot > bbs.HOL ? bbs.headshot : bbs.HOL;
          bbs.tkill = bbs.tkill + (p207 ? 0 : 1);
          bbs.theadshot = bbs.theadshot + (p207 ? 1 : 0);
        }
        if (p206 === "open") {
          bbs.kill = 0;
          bbs.headshot = 0;
          if (bbs.saveGame) {}
        }
        if (p206 === "close") {
          if (bbs.saveGame) {
            bbs.died = (bbs.died || 0) + 1;
          } else {
            _wwc.fnSetCounts("zerar");
          }
        }
        if (p206 === "zerar") {
          bbs.kill = 0;
          bbs.tkill = 0;
          bbs.headshot = 0;
          bbs.theadshot = 0;
          bbs.died = 0;
        }
        vF74(bbs.kill, bbs.headshot, bbs.tkill, bbs.theadshot);
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
      },
      setCountGame: function f75(p212, p213, p214, p215) {
        if (!bbs.saveGame) {
          w2c2020.hsTotal.alpha = 0;
          w2c2020.killTotal.alpha = 0;
        }
        w2c2020.hs.text = p213;
        w2c2020.hsTotal.text = p215;
        w2c2020.kill.text = p212;
        w2c2020.killTotal.text = p214;
      },
      ismobile: f94(),
      Zp: undefined
    };
    window.bbs = {
	flx:0,
      version: 0,
      headshot: 0,
      kill: 0,
      theadshot: 0,
      tkill: 0,
      died: 0,
      start: 0,
      HOL: 0,
      tk: null,
      country: null,
      finish: 0,
      saveGame: false,
      idReplaceSkin: 34,
      mobile: false,
      joystick: null,
      configJoystick: {
        buttons: {
          respawn: {
            label: "RESPAWN",
            labelAbbreviation: "RP",
            active: false,
            action: "mbf.mbfass6()"
          },
          lobby: {
            label: "LOBBY",
            labelAbbreviation: "L",
            active: true,
            action: "mbf.mbfass5()"
          },
          rotate: {
            label: "ROTATE",
            labelAbbreviation: "A",
            active: true,
            action: "mbf.mbfass4()"
          },
          snail: {
            label: "SNAIL",
            labelAbbreviation: "B",
            active: true,
            action: "mbf.mbfass3()"
          },
          search: {
            label: "SEARCH",
            labelAbbreviation: "SE",
            active: false,
            action: "mbf.mbfass0()"
          },
          swap: {
            label: "SWAP",
            labelAbbreviation: "SW",
            active: false,
            action: "mbf.mbf_cambiar()"
          },
          zoomplus: {
            label: "Z+",
            labelAbbreviation: "+",
            active: true,
            action: "mbf.mbfass1()"
          },
          zoomminus: {
            label: "Z-",
            labelAbbreviation: "-",
            active: true,
            action: "mbf.mbfass2()"
          },
          zoom: {
            label: "x1",
            labelAbbreviation: "x1",
            active: true,
            action: "mbf.mbfass7()"
          }
        },
        typeZoom: ["btn", "range"],
        typeCurrent: "btn",
        typeName: ["all", "abb"],
        typeCurrentName: "abb"
      },
      customJoystick: null,
      display: {
        customClock: null,
        clock: {
          x: 60,
          y: 60
        },
        top: {
          x: 225,
          y: 1
        },
        default: false,
        custom: false,
        m: {
          x: 60,
          y: 60
        },
        r: {
          x: 225,
          y: 1
        },
        ms: false
      },
      PropertyManager: {},
      acs: true,
      lr: false,
      showTophs: true,
      showRechs: true,
      con: null,
      params: "",
      arrow: true,
      activeBadLang: false,
      activeSounds2: true,
      activeZoom: false,
      activeZoomMobile: false,
      top10Show: [],
      background: null,
      backgroundIsCustom: false,
      nickname: null,
      code: null,
      configZoom: {
        limitDown: 0.25,
        step: 0.25,
        closeUp: 0.5,
        closeDown: 1
      },
      laserActive: false,
      laserColor: 16711680,
      laser: 0.1,
      displayFriends: {
        x: -10,
        y: 315,
        rotation: 0
      },
      enemyNameColor: null,
      enemyNameFontSize: null,
      novidadewormworld: 0
    };
    var v168 = localStorage.getItem("wwc_version");
    var v169 = localStorage.getItem("wwcSaveGame");
    var v170 = localStorage.getItem("wwc_config");
    v169 &&= JSON.parse(v169);
    for (var v171 in v169) {
      switch (v171) {
        case "configJoystick":
          if (!v169[v171]) {
            break;
          }
          bbs[v171] = v169[v171];
          for (var v172 in v169[v171].buttons) {
            bbs[v171].buttons[v172] = v169[v171].buttons[v172];
          }
          for (var v173 in v169[v171]) {
            bbs[v171][v173] = v169[v171][v173];
          }
          break;
        case "joystick":
          bbs[v171] = _wwc.joystick();
          for (var v174 in v169[v171]) {
            bbs[v171][v174] = v169[v171][v174];
          }
          break;
        case "display":
          for (var v175 in v169[v171]) {
            bbs[v171][v175] = v169[v171][v175];
          }
          break;
        default:
          bbs[v171] = v169[v171];
          break;
      }
    }
    if (!bbs.version || bbs.version !== vLN2) {
      bbs.version = vLN2;
      bbs.joystick = _wwc.joystick();
    }
    bbs.loading = true;
    window.respawnFn = function () {
      vO30.dh.Cn = 0;
      if (vO30.dh.mq) {
        vO30.dh.mq.close();
      }
      vO30.dh.mq = null;
      vO30.dh.Zp = function (p216, p217) {
        _wwc.Zp(bbs.con || p216, p217);
      };
      vO30.Pn();
    };
    window.lobbyFn = function () {
      vO30.dh.Cn = 0;
      if (vO30.dh.mq) {
        vO30.dh.mq.close();
      }
      vO30.dh.mq = null;
      vO30.dh.Np();
      vF87();
    };
$("#mm-advice-cont").html("<div class=\"wormworld-connect-count-b32\" style=\"display: grid !important;grid-template-columns: 1fr 2fr;gap: 11px;margin-left: 107px;height: 41px;\">\n    <input type=\"button\" value=\"F.SCREEN\" id=\"btnFullScreen\"/>\n    <input type=\"button\" value=\"RESPAWN\" id=\"btnRePlay\"   onclick=\"respawnFn()\"  />\n </div>");
const btn = document.getElementById("btnFullScreen");

btn.onclick = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

    $("<button type=\"button\" id=\"op_jkr\">Settings</button>").insertAfter("#mm-store");
    $(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
    $(".wear-view-cont").append("<div id=\"idWearViewCont\"></div>");
    var vLSDisplaynonepositionr = "display:none;position:relative;background:#FFF;padding:15px;max-width:680px;margin:10px auto;";
    if (_wwc.ismobile) {
      vLSDisplaynonepositionr = "display:none;position:relative;\n                  background:#FFF;padding:20px;\n                  width:calc(100vw - var(--scrollbar-width));\n                  height:100vh;";
    }
    $("body").append(`<div id="wwc-set-view" class="base-popup-view" style="${vLSDisplaynonepositionr}"></div>`);
    var vLSAss = "ass";
    window.mbf = {};
    var vF76 = function f76(p218) {
      if (bbs.shiftKey) {
        return;
      }
      var vLN30 = 30;
      var vLN018 = 0;
      var v176 = false;
      function f77() {
        var vParseFloat = parseFloat(vO30.og.af.Bn);
        vParseFloat = (vParseFloat - 0.06) % (Math.PI * 2);
        if (vParseFloat < 0) {
          vParseFloat += Math.PI * 2;
        }
        vO30.og.af.Bn = vParseFloat.toFixed(2);
      }
      function f78(p219) {
        v142 = setInterval(function () {
          if (p219 === 1) {
            vLN018 = v176 ? vLN018 - 1 : vLN018 + 1;
            if (vLN018 % 80 === 0 && !v176) {
              vLN30 = vLN30 + 18;
              clearInterval(v142);
              f78(1);
            }
          }
          f77();
        }, vLN30);
      }
      if ((p218 == 7 || p218.key == "7") && v142 === null) {
        vO30.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
        f78(1);
        return;
      }
      if ((p218 == 8 || p218.key == "8") && v142 === null) {
        vO30.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
        f78(2);
        return;
      }
      if (v142 !== null) {
        clearInterval(v142);
        vO30.og.af.ng.Eb.addEventListener("pointermove", mbf.onmovepoint, true);
        v142 = null;
      }
    };
    mbf.mbfass0 = function () {
      _wwcio.findFriend();
    };
    mbf.mbfass1 = function () {
      var v177 = vO30.Ij.Rk.customer ? 100 : 40000000000000000000000;
      if (vLN12 <= v177) {
        vLN12 += vLN12 > 15 ? 1 : bbs.configZoom?.step || 0.25;
      }
      vLN12 = Math.min(vLN12, v177);
      w2c2020.zoom.text = "x" + vLN12.toFixed(2);
    };
    mbf.mbfass2 = function () {
      var v178 = vLN12 - (vLN12 > 15 ? 1 : bbs.configZoom?.step);
      vLN12 = v178 < bbs.configZoom?.limitDown ? bbs.configZoom?.step : v178;
      w2c2020.zoom.text = "x" + vLN12.toFixed(2);
    };
    mbf.mbfass3 = function () {
      if (mbf.mbf_rotate) {
        vF76(8);
        $("#mbf_rotate").css("background-color", "#000");
      } else {
        vF76(v142 ? 0 : 8);
      }
      if (v142) {
        mbf.mbf_snail = true;
        $("#mbf_snail").css("background-color", "#156ab3");
      } else {
        mbf.mbf_snail = false;
        $("#mbf_snail").css("background-color", "#000");
      }
    };
    mbf.mbfass4 = function () {
      if (mbf.mbf_snail) {
        $("#mbf_snail").css("background-color", "#000");
        vF76(8);
      } else {
        vF76(v142 ? 0 : 8);
      }
      if (v142) {
        mbf.mbf_rotate = true;
        $("#mbf_rotate").css("background-color", "#156ab3");
      } else {
        mbf.mbf_rotate = false;
        $("#mbf_rotate").css("background-color", "#000");
      }
    };
    mbf.mbfass5 = function () {
      window.location.reload();
    };
    mbf.mbfass6 = function () {
      respawnFn();
    };
    mbf.mbfass7 = function () {
      vLN12 = 1;
      w2c2020.zoom.text = "x1";
    };
    mbf.mbfass9 = function (p220) {
      var v179 = vO30.Ij.Rk.customer ? 100 : 2;
      if (p220.value <= v179) {
        vLN12 = p220.value;
        w2c2020.zoom.text = "x" + p220.value;
      }
    };
    mbf.mbf_cambiar_origin = null;
    mbf.mbf_cambiar_current = 0;
    mbf.mbf_cambiar_seq = 0;
    mbf.mbf_cambiar_add = function (p221, p222) {
      if (!bbs.cambiar) {
        bbs.cambiar = {};
      }
      if (bbs.cambiar[p221]) {
        alert("Skin already exists in the list of skins to be");
        return;
      }
      bbs.cambiar[p221] = p222 || "Skin " + p221;
      alert("Skin added to the list of skins to be");
      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
      console.log(bbs.cambiar);
    };
    mbf.mbf_cambiar = function () {
      if (mbf.mbf_cambiar_origin === null) {
        mbf.mbf_cambiar_origin = _wwc._anApp.dh.ch.Eh.Hh;
      }
      var v180 = Object.keys(bbs.cambiar);
      if (mbf.mbf_cambiar_seq >= v180.length) {
        mbf.mbf_cambiar_seq = 0;
      }
      for (var vLN019 = 0; vLN019 < v180.length; vLN019++) {
        mbf.mbf_cambiar_current = v180[vLN019];
        if (vLN019 === mbf.mbf_cambiar_seq) {
          mbf.mbf_cambiar_current = v180[vLN019];
          break;
        }
      }
      mbf.mbf_cambiar_seq = mbf.mbf_cambiar_seq + 1;
      _wwc._anApp.dh.ch.Eh.Hh = mbf.mbf_cambiar_current;
      _wwc._anApp.dh.ch.Sm();
    };
    if (bbs.activeZoom) {
      window.onwheel = function (p223) {
        if (p223.deltaY < 0) {
          mbf.mbfass1();
        } else {
          mbf.mbfass2();
        }
      };
    }
    var v$2 = $("#idReplaceSkin");
    var vF4 = function () {
      var vF36 = f36(f23().m(function f79(p224, p225) {
        return f23().w(function (p226) {
          while (1) {
            switch (p226.n) {
              case 0:
                if (!p225) {
                  p226.n = 1;
                  break;
                }
                return p226.a(2);
              case 1:
                if (!p224) {
                  p224 = vO30.Ij.Rk;
                }
                console.log(p224);
                bbs.userId = p224.userId;
                p226.n = 2;
                return fetch("https://game.platenn.store/servers", {
                }).then(function (p227) {
                  p227.text().then(function (p228) {
                    $(".description-text").html(p228);
                    if (p224.type === "error") {
                      $(".description-text").html(p224.msg);
                    }
                  });
                }).catch(function () {
                  $(".description-text").html("Bağlantı sorunu.");
                });
              case 2:
                p226.n = 3;
                return fetch(URLSERV_WORMWORLD + "/set-worm-world", {
                  headers: {
                    "Content-Type": "application/json",
                    "x-access-token": p224.tk,
                    "x-uid": bbs.wuid
                  },
                  method: "POST",
                  body: JSON.stringify({
                    userId: bbs.userId
                  })
                }).then(function (p229) {
                  p229.text().then(function (p230) {
                    $("#wwc-set-view").html(p230);
                    $("#op_jkr").click(function (p231) {
                      $("#wwc-set-view").css("display", "block");
                    });
                    _wwc.load_con();
                    _wwc.fnSaveGame();
                    _wwc.fnSetCounts("start");
                    $("#backgroundArena").change(function () {
                      var v181 = $(this).val();
                      bbs.background = v181;
                      bbs.backgroundUri = null;
                      vO30.xe._g = vO31.bgg(v181);
                      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
                      _wwc._anApp.og.af.ng.Lg.$g(vO30.xe._g);
                      alert("Background changed!");
                    });
                    if (bbs.background !== undefined && bbs.background !== null) {
                      $("#backgroundArena").val(bbs.background);
                      var vParseInt = parseInt(bbs.background, 10);
                      vO30.xe._g = vO31.bgg(vParseInt);
                      _wwc._anApp.og.af.ng.Lg.$g(vO30.xe._g);
                    }
                    var v182 = _wwc.isNumberValid(bbs.idReplaceSkin);
                    if (v182) {
                      $("#inputReplaceSkin").val(bbs.idReplaceSkin);
                    } else {
                      var v183 = $("#inputReplaceSkin").val();
                      v182 = _wwc.isNumberValid(v183);
                      bbs.idReplaceSkin = v182 ? v183 : 33;
                    }
                    if (!bbs.joystick) {
                      $("#joystick_checked").val(true);
                      $("#joystick_color").val("red");
                      $("#joystick_mode").val("dynamic");
                      $("#joystick_position").val("L");
                      $("#joystick_size").val(100);
                      $("#joystick_pxy").val(100);
                    } else {
                      $("#joystick_checked").prop("checked", bbs.joystick.checked);
                      $("#joystick_color").val(bbs.joystick.color);
                      $("#joystick_mode").val(bbs.joystick.mode);
                      $("#joystick_position").val(bbs.joystick.positionMode);
                      $("#joystick_size").val(bbs.joystick.size);
                      $("#joystick_pxy").val(bbs.joystick.pxy);
                    }
                  });
                });
              case 3:
                return p226.a(2);
            }
          }
        }, f79);
      }));
      return function f80(p232, p233) {
        return vF36.apply(this, arguments);
      };
    }();
    var vF81 = function f81(p234) {
      if (bbs.PropertyManager) {
        if (bbs.PropertyManager.lj) {
          p234.skinId = bbs.PropertyManager.lj;
        }
        if (bbs.PropertyManager.mj) {
          p234.eyesId = bbs.PropertyManager.mj;
        }
        if (bbs.PropertyManager.nj) {
          p234.mouthId = bbs.PropertyManager.nj;
        }
        if (bbs.PropertyManager.pj) {
          p234.glassesId = bbs.PropertyManager.pj;
        }
        if (bbs.PropertyManager.oj) {
          p234.hatId = bbs.PropertyManager.oj;
        }
      }
    };
    var vF5 = function () {
      var vF362 = f36(f23().m(function f82(p235, p236) {
        var v184;
        var v185;
        var v186;
        var v187;
        return f23().w(function (p237) {
          while (1) {
            switch (p237.n) {
              case 0:
                $("#mm-params-nickname").prop("maxlength", vLN18);
                p236(p235);
                vF4(p235);
                _wwc._anApp = vO30;
                _wwc._tx = function (p238) {
                  Object.keys(p238).forEach(function (p239) {
                    if (p238[p239].Yi) {
                      p238[p239].fj.nh.Cc.xc.width = p238[p239].fj.nh.Cc.xc.width + 2;
                      p238[p239].fj.nh.Cc.xc.height = p238[p239].fj.nh.Cc.xc.height + 2;
                    }
                  });
                };
                _wwc.Zp = vO30.dh.Zp;
                vO30.dh.Dq = function (p240, p241, p2 = 0) {
                  try {
                    fetch(URLSERV_WORMWORLD + "/game-connect", {
                      headers: {
                        "Content-Type": "application/json",
                        "x-access-token": vO30.Ij.Rk.tk,
                        "x-uid": bbs.wuid
                      },
                      method: "POST",
                      body: JSON.stringify({
                        nickname: bbs.nickname,
                        code: bbs.code,
                        teamRoom: _wwcio.player.teamRoom
                      })
                    }).then(function () {
                      var vF363 = f36(f23().m(function f83(p242) {
                        var v188;
                        var v189;
                        return f23().w(function (p243) {
                          while (1) {
                            switch (p243.n) {
                              case 0:
                                p243.n = 1;
                                return p242.json();
                              case 1:
                                v188 = p243.v;
                                v189 = vO30.dh;
                                if (!v188.connected) {
                                  p243.n = 2;
                                  break;
                                }
                                alert("Update Page\n\nWarning:We detected an invalid action. This may have occurred because your access token was updated, but the game was not properly restarted. Please refresh the page to continue playing safely. If the problem persists, make sure you are not using external modifications or unauthorized extensions.");
                                v189.Cq();
                                return p243.a(2);
                              case 2:
                                v189.mq = new WebSocket(p240);
                                v189.mq.binaryType = "arraybuffer";
                                vLN12 = _wwc.ismobile ? 1.25 : 1;
                                bbs.start = new Date();
                                bbs.con = p240;
                                vO20 = {};
                                vO31.setIntervalRun = setInterval(function () {
                                  vO31.ps3();
                                }, 20);
                                v189.mq.onopen = function () {
                                  vF88();
                                  _wwc.fnSetCounts("open");
                                  p241();
                                };
                                v189.mq.onclose = function () {
                                  vF87();
                                  _wwc.fnSetCounts("close");
                                  _wwc.stopGame();
                                  clearInterval(vO31.setIntervalRun);
                                  vO31.loadBg = false;
                                  bbs.start = 0;
                                };
                                v189.mq.onerror = function (p244) {
                                  vF87();
                                  _wwc.fnSetCounts("close");
                                  _wwc.stopGame();
                                  clearInterval(vO31.setIntervalRun);
                                  vO31.loadBg = false;
                                  bbs.start = 0;
                                  if (p2 > 4) {
                                    v189.Cq();
                                  } else {
                                    setTimeout(function () {
                                      p2++;
                                      console.log("Reconnect server");
                                      vO30.dh.Dq(bbs.con, p241, p2);
                                    }, 2000);
                                  }
                                };
                                v189.mq.onmessage = function (p245) {
                                  v189.Kp.Ph(p245.data);
                                };
                              case 3:
                                return p243.a(2);
                            }
                          }
                        }, f83);
                      }));
                      return function (p246) {
                        return vF363.apply(this, arguments);
                      };
                    }());
                  } catch (e7) {
                    console.log(e7);
                    i.Cq();
                  }
                };
                vO30.dh.Kp.Yh = function (p247, p248) {
                  vF87();
                  this.dh.Oi();
                };
                vO30.og.af.ng.Ug.Uf = function (p249) {
                  var vF6 = function () {
                    return vO31.$F.M(vO31.POGL.Sprite, function () {
                      vO31.POGL.Sprite.call(this);
                      this.sh = 0;
                    });
                  }();
                  for (var v190 in this.rh) {
                    if (p249[v190] == null || !p249[v190].hd) {
                      vO31.$F.U(this.rh[v190]);
                      delete this.rh[v190];
                    }
                  }
                  var vLN020 = 0;
                  var vLN13 = 1;
                  if (bbs.display.custom) {
                    vLN13 = window.innerWidth;
                  }
                  for (var v191 in p249) {
                    var v192 = p249[v191];
                    if (v192.hd) {
                      var v193 = this.rh[v191];
                      if (!v193) {
                        var v194 = vO30.Lc.Ub().pb(v192.nd).ub;
                        v193 = new vF6();
                        v193.texture = v194.Ea();
                        v193.width = 40;
                        v193.height = 40;
                        this.rh[v191] = v193;
                        this.addChild(v193);
                      }
                      w2c2020.setPtc(this, v191, v192.od);
                      v193.sh = v192.od;
                    var _0x3a7239 = vLN13 || window.innerWidth;
                    var _0x6e711 = bbs.hudSettings.mode == 0 ? vLN020 : _0x3a7239 / 2 + vLN020 - _0x3a7239 * bbs.hudSettings.wi;
                    v193.position.x = _0x6e711 + 5;
                    v193.position.y = v193.position.y;
                    vLN020 += 40;
                    }
                  }
                };
                if (!bbs.display.customClock) {
                  vO30.og.af.ng.Tg.addChild(w2c2020.clock);
                }
                vO30.og.af.ng.Tg.addChild(w2c2020.containerCountInfo);
                vO30.og.af.ng.Tg.addChild(w2c2020.containerHstop);
                w2c2020.containerHstop.alpha = bbs.showTophs ? 1 : 0;
                vO30.og.af.ng.Tg.addChild(w2c2020.containerHsRec);
                w2c2020.containerHsRec.alpha = bbs.showRechs ? 1 : 0;
                vO30.og.af.ng.Tg.addChild(w2c2020.labelRoom);
                w2c2020.ptc = {};
                v184 = [40, 40, 40, 120, 40, 20, 40];
                for (v185 = 0; v185 < v184.length; v185++) {
                  v186 = "clock_ad" + v185;
                  w2c2020.ptc[v186] = new PIXI.Text(v184[v185], w2c2020.fontStyle["tfc" + v185]);
                  w2c2020.ptc[v186].y = 61;
                }
                w2c2020.setPtc = function (p250, p251, p252) {
                  var v195 = v184[p251] - parseInt((p252 == 0.99 ? 1 : p252) * v184[p251] / 1);
                  var v196 = "clock_ad" + p251;
                  p250.rh[p251].addChild(w2c2020.ptc[v196]);
                  if (w2c2020.ptc[v196]) {
                    w2c2020.ptc[v196].x = v195 >= 100 ? 11 : v195 >= 10 ? 18 : 26;
                    w2c2020.ptc[v196].text = v195;
                  }
                };
                v187 = vO30.og.af.ng.Eb;
                mbf.onmovepoint = function (p253) {
                  if (p253.pointerType === "touch" && !p253.isPrimary) {
                    return;
                  }
                  if (p253.clientX !== undefined) {
                    vO30.og.af.Bn = Math.atan2(p253.clientY - v187.offsetHeight * 0.5, p253.clientX - v187.offsetWidth * 0.5);
                  } else {
                    vO30.og.af.Bn = Math.atan2(p253.pageY - v187.offsetHeight * 0.5, p253.pageX - v187.offsetWidth * 0.5);
                  }
                };
                mbf.onRun = function (p254) {
                  if (p254 && p254.pointerType === "touch") {
                    return;
                  }
                  vO30.og.af.An = true;
                };
                mbf.onStop = function (p255) {
                  if (p255 && p255.pointerType === "touch") {
                    return;
                  }
                  vO30.og.af.An = false;
                };
                v187.addEventListener("pointermove", mbf.onmovepoint, true);
                v187.addEventListener("pointerdown", mbf.onRun, true);
                v187.addEventListener("pointerup", mbf.onStop, true);
                if (_wwc.ismobile) {
                  v187.addEventListener("touchstart", function (p256) {
                    if (p256 = p256 || window.event) {
                      vO30.og.af.An = p256.touches.length >= 2;
                    }
                    p256.preventDefault();
                  }, true);
                  v187.addEventListener("touchend", function (p257) {
                    if (p257 = p257 || window.event) {
                      vO30.og.af.An = p257.touches.length >= 2;
                    }
                  }, true);
                }
              case 1:
                return p237.a(2);
            }
          }
        }, f82);
      }));
      return function f84(p258, p259) {
        return vF362.apply(this, arguments);
      };
    }();
    function f85() {
      var v197 = document.createElement("div");
      v197.style.position = "fixed";
      v197.style.top = "0";
      v197.style.height = "100%";
      v197.style.width = "100%";
      v197.style.zIndex = "1000";
      v197.id = "zone_joystick";
      document.body.appendChild(v197);
    }
    function f86() {
      var v198 = document.getElementById("zone_joystick");
      if (v198) {
        v198.remove();
      }
    }
    var vF87 = function f87() {
      if (v144) {
        $("#wwc-mobile-box").remove();
        $("#wwc-mobile-box-slider").remove();
        v144.destroy();
      }
      f86();
    };
    var vF88 = function f88() {
      try {
        var vF89 = function f89() {
          v144.on("start end", function (p260, p261) {}).on("move", function (p262, p263) {
            var v199 = p263.angle.radian <= Math.PI ? p263.angle.radian * -1 : Math.PI - (p263.angle.radian - Math.PI);
            vO30.og.af.Bn = v199;
          });
        };
        var vF90 = function f90() {
          if (v144) {
            v144.destroy();
          }
          var vF19 = f19({}, bbs.joystick);
          var vO26 = {};
          if (bbs.customJoystick) {
            f85();
            var vF8 = f8(bbs.customJoystick.buttons);
            var v200;
            try {
              for (vF8.s(); !(v200 = vF8.n()).done;) {
                var v201 = v200.value;
                var v202 = document.createElement("div");
                if (v201.svg) {
                  v202.innerHTML = v201.svg;
                } else {
                  v202.style.color = v201.color || "#FFF";
                  v202.style.backgroundColor = v201.backgroundColor || "#000";
                  v202.style.borderRadius = "10px";
                  v202.style.textAlign = "center";
                  v202.style.fontWeight = "bold";
                  v202.style.padding = "5px";
                  v202.style.border = "1px solid #f00";
                  v202.style.fontSize = v201.size || "25px";
                  v202.innerHTML = v201.value;
                }
                v202.style.position = "absolute";
                v202.style.top = v201.top;
                v202.style.left = v201.left;
                v202.style.display = v201.display;
                v202.style.cursor = "pointer";
                v202.id = "cbjt_" + v201.value;
                v202.dataset.size = v201.size;
                v202.dataset.color = v201.color || "#FFF";
                v202.style.opacity = 0.6;
                document.getElementById("zone_joystick").appendChild(v202);
                if (v201.display !== "none") {
                  if (v201.value === "ZoomIn") {
                    v202.addEventListener("click", function (p264) {
                      mbf.mbfass2();
                    });
                  }
                  if (v201.value === "ZoomOut") {
                    v202.addEventListener("click", function (p265) {
                      mbf.mbfass1();
                    });
                  }
                  if (v201.value === "Accelerator") {
                    v202.addEventListener("pointerdown", function (p266) {
                      mbf.onRun();
                    });
                    v202.addEventListener("pointerup", function (p267) {
                      mbf.onStop();
                    });
                  }
                  if (v201.value === "Respawn") {
                    v202.addEventListener("click", function (p268) {
                      respawnFn();
                    });
                  }
                  if (v201.value === "Rotate") {
                    v202.addEventListener("click", function (p269) {
                      vF76(v142 ? 0 : 8);
                    });
                  }
                  if (v201.value === "Snail") {
                    v202.addEventListener("click", function (p270) {
                      vF76(v142 ? 0 : 7);
                    });
                  }
                  if (v201.value === "Lobby") {
                    v202.addEventListener("click", function (p271) {
                      lobbyFn();
                    });
                  }
                  if (v201.value === "Search") {
                    v202.addEventListener("click", function (p272) {
                      mbf.mbfass0();
                    });
                  }
                }
                vO26[v201.value] = v202;
              }
            } catch (e8) {
              vF8.e(e8);
            } finally {
              vF8.f();
            }
            vO26.Directional;
            var v203 = vO26.Directional.dataset.size / 2;
            var v204 = parseInt(vO26.Directional.style.left.replace("px", "")) + v203;
            var v205 = parseInt(vO26.Directional.style.top.replace("px", "")) + v203;
            vF19 = {
              zone: vO26.Directional,
              mode: "static",
              position: {
                left: "50%",
                top: "50%"
              },
              dumbBox: {
                left: v204,
                top: v205
              },
              color: "transparent",
              size: Math.floor(vO26.Directional.dataset.size / 1.6)
            };
          } else {
            vF19.zone = document.getElementById("game-view");
            if (vF19.mode === "static") {
              delete vF19.zone;
            }
          }
          v144 = nipplejs.create(vF19);
          vF89();
          if (bbs.customJoystick) {
            $(".nipple > .front").css("background", vO26.Directional.dataset.color);
          }
        };
        if (_wwc.ismobile) {
          var vLS4 = "";
          var v206 = bbs.configJoystick.typeCurrentName === "all" ? "label" : "labelAbbreviation";
          Object.keys(bbs.configJoystick.buttons).forEach(function (p273) {
            vLS4 = vLS4 + (bbs.configJoystick.buttons[p273].active ? `<button onclick="${bbs.configJoystick.buttons[p273].action}" id="mbf_${p273}">${bbs.configJoystick.buttons[p273][v206]}</button>` : "");
          });
          var v207 = `
        <style>
          #wwc-mobile-box {
            position: fixed;z-index: 1001;width: 100%;top: 10px;
          }
          #wwc-mobile-buttons {
            position: relative;margin: 0 auto;width: 265px;
            display: flex;flex-wrap: nowrap;justify-content: space-between;align-items: center;
          }
          #wwc-mobile-buttons > button {
            background-color: #000;color: #FFF;border: 1px solid #FFF;border-radius: 50px;
            min-width: 36px;height: 36px;font-weight: bold;display: flex;justify-content: center;
            align-items: center;
          }
          .game-slider-container-02 {
            position: fixed;z-index: 1000;bottom: 50px;right: 45px;
          }
          .game-slider-container-02 input[type=range][orient=vertical] {
              writing-mode: vertical-lr;
              direction: rtl;
              appearance: slider-vertical;
              width: 16px;
              vertical-align: bottom;
          }
        </style>
        <div id="wwc-mobile-box"><div id="wwc-mobile-buttons" style="">${vLS4}</div></div>`;
          v207 = v207 + (bbs.configJoystick.typeCurrent === "btn" ? "" : `<div id="wwc-mobile-box-slider" class="game-slider-container-02"><input id="sliderZoom" orient="vertical" onchange="mbf.mbfass9(this)" type="range" min="0.25" max="${vO30.Ij.Rk.customer ? 12 : 2}" step="0.25" value="1" style="height: 65vh;"></div>`);
          $("body").append(v207);
        }
        if (_wwc.ismobile && bbs.joystick.checked) {
          if (bbs.customJoystick) {
            console.log("customJoystick");
          }
          vF90();
        }
      } catch (e9) {
        console.error(e9);
      }
    };
    var v208 = localStorage.getItem("custom_wormworld_wear");
    var v209 = localStorage.getItem("custom_wormworld_skin");
    var v210 = localStorage.getItem("custom_wormworld_badLang");
    var v211 = localStorage.getItem("custom_wormworld_background");
    var v212 = localStorage.getItem("custom_wormworld_audio");
    var vA5 = [" XТ_", "WORMXТ_(d{})", "_xt", "wormxt", "worm_xt", "timmap"];
    if (v210) {
      vA5 = vA5.concat(JSON.parse(v210));
    }
    window.badLanguageRegEx = (vA5 || []).join("|");
    var vF91 = function f91(p274) {
      p274 = p274.replace(new RegExp(badLanguageRegEx, "gim"), ":");
      p274 = p274.replace(/\uFDFD/g, "");
      p274 = p274.substring(0, vLN18);
      return p274;
    };
    _wwc.customConfig = function (p275) {
      var vF922 = function f92(p276, p3 = 0) {
        var v213 = p276.id.toString();
        var v214 = p276.type.toString().toLowerCase() + "VariantArray";
        var v215 = p276.type.toString().toLowerCase() + "Dict";
        p275.textureDict[v213] = {
          custom: true,
          re1ativePath: p276.file,
          reference: 1000 + p3
        };
        p275.regionDict[v213] = {
          texture: v213,
          x: p276.x,
          y: p276.y,
          w: p276.w,
          h: p276.h,
          px: p276.px,
          py: p276.py,
          pw: 128,
          ph: 128
        };
        p275[v215][1000 + p3] = {
          base: [{
            region: v213
          }],
          guest: false,
          nonbuyable: false,
          price: 0,
          priceBefore: 0,
          id: v213
        };
        p275[v214].push([1000 + p3]);
      };
      if (v208) {
        v208 = JSON.parse(v208);
        if (v208.wear) {
          if (v208.version == "2") {
            v208.data.forEach(function (p277, p278) {
              vF922(p277, p278);
            });
          } else {
            for (var v216 in v208.wear.textureDict) {
              p275.textureDict[v216] = {};
              p275.textureDict[v216].h1 = true;
              p275.textureDict[v216].h3 = true;
              p275.textureDict[v216].re1ativePath = v208.wear.textureDict[v216].file;
            }
            for (var v217 in v208.wear.regionDict) {
              p275.regionDict[v217] = v208.wear.regionDict[v217];
              var v218 = p275.regionDict[v217];
              p275[v218.list][v218.obj.id.toString()] = v218.obj;
              p275[v218.listVariant].push([v218.obj.id.toString()]);
            }
          }
        }
      }
      if (v209) {
        v209 = JSON.parse(v209);
        if (v209.version_skin == "2") {
          var vF93 = function f93(p279, p280, p281, p282) {
            return {
              texture: p280,
              h: p281 - 5,
              w: p281 - 5,
              x: p281 * (p282 ? 0 : p279 || 0),
              y: 0
            };
          };
          var v219 = "SKIN_" + v209.id + "___Z";
          var vO27 = {
            id: v219,
            regionDict: {},
            textureDict: {},
            skinArrayDict: [],
            skinGroupArrayDict: [{
              id: v219,
              name: {
                en: "Custom V2"
              },
              list: []
            }],
            version_skin: 3
          };
          var vO28 = {
            id: v219,
            guest: false,
            price: 0,
            priceBefore: 0,
            nonbuyable: false,
            prime: "c_white",
            glow: v209.glow,
            base: []
          };
          for (var v220 = v209.len - 1; v220 >= 0; v220--) {
            vO27.regionDict[`${v219}_${v220}`] = vF93(v220, v219, v209.cos, 0);
            vO28.base.push(`${v219}_${v220}`);
          }
          vO27.textureDict[v219] = {
            custom: true,
            re1ativePath: v209.file || v209.td.file,
            h1: true,
            h4: true
          };
          vO27.skinArrayDict.push(vO28);
          vO27.skinGroupArrayDict[0].list.push(v219);
          if (!v209.textureDict[v219]) {
            alert("Error! Texture not found:" + p + " - load again.");
            return;
          }
        }
        if (v209.version_skin == "3") {
          for (var v221 in v209) {
            var vF39 = f39(v209[v221]);
            if (vF39 === "object") {
              p275[v221] = Array.isArray(v209[v221]) ? [].concat(f4(p275[v221]), f4(v209[v221])) : f19(f19({}, p275[v221]), v209[v221]);
            }
          }
          return;
        }
        var v222 = v209.skin.id;
        v209.skin.id = v222.toString();
        for (var v223 in v209.textureDict) {
          p275.textureDict[v223] = v209.textureDict[v223];
          p275.textureDict[v223].re1ativePath = v209.textureDict[v223].file;
          p275.textureDict[v223].h1 = true;
          p275.textureDict[v223].h4 = true;
        }
        for (var v224 in v209.regionDict) {
          p275.regionDict[v224] = v209.regionDict[v224];
        }
        p275.skinGroupArrayDict.push({
          id: "custom",
          name: {
            en: "Custom"
          },
          list: [v222]
        });
        p275.skinArrayDict.push(v209.skin);
      }
    };
    function f94() {
      var v225 = false;
      (function (p283) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(p283) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(p283.substr(0, 4))) {
          v225 = true;
        }
      })(navigator.userAgent || navigator.vendor || window.opera);
      return v225;
    }
    window.w2c2020 = {
      fontStyle: {
        amarelo: new PIXI.TextStyle({
          align: "center",
          fill: "#FFD500",
          fontSize: 10,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        }),
        branco: new PIXI.TextStyle({
          align: "center",
          fill: "#fff",
          fontSize: 10,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        }),
        hsBranco: new PIXI.TextStyle({
          align: "center",
          fill: "#fff",
          fontSize: 9,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        }),
        hsBrancoRight: new PIXI.TextStyle(f20({
          align: "center",
          fill: "#fff",
          fontSize: 9,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        }, "align", "right")),
        brancoXzoom: new PIXI.TextStyle({
          align: "center",
          fill: "#fff",
          fontSize: 12,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        }),
        verdeXzoom: new PIXI.TextStyle({
          align: "center",
          fill: "#0ff555",
          fontSize: 9,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        }),
        serversStyle: new PIXI.TextStyle({
        align: "center",
        fill: "#fff009",
        fontSize: 11,
        lineJoin: "round",
        whiteSpace: "normal",
        wordWrap: true
      })
      }
    };
    var vA6 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
    for (var vLN021 = 0; vLN021 < vA6.length; vLN021++) {
      var v226 = vA6[vLN021];
      w2c2020.fontStyle["tfc" + vLN021] = new PIXI.TextStyle({
        align: "center",
        fill: v226,
        fontSize: 25,
        lineJoin: "round",
        whiteSpace: "normal",
        wordWrap: true,
        fontWeight: "bold"
      });
    }
    w2c2020.zoom = new PIXI.Text("x1", w2c2020.fontStyle.brancoXzoom);
    w2c2020.zoom.x = 82;
    w2c2020.zoom.y = 105;
    w2c2020.conteinerTeam = new PIXI.Container();
    w2c2020.conteinerTeam.id = "team";
    w2c2020.friends = new PIXI.Container();
    w2c2020.friends.background = new PIXI.Graphics();
    w2c2020.friends.background.beginFill(0, 0.4);
    w2c2020.friends.background.drawRect(0, 0, 100, 130);
    w2c2020.friends.background.endFill();
    w2c2020.friends.addChild(w2c2020.friends.background);
    w2c2020.friends.position.x = bbs.displayFriends?.x || -10;
    w2c2020.friends.position.y = bbs.displayFriends?.y || 315;
    w2c2020.friends.position.rotate = bbs.displayFriends?.rotate || 0;
    w2c2020.friends.alpha = 0;
    w2c2020.moveSprite = PIXI.Sprite.from(URLSERV_WORMWORLD + "/img/move-icon.png");
    w2c2020.moveSprite.width = 20;
    w2c2020.moveSprite.height = 20;
    w2c2020.moveSprite.x = 75;
    w2c2020.moveSprite.y = 130;
    w2c2020.moveSprite.interactive = true;
    w2c2020.moveSprite.buttonMode = true;
    w2c2020.rotation = PIXI.Sprite.from(URLSERV_WORMWORLD + "/img/rotate-icon.png");
    w2c2020.rotation.width = 25;
    w2c2020.rotation.height = 25;
    w2c2020.rotation.x = 45;
    w2c2020.rotation.y = 130;
    w2c2020.rotation.interactive = true;
    w2c2020.rotation.buttonMode = true;
    w2c2020.friends.addChild(w2c2020.moveSprite);
    w2c2020.friends.addChild(w2c2020.rotation);
    var v227 = false;
    var vO29 = {
      x: 0,
      y: 0
    };
    w2c2020.rotation.on("pointerdown", function (p284) {
      w2c2020.friends.rotation += Math.PI / 2;
      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}));
    });
    w2c2020.moveSprite.on("pointerdown", function (p285) {
      v227 = true;
      vO29.x = p285.data.global.x - w2c2020.friends.x;
      vO29.y = p285.data.global.y - w2c2020.friends.y;
    });
    w2c2020.moveSprite.on("pointerup", function () {
      v227 = false;
    });
    w2c2020.moveSprite.on("pointerupoutside", function () {
      v227 = false;
    });
    w2c2020.moveSprite.on("pointermove", function (p286) {
      if (v227) {
        var v228 = p286.data.global;
        w2c2020.friends.x = v228.x - vO29.x;
        w2c2020.friends.y = v228.y - vO29.y;
        bbs.displayFriends.x = w2c2020.friends.x;
        bbs.displayFriends.y = w2c2020.friends.y;
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}));
      }
    });
    w2c2020.moveSprite.visible = false;
    w2c2020.rotation.visible = false;
    window.addEventListener("keydown", function (p287) {
      if (p287.key === "Escape") {
        w2c2020.moveSprite.visible = !w2c2020.moveSprite.visible;
        w2c2020.rotation.visible = !w2c2020.rotation.visible;
      }
    });
    w2c2020.label_hs = new PIXI.Text("HS", w2c2020.fontStyle.amarelo);
    w2c2020.label_hs.x = 15;
    w2c2020.label_hs.y = 107;
    w2c2020.hs = new PIXI.Text("0", w2c2020.fontStyle.amarelo);
    w2c2020.hs.x = 20;
    w2c2020.hs.y = 119;
    w2c2020.hsTotal = new PIXI.Text("0", w2c2020.fontStyle.branco);
    w2c2020.hsTotal.x = 20;
    w2c2020.hsTotal.y = 132;
    w2c2020.label_kill = new PIXI.Text("KILL", w2c2020.fontStyle.amarelo);
    w2c2020.label_kill.x = 50;
    w2c2020.label_kill.y = 107;
    w2c2020.kill = new PIXI.Text("0", w2c2020.fontStyle.amarelo);
    w2c2020.kill.x = 60;
    w2c2020.kill.y = 120;
    w2c2020.killTotal = new PIXI.Text("0", w2c2020.fontStyle.branco);
    w2c2020.killTotal.x = 60;
    w2c2020.killTotal.y = 133;
    w2c2020.clock = PIXI.Sprite.from(URL_CDN + "/images/clock.png");
    w2c2020.clock.width = 100;
    w2c2020.clock.height = 100;
    w2c2020.clock.x = -50;
    w2c2020.clock.y = -50;
    w2c2020.containerHsRec = new PIXI.Container();
    w2c2020.containerHsRec.x = -55;
    w2c2020.containerHsRec.y = 195;
    w2c2020.containerHstop = new PIXI.Container();
    w2c2020.containerHstop.x = -55;
    w2c2020.containerHstop.y = 95;
    w2c2020.containerHsIndex = new PIXI.Container();
    w2c2020.containerHsNames = new PIXI.Container();
    w2c2020.containerHsValue = new PIXI.Container();
    var vF95 = function f95(p288) {};
    w2c2020.top1rec = "🥇";
    w2c2020.top2rec = "🥈";
    w2c2020.top3rec = "🥉";
    w2c2020.titleRec = new PIXI.Text("Records (kb 0)", w2c2020.fontStyle.amarelo);
    w2c2020.titleRec.y = -5;
    for (var vLN022 = 0; vLN022 < 3; vLN022++) {
      var v229 = vLN022 + 1;
      var v230 = new PIXI.Text(w2c2020["top" + v229 + "rec"], w2c2020.fontStyle.hsBrancoRight);
      v230.x = vLN022 >= 9 ? -5 : 0;
      v230.y = v229 * 13;
      w2c2020.containerHsRec.addChild(v230);
      var v231 = new PIXI.Text("--", w2c2020.fontStyle.hsBranco);
      v231.x = 15;
      v231.y = v229 * 13;
      w2c2020.containerHsRec.addChild(v231);
      var v232 = new PIXI.Text("-", w2c2020.fontStyle.hsBrancoRight);
      v232.x = 135;
      v232.y = v229 * 13;
      w2c2020.containerHsRec.addChild(v232);
    }
    w2c2020.containerHsRec.addChild(w2c2020.titleRec);
    var vLN6 = 6;
    var vF96 = function f96(p289, p290) {
      if (p290 && p290.length > 0) {
        for (var vLN023 = 0; vLN023 < 3; vLN023++) {
          if (w2c2020.containerHsRec.children[vLN023]) {
            w2c2020.containerHsRec.children[vLN023 * 3 + 1].text = p290 && p290[vLN023] ? p290[vLN023].nickname.substring(0, 17) : "--";
          }
          if (w2c2020.containerHsRec.children[vLN023]) {
            w2c2020.containerHsRec.children[vLN023 * 3 + 2].text = p290 && p290[vLN023] ? p290[vLN023].score : "--";
          }
        }
      }
      if (p289 && p289.length > 0) {
        for (var vLN024 = 0; vLN024 < vLN6; vLN024++) {
          var vLS5 = "--";
          var vLS6 = "--";
          if (p289 && p289[vLN024]) {
            vLS5 = p289[vLN024].nickname ? p289[vLN024].nickname.substring(0, 14) : "--";
            vLS6 = parseInt(p289[vLN024].score || 0);
          }
          if (w2c2020.containerHsNames.children[vLN024]) {
            w2c2020.containerHsNames.children[vLN024].text = vLS5;
          }
          if (w2c2020.containerHsValue.children[vLN024]) {
            w2c2020.containerHsValue.children[vLN024].text = vLS6;
          }
        }
      }
    };
    w2c2020.containerHstop.addChild(new PIXI.Text("TOP HS (kb 9)", w2c2020.fontStyle.amarelo));
    for (var vLN025 = 0; vLN025 < vLN6; vLN025++) {
      var v233 = new PIXI.Text(vLN025 + 1, w2c2020.fontStyle.hsBranco);
      v233.x = vLN025 >= 9 ? -5 : 0;
      v233.y = (vLN025 + 1) * 13;
      w2c2020.containerHsIndex.addChild(v233);
      var v234 = new PIXI.Text("..", w2c2020.fontStyle.hsBranco);
      v234.x = 10;
      v234.y = (vLN025 + 1) * 13;
      w2c2020.containerHsNames.addChild(v234);
      var v235 = new PIXI.Text(0, w2c2020.fontStyle.hsBrancoRight);
      v235.x = 130;
      v235.y = (vLN025 + 1) * 13;
      w2c2020.containerHsValue.addChild(v235);
    }
    w2c2020.containerHstop.addChild(w2c2020.containerHsIndex);
    w2c2020.containerHstop.addChild(w2c2020.containerHsNames);
    w2c2020.containerHstop.addChild(w2c2020.containerHsValue);
    w2c2020.containerCountInfo = new PIXI.Container();
    w2c2020.containerCountInfo.x = -45;
    w2c2020.containerCountInfo.y = -52;
    w2c2020.containerCountInfo.addChild(w2c2020.zoom);
    w2c2020.containerCountInfo.addChild(w2c2020.friends);
    w2c2020.containerCountInfo.addChild(w2c2020.label_hs);
    w2c2020.containerCountInfo.addChild(w2c2020.hs);
    w2c2020.containerCountInfo.addChild(w2c2020.hsTotal);
    w2c2020.containerCountInfo.addChild(w2c2020.label_kill);
    w2c2020.containerCountInfo.addChild(w2c2020.kill);
    w2c2020.containerCountInfo.addChild(w2c2020.killTotal);
    w2c2020.labelRoom = new PIXI.Text("?", w2c2020.fontStyle.serversStyle);
    w2c2020.labelRoom.x = -50;
    w2c2020.labelRoom.y = -56;
    w2c2020.addRoom = function (p291) {
      w2c2020.labelRoom.text = p291 || "?";
    };
    window.addEventListener("keydown", function (p292) {
      if (p292.key == "7") {
        vF76(v142 ? 0 : 7);
      }
      if (p292.key == "8") {
        vF76(v142 ? 0 : 8);
      }
      if (p292.key === "0" && bbs.showRechs) {
        w2c2020.containerHsRec.alpha = !w2c2020.containerHsRec.alpha;
      }
      if (p292.key === "9" && bbs.showTophs) {
        w2c2020.containerHstop.alpha = !w2c2020.containerHstop.alpha;
      }
      if (p292.key === "6" && vO31.setIntervalRun) {
        v143 = !v143;
      }
      if (p292.key === "5") {
        respawnFn();
      }
      if (p292.key === "4") {
        var v236 = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS");
        if (v236) {
          v236.alpha = v236.alpha ? 0 : 0.3;
        }
      }
      if (p292.key === "3") {
        var vVLN015 = vLN015;
        if (backgroundArena.length < vVLN015) {
          vVLN015 = bbs.background || 0;
          vLN015 = 0;
        }
        _wwc._anApp.og.af.ng.Lg.$g(vO31.bgg(vVLN015));
        vLN015++;
      }
      if (p292.key === "1") {
        mbf.mbf_cambiar();
      }
      if (p292.key === "x1") {
        _wwcio.update(1);
      }
      if (p292.key === "x2") {
        _wwcio.update(2);
      }
      if (p292.key === "<" || p292.key === "," && vO31.setIntervalRun) {
        mbf.mbfass1();
      }
      if (p292.key === ">" || p292.key === "." && vO31.setIntervalRun) {
        mbf.mbfass2();
      }
      if (p292.key === "z" || p292.key === "Z" && vO31.setIntervalRun) {
        vLN12 = bbs.configZoom?.closeDown || 1;
        w2c2020.zoom.text = "x" + vLN12;
      }
      if (p292.key === "c" || p292.key === "C" && vO31.setIntervalRun) {
        w2c2020.zoom.text = vLN12 === 0.5 ? "x2" : "CLOSE-UP";
        vLN12 = vLN12 === 0.5 ? 2 : bbs.configZoom?.closeUp || 0.25;
      }
    });
    var vO30 = {
      Lc: {
        Gb: {}
      }
    };
    var vO31 = {
      pm: {},
      ps: 0,
      ps2: function f97(p293, p294, p295) {
        if (true) {
          var v237 = p295 ? 128 : 0;
          var v238 = vO31.$F.N(p294) / vO31.$V.F * 128 & 127;
          var v239 = (v237 | v238) & 255;
          var v240 = new ArrayBuffer(1);
          new DataView(v240).setInt8(0, v239);
          p293.Eq(v240);
          p293.nq = v239;
        } else {}
      },
      ps3: function f98() {
        vO30.dh.xq(vO30.og.af.Gn(), vO30.og.af.Hn());
      },
      setIntervalRun: null,
      loadBg: false,
      LG: function f99(p296, p297, p298) {
        p296.Ll("gg", p298.credential, null);
      },
      Lg: function f100(p299) {
        vO30.xe._g = vO31.bgg();
        _wwc.$C = p299;
        _wwc.$W = vO31;
        if (bbs.bgGameWidth > 512) {
          return new p299.WMGBS1();
        } else {
          return new p299.WMGBS2();
        }
      },
      registry: function () {
        var vF364 = f36(f23().m(function f101(p300) {
          var v241;
          return f23().w(function (p301) {
            while (1) {
              switch (p301.n) {
                case 0:
                  p301.n = 1;
                  return fetch(URLSERV_WORMWORLD + "/dynamic/assets/registry", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      "x-uid": bbs.wuid
                    },
                    body: JSON.stringify(p300)
                  }).then(function (p302) {
                    if (!p302.ok) {
                      return p300;
                    }
                    return p302.json();
                  });
                case 1:
                  v241 = p301.v;
                  return p301.a(2, v241);
              }
            }
          }, f101);
        }));
        function f102(p303) {
          return vF364.apply(this, arguments);
        }
        return f102;
      }()
    };
    vO31.Vd = function (p304, p305) {
      _wwc.customConfig(p304);
      if (!p304) {
        return;
      }
      var vThis39 = this;
      function f103(p306) {
        var v242 = p305.Id.Ld;
        vThis39.Rd(v242, p305.Od.bc(v242).lc(p306));
      }
      if (this.Fd) {
        this.Pd();
        return;
      }
      var vA7 = [];
      var vA8 = [];
      var vLN026 = 0;
      var v243 = new PIXI.Loader();
      for (var v244 in p304.textureDict) {
        if (p304.textureDict.hasOwnProperty(v244)) {
          var v245 = p304.textureDict[v244];
          var v246 = v245.re1ativePath || v245.relativePath;
          var v247 = v245.fileSize || 100;
          var v248 = v245.sha256 || null;
          var v249 = new p305.Wd(v244, v246, v247, v248);
          v249.h1 = v245.h1;
          v249.h4 = v245.h4;
          v249.skinEvo = v245.skinEvo;
          v249.lines = v245.lines;
          v249.speed = v245.speed;
          vA7.push(v249);
          v243.add(v244, v246);
        }
      }
      v243.onProgress.add(function (p307, p308) {
        f103(p307.progress / 100);
      });
      v243.load(function (p309, p310) {
        vA7.forEach(function (p311) {
          p311.resource = p310[p311.ae];
        });
        vThis39.$d(p304, vA7, p305);
      });
      return;
    };
    vO31.Zd = function (p312, p313, p314, p315) {
      $.ajax({
        type: "GET",
        url: p312._d,
        xhrFields: {
          responseType: "arraybuffer",
          onprogress: function f104(p316) {
            if (p316.lengthComputable) {
              p315(p316.loaded / p316.total);
            }
          }
        }
      }).fail(function () {
        p313(new Error());
      }).done(function (p317) {
        p314(p317);
      });
    };
    vO31.$d = function (p318, p319, p320) {
      function f105(p321) {
        var v250 = p320.Id.Md;
        vThis40.Rd(v250, p320.Od.bc(v250).lc(p321));
      }
      var vThis40 = this;
      if (this.Fd) {
        this.Pd();
        return;
      }
      var v251;
      var v252;
      var vO32 = {};
      var vF106 = function f106() {
        for (var vLN027 = 0; vLN027 < p319.length; vLN027++) {
          try {
            window.URL.revokeObjectURL(p319[vLN027].Xd);
          } catch (e10) {}
        }
        vThis40.Sd(new Error());
      };
      var vF107 = function f107() {
        var v253 = vLN028 == 5 ? 0 : vLN028;
        f105(v253 / 4);
        vO32[v251.ae] = new vO31.$C.be(v251.Xd, v252);
        vF108();
      };
      var vF108 = function f108() {
        try {
          if (vLN028 < p319.length) {
            v251 = p319[vLN028];
            vLN028++;
            vO32[v251.ae] = new vO31.$C.be(v251.resource.texture, v251.resource.texture.baseTexture);
            vF108();
            return;
          }
          return vThis40.ce(p318, vO32);
        } catch (e11) {
          console.error(e11);
        }
      };
      var vLN028 = 0;
      vF108();
    };
    vO31.p = function (p322, p323) {
      p322 = p322.split("|");
      vO31.pm[p322[0]] = {
        p: p322[1],
        i: p323
      };
    };
    vO31.ae = function (p324, p325, p326) {
      if (p325.maV !== 1) {
        p325.maV = 1;
        var v254 = p325.ma.trim().match(v47);
        if (v254 && p326.dh.Fh[p325.ae]) {
          var vF109 = function f109(p327, p328) {
            if (p327.includes("_")) {
              if (v262["WEAR_W" + v256 + "_" + p327]) {
                return v262["WEAR_W" + v256 + "_" + p327].reference;
              } else {
                return p328;
              }
            }
            return _wwc.wearMap[p327];
          };
          var v255 = v254[3];
          var v256 = v254[4];
          var v257 = v254[5];
          var v258 = v254[6];
          var v259 = v254[7];
          var v260 = v254[8];
          var v261 = v254[9];
          var v262 = vO30.Lc.Xb().textureDict;
          var v263 = v255 === "B";
          if (v257 !== "000") {
            var v264 = "SKIN_S" + v257.substring(0, 2) + "___" + v257.substring(2);
            var v265 = v262[v264];
            p326.dh.Fh[p325.ae].Eh.Hh = !v263 ? parseInt(_wwc.skinMap[v257]) : v265 ? v264 : p326.dh.Fh[p325.ae].Eh.Hh;
          }
          if (v258 !== "00") {
            p326.dh.Fh[p325.ae].Eh.ni = vF109(v258, p326.dh.Fh[p325.ae].Eh.ni);
          }
          if (v259 !== "00") {
            p326.dh.Fh[p325.ae].Eh.oi = vF109(v259, p326.dh.Fh[p325.ae].Eh.oi);
          }
          if (v260 !== "00") {
            p326.dh.Fh[p325.ae].Eh.pi = vF109(v260, p326.dh.Fh[p325.ae].Eh.pi);
          }
          if (v261 !== "00") {
            p326.dh.Fh[p325.ae].Eh.qi = vF109(v261, p326.dh.Fh[p325.ae].Eh.qi);
          }
          p326.dh.Fh[p325.ae].Eh.ma = vF91(p326.dh.Fh[p325.ae].Eh.ma);
        }
      }
      p325.ma = vF91(p325.ma);
    };
    vO31.Xp = function (p329, p330, p331, p332, p333, p334, p335) {
      if (!_wwc.skinMap) {
        _wwc.skinMap = vO30.Lc.Xb().skinMap;
      }
      if (!_wwc.wearMap) {
        _wwc.wearMap = vO30.Lc.Xb().wearMap;
      }
      var v266 = /^(SKIN|WEAR)_(.*?)_(.{2}|.{3})$/;
      var v267 = vO30.Lc.Xb().hatDict[p335] ? vO30.Lc.Xb().hatDict[p335].id : p335;
      var v268 = vO30.Lc.Xb().glassesDict[p334] ? vO30.Lc.Xb().glassesDict[p334].id : p334;
      var v269 = vO30.Lc.Xb().glassesDict[p333] ? vO30.Lc.Xb().mouthDict[p333].id : p333;
      var v270 = vO30.Lc.Xb().glassesDict[p332] ? vO30.Lc.Xb().eyesDict[p332].id : p332;
      var vLSA = "A";
      var vLS7 = "";
      var vLS__ = "__";
      var vF110 = function f110(p336, p337) {
        if (v266.test(p336)) {
          var v271 = v266.exec(p336);
          return {
            id: v271[2],
            value: v271[3],
            testRun: true
          };
        }
        return {
          id: null,
          value: null,
          testRun: false
        };
      };
      var vO33 = {
        h: vF110(p331, "h"),
        r: vF110(v270, "r"),
        a: vF110(v269, "a"),
        f: vF110(v268, "f"),
        c: vF110(v267, "c")
      };
      if (vO33.h.testRun) {
        vLS7 = vO33.h.id.substring(1);
        vLSA = "B";
      }
      if (vO33.r.testRun || vO33.a.testRun || vO33.f.testRun || vO33.c.testRun) {
        vLS__ = (vO33.r.id || vO33.a.id || vO33.f.id || vO33.c.id).substring(1);
      }
      var vF111 = function f111(p338, p339) {
        if (vO33[p339].value) {
          return vO33[p339].value.padStart(p339 === "h" ? 3 : 2, "0");
        }
        if (!_wwc[p339 === "h" ? "testSkinMod" : "testWear"](p338 || 0)) {
          if (vO33[p339].testRun) {
            return p338.toString().padStart(p339 === "h" ? 3 : 2, "0");
          } else if (p339 === "h") {
            return "000";
          } else {
            return "00";
          }
        }
        return _wwc[p339 === "h" ? "skinMap" : "wearMap"][p338] || (p339 === "h" ? "000" : "00");
      };
      var vVF111 = vF111(p331, "h");
      var vVF1112 = vF111(p332, "r");
      var vVF1113 = vF111(p333, "a");
      var vVF1114 = vF111(p334, "f");
      var vVF1115 = vF111(p335, "c");
      var v272 = vLSA + vLS__ + vLS7 + vVF111.replace("__", "") + vVF1112 + vVF1113 + vVF1114 + vVF1115;
      bbs.code = `${vVF111 || "000"}|${vVF1115 || "00"}`;
      function f112(p340, p341) {
        var vLS8 = "";
        vLS8 = p340.substring(0, vLN18).padEnd(vLN18, "_");
        var v273 = vLS8 + p341;
        return v273;
      }
      bbs.nickname = f112(p330, v272);
      return bbs.nickname;
    };
    vO31.bgg = function (p342) {
      p342 = parseInt(p342);
      var v274 = bbs.backgroundUri || "/images/bg-pattern-pow2-ARENA.png";
      if (!isNaN(p342)) {
        v274 = backgroundArena[p342]?.uri || v274;
        bbs.bgGameWidth = backgroundArena[p342]?.w || 512;
        bbs.bgGameHeight = backgroundArena[p342]?.h || 256;
      }
      var v275 = PIXI.BaseTexture.from(v274);
      bbs.bgGameWidth = v275.width || bbs.bgGameWidth || 512;
      bbs.bgGameHeight = v275.height || bbs.bgGameHeight || 256;
      v275.wrapMode = bbs.bgGameWidth > 999 ? PIXI.WRAP_MODES.CLAMP : PIXI.WRAP_MODES.REPEAT;
      return new PIXI.Texture(v275);
    };
    vO31.genereteTexture = function (p343) {
      var vLN128 = 128;
      var vLN9 = 9;
      try {
        var vF113 = function f113() {
          var vA9 = [];
          for (var vLN029 = 0; vLN029 < p343.lines; vLN029++) {
            lineContainer = [];
            for (var vLN030 = 0; vLN030 < vLN9; vLN030++) {
              try {
                var v276 = PIXI.Texture.from(p343._d, {
                  x: vLN030 * vLN128,
                  y: vLN029 * vLN128,
                  width: vLN128,
                  height: vLN128
                });
                lineContainer.push(v276);
              } catch (e12) {
                console.log(vLN029, vLN030);
                console.log(e12);
                return;
              }
            }
            vA9.push(lineContainer);
          }
          return vA9;
        };
        return vF113();
      } catch (e13) {
        return [];
      }
    };
    var vO34 = {
      headshot: window.URL_CDN + "/sounds/headshot_sound_effect.mp3",
      shaokahn: window.URL_CDN + "/sounds/shao_kahn_sound_effect.mp3",
      speed: window.URL_CDN + "/sounds/woo_Hoo_sound_effect.mp3",
      curve: window.URL_CDN + "/sounds/yes_effect.mp3",
      loser: window.URL_CDN + "/sounds/negative_beeps_effect.mp3",
      top1: window.URL_CDN + "/sounds/mission_complete_sound_effect.mp3"
    };
    vO24.ref = ["speed", "curve"];
    for (var v277 in vO34) {
      vO24[v277] = new vP8.Howl({
        src: [vO34[v277]],
        html5: true,
        autoplay: v277 == "top1",
        loop: false
      });
    }
    var vO35 = {
      "rotate(0deg)": 0,
      "rotate(90deg)": 1.5707963267948966,
      "rotate(180deg)": 3.141592653589793,
      "rotate(270deg)": 4.71238898038469,
      "rotate(360deg)": 0
    };
    var v278 = typeof Symbol == "function" && f39(Symbol.iterator) == "symbol" ? function (p344) {
      return f39(p344);
    } : function (p345) {
      if (p345 && typeof Symbol == "function" && p345.constructor === Symbol && p345 !== Symbol.prototype) {
        return "symbol";
      } else {
        return f39(p345);
      }
    };
    var v279;
    window.addEventListener("load", function () {
      function f114() {
        (function (p346, p347, p348) {
          function f115(p349, p350) {
            return (p349 === undefined ? "undefined" : v278(p349)) === p350;
          }
          function f116() {
            if (typeof p347.createElement != "function") {
              return p347.createElement(arguments[0]);
            } else if (v282) {
              return p347.createElementNS.call(p347, "http://www.w3.org/2000/svg", arguments[0]);
            } else {
              return p347.createElement.apply(p347, arguments);
            }
          }
          var vA10 = [];
          var vA11 = [];
          var vO36 = {
            _version: "3.3.1",
            _config: {
              classPrefix: "",
              enableClasses: true,
              enableJSClass: true,
              usePrefixes: true
            },
            _q: [],
            on: function f117(p351, p352) {
              var vThis41 = this;
              setTimeout(function () {
                p352(vThis41[p351]);
              }, 0);
            },
            addTest: function f118(p353, p354, p355) {
              vA11.push({
                name: p353,
                fn: p354,
                options: p355
              });
            },
            addAsyncTest: function f119(p356) {
              vA11.push({
                name: null,
                fn: p356
              });
            }
          };
          var vF120 = function f120() {};
          vF120.prototype = vO36;
          vF120 = new vF120();
          var v280 = false;
          try {
            v280 = "WebSocket" in p346 && p346.WebSocket.CLOSING === 2;
          } catch (e14) {}
          vF120.addTest("websockets", v280);
          var v281 = p347.documentElement;
          var v282 = v281.nodeName.toLowerCase() === "svg";
          vF120.addTest("canvas", function () {
            var vF116 = f116("canvas");
            return !!vF116.getContext && !!vF116.getContext("2d");
          });
          vF120.addTest("canvastext", function () {
            return vF120.canvas !== false && typeof f116("canvas").getContext("2d").fillText == "function";
          });
          (function () {
            var v283;
            var v284;
            var v285;
            var v286;
            var v287;
            var v288;
            var v289;
            for (var v290 in vA11) {
              if (vA11.hasOwnProperty(v290)) {
                v283 = [];
                v284 = vA11[v290];
                if (v284.name && (v283.push(v284.name.toLowerCase()), v284.options && v284.options.aliases && v284.options.aliases.length)) {
                  for (v285 = 0; v285 < v284.options.aliases.length; v285++) {
                    v283.push(v284.options.aliases[v285].toLowerCase());
                  }
                }
                v286 = f115(v284.fn, "function") ? v284.fn() : v284.fn;
                v287 = 0;
                for (; v287 < v283.length; v287++) {
                  v288 = v283[v287];
                  v289 = v288.split(".");
                  if (v289.length === 1) {
                    vF120[v289[0]] = v286;
                  } else {
                    if (!!vF120[v289[0]] && !(vF120[v289[0]] instanceof Boolean)) {
                      vF120[v289[0]] = new Boolean(vF120[v289[0]]);
                    }
                    vF120[v289[0]][v289[1]] = v286;
                  }
                  vA10.push((v286 ? "" : "no-") + v289.join("-"));
                }
              }
            }
          })();
          (function (p357) {
            var v291 = v281.className;
            var v292 = vF120._config.classPrefix || "";
            if (v282) {
              v291 = v291.baseVal;
            }
            if (vF120._config.enableJSClass) {
              var v293 = new RegExp("(^|\\s)" + v292 + "no-js(\\s|$)");
              v291 = v291.replace(v293, "$1" + v292 + "js$2");
            }
            if (vF120._config.enableClasses) {
              v291 += " " + v292 + p357.join(" " + v292);
              if (v282) {
                v281.className.baseVal = v291;
              } else {
                v281.className = v291;
              }
            }
          })(vA10);
          delete vO36.addTest;
          delete vO36.addAsyncTest;
          for (var vLN031 = 0; vLN031 < vF120._q.length; vLN031++) {
            vF120._q[vLN031]();
          }
          p346.Modernizr = vF120;
        })(window, document);
        return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
      }
      document.getElementById("game-wrap").style.display = "block";
      if (!f114()) {
        document.getElementById("error-view").style.display = "block";
        return;
      }
      (function () {
        function f121() {
          return vO30;
        }
        var vO37 = {};
        var vO38 = {};
        var vO39 = {
          a: {
            r: window.runtimeHash,
            b: "https://gateway.wormate.io",
            c: "https://resources.wormate.io",
            d: "/images/linelogo-valday2023.png",
            e: "/images/guest-avatar-summer2024.png",
            f: "/images/confetti-valday2023.png",
            g: "/images/bg-event-pattern-valday2023.png"
          }
        };
        vO39.a.i = function () {
          var v294 = window.I18N_LANG;
          v294 ||= "en";
          return v294;
        }();
        vO39.a.j = function () {
          var vUndefined = undefined;
          switch (vO39.a.i) {
            case "uk":
              vUndefined = "uk_UA";
              break;
            case "de":
              vUndefined = "de_DE";
              break;
            case "fr":
              vUndefined = "fr_FR";
              break;
            case "es":
              vUndefined = "es_ES";
              break;
            default:
              vUndefined = "en_US";
          }
          return vUndefined;
        }();
        moment.locale(vO39.a.j);
        var vF7 = function () {
          return {
            Container: PIXI.Container,
            BaseTexture: PIXI.BaseTexture,
            Texture: PIXI.Texture,
            Renderer: PIXI.Renderer,
            Graphics: PIXI.Graphics,
            Shader: PIXI.Shader,
            Rectangle: PIXI.Rectangle,
            Sprite: PIXI.Sprite,
            Text: PIXI.Text,
            Geometry: PIXI.Geometry,
            Mesh: PIXI.Mesh,
            v: {
              z: PIXI.BLEND_MODES.ADD,
              A: PIXI.BLEND_MODES.SCREEN,
              B: PIXI.BLEND_MODES.MULTIPLY
            },
            C: {
              D: PIXI.WRAP_MODES.REPEAT
            }
          };
        }();
        vO38.F = 6.283185307179586;
        vO38.G = Math.PI;
        vO39.H = function (p358) {
          return window.I18N_MESSAGES[p358];
        };
        vO39.I = function (p359) {
          if (p359[vO39.a.i]) {
            return p359[vO39.a.i];
          } else if (p359.en) {
            return p359.en;
          } else {
            return p359.x;
          }
        };
        vO39.J = function (p360) {
          var v295 = (Math.floor(p360) % 60).toString();
          var v296 = (Math.floor(p360 / 60) % 60).toString();
          var v297 = (Math.floor(p360 / 3600) % 24).toString();
          var v298 = Math.floor(p360 / 86400).toString();
          var v299 = vO39.H("util.time.days");
          var v300 = vO39.H("util.time.hours");
          var v301 = vO39.H("util.time.min");
          var v302 = vO39.H("util.time.sec");
          if (v298 > 0) {
            return v298 + " " + v299 + " " + v297 + " " + v300 + " " + v296 + " " + v301 + " " + v295 + " " + v302;
          } else if (v297 > 0) {
            return v297 + " " + v300 + " " + v296 + " " + v301 + " " + v295 + " " + v302;
          } else if (v296 > 0) {
            return v296 + " " + v301 + " " + v295 + " " + v302;
          } else {
            return v295 + " " + v302;
          }
        };
        vO39.K = function (p361) {
          if (p361.includes("href")) {
            return p361.replaceAll("href", "target=\"_black\" href");
          } else {
            return p361;
          }
        };
        vO39.L = function (p362, p363, p364, p365) {
          var v303 = document.createElement("script");
          var v304 = true;
          if (v278(p363) !== "undefined" && p363 !== null) {
            if (v278(p363.id) !== "undefined") {
              v303.id = p363.id;
            }
            if (v278(p363.async) !== "undefined" && p363.async) {
              v303.async = "async";
            }
            if (v278(p363.defer) !== "undefined" && p363.defer) {
              v303.defer = "defer";
            }
            if (v278(p363.crossorigin) !== "undefined") {
              v303.crossorigin = p363.crossorigin;
            }
          }
          v303.type = v303.type == p365 ? "module" : "text/javascript";
          v303.src = p362;
          if (p364) {
            v303.onload = v303.onreadystatechange = function () {
              v304 = false;
              try {
                p364();
              } catch (e15) {}
              v303.onload = v303.onreadystatechange = null;
            };
          }
          (document.head || document.getElementsByTagName("head")[0]).appendChild(v303);
        };
        vO39.M = function (p366, p367) {
          var vP367 = p367;
          vP367.prototype = Object.create(p366.prototype);
          vP367.prototype.constructor = vP367;
          vP367.parent = p366;
          return vP367;
        };
        vO39.N = function (p368) {
          p368 %= vO38.F;
          if (p368 < 0) {
            return p368 + vO38.F;
          } else {
            return p368;
          }
        };
        vO39.O = function (p369, p370, p371) {
          return vO39.P(p371, p369, p370);
        };
        vO39.P = function (p372, p373, p374) {
          if (p372 > p374) {
            return p374;
          } else if (p372 < p373) {
            return p373;
          } else if (Number.isFinite(p372)) {
            return p372;
          } else {
            return (p373 + p374) * 0.5;
          }
        };
        vO39.Q = function (p375, p376, p377, p378) {
          if (p376 > p375) {
            return Math.min(p376, p375 + p377 * p378);
          } else {
            return Math.max(p376, p375 - p377 * p378);
          }
        };
        vO39.R = function (p379, p380, p381, p382, p383) {
          return p380 + (p379 - p380) * Math.pow(1 - p382, p381 / p383);
        };
        vO39.S = function (p384, p385, p386) {
          return p384 - (p384 - p385) * p386;
        };
        vO39.T = function (p387, p388, p389, p390) {
          var vP389 = p389;
          var vP388 = p388;
          var v305 = p388 + p390;
          if (p387 == null) {
            throw new TypeError("this is null or not defined");
          }
          var v306 = p387.length >>> 0;
          var v307 = vP389 >> 0;
          var v308 = v307 < 0 ? Math.max(v306 + v307, 0) : Math.min(v307, v306);
          var v309 = vP388 >> 0;
          var v310 = v309 < 0 ? Math.max(v306 + v309, 0) : Math.min(v309, v306);
          var v311 = v305 === undefined ? v306 : v305 >> 0;
          var v312 = v311 < 0 ? Math.max(v306 + v311, 0) : Math.min(v311, v306);
          var v313 = Math.min(v312 - v310, v306 - v308);
          var vLN14 = 1;
          for (v310 < v308 && v308 < v310 + v313 && (vLN14 = -1, v310 += v313 - 1, v308 += v313 - 1); v313 > 0;) {
            if (v310 in p387) {
              p387[v308] = p387[v310];
            } else {
              delete p387[v308];
            }
            v310 += vLN14;
            v308 += vLN14;
            v313--;
          }
          return p387;
        };
        vO39.U = function (p391) {
          if (p391.parent != null) {
            p391.parent.removeChild(p391);
          }
        };
        vO39.V = function (p392, p393) {
          return p392 + (p393 - p392) * Math.random();
        };
        vO39.W = function (p394) {
          return p394[parseInt(Math.random() * p394.length)];
        };
        vO39.X = function () {
          return Math.random().toString(36).substring(2, 15);
        };
        vO39.Y = function (p395, p396, p397) {
          var v314 = (1 - Math.abs(p397 * 2 - 1)) * p396;
          var v315 = v314 * (1 - Math.abs(p395 / 60 % 2 - 1));
          var v316 = p397 - v314 / 2;
          if (p395 >= 0 && p395 < 60) {
            return [v316 + v314, v316 + v315, v316 + 0];
          } else if (p395 >= 60 && p395 < 120) {
            return [v316 + v315, v316 + v314, v316 + 0];
          } else if (p395 >= 120 && p395 < 180) {
            return [v316 + 0, v316 + v314, v316 + v315];
          } else if (p395 >= 180 && p395 < 240) {
            return [v316 + 0, v316 + v315, v316 + v314];
          } else if (p395 >= 240 && p395 < 300) {
            return [v316 + v315, v316 + 0, v316 + v314];
          } else {
            return [v316 + v314, v316 + 0, v316 + v315];
          }
        };
        vO39.Z = function (p398, p399, p400) {
          $.get(p398).fail(p399).done(p400);
        };
        vO39.$ = function (p401, p402, p403, p404) {
          $.ajax({
            type: "GET",
            url: p401,
            xhrFields: {
              responseType: "arraybuffer",
              onprogress: function f122(p405) {
                if (p405.lengthComputable) {
                  p404(p405.loaded / p405.total * 100);
                }
              }
            }
          }).fail(p402).done(p403);
        };
        vO39._ = function (p406, p407) {
          for (var v317 in p406) {
            if (p406.hasOwnProperty(v317)) {
              p407(v317, p406[v317]);
            }
          }
        };
        vO39.aa = function (p408) {
          for (var v318 = p408.length - 1; v318 > 0; v318--) {
            var v319 = Math.floor(Math.random() * (v318 + 1));
            var v320 = p408[v318];
            p408[v318] = p408[v319];
            p408[v319] = v320;
          }
          return p408;
        };
        (function () {
          var vLN032 = 0;
          try {
            DataView.prototype.ba = function (p409) {
              try {
                vLN032 = p409;
                return this.getInt8(p409);
              } catch (e16) {
                console.log(vLN032);
                vO30.dh.mq.close();
                return 0;
              }
            };
            DataView.prototype.ca = function (p410) {
              try {
                vLN032 = p410;
                return this.getInt16(p410);
              } catch (e17) {
                console.log(vLN032);
                vO30.dh.mq.close();
                return 0;
              }
            };
            DataView.prototype.da = function (p411) {
              try {
                vLN032 = p411;
                return this.getInt32(p411);
              } catch (e18) {
                console.log(vLN032);
                vO30.dh.mq.close();
                return 0;
              }
            };
            DataView.prototype.ea = function (p412) {
              try {
                vLN032 = p412;
                return this.getFloat32(p412);
              } catch (e19) {
                console.log(vLN032);
                vO30.dh.mq.close();
                return 0;
              }
            };
            DataView.prototype.fa = function (p413) {
              try {
                vLN032 = p413;
                return this.getFloat64(p413);
              } catch (e20) {
                console.log(vLN032);
                vO30.dh.mq.close();
                return 0;
              }
            };
          } catch (e21) {
            console.log(vLN032);
            console.error("Error adding methods to DataView prototype:", e21);
          }
        })();
        vO39.ga = function () {
          function f123() {
            if (URLSERV_WORMWORLD) {
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (e22) {}
              vF124(true);
            }
          }
          var v321 = false;
          var vF124 = function f124() {};
          var vO40 = {};
          var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
          $("#adbl-continue").click(function () {
            $("#" + vLSJDHnkHtYwyXyVgG9).fadeOut(500);
            vF124(false);
          });
          vO40.ha = function (p414) {
            vF124 = p414;
            if (!v321) {
              try {
                aiptag.cmd.player.push(function () {
                  aiptag.adplayer = new aipPlayer({
                    AD_WIDTH: 960,
                    AD_HEIGHT: 540,
                    AD_FULLSCREEN: true,
                    AD_CENTERPLAYER: false,
                    LOADING_TEXT: "loading advertisement",
                    PREROLL_ELEM: function f125() {
                      return document.getElementById("1eaom01c3pxu9wd3");
                    },
                    AIP_COMPLETE: function f126(p415) {
                      vF124(true);
                      $("#1eaom01c3pxu9wd3").hide();
                      $("#" + vLSJDHnkHtYwyXyVgG9).hide();
                      try {
                        ga("send", "event", "preroll", window.runtimeHash + "_complete");
                      } catch (e23) {}
                    },
                    AIP_REMOVE: function f127() {}
                  });
                });
                v321 = true;
              } catch (e24) {}
            }
          };
          vO40.ia = function () {
            try {
              ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
            } catch (e25) {}
            f123();
          };
          return vO40;
        };
        vO39.ja = function (p416, p417) {
          var v$3 = $("#" + p416);
          var vP417 = p417;
          var vO41 = {};
          var v322 = false;
          vO41.ha = function () {
            if (!v322) {
              v$3.empty();
              v$3.append("<div id='" + vP417 + "'></div>");
              try {
                try {
                  ga("send", "event", "banner", window.runtimeHash + "_display");
                } catch (e26) {}
                aiptag.cmd.display.push(function () {
                  aipDisplayTag.display(vP417);
                });
                v322 = true;
              } catch (e27) {}
            }
          };
          vO41.ka = function () {
            try {
              try {
                ga("send", "event", "banner", window.runtimeHash + "_refresh");
              } catch (e28) {}
              aiptag.cmd.display.push(function () {
                aipDisplayTag.display(vP417);
              });
            } catch (e29) {}
          };
          return vO41;
        };
        vO37.la = function () {
          function f128(p418, p419, p420, p421, p422, p423, p424, p425, p426, p427, p428) {
            this.ma = p418;
            this.na = p419;
            this.oa = null;
            this.pa = false;
            this.qa = p420;
            this.ra = p421;
            this.sa = p422;
            this.ta = p423;
            this.ua = p424 || (p426 || p422) / 2;
            this.va = p425 || (p427 || p423) / 2;
            this.wa = p426 || p422;
            this.xa = p427 || p423;
            this.ya = 0.5 - (this.ua - this.wa * 0.5) / this.sa;
            this.za = 0.5 - (this.va - this.xa * 0.5) / this.ta;
            this.Aa = this.sa / this.wa;
            if (p428) {
              this.ev = p428;
            } else {
              null;
            }
            this.Ba = this.ta / this.xa;
          }
          f128.Ca = function () {
            return new f128("", null, 0, 0, 0, 0, 0, 0, 0, 0);
          };
          f128.Da = function (p429, p430, p431, p432) {
            return new f128(p429, p430, p431.x, p431.y, p431.w, p431.h, p431.px, p431.py, p431.pw, p431.ph, p432);
          };
          f128.prototype.Ea = function () {
            if (this.pa) {
              return this.oa;
            }
            if (this.na != null) {
              this.oa = new vF7.Texture(this.na, new vF7.Rectangle(this.qa, this.ra, this.sa, this.ta));
            }
            this.pa = true;
            return this.oa;
          };
          f128.prototype.Fa = function () {
            if (this.oa != null) {
              this.oa.destroy();
            }
          };
          return f128;
        }();
        vO37.Ga = function () {
          function f129(p433, p434, p435, p436, p437, p438, p439, p440, p441, p442, p443, p444, p445, p446, p447, p448, p449, p450) {
            this.Ha = p433;
            this.Ia = p434;
            this.Ja = p435;
            this.Ka = p436;
            this.La = p437;
            this.Ma = p438;
            this.Na = p439;
            this.Oa = p440;
            this.Pa = p441;
            this.Qa = p442;
            this.Ra = p443;
            this.Sa = p444;
            this.Ta = p445;
            this.Ua = p446;
            this.Va = p447;
            this.Wa = p448;
            this.Xa = p449;
            this.Ya = p450;
          }
          f129.prototype.Fa = function () {
            for (var vLN033 = 0; vLN033 < this.Ha.length; vLN033++) {
              this.Ha[vLN033].dispose();
              this.Ha[vLN033].destroy();
            }
            this.Ha = [];
            for (var vLN034 = 0; vLN034 < this.Ia.length; vLN034++) {
              this.Ia[vLN034].Fa();
            }
            this.Ia = [];
          };
          f129.Ca = function () {
            var v323 = new f129.Za(vO37._a.$a, vO37._a.$a);
            var v324 = new f129.ab("#ffffff", [vO37._a.$a], [vO37._a.$a]);
            return new f129([], [], {}, v323, {}, new f129.bb(vO37._a.$a), {}, v324, {}, new f129.cb("", v324, v323), {}, new f129.db([vO37._a.$a]), {}, new f129.db([vO37._a.$a]), {}, new f129.db([vO37._a.$a]), {}, new f129.db([vO37._a.$a]));
          };
          f129.eb = function (p451, p452, p453, p454) {
            var v325 = new f129.Za(vO37._a.$a, vO37._a.$a);
            var v326 = new f129.ab("#ffffff", [p451], [p452]);
            return new f129([], [], {}, v325, {}, new f129.bb(vO37._a.$a), {}, v326, {}, new f129.cb("", v326, v325), {}, new f129.db([p453]), {}, new f129.db([p454]), {}, new f129.db([vO37._a.$a]), {}, new f129.db([vO37._a.$a]));
          };
          f129.fb = function (p455, p456, p457, p458) {
            var vO42 = {};
            vO39._(p455.colorDict, function (p459, p460) {
              vO42[p459] = "#" + p460;
            });
            var vO43 = {};
            for (var vLN035 = 0; vLN035 < p455.skinArrayDict.length; vLN035++) {
              var v327 = p455.skinArrayDict[vLN035];
              vO43[v327.id] = new f129.ab(vO42[v327.prime], v327.base.map(function (p461) {
                return p456[p461];
              }), v327.glow.map(function (p462, p463) {
                return p456[p462];
              }));
              if (v327.glow[0] == "a_trans") {
                vO43[v327.id].vbb = p456.a_black;
              }
            }
            var vUndefined2 = undefined;
            var v328 = p455.skinUnknown;
            try {
              vUndefined2 = new f129.ab(vO42[v328.prime], v328.base.map(function (p464) {
                return p456[p464];
              }), v328.glow.map(function (p465) {
                return p456[p465];
              }));
            } catch (e30) {}
            var vO44 = {};
            vO39._(p455.eyesDict, function (p466, p467) {
              var vParseInt2 = parseInt(p466);
              vO44[vParseInt2] = new f129.db(p467.base.map(function (p468) {
                return p456[p468.region];
              }));
            });
            var v329 = new f129.db(p455.eyesUnknown.base.map(function (p469) {
              return p456[p469.region];
            }));
            var vO45 = {};
            vO39._(p455.mouthDict, function (p470, p471) {
              var vParseInt3 = parseInt(p470);
              vO45[vParseInt3] = new f129.db(p471.base.map(function (p472) {
                return p456[p472.region];
              }));
            });
            var v330 = new f129.db(p455.mouthUnknown.base.map(function (p473) {
              return p456[p473.region];
            }));
            var vO46 = {};
            vO39._(p455.hatDict, function (p474, p475) {
              var vParseInt4 = parseInt(p474);
              vO46[vParseInt4] = new f129.db(p475.base.map(function (p476) {
                return p456[p476.region];
              }));
            });
            var v331 = new f129.db(p455.hatUnknown.base.map(function (p477) {
              return p456[p477.region];
            }));
            var vO47 = {};
            vO39._(p455.glassesDict, function (p478, p479) {
              var vParseInt5 = parseInt(p478);
              vO47[vParseInt5] = new f129.db(p479.base.map(function (p480) {
                return p456[p480.region];
              }));
            });
            var v332 = new f129.db(p455.glassesUnknown.base.map(function (p481) {
              return p456[p481.region];
            }));
            var vO48 = {};
            vO39._(p455.portionDict, function (p482, p483) {
              p482 = parseInt(p482);
              vO48[p482] = new f129.Za(p456[p483.base], p456[p483.glow]);
            });
            var vUndefined3 = undefined;
            var v333 = p455.portionUnknown;
            vUndefined3 = new f129.Za(p456[v333.base], p456[v333.glow]);
            var vO49 = {};
            vO39._(p455.abilityDict, function (p484, p485) {
              p484 = parseInt(p484);
              vO49[p484] = new f129.bb(p456[p485.base]);
            });
            var vUndefined4 = undefined;
            var v334 = p455.abilityUnknown;
            vUndefined4 = new f129.bb(p456[v334.base]);
            var vO50 = {};
            vO39._(p455.teamDict, function (p486, p487) {
              p486 = parseInt(p486);
              vO50[p486] = new f129.cb(p487.title, new f129.ab(vO42[p487.skin.prime], null, p487.skin.glow.map(function (p488) {
                return p456[p488];
              })), new f129.Za(null, p456[p487.portion.glow]));
            });
            var v335 = new f129.cb({}, vUndefined2, vUndefined3);
            return new f129(p457, p458, vO48, vUndefined3, vO49, vUndefined4, vO43, vUndefined2, vO50, v335, vO44, v329, vO45, v330, vO46, v331, vO47, v332);
          };
          f129.prototype.gb = function (p489) {
            var v336 = vO39.aa(Object.keys(this.Na)).slice(0, p489);
            var v337 = vO39.aa(Object.keys(this.Ra)).slice(0, p489);
            var v338 = vO39.aa(Object.keys(this.Ta)).slice(0, p489);
            var v339 = vO39.aa(Object.keys(this.Va)).slice(0, p489);
            var v340 = vO39.aa(Object.keys(this.Xa)).slice(0, p489);
            var vA12 = [];
            for (var vLN036 = 0; vLN036 < p489; vLN036++) {
              var v341 = v336.length > 0 ? v336[vLN036 % v336.length] : 0;
              var v342 = v337.length > 0 ? v337[vLN036 % v337.length] : 0;
              var v343 = v338.length > 0 ? v338[vLN036 % v338.length] : 0;
              var v344 = v339.length > 0 ? v339[vLN036 % v339.length] : 0;
              var v345 = v340.length > 0 ? v340[vLN036 % v340.length] : 0;
              vA12.push(new vO37.hb(v341, v342, v343, v344, v345));
            }
            return vA12;
          };
          f129.prototype.ib = function (p490) {
            if (this.Na.hasOwnProperty(p490)) {
              return this.Na[p490];
            } else {
              return this.Oa;
            }
          };
          f129.prototype.jb = function (p491) {
            if (this.Pa.hasOwnProperty(p491)) {
              return this.Pa[p491];
            } else {
              return this.Qa;
            }
          };
          f129.prototype.kb = function (p492) {
            if (this.Ra.hasOwnProperty(p492)) {
              return this.Ra[p492];
            } else {
              return this.Sa;
            }
          };
          f129.prototype.lb = function (p493) {
            if (this.Ta.hasOwnProperty(p493)) {
              return this.Ta[p493];
            } else {
              return this.Ua;
            }
          };
          f129.prototype.mb = function (p494) {
            if (this.Xa.hasOwnProperty(p494)) {
              return this.Xa[p494];
            } else {
              return this.Ya;
            }
          };
          f129.prototype.nb = function (p495) {
            if (this.Va.hasOwnProperty(p495)) {
              return this.Va[p495];
            } else {
              return this.Wa;
            }
          };
          f129.prototype.ob = function (p496) {
            if (this.Ja.hasOwnProperty(p496)) {
              return this.Ja[p496];
            } else {
              return this.Ka;
            }
          };
          f129.prototype.pb = function (p497) {
            if (this.La.hasOwnProperty(p497)) {
              return this.La[p497];
            } else {
              return this.Ma;
            }
          };
          f129.cb = function () {
            function f130(p498, p499, p500) {
              this.qb = p498;
              this.rb = p499;
              this.sb = p500;
            }
            return f130;
          }();
          f129.ab = function () {
            function f131(p501, p502, p503) {
              this.tb = p501;
              this.ub = p502;
              this.vb = p503;
            }
            return f131;
          }();
          f129.db = function () {
            function f132(p504) {
              this.ub = p504;
            }
            return f132;
          }();
          f129.Za = function () {
            function f133(p505, p506) {
              this.ub = p505;
              this.vb = p506;
            }
            return f133;
          }();
          f129.bb = function () {
            function f134(p507) {
              this.ub = p507;
            }
            return f134;
          }();
          return f129;
        }();
        vO37._a = function () {
          function f135() {
            var v346 = vF7.BaseTexture.from("/images/wear-ability.png");
            for (var vLN15 = 1; vLN15 < 10; vLN15++) {
              this["vb" + vLN15] = new vO37.la("emoji_" + vLN15, v346, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
            }
            this.wb = new vO37.la("magnet_ability", v346, 158, 86, 67, 124, 148, 63.5, 128, 128);
            this.xb = new vO37.la("velocity_ability", v346, 158, 4, 87, 74, 203, 63.5, 128, 128);
            this.yb = new vO37.la("flex_ability", v346, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
 		var _0x3a78e0 = vF7.BaseTexture.from("https://i.imgur.com/9YTOVXg.png");
          this.pwrFlex1 = new vO37.la("flex_ability", _0x3a78e0, 158, 4, 87, 74, 203, 63.5, 128, 128);
          var _0x166409 = vF7.BaseTexture.from("https://i.imgur.com/1BDj8KV.png");
          this.pwrFlex2 = new vO37.la("flex_ability", _0x166409, 156, 140, 87, 60, 170, 128.5, 128, 128);
          this.pwrFlex3 = new vO37.la("flex_ability", _0x166409, 156, 4, 87, 74, 285, 63.5, 128, 128);
            var vLN15 = vF7.BaseTexture.from("/images/def-look.png");
            var v347 = new vO37.la("def_eyes", vLN15, 0, 0, 42, 80, 75, 64, 128, 128);
            var v348 = new vO37.la("def_mouth", vLN15, 46, 0, 20, 48, 109, 63, 128, 128);
            var v349 = new vO37.la("def_skin_glow", vLN15, 70, 0, 32, 32, 0, 0, 0, 0);
            var v350 = new vO37.la("def_skin_base", vLN15, 46, 52, 64, 64, 0, 0, 0, 0);
            var v351 = vO37.Ga.eb(v350, v349, v347, v348);
            _wwc.mySkin = v351;
            this.zb = new vO37.Ab({}, v351);
            this.Bb = -10000;
            this.Cb = -10000;
            this.Db = function () {
              var v352 = window.document.createElement("canvas");
              v352.width = 80;
              v352.height = 80;
              return {
                Eb: v352,
                Fb: v352.getContext("2d"),
                oa: new vF7.Texture(vF7.BaseTexture.from(v352))
              };
            }();
            this.Gb = null;
            this.Hb = [];
          }
          f135.$a = vO37.la.Ca();
          f135.prototype.ha = function () {};
          f135.prototype.Ib = function (p508, p509, p510) {
            var vThis42 = this;
            var v353 = this.zb.Jb();
            if (v353 > 0 && Date.now() - this.Bb < 1200000) {
              if (p508 != null) {
                p508();
              }
              return;
            }
            if (this.Gb != null && !this.Gb.Kb()) {
              if (Date.now() - this.Bb < 300000) {
                if (p508 != null) {
                  p508();
                }
                return;
              }
              this.Gb.Lb();
              this.Gb = null;
            }
            var v354 = new vO37.Mb(v353);
            v354.Nb(function (p511, p512) {
              if (v354 === vThis42.Gb && p510 != null) {
                p510(p511, p512);
              }
            });
            v354.Ob(function (p513) {
              if (v354 === vThis42.Gb && p509 != null) {
                p509(p513);
              }
            });
            v354.Pb(function () {
              if (v354 === vThis42.Gb && p509 != null) {
                p509(new Error());
              }
            });
            v354.Qb(function () {
              if (v354 === vThis42.Gb && p508 != null) {
                p508();
              }
            });
            v354.Rb(function (p514) {
              if (v354 === vThis42.Gb) {
                vThis42.Cb = Date.now();
                vThis42.Gb = null;
                vThis42.Sb();
                vThis42.zb.Ub().Fa();
                vThis42.zb = p514;
                if (p508 != null) {
                  p508();
                }
                vThis42.Tb();
                return;
              }
              try {
                p514.Ub().Fa();
              } catch (e31) {}
            });
            v354.Vb();
            this.Bb = Date.now();
            this.Gb = v354;
          };
          f135.prototype.Sb = function () {};
          f135.prototype.Wb = function () {
            return this.zb.Jb() > 0;
          };
          f135.prototype.Xb = function () {
            return this.zb.Yb();
          };
          f135.prototype.Zb = function () {
            return this.Db;
          };
          f135.prototype.$b = function (p515) {
            this.Hb.push(p515);
          };
          f135.prototype.Tb = function () {
            for (var vLN037 = 0; vLN037 < this.Hb.length; vLN037++) {
              this.Hb[vLN037]();
            }
          };
          f135.prototype.Ub = function () {
            return this.zb.Ub();
          };
          return f135;
        }();
        vO37._b = function () {
          function f136(p516) {
            this.ac = p516;
          }
          f136.prototype.bc = function (p517) {
            return this.ac[p517];
          };
          f136.cc = function () {
            function f137() {
              this.dc = [];
            }
            f137.prototype.ec = function (p518, p519) {
              for (var vLN038 = 0; vLN038 < this.dc.length; vLN038++) {
                if (this.dc[vLN038].fc === p518) {
                  throw new Error();
                }
              }
              this.dc.push(new f136.gc(p518, p519));
              return this;
            };
            f137.prototype.hc = function () {
              var vLN039 = 0;
              for (var vLN040 = 0; vLN040 < this.dc.length; vLN040++) {
                vLN039 += this.dc[vLN040].ic;
              }
              var vO51 = {};
              var vLN041 = 0;
              for (var vLN042 = 0; vLN042 < this.dc.length; vLN042++) {
                var v355 = this.dc[vLN042];
                v355.ic = v355.ic / vLN039;
                v355.jc = vLN041;
                v355.kc = vLN041 + v355.ic;
                vLN041 = v355.kc;
                vO51[v355.fc] = v355;
              }
              return new f136(vO51);
            };
            return f137;
          }();
          f136.gc = function () {
            function f138(p520, p521) {
              this.fc = p520;
              this.ic = p521;
              this.jc = 0;
              this.kc = 0;
            }
            f138.prototype.lc = function (p522) {
              return this.jc + (this.kc - this.jc) * p522;
            };
            return f138;
          }();
          return f136;
        }();
        vO37.WormSpriteTree = function () {
          function f139() {
            this.nc = new vF7.Container();
            this.nc.sortableChildren = true;
            this.oc = new vF9();
            this.oc.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
            this.pc = 0;
            this.qc = new Array(vLN797);
            this.qc[0] = this.rc(0, new vO37.sc(), new vO37.sc());
            for (var vLN16 = 1; vLN16 < vLN797; vLN16++) {
              this.qc[vLN16] = this.rc(vLN16, new vO37.sc(), new vO37.sc());
            }
            this.tc = 0;
            this.uc = 0;
            this.vc = 0;
          }
          var vLN0001 = 0.001;
          var vLN797 = 797;
          var vLN314159 = 3.14159;
          var v356 = -0.06640625;
          var vLN084375 = 0.84375;
          var vLN02578125 = 0.2578125;
          var v357 = -0.03515625;
          var v358 = -0.0625;
          var vLN05625 = 0.5625;
          var v359 = v356 * 3 + vLN084375;
          var v360 = vLN02578125 - v356 * 3;
          var v361 = v356 + v357;
          var vLN0375 = 0.375;
          var vLN075 = 0.75;
          var v362 = v358 + v358;
          var v363 = v357 * 3 + vLN02578125;
          var v364 = vLN084375 - v357 * 3;
          var v365 = v357 + v356;
          f139.wc = vLN797;
          f139.prototype.rc = function (p523, p524, p525) {
            var v366 = new vF10(p524, p525);
            p524.xc.zIndex = vLN0001 * ((vLN797 - p523) * 2 + 1 + 3);
            p525.xc.zIndex = vLN0001 * ((vLN797 - p523) * 2 - 2 + 3);
            return v366;
          };
          f139.prototype.yc = function (p526, p527, p528, p529, p530, p531, p532, p533) {
            var v367 = p528.ub;
            var v368 = p526 === vO37.Ac.zc ? p527.rb.vb : p528.vb;
            if (v367.length > 0 && v368.length > 0) {
              for (var vLN043 = 0; vLN043 < this.qc.length; vLN043++) {
                this.qc[vLN043].Cc.Bc(v367[vLN043 % v367.length], vLN043 % v367.length, vLN043);
                this.qc[vLN043].Dc.Bc(vLN043 == 0 && p528.vbb ? p528.vbb : v368[vLN043 % v368.length], vLN043 % v367.length, vLN043);
                this.qc[vLN043].Cc.Ec(p533);
                this.qc[vLN043].Dc.Ec(p533);
              }
            }
            this.oc.yc(p529, p530, p531, p532);
          };
          var vF9 = function () {
            var v369 = vO39.M(vF7.Container, function () {
              vF7.Container.call(this);
              this.sortableChildren = true;
              this.Fc = [];
              this.Gc = [];
              this.Hc = [];
              this.Ic = [];
              this.Jc = new vF7.Container();
              this.Kc = [];
              this.message = new vF7.Container();
              for (var vLN044 = 0; vLN044 < 4; vLN044++) {
                var v370 = new vO37.sc();
                v370.Bc(f121().Lc.wb);
                this.Jc.addChild(v370.xc);
                this.Kc.push(v370);
              }
              this.message.zIndex = 0.0012;
              this.addChild(this.message);
              this.VcUn();
              this.Jc.zIndex = 0.0011;
              this.addChild(this.Jc);
              this.Mc();
              this.Nc = new vO37.sc();
              this.Nc.Bc(f121().Lc.xb);
              this.Nc.xc.zIndex = 0.001;
              this.addChild(this.Nc.xc);
              this.Oc();
this.pwr_flex1 = new vO37.sc();
            this.pwr_flex1.Bc(f121().Lc.pwrFlex1);
            this.pwr_flex1.xc.zIndex = 0.002;
            this.addChild(this.pwr_flex1.xc);
            this.pwr_flex2 = new vO37.sc();
            this.pwr_flex2.Bc(f121().Lc.pwrFlex2);
            this.pwr_flex2.xc.zIndex = 0.001;
            this.addChild(this.pwr_flex2.xc);
            this.pwr_flex3 = new vO37.sc();
            this.pwr_flex3.Bc(f121().Lc.pwrFlex3);
            this.pwr_flex3.xc.zIndex = 0.001;
            this.addChild(this.pwr_flex3.xc);
            this.disableFlex();
            });
            v369.prototype.yc = function (p534, p535, p536, p537) {
              this.Pc(0.002, this.Fc, p534.ub);
              this.Pc(0.003, this.Gc, p535.ub);
              this.Pc(0.004, this.Ic, p537.ub);
              this.Pc(0.005, this.Hc, p536.ub);
            };
            v369.prototype.Pc = function (p538, p539, p540) {
              while (p540.length > p539.length) {
                var v371 = new vO37.sc();
                p539.push(v371);
                this.addChild(v371.Qc());
              }
              while (p540.length < p539.length) {
                p539.pop().Rc();
              }
              var vP538 = p538;
              for (var vLN045 = 0; vLN045 < p540.length; vLN045++) {
                vP538 += 0.0001;
                var v372 = p539[vLN045];
                v372.Bc(p540[vLN045]);
                v372.xc.zIndex = vP538;
              }
            };
            v369.prototype.Sc = function (p541, p542, p543, p544) {
              this.visible = true;
              this.position.set(p541, p542);
              this.rotation = p544;
              for (var vLN046 = 0; vLN046 < this.Fc.length; vLN046++) {
                this.Fc[vLN046].Tc(p543);
              }
              for (var vLN047 = 0; vLN047 < this.Gc.length; vLN047++) {
                this.Gc[vLN047].Tc(p543);
              }
              for (var vLN048 = 0; vLN048 < this.Hc.length; vLN048++) {
                this.Hc[vLN048].Tc(p543);
              }
              for (var vLN049 = 0; vLN049 < this.Ic.length; vLN049++) {
                this.Ic[vLN049].Tc(p543);
              }
            };
            v369.prototype.Uc = function () {
              this.visible = false;
            };
            v369.prototype.VcAc = function (p545, p546, p547, p548, p549) {
              this.message.visible = true;
              this.Mc2.Tc(p546);
            };
            v369.prototype.VcUn = function () {
              this.message.visible = false;
            };
            v369.prototype.Vc = function (p550, p551, p552, p553) {
              this.Jc.visible = true;
              var v373 = p552 / 1000;
              var v374 = 1 / this.Kc.length;
              for (var vLN050 = 0; vLN050 < this.Kc.length; vLN050++) {
                var v375 = 1 - (v373 + v374 * vLN050) % 1;
                this.Kc[vLN050].xc.alpha = 1 - v375;
                this.Kc[vLN050].Tc(p551 * (0.5 + v375 * 4.5));
              }
            };
            v369.prototype.Mc = function () {
              this.Jc.visible = false;
            };
            v369.prototype.Wc = function (p554, p555, p556, p557) {
              this.Nc.xc.visible = true;
              this.Nc.xc.alpha = vO39.Q(this.Nc.xc.alpha, p554.Xc ? 0.9 : 0.2, p557, 0.0025);
              this.Nc.Tc(p555);
            };
          v369.prototype.activeFlex = function (_0x17b4d1, _0xf92d8b, _0xaa299d, _0x2478a0) {
            this.pwr_flex1.xc.visible = window.bbs.flx === 1;
            this.pwr_flex1.xc.alpha = vO39.Q(this.Nc.xc.alpha, _0x17b4d1.Xc ? 1 : 1, _0x2478a0, 1);
            this.pwr_flex1.Tc(_0xf92d8b);
            this.pwr_flex2.xc.visible = window.bbs.flx === 2;
            this.pwr_flex2.xc.alpha = vO39.Q(this.Nc.xc.alpha, _0x17b4d1.Xc ? 0.9 : 0.4, _0x2478a0, 0.0025);
            this.pwr_flex2.Tc(_0xf92d8b);
            this.pwr_flex3.xc.visible = window.bbs.flx === 3;
            this.pwr_flex3.xc.alpha = vO39.Q(this.Nc.xc.alpha, _0x17b4d1.Xc ? 0.9 : 0.4, _0x2478a0, 0.0025);
            this.pwr_flex3.Tc(_0xf92d8b);
          };
          v369.prototype.disableFlex = function () {
            this.pwr_flex1.xc.visible = false;
            this.pwr_flex2.xc.visible = false;
            this.pwr_flex3.xc.visible = false;
          };
            v369.prototype.WXX = function (p558, p559, p560, p561) {
              this.Nc.xc.visible = true;
              this.Nc.xc.alpha = vO39.Q(this.Nc.xc.alpha, p558.Xc ? 0.9 : 0.2, p561, 0.0025);
              this.Nc.Tc(p559);
            };
            v369.prototype.Oc = function () {
              this.Nc.xc.visible = false;
            };
            return v369;
          }();
          f139.prototype.Yc = function (p562) {
            return this.uc + this.vc * Math.sin(p562 * vLN314159 - this.tc);
          };
          f139.prototype.Zc = function (p563, p564, p565, p566) {
            var v376 = p563.$c * 2;
            var v377 = p563._c;
            var v378 = p563.ad;
            var v379 = v378 * 4 - 3;
            var vV379 = v379;
            this.tc = p564 / 400 * Math.PI;
            this.uc = v376 * 1.5;
            this.vc = v376 * 0.15 * p563.bd;
            var v380;
            var v381;
            var v382;
            var v383;
            var v384;
            var v385;
            var v386;
            var v387;
            v381 = v377[0];
            v385 = v377[1];
            if (p566(v381, v385)) {
              v382 = v377[2];
              v386 = v377[3];
              v383 = v377[4];
              v387 = v377[5];
              var v388 = Math.atan2(v387 + v385 * 2 - v386 * 3, v383 + v381 * 2 - v382 * 3);
              this.oc.Sc(v381, v385, v376, v388);
              this.qc[0].Sc(v381, v385, v376, this.Yc(0), v388);
              this.qc[1].Sc(v359 * v381 + v360 * v382 + v361 * v383, v359 * v385 + v360 * v386 + v361 * v387, v376, this.Yc(1), vF10.cd(this.qc[0], this.qc[2]));
              this.qc[2].Sc(vLN0375 * v381 + vLN075 * v382 + v362 * v383, vLN0375 * v385 + vLN075 * v386 + v362 * v387, v376, this.Yc(2), vF10.cd(this.qc[1], this.qc[3]));
              this.qc[3].Sc(v363 * v381 + v364 * v382 + v365 * v383, v363 * v385 + v364 * v386 + v365 * v387, v376, this.Yc(3), vF10.cd(this.qc[2], this.qc[4]));
            } else {
              this.oc.Uc();
              this.qc[0].Uc();
              this.qc[1].Uc();
              this.qc[2].Uc();
              this.qc[3].Uc();
            }
            var vLN4 = 4;
            var vLN22 = 2;
            var v389 = v378 * 2 - 4;
            while (vLN22 < v389) {
              v381 = v377[vLN22];
              v385 = v377[vLN22 + 1];
              if (p566(v381, v385)) {
                v380 = v377[vLN22 - 2];
                v384 = v377[vLN22 - 1];
                v382 = v377[vLN22 + 2];
                v386 = v377[vLN22 + 3];
                v383 = v377[vLN22 + 4];
                v387 = v377[vLN22 + 5];
                this.qc[vLN4].Sc(v381, v385, v376, this.Yc(vLN4), vF10.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
                vLN4++;
                this.qc[vLN4].Sc(v356 * v380 + vLN084375 * v381 + vLN02578125 * v382 + v357 * v383, v356 * v384 + vLN084375 * v385 + vLN02578125 * v386 + v357 * v387, v376, this.Yc(vLN4), vF10.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
                vLN4++;
                this.qc[vLN4].Sc(v358 * v380 + vLN05625 * v381 + vLN05625 * v382 + v358 * v383, v358 * v384 + vLN05625 * v385 + vLN05625 * v386 + v358 * v387, v376, this.Yc(vLN4), vF10.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
                vLN4++;
                this.qc[vLN4].Sc(v357 * v380 + vLN02578125 * v381 + vLN084375 * v382 + v356 * v383, v357 * v384 + vLN02578125 * v385 + vLN084375 * v386 + v356 * v387, v376, this.Yc(vLN4), vF10.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
                vLN4++;
              } else {
                this.qc[vLN4].Uc();
                vLN4++;
                this.qc[vLN4].Uc();
                vLN4++;
                this.qc[vLN4].Uc();
                vLN4++;
                this.qc[vLN4].Uc();
                vLN4++;
              }
              vLN22 += 2;
            }
            v381 = v377[v378 * 2 - 4];
            v385 = v377[v378 * 2 - 3];
            if (p566(v381, v385)) {
              v380 = v377[v378 * 2 - 6];
              v384 = v377[v378 * 2 - 5];
              v382 = v377[v378 * 2 - 2];
              v386 = v377[v378 * 2 - 1];
              this.qc[v379 - 5].Sc(v381, v385, v376, this.Yc(v379 - 5), vF10.cd(this.qc[v379 - 6], this.qc[v379 - 4]));
              this.qc[v379 - 4].Sc(v365 * v380 + v364 * v381 + v363 * v382, v365 * v384 + v364 * v385 + v363 * v386, v376, this.Yc(v379 - 4), vF10.cd(this.qc[v379 - 5], this.qc[v379 - 3]));
              this.qc[v379 - 3].Sc(v362 * v380 + vLN075 * v381 + vLN0375 * v382, v362 * v384 + vLN075 * v385 + vLN0375 * v386, v376, this.Yc(v379 - 3), vF10.cd(this.qc[v379 - 4], this.qc[v379 - 2]));
              this.qc[v379 - 2].Sc(v361 * v380 + v360 * v381 + v359 * v382, v361 * v384 + v360 * v385 + v359 * v386, v376, this.Yc(v379 - 2), vF10.cd(this.qc[v379 - 3], this.qc[v379 - 1]));
              this.qc[v379 - 1].Sc(v382, v386, v376, this.Yc(v379 - 1), vF10.cd(this.qc[v379 - 2], this.qc[v379 - 1]));
            } else {
              this.qc[v379 - 5].Uc();
              this.qc[v379 - 4].Uc();
              this.qc[v379 - 3].Uc();
              this.qc[v379 - 2].Uc();
              this.qc[v379 - 1].Uc();
            }
            if (this.pc === 0 && vV379 > 0) {
              this.nc.addChild(this.oc);
            }
            if (this.pc > 0 && vV379 === 0) {
              vO39.U(this.oc);
            }
            while (this.pc < vV379) {
              this.nc.addChild(this.qc[this.pc].Cc.Qc());
              this.nc.addChild(this.qc[this.pc].Dc.Qc());
              this.pc += 1;
            }
            while (this.pc > vV379) {
              this.pc -= 1;
              this.qc[this.pc].Dc.Rc();
              this.qc[this.pc].Cc.Rc();
            }
            var v390 = p563.dd[vO37.fd.ed];
            if (this.qc[0].gd() && v390 && v390.hd) {
              this.oc.Vc(p563, v376, p564, p565);
            } else {
              this.oc.Mc();
            }
            var v391 = p563.dd[vO37.fd.jd];
            if (this.qc[0].gd() && v391 && v391.hd) {
              this.oc.Wc(p563, v376, p564, p565);
            } else {
              this.oc.Oc();
            }
	var _0x442bb8 = p563.dd[vO37.fd.pd];
          if (this.qc[0].gd() && _0x442bb8 != null && _0x442bb8.hd) {
            this.oc.activeFlex(p563, v376, p564, p565);
          } else {
            this.oc.disableFlex();
          }
            movimentaLinha();
          };
          var vF10 = function () {
            function f140(p567, p568) {
              this.Cc = p567;
              this.Cc.kd(false);
              this.Dc = p568;
              this.Dc.kd(false);
              this.ev = null;
            }
            f140.prototype.Sc = function (p569, p570, p571, p572, p573) {
              this.Cc.kd(true);
              this.Cc.ld(p569, p570);
              this.Cc.Tc(p571);
              this.Cc.md(p573);
              this.Dc.kd(true);
              this.Dc.ld(p569, p570);
              this.Dc.Tc(p572);
              this.Dc.md(p573);
            };
            f140.prototype.Uc = function () {
              this.Cc.kd(false);
              this.Dc.kd(false);
            };
            f140.prototype.gd = function () {
              return this.Cc.gd();
            };
            f140.cd = function (p574, p575) {
              return Math.atan2(p574.Cc.xc.position.y - p575.Cc.xc.position.y, p574.Cc.xc.position.x - p575.Cc.xc.position.x);
            };
            return f140;
          }();
          return f139;
        }();
        vO37.fd = function () {
          function f141(p576) {
            this.nd = p576;
            this.hd = false;
            this.od = 1;
          }
          f141.jd = 0;
          f141.pd = 1;
          f141.ed = 2;
          f141.qd = 6;
          f141.rd = 3;
          f141.sd = 4;
          f141.td = 5;
          return f141;
        }();
        vO37.Ab = function (p577) {
          var vF11 = function () {
            function f142(p578, p579) {
              f(this, f142);
              this.ud = p578;
              this.vd = p579;
            }
            return f3(f142, [{
              key: "Jb",
              value: function f143() {
                return this.ud.revision;
              }
            }, {
              key: "Yb",
              value: function f144() {
                vO31.Jb();
                return this.ud;
              }
            }, {
              key: "Ub",
              value: function f145() {
                return this.vd;
              }
            }]);
          }();
          p577 = vF11;
          f20(vF11, "wd", new p577({}, vO37.Ga.Ca()));
          return vF11;
        }();
        vO37.Mb = function () {
          function f146(p580) {
            this.xd = function () {
              ++f146.yd;
              return function (p581, p582) {};
            }();
            this.zd = p580;
            this.Ad = null;
            this.Bd = null;
            this.Cd = null;
            this.Dd = null;
            this.Ed = null;
            this.Fd = false;
            this.Gd = false;
            this.Hd = false;
          }
          f146.Id = {
            Jd: "0x0",
            Kd: "0x1",
            Ld: "0x2",
            Md: "0x3",
            Nd: "0x4"
          };
          f146.yd = 100000;
          f146.Od = new vO37._b.cc().ec(f146.Id.Jd, 1).ec(f146.Id.Kd, 10).ec(f146.Id.Ld, 50).ec(f146.Id.Md, 15).ec(f146.Id.Nd, 5).hc();
          f146.prototype.Rb = function (p583) {
            this.Ad = p583;
          };
          f146.prototype.Qb = function (p584) {
            this.Bd = p584;
          };
          f146.prototype.Ob = function (p585) {
            this.Cd = p585;
          };
          f146.prototype.Pb = function (p586) {
            this.Dd = p586;
          };
          f146.prototype.Nb = function (p587) {
            this.Ed = p587;
          };
          f146.prototype.Kb = function () {
            return this.Hd;
          };
          f146.prototype.Lb = function () {
            this.Fd = true;
          };
          f146.prototype.Vb = function () {
            if (!this.Gd) {
              this.Gd = true;
              if (this.Fd) {
                this.Pd();
                return;
              }
              this.Qd();
            }
          };
          f146.prototype.Qd = function () {
            function f147(p588) {
              var v392 = f146.Id.Jd;
              vThis43.Rd(v392, f146.Od.bc(v392).lc(p588));
            }
            var vThis43 = this;
            console.log("Checking for updates...");
            if (this.Fd) {
              this.Pd();
              return;
            }
            $.ajax({
              type: "GET",
              url: vO39.a.c + "/dynamic/assets/revision.json",
              xhrFields: {
                onprogress: function f148(p589) {
                  if (p589.lengthComputable) {
                    f147(p589.loaded / p589.total);
                  }
                }
              }
            }).fail(function () {
              vThis43.Sd(new Error());
            }).done(function (p590) {
              if (p590 <= vThis43.zd) {
                vThis43.Td();
                return;
              }
              vThis43.Ud();
            });
          };
          f146.prototype.Ud = f36(f23().m(function f149() {
            var v393;
            var v394;
            var v395;
            return f23().w(function (p591) {
              while (1) {
                switch (p591.n) {
                  case 0:
                    v393 = function f150(p592) {
                      var v396 = f146.Id.Kd;
                      v394.Rd(v396, f146.Od.bc(v396).lc(p592));
                    };
                    v394 = this;
                    if (!this.Fd) {
                      p591.n = 1;
                      break;
                    }
                    return p591.a(2, void this.Pd());
                  case 1:
                    p591.n = 2;
                    return fetch(URLSERV_WORMWORLD + "/version");
                  case 2:
                    v395 = p591.v;
                    p591.n = 3;
                    return v395.json();
                  case 3:
                    v395 = p591.v;
                    localStorage.setItem("wwc_version", v395);
                    if (v168 != v395) {
                      $.ajax({
                        type: "GET",
                        url: vO39.a.c + "/dynamic/assets/registry.json",
                        xhrFields: {
                          onprogress: function f151(p593) {
                            if (p593.lengthComputable) {
                              v393(p593.loaded / p593.total);
                            }
                          }
                        }
                      }).fail(function () {
                        v394.Sd(new Error());
                      }).done(function () {
                        var vF365 = f36(f23().m(function f152(p594) {
                          return f23().w(function (p595) {
                            while (1) {
                              switch (p595.n) {
                                case 0:
                                  p595.n = 1;
                                  return vO31.registry(p594);
                                case 1:
                                  p594 = p595.v;
                                  localStorage.setItem("wwc_config", JSON.stringify(p594));
                                  v394.Vd(p594, f146);
                                case 2:
                                  return p595.a(2);
                              }
                            }
                          }, f152);
                        }));
                        return function (p596) {
                          return vF365.apply(this, arguments);
                        };
                      }());
                    } else {
                      try {
                        v170 = JSON.parse(v170);
                        v393(1);
                        v394.Vd(v170, f146);
                      } catch (e32) {
                        console.log("ConfigError", e32);
                        localStorage.removeItem("wwc_version");
                        localStorage.removeItem("wwc_config");
                      }
                    }
                  case 4:
                    return p591.a(2);
                }
              }
            }, f149, this);
          }));
          f146.prototype.Vd = vO31.Vd || function (p597) {
            function f153(p598) {
              var v397 = f146.Id.Ld;
              vThis44.Rd(v397, f146.Od.bc(v397).lc(p598));
            }
            var vThis44 = this;
            if (this.Fd) {
              this.Pd();
              return;
            }
            var vA13 = [];
            var vA14 = [];
            var vLN051 = 0;
            for (var v398 in p597.textureDict) {
              if (p597.textureDict.hasOwnProperty(v398)) {
                var v399 = p597.textureDict[v398];
                var v400 = vO39.a.c + v399.relativePath;
                var v401 = v399.fileSize;
                var v402 = v399.sha256;
                var v403 = new f146.Wd(v398, v400, v401, v402);
                vA13.push(v403);
                vA14.push(v403);
                vLN051 += v401;
              }
            }
            var v404;
            var vLN052 = 0;
            var vF154 = function f154(p599) {
              for (var vLN053 = 0; vLN053 < vA14.length; vLN053++) {
                try {
                  window.URL.revokeObjectURL(vA14[vLN053].Xd);
                } catch (e33) {}
              }
              vThis44.Sd(p599);
            };
            var vF155 = function f155(p600) {
              var v405 = Math.floor(v404.Yd * p600);
              f153((vLN052 + v405) / vLN051);
            };
            var vF156 = function f156(p601) {
              var v406 = new Blob([p601]);
              v404.Xd = window.URL.createObjectURL(v406);
              vLN052 += v404.Yd;
              vF157();
            };
            var vF157 = function f157() {
              if (vLN054 < vA14.length) {
                v404 = vA14[vLN054++];
                vThis44.Zd(v404, vF154, vF156, vF155);
                return;
              }
              setTimeout(function () {
                return vThis44.$d(p597, vA13);
              }, 0);
            };
            var vLN054 = 0;
            vF157();
          };
          f146.prototype.Zd = vO31.Zd || function (p602, p603, p604, p605) {
            $.ajax({
              type: "GET",
              url: p602._d,
              xhrFields: {
                responseType: "arraybuffer",
                onprogress: function f158(p606) {
                  if (p606.lengthComputable) {
                    p605(p606.loaded / p606.total);
                  }
                }
              }
            }).fail(function () {
              p603(new Error());
            }).done(function (p607) {
              p604(p607);
            });
          };
          f146.prototype.$d = vO31.$d || function (p608, p609) {
            function f159(p610) {
              var v407 = f146.Id.Md;
              vThis45.Rd(v407, f146.Od.bc(v407).lc(p610));
            }
            var vThis45 = this;
            if (this.Fd) {
              this.Pd();
              return;
            }
            var v408;
            var v409;
            var vO52 = {};
            var vF160 = function f160() {
              for (var vLN055 = 0; vLN055 < p609.length; vLN055++) {
                try {
                  window.URL.revokeObjectURL(p609[vLN055].Xd);
                } catch (e34) {}
              }
              vThis45.Sd(new Error());
            };
            var vF161 = function f161() {
              f159(vLN056 / p609.length);
              vO52[v408.ae] = new vO37.be(v408.Xd, v409);
              vF162();
            };
            var vF162 = function f162() {
              if (vLN056 < p609.length) {
                v408 = p609[vLN056++];
                v409 = PIXI.BaseTexture.from(v408.Xd);
                v409.on("error", vF160);
                v409.on("loaded", vF161);
                return;
              }
              setTimeout(function () {
                return vThis45.ce(p608, vO52);
              }, 0);
            };
            var vLN056 = 0;
            vF162();
          };
          f146.prototype.ce = function (p611, p612) {
            function f163(p613) {
              var v410 = f146.Id.Nd;
              vThis46.Rd(v410, f146.Od.bc(v410).lc(p613));
            }
            var vThis46 = this;
            var vO53 = {};
            var vLN057 = 0;
            var v411 = Object.values(p611.regionDict).length;
            vO39._(p611.regionDict, function (p614, p615) {
              var v412 = null;
              try {
                var v413 = null;
                if (p612[p615.texture].ev) {
                  v413 = p612[p615.texture].ev;
                }
                var v414 = p615.texture + ":" + p614;
                v412 = vO37.la.Da(v414, p612[p615.texture].oa, p615, v413);
                vO53[p614] = v412;
                if (++vLN057 % 10 == 0) {
                  f163(vLN057 / v411);
                }
              } catch (e35) {}
            });
            var v415 = Object.values(p612).map(function (p616) {
              return p616.oa;
            });
            var v416 = Object.values(vO53);
            var v417 = new vO37.Ab(p611, vO37.Ga.fb(p611, vO53, v415, v416));
            setTimeout(function () {
              return vThis46.de(v417);
            }, 0);
          };
          f146.Wd = function () {
            function f164(p617, p618, p619, p620) {
              this.ae = p617;
              this._d = p618;
              this.Yd = p619;
              this.ee = p620;
              this.Xd = "";
            }
            return f164;
          }();
          f146.prototype.de = function (p621) {
            if (this.Hd) {
              p621.Ub().Fa();
              return;
            }
            this.Hd = true;
            var vThis47 = this;
            setTimeout(function () {
              return vThis47.Ad(p621);
            }, 0);
          };
          f146.prototype.Td = function () {
            if (!this.Hd) {
              this.Hd = true;
              var vThis48 = this;
              setTimeout(function () {
                return vThis48.Bd();
              }, 0);
            }
          };
          f146.prototype.Sd = function (p622) {
            if (!this.Hd) {
              this.Hd = true;
              var vThis49 = this;
              setTimeout(function () {
                return vThis49.Cd(p622);
              }, 0);
            }
          };
          f146.prototype.Pd = function () {
            if (!this.Hd) {
              this.Hd = true;
              var vThis50 = this;
              setTimeout(function () {
                return vThis50.Dd();
              }, 0);
            }
          };
          f146.prototype.Rd = function (p623, p624) {
            if (!this.Hd && !this.Fd) {
              var vThis51 = this;
              return vThis51.Ed(p623, p624);
            }
          };
          return f146;
        }();
        vO37.fe = function () {
          return {};
        }();
        vO37.ge = function () {
          function f165() {
            this.he = vO37.ge.je.ie;
            this.ke = false;
            this.le = false;
            this.me = null;
            this.ne = null;
          }
          f165.prototype.ha = function () {};
          f165.prototype.oe = function (p625) {
            this.le = p625;
          };
          f165.prototype.pe = function (p626) {
            this.he = p626;
            this.qe();
          };
          f165.prototype.re = function (p627) {
            this.ke = p627;
            this.qe();
          };
          f165.prototype.qe = function () {};
          f165.prototype.se = function (p628, p629) {
            if (!f121().Lc.Wb()) {
              return null;
            }
            var v418 = p628[p629];
            if (v418 == null || v418.length === 0) {
              return null;
            } else {
              return v418[Math.floor(Math.random() * v418.length)].cloneNode();
            }
          };
          f165.prototype.te = function (p630, p631, p632) {
            if (this.le && !(p632 <= 0)) {
              var v419 = this.se(p630, p631);
              if (v419 != null) {
                v419.volume = Math.min(1, p632);
                v419.play();
              }
            }
          };
          f165.prototype.ue = function (p633, p634) {
            if (this.he.ve) {
              this.te(app.xe.we, p633, p634);
            }
          };
          f165.prototype.ye = function (p635, p636) {
            if (this.he.ze) {
              this.te(app.xe.Ae, p635, p636);
            }
          };
          f165.prototype.Be = function () {};
          f165.prototype.Ce = function () {};
          f165.prototype.De = function () {};
          f165.prototype.Ee = function () {};
          f165.prototype.Fe = function () {};
          f165.prototype.Ge = function () {};
          f165.prototype.He = function (p637, p638, p639) {};
          f165.prototype.Ie = function (p640) {};
          f165.prototype.Je = function (p641) {};
          f165.prototype.Ke = function (p642) {};
          f165.prototype.Le = function (p643) {};
          f165.prototype.Me = function (p644) {};
          f165.prototype.Ne = function (p645) {};
          f165.prototype.Oe = function (p646) {};
          f165.prototype.Pe = function (p647) {};
          f165.prototype.Qe = function (p648) {};
          f165.prototype.Re = function (p649) {};
          f165.prototype.Se = function (p650) {};
          f165.prototype.Te = function (p651) {};
          f165.prototype.Ue = function (p652) {};
          f165.prototype.Ve = function (p653) {};
          f165.prototype.We = function (p654, p655) {};
          f165.prototype.Xe = function (p656) {};
          f165.prototype.Ye = function (p657, p658, p659) {};
          f165.je = {
            ie: {
              Ze: false,
              $e: false,
              ze: true,
              ve: false
            },
            _e: {
              Ze: false,
              $e: true,
              ze: true,
              ve: false
            },
            af: {
              Ze: true,
              $e: false,
              ze: false,
              ve: true
            },
            bf: {
              Ze: false,
              $e: false,
              ze: true,
              ve: false
            },
            cf: {
              Ze: false,
              $e: false,
              ze: false,
              ve: false
            }
          };
          return f165;
        }();
        vO37.GameView = function () {
          function f166(p660) {
            var vF121 = f121();
            this.ef = p660;
            this.Eb = p660.get()[0];
            this.ff = 1;
            this.gf = 1;
            this.hf = null;
            this.lf = new vF7.Renderer({
              view: p660.get()[0],
              backgroundColor: 0,
              transparent: false,
              antialias: false,
              autoResize: true
            });
            this.mf = new vF7.Container();
            this.mf.sortableChildren = true;
            this.nf = new vF7.Container();
            this.nf.zIndex = 0;
            this.mf.addChild(this.nf);
            this.uf = new vF7.Container();
            this.uf.zIndex = 3;
            this.mf.addChild(this.uf);
            this.vf = [];
            this.wf = [];
            this.xf = [];
            this.ha();
          }
          var vLN058 = 0;
          var vLN52 = 5;
          var vLN40 = 40;
          var vA15 = [{
            yf: 1,
            zf: 0.15,
            Af: 0
          }, {
            yf: 1,
            zf: 0.125,
            Af: 0
          }, {
            yf: 1,
            zf: 0.1,
            Af: 0
          }, {
            yf: 1,
            zf: 0.075,
            Af: 0
          }, {
            yf: 1,
            zf: 0.05,
            Af: 0
          }, {
            yf: 1,
            zf: 0.025,
            Af: 0
          }, {
            yf: 1,
            zf: 0,
            Af: 0.025
          }, {
            yf: 1,
            zf: 0,
            Af: 0.05
          }, {
            yf: 1,
            zf: 0,
            Af: 0.075
          }, {
            yf: 1,
            zf: 0,
            Af: 0.1
          }, {
            yf: 1,
            zf: 0,
            Af: 0.125
          }, {
            yf: 1,
            zf: 0,
            Af: 0.15
          }];
          f166.prototype.ha = function () {
            var vF1212 = f121();
            this.lf.backgroundColor = vLN058;
            this.vf = new Array(vA15.length);
            for (var vLN059 = 0; vLN059 < this.vf.length; vLN059++) {
              this.vf[vLN059] = new vF7.Sprite();
              this.vf[vLN059].texture = vF1212.xe.Bf;
              this.vf[vLN059].anchor.set(0.5);
              this.nf.addChild(this.vf[vLN059]);
            }
            this.wf = new Array(vF1212.xe.Cf.length);
            for (var vLN060 = 0; vLN060 < this.wf.length; vLN060++) {
              this.wf[vLN060] = new vF7.Sprite();
              this.wf[vLN060].texture = vF1212.xe.Cf[vLN060];
              this.wf[vLN060].anchor.set(0.5);
              this.uf.addChild(this.wf[vLN060]);
            }
            this.xf = new Array(this.wf.length);
            for (var vLN061 = 0; vLN061 < this.xf.length; vLN061++) {
              var vA16 = [0.6, 1, 0.5];
              this.xf[vLN061] = {
                Df: vO39.V(0, vO38.F),
                Ef: vO39.V(0.09, 0.16) * 0.66,
                Ff: vO39.V(0, 1),
                Gf: vO39.V(0, 1),
                Hf: 0,
                yf: vA16[0],
                zf: vA16[1],
                Af: vA16[2]
              };
            }
            this.If();
            this.Jf();
          };
          f166.hd = false;
          f166.Kf = function (p661) {
            f166.hd = p661;
          };
          f166.prototype.Lf = function (p662) {
            this.hf.Kf(p662);
          };
          f166.prototype.Jf = function () {
            var v420 = window.devicePixelRatio ? window.devicePixelRatio : 1;
            this.ff = this.ef.width();
            this.gf = this.ef.height();
            this.lf.resize(this.ff, this.gf);
            this.lf.resolution = v420;
            this.Eb.width = v420 * this.ff;
            this.Eb.height = v420 * this.gf;
            var v421 = Math.max(this.ff, this.gf) * 0.6;
            for (var vLN062 = 0; vLN062 < this.vf.length; vLN062++) {
              this.vf[vLN062].width = v421;
              this.vf[vLN062].height = v421;
            }
          };
          f166.prototype.Nf = function (p663, p664) {
            if (f166.hd) {
              var v422 = p663 / 1000;
              var v423 = p664 / 1000;
              var v424 = this.ef.width();
              var v425 = this.ef.height();
              for (var vLN063 = 0; vLN063 < this.vf.length; vLN063++) {
                var v426 = vA15[vLN063 % vA15.length];
                var v427 = this.vf[vLN063];
                var v428 = vLN063 / this.vf.length * vO38.G;
                var v429 = v422 * 0.5 * 0.12;
                var v430 = Math.cos((v429 + v428) * 3) * Math.cos(v428) - Math.sin((v429 + v428) * 5) * Math.sin(v428);
                var v431 = Math.cos((v429 + v428) * 3) * Math.sin(v428) + Math.sin((v429 + v428) * 5) * Math.cos(v428);
                var v432 = 0.2 + Math.cos(v428 + v422 * 0.075) * 0.2;
                var v433 = v426.Af * 255 << 16 & 16711680 | v426.zf * 255 << 8 & 65280 | v426.yf * 255 & 255;
                v427.tint = v433;
                v427.alpha = v432;
                v427.position.set(v424 * (0.2 + (v430 + 1) * 0.5 * 0.6), v425 * (0.1 + (v431 + 1) * 0.5 * 0.8));
              }
              var v434 = Math.max(v424, v425) * 0.05;
              for (var vLN064 = 0; vLN064 < this.wf.length; vLN064++) {
                var v435 = this.xf[vLN064];
                var v436 = this.wf[vLN064];
                var v437 = vO38.F * vLN064 / this.wf.length + v435.Df;
                v435.Gf += v435.Ef * v423;
                if (v435.Gf > 1.1) {
                  v435.Df = Math.random() * vO38.F;
                  v435.Ef = (0.09 + Math.random() * 0.07) * 0.66;
                  v435.Ff = 0.15 + Math.random() * 0.7;
                  v435.Gf = -0.1;
                }
                var v438 = v435.Ff + Math.sin(Math.sin(v437 + v422 * 0.48) * 6) * 0.03;
                var v439 = v435.Gf;
                var v440 = (0.4 + (1 + Math.sin(v437 + v422 * 0.12)) * 0.5 * 1.2) * 0.5;
                var v441 = v437 + v435.Ef * 2 * v422;
                var v442 = vO39.P(Math.sin(Math.PI * v439), 0.1, 1);
                var v443 = v435.zf * 255 << 8 & 65280 | v435.Af * 255 << 16 & 16711680 | v435.yf * 255 & 255;
                v436.alpha = v442;
                v436.tint = v443;
                v436.position.set(v424 * v438, v425 * v439);
                v436.rotation = v441;
                var v444 = v436.texture.width / v436.texture.height;
                v436.width = v440 * v434;
                v436.height = v440 * v434 * v444;
              }
              this.Of();
              this.lf.render(this.mf, null, true);
            }
          };
          f166.prototype.Pf = function () {
            var vF1213 = f121();
            if (vF1213.Lc.Wb()) {
              var v445 = vF1213.Lc.Ub().gb(vLN52);
              for (var vLN065 = 0; vLN065 < vLN52; vLN065++) {
                this.hf.Qf(vLN065, v445[vLN065]);
              }
            } else {
              var v446 = vO39.V(0, 1);
              for (var vLN066 = 0; vLN066 < vLN52; vLN066++) {
                var v447 = (v446 + vLN066 / vLN52) % 1;
                var v448 = vO39.Y(Math.floor(v447 * 360), 0.85, 0.5);
                var v449 = v448[0] * 255 & 255 | v448[1] * 255 << 8 & 65280 | v448[2] * 255 << 16 & 16711680;
                var v450 = "000000" + v449.toString(16);
                v450 = "#" + v450.substring(v450.length - 6, v450.length);
                this.hf.Rf(vLN066, v450);
              }
            }
          };
          f166.prototype.If = function () {
            var v451 = Math.min(this.ff, this.gf);
            var v452 = Date.now();
            for (var vLN067 = 0; vLN067 < vLN52; vLN067++) {
              var v453 = vLN067 / vLN52 * vO38.F;
              var vV_0x322f8f = vF167(v452, 0.12, v453);
              vV_0x322f8f.qa = vV_0x322f8f.qa * 4;
              vV_0x322f8f.ra = vV_0x322f8f.ra * 4;
              this.hf.Sf(vLN067, (this.ff + vV_0x322f8f.qa * v451) * 0.5, (this.gf + vV_0x322f8f.ra * v451) * 0.5);
            }
          };
          f166.prototype.Of = function () {
            var v454 = Math.min(this.ff, this.gf);
            var v455 = Date.now();
            for (var vLN068 = 0; vLN068 < vLN52; vLN068++) {
              var v456 = vLN068 / vLN52 * vO38.F;
              var vV_0x322f8f2 = vF167(v455, 0.12, v456);
              this.hf.Tf(vLN068, (this.ff + vV_0x322f8f2.qa * v454) * 0.5, (this.gf + vV_0x322f8f2.ra * v454) * 0.5);
            }
            this.hf.Uf();
          };
          var vF167 = function f167(p665, p666, p667) {
            var v457 = p665 / 1000;
            return {
              qa: (Math.cos(p666 * v457 + p667) + Math.cos(p666 * -32 * v457 + p667) * 0.4 + Math.cos(p666 * 7 * v457 + p667) * 0.7) * 0.8,
              ra: (Math.sin(p666 * v457 + p667) + Math.sin(p666 * -32 * v457 + p667) * 0.4 + Math.sin(p666 * 7 * v457 + p667) * 0.7) * 0.8
            };
          };
          return f166;
        }();
        vO37.Vf = function () {
          function f168() {}
          f168.Wf = "consent_state_2";
          f168.Xf = "showPlayerNames";
          f168.Yf = "musicEnabled";
          f168.Zf = "sfxEnabled";
          f168.$f = "account_type";
          f168._f = "gameMode";
          f168.ag = "nickname";
          f168.bg = "skin";
          f168.cg = "prerollCount";
          f168.dg = "shared";
          f168.eg = function (p668, p669, p670) {
            var v458 = new Date();
            v458.setTime(v458.getTime() + p670 * 86400000);
            var v459 = "expires=" + v458.toUTCString();
            document.cookie = p668 + "=" + p669 + "; " + v459;
          };
          f168.fg = function (p671) {
            var v460 = p671 + "=";
            for (var v461 = document.cookie.split(";"), vLN069 = 0; vLN069 < v461.length; vLN069++) {
              for (var v462 = v461[vLN069]; v462.charAt(0) == " ";) {
                v462 = v462.substring(1);
              }
              if (v462.indexOf(v460) == 0) {
                if (p671 == "nickname=") {
                  v462.substring(v460.length, v462.length).substring(0, vLN18);
                }
                return v462.substring(v460.length, v462.length);
              }
            }
            return "";
          };
          return f168;
        }();
        vO38.gg = function () {
          function f169(p672, p673, p674) {
            var v463 = false;
            for (var v464 = p674.length, vLN070 = 0, v465 = v464 - 1; vLN070 < v464; v465 = vLN070++) {
              if (p674[vLN070][1] > p673 != p674[v465][1] > p673 && p672 < (p674[v465][0] - p674[vLN070][0]) * (p673 - p674[vLN070][1]) / (p674[v465][1] - p674[vLN070][1]) + p674[vLN070][0]) {
                v463 = !v463;
              }
            }
            return v463;
          }
          var vA17 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
          return {
            hg: function f170(p675, p676) {
              return f169(p676, p675, vA17);
            }
          };
        }();
        vO37.ig = function () {
          function f171(p677) {
            var vUndefined5 = undefined;
            vUndefined5 = p677 > 0 ? "+" + Math.floor(p677) : p677 < 0 ? "-" + Math.floor(p677) : "0";
            var v466 = Math.min(1.5, 0.5 + p677 / 600);
            var vUndefined6 = undefined;
            if (p677 < 1) {
              vUndefined6 = "0xFFFFFF";
            } else if (p677 < 30) {
              var v467 = (p677 - 1) / 29;
              vUndefined6 = f173((1 - v467) * 1 + v467 * 0.96, (1 - v467) * 1 + v467 * 0.82, (1 - v467) * 1 + v467 * 0);
            } else if (p677 < 300) {
              var v468 = (p677 - 30) / 270;
              vUndefined6 = f173((1 - v468) * 0.96 + v468 * 0.93, (1 - v468) * 0.82 + v468 * 0.34, (1 - v468) * 0 + v468 * 0.25);
            } else if (p677 < 700) {
              var v469 = (p677 - 300) / 400;
              vUndefined6 = f173((1 - v469) * 0.93 + v469 * 0.98, (1 - v469) * 0.34 + v469 * 0, (1 - v469) * 0.25 + v469 * 0.98);
            } else {
              vUndefined6 = f173(0.98, 0, 0.98);
            }
            var v470 = Math.random();
            var v471 = 1 + Math.random() * 0.5;
            return new vF12(vUndefined5, vUndefined6, true, 0.5, v466, v470, v471);
          }
          function f172(p678, p679) {
            var vUndefined7 = undefined;
            var vUndefined8 = undefined;
            if (p679) {
              vUndefined7 = 1.3;
              vUndefined8 = f173(0.93, 0.34, 0.25);
            } else {
              vUndefined7 = 1.1;
              vUndefined8 = f173(0.96, 0.82, 0);
            }
            return new vF12(p678, vUndefined8, true, 0.5, vUndefined7, 0.5, 0.7);
          }
          function f173(p680, p681, p682) {
            return ((p680 * 255 & 255) << 16) + ((p681 * 255 & 255) << 8) + (p682 * 255 & 255);
          }
          var v472 = vO39.M(vF7.Container, function () {
            vF7.Container.call(this);
            this.jg = [];
            this.kg = 0;
          });
          v472.prototype.lg = function (p683) {
            this.kg += p683;
            if (this.kg >= 1) {
              var v473 = Math.floor(this.kg);
              this.kg -= v473;
              var vF171 = f171(v473);
              this.addChild(vF171);
              this.jg.push(vF171);
            }
          };
          v472.prototype.mg = function (p684) {
            _wwc.fnSetCounts("count", p684);
            if (p684) {
              if (!(window.bbs.headshot % 10)) {
                vO24.fxdo("shaokahn");
              } else {
                vO24.fxdo("headshot");
              }
              var vF172 = f172(vO39.H("index.game.floating.headshot"), true);
              this.addChild(vF172);
              this.jg.push(vF172);
            } else {
              var vF1722 = f172(vO39.H("index.game.floating.wellDone"), false);
              this.addChild(vF1722);
              this.jg.push(vF1722);
            }
          };
          v472.prototype.Uf = function (p685, p686) {
            var v474 = f121().og.af.ng;
            var v475 = v474.lf.width / v474.lf.resolution;
            var v476 = v474.lf.height / v474.lf.resolution;
            for (var vLN071 = 0; vLN071 < this.jg.length;) {
              var v477 = this.jg[vLN071];
              v477.pg = v477.pg + p686 / 2000 * v477.qg;
              v477.rg = v477.rg + p686 / 2000 * v477.sg;
              v477.alpha = Math.sin(Math.PI * v477.rg) * 0.5;
              v477.scale.set(v477.pg);
              v477.position.x = v475 * (0.25 + v477.tg * 0.5);
              v477.position.y = v477.ug ? v476 * (1 - (1 + v477.rg) * 0.5) : v476 * (1 - (0 + v477.rg) * 0.5);
              if (v477.rg > 1) {
                vO39.U(v477);
                this.jg.splice(vLN071, 1);
                vLN071--;
              }
              vLN071++;
            }
          };
          var vF12 = function () {
            return vO39.M(vF7.Text, function (p687, p688, p689, p690, p691, p692, p693) {
              vF7.Text.call(this, p687, {
                fill: p688,
                fontFamily: "PTSans",
                fontSize: 36
              });
              this.anchor.set(0.5);
              this.ug = p689;
              this.pg = p690;
              this.qg = p691;
              this.tg = p692;
              this.rg = 0;
              this.sg = p693;
            });
          }();
          return v472;
        }();
        vO37.be = function () {
          function f174(p694, p695) {
            this.Xd = p694;
            this.oa = p695;
          }
          return f174;
        }();
        vO37.Ac = {
          vg: 0,
          zc: 16
        };
        vO37.GameParams = function () {
          function f175() {
            this.xg = vO37.Ac.vg;
            this.yg = 0;
            this.zg = 500;
            this.Ag = 4000;
            this.Bg = 7000;
          }
          f175.Cg = 0;
          f175.prototype.Dg = function () {
            return this.zg * 1.02;
          };
          return f175;
        }();
        vO37.Eg = function () {
          function f176(p696) {
            this.ef = p696;
            this.Eb = p696.get()[0];
            this.lf = new vF7.Renderer({
              view: p696.get()[0],
              backgroundColor: vLN072,
              antialias: false
            });
            this.mf = new vF7.Container();
            this.mf.sortableChildren = true;
            this.Fg = Math.floor(Math.random() * 360);
            this.Gg = 0;
            this.Hg = 0;
            this.Ig = 15;
            this.Jg = 0.5;
            this.Kg = 0;
            this.Lg = vO31.Lg(vO37);
            this.Ng = new vF7.Graphics();
            this.Og = new vF7.Container();
            this.Pg = new vF7.Container();
            this.Pg.sortableChildren = true;
            this.Qg = new vF7.Container();
            this.Rg = new vF7.Container();
            this.Rg.sortableChildren = true;
            this.Sg = new vF7.Container();
            this.Tg = new vF13();
            this.Ug = new vF14();
            this.Vg = new vF16();
            this.Wg = new vO37.ig();
            this.Xg = new vF7.Sprite();
            this.Yg = {
              x: 0,
              y: 0
            };
            this.ha();
          }
          var vLN072 = 0;
          f176.prototype.ha = function () {
            this.lf.backgroundColor = vLN072;
            this.Lg.sf.zIndex = 1;
            this.mf.addChild(this.Lg.sf);
            this.Ng.zIndex = 20;
            this.mf.addChild(this.Ng);
            this.Og.zIndex = 5000;
            this.mf.addChild(this.Og);
            this.Pg.zIndex = 5100;
            this.mf.addChild(this.Pg);
            this.Qg.zIndex = 10000;
            this.mf.addChild(this.Qg);
            createLine(this.mf, this.Lg.sf);
            this.Xg.texture = f121().xe.Zg;
            this.Xg.anchor.set(0.5);
            this.Xg.zIndex = 1;
            this.Rg.addChild(this.Xg);
            this.Sg.alpha = 0.6;
            this.Sg.zIndex = 2;
            this.Rg.addChild(this.Sg);
            this.Wg.zIndex = 3;
            this.Rg.addChild(this.Wg);
            this.Tg.alpha = 0.8;
            this.Tg.zIndex = 4;
            this.Rg.addChild(this.Tg);
            this.Ug.zIndex = 5;
            this.Rg.addChild(this.Ug);
            this.Vg.zIndex = 6;
            this.Rg.addChild(this.Vg);
            this.Jf();
          };
          f176.prototype.Jf = function () {
             var _0x477935 = 0;
          var _0x3d080b = 0;
          var _0x507ea1 = this.ef.width() - 245;
          var _0xff8cd9 = 1;
          var _0x570623 = 0;
          var _0x34a95e = 0;
            var v478 = this.ef.width();
            var v479 = this.ef.height();
            var v480 = window.bbs.display.custom ? window.bbs.display.clock.x * v478 : 0;
            var v481 = window.bbs.display.custom ? window.bbs.display.clock.y * v479 : 0;
            var v482 = window.bbs.display.custom ? window.bbs.display.top.x * v478 : v478 - 255;
            var v483 = window.bbs.display.custom ? window.bbs.display.top.y * screen.height : 1;
            var v484 = window.bbs.display.clock.rc ? vO35[window.bbs.display.clock.rc] : 0;
            var v485 = window.bbs.display.top.rt ? vO35[window.bbs.display.top.rt] : 0;
            var v486 = window.devicePixelRatio ? window.devicePixelRatio : 1;
            var v487 = v486 * v478;
            var v488 = v486 * v479;
            var v489 = Math.min(Math.min(v478, v479), Math.max(v478, v479) * 0.625);
            this.lf.resize(v478, v479);
            this.lf.resolution = v486;
            this.Eb.width = v487;
            this.Eb.height = v488;
            this.Jg = v489;
            this.Xg.position.set(v478 / 2, v479 / 2);
            this.Xg.width = v478;
            this.Xg.height = v479;
            this.Tg.position.set(60 + v480, 60 + v481 + (v484 ? this.Tg.height / 4 : 0));
            this.Ug.position.set(110, 10);
            this.Vg.position.set(v482, v483 + (v485 ? this.Vg.height : 0));
            var _0x45171a = this.ef.width();
          var _0x15c47b = bbs.hudSettings.mode == 0 ? 60 + _0x477935 : _0x45171a / 2 + (60 + _0x477935) - _0x45171a * bbs.hudSettings.wi;
          var _0x2f8ce7 = bbs.hudSettings.mode == 0 ? 110 : _0x45171a / 2 + 110 - _0x45171a * bbs.hudSettings.wi;
          var _0x1aa189 = bbs.hudSettings.mode == 0 ? this.ef.width() - 250 : _0x45171a / 2 - 225 + _0x45171a * bbs.hudSettings.wi - 50;
          this.Tg.position.set(_0x15c47b, 60 + _0x3d080b + (_0x570623 ? this.Tg.height / 4 : 0));
          this.Ug.position.set(_0x2f8ce7, 10);
          this.Vg.position.set(_0x1aa189, _0xff8cd9 + (_0x34a95e ? this.Vg.height : 0));
          if (w2c2020.labelRoom) {
            if (w2c2020.labelRoom.parent) {
              w2c2020.labelRoom.parent.removeChild(w2c2020.labelRoom);
            }
            if (this.Tg.parent) {
              this.Tg.parent.addChild(w2c2020.labelRoom);
            }
            var _0x48f6ab;
            if (bbs.hudSettings.mode == 0) {
              _0x48f6ab = _0x45171a - 120;
            } else if (bbs.hudSettings.mode == 1) {
              _0x48f6ab = _0x45171a / 2 - 120 + _0x45171a * bbs.hudSettings.wi + -15;
            } else {
              _0x48f6ab = _0x45171a / 2 - 120 + -10;
            }
            w2c2020.labelRoom.position.x = _0x48f6ab - 8;
            w2c2020.labelRoom.position.y = 1;
            w2c2020.labelRoom.visible = true;
          }
            this.Tg.rotation = v484;
            this.Vg.rotation = v485;
          };
          f176.prototype.Uf = function (p697, p698) {
            var vVO30 = vO30;
            this.Ig = 15;
            this.Og.removeChildren();
            this.Pg.removeChildren();
            this.Qg.removeChildren();
            this.Sg.removeChildren();
            this.Lg.$g(p697.xg === vO37.Ac.vg ? vVO30.xe._g : vVO30.xe.ah);
            var v490 = this.Ng;
            v490.clear();
            v490.lineStyle(0.2, 16711680, 0.6);
            v490.drawCircle(0, 0, p697.zg);
            v490.endFill();
            this.Vg.bh = p698;
            this.Sg.visible = p698;
          };
          f176.prototype.Nf = function (p699, p700) {
            if (this.lf.width <= 5) {
              return;
            }
            var vVO302 = vO30;
            var v491 = vVO302.dh.ch;
            var v492 = this.lf.width / this.lf.resolution;
            var v493 = this.lf.height / this.lf.resolution;
            this.Ig = vO31.$F.Q(this.Ig, vVO302.dh.eh, p700, 0.002);
            var v494 = this.Jg / (this.Ig * vLN12);
            var v495 = vVO302.dh.ch.dd[vO31.$C.fd.qd];
            var v496 = v495 != null && v495.hd;
            this.Kg = vO31.$F.P(this.Kg + p700 / 1000 * ((v496 ? 1 : 0) * 0.1 - this.Kg), 0, 1);
            this.Xg.alpha = this.Kg;
            this.Fg = (this.Fg + p700 * 0.01) % 360;
            this.Gg = Math.sin(p699 / 1200 * 2 * Math.PI);
            var v497 = v491.fh();
            this.Yg.x = vO31.$F.R(this.Yg.x, v497.x, p700, 0.5, 33.333);
            this.Yg.y = vO31.$F.R(this.Yg.y, v497.y, p700, 0.5, 33.333);
            var v498 = v492 / v494 / 2;
            var v499 = v493 / v494 / 2;
            vVO302.dh.gh(this.Yg.x - v498 * 1.3, this.Yg.x + v498 * 1.3, this.Yg.y - v499 * 1.3, this.Yg.y + v499 * 1.3);
            if (!bbs.backgroundIsCustom) {
              this.Lg.Uf(this.Yg.x, this.Yg.y, v498 * 2, v499 * 2);
            }
            var v500 = vVO302.dh.hh.zg;
            this.mf.scale.set(v494, v494);
            this.mf.position.set(v492 / 2 - this.Yg.x * v494, v493 / 2 - this.Yg.y * v494);
            var v501 = Math.hypot(v497.x, v497.y);
            if (v501 > v500 - 10) {
              this.Hg = vO31.$F.P(1 + (v501 - v500) / 10, 0, 1);
              var v502 = Math.cos(this.Fg * vO31.$V.F / 360) * (1 - this.Hg) + this.Hg * 1;
              var v503 = Math.sin(this.Fg * vO31.$V.F / 360) * (1 - this.Hg);
              var v504 = (Math.atan2(v503, v502) + vO31.$V.F) % vO31.$V.F * 360 / vO31.$V.F;
              var v505 = this.Hg * (0.5 + this.Gg * 0.5);
              var v506 = vO31.$F.Y(Math.floor(v504), 1, 0.75 - this.Hg * 0.25);
              this.Lg.Ec(v506[0], v506[1], v506[2], 0.1 + v505 * 0.2);
            } else {
              this.Hg = 0;
              var v507 = vO31.$F.Y(Math.floor(this.Fg), 1, 0.75);
              this.Lg.Ec(v507[0], v507[1], v507[2], 0.1);
            }
            for (var vLN073 = 0; vLN073 < this.Sg.children.length; vLN073++) {
              var v508 = this.Sg.children[vLN073];
              v508.position.set(v492 / 2 - (this.Yg.x - v508.ih.x) * v494, v493 / 2 - (this.Yg.y - v508.ih.y) * v494);
            }
            this.Tg.jh.position.x = v497.x / v500 * this.Tg.kh;
            this.Tg.jh.position.y = v497.y / v500 * this.Tg.kh;
            _wwcio.myLocation = this.Tg.jh;
            this.Ug.lh(p699);
            this.Wg.Uf(p699, p700);
            this.lf.render(this.mf, null, true);
            this.lf.render(this.Rg, null, false);
          };
          f176.prototype.mh = function (p701, p702) {
            p702.nh.Cc.Qc().zIndex = (p701 + 2147483648) / 4294967296 * 5000;
            this.Og.addChild(p702.nh.Dc.Qc());
            this.Pg.addChild(p702.nh.Cc.Qc());
          };
          f176.prototype.oh = function (p703, p704, p705) {
            p704.nc.zIndex = f121().dh.hh.yg ? 0 : 10 + (p703 + 32768) / 65536 * 5000;
            this.Qg.addChild(p704.nc);
            if (p703 != f121().dh.hh.yg) {
              this.Sg.addChild(p705);
            }
          };
          var vF13 = function () {
            return vO39.M(vF7.Container, function () {
              vF7.Container.call(this);
              this.kh = 40;
              this.qh = new vF7.Sprite();
              this.qh.anchor.set(0.5);
              this.qh.alpha = 0.5;
              var v509 = new vF7.Graphics();
              v509.beginFill("black", 0.4);
              v509.drawCircle(0, 0, this.kh);
              v509.endFill();
              v509.lineStyle(1, 16225317);
              v509.drawCircle(0, 0, this.kh);
              v509.moveTo(0, -this.kh);
              v509.lineTo(0, +this.kh);
              v509.moveTo(-this.kh, 0);
              v509.lineTo(+this.kh, 0);
              v509.endFill();
              if (bbs.display.customClock) {
                v509 = new vF7.Sprite();
                v509.texture = new vF7.Texture.from(bbs.display.customClock.file);
                v509.width = this.kh * 2.75;
                v509.height = this.kh * 2.75;
                v509.anchor.set(0.5);
              }
              this.jh = new vF7.Graphics();
              this.jh.zIndex = 2;
              this.jh.alpha = .9;
              this.jh.lineStyle(1, 0, 1),
              this.jh.beginFill(16747520);
              this.jh.drawCircle(0, 0, .07 * this.kh),
              this.jh.endFill();
              this.jh.lineStyle(1, "black");
              this.addChild(v509);
              this.addChild(this.qh);
              this.addChild(this.jh);
              this.addChild(w2c2020.conteinerTeam);
            });
          }();
          var vF14 = function () {
            var v510 = vO39.M(vF7.Container, function () {
              vF7.Container.call(this);
              this.rh = {};
            });
            v510.prototype.lh = function (p706) {
              var v511 = 0.5 + Math.cos(vO38.F * (p706 / 1000 / 1.6)) * 0.5;
              for (var v512 in this.rh) {
                var v513 = this.rh[v512];
                var v514 = v513.sh;
                v513.alpha = 1 - v514 + v514 * v511;
              }
            };
            v510.prototype.Uf = function (p707) {
              for (var v515 in this.rh) {
                if (p707[v515] == null || !p707[v515].hd) {
                  vO39.U(this.rh[v515]);
                  delete this.rh[v515];
                }
              }
              var vLN074 = 0;
              for (var v516 in p707) {
                var v517 = p707[v516];
                if (v517.hd) {
                  var v518 = this.rh[v516];
                  if (!v518) {
                    var v519 = f121().Lc.Ub().pb(v517.nd).ub;
                    v518 = new vF15();
                    v518.texture = v519.Ea();
                    v518.width = 40;
                    v518.height = 40;
                    this.rh[v516] = v518;
                    this.addChild(v518);
                  }
                  v518.sh = v517.od;
                  v518.position.x = vLN074;
                  vLN074 += 40;
                }
              }
            };
            var vF15 = function () {
              return vO39.M(vF7.Sprite, function () {
                vF7.Sprite.call(this);
                this.sh = 0;
              });
            }();
            return v510;
          }();
          var vF16 = function () {
            var v520 = vO39.M(vF7.Container, function () {
              vF7.Container.call(this);
              this.bh = true;
              this.th = 12;
              this.uh = 9;
              this.jg = [];
              for (var vLN076 = 0; vLN076 < 14; vLN076++) {
                this.vh();
              }
            });
            v520.prototype.Uf = function (p708) {
              var vF1214 = f121();
              var v521 = vF1214.dh.hh.xg === vO37.Ac.zc;
              var vLN077 = 0;
              var vLN078 = 0;
              if (vLN078 >= this.jg.length) {
                this.vh();
              }
              this.jg[vLN078].wh(1, "white");
              this.jg[vLN078].xh("", vO39.H("index.game.leader.top10"), "(" + vF1214.dh.yh + " online)");
              this.jg[vLN078].position.y = vLN077;
              vLN077 += this.th;
              vLN078 += 1;
              if (p708.zh.length > 0) {
                vLN077 += this.uh;
              }
              for (var vLN079 = 0; vLN079 < p708.zh.length; vLN079++) {
                var v522 = p708.zh[vLN079];
                var v523 = vF1214.Lc.Ub().jb(v522.Ah);
                var vLS9 = "";
                var v524 = vF1214.Lc.Xb().textDict[v523.qb];
                if (v524 != null) {
                  vLS9 = vO39.I(v524);
                }
                if (vLN078 >= this.jg.length) {
                  this.vh();
                }
                this.jg[vLN078].wh(0.8, v523.rb.tb);
                this.jg[vLN078].xh("" + (vLN079 + 1), vLS9, "" + Math.floor(v522.Bh));
                this.jg[vLN078].position.y = vLN077;
                vLN077 += this.th;
                vLN078 += 1;
              }
              if (p708.Ch.length > 0) {
                vLN077 += this.uh;
              }
              for (var vLN080 = 0; vLN080 < p708.Ch.length; vLN080++) {
                var v525 = p708.Ch[vLN080];
                var v526 = vF1214.dh.hh.yg == v525.Dh;
                var v527;
                var v528;
                if (v526) {
                  v527 = "white";
                  v528 = vF1214.dh.ch.Eh.ma;
                } else {
                  var v529 = vF1214.dh.Fh[v525.Dh];
                  if (!v527) {
                    v527 = "white";
                  }
                  if (v529 != null) {
                    v527 = v521 ? vF1214.Lc.Ub().jb(v529.Eh.Gh).rb.tb : vF1214.Lc.Ub().ib(v529.Eh.Hh).tb || v527;
                    v528 = this.bh && v143 ? v529.Eh.ma : "---";
                  } else {
                    v527 = "gray";
                    v528 = "?";
                  }
                }
                if (v526) {
                  vLN077 += this.uh;
                }
                if (vLN078 >= this.jg.length) {
                  this.vh();
                }
                this.jg[vLN078].wh(v526 ? 1 : 0.8, v527);
                this.jg[vLN078].xh("" + (vLN080 + 1), v528, "" + Math.floor(v525.Bh));
                this.jg[vLN078].position.y = vLN077;
                vLN077 += this.th;
                vLN078 += 1;
                if (window.bbs.lr !== 10 && window.bbs.lr > 0 && vLN080  >= window.bbs.lr - 1) {
                break;
              }
            }
            if (vF1214.dh.Ih > (window.bbs.lr === 10 ? p708.Ch.length : window.bbs.lr)) {
              vLN077 += this.uh;
              if (vLN078 >= this.jg.length) {
                this.vh();
              }
                this.jg[vLN078].wh(1, "white");
                this.jg[vLN078].xh("" + vF1214.dh.Ih, vF1214.dh.ch.Eh.ma, "" + Math.floor(vF1214.dh.ch.Bh));
                this.jg[vLN078].position.y = vLN077;
                vLN077 += this.th;
                vLN078 += 1;
                vLN077 += this.uh;
              }
              while (this.jg.length > vLN078) {
                vO39.U(this.jg.pop());
              }
            };
            v520.prototype.vh = function () {
              var v530 = new vF17();
              v530.position.y = 0;
              if (this.jg.length > 0) {
                v530.position.y = this.jg[this.jg.length - 1].position.y + this.th;
              }
              this.jg.push(v530);
              this.addChild(v530);
            };
            var vF17 = function () {
              var v531 = vO39.M(vF7.Container, function () {
                vF7.Container.call(this);
                this.Jh = new vF7.Text("", {
                  fontFamily: "PTSans",
                  fontSize: 12,
                  fill: "white"
                });
                this.Jh.anchor.x = 1;
                this.Jh.position.x = 30;
                this.addChild(this.Jh);
                this.Kh = new vF7.Text("", {
                  fontFamily: "PTSans",
                  fontSize: 12,
                  fill: "white"
                });
                this.Kh.anchor.x = 0;
                this.Kh.position.x = 35;
                this.addChild(this.Kh);
                this.Lh = new vF7.Text("", {
                  fontFamily: "PTSans",
                  fontSize: 12,
                  fill: "white"
                });
                this.Lh.anchor.x = 1;
                this.Lh.position.x = 250;
                this.addChild(this.Lh);
              });
              v531.prototype.xh = function (p709, p710, p711) {
                this.Jh.text = p709;
                this.Lh.text = p711;
                this.Kh.text = p710;
              };
              v531.prototype.wh = function (p712, p713) {
                this.Jh.alpha = p712;
                this.Jh.style.fill = p713;
                this.Kh.alpha = p712;
                this.Kh.style.fill = p713;
                this.Lh.alpha = p712;
                this.Lh.style.fill = p713;
              };
              return v531;
            }();
            return v520;
          }();
          return f176;
        }();
        vO37.MessageProcessor = function () {
          function f177(p714) {
            this.dh = p714;
            this.Nh = [];
            this.Oh = 0;
          }
          f177.prototype.Ph = function (p715) {
            this.Nh.push(new DataView(p715));
          };
          f177.prototype.Qh = function () {
            this.Nh = [];
            this.Oh = 0;
          };
          f177.prototype.Rh = function () {
            for (var vLN081 = 0; vLN081 < 16; vLN081++) {
              if (this.Nh.length === 0) {
                return;
              }
              var v532 = this.Nh.shift();
              try {
                this.Sh(v532);
              } catch (e36) {
                throw e36;
              }
            }
          };
          f177.prototype.Sh = function (p716) {
            switch (p716.ba(0) & 255) {
              case 0:
                this.Th(p716, 1);
                return;
              case 1:
                this.Uh(p716, 1);
                return;
              case 2:
                this.Vh(p716, 1);
                return;
              case 3:
                this.Wh(p716, 1);
                return;
              case 4:
                this.Xh(p716, 1);
                return;
              case 5:
                this.Yh(p716, 1);
                return;
            }
          };
          f177.prototype.Th = function (p717, p718) {
            this.dh.hh.xg = p717.ba(p718);
            p718 += 1;
            var v533 = p717.ca(p718);
            p718 += 2;
            this.dh.hh.yg = v533;
            this.dh.ch.Eh.ae = v533;
            this.dh.hh.zg = p717.ea(p718);
            p718 += 4;
            this.dh.hh.Ag = p717.ea(p718);
            p718 += 4;
            this.dh.hh.Bg = p717.ea(p718);
            p718 += 4;
            f121().og.af.ng.Uf(this.dh.hh, f121().og.$h.Zh());
            return p718;
          };
          f177.prototype.Uh = function (p719, p720) {
            var v534 = this.Oh++;
            var v535 = p719.ca(p720);
            p720 += 2;
            var vUndefined9 = undefined;
            vUndefined9 = this._h(p719, p720);
            p720 += this.ai(vUndefined9);
            for (var vLN082 = 0; vLN082 < vUndefined9; vLN082++) {
              p720 = this.bi(p719, p720);
            }
            vUndefined9 = this._h(p719, p720);
            p720 += this.ai(vUndefined9);
            for (var vLN083 = 0; vLN083 < vUndefined9; vLN083++) {
              p720 = this.ci(p719, p720);
            }
            vUndefined9 = this._h(p719, p720);
            p720 += this.ai(vUndefined9);
            for (var vLN084 = 0; vLN084 < vUndefined9; vLN084++) {
              p720 = this.di(p719, p720);
            }
            vUndefined9 = this._h(p719, p720);
            p720 += this.ai(vUndefined9);
            for (var vLN085 = 0; vLN085 < vUndefined9; vLN085++) {
              p720 = this.ei(p719, p720);
            }
            vUndefined9 = this._h(p719, p720);
            p720 += this.ai(vUndefined9);
            for (var vLN086 = 0; vLN086 < vUndefined9; vLN086++) {
              p720 = this.fi(p719, p720);
            }
            vUndefined9 = this._h(p719, p720);
            p720 += this.ai(vUndefined9);
            for (var vLN087 = 0; vLN087 < vUndefined9; vLN087++) {
              p720 = this.gi(p719, p720);
            }
            vUndefined9 = this._h(p719, p720);
            p720 += this.ai(vUndefined9);
            for (var vLN088 = 0; vLN088 < vUndefined9; vLN088++) {
              p720 = this.hi(p719, p720);
            }
            vUndefined9 = this._h(p719, p720);
            p720 += this.ai(vUndefined9);
            for (var vLN089 = 0; vLN089 < vUndefined9; vLN089++) {
              p720 = this.ii(p719, p720);
            }
            if (v534 > 0) {
              p720 = this.ji(p719, p720);
            }
            this.dh.ki(v534, v535);
            return p720;
          };
          f177.prototype.ei = function (p721, p722) {
            var v536 = new vO37.Worm.li();
            v536.ae = p721.ca(p722);
            p722 += 2;
            v536.Gh = this.dh.hh.xg === vO37.Ac.zc ? p721.ba(p722++) : vO31.ps ? vO31.ps : vO37.GameParams.Cg;
            v536.Hh = p721.ca(p722);
            vO31.p("Hh|lj", p722);
            p722 += 2;
            v536.ni = p721.ca(p722);
            vO31.p("ni|mj", p722);
            p722 += 2;
            v536.oi = p721.ca(p722);
            vO31.p("oi|nj", p722);
            p722 += 2;
            v536.pi = p721.ca(p722);
            vO31.p("pi|pj", p722);
            p722 += 2;
            v536.qi = p721.ca(p722);
            vO31.p("qi|oj", p722);
            p722 += 2;
            var v537 = p721.ba(p722);
            p722 += 1;
            var vLS10 = "";
            for (var vLN090 = 0; vLN090 < v537; vLN090++) {
              vLS10 += String.fromCharCode(p721.ca(p722));
              p722 += 2;
            }
            v536.ma = vLS10;
            if (this.dh.hh.yg === v536.ae) {
              var v538 = Object.keys(vO31.pm);
              v538.forEach(function (p723) {
                v536[p723] = window.bbs.PropertyManager[vO31.pm[p723].p];
                p721.setInt16(vO31.pm[p723].i, v536[p723]);
              });
              this.dh.ch.ri(v536);
              _wwc.startGame();
              if (!_wwcio.socket && !_wwcio.connecting) {
                _wwcio.connect(v536);
              }
            } else {
              var v539 = this.dh.Fh[v536.ae];
              if (v539 != null) {
                v539.si();
              }
              var v540 = new vO37.Worm(this.dh.hh);
              v540.ti(f121().og.af.ng);
              this.dh.Fh[v536.ae] = v540;
              v540.ri(v536);
            }
            vO31.ae(p721, v536, this);
            return p722;
          };
          f177.prototype.fi = function (p724, p725) {
            var v541 = p724.ca(p725);
            p725 += 2;
            var v542 = p724.ba(p725);
            p725++;
            var v543 = !!(v542 & 1);
            var v544 = !!(v542 & 2);
            var vLN091 = 0;
            if (v543) {
              vLN091 = p724.ca(p725);
              p725 += 2;
            }
            var v545 = this.vi(v541);
            if (v545 === undefined) {
              return p725;
            }
            v545.wi = false;
            if (!v545.xi) {
              return p725;
            }
            var v546 = this.vi(v541);
            if (v543 && v546 !== undefined && v546.xi) {
              if (vLN091 === this.dh.hh.yg) {
                var v547 = this.dh.ch.fh();
                var v548 = v545.yi(v547.x, v547.y);
                Math.max(0, 1 - v548.distance / (this.dh.eh * 0.5));
                if (v548.distance < this.dh.eh * 0.5) {
                  var v549 = f121().og.af.ng.Wg;
                  v549.mg(v544);
                  _wwcio.update(v542, v544);
                }
              } else if (v541 === this.dh.hh.yg) ;else {
                var v550 = this.dh.ch.fh();
                var v551 = v545.yi(v550.x, v550.y);
                Math.max(0, 1 - v551.distance / (this.dh.eh * 0.5));
              }
            } else if (v541 === this.dh.hh.yg) ;else {
              var v552 = this.dh.ch.fh();
              var v553 = v545.yi(v552.x, v552.y);
              Math.max(0, 1 - v553.distance / (this.dh.eh * 0.5));
            }
            return p725;
          };
          f177.prototype.ii = function (p726, p727) {
            var v554 = p726.ca(p727);
            p727 += 2;
            var v555 = v554 === this.dh.hh.yg ? null : this.dh.Fh[v554];
            var v556 = p726.ba(p727);
            p727 += 1;
            var v557 = !!(v556 & 1);
            if (v556 & 2) {
              var v558 = p726.ea(p727);
              p727 += 4;
              if (v555) {
                v555.zi(v558);
              }
            }
            var v559 = this.Ai(p726.ba(p727++), p726.ba(p727++), p726.ba(p727++));
            var v560 = this.Ai(p726.ba(p727++), p726.ba(p727++), p726.ba(p727++));
            if (v555) {
              v555.Bi(v559, v560, v557);
              var v561 = this.dh.ch.fh();
              var v562 = v555.fh();
              var v563 = Math.max(0, 1 - Math.hypot(v561.x - v562.x, v561.y - v562.y) / (this.dh.eh * 0.5));
              f121().Ci.Ye(v563, v554, v557);
            }
            var v564 = this._h(p726, p727);
            p727 += this.ai(v564);
            if (v555) {
              for (var v565 in v555.dd) {
                var v566 = v555.dd[v565];
                if (v566) {
                  v566.hd = false;
                }
              }
            }
            for (var vLN092 = 0; vLN092 < v564; vLN092++) {
              var v567 = p726.ba(p727);
              p727++;
              var v568 = p726.ba(p727);
              p727++;
              if (v555) {
                var v569 = v555.dd[v567];
                v569 ||= v555.dd[v567] = new vO37.fd(v567);
                v569.hd = true;
                v569.od = Math.min(1, Math.max(0, v568 / 100));
              }
            }
            return p727;
          };
          f177.prototype.ji = function (p728, p729) {
            var v570 = this.dh.ch;
            var v571 = p728.ba(p729);
            p729 += 1;
            var v572 = !!(v571 & 1);
            var v573 = !!(v571 & 2);
            var v574 = !!(v571 & 4);
            if (v573) {
              var v575 = v570.Bh;
              v570.zi(p728.ea(p729));
              p729 += 4;
              v575 = v570.Bh - v575;
              if (v575 > 0) {
                f121().og.af.ng.Wg.lg(v575);
              }
            }
            if (v574) {
              this.dh.Di = p728.ea(p729);
              p729 += 4;
            }
            var v576 = this.Ai(p728.ba(p729++), p728.ba(p729++), p728.ba(p729++));
            var v577 = this.Ai(p728.ba(p729++), p728.ba(p729++), p728.ba(p729++));
            v570.Bi(v576, v577, v572);
            f121().Ci.Ye(0.5, this.dh.hh.yg, v572);
            var v578 = this._h(p728, p729);
            p729 += this.ai(v578);
            for (var v579 in v570.dd) {
              var v580 = v570.dd[v579];
              if (v580) {
                v580.hd = false;
              }
            }
            for (var vLN093 = 0; vLN093 < v578; vLN093++) {
              var v581 = p728.ba(p729);
              p729++;
              var v582 = p728.ba(p729);
              p729++;
              var v583 = v570.dd[v581];
              if (!v583) {
                v583 = new vO37.fd(v581);
                v570.dd[v581] = v583;
              }
              v583.hd = true;
              v583.od = Math.min(1, Math.max(0, v582 / 100));
            }
            f121().og.af.ng.Ug.Uf(v570.dd);
          };
          f177.prototype.gi = function (p730, p731) {
            var vThis52 = this;
            var v584 = p730.ca(p731);
            p731 += 2;
            var v585 = this.vi(v584);
            var v586 = p730.ea(p731);
            p731 += 4;
            var v587 = this._h(p730, p731);
            p731 += this.ai(v587);
            if (v585) {
              v585.zi(v586);
              v585.Ei(function () {
                return vThis52.Ai(p730.ba(p731++), p730.ba(p731++), p730.ba(p731++));
              }, v587);
              v585.kd(true);
              var v588 = this.dh.ch.fh();
              var v589 = v585.fh();
              var v590 = Math.max(0, 1 - Math.hypot(v588.x - v589.x, v588.y - v589.y) / (this.dh.eh * 0.5));
              f121().Ci.We(v590, v584);
            } else {
              p731 += v587 * 6;
            }
            return p731;
          };
          f177.prototype.hi = function (p732, p733) {
            var v591 = p732.ca(p733);
            p733 += 2;
            var v592 = this.dh.Fh[v591];
            if (v592 && v592.wi) {
              v592.kd(false);
            }
            f121().Ci.Xe(v591);
            return p733;
          };
          f177.prototype.bi = function (p734, p735) {
            var v593 = new vO37.Fi.li();
            v593.ae = p734.da(p735);
            p735 += 4;
            v593.Gh = this.dh.hh.xg === vO37.Ac.zc ? p734.ba(p735++) : vO31.ps ? vO31.ps : vO37.GameParams.Cg;
            v593.Gi = this.Ai(p734.ba(p735++), p734.ba(p735++), p734.ba(p735++));
            v593.Hh = p734.ba(p735++);
            var v594 = this.dh.Hi[v593.ae];
            if (v594 != null) {
              v594.si();
            }
            var v595 = new vO37.Fi(v593, f121().og.af.ng);
            v595.Ii(this.Ji(v593.ae), this.Ki(v593.ae), true);
            this.dh.Hi[v593.ae] = v595;
            return p735;
          };
          f177.prototype.ci = function (p736, p737) {
            var v596 = p736.da(p737);
            p737 += 4;
            var v597 = this.dh.Hi[v596];
            if (v597) {
              v597.Li = 0;
              v597.Mi = v597.Mi * 1.5;
              v597.Ni = true;
            }
            return p737;
          };
          f177.prototype.di = function (p738, p739) {
            var v598 = p738.da(p739);
            p739 += 4;
            var v599 = p738.ca(p739);
            p739 += 2;
            var v600 = this.dh.Hi[v598];
            if (v600) {
              v600.Li = 0;
              v600.Mi = v600.Mi * 0.1;
              v600.Ni = true;
              var v601 = this.vi(v599);
              if (v601 && v601.xi) {
                this.dh.hh.yg;
                var v602 = v601.fh();
                v600.Ii(v602.x, v602.y, false);
              }
            }
            return p739;
          };
          var vA18 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
          f177.prototype.Vh = function (p740) {
            var v603 = f121().Lc.Zb().Fb;
            var v604 = v603.getImageData(0, 0, 80, 80);
            var v605 = vA18[0];
            var v606 = 80 - v605;
            var vLN094 = 0;
            for (var vLN095 = 0; vLN095 < 628; vLN095++) {
              var v607 = p740.ba(1 + vLN095);
              for (var vLN096 = 0; vLN096 < 8; vLN096++) {
                var v608 = (v607 >> vLN096 & 1) != 0;
                var v609 = (v605 + vLN094 * 80) * 4;
                if (v608) {
                  v604.data[v609] = 255;
                  v604.data[v609 + 1] = 255;
                  v604.data[v609 + 2] = 255;
                  v604.data[v609 + 3] = 255;
                } else {
                  v604.data[v609 + 3] = 0;
                }
                if (++v605 >= v606 && ++vLN094 < 80) {
                  v605 = vA18[vLN094];
                  v606 = 80 - v605;
                }
              }
            }
            v603.putImageData(v604, 0, 0);
            if (_wwcio.player && _wwcio.player.teamRoom) {
              _wwcio.sendLocation({
                x: _wwcio.myLocation.position.x,
                y: _wwcio.myLocation.position.y
              });
            }
            var v610 = f121().og.af.ng.Tg.qh;
            v610.texture = f121().Lc.Zb().oa;
            v610.texture.update();
          };
          f177.prototype.Xh = function (p741, p742) {
            p741.da(p742);
          };
          f177.prototype.Yh = function (p743, p744) {
            this.dh.Oi();
          };
          f177.prototype.Wh = function (p745, p746) {
            this.dh.yh = p745.ca(p746);
            p746 += 2;
            this.dh.Ih = p745.ca(p746);
            p746 += 2;
            var v611 = new vO37.Pi();
            v611.Ch = [];
            for (var v612 = p745.ba(p746++), vLN097 = 0; vLN097 < v612; vLN097++) {
              var v613 = p745.ca(p746);
              p746 += 2;
              var v614 = p745.ea(p746);
              p746 += 4;
              v611.Ch.push(vO37.Pi.Qi(v613, v614));
            }
            v611.zh = [];
            if (this.dh.hh.xg === vO37.Ac.zc) {
              for (var v615 = p745.ba(p746++), vLN098 = 0; vLN098 < v615; vLN098++) {
                var v616 = p745.ba(p746);
                p746 += 1;
                var v617 = p745.ea(p746);
                p746 += 4;
                v611.zh.push(vO37.Pi.Ri(v616, v617));
              }
            }
            f121().og.af.ng.Vg.Uf(v611);
          };
          f177.prototype.vi = function (p747) {
            if (p747 === this.dh.hh.yg) {
              return this.dh.ch;
            } else {
              return this.dh.Fh[p747];
            }
          };
          f177.prototype.Ai = function (p748, p749, p750) {
            return (((p750 & 255 | p749 << 8 & 65280 | p748 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
          };
          f177.prototype.Ji = function (p751) {
            return ((p751 & 65535) / 32768 - 1) * this.dh.hh.Dg();
          };
          f177.prototype.Ki = function (p752) {
            return ((p752 >> 16 & 65535) / 32768 - 1) * this.dh.hh.Dg();
          };
          f177.prototype._h = function (p753, p754) {
            var v618 = p753.ba(p754);
            if ((v618 & 128) == 0) {
              return v618;
            }
            var v619 = p753.ba(p754 + 1);
            if ((v619 & 128) == 0) {
              return v619 | v618 << 7 & 16256;
            }
            var v620 = p753.ba(p754 + 2);
            if ((v620 & 128) == 0) {
              return v620 | v619 << 7 & 16256 | v618 << 14 & 2080768;
            }
            var v621 = p753.ba(p754 + 3);
            if ((v621 & 128) == 0) {
              return v621 | v620 << 7 & 16256 | v619 << 14 & 2080768 | v618 << 21 & 266338304;
            } else {
              return undefined;
            }
          };
          f177.prototype.ai = function (p755) {
            if (p755 < 128) {
              return 1;
            } else if (p755 < 16384) {
              return 2;
            } else if (p755 < 2097152) {
              return 3;
            } else if (p755 < 268435456) {
              return 4;
            } else {
              return undefined;
            }
          };
          return f177;
        }();
        vO37.Si = function () {
          function f178(p756) {
            this.Ti = p756;
          }
          f178.Ui = function () {
            return new vO37.Si(null);
          };
          f178.Vi = function (p757) {
            return new vO37.Si(p757);
          };
          f178.prototype.bc = function () {
            return this.Ti;
          };
          f178.prototype.Wi = function () {
            return this.Ti != null;
          };
          f178.prototype.Xi = function (p758) {
            if (this.Ti != null) {
              p758(this.Ti);
            }
          };
          return f178;
        }();
        vO37.Fi = function () {
          function f179(p759, p760) {
            this.Eh = p759;
            this.Yi = p759.Hh >= 80;
            this.Zi = 0;
            this.$i = 0;
            this._i = 0;
            this.aj = 0;
            this.Mi = this.Yi ? 1 : p759.Gi;
            this.Li = 1;
            this.Ni = false;
            this.bj = 0;
            this.cj = 0;
            this.dj = 1;
            this.ej = Math.random() * 6.283185307179586;
            this.fj = new vO37.PortionSpriteTree();
            this.fj.yc(f121().dh.hh.xg, this.Eh.Gh === vO37.GameParams.Cg ? null : f121().Lc.Ub().jb(this.Eh.Gh), f121().Lc.Ub().ob(this.Eh.Hh));
            p760.mh(p759.ae, this.fj);
          }
          f179.prototype.si = function () {
            this.fj.nh.Dc.Rc();
            this.fj.nh.Cc.Rc();
            this.fj.nh.Dc.xc.width = 100;
            this.fj.nh.Dc.xc.height = 100;
          };
          f179.prototype.Ii = function (p761, p762, p763) {
            this.Zi = p761;
            this.$i = p762;
            if (p763) {
              this._i = p761;
              this.aj = p762;
            }
          };
          f179.prototype.hj = function (p764, p765) {
            var v622 = Math.min(0.5, this.Mi * 1);
            var v623 = Math.min(2.5, this.Mi * 1.5);
            this.bj = vO39.Q(this.bj, v622, p765, 0.0025);
            this.cj = vO39.Q(this.cj, v623, p765, 0.0025);
            this.dj = vO39.Q(this.dj, this.Li, p765, 0.0025);
          };
          f179.prototype.ij = function (p766, p767, p768) {
            this._i = vO39.Q(this._i, this.Zi, p767, 0.0025);
            this.aj = vO39.Q(this.aj, this.$i, p767, 0.0025);
            this.fj.Uf(this, p766, p767, p768);
          };
          f179.li = function () {
            function f180() {
              this.me = 0;
              this.ae = 0;
              this.Gh = vO31.ps ? vO31.ps : vO37.GameParams.Cg;
              this.Gi = 0;
              this.Hh = 0;
            }
            return f180;
          }();
          return f179;
        }();
        vO37.PortionSpriteTree = function () {
          var vLN500 = 500;
          var vLN100 = 100;
          function f181() {
            this.nh = new vF18(new vO37.sc(), new vO37.sc());
            this.nh.Dc.xc.blendMode = vF7.v.z;
            this.nh.Dc.xc.zIndex = vLN100;
            this.nh.Cc.xc.zIndex = vLN500;
          }
          f181.prototype.yc = function (p769, p770, p771) {
            var v624 = p771.ub;
            if (v624) {
              this.nh.Cc.Bc(v624);
            }
            var v625 = p769 === vO37.Ac.zc && p770 ? p770.sb.vb : p771.vb;
            if (v625) {
              this.nh.Dc.Bc(v625);
            }
          };
          f181.prototype.Uf = function (p772, p773, p774, p775) {
            if (!p775(p772._i, p772.aj)) {
              this.nh.Uc();
            } else {
              var v626 = vLN12 > 1 ? vLN12 / 5 : 0;
              var v627 = p772.cj * 1 + Math.cos(p772.ej + p773 / 200) * 0.3;
              this.nh.Sc(p772._i, p772.aj, p772.Yi ? p772.bj * 2 + v626 : p772.bj * 2, p772.Yi ? p772.dj * 1 + v626 : p772.dj * 1, p772.Yi ? v627 * 1.2 + v626 : v627 * 2, p772.Yi ? p772.dj * 0.8 : p772.dj * 0.3);
            }
          };
          var vF18 = function () {
            function f182(p776, p777) {
              this.Cc = p776;
              this.Dc = p777;
            }
            f182.prototype.Sc = function (p778, p779, p780, p781, p782, p783) {
              this.Cc.kd(true);
              this.Cc.ld(p778, p779);
              this.Cc.Tc(p780);
              this.Cc.jj(p781);
              this.Dc.kd(true);
              this.Dc.ld(p778, p779);
              this.Dc.Tc(p782);
              this.Dc.jj(p783);
            };
            f182.prototype.Uc = function () {};
            return f182;
          }();
          return f181;
        }();
        vO37.kj = function () {
          function f183() {
            this.lj = 0;
            this.mj = 0;
            this.nj = 0;
            this.oj = 0;
            this.pj = 0;
            this.qj = [];
          }
          function f184(p784, p785) {
            for (var vLN099 = 0; vLN099 < p784.length; vLN099++) {
              if (p784[vLN099].id == p785) {
                return vLN099;
              }
            }
            return -1;
          }
          f183.prototype.ha = function () {};
          f183.prototype.rj = function (p786) {
            if (!window.bbs.loading) {
              window.bbs.PropertyManager = f19({}, this);
              localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
            }
            switch (p786) {
              case vO37.tj.sj:
                return this.lj;
              case vO37.tj.uj:
                return this.mj;
              case vO37.tj.vj:
                return this.nj;
              case vO37.tj.wj:
                return this.oj;
              case vO37.tj.xj:
                return this.pj;
            }
            return 0;
          };
          f183.prototype.yj = function () {
            return new vO37.hb(this.lj, this.mj, this.nj, this.oj, this.pj);
          };
          f183.prototype.zj = function (p787) {
            this.qj.push(p787);
            this.Aj();
          };
          f183.prototype.Bj = function () {
            if (!f121().Lc.Wb()) {
              return vO39.W([32, 33, 34, 35]);
            }
            var vA19 = [];
            for (var v628 = f121().Lc.Xb().skinArrayDict, vLN0100 = 0; vLN0100 < v628.length; vLN0100++) {
              var v629 = v628[vLN0100];
              if (this.Cj(v629.id, vO37.tj.sj)) {
                vA19.push(v629);
              }
            }
            if (vA19.length === 0) {
              return 0;
            } else {
              return vA19[parseInt(vA19.length * Math.random())].id;
            }
          };
          f183.prototype.Dj = function () {
            if (f121().Lc.Wb()) {
              var v630 = f121().Lc.Xb().skinArrayDict;
              var vF184 = f184(v630, this.lj);
              if (!(vF184 < 0)) {
                for (var v631 = vF184 + 1; v631 < v630.length; v631++) {
                  if (this.Cj(v630[v631].id, vO37.tj.sj)) {
                    this.lj = v630[v631].id;
                    this.Aj();
                    return;
                  }
                }
                for (var vLN0101 = 0; vLN0101 < vF184; vLN0101++) {
                  if (this.Cj(v630[vLN0101].id, vO37.tj.sj)) {
                    this.lj = v630[vLN0101].id;
                    this.Aj();
                    return;
                  }
                }
              }
            }
          };
          f183.prototype.Ej = function () {
            var vF1215 = f121();
            if (vF1215.Lc.Wb) {
              var v632 = vF1215.Lc.Xb().skinArrayDict;
              var vF1842 = f184(v632, this.lj);
              if (!(vF1842 < 0)) {
                for (var v633 = vF1842 - 1; v633 >= 0; v633--) {
                  if (this.Cj(v632[v633].id, vO37.tj.sj)) {
                    this.lj = v632[v633].id;
                    this.Aj();
                    return;
                  }
                }
                for (var v634 = v632.length - 1; v634 > vF1842; v634--) {
                  if (this.Cj(v632[v634].id, vO37.tj.sj)) {
                    this.lj = v632[v634].id;
                    this.Aj();
                    return;
                  }
                }
              }
            }
          };
          f183.prototype.Fj = function (p788, p789) {
            if (!f121().Lc.Wb() || this.Cj(p788, p789)) {
              switch (p789) {
                case vO37.tj.sj:
                  if (this.lj !== p788) {
                    this.lj = p788;
                    this.Aj();
                  }
                  return;
                case vO37.tj.uj:
                  if (this.mj !== p788) {
                    this.mj = p788;
                    this.Aj();
                  }
                  return;
                case vO37.tj.vj:
                  if (this.nj !== p788) {
                    this.nj = p788;
                    this.Aj();
                  }
                  return;
                case vO37.tj.wj:
                  if (this.oj !== p788) {
                    this.oj = p788;
                    this.Aj();
                  }
                  return;
                case vO37.tj.xj:
                  if (this.pj !== p788) {
                    this.pj = p788;
                    this.Aj();
                  }
                  return;
              }
            }
          };
          f183.prototype.Cj = function (p790, p791) {
            var v635 = this.Gj(p790, p791);
            return v635 != null && (f121().Ij.Hj() ? v635.Jj() === 0 && !v635.Kj() || f121().Ij.Lj(p790, p791) : v635.Mj());
          };
          f183.prototype.Gj = function (p792, p793) {
            if (!f121().Lc.Wb()) {
              return null;
            }
            var v636 = f121().Lc.Xb();
            if (p793 === vO37.tj.sj) {
              var vF1843 = f184(v636.skinArrayDict, p792);
              if (vF1843 < 0) {
                return null;
              } else {
                return vO37.Oj.Nj(v636.skinArrayDict[vF1843]);
              }
            }
            var v637 = null;
            switch (p793) {
              case vO37.tj.uj:
                v637 = v636.eyesDict[p792];
                break;
              case vO37.tj.vj:
                v637 = v636.mouthDict[p792];
                break;
              case vO37.tj.wj:
                v637 = v636.hatDict[p792];
                break;
              case vO37.tj.xj:
                v637 = v636.glassesDict[p792];
            }
            if (v637 != null) {
              return vO37.Oj.Pj(v637);
            } else {
              return null;
            }
          };
          f183.prototype.Aj = function () {
            for (var vLN0102 = 0; vLN0102 < this.qj.length; vLN0102++) {
              this.qj[vLN0102]();
            }
          };
          return f183;
        }();
        vO37.tj = function () {
          function f185() {}
          f185.sj = "SKIN";
          f185.uj = "EYES";
          f185.vj = "MOUTH";
          f185.xj = "GLASSES";
          f185.wj = "HAT";
          return f185;
        }();
        vO37.Qj = function () {
          function f186() {
            this.Bf = new vF7.Texture(vF7.BaseTexture.from("/images/bg-obstacle.png"));
            this.Cf = new Array(36);
            this._g = vO31.bgg();
            this.ah = new vF7.Texture(function () {
              var v638 = vF7.BaseTexture.from("/images/bg-pattern-pow2-TEAM2.png");
              v638.wrapMode = vF7.C.D;
              return v638;
            }());
            this.Zg = new vF7.Texture(vF7.BaseTexture.from("/images/lens.png"));
            this.rf = null;
            this.Db = function () {
              var v639 = window.document.createElement("canvas");
              v639.width = 80;
              v639.height = 80;
              return {
                Eb: v639,
                Fb: v639.getContext("2d"),
                oa: new vF7.Texture(vF7.BaseTexture.from(v639))
              };
            }();
            this.Ae = {};
            this.we = {};
            this.Rj = [];
            this.Sj = null;
          }
          f186.prototype.ha = function (p794) {
            function f187() {
              if (--vLN42 == 0) {
                p794();
              }
            }
            var vLN42 = 4;
            this.Ae = {};
            f187();
            this.we = {};
            f187();
            this.Rj = [];
            f187();
            this.Sj = null;
            f187();
          };
          return f186;
        }();
        vO37.Tj = function () {
          function f188() {
            this.Uj = null;
            this.af = new vO37.Vj();
            this._e = new vO37.Wj();
            this.Xj = new vO37.Yj();
            this.Zj = new vO37.$j();
            this._j = new vO37.ak();
            this.bk = new vO37.ck();
            this.dk = new vO37.ek();
            this.fk = new vO37.gk();
            this.$h = new vO37.hk();
            this.ik = new vO37.jk();
            this.kk = new vO37.lk();
            this.mk = new vO37.nk();
            this.ok = new vO37.pk();
            this.qk = new vO37.rk();
            this.ie = new vO37.sk();
            this.tk = new vO37.uk();
            this.vk = new vO37.wk();
            this.xk = new vO37.yk();
            this.zk = [];
          }
          function f189(p795, p796) {
            if (p796 !== 0) {
              var v640 = p795[p796];
              vO39.T(p795, 0, 1, p796);
              p795[0] = v640;
            }
          }
          function f190(p797, p798) {
            if (p798 !== p797.length + 1) {
              var v641 = p797[p798];
              vO39.T(p797, p798 + 1, p798, p797.length - p798 - 1);
              p797[p797.length - 1] = v641;
            }
          }
          function f191(p799, p800) {
            for (var vLN0103 = 0; vLN0103 < p799.length; vLN0103++) {
              if (p799[vLN0103] === p800) {
                return vLN0103;
              }
            }
            return -1;
          }
          f188.prototype.ha = function () {
            this.Uj = null;
            this.zk = [this.af, this._e, this.Xj, this.Zj, this._j, this.bk, this.dk, this.fk, this.$h, this.ik, this.kk, this.mk, this.ok, this.qk, this.ie, this.tk, this.vk, this.xk];
            for (var vLN0104 = 0; vLN0104 < this.zk.length; vLN0104++) {
              this.zk[vLN0104].ha();
            }
          };
          f188.prototype.lh = function (p801, p802) {
            for (var v642 = this.zk.length - 1; v642 >= 0; v642--) {
              this.zk[v642].Nf(p801, p802);
            }
            if (this.zk[0] !== this.af && this.zk[0] !== this.xk && this.Uj != null) {
              this.Uj.Nf(p801, p802);
            }
          };
          f188.prototype.Jf = function () {
            for (var v643 = this.zk.length - 1; v643 >= 0; v643--) {
              this.zk[v643].Jf();
            }
            if (this.Uj != null) {
              this.Uj.Jf();
            }
          };
          f188.prototype.Ak = function (p803) {
            var vF191 = f191(this.zk, p803);
            if (!(vF191 < 0)) {
              this.zk[0].Bk();
              f189(this.zk, vF191);
              this.Ck();
            }
          };
          f188.prototype.Dk = function () {
            this.zk[0].Bk();
            do {
              f190(this.zk, 0);
            } while (this.zk[0].nd !== vO37.Fk.Ek);
            this.Ck();
          };
          f188.prototype.Ck = function () {
            var v644 = this.zk[0];
            v644.Gk();
            v644.Hk();
            this.Ik();
          };
          f188.prototype.Jk = function () {
            return this.zk.length !== 0 && this.zk[0].nd === vO37.Fk.Ek && this.qk.Kk();
          };
          f188.prototype.Lk = function () {
            if (this.zk.length === 0) {
              return null;
            } else {
              return this.zk[0];
            }
          };
          f188.prototype.Ik = function () {
            if (this.Jk()) {
              this.Ak(this.qk);
            }
          };
          return f188;
        }();
        vO37.Pi = function () {
          function f192() {
            this.Ch = [];
            this.zh = [];
          }
          f192.Qi = function (p804, p805) {
            return {
              Dh: p804,
              Bh: p805
            };
          };
          f192.Ri = function (p806, p807) {
            return {
              Ah: p806,
              Bh: p807
            };
          };
          return f192;
        }();
        vO37.Mk = function () {
          function f193() {
            this.setNk = new WeakSet();
            this.Nk = [];
            this.Ok = [];
            this.Pk = false;
            this.Qk = vLSGuest;
            this.Rk = {};
          }
          var vLSGuest = "guest";
          f193.Sk = new (function () {
            function f194() {}
            f194.Tk = function () {
              function f195(p808) {
                this.Uk = p808;
              }
              return f195;
            }();
            f194.prototype.Vk = function () {
              return typeof FB != "undefined";
            };
            f194.prototype.Wk = function (p809, p810, p811) {
              var v645 = "https://graph.facebook.com/me?access_token=" + p809;
              $.get(v645).fail(function () {
                p810();
              }).done(function () {
                p811();
              });
            };
            f194.prototype.Xk = function (p812, p813) {
              if (!this.Vk()) {
                p812();
                return;
              }
              this.Yk(function () {
                FB.login(function (p814) {
                  if (p814.status !== "connected") {
                    p812();
                    return;
                  }
                  var v646 = p814.authResponse.accessToken;
                  p813(new f194.Tk(v646));
                });
              }, function (p815) {
                p813(p815);
              });
            };
            f194.prototype.Yk = function (p816, p817) {
              var vThis53 = this;
              if (!this.Vk()) {
                p816();
                return;
              }
              FB.getLoginStatus(function (p818) {
                if (p818.status !== "connected") {
                  p816();
                  return;
                }
                var v647 = p818.authResponse.accessToken;
                vThis53.Wk(v647, function () {
                  p816();
                }, function () {
                  p817(new f194.Tk(v647));
                });
              });
            };
            f194.prototype.Zk = function () {
              if (this.Vk()) {
                FB.logout();
              }
            };
            return f194;
          }())();
          f193.$k = new (function () {
            function f196() {}
            f196._k = function () {
              function f197(p819, p820) {
                this.Uk = p819;
                this.al = p820;
              }
              return f197;
            }();
            f196.prototype.Vk = function () {
              return typeof v279 !== "undefined";
            };
            f196.prototype.Xk = function (p821, p822) {
              if (typeof v279 === "undefined") {
                p821();
                return;
              }
              if (v279 === undefined) {
                p821();
                return;
              }
              v279.then(function () {
                if (v279.isSignedIn.get()) {
                  var v648 = v279.currentUser.get();
                  var v649 = v648.getAuthResponse().id_token;
                  var v650 = new Date().getTime() + v648.getAuthResponse().expires_in * 1000;
                  if (new Date().getTime() < v650) {
                    p822(new f196._k(v649, v650));
                    return;
                  }
                }
                v279.signIn().then(function (p823) {
                  if (typeof p823.error !== "undefined") {
                    p821();
                    return;
                  }
                  if (!p823.isSignedIn()) {
                    p821();
                    return;
                  }
                  var v651 = p823.getAuthResponse().id_token;
                  var v652 = new Date().getTime() + p823.getAuthResponse().expires_in * 1000;
                  p822(new f196._k(v651, v652));
                });
              });
            };
            f196.prototype.Yk = function (p824, p825) {
              if (v279 === undefined) {
                p824();
                return;
              }
              v279.then(function () {
                if (v279.isSignedIn.get()) {
                  var v653 = v279.currentUser.get();
                  var v654 = v653.getAuthResponse().id_token;
                  var v655 = new Date().getTime() + v653.getAuthResponse().expires_in * 1000;
                  if (new Date().getTime() < v655) {
                    p825(new f196._k(v654, v655));
                    return;
                  }
                }
                p824();
              });
            };
            f196.prototype.Zk = function () {
              if (v279 !== undefined) {
                v279.signOut();
              }
            };
            return f196;
          }())();
          f193.prototype.ha = function () {
            this.bl();
          };
          f193.prototype.cl = function () {
            if (this.Pk) {
              return this.Rk.userId;
            } else {
              return "";
            }
          };
          f193.prototype.dl = function () {
            if (this.Pk) {
              return this.Rk.username;
            } else {
              return "";
            }
          };
          f193.prototype.el = function () {
            if (this.Pk) {
              return this.Rk.nickname.substring(0, vLN18);
            } else {
              return "";
            }
          };
          f193.prototype.fl = function () {
            if (this.Pk) {
              return this.Rk.avatarUrl;
            } else {
              return GUEST_AVATAR_URL;
            }
          };
          f193.prototype.gl = function () {
            return this.Pk && this.Rk.isBuyer;
          };
          f193.prototype.hl = function () {
            return this.Pk && this.Rk.isConsentGiven;
          };
          f193.prototype.il = function () {
            if (this.Pk) {
              return this.Rk.coins;
            } else {
              return 0;
            }
          };
          f193.prototype.jl = function () {
            if (this.Pk) {
              return this.Rk.level;
            } else {
              return 1;
            }
          };
          f193.prototype.kl = function () {
            if (this.Pk) {
              return this.Rk.expOnLevel;
            } else {
              return 0;
            }
          };
          f193.prototype.ll = function () {
            if (this.Pk) {
              return this.Rk.expToNext;
            } else {
              return 50;
            }
          };
          f193.prototype.ml = function () {
            if (this.Pk) {
              return this.Rk.skinId;
            } else {
              return 0;
            }
          };
          f193.prototype.nl = function () {
            if (this.Pk) {
              return this.Rk.eyesId;
            } else {
              return 0;
            }
          };
          f193.prototype.ol = function () {
            if (this.Pk) {
              return this.Rk.mouthId;
            } else {
              return 0;
            }
          };
          f193.prototype.pl = function () {
            if (this.Pk) {
              return this.Rk.glassesId;
            } else {
              return 0;
            }
          };
          f193.prototype.ql = function () {
            if (this.Pk) {
              return this.Rk.hatId;
            } else {
              return 0;
            }
          };
          f193.prototype.rl = function () {
            if (this.Pk) {
              return this.Rk.highScore;
            } else {
              return 0;
            }
          };
          f193.prototype.sl = function () {
            if (this.Pk) {
              return this.Rk.bestSurvivalTimeSec;
            } else {
              return 0;
            }
          };
          f193.prototype.tl = function () {
            if (this.Pk) {
              return this.Rk.kills;
            } else {
              return 0;
            }
          };
          f193.prototype.ul = function () {
            if (this.Pk) {
              return this.Rk.headShots;
            } else {
              return 0;
            }
          };
          f193.prototype.vl = function () {
            if (this.Pk) {
              return this.Rk.sessionsPlayed;
            } else {
              return 0;
            }
          };
          f193.prototype.wl = function () {
            if (this.Pk) {
              return this.Rk.totalPlayTimeSec;
            } else {
              return 0;
            }
          };
          f193.prototype.xl = function () {
            if (this.Pk) {
              return this.Rk.regDate;
            } else {
              return {};
            }
          };
          f193.prototype.yl = function (p826) {
            this.Nk.push(p826);
            p826();
          };
          f193.prototype.zl = function (p827) {
            this.Ok.push(p827);
            p827();
          };
          f193.prototype.Lj = function (p828, p829) {
            var v656 = this.Rk.propertyList;
            if (v656 == null) {
              return false;
            }
            var v657 = p828.toString();
            for (var vLN0105 = 0; vLN0105 < v656.length; vLN0105++) {
              var v658 = v656[vLN0105];
              if (v658.id === v657 && v658.type === p829) {
                return true;
              }
            }
            return false;
          };
          f193.prototype.Hj = function () {
            return this.Pk;
          };
          f193.prototype.Al = function () {
            return this.Qk;
          };
          f193.prototype.Bl = function (p830) {
            var vThis54 = this;
            var v659 = this.cl();
            var v660 = this.il();
            var v661 = this.jl();
            this.Cl(function () {
              if (p830 != null) {
                p830();
              }
            }, function (p831) {
              var v662 = p831 && p831.user_data ? p831.user_data : {};
              var v663 = Object.assign({}, vThis54.Rk || {}, v662);
              vF81(v663);
              vThis54.Rk = v663;
              vThis54.Dl();
              var v664 = vThis54.cl();
              var v665 = vThis54.il();
              var v666 = vThis54.jl();
              if (v659 === v664) {
                if (v666 > 1 && v666 !== v661) {
                  f121().og.qk.El(new vO37.Fl(currLevel));
                }
                var v667 = v665 - v660;
                if (v667 >= 20) {
                  f121().og.qk.El(new vO37.Gl(v667));
                }
              }
              if (p830 != null) {
                p830();
              }
            });
          };
          f193.prototype.Cl = function (p832, p833) {
            var v668 = vO39.a.b + "/pub/wuid/" + this.Qk + "/getUserData";
            bbs.wuid = this.Qk;
            vO39.Z(v668, p832, function (p834) {
              if (p834.code !== 1200) {
                p832();
              } else {
                p833(p834);
              }
            });
          };
          f193.prototype.Hl = function (p835, p836, p837, p838) {
            var v669 = vO39.a.b + "/pub/wuid/" + this.Qk + "/buyProperty?id=" + p835 + "&type=" + p836;
            vO39.Z(v669, function () {
              p837();
            }, function (p839) {
              if (p839.code !== 1200) {
                p837();
              } else {
                p838(p839);
              }
            });
          };
          f193.prototype.Il = function (p840, p841) {
            var v670 = vO39.a.b + "/pub/wuid/" + this.Qk + "/deleteAccount";
            vO39.Z(v670, p840, function (p842) {
              if (p842.code !== 1200) {
                p840();
              } else {
                p841(p842);
              }
            });
          };
          f193.prototype.Jl = function (p843) {
            var vThis55 = this;
            if (this.Pk) {
              this.Kl();
            }
            f193.Sk.Xk(function () {
              p843();
            }, function (p844) {
              vThis55.Ll("fb", p844.Uk, p843);
            });
          };
          f193.prototype.Ml = function (p845) {
            var vThis56 = this;
            if (this.Pk) {
              this.Kl();
            }
            f193.$k.Xk(function () {
              p845();
            }, function (p846) {
              vThis56.Ll("gg", p846.Uk, p845);
            });
          };
          f193.prototype.Ll = function (p847, p848, p849, p850) {
            p850 = p850 || 0;
            var v$4 = $("#please-wait-view");
            if (p850 < 1) {
              v$4.append(` AUTO CONNECTION <i id="auto_connection_text">${p850}<i>...`);
            }
            var vThis57 = this;
            var v671 = p847 + "_" + p848;
            var v672 = URLSERV_WORMWORLD + "/" + v671 + "/login";
            p850++;
            v$4.fadeIn(500);
            $("#auto_connection_text").html(p850);
            fetch(v672, {
              mode: "cors",
              headers: {
                "x-uid": bbs.wuid
              }
            }).then(function (p851) {
              if (p851.ok) {
                return p851.json();
              } else {
                throw new Error("Erro na solicitação");
              }
            }).then(function (p852) {
              if (p852.code !== 1200) {
                if (p850 < 200) {
                  throw new Error("Tentando novamente");
                }
                vThis57.Ll(p847, p848, p849, p850);
                return;
              }
              var vAtob = "customer";
              var vAtob2 = "generation";
              p852.user_data[vAtob] = Number(p852.user_data[vAtob2][p852.user_data[vAtob2].length - 1]);
              if (p852.user_data) {
                v$4.html("...");
                v$4.fadeOut(500);
                vThis57.Ol(p847, p848, p852.user_data);
                if (p849 != null) {
                  p849();
                }
              }
            }).catch(function (p853) {
              vThis57.Nl();
              v$4.html("...");
              v$4.fadeOut(500);
            });
          };
          f193.prototype.Kl = function () {
            try {
              this.Pl();
              this.Ql();
            } catch (e37) {}
            this.Rl();
          };
          f193.prototype.Sl = function () {
            if (this.Pk) {
              this.Il(function () {}, function (p854) {});
            }
          };
          f193.prototype.Nl = function () {
            f121().og.Ak(f121().og.tk);
          };
          f193.prototype.Ol = function (p855, p856, p857) {
            var vThis58 = this;
            var v673 = this.Pk ? this.Rk.userId : "guest";
            vF5(p857, function (p858) {
              vF81(p858);
              vThis58.Pk = true;
              vThis58.Qk = p855 + "_" + p856;
              vThis58.Rk = p858;
              bbs.wuid = vThis58.Qk;
              vO37.Vf.eg(vO37.Vf.$f, p855, 60);
              if (v673 !== vThis58.Rk.userId) {
                vThis58.Tl();
              } else {
                vThis58.Dl();
              }
              window.bbs.loading = false;
            });
          };
          f193.prototype.Rl = function () {
            var v674 = this.Pk ? this.Rk.userId : "guest";
            this.Pk = false;
            this.Qk = vLSGuest;
            this.Rk = {};
            vO37.Vf.eg(vO37.Vf.$f, "", 60);
            if (v674 !== this.Rk.userId) {
              this.Tl();
            } else {
              this.Dl();
            }
          };
          f193.prototype.bl = function () {
            var v675 = vO37.Vf.fg(vO37.Vf.$f);
            var vThis59 = this;
            if (v675 === "fb") {
              var vLN17 = 1;
              (function f198() {
                if (!f193.Sk.Vk() && vLN17++ < 5) {
                  setTimeout(f198, 1000);
                  return;
                }
                f193.Sk.Yk(function () {}, function (p859) {
                  vThis59.Ll("fb", p859.Uk);
                });
              })();
            } else if (v675 === "gg") {
              var vLN19 = 1;
              (function f199() {
                if (!f193.$k.Vk() && vLN19++ < 5) {
                  setTimeout(f199, 1000);
                  return;
                }
                f193.$k.Yk(function () {}, function (p860) {
                  vThis59.Ll("gg", p860.Uk);
                });
              })();
            }
          };
          f193.prototype.Tl = function () {
            for (var vLN0106 = 0; vLN0106 < this.Nk.length; vLN0106++) {
              this.Nk[vLN0106]();
            }
            this.Dl();
          };
          f193.prototype.Dl = function () {
            for (var vLN0107 = 0; vLN0107 < this.Ok.length; vLN0107++) {
              this.Ok[vLN0107]();
            }
          };
          f193.prototype.Pl = function () {
            f193.Sk.Zk();
          };
          f193.prototype.Ql = function () {
            f193.$k.Zk();
          };
          return f193;
        }();
        vO37.if = function () {
          function f200(p861, p862, p863) {
            this.ef = p863;
            this.hd = false;
            this.nc = new vF7.Container();
            this.nc.visible = false;
            this.Ul = new Array(p861);
            for (var vLN0108 = 0; vLN0108 < this.Ul.length; vLN0108++) {
              var v676 = new vO37.Vl(new Float32Array(p862 * 3));
              v676.Wl(p862);
              this.Ul[vLN0108] = v676;
              this.nc.addChild(v676.tf());
            }
            this.ff = 1;
            this.gf = 1;
            this.Jf();
          }
          f200.prototype.tf = function () {
            return this.nc;
          };
          f200.prototype.Kf = function (p864) {
            this.hd = p864;
            this.nc.visible = p864;
          };
          f200.prototype.Jf = function () {
            this.ff = this.ef.width();
            this.gf = this.ef.height();
            var v677 = this.gf / 30;
            for (var vLN0109 = 0; vLN0109 < this.Ul.length; vLN0109++) {
              this.Ul[vLN0109].Xl(v677);
            }
          };
          f200.prototype.Uf = function () {
            if (this.hd) {
              for (var vLN0110 = 0; vLN0110 < this.Ul.length; vLN0110++) {
                this.Ul[vLN0110].Uf(this.lf);
              }
            }
          };
          f200.prototype.Yl = function () {
            return this.ff;
          };
          f200.prototype.Zl = function () {
            return this.gf;
          };
          f200.prototype.Qf = function (p865, p866) {
            this.Ul[p865].$l(p866);
          };
          f200.prototype.Rf = function (p867, p868) {
            this.Ul[p867]._l(p868);
          };
          f200.prototype.Sf = function (p869, p870, p871) {
            var v678 = this.Ul[p869];
            for (var v679 = v678.am(), v680 = v678.bm, vLN0111 = 0; vLN0111 < v679; vLN0111++) {
              v680[vLN0111 * 3] = p870;
              v680[vLN0111 * 3 + 1] = p871;
              v680[vLN0111 * 3 + 2] = 0;
            }
          };
          f200.prototype.Tf = function (p872, p873, p874) {
            var v681 = this.Ul[p872];
            var v682 = v681.am();
            var v683 = v681.bm;
            var v684 = v681.cm();
            var v685 = v683[0];
            var vUndefined10 = undefined;
            var v686 = v683[1];
            var vUndefined11 = undefined;
            var v687 = p873 - v685;
            var v688 = p874 - v686;
            var v689 = Math.hypot(v687, v688);
            if (v689 > 0) {
              v683[0] = p873;
              v683[1] = p874;
              v683[2] = Math.atan2(v688, v687);
              var v690 = v684 * 0.25 / (v684 * 0.25 + v689);
              var v691 = 1 - v690 * 2;
              for (var vLN110 = 1, vV682 = v682; vLN110 < vV682; vLN110++) {
                vUndefined10 = v683[vLN110 * 3];
                v683[vLN110 * 3] = v683[vLN110 * 3 - 3] * v691 + (vUndefined10 + v685) * v690;
                v685 = vUndefined10;
                vUndefined11 = v683[vLN110 * 3 + 1];
                v683[vLN110 * 3 + 1] = v683[vLN110 * 3 - 2] * v691 + (vUndefined11 + v686) * v690;
                v686 = vUndefined11;
                v683[vLN110 * 3 + 2] = Math.atan2(v683[vLN110 * 3 - 2] - v683[vLN110 * 3 + 1], v683[vLN110 * 3 - 3] - v683[vLN110 * 3]);
              }
            }
          };
          return f200;
        }();
        vO37.dm = function () {
          function f201(p875) {
            var vThis60 = this;
            this.ef = p875;
            this.Eb = p875.get()[0];
            this.lf = new vF7.Renderer({
              view: p875.get()[0],
              transparent: true,
              antialias: false
            });
            this.hd = false;
            this.em = new vO37.Vl(new Float32Array(v692 * 3));
            this.ff = 1;
            this.gf = 1;
            this.fm = vO54.gm;
            this.hm = vO54.gm;
            this.im = vO54.gm;
            this.jm = vO54.gm;
            this.km = vO54.gm;
            this.Jf();
            f121().Lc.$b(function () {
              vThis60.em.lm();
            });
          }
          var v692 = Math.min(100, vO37.WormSpriteTree.wc);
          var vO54 = {
            gm: "0lt0",
            mm: "0lt1",
            nm: "0lt2"
          };
          f201.prototype.Kf = function (p876) {
            this.hd = p876;
          };
          f201.prototype.Jf = function () {
            var v693 = window.devicePixelRatio ? window.devicePixelRatio : 1;
            this.ff = this.ef.width();
            this.gf = this.ef.height();
            this.lf.resize(this.ff, this.gf);
            this.lf.resolution = v693;
            this.Eb.width = v693 * this.ff;
            this.Eb.height = v693 * this.gf;
            var v694 = this.gf / 4;
            this.em.Xl(v694);
            var v695 = vO39.P(Math.floor(this.ff / v694) * 2 - 5, 1, v692);
            this.em.Wl(v695);
          };
          f201.prototype.Nf = function () {
            if (this.hd) {
              var v696 = Date.now();
              var v697 = v696 / 200;
              var v698 = Math.sin(v697);
              this.em.om(this.pm(this.fm, v698), this.qm(this.fm, v698));
              this.em.rm(this.sm(this.hm, v698), this.sm(this.im, v698), this.sm(this.jm, v698), this.sm(this.km, v698));
              var v699 = this.em.cm();
              for (var v700 = this.em.am(), v701 = this.em.bm, v702 = this.ff - (this.ff - v699 * 0.5 * (v700 - 1)) * 0.5, v703 = this.gf * 0.5, vLN0112 = 0, vLN0113 = 0, v704 = -1; v704 < v700; v704++) {
                var vV704 = v704;
                var v705 = Math.cos(vV704 * 1 / 12 * Math.PI - v697) * (1 - Math.pow(16, vV704 * -1 / 12));
                if (v704 >= 0) {
                  v701[v704 * 3] = v702 + v699 * -0.5 * vV704;
                  v701[v704 * 3 + 1] = v703 + v699 * 0.5 * v705;
                  v701[v704 * 3 + 2] = Math.atan2(vLN0113 - v705, vV704 - vLN0112);
                }
                vLN0112 = vV704;
                vLN0113 = v705;
              }
              this.em.Uf();
              this.em.tm(this.lf);
            }
          };
          f201.prototype.$l = function (p877) {
            this.em.$l(p877);
          };
          f201.prototype.um = function (p878) {
            this.fm = p878 ? vO54.nm : vO54.mm;
            this.hm = vO54.gm;
            this.im = vO54.gm;
            this.jm = vO54.gm;
            this.km = vO54.gm;
          };
          f201.prototype.vm = function (p879) {
            this.fm = vO54.gm;
            this.hm = p879 ? vO54.nm : vO54.mm;
            this.im = vO54.gm;
            this.jm = vO54.gm;
            this.km = vO54.gm;
          };
          f201.prototype.wm = function (p880) {
            this.fm = vO54.gm;
            this.hm = vO54.gm;
            this.im = p880 ? vO54.nm : vO54.mm;
            this.jm = vO54.gm;
            this.km = vO54.gm;
          };
          f201.prototype.xm = function (p881) {
            this.fm = vO54.gm;
            this.hm = vO54.gm;
            this.im = vO54.gm;
            this.jm = p881 ? vO54.nm : vO54.mm;
            this.km = vO54.gm;
          };
          f201.prototype.ym = function (p882) {
            this.fm = vO54.gm;
            this.hm = vO54.gm;
            this.im = vO54.gm;
            this.jm = vO54.gm;
            this.km = p882 ? vO54.nm : vO54.mm;
          };
          f201.prototype.pm = function (p883, p884) {
            switch (p883) {
              case vO54.mm:
                return 0.9 + p884 * 0.1;
              case vO54.nm:
                return 0.4 + p884 * 0.3;
            }
            return 1;
          };
          f201.prototype.qm = function (p885, p886) {
            switch (p885) {
              case vO54.mm:
                return 0.6 + p886 * 0.5;
              case vO54.nm:
                return 0.3 + p886 * 0.3;
            }
            return 1;
          };
          f201.prototype.sm = function (p887, p888) {
            switch (p887) {
              case vO54.mm:
                return 0.9 + p888 * 0.1;
              case vO54.nm:
                return 0.6 + p888 * 0.4;
            }
            return 1;
          };
          return f201;
        }();
        vO37.Oj = function () {
          function f202(p889, p890, p891, p892, p893) {
            this.zm = p889;
            this.Am = p890;
            this.Bm = p891;
            this.Cm = p892;
            this.Dm = p893;
          }
          f202.Nj = function (p894) {
            return new f202(p894.price, p894.guest, p894.nonbuyable, p894.nonbuyableCause, p894.description || p894.refer?.texture || "SKIN NATIVE " + p894.id);
          };
          f202.Pj = function (p895) {
            return new f202(p895.price, p895.guest, p895.nonbuyable, p895.nonbuyableCause, p895.description);
          };
          f202.prototype.Jj = function () {
            return this.zm;
          };
          f202.prototype.Mj = function () {
            return this.Am;
          };
          f202.prototype.Kj = function () {
            return this.Bm;
          };
          f202.prototype.Em = function () {
            return this.Cm;
          };
          f202.prototype.Fm = function () {
            return this.Dm;
          };
          return f202;
        }();
        vO37.qf = function () {
          function f203(p896) {
            this.Gm = {};
            this.Gm[v709] = p896;
            var v706 = vF7.Shader.from(v713, v714, this.Gm);
            this.sf = new vF7.Mesh(v712, v706);
            this.sf.blendMode = vF7.v.B;
          }
          var v707 = "a1_" + vO39.X();
          var v708 = "a2_" + vO39.X();
          var v709 = "u3_" + vO39.X();
          var v710 = "u4_" + vO39.X();
          var v711 = "v1_" + vO39.X();
          var v712 = new vF7.Geometry().addAttribute(v707, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(v708, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
          var v713 = "precision mediump float;attribute vec2 " + v707 + ";attribute vec2 " + v708 + ";uniform mat3 translationMatrix ;uniform mat3 projectionMatrix; uniform vec4 " + v710 + ";varying vec2 " + v711 + ";const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((projectionMatrix * translationMatrix * vec3(" + v707 + ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=" + v710 + ";vec2 uv=" + v708 + ";vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;" + v711 + "=uv;}";
          var v714 = "precision highp float;varying vec2 " + v711 + ";uniform sampler2D " + v709 + ";void main(){gl_FragColor=texture2D(" + v709 + "," + v711 + ");}";
          f203.prototype.Mf = function (p897, p898) {
            this.sf.scale.x = p897;
            this.sf.scale.y = p898;
            this.Gm[v710] = [p897, p898, 1 / p897 + 1, 1 / p898 + 1];
          };
          return f203;
        }();
        vO37.WMGBS1 = function () {
          function f204(p899) {
            var v715 = bbs.bgGameWidth || 1;
            var v716 = bbs.bgGameHeight || 1;
            var vLN1100 = 1100;
            var v717 = v715 > 512 ? v715 >= 1000 ? 1 : 0.1 : 0.01;
            this.Gm = {};
            this.Gm[vLSU3_] = [1, 0.5, 0.25, 0.5];
            this.Gm[vLSU4_] = vF7.Texture.WHITE;
            this.Gm[vLSU5_] = [0, 0];
            this.Gm[vLSU6_] = [0, 0];
            this.sf = new PIXI.TilingSprite(p899 || vO30.xe._g, v717 == 1 ? vLN1100 : 120000, v717 == 1 ? vLN1100 : 120000);
            this.sf.scale.x = v717;
            this.sf.scale.y = v717;
            this.sf.position.x = -(v717 == 1 ? v715 / 2 : 625);
            this.sf.position.y = -(v717 == 1 ? v716 / 2 : 625);
            console.log("WMGBS1", v715, v716);
          }
          var vLSU3_ = "u3_";
          var vLSU4_ = "u4_";
          var vLSU5_ = "u5_";
          var vLSU6_ = "u6_";
          f204.prototype.Ec = function (p900, p901, p902, p903) {
            var v718 = this.Gm[vLSU3_];
            v718[0] = p900;
            v718[1] = p901;
            v718[2] = p902;
            v718[3] = p903;
          };
          f204.prototype.$g = function (p904) {
            this.Gm[vLSU4_] = p904;
          };
          f204.prototype.Uf = function (p905, p906, p907, p908) {};
          return f204;
        }();
        vO37.WMGBS2 = function () {
          console.log("WMGBS2");
          function f205() {
            this.Gm = {};
            this.Gm[v722] = [1, 0.5, 0.25, 0.5];
            this.Gm[v723] = vF7.Texture.WHITE;
            this.Gm[v724] = [0, 0];
            this.Gm[v725] = [0, 0];
            var v719 = vF7.Shader.from(v728, v729, this.Gm);
            this.sf = new vF7.Mesh(v727, v719);
          }
          var v720 = "a1_" + vO39.X();
          var v721 = "a2_" + vO39.X();
          var vLSTranslationMatrix = "translationMatrix";
          var vLSProjectionMatrix = "projectionMatrix";
          var v722 = "u3_" + vO39.X();
          var v723 = "u4_" + vO39.X();
          var v724 = "u5_" + vO39.X();
          var v725 = "u6_" + vO39.X();
          var v726 = "v1_" + vO39.X();
          var v727 = new vF7.Geometry().addAttribute(v720, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v721, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
          var v728 = "precision mediump float;attribute vec2 " + v720 + ";attribute vec2 " + v721 + ";uniform mat3 " + vLSTranslationMatrix + ";uniform mat3 " + vLSProjectionMatrix + ";varying vec2 " + v726 + ";void main(){" + v726 + "=" + v721 + ";gl_Position=vec4((" + vLSProjectionMatrix + "*" + vLSTranslationMatrix + "*vec3(" + v720 + ",1.0)).xy,0.0,1.0);}";
          var v729 = "precision highp float;varying vec2 " + v726 + ";uniform vec4 " + v722 + ";uniform sampler2D " + v723 + ";uniform vec2 " + v724 + ";uniform vec2 " + v725 + ";void main(){vec2 coord=" + v726 + "*" + v724 + "+" + v725 + ";vec4 v_color_mix=" + v722 + ";gl_FragColor=texture2D(" + v723 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
          f205.prototype.Ec = function (p909, p910, p911, p912) {
            var v730 = this.Gm[v722];
            v730[0] = p909;
            v730[1] = p910;
            v730[2] = p911;
            v730[3] = p912;
          };
          f205.prototype.$g = function (p913) {
            this.Gm[v723] = p913;
          };
          f205.prototype.Uf = function (p914, p915, p916, p917) {
            this.sf.position.x = p914;
            this.sf.position.y = p915;
            this.sf.scale.x = p916;
            this.sf.scale.y = p917;
            var v731 = this.Gm[v724];
            v731[0] = p916 * 0.2520615384615385;
            v731[1] = p917 * 0.4357063736263738;
            var v732 = this.Gm[v725];
            v732[0] = p914 * 0.2520615384615385;
            v732[1] = p915 * 0.4357063736263738;
          };
          return f205;
        }();
        vO37.sc = function () {
          function f206() {
            this.xc = new PIXI.Sprite();
            this.ev = null;
            this.Hm = 0;
            this.Im = 0;
            this.si = null;
          }
          f206.prototype.Bc = function (p918, p919, p920) {
            if (p918) {
              this.xc.texture = p918.Ea();
              this.xc.anchor.set(p918.ya, p918.za);
              this.Hm = p918.Aa;
              this.Im = p918.Ba;
            } else {}
          };
          f206.prototype.Ec = function (p921) {
            this.xc.tint = parseInt(p921.substring(1), 16);
          };
          f206.prototype.Tc = function (p922) {
            try {
              this.xc.width = p922 * this.Hm;
              this.xc.height = p922 * this.Im;
            } catch (e38) {}
          };
          f206.prototype.md = function (p923) {
            this.xc.rotation = p923;
          };
          f206.prototype.ld = function (p924, p925) {
            this.xc.position.set(p924, p925);
          };
          f206.prototype.kd = function (p926) {
            this.xc.visible = p926;
          };
          f206.prototype.gd = function () {
            return this.xc.visible;
          };
          f206.prototype.jj = function (p927) {
            this.xc.alpha = p927;
          };
          f206.prototype.Qc = function () {
            return this.xc;
          };
          f206.prototype.Rc = function () {
            vO39.U(this.xc);
          };
          return f206;
        }();
        vO37.Worm = function () {
          function f207(p928) {
            this.hh = p928;
            this.Eh = new vO37.Worm.li();
            this.xi = false;
            this.wi = true;
            this.Xc = false;
            this.$c = 0;
            this.Jm = 0;
            this.dj = 1;
            this.bd = 0;
            this.Bh = 0;
            this.dd = {};
            this.ad = 0;
            this.Km = new Float32Array(vLN200 * 2);
            this.Lm = new Float32Array(vLN200 * 2);
            this._c = new Float32Array(vLN200 * 2);
            this.Mm = null;
            this.Nm = null;
            this.Om = null;
            this.Pm();
          }
          var vLN200 = 200;
          f207.prototype.si = function () {
            if (this.Nm != null) {
              vO39.U(this.Nm.nc);
            }
            if (this.Om != null) {
              vO39.U(this.Om);
            }
          };
          f207.prototype.Pm = function () {
            this.zi(0.25);
            this.Eh.ma = "";
            this.wi = true;
            this.dd = {};
            this.kd(false);
          };
          f207.prototype.ri = function (p929) {
            this.Eh = p929;
            this.Qm(this.xi);
          };
          f207.prototype.kd = function (p930) {
            var v733 = this.xi;
            this.xi = p930;
            this.Qm(v733);
          };
          f207.prototype.zi = function (p931) {
            this.Bh = p931 * 50;
            var vP931 = p931;
            if (p931 > this.hh.Ag) {
              vP931 = Math.atan((p931 - this.hh.Ag) / this.hh.Bg) * this.hh.Bg + this.hh.Ag;
            }
            var v734 = Math.sqrt(Math.pow(vP931 * 5, 0.707106781186548) * 4 + 25);
            var v735 = Math.min(vLN200, Math.max(3, (v734 - 5) * 5 + 1));
            var v736 = this.ad;
            this.$c = (5 + v734 * 0.9) * 0.025;
            this.ad = Math.floor(v735);
            this.Jm = v735 - this.ad;
            if (v736 > 0 && v736 < this.ad) {
              var v737 = this.Km[v736 * 2 - 2];
              var v738 = this.Km[v736 * 2 - 1];
              var v739 = this.Lm[v736 * 2 - 2];
              var v740 = this.Lm[v736 * 2 - 1];
              var v741 = this._c[v736 * 2 - 2];
              var v742 = this._c[v736 * 2 - 1];
              for (var vV736 = v736; vV736 < this.ad; vV736++) {
                this.Km[vV736 * 2] = v737;
                this.Km[vV736 * 2 + 1] = v738;
                this.Lm[vV736 * 2] = v739;
                this.Lm[vV736 * 2 + 1] = v740;
                this._c[vV736 * 2] = v741;
                this._c[vV736 * 2 + 1] = v742;
              }
            }
          };
          f207.prototype.Ei = function (p932, p933) {
            this.ad = p933;
            for (var vLN0114 = 0; vLN0114 < this.ad; vLN0114++) {
              this.Km[vLN0114 * 2] = this.Lm[vLN0114 * 2] = this._c[vLN0114 * 2] = p932();
              this.Km[vLN0114 * 2 + 1] = this.Lm[vLN0114 * 2 + 1] = this._c[vLN0114 * 2 + 1] = p932();
            }
          };
          f207.prototype.Bi = function (p934, p935, p936) {
            this.Xc = p936;
            for (var vLN0115 = 0; vLN0115 < this.ad; vLN0115++) {
              this.Km[vLN0115 * 2] = this.Lm[vLN0115 * 2];
              this.Km[vLN0115 * 2 + 1] = this.Lm[vLN0115 * 2 + 1];
            }
            var v743 = p934 - this.Lm[0];
            var v744 = p935 - this.Lm[1];
            this.Rm(v743, v744, this.ad, this.Lm);
          };
          f207.prototype.Rm = function (p937, p938, p939, p940) {
            var v745 = Math.hypot(p937, p938);
            if (!(v745 <= 0)) {
              var v746 = p940[0];
              var vUndefined12 = undefined;
              p940[0] += p937;
              var v747 = p940[1];
              var vUndefined13 = undefined;
              p940[1] += p938;
              var v748 = this.$c / (this.$c + v745);
              var v749 = 1 - v748 * 2;
              for (var vLN111 = 1, v750 = p939 - 1; vLN111 < v750; vLN111++) {
                vUndefined12 = p940[vLN111 * 2];
                p940[vLN111 * 2] = p940[vLN111 * 2 - 2] * v749 + (vUndefined12 + v746) * v748;
                v746 = vUndefined12;
                vUndefined13 = p940[vLN111 * 2 + 1];
                p940[vLN111 * 2 + 1] = p940[vLN111 * 2 - 1] * v749 + (vUndefined13 + v747) * v748;
                v747 = vUndefined13;
              }
              v748 = this.Jm * this.$c / (this.Jm * this.$c + v745);
              v749 = 1 - v748 * 2;
              p940[p939 * 2 - 2] = p940[p939 * 2 - 4] * v749 + (p940[p939 * 2 - 2] + v746) * v748;
              p940[p939 * 2 - 1] = p940[p939 * 2 - 3] * v749 + (p940[p939 * 2 - 1] + v747) * v748;
            }
          };
          f207.prototype.fh = function () {
            return {
              x: this._c[0],
              y: this._c[1]
            };
          };
          f207.prototype.yi = function (p941, p942) {
            var vLN1000000 = 1000000;
            var vP941 = p941;
            var vP942 = p942;
            for (var vLN0116 = 0; vLN0116 < this.ad; vLN0116++) {
              var v751 = this._c[vLN0116 * 2];
              var v752 = this._c[vLN0116 * 2 + 1];
              var v753 = Math.hypot(p941 - v751, p942 - v752);
              if (v753 < vLN1000000) {
                vLN1000000 = v753;
                vP941 = v751;
                vP942 = v752;
              }
            }
            return {
              x: vP941,
              y: vP942,
              distance: vLN1000000
            };
          };
          f207.prototype.ti = function (p943) {
            this.Mm = p943;
          };
          f207.prototype.hj = function (p944, p945) {
            this.dj = vO39.Q(this.dj, this.wi ? this.Xc ? 0.9 + Math.cos(p944 / 400 * Math.PI) * 0.1 : 1 : 0, p945, 1 / 800);
            this.bd = vO39.Q(this.bd, this.wi ? this.Xc ? 1 : 0 : 1, p945, 0.0025);
            if (this.Nm != null) {
              this.Nm.nc.alpha = this.dj;
            }
            if (this.Om != null) {
              this.Om.alpha = this.dj;
            }
          };
          f207.prototype.ij = function (p946, p947, p948, p949) {
            if (this.xi && this.wi) {
              var v754 = Math.pow(0.11112, p947 / 95);
              for (var vLN0117 = 0; vLN0117 < this.ad; vLN0117++) {
                this._c[vLN0117 * 2] = vO39.S(vO39.S(this.Km[vLN0117 * 2], this.Lm[vLN0117 * 2], p948), this._c[vLN0117 * 2], v754);
                this._c[vLN0117 * 2 + 1] = vO39.S(vO39.S(this.Km[vLN0117 * 2 + 1], this.Lm[vLN0117 * 2 + 1], p948), this._c[vLN0117 * 2 + 1], v754);
              }
            }
            if (this.Nm && this.xi) {
              this.Nm.Zc(this, p946, p947, p949);
            }
            if (this.Om) {
              this.Om.ih.x = this._c[0];
              this.Om.ih.y = this._c[1] - this.$c * 3;
            }
          };
          f207.prototype.Qm = function (p950) {
            if (this.xi) {
              if (!p950) {
                this.Sm();
              }
            } else {
              if (this.Nm != null) {
                vO39.U(this.Nm.nc);
              }
              if (this.Om != null) {
                vO39.U(this.Om);
              }
            }
          };
          f207.prototype.Sm = function () {
            var vF1216 = f121();
            this.Nm = this.Nm || new vO37.WormSpriteTree();
            vO39.U(this.Nm.nc);
            this.Nm.yc(vF1216.dh.hh.xg, vF1216.Lc.Ub().jb(this.Eh.Gh), vF1216.Lc.Ub().ib(this.Eh.Hh), vF1216.Lc.Ub().kb(this.Eh.ni), vF1216.Lc.Ub().lb(this.Eh.oi), vF1216.Lc.Ub().mb(this.Eh.pi), vF1216.Lc.Ub().nb(this.Eh.qi), "#ffffff");
            this.Om = this.Om || new vO37.Tm("");
            vO39.U(this.Om);
            this.Om.style.fontFamily = "PTSans";
            this.Om.anchor.set(0.5);
            this.Om.style.fontSize = parseInt(bbs.enemyNameFontSize || 14);
            this.Om.style.fill = bbs.enemyNameColor || vF1216.Lc.Ub().ib(this.Eh.Hh).tb || "#fff";
            this.Om.style.fontWeight = "bold";
            this.Om.text = v143 ? this.Eh.ma : "-----";
            this.Mm.oh(this.Eh.ae, this.Nm, this.Om);
          };
          f207.li = function () {
            function f208() {
              this.ae = 0;
              this.Gh = vO31.ps ? vO31.ps : vO37.GameParams.Cg;
              this.Hh = 0;
              this.ni = 0;
              this.oi = 0;
              this.pi = 0;
              this.qi = 0;
              this.ma = 0;
            }
            return f208;
          }();
          return f207;
        }();
        vO37.Tm = function () {
          return vO39.M(vF7.Text, function (p951, p952, p953) {
            vF7.Text.call(this, p951, p952, p953);
            this.ih = {
              x: 0,
              y: 0
            };
          });
        }();
        vO37.hb = function () {
          function f209(p954, p955, p956, p957, p958) {
            this.lj = p954;
            this.mj = p955;
            this.nj = p956;
            this.oj = p957;
            this.pj = p958;
          }
          f209.prototype.Um = function (p959) {
            return new f209(p959, this.mj, this.nj, this.oj, this.pj);
          };
          f209.prototype.Vm = function (p960) {
            return new f209(this.lj, p960, this.nj, this.oj, this.pj);
          };
          f209.prototype.Wm = function (p961) {
            return new f209(this.lj, this.mj, p961, this.oj, this.pj);
          };
          f209.prototype.Xm = function (p962) {
            return new f209(this.lj, this.mj, this.nj, p962, this.pj);
          };
          f209.prototype.Ym = function (p963) {
            return new f209(this.lj, this.mj, this.nj, this.oj, p963);
          };
          return f209;
        }();
        vO37.Vl = function () {
          function f210(p964) {
            this.Zm = new vO37.WormSpriteTree();
            this.Zm.nc.addChild(this.Zm.oc);
            this.$m = null;
            this._m = null;
            this.bm = p964;
            this.pc = 0;
            this.Gi = 1;
            this.an = 1;
            this.bn = 1;
            this.cn = 1;
            this.dn = 1;
            this.gn = 1;
            this.hn = 1;
            this._l("#ffffff");
          }
          var v755 = new vO37.hb(0, 0, 0, 0, 0);
          f210.prototype.tf = function () {
            return this.Zm.nc;
          };
          f210.prototype.Wl = function (p965) {
            this.pc = p965;
            if (this.Zm.pc !== p965) {
              for (var vP965 = p965; vP965 < this.Zm.qc.length; vP965++) {
                this.Zm.qc[vP965].Uc();
              }
              while (this.Zm.pc > p965) {
                this.Zm.pc -= 1;
                var v756 = this.Zm.qc[this.Zm.pc];
                v756.Dc.Rc();
                v756.Cc.Rc();
              }
              while (this.Zm.pc < p965) {
                var v757 = this.Zm.qc[this.Zm.pc];
                this.Zm.pc += 1;
                this.Zm.nc.addChild(v757.Cc.Qc());
                this.Zm.nc.addChild(v757.Dc.Qc());
                v757.Cc.jj(this.an);
                v757.Dc.jj(this.bn);
              }
              for (var vLN0118 = 0; vLN0118 < this.Zm.oc.Fc.length; vLN0118++) {
                this.Zm.oc.Fc[vLN0118].jj(this.cn);
              }
              for (var vLN0119 = 0; vLN0119 < this.Zm.oc.Gc.length; vLN0119++) {
                this.Zm.oc.Gc[vLN0119].jj(this.dn);
              }
              for (var vLN0120 = 0; vLN0120 < this.Zm.oc.Ic.length; vLN0120++) {
                this.Zm.oc.Ic[vLN0120].jj(this.gn);
              }
              for (var vLN0121 = 0; vLN0121 < this.Zm.oc.Hc.length; vLN0121++) {
                this.Zm.oc.Hc[vLN0121].jj(this.hn);
              }
            }
          };
          f210.prototype.am = function () {
            return this.pc;
          };
          f210.prototype.$l = function (p966) {
            this.$m = p966;
            this._m = "#ffffff";
            this.lm();
          };
          f210.prototype._l = function (p967) {
            this.$m = v755;
            this._m = p967;
            this.lm();
          };
          f210.prototype.lm = function () {
            var vF1217 = f121();
            this.Zm.yc(vO37.Ac.vg, null, vF1217.Lc.Ub().ib(this.$m.lj), vF1217.Lc.Ub().kb(this.$m.mj), vF1217.Lc.Ub().lb(this.$m.nj), vF1217.Lc.Ub().mb(this.$m.pj), vF1217.Lc.Ub().nb(this.$m.oj), this._m);
          };
          f210.prototype.Xl = function (p968) {
            this.Gi = p968;
          };
          f210.prototype.cm = function () {
            return this.Gi;
          };
          f210.prototype.om = function (p969, p970) {
            this.an = p969;
            this.bn = p970;
            for (var vLN0122 = 0; vLN0122 < this.pc; vLN0122++) {
              var v758 = this.Zm.qc[vLN0122];
              v758.Cc.jj(this.an);
              v758.Dc.jj(this.bn);
            }
          };
          f210.prototype.rm = function (p971, p972, p973, p974) {
            this.cn = p971;
            this.dn = p972;
            this.gn = p973;
            this.hn = p974;
            for (var vLN0123 = 0; vLN0123 < this.Zm.oc.Fc.length; vLN0123++) {
              this.Zm.oc.Fc[vLN0123].jj(this.cn);
            }
            for (var vLN0124 = 0; vLN0124 < this.Zm.oc.Gc.length; vLN0124++) {
              this.Zm.oc.Gc[vLN0124].jj(this.dn);
            }
            for (var vLN0125 = 0; vLN0125 < this.Zm.oc.Ic.length; vLN0125++) {
              this.Zm.oc.Ic[vLN0125].jj(this.gn);
            }
            for (var vLN0126 = 0; vLN0126 < this.Zm.oc.Hc.length; vLN0126++) {
              this.Zm.oc.Hc[vLN0126].jj(this.hn);
            }
          };
          f210.prototype.Uf = function () {
            var v759 = this.Gi * 2;
            var v760 = this.Gi * 2 * 1.5;
            if (this.pc > 0) {
              var v761 = this.bm[0];
              var v762 = this.bm[1];
              var v763 = this.bm[2];
              this.Zm.qc[0].Sc(v761, v762, v759, v760, v763);
              this.Zm.oc.Sc(v761, v762, v759, v763);
            }
            for (var vLN112 = 1; vLN112 < this.pc; vLN112++) {
              var v764 = this.bm[vLN112 * 3];
              var v765 = this.bm[vLN112 * 3 + 1];
              var v766 = this.bm[vLN112 * 3 + 2];
              this.Zm.qc[vLN112].Sc(v764, v765, v759, v760, v766);
            }
          };
          f210.prototype.tm = function (p975) {
            p975.render(this.Zm.nc);
          };
          return f210;
        }();
        vO37.kf = function () {
          function f211(p976) {
            this.nd = p976;
          }
          f211.bgcanvas = $("#background-canvas");
          f211.socialButtons = $("#social-buttons");
          f211.socialButtons.html("");
          f211.jn = $("#game-view");
          f211.gameCanvas = $("#game-canvas");
          f211.ln = $("#results-view");
          f211.mn = $("#stretch-box");
          f211.nn = $("#main-menu-view");
          f211.pn = $("#popup-view");
          f211.qn = $("#loading-view");
          f211.rn = $("#restricted-view");
          f211.sn = $("#toaster-view");
          f211.tn = $("#error-gateway-connection-view");
          f211.un_error = $("#error-game-connection-view");
          f211.vn = $("#markup-wrap");
          f211.prototype.ha = function () {};
          f211.prototype.Gk = function () {};
          f211.prototype.Hk = function () {};
          f211.prototype.Bk = function () {};
          f211.prototype.Jf = function () {};
          f211.prototype.Nf = function (p977, p978) {};
          return f211;
        }();
        vO37.Vj = function () {
          function f212(p979, p980, p981, p982, p983, p984) {
            var vLSOK = "OK";
            var v$5 = $(vLSOK);
            v$5.click(function () {
              if (typeof FB != "undefined" && FB.ui !== undefined) {
                FB.ui({
                  method: "feed",
                  display: "popup",
                  link: p980,
                  name: p981,
                  caption: p982,
                  description: p983,
                  picture: p984
                }, function () {});
              }
            });
            return v$5;
          }
          var v$6 = $("#final-caption");
          var v$7 = $("#final-continue");
          var v$8 = $("#congrats-bg");
          var v$9 = $("#unl6wj4czdl84o9b");
          $("#congrats");
          var v$10 = $("#final-share-fb");
          var v$11 = $("#final-message");
          var v$12 = $("#final-score");
          var v$13 = $("#final-place");
          var v$14 = $("#final-board");
          var v767 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
            var vThis61 = this;
            var vF1218 = f121();
            v$10.toggle(vF23.xn);
            v$6.text(vO39.H("index.game.result.title"));
            v$7.text(vO39.H("index.game.result.continue"));
            v$7.click(function () {
              vF1218.Ci.Be();
              vF1218.zn.yn.ka();
              vF1218.Ci.pe(vO37.ge.je._e);
              vF1218.og.Ak(vF1218.og._e);
            });
            $("html").keydown(function (p985) {
              if (p985.keyCode === 32) {
                vThis61.An = true;
              }
            }).keyup(function (p986) {
              if (p986.keyCode === 32) {
                vThis61.An = false;
              }
            });
            this.ng = new vO37.Eg(vO37.kf.gameCanvas);
            this.Cn = 0;
            this.Bn = 0;
            this.An = false;
          });
          v767.prototype.ha = function () {};
          v767.prototype.Gk = function () {
            if (this.Cn === 0) {
              vO37.kf.jn.stop();
              vO37.kf.jn.fadeIn(500);
              vO37.kf.ln.stop();
              vO37.kf.ln.fadeOut(1);
              vO37.kf.nn.stop();
              vO37.kf.nn.fadeOut(50);
              vO37.kf.pn.stop();
              vO37.kf.pn.fadeOut(50);
              vO37.kf.sn.stop();
              vO37.kf.sn.fadeOut(50);
              vO37.kf.qn.stop();
              vO37.kf.qn.fadeOut(50);
              vO37.kf.rn.stop();
              vO37.kf.rn.fadeOut(50);
              vO37.kf.tn.stop();
              vO37.kf.tn.fadeOut(50);
              vO37.kf.un_error.stop();
              vO37.kf.un_error.fadeOut(50);
              vO37.kf.mn.stop();
              vO37.kf.mn.fadeOut(1);
              vO37.kf.bgcanvas.stop();
              vO37.kf.bgcanvas.fadeOut(50);
              vO37.GameView.Kf(false);
              vO37.kf.socialButtons.stop();
              vO37.kf.socialButtons.fadeOut(50);
              vO37.kf.vn.stop();
              vO37.kf.vn.fadeOut(50);
            } else {
              vO37.kf.jn.stop();
              vO37.kf.jn.fadeIn(500);
              vO37.kf.ln.stop();
              vO37.kf.ln.fadeIn(500);
              vO37.kf.nn.stop();
              vO37.kf.nn.fadeOut(50);
              vO37.kf.pn.stop();
              vO37.kf.pn.fadeOut(50);
              vO37.kf.sn.stop();
              vO37.kf.sn.fadeOut(50);
              vO37.kf.qn.stop();
              vO37.kf.qn.fadeOut(50);
              vO37.kf.rn.stop();
              vO37.kf.rn.fadeOut(50);
              vO37.kf.tn.stop();
              vO37.kf.tn.fadeOut(50);
              vO37.kf.un_error.stop();
              vO37.kf.un_error.fadeOut(50);
              vO37.kf.mn.stop();
              vO37.kf.mn.fadeOut(1);
              vO37.kf.bgcanvas.stop();
              vO37.kf.bgcanvas.fadeOut(50);
              vO37.GameView.Kf(false);
              vO37.kf.socialButtons.stop();
              vO37.kf.socialButtons.fadeOut(50);
              vO37.kf.vn.stop();
              vO37.kf.vn.fadeOut(50);
            }
          };
          v767.prototype.Dn = function () {
            this.Cn = 0;
            return this;
          };
          v767.prototype.En = function () {
            v$8.hide();
            setTimeout(function () {
              v$8.fadeIn(500);
            }, 3000);
            v$9.hide();
            setTimeout(function () {
              v$9.fadeIn(500);
            }, 500);
            this.Cn = 1;
            return this;
          };
          v767.prototype.Hk = function () {
            this.An = false;
            this.ng.Jf();
            if (this.Cn === 1) {
              f121().Ci.Fe();
            }
          };
          v767.prototype.Jf = function () {
            this.ng.Jf();
          };
          v767.prototype.Nf = function (p987, p988) {
            this.ng.Nf(p987, p988);
          };
          v767.prototype.Fn = function (p989, p990, p991) {
            var vUndefined14 = undefined;
            var vUndefined15 = undefined;
            var vUndefined16 = undefined;
            if (p990 >= 1 && p990 <= 10) {
              vUndefined14 = vO39.H("index.game.result.place.i" + p990);
              vUndefined15 = vO39.H("index.game.result.placeInBoard");
              vUndefined16 = vO39.H("index.game.social.shareResult.messGood").replace("{0}", p991).replace("{1}", p989).replace("{2}", vUndefined14);
            } else {
              vUndefined14 = "";
              vUndefined15 = vO39.H("index.game.result.tryHit");
              vUndefined16 = vO39.H("index.game.social.shareResult.messNorm").replace("{0}", p991).replace("{1}", p989);
            }
            v$11.html(vO39.H("index.game.result.your"));
            v$12.html(p989);
            v$13.html(vUndefined14);
            v$14.html(vUndefined15);
            if (vF23.xn) {
              var v768 = vO39.H("index.game.result.share");
              vO39.H("index.game.social.shareResult.caption");
              v$10.empty().append(f212(v768, "https://wormate.io", "wormate.io", vUndefined16, vUndefined16, "https://wormate.io/images/og-share-img-new.jpg"));
            }
          };
          v767.prototype.Gn = function () {
            return this.Bn;
          };
          v767.prototype.Hn = function () {
            return this.An;
          };
          return v767;
        }();
        vO37.sk = function () {
          var v$15 = $("#loading-progress-cont");
          var v$16 = $("#loading-progress-bar");
          var v$17 = $("#loading-progress-text");
          var v769 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
            this.In = -1;
            this.Jn = "";
          });
          v769.prototype.ha = function () {};
          v769.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(50);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(50);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeIn(500);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(50);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(50);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(50);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeOut(50);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeOut(50);
          };
          v769.prototype.Hk = function () {
            f121().Ci.pe(vO37.ge.je.ie);
          };
          v769.prototype.Bk = function () {};
          v769.prototype.Kn = function () {
            this.Ln("", 0);
            v$15.stop();
            v$15.fadeIn(100);
          };
          v769.prototype.Mn = function () {
            v$15.stop();
            v$15.fadeOut(100);
          };
          v769.prototype.Ln = function (p992, p993) {
            if (this.Jn !== p992) {
              this.Jn = p992;
            }
            var v770 = vO39.P(Math.floor(p993 * 100), 0, 100);
            if (this.In !== v770) {
              v$16.css({
                width: v770 + "%"
              });
              v$17.html(v770 + " %");
            }
          };
          return v769;
        }();
        vO37.Wj = function () {
          var v$18 = $("#mm-line-top");
          $("#mm-line-center");
          $("#mm-line-bottom");
          var v$19 = $("#mm-bottom-buttons");
          var v$20 = $("#mm-menu-cont");
          var v$21 = $("#mm-loading");
          var v$22 = $("#mm-loading-progress-bar");
          var v$23 = $("#mm-loading-progress-text");
          $("#mm-event-text");
          var v$24 = $("#mm-skin-canv");
          var v$25 = $("#mm-skin-prev");
          var v$26 = $("#mm-skin-next");
          var v$27 = $("#mm-skin-over");
          var v$28 = $("#mm-skin-over-button-list");
          var v$29 = $("#mm-params-nickname");
          var v$30 = $("#mm-params-game-mode");
          var v$31 = $("#mm-action-play");
          var v$32 = $("#mm-action-guest");
          var v$33 = $("#mm-action-login");
          var v$34 = $("#mm-player-info");
          var v$35 = $("#mm-store");
          var v$36 = $("#mm-leaders");
          var v$37 = $("#mm-settings");
          var v$38 = $("#mm-coins-box");
          var v$39 = $("#mm-player-avatar");
          var v$40 = $("#mm-player-username");
          var v$41 = $("#mm-coins-val");
          var v$42 = $("#mm-player-exp-bar");
          var v$43 = $("#mm-player-exp-val");
          var v$44 = $("#mm-player-level");
          var v771 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.Ek);
            var vF1219 = f121();
            this.In = -1;
            this.Jn = "";
            this.Nn = new vO37.dm(v$24);
            v$30.click(function () {
              vF1219.Ci.Be();
            });
            v$24.click(function () {
              if (vF1219.Ij.Hj()) {
                vF1219.Ci.Be();
                vF1219.og.Ak(vF1219.og.ik);
              }
            });
            v$25.click(function () {
              vF1219.Ci.Be();
              vF1219.On.Ej();
            });
            v$26.click(function () {
              vF1219.Ci.Be();
              vF1219.On.Dj();
            });
            v$29.keypress(function (p994) {
              if (p994.keyCode == 13) {
                vF1219.Pn(true);
              }
            });
            v$31.click(function () {
              vF1219.Ci.Be();
              vF1219.Pn(true);
            });
            v$32.click(function () {
              vF1219.Ci.Be();
              vF1219.Pn(true);
            });
            v$33.click(function () {
              vF1219.Ci.Be();
              vF1219.og.Ak(vF1219.og.fk);
            });
            v$37.click(function () {
              vF1219.Ci.Be();
              vF1219.og.Ak(vF1219.og.$h);
            });
            v$34.click(function () {
              if (vF1219.Ij.Hj()) {
                vF1219.Ci.Be();
                vF1219.og.Ak(vF1219.og.dk);
              }
            });
            v$36.click(function () {
              if (vF1219.Ij.Hj()) {
                vF1219.Ci.Be();
                vF1219.og.Ak(vF1219.og.bk);
              }
            });
            v$35.click(function () {
              if (vF1219.Ij.Hj()) {
                vF1219.Ci.Be();
                vF1219.og.Ak(vF1219.og.kk);
              }
            });
            v$38.click(function () {
              if (vF1219.Ij.Hj()) {
                vF1219.Ci.Be();
                vF1219.og.Ak(vF1219.og._j);
              }
            });
            this.Qn();
            this.Rn();
            var v772 = vO37.Vf.fg(vO37.Vf._f);
            if (v772 !== "ARENA" && v772 !== "TEAM2") {
              v772 = "ARENA";
            }
            v$30.val(v772);
          });
          v771.prototype.ha = function () {
            var vF12110 = f121();
            var vThis62 = this;
            vF12110.Ij.zl(function () {
              if (vF12110.Ij.Hj()) {
                vF12110.On.Fj(vF12110.Ij.ml(), vO37.tj.sj);
                vF12110.On.Fj(vF12110.Ij.nl(), vO37.tj.uj);
                vF12110.On.Fj(vF12110.Ij.ol(), vO37.tj.vj);
                vF12110.On.Fj(vF12110.Ij.pl(), vO37.tj.xj);
                vF12110.On.Fj(vF12110.Ij.ql(), vO37.tj.wj);
              } else {
                vF12110.On.Fj(vF12110.Sn(), vO37.tj.sj);
                vF12110.On.Fj(0, vO37.tj.uj);
                vF12110.On.Fj(0, vO37.tj.vj);
                vF12110.On.Fj(0, vO37.tj.xj);
                vF12110.On.Fj(0, vO37.tj.wj);
              }
            });
            vF12110.Ij.zl(function () {
              v$31.toggle(vF12110.Ij.Hj());
              v$33.toggle(!vF12110.Ij.Hj());
              v$34.toggle(true);
              v$32.toggle(!vF12110.Ij.Hj());
              v$37.toggle(true);
              v$36.toggle(vF12110.Ij.Hj());
              v$35.toggle(vF12110.Ij.Hj());
              v$38.toggle(vF12110.Ij.Hj());
              if (vF12110.Ij.Hj()) {
                v$27.hide();
                v$40.html(vF12110.Ij.dl());
                v$39.attr("src", vF12110.Ij.fl());
                v$41.html(vF12110.Ij.il());
                v$42.width(vF12110.Ij.kl() * 100 / vF12110.Ij.ll() + "%");
                v$43.html(vF12110.Ij.kl() + " / " + vF12110.Ij.ll());
                v$44.html(vF12110.Ij.jl());
                v$29.val(vF12110.Ij.el());
              } else {
                v$27.toggle(vF23.xn && !vF12110.Tn());
                v$40.html(v$40.data("guest"));
                v$39.attr("src", vO39.a.e);
                v$41.html("10");
                v$42.width("0");
                v$43.html("");
                v$44.html(1);
                v$29.val(vO37.Vf.fg(vO37.Vf.ag));
              }
            });
            vF12110.On.zj(function () {
              vThis62.Nn.$l(vF12110.On.yj());
            });
          };
          v771.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeIn(500);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(50);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(50);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(50);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(50);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(50);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeIn(500);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeIn(500);
          };
          v771.prototype.Un = function () {
            v$18.fadeIn(500);
            v$19.fadeIn(500);
            v$20.fadeIn(500);
            v$21.fadeOut(100);
          };
          v771.prototype.Vn = function () {
            v$18.fadeOut(100);
            v$19.fadeOut(100);
            v$20.fadeOut(100);
            v$21.fadeIn(500);
          };
          v771.prototype.Ln = function (p995, p996) {
            if (this.Jn !== p995) {
              this.Jn = p995;
            }
            var v773 = vO39.P(Math.floor(p996 * 100), 0, 100);
            if (this.In !== v773) {
              v$22.css({
                width: v773 + "%"
              });
              v$23.html(v773 + " %");
            }
          };
          v771.prototype.Hk = function () {
            f121().Ci.Ce();
            this.Nn.Kf(true);
          };
          v771.prototype.Bk = function () {
            this.Nn.Kf(false);
          };
          v771.prototype.Jf = function () {
            this.Nn.Jf();
          };
          v771.prototype.Nf = function (p997, p998) {
            this.Nn.Nf();
          };
          v771.prototype.el = function () {
            return v$29.val();
          };
          v771.prototype.Wn = function () {
            return v$30.val();
          };
          v771.prototype.Qn = function () {};
          v771.prototype.Rn = function () {
            function f213() {
              vF12111.Xn(true);
              setTimeout(function () {
                v$27.hide();
              }, 3000);
            }
            var vF12111 = f121();
            if (vF23.xn && !vF12111.Tn()) {
              v$27.show();
              var v774 = vO39.H("index.game.main.menu.unlockSkins.share");
              var vEncodeURIComponent = encodeURIComponent(vO39.H("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
              var vEncodeURIComponent2 = encodeURIComponent(vO39.H("index.game.main.menu.unlockSkins.comeAndPlay"));
              v$28.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + v774 + "</span></a>").click(f213));
              v$28.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + v774 + "</span></a>").click(f213));
            }
          };
          return v771;
        }();
        vO37.yk = function () {
          var v775 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
          });
          v775.prototype.ha = function () {};
          v775.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(50);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(50);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(50);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(50);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(50);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(50);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeOut(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeOut(50);
            vO37.GameView.Kf(false);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeOut(50);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeOut(50);
          };
          return v775;
        }();
        vO37.pk = function () {
          var v776 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
          });
          v776.prototype.ha = function () {};
          v776.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(50);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(50);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(50);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeIn(500);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(50);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(50);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeOut(50);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeOut(50);
          };
          v776.prototype.Hk = function () {};
          return v776;
        }();
        vO37.rk = function () {
          var v$45 = $("#toaster-stack");
          var v777 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
            this.Yn = [];
            this.Zn = null;
          });
          v777.prototype.ha = function () {};
          v777.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(50);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeIn(500);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(50);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(50);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(50);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(50);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeOut(50);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeIn(500);
          };
          v777.prototype.Hk = function () {
            this.$n();
          };
          v777.prototype.Kk = function () {
            return this.Zn != null || this.Yn.length > 0;
          };
          v777.prototype._n = function (p999) {
            this.Yn.unshift(p999);
            setTimeout(function () {
              f121().og.Ik();
            }, 0);
          };
          v777.prototype.El = function (p1000) {
            this.Yn.push(p1000);
            setTimeout(function () {
              f121().og.Ik();
            }, 0);
          };
          v777.prototype.$n = function () {
            var vThis63 = this;
            if (this.Zn == null) {
              if (this.Yn.length == 0) {
                f121().og.Dk();
                return;
              }
              var v778 = this.Yn.shift();
              this.Zn = v778;
              var v779 = v778.tf();
              v779.hide();
              v779.fadeIn(300);
              v$45.append(v779);
              v778.ao = function () {
                v779.fadeOut(300);
                setTimeout(function () {
                  v779.remove();
                }, 300);
                if (vThis63.Zn == v778) {
                  vThis63.Zn = null;
                }
                vThis63.$n();
              };
              v778.Hk();
            }
          };
          return v777;
        }();
        vO37.Fk = {
          wn: 0,
          Ek: 1
        };
        vO37.bo = function () {
          var v$46 = $("#popup-menu-label");
          var v$47 = $("#popup-menu-coins-box");
          var v$48 = $("#popup-menu-coins-val");
          $("#popup-menu-back").click(function () {
            var vF12112 = f121();
            vF12112.Ci.Be();
            vF12112.og.Dk();
          });
          v$47.click(function () {
            var vF12113 = f121();
            if (vF12113.Ij.Hj()) {
              vF12113.Ci.Be();
              vF12113.og.Ak(vF12113.og._j);
            }
          });
          var v780 = vO39.M(vO37.kf, function (p1001, p1002) {
            vO37.kf.call(this, vO37.Fk.Ek);
            this.ma = p1001;
            this.co = p1002;
            this.do = [];
          });
          v780.prototype.ha = function () {
            v780.parent.prototype.ha.call(this);
            if (!v780.eo) {
              v780.eo = true;
              var vF12114 = f121();
              vF12114.Ij.zl(function () {
                if (vF12114.Ij.Hj()) {
                  v$48.html(vF12114.Ij.il());
                } else {
                  v$48.html("0");
                }
              });
            }
            vO37.bo.fo.stop();
            vO37.bo.fo.fadeOut(100);
          };
          v780.go = $("#coins-view");
          v780.ho = $("#leaders-view");
          v780.io = $("#profile-view");
          v780.jo = $("#settings-view");
          v780.ko = $("#login-view");
          v780.lo = $("#skins-view");
          v780.mo = $("#store-view");
          v780.no = $("#wear-view");
          v780.oo = $("#withdraw-consent-view");
          v780.po = $("#delete-account-view");
          v780.fo = $("#please-wait-view");
          v780.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(200);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(200);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(200);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeIn(200);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(200);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(200);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(200);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(200);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(200);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeIn(200);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeIn(200);
            v$46.html(this.ma);
            v$47.toggle(this.co);
            this.qo();
          };
          v780.prototype.qo = function () {};
          v780.prototype.ro = function (p1003) {
            var vThis64 = this;
            var v781 = vO39.V(0, 2147483647) & 2147483647;
            this.do.push(v781);
            vO37.bo.fo.stop();
            vO37.bo.fo.fadeIn(100);
            setTimeout(function () {
              vThis64.so(v781);
            }, p1003);
            return new vF20(this, v781);
          };
          v780.prototype.so = function (p1004) {
            var v782 = this.do.indexOf(p1004);
            if (!(v782 < 0)) {
              this.do.splice(v782, 1);
              if (this.do.length === 0) {
                vO37.bo.fo.stop();
                vO37.bo.fo.fadeOut(100);
              }
            }
          };
          return v780;
        }();
        var vF20 = function () {
          function f214(p1005, p1006) {
            this.to = p1005;
            this.uo = p1006;
          }
          f214.prototype.vo = function () {
            this.to.so(this.uo);
          };
          return f214;
        }();
        vO37.ak = function () {
          var v$49 = $("#store-buy-coins_125000");
          var v$50 = $("#store-buy-coins_50000");
          var v$51 = $("#store-buy-coins_16000");
          var v$52 = $("#store-buy-coins_7000");
          var v$53 = $("#store-buy-coins_3250");
          var v$54 = $("#store-buy-coins_1250");
          var v783 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.coins.tab"), false);
            var vF12115 = f121();
            var vThis65 = this;
            v$49.click(function () {
              vF12115.Ci.Be();
              vThis65.wo("coins_125000");
            });
            v$50.click(function () {
              vF12115.Ci.Be();
              vThis65.wo("coins_50000");
            });
            v$51.click(function () {
              vF12115.Ci.Be();
              vThis65.wo("coins_16000");
            });
            v$52.click(function () {
              vF12115.Ci.Be();
              vThis65.wo("coins_7000");
            });
            v$53.click(function () {
              vF12115.Ci.Be();
              vThis65.wo("coins_3250");
            });
            v$54.click(function () {
              vF12115.Ci.Be();
              vThis65.wo("coins_1250");
            });
          });
          v783.prototype.ha = function () {
            v783.parent.prototype.ha.call(this);
          };
          v783.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeIn(200);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v783.prototype.Hk = function () {
            f121().Ci.Ce();
          };
          v783.prototype.wo = function (p1007) {};
          return v783;
        }();
        vO37.ck = function () {
          var v$55 = $("#highscore-table");
          var v$56 = $("#leaders-button-level");
          var v$57 = $("#leaders-button-highscore");
          var v$58 = $("#leaders-button-kills");
          var v784 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.leaders.tab"), true);
            var vF12116 = f121();
            var vThis66 = this;
            this.xo = {};
            this.yo = {
              zo: {
                Ao: v$56,
                Bo: "byLevel"
              },
              Co: {
                Ao: v$57,
                Bo: "byHighScore"
              },
              Do: {
                Ao: v$58,
                Bo: "byKillsAndHeadShots"
              }
            };
            v$56.click(function () {
              vF12116.Ci.Be();
              vThis66.Eo(vThis66.yo.zo);
            });
            v$57.click(function () {
              vF12116.Ci.Be();
              vThis66.Eo(vThis66.yo.Co);
            });
            v$58.click(function () {
              vF12116.Ci.Be();
              vThis66.Eo(vThis66.yo.Do);
            });
          });
          v784.prototype.ha = function () {
            v784.parent.prototype.ha.call(this);
          };
          v784.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeIn(200);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v784.prototype.Hk = function () {
            var vThis67 = this;
            f121().Ci.Ce();
            var v785 = this.ro(5000);
            var v786 = vO39.a.b + "/pub/leaders";
            vO39.Z(v786, function () {
              vThis67.xo = {
                byLevel: [],
                byHighScore: [],
                byKillsAndHeadShots: []
              };
              vThis67.Eo(vThis67.Fo ?? vThis67.yo.zo);
              v785.vo();
            }, function (p1008) {
              vThis67.xo = p1008;
              vThis67.Eo(vThis67.Fo ?? vThis67.yo.zo);
              v785.vo();
            });
          };
          v784.prototype.Eo = function (p1009) {
            this.Fo = p1009;
            for (var v787 in this.yo) {
              if (this.yo.hasOwnProperty(v787)) {
                var v788 = this.yo[v787];
                v788.Ao.removeClass("pressed");
              }
            }
            this.Fo.Ao.addClass("pressed");
            for (var v789 = this.xo[this.Fo.Bo], vLS11 = "", vLN0127 = 0; vLN0127 < v789.length; vLN0127++) {
              var v790 = v789[vLN0127];
              vLS11 += "<div class=\"table-row\"><span>" + (vLN0127 + 1) + "</span><span><img src=\"" + v790.avatarUrl + "\"/></span><span>" + v790.username + "</span><span>" + v790.level + "</span><span>" + v790.highScore + "</span><span>" + v790.headShots + " / " + v790.kills + "</span></div>";
            }
            v$55.empty();
            v$55.append(vLS11);
          };
          return v784;
        }();
        vO37.gk = function () {
          var v$59 = $("#popup-login-gg");
          var v$60 = $("#popup-login-fb");
          var v791 = vO39.M(vO37.bo, function () {
            var vThis68 = this;
            vO37.bo.call(this, vO39.H("index.game.popup.menu.login.tab"), false);
            var vF12117 = f121();
            v$59.click(function () {
              vF12117.Ci.Be();
              var v792 = vThis68.ro(10000);
              setTimeout(function () {
                vF12117.Ij.Ml(function () {
                  if (vF12117.Ij.Hj()) {
                    vF12117.Ci.Fe();
                  }
                  v792.vo();
                });
              }, 500);
            });
            v$60.click(function () {
              vF12117.Ci.Be();
              var v793 = vThis68.ro(10000);
              setTimeout(function () {
                vF12117.Ij.Jl(function () {
                  if (vF12117.Ij.Hj()) {
                    vF12117.Ci.Fe();
                  }
                  v793.vo();
                });
              }, 500);
            });
          });
          v791.prototype.ha = function () {
            v791.parent.prototype.ha.call(this);
          };
          v791.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeIn(200);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v791.prototype.Hk = function () {
            f121().Ci.Ce();
          };
          return v791;
        }();
        vO37.ek = function () {
          var v$61 = $("#profile-avatar");
          var v$62 = $("#profile-username");
          var v$63 = $("#profile-experience-bar");
          var v$64 = $("#profile-experience-val");
          var v$65 = $("#profile-level");
          var v$66 = $("#profile-stat-highScore");
          var v$67 = $("#profile-stat-bestSurvivalTime");
          var v$68 = $("#profile-stat-kills");
          var v$69 = $("#profile-stat-headshots");
          var v$70 = $("#profile-stat-gamesPlayed");
          var v$71 = $("#profile-stat-totalTimeSpent");
          var v$72 = $("#profile-stat-registrationDate");
          var v794 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.profile.tab"), true);
          });
          v794.prototype.ha = function () {
            v794.parent.prototype.ha.call(this);
          };
          v794.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeIn(200);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v794.prototype.Hk = function () {
            var vF12118 = f121();
            vF12118.Ci.Ce();
            var v795 = vF12118.Ij.xl();
            var v796 = moment([v795.year, v795.month - 1, v795.day]).format("LL");
            v$62.html(vF12118.Ij.dl());
            v$61.attr("src", vF12118.Ij.fl());
            v$63.width(vF12118.Ij.kl() * 100 / vF12118.Ij.ll() + "%");
            v$64.html(vF12118.Ij.kl() + " / " + vF12118.Ij.ll());
            v$65.html(vF12118.Ij.jl());
            v$66.html(vF12118.Ij.rl());
            v$67.html(vO39.J(vF12118.Ij.sl()));
            v$68.html(vF12118.Ij.tl());
            v$69.html(vF12118.Ij.ul());
            v$70.html(vF12118.Ij.vl());
            v$71.html(vO39.J(vF12118.Ij.wl()));
            v$72.html(v796);
          };
          return v794;
        }();
        vO37.hk = function () {
          var v$73 = $("#settings-music-enabled-switch");
          var v$74 = $("#settings-sfx-enabled-switch");
          var v$75 = $("#settings-show-names-switch");
          var v$76 = $("#popup-logout");
          var v$77 = $("#popup-logout-container");
          var v$78 = $("#popup-delete-account");
          var v$79 = $("#popup-delete-account-container");
          var v$80 = $("#popup-withdraw-consent");
          var v797 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.settings.tab"), false);
            var vThis69 = this;
            var vF12119 = f121();
            v$73.click(function () {
              var v798 = !!v$73.prop("checked");
              vO37.Vf.eg(vO37.Vf.Yf, v798, 30);
              vF12119.Ci.re(v798);
              vF12119.Ci.Be();
            });
            v$74.click(function () {
              var v799 = !!v$74.prop("checked");
              vO37.Vf.eg(vO37.Vf.Zf, v799, 30);
              vF12119.Ci.oe(v799);
              vF12119.Ci.Be();
            });
            v$75.click(function () {
              vF12119.Ci.Be();
            });
            v$76.click(function () {
              vF12119.Ci.Be();
              vThis69.ro(500);
              vF12119.Ij.Kl();
            });
            v$78.click(function () {
              if (vF12119.Ij.Hj()) {
                vF12119.Ci.Be();
                vF12119.og.Ak(vF12119.og.Zj);
              } else {
                vF12119.Ci.Ge();
              }
            });
            v$80.click(function () {
              if (vF12119.Go()) {
                vF12119.Ci.Be();
                vF12119.og.Ak(vF12119.og.Xj);
              } else {
                vF12119.Ci.Ge();
              }
            });
          });
          v797.prototype.ha = function () {
            v797.parent.prototype.ha.call(this);
            var vF12120 = f121();
            var vUndefined17 = undefined;
            switch (vO37.Vf.fg(vO37.Vf.Yf)) {
              case "false":
                vUndefined17 = false;
                break;
              default:
                vUndefined17 = true;
            }
            v$73.prop("checked", vUndefined17);
            vF12120.Ci.re(vUndefined17);
            var vUndefined18 = undefined;
            switch (vO37.Vf.fg(vO37.Vf.Zf)) {
              case "false":
                vUndefined18 = false;
                break;
              default:
                vUndefined18 = true;
            }
            v$74.prop("checked", vUndefined18);
            vF12120.Ci.oe(vUndefined18);
            var vUndefined19 = undefined;
            switch (vO37.Vf.fg(vO37.Vf.Xf)) {
              case "false":
                vUndefined19 = false;
                break;
              default:
                vUndefined19 = true;
            }
            v$75.prop("checked", vUndefined19);
            vF12120.Ij.yl(function () {
              v$77.toggle(vF12120.Ij.Hj());
              v$79.toggle(vF12120.Ij.Hj());
            });
          };
          v797.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeIn(200);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v797.prototype.Hk = function () {
            var vF12121 = f121();
            vF12121.Ci.Ce();
            if (vF12121.Go()) {
              v$80.show();
            } else {
              v$80.hide();
            }
          };
          v797.prototype.Zh = function () {
            return v$75.prop("checked");
          };
          return v797;
        }();
        vO37.jk = function () {
          var v$81 = $("#store-view-canv");
          var v$82 = $("#skin-description-text");
          var v$83 = $("#skin-group-description-text");
          var v$84 = $("#store-locked-bar");
          var v$85 = $("#store-locked-bar-text");
          var v$86 = $("#store-buy-button");
          var v$87 = $("#store-item-price");
          var v$88 = $("#store-groups");
          var v$89 = $("#store-view-prev");
          var v$90 = $("#store-view-next");
          var v800 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.skins.tab"), true);
            var vThis70 = this;
            var vF12122 = f121();
            this.Ho = null;
            this.Io = [];
            this.Jo = {};
            this.Ko = new vO37.dm(v$81);
            v$86.click(function () {
              vF12122.Ci.Be();
              vThis70.Lo();
            });
            v$89.click(function () {
              vF12122.Ci.Be();
              vThis70.Ho.Mo();
            });
            v$90.click(function () {
              vF12122.Ci.Be();
              vThis70.Ho.No();
            });
          });
          v800.prototype.ha = function () {
            v800.parent.prototype.ha.call(this);
            var vThis71 = this;
            var vF12123 = f121();
            vF12123.Lc.$b(function () {
              var v801 = vF12123.Lc.Xb();
              vThis71.Io = [];
              for (var vLN0128 = 0; vLN0128 < v801.skinGroupArrayDict.length; vLN0128++) {
                vThis71.Io.push(new vF21(vThis71, v801.skinGroupArrayDict[vLN0128]));
              }
              vThis71.Jo = {};
              for (var vLN0129 = 0; vLN0129 < v801.skinArrayDict.length; vLN0129++) {
                var v802 = v801.skinArrayDict[vLN0129];
                vThis71.Jo[v802.id] = v802;
              }
              vThis71.Oo();
            });
            this.Po(false);
            vF12123.On.zj(function () {
              vThis71.Po(false);
            });
          };
          v800.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeIn(200);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v800.prototype.Hk = function () {
            f121().Ci.pe(vO37.ge.je._e);
            f121().Ci.Ce();
            this.Oo();
            this.Ko.Kf(true);
          };
          v800.prototype.Bk = function () {
            this.Ko.Kf(false);
          };
          v800.prototype.Jf = function () {
            this.Ko.Jf();
          };
          v800.prototype.Nf = function (p1010, p1011) {
            this.Ko.Nf();
          };
          v800.prototype.Oo = function () {
            var vThis72 = this;
            var vThis73 = this;
            var vF12124 = f121();
            v$88.empty();
            for (var vLN0130 = 0; vLN0130 < this.Io.length; vLN0130++) {
              (function (p1012) {
                var v803 = vThis72.Io[p1012];
                var v804 = document.createElement("li");
                v$88.append(v804);
                var v$91 = $(v804);
                if (v803.To && v803.To.isCustom) {
                  v$91.css("background-color", "#FFF");
                  v$91.css("color", "#000");
                }
                v$91.html(v803.Qo());
                v$91.click(function () {
                  vF12124.Ci.Be();
                  vThis73.Ro(v803);
                });
                v803.So = v$91;
              })(vLN0130);
            }
            if (this.Io.length > 0) {
              var v805 = vF12124.On.rj(vO37.tj.sj);
              for (var vLN0130 = 0; vLN0130 < this.Io.length; vLN0130++) {
                var v806 = this.Io[vLN0130];
                for (var v807 = v806.To.list, vLN0131 = 0; vLN0131 < v807.length; vLN0131++) {
                  if (v807[vLN0131] == v805) {
                    v806.Uo = vLN0131;
                    this.Ro(v806);
                    return;
                  }
                }
              }
              this.Ro(this.Io[0]);
            }
          };
          v800.prototype.Ro = function (p1013) {
            var vF12125 = f121();
            if (this.Ho !== p1013) {
              this.Ho = p1013;
              v$88.children().removeClass("pressed");
              if (this.Ho.So) {
                this.Ho.So.addClass("pressed");
              }
              v$83.html("");
              if (p1013.To != null) {
                var v808 = vF12125.Lc.Xb().textDict[p1013.To.description];
                if (v808 != null) {
                  v$83.html(vO39.K(vO39.I(v808)));
                }
              }
              this.Po(true);
            }
          };
          v800.prototype.Vo = function () {
            if (this.Ho == null) {
              return vO37.Si.Ui();
            } else {
              return this.Ho.Wo();
            }
          };
          v800.prototype.Lo = function () {
            var vThis74 = this;
            var v809 = this.Vo();
            if (v809.Wi()) {
              var v810 = v809.bc();
              vThis74.Xo(v810);
            }
          };
          v800.prototype.Xo = function (p1014) {
            var vF12126 = f121();
            var v811 = vF12126.On.Gj(p1014, vO37.tj.sj);
            if (v811 != null) {
              var v812 = v811.Jj();
              if (!(vF12126.Ij.il() < v812)) {
                var v813 = vF12126.On.rj(vO37.tj.sj);
                var v814 = vF12126.On.rj(vO37.tj.uj);
                var v815 = vF12126.On.rj(vO37.tj.vj);
                var v816 = vF12126.On.rj(vO37.tj.xj);
                var v817 = vF12126.On.rj(vO37.tj.wj);
                var v818 = this.ro(5000);
                vF12126.Ij.Hl(p1014, vO37.tj.sj, function () {
                  v818.vo();
                  vF12126.og.Ak(vF12126.og.tk);
                }, function (p1015) {
                  vF12126.Ij.Bl(function () {
                    vF12126.On.Fj(v813, vO37.tj.sj);
                    vF12126.On.Fj(v814, vO37.tj.uj);
                    vF12126.On.Fj(v815, vO37.tj.vj);
                    vF12126.On.Fj(v816, vO37.tj.xj);
                    vF12126.On.Fj(v817, vO37.tj.wj);
                    vF12126.On.Fj(p1014, vO37.tj.sj);
                    v818.vo();
                  });
                });
              }
            }
          };
          v800.prototype.Po = function (p1016) {
            var vF12127 = f121();
            var v819 = vF12127.On.yj();
            var v820 = this.Vo();
            if (v820.Wi()) {
              var v821 = v820.bc();
              var v822 = vF12127.On.Gj(v821, vO37.tj.sj);
              var v823 = false;
              var v824 = vF12127.On.Cj(v821, vO37.tj.sj);
              var v825 = true;
              if (v824) {
                v$84.hide();
                v$86.hide();
              } else if (v822 == null || v822.Kj()) {
                v823 = true;
                v$84.show();
                v$86.hide();
                v$85.text(vO39.H("index.game.popup.menu.store.locked"));
                if (v822 != null && v822.Kj()) {
                  var v826 = vF12127.Lc.Xb().textDict[v822.Em()];
                  if (v826 != null) {
                    v$85.text(vO39.I(v826));
                  }
                }
              } else {
                v825 = false;
                v$84.hide();
                v$86.show();
                v$87.html(v822.Jj());
              }
              v$82.html("");
              var v827 = vF12127.Lc.Xb().textDict[v822.Fm()];
              var v828 = v827 ? vO39.K(vO39.I(v827)) : v822.Fm();
              if (v822 != null && v822.Fm() != null) {
                v$82.html(v828);
              }
              if (v825 && v822.Bm !== true) {
                v$2.html(`<button onclick="mbf.mbf_cambiar_add('${v821}', '${v828}')">Add</button>`);
              } else {
                v$2.html("");
              }
              this.Ko.$l(v819.Um(v821));
              this.Ko.um(v823);
              if (p1016) {
                vF12127.On.Fj(v821, vO37.tj.sj);
              }
            }
          };
          var vF21 = function () {
            function f215(p1017, p1018) {
              this.Yo = p1017;
              this.Uo = 0;
              this.To = p1018;
            }
            f215.prototype.Mo = function () {
              if (--this.Uo < 0) {
                this.Uo = this.To.list.length - 1;
              }
              this.Yo.Po(true);
            };
            f215.prototype.No = function () {
              if (++this.Uo >= this.To.list.length) {
                this.Uo = 0;
              }
              this.Yo.Po(true);
            };
            f215.prototype.Qo = function () {
              if (this.To.img) {
                var v829 = f121().Lc.Xb().customPaths;
                var v830 = URL_CDN + "/images/" + v829.texture;
                var vA20 = [];
                try {
                  vA20.push(`background-image:url('${v830}')`);
                  vA20.push(`background-position: -${v829.map[this.To.img].x}px -${v829.map[this.To.img].y}px`);
                  vA20.push("background-repeat:no-repeat");
                  vA20.push("width: 180px");
                  vA20.push("height: 40px");
                } catch (e39) {
                  console.error(v830, e39);
                }
                return `<div id="${this.To.id}" style="${vA20.join(";")}"></div>`;
              }
              return vO39.I(this.To.name);
            };
            f215.prototype.Wo = function () {
              if (this.Uo >= this.To.list.length) {
                return vO37.Si.Ui();
              } else {
                return vO37.Si.Vi(this.To.list[this.Uo]);
              }
            };
            return f215;
          }();
          return v800;
        }();
        vO37.lk = function () {
          var v$92 = $("#store-go-coins-button");
          var v$93 = $("#store-go-skins-button");
          var v$94 = $("#store-go-wear-button");
          var v831 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.store.tab"), true);
            var vF12128 = f121();
            v$92.click(function () {
              vF12128.Ci.Be();
              vF12128.og.Ak(vF12128.og._j);
            });
            v$93.click(function () {
              vF12128.Ci.Be();
              vF12128.og.Ak(vF12128.og.ik);
            });
            v$94.click(function () {
              vF12128.Ci.Be();
              vF12128.og.Ak(vF12128.og.mk);
            });
          });
          v831.prototype.ha = function () {
            v831.parent.prototype.ha.call(this);
          };
          v831.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeIn(200);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v831.prototype.Hk = function () {
            f121().Ci.Ce();
          };
          return v831;
        }();
        vO37.nk = function () {
          var v$95 = $("#wear-view-canv");
          var v$96 = $("#wear-description-text");
          var v$97 = $("#wear-locked-bar");
          var v$98 = $("#wear-locked-bar-text");
          var v$99 = $("#wear-buy-button");
          var v$100 = $("#wear-item-price");
          var v$101 = $("#wear-eyes-button");
          var v$102 = $("#wear-mouths-button");
          var v$103 = $("#wear-glasses-button");
          var v$104 = $("#wear-hats-button");
          var v$105 = $("#wear-tint-chooser");
          var v$106 = $("#wear-view-prev");
          var v$107 = $("#wear-view-next");
          var v832 = vO39.M(vO37.bo, function () {
            var vThis75 = this;
            vO37.bo.call(this, vO39.H("index.game.popup.menu.wear.tab"), true);
            var vF12129 = f121();
            var vThis76 = this;
            this.Zo = [];
            this.uj = new vF22(this, vO37.tj.uj, v$101);
            this.vj = new vF22(this, vO37.tj.vj, v$102);
            this.xj = new vF22(this, vO37.tj.xj, v$103);
            this.wj = new vF22(this, vO37.tj.wj, v$104);
            this.$o = null;
            this._o = null;
            this.ap = null;
            this.bp = null;
            this.cp = null;
            this.dp = null;
            this.Ko = new vO37.dm(v$95);
            v$99.click(function () {
              vF12129.Ci.Be();
              vThis76.ep();
            });
            v$106.click(function () {
              vF12129.Ci.Be();
              vThis76.$o.fp();
            });
            v$107.click(function () {
              vF12129.Ci.Be();
              vThis76.$o.gp();
            });
            v$101.click(function () {
              vF12129.Ci.Be();
              vThis76.hp(vThis75.uj);
            });
            v$102.click(function () {
              vF12129.Ci.Be();
              vThis76.hp(vThis75.vj);
            });
            v$103.click(function () {
              vF12129.Ci.Be();
              vThis76.hp(vThis75.xj);
            });
            v$104.click(function () {
              vF12129.Ci.Be();
              vThis76.hp(vThis75.wj);
            });
            this.Zo.push(this.uj);
            this.Zo.push(this.vj);
            this.Zo.push(this.xj);
            this.Zo.push(this.wj);
          });
          v832.prototype.ha = function () {
            v832.parent.prototype.ha.call(this);
            var vF12130 = f121();
            var vThis77 = this;
            vF12130.Lc.$b(function () {
              var v833 = vF12130.Lc.Xb();
              vThis77._o = v833.eyesDict;
              vThis77.ap = v833.mouthDict;
              vThis77.bp = v833.glassesDict;
              vThis77.cp = v833.hatDict;
              vThis77.dp = v833.colorDict;
              vThis77.uj.ip(v833.eyesVariantArray);
              vThis77.uj.jp(vThis77._o);
              vThis77.vj.ip(v833.mouthVariantArray);
              vThis77.vj.jp(vThis77.ap);
              vThis77.xj.ip(v833.glassesVariantArray);
              vThis77.xj.jp(vThis77.bp);
              vThis77.wj.ip(v833.hatVariantArray);
              vThis77.wj.jp(vThis77.cp);
            });
            this.Po(false);
            vF12130.On.zj(function () {
              vThis77.Po(false);
            });
          };
          v832.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeIn(200);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v832.prototype.Hk = function () {
            f121().Ci.pe(vO37.ge.je._e);
            f121().Ci.Ce();
            this.hp(this.$o ?? this.uj);
            this.Ko.Kf(true);
          };
          v832.prototype.Bk = function () {
            this.Ko.Kf(false);
          };
          v832.prototype.Jf = function () {
            this.Ko.Jf();
          };
          v832.prototype.Nf = function (p1019, p1020) {
            this.Ko.Nf();
          };
          v832.prototype.hp = function (p1021) {
            this.$o = p1021;
            for (var vLN0132 = 0; vLN0132 < this.Zo.length; vLN0132++) {
              this.Zo[vLN0132].Ao.removeClass("pressed");
            }
            this.$o.Ao.addClass("pressed");
            this.$o.Gk();
          };
          v832.prototype.kp = function () {
            if (this.$o == null) {
              return vO37.Si.Ui();
            } else {
              return vO37.Si.Vi({
                ae: this.$o.Wo(),
                nd: this.$o.nd
              });
            }
          };
          v832.prototype.ep = function () {
            var vThis78 = this;
            var v834 = this.kp();
            if (v834.Wi()) {
              var v835 = v834.bc();
              vThis78.lp(v835.ae, v835.nd);
            }
          };
          v832.prototype.lp = function (p1022, p1023) {
            var vF12131 = f121();
            var v836 = vF12131.On.Gj(p1022, p1023);
            if (v836 != null) {
              var v837 = v836.Jj();
              if (!(vF12131.Ij.il() < v837)) {
                var v838 = vF12131.On.rj(vO37.tj.sj);
                var v839 = vF12131.On.rj(vO37.tj.uj);
                var v840 = vF12131.On.rj(vO37.tj.vj);
                var v841 = vF12131.On.rj(vO37.tj.xj);
                var v842 = vF12131.On.rj(vO37.tj.wj);
                var v843 = this.ro(5000);
                vF12131.Ij.Hl(p1022, p1023, function () {
                  v843.vo();
                  vF12131.og.Ak(vF12131.og.tk);
                }, function (p1024) {
                  vF12131.Ij.Bl(function () {
                    vF12131.On.Fj(v838, vO37.tj.sj);
                    vF12131.On.Fj(v839, vO37.tj.uj);
                    vF12131.On.Fj(v840, vO37.tj.vj);
                    vF12131.On.Fj(v841, vO37.tj.xj);
                    vF12131.On.Fj(v842, vO37.tj.wj);
                    vF12131.On.Fj(p1022, p1023);
                    v843.vo();
                  });
                });
              }
            }
          };
          v832.prototype.Po = function (p1025) {
            var vF12132 = f121();
            var v844 = vF12132.On.yj();
            var v845 = this.kp();
            if (v845.Wi()) {
              var v846 = v845.bc();
              var v847 = vF12132.On.Gj(v846.ae, v846.nd);
              var v848 = false;
              if (vF12132.On.Cj(v846.ae, v846.nd)) {
                v$97.hide();
                v$99.hide();
              } else if (v847 == null || v847.Kj()) {
                v848 = true;
                v$97.show();
                v$99.hide();
                v$98.text(vO39.H("index.game.popup.menu.store.locked"));
                if (v847 != null && v847.Kj()) {
                  var v849 = vF12132.Lc.Xb().textDict[v847.Em()];
                  if (v849 != null) {
                    v$98.text(vO39.I(v849));
                  }
                }
              } else {
                v$97.hide();
                v$99.show();
                v$100.html(v847.Jj());
              }
              v$96.html("");
              if (v847 != null && v847.Fm() != null) {
                var v850 = vF12132.Lc.Xb().textDict[v847.Fm()];
                if (v850 != null) {
                  v$96.html(vO39.K(vO39.I(v850)));
                }
              }
              var v851 = this.Ko;
              switch (v846.nd) {
                case vO37.tj.uj:
                  v851.$l(v844.Vm(v846.ae));
                  v851.vm(v848);
                  break;
                case vO37.tj.vj:
                  v851.$l(v844.Wm(v846.ae));
                  v851.wm(v848);
                  break;
                case vO37.tj.xj:
                  v851.$l(v844.Ym(v846.ae));
                  v851.ym(v848);
                  break;
                case vO37.tj.wj:
                  v851.$l(v844.Xm(v846.ae));
                  v851.xm(v848);
              }
              if (p1025) {
                vF12132.On.Fj(v846.ae, v846.nd);
              }
            }
          };
          var vF22 = function () {
            function f216(p1026, p1027, p1028) {
              this.Yo = p1026;
              this.nd = p1027;
              this.Ao = p1028;
              this.ac = {};
              this.mp = [[]];
              this.np = -10;
              this.op = -10;
            }
            f216.prototype.ip = function (p1029) {
              this.mp = p1029;
            };
            f216.prototype.jp = function (p1030) {
              this.ac = p1030;
            };
            f216.prototype.Gk = function () {
              var vF12133 = f121();
              var v852 = vF12133.On.rj(this.nd);
              for (var vLN0133 = 0; vLN0133 < this.mp.length; vLN0133++) {
                for (var vLN0134 = 0; vLN0134 < this.mp[vLN0133].length; vLN0134++) {
                  if (this.mp[vLN0133][vLN0134] == v852) {
                    this.pp(vLN0133);
                    this.qp(vLN0134);
                    return;
                  }
                }
              }
              this.pp(0);
              this.qp(0);
            };
            f216.prototype.fp = function () {
              var v853 = this.np - 1;
              if (v853 < 0) {
                v853 = this.mp.length - 1;
              }
              this.pp(v853);
              this.qp(this.op % this.mp[v853].length);
            };
            f216.prototype.gp = function () {
              var v854 = this.np + 1;
              if (v854 >= this.mp.length) {
                v854 = 0;
              }
              this.pp(v854);
              this.qp(this.op % this.mp[v854].length);
            };
            f216.prototype.pp = function (p1031) {
              var vThis79 = this;
              if (!(p1031 < 0) && !(p1031 >= this.mp.length)) {
                this.np = p1031;
                v$105.empty();
                var v855 = this.mp[this.np];
                if (v855.length > 1) {
                  for (var vLN0135 = 0; vLN0135 < v855.length; vLN0135++) {
                    (function (p1032) {
                      var v856 = v855[p1032];
                      var v857 = vThis79.ac[v856];
                      var v858 = "#" + vThis79.Yo.dp[v857.prime];
                      var v$108 = $("<div style=\"border-color:" + v858 + "\"></div>");
                      v$108.click(function () {
                        f121().Ci.Be();
                        vThis79.qp(p1032);
                      });
                      v$105.append(v$108);
                    })(vLN0135);
                  }
                }
              }
            };
            f216.prototype.qp = function (p1033) {
              if (!(p1033 < 0) && !(p1033 >= this.mp[this.np].length)) {
                this.op = p1033;
                v$105.children().css("background-color", "transparent");
                var v859 = v$105.children(":nth-child(" + (1 + p1033) + ")");
                v859.css("background-color", v859.css("border-color"));
                this.Yo.Po(true);
              }
            };
            f216.prototype.Wo = function () {
              return this.mp[this.np][this.op];
            };
            return f216;
          }();
          return v832;
        }();
        vO37.Yj = function () {
          var v$109 = $("#withdraw-consent-yes");
          var v$110 = $("#withdraw-consent-no");
          var v860 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.consent.tab"), false);
            var vF12134 = f121();
            v$109.click(function () {
              vF12134.Ci.Be();
              if (vF12134.Go()) {
                vF12134.og.Ak(vF12134.og._e);
                vF12134.rp(false, true);
                vF12134.og.qk._n(new vO37.sp());
              } else {
                vF12134.og.Dk();
              }
            });
            v$110.click(function () {
              vF12134.Ci.Be();
              vF12134.og.Dk();
            });
          });
          v860.prototype.ha = function () {
            v860.parent.prototype.ha.call(this);
          };
          v860.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeIn(200);
            vO37.bo.po.stop();
            vO37.bo.po.fadeOut(50);
          };
          v860.prototype.Hk = function () {
            f121().Ci.Ce();
          };
          return v860;
        }();
        vO37.$j = function () {
          var v$111 = $("#delete-account-timer");
          var v$112 = $("#delete-account-yes");
          var v$113 = $("#delete-account-no");
          var v861 = vO39.M(vO37.bo, function () {
            vO37.bo.call(this, vO39.H("index.game.popup.menu.delete.tab"), false);
            var vF12135 = f121();
            v$112.click(function () {
              vF12135.Ci.Be();
              if (vF12135.Ij.Hj()) {
                vF12135.Ij.Sl();
                vF12135.Ij.Kl();
              } else {
                vF12135.og.Dk();
              }
            });
            v$113.click(function () {
              vF12135.Ci.Be();
              vF12135.og.Dk();
            });
            this.tp = [];
          });
          v861.prototype.ha = function () {
            v861.parent.prototype.ha.call(this);
          };
          v861.prototype.qo = function () {
            vO37.bo.go.stop();
            vO37.bo.go.fadeOut(50);
            vO37.bo.ho.stop();
            vO37.bo.ho.fadeOut(50);
            vO37.bo.io.stop();
            vO37.bo.io.fadeOut(50);
            vO37.bo.ko.stop();
            vO37.bo.ko.fadeOut(50);
            vO37.bo.jo.stop();
            vO37.bo.jo.fadeOut(50);
            vO37.bo.lo.stop();
            vO37.bo.lo.fadeOut(50);
            vO37.bo.mo.stop();
            vO37.bo.mo.fadeOut(50);
            vO37.bo.no.stop();
            vO37.bo.no.fadeOut(50);
            vO37.bo.oo.stop();
            vO37.bo.oo.fadeOut(50);
            vO37.bo.po.stop();
            vO37.bo.po.fadeIn(200);
          };
          v861.prototype.Hk = function () {
            f121().Ci.Ge();
            v$112.stop();
            v$112.hide();
            v$111.stop();
            v$111.show();
            v$111.text(".. 10 ..");
            this.up();
            this.vp(function () {
              v$111.text(".. 9 ..");
            }, 1000);
            this.vp(function () {
              v$111.text(".. 8 ..");
            }, 2000);
            this.vp(function () {
              v$111.text(".. 7 ..");
            }, 3000);
            this.vp(function () {
              v$111.text(".. 6 ..");
            }, 4000);
            this.vp(function () {
              v$111.text(".. 5 ..");
            }, 5000);
            this.vp(function () {
              v$111.text(".. 4 ..");
            }, 6000);
            this.vp(function () {
              v$111.text(".. 3 ..");
            }, 7000);
            this.vp(function () {
              v$111.text(".. 2 ..");
            }, 8000);
            this.vp(function () {
              v$111.text(".. 1 ..");
            }, 9000);
            this.vp(function () {
              v$111.hide();
              v$112.fadeIn(300);
            }, 10000);
          };
          v861.prototype.vp = function (p1034, p1035) {
            var vSetTimeout2 = setTimeout(p1034, p1035);
            this.tp.push(vSetTimeout2);
          };
          v861.prototype.up = function () {
            for (var vLN0136 = 0; vLN0136 < this.tp.length; vLN0136++) {
              clearTimeout(this.tp[vLN0136]);
            }
            this.tp = [];
          };
          return v861;
        }();
        vO37.wp = function () {
          function f217() {
            this.ao = function () {};
          }
          f217.prototype.tf = function () {};
          f217.prototype.Hk = function () {};
          return f217;
        }();
        vO37.Gl = function () {
          var v862 = vO39.M(vO37.wp, function (p1036) {
            vO37.wp.call(this);
            var v863 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
            this.xp = $("<div id=\"" + v863 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + p1036 + "</div>    <div class=\"toaster-coins-close\">" + vO39.H("index.game.toaster.continue") + "</div></div>");
            var vThis80 = this;
            this.xp.find(".toaster-coins-close").click(function () {
              f121().Ci.Be();
              vThis80.ao();
            });
          });
          v862.prototype.tf = function () {
            return this.xp;
          };
          v862.prototype.Hk = function () {
            f121().Ci.Ee();
          };
          return v862;
        }();
        vO37.Fl = function () {
          var v864 = vO39.M(vO37.wp, function (p1037) {
            vO37.wp.call(this);
            var v865 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
            this.xp = $("<div id=\"" + v865 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + p1037 + "</div>    <div class=\"toaster-levelup-text\">" + vO39.H("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + vO39.H("index.game.toaster.continue") + "</div></div>");
            var vThis81 = this;
            this.xp.find(".toaster-levelup-close").click(function () {
              f121().Ci.Be();
              vThis81.ao();
            });
          });
          v864.prototype.tf = function () {
            return this.xp;
          };
          v864.prototype.Hk = function () {
            f121().Ci.De();
          };
          return v864;
        }();
        vO37.sp = function () {
          var v866 = vO39.M(vO37.wp, function () {
            vO37.wp.call(this);
            var vThis82 = this;
            var vF12136 = f121();
            var v867 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
            this.xp = $("<div id=\"" + v867 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + vO39.a.d + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + vO39.H("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + vO39.H("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + vO39.H("index.game.toaster.consent.iAccept") + "</div></div>");
            this.yp = this.xp.find(".toaster-consent-close");
            this.yp.hide();
            this.yp.click(function () {
              vF12136.Ci.Be();
              if (vF12136.Go()) {
                vF12136.rp(true, true);
              }
              vThis82.ao();
            });
          });
          v866.prototype.tf = function () {
            return this.xp;
          };
          v866.prototype.Hk = function () {
            var vThis83 = this;
            var vF12137 = f121();
            if (vF12137.Go() && !vF12137.hl()) {
              vF12137.Ci.Ge();
              setTimeout(function () {
                vThis83.yp.fadeIn(300);
              }, 2000);
            } else {
              setTimeout(function () {
                vThis83.ao();
              }, 0);
            }
          };
          return v866;
        }();
        vO37.uk = function () {
          var v$114 = $("#error-gateway-connection-retry");
          var v868 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
            var vF12138 = f121();
            v$114.click(function () {
              vF12138.Ci.Be();
              vF12138.og.ie.Mn();
              vF12138.og.Ak(vF12138.og.ie);
              setTimeout(function () {
                var v869 = vO39.a.b + "/pub/healthCheck/ping";
                vO39.Z(v869, function () {
                  vF12138.og.Ak(vF12138.og.tk);
                }, function (p1038) {
                  vF12138.og.ie.Kn();
                  vF12138.Lc.Ib(function () {
                    vF12138.og.Ak(vF12138.og._e);
                  }, function (p1039) {
                    vF12138.og.Ak(vF12138.og.tk);
                  }, function (p1040, p1041) {
                    var vP1040 = p1040;
                    vF12138.og.ie.Ln(vP1040, p1041);
                  });
                });
              }, 2000);
            });
          });
          v868.prototype.ha = function () {};
          v868.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(50);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(50);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(50);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(50);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeIn(500);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeOut(50);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeOut(50);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeOut(50);
          };
          v868.prototype.Hk = function () {
            var vF12139 = f121();
            vF12139.Ci.pe(vO37.ge.je._e);
            vF12139.Ci.Ge();
          };
          return v868;
        }();
        vO37.wk = function () {
          var v$115 = $("#error-game-connection-retry");
          var v870 = vO39.M(vO37.kf, function () {
            vO37.kf.call(this, vO37.Fk.wn);
            var vF12140 = f121();
            v$115.click(function () {
              vF12140.Ci.Be();
              vF12140.og.Ak(vF12140.og._e);
            });
          });
          v870.prototype.ha = function () {};
          v870.prototype.Gk = function () {
            vO37.kf.jn.stop();
            vO37.kf.jn.fadeOut(50);
            vO37.kf.ln.stop();
            vO37.kf.ln.fadeOut(50);
            vO37.kf.nn.stop();
            vO37.kf.nn.fadeOut(50);
            vO37.kf.pn.stop();
            vO37.kf.pn.fadeOut(50);
            vO37.kf.sn.stop();
            vO37.kf.sn.fadeOut(50);
            vO37.kf.qn.stop();
            vO37.kf.qn.fadeOut(50);
            vO37.kf.rn.stop();
            vO37.kf.rn.fadeOut(50);
            vO37.kf.tn.stop();
            vO37.kf.tn.fadeOut(50);
            vO37.kf.un_error.stop();
            vO37.kf.un_error.fadeIn(500);
            vO37.kf.mn.stop();
            vO37.kf.mn.fadeIn(1);
            vO37.kf.bgcanvas.stop();
            vO37.kf.bgcanvas.fadeIn(500);
            vO37.GameView.Kf(true);
            vO37.kf.socialButtons.stop();
            vO37.kf.socialButtons.fadeOut(50);
            vO37.kf.vn.stop();
            vO37.kf.vn.fadeOut(50);
          };
          v870.prototype.Hk = function () {
            var vF12141 = f121();
            vF12141.Ci.pe(vO37.ge.je._e);
            vF12141.Ci.Ge();
          };
          return v870;
        }();
        vO39.zp = function () {
          function f218(p1042) {
            var v871 = p1042 + Math.floor(Math.random() * 65535) * 37;
            vO37.Vf.eg(vO37.Vf.cg, v871, 30);
          }
          function f219() {
            return parseInt(vO37.Vf.fg(vO37.Vf.cg)) % 37;
          }
          return function () {
            var vF219 = f219();
            if (!(vF219 >= 0) || !(vF219 < vF23.Ap)) {
              vF219 = Math.max(0, vF23.Ap - 2);
            }
            var vO55 = {
              zn: vF23,
              Bp: false
            };
            vO55.Cp = Date.now();
            vO55.Dp = 0;
            vO55.Ep = 0;
            vO55.Fp = null;
            vO55.Gp = vO39.a.j;
            vO55.Hp = vO39.a.i;
            vO55.dh = null;
            vO55.Lc = null;
            vO55.xe = null;
            vO55.Ci = null;
            vO55.og = null;
            vO55.On = null;
            vO55.Ij = null;
            try {
              if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (p1043) {
                  if (p1043.coords !== undefined) {
                    var v872 = p1043.coords;
                    if (v872.latitude !== undefined && v872.longitude !== undefined) {
                      vO55.Fp = p1043;
                    }
                  }
                }, function (p1044) {});
              }
            } catch (e40) {}
            vO55.Ip = function () {
              vO55.dh = new vO37.Engine();
              vO55.dh.Kp = new vO37.MessageProcessor(vO55.dh);
              vO55.Lc = new vO37._a();
              vO55.xe = new vO37.Qj();
              vO55.Ci = new vO37.ge();
              vO55.og = new vO37.Tj();
              vO55.On = new vO37.kj();
              vO55.Ij = new vO37.Mk();
              vO55.ha();
            };
            vO55.ha = function () {
              try {
                ga("send", "event", "app", window.runtimeHash + "_init");
              } catch (e41) {}
              vO55.dh.Lp = function () {
                vO55.og.Ak(vO55.og.vk);
              };
              vO55.dh.Mp = function () {
                var v873 = vO55.og._e.Wn();
                try {
                  ga("send", "event", "game", window.runtimeHash + "_start", v873);
                } catch (e42) {}
                vO55.Ci.pe(vO37.ge.je.af);
                vO55.og.Ak(vO55.og.af.Dn());
              };
              vO55.dh.Np = function () {
                try {
                  ga("send", "event", "game", window.runtimeHash + "_end");
                } catch (e43) {}
                if ($("body").height() >= 430) {
                  vO55.zn.Op.ka();
                }
                vO55.Lc.Ib(null, null, null);
                (function () {
                  var v874 = Math.floor(vO55.dh.ch.Bh);
                  var v875 = vO55.dh.Ih;
                  if (vO55.Ij.Hj()) {
                    vO55.Ij.Bl(function () {
                      vO55.Pp(v874, v875);
                    });
                  } else {
                    vO55.Pp(v874, v875);
                  }
                })();
              };
              vO55.dh.Qp = function (p1045) {
                p1045(vO55.og.af.Gn(), vO55.og.af.Hn());
              };
              vO55.Ij.yl(function () {
                var v876 = vO55.og.Lk();
                if (v876 != null && v876.nd === vO37.Fk.Ek) {
                  vO55.Ci.pe(vO37.ge.je._e);
                  vO55.og.Ak(vO55.og._e);
                }
                if (vO55.Ij.Hj()) {
                  try {
                    var v877 = vO55.Ij.cl();
                    ga("set", "userId", v877);
                  } catch (e44) {}
                }
                if (vO55.Go() && vO55.Ij.Hj() && !vO55.Ij.hl()) {
                  vO55.rp(false, false);
                  vO55.og.qk._n(new vO37.sp());
                } else {
                  vO55.Rp(true);
                }
              });
              vO55.dh.run();
              vO55.og.ha();
              vO55.On.ha();
              vO55.Lc.ha();
              vO55.og._e.Vn();
              vO55.og.Ak(vO55.og._e);
              vO55.xe.ha(function () {
                vO55.Ci.ha();
                vO55.Ij.ha();
                vO55.Lc.Ib(function () {
                  vO55.og._e.Un();
                  vO55.og.Ak(vO55.og._e);
                }, function (p1046) {
                  vO55.og._e.Un();
                  vO55.og.Ak(vO55.og.tk);
                }, function (p1047, p1048) {
                  var vP1047 = p1047;
                  vO55.og.ie.Ln(vP1047, p1048);
                  vO55.og._e.Ln(vP1047, p1048);
                });
                if (vO55.Go() && !vO55.hl()) {
                  vO55.og.qk._n(new vO37.sp());
                } else {
                  vO55.Rp(true);
                }
              });
            };
            vO55.Sp = function (p1049) {
              if (vO55.Ij.Hj()) {
                var v878 = vO55.Ij.Al();
                var v879 = vO39.a.b + "/pub/wuid/" + v878 + "/consent/change?value=" + encodeURI(p1049);
                vO39.Z(v879, function () {}, function (p1050) {});
              }
            };
            vO55.Pn = function (p1051) {
              vF219++;
              if (!vO55.zn.Tp && vF219 >= vO55.zn.Ap) {
                vO55.og.Ak(vO55.og.xk);
                vO55.Ci.pe(vO37.ge.je.cf);
                vO55.zn.Up.ia();
              } else {
                f218(vF219);
                vO55.Vp(p1051);
              }
            };
            vO55.Vp = function (p1052) {
              if (vO55.dh.Wp()) {
                vO55.og.ie.Mn();
                vO55.og.Ak(vO55.og.ie);
                var v880 = vO55.og._e.Wn();
                vO37.Vf.eg(vO37.Vf._f, v880, 30);
                var v881 = vO55.og.$h.Zh();
                vO37.Vf.eg(vO37.Vf.Xf, v881, 30);
                var vLN0137 = 0;
                if (vO55.Fp != null) {
                  var v882 = vO55.Fp.coords.latitude;
                  var v883 = vO55.Fp.coords.longitude;
                  vLN0137 = Math.max(0, Math.min(32767, (v882 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (v883 + 180) / 360 * 65536)) << 16;
                }
                if (vO55.Ij.Hj()) {
                  vO55.Xp(v880, vLN0137, p1052);
                } else {
                  var v884 = vO55.og._e.el();
                  vO37.Vf.eg(vO37.Vf.ag, v884, 30);
                  var v885 = vO55.On.rj(vO37.tj.sj);
                  vO37.Vf.eg(vO37.Vf.bg, v885, 30);
                  vO55.Yp(v880, vLN0137);
                }
              }
            };
            vO55.Xp = function (p1053, p1054, p1055) {
              var vVO55 = vO55;
              var v886 = vO55.Ij.Al();
              var v887 = vO55.og._e.el();
              var v888 = vO55.On.rj(vO37.tj.sj);
              var v889 = vO55.On.rj(vO37.tj.uj);
              var v890 = vO55.On.rj(vO37.tj.vj);
              var v891 = vO55.On.rj(vO37.tj.xj);
              var v892 = vO55.On.rj(vO37.tj.wj);
              var v893 = (v50 ? URL_CDN : vO39.a.b) + "/pub/wuid/" + v886 + "/start?gameMode=" + encodeURI(p1053) + "&gh=" + p1054 + "&nickname=" + vO31.Xp(v886, v887, v888, v889, v890, v891, v892) + "&skinId=" + encodeURI(_wwc.validInput(v888 || 0)) + "&eyesId=" + encodeURI(_wwc.validInputWear(v889)) + "&mouthId=" + encodeURI(_wwc.validInputWear(v890)) + "&glassesId=" + encodeURI(_wwc.validInputWear(v891)) + "&hatId=" + encodeURI(_wwc.validInputWear(v892));
              vO39.Z(v893, function () {
                vVO55.og.Ak(vVO55.og.tk);
              }, function (p1056) {
                if (p1056.code === 1460) {
                  vVO55.og.Ak(vVO55.og.ok);
                  try {
                    ga("send", "event", "restricted", window.runtimeHash + "_tick");
                  } catch (e45) {}
                } else if (false) {} else {
                  if (!p1056.server_url) {
                    vO30.dh.Cq();
                    return;
                  }
                  var v894 = p1056.server_url;
                  vVO55.dh.Zp(v894, v886, p1055);
                }
              });
            };
            vO55.Yp = function (p1057, p1058) {
              var vVO552 = vO55;
              var v895 = vO55.og._e.el();
              var v896 = vO55.On.rj(vO37.tj.sj);
              var v897 = vO39.a.b + "/pub/wuid/guest/start?gameMode=" + encodeURI(p1057) + "&gh=" + p1058 + "&nickname=" + encodeURI(v895) + "&skinId=" + encodeURI(v896);
              vO39.Z(v897, function () {
                vVO552.og.Ak(vVO552.og.tk);
              }, function (p1059) {
                if (p1059.code === 1460) {
                  vVO552.og.Ak(vVO552.og.ok);
                  try {
                    ga("send", "event", "restricted", window.runtimeHash + "_tick");
                  } catch (e46) {}
                } else if (p1059.code !== 1200) {
                  vVO552.og.Ak(vVO552.og.tk);
                } else {
                  var v898 = p1059.server_url;
                  vVO552.dh.$p(v898, v895, v896);
                }
              });
            };
            vO55.Pp = function (p1060, p1061) {
              var v899 = vO55.og._e.el();
              vO55.og.af.Fn(p1060, p1061, v899);
              vO55.Ci.pe(vO37.ge.je.bf);
              vO55.og.Ak(vO55.og.af.En());
            };
            vO55.Sn = function () {
              if (!vO55.Tn()) {
                return vO55.On.Bj();
              }
              var vParseInt6 = parseInt(vO37.Vf.fg(vO37.Vf.bg));
              if (vParseInt6 != null && vO55.On.Cj(vParseInt6, vO37.tj.sj)) {
                return vParseInt6;
              } else {
                return vO55.On.Bj();
              }
            };
            vO55.Xn = function (p1062) {
              vO37.Vf.eg(vO37.Vf.dg, p1062 ? "true" : "false", 1800);
            };
            vO55.Tn = function () {
              return vO37.Vf.fg(vO37.Vf.dg) === "true";
            };
            vO55.Rp = function (p1063) {
              if (p1063 !== vO55.Bp) {
                vO55.Bp = p1063;
                var v900 = v900 || {};
                v900.consented = p1063;
                v900.gdprConsent = p1063;
                vO55.zn.yn.ha();
                vO55.zn.Op.ha();
                vO55.zn.Up.ha(function (p1064) {
                  if (p1064) {
                    f218(vF219 = 0);
                  }
                  vO55.Vp();
                });
              }
            };
            vO55.rp = function (p1065, p1066) {
              vO37.Vf.eg(vO37.Vf.Wf, p1065 ? "true" : "false");
              if (p1066) {
                vO55.Sp(p1065);
              }
              vO55.Rp(p1065);
            };
            vO55.hl = function () {
              switch (vO37.Vf.fg(vO37.Vf.Wf)) {
                case "true":
                  return true;
                default:
                  return false;
              }
            };
            vO55.Go = function () {
              try {
                return !!window.isIPInEEA || vO55.Fp != null && !!vO38.gg.hg(vO55.Fp.coords.latitude, vO55.Fp.coords.longitude);
              } catch (e47) {
                return true;
              }
            };
            vO55.Nf = function () {
              vO55.Dp = performance.now();
              vO55.Ep = vO55.Dp - vO55.Cp;
              vO55.dh.lh(vO55.Dp, vO55.Ep);
              vO55.og.lh(vO55.Dp, vO55.Ep);
              vO55.Cp = vO55.Dp;
            };
            vO55.Jf = function () {
              vO55.og.Jf();
            };
            return vO55;
          }();
        };
        vO37.Engine = function () {
          var vO56 = {
            dq: 30,
            fq: new Float32Array(100),
            gq: 0,
            hq: 0,
            iq: 0,
            jq: 0,
            kq: 0,
            lq: 0,
            Cn: 0,
            mq: null,
            nq: 300,
            Mp: function () {},
            Np: function () {},
            Qp: function () {},
            Lp: function () {},
            hh: new vO37.GameParams(),
            Kp: null,
            ch: null,
            Hi: {},
            Fh: {},
            Di: 12.5,
            eh: 40,
            oq: 1,
            pq: -1,
            qq: 1,
            rq: 1,
            sq: -1,
            tq: -1,
            uq: 1,
            vq: 1,
            wq: -1,
            Ih: 500,
            yh: 500
          };
          vO56.hh.zg = 500;
          vO56.ch = new vO37.Worm(vO56.hh);
          vO56.run = function () {
            vO56.ch.ti(f121().og.af.ng);
          };
          vO56.gh = function (p1067, p1068, p1069, p1070) {
            vO56.pq = p1067;
            vO56.qq = p1068;
            vO56.rq = p1069;
            vO56.sq = p1070;
            vO56.yq();
          };
          vO56.zq = function (p1071) {
            vO56.oq = p1071;
            vO56.yq();
          };
          vO56.yq = function () {
            vO56.tq = vO56.pq - vO56.oq;
            vO56.uq = vO56.qq + vO56.oq;
            vO56.vq = vO56.rq - vO56.oq;
            vO56.wq = vO56.sq + vO56.oq;
          };
          vO56.lh = function (p1072, p1073) {
            vO56.iq += p1073;
            vO56.hq -= vO56.gq * 0.2 * p1073;
            vO56.Kp.Rh();
            if (vO56.mq !== null && (vO56.Cn === 2 || vO56.Cn === 3)) {
              vO56.Aq(p1072, p1073);
              vO56.eh = 4 + vO56.Di * vO56.ch.$c;
            }
            var v901 = 1000 / Math.max(1, p1073);
            var vLN0138 = 0;
            for (var vLN0139 = 0; vLN0139 < vO56.fq.length - 1; vLN0139++) {
              vLN0138 += vO56.fq[vLN0139];
              vO56.fq[vLN0139] = vO56.fq[vLN0139 + 1];
            }
            vO56.fq[vO56.fq.length - 1] = v901;
            vO56.dq = (vLN0138 + v901) / vO56.fq.length;
          };
          vO56.Bq = function (p1074, p1075) {
            return p1074 > vO56.tq && p1074 < vO56.uq && p1075 > vO56.vq && p1075 < vO56.wq;
          };
          vO56.Aq = function (p1076, p1077) {
            var v902 = vO56.iq + vO56.hq;
            var v903 = (v902 - vO56.jq) / (vO56.kq - vO56.jq);
            vO56.ch.hj(p1076, p1077);
            vO56.ch.ij(p1076, p1077, v903, vO56.Bq);
            var vLN0140 = 0;
            for (var v904 in vO56.Fh) {
              var v905 = vO56.Fh[v904];
              v905.hj(p1076, p1077);
              v905.ij(p1076, p1077, v903, vO56.Bq);
              if (v905.xi && v905.$c > vLN0140) {
                vLN0140 = v905.$c;
              }
              if (!v905.wi && (!!(v905.dj < 0.005) || !v905.xi)) {
                v905.si();
                delete vO56.Fh[v905.Eh.ae];
              }
            }
            vO56.zq(vLN0140 * 3);
            for (var v906 in vO56.Hi) {
              var v907 = vO56.Hi[v906];
              v907.hj(p1076, p1077);
              v907.ij(p1076, p1077, vO56.Bq);
              if (v907.Ni && (v907.dj < 0.005 || !vO56.Bq(v907.Zi, v907.$i))) {
                v907.si();
                delete vO56.Hi[v907.Eh.ae];
              }
            }
          };
          vO56.ki = function (p1078, p1079) {
            if (vO56.Cn === 1) {
              vO56.Cn = 2;
              vO56.Mp();
            }
            var v908 = f121().Dp;
            vO56.lq = p1078;
            if (p1078 === 0) {
              vO56.jq = v908 - 95;
              vO56.kq = v908;
              vO56.iq = vO56.jq;
              vO56.hq = 0;
            } else {
              vO56.jq = vO56.kq;
              vO56.kq = vO56.kq + p1079;
            }
            var v909 = vO56.iq + vO56.hq;
            vO56.gq = (v909 - vO56.jq) / (vO56.kq - vO56.jq);
          };
          vO56.Oi = function () {
            if (vO56.Cn === 1 || vO56.Cn === 2) {
              vO56.Cn = 3;
              var v910 = vO56.mq;
              setTimeout(function () {
                if (vO56.Cn === 3) {
                  vO56.Cn = 0;
                }
                if (v910 != null && v910 === vO56.mq) {
                  vO56.mq.close();
                  vO56.mq = null;
                }
              }, 4500);
              vO56.Np();
            }
          };
          vO56.Wp = function () {
            return vO56.Cn !== 2 && (vO56.Cn = 1, vO56.Kp.Qh(), vO56.Hi = {}, vO56.Fh = {}, vO56.ch.Pm(), vO56.mq != null && (vO56.mq.close(), vO56.mq = null), true);
          };
          vO56.Cq = function () {
            vO56.mq = null;
            vO56.Kp.Qh();
            if (vO56.Cn !== 3) {
              vO56.Lp();
            }
            vO56.Cn = 0;
          };
          vO56.Zp = function (p1080, p1081) {
            vO56.Dq(p1080, function () {
              var v911 = Math.min(2048, p1081.length);
              var v912 = new ArrayBuffer(6 + v911 * 2);
              var v913 = new DataView(v912);
              var vLN0141 = 0;
              v913.setInt8(vLN0141, 129);
              vLN0141 += 1;
              v913.setInt16(vLN0141, 2800);
              vLN0141 += 2;
              v913.setInt8(vLN0141, 1);
              vLN0141 += 1;
              v913.setInt16(vLN0141, v911);
              vLN0141 += 2;
              for (var vLN0142 = 0; vLN0142 < v911; vLN0142++) {
                v913.setInt16(vLN0141, p1081.charCodeAt(vLN0142));
                vLN0141 += 2;
              }
              vO56.Eq(v912);
            });
          };
          vO56.$p = function (p1082, p1083, p1084) {
            vO56.Dq(p1082, function () {
              var v914 = Math.min(32, p1083.length);
              var v915 = new ArrayBuffer(7 + v914 * 2);
              var v916 = new DataView(v915);
              var vLN0143 = 0;
              v916.setInt8(vLN0143, 129);
              vLN0143 += 1;
              v916.setInt16(vLN0143, 2800);
              vLN0143 += 2;
              v916.setInt8(vLN0143, 0);
              vLN0143 += 1;
              v916.setInt16(vLN0143, p1084);
              vLN0143 += 2;
              v916.setInt8(vLN0143, v914);
              vLN0143++;
              for (var vLN0144 = 0; vLN0144 < v914; vLN0144++) {
                v916.setInt16(vLN0143, p1083.charCodeAt(vLN0144));
                vLN0143 += 2;
              }
              vO56.Eq(v915);
            });
          };
          vO56.Eq = function (p1085) {
            try {
              if (vO56.mq != null && vO56.mq.readyState === WebSocket.OPEN) {
                vO56.mq.send(p1085);
              }
            } catch (e48) {
              vO56.Cq();
            }
          };
          vO56.xq = function (p1086, p1087) {
            var v917 = p1087 ? 128 : 0;
            var v918 = vO39.N(p1086) / vO38.F * 128 & 127;
            var v919 = (v917 | v918) & 255;
            var v920 = new ArrayBuffer(1);
            new DataView(v920).setInt8(0, v919);
            vO56.Eq(v920);
            vO56.nq = v919;
          };
          vO56.Dq = function (p1088, p1089) {
            var v921 = vO56.mq = new WebSocket(p1088);
            v921.binaryType = "arraybuffer";
            v921.onopen = function () {
              if (vO56.mq === v921) {
                p1089();
              }
            };
            v921.onclose = function () {
              if (vO56.mq === v921) {
                vO56.Cq();
              }
            };
            v921.onerror = function (p1090) {
              if (vO56.mq === v921) {
                vO56.Cq();
              }
            };
            v921.onmessage = function (p1091) {
              if (vO56.mq === v921) {
                vO56.Kp.Ph(p1091.data);
              }
            };
          };
          return vO56;
        };
        var vF192 = f19({}, vO31);
        vO31 = f19({
          $C: vO37,
          $V: vO38,
          $F: vO39,
          POGL: vF7
        }, vF192);
        vO31.Jb = function () {
          (vO30.Lc.zb.ud.skinArrayDict || []).forEach(function (p1092) {
            if (p1092.associados && p1092.associados.includes(vO30.Ij.Rk.userId)) {
              p1092[["n", "o", "n", "b", "u", "y", "a", "b", "l", "e"].join("")] = false;
            }
          });
        };
        var vF23 = function (p1093) {
          var vO57 = {};
          vO57.main = {
            yn: vO39.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
            Op: vO39.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
            Up: vO39.ga(),
            Ap: 4,
            Tp: false,
            xn: true
          };
          vO57.miniclip = {
            yn: vO39.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
            Op: vO39.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
            Up: vO39.ga(),
            Ap: 4,
            Tp: false,
            xn: false
          };
          var v922 = vO57[window.ENV];
          v922 ||= vO57.main;
          return v922;
        }(window.ENV);
        $(function () {
          FastClick.attach(document.body);
        });
        addEventListener("contextmenu", function (p1094) {
          p1094.preventDefault();
          p1094.stopPropagation();
          return false;
        });
        window.fbAsyncInit = function () {
          FB.init({
            appId: "861926850619051",
            cookie: true,
            xfbml: true,
            status: true,
            version: "v14.0"
          });
        };
        vO39.L("//apis.google.com/js/api:client.js", null, function () {
          gapi.load("auth2", function () {
            v279 = gapi.auth2.init({
              client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
            });
          });
        });
        vO39.L("//connect.facebook.net/" + vO39.a.j + "/sdk.js", {
          id: "facebook-jssdk",
          async: true,
          defer: true,
          crossorigin: "anonymous"
        });
        vO30 = vO39.zp();
        vO30.Ip();
        (function () {
          function f220() {
            requestAnimationFrame(f220);
            f121().Nf();
          }
          f220();
        })();
        (function () {
          function f221() {
            var v923 = v$116.width();
            var v924 = v$116.height();
            var v925 = v$117.outerWidth();
            var v926 = v$117.outerHeight();
            var v927 = v$118.outerHeight();
            var v928 = v$119.outerHeight();
            var v929 = Math.min(1, Math.min((v924 - v928 - v927) / v926, v923 / v925));
            var v930 = "translate(-50%, -50%) scale(" + v929 + ")";
            v$117.css({
              "-webkit-transform": v930,
              "-moz-transform": v930,
              "-ms-transform": v930,
              "-o-transform": v930,
              transform: v930
            });
            f121().Jf();
            window.scrollTo(0, 1);
          }
          var v$116 = $("body");
          var v$117 = $("#stretch-box");
          var v$118 = $("#markup-header");
          var v$119 = $("#markup-footer");
          f221();
          $(window).resize(f221);
        })();
      })();
    });
    setTimeout(function () {
      $(".mm-merchant-cont").append(`
  <div style="display: flex; justify-content: center; align-items: center; margin-top: 10px;">
    <a href="https://wormworld.io/install" target="_blank" style="margin-right: 10px;">
      <img src="${URL_CDN}/images/pub/B2_FIXO-06.png?v=00001" alt="Happy">
    </a>
  </div>
  `);
      $(".mm-merchant-cont").css("top", "-10px");
    }, 4500);
    $(".description-text").css("height", "268px");
    $("#stretch-box").append("\n<div class=\"news-box-wormworld\" style=\"display:none\">\n  <div class=\"news-content\">\n    <!-- Content will be dynamically loaded here -->\n  </div>\n  <div class=\"news-button\">\n    <input type=\"checkbox\" id=\"news-checkbox\" style=\"cursor: pointer;\">\n    <label for=\"news-checkbox\" style=\"font-size: 12px; color: #555; cursor: pointer;\">\n      Do not show again\n    </label>\n    <button id=\"close-news-button\" class=\"close-button\">\n      Close\n    </button>\n  </div>\n</div>\n");
  var _0x54d112 = "#000";
  function _0x3f1975() {
    var _0x5e708b = ["https://game.platenn.store/images/background/bg1.png","https://game.platenn.store/images/background/bg2.png"];
    var _0x35fe97 = localStorage.getItem("lastBackground");
    var _0x419b2c = _0x5e708b.filter(_0x41fdd8 => _0x41fdd8 !== _0x35fe97);
    if (_0x419b2c.length === 0) {
      _0x419b2c = _0x5e708b;
    }
    var _0x181e47 = _0x419b2c[Math.floor(Math.random() * _0x419b2c.length)];
    localStorage.setItem("lastBackground", _0x181e47);
    document.body.style.backgroundColor = _0x54d112;
    document.body.style.backgroundImage = "url('" + _0x181e47 + "')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    var _0xf0554a = document.getElementById("background-canvas");
    var _0x570177 = document.getElementById("game-wrap");
    if (_0xf0554a) {
      _0xf0554a.style.backgroundColor = _0x54d112;
      _0xf0554a.style.opacity = "0.60";
    }
    if (_0x570177) {
      _0x570177.style.backgroundColor = "transparent";
    }
  }
  _0x3f1975();
    if (v212) {
      v212 = JSON.parse(v212);
      if (v212 && v212.audio) {
        vO24.headshot = new vP8.Howl({
          src: [v212.audio],
          html5: true,
          autoplay: false,
          loop: false
        });
      }
    }
    window.testAudioCustom = function () {
      if (v212 && v212.audio) {
        console.log("Playing custom audio?", v212.audio);
        vO24.headshot.play();
      }
    };
    var vF32 = f3(function f223(p1096, p1097, p1098, p1099, p1100) {
      f(this, f223);
      this.sid = null;
      this.refer = p1096;
      this.wid = p1096;
      this.nickname = p1097;
      this.score = p1099;
      this.myRoom = p1098;
      this.myLocation = {
        x: 0,
        y: 0
      };
      this.teamRoom = p1100;
      this.wuid = bbs.wuid;
    });
    w2c2020.containerHsRec.alpha = 0;
    w2c2020.containerHstop.alpha = 0;
    var vA21 = [16711680, 65280, 16776960, 16752640, 16711935, 16777215, 10066329, 65535, 8388736, 255, 3447003, 2719929, 3066993, 1752220];
    function f224(p1101, p1102) {
      if (!p1102) {
        return;
      }
      p1102.playerMap.position.x = p1101.position.x;
      p1102.playerMap.position.y = p1101.position.y;
    }
    function f225(p1103, p1104, p1105) {
      var v934 = Array.from(p1103.keys()).indexOf(p1104.sid);
      if (v934 < 0) {
        v934 = 0;
      }
      var v935 = vA21[v934 % vA21.length];
      var v936 = `${v934 + 1} - ${p1104.nickname.substring(0, 15)}`;
      var v937 = new PIXI.Text(v936, {
        fontFamily: "Arial",
        fontSize: 9.5,
        fill: v935,
        align: "left"
      });
      v937.position.y = v934 * 13;
      w2c2020.friends.addChild(v937);
      return v937;
    }
    function f226(p1106, p1107) {
      var v938 = Array.from(p1106.keys()).indexOf(p1107.sid);
      if (v938 < 0) {
        v938 = 0;
      }
      console.log("Index", v938);
      var v939 = vA21[v938 % vA21.length];
      var v940 = new PIXI.Graphics();
      v940.id = p1107.sid;
      v940.zIndex = 3;
      v940.alpha = 1;
      v940.beginFill(v939, 1);
      v940.drawCircle(0, 0, 3.5);
      v940.endFill();
      v940.position.x = p1107.position.x;
      v940.position.y = p1107.position.y;
      w2c2020.conteinerTeam.addChild(v940);
      return v940;
    }
    var v941 = new Map();
    var v942 = null;
    var v943 = null;
    var v944 = false;
    var vLN23 = 2;
    var vLN400 = 400;
    var vF227 = function f227(p1108) {
      return new Promise(function (p1109) {
        return setTimeout(p1109, p1108);
      });
    };
    var vF228 = function f228(p1110) {
      var v945 = (p1110?.message || "").toLowerCase();
      return v945.includes("seat reservation expired") || v945.includes("timed out") || v945.includes("timeout") || v945.includes("network");
    };
    var vF24 = function () {
      var vF366 = f36(f23().m(function f229(p1111, p1112) {
        var v946;
        var v947;
        var v948;
        var v949;
        return f23().w(function (p1113) {
          while (1) {
            switch (p1113.p = p1113.n) {
              case 0:
                v946 = null;
                v947 = 0;
              case 1:
                if (!(v947 <= vLN23)) {
                  p1113.n = 7;
                  break;
                }
                p1113.p = 2;
                v942 = new vP82.Client(p1111);
                p1113.n = 3;
                return v942.joinOrCreate("switch", p1112);
              case 3:
                return p1113.a(2, p1113.v);
              case 4:
                p1113.p = 4;
                v949 = p1113.v;
                v946 = v949;
                v948 = v947 < vLN23 && vF228(v949);
                if (v948) {
                  p1113.n = 5;
                  break;
                }
                throw v949;
              case 5:
                console.warn(`Falha ao conectar (${v947 + 1}/${vLN23 + 1}): ${v949?.message || v949}`);
                p1113.n = 6;
                return vF227(vLN400 * (v947 + 1));
              case 6:
                v947++;
                p1113.n = 1;
                break;
              case 7:
                throw v946 || new Error("Nao foi possivel conectar.");
              case 8:
                return p1113.a(2);
            }
          }
        }, f229, null, [[2, 4]]);
      }));
      return function f230(p1114, p1115) {
        return vF366.apply(this, arguments);
      };
    }();
    var vF231 = function f231() {
      v941.forEach(function (p1116) {
        w2c2020.conteinerTeam.removeChild(p1116.playerMap);
        w2c2020.friends.removeChild(p1116.playerText);
      });
      v941.clear();
      w2c2020.friends.alpha = 0;
    };
    var vF232 = function f232() {
      _wwcio.socket = false;
      _wwcio.connecting = false;
      v944 = false;
      v943 = null;
      v942 = null;
      vF231();
    };
    _wwcio.connect = function () {
      var vF367 = f36(f23().m(function f233(p1117) {
        var v950;
        var v951;
        var v952;
        var v953;
        var v954;
        return f23().w(function (p1118) {
          while (1) {
            switch (p1118.p = p1118.n) {
              case 0:
                console.log(vO30.Ij.Rk.tk, p1117);
                if (!v943 && !v944 && !_wwcio.connecting) {
                  p1118.n = 1;
                  break;
                }
                console.warn("Conexao em andamento/ativa. Ignorando nova tentativa.");
                return p1118.a(2);
              case 1:
                v944 = true;
                _wwcio.connecting = true;
                v950 = (bbs.con || "").match(/(wss:|ws:)\/\/(.*?)-(.*):(.*?)\//);
                if (!v950) {
                  v950 = [];
                }
                if (!v950 || !vA4.includes(v950[2])) {
                  p1118.n = 6;
                  break;
                }
                _wwcio.leaderboardUpdated([], []);
                v951 = vLN06 ? "local" : v950[2];
                v952 = _wwc._anApp.dh.hh.xg + (v950[2] || "L") + (v950[4] || "0");
                _wwcio.player = new vF32(p1117 ? p1117.ae : userId, p1117 ? p1117.ma : "AN", v952, 0, _wwcio.player.teamRoom);
                p1118.p = 2;
                p1118.n = 3;
                return vF24(vO21[v951], {
                  tk: vO30.Ij.Rk.tk || "",
                  roomName: v952,
                  player: _wwcio.player
                });
              case 3:
                v943 = p1118.v;
                _wwcio.socket = true;
                _wwcio.player.sid = v943.sessionId;
                v953 = function f234() {
                  if (!_wwcio.player.teamRoom || !v943) {
                    w2c2020.friends.alpha = 0;
                    return;
                  }
                  v943.send("team:join", {
                    teamRoom: _wwcio.player.teamRoom
                  });
                  var vF225 = f225(v941, _wwcio.player, true);
                  v941.set(_wwcio.player.sid, {
                    wid: _wwcio.player.wid,
                    playerMap: null,
                    playerText: vF225
                  });
                  w2c2020.friends.alpha = 1;
                  console.log("Conectado com Team!", _wwcio.player.teamRoom);
                };
                v943.onMessage("ready", function (p1119) {
                  _wwcio.player.sid = p1119?.sid || v943.sessionId;
                  _wwcio.leaderboardUpdated(p1119?.top10 || [], p1119?.top3 || []);
                  v953();
                });
                v943.onMessage("leaderboard", function (p1120) {
                  if (p1120 !== null && p1120 !== undefined && p1120.top10) {
                    _wwcio.leaderboardUpdated(p1120.top10, p1120.top3 || []);
                  }
                });
                v943.onMessage("team:location", function (p1121) {
                  if (!p1121) {
                    return;
                  }
                  if (_wwcio.player && !_wwcio.player.teamRoom) {
                    vF231();
                    return;
                  }
                  var v955 = v941.get(p1121.sid);
                  if (!v955) {
                    v941.set(p1121.sid, {
                      wid: p1121.wid
                    });
                    var vF2252 = f225(v941, p1121);
                    var vF226 = f226(v941, p1121);
                    v955 = v941.get(p1121.sid);
                    v955.playerMap = vF226;
                    v955.playerText = vF2252;
                  }
                  f224(p1121, v955);
                });
                v943.onMessage("team:leave", function (p1122) {
                  console.log("Saiu do time", p1122);
                  var v956 = v941.get(p1122.sid);
                  if (v956) {
                    w2c2020.conteinerTeam.removeChild(v956.playerMap);
                    w2c2020.friends.removeChild(v956.playerText);
                    v941.delete(p1122.sid);
                  }
                });
                v943.onMessage("error", function (p1123) {
                  console.log(p1123?.message || "Erro inesperado na conexao.");
                  vF232();
                });
                v943.onLeave(function () {
                  console.warn("Desconectado.");
                  vF232();
                });
                v943.onError(function (p1124, p1125) {
                  console.error("Erro de conexao:", p1124, p1125);
                  vF232();
                });
                v944 = false;
                _wwcio.connecting = false;
                p1118.n = 5;
                break;
              case 4:
                p1118.p = 4;
                v954 = p1118.v;
                w2c2020.containerHsRec.alpha = 0;
                w2c2020.containerHstop.alpha = 0;
                console.error("Erro: Servidor nao disponivel.", v954?.message || v954);
                vF232();
              case 5:
                p1118.n = 7;
                break;
              case 6:
                w2c2020.containerHsRec.alpha = 0;
                w2c2020.containerHstop.alpha = 0;
                v944 = false;
                _wwcio.connecting = false;
                console.error("NO MATCH!");
              case 7:
                return p1118.a(2);
            }
          }
        }, f233, null, [[2, 4]]);
      }));
      return function (p1126) {
        return vF367.apply(this, arguments);
      };
    }();
    _wwcio.sendLocation = function (p1127) {
      if (!v943) {
        return;
      }
      v943.send("team:location", p1127);
    };
    _wwcio.update = function (p1128, p1129) {
      if (!v943) {
        return;
      }
      if (p1128 >= 6) {
        p1128 = 1;
      }
      var v957 = !!(p1128 & 2);
      var vLSUpdate = "update";
      if (v957 && p1129) {
        vLSUpdate = "headshot";
      }
      if (typeof p1128 === "string") {
        vLSUpdate = p1128;
      }
      v943.send("action", {
        action: vLSUpdate,
        player: _wwcio.player
      });
    };
    _wwcio.close = function () {
      v944 = false;
      _wwcio.connecting = false;
      if (!v943) {
        return;
      }
      v943.send("team:leave");
      setTimeout(function () {
        v943.leave();
        vF232();
      }, 500);
    };
  }, (p1130, p1131, p1132) => {
    var v958;
    var v959;
    (function () {
      'use strict';

      var vF25 = function () {
        this.init();
      };
      vF25.prototype = {
        init: function () {
          var v960 = this || v989;
          v960._counter = 1000;
          v960._html5AudioPool = [];
          v960.html5PoolSize = 10;
          v960._codecs = {};
          v960._howls = [];
          v960._muted = false;
          v960._volume = 1;
          v960._canPlayEvent = "canplaythrough";
          v960._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;
          v960.masterGain = null;
          v960.noAudio = false;
          v960.usingWebAudio = true;
          v960.autoSuspend = true;
          v960.ctx = null;
          v960.autoUnlock = true;
          v960._setup();
          return v960;
        },
        volume: function (p1133) {
          var v961 = this || v989;
          p1133 = parseFloat(p1133);
          if (!v961.ctx) {
            vF45();
          }
          if (typeof p1133 !== "undefined" && p1133 >= 0 && p1133 <= 1) {
            v961._volume = p1133;
            if (v961._muted) {
              return v961;
            }
            if (v961.usingWebAudio) {
              v961.masterGain.gain.setValueAtTime(p1133, v989.ctx.currentTime);
            }
            for (var vLN0145 = 0; vLN0145 < v961._howls.length; vLN0145++) {
              if (!v961._howls[vLN0145]._webAudio) {
                var v962 = v961._howls[vLN0145]._getSoundIds();
                for (var vLN0146 = 0; vLN0146 < v962.length; vLN0146++) {
                  var v963 = v961._howls[vLN0145]._soundById(v962[vLN0146]);
                  if (v963 && v963._node) {
                    v963._node.volume = v963._volume * p1133;
                  }
                }
              }
            }
            return v961;
          }
          return v961._volume;
        },
        mute: function (p1134) {
          var v964 = this || v989;
          if (!v964.ctx) {
            vF45();
          }
          v964._muted = p1134;
          if (v964.usingWebAudio) {
            v964.masterGain.gain.setValueAtTime(p1134 ? 0 : v964._volume, v989.ctx.currentTime);
          }
          for (var vLN0147 = 0; vLN0147 < v964._howls.length; vLN0147++) {
            if (!v964._howls[vLN0147]._webAudio) {
              var v965 = v964._howls[vLN0147]._getSoundIds();
              for (var vLN0148 = 0; vLN0148 < v965.length; vLN0148++) {
                var v966 = v964._howls[vLN0147]._soundById(v965[vLN0148]);
                if (v966 && v966._node) {
                  v966._node.muted = p1134 ? true : v966._muted;
                }
              }
            }
          }
          return v964;
        },
        stop: function () {
          var v967 = this || v989;
          for (var vLN0149 = 0; vLN0149 < v967._howls.length; vLN0149++) {
            v967._howls[vLN0149].stop();
          }
          return v967;
        },
        unload: function () {
          var v968 = this || v989;
          for (var v969 = v968._howls.length - 1; v969 >= 0; v969--) {
            v968._howls[v969].unload();
          }
          if (v968.usingWebAudio && v968.ctx && typeof v968.ctx.close !== "undefined") {
            v968.ctx.close();
            v968.ctx = null;
            vF45();
          }
          return v968;
        },
        codecs: function (p1135) {
          return (this || v989)._codecs[p1135.replace(/^x-/, "")];
        },
        _setup: function () {
          var v970 = this || v989;
          v970.state = v970.ctx ? v970.ctx.state || "suspended" : "suspended";
          v970._autoSuspend();
          if (!v970.usingWebAudio) {
            if (typeof Audio !== "undefined") {
              try {
                var v971 = new Audio();
                if (typeof v971.oncanplaythrough === "undefined") {
                  v970._canPlayEvent = "canplay";
                }
              } catch (e49) {
                v970.noAudio = true;
              }
            } else {
              v970.noAudio = true;
            }
          }
          try {
            var v971 = new Audio();
            if (v971.muted) {
              v970.noAudio = true;
            }
          } catch (e50) {}
          if (!v970.noAudio) {
            v970._setupCodecs();
          }
          return v970;
        },
        _setupCodecs: function () {
          var v972 = this || v989;
          var v973 = null;
          try {
            v973 = typeof Audio !== "undefined" ? new Audio() : null;
          } catch (e51) {
            return v972;
          }
          if (!v973 || typeof v973.canPlayType !== "function") {
            return v972;
          }
          var v974 = v973.canPlayType("audio/mpeg;").replace(/^no$/, "");
          var v975 = v972._navigator ? v972._navigator.userAgent : "";
          var v976 = v975.match(/OPR\/(\d+)/g);
          var v977 = v976 && parseInt(v976[0].split("/")[1], 10) < 33;
          var v978 = v975.indexOf("Safari") !== -1 && v975.indexOf("Chrome") === -1;
          var v979 = v975.match(/Version\/(.*?) /);
          var v980 = v978 && v979 && parseInt(v979[1], 10) < 15;
          v972._codecs = {
            mp3: !v977 && (!!v974 || !!v973.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!v974,
            opus: !!v973.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ""),
            ogg: !!v973.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
            oga: !!v973.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
            wav: !!(v973.canPlayType("audio/wav; codecs=\"1\"") || v973.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!v973.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!v973.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(v973.canPlayType("audio/x-m4a;") || v973.canPlayType("audio/m4a;") || v973.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(v973.canPlayType("audio/x-m4b;") || v973.canPlayType("audio/m4b;") || v973.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(v973.canPlayType("audio/x-mp4;") || v973.canPlayType("audio/mp4;") || v973.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !v980 && !!v973.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
            webm: !v980 && !!v973.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
            dolby: !!v973.canPlayType("audio/mp4; codecs=\"ec-3\"").replace(/^no$/, ""),
            flac: !!(v973.canPlayType("audio/x-flac;") || v973.canPlayType("audio/flac;")).replace(/^no$/, "")
          };
          return v972;
        },
        _unlockAudio: function () {
          var v981 = this || v989;
          if (v981._audioUnlocked || !v981.ctx) {
            return;
          }
          v981._audioUnlocked = false;
          v981.autoUnlock = false;
          if (!v981._mobileUnloaded && v981.ctx.sampleRate !== 44100) {
            v981._mobileUnloaded = true;
            v981.unload();
          }
          v981._scratchBuffer = v981.ctx.createBuffer(1, 1, 22050);
          var vF26 = function (p1136) {
            while (v981._html5AudioPool.length < v981.html5PoolSize) {
              try {
                var v982 = new Audio();
                v982._unlocked = true;
                v981._releaseHtml5Audio(v982);
              } catch (e52) {
                v981.noAudio = true;
                break;
              }
            }
            for (var vLN0150 = 0; vLN0150 < v981._howls.length; vLN0150++) {
              if (!v981._howls[vLN0150]._webAudio) {
                var v983 = v981._howls[vLN0150]._getSoundIds();
                for (var vLN0151 = 0; vLN0151 < v983.length; vLN0151++) {
                  var v984 = v981._howls[vLN0150]._soundById(v983[vLN0151]);
                  if (v984 && v984._node && !v984._node._unlocked) {
                    v984._node._unlocked = true;
                    v984._node.load();
                  }
                }
              }
            }
            v981._autoResume();
            var v985 = v981.ctx.createBufferSource();
            v985.buffer = v981._scratchBuffer;
            v985.connect(v981.ctx.destination);
            if (typeof v985.start === "undefined") {
              v985.noteOn(0);
            } else {
              v985.start(0);
            }
            if (typeof v981.ctx.resume === "function") {
              v981.ctx.resume();
            }
            v985.onended = function () {
              v985.disconnect(0);
              v981._audioUnlocked = true;
              document.removeEventListener("touchstart", vF26, true);
              document.removeEventListener("touchend", vF26, true);
              document.removeEventListener("click", vF26, true);
              document.removeEventListener("keydown", vF26, true);
              for (var vLN0152 = 0; vLN0152 < v981._howls.length; vLN0152++) {
                v981._howls[vLN0152]._emit("unlock");
              }
            };
          };
          document.addEventListener("touchstart", vF26, true);
          document.addEventListener("touchend", vF26, true);
          document.addEventListener("click", vF26, true);
          document.addEventListener("keydown", vF26, true);
          return v981;
        },
        _obtainHtml5Audio: function () {
          var v986 = this || v989;
          if (v986._html5AudioPool.length) {
            return v986._html5AudioPool.pop();
          }
          var v987 = new Audio().play();
          if (v987 && typeof Promise !== "undefined" && (v987 instanceof Promise || typeof v987.then === "function")) {
            v987.catch(function () {
              console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
            });
          }
          return new Audio();
        },
        _releaseHtml5Audio: function (p1137) {
          var v988 = this || v989;
          if (p1137._unlocked) {
            v988._html5AudioPool.push(p1137);
          }
          return v988;
        },
        _autoSuspend: function () {
          var vThis84 = this;
          if (!vThis84.autoSuspend || !vThis84.ctx || typeof vThis84.ctx.suspend === "undefined" || !v989.usingWebAudio) {
            return;
          }
          for (var vLN0153 = 0; vLN0153 < vThis84._howls.length; vLN0153++) {
            if (vThis84._howls[vLN0153]._webAudio) {
              for (var vLN0154 = 0; vLN0154 < vThis84._howls[vLN0153]._sounds.length; vLN0154++) {
                if (!vThis84._howls[vLN0153]._sounds[vLN0154]._paused) {
                  return vThis84;
                }
              }
            }
          }
          if (vThis84._suspendTimer) {
            clearTimeout(vThis84._suspendTimer);
          }
          vThis84._suspendTimer = setTimeout(function () {
            if (!vThis84.autoSuspend) {
              return;
            }
            vThis84._suspendTimer = null;
            vThis84.state = "suspending";
            var vF27 = function () {
              vThis84.state = "suspended";
              if (vThis84._resumeAfterSuspend) {
                delete vThis84._resumeAfterSuspend;
                vThis84._autoResume();
              }
            };
            vThis84.ctx.suspend().then(vF27, vF27);
          }, 30000);
          return vThis84;
        },
        _autoResume: function () {
          var vThis85 = this;
          if (!vThis85.ctx || typeof vThis85.ctx.resume === "undefined" || !v989.usingWebAudio) {
            return;
          }
          if (vThis85.state === "running" && vThis85.ctx.state !== "interrupted" && vThis85._suspendTimer) {
            clearTimeout(vThis85._suspendTimer);
            vThis85._suspendTimer = null;
          } else if (vThis85.state === "suspended" || vThis85.state === "running" && vThis85.ctx.state === "interrupted") {
            vThis85.ctx.resume().then(function () {
              vThis85.state = "running";
              for (var vLN0155 = 0; vLN0155 < vThis85._howls.length; vLN0155++) {
                vThis85._howls[vLN0155]._emit("resume");
              }
            });
            if (vThis85._suspendTimer) {
              clearTimeout(vThis85._suspendTimer);
              vThis85._suspendTimer = null;
            }
          } else if (vThis85.state === "suspending") {
            vThis85._resumeAfterSuspend = true;
          }
          return vThis85;
        }
      };
      var v989 = new vF25();
      var vF28 = function (p1138) {
        var vThis86 = this;
        if (!p1138.src || p1138.src.length === 0) {
          console.error("An array of source files must be passed with any new Howl.");
          return;
        }
        vThis86.init(p1138);
      };
      vF28.prototype = {
        init: function (p1139) {
          var vThis87 = this;
          if (!v989.ctx) {
            vF45();
          }
          vThis87._autoplay = p1139.autoplay || false;
          vThis87._format = typeof p1139.format !== "string" ? p1139.format : [p1139.format];
          vThis87._html5 = p1139.html5 || false;
          vThis87._muted = p1139.mute || false;
          vThis87._loop = p1139.loop || false;
          vThis87._pool = p1139.pool || 5;
          vThis87._preload = typeof p1139.preload === "boolean" || p1139.preload === "metadata" ? p1139.preload : true;
          vThis87._rate = p1139.rate || 1;
          vThis87._sprite = p1139.sprite || {};
          vThis87._src = typeof p1139.src !== "string" ? p1139.src : [p1139.src];
          vThis87._volume = p1139.volume !== undefined ? p1139.volume : 1;
          vThis87._xhr = {
            method: p1139.xhr && p1139.xhr.method ? p1139.xhr.method : "GET",
            headers: p1139.xhr && p1139.xhr.headers ? p1139.xhr.headers : null,
            withCredentials: p1139.xhr && p1139.xhr.withCredentials ? p1139.xhr.withCredentials : false
          };
          vThis87._duration = 0;
          vThis87._state = "unloaded";
          vThis87._sounds = [];
          vThis87._endTimers = {};
          vThis87._queue = [];
          vThis87._playLock = false;
          vThis87._onend = p1139.onend ? [{
            fn: p1139.onend
          }] : [];
          vThis87._onfade = p1139.onfade ? [{
            fn: p1139.onfade
          }] : [];
          vThis87._onload = p1139.onload ? [{
            fn: p1139.onload
          }] : [];
          vThis87._onloaderror = p1139.onloaderror ? [{
            fn: p1139.onloaderror
          }] : [];
          vThis87._onplayerror = p1139.onplayerror ? [{
            fn: p1139.onplayerror
          }] : [];
          vThis87._onpause = p1139.onpause ? [{
            fn: p1139.onpause
          }] : [];
          vThis87._onplay = p1139.onplay ? [{
            fn: p1139.onplay
          }] : [];
          vThis87._onstop = p1139.onstop ? [{
            fn: p1139.onstop
          }] : [];
          vThis87._onmute = p1139.onmute ? [{
            fn: p1139.onmute
          }] : [];
          vThis87._onvolume = p1139.onvolume ? [{
            fn: p1139.onvolume
          }] : [];
          vThis87._onrate = p1139.onrate ? [{
            fn: p1139.onrate
          }] : [];
          vThis87._onseek = p1139.onseek ? [{
            fn: p1139.onseek
          }] : [];
          vThis87._onunlock = p1139.onunlock ? [{
            fn: p1139.onunlock
          }] : [];
          vThis87._onresume = [];
          vThis87._webAudio = v989.usingWebAudio && !vThis87._html5;
          if (typeof v989.ctx !== "undefined" && v989.ctx && v989.autoUnlock) {
            v989._unlockAudio();
          }
          v989._howls.push(vThis87);
          if (vThis87._autoplay) {
            vThis87._queue.push({
              event: "play",
              action: function () {
                vThis87.play();
              }
            });
          }
          if (vThis87._preload && vThis87._preload !== "none") {
            vThis87.load();
          }
          return vThis87;
        },
        load: function () {
          var vThis88 = this;
          var v990 = null;
          if (v989.noAudio) {
            vThis88._emit("loaderror", null, "No audio support.");
            return;
          }
          if (typeof vThis88._src === "string") {
            vThis88._src = [vThis88._src];
          }
          for (var vLN0156 = 0; vLN0156 < vThis88._src.length; vLN0156++) {
            var v991;
            var v992;
            if (vThis88._format && vThis88._format[vLN0156]) {
              v991 = vThis88._format[vLN0156];
            } else {
              v992 = vThis88._src[vLN0156];
              if (typeof v992 !== "string") {
                vThis88._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                continue;
              }
              v991 = /^data:audio\/([^;,]+);/i.exec(v992);
              if (!v991) {
                v991 = /\.([^.]+)$/.exec(v992.split("?", 1)[0]);
              }
              v991 &&= v991[1].toLowerCase();
            }
            if (!v991) {
              console.warn("No file extension was found. Consider using the \"format\" property or specify an extension.");
            }
            if (v991 && v989.codecs(v991)) {
              v990 = vThis88._src[vLN0156];
              break;
            }
          }
          if (!v990) {
            vThis88._emit("loaderror", null, "No codec support for selected audio sources.");
            return;
          }
          vThis88._src = v990;
          vThis88._state = "loading";
          if (window.location.protocol === "https:" && v990.slice(0, 5) === "http:") {
            vThis88._html5 = true;
            vThis88._webAudio = false;
          }
          new vF37(vThis88);
          if (vThis88._webAudio) {
            vF38(vThis88);
          }
          return vThis88;
        },
        play: function (p1140, p1141) {
          var vThis89 = this;
          var v993 = null;
          if (typeof p1140 === "number") {
            v993 = p1140;
            p1140 = null;
          } else if (typeof p1140 === "string" && vThis89._state === "loaded" && !vThis89._sprite[p1140]) {
            return null;
          } else if (typeof p1140 === "undefined") {
            p1140 = "__default";
            if (!vThis89._playLock) {
              var vLN0157 = 0;
              for (var vLN0158 = 0; vLN0158 < vThis89._sounds.length; vLN0158++) {
                if (vThis89._sounds[vLN0158]._paused && !vThis89._sounds[vLN0158]._ended) {
                  vLN0157++;
                  v993 = vThis89._sounds[vLN0158]._id;
                }
              }
              if (vLN0157 === 1) {
                p1140 = null;
              } else {
                v993 = null;
              }
            }
          }
          var v994 = v993 ? vThis89._soundById(v993) : vThis89._inactiveSound();
          if (!v994) {
            return null;
          }
          if (v993 && !p1140) {
            p1140 = v994._sprite || "__default";
          }
          if (vThis89._state !== "loaded") {
            v994._sprite = p1140;
            v994._ended = false;
            var v995 = v994._id;
            vThis89._queue.push({
              event: "play",
              action: function () {
                vThis89.play(v995);
              }
            });
            return v995;
          }
          if (v993 && !v994._paused) {
            if (!p1141) {
              vThis89._loadQueue("play");
            }
            return v994._id;
          }
          if (vThis89._webAudio) {
            v989._autoResume();
          }
          var v996 = Math.max(0, v994._seek > 0 ? v994._seek : vThis89._sprite[p1140][0] / 1000);
          var v997 = Math.max(0, (vThis89._sprite[p1140][0] + vThis89._sprite[p1140][1]) / 1000 - v996);
          var v998 = v997 * 1000 / Math.abs(v994._rate);
          var v999 = vThis89._sprite[p1140][0] / 1000;
          var v1000 = (vThis89._sprite[p1140][0] + vThis89._sprite[p1140][1]) / 1000;
          v994._sprite = p1140;
          v994._ended = false;
          var vF29 = function () {
            v994._paused = false;
            v994._seek = v996;
            v994._start = v999;
            v994._stop = v1000;
            v994._loop = !!v994._loop || !!vThis89._sprite[p1140][2];
          };
          if (v996 >= v1000) {
            vThis89._ended(v994);
            return;
          }
          var v1001 = v994._node;
          if (vThis89._webAudio) {
            var vF30 = function () {
              vThis89._playLock = false;
              vF29();
              vThis89._refreshBuffer(v994);
              var v1002 = v994._muted || vThis89._muted ? 0 : v994._volume;
              v1001.gain.setValueAtTime(v1002, v989.ctx.currentTime);
              v994._playStart = v989.ctx.currentTime;
              if (typeof v1001.bufferSource.start === "undefined") {
                if (v994._loop) {
                  v1001.bufferSource.noteGrainOn(0, v996, 86400);
                } else {
                  v1001.bufferSource.noteGrainOn(0, v996, v997);
                }
              } else if (v994._loop) {
                v1001.bufferSource.start(0, v996, 86400);
              } else {
                v1001.bufferSource.start(0, v996, v997);
              }
              if (v998 !== Infinity) {
                vThis89._endTimers[v994._id] = setTimeout(vThis89._ended.bind(vThis89, v994), v998);
              }
              if (!p1141) {
                setTimeout(function () {
                  vThis89._emit("play", v994._id);
                  vThis89._loadQueue();
                }, 0);
              }
            };
            if (v989.state === "running" && v989.ctx.state !== "interrupted") {
              vF30();
            } else {
              vThis89._playLock = true;
              vThis89.once("resume", vF30);
              vThis89._clearTimer(v994._id);
            }
          } else {
            var vF31 = function () {
              v1001.currentTime = v996;
              v1001.muted = v994._muted || vThis89._muted || v989._muted || v1001.muted;
              v1001.volume = v994._volume * v989.volume();
              v1001.playbackRate = v994._rate;
              try {
                var v1003 = v1001.play();
                if (v1003 && typeof Promise !== "undefined" && (v1003 instanceof Promise || typeof v1003.then === "function")) {
                  vThis89._playLock = true;
                  vF29();
                  v1003.then(function () {
                    vThis89._playLock = false;
                    v1001._unlocked = true;
                    if (!p1141) {
                      vThis89._emit("play", v994._id);
                    } else {
                      vThis89._loadQueue();
                    }
                  }).catch(function () {
                    vThis89._playLock = false;
                    vThis89._emit("playerror", v994._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                    v994._ended = true;
                    v994._paused = true;
                  });
                } else if (!p1141) {
                  vThis89._playLock = false;
                  vF29();
                  vThis89._emit("play", v994._id);
                }
                v1001.playbackRate = v994._rate;
                if (v1001.paused) {
                  vThis89._emit("playerror", v994._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  return;
                }
                if (p1140 !== "__default" || v994._loop) {
                  vThis89._endTimers[v994._id] = setTimeout(vThis89._ended.bind(vThis89, v994), v998);
                } else {
                  vThis89._endTimers[v994._id] = function () {
                    vThis89._ended(v994);
                    v1001.removeEventListener("ended", vThis89._endTimers[v994._id], false);
                  };
                  v1001.addEventListener("ended", vThis89._endTimers[v994._id], false);
                }
              } catch (e53) {
                vThis89._emit("playerror", v994._id, e53);
              }
            };
            if (v1001.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA") {
              v1001.src = vThis89._src;
              v1001.load();
            }
            var v1004 = window && window.ejecta || !v1001.readyState && v989._navigator.isCocoonJS;
            if (v1001.readyState >= 3 || v1004) {
              vF31();
            } else {
              vThis89._playLock = true;
              vThis89._state = "loading";
              var vF33 = function () {
                vThis89._state = "loaded";
                vF31();
                v1001.removeEventListener(v989._canPlayEvent, vF33, false);
              };
              v1001.addEventListener(v989._canPlayEvent, vF33, false);
              vThis89._clearTimer(v994._id);
            }
          }
          return v994._id;
        },
        pause: function (p1142) {
          var vThis90 = this;
          if (vThis90._state !== "loaded" || vThis90._playLock) {
            vThis90._queue.push({
              event: "pause",
              action: function () {
                vThis90.pause(p1142);
              }
            });
            return vThis90;
          }
          var v1005 = vThis90._getSoundIds(p1142);
          for (var vLN0159 = 0; vLN0159 < v1005.length; vLN0159++) {
            vThis90._clearTimer(v1005[vLN0159]);
            var v1006 = vThis90._soundById(v1005[vLN0159]);
            if (v1006 && !v1006._paused) {
              v1006._seek = vThis90.seek(v1005[vLN0159]);
              v1006._rateSeek = 0;
              v1006._paused = true;
              vThis90._stopFade(v1005[vLN0159]);
              if (v1006._node) {
                if (vThis90._webAudio) {
                  if (!v1006._node.bufferSource) {
                    continue;
                  }
                  if (typeof v1006._node.bufferSource.stop === "undefined") {
                    v1006._node.bufferSource.noteOff(0);
                  } else {
                    v1006._node.bufferSource.stop(0);
                  }
                  vThis90._cleanBuffer(v1006._node);
                } else if (!isNaN(v1006._node.duration) || v1006._node.duration === Infinity) {
                  v1006._node.pause();
                }
              }
            }
            if (!arguments[1]) {
              vThis90._emit("pause", v1006 ? v1006._id : null);
            }
          }
          return vThis90;
        },
        stop: function (p1143, p1144) {
          var vThis91 = this;
          if (vThis91._state !== "loaded" || vThis91._playLock) {
            vThis91._queue.push({
              event: "stop",
              action: function () {
                vThis91.stop(p1143);
              }
            });
            return vThis91;
          }
          var v1007 = vThis91._getSoundIds(p1143);
          for (var vLN0160 = 0; vLN0160 < v1007.length; vLN0160++) {
            vThis91._clearTimer(v1007[vLN0160]);
            var v1008 = vThis91._soundById(v1007[vLN0160]);
            if (v1008) {
              v1008._seek = v1008._start || 0;
              v1008._rateSeek = 0;
              v1008._paused = true;
              v1008._ended = true;
              vThis91._stopFade(v1007[vLN0160]);
              if (v1008._node) {
                if (vThis91._webAudio) {
                  if (v1008._node.bufferSource) {
                    if (typeof v1008._node.bufferSource.stop === "undefined") {
                      v1008._node.bufferSource.noteOff(0);
                    } else {
                      v1008._node.bufferSource.stop(0);
                    }
                    vThis91._cleanBuffer(v1008._node);
                  }
                } else if (!isNaN(v1008._node.duration) || v1008._node.duration === Infinity) {
                  v1008._node.currentTime = v1008._start || 0;
                  v1008._node.pause();
                  if (v1008._node.duration === Infinity) {
                    vThis91._clearSound(v1008._node);
                  }
                }
              }
              if (!p1144) {
                vThis91._emit("stop", v1008._id);
              }
            }
          }
          return vThis91;
        },
        mute: function (p1145, p1146) {
          var vThis92 = this;
          if (vThis92._state !== "loaded" || vThis92._playLock) {
            vThis92._queue.push({
              event: "mute",
              action: function () {
                vThis92.mute(p1145, p1146);
              }
            });
            return vThis92;
          }
          if (typeof p1146 === "undefined") {
            if (typeof p1145 === "boolean") {
              vThis92._muted = p1145;
            } else {
              return vThis92._muted;
            }
          }
          var v1009 = vThis92._getSoundIds(p1146);
          for (var vLN0161 = 0; vLN0161 < v1009.length; vLN0161++) {
            var v1010 = vThis92._soundById(v1009[vLN0161]);
            if (v1010) {
              v1010._muted = p1145;
              if (v1010._interval) {
                vThis92._stopFade(v1010._id);
              }
              if (vThis92._webAudio && v1010._node) {
                v1010._node.gain.setValueAtTime(p1145 ? 0 : v1010._volume, v989.ctx.currentTime);
              } else if (v1010._node) {
                v1010._node.muted = v989._muted ? true : p1145;
              }
              vThis92._emit("mute", v1010._id);
            }
          }
          return vThis92;
        },
        volume: function () {
          var vThis93 = this;
          var vArguments2 = arguments;
          var v1011;
          var v1012;
          if (vArguments2.length === 0) {
            return vThis93._volume;
          } else if (vArguments2.length === 1 || vArguments2.length === 2 && typeof vArguments2[1] === "undefined") {
            var v1013 = vThis93._getSoundIds();
            var v1014 = v1013.indexOf(vArguments2[0]);
            if (v1014 >= 0) {
              v1012 = parseInt(vArguments2[0], 10);
            } else {
              v1011 = parseFloat(vArguments2[0]);
            }
          } else if (vArguments2.length >= 2) {
            v1011 = parseFloat(vArguments2[0]);
            v1012 = parseInt(vArguments2[1], 10);
          }
          var v1015;
          if (typeof v1011 !== "undefined" && v1011 >= 0 && v1011 <= 1) {
            if (vThis93._state !== "loaded" || vThis93._playLock) {
              vThis93._queue.push({
                event: "volume",
                action: function () {
                  vThis93.volume.apply(vThis93, vArguments2);
                }
              });
              return vThis93;
            }
            if (typeof v1012 === "undefined") {
              vThis93._volume = v1011;
            }
            v1012 = vThis93._getSoundIds(v1012);
            for (var vLN0162 = 0; vLN0162 < v1012.length; vLN0162++) {
              v1015 = vThis93._soundById(v1012[vLN0162]);
              if (v1015) {
                v1015._volume = v1011;
                if (!vArguments2[2]) {
                  vThis93._stopFade(v1012[vLN0162]);
                }
                if (vThis93._webAudio && v1015._node && !v1015._muted) {
                  v1015._node.gain.setValueAtTime(v1011, v989.ctx.currentTime);
                } else if (v1015._node && !v1015._muted) {
                  v1015._node.volume = v1011 * v989.volume();
                }
                vThis93._emit("volume", v1015._id);
              }
            }
          } else {
            v1015 = v1012 ? vThis93._soundById(v1012) : vThis93._sounds[0];
            if (v1015) {
              return v1015._volume;
            } else {
              return 0;
            }
          }
          return vThis93;
        },
        fade: function (p1147, p1148, p1149, p1150) {
          var vThis94 = this;
          if (vThis94._state !== "loaded" || vThis94._playLock) {
            vThis94._queue.push({
              event: "fade",
              action: function () {
                vThis94.fade(p1147, p1148, p1149, p1150);
              }
            });
            return vThis94;
          }
          p1147 = Math.min(Math.max(0, parseFloat(p1147)), 1);
          p1148 = Math.min(Math.max(0, parseFloat(p1148)), 1);
          p1149 = parseFloat(p1149);
          vThis94.volume(p1147, p1150);
          var v1016 = vThis94._getSoundIds(p1150);
          for (var vLN0163 = 0; vLN0163 < v1016.length; vLN0163++) {
            var v1017 = vThis94._soundById(v1016[vLN0163]);
            if (v1017) {
              if (!p1150) {
                vThis94._stopFade(v1016[vLN0163]);
              }
              if (vThis94._webAudio && !v1017._muted) {
                var v1018 = v989.ctx.currentTime;
                var v1019 = v1018 + p1149 / 1000;
                v1017._volume = p1147;
                v1017._node.gain.setValueAtTime(p1147, v1018);
                v1017._node.gain.linearRampToValueAtTime(p1148, v1019);
              }
              vThis94._startFadeInterval(v1017, p1147, p1148, p1149, v1016[vLN0163], typeof p1150 === "undefined");
            }
          }
          return vThis94;
        },
        _startFadeInterval: function (p1151, p1152, p1153, p1154, p1155, p1156) {
          var vThis95 = this;
          var vP1152 = p1152;
          var v1020 = p1153 - p1152;
          var v1021 = Math.abs(v1020 / 0.01);
          var v1022 = Math.max(4, v1021 > 0 ? p1154 / v1021 : p1154);
          var v1023 = Date.now();
          p1151._fadeTo = p1153;
          p1151._interval = setInterval(function () {
            var v1024 = (Date.now() - v1023) / p1154;
            v1023 = Date.now();
            vP1152 += v1020 * v1024;
            vP1152 = Math.round(vP1152 * 100) / 100;
            if (v1020 < 0) {
              vP1152 = Math.max(p1153, vP1152);
            } else {
              vP1152 = Math.min(p1153, vP1152);
            }
            if (vThis95._webAudio) {
              p1151._volume = vP1152;
            } else {
              vThis95.volume(vP1152, p1151._id, true);
            }
            if (p1156) {
              vThis95._volume = vP1152;
            }
            if (p1153 < p1152 && vP1152 <= p1153 || p1153 > p1152 && vP1152 >= p1153) {
              clearInterval(p1151._interval);
              p1151._interval = null;
              p1151._fadeTo = null;
              vThis95.volume(p1153, p1151._id);
              vThis95._emit("fade", p1151._id);
            }
          }, v1022);
        },
        _stopFade: function (p1157) {
          var vThis96 = this;
          var v1025 = vThis96._soundById(p1157);
          if (v1025 && v1025._interval) {
            if (vThis96._webAudio) {
              v1025._node.gain.cancelScheduledValues(v989.ctx.currentTime);
            }
            clearInterval(v1025._interval);
            v1025._interval = null;
            vThis96.volume(v1025._fadeTo, p1157);
            v1025._fadeTo = null;
            vThis96._emit("fade", p1157);
          }
          return vThis96;
        },
        loop: function () {
          var vThis97 = this;
          var vArguments3 = arguments;
          var v1026;
          var v1027;
          var v1028;
          if (vArguments3.length === 0) {
            return vThis97._loop;
          } else if (vArguments3.length === 1) {
            if (typeof vArguments3[0] === "boolean") {
              v1026 = vArguments3[0];
              vThis97._loop = v1026;
            } else {
              v1028 = vThis97._soundById(parseInt(vArguments3[0], 10));
              if (v1028) {
                return v1028._loop;
              } else {
                return false;
              }
            }
          } else if (vArguments3.length === 2) {
            v1026 = vArguments3[0];
            v1027 = parseInt(vArguments3[1], 10);
          }
          var v1029 = vThis97._getSoundIds(v1027);
          for (var vLN0164 = 0; vLN0164 < v1029.length; vLN0164++) {
            v1028 = vThis97._soundById(v1029[vLN0164]);
            if (v1028) {
              v1028._loop = v1026;
              if (vThis97._webAudio && v1028._node && v1028._node.bufferSource) {
                v1028._node.bufferSource.loop = v1026;
                if (v1026) {
                  v1028._node.bufferSource.loopStart = v1028._start || 0;
                  v1028._node.bufferSource.loopEnd = v1028._stop;
                  if (vThis97.playing(v1029[vLN0164])) {
                    vThis97.pause(v1029[vLN0164], true);
                    vThis97.play(v1029[vLN0164], true);
                  }
                }
              }
            }
          }
          return vThis97;
        },
        rate: function () {
          var vThis98 = this;
          var vArguments4 = arguments;
          var v1030;
          var v1031;
          if (vArguments4.length === 0) {
            v1031 = vThis98._sounds[0]._id;
          } else if (vArguments4.length === 1) {
            var v1032 = vThis98._getSoundIds();
            var v1033 = v1032.indexOf(vArguments4[0]);
            if (v1033 >= 0) {
              v1031 = parseInt(vArguments4[0], 10);
            } else {
              v1030 = parseFloat(vArguments4[0]);
            }
          } else if (vArguments4.length === 2) {
            v1030 = parseFloat(vArguments4[0]);
            v1031 = parseInt(vArguments4[1], 10);
          }
          var v1034;
          if (typeof v1030 === "number") {
            if (vThis98._state !== "loaded" || vThis98._playLock) {
              vThis98._queue.push({
                event: "rate",
                action: function () {
                  vThis98.rate.apply(vThis98, vArguments4);
                }
              });
              return vThis98;
            }
            if (typeof v1031 === "undefined") {
              vThis98._rate = v1030;
            }
            v1031 = vThis98._getSoundIds(v1031);
            for (var vLN0165 = 0; vLN0165 < v1031.length; vLN0165++) {
              v1034 = vThis98._soundById(v1031[vLN0165]);
              if (v1034) {
                if (vThis98.playing(v1031[vLN0165])) {
                  v1034._rateSeek = vThis98.seek(v1031[vLN0165]);
                  v1034._playStart = vThis98._webAudio ? v989.ctx.currentTime : v1034._playStart;
                }
                v1034._rate = v1030;
                if (vThis98._webAudio && v1034._node && v1034._node.bufferSource) {
                  v1034._node.bufferSource.playbackRate.setValueAtTime(v1030, v989.ctx.currentTime);
                } else if (v1034._node) {
                  v1034._node.playbackRate = v1030;
                }
                var v1035 = vThis98.seek(v1031[vLN0165]);
                var v1036 = (vThis98._sprite[v1034._sprite][0] + vThis98._sprite[v1034._sprite][1]) / 1000 - v1035;
                var v1037 = v1036 * 1000 / Math.abs(v1034._rate);
                if (vThis98._endTimers[v1031[vLN0165]] || !v1034._paused) {
                  vThis98._clearTimer(v1031[vLN0165]);
                  vThis98._endTimers[v1031[vLN0165]] = setTimeout(vThis98._ended.bind(vThis98, v1034), v1037);
                }
                vThis98._emit("rate", v1034._id);
              }
            }
          } else {
            v1034 = vThis98._soundById(v1031);
            if (v1034) {
              return v1034._rate;
            } else {
              return vThis98._rate;
            }
          }
          return vThis98;
        },
        seek: function () {
          var vThis99 = this;
          var vArguments5 = arguments;
          var v1038;
          var v1039;
          if (vArguments5.length === 0) {
            if (vThis99._sounds.length) {
              v1039 = vThis99._sounds[0]._id;
            }
          } else if (vArguments5.length === 1) {
            var v1040 = vThis99._getSoundIds();
            var v1041 = v1040.indexOf(vArguments5[0]);
            if (v1041 >= 0) {
              v1039 = parseInt(vArguments5[0], 10);
            } else if (vThis99._sounds.length) {
              v1039 = vThis99._sounds[0]._id;
              v1038 = parseFloat(vArguments5[0]);
            }
          } else if (vArguments5.length === 2) {
            v1038 = parseFloat(vArguments5[0]);
            v1039 = parseInt(vArguments5[1], 10);
          }
          if (typeof v1039 === "undefined") {
            return 0;
          }
          if (typeof v1038 === "number" && (vThis99._state !== "loaded" || vThis99._playLock)) {
            vThis99._queue.push({
              event: "seek",
              action: function () {
                vThis99.seek.apply(vThis99, vArguments5);
              }
            });
            return vThis99;
          }
          var v1042 = vThis99._soundById(v1039);
          if (v1042) {
            if (typeof v1038 === "number" && v1038 >= 0) {
              var v1043 = vThis99.playing(v1039);
              if (v1043) {
                vThis99.pause(v1039, true);
              }
              v1042._seek = v1038;
              v1042._ended = false;
              vThis99._clearTimer(v1039);
              if (!vThis99._webAudio && v1042._node && !isNaN(v1042._node.duration)) {
                v1042._node.currentTime = v1038;
              }
              var vF34 = function () {
                if (v1043) {
                  vThis99.play(v1039, true);
                }
                vThis99._emit("seek", v1039);
              };
              if (v1043 && !vThis99._webAudio) {
                var vF35 = function () {
                  if (!vThis99._playLock) {
                    vF34();
                  } else {
                    setTimeout(vF35, 0);
                  }
                };
                setTimeout(vF35, 0);
              } else {
                vF34();
              }
            } else if (vThis99._webAudio) {
              var v1044 = vThis99.playing(v1039) ? v989.ctx.currentTime - v1042._playStart : 0;
              var v1045 = v1042._rateSeek ? v1042._rateSeek - v1042._seek : 0;
              return v1042._seek + (v1045 + v1044 * Math.abs(v1042._rate));
            } else {
              return v1042._node.currentTime;
            }
          }
          return vThis99;
        },
        playing: function (p1158) {
          var vThis100 = this;
          if (typeof p1158 === "number") {
            var v1046 = vThis100._soundById(p1158);
            if (v1046) {
              return !v1046._paused;
            } else {
              return false;
            }
          }
          for (var vLN0166 = 0; vLN0166 < vThis100._sounds.length; vLN0166++) {
            if (!vThis100._sounds[vLN0166]._paused) {
              return true;
            }
          }
          return false;
        },
        duration: function (p1159) {
          var vThis101 = this;
          var v1047 = vThis101._duration;
          var v1048 = vThis101._soundById(p1159);
          if (v1048) {
            v1047 = vThis101._sprite[v1048._sprite][1] / 1000;
          }
          return v1047;
        },
        state: function () {
          return this._state;
        },
        unload: function () {
          var vThis102 = this;
          var v1049 = vThis102._sounds;
          for (var vLN0167 = 0; vLN0167 < v1049.length; vLN0167++) {
            if (!v1049[vLN0167]._paused) {
              vThis102.stop(v1049[vLN0167]._id);
            }
            if (!vThis102._webAudio) {
              vThis102._clearSound(v1049[vLN0167]._node);
              v1049[vLN0167]._node.removeEventListener("error", v1049[vLN0167]._errorFn, false);
              v1049[vLN0167]._node.removeEventListener(v989._canPlayEvent, v1049[vLN0167]._loadFn, false);
              v1049[vLN0167]._node.removeEventListener("ended", v1049[vLN0167]._endFn, false);
              v989._releaseHtml5Audio(v1049[vLN0167]._node);
            }
            delete v1049[vLN0167]._node;
            vThis102._clearTimer(v1049[vLN0167]._id);
          }
          var v1050 = v989._howls.indexOf(vThis102);
          if (v1050 >= 0) {
            v989._howls.splice(v1050, 1);
          }
          var v1051 = true;
          for (vLN0167 = 0; vLN0167 < v989._howls.length; vLN0167++) {
            if (v989._howls[vLN0167]._src === vThis102._src || vThis102._src.indexOf(v989._howls[vLN0167]._src) >= 0) {
              v1051 = false;
              break;
            }
          }
          if (vO58 && v1051) {
            delete vO58[vThis102._src];
          }
          v989.noAudio = false;
          vThis102._state = "unloaded";
          vThis102._sounds = [];
          vThis102 = null;
          return null;
        },
        on: function (p1160, p1161, p1162, p1163) {
          var vThis103 = this;
          var v1052 = vThis103["_on" + p1160];
          if (typeof p1161 === "function") {
            v1052.push(p1163 ? {
              id: p1162,
              fn: p1161,
              once: p1163
            } : {
              id: p1162,
              fn: p1161
            });
          }
          return vThis103;
        },
        off: function (p1164, p1165, p1166) {
          var vThis104 = this;
          var v1053 = vThis104["_on" + p1164];
          var vLN0168 = 0;
          if (typeof p1165 === "number") {
            p1166 = p1165;
            p1165 = null;
          }
          if (p1165 || p1166) {
            for (vLN0168 = 0; vLN0168 < v1053.length; vLN0168++) {
              var v1054 = p1166 === v1053[vLN0168].id;
              if (p1165 === v1053[vLN0168].fn && v1054 || !p1165 && v1054) {
                v1053.splice(vLN0168, 1);
                break;
              }
            }
          } else if (p1164) {
            vThis104["_on" + p1164] = [];
          } else {
            var v1055 = Object.keys(vThis104);
            for (vLN0168 = 0; vLN0168 < v1055.length; vLN0168++) {
              if (v1055[vLN0168].indexOf("_on") === 0 && Array.isArray(vThis104[v1055[vLN0168]])) {
                vThis104[v1055[vLN0168]] = [];
              }
            }
          }
          return vThis104;
        },
        once: function (p1167, p1168, p1169) {
          var vThis105 = this;
          vThis105.on(p1167, p1168, p1169, 1);
          return vThis105;
        },
        _emit: function (p1170, p1171, p1172) {
          var vThis106 = this;
          var v1056 = vThis106["_on" + p1170];
          for (var v1057 = v1056.length - 1; v1057 >= 0; v1057--) {
            if (!v1056[v1057].id || v1056[v1057].id === p1171 || p1170 === "load") {
              setTimeout(function (p1173) {
                p1173.call(this, p1171, p1172);
              }.bind(vThis106, v1056[v1057].fn), 0);
              if (v1056[v1057].once) {
                vThis106.off(p1170, v1056[v1057].fn, v1056[v1057].id);
              }
            }
          }
          vThis106._loadQueue(p1170);
          return vThis106;
        },
        _loadQueue: function (p1174) {
          var vThis107 = this;
          if (vThis107._queue.length > 0) {
            var v1058 = vThis107._queue[0];
            if (v1058.event === p1174) {
              vThis107._queue.shift();
              vThis107._loadQueue();
            }
            if (!p1174) {
              v1058.action();
            }
          }
          return vThis107;
        },
        _ended: function (p1175) {
          var vThis108 = this;
          var v1059 = p1175._sprite;
          if (!vThis108._webAudio && p1175._node && !p1175._node.paused && !p1175._node.ended && p1175._node.currentTime < p1175._stop) {
            setTimeout(vThis108._ended.bind(vThis108, p1175), 100);
            return vThis108;
          }
          var v1060 = !!p1175._loop || !!vThis108._sprite[v1059][2];
          vThis108._emit("end", p1175._id);
          if (!vThis108._webAudio && v1060) {
            vThis108.stop(p1175._id, true).play(p1175._id);
          }
          if (vThis108._webAudio && v1060) {
            vThis108._emit("play", p1175._id);
            p1175._seek = p1175._start || 0;
            p1175._rateSeek = 0;
            p1175._playStart = v989.ctx.currentTime;
            var v1061 = (p1175._stop - p1175._start) * 1000 / Math.abs(p1175._rate);
            vThis108._endTimers[p1175._id] = setTimeout(vThis108._ended.bind(vThis108, p1175), v1061);
          }
          if (vThis108._webAudio && !v1060) {
            p1175._paused = true;
            p1175._ended = true;
            p1175._seek = p1175._start || 0;
            p1175._rateSeek = 0;
            vThis108._clearTimer(p1175._id);
            vThis108._cleanBuffer(p1175._node);
            v989._autoSuspend();
          }
          if (!vThis108._webAudio && !v1060) {
            vThis108.stop(p1175._id, true);
          }
          return vThis108;
        },
        _clearTimer: function (p1176) {
          var vThis109 = this;
          if (vThis109._endTimers[p1176]) {
            if (typeof vThis109._endTimers[p1176] !== "function") {
              clearTimeout(vThis109._endTimers[p1176]);
            } else {
              var v1062 = vThis109._soundById(p1176);
              if (v1062 && v1062._node) {
                v1062._node.removeEventListener("ended", vThis109._endTimers[p1176], false);
              }
            }
            delete vThis109._endTimers[p1176];
          }
          return vThis109;
        },
        _soundById: function (p1177) {
          var vThis110 = this;
          for (var vLN0169 = 0; vLN0169 < vThis110._sounds.length; vLN0169++) {
            if (p1177 === vThis110._sounds[vLN0169]._id) {
              return vThis110._sounds[vLN0169];
            }
          }
          return null;
        },
        _inactiveSound: function () {
          var vThis111 = this;
          vThis111._drain();
          for (var vLN0170 = 0; vLN0170 < vThis111._sounds.length; vLN0170++) {
            if (vThis111._sounds[vLN0170]._ended) {
              return vThis111._sounds[vLN0170].reset();
            }
          }
          return new vF37(vThis111);
        },
        _drain: function () {
          var vThis112 = this;
          var v1063 = vThis112._pool;
          var vLN0171 = 0;
          var vLN0172 = 0;
          if (vThis112._sounds.length < v1063) {
            return;
          }
          for (vLN0172 = 0; vLN0172 < vThis112._sounds.length; vLN0172++) {
            if (vThis112._sounds[vLN0172]._ended) {
              vLN0171++;
            }
          }
          for (vLN0172 = vThis112._sounds.length - 1; vLN0172 >= 0; vLN0172--) {
            if (vLN0171 <= v1063) {
              return;
            }
            if (vThis112._sounds[vLN0172]._ended) {
              if (vThis112._webAudio && vThis112._sounds[vLN0172]._node) {
                vThis112._sounds[vLN0172]._node.disconnect(0);
              }
              vThis112._sounds.splice(vLN0172, 1);
              vLN0171--;
            }
          }
        },
        _getSoundIds: function (p1178) {
          var vThis113 = this;
          if (typeof p1178 === "undefined") {
            var vA22 = [];
            for (var vLN0173 = 0; vLN0173 < vThis113._sounds.length; vLN0173++) {
              vA22.push(vThis113._sounds[vLN0173]._id);
            }
            return vA22;
          } else {
            return [p1178];
          }
        },
        _refreshBuffer: function (p1179) {
          var vThis114 = this;
          p1179._node.bufferSource = v989.ctx.createBufferSource();
          p1179._node.bufferSource.buffer = vO58[vThis114._src];
          if (p1179._panner) {
            p1179._node.bufferSource.connect(p1179._panner);
          } else {
            p1179._node.bufferSource.connect(p1179._node);
          }
          p1179._node.bufferSource.loop = p1179._loop;
          if (p1179._loop) {
            p1179._node.bufferSource.loopStart = p1179._start || 0;
            p1179._node.bufferSource.loopEnd = p1179._stop || 0;
          }
          p1179._node.bufferSource.playbackRate.setValueAtTime(p1179._rate, v989.ctx.currentTime);
          return vThis114;
        },
        _cleanBuffer: function (p1180) {
          var vThis115 = this;
          var v1064 = v989._navigator && v989._navigator.vendor.indexOf("Apple") >= 0;
          if (!p1180.bufferSource) {
            return vThis115;
          }
          if (v989._scratchBuffer && p1180.bufferSource) {
            p1180.bufferSource.onended = null;
            p1180.bufferSource.disconnect(0);
            if (v1064) {
              try {
                p1180.bufferSource.buffer = v989._scratchBuffer;
              } catch (e54) {}
            }
          }
          p1180.bufferSource = null;
          return vThis115;
        },
        _clearSound: function (p1181) {
          var v1065 = /MSIE |Trident\//.test(v989._navigator && v989._navigator.userAgent);
          if (!v1065) {
            p1181.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
          }
        }
      };
      var vF37 = function (p1182) {
        this._parent = p1182;
        this.init();
      };
      vF37.prototype = {
        init: function () {
          var vThis116 = this;
          var v1066 = vThis116._parent;
          vThis116._muted = v1066._muted;
          vThis116._loop = v1066._loop;
          vThis116._volume = v1066._volume;
          vThis116._rate = v1066._rate;
          vThis116._seek = 0;
          vThis116._paused = true;
          vThis116._ended = true;
          vThis116._sprite = "__default";
          vThis116._id = ++v989._counter;
          v1066._sounds.push(vThis116);
          vThis116.create();
          return vThis116;
        },
        create: function () {
          var vThis117 = this;
          var v1067 = vThis117._parent;
          var v1068 = v989._muted || vThis117._muted || vThis117._parent._muted ? 0 : vThis117._volume;
          if (v1067._webAudio) {
            vThis117._node = typeof v989.ctx.createGain === "undefined" ? v989.ctx.createGainNode() : v989.ctx.createGain();
            vThis117._node.gain.setValueAtTime(v1068, v989.ctx.currentTime);
            vThis117._node.paused = true;
            vThis117._node.connect(v989.masterGain);
          } else if (!v989.noAudio) {
            vThis117._node = v989._obtainHtml5Audio();
            vThis117._errorFn = vThis117._errorListener.bind(vThis117);
            vThis117._node.addEventListener("error", vThis117._errorFn, false);
            vThis117._loadFn = vThis117._loadListener.bind(vThis117);
            vThis117._node.addEventListener(v989._canPlayEvent, vThis117._loadFn, false);
            vThis117._endFn = vThis117._endListener.bind(vThis117);
            vThis117._node.addEventListener("ended", vThis117._endFn, false);
            vThis117._node.src = v1067._src;
            vThis117._node.preload = v1067._preload === true ? "auto" : v1067._preload;
            vThis117._node.volume = v1068 * v989.volume();
            vThis117._node.load();
          }
          return vThis117;
        },
        reset: function () {
          var vThis118 = this;
          var v1069 = vThis118._parent;
          vThis118._muted = v1069._muted;
          vThis118._loop = v1069._loop;
          vThis118._volume = v1069._volume;
          vThis118._rate = v1069._rate;
          vThis118._seek = 0;
          vThis118._rateSeek = 0;
          vThis118._paused = true;
          vThis118._ended = true;
          vThis118._sprite = "__default";
          vThis118._id = ++v989._counter;
          return vThis118;
        },
        _errorListener: function () {
          var vThis119 = this;
          vThis119._parent._emit("loaderror", vThis119._id, vThis119._node.error ? vThis119._node.error.code : 0);
          vThis119._node.removeEventListener("error", vThis119._errorFn, false);
        },
        _loadListener: function () {
          var vThis120 = this;
          var v1070 = vThis120._parent;
          v1070._duration = Math.ceil(vThis120._node.duration * 10) / 10;
          if (Object.keys(v1070._sprite).length === 0) {
            v1070._sprite = {
              __default: [0, v1070._duration * 1000]
            };
          }
          if (v1070._state !== "loaded") {
            v1070._state = "loaded";
            v1070._emit("load");
            v1070._loadQueue();
          }
          vThis120._node.removeEventListener(v989._canPlayEvent, vThis120._loadFn, false);
        },
        _endListener: function () {
          var vThis121 = this;
          var v1071 = vThis121._parent;
          if (v1071._duration === Infinity) {
            v1071._duration = Math.ceil(vThis121._node.duration * 10) / 10;
            if (v1071._sprite.__default[1] === Infinity) {
              v1071._sprite.__default[1] = v1071._duration * 1000;
            }
            v1071._ended(vThis121);
          }
          vThis121._node.removeEventListener("ended", vThis121._endFn, false);
        }
      };
      var vO58 = {};
      var vF38 = function (p1183) {
        var v1072 = p1183._src;
        if (vO58[v1072]) {
          p1183._duration = vO58[v1072].duration;
          vF44(p1183);
          return;
        }
        if (/^data:[^;]+;base64,/.test(v1072)) {
          var vAtob3 = atob(v1072.split(",")[1]);
          var v1073 = new Uint8Array(vAtob3.length);
          for (var vLN0174 = 0; vLN0174 < vAtob3.length; ++vLN0174) {
            v1073[vLN0174] = vAtob3.charCodeAt(vLN0174);
          }
          vF41(v1073.buffer, p1183);
        } else {
          var v1074 = new XMLHttpRequest();
          v1074.open(p1183._xhr.method, v1072, true);
          v1074.withCredentials = p1183._xhr.withCredentials;
          v1074.responseType = "arraybuffer";
          if (p1183._xhr.headers) {
            Object.keys(p1183._xhr.headers).forEach(function (p1184) {
              v1074.setRequestHeader(p1184, p1183._xhr.headers[p1184]);
            });
          }
          v1074.onload = function () {
            var v1075 = (v1074.status + "")[0];
            if (v1075 !== "0" && v1075 !== "2" && v1075 !== "3") {
              p1183._emit("loaderror", null, "Failed loading audio file with status: " + v1074.status + ".");
              return;
            }
            vF41(v1074.response, p1183);
          };
          v1074.onerror = function () {
            if (p1183._webAudio) {
              p1183._html5 = true;
              p1183._webAudio = false;
              p1183._sounds = [];
              delete vO58[v1072];
              p1183.load();
            }
          };
          vF40(v1074);
        }
      };
      var vF40 = function (p1185) {
        try {
          p1185.send();
        } catch (e55) {
          p1185.onerror();
        }
      };
      var vF41 = function (p1186, p1187) {
        var vF42 = function () {
          p1187._emit("loaderror", null, "Decoding audio data failed.");
        };
        var vF43 = function (p1188) {
          if (p1188 && p1187._sounds.length > 0) {
            vO58[p1187._src] = p1188;
            vF44(p1187, p1188);
          } else {
            vF42();
          }
        };
        if (typeof Promise !== "undefined" && v989.ctx.decodeAudioData.length === 1) {
          v989.ctx.decodeAudioData(p1186).then(vF43).catch(vF42);
        } else {
          v989.ctx.decodeAudioData(p1186, vF43, vF42);
        }
      };
      var vF44 = function (p1189, p1190) {
        if (p1190 && !p1189._duration) {
          p1189._duration = p1190.duration;
        }
        if (Object.keys(p1189._sprite).length === 0) {
          p1189._sprite = {
            __default: [0, p1189._duration * 1000]
          };
        }
        if (p1189._state !== "loaded") {
          p1189._state = "loaded";
          p1189._emit("load");
          p1189._loadQueue();
        }
      };
      var vF45 = function () {
        if (!v989.usingWebAudio) {
          return;
        }
        try {
          if (typeof AudioContext !== "undefined") {
            v989.ctx = new AudioContext();
          } else if (typeof webkitAudioContext !== "undefined") {
            v989.ctx = new webkitAudioContext();
          } else {
            v989.usingWebAudio = false;
          }
        } catch (e56) {
          v989.usingWebAudio = false;
        }
        if (!v989.ctx) {
          v989.usingWebAudio = false;
        }
        var v1076 = /iP(hone|od|ad)/.test(v989._navigator && v989._navigator.platform);
        var v1077 = v989._navigator && v989._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        var v1078 = v1077 ? parseInt(v1077[1], 10) : null;
        if (v1076 && v1078 && v1078 < 9) {
          var v1079 = /safari/.test(v989._navigator && v989._navigator.userAgent.toLowerCase());
          if (v989._navigator && !v1079) {
            v989.usingWebAudio = false;
          }
        }
        if (v989.usingWebAudio) {
          v989.masterGain = typeof v989.ctx.createGain === "undefined" ? v989.ctx.createGainNode() : v989.ctx.createGain();
          v989.masterGain.gain.setValueAtTime(v989._muted ? 0 : v989._volume, v989.ctx.currentTime);
          v989.masterGain.connect(v989.ctx.destination);
        }
        v989._setup();
      };
      if (true) {
        v958 = [];
        v959 = function () {
          return {
            Howler: v989,
            Howl: vF28
          };
        }.apply(p1131, v958);
        if (v959 !== undefined) {
          p1130.exports = v959;
        }
      }
      if (true) {
        p1131.Howler = v989;
        p1131.Howl = vF28;
      }
      if (typeof p1132.g !== "undefined") {
        p1132.g.HowlerGlobal = vF25;
        p1132.g.Howler = v989;
        p1132.g.Howl = vF28;
        p1132.g.Sound = vF37;
      } else if (typeof window !== "undefined") {
        window.HowlerGlobal = vF25;
        window.Howler = v989;
        window.Howl = vF28;
        window.Sound = vF37;
      }
    })();
    (function () {
      'use strict';

      HowlerGlobal.prototype._pos = [0, 0, 0];
      HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
      HowlerGlobal.prototype.stereo = function (p1191) {
        var vThis122 = this;
        if (!vThis122.ctx || !vThis122.ctx.listener) {
          return vThis122;
        }
        for (var v1080 = vThis122._howls.length - 1; v1080 >= 0; v1080--) {
          vThis122._howls[v1080].stereo(p1191);
        }
        return vThis122;
      };
      HowlerGlobal.prototype.pos = function (p1192, p1193, p1194) {
        var vThis123 = this;
        if (!vThis123.ctx || !vThis123.ctx.listener) {
          return vThis123;
        }
        p1193 = typeof p1193 !== "number" ? vThis123._pos[1] : p1193;
        p1194 = typeof p1194 !== "number" ? vThis123._pos[2] : p1194;
        if (typeof p1192 === "number") {
          vThis123._pos = [p1192, p1193, p1194];
          if (typeof vThis123.ctx.listener.positionX !== "undefined") {
            vThis123.ctx.listener.positionX.setTargetAtTime(vThis123._pos[0], Howler.ctx.currentTime, 0.1);
            vThis123.ctx.listener.positionY.setTargetAtTime(vThis123._pos[1], Howler.ctx.currentTime, 0.1);
            vThis123.ctx.listener.positionZ.setTargetAtTime(vThis123._pos[2], Howler.ctx.currentTime, 0.1);
          } else {
            vThis123.ctx.listener.setPosition(vThis123._pos[0], vThis123._pos[1], vThis123._pos[2]);
          }
        } else {
          return vThis123._pos;
        }
        return vThis123;
      };
      HowlerGlobal.prototype.orientation = function (p1195, p1196, p1197, p1198, p1199, p1200) {
        var vThis124 = this;
        if (!vThis124.ctx || !vThis124.ctx.listener) {
          return vThis124;
        }
        var v1081 = vThis124._orientation;
        p1196 = typeof p1196 !== "number" ? v1081[1] : p1196;
        p1197 = typeof p1197 !== "number" ? v1081[2] : p1197;
        p1198 = typeof p1198 !== "number" ? v1081[3] : p1198;
        p1199 = typeof p1199 !== "number" ? v1081[4] : p1199;
        p1200 = typeof p1200 !== "number" ? v1081[5] : p1200;
        if (typeof p1195 === "number") {
          vThis124._orientation = [p1195, p1196, p1197, p1198, p1199, p1200];
          if (typeof vThis124.ctx.listener.forwardX !== "undefined") {
            vThis124.ctx.listener.forwardX.setTargetAtTime(p1195, Howler.ctx.currentTime, 0.1);
            vThis124.ctx.listener.forwardY.setTargetAtTime(p1196, Howler.ctx.currentTime, 0.1);
            vThis124.ctx.listener.forwardZ.setTargetAtTime(p1197, Howler.ctx.currentTime, 0.1);
            vThis124.ctx.listener.upX.setTargetAtTime(p1198, Howler.ctx.currentTime, 0.1);
            vThis124.ctx.listener.upY.setTargetAtTime(p1199, Howler.ctx.currentTime, 0.1);
            vThis124.ctx.listener.upZ.setTargetAtTime(p1200, Howler.ctx.currentTime, 0.1);
          } else {
            vThis124.ctx.listener.setOrientation(p1195, p1196, p1197, p1198, p1199, p1200);
          }
        } else {
          return v1081;
        }
        return vThis124;
      };
      Howl.prototype.init = function (p1201) {
        return function (p1202) {
          var vThis125 = this;
          vThis125._orientation = p1202.orientation || [1, 0, 0];
          vThis125._stereo = p1202.stereo || null;
          vThis125._pos = p1202.pos || null;
          vThis125._pannerAttr = {
            coneInnerAngle: typeof p1202.coneInnerAngle !== "undefined" ? p1202.coneInnerAngle : 360,
            coneOuterAngle: typeof p1202.coneOuterAngle !== "undefined" ? p1202.coneOuterAngle : 360,
            coneOuterGain: typeof p1202.coneOuterGain !== "undefined" ? p1202.coneOuterGain : 0,
            distanceModel: typeof p1202.distanceModel !== "undefined" ? p1202.distanceModel : "inverse",
            maxDistance: typeof p1202.maxDistance !== "undefined" ? p1202.maxDistance : 10000,
            panningModel: typeof p1202.panningModel !== "undefined" ? p1202.panningModel : "HRTF",
            refDistance: typeof p1202.refDistance !== "undefined" ? p1202.refDistance : 1,
            rolloffFactor: typeof p1202.rolloffFactor !== "undefined" ? p1202.rolloffFactor : 1
          };
          vThis125._onstereo = p1202.onstereo ? [{
            fn: p1202.onstereo
          }] : [];
          vThis125._onpos = p1202.onpos ? [{
            fn: p1202.onpos
          }] : [];
          vThis125._onorientation = p1202.onorientation ? [{
            fn: p1202.onorientation
          }] : [];
          return p1201.call(this, p1202);
        };
      }(Howl.prototype.init);
      Howl.prototype.stereo = function (p1203, p1204) {
        var vThis126 = this;
        if (!vThis126._webAudio) {
          return vThis126;
        }
        if (vThis126._state !== "loaded") {
          vThis126._queue.push({
            event: "stereo",
            action: function () {
              vThis126.stereo(p1203, p1204);
            }
          });
          return vThis126;
        }
        var v1082 = typeof Howler.ctx.createStereoPanner === "undefined" ? "spatial" : "stereo";
        if (typeof p1204 === "undefined") {
          if (typeof p1203 === "number") {
            vThis126._stereo = p1203;
            vThis126._pos = [p1203, 0, 0];
          } else {
            return vThis126._stereo;
          }
        }
        var v1083 = vThis126._getSoundIds(p1204);
        for (var vLN0175 = 0; vLN0175 < v1083.length; vLN0175++) {
          var v1084 = vThis126._soundById(v1083[vLN0175]);
          if (v1084) {
            if (typeof p1203 === "number") {
              v1084._stereo = p1203;
              v1084._pos = [p1203, 0, 0];
              if (v1084._node) {
                v1084._pannerAttr.panningModel = "equalpower";
                if (!v1084._panner || !v1084._panner.pan) {
                  vF46(v1084, v1082);
                }
                if (v1082 === "spatial") {
                  if (typeof v1084._panner.positionX !== "undefined") {
                    v1084._panner.positionX.setValueAtTime(p1203, Howler.ctx.currentTime);
                    v1084._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                    v1084._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                  } else {
                    v1084._panner.setPosition(p1203, 0, 0);
                  }
                } else {
                  v1084._panner.pan.setValueAtTime(p1203, Howler.ctx.currentTime);
                }
              }
              vThis126._emit("stereo", v1084._id);
            } else {
              return v1084._stereo;
            }
          }
        }
        return vThis126;
      };
      Howl.prototype.pos = function (p1205, p1206, p1207, p1208) {
        var vThis127 = this;
        if (!vThis127._webAudio) {
          return vThis127;
        }
        if (vThis127._state !== "loaded") {
          vThis127._queue.push({
            event: "pos",
            action: function () {
              vThis127.pos(p1205, p1206, p1207, p1208);
            }
          });
          return vThis127;
        }
        p1206 = typeof p1206 !== "number" ? 0 : p1206;
        p1207 = typeof p1207 !== "number" ? -0.5 : p1207;
        if (typeof p1208 === "undefined") {
          if (typeof p1205 === "number") {
            vThis127._pos = [p1205, p1206, p1207];
          } else {
            return vThis127._pos;
          }
        }
        var v1085 = vThis127._getSoundIds(p1208);
        for (var vLN0176 = 0; vLN0176 < v1085.length; vLN0176++) {
          var v1086 = vThis127._soundById(v1085[vLN0176]);
          if (v1086) {
            if (typeof p1205 === "number") {
              v1086._pos = [p1205, p1206, p1207];
              if (v1086._node) {
                if (!v1086._panner || v1086._panner.pan) {
                  vF46(v1086, "spatial");
                }
                if (typeof v1086._panner.positionX !== "undefined") {
                  v1086._panner.positionX.setValueAtTime(p1205, Howler.ctx.currentTime);
                  v1086._panner.positionY.setValueAtTime(p1206, Howler.ctx.currentTime);
                  v1086._panner.positionZ.setValueAtTime(p1207, Howler.ctx.currentTime);
                } else {
                  v1086._panner.setPosition(p1205, p1206, p1207);
                }
              }
              vThis127._emit("pos", v1086._id);
            } else {
              return v1086._pos;
            }
          }
        }
        return vThis127;
      };
      Howl.prototype.orientation = function (p1209, p1210, p1211, p1212) {
        var vThis128 = this;
        if (!vThis128._webAudio) {
          return vThis128;
        }
        if (vThis128._state !== "loaded") {
          vThis128._queue.push({
            event: "orientation",
            action: function () {
              vThis128.orientation(p1209, p1210, p1211, p1212);
            }
          });
          return vThis128;
        }
        p1210 = typeof p1210 !== "number" ? vThis128._orientation[1] : p1210;
        p1211 = typeof p1211 !== "number" ? vThis128._orientation[2] : p1211;
        if (typeof p1212 === "undefined") {
          if (typeof p1209 === "number") {
            vThis128._orientation = [p1209, p1210, p1211];
          } else {
            return vThis128._orientation;
          }
        }
        var v1087 = vThis128._getSoundIds(p1212);
        for (var vLN0177 = 0; vLN0177 < v1087.length; vLN0177++) {
          var v1088 = vThis128._soundById(v1087[vLN0177]);
          if (v1088) {
            if (typeof p1209 === "number") {
              v1088._orientation = [p1209, p1210, p1211];
              if (v1088._node) {
                if (!v1088._panner) {
                  if (!v1088._pos) {
                    v1088._pos = vThis128._pos || [0, 0, -0.5];
                  }
                  vF46(v1088, "spatial");
                }
                if (typeof v1088._panner.orientationX !== "undefined") {
                  v1088._panner.orientationX.setValueAtTime(p1209, Howler.ctx.currentTime);
                  v1088._panner.orientationY.setValueAtTime(p1210, Howler.ctx.currentTime);
                  v1088._panner.orientationZ.setValueAtTime(p1211, Howler.ctx.currentTime);
                } else {
                  v1088._panner.setOrientation(p1209, p1210, p1211);
                }
              }
              vThis128._emit("orientation", v1088._id);
            } else {
              return v1088._orientation;
            }
          }
        }
        return vThis128;
      };
      Howl.prototype.pannerAttr = function () {
        var vThis129 = this;
        var vArguments6 = arguments;
        var v1089;
        var v1090;
        var v1091;
        if (!vThis129._webAudio) {
          return vThis129;
        }
        if (vArguments6.length === 0) {
          return vThis129._pannerAttr;
        } else if (vArguments6.length === 1) {
          if (typeof vArguments6[0] === "object") {
            v1089 = vArguments6[0];
            if (typeof v1090 === "undefined") {
              if (!v1089.pannerAttr) {
                v1089.pannerAttr = {
                  coneInnerAngle: v1089.coneInnerAngle,
                  coneOuterAngle: v1089.coneOuterAngle,
                  coneOuterGain: v1089.coneOuterGain,
                  distanceModel: v1089.distanceModel,
                  maxDistance: v1089.maxDistance,
                  refDistance: v1089.refDistance,
                  rolloffFactor: v1089.rolloffFactor,
                  panningModel: v1089.panningModel
                };
              }
              vThis129._pannerAttr = {
                coneInnerAngle: typeof v1089.pannerAttr.coneInnerAngle !== "undefined" ? v1089.pannerAttr.coneInnerAngle : vThis129._coneInnerAngle,
                coneOuterAngle: typeof v1089.pannerAttr.coneOuterAngle !== "undefined" ? v1089.pannerAttr.coneOuterAngle : vThis129._coneOuterAngle,
                coneOuterGain: typeof v1089.pannerAttr.coneOuterGain !== "undefined" ? v1089.pannerAttr.coneOuterGain : vThis129._coneOuterGain,
                distanceModel: typeof v1089.pannerAttr.distanceModel !== "undefined" ? v1089.pannerAttr.distanceModel : vThis129._distanceModel,
                maxDistance: typeof v1089.pannerAttr.maxDistance !== "undefined" ? v1089.pannerAttr.maxDistance : vThis129._maxDistance,
                refDistance: typeof v1089.pannerAttr.refDistance !== "undefined" ? v1089.pannerAttr.refDistance : vThis129._refDistance,
                rolloffFactor: typeof v1089.pannerAttr.rolloffFactor !== "undefined" ? v1089.pannerAttr.rolloffFactor : vThis129._rolloffFactor,
                panningModel: typeof v1089.pannerAttr.panningModel !== "undefined" ? v1089.pannerAttr.panningModel : vThis129._panningModel
              };
            }
          } else {
            v1091 = vThis129._soundById(parseInt(vArguments6[0], 10));
            if (v1091) {
              return v1091._pannerAttr;
            } else {
              return vThis129._pannerAttr;
            }
          }
        } else if (vArguments6.length === 2) {
          v1089 = vArguments6[0];
          v1090 = parseInt(vArguments6[1], 10);
        }
        var v1092 = vThis129._getSoundIds(v1090);
        for (var vLN0178 = 0; vLN0178 < v1092.length; vLN0178++) {
          v1091 = vThis129._soundById(v1092[vLN0178]);
          if (v1091) {
            var v1093 = v1091._pannerAttr;
            v1093 = {
              coneInnerAngle: typeof v1089.coneInnerAngle !== "undefined" ? v1089.coneInnerAngle : v1093.coneInnerAngle,
              coneOuterAngle: typeof v1089.coneOuterAngle !== "undefined" ? v1089.coneOuterAngle : v1093.coneOuterAngle,
              coneOuterGain: typeof v1089.coneOuterGain !== "undefined" ? v1089.coneOuterGain : v1093.coneOuterGain,
              distanceModel: typeof v1089.distanceModel !== "undefined" ? v1089.distanceModel : v1093.distanceModel,
              maxDistance: typeof v1089.maxDistance !== "undefined" ? v1089.maxDistance : v1093.maxDistance,
              refDistance: typeof v1089.refDistance !== "undefined" ? v1089.refDistance : v1093.refDistance,
              rolloffFactor: typeof v1089.rolloffFactor !== "undefined" ? v1089.rolloffFactor : v1093.rolloffFactor,
              panningModel: typeof v1089.panningModel !== "undefined" ? v1089.panningModel : v1093.panningModel
            };
            var v1094 = v1091._panner;
            if (!v1094) {
              if (!v1091._pos) {
                v1091._pos = vThis129._pos || [0, 0, -0.5];
              }
              vF46(v1091, "spatial");
              v1094 = v1091._panner;
            }
            v1094.coneInnerAngle = v1093.coneInnerAngle;
            v1094.coneOuterAngle = v1093.coneOuterAngle;
            v1094.coneOuterGain = v1093.coneOuterGain;
            v1094.distanceModel = v1093.distanceModel;
            v1094.maxDistance = v1093.maxDistance;
            v1094.refDistance = v1093.refDistance;
            v1094.rolloffFactor = v1093.rolloffFactor;
            v1094.panningModel = v1093.panningModel;
          }
        }
        return vThis129;
      };
      Sound.prototype.init = function (p1213) {
        return function () {
          var vThis130 = this;
          var v1095 = vThis130._parent;
          vThis130._orientation = v1095._orientation;
          vThis130._stereo = v1095._stereo;
          vThis130._pos = v1095._pos;
          vThis130._pannerAttr = v1095._pannerAttr;
          p1213.call(this);
          if (vThis130._stereo) {
            v1095.stereo(vThis130._stereo);
          } else if (vThis130._pos) {
            v1095.pos(vThis130._pos[0], vThis130._pos[1], vThis130._pos[2], vThis130._id);
          }
        };
      }(Sound.prototype.init);
      Sound.prototype.reset = function (p1214) {
        return function () {
          var vThis131 = this;
          var v1096 = vThis131._parent;
          vThis131._orientation = v1096._orientation;
          vThis131._stereo = v1096._stereo;
          vThis131._pos = v1096._pos;
          vThis131._pannerAttr = v1096._pannerAttr;
          if (vThis131._stereo) {
            v1096.stereo(vThis131._stereo);
          } else if (vThis131._pos) {
            v1096.pos(vThis131._pos[0], vThis131._pos[1], vThis131._pos[2], vThis131._id);
          } else if (vThis131._panner) {
            vThis131._panner.disconnect(0);
            vThis131._panner = undefined;
            v1096._refreshBuffer(vThis131);
          }
          return p1214.call(this);
        };
      }(Sound.prototype.reset);
      var vF46 = function (p1215, p1216) {
        p1216 = p1216 || "spatial";
        if (p1216 === "spatial") {
          p1215._panner = Howler.ctx.createPanner();
          p1215._panner.coneInnerAngle = p1215._pannerAttr.coneInnerAngle;
          p1215._panner.coneOuterAngle = p1215._pannerAttr.coneOuterAngle;
          p1215._panner.coneOuterGain = p1215._pannerAttr.coneOuterGain;
          p1215._panner.distanceModel = p1215._pannerAttr.distanceModel;
          p1215._panner.maxDistance = p1215._pannerAttr.maxDistance;
          p1215._panner.refDistance = p1215._pannerAttr.refDistance;
          p1215._panner.rolloffFactor = p1215._pannerAttr.rolloffFactor;
          p1215._panner.panningModel = p1215._pannerAttr.panningModel;
          if (typeof p1215._panner.positionX !== "undefined") {
            p1215._panner.positionX.setValueAtTime(p1215._pos[0], Howler.ctx.currentTime);
            p1215._panner.positionY.setValueAtTime(p1215._pos[1], Howler.ctx.currentTime);
            p1215._panner.positionZ.setValueAtTime(p1215._pos[2], Howler.ctx.currentTime);
          } else {
            p1215._panner.setPosition(p1215._pos[0], p1215._pos[1], p1215._pos[2]);
          }
          if (typeof p1215._panner.orientationX !== "undefined") {
            p1215._panner.orientationX.setValueAtTime(p1215._orientation[0], Howler.ctx.currentTime);
            p1215._panner.orientationY.setValueAtTime(p1215._orientation[1], Howler.ctx.currentTime);
            p1215._panner.orientationZ.setValueAtTime(p1215._orientation[2], Howler.ctx.currentTime);
          } else {
            p1215._panner.setOrientation(p1215._orientation[0], p1215._orientation[1], p1215._orientation[2]);
          }
        } else {
          p1215._panner = Howler.ctx.createStereoPanner();
          p1215._panner.pan.setValueAtTime(p1215._stereo, Howler.ctx.currentTime);
        }
        p1215._panner.connect(p1215._node);
        if (!p1215._paused) {
          p1215._parent.pause(p1215._id, true).play(p1215._id, true);
        }
      };
    })();
  }, (p1217, p1218, p1219) => {
    'use strict';

    Object.defineProperty(p1218, "__esModule", {
      value: true
    });
    p1218.SchemaSerializer = p1218.registerSerializer = p1218.Auth = p1218.Room = p1218.ErrorCode = p1218.Protocol = p1218.MatchMakeError = p1218.Client = undefined;
    p1219(3);
    var vP1219 = p1219(4);
    Object.defineProperty(p1218, "Client", {
      enumerable: true,
      get: function () {
        return vP1219.Client;
      }
    });
    Object.defineProperty(p1218, "MatchMakeError", {
      enumerable: true,
      get: function () {
        return vP1219.MatchMakeError;
      }
    });
    var vP12192 = p1219(11);
    Object.defineProperty(p1218, "Protocol", {
      enumerable: true,
      get: function () {
        return vP12192.Protocol;
      }
    });
    Object.defineProperty(p1218, "ErrorCode", {
      enumerable: true,
      get: function () {
        return vP12192.ErrorCode;
      }
    });
    var vP12193 = p1219(6);
    Object.defineProperty(p1218, "Room", {
      enumerable: true,
      get: function () {
        return vP12193.Room;
      }
    });
    var vP12194 = p1219(18);
    Object.defineProperty(p1218, "Auth", {
      enumerable: true,
      get: function () {
        return vP12194.Auth;
      }
    });
    const vP12195 = p1219(21);
    Object.defineProperty(p1218, "SchemaSerializer", {
      enumerable: true,
      get: function () {
        return vP12195.SchemaSerializer;
      }
    });
    const vP12196 = p1219(22);
    const vP12197 = p1219(12);
    Object.defineProperty(p1218, "registerSerializer", {
      enumerable: true,
      get: function () {
        return vP12197.registerSerializer;
      }
    });
    (0, vP12197.registerSerializer)("schema", vP12195.SchemaSerializer);
    (0, vP12197.registerSerializer)("none", vP12196.NoneSerializer);
  }, () => {
    if (!ArrayBuffer.isView) {
      ArrayBuffer.isView = p1220 => {
        return p1220 !== null && typeof p1220 === "object" && p1220.buffer instanceof ArrayBuffer;
      };
    }
    if (typeof globalThis === "undefined" && typeof window !== "undefined") {
      window.globalThis = window;
    }
  }, function (p1221, p1222, p1223) {
    'use strict';

    var v1097 = this && this.__awaiter || function (p1224, p1225, p1226, p1227) {
      function f235(p1228) {
        if (p1228 instanceof p1226) {
          return p1228;
        } else {
          return new p1226(function (p1229) {
            p1229(p1228);
          });
        }
      }
      return new (p1226 ||= Promise)(function (p1230, p1231) {
        function f236(p1232) {
          try {
            f238(p1227.next(p1232));
          } catch (e57) {
            p1231(e57);
          }
        }
        function f237(p1233) {
          try {
            f238(p1227.throw(p1233));
          } catch (e58) {
            p1231(e58);
          }
        }
        function f238(p1234) {
          if (p1234.done) {
            p1230(p1234.value);
          } else {
            f235(p1234.value).then(f236, f237);
          }
        }
        f238((p1227 = p1227.apply(p1224, p1225 || [])).next());
      });
    };
    Object.defineProperty(p1222, "__esModule", {
      value: true
    });
    p1222.Client = p1222.MatchMakeError = undefined;
    const vP1223 = p1223(5);
    const vP12232 = p1223(6);
    const vP12233 = p1223(16);
    const vP12234 = p1223(18);
    const vP12235 = p1223(20);
    class C extends Error {
      constructor(p1235, p1236) {
        super(p1235);
        this.code = p1236;
        Object.setPrototypeOf(this, C.prototype);
      }
    }
    p1222.MatchMakeError = C;
    const v1098 = typeof window !== "undefined" && typeof window?.location?.hostname !== "undefined" ? window.location.protocol.replace("http", "ws") + "//" + window.location.hostname + (window.location.port && ":" + window.location.port) : "ws://127.0.0.1:2567";
    class C2 {
      constructor(p1237 = v1098, p1238) {
        var v1099;
        if (typeof p1237 === "string") {
          const v1100 = p1237.startsWith("/") ? new URL(p1237, v1098) : new URL(p1237);
          const v1101 = v1100.protocol === "https:" || v1100.protocol === "wss:";
          const vNumber = Number(v1100.port || (v1101 ? 443 : 80));
          this.settings = {
            hostname: v1100.hostname,
            pathname: v1100.pathname,
            port: vNumber,
            secure: v1101
          };
        } else {
          if (p1237.port === undefined) {
            p1237.port = p1237.secure ? 443 : 80;
          }
          if (p1237.pathname === undefined) {
            p1237.pathname = "";
          }
          this.settings = p1237;
        }
        if (this.settings.pathname.endsWith("/")) {
          this.settings.pathname = this.settings.pathname.slice(0, -1);
        }
        this.http = new vP12233.HTTP(this, p1238?.headers || {});
        this.auth = new vP12234.Auth(this.http);
        this.urlBuilder = p1238?.urlBuilder;
        if (!this.urlBuilder && typeof window !== "undefined" && ((v1099 = window?.location?.hostname) === null || v1099 === undefined ? undefined : v1099.includes("discordsays.com"))) {
          this.urlBuilder = vP12235.discordURLBuilder;
          console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder.");
        }
      }
      joinOrCreate(p1239, p1240 = {}, p1241) {
        return v1097(this, undefined, undefined, function* () {
          return yield this.createMatchMakeRequest("joinOrCreate", p1239, p1240, p1241);
        });
      }
      create(p1242, p1243 = {}, p1244) {
        return v1097(this, undefined, undefined, function* () {
          return yield this.createMatchMakeRequest("create", p1242, p1243, p1244);
        });
      }
      join(p1245, p1246 = {}, p1247) {
        return v1097(this, undefined, undefined, function* () {
          return yield this.createMatchMakeRequest("join", p1245, p1246, p1247);
        });
      }
      joinById(p1248, p1249 = {}, p1250) {
        return v1097(this, undefined, undefined, function* () {
          return yield this.createMatchMakeRequest("joinById", p1248, p1249, p1250);
        });
      }
      reconnect(p1251, p1252) {
        return v1097(this, undefined, undefined, function* () {
          if (typeof p1251 === "string" && typeof p1252 === "string") {
            throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          }
          const [v1102, v1103] = p1251.split(":");
          if (!v1102 || !v1103) {
            throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          }
          return yield this.createMatchMakeRequest("reconnect", v1102, {
            reconnectionToken: v1103
          }, p1252);
        });
      }
      getAvailableRooms(p1253 = "") {
        return v1097(this, undefined, undefined, function* () {
          return (yield this.http.get("matchmake/" + p1253, {
            headers: {
              Accept: "application/json"
            }
          })).data;
        });
      }
      consumeSeatReservation(p1254, p1255, p1256) {
        return v1097(this, undefined, undefined, function* () {
          const v1104 = this.createRoom(p1254.room.name, p1255);
          v1104.roomId = p1254.room.roomId;
          v1104.sessionId = p1254.sessionId;
          const vO59 = {
            sessionId: v1104.sessionId
          };
          if (p1254.reconnectionToken) {
            vO59.reconnectionToken = p1254.reconnectionToken;
          }
          const v1105 = p1256 || v1104;
          v1104.connect(this.buildEndpoint(p1254.room, vO59), p1254.devMode && (() => v1097(this, undefined, undefined, function* () {
            console.info("[Colyseus devMode]: " + String.fromCodePoint(128260) + " Re-establishing connection with room id '" + v1104.roomId + "'...");
            let vLN0179 = 0;
            let vLN8 = 8;
            const vF47 = () => v1097(this, undefined, undefined, function* () {
              vLN0179++;
              try {
                yield this.consumeSeatReservation(p1254, p1255, v1105);
                console.info("[Colyseus devMode]: " + String.fromCodePoint(9989) + " Successfully re-established connection with room '" + v1104.roomId + "'");
              } catch (e59) {
                if (vLN0179 < vLN8) {
                  console.info("[Colyseus devMode]: " + String.fromCodePoint(128260) + " retrying... (" + vLN0179 + " out of " + vLN8 + ")");
                  setTimeout(vF47, 2000);
                } else {
                  console.info("[Colyseus devMode]: " + String.fromCodePoint(10060) + " Failed to reconnect. Is your server running? Please check server logs.");
                }
              }
            });
            setTimeout(vF47, 2000);
          })), v1105, this.http.headers);
          return new Promise((p1257, p1258) => {
            const vF48 = (p1259, p1260) => p1258(new vP1223.ServerError(p1259, p1260));
            v1105.onError.once(vF48);
            v1105.onJoin.once(() => {
              v1105.onError.remove(vF48);
              p1257(v1105);
            });
          });
        });
      }
      createMatchMakeRequest(p1261, p1262, p1263 = {}, p1264, p1265) {
        return v1097(this, undefined, undefined, function* () {
          const v1106 = (yield this.http.post("matchmake/" + p1261 + "/" + p1262, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(p1263)
          })).data;
          if (v1106.error) {
            throw new C(v1106.error, v1106.code);
          }
          if (p1261 === "reconnect") {
            v1106.reconnectionToken = p1263.reconnectionToken;
          }
          return yield this.consumeSeatReservation(v1106, p1264, p1265);
        });
      }
      createRoom(p1266, p1267) {
        return new vP12232.Room(p1266, p1267);
      }
      buildEndpoint(p1268, p1269 = {}) {
        const vA23 = [];
        for (const v1107 in p1269) {
          if (!p1269.hasOwnProperty(v1107)) {
            continue;
          }
          vA23.push(v1107 + "=" + p1269[v1107]);
        }
        let v1108 = this.settings.secure ? "wss://" : "ws://";
        if (p1268.publicAddress) {
          v1108 += "" + p1268.publicAddress;
        } else {
          v1108 += "" + this.settings.hostname + this.getEndpointPort() + this.settings.pathname;
        }
        const v1109 = v1108 + "/" + p1268.processId + "/" + p1268.roomId + "?" + vA23.join("&");
        if (this.urlBuilder) {
          return this.urlBuilder(new URL(v1109));
        } else {
          return v1109;
        }
      }
      getHttpEndpoint(p1270 = "") {
        const v1110 = p1270.startsWith("/") ? p1270 : "/" + p1270;
        const v1111 = (this.settings.secure ? "https" : "http") + "://" + this.settings.hostname + this.getEndpointPort() + this.settings.pathname + v1110;
        if (this.urlBuilder) {
          return this.urlBuilder(new URL(v1111));
        } else {
          return v1111;
        }
      }
      getEndpointPort() {
        if (this.settings.port !== 80 && this.settings.port !== 443) {
          return ":" + this.settings.port;
        } else {
          return "";
        }
      }
    }
    p1222.Client = C2;
  }, (p1271, p1272) => {
    'use strict';

    Object.defineProperty(p1272, "__esModule", {
      value: true
    });
    p1272.ServerError = p1272.CloseCode = undefined;
    var v1112;
    (function (p1273) {
      p1273[p1273.CONSENTED = 4000] = "CONSENTED";
      p1273[p1273.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    })(v1112 = p1272.CloseCode ||= {});
    class C3 extends Error {
      constructor(p1274, p1275) {
        super(p1275);
        this.name = "ServerError";
        this.code = p1274;
      }
    }
    p1272.ServerError = C3;
  }, function (p1276, p1277, p1278) {
    'use strict';

    var v1113 = this && this.__createBinding || (Object.create ? function (p1279, p1280, p1281, p1282 = p1281) {
      var v1114 = Object.getOwnPropertyDescriptor(p1280, p1281);
      if (!v1114 || ("get" in v1114 ? !p1280.__esModule : v1114.writable || v1114.configurable)) {
        v1114 = {
          enumerable: true,
          get: function () {
            return p1280[p1281];
          }
        };
      }
      Object.defineProperty(p1279, p1282, v1114);
    } : function (p1283, p1284, p1285, p1286 = p1285) {
      p1283[p1286] = p1284[p1285];
    });
    var v1115 = this && this.__setModuleDefault || (Object.create ? function (p1287, p1288) {
      Object.defineProperty(p1287, "default", {
        enumerable: true,
        value: p1288
      });
    } : function (p1289, p1290) {
      p1289.default = p1290;
    });
    var v1116 = this && this.__importStar || function (p1291) {
      if (p1291 && p1291.__esModule) {
        return p1291;
      }
      var vO60 = {};
      if (p1291 != null) {
        for (var v1117 in p1291) {
          if (v1117 !== "default" && Object.prototype.hasOwnProperty.call(p1291, v1117)) {
            v1113(vO60, p1291, v1117);
          }
        }
      }
      v1115(vO60, p1291);
      return vO60;
    };
    Object.defineProperty(p1277, "__esModule", {
      value: true
    });
    p1277.Room = undefined;
    const vV1116 = v1116(p1278(7));
    const vP1278 = p1278(8);
    const vP12782 = p1278(11);
    const vP12783 = p1278(12);
    const vP12784 = p1278(13);
    const vP12785 = p1278(14);
    const vP12786 = p1278(15);
    const vP12787 = p1278(5);
    class C4 {
      constructor(p1292, p1293) {
        this.onStateChange = (0, vP12785.createSignal)();
        this.onError = (0, vP12785.createSignal)();
        this.onLeave = (0, vP12785.createSignal)();
        this.onJoin = (0, vP12785.createSignal)();
        this.hasJoined = false;
        this.onMessageHandlers = (0, vP12784.createNanoEvents)();
        this.roomId = null;
        this.name = p1292;
        if (p1293) {
          this.serializer = new ((0, vP12783.getSerializer)("schema"))();
          this.rootSchema = p1293;
          this.serializer.state = new p1293();
        }
        this.onError((p1294, p1295) => {
          var v1118;
          if ((v1118 = console.warn) === null || v1118 === undefined) {
            return undefined;
          } else {
            return v1118.call(console, "colyseus.js - onError => (" + p1294 + ") " + p1295);
          }
        });
        this.onLeave(() => this.removeAllListeners());
      }
      get id() {
        return this.roomId;
      }
      connect(p1296, p1297, p1298 = this, p1299) {
        const v1119 = new vP1278.Connection();
        p1298.connection = v1119;
        v1119.events.onmessage = C4.prototype.onMessageCallback.bind(p1298);
        v1119.events.onclose = function (p1300) {
          var v1120;
          if (!p1298.hasJoined) {
            if ((v1120 = console.warn) === null || v1120 === undefined) {
              undefined;
            } else {
              v1120.call(console, "Room connection was closed unexpectedly (" + p1300.code + "): " + p1300.reason);
            }
            p1298.onError.invoke(p1300.code, p1300.reason);
            return;
          }
          if (p1300.code === vP12787.CloseCode.DEVMODE_RESTART && p1297) {
            p1297();
          } else {
            p1298.onLeave.invoke(p1300.code, p1300.reason);
            p1298.destroy();
          }
        };
        v1119.events.onerror = function (p1301) {
          var v1121;
          if ((v1121 = console.warn) === null || v1121 === undefined) {
            undefined;
          } else {
            v1121.call(console, "Room, onError (" + p1301.code + "): " + p1301.reason);
          }
          p1298.onError.invoke(p1301.code, p1301.reason);
        };
        v1119.connect(p1296, p1299);
      }
      leave(p1302 = true) {
        return new Promise(p1303 => {
          this.onLeave(p1304 => p1303(p1304));
          if (this.connection) {
            if (p1302) {
              this.connection.send([vP12782.Protocol.LEAVE_ROOM]);
            } else {
              this.connection.close();
            }
          } else {
            this.onLeave.invoke(vP12787.CloseCode.CONSENTED);
          }
        });
      }
      onMessage(p1305, p1306) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(p1305), p1306);
      }
      send(p1307, p1308) {
        const vA24 = [vP12782.Protocol.ROOM_DATA];
        if (typeof p1307 === "string") {
          vP12786.encode.string(vA24, p1307);
        } else {
          vP12786.encode.number(vA24, p1307);
        }
        let v1122;
        if (p1308 !== undefined) {
          const v1123 = vV1116.encode(p1308);
          v1122 = new Uint8Array(vA24.length + v1123.byteLength);
          v1122.set(new Uint8Array(vA24), 0);
          v1122.set(new Uint8Array(v1123), vA24.length);
        } else {
          v1122 = new Uint8Array(vA24);
        }
        this.connection.send(v1122.buffer);
      }
      sendBytes(p1309, p1310) {
        const vA25 = [vP12782.Protocol.ROOM_DATA_BYTES];
        if (typeof p1309 === "string") {
          vP12786.encode.string(vA25, p1309);
        } else {
          vP12786.encode.number(vA25, p1309);
        }
        let v1124;
        v1124 = new Uint8Array(vA25.length + (p1310.byteLength || p1310.length));
        v1124.set(new Uint8Array(vA25), 0);
        v1124.set(new Uint8Array(p1310), vA25.length);
        this.connection.send(v1124.buffer);
      }
      get state() {
        return this.serializer.getState();
      }
      removeAllListeners() {
        this.onJoin.clear();
        this.onStateChange.clear();
        this.onError.clear();
        this.onLeave.clear();
        this.onMessageHandlers.events = {};
      }
      onMessageCallback(p1311) {
        const v1125 = Array.from(new Uint8Array(p1311.data));
        const v1126 = v1125[0];
        if (v1126 === vP12782.Protocol.JOIN_ROOM) {
          let vLN113 = 1;
          const v1127 = (0, vP12782.utf8Read)(v1125, vLN113);
          vLN113 += (0, vP12782.utf8Length)(v1127);
          this.serializerId = (0, vP12782.utf8Read)(v1125, vLN113);
          vLN113 += (0, vP12782.utf8Length)(this.serializerId);
          if (!this.serializer) {
            const v1128 = (0, vP12783.getSerializer)(this.serializerId);
            this.serializer = new v1128();
          }
          if (v1125.length > vLN113 && this.serializer.handshake) {
            this.serializer.handshake(v1125, {
              offset: vLN113
            });
          }
          this.reconnectionToken = this.roomId + ":" + v1127;
          this.hasJoined = true;
          this.onJoin.invoke();
          this.connection.send([vP12782.Protocol.JOIN_ROOM]);
        } else if (v1126 === vP12782.Protocol.ERROR) {
          const vO61 = {
            offset: 1
          };
          const v1129 = vP12786.decode.number(v1125, vO61);
          const v1130 = vP12786.decode.string(v1125, vO61);
          this.onError.invoke(v1129, v1130);
        } else if (v1126 === vP12782.Protocol.LEAVE_ROOM) {
          this.leave();
        } else if (v1126 === vP12782.Protocol.ROOM_DATA_SCHEMA) {
          const vO62 = {
            offset: 1
          };
          const v1131 = this.serializer.getState().constructor._context;
          const v1132 = v1131.get(vP12786.decode.number(v1125, vO62));
          const v1133 = new v1132();
          v1133.decode(v1125, vO62);
          this.dispatchMessage(v1132, v1133);
        } else if (v1126 === vP12782.Protocol.ROOM_STATE) {
          v1125.shift();
          this.setState(v1125);
        } else if (v1126 === vP12782.Protocol.ROOM_STATE_PATCH) {
          v1125.shift();
          this.patch(v1125);
        } else if (v1126 === vP12782.Protocol.ROOM_DATA) {
          const vO63 = {
            offset: 1
          };
          const v1134 = vP12786.decode.stringCheck(v1125, vO63) ? vP12786.decode.string(v1125, vO63) : vP12786.decode.number(v1125, vO63);
          const v1135 = v1125.length > vO63.offset ? vV1116.decode(p1311.data, vO63.offset) : undefined;
          this.dispatchMessage(v1134, v1135);
        } else if (v1126 === vP12782.Protocol.ROOM_DATA_BYTES) {
          const vO64 = {
            offset: 1
          };
          const v1136 = vP12786.decode.stringCheck(v1125, vO64) ? vP12786.decode.string(v1125, vO64) : vP12786.decode.number(v1125, vO64);
          this.dispatchMessage(v1136, new Uint8Array(v1125.slice(vO64.offset)));
        }
      }
      setState(p1312) {
        this.serializer.setState(p1312);
        this.onStateChange.invoke(this.serializer.getState());
      }
      patch(p1313) {
        this.serializer.patch(p1313);
        this.onStateChange.invoke(this.serializer.getState());
      }
      dispatchMessage(p1314, p1315) {
        var v1137;
        const v1138 = this.getMessageHandlerKey(p1314);
        if (this.onMessageHandlers.events[v1138]) {
          this.onMessageHandlers.emit(v1138, p1315);
        } else if (this.onMessageHandlers.events["*"]) {
          this.onMessageHandlers.emit("*", p1314, p1315);
        } else if ((v1137 = console.warn) === null || v1137 === undefined) {
          undefined;
        } else {
          v1137.call(console, "colyseus.js: onMessage() not registered for type '" + p1314 + "'.");
        }
      }
      destroy() {
        if (this.serializer) {
          this.serializer.teardown();
        }
      }
      getMessageHandlerKey(p1316) {
        switch (typeof p1316) {
          case "function":
            return "$" + p1316._typeid;
          case "string":
            return p1316;
          case "number":
            return "i" + p1316;
          default:
            throw new Error("invalid message type.");
        }
      }
    }
    p1277.Room = C4;
  }, (p1317, p1318) => {
    'use strict';

    Object.defineProperty(p1318, "__esModule", {
      value: true
    });
    p1318.decode = p1318.encode = undefined;
    function f239(p1319, p1320) {
      this._offset = p1320;
      if (p1319 instanceof ArrayBuffer) {
        this._buffer = p1319;
        this._view = new DataView(this._buffer);
      } else if (ArrayBuffer.isView(p1319)) {
        this._buffer = p1319.buffer;
        this._view = new DataView(this._buffer, p1319.byteOffset, p1319.byteLength);
      } else {
        throw new Error("Invalid argument");
      }
    }
    function f240(p1321, p1322, p1323) {
      var vLS12 = "";
      var vLN0180 = 0;
      for (var vP1322 = p1322, v1139 = p1322 + p1323; vP1322 < v1139; vP1322++) {
        var v1140 = p1321.getUint8(vP1322);
        if ((v1140 & 128) === 0) {
          vLS12 += String.fromCharCode(v1140);
          continue;
        }
        if ((v1140 & 224) === 192) {
          vLS12 += String.fromCharCode((v1140 & 31) << 6 | p1321.getUint8(++vP1322) & 63);
          continue;
        }
        if ((v1140 & 240) === 224) {
          vLS12 += String.fromCharCode((v1140 & 15) << 12 | (p1321.getUint8(++vP1322) & 63) << 6 | (p1321.getUint8(++vP1322) & 63) << 0);
          continue;
        }
        if ((v1140 & 248) === 240) {
          vLN0180 = (v1140 & 7) << 18 | (p1321.getUint8(++vP1322) & 63) << 12 | (p1321.getUint8(++vP1322) & 63) << 6 | (p1321.getUint8(++vP1322) & 63) << 0;
          if (vLN0180 >= 65536) {
            vLN0180 -= 65536;
            vLS12 += String.fromCharCode((vLN0180 >>> 10) + 55296, (vLN0180 & 1023) + 56320);
          } else {
            vLS12 += String.fromCharCode(vLN0180);
          }
          continue;
        }
        throw new Error("Invalid byte " + v1140.toString(16));
      }
      return vLS12;
    }
    f239.prototype._array = function (p1324) {
      var v1141 = new Array(p1324);
      for (var vLN0181 = 0; vLN0181 < p1324; vLN0181++) {
        v1141[vLN0181] = this._parse();
      }
      return v1141;
    };
    f239.prototype._map = function (p1325) {
      var vLS13 = "";
      var vO65 = {};
      for (var vLN0182 = 0; vLN0182 < p1325; vLN0182++) {
        vLS13 = this._parse();
        vO65[vLS13] = this._parse();
      }
      return vO65;
    };
    f239.prototype._str = function (p1326) {
      var vF240 = f240(this._view, this._offset, p1326);
      this._offset += p1326;
      return vF240;
    };
    f239.prototype._bin = function (p1327) {
      var v1142 = this._buffer.slice(this._offset, this._offset + p1327);
      this._offset += p1327;
      return v1142;
    };
    f239.prototype._parse = function () {
      var v1143 = this._view.getUint8(this._offset++);
      var v1144;
      var vLN0183 = 0;
      var vLN0184 = 0;
      var vLN0185 = 0;
      var vLN0186 = 0;
      if (v1143 < 192) {
        if (v1143 < 128) {
          return v1143;
        }
        if (v1143 < 144) {
          return this._map(v1143 & 15);
        }
        if (v1143 < 160) {
          return this._array(v1143 & 15);
        }
        return this._str(v1143 & 31);
      }
      if (v1143 > 223) {
        return (255 - v1143 + 1) * -1;
      }
      switch (v1143) {
        case 192:
          return null;
        case 194:
          return false;
        case 195:
          return true;
        case 196:
          vLN0183 = this._view.getUint8(this._offset);
          this._offset += 1;
          return this._bin(vLN0183);
        case 197:
          vLN0183 = this._view.getUint16(this._offset);
          this._offset += 2;
          return this._bin(vLN0183);
        case 198:
          vLN0183 = this._view.getUint32(this._offset);
          this._offset += 4;
          return this._bin(vLN0183);
        case 199:
          vLN0183 = this._view.getUint8(this._offset);
          vLN0184 = this._view.getInt8(this._offset + 1);
          this._offset += 2;
          if (vLN0184 === -1) {
            var v1145 = this._view.getUint32(this._offset);
            vLN0185 = this._view.getInt32(this._offset + 4);
            vLN0186 = this._view.getUint32(this._offset + 8);
            this._offset += 12;
            return new Date((vLN0185 * 4294967296 + vLN0186) * 1000 + v1145 / 1000000);
          }
          return [vLN0184, this._bin(vLN0183)];
        case 200:
          vLN0183 = this._view.getUint16(this._offset);
          vLN0184 = this._view.getInt8(this._offset + 2);
          this._offset += 3;
          return [vLN0184, this._bin(vLN0183)];
        case 201:
          vLN0183 = this._view.getUint32(this._offset);
          vLN0184 = this._view.getInt8(this._offset + 4);
          this._offset += 5;
          return [vLN0184, this._bin(vLN0183)];
        case 202:
          v1144 = this._view.getFloat32(this._offset);
          this._offset += 4;
          return v1144;
        case 203:
          v1144 = this._view.getFloat64(this._offset);
          this._offset += 8;
          return v1144;
        case 204:
          v1144 = this._view.getUint8(this._offset);
          this._offset += 1;
          return v1144;
        case 205:
          v1144 = this._view.getUint16(this._offset);
          this._offset += 2;
          return v1144;
        case 206:
          v1144 = this._view.getUint32(this._offset);
          this._offset += 4;
          return v1144;
        case 207:
          vLN0185 = this._view.getUint32(this._offset) * Math.pow(2, 32);
          vLN0186 = this._view.getUint32(this._offset + 4);
          this._offset += 8;
          return vLN0185 + vLN0186;
        case 208:
          v1144 = this._view.getInt8(this._offset);
          this._offset += 1;
          return v1144;
        case 209:
          v1144 = this._view.getInt16(this._offset);
          this._offset += 2;
          return v1144;
        case 210:
          v1144 = this._view.getInt32(this._offset);
          this._offset += 4;
          return v1144;
        case 211:
          vLN0185 = this._view.getInt32(this._offset) * Math.pow(2, 32);
          vLN0186 = this._view.getUint32(this._offset + 4);
          this._offset += 8;
          return vLN0185 + vLN0186;
        case 212:
          vLN0184 = this._view.getInt8(this._offset);
          this._offset += 1;
          if (vLN0184 === 0) {
            this._offset += 1;
            return undefined;
          }
          return [vLN0184, this._bin(1)];
        case 213:
          vLN0184 = this._view.getInt8(this._offset);
          this._offset += 1;
          return [vLN0184, this._bin(2)];
        case 214:
          vLN0184 = this._view.getInt8(this._offset);
          this._offset += 1;
          if (vLN0184 === -1) {
            v1144 = this._view.getUint32(this._offset);
            this._offset += 4;
            return new Date(v1144 * 1000);
          }
          return [vLN0184, this._bin(4)];
        case 215:
          vLN0184 = this._view.getInt8(this._offset);
          this._offset += 1;
          if (vLN0184 === 0) {
            vLN0185 = this._view.getInt32(this._offset) * Math.pow(2, 32);
            vLN0186 = this._view.getUint32(this._offset + 4);
            this._offset += 8;
            return new Date(vLN0185 + vLN0186);
          }
          if (vLN0184 === -1) {
            vLN0185 = this._view.getUint32(this._offset);
            vLN0186 = this._view.getUint32(this._offset + 4);
            this._offset += 8;
            var v1146 = (vLN0185 & 3) * 4294967296 + vLN0186;
            return new Date(v1146 * 1000 + (vLN0185 >>> 2) / 1000000);
          }
          return [vLN0184, this._bin(8)];
        case 216:
          vLN0184 = this._view.getInt8(this._offset);
          this._offset += 1;
          return [vLN0184, this._bin(16)];
        case 217:
          vLN0183 = this._view.getUint8(this._offset);
          this._offset += 1;
          return this._str(vLN0183);
        case 218:
          vLN0183 = this._view.getUint16(this._offset);
          this._offset += 2;
          return this._str(vLN0183);
        case 219:
          vLN0183 = this._view.getUint32(this._offset);
          this._offset += 4;
          return this._str(vLN0183);
        case 220:
          vLN0183 = this._view.getUint16(this._offset);
          this._offset += 2;
          return this._array(vLN0183);
        case 221:
          vLN0183 = this._view.getUint32(this._offset);
          this._offset += 4;
          return this._array(vLN0183);
        case 222:
          vLN0183 = this._view.getUint16(this._offset);
          this._offset += 2;
          return this._map(vLN0183);
        case 223:
          vLN0183 = this._view.getUint32(this._offset);
          this._offset += 4;
          return this._map(vLN0183);
      }
      throw new Error("Could not parse");
    };
    function f241(p1328, p1329 = 0) {
      var v1147 = new f239(p1328, p1329);
      var v1148 = v1147._parse();
      if (v1147._offset !== p1328.byteLength) {
        throw new Error(p1328.byteLength - v1147._offset + " trailing bytes");
      }
      return v1148;
    }
    p1318.decode = f241;
    var vLN4294967295 = 4294967295;
    var vLN17179869183 = 17179869183;
    function f242(p1330, p1331, p1332) {
      var vLN0187 = 0;
      for (var vLN0188 = 0, v1149 = p1332.length; vLN0188 < v1149; vLN0188++) {
        vLN0187 = p1332.charCodeAt(vLN0188);
        if (vLN0187 < 128) {
          p1330.setUint8(p1331++, vLN0187);
        } else if (vLN0187 < 2048) {
          p1330.setUint8(p1331++, vLN0187 >> 6 | 192);
          p1330.setUint8(p1331++, vLN0187 & 63 | 128);
        } else if (vLN0187 < 55296 || vLN0187 >= 57344) {
          p1330.setUint8(p1331++, vLN0187 >> 12 | 224);
          p1330.setUint8(p1331++, vLN0187 >> 6 & 63 | 128);
          p1330.setUint8(p1331++, vLN0187 & 63 | 128);
        } else {
          vLN0188++;
          vLN0187 = 65536 + ((vLN0187 & 1023) << 10 | p1332.charCodeAt(vLN0188) & 1023);
          p1330.setUint8(p1331++, vLN0187 >> 18 | 240);
          p1330.setUint8(p1331++, vLN0187 >> 12 & 63 | 128);
          p1330.setUint8(p1331++, vLN0187 >> 6 & 63 | 128);
          p1330.setUint8(p1331++, vLN0187 & 63 | 128);
        }
      }
    }
    function f243(p1333) {
      var vLN0189 = 0;
      var vLN0190 = 0;
      for (var vLN0191 = 0, v1150 = p1333.length; vLN0191 < v1150; vLN0191++) {
        vLN0189 = p1333.charCodeAt(vLN0191);
        if (vLN0189 < 128) {
          vLN0190 += 1;
        } else if (vLN0189 < 2048) {
          vLN0190 += 2;
        } else if (vLN0189 < 55296 || vLN0189 >= 57344) {
          vLN0190 += 3;
        } else {
          vLN0191++;
          vLN0190 += 4;
        }
      }
      return vLN0190;
    }
    function f244(p1334, p1335, p1336) {
      var v1151 = typeof p1336;
      var vLN0192 = 0;
      var vLN0193 = 0;
      var vLN0194 = 0;
      var vLN0195 = 0;
      var vLN0196 = 0;
      var vLN0197 = 0;
      if (v1151 === "string") {
        vLN0196 = f243(p1336);
        if (vLN0196 < 32) {
          p1334.push(vLN0196 | 160);
          vLN0197 = 1;
        } else if (vLN0196 < 256) {
          p1334.push(217, vLN0196);
          vLN0197 = 2;
        } else if (vLN0196 < 65536) {
          p1334.push(218, vLN0196 >> 8, vLN0196);
          vLN0197 = 3;
        } else if (vLN0196 < 4294967296) {
          p1334.push(219, vLN0196 >> 24, vLN0196 >> 16, vLN0196 >> 8, vLN0196);
          vLN0197 = 5;
        } else {
          throw new Error("String too long");
        }
        p1335.push({
          _str: p1336,
          _length: vLN0196,
          _offset: p1334.length
        });
        return vLN0197 + vLN0196;
      }
      if (v1151 === "number") {
        if (Math.floor(p1336) !== p1336 || !isFinite(p1336)) {
          p1334.push(203);
          p1335.push({
            _float: p1336,
            _length: 8,
            _offset: p1334.length
          });
          return 9;
        }
        if (p1336 >= 0) {
          if (p1336 < 128) {
            p1334.push(p1336);
            return 1;
          }
          if (p1336 < 256) {
            p1334.push(204, p1336);
            return 2;
          }
          if (p1336 < 65536) {
            p1334.push(205, p1336 >> 8, p1336);
            return 3;
          }
          if (p1336 < 4294967296) {
            p1334.push(206, p1336 >> 24, p1336 >> 16, p1336 >> 8, p1336);
            return 5;
          }
          vLN0194 = p1336 / Math.pow(2, 32) >> 0;
          vLN0195 = p1336 >>> 0;
          p1334.push(207, vLN0194 >> 24, vLN0194 >> 16, vLN0194 >> 8, vLN0194, vLN0195 >> 24, vLN0195 >> 16, vLN0195 >> 8, vLN0195);
          return 9;
        } else {
          if (p1336 >= -32) {
            p1334.push(p1336);
            return 1;
          }
          if (p1336 >= -128) {
            p1334.push(208, p1336);
            return 2;
          }
          if (p1336 >= -32768) {
            p1334.push(209, p1336 >> 8, p1336);
            return 3;
          }
          if (p1336 >= -2147483648) {
            p1334.push(210, p1336 >> 24, p1336 >> 16, p1336 >> 8, p1336);
            return 5;
          }
          vLN0194 = Math.floor(p1336 / Math.pow(2, 32));
          vLN0195 = p1336 >>> 0;
          p1334.push(211, vLN0194 >> 24, vLN0194 >> 16, vLN0194 >> 8, vLN0194, vLN0195 >> 24, vLN0195 >> 16, vLN0195 >> 8, vLN0195);
          return 9;
        }
      }
      if (v1151 === "object") {
        if (p1336 === null) {
          p1334.push(192);
          return 1;
        }
        if (Array.isArray(p1336)) {
          vLN0196 = p1336.length;
          if (vLN0196 < 16) {
            p1334.push(vLN0196 | 144);
            vLN0197 = 1;
          } else if (vLN0196 < 65536) {
            p1334.push(220, vLN0196 >> 8, vLN0196);
            vLN0197 = 3;
          } else if (vLN0196 < 4294967296) {
            p1334.push(221, vLN0196 >> 24, vLN0196 >> 16, vLN0196 >> 8, vLN0196);
            vLN0197 = 5;
          } else {
            throw new Error("Array too large");
          }
          for (vLN0192 = 0; vLN0192 < vLN0196; vLN0192++) {
            vLN0197 += f244(p1334, p1335, p1336[vLN0192]);
          }
          return vLN0197;
        }
        if (p1336 instanceof Date) {
          var v1152 = p1336.getTime();
          var v1153 = Math.floor(v1152 / 1000);
          var v1154 = (v1152 - v1153 * 1000) * 1000000;
          if (v1153 >= 0 && v1154 >= 0 && v1153 <= vLN17179869183) {
            if (v1154 === 0 && v1153 <= vLN4294967295) {
              p1334.push(214, 255, v1153 >> 24, v1153 >> 16, v1153 >> 8, v1153);
              return 6;
            } else {
              vLN0194 = v1153 / 4294967296;
              vLN0195 = v1153 & -1;
              p1334.push(215, 255, v1154 >> 22, v1154 >> 14, v1154 >> 6, vLN0194, vLN0195 >> 24, vLN0195 >> 16, vLN0195 >> 8, vLN0195);
              return 10;
            }
          } else {
            vLN0194 = Math.floor(v1153 / 4294967296);
            vLN0195 = v1153 >>> 0;
            p1334.push(199, 12, 255, v1154 >> 24, v1154 >> 16, v1154 >> 8, v1154, vLN0194 >> 24, vLN0194 >> 16, vLN0194 >> 8, vLN0194, vLN0195 >> 24, vLN0195 >> 16, vLN0195 >> 8, vLN0195);
            return 15;
          }
        }
        if (p1336 instanceof ArrayBuffer) {
          vLN0196 = p1336.byteLength;
          if (vLN0196 < 256) {
            p1334.push(196, vLN0196);
            vLN0197 = 2;
          } else if (vLN0196 < 65536) {
            p1334.push(197, vLN0196 >> 8, vLN0196);
            vLN0197 = 3;
          } else if (vLN0196 < 4294967296) {
            p1334.push(198, vLN0196 >> 24, vLN0196 >> 16, vLN0196 >> 8, vLN0196);
            vLN0197 = 5;
          } else {
            throw new Error("Buffer too large");
          }
          p1335.push({
            _bin: p1336,
            _length: vLN0196,
            _offset: p1334.length
          });
          return vLN0197 + vLN0196;
        }
        if (typeof p1336.toJSON === "function") {
          return f244(p1334, p1335, p1336.toJSON());
        }
        var vA26 = [];
        var vLS14 = "";
        var v1155 = Object.keys(p1336);
        vLN0192 = 0;
        vLN0193 = v1155.length;
        for (; vLN0192 < vLN0193; vLN0192++) {
          vLS14 = v1155[vLN0192];
          if (p1336[vLS14] !== undefined && typeof p1336[vLS14] !== "function") {
            vA26.push(vLS14);
          }
        }
        vLN0196 = vA26.length;
        if (vLN0196 < 16) {
          p1334.push(vLN0196 | 128);
          vLN0197 = 1;
        } else if (vLN0196 < 65536) {
          p1334.push(222, vLN0196 >> 8, vLN0196);
          vLN0197 = 3;
        } else if (vLN0196 < 4294967296) {
          p1334.push(223, vLN0196 >> 24, vLN0196 >> 16, vLN0196 >> 8, vLN0196);
          vLN0197 = 5;
        } else {
          throw new Error("Object too large");
        }
        for (vLN0192 = 0; vLN0192 < vLN0196; vLN0192++) {
          vLS14 = vA26[vLN0192];
          vLN0197 += f244(p1334, p1335, vLS14);
          vLN0197 += f244(p1334, p1335, p1336[vLS14]);
        }
        return vLN0197;
      }
      if (v1151 === "boolean") {
        p1334.push(p1336 ? 195 : 194);
        return 1;
      }
      if (v1151 === "undefined") {
        p1334.push(192);
        return 1;
      }
      if (typeof p1336.toJSON === "function") {
        return f244(p1334, p1335, p1336.toJSON());
      }
      throw new Error("Could not encode");
    }
    function f245(p1337) {
      var vA27 = [];
      var vA28 = [];
      var vF244 = f244(vA27, vA28, p1337);
      var v1156 = new ArrayBuffer(vF244);
      var v1157 = new DataView(v1156);
      var vLN0198 = 0;
      var vLN0199 = 0;
      var v1158 = -1;
      if (vA28.length > 0) {
        v1158 = vA28[0]._offset;
      }
      var v1159;
      var vLN0200 = 0;
      var vLN0201 = 0;
      for (var vLN0202 = 0, v1160 = vA27.length; vLN0202 < v1160; vLN0202++) {
        v1157.setUint8(vLN0199 + vLN0202, vA27[vLN0202]);
        if (vLN0202 + 1 !== v1158) {
          continue;
        }
        v1159 = vA28[vLN0198];
        vLN0200 = v1159._length;
        vLN0201 = vLN0199 + v1158;
        if (v1159._bin) {
          var v1161 = new Uint8Array(v1159._bin);
          for (var vLN0203 = 0; vLN0203 < vLN0200; vLN0203++) {
            v1157.setUint8(vLN0201 + vLN0203, v1161[vLN0203]);
          }
        } else if (v1159._str) {
          f242(v1157, vLN0201, v1159._str);
        } else if (v1159._float !== undefined) {
          v1157.setFloat64(vLN0201, v1159._float);
        }
        vLN0198++;
        vLN0199 += vLN0200;
        if (vA28[vLN0198]) {
          v1158 = vA28[vLN0198]._offset;
        }
      }
      return v1156;
    }
    p1318.encode = f245;
  }, (p1338, p1339, p1340) => {
    'use strict';

    Object.defineProperty(p1339, "__esModule", {
      value: true
    });
    p1339.Connection = undefined;
    const vP1340 = p1340(9);
    class C5 {
      constructor() {
        this.events = {};
        this.transport = new vP1340.WebSocketTransport(this.events);
      }
      send(p1341) {
        this.transport.send(p1341);
      }
      connect(p1342, p1343) {
        this.transport.connect(p1342, p1343);
      }
      close(p1344, p1345) {
        this.transport.close(p1344, p1345);
      }
      get isOpen() {
        return this.transport.isOpen;
      }
    }
    p1339.Connection = C5;
  }, function (p1346, p1347, p1348) {
    'use strict';

    var v1162 = this && this.__importDefault || function (p1349) {
      if (p1349 && p1349.__esModule) {
        return p1349;
      } else {
        return {
          default: p1349
        };
      }
    };
    Object.defineProperty(p1347, "__esModule", {
      value: true
    });
    p1347.WebSocketTransport = undefined;
    const vV1162 = v1162(p1348(10));
    const v1163 = globalThis.WebSocket || vV1162.default;
    class C6 {
      constructor(p1350) {
        this.events = p1350;
      }
      send(p1351) {
        if (p1351 instanceof ArrayBuffer) {
          this.ws.send(p1351);
        } else if (Array.isArray(p1351)) {
          this.ws.send(new Uint8Array(p1351).buffer);
        }
      }
      connect(p1352, p1353) {
        try {
          this.ws = new v1163(p1352, {
            headers: p1353,
            protocols: this.protocols
          });
        } catch (e60) {
          this.ws = new v1163(p1352, this.protocols);
        }
        this.ws.binaryType = "arraybuffer";
        this.ws.onopen = this.events.onopen;
        this.ws.onmessage = this.events.onmessage;
        this.ws.onclose = this.events.onclose;
        this.ws.onerror = this.events.onerror;
      }
      close(p1354, p1355) {
        this.ws.close(p1354, p1355);
      }
      get isOpen() {
        return this.ws.readyState === v1163.OPEN;
      }
    }
    p1347.WebSocketTransport = C6;
  }, p1356 => {
    'use strict';

    p1356.exports = function () {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
    };
  }, (p1357, p1358) => {
    'use strict';

    Object.defineProperty(p1358, "__esModule", {
      value: true
    });
    p1358.utf8Length = p1358.utf8Read = p1358.ErrorCode = p1358.Protocol = undefined;
    var v1164;
    (function (p1359) {
      p1359[p1359.HANDSHAKE = 9] = "HANDSHAKE";
      p1359[p1359.JOIN_ROOM = 10] = "JOIN_ROOM";
      p1359[p1359.ERROR = 11] = "ERROR";
      p1359[p1359.LEAVE_ROOM = 12] = "LEAVE_ROOM";
      p1359[p1359.ROOM_DATA = 13] = "ROOM_DATA";
      p1359[p1359.ROOM_STATE = 14] = "ROOM_STATE";
      p1359[p1359.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH";
      p1359[p1359.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA";
      p1359[p1359.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES";
    })(v1164 = p1358.Protocol ||= {});
    var v1165;
    (function (p1360) {
      p1360[p1360.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER";
      p1360[p1360.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA";
      p1360[p1360.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID";
      p1360[p1360.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED";
      p1360[p1360.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED";
      p1360[p1360.AUTH_FAILED = 4215] = "AUTH_FAILED";
      p1360[p1360.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR";
    })(v1165 = p1358.ErrorCode ||= {});
    function f246(p1361, p1362) {
      const v1166 = p1361[p1362++];
      var vLS15 = "";
      var vLN0204 = 0;
      for (var vP1362 = p1362, v1167 = p1362 + v1166; vP1362 < v1167; vP1362++) {
        var v1168 = p1361[vP1362];
        if ((v1168 & 128) === 0) {
          vLS15 += String.fromCharCode(v1168);
          continue;
        }
        if ((v1168 & 224) === 192) {
          vLS15 += String.fromCharCode((v1168 & 31) << 6 | p1361[++vP1362] & 63);
          continue;
        }
        if ((v1168 & 240) === 224) {
          vLS15 += String.fromCharCode((v1168 & 15) << 12 | (p1361[++vP1362] & 63) << 6 | (p1361[++vP1362] & 63) << 0);
          continue;
        }
        if ((v1168 & 248) === 240) {
          vLN0204 = (v1168 & 7) << 18 | (p1361[++vP1362] & 63) << 12 | (p1361[++vP1362] & 63) << 6 | (p1361[++vP1362] & 63) << 0;
          if (vLN0204 >= 65536) {
            vLN0204 -= 65536;
            vLS15 += String.fromCharCode((vLN0204 >>> 10) + 55296, (vLN0204 & 1023) + 56320);
          } else {
            vLS15 += String.fromCharCode(vLN0204);
          }
          continue;
        }
        throw new Error("Invalid byte " + v1168.toString(16));
      }
      return vLS15;
    }
    p1358.utf8Read = f246;
    function f247(p1363 = "") {
      let vLN0205 = 0;
      let vLN0206 = 0;
      for (let vLN0207 = 0, v1169 = p1363.length; vLN0207 < v1169; vLN0207++) {
        vLN0205 = p1363.charCodeAt(vLN0207);
        if (vLN0205 < 128) {
          vLN0206 += 1;
        } else if (vLN0205 < 2048) {
          vLN0206 += 2;
        } else if (vLN0205 < 55296 || vLN0205 >= 57344) {
          vLN0206 += 3;
        } else {
          vLN0207++;
          vLN0206 += 4;
        }
      }
      return vLN0206 + 1;
    }
    p1358.utf8Length = f247;
  }, (p1364, p1365) => {
    'use strict';

    Object.defineProperty(p1365, "__esModule", {
      value: true
    });
    p1365.getSerializer = p1365.registerSerializer = undefined;
    const vO66 = {};
    function f248(p1366, p1367) {
      vO66[p1366] = p1367;
    }
    p1365.registerSerializer = f248;
    function f249(p1368) {
      const v1170 = vO66[p1368];
      if (!v1170) {
        throw new Error("missing serializer: " + p1368);
      }
      return v1170;
    }
    p1365.getSerializer = f249;
  }, (p1369, p1370) => {
    'use strict';

    Object.defineProperty(p1370, "__esModule", {
      value: true
    });
    p1370.createNanoEvents = undefined;
    const vF49 = () => ({
      emit(p1371, ..._0x5a46da) {
        let v1171 = this.events[p1371] || [];
        for (let vLN0208 = 0, v1172 = v1171.length; vLN0208 < v1172; vLN0208++) {
          v1171[vLN0208](..._0x5a46da);
        }
      },
      events: {},
      on(p1372, p1373) {
        var v1173;
        if (!((v1173 = this.events[p1372]) === null || v1173 === undefined ? undefined : v1173.push(p1373))) {
          this.events[p1372] = [p1373];
        }
        return () => {
          var v1174;
          this.events[p1372] = (v1174 = this.events[p1372]) === null || v1174 === undefined ? undefined : v1174.filter(p1374 => p1373 !== p1374);
        };
      }
    });
    p1370.createNanoEvents = vF49;
  }, (p1375, p1376) => {
    'use strict';

    Object.defineProperty(p1376, "__esModule", {
      value: true
    });
    p1376.createSignal = p1376.EventEmitter = undefined;
    class C7 {
      constructor() {
        this.handlers = [];
      }
      register(p1377, p1378 = false) {
        this.handlers.push(p1377);
        return this;
      }
      invoke(..._0xd67237) {
        this.handlers.forEach(p1379 => p1379.apply(this, _0xd67237));
      }
      invokeAsync(..._0x29a324) {
        return Promise.all(this.handlers.map(p1380 => p1380.apply(this, _0x29a324)));
      }
      remove(p1381) {
        const v1175 = this.handlers.indexOf(p1381);
        this.handlers[v1175] = this.handlers[this.handlers.length - 1];
        this.handlers.pop();
      }
      clear() {
        this.handlers = [];
      }
    }
    p1376.EventEmitter = C7;
    function f250() {
      const v1176 = new C7();
      function f251(p1382) {
        return v1176.register(p1382, this === null);
      }
      ;
      f251.once = p1383 => {
        const vF50 = function (..._0x1e7079) {
          p1383.apply(this, _0x1e7079);
          v1176.remove(vF50);
        };
        v1176.register(vF50);
      };
      f251.remove = p1384 => v1176.remove(p1384);
      f251.invoke = (..._0x44380d) => v1176.invoke(..._0x44380d);
      f251.invokeAsync = (..._0x7d8209) => v1176.invokeAsync(..._0x7d8209);
      f251.clear = () => v1176.clear();
      return f251;
    }
    p1376.createSignal = f250;
  }, function (p1385, p1386) {
    (function (p1387, p1388) {
      if (true) {
        p1388(p1386);
      } else {
        0;
      }
    })(this, function (p1389) {
      'use strict';

      var vF51 = function (p1390, p1391) {
        vF51 = Object.setPrototypeOf || {
          "__proto__": []
        } instanceof Array && function (p1392, p1393) {
          p1392.__proto__ = p1393;
        } || function (p1394, p1395) {
          for (var v1177 in p1395) {
            if (Object.prototype.hasOwnProperty.call(p1395, v1177)) {
              p1394[v1177] = p1395[v1177];
            }
          }
        };
        return vF51(p1390, p1391);
      };
      function f252(p1396, p1397) {
        if (typeof p1397 !== "function" && p1397 !== null) {
          throw new TypeError("Class extends value " + String(p1397) + " is not a constructor or null");
        }
        vF51(p1396, p1397);
        function f253() {
          this.constructor = p1396;
        }
        p1396.prototype = p1397 === null ? Object.create(p1397) : (f253.prototype = p1397.prototype, new f253());
      }
      function f254(p1398, p1399, p1400, p1401) {
        var v1178 = arguments.length;
        var v1179 = v1178 < 3 ? p1399 : p1401 === null ? p1401 = Object.getOwnPropertyDescriptor(p1399, p1400) : p1401;
        var v1180;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
          v1179 = Reflect.decorate(p1398, p1399, p1400, p1401);
        } else {
          for (var v1181 = p1398.length - 1; v1181 >= 0; v1181--) {
            if (v1180 = p1398[v1181]) {
              v1179 = (v1178 < 3 ? v1180(v1179) : v1178 > 3 ? v1180(p1399, p1400, v1179) : v1180(p1399, p1400)) || v1179;
            }
          }
        }
        if (v1178 > 3 && v1179) {
          Object.defineProperty(p1399, p1400, v1179);
        }
        return v1179;
      }
      function f255(p1402, p1403, p1404) {
        if (p1404 || arguments.length === 2) {
          for (var vLN0209 = 0, v1182 = p1403.length, v1183; vLN0209 < v1182; vLN0209++) {
            if (v1183 || !(vLN0209 in p1403)) {
              if (!v1183) {
                v1183 = Array.prototype.slice.call(p1403, 0, vLN0209);
              }
              v1183[vLN0209] = p1403[vLN0209];
            }
          }
        }
        return p1402.concat(v1183 || Array.prototype.slice.call(p1403));
      }
      if (typeof SuppressedError === "function") {
        SuppressedError;
      } else {
        (function (p1405, p1406, p1407) {
          var v1184 = new Error(p1407);
          v1184.name = "SuppressedError";
          v1184.error = p1405;
          v1184.suppressed = p1406;
          return v1184;
        });
      }
      var vLN255 = 255;
      var vLN213 = 213;
      p1389.OPERATION = undefined;
      (function (p1408) {
        p1408[p1408.ADD = 128] = "ADD";
        p1408[p1408.REPLACE = 0] = "REPLACE";
        p1408[p1408.DELETE = 64] = "DELETE";
        p1408[p1408.DELETE_AND_ADD = 192] = "DELETE_AND_ADD";
        p1408[p1408.TOUCH = 1] = "TOUCH";
        p1408[p1408.CLEAR = 10] = "CLEAR";
      })(p1389.OPERATION ||= {});
      var vF52 = function () {
        function f256(p1409, p1410, p1411) {
          this.changed = false;
          this.changes = new Map();
          this.allChanges = new Set();
          this.caches = {};
          this.currentCustomOperation = 0;
          this.ref = p1409;
          this.setParent(p1410, p1411);
        }
        f256.prototype.setParent = function (p1412, p1413, p1414) {
          var vThis132 = this;
          if (!this.indexes) {
            this.indexes = this.ref instanceof vF63 ? this.ref._definition.indexes : {};
          }
          this.parent = p1412;
          this.parentIndex = p1414;
          if (!p1413) {
            return;
          }
          this.root = p1413;
          if (this.ref instanceof vF63) {
            var v1185 = this.ref._definition;
            for (var v1186 in v1185.schema) {
              var v1187 = this.ref[v1186];
              if (v1187 && v1187.$changes) {
                var v1188 = v1185.indexes[v1186];
                v1187.$changes.setParent(this.ref, p1413, v1188);
              }
            }
          } else if (typeof this.ref === "object") {
            this.ref.forEach(function (p1415, p1416) {
              if (p1415 instanceof vF63) {
                var v1189 = p1415.$changes;
                var v1190 = vThis132.ref.$changes.indexes[p1416];
                v1189.setParent(vThis132.ref, vThis132.root, v1190);
              }
            });
          }
        };
        f256.prototype.operation = function (p1417) {
          this.changes.set(--this.currentCustomOperation, p1417);
        };
        f256.prototype.change = function (p1418, p1419 = p1389.OPERATION.ADD) {
          var v1191 = typeof p1418 === "number" ? p1418 : this.indexes[p1418];
          this.assertValidIndex(v1191, p1418);
          var v1192 = this.changes.get(v1191);
          if (!v1192 || v1192.op === p1389.OPERATION.DELETE || v1192.op === p1389.OPERATION.TOUCH) {
            this.changes.set(v1191, {
              op: !v1192 ? p1419 : v1192.op === p1389.OPERATION.DELETE ? p1389.OPERATION.DELETE_AND_ADD : p1419,
              index: v1191
            });
          }
          this.allChanges.add(v1191);
          this.changed = true;
          this.touchParents();
        };
        f256.prototype.touch = function (p1420) {
          var v1193 = typeof p1420 === "number" ? p1420 : this.indexes[p1420];
          this.assertValidIndex(v1193, p1420);
          if (!this.changes.has(v1193)) {
            this.changes.set(v1193, {
              op: p1389.OPERATION.TOUCH,
              index: v1193
            });
          }
          this.allChanges.add(v1193);
          this.touchParents();
        };
        f256.prototype.touchParents = function () {
          if (this.parent) {
            this.parent.$changes.touch(this.parentIndex);
          }
        };
        f256.prototype.getType = function (p1421) {
          if (this.ref._definition) {
            var v1194 = this.ref._definition;
            return v1194.schema[v1194.fieldsByIndex[p1421]];
          } else {
            var v1194 = this.parent._definition;
            var v1195 = v1194.schema[v1194.fieldsByIndex[this.parentIndex]];
            return Object.values(v1195)[0];
          }
        };
        f256.prototype.getChildrenFilter = function () {
          var v1196 = this.parent._definition.childFilters;
          return v1196 && v1196[this.parentIndex];
        };
        f256.prototype.getValue = function (p1422) {
          return this.ref.getByIndex(p1422);
        };
        f256.prototype.delete = function (p1423) {
          var v1197 = typeof p1423 === "number" ? p1423 : this.indexes[p1423];
          if (v1197 === undefined) {
            console.warn(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index: ${p1423} (${v1197})`);
            return;
          }
          var v1198 = this.getValue(v1197);
          this.changes.set(v1197, {
            op: p1389.OPERATION.DELETE,
            index: v1197
          });
          this.allChanges.delete(v1197);
          delete this.caches[v1197];
          if (v1198 && v1198.$changes) {
            v1198.$changes.parent = undefined;
          }
          this.changed = true;
          this.touchParents();
        };
        f256.prototype.discard = function (p1424, p1425) {
          var vThis133 = this;
          if (p1424 === undefined) {
            p1424 = false;
          }
          if (p1425 === undefined) {
            p1425 = false;
          }
          if (!(this.ref instanceof vF63)) {
            this.changes.forEach(function (p1426) {
              if (p1426.op === p1389.OPERATION.DELETE) {
                var v1199 = vThis133.ref.getIndex(p1426.index);
                delete vThis133.indexes[v1199];
              }
            });
          }
          this.changes.clear();
          this.changed = p1424;
          if (p1425) {
            this.allChanges.clear();
          }
          this.currentCustomOperation = 0;
        };
        f256.prototype.discardAll = function () {
          var vThis134 = this;
          this.changes.forEach(function (p1427) {
            var v1200 = vThis134.getValue(p1427.index);
            if (v1200 && v1200.$changes) {
              v1200.$changes.discardAll();
            }
          });
          this.discard();
        };
        f256.prototype.cache = function (p1428, p1429) {
          this.caches[p1428] = p1429;
        };
        f256.prototype.clone = function () {
          return new f256(this.ref, this.parent, this.root);
        };
        f256.prototype.ensureRefId = function () {
          if (this.refId !== undefined) {
            return;
          }
          this.refId = this.root.getNextUniqueId();
        };
        f256.prototype.assertValidIndex = function (p1430, p1431) {
          if (p1430 === undefined) {
            throw new Error(`ChangeTree: missing index for field "${p1431}"`);
          }
        };
        return f256;
      }();
      function f257(p1432, p1433, p1434, p1435) {
        if (!p1432[p1433]) {
          p1432[p1433] = [];
        }
        p1432[p1433].push(p1434);
        if (p1435 === null || p1435 === undefined) {
          undefined;
        } else {
          p1435.forEach(function (p1436, p1437) {
            return p1434(p1436, p1437);
          });
        }
        return function () {
          return f259(p1432[p1433], p1432[p1433].indexOf(p1434));
        };
      }
      function f258(p1438) {
        var vThis135 = this;
        var v1201 = typeof this.$changes.getType() !== "string";
        this.$items.forEach(function (p1439, p1440) {
          p1438.push({
            refId: vThis135.$changes.refId,
            op: p1389.OPERATION.DELETE,
            field: p1440,
            value: undefined,
            previousValue: p1439
          });
          if (v1201) {
            vThis135.$changes.root.removeRef(p1439.$changes.refId);
          }
        });
      }
      function f259(p1441, p1442) {
        if (p1442 === -1 || p1442 >= p1441.length) {
          return false;
        }
        var v1202 = p1441.length - 1;
        for (var vP1442 = p1442; vP1442 < v1202; vP1442++) {
          p1441[vP1442] = p1441[vP1442 + 1];
        }
        p1441.length = v1202;
        return true;
      }
      var vF53 = function (p1443, p1444) {
        var v1203 = p1443.toString();
        var v1204 = p1444.toString();
        if (v1203 < v1204) {
          return -1;
        } else if (v1203 > v1204) {
          return 1;
        } else {
          return 0;
        }
      };
      function f260(p1445) {
        p1445.$proxy = true;
        p1445 = new Proxy(p1445, {
          get: function (p1446, p1447) {
            if (typeof p1447 !== "symbol" && !isNaN(p1447)) {
              return p1446.at(p1447);
            } else {
              return p1446[p1447];
            }
          },
          set: function (p1448, p1449, p1450) {
            if (typeof p1449 !== "symbol" && !isNaN(p1449)) {
              var v1205 = Array.from(p1448.$items.keys());
              var vParseInt7 = parseInt(v1205[p1449] || p1449);
              if (p1450 === undefined || p1450 === null) {
                p1448.deleteAt(vParseInt7);
              } else {
                p1448.setAt(vParseInt7, p1450);
              }
            } else {
              p1448[p1449] = p1450;
            }
            return true;
          },
          deleteProperty: function (p1451, p1452) {
            if (typeof p1452 === "number") {
              p1451.deleteAt(p1452);
            } else {
              delete p1451[p1452];
            }
            return true;
          },
          has: function (p1453, p1454) {
            if (typeof p1454 !== "symbol" && !isNaN(Number(p1454))) {
              return p1453.$items.has(Number(p1454));
            }
            return Reflect.has(p1453, p1454);
          }
        });
        return p1445;
      }
      var vF54 = function () {
        function f261() {
          var vA29 = [];
          for (var vLN0210 = 0; vLN0210 < arguments.length; vLN0210++) {
            vA29[vLN0210] = arguments[vLN0210];
          }
          this.$changes = new vF52(this);
          this.$items = new Map();
          this.$indexes = new Map();
          this.$refId = 0;
          this.push.apply(this, vA29);
        }
        f261.prototype.onAdd = function (p1455, p1456 = true) {
          return f257(this.$callbacks ||= {}, p1389.OPERATION.ADD, p1455, p1456 ? this.$items : undefined);
        };
        f261.prototype.onRemove = function (p1457) {
          return f257(this.$callbacks ||= {}, p1389.OPERATION.DELETE, p1457);
        };
        f261.prototype.onChange = function (p1458) {
          return f257(this.$callbacks ||= {}, p1389.OPERATION.REPLACE, p1458);
        };
        f261.is = function (p1459) {
          return Array.isArray(p1459) || p1459.array !== undefined;
        };
        Object.defineProperty(f261.prototype, "length", {
          get: function () {
            return this.$items.size;
          },
          set: function (p1460) {
            if (p1460 === 0) {
              this.clear();
            } else {
              this.splice(p1460, this.length - p1460);
            }
          },
          enumerable: false,
          configurable: true
        });
        f261.prototype.push = function () {
          var vThis136 = this;
          var vA30 = [];
          for (var vLN0211 = 0; vLN0211 < arguments.length; vLN0211++) {
            vA30[vLN0211] = arguments[vLN0211];
          }
          var v1206;
          vA30.forEach(function (p1461) {
            v1206 = vThis136.$refId++;
            vThis136.setAt(v1206, p1461);
          });
          return v1206;
        };
        f261.prototype.pop = function () {
          var v1207 = Array.from(this.$indexes.values()).pop();
          if (v1207 === undefined) {
            return undefined;
          }
          this.$changes.delete(v1207);
          this.$indexes.delete(v1207);
          var v1208 = this.$items.get(v1207);
          this.$items.delete(v1207);
          return v1208;
        };
        f261.prototype.at = function (p1462) {
          p1462 = Math.trunc(p1462) || 0;
          if (p1462 < 0) {
            p1462 += this.length;
          }
          if (p1462 < 0 || p1462 >= this.length) {
            return undefined;
          }
          var v1209 = Array.from(this.$items.keys())[p1462];
          return this.$items.get(v1209);
        };
        f261.prototype.setAt = function (p1463, p1464) {
          if (p1464 === undefined || p1464 === null) {
            console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");
            return;
          }
          if (this.$items.get(p1463) === p1464) {
            return;
          }
          if (p1464.$changes !== undefined) {
            p1464.$changes.setParent(this, this.$changes.root, p1463);
          }
          var v1210 = this.$changes.indexes[p1463]?.op ?? p1389.OPERATION.ADD;
          this.$changes.indexes[p1463] = p1463;
          this.$indexes.set(p1463, p1463);
          this.$items.set(p1463, p1464);
          this.$changes.change(p1463, v1210);
        };
        f261.prototype.deleteAt = function (p1465) {
          var v1211 = Array.from(this.$items.keys())[p1465];
          if (v1211 === undefined) {
            return false;
          }
          return this.$deleteAt(v1211);
        };
        f261.prototype.$deleteAt = function (p1466) {
          this.$changes.delete(p1466);
          this.$indexes.delete(p1466);
          return this.$items.delete(p1466);
        };
        f261.prototype.clear = function (p1467) {
          this.$changes.discard(true, true);
          this.$changes.indexes = {};
          this.$indexes.clear();
          if (p1467) {
            f258.call(this, p1467);
          }
          this.$items.clear();
          this.$changes.operation({
            index: 0,
            op: p1389.OPERATION.CLEAR
          });
          this.$changes.touchParents();
        };
        f261.prototype.concat = function () {
          var v1212;
          var vA31 = [];
          for (var vLN0212 = 0; vLN0212 < arguments.length; vLN0212++) {
            vA31[vLN0212] = arguments[vLN0212];
          }
          return new (f261.bind.apply(f261, f255([undefined], (v1212 = Array.from(this.$items.values())).concat.apply(v1212, vA31), false)))();
        };
        f261.prototype.join = function (p1468) {
          return Array.from(this.$items.values()).join(p1468);
        };
        f261.prototype.reverse = function () {
          var vThis137 = this;
          var v1213 = Array.from(this.$items.keys());
          var v1214 = Array.from(this.$items.values()).reverse();
          v1214.forEach(function (p1469, p1470) {
            vThis137.setAt(v1213[p1470], p1469);
          });
          return this;
        };
        f261.prototype.shift = function () {
          var v1215 = Array.from(this.$items.keys());
          var v1216 = v1215.shift();
          if (v1216 === undefined) {
            return undefined;
          }
          var v1217 = this.$items.get(v1216);
          this.$deleteAt(v1216);
          return v1217;
        };
        f261.prototype.slice = function (p1471, p1472) {
          var v1218 = new f261();
          v1218.push.apply(v1218, Array.from(this.$items.values()).slice(p1471, p1472));
          return v1218;
        };
        f261.prototype.sort = function (p1473) {
          var vThis138 = this;
          if (p1473 === undefined) {
            p1473 = vF53;
          }
          var v1219 = Array.from(this.$items.keys());
          var v1220 = Array.from(this.$items.values()).sort(p1473);
          v1220.forEach(function (p1474, p1475) {
            vThis138.setAt(v1219[p1475], p1474);
          });
          return this;
        };
        f261.prototype.splice = function (p1476, p1477 = this.length - p1476) {
          var vA32 = [];
          for (var vLN24 = 2; vLN24 < arguments.length; vLN24++) {
            vA32[vLN24 - 2] = arguments[vLN24];
          }
          var v1221 = Array.from(this.$items.keys());
          var vA33 = [];
          for (var vP1476 = p1476; vP1476 < p1476 + p1477; vP1476++) {
            vA33.push(this.$items.get(v1221[vP1476]));
            this.$deleteAt(v1221[vP1476]);
          }
          for (var vP1476 = 0; vP1476 < vA32.length; vP1476++) {
            this.setAt(p1476 + vP1476, vA32[vP1476]);
          }
          return vA33;
        };
        f261.prototype.unshift = function () {
          var vThis139 = this;
          var vA34 = [];
          for (var vLN0213 = 0; vLN0213 < arguments.length; vLN0213++) {
            vA34[vLN0213] = arguments[vLN0213];
          }
          var v1222 = this.length;
          var v1223 = vA34.length;
          var v1224 = Array.from(this.$items.values());
          vA34.forEach(function (p1478, p1479) {
            vThis139.setAt(p1479, p1478);
          });
          v1224.forEach(function (p1480, p1481) {
            vThis139.setAt(v1223 + p1481, p1480);
          });
          return v1222 + v1223;
        };
        f261.prototype.indexOf = function (p1482, p1483) {
          return Array.from(this.$items.values()).indexOf(p1482, p1483);
        };
        f261.prototype.lastIndexOf = function (p1484, p1485 = this.length - 1) {
          return Array.from(this.$items.values()).lastIndexOf(p1484, p1485);
        };
        f261.prototype.every = function (p1486, p1487) {
          return Array.from(this.$items.values()).every(p1486, p1487);
        };
        f261.prototype.some = function (p1488, p1489) {
          return Array.from(this.$items.values()).some(p1488, p1489);
        };
        f261.prototype.forEach = function (p1490, p1491) {
          Array.from(this.$items.values()).forEach(p1490, p1491);
        };
        f261.prototype.map = function (p1492, p1493) {
          return Array.from(this.$items.values()).map(p1492, p1493);
        };
        f261.prototype.filter = function (p1494, p1495) {
          return Array.from(this.$items.values()).filter(p1494, p1495);
        };
        f261.prototype.reduce = function (p1496, p1497) {
          return Array.prototype.reduce.apply(Array.from(this.$items.values()), arguments);
        };
        f261.prototype.reduceRight = function (p1498, p1499) {
          return Array.prototype.reduceRight.apply(Array.from(this.$items.values()), arguments);
        };
        f261.prototype.find = function (p1500, p1501) {
          return Array.from(this.$items.values()).find(p1500, p1501);
        };
        f261.prototype.findIndex = function (p1502, p1503) {
          return Array.from(this.$items.values()).findIndex(p1502, p1503);
        };
        f261.prototype.fill = function (p1504, p1505, p1506) {
          throw new Error("ArraySchema#fill() not implemented");
        };
        f261.prototype.copyWithin = function (p1507, p1508, p1509) {
          throw new Error("ArraySchema#copyWithin() not implemented");
        };
        f261.prototype.toString = function () {
          return this.$items.toString();
        };
        f261.prototype.toLocaleString = function () {
          return this.$items.toLocaleString();
        };
        f261.prototype[Symbol.iterator] = function () {
          return Array.from(this.$items.values())[Symbol.iterator]();
        };
        Object.defineProperty(f261, Symbol.species, {
          get: function () {
            return f261;
          },
          enumerable: false,
          configurable: true
        });
        f261.prototype.entries = function () {
          return this.$items.entries();
        };
        f261.prototype.keys = function () {
          return this.$items.keys();
        };
        f261.prototype.values = function () {
          return this.$items.values();
        };
        f261.prototype.includes = function (p1510, p1511) {
          return Array.from(this.$items.values()).includes(p1510, p1511);
        };
        f261.prototype.flatMap = function (p1512, p1513) {
          throw new Error("ArraySchema#flatMap() is not supported.");
        };
        f261.prototype.flat = function (p1514) {
          throw new Error("ArraySchema#flat() is not supported.");
        };
        f261.prototype.findLast = function () {
          var v1225 = Array.from(this.$items.values());
          return v1225.findLast.apply(v1225, arguments);
        };
        f261.prototype.findLastIndex = function () {
          var v1226 = Array.from(this.$items.values());
          return v1226.findLastIndex.apply(v1226, arguments);
        };
        f261.prototype.with = function (p1515, p1516) {
          var v1227 = Array.from(this.$items.values());
          v1227[p1515] = p1516;
          return new (f261.bind.apply(f261, f255([undefined], v1227, false)))();
        };
        f261.prototype.toReversed = function () {
          return Array.from(this.$items.values()).reverse();
        };
        f261.prototype.toSorted = function (p1517) {
          return Array.from(this.$items.values()).sort(p1517);
        };
        f261.prototype.toSpliced = function (p1518, p1519) {
          var v1228 = Array.from(this.$items.values());
          return v1228.toSpliced.apply(v1228, arguments);
        };
        f261.prototype.setIndex = function (p1520, p1521) {
          this.$indexes.set(p1520, p1521);
        };
        f261.prototype.getIndex = function (p1522) {
          return this.$indexes.get(p1522);
        };
        f261.prototype.getByIndex = function (p1523) {
          return this.$items.get(this.$indexes.get(p1523));
        };
        f261.prototype.deleteByIndex = function (p1524) {
          var v1229 = this.$indexes.get(p1524);
          this.$items.delete(v1229);
          this.$indexes.delete(p1524);
        };
        f261.prototype.toArray = function () {
          return Array.from(this.$items.values());
        };
        f261.prototype.toJSON = function () {
          return this.toArray().map(function (p1525) {
            if (typeof p1525.toJSON === "function") {
              return p1525.toJSON();
            } else {
              return p1525;
            }
          });
        };
        f261.prototype.clone = function (p1526) {
          var v1230;
          if (p1526) {
            v1230 = new (f261.bind.apply(f261, f255([undefined], Array.from(this.$items.values()), false)))();
          } else {
            v1230 = new (f261.bind.apply(f261, f255([undefined], this.map(function (p1527) {
              if (p1527.$changes) {
                return p1527.clone();
              } else {
                return p1527;
              }
            }), false)))();
          }
          return v1230;
        };
        return f261;
      }();
      function f262(p1528) {
        p1528.$proxy = true;
        p1528 = new Proxy(p1528, {
          get: function (p1529, p1530) {
            if (typeof p1530 !== "symbol" && typeof p1529[p1530] === "undefined") {
              return p1529.get(p1530);
            } else {
              return p1529[p1530];
            }
          },
          set: function (p1531, p1532, p1533) {
            if (typeof p1532 !== "symbol" && p1532.indexOf("$") === -1 && p1532 !== "onAdd" && p1532 !== "onRemove" && p1532 !== "onChange") {
              p1531.set(p1532, p1533);
            } else {
              p1531[p1532] = p1533;
            }
            return true;
          },
          deleteProperty: function (p1534, p1535) {
            p1534.delete(p1535);
            return true;
          }
        });
        return p1528;
      }
      var vF55 = function () {
        function f263(p1536) {
          var vThis140 = this;
          this.$changes = new vF52(this);
          this.$items = new Map();
          this.$indexes = new Map();
          this.$refId = 0;
          if (p1536) {
            if (p1536 instanceof Map || p1536 instanceof f263) {
              p1536.forEach(function (p1537, p1538) {
                return vThis140.set(p1538, p1537);
              });
            } else {
              for (var v1231 in p1536) {
                this.set(v1231, p1536[v1231]);
              }
            }
          }
        }
        f263.prototype.onAdd = function (p1539, p1540 = true) {
          return f257(this.$callbacks ||= {}, p1389.OPERATION.ADD, p1539, p1540 ? this.$items : undefined);
        };
        f263.prototype.onRemove = function (p1541) {
          return f257(this.$callbacks ||= {}, p1389.OPERATION.DELETE, p1541);
        };
        f263.prototype.onChange = function (p1542) {
          return f257(this.$callbacks ||= {}, p1389.OPERATION.REPLACE, p1542);
        };
        f263.is = function (p1543) {
          return p1543.map !== undefined;
        };
        f263.prototype[Symbol.iterator] = function () {
          return this.$items[Symbol.iterator]();
        };
        Object.defineProperty(f263.prototype, Symbol.toStringTag, {
          get: function () {
            return this.$items[Symbol.toStringTag];
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(f263, Symbol.species, {
          get: function () {
            return f263;
          },
          enumerable: false,
          configurable: true
        });
        f263.prototype.set = function (p1544, p1545) {
          if (p1545 === undefined || p1545 === null) {
            throw new Error(`MapSchema#set('${p1544}', ${p1545}): trying to set ${p1545} value on '${p1544}'.`);
          }
          p1544 = p1544.toString();
          var v1232 = typeof this.$changes.indexes[p1544] !== "undefined";
          var v1233 = v1232 ? this.$changes.indexes[p1544] : this.$refId++;
          var v1234 = v1232 ? p1389.OPERATION.REPLACE : p1389.OPERATION.ADD;
          var v1235 = p1545.$changes !== undefined;
          if (v1235) {
            p1545.$changes.setParent(this, this.$changes.root, v1233);
          }
          if (!v1232) {
            this.$changes.indexes[p1544] = v1233;
            this.$indexes.set(v1233, p1544);
          } else if (!v1235 && this.$items.get(p1544) === p1545) {
            return;
          } else if (v1235 && this.$items.get(p1544) !== p1545) {
            v1234 = p1389.OPERATION.ADD;
          }
          this.$items.set(p1544, p1545);
          this.$changes.change(p1544, v1234);
          return this;
        };
        f263.prototype.get = function (p1546) {
          return this.$items.get(p1546);
        };
        f263.prototype.delete = function (p1547) {
          this.$changes.delete(p1547.toString());
          return this.$items.delete(p1547);
        };
        f263.prototype.clear = function (p1548) {
          this.$changes.discard(true, true);
          this.$changes.indexes = {};
          this.$indexes.clear();
          if (p1548) {
            f258.call(this, p1548);
          }
          this.$items.clear();
          this.$changes.operation({
            index: 0,
            op: p1389.OPERATION.CLEAR
          });
          this.$changes.touchParents();
        };
        f263.prototype.has = function (p1549) {
          return this.$items.has(p1549);
        };
        f263.prototype.forEach = function (p1550) {
          this.$items.forEach(p1550);
        };
        f263.prototype.entries = function () {
          return this.$items.entries();
        };
        f263.prototype.keys = function () {
          return this.$items.keys();
        };
        f263.prototype.values = function () {
          return this.$items.values();
        };
        Object.defineProperty(f263.prototype, "size", {
          get: function () {
            return this.$items.size;
          },
          enumerable: false,
          configurable: true
        });
        f263.prototype.setIndex = function (p1551, p1552) {
          this.$indexes.set(p1551, p1552);
        };
        f263.prototype.getIndex = function (p1553) {
          return this.$indexes.get(p1553);
        };
        f263.prototype.getByIndex = function (p1554) {
          return this.$items.get(this.$indexes.get(p1554));
        };
        f263.prototype.deleteByIndex = function (p1555) {
          var v1236 = this.$indexes.get(p1555);
          this.$items.delete(v1236);
          this.$indexes.delete(p1555);
        };
        f263.prototype.toJSON = function () {
          var vO67 = {};
          this.forEach(function (p1556, p1557) {
            vO67[p1557] = typeof p1556.toJSON === "function" ? p1556.toJSON() : p1556;
          });
          return vO67;
        };
        f263.prototype.clone = function (p1558) {
          var v1237;
          if (p1558) {
            v1237 = Object.assign(new f263(), this);
          } else {
            v1237 = new f263();
            this.forEach(function (p1559, p1560) {
              if (p1559.$changes) {
                v1237.set(p1560, p1559.clone());
              } else {
                v1237.set(p1560, p1559);
              }
            });
          }
          return v1237;
        };
        return f263;
      }();
      var vO68 = {};
      function f264(p1561, p1562) {
        vO68[p1561] = p1562;
      }
      function f265(p1563) {
        return vO68[p1563];
      }
      var vF56 = function () {
        function f266() {
          this.indexes = {};
          this.fieldsByIndex = {};
          this.deprecated = {};
          this.descriptors = {};
        }
        f266.create = function (p1564) {
          var v1238 = new f266();
          v1238.schema = Object.assign({}, p1564 && p1564.schema || {});
          v1238.indexes = Object.assign({}, p1564 && p1564.indexes || {});
          v1238.fieldsByIndex = Object.assign({}, p1564 && p1564.fieldsByIndex || {});
          v1238.descriptors = Object.assign({}, p1564 && p1564.descriptors || {});
          v1238.deprecated = Object.assign({}, p1564 && p1564.deprecated || {});
          return v1238;
        };
        f266.prototype.addField = function (p1565, p1566) {
          var v1239 = this.getNextFieldIndex();
          this.fieldsByIndex[v1239] = p1565;
          this.indexes[p1565] = v1239;
          this.schema[p1565] = Array.isArray(p1566) ? {
            array: p1566[0]
          } : p1566;
        };
        f266.prototype.hasField = function (p1567) {
          return this.indexes[p1567] !== undefined;
        };
        f266.prototype.addFilter = function (p1568, p1569) {
          if (!this.filters) {
            this.filters = {};
            this.indexesWithFilters = [];
          }
          this.filters[this.indexes[p1568]] = p1569;
          this.indexesWithFilters.push(this.indexes[p1568]);
          return true;
        };
        f266.prototype.addChildrenFilter = function (p1570, p1571) {
          var v1240 = this.indexes[p1570];
          var v1241 = this.schema[p1570];
          if (f265(Object.keys(v1241)[0])) {
            if (!this.childFilters) {
              this.childFilters = {};
            }
            this.childFilters[v1240] = p1571;
            return true;
          } else {
            console.warn(`@filterChildren: field '${p1570}' can't have children. Ignoring filter.`);
          }
        };
        f266.prototype.getChildrenFilter = function (p1572) {
          return this.childFilters && this.childFilters[this.indexes[p1572]];
        };
        f266.prototype.getNextFieldIndex = function () {
          return Object.keys(this.schema || {}).length;
        };
        return f266;
      }();
      function f267(p1573) {
        return p1573._context && p1573._context.useFilters;
      }
      var vF57 = function () {
        function f268() {
          this.types = {};
          this.schemas = new Map();
          this.useFilters = false;
        }
        f268.prototype.has = function (p1574) {
          return this.schemas.has(p1574);
        };
        f268.prototype.get = function (p1575) {
          return this.types[p1575];
        };
        f268.prototype.add = function (p1576, p1577 = this.schemas.size) {
          p1576._definition = vF56.create(p1576._definition);
          p1576._typeid = p1577;
          this.types[p1577] = p1576;
          this.schemas.set(p1576, p1577);
        };
        f268.create = function (p1578 = {}) {
          return function (p1579) {
            if (!p1578.context) {
              p1578.context = new f268();
            }
            return f269(p1579, p1578);
          };
        };
        return f268;
      }();
      var v1242 = new vF57();
      function f269(p1580, p1581 = {}) {
        return function (p1582, p1583) {
          var v1243 = p1581.context || v1242;
          var v1244 = p1582.constructor;
          v1244._context = v1243;
          if (!p1580) {
            throw new Error(`${v1244.name}: @type() reference provided for "${p1583}" is undefined. Make sure you don't have any circular dependencies.`);
          }
          if (!v1243.has(v1244)) {
            v1243.add(v1244);
          }
          var v1245 = v1244._definition;
          v1245.addField(p1583, p1580);
          if (v1245.descriptors[p1583]) {
            if (v1245.deprecated[p1583]) {
              return;
            } else {
              try {
                throw new Error(`@colyseus/schema: Duplicate '${p1583}' definition on '${v1244.name}'.
Check @type() annotation`);
              } catch (e61) {
                var v1246 = e61.stack.split("\n")[4].trim();
                throw new Error(`${e61.message} ${v1246}`);
              }
            }
          }
          var v1247 = vF54.is(p1580);
          var v1248 = !v1247 && vF55.is(p1580);
          if (typeof p1580 !== "string" && !vF63.is(p1580)) {
            var v1249 = Object.values(p1580)[0];
            if (typeof v1249 !== "string" && !v1243.has(v1249)) {
              v1243.add(v1249);
            }
          }
          if (p1581.manual) {
            v1245.descriptors[p1583] = {
              enumerable: true,
              configurable: true,
              writable: true
            };
            return;
          }
          var v1250 = `_${p1583}`;
          v1245.descriptors[v1250] = {
            enumerable: false,
            configurable: false,
            writable: true
          };
          v1245.descriptors[p1583] = {
            get: function () {
              return this[v1250];
            },
            set: function (p1584) {
              if (p1584 === this[v1250]) {
                return;
              }
              if (p1584 !== undefined && p1584 !== null) {
                if (v1247 && !(p1584 instanceof vF54)) {
                  p1584 = new (vF54.bind.apply(vF54, f255([undefined], p1584, false)))();
                }
                if (v1248 && !(p1584 instanceof vF55)) {
                  p1584 = new vF55(p1584);
                }
                if (p1584.$proxy === undefined) {
                  if (v1248) {
                    p1584 = f262(p1584);
                  } else if (v1247) {
                    p1584 = f260(p1584);
                  }
                }
                this.$changes.change(p1583);
                if (p1584.$changes) {
                  p1584.$changes.setParent(this, this.$changes.root, this._definition.indexes[p1583]);
                }
              } else if (this[v1250] !== undefined) {
                this.$changes.delete(p1583);
              }
              this[v1250] = p1584;
            },
            enumerable: true,
            configurable: true
          };
        };
      }
      function f270(p1585) {
        return function (p1586, p1587) {
          var v1251 = p1586.constructor;
          var v1252 = v1251._definition;
          if (v1252.addFilter(p1587, p1585)) {
            v1251._context.useFilters = true;
          }
        };
      }
      function f271(p1588) {
        return function (p1589, p1590) {
          var v1253 = p1589.constructor;
          var v1254 = v1253._definition;
          if (v1254.addChildrenFilter(p1590, p1588)) {
            v1253._context.useFilters = true;
          }
        };
      }
      function f272(p1591 = true) {
        return function (p1592, p1593) {
          var v1255 = p1592.constructor;
          var v1256 = v1255._definition;
          v1256.deprecated[p1593] = true;
          if (p1591) {
            v1256.descriptors[p1593] = {
              get: function () {
                throw new Error(`${p1593} is deprecated.`);
              },
              set: function (p1594) {},
              enumerable: false,
              configurable: true
            };
          }
        };
      }
      function f273(p1595, p1596, p1597 = {}) {
        if (!p1597.context) {
          p1597.context = p1595._context || p1597.context || v1242;
        }
        for (var v1257 in p1596) {
          f269(p1596[v1257], p1597)(p1595.prototype, v1257);
        }
        return p1595;
      }
      function f274(p1598) {
        var vLN0214 = 0;
        var vLN0215 = 0;
        for (var vLN0216 = 0, v1258 = p1598.length; vLN0216 < v1258; vLN0216++) {
          vLN0214 = p1598.charCodeAt(vLN0216);
          if (vLN0214 < 128) {
            vLN0215 += 1;
          } else if (vLN0214 < 2048) {
            vLN0215 += 2;
          } else if (vLN0214 < 55296 || vLN0214 >= 57344) {
            vLN0215 += 3;
          } else {
            vLN0216++;
            vLN0215 += 4;
          }
        }
        return vLN0215;
      }
      function f275(p1599, p1600, p1601) {
        var vLN0217 = 0;
        for (var vLN0218 = 0, v1259 = p1601.length; vLN0218 < v1259; vLN0218++) {
          vLN0217 = p1601.charCodeAt(vLN0218);
          if (vLN0217 < 128) {
            p1599[p1600++] = vLN0217;
          } else if (vLN0217 < 2048) {
            p1599[p1600++] = vLN0217 >> 6 | 192;
            p1599[p1600++] = vLN0217 & 63 | 128;
          } else if (vLN0217 < 55296 || vLN0217 >= 57344) {
            p1599[p1600++] = vLN0217 >> 12 | 224;
            p1599[p1600++] = vLN0217 >> 6 & 63 | 128;
            p1599[p1600++] = vLN0217 & 63 | 128;
          } else {
            vLN0218++;
            vLN0217 = 65536 + ((vLN0217 & 1023) << 10 | p1601.charCodeAt(vLN0218) & 1023);
            p1599[p1600++] = vLN0217 >> 18 | 240;
            p1599[p1600++] = vLN0217 >> 12 & 63 | 128;
            p1599[p1600++] = vLN0217 >> 6 & 63 | 128;
            p1599[p1600++] = vLN0217 & 63 | 128;
          }
        }
      }
      function f276(p1602, p1603) {
        p1602.push(p1603 & 255);
      }
      function f277(p1604, p1605) {
        p1604.push(p1605 & 255);
      }
      function f278(p1606, p1607) {
        p1606.push(p1607 & 255);
        p1606.push(p1607 >> 8 & 255);
      }
      function f279(p1608, p1609) {
        p1608.push(p1609 & 255);
        p1608.push(p1609 >> 8 & 255);
      }
      function f280(p1610, p1611) {
        p1610.push(p1611 & 255);
        p1610.push(p1611 >> 8 & 255);
        p1610.push(p1611 >> 16 & 255);
        p1610.push(p1611 >> 24 & 255);
      }
      function f281(p1612, p1613) {
        var v1260 = p1613 >> 24;
        var v1261 = p1613 >> 16;
        var v1262 = p1613 >> 8;
        var vP1613 = p1613;
        p1612.push(vP1613 & 255);
        p1612.push(v1262 & 255);
        p1612.push(v1261 & 255);
        p1612.push(v1260 & 255);
      }
      function f282(p1614, p1615) {
        var v1263 = Math.floor(p1615 / Math.pow(2, 32));
        var v1264 = p1615 >>> 0;
        f281(p1614, v1264);
        f281(p1614, v1263);
      }
      function f283(p1616, p1617) {
        var v1265 = p1617 / Math.pow(2, 32) >> 0;
        var v1266 = p1617 >>> 0;
        f281(p1616, v1266);
        f281(p1616, v1265);
      }
      function f284(p1618, p1619) {
        f286(p1618, p1619);
      }
      function f285(p1620, p1621) {
        f287(p1620, p1621);
      }
      var v1267 = new Int32Array(2);
      var v1268 = new Float32Array(v1267.buffer);
      var v1269 = new Float64Array(v1267.buffer);
      function f286(p1622, p1623) {
        v1268[0] = p1623;
        f280(p1622, v1267[0]);
      }
      function f287(p1624, p1625) {
        v1269[0] = p1625;
        f280(p1624, v1267[0]);
        f280(p1624, v1267[1]);
      }
      function f288(p1626, p1627) {
        return f277(p1626, p1627 ? 1 : 0);
      }
      function f289(p1628, p1629) {
        if (!p1629) {
          p1629 = "";
        }
        var vF274 = f274(p1629);
        var vLN0219 = 0;
        if (vF274 < 32) {
          p1628.push(vF274 | 160);
          vLN0219 = 1;
        } else if (vF274 < 256) {
          p1628.push(217);
          f277(p1628, vF274);
          vLN0219 = 2;
        } else if (vF274 < 65536) {
          p1628.push(218);
          f279(p1628, vF274);
          vLN0219 = 3;
        } else if (vF274 < 4294967296) {
          p1628.push(219);
          f281(p1628, vF274);
          vLN0219 = 5;
        } else {
          throw new Error("String too long");
        }
        f275(p1628, p1628.length, p1629);
        return vLN0219 + vF274;
      }
      function f290(p1630, p1631) {
        if (isNaN(p1631)) {
          return f290(p1630, 0);
        } else if (!isFinite(p1631)) {
          return f290(p1630, p1631 > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER);
        } else if (p1631 !== (p1631 | 0)) {
          p1630.push(203);
          f287(p1630, p1631);
          return 9;
        }
        if (p1631 >= 0) {
          if (p1631 < 128) {
            f277(p1630, p1631);
            return 1;
          }
          if (p1631 < 256) {
            p1630.push(204);
            f277(p1630, p1631);
            return 2;
          }
          if (p1631 < 65536) {
            p1630.push(205);
            f279(p1630, p1631);
            return 3;
          }
          if (p1631 < 4294967296) {
            p1630.push(206);
            f281(p1630, p1631);
            return 5;
          }
          p1630.push(207);
          f283(p1630, p1631);
          return 9;
        } else {
          if (p1631 >= -32) {
            p1630.push(p1631 + 32 | 224);
            return 1;
          }
          if (p1631 >= -128) {
            p1630.push(208);
            f276(p1630, p1631);
            return 2;
          }
          if (p1631 >= -32768) {
            p1630.push(209);
            f278(p1630, p1631);
            return 3;
          }
          if (p1631 >= -2147483648) {
            p1630.push(210);
            f280(p1630, p1631);
            return 5;
          }
          p1630.push(211);
          f282(p1630, p1631);
          return 9;
        }
      }
      var v1270 = Object.freeze({
        "__proto__": null,
        boolean: f288,
        float32: f284,
        float64: f285,
        int16: f278,
        int32: f280,
        int64: f282,
        int8: f276,
        number: f290,
        string: f289,
        uint16: f279,
        uint32: f281,
        uint64: f283,
        uint8: f277,
        utf8Write: f275,
        writeFloat32: f286,
        writeFloat64: f287
      });
      function f291(p1632, p1633, p1634) {
        var vLS16 = "";
        var vLN0220 = 0;
        for (var vP1633 = p1633, v1271 = p1633 + p1634; vP1633 < v1271; vP1633++) {
          var v1272 = p1632[vP1633];
          if ((v1272 & 128) === 0) {
            vLS16 += String.fromCharCode(v1272);
            continue;
          }
          if ((v1272 & 224) === 192) {
            vLS16 += String.fromCharCode((v1272 & 31) << 6 | p1632[++vP1633] & 63);
            continue;
          }
          if ((v1272 & 240) === 224) {
            vLS16 += String.fromCharCode((v1272 & 15) << 12 | (p1632[++vP1633] & 63) << 6 | (p1632[++vP1633] & 63) << 0);
            continue;
          }
          if ((v1272 & 248) === 240) {
            vLN0220 = (v1272 & 7) << 18 | (p1632[++vP1633] & 63) << 12 | (p1632[++vP1633] & 63) << 6 | (p1632[++vP1633] & 63) << 0;
            if (vLN0220 >= 65536) {
              vLN0220 -= 65536;
              vLS16 += String.fromCharCode((vLN0220 >>> 10) + 55296, (vLN0220 & 1023) + 56320);
            } else {
              vLS16 += String.fromCharCode(vLN0220);
            }
            continue;
          }
          console.error("Invalid byte " + v1272.toString(16));
        }
        return vLS16;
      }
      function f292(p1635, p1636) {
        return f293(p1635, p1636) << 24 >> 24;
      }
      function f293(p1637, p1638) {
        return p1637[p1638.offset++];
      }
      function f294(p1639, p1640) {
        return f295(p1639, p1640) << 16 >> 16;
      }
      function f295(p1641, p1642) {
        return p1641[p1642.offset++] | p1641[p1642.offset++] << 8;
      }
      function f296(p1643, p1644) {
        return p1643[p1644.offset++] | p1643[p1644.offset++] << 8 | p1643[p1644.offset++] << 16 | p1643[p1644.offset++] << 24;
      }
      function f297(p1645, p1646) {
        return f296(p1645, p1646) >>> 0;
      }
      function f298(p1647, p1648) {
        return f302(p1647, p1648);
      }
      function f299(p1649, p1650) {
        return f303(p1649, p1650);
      }
      function f300(p1651, p1652) {
        var vF297 = f297(p1651, p1652);
        var v1273 = f296(p1651, p1652) * Math.pow(2, 32);
        return v1273 + vF297;
      }
      function f301(p1653, p1654) {
        var vF2972 = f297(p1653, p1654);
        var v1274 = f297(p1653, p1654) * Math.pow(2, 32);
        return v1274 + vF2972;
      }
      var v1275 = new Int32Array(2);
      var v1276 = new Float32Array(v1275.buffer);
      var v1277 = new Float64Array(v1275.buffer);
      function f302(p1655, p1656) {
        v1275[0] = f296(p1655, p1656);
        return v1276[0];
      }
      function f303(p1657, p1658) {
        v1275[0] = f296(p1657, p1658);
        v1275[1] = f296(p1657, p1658);
        return v1277[0];
      }
      function f304(p1659, p1660) {
        return f293(p1659, p1660) > 0;
      }
      function f305(p1661, p1662) {
        var v1278 = p1661[p1662.offset++];
        var v1279;
        if (v1278 < 192) {
          v1279 = v1278 & 31;
        } else if (v1278 === 217) {
          v1279 = f293(p1661, p1662);
        } else if (v1278 === 218) {
          v1279 = f295(p1661, p1662);
        } else if (v1278 === 219) {
          v1279 = f297(p1661, p1662);
        }
        var vF291 = f291(p1661, p1662.offset, v1279);
        p1662.offset += v1279;
        return vF291;
      }
      function f306(p1663, p1664) {
        var v1280 = p1663[p1664.offset];
        return v1280 < 192 && v1280 > 160 || v1280 === 217 || v1280 === 218 || v1280 === 219;
      }
      function f307(p1665, p1666) {
        var v1281 = p1665[p1666.offset++];
        if (v1281 < 128) {
          return v1281;
        } else if (v1281 === 202) {
          return f302(p1665, p1666);
        } else if (v1281 === 203) {
          return f303(p1665, p1666);
        } else if (v1281 === 204) {
          return f293(p1665, p1666);
        } else if (v1281 === 205) {
          return f295(p1665, p1666);
        } else if (v1281 === 206) {
          return f297(p1665, p1666);
        } else if (v1281 === 207) {
          return f301(p1665, p1666);
        } else if (v1281 === 208) {
          return f292(p1665, p1666);
        } else if (v1281 === 209) {
          return f294(p1665, p1666);
        } else if (v1281 === 210) {
          return f296(p1665, p1666);
        } else if (v1281 === 211) {
          return f300(p1665, p1666);
        } else if (v1281 > 223) {
          return (255 - v1281 + 1) * -1;
        }
      }
      function f308(p1667, p1668) {
        var v1282 = p1667[p1668.offset];
        return v1282 < 128 || v1282 >= 202 && v1282 <= 211;
      }
      function f309(p1669, p1670) {
        return p1669[p1670.offset] < 160;
      }
      function f310(p1671, p1672) {
        return p1671[p1672.offset - 1] === vLN255 && (p1671[p1672.offset] < 128 || p1671[p1672.offset] >= 202 && p1671[p1672.offset] <= 211);
      }
      var v1283 = Object.freeze({
        "__proto__": null,
        arrayCheck: f309,
        boolean: f304,
        float32: f298,
        float64: f299,
        int16: f294,
        int32: f296,
        int64: f300,
        int8: f292,
        number: f307,
        numberCheck: f308,
        readFloat32: f302,
        readFloat64: f303,
        string: f305,
        stringCheck: f306,
        switchStructureCheck: f310,
        uint16: f295,
        uint32: f297,
        uint64: f301,
        uint8: f293
      });
      var vF58 = function () {
        function f311(p1673) {
          var vThis141 = this;
          this.$changes = new vF52(this);
          this.$items = new Map();
          this.$indexes = new Map();
          this.$refId = 0;
          if (p1673) {
            p1673.forEach(function (p1674) {
              return vThis141.add(p1674);
            });
          }
        }
        f311.prototype.onAdd = function (p1675, p1676 = true) {
          return f257(this.$callbacks ||= [], p1389.OPERATION.ADD, p1675, p1676 ? this.$items : undefined);
        };
        f311.prototype.onRemove = function (p1677) {
          return f257(this.$callbacks ||= [], p1389.OPERATION.DELETE, p1677);
        };
        f311.prototype.onChange = function (p1678) {
          return f257(this.$callbacks ||= [], p1389.OPERATION.REPLACE, p1678);
        };
        f311.is = function (p1679) {
          return p1679.collection !== undefined;
        };
        f311.prototype.add = function (p1680) {
          var v1284 = this.$refId++;
          var v1285 = p1680.$changes !== undefined;
          if (v1285) {
            p1680.$changes.setParent(this, this.$changes.root, v1284);
          }
          this.$changes.indexes[v1284] = v1284;
          this.$indexes.set(v1284, v1284);
          this.$items.set(v1284, p1680);
          this.$changes.change(v1284);
          return v1284;
        };
        f311.prototype.at = function (p1681) {
          var v1286 = Array.from(this.$items.keys())[p1681];
          return this.$items.get(v1286);
        };
        f311.prototype.entries = function () {
          return this.$items.entries();
        };
        f311.prototype.delete = function (p1682) {
          var v1287 = this.$items.entries();
          var v1288;
          var v1289;
          while (v1289 = v1287.next()) {
            if (v1289.done) {
              break;
            }
            if (p1682 === v1289.value[1]) {
              v1288 = v1289.value[0];
              break;
            }
          }
          if (v1288 === undefined) {
            return false;
          }
          this.$changes.delete(v1288);
          this.$indexes.delete(v1288);
          return this.$items.delete(v1288);
        };
        f311.prototype.clear = function (p1683) {
          this.$changes.discard(true, true);
          this.$changes.indexes = {};
          this.$indexes.clear();
          if (p1683) {
            f258.call(this, p1683);
          }
          this.$items.clear();
          this.$changes.operation({
            index: 0,
            op: p1389.OPERATION.CLEAR
          });
          this.$changes.touchParents();
        };
        f311.prototype.has = function (p1684) {
          return Array.from(this.$items.values()).some(function (p1685) {
            return p1685 === p1684;
          });
        };
        f311.prototype.forEach = function (p1686) {
          var vThis142 = this;
          this.$items.forEach(function (p1687, p1688, p1689) {
            return p1686(p1687, p1688, vThis142);
          });
        };
        f311.prototype.values = function () {
          return this.$items.values();
        };
        Object.defineProperty(f311.prototype, "size", {
          get: function () {
            return this.$items.size;
          },
          enumerable: false,
          configurable: true
        });
        f311.prototype.setIndex = function (p1690, p1691) {
          this.$indexes.set(p1690, p1691);
        };
        f311.prototype.getIndex = function (p1692) {
          return this.$indexes.get(p1692);
        };
        f311.prototype.getByIndex = function (p1693) {
          return this.$items.get(this.$indexes.get(p1693));
        };
        f311.prototype.deleteByIndex = function (p1694) {
          var v1290 = this.$indexes.get(p1694);
          this.$items.delete(v1290);
          this.$indexes.delete(p1694);
        };
        f311.prototype.toArray = function () {
          return Array.from(this.$items.values());
        };
        f311.prototype.toJSON = function () {
          var vA35 = [];
          this.forEach(function (p1695, p1696) {
            vA35.push(typeof p1695.toJSON === "function" ? p1695.toJSON() : p1695);
          });
          return vA35;
        };
        f311.prototype.clone = function (p1697) {
          var v1291;
          if (p1697) {
            v1291 = Object.assign(new f311(), this);
          } else {
            v1291 = new f311();
            this.forEach(function (p1698) {
              if (p1698.$changes) {
                v1291.add(p1698.clone());
              } else {
                v1291.add(p1698);
              }
            });
          }
          return v1291;
        };
        return f311;
      }();
      var vF59 = function () {
        function f312(p1699) {
          var vThis143 = this;
          this.$changes = new vF52(this);
          this.$items = new Map();
          this.$indexes = new Map();
          this.$refId = 0;
          if (p1699) {
            p1699.forEach(function (p1700) {
              return vThis143.add(p1700);
            });
          }
        }
        f312.prototype.onAdd = function (p1701, p1702 = true) {
          return f257(this.$callbacks ||= [], p1389.OPERATION.ADD, p1701, p1702 ? this.$items : undefined);
        };
        f312.prototype.onRemove = function (p1703) {
          return f257(this.$callbacks ||= [], p1389.OPERATION.DELETE, p1703);
        };
        f312.prototype.onChange = function (p1704) {
          return f257(this.$callbacks ||= [], p1389.OPERATION.REPLACE, p1704);
        };
        f312.is = function (p1705) {
          return p1705.set !== undefined;
        };
        f312.prototype.add = function (p1706) {
          if (this.has(p1706)) {
            return false;
          }
          var v1292 = this.$refId++;
          if (p1706.$changes !== undefined) {
            p1706.$changes.setParent(this, this.$changes.root, v1292);
          }
          var v1293 = this.$changes.indexes[v1292]?.op ?? p1389.OPERATION.ADD;
          this.$changes.indexes[v1292] = v1292;
          this.$indexes.set(v1292, v1292);
          this.$items.set(v1292, p1706);
          this.$changes.change(v1292, v1293);
          return v1292;
        };
        f312.prototype.entries = function () {
          return this.$items.entries();
        };
        f312.prototype.delete = function (p1707) {
          var v1294 = this.$items.entries();
          var v1295;
          var v1296;
          while (v1296 = v1294.next()) {
            if (v1296.done) {
              break;
            }
            if (p1707 === v1296.value[1]) {
              v1295 = v1296.value[0];
              break;
            }
          }
          if (v1295 === undefined) {
            return false;
          }
          this.$changes.delete(v1295);
          this.$indexes.delete(v1295);
          return this.$items.delete(v1295);
        };
        f312.prototype.clear = function (p1708) {
          this.$changes.discard(true, true);
          this.$changes.indexes = {};
          this.$indexes.clear();
          if (p1708) {
            f258.call(this, p1708);
          }
          this.$items.clear();
          this.$changes.operation({
            index: 0,
            op: p1389.OPERATION.CLEAR
          });
          this.$changes.touchParents();
        };
        f312.prototype.has = function (p1709) {
          var v1297 = this.$items.values();
          var v1298 = false;
          var v1299;
          while (v1299 = v1297.next()) {
            if (v1299.done) {
              break;
            }
            if (p1709 === v1299.value) {
              v1298 = true;
              break;
            }
          }
          return v1298;
        };
        f312.prototype.forEach = function (p1710) {
          var vThis144 = this;
          this.$items.forEach(function (p1711, p1712, p1713) {
            return p1710(p1711, p1712, vThis144);
          });
        };
        f312.prototype.values = function () {
          return this.$items.values();
        };
        Object.defineProperty(f312.prototype, "size", {
          get: function () {
            return this.$items.size;
          },
          enumerable: false,
          configurable: true
        });
        f312.prototype.setIndex = function (p1714, p1715) {
          this.$indexes.set(p1714, p1715);
        };
        f312.prototype.getIndex = function (p1716) {
          return this.$indexes.get(p1716);
        };
        f312.prototype.getByIndex = function (p1717) {
          return this.$items.get(this.$indexes.get(p1717));
        };
        f312.prototype.deleteByIndex = function (p1718) {
          var v1300 = this.$indexes.get(p1718);
          this.$items.delete(v1300);
          this.$indexes.delete(p1718);
        };
        f312.prototype.toArray = function () {
          return Array.from(this.$items.values());
        };
        f312.prototype.toJSON = function () {
          var vA36 = [];
          this.forEach(function (p1719, p1720) {
            vA36.push(typeof p1719.toJSON === "function" ? p1719.toJSON() : p1719);
          });
          return vA36;
        };
        f312.prototype.clone = function (p1721) {
          var v1301;
          if (p1721) {
            v1301 = Object.assign(new f312(), this);
          } else {
            v1301 = new f312();
            this.forEach(function (p1722) {
              if (p1722.$changes) {
                v1301.add(p1722.clone());
              } else {
                v1301.add(p1722);
              }
            });
          }
          return v1301;
        };
        return f312;
      }();
      var vF60 = function () {
        function f313() {
          this.refIds = new WeakSet();
          this.containerIndexes = new WeakMap();
        }
        f313.prototype.addRefId = function (p1723) {
          if (!this.refIds.has(p1723)) {
            this.refIds.add(p1723);
            this.containerIndexes.set(p1723, new Set());
          }
        };
        f313.get = function (p1724) {
          if (p1724.$filterState === undefined) {
            p1724.$filterState = new f313();
          }
          return p1724.$filterState;
        };
        return f313;
      }();
      var vF61 = function () {
        function f314() {
          this.refs = new Map();
          this.refCounts = {};
          this.deletedRefs = new Set();
          this.nextUniqueId = 0;
        }
        f314.prototype.getNextUniqueId = function () {
          return this.nextUniqueId++;
        };
        f314.prototype.addRef = function (p1725, p1726, p1727 = true) {
          this.refs.set(p1725, p1726);
          if (p1727) {
            this.refCounts[p1725] = (this.refCounts[p1725] || 0) + 1;
          }
        };
        f314.prototype.removeRef = function (p1728) {
          var v1302 = this.refCounts[p1728];
          if (v1302 === undefined) {
            console.warn(`trying to remove reference ${p1728} that doesn't exist`);
            return;
          }
          if (v1302 === 0) {
            console.warn(`trying to remove reference ${p1728} with 0 refCount`);
            return;
          }
          this.refCounts[p1728] = v1302 - 1;
          this.deletedRefs.add(p1728);
        };
        f314.prototype.clearRefs = function () {
          this.refs.clear();
          this.deletedRefs.clear();
          this.refCounts = {};
        };
        f314.prototype.garbageCollectDeletedRefs = function () {
          var vThis145 = this;
          this.deletedRefs.forEach(function (p1729) {
            if (vThis145.refCounts[p1729] > 0) {
              return;
            }
            var v1303 = vThis145.refs.get(p1729);
            if (v1303 instanceof vF63) {
              for (var v1304 in v1303._definition.schema) {
                if (typeof v1303._definition.schema[v1304] !== "string" && v1303[v1304] && v1303[v1304].$changes) {
                  vThis145.removeRef(v1303[v1304].$changes.refId);
                }
              }
            } else {
              var v1305 = v1303.$changes.parent._definition;
              var v1306 = v1305.schema[v1305.fieldsByIndex[v1303.$changes.parentIndex]];
              if (typeof Object.values(v1306)[0] === "function") {
                Array.from(v1303.values()).forEach(function (p1730) {
                  return vThis145.removeRef(p1730.$changes.refId);
                });
              }
            }
            vThis145.refs.delete(p1729);
            delete vThis145.refCounts[p1729];
          });
          this.deletedRefs.clear();
        };
        return f314;
      }();
      var vF62 = function (p1731) {
        f252(f315, p1731);
        function f315() {
          return p1731 !== null && p1731.apply(this, arguments) || this;
        }
        return f315;
      }(Error);
      function f316(p1732, p1733, p1734, p1735) {
        var v1307;
        var v1308 = false;
        switch (p1733) {
          case "number":
          case "int8":
          case "uint8":
          case "int16":
          case "uint16":
          case "int32":
          case "uint32":
          case "int64":
          case "uint64":
          case "float32":
          case "float64":
            v1307 = "number";
            if (isNaN(p1732)) {
              console.log(`trying to encode "NaN" in ${p1734.constructor.name}#${p1735}`);
            }
            break;
          case "string":
            v1307 = "string";
            v1308 = true;
            break;
          case "boolean":
            return;
        }
        if (typeof p1732 !== v1307 && (!v1308 || v1308 && p1732 !== null)) {
          var v1309 = `'${JSON.stringify(p1732)}'${p1732 && p1732.constructor && ` (${p1732.constructor.name})` || ""}`;
          throw new vF62(`a '${v1307}' was expected, but ${v1309} was provided in ${p1734.constructor.name}#${p1735}`);
        }
      }
      function f317(p1736, p1737, p1738, p1739) {
        if (!(p1736 instanceof p1737)) {
          throw new vF62(`a '${p1737.name}' was expected, but '${p1736.constructor.name}' was provided in ${p1738.constructor.name}#${p1739}`);
        }
      }
      function f318(p1740, p1741, p1742, p1743, p1744) {
        f316(p1742, p1740, p1743, p1744);
        var v1310 = v1270[p1740];
        if (v1310) {
          v1310(p1741, p1742);
        } else {
          throw new vF62(`a '${p1740}' was expected, but ${p1742} was provided in ${p1743.constructor.name}#${p1744}`);
        }
      }
      function f319(p1745, p1746, p1747) {
        return v1283[p1745](p1746, p1747);
      }
      var vF63 = function () {
        function f320() {
          var vA37 = [];
          for (var vLN0221 = 0; vLN0221 < arguments.length; vLN0221++) {
            vA37[vLN0221] = arguments[vLN0221];
          }
          Object.defineProperties(this, {
            $changes: {
              value: new vF52(this, undefined, new vF61()),
              enumerable: false,
              writable: true
            },
            $callbacks: {
              value: undefined,
              enumerable: false,
              writable: true
            }
          });
          var v1311 = this._definition.descriptors;
          if (v1311) {
            Object.defineProperties(this, v1311);
          }
          if (vA37[0]) {
            this.assign(vA37[0]);
          }
        }
        f320.onError = function (p1748) {
          console.error(p1748);
        };
        f320.is = function (p1749) {
          return p1749._definition && p1749._definition.schema !== undefined;
        };
        f320.prototype.onChange = function (p1750) {
          return f257(this.$callbacks ||= {}, p1389.OPERATION.REPLACE, p1750);
        };
        f320.prototype.onRemove = function (p1751) {
          return f257(this.$callbacks ||= {}, p1389.OPERATION.DELETE, p1751);
        };
        f320.prototype.assign = function (p1752) {
          Object.assign(this, p1752);
          return this;
        };
        Object.defineProperty(f320.prototype, "_definition", {
          get: function () {
            return this.constructor._definition;
          },
          enumerable: false,
          configurable: true
        });
        f320.prototype.setDirty = function (p1753, p1754) {
          this.$changes.change(p1753, p1754);
        };
        f320.prototype.listen = function (p1755, p1756, p1757) {
          var vThis146 = this;
          if (p1757 === undefined) {
            p1757 = true;
          }
          if (!this.$callbacks) {
            this.$callbacks = {};
          }
          if (!this.$callbacks[p1755]) {
            this.$callbacks[p1755] = [];
          }
          this.$callbacks[p1755].push(p1756);
          if (p1757 && this[p1755] !== undefined) {
            p1756(this[p1755], undefined);
          }
          return function () {
            return f259(vThis146.$callbacks[p1755], vThis146.$callbacks[p1755].indexOf(p1756));
          };
        };
        f320.prototype.decode = function (p1758, p1759 = {
          offset: 0
        }, p1760 = this) {
          var vA38 = [];
          var v1312 = this.$changes.root;
          var v1313 = p1758.length;
          var vLN0222 = 0;
          v1312.refs.set(vLN0222, this);
          while (p1759.offset < v1313) {
            var v1314 = p1758[p1759.offset++];
            if (v1314 == vLN255) {
              vLN0222 = f307(p1758, p1759);
              var v1315 = v1312.refs.get(vLN0222);
              if (!v1315) {
                throw new Error(`"refId" not found: ${vLN0222}`);
              }
              p1760 = v1315;
              continue;
            }
            var v1316 = p1760.$changes;
            var v1317 = p1760._definition !== undefined;
            var v1318 = v1317 ? v1314 >> 6 << 6 : v1314;
            if (v1318 === p1389.OPERATION.CLEAR) {
              p1760.clear(vA38);
              continue;
            }
            var v1319 = v1317 ? v1314 % (v1318 || 255) : f307(p1758, p1759);
            var v1320 = v1317 ? p1760._definition.fieldsByIndex[v1319] : "";
            var v1321 = v1316.getType(v1319);
            var vUndefined20 = undefined;
            var vUndefined21 = undefined;
            var vUndefined22 = undefined;
            if (!v1317) {
              vUndefined21 = p1760.getByIndex(v1319);
              if ((v1318 & p1389.OPERATION.ADD) === p1389.OPERATION.ADD) {
                vUndefined22 = p1760 instanceof vF55 ? f305(p1758, p1759) : v1319;
                p1760.setIndex(v1319, vUndefined22);
              } else {
                vUndefined22 = p1760.getIndex(v1319);
              }
            } else {
              vUndefined21 = p1760[`_${v1320}`];
            }
            if ((v1318 & p1389.OPERATION.DELETE) === p1389.OPERATION.DELETE) {
              if (v1318 !== p1389.OPERATION.DELETE_AND_ADD) {
                p1760.deleteByIndex(v1319);
              }
              if (vUndefined21 && vUndefined21.$changes) {
                v1312.removeRef(vUndefined21.$changes.refId);
              }
              vUndefined20 = null;
            }
            if (v1320 === undefined) {
              console.warn("@colyseus/schema: definition mismatch");
              var vO69 = {
                offset: p1759.offset
              };
              while (p1759.offset < v1313) {
                if (f310(p1758, p1759)) {
                  vO69.offset = p1759.offset + 1;
                  if (v1312.refs.has(f307(p1758, vO69))) {
                    break;
                  }
                }
                p1759.offset++;
              }
              continue;
            } else if (v1318 === p1389.OPERATION.DELETE) ;else if (f320.is(v1321)) {
              var vF307 = f307(p1758, p1759);
              vUndefined20 = v1312.refs.get(vF307);
              if (v1318 !== p1389.OPERATION.REPLACE) {
                var v1322 = this.getSchemaType(p1758, p1759, v1321);
                if (!vUndefined20) {
                  vUndefined20 = this.createTypeInstance(v1322);
                  vUndefined20.$changes.refId = vF307;
                  if (vUndefined21) {
                    vUndefined20.$callbacks = vUndefined21.$callbacks;
                    if (vUndefined21.$changes.refId && vF307 !== vUndefined21.$changes.refId) {
                      v1312.removeRef(vUndefined21.$changes.refId);
                    }
                  }
                }
                v1312.addRef(vF307, vUndefined20, vUndefined20 !== vUndefined21);
              }
            } else if (typeof v1321 === "string") {
              vUndefined20 = f319(v1321, p1758, p1759);
            } else {
              var vF265 = f265(Object.keys(v1321)[0]);
              var vF3072 = f307(p1758, p1759);
              var v1323 = v1312.refs.has(vF3072) ? vUndefined21 || v1312.refs.get(vF3072) : new vF265.constructor();
              vUndefined20 = v1323.clone(true);
              vUndefined20.$changes.refId = vF3072;
              if (vUndefined21) {
                vUndefined20.$callbacks = vUndefined21.$callbacks;
                if (vUndefined21.$changes.refId && vF3072 !== vUndefined21.$changes.refId) {
                  v1312.removeRef(vUndefined21.$changes.refId);
                  var v1324 = vUndefined21.entries();
                  var vUndefined23 = undefined;
                  while ((vUndefined23 = v1324.next()) && !vUndefined23.done) {
                    var v1325 = vUndefined23.value;
                    var v1326 = v1325[0];
                    var v1327 = v1325[1];
                    vA38.push({
                      refId: vF3072,
                      op: p1389.OPERATION.DELETE,
                      field: v1326,
                      value: undefined,
                      previousValue: v1327
                    });
                  }
                }
              }
              v1312.addRef(vF3072, vUndefined20, v1323 !== vUndefined21);
            }
            if (vUndefined20 !== null && vUndefined20 !== undefined) {
              if (vUndefined20.$changes) {
                vUndefined20.$changes.setParent(v1316.ref, v1316.root, v1319);
              }
              if (p1760 instanceof f320) {
                p1760[v1320] = vUndefined20;
              } else if (p1760 instanceof vF55) {
                var v1326 = vUndefined22;
                p1760.$items.set(v1326, vUndefined20);
                p1760.$changes.allChanges.add(v1319);
              } else if (p1760 instanceof vF54) {
                p1760.setAt(v1319, vUndefined20);
              } else if (p1760 instanceof vF58) {
                var v1328 = p1760.add(vUndefined20);
                p1760.setIndex(v1319, v1328);
              } else if (p1760 instanceof vF59) {
                var v1328 = p1760.add(vUndefined20);
                if (v1328 !== false) {
                  p1760.setIndex(v1319, v1328);
                }
              }
            }
            if (vUndefined21 !== vUndefined20) {
              vA38.push({
                refId: vLN0222,
                op: v1318,
                field: v1320,
                dynamicIndex: vUndefined22,
                value: vUndefined20,
                previousValue: vUndefined21
              });
            }
          }
          this._triggerChanges(vA38);
          v1312.garbageCollectDeletedRefs();
          return vA38;
        };
        f320.prototype.encode = function (p1761 = false, p1762 = [], p1763 = false) {
          var v1329 = this.$changes;
          var v1330 = new WeakSet();
          var vA39 = [v1329];
          var vLN114 = 1;
          for (var vLN0223 = 0; vLN0223 < vLN114; vLN0223++) {
            var v1331 = vA39[vLN0223];
            var v1332 = v1331.ref;
            var v1333 = v1332 instanceof f320;
            v1331.ensureRefId();
            v1330.add(v1331);
            if (v1331 !== v1329 && (v1331.changed || p1761)) {
              f277(p1762, vLN255);
              f290(p1762, v1331.refId);
            }
            var v1334 = p1761 ? Array.from(v1331.allChanges) : Array.from(v1331.changes.values());
            for (var vLN0224 = 0, v1335 = v1334.length; vLN0224 < v1335; vLN0224++) {
              var v1336 = p1761 ? {
                op: p1389.OPERATION.ADD,
                index: v1334[vLN0224]
              } : v1334[vLN0224];
              var v1337 = v1336.index;
              var v1338 = v1333 ? v1332._definition.fieldsByIndex && v1332._definition.fieldsByIndex[v1337] : v1337;
              var v1339 = p1762.length;
              if (v1336.op !== p1389.OPERATION.TOUCH) {
                if (v1333) {
                  f277(p1762, v1337 | v1336.op);
                } else {
                  f277(p1762, v1336.op);
                  if (v1336.op === p1389.OPERATION.CLEAR) {
                    continue;
                  }
                  f290(p1762, v1337);
                }
              }
              if (!v1333 && (v1336.op & p1389.OPERATION.ADD) == p1389.OPERATION.ADD) {
                if (v1332 instanceof vF55) {
                  var v1340 = v1331.ref.$indexes.get(v1337);
                  f289(p1762, v1340);
                }
              }
              if (v1336.op === p1389.OPERATION.DELETE) {
                continue;
              }
              var v1341 = v1331.getType(v1337);
              var v1342 = v1331.getValue(v1337);
              if (v1342 && v1342.$changes && !v1330.has(v1342.$changes)) {
                vA39.push(v1342.$changes);
                v1342.$changes.ensureRefId();
                vLN114++;
              }
              if (v1336.op === p1389.OPERATION.TOUCH) {
                continue;
              }
              if (f320.is(v1341)) {
                f317(v1342, v1341, v1332, v1338);
                f290(p1762, v1342.$changes.refId);
                if ((v1336.op & p1389.OPERATION.ADD) === p1389.OPERATION.ADD) {
                  this.tryEncodeTypeId(p1762, v1341, v1342.constructor);
                }
              } else if (typeof v1341 === "string") {
                f318(v1341, p1762, v1342, v1332, v1338);
              } else {
                var vF2652 = f265(Object.keys(v1341)[0]);
                f317(v1332[`_${v1338}`], vF2652.constructor, v1332, v1338);
                f290(p1762, v1342.$changes.refId);
              }
              if (p1763) {
                v1331.cache(v1337, p1762.slice(v1339));
              }
            }
            if (!p1761 && !p1763) {
              v1331.discard();
            }
          }
          return p1762;
        };
        f320.prototype.encodeAll = function (p1764) {
          return this.encode(true, [], p1764);
        };
        f320.prototype.applyFilters = function (p1765, p1766 = false) {
          var vThis147 = this;
          var v1343 = new Set();
          var v1344 = vF60.get(p1765);
          var vA40 = [this.$changes];
          var vLN115 = 1;
          var vA41 = [];
          var vF64 = function (p1767) {
            var v1345 = vA40[p1767];
            if (v1343.has(v1345.refId)) {
              return "continue";
            }
            var v1346 = v1345.ref;
            var v1347 = v1346 instanceof f320;
            f277(vA41, vLN255);
            f290(vA41, v1345.refId);
            var v1348 = v1344.refIds.has(v1345);
            var v1349 = p1766 || !v1348;
            v1344.addRefId(v1345);
            var v1350 = v1344.containerIndexes.get(v1345);
            var v1351 = v1349 ? Array.from(v1345.allChanges) : Array.from(v1345.changes.values());
            if (!p1766 && v1347 && v1346._definition.indexesWithFilters) {
              var v1352 = v1346._definition.indexesWithFilters;
              v1352.forEach(function (p1768) {
                if (!v1350.has(p1768) && v1345.allChanges.has(p1768)) {
                  if (v1349) {
                    v1351.push(p1768);
                  } else {
                    v1351.push({
                      op: p1389.OPERATION.ADD,
                      index: p1768
                    });
                  }
                }
              });
            }
            for (var vLN0225 = 0, v1353 = v1351.length; vLN0225 < v1353; vLN0225++) {
              var v1354 = v1349 ? {
                op: p1389.OPERATION.ADD,
                index: v1351[vLN0225]
              } : v1351[vLN0225];
              if (v1354.op === p1389.OPERATION.CLEAR) {
                f277(vA41, v1354.op);
                continue;
              }
              var v1355 = v1354.index;
              if (v1354.op === p1389.OPERATION.DELETE) {
                if (v1347) {
                  f277(vA41, v1354.op | v1355);
                } else {
                  f277(vA41, v1354.op);
                  f290(vA41, v1355);
                }
                continue;
              }
              var v1356 = v1345.getValue(v1355);
              var v1357 = v1345.getType(v1355);
              if (v1347) {
                var v1358 = v1346._definition.filters && v1346._definition.filters[v1355];
                if (v1358 && !v1358.call(v1346, p1765, v1356, vThis147)) {
                  if (v1356 && v1356.$changes) {
                    v1343.add(v1356.$changes.refId);
                  }
                  continue;
                }
              } else {
                var v1359 = v1345.parent;
                var v1358 = v1345.getChildrenFilter();
                if (v1358 && !v1358.call(v1359, p1765, v1346.$indexes.get(v1355), v1356, vThis147)) {
                  if (v1356 && v1356.$changes) {
                    v1343.add(v1356.$changes.refId);
                  }
                  continue;
                }
              }
              if (v1356.$changes) {
                vA40.push(v1356.$changes);
                vLN115++;
              }
              if (v1354.op !== p1389.OPERATION.TOUCH) {
                if (v1354.op === p1389.OPERATION.ADD || v1347) {
                  vA41.push.apply(vA41, v1345.caches[v1355] ?? []);
                  v1350.add(v1355);
                } else if (v1350.has(v1355)) {
                  vA41.push.apply(vA41, v1345.caches[v1355] ?? []);
                } else {
                  v1350.add(v1355);
                  f277(vA41, p1389.OPERATION.ADD);
                  f290(vA41, v1355);
                  if (v1346 instanceof vF55) {
                    var v1360 = v1345.ref.$indexes.get(v1355);
                    f289(vA41, v1360);
                  }
                  if (v1356.$changes) {
                    f290(vA41, v1356.$changes.refId);
                  } else {
                    v1270[v1357](vA41, v1356);
                  }
                }
              } else if (v1356.$changes && !v1347) {
                f277(vA41, p1389.OPERATION.ADD);
                f290(vA41, v1355);
                if (v1346 instanceof vF55) {
                  var v1360 = v1345.ref.$indexes.get(v1355);
                  f289(vA41, v1360);
                }
                f290(vA41, v1356.$changes.refId);
              }
            }
          };
          for (var vLN0226 = 0; vLN0226 < vLN115; vLN0226++) {
            vF64(vLN0226);
          }
          return vA41;
        };
        f320.prototype.clone = function () {
          var v1361 = new this.constructor();
          var v1362 = this._definition.schema;
          for (var v1363 in v1362) {
            if (typeof this[v1363] === "object" && typeof this[v1363]?.clone === "function") {
              v1361[v1363] = this[v1363].clone();
            } else {
              v1361[v1363] = this[v1363];
            }
          }
          return v1361;
        };
        f320.prototype.toJSON = function () {
          var v1364 = this._definition.schema;
          var v1365 = this._definition.deprecated;
          var vO70 = {};
          for (var v1366 in v1364) {
            if (!v1365[v1366] && this[v1366] !== null && typeof this[v1366] !== "undefined") {
              vO70[v1366] = typeof this[v1366].toJSON === "function" ? this[v1366].toJSON() : this[`_${v1366}`];
            }
          }
          return vO70;
        };
        f320.prototype.discardAllChanges = function () {
          this.$changes.discardAll();
        };
        f320.prototype.getByIndex = function (p1769) {
          return this[this._definition.fieldsByIndex[p1769]];
        };
        f320.prototype.deleteByIndex = function (p1770) {
          this[this._definition.fieldsByIndex[p1770]] = undefined;
        };
        f320.prototype.tryEncodeTypeId = function (p1771, p1772, p1773) {
          if (p1772._typeid !== p1773._typeid) {
            f277(p1771, vLN213);
            f290(p1771, p1773._typeid);
          }
        };
        f320.prototype.getSchemaType = function (p1774, p1775, p1776) {
          var v1367;
          if (p1774[p1775.offset] === vLN213) {
            p1775.offset++;
            v1367 = this.constructor._context.get(f307(p1774, p1775));
          }
          return v1367 || p1776;
        };
        f320.prototype.createTypeInstance = function (p1777) {
          var v1368 = new p1777();
          v1368.$changes.root = this.$changes.root;
          return v1368;
        };
        f320.prototype._triggerChanges = function (p1778) {
          var v1369;
          var v1370;
          var v1371;
          var v1372;
          var v1373;
          var v1374;
          var v1375;
          var v1376;
          var v1377 = new Set();
          var v1378 = this.$changes.root.refs;
          var vF65 = function (p1779) {
            var v1379 = p1778[p1779];
            var v1380 = v1379.refId;
            var v1381 = v1378.get(v1380);
            var v1382 = v1381.$callbacks;
            if ((v1379.op & p1389.OPERATION.DELETE) === p1389.OPERATION.DELETE && v1379.previousValue instanceof f320) {
              if ((v1369 = v1379.previousValue.$callbacks?.[p1389.OPERATION.DELETE]) === null || v1369 === undefined) {
                undefined;
              } else {
                v1369.forEach(function (p1780) {
                  return p1780();
                });
              }
            }
            if (!v1382) {
              return "continue";
            }
            if (v1381 instanceof f320) {
              if (!v1377.has(v1380)) {
                try {
                  if ((v1370 = v1382?.[p1389.OPERATION.REPLACE]) === null || v1370 === undefined) {
                    undefined;
                  } else {
                    v1370.forEach(function (p1781) {
                      return p1781();
                    });
                  }
                } catch (e62) {
                  f320.onError(e62);
                }
              }
              try {
                if (v1382.hasOwnProperty(v1379.field)) {
                  if ((v1371 = v1382[v1379.field]) === null || v1371 === undefined) {
                    undefined;
                  } else {
                    v1371.forEach(function (p1782) {
                      return p1782(v1379.value, v1379.previousValue);
                    });
                  }
                }
              } catch (e63) {
                f320.onError(e63);
              }
            } else {
              if (v1379.op === p1389.OPERATION.ADD && v1379.previousValue === undefined) {
                if ((v1372 = v1382[p1389.OPERATION.ADD]) === null || v1372 === undefined) {
                  undefined;
                } else {
                  v1372.forEach(function (p1783) {
                    return p1783(v1379.value, v1379.dynamicIndex ?? v1379.field);
                  });
                }
              } else if (v1379.op === p1389.OPERATION.DELETE) {
                if (v1379.previousValue !== undefined) {
                  if ((v1373 = v1382[p1389.OPERATION.DELETE]) === null || v1373 === undefined) {
                    undefined;
                  } else {
                    v1373.forEach(function (p1784) {
                      return p1784(v1379.previousValue, v1379.dynamicIndex ?? v1379.field);
                    });
                  }
                }
              } else if (v1379.op === p1389.OPERATION.DELETE_AND_ADD) {
                if (v1379.previousValue !== undefined) {
                  if ((v1374 = v1382[p1389.OPERATION.DELETE]) === null || v1374 === undefined) {
                    undefined;
                  } else {
                    v1374.forEach(function (p1785) {
                      return p1785(v1379.previousValue, v1379.dynamicIndex ?? v1379.field);
                    });
                  }
                }
                if ((v1375 = v1382[p1389.OPERATION.ADD]) === null || v1375 === undefined) {
                  undefined;
                } else {
                  v1375.forEach(function (p1786) {
                    return p1786(v1379.value, v1379.dynamicIndex ?? v1379.field);
                  });
                }
              }
              if (v1379.value !== v1379.previousValue) {
                if ((v1376 = v1382[p1389.OPERATION.REPLACE]) === null || v1376 === undefined) {
                  undefined;
                } else {
                  v1376.forEach(function (p1787) {
                    return p1787(v1379.value, v1379.dynamicIndex ?? v1379.field);
                  });
                }
              }
            }
            v1377.add(v1380);
          };
          for (var vLN0227 = 0; vLN0227 < p1778.length; vLN0227++) {
            vF65(vLN0227);
          }
        };
        f320._definition = vF56.create();
        return f320;
      }();
      function f321(p1788) {
        var vA42 = [p1788.$changes];
        var vLN116 = 1;
        var vO71 = {};
        var vVO71 = vO71;
        var vF66 = function (p1789) {
          var v1383 = vA42[p1789];
          v1383.changes.forEach(function (p1790) {
            var v1384 = v1383.ref;
            var v1385 = p1790.index;
            var v1386 = v1384._definition ? v1384._definition.fieldsByIndex[v1385] : v1384.$indexes.get(v1385);
            vVO71[v1386] = v1383.getValue(v1385);
          });
        };
        for (var vLN0228 = 0; vLN0228 < vLN116; vLN0228++) {
          vF66(vLN0228);
        }
        return vO71;
      }
      var vO72 = {
        context: new vF57()
      };
      var vF67 = function (p1791) {
        f252(f322, p1791);
        function f322() {
          return p1791 !== null && p1791.apply(this, arguments) || this;
        }
        f254([f269("string", vO72)], f322.prototype, "name", undefined);
        f254([f269("string", vO72)], f322.prototype, "type", undefined);
        f254([f269("number", vO72)], f322.prototype, "referencedType", undefined);
        return f322;
      }(vF63);
      var vF68 = function (p1792) {
        f252(f323, p1792);
        function f323() {
          var v1387 = p1792 !== null && p1792.apply(this, arguments) || this;
          v1387.fields = new vF54();
          return v1387;
        }
        f254([f269("number", vO72)], f323.prototype, "id", undefined);
        f254([f269([vF67], vO72)], f323.prototype, "fields", undefined);
        return f323;
      }(vF63);
      var vF69 = function (p1793) {
        f252(f324, p1793);
        function f324() {
          var v1388 = p1793 !== null && p1793.apply(this, arguments) || this;
          v1388.types = new vF54();
          return v1388;
        }
        f324.encode = function (p1794) {
          var v1389 = p1794.constructor;
          var v1390 = new f324();
          v1390.rootType = v1389._typeid;
          var vF70 = function (p1795, p1796) {
            for (var v1391 in p1796) {
              var v1392 = new vF67();
              v1392.name = v1391;
              var vUndefined24 = undefined;
              if (typeof p1796[v1391] === "string") {
                vUndefined24 = p1796[v1391];
              } else {
                var v1393 = p1796[v1391];
                var vUndefined25 = undefined;
                if (vF63.is(v1393)) {
                  vUndefined24 = "ref";
                  vUndefined25 = p1796[v1391];
                } else {
                  vUndefined24 = Object.keys(v1393)[0];
                  if (typeof v1393[vUndefined24] === "string") {
                    vUndefined24 += ":" + v1393[vUndefined24];
                  } else {
                    vUndefined25 = v1393[vUndefined24];
                  }
                }
                v1392.referencedType = vUndefined25 ? vUndefined25._typeid : -1;
              }
              v1392.type = vUndefined24;
              p1795.fields.push(v1392);
            }
            v1390.types.push(p1795);
          };
          var v1394 = v1389._context?.types;
          for (var v1395 in v1394) {
            var v1396 = new vF68();
            v1396.id = Number(v1395);
            vF70(v1396, v1394[v1395]._definition.schema);
          }
          return v1390.encodeAll();
        };
        f324.decode = function (p1797, p1798) {
          var v1397 = new vF57();
          var v1398 = new f324();
          v1398.decode(p1797, p1798);
          var v1399 = v1398.types.reduce(function (p1799, p1800) {
            var vF71 = function (p1801) {
              f252(f325, p1801);
              function f325() {
                return p1801 !== null && p1801.apply(this, arguments) || this;
              }
              return f325;
            }(vF63);
            var v1400 = p1800.id;
            p1799[v1400] = vF71;
            v1397.add(vF71, v1400);
            return p1799;
          }, {});
          v1398.types.forEach(function (p1802) {
            var v1401 = v1399[p1802.id];
            p1802.fields.forEach(function (p1803) {
              var v1402;
              if (p1803.referencedType !== undefined) {
                var v1403 = p1803.type;
                var v1404 = v1399[p1803.referencedType];
                if (!v1404) {
                  var v1405 = p1803.type.split(":");
                  v1403 = v1405[0];
                  v1404 = v1405[1];
                }
                if (v1403 === "ref") {
                  f269(v1404, {
                    context: v1397
                  })(v1401.prototype, p1803.name);
                } else {
                  f269((v1402 = {}, v1402[v1403] = v1404, v1402), {
                    context: v1397
                  })(v1401.prototype, p1803.name);
                }
              } else {
                f269(p1803.type, {
                  context: v1397
                })(v1401.prototype, p1803.name);
              }
            });
          });
          var v1406 = v1399[v1398.rootType];
          var v1407 = new v1406();
          for (var v1408 in v1406._definition.schema) {
            var v1409 = v1406._definition.schema[v1408];
            if (typeof v1409 !== "string") {
              v1407[v1408] = typeof v1409 === "function" ? new v1409() : new (f265(Object.keys(v1409)[0]).constructor)();
            }
          }
          return v1407;
        };
        f254([f269([vF68], vO72)], f324.prototype, "types", undefined);
        f254([f269("number", vO72)], f324.prototype, "rootType", undefined);
        return f324;
      }(vF63);
      f264("map", {
        constructor: vF55
      });
      f264("array", {
        constructor: vF54
      });
      f264("set", {
        constructor: vF59
      });
      f264("collection", {
        constructor: vF58
      });
      p1389.ArraySchema = vF54;
      p1389.CollectionSchema = vF58;
      p1389.Context = vF57;
      p1389.MapSchema = vF55;
      p1389.Reflection = vF69;
      p1389.ReflectionField = vF67;
      p1389.ReflectionType = vF68;
      p1389.Schema = vF63;
      p1389.SchemaDefinition = vF56;
      p1389.SetSchema = vF59;
      p1389.decode = v1283;
      p1389.defineTypes = f273;
      p1389.deprecated = f272;
      p1389.dumpChanges = f321;
      p1389.encode = v1270;
      p1389.filter = f270;
      p1389.filterChildren = f271;
      p1389.hasFilter = f267;
      p1389.registerType = f264;
      p1389.type = f269;
    });
  }, function (p1804, p1805, p1806) {
    'use strict';

    var v1410 = this && this.__createBinding || (Object.create ? function (p1807, p1808, p1809, p1810 = p1809) {
      var v1411 = Object.getOwnPropertyDescriptor(p1808, p1809);
      if (!v1411 || ("get" in v1411 ? !p1808.__esModule : v1411.writable || v1411.configurable)) {
        v1411 = {
          enumerable: true,
          get: function () {
            return p1808[p1809];
          }
        };
      }
      Object.defineProperty(p1807, p1810, v1411);
    } : function (p1811, p1812, p1813, p1814 = p1813) {
      p1811[p1814] = p1812[p1813];
    });
    var v1412 = this && this.__setModuleDefault || (Object.create ? function (p1815, p1816) {
      Object.defineProperty(p1815, "default", {
        enumerable: true,
        value: p1816
      });
    } : function (p1817, p1818) {
      p1817.default = p1818;
    });
    var v1413 = this && this.__importStar || function (p1819) {
      if (p1819 && p1819.__esModule) {
        return p1819;
      }
      var vO73 = {};
      if (p1819 != null) {
        for (var v1414 in p1819) {
          if (v1414 !== "default" && Object.prototype.hasOwnProperty.call(p1819, v1414)) {
            v1410(vO73, p1819, v1414);
          }
        }
      }
      v1412(vO73, p1819);
      return vO73;
    };
    Object.defineProperty(p1805, "__esModule", {
      value: true
    });
    p1805.HTTP = undefined;
    const vP1806 = p1806(5);
    const vV1413 = v1413(p1806(17));
    class C8 {
      constructor(p1820, p1821 = {}) {
        this.client = p1820;
        this.headers = p1821;
      }
      get(p1822, p1823 = {}) {
        return this.request("get", p1822, p1823);
      }
      post(p1824, p1825 = {}) {
        return this.request("post", p1824, p1825);
      }
      del(p1826, p1827 = {}) {
        return this.request("del", p1826, p1827);
      }
      put(p1828, p1829 = {}) {
        return this.request("put", p1828, p1829);
      }
      request(p1830, p1831, p1832 = {}) {
        return vV1413[p1830](this.client.getHttpEndpoint(p1831), this.getOptions(p1832)).catch(p1833 => {
          const v1415 = p1833.statusCode;
          const v1416 = p1833.data?.error || p1833.statusMessage || p1833.message;
          if (!v1415 && !v1416) {
            throw p1833;
          }
          throw new vP1806.ServerError(v1415, v1416);
        });
      }
      getOptions(p1834) {
        p1834.headers = Object.assign({}, this.headers, p1834.headers);
        if (this.authToken) {
          p1834.headers.Authorization = "Bearer " + this.authToken;
        }
        if (typeof cc !== "undefined" && cc.sys && cc.sys.isNative) {} else {
          p1834.withCredentials = true;
        }
        return p1834;
      }
    }
    p1805.HTTP = C8;
  }, (p1835, p1836, p1837) => {
    'use strict';

    p1837.r(p1836);
    p1837.d(p1836, {
      del: () => v1426,
      get: () => v1423,
      patch: () => v1425,
      post: () => v1424,
      put: () => v1427,
      send: () => f327
    });
    function f326(p1838, p1839) {
      p1839.headers = p1838.headers || {};
      p1839.statusMessage = p1838.statusText;
      p1839.statusCode = p1838.status;
      p1839.data = p1838.response;
    }
    function f327(p1840, p1841, p1842) {
      return new Promise(function (p1843, p1844) {
        p1842 = p1842 || {};
        var v1417 = new XMLHttpRequest();
        var v1418;
        var v1419;
        var v1420;
        var v1421 = p1842.body;
        var v1422 = p1842.headers || {};
        if (p1842.timeout) {
          v1417.timeout = p1842.timeout;
        }
        v1417.ontimeout = v1417.onerror = function (p1845) {
          p1845.timeout = p1845.type == "timeout";
          p1844(p1845);
        };
        v1417.open(p1840, p1841.href || p1841);
        v1417.onload = function () {
          v1420 = v1417.getAllResponseHeaders().trim().split(/[\r\n]+/);
          f326(v1417, v1417);
          while (v1419 = v1420.shift()) {
            v1419 = v1419.split(": ");
            v1417.headers[v1419.shift().toLowerCase()] = v1419.join(": ");
          }
          v1419 = v1417.headers["content-type"];
          if (v1419 && !!~v1419.indexOf("application/json")) {
            try {
              v1417.data = JSON.parse(v1417.data, p1842.reviver);
            } catch (e64) {
              f326(v1417, e64);
              return p1844(e64);
            }
          }
          (v1417.status >= 400 ? p1844 : p1843)(v1417);
        };
        if (typeof FormData !== "undefined" && v1421 instanceof FormData) {} else if (v1421 && typeof v1421 == "object") {
          v1422["content-type"] = "application/json";
          v1421 = JSON.stringify(v1421);
        }
        v1417.withCredentials = !!p1842.withCredentials;
        for (v1418 in v1422) {
          v1417.setRequestHeader(v1418, v1422[v1418]);
        }
        v1417.send(v1421);
      });
    }
    var v1423 = f327.bind(f327, "GET");
    var v1424 = f327.bind(f327, "POST");
    var v1425 = f327.bind(f327, "PATCH");
    var v1426 = f327.bind(f327, "DELETE");
    var v1427 = f327.bind(f327, "PUT");
  }, function (p1846, p1847, p1848) {
    'use strict';

    var v1428 = this && this.__awaiter || function (p1849, p1850, p1851, p1852) {
      function f328(p1853) {
        if (p1853 instanceof p1851) {
          return p1853;
        } else {
          return new p1851(function (p1854) {
            p1854(p1853);
          });
        }
      }
      return new (p1851 ||= Promise)(function (p1855, p1856) {
        function f329(p1857) {
          try {
            f331(p1852.next(p1857));
          } catch (e65) {
            p1856(e65);
          }
        }
        function f330(p1858) {
          try {
            f331(p1852.throw(p1858));
          } catch (e66) {
            p1856(e66);
          }
        }
        function f331(p1859) {
          if (p1859.done) {
            p1855(p1859.value);
          } else {
            f328(p1859.value).then(f329, f330);
          }
        }
        f331((p1852 = p1852.apply(p1849, p1850 || [])).next());
      });
    };
    var v1429 = this && this.__classPrivateFieldGet || function (p1860, p1861, p1862, p1863) {
      if (p1862 === "a" && !p1863) {
        throw new TypeError("Private accessor was defined without a getter");
      }
      if (typeof p1861 === "function" ? p1860 !== p1861 || !p1863 : !p1861.has(p1860)) {
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      }
      if (p1862 === "m") {
        return p1863;
      } else if (p1862 === "a") {
        return p1863.call(p1860);
      } else if (p1863) {
        return p1863.value;
      } else {
        return p1861.get(p1860);
      }
    };
    var v1430 = this && this.__classPrivateFieldSet || function (p1864, p1865, p1866, p1867, p1868) {
      if (p1867 === "m") {
        throw new TypeError("Private method is not writable");
      }
      if (p1867 === "a" && !p1868) {
        throw new TypeError("Private accessor was defined without a setter");
      }
      if (typeof p1865 === "function" ? p1864 !== p1865 || !p1868 : !p1865.has(p1864)) {
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      }
      if (p1867 === "a") {
        p1868.call(p1864, p1866);
      } else if (p1868) {
        p1868.value = p1866;
      } else {
        p1865.set(p1864, p1866);
      }
      return p1866;
    };
    var v1431;
    var v1432;
    var v1433;
    var v1434;
    Object.defineProperty(p1847, "__esModule", {
      value: true
    });
    p1847.Auth = undefined;
    const vP1848 = p1848(19);
    const vP18482 = p1848(13);
    class C9 {
      constructor(p1869) {
        this.http = p1869;
        this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        };
        v1431.set(this, false);
        v1432.set(this, undefined);
        v1433.set(this, undefined);
        v1434.set(this, (0, vP18482.createNanoEvents)());
        (0, vP1848.getItem)(this.settings.key, p1870 => this.token = p1870);
      }
      set token(p1871) {
        this.http.authToken = p1871;
      }
      get token() {
        return this.http.authToken;
      }
      onChange(p1872) {
        const v1435 = v1429(this, v1434, "f").on("change", p1872);
        if (!v1429(this, v1431, "f")) {
          v1430(this, v1432, new Promise((p1873, p1874) => {
            this.getUserData().then(p1875 => {
              this.emitChange(Object.assign(Object.assign({}, p1875), {
                token: this.token
              }));
            }).catch(p1876 => {
              this.emitChange({
                user: null,
                token: undefined
              });
            }).finally(() => {
              p1873();
            });
          }), "f");
        }
        v1430(this, v1431, true, "f");
        return v1435;
      }
      getUserData() {
        return v1428(this, undefined, undefined, function* () {
          if (this.token) {
            return (yield this.http.get(this.settings.path + "/userdata")).data;
          } else {
            throw new Error("missing auth.token");
          }
        });
      }
      registerWithEmailAndPassword(p1877, p1878, p1879) {
        return v1428(this, undefined, undefined, function* () {
          const v1436 = (yield this.http.post(this.settings.path + "/register", {
            body: {
              email: p1877,
              password: p1878,
              options: p1879
            }
          })).data;
          this.emitChange(v1436);
          return v1436;
        });
      }
      signInWithEmailAndPassword(p1880, p1881) {
        return v1428(this, undefined, undefined, function* () {
          const v1437 = (yield this.http.post(this.settings.path + "/login", {
            body: {
              email: p1880,
              password: p1881
            }
          })).data;
          this.emitChange(v1437);
          return v1437;
        });
      }
      signInAnonymously(p1882) {
        return v1428(this, undefined, undefined, function* () {
          const v1438 = (yield this.http.post(this.settings.path + "/anonymous", {
            body: {
              options: p1882
            }
          })).data;
          this.emitChange(v1438);
          return v1438;
        });
      }
      sendPasswordResetEmail(p1883) {
        return v1428(this, undefined, undefined, function* () {
          return (yield this.http.post(this.settings.path + "/forgot-password", {
            body: {
              email: p1883
            }
          })).data;
        });
      }
      signInWithProvider(p1884, p1885 = {}) {
        return v1428(this, undefined, undefined, function* () {
          return new Promise((p1886, p1887) => {
            const v1439 = p1885.width || 480;
            const v1440 = p1885.height || 768;
            const v1441 = this.token ? "?token=" + this.token : "";
            const v1442 = "Login with " + (p1884[0].toUpperCase() + p1884.substring(1));
            const v1443 = this.http.client.getHttpEndpoint((p1885.prefix || this.settings.path + "/provider") + "/" + p1884 + v1441);
            const v1444 = screen.width / 2 - v1439 / 2;
            const v1445 = screen.height / 2 - v1440 / 2;
            v1430(this, v1433, window.open(v1443, v1442, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + v1439 + ", height=" + v1440 + ", top=" + v1445 + ", left=" + v1444), "f");
            const vF72 = p1888 => {
              if (p1888.data.user === undefined && p1888.data.token === undefined) {
                return;
              }
              clearInterval(vSetInterval2);
              v1429(this, v1433, "f").close();
              v1430(this, v1433, undefined, "f");
              window.removeEventListener("message", vF72);
              if (p1888.data.error !== undefined) {
                p1887(p1888.data.error);
              } else {
                p1886(p1888.data);
                this.emitChange(p1888.data);
              }
            };
            const vSetInterval2 = setInterval(() => {
              if (!v1429(this, v1433, "f") || v1429(this, v1433, "f").closed) {
                v1430(this, v1433, undefined, "f");
                p1887("cancelled");
                window.removeEventListener("message", vF72);
              }
            }, 200);
            window.addEventListener("message", vF72);
          });
        });
      }
      signOut() {
        return v1428(this, undefined, undefined, function* () {
          this.emitChange({
            user: null,
            token: null
          });
        });
      }
      emitChange(p1889) {
        if (p1889.token !== undefined) {
          this.token = p1889.token;
          if (p1889.token === null) {
            (0, vP1848.removeItem)(this.settings.key);
          } else {
            (0, vP1848.setItem)(this.settings.key, p1889.token);
          }
        }
        v1429(this, v1434, "f").emit("change", p1889);
      }
    }
    p1847.Auth = C9;
    v1431 = new WeakMap();
    v1432 = new WeakMap();
    v1433 = new WeakMap();
    v1434 = new WeakMap();
  }, (p1890, p1891) => {
    'use strict';

    Object.defineProperty(p1891, "__esModule", {
      value: true
    });
    p1891.getItem = p1891.removeItem = p1891.setItem = undefined;
    let v1446;
    function f332() {
      if (!v1446) {
        try {
          v1446 = typeof cc !== "undefined" && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage;
        } catch (e67) {}
      }
      if (!v1446) {
        v1446 = {
          cache: {},
          setItem: function (p1892, p1893) {
            this.cache[p1892] = p1893;
          },
          getItem: function (p1894) {
            this.cache[p1894];
          },
          removeItem: function (p1895) {
            delete this.cache[p1895];
          }
        };
      }
      return v1446;
    }
    function f333(p1896, p1897) {
      f332().setItem(p1896, p1897);
    }
    p1891.setItem = f333;
    function f334(p1898) {
      f332().removeItem(p1898);
    }
    p1891.removeItem = f334;
    function f335(p1899, p1900) {
      const v1447 = f332().getItem(p1899);
      if (typeof Promise === "undefined" || !(v1447 instanceof Promise)) {
        p1900(v1447);
      } else {
        v1447.then(p1901 => p1900(p1901));
      }
    }
    p1891.getItem = f335;
  }, (p1902, p1903) => {
    'use strict';

    Object.defineProperty(p1903, "__esModule", {
      value: true
    });
    p1903.discordURLBuilder = undefined;
    function f336(p1904) {
      const v1448 = window?.location?.hostname || "localhost";
      const v1449 = p1904.hostname.split(".");
      const v1450 = !p1904.hostname.includes("trycloudflare.com") && !p1904.hostname.includes("discordsays.com") && v1449.length > 2 ? "/" + v1449[0] : "";
      if (p1904.pathname.startsWith("/.proxy")) {
        return p1904.protocol + "//" + v1448 + v1450 + p1904.pathname + p1904.search;
      } else {
        return p1904.protocol + "//" + v1448 + "/.proxy/colyseus" + v1450 + p1904.pathname + p1904.search;
      }
    }
    p1903.discordURLBuilder = f336;
  }, (p1905, p1906, p1907) => {
    'use strict';

    Object.defineProperty(p1906, "__esModule", {
      value: true
    });
    p1906.SchemaSerializer = undefined;
    const vP1907 = p1907(15);
    class C10 {
      setState(p1908) {
        return this.state.decode(p1908);
      }
      getState() {
        return this.state;
      }
      patch(p1909) {
        return this.state.decode(p1909);
      }
      teardown() {
        var v1451;
        if ((v1451 = this.state?.$changes) === null || v1451 === undefined) {
          undefined;
        } else {
          v1451.root.clearRefs();
        }
      }
      handshake(p1910, p1911) {
        if (this.state) {
          const v1452 = new vP1907.Reflection();
          v1452.decode(p1910, p1911);
        } else {
          this.state = vP1907.Reflection.decode(p1910, p1911);
        }
      }
    }
    p1906.SchemaSerializer = C10;
  }, (p1912, p1913) => {
    'use strict';

    Object.defineProperty(p1913, "__esModule", {
      value: true
    });
    p1913.NoneSerializer = undefined;
    class C11 {
      setState(p1914) {}
      getState() {
        return null;
      }
      patch(p1915) {}
      teardown() {}
      handshake(p1916) {}
    }
    p1913.NoneSerializer = C11;
  }];
  var vO74 = {};
  function f337(p1917) {
    var v1453 = vO74[p1917];
    if (v1453 !== undefined) {
      return v1453.exports;
    }
    var v1454 = vO74[p1917] = {
      id: p1917,
      loaded: false,
      exports: {}
    };
    vA2[p1917].call(v1454.exports, v1454, v1454.exports, f337);
    v1454.loaded = true;
    return v1454.exports;
  }
  (() => {
    f337.amdO = {};
  })();
  (() => {
    f337.n = p1918 => {
      var v1455 = p1918 && p1918.__esModule ? () => p1918.default : () => p1918;
      f337.d(v1455, {
        a: v1455
      });
      return v1455;
    };
  })();
  (() => {
    f337.d = (p1919, p1920) => {
      for (var v1456 in p1920) {
        if (f337.o(p1920, v1456) && !f337.o(p1919, v1456)) {
          Object.defineProperty(p1919, v1456, {
            enumerable: true,
            get: p1920[v1456]
          });
        }
      }
    };
  })();
  (() => {
    f337.g = function () {
      if (typeof globalThis === "object") {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (e68) {
        if (typeof window === "object") {
          return window;
        }
      }
    }();
  })();
  (() => {
    f337.hmd = p1921 => {
      p1921 = Object.create(p1921);
      if (!p1921.children) {
        p1921.children = [];
      }
      Object.defineProperty(p1921, "exports", {
        enumerable: true,
        set: () => {
          throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + p1921.id);
        }
      });
      return p1921;
    };
  })();
  (() => {
    f337.o = (p1922, p1923) => Object.prototype.hasOwnProperty.call(p1922, p1923);
  })();
  (() => {
    f337.r = p1924 => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(p1924, Symbol.toStringTag, {
          value: "Module"
        });
      }
      Object.defineProperty(p1924, "__esModule", {
        value: true
      });
    };
  })();
  var vF337 = f337(0);
  
})();





// اعتراض جميع طلبات fetch

(function() {

    const originalFetch = window.fetch;

    

    window.fetch = function(...args) {

        const url = args[0];

        console.log("🌐 طلب fetch:", url);

        

        return originalFetch.apply(this, args)

            .then(response => {

                console.log("📥 استجابة من:", url);

                

                // اعتراض طلب set-worm-world

                if (url.includes('/extension/set-worm-world') || url.includes('/set-worm-world')) {

                    console.log("🎯 اعتراض set-worm-world");

                    

                    // إنشاء استجابة مخصصة كاملة

                    const customResponse = `<style>

  .news-box-wormworld {

    background-color: #ffffff;

    padding: 10px;

    border: 2px solid #ff0000;

    border-radius: 5px;

    margin-bottom: 10px;

    width: 100%;

    height: 86%;

    position: relative;

    z-index: 1;

    overflow-y: scroll;

  }



  .news-box-wormworld .news-content {

    width: 100%;

    height: 85%;

    overflow-y: auto;

    padding: 10px;

    border: 1px solid #eb0000;

    box-sizing: border-box;

  }



  .news-box-wormworld .news-button {

    position: absolute;

    bottom: 20px;

    display: flex;

    align-items: center;

    gap: 5px;

    width: 100%;

  }



  .news-box-wormworld .close-button {

    position: absolute;

    right: 33px;

    background-color: #f44336;

    color: white;

    border: none;

    padding: 5px 10px;

    cursor: pointer;

    font-size: 12px;

    top: -24px;

    width: 100px;

    height: 50px;

  }



  #idwormworld a {

    color: #fff;

  }



  .wwc-joystick div {

    min-width: 100px;

    display: inline-block;

  }



  @keyframes mmwwcGlow {
    0%, 100% {
      box-shadow: 0 0 8px 2px rgba(0, 200, 255, 0.5), 0 0 15px 4px rgba(0, 200, 255, 0.3);
    }
    50% {
      box-shadow: 0 0 12px 3px rgba(0, 200, 255, 0.7), 0 0 20px 6px rgba(0, 200, 255, 0.5);
    }
  }

  #game-wrap #game-cont #stretch-box #main-menu-view .line-bottom #op_jkr {

    background: #00ccff;

    color: #fff;

    overflow: hidden;

    height: 50px;

    line-height: 50px;

    font-size: 20px;

    padding: 0 10px;

    box-sizing: border-box;

    border-radius: 5px;

    border: 0;

    outline: 0;

    box-shadow: 0 0 8px 2px rgba(0, 200, 255, 0.5), 0 0 15px 4px rgba(0, 200, 255, 0.3);

    text-align: center;

    text-shadow: 0 0 3px rgba(0, 200, 255, 0.5);

    cursor: pointer;

    transition: all 0.3s ease;
    animation: mmwwcGlow 2s ease-in-out infinite;

    min-width: 120px;

    display: inline-block;

    margin: 0 3px;

  }



  .group-tab-button {

    display: flex;

    margin-top: 7px;

  }



  .tab-button {

    cursor: pointer;

    padding: 5px 15px;

    background-color: #eee;

    border: 1px solid #ccc;

    border-radius: 5px 5px 0 0;

  }



  .tab-button:hover {

    background-color: #000;

    color: #fff;

  }



  .tab-button.active {

    background-color: #fff;

    color: #ff0000;

  }



  .tab-content {

    display: none;

    padding: 5px 10px 0 10px;

    border-radius: 0 0 5px 5px;

  }



  .active-tab {

    display: block;

  }



  .sub-title {

    font-size: 14px;

    font-weight: bold;

    display: block;

    color: rgb(0, 0, 0);

    border-bottom: 1px solid;

    margin: 10px 0;

  }



  #idReplaceSkin button {

    font-size: small;

    padding: 5px 15px;

    z-index: 1;

    position: absolute;

    background-color: transparent;

    color: #FFF;

    border: 1px solid #ffbb00;

    border-radius: 15px;

  }

<style>


  #idReplaceSkin button:hover {

    background-color: #ffbb00;

    color: #000;

    border: 1px solid #cfcfcf;

  }

</style>



<div style="position: relative; padding: 10px; background-color: #FFF; border-radius: 8px;">

  <h2 style="text-align: center; color: #0a0a0a; margin: 0 0 12px 0; font-size: 18px; font-weight: bold; text-shadow: 0 0 8px rgba(0, 0, 0, 0.63);"> ⚙️ </h2>

  <button style="background: linear-gradient(135deg, #ff4444, #cc0000); color: #fff; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.2); position: absolute; top: 8px; right: 8px; font-size: 12px;" id="op_jkr-close">

    ✕ CLOSE

  </button>

  <div style="margin-bottom: 10px; background: white; padding: 8px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); clear: both; margin-top: 5px;">

    <label style="font-weight: bold; color: #333; font-size: 12px; display: block; margin-bottom: 4px;">📋 ID:</label>

    <div style="display: flex; gap: 6px; align-items: center;">

      <input type="text" value="${bbs.userId}" id="wormate_id" readonly style="flex: 1; padding: 5px; border: 1px solid #000000; border-radius: 4px; background: #f0f8ff; font-family: monospace; font-size: 11px;" />

      <button onclick="navigator.clipboard.writeText('${bbs.userId}')" style="background: #4CAF50; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.97); font-size: 11px;">COPY</button>

    </div>

  </div>

  

    

      <form name="formSkin" method="POST" enctype="multipart/form-data" style="background: white; padding: 8px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 10px;">

        <label style="font-weight: bold; color: #333; font-size: 12px; display: block; margin-bottom: 4px;">File:</label>

        <input id="fileSkin" type="file" accept="application/json" style="padding: 5px; border: 1px solid #000000; border-radius: 4px; width: 100%; box-sizing: border-box; font-size: 11px;" />

      </form>

      
        <div class="page-set-worm-world">

          <div class="group-tab-button">

            <div id="tab_b1" class="tab-button active" onclick="changeTab(0)">

              SET

            </div>

            <div id="tab_b3" class="tab-button" onclick="changeTab(2)">Account</div>

            <div id="tab_b4" class="tab-button" onclick="changeTab(3)">HELP</div>

            <div id="tab_b5" class="tab-button" onclick="changeTab(4)">CUSTOM</div>

            <div id="tab_b6" class="tab-button" onclick="changeTab(5)">SET ZOOM</div>

            <div id="tab_b7" class="tab-button" onclick="changeTab(6)">SKIN SWAP</div>

            <div id="tab_b8" class="tab-button" onclick="changeTab(7)">JOYSTICK</div>

          </div>



          <div id="tab1" class="tab-content active-tab">

            

              <div style="display: flex">

    <div style="width: 33%">

        <label>SAVE Kill:</label>

        <input type="checkbox" id="saveGame" />

    </div>

    <div style="width: 33%">

        <label>Background:</label>

        <select id="backgroundArena"></select>
    </div>



    <div style="width: 34%">

        <label>Replace SKIN:</label>

        <input style="width: 60px" type="text" name="inputReplaceSkin" id="inputReplaceSkin" value="35" maxlength="4"

            onchange="setIdReplaceSkin(this)" />

    </div>

</div>

<div style="display: grid;

          grid-template-columns: repeat(3, 1fr);

          grid-template-rows: 1fr;

          grid-column-gap: 0px;

          grid-row-gap: 0px;

          margin-top: 10px;">

    <div>

        <label>TOP HS ("9")</label>

        <input type="checkbox" id="showTophs" />

    </div>

    <div>

        <label>Record HS ("0")</label>

        <input type="checkbox" id="showRechs" />

    </div>

    <div>

        <label>3 TOP SCORE</label>

        <input type="checkbox" id="onlytop" />

    </div>

</div>

            <div class="setting-item" style="text-align: right;">
            
              
            </div>
 <div class="setting-item" style="text-align: right;">

              <span class="setting-label"><i class="fas fa-desktop" style="color: #ffbb00;"></i>Zigzag:</span>

              <select id="zigzag_mode">

                <option value="0">None</option>

                <option value="1">Zigzag 1</option>

                <option value="2">Zigzag 2</option>

                <option value="3">Zigzag 3</option>

              </select>

            </div>

<div style="margin-bottom: 5px">

    <strong class="sub-title">Joystick Settings</strong>

    <div class="wwc-joystick">

        <div>

            <label style="display: block">Active</label>

            <input type="checkbox" id="joystick_checked" onclick="setconfigjoystick_checked(this)" />

        </div>

        <div>

            <label style="display: block">Color</label>

            <select id="joystick_color" onchange="setconfigjoystick_color(this)">

                <option value="red">RED</option>

                <option value="blue">BLUE</option>

                <option value="white">WHITE</option>

                <option value="black">Black</option>

            </select>

        </div>

        <div>

            <label style="display: block">Mode</label>

            <select id="joystick_mode" onchange="setconfigjoystick_mode(this)">

                <option value="dynamic">Dynamic</option>

                <option value="static">Static</option>

            </select>

        </div>

        <div>

            <label style="display: block">Position</label>

            <select id="joystick_position" onchange="setconfigjoystick_position(this)">

                <option value="R">Right</option>

                <option value="L">Left</option>

            </select>

        </div>

        <div>

            <label style="display: block; margin-top: 10px;">Size</label>

            <select id="joystick_size" onchange="setconfigjoystick_size(this)">

                <option value="110">110</option>

                <option value="100">100</option>

                <option value="90">90</option>

                <option value="80">80</option>

                <option value="75">75</option>

                <option value="70">70</option>

            </select>

        </div>

    </div>

</div>

<strong class="sub-title">Plus</strong>

<div style="

          display: grid;

          grid-template-columns: repeat(4, 1fr);

          grid-template-rows: 1fr;

          grid-column-gap: 0px;

          grid-row-gap: 0px;

          margin-top: 10px;

        ">

    <div>

        <label>Bad Language</label>

        <input type="checkbox" id="activeBadLang" />

    </div>

    <div>

        <label>SOUNDS:</label>

        <input type="checkbox" id="activeSounds" />

    </div>

</div>

                

          </div>

          <div id="tab2" class="tab-content">

            em construção

          </div>

          <div id="tab3" class="tab-content">

            <style>

  .tabLabel {

    display: block;

    font-size: 12px;

  }

</style>

<div style="position: relative; padding: 30px; background: linear-gradient(to bottom, #00f0ff, #c285ff); border-radius: 20px; width: 400px; box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); color: #fff;">

  <div style="text-align: center;">

    <span style="float: right; cursor: pointer; font-size: 24px; font-weight: bold; color: #fff;" id="op_jkr-close">&times;</span>

    <h2 style="margin: 0 0 20px 0; font-size: 32px;">⚙️</h2>

  </div>

  
  <div style="margin-bottom: 15px;">

    <label for="wormate_id" style="display: block; margin-bottom: 8px; font-weight: bold;">📋 Account ID</label>

    <div style="display: flex; gap: 10px;">

      <input value="${bbs.userId}" type="text" id="wormate_id" readonly style="padding: 8px; border: none; border-radius: 8px; flex: 1; box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);" />

      <button onclick="navigator.clipboard.writeText('${bbs.userId}')" style="background-color: #910e91; color: white; border: none; border-radius: 8px; padding: 8px 12px; cursor: pointer; font-weight: bold; box-shadow: 0 0 10px #f0f; transition: 0.3s ease;" onmouseover="this.style.backgroundColor='#b91ab9'; this.style.boxShadow='0 0 20px #f0f'" onmouseout="this.style.backgroundColor='#910e91'; this.style.boxShadow='0 0 10px #f0f'">COPY</button>

    </div>

  </div>

  

  <div style="margin-bottom: 15px;">

    <label for="fileSkin" style="display: block; margin-bottom: 8px; font-weight: bold;">📁 Skin_Wear_file (.json)</label>

    <div style="display: flex; gap: 10px;">

      <input type="file" accept=".json" id="fileSkin" style="padding: 8px; border: none; border-radius: 8px; flex: 1; box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);" />

      <button onclick="document.getElementById('fileSkin').value=''" style="background-color: #910e91; color: white; border: none; border-radius: 8px; padding: 8px 12px; cursor: pointer; font-weight: bold; box-shadow: 0 0 10px #f0f; transition: 0.3s ease;" onmouseover="this.style.backgroundColor='#b91ab9'; this.style.boxShadow='0 0 20px #f0f'" onmouseout="this.style.backgroundColor='#910e91'; this.style.boxShadow='0 0 10px #f0f'">Clear</button>

    </div>

  </div>

  <br>

      
  <div style="margin: 10px 0;border-bottom: 1px  solid #CCC;padding-bottom: 5px;">

    <button id="toShareRank" onclick="toShareRank()">To Share in data e Rank</button>

  </div>

  <div style="margin: 10px 0;border-bottom: 1px  solid #CCC;padding-bottom: 5px;">

    The data is updated manually only due to data sharing regulations.

    <div style="margin: 10px 0;">

      <button id="btnGenerateToken" type="button" onclick="onOpen()"

        style="width: 100%;background-color: #54fd36;padding: 6px;font-size: 20px;">

        Open Account

      </button>

    </div>

  </div>

  <br />

  <div style="margin-top: 5px;">

    <div style="display: flex;gap: 10px;justify-content: space-between;align-items: center;">

      <div>

        <label for="sharedLocation">CONNECT IN</label>

        <input type="text" placeholder="ROOM CODE" id="roomCode" name="roomCode" />

        <div style="display: flex;justify-content: space-between;gap: 5px;margin: 5px 0;">

          <button style="width: 100%;" onclick="setRoomCode(true)">CONNECT</button>

          <button style="width: 100%;" onclick="setRoomCode(false)">DISCONNECT</button>

        </div>

      </div>

      

    </div>

  </div>

</div>

<script>
 // Initialize ZigZag dropdown
    $("#zigzag_mode").val(bbs.flx || 0);
    
    $("#zigzag_mode").change(function() {
      bbs.flx = parseInt($(this).val());
      localStorage.setItem("SavetrGame", JSON.stringify(bbs));
    });

  const serverGame = JSON.parse(localStorage.getItem("serverGame") || "{}");

  const url_token = "https://wormworld.io/extension";

  

  // ✅ استخدام التوكن المحفوظ

  var token = localStorage.getItem("wormworld_token") || bbs.tk;

  var idwormate = bbs.userId;



  (async function () {

    if (document.getElementById("code")) {

      document.getElementById("code").value = serverGame.code || "";

    }

    document.getElementById("roomCode").value = serverGame.roomCode || "";

    _wwcio.player.teamRoom = serverGame.roomCode || "";



    console.log(_wwcio.player);

  })();



  function copyToken(e) {

    const copyText = document.getElementById("code");

    copyText.select();

    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");

    alert("Copied the text: " + copyText.value);

  }



  function onOpen() {

    var newWindow = window.open("", "_blank");

    onGenerateToken(function () {

      newWindow.location.href = "https://wormworld.io/admin?page=login&token=" + token;

    });

  }



  function createRoom() {

    const oldCode = document.getElementById("code").value;

    serverGame.code = window.gerarCodigoUnico();

    document.getElementById("code").value = serverGame.code;

    serverGame.roomCode = serverGame.code;

    localStorage.setItem("serverGame", JSON.stringify(serverGame));

    alert("Room created successfully!");

  }



  function setRoomCode(connect) {

    try {



      serverGame.roomCode = connect ? document.getElementById("roomCode").value : "";

      _wwcio.player.teamRoom = serverGame.roomCode;

      localStorage.setItem("serverGame", JSON.stringify(serverGame));

      alert("Room " + (connect ? "connected" : "disconnected") + " successfully!");



    } catch (e) {

      console.log(e);

    }

  }



  function onChangeCode() {

    serverGame.code = document.getElementById("code").value;

    localStorage.setItem("serverGame", JSON.stringify(serverGame));

  }



  function onGenerateToken(fn) {

    fetch(url_token + "/account/gen", {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

      },

      body: JSON.stringify({

        tk: token, // ✅ استخدام التوكن المحفوظ

        wuid: bbs.wuid,

      }),

    }).then(async function (response) {

      const json = await response.json();

      token = json.tk;

      // ✅ حفظ التوكن الجديد

      localStorage.setItem("wormworld_token", token);

      if (fn) {

        fn();

      }

    });

  }



  function toShareRank() {

    if (!confirm("Are you sure you want to share your rank?")) {

      return;

    }

    const url_token = "https://gateway.wormate.io/pub/wuid/" + bbs.wuid + "/consent/change?value=true";



    fetch(url_token).then(async function (response) {

      alert("To Share Rank Success!");

      window.location.reload();

    });

  }

</script>

          </div>

          <div id="tab4" class="tab-content">

            

              <strong class="sub-title">KEYBOARD</strong>

<div style="padding: 5px; margin-top: 5px; border: #eb991c 1px solid; display: flex;">

  <ul>

    <li>0 - SHOW/HIDE RECORD HS</li>

    <li>1 - SKIN REPLACE</li>

    <li>9 - SHOW/HIDE TOP HS</li>

    <li>8 - AUTOMATIC LOOP</li>

    <li>7 - AUTOMATIC SPIRAL</li>

    <li>6 - SHOW/HIDE NAMES TOP(1 SEG RUN)</li>

  </ul>

  <ul>

    <li>5 - RESPAWN</li>

    <li>4 - LASER</li>

    <li>3 - BACKGROUND</li>

    <li>&lt;|, - ZOOM(+ 0.25)</li>

    <li>&gt;|. - ZOOM(- 0.25)</li>

    <li>Z = ZOOM(1)</li>

    <li>C = CLOSE-UP(0.5)</li>

  </ul>

</div>

                

          </div>

          <div id="tab5" class="tab-content">

            

              <div style="display:flex; gap: 15px;">

  <div>

    <strong class="sub-title">LASER</strong>

    <input type="checkbox" id="laser" name="laser" value="laser" checked>

    <input type="color" id="color" name="color" value="#ff0000">

    <input type="range" id="range" name="range" min="0.1" max="1" step="0.1" value="0.1">

    <span id="range-value">0.1</span>

  </div>

  <div>

    <strong class="sub-title">ENEMY NAME COLOR</strong>

    <input type="color" id="enemyNameColor" name="enemyNameColor" value="#ff0000">

    <input type="number" id="enemyNameFontSize" name="enemyNameFontSize" min="14" max="28" step="1" value="14">

  </div>

</div>

<strong class="sub-title">CUSTOMIZE</strong>

<button id="TestAUDIO" onclick="testAudio()">Test AUDIO</button>

<button id="clearBackground" onclick="clearBackground()">Clear WALLPAPERS</button>

<button id="clearPosition" onclick="clearMapPosition()">Clear Map Position</button>

<button id="clearClock" onclick="clearClock()">Clear Map Clock</button>

<button id="clearJoyStick" onclick="clearJoyStick()">Clear Joy Stick</button>

<button id="clearBgGame" onclick="clearBgGame()">Clear Bg GAME</button>



<script>



  const range = document.getElementById('range');

  const rangeValue = document.getElementById('range-value');

  const color = document.getElementById('color');

  const laserActive = document.getElementById('laser');

  const enemyNameColor = document.getElementById('enemyNameColor');

  const enemyNameFontSize = document.getElementById('enemyNameFontSize');



  range.value = bbs.laser || 0.1;

  rangeValue.textContent = bbs.laser || 0.1;

  color.value = bbs.laserColor || 0xff0000;

  laserActive.checked = bbs.laserActive || false;

  enemyNameColor.value = bbs.enemyNameColor;

  enemyNameFontSize.value = bbs.enemyNameFontSize || 14;



  range.addEventListener('input', (e) => {

    const value = parseFloat(e.target.value).toFixed(1);

    rangeValue.textContent = value;

    bbs.laser = value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  });



  color.addEventListener('input', (e) => {

    const colorValue = e.target.value;

    bbs.laserColor = colorValue;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    console.log("Selected color: " + colorValue);

  });



  laserActive.addEventListener('change', (e) => {

    bbs.laserActive = e.target.checked;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  });



  enemyNameColor.addEventListener('input', (e) => {

    const colorValue = e.target.value;

    bbs.enemyNameColor = colorValue;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    console.log("Selected color: " + colorValue);

  });



  enemyNameFontSize.addEventListener('input', (e) => {

    const fontSizeValue = e.target.value;

    bbs.enemyNameFontSize = parseInt(fontSizeValue, 10);

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    console.log("Selected font size: " + fontSizeValue);

  });



  function testAudio() {

    testAudioCustom();

  }



  function clearBackground() {

    bbs.backgroundUri = null;

    bbs.background = 0;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("Clear Background");

  }





  function clearMapPosition() {

    bbs.display.clock = { x: 60, y: 60, Tg: null };

    bbs.display.top = { x: 225, y: 1 };

    bbs.display.custom = false;

    bbs.displayFriends = {

      x: -10,

      y: 315,

      rotation: 0,

    }

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("Clear Map Position");

    window.location.reload();

  }



  function clearClock() {

    bbs.display.customClock = null;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("CLOCK MAP UPDATE OK!");

    window.location.reload();

  }



  function clearJoyStick() {

    bbs.customJoystick = null;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("JOYSTICK MAP UPDATE OK!");

    window.location.reload();

  }



  function clearBgGame() {

    bbs.background = null;

    bbs.backgroundIsCustom = false;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("BG GAME CLEAR OK!");

    window.location.reload();

  }





</script>

                

          </div>

          <div id="tab6" class="tab-content">



            <style>

  .set-zoom-wwc {

    display: grid;

    grid-template-columns: repeat(2, 1fr);

    grid-template-rows: repeat(3, 1fr);

    grid-column-gap: 0px;

    grid-row-gap: 0px;

    margin-top: 10px;

  }



  .szwwc-item {

    grid-column: 1 / 3;

  }



  .szwwc-item label {

    display: block;

  }



  .szwwc-item div {

    display: flex;

    align-items: center;

  }



  .szwwc-item input[type="range"] {

    flex: 1;

    width: 90%;

  }

</style>

<div class="set-zoom-wwc">

  <div>

    <label>Zoom PC</label>

    <input type="checkbox" id="activeZoom" />

  </div>

  <div>

    <label>Zoom Mobile</label>

    <input type="checkbox" id="activeZoomMobile" />

  </div>

  <div class="szwwc-item">

    <label>Zoom Limit Down</label>

    <div>

      <input type="range" id="limitDown" min="0.25" max="2" step="0.25" />

      <span id="limitDownValue"></span>

    </div>

  </div>

  <div class="szwwc-item">

    <label>Zoom +|- step (CAUTION)</label>

    <div>

      <input type="range" id="step" min="0.25" max="2" step="0.25" />

      <span id="stepValue"></span>

    </div>

  </div>

  <div class="szwwc-item">

    <label>Zoom Keyboard (c or C)</label>

    <div>

      <input type="range" id="closeUp" min="0.25" max="2" step="0.25" />

      <span id="closeUpValue"></span>

    </div>

  </div>

  <div class="szwwc-item">

    <label>Zoom Keyboard (z or Z)</label>

    <div>

      <input type="range" id="closeDown" min="0.25" max="2" step="0.25" />

      <span id="closeDownValue"></span>

    </div>

  </div>

</div>



<script>

  const configZoom = bbs.configZoom || {

    limitDown: 0.25,

    step: 0.25,

    closeUp: 0.5,

    closeDown: 1,

  };



  document.getElementById("limitDown").value = configZoom.limitDown;

  document.getElementById("step").value = configZoom.step;

  document.getElementById("closeUp").value = configZoom.closeUp;

  document.getElementById("closeDown").value = configZoom.closeDown;



  document.getElementById("limitDownValue").textContent = configZoom.limitDown;

  document.getElementById("stepValue").textContent = configZoom.step;

  document.getElementById("closeUpValue").textContent = configZoom.closeUp;

  document.getElementById("closeDownValue").textContent = configZoom.closeDown;



  function updateConfigZoom() {

    bbs.configZoom = {

      limitDown: parseFloat(document.getElementById("limitDown").value),

      step: parseFloat(document.getElementById("step").value),

      closeUp: parseFloat(document.getElementById("closeUp").value),

      closeDown: parseFloat(document.getElementById("closeDown").value),

    };

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  }



  document.getElementById("limitDown").addEventListener("input", function () {

    document.getElementById("limitDownValue").textContent = this.value;

    updateConfigZoom();

  });



  document.getElementById("step").addEventListener("input", function () {

    document.getElementById("stepValue").textContent = this.value;

    updateConfigZoom();

  });



  document.getElementById("closeUp").addEventListener("input", function () {

    document.getElementById("closeUpValue").textContent = this.value;

    updateConfigZoom();

  });



  document.getElementById("closeDown").addEventListener("input", function () {

    document.getElementById("closeDownValue").textContent = this.value;

    updateConfigZoom();

  });



  document.getElementById("activeZoom").checked = bbs.activeZoom;



  if (false) {

    bbs.activeZoom = false;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  }



  document.getElementById("activeZoom").addEventListener("change", function () {

    if (false) {

      bbs.activeZoom = false;

    } else {

      bbs.activeZoom = this.checked;

    }

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    window.location.reload();

  });



  document.getElementById("activeZoomMobile").checked = bbs.activeZoomMobile;

  document.getElementById("activeZoomMobile").addEventListener("change", function () {

    bbs.activeZoomMobile = this.checked;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    window.location.reload();

  });



</script>



          </div>

          <div id="tab7" class="tab-content">

            

              <style>

  .container-tab7 {}

</style>

<div class="container-tab7">

  <h3>SKINS SELECTEDS</h3>

  <ul id="myListSkin"></ul>

  <hr />

  <button id="cleanTheSkinShed" onclick="initTab7()">Reload LIST</button>

  <button id="cleanTheSkinShed" onclick="cleanTheSkinShed()">Clean LIST</button>

</div>

<script>

  const initTab7 = () => {

    const myListSkin = document.getElementById("myListSkin");

    bbs.cambiar = bbs.cambiar || {};

    if(Object.keys(bbs.cambiar).length === 0){

      myListSkin.innerHTML = "<li>Empty</li>";

      return;

    }

    myListSkin.innerHTML = "";

    for (const key in bbs.cambiar) {

      const li = document.createElement("li");

      li.innerHTML = bbs.cambiar[key];

      myListSkin.appendChild(li);

    }

  }



  function cleanTheSkinShed() {

    bbs.cambiar = {};

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("Clean the skin shed.");

    initTab7();

  }



  initTab7();

</script>

                

          </div>

          <div id="tab8" class="tab-content">

            

              <style>

    .game-area {

        border: 1px solid #CCC;

    }



    .menu-bar {

        width: 100%;

        display: flex;

        gap: 10px;

        justify-content: center;

        align-content: flex-start;

        align-items: flex-start;

    }



    .slider-container-01 {

        width: 95%;

        height: 110px;

        background: #eee;

        display: flex;

        align-content: center;

        justify-content: center;

        align-items: center;

    }



    .slider-container-02 {

        width: 5%;

        display: flex;

        justify-content: center;

    }



    .slider-container-02 input[type="range"] {

        transform: rotate(270deg);

    }

</style>

<div style="padding: 0 0 5px 0;border-bottom: 1px solid #CCC;margin: 0 0 5px 0;">

    <div style="display: flex;">

        <div>

            <label>Type Button Zoom</label>

            <select id="joystickSelectTypeCurrent" name="joystickSelectTypeCurrent">

                <option value="btn">BUTTON</option>

                <option value="range">RANGE</option>

            </select>

        </div> &nbsp; | &nbsp;

        <div>

            <label>Type Name</label>

            <select id="joystickSelectTypeName" name="joystickSelectTypeCurrentName">

                <option value="all">all</option>

                <option value="abb">abbreviated</option>

            </select>

        </div>

    </div>

    <div id="joystickButtons" style="display: flex;margin: 5px 0;justify-content: space-between;">

    </div>

</div>

PREVIEW

<div class="game-area">

    <div class="menu-bar"></div>

    <div style="display: flex;">

        <div class="slider-container-01">

            TOUCH DIRECTIONAL

        </div>

        <div class="slider-container-02">

            <input id="sliderZoom" type="range" min="0.25" max="2" step="0.25" value="1" style="width: 90px;">

        </div>

    </div>

</div>

<hr>

<div>

    <button id="joystickCleanConfig">CLEAN CONFIG</button>

</div>

<script>

    const btn = "btn_";



    document.getElementById("joystickCleanConfig").addEventListener("click", () => {

        if(!confirm("Do you want to clean the configuration?")) return;

        bbs.configJoystick = null

        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

        location.reload();

    });



    const initTab8 = () => {



        document.querySelector(".menu-bar").innerHTML = "";

        document.getElementById("joystickButtons").innerHTML = "";



        Object.keys(bbs.configJoystick.buttons).forEach((key) => {



            const button = bbs.configJoystick.buttons[key];

            const buttonElement = document.createElement("button");

            buttonElement.innerHTML = bbs.configJoystick.typeCurrentName === 'all' ? button.label : button.labelAbbreviation;

            buttonElement.id = btn + key;

            buttonElement.disabled = !button.active;

            document.querySelector(".menu-bar").appendChild(buttonElement);



            const checkebox = document.createElement("input");

            checkebox.type = "checkbox";

            checkebox.id = btn + key + "check";

            checkebox.checked = button.active;

            checkebox.addEventListener("change", (event) => {

                bbs.configJoystick.buttons[key].active = event.target.checked;

                localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

                document.getElementById(btn + key).disabled = !event.target.checked;

            });



            const label = document.createElement("label");

            label.htmlFor = checkebox.id;

            label.textContent = button.label;



            const container = document.getElementById("joystickButtons");

            label.prepend(checkebox);

            container.appendChild(label);

        });



        const joystickSelect = document.getElementById("joystickSelectTypeCurrent");

        joystickSelect.value = bbs.configJoystick.typeCurrent;



        joystickSelect.addEventListener("change", (event) => {

            bbs.configJoystick.typeCurrent = event.target.value;

            localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

            initTab8();

        });



        const joystickSelectName = document.getElementById("joystickSelectTypeName");

        joystickSelectName.value = bbs.configJoystick.typeCurrentName;



        joystickSelectName.addEventListener("change", (event) => {

            bbs.configJoystick.typeCurrentName = event.target.value;

            localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

            initTab8();

        });



        const sliderZoom = document.getElementById("sliderZoom");

        if (joystickSelect.value === "btn") {

            sliderZoom.disabled = true;

            document.getElementById(btn + "zoomplus").disabled = false;

            document.getElementById(btn + "zoomminus").disabled = false;

        } else {

            sliderZoom.disabled = false;

            document.getElementById(btn + "zoomplus").disabled = true;

            document.getElementById(btn + "zoomminus").disabled = true;

        }





    }

    initTab8();

</script>

                

          </div>

        </div>

        

          

</div>

<script>

  function changeTab(tabIndex) {

    const tabButtons = document.querySelectorAll(".tab-button");

    for (let i = 0; i < tabButtons.length; i++) {

      tabButtons[i].classList.remove("active");

    }

    const selectedButton = document.getElementById("tab_b" + (tabIndex + 1));

    selectedButton.classList.add("active");



    const tabContents = document.querySelectorAll(".tab-content");

    for (let i = 0; i < tabContents.length; i++) {

      tabContents[i].classList.remove("active-tab");

    }

    const selectedTab = document.getElementById("tab" + (tabIndex + 1));

    selectedTab.classList.add("active-tab");

  }

</script>

<script>

  if (false) {

    function _0x5d83(){const _0x206afa=['prototype','key','77ZtDLrZ','click','includes','return\\x20(function()\\x20','__proto__','9iCzcDS','3174892TttXOR','console','{}.constructor(\\x22return\\x20this\\x22)(\\x20)','1261272KMMZqr','opacity','warn','style','1318701xpEzMU','constructor','5bzjkOa','bind','2554388YgJKyP','log','5574462mflStJ','2182920EZdGNs','(((.+)+)+)+$','getElementById','search','apply','error','stopPropagation','1202714pzPFzR','pointerEvents','length','2hiYRgI','trace','toString','0.5'];_0x5d83=function(){return _0x206afa;};return _0x5d83();}const _0x1fe8a1=_0x100d;(function(_0x543c18,_0x1395cb){const _0x59b7d8=_0x100d,_0x2f54e7=_0x543c18();while(!![]){try{const _0x549729=-parseInt(_0x59b7d8(0x130))/0x1*(parseInt(_0x59b7d8(0x133))/0x2)+-parseInt(_0x59b7d8(0x146))/0x3+-parseInt(_0x59b7d8(0x14a))/0x4+parseInt(_0x59b7d8(0x148))/0x5*(parseInt(_0x59b7d8(0x14c))/0x6)+parseInt(_0x59b7d8(0x13f))/0x7+-parseInt(_0x59b7d8(0x142))/0x8*(-parseInt(_0x59b7d8(0x13e))/0x9)+parseInt(_0x59b7d8(0x14d))/0xa*(parseInt(_0x59b7d8(0x139))/0xb);if(_0x549729===_0x1395cb)break;else _0x2f54e7['push'](_0x2f54e7['shift']());}catch(_0x4d846a){_0x2f54e7['push'](_0x2f54e7['shift']());}}}(_0x5d83,0xc0402));const _0x267f96=(function(){let _0x323eb7=!![];return function(_0x5bd17a,_0x523ed9){const _0x1910a2=_0x323eb7?function(){const _0x2d0df1=_0x100d;if(_0x523ed9){const _0x701c6c=_0x523ed9[_0x2d0df1(0x12d)](_0x5bd17a,arguments);return _0x523ed9=null,_0x701c6c;}}:function(){};return _0x323eb7=![],_0x1910a2;};}()),_0x544ecf=_0x267f96(this,function(){const _0x540910=_0x100d;return _0x544ecf[_0x540910(0x135)]()[_0x540910(0x12c)](_0x540910(0x12a))['toString']()[_0x540910(0x147)](_0x544ecf)[_0x540910(0x12c)](_0x540910(0x12a));});function _0x100d(_0x3ce5b8,_0x168500){const _0x41f287=_0x5d83();return _0x100d=function(_0x5f257c,_0xaf3251){_0x5f257c=_0x5f257c-0x12a;let _0x57c0ce=_0x41f287[_0x5f257c];return _0x57c0ce;},_0x100d(_0x3ce5b8,_0x168500);}_0x544ecf();const _0xaf3251=(function(){let _0xc75621=!![];return function(_0x1a75f7,_0x13e69d){const _0x289d37=_0xc75621?function(){if(_0x13e69d){const _0x4fea53=_0x13e69d['apply'](_0x1a75f7,arguments);return _0x13e69d=null,_0x4fea53;}}:function(){};return _0xc75621=![],_0x289d37;};}()),_0x5f257c=_0xaf3251(this,function(){const _0x1a93d5=_0x100d,_0xca38f9=function(){const _0x3bb04d=_0x100d;let _0x2eed00;try{_0x2eed00=Function(_0x3bb04d(0x13c)+_0x3bb04d(0x141)+');')();}catch(_0x1cec9c){_0x2eed00=window;}return _0x2eed00;},_0x5468ef=_0xca38f9(),_0x27b0a5=_0x5468ef[_0x1a93d5(0x140)]=_0x5468ef['console']||{},_0x3ef65f=[_0x1a93d5(0x14b),_0x1a93d5(0x144),'info',_0x1a93d5(0x12e),'exception','table',_0x1a93d5(0x134)];for(let _0x232895=0x0;_0x232895<_0x3ef65f[_0x1a93d5(0x132)];_0x232895++){const _0x468347=_0xaf3251[_0x1a93d5(0x147)][_0x1a93d5(0x137)][_0x1a93d5(0x149)](_0xaf3251),_0x23f84f=_0x3ef65f[_0x232895],_0xa80bb4=_0x27b0a5[_0x23f84f]||_0x468347;_0x468347[_0x1a93d5(0x13d)]=_0xaf3251[_0x1a93d5(0x149)](_0xaf3251),_0x468347[_0x1a93d5(0x135)]=_0xa80bb4[_0x1a93d5(0x135)]['bind'](_0xa80bb4),_0x27b0a5[_0x23f84f]=_0x468347;}});_0x5f257c(),window['onwheel']=_0x12b532=>{const _0x140b92=_0x100d;luaDeCristal=0x1,e['preventDefault'](),e[_0x140b92(0x12f)]();},window['addEventListener']('keydown',function(_0x3a5d5d){const _0x599c55=_0x100d;['<',',','>','.','z','c'][_0x599c55(0x13b)](_0x3a5d5d[_0x599c55(0x138)])&&(luaDeCristal=0x1,_0x3a5d5d['preventDefault'](),_0x3a5d5d[_0x599c55(0x12f)]());},![]);const el=document[_0x1fe8a1(0x12b)]('mm-action-play');el&&(el['disabled']=!![],el[_0x1fe8a1(0x145)][_0x1fe8a1(0x131)]='none',el[_0x1fe8a1(0x145)][_0x1fe8a1(0x143)]=_0x1fe8a1(0x136),el['addEventListener'](_0x1fe8a1(0x13a),_0xcf1853=>{_0xcf1853['preventDefault'](),_0xcf1853['stopPropagation']();},!![]));setInterval(()=>{luaDeCristal=0x1;},0xbb8);

  }

  var setWormworld = document.getElementById("set_wormworld");

  if (setWormworld) {

    setWormworld.addEventListener("click", function() {

      document.getElementById("mm-settings").click();

    });

  }



  var select = document.getElementById("backgroundArena");

  var inputFile = document.getElementById("fileSkin");



  const setconfigjoystick_checked = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.checked = e.checked;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setconfigjoystick_color = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.color = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setconfigjoystick_mode = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.mode = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    console.log(bbs.joystick);

  };

  const setconfigjoystick_position = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.position = {

      left: "75px",

      bottom: "75px",

    };

    if (e.value === "R") {

      bbs.joystick.position = {

        right: "75px",

        bottom: "75px",

      };

    }

    bbs.joystick.positionMode = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setconfigjoystick_pxy = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.position = {

      left: (parseInt(e.value) + 10).toString() + "px",

      bottom: e.value + "px",

    };

    if (bbs.joystick.positionMode === "R") {

      bbs.joystick.position = {

        right: (parseInt(e.value) + 10).toString() + "px",

        bottom: e.value + "px",

      };

    }

    bbs.joystick.pxy = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setconfigjoystick_size = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.size = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setIdReplaceSkin = function (e) {

    bbs.idReplaceSkin = window._wwc.isNumberValid(e.value) ? e.value : 32;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };



  if (document.getElementById("setArrawInd")) {

    document.getElementById("setArrawInd").checked = bbs.arrow;

    document.getElementById("setArrawInd").addEventListener("change", function () {

      bbs.arrow = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      window.location.reload();

    });

  }



  if (document.getElementById("onlytop")) {

    document.getElementById("onlytop").checked = bbs.lr;

    document.getElementById("onlytop").addEventListener("change", function () {

      bbs.lr = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    });

  }



  if (document.getElementById("showTophs")) {

    document.getElementById("showTophs").checked = bbs.showTophs;

    document.getElementById("showTophs").addEventListener("change", function () {

      bbs.showTophs = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    });

  }



  if (document.getElementById("showRechs")) {

    document.getElementById("showRechs").checked = bbs.showRechs;

    document.getElementById("showRechs").addEventListener("change", function () {

      bbs.showRechs = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    });

  }



  if (document.getElementById("activeBadLang")) {

    document.getElementById("activeBadLang").checked = bbs.activeBadLang;

    document.getElementById("activeBadLang").addEventListener("change", function () {

      bbs.activeBadLang = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      window.location.reload();

    });

  }



  if (document.getElementById("activeSounds")) {

    document.getElementById("activeSounds").checked = bbs.activeSounds2;

    document.getElementById("activeSounds").addEventListener("change", function () {

      bbs.activeSounds2 = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      window.location.reload();

    });

  }





    // إضافة كود Screen Mode هنا

  if (document.getElementById("hudPositionMode")) {

    document.getElementById("hudPositionMode").value = bbs.hudSettings?.mode || 0;

    

    document.getElementById("hudPositionMode").addEventListener("change", function() {

      if (!bbs.hudSettings) {

        bbs.hudSettings = { mode: 0, wi: 1 };

      }

      

      bbs.hudSettings.mode = parseInt(this.value);

      

      if (bbs.hudSettings.mode == 1) {

        bbs.hudSettings.wi = screen.height / (screen.width * 2);

      } else if (bbs.hudSettings.mode == 2) {

        bbs.hudSettings.wi = 0;

      } else {

        bbs.hudSettings.wi = 1;

      }

      

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      console.log("HUD mode changed to:", bbs.hudSettings.mode);

    });

  }



  if (document.getElementById("modoSTREAMER")) {

    document.getElementById("modoSTREAMER").checked = bbs.display.custom;

    document.getElementById("modoSTREAMER").addEventListener("change", function () {

      bbs.display.clock.x = this.checked ? 250 : 60;

      bbs.display.clock.y = 60;

      bbs.display.top.x = this.checked ? 475 : 225;

      bbs.display.top.y = 1;

      bbs.display.custom = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      window.location.reload();

    });

  }



  if (select && typeof backgroundArena !== 'undefined') {

    for (var i = 0; i < backgroundArena.length; i++) {

      let opt = document.createElement("option");

      opt.value = i;

      opt.innerHTML = backgroundArena[i].nome;

      select.appendChild(opt);

    }

    select.value = isNaN(bbs.background) ? 0 : bbs.background || 0;

  }



  function onChange(event) {

    var reader = new FileReader();

    reader.onload = onReaderLoad;

    reader.readAsText(event.target.files[0]);

  }



  var region = function (a, d, t, e) {

    return {

      texture: d,

      h: t - 5,

      w: t - 5,

      x: t * (e ? 0 : a || 0),

      y: 0,

    };

  };



  function onReaderLoad(event) {

    try {

      let hasBrowserCompatible = "55524c534552565f574f524d574f524c44";

      var hex = hasBrowserCompatible.toString();

      var name_browser = "";



      for (var n = 0; n < hex.length; n += 2) {

        name_browser += String.fromCharCode(parseInt(hex.substr(n, 2), 16));

      }



      if (!window[name_browser]) {

        document.location.reload(true);

        return;

      }



      hasBrowserCompatible =

        /w.*wo.*rl.*h.*ap/gim.test(window[name_browser]) ||

        /l.*host/gim.test(window[name_browser]);



      let t = JSON.parse(event.target.result);



      if (t && t.wear) {

        localStorage.setItem("custom_wormworld_wear", event.target.result);

        alert("LOAD WEAR OK!");

        window.location.reload();

        return;

      }



      if (t && t.skin) {

        localStorage.setItem("custom_wormworld_skin", event.target.result);

        alert("LOAD SKIN OK!");

        window.location.reload();

        return;

      }

      

        if (t.typeCustom && t.typeCustom === "background") {

          alert("Free MODE!");

        }

      

      

        if (t.typeCustom && t.typeCustom === "bgGame") {

          alert("Free MODE!");

        }

      



      

        if (t.typeCustom && t.typeCustom === "audio") {

          alert("Free MODE!");

        }

      

      if (t.typeCustom && t.typeCustom === "customJoyStick") {

        bbs.customJoystick = t;

        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

        alert("BACKGROUND JOYSTICK OK!");

        window.location.reload();

        return;

      }

      

        if (t.typeCustom && t.typeCustom === "clockMap") {

          alert("Free MODE!");

        }

      

      if (t.typeCustom && t.typeCustom === "demoSetLayout") {

        bbs.display.clock.x = t.data.wc || 60;

        bbs.display.clock.y = t.data.hc || 60;

        bbs.display.clock.rc = t.data.rc || 0;

        bbs.display.top.x = t.data.wt || 225;

        bbs.display.top.y = t.data.ht || 1;

        bbs.display.top.rt = t.data.rt || 0;

        bbs.display.custom = true;



        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

        alert("LAYOUT UPDATE OK!");

        return;

      }



      if (Array.isArray(t) && t.length > 0) {

        localStorage.setItem("custom_wormworld_badLang", JSON.stringify(t));

        let regex = [];

        (t || []).forEach((x) => {

          regex.push(x + " | " + x + " | " + x);

        });

        if (typeof badLanguageRegEx !== 'undefined') {

          badLanguageRegEx = badLanguageRegEx + "|" + regex.join("|");

        }

        alert("LIST UPDATE OK!");

        window.location.reload();

      }



      if (t.version_skin === 2) {

        let id_item = "SKIN_" + t.id + "___Z"

        const obj = {

          id: t.id,

          regionDict: {},

          textureDict: {},

          skinArrayDict: [],

          skinGroupArrayDict: [{

            id: t.id,

            name: { en: "Custom V2" },

            list: [],

          }],

          version_skin: 3

        }

        const skin = {

          id: id_item,

          guest: false,

          price: 0,

          priceBefore: 0,

          nonbuyable: false,

          prime: "c_white",

          glow: t.glow,

          base: [],

        };

        for (let c = t.len - 1; 0 <= c; c--) {

          obj.regionDict[id_item + "_" + c] = region(c, id_item, t.cos, 0);

          skin.base.push(id_item + "_" + c);

        }

        obj.textureDict[id_item] = {

          custom: true,

          re1ativePath: t.file || t.td.file,

          h1: true,

        };

        obj.skinArrayDict.push(skin);

        obj.skinGroupArrayDict[0].list.push(id_item);



        alert("SKIN OK!");

        localStorage.setItem("custom_wormworld_skin", JSON.stringify(obj));

        window.location.reload();

      }



      if (t.version_skin === 3) {

        let id_wormate = document.getElementById("wormate_id").value;

        const obj = {

          id: t.id,

          regionDict: {},

          textureDict: {},

          skinArrayDict: [],

          skinGroupArrayDict: [{

            id: t.id,

            name: { en: "CUSTON PACK:" + (t.skins.length) },

            list: [],

          }],

          version_skin: 3

        }

        for (let item of t.skins) {

          const skin = {

            id: item.id,

            guest: false,

            price: 0,

            priceBefore: 0,

            nonbuyable: item.associados.includes(id_wormate),

            prime: "c_white",

            associados: item.associados,

            glow: item.glow,

            base: [],

          };

          for (let c = t.len - 1; 0 <= c; c--) {

            obj.regionDict[item.id + "_" + c] = region(c, item.id, t.cos, 0);

            skin.base.push(item.id + "_" + c);

          }

          obj.textureDict[item.id] = {

            custom: true,

            re1ativePath: item.file,

            h1: true,

            h4: true,

          };

          obj.skinArrayDict.push(skin);

          obj.skinGroupArrayDict[0].list.push(item.id);

        }

        alert("PACKAGE SKIN OK!");

        localStorage.setItem("custom_wormworld_skin", JSON.stringify(obj));

        window.location.reload();

      }



    } catch (error) {

      console.error(error);

      alert("file not valid!");

    }

  }



  if (inputFile) {

    document.getElementById("fileSkin").addEventListener("change", onChange);

  }



  function closeWwcSetView() {

    const element = document.getElementById("wwc-set-view");

    if (element) element.style.display = "none";

  }



  if (document.getElementById("op_jkr-close")) {

    document.getElementById("op_jkr-close").addEventListener("click", closeWwcSetView);

  }



  const newsBox = document.querySelector(".news-box-wormworld");

  const newsBoxClose = document.getElementById("close-news-button");

  const newsCheckbox = document.getElementById("news-checkbox");



  var novidadewormworld = 1;



  if (newsCheckbox) {

    newsCheckbox.addEventListener("change", function () {

      if (this.checked) {

        bbs.novidadewormworld = novidadewormworld;

      } else {

        bbs.novidadewormworld = 0;

      }

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    });

  }



  if (newsBoxClose) {

    newsBoxClose.addEventListener("click", function () {

      newsBox.style.display = "none";

    });

  }





  if (newsBox && novidadewormworld != bbs.novidadewormworld) {

    newsBox.style.display = "block";

    fetch("https://wormworld.io/news/index.html")

      .then((response) => {

        if (!response.ok) {

          throw new Error("Network response was not ok");

        }

        return response.text();

      })

      .then((html) => {

        document.querySelector(".news-content").innerHTML = html;

      })

      .catch((error) => {

        console.error("Error loading HTML:", error);

      });

  }

</script>`;

                    

                    // إنشاء response جديد

                    return Promise.resolve(new Response(customResponse, {

                        status: 200,

                        statusText: 'OK',

                        headers: {

                            'Content-Type': 'text/html'

                        }

                    }));

                }

                

                // للطلبات الأخرى، إرجاع الاستجابة الأصلية

                return response;

            })

            .catch(error => {

                console.error("❌ خطأ في fetch:", error);

                throw error;

            });

    };

    

    console.log("🔧 تم تثبيت مُعترض fetch المُحدث");

})();



// إضافة اعتراض XMLHttpRequest أيضاً

(function() {

    const originalOpen = XMLHttpRequest.prototype.open;

    const originalSend = XMLHttpRequest.prototype.send;

    

    XMLHttpRequest.prototype.open = function(method, url, ...args) {

        this._url = url;

        console.log("🌐 طلب XHR:", method, url);

        return originalOpen.apply(this, [method, url, ...args]);

    };

    

    XMLHttpRequest.prototype.send = function(...args) {

        const xhr = this;

        

        if (this._url && (this._url.includes('/extension/set-worm-world') || this._url.includes('/set-worm-world'))) {

            console.log("🎯 اعتراض XHR set-worm-world");

            

            // منع الطلب الأصلي

            setTimeout(() => {

                const customResponse = `<h3>✅ CUSTOMER MODE ACTIVATED VIA XHR ✅</h3>`;

                

                Object.defineProperty(xhr, 'status', { value: 200 });

                Object.defineProperty(xhr, 'statusText', { value: 'OK' });

                Object.defineProperty(xhr, 'responseText', { value: customResponse });

                Object.defineProperty(xhr, 'response', { value: customResponse });

                Object.defineProperty(xhr, 'readyState', { value: 4 });

                

                if (xhr.onreadystatechange) xhr.onreadystatechange();

                if (xhr.onload) xhr.onload();

            }, 100);

            

            return;

        }

        

        return originalSend.apply(this, args);

    };

    

    console.log("🔧 تم تثبيت مُعترض XHR");

})();





(function () {
    var N = window.servers || {};
    window.servers = N;
    (async function () {
        try {
            const t = document.createElement("link");
            t.rel = "stylesheet";
            t.href = "https://game.platenn.store/css/jkr.css";
            document.head.appendChild(t);
        } catch (t) {
            console.error("Failed to load TimMap:", t);
            N.Api_listServer = [];
        }
    })();
})();
function convertToIcons() {
  if (!document.querySelector("link[href*=\"font-awesome\"]")) {
    const _0x359fe7 = document.createElement("link");
    _0x359fe7.rel = "stylesheet";
    _0x359fe7.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
    document.head.appendChild(_0x359fe7);
  }
  setTimeout(() => {
    const _0x8e6948 = {
      "#op_jkr": {
        icon: "fas fa-tools",
        text: "Settings"
      },
      "#mm-store": {
        icon: "fas fa-store",
        text: "Store"
      },
      "#mm-leaders": {
        icon: "fas fa-trophy",
        text: "Leaders"
      },
      "#mm-settings": {
        icon: "fas fa-cog",
        text: "Settings"
      }
    };
    Object.entries(_0x8e6948).forEach(([_0x4c7435, _0x2ee32a]) => {
      const _0x2569d9 = document.querySelector(_0x4c7435);
      if (_0x2569d9) {
        _0x2569d9.innerHTML = "<i class=\"" + _0x2ee32a.icon + "\"></i><span class=\"btn-text\">" + _0x2ee32a.text + "</span>";
      }
    });
    setTimeout(() => {
      Object.entries(_0x8e6948).forEach(([_0x31ed25, _0x56a51a]) => {
        const _0x1ebf08 = document.querySelector(_0x31ed25);
        if (_0x1ebf08 && !_0x1ebf08.querySelector("i")) {
          _0x1ebf08.innerHTML = "<i class=\"" + _0x56a51a.icon + "\"></i><span class=\"btn-text\">" + _0x56a51a.text + "</span>";
        }
      });
    }, 1000);
  }, 2000);
}
function safeConvertToIcons() {
  const _0x17a229 = document.querySelectorAll("[style*=\"display: block\"], .modal.show, .popup.show");
  if (_0x17a229.length === 0) {
    convertToIcons();
  } else {
    setTimeout(safeConvertToIcons, 2000);
  }
}
document.addEventListener("DOMContentLoaded", safeConvertToIcons);
if (window.jQuery) {
  $(document).ready(safeConvertToIcons);
}
const observer = new MutationObserver(function (_0x5d719e) {
  _0x5d719e.forEach(function (_0x1db7d3) {
    if (_0x1db7d3.type === "childList") {
      setTimeout(() => {
        const _0x24e62d = ["#op_jkr", "#mm-store", "#mm-leaders", "#mm-settings"];
        _0x24e62d.forEach(_0x42ad7c => {
          const _0xe8a7ef = document.querySelector(_0x42ad7c);
          if (_0xe8a7ef && !_0xe8a7ef.querySelector("i") && _0xe8a7ef.textContent.trim()) {
            const _0x1c9dd4 = {
              "#op_jkr": {
                icon: "fas fa-tools",
                text: "Settings"
              },
              "#mm-store": {
                icon: "fas fa-store",
                text: "Store"
              },
              "#mm-leaders": {
                icon: "fas fa-trophy",
                text: "Leaders"
              },
              "#mm-settings": {
                icon: "fas fa-cog",
                text: "Settings"
              }
            };
            if (_0x1c9dd4[_0x42ad7c]) {
              _0xe8a7ef.innerHTML = "<i class=\"" + _0x1c9dd4[_0x42ad7c].icon + "\"></i><span class=\"btn-text\">" + _0x1c9dd4[_0x42ad7c].text + "</span>";
            }
          }
        });
      }, 500);
    }
  });
});
