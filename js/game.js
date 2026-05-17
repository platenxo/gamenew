(() => {
  var vO = {
    "./src/temp.js": (p6, p7, p8) => {
      'use strict';

      p8.r(p7);
      var vP8 = p8("./node_modules/howler/dist/howler.js");
      var v12 = p8.n(vP8);
      var vP82 = p8("./node_modules/socket.io-client/build/esm/index.js");
      p6 = p8.hmd(p6);
      function f(p9, p10) {
        for (var vLN02 = 0; vLN02 < p10.length; vLN02++) {
          var v13 = p10[vLN02];
          v13.enumerable = v13.enumerable || false;
          v13.configurable = true;
          if ("value" in v13) {
            v13.writable = true;
          }
          Object.defineProperty(p9, f21(v13.key), v13);
        }
      }
      function f2(p11, p12, p13) {
        if (p12) {
          f(p11.prototype, p12);
        }
        if (p13) {
          f(p11, p13);
        }
        Object.defineProperty(p11, "prototype", {
          writable: false
        });
        return p11;
      }
      function f3(p14, p15) {
        if (!(p14 instanceof p15)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function f4(p16) {
        return f7(p16) || f6(p16) || f16(p16) || f5();
      }
      function f5() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function f6(p17) {
        if (typeof Symbol !== "undefined" && p17[Symbol.iterator] != null || p17["@@iterator"] != null) {
          return Array.from(p17);
        }
      }
      function f7(p18) {
        if (Array.isArray(p18)) {
          return f17(p18);
        }
      }
      function f8(p19, p20) {
        var v14 = typeof Symbol !== "undefined" && p19[Symbol.iterator] || p19["@@iterator"];
        if (!v14) {
          if (Array.isArray(p19) || (v14 = f16(p19)) || p20 && p19 && typeof p19.length === "number") {
            if (v14) {
              p19 = v14;
            }
            var vLN03 = 0;
            var v_0x5d55f1 = function f9() {};
            return {
              s: v_0x5d55f1,
              n: function f10() {
                if (vLN03 >= p19.length) {
                  return {
                    done: true
                  };
                }
                return {
                  done: false,
                  value: p19[vLN03++]
                };
              },
              e: function f11(p21) {
                throw p21;
              },
              f: v_0x5d55f1
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var v15 = true;
        var v16 = false;
        var v17;
        return {
          s: function f12() {
            v14 = v14.call(p19);
          },
          n: function f13() {
            var v18 = v14.next();
            v15 = v18.done;
            return v18;
          },
          e: function f14(p22) {
            v16 = true;
            v17 = p22;
          },
          f: function f15() {
            try {
              if (!v15 && v14.return != null) {
                v14.return();
              }
            } finally {
              if (v16) {
                throw v17;
              }
            }
          }
        };
      }
      function f16(p23, p24) {
        if (!p23) {
          return;
        }
        if (typeof p23 === "string") {
          return f17(p23, p24);
        }
        var v19 = Object.prototype.toString.call(p23).slice(8, -1);
        if (v19 === "Object" && p23.constructor) {
          v19 = p23.constructor.name;
        }
        if (v19 === "Map" || v19 === "Set") {
          return Array.from(p23);
        }
        if (v19 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v19)) {
          return f17(p23, p24);
        }
      }
      function f17(p25, p26) {
        if (p26 == null || p26 > p25.length) {
          p26 = p25.length;
        }
        for (var vLN04 = 0, v20 = new Array(p26); vLN04 < p26; vLN04++) {
          v20[vLN04] = p25[vLN04];
        }
        return v20;
      }
      function f18(p27, p28) {
        var v21 = Object.keys(p27);
        if (Object.getOwnPropertySymbols) {
          var v22 = Object.getOwnPropertySymbols(p27);
          if (p28) {
            v22 = v22.filter(function (p29) {
              return Object.getOwnPropertyDescriptor(p27, p29).enumerable;
            });
          }
          v21.push.apply(v21, v22);
        }
        return v21;
      }
      function f19(p30) {
        for (var vLN1 = 1; vLN1 < arguments.length; vLN1++) {
          var v23 = arguments[vLN1] ?? {};
          if (vLN1 % 2) {
            f18(Object(v23), true).forEach(function (p31) {
              f20(p30, p31, v23[p31]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(p30, Object.getOwnPropertyDescriptors(v23));
          } else {
            f18(Object(v23)).forEach(function (p32) {
              Object.defineProperty(p30, p32, Object.getOwnPropertyDescriptor(v23, p32));
            });
          }
        }
        return p30;
      }
      function f20(p33, p34, p35) {
        p34 = f21(p34);
        if (p34 in p33) {
          Object.defineProperty(p33, p34, {
            value: p35,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          p33[p34] = p35;
        }
        return p33;
      }
      function f21(p36) {
        var v_0x268984 = f22(p36, "string");
        if (f58(v_0x268984) === "symbol") {
          return v_0x268984;
        } else {
          return String(v_0x268984);
        }
      }
      function f22(p37, p38) {
        if (f58(p37) !== "object" || p37 === null) {
          return p37;
        }
        var v24 = p37[Symbol.toPrimitive];
        if (v24 !== undefined) {
          var v25 = v24.call(p37, p38 || "default");
          if (f58(v25) !== "object") {
            return v25;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (p38 === "string" ? String : Number)(p37);
      }
      function f23() {
        'use strict';

        f23 = function f24() {
          return vO2;
        };
        var v26;
        var vO2 = {};
        var v27 = Object.prototype;
        var v28 = v27.hasOwnProperty;
        var v29 = Object.defineProperty || function (p39, p40, p41) {
          p39[p40] = p41.value;
        };
        var v30 = typeof Symbol == "function" ? Symbol : {};
        var v31 = v30.iterator || "@@iterator";
        var v32 = v30.asyncIterator || "@@asyncIterator";
        var v33 = v30.toStringTag || "@@toStringTag";
        function f25(p42, p43, p44) {
          Object.defineProperty(p42, p43, {
            value: p44,
            enumerable: true,
            configurable: true,
            writable: true
          });
          return p42[p43];
        }
        try {
          f25({}, "");
        } catch (e2) {
          f25 = function f26(p45, p46, p47) {
            return p45[p46] = p47;
          };
        }
        function f27(p48, p49, p50, p51) {
          var v34 = p49 && p49.prototype instanceof f29 ? p49 : f29;
          var v35 = Object.create(v34.prototype);
          var v36 = new f41(p51 || []);
          v29(v35, "_invoke", {
            value: f37(p48, p50, v36)
          });
          return v35;
        }
        function f28(p52, p53, p54) {
          try {
            return {
              type: "normal",
              arg: p52.call(p53, p54)
            };
          } catch (e3) {
            return {
              type: "throw",
              arg: e3
            };
          }
        }
        vO2.wrap = f27;
        var vLSSuspendedStart = "suspendedStart";
        var vLSSuspendedYield = "suspendedYield";
        var vLSExecuting = "executing";
        var vLSCompleted = "completed";
        var vO3 = {};
        function f29() {}
        function f30() {}
        function f31() {}
        var vO4 = {};
        f25(vO4, v31, function () {
          return this;
        });
        var v37 = Object.getPrototypeOf;
        var v38 = v37 && v37(v37(f42([])));
        if (v38 && v38 !== v27 && v28.call(v38, v31)) {
          vO4 = v38;
        }
        var v39 = f31.prototype = f29.prototype = Object.create(vO4);
        function f32(p55) {
          ["next", "throw", "return"].forEach(function (p56) {
            f25(p55, p56, function (p57) {
              return this._invoke(p56, p57);
            });
          });
        }
        function f33(p58, p59) {
          function f34(p60, p61, p62, p63) {
            var vF28 = f28(p58[p60], p58, p61);
            if (vF28.type !== "throw") {
              var v40 = vF28.arg;
              var v41 = v40.value;
              if (v41 && f58(v41) == "object" && v28.call(v41, "__await")) {
                return p59.resolve(v41.__await).then(function (p64) {
                  f34("next", p64, p62, p63);
                }, function (p65) {
                  f34("throw", p65, p62, p63);
                });
              } else {
                return p59.resolve(v41).then(function (p66) {
                  v40.value = p66;
                  p62(v40);
                }, function (p67) {
                  return f34("throw", p67, p62, p63);
                });
              }
            }
            p63(vF28.arg);
          }
          var v42;
          v29(this, "_invoke", {
            value: function f35(p68, p69) {
              function f36() {
                return new p59(function (p70, p71) {
                  f34(p68, p69, p70, p71);
                });
              }
              return v42 = v42 ? v42.then(f36, f36) : f36();
            }
          });
        }
        function f37(p72, p73, p74) {
          var vVLSSuspendedStart = vLSSuspendedStart;
          return function (p75, p76) {
            if (vVLSSuspendedStart === vLSExecuting) {
              throw new Error("Generator is already running");
            }
            if (vVLSSuspendedStart === vLSCompleted) {
              if (p75 === "throw") {
                throw p76;
              }
              return {
                value: v26,
                done: true
              };
            }
            p74.method = p75;
            p74.arg = p76;
            while (true) {
              var v43 = p74.delegate;
              if (v43) {
                var v_0x46eddb = f38(v43, p74);
                if (v_0x46eddb) {
                  if (v_0x46eddb === vO3) {
                    continue;
                  }
                  return v_0x46eddb;
                }
              }
              if (p74.method === "next") {
                p74.sent = p74._sent = p74.arg;
              } else if (p74.method === "throw") {
                if (vVLSSuspendedStart === vLSSuspendedStart) {
                  vVLSSuspendedStart = vLSCompleted;
                  throw p74.arg;
                }
                p74.dispatchException(p74.arg);
              } else if (p74.method === "return") {
                p74.abrupt("return", p74.arg);
              }
              vVLSSuspendedStart = vLSExecuting;
              var vF282 = f28(p72, p73, p74);
              if (vF282.type === "normal") {
                vVLSSuspendedStart = p74.done ? vLSCompleted : vLSSuspendedYield;
                if (vF282.arg === vO3) {
                  continue;
                }
                return {
                  value: vF282.arg,
                  done: p74.done
                };
              }
              if (vF282.type === "throw") {
                vVLSSuspendedStart = vLSCompleted;
                p74.method = "throw";
                p74.arg = vF282.arg;
              }
            }
          };
        }
        function f38(p77, p78) {
          var v44 = p78.method;
          var v45 = p77.iterator[v44];
          if (v45 === v26) {
            p78.delegate = null;
            if (v44 !== "throw" || !p77.iterator.return || !(p78.method = "return", p78.arg = v26, f38(p77, p78), p78.method === "throw")) {
              if (v44 !== "return") {
                p78.method = "throw";
                p78.arg = new TypeError("The iterator does not provide a '" + v44 + "' method");
              }
            }
            return vO3;
          }
          var vF283 = f28(v45, p77.iterator, p78.arg);
          if (vF283.type === "throw") {
            p78.method = "throw";
            p78.arg = vF283.arg;
            p78.delegate = null;
            return vO3;
          }
          var v46 = vF283.arg;
          if (v46) {
            if (v46.done) {
              p78[p77.resultName] = v46.value;
              p78.next = p77.nextLoc;
              if (p78.method !== "return") {
                p78.method = "next";
                p78.arg = v26;
              }
              p78.delegate = null;
              return vO3;
            } else {
              return v46;
            }
          } else {
            p78.method = "throw";
            p78.arg = new TypeError("iterator result is not an object");
            p78.delegate = null;
            return vO3;
          }
        }
        function f39(p79) {
          var vO5 = {
            tryLoc: p79[0]
          };
          if (1 in p79) {
            vO5.catchLoc = p79[1];
          }
          if (2 in p79) {
            vO5.finallyLoc = p79[2];
            vO5.afterLoc = p79[3];
          }
          this.tryEntries.push(vO5);
        }
        function f40(p80) {
          var v47 = p80.completion || {};
          v47.type = "normal";
          delete v47.arg;
          p80.completion = v47;
        }
        function f41(p81) {
          this.tryEntries = [{
            tryLoc: "root"
          }];
          p81.forEach(f39, this);
          this.reset(true);
        }
        function f42(p82) {
          if (p82 || p82 === "") {
            var v48 = p82[v31];
            if (v48) {
              return v48.call(p82);
            }
            if (typeof p82.next == "function") {
              return p82;
            }
            if (!isNaN(p82.length)) {
              var v49 = -1;
              var v_0x3f97e4 = function f43() {
                while (++v49 < p82.length) {
                  if (v28.call(p82, v49)) {
                    f43.value = p82[v49];
                    f43.done = false;
                    return f43;
                  }
                }
                f43.value = v26;
                f43.done = true;
                return f43;
              };
              return v_0x3f97e4.next = v_0x3f97e4;
            }
          }
          throw new TypeError(f58(p82) + " is not iterable");
        }
        f30.prototype = f31;
        v29(v39, "constructor", {
          value: f31,
          configurable: true
        });
        v29(f31, "constructor", {
          value: f30,
          configurable: true
        });
        f30.displayName = f25(f31, v33, "GeneratorFunction");
        vO2.isGeneratorFunction = function (p83) {
          var v50 = typeof p83 == "function" && p83.constructor;
          return !!v50 && (v50 === f30 || (v50.displayName || v50.name) === "GeneratorFunction");
        };
        vO2.mark = function (p84) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(p84, f31);
          } else {
            p84.__proto__ = f31;
            f25(p84, v33, "GeneratorFunction");
          }
          p84.prototype = Object.create(v39);
          return p84;
        };
        vO2.awrap = function (p85) {
          return {
            __await: p85
          };
        };
        f32(f33.prototype);
        f25(f33.prototype, v32, function () {
          return this;
        });
        vO2.AsyncIterator = f33;
        vO2.async = function (p86, p87, p88, p89, p90 = Promise) {
          var v51 = new f33(f27(p86, p87, p88, p89), p90);
          if (vO2.isGeneratorFunction(p87)) {
            return v51;
          } else {
            return v51.next().then(function (p91) {
              if (p91.done) {
                return p91.value;
              } else {
                return v51.next();
              }
            });
          }
        };
        f32(v39);
        f25(v39, v33, "Generator");
        f25(v39, v31, function () {
          return this;
        });
        f25(v39, "toString", function () {
          return "[object Generator]";
        });
        vO2.keys = function (p92) {
          var vObject = Object(p92);
          var vA2 = [];
          for (var v52 in vObject) {
            vA2.push(v52);
          }
          vA2.reverse();
          return function f44() {
            while (vA2.length) {
              var v53 = vA2.pop();
              if (v53 in vObject) {
                f44.value = v53;
                f44.done = false;
                return f44;
              }
            }
            f44.done = true;
            return f44;
          };
        };
        vO2.values = f42;
        f41.prototype = {
          constructor: f41,
          reset: function f45(p93) {
            this.prev = 0;
            this.next = 0;
            this.sent = this._sent = v26;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = v26;
            this.tryEntries.forEach(f40);
            if (!p93) {
              for (var v54 in this) {
                if (v54.charAt(0) === "t" && v28.call(this, v54) && !isNaN(+v54.slice(1))) {
                  this[v54] = v26;
                }
              }
            }
          },
          stop: function f46() {
            this.done = true;
            var v55 = this.tryEntries[0].completion;
            if (v55.type === "throw") {
              throw v55.arg;
            }
            return this.rval;
          },
          dispatchException: function f47(p94) {
            if (this.done) {
              throw p94;
            }
            var vThis = this;
            function f48(p95, p96) {
              v58.type = "throw";
              v58.arg = p94;
              vThis.next = p95;
              if (p96) {
                vThis.method = "next";
                vThis.arg = v26;
              }
              return !!p96;
            }
            for (var v56 = this.tryEntries.length - 1; v56 >= 0; --v56) {
              var v57 = this.tryEntries[v56];
              var v58 = v57.completion;
              if (v57.tryLoc === "root") {
                return f48("end");
              }
              if (v57.tryLoc <= this.prev) {
                var v59 = v28.call(v57, "catchLoc");
                var v60 = v28.call(v57, "finallyLoc");
                if (v59 && v60) {
                  if (this.prev < v57.catchLoc) {
                    return f48(v57.catchLoc, true);
                  }
                  if (this.prev < v57.finallyLoc) {
                    return f48(v57.finallyLoc);
                  }
                } else if (v59) {
                  if (this.prev < v57.catchLoc) {
                    return f48(v57.catchLoc, true);
                  }
                } else {
                  if (!v60) {
                    throw new Error("try statement without catch or finally");
                  }
                  if (this.prev < v57.finallyLoc) {
                    return f48(v57.finallyLoc);
                  }
                }
              }
            }
          },
          abrupt: function f49(p97, p98) {
            for (var v61 = this.tryEntries.length - 1; v61 >= 0; --v61) {
              var v62 = this.tryEntries[v61];
              if (v62.tryLoc <= this.prev && v28.call(v62, "finallyLoc") && this.prev < v62.finallyLoc) {
                var vV62 = v62;
                break;
              }
            }
            if (vV62 && (p97 === "break" || p97 === "continue") && vV62.tryLoc <= p98 && p98 <= vV62.finallyLoc) {
              vV62 = null;
            }
            var v63 = vV62 ? vV62.completion : {};
            v63.type = p97;
            v63.arg = p98;
            if (vV62) {
              this.method = "next";
              this.next = vV62.finallyLoc;
              return vO3;
            } else {
              return this.complete(v63);
            }
          },
          complete: function f50(p99, p100) {
            if (p99.type === "throw") {
              throw p99.arg;
            }
            if (p99.type === "break" || p99.type === "continue") {
              this.next = p99.arg;
            } else if (p99.type === "return") {
              this.rval = this.arg = p99.arg;
              this.method = "return";
              this.next = "end";
            } else if (p99.type === "normal" && p100) {
              this.next = p100;
            }
            return vO3;
          },
          finish: function f51(p101) {
            for (var v64 = this.tryEntries.length - 1; v64 >= 0; --v64) {
              var v65 = this.tryEntries[v64];
              if (v65.finallyLoc === p101) {
                this.complete(v65.completion, v65.afterLoc);
                f40(v65);
                return vO3;
              }
            }
          },
          catch: function f52(p102) {
            for (var v66 = this.tryEntries.length - 1; v66 >= 0; --v66) {
              var v67 = this.tryEntries[v66];
              if (v67.tryLoc === p102) {
                var v68 = v67.completion;
                if (v68.type === "throw") {
                  var v69 = v68.arg;
                  f40(v67);
                }
                return v69;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function f53(p103, p104, p105) {
            this.delegate = {
              iterator: f42(p103),
              resultName: p104,
              nextLoc: p105
            };
            if (this.method === "next") {
              this.arg = v26;
            }
            return vO3;
          }
        };
        return vO2;
      }
      function f54(p106, p107, p108, p109, p110, p111, p112) {
        try {
          var v70 = p106[p111](p112);
          var v71 = v70.value;
        } catch (e4) {
          p108(e4);
          return;
        }
        if (v70.done) {
          p107(v71);
        } else {
          Promise.resolve(v71).then(p109, p110);
        }
      }
      function f55(p113) {
        return function () {
          var vThis2 = this;
          var vArguments = arguments;
          return new Promise(function (p114, p115) {
            var v72 = p113.apply(vThis2, vArguments);
            function f56(p116) {
              f54(v72, p114, p115, f56, f57, "next", p116);
            }
            function f57(p117) {
              f54(v72, p114, p115, f56, f57, "throw", p117);
            }
            f56(undefined);
          });
        };
      }
      function f58(p118) {
        '@babel/helpers - typeof';

        f58 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p119) {
          return typeof p119;
        } : function (p120) {
          if (p120 && typeof Symbol == "function" && p120.constructor === Symbol && p120 !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof p120;
          }
        };
        return f58(p118);
      }
      var vLN05 = 0;
      window.URLSERV_WORMWORLD = vLN05 ? "http://localhost:3102" : "https://wormworld.io/extension";
      window.URL_CDN = vLN05 ? "http://localhost:3000" : "https://asserts.wormworld.io";
      window.URL_CDN_B = vLN05 ? "localhost:3000" : "asserts.wormworld.io";
      window.URL_CDN_C = vLN05;
      window.URL_CDN_IKIT = "https://ik.imagekit.io/jdfnxk119";
      var v73 = /(.{18})(([AB])([0-9A-Za-z_]{2})([0-9A-Za-z]{3})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2}))/;
      var v74 = true;
      var v75 = true;
      var v76 = false;
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
      (function (p121) {
        if ((typeof exports === "undefined" ? "undefined" : f58(exports)) === "object" && "object" !== "undefined") {
          p6.exports = p121();
        } else if (typeof define === "function" && p8.amdO) {
          define([], p121);
        } else {
          var v77;
          if (typeof window !== "undefined") {
            v77 = window;
          } else if (typeof p8.g !== "undefined") {
            v77 = p8.g;
          } else if (typeof self !== "undefined") {
            v77 = self;
          } else {
            v77 = this;
          }
          v77.nipplejs = p121();
        }
      })(function () {
        var v78;
        var v79;
        var v80;
        "use strict";
        var v81 = !!("ontouchstart" in window);
        var v82 = window.PointerEvent ? true : false;
        var v83 = window.MSPointerEvent ? true : false;
        var vO6 = {
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
        var v84;
        var vO7 = {};
        if (v82) {
          v84 = vO6.pointer;
        } else if (v83) {
          v84 = vO6.MSPointer;
        } else if (v81) {
          v84 = vO6.touch;
          vO7 = vO6.mouse;
        } else {
          v84 = vO6.mouse;
        }
        var vO8 = {};
        vO8.distance = function (p122, p123) {
          var v85 = p123.x - p122.x;
          var v86 = p123.y - p122.y;
          return Math.sqrt(v85 * v85 + v86 * v86);
        };
        vO8.angle = function (p124, p125) {
          var v87 = p125.x - p124.x;
          var v88 = p125.y - p124.y;
          return vO8.degrees(Math.atan2(v88, v87));
        };
        vO8.findCoord = function (p126, p127, p128) {
          var vO9 = {
            x: 0,
            y: 0
          };
          p128 = vO8.radians(p128);
          vO9.x = p126.x - p127 * Math.cos(p128);
          vO9.y = p126.y - p127 * Math.sin(p128);
          return vO9;
        };
        vO8.radians = function (p129) {
          return p129 * (Math.PI / 180);
        };
        vO8.degrees = function (p130) {
          return p130 * (180 / Math.PI);
        };
        vO8.bindEvt = function (p131, p132, p133) {
          var v89 = p132.split(/[ ,]+/g);
          var v90;
          for (var vLN06 = 0; vLN06 < v89.length; vLN06 += 1) {
            v90 = v89[vLN06];
            if (p131.addEventListener) {
              p131.addEventListener(v90, p133, false);
            } else if (p131.attachEvent) {
              p131.attachEvent(v90, p133);
            }
          }
        };
        vO8.unbindEvt = function (p134, p135, p136) {
          var v91 = p135.split(/[ ,]+/g);
          var v92;
          for (var vLN07 = 0; vLN07 < v91.length; vLN07 += 1) {
            v92 = v91[vLN07];
            if (p134.removeEventListener) {
              p134.removeEventListener(v92, p136);
            } else if (p134.detachEvent) {
              p134.detachEvent(v92, p136);
            }
          }
        };
        vO8.trigger = function (p137, p138, p139) {
          var v93 = new CustomEvent(p138, p139);
          p137.dispatchEvent(v93);
        };
        vO8.prepareEvent = function (p140) {
          p140.preventDefault();
          if (p140.type.match(/^touch/)) {
            return p140.changedTouches;
          } else {
            return p140;
          }
        };
        vO8.getScroll = function () {
          var v94 = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
          var v95 = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
          return {
            x: v94,
            y: v95
          };
        };
        vO8.applyPosition = function (p141, p142) {
          if (p142.top || p142.right || p142.bottom || p142.left) {
            p141.style.top = p142.top;
            p141.style.right = p142.right;
            p141.style.bottom = p142.bottom;
            p141.style.left = p142.left;
          } else {
            p141.style.left = p142.x + "px";
            p141.style.top = p142.y + "px";
          }
        };
        vO8.getTransitionStyle = function (p143, p144, p145) {
          var v96 = vO8.configStylePropertyObject(p143);
          for (var v97 in v96) {
            if (v96.hasOwnProperty(v97)) {
              if (typeof p144 === "string") {
                v96[v97] = p144 + " " + p145;
              } else {
                var vLS = "";
                for (var vLN08 = 0, v98 = p144.length; vLN08 < v98; vLN08 += 1) {
                  vLS += p144[vLN08] + " " + p145 + ", ";
                }
                v96[v97] = vLS.slice(0, -2);
              }
            }
          }
          return v96;
        };
        vO8.getVendorStyle = function (p146, p147) {
          var v99 = vO8.configStylePropertyObject(p146);
          for (var v100 in v99) {
            if (v99.hasOwnProperty(v100)) {
              v99[v100] = p147;
            }
          }
          return v99;
        };
        vO8.configStylePropertyObject = function (p148) {
          var vO10 = {
            [p148]: ""
          };
          var vA3 = ["webkit", "Moz", "o"];
          vA3.forEach(function (p149) {
            vO10[p149 + p148.charAt(0).toUpperCase() + p148.slice(1)] = "";
          });
          return vO10;
        };
        vO8.extend = function (p150, p151) {
          for (var v101 in p151) {
            if (p151.hasOwnProperty(v101)) {
              p150[v101] = p151[v101];
            }
          }
          return p150;
        };
        vO8.safeExtend = function (p152, p153) {
          var vO11 = {};
          for (var v102 in p152) {
            if (p152.hasOwnProperty(v102) && p153.hasOwnProperty(v102)) {
              vO11[v102] = p153[v102];
            } else if (p152.hasOwnProperty(v102)) {
              vO11[v102] = p152[v102];
            }
          }
          return vO11;
        };
        vO8.map = function (p154, p155) {
          if (p154.length) {
            for (var vLN09 = 0, v103 = p154.length; vLN09 < v103; vLN09 += 1) {
              p155(p154[vLN09]);
            }
          } else {
            p155(p154);
          }
        };
        function f59() {}
        ;
        f59.prototype.on = function (p156, p157) {
          var vThis3 = this;
          var v104 = p156.split(/[ ,]+/g);
          var v105;
          vThis3._handlers_ = vThis3._handlers_ || {};
          for (var vLN010 = 0; vLN010 < v104.length; vLN010 += 1) {
            v105 = v104[vLN010];
            vThis3._handlers_[v105] = vThis3._handlers_[v105] || [];
            vThis3._handlers_[v105].push(p157);
          }
          return vThis3;
        };
        f59.prototype.off = function (p158, p159) {
          var vThis4 = this;
          vThis4._handlers_ = vThis4._handlers_ || {};
          if (p158 === undefined) {
            vThis4._handlers_ = {};
          } else if (p159 === undefined) {
            vThis4._handlers_[p158] = null;
          } else if (vThis4._handlers_[p158] && vThis4._handlers_[p158].indexOf(p159) >= 0) {
            vThis4._handlers_[p158].splice(vThis4._handlers_[p158].indexOf(p159), 1);
          }
          return vThis4;
        };
        f59.prototype.trigger = function (p160, p161) {
          var vThis5 = this;
          var v106 = p160.split(/[ ,]+/g);
          var v107;
          vThis5._handlers_ = vThis5._handlers_ || {};
          for (var vLN011 = 0; vLN011 < v106.length; vLN011 += 1) {
            v107 = v106[vLN011];
            if (vThis5._handlers_[v107] && vThis5._handlers_[v107].length) {
              vThis5._handlers_[v107].forEach(function (p162) {
                p162.call(vThis5, {
                  type: v107,
                  target: vThis5
                }, p161);
              });
            }
          }
        };
        f59.prototype.config = function (p163) {
          var vThis6 = this;
          vThis6.options = vThis6.defaults || {};
          if (p163) {
            vThis6.options = vO8.safeExtend(vThis6.options, p163);
          }
        };
        f59.prototype.bindEvt = function (p164, p165) {
          var vThis7 = this;
          vThis7._domHandlers_ = vThis7._domHandlers_ || {};
          vThis7._domHandlers_[p165] = function () {
            if (typeof vThis7["on" + p165] === "function") {
              vThis7["on" + p165].apply(vThis7, arguments);
            } else {
              console.warn("[WARNING] : Missing \"on" + p165 + "\" handler.");
            }
          };
          vO8.bindEvt(p164, v84[p165], vThis7._domHandlers_[p165]);
          if (vO7[p165]) {
            vO8.bindEvt(p164, vO7[p165], vThis7._domHandlers_[p165]);
          }
          return vThis7;
        };
        f59.prototype.unbindEvt = function (p166, p167) {
          var vThis8 = this;
          vThis8._domHandlers_ = vThis8._domHandlers_ || {};
          vO8.unbindEvt(p166, v84[p167], vThis8._domHandlers_[p167]);
          if (vO7[p167]) {
            vO8.unbindEvt(p166, vO7[p167], vThis8._domHandlers_[p167]);
          }
          delete vThis8._domHandlers_[p167];
          return this;
        };
        function f60(p168, p169) {
          this.identifier = p169.identifier;
          this.position = p169.position;
          this.frontPosition = p169.frontPosition;
          this.collection = p168;
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
          this.config(p169);
          if (this.options.mode === "dynamic") {
            this.options.restOpacity = 0;
          }
          this.id = f60.id;
          f60.id += 1;
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
        f60.prototype = new f59();
        f60.constructor = f60;
        f60.id = 0;
        f60.prototype.buildEl = function (p170) {
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
        f60.prototype.stylize = function () {
          if (this.options.dataOnly) {
            return this;
          }
          var v108 = this.options.fadeTime + "ms";
          var v109 = vO8.getVendorStyle("borderRadius", "50%");
          var v110 = vO8.getTransitionStyle("transition", "opacity", v108);
          var vO12 = {
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
          vO8.extend(vO12.el, v110);
          vO8.extend(vO12.back, v109);
          vO8.extend(vO12.front, v109);
          this.applyStyles(vO12);
          return this;
        };
        f60.prototype.applyStyles = function (p171) {
          for (var v111 in this.ui) {
            if (this.ui.hasOwnProperty(v111)) {
              for (var v112 in p171[v111]) {
                this.ui[v111].style[v112] = p171[v111][v112];
              }
            }
          }
          return this;
        };
        f60.prototype.addToDom = function () {
          if (this.options.dataOnly || document.body.contains(this.ui.el)) {
            return this;
          }
          this.options.zone.appendChild(this.ui.el);
          return this;
        };
        f60.prototype.removeFromDom = function () {
          if (this.options.dataOnly || !document.body.contains(this.ui.el)) {
            return this;
          }
          this.options.zone.removeChild(this.ui.el);
          return this;
        };
        f60.prototype.destroy = function () {
          clearTimeout(this.removeTimeout);
          clearTimeout(this.showTimeout);
          clearTimeout(this.restTimeout);
          this.trigger("destroyed", this.instance);
          this.removeFromDom();
          this.off();
        };
        f60.prototype.show = function (p172) {
          var vThis9 = this;
          if (vThis9.options.dataOnly) {
            return vThis9;
          }
          clearTimeout(vThis9.removeTimeout);
          clearTimeout(vThis9.showTimeout);
          clearTimeout(vThis9.restTimeout);
          vThis9.addToDom();
          vThis9.restCallback();
          setTimeout(function () {
            vThis9.ui.el.style.opacity = 1;
          }, 0);
          vThis9.showTimeout = setTimeout(function () {
            vThis9.trigger("shown", vThis9.instance);
            if (typeof p172 === "function") {
              p172.call(this);
            }
          }, vThis9.options.fadeTime);
          return vThis9;
        };
        f60.prototype.hide = function (p173) {
          var vThis10 = this;
          if (vThis10.options.dataOnly) {
            return vThis10;
          }
          vThis10.ui.el.style.opacity = vThis10.options.restOpacity;
          clearTimeout(vThis10.removeTimeout);
          clearTimeout(vThis10.showTimeout);
          clearTimeout(vThis10.restTimeout);
          vThis10.removeTimeout = setTimeout(function () {
            var v113 = vThis10.options.mode === "dynamic" ? "none" : "block";
            vThis10.ui.el.style.display = v113;
            if (typeof p173 === "function") {
              p173.call(vThis10);
            }
            vThis10.trigger("hidden", vThis10.instance);
          }, vThis10.options.fadeTime);
          if (vThis10.options.restJoystick) {
            vThis10.restPosition();
          }
          return vThis10;
        };
        f60.prototype.restPosition = function (p174) {
          var vThis11 = this;
          vThis11.frontPosition = {
            x: 0,
            y: 0
          };
          var v114 = vThis11.options.fadeTime + "ms";
          var vO13 = {};
          vO13.front = vO8.getTransitionStyle("transition", ["top", "left"], v114);
          var vO14 = {
            front: {}
          };
          vO14.front = {
            left: vThis11.frontPosition.x + "px",
            top: vThis11.frontPosition.y + "px"
          };
          vThis11.applyStyles(vO13);
          vThis11.applyStyles(vO14);
          vThis11.restTimeout = setTimeout(function () {
            if (typeof p174 === "function") {
              p174.call(vThis11);
            }
            vThis11.restCallback();
          }, vThis11.options.fadeTime);
        };
        f60.prototype.restCallback = function () {
          var vThis12 = this;
          var vO15 = {};
          vO15.front = vO8.getTransitionStyle("transition", "none", "");
          vThis12.applyStyles(vO15);
          vThis12.trigger("rested", vThis12.instance);
        };
        f60.prototype.resetDirection = function () {
          this.direction = {
            x: false,
            y: false,
            angle: false
          };
        };
        f60.prototype.computeDirection = function (p175) {
          var v115 = p175.angle.radian;
          var v116 = Math.PI / 4;
          var v117 = Math.PI / 2;
          var v118;
          var v119;
          var v120;
          if (v115 > v116 && v115 < v116 * 3 && !p175.lockX) {
            v118 = "up";
          } else if (v115 > -v116 && v115 <= v116 && !p175.lockY) {
            v118 = "left";
          } else if (v115 > -v116 * 3 && v115 <= -v116 && !p175.lockX) {
            v118 = "down";
          } else if (!p175.lockY) {
            v118 = "right";
          }
          if (!p175.lockY) {
            if (v115 > -v117 && v115 < v117) {
              v119 = "left";
            } else {
              v119 = "right";
            }
          }
          if (!p175.lockX) {
            if (v115 > 0) {
              v120 = "up";
            } else {
              v120 = "down";
            }
          }
          if (p175.force > this.options.threshold) {
            var vO16 = {};
            for (var v121 in this.direction) {
              if (this.direction.hasOwnProperty(v121)) {
                vO16[v121] = this.direction[v121];
              }
            }
            var vO17 = {};
            this.direction = {
              x: v119,
              y: v120,
              angle: v118
            };
            p175.direction = this.direction;
            for (var v121 in vO16) {
              if (vO16[v121] === this.direction[v121]) {
                vO17[v121] = true;
              }
            }
            if (vO17.x && vO17.y && vO17.angle) {
              return p175;
            }
            if (!vO17.x || !vO17.y) {
              this.trigger("plain", p175);
            }
            if (!vO17.x) {
              this.trigger("plain:" + v119, p175);
            }
            if (!vO17.y) {
              this.trigger("plain:" + v120, p175);
            }
            if (!vO17.angle) {
              this.trigger("dir dir:" + v118, p175);
            }
          }
          return p175;
        };
        function f61(p176, p177) {
          var vThis13 = this;
          vThis13.nipples = [];
          vThis13.idles = [];
          vThis13.actives = [];
          vThis13.ids = [];
          vThis13.pressureIntervals = {};
          vThis13.manager = p176;
          vThis13.id = f61.id;
          f61.id += 1;
          vThis13.defaults = {
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
          vThis13.config(p177);
          if (vThis13.options.mode === "static" || vThis13.options.mode === "semi") {
            vThis13.options.multitouch = false;
          }
          if (!vThis13.options.multitouch) {
            vThis13.options.maxNumberOfNipples = 1;
          }
          vThis13.updateBox();
          vThis13.prepareNipples();
          vThis13.bindings();
          vThis13.begin();
          return vThis13.nipples;
        }
        f61.prototype = new f59();
        f61.constructor = f61;
        f61.id = 0;
        f61.prototype.prepareNipples = function () {
          var vThis14 = this;
          var v122 = vThis14.nipples;
          v122.on = vThis14.on.bind(vThis14);
          v122.off = vThis14.off.bind(vThis14);
          v122.options = vThis14.options;
          v122.destroy = vThis14.destroy.bind(vThis14);
          v122.ids = vThis14.ids;
          v122.id = vThis14.id;
          v122.processOnMove = vThis14.processOnMove.bind(vThis14);
          v122.processOnEnd = vThis14.processOnEnd.bind(vThis14);
          v122.get = function (p178) {
            if (p178 === undefined) {
              return v122[0];
            }
            for (var vLN012 = 0, v123 = v122.length; vLN012 < v123; vLN012 += 1) {
              if (v122[vLN012].identifier === p178) {
                return v122[vLN012];
              }
            }
            return false;
          };
        };
        f61.prototype.bindings = function () {
          var vThis15 = this;
          vThis15.bindEvt(vThis15.options.zone, "start");
          vThis15.options.zone.style.touchAction = "none";
          vThis15.options.zone.style.msTouchAction = "none";
        };
        f61.prototype.begin = function () {
          var vThis16 = this;
          var v124 = vThis16.options;
          if (v124.mode === "static") {
            var v125 = vThis16.createNipple(v124.position, vThis16.manager.getIdentifier());
            v125.add();
            vThis16.idles.push(v125);
          }
        };
        f61.prototype.createNipple = function (p179, p180) {
          var vThis17 = this;
          var v126 = vO8.getScroll();
          var vO18 = {};
          var v127 = vThis17.options;
          if (p179.x && p179.y) {
            vO18 = {
              x: p179.x - (v126.x + vThis17.box.left),
              y: p179.y - (v126.y + vThis17.box.top)
            };
          } else if (p179.top || p179.right || p179.bottom || p179.left) {
            var v128 = document.createElement("DIV");
            v128.style.display = "hidden";
            v128.style.top = p179.top;
            v128.style.right = p179.right;
            v128.style.bottom = p179.bottom;
            v128.style.left = p179.left;
            v128.style.position = "absolute";
            v127.zone.appendChild(v128);
            var v129 = v128.getBoundingClientRect();
            v127.zone.removeChild(v128);
            vO18 = p179;
            p179 = {
              x: (v127.dumbBox ? v127.dumbBox.left : v129.left) + v126.x,
              y: (v127.dumbBox ? v127.dumbBox.top : v129.top) + v126.y
            };
          }
          var v130 = new f60(vThis17, {
            color: v127.color,
            size: v127.size,
            threshold: v127.threshold,
            fadeTime: v127.fadeTime,
            dataOnly: v127.dataOnly,
            restJoystick: v127.restJoystick,
            restOpacity: v127.restOpacity,
            mode: v127.mode,
            identifier: p180,
            position: p179,
            zone: v127.zone,
            frontPosition: {
              x: 0,
              y: 0
            }
          });
          if (!v127.dataOnly) {
            vO8.applyPosition(v130.ui.el, vO18);
            vO8.applyPosition(v130.ui.front, v130.frontPosition);
          }
          vThis17.nipples.push(v130);
          vThis17.trigger("added " + v130.identifier + ":added", v130);
          vThis17.manager.trigger("added " + v130.identifier + ":added", v130);
          vThis17.bindNipple(v130);
          return v130;
        };
        f61.prototype.updateBox = function () {
          var vThis18 = this;
          vThis18.box = vThis18.options.zone.getBoundingClientRect();
        };
        f61.prototype.bindNipple = function (p181) {
          var vThis19 = this;
          var v131;
          var v_0x1f6f6a = function f62(p182, p183) {
            v131 = p182.type + " " + p183.id + ":" + p182.type;
            vThis19.trigger(v131, p183);
          };
          p181.on("destroyed", vThis19.onDestroyed.bind(vThis19));
          p181.on("shown hidden rested dir plain", v_0x1f6f6a);
          p181.on("dir:up dir:right dir:down dir:left", v_0x1f6f6a);
          p181.on("plain:up plain:right plain:down plain:left", v_0x1f6f6a);
        };
        f61.prototype.pressureFn = function (p184, p185, p186) {
          var vThis20 = this;
          var vLN013 = 0;
          clearInterval(vThis20.pressureIntervals[p186]);
          vThis20.pressureIntervals[p186] = setInterval(function () {
            var v132 = p184.force || p184.pressure || p184.webkitForce || 0;
            if (v132 !== vLN013) {
              p185.trigger("pressure", v132);
              vThis20.trigger("pressure " + p185.identifier + ":pressure", v132);
              vLN013 = v132;
            }
          }.bind(vThis20), 100);
        };
        f61.prototype.onstart = function (p187) {
          var vThis21 = this;
          var v133 = vThis21.options;
          p187 = vO8.prepareEvent(p187);
          vThis21.updateBox();
          var v_0x5ebd42 = function f63(p188) {
            if (vThis21.actives.length < v133.maxNumberOfNipples) {
              vThis21.processOnStart(p188);
            }
          };
          vO8.map(p187, v_0x5ebd42);
          vThis21.manager.bindDocument();
          return false;
        };
        f61.prototype.processOnStart = function (p189) {
          var vThis22 = this;
          var v134 = vThis22.options;
          var v135;
          var v136 = vThis22.manager.getIdentifier(p189);
          var v137 = p189.force || p189.pressure || p189.webkitForce || 0;
          var vO19 = {
            x: p189.pageX,
            y: p189.pageY
          };
          var v138 = vThis22.getOrCreate(v136, vO19);
          if (v138.identifier !== v136) {
            vThis22.manager.removeIdentifier(v138.identifier);
          }
          v138.identifier = v136;
          var v_0xf52e3b = function f64(p190) {
            p190.trigger("start", p190);
            vThis22.trigger("start " + p190.id + ":start", p190);
            p190.show();
            if (v137 > 0) {
              vThis22.pressureFn(p189, p190, p190.identifier);
            }
            vThis22.processOnMove(p189);
          };
          if ((v135 = vThis22.idles.indexOf(v138)) >= 0) {
            vThis22.idles.splice(v135, 1);
          }
          vThis22.actives.push(v138);
          vThis22.ids.push(v138.identifier);
          if (v134.mode !== "semi") {
            v_0xf52e3b(v138);
          } else {
            var v139 = vO8.distance(vO19, v138.position);
            if (v139 <= v134.catchDistance) {
              v_0xf52e3b(v138);
            } else {
              v138.destroy();
              vThis22.processOnStart(p189);
              return;
            }
          }
          return v138;
        };
        f61.prototype.getOrCreate = function (p191, p192) {
          var vThis23 = this;
          var v140 = vThis23.options;
          var v141;
          if (/(semi|static)/.test(v140.mode)) {
            v141 = vThis23.idles[0];
            if (v141) {
              vThis23.idles.splice(0, 1);
              return v141;
            }
            if (v140.mode === "semi") {
              return vThis23.createNipple(p192, p191);
            }
            console.warn("Coudln't find the needed nipple.");
            return false;
          }
          v141 = vThis23.createNipple(p192, p191);
          return v141;
        };
        f61.prototype.processOnMove = function (p193) {
          var vThis24 = this;
          var v142 = vThis24.options;
          var v143 = vThis24.manager.getIdentifier(p193);
          var v144 = vThis24.nipples.get(v143);
          if (!v144) {
            console.error("Found zombie joystick with ID " + v143);
            vThis24.manager.removeIdentifier(v143);
            return;
          }
          v144.identifier = v143;
          var v145 = v144.options.size / 2;
          var vO20 = {
            x: p193.pageX,
            y: p193.pageY
          };
          var v146 = vO8.distance(vO20, v144.position);
          var v147 = vO8.angle(vO20, v144.position);
          var v148 = vO8.radians(v147);
          var v149 = v146 / v145;
          if (v146 > v145) {
            v146 = v145;
            vO20 = vO8.findCoord(v144.position, v146, v147);
          }
          var v150 = vO20.x - v144.position.x;
          var v151 = vO20.y - v144.position.y;
          if (v142.lockX) {
            v151 = 0;
          }
          if (v142.lockY) {
            v150 = 0;
          }
          v144.frontPosition = {
            x: v150,
            y: v151
          };
          if (!v142.dataOnly) {
            vO8.applyPosition(v144.ui.front, v144.frontPosition);
          }
          var vO21 = {
            identifier: v144.identifier,
            position: vO20,
            force: v149,
            pressure: p193.force || p193.pressure || p193.webkitForce || 0,
            distance: v146,
            angle: {
              radian: v148,
              degree: v147
            },
            instance: v144,
            lockX: v142.lockX,
            lockY: v142.lockY
          };
          vO21 = v144.computeDirection(vO21);
          vO21.angle = {
            radian: vO8.radians(180 - v147),
            degree: 180 - v147
          };
          v144.trigger("move", vO21);
          vThis24.trigger("move " + v144.id + ":move", vO21);
        };
        f61.prototype.processOnEnd = function (p194) {
          var vThis25 = this;
          var v152 = vThis25.options;
          var v153 = vThis25.manager.getIdentifier(p194);
          var v154 = vThis25.nipples.get(v153);
          var v155 = vThis25.manager.removeIdentifier(v154.identifier);
          if (!v154) {
            return;
          }
          if (!v152.dataOnly) {
            v154.hide(function () {
              if (v152.mode === "dynamic") {
                v154.trigger("removed", v154);
                vThis25.trigger("removed " + v154.id + ":removed", v154);
                vThis25.manager.trigger("removed " + v154.id + ":removed", v154);
                v154.destroy();
              }
            });
          }
          clearInterval(vThis25.pressureIntervals[v154.identifier]);
          v154.resetDirection();
          v154.trigger("end", v154);
          vThis25.trigger("end " + v154.id + ":end", v154);
          if (vThis25.ids.indexOf(v154.identifier) >= 0) {
            vThis25.ids.splice(vThis25.ids.indexOf(v154.identifier), 1);
          }
          if (vThis25.actives.indexOf(v154) >= 0) {
            vThis25.actives.splice(vThis25.actives.indexOf(v154), 1);
          }
          if (/(semi|static)/.test(v152.mode)) {
            vThis25.idles.push(v154);
          } else if (vThis25.nipples.indexOf(v154) >= 0) {
            vThis25.nipples.splice(vThis25.nipples.indexOf(v154), 1);
          }
          vThis25.manager.unbindDocument();
          if (/(semi|static)/.test(v152.mode)) {
            vThis25.manager.ids[v155.id] = v155.identifier;
          }
        };
        f61.prototype.onDestroyed = function (p195, p196) {
          var vThis26 = this;
          if (vThis26.nipples.indexOf(p196) >= 0) {
            vThis26.nipples.splice(vThis26.nipples.indexOf(p196), 1);
          }
          if (vThis26.actives.indexOf(p196) >= 0) {
            vThis26.actives.splice(vThis26.actives.indexOf(p196), 1);
          }
          if (vThis26.idles.indexOf(p196) >= 0) {
            vThis26.idles.splice(vThis26.idles.indexOf(p196), 1);
          }
          if (vThis26.ids.indexOf(p196.identifier) >= 0) {
            vThis26.ids.splice(vThis26.ids.indexOf(p196.identifier), 1);
          }
          vThis26.manager.removeIdentifier(p196.identifier);
          vThis26.manager.unbindDocument();
        };
        f61.prototype.destroy = function () {
          var vThis27 = this;
          vThis27.unbindEvt(vThis27.options.zone, "start");
          vThis27.nipples.forEach(function (p197) {
            p197.destroy();
          });
          for (var v156 in vThis27.pressureIntervals) {
            if (vThis27.pressureIntervals.hasOwnProperty(v156)) {
              clearInterval(vThis27.pressureIntervals[v156]);
            }
          }
          vThis27.trigger("destroyed", vThis27.nipples);
          vThis27.manager.unbindDocument();
          vThis27.off();
        };
        function f65(p198) {
          var vThis28 = this;
          vThis28.ids = {};
          vThis28.index = 0;
          vThis28.collections = [];
          vThis28.config(p198);
          vThis28.prepareCollections();
          var v157;
          vO8.bindEvt(window, "resize", function (p199) {
            clearTimeout(v157);
            v157 = setTimeout(function () {
              var v158;
              var v159 = vO8.getScroll();
              vThis28.collections.forEach(function (p200) {
                p200.forEach(function (p201) {
                  v158 = p201.el.getBoundingClientRect();
                  p201.position = {
                    x: v159.x + v158.left,
                    y: v159.y + v158.top
                  };
                });
              });
            }, 100);
          });
          return vThis28.collections;
        }
        ;
        f65.prototype = new f59();
        f65.constructor = f65;
        f65.prototype.prepareCollections = function () {
          var vThis29 = this;
          vThis29.collections.create = vThis29.create.bind(vThis29);
          vThis29.collections.on = vThis29.on.bind(vThis29);
          vThis29.collections.off = vThis29.off.bind(vThis29);
          vThis29.collections.destroy = vThis29.destroy.bind(vThis29);
          vThis29.collections.get = function (p202) {
            var v160;
            vThis29.collections.every(function (p203) {
              if (v160 = p203.get(p202)) {
                return false;
              }
              return true;
            });
            return v160;
          };
        };
        f65.prototype.create = function (p204) {
          return this.createCollection(p204);
        };
        f65.prototype.createCollection = function (p205) {
          var vThis30 = this;
          var v161 = new f61(vThis30, p205);
          vThis30.bindCollection(v161);
          vThis30.collections.push(v161);
          return v161;
        };
        f65.prototype.bindCollection = function (p206) {
          var vThis31 = this;
          var v162;
          var v_0x4e7c70 = function f66(p207, p208) {
            v162 = p207.type + " " + p208.id + ":" + p207.type;
            vThis31.trigger(v162, p208);
          };
          p206.on("destroyed", vThis31.onDestroyed.bind(vThis31));
          p206.on("shown hidden rested dir plain", v_0x4e7c70);
          p206.on("dir:up dir:right dir:down dir:left", v_0x4e7c70);
          p206.on("plain:up plain:right plain:down plain:left", v_0x4e7c70);
        };
        f65.prototype.bindDocument = function () {
          var vThis32 = this;
          if (!vThis32.binded) {
            vThis32.bindEvt(document, "move").bindEvt(document, "end");
            vThis32.binded = true;
          }
        };
        f65.prototype.unbindDocument = function (p209) {
          var vThis33 = this;
          if (!Object.keys(vThis33.ids).length || p209 === true) {
            vThis33.unbindEvt(document, "move").unbindEvt(document, "end");
            vThis33.binded = false;
          }
        };
        f65.prototype.getIdentifier = function (p210) {
          var v163;
          if (!p210) {
            v163 = this.index;
          } else {
            v163 = p210.identifier === undefined ? p210.pointerId : p210.identifier;
            if (v163 === undefined) {
              v163 = this.latest || 0;
            }
          }
          if (this.ids[v163] === undefined) {
            this.ids[v163] = this.index;
            this.index += 1;
          }
          this.latest = v163;
          return this.ids[v163];
        };
        f65.prototype.removeIdentifier = function (p211) {
          var vO22 = {};
          for (var v164 in this.ids) {
            if (this.ids[v164] === p211) {
              vO22.id = v164;
              vO22.identifier = this.ids[v164];
              delete this.ids[v164];
              break;
            }
          }
          return vO22;
        };
        f65.prototype.onmove = function (p212) {
          var vThis34 = this;
          vThis34.onAny("move", p212);
          return false;
        };
        f65.prototype.onend = function (p213) {
          var vThis35 = this;
          vThis35.onAny("end", p213);
          return false;
        };
        f65.prototype.oncancel = function (p214) {
          var vThis36 = this;
          vThis36.onAny("end", p214);
          return false;
        };
        f65.prototype.onAny = function (p215, p216) {
          var vThis37 = this;
          var v165;
          var v166 = "processOn" + p215.charAt(0).toUpperCase() + p215.slice(1);
          p216 = vO8.prepareEvent(p216);
          var v_0x330309 = function f67(p217, p218, p219) {
            if (p219.ids.indexOf(p218) >= 0) {
              p219[v166](p217);
              p217._found_ = true;
            }
          };
          var v_0x4db79b = function f68(p220) {
            v165 = vThis37.getIdentifier(p220);
            vO8.map(vThis37.collections, v_0x330309.bind(null, p220, v165));
            if (!p220._found_) {
              vThis37.removeIdentifier(v165);
            }
          };
          vO8.map(p216, v_0x4db79b);
          return false;
        };
        f65.prototype.destroy = function () {
          var vThis38 = this;
          vThis38.unbindDocument(true);
          vThis38.ids = {};
          vThis38.index = 0;
          vThis38.collections.forEach(function (p221) {
            p221.destroy();
          });
          vThis38.off();
        };
        f65.prototype.onDestroyed = function (p222, p223) {
          var vThis39 = this;
          if (vThis39.collections.indexOf(p223) < 0) {
            return false;
          }
          vThis39.collections.splice(vThis39.collections.indexOf(p223), 1);
        };
        var v167 = new f65();
        return {
          create: function f69(p224) {
            return v167.create(p224);
          },
          factory: v167
        };
      });
      var v168 = false;
      var v169 = true;
      var vLN2 = 2;
      var v170 = null;
      var vLN12 = 1;
      var v171 = null;
      var vO23 = {};
      window.gerarCodigoUnico = function () {
        var v172 = bbs.userId || "";
        var v173 = v172.match(/\d/g);
        var v174 = (v173 || []).reduce(function (p225, p226) {
          return p225 + parseInt(p226, 10);
        }, 0);
        var vLS0123456789ABCDEFGHIJ = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var vLN5 = 5;
        var vLS2 = "";
        var vLS3 = "";
        for (var vLN014 = 0; vLN014 < vLN5; vLN014++) {
          var v175 = Math.floor(Math.random() * vLS0123456789ABCDEFGHIJ.length);
          vLS2 += vLS0123456789ABCDEFGHIJ.charAt(v175);
          var v176 = Math.floor(Math.random() * vLS0123456789ABCDEFGHIJ.length);
          vLS3 += vLS0123456789ABCDEFGHIJ.charAt(v176);
        }
        return "ROOM" + vLS3 + "_" + v174 + "_" + vLS2;
      };
      var vO24 = {
        sao: "wss://nycsam01.wormworld.io",
        dal: "wss://nycsam01.wormworld.io",
        hil: "wss://nycsam01.wormworld.io",
        vin: "wss://nycsam01.wormworld.io",
        fra: "wss://fraceu01.wormworld.io",
        gra: "wss://fraceu01.wormworld.io",
        dxb: "wss://fraceu01.wormworld.io",
        sin: "wss://sin01.wormworld.io",
        tok: "wss://sin01.wormworld.io",
        local: "ws://localhost:5000"
      };
      var vO25 = {
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
      var vO26 = {
        loaded: false,
        sprites: {},
        textures: {},
        resources: {}
      };
      $("#mm-params-nickname").attr("maxlength", vLN18);
      var vO27 = {
        ref: [],
        hs: {},
        fxdo: function f70(p227) {
          if (bbs.activeSounds2 && bbs.start) {
            if (!vO27[p227].playing()) {
              vO27[p227].play();
            }
          }
        },
        fxAux: function f71(p228, p229) {
          if (p229 === 1 && !vO27.fxStatus.top1) {
            vO27.fxStatus.top1 = true;
            vO27.fxdo("top1");
          }
          return p228;
        },
        fxStatus: {
          top1: false
        }
      };
      window._wwcio = {
        message: null,
        obj: {},
        player: {},
        join: function f72() {},
        update: function f73() {},
        leave: function f74() {},
        leaderboardUpdated: function f75(p230, p231) {
          v_0x416cd(p230, p231);
        },
        sendLocation: function f76() {},
        findFriend: function f77() {},
        close: function f78() {},
        set: function f79(p232) {
          return p232;
        },
        friend: null,
        myLocation: {},
        crown: null
      };
      window._wwc = {
        deadPositionMap: function f80() {
          var v177 = new PIXI.Text("X", _wwc.fontStyleMap());
          v177.position.x = _wwc.memory.positionOfDead.x;
          v177.position.y = _wwc.memory.positionOfDead.y;
          _wwc._anApp.og.af.ng.Tg.addChild(v177);
          var vLN015 = 0;
          var vSetInterval = setInterval(function () {
            vLN015 = !vLN015;
            v177.alpha = vLN015;
          }, 500);
          var vSetTimeout = setTimeout(function () {
            clearInterval(vSetInterval);
            if (!_wwc._anApp.og.af.ng.Tg) {
              return;
            }
            _wwc._anApp.og.af.ng.Tg.removeChild(v177);
            v177.destroy();
          }, 60000);
          _wwc.removeDeadPositionMap = function () {
            clearInterval(vSetInterval);
            clearTimeout(vSetTimeout);
            if (!_wwc._anApp.og.af.ng.Tg) {
              return;
            }
            _wwc._anApp.og.af.ng.Tg.removeChild(v177);
            if (v177 && v177.destroy) {
              v177.destroy();
            }
          };
        },
        fontStyleMap: function f81(p233) {
          return {
            fontFamily: "Arial",
            fontSize: "12px",
            fill: "red",
            align: "center",
            fontWeight: "bold"
          };
        },
        startGame: function f82() {
          if (_wwc.memory.positionOfDead) {
            var v178 = _wwc.deadPositionMap();
          }
        },
        stopGame: function f83() {
          var v179;
          var v180;
          _wwcio.close();
          _wwcio.findFriendActived = false;
          _wwc.memory.positionOfDead = {
            x: (v179 = _wwcio.myLocation) === null || v179 === undefined ? undefined : v179.position.x,
            y: (v180 = _wwcio.myLocation) === null || v180 === undefined ? undefined : v180.position.y
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
        testSkinMod: function f84(p234) {
          var v181 = typeof p234 === "string";
          p234 = parseInt(p234);
          if (v181 && isNaN(p234)) {
            return false;
          } else {
            return parseInt(p234) >= 399 && parseInt(p234) < 8999;
          }
        },
        testWear: function f85(p235) {
          var v182 = typeof p235 === "string";
          p235 = parseInt(p235);
          if (v182 && isNaN(p235)) {
            return false;
          } else {
            return parseInt(p235) >= 399 && parseInt(p235) < 8999;
          }
        },
        isNumberValid: function f86(p236) {
          return p236 !== "" && p236 !== null && p236 !== undefined && !isNaN(p236);
        },
        validInputWear: function f87(p237) {
          var v183 = _wwc.testWear(p237);
          var v184 = typeof skinId === "string";
          if (!v183 && !v184) {
            return p237;
          }
          return 0;
        },
        validInput: function f88(p238) {
          var v185 = _wwc.testSkinMod(p238);
          var v186 = typeof p238 === "string";
          if (!v185 && !v186) {
            return p238;
          }
          try {
            var v187 = $("#inputReplaceSkin").val();
            return encodeURI(_wwc.isNumberValid(v187) ? v187 : bbs.idReplaceSkin || 35);
          } catch (e5) {
            return encodeURI(35);
          }
        },
        fullscreen: null,
        joystick: function f89(p239) {
          var vO28 = {
            checked: true,
            color: "red",
            mode: "dynamic",
            positionMode: "L",
            size: 100,
            pxy: 100
          };
          return vO28;
        },
        load_con: function f90() {
          $(".selecionar-sala-v2").click(function (p240) {
            p240.preventDefault();
            var v188 = $(this).attr("data-con") || bbs.con;
            var v189 = $(this).attr("data-type");
            vO32.addRoom($(this).attr("data-room"));
            vO33.dh.Zp = function (p241, p242, p243) {
              bbs.con = p243 ? p241 : v188 || p241;
              _wwc.Zp(bbs.con, p242);
            };
            vO33.Pn();
          });
        },
        fnSaveGame: function f91() {
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
            vO32.hsTotal.alpha = this.checked ? 1 : 0;
            vO32.killTotal.alpha = this.checked ? 1 : 0;
            localStorage.setItem("wwcSaveGame", this.checked ? JSON.stringify(bbs) : null);
          });
        },
        fnSetCounts: function f92(p244, p245) {
          var v_0x3b9ad0 = function f93(p246, p247, p248, p249) {
            _wwc.setCountGame(p246, p247, p248, p249);
          };
          if (p244 === "count") {
            bbs.kill = (bbs.kill || 0) + (p245 ? 0 : 1);
            bbs.headshot = (bbs.headshot || 0) + (p245 ? 1 : 0);
            bbs.HOL = bbs.headshot > bbs.HOL ? bbs.headshot : bbs.HOL;
            bbs.tkill = bbs.tkill + (p245 ? 0 : 1);
            bbs.theadshot = bbs.theadshot + (p245 ? 1 : 0);
          }
          if (p244 === "open") {
            bbs.kill = 0;
            bbs.headshot = 0;
            if (bbs.saveGame) {}
          }
          if (p244 === "close") {
            if (bbs.saveGame) {
              bbs.died = (bbs.died || 0) + 1;
            } else {
              _wwc.fnSetCounts("zerar");
            }
          }
          if (p244 === "zerar") {
            bbs.kill = 0;
            bbs.tkill = 0;
            bbs.headshot = 0;
            bbs.theadshot = 0;
            bbs.died = 0;
          }
          v_0x3b9ad0(bbs.kill, bbs.headshot, bbs.tkill, bbs.theadshot);
          localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
        },
        setCountGame: function f94(p250, p251, p252, p253) {
          if (!bbs.saveGame) {
            vO32.hsTotal.alpha = 0;
            vO32.killTotal.alpha = 0;
          }
          vO32.hs.text = p251;
          vO32.hsTotal.text = p253;
          vO32.kill.text = p250;
          vO32.killTotal.text = p252;
        },
        ismobile: f119(),
        Zp: undefined
      };
      window.bbs = {
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
        }
      };
      var v190 = localStorage.getItem("wwc_version");
      var v191 = localStorage.getItem("wwcSaveGame");
      var v192 = localStorage.getItem("wwc_config");
      v191 &&= JSON.parse(v191);
      for (var v193 in v191) {
        switch (v193) {
          case "configJoystick":
            if (!v191[v193]) {
              break;
            }
            bbs[v193] = v191[v193];
            for (var v194 in v191[v193].buttons) {
              bbs[v193].buttons[v194] = v191[v193].buttons[v194];
            }
            for (var v195 in v191[v193]) {
              bbs[v193][v195] = v191[v193][v195];
            }
            break;
          case "joystick":
            bbs[v193] = _wwc.joystick();
            for (var v196 in v191[v193]) {
              bbs[v193][v196] = v191[v193][v196];
            }
            break;
          case "display":
            for (var v197 in v191[v193]) {
              bbs[v193][v197] = v191[v193][v197];
            }
            break;
          default:
            bbs[v193] = v191[v193];
            break;
        }
      }
      if (!bbs.version || bbs.version !== vLN2) {
        bbs.version = vLN2;
        bbs.joystick = _wwc.joystick();
      }
      bbs.loading = true;
      window.respawnFn = function () {
        vO33.dh.Cn = 0;
        if (vO33.dh.mq) {
          vO33.dh.mq.close();
        }
        vO33.dh.mq = null;
        vO33.dh.Zp = function (p254, p255) {
          _wwc.Zp(bbs.con || p254, p255);
        };
        vO33.Pn();
      };
      window.lobbyFn = function () {
        vO33.dh.Cn = 0;
        if (vO33.dh.mq) {
          vO33.dh.mq.close();
        }
        vO33.dh.mq = null;
        vO33.dh.Np();
        v_0x180d4e();
      };
      $("<button type=\"button\" id=\"mm-wwc\" style=\"float: right;line-height: 48px;width: 61px;background: #156ab3;color: #FFF;font-weight: bold;margin-right: 5px;border-radius: 7px; cursor: pointer;\">Set</button>").insertAfter("#mm-store");
      $(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
      $(".wear-view-cont").append("<div id=\"idWearViewCont\"></div>");
      var vLSDisplaynonepositionr = "display:none;position:relative;background:#FFF;padding:15px;max-width:680px;margin:10px auto;";
      if (_wwc.ismobile) {
        vLSDisplaynonepositionr = "display:none;position:relative;\n                  background:#FFF;padding:20px;\n                  width:calc(100vw - var(--scrollbar-width));\n                  height:100vh;";
      }
      $("body").append(`<div id="wwc-set-view" class="base-popup-view" style="${vLSDisplaynonepositionr}"></div>`);
      var vLSAss = "ass";
      window.mbf = {};
      var v_0x346cf0 = function f95(p256) {
        if (bbs.shiftKey) {
          return;
        }
        var vLN30 = 30;
        var vLN016 = 0;
        var v198 = false;
        function f96() {
          var vParseFloat = parseFloat(vO33.og.af.Bn);
          vParseFloat = (vParseFloat - 0.06) % (Math.PI * 2);
          if (vParseFloat < 0) {
            vParseFloat += Math.PI * 2;
          }
          vO33.og.af.Bn = vParseFloat.toFixed(2);
        }
        function f97(p257) {
          v168 = setInterval(function () {
            if (p257 === 1) {
              vLN016 = v198 ? vLN016 - 1 : vLN016 + 1;
              if (vLN016 % 80 === 0 && !v198) {
                vLN30 = vLN30 + 18;
                clearInterval(v168);
                f97(1);
              }
            }
            f96();
          }, vLN30);
        }
        if ((p256 == 7 || p256.key == "7") && v168 === null) {
          vO33.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
          f97(1);
          return;
        }
        if ((p256 == 8 || p256.key == "8") && v168 === null) {
          vO33.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
          f97(2);
          return;
        }
        if (v168 !== null) {
          clearInterval(v168);
          vO33.og.af.ng.Eb.addEventListener("pointermove", mbf.onmovepoint, true);
          v168 = null;
        }
      };
      mbf.mbfass0 = function () {
        _wwcio.findFriend();
      };
      mbf.mbfass1 = function () {
        var v199 = v171 ? 100 : 90;
        if (vLN12 <= v199) {
          vLN12 += vLN12 > 15 ? 1 : bbs.configZoom?.step || 0.25;
        }
        vLN12 = Math.min(vLN12, v199);
        _0x38c2d0f.text = "x" + vLN12.toFixed(2);
      };
      mbf.mbfass2 = function () {
        var v200 = vLN12 - (vLN12 > 15 ? 1 : bbs.configZoom?.step);
        vLN12 = v200 < bbs.configZoom?.limitDown ? bbs.configZoom?.step : v200;
        vO32.zoom.text = "x" + vLN12.toFixed(2);
      };
      mbf.mbfass3 = function () {
        if (mbf.mbf_rotate) {
          v_0x346cf0(8);
          $("#mbf_rotate").css("background-color", "#000");
        } else {
          v_0x346cf0(v168 ? 0 : 8);
        }
        if (v168) {
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
          v_0x346cf0(8);
        } else {
          v_0x346cf0(v168 ? 0 : 8);
        }
        if (v168) {
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
        vO32.zoom.text = "x1";
      };
      mbf.mbfass9 = function (p258) {
        var v201 = v171 ? 100 : 2;
        if (p258.value <= v201) {
          vLN12 = p258.value;
          vO32.zoom.text = "x" + p258.value;
        }
      };
      mbf.mbf_cambiar_origin = null;
      mbf.mbf_cambiar_current = 0;
      mbf.mbf_cambiar_seq = 0;
      mbf.mbf_cambiar_add = function (p259, p260) {
        if (!bbs.cambiar) {
          bbs.cambiar = {};
        }
        if (bbs.cambiar[p259]) {
          alert("Skin already exists in the list of skins to be");
          return;
        }
        bbs.cambiar[p259] = p260 || "Skin " + p259;
        alert("Skin added to the list of skins to be");
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
        console.log(bbs.cambiar);
      };
      mbf.mbf_cambiar = function () {
        if (mbf.mbf_cambiar_origin === null) {
          mbf.mbf_cambiar_origin = _wwc._anApp.dh.ch.Eh.Hh;
        }
        var v202 = Object.keys(bbs.cambiar);
        if (mbf.mbf_cambiar_seq >= v202.length) {
          mbf.mbf_cambiar_seq = 0;
        }
        for (var vLN017 = 0; vLN017 < v202.length; vLN017++) {
          mbf.mbf_cambiar_current = v202[vLN017];
          if (vLN017 === mbf.mbf_cambiar_seq) {
            mbf.mbf_cambiar_current = v202[vLN017];
            break;
          }
        }
        mbf.mbf_cambiar_seq = mbf.mbf_cambiar_seq + 1;
        _wwc._anApp.dh.ch.Eh.Hh = mbf.mbf_cambiar_current;
        _wwc._anApp.dh.ch.Sm();
      };
      if (bbs.activeZoom) {
        window.onwheel = function (p261) {
          if (p261.deltaY < 0) {
            mbf.mbfass1();
          } else {
            mbf.mbfass2();
          }
        };
      }
      $("#mm-advice-cont").html("<div class=\"wormworld-connect-count-b32\" style=\"display: grid !important; grid-template-columns: 1fr 1fr 1fr;gap: 2px;\">\n    <input type=\"button\" value=\"F.SCREEN\" id=\"btnFullScreen\" style=\"margin-top:5px;width:100%;height: 35px;\" />\n    <input type=\"button\" value=\"RESPAWN\" onclick=\"respawnFn()\"\n    style=\"margin-top:5px;width:100%;background-color:#f7941d;color:#fff;border:0;height:35px;\" />\n    <input type=\"button\" value=\"SKINLAB\" onclick=\"window.location.href='https://wormworld.io/skinlab/'\"\n    style=\"margin-top:5px;width:100%;height: 35px;\" />\n    </div>");
      var v$2 = $("#idReplaceSkin");
      var vF4 = function () {
        var vF55 = f55(f23().mark(function f98(p262, p263) {
          return f23().wrap(function f99(p264) {
            while (1) {
              switch (p264.prev = p264.next) {
                case 0:
                  if (!p263) {
                    p264.next = 2;
                    break;
                  }
                  return p264.abrupt("return");
                case 2:
                  if (!p262) {
                    p262 = vO33.u.wi;
                  }
                  console.log(p262);
                  bbs.userId = p262.userId;
                  p264.next = 7;
                  return fetch("https://wormxo.store/servers/gamexo.html", {
                  }).then(function (p265) {
                    p265.text().then(function (p266) {
                      $(".description-text").html(p266);
                      if (p262.type === "error") {
                        $(".description-text").html(p262.msg);
                      }
                    });
                  }).catch(function () {
                    $(".description-text").html("Problema de conexão.");
                  });
                case 7:
                  p264.next = 9;
                  return fetch(URLSERV_WORMWORLD + "/set-worm-world", {
                    headers: {
                      "Content-Type": "application/json",
                      "x-access-token": bbs.tk
                    },
                    method: "POST",
                    body: JSON.stringify({
                      userId: bbs.userId
                    })
                  }).then(function (p267) {
                    p267.text().then(function (p268) {
                      $("#wwc-set-view").html(p268);
                      $("#mm-wwc").click(function (p269) {
                        $("#wwc-set-view").css("display", "block");
                      });
                      _wwc.load_con();
                      _wwc.fnSaveGame();
                      _wwc.fnSetCounts("start");
                      $("#backgroundArena").change(function () {
                        var v203 = $(this).val();
                        bbs.background = v203;
                        bbs.backgroundUri = null;
                        vO33.xe._g = vO34.bgg(v203);
                        alert("Background changed!");
                        location.reload();
                      });
                      var v204 = _wwc.isNumberValid(bbs.idReplaceSkin);
                      if (v204) {
                        $("#inputReplaceSkin").val(bbs.idReplaceSkin);
                      } else {
                        var v205 = $("#inputReplaceSkin").val();
                        v204 = _wwc.isNumberValid(v205);
                        bbs.idReplaceSkin = v204 ? v205 : 33;
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
                case 9:
                case "end":
                  return p264.stop();
              }
            }
          }, f98);
        }));
        return function f100(p270, p271) {
          return vF55.apply(this, arguments);
        };
      }();
      var v_0x2cf212 = function f101(p272) {
        if (bbs.PropertyManager) {
          if (bbs.PropertyManager.lj) {
            p272.skinId = bbs.PropertyManager.lj;
          }
          if (bbs.PropertyManager.mj) {
            p272.eyesId = bbs.PropertyManager.mj;
          }
          if (bbs.PropertyManager.nj) {
            p272.mouthId = bbs.PropertyManager.nj;
          }
          if (bbs.PropertyManager.pj) {
            p272.glassesId = bbs.PropertyManager.pj;
          }
          if (bbs.PropertyManager.oj) {
            p272.hatId = bbs.PropertyManager.oj;
          }
        }
      };
      var vF5 = function () {
        var vF552 = f55(f23().mark(function f102(p273, p274) {
          var v206;
          var v207;
          var v208;
          var v209;
          var v210;
          return f23().wrap(function f103(p275) {
            while (1) {
              switch (p275.prev = p275.next) {
                case 0:
                  $("#mm-params-nickname").prop("maxlength", vLN18);
                  p275.next = 3;
                  return fetch("/register", {
                    headers: {
                      "Content-Type": "application/json",
                      "x-access-token": bbs.tk,
                      "x-wuid": bbs.wuid,
                      "x-uid": 2
                    },
                    method: "POST",
                    body: JSON.stringify(p273)
                  }).then(function () {
                    var vF553 = f55(f23().mark(function f104(p276) {
                      return f23().wrap(function f105(p277) {
                        while (1) {
                          switch (p277.prev = p277.next) {
                            case 0:
                              p277.next = 2;
                              return p276.json();
                            case 2:
                              return p277.abrupt("return", p277.sent);
                            case 3:
                            case "end":
                              return p277.stop();
                          }
                        }
                      }, f104);
                    }));
                    return function (p278) {
                      return vF553.apply(this, arguments);
                    };
                  }()).catch(function () {
                    $(".description-text").html("Problema de conexão.");
                  });
                case 3:
                  v206 = p275.sent;
                  if (!v206) {
                    v206 = {};
                    v206.tk = 1;
                  }
                  bbs.tk = v206.tk;
                  bbs.x1 = v206.x1;
                  v171 = v206.customer;
                  p273.propertyList = v206.propertyList;
                  p274(p273);
                  vF4(v206);
                  _wwc._anApp = vO33;
                  _wwc._tx = function (p279) {
                    Object.keys(p279).forEach(function (p280) {
                      if (p279[p280].Yi) {
                        p279[p280].fj.nh.Cc.xc.width = p279[p280].fj.nh.Cc.xc.width + 2;
                        p279[p280].fj.nh.Cc.xc.height = p279[p280].fj.nh.Cc.xc.height + 2;
                      }
                    });
                  };
                  _wwc.Zp = vO33.dh.Zp;
                  vO33.dh.Dq = function (p281, p282, _0x1e4884 = 0) {
                    console.log(bbs.nickname);
                    try {
                      fetch(URLSERV_WORMWORLD + "/game-connect", {
                        headers: {
                          "Content-Type": "application/json",
                          "x-access-token": bbs.tk,
                          "x-uid": 2
                        },
                        method: "POST",
                        body: JSON.stringify({
                          userId: vO33.Ij.Rk.userId,
                          nickname: bbs.nickname,
                          code: bbs.code,
                          teamRoom: _wwcio.player.teamRoom
                        })
                      }).then(function () {
                        var vF554 = f55(f23().mark(function f106(p283) {
                          var v211;
                          var v212;
                          return f23().wrap(function f107(p284) {
                            while (1) {
                              switch (p284.prev = p284.next) {
                                case 0:
                                  p284.next = 2;
                                  return p283.json();
                                case 2:
                                  v211 = p284.sent;
                                  v212 = vO33.dh;
                                  if (!v211.connected) {
                                    p284.next = 8;
                                    break;
                                  }
                                  alert("Warning: Unauthorized action detected. It appears you've used a cheat for unintended purposes. This behavior is against the rules and may result in penalties or account suspension.");
                                  v212.Cq();
                                  return p284.abrupt("return");
                                case 8:
                                  _wwcio.player.team = v211.team || _wwcio.player.team;
                                  v212.mq = new WebSocket(p281);
                                  v212.mq.binaryType = "arraybuffer";
                                  vLN12 = _wwc.ismobile ? 1.25 : 1;
                                  bbs.start = new Date();
                                  bbs.con = p281;
                                  vO23 = {};
                                  vO34.setIntervalRun = setInterval(function () {
                                    vO34.ps3();
                                  }, 40);
                                  v212.mq.onopen = function () {
                                    v_0x517b52();
                                    _wwc.fnSetCounts("open");
                                    p282();
                                  };
                                  v212.mq.onclose = function () {
                                    v_0x180d4e();
                                    _wwc.fnSetCounts("close");
                                    _wwc.stopGame();
                                    clearInterval(vO34.setIntervalRun);
                                    vO34.loadBg = false;
                                    bbs.start = 0;
                                  };
                                  v212.mq.onerror = function (p285) {
                                    v_0x180d4e();
                                    _wwc.fnSetCounts("close");
                                    _wwc.stopGame();
                                    clearInterval(vO34.setIntervalRun);
                                    vO34.loadBg = false;
                                    bbs.start = 0;
                                    if (_0x1e4884 > 4) {
                                      v212.Cq();
                                    } else {
                                      setTimeout(function () {
                                        _0x1e4884++;
                                        console.log("Reconnect server");
                                        vO33.dh.Dq(bbs.con, p282, _0x1e4884);
                                      }, 2000);
                                    }
                                  };
                                  v212.mq.onmessage = function (p286) {
                                    v212.Kp.Ph(p286.data);
                                  };
                                case 20:
                                case "end":
                                  return p284.stop();
                              }
                            }
                          }, f106);
                        }));
                        return function (p287) {
                          return vF554.apply(this, arguments);
                        };
                      }());
                    } catch (e6) {
                      console.log(e6);
                      i.Cq();
                    }
                  };
                  vO33.dh.Kp.Yh = function (p288, p289) {
                    v_0x180d4e();
                    this.dh.Oi();
                  };
                  vO33.og.af.ng.Ug.Uf = function (p290) {
                    var vF6 = function () {
                      return vO34.$F.M(vO34.POGL.Sprite, function () {
                        vO34.POGL.Sprite.call(this);
                        this.sh = 0;
                      });
                    }();
                    for (var v213 in this.rh) {
                      if (p290[v213] == null || !p290[v213].hd) {
                        vO34.$F.U(this.rh[v213]);
                        delete this.rh[v213];
                      }
                    }
                    var vLN018 = 0;
                    var vLN13 = 1;
                    if (bbs.display.custom) {
                      vLN13 = window.innerWidth;
                    }
                    for (var v214 in p290) {
                      var v215 = p290[v214];
                      if (v215.hd) {
                        var v216 = this.rh[v214];
                        if (!v216) {
                          var v217 = vO33.Lc.Ub().pb(v215.nd).ub;
                          v216 = new vF6();
                          v216.texture = v217.Ea();
                          v216.width = 40;
                          v216.height = 40;
                          this.rh[v214] = v216;
                          this.addChild(v216);
                        }
                        vO32.setPtc(this, v214, v215.od);
                        v216.sh = v215.od;
                        v216.position.x = vLN018 + (bbs.display.custom ? bbs.display.clock.x * vLN13 : 0);
                        v216.position.y = bbs.display.custom ? bbs.display.clock.y : v216.position.y;
                        vLN018 += 40;
                      }
                    }
                  };
                  if (!bbs.display.customClock) {
                    vO33.og.af.ng.Tg.addChild(vO32.clock);
                  }
                  vO33.og.af.ng.Tg.addChild(vO32.containerCountInfo);
                  vO33.og.af.ng.Tg.addChild(vO32.containerHstop);
                  vO32.containerHstop.alpha = bbs.showTophs ? 1 : 0;
                  vO33.og.af.ng.Tg.addChild(vO32.containerHsRec);
                  vO32.containerHsRec.alpha = bbs.showRechs ? 1 : 0;
                  vO33.og.af.ng.Tg.addChild(vO32.labelRoom);
                  vO32.ptc = {};
                  v207 = [40, 40, 40, 120, 40, 20, 40];
                  for (v208 = 0; v208 < v207.length; v208++) {
                    v209 = "clock_ad" + v208;
                    vO32.ptc[v209] = new PIXI.Text(v207[v208], vO32.fontStyle["tfc" + v208]);
                    vO32.ptc[v209].y = 61;
                  }
                  vO32.setPtc = function (p291, p292, p293) {
                    var v218 = v207[p292] - parseInt((p293 == 0.99 ? 1 : p293) * v207[p292] / 1);
                    var v219 = "clock_ad" + p292;
                    p291.rh[p292].addChild(vO32.ptc[v219]);
                    if (vO32.ptc[v219]) {
                      vO32.ptc[v219].x = v218 >= 100 ? 11 : v218 >= 10 ? 18 : 26;
                      vO32.ptc[v219].text = v218;
                    }
                  };
                  v210 = vO33.og.af.ng.Eb;
                  mbf.onmovepoint = function (p294) {
                    if (p294.pointerType === "touch" && !p294.isPrimary) {
                      return;
                    }
                    if (p294.clientX !== undefined) {
                      vO33.og.af.Bn = Math.atan2(p294.clientY - v210.offsetHeight * 0.5, p294.clientX - v210.offsetWidth * 0.5);
                    } else {
                      vO33.og.af.Bn = Math.atan2(p294.pageY - v210.offsetHeight * 0.5, p294.pageX - v210.offsetWidth * 0.5);
                    }
                  };
                  mbf.onRun = function (p295) {
                    if (p295 && p295.pointerType === "touch") {
                      return;
                    }
                    vO33.og.af.An = true;
                  };
                  mbf.onStop = function (p296) {
                    if (p296 && p296.pointerType === "touch") {
                      return;
                    }
                    vO33.og.af.An = false;
                  };
                  v210.addEventListener("pointermove", mbf.onmovepoint, true);
                  v210.addEventListener("pointerdown", mbf.onRun, true);
                  v210.addEventListener("pointerup", mbf.onStop, true);
                  if (_wwc.ismobile) {
                    v210.addEventListener("touchstart", function (p297) {
                      if (p297 = p297 || window.event) {
                        vO33.og.af.An = p297.touches.length >= 2;
                      }
                      p297.preventDefault();
                    }, true);
                    v210.addEventListener("touchend", function (p298) {
                      if (p298 = p298 || window.event) {
                        vO33.og.af.An = p298.touches.length >= 2;
                      }
                    }, true);
                  }
                case 36:
                case "end":
                  return p275.stop();
              }
            }
          }, f102);
        }));
        return function f108(p299, p300) {
          return vF552.apply(this, arguments);
        };
      }();
      function f109() {
        var v220 = document.createElement("div");
        v220.style.position = "fixed";
        v220.style.top = "0";
        v220.style.height = "100%";
        v220.style.width = "100%";
        v220.style.zIndex = "1000";
        v220.id = "zone_joystick";
        document.body.appendChild(v220);
      }
      function f110() {
        var v221 = document.getElementById("zone_joystick");
        if (v221) {
          v221.remove();
        }
      }
      var v_0x180d4e = function f111() {
        if (v170) {
          $("#wwc-mobile-box").remove();
          $("#wwc-mobile-box-slider").remove();
          v170.destroy();
        }
        f110();
      };
      var v_0x517b52 = function f112() {
        try {
          var v_0x58adcf = function f113() {
            v170.on("start end", function (p301, p302) {}).on("move", function (p303, p304) {
              var v222 = p304.angle.radian <= Math.PI ? p304.angle.radian * -1 : Math.PI - (p304.angle.radian - Math.PI);
              vO33.og.af.Bn = v222;
            });
          };
          var v_0xd6521a = function f114() {
            if (v170) {
              v170.destroy();
            }
            var vF19 = f19({}, bbs.joystick);
            var vO29 = {};
            if (bbs.customJoystick) {
              f109();
              var vF8 = f8(bbs.customJoystick.buttons);
              var v223;
              try {
                for (vF8.s(); !(v223 = vF8.n()).done;) {
                  var v224 = v223.value;
                  var v225 = document.createElement("div");
                  if (v224.svg) {
                    v225.innerHTML = v224.svg;
                  } else {
                    v225.style.color = v224.color || "#FFF";
                    v225.style.backgroundColor = v224.backgroundColor || "#000";
                    v225.style.borderRadius = "10px";
                    v225.style.textAlign = "center";
                    v225.style.fontWeight = "bold";
                    v225.style.padding = "5px";
                    v225.style.border = "1px solid #f00";
                    v225.style.fontSize = v224.size || "25px";
                    v225.innerHTML = v224.value;
                  }
                  v225.style.position = "absolute";
                  v225.style.top = v224.top;
                  v225.style.left = v224.left;
                  v225.style.display = v224.display;
                  v225.style.cursor = "pointer";
                  v225.id = "cbjt_" + v224.value;
                  v225.dataset.size = v224.size;
                  v225.dataset.color = v224.color || "#FFF";
                  v225.style.opacity = 0.6;
                  document.getElementById("zone_joystick").appendChild(v225);
                  if (v224.display !== "none") {
                    if (v224.value === "ZoomIn") {
                      v225.addEventListener("click", function (p305) {
                        mbf.mbfass2();
                      });
                    }
                    if (v224.value === "ZoomOut") {
                      v225.addEventListener("click", function (p306) {
                        mbf.mbfass1();
                      });
                    }
                    if (v224.value === "Accelerator") {
                      v225.addEventListener("pointerdown", function (p307) {
                        mbf.onRun();
                      });
                      v225.addEventListener("pointerup", function (p308) {
                        mbf.onStop();
                      });
                    }
                    if (v224.value === "Respawn") {
                      v225.addEventListener("click", function (p309) {
                        respawnFn();
                      });
                    }
                    if (v224.value === "Rotate") {
                      v225.addEventListener("click", function (p310) {
                        v_0x346cf0(v168 ? 0 : 8);
                      });
                    }
                    if (v224.value === "Snail") {
                      v225.addEventListener("click", function (p311) {
                        v_0x346cf0(v168 ? 0 : 7);
                      });
                    }
                    if (v224.value === "Lobby") {
                      v225.addEventListener("click", function (p312) {
                        lobbyFn();
                      });
                    }
                    if (v224.value === "Search") {
                      v225.addEventListener("click", function (p313) {
                        mbf.mbfass0();
                      });
                    }
                  }
                  vO29[v224.value] = v225;
                }
              } catch (e7) {
                vF8.e(e7);
              } finally {
                vF8.f();
              }
              vO29.Directional;
              var v226 = vO29.Directional.dataset.size / 2;
              var v227 = parseInt(vO29.Directional.style.left.replace("px", "")) + v226;
              var v228 = parseInt(vO29.Directional.style.top.replace("px", "")) + v226;
              vF19 = {
                zone: vO29.Directional,
                mode: "static",
                position: {
                  left: "50%",
                  top: "50%"
                },
                dumbBox: {
                  left: v227,
                  top: v228
                },
                color: "transparent",
                size: Math.floor(vO29.Directional.dataset.size / 1.6)
              };
            } else {
              vF19.zone = document.getElementById("game-view");
              if (vF19.mode === "static") {
                delete vF19.zone;
              }
            }
            v170 = nipplejs.create(vF19);
            v_0x58adcf();
            if (bbs.customJoystick) {
              $(".nipple > .front").css("background", vO29.Directional.dataset.color);
            }
          };
          if (_wwc.ismobile) {
            var vLS4 = "";
            var v229 = bbs.configJoystick.typeCurrentName === "all" ? "label" : "labelAbbreviation";
            Object.keys(bbs.configJoystick.buttons).forEach(function (p314) {
              vLS4 = vLS4 + (bbs.configJoystick.buttons[p314].active ? `<button onclick="${bbs.configJoystick.buttons[p314].action}" id="mbf_${p314}">${bbs.configJoystick.buttons[p314][v229]}</button>` : "");
            });
            var v230 = `
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
            v230 = v230 + (bbs.configJoystick.typeCurrent === "btn" ? "" : `<div id="wwc-mobile-box-slider" class="game-slider-container-02"><input id="sliderZoom" orient="vertical" onchange="mbf.mbfass9(this)" type="range" min="0.25" max="${v171 ? 12 : 2}" step="0.25" value="1" style="height: 65vh;"></div>`);
            $("body").append(v230);
          }
          if (_wwc.ismobile && bbs.joystick.checked) {
            if (bbs.customJoystick) {
              console.log("customJoystick");
            }
            v_0xd6521a();
          }
        } catch (e8) {
          console.error(e8);
        }
      };
      var v231 = localStorage.getItem("custom_wormworld_wear");
      var v232 = localStorage.getItem("custom_wormworld_skin");
      var v233 = localStorage.getItem("custom_wormworld_badLang");
      var v234 = localStorage.getItem("custom_wormworld_background");
      var v235 = localStorage.getItem("custom_wormworld_audio");
      var vA5 = [" XТ_", "WORMXТ_(d{})", "_xt", "wormxt", "worm_xt", "timmap"];
      if (v233) {
        vA5 = vA5.concat(JSON.parse(v233));
      }
      window.badLanguageRegEx = (vA5 || []).join("|");
      var v_0xe483ad = function f115(p315) {
        p315 = p315.replace(new RegExp(badLanguageRegEx, "gim"), ":");
        p315 = p315.replace(/\uFDFD/g, "");
        p315 = p315.substring(0, vLN18);
        return p315;
      };
      _wwc.customConfig = function (p316) {
        var v_0x406740 = function f116(p317, p318) {
          var v236 = new Blob([p317]);
          p318.Xd = window.URL.createObjectURL(v236);
        };
        var v_0x4ffa73 = function f117(p319, _0x25ecce = 0) {
          var v237 = p319.id.toString();
          var v238 = p319.type.toString().toLowerCase() + "VariantArray";
          var v239 = p319.type.toString().toLowerCase() + "Dict";
          p316.textureDict[v237] = {
            custom: true,
            re1ativePath: p319.file,
            reference: 1000 + _0x25ecce
          };
          p316.regionDict[v237] = {
            texture: v237,
            x: p319.x,
            y: p319.y,
            w: p319.w,
            h: p319.h,
            px: p319.px,
            py: p319.py,
            pw: 128,
            ph: 128
          };
          p316[v239][1000 + _0x25ecce] = {
            base: [{
              region: v237
            }],
            guest: false,
            nonbuyable: false,
            price: 0,
            priceBefore: 0,
            id: v237
          };
          p316[v238].push([1000 + _0x25ecce]);
        };
        if (v231) {
          v231 = JSON.parse(v231);
          if (v231.wear) {
            if (v231.version == "2") {
              v231.data.forEach(function (p320, p321) {
                v_0x4ffa73(p320, p321);
              });
            } else {
              for (var v240 in v231.wear.textureDict) {
                p316.textureDict[v240] = {};
                p316.textureDict[v240].h1 = true;
                p316.textureDict[v240].h3 = true;
                p316.textureDict[v240].re1ativePath = v231.wear.textureDict[v240].file;
              }
              for (var v241 in v231.wear.regionDict) {
                p316.regionDict[v241] = v231.wear.regionDict[v241];
                var v242 = p316.regionDict[v241];
                p316[v242.list][v242.obj.id.toString()] = v242.obj;
                p316[v242.listVariant].push([v242.obj.id.toString()]);
              }
            }
          }
        }
        if (v232) {
          v232 = JSON.parse(v232);
          if (v232.version_skin == "2") {
            var v_0xe64916 = function f118(p322, p323, p324, p325) {
              return {
                texture: p323,
                h: p324 - 5,
                w: p324 - 5,
                x: p324 * (p325 ? 0 : p322 || 0),
                y: 0
              };
            };
            var v243 = "SKIN_" + v232.id + "___Z";
            var vO30 = {
              id: v243,
              regionDict: {},
              textureDict: {},
              skinArrayDict: [],
              skinGroupArrayDict: [{
                id: v243,
                name: {
                  en: "Custom V2"
                },
                list: []
              }],
              version_skin: 3
            };
            var vO31 = {
              id: v243,
              guest: false,
              price: 0,
              priceBefore: 0,
              nonbuyable: false,
              prime: "c_white",
              glow: v232.glow,
              base: []
            };
            for (var v244 = v232.len - 1; v244 >= 0; v244--) {
              vO30.regionDict[`${v243}_${v244}`] = v_0xe64916(v244, v243, v232.cos, 0);
              vO31.base.push(`${v243}_${v244}`);
            }
            vO30.textureDict[v243] = {
              custom: true,
              re1ativePath: v232.file || v232.td.file,
              h1: true,
              h4: true
            };
            vO30.skinArrayDict.push(vO31);
            vO30.skinGroupArrayDict[0].list.push(v243);
            if (!v232.textureDict[v243]) {
              alert("Error! Texture not found:" + p + " - load again.");
              return;
            }
          }
          if (v232.version_skin == "3") {
            for (var v245 in v232) {
              var vF58 = f58(v232[v245]);
              if (vF58 === "object") {
                p316[v245] = Array.isArray(v232[v245]) ? [].concat(f4(p316[v245]), f4(v232[v245])) : f19(f19({}, p316[v245]), v232[v245]);
              }
            }
            return;
          }
          var v246 = v232.skin.id;
          v232.skin.id = v246.toString();
          for (var v247 in v232.textureDict) {
            p316.textureDict[v247] = v232.textureDict[v247];
            p316.textureDict[v247].re1ativePath = v232.textureDict[v247].file;
            p316.textureDict[v247].h1 = true;
            p316.textureDict[v247].h4 = true;
          }
          for (var v248 in v232.regionDict) {
            p316.regionDict[v248] = v232.regionDict[v248];
          }
          p316.skinGroupArrayDict.push({
            id: "custom",
            name: {
              en: "Custom"
            },
            list: [v246]
          });
          p316.skinArrayDict.push(v232.skin);
        }
      };
      document.getElementById("btnFullScreen").addEventListener("click", function () {
        var v249 = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen;
        if (v249 && !_wwc.fullscreen) {
          try {
            _wwc.fullscreen = true;
            v249.call(document.documentElement);
          } catch (e9) {}
        } else {
          _wwc.fullscreen = false;
          document.exitFullscreen();
        }
      });
      function f119() {
        var v250 = false;
        (function (p326) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(p326) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(p326.substr(0, 4))) {
            v250 = true;
          }
        })(navigator.userAgent || navigator.vendor || window.opera);
        return v250;
      }
      var vO32 = {
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
          })
        }
      };
      var vA6 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
      for (var vLN019 = 0; vLN019 < vA6.length; vLN019++) {
        var v251 = vA6[vLN019];
        vO32.fontStyle["tfc" + vLN019] = new PIXI.TextStyle({
          align: "center",
          fill: v251,
          fontSize: 25,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        });
      }
      vO32.zoom = new PIXI.Text("x1", vO32.fontStyle.brancoXzoom);
      vO32.zoom.x = 82;
      vO32.zoom.y = 105;
      vO32.conteinerTeam = new PIXI.Container();
      vO32.conteinerTeam.id = "team";
      vO32.friends = new PIXI.Container();
      vO32.friends.background = new PIXI.Graphics();
      vO32.friends.background.beginFill(0, 0.6);
      vO32.friends.background.drawRect(0, 0, 100, 130);
      vO32.friends.background.endFill();
      vO32.friends.addChild(vO32.friends.background);
      vO32.friends.position.x = -10;
      vO32.friends.position.y = 315;
      vO32.friends.alpha = 0;
      vO32.label_hs = new PIXI.Text("HS", vO32.fontStyle.amarelo);
      vO32.label_hs.x = 15;
      vO32.label_hs.y = 107;
      vO32.hs = new PIXI.Text("0", vO32.fontStyle.amarelo);
      vO32.hs.x = 20;
      vO32.hs.y = 119;
      vO32.hsTotal = new PIXI.Text("0", vO32.fontStyle.branco);
      vO32.hsTotal.x = 20;
      vO32.hsTotal.y = 132;
      vO32.label_kill = new PIXI.Text("KILL", vO32.fontStyle.amarelo);
      vO32.label_kill.x = 50;
      vO32.label_kill.y = 107;
      vO32.kill = new PIXI.Text("0", vO32.fontStyle.amarelo);
      vO32.kill.x = 60;
      vO32.kill.y = 120;
      vO32.killTotal = new PIXI.Text("0", vO32.fontStyle.branco);
      vO32.killTotal.x = 60;
      vO32.killTotal.y = 133;
      vO32.clock = PIXI.Sprite.from(URL_CDN + "/images/clock.png");
      vO32.clock.width = 100;
      vO32.clock.height = 100;
      vO32.clock.x = -50;
      vO32.clock.y = -50;
      vO32.containerHsRec = new PIXI.Container();
      vO32.containerHsRec.x = -55;
      vO32.containerHsRec.y = 195;
      vO32.containerHstop = new PIXI.Container();
      vO32.containerHstop.x = -55;
      vO32.containerHstop.y = 95;
      vO32.containerHsIndex = new PIXI.Container();
      vO32.containerHsNames = new PIXI.Container();
      vO32.containerHsValue = new PIXI.Container();
      var v_0x4d741b = function f120(p327) {};
      vO32.top1rec = "🥇";
      vO32.top2rec = "🥈";
      vO32.top3rec = "🥉";
      vO32.titleRec = new PIXI.Text("Records (kb 0)", vO32.fontStyle.amarelo);
      vO32.titleRec.y = -5;
      for (var vLN020 = 0; vLN020 < 3; vLN020++) {
        var v252 = vLN020 + 1;
        var v253 = new PIXI.Text(vO32["top" + v252 + "rec"], vO32.fontStyle.hsBrancoRight);
        v253.x = vLN020 >= 9 ? -5 : 0;
        v253.y = v252 * 13;
        vO32.containerHsRec.addChild(v253);
        var v254 = new PIXI.Text("--", vO32.fontStyle.hsBranco);
        v254.x = 15;
        v254.y = v252 * 13;
        vO32.containerHsRec.addChild(v254);
        var v255 = new PIXI.Text("-", vO32.fontStyle.hsBrancoRight);
        v255.x = 135;
        v255.y = v252 * 13;
        vO32.containerHsRec.addChild(v255);
      }
      vO32.containerHsRec.addChild(vO32.titleRec);
      var vLN6 = 6;
      var v_0x416cd = function f121(p328, p329) {
        if (p329 && p329.length > 0) {
          for (var vLN021 = 0; vLN021 < 3; vLN021++) {
            if (vO32.containerHsRec.children[vLN021]) {
              vO32.containerHsRec.children[vLN021 * 3 + 1].text = p329 && p329[vLN021] ? p329[vLN021].nickname : "--";
            }
            if (vO32.containerHsRec.children[vLN021]) {
              vO32.containerHsRec.children[vLN021 * 3 + 2].text = p329 && p329[vLN021] ? p329[vLN021].score : "--";
            }
          }
        }
        if (p328 && p328.length > 0) {
          for (var vLN022 = 0; vLN022 < vLN6; vLN022++) {
            var vLS5 = "--";
            var vLS6 = "--";
            if (p328 && p328[vLN022]) {
              vLS5 = p328[vLN022].nickname ? p328[vLN022].nickname.substring(0, 14) : "--";
              vLS6 = parseInt(p328[vLN022].score || 0);
            }
            if (vO32.containerHsNames.children[vLN022]) {
              vO32.containerHsNames.children[vLN022].text = vLS5;
            }
            if (vO32.containerHsValue.children[vLN022]) {
              vO32.containerHsValue.children[vLN022].text = vLS6;
            }
          }
        }
      };
      vO32.containerHstop.addChild(new PIXI.Text("TOP HS (kb 9)", vO32.fontStyle.amarelo));
      for (var vLN023 = 0; vLN023 < vLN6; vLN023++) {
        var v256 = new PIXI.Text(vLN023 + 1, vO32.fontStyle.hsBranco);
        v256.x = vLN023 >= 9 ? -5 : 0;
        v256.y = (vLN023 + 1) * 13;
        vO32.containerHsIndex.addChild(v256);
        var v257 = new PIXI.Text("..", vO32.fontStyle.hsBranco);
        v257.x = 10;
        v257.y = (vLN023 + 1) * 13;
        vO32.containerHsNames.addChild(v257);
        var v258 = new PIXI.Text(0, vO32.fontStyle.hsBrancoRight);
        v258.x = 130;
        v258.y = (vLN023 + 1) * 13;
        vO32.containerHsValue.addChild(v258);
      }
      vO32.containerHstop.addChild(vO32.containerHsIndex);
      vO32.containerHstop.addChild(vO32.containerHsNames);
      vO32.containerHstop.addChild(vO32.containerHsValue);
      vO32.containerCountInfo = new PIXI.Container();
      vO32.containerCountInfo.x = -45;
      vO32.containerCountInfo.y = -52;
      vO32.containerCountInfo.addChild(vO32.zoom);
      vO32.containerCountInfo.addChild(vO32.friends);
      vO32.containerCountInfo.addChild(vO32.label_hs);
      vO32.containerCountInfo.addChild(vO32.hs);
      vO32.containerCountInfo.addChild(vO32.hsTotal);
      vO32.containerCountInfo.addChild(vO32.label_kill);
      vO32.containerCountInfo.addChild(vO32.kill);
      vO32.containerCountInfo.addChild(vO32.killTotal);
      vO32.labelRoom = new PIXI.Text("WWC", vO32.fontStyle.amarelo);
      vO32.labelRoom.x = -50;
      vO32.labelRoom.y = -56;
      vO32.addRoom = function (p330) {
        vO32.labelRoom.text = p330 || "WWC";
      };
      window.addEventListener("keydown", function (p331) {
        if (p331.key == "7") {
          v_0x346cf0(v168 ? 0 : 7);
        }
        if (p331.key == "8") {
          v_0x346cf0(v168 ? 0 : 8);
        }
        if (p331.key === "0" && bbs.showRechs) {
          vO32.containerHsRec.alpha = !vO32.containerHsRec.alpha;
        }
        if (p331.key === "9" && bbs.showTophs) {
          vO32.containerHstop.alpha = !vO32.containerHstop.alpha;
        }
        if (p331.key === "6" && vO34.setIntervalRun) {
          v169 = !v169;
        }
        if (p331.key === "5" && vO34.setIntervalRun) {
          respawnFn();
        }
        if (p331.key === "4" && vO34.setIntervalRun) {
          mbf.mbfass0();
        }
        if (p331.key === "1") {
          mbf.mbf_cambiar();
        }
        if (p331.key === "x1") {
          _wwcio.update(1);
        }
        if (p331.key === "x2") {
          _wwcio.update(2);
        }
        if (p331.key === "<" || p331.key === "," && vO34.setIntervalRun) {
          mbf.mbfass1();
        }
        if (p331.key === ">" || p331.key === "." && vO34.setIntervalRun) {
          mbf.mbfass2();
        }
        if (p331.key === "z" || p331.key === "Z" && vO34.setIntervalRun) {
          vLN12 = bbs.configZoom?.closeDown || 1;
          vO32.zoom.text = "x" + vLN12;
        }
        if (p331.key === "c" || p331.key === "C" && vO34.setIntervalRun) {
          vO32.zoom.text = vLN12 === 0.5 ? "x2" : "CLOSE-UP";
          vLN12 = vLN12 === 0.5 ? 2 : bbs.configZoom?.closeUp || 0.25;
        }
      });
      var vO33 = {
        Lc: {
          Gb: {}
        }
      };
      var vO34 = {
        pm: {},
        ps: 0,
        ps2: function f122(p332, p333, p334) {
          if (true) {
            var v259 = p334 ? 128 : 0;
            var v260 = vO34.$F.N(p333) / vO34.$V.F * 128 & 127;
            var v261 = (v259 | v260) & 255;
            if (p332.nq !== v261) {
              var v262 = new ArrayBuffer(1);
              new DataView(v262).setInt8(0, v261);
              p332.Eq(v262);
              p332.nq = v261;
            }
          } else {}
        },
        ps3: function f123() {
          vO33.dh.xq(vO33.og.af.Gn(), vO33.og.af.Hn());
        },
        setIntervalRun: null,
        loadBg: false,
        LG: function f124(p335, p336, p337) {
          p335.Ll("gg", p337.credential, null);
        },
        Lg: function f125(p338) {
          vO33.xe._g = vO34.bgg();
          _wwc.$C = p338;
          if (bbs.bgGameWidth > 512) {
            return new p338.WMGBS1();
          } else {
            return new p338.WMGBS2();
          }
        },
        registry: function () {
          var vF555 = f55(f23().mark(function f126(p339) {
            var v263;
            return f23().wrap(function f127(p340) {
              while (1) {
                switch (p340.prev = p340.next) {
                  case 0:
                    p340.next = 2;
                    return fetch(URLSERV_WORMWORLD + "/dynamic/assets/registry", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify(p339)
                    }).then(function (p341) {
                      if (!p341.ok) {
                        return p339;
                      }
                      return p341.json();
                    });
                  case 2:
                    v263 = p340.sent;
                    return p340.abrupt("return", v263);
                  case 4:
                  case "end":
                    return p340.stop();
                }
              }
            }, f126);
          }));
          function f128(p342) {
            return vF555.apply(this, arguments);
          }
          return f128;
        }()
      };
      vO34.Vd = function (p343, p344) {
        _wwc.customConfig(p343);
        var vThis40 = this;
        function f129(p345) {
          var v264 = p344.Id.Ld;
          vThis40.Rd(v264, p344.Od.bc(v264).lc(p345));
        }
        if (this.Fd) {
          this.Pd();
          return;
        }
        var vA7 = [];
        var vA8 = [];
        var vLN024 = 0;
        var v265 = new PIXI.Loader();
        for (var v266 in p343.textureDict) {
          if (p343.textureDict.hasOwnProperty(v266)) {
            var v267 = p343.textureDict[v266];
            var v268 = v267.re1ativePath || v267.relativePath;
            var v269 = v267.fileSize || 100;
            var v270 = v267.sha256 || null;
            var v271 = new p344.Wd(v266, v268, v269, v270);
            v271.h1 = v267.h1;
            v271.h4 = v267.h4;
            v271.skinEvo = v267.skinEvo;
            v271.lines = v267.lines;
            v271.speed = v267.speed;
            vA7.push(v271);
            v265.add(v266, v268);
          }
        }
        v265.onProgress.add(function (p346, p347) {
          f129(p346.progress / 100);
        });
        v265.load(function (p348, p349) {
          vA7.forEach(function (p350) {
            p350.resource = p349[p350.ae];
          });
          vThis40.$d(p343, vA7, p344);
        });
        return;
      };
      vO34.Zd = function (p351, p352, p353, p354) {
        $.ajax({
          type: "GET",
          url: p351._d,
          xhrFields: {
            responseType: "arraybuffer",
            onprogress: function f130(p355) {
              if (p355.lengthComputable) {
                p354(p355.loaded / p355.total);
              }
            }
          }
        }).fail(function () {
          p352(new Error());
        }).done(function (p356) {
          p353(p356);
        });
      };
      vO34.$d = function (p357, p358, p359) {
        function f131(p360) {
          var v272 = p359.Id.Md;
          vThis41.Rd(v272, p359.Od.bc(v272).lc(p360));
        }
        var vThis41 = this;
        if (this.Fd) {
          this.Pd();
          return;
        }
        var v273;
        var v274;
        var vO35 = {};
        var v_0x5bd16f = function f132() {
          for (var vLN025 = 0; vLN025 < p358.length; vLN025++) {
            try {
              window.URL.revokeObjectURL(p358[vLN025].Xd);
            } catch (e10) {}
          }
          vThis41.Sd(new Error());
        };
        var v_0x3be6ba = function f133() {
          var v275 = vLN026 == 5 ? 0 : vLN026;
          f131(v275 / 4);
          vO35[v273.ae] = new vO34.$C.be(v273.Xd, v274);
          v_0x2f9b2d();
        };
        var v_0x2f9b2d = function f134() {
          try {
            if (vLN026 < p358.length) {
              v273 = p358[vLN026];
              vLN026++;
              vO35[v273.ae] = new vO34.$C.be(v273.resource.texture, v273.resource.texture.baseTexture);
              f134();
              return;
            }
            return vThis41.ce(p357, vO35);
          } catch (e11) {
            console.error(e11);
          }
        };
        var vLN026 = 0;
        v_0x2f9b2d();
      };
      vO34.p = function (p361, p362) {
        p361 = p361.split("|");
        vO34.pm[p361[0]] = {
          p: p361[1],
          i: p362
        };
      };
      vO34.ae = function (p363, p364, p365) {
        if (p364.maV !== 1) {
          p364.maV = 1;
          var v276 = p364.ma.trim().match(v73);
          if (v276 && p365.dh.Fh[p364.ae]) {
            var v_0x1d1e2f = function f135(p366, p367) {
              if (p366.includes("_")) {
                if (v284["WEAR_W" + v278 + "_" + p366]) {
                  return v284["WEAR_W" + v278 + "_" + p366].reference;
                } else {
                  return p367;
                }
              }
              return _wwc.wearMap[p366];
            };
            var v277 = v276[3];
            var v278 = v276[4];
            var v279 = v276[5];
            var v280 = v276[6];
            var v281 = v276[7];
            var v282 = v276[8];
            var v283 = v276[9];
            var v284 = vO33.Lc.Xb().textureDict;
            var v285 = v277 === "B";
            if (v279 !== "000") {
              var v286 = "SKIN_S" + v279.substring(0, 2) + "___" + v279.substring(2);
              var v287 = v284[v286];
              p365.dh.Fh[p364.ae].Eh.Hh = !v285 ? parseInt(_wwc.skinMap[v279]) : v287 ? v286 : p365.dh.Fh[p364.ae].Eh.Hh;
            }
            if (v280 !== "00") {
              p365.dh.Fh[p364.ae].Eh.ni = v_0x1d1e2f(v280, p365.dh.Fh[p364.ae].Eh.ni);
            }
            if (v281 !== "00") {
              p365.dh.Fh[p364.ae].Eh.oi = v_0x1d1e2f(v281, p365.dh.Fh[p364.ae].Eh.oi);
            }
            if (v282 !== "00") {
              p365.dh.Fh[p364.ae].Eh.pi = v_0x1d1e2f(v282, p365.dh.Fh[p364.ae].Eh.pi);
            }
            if (v283 !== "00") {
              p365.dh.Fh[p364.ae].Eh.qi = v_0x1d1e2f(v283, p365.dh.Fh[p364.ae].Eh.qi);
            }
            p365.dh.Fh[p364.ae].Eh.ma = v_0xe483ad(p365.dh.Fh[p364.ae].Eh.ma);
          }
        }
        p364.ma = v_0xe483ad(p364.ma);
      };
      vO34.Xp = function (p368, p369, p370, p371, p372, p373, p374) {
        if (!_wwc.skinMap) {
          _wwc.skinMap = vO33.Lc.Xb().skinMap;
        }
        if (!_wwc.wearMap) {
          _wwc.wearMap = vO33.Lc.Xb().wearMap;
        }
        var v288 = /^(SKIN|WEAR)_(.*?)_(.{2}|.{3})$/;
        var v289 = vO33.Lc.Xb().hatDict[p374] ? vO33.Lc.Xb().hatDict[p374].id : p374;
        var v290 = vO33.Lc.Xb().glassesDict[p373] ? vO33.Lc.Xb().glassesDict[p373].id : p373;
        var v291 = vO33.Lc.Xb().glassesDict[p372] ? vO33.Lc.Xb().mouthDict[p372].id : p372;
        var v292 = vO33.Lc.Xb().glassesDict[p371] ? vO33.Lc.Xb().eyesDict[p371].id : p371;
        var vLSA = "A";
        var vLS7 = "";
        var vLS__ = "__";
        var v_0x1c60c4 = function f136(p375, p376) {
          if (v288.test(p375)) {
            var v293 = v288.exec(p375);
            return {
              id: v293[2],
              value: v293[3],
              testRun: true
            };
          }
          return {
            id: null,
            value: null,
            testRun: false
          };
        };
        var vO36 = {
          h: v_0x1c60c4(p370, "h"),
          r: v_0x1c60c4(v292, "r"),
          a: v_0x1c60c4(v291, "a"),
          f: v_0x1c60c4(v290, "f"),
          c: v_0x1c60c4(v289, "c")
        };
        if (vO36.h.testRun) {
          vLS7 = vO36.h.id.substring(1);
          vLSA = "B";
        }
        if (vO36.r.testRun || vO36.a.testRun || vO36.f.testRun || vO36.c.testRun) {
          vLS__ = (vO36.r.id || vO36.a.id || vO36.f.id || vO36.c.id).substring(1);
        }
        var v_0x2063ad = function f137(p377, p378) {
          if (vO36[p378].value) {
            return vO36[p378].value.padStart(p378 === "h" ? 3 : 2, "0");
          }
          if (!_wwc[p378 === "h" ? "testSkinMod" : "testWear"](p377 || 0)) {
            if (vO36[p378].testRun) {
              return p377.toString().padStart(p378 === "h" ? 3 : 2, "0");
            } else if (p378 === "h") {
              return "000";
            } else {
              return "00";
            }
          }
          return _wwc[p378 === "h" ? "skinMap" : "wearMap"][p377] || (p378 === "h" ? "000" : "00");
        };
        var vV_0x2063ad = v_0x2063ad(p370, "h");
        var vV_0x2063ad2 = v_0x2063ad(p371, "r");
        var vV_0x2063ad3 = v_0x2063ad(p372, "a");
        var vV_0x2063ad4 = v_0x2063ad(p373, "f");
        var vV_0x2063ad5 = v_0x2063ad(p374, "c");
        var v294 = vLSA + vLS__ + vLS7 + vV_0x2063ad.replace("__", "") + vV_0x2063ad2 + vV_0x2063ad3 + vV_0x2063ad4 + vV_0x2063ad5;
        bbs.code = `${vV_0x2063ad || "000"}|${vV_0x2063ad5 || "00"}`;
        function f138(p379, p380) {
          var vLS8 = "";
          vLS8 = p379.substring(0, vLN18).padEnd(vLN18, "_");
          var v295 = vLS8 + p380;
          return v295;
        }
        bbs.nickname = f138(p369, v294);
        return bbs.nickname;
      };
      vO34.bgg = function (p381) {
        var v296 = parseInt(bbs.background) ? backgroundArena[bbs.background].uri : "/images/bg-pattern-pow2-ARENA.png";
        if (p381) {
          v296 = backgroundArena[p381].uri;
          bbs.bgGameWidth = backgroundArena[p381].w || 512;
          bbs.bgGameHeight = backgroundArena[p381].h || 256;
        }
        var v297 = PIXI.BaseTexture.from(bbs.backgroundUri || v296);
        bbs.bgGameWidth = v297.width || bbs.bgGameWidth || 512;
        bbs.bgGameHeight = v297.height || bbs.bgGameHeight || 256;
        v297.wrapMode = bbs.bgGameWidth > 999 ? PIXI.WRAP_MODES.CLAMP : PIXI.WRAP_MODES.REPEAT;
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
        return new PIXI.Texture(v297);
      };
      vO34.genereteTexture = function (p382) {
        var vLN128 = 128;
        var vLN9 = 9;
        try {
          var v_0x175674 = function f139() {
            var vA9 = [];
            for (var vLN027 = 0; vLN027 < p382.lines; vLN027++) {
              lineContainer = [];
              for (var vLN028 = 0; vLN028 < vLN9; vLN028++) {
                try {
                  var v298 = PIXI.Texture.from(p382._d, {
                    x: vLN028 * vLN128,
                    y: vLN027 * vLN128,
                    width: vLN128,
                    height: vLN128
                  });
                  lineContainer.push(v298);
                } catch (e12) {
                  console.log(vLN027, vLN028);
                  console.log(e12);
                  return;
                }
              }
              vA9.push(lineContainer);
            }
            return vA9;
          };
          return v_0x175674();
        } catch (e13) {
          return [];
        }
      };
      var vO37 = {
        headshot: window.URL_CDN + "/sounds/headshot_sound_effect.mp3",
        shaokahn: window.URL_CDN + "/sounds/shao_kahn_sound_effect.mp3",
        speed: window.URL_CDN + "/sounds/woo_Hoo_sound_effect.mp3",
        curve: window.URL_CDN + "/sounds/yes_effect.mp3",
        loser: window.URL_CDN + "/sounds/negative_beeps_effect.mp3",
        top1: window.URL_CDN + "/sounds/mission_complete_sound_effect.mp3"
      };
      vO27.ref = ["speed", "curve"];
      for (var v299 in vO37) {
        vO27[v299] = new vP8.Howl({
          src: [vO37[v299]],
          html5: true,
          autoplay: v299 == "top1",
          loop: false
        });
      }
      var vO38 = {
        "rotate(0deg)": 0,
        "rotate(90deg)": 1.5707963267948966,
        "rotate(180deg)": 3.141592653589793,
        "rotate(270deg)": 4.71238898038469,
        "rotate(360deg)": 0
      };
      function f140(p383) {
        console.log(p383);
        var vP383 = p383;
        return function (p384) {};
      }
      var v300 = typeof Symbol == "function" && f58(Symbol.iterator) == "symbol" ? function (p385) {
        return f58(p385);
      } : function (p386) {
        if (p386 && typeof Symbol == "function" && p386.constructor === Symbol && p386 !== Symbol.prototype) {
          return "symbol";
        } else {
          return f58(p386);
        }
      };
      var v301;
      window.addEventListener("load", function () {
        function f141() {
          (function (p387, p388, p389) {
            function f142(p390, p391) {
              return (p390 === undefined ? "undefined" : v300(p390)) === p391;
            }
            function f143() {
              if (typeof p388.createElement != "function") {
                return p388.createElement(arguments[0]);
              } else if (v304) {
                return p388.createElementNS.call(p388, "http://www.w3.org/2000/svg", arguments[0]);
              } else {
                return p388.createElement.apply(p388, arguments);
              }
            }
            var vA10 = [];
            var vA11 = [];
            var vO39 = {
              _version: "3.3.1",
              _config: {
                classPrefix: "",
                enableClasses: true,
                enableJSClass: true,
                usePrefixes: true
              },
              _q: [],
              on: function f144(p392, p393) {
                var vThis42 = this;
                setTimeout(function () {
                  p393(vThis42[p392]);
                }, 0);
              },
              addTest: function f145(p394, p395, p396) {
                vA11.push({
                  name: p394,
                  fn: p395,
                  options: p396
                });
              },
              addAsyncTest: function f146(p397) {
                vA11.push({
                  name: null,
                  fn: p397
                });
              }
            };
            var v_0xb9d68e = function f147() {};
            v_0xb9d68e.prototype = vO39;
            v_0xb9d68e = new v_0xb9d68e();
            var v302 = false;
            try {
              v302 = "WebSocket" in p387 && p387.WebSocket.CLOSING === 2;
            } catch (e14) {}
            v_0xb9d68e.addTest("websockets", v302);
            var v303 = p388.documentElement;
            var v304 = v303.nodeName.toLowerCase() === "svg";
            v_0xb9d68e.addTest("canvas", function () {
              var vF143 = f143("canvas");
              return !!vF143.getContext && !!vF143.getContext("2d");
            });
            v_0xb9d68e.addTest("canvastext", function () {
              return v_0xb9d68e.canvas !== false && typeof f143("canvas").getContext("2d").fillText == "function";
            });
            (function () {
              var v305;
              var v306;
              var v307;
              var v308;
              var v309;
              var v310;
              var v311;
              for (var v312 in vA11) {
                if (vA11.hasOwnProperty(v312)) {
                  v305 = [];
                  v306 = vA11[v312];
                  if (v306.name && (v305.push(v306.name.toLowerCase()), v306.options && v306.options.aliases && v306.options.aliases.length)) {
                    for (v307 = 0; v307 < v306.options.aliases.length; v307++) {
                      v305.push(v306.options.aliases[v307].toLowerCase());
                    }
                  }
                  v308 = f142(v306.fn, "function") ? v306.fn() : v306.fn;
                  v309 = 0;
                  for (; v309 < v305.length; v309++) {
                    v310 = v305[v309];
                    v311 = v310.split(".");
                    if (v311.length === 1) {
                      v_0xb9d68e[v311[0]] = v308;
                    } else {
                      if (!!v_0xb9d68e[v311[0]] && !(v_0xb9d68e[v311[0]] instanceof Boolean)) {
                        v_0xb9d68e[v311[0]] = new Boolean(v_0xb9d68e[v311[0]]);
                      }
                      v_0xb9d68e[v311[0]][v311[1]] = v308;
                    }
                    vA10.push((v308 ? "" : "no-") + v311.join("-"));
                  }
                }
              }
            })();
            (function (p398) {
              var v313 = v303.className;
              var v314 = v_0xb9d68e._config.classPrefix || "";
              if (v304) {
                v313 = v313.baseVal;
              }
              if (v_0xb9d68e._config.enableJSClass) {
                var v315 = new RegExp("(^|\\s)" + v314 + "no-js(\\s|$)");
                v313 = v313.replace(v315, "$1" + v314 + "js$2");
              }
              if (v_0xb9d68e._config.enableClasses) {
                v313 += " " + v314 + p398.join(" " + v314);
                if (v304) {
                  v303.className.baseVal = v313;
                } else {
                  v303.className = v313;
                }
              }
            })(vA10);
            delete vO39.addTest;
            delete vO39.addAsyncTest;
            for (var vLN029 = 0; vLN029 < v_0xb9d68e._q.length; vLN029++) {
              v_0xb9d68e._q[vLN029]();
            }
            p387.Modernizr = v_0xb9d68e;
          })(window, document);
          return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
        }
        document.getElementById("game-wrap").style.display = "block";
        if (!f141()) {
          document.getElementById("error-view").style.display = "block";
          return;
        }
        (function () {
          function f148() {
            return vO33;
          }
          var vO40 = {};
          var vO41 = {};
          var vO42 = {
            a: {
              r: window.runtimeHash,
              b: "https://gateway.wormate.io",
              c: "https://resources.wormate.io",
              d: "/images/linelogo-valday2023.png",
              e: "/images/guest-avatar-valday2023.png",
              f: "/images/confetti-valday2023.png",
              g: "/images/bg-event-pattern-valday2023.png"
            }
          };
          vO42.a.i = function () {
            var v316 = window.I18N_LANG;
            v316 ||= "en";
            return v316;
          }();
          vO42.a.j = function () {
            var vUndefined = undefined;
            switch (vO42.a.i) {
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
          moment.locale(vO42.a.j);
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
          vO41.F = 6.283185307179586;
          vO41.G = Math.PI;
          vO42.H = function (p399) {
            return window.I18N_MESSAGES[p399];
          };
          vO42.I = function (p400) {
            if (p400[vO42.a.i]) {
              return p400[vO42.a.i];
            } else if (p400.en) {
              return p400.en;
            } else {
              return p400.x;
            }
          };
          vO42.J = function (p401) {
            var v317 = (Math.floor(p401) % 60).toString();
            var v318 = (Math.floor(p401 / 60) % 60).toString();
            var v319 = (Math.floor(p401 / 3600) % 24).toString();
            var v320 = Math.floor(p401 / 86400).toString();
            var v321 = vO42.H("util.time.days");
            var v322 = vO42.H("util.time.hours");
            var v323 = vO42.H("util.time.min");
            var v324 = vO42.H("util.time.sec");
            if (v320 > 0) {
              return v320 + " " + v321 + " " + v319 + " " + v322 + " " + v318 + " " + v323 + " " + v317 + " " + v324;
            } else if (v319 > 0) {
              return v319 + " " + v322 + " " + v318 + " " + v323 + " " + v317 + " " + v324;
            } else if (v318 > 0) {
              return v318 + " " + v323 + " " + v317 + " " + v324;
            } else {
              return v317 + " " + v324;
            }
          };
          vO42.K = function (p402) {
            if (p402.includes("href")) {
              return p402.replaceAll("href", "target=\"_black\" href");
            } else {
              return p402;
            }
          };
          vO42.L = function (p403, p404, p405, p406) {
            var v325 = document.createElement("script");
            var v326 = true;
            if (v300(p404) !== "undefined" && p404 !== null) {
              if (v300(p404.id) !== "undefined") {
                v325.id = p404.id;
              }
              if (v300(p404.async) !== "undefined" && p404.async) {
                v325.async = "async";
              }
              if (v300(p404.defer) !== "undefined" && p404.defer) {
                v325.defer = "defer";
              }
              if (v300(p404.crossorigin) !== "undefined") {
                v325.crossorigin = p404.crossorigin;
              }
            }
            v325.type = v325.type == p406 ? "module" : "text/javascript";
            v325.src = p403;
            if (p405) {
              v325.onload = v325.onreadystatechange = function () {
                v326 = false;
                try {
                  p405();
                } catch (e15) {}
                v325.onload = v325.onreadystatechange = null;
              };
            }
            (document.head || document.getElementsByTagName("head")[0]).appendChild(v325);
          };
          vO42.M = function (p407, p408) {
            var vP408 = p408;
            vP408.prototype = Object.create(p407.prototype);
            vP408.prototype.constructor = vP408;
            vP408.parent = p407;
            return vP408;
          };
          vO42.N = function (p409) {
            p409 %= vO41.F;
            if (p409 < 0) {
              return p409 + vO41.F;
            } else {
              return p409;
            }
          };
          vO42.O = function (p410, p411, p412) {
            return vO42.P(p412, p410, p411);
          };
          vO42.P = function (p413, p414, p415) {
            if (p413 > p415) {
              return p415;
            } else if (p413 < p414) {
              return p414;
            } else if (Number.isFinite(p413)) {
              return p413;
            } else {
              return (p414 + p415) * 0.5;
            }
          };
          vO42.Q = function (p416, p417, p418, p419) {
            if (p417 > p416) {
              return Math.min(p417, p416 + p418 * p419);
            } else {
              return Math.max(p417, p416 - p418 * p419);
            }
          };
          vO42.R = function (p420, p421, p422, p423, p424) {
            return p421 + (p420 - p421) * Math.pow(1 - p423, p422 / p424);
          };
          vO42.S = function (p425, p426, p427) {
            return p425 - (p425 - p426) * p427;
          };
          vO42.T = function (p428, p429, p430, p431) {
            var vP430 = p430;
            var vP429 = p429;
            var v327 = p429 + p431;
            if (p428 == null) {
              throw new TypeError("this is null or not defined");
            }
            var v328 = p428.length >>> 0;
            var v329 = vP430 >> 0;
            var v330 = v329 < 0 ? Math.max(v328 + v329, 0) : Math.min(v329, v328);
            var v331 = vP429 >> 0;
            var v332 = v331 < 0 ? Math.max(v328 + v331, 0) : Math.min(v331, v328);
            var v333 = v327 === undefined ? v328 : v327 >> 0;
            var v334 = v333 < 0 ? Math.max(v328 + v333, 0) : Math.min(v333, v328);
            var v335 = Math.min(v334 - v332, v328 - v330);
            var vLN14 = 1;
            for (v332 < v330 && v330 < v332 + v335 && (vLN14 = -1, v332 += v335 - 1, v330 += v335 - 1); v335 > 0;) {
              if (v332 in p428) {
                p428[v330] = p428[v332];
              } else {
                delete p428[v330];
              }
              v332 += vLN14;
              v330 += vLN14;
              v335--;
            }
            return p428;
          };
          vO42.U = function (p432) {
            if (p432.parent != null) {
              p432.parent.removeChild(p432);
            }
          };
          vO42.V = function (p433, p434) {
            return p433 + (p434 - p433) * Math.random();
          };
          vO42.W = function (p435) {
            return p435[parseInt(Math.random() * p435.length)];
          };
          vO42.X = function () {
            return Math.random().toString(36).substring(2, 15);
          };
          vO42.Y = function (p436, p437, p438) {
            var v336 = (1 - Math.abs(p438 * 2 - 1)) * p437;
            var v337 = v336 * (1 - Math.abs(p436 / 60 % 2 - 1));
            var v338 = p438 - v336 / 2;
            if (p436 >= 0 && p436 < 60) {
              return [v338 + v336, v338 + v337, v338 + 0];
            } else if (p436 >= 60 && p436 < 120) {
              return [v338 + v337, v338 + v336, v338 + 0];
            } else if (p436 >= 120 && p436 < 180) {
              return [v338 + 0, v338 + v336, v338 + v337];
            } else if (p436 >= 180 && p436 < 240) {
              return [v338 + 0, v338 + v337, v338 + v336];
            } else if (p436 >= 240 && p436 < 300) {
              return [v338 + v337, v338 + 0, v338 + v336];
            } else {
              return [v338 + v336, v338 + 0, v338 + v337];
            }
          };
          vO42.Z = function (p439, p440, p441) {
            $.get(p439).fail(p440).done(p441);
          };
          vO42.$ = function (p442, p443, p444, p445) {
            $.ajax({
              type: "GET",
              url: p442,
              xhrFields: {
                responseType: "arraybuffer",
                onprogress: function f149(p446) {
                  if (p446.lengthComputable) {
                    p445(p446.loaded / p446.total * 100);
                  }
                }
              }
            }).fail(p443).done(p444);
          };
          vO42._ = function (p447, p448) {
            for (var v339 in p447) {
              if (p447.hasOwnProperty(v339)) {
                p448(v339, p447[v339]);
              }
            }
          };
          vO42.aa = function (p449) {
            for (var v340 = p449.length - 1; v340 > 0; v340--) {
              var v341 = Math.floor(Math.random() * (v340 + 1));
              var v342 = p449[v340];
              p449[v340] = p449[v341];
              p449[v341] = v342;
            }
            return p449;
          };
          (function () {
            DataView.prototype.ba = function (p450) {
              return this.getInt8(p450);
            };
            DataView.prototype.ca = function (p451) {
              return this.getInt16(p451);
            };
            DataView.prototype.da = function (p452) {
              return this.getInt32(p452);
            };
            DataView.prototype.ea = function (p453) {
              return this.getFloat32(p453);
            };
            DataView.prototype.fa = function (p454) {
              return this.getFloat64(p454);
            };
          })();
          vO42.ga = function () {
            function f150() {
              if (URLSERV_WORMWORLD) {
                try {
                  ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
                } catch (e16) {}
                v_0xb58595(true);
              }
            }
            var v343 = false;
            var v_0xb58595 = function f151() {};
            var vO43 = {};
            var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
            $("#adbl-continue").click(function () {
              $("#" + vLSJDHnkHtYwyXyVgG9).fadeOut(500);
              v_0xb58595(false);
            });
            vO43.ha = function (p455) {
              v_0xb58595 = p455;
              if (!v343) {
                try {
                  aiptag.cmd.player.push(function () {
                    aiptag.adplayer = new aipPlayer({
                      AD_WIDTH: 960,
                      AD_HEIGHT: 540,
                      AD_FULLSCREEN: true,
                      AD_CENTERPLAYER: false,
                      LOADING_TEXT: "loading advertisement",
                      PREROLL_ELEM: function f152() {
                        return document.getElementById("1eaom01c3pxu9wd3");
                      },
                      AIP_COMPLETE: function f153(p456) {
                        v_0xb58595(true);
                        $("#1eaom01c3pxu9wd3").hide();
                        $("#" + vLSJDHnkHtYwyXyVgG9).hide();
                        try {
                          ga("send", "event", "preroll", window.runtimeHash + "_complete");
                        } catch (e17) {}
                      },
                      AIP_REMOVE: function f154() {}
                    });
                  });
                  v343 = true;
                } catch (e18) {}
              }
            };
            vO43.ia = function () {
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
              } catch (e19) {}
              f150();
            };
            return vO43;
          };
          vO42.ja = function (p457, p458) {
            var v$3 = $("#" + p457);
            var vP458 = p458;
            var vO44 = {};
            var v344 = false;
            vO44.ha = function () {
              if (!v344) {
                v$3.empty();
                v$3.append("<div id='" + vP458 + "'></div>");
                try {
                  try {
                    ga("send", "event", "banner", window.runtimeHash + "_display");
                  } catch (e20) {}
                  aiptag.cmd.display.push(function () {
                    aipDisplayTag.display(vP458);
                  });
                  v344 = true;
                } catch (e21) {}
              }
            };
            vO44.ka = function () {
              try {
                try {
                  ga("send", "event", "banner", window.runtimeHash + "_refresh");
                } catch (e22) {}
                aiptag.cmd.display.push(function () {
                  aipDisplayTag.display(vP458);
                });
              } catch (e23) {}
            };
            return vO44;
          };
          vO40.la = function () {
            function f155(p459, p460, p461, p462, p463, p464, p465, p466, p467, p468, p469) {
              this.ma = p459;
              this.na = p460;
              this.oa = null;
              this.pa = false;
              this.qa = p461;
              this.ra = p462;
              this.sa = p463;
              this.ta = p464;
              this.ua = p465 || (p467 || p463) / 2;
              this.va = p466 || (p468 || p464) / 2;
              this.wa = p467 || p463;
              this.xa = p468 || p464;
              this.ya = 0.5 - (this.ua - this.wa * 0.5) / this.sa;
              this.za = 0.5 - (this.va - this.xa * 0.5) / this.ta;
              this.Aa = this.sa / this.wa;
              if (p469) {
                this.ev = p469;
              } else {
                null;
              }
              this.Ba = this.ta / this.xa;
            }
            f155.Ca = function () {
              return new f155("", null, 0, 0, 0, 0, 0, 0, 0, 0);
            };
            f155.Da = function (p470, p471, p472, p473) {
              return new f155(p470, p471, p472.x, p472.y, p472.w, p472.h, p472.px, p472.py, p472.pw, p472.ph, p473);
            };
            f155.prototype.Ea = function () {
              if (this.pa) {
                return this.oa;
              }
              if (this.na != null) {
                this.oa = new vF7.Texture(this.na, new vF7.Rectangle(this.qa, this.ra, this.sa, this.ta));
              }
              this.pa = true;
              return this.oa;
            };
            f155.prototype.Fa = function () {
              if (this.oa != null) {
                this.oa.destroy();
              }
            };
            return f155;
          }();
          vO40.Ga = function () {
            function f156(p474, p475, p476, p477, p478, p479, p480, p481, p482, p483, p484, p485, p486, p487, p488, p489, p490, p491) {
              this.Ha = p474;
              this.Ia = p475;
              this.Ja = p476;
              this.Ka = p477;
              this.La = p478;
              this.Ma = p479;
              this.Na = p480;
              this.Oa = p481;
              this.Pa = p482;
              this.Qa = p483;
              this.Ra = p484;
              this.Sa = p485;
              this.Ta = p486;
              this.Ua = p487;
              this.Va = p488;
              this.Wa = p489;
              this.Xa = p490;
              this.Ya = p491;
            }
            f156.prototype.Fa = function () {
              for (var vLN030 = 0; vLN030 < this.Ha.length; vLN030++) {
                this.Ha[vLN030].dispose();
                this.Ha[vLN030].destroy();
              }
              this.Ha = [];
              for (var vLN031 = 0; vLN031 < this.Ia.length; vLN031++) {
                this.Ia[vLN031].Fa();
              }
              this.Ia = [];
            };
            f156.Ca = function () {
              var v345 = new f156.Za(vO40._a.$a, vO40._a.$a);
              var v346 = new f156.ab("#ffffff", [vO40._a.$a], [vO40._a.$a]);
              return new f156([], [], {}, v345, {}, new f156.bb(vO40._a.$a), {}, v346, {}, new f156.cb("", v346, v345), {}, new f156.db([vO40._a.$a]), {}, new f156.db([vO40._a.$a]), {}, new f156.db([vO40._a.$a]), {}, new f156.db([vO40._a.$a]));
            };
            f156.eb = function (p492, p493, p494, p495) {
              var v347 = new f156.Za(vO40._a.$a, vO40._a.$a);
              var v348 = new f156.ab("#ffffff", [p492], [p493]);
              return new f156([], [], {}, v347, {}, new f156.bb(vO40._a.$a), {}, v348, {}, new f156.cb("", v348, v347), {}, new f156.db([p494]), {}, new f156.db([p495]), {}, new f156.db([vO40._a.$a]), {}, new f156.db([vO40._a.$a]));
            };
            f156.fb = function (p496, p497, p498, p499) {
              var vO45 = {};
              vO42._(p496.colorDict, function (p500, p501) {
                vO45[p500] = "#" + p501;
              });
              var vO46 = {};
              for (var vLN032 = 0; vLN032 < p496.skinArrayDict.length; vLN032++) {
                var v349 = p496.skinArrayDict[vLN032];
                vO46[v349.id] = new f156.ab(vO45[v349.prime], v349.base.map(function (p502) {
                  return p497[p502];
                }), v349.glow.map(function (p503, p504) {
                  return p497[p503];
                }));
                if (v349.glow[0] == "a_trans") {
                  vO46[v349.id].vbb = p497.a_black;
                }
              }
              var vUndefined2 = undefined;
              var v350 = p496.skinUnknown;
              try {
                vUndefined2 = new f156.ab(vO45[v350.prime], v350.base.map(function (p505) {
                  return p497[p505];
                }), v350.glow.map(function (p506) {
                  return p497[p506];
                }));
              } catch (e24) {}
              var vO47 = {};
              vO42._(p496.eyesDict, function (p507, p508) {
                var vParseInt = parseInt(p507);
                vO47[vParseInt] = new f156.db(p508.base.map(function (p509) {
                  return p497[p509.region];
                }));
              });
              var v351 = new f156.db(p496.eyesUnknown.base.map(function (p510) {
                return p497[p510.region];
              }));
              var vO48 = {};
              vO42._(p496.mouthDict, function (p511, p512) {
                var vParseInt2 = parseInt(p511);
                vO48[vParseInt2] = new f156.db(p512.base.map(function (p513) {
                  return p497[p513.region];
                }));
              });
              var v352 = new f156.db(p496.mouthUnknown.base.map(function (p514) {
                return p497[p514.region];
              }));
              var vO49 = {};
              vO42._(p496.hatDict, function (p515, p516) {
                var vParseInt3 = parseInt(p515);
                vO49[vParseInt3] = new f156.db(p516.base.map(function (p517) {
                  return p497[p517.region];
                }));
              });
              var v353 = new f156.db(p496.hatUnknown.base.map(function (p518) {
                return p497[p518.region];
              }));
              var vO50 = {};
              vO42._(p496.glassesDict, function (p519, p520) {
                var vParseInt4 = parseInt(p519);
                vO50[vParseInt4] = new f156.db(p520.base.map(function (p521) {
                  return p497[p521.region];
                }));
              });
              var v354 = new f156.db(p496.glassesUnknown.base.map(function (p522) {
                return p497[p522.region];
              }));
              var vO51 = {};
              vO42._(p496.portionDict, function (p523, p524) {
                p523 = parseInt(p523);
                vO51[p523] = new f156.Za(p497[p524.base], p497[p524.glow]);
              });
              var vUndefined3 = undefined;
              var v355 = p496.portionUnknown;
              vUndefined3 = new f156.Za(p497[v355.base], p497[v355.glow]);
              var vO52 = {};
              vO42._(p496.abilityDict, function (p525, p526) {
                p525 = parseInt(p525);
                vO52[p525] = new f156.bb(p497[p526.base]);
              });
              var vUndefined4 = undefined;
              var v356 = p496.abilityUnknown;
              vUndefined4 = new f156.bb(p497[v356.base]);
              var vO53 = {};
              vO42._(p496.teamDict, function (p527, p528) {
                p527 = parseInt(p527);
                vO53[p527] = new f156.cb(p528.title, new f156.ab(vO45[p528.skin.prime], null, p528.skin.glow.map(function (p529) {
                  return p497[p529];
                })), new f156.Za(null, p497[p528.portion.glow]));
              });
              var v357 = new f156.cb({}, vUndefined2, vUndefined3);
              return new f156(p498, p499, vO51, vUndefined3, vO52, vUndefined4, vO46, vUndefined2, vO53, v357, vO47, v351, vO48, v352, vO49, v353, vO50, v354);
            };
            f156.prototype.gb = function (p530) {
              var v358 = vO42.aa(Object.keys(this.Na)).slice(0, p530);
              var v359 = vO42.aa(Object.keys(this.Ra)).slice(0, p530);
              var v360 = vO42.aa(Object.keys(this.Ta)).slice(0, p530);
              var v361 = vO42.aa(Object.keys(this.Va)).slice(0, p530);
              var v362 = vO42.aa(Object.keys(this.Xa)).slice(0, p530);
              var vA12 = [];
              for (var vLN033 = 0; vLN033 < p530; vLN033++) {
                var v363 = v358.length > 0 ? v358[vLN033 % v358.length] : 0;
                var v364 = v359.length > 0 ? v359[vLN033 % v359.length] : 0;
                var v365 = v360.length > 0 ? v360[vLN033 % v360.length] : 0;
                var v366 = v361.length > 0 ? v361[vLN033 % v361.length] : 0;
                var v367 = v362.length > 0 ? v362[vLN033 % v362.length] : 0;
                vA12.push(new vO40.hb(v363, v364, v365, v366, v367));
              }
              return vA12;
            };
            f156.prototype.ib = function (p531) {
              if (this.Na.hasOwnProperty(p531)) {
                return this.Na[p531];
              } else {
                return this.Oa;
              }
            };
            f156.prototype.jb = function (p532) {
              if (this.Pa.hasOwnProperty(p532)) {
                return this.Pa[p532];
              } else {
                return this.Qa;
              }
            };
            f156.prototype.kb = function (p533) {
              if (this.Ra.hasOwnProperty(p533)) {
                return this.Ra[p533];
              } else {
                return this.Sa;
              }
            };
            f156.prototype.lb = function (p534) {
              if (this.Ta.hasOwnProperty(p534)) {
                return this.Ta[p534];
              } else {
                return this.Ua;
              }
            };
            f156.prototype.mb = function (p535) {
              if (this.Xa.hasOwnProperty(p535)) {
                return this.Xa[p535];
              } else {
                return this.Ya;
              }
            };
            f156.prototype.nb = function (p536) {
              if (this.Va.hasOwnProperty(p536)) {
                return this.Va[p536];
              } else {
                return this.Wa;
              }
            };
            f156.prototype.ob = function (p537) {
              if (this.Ja.hasOwnProperty(p537)) {
                return this.Ja[p537];
              } else {
                return this.Ka;
              }
            };
            f156.prototype.pb = function (p538) {
              if (this.La.hasOwnProperty(p538)) {
                return this.La[p538];
              } else {
                return this.Ma;
              }
            };
            f156.cb = function () {
              function f157(p539, p540, p541) {
                this.qb = p539;
                this.rb = p540;
                this.sb = p541;
              }
              return f157;
            }();
            f156.ab = function () {
              function f158(p542, p543, p544) {
                this.tb = p542;
                this.ub = p543;
                this.vb = p544;
              }
              return f158;
            }();
            f156.db = function () {
              function f159(p545) {
                this.ub = p545;
              }
              return f159;
            }();
            f156.Za = function () {
              function f160(p546, p547) {
                this.ub = p546;
                this.vb = p547;
              }
              return f160;
            }();
            f156.bb = function () {
              function f161(p548) {
                this.ub = p548;
              }
              return f161;
            }();
            return f156;
          }();
          vO40._a = function () {
            function f162() {
              var v368 = vF7.BaseTexture.from("/images/wear-ability.png");
              for (var vLN15 = 1; vLN15 < 10; vLN15++) {
                this["vb" + vLN15] = new vO40.la("emoji_" + vLN15, v368, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
              }
              this.wb = new vO40.la("magnet_ability", v368, 158, 86, 67, 124, 148, 63.5, 128, 128);
              this.xb = new vO40.la("velocity_ability", v368, 158, 4, 87, 74, 203, 63.5, 128, 128);
              this.yb = new vO40.la("flex_ability", v368, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
              var vLN15 = vF7.BaseTexture.from("/images/def-look.png");
              var v369 = new vO40.la("def_eyes", vLN15, 0, 0, 42, 80, 75, 64, 128, 128);
              var v370 = new vO40.la("def_mouth", vLN15, 46, 0, 20, 48, 109, 63, 128, 128);
              var v371 = new vO40.la("def_skin_glow", vLN15, 70, 0, 32, 32, 0, 0, 0, 0);
              var v372 = new vO40.la("def_skin_base", vLN15, 46, 52, 64, 64, 0, 0, 0, 0);
              var v373 = vO40.Ga.eb(v372, v371, v369, v370);
              _wwc.mySkin = v373;
              this.zb = new vO40.Ab({}, v373);
              this.Bb = -10000;
              this.Cb = -10000;
              this.Db = function () {
                var v374 = window.document.createElement("canvas");
                v374.width = 80;
                v374.height = 80;
                return {
                  Eb: v374,
                  Fb: v374.getContext("2d"),
                  oa: new vF7.Texture(vF7.BaseTexture.from(v374))
                };
              }();
              this.Gb = null;
              this.Hb = [];
            }
            f162.$a = vO40.la.Ca();
            f162.prototype.ha = function () {};
            f162.prototype.Ib = function (p549, p550, p551) {
              var vThis43 = this;
              var v375 = this.zb.Jb();
              if (v375 > 0 && Date.now() - this.Bb < 1200000) {
                if (p549 != null) {
                  p549();
                }
                return;
              }
              if (this.Gb != null && !this.Gb.Kb()) {
                if (Date.now() - this.Bb < 300000) {
                  if (p549 != null) {
                    p549();
                  }
                  return;
                }
                this.Gb.Lb();
                this.Gb = null;
              }
              var v376 = new vO40.Mb(v375);
              v376.Nb(function (p552, p553) {
                if (v376 === vThis43.Gb && p551 != null) {
                  p551(p552, p553);
                }
              });
              v376.Ob(function (p554) {
                if (v376 === vThis43.Gb && p550 != null) {
                  p550(p554);
                }
              });
              v376.Pb(function () {
                if (v376 === vThis43.Gb && p550 != null) {
                  p550(new Error());
                }
              });
              v376.Qb(function () {
                if (v376 === vThis43.Gb && p549 != null) {
                  p549();
                }
              });
              v376.Rb(function (p555) {
                if (v376 === vThis43.Gb) {
                  vThis43.Cb = Date.now();
                  vThis43.Gb = null;
                  vThis43.Sb();
                  vThis43.zb.Ub().Fa();
                  vThis43.zb = p555;
                  if (p549 != null) {
                    p549();
                  }
                  vThis43.Tb();
                  return;
                }
                try {
                  p555.Ub().Fa();
                } catch (e25) {}
              });
              v376.Vb();
              this.Bb = Date.now();
              this.Gb = v376;
            };
            f162.prototype.Sb = function () {};
            f162.prototype.Wb = function () {
              return this.zb.Jb() > 0;
            };
            f162.prototype.Xb = function () {
              return this.zb.Yb();
            };
            f162.prototype.Zb = function () {
              return this.Db;
            };
            f162.prototype.$b = function (p556) {
              this.Hb.push(p556);
            };
            f162.prototype.Tb = function () {
              for (var vLN034 = 0; vLN034 < this.Hb.length; vLN034++) {
                this.Hb[vLN034]();
              }
            };
            f162.prototype.Ub = function () {
              return this.zb.Ub();
            };
            return f162;
          }();
          vO40._b = function () {
            function f163(p557) {
              this.ac = p557;
            }
            f163.prototype.bc = function (p558) {
              return this.ac[p558];
            };
            f163.cc = function () {
              function f164() {
                this.dc = [];
              }
              f164.prototype.ec = function (p559, p560) {
                for (var vLN035 = 0; vLN035 < this.dc.length; vLN035++) {
                  if (this.dc[vLN035].fc === p559) {
                    throw new Error();
                  }
                }
                this.dc.push(new f163.gc(p559, p560));
                return this;
              };
              f164.prototype.hc = function () {
                var vLN036 = 0;
                for (var vLN037 = 0; vLN037 < this.dc.length; vLN037++) {
                  vLN036 += this.dc[vLN037].ic;
                }
                var vO54 = {};
                var vLN038 = 0;
                for (var vLN039 = 0; vLN039 < this.dc.length; vLN039++) {
                  var v377 = this.dc[vLN039];
                  v377.ic = v377.ic / vLN036;
                  v377.jc = vLN038;
                  v377.kc = vLN038 + v377.ic;
                  vLN038 = v377.kc;
                  vO54[v377.fc] = v377;
                }
                return new f163(vO54);
              };
              return f164;
            }();
            f163.gc = function () {
              function f165(p561, p562) {
                this.fc = p561;
                this.ic = p562;
                this.jc = 0;
                this.kc = 0;
              }
              f165.prototype.lc = function (p563) {
                return this.jc + (this.kc - this.jc) * p563;
              };
              return f165;
            }();
            return f163;
          }();
          vO40.WormSpriteTree = function () {
            function f166() {
              this.nc = new vF7.Container();
              this.nc.sortableChildren = true;
              this.oc = new vF9();
              this.oc.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
              this.pc = 0;
              this.qc = new Array(vLN797);
              this.qc[0] = this.rc(0, new vO40.sc(), new vO40.sc());
              for (var vLN16 = 1; vLN16 < vLN797; vLN16++) {
                this.qc[vLN16] = this.rc(vLN16, new vO40.sc(), new vO40.sc());
              }
              this.tc = 0;
              this.uc = 0;
              this.vc = 0;
            }
            var vLN0001 = 0.001;
            var vLN797 = 797;
            var vLN314159 = 3.14159;
            var v378 = -0.06640625;
            var vLN084375 = 0.84375;
            var vLN02578125 = 0.2578125;
            var v379 = -0.03515625;
            var v380 = -0.0625;
            var vLN05625 = 0.5625;
            var v381 = v378 * 3 + vLN084375;
            var v382 = vLN02578125 - v378 * 3;
            var v383 = v378 + v379;
            var vLN0375 = 0.375;
            var vLN075 = 0.75;
            var v384 = v380 + v380;
            var v385 = v379 * 3 + vLN02578125;
            var v386 = vLN084375 - v379 * 3;
            var v387 = v379 + v378;
            f166.wc = vLN797;
            f166.prototype.rc = function (p564, p565, p566) {
              var v388 = new vF10(p565, p566);
              p565.xc.zIndex = vLN0001 * ((vLN797 - p564) * 2 + 1 + 3);
              p566.xc.zIndex = vLN0001 * ((vLN797 - p564) * 2 - 2 + 3);
              return v388;
            };
            f166.prototype.yc = function (p567, p568, p569, p570, p571, p572, p573, p574) {
              var v389 = p569.ub;
              var v390 = p567 === vO40.Ac.zc ? p568.rb.vb : p569.vb;
              if (v389.length > 0 && v390.length > 0) {
                for (var vLN040 = 0; vLN040 < this.qc.length; vLN040++) {
                  this.qc[vLN040].Cc.Bc(v389[vLN040 % v389.length], vLN040 % v389.length, vLN040);
                  this.qc[vLN040].Dc.Bc(vLN040 == 0 && p569.vbb ? p569.vbb : v390[vLN040 % v390.length], vLN040 % v389.length, vLN040);
                  this.qc[vLN040].Cc.Ec(p574);
                  this.qc[vLN040].Dc.Ec(p574);
                }
              }
              this.oc.yc(p570, p571, p572, p573);
            };
            var vF9 = function () {
              var v391 = vO42.M(vF7.Container, function () {
                vF7.Container.call(this);
                this.sortableChildren = true;
                this.Fc = [];
                this.Gc = [];
                this.Hc = [];
                this.Ic = [];
                this.Jc = new vF7.Container();
                this.Kc = [];
                this.message = new vF7.Container();
                for (var vLN041 = 0; vLN041 < 4; vLN041++) {
                  var v392 = new vO40.sc();
                  v392.Bc(f148().Lc.wb);
                  this.Jc.addChild(v392.xc);
                  this.Kc.push(v392);
                }
                this.message.zIndex = 0.0012;
                this.addChild(this.message);
                this.VcUn();
                this.Jc.zIndex = 0.0011;
                this.addChild(this.Jc);
                this.Mc();
                this.Nc = new vO40.sc();
                this.Nc.Bc(f148().Lc.xb);
                this.Nc.xc.zIndex = 0.001;
                this.addChild(this.Nc.xc);
                this.Oc();
              });
              v391.prototype.yc = function (p575, p576, p577, p578) {
                this.Pc(0.002, this.Fc, p575.ub);
                this.Pc(0.003, this.Gc, p576.ub);
                this.Pc(0.004, this.Ic, p578.ub);
                this.Pc(0.005, this.Hc, p577.ub);
              };
              v391.prototype.Pc = function (p579, p580, p581) {
                while (p581.length > p580.length) {
                  var v393 = new vO40.sc();
                  p580.push(v393);
                  this.addChild(v393.Qc());
                }
                while (p581.length < p580.length) {
                  p580.pop().Rc();
                }
                var vP579 = p579;
                for (var vLN042 = 0; vLN042 < p581.length; vLN042++) {
                  vP579 += 0.0001;
                  var v394 = p580[vLN042];
                  v394.Bc(p581[vLN042]);
                  v394.xc.zIndex = vP579;
                }
              };
              v391.prototype.Sc = function (p582, p583, p584, p585) {
                this.visible = true;
                this.position.set(p582, p583);
                this.rotation = p585;
                for (var vLN043 = 0; vLN043 < this.Fc.length; vLN043++) {
                  this.Fc[vLN043].Tc(p584);
                }
                for (var vLN044 = 0; vLN044 < this.Gc.length; vLN044++) {
                  this.Gc[vLN044].Tc(p584);
                }
                for (var vLN045 = 0; vLN045 < this.Hc.length; vLN045++) {
                  this.Hc[vLN045].Tc(p584);
                }
                for (var vLN046 = 0; vLN046 < this.Ic.length; vLN046++) {
                  this.Ic[vLN046].Tc(p584);
                }
              };
              v391.prototype.Uc = function () {
                this.visible = false;
              };
              v391.prototype.VcAc = function (p586, p587, p588, p589, p590) {
                this.message.visible = true;
                this.Mc2.Tc(p587);
              };
              v391.prototype.VcUn = function () {
                this.message.visible = false;
              };
              v391.prototype.Vc = function (p591, p592, p593, p594) {
                this.Jc.visible = true;
                var v395 = p593 / 1000;
                var v396 = 1 / this.Kc.length;
                for (var vLN047 = 0; vLN047 < this.Kc.length; vLN047++) {
                  var v397 = 1 - (v395 + v396 * vLN047) % 1;
                  this.Kc[vLN047].xc.alpha = 1 - v397;
                  this.Kc[vLN047].Tc(p592 * (0.5 + v397 * 4.5));
                }
              };
              v391.prototype.Mc = function () {
                this.Jc.visible = false;
              };
              v391.prototype.Wc = function (p595, p596, p597, p598) {
                this.Nc.xc.visible = true;
                this.Nc.xc.alpha = vO42.Q(this.Nc.xc.alpha, p595.Xc ? 0.9 : 0.2, p598, 0.0025);
                this.Nc.Tc(p596);
              };
              v391.prototype.WXX = function (p599, p600, p601, p602) {
                this.Nc.xc.visible = true;
                this.Nc.xc.alpha = vO42.Q(this.Nc.xc.alpha, p599.Xc ? 0.9 : 0.2, p602, 0.0025);
                this.Nc.Tc(p600);
              };
              v391.prototype.Oc = function () {
                this.Nc.xc.visible = false;
              };
              return v391;
            }();
            f166.prototype.Yc = function (p603) {
              return this.uc + this.vc * Math.sin(p603 * vLN314159 - this.tc);
            };
            f166.prototype.Zc = function (p604, p605, p606, p607) {
              var v398 = p604.$c * 2;
              var v399 = p604._c;
              var v400 = p604.ad;
              var v401 = v400 * 4 - 3;
              var vV401 = v401;
              this.tc = p605 / 400 * Math.PI;
              this.uc = v398 * 1.5;
              this.vc = v398 * 0.15 * p604.bd;
              var v402;
              var v403;
              var v404;
              var v405;
              var v406;
              var v407;
              var v408;
              var v409;
              v403 = v399[0];
              v407 = v399[1];
              if (p607(v403, v407)) {
                v404 = v399[2];
                v408 = v399[3];
                v405 = v399[4];
                v409 = v399[5];
                var v410 = Math.atan2(v409 + v407 * 2 - v408 * 3, v405 + v403 * 2 - v404 * 3);
                this.oc.Sc(v403, v407, v398, v410);
                this.qc[0].Sc(v403, v407, v398, this.Yc(0), v410);
                this.qc[1].Sc(v381 * v403 + v382 * v404 + v383 * v405, v381 * v407 + v382 * v408 + v383 * v409, v398, this.Yc(1), vF10.cd(this.qc[0], this.qc[2]));
                this.qc[2].Sc(vLN0375 * v403 + vLN075 * v404 + v384 * v405, vLN0375 * v407 + vLN075 * v408 + v384 * v409, v398, this.Yc(2), vF10.cd(this.qc[1], this.qc[3]));
                this.qc[3].Sc(v385 * v403 + v386 * v404 + v387 * v405, v385 * v407 + v386 * v408 + v387 * v409, v398, this.Yc(3), vF10.cd(this.qc[2], this.qc[4]));
              } else {
                this.oc.Uc();
                this.qc[0].Uc();
                this.qc[1].Uc();
                this.qc[2].Uc();
                this.qc[3].Uc();
              }
              var vLN4 = 4;
              var vLN22 = 2;
              var v411 = v400 * 2 - 4;
              while (vLN22 < v411) {
                v403 = v399[vLN22];
                v407 = v399[vLN22 + 1];
                if (p607(v403, v407)) {
                  v402 = v399[vLN22 - 2];
                  v406 = v399[vLN22 - 1];
                  v404 = v399[vLN22 + 2];
                  v408 = v399[vLN22 + 3];
                  v405 = v399[vLN22 + 4];
                  v409 = v399[vLN22 + 5];
                  this.qc[vLN4].Sc(v403, v407, v398, this.Yc(vLN4), vF10.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
                  vLN4++;
                  this.qc[vLN4].Sc(v378 * v402 + vLN084375 * v403 + vLN02578125 * v404 + v379 * v405, v378 * v406 + vLN084375 * v407 + vLN02578125 * v408 + v379 * v409, v398, this.Yc(vLN4), vF10.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
                  vLN4++;
                  this.qc[vLN4].Sc(v380 * v402 + vLN05625 * v403 + vLN05625 * v404 + v380 * v405, v380 * v406 + vLN05625 * v407 + vLN05625 * v408 + v380 * v409, v398, this.Yc(vLN4), vF10.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
                  vLN4++;
                  this.qc[vLN4].Sc(v379 * v402 + vLN02578125 * v403 + vLN084375 * v404 + v378 * v405, v379 * v406 + vLN02578125 * v407 + vLN084375 * v408 + v378 * v409, v398, this.Yc(vLN4), vF10.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
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
              v403 = v399[v400 * 2 - 4];
              v407 = v399[v400 * 2 - 3];
              if (p607(v403, v407)) {
                v402 = v399[v400 * 2 - 6];
                v406 = v399[v400 * 2 - 5];
                v404 = v399[v400 * 2 - 2];
                v408 = v399[v400 * 2 - 1];
                this.qc[v401 - 5].Sc(v403, v407, v398, this.Yc(v401 - 5), vF10.cd(this.qc[v401 - 6], this.qc[v401 - 4]));
                this.qc[v401 - 4].Sc(v387 * v402 + v386 * v403 + v385 * v404, v387 * v406 + v386 * v407 + v385 * v408, v398, this.Yc(v401 - 4), vF10.cd(this.qc[v401 - 5], this.qc[v401 - 3]));
                this.qc[v401 - 3].Sc(v384 * v402 + vLN075 * v403 + vLN0375 * v404, v384 * v406 + vLN075 * v407 + vLN0375 * v408, v398, this.Yc(v401 - 3), vF10.cd(this.qc[v401 - 4], this.qc[v401 - 2]));
                this.qc[v401 - 2].Sc(v383 * v402 + v382 * v403 + v381 * v404, v383 * v406 + v382 * v407 + v381 * v408, v398, this.Yc(v401 - 2), vF10.cd(this.qc[v401 - 3], this.qc[v401 - 1]));
                this.qc[v401 - 1].Sc(v404, v408, v398, this.Yc(v401 - 1), vF10.cd(this.qc[v401 - 2], this.qc[v401 - 1]));
              } else {
                this.qc[v401 - 5].Uc();
                this.qc[v401 - 4].Uc();
                this.qc[v401 - 3].Uc();
                this.qc[v401 - 2].Uc();
                this.qc[v401 - 1].Uc();
              }
              if (this.pc === 0 && vV401 > 0) {
                this.nc.addChild(this.oc);
              }
              if (this.pc > 0 && vV401 === 0) {
                vO42.U(this.oc);
              }
              while (this.pc < vV401) {
                this.nc.addChild(this.qc[this.pc].Cc.Qc());
                this.nc.addChild(this.qc[this.pc].Dc.Qc());
                this.pc += 1;
              }
              while (this.pc > vV401) {
                this.pc -= 1;
                this.qc[this.pc].Dc.Rc();
                this.qc[this.pc].Cc.Rc();
              }
              var v412 = p604.dd[vO40.fd.ed];
              if (this.qc[0].gd() && v412 && v412.hd) {
                this.oc.Vc(p604, v398, p605, p606);
              } else {
                this.oc.Mc();
              }
              var v413 = p604.dd[vO40.fd.jd];
              if (this.qc[0].gd() && v413 && v413.hd) {
                this.oc.Wc(p604, v398, p605, p606);
              } else {
                this.oc.Oc();
              }
            };
            var vF10 = function () {
              function f167(p608, p609) {
                this.Cc = p608;
                this.Cc.kd(false);
                this.Dc = p609;
                this.Dc.kd(false);
                this.ev = null;
              }
              f167.prototype.Sc = function (p610, p611, p612, p613, p614) {
                this.Cc.kd(true);
                this.Cc.ld(p610, p611);
                this.Cc.Tc(p612);
                this.Cc.md(p614);
                this.Dc.kd(true);
                this.Dc.ld(p610, p611);
                this.Dc.Tc(p613);
                this.Dc.md(p614);
              };
              f167.prototype.Uc = function () {
                this.Cc.kd(false);
                this.Dc.kd(false);
              };
              f167.prototype.gd = function () {
                return this.Cc.gd();
              };
              f167.cd = function (p615, p616) {
                return Math.atan2(p615.Cc.xc.position.y - p616.Cc.xc.position.y, p615.Cc.xc.position.x - p616.Cc.xc.position.x);
              };
              return f167;
            }();
            return f166;
          }();
          vO40.fd = function () {
            function f168(p617) {
              this.nd = p617;
              this.hd = false;
              this.od = 1;
            }
            f168.jd = 0;
            f168.pd = 1;
            f168.ed = 2;
            f168.qd = 6;
            f168.rd = 3;
            f168.sd = 4;
            f168.td = 5;
            return f168;
          }();
          vO40.Ab = function () {
            function f169(p618, p619) {
              this.ud = p618;
              this.vd = p619;
            }
            f169.wd = new f169({}, vO40.Ga.Ca());
            f169.prototype.Jb = function () {
              return this.ud.revision;
            };
            f169.prototype.Yb = function () {
              vO34.Jb();
              return this.ud;
            };
            f169.prototype.Ub = function () {
              return this.vd;
            };
            return f169;
          }();
          vO40.Mb = function () {
            function f170(p620) {
              this.xd = function () {
                ++f170.yd;
                return function (p621, p622) {};
              }();
              this.zd = p620;
              this.Ad = null;
              this.Bd = null;
              this.Cd = null;
              this.Dd = null;
              this.Ed = null;
              this.Fd = false;
              this.Gd = false;
              this.Hd = false;
            }
            f170.Id = {
              Jd: "0x0",
              Kd: "0x1",
              Ld: "0x2",
              Md: "0x3",
              Nd: "0x4"
            };
            f170.yd = 100000;
            f170.Od = new vO40._b.cc().ec(f170.Id.Jd, 1).ec(f170.Id.Kd, 10).ec(f170.Id.Ld, 50).ec(f170.Id.Md, 15).ec(f170.Id.Nd, 5).hc();
            f170.prototype.Rb = function (p623) {
              this.Ad = p623;
            };
            f170.prototype.Qb = function (p624) {
              this.Bd = p624;
            };
            f170.prototype.Ob = function (p625) {
              this.Cd = p625;
            };
            f170.prototype.Pb = function (p626) {
              this.Dd = p626;
            };
            f170.prototype.Nb = function (p627) {
              this.Ed = p627;
            };
            f170.prototype.Kb = function () {
              return this.Hd;
            };
            f170.prototype.Lb = function () {
              this.Fd = true;
            };
            f170.prototype.Vb = function () {
              if (!this.Gd) {
                this.Gd = true;
                if (this.Fd) {
                  this.Pd();
                  return;
                }
                this.Qd();
              }
            };
            f170.prototype.Qd = function () {
              function f171(p628) {
                var v414 = f170.Id.Jd;
                vThis44.Rd(v414, f170.Od.bc(v414).lc(p628));
              }
              var vThis44 = this;
              if (this.Fd) {
                this.Pd();
                return;
              }
              $.ajax({
                type: "GET",
                url: vO42.a.c + "/dynamic/assets/revision.json",
                xhrFields: {
                  onprogress: function f172(p629) {
                    if (p629.lengthComputable) {
                      f171(p629.loaded / p629.total);
                    }
                  }
                }
              }).fail(function () {
                vThis44.Sd(new Error());
              }).done(function (p630) {
                if (p630 <= vThis44.zd) {
                  vThis44.Td();
                  return;
                }
                vThis44.Ud();
              });
            };
            f170.prototype.Ud = f55(f23().mark(function f173() {
              var v415;
              var v416;
              var v417;
              return f23().wrap(function f174(p631) {
                while (1) {
                  switch (p631.prev = p631.next) {
                    case 0:
                      v415 = function f175(p632) {
                        var v418 = f170.Id.Kd;
                        v416.Rd(v418, f170.Od.bc(v418).lc(p632));
                      };
                      v416 = this;
                      if (!this.Fd) {
                        p631.next = 4;
                        break;
                      }
                      return p631.abrupt("return", void this.Pd());
                    case 4:
                      p631.next = 6;
                      return fetch(URLSERV_WORMWORLD + "/version", {
                        mode: "no-cors"
                      }).then(function () {
                        var vF556 = f55(f23().mark(function f176(p633) {
                          return f23().wrap(function f177(p634) {
                            while (1) {
                              switch (p634.prev = p634.next) {
                                case 0:
                                  return p634.abrupt("return", p633.text());
                                case 1:
                                case "end":
                                  return p634.stop();
                              }
                            }
                          }, f176);
                        }));
                        return function (p635) {
                          return vF556.apply(this, arguments);
                        };
                      }()).catch(function () {
                        return 0;
                      });
                    case 6:
                      v417 = p631.sent;
                      localStorage.setItem("wwc_version", v417);
                      if (v190 != v417) {
                        $.ajax({
                          type: "GET",
                          url: vO42.a.c + "/dynamic/assets/registry.json",
                          xhrFields: {
                            onprogress: function f178(p636) {
                              if (p636.lengthComputable) {
                                v415(p636.loaded / p636.total);
                              }
                            }
                          }
                        }).fail(function () {
                          v416.Sd(new Error());
                        }).done(function () {
                          var vF557 = f55(f23().mark(function f179(p637) {
                            return f23().wrap(function f180(p638) {
                              while (1) {
                                switch (p638.prev = p638.next) {
                                  case 0:
                                    p638.next = 2;
                                    return vO34.registry(p637);
                                  case 2:
                                    p637 = p638.sent;
                                    localStorage.setItem("wwc_config", JSON.stringify(p637));
                                    v416.Vd(p637, f170);
                                  case 5:
                                  case "end":
                                    return p638.stop();
                                }
                              }
                            }, f179);
                          }));
                          return function (p639) {
                            return vF557.apply(this, arguments);
                          };
                        }());
                      } else {
                        try {
                          v192 = JSON.parse(v192);
                          v415(1);
                          v416.Vd(v192, f170);
                        } catch (e26) {
                          localStorage.removeItem("wwc_version");
                          localStorage.removeItem("wwc_config");
                          window.location.reload();
                        }
                      }
                    case 9:
                    case "end":
                      return p631.stop();
                  }
                }
              }, f173, this);
            }));
            f170.prototype.Vd = vO34.Vd || function (p640) {
              function f181(p641) {
                var v419 = f170.Id.Ld;
                vThis45.Rd(v419, f170.Od.bc(v419).lc(p641));
              }
              var vThis45 = this;
              if (this.Fd) {
                this.Pd();
                return;
              }
              var vA13 = [];
              var vA14 = [];
              var vLN048 = 0;
              for (var v420 in p640.textureDict) {
                if (p640.textureDict.hasOwnProperty(v420)) {
                  var v421 = p640.textureDict[v420];
                  var v422 = vO42.a.c + v421.relativePath;
                  var v423 = v421.fileSize;
                  var v424 = v421.sha256;
                  var v425 = new f170.Wd(v420, v422, v423, v424);
                  vA13.push(v425);
                  vA14.push(v425);
                  vLN048 += v423;
                }
              }
              var v426;
              var vLN049 = 0;
              var v_0x2c3962 = function f182(p642) {
                for (var vLN050 = 0; vLN050 < vA14.length; vLN050++) {
                  try {
                    window.URL.revokeObjectURL(vA14[vLN050].Xd);
                  } catch (e27) {}
                }
                vThis45.Sd(p642);
              };
              var v_0xc5b826 = function f183(p643) {
                var v427 = Math.floor(v426.Yd * p643);
                f181((vLN049 + v427) / vLN048);
              };
              var v_0x23e229 = function f184(p644) {
                var v428 = new Blob([p644]);
                v426.Xd = window.URL.createObjectURL(v428);
                vLN049 += v426.Yd;
                v_0x557fed();
              };
              var v_0x557fed = function f185() {
                if (vLN051 < vA14.length) {
                  v426 = vA14[vLN051++];
                  vThis45.Zd(v426, v_0x2c3962, v_0x23e229, v_0xc5b826);
                  return;
                }
                setTimeout(function () {
                  return vThis45.$d(p640, vA13);
                }, 0);
              };
              var vLN051 = 0;
              v_0x557fed();
            };
            f170.prototype.Zd = vO34.Zd || function (p645, p646, p647, p648) {
              $.ajax({
                type: "GET",
                url: p645._d,
                xhrFields: {
                  responseType: "arraybuffer",
                  onprogress: function f186(p649) {
                    if (p649.lengthComputable) {
                      p648(p649.loaded / p649.total);
                    }
                  }
                }
              }).fail(function () {
                p646(new Error());
              }).done(function (p650) {
                p647(p650);
              });
            };
            f170.prototype.$d = vO34.$d || function (p651, p652) {
              function f187(p653) {
                var v429 = f170.Id.Md;
                vThis46.Rd(v429, f170.Od.bc(v429).lc(p653));
              }
              var vThis46 = this;
              if (this.Fd) {
                this.Pd();
                return;
              }
              var v430;
              var v431;
              var vO55 = {};
              var v_0xee8abb = function f188() {
                for (var vLN052 = 0; vLN052 < p652.length; vLN052++) {
                  try {
                    window.URL.revokeObjectURL(p652[vLN052].Xd);
                  } catch (e28) {}
                }
                vThis46.Sd(new Error());
              };
              var v_0x56b924 = function f189() {
                f187(vLN053 / p652.length);
                vO55[v430.ae] = new vO40.be(v430.Xd, v431);
                v_0x434abe();
              };
              var v_0x434abe = function f190() {
                if (vLN053 < p652.length) {
                  v430 = p652[vLN053++];
                  v431 = PIXI.BaseTexture.from(v430.Xd);
                  v431.on("error", v_0xee8abb);
                  v431.on("loaded", v_0x56b924);
                  return;
                }
                setTimeout(function () {
                  return vThis46.ce(p651, vO55);
                }, 0);
              };
              var vLN053 = 0;
              v_0x434abe();
            };
            f170.prototype.ce = function (p654, p655) {
              function f191(p656) {
                var v432 = f170.Id.Nd;
                vThis47.Rd(v432, f170.Od.bc(v432).lc(p656));
              }
              var vThis47 = this;
              var vO56 = {};
              var vLN054 = 0;
              var v433 = Object.values(p654.regionDict).length;
              vO42._(p654.regionDict, function (p657, p658) {
                var v434 = null;
                try {
                  var v435 = null;
                  if (p655[p658.texture].ev) {
                    v435 = p655[p658.texture].ev;
                  }
                  var v436 = p658.texture + ":" + p657;
                  v434 = vO40.la.Da(v436, p655[p658.texture].oa, p658, v435);
                  vO56[p657] = v434;
                  if (++vLN054 % 10 == 0) {
                    f191(vLN054 / v433);
                  }
                } catch (e29) {}
              });
              var v437 = Object.values(p655).map(function (p659) {
                return p659.oa;
              });
              var v438 = Object.values(vO56);
              var v439 = new vO40.Ab(p654, vO40.Ga.fb(p654, vO56, v437, v438));
              setTimeout(function () {
                return vThis47.de(v439);
              }, 0);
            };
            f170.Wd = function () {
              function f192(p660, p661, p662, p663) {
                this.ae = p660;
                this._d = p661;
                this.Yd = p662;
                this.ee = p663;
                this.Xd = "";
              }
              return f192;
            }();
            f170.prototype.de = function (p664) {
              if (this.Hd) {
                p664.Ub().Fa();
                return;
              }
              this.Hd = true;
              var vThis48 = this;
              setTimeout(function () {
                return vThis48.Ad(p664);
              }, 0);
            };
            f170.prototype.Td = function () {
              if (!this.Hd) {
                this.Hd = true;
                var vThis49 = this;
                setTimeout(function () {
                  return vThis49.Bd();
                }, 0);
              }
            };
            f170.prototype.Sd = function (p665) {
              if (!this.Hd) {
                this.Hd = true;
                var vThis50 = this;
                setTimeout(function () {
                  return vThis50.Cd(p665);
                }, 0);
              }
            };
            f170.prototype.Pd = function () {
              if (!this.Hd) {
                this.Hd = true;
                var vThis51 = this;
                setTimeout(function () {
                  return vThis51.Dd();
                }, 0);
              }
            };
            f170.prototype.Rd = function (p666, p667) {
              if (!this.Hd && !this.Fd) {
                var vThis52 = this;
                return vThis52.Ed(p666, p667);
              }
            };
            return f170;
          }();
          vO40.fe = function () {
            return {};
          }();
          vO40.ge = function () {
            function f193() {
              this.he = vO40.ge.je.ie;
              this.ke = false;
              this.le = false;
              this.me = null;
              this.ne = null;
            }
            f193.prototype.ha = function () {};
            f193.prototype.oe = function (p668) {
              this.le = p668;
            };
            f193.prototype.pe = function (p669) {
              this.he = p669;
              this.qe();
            };
            f193.prototype.re = function (p670) {
              this.ke = p670;
              this.qe();
            };
            f193.prototype.qe = function () {};
            f193.prototype.se = function (p671, p672) {
              if (!f148().Lc.Wb()) {
                return null;
              }
              var v440 = p671[p672];
              if (v440 == null || v440.length === 0) {
                return null;
              } else {
                return v440[Math.floor(Math.random() * v440.length)].cloneNode();
              }
            };
            f193.prototype.te = function (p673, p674, p675) {
              if (this.le && !(p675 <= 0)) {
                var v441 = this.se(p673, p674);
                if (v441 != null) {
                  v441.volume = Math.min(1, p675);
                  v441.play();
                }
              }
            };
            f193.prototype.ue = function (p676, p677) {
              if (this.he.ve) {
                this.te(app.xe.we, p676, p677);
              }
            };
            f193.prototype.ye = function (p678, p679) {
              if (this.he.ze) {
                this.te(app.xe.Ae, p678, p679);
              }
            };
            f193.prototype.Be = function () {};
            f193.prototype.Ce = function () {};
            f193.prototype.De = function () {};
            f193.prototype.Ee = function () {};
            f193.prototype.Fe = function () {};
            f193.prototype.Ge = function () {};
            f193.prototype.He = function (p680, p681, p682) {};
            f193.prototype.Ie = function (p683) {};
            f193.prototype.Je = function (p684) {};
            f193.prototype.Ke = function (p685) {};
            f193.prototype.Le = function (p686) {};
            f193.prototype.Me = function (p687) {};
            f193.prototype.Ne = function (p688) {};
            f193.prototype.Oe = function (p689) {};
            f193.prototype.Pe = function (p690) {};
            f193.prototype.Qe = function (p691) {};
            f193.prototype.Re = function (p692) {};
            f193.prototype.Se = function (p693) {};
            f193.prototype.Te = function (p694) {};
            f193.prototype.Ue = function (p695) {};
            f193.prototype.Ve = function (p696) {};
            f193.prototype.We = function (p697, p698) {};
            f193.prototype.Xe = function (p699) {};
            f193.prototype.Ye = function (p700, p701, p702) {};
            f193.je = {
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
            return f193;
          }();
          vO40.GameView = function () {
            function f194(p703) {
              var vF148 = f148();
              this.ef = p703;
              this.Eb = p703.get()[0];
              this.ff = 1;
              this.gf = 1;
              this.hf = null;
              this.lf = new vF7.Renderer({
                view: p703.get()[0],
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
            var vLN055 = 0;
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
            f194.prototype.ha = function () {
              var vF1482 = f148();
              this.lf.backgroundColor = vLN055;
              this.vf = new Array(vA15.length);
              for (var vLN056 = 0; vLN056 < this.vf.length; vLN056++) {
                this.vf[vLN056] = new vF7.Sprite();
                this.vf[vLN056].texture = vF1482.xe.Bf;
                this.vf[vLN056].anchor.set(0.5);
                this.nf.addChild(this.vf[vLN056]);
              }
              this.wf = new Array(vF1482.xe.Cf.length);
              for (var vLN057 = 0; vLN057 < this.wf.length; vLN057++) {
                this.wf[vLN057] = new vF7.Sprite();
                this.wf[vLN057].texture = vF1482.xe.Cf[vLN057];
                this.wf[vLN057].anchor.set(0.5);
                this.uf.addChild(this.wf[vLN057]);
              }
              this.xf = new Array(this.wf.length);
              for (var vLN058 = 0; vLN058 < this.xf.length; vLN058++) {
                var vA16 = [0.6, 1, 0.5];
                this.xf[vLN058] = {
                  Df: vO42.V(0, vO41.F),
                  Ef: vO42.V(0.09, 0.16) * 0.66,
                  Ff: vO42.V(0, 1),
                  Gf: vO42.V(0, 1),
                  Hf: 0,
                  yf: vA16[0],
                  zf: vA16[1],
                  Af: vA16[2]
                };
              }
              this.If();
              this.Jf();
            };
            f194.hd = false;
            f194.Kf = function (p704) {
              f194.hd = p704;
            };
            f194.prototype.Lf = function (p705) {
              this.hf.Kf(p705);
            };
            f194.prototype.Jf = function () {
              var v442 = window.devicePixelRatio ? window.devicePixelRatio : 1;
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              this.lf.resize(this.ff, this.gf);
              this.lf.resolution = v442;
              this.Eb.width = v442 * this.ff;
              this.Eb.height = v442 * this.gf;
              var v443 = Math.max(this.ff, this.gf) * 0.6;
              for (var vLN059 = 0; vLN059 < this.vf.length; vLN059++) {
                this.vf[vLN059].width = v443;
                this.vf[vLN059].height = v443;
              }
            };
            f194.prototype.Nf = function (p706, p707) {
              if (f194.hd) {
                var v444 = p706 / 1000;
                var v445 = p707 / 1000;
                var v446 = this.ef.width();
                var v447 = this.ef.height();
                for (var vLN060 = 0; vLN060 < this.vf.length; vLN060++) {
                  var v448 = vA15[vLN060 % vA15.length];
                  var v449 = this.vf[vLN060];
                  var v450 = vLN060 / this.vf.length * vO41.G;
                  var v451 = v444 * 0.5 * 0.12;
                  var v452 = Math.cos((v451 + v450) * 3) * Math.cos(v450) - Math.sin((v451 + v450) * 5) * Math.sin(v450);
                  var v453 = Math.cos((v451 + v450) * 3) * Math.sin(v450) + Math.sin((v451 + v450) * 5) * Math.cos(v450);
                  var v454 = 0.2 + Math.cos(v450 + v444 * 0.075) * 0.2;
                  var v455 = v448.Af * 255 << 16 & 16711680 | v448.zf * 255 << 8 & 65280 | v448.yf * 255 & 255;
                  v449.tint = v455;
                  v449.alpha = v454;
                  v449.position.set(v446 * (0.2 + (v452 + 1) * 0.5 * 0.6), v447 * (0.1 + (v453 + 1) * 0.5 * 0.8));
                }
                var v456 = Math.max(v446, v447) * 0.05;
                for (var vLN061 = 0; vLN061 < this.wf.length; vLN061++) {
                  var v457 = this.xf[vLN061];
                  var v458 = this.wf[vLN061];
                  var v459 = vO41.F * vLN061 / this.wf.length + v457.Df;
                  v457.Gf += v457.Ef * v445;
                  if (v457.Gf > 1.1) {
                    v457.Df = Math.random() * vO41.F;
                    v457.Ef = (0.09 + Math.random() * 0.07) * 0.66;
                    v457.Ff = 0.15 + Math.random() * 0.7;
                    v457.Gf = -0.1;
                  }
                  var v460 = v457.Ff + Math.sin(Math.sin(v459 + v444 * 0.48) * 6) * 0.03;
                  var v461 = v457.Gf;
                  var v462 = (0.4 + (1 + Math.sin(v459 + v444 * 0.12)) * 0.5 * 1.2) * 0.5;
                  var v463 = v459 + v457.Ef * 2 * v444;
                  var v464 = vO42.P(Math.sin(Math.PI * v461), 0.1, 1);
                  var v465 = v457.zf * 255 << 8 & 65280 | v457.Af * 255 << 16 & 16711680 | v457.yf * 255 & 255;
                  v458.alpha = v464;
                  v458.tint = v465;
                  v458.position.set(v446 * v460, v447 * v461);
                  v458.rotation = v463;
                  var v466 = v458.texture.width / v458.texture.height;
                  v458.width = v462 * v456;
                  v458.height = v462 * v456 * v466;
                }
                this.Of();
                this.lf.render(this.mf, null, true);
              }
            };
            f194.prototype.Pf = function () {
              var vF1483 = f148();
              if (vF1483.Lc.Wb()) {
                var v467 = vF1483.Lc.Ub().gb(vLN52);
                for (var vLN062 = 0; vLN062 < vLN52; vLN062++) {
                  this.hf.Qf(vLN062, v467[vLN062]);
                }
              } else {
                var v468 = vO42.V(0, 1);
                for (var vLN063 = 0; vLN063 < vLN52; vLN063++) {
                  var v469 = (v468 + vLN063 / vLN52) % 1;
                  var v470 = vO42.Y(Math.floor(v469 * 360), 0.85, 0.5);
                  var v471 = v470[0] * 255 & 255 | v470[1] * 255 << 8 & 65280 | v470[2] * 255 << 16 & 16711680;
                  var v472 = "000000" + v471.toString(16);
                  v472 = "#" + v472.substring(v472.length - 6, v472.length);
                  this.hf.Rf(vLN063, v472);
                }
              }
            };
            f194.prototype.If = function () {
              var v473 = Math.min(this.ff, this.gf);
              var v474 = Date.now();
              for (var vLN064 = 0; vLN064 < vLN52; vLN064++) {
                var v475 = vLN064 / vLN52 * vO41.F;
                var v_0x226d92 = v_0x6ab4d8(v474, 0.12, v475);
                v_0x226d92.qa = v_0x226d92.qa * 4;
                v_0x226d92.ra = v_0x226d92.ra * 4;
                this.hf.Sf(vLN064, (this.ff + v_0x226d92.qa * v473) * 0.5, (this.gf + v_0x226d92.ra * v473) * 0.5);
              }
            };
            f194.prototype.Of = function () {
              var v476 = Math.min(this.ff, this.gf);
              var v477 = Date.now();
              for (var vLN065 = 0; vLN065 < vLN52; vLN065++) {
                var v478 = vLN065 / vLN52 * vO41.F;
                var v_0x226d922 = v_0x6ab4d8(v477, 0.12, v478);
                this.hf.Tf(vLN065, (this.ff + v_0x226d922.qa * v476) * 0.5, (this.gf + v_0x226d922.ra * v476) * 0.5);
              }
              this.hf.Uf();
            };
            var v_0x6ab4d8 = function f195(p708, p709, p710) {
              var v479 = p708 / 1000;
              return {
                qa: (Math.cos(p709 * v479 + p710) + Math.cos(p709 * -32 * v479 + p710) * 0.4 + Math.cos(p709 * 7 * v479 + p710) * 0.7) * 0.8,
                ra: (Math.sin(p709 * v479 + p710) + Math.sin(p709 * -32 * v479 + p710) * 0.4 + Math.sin(p709 * 7 * v479 + p710) * 0.7) * 0.8
              };
            };
            return f194;
          }();
          vO40.Vf = function () {
            function f196() {}
            f196.Wf = "consent_state_2";
            f196.Xf = "showPlayerNames";
            f196.Yf = "musicEnabled";
            f196.Zf = "sfxEnabled";
            f196.$f = "account_type";
            f196._f = "gameMode";
            f196.ag = "nickname";
            f196.bg = "skin";
            f196.cg = "prerollCount";
            f196.dg = "shared";
            f196.eg = function (p711, p712, p713) {
              var v480 = new Date();
              v480.setTime(v480.getTime() + p713 * 86400000);
              var v481 = "expires=" + v480.toUTCString();
              document.cookie = p711 + "=" + p712 + "; " + v481;
            };
            f196.fg = function (p714) {
              var v482 = p714 + "=";
              for (var v483 = document.cookie.split(";"), vLN066 = 0; vLN066 < v483.length; vLN066++) {
                for (var v484 = v483[vLN066]; v484.charAt(0) == " ";) {
                  v484 = v484.substring(1);
                }
                if (v484.indexOf(v482) == 0) {
                  if (p714 == "nickname=") {
                    v484.substring(v482.length, v484.length).substring(0, vLN18);
                  }
                  return v484.substring(v482.length, v484.length);
                }
              }
              return "";
            };
            return f196;
          }();
          vO41.gg = function () {
            function f197(p715, p716, p717) {
              var v485 = false;
              for (var v486 = p717.length, vLN067 = 0, v487 = v486 - 1; vLN067 < v486; v487 = vLN067++) {
                if (p717[vLN067][1] > p716 != p717[v487][1] > p716 && p715 < (p717[v487][0] - p717[vLN067][0]) * (p716 - p717[vLN067][1]) / (p717[v487][1] - p717[vLN067][1]) + p717[vLN067][0]) {
                  v485 = !v485;
                }
              }
              return v485;
            }
            var vA17 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
            return {
              hg: function f198(p718, p719) {
                return f197(p719, p718, vA17);
              }
            };
          }();
          vO40.ig = function () {
            function f199(p720) {
              var vUndefined5 = undefined;
              vUndefined5 = p720 > 0 ? "+" + Math.floor(p720) : p720 < 0 ? "-" + Math.floor(p720) : "0";
              var v488 = Math.min(1.5, 0.5 + p720 / 600);
              var vUndefined6 = undefined;
              if (p720 < 1) {
                vUndefined6 = "0xFFFFFF";
              } else if (p720 < 30) {
                var v489 = (p720 - 1) / 29;
                vUndefined6 = f201((1 - v489) * 1 + v489 * 0.96, (1 - v489) * 1 + v489 * 0.82, (1 - v489) * 1 + v489 * 0);
              } else if (p720 < 300) {
                var v490 = (p720 - 30) / 270;
                vUndefined6 = f201((1 - v490) * 0.96 + v490 * 0.93, (1 - v490) * 0.82 + v490 * 0.34, (1 - v490) * 0 + v490 * 0.25);
              } else if (p720 < 700) {
                var v491 = (p720 - 300) / 400;
                vUndefined6 = f201((1 - v491) * 0.93 + v491 * 0.98, (1 - v491) * 0.34 + v491 * 0, (1 - v491) * 0.25 + v491 * 0.98);
              } else {
                vUndefined6 = f201(0.98, 0, 0.98);
              }
              var v492 = Math.random();
              var v493 = 1 + Math.random() * 0.5;
              return new vF11(vUndefined5, vUndefined6, true, 0.5, v488, v492, v493);
            }
            function f200(p721, p722) {
              var vUndefined7 = undefined;
              var vUndefined8 = undefined;
              if (p722) {
                vUndefined7 = 1.3;
                vUndefined8 = f201(0.93, 0.34, 0.25);
              } else {
                vUndefined7 = 1.1;
                vUndefined8 = f201(0.96, 0.82, 0);
              }
              return new vF11(p721, vUndefined8, true, 0.5, vUndefined7, 0.5, 0.7);
            }
            function f201(p723, p724, p725) {
              return ((p723 * 255 & 255) << 16) + ((p724 * 255 & 255) << 8) + (p725 * 255 & 255);
            }
            var v494 = vO42.M(vF7.Container, function () {
              vF7.Container.call(this);
              this.jg = [];
              this.kg = 0;
            });
            v494.prototype.lg = function (p726) {
              this.kg += p726;
              if (this.kg >= 1) {
                var v495 = Math.floor(this.kg);
                this.kg -= v495;
                var vF199 = f199(v495);
                this.addChild(vF199);
                this.jg.push(vF199);
              }
            };
            v494.prototype.mg = function (p727) {
              _wwc.fnSetCounts("count", p727);
              if (p727) {
                if (!(window.bbs.headshot % 10)) {
                  vO27.fxdo("shaokahn");
                } else {
                  vO27.fxdo("headshot");
                }
                var vF200 = f200(vO42.H("index.game.floating.headshot"), true);
                this.addChild(vF200);
                this.jg.push(vF200);
                _wwcio.update("headshot");
              } else {
                var vF2002 = f200(vO42.H("index.game.floating.wellDone"), false);
                this.addChild(vF2002);
                this.jg.push(vF2002);
              }
            };
            v494.prototype.Uf = function (p728, p729) {
              var v496 = f148().og.af.ng;
              var v497 = v496.lf.width / v496.lf.resolution;
              var v498 = v496.lf.height / v496.lf.resolution;
              for (var vLN068 = 0; vLN068 < this.jg.length;) {
                var v499 = this.jg[vLN068];
                v499.pg = v499.pg + p729 / 2000 * v499.qg;
                v499.rg = v499.rg + p729 / 2000 * v499.sg;
                v499.alpha = Math.sin(Math.PI * v499.rg) * 0.5;
                v499.scale.set(v499.pg);
                v499.position.x = v497 * (0.25 + v499.tg * 0.5);
                v499.position.y = v499.ug ? v498 * (1 - (1 + v499.rg) * 0.5) : v498 * (1 - (0 + v499.rg) * 0.5);
                if (v499.rg > 1) {
                  vO42.U(v499);
                  this.jg.splice(vLN068, 1);
                  vLN068--;
                }
                vLN068++;
              }
            };
            var vF11 = function () {
              return vO42.M(vF7.Text, function (p730, p731, p732, p733, p734, p735, p736) {
                vF7.Text.call(this, p730, {
                  fill: p731,
                  fontFamily: "PTSans",
                  fontSize: 36
                });
                this.anchor.set(0.5);
                this.ug = p732;
                this.pg = p733;
                this.qg = p734;
                this.tg = p735;
                this.rg = 0;
                this.sg = p736;
              });
            }();
            return v494;
          }();
          vO40.be = function () {
            function f202(p737, p738) {
              this.Xd = p737;
              this.oa = p738;
            }
            return f202;
          }();
          vO40.Ac = {
            vg: 0,
            zc: 16
          };
          vO40.GameParams = function () {
            function f203() {
              this.xg = vO40.Ac.vg;
              this.yg = 0;
              this.zg = 500;
              this.Ag = 4000;
              this.Bg = 7000;
            }
            f203.Cg = 0;
            f203.prototype.Dg = function () {
              return this.zg * 1.02;
            };
            return f203;
          }();
          vO40.Eg = function () {
            function f204(p739) {
              this.ef = p739;
              this.Eb = p739.get()[0];
              this.lf = new vF7.Renderer({
                view: p739.get()[0],
                backgroundColor: vLN069,
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
              this.Lg = vO34.Lg(vO40);
              this.Ng = new vF7.Graphics();
              this.Og = new vF7.Container();
              this.Pg = new vF7.Container();
              this.Pg.sortableChildren = true;
              this.Qg = new vF7.Container();
              this.Rg = new vF7.Container();
              this.Rg.sortableChildren = true;
              this.Sg = new vF7.Container();
              this.Tg = new vF12();
              this.Ug = new vF13();
              this.Vg = new vF15();
              this.Wg = new vO40.ig();
              this.Xg = new vF7.Sprite();
              this.Yg = {
                x: 0,
                y: 0
              };
              this.ha();
            }
            var vLN069 = 0;
            f204.prototype.ha = function () {
              this.lf.backgroundColor = vLN069;
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
              this.Xg.texture = f148().xe.Zg;
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
            f204.prototype.Jf = function () {
              var v500 = this.ef.width();
              var v501 = this.ef.height();
              var v502 = window.bbs.display.custom ? window.bbs.display.clock.x * v500 : 0;
              var v503 = window.bbs.display.custom ? window.bbs.display.clock.y * v501 : 0;
              var v504 = window.bbs.display.custom ? window.bbs.display.top.x * v500 : v500 - 255;
              var v505 = window.bbs.display.custom ? window.bbs.display.top.y * screen.height : 1;
              var v506 = window.bbs.display.clock.rc ? vO38[window.bbs.display.clock.rc] : 0;
              var v507 = window.bbs.display.top.rt ? vO38[window.bbs.display.top.rt] : 0;
              var v508 = window.devicePixelRatio ? window.devicePixelRatio : 1;
              var v509 = v508 * v500;
              var v510 = v508 * v501;
              var v511 = Math.min(Math.min(v500, v501), Math.max(v500, v501) * 0.625);
              this.lf.resize(v500, v501);
              this.lf.resolution = v508;
              this.Eb.width = v509;
              this.Eb.height = v510;
              this.Jg = v511;
              this.Xg.position.set(v500 / 2, v501 / 2);
              this.Xg.width = v500;
              this.Xg.height = v501;
              this.Tg.position.set(60 + v502, 60 + v503 + (v506 ? this.Tg.height / 4 : 0));
              this.Ug.position.set(110, 10);
              this.Vg.position.set(v504, v505 + (v507 ? this.Vg.height : 0));
              this.Tg.rotation = v506;
              this.Vg.rotation = v507;
            };
            f204.prototype.Uf = function (p740, p741) {
              var vVO33 = vO33;
              this.Ig = 15;
              this.Og.removeChildren();
              this.Pg.removeChildren();
              this.Qg.removeChildren();
              this.Sg.removeChildren();
              this.Lg.$g(p740.xg === vO40.Ac.vg ? vVO33.xe._g : vVO33.xe.ah);
              var v512 = this.Ng;
              v512.clear();
              v512.lineStyle(0.2, 16711680, 0.6);
              v512.drawCircle(0, 0, p740.zg);
              v512.endFill();
              this.Vg.bh = p741;
              this.Sg.visible = p741;
            };
            f204.prototype.Nf = function (p742, p743) {
              if (this.lf.width <= 5) {
                return;
              }
              var vVO332 = vO33;
              var v513 = vVO332.dh.ch;
              var v514 = this.lf.width / this.lf.resolution;
              var v515 = this.lf.height / this.lf.resolution;
              this.Ig = vO34.$F.Q(this.Ig, vVO332.dh.eh, p743, 0.002);
              var v516 = this.Jg / (this.Ig * vLN12);
              var v517 = vVO332.dh.ch.dd[vO34.$C.fd.qd];
              var v518 = v517 != null && v517.hd;
              this.Kg = vO34.$F.P(this.Kg + p743 / 1000 * ((v518 ? 1 : 0) * 0.1 - this.Kg), 0, 1);
              this.Xg.alpha = this.Kg;
              this.Fg = (this.Fg + p743 * 0.01) % 360;
              this.Gg = Math.sin(p742 / 1200 * 2 * Math.PI);
              var v519 = v513.fh();
              this.Yg.x = vO34.$F.R(this.Yg.x, v519.x, p743, 0.5, 33.333);
              this.Yg.y = vO34.$F.R(this.Yg.y, v519.y, p743, 0.5, 33.333);
              var v520 = v514 / v516 / 2;
              var v521 = v515 / v516 / 2;
              vVO332.dh.gh(this.Yg.x - v520 * 1.3, this.Yg.x + v520 * 1.3, this.Yg.y - v521 * 1.3, this.Yg.y + v521 * 1.3);
              if (!bbs.backgroundIsCustom) {
                this.Lg.Uf(this.Yg.x, this.Yg.y, v520 * 2, v521 * 2);
              }
              var v522 = vVO332.dh.hh.zg;
              this.mf.scale.set(v516, v516);
              this.mf.position.set(v514 / 2 - this.Yg.x * v516, v515 / 2 - this.Yg.y * v516);
              var v523 = Math.hypot(v519.x, v519.y);
              if (v523 > v522 - 10) {
                this.Hg = vO34.$F.P(1 + (v523 - v522) / 10, 0, 1);
                var v524 = Math.cos(this.Fg * vO34.$V.F / 360) * (1 - this.Hg) + this.Hg * 1;
                var v525 = Math.sin(this.Fg * vO34.$V.F / 360) * (1 - this.Hg);
                var v526 = (Math.atan2(v525, v524) + vO34.$V.F) % vO34.$V.F * 360 / vO34.$V.F;
                var v527 = this.Hg * (0.5 + this.Gg * 0.5);
                var v528 = vO34.$F.Y(Math.floor(v526), 1, 0.75 - this.Hg * 0.25);
                this.Lg.Ec(v528[0], v528[1], v528[2], 0.1 + v527 * 0.2);
              } else {
                this.Hg = 0;
                var v529 = vO34.$F.Y(Math.floor(this.Fg), 1, 0.75);
                this.Lg.Ec(v529[0], v529[1], v529[2], 0.1);
              }
              for (var vLN070 = 0; vLN070 < this.Sg.children.length; vLN070++) {
                var v530 = this.Sg.children[vLN070];
                v530.position.set(v514 / 2 - (this.Yg.x - v530.ih.x) * v516, v515 / 2 - (this.Yg.y - v530.ih.y) * v516);
              }
              this.Tg.jh.position.x = v519.x / v522 * this.Tg.kh;
              this.Tg.jh.position.y = v519.y / v522 * this.Tg.kh;
              _wwcio.myLocation = this.Tg.jh;
              this.Ug.lh(p742);
              this.Wg.Uf(p742, p743);
              this.lf.render(this.mf, null, true);
              this.lf.render(this.Rg, null, false);
            };
            f204.prototype.mh = function (p744, p745) {
              p745.nh.Cc.Qc().zIndex = (p744 + 2147483648) / 4294967296 * 5000;
              this.Og.addChild(p745.nh.Dc.Qc());
              this.Pg.addChild(p745.nh.Cc.Qc());
            };
            f204.prototype.oh = function (p746, p747, p748) {
              p747.nc.zIndex = f148().dh.hh.yg ? 0 : 10 + (p746 + 32768) / 65536 * 5000;
              this.Qg.addChild(p747.nc);
              if (p746 != f148().dh.hh.yg) {
                this.Sg.addChild(p748);
              }
            };
            var vF12 = function () {
              return vO42.M(vF7.Container, function () {
                vF7.Container.call(this);
                this.kh = 40;
                this.qh = new vF7.Sprite();
                this.qh.anchor.set(0.5);
                this.qh.alpha = 0.5;
                var v531 = new vF7.Graphics();
                v531.beginFill("black", 0.4);
                v531.drawCircle(0, 0, this.kh);
                v531.endFill();
                v531.lineStyle(1, 16225317);
                v531.drawCircle(0, 0, this.kh);
                v531.moveTo(0, -this.kh);
                v531.lineTo(0, +this.kh);
                v531.moveTo(-this.kh, 0);
                v531.lineTo(+this.kh, 0);
                v531.endFill();
                if (bbs.display.customClock) {
                  v531 = new vF7.Sprite();
                  v531.texture = new vF7.Texture.from(bbs.display.customClock.file);
                  v531.width = this.kh * 2.75;
                  v531.height = this.kh * 2.75;
                  v531.anchor.set(0.5);
                }
                this.jh = new vF7.Graphics();
                this.jh.zIndex = 2;
                this.jh.alpha = 0.9;
                this.jh.beginFill(16711680);
                this.jh.drawCircle(0, 0, this.kh * 0.1);
                this.jh.endFill();
                this.jh.lineStyle(1, "black");
                this.addChild(v531);
                this.addChild(this.qh);
                this.addChild(this.jh);
                this.addChild(vO32.conteinerTeam);
              });
            }();
            var vF13 = function () {
              var v532 = vO42.M(vF7.Container, function () {
                vF7.Container.call(this);
                this.rh = {};
              });
              v532.prototype.lh = function (p749) {
                var v533 = 0.5 + Math.cos(vO41.F * (p749 / 1000 / 1.6)) * 0.5;
                for (var v534 in this.rh) {
                  var v535 = this.rh[v534];
                  var v536 = v535.sh;
                  v535.alpha = 1 - v536 + v536 * v533;
                }
              };
              v532.prototype.Uf = function (p750) {
                for (var v537 in this.rh) {
                  if (p750[v537] == null || !p750[v537].hd) {
                    vO42.U(this.rh[v537]);
                    delete this.rh[v537];
                  }
                }
                var vLN071 = 0;
                for (var v538 in p750) {
                  var v539 = p750[v538];
                  if (v539.hd) {
                    var v540 = this.rh[v538];
                    if (!v540) {
                      var v541 = f148().Lc.Ub().pb(v539.nd).ub;
                      v540 = new vF14();
                      v540.texture = v541.Ea();
                      v540.width = 40;
                      v540.height = 40;
                      this.rh[v538] = v540;
                      this.addChild(v540);
                    }
                    v540.sh = v539.od;
                    v540.position.x = vLN071;
                    vLN071 += 40;
                  }
                }
              };
              var vF14 = function () {
                return vO42.M(vF7.Sprite, function () {
                  vF7.Sprite.call(this);
                  this.sh = 0;
                });
              }();
              return v532;
            }();
            var vF15 = function () {
              var v542 = vO42.M(vF7.Container, function () {
                vF7.Container.call(this);
                this.bh = true;
                this.th = 12;
                this.uh = 9;
                this.jg = [];
                for (var vLN072 = 0; vLN072 < 14; vLN072++) {
                  this.vh();
                }
              });
              v542.prototype.Uf = function (p751) {
                var vF1484 = f148();
                var v543 = vF1484.dh.hh.xg === vO40.Ac.zc;
                var vLN073 = 0;
                var vLN074 = 0;
                if (vLN074 >= this.jg.length) {
                  this.vh();
                }
                this.jg[vLN074].wh(1, "white");
                this.jg[vLN074].xh("", vO42.H("index.game.leader.top10"), "(" + vF1484.dh.yh + " online)");
                this.jg[vLN074].position.y = vLN073;
                vLN073 += this.th;
                vLN074 += 1;
                if (p751.zh.length > 0) {
                  vLN073 += this.uh;
                }
                for (var vLN076 = 0; vLN076 < p751.zh.length; vLN076++) {
                  var v544 = p751.zh[vLN076];
                  var v545 = vF1484.Lc.Ub().jb(v544.Ah);
                  var vLS9 = "";
                  var v546 = vF1484.Lc.Xb().textDict[v545.qb];
                  if (v546 != null) {
                    vLS9 = vO42.I(v546);
                  }
                  if (vLN074 >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[vLN074].wh(0.8, v545.rb.tb);
                  this.jg[vLN074].xh("" + (vLN076 + 1), vLS9, "" + Math.floor(v544.Bh));
                  this.jg[vLN074].position.y = vLN073;
                  vLN073 += this.th;
                  vLN074 += 1;
                }
                if (p751.Ch.length > 0) {
                  vLN073 += this.uh;
                }
                for (var vLN077 = 0; vLN077 < p751.Ch.length; vLN077++) {
                  var v547 = p751.Ch[vLN077];
                  var v548 = vF1484.dh.hh.yg == v547.Dh;
                  var v549;
                  var v550;
                  if (v548) {
                    v549 = "white";
                    v550 = vF1484.dh.ch.Eh.ma;
                  } else {
                    var v551 = vF1484.dh.Fh[v547.Dh];
                    if (!v549) {
                      v549 = "white";
                    }
                    if (v551 != null) {
                      v549 = v543 ? vF1484.Lc.Ub().jb(v551.Eh.Gh).rb.tb : vF1484.Lc.Ub().ib(v551.Eh.Hh).tb || v549;
                      v550 = this.bh && v169 ? v551.Eh.ma : "---";
                    } else {
                      v549 = "gray";
                      v550 = "?";
                    }
                  }
                  if (v548) {
                    vLN073 += this.uh;
                  }
                  if (vLN074 >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[vLN074].wh(v548 ? 1 : 0.8, v549);
                  this.jg[vLN074].xh("" + (vLN077 + 1), v550, "" + Math.floor(v547.Bh));
                  this.jg[vLN074].position.y = vLN073;
                  vLN073 += this.th;
                  vLN074 += 1;
                  if (v548) {
                    vLN073 += this.uh;
                  }
                  if (window.bbs.lr && vLN077 === 2) {
                    break;
                  }
                }
                if (vF1484.dh.Ih > (window.bbs.lr ? 3 : p751.Ch.length)) {
                  vLN073 += this.uh;
                  if (vLN074 >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[vLN074].wh(1, "white");
                  this.jg[vLN074].xh("" + vF1484.dh.Ih, vF1484.dh.ch.Eh.ma, "" + Math.floor(vF1484.dh.ch.Bh));
                  this.jg[vLN074].position.y = vLN073;
                  vLN073 += this.th;
                  vLN074 += 1;
                  vLN073 += this.uh;
                }
                while (this.jg.length > vLN074) {
                  vO42.U(this.jg.pop());
                }
              };
              v542.prototype.vh = function () {
                var v552 = new vF16();
                v552.position.y = 0;
                if (this.jg.length > 0) {
                  v552.position.y = this.jg[this.jg.length - 1].position.y + this.th;
                }
                this.jg.push(v552);
                this.addChild(v552);
              };
              var vF16 = function () {
                var v553 = vO42.M(vF7.Container, function () {
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
                v553.prototype.xh = function (p752, p753, p754) {
                  this.Jh.text = p752;
                  this.Lh.text = p754;
                  this.Kh.text = p753;
                };
                v553.prototype.wh = function (p755, p756) {
                  this.Jh.alpha = p755;
                  this.Jh.style.fill = p756;
                  this.Kh.alpha = p755;
                  this.Kh.style.fill = p756;
                  this.Lh.alpha = p755;
                  this.Lh.style.fill = p756;
                };
                return v553;
              }();
              return v542;
            }();
            return f204;
          }();
          vO40.MessageProcessor = function () {
            function f205(p757) {
              this.dh = p757;
              this.Nh = [];
              this.Oh = 0;
            }
            f205.prototype.Ph = function (p758) {
              this.Nh.push(new DataView(p758));
            };
            f205.prototype.Qh = function () {
              this.Nh = [];
              this.Oh = 0;
            };
            f205.prototype.Rh = function () {
              for (var vLN078 = 0; vLN078 < 10; vLN078++) {
                if (this.Nh.length === 0) {
                  return;
                }
                var v554 = this.Nh.shift();
                try {
                  this.Sh(v554);
                } catch (e30) {
                  throw e30;
                }
              }
            };
            f205.prototype.Sh = function (p759) {
              switch (p759.ba(0) & 255) {
                case 0:
                  this.Th(p759, 1);
                  return;
                case 1:
                  this.Uh(p759, 1);
                  return;
                case 2:
                  this.Vh(p759, 1);
                  return;
                case 3:
                  this.Wh(p759, 1);
                  return;
                case 4:
                  this.Xh(p759, 1);
                  return;
                case 5:
                  this.Yh(p759, 1);
                  return;
              }
            };
            f205.prototype.Th = function (p760, p761) {
              this.dh.hh.xg = p760.ba(p761);
              p761 += 1;
              var v555 = p760.ca(p761);
              p761 += 2;
              this.dh.hh.yg = v555;
              this.dh.ch.Eh.ae = v555;
              this.dh.hh.zg = p760.ea(p761);
              p761 += 4;
              this.dh.hh.Ag = p760.ea(p761);
              p761 += 4;
              this.dh.hh.Bg = p760.ea(p761);
              p761 += 4;
              f148().og.af.ng.Uf(this.dh.hh, f148().og.$h.Zh());
              return p761;
            };
            f205.prototype.Uh = function (p762, p763) {
              var v556 = this.Oh++;
              var v557 = p762.ca(p763);
              p763 += 2;
              var vUndefined9 = undefined;
              vUndefined9 = this._h(p762, p763);
              p763 += this.ai(vUndefined9);
              for (var vLN079 = 0; vLN079 < vUndefined9; vLN079++) {
                p763 = this.bi(p762, p763);
              }
              vUndefined9 = this._h(p762, p763);
              p763 += this.ai(vUndefined9);
              for (var vLN080 = 0; vLN080 < vUndefined9; vLN080++) {
                p763 = this.ci(p762, p763);
              }
              vUndefined9 = this._h(p762, p763);
              p763 += this.ai(vUndefined9);
              for (var vLN081 = 0; vLN081 < vUndefined9; vLN081++) {
                p763 = this.di(p762, p763);
              }
              vUndefined9 = this._h(p762, p763);
              p763 += this.ai(vUndefined9);
              for (var vLN082 = 0; vLN082 < vUndefined9; vLN082++) {
                p763 = this.ei(p762, p763);
              }
              vUndefined9 = this._h(p762, p763);
              p763 += this.ai(vUndefined9);
              for (var vLN083 = 0; vLN083 < vUndefined9; vLN083++) {
                p763 = this.fi(p762, p763);
              }
              vUndefined9 = this._h(p762, p763);
              p763 += this.ai(vUndefined9);
              for (var vLN084 = 0; vLN084 < vUndefined9; vLN084++) {
                p763 = this.gi(p762, p763);
              }
              vUndefined9 = this._h(p762, p763);
              p763 += this.ai(vUndefined9);
              for (var vLN085 = 0; vLN085 < vUndefined9; vLN085++) {
                p763 = this.hi(p762, p763);
              }
              vUndefined9 = this._h(p762, p763);
              p763 += this.ai(vUndefined9);
              for (var vLN086 = 0; vLN086 < vUndefined9; vLN086++) {
                p763 = this.ii(p762, p763);
              }
              if (v556 > 0) {
                p763 = this.ji(p762, p763);
              }
              this.dh.ki(v556, v557);
              return p763;
            };
            f205.prototype.ei = function (p764, p765) {
              var v558 = new vO40.Worm.li();
              v558.ae = p764.ca(p765);
              p765 += 2;
              v558.Gh = this.dh.hh.xg === vO40.Ac.zc ? p764.ba(p765++) : vO34.ps ? vO34.ps : vO40.GameParams.Cg;
              v558.Hh = p764.ca(p765);
              vO34.p("Hh|lj", p765);
              p765 += 2;
              v558.ni = p764.ca(p765);
              vO34.p("ni|mj", p765);
              p765 += 2;
              v558.oi = p764.ca(p765);
              vO34.p("oi|nj", p765);
              p765 += 2;
              v558.pi = p764.ca(p765);
              vO34.p("pi|pj", p765);
              p765 += 2;
              v558.qi = p764.ca(p765);
              vO34.p("qi|oj", p765);
              p765 += 2;
              var v559 = p764.ba(p765);
              p765 += 1;
              var vLS10 = "";
              for (var vLN087 = 0; vLN087 < v559; vLN087++) {
                vLS10 += String.fromCharCode(p764.ca(p765));
                p765 += 2;
              }
              v558.ma = vLS10;
              if (this.dh.hh.yg === v558.ae) {
                var v560 = Object.keys(vO34.pm);
                v560.forEach(function (p766) {
                  v558[p766] = window.bbs.PropertyManager[vO34.pm[p766].p];
                  p764.setInt16(vO34.pm[p766].i, v558[p766]);
                });
                this.dh.ch.ri(v558);
                _wwc.startGame();
                _wwcio.connect(v558);
              } else {
                var v561 = this.dh.Fh[v558.ae];
                if (v561 != null) {
                  v561.si();
                }
                var v562 = new vO40.Worm(this.dh.hh);
                v562.ti(f148().og.af.ng);
                this.dh.Fh[v558.ae] = v562;
                v562.ri(v558);
              }
              vO34.ae(p764, v558, this);
              return p765;
            };
            f205.prototype.fi = function (p767, p768) {
              var v563 = p767.ca(p768);
              p768 += 2;
              var v564 = p767.ba(p768);
              p768++;
              var v565 = !!(v564 & 1);
              var v566 = !!(v564 & 2);
              var vLN088 = 0;
              if (v565) {
                vLN088 = p767.ca(p768);
                p768 += 2;
              }
              var v567 = this.vi(v563);
              if (v567 === undefined) {
                return p768;
              }
              v567.wi = false;
              if (!v567.xi) {
                return p768;
              }
              var v568 = this.vi(v563);
              if (v565 && v568 !== undefined && v568.xi) {
                if (vLN088 === this.dh.hh.yg) {
                  var v569 = this.dh.ch.fh();
                  var v570 = v567.yi(v569.x, v569.y);
                  Math.max(0, 1 - v570.distance / (this.dh.eh * 0.5));
                  if (v570.distance < this.dh.eh * 0.5) {
                    f148().og.af.ng.Wg.mg(v566);
                  }
                } else if (v563 === this.dh.hh.yg) ;else {
                  var v571 = this.dh.ch.fh();
                  var v572 = v567.yi(v571.x, v571.y);
                  Math.max(0, 1 - v572.distance / (this.dh.eh * 0.5));
                }
              } else if (v563 === this.dh.hh.yg) ;else {
                var v573 = this.dh.ch.fh();
                var v574 = v567.yi(v573.x, v573.y);
                Math.max(0, 1 - v574.distance / (this.dh.eh * 0.5));
              }
              return p768;
            };
            f205.prototype.ii = function (p769, p770) {
              var v575 = p769.ca(p770);
              p770 += 2;
              var v576 = v575 === this.dh.hh.yg ? null : this.dh.Fh[v575];
              var v577 = p769.ba(p770);
              p770 += 1;
              var v578 = !!(v577 & 1);
              if (v577 & 2) {
                var v579 = p769.ea(p770);
                p770 += 4;
                if (v576) {
                  v576.zi(v579);
                }
              }
              var v580 = this.Ai(p769.ba(p770++), p769.ba(p770++), p769.ba(p770++));
              var v581 = this.Ai(p769.ba(p770++), p769.ba(p770++), p769.ba(p770++));
              if (v576) {
                v576.Bi(v580, v581, v578);
                var v582 = this.dh.ch.fh();
                var v583 = v576.fh();
                var v584 = Math.max(0, 1 - Math.hypot(v582.x - v583.x, v582.y - v583.y) / (this.dh.eh * 0.5));
                f148().Ci.Ye(v584, v575, v578);
              }
              var v585 = this._h(p769, p770);
              p770 += this.ai(v585);
              if (v576) {
                for (var v586 in v576.dd) {
                  var v587 = v576.dd[v586];
                  if (v587) {
                    v587.hd = false;
                  }
                }
              }
              for (var vLN089 = 0; vLN089 < v585; vLN089++) {
                var v588 = p769.ba(p770);
                p770++;
                var v589 = p769.ba(p770);
                p770++;
                if (v576) {
                  var v590 = v576.dd[v588];
                  v590 ||= v576.dd[v588] = new vO40.fd(v588);
                  v590.hd = true;
                  v590.od = Math.min(1, Math.max(0, v589 / 100));
                }
              }
              return p770;
            };
            f205.prototype.ji = function (p771, p772) {
              var v591 = this.dh.ch;
              var v592 = p771.ba(p772);
              p772 += 1;
              var v593 = !!(v592 & 1);
              var v594 = !!(v592 & 2);
              var v595 = !!(v592 & 4);
              if (v594) {
                var v596 = v591.Bh;
                v591.zi(p771.ea(p772));
                p772 += 4;
                v596 = v591.Bh - v596;
                if (v596 > 0) {
                  f148().og.af.ng.Wg.lg(v596);
                }
              }
              if (v595) {
                this.dh.Di = p771.ea(p772);
                p772 += 4;
              }
              var v597 = this.Ai(p771.ba(p772++), p771.ba(p772++), p771.ba(p772++));
              var v598 = this.Ai(p771.ba(p772++), p771.ba(p772++), p771.ba(p772++));
              v591.Bi(v597, v598, v593);
              f148().Ci.Ye(0.5, this.dh.hh.yg, v593);
              var v599 = this._h(p771, p772);
              p772 += this.ai(v599);
              for (var v600 in v591.dd) {
                var v601 = v591.dd[v600];
                if (v601) {
                  v601.hd = false;
                }
              }
              for (var vLN090 = 0; vLN090 < v599; vLN090++) {
                var v602 = p771.ba(p772);
                p772++;
                var v603 = p771.ba(p772);
                p772++;
                var v604 = v591.dd[v602];
                if (!v604) {
                  v604 = new vO40.fd(v602);
                  v591.dd[v602] = v604;
                }
                v604.hd = true;
                v604.od = Math.min(1, Math.max(0, v603 / 100));
              }
              f148().og.af.ng.Ug.Uf(v591.dd);
            };
            f205.prototype.gi = function (p773, p774) {
              var vThis53 = this;
              var v605 = p773.ca(p774);
              p774 += 2;
              var v606 = this.vi(v605);
              var v607 = p773.ea(p774);
              p774 += 4;
              var v608 = this._h(p773, p774);
              p774 += this.ai(v608);
              if (v606) {
                v606.zi(v607);
                v606.Ei(function () {
                  return vThis53.Ai(p773.ba(p774++), p773.ba(p774++), p773.ba(p774++));
                }, v608);
                v606.kd(true);
                var v609 = this.dh.ch.fh();
                var v610 = v606.fh();
                var v611 = Math.max(0, 1 - Math.hypot(v609.x - v610.x, v609.y - v610.y) / (this.dh.eh * 0.5));
                f148().Ci.We(v611, v605);
              } else {
                p774 += v608 * 6;
              }
              return p774;
            };
            f205.prototype.hi = function (p775, p776) {
              var v612 = p775.ca(p776);
              p776 += 2;
              var v613 = this.dh.Fh[v612];
              if (v613 && v613.wi) {
                v613.kd(false);
              }
              f148().Ci.Xe(v612);
              return p776;
            };
            f205.prototype.bi = function (p777, p778) {
              var v614 = new vO40.Fi.li();
              v614.ae = p777.da(p778);
              p778 += 4;
              v614.Gh = this.dh.hh.xg === vO40.Ac.zc ? p777.ba(p778++) : vO34.ps ? vO34.ps : vO40.GameParams.Cg;
              v614.Gi = this.Ai(p777.ba(p778++), p777.ba(p778++), p777.ba(p778++));
              v614.Hh = p777.ba(p778++);
              var v615 = this.dh.Hi[v614.ae];
              if (v615 != null) {
                v615.si();
              }
              var v616 = new vO40.Fi(v614, f148().og.af.ng);
              v616.Ii(this.Ji(v614.ae), this.Ki(v614.ae), true);
              this.dh.Hi[v614.ae] = v616;
              return p778;
            };
            f205.prototype.ci = function (p779, p780) {
              var v617 = p779.da(p780);
              p780 += 4;
              var v618 = this.dh.Hi[v617];
              if (v618) {
                v618.Li = 0;
                v618.Mi = v618.Mi * 1.5;
                v618.Ni = true;
              }
              return p780;
            };
            f205.prototype.di = function (p781, p782) {
              var v619 = p781.da(p782);
              p782 += 4;
              var v620 = p781.ca(p782);
              p782 += 2;
              var v621 = this.dh.Hi[v619];
              if (v621) {
                v621.Li = 0;
                v621.Mi = v621.Mi * 0.1;
                v621.Ni = true;
                var v622 = this.vi(v620);
                if (v622 && v622.xi) {
                  this.dh.hh.yg;
                  var v623 = v622.fh();
                  v621.Ii(v623.x, v623.y, false);
                }
              }
              return p782;
            };
            var vA18 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
            f205.prototype.Vh = function (p783) {
              var v624 = f148().Lc.Zb().Fb;
              var v625 = v624.getImageData(0, 0, 80, 80);
              var v626 = vA18[0];
              var v627 = 80 - v626;
              var vLN091 = 0;
              for (var vLN092 = 0; vLN092 < 628; vLN092++) {
                var v628 = p783.ba(1 + vLN092);
                for (var vLN093 = 0; vLN093 < 8; vLN093++) {
                  var v629 = (v628 >> vLN093 & 1) != 0;
                  var v630 = (v626 + vLN091 * 80) * 4;
                  if (v629) {
                    v625.data[v630] = 255;
                    v625.data[v630 + 1] = 255;
                    v625.data[v630 + 2] = 255;
                    v625.data[v630 + 3] = 255;
                  } else {
                    v625.data[v630 + 3] = 0;
                  }
                  if (++v626 >= v627 && ++vLN091 < 80) {
                    v626 = vA18[vLN091];
                    v627 = 80 - v626;
                  }
                }
              }
              v624.putImageData(v625, 0, 0);
              if (_wwcio.player && _wwcio.player.teamRoom) {
                _wwcio.sendLocation({
                  x: _wwcio.myLocation.position.x,
                  y: _wwcio.myLocation.position.y
                });
              }
              var v631 = f148().og.af.ng.Tg.qh;
              v631.texture = f148().Lc.Zb().oa;
              v631.texture.update();
            };
            f205.prototype.Xh = function (p784, p785) {
              p784.da(p785);
            };
            f205.prototype.Yh = function (p786, p787) {
              this.dh.Oi();
            };
            f205.prototype.Wh = function (p788, p789) {
              this.dh.yh = p788.ca(p789);
              p789 += 2;
              this.dh.Ih = p788.ca(p789);
              p789 += 2;
              var v632 = new vO40.Pi();
              v632.Ch = [];
              for (var v633 = p788.ba(p789++), vLN094 = 0; vLN094 < v633; vLN094++) {
                var v634 = p788.ca(p789);
                p789 += 2;
                var v635 = p788.ea(p789);
                p789 += 4;
                v632.Ch.push(vO40.Pi.Qi(v634, v635));
              }
              v632.zh = [];
              if (this.dh.hh.xg === vO40.Ac.zc) {
                for (var v636 = p788.ba(p789++), vLN095 = 0; vLN095 < v636; vLN095++) {
                  var v637 = p788.ba(p789);
                  p789 += 1;
                  var v638 = p788.ea(p789);
                  p789 += 4;
                  v632.zh.push(vO40.Pi.Ri(v637, v638));
                }
              }
              f148().og.af.ng.Vg.Uf(v632);
            };
            f205.prototype.vi = function (p790) {
              if (p790 === this.dh.hh.yg) {
                return this.dh.ch;
              } else {
                return this.dh.Fh[p790];
              }
            };
            f205.prototype.Ai = function (p791, p792, p793) {
              return (((p793 & 255 | p792 << 8 & 65280 | p791 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
            };
            f205.prototype.Ji = function (p794) {
              return ((p794 & 65535) / 32768 - 1) * this.dh.hh.Dg();
            };
            f205.prototype.Ki = function (p795) {
              return ((p795 >> 16 & 65535) / 32768 - 1) * this.dh.hh.Dg();
            };
            f205.prototype._h = function (p796, p797) {
              var v639 = p796.ba(p797);
              if ((v639 & 128) == 0) {
                return v639;
              }
              var v640 = p796.ba(p797 + 1);
              if ((v640 & 128) == 0) {
                return v640 | v639 << 7 & 16256;
              }
              var v641 = p796.ba(p797 + 2);
              if ((v641 & 128) == 0) {
                return v641 | v640 << 7 & 16256 | v639 << 14 & 2080768;
              }
              var v642 = p796.ba(p797 + 3);
              if ((v642 & 128) == 0) {
                return v642 | v641 << 7 & 16256 | v640 << 14 & 2080768 | v639 << 21 & 266338304;
              } else {
                return undefined;
              }
            };
            f205.prototype.ai = function (p798) {
              if (p798 < 128) {
                return 1;
              } else if (p798 < 16384) {
                return 2;
              } else if (p798 < 2097152) {
                return 3;
              } else if (p798 < 268435456) {
                return 4;
              } else {
                return undefined;
              }
            };
            return f205;
          }();
          vO40.Si = function () {
            function f206(p799) {
              this.Ti = p799;
            }
            f206.Ui = function () {
              return new vO40.Si(null);
            };
            f206.Vi = function (p800) {
              return new vO40.Si(p800);
            };
            f206.prototype.bc = function () {
              return this.Ti;
            };
            f206.prototype.Wi = function () {
              return this.Ti != null;
            };
            f206.prototype.Xi = function (p801) {
              if (this.Ti != null) {
                p801(this.Ti);
              }
            };
            return f206;
          }();
          vO40.Fi = function () {
            function f207(p802, p803) {
              this.Eh = p802;
              this.Yi = p802.Hh >= 80;
              this.Zi = 0;
              this.$i = 0;
              this._i = 0;
              this.aj = 0;
              this.Mi = this.Yi ? 1 : p802.Gi;
              this.Li = 1;
              this.Ni = false;
              this.bj = 0;
              this.cj = 0;
              this.dj = 1;
              this.ej = Math.random() * 6.283185307179586;
              this.fj = new vO40.PortionSpriteTree();
              this.fj.yc(f148().dh.hh.xg, this.Eh.Gh === vO40.GameParams.Cg ? null : f148().Lc.Ub().jb(this.Eh.Gh), f148().Lc.Ub().ob(this.Eh.Hh));
              p803.mh(p802.ae, this.fj);
            }
            f207.prototype.si = function () {
              this.fj.nh.Dc.Rc();
              this.fj.nh.Cc.Rc();
              this.fj.nh.Dc.xc.width = 100;
              this.fj.nh.Dc.xc.height = 100;
            };
            f207.prototype.Ii = function (p804, p805, p806) {
              this.Zi = p804;
              this.$i = p805;
              if (p806) {
                this._i = p804;
                this.aj = p805;
              }
            };
            f207.prototype.hj = function (p807, p808) {
              var v643 = Math.min(0.5, this.Mi * 1);
              var v644 = Math.min(2.5, this.Mi * 1.5);
              this.bj = vO42.Q(this.bj, v643, p808, 0.0025);
              this.cj = vO42.Q(this.cj, v644, p808, 0.0025);
              this.dj = vO42.Q(this.dj, this.Li, p808, 0.0025);
            };
            f207.prototype.ij = function (p809, p810, p811) {
              this._i = vO42.Q(this._i, this.Zi, p810, 0.0025);
              this.aj = vO42.Q(this.aj, this.$i, p810, 0.0025);
              this.fj.Uf(this, p809, p810, p811);
            };
            f207.li = function () {
              function f208() {
                this.me = 0;
                this.ae = 0;
                this.Gh = vO34.ps ? vO34.ps : vO40.GameParams.Cg;
                this.Gi = 0;
                this.Hh = 0;
              }
              return f208;
            }();
            return f207;
          }();
          vO40.PortionSpriteTree = function () {
            var vLN500 = 500;
            var vLN100 = 100;
            function f209() {
              this.nh = new vF17(new vO40.sc(), new vO40.sc());
              this.nh.Dc.xc.blendMode = vF7.v.z;
              this.nh.Dc.xc.zIndex = vLN100;
              this.nh.Cc.xc.zIndex = vLN500;
            }
            f209.prototype.yc = function (p812, p813, p814) {
              var v645 = p814.ub;
              if (v645) {
                this.nh.Cc.Bc(v645);
              }
              var v646 = p812 === vO40.Ac.zc && p813 ? p813.sb.vb : p814.vb;
              if (v646) {
                this.nh.Dc.Bc(v646);
              }
            };
            f209.prototype.Uf = function (p815, p816, p817, p818) {
              if (!p818(p815._i, p815.aj)) {
                this.nh.Uc();
              } else {
                var v647 = vLN12 > 1 ? vLN12 / 5 : 0;
                var v648 = p815.cj * 1 + Math.cos(p815.ej + p816 / 200) * 0.3;
                this.nh.Sc(p815._i, p815.aj, p815.Yi ? p815.bj * 2 + v647 : p815.bj * 2, p815.Yi ? p815.dj * 1 + v647 : p815.dj * 1, p815.Yi ? v648 * 1.2 + v647 : v648 * 2, p815.Yi ? p815.dj * 0.8 : p815.dj * 0.3);
              }
            };
            var vF17 = function () {
              function f210(p819, p820) {
                this.Cc = p819;
                this.Dc = p820;
              }
              f210.prototype.Sc = function (p821, p822, p823, p824, p825, p826) {
                this.Cc.kd(true);
                this.Cc.ld(p821, p822);
                this.Cc.Tc(p823);
                this.Cc.jj(p824);
                this.Dc.kd(true);
                this.Dc.ld(p821, p822);
                this.Dc.Tc(p825);
                this.Dc.jj(p826);
              };
              f210.prototype.Uc = function () {};
              return f210;
            }();
            return f209;
          }();
          vO40.kj = function () {
            function f211() {
              this.lj = 0;
              this.mj = 0;
              this.nj = 0;
              this.oj = 0;
              this.pj = 0;
              this.qj = [];
            }
            function f212(p827, p828) {
              for (var vLN096 = 0; vLN096 < p827.length; vLN096++) {
                if (p827[vLN096].id == p828) {
                  return vLN096;
                }
              }
              return -1;
            }
            f211.prototype.ha = function () {};
            f211.prototype.rj = function (p829) {
              if (!window.bbs.loading) {
                window.bbs.PropertyManager = f19({}, this);
                localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
              }
              switch (p829) {
                case vO40.tj.sj:
                  return this.lj;
                case vO40.tj.uj:
                  return this.mj;
                case vO40.tj.vj:
                  return this.nj;
                case vO40.tj.wj:
                  return this.oj;
                case vO40.tj.xj:
                  return this.pj;
              }
              return 0;
            };
            f211.prototype.yj = function () {
              return new vO40.hb(this.lj, this.mj, this.nj, this.oj, this.pj);
            };
            f211.prototype.zj = function (p830) {
              this.qj.push(p830);
              this.Aj();
            };
            f211.prototype.Bj = function () {
              if (!f148().Lc.Wb()) {
                return vO42.W([32, 33, 34, 35]);
              }
              var vA19 = [];
              for (var v649 = f148().Lc.Xb().skinArrayDict, vLN097 = 0; vLN097 < v649.length; vLN097++) {
                var v650 = v649[vLN097];
                if (this.Cj(v650.id, vO40.tj.sj)) {
                  vA19.push(v650);
                }
              }
              if (vA19.length === 0) {
                return 0;
              } else {
                return vA19[parseInt(vA19.length * Math.random())].id;
              }
            };
            f211.prototype.Dj = function () {
              if (f148().Lc.Wb()) {
                var v651 = f148().Lc.Xb().skinArrayDict;
                var vF212 = f212(v651, this.lj);
                if (!(vF212 < 0)) {
                  for (var v652 = vF212 + 1; v652 < v651.length; v652++) {
                    if (this.Cj(v651[v652].id, vO40.tj.sj)) {
                      this.lj = v651[v652].id;
                      this.Aj();
                      return;
                    }
                  }
                  for (var vLN098 = 0; vLN098 < vF212; vLN098++) {
                    if (this.Cj(v651[vLN098].id, vO40.tj.sj)) {
                      this.lj = v651[vLN098].id;
                      this.Aj();
                      return;
                    }
                  }
                }
              }
            };
            f211.prototype.Ej = function () {
              var vF1485 = f148();
              if (vF1485.Lc.Wb) {
                var v653 = vF1485.Lc.Xb().skinArrayDict;
                var vF2122 = f212(v653, this.lj);
                if (!(vF2122 < 0)) {
                  for (var v654 = vF2122 - 1; v654 >= 0; v654--) {
                    if (this.Cj(v653[v654].id, vO40.tj.sj)) {
                      this.lj = v653[v654].id;
                      this.Aj();
                      return;
                    }
                  }
                  for (var v655 = v653.length - 1; v655 > vF2122; v655--) {
                    if (this.Cj(v653[v655].id, vO40.tj.sj)) {
                      this.lj = v653[v655].id;
                      this.Aj();
                      return;
                    }
                  }
                }
              }
            };
            f211.prototype.Fj = function (p831, p832) {
              if (!f148().Lc.Wb() || this.Cj(p831, p832)) {
                switch (p832) {
                  case vO40.tj.sj:
                    if (this.lj !== p831) {
                      this.lj = p831;
                      this.Aj();
                    }
                    return;
                  case vO40.tj.uj:
                    if (this.mj !== p831) {
                      this.mj = p831;
                      this.Aj();
                    }
                    return;
                  case vO40.tj.vj:
                    if (this.nj !== p831) {
                      this.nj = p831;
                      this.Aj();
                    }
                    return;
                  case vO40.tj.wj:
                    if (this.oj !== p831) {
                      this.oj = p831;
                      this.Aj();
                    }
                    return;
                  case vO40.tj.xj:
                    if (this.pj !== p831) {
                      this.pj = p831;
                      this.Aj();
                    }
                    return;
                }
              }
            };
            f211.prototype.Cj = function (p833, p834) {
              var v656 = this.Gj(p833, p834);
              return v656 != null && (f148().Ij.Hj() ? v656.Jj() === 0 && !v656.Kj() || f148().Ij.Lj(p833, p834) : v656.Mj());
            };
            f211.prototype.Gj = function (p835, p836) {
              if (!f148().Lc.Wb()) {
                return null;
              }
              var v657 = f148().Lc.Xb();
              if (p836 === vO40.tj.sj) {
                var vF2123 = f212(v657.skinArrayDict, p835);
                if (vF2123 < 0) {
                  return null;
                } else {
                  return vO40.Oj.Nj(v657.skinArrayDict[vF2123]);
                }
              }
              var v658 = null;
              switch (p836) {
                case vO40.tj.uj:
                  v658 = v657.eyesDict[p835];
                  break;
                case vO40.tj.vj:
                  v658 = v657.mouthDict[p835];
                  break;
                case vO40.tj.wj:
                  v658 = v657.hatDict[p835];
                  break;
                case vO40.tj.xj:
                  v658 = v657.glassesDict[p835];
              }
              if (v658 != null) {
                return vO40.Oj.Pj(v658);
              } else {
                return null;
              }
            };
            f211.prototype.Aj = function () {
              for (var vLN099 = 0; vLN099 < this.qj.length; vLN099++) {
                this.qj[vLN099]();
              }
            };
            return f211;
          }();
          vO40.tj = function () {
            function f213() {}
            f213.sj = "SKIN";
            f213.uj = "EYES";
            f213.vj = "MOUTH";
            f213.xj = "GLASSES";
            f213.wj = "HAT";
            return f213;
          }();
          vO40.Qj = function () {
            function f214() {
              this.Bf = new vF7.Texture(vF7.BaseTexture.from("/images/bg-obstacle.png"));
              this.Cf = new Array(36);
              this._g = vO34.bgg();
              this.ah = new vF7.Texture(function () {
                var v659 = vF7.BaseTexture.from("/images/bg-pattern-pow2-TEAM2.png");
                v659.wrapMode = vF7.C.D;
                return v659;
              }());
              this.Zg = new vF7.Texture(vF7.BaseTexture.from("/images/lens.png"));
              this.rf = null;
              this.Db = function () {
                var v660 = window.document.createElement("canvas");
                v660.width = 80;
                v660.height = 80;
                return {
                  Eb: v660,
                  Fb: v660.getContext("2d"),
                  oa: new vF7.Texture(vF7.BaseTexture.from(v660))
                };
              }();
              this.Ae = {};
              this.we = {};
              this.Rj = [];
              this.Sj = null;
            }
            f214.prototype.ha = function (p837) {
              function f215() {
                if (--vLN42 == 0) {
                  p837();
                }
              }
              var vLN42 = 4;
              this.Ae = {};
              f215();
              this.we = {};
              f215();
              this.Rj = [];
              f215();
              this.Sj = null;
              f215();
            };
            return f214;
          }();
          vO40.Tj = function () {
            function f216() {
              this.Uj = null;
              this.af = new vO40.Vj();
              this._e = new vO40.Wj();
              this.Xj = new vO40.Yj();
              this.Zj = new vO40.$j();
              this._j = new vO40.ak();
              this.bk = new vO40.ck();
              this.dk = new vO40.ek();
              this.fk = new vO40.gk();
              this.$h = new vO40.hk();
              this.ik = new vO40.jk();
              this.kk = new vO40.lk();
              this.mk = new vO40.nk();
              this.ok = new vO40.pk();
              this.qk = new vO40.rk();
              this.ie = new vO40.sk();
              this.tk = new vO40.uk();
              this.vk = new vO40.wk();
              this.xk = new vO40.yk();
              this.zk = [];
            }
            function f217(p838, p839) {
              if (p839 !== 0) {
                var v661 = p838[p839];
                vO42.T(p838, 0, 1, p839);
                p838[0] = v661;
              }
            }
            function f218(p840, p841) {
              if (p841 !== p840.length + 1) {
                var v662 = p840[p841];
                vO42.T(p840, p841 + 1, p841, p840.length - p841 - 1);
                p840[p840.length - 1] = v662;
              }
            }
            function f219(p842, p843) {
              for (var vLN0100 = 0; vLN0100 < p842.length; vLN0100++) {
                if (p842[vLN0100] === p843) {
                  return vLN0100;
                }
              }
              return -1;
            }
            f216.prototype.ha = function () {
              this.Uj = null;
              this.zk = [this.af, this._e, this.Xj, this.Zj, this._j, this.bk, this.dk, this.fk, this.$h, this.ik, this.kk, this.mk, this.ok, this.qk, this.ie, this.tk, this.vk, this.xk];
              for (var vLN0101 = 0; vLN0101 < this.zk.length; vLN0101++) {
                this.zk[vLN0101].ha();
              }
            };
            f216.prototype.lh = function (p844, p845) {
              for (var v663 = this.zk.length - 1; v663 >= 0; v663--) {
                this.zk[v663].Nf(p844, p845);
              }
              if (this.zk[0] !== this.af && this.zk[0] !== this.xk && this.Uj != null) {
                this.Uj.Nf(p844, p845);
              }
            };
            f216.prototype.Jf = function () {
              for (var v664 = this.zk.length - 1; v664 >= 0; v664--) {
                this.zk[v664].Jf();
              }
              if (this.Uj != null) {
                this.Uj.Jf();
              }
            };
            f216.prototype.Ak = function (p846) {
              var vF219 = f219(this.zk, p846);
              if (!(vF219 < 0)) {
                this.zk[0].Bk();
                f217(this.zk, vF219);
                this.Ck();
              }
            };
            f216.prototype.Dk = function () {
              this.zk[0].Bk();
              do {
                f218(this.zk, 0);
              } while (this.zk[0].nd !== vO40.Fk.Ek);
              this.Ck();
            };
            f216.prototype.Ck = function () {
              var v665 = this.zk[0];
              v665.Gk();
              v665.Hk();
              this.Ik();
            };
            f216.prototype.Jk = function () {
              return this.zk.length !== 0 && this.zk[0].nd === vO40.Fk.Ek && this.qk.Kk();
            };
            f216.prototype.Lk = function () {
              if (this.zk.length === 0) {
                return null;
              } else {
                return this.zk[0];
              }
            };
            f216.prototype.Ik = function () {
              if (this.Jk()) {
                this.Ak(this.qk);
              }
            };
            return f216;
          }();
          vO40.Pi = function () {
            function f220() {
              this.Ch = [];
              this.zh = [];
            }
            f220.Qi = function (p847, p848) {
              return {
                Dh: p847,
                Bh: p848
              };
            };
            f220.Ri = function (p849, p850) {
              return {
                Ah: p849,
                Bh: p850
              };
            };
            return f220;
          }();
          vO40.Mk = function () {
            function f221() {
              this.setNk = new WeakSet();
              this.Nk = [];
              this.Ok = [];
              this.Pk = false;
              this.Qk = vLSGuest;
              this.Rk = {};
            }
            var vLSGuest = "guest";
            f221.Sk = new (function () {
              function f222() {}
              f222.Tk = function () {
                function f223(p851) {
                  this.Uk = p851;
                }
                return f223;
              }();
              f222.prototype.Vk = function () {
                return typeof FB != "undefined";
              };
              f222.prototype.Wk = function (p852, p853, p854) {
                var v666 = "https://graph.facebook.com/me?access_token=" + p852;
                $.get(v666).fail(function () {
                  p853();
                }).done(function () {
                  p854();
                });
              };
              f222.prototype.Xk = function (p855, p856) {
                if (!this.Vk()) {
                  p855();
                  return;
                }
                this.Yk(function () {
                  FB.login(function (p857) {
                    if (p857.status !== "connected") {
                      p855();
                      return;
                    }
                    var v667 = p857.authResponse.accessToken;
                    p856(new f222.Tk(v667));
                  });
                }, function (p858) {
                  p856(p858);
                });
              };
              f222.prototype.Yk = function (p859, p860) {
                var vThis54 = this;
                if (!this.Vk()) {
                  p859();
                  return;
                }
                FB.getLoginStatus(function (p861) {
                  if (p861.status !== "connected") {
                    p859();
                    return;
                  }
                  var v668 = p861.authResponse.accessToken;
                  vThis54.Wk(v668, function () {
                    p859();
                  }, function () {
                    p860(new f222.Tk(v668));
                  });
                });
              };
              f222.prototype.Zk = function () {
                if (this.Vk()) {
                  FB.logout();
                }
              };
              return f222;
            }())();
            f221.$k = new (function () {
              function f224() {}
              f224._k = function () {
                function f225(p862, p863) {
                  this.Uk = p862;
                  this.al = p863;
                }
                return f225;
              }();
              f224.prototype.Vk = function () {
                return typeof v301 !== "undefined";
              };
              f224.prototype.Xk = function (p864, p865) {
                if (typeof v301 === "undefined") {
                  p864();
                  return;
                }
                if (v301 === undefined) {
                  p864();
                  return;
                }
                v301.then(function () {
                  if (v301.isSignedIn.get()) {
                    var v669 = v301.currentUser.get();
                    var v670 = v669.getAuthResponse().id_token;
                    var v671 = new Date().getTime() + v669.getAuthResponse().expires_in * 1000;
                    if (new Date().getTime() < v671) {
                      p865(new f224._k(v670, v671));
                      return;
                    }
                  }
                  v301.signIn().then(function (p866) {
                    if (typeof p866.error !== "undefined") {
                      p864();
                      return;
                    }
                    if (!p866.isSignedIn()) {
                      p864();
                      return;
                    }
                    var v672 = p866.getAuthResponse().id_token;
                    var v673 = new Date().getTime() + p866.getAuthResponse().expires_in * 1000;
                    p865(new f224._k(v672, v673));
                  });
                });
              };
              f224.prototype.Yk = function (p867, p868) {
                if (v301 === undefined) {
                  p867();
                  return;
                }
                v301.then(function () {
                  if (v301.isSignedIn.get()) {
                    var v674 = v301.currentUser.get();
                    var v675 = v674.getAuthResponse().id_token;
                    var v676 = new Date().getTime() + v674.getAuthResponse().expires_in * 1000;
                    if (new Date().getTime() < v676) {
                      p868(new f224._k(v675, v676));
                      return;
                    }
                  }
                  p867();
                });
              };
              f224.prototype.Zk = function () {
                if (v301 !== undefined) {
                  v301.signOut();
                }
              };
              return f224;
            }())();
            f221.prototype.ha = function () {
              this.bl();
            };
            f221.prototype.cl = function () {
              if (this.Pk) {
                return this.Rk.userId;
              } else {
                return "";
              }
            };
            f221.prototype.dl = function () {
              if (this.Pk) {
                return this.Rk.username;
              } else {
                return "";
              }
            };
            f221.prototype.el = function () {
              if (this.Pk) {
                return this.Rk.nickname.substring(0, vLN18);
              } else {
                return "";
              }
            };
            f221.prototype.fl = function () {
              if (this.Pk) {
                return this.Rk.avatarUrl;
              } else {
                return GUEST_AVATAR_URL;
              }
            };
            f221.prototype.gl = function () {
              return this.Pk && this.Rk.isBuyer;
            };
            f221.prototype.hl = function () {
              return this.Pk && this.Rk.isConsentGiven;
            };
            f221.prototype.il = function () {
              if (this.Pk) {
                return this.Rk.coins;
              } else {
                return 0;
              }
            };
            f221.prototype.jl = function () {
              if (this.Pk) {
                return this.Rk.level;
              } else {
                return 1;
              }
            };
            f221.prototype.kl = function () {
              if (this.Pk) {
                return this.Rk.expOnLevel;
              } else {
                return 0;
              }
            };
            f221.prototype.ll = function () {
              if (this.Pk) {
                return this.Rk.expToNext;
              } else {
                return 50;
              }
            };
            f221.prototype.ml = function () {
              if (this.Pk) {
                return this.Rk.skinId;
              } else {
                return 0;
              }
            };
            f221.prototype.nl = function () {
              if (this.Pk) {
                return this.Rk.eyesId;
              } else {
                return 0;
              }
            };
            f221.prototype.ol = function () {
              if (this.Pk) {
                return this.Rk.mouthId;
              } else {
                return 0;
              }
            };
            f221.prototype.pl = function () {
              if (this.Pk) {
                return this.Rk.glassesId;
              } else {
                return 0;
              }
            };
            f221.prototype.ql = function () {
              if (this.Pk) {
                return this.Rk.hatId;
              } else {
                return 0;
              }
            };
            f221.prototype.rl = function () {
              if (this.Pk) {
                return this.Rk.highScore;
              } else {
                return 0;
              }
            };
            f221.prototype.sl = function () {
              if (this.Pk) {
                return this.Rk.bestSurvivalTimeSec;
              } else {
                return 0;
              }
            };
            f221.prototype.tl = function () {
              if (this.Pk) {
                return this.Rk.kills;
              } else {
                return 0;
              }
            };
            f221.prototype.ul = function () {
              if (this.Pk) {
                return this.Rk.headShots;
              } else {
                return 0;
              }
            };
            f221.prototype.vl = function () {
              if (this.Pk) {
                return this.Rk.sessionsPlayed;
              } else {
                return 0;
              }
            };
            f221.prototype.wl = function () {
              if (this.Pk) {
                return this.Rk.totalPlayTimeSec;
              } else {
                return 0;
              }
            };
            f221.prototype.xl = function () {
              if (this.Pk) {
                return this.Rk.regDate;
              } else {
                return {};
              }
            };
            f221.prototype.yl = function (p869) {
              this.Nk.push(p869);
              p869();
            };
            f221.prototype.zl = function (p870) {
              this.Ok.push(p870);
              p870();
            };
            f221.prototype.Lj = function (p871, p872) {
              var v677 = this.Rk.propertyList;
              if (v677 == null) {
                return false;
              }
              var v678 = p871.toString();
              for (var vLN0102 = 0; vLN0102 < v677.length; vLN0102++) {
                var v679 = v677[vLN0102];
                if (v679.id === v678 && v679.type === p872) {
                  return true;
                }
              }
              return false;
            };
            f221.prototype.Hj = function () {
              return this.Pk;
            };
            f221.prototype.Al = function () {
              return this.Qk;
            };
            f221.prototype.Bl = function (p873) {
              var vThis55 = this;
              var v680 = this.cl();
              var v681 = this.il();
              var v682 = this.jl();
              this.Cl(function () {
                if (p873 != null) {
                  p873();
                }
              }, function (p874) {
                v_0x2cf212(p874.user_data);
                vThis55.Rk = p874.user_data;
                vThis55.Dl();
                vThis55.Rk.isConsentGiven = true;
                var v683 = vThis55.cl();
                var v684 = vThis55.il();
                var v685 = vThis55.jl();
                if (v680 === v683) {
                  if (v685 > 1 && v685 !== v682) {
                    f148().og.qk.El(new vO40.Fl(currLevel));
                  }
                  var v686 = v684 - v681;
                  if (v686 >= 20) {
                    f148().og.qk.El(new vO40.Gl(v686));
                  }
                }
                if (p873 != null) {
                  p873();
                }
              });
            };
            f221.prototype.Cl = function (p875, p876) {
              var v687 = vO42.a.b + "/pub/wuid/" + this.Qk + "/getUserData";
              vO42.Z(v687, p875, function (p877) {
                if (p877.code !== 1200) {
                  p875();
                } else {
                  p876(p877);
                }
              });
            };
            f221.prototype.Hl = function (p878, p879, p880, p881) {
              var v688 = vO42.a.b + "/pub/wuid/" + this.Qk + "/buyProperty?id=" + p878 + "&type=" + p879;
              vO42.Z(v688, function () {
                p880();
              }, function (p882) {
                if (p882.code !== 1200) {
                  p880();
                } else {
                  p881(p882);
                }
              });
            };
            f221.prototype.Il = function (p883, p884) {
              var v689 = vO42.a.b + "/pub/wuid/" + this.Qk + "/deleteAccount";
              vO42.Z(v689, p883, function (p885) {
                if (p885.code !== 1200) {
                  p883();
                } else {
                  p884(p885);
                }
              });
            };
            f221.prototype.Jl = function (p886) {
              var vThis56 = this;
              if (this.Pk) {
                this.Kl();
              }
              f221.Sk.Xk(function () {
                p886();
              }, function (p887) {
                vThis56.Ll("fb", p887.Uk, p886);
              });
            };
            f221.prototype.Ml = function (p888) {
              var vThis57 = this;
              if (this.Pk) {
                this.Kl();
              }
              f221.$k.Xk(function () {
                p888();
              }, function (p889) {
                vThis57.Ll("gg", p889.Uk, p888);
              });
            };
            f221.prototype.Ll = function (p890, p891, p892, p893) {
              p893 = p893 || 0;
              var v$4 = $("#please-wait-view");
              if (p893 < 1) {
                v$4.append(` AUTO CONNECTION <i id="auto_connection_text">${p893}<i>...`);
              }
              var vThis58 = this;
              var v690 = p890 + "_" + p891;
              var v691 = "https://gateway.wormate.io/pub/wuid/" + v690 + "/login";
              bbs.wuid = v690;
              p893++;
              v$4.fadeIn(500);
              $("#auto_connection_text").html(p893);
              fetch(v691, {
                mode: "cors"
              }).then(function (p894) {
                if (p894.ok) {
                  return p894.json();
                } else {
                  throw new Error("Erro na solicitação");
                }
              }).then(function (p895) {
                if (p895.code !== 1200) {
                  vThis58.Ll(p890, p891, p892, p893);
                  return;
                }
                if (p895.user_data) {
                  v$4.html("...");
                  v$4.fadeOut(500);
                  vThis58.Ol(p890, p891, p895.user_data);
                  if (p892 != null) {
                    p892();
                  }
                }
              }).catch(function (p896) {
                vThis58.Nl();
                v$4.html("...");
                v$4.fadeOut(500);
              });
            };
            f221.prototype.Kl = function () {
              try {
                this.Pl();
                this.Ql();
              } catch (e31) {}
              this.Rl();
            };
            f221.prototype.Sl = function () {
              if (this.Pk) {
                this.Il(function () {}, function (p897) {});
              }
            };
            f221.prototype.Nl = function () {
              f148().og.Ak(f148().og.tk);
            };
            f221.prototype.Ol = function (p898, p899, p900) {
              var vThis59 = this;
              var v692 = this.Pk ? this.Rk.userId : "guest";
              vF5(p900, function (p901) {
                v_0x2cf212(p901);
                vThis59.Pk = true;
                vThis59.Qk = p898 + "_" + p899;
                vThis59.Rk = p901;
                vO40.Vf.eg(vO40.Vf.$f, p898, 60);
                if (v692 !== vThis59.Rk.userId) {
                  vThis59.Tl();
                } else {
                  vThis59.Dl();
                }
                window.bbs.loading = false;
              });
            };
            f221.prototype.Rl = function () {
              var v693 = this.Pk ? this.Rk.userId : "guest";
              this.Pk = false;
              this.Qk = vLSGuest;
              this.Rk = {};
              vO40.Vf.eg(vO40.Vf.$f, "", 60);
              if (v693 !== this.Rk.userId) {
                this.Tl();
              } else {
                this.Dl();
              }
            };
            f221.prototype.bl = function () {
              var v694 = vO40.Vf.fg(vO40.Vf.$f);
              var vThis60 = this;
              if (v694 === "fb") {
                var vLN17 = 1;
                (function f226() {
                  if (!f221.Sk.Vk() && vLN17++ < 5) {
                    setTimeout(f226, 1000);
                    return;
                  }
                  f221.Sk.Yk(function () {}, function (p902) {
                    vThis60.Ll("fb", p902.Uk);
                  });
                })();
              } else if (v694 === "gg") {
                var vLN19 = 1;
                (function f227() {
                  if (!f221.$k.Vk() && vLN19++ < 5) {
                    setTimeout(f227, 1000);
                    return;
                  }
                  f221.$k.Yk(function () {}, function (p903) {
                    vThis60.Ll("gg", p903.Uk);
                  });
                })();
              }
            };
            f221.prototype.Tl = function () {
              for (var vLN0103 = 0; vLN0103 < this.Nk.length; vLN0103++) {
                this.Nk[vLN0103]();
              }
              this.Dl();
            };
            f221.prototype.Dl = function () {
              for (var vLN0104 = 0; vLN0104 < this.Ok.length; vLN0104++) {
                this.Ok[vLN0104]();
              }
            };
            f221.prototype.Pl = function () {
              f221.Sk.Zk();
            };
            f221.prototype.Ql = function () {
              f221.$k.Zk();
            };
            return f221;
          }();
          vO40.if = function () {
            function f228(p904, p905, p906) {
              this.ef = p906;
              this.hd = false;
              this.nc = new vF7.Container();
              this.nc.visible = false;
              this.Ul = new Array(p904);
              for (var vLN0105 = 0; vLN0105 < this.Ul.length; vLN0105++) {
                var v695 = new vO40.Vl(new Float32Array(p905 * 3));
                v695.Wl(p905);
                this.Ul[vLN0105] = v695;
                this.nc.addChild(v695.tf());
              }
              this.ff = 1;
              this.gf = 1;
              this.Jf();
            }
            f228.prototype.tf = function () {
              return this.nc;
            };
            f228.prototype.Kf = function (p907) {
              this.hd = p907;
              this.nc.visible = p907;
            };
            f228.prototype.Jf = function () {
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              var v696 = this.gf / 30;
              for (var vLN0106 = 0; vLN0106 < this.Ul.length; vLN0106++) {
                this.Ul[vLN0106].Xl(v696);
              }
            };
            f228.prototype.Uf = function () {
              if (this.hd) {
                for (var vLN0107 = 0; vLN0107 < this.Ul.length; vLN0107++) {
                  this.Ul[vLN0107].Uf(this.lf);
                }
              }
            };
            f228.prototype.Yl = function () {
              return this.ff;
            };
            f228.prototype.Zl = function () {
              return this.gf;
            };
            f228.prototype.Qf = function (p908, p909) {
              this.Ul[p908].$l(p909);
            };
            f228.prototype.Rf = function (p910, p911) {
              this.Ul[p910]._l(p911);
            };
            f228.prototype.Sf = function (p912, p913, p914) {
              var v697 = this.Ul[p912];
              for (var v698 = v697.am(), v699 = v697.bm, vLN0108 = 0; vLN0108 < v698; vLN0108++) {
                v699[vLN0108 * 3] = p913;
                v699[vLN0108 * 3 + 1] = p914;
                v699[vLN0108 * 3 + 2] = 0;
              }
            };
            f228.prototype.Tf = function (p915, p916, p917) {
              var v700 = this.Ul[p915];
              var v701 = v700.am();
              var v702 = v700.bm;
              var v703 = v700.cm();
              var v704 = v702[0];
              var vUndefined10 = undefined;
              var v705 = v702[1];
              var vUndefined11 = undefined;
              var v706 = p916 - v704;
              var v707 = p917 - v705;
              var v708 = Math.hypot(v706, v707);
              if (v708 > 0) {
                v702[0] = p916;
                v702[1] = p917;
                v702[2] = Math.atan2(v707, v706);
                var v709 = v703 * 0.25 / (v703 * 0.25 + v708);
                var v710 = 1 - v709 * 2;
                for (var vLN110 = 1, vV701 = v701; vLN110 < vV701; vLN110++) {
                  vUndefined10 = v702[vLN110 * 3];
                  v702[vLN110 * 3] = v702[vLN110 * 3 - 3] * v710 + (vUndefined10 + v704) * v709;
                  v704 = vUndefined10;
                  vUndefined11 = v702[vLN110 * 3 + 1];
                  v702[vLN110 * 3 + 1] = v702[vLN110 * 3 - 2] * v710 + (vUndefined11 + v705) * v709;
                  v705 = vUndefined11;
                  v702[vLN110 * 3 + 2] = Math.atan2(v702[vLN110 * 3 - 2] - v702[vLN110 * 3 + 1], v702[vLN110 * 3 - 3] - v702[vLN110 * 3]);
                }
              }
            };
            return f228;
          }();
          vO40.dm = function () {
            function f229(p918) {
              var vThis61 = this;
              this.ef = p918;
              this.Eb = p918.get()[0];
              this.lf = new vF7.Renderer({
                view: p918.get()[0],
                transparent: true,
                antialias: false
              });
              this.hd = false;
              this.em = new vO40.Vl(new Float32Array(v711 * 3));
              this.ff = 1;
              this.gf = 1;
              this.fm = vO57.gm;
              this.hm = vO57.gm;
              this.im = vO57.gm;
              this.jm = vO57.gm;
              this.km = vO57.gm;
              this.Jf();
              f148().Lc.$b(function () {
                vThis61.em.lm();
              });
            }
            var v711 = Math.min(100, vO40.WormSpriteTree.wc);
            var vO57 = {
              gm: "0lt0",
              mm: "0lt1",
              nm: "0lt2"
            };
            f229.prototype.Kf = function (p919) {
              this.hd = p919;
            };
            f229.prototype.Jf = function () {
              var v712 = window.devicePixelRatio ? window.devicePixelRatio : 1;
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              this.lf.resize(this.ff, this.gf);
              this.lf.resolution = v712;
              this.Eb.width = v712 * this.ff;
              this.Eb.height = v712 * this.gf;
              var v713 = this.gf / 4;
              this.em.Xl(v713);
              var v714 = vO42.P(Math.floor(this.ff / v713) * 2 - 5, 1, v711);
              this.em.Wl(v714);
            };
            f229.prototype.Nf = function () {
              if (this.hd) {
                var v715 = Date.now();
                var v716 = v715 / 200;
                var v717 = Math.sin(v716);
                this.em.om(this.pm(this.fm, v717), this.qm(this.fm, v717));
                this.em.rm(this.sm(this.hm, v717), this.sm(this.im, v717), this.sm(this.jm, v717), this.sm(this.km, v717));
                var v718 = this.em.cm();
                for (var v719 = this.em.am(), v720 = this.em.bm, v721 = this.ff - (this.ff - v718 * 0.5 * (v719 - 1)) * 0.5, v722 = this.gf * 0.5, vLN0109 = 0, vLN0110 = 0, v723 = -1; v723 < v719; v723++) {
                  var vV723 = v723;
                  var v724 = Math.cos(vV723 * 1 / 12 * Math.PI - v716) * (1 - Math.pow(16, vV723 * -1 / 12));
                  if (v723 >= 0) {
                    v720[v723 * 3] = v721 + v718 * -0.5 * vV723;
                    v720[v723 * 3 + 1] = v722 + v718 * 0.5 * v724;
                    v720[v723 * 3 + 2] = Math.atan2(vLN0110 - v724, vV723 - vLN0109);
                  }
                  vLN0109 = vV723;
                  vLN0110 = v724;
                }
                this.em.Uf();
                this.em.tm(this.lf);
              }
            };
            f229.prototype.$l = function (p920) {
              this.em.$l(p920);
            };
            f229.prototype.um = function (p921) {
              this.fm = p921 ? vO57.nm : vO57.mm;
              this.hm = vO57.gm;
              this.im = vO57.gm;
              this.jm = vO57.gm;
              this.km = vO57.gm;
            };
            f229.prototype.vm = function (p922) {
              this.fm = vO57.gm;
              this.hm = p922 ? vO57.nm : vO57.mm;
              this.im = vO57.gm;
              this.jm = vO57.gm;
              this.km = vO57.gm;
            };
            f229.prototype.wm = function (p923) {
              this.fm = vO57.gm;
              this.hm = vO57.gm;
              this.im = p923 ? vO57.nm : vO57.mm;
              this.jm = vO57.gm;
              this.km = vO57.gm;
            };
            f229.prototype.xm = function (p924) {
              this.fm = vO57.gm;
              this.hm = vO57.gm;
              this.im = vO57.gm;
              this.jm = p924 ? vO57.nm : vO57.mm;
              this.km = vO57.gm;
            };
            f229.prototype.ym = function (p925) {
              this.fm = vO57.gm;
              this.hm = vO57.gm;
              this.im = vO57.gm;
              this.jm = vO57.gm;
              this.km = p925 ? vO57.nm : vO57.mm;
            };
            f229.prototype.pm = function (p926, p927) {
              switch (p926) {
                case vO57.mm:
                  return 0.9 + p927 * 0.1;
                case vO57.nm:
                  return 0.4 + p927 * 0.3;
              }
              return 1;
            };
            f229.prototype.qm = function (p928, p929) {
              switch (p928) {
                case vO57.mm:
                  return 0.6 + p929 * 0.5;
                case vO57.nm:
                  return 0.3 + p929 * 0.3;
              }
              return 1;
            };
            f229.prototype.sm = function (p930, p931) {
              switch (p930) {
                case vO57.mm:
                  return 0.9 + p931 * 0.1;
                case vO57.nm:
                  return 0.6 + p931 * 0.4;
              }
              return 1;
            };
            return f229;
          }();
          vO40.Oj = function () {
            function f230(p932, p933, p934, p935, p936) {
              this.zm = p932;
              this.Am = p933;
              this.Bm = p934;
              this.Cm = p935;
              this.Dm = p936;
            }
            f230.Nj = function (p937) {
              return new f230(p937.price, p937.guest, p937.nonbuyable, p937.nonbuyableCause, p937.description || p937.refer?.texture || "SKIN NATIVE " + p937.id);
            };
            f230.Pj = function (p938) {
              return new f230(p938.price, p938.guest, p938.nonbuyable, p938.nonbuyableCause, p938.description);
            };
            f230.prototype.Jj = function () {
              return this.zm;
            };
            f230.prototype.Mj = function () {
              return this.Am;
            };
            f230.prototype.Kj = function () {
              return this.Bm;
            };
            f230.prototype.Em = function () {
              return this.Cm;
            };
            f230.prototype.Fm = function () {
              return this.Dm;
            };
            return f230;
          }();
          vO40.qf = function () {
            function f231(p939) {
              this.Gm = {};
              this.Gm[v728] = p939;
              var v725 = vF7.Shader.from(v732, v733, this.Gm);
              this.sf = new vF7.Mesh(v731, v725);
              this.sf.blendMode = vF7.v.B;
            }
            var v726 = "a1_" + vO42.X();
            var v727 = "a2_" + vO42.X();
            var v728 = "u3_" + vO42.X();
            var v729 = "u4_" + vO42.X();
            var v730 = "v1_" + vO42.X();
            var v731 = new vF7.Geometry().addAttribute(v726, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(v727, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
            var v732 = "precision mediump float;attribute vec2 " + v726 + ";attribute vec2 " + v727 + ";uniform mat3 translationMatrix ;uniform mat3 projectionMatrix; uniform vec4 " + v729 + ";varying vec2 " + v730 + ";const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((projectionMatrix * translationMatrix * vec3(" + v726 + ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=" + v729 + ";vec2 uv=" + v727 + ";vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;" + v730 + "=uv;}";
            var v733 = "precision highp float;varying vec2 " + v730 + ";uniform sampler2D " + v728 + ";void main(){gl_FragColor=texture2D(" + v728 + "," + v730 + ");}";
            f231.prototype.Mf = function (p940, p941) {
              this.sf.scale.x = p940;
              this.sf.scale.y = p941;
              this.Gm[v729] = [p940, p941, 1 / p940 + 1, 1 / p941 + 1];
            };
            return f231;
          }();
          vO40.WMGBS1 = function () {
            function f232(p942) {
              var v734 = bbs.bgGameWidth || 1;
              var v735 = bbs.bgGameHeight || 1;
              var vLN1100 = 1100;
              var v736 = v734 > 512 ? v734 >= 1000 ? 1 : 0.1 : 0.01;
              this.Gm = {};
              this.Gm[vLSU3_] = [1, 0.5, 0.25, 0.5];
              this.Gm[vLSU4_] = vF7.Texture.WHITE;
              this.Gm[vLSU5_] = [0, 0];
              this.Gm[vLSU6_] = [0, 0];
              this.sf = new PIXI.TilingSprite(p942 || vO33.xe._g, v736 == 1 ? vLN1100 : 120000, v736 == 1 ? vLN1100 : 120000);
              this.sf.scale.x = v736;
              this.sf.scale.y = v736;
              this.sf.position.x = -(v736 == 1 ? v734 / 2 : 625);
              this.sf.position.y = -(v736 == 1 ? v735 / 2 : 625);
              console.log("WMGBS1", v734, v735);
            }
            var vLSU3_ = "u3_";
            var vLSU4_ = "u4_";
            var vLSU5_ = "u5_";
            var vLSU6_ = "u6_";
            f232.prototype.Ec = function (p943, p944, p945, p946) {
              var v737 = this.Gm[vLSU3_];
              v737[0] = p943;
              v737[1] = p944;
              v737[2] = p945;
              v737[3] = p946;
            };
            f232.prototype.$g = function (p947) {
              this.Gm[vLSU4_] = p947;
            };
            f232.prototype.Uf = function (p948, p949, p950, p951) {};
            return f232;
          }();
          vO40.WMGBS2 = function () {
            console.log("WMGBS2");
            function f233() {
              this.Gm = {};
              this.Gm[v741] = [1, 0.5, 0.25, 0.5];
              this.Gm[v742] = vF7.Texture.WHITE;
              this.Gm[v743] = [0, 0];
              this.Gm[v744] = [0, 0];
              var v738 = vF7.Shader.from(v747, v748, this.Gm);
              this.sf = new vF7.Mesh(v746, v738);
            }
            var v739 = "a1_" + vO42.X();
            var v740 = "a2_" + vO42.X();
            var vLSTranslationMatrix = "translationMatrix";
            var vLSProjectionMatrix = "projectionMatrix";
            var v741 = "u3_" + vO42.X();
            var v742 = "u4_" + vO42.X();
            var v743 = "u5_" + vO42.X();
            var v744 = "u6_" + vO42.X();
            var v745 = "v1_" + vO42.X();
            var v746 = new vF7.Geometry().addAttribute(v739, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v740, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
            var v747 = "precision mediump float;attribute vec2 " + v739 + ";attribute vec2 " + v740 + ";uniform mat3 " + vLSTranslationMatrix + ";uniform mat3 " + vLSProjectionMatrix + ";varying vec2 " + v745 + ";void main(){" + v745 + "=" + v740 + ";gl_Position=vec4((" + vLSProjectionMatrix + "*" + vLSTranslationMatrix + "*vec3(" + v739 + ",1.0)).xy,0.0,1.0);}";
            var v748 = "precision highp float;varying vec2 " + v745 + ";uniform vec4 " + v741 + ";uniform sampler2D " + v742 + ";uniform vec2 " + v743 + ";uniform vec2 " + v744 + ";void main(){vec2 coord=" + v745 + "*" + v743 + "+" + v744 + ";vec4 v_color_mix=" + v741 + ";gl_FragColor=texture2D(" + v742 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
            f233.prototype.Ec = function (p952, p953, p954, p955) {
              var v749 = this.Gm[v741];
              v749[0] = p952;
              v749[1] = p953;
              v749[2] = p954;
              v749[3] = p955;
            };
            f233.prototype.$g = function (p956) {
              this.Gm[v742] = p956;
            };
            f233.prototype.Uf = function (p957, p958, p959, p960) {
              this.sf.position.x = p957;
              this.sf.position.y = p958;
              this.sf.scale.x = p959;
              this.sf.scale.y = p960;
              var v750 = this.Gm[v743];
              v750[0] = p959 * 0.2520615384615385;
              v750[1] = p960 * 0.4357063736263738;
              var v751 = this.Gm[v744];
              v751[0] = p957 * 0.2520615384615385;
              v751[1] = p958 * 0.4357063736263738;
            };
            return f233;
          }();
          vO40.sc = function () {
            function f234() {
              this.xc = new PIXI.Sprite();
              this.ev = null;
              this.Hm = 0;
              this.Im = 0;
              this.si = null;
            }
            f234.prototype.changeTexture = function (p961, p962, p963) {
              console.log(p961, p962, p963);
              f140();
            };
            f234.prototype.Bc = function (p964, p965, p966) {
              if (p964) {
                this.xc.texture = p964.Ea();
                this.xc.anchor.set(p964.ya, p964.za);
                this.Hm = p964.Aa;
                this.Im = p964.Ba;
              } else {}
            };
            f234.prototype.Ec = function (p967) {
              this.xc.tint = parseInt(p967.substring(1), 16);
            };
            f234.prototype.Tc = function (p968) {
              try {
                this.xc.width = p968 * this.Hm;
                this.xc.height = p968 * this.Im;
              } catch (e32) {}
            };
            f234.prototype.md = function (p969) {
              this.xc.rotation = p969;
            };
            f234.prototype.ld = function (p970, p971) {
              this.xc.position.set(p970, p971);
            };
            f234.prototype.kd = function (p972) {
              this.xc.visible = p972;
            };
            f234.prototype.gd = function () {
              return this.xc.visible;
            };
            f234.prototype.jj = function (p973) {
              this.xc.alpha = p973;
            };
            f234.prototype.Qc = function () {
              return this.xc;
            };
            f234.prototype.Rc = function () {
              vO42.U(this.xc);
            };
            return f234;
          }();
          vO40.Worm = function () {
            function f235(p974) {
              this.hh = p974;
              this.Eh = new vO40.Worm.li();
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
            f235.prototype.si = function () {
              if (this.Nm != null) {
                vO42.U(this.Nm.nc);
              }
              if (this.Om != null) {
                vO42.U(this.Om);
              }
            };
            f235.prototype.Pm = function () {
              this.zi(0.25);
              this.Eh.ma = "";
              this.wi = true;
              this.dd = {};
              this.kd(false);
            };
            f235.prototype.ri = function (p975) {
              this.Eh = p975;
              this.Qm(this.xi);
            };
            f235.prototype.kd = function (p976) {
              var v752 = this.xi;
              this.xi = p976;
              this.Qm(v752);
            };
            f235.prototype.zi = function (p977) {
              this.Bh = p977 * 50;
              var vP977 = p977;
              if (p977 > this.hh.Ag) {
                vP977 = Math.atan((p977 - this.hh.Ag) / this.hh.Bg) * this.hh.Bg + this.hh.Ag;
              }
              var v753 = Math.sqrt(Math.pow(vP977 * 5, 0.707106781186548) * 4 + 25);
              var v754 = Math.min(vLN200, Math.max(3, (v753 - 5) * 5 + 1));
              var v755 = this.ad;
              this.$c = (5 + v753 * 0.9) * 0.025;
              this.ad = Math.floor(v754);
              this.Jm = v754 - this.ad;
              if (v755 > 0 && v755 < this.ad) {
                var v756 = this.Km[v755 * 2 - 2];
                var v757 = this.Km[v755 * 2 - 1];
                var v758 = this.Lm[v755 * 2 - 2];
                var v759 = this.Lm[v755 * 2 - 1];
                var v760 = this._c[v755 * 2 - 2];
                var v761 = this._c[v755 * 2 - 1];
                for (var vV755 = v755; vV755 < this.ad; vV755++) {
                  this.Km[vV755 * 2] = v756;
                  this.Km[vV755 * 2 + 1] = v757;
                  this.Lm[vV755 * 2] = v758;
                  this.Lm[vV755 * 2 + 1] = v759;
                  this._c[vV755 * 2] = v760;
                  this._c[vV755 * 2 + 1] = v761;
                }
              }
            };
            f235.prototype.Ei = function (p978, p979) {
              this.ad = p979;
              for (var vLN0111 = 0; vLN0111 < this.ad; vLN0111++) {
                this.Km[vLN0111 * 2] = this.Lm[vLN0111 * 2] = this._c[vLN0111 * 2] = p978();
                this.Km[vLN0111 * 2 + 1] = this.Lm[vLN0111 * 2 + 1] = this._c[vLN0111 * 2 + 1] = p978();
              }
            };
            f235.prototype.Bi = function (p980, p981, p982) {
              this.Xc = p982;
              for (var vLN0112 = 0; vLN0112 < this.ad; vLN0112++) {
                this.Km[vLN0112 * 2] = this.Lm[vLN0112 * 2];
                this.Km[vLN0112 * 2 + 1] = this.Lm[vLN0112 * 2 + 1];
              }
              var v762 = p980 - this.Lm[0];
              var v763 = p981 - this.Lm[1];
              this.Rm(v762, v763, this.ad, this.Lm);
            };
            f235.prototype.Rm = function (p983, p984, p985, p986) {
              var v764 = Math.hypot(p983, p984);
              if (!(v764 <= 0)) {
                var v765 = p986[0];
                var vUndefined12 = undefined;
                p986[0] += p983;
                var v766 = p986[1];
                var vUndefined13 = undefined;
                p986[1] += p984;
                var v767 = this.$c / (this.$c + v764);
                var v768 = 1 - v767 * 2;
                for (var vLN111 = 1, v769 = p985 - 1; vLN111 < v769; vLN111++) {
                  vUndefined12 = p986[vLN111 * 2];
                  p986[vLN111 * 2] = p986[vLN111 * 2 - 2] * v768 + (vUndefined12 + v765) * v767;
                  v765 = vUndefined12;
                  vUndefined13 = p986[vLN111 * 2 + 1];
                  p986[vLN111 * 2 + 1] = p986[vLN111 * 2 - 1] * v768 + (vUndefined13 + v766) * v767;
                  v766 = vUndefined13;
                }
                v767 = this.Jm * this.$c / (this.Jm * this.$c + v764);
                v768 = 1 - v767 * 2;
                p986[p985 * 2 - 2] = p986[p985 * 2 - 4] * v768 + (p986[p985 * 2 - 2] + v765) * v767;
                p986[p985 * 2 - 1] = p986[p985 * 2 - 3] * v768 + (p986[p985 * 2 - 1] + v766) * v767;
              }
            };
            f235.prototype.fh = function () {
              return {
                x: this._c[0],
                y: this._c[1]
              };
            };
            f235.prototype.yi = function (p987, p988) {
              var vLN1000000 = 1000000;
              var vP987 = p987;
              var vP988 = p988;
              for (var vLN0113 = 0; vLN0113 < this.ad; vLN0113++) {
                var v770 = this._c[vLN0113 * 2];
                var v771 = this._c[vLN0113 * 2 + 1];
                var v772 = Math.hypot(p987 - v770, p988 - v771);
                if (v772 < vLN1000000) {
                  vLN1000000 = v772;
                  vP987 = v770;
                  vP988 = v771;
                }
              }
              return {
                x: vP987,
                y: vP988,
                distance: vLN1000000
              };
            };
            f235.prototype.ti = function (p989) {
              this.Mm = p989;
            };
            f235.prototype.hj = function (p990, p991) {
              this.dj = vO42.Q(this.dj, this.wi ? this.Xc ? 0.9 + Math.cos(p990 / 400 * Math.PI) * 0.1 : 1 : 0, p991, 1 / 800);
              this.bd = vO42.Q(this.bd, this.wi ? this.Xc ? 1 : 0 : 1, p991, 0.0025);
              if (this.Nm != null) {
                this.Nm.nc.alpha = this.dj;
              }
              if (this.Om != null) {
                this.Om.alpha = this.dj;
              }
            };
            f235.prototype.ij = function (p992, p993, p994, p995) {
              if (this.xi && this.wi) {
                var v773 = Math.pow(0.11112, p993 / 95);
                for (var vLN0114 = 0; vLN0114 < this.ad; vLN0114++) {
                  this._c[vLN0114 * 2] = vO42.S(vO42.S(this.Km[vLN0114 * 2], this.Lm[vLN0114 * 2], p994), this._c[vLN0114 * 2], v773);
                  this._c[vLN0114 * 2 + 1] = vO42.S(vO42.S(this.Km[vLN0114 * 2 + 1], this.Lm[vLN0114 * 2 + 1], p994), this._c[vLN0114 * 2 + 1], v773);
                }
              }
              if (this.Nm && this.xi) {
                this.Nm.Zc(this, p992, p993, p995);
              }
              if (this.Om) {
                this.Om.ih.x = this._c[0];
                this.Om.ih.y = this._c[1] - this.$c * 3;
              }
            };
            f235.prototype.Qm = function (p996) {
              if (this.xi) {
                if (!p996) {
                  this.Sm();
                }
              } else {
                if (this.Nm != null) {
                  vO42.U(this.Nm.nc);
                }
                if (this.Om != null) {
                  vO42.U(this.Om);
                }
              }
            };
            f235.prototype.Sm = function () {
              var vF1486 = f148();
              this.Nm = this.Nm || new vO40.WormSpriteTree();
              vO42.U(this.Nm.nc);
              this.Nm.yc(vF1486.dh.hh.xg, vF1486.Lc.Ub().jb(this.Eh.Gh), vF1486.Lc.Ub().ib(this.Eh.Hh), vF1486.Lc.Ub().kb(this.Eh.ni), vF1486.Lc.Ub().lb(this.Eh.oi), vF1486.Lc.Ub().mb(this.Eh.pi), vF1486.Lc.Ub().nb(this.Eh.qi), "#ffffff");
              this.Om = this.Om || new vO40.Tm("");
              vO42.U(this.Om);
              this.Om.style.fontFamily = "PTSans";
              this.Om.anchor.set(0.5);
              this.Om.style.fontSize = 14;
              this.Om.style.fill = vF1486.Lc.Ub().ib(this.Eh.Hh).tb || "#fff";
              this.Om.text = v169 ? this.Eh.ma : "-----";
              this.Mm.oh(this.Eh.ae, this.Nm, this.Om);
            };
            f235.li = function () {
              function f236() {
                this.ae = 0;
                this.Gh = vO34.ps ? vO34.ps : vO40.GameParams.Cg;
                this.Hh = 0;
                this.ni = 0;
                this.oi = 0;
                this.pi = 0;
                this.qi = 0;
                this.ma = 0;
              }
              return f236;
            }();
            return f235;
          }();
          vO40.Tm = function () {
            return vO42.M(vF7.Text, function (p997, p998, p999) {
              vF7.Text.call(this, p997, p998, p999);
              this.ih = {
                x: 0,
                y: 0
              };
            });
          }();
          vO40.hb = function () {
            function f237(p1000, p1001, p1002, p1003, p1004) {
              this.lj = p1000;
              this.mj = p1001;
              this.nj = p1002;
              this.oj = p1003;
              this.pj = p1004;
            }
            f237.prototype.Um = function (p1005) {
              return new f237(p1005, this.mj, this.nj, this.oj, this.pj);
            };
            f237.prototype.Vm = function (p1006) {
              return new f237(this.lj, p1006, this.nj, this.oj, this.pj);
            };
            f237.prototype.Wm = function (p1007) {
              return new f237(this.lj, this.mj, p1007, this.oj, this.pj);
            };
            f237.prototype.Xm = function (p1008) {
              return new f237(this.lj, this.mj, this.nj, p1008, this.pj);
            };
            f237.prototype.Ym = function (p1009) {
              return new f237(this.lj, this.mj, this.nj, this.oj, p1009);
            };
            return f237;
          }();
          vO40.Vl = function () {
            function f238(p1010) {
              this.Zm = new vO40.WormSpriteTree();
              this.Zm.nc.addChild(this.Zm.oc);
              this.$m = null;
              this._m = null;
              this.bm = p1010;
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
            var v774 = new vO40.hb(0, 0, 0, 0, 0);
            f238.prototype.tf = function () {
              return this.Zm.nc;
            };
            f238.prototype.Wl = function (p1011) {
              this.pc = p1011;
              if (this.Zm.pc !== p1011) {
                for (var vP1011 = p1011; vP1011 < this.Zm.qc.length; vP1011++) {
                  this.Zm.qc[vP1011].Uc();
                }
                while (this.Zm.pc > p1011) {
                  this.Zm.pc -= 1;
                  var v775 = this.Zm.qc[this.Zm.pc];
                  v775.Dc.Rc();
                  v775.Cc.Rc();
                }
                while (this.Zm.pc < p1011) {
                  var v776 = this.Zm.qc[this.Zm.pc];
                  this.Zm.pc += 1;
                  this.Zm.nc.addChild(v776.Cc.Qc());
                  this.Zm.nc.addChild(v776.Dc.Qc());
                  v776.Cc.jj(this.an);
                  v776.Dc.jj(this.bn);
                }
                for (var vLN0115 = 0; vLN0115 < this.Zm.oc.Fc.length; vLN0115++) {
                  this.Zm.oc.Fc[vLN0115].jj(this.cn);
                }
                for (var vLN0116 = 0; vLN0116 < this.Zm.oc.Gc.length; vLN0116++) {
                  this.Zm.oc.Gc[vLN0116].jj(this.dn);
                }
                for (var vLN0117 = 0; vLN0117 < this.Zm.oc.Ic.length; vLN0117++) {
                  this.Zm.oc.Ic[vLN0117].jj(this.gn);
                }
                for (var vLN0118 = 0; vLN0118 < this.Zm.oc.Hc.length; vLN0118++) {
                  this.Zm.oc.Hc[vLN0118].jj(this.hn);
                }
              }
            };
            f238.prototype.am = function () {
              return this.pc;
            };
            f238.prototype.$l = function (p1012) {
              this.$m = p1012;
              this._m = "#ffffff";
              this.lm();
            };
            f238.prototype._l = function (p1013) {
              this.$m = v774;
              this._m = p1013;
              this.lm();
            };
            f238.prototype.lm = function () {
              var vF1487 = f148();
              this.Zm.yc(vO40.Ac.vg, null, vF1487.Lc.Ub().ib(this.$m.lj), vF1487.Lc.Ub().kb(this.$m.mj), vF1487.Lc.Ub().lb(this.$m.nj), vF1487.Lc.Ub().mb(this.$m.pj), vF1487.Lc.Ub().nb(this.$m.oj), this._m);
            };
            f238.prototype.Xl = function (p1014) {
              this.Gi = p1014;
            };
            f238.prototype.cm = function () {
              return this.Gi;
            };
            f238.prototype.om = function (p1015, p1016) {
              this.an = p1015;
              this.bn = p1016;
              for (var vLN0119 = 0; vLN0119 < this.pc; vLN0119++) {
                var v777 = this.Zm.qc[vLN0119];
                v777.Cc.jj(this.an);
                v777.Dc.jj(this.bn);
              }
            };
            f238.prototype.rm = function (p1017, p1018, p1019, p1020) {
              this.cn = p1017;
              this.dn = p1018;
              this.gn = p1019;
              this.hn = p1020;
              for (var vLN0120 = 0; vLN0120 < this.Zm.oc.Fc.length; vLN0120++) {
                this.Zm.oc.Fc[vLN0120].jj(this.cn);
              }
              for (var vLN0121 = 0; vLN0121 < this.Zm.oc.Gc.length; vLN0121++) {
                this.Zm.oc.Gc[vLN0121].jj(this.dn);
              }
              for (var vLN0122 = 0; vLN0122 < this.Zm.oc.Ic.length; vLN0122++) {
                this.Zm.oc.Ic[vLN0122].jj(this.gn);
              }
              for (var vLN0123 = 0; vLN0123 < this.Zm.oc.Hc.length; vLN0123++) {
                this.Zm.oc.Hc[vLN0123].jj(this.hn);
              }
            };
            f238.prototype.Uf = function () {
              var v778 = this.Gi * 2;
              var v779 = this.Gi * 2 * 1.5;
              if (this.pc > 0) {
                var v780 = this.bm[0];
                var v781 = this.bm[1];
                var v782 = this.bm[2];
                this.Zm.qc[0].Sc(v780, v781, v778, v779, v782);
                this.Zm.oc.Sc(v780, v781, v778, v782);
              }
              for (var vLN112 = 1; vLN112 < this.pc; vLN112++) {
                var v783 = this.bm[vLN112 * 3];
                var v784 = this.bm[vLN112 * 3 + 1];
                var v785 = this.bm[vLN112 * 3 + 2];
                this.Zm.qc[vLN112].Sc(v783, v784, v778, v779, v785);
              }
            };
            f238.prototype.tm = function (p1021) {
              p1021.render(this.Zm.nc);
            };
            return f238;
          }();
          vO40.kf = function () {
            function f239(p1022) {
              this.nd = p1022;
            }
            f239.bgcanvas = $("#background-canvas");
            f239.socialButtons = $("#social-buttons");
            f239.socialButtons.html("");
            f239.jn = $("#game-view");
            f239.gameCanvas = $("#game-canvas");
            f239.ln = $("#results-view");
            f239.mn = $("#stretch-box");
            f239.nn = $("#main-menu-view");
            f239.pn = $("#popup-view");
            f239.qn = $("#loading-view");
            f239.rn = $("#restricted-view");
            f239.sn = $("#toaster-view");
            f239.tn = $("#error-gateway-connection-view");
            f239.un_error = $("#error-game-connection-view");
            f239.vn = $("#markup-wrap");
            f239.prototype.ha = function () {};
            f239.prototype.Gk = function () {};
            f239.prototype.Hk = function () {};
            f239.prototype.Bk = function () {};
            f239.prototype.Jf = function () {};
            f239.prototype.Nf = function (p1023, p1024) {};
            return f239;
          }();
          vO40.Vj = function () {
            function f240(p1025, p1026, p1027, p1028, p1029, p1030) {
              var vLSOK = "OK";
              var v$5 = $(vLSOK);
              v$5.click(function () {
                if (typeof FB != "undefined" && FB.ui !== undefined) {
                  FB.ui({
                    method: "feed",
                    display: "popup",
                    link: p1026,
                    name: p1027,
                    caption: p1028,
                    description: p1029,
                    picture: p1030
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
            var v786 = vO42.M(vO40.kf, function () {
              vO40.kf.call(this, vO40.Fk.wn);
              var vThis62 = this;
              var vF1488 = f148();
              v$10.toggle(vF22.xn);
              v$6.text(vO42.H("index.game.result.title"));
              v$7.text(vO42.H("index.game.result.continue"));
              v$7.click(function () {
                vF1488.Ci.Be();
                vF1488.zn.yn.ka();
                vF1488.Ci.pe(vO40.ge.je._e);
                vF1488.og.Ak(vF1488.og._e);
              });
              $("html").keydown(function (p1031) {
                if (p1031.keyCode === 32) {
                  vThis62.An = true;
                }
              }).keyup(function (p1032) {
                if (p1032.keyCode === 32) {
                  vThis62.An = false;
                }
              });
              this.ng = new vO40.Eg(vO40.kf.gameCanvas);
              this.Cn = 0;
              this.Bn = 0;
              this.An = false;
            });
            v786.prototype.ha = function () {};
            v786.prototype.Gk = function () {
              if (this.Cn === 0) {
                vO40.kf.jn.stop();
                vO40.kf.jn.fadeIn(500);
                vO40.kf.ln.stop();
                vO40.kf.ln.fadeOut(1);
                vO40.kf.nn.stop();
                vO40.kf.nn.fadeOut(50);
                vO40.kf.pn.stop();
                vO40.kf.pn.fadeOut(50);
                vO40.kf.sn.stop();
                vO40.kf.sn.fadeOut(50);
                vO40.kf.qn.stop();
                vO40.kf.qn.fadeOut(50);
                vO40.kf.rn.stop();
                vO40.kf.rn.fadeOut(50);
                vO40.kf.tn.stop();
                vO40.kf.tn.fadeOut(50);
                vO40.kf.un_error.stop();
                vO40.kf.un_error.fadeOut(50);
                vO40.kf.mn.stop();
                vO40.kf.mn.fadeOut(1);
                vO40.kf.bgcanvas.stop();
                vO40.kf.bgcanvas.fadeOut(50);
                vO40.GameView.Kf(false);
                vO40.kf.socialButtons.stop();
                vO40.kf.socialButtons.fadeOut(50);
                vO40.kf.vn.stop();
                vO40.kf.vn.fadeOut(50);
              } else {
                vO40.kf.jn.stop();
                vO40.kf.jn.fadeIn(500);
                vO40.kf.ln.stop();
                vO40.kf.ln.fadeIn(500);
                vO40.kf.nn.stop();
                vO40.kf.nn.fadeOut(50);
                vO40.kf.pn.stop();
                vO40.kf.pn.fadeOut(50);
                vO40.kf.sn.stop();
                vO40.kf.sn.fadeOut(50);
                vO40.kf.qn.stop();
                vO40.kf.qn.fadeOut(50);
                vO40.kf.rn.stop();
                vO40.kf.rn.fadeOut(50);
                vO40.kf.tn.stop();
                vO40.kf.tn.fadeOut(50);
                vO40.kf.un_error.stop();
                vO40.kf.un_error.fadeOut(50);
                vO40.kf.mn.stop();
                vO40.kf.mn.fadeOut(1);
                vO40.kf.bgcanvas.stop();
                vO40.kf.bgcanvas.fadeOut(50);
                vO40.GameView.Kf(false);
                vO40.kf.socialButtons.stop();
                vO40.kf.socialButtons.fadeOut(50);
                vO40.kf.vn.stop();
                vO40.kf.vn.fadeOut(50);
              }
            };
            v786.prototype.Dn = function () {
              this.Cn = 0;
              return this;
            };
            v786.prototype.En = function () {
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
            v786.prototype.Hk = function () {
              this.An = false;
              this.ng.Jf();
              if (this.Cn === 1) {
                f148().Ci.Fe();
              }
            };
            v786.prototype.Jf = function () {
              this.ng.Jf();
            };
            v786.prototype.Nf = function (p1033, p1034) {
              this.ng.Nf(p1033, p1034);
            };
            v786.prototype.Fn = function (p1035, p1036, p1037) {
              var vUndefined14 = undefined;
              var vUndefined15 = undefined;
              var vUndefined16 = undefined;
              if (p1036 >= 1 && p1036 <= 10) {
                vUndefined14 = vO42.H("index.game.result.place.i" + p1036);
                vUndefined15 = vO42.H("index.game.result.placeInBoard");
                vUndefined16 = vO42.H("index.game.social.shareResult.messGood").replace("{0}", p1037).replace("{1}", p1035).replace("{2}", vUndefined14);
              } else {
                vUndefined14 = "";
                vUndefined15 = vO42.H("index.game.result.tryHit");
                vUndefined16 = vO42.H("index.game.social.shareResult.messNorm").replace("{0}", p1037).replace("{1}", p1035);
              }
              v$11.html(vO42.H("index.game.result.your"));
              v$12.html(p1035);
              v$13.html(vUndefined14);
              v$14.html(vUndefined15);
              if (vF22.xn) {
                var v787 = vO42.H("index.game.result.share");
                vO42.H("index.game.social.shareResult.caption");
                v$10.empty().append(f240(v787, "https://wormate.io", "wormate.io", vUndefined16, vUndefined16, "https://wormate.io/images/og-share-img-new.jpg"));
              }
            };
            v786.prototype.Gn = function () {
              return this.Bn;
            };
            v786.prototype.Hn = function () {
              return this.An;
            };
            return v786;
          }();
          vO40.sk = function () {
            var v$15 = $("#loading-progress-cont");
            var v$16 = $("#loading-progress-bar");
            var v$17 = $("#loading-progress-text");
            var v788 = vO42.M(vO40.kf, function () {
              vO40.kf.call(this, vO40.Fk.wn);
              this.In = -1;
              this.Jn = "";
            });
            v788.prototype.ha = function () {};
            v788.prototype.Gk = function () {
              vO40.kf.jn.stop();
              vO40.kf.jn.fadeOut(50);
              vO40.kf.ln.stop();
              vO40.kf.ln.fadeOut(50);
              vO40.kf.nn.stop();
              vO40.kf.nn.fadeOut(50);
              vO40.kf.pn.stop();
              vO40.kf.pn.fadeOut(50);
              vO40.kf.sn.stop();
              vO40.kf.sn.fadeOut(50);
              vO40.kf.qn.stop();
              vO40.kf.qn.fadeIn(500);
              vO40.kf.rn.stop();
              vO40.kf.rn.fadeOut(50);
              vO40.kf.tn.stop();
              vO40.kf.tn.fadeOut(50);
              vO40.kf.un_error.stop();
              vO40.kf.un_error.fadeOut(50);
              vO40.kf.mn.stop();
              vO40.kf.mn.fadeIn(1);
              vO40.kf.bgcanvas.stop();
              vO40.kf.bgcanvas.fadeIn(500);
              vO40.GameView.Kf(true);
              vO40.kf.socialButtons.stop();
              vO40.kf.socialButtons.fadeOut(50);
              vO40.kf.vn.stop();
              vO40.kf.vn.fadeOut(50);
            };
            v788.prototype.Hk = function () {
              f148().Ci.pe(vO40.ge.je.ie);
            };
            v788.prototype.Bk = function () {};
            v788.prototype.Kn = function () {
              this.Ln("", 0);
              v$15.stop();
              v$15.fadeIn(100);
            };
            v788.prototype.Mn = function () {
              v$15.stop();
              v$15.fadeOut(100);
            };
            v788.prototype.Ln = function (p1038, p1039) {
              if (this.Jn !== p1038) {
                this.Jn = p1038;
              }
              var v789 = vO42.P(Math.floor(p1039 * 100), 0, 100);
              if (this.In !== v789) {
                v$16.css({
                  width: v789 + "%"
                });
                v$17.html(v789 + " %");
              }
            };
            return v788;
          }();
          vO40.Wj = function () {
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
            var v790 = vO42.M(vO40.kf, function () {
              vO40.kf.call(this, vO40.Fk.Ek);
              var vF1489 = f148();
              this.In = -1;
              this.Jn = "";
              this.Nn = new vO40.dm(v$24);
              v$30.click(function () {
                vF1489.Ci.Be();
              });
              v$24.click(function () {
                if (vF1489.Ij.Hj()) {
                  vF1489.Ci.Be();
                  vF1489.og.Ak(vF1489.og.ik);
                }
              });
              v$25.click(function () {
                vF1489.Ci.Be();
                vF1489.On.Ej();
              });
              v$26.click(function () {
                vF1489.Ci.Be();
                vF1489.On.Dj();
              });
              v$29.keypress(function (p1040) {
                if (p1040.keyCode == 13) {
                  vF1489.Pn(true);
                }
              });
              v$31.click(function () {
                vF1489.Ci.Be();
                vF1489.Pn(true);
              });
              v$32.click(function () {
                vF1489.Ci.Be();
                vF1489.Pn(true);
              });
              v$33.click(function () {
                vF1489.Ci.Be();
                vF1489.og.Ak(vF1489.og.fk);
              });
              v$37.click(function () {
                vF1489.Ci.Be();
                vF1489.og.Ak(vF1489.og.$h);
              });
              v$34.click(function () {
                if (vF1489.Ij.Hj()) {
                  vF1489.Ci.Be();
                  vF1489.og.Ak(vF1489.og.dk);
                }
              });
              v$36.click(function () {
                if (vF1489.Ij.Hj()) {
                  vF1489.Ci.Be();
                  vF1489.og.Ak(vF1489.og.bk);
                }
              });
              v$35.click(function () {
                if (vF1489.Ij.Hj()) {
                  vF1489.Ci.Be();
                  vF1489.og.Ak(vF1489.og.kk);
                }
              });
              v$38.click(function () {
                if (vF1489.Ij.Hj()) {
                  vF1489.Ci.Be();
                  vF1489.og.Ak(vF1489.og._j);
                }
              });
              this.Qn();
              this.Rn();
              var v791 = vO40.Vf.fg(vO40.Vf._f);
              if (v791 !== "ARENA" && v791 !== "TEAM2") {
                v791 = "ARENA";
              }
              v$30.val(v791);
            });
            v790.prototype.ha = function () {
              var vF14810 = f148();
              var vThis63 = this;
              vF14810.Ij.zl(function () {
                if (vF14810.Ij.Hj()) {
                  vF14810.On.Fj(vF14810.Ij.ml(), vO40.tj.sj);
                  vF14810.On.Fj(vF14810.Ij.nl(), vO40.tj.uj);
                  vF14810.On.Fj(vF14810.Ij.ol(), vO40.tj.vj);
                  vF14810.On.Fj(vF14810.Ij.pl(), vO40.tj.xj);
                  vF14810.On.Fj(vF14810.Ij.ql(), vO40.tj.wj);
                } else {
                  vF14810.On.Fj(vF14810.Sn(), vO40.tj.sj);
                  vF14810.On.Fj(0, vO40.tj.uj);
                  vF14810.On.Fj(0, vO40.tj.vj);
                  vF14810.On.Fj(0, vO40.tj.xj);
                  vF14810.On.Fj(0, vO40.tj.wj);
                }
              });
              vF14810.Ij.zl(function () {
                v$31.toggle(vF14810.Ij.Hj());
                v$33.toggle(!vF14810.Ij.Hj());
                v$34.toggle(true);
                v$32.toggle(!vF14810.Ij.Hj());
                v$37.toggle(true);
                v$36.toggle(vF14810.Ij.Hj());
                v$35.toggle(vF14810.Ij.Hj());
                v$38.toggle(vF14810.Ij.Hj());
                if (vF14810.Ij.Hj()) {
                  v$27.hide();
                  v$40.html(vF14810.Ij.dl());
                  v$39.attr("src", vF14810.Ij.fl());
                  v$41.html(vF14810.Ij.il());
                  v$42.width(vF14810.Ij.kl() * 100 / vF14810.Ij.ll() + "%");
                  v$43.html(vF14810.Ij.kl() + " / " + vF14810.Ij.ll());
                  v$44.html(vF14810.Ij.jl());
                  v$29.val(vF14810.Ij.el());
                } else {
                  v$27.toggle(vF22.xn && !vF14810.Tn());
                  v$40.html(v$40.data("guest"));
                  v$39.attr("src", vO42.a.e);
                  v$41.html("10");
                  v$42.width("0");
                  v$43.html("");
                  v$44.html(1);
                  v$29.val(vO40.Vf.fg(vO40.Vf.ag));
                }
              });
              vF14810.On.zj(function () {
                vThis63.Nn.$l(vF14810.On.yj());
              });
            };
            v790.prototype.Gk = function () {
              vO40.kf.jn.stop();
              vO40.kf.jn.fadeOut(50);
              vO40.kf.ln.stop();
              vO40.kf.ln.fadeOut(50);
              vO40.kf.nn.stop();
              vO40.kf.nn.fadeIn(500);
              vO40.kf.pn.stop();
              vO40.kf.pn.fadeOut(50);
              vO40.kf.sn.stop();
              vO40.kf.sn.fadeOut(50);
              vO40.kf.qn.stop();
              vO40.kf.qn.fadeOut(50);
              vO40.kf.rn.stop();
              vO40.kf.rn.fadeOut(50);
              vO40.kf.tn.stop();
              vO40.kf.tn.fadeOut(50);
              vO40.kf.un_error.stop();
              vO40.kf.un_error.fadeOut(50);
              vO40.kf.mn.stop();
              vO40.kf.mn.fadeIn(1);
              vO40.kf.bgcanvas.stop();
              vO40.kf.bgcanvas.fadeIn(500);
              vO40.GameView.Kf(true);
              vO40.kf.socialButtons.stop();
              vO40.kf.socialButtons.fadeIn(500);
              vO40.kf.vn.stop();
              vO40.kf.vn.fadeIn(500);
            };
            v790.prototype.Un = function () {
              v$18.fadeIn(500);
              v$19.fadeIn(500);
              v$20.fadeIn(500);
              v$21.fadeOut(100);
            };
            v790.prototype.Vn = function () {
              v$18.fadeOut(100);
              v$19.fadeOut(100);
              v$20.fadeOut(100);
              v$21.fadeIn(500);
            };
            v790.prototype.Ln = function (p1041, p1042) {
              if (this.Jn !== p1041) {
                this.Jn = p1041;
              }
              var v792 = vO42.P(Math.floor(p1042 * 100), 0, 100);
              if (this.In !== v792) {
                v$22.css({
                  width: v792 + "%"
                });
                v$23.html(v792 + " %");
              }
            };
            v790.prototype.Hk = function () {
              f148().Ci.Ce();
              this.Nn.Kf(true);
            };
            v790.prototype.Bk = function () {
              this.Nn.Kf(false);
            };
            v790.prototype.Jf = function () {
              this.Nn.Jf();
            };
            v790.prototype.Nf = function (p1043, p1044) {
              this.Nn.Nf();
            };
            v790.prototype.el = function () {
              return v$29.val();
            };
            v790.prototype.Wn = function () {
              return v$30.val();
            };
            v790.prototype.Qn = function () {};
            v790.prototype.Rn = function () {
              function f241() {
                vF14811.Xn(true);
                setTimeout(function () {
                  v$27.hide();
                }, 3000);
              }
              var vF14811 = f148();
              if (vF22.xn && !vF14811.Tn()) {
                v$27.show();
                var v793 = vO42.H("index.game.main.menu.unlockSkins.share");
                var vEncodeURIComponent = encodeURIComponent(vO42.H("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
                var vEncodeURIComponent2 = encodeURIComponent(vO42.H("index.game.main.menu.unlockSkins.comeAndPlay"));
                v$28.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + v793 + "</span></a>").click(f241));
                v$28.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + v793 + "</span></a>").click(f241));
              }
            };
            return v790;
          }();
          vO40.yk = function () {
            var v794 = vO42.M(vO40.kf, function () {
              vO40.kf.call(this, vO40.Fk.wn);
            });
            v794.prototype.ha = function () {};
            v794.prototype.Gk = function () {
              vO40.kf.jn.stop();
              vO40.kf.jn.fadeOut(50);
              vO40.kf.ln.stop();
              vO40.kf.ln.fadeOut(50);
              vO40.kf.nn.stop();
              vO40.kf.nn.fadeOut(50);
              vO40.kf.pn.stop();
              vO40.kf.pn.fadeOut(50);
              vO40.kf.sn.stop();
              vO40.kf.sn.fadeOut(50);
              vO40.kf.qn.stop();
              vO40.kf.qn.fadeOut(50);
              vO40.kf.rn.stop();
              vO40.kf.rn.fadeOut(50);
              vO40.kf.tn.stop();
              vO40.kf.tn.fadeOut(50);
              vO40.kf.un_error.stop();
              vO40.kf.un_error.fadeOut(50);
              vO40.kf.mn.stop();
              vO40.kf.mn.fadeOut(1);
              vO40.kf.bgcanvas.stop();
              vO40.kf.bgcanvas.fadeOut(50);
              vO40.GameView.Kf(false);
              vO40.kf.socialButtons.stop();
              vO40.kf.socialButtons.fadeOut(50);
              vO40.kf.vn.stop();
              vO40.kf.vn.fadeOut(50);
            };
            return v794;
          }();
          vO40.pk = function () {
            var v795 = vO42.M(vO40.kf, function () {
              vO40.kf.call(this, vO40.Fk.wn);
            });
            v795.prototype.ha = function () {};
            v795.prototype.Gk = function () {
              vO40.kf.jn.stop();
              vO40.kf.jn.fadeOut(50);
              vO40.kf.ln.stop();
              vO40.kf.ln.fadeOut(50);
              vO40.kf.nn.stop();
              vO40.kf.nn.fadeOut(50);
              vO40.kf.pn.stop();
              vO40.kf.pn.fadeOut(50);
              vO40.kf.sn.stop();
              vO40.kf.sn.fadeOut(50);
              vO40.kf.qn.stop();
              vO40.kf.qn.fadeOut(50);
              vO40.kf.rn.stop();
              vO40.kf.rn.fadeIn(500);
              vO40.kf.tn.stop();
              vO40.kf.tn.fadeOut(50);
              vO40.kf.un_error.stop();
              vO40.kf.un_error.fadeOut(50);
              vO40.kf.mn.stop();
              vO40.kf.mn.fadeIn(1);
              vO40.kf.bgcanvas.stop();
              vO40.kf.bgcanvas.fadeIn(500);
              vO40.GameView.Kf(true);
              vO40.kf.socialButtons.stop();
              vO40.kf.socialButtons.fadeOut(50);
              vO40.kf.vn.stop();
              vO40.kf.vn.fadeOut(50);
            };
            v795.prototype.Hk = function () {};
            return v795;
          }();
          vO40.rk = function () {
            var v$45 = $("#toaster-stack");
            var v796 = vO42.M(vO40.kf, function () {
              vO40.kf.call(this, vO40.Fk.wn);
              this.Yn = [];
              this.Zn = null;
            });
            v796.prototype.ha = function () {};
            v796.prototype.Gk = function () {
              vO40.kf.jn.stop();
              vO40.kf.jn.fadeOut(50);
              vO40.kf.ln.stop();
              vO40.kf.ln.fadeOut(50);
              vO40.kf.nn.stop();
              vO40.kf.nn.fadeOut(50);
              vO40.kf.pn.stop();
              vO40.kf.pn.fadeOut(50);
              vO40.kf.sn.stop();
              vO40.kf.sn.fadeIn(500);
              vO40.kf.qn.stop();
              vO40.kf.qn.fadeOut(50);
              vO40.kf.rn.stop();
              vO40.kf.rn.fadeOut(50);
              vO40.kf.tn.stop();
              vO40.kf.tn.fadeOut(50);
              vO40.kf.un_error.stop();
              vO40.kf.un_error.fadeOut(50);
              vO40.kf.mn.stop();
              vO40.kf.mn.fadeIn(1);
              vO40.kf.bgcanvas.stop();
              vO40.kf.bgcanvas.fadeIn(500);
              vO40.GameView.Kf(true);
              vO40.kf.socialButtons.stop();
              vO40.kf.socialButtons.fadeOut(50);
              vO40.kf.vn.stop();
              vO40.kf.vn.fadeIn(500);
            };
            v796.prototype.Hk = function () {
              this.$n();
            };
            v796.prototype.Kk = function () {
              return this.Zn != null || this.Yn.length > 0;
            };
            v796.prototype._n = function (p1045) {
              this.Yn.unshift(p1045);
              setTimeout(function () {
                f148().og.Ik();
              }, 0);
            };
            v796.prototype.El = function (p1046) {
              this.Yn.push(p1046);
              setTimeout(function () {
                f148().og.Ik();
              }, 0);
            };
            v796.prototype.$n = function () {
              var vThis64 = this;
              if (this.Zn == null) {
                if (this.Yn.length == 0) {
                  f148().og.Dk();
                  return;
                }
                var v797 = this.Yn.shift();
                this.Zn = v797;
                var v798 = v797.tf();
                v798.hide();
                v798.fadeIn(300);
                v$45.append(v798);
                v797.ao = function () {
                  v798.fadeOut(300);
                  setTimeout(function () {
                    v798.remove();
                  }, 300);
                  if (vThis64.Zn == v797) {
                    vThis64.Zn = null;
                  }
                  vThis64.$n();
                };
                v797.Hk();
              }
            };
            return v796;
          }();
          vO40.Fk = {
            wn: 0,
            Ek: 1
          };
          vO40.bo = function () {
            var v$46 = $("#popup-menu-label");
            var v$47 = $("#popup-menu-coins-box");
            var v$48 = $("#popup-menu-coins-val");
            $("#popup-menu-back").click(function () {
              var vF14812 = f148();
              vF14812.Ci.Be();
              vF14812.og.Dk();
            });
            v$47.click(function () {
              var vF14813 = f148();
              if (vF14813.Ij.Hj()) {
                vF14813.Ci.Be();
                vF14813.og.Ak(vF14813.og._j);
              }
            });
            var v799 = vO42.M(vO40.kf, function (p1047, p1048) {
              vO40.kf.call(this, vO40.Fk.Ek);
              this.ma = p1047;
              this.co = p1048;
              this.do = [];
            });
            v799.prototype.ha = function () {
              v799.parent.prototype.ha.call(this);
              if (!v799.eo) {
                v799.eo = true;
                var vF14814 = f148();
                vF14814.Ij.zl(function () {
                  if (vF14814.Ij.Hj()) {
                    v$48.html(vF14814.Ij.il());
                  } else {
                    v$48.html("0");
                  }
                });
              }
              vO40.bo.fo.stop();
              vO40.bo.fo.fadeOut(100);
            };
            v799.go = $("#coins-view");
            v799.ho = $("#leaders-view");
            v799.io = $("#profile-view");
            v799.jo = $("#settings-view");
            v799.ko = $("#login-view");
            v799.lo = $("#skins-view");
            v799.mo = $("#store-view");
            v799.no = $("#wear-view");
            v799.oo = $("#withdraw-consent-view");
            v799.po = $("#delete-account-view");
            v799.fo = $("#please-wait-view");
            v799.prototype.Gk = function () {
              vO40.kf.jn.stop();
              vO40.kf.jn.fadeOut(200);
              vO40.kf.ln.stop();
              vO40.kf.ln.fadeOut(200);
              vO40.kf.nn.stop();
              vO40.kf.nn.fadeOut(200);
              vO40.kf.pn.stop();
              vO40.kf.pn.fadeIn(200);
              vO40.kf.sn.stop();
              vO40.kf.sn.fadeOut(200);
              vO40.kf.qn.stop();
              vO40.kf.qn.fadeOut(200);
              vO40.kf.rn.stop();
              vO40.kf.rn.fadeOut(200);
              vO40.kf.tn.stop();
              vO40.kf.tn.fadeOut(200);
              vO40.kf.un_error.stop();
              vO40.kf.un_error.fadeOut(200);
              vO40.kf.mn.stop();
              vO40.kf.mn.fadeIn(1);
              vO40.kf.bgcanvas.stop();
              vO40.kf.bgcanvas.fadeIn(500);
              vO40.GameView.Kf(true);
              vO40.kf.socialButtons.stop();
              vO40.kf.socialButtons.fadeIn(200);
              vO40.kf.vn.stop();
              vO40.kf.vn.fadeIn(200);
              v$46.html(this.ma);
              v$47.toggle(this.co);
              this.qo();
            };
            v799.prototype.qo = function () {};
            v799.prototype.ro = function (p1049) {
              var vThis65 = this;
              var v800 = vO42.V(0, 2147483647) & 2147483647;
              this.do.push(v800);
              vO40.bo.fo.stop();
              vO40.bo.fo.fadeIn(100);
              setTimeout(function () {
                vThis65.so(v800);
              }, p1049);
              return new vF18(this, v800);
            };
            v799.prototype.so = function (p1050) {
              var v801 = this.do.indexOf(p1050);
              if (!(v801 < 0)) {
                this.do.splice(v801, 1);
                if (this.do.length === 0) {
                  vO40.bo.fo.stop();
                  vO40.bo.fo.fadeOut(100);
                }
              }
            };
            return v799;
          }();
          var vF18 = function () {
            function f242(p1051, p1052) {
              this.to = p1051;
              this.uo = p1052;
            }
            f242.prototype.vo = function () {
              this.to.so(this.uo);
            };
            return f242;
          }();
          vO40.ak = function () {
            var v$49 = $("#store-buy-coins_125000");
            var v$50 = $("#store-buy-coins_50000");
            var v$51 = $("#store-buy-coins_16000");
            var v$52 = $("#store-buy-coins_7000");
            var v$53 = $("#store-buy-coins_3250");
            var v$54 = $("#store-buy-coins_1250");
            var v802 = vO42.M(vO40.bo, function () {
              vO40.bo.call(this, vO42.H("index.game.popup.menu.coins.tab"), false);
              var vF14815 = f148();
              var vThis66 = this;
              v$49.click(function () {
                vF14815.Ci.Be();
                vThis66.wo("coins_125000");
              });
              v$50.click(function () {
                vF14815.Ci.Be();
                vThis66.wo("coins_50000");
              });
              v$51.click(function () {
                vF14815.Ci.Be();
                vThis66.wo("coins_16000");
              });
              v$52.click(function () {
                vF14815.Ci.Be();
                vThis66.wo("coins_7000");
              });
              v$53.click(function () {
                vF14815.Ci.Be();
                vThis66.wo("coins_3250");
              });
              v$54.click(function () {
                vF14815.Ci.Be();
                vThis66.wo("coins_1250");
              });
            });
            v802.prototype.ha = function () {
              v802.parent.prototype.ha.call(this);
            };
            v802.prototype.qo = function () {
              vO40.bo.go.stop();
              vO40.bo.go.fadeIn(200);
              vO40.bo.ho.stop();
              vO40.bo.ho.fadeOut(50);
              vO40.bo.io.stop();
              vO40.bo.io.fadeOut(50);
              vO40.bo.ko.stop();
              vO40.bo.ko.fadeOut(50);
              vO40.bo.jo.stop();
              vO40.bo.jo.fadeOut(50);
              vO40.bo.lo.stop();
              vO40.bo.lo.fadeOut(50);
              vO40.bo.mo.stop();
              vO40.bo.mo.fadeOut(50);
              vO40.bo.no.stop();
              vO40.bo.no.fadeOut(50);
              vO40.bo.oo.stop();
              vO40.bo.oo.fadeOut(50);
              vO40.bo.po.stop();
              vO40.bo.po.fadeOut(50);
            };
            v802.prototype.Hk = function () {
              f148().Ci.Ce();
            };
            v802.prototype.wo = function (p1053) {};
            return v802;
          }();
          vO40.ck = function () {
            var v$55 = $("#highscore-table");
            var v$56 = $("#leaders-button-level");
            var v$57 = $("#leaders-button-highscore");
            var v$58 = $("#leaders-button-kills");
            var v803 = vO42.M(vO40.bo, function () {
              vO40.bo.call(this, vO42.H("index.game.popup.menu.leaders.tab"), true);
              var vF14816 = f148();
              var vThis67 = this;
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
                vF14816.Ci.Be();
                vThis67.Eo(vThis67.yo.zo);
              });
              v$57.click(function () {
                vF14816.Ci.Be();
                vThis67.Eo(vThis67.yo.Co);
              });
              v$58.click(function () {
                vF14816.Ci.Be();
                vThis67.Eo(vThis67.yo.Do);
              });
            });
            v803.prototype.ha = function () {
              v803.parent.prototype.ha.call(this);
            };
            v803.prototype.qo = function () {
              vO40.bo.go.stop();
              vO40.bo.go.fadeOut(50);
              vO40.bo.ho.stop();
              vO40.bo.ho.fadeIn(200);
              vO40.bo.io.stop();
              vO40.bo.io.fadeOut(50);
              vO40.bo.ko.stop();
              vO40.bo.ko.fadeOut(50);
              vO40.bo.jo.stop();
              vO40.bo.jo.fadeOut(50);
              vO40.bo.lo.stop();
              vO40.bo.lo.fadeOut(50);
              vO40.bo.mo.stop();
              vO40.bo.mo.fadeOut(50);
              vO40.bo.no.stop();
              vO40.bo.no.fadeOut(50);
              vO40.bo.oo.stop();
              vO40.bo.oo.fadeOut(50);
              vO40.bo.po.stop();
              vO40.bo.po.fadeOut(50);
            };
            v803.prototype.Hk = function () {
              var vThis68 = this;
              f148().Ci.Ce();
              var v804 = this.ro(5000);
              var v805 = vO42.a.b + "/pub/leaders";
              vO42.Z(v805, function () {
                vThis68.xo = {
                  byLevel: [],
                  byHighScore: [],
                  byKillsAndHeadShots: []
                };
                vThis68.Eo(vThis68.Fo ?? vThis68.yo.zo);
                v804.vo();
              }, function (p1054) {
                vThis68.xo = p1054;
                vThis68.Eo(vThis68.Fo ?? vThis68.yo.zo);
                v804.vo();
              });
            };
            v803.prototype.Eo = function (p1055) {
              this.Fo = p1055;
              for (var v806 in this.yo) {
                if (this.yo.hasOwnProperty(v806)) {
                  var v807 = this.yo[v806];
                  v807.Ao.removeClass("pressed");
                }
              }
              this.Fo.Ao.addClass("pressed");
              for (var v808 = this.xo[this.Fo.Bo], vLS11 = "", vLN0124 = 0; vLN0124 < v808.length; vLN0124++) {
                var v809 = v808[vLN0124];
                vLS11 += "<div class=\"table-row\"><span>" + (vLN0124 + 1) + "</span><span><img src=\"" + v809.avatarUrl + "\"/></span><span>" + v809.username + "</span><span>" + v809.level + "</span><span>" + v809.highScore + "</span><span>" + v809.headShots + " / " + v809.kills + "</span></div>";
              }
              v$55.empty();
              v$55.append(vLS11);
            };
            return v803;
          }();
          vO40.gk = function () {
            var v$59 = $("#popup-login-gg");
            var v$60 = $("#popup-login-fb");
            var v810 = vO42.M(vO40.bo, function () {
              var vThis69 = this;
              vO40.bo.call(this, vO42.H("index.game.popup.menu.login.tab"), false);
              var vF14817 = f148();
              v$59.click(function () {
                vF14817.Ci.Be();
                var v811 = vThis69.ro(10000);
                setTimeout(function () {
                  vF14817.Ij.Ml(function () {
                    if (vF14817.Ij.Hj()) {
                      vF14817.Ci.Fe();
                    }
                    v811.vo();
                  });
                }, 500);
              });
              v$60.click(function () {
                vF14817.Ci.Be();
                var v812 = vThis69.ro(10000);
                setTimeout(function () {
                  vF14817.Ij.Jl(function () {
                    if (vF14817.Ij.Hj()) {
                      vF14817.Ci.Fe();
                    }
                    v812.vo();
                  });
                }, 500);
              });
            });
            v810.prototype.ha = function () {
              v810.parent.prototype.ha.call(this);
            };
            v810.prototype.qo = function () {
              vO40.bo.go.stop();
              vO40.bo.go.fadeOut(50);
              vO40.bo.ho.stop();
              vO40.bo.ho.fadeOut(50);
              vO40.bo.io.stop();
              vO40.bo.io.fadeOut(50);
              vO40.bo.ko.stop();
              vO40.bo.ko.fadeIn(200);
              vO40.bo.jo.stop();
              vO40.bo.jo.fadeOut(50);
              vO40.bo.lo.stop();
              vO40.bo.lo.fadeOut(50);
              vO40.bo.mo.stop();
              vO40.bo.mo.fadeOut(50);
              vO40.bo.no.stop();
              vO40.bo.no.fadeOut(50);
              vO40.bo.oo.stop();
              vO40.bo.oo.fadeOut(50);
              vO40.bo.po.stop();
              vO40.bo.po.fadeOut(50);
            };
            v810.prototype.Hk = function () {
              f148().Ci.Ce();
            };
            return v810;
          }();
          vO40.ek = function () {
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
            var v813 = vO42.M(vO40.bo, function () {
              vO40.bo.call(this, vO42.H("index.game.popup.menu.profile.tab"), true);
            });
            v813.prototype.ha = function () {
              v813.parent.prototype.ha.call(this);
            };
            v813.prototype.qo = function () {
              vO40.bo.go.stop();
              vO40.bo.go.fadeOut(50);
              vO40.bo.ho.stop();
              vO40.bo.ho.fadeOut(50);
              vO40.bo.io.stop();
              vO40.bo.io.fadeIn(200);
              vO40.bo.ko.stop();
              vO40.bo.ko.fadeOut(50);
              vO40.bo.jo.stop();
              vO40.bo.jo.fadeOut(50);
              vO40.bo.lo.stop();
              vO40.bo.lo.fadeOut(50);
              vO40.bo.mo.stop();
              vO40.bo.mo.fadeOut(50);
              vO40.bo.no.stop();
              vO40.bo.no.fadeOut(50);
              vO40.bo.oo.stop();
              vO40.bo.oo.fadeOut(50);
              vO40.bo.po.stop();
              vO40.bo.po.fadeOut(50);
            };
            v813.prototype.Hk = function () {
              var vF14818 = f148();
              vF14818.Ci.Ce();
              var v814 = vF14818.Ij.xl();
              var v815 = moment([v814.year, v814.month - 1, v814.day]).format("LL");
              v$62.html(vF14818.Ij.dl());
              v$61.attr("src", vF14818.Ij.fl());
              v$63.width(vF14818.Ij.kl() * 100 / vF14818.Ij.ll() + "%");
              v$64.html(vF14818.Ij.kl() + " / " + vF14818.Ij.ll());
              v$65.html(vF14818.Ij.jl());
              v$66.html(vF14818.Ij.rl());
              v$67.html(vO42.J(vF14818.Ij.sl()));
              v$68.html(vF14818.Ij.tl());
              v$69.html(vF14818.Ij.ul());
              v$70.html(vF14818.Ij.vl());
              v$71.html(vO42.J(vF14818.Ij.wl()));
              v$72.html(v815);
            };
            return v813;
          }();
          vO40.hk = function () {
            var v$73 = $("#settings-music-enabled-switch");
            var v$74 = $("#settings-sfx-enabled-switch");
            var v$75 = $("#settings-show-names-switch");
            var v$76 = $("#popup-logout");
            var v$77 = $("#popup-logout-container");
            var v$78 = $("#popup-delete-account");
            var v$79 = $("#popup-delete-account-container");
            var v$80 = $("#popup-withdraw-consent");
            var v816 = vO42.M(vO40.bo, function () {
              vO40.bo.call(this, vO42.H("index.game.popup.menu.settings.tab"), false);
              var vThis70 = this;
              var vF14819 = f148();
              v$73.click(function () {
                var v817 = !!v$73.prop("checked");
                vO40.Vf.eg(vO40.Vf.Yf, v817, 30);
                vF14819.Ci.re(v817);
                vF14819.Ci.Be();
              });
              v$74.click(function () {
                var v818 = !!v$74.prop("checked");
                vO40.Vf.eg(vO40.Vf.Zf, v818, 30);
                vF14819.Ci.oe(v818);
                vF14819.Ci.Be();
              });
              v$75.click(function () {
                vF14819.Ci.Be();
              });
              v$76.click(function () {
                vF14819.Ci.Be();
                vThis70.ro(500);
                vF14819.Ij.Kl();
              });
              v$78.click(function () {
                if (vF14819.Ij.Hj()) {
                  vF14819.Ci.Be();
                  vF14819.og.Ak(vF14819.og.Zj);
                } else {
                  vF14819.Ci.Ge();
                }
              });
              v$80.click(function () {
                if (vF14819.Go()) {
                  vF14819.Ci.Be();
                  vF14819.og.Ak(vF14819.og.Xj);
                } else {
                  vF14819.Ci.Ge();
                }
              });
            });
            v816.prototype.ha = function () {
              v816.parent.prototype.ha.call(this);
              var vF14820 = f148();
              var vUndefined17 = undefined;
              switch (vO40.Vf.fg(vO40.Vf.Yf)) {
                case "false":
                  vUndefined17 = false;
                  break;
                default:
                  vUndefined17 = true;
              }
              v$73.prop("checked", vUndefined17);
              vF14820.Ci.re(vUndefined17);
              var vUndefined18 = undefined;
              switch (vO40.Vf.fg(vO40.Vf.Zf)) {
                case "false":
                  vUndefined18 = false;
                  break;
                default:
                  vUndefined18 = true;
              }
              v$74.prop("checked", vUndefined18);
              vF14820.Ci.oe(vUndefined18);
              var vUndefined19 = undefined;
              switch (vO40.Vf.fg(vO40.Vf.Xf)) {
                case "false":
                  vUndefined19 = false;
                  break;
                default:
                  vUndefined19 = true;
              }
              v$75.prop("checked", vUndefined19);
              vF14820.Ij.yl(function () {
                v$77.toggle(vF14820.Ij.Hj());
                v$79.toggle(vF14820.Ij.Hj());
              });
            };
            v816.prototype.qo = function () {
              vO40.bo.go.stop();
              vO40.bo.go.fadeOut(50);
              vO40.bo.ho.stop();
              vO40.bo.ho.fadeOut(50);
              vO40.bo.io.stop();
              vO40.bo.io.fadeOut(50);
              vO40.bo.ko.stop();
              vO40.bo.ko.fadeOut(50);
              vO40.bo.jo.stop();
              vO40.bo.jo.fadeIn(200);
              vO40.bo.lo.stop();
              vO40.bo.lo.fadeOut(50);
              vO40.bo.mo.stop();
              vO40.bo.mo.fadeOut(50);
              vO40.bo.no.stop();
              vO40.bo.no.fadeOut(50);
              vO40.bo.oo.stop();
              vO40.bo.oo.fadeOut(50);
              vO40.bo.po.stop();
              vO40.bo.po.fadeOut(50);
            };
            v816.prototype.Hk = function () {
              var vF14821 = f148();
              vF14821.Ci.Ce();
              if (vF14821.Go()) {
                v$80.show();
              } else {
                v$80.hide();
              }
            };
            v816.prototype.Zh = function () {
              return v$75.prop("checked");
            };
            return v816;
          }();
          vO40.jk = function () {
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
            var v819 = vO42.M(vO40.bo, function () {
              vO40.bo.call(this, vO42.H("index.game.popup.menu.skins.tab"), true);
              var vThis71 = this;
              var vF14822 = f148();
              this.Ho = null;
              this.Io = [];
              this.Jo = {};
              this.Ko = new vO40.dm(v$81);
              v$86.click(function () {
                vF14822.Ci.Be();
                vThis71.Lo();
              });
              v$89.click(function () {
                vF14822.Ci.Be();
                vThis71.Ho.Mo();
              });
              v$90.click(function () {
                vF14822.Ci.Be();
                vThis71.Ho.No();
              });
            });
            v819.prototype.ha = function () {
              v819.parent.prototype.ha.call(this);
              var vThis72 = this;
              var vF14823 = f148();
              vF14823.Lc.$b(function () {
                var v820 = vF14823.Lc.Xb();
                vThis72.Io = [];
                for (var vLN0125 = 0; vLN0125 < v820.skinGroupArrayDict.length; vLN0125++) {
                  vThis72.Io.push(new vF20(vThis72, v820.skinGroupArrayDict[vLN0125]));
                }
                vThis72.Jo = {};
                for (var vLN0126 = 0; vLN0126 < v820.skinArrayDict.length; vLN0126++) {
                  var v821 = v820.skinArrayDict[vLN0126];
                  vThis72.Jo[v821.id] = v821;
                }
                vThis72.Oo();
              });
              this.Po(false);
              vF14823.On.zj(function () {
                vThis72.Po(false);
              });
            };
            v819.prototype.qo = function () {
              vO40.bo.go.stop();
              vO40.bo.go.fadeOut(50);
              vO40.bo.ho.stop();
              vO40.bo.ho.fadeOut(50);
              vO40.bo.io.stop();
              vO40.bo.io.fadeOut(50);
              vO40.bo.ko.stop();
              vO40.bo.ko.fadeOut(50);
              vO40.bo.jo.stop();
              vO40.bo.jo.fadeOut(50);
              vO40.bo.lo.stop();
              vO40.bo.lo.fadeIn(200);
              vO40.bo.mo.stop();
              vO40.bo.mo.fadeOut(50);
              vO40.bo.no.stop();
              vO40.bo.no.fadeOut(50);
              vO40.bo.oo.stop();
              vO40.bo.oo.fadeOut(50);
              vO40.bo.po.stop();
              vO40.bo.po.fadeOut(50);
            };
            v819.prototype.Hk = function () {
              f148().Ci.pe(vO40.ge.je._e);
              f148().Ci.Ce();
              this.Oo();
              this.Ko.Kf(true);
            };
            v819.prototype.Bk = function () {
              this.Ko.Kf(false);
            };
            v819.prototype.Jf = function () {
              this.Ko.Jf();
            };
            v819.prototype.Nf = function (p1056, p1057) {
              this.Ko.Nf();
            };
            v819.prototype.Oo = function () {
              var vThis73 = this;
              var vThis74 = this;
              var vF14824 = f148();
              v$88.empty();
              for (var vLN0127 = 0; vLN0127 < this.Io.length; vLN0127++) {
                (function (p1058) {
                  var v822 = vThis73.Io[p1058];
                  var v823 = document.createElement("li");
                  v$88.append(v823);
                  var v$91 = $(v823);
                  if (v822.To && v822.To.isCustom) {
                    v$91.css("background-color", "#FFF");
                    v$91.css("color", "#000");
                  }
                  v$91.html(v822.Qo());
                  v$91.click(function () {
                    vF14824.Ci.Be();
                    vThis74.Ro(v822);
                  });
                  v822.So = v$91;
                })(vLN0127);
              }
              if (this.Io.length > 0) {
                var v824 = vF14824.On.rj(vO40.tj.sj);
                for (var vLN0127 = 0; vLN0127 < this.Io.length; vLN0127++) {
                  var v825 = this.Io[vLN0127];
                  for (var v826 = v825.To.list, vLN0128 = 0; vLN0128 < v826.length; vLN0128++) {
                    if (v826[vLN0128] == v824) {
                      v825.Uo = vLN0128;
                      this.Ro(v825);
                      return;
                    }
                  }
                }
                this.Ro(this.Io[0]);
              }
            };
            v819.prototype.Ro = function (p1059) {
              var vF14825 = f148();
              if (this.Ho !== p1059) {
                this.Ho = p1059;
                v$88.children().removeClass("pressed");
                if (this.Ho.So) {
                  this.Ho.So.addClass("pressed");
                }
                v$83.html("");
                if (p1059.To != null) {
                  var v827 = vF14825.Lc.Xb().textDict[p1059.To.description];
                  if (v827 != null) {
                    v$83.html(vO42.K(vO42.I(v827)));
                  }
                }
                this.Po(true);
              }
            };
            v819.prototype.Vo = function () {
              if (this.Ho == null) {
                return vO40.Si.Ui();
              } else {
                return this.Ho.Wo();
              }
            };
            v819.prototype.Lo = function () {
              var vThis75 = this;
              var v828 = this.Vo();
              if (v828.Wi()) {
                var v829 = v828.bc();
                vThis75.Xo(v829);
              }
            };
            v819.prototype.Xo = function (p1060) {
              var vF14826 = f148();
              var v830 = vF14826.On.Gj(p1060, vO40.tj.sj);
              if (v830 != null) {
                var v831 = v830.Jj();
                if (!(vF14826.Ij.il() < v831)) {
                  var v832 = vF14826.On.rj(vO40.tj.sj);
                  var v833 = vF14826.On.rj(vO40.tj.uj);
                  var v834 = vF14826.On.rj(vO40.tj.vj);
                  var v835 = vF14826.On.rj(vO40.tj.xj);
                  var v836 = vF14826.On.rj(vO40.tj.wj);
                  var v837 = this.ro(5000);
                  vF14826.Ij.Hl(p1060, vO40.tj.sj, function () {
                    v837.vo();
                    vF14826.og.Ak(vF14826.og.tk);
                  }, function (p1061) {
                    vF14826.Ij.Bl(function () {
                      vF14826.On.Fj(v832, vO40.tj.sj);
                      vF14826.On.Fj(v833, vO40.tj.uj);
                      vF14826.On.Fj(v834, vO40.tj.vj);
                      vF14826.On.Fj(v835, vO40.tj.xj);
                      vF14826.On.Fj(v836, vO40.tj.wj);
                      vF14826.On.Fj(p1060, vO40.tj.sj);
                      v837.vo();
                    });
                  });
                }
              }
            };
            v819.prototype.Po = function (p1062) {
              var vF14827 = f148();
              var v838 = vF14827.On.yj();
              var v839 = this.Vo();
              if (v839.Wi()) {
                var v840 = v839.bc();
                var v841 = vF14827.On.Gj(v840, vO40.tj.sj);
                var v842 = false;
                var v843 = vF14827.On.Cj(v840, vO40.tj.sj);
                var v844 = true;
                if (v843) {
                  v$84.hide();
                  v$86.hide();
                } else if (v841 == null || v841.Kj()) {
                  v842 = true;
                  v$84.show();
                  v$86.hide();
                  v$85.text(vO42.H("index.game.popup.menu.store.locked"));
                  if (v841 != null && v841.Kj()) {
                    var v845 = vF14827.Lc.Xb().textDict[v841.Em()];
                    if (v845 != null) {
                      v$85.text(vO42.I(v845));
                    }
                  }
                } else {
                  v844 = false;
                  v$84.hide();
                  v$86.show();
                  v$87.html(v841.Jj());
                }
                v$82.html("");
                var v846 = vF14827.Lc.Xb().textDict[v841.Fm()];
                var v847 = v846 ? vO42.K(vO42.I(v846)) : v841.Fm();
                if (v841 != null && v841.Fm() != null) {
                  v$82.html(v847);
                }
                if (v844 && v841.Bm !== true) {
                  v$2.html(`<button onclick="mbf.mbf_cambiar_add('${v840}', '${v847}')">Add</button>`);
                } else {
                  v$2.html("");
                }
                this.Ko.$l(v838.Um(v840));
                this.Ko.um(v842);
                if (p1062) {
                  vF14827.On.Fj(v840, vO40.tj.sj);
                }
              }
            };
            var vF20 = function () {
              function f243(p1063, p1064) {
                this.Yo = p1063;
                this.Uo = 0;
                this.To = p1064;
              }
              f243.prototype.Mo = function () {
                if (--this.Uo < 0) {
                  this.Uo = this.To.list.length - 1;
                }
                this.Yo.Po(true);
              };
              f243.prototype.No = function () {
                if (++this.Uo >= this.To.list.length) {
                  this.Uo = 0;
                }
                this.Yo.Po(true);
              };
              f243.prototype.Qo = function () {
                if (this.To.img) {
                  var v848 = f148().Lc.Xb().customPaths;
                  var v849 = URL_CDN + "/images/" + v848.texture;
                  var vA20 = [];
                  try {
                    vA20.push(`background-image:url('${v849}')`);
                    vA20.push(`background-position: -${v848.map[this.To.img].x}px -${v848.map[this.To.img].y}px`);
                    vA20.push("background-repeat:no-repeat");
                    vA20.push("width: 180px");
                    vA20.push("height: 40px");
                  } catch (e33) {
                    console.error(v849, e33);
                  }
                  return `<div id="${this.To.id}" style="${vA20.join(";")}"></div>`;
                }
                return vO42.I(this.To.name);
              };
              f243.prototype.Wo = function () {
                if (this.Uo >= this.To.list.length) {
                  return vO40.Si.Ui();
                } else {
                  return vO40.Si.Vi(this.To.list[this.Uo]);
                }
              };
              return f243;
            }();
            return v819;
          }();
          vO40.lk = function () {
            var v$92 = $("#store-go-coins-button");
            var v$93 = $("#store-go-skins-button");
            var v$94 = $("#store-go-wear-button");
            var v850 = vO42.M(vO40.bo, function () {
              vO40.bo.call(this, vO42.H("index.game.popup.menu.store.tab"), true);
              var vF14828 = f148();
              v$92.click(function () {
                vF14828.Ci.Be();
                vF14828.og.Ak(vF14828.og._j);
              });
              v$93.click(function () {
                vF14828.Ci.Be();
                vF14828.og.Ak(vF14828.og.ik);
              });
              v$94.click(function () {
                vF14828.Ci.Be();
                vF14828.og.Ak(vF14828.og.mk);
              });
            });
            v850.prototype.ha = function () {
              v850.parent.prototype.ha.call(this);
            };
            v850.prototype.qo = function () {
              vO40.bo.go.stop();
              vO40.bo.go.fadeOut(50);
              vO40.bo.ho.stop();
              vO40.bo.ho.fadeOut(50);
              vO40.bo.io.stop();
              vO40.bo.io.fadeOut(50);
              vO40.bo.ko.stop();
              vO40.bo.ko.fadeOut(50);
              vO40.bo.jo.stop();
              vO40.bo.jo.fadeOut(50);
              vO40.bo.lo.stop();
              vO40.bo.lo.fadeOut(50);
              vO40.bo.mo.stop();
              vO40.bo.mo.fadeIn(200);
              vO40.bo.no.stop();
              vO40.bo.no.fadeOut(50);
              vO40.bo.oo.stop();
              vO40.bo.oo.fadeOut(50);
              vO40.bo.po.stop();
              vO40.bo.po.fadeOut(50);
            };
            v850.prototype.Hk = function () {
              f148().Ci.Ce();
            };
            return v850;
          }();
          vO40.nk = function () {
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
            var v851 = vO42.M(vO40.bo, function () {
              var vThis76 = this;
              vO40.bo.call(this, vO42.H("index.game.popup.menu.wear.tab"), true);
              var vF14829 = f148();
              var vThis77 = this;
              this.Zo = [];
              this.uj = new vF21(this, vO40.tj.uj, v$101);
              this.vj = new vF21(this, vO40.tj.vj, v$102);
              this.xj = new vF21(this, vO40.tj.xj, v$103);
              this.wj = new vF21(this, vO40.tj.wj, v$104);
              this.$o = null;
              this._o = null;
              this.ap = null;
              this.bp = null;
              this.cp = null;
              this.dp = null;
              this.Ko = new vO40.dm(v$95);
              v$99.click(function () {
                vF14829.Ci.Be();
                vThis77.ep();
              });
              v$106.click(function () {
                vF14829.Ci.Be();
                vThis77.$o.fp();
              });
              v$107.click(function () {
                vF14829.Ci.Be();
                vThis77.$o.gp();
              });
              v$101.click(function () {
                vF14829.Ci.Be();
                vThis77.hp(vThis76.uj);
              });
              v$102.click(function () {
                vF14829.Ci.Be();
                vThis77.hp(vThis76.vj);
              });
              v$103.click(function () {
                vF14829.Ci.Be();
                vThis77.hp(vThis76.xj);
              });
              v$104.click(function () {
                vF14829.Ci.Be();
                vThis77.hp(vThis76.wj);
              });
              this.Zo.push(this.uj);
              this.Zo.push(this.vj);
              this.Zo.push(this.xj);
              this.Zo.push(this.wj);
            });
            v851.prototype.ha = function () {
              v851.parent.prototype.ha.call(this);
              var vF14830 = f148();
              var vThis78 = this;
              vF14830.Lc.$b(function () {
                var v852 = vF14830.Lc.Xb();
                vThis78._o = v852.eyesDict;
                vThis78.ap = v852.mouthDict;
                vThis78.bp = v852.glassesDict;
                vThis78.cp = v852.hatDict;
                vThis78.dp = v852.colorDict;
                vThis78.uj.ip(v852.eyesVariantArray);
                vThis78.uj.jp(vThis78._o);
                vThis78.vj.ip(v852.mouthVariantArray);
                vThis78.vj.jp(vThis78.ap);
                vThis78.xj.ip(v852.glassesVariantArray);
                vThis78.xj.jp(vThis78.bp);
                vThis78.wj.ip(v852.hatVariantArray);
                vThis78.wj.jp(vThis78.cp);
              });
              this.Po(false);
              vF14830.On.zj(function () {
                vThis78.Po(false);
              });
            };
            v851.prototype.qo = function () {
              vO40.bo.go.stop();
              vO40.bo.go.fadeOut(50);
              vO40.bo.ho.stop();
              vO40.bo.ho.fadeOut(50);
              vO40.bo.io.stop();
              vO40.bo.io.fadeOut(50);
              vO40.bo.ko.stop();
              vO40.bo.ko.fadeOut(50);
              vO40.bo.jo.stop();
              vO40.bo.jo.fadeOut(50);
              vO40.bo.lo.stop();
              vO40.bo.lo.fadeOut(50);
              vO40.bo.mo.stop();
              vO40.bo.mo.fadeOut(50);
              vO40.bo.no.stop();
              vO40.bo.no.fadeIn(200);
              vO40.bo.oo.stop();
              vO40.bo.oo.fadeOut(50);
              vO40.bo.po.stop();
              vO40.bo.po.fadeOut(50);
            };
            v851.prototype.Hk = function () {
              f148().Ci.pe(vO40.ge.je._e);
              f148().Ci.Ce();
              this.hp(this.$o ?? this.uj);
              this.Ko.Kf(true);
            };
            v851.prototype.Bk = function () {
              this.Ko.Kf(false);
            };
            v851.prototype.Jf = function () {
              this.Ko.Jf();
            };
            v851.prototype.Nf = function (p1065, p1066) {
              this.Ko.Nf();
            };
            v851.prototype.hp = function (p1067) {
              this.$o = p1067;
              for (var vLN0129 = 0; vLN0129 < this.Zo.length; vLN0129++) {
                this.Zo[vLN0129].Ao.removeClass("pressed");
              }
              this.$o.Ao.addClass("pressed");
              this.$o.Gk();
            };
            v851.prototype.kp = function () {
              if (this.$o == null) {
                return vO40.Si.Ui();
              } else {
                return vO40.Si.Vi({
                  ae: this.$o.Wo(),
                  nd: this.$o.nd
                });
              }
            };
            v851.prototype.ep = function () {
              var vThis79 = this;
              var v853 = this.kp();
              if (v853.Wi()) {
                var v854 = v853.bc();
                vThis79.lp(v854.ae, v854.nd);
              }
            };
            v851.prototype.lp = function (p1068, p1069) {
              var vF14831 = f148();
              var v855 = vF14831.On.Gj(p1068, p1069);
              if (v855 != null) {
                var v856 = v855.Jj();
                if (!(vF14831.Ij.il() < v856)) {
                  var v857 = vF14831.On.rj(vO40.tj.sj);
                  var v858 = vF14831.On.rj(vO40.tj.uj);
                  var v859 = vF14831.On.rj(vO40.tj.vj);
                  var v860 = vF14831.On.rj(vO40.tj.xj);
                  var v861 = vF14831.On.rj(vO40.tj.wj);
                  var v862 = this.ro(5000);
                  vF14831.Ij.Hl(p1068, p1069, function () {
                    v862.vo();
                    vF14831.og.Ak(vF14831.og.tk);
                  }, function (p1070) {
                    vF14831.Ij.Bl(function () {
                      vF14831.On.Fj(v857, vO40.tj.sj);
                      vF14831.On.Fj(v858, vO40.tj.uj);
                      vF14831.On.Fj(v859, vO40.tj.vj);
                      vF14831.On.Fj(v860, vO40.tj.xj);
                      vF14831.On.Fj(v861, vO40.tj.wj);
                      vF14831.On.Fj(p1068, p1069);
                      v862.vo();
                    });
                  });
                }
              }
            };
            v851.prototype.Po = function (p1071) {
              var vF14832 = f148();
              var v863 = vF14832.On.yj();
              var v864 = this.kp();
              if (v864.Wi()) {
                var v865 = v864.bc();
                var v866 = vF14832.On.Gj(v865.ae, v865.nd);
                var v867 = false;
                if (vF14832.On.Cj(v865.ae, v865.nd)) {
                  v$97.hide();
                  v$99.hide();
                } else if (v866 == null || v866.Kj()) {
                  v867 = true;
                  v$97.show();
                  v$99.hide();
                  v$98.text(vO42.H("index.game.popup.menu.store.locked"));
                  if (v866 != null && v866.Kj()) {
                    var v868 = vF14832.Lc.Xb().textDict[v866.Em()];
                    if (v868 != null) {
                      v$98.text(vO42.I(v868));
                    }
                  }
                } else {
                  v$97.hide();
                  v$99.show();
                  v$100.html(v866.Jj());
                }
                v$96.html("");
                if (v866 != null && v866.Fm() != null) {
                  var v869 = vF14832.Lc.Xb().textDict[v866.Fm()];
                  if (v869 != null) {
                    v$96.html(vO42.K(vO42.I(v869)));
                  }
                }
                var v870 = this.Ko;
                switch (v865.nd) {
                  case vO40.tj.uj:
                    v870.$l(v863.Vm(v865.ae));
                    v870.vm(v867);
                    break;
                  case vO40.tj.vj:
                    v870.$l(v863.Wm(v865.ae));
                    v870.wm(v867);
                    break;
                  case vO40.tj.xj:
                    v870.$l(v863.Ym(v865.ae));
                    v870.ym(v867);
                    break;
                  case vO40.tj.wj:
                    v870.$l(v863.Xm(v865.ae));
                    v870.xm(v867);
                }
                if (p1071) {
                  vF14832.On.Fj(v865.ae, v865.nd);
                }
              }
            };
            var vF21 = function () {
              function f244(p1072, p1073, p1074) {
                this.Yo = p1072;
                this.nd = p1073;
                this.Ao = p1074;
                this.ac = {};
                this.mp = [[]];
                this.np = -10;
                this.op = -10;
              }
              f244.prototype.ip = function (p1075) {
                this.mp = p1075;
              };
              f244.prototype.jp = function (p1076) {
                this.ac = p1076;
              };
              f244.prototype.Gk = function () {
                var vF14833 = f148();
                var v871 = vF14833.On.rj(this.nd);
                for (var vLN0130 = 0; vLN0130 < this.mp.length; vLN0130++) {
                  for (var vLN0131 = 0; vLN0131 < this.mp[vLN0130].length; vLN0131++) {
                    if (this.mp[vLN0130][vLN0131] == v871) {
                      this.pp(vLN0130);
                      this.qp(vLN0131);
                      return;
                    }
                  }
                }
                this.pp(0);
                this.qp(0);
              };
              f244.prototype.fp = function () {
                var v872 = this.np - 1;
                if (v872 < 0) {
                  v872 = this.mp.length - 1;
                }
                this.pp(v872);
                this.qp(this.op % this.mp[v872].length);
              };
              f244.prototype.gp = function () {
                var v873 = this.np + 1;
                if (v873 >= this.mp.length) {
                  v873 = 0;
                }
                this.pp(v873);
                this.qp(this.op % this.mp[v873].length);
              };
              f244.prototype.pp = function (p1077) {
                var vThis80 = this;
                if (!(p1077 < 0) && !(p1077 >= this.mp.length)) {
                  this.np = p1077;
                  v$105.empty();
                  var v874 = this.mp[this.np];
                  if (v874.length > 1) {
                    for (var vLN0132 = 0; vLN0132 < v874.length; vLN0132++) {
                      (function (p1078) {
                        var v875 = v874[p1078];
                        var v876 = vThis80.ac[v875];
                        var v877 = "#" + vThis80.Yo.dp[v876.prime];
                        var v$108 = $("<div style=\"border-color:" + v877 + "\"></div>");
                        v$108.click(function () {
                          f148().Ci.Be();
                          vThis80.qp(p1078);
                        });
                        v$105.append(v$108);
                      })(vLN0132);
                    }
                  }
                }
              };
              f244.prototype.qp = function (p1079) {
                if (!(p1079 < 0) && !(p1079 >= this.mp[this.np].length)) {
                  this.op = p1079;
                  v$105.children().css("background-color", "transparent");
                  var v878 = v$105.children(":nth-child(" + (1 + p1079) + ")");
                  v878.css("background-color", v878.css("border-color"));
                  this.Yo.Po(true);
                }
              };
              f244.prototype.Wo = function () {
                return this.mp[this.np][this.op];
              };
              return f244;
            }();
            return v851;
          }();
          vO40.Yj = function () {
            var v$109 = $("#withdraw-consent-yes");
            var v$110 = $("#withdraw-consent-no");
            var v879 = vO42.M(vO40.bo, function () {
              vO40.bo.call(this, vO42.H("index.game.popup.menu.consent.tab"), false);
              var vF14834 = f148();
              v$109.click(function () {
                vF14834.Ci.Be();
                if (vF14834.Go()) {
                  vF14834.og.Ak(vF14834.og._e);
                  vF14834.rp(false, true);
                  vF14834.og.qk._n(new vO40.sp());
                } else {
                  vF14834.og.Dk();
                }
              });
              v$110.click(function () {
                vF14834.Ci.Be();
                vF14834.og.Dk();
              });
            });
            v879.prototype.ha = function () {
              v879.parent.prototype.ha.call(this);
            };
            v879.prototype.qo = function () {
              vO40.bo.go.stop();
              vO40.bo.go.fadeOut(50);
              vO40.bo.ho.stop();
              vO40.bo.ho.fadeOut(50);
              vO40.bo.io.stop();
              vO40.bo.io.fadeOut(50);
              vO40.bo.ko.stop();
              vO40.bo.ko.fadeOut(50);
              vO40.bo.jo.stop();
              vO40.bo.jo.fadeOut(50);
              vO40.bo.lo.stop();
              vO40.bo.lo.fadeOut(50);
              vO40.bo.mo.stop();
              vO40.bo.mo.fadeOut(50);
              vO40.bo.no.stop();
              vO40.bo.no.fadeOut(50);
              vO40.bo.oo.stop();
              vO40.bo.oo.fadeIn(200);
              vO40.bo.po.stop();
              vO40.bo.po.fadeOut(50);
            };
            v879.prototype.Hk = function () {
              f148().Ci.Ce();
            };
            return v879;
          }();
          vO40.$j = function () {
            var v$111 = $("#delete-account-timer");
            var v$112 = $("#delete-account-yes");
            var v$113 = $("#delete-account-no");
            var v880 = vO42.M(vO40.bo, function () {
              vO40.bo.call(this, vO42.H("index.game.popup.menu.delete.tab"), false);
              var vF14835 = f148();
              v$112.click(function () {
                vF14835.Ci.Be();
                if (vF14835.Ij.Hj()) {
                  vF14835.Ij.Sl();
                  vF14835.Ij.Kl();
                } else {
                  vF14835.og.Dk();
                }
              });
              v$113.click(function () {
                vF14835.Ci.Be();
                vF14835.og.Dk();
              });
              this.tp = [];
            });
            v880.prototype.ha = function () {
              v880.parent.prototype.ha.call(this);
            };
            v880.prototype.qo = function () {
              vO40.bo.go.stop();
              vO40.bo.go.fadeOut(50);
              vO40.bo.ho.stop();
              vO40.bo.ho.fadeOut(50);
              vO40.bo.io.stop();
              vO40.bo.io.fadeOut(50);
              vO40.bo.ko.stop();
              vO40.bo.ko.fadeOut(50);
              vO40.bo.jo.stop();
              vO40.bo.jo.fadeOut(50);
              vO40.bo.lo.stop();
              vO40.bo.lo.fadeOut(50);
              vO40.bo.mo.stop();
              vO40.bo.mo.fadeOut(50);
              vO40.bo.no.stop();
              vO40.bo.no.fadeOut(50);
              vO40.bo.oo.stop();
              vO40.bo.oo.fadeOut(50);
              vO40.bo.po.stop();
              vO40.bo.po.fadeIn(200);
            };
            v880.prototype.Hk = function () {
              f148().Ci.Ge();
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
            v880.prototype.vp = function (p1080, p1081) {
              var vSetTimeout2 = setTimeout(p1080, p1081);
              this.tp.push(vSetTimeout2);
            };
            v880.prototype.up = function () {
              for (var vLN0133 = 0; vLN0133 < this.tp.length; vLN0133++) {
                clearTimeout(this.tp[vLN0133]);
              }
              this.tp = [];
            };
            return v880;
          }();
          vO40.wp = function () {
            function f245() {
              this.ao = function () {};
            }
            f245.prototype.tf = function () {};
            f245.prototype.Hk = function () {};
            return f245;
          }();
          vO40.Gl = function () {
            var v881 = vO42.M(vO40.wp, function (p1082) {
              vO40.wp.call(this);
              var v882 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
              this.xp = $("<div id=\"" + v882 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + p1082 + "</div>    <div class=\"toaster-coins-close\">" + vO42.H("index.game.toaster.continue") + "</div></div>");
              var vThis81 = this;
              this.xp.find(".toaster-coins-close").click(function () {
                f148().Ci.Be();
                vThis81.ao();
              });
            });
            v881.prototype.tf = function () {
              return this.xp;
            };
            v881.prototype.Hk = function () {
              f148().Ci.Ee();
            };
            return v881;
          }();
          vO40.Fl = function () {
            var v883 = vO42.M(vO40.wp, function (p1083) {
              vO40.wp.call(this);
              var v884 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
              this.xp = $("<div id=\"" + v884 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + p1083 + "</div>    <div class=\"toaster-levelup-text\">" + vO42.H("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + vO42.H("index.game.toaster.continue") + "</div></div>");
              var vThis82 = this;
              this.xp.find(".toaster-levelup-close").click(function () {
                f148().Ci.Be();
                vThis82.ao();
              });
            });
            v883.prototype.tf = function () {
              return this.xp;
            };
            v883.prototype.Hk = function () {
              f148().Ci.De();
            };
            return v883;
          }();
          vO40.sp = function () {
            var v885 = vO42.M(vO40.wp, function () {
              vO40.wp.call(this);
              var vThis83 = this;
              var vF14836 = f148();
              var v886 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
              this.xp = $("<div id=\"" + v886 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + vO42.a.d + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + vO42.H("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + vO42.H("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + vO42.H("index.game.toaster.consent.iAccept") + "</div></div>");
              this.yp = this.xp.find(".toaster-consent-close");
              this.yp.hide();
              this.yp.click(function () {
                vF14836.Ci.Be();
                if (vF14836.Go()) {
                  vF14836.rp(true, true);
                }
                vThis83.ao();
              });
            });
            v885.prototype.tf = function () {
              return this.xp;
            };
            v885.prototype.Hk = function () {
              var vThis84 = this;
              var vF14837 = f148();
              if (vF14837.Go() && !vF14837.hl()) {
                vF14837.Ci.Ge();
                setTimeout(function () {
                  vThis84.yp.fadeIn(300);
                }, 2000);
              } else {
                setTimeout(function () {
                  vThis84.ao();
                }, 0);
              }
            };
            return v885;
          }();
          vO40.uk = function () {
            var v$114 = $("#error-gateway-connection-retry");
            var v887 = vO42.M(vO40.kf, function () {
              vO40.kf.call(this, vO40.Fk.wn);
              var vF14838 = f148();
              v$114.click(function () {
                vF14838.Ci.Be();
                vF14838.og.ie.Mn();
                vF14838.og.Ak(vF14838.og.ie);
                setTimeout(function () {
                  var v888 = vO42.a.b + "/pub/healthCheck/ping";
                  vO42.Z(v888, function () {
                    vF14838.og.Ak(vF14838.og.tk);
                  }, function (p1084) {
                    vF14838.og.ie.Kn();
                    vF14838.Lc.Ib(function () {
                      vF14838.og.Ak(vF14838.og._e);
                    }, function (p1085) {
                      vF14838.og.Ak(vF14838.og.tk);
                    }, function (p1086, p1087) {
                      var vP1086 = p1086;
                      vF14838.og.ie.Ln(vP1086, p1087);
                    });
                  });
                }, 2000);
              });
            });
            v887.prototype.ha = function () {};
            v887.prototype.Gk = function () {
              vO40.kf.jn.stop();
              vO40.kf.jn.fadeOut(50);
              vO40.kf.ln.stop();
              vO40.kf.ln.fadeOut(50);
              vO40.kf.nn.stop();
              vO40.kf.nn.fadeOut(50);
              vO40.kf.pn.stop();
              vO40.kf.pn.fadeOut(50);
              vO40.kf.sn.stop();
              vO40.kf.sn.fadeOut(50);
              vO40.kf.qn.stop();
              vO40.kf.qn.fadeOut(50);
              vO40.kf.rn.stop();
              vO40.kf.rn.fadeOut(50);
              vO40.kf.tn.stop();
              vO40.kf.tn.fadeIn(500);
              vO40.kf.un_error.stop();
              vO40.kf.un_error.fadeOut(50);
              vO40.kf.mn.stop();
              vO40.kf.mn.fadeIn(1);
              vO40.kf.bgcanvas.stop();
              vO40.kf.bgcanvas.fadeIn(500);
              vO40.GameView.Kf(true);
              vO40.kf.socialButtons.stop();
              vO40.kf.socialButtons.fadeOut(50);
              vO40.kf.vn.stop();
              vO40.kf.vn.fadeOut(50);
            };
            v887.prototype.Hk = function () {
              var vF14839 = f148();
              vF14839.Ci.pe(vO40.ge.je._e);
              vF14839.Ci.Ge();
            };
            return v887;
          }();
          vO40.wk = function () {
            var v$115 = $("#error-game-connection-retry");
            var v889 = vO42.M(vO40.kf, function () {
              vO40.kf.call(this, vO40.Fk.wn);
              var vF14840 = f148();
              v$115.click(function () {
                vF14840.Ci.Be();
                vF14840.og.Ak(vF14840.og._e);
              });
            });
            v889.prototype.ha = function () {};
            v889.prototype.Gk = function () {
              vO40.kf.jn.stop();
              vO40.kf.jn.fadeOut(50);
              vO40.kf.ln.stop();
              vO40.kf.ln.fadeOut(50);
              vO40.kf.nn.stop();
              vO40.kf.nn.fadeOut(50);
              vO40.kf.pn.stop();
              vO40.kf.pn.fadeOut(50);
              vO40.kf.sn.stop();
              vO40.kf.sn.fadeOut(50);
              vO40.kf.qn.stop();
              vO40.kf.qn.fadeOut(50);
              vO40.kf.rn.stop();
              vO40.kf.rn.fadeOut(50);
              vO40.kf.tn.stop();
              vO40.kf.tn.fadeOut(50);
              vO40.kf.un_error.stop();
              vO40.kf.un_error.fadeIn(500);
              vO40.kf.mn.stop();
              vO40.kf.mn.fadeIn(1);
              vO40.kf.bgcanvas.stop();
              vO40.kf.bgcanvas.fadeIn(500);
              vO40.GameView.Kf(true);
              vO40.kf.socialButtons.stop();
              vO40.kf.socialButtons.fadeOut(50);
              vO40.kf.vn.stop();
              vO40.kf.vn.fadeOut(50);
            };
            v889.prototype.Hk = function () {
              var vF14841 = f148();
              vF14841.Ci.pe(vO40.ge.je._e);
              vF14841.Ci.Ge();
            };
            return v889;
          }();
          vO42.zp = function () {
            function f246(p1088) {
              var v890 = p1088 + Math.floor(Math.random() * 65535) * 37;
              vO40.Vf.eg(vO40.Vf.cg, v890, 30);
            }
            function f247() {
              return parseInt(vO40.Vf.fg(vO40.Vf.cg)) % 37;
            }
            return function () {
              var vF247 = f247();
              if (!(vF247 >= 0) || !(vF247 < vF22.Ap)) {
                vF247 = Math.max(0, vF22.Ap - 2);
              }
              var vO58 = {
                zn: vF22,
                Bp: false
              };
              vO58.Cp = Date.now();
              vO58.Dp = 0;
              vO58.Ep = 0;
              vO58.Fp = null;
              vO58.Gp = vO42.a.j;
              vO58.Hp = vO42.a.i;
              vO58.dh = null;
              vO58.Lc = null;
              vO58.xe = null;
              vO58.Ci = null;
              vO58.og = null;
              vO58.On = null;
              vO58.Ij = null;
              try {
                if (navigator && navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(function (p1089) {
                    if (p1089.coords !== undefined) {
                      var v891 = p1089.coords;
                      if (v891.latitude !== undefined && v891.longitude !== undefined) {
                        vO58.Fp = p1089;
                      }
                    }
                  }, function (p1090) {});
                }
              } catch (e34) {}
              vO58.Ip = function () {
                vO58.dh = new vO40.Engine();
                vO58.dh.Kp = new vO40.MessageProcessor(vO58.dh);
                vO58.Lc = new vO40._a();
                vO58.xe = new vO40.Qj();
                vO58.Ci = new vO40.ge();
                vO58.og = new vO40.Tj();
                vO58.On = new vO40.kj();
                vO58.Ij = new vO40.Mk();
                vO58.ha();
              };
              vO58.ha = function () {
                try {
                  ga("send", "event", "app", window.runtimeHash + "_init");
                } catch (e35) {}
                vO58.dh.Lp = function () {
                  vO58.og.Ak(vO58.og.vk);
                };
                vO58.dh.Mp = function () {
                  var v892 = vO58.og._e.Wn();
                  try {
                    ga("send", "event", "game", window.runtimeHash + "_start", v892);
                  } catch (e36) {}
                  vO58.Ci.pe(vO40.ge.je.af);
                  vO58.og.Ak(vO58.og.af.Dn());
                };
                vO58.dh.Np = function () {
                  try {
                    ga("send", "event", "game", window.runtimeHash + "_end");
                  } catch (e37) {}
                  if ($("body").height() >= 430) {
                    vO58.zn.Op.ka();
                  }
                  vO58.Lc.Ib(null, null, null);
                  (function () {
                    var v893 = Math.floor(vO58.dh.ch.Bh);
                    var v894 = vO58.dh.Ih;
                    if (vO58.Ij.Hj()) {
                      vO58.Ij.Bl(function () {
                        vO58.Pp(v893, v894);
                      });
                    } else {
                      vO58.Pp(v893, v894);
                    }
                  })();
                };
                vO58.dh.Qp = function (p1091) {
                  p1091(vO58.og.af.Gn(), vO58.og.af.Hn());
                };
                vO58.Ij.yl(function () {
                  var v895 = vO58.og.Lk();
                  if (v895 != null && v895.nd === vO40.Fk.Ek) {
                    vO58.Ci.pe(vO40.ge.je._e);
                    vO58.og.Ak(vO58.og._e);
                  }
                  if (vO58.Ij.Hj()) {
                    try {
                      var v896 = vO58.Ij.cl();
                      ga("set", "userId", v896);
                    } catch (e38) {}
                  }
                  if (vO58.Go() && vO58.Ij.Hj() && !vO58.Ij.hl()) {
                    vO58.rp(false, false);
                    vO58.og.qk._n(new vO40.sp());
                  } else {
                    vO58.Rp(true);
                  }
                });
                vO58.dh.run();
                vO58.og.ha();
                vO58.On.ha();
                vO58.Lc.ha();
                vO58.og._e.Vn();
                vO58.og.Ak(vO58.og._e);
                vO58.xe.ha(function () {
                  vO58.Ci.ha();
                  vO58.Ij.ha();
                  vO58.Lc.Ib(function () {
                    vO58.og._e.Un();
                    vO58.og.Ak(vO58.og._e);
                  }, function (p1092) {
                    vO58.og._e.Un();
                    vO58.og.Ak(vO58.og.tk);
                  }, function (p1093, p1094) {
                    var vP1093 = p1093;
                    vO58.og.ie.Ln(vP1093, p1094);
                    vO58.og._e.Ln(vP1093, p1094);
                  });
                  if (vO58.Go() && !vO58.hl()) {
                    vO58.og.qk._n(new vO40.sp());
                  } else {
                    vO58.Rp(true);
                  }
                });
              };
              vO58.Sp = function (p1095) {
                if (vO58.Ij.Hj()) {
                  var v897 = vO58.Ij.Al();
                  var v898 = vO42.a.b + "/pub/wuid/" + v897 + "/consent/change?value=" + encodeURI(p1095);
                  vO42.Z(v898, function () {}, function (p1096) {});
                }
              };
              vO58.Pn = function (p1097) {
                vF247++;
                if (!vO58.zn.Tp && vF247 >= vO58.zn.Ap) {
                  vO58.og.Ak(vO58.og.xk);
                  vO58.Ci.pe(vO40.ge.je.cf);
                  vO58.zn.Up.ia();
                } else {
                  f246(vF247);
                  vO58.Vp(p1097);
                }
              };
              vO58.Vp = function (p1098) {
                if (vO58.dh.Wp()) {
                  vO58.og.ie.Mn();
                  vO58.og.Ak(vO58.og.ie);
                  var v899 = vO58.og._e.Wn();
                  vO40.Vf.eg(vO40.Vf._f, v899, 30);
                  var v900 = vO58.og.$h.Zh();
                  vO40.Vf.eg(vO40.Vf.Xf, v900, 30);
                  var vLN0134 = 0;
                  if (vO58.Fp != null) {
                    var v901 = vO58.Fp.coords.latitude;
                    var v902 = vO58.Fp.coords.longitude;
                    vLN0134 = Math.max(0, Math.min(32767, (v901 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (v902 + 180) / 360 * 65536)) << 16;
                  }
                  if (vO58.Ij.Hj()) {
                    vO58.Xp(v899, vLN0134, p1098);
                  } else {
                    var v903 = vO58.og._e.el();
                    vO40.Vf.eg(vO40.Vf.ag, v903, 30);
                    var v904 = vO58.On.rj(vO40.tj.sj);
                    vO40.Vf.eg(vO40.Vf.bg, v904, 30);
                    vO58.Yp(v899, vLN0134);
                  }
                }
              };
              vO58.Xp = function (p1099, p1100, p1101) {
                var vVO58 = vO58;
                var v905 = vO58.Ij.Al();
                var v906 = vO58.og._e.el();
                var v907 = vO58.On.rj(vO40.tj.sj);
                var v908 = vO58.On.rj(vO40.tj.uj);
                var v909 = vO58.On.rj(vO40.tj.vj);
                var v910 = vO58.On.rj(vO40.tj.xj);
                var v911 = vO58.On.rj(vO40.tj.wj);
                var v912 = (v76 ? URL_CDN : vO42.a.b) + "/pub/wuid/" + v905 + "/start?gameMode=" + encodeURI(p1099) + "&gh=" + p1100 + "&nickname=" + vO34.Xp(v905, v906, v907, v908, v909, v910, v911) + "&skinId=" + encodeURI(_wwc.validInput(v907 || 0)) + "&eyesId=" + encodeURI(_wwc.validInputWear(v908)) + "&mouthId=" + encodeURI(_wwc.validInputWear(v909)) + "&glassesId=" + encodeURI(_wwc.validInputWear(v910)) + "&hatId=" + encodeURI(_wwc.validInputWear(v911));
                vO42.Z(v912, function () {
                  vVO58.og.Ak(vVO58.og.tk);
                }, function (p1102) {
                  if (p1102.code === 1460) {
                    vVO58.og.Ak(vVO58.og.ok);
                    try {
                      ga("send", "event", "restricted", window.runtimeHash + "_tick");
                    } catch (e39) {}
                  } else if (false) {} else {
                    if (!p1102.server_url) {
                      vO33.dh.Cq();
                      return;
                    }
                    var v913 = p1102.server_url;
                    vVO58.dh.Zp(v913, v905, p1101);
                  }
                });
              };
              vO58.Yp = function (p1103, p1104) {
                var vVO582 = vO58;
                var v914 = vO58.og._e.el();
                var v915 = vO58.On.rj(vO40.tj.sj);
                var v916 = vO42.a.b + "/pub/wuid/guest/start?gameMode=" + encodeURI(p1103) + "&gh=" + p1104 + "&nickname=" + encodeURI(v914) + "&skinId=" + encodeURI(v915);
                vO42.Z(v916, function () {
                  vVO582.og.Ak(vVO582.og.tk);
                }, function (p1105) {
                  if (p1105.code === 1460) {
                    vVO582.og.Ak(vVO582.og.ok);
                    try {
                      ga("send", "event", "restricted", window.runtimeHash + "_tick");
                    } catch (e40) {}
                  } else if (p1105.code !== 1200) {
                    vVO582.og.Ak(vVO582.og.tk);
                  } else {
                    var v917 = p1105.server_url;
                    vVO582.dh.$p(v917, v914, v915);
                  }
                });
              };
              vO58.Pp = function (p1106, p1107) {
                var v918 = vO58.og._e.el();
                vO58.og.af.Fn(p1106, p1107, v918);
                vO58.Ci.pe(vO40.ge.je.bf);
                vO58.og.Ak(vO58.og.af.En());
              };
              vO58.Sn = function () {
                if (!vO58.Tn()) {
                  return vO58.On.Bj();
                }
                var vParseInt5 = parseInt(vO40.Vf.fg(vO40.Vf.bg));
                if (vParseInt5 != null && vO58.On.Cj(vParseInt5, vO40.tj.sj)) {
                  return vParseInt5;
                } else {
                  return vO58.On.Bj();
                }
              };
              vO58.Xn = function (p1108) {
                vO40.Vf.eg(vO40.Vf.dg, p1108 ? "true" : "false", 1800);
              };
              vO58.Tn = function () {
                return vO40.Vf.fg(vO40.Vf.dg) === "true";
              };
              vO58.Rp = function (p1109) {
                if (p1109 !== vO58.Bp) {
                  vO58.Bp = p1109;
                  var v919 = v919 || {};
                  v919.consented = p1109;
                  v919.gdprConsent = p1109;
                  vO58.zn.yn.ha();
                  vO58.zn.Op.ha();
                  vO58.zn.Up.ha(function (p1110) {
                    if (p1110) {
                      f246(vF247 = 0);
                    }
                    vO58.Vp();
                  });
                }
              };
              vO58.rp = function (p1111, p1112) {
                vO40.Vf.eg(vO40.Vf.Wf, p1111 ? "true" : "false");
                if (p1112) {
                  vO58.Sp(p1111);
                }
                vO58.Rp(p1111);
              };
              vO58.hl = function () {
                switch (vO40.Vf.fg(vO40.Vf.Wf)) {
                  case "true":
                    return true;
                  default:
                    return false;
                }
              };
              vO58.Go = function () {
                try {
                  return !!window.isIPInEEA || vO58.Fp != null && !!vO41.gg.hg(vO58.Fp.coords.latitude, vO58.Fp.coords.longitude);
                } catch (e41) {
                  return true;
                }
              };
              vO58.Nf = function () {
                vO58.Dp = performance.now();
                vO58.Ep = vO58.Dp - vO58.Cp;
                vO58.dh.lh(vO58.Dp, vO58.Ep);
                vO58.og.lh(vO58.Dp, vO58.Ep);
                vO58.Cp = vO58.Dp;
              };
              vO58.Jf = function () {
                vO58.og.Jf();
              };
              return vO58;
            }();
          };
          vO40.Engine = function () {
            var vO59 = {
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
              hh: new vO40.GameParams(),
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
            vO59.hh.zg = 500;
            vO59.ch = new vO40.Worm(vO59.hh);
            vO59.run = function () {
              vO59.ch.ti(f148().og.af.ng);
            };
            vO59.gh = function (p1113, p1114, p1115, p1116) {
              vO59.pq = p1113;
              vO59.qq = p1114;
              vO59.rq = p1115;
              vO59.sq = p1116;
              vO59.yq();
            };
            vO59.zq = function (p1117) {
              vO59.oq = p1117;
              vO59.yq();
            };
            vO59.yq = function () {
              vO59.tq = vO59.pq - vO59.oq;
              vO59.uq = vO59.qq + vO59.oq;
              vO59.vq = vO59.rq - vO59.oq;
              vO59.wq = vO59.sq + vO59.oq;
            };
            vO59.lh = function (p1118, p1119) {
              vO59.iq += p1119;
              vO59.hq -= vO59.gq * 0.2 * p1119;
              vO59.Kp.Rh();
              if (vO59.mq !== null && (vO59.Cn === 2 || vO59.Cn === 3)) {
                vO59.Aq(p1118, p1119);
                vO59.eh = 4 + vO59.Di * vO59.ch.$c;
              }
              var v920 = 1000 / Math.max(1, p1119);
              var vLN0135 = 0;
              for (var vLN0136 = 0; vLN0136 < vO59.fq.length - 1; vLN0136++) {
                vLN0135 += vO59.fq[vLN0136];
                vO59.fq[vLN0136] = vO59.fq[vLN0136 + 1];
              }
              vO59.fq[vO59.fq.length - 1] = v920;
              vO59.dq = (vLN0135 + v920) / vO59.fq.length;
            };
            vO59.Bq = function (p1120, p1121) {
              return p1120 > vO59.tq && p1120 < vO59.uq && p1121 > vO59.vq && p1121 < vO59.wq;
            };
            vO59.Aq = function (p1122, p1123) {
              var v921 = vO59.iq + vO59.hq;
              var v922 = (v921 - vO59.jq) / (vO59.kq - vO59.jq);
              vO59.ch.hj(p1122, p1123);
              vO59.ch.ij(p1122, p1123, v922, vO59.Bq);
              var vLN0137 = 0;
              for (var v923 in vO59.Fh) {
                var v924 = vO59.Fh[v923];
                v924.hj(p1122, p1123);
                v924.ij(p1122, p1123, v922, vO59.Bq);
                if (v924.xi && v924.$c > vLN0137) {
                  vLN0137 = v924.$c;
                }
                if (!v924.wi && (!!(v924.dj < 0.005) || !v924.xi)) {
                  v924.si();
                  delete vO59.Fh[v924.Eh.ae];
                }
              }
              vO59.zq(vLN0137 * 3);
              for (var v925 in vO59.Hi) {
                var v926 = vO59.Hi[v925];
                v926.hj(p1122, p1123);
                v926.ij(p1122, p1123, vO59.Bq);
                if (v926.Ni && (v926.dj < 0.005 || !vO59.Bq(v926.Zi, v926.$i))) {
                  v926.si();
                  delete vO59.Hi[v926.Eh.ae];
                }
              }
            };
            vO59.ki = function (p1124, p1125) {
              if (vO59.Cn === 1) {
                vO59.Cn = 2;
                vO59.Mp();
              }
              var v927 = f148().Dp;
              vO59.lq = p1124;
              if (p1124 === 0) {
                vO59.jq = v927 - 95;
                vO59.kq = v927;
                vO59.iq = vO59.jq;
                vO59.hq = 0;
              } else {
                vO59.jq = vO59.kq;
                vO59.kq = vO59.kq + p1125;
              }
              var v928 = vO59.iq + vO59.hq;
              vO59.gq = (v928 - vO59.jq) / (vO59.kq - vO59.jq);
            };
            vO59.Oi = function () {
              if (vO59.Cn === 1 || vO59.Cn === 2) {
                vO59.Cn = 3;
                var v929 = vO59.mq;
                setTimeout(function () {
                  if (vO59.Cn === 3) {
                    vO59.Cn = 0;
                  }
                  if (v929 != null && v929 === vO59.mq) {
                    vO59.mq.close();
                    vO59.mq = null;
                  }
                }, 4500);
                vO59.Np();
              }
            };
            vO59.Wp = function () {
              return vO59.Cn !== 2 && (vO59.Cn = 1, vO59.Kp.Qh(), vO59.Hi = {}, vO59.Fh = {}, vO59.ch.Pm(), vO59.mq != null && (vO59.mq.close(), vO59.mq = null), true);
            };
            vO59.Cq = function () {
              vO59.mq = null;
              vO59.Kp.Qh();
              if (vO59.Cn !== 3) {
                vO59.Lp();
              }
              vO59.Cn = 0;
            };
            vO59.Zp = function (p1126, p1127) {
              vO59.Dq(p1126, function () {
                var v930 = Math.min(2048, p1127.length);
                var v931 = new ArrayBuffer(6 + v930 * 2);
                var v932 = new DataView(v931);
                var vLN0138 = 0;
                v932.setInt8(vLN0138, 129);
                vLN0138 += 1;
                v932.setInt16(vLN0138, 2800);
                vLN0138 += 2;
                v932.setInt8(vLN0138, 1);
                vLN0138 += 1;
                v932.setInt16(vLN0138, v930);
                vLN0138 += 2;
                for (var vLN0139 = 0; vLN0139 < v930; vLN0139++) {
                  v932.setInt16(vLN0138, p1127.charCodeAt(vLN0139));
                  vLN0138 += 2;
                }
                vO59.Eq(v931);
              });
            };
            vO59.$p = function (p1128, p1129, p1130) {
              vO59.Dq(p1128, function () {
                var v933 = Math.min(32, p1129.length);
                var v934 = new ArrayBuffer(7 + v933 * 2);
                var v935 = new DataView(v934);
                var vLN0140 = 0;
                v935.setInt8(vLN0140, 129);
                vLN0140 += 1;
                v935.setInt16(vLN0140, 2800);
                vLN0140 += 2;
                v935.setInt8(vLN0140, 0);
                vLN0140 += 1;
                v935.setInt16(vLN0140, p1130);
                vLN0140 += 2;
                v935.setInt8(vLN0140, v933);
                vLN0140++;
                for (var vLN0141 = 0; vLN0141 < v933; vLN0141++) {
                  v935.setInt16(vLN0140, p1129.charCodeAt(vLN0141));
                  vLN0140 += 2;
                }
                vO59.Eq(v934);
              });
            };
            vO59.Eq = function (p1131) {
              try {
                if (vO59.mq != null && vO59.mq.readyState === WebSocket.OPEN) {
                  vO59.mq.send(p1131);
                }
              } catch (e42) {
                vO59.Cq();
              }
            };
            vO59.xq = function (p1132, p1133) {
              var v936 = p1133 ? 128 : 0;
              var v937 = vO42.N(p1132) / vO41.F * 128 & 127;
              var v938 = (v936 | v937) & 255;
              if (vO59.nq !== v938) {
                var v939 = new ArrayBuffer(1);
                new DataView(v939).setInt8(0, v938);
                vO59.Eq(v939);
                vO59.nq = v938;
              }
            };
            vO59.Dq = function (p1134, p1135) {
              var v940 = vO59.mq = new WebSocket(p1134);
              v940.binaryType = "arraybuffer";
              v940.onopen = function () {
                if (vO59.mq === v940) {
                  p1135();
                }
              };
              v940.onclose = function () {
                if (vO59.mq === v940) {
                  vO59.Cq();
                }
              };
              v940.onerror = function (p1136) {
                if (vO59.mq === v940) {
                  vO59.Cq();
                }
              };
              v940.onmessage = function (p1137) {
                if (vO59.mq === v940) {
                  vO59.Kp.Ph(p1137.data);
                }
              };
            };
            return vO59;
          };
          var vF192 = f19({}, vO34);
          vO34 = f19({
            $C: vO40,
            $V: vO41,
            $F: vO42,
            POGL: vF7
          }, vF192);
          vO34.Jb = function () {
            (vO33.Lc.zb.ud.skinArrayDict || []).forEach(function (p1138) {
              if (p1138.associados && p1138.associados.includes(vO33.Ij.Rk.userId)) {
                p1138[["n", "o", "n", "b", "u", "y", "a", "b", "l", "e"].join("")] = false;
              }
            });
          };
          var vF22 = function (p1139) {
            var vO60 = {};
            vO60.main = {
              yn: vO42.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
              Op: vO42.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
              Up: vO42.ga(),
              Ap: 4,
              Tp: false,
              xn: true
            };
            vO60.miniclip = {
              yn: vO42.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
              Op: vO42.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
              Up: vO42.ga(),
              Ap: 4,
              Tp: false,
              xn: false
            };
            var v941 = vO60[window.ENV];
            v941 ||= vO60.main;
            return v941;
          }(window.ENV);
          $(function () {
            FastClick.attach(document.body);
          });
          addEventListener("contextmenu", function (p1140) {
            p1140.preventDefault();
            p1140.stopPropagation();
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
          vO42.L("//apis.google.com/js/api:client.js", null, function () {
            gapi.load("auth2", function () {
              v301 = gapi.auth2.init({
                client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
              });
            });
          });
          vO42.L("//connect.facebook.net/" + vO42.a.j + "/sdk.js", {
            id: "facebook-jssdk",
            async: true,
            defer: true,
            crossorigin: "anonymous"
          });
          vO33 = vO42.zp();
          vO33.Ip();
          (function () {
            function f248() {
              requestAnimationFrame(f248);
              f148().Nf();
            }
            f248();
          })();
          (function () {
            function f249() {
              var v942 = v$116.width();
              var v943 = v$116.height();
              var v944 = v$117.outerWidth();
              var v945 = v$117.outerHeight();
              var v946 = v$118.outerHeight();
              var v947 = v$119.outerHeight();
              var v948 = Math.min(1, Math.min((v943 - v947 - v946) / v945, v942 / v944));
              var v949 = "translate(-50%, -50%) scale(" + v948 + ")";
              v$117.css({
                "-webkit-transform": v949,
                "-moz-transform": v949,
                "-ms-transform": v949,
                "-o-transform": v949,
                transform: v949
              });
              f148().Jf();
              window.scrollTo(0, 1);
            }
            var v$116 = $("body");
            var v$117 = $("#stretch-box");
            var v$118 = $("#markup-header");
            var v$119 = $("#markup-footer");
            f249();
            $(window).resize(f249);
          })();
        })();
      });
      $(".mm-merchant").remove();
      setTimeout(function () {
        $("#launcher").css("display", "none");
        $(".mm-merchant-cont").append(`
  <div style="display: flex; justify-content: center; align-items: center; margin-top: 10px;">
    <a href="https://www.facebook.com/share/15sLH1R6p5" target="_blank" style="margin-right: 10px;">
      <img src="${URL_CDN}/images/pub/B4_04.png" alt="Happy">
    </a>
    <a href="https://wormworld.io/install" target="_blank" style="margin-right: 10px;">
      <img src="${URL_CDN}/images/pub/B4_02.png" alt="Happy">
    </a>
  </div>
  `);
        $(".mm-merchant-cont").css("top", "-10px");
      }, 4500);
      $(".description-text").css("height", "300px");
      var v_0x502005 = function f250(p1141) {
        var vLSHttpswallpaperscomim = "https://wallpapers.com/images/hd/apple-and-blue-snake-game-ozkhfzailfrceqkz.jpg";
        document.body.style.backgroundColor = "#000";
        document.body.style.backgroundImage = `url('${p1141 || vLSHttpswallpaperscomim}')`;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        var v950 = document.getElementById("background-canvas");
        var v951 = document.getElementById("game-wrap");
        v950.style.backgroundColor = "#000";
        v950.style.opacity = "0.65";
        v951.style.backgroundColor = "transparent";
      };
      if (v234) {
        v234 = JSON.parse(v234);
        if (v234.background) {
          v_0x502005(v234.background);
        } else {
          v_0x502005();
        }
      } else {
        v_0x502005();
      }
      if (v235) {
        v235 = JSON.parse(v235);
        if (v235.audio) {
          vO27.headshot = new vP8.Howl({
            src: [v235.audio],
            html5: true,
            autoplay: false,
            loop: false
          });
        }
      }
      window.testAudioCustom = function () {
        console.log("Playing custom audio?", v235.audio);
        vO27.headshot.play();
      };
      var vF23 = f2(function f251(p1142, p1143, p1144, p1145, p1146, p1147, p1148) {
        f3(this, f251);
        this.wid = p1142;
        this.refer = p1143;
        this.nickname = p1144;
        this.score = p1146;
        this.myRoom = p1145;
        this.myLocation = {
          x: 0,
          y: 0
        };
        this.team = p1147;
        this.teamRoom = p1148;
      });
      vO32.containerHsRec.alpha = 0;
      vO32.containerHstop.alpha = 0;
      var vA21 = [16777215, 65280, 16776960, 65535, 16752640, 16711935, 11403055, 255, 8388736];
      function f252(p1149, p1150) {
        if (!p1150) {
          return;
        }
        p1150.playerMap.position.x = p1149.position.x;
        p1150.playerMap.position.y = p1149.position.y;
      }
      function f253(p1151, p1152, p1153) {
        var v952 = p1151.findIndex(function (p1154) {
          return p1154 === p1152.wid;
        });
        var v953 = p1153 ? 16711680 : vA21[v952 % vA21.length];
        var v954 = `${v952 + 1} - ${p1152.nickname.substring(0, 15)}`;
        var v955 = new PIXI.Text(v954, {
          fontFamily: "Arial",
          fontSize: 9.5,
          fill: v953,
          align: "left"
        });
        v955.position.y = v952 * 14;
        vO32.friends.addChild(v955);
        return v955;
      }
      function f254(p1155, p1156, p1157) {
        var v956 = p1155.findIndex(function (p1158) {
          return p1158 === p1156.wid;
        });
        var v957 = p1157 ? 16711680 : vA21[v956 % vA21.length];
        var v958 = new PIXI.Graphics();
        v958.id = p1156.wid;
        v958.zIndex = 3;
        v958.alpha = 1;
        v958.beginFill(v957, 1);
        v958.drawCircle(0, 0, 3.5);
        v958.endFill();
        v958.position.x = p1156.position.x;
        v958.position.y = p1156.position.y;
        vO32.conteinerTeam.addChild(v958);
        return v958;
      }
      _wwcio.connect = function (p1159) {
        console.log("Conectando...");
        var v959 = new Map();
        var v960 = (bbs.con || "").match(/(wss:|ws:)\/\/(.*?)-(.*):(.*?)\//);
        if (!v960) {
          v960 = [];
        }
        if (v960 && vA4.includes(v960[2])) {
          _wwcio.leaderboardUpdated([], []);
          var v961 = vLN05 ? "local" : v960[2];
          var v962 = _wwc._anApp.dh.hh.xg + (v960[2] || "L") + (v960[4] || "0");
          _wwcio.player = new vF23(bbs.userId, p1159 ? p1159.ae : userId, p1159 ? p1159.ma : "AN", v962, 0, _wwcio.player.team || [], _wwcio.player.teamRoom || null);
          try {
            var v963 = (0, vP82.io)(vO24[v961], {
              path: "/api/",
              transports: ["websocket"],
              reconnectionAttempts: 5
            });
            var v_0x390e7a = function f255() {
              v963.emit("join", _wwcio.player, function (p1160) {
                _wwcio.player.id = p1160.sid;
                _wwcio.leaderboardUpdated(p1160.top10, p1160.top3);
                if (_wwcio.player.team) {
                  v963.emit("joinTeam");
                  f253(_wwcio.player.team, _wwcio.player, 1);
                  vO32.friends.alpha = 1;
                }
                console.log("Conectado com sucesso!", p1160);
              });
            };
            v963.on("connect", function () {
              v_0x390e7a();
            });
            v963.on("message", function (p1161) {
              switch (p1161.type) {
                case "join":
                  _wwcio.obj.sid = p1161.sid;
                  break;
                case "leaderBoard":
                  _wwcio.leaderboardUpdated(p1161.top10, p1161.top3);
                  break;
                case "update":
                  break;
                case "leave":
                  break;
                default:
                  break;
              }
              if (p1161 && p1161.top10) {
                _wwcio.leaderboardUpdated(p1161.top10, p1161.top3);
              }
            });
            v963.on("connect_error", function (p1162) {
              console.error("Erro de conexão:", p1162);
            });
            v963.on("disconnect", function () {
              console.warn("Desconectado.");
              vO32.friends.removeChildren();
            });
            v963.on("error", function (p1163) {
              console.error("Erro:", p1163);
            });
            v963.on("updateLocation", function (p1164) {
              var v964 = v959.get(p1164.wid);
              if (!v964) {
                var vF254 = f254(_wwcio.player.team, p1164);
                var vF253 = f253(_wwcio.player.team, p1164);
                v959.set(p1164.wid, {
                  player: p1164,
                  playerMap: vF254,
                  playerText: vF253
                });
              }
              f252(p1164, v964);
            });
            v963.on("leaveTeam", function (p1165) {
              console.log("Saiu do time", p1165);
              var v965 = v959.get(p1165.wid);
              if (v965) {
                vO32.conteinerTeam.removeChild(v965.playerMap);
                vO32.friends.removeChild(v965.playerText);
                v959.delete(p1165.wid);
              }
            });
            _wwcio.sendLocation = function (p1166) {
              v963.emit("updateLocation", p1166);
            };
            _wwcio.update = function (p1167) {
              if (p1167 === "headshot") {
                _wwcio.player.score += 1;
              }
              v963.emit("message", {
                action: p1167
              }, function (p1168) {
                var v966;
                if (p1168.type === "leaderBoard" && (v966 = _wwcio.player) !== null && v966 !== undefined && v966.score) {
                  console.log("Enviado", p1168);
                }
              });
            };
            _wwcio.close = function () {
              v963.emit("leaveTeam");
              setTimeout(function () {
                v963.disconnect();
                v963.close();
              }, 1000);
            };
          } catch (e43) {
            vO32.containerHsRec.alpha = 0;
            vO32.containerHstop.alpha = 0;
            console.error("Erro: Servidor não disponível.");
            _wwcio.close();
          }
        } else {
          vO32.containerHsRec.alpha = 0;
          vO32.containerHstop.alpha = 0;
          console.error("NO MATCH!");
        }
      };
    },
    "./node_modules/howler/dist/howler.js": (p1169, p1170, p1171) => {
      var v967;
      var v968;
      (function () {
        'use strict';

        var vF24 = function () {
          this.init();
        };
        vF24.prototype = {
          init: function () {
            var v969 = this || v998;
            v969._counter = 1000;
            v969._html5AudioPool = [];
            v969.html5PoolSize = 10;
            v969._codecs = {};
            v969._howls = [];
            v969._muted = false;
            v969._volume = 1;
            v969._canPlayEvent = "canplaythrough";
            v969._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;
            v969.masterGain = null;
            v969.noAudio = false;
            v969.usingWebAudio = true;
            v969.autoSuspend = true;
            v969.ctx = null;
            v969.autoUnlock = true;
            v969._setup();
            return v969;
          },
          volume: function (p1172) {
            var v970 = this || v998;
            p1172 = parseFloat(p1172);
            if (!v970.ctx) {
              vF42();
            }
            if (typeof p1172 !== "undefined" && p1172 >= 0 && p1172 <= 1) {
              v970._volume = p1172;
              if (v970._muted) {
                return v970;
              }
              if (v970.usingWebAudio) {
                v970.masterGain.gain.setValueAtTime(p1172, v998.ctx.currentTime);
              }
              for (var vLN0142 = 0; vLN0142 < v970._howls.length; vLN0142++) {
                if (!v970._howls[vLN0142]._webAudio) {
                  var v971 = v970._howls[vLN0142]._getSoundIds();
                  for (var vLN0143 = 0; vLN0143 < v971.length; vLN0143++) {
                    var v972 = v970._howls[vLN0142]._soundById(v971[vLN0143]);
                    if (v972 && v972._node) {
                      v972._node.volume = v972._volume * p1172;
                    }
                  }
                }
              }
              return v970;
            }
            return v970._volume;
          },
          mute: function (p1173) {
            var v973 = this || v998;
            if (!v973.ctx) {
              vF42();
            }
            v973._muted = p1173;
            if (v973.usingWebAudio) {
              v973.masterGain.gain.setValueAtTime(p1173 ? 0 : v973._volume, v998.ctx.currentTime);
            }
            for (var vLN0144 = 0; vLN0144 < v973._howls.length; vLN0144++) {
              if (!v973._howls[vLN0144]._webAudio) {
                var v974 = v973._howls[vLN0144]._getSoundIds();
                for (var vLN0145 = 0; vLN0145 < v974.length; vLN0145++) {
                  var v975 = v973._howls[vLN0144]._soundById(v974[vLN0145]);
                  if (v975 && v975._node) {
                    v975._node.muted = p1173 ? true : v975._muted;
                  }
                }
              }
            }
            return v973;
          },
          stop: function () {
            var v976 = this || v998;
            for (var vLN0146 = 0; vLN0146 < v976._howls.length; vLN0146++) {
              v976._howls[vLN0146].stop();
            }
            return v976;
          },
          unload: function () {
            var v977 = this || v998;
            for (var v978 = v977._howls.length - 1; v978 >= 0; v978--) {
              v977._howls[v978].unload();
            }
            if (v977.usingWebAudio && v977.ctx && typeof v977.ctx.close !== "undefined") {
              v977.ctx.close();
              v977.ctx = null;
              vF42();
            }
            return v977;
          },
          codecs: function (p1174) {
            return (this || v998)._codecs[p1174.replace(/^x-/, "")];
          },
          _setup: function () {
            var v979 = this || v998;
            v979.state = v979.ctx ? v979.ctx.state || "suspended" : "suspended";
            v979._autoSuspend();
            if (!v979.usingWebAudio) {
              if (typeof Audio !== "undefined") {
                try {
                  var v980 = new Audio();
                  if (typeof v980.oncanplaythrough === "undefined") {
                    v979._canPlayEvent = "canplay";
                  }
                } catch (e44) {
                  v979.noAudio = true;
                }
              } else {
                v979.noAudio = true;
              }
            }
            try {
              var v980 = new Audio();
              if (v980.muted) {
                v979.noAudio = true;
              }
            } catch (e45) {}
            if (!v979.noAudio) {
              v979._setupCodecs();
            }
            return v979;
          },
          _setupCodecs: function () {
            var v981 = this || v998;
            var v982 = null;
            try {
              v982 = typeof Audio !== "undefined" ? new Audio() : null;
            } catch (e46) {
              return v981;
            }
            if (!v982 || typeof v982.canPlayType !== "function") {
              return v981;
            }
            var v983 = v982.canPlayType("audio/mpeg;").replace(/^no$/, "");
            var v984 = v981._navigator ? v981._navigator.userAgent : "";
            var v985 = v984.match(/OPR\/([0-6].)/g);
            var v986 = v985 && parseInt(v985[0].split("/")[1], 10) < 33;
            var v987 = v984.indexOf("Safari") !== -1 && v984.indexOf("Chrome") === -1;
            var v988 = v984.match(/Version\/(.*?) /);
            var v989 = v987 && v988 && parseInt(v988[1], 10) < 15;
            v981._codecs = {
              mp3: !v986 && (!!v983 || !!v982.canPlayType("audio/mp3;").replace(/^no$/, "")),
              mpeg: !!v983,
              opus: !!v982.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ""),
              ogg: !!v982.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
              oga: !!v982.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
              wav: !!(v982.canPlayType("audio/wav; codecs=\"1\"") || v982.canPlayType("audio/wav")).replace(/^no$/, ""),
              aac: !!v982.canPlayType("audio/aac;").replace(/^no$/, ""),
              caf: !!v982.canPlayType("audio/x-caf;").replace(/^no$/, ""),
              m4a: !!(v982.canPlayType("audio/x-m4a;") || v982.canPlayType("audio/m4a;") || v982.canPlayType("audio/aac;")).replace(/^no$/, ""),
              m4b: !!(v982.canPlayType("audio/x-m4b;") || v982.canPlayType("audio/m4b;") || v982.canPlayType("audio/aac;")).replace(/^no$/, ""),
              mp4: !!(v982.canPlayType("audio/x-mp4;") || v982.canPlayType("audio/mp4;") || v982.canPlayType("audio/aac;")).replace(/^no$/, ""),
              weba: !v989 && !!v982.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
              webm: !v989 && !!v982.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
              dolby: !!v982.canPlayType("audio/mp4; codecs=\"ec-3\"").replace(/^no$/, ""),
              flac: !!(v982.canPlayType("audio/x-flac;") || v982.canPlayType("audio/flac;")).replace(/^no$/, "")
            };
            return v981;
          },
          _unlockAudio: function () {
            var v990 = this || v998;
            if (v990._audioUnlocked || !v990.ctx) {
              return;
            }
            v990._audioUnlocked = false;
            v990.autoUnlock = false;
            if (!v990._mobileUnloaded && v990.ctx.sampleRate !== 44100) {
              v990._mobileUnloaded = true;
              v990.unload();
            }
            v990._scratchBuffer = v990.ctx.createBuffer(1, 1, 22050);
            var vF25 = function (p1175) {
              while (v990._html5AudioPool.length < v990.html5PoolSize) {
                try {
                  var v991 = new Audio();
                  v991._unlocked = true;
                  v990._releaseHtml5Audio(v991);
                } catch (e47) {
                  v990.noAudio = true;
                  break;
                }
              }
              for (var vLN0147 = 0; vLN0147 < v990._howls.length; vLN0147++) {
                if (!v990._howls[vLN0147]._webAudio) {
                  var v992 = v990._howls[vLN0147]._getSoundIds();
                  for (var vLN0148 = 0; vLN0148 < v992.length; vLN0148++) {
                    var v993 = v990._howls[vLN0147]._soundById(v992[vLN0148]);
                    if (v993 && v993._node && !v993._node._unlocked) {
                      v993._node._unlocked = true;
                      v993._node.load();
                    }
                  }
                }
              }
              v990._autoResume();
              var v994 = v990.ctx.createBufferSource();
              v994.buffer = v990._scratchBuffer;
              v994.connect(v990.ctx.destination);
              if (typeof v994.start === "undefined") {
                v994.noteOn(0);
              } else {
                v994.start(0);
              }
              if (typeof v990.ctx.resume === "function") {
                v990.ctx.resume();
              }
              v994.onended = function () {
                v994.disconnect(0);
                v990._audioUnlocked = true;
                document.removeEventListener("touchstart", vF25, true);
                document.removeEventListener("touchend", vF25, true);
                document.removeEventListener("click", vF25, true);
                document.removeEventListener("keydown", vF25, true);
                for (var vLN0149 = 0; vLN0149 < v990._howls.length; vLN0149++) {
                  v990._howls[vLN0149]._emit("unlock");
                }
              };
            };
            document.addEventListener("touchstart", vF25, true);
            document.addEventListener("touchend", vF25, true);
            document.addEventListener("click", vF25, true);
            document.addEventListener("keydown", vF25, true);
            return v990;
          },
          _obtainHtml5Audio: function () {
            var v995 = this || v998;
            if (v995._html5AudioPool.length) {
              return v995._html5AudioPool.pop();
            }
            var v996 = new Audio().play();
            if (v996 && typeof Promise !== "undefined" && (v996 instanceof Promise || typeof v996.then === "function")) {
              v996.catch(function () {
                console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
              });
            }
            return new Audio();
          },
          _releaseHtml5Audio: function (p1176) {
            var v997 = this || v998;
            if (p1176._unlocked) {
              v997._html5AudioPool.push(p1176);
            }
            return v997;
          },
          _autoSuspend: function () {
            var vThis85 = this;
            if (!vThis85.autoSuspend || !vThis85.ctx || typeof vThis85.ctx.suspend === "undefined" || !v998.usingWebAudio) {
              return;
            }
            for (var vLN0150 = 0; vLN0150 < vThis85._howls.length; vLN0150++) {
              if (vThis85._howls[vLN0150]._webAudio) {
                for (var vLN0151 = 0; vLN0151 < vThis85._howls[vLN0150]._sounds.length; vLN0151++) {
                  if (!vThis85._howls[vLN0150]._sounds[vLN0151]._paused) {
                    return vThis85;
                  }
                }
              }
            }
            if (vThis85._suspendTimer) {
              clearTimeout(vThis85._suspendTimer);
            }
            vThis85._suspendTimer = setTimeout(function () {
              if (!vThis85.autoSuspend) {
                return;
              }
              vThis85._suspendTimer = null;
              vThis85.state = "suspending";
              var vF26 = function () {
                vThis85.state = "suspended";
                if (vThis85._resumeAfterSuspend) {
                  delete vThis85._resumeAfterSuspend;
                  vThis85._autoResume();
                }
              };
              vThis85.ctx.suspend().then(vF26, vF26);
            }, 30000);
            return vThis85;
          },
          _autoResume: function () {
            var vThis86 = this;
            if (!vThis86.ctx || typeof vThis86.ctx.resume === "undefined" || !v998.usingWebAudio) {
              return;
            }
            if (vThis86.state === "running" && vThis86.ctx.state !== "interrupted" && vThis86._suspendTimer) {
              clearTimeout(vThis86._suspendTimer);
              vThis86._suspendTimer = null;
            } else if (vThis86.state === "suspended" || vThis86.state === "running" && vThis86.ctx.state === "interrupted") {
              vThis86.ctx.resume().then(function () {
                vThis86.state = "running";
                for (var vLN0152 = 0; vLN0152 < vThis86._howls.length; vLN0152++) {
                  vThis86._howls[vLN0152]._emit("resume");
                }
              });
              if (vThis86._suspendTimer) {
                clearTimeout(vThis86._suspendTimer);
                vThis86._suspendTimer = null;
              }
            } else if (vThis86.state === "suspending") {
              vThis86._resumeAfterSuspend = true;
            }
            return vThis86;
          }
        };
        var v998 = new vF24();
        var vF27 = function (p1177) {
          var vThis87 = this;
          if (!p1177.src || p1177.src.length === 0) {
            console.error("An array of source files must be passed with any new Howl.");
            return;
          }
          vThis87.init(p1177);
        };
        vF27.prototype = {
          init: function (p1178) {
            var vThis88 = this;
            if (!v998.ctx) {
              vF42();
            }
            vThis88._autoplay = p1178.autoplay || false;
            vThis88._format = typeof p1178.format !== "string" ? p1178.format : [p1178.format];
            vThis88._html5 = p1178.html5 || false;
            vThis88._muted = p1178.mute || false;
            vThis88._loop = p1178.loop || false;
            vThis88._pool = p1178.pool || 5;
            vThis88._preload = typeof p1178.preload === "boolean" || p1178.preload === "metadata" ? p1178.preload : true;
            vThis88._rate = p1178.rate || 1;
            vThis88._sprite = p1178.sprite || {};
            vThis88._src = typeof p1178.src !== "string" ? p1178.src : [p1178.src];
            vThis88._volume = p1178.volume !== undefined ? p1178.volume : 1;
            vThis88._xhr = {
              method: p1178.xhr && p1178.xhr.method ? p1178.xhr.method : "GET",
              headers: p1178.xhr && p1178.xhr.headers ? p1178.xhr.headers : null,
              withCredentials: p1178.xhr && p1178.xhr.withCredentials ? p1178.xhr.withCredentials : false
            };
            vThis88._duration = 0;
            vThis88._state = "unloaded";
            vThis88._sounds = [];
            vThis88._endTimers = {};
            vThis88._queue = [];
            vThis88._playLock = false;
            vThis88._onend = p1178.onend ? [{
              fn: p1178.onend
            }] : [];
            vThis88._onfade = p1178.onfade ? [{
              fn: p1178.onfade
            }] : [];
            vThis88._onload = p1178.onload ? [{
              fn: p1178.onload
            }] : [];
            vThis88._onloaderror = p1178.onloaderror ? [{
              fn: p1178.onloaderror
            }] : [];
            vThis88._onplayerror = p1178.onplayerror ? [{
              fn: p1178.onplayerror
            }] : [];
            vThis88._onpause = p1178.onpause ? [{
              fn: p1178.onpause
            }] : [];
            vThis88._onplay = p1178.onplay ? [{
              fn: p1178.onplay
            }] : [];
            vThis88._onstop = p1178.onstop ? [{
              fn: p1178.onstop
            }] : [];
            vThis88._onmute = p1178.onmute ? [{
              fn: p1178.onmute
            }] : [];
            vThis88._onvolume = p1178.onvolume ? [{
              fn: p1178.onvolume
            }] : [];
            vThis88._onrate = p1178.onrate ? [{
              fn: p1178.onrate
            }] : [];
            vThis88._onseek = p1178.onseek ? [{
              fn: p1178.onseek
            }] : [];
            vThis88._onunlock = p1178.onunlock ? [{
              fn: p1178.onunlock
            }] : [];
            vThis88._onresume = [];
            vThis88._webAudio = v998.usingWebAudio && !vThis88._html5;
            if (typeof v998.ctx !== "undefined" && v998.ctx && v998.autoUnlock) {
              v998._unlockAudio();
            }
            v998._howls.push(vThis88);
            if (vThis88._autoplay) {
              vThis88._queue.push({
                event: "play",
                action: function () {
                  vThis88.play();
                }
              });
            }
            if (vThis88._preload && vThis88._preload !== "none") {
              vThis88.load();
            }
            return vThis88;
          },
          load: function () {
            var vThis89 = this;
            var v999 = null;
            if (v998.noAudio) {
              vThis89._emit("loaderror", null, "No audio support.");
              return;
            }
            if (typeof vThis89._src === "string") {
              vThis89._src = [vThis89._src];
            }
            for (var vLN0153 = 0; vLN0153 < vThis89._src.length; vLN0153++) {
              var v1000;
              var v1001;
              if (vThis89._format && vThis89._format[vLN0153]) {
                v1000 = vThis89._format[vLN0153];
              } else {
                v1001 = vThis89._src[vLN0153];
                if (typeof v1001 !== "string") {
                  vThis89._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue;
                }
                v1000 = /^data:audio\/([^;,]+);/i.exec(v1001);
                if (!v1000) {
                  v1000 = /\.([^.]+)$/.exec(v1001.split("?", 1)[0]);
                }
                v1000 &&= v1000[1].toLowerCase();
              }
              if (!v1000) {
                console.warn("No file extension was found. Consider using the \"format\" property or specify an extension.");
              }
              if (v1000 && v998.codecs(v1000)) {
                v999 = vThis89._src[vLN0153];
                break;
              }
            }
            if (!v999) {
              vThis89._emit("loaderror", null, "No codec support for selected audio sources.");
              return;
            }
            vThis89._src = v999;
            vThis89._state = "loading";
            if (window.location.protocol === "https:" && v999.slice(0, 5) === "http:") {
              vThis89._html5 = true;
              vThis89._webAudio = false;
            }
            new vF35(vThis89);
            if (vThis89._webAudio) {
              vF36(vThis89);
            }
            return vThis89;
          },
          play: function (p1179, p1180) {
            var vThis90 = this;
            var v1002 = null;
            if (typeof p1179 === "number") {
              v1002 = p1179;
              p1179 = null;
            } else if (typeof p1179 === "string" && vThis90._state === "loaded" && !vThis90._sprite[p1179]) {
              return null;
            } else if (typeof p1179 === "undefined") {
              p1179 = "__default";
              if (!vThis90._playLock) {
                var vLN0154 = 0;
                for (var vLN0155 = 0; vLN0155 < vThis90._sounds.length; vLN0155++) {
                  if (vThis90._sounds[vLN0155]._paused && !vThis90._sounds[vLN0155]._ended) {
                    vLN0154++;
                    v1002 = vThis90._sounds[vLN0155]._id;
                  }
                }
                if (vLN0154 === 1) {
                  p1179 = null;
                } else {
                  v1002 = null;
                }
              }
            }
            var v1003 = v1002 ? vThis90._soundById(v1002) : vThis90._inactiveSound();
            if (!v1003) {
              return null;
            }
            if (v1002 && !p1179) {
              p1179 = v1003._sprite || "__default";
            }
            if (vThis90._state !== "loaded") {
              v1003._sprite = p1179;
              v1003._ended = false;
              var v1004 = v1003._id;
              vThis90._queue.push({
                event: "play",
                action: function () {
                  vThis90.play(v1004);
                }
              });
              return v1004;
            }
            if (v1002 && !v1003._paused) {
              if (!p1180) {
                vThis90._loadQueue("play");
              }
              return v1003._id;
            }
            if (vThis90._webAudio) {
              v998._autoResume();
            }
            var v1005 = Math.max(0, v1003._seek > 0 ? v1003._seek : vThis90._sprite[p1179][0] / 1000);
            var v1006 = Math.max(0, (vThis90._sprite[p1179][0] + vThis90._sprite[p1179][1]) / 1000 - v1005);
            var v1007 = v1006 * 1000 / Math.abs(v1003._rate);
            var v1008 = vThis90._sprite[p1179][0] / 1000;
            var v1009 = (vThis90._sprite[p1179][0] + vThis90._sprite[p1179][1]) / 1000;
            v1003._sprite = p1179;
            v1003._ended = false;
            var vF29 = function () {
              v1003._paused = false;
              v1003._seek = v1005;
              v1003._start = v1008;
              v1003._stop = v1009;
              v1003._loop = !!v1003._loop || !!vThis90._sprite[p1179][2];
            };
            if (v1005 >= v1009) {
              vThis90._ended(v1003);
              return;
            }
            var v1010 = v1003._node;
            if (vThis90._webAudio) {
              var vF30 = function () {
                vThis90._playLock = false;
                vF29();
                vThis90._refreshBuffer(v1003);
                var v1011 = v1003._muted || vThis90._muted ? 0 : v1003._volume;
                v1010.gain.setValueAtTime(v1011, v998.ctx.currentTime);
                v1003._playStart = v998.ctx.currentTime;
                if (typeof v1010.bufferSource.start === "undefined") {
                  if (v1003._loop) {
                    v1010.bufferSource.noteGrainOn(0, v1005, 86400);
                  } else {
                    v1010.bufferSource.noteGrainOn(0, v1005, v1006);
                  }
                } else if (v1003._loop) {
                  v1010.bufferSource.start(0, v1005, 86400);
                } else {
                  v1010.bufferSource.start(0, v1005, v1006);
                }
                if (v1007 !== Infinity) {
                  vThis90._endTimers[v1003._id] = setTimeout(vThis90._ended.bind(vThis90, v1003), v1007);
                }
                if (!p1180) {
                  setTimeout(function () {
                    vThis90._emit("play", v1003._id);
                    vThis90._loadQueue();
                  }, 0);
                }
              };
              if (v998.state === "running" && v998.ctx.state !== "interrupted") {
                vF30();
              } else {
                vThis90._playLock = true;
                vThis90.once("resume", vF30);
                vThis90._clearTimer(v1003._id);
              }
            } else {
              var vF31 = function () {
                v1010.currentTime = v1005;
                v1010.muted = v1003._muted || vThis90._muted || v998._muted || v1010.muted;
                v1010.volume = v1003._volume * v998.volume();
                v1010.playbackRate = v1003._rate;
                try {
                  var v1012 = v1010.play();
                  if (v1012 && typeof Promise !== "undefined" && (v1012 instanceof Promise || typeof v1012.then === "function")) {
                    vThis90._playLock = true;
                    vF29();
                    v1012.then(function () {
                      vThis90._playLock = false;
                      v1010._unlocked = true;
                      if (!p1180) {
                        vThis90._emit("play", v1003._id);
                      } else {
                        vThis90._loadQueue();
                      }
                    }).catch(function () {
                      vThis90._playLock = false;
                      vThis90._emit("playerror", v1003._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                      v1003._ended = true;
                      v1003._paused = true;
                    });
                  } else if (!p1180) {
                    vThis90._playLock = false;
                    vF29();
                    vThis90._emit("play", v1003._id);
                  }
                  v1010.playbackRate = v1003._rate;
                  if (v1010.paused) {
                    vThis90._emit("playerror", v1003._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                    return;
                  }
                  if (p1179 !== "__default" || v1003._loop) {
                    vThis90._endTimers[v1003._id] = setTimeout(vThis90._ended.bind(vThis90, v1003), v1007);
                  } else {
                    vThis90._endTimers[v1003._id] = function () {
                      vThis90._ended(v1003);
                      v1010.removeEventListener("ended", vThis90._endTimers[v1003._id], false);
                    };
                    v1010.addEventListener("ended", vThis90._endTimers[v1003._id], false);
                  }
                } catch (e48) {
                  vThis90._emit("playerror", v1003._id, e48);
                }
              };
              if (v1010.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA") {
                v1010.src = vThis90._src;
                v1010.load();
              }
              var v1013 = window && window.ejecta || !v1010.readyState && v998._navigator.isCocoonJS;
              if (v1010.readyState >= 3 || v1013) {
                vF31();
              } else {
                vThis90._playLock = true;
                vThis90._state = "loading";
                var vF32 = function () {
                  vThis90._state = "loaded";
                  vF31();
                  v1010.removeEventListener(v998._canPlayEvent, vF32, false);
                };
                v1010.addEventListener(v998._canPlayEvent, vF32, false);
                vThis90._clearTimer(v1003._id);
              }
            }
            return v1003._id;
          },
          pause: function (p1181) {
            var vThis91 = this;
            if (vThis91._state !== "loaded" || vThis91._playLock) {
              vThis91._queue.push({
                event: "pause",
                action: function () {
                  vThis91.pause(p1181);
                }
              });
              return vThis91;
            }
            var v1014 = vThis91._getSoundIds(p1181);
            for (var vLN0156 = 0; vLN0156 < v1014.length; vLN0156++) {
              vThis91._clearTimer(v1014[vLN0156]);
              var v1015 = vThis91._soundById(v1014[vLN0156]);
              if (v1015 && !v1015._paused) {
                v1015._seek = vThis91.seek(v1014[vLN0156]);
                v1015._rateSeek = 0;
                v1015._paused = true;
                vThis91._stopFade(v1014[vLN0156]);
                if (v1015._node) {
                  if (vThis91._webAudio) {
                    if (!v1015._node.bufferSource) {
                      continue;
                    }
                    if (typeof v1015._node.bufferSource.stop === "undefined") {
                      v1015._node.bufferSource.noteOff(0);
                    } else {
                      v1015._node.bufferSource.stop(0);
                    }
                    vThis91._cleanBuffer(v1015._node);
                  } else if (!isNaN(v1015._node.duration) || v1015._node.duration === Infinity) {
                    v1015._node.pause();
                  }
                }
              }
              if (!arguments[1]) {
                vThis91._emit("pause", v1015 ? v1015._id : null);
              }
            }
            return vThis91;
          },
          stop: function (p1182, p1183) {
            var vThis92 = this;
            if (vThis92._state !== "loaded" || vThis92._playLock) {
              vThis92._queue.push({
                event: "stop",
                action: function () {
                  vThis92.stop(p1182);
                }
              });
              return vThis92;
            }
            var v1016 = vThis92._getSoundIds(p1182);
            for (var vLN0157 = 0; vLN0157 < v1016.length; vLN0157++) {
              vThis92._clearTimer(v1016[vLN0157]);
              var v1017 = vThis92._soundById(v1016[vLN0157]);
              if (v1017) {
                v1017._seek = v1017._start || 0;
                v1017._rateSeek = 0;
                v1017._paused = true;
                v1017._ended = true;
                vThis92._stopFade(v1016[vLN0157]);
                if (v1017._node) {
                  if (vThis92._webAudio) {
                    if (v1017._node.bufferSource) {
                      if (typeof v1017._node.bufferSource.stop === "undefined") {
                        v1017._node.bufferSource.noteOff(0);
                      } else {
                        v1017._node.bufferSource.stop(0);
                      }
                      vThis92._cleanBuffer(v1017._node);
                    }
                  } else if (!isNaN(v1017._node.duration) || v1017._node.duration === Infinity) {
                    v1017._node.currentTime = v1017._start || 0;
                    v1017._node.pause();
                    if (v1017._node.duration === Infinity) {
                      vThis92._clearSound(v1017._node);
                    }
                  }
                }
                if (!p1183) {
                  vThis92._emit("stop", v1017._id);
                }
              }
            }
            return vThis92;
          },
          mute: function (p1184, p1185) {
            var vThis93 = this;
            if (vThis93._state !== "loaded" || vThis93._playLock) {
              vThis93._queue.push({
                event: "mute",
                action: function () {
                  vThis93.mute(p1184, p1185);
                }
              });
              return vThis93;
            }
            if (typeof p1185 === "undefined") {
              if (typeof p1184 === "boolean") {
                vThis93._muted = p1184;
              } else {
                return vThis93._muted;
              }
            }
            var v1018 = vThis93._getSoundIds(p1185);
            for (var vLN0158 = 0; vLN0158 < v1018.length; vLN0158++) {
              var v1019 = vThis93._soundById(v1018[vLN0158]);
              if (v1019) {
                v1019._muted = p1184;
                if (v1019._interval) {
                  vThis93._stopFade(v1019._id);
                }
                if (vThis93._webAudio && v1019._node) {
                  v1019._node.gain.setValueAtTime(p1184 ? 0 : v1019._volume, v998.ctx.currentTime);
                } else if (v1019._node) {
                  v1019._node.muted = v998._muted ? true : p1184;
                }
                vThis93._emit("mute", v1019._id);
              }
            }
            return vThis93;
          },
          volume: function () {
            var vThis94 = this;
            var vArguments2 = arguments;
            var v1020;
            var v1021;
            if (vArguments2.length === 0) {
              return vThis94._volume;
            } else if (vArguments2.length === 1 || vArguments2.length === 2 && typeof vArguments2[1] === "undefined") {
              var v1022 = vThis94._getSoundIds();
              var v1023 = v1022.indexOf(vArguments2[0]);
              if (v1023 >= 0) {
                v1021 = parseInt(vArguments2[0], 10);
              } else {
                v1020 = parseFloat(vArguments2[0]);
              }
            } else if (vArguments2.length >= 2) {
              v1020 = parseFloat(vArguments2[0]);
              v1021 = parseInt(vArguments2[1], 10);
            }
            var v1024;
            if (typeof v1020 !== "undefined" && v1020 >= 0 && v1020 <= 1) {
              if (vThis94._state !== "loaded" || vThis94._playLock) {
                vThis94._queue.push({
                  event: "volume",
                  action: function () {
                    vThis94.volume.apply(vThis94, vArguments2);
                  }
                });
                return vThis94;
              }
              if (typeof v1021 === "undefined") {
                vThis94._volume = v1020;
              }
              v1021 = vThis94._getSoundIds(v1021);
              for (var vLN0159 = 0; vLN0159 < v1021.length; vLN0159++) {
                v1024 = vThis94._soundById(v1021[vLN0159]);
                if (v1024) {
                  v1024._volume = v1020;
                  if (!vArguments2[2]) {
                    vThis94._stopFade(v1021[vLN0159]);
                  }
                  if (vThis94._webAudio && v1024._node && !v1024._muted) {
                    v1024._node.gain.setValueAtTime(v1020, v998.ctx.currentTime);
                  } else if (v1024._node && !v1024._muted) {
                    v1024._node.volume = v1020 * v998.volume();
                  }
                  vThis94._emit("volume", v1024._id);
                }
              }
            } else {
              v1024 = v1021 ? vThis94._soundById(v1021) : vThis94._sounds[0];
              if (v1024) {
                return v1024._volume;
              } else {
                return 0;
              }
            }
            return vThis94;
          },
          fade: function (p1186, p1187, p1188, p1189) {
            var vThis95 = this;
            if (vThis95._state !== "loaded" || vThis95._playLock) {
              vThis95._queue.push({
                event: "fade",
                action: function () {
                  vThis95.fade(p1186, p1187, p1188, p1189);
                }
              });
              return vThis95;
            }
            p1186 = Math.min(Math.max(0, parseFloat(p1186)), 1);
            p1187 = Math.min(Math.max(0, parseFloat(p1187)), 1);
            p1188 = parseFloat(p1188);
            vThis95.volume(p1186, p1189);
            var v1025 = vThis95._getSoundIds(p1189);
            for (var vLN0160 = 0; vLN0160 < v1025.length; vLN0160++) {
              var v1026 = vThis95._soundById(v1025[vLN0160]);
              if (v1026) {
                if (!p1189) {
                  vThis95._stopFade(v1025[vLN0160]);
                }
                if (vThis95._webAudio && !v1026._muted) {
                  var v1027 = v998.ctx.currentTime;
                  var v1028 = v1027 + p1188 / 1000;
                  v1026._volume = p1186;
                  v1026._node.gain.setValueAtTime(p1186, v1027);
                  v1026._node.gain.linearRampToValueAtTime(p1187, v1028);
                }
                vThis95._startFadeInterval(v1026, p1186, p1187, p1188, v1025[vLN0160], typeof p1189 === "undefined");
              }
            }
            return vThis95;
          },
          _startFadeInterval: function (p1190, p1191, p1192, p1193, p1194, p1195) {
            var vThis96 = this;
            var vP1191 = p1191;
            var v1029 = p1192 - p1191;
            var v1030 = Math.abs(v1029 / 0.01);
            var v1031 = Math.max(4, v1030 > 0 ? p1193 / v1030 : p1193);
            var v1032 = Date.now();
            p1190._fadeTo = p1192;
            p1190._interval = setInterval(function () {
              var v1033 = (Date.now() - v1032) / p1193;
              v1032 = Date.now();
              vP1191 += v1029 * v1033;
              vP1191 = Math.round(vP1191 * 100) / 100;
              if (v1029 < 0) {
                vP1191 = Math.max(p1192, vP1191);
              } else {
                vP1191 = Math.min(p1192, vP1191);
              }
              if (vThis96._webAudio) {
                p1190._volume = vP1191;
              } else {
                vThis96.volume(vP1191, p1190._id, true);
              }
              if (p1195) {
                vThis96._volume = vP1191;
              }
              if (p1192 < p1191 && vP1191 <= p1192 || p1192 > p1191 && vP1191 >= p1192) {
                clearInterval(p1190._interval);
                p1190._interval = null;
                p1190._fadeTo = null;
                vThis96.volume(p1192, p1190._id);
                vThis96._emit("fade", p1190._id);
              }
            }, v1031);
          },
          _stopFade: function (p1196) {
            var vThis97 = this;
            var v1034 = vThis97._soundById(p1196);
            if (v1034 && v1034._interval) {
              if (vThis97._webAudio) {
                v1034._node.gain.cancelScheduledValues(v998.ctx.currentTime);
              }
              clearInterval(v1034._interval);
              v1034._interval = null;
              vThis97.volume(v1034._fadeTo, p1196);
              v1034._fadeTo = null;
              vThis97._emit("fade", p1196);
            }
            return vThis97;
          },
          loop: function () {
            var vThis98 = this;
            var vArguments3 = arguments;
            var v1035;
            var v1036;
            var v1037;
            if (vArguments3.length === 0) {
              return vThis98._loop;
            } else if (vArguments3.length === 1) {
              if (typeof vArguments3[0] === "boolean") {
                v1035 = vArguments3[0];
                vThis98._loop = v1035;
              } else {
                v1037 = vThis98._soundById(parseInt(vArguments3[0], 10));
                if (v1037) {
                  return v1037._loop;
                } else {
                  return false;
                }
              }
            } else if (vArguments3.length === 2) {
              v1035 = vArguments3[0];
              v1036 = parseInt(vArguments3[1], 10);
            }
            var v1038 = vThis98._getSoundIds(v1036);
            for (var vLN0161 = 0; vLN0161 < v1038.length; vLN0161++) {
              v1037 = vThis98._soundById(v1038[vLN0161]);
              if (v1037) {
                v1037._loop = v1035;
                if (vThis98._webAudio && v1037._node && v1037._node.bufferSource) {
                  v1037._node.bufferSource.loop = v1035;
                  if (v1035) {
                    v1037._node.bufferSource.loopStart = v1037._start || 0;
                    v1037._node.bufferSource.loopEnd = v1037._stop;
                    if (vThis98.playing(v1038[vLN0161])) {
                      vThis98.pause(v1038[vLN0161], true);
                      vThis98.play(v1038[vLN0161], true);
                    }
                  }
                }
              }
            }
            return vThis98;
          },
          rate: function () {
            var vThis99 = this;
            var vArguments4 = arguments;
            var v1039;
            var v1040;
            if (vArguments4.length === 0) {
              v1040 = vThis99._sounds[0]._id;
            } else if (vArguments4.length === 1) {
              var v1041 = vThis99._getSoundIds();
              var v1042 = v1041.indexOf(vArguments4[0]);
              if (v1042 >= 0) {
                v1040 = parseInt(vArguments4[0], 10);
              } else {
                v1039 = parseFloat(vArguments4[0]);
              }
            } else if (vArguments4.length === 2) {
              v1039 = parseFloat(vArguments4[0]);
              v1040 = parseInt(vArguments4[1], 10);
            }
            var v1043;
            if (typeof v1039 === "number") {
              if (vThis99._state !== "loaded" || vThis99._playLock) {
                vThis99._queue.push({
                  event: "rate",
                  action: function () {
                    vThis99.rate.apply(vThis99, vArguments4);
                  }
                });
                return vThis99;
              }
              if (typeof v1040 === "undefined") {
                vThis99._rate = v1039;
              }
              v1040 = vThis99._getSoundIds(v1040);
              for (var vLN0162 = 0; vLN0162 < v1040.length; vLN0162++) {
                v1043 = vThis99._soundById(v1040[vLN0162]);
                if (v1043) {
                  if (vThis99.playing(v1040[vLN0162])) {
                    v1043._rateSeek = vThis99.seek(v1040[vLN0162]);
                    v1043._playStart = vThis99._webAudio ? v998.ctx.currentTime : v1043._playStart;
                  }
                  v1043._rate = v1039;
                  if (vThis99._webAudio && v1043._node && v1043._node.bufferSource) {
                    v1043._node.bufferSource.playbackRate.setValueAtTime(v1039, v998.ctx.currentTime);
                  } else if (v1043._node) {
                    v1043._node.playbackRate = v1039;
                  }
                  var v1044 = vThis99.seek(v1040[vLN0162]);
                  var v1045 = (vThis99._sprite[v1043._sprite][0] + vThis99._sprite[v1043._sprite][1]) / 1000 - v1044;
                  var v1046 = v1045 * 1000 / Math.abs(v1043._rate);
                  if (vThis99._endTimers[v1040[vLN0162]] || !v1043._paused) {
                    vThis99._clearTimer(v1040[vLN0162]);
                    vThis99._endTimers[v1040[vLN0162]] = setTimeout(vThis99._ended.bind(vThis99, v1043), v1046);
                  }
                  vThis99._emit("rate", v1043._id);
                }
              }
            } else {
              v1043 = vThis99._soundById(v1040);
              if (v1043) {
                return v1043._rate;
              } else {
                return vThis99._rate;
              }
            }
            return vThis99;
          },
          seek: function () {
            var vThis100 = this;
            var vArguments5 = arguments;
            var v1047;
            var v1048;
            if (vArguments5.length === 0) {
              if (vThis100._sounds.length) {
                v1048 = vThis100._sounds[0]._id;
              }
            } else if (vArguments5.length === 1) {
              var v1049 = vThis100._getSoundIds();
              var v1050 = v1049.indexOf(vArguments5[0]);
              if (v1050 >= 0) {
                v1048 = parseInt(vArguments5[0], 10);
              } else if (vThis100._sounds.length) {
                v1048 = vThis100._sounds[0]._id;
                v1047 = parseFloat(vArguments5[0]);
              }
            } else if (vArguments5.length === 2) {
              v1047 = parseFloat(vArguments5[0]);
              v1048 = parseInt(vArguments5[1], 10);
            }
            if (typeof v1048 === "undefined") {
              return 0;
            }
            if (typeof v1047 === "number" && (vThis100._state !== "loaded" || vThis100._playLock)) {
              vThis100._queue.push({
                event: "seek",
                action: function () {
                  vThis100.seek.apply(vThis100, vArguments5);
                }
              });
              return vThis100;
            }
            var v1051 = vThis100._soundById(v1048);
            if (v1051) {
              if (typeof v1047 === "number" && v1047 >= 0) {
                var v1052 = vThis100.playing(v1048);
                if (v1052) {
                  vThis100.pause(v1048, true);
                }
                v1051._seek = v1047;
                v1051._ended = false;
                vThis100._clearTimer(v1048);
                if (!vThis100._webAudio && v1051._node && !isNaN(v1051._node.duration)) {
                  v1051._node.currentTime = v1047;
                }
                var vF33 = function () {
                  if (v1052) {
                    vThis100.play(v1048, true);
                  }
                  vThis100._emit("seek", v1048);
                };
                if (v1052 && !vThis100._webAudio) {
                  var vF34 = function () {
                    if (!vThis100._playLock) {
                      vF33();
                    } else {
                      setTimeout(vF34, 0);
                    }
                  };
                  setTimeout(vF34, 0);
                } else {
                  vF33();
                }
              } else if (vThis100._webAudio) {
                var v1053 = vThis100.playing(v1048) ? v998.ctx.currentTime - v1051._playStart : 0;
                var v1054 = v1051._rateSeek ? v1051._rateSeek - v1051._seek : 0;
                return v1051._seek + (v1054 + v1053 * Math.abs(v1051._rate));
              } else {
                return v1051._node.currentTime;
              }
            }
            return vThis100;
          },
          playing: function (p1197) {
            var vThis101 = this;
            if (typeof p1197 === "number") {
              var v1055 = vThis101._soundById(p1197);
              if (v1055) {
                return !v1055._paused;
              } else {
                return false;
              }
            }
            for (var vLN0163 = 0; vLN0163 < vThis101._sounds.length; vLN0163++) {
              if (!vThis101._sounds[vLN0163]._paused) {
                return true;
              }
            }
            return false;
          },
          duration: function (p1198) {
            var vThis102 = this;
            var v1056 = vThis102._duration;
            var v1057 = vThis102._soundById(p1198);
            if (v1057) {
              v1056 = vThis102._sprite[v1057._sprite][1] / 1000;
            }
            return v1056;
          },
          state: function () {
            return this._state;
          },
          unload: function () {
            var vThis103 = this;
            var v1058 = vThis103._sounds;
            for (var vLN0164 = 0; vLN0164 < v1058.length; vLN0164++) {
              if (!v1058[vLN0164]._paused) {
                vThis103.stop(v1058[vLN0164]._id);
              }
              if (!vThis103._webAudio) {
                vThis103._clearSound(v1058[vLN0164]._node);
                v1058[vLN0164]._node.removeEventListener("error", v1058[vLN0164]._errorFn, false);
                v1058[vLN0164]._node.removeEventListener(v998._canPlayEvent, v1058[vLN0164]._loadFn, false);
                v1058[vLN0164]._node.removeEventListener("ended", v1058[vLN0164]._endFn, false);
                v998._releaseHtml5Audio(v1058[vLN0164]._node);
              }
              delete v1058[vLN0164]._node;
              vThis103._clearTimer(v1058[vLN0164]._id);
            }
            var v1059 = v998._howls.indexOf(vThis103);
            if (v1059 >= 0) {
              v998._howls.splice(v1059, 1);
            }
            var v1060 = true;
            for (vLN0164 = 0; vLN0164 < v998._howls.length; vLN0164++) {
              if (v998._howls[vLN0164]._src === vThis103._src || vThis103._src.indexOf(v998._howls[vLN0164]._src) >= 0) {
                v1060 = false;
                break;
              }
            }
            if (vO61 && v1060) {
              delete vO61[vThis103._src];
            }
            v998.noAudio = false;
            vThis103._state = "unloaded";
            vThis103._sounds = [];
            vThis103 = null;
            return null;
          },
          on: function (p1199, p1200, p1201, p1202) {
            var vThis104 = this;
            var v1061 = vThis104["_on" + p1199];
            if (typeof p1200 === "function") {
              v1061.push(p1202 ? {
                id: p1201,
                fn: p1200,
                once: p1202
              } : {
                id: p1201,
                fn: p1200
              });
            }
            return vThis104;
          },
          off: function (p1203, p1204, p1205) {
            var vThis105 = this;
            var v1062 = vThis105["_on" + p1203];
            var vLN0165 = 0;
            if (typeof p1204 === "number") {
              p1205 = p1204;
              p1204 = null;
            }
            if (p1204 || p1205) {
              for (vLN0165 = 0; vLN0165 < v1062.length; vLN0165++) {
                var v1063 = p1205 === v1062[vLN0165].id;
                if (p1204 === v1062[vLN0165].fn && v1063 || !p1204 && v1063) {
                  v1062.splice(vLN0165, 1);
                  break;
                }
              }
            } else if (p1203) {
              vThis105["_on" + p1203] = [];
            } else {
              var v1064 = Object.keys(vThis105);
              for (vLN0165 = 0; vLN0165 < v1064.length; vLN0165++) {
                if (v1064[vLN0165].indexOf("_on") === 0 && Array.isArray(vThis105[v1064[vLN0165]])) {
                  vThis105[v1064[vLN0165]] = [];
                }
              }
            }
            return vThis105;
          },
          once: function (p1206, p1207, p1208) {
            var vThis106 = this;
            vThis106.on(p1206, p1207, p1208, 1);
            return vThis106;
          },
          _emit: function (p1209, p1210, p1211) {
            var vThis107 = this;
            var v1065 = vThis107["_on" + p1209];
            for (var v1066 = v1065.length - 1; v1066 >= 0; v1066--) {
              if (!v1065[v1066].id || v1065[v1066].id === p1210 || p1209 === "load") {
                setTimeout(function (p1212) {
                  p1212.call(this, p1210, p1211);
                }.bind(vThis107, v1065[v1066].fn), 0);
                if (v1065[v1066].once) {
                  vThis107.off(p1209, v1065[v1066].fn, v1065[v1066].id);
                }
              }
            }
            vThis107._loadQueue(p1209);
            return vThis107;
          },
          _loadQueue: function (p1213) {
            var vThis108 = this;
            if (vThis108._queue.length > 0) {
              var v1067 = vThis108._queue[0];
              if (v1067.event === p1213) {
                vThis108._queue.shift();
                vThis108._loadQueue();
              }
              if (!p1213) {
                v1067.action();
              }
            }
            return vThis108;
          },
          _ended: function (p1214) {
            var vThis109 = this;
            var v1068 = p1214._sprite;
            if (!vThis109._webAudio && p1214._node && !p1214._node.paused && !p1214._node.ended && p1214._node.currentTime < p1214._stop) {
              setTimeout(vThis109._ended.bind(vThis109, p1214), 100);
              return vThis109;
            }
            var v1069 = !!p1214._loop || !!vThis109._sprite[v1068][2];
            vThis109._emit("end", p1214._id);
            if (!vThis109._webAudio && v1069) {
              vThis109.stop(p1214._id, true).play(p1214._id);
            }
            if (vThis109._webAudio && v1069) {
              vThis109._emit("play", p1214._id);
              p1214._seek = p1214._start || 0;
              p1214._rateSeek = 0;
              p1214._playStart = v998.ctx.currentTime;
              var v1070 = (p1214._stop - p1214._start) * 1000 / Math.abs(p1214._rate);
              vThis109._endTimers[p1214._id] = setTimeout(vThis109._ended.bind(vThis109, p1214), v1070);
            }
            if (vThis109._webAudio && !v1069) {
              p1214._paused = true;
              p1214._ended = true;
              p1214._seek = p1214._start || 0;
              p1214._rateSeek = 0;
              vThis109._clearTimer(p1214._id);
              vThis109._cleanBuffer(p1214._node);
              v998._autoSuspend();
            }
            if (!vThis109._webAudio && !v1069) {
              vThis109.stop(p1214._id, true);
            }
            return vThis109;
          },
          _clearTimer: function (p1215) {
            var vThis110 = this;
            if (vThis110._endTimers[p1215]) {
              if (typeof vThis110._endTimers[p1215] !== "function") {
                clearTimeout(vThis110._endTimers[p1215]);
              } else {
                var v1071 = vThis110._soundById(p1215);
                if (v1071 && v1071._node) {
                  v1071._node.removeEventListener("ended", vThis110._endTimers[p1215], false);
                }
              }
              delete vThis110._endTimers[p1215];
            }
            return vThis110;
          },
          _soundById: function (p1216) {
            var vThis111 = this;
            for (var vLN0166 = 0; vLN0166 < vThis111._sounds.length; vLN0166++) {
              if (p1216 === vThis111._sounds[vLN0166]._id) {
                return vThis111._sounds[vLN0166];
              }
            }
            return null;
          },
          _inactiveSound: function () {
            var vThis112 = this;
            vThis112._drain();
            for (var vLN0167 = 0; vLN0167 < vThis112._sounds.length; vLN0167++) {
              if (vThis112._sounds[vLN0167]._ended) {
                return vThis112._sounds[vLN0167].reset();
              }
            }
            return new vF35(vThis112);
          },
          _drain: function () {
            var vThis113 = this;
            var v1072 = vThis113._pool;
            var vLN0168 = 0;
            var vLN0169 = 0;
            if (vThis113._sounds.length < v1072) {
              return;
            }
            for (vLN0169 = 0; vLN0169 < vThis113._sounds.length; vLN0169++) {
              if (vThis113._sounds[vLN0169]._ended) {
                vLN0168++;
              }
            }
            for (vLN0169 = vThis113._sounds.length - 1; vLN0169 >= 0; vLN0169--) {
              if (vLN0168 <= v1072) {
                return;
              }
              if (vThis113._sounds[vLN0169]._ended) {
                if (vThis113._webAudio && vThis113._sounds[vLN0169]._node) {
                  vThis113._sounds[vLN0169]._node.disconnect(0);
                }
                vThis113._sounds.splice(vLN0169, 1);
                vLN0168--;
              }
            }
          },
          _getSoundIds: function (p1217) {
            var vThis114 = this;
            if (typeof p1217 === "undefined") {
              var vA22 = [];
              for (var vLN0170 = 0; vLN0170 < vThis114._sounds.length; vLN0170++) {
                vA22.push(vThis114._sounds[vLN0170]._id);
              }
              return vA22;
            } else {
              return [p1217];
            }
          },
          _refreshBuffer: function (p1218) {
            var vThis115 = this;
            p1218._node.bufferSource = v998.ctx.createBufferSource();
            p1218._node.bufferSource.buffer = vO61[vThis115._src];
            if (p1218._panner) {
              p1218._node.bufferSource.connect(p1218._panner);
            } else {
              p1218._node.bufferSource.connect(p1218._node);
            }
            p1218._node.bufferSource.loop = p1218._loop;
            if (p1218._loop) {
              p1218._node.bufferSource.loopStart = p1218._start || 0;
              p1218._node.bufferSource.loopEnd = p1218._stop || 0;
            }
            p1218._node.bufferSource.playbackRate.setValueAtTime(p1218._rate, v998.ctx.currentTime);
            return vThis115;
          },
          _cleanBuffer: function (p1219) {
            var vThis116 = this;
            var v1073 = v998._navigator && v998._navigator.vendor.indexOf("Apple") >= 0;
            if (v998._scratchBuffer && p1219.bufferSource) {
              p1219.bufferSource.onended = null;
              p1219.bufferSource.disconnect(0);
              if (v1073) {
                try {
                  p1219.bufferSource.buffer = v998._scratchBuffer;
                } catch (e49) {}
              }
            }
            p1219.bufferSource = null;
            return vThis116;
          },
          _clearSound: function (p1220) {
            var v1074 = /MSIE |Trident\//.test(v998._navigator && v998._navigator.userAgent);
            if (!v1074) {
              p1220.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
            }
          }
        };
        var vF35 = function (p1221) {
          this._parent = p1221;
          this.init();
        };
        vF35.prototype = {
          init: function () {
            var vThis117 = this;
            var v1075 = vThis117._parent;
            vThis117._muted = v1075._muted;
            vThis117._loop = v1075._loop;
            vThis117._volume = v1075._volume;
            vThis117._rate = v1075._rate;
            vThis117._seek = 0;
            vThis117._paused = true;
            vThis117._ended = true;
            vThis117._sprite = "__default";
            vThis117._id = ++v998._counter;
            v1075._sounds.push(vThis117);
            vThis117.create();
            return vThis117;
          },
          create: function () {
            var vThis118 = this;
            var v1076 = vThis118._parent;
            var v1077 = v998._muted || vThis118._muted || vThis118._parent._muted ? 0 : vThis118._volume;
            if (v1076._webAudio) {
              vThis118._node = typeof v998.ctx.createGain === "undefined" ? v998.ctx.createGainNode() : v998.ctx.createGain();
              vThis118._node.gain.setValueAtTime(v1077, v998.ctx.currentTime);
              vThis118._node.paused = true;
              vThis118._node.connect(v998.masterGain);
            } else if (!v998.noAudio) {
              vThis118._node = v998._obtainHtml5Audio();
              vThis118._errorFn = vThis118._errorListener.bind(vThis118);
              vThis118._node.addEventListener("error", vThis118._errorFn, false);
              vThis118._loadFn = vThis118._loadListener.bind(vThis118);
              vThis118._node.addEventListener(v998._canPlayEvent, vThis118._loadFn, false);
              vThis118._endFn = vThis118._endListener.bind(vThis118);
              vThis118._node.addEventListener("ended", vThis118._endFn, false);
              vThis118._node.src = v1076._src;
              vThis118._node.preload = v1076._preload === true ? "auto" : v1076._preload;
              vThis118._node.volume = v1077 * v998.volume();
              vThis118._node.load();
            }
            return vThis118;
          },
          reset: function () {
            var vThis119 = this;
            var v1078 = vThis119._parent;
            vThis119._muted = v1078._muted;
            vThis119._loop = v1078._loop;
            vThis119._volume = v1078._volume;
            vThis119._rate = v1078._rate;
            vThis119._seek = 0;
            vThis119._rateSeek = 0;
            vThis119._paused = true;
            vThis119._ended = true;
            vThis119._sprite = "__default";
            vThis119._id = ++v998._counter;
            return vThis119;
          },
          _errorListener: function () {
            var vThis120 = this;
            vThis120._parent._emit("loaderror", vThis120._id, vThis120._node.error ? vThis120._node.error.code : 0);
            vThis120._node.removeEventListener("error", vThis120._errorFn, false);
          },
          _loadListener: function () {
            var vThis121 = this;
            var v1079 = vThis121._parent;
            v1079._duration = Math.ceil(vThis121._node.duration * 10) / 10;
            if (Object.keys(v1079._sprite).length === 0) {
              v1079._sprite = {
                __default: [0, v1079._duration * 1000]
              };
            }
            if (v1079._state !== "loaded") {
              v1079._state = "loaded";
              v1079._emit("load");
              v1079._loadQueue();
            }
            vThis121._node.removeEventListener(v998._canPlayEvent, vThis121._loadFn, false);
          },
          _endListener: function () {
            var vThis122 = this;
            var v1080 = vThis122._parent;
            if (v1080._duration === Infinity) {
              v1080._duration = Math.ceil(vThis122._node.duration * 10) / 10;
              if (v1080._sprite.__default[1] === Infinity) {
                v1080._sprite.__default[1] = v1080._duration * 1000;
              }
              v1080._ended(vThis122);
            }
            vThis122._node.removeEventListener("ended", vThis122._endFn, false);
          }
        };
        var vO61 = {};
        var vF36 = function (p1222) {
          var v1081 = p1222._src;
          if (vO61[v1081]) {
            p1222._duration = vO61[v1081].duration;
            vF41(p1222);
            return;
          }
          if (/^data:[^;]+;base64,/.test(v1081)) {
            var vAtob = atob(v1081.split(",")[1]);
            var v1082 = new Uint8Array(vAtob.length);
            for (var vLN0171 = 0; vLN0171 < vAtob.length; ++vLN0171) {
              v1082[vLN0171] = vAtob.charCodeAt(vLN0171);
            }
            vF38(v1082.buffer, p1222);
          } else {
            var v1083 = new XMLHttpRequest();
            v1083.open(p1222._xhr.method, v1081, true);
            v1083.withCredentials = p1222._xhr.withCredentials;
            v1083.responseType = "arraybuffer";
            if (p1222._xhr.headers) {
              Object.keys(p1222._xhr.headers).forEach(function (p1223) {
                v1083.setRequestHeader(p1223, p1222._xhr.headers[p1223]);
              });
            }
            v1083.onload = function () {
              var v1084 = (v1083.status + "")[0];
              if (v1084 !== "0" && v1084 !== "2" && v1084 !== "3") {
                p1222._emit("loaderror", null, "Failed loading audio file with status: " + v1083.status + ".");
                return;
              }
              vF38(v1083.response, p1222);
            };
            v1083.onerror = function () {
              if (p1222._webAudio) {
                p1222._html5 = true;
                p1222._webAudio = false;
                p1222._sounds = [];
                delete vO61[v1081];
                p1222.load();
              }
            };
            vF37(v1083);
          }
        };
        var vF37 = function (p1224) {
          try {
            p1224.send();
          } catch (e50) {
            p1224.onerror();
          }
        };
        var vF38 = function (p1225, p1226) {
          var vF39 = function () {
            p1226._emit("loaderror", null, "Decoding audio data failed.");
          };
          var vF40 = function (p1227) {
            if (p1227 && p1226._sounds.length > 0) {
              vO61[p1226._src] = p1227;
              vF41(p1226, p1227);
            } else {
              vF39();
            }
          };
          if (typeof Promise !== "undefined" && v998.ctx.decodeAudioData.length === 1) {
            v998.ctx.decodeAudioData(p1225).then(vF40).catch(vF39);
          } else {
            v998.ctx.decodeAudioData(p1225, vF40, vF39);
          }
        };
        var vF41 = function (p1228, p1229) {
          if (p1229 && !p1228._duration) {
            p1228._duration = p1229.duration;
          }
          if (Object.keys(p1228._sprite).length === 0) {
            p1228._sprite = {
              __default: [0, p1228._duration * 1000]
            };
          }
          if (p1228._state !== "loaded") {
            p1228._state = "loaded";
            p1228._emit("load");
            p1228._loadQueue();
          }
        };
        var vF42 = function () {
          if (!v998.usingWebAudio) {
            return;
          }
          try {
            if (typeof AudioContext !== "undefined") {
              v998.ctx = new AudioContext();
            } else if (typeof webkitAudioContext !== "undefined") {
              v998.ctx = new webkitAudioContext();
            } else {
              v998.usingWebAudio = false;
            }
          } catch (e51) {
            v998.usingWebAudio = false;
          }
          if (!v998.ctx) {
            v998.usingWebAudio = false;
          }
          var v1085 = /iP(hone|od|ad)/.test(v998._navigator && v998._navigator.platform);
          var v1086 = v998._navigator && v998._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
          var v1087 = v1086 ? parseInt(v1086[1], 10) : null;
          if (v1085 && v1087 && v1087 < 9) {
            var v1088 = /safari/.test(v998._navigator && v998._navigator.userAgent.toLowerCase());
            if (v998._navigator && !v1088) {
              v998.usingWebAudio = false;
            }
          }
          if (v998.usingWebAudio) {
            v998.masterGain = typeof v998.ctx.createGain === "undefined" ? v998.ctx.createGainNode() : v998.ctx.createGain();
            v998.masterGain.gain.setValueAtTime(v998._muted ? 0 : v998._volume, v998.ctx.currentTime);
            v998.masterGain.connect(v998.ctx.destination);
          }
          v998._setup();
        };
        if (true) {
          v967 = [];
          v968 = function () {
            return {
              Howler: v998,
              Howl: vF27
            };
          }.apply(p1170, v967);
          if (v968 !== undefined) {
            p1169.exports = v968;
          }
        }
        if (true) {
          p1170.Howler = v998;
          p1170.Howl = vF27;
        }
        if (typeof p1171.g !== "undefined") {
          p1171.g.HowlerGlobal = vF24;
          p1171.g.Howler = v998;
          p1171.g.Howl = vF27;
          p1171.g.Sound = vF35;
        } else if (typeof window !== "undefined") {
          window.HowlerGlobal = vF24;
          window.Howler = v998;
          window.Howl = vF27;
          window.Sound = vF35;
        }
      })();
      (function () {
        'use strict';

        HowlerGlobal.prototype._pos = [0, 0, 0];
        HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
        HowlerGlobal.prototype.stereo = function (p1230) {
          var vThis123 = this;
          if (!vThis123.ctx || !vThis123.ctx.listener) {
            return vThis123;
          }
          for (var v1089 = vThis123._howls.length - 1; v1089 >= 0; v1089--) {
            vThis123._howls[v1089].stereo(p1230);
          }
          return vThis123;
        };
        HowlerGlobal.prototype.pos = function (p1231, p1232, p1233) {
          var vThis124 = this;
          if (!vThis124.ctx || !vThis124.ctx.listener) {
            return vThis124;
          }
          p1232 = typeof p1232 !== "number" ? vThis124._pos[1] : p1232;
          p1233 = typeof p1233 !== "number" ? vThis124._pos[2] : p1233;
          if (typeof p1231 === "number") {
            vThis124._pos = [p1231, p1232, p1233];
            if (typeof vThis124.ctx.listener.positionX !== "undefined") {
              vThis124.ctx.listener.positionX.setTargetAtTime(vThis124._pos[0], Howler.ctx.currentTime, 0.1);
              vThis124.ctx.listener.positionY.setTargetAtTime(vThis124._pos[1], Howler.ctx.currentTime, 0.1);
              vThis124.ctx.listener.positionZ.setTargetAtTime(vThis124._pos[2], Howler.ctx.currentTime, 0.1);
            } else {
              vThis124.ctx.listener.setPosition(vThis124._pos[0], vThis124._pos[1], vThis124._pos[2]);
            }
          } else {
            return vThis124._pos;
          }
          return vThis124;
        };
        HowlerGlobal.prototype.orientation = function (p1234, p1235, p1236, p1237, p1238, p1239) {
          var vThis125 = this;
          if (!vThis125.ctx || !vThis125.ctx.listener) {
            return vThis125;
          }
          var v1090 = vThis125._orientation;
          p1235 = typeof p1235 !== "number" ? v1090[1] : p1235;
          p1236 = typeof p1236 !== "number" ? v1090[2] : p1236;
          p1237 = typeof p1237 !== "number" ? v1090[3] : p1237;
          p1238 = typeof p1238 !== "number" ? v1090[4] : p1238;
          p1239 = typeof p1239 !== "number" ? v1090[5] : p1239;
          if (typeof p1234 === "number") {
            vThis125._orientation = [p1234, p1235, p1236, p1237, p1238, p1239];
            if (typeof vThis125.ctx.listener.forwardX !== "undefined") {
              vThis125.ctx.listener.forwardX.setTargetAtTime(p1234, Howler.ctx.currentTime, 0.1);
              vThis125.ctx.listener.forwardY.setTargetAtTime(p1235, Howler.ctx.currentTime, 0.1);
              vThis125.ctx.listener.forwardZ.setTargetAtTime(p1236, Howler.ctx.currentTime, 0.1);
              vThis125.ctx.listener.upX.setTargetAtTime(p1237, Howler.ctx.currentTime, 0.1);
              vThis125.ctx.listener.upY.setTargetAtTime(p1238, Howler.ctx.currentTime, 0.1);
              vThis125.ctx.listener.upZ.setTargetAtTime(p1239, Howler.ctx.currentTime, 0.1);
            } else {
              vThis125.ctx.listener.setOrientation(p1234, p1235, p1236, p1237, p1238, p1239);
            }
          } else {
            return v1090;
          }
          return vThis125;
        };
        Howl.prototype.init = function (p1240) {
          return function (p1241) {
            var vThis126 = this;
            vThis126._orientation = p1241.orientation || [1, 0, 0];
            vThis126._stereo = p1241.stereo || null;
            vThis126._pos = p1241.pos || null;
            vThis126._pannerAttr = {
              coneInnerAngle: typeof p1241.coneInnerAngle !== "undefined" ? p1241.coneInnerAngle : 360,
              coneOuterAngle: typeof p1241.coneOuterAngle !== "undefined" ? p1241.coneOuterAngle : 360,
              coneOuterGain: typeof p1241.coneOuterGain !== "undefined" ? p1241.coneOuterGain : 0,
              distanceModel: typeof p1241.distanceModel !== "undefined" ? p1241.distanceModel : "inverse",
              maxDistance: typeof p1241.maxDistance !== "undefined" ? p1241.maxDistance : 10000,
              panningModel: typeof p1241.panningModel !== "undefined" ? p1241.panningModel : "HRTF",
              refDistance: typeof p1241.refDistance !== "undefined" ? p1241.refDistance : 1,
              rolloffFactor: typeof p1241.rolloffFactor !== "undefined" ? p1241.rolloffFactor : 1
            };
            vThis126._onstereo = p1241.onstereo ? [{
              fn: p1241.onstereo
            }] : [];
            vThis126._onpos = p1241.onpos ? [{
              fn: p1241.onpos
            }] : [];
            vThis126._onorientation = p1241.onorientation ? [{
              fn: p1241.onorientation
            }] : [];
            return p1240.call(this, p1241);
          };
        }(Howl.prototype.init);
        Howl.prototype.stereo = function (p1242, p1243) {
          var vThis127 = this;
          if (!vThis127._webAudio) {
            return vThis127;
          }
          if (vThis127._state !== "loaded") {
            vThis127._queue.push({
              event: "stereo",
              action: function () {
                vThis127.stereo(p1242, p1243);
              }
            });
            return vThis127;
          }
          var v1091 = typeof Howler.ctx.createStereoPanner === "undefined" ? "spatial" : "stereo";
          if (typeof p1243 === "undefined") {
            if (typeof p1242 === "number") {
              vThis127._stereo = p1242;
              vThis127._pos = [p1242, 0, 0];
            } else {
              return vThis127._stereo;
            }
          }
          var v1092 = vThis127._getSoundIds(p1243);
          for (var vLN0172 = 0; vLN0172 < v1092.length; vLN0172++) {
            var v1093 = vThis127._soundById(v1092[vLN0172]);
            if (v1093) {
              if (typeof p1242 === "number") {
                v1093._stereo = p1242;
                v1093._pos = [p1242, 0, 0];
                if (v1093._node) {
                  v1093._pannerAttr.panningModel = "equalpower";
                  if (!v1093._panner || !v1093._panner.pan) {
                    vF43(v1093, v1091);
                  }
                  if (v1091 === "spatial") {
                    if (typeof v1093._panner.positionX !== "undefined") {
                      v1093._panner.positionX.setValueAtTime(p1242, Howler.ctx.currentTime);
                      v1093._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                      v1093._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                    } else {
                      v1093._panner.setPosition(p1242, 0, 0);
                    }
                  } else {
                    v1093._panner.pan.setValueAtTime(p1242, Howler.ctx.currentTime);
                  }
                }
                vThis127._emit("stereo", v1093._id);
              } else {
                return v1093._stereo;
              }
            }
          }
          return vThis127;
        };
        Howl.prototype.pos = function (p1244, p1245, p1246, p1247) {
          var vThis128 = this;
          if (!vThis128._webAudio) {
            return vThis128;
          }
          if (vThis128._state !== "loaded") {
            vThis128._queue.push({
              event: "pos",
              action: function () {
                vThis128.pos(p1244, p1245, p1246, p1247);
              }
            });
            return vThis128;
          }
          p1245 = typeof p1245 !== "number" ? 0 : p1245;
          p1246 = typeof p1246 !== "number" ? -0.5 : p1246;
          if (typeof p1247 === "undefined") {
            if (typeof p1244 === "number") {
              vThis128._pos = [p1244, p1245, p1246];
            } else {
              return vThis128._pos;
            }
          }
          var v1094 = vThis128._getSoundIds(p1247);
          for (var vLN0173 = 0; vLN0173 < v1094.length; vLN0173++) {
            var v1095 = vThis128._soundById(v1094[vLN0173]);
            if (v1095) {
              if (typeof p1244 === "number") {
                v1095._pos = [p1244, p1245, p1246];
                if (v1095._node) {
                  if (!v1095._panner || v1095._panner.pan) {
                    vF43(v1095, "spatial");
                  }
                  if (typeof v1095._panner.positionX !== "undefined") {
                    v1095._panner.positionX.setValueAtTime(p1244, Howler.ctx.currentTime);
                    v1095._panner.positionY.setValueAtTime(p1245, Howler.ctx.currentTime);
                    v1095._panner.positionZ.setValueAtTime(p1246, Howler.ctx.currentTime);
                  } else {
                    v1095._panner.setPosition(p1244, p1245, p1246);
                  }
                }
                vThis128._emit("pos", v1095._id);
              } else {
                return v1095._pos;
              }
            }
          }
          return vThis128;
        };
        Howl.prototype.orientation = function (p1248, p1249, p1250, p1251) {
          var vThis129 = this;
          if (!vThis129._webAudio) {
            return vThis129;
          }
          if (vThis129._state !== "loaded") {
            vThis129._queue.push({
              event: "orientation",
              action: function () {
                vThis129.orientation(p1248, p1249, p1250, p1251);
              }
            });
            return vThis129;
          }
          p1249 = typeof p1249 !== "number" ? vThis129._orientation[1] : p1249;
          p1250 = typeof p1250 !== "number" ? vThis129._orientation[2] : p1250;
          if (typeof p1251 === "undefined") {
            if (typeof p1248 === "number") {
              vThis129._orientation = [p1248, p1249, p1250];
            } else {
              return vThis129._orientation;
            }
          }
          var v1096 = vThis129._getSoundIds(p1251);
          for (var vLN0174 = 0; vLN0174 < v1096.length; vLN0174++) {
            var v1097 = vThis129._soundById(v1096[vLN0174]);
            if (v1097) {
              if (typeof p1248 === "number") {
                v1097._orientation = [p1248, p1249, p1250];
                if (v1097._node) {
                  if (!v1097._panner) {
                    if (!v1097._pos) {
                      v1097._pos = vThis129._pos || [0, 0, -0.5];
                    }
                    vF43(v1097, "spatial");
                  }
                  if (typeof v1097._panner.orientationX !== "undefined") {
                    v1097._panner.orientationX.setValueAtTime(p1248, Howler.ctx.currentTime);
                    v1097._panner.orientationY.setValueAtTime(p1249, Howler.ctx.currentTime);
                    v1097._panner.orientationZ.setValueAtTime(p1250, Howler.ctx.currentTime);
                  } else {
                    v1097._panner.setOrientation(p1248, p1249, p1250);
                  }
                }
                vThis129._emit("orientation", v1097._id);
              } else {
                return v1097._orientation;
              }
            }
          }
          return vThis129;
        };
        Howl.prototype.pannerAttr = function () {
          var vThis130 = this;
          var vArguments6 = arguments;
          var v1098;
          var v1099;
          var v1100;
          if (!vThis130._webAudio) {
            return vThis130;
          }
          if (vArguments6.length === 0) {
            return vThis130._pannerAttr;
          } else if (vArguments6.length === 1) {
            if (typeof vArguments6[0] === "object") {
              v1098 = vArguments6[0];
              if (typeof v1099 === "undefined") {
                if (!v1098.pannerAttr) {
                  v1098.pannerAttr = {
                    coneInnerAngle: v1098.coneInnerAngle,
                    coneOuterAngle: v1098.coneOuterAngle,
                    coneOuterGain: v1098.coneOuterGain,
                    distanceModel: v1098.distanceModel,
                    maxDistance: v1098.maxDistance,
                    refDistance: v1098.refDistance,
                    rolloffFactor: v1098.rolloffFactor,
                    panningModel: v1098.panningModel
                  };
                }
                vThis130._pannerAttr = {
                  coneInnerAngle: typeof v1098.pannerAttr.coneInnerAngle !== "undefined" ? v1098.pannerAttr.coneInnerAngle : vThis130._coneInnerAngle,
                  coneOuterAngle: typeof v1098.pannerAttr.coneOuterAngle !== "undefined" ? v1098.pannerAttr.coneOuterAngle : vThis130._coneOuterAngle,
                  coneOuterGain: typeof v1098.pannerAttr.coneOuterGain !== "undefined" ? v1098.pannerAttr.coneOuterGain : vThis130._coneOuterGain,
                  distanceModel: typeof v1098.pannerAttr.distanceModel !== "undefined" ? v1098.pannerAttr.distanceModel : vThis130._distanceModel,
                  maxDistance: typeof v1098.pannerAttr.maxDistance !== "undefined" ? v1098.pannerAttr.maxDistance : vThis130._maxDistance,
                  refDistance: typeof v1098.pannerAttr.refDistance !== "undefined" ? v1098.pannerAttr.refDistance : vThis130._refDistance,
                  rolloffFactor: typeof v1098.pannerAttr.rolloffFactor !== "undefined" ? v1098.pannerAttr.rolloffFactor : vThis130._rolloffFactor,
                  panningModel: typeof v1098.pannerAttr.panningModel !== "undefined" ? v1098.pannerAttr.panningModel : vThis130._panningModel
                };
              }
            } else {
              v1100 = vThis130._soundById(parseInt(vArguments6[0], 10));
              if (v1100) {
                return v1100._pannerAttr;
              } else {
                return vThis130._pannerAttr;
              }
            }
          } else if (vArguments6.length === 2) {
            v1098 = vArguments6[0];
            v1099 = parseInt(vArguments6[1], 10);
          }
          var v1101 = vThis130._getSoundIds(v1099);
          for (var vLN0175 = 0; vLN0175 < v1101.length; vLN0175++) {
            v1100 = vThis130._soundById(v1101[vLN0175]);
            if (v1100) {
              var v1102 = v1100._pannerAttr;
              v1102 = {
                coneInnerAngle: typeof v1098.coneInnerAngle !== "undefined" ? v1098.coneInnerAngle : v1102.coneInnerAngle,
                coneOuterAngle: typeof v1098.coneOuterAngle !== "undefined" ? v1098.coneOuterAngle : v1102.coneOuterAngle,
                coneOuterGain: typeof v1098.coneOuterGain !== "undefined" ? v1098.coneOuterGain : v1102.coneOuterGain,
                distanceModel: typeof v1098.distanceModel !== "undefined" ? v1098.distanceModel : v1102.distanceModel,
                maxDistance: typeof v1098.maxDistance !== "undefined" ? v1098.maxDistance : v1102.maxDistance,
                refDistance: typeof v1098.refDistance !== "undefined" ? v1098.refDistance : v1102.refDistance,
                rolloffFactor: typeof v1098.rolloffFactor !== "undefined" ? v1098.rolloffFactor : v1102.rolloffFactor,
                panningModel: typeof v1098.panningModel !== "undefined" ? v1098.panningModel : v1102.panningModel
              };
              var v1103 = v1100._panner;
              if (v1103) {
                v1103.coneInnerAngle = v1102.coneInnerAngle;
                v1103.coneOuterAngle = v1102.coneOuterAngle;
                v1103.coneOuterGain = v1102.coneOuterGain;
                v1103.distanceModel = v1102.distanceModel;
                v1103.maxDistance = v1102.maxDistance;
                v1103.refDistance = v1102.refDistance;
                v1103.rolloffFactor = v1102.rolloffFactor;
                v1103.panningModel = v1102.panningModel;
              } else {
                if (!v1100._pos) {
                  v1100._pos = vThis130._pos || [0, 0, -0.5];
                }
                vF43(v1100, "spatial");
              }
            }
          }
          return vThis130;
        };
        Sound.prototype.init = function (p1252) {
          return function () {
            var vThis131 = this;
            var v1104 = vThis131._parent;
            vThis131._orientation = v1104._orientation;
            vThis131._stereo = v1104._stereo;
            vThis131._pos = v1104._pos;
            vThis131._pannerAttr = v1104._pannerAttr;
            p1252.call(this);
            if (vThis131._stereo) {
              v1104.stereo(vThis131._stereo);
            } else if (vThis131._pos) {
              v1104.pos(vThis131._pos[0], vThis131._pos[1], vThis131._pos[2], vThis131._id);
            }
          };
        }(Sound.prototype.init);
        Sound.prototype.reset = function (p1253) {
          return function () {
            var vThis132 = this;
            var v1105 = vThis132._parent;
            vThis132._orientation = v1105._orientation;
            vThis132._stereo = v1105._stereo;
            vThis132._pos = v1105._pos;
            vThis132._pannerAttr = v1105._pannerAttr;
            if (vThis132._stereo) {
              v1105.stereo(vThis132._stereo);
            } else if (vThis132._pos) {
              v1105.pos(vThis132._pos[0], vThis132._pos[1], vThis132._pos[2], vThis132._id);
            } else if (vThis132._panner) {
              vThis132._panner.disconnect(0);
              vThis132._panner = undefined;
              v1105._refreshBuffer(vThis132);
            }
            return p1253.call(this);
          };
        }(Sound.prototype.reset);
        var vF43 = function (p1254, p1255) {
          p1255 = p1255 || "spatial";
          if (p1255 === "spatial") {
            p1254._panner = Howler.ctx.createPanner();
            p1254._panner.coneInnerAngle = p1254._pannerAttr.coneInnerAngle;
            p1254._panner.coneOuterAngle = p1254._pannerAttr.coneOuterAngle;
            p1254._panner.coneOuterGain = p1254._pannerAttr.coneOuterGain;
            p1254._panner.distanceModel = p1254._pannerAttr.distanceModel;
            p1254._panner.maxDistance = p1254._pannerAttr.maxDistance;
            p1254._panner.refDistance = p1254._pannerAttr.refDistance;
            p1254._panner.rolloffFactor = p1254._pannerAttr.rolloffFactor;
            p1254._panner.panningModel = p1254._pannerAttr.panningModel;
            if (typeof p1254._panner.positionX !== "undefined") {
              p1254._panner.positionX.setValueAtTime(p1254._pos[0], Howler.ctx.currentTime);
              p1254._panner.positionY.setValueAtTime(p1254._pos[1], Howler.ctx.currentTime);
              p1254._panner.positionZ.setValueAtTime(p1254._pos[2], Howler.ctx.currentTime);
            } else {
              p1254._panner.setPosition(p1254._pos[0], p1254._pos[1], p1254._pos[2]);
            }
            if (typeof p1254._panner.orientationX !== "undefined") {
              p1254._panner.orientationX.setValueAtTime(p1254._orientation[0], Howler.ctx.currentTime);
              p1254._panner.orientationY.setValueAtTime(p1254._orientation[1], Howler.ctx.currentTime);
              p1254._panner.orientationZ.setValueAtTime(p1254._orientation[2], Howler.ctx.currentTime);
            } else {
              p1254._panner.setOrientation(p1254._orientation[0], p1254._orientation[1], p1254._orientation[2]);
            }
          } else {
            p1254._panner = Howler.ctx.createStereoPanner();
            p1254._panner.pan.setValueAtTime(p1254._stereo, Howler.ctx.currentTime);
          }
          p1254._panner.connect(p1254._node);
          if (!p1254._paused) {
            p1254._parent.pause(p1254._id, true).play(p1254._id, true);
          }
        };
      })();
    },
    "./node_modules/@socket.io/component-emitter/index.mjs": (p1256, p1257, p1258) => {
      'use strict';

      p1258.r(p1257);
      p1258.d(p1257, {
        Emitter: () => f256
      });
      function f256(p1259) {
        if (p1259) {
          return f257(p1259);
        }
      }
      function f257(p1260) {
        for (var v1106 in f256.prototype) {
          p1260[v1106] = f256.prototype[v1106];
        }
        return p1260;
      }
      f256.prototype.on = f256.prototype.addEventListener = function (p1261, p1262) {
        this._callbacks = this._callbacks || {};
        (this._callbacks["$" + p1261] = this._callbacks["$" + p1261] || []).push(p1262);
        return this;
      };
      f256.prototype.once = function (p1263, p1264) {
        function f258() {
          this.off(p1263, f258);
          p1264.apply(this, arguments);
        }
        f258.fn = p1264;
        this.on(p1263, f258);
        return this;
      };
      f256.prototype.off = f256.prototype.removeListener = f256.prototype.removeAllListeners = f256.prototype.removeEventListener = function (p1265, p1266) {
        this._callbacks = this._callbacks || {};
        if (arguments.length == 0) {
          this._callbacks = {};
          return this;
        }
        var v1107 = this._callbacks["$" + p1265];
        if (!v1107) {
          return this;
        }
        if (arguments.length == 1) {
          delete this._callbacks["$" + p1265];
          return this;
        }
        var v1108;
        for (var vLN0176 = 0; vLN0176 < v1107.length; vLN0176++) {
          v1108 = v1107[vLN0176];
          if (v1108 === p1266 || v1108.fn === p1266) {
            v1107.splice(vLN0176, 1);
            break;
          }
        }
        if (v1107.length === 0) {
          delete this._callbacks["$" + p1265];
        }
        return this;
      };
      f256.prototype.emit = function (p1267) {
        this._callbacks = this._callbacks || {};
        var v1109 = new Array(arguments.length - 1);
        var v1110 = this._callbacks["$" + p1267];
        for (var vLN113 = 1; vLN113 < arguments.length; vLN113++) {
          v1109[vLN113 - 1] = arguments[vLN113];
        }
        if (v1110) {
          v1110 = v1110.slice(0);
          for (var vLN113 = 0, v1111 = v1110.length; vLN113 < v1111; ++vLN113) {
            v1110[vLN113].apply(this, v1109);
          }
        }
        return this;
      };
      f256.prototype.emitReserved = f256.prototype.emit;
      f256.prototype.listeners = function (p1268) {
        this._callbacks = this._callbacks || {};
        return this._callbacks["$" + p1268] || [];
      };
      f256.prototype.hasListeners = function (p1269) {
        return !!this.listeners(p1269).length;
      };
    },
    "./node_modules/engine.io-client/build/esm/contrib/has-cors.js": (p1270, p1271, p1272) => {
      'use strict';

      p1272.r(p1271);
      p1272.d(p1271, {
        hasCORS: () => vV1112
      });
      let v1112 = false;
      try {
        v1112 = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
      } catch (e52) {}
      const vV1112 = v1112;
    },
    "./node_modules/engine.io-client/build/esm/contrib/parseqs.js": (p1273, p1274, p1275) => {
      'use strict';

      p1275.r(p1274);
      p1275.d(p1274, {
        decode: () => f260,
        encode: () => f259
      });
      function f259(p1276) {
        let vLS12 = "";
        for (let v1113 in p1276) {
          if (p1276.hasOwnProperty(v1113)) {
            if (vLS12.length) {
              vLS12 += "&";
            }
            vLS12 += encodeURIComponent(v1113) + "=" + encodeURIComponent(p1276[v1113]);
          }
        }
        return vLS12;
      }
      function f260(p1277) {
        let vO62 = {};
        let v1114 = p1277.split("&");
        for (let vLN0177 = 0, v1115 = v1114.length; vLN0177 < v1115; vLN0177++) {
          let v1116 = v1114[vLN0177].split("=");
          vO62[decodeURIComponent(v1116[0])] = decodeURIComponent(v1116[1]);
        }
        return vO62;
      }
    },
    "./node_modules/engine.io-client/build/esm/contrib/parseuri.js": (p1278, p1279, p1280) => {
      'use strict';

      p1280.r(p1279);
      p1280.d(p1279, {
        parse: () => f261
      });
      const v1117 = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      const vA23 = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
      function f261(p1281) {
        const vP1281 = p1281;
        const v1118 = p1281.indexOf("[");
        const v1119 = p1281.indexOf("]");
        if (v1118 != -1 && v1119 != -1) {
          p1281 = p1281.substring(0, v1118) + p1281.substring(v1118, v1119).replace(/:/g, ";") + p1281.substring(v1119, p1281.length);
        }
        let v1120 = v1117.exec(p1281 || "");
        let vO63 = {};
        let vLN142 = 14;
        while (vLN142--) {
          vO63[vA23[vLN142]] = v1120[vLN142] || "";
        }
        if (v1118 != -1 && v1119 != -1) {
          vO63.source = vP1281;
          vO63.host = vO63.host.substring(1, vO63.host.length - 1).replace(/;/g, ":");
          vO63.authority = vO63.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
          vO63.ipv6uri = true;
        }
        vO63.pathNames = f262(vO63, vO63.path);
        vO63.queryKey = f263(vO63, vO63.query);
        return vO63;
      }
      function f262(p1282, p1283) {
        const v1121 = /\/{2,9}/g;
        const v1122 = p1283.replace(v1121, "/").split("/");
        if (p1283.slice(0, 1) == "/" || p1283.length === 0) {
          v1122.splice(0, 1);
        }
        if (p1283.slice(-1) == "/") {
          v1122.splice(v1122.length - 1, 1);
        }
        return v1122;
      }
      function f263(p1284, p1285) {
        const vO64 = {};
        p1285.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (p1286, p1287, p1288) {
          if (p1287) {
            vO64[p1287] = p1288;
          }
        });
        return vO64;
      }
    },
    "./node_modules/engine.io-client/build/esm/contrib/yeast.js": (p1289, p1290, p1291) => {
      'use strict';

      p1291.r(p1290);
      p1291.d(p1290, {
        decode: () => f265,
        encode: () => f264,
        yeast: () => f266
      });
      const v1123 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
      const vLN64 = 64;
      const vO65 = {};
      let vLN0178 = 0;
      let vLN0179 = 0;
      let v1124;
      function f264(p1292) {
        let vLS13 = "";
        do {
          vLS13 = v1123[p1292 % vLN64] + vLS13;
          p1292 = Math.floor(p1292 / vLN64);
        } while (p1292 > 0);
        return vLS13;
      }
      function f265(p1293) {
        let vLN0180 = 0;
        for (vLN0179 = 0; vLN0179 < p1293.length; vLN0179++) {
          vLN0180 = vLN0180 * vLN64 + vO65[p1293.charAt(vLN0179)];
        }
        return vLN0180;
      }
      function f266() {
        const vF264 = f264(+new Date());
        if (vF264 !== v1124) {
          vLN0178 = 0;
          return v1124 = vF264;
        }
        return vF264 + "." + f264(vLN0178++);
      }
      for (; vLN0179 < vLN64; vLN0179++) {
        vO65[v1123[vLN0179]] = vLN0179;
      }
    },
    "./node_modules/engine.io-client/build/esm/globalThis.browser.js": (p1294, p1295, p1296) => {
      'use strict';

      p1296.r(p1295);
      p1296.d(p1295, {
        globalThisShim: () => vF44
      });
      const vF44 = (() => {
        if (typeof self !== "undefined") {
          return self;
        } else if (typeof window !== "undefined") {
          return window;
        } else {
          return Function("return this")();
        }
      })();
    },
    "./node_modules/engine.io-client/build/esm/index.js": (p1297, p1298, p1299) => {
      'use strict';

      p1299.r(p1298);
      p1299.d(p1298, {
        Socket: () => vP1299.Socket,
        Transport: () => vP12992.Transport,
        installTimerFunctions: () => vP12994.installTimerFunctions,
        nextTick: () => vP12996.nextTick,
        parse: () => vP12995.parse,
        protocol: () => v1125,
        transports: () => vP12993.transports
      });
      var vP1299 = p1299("./node_modules/engine.io-client/build/esm/socket.js");
      var vP12992 = p1299("./node_modules/engine.io-client/build/esm/transport.js");
      var vP12993 = p1299("./node_modules/engine.io-client/build/esm/transports/index.js");
      var vP12994 = p1299("./node_modules/engine.io-client/build/esm/util.js");
      var vP12995 = p1299("./node_modules/engine.io-client/build/esm/contrib/parseuri.js");
      var vP12996 = p1299("./node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js");
      const v1125 = vP1299.Socket.protocol;
    },
    "./node_modules/engine.io-client/build/esm/socket.js": (p1300, p1301, p1302) => {
      'use strict';

      p1302.r(p1301);
      p1302.d(p1301, {
        Socket: () => C
      });
      var vP1302 = p1302("./node_modules/engine.io-client/build/esm/transports/index.js");
      var vP13022 = p1302("./node_modules/engine.io-client/build/esm/util.js");
      var vP13023 = p1302("./node_modules/engine.io-client/build/esm/contrib/parseqs.js");
      var vP13024 = p1302("./node_modules/engine.io-client/build/esm/contrib/parseuri.js");
      var vP13025 = p1302("./node_modules/@socket.io/component-emitter/index.mjs");
      var vP13026 = p1302("./node_modules/engine.io-parser/build/esm/index.js");
      var vP13027 = p1302("./node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js");
      class C extends vP13025.Emitter {
        constructor(p1303, p1304 = {}) {
          super();
          this.binaryType = vP13027.defaultBinaryType;
          this.writeBuffer = [];
          if (p1303 && typeof p1303 === "object") {
            p1304 = p1303;
            p1303 = null;
          }
          if (p1303) {
            p1303 = (0, vP13024.parse)(p1303);
            p1304.hostname = p1303.host;
            p1304.secure = p1303.protocol === "https" || p1303.protocol === "wss";
            p1304.port = p1303.port;
            if (p1303.query) {
              p1304.query = p1303.query;
            }
          } else if (p1304.host) {
            p1304.hostname = (0, vP13024.parse)(p1304.host).host;
          }
          (0, vP13022.installTimerFunctions)(this, p1304);
          this.secure = p1304.secure ?? (typeof location !== "undefined" && location.protocol === "https:");
          if (p1304.hostname && !p1304.port) {
            p1304.port = this.secure ? "443" : "80";
          }
          this.hostname = p1304.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
          this.port = p1304.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
          this.transports = p1304.transports || ["polling", "websocket", "webtransport"];
          this.writeBuffer = [];
          this.prevBufferLen = 0;
          this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            addTrailingSlash: true,
            rejectUnauthorized: true,
            perMessageDeflate: {
              threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: false
          }, p1304);
          this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
          if (typeof this.opts.query === "string") {
            this.opts.query = (0, vP13023.decode)(this.opts.query);
          }
          this.id = null;
          this.upgrades = null;
          this.pingInterval = null;
          this.pingTimeout = null;
          this.pingTimeoutTimer = null;
          if (typeof addEventListener === "function") {
            if (this.opts.closeOnBeforeunload) {
              this.beforeunloadEventListener = () => {
                if (this.transport) {
                  this.transport.removeAllListeners();
                  this.transport.close();
                }
              };
              addEventListener("beforeunload", this.beforeunloadEventListener, false);
            }
            if (this.hostname !== "localhost") {
              this.offlineEventListener = () => {
                this.onClose("transport close", {
                  description: "network connection lost"
                });
              };
              addEventListener("offline", this.offlineEventListener, false);
            }
          }
          this.open();
        }
        createTransport(p1305) {
          const v1126 = Object.assign({}, this.opts.query);
          v1126.EIO = vP13026.protocol;
          v1126.transport = p1305;
          if (this.id) {
            v1126.sid = this.id;
          }
          const v1127 = Object.assign({}, this.opts, {
            query: v1126,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
          }, this.opts.transportOptions[p1305]);
          return new vP1302.transports[p1305](v1127);
        }
        open() {
          let v1128;
          if (this.opts.rememberUpgrade && C.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
            v1128 = "websocket";
          } else if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
              this.emitReserved("error", "No transports available");
            }, 0);
            return;
          } else {
            v1128 = this.transports[0];
          }
          this.readyState = "opening";
          try {
            v1128 = this.createTransport(v1128);
          } catch (e53) {
            this.transports.shift();
            this.open();
            return;
          }
          v1128.open();
          this.setTransport(v1128);
        }
        setTransport(p1306) {
          if (this.transport) {
            this.transport.removeAllListeners();
          }
          this.transport = p1306;
          p1306.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", p1307 => this.onClose("transport close", p1307));
        }
        probe(p1308) {
          let v1129 = this.createTransport(p1308);
          let v1130 = false;
          C.priorWebsocketSuccess = false;
          const vF45 = () => {
            if (v1130) {
              return;
            }
            v1129.send([{
              type: "ping",
              data: "probe"
            }]);
            v1129.once("packet", p1309 => {
              if (v1130) {
                return;
              }
              if (p1309.type === "pong" && p1309.data === "probe") {
                this.upgrading = true;
                this.emitReserved("upgrading", v1129);
                if (!v1129) {
                  return;
                }
                C.priorWebsocketSuccess = v1129.name === "websocket";
                this.transport.pause(() => {
                  if (v1130) {
                    return;
                  }
                  if (this.readyState === "closed") {
                    return;
                  }
                  vF47();
                  this.setTransport(v1129);
                  v1129.send([{
                    type: "upgrade"
                  }]);
                  this.emitReserved("upgrade", v1129);
                  v1129 = null;
                  this.upgrading = false;
                  this.flush();
                });
              } else {
                const v1131 = new Error("probe error");
                v1131.transport = v1129.name;
                this.emitReserved("upgradeError", v1131);
              }
            });
          };
          function f267() {
            if (v1130) {
              return;
            }
            v1130 = true;
            vF47();
            v1129.close();
            v1129 = null;
          }
          const vF46 = p1310 => {
            const v1132 = new Error("probe error: " + p1310);
            v1132.transport = v1129.name;
            f267();
            this.emitReserved("upgradeError", v1132);
          };
          function f268() {
            vF46("transport closed");
          }
          function f269() {
            vF46("socket closed");
          }
          function f270(p1311) {
            if (v1129 && p1311.name !== v1129.name) {
              f267();
            }
          }
          const vF47 = () => {
            v1129.removeListener("open", vF45);
            v1129.removeListener("error", vF46);
            v1129.removeListener("close", f268);
            this.off("close", f269);
            this.off("upgrading", f270);
          };
          v1129.once("open", vF45);
          v1129.once("error", vF46);
          v1129.once("close", f268);
          this.once("close", f269);
          this.once("upgrading", f270);
          if (this.upgrades.indexOf("webtransport") !== -1 && p1308 !== "webtransport") {
            this.setTimeoutFn(() => {
              if (!v1130) {
                v1129.open();
              }
            }, 200);
          } else {
            v1129.open();
          }
        }
        onOpen() {
          this.readyState = "open";
          C.priorWebsocketSuccess = this.transport.name === "websocket";
          this.emitReserved("open");
          this.flush();
          if (this.readyState === "open" && this.opts.upgrade) {
            let vLN0181 = 0;
            const v1133 = this.upgrades.length;
            for (; vLN0181 < v1133; vLN0181++) {
              this.probe(this.upgrades[vLN0181]);
            }
          }
        }
        onPacket(p1312) {
          if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            this.emitReserved("packet", p1312);
            this.emitReserved("heartbeat");
            this.resetPingTimeout();
            switch (p1312.type) {
              case "open":
                this.onHandshake(JSON.parse(p1312.data));
                break;
              case "ping":
                this.sendPacket("pong");
                this.emitReserved("ping");
                this.emitReserved("pong");
                break;
              case "error":
                const v1134 = new Error("server error");
                v1134.code = p1312.data;
                this.onError(v1134);
                break;
              case "message":
                this.emitReserved("data", p1312.data);
                this.emitReserved("message", p1312.data);
                break;
            }
          } else {}
        }
        onHandshake(p1313) {
          this.emitReserved("handshake", p1313);
          this.id = p1313.sid;
          this.transport.query.sid = p1313.sid;
          this.upgrades = this.filterUpgrades(p1313.upgrades);
          this.pingInterval = p1313.pingInterval;
          this.pingTimeout = p1313.pingTimeout;
          this.maxPayload = p1313.maxPayload;
          this.onOpen();
          if (this.readyState === "closed") {
            return;
          }
          this.resetPingTimeout();
        }
        resetPingTimeout() {
          this.clearTimeoutFn(this.pingTimeoutTimer);
          this.pingTimeoutTimer = this.setTimeoutFn(() => {
            this.onClose("ping timeout");
          }, this.pingInterval + this.pingTimeout);
          if (this.opts.autoUnref) {
            this.pingTimeoutTimer.unref();
          }
        }
        onDrain() {
          this.writeBuffer.splice(0, this.prevBufferLen);
          this.prevBufferLen = 0;
          if (this.writeBuffer.length === 0) {
            this.emitReserved("drain");
          } else {
            this.flush();
          }
        }
        flush() {
          if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const v1135 = this.getWritablePackets();
            this.transport.send(v1135);
            this.prevBufferLen = v1135.length;
            this.emitReserved("flush");
          }
        }
        getWritablePackets() {
          const v1136 = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
          if (!v1136) {
            return this.writeBuffer;
          }
          let vLN114 = 1;
          for (let vLN0182 = 0; vLN0182 < this.writeBuffer.length; vLN0182++) {
            const v1137 = this.writeBuffer[vLN0182].data;
            if (v1137) {
              vLN114 += (0, vP13022.byteLength)(v1137);
            }
            if (vLN0182 > 0 && vLN114 > this.maxPayload) {
              return this.writeBuffer.slice(0, vLN0182);
            }
            vLN114 += 2;
          }
          return this.writeBuffer;
        }
        write(p1314, p1315, p1316) {
          this.sendPacket("message", p1314, p1315, p1316);
          return this;
        }
        send(p1317, p1318, p1319) {
          this.sendPacket("message", p1317, p1318, p1319);
          return this;
        }
        sendPacket(p1320, p1321, p1322, p1323) {
          if (typeof p1321 === "function") {
            p1323 = p1321;
            p1321 = undefined;
          }
          if (typeof p1322 === "function") {
            p1323 = p1322;
            p1322 = null;
          }
          if (this.readyState === "closing" || this.readyState === "closed") {
            return;
          }
          p1322 = p1322 || {};
          p1322.compress = p1322.compress !== false;
          const vO66 = {
            type: p1320,
            data: p1321,
            options: p1322
          };
          this.emitReserved("packetCreate", vO66);
          this.writeBuffer.push(vO66);
          if (p1323) {
            this.once("flush", p1323);
          }
          this.flush();
        }
        close() {
          const vF48 = () => {
            this.onClose("forced close");
            this.transport.close();
          };
          const vF49 = () => {
            this.off("upgrade", vF49);
            this.off("upgradeError", vF49);
            vF48();
          };
          const vF50 = () => {
            this.once("upgrade", vF49);
            this.once("upgradeError", vF49);
          };
          if (this.readyState === "opening" || this.readyState === "open") {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
              this.once("drain", () => {
                if (this.upgrading) {
                  vF50();
                } else {
                  vF48();
                }
              });
            } else if (this.upgrading) {
              vF50();
            } else {
              vF48();
            }
          }
          return this;
        }
        onError(p1324) {
          C.priorWebsocketSuccess = false;
          this.emitReserved("error", p1324);
          this.onClose("transport error", p1324);
        }
        onClose(p1325, p1326) {
          if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            this.clearTimeoutFn(this.pingTimeoutTimer);
            this.transport.removeAllListeners("close");
            this.transport.close();
            this.transport.removeAllListeners();
            if (typeof removeEventListener === "function") {
              removeEventListener("beforeunload", this.beforeunloadEventListener, false);
              removeEventListener("offline", this.offlineEventListener, false);
            }
            this.readyState = "closed";
            this.id = null;
            this.emitReserved("close", p1325, p1326);
            this.writeBuffer = [];
            this.prevBufferLen = 0;
          }
        }
        filterUpgrades(p1327) {
          const vA24 = [];
          let vLN0183 = 0;
          const v1138 = p1327.length;
          for (; vLN0183 < v1138; vLN0183++) {
            if (~this.transports.indexOf(p1327[vLN0183])) {
              vA24.push(p1327[vLN0183]);
            }
          }
          return vA24;
        }
      }
      C.protocol = vP13026.protocol;
    },
    "./node_modules/engine.io-client/build/esm/transport.js": (p1328, p1329, p1330) => {
      'use strict';

      p1330.r(p1329);
      p1330.d(p1329, {
        Transport: () => C3
      });
      var vP1330 = p1330("./node_modules/engine.io-parser/build/esm/index.js");
      var vP13302 = p1330("./node_modules/@socket.io/component-emitter/index.mjs");
      var vP13303 = p1330("./node_modules/engine.io-client/build/esm/util.js");
      var vP13304 = p1330("./node_modules/engine.io-client/build/esm/contrib/parseqs.js");
      class C2 extends Error {
        constructor(p1331, p1332, p1333) {
          super(p1331);
          this.description = p1332;
          this.context = p1333;
          this.type = "TransportError";
        }
      }
      class C3 extends vP13302.Emitter {
        constructor(p1334) {
          super();
          this.writable = false;
          (0, vP13303.installTimerFunctions)(this, p1334);
          this.opts = p1334;
          this.query = p1334.query;
          this.socket = p1334.socket;
        }
        onError(p1335, p1336, p1337) {
          super.emitReserved("error", new C2(p1335, p1336, p1337));
          return this;
        }
        open() {
          this.readyState = "opening";
          this.doOpen();
          return this;
        }
        close() {
          if (this.readyState === "opening" || this.readyState === "open") {
            this.doClose();
            this.onClose();
          }
          return this;
        }
        send(p1338) {
          if (this.readyState === "open") {
            this.write(p1338);
          } else {}
        }
        onOpen() {
          this.readyState = "open";
          this.writable = true;
          super.emitReserved("open");
        }
        onData(p1339) {
          const v1139 = (0, vP1330.decodePacket)(p1339, this.socket.binaryType);
          this.onPacket(v1139);
        }
        onPacket(p1340) {
          super.emitReserved("packet", p1340);
        }
        onClose(p1341) {
          this.readyState = "closed";
          super.emitReserved("close", p1341);
        }
        pause(p1342) {}
        createUri(p1343, p1344 = {}) {
          return p1343 + "://" + this._hostname() + this._port() + this.opts.path + this._query(p1344);
        }
        _hostname() {
          const v1140 = this.opts.hostname;
          if (v1140.indexOf(":") === -1) {
            return v1140;
          } else {
            return "[" + v1140 + "]";
          }
        }
        _port() {
          if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
            return ":" + this.opts.port;
          } else {
            return "";
          }
        }
        _query(p1345) {
          const v1141 = (0, vP13304.encode)(p1345);
          if (v1141.length) {
            return "?" + v1141;
          } else {
            return "";
          }
        }
      }
    },
    "./node_modules/engine.io-client/build/esm/transports/index.js": (p1346, p1347, p1348) => {
      'use strict';

      p1348.r(p1347);
      p1348.d(p1347, {
        transports: () => vO67
      });
      var vP1348 = p1348("./node_modules/engine.io-client/build/esm/transports/polling.js");
      var vP13482 = p1348("./node_modules/engine.io-client/build/esm/transports/websocket.js");
      var vP13483 = p1348("./node_modules/engine.io-client/build/esm/transports/webtransport.js");
      const vO67 = {
        websocket: vP13482.WS,
        webtransport: vP13483.WT,
        polling: vP1348.Polling
      };
    },
    "./node_modules/engine.io-client/build/esm/transports/polling.js": (p1349, p1350, p1351) => {
      'use strict';

      p1351.r(p1350);
      p1351.d(p1350, {
        Polling: () => C4,
        Request: () => C5
      });
      var vP1351 = p1351("./node_modules/engine.io-client/build/esm/transport.js");
      var vP13512 = p1351("./node_modules/engine.io-client/build/esm/contrib/yeast.js");
      var vP13513 = p1351("./node_modules/engine.io-parser/build/esm/index.js");
      var vP13514 = p1351("./node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js");
      var vP13515 = p1351("./node_modules/@socket.io/component-emitter/index.mjs");
      var vP13516 = p1351("./node_modules/engine.io-client/build/esm/util.js");
      var vP13517 = p1351("./node_modules/engine.io-client/build/esm/globalThis.browser.js");
      function f271() {}
      const vF51 = function () {
        const v1142 = new vP13514.XHR({
          xdomain: false
        });
        return v1142.responseType != null;
      }();
      class C4 extends vP1351.Transport {
        constructor(p1352) {
          super(p1352);
          this.polling = false;
          if (typeof location !== "undefined") {
            const v1143 = location.protocol === "https:";
            let v1144 = location.port;
            if (!v1144) {
              v1144 = v1143 ? "443" : "80";
            }
            this.xd = typeof location !== "undefined" && p1352.hostname !== location.hostname || v1144 !== p1352.port;
          }
          const v1145 = p1352 && p1352.forceBase64;
          this.supportsBinary = vF51 && !v1145;
          if (this.opts.withCredentials) {
            this.cookieJar = (0, vP13514.createCookieJar)();
          }
        }
        get name() {
          return "polling";
        }
        doOpen() {
          this.poll();
        }
        pause(p1353) {
          this.readyState = "pausing";
          const vF52 = () => {
            this.readyState = "paused";
            p1353();
          };
          if (this.polling || !this.writable) {
            let vLN0184 = 0;
            if (this.polling) {
              vLN0184++;
              this.once("pollComplete", function () {
                if (! --vLN0184) {
                  vF52();
                }
              });
            }
            if (!this.writable) {
              vLN0184++;
              this.once("drain", function () {
                if (! --vLN0184) {
                  vF52();
                }
              });
            }
          } else {
            vF52();
          }
        }
        poll() {
          this.polling = true;
          this.doPoll();
          this.emitReserved("poll");
        }
        onData(p1354) {
          const vF53 = p1355 => {
            if (this.readyState === "opening" && p1355.type === "open") {
              this.onOpen();
            }
            if (p1355.type === "close") {
              this.onClose({
                description: "transport closed by the server"
              });
              return false;
            }
            this.onPacket(p1355);
          };
          (0, vP13513.decodePayload)(p1354, this.socket.binaryType).forEach(vF53);
          if (this.readyState !== "closed") {
            this.polling = false;
            this.emitReserved("pollComplete");
            if (this.readyState === "open") {
              this.poll();
            } else {}
          }
        }
        doClose() {
          const vF54 = () => {
            this.write([{
              type: "close"
            }]);
          };
          if (this.readyState === "open") {
            vF54();
          } else {
            this.once("open", vF54);
          }
        }
        write(p1356) {
          this.writable = false;
          (0, vP13513.encodePayload)(p1356, p1357 => {
            this.doWrite(p1357, () => {
              this.writable = true;
              this.emitReserved("drain");
            });
          });
        }
        uri() {
          const v1146 = this.opts.secure ? "https" : "http";
          const v1147 = this.query || {};
          if (this.opts.timestampRequests !== false) {
            v1147[this.opts.timestampParam] = (0, vP13512.yeast)();
          }
          if (!this.supportsBinary && !v1147.sid) {
            v1147.b64 = 1;
          }
          return this.createUri(v1146, v1147);
        }
        request(p1358 = {}) {
          Object.assign(p1358, {
            xd: this.xd,
            cookieJar: this.cookieJar
          }, this.opts);
          return new C5(this.uri(), p1358);
        }
        doWrite(p1359, p1360) {
          const v1148 = this.request({
            method: "POST",
            data: p1359
          });
          v1148.on("success", p1360);
          v1148.on("error", (p1361, p1362) => {
            this.onError("xhr post error", p1361, p1362);
          });
        }
        doPoll() {
          const v1149 = this.request();
          v1149.on("data", this.onData.bind(this));
          v1149.on("error", (p1363, p1364) => {
            this.onError("xhr poll error", p1363, p1364);
          });
          this.pollXhr = v1149;
        }
      }
      class C5 extends vP13515.Emitter {
        constructor(p1365, p1366) {
          super();
          (0, vP13516.installTimerFunctions)(this, p1366);
          this.opts = p1366;
          this.method = p1366.method || "GET";
          this.uri = p1365;
          this.data = p1366.data !== undefined ? p1366.data : null;
          this.create();
        }
        create() {
          var v1150;
          const v1151 = (0, vP13516.pick)(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
          v1151.xdomain = !!this.opts.xd;
          const v1152 = this.xhr = new vP13514.XHR(v1151);
          try {
            v1152.open(this.method, this.uri, true);
            try {
              if (this.opts.extraHeaders) {
                if (v1152.setDisableHeaderCheck) {
                  v1152.setDisableHeaderCheck(true);
                }
                for (let v1153 in this.opts.extraHeaders) {
                  if (this.opts.extraHeaders.hasOwnProperty(v1153)) {
                    v1152.setRequestHeader(v1153, this.opts.extraHeaders[v1153]);
                  }
                }
              }
            } catch (e54) {}
            if (this.method === "POST") {
              try {
                v1152.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (e55) {}
            }
            try {
              v1152.setRequestHeader("Accept", "*/*");
            } catch (e56) {}
            if ((v1150 = this.opts.cookieJar) === null || v1150 === undefined) {
              undefined;
            } else {
              v1150.addCookies(v1152);
            }
            if ("withCredentials" in v1152) {
              v1152.withCredentials = this.opts.withCredentials;
            }
            if (this.opts.requestTimeout) {
              v1152.timeout = this.opts.requestTimeout;
            }
            v1152.onreadystatechange = () => {
              var v1154;
              if (v1152.readyState === 3) {
                if ((v1154 = this.opts.cookieJar) === null || v1154 === undefined) {
                  undefined;
                } else {
                  v1154.parseCookies(v1152);
                }
              }
              if (v1152.readyState !== 4) {
                return;
              }
              if (v1152.status === 200 || v1152.status === 1223) {
                this.onLoad();
              } else {
                this.setTimeoutFn(() => {
                  this.onError(typeof v1152.status === "number" ? v1152.status : 0);
                }, 0);
              }
            };
            v1152.send(this.data);
          } catch (e57) {
            this.setTimeoutFn(() => {
              this.onError(e57);
            }, 0);
            return;
          }
          if (typeof document !== "undefined") {
            this.index = C5.requestsCount++;
            C5.requests[this.index] = this;
          }
        }
        onError(p1367) {
          this.emitReserved("error", p1367, this.xhr);
          this.cleanup(true);
        }
        cleanup(p1368) {
          if (typeof this.xhr === "undefined" || this.xhr === null) {
            return;
          }
          this.xhr.onreadystatechange = f271;
          if (p1368) {
            try {
              this.xhr.abort();
            } catch (e58) {}
          }
          if (typeof document !== "undefined") {
            delete C5.requests[this.index];
          }
          this.xhr = null;
        }
        onLoad() {
          const v1155 = this.xhr.responseText;
          if (v1155 !== null) {
            this.emitReserved("data", v1155);
            this.emitReserved("success");
            this.cleanup();
          }
        }
        abort() {
          this.cleanup();
        }
      }
      C5.requestsCount = 0;
      C5.requests = {};
      if (typeof document !== "undefined") {
        if (typeof attachEvent === "function") {
          attachEvent("onunload", f272);
        } else if (typeof addEventListener === "function") {
          const v1156 = "onpagehide" in vP13517.globalThisShim ? "pagehide" : "unload";
          addEventListener(v1156, f272, false);
        }
      }
      function f272() {
        for (let v1157 in C5.requests) {
          if (C5.requests.hasOwnProperty(v1157)) {
            C5.requests[v1157].abort();
          }
        }
      }
    },
    "./node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js": (p1369, p1370, p1371) => {
      'use strict';

      p1371.r(p1370);
      p1371.d(p1370, {
        WebSocket: () => v1159,
        defaultBinaryType: () => vLSArraybuffer,
        nextTick: () => vF56,
        usingBrowserWebSocket: () => v1160
      });
      var vP1371 = p1371("./node_modules/engine.io-client/build/esm/globalThis.browser.js");
      const vF56 = (() => {
        const v1158 = typeof Promise === "function" && typeof Promise.resolve === "function";
        if (v1158) {
          return p1372 => Promise.resolve().then(p1372);
        } else {
          return (p1373, p1374) => p1374(p1373, 0);
        }
      })();
      const v1159 = vP1371.globalThisShim.WebSocket || vP1371.globalThisShim.MozWebSocket;
      const v1160 = true;
      const vLSArraybuffer = "arraybuffer";
    },
    "./node_modules/engine.io-client/build/esm/transports/websocket.js": (p1375, p1376, p1377) => {
      'use strict';

      p1377.r(p1376);
      p1377.d(p1376, {
        WS: () => C6
      });
      var vP1377 = p1377("./node_modules/engine.io-client/build/esm/transport.js");
      var vP13772 = p1377("./node_modules/engine.io-client/build/esm/contrib/yeast.js");
      var vP13773 = p1377("./node_modules/engine.io-client/build/esm/util.js");
      var vP13774 = p1377("./node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js");
      var vP13775 = p1377("./node_modules/engine.io-parser/build/esm/index.js");
      const v1161 = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
      class C6 extends vP1377.Transport {
        constructor(p1378) {
          super(p1378);
          this.supportsBinary = !p1378.forceBase64;
        }
        get name() {
          return "websocket";
        }
        doOpen() {
          if (!this.check()) {
            return;
          }
          const v1162 = this.uri();
          const v1163 = this.opts.protocols;
          const v1164 = v1161 ? {} : (0, vP13773.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
          if (this.opts.extraHeaders) {
            v1164.headers = this.opts.extraHeaders;
          }
          try {
            this.ws = vP13774.usingBrowserWebSocket && !v1161 ? v1163 ? new vP13774.WebSocket(v1162, v1163) : new vP13774.WebSocket(v1162) : new vP13774.WebSocket(v1162, v1163, v1164);
          } catch (e59) {
            return this.emitReserved("error", e59);
          }
          this.ws.binaryType = this.socket.binaryType;
          this.addEventListeners();
        }
        addEventListeners() {
          this.ws.onopen = () => {
            if (this.opts.autoUnref) {
              this.ws._socket.unref();
            }
            this.onOpen();
          };
          this.ws.onclose = p1379 => this.onClose({
            description: "websocket connection closed",
            context: p1379
          });
          this.ws.onmessage = p1380 => this.onData(p1380.data);
          this.ws.onerror = p1381 => this.onError("websocket error", p1381);
        }
        write(p1382) {
          this.writable = false;
          for (let vLN0185 = 0; vLN0185 < p1382.length; vLN0185++) {
            const v1165 = p1382[vLN0185];
            const v1166 = vLN0185 === p1382.length - 1;
            (0, vP13775.encodePacket)(v1165, this.supportsBinary, p1383 => {
              const vO68 = {};
              if (!vP13774.usingBrowserWebSocket) {
                if (v1165.options) {
                  vO68.compress = v1165.options.compress;
                }
                if (this.opts.perMessageDeflate) {
                  const v1167 = typeof p1383 === "string" ? Buffer.byteLength(p1383) : p1383.length;
                  if (v1167 < this.opts.perMessageDeflate.threshold) {
                    vO68.compress = false;
                  }
                }
              }
              try {
                if (vP13774.usingBrowserWebSocket) {
                  this.ws.send(p1383);
                } else {
                  this.ws.send(p1383, vO68);
                }
              } catch (e60) {}
              if (v1166) {
                (0, vP13774.nextTick)(() => {
                  this.writable = true;
                  this.emitReserved("drain");
                }, this.setTimeoutFn);
              }
            });
          }
        }
        doClose() {
          if (typeof this.ws !== "undefined") {
            this.ws.close();
            this.ws = null;
          }
        }
        uri() {
          const v1168 = this.opts.secure ? "wss" : "ws";
          const v1169 = this.query || {};
          if (this.opts.timestampRequests) {
            v1169[this.opts.timestampParam] = (0, vP13772.yeast)();
          }
          if (!this.supportsBinary) {
            v1169.b64 = 1;
          }
          return this.createUri(v1168, v1169);
        }
        check() {
          return !!vP13774.WebSocket;
        }
      }
    },
    "./node_modules/engine.io-client/build/esm/transports/webtransport.js": (p1384, p1385, p1386) => {
      'use strict';

      p1386.r(p1385);
      p1386.d(p1385, {
        WT: () => C7
      });
      var vP1386 = p1386("./node_modules/engine.io-client/build/esm/transport.js");
      var vP13862 = p1386("./node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js");
      var vP13863 = p1386("./node_modules/engine.io-parser/build/esm/index.js");
      class C7 extends vP1386.Transport {
        get name() {
          return "webtransport";
        }
        doOpen() {
          if (typeof WebTransport !== "function") {
            return;
          }
          this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
          this.transport.closed.then(() => {
            this.onClose();
          }).catch(p1387 => {
            this.onError("webtransport error", p1387);
          });
          this.transport.ready.then(() => {
            this.transport.createBidirectionalStream().then(p1388 => {
              const v1170 = (0, vP13863.createPacketDecoderStream)(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
              const v1171 = p1388.readable.pipeThrough(v1170).getReader();
              const v1172 = (0, vP13863.createPacketEncoderStream)();
              v1172.readable.pipeTo(p1388.writable);
              this.writer = v1172.writable.getWriter();
              const vF57 = () => {
                v1171.read().then(({
                  done: _0x1af419,
                  value: _0x477743
                }) => {
                  if (_0x1af419) {
                    return;
                  }
                  this.onPacket(_0x477743);
                  vF57();
                }).catch(p1389 => {});
              };
              vF57();
              const vO69 = {
                type: "open"
              };
              if (this.query.sid) {
                vO69.data = "{\"sid\":\"" + this.query.sid + "\"}";
              }
              this.writer.write(vO69).then(() => this.onOpen());
            });
          });
        }
        write(p1390) {
          this.writable = false;
          for (let vLN0186 = 0; vLN0186 < p1390.length; vLN0186++) {
            const v1173 = p1390[vLN0186];
            const v1174 = vLN0186 === p1390.length - 1;
            this.writer.write(v1173).then(() => {
              if (v1174) {
                (0, vP13862.nextTick)(() => {
                  this.writable = true;
                  this.emitReserved("drain");
                }, this.setTimeoutFn);
              }
            });
          }
        }
        doClose() {
          var v1175;
          if ((v1175 = this.transport) === null || v1175 === undefined) {
            undefined;
          } else {
            v1175.close();
          }
        }
      }
    },
    "./node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js": (p1391, p1392, p1393) => {
      'use strict';

      p1393.r(p1392);
      p1393.d(p1392, {
        XHR: () => f273,
        createCookieJar: () => f274
      });
      var vP1393 = p1393("./node_modules/engine.io-client/build/esm/contrib/has-cors.js");
      var vP13932 = p1393("./node_modules/engine.io-client/build/esm/globalThis.browser.js");
      function f273(p1394) {
        const v1176 = p1394.xdomain;
        try {
          if (typeof XMLHttpRequest !== "undefined" && (!v1176 || vP1393.hasCORS)) {
            return new XMLHttpRequest();
          }
        } catch (e61) {}
        if (!v1176) {
          try {
            return new vP13932.globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
          } catch (e62) {}
        }
      }
      function f274() {}
    },
    "./node_modules/engine.io-client/build/esm/util.js": (p1395, p1396, p1397) => {
      'use strict';

      p1397.r(p1396);
      p1397.d(p1396, {
        byteLength: () => f277,
        installTimerFunctions: () => f276,
        pick: () => f275
      });
      var vP1397 = p1397("./node_modules/engine.io-client/build/esm/globalThis.browser.js");
      function f275(p1398, ..._0x1ae37f) {
        return _0x1ae37f.reduce((p1399, p1400) => {
          if (p1398.hasOwnProperty(p1400)) {
            p1399[p1400] = p1398[p1400];
          }
          return p1399;
        }, {});
      }
      const v1177 = vP1397.globalThisShim.setTimeout;
      const v1178 = vP1397.globalThisShim.clearTimeout;
      function f276(p1401, p1402) {
        if (p1402.useNativeTimers) {
          p1401.setTimeoutFn = v1177.bind(vP1397.globalThisShim);
          p1401.clearTimeoutFn = v1178.bind(vP1397.globalThisShim);
        } else {
          p1401.setTimeoutFn = vP1397.globalThisShim.setTimeout.bind(vP1397.globalThisShim);
          p1401.clearTimeoutFn = vP1397.globalThisShim.clearTimeout.bind(vP1397.globalThisShim);
        }
      }
      const vLN133 = 1.33;
      function f277(p1403) {
        if (typeof p1403 === "string") {
          return f278(p1403);
        }
        return Math.ceil((p1403.byteLength || p1403.size) * vLN133);
      }
      function f278(p1404) {
        let vLN0187 = 0;
        let vLN0188 = 0;
        for (let vLN0189 = 0, v1179 = p1404.length; vLN0189 < v1179; vLN0189++) {
          vLN0187 = p1404.charCodeAt(vLN0189);
          if (vLN0187 < 128) {
            vLN0188 += 1;
          } else if (vLN0187 < 2048) {
            vLN0188 += 2;
          } else if (vLN0187 < 55296 || vLN0187 >= 57344) {
            vLN0188 += 3;
          } else {
            vLN0189++;
            vLN0188 += 4;
          }
        }
        return vLN0188;
      }
    },
    "./node_modules/engine.io-parser/build/esm/commons.js": (p1405, p1406, p1407) => {
      'use strict';

      p1407.r(p1406);
      p1407.d(p1406, {
        ERROR_PACKET: () => vO70,
        PACKET_TYPES: () => v1180,
        PACKET_TYPES_REVERSE: () => v1181
      });
      const v1180 = Object.create(null);
      v1180.open = "0";
      v1180.close = "1";
      v1180.ping = "2";
      v1180.pong = "3";
      v1180.message = "4";
      v1180.upgrade = "5";
      v1180.noop = "6";
      const v1181 = Object.create(null);
      Object.keys(v1180).forEach(p1408 => {
        v1181[v1180[p1408]] = p1408;
      });
      const vO70 = {
        type: "error",
        data: "parser error"
      };
    },
    "./node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js": (p1409, p1410, p1411) => {
      'use strict';

      p1411.r(p1410);
      p1411.d(p1410, {
        decode: () => vF60,
        encode: () => vF59
      });
      const vLSABCDEFGHIJKLMNOPQRST = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      const v1182 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
      for (let vLN0190 = 0; vLN0190 < vLSABCDEFGHIJKLMNOPQRST.length; vLN0190++) {
        v1182[vLSABCDEFGHIJKLMNOPQRST.charCodeAt(vLN0190)] = vLN0190;
      }
      const vF59 = p1412 => {
        let v1183 = new Uint8Array(p1412);
        let v1184;
        let v1185 = v1183.length;
        let vLS14 = "";
        for (v1184 = 0; v1184 < v1185; v1184 += 3) {
          vLS14 += vLSABCDEFGHIJKLMNOPQRST[v1183[v1184] >> 2];
          vLS14 += vLSABCDEFGHIJKLMNOPQRST[(v1183[v1184] & 3) << 4 | v1183[v1184 + 1] >> 4];
          vLS14 += vLSABCDEFGHIJKLMNOPQRST[(v1183[v1184 + 1] & 15) << 2 | v1183[v1184 + 2] >> 6];
          vLS14 += vLSABCDEFGHIJKLMNOPQRST[v1183[v1184 + 2] & 63];
        }
        if (v1185 % 3 === 2) {
          vLS14 = vLS14.substring(0, vLS14.length - 1) + "=";
        } else if (v1185 % 3 === 1) {
          vLS14 = vLS14.substring(0, vLS14.length - 2) + "==";
        }
        return vLS14;
      };
      const vF60 = p1413 => {
        let v1186 = p1413.length * 0.75;
        let v1187 = p1413.length;
        let v1188;
        let vLN0191 = 0;
        let v1189;
        let v1190;
        let v1191;
        let v1192;
        if (p1413[p1413.length - 1] === "=") {
          v1186--;
          if (p1413[p1413.length - 2] === "=") {
            v1186--;
          }
        }
        const v1193 = new ArrayBuffer(v1186);
        const v1194 = new Uint8Array(v1193);
        for (v1188 = 0; v1188 < v1187; v1188 += 4) {
          v1189 = v1182[p1413.charCodeAt(v1188)];
          v1190 = v1182[p1413.charCodeAt(v1188 + 1)];
          v1191 = v1182[p1413.charCodeAt(v1188 + 2)];
          v1192 = v1182[p1413.charCodeAt(v1188 + 3)];
          v1194[vLN0191++] = v1189 << 2 | v1190 >> 4;
          v1194[vLN0191++] = (v1190 & 15) << 4 | v1191 >> 2;
          v1194[vLN0191++] = (v1191 & 3) << 6 | v1192 & 63;
        }
        return v1193;
      };
    },
    "./node_modules/engine.io-parser/build/esm/decodePacket.browser.js": (p1414, p1415, p1416) => {
      'use strict';

      p1416.r(p1415);
      p1416.d(p1415, {
        decodePacket: () => vF61
      });
      var vP1416 = p1416("./node_modules/engine.io-parser/build/esm/commons.js");
      var vP14162 = p1416("./node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js");
      const v1195 = typeof ArrayBuffer === "function";
      const vF61 = (p1417, p1418) => {
        if (typeof p1417 !== "string") {
          return {
            type: "message",
            data: vF63(p1417, p1418)
          };
        }
        const v1196 = p1417.charAt(0);
        if (v1196 === "b") {
          return {
            type: "message",
            data: vF62(p1417.substring(1), p1418)
          };
        }
        const v1197 = vP1416.PACKET_TYPES_REVERSE[v1196];
        if (!v1197) {
          return vP1416.ERROR_PACKET;
        }
        if (p1417.length > 1) {
          return {
            type: vP1416.PACKET_TYPES_REVERSE[v1196],
            data: p1417.substring(1)
          };
        } else {
          return {
            type: vP1416.PACKET_TYPES_REVERSE[v1196]
          };
        }
      };
      const vF62 = (p1419, p1420) => {
        if (v1195) {
          const v1198 = (0, vP14162.decode)(p1419);
          return vF63(v1198, p1420);
        } else {
          return {
            base64: true,
            data: p1419
          };
        }
      };
      const vF63 = (p1421, p1422) => {
        switch (p1422) {
          case "blob":
            if (p1421 instanceof Blob) {
              return p1421;
            } else {
              return new Blob([p1421]);
            }
          case "arraybuffer":
          default:
            if (p1421 instanceof ArrayBuffer) {
              return p1421;
            } else {
              return p1421.buffer;
            }
        }
      };
    },
    "./node_modules/engine.io-parser/build/esm/encodePacket.browser.js": (p1423, p1424, p1425) => {
      'use strict';

      p1425.r(p1424);
      p1425.d(p1424, {
        encodePacket: () => vF65,
        encodePacketToBinary: () => f280
      });
      var vP1425 = p1425("./node_modules/engine.io-parser/build/esm/commons.js");
      const v1199 = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
      const v1200 = typeof ArrayBuffer === "function";
      const vF64 = p1426 => {
        if (typeof ArrayBuffer.isView === "function") {
          return ArrayBuffer.isView(p1426);
        } else {
          return p1426 && p1426.buffer instanceof ArrayBuffer;
        }
      };
      const vF65 = ({
        type: _0x52ecf9,
        data: _0x2e28f6
      }, p1427, p1428) => {
        if (v1199 && _0x2e28f6 instanceof Blob) {
          if (p1427) {
            return p1428(_0x2e28f6);
          } else {
            return vF66(_0x2e28f6, p1428);
          }
        } else if (v1200 && (_0x2e28f6 instanceof ArrayBuffer || vF64(_0x2e28f6))) {
          if (p1427) {
            return p1428(_0x2e28f6);
          } else {
            return vF66(new Blob([_0x2e28f6]), p1428);
          }
        }
        return p1428(vP1425.PACKET_TYPES[_0x52ecf9] + (_0x2e28f6 || ""));
      };
      const vF66 = (p1429, p1430) => {
        const v1201 = new FileReader();
        v1201.onload = function () {
          const v1202 = v1201.result.split(",")[1];
          p1430("b" + (v1202 || ""));
        };
        return v1201.readAsDataURL(p1429);
      };
      function f279(p1431) {
        if (p1431 instanceof Uint8Array) {
          return p1431;
        } else if (p1431 instanceof ArrayBuffer) {
          return new Uint8Array(p1431);
        } else {
          return new Uint8Array(p1431.buffer, p1431.byteOffset, p1431.byteLength);
        }
      }
      let v1203;
      function f280(p1432, p1433) {
        if (v1199 && p1432.data instanceof Blob) {
          return p1432.data.arrayBuffer().then(f279).then(p1433);
        } else if (v1200 && (p1432.data instanceof ArrayBuffer || vF64(p1432.data))) {
          return p1433(f279(p1432.data));
        }
        vF65(p1432, false, p1434 => {
          if (!v1203) {
            v1203 = new TextEncoder();
          }
          p1433(v1203.encode(p1434));
        });
      }
    },
    "./node_modules/engine.io-parser/build/esm/index.js": (p1435, p1436, p1437) => {
      'use strict';

      p1437.r(p1436);
      p1437.d(p1436, {
        createPacketDecoderStream: () => f284,
        createPacketEncoderStream: () => f281,
        decodePacket: () => vP14372.decodePacket,
        decodePayload: () => vF68,
        encodePacket: () => vP1437.encodePacket,
        encodePayload: () => vF67,
        protocol: () => vLN43
      });
      var vP1437 = p1437("./node_modules/engine.io-parser/build/esm/encodePacket.browser.js");
      var vP14372 = p1437("./node_modules/engine.io-parser/build/esm/decodePacket.browser.js");
      var vP14373 = p1437("./node_modules/engine.io-parser/build/esm/commons.js");
      const v1204 = String.fromCharCode(30);
      const vF67 = (p1438, p1439) => {
        const v1205 = p1438.length;
        const v1206 = new Array(v1205);
        let vLN0192 = 0;
        p1438.forEach((p1440, p1441) => {
          (0, vP1437.encodePacket)(p1440, false, p1442 => {
            v1206[p1441] = p1442;
            if (++vLN0192 === v1205) {
              p1439(v1206.join(v1204));
            }
          });
        });
      };
      const vF68 = (p1443, p1444) => {
        const v1207 = p1443.split(v1204);
        const vA25 = [];
        for (let vLN0193 = 0; vLN0193 < v1207.length; vLN0193++) {
          const v1208 = (0, vP14372.decodePacket)(v1207[vLN0193], p1444);
          vA25.push(v1208);
          if (v1208.type === "error") {
            break;
          }
        }
        return vA25;
      };
      function f281() {
        return new TransformStream({
          transform(p1445, p1446) {
            (0, vP1437.encodePacketToBinary)(p1445, p1447 => {
              const v1209 = p1447.length;
              let v1210;
              if (v1209 < 126) {
                v1210 = new Uint8Array(1);
                new DataView(v1210.buffer).setUint8(0, v1209);
              } else if (v1209 < 65536) {
                v1210 = new Uint8Array(3);
                const v1211 = new DataView(v1210.buffer);
                v1211.setUint8(0, 126);
                v1211.setUint16(1, v1209);
              } else {
                v1210 = new Uint8Array(9);
                const v1212 = new DataView(v1210.buffer);
                v1212.setUint8(0, 127);
                v1212.setBigUint64(1, BigInt(v1209));
              }
              if (p1445.data && typeof p1445.data !== "string") {
                v1210[0] |= 128;
              }
              p1446.enqueue(v1210);
              p1446.enqueue(p1447);
            });
          }
        });
      }
      let v1213;
      function f282(p1448) {
        return p1448.reduce((p1449, p1450) => p1449 + p1450.length, 0);
      }
      function f283(p1451, p1452) {
        if (p1451[0].length === p1452) {
          return p1451.shift();
        }
        const v1214 = new Uint8Array(p1452);
        let vLN0194 = 0;
        for (let vLN0195 = 0; vLN0195 < p1452; vLN0195++) {
          v1214[vLN0195] = p1451[0][vLN0194++];
          if (vLN0194 === p1451[0].length) {
            p1451.shift();
            vLN0194 = 0;
          }
        }
        if (p1451.length && vLN0194 < p1451[0].length) {
          p1451[0] = p1451[0].slice(vLN0194);
        }
        return v1214;
      }
      function f284(p1453, p1454) {
        if (!v1213) {
          v1213 = new TextDecoder();
        }
        const vA26 = [];
        let vLN0196 = 0;
        let v1215 = -1;
        let v1216 = false;
        return new TransformStream({
          transform(p1455, p1456) {
            vA26.push(p1455);
            while (true) {
              if (vLN0196 === 0) {
                if (f282(vA26) < 1) {
                  break;
                }
                const vF2832 = f283(vA26, 1);
                v1216 = (vF2832[0] & 128) === 128;
                v1215 = vF2832[0] & 127;
                if (v1215 < 126) {
                  vLN0196 = 3;
                } else if (v1215 === 126) {
                  vLN0196 = 1;
                } else {
                  vLN0196 = 2;
                }
              } else if (vLN0196 === 1) {
                if (f282(vA26) < 2) {
                  break;
                }
                const vF2833 = f283(vA26, 2);
                v1215 = new DataView(vF2833.buffer, vF2833.byteOffset, vF2833.length).getUint16(0);
                vLN0196 = 3;
              } else if (vLN0196 === 2) {
                if (f282(vA26) < 8) {
                  break;
                }
                const vF2834 = f283(vA26, 8);
                const v1217 = new DataView(vF2834.buffer, vF2834.byteOffset, vF2834.length);
                const v1218 = v1217.getUint32(0);
                if (v1218 > Math.pow(2, 21) - 1) {
                  p1456.enqueue(vP14373.ERROR_PACKET);
                  break;
                }
                v1215 = v1218 * Math.pow(2, 32) + v1217.getUint32(4);
                vLN0196 = 3;
              } else {
                if (f282(vA26) < v1215) {
                  break;
                }
                const vF2835 = f283(vA26, v1215);
                p1456.enqueue((0, vP14372.decodePacket)(v1216 ? vF2835 : v1213.decode(vF2835), p1454));
                vLN0196 = 0;
              }
              if (v1215 === 0 || v1215 > p1453) {
                p1456.enqueue(vP14373.ERROR_PACKET);
                break;
              }
            }
          }
        });
      }
      const vLN43 = 4;
    },
    "./node_modules/socket.io-client/build/esm/contrib/backo2.js": (p1457, p1458, p1459) => {
      'use strict';

      p1459.r(p1458);
      p1459.d(p1458, {
        Backoff: () => f285
      });
      function f285(p1460) {
        p1460 = p1460 || {};
        this.ms = p1460.min || 100;
        this.max = p1460.max || 10000;
        this.factor = p1460.factor || 2;
        this.jitter = p1460.jitter > 0 && p1460.jitter <= 1 ? p1460.jitter : 0;
        this.attempts = 0;
      }
      f285.prototype.duration = function () {
        var v1219 = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var v1220 = Math.random();
          var v1221 = Math.floor(v1220 * this.jitter * v1219);
          v1219 = (Math.floor(v1220 * 10) & 1) == 0 ? v1219 - v1221 : v1219 + v1221;
        }
        return Math.min(v1219, this.max) | 0;
      };
      f285.prototype.reset = function () {
        this.attempts = 0;
      };
      f285.prototype.setMin = function (p1461) {
        this.ms = p1461;
      };
      f285.prototype.setMax = function (p1462) {
        this.max = p1462;
      };
      f285.prototype.setJitter = function (p1463) {
        this.jitter = p1463;
      };
    },
    "./node_modules/socket.io-client/build/esm/index.js": (p1464, p1465, p1466) => {
      'use strict';

      p1466.r(p1465);
      p1466.d(p1465, {
        Manager: () => vP14662.Manager,
        Socket: () => vP14663.Socket,
        connect: () => f286,
        default: () => f286,
        io: () => f286,
        protocol: () => vP14664.protocol
      });
      var vP1466 = p1466("./node_modules/socket.io-client/build/esm/url.js");
      var vP14662 = p1466("./node_modules/socket.io-client/build/esm/manager.js");
      var vP14663 = p1466("./node_modules/socket.io-client/build/esm/socket.js");
      var vP14664 = p1466("./node_modules/socket.io-parser/build/esm/index.js");
      const vO71 = {};
      function f286(p1467, p1468) {
        if (typeof p1467 === "object") {
          p1468 = p1467;
          p1467 = undefined;
        }
        p1468 = p1468 || {};
        const v1222 = (0, vP1466.url)(p1467, p1468.path || "/socket.io");
        const v1223 = v1222.source;
        const v1224 = v1222.id;
        const v1225 = v1222.path;
        const v1226 = vO71[v1224] && v1225 in vO71[v1224].nsps;
        const v1227 = p1468.forceNew || p1468["force new connection"] || p1468.multiplex === false || v1226;
        let v1228;
        if (v1227) {
          v1228 = new vP14662.Manager(v1223, p1468);
        } else {
          if (!vO71[v1224]) {
            vO71[v1224] = new vP14662.Manager(v1223, p1468);
          }
          v1228 = vO71[v1224];
        }
        if (v1222.query && !p1468.query) {
          p1468.query = v1222.queryKey;
        }
        return v1228.socket(v1222.path, p1468);
      }
      Object.assign(f286, {
        Manager: vP14662.Manager,
        Socket: vP14663.Socket,
        io: f286,
        connect: f286
      });
    },
    "./node_modules/socket.io-client/build/esm/manager.js": (p1469, p1470, p1471) => {
      'use strict';

      p1471.r(p1470);
      p1471.d(p1470, {
        Manager: () => C8
      });
      var vP1471 = p1471("./node_modules/engine.io-client/build/esm/index.js");
      var vP14712 = p1471("./node_modules/socket.io-client/build/esm/socket.js");
      var vP14713 = p1471("./node_modules/socket.io-parser/build/esm/index.js");
      var vP14714 = p1471("./node_modules/socket.io-client/build/esm/on.js");
      var vP14715 = p1471("./node_modules/socket.io-client/build/esm/contrib/backo2.js");
      var vP14716 = p1471("./node_modules/@socket.io/component-emitter/index.mjs");
      class C8 extends vP14716.Emitter {
        constructor(p1472, p1473) {
          super();
          this.nsps = {};
          this.subs = [];
          if (p1472 && typeof p1472 === "object") {
            p1473 = p1472;
            p1472 = undefined;
          }
          p1473 = p1473 || {};
          p1473.path = p1473.path || "/socket.io";
          this.opts = p1473;
          (0, vP1471.installTimerFunctions)(this, p1473);
          this.reconnection(p1473.reconnection !== false);
          this.reconnectionAttempts(p1473.reconnectionAttempts || Infinity);
          this.reconnectionDelay(p1473.reconnectionDelay || 1000);
          this.reconnectionDelayMax(p1473.reconnectionDelayMax || 5000);
          this.randomizationFactor(p1473.randomizationFactor ?? 0.5);
          this.backoff = new vP14715.Backoff({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
          });
          this.timeout(p1473.timeout == null ? 20000 : p1473.timeout);
          this._readyState = "closed";
          this.uri = p1472;
          const v1229 = p1473.parser || vP14713;
          this.encoder = new v1229.Encoder();
          this.decoder = new v1229.Decoder();
          this._autoConnect = p1473.autoConnect !== false;
          if (this._autoConnect) {
            this.open();
          }
        }
        reconnection(p1474) {
          if (!arguments.length) {
            return this._reconnection;
          }
          this._reconnection = !!p1474;
          return this;
        }
        reconnectionAttempts(p1475) {
          if (p1475 === undefined) {
            return this._reconnectionAttempts;
          }
          this._reconnectionAttempts = p1475;
          return this;
        }
        reconnectionDelay(p1476) {
          var v1230;
          if (p1476 === undefined) {
            return this._reconnectionDelay;
          }
          this._reconnectionDelay = p1476;
          if ((v1230 = this.backoff) === null || v1230 === undefined) {
            undefined;
          } else {
            v1230.setMin(p1476);
          }
          return this;
        }
        randomizationFactor(p1477) {
          var v1231;
          if (p1477 === undefined) {
            return this._randomizationFactor;
          }
          this._randomizationFactor = p1477;
          if ((v1231 = this.backoff) === null || v1231 === undefined) {
            undefined;
          } else {
            v1231.setJitter(p1477);
          }
          return this;
        }
        reconnectionDelayMax(p1478) {
          var v1232;
          if (p1478 === undefined) {
            return this._reconnectionDelayMax;
          }
          this._reconnectionDelayMax = p1478;
          if ((v1232 = this.backoff) === null || v1232 === undefined) {
            undefined;
          } else {
            v1232.setMax(p1478);
          }
          return this;
        }
        timeout(p1479) {
          if (!arguments.length) {
            return this._timeout;
          }
          this._timeout = p1479;
          return this;
        }
        maybeReconnectOnOpen() {
          if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
            this.reconnect();
          }
        }
        open(p1480) {
          if (~this._readyState.indexOf("open")) {
            return this;
          }
          this.engine = new vP1471.Socket(this.uri, this.opts);
          const v1233 = this.engine;
          const vThis133 = this;
          this._readyState = "opening";
          this.skipReconnect = false;
          const v1234 = (0, vP14714.on)(v1233, "open", function () {
            vThis133.onopen();
            if (p1480) {
              p1480();
            }
          });
          const vF69 = p1481 => {
            this.cleanup();
            this._readyState = "closed";
            this.emitReserved("error", p1481);
            if (p1480) {
              p1480(p1481);
            } else {
              this.maybeReconnectOnOpen();
            }
          };
          const v1235 = (0, vP14714.on)(v1233, "error", vF69);
          if (this._timeout !== false) {
            const v1236 = this._timeout;
            const v1237 = this.setTimeoutFn(() => {
              v1234();
              vF69(new Error("timeout"));
              v1233.close();
            }, v1236);
            if (this.opts.autoUnref) {
              v1237.unref();
            }
            this.subs.push(() => {
              this.clearTimeoutFn(v1237);
            });
          }
          this.subs.push(v1234);
          this.subs.push(v1235);
          return this;
        }
        connect(p1482) {
          return this.open(p1482);
        }
        onopen() {
          this.cleanup();
          this._readyState = "open";
          this.emitReserved("open");
          const v1238 = this.engine;
          this.subs.push((0, vP14714.on)(v1238, "ping", this.onping.bind(this)), (0, vP14714.on)(v1238, "data", this.ondata.bind(this)), (0, vP14714.on)(v1238, "error", this.onerror.bind(this)), (0, vP14714.on)(v1238, "close", this.onclose.bind(this)), (0, vP14714.on)(this.decoder, "decoded", this.ondecoded.bind(this)));
        }
        onping() {
          this.emitReserved("ping");
        }
        ondata(p1483) {
          try {
            this.decoder.add(p1483);
          } catch (e63) {
            this.onclose("parse error", e63);
          }
        }
        ondecoded(p1484) {
          (0, vP1471.nextTick)(() => {
            this.emitReserved("packet", p1484);
          }, this.setTimeoutFn);
        }
        onerror(p1485) {
          this.emitReserved("error", p1485);
        }
        socket(p1486, p1487) {
          let v1239 = this.nsps[p1486];
          if (!v1239) {
            v1239 = new vP14712.Socket(this, p1486, p1487);
            this.nsps[p1486] = v1239;
          } else if (this._autoConnect && !v1239.active) {
            v1239.connect();
          }
          return v1239;
        }
        _destroy(p1488) {
          const v1240 = Object.keys(this.nsps);
          for (const v1241 of v1240) {
            const v1242 = this.nsps[v1241];
            if (v1242.active) {
              return;
            }
          }
          this._close();
        }
        _packet(p1489) {
          const v1243 = this.encoder.encode(p1489);
          for (let vLN0197 = 0; vLN0197 < v1243.length; vLN0197++) {
            this.engine.write(v1243[vLN0197], p1489.options);
          }
        }
        cleanup() {
          this.subs.forEach(p1490 => p1490());
          this.subs.length = 0;
          this.decoder.destroy();
        }
        _close() {
          this.skipReconnect = true;
          this._reconnecting = false;
          this.onclose("forced close");
          if (this.engine) {
            this.engine.close();
          }
        }
        disconnect() {
          return this._close();
        }
        onclose(p1491, p1492) {
          this.cleanup();
          this.backoff.reset();
          this._readyState = "closed";
          this.emitReserved("close", p1491, p1492);
          if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
          }
        }
        reconnect() {
          if (this._reconnecting || this.skipReconnect) {
            return this;
          }
          const vThis134 = this;
          if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
          } else {
            const v1244 = this.backoff.duration();
            this._reconnecting = true;
            const v1245 = this.setTimeoutFn(() => {
              if (vThis134.skipReconnect) {
                return;
              }
              this.emitReserved("reconnect_attempt", vThis134.backoff.attempts);
              if (vThis134.skipReconnect) {
                return;
              }
              vThis134.open(p1493 => {
                if (p1493) {
                  vThis134._reconnecting = false;
                  vThis134.reconnect();
                  this.emitReserved("reconnect_error", p1493);
                } else {
                  vThis134.onreconnect();
                }
              });
            }, v1244);
            if (this.opts.autoUnref) {
              v1245.unref();
            }
            this.subs.push(() => {
              this.clearTimeoutFn(v1245);
            });
          }
        }
        onreconnect() {
          const v1246 = this.backoff.attempts;
          this._reconnecting = false;
          this.backoff.reset();
          this.emitReserved("reconnect", v1246);
        }
      }
    },
    "./node_modules/socket.io-client/build/esm/on.js": (p1494, p1495, p1496) => {
      'use strict';

      p1496.r(p1495);
      p1496.d(p1495, {
        on: () => f287
      });
      function f287(p1497, p1498, p1499) {
        p1497.on(p1498, p1499);
        return function f288() {
          p1497.off(p1498, p1499);
        };
      }
    },
    "./node_modules/socket.io-client/build/esm/socket.js": (p1500, p1501, p1502) => {
      'use strict';

      p1502.r(p1501);
      p1502.d(p1501, {
        Socket: () => C9
      });
      var vP1502 = p1502("./node_modules/socket.io-parser/build/esm/index.js");
      var vP15022 = p1502("./node_modules/socket.io-client/build/esm/on.js");
      var vP15023 = p1502("./node_modules/@socket.io/component-emitter/index.mjs");
      const v1247 = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1
      });
      class C9 extends vP15023.Emitter {
        constructor(p1503, p1504, p1505) {
          super();
          this.connected = false;
          this.recovered = false;
          this.receiveBuffer = [];
          this.sendBuffer = [];
          this._queue = [];
          this._queueSeq = 0;
          this.ids = 0;
          this.acks = {};
          this.flags = {};
          this.io = p1503;
          this.nsp = p1504;
          if (p1505 && p1505.auth) {
            this.auth = p1505.auth;
          }
          this._opts = Object.assign({}, p1505);
          if (this.io._autoConnect) {
            this.open();
          }
        }
        get disconnected() {
          return !this.connected;
        }
        subEvents() {
          if (this.subs) {
            return;
          }
          const v1248 = this.io;
          this.subs = [(0, vP15022.on)(v1248, "open", this.onopen.bind(this)), (0, vP15022.on)(v1248, "packet", this.onpacket.bind(this)), (0, vP15022.on)(v1248, "error", this.onerror.bind(this)), (0, vP15022.on)(v1248, "close", this.onclose.bind(this))];
        }
        get active() {
          return !!this.subs;
        }
        connect() {
          if (this.connected) {
            return this;
          }
          this.subEvents();
          if (!this.io._reconnecting) {
            this.io.open();
          }
          if (this.io._readyState === "open") {
            this.onopen();
          }
          return this;
        }
        open() {
          return this.connect();
        }
        send(..._0x2db4f0) {
          _0x2db4f0.unshift("message");
          this.emit.apply(this, _0x2db4f0);
          return this;
        }
        emit(p1506, ..._0x58d2f7) {
          if (v1247.hasOwnProperty(p1506)) {
            throw new Error("\"" + p1506.toString() + "\" is a reserved event name");
          }
          _0x58d2f7.unshift(p1506);
          if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
            this._addToQueue(_0x58d2f7);
            return this;
          }
          const vO72 = {
            type: vP1502.PacketType.EVENT,
            data: _0x58d2f7
          };
          vO72.options = {};
          vO72.options.compress = this.flags.compress !== false;
          if (typeof _0x58d2f7[_0x58d2f7.length - 1] === "function") {
            const v1249 = this.ids++;
            const v1250 = _0x58d2f7.pop();
            this._registerAckCallback(v1249, v1250);
            vO72.id = v1249;
          }
          const v1251 = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
          const v1252 = this.flags.volatile && (!v1251 || !this.connected);
          if (v1252) {} else if (this.connected) {
            this.notifyOutgoingListeners(vO72);
            this.packet(vO72);
          } else {
            this.sendBuffer.push(vO72);
          }
          this.flags = {};
          return this;
        }
        _registerAckCallback(p1507, p1508) {
          const v1253 = this.flags.timeout ?? this._opts.ackTimeout;
          if (v1253 === undefined) {
            this.acks[p1507] = p1508;
            return;
          }
          const v1254 = this.io.setTimeoutFn(() => {
            delete this.acks[p1507];
            for (let vLN0198 = 0; vLN0198 < this.sendBuffer.length; vLN0198++) {
              if (this.sendBuffer[vLN0198].id === p1507) {
                this.sendBuffer.splice(vLN0198, 1);
              }
            }
            p1508.call(this, new Error("operation has timed out"));
          }, v1253);
          this.acks[p1507] = (..._0x2526fa) => {
            this.io.clearTimeoutFn(v1254);
            p1508.apply(this, [null, ..._0x2526fa]);
          };
        }
        emitWithAck(p1509, ..._0x2efabb) {
          const v1255 = this.flags.timeout !== undefined || this._opts.ackTimeout !== undefined;
          return new Promise((p1510, p1511) => {
            _0x2efabb.push((p1512, p1513) => {
              if (v1255) {
                if (p1512) {
                  return p1511(p1512);
                } else {
                  return p1510(p1513);
                }
              } else {
                return p1510(p1512);
              }
            });
            this.emit(p1509, ..._0x2efabb);
          });
        }
        _addToQueue(p1514) {
          let v1256;
          if (typeof p1514[p1514.length - 1] === "function") {
            v1256 = p1514.pop();
          }
          const vO73 = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: false,
            args: p1514,
            flags: Object.assign({
              fromQueue: true
            }, this.flags)
          };
          p1514.push((p1515, ..._0x4594fe) => {
            if (vO73 !== this._queue[0]) {
              return;
            }
            const v1257 = p1515 !== null;
            if (v1257) {
              if (vO73.tryCount > this._opts.retries) {
                this._queue.shift();
                if (v1256) {
                  v1256(p1515);
                }
              }
            } else {
              this._queue.shift();
              if (v1256) {
                v1256(null, ..._0x4594fe);
              }
            }
            vO73.pending = false;
            return this._drainQueue();
          });
          this._queue.push(vO73);
          this._drainQueue();
        }
        _drainQueue(p1516 = false) {
          if (!this.connected || this._queue.length === 0) {
            return;
          }
          const v1258 = this._queue[0];
          if (v1258.pending && !p1516) {
            return;
          }
          v1258.pending = true;
          v1258.tryCount++;
          this.flags = v1258.flags;
          this.emit.apply(this, v1258.args);
        }
        packet(p1517) {
          p1517.nsp = this.nsp;
          this.io._packet(p1517);
        }
        onopen() {
          if (typeof this.auth == "function") {
            this.auth(p1518 => {
              this._sendConnectPacket(p1518);
            });
          } else {
            this._sendConnectPacket(this.auth);
          }
        }
        _sendConnectPacket(p1519) {
          this.packet({
            type: vP1502.PacketType.CONNECT,
            data: this._pid ? Object.assign({
              pid: this._pid,
              offset: this._lastOffset
            }, p1519) : p1519
          });
        }
        onerror(p1520) {
          if (!this.connected) {
            this.emitReserved("connect_error", p1520);
          }
        }
        onclose(p1521, p1522) {
          this.connected = false;
          delete this.id;
          this.emitReserved("disconnect", p1521, p1522);
        }
        onpacket(p1523) {
          const v1259 = p1523.nsp === this.nsp;
          if (!v1259) {
            return;
          }
          switch (p1523.type) {
            case vP1502.PacketType.CONNECT:
              if (p1523.data && p1523.data.sid) {
                this.onconnect(p1523.data.sid, p1523.data.pid);
              } else {
                this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
              }
              break;
            case vP1502.PacketType.EVENT:
            case vP1502.PacketType.BINARY_EVENT:
              this.onevent(p1523);
              break;
            case vP1502.PacketType.ACK:
            case vP1502.PacketType.BINARY_ACK:
              this.onack(p1523);
              break;
            case vP1502.PacketType.DISCONNECT:
              this.ondisconnect();
              break;
            case vP1502.PacketType.CONNECT_ERROR:
              this.destroy();
              const v1260 = new Error(p1523.data.message);
              v1260.data = p1523.data.data;
              this.emitReserved("connect_error", v1260);
              break;
          }
        }
        onevent(p1524) {
          const v1261 = p1524.data || [];
          if (p1524.id != null) {
            v1261.push(this.ack(p1524.id));
          }
          if (this.connected) {
            this.emitEvent(v1261);
          } else {
            this.receiveBuffer.push(Object.freeze(v1261));
          }
        }
        emitEvent(p1525) {
          if (this._anyListeners && this._anyListeners.length) {
            const v1262 = this._anyListeners.slice();
            for (const v1263 of v1262) {
              v1263.apply(this, p1525);
            }
          }
          super.emit.apply(this, p1525);
          if (this._pid && p1525.length && typeof p1525[p1525.length - 1] === "string") {
            this._lastOffset = p1525[p1525.length - 1];
          }
        }
        ack(p1526) {
          const vThis135 = this;
          let v1264 = false;
          return function (..._0x19b277) {
            if (v1264) {
              return;
            }
            v1264 = true;
            vThis135.packet({
              type: vP1502.PacketType.ACK,
              id: p1526,
              data: _0x19b277
            });
          };
        }
        onack(p1527) {
          const v1265 = this.acks[p1527.id];
          if (typeof v1265 === "function") {
            v1265.apply(this, p1527.data);
            delete this.acks[p1527.id];
          } else {}
        }
        onconnect(p1528, p1529) {
          this.id = p1528;
          this.recovered = p1529 && this._pid === p1529;
          this._pid = p1529;
          this.connected = true;
          this.emitBuffered();
          this.emitReserved("connect");
          this._drainQueue(true);
        }
        emitBuffered() {
          this.receiveBuffer.forEach(p1530 => this.emitEvent(p1530));
          this.receiveBuffer = [];
          this.sendBuffer.forEach(p1531 => {
            this.notifyOutgoingListeners(p1531);
            this.packet(p1531);
          });
          this.sendBuffer = [];
        }
        ondisconnect() {
          this.destroy();
          this.onclose("io server disconnect");
        }
        destroy() {
          if (this.subs) {
            this.subs.forEach(p1532 => p1532());
            this.subs = undefined;
          }
          this.io._destroy(this);
        }
        disconnect() {
          if (this.connected) {
            this.packet({
              type: vP1502.PacketType.DISCONNECT
            });
          }
          this.destroy();
          if (this.connected) {
            this.onclose("io client disconnect");
          }
          return this;
        }
        close() {
          return this.disconnect();
        }
        compress(p1533) {
          this.flags.compress = p1533;
          return this;
        }
        get volatile() {
          this.flags.volatile = true;
          return this;
        }
        timeout(p1534) {
          this.flags.timeout = p1534;
          return this;
        }
        onAny(p1535) {
          this._anyListeners = this._anyListeners || [];
          this._anyListeners.push(p1535);
          return this;
        }
        prependAny(p1536) {
          this._anyListeners = this._anyListeners || [];
          this._anyListeners.unshift(p1536);
          return this;
        }
        offAny(p1537) {
          if (!this._anyListeners) {
            return this;
          }
          if (p1537) {
            const v1266 = this._anyListeners;
            for (let vLN0199 = 0; vLN0199 < v1266.length; vLN0199++) {
              if (p1537 === v1266[vLN0199]) {
                v1266.splice(vLN0199, 1);
                return this;
              }
            }
          } else {
            this._anyListeners = [];
          }
          return this;
        }
        listenersAny() {
          return this._anyListeners || [];
        }
        onAnyOutgoing(p1538) {
          this._anyOutgoingListeners = this._anyOutgoingListeners || [];
          this._anyOutgoingListeners.push(p1538);
          return this;
        }
        prependAnyOutgoing(p1539) {
          this._anyOutgoingListeners = this._anyOutgoingListeners || [];
          this._anyOutgoingListeners.unshift(p1539);
          return this;
        }
        offAnyOutgoing(p1540) {
          if (!this._anyOutgoingListeners) {
            return this;
          }
          if (p1540) {
            const v1267 = this._anyOutgoingListeners;
            for (let vLN0200 = 0; vLN0200 < v1267.length; vLN0200++) {
              if (p1540 === v1267[vLN0200]) {
                v1267.splice(vLN0200, 1);
                return this;
              }
            }
          } else {
            this._anyOutgoingListeners = [];
          }
          return this;
        }
        listenersAnyOutgoing() {
          return this._anyOutgoingListeners || [];
        }
        notifyOutgoingListeners(p1541) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const v1268 = this._anyOutgoingListeners.slice();
            for (const v1269 of v1268) {
              v1269.apply(this, p1541.data);
            }
          }
        }
      }
    },
    "./node_modules/socket.io-client/build/esm/url.js": (p1542, p1543, p1544) => {
      'use strict';

      p1544.r(p1543);
      p1544.d(p1543, {
        url: () => f289
      });
      var vP1544 = p1544("./node_modules/engine.io-client/build/esm/index.js");
      function f289(p1545, p1546 = "", p1547) {
        let vP1545 = p1545;
        p1547 = p1547 || typeof location !== "undefined" && location;
        if (p1545 == null) {
          p1545 = p1547.protocol + "//" + p1547.host;
        }
        if (typeof p1545 === "string") {
          if (p1545.charAt(0) === "/") {
            if (p1545.charAt(1) === "/") {
              p1545 = p1547.protocol + p1545;
            } else {
              p1545 = p1547.host + p1545;
            }
          }
          if (!/^(https?|wss?):\/\//.test(p1545)) {
            if (typeof p1547 !== "undefined") {
              p1545 = p1547.protocol + "//" + p1545;
            } else {
              p1545 = "https://" + p1545;
            }
          }
          vP1545 = (0, vP1544.parse)(p1545);
        }
        if (!vP1545.port) {
          if (/^(http|ws)$/.test(vP1545.protocol)) {
            vP1545.port = "80";
          } else if (/^(http|ws)s$/.test(vP1545.protocol)) {
            vP1545.port = "443";
          }
        }
        vP1545.path = vP1545.path || "/";
        const v1270 = vP1545.host.indexOf(":") !== -1;
        const v1271 = v1270 ? "[" + vP1545.host + "]" : vP1545.host;
        vP1545.id = vP1545.protocol + "://" + v1271 + ":" + vP1545.port + p1546;
        vP1545.href = vP1545.protocol + "://" + v1271 + (p1547 && p1547.port === vP1545.port ? "" : ":" + vP1545.port);
        return vP1545;
      }
    },
    "./node_modules/socket.io-parser/build/esm/binary.js": (p1548, p1549, p1550) => {
      'use strict';

      p1550.r(p1549);
      p1550.d(p1549, {
        deconstructPacket: () => f290,
        reconstructPacket: () => f292
      });
      var vP1550 = p1550("./node_modules/socket.io-parser/build/esm/is-binary.js");
      function f290(p1551) {
        const vA27 = [];
        const v1272 = p1551.data;
        const vP1551 = p1551;
        vP1551.data = f291(v1272, vA27);
        vP1551.attachments = vA27.length;
        return {
          packet: vP1551,
          buffers: vA27
        };
      }
      function f291(p1552, p1553) {
        if (!p1552) {
          return p1552;
        }
        if ((0, vP1550.isBinary)(p1552)) {
          const vO74 = {
            _placeholder: true,
            num: p1553.length
          };
          p1553.push(p1552);
          return vO74;
        } else if (Array.isArray(p1552)) {
          const v1273 = new Array(p1552.length);
          for (let vLN0201 = 0; vLN0201 < p1552.length; vLN0201++) {
            v1273[vLN0201] = f291(p1552[vLN0201], p1553);
          }
          return v1273;
        } else if (typeof p1552 === "object" && !(p1552 instanceof Date)) {
          const vO75 = {};
          for (const v1274 in p1552) {
            if (Object.prototype.hasOwnProperty.call(p1552, v1274)) {
              vO75[v1274] = f291(p1552[v1274], p1553);
            }
          }
          return vO75;
        }
        return p1552;
      }
      function f292(p1554, p1555) {
        p1554.data = f293(p1554.data, p1555);
        delete p1554.attachments;
        return p1554;
      }
      function f293(p1556, p1557) {
        if (!p1556) {
          return p1556;
        }
        if (p1556 && p1556._placeholder === true) {
          const v1275 = typeof p1556.num === "number" && p1556.num >= 0 && p1556.num < p1557.length;
          if (v1275) {
            return p1557[p1556.num];
          } else {
            throw new Error("illegal attachments");
          }
        } else if (Array.isArray(p1556)) {
          for (let vLN0202 = 0; vLN0202 < p1556.length; vLN0202++) {
            p1556[vLN0202] = f293(p1556[vLN0202], p1557);
          }
        } else if (typeof p1556 === "object") {
          for (const v1276 in p1556) {
            if (Object.prototype.hasOwnProperty.call(p1556, v1276)) {
              p1556[v1276] = f293(p1556[v1276], p1557);
            }
          }
        }
        return p1556;
      }
    },
    "./node_modules/socket.io-parser/build/esm/index.js": (p1558, p1559, p1560) => {
      'use strict';

      p1560.r(p1559);
      p1560.d(p1559, {
        Decoder: () => C11,
        Encoder: () => C10,
        PacketType: () => v1277,
        protocol: () => vLN53
      });
      var vP1560 = p1560("./node_modules/@socket.io/component-emitter/index.mjs");
      var vP15602 = p1560("./node_modules/socket.io-parser/build/esm/binary.js");
      var vP15603 = p1560("./node_modules/socket.io-parser/build/esm/is-binary.js");
      const vA28 = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
      const vLN53 = 5;
      var v1277;
      (function (p1561) {
        p1561[p1561.CONNECT = 0] = "CONNECT";
        p1561[p1561.DISCONNECT = 1] = "DISCONNECT";
        p1561[p1561.EVENT = 2] = "EVENT";
        p1561[p1561.ACK = 3] = "ACK";
        p1561[p1561.CONNECT_ERROR = 4] = "CONNECT_ERROR";
        p1561[p1561.BINARY_EVENT = 5] = "BINARY_EVENT";
        p1561[p1561.BINARY_ACK = 6] = "BINARY_ACK";
      })(v1277 ||= {});
      class C10 {
        constructor(p1562) {
          this.replacer = p1562;
        }
        encode(p1563) {
          if (p1563.type === v1277.EVENT || p1563.type === v1277.ACK) {
            if ((0, vP15603.hasBinary)(p1563)) {
              return this.encodeAsBinary({
                type: p1563.type === v1277.EVENT ? v1277.BINARY_EVENT : v1277.BINARY_ACK,
                nsp: p1563.nsp,
                data: p1563.data,
                id: p1563.id
              });
            }
          }
          return [this.encodeAsString(p1563)];
        }
        encodeAsString(p1564) {
          let v1278 = "" + p1564.type;
          if (p1564.type === v1277.BINARY_EVENT || p1564.type === v1277.BINARY_ACK) {
            v1278 += p1564.attachments + "-";
          }
          if (p1564.nsp && p1564.nsp !== "/") {
            v1278 += p1564.nsp + ",";
          }
          if (p1564.id != null) {
            v1278 += p1564.id;
          }
          if (p1564.data != null) {
            v1278 += JSON.stringify(p1564.data, this.replacer);
          }
          return v1278;
        }
        encodeAsBinary(p1565) {
          const v1279 = (0, vP15602.deconstructPacket)(p1565);
          const v1280 = this.encodeAsString(v1279.packet);
          const v1281 = v1279.buffers;
          v1281.unshift(v1280);
          return v1281;
        }
      }
      function f294(p1566) {
        return Object.prototype.toString.call(p1566) === "[object Object]";
      }
      class C11 extends vP1560.Emitter {
        constructor(p1567) {
          super();
          this.reviver = p1567;
        }
        add(p1568) {
          let v1282;
          if (typeof p1568 === "string") {
            if (this.reconstructor) {
              throw new Error("got plaintext data when reconstructing a packet");
            }
            v1282 = this.decodeString(p1568);
            const v1283 = v1282.type === v1277.BINARY_EVENT;
            if (v1283 || v1282.type === v1277.BINARY_ACK) {
              v1282.type = v1283 ? v1277.EVENT : v1277.ACK;
              this.reconstructor = new C12(v1282);
              if (v1282.attachments === 0) {
                super.emitReserved("decoded", v1282);
              }
            } else {
              super.emitReserved("decoded", v1282);
            }
          } else if ((0, vP15603.isBinary)(p1568) || p1568.base64) {
            if (!this.reconstructor) {
              throw new Error("got binary data when not reconstructing a packet");
            } else {
              v1282 = this.reconstructor.takeBinaryData(p1568);
              if (v1282) {
                this.reconstructor = null;
                super.emitReserved("decoded", v1282);
              }
            }
          } else {
            throw new Error("Unknown type: " + p1568);
          }
        }
        decodeString(p1569) {
          let vLN0203 = 0;
          const vO76 = {
            type: Number(p1569.charAt(0))
          };
          if (v1277[vO76.type] === undefined) {
            throw new Error("unknown packet type " + vO76.type);
          }
          if (vO76.type === v1277.BINARY_EVENT || vO76.type === v1277.BINARY_ACK) {
            const v1284 = vLN0203 + 1;
            while (p1569.charAt(++vLN0203) !== "-" && vLN0203 != p1569.length) {}
            const v1285 = p1569.substring(v1284, vLN0203);
            if (v1285 != Number(v1285) || p1569.charAt(vLN0203) !== "-") {
              throw new Error("Illegal attachments");
            }
            vO76.attachments = Number(v1285);
          }
          if (p1569.charAt(vLN0203 + 1) === "/") {
            const v1286 = vLN0203 + 1;
            while (++vLN0203) {
              const v1287 = p1569.charAt(vLN0203);
              if (v1287 === ",") {
                break;
              }
              if (vLN0203 === p1569.length) {
                break;
              }
            }
            vO76.nsp = p1569.substring(v1286, vLN0203);
          } else {
            vO76.nsp = "/";
          }
          const v1288 = p1569.charAt(vLN0203 + 1);
          if (v1288 !== "" && Number(v1288) == v1288) {
            const v1289 = vLN0203 + 1;
            while (++vLN0203) {
              const v1290 = p1569.charAt(vLN0203);
              if (v1290 == null || Number(v1290) != v1290) {
                --vLN0203;
                break;
              }
              if (vLN0203 === p1569.length) {
                break;
              }
            }
            vO76.id = Number(p1569.substring(v1289, vLN0203 + 1));
          }
          if (p1569.charAt(++vLN0203)) {
            const v1291 = this.tryParse(p1569.substr(vLN0203));
            if (C11.isPayloadValid(vO76.type, v1291)) {
              vO76.data = v1291;
            } else {
              throw new Error("invalid payload");
            }
          }
          return vO76;
        }
        tryParse(p1570) {
          try {
            return JSON.parse(p1570, this.reviver);
          } catch (e64) {
            return false;
          }
        }
        static isPayloadValid(p1571, p1572) {
          switch (p1571) {
            case v1277.CONNECT:
              return f294(p1572);
            case v1277.DISCONNECT:
              return p1572 === undefined;
            case v1277.CONNECT_ERROR:
              return typeof p1572 === "string" || f294(p1572);
            case v1277.EVENT:
            case v1277.BINARY_EVENT:
              return Array.isArray(p1572) && (typeof p1572[0] === "number" || typeof p1572[0] === "string" && vA28.indexOf(p1572[0]) === -1);
            case v1277.ACK:
            case v1277.BINARY_ACK:
              return Array.isArray(p1572);
          }
        }
        destroy() {
          if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
            this.reconstructor = null;
          }
        }
      }
      class C12 {
        constructor(p1573) {
          this.packet = p1573;
          this.buffers = [];
          this.reconPack = p1573;
        }
        takeBinaryData(p1574) {
          this.buffers.push(p1574);
          if (this.buffers.length === this.reconPack.attachments) {
            const v1292 = (0, vP15602.reconstructPacket)(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return v1292;
          }
          return null;
        }
        finishedReconstruction() {
          this.reconPack = null;
          this.buffers = [];
        }
      }
    },
    "./node_modules/socket.io-parser/build/esm/is-binary.js": (p1575, p1576, p1577) => {
      'use strict';

      p1577.r(p1576);
      p1577.d(p1576, {
        hasBinary: () => f296,
        isBinary: () => f295
      });
      const v1293 = typeof ArrayBuffer === "function";
      const vF70 = p1578 => {
        if (typeof ArrayBuffer.isView === "function") {
          return ArrayBuffer.isView(p1578);
        } else {
          return p1578.buffer instanceof ArrayBuffer;
        }
      };
      const v1294 = Object.prototype.toString;
      const v1295 = typeof Blob === "function" || typeof Blob !== "undefined" && v1294.call(Blob) === "[object BlobConstructor]";
      const v1296 = typeof File === "function" || typeof File !== "undefined" && v1294.call(File) === "[object FileConstructor]";
      function f295(p1579) {
        return v1293 && (p1579 instanceof ArrayBuffer || vF70(p1579)) || v1295 && p1579 instanceof Blob || v1296 && p1579 instanceof File;
      }
      function f296(p1580, p1581) {
        if (!p1580 || typeof p1580 !== "object") {
          return false;
        }
        if (Array.isArray(p1580)) {
          for (let vLN0204 = 0, v1297 = p1580.length; vLN0204 < v1297; vLN0204++) {
            if (f296(p1580[vLN0204])) {
              return true;
            }
          }
          return false;
        }
        if (f295(p1580)) {
          return true;
        }
        if (p1580.toJSON && typeof p1580.toJSON === "function" && arguments.length === 1) {
          return f296(p1580.toJSON(), true);
        }
        for (const v1298 in p1580) {
          if (Object.prototype.hasOwnProperty.call(p1580, v1298) && f296(p1580[v1298])) {
            return true;
          }
        }
        return false;
      }
    }
  };
  var vO77 = {};
  function f297(p1582) {
    var v1299 = vO77[p1582];
    if (v1299 !== undefined) {
      return v1299.exports;
    }
    var v1300 = vO77[p1582] = {
      id: p1582,
      loaded: false,
      exports: {}
    };
    vO[p1582](v1300, v1300.exports, f297);
    v1300.loaded = true;
    return v1300.exports;
  }
  (() => {
    f297.amdO = {};
  })();
  (() => {
    f297.n = p1583 => {
      var v1301 = p1583 && p1583.__esModule ? () => p1583.default : () => p1583;
      f297.d(v1301, {
        a: v1301
      });
      return v1301;
    };
  })();
  (() => {
    f297.d = (p1584, p1585) => {
      for (var v1302 in p1585) {
        if (f297.o(p1585, v1302) && !f297.o(p1584, v1302)) {
          Object.defineProperty(p1584, v1302, {
            enumerable: true,
            get: p1585[v1302]
          });
        }
      }
    };
  })();
  (() => {
    f297.g = function () {
      if (typeof globalThis === "object") {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (e65) {
        if (typeof window === "object") {
          return window;
        }
      }
    }();
  })();
  (() => {
    f297.hmd = p1586 => {
      p1586 = Object.create(p1586);
      if (!p1586.children) {
        p1586.children = [];
      }
      Object.defineProperty(p1586, "exports", {
        enumerable: true,
        set: () => {
          throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + p1586.id);
        }
      });
      return p1586;
    };
  })();
  (() => {
    f297.o = (p1587, p1588) => Object.prototype.hasOwnProperty.call(p1587, p1588);
  })();
  (() => {
    f297.r = p1589 => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(p1589, Symbol.toStringTag, {
          value: "Module"
        });
      }
      Object.defineProperty(p1589, "__esModule", {
        value: true
      });
    };
  })();
  var vF297 = f297("./src/temp.js");
})();