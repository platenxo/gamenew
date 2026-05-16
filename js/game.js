
window.sectorSystem = {
  settings: {
    lineWidth: 0.15,
    lineColor: 16711680,
    lineAlpha: 0.3,
    backgroundColor: 0,
    backgroundAlpha: 0.6,
    sectorTextStyle: {
      fontFamily: "Arial",
      fontSize: 14,
      fill: 16777215
    },
    quarterTextStyle: {
      fontFamily: "Arial",
      fontSize: 20,
      fill: 16777215
    },
    showLines: true
  },
  state: {
    container: null,
    graphics: null,
    isActive: false,
    currentMode: null,
    texts: [],
    initialized: false,
    renderContainer: null,
    restored: false
  },
  findRenderContainer: function () {
    if (this.state.renderContainer) {
      return this.state.renderContainer;
    }
    const _0x2e426d = [() => window.app?.stage, () => window.PIXI?.app?.stage, () => window.gameApp?.stage, () => window.renderer?.stage, () => window._wup?._anApp?.og?.af?.ng?.mf, () => window._1f8817?.og?.af?.ng?.mf, () => window.decoder?.og?.af?.ng?.mf, () => window.game?.renderer?.stage, () => window.game?.scene?.stage, () => {
      for (let _0x1f2783 in window) {
        try {
          const _0x2649e9 = window[_0x1f2783];
          if (_0x2649e9 && typeof _0x2649e9 === "object") {
            if (_0x2649e9 instanceof PIXI.Container) {
              return _0x2649e9;
            }
            if (_0x2649e9.stage instanceof PIXI.Container) {
              return _0x2649e9.stage;
            }
            if (_0x2649e9.mf instanceof PIXI.Container) {
              return _0x2649e9.mf;
            }
            if (_0x2649e9.og?.af?.ng?.mf instanceof PIXI.Container) {
              return _0x2649e9.og.af.ng.mf;
            }
          }
        } catch (_0x17bc8) {}
      }
      return null;
    }];
    for (let _0x54824a = 0; _0x54824a < _0x2e426d.length; _0x54824a++) {
      try {
        const _0x3b83dd = _0x2e426d[_0x54824a]();
        if (_0x3b83dd && _0x3b83dd instanceof PIXI.Container) {
          this.state.renderContainer = _0x3b83dd;
          return _0x3b83dd;
        }
      } catch (_0x1a3e58) {}
    }
    return null;
  },
  getRadius: function () {
    const _0x3ddd15 = [() => window._wup?._anApp?.dh?.hh?.zg, () => window._1f8817?.dh?.hh?.zg, () => window.decoder?.dh?.hh?.zg, () => window.game?.radius, () => window.gameRadius, () => window.mapRadius, () => 500];
    for (let _0x7bd4f8 of _0x3ddd15) {
      try {
        const _0x18adc4 = _0x7bd4f8();
        if (_0x18adc4 && typeof _0x18adc4 === "number" && _0x18adc4 > 0) {
          return _0x18adc4;
        }
      } catch (_0x207b87) {}
    }
    return 500;
  },
  clearTexts: function () {
    this.state.texts.forEach(_0xe5938f => {
      if (_0xe5938f && _0xe5938f.parent) {
        _0xe5938f.parent.removeChild(_0xe5938f);
        try {
          _0xe5938f.destroy({
            children: true,
            texture: false,
            baseTexture: false
          });
        } catch (_0x3867bf) {}
      }
    });
    this.state.texts = [];
  },
  initDrawing: function (_0x3ab078) {
    this.clearTexts();
    this.state.graphics.clear();
    this.state.graphics.lineStyle(this.settings.lineWidth, this.settings.lineColor, this.settings.lineAlpha);
    this.state.graphics.beginFill(this.settings.backgroundColor, this.settings.backgroundAlpha);
    this.state.graphics.drawCircle(0, 0, _0x3ab078);
    this.state.graphics.endFill();
    return _0x3ab078;
  },
  drawSectors: function () {
    const _0x855910 = this.initDrawing(this.getRadius());
    const _0x24dec7 = _0x855910 / 3;
    if (this.settings.showLines) {
      for (let _0x11705a = 1; _0x11705a < 3; _0x11705a++) {
        this.state.graphics.drawCircle(0, 0, _0x855910 - _0x11705a * _0x24dec7);
      }
      for (let _0x265f4d = 0; _0x265f4d < 4; _0x265f4d++) {
        const _0x104929 = _0x265f4d * Math.PI / 2;
        this.state.graphics.moveTo(0, 0);
        this.state.graphics.lineTo(Math.cos(_0x104929) * _0x855910, Math.sin(_0x104929) * _0x855910);
      }
    }
    for (let _0x3c142b = 0; _0x3c142b < 4; _0x3c142b++) {
      const _0x153ccb = _0x3c142b * Math.PI / 2;
      for (let _0x2d2dea = 0; _0x2d2dea < 3; _0x2d2dea++) {
        const _0xb8a98b = _0x855910 - (_0x2d2dea * _0x24dec7 + _0x24dec7 / 2);
        const _0x488cb4 = _0x153ccb + Math.PI / 4;
        const _0xe31495 = ["S", "D", "F"][_0x2d2dea] + (_0x3c142b + 1);
        const _0x56ffe0 = new PIXI.Text(_0xe31495, this.settings.sectorTextStyle);
        _0x56ffe0.anchor.set(0.5);
        _0x56ffe0.position.set(Math.cos(_0x488cb4) * _0xb8a98b, Math.sin(_0x488cb4) * _0xb8a98b);
        this.state.container.addChild(_0x56ffe0);
        this.state.texts.push(_0x56ffe0);
      }
    }
  },
  drawQuarters: function () {
    const _0x42406b = this.initDrawing(this.getRadius());
    if (this.settings.showLines) {
      this.state.graphics.moveTo(-_0x42406b, 0);
      this.state.graphics.lineTo(_0x42406b, 0);
      this.state.graphics.moveTo(0, -_0x42406b);
      this.state.graphics.lineTo(0, _0x42406b);
    }
    [{
      n: "UP 1",
      x: 1,
      y: -1
    }, {
      n: "UP 2",
      x: -1,
      y: -1
    }, {
      n: "UP 3",
      x: -1,
      y: 1
    }, {
      n: "UP 4",
      x: 1,
      y: 1
    }].forEach(_0x3311eb => {
      const _0x4ed8e4 = new PIXI.Text(_0x3311eb.n, this.settings.quarterTextStyle);
      _0x4ed8e4.anchor.set(0.5);
      _0x4ed8e4.position.set(_0x3311eb.x * _0x42406b / 3, _0x3311eb.y * _0x42406b / 3);
      this.state.container.addChild(_0x4ed8e4);
      this.state.texts.push(_0x4ed8e4);
    });
  },
  initGraphics: function () {
    if (this.state.initialized) {
      return true;
    }
    const _0x2b3961 = this.findRenderContainer();
    if (!_0x2b3961) {
      return false;
    }
    try {
      this.state.container = new PIXI.Container();
      this.state.graphics = new PIXI.Graphics();
      this.state.container.addChild(this.state.graphics);
      _0x2b3961.addChild(this.state.container);
      if (this.state.container.zIndex !== undefined) {
        this.state.container.zIndex = 10;
      }
      this.state.container.visible = false;
      this.state.initialized = true;
      return true;
    } catch (_0x4bb6d0) {
      return false;
    }
  },
  toggleMode: function (_0x29d25a) {
    if (!this.initGraphics()) {
      return;
    }
    if (this.state.isActive && this.state.currentMode === _0x29d25a) {
      this.state.container.visible = false;
      this.state.isActive = false;
      this.state.currentMode = null;
      const _0x48c5ea = document.getElementById("sector_system_toggle");
      if (_0x48c5ea) {
        _0x48c5ea.checked = false;
      }
      this.saveSettings();
      return;
    }
    this.state.isActive = true;
    this.state.currentMode = _0x29d25a;
    this.state.container.visible = true;
    const _0x24f574 = document.getElementById("sector_system_toggle");
    if (_0x24f574) {
      _0x24f574.checked = true;
    }
    if (_0x29d25a === "sectors") {
      this.drawSectors();
    } else {
      this.drawQuarters();
    }
    this.saveSettings();
  },
  setupKeyboardEvents: function () {
    const _0x4c576b = _0x52ac7f => {
      const _0x1e45b7 = _0x52ac7f.keyCode || _0x52ac7f.which;
      const _0x1bfc98 = _0x52ac7f.key;
      if (_0x52ac7f.target.tagName === "INPUT" || _0x52ac7f.target.tagName === "TEXTAREA") {
        return;
      }
      if (_0x52ac7f.target.closest(".wup-modal, .wormup-container")) {
        return;
      }
      const _0x5e5238 = {
        83: () => this.toggleMode("sectors"),
        187: () => this.toggleMode("sectors"),
        61: () => this.toggleMode("sectors"),
        88: () => this.toggleMode("quarters")
      };
      if (_0x5e5238[_0x1e45b7]) {
        _0x52ac7f.preventDefault();
        _0x5e5238[_0x1e45b7]();
        if (typeof this.initUserInterface === "function") {
          this.initUserInterface();
        }
      }
    };
    document.addEventListener("keydown", _0x4c576b);
  },
  saveSettings: function () {
    try {
      const _0x2f2dc0 = {
        settings: this.settings,
        isActive: this.state.isActive,
        currentMode: this.state.currentMode
      };
      localStorage.setItem("sectorSystemSettings", JSON.stringify(_0x2f2dc0));
    } catch (_0xcc232) {}
  },
  loadSettings: function () {
    try {
      const _0x58c0fc = localStorage.getItem("sectorSystemSettings");
      if (_0x58c0fc) {
        const _0x5b833c = JSON.parse(_0x58c0fc);
        if (_0x5b833c.settings) {
          this.settings = {
            ...this.settings,
            ..._0x5b833c.settings
          };
        }
        this.savedState = {
          isActive: _0x5b833c.isActive || false,
          currentMode: _0x5b833c.currentMode || "sectors"
        };
      }
    } catch (_0x43ed8d) {}
  },
  applySettings: function () {
    if (this.state.isActive && this.state.currentMode) {
      if (this.state.currentMode === "sectors") {
        this.drawSectors();
      } else {
        this.drawQuarters();
      }
    }
  },
  init: function () {
    if (typeof PIXI === "undefined") {
      setTimeout(() => this.init(), 1000);
      return;
    }
    this.loadSettings();
    this.setupKeyboardEvents();
    const _0x172a64 = this.initGraphics();
    if (!_0x172a64) {
      setTimeout(() => this.init(), 1000);
      return;
    }
    setTimeout(() => {
      if (this.savedState && this.savedState.isActive) {
        this.state.isActive = true;
        this.state.currentMode = this.savedState.currentMode;
        this.state.container.visible = true;
        if (this.state.currentMode === "sectors") {
          this.drawSectors();
        } else {
          this.drawQuarters();
        }
        const _0x5d0859 = document.getElementById("sector_system_toggle");
        if (_0x5d0859) {
          _0x5d0859.checked = true;
        }
        this.state.restored = true;
      }
    }, 1000);
  },
  initUserInterface: function () {
    if (typeof $ === "undefined") {
      return;
    }
    function _0x2eadc1(_0x376527) {
      return "#" + _0x376527.toString(16).padStart(6, "0");
    }
    function _0x473a57(_0xaf1ea0) {
      return parseInt(_0xaf1ea0.replace("#", ""), 16);
    }
    if (!this.state.restored && this.savedState && this.savedState.isActive) {
      this.toggleMode(this.savedState.currentMode || "sectors");
      this.state.restored = true;
    }
    const _0x1f9c41 = () => {
      const _0x540b04 = $("#sector_system_toggle");
      if (_0x540b04.length) {
        _0x540b04.prop("checked", this.state.isActive);
      }
      const _0x2d9f6d = $("#sector_display_mode");
      if (_0x2d9f6d.length) {
        _0x2d9f6d.val(this.state.currentMode || "sectors");
      }
      const _0x3d5621 = $("#sector_bg_color");
      if (_0x3d5621.length) {
        _0x3d5621.val(_0x2eadc1(this.settings.backgroundColor));
      }
      const _0x26c897 = $("#sector_line_color");
      if (_0x26c897.length) {
        _0x26c897.val(_0x2eadc1(this.settings.lineColor));
      }
      const _0x4ab431 = $("#sector_bg_opacity");
      const _0x9d5ee5 = $("#sector_bg_opacity_value");
      if (_0x4ab431.length && _0x9d5ee5.length) {
        _0x4ab431.val(this.settings.backgroundAlpha * 100);
        _0x9d5ee5.text(Math.round(this.settings.backgroundAlpha * 100) + "%");
      }
      const _0x19af5b = $("#sector_line_opacity");
      const _0x1890c7 = $("#sector_line_opacity_value");
      if (_0x19af5b.length && _0x1890c7.length) {
        _0x19af5b.val(this.settings.lineAlpha * 100);
        _0x1890c7.text(Math.round(this.settings.lineAlpha * 100) + "%");
      }
      const _0x102f5c = $("#sector_show_lines");
      if (_0x102f5c.length) {
        _0x102f5c.prop("checked", this.settings.showLines);
      }
      const _0x47edc2 = $("#sector_settings_panel");
      if (_0x47edc2.length) {
        if (this.state.isActive) {
          _0x47edc2.slideDown(300);
        } else {
          _0x47edc2.slideUp(200);
        }
      }
      const _0x3b52e0 = $("#sector_lines_options");
      if (_0x3b52e0.length) {
        if (!this.settings.showLines) {
          _0x3b52e0.slideUp(200);
        } else {
          _0x3b52e0.slideDown(200);
        }
      }
    };
    $("#sector_system_toggle").off("change").on("change", _0x4b20cb => {
      const _0x2b2c3f = $(_0x4b20cb.target).prop("checked");
      if (_0x2b2c3f) {
        const _0x2950aa = $("#sector_display_mode").val() || "sectors";
        this.toggleMode(_0x2950aa);
      } else if (this.state.isActive) {
        this.toggleMode(this.state.currentMode);
      }
      _0x1f9c41();
    });
    $("#sector_display_mode").off("change").on("change", _0x2bc54b => {
      const _0x19e7b3 = $(_0x2bc54b.target).val();
      if (this.state.isActive) {
        this.toggleMode(this.state.currentMode);
        this.toggleMode(_0x19e7b3);
        _0x1f9c41();
      }
    });
    $("#sector_bg_color").off("change").on("change", _0x15dab2 => {
      this.settings.backgroundColor = _0x473a57($(_0x15dab2.target).val());
      this.applySettings();
      this.saveSettings();
    });
    $("#sector_line_color").off("change").on("change", _0x4a3f1d => {
      this.settings.lineColor = _0x473a57($(_0x4a3f1d.target).val());
      this.applySettings();
      this.saveSettings();
    });
    $("#sector_bg_opacity").off("input").on("input", _0x27d723 => {
      const _0x1b0fad = parseInt($(_0x27d723.target).val()) / 100;
      this.settings.backgroundAlpha = _0x1b0fad;
      $("#sector_bg_opacity_value").text(Math.round(_0x1b0fad * 100) + "%");
      this.applySettings();
      this.saveSettings();
    });
    $("#sector_line_opacity").off("input").on("input", _0x5ef0f6 => {
      const _0x45e88b = parseInt($(_0x5ef0f6.target).val()) / 100;
      this.settings.lineAlpha = _0x45e88b;
      $("#sector_line_opacity_value").text(Math.round(_0x45e88b * 100) + "%");
      this.applySettings();
      this.saveSettings();
    });
    $("#sector_show_lines").off("change").on("change", _0x5c34a7 => {
      this.settings.showLines = $(_0x5c34a7.target).prop("checked");
      const _0x113fa7 = $("#sector_lines_options");
      if (!this.settings.showLines) {
        _0x113fa7.slideUp(200);
      } else {
        _0x113fa7.slideDown(200);
      }
      this.applySettings();
      this.saveSettings();
    });
    _0x1f9c41();
  }
};
setTimeout(() => {
  if (window.sectorSystem && typeof window.sectorSystem.init === "function") {
    window.sectorSystem.init();
  }
}, 1000);
$(document).ready(function () {
  $(".sidebar-item[data-tab='backgrounds']").on("click", function () {
    if (window.sectorSystem && typeof window.sectorSystem.initUserInterface === "function") {
      setTimeout(() => window.sectorSystem.initUserInterface(), 100);
    }
  });
});
window.toggleSectors = () => window.sectorSystem?.toggleMode("sectors");
window.toggleQuarters = () => window.sectorSystem?.toggleMode("quarters");
window.debugSectors = () => window.sectorSystem?.debug();
(() => {
  var vO = {
    "./node_modules/.pnpm/@colyseus+schema@2.0.37/node_modules/@colyseus/schema/build/umd/index.js": function (p6, p7) {
      (function (p8, p9) {
        if (true) {
          p9(p7);
        } else {
          0;
        }
      })(this, function (p10) {
        'use strict';

        function f2(p11, p12) {
          f2 = Object.setPrototypeOf || {
            "__proto__": []
          } instanceof Array && function (p13, p14) {
            p13.__proto__ = p14;
          } || function (p15, p16) {
            for (var v12 in p16) {
              if (Object.prototype.hasOwnProperty.call(p16, v12)) {
                p15[v12] = p16[v12];
              }
            }
          };
          return f2(p11, p12);
        }
        function f3(p17, p18) {
          if (typeof p18 !== "function" && p18 !== null) {
            throw new TypeError("Class extends value " + String(p18) + " is not a constructor or null");
          }
          f2(p17, p18);
          function f4() {
            this.constructor = p17;
          }
          p17.prototype = p18 === null ? Object.create(p18) : (f4.prototype = p18.prototype, new f4());
        }
        function f5(p19, p20, p21, p22) {
          var v13 = arguments.length;
          var v14 = v13 < 3 ? p20 : p22 === null ? p22 = Object.getOwnPropertyDescriptor(p20, p21) : p22;
          var v15;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
            v14 = Reflect.decorate(p19, p20, p21, p22);
          } else {
            for (var v16 = p19.length - 1; v16 >= 0; v16--) {
              if (v15 = p19[v16]) {
                v14 = (v13 < 3 ? v15(v14) : v13 > 3 ? v15(p20, p21, v14) : v15(p20, p21)) || v14;
              }
            }
          }
          if (v13 > 3 && v14) {
            Object.defineProperty(p20, p21, v14);
          }
          return v14;
        }
        function f6(p23, p24, p25) {
          if (p25 || arguments.length === 2) {
            for (var vLN02 = 0, v17 = p24.length, v18; vLN02 < v17; vLN02++) {
              if (v18 || !(vLN02 in p24)) {
                if (!v18) {
                  v18 = Array.prototype.slice.call(p24, 0, vLN02);
                }
                v18[vLN02] = p24[vLN02];
              }
            }
          }
          return p23.concat(v18 || Array.prototype.slice.call(p24));
        }
        if (typeof SuppressedError === "function") {
          SuppressedError;
        } else {
          (function (p26, p27, p28) {
            var v19 = new Error(p28);
            v19.name = "SuppressedError";
            v19.error = p26;
            v19.suppressed = p27;
            return v19;
          });
        }
        var vLN255 = 255;
        var vLN213 = 213;
        p10.OPERATION = undefined;
        (function (p29) {
          p29[p29.ADD = 128] = "ADD";
          p29[p29.REPLACE = 0] = "REPLACE";
          p29[p29.DELETE = 64] = "DELETE";
          p29[p29.DELETE_AND_ADD = 192] = "DELETE_AND_ADD";
          p29[p29.TOUCH = 1] = "TOUCH";
          p29[p29.CLEAR = 10] = "CLEAR";
        })(p10.OPERATION ||= {});
        var vF4 = function () {
          function f7(p30, p31, p32) {
            this.changed = false;
            this.changes = new Map();
            this.allChanges = new Set();
            this.caches = {};
            this.currentCustomOperation = 0;
            this.ref = p30;
            this.setParent(p31, p32);
          }
          f7.prototype.setParent = function (p33, p34, p35) {
            var vThis = this;
            if (!this.indexes) {
              this.indexes = this.ref instanceof vF14 ? this.ref._definition.indexes : {};
            }
            this.parent = p33;
            this.parentIndex = p35;
            if (!p34) {
              return;
            }
            this.root = p34;
            if (this.ref instanceof vF14) {
              var v20 = this.ref._definition;
              for (var v21 in v20.schema) {
                var v22 = this.ref[v21];
                if (v22 && v22.$changes) {
                  var v23 = v20.indexes[v21];
                  v22.$changes.setParent(this.ref, p34, v23);
                }
              }
            } else if (typeof this.ref === "object") {
              this.ref.forEach(function (p36, p37) {
                if (p36 instanceof vF14) {
                  var v24 = p36.$changes;
                  var v25 = vThis.ref.$changes.indexes[p37];
                  v24.setParent(vThis.ref, vThis.root, v25);
                }
              });
            }
          };
          f7.prototype.operation = function (p38) {
            this.changes.set(--this.currentCustomOperation, p38);
          };
          f7.prototype.change = function (p39, p40 = p10.OPERATION.ADD) {
            var v26 = typeof p39 === "number" ? p39 : this.indexes[p39];
            this.assertValidIndex(v26, p39);
            var v27 = this.changes.get(v26);
            if (!v27 || v27.op === p10.OPERATION.DELETE || v27.op === p10.OPERATION.TOUCH) {
              this.changes.set(v26, {
                op: !v27 ? p40 : v27.op === p10.OPERATION.DELETE ? p10.OPERATION.DELETE_AND_ADD : p40,
                index: v26
              });
            }
            this.allChanges.add(v26);
            this.changed = true;
            this.touchParents();
          };
          f7.prototype.touch = function (p41) {
            var v28 = typeof p41 === "number" ? p41 : this.indexes[p41];
            this.assertValidIndex(v28, p41);
            if (!this.changes.has(v28)) {
              this.changes.set(v28, {
                op: p10.OPERATION.TOUCH,
                index: v28
              });
            }
            this.allChanges.add(v28);
            this.touchParents();
          };
          f7.prototype.touchParents = function () {
            if (this.parent) {
              this.parent.$changes.touch(this.parentIndex);
            }
          };
          f7.prototype.getType = function (p42) {
            if (this.ref._definition) {
              var v29 = this.ref._definition;
              return v29.schema[v29.fieldsByIndex[p42]];
            } else {
              var v29 = this.parent._definition;
              var v30 = v29.schema[v29.fieldsByIndex[this.parentIndex]];
              return Object.values(v30)[0];
            }
          };
          f7.prototype.getChildrenFilter = function () {
            var v31 = this.parent._definition.childFilters;
            return v31 && v31[this.parentIndex];
          };
          f7.prototype.getValue = function (p43) {
            return this.ref.getByIndex(p43);
          };
          f7.prototype.delete = function (p44) {
            var v32 = typeof p44 === "number" ? p44 : this.indexes[p44];
            if (v32 === undefined) {
              console.warn(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index: ${p44} (${v32})`);
              return;
            }
            var v33 = this.getValue(v32);
            this.changes.set(v32, {
              op: p10.OPERATION.DELETE,
              index: v32
            });
            this.allChanges.delete(v32);
            delete this.caches[v32];
            if (v33 && v33.$changes) {
              v33.$changes.parent = undefined;
            }
            this.changed = true;
            this.touchParents();
          };
          f7.prototype.discard = function (p45, p46) {
            var vThis2 = this;
            if (p45 === undefined) {
              p45 = false;
            }
            if (p46 === undefined) {
              p46 = false;
            }
            if (!(this.ref instanceof vF14)) {
              this.changes.forEach(function (p47) {
                if (p47.op === p10.OPERATION.DELETE) {
                  var v34 = vThis2.ref.getIndex(p47.index);
                  delete vThis2.indexes[v34];
                }
              });
            }
            this.changes.clear();
            this.changed = p45;
            if (p46) {
              this.allChanges.clear();
            }
            this.currentCustomOperation = 0;
          };
          f7.prototype.discardAll = function () {
            var vThis3 = this;
            this.changes.forEach(function (p48) {
              var v35 = vThis3.getValue(p48.index);
              if (v35 && v35.$changes) {
                v35.$changes.discardAll();
              }
            });
            this.discard();
          };
          f7.prototype.cache = function (p49, p50) {
            this.caches[p49] = p50;
          };
          f7.prototype.clone = function () {
            return new f7(this.ref, this.parent, this.root);
          };
          f7.prototype.ensureRefId = function () {
            if (this.refId !== undefined) {
              return;
            }
            this.refId = this.root.getNextUniqueId();
          };
          f7.prototype.assertValidIndex = function (p51, p52) {
            if (p51 === undefined) {
              throw new Error(`ChangeTree: missing index for field "${p52}"`);
            }
          };
          return f7;
        }();
        function f8(p53, p54, p55, p56) {
          if (!p53[p54]) {
            p53[p54] = [];
          }
          p53[p54].push(p55);
          if (p56 === null || p56 === undefined) {
            undefined;
          } else {
            p56.forEach(function (p57, p58) {
              return p55(p57, p58);
            });
          }
          return function () {
            return f10(p53[p54], p53[p54].indexOf(p55));
          };
        }
        function f9(p59) {
          var vThis4 = this;
          var v36 = typeof this.$changes.getType() !== "string";
          this.$items.forEach(function (p60, p61) {
            p59.push({
              refId: vThis4.$changes.refId,
              op: p10.OPERATION.DELETE,
              field: p61,
              value: undefined,
              previousValue: p60
            });
            if (v36) {
              vThis4.$changes.root.removeRef(p60.$changes.refId);
            }
          });
        }
        function f10(p62, p63) {
          if (p63 === -1 || p63 >= p62.length) {
            return false;
          }
          var v37 = p62.length - 1;
          for (var vP63 = p63; vP63 < v37; vP63++) {
            p62[vP63] = p62[vP63 + 1];
          }
          p62.length = v37;
          return true;
        }
        function f11(p64, p65) {
          var v38 = p64.toString();
          var v39 = p65.toString();
          if (v38 < v39) {
            return -1;
          } else if (v38 > v39) {
            return 1;
          } else {
            return 0;
          }
        }
        function f12(p66) {
          p66.$proxy = true;
          p66 = new Proxy(p66, {
            get: function (p67, p68) {
              if (typeof p68 !== "symbol" && !isNaN(p68)) {
                return p67.at(p68);
              } else {
                return p67[p68];
              }
            },
            set: function (p69, p70, p71) {
              if (typeof p70 !== "symbol" && !isNaN(p70)) {
                var v40 = Array.from(p69.$items.keys());
                var vParseInt = parseInt(v40[p70] || p70);
                if (p71 === undefined || p71 === null) {
                  p69.deleteAt(vParseInt);
                } else {
                  p69.setAt(vParseInt, p71);
                }
              } else {
                p69[p70] = p71;
              }
              return true;
            },
            deleteProperty: function (p72, p73) {
              if (typeof p73 === "number") {
                p72.deleteAt(p73);
              } else {
                delete p72[p73];
              }
              return true;
            },
            has: function (p74, p75) {
              if (typeof p75 !== "symbol" && !isNaN(Number(p75))) {
                return p74.$items.has(Number(p75));
              }
              return Reflect.has(p74, p75);
            }
          });
          return p66;
        }
        var vF5 = function () {
          function f13() {
            var vA2 = [];
            for (var vLN03 = 0; vLN03 < arguments.length; vLN03++) {
              vA2[vLN03] = arguments[vLN03];
            }
            this.$changes = new vF4(this);
            this.$items = new Map();
            this.$indexes = new Map();
            this.$refId = 0;
            this.push.apply(this, vA2);
          }
          f13.prototype.onAdd = function (p76, p77 = true) {
            return f8(this.$callbacks ||= {}, p10.OPERATION.ADD, p76, p77 ? this.$items : undefined);
          };
          f13.prototype.onRemove = function (p78) {
            return f8(this.$callbacks ||= {}, p10.OPERATION.DELETE, p78);
          };
          f13.prototype.onChange = function (p79) {
            return f8(this.$callbacks ||= {}, p10.OPERATION.REPLACE, p79);
          };
          f13.is = function (p80) {
            return Array.isArray(p80) || p80.array !== undefined;
          };
          Object.defineProperty(f13.prototype, "length", {
            get: function () {
              return this.$items.size;
            },
            set: function (p81) {
              if (p81 === 0) {
                this.clear();
              } else {
                this.splice(p81, this.length - p81);
              }
            },
            enumerable: false,
            configurable: true
          });
          f13.prototype.push = function () {
            var vThis5 = this;
            var vA3 = [];
            for (var vLN04 = 0; vLN04 < arguments.length; vLN04++) {
              vA3[vLN04] = arguments[vLN04];
            }
            var v41;
            vA3.forEach(function (p82) {
              v41 = vThis5.$refId++;
              vThis5.setAt(v41, p82);
            });
            return v41;
          };
          f13.prototype.pop = function () {
            var v42 = Array.from(this.$indexes.values()).pop();
            if (v42 === undefined) {
              return undefined;
            }
            this.$changes.delete(v42);
            this.$indexes.delete(v42);
            var v43 = this.$items.get(v42);
            this.$items.delete(v42);
            return v43;
          };
          f13.prototype.at = function (p83) {
            p83 = Math.trunc(p83) || 0;
            if (p83 < 0) {
              p83 += this.length;
            }
            if (p83 < 0 || p83 >= this.length) {
              return undefined;
            }
            var v44 = Array.from(this.$items.keys())[p83];
            return this.$items.get(v44);
          };
          f13.prototype.setAt = function (p84, p85) {
            if (p85 === undefined || p85 === null) {
              console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");
              return;
            }
            if (this.$items.get(p84) === p85) {
              return;
            }
            if (p85.$changes !== undefined) {
              p85.$changes.setParent(this, this.$changes.root, p84);
            }
            var v45 = this.$changes.indexes[p84]?.op ?? p10.OPERATION.ADD;
            this.$changes.indexes[p84] = p84;
            this.$indexes.set(p84, p84);
            this.$items.set(p84, p85);
            this.$changes.change(p84, v45);
          };
          f13.prototype.deleteAt = function (p86) {
            var v46 = Array.from(this.$items.keys())[p86];
            if (v46 === undefined) {
              return false;
            }
            return this.$deleteAt(v46);
          };
          f13.prototype.$deleteAt = function (p87) {
            this.$changes.delete(p87);
            this.$indexes.delete(p87);
            return this.$items.delete(p87);
          };
          f13.prototype.clear = function (p88) {
            this.$changes.discard(true, true);
            this.$changes.indexes = {};
            this.$indexes.clear();
            if (p88) {
              f9.call(this, p88);
            }
            this.$items.clear();
            this.$changes.operation({
              index: 0,
              op: p10.OPERATION.CLEAR
            });
            this.$changes.touchParents();
          };
          f13.prototype.concat = function () {
            var v47;
            var vA4 = [];
            for (var vLN05 = 0; vLN05 < arguments.length; vLN05++) {
              vA4[vLN05] = arguments[vLN05];
            }
            return new (f13.bind.apply(f13, f6([undefined], (v47 = Array.from(this.$items.values())).concat.apply(v47, vA4), false)))();
          };
          f13.prototype.join = function (p89) {
            return Array.from(this.$items.values()).join(p89);
          };
          f13.prototype.reverse = function () {
            var vThis6 = this;
            var v48 = Array.from(this.$items.keys());
            var v49 = Array.from(this.$items.values()).reverse();
            v49.forEach(function (p90, p91) {
              vThis6.setAt(v48[p91], p90);
            });
            return this;
          };
          f13.prototype.shift = function () {
            var v50 = Array.from(this.$items.keys());
            var v51 = v50.shift();
            if (v51 === undefined) {
              return undefined;
            }
            var v52 = this.$items.get(v51);
            this.$deleteAt(v51);
            return v52;
          };
          f13.prototype.slice = function (p92, p93) {
            var v53 = new f13();
            v53.push.apply(v53, Array.from(this.$items.values()).slice(p92, p93));
            return v53;
          };
          f13.prototype.sort = function (p94) {
            var vThis7 = this;
            if (p94 === undefined) {
              p94 = f11;
            }
            var v54 = Array.from(this.$items.keys());
            var v55 = Array.from(this.$items.values()).sort(p94);
            v55.forEach(function (p95, p96) {
              vThis7.setAt(v54[p96], p95);
            });
            return this;
          };
          f13.prototype.splice = function (p97, p98 = this.length - p97) {
            var vA5 = [];
            for (var vLN2 = 2; vLN2 < arguments.length; vLN2++) {
              vA5[vLN2 - 2] = arguments[vLN2];
            }
            var v56 = Array.from(this.$items.keys());
            var vA6 = [];
            for (var vP97 = p97; vP97 < p97 + p98; vP97++) {
              vA6.push(this.$items.get(v56[vP97]));
              this.$deleteAt(v56[vP97]);
            }
            for (var vP97 = 0; vP97 < vA5.length; vP97++) {
              this.setAt(p97 + vP97, vA5[vP97]);
            }
            return vA6;
          };
          f13.prototype.unshift = function () {
            var vThis8 = this;
            var vA7 = [];
            for (var vLN06 = 0; vLN06 < arguments.length; vLN06++) {
              vA7[vLN06] = arguments[vLN06];
            }
            var v57 = this.length;
            var v58 = vA7.length;
            var v59 = Array.from(this.$items.values());
            vA7.forEach(function (p99, p100) {
              vThis8.setAt(p100, p99);
            });
            v59.forEach(function (p101, p102) {
              vThis8.setAt(v58 + p102, p101);
            });
            return v57 + v58;
          };
          f13.prototype.indexOf = function (p103, p104) {
            return Array.from(this.$items.values()).indexOf(p103, p104);
          };
          f13.prototype.lastIndexOf = function (p105, p106 = this.length - 1) {
            return Array.from(this.$items.values()).lastIndexOf(p105, p106);
          };
          f13.prototype.every = function (p107, p108) {
            return Array.from(this.$items.values()).every(p107, p108);
          };
          f13.prototype.some = function (p109, p110) {
            return Array.from(this.$items.values()).some(p109, p110);
          };
          f13.prototype.forEach = function (p111, p112) {
            Array.from(this.$items.values()).forEach(p111, p112);
          };
          f13.prototype.map = function (p113, p114) {
            return Array.from(this.$items.values()).map(p113, p114);
          };
          f13.prototype.filter = function (p115, p116) {
            return Array.from(this.$items.values()).filter(p115, p116);
          };
          f13.prototype.reduce = function (p117, p118) {
            return Array.prototype.reduce.apply(Array.from(this.$items.values()), arguments);
          };
          f13.prototype.reduceRight = function (p119, p120) {
            return Array.prototype.reduceRight.apply(Array.from(this.$items.values()), arguments);
          };
          f13.prototype.find = function (p121, p122) {
            return Array.from(this.$items.values()).find(p121, p122);
          };
          f13.prototype.findIndex = function (p123, p124) {
            return Array.from(this.$items.values()).findIndex(p123, p124);
          };
          f13.prototype.fill = function (p125, p126, p127) {
            throw new Error("ArraySchema#fill() not implemented");
          };
          f13.prototype.copyWithin = function (p128, p129, p130) {
            throw new Error("ArraySchema#copyWithin() not implemented");
          };
          f13.prototype.toString = function () {
            return this.$items.toString();
          };
          f13.prototype.toLocaleString = function () {
            return this.$items.toLocaleString();
          };
          f13.prototype[Symbol.iterator] = function () {
            return Array.from(this.$items.values())[Symbol.iterator]();
          };
          Object.defineProperty(f13, Symbol.species, {
            get: function () {
              return f13;
            },
            enumerable: false,
            configurable: true
          });
          f13.prototype.entries = function () {
            return this.$items.entries();
          };
          f13.prototype.keys = function () {
            return this.$items.keys();
          };
          f13.prototype.values = function () {
            return this.$items.values();
          };
          f13.prototype.includes = function (p131, p132) {
            return Array.from(this.$items.values()).includes(p131, p132);
          };
          f13.prototype.flatMap = function (p133, p134) {
            throw new Error("ArraySchema#flatMap() is not supported.");
          };
          f13.prototype.flat = function (p135) {
            throw new Error("ArraySchema#flat() is not supported.");
          };
          f13.prototype.findLast = function () {
            var v60 = Array.from(this.$items.values());
            return v60.findLast.apply(v60, arguments);
          };
          f13.prototype.findLastIndex = function () {
            var v61 = Array.from(this.$items.values());
            return v61.findLastIndex.apply(v61, arguments);
          };
          f13.prototype.with = function (p136, p137) {
            var v62 = Array.from(this.$items.values());
            v62[p136] = p137;
            return new (f13.bind.apply(f13, f6([undefined], v62, false)))();
          };
          f13.prototype.toReversed = function () {
            return Array.from(this.$items.values()).reverse();
          };
          f13.prototype.toSorted = function (p138) {
            return Array.from(this.$items.values()).sort(p138);
          };
          f13.prototype.toSpliced = function (p139, p140) {
            var v63 = Array.from(this.$items.values());
            return v63.toSpliced.apply(v63, arguments);
          };
          f13.prototype.setIndex = function (p141, p142) {
            this.$indexes.set(p141, p142);
          };
          f13.prototype.getIndex = function (p143) {
            return this.$indexes.get(p143);
          };
          f13.prototype.getByIndex = function (p144) {
            return this.$items.get(this.$indexes.get(p144));
          };
          f13.prototype.deleteByIndex = function (p145) {
            var v64 = this.$indexes.get(p145);
            this.$items.delete(v64);
            this.$indexes.delete(p145);
          };
          f13.prototype.toArray = function () {
            return Array.from(this.$items.values());
          };
          f13.prototype.toJSON = function () {
            return this.toArray().map(function (p146) {
              if (typeof p146.toJSON === "function") {
                return p146.toJSON();
              } else {
                return p146;
              }
            });
          };
          f13.prototype.clone = function (p147) {
            var v65;
            if (p147) {
              v65 = new (f13.bind.apply(f13, f6([undefined], Array.from(this.$items.values()), false)))();
            } else {
              v65 = new (f13.bind.apply(f13, f6([undefined], this.map(function (p148) {
                if (p148.$changes) {
                  return p148.clone();
                } else {
                  return p148;
                }
              }), false)))();
            }
            return v65;
          };
          return f13;
        }();
        function f14(p149) {
          p149.$proxy = true;
          p149 = new Proxy(p149, {
            get: function (p150, p151) {
              if (typeof p151 !== "symbol" && typeof p150[p151] === "undefined") {
                return p150.get(p151);
              } else {
                return p150[p151];
              }
            },
            set: function (p152, p153, p154) {
              if (typeof p153 !== "symbol" && p153.indexOf("$") === -1 && p153 !== "onAdd" && p153 !== "onRemove" && p153 !== "onChange") {
                p152.set(p153, p154);
              } else {
                p152[p153] = p154;
              }
              return true;
            },
            deleteProperty: function (p155, p156) {
              p155.delete(p156);
              return true;
            }
          });
          return p149;
        }
        var vF6 = function () {
          function f15(p157) {
            var vThis9 = this;
            this.$changes = new vF4(this);
            this.$items = new Map();
            this.$indexes = new Map();
            this.$refId = 0;
            if (p157) {
              if (p157 instanceof Map || p157 instanceof f15) {
                p157.forEach(function (p158, p159) {
                  return vThis9.set(p159, p158);
                });
              } else {
                for (var v66 in p157) {
                  this.set(v66, p157[v66]);
                }
              }
            }
          }
          f15.prototype.onAdd = function (p160, p161 = true) {
            return f8(this.$callbacks ||= {}, p10.OPERATION.ADD, p160, p161 ? this.$items : undefined);
          };
          f15.prototype.onRemove = function (p162) {
            return f8(this.$callbacks ||= {}, p10.OPERATION.DELETE, p162);
          };
          f15.prototype.onChange = function (p163) {
            return f8(this.$callbacks ||= {}, p10.OPERATION.REPLACE, p163);
          };
          f15.is = function (p164) {
            return p164.map !== undefined;
          };
          f15.prototype[Symbol.iterator] = function () {
            return this.$items[Symbol.iterator]();
          };
          Object.defineProperty(f15.prototype, Symbol.toStringTag, {
            get: function () {
              return this.$items[Symbol.toStringTag];
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(f15, Symbol.species, {
            get: function () {
              return f15;
            },
            enumerable: false,
            configurable: true
          });
          f15.prototype.set = function (p165, p166) {
            if (p166 === undefined || p166 === null) {
              throw new Error(`MapSchema#set('${p165}', ${p166}): trying to set ${p166} value on '${p165}'.`);
            }
            p165 = p165.toString();
            var v67 = typeof this.$changes.indexes[p165] !== "undefined";
            var v68 = v67 ? this.$changes.indexes[p165] : this.$refId++;
            var v69 = v67 ? p10.OPERATION.REPLACE : p10.OPERATION.ADD;
            var v70 = p166.$changes !== undefined;
            if (v70) {
              p166.$changes.setParent(this, this.$changes.root, v68);
            }
            if (!v67) {
              this.$changes.indexes[p165] = v68;
              this.$indexes.set(v68, p165);
            } else if (!v70 && this.$items.get(p165) === p166) {
              return;
            } else if (v70 && this.$items.get(p165) !== p166) {
              v69 = p10.OPERATION.ADD;
            }
            this.$items.set(p165, p166);
            this.$changes.change(p165, v69);
            return this;
          };
          f15.prototype.get = function (p167) {
            return this.$items.get(p167);
          };
          f15.prototype.delete = function (p168) {
            this.$changes.delete(p168.toString());
            return this.$items.delete(p168);
          };
          f15.prototype.clear = function (p169) {
            this.$changes.discard(true, true);
            this.$changes.indexes = {};
            this.$indexes.clear();
            if (p169) {
              f9.call(this, p169);
            }
            this.$items.clear();
            this.$changes.operation({
              index: 0,
              op: p10.OPERATION.CLEAR
            });
            this.$changes.touchParents();
          };
          f15.prototype.has = function (p170) {
            return this.$items.has(p170);
          };
          f15.prototype.forEach = function (p171) {
            this.$items.forEach(p171);
          };
          f15.prototype.entries = function () {
            return this.$items.entries();
          };
          f15.prototype.keys = function () {
            return this.$items.keys();
          };
          f15.prototype.values = function () {
            return this.$items.values();
          };
          Object.defineProperty(f15.prototype, "size", {
            get: function () {
              return this.$items.size;
            },
            enumerable: false,
            configurable: true
          });
          f15.prototype.setIndex = function (p172, p173) {
            this.$indexes.set(p172, p173);
          };
          f15.prototype.getIndex = function (p174) {
            return this.$indexes.get(p174);
          };
          f15.prototype.getByIndex = function (p175) {
            return this.$items.get(this.$indexes.get(p175));
          };
          f15.prototype.deleteByIndex = function (p176) {
            var v71 = this.$indexes.get(p176);
            this.$items.delete(v71);
            this.$indexes.delete(p176);
          };
          f15.prototype.toJSON = function () {
            var vO2 = {};
            this.forEach(function (p177, p178) {
              vO2[p178] = typeof p177.toJSON === "function" ? p177.toJSON() : p177;
            });
            return vO2;
          };
          f15.prototype.clone = function (p179) {
            var v72;
            if (p179) {
              v72 = Object.assign(new f15(), this);
            } else {
              v72 = new f15();
              this.forEach(function (p180, p181) {
                if (p180.$changes) {
                  v72.set(p181, p180.clone());
                } else {
                  v72.set(p181, p180);
                }
              });
            }
            return v72;
          };
          return f15;
        }();
        var vO3 = {};
        function f16(p182, p183) {
          vO3[p182] = p183;
        }
        function f17(p184) {
          return vO3[p184];
        }
        var vF7 = function () {
          function f18() {
            this.indexes = {};
            this.fieldsByIndex = {};
            this.deprecated = {};
            this.descriptors = {};
          }
          f18.create = function (p185) {
            var v73 = new f18();
            v73.schema = Object.assign({}, p185 && p185.schema || {});
            v73.indexes = Object.assign({}, p185 && p185.indexes || {});
            v73.fieldsByIndex = Object.assign({}, p185 && p185.fieldsByIndex || {});
            v73.descriptors = Object.assign({}, p185 && p185.descriptors || {});
            v73.deprecated = Object.assign({}, p185 && p185.deprecated || {});
            return v73;
          };
          f18.prototype.addField = function (p186, p187) {
            var v74 = this.getNextFieldIndex();
            this.fieldsByIndex[v74] = p186;
            this.indexes[p186] = v74;
            this.schema[p186] = Array.isArray(p187) ? {
              array: p187[0]
            } : p187;
          };
          f18.prototype.hasField = function (p188) {
            return this.indexes[p188] !== undefined;
          };
          f18.prototype.addFilter = function (p189, p190) {
            if (!this.filters) {
              this.filters = {};
              this.indexesWithFilters = [];
            }
            this.filters[this.indexes[p189]] = p190;
            this.indexesWithFilters.push(this.indexes[p189]);
            return true;
          };
          f18.prototype.addChildrenFilter = function (p191, p192) {
            var v75 = this.indexes[p191];
            var v76 = this.schema[p191];
            if (f17(Object.keys(v76)[0])) {
              if (!this.childFilters) {
                this.childFilters = {};
              }
              this.childFilters[v75] = p192;
              return true;
            } else {
              console.warn(`@filterChildren: field '${p191}' can't have children. Ignoring filter.`);
            }
          };
          f18.prototype.getChildrenFilter = function (p193) {
            return this.childFilters && this.childFilters[this.indexes[p193]];
          };
          f18.prototype.getNextFieldIndex = function () {
            return Object.keys(this.schema || {}).length;
          };
          return f18;
        }();
        function f19(p194) {
          return p194._context && p194._context.useFilters;
        }
        var vF8 = function () {
          function f20() {
            this.types = {};
            this.schemas = new Map();
            this.useFilters = false;
          }
          f20.prototype.has = function (p195) {
            return this.schemas.has(p195);
          };
          f20.prototype.get = function (p196) {
            return this.types[p196];
          };
          f20.prototype.add = function (p197, p198 = this.schemas.size) {
            p197._definition = vF7.create(p197._definition);
            p197._typeid = p198;
            this.types[p198] = p197;
            this.schemas.set(p197, p198);
          };
          f20.create = function (p199 = {}) {
            return function (p200) {
              if (!p199.context) {
                p199.context = new f20();
              }
              return f21(p200, p199);
            };
          };
          return f20;
        }();
        var v77 = new vF8();
        function f21(p201, p202 = {}) {
          return function (p203, p204) {
            var v78 = p202.context || v77;
            var v79 = p203.constructor;
            v79._context = v78;
            if (!p201) {
              throw new Error(`${v79.name}: @type() reference provided for "${p204}" is undefined. Make sure you don't have any circular dependencies.`);
            }
            if (!v78.has(v79)) {
              v78.add(v79);
            }
            var v80 = v79._definition;
            v80.addField(p204, p201);
            if (v80.descriptors[p204]) {
              if (v80.deprecated[p204]) {
                return;
              } else {
                try {
                  throw new Error(`@colyseus/schema: Duplicate '${p204}' definition on '${v79.name}'.
Check @type() annotation`);
                } catch (e2) {
                  var v81 = e2.stack.split("\n")[4].trim();
                  throw new Error(`${e2.message} ${v81}`);
                }
              }
            }
            var v82 = vF5.is(p201);
            var v83 = !v82 && vF6.is(p201);
            if (typeof p201 !== "string" && !vF14.is(p201)) {
              var v84 = Object.values(p201)[0];
              if (typeof v84 !== "string" && !v78.has(v84)) {
                v78.add(v84);
              }
            }
            if (p202.manual) {
              v80.descriptors[p204] = {
                enumerable: true,
                configurable: true,
                writable: true
              };
              return;
            }
            var v85 = `_${p204}`;
            v80.descriptors[v85] = {
              enumerable: false,
              configurable: false,
              writable: true
            };
            v80.descriptors[p204] = {
              get: function () {
                return this[v85];
              },
              set: function (p205) {
                if (p205 === this[v85]) {
                  return;
                }
                if (p205 !== undefined && p205 !== null) {
                  if (v82 && !(p205 instanceof vF5)) {
                    p205 = new (vF5.bind.apply(vF5, f6([undefined], p205, false)))();
                  }
                  if (v83 && !(p205 instanceof vF6)) {
                    p205 = new vF6(p205);
                  }
                  if (p205.$proxy === undefined) {
                    if (v83) {
                      p205 = f14(p205);
                    } else if (v82) {
                      p205 = f12(p205);
                    }
                  }
                  this.$changes.change(p204);
                  if (p205.$changes) {
                    p205.$changes.setParent(this, this.$changes.root, this._definition.indexes[p204]);
                  }
                } else if (this[v85] !== undefined) {
                  this.$changes.delete(p204);
                }
                this[v85] = p205;
              },
              enumerable: true,
              configurable: true
            };
          };
        }
        function f22(p206) {
          return function (p207, p208) {
            var v86 = p207.constructor;
            var v87 = v86._definition;
            if (v87.addFilter(p208, p206)) {
              v86._context.useFilters = true;
            }
          };
        }
        function f23(p209) {
          return function (p210, p211) {
            var v88 = p210.constructor;
            var v89 = v88._definition;
            if (v89.addChildrenFilter(p211, p209)) {
              v88._context.useFilters = true;
            }
          };
        }
        function f24(p212 = true) {
          return function (p213, p214) {
            var v90 = p213.constructor;
            var v91 = v90._definition;
            v91.deprecated[p214] = true;
            if (p212) {
              v91.descriptors[p214] = {
                get: function () {
                  throw new Error(`${p214} is deprecated.`);
                },
                set: function (p215) {},
                enumerable: false,
                configurable: true
              };
            }
          };
        }
        function f25(p216, p217, p218 = {}) {
          if (!p218.context) {
            p218.context = p216._context || p218.context || v77;
          }
          for (var v92 in p217) {
            f21(p217[v92], p218)(p216.prototype, v92);
          }
          return p216;
        }
        function f26(p219) {
          var vLN07 = 0;
          var vLN08 = 0;
          for (var vLN09 = 0, v93 = p219.length; vLN09 < v93; vLN09++) {
            vLN07 = p219.charCodeAt(vLN09);
            if (vLN07 < 128) {
              vLN08 += 1;
            } else if (vLN07 < 2048) {
              vLN08 += 2;
            } else if (vLN07 < 55296 || vLN07 >= 57344) {
              vLN08 += 3;
            } else {
              vLN09++;
              vLN08 += 4;
            }
          }
          return vLN08;
        }
        function f27(p220, p221, p222) {
          var vLN010 = 0;
          for (var vLN011 = 0, v94 = p222.length; vLN011 < v94; vLN011++) {
            vLN010 = p222.charCodeAt(vLN011);
            if (vLN010 < 128) {
              p220[p221++] = vLN010;
            } else if (vLN010 < 2048) {
              p220[p221++] = vLN010 >> 6 | 192;
              p220[p221++] = vLN010 & 63 | 128;
            } else if (vLN010 < 55296 || vLN010 >= 57344) {
              p220[p221++] = vLN010 >> 12 | 224;
              p220[p221++] = vLN010 >> 6 & 63 | 128;
              p220[p221++] = vLN010 & 63 | 128;
            } else {
              vLN011++;
              vLN010 = 65536 + ((vLN010 & 1023) << 10 | p222.charCodeAt(vLN011) & 1023);
              p220[p221++] = vLN010 >> 18 | 240;
              p220[p221++] = vLN010 >> 12 & 63 | 128;
              p220[p221++] = vLN010 >> 6 & 63 | 128;
              p220[p221++] = vLN010 & 63 | 128;
            }
          }
        }
        function f28(p223, p224) {
          p223.push(p224 & 255);
        }
        function f29(p225, p226) {
          p225.push(p226 & 255);
        }
        function f30(p227, p228) {
          p227.push(p228 & 255);
          p227.push(p228 >> 8 & 255);
        }
        function f31(p229, p230) {
          p229.push(p230 & 255);
          p229.push(p230 >> 8 & 255);
        }
        function f32(p231, p232) {
          p231.push(p232 & 255);
          p231.push(p232 >> 8 & 255);
          p231.push(p232 >> 16 & 255);
          p231.push(p232 >> 24 & 255);
        }
        function f33(p233, p234) {
          var v95 = p234 >> 24;
          var v96 = p234 >> 16;
          var v97 = p234 >> 8;
          var vP234 = p234;
          p233.push(vP234 & 255);
          p233.push(v97 & 255);
          p233.push(v96 & 255);
          p233.push(v95 & 255);
        }
        function f34(p235, p236) {
          var v98 = Math.floor(p236 / Math.pow(2, 32));
          var v99 = p236 >>> 0;
          f33(p235, v99);
          f33(p235, v98);
        }
        function f35(p237, p238) {
          var v100 = p238 / Math.pow(2, 32) >> 0;
          var v101 = p238 >>> 0;
          f33(p237, v101);
          f33(p237, v100);
        }
        function f36(p239, p240) {
          f38(p239, p240);
        }
        function f37(p241, p242) {
          f39(p241, p242);
        }
        var v102 = new Int32Array(2);
        var v103 = new Float32Array(v102.buffer);
        var v104 = new Float64Array(v102.buffer);
        function f38(p243, p244) {
          v103[0] = p244;
          f32(p243, v102[0]);
        }
        function f39(p245, p246) {
          v104[0] = p246;
          f32(p245, v102[0]);
          f32(p245, v102[1]);
        }
        function f40(p247, p248) {
          return f29(p247, p248 ? 1 : 0);
        }
        function f41(p249, p250) {
          if (!p250) {
            p250 = "";
          }
          var vF26 = f26(p250);
          var vLN012 = 0;
          if (vF26 < 32) {
            p249.push(vF26 | 160);
            vLN012 = 1;
          } else if (vF26 < 256) {
            p249.push(217);
            f29(p249, vF26);
            vLN012 = 2;
          } else if (vF26 < 65536) {
            p249.push(218);
            f31(p249, vF26);
            vLN012 = 3;
          } else if (vF26 < 4294967296) {
            p249.push(219);
            f33(p249, vF26);
            vLN012 = 5;
          } else {
            throw new Error("String too long");
          }
          f27(p249, p249.length, p250);
          return vLN012 + vF26;
        }
        function f42(p251, p252) {
          if (isNaN(p252)) {
            return f42(p251, 0);
          } else if (!isFinite(p252)) {
            return f42(p251, p252 > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER);
          } else if (p252 !== (p252 | 0)) {
            p251.push(203);
            f39(p251, p252);
            return 9;
          }
          if (p252 >= 0) {
            if (p252 < 128) {
              f29(p251, p252);
              return 1;
            }
            if (p252 < 256) {
              p251.push(204);
              f29(p251, p252);
              return 2;
            }
            if (p252 < 65536) {
              p251.push(205);
              f31(p251, p252);
              return 3;
            }
            if (p252 < 4294967296) {
              p251.push(206);
              f33(p251, p252);
              return 5;
            }
            p251.push(207);
            f35(p251, p252);
            return 9;
          } else {
            if (p252 >= -32) {
              p251.push(p252 + 32 | 224);
              return 1;
            }
            if (p252 >= -128) {
              p251.push(208);
              f28(p251, p252);
              return 2;
            }
            if (p252 >= -32768) {
              p251.push(209);
              f30(p251, p252);
              return 3;
            }
            if (p252 >= -2147483648) {
              p251.push(210);
              f32(p251, p252);
              return 5;
            }
            p251.push(211);
            f34(p251, p252);
            return 9;
          }
        }
        var v105 = Object.freeze({
          "__proto__": null,
          boolean: f40,
          float32: f36,
          float64: f37,
          int16: f30,
          int32: f32,
          int64: f34,
          int8: f28,
          number: f42,
          string: f41,
          uint16: f31,
          uint32: f33,
          uint64: f35,
          uint8: f29,
          utf8Write: f27,
          writeFloat32: f38,
          writeFloat64: f39
        });
        function f43(p253, p254, p255) {
          var vLS = "";
          var vLN013 = 0;
          for (var vP254 = p254, v106 = p254 + p255; vP254 < v106; vP254++) {
            var v107 = p253[vP254];
            if ((v107 & 128) === 0) {
              vLS += String.fromCharCode(v107);
              continue;
            }
            if ((v107 & 224) === 192) {
              vLS += String.fromCharCode((v107 & 31) << 6 | p253[++vP254] & 63);
              continue;
            }
            if ((v107 & 240) === 224) {
              vLS += String.fromCharCode((v107 & 15) << 12 | (p253[++vP254] & 63) << 6 | (p253[++vP254] & 63) << 0);
              continue;
            }
            if ((v107 & 248) === 240) {
              vLN013 = (v107 & 7) << 18 | (p253[++vP254] & 63) << 12 | (p253[++vP254] & 63) << 6 | (p253[++vP254] & 63) << 0;
              if (vLN013 >= 65536) {
                vLN013 -= 65536;
                vLS += String.fromCharCode((vLN013 >>> 10) + 55296, (vLN013 & 1023) + 56320);
              } else {
                vLS += String.fromCharCode(vLN013);
              }
              continue;
            }
            console.error("Invalid byte " + v107.toString(16));
          }
          return vLS;
        }
        function f44(p256, p257) {
          return f45(p256, p257) << 24 >> 24;
        }
        function f45(p258, p259) {
          return p258[p259.offset++];
        }
        function f46(p260, p261) {
          return f47(p260, p261) << 16 >> 16;
        }
        function f47(p262, p263) {
          return p262[p263.offset++] | p262[p263.offset++] << 8;
        }
        function f48(p264, p265) {
          return p264[p265.offset++] | p264[p265.offset++] << 8 | p264[p265.offset++] << 16 | p264[p265.offset++] << 24;
        }
        function f49(p266, p267) {
          return f48(p266, p267) >>> 0;
        }
        function f50(p268, p269) {
          return f54(p268, p269);
        }
        function f51(p270, p271) {
          return f55(p270, p271);
        }
        function f52(p272, p273) {
          var vF49 = f49(p272, p273);
          var v108 = f48(p272, p273) * Math.pow(2, 32);
          return v108 + vF49;
        }
        function f53(p274, p275) {
          var vF492 = f49(p274, p275);
          var v109 = f49(p274, p275) * Math.pow(2, 32);
          return v109 + vF492;
        }
        var v110 = new Int32Array(2);
        var v111 = new Float32Array(v110.buffer);
        var v112 = new Float64Array(v110.buffer);
        function f54(p276, p277) {
          v110[0] = f48(p276, p277);
          return v111[0];
        }
        function f55(p278, p279) {
          v110[0] = f48(p278, p279);
          v110[1] = f48(p278, p279);
          return v112[0];
        }
        function f56(p280, p281) {
          return f45(p280, p281) > 0;
        }
        function f57(p282, p283) {
          var v113 = p282[p283.offset++];
          var v114;
          if (v113 < 192) {
            v114 = v113 & 31;
          } else if (v113 === 217) {
            v114 = f45(p282, p283);
          } else if (v113 === 218) {
            v114 = f47(p282, p283);
          } else if (v113 === 219) {
            v114 = f49(p282, p283);
          }
          var vF43 = f43(p282, p283.offset, v114);
          p283.offset += v114;
          return vF43;
        }
        function f58(p284, p285) {
          var v115 = p284[p285.offset];
          return v115 < 192 && v115 > 160 || v115 === 217 || v115 === 218 || v115 === 219;
        }
        function f59(p286, p287) {
          var v116 = p286[p287.offset++];
          if (v116 < 128) {
            return v116;
          } else if (v116 === 202) {
            return f54(p286, p287);
          } else if (v116 === 203) {
            return f55(p286, p287);
          } else if (v116 === 204) {
            return f45(p286, p287);
          } else if (v116 === 205) {
            return f47(p286, p287);
          } else if (v116 === 206) {
            return f49(p286, p287);
          } else if (v116 === 207) {
            return f53(p286, p287);
          } else if (v116 === 208) {
            return f44(p286, p287);
          } else if (v116 === 209) {
            return f46(p286, p287);
          } else if (v116 === 210) {
            return f48(p286, p287);
          } else if (v116 === 211) {
            return f52(p286, p287);
          } else if (v116 > 223) {
            return (255 - v116 + 1) * -1;
          }
        }
        function f60(p288, p289) {
          var v117 = p288[p289.offset];
          return v117 < 128 || v117 >= 202 && v117 <= 211;
        }
        function f61(p290, p291) {
          return p290[p291.offset] < 160;
        }
        function f62(p292, p293) {
          return p292[p293.offset - 1] === vLN255 && (p292[p293.offset] < 128 || p292[p293.offset] >= 202 && p292[p293.offset] <= 211);
        }
        var v118 = Object.freeze({
          "__proto__": null,
          arrayCheck: f61,
          boolean: f56,
          float32: f50,
          float64: f51,
          int16: f46,
          int32: f48,
          int64: f52,
          int8: f44,
          number: f59,
          numberCheck: f60,
          readFloat32: f54,
          readFloat64: f55,
          string: f57,
          stringCheck: f58,
          switchStructureCheck: f62,
          uint16: f47,
          uint32: f49,
          uint64: f53,
          uint8: f45
        });
        var vF9 = function () {
          function f63(p294) {
            var vThis10 = this;
            this.$changes = new vF4(this);
            this.$items = new Map();
            this.$indexes = new Map();
            this.$refId = 0;
            if (p294) {
              p294.forEach(function (p295) {
                return vThis10.add(p295);
              });
            }
          }
          f63.prototype.onAdd = function (p296, p297 = true) {
            return f8(this.$callbacks ||= [], p10.OPERATION.ADD, p296, p297 ? this.$items : undefined);
          };
          f63.prototype.onRemove = function (p298) {
            return f8(this.$callbacks ||= [], p10.OPERATION.DELETE, p298);
          };
          f63.prototype.onChange = function (p299) {
            return f8(this.$callbacks ||= [], p10.OPERATION.REPLACE, p299);
          };
          f63.is = function (p300) {
            return p300.collection !== undefined;
          };
          f63.prototype.add = function (p301) {
            var v119 = this.$refId++;
            var v120 = p301.$changes !== undefined;
            if (v120) {
              p301.$changes.setParent(this, this.$changes.root, v119);
            }
            this.$changes.indexes[v119] = v119;
            this.$indexes.set(v119, v119);
            this.$items.set(v119, p301);
            this.$changes.change(v119);
            return v119;
          };
          f63.prototype.at = function (p302) {
            var v121 = Array.from(this.$items.keys())[p302];
            return this.$items.get(v121);
          };
          f63.prototype.entries = function () {
            return this.$items.entries();
          };
          f63.prototype.delete = function (p303) {
            var v122 = this.$items.entries();
            var v123;
            var v124;
            while (v124 = v122.next()) {
              if (v124.done) {
                break;
              }
              if (p303 === v124.value[1]) {
                v123 = v124.value[0];
                break;
              }
            }
            if (v123 === undefined) {
              return false;
            }
            this.$changes.delete(v123);
            this.$indexes.delete(v123);
            return this.$items.delete(v123);
          };
          f63.prototype.clear = function (p304) {
            this.$changes.discard(true, true);
            this.$changes.indexes = {};
            this.$indexes.clear();
            if (p304) {
              f9.call(this, p304);
            }
            this.$items.clear();
            this.$changes.operation({
              index: 0,
              op: p10.OPERATION.CLEAR
            });
            this.$changes.touchParents();
          };
          f63.prototype.has = function (p305) {
            return Array.from(this.$items.values()).some(function (p306) {
              return p306 === p305;
            });
          };
          f63.prototype.forEach = function (p307) {
            var vThis11 = this;
            this.$items.forEach(function (p308, p309, p310) {
              return p307(p308, p309, vThis11);
            });
          };
          f63.prototype.values = function () {
            return this.$items.values();
          };
          Object.defineProperty(f63.prototype, "size", {
            get: function () {
              return this.$items.size;
            },
            enumerable: false,
            configurable: true
          });
          f63.prototype.setIndex = function (p311, p312) {
            this.$indexes.set(p311, p312);
          };
          f63.prototype.getIndex = function (p313) {
            return this.$indexes.get(p313);
          };
          f63.prototype.getByIndex = function (p314) {
            return this.$items.get(this.$indexes.get(p314));
          };
          f63.prototype.deleteByIndex = function (p315) {
            var v125 = this.$indexes.get(p315);
            this.$items.delete(v125);
            this.$indexes.delete(p315);
          };
          f63.prototype.toArray = function () {
            return Array.from(this.$items.values());
          };
          f63.prototype.toJSON = function () {
            var vA8 = [];
            this.forEach(function (p316, p317) {
              vA8.push(typeof p316.toJSON === "function" ? p316.toJSON() : p316);
            });
            return vA8;
          };
          f63.prototype.clone = function (p318) {
            var v126;
            if (p318) {
              v126 = Object.assign(new f63(), this);
            } else {
              v126 = new f63();
              this.forEach(function (p319) {
                if (p319.$changes) {
                  v126.add(p319.clone());
                } else {
                  v126.add(p319);
                }
              });
            }
            return v126;
          };
          return f63;
        }();
        var vF10 = function () {
          function f64(p320) {
            var vThis12 = this;
            this.$changes = new vF4(this);
            this.$items = new Map();
            this.$indexes = new Map();
            this.$refId = 0;
            if (p320) {
              p320.forEach(function (p321) {
                return vThis12.add(p321);
              });
            }
          }
          f64.prototype.onAdd = function (p322, p323 = true) {
            return f8(this.$callbacks ||= [], p10.OPERATION.ADD, p322, p323 ? this.$items : undefined);
          };
          f64.prototype.onRemove = function (p324) {
            return f8(this.$callbacks ||= [], p10.OPERATION.DELETE, p324);
          };
          f64.prototype.onChange = function (p325) {
            return f8(this.$callbacks ||= [], p10.OPERATION.REPLACE, p325);
          };
          f64.is = function (p326) {
            return p326.set !== undefined;
          };
          f64.prototype.add = function (p327) {
            if (this.has(p327)) {
              return false;
            }
            var v127 = this.$refId++;
            if (p327.$changes !== undefined) {
              p327.$changes.setParent(this, this.$changes.root, v127);
            }
            var v128 = this.$changes.indexes[v127]?.op ?? p10.OPERATION.ADD;
            this.$changes.indexes[v127] = v127;
            this.$indexes.set(v127, v127);
            this.$items.set(v127, p327);
            this.$changes.change(v127, v128);
            return v127;
          };
          f64.prototype.entries = function () {
            return this.$items.entries();
          };
          f64.prototype.delete = function (p328) {
            var v129 = this.$items.entries();
            var v130;
            var v131;
            while (v131 = v129.next()) {
              if (v131.done) {
                break;
              }
              if (p328 === v131.value[1]) {
                v130 = v131.value[0];
                break;
              }
            }
            if (v130 === undefined) {
              return false;
            }
            this.$changes.delete(v130);
            this.$indexes.delete(v130);
            return this.$items.delete(v130);
          };
          f64.prototype.clear = function (p329) {
            this.$changes.discard(true, true);
            this.$changes.indexes = {};
            this.$indexes.clear();
            if (p329) {
              f9.call(this, p329);
            }
            this.$items.clear();
            this.$changes.operation({
              index: 0,
              op: p10.OPERATION.CLEAR
            });
            this.$changes.touchParents();
          };
          f64.prototype.has = function (p330) {
            var v132 = this.$items.values();
            var v133 = false;
            var v134;
            while (v134 = v132.next()) {
              if (v134.done) {
                break;
              }
              if (p330 === v134.value) {
                v133 = true;
                break;
              }
            }
            return v133;
          };
          f64.prototype.forEach = function (p331) {
            var vThis13 = this;
            this.$items.forEach(function (p332, p333, p334) {
              return p331(p332, p333, vThis13);
            });
          };
          f64.prototype.values = function () {
            return this.$items.values();
          };
          Object.defineProperty(f64.prototype, "size", {
            get: function () {
              return this.$items.size;
            },
            enumerable: false,
            configurable: true
          });
          f64.prototype.setIndex = function (p335, p336) {
            this.$indexes.set(p335, p336);
          };
          f64.prototype.getIndex = function (p337) {
            return this.$indexes.get(p337);
          };
          f64.prototype.getByIndex = function (p338) {
            return this.$items.get(this.$indexes.get(p338));
          };
          f64.prototype.deleteByIndex = function (p339) {
            var v135 = this.$indexes.get(p339);
            this.$items.delete(v135);
            this.$indexes.delete(p339);
          };
          f64.prototype.toArray = function () {
            return Array.from(this.$items.values());
          };
          f64.prototype.toJSON = function () {
            var vA9 = [];
            this.forEach(function (p340, p341) {
              vA9.push(typeof p340.toJSON === "function" ? p340.toJSON() : p340);
            });
            return vA9;
          };
          f64.prototype.clone = function (p342) {
            var v136;
            if (p342) {
              v136 = Object.assign(new f64(), this);
            } else {
              v136 = new f64();
              this.forEach(function (p343) {
                if (p343.$changes) {
                  v136.add(p343.clone());
                } else {
                  v136.add(p343);
                }
              });
            }
            return v136;
          };
          return f64;
        }();
        var vF11 = function () {
          function f65() {
            this.refIds = new WeakSet();
            this.containerIndexes = new WeakMap();
          }
          f65.prototype.addRefId = function (p344) {
            if (!this.refIds.has(p344)) {
              this.refIds.add(p344);
              this.containerIndexes.set(p344, new Set());
            }
          };
          f65.get = function (p345) {
            if (p345.$filterState === undefined) {
              p345.$filterState = new f65();
            }
            return p345.$filterState;
          };
          return f65;
        }();
        var vF12 = function () {
          function f66() {
            this.refs = new Map();
            this.refCounts = {};
            this.deletedRefs = new Set();
            this.nextUniqueId = 0;
          }
          f66.prototype.getNextUniqueId = function () {
            return this.nextUniqueId++;
          };
          f66.prototype.addRef = function (p346, p347, p348 = true) {
            this.refs.set(p346, p347);
            if (p348) {
              this.refCounts[p346] = (this.refCounts[p346] || 0) + 1;
            }
          };
          f66.prototype.removeRef = function (p349) {
            var v137 = this.refCounts[p349];
            if (v137 === undefined) {
              console.warn(`trying to remove reference ${p349} that doesn't exist`);
              return;
            }
            if (v137 === 0) {
              console.warn(`trying to remove reference ${p349} with 0 refCount`);
              return;
            }
            this.refCounts[p349] = v137 - 1;
            this.deletedRefs.add(p349);
          };
          f66.prototype.clearRefs = function () {
            this.refs.clear();
            this.deletedRefs.clear();
            this.refCounts = {};
          };
          f66.prototype.garbageCollectDeletedRefs = function () {
            var vThis14 = this;
            this.deletedRefs.forEach(function (p350) {
              if (vThis14.refCounts[p350] > 0) {
                return;
              }
              var v138 = vThis14.refs.get(p350);
              if (v138 instanceof vF14) {
                for (var v139 in v138._definition.schema) {
                  if (typeof v138._definition.schema[v139] !== "string" && v138[v139] && v138[v139].$changes) {
                    vThis14.removeRef(v138[v139].$changes.refId);
                  }
                }
              } else {
                var v140 = v138.$changes.parent._definition;
                var v141 = v140.schema[v140.fieldsByIndex[v138.$changes.parentIndex]];
                if (typeof Object.values(v141)[0] === "function") {
                  Array.from(v138.values()).forEach(function (p351) {
                    return vThis14.removeRef(p351.$changes.refId);
                  });
                }
              }
              vThis14.refs.delete(p350);
              delete vThis14.refCounts[p350];
            });
            this.deletedRefs.clear();
          };
          return f66;
        }();
        var vF13 = function (p352) {
          f3(f67, p352);
          function f67() {
            return p352 !== null && p352.apply(this, arguments) || this;
          }
          return f67;
        }(Error);
        function f68(p353, p354, p355, p356) {
          var v142;
          var v143 = false;
          switch (p354) {
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
              v142 = "number";
              if (isNaN(p353)) {
                console.log(`trying to encode "NaN" in ${p355.constructor.name}#${p356}`);
              }
              break;
            case "string":
              v142 = "string";
              v143 = true;
              break;
            case "boolean":
              return;
          }
          if (typeof p353 !== v142 && (!v143 || v143 && p353 !== null)) {
            var v144 = `'${JSON.stringify(p353)}'${p353 && p353.constructor && ` (${p353.constructor.name})` || ""}`;
            throw new vF13(`a '${v142}' was expected, but ${v144} was provided in ${p355.constructor.name}#${p356}`);
          }
        }
        function f69(p357, p358, p359, p360) {
          if (!(p357 instanceof p358)) {
            throw new vF13(`a '${p358.name}' was expected, but '${p357.constructor.name}' was provided in ${p359.constructor.name}#${p360}`);
          }
        }
        function f70(p361, p362, p363, p364, p365) {
          f68(p363, p361, p364, p365);
          var v145 = v105[p361];
          if (v145) {
            v145(p362, p363);
          } else {
            throw new vF13(`a '${p361}' was expected, but ${p363} was provided in ${p364.constructor.name}#${p365}`);
          }
        }
        function f71(p366, p367, p368) {
          return v118[p366](p367, p368);
        }
        var vF14 = function () {
          function f72() {
            var vA10 = [];
            for (var vLN014 = 0; vLN014 < arguments.length; vLN014++) {
              vA10[vLN014] = arguments[vLN014];
            }
            Object.defineProperties(this, {
              $changes: {
                value: new vF4(this, undefined, new vF12()),
                enumerable: false,
                writable: true
              },
              $callbacks: {
                value: undefined,
                enumerable: false,
                writable: true
              }
            });
            var v146 = this._definition.descriptors;
            if (v146) {
              Object.defineProperties(this, v146);
            }
            if (vA10[0]) {
              this.assign(vA10[0]);
            }
          }
          f72.onError = function (p369) {
            console.error(p369);
          };
          f72.is = function (p370) {
            return p370._definition && p370._definition.schema !== undefined;
          };
          f72.prototype.onChange = function (p371) {
            return f8(this.$callbacks ||= {}, p10.OPERATION.REPLACE, p371);
          };
          f72.prototype.onRemove = function (p372) {
            return f8(this.$callbacks ||= {}, p10.OPERATION.DELETE, p372);
          };
          f72.prototype.assign = function (p373) {
            Object.assign(this, p373);
            return this;
          };
          Object.defineProperty(f72.prototype, "_definition", {
            get: function () {
              return this.constructor._definition;
            },
            enumerable: false,
            configurable: true
          });
          f72.prototype.setDirty = function (p374, p375) {
            this.$changes.change(p374, p375);
          };
          f72.prototype.listen = function (p376, p377, p378) {
            var vThis15 = this;
            if (p378 === undefined) {
              p378 = true;
            }
            if (!this.$callbacks) {
              this.$callbacks = {};
            }
            if (!this.$callbacks[p376]) {
              this.$callbacks[p376] = [];
            }
            this.$callbacks[p376].push(p377);
            if (p378 && this[p376] !== undefined) {
              p377(this[p376], undefined);
            }
            return function () {
              return f10(vThis15.$callbacks[p376], vThis15.$callbacks[p376].indexOf(p377));
            };
          };
          f72.prototype.decode = function (p379, p380 = {
            offset: 0
          }, p381 = this) {
            var vA11 = [];
            var v147 = this.$changes.root;
            var v148 = p379.length;
            var vLN015 = 0;
            v147.refs.set(vLN015, this);
            while (p380.offset < v148) {
              var v149 = p379[p380.offset++];
              if (v149 == vLN255) {
                vLN015 = f59(p379, p380);
                var v150 = v147.refs.get(vLN015);
                if (!v150) {
                  throw new Error(`"refId" not found: ${vLN015}`);
                }
                p381 = v150;
                continue;
              }
              var v151 = p381.$changes;
              var v152 = p381._definition !== undefined;
              var v153 = v152 ? v149 >> 6 << 6 : v149;
              if (v153 === p10.OPERATION.CLEAR) {
                p381.clear(vA11);
                continue;
              }
              var v154 = v152 ? v149 % (v153 || 255) : f59(p379, p380);
              var v155 = v152 ? p381._definition.fieldsByIndex[v154] : "";
              var v156 = v151.getType(v154);
              var vUndefined = undefined;
              var vUndefined2 = undefined;
              var vUndefined3 = undefined;
              if (!v152) {
                vUndefined2 = p381.getByIndex(v154);
                if ((v153 & p10.OPERATION.ADD) === p10.OPERATION.ADD) {
                  vUndefined3 = p381 instanceof vF6 ? f57(p379, p380) : v154;
                  p381.setIndex(v154, vUndefined3);
                } else {
                  vUndefined3 = p381.getIndex(v154);
                }
              } else {
                vUndefined2 = p381[`_${v155}`];
              }
              if ((v153 & p10.OPERATION.DELETE) === p10.OPERATION.DELETE) {
                if (v153 !== p10.OPERATION.DELETE_AND_ADD) {
                  p381.deleteByIndex(v154);
                }
                if (vUndefined2 && vUndefined2.$changes) {
                  v147.removeRef(vUndefined2.$changes.refId);
                }
                vUndefined = null;
              }
              if (v155 === undefined) {
                console.warn("@colyseus/schema: definition mismatch");
                var vO4 = {
                  offset: p380.offset
                };
                while (p380.offset < v148) {
                  if (f62(p379, p380)) {
                    vO4.offset = p380.offset + 1;
                    if (v147.refs.has(f59(p379, vO4))) {
                      break;
                    }
                  }
                  p380.offset++;
                }
                continue;
              } else if (v153 === p10.OPERATION.DELETE) ;else if (f72.is(v156)) {
                var vF59 = f59(p379, p380);
                vUndefined = v147.refs.get(vF59);
                if (v153 !== p10.OPERATION.REPLACE) {
                  var v157 = this.getSchemaType(p379, p380, v156);
                  if (!vUndefined) {
                    vUndefined = this.createTypeInstance(v157);
                    vUndefined.$changes.refId = vF59;
                    if (vUndefined2) {
                      vUndefined.$callbacks = vUndefined2.$callbacks;
                      if (vUndefined2.$changes.refId && vF59 !== vUndefined2.$changes.refId) {
                        v147.removeRef(vUndefined2.$changes.refId);
                      }
                    }
                  }
                  v147.addRef(vF59, vUndefined, vUndefined !== vUndefined2);
                }
              } else if (typeof v156 === "string") {
                vUndefined = f71(v156, p379, p380);
              } else {
                var vF17 = f17(Object.keys(v156)[0]);
                var vF592 = f59(p379, p380);
                var v158 = v147.refs.has(vF592) ? vUndefined2 || v147.refs.get(vF592) : new vF17.constructor();
                vUndefined = v158.clone(true);
                vUndefined.$changes.refId = vF592;
                if (vUndefined2) {
                  vUndefined.$callbacks = vUndefined2.$callbacks;
                  if (vUndefined2.$changes.refId && vF592 !== vUndefined2.$changes.refId) {
                    v147.removeRef(vUndefined2.$changes.refId);
                    var v159 = vUndefined2.entries();
                    var vUndefined4 = undefined;
                    while ((vUndefined4 = v159.next()) && !vUndefined4.done) {
                      var v160 = vUndefined4.value;
                      var v161 = v160[0];
                      var v162 = v160[1];
                      vA11.push({
                        refId: vF592,
                        op: p10.OPERATION.DELETE,
                        field: v161,
                        value: undefined,
                        previousValue: v162
                      });
                    }
                  }
                }
                v147.addRef(vF592, vUndefined, v158 !== vUndefined2);
              }
              if (vUndefined !== null && vUndefined !== undefined) {
                if (vUndefined.$changes) {
                  vUndefined.$changes.setParent(v151.ref, v151.root, v154);
                }
                if (p381 instanceof f72) {
                  p381[v155] = vUndefined;
                } else if (p381 instanceof vF6) {
                  var v161 = vUndefined3;
                  p381.$items.set(v161, vUndefined);
                  p381.$changes.allChanges.add(v154);
                } else if (p381 instanceof vF5) {
                  p381.setAt(v154, vUndefined);
                } else if (p381 instanceof vF9) {
                  var v163 = p381.add(vUndefined);
                  p381.setIndex(v154, v163);
                } else if (p381 instanceof vF10) {
                  var v163 = p381.add(vUndefined);
                  if (v163 !== false) {
                    p381.setIndex(v154, v163);
                  }
                }
              }
              if (vUndefined2 !== vUndefined) {
                vA11.push({
                  refId: vLN015,
                  op: v153,
                  field: v155,
                  dynamicIndex: vUndefined3,
                  value: vUndefined,
                  previousValue: vUndefined2
                });
              }
            }
            this._triggerChanges(vA11);
            v147.garbageCollectDeletedRefs();
            return vA11;
          };
          f72.prototype.encode = function (p382 = false, p383 = [], p384 = false) {
            var v164 = this.$changes;
            var v165 = new WeakSet();
            var vA12 = [v164];
            var vLN1 = 1;
            for (var vLN016 = 0; vLN016 < vLN1; vLN016++) {
              var v166 = vA12[vLN016];
              var v167 = v166.ref;
              var v168 = v167 instanceof f72;
              v166.ensureRefId();
              v165.add(v166);
              if (v166 !== v164 && (v166.changed || p382)) {
                f29(p383, vLN255);
                f42(p383, v166.refId);
              }
              var v169 = p382 ? Array.from(v166.allChanges) : Array.from(v166.changes.values());
              for (var vLN017 = 0, v170 = v169.length; vLN017 < v170; vLN017++) {
                var v171 = p382 ? {
                  op: p10.OPERATION.ADD,
                  index: v169[vLN017]
                } : v169[vLN017];
                var v172 = v171.index;
                var v173 = v168 ? v167._definition.fieldsByIndex && v167._definition.fieldsByIndex[v172] : v172;
                var v174 = p383.length;
                if (v171.op !== p10.OPERATION.TOUCH) {
                  if (v168) {
                    f29(p383, v172 | v171.op);
                  } else {
                    f29(p383, v171.op);
                    if (v171.op === p10.OPERATION.CLEAR) {
                      continue;
                    }
                    f42(p383, v172);
                  }
                }
                if (!v168 && (v171.op & p10.OPERATION.ADD) == p10.OPERATION.ADD) {
                  if (v167 instanceof vF6) {
                    var v175 = v166.ref.$indexes.get(v172);
                    f41(p383, v175);
                  }
                }
                if (v171.op === p10.OPERATION.DELETE) {
                  continue;
                }
                var v176 = v166.getType(v172);
                var v177 = v166.getValue(v172);
                if (v177 && v177.$changes && !v165.has(v177.$changes)) {
                  vA12.push(v177.$changes);
                  v177.$changes.ensureRefId();
                  vLN1++;
                }
                if (v171.op === p10.OPERATION.TOUCH) {
                  continue;
                }
                if (f72.is(v176)) {
                  f69(v177, v176, v167, v173);
                  f42(p383, v177.$changes.refId);
                  if ((v171.op & p10.OPERATION.ADD) === p10.OPERATION.ADD) {
                    this.tryEncodeTypeId(p383, v176, v177.constructor);
                  }
                } else if (typeof v176 === "string") {
                  f70(v176, p383, v177, v167, v173);
                } else {
                  var vF172 = f17(Object.keys(v176)[0]);
                  f69(v167[`_${v173}`], vF172.constructor, v167, v173);
                  f42(p383, v177.$changes.refId);
                }
                if (p384) {
                  v166.cache(v172, p383.slice(v174));
                }
              }
              if (!p382 && !p384) {
                v166.discard();
              }
            }
            return p383;
          };
          f72.prototype.encodeAll = function (p385) {
            return this.encode(true, [], p385);
          };
          f72.prototype.applyFilters = function (p386, p387) {
            if (p387 === undefined) {
              p387 = false;
            }
            var vThis16 = this;
            var v178 = new Set();
            var v179 = vF11.get(p386);
            var vA13 = [this.$changes];
            var vLN12 = 1;
            var vA14 = [];
            function f73(p388) {
              var v180 = vA13[p388];
              if (v178.has(v180.refId)) {
                return "continue";
              }
              var v181 = v180.ref;
              var v182 = v181 instanceof f72;
              f29(vA14, vLN255);
              f42(vA14, v180.refId);
              var v183 = v179.refIds.has(v180);
              var v184 = p387 || !v183;
              v179.addRefId(v180);
              var v185 = v179.containerIndexes.get(v180);
              var v186 = v184 ? Array.from(v180.allChanges) : Array.from(v180.changes.values());
              if (!p387 && v182 && v181._definition.indexesWithFilters) {
                var v187 = v181._definition.indexesWithFilters;
                v187.forEach(function (p389) {
                  if (!v185.has(p389) && v180.allChanges.has(p389)) {
                    if (v184) {
                      v186.push(p389);
                    } else {
                      v186.push({
                        op: p10.OPERATION.ADD,
                        index: p389
                      });
                    }
                  }
                });
              }
              for (var vLN018 = 0, v188 = v186.length; vLN018 < v188; vLN018++) {
                var v189 = v184 ? {
                  op: p10.OPERATION.ADD,
                  index: v186[vLN018]
                } : v186[vLN018];
                if (v189.op === p10.OPERATION.CLEAR) {
                  f29(vA14, v189.op);
                  continue;
                }
                var v190 = v189.index;
                if (v189.op === p10.OPERATION.DELETE) {
                  if (v182) {
                    f29(vA14, v189.op | v190);
                  } else {
                    f29(vA14, v189.op);
                    f42(vA14, v190);
                  }
                  continue;
                }
                var v191 = v180.getValue(v190);
                var v192 = v180.getType(v190);
                if (v182) {
                  var v193 = v181._definition.filters && v181._definition.filters[v190];
                  if (v193 && !v193.call(v181, p386, v191, vThis16)) {
                    if (v191 && v191.$changes) {
                      v178.add(v191.$changes.refId);
                    }
                    continue;
                  }
                } else {
                  var v194 = v180.parent;
                  var v193 = v180.getChildrenFilter();
                  if (v193 && !v193.call(v194, p386, v181.$indexes.get(v190), v191, vThis16)) {
                    if (v191 && v191.$changes) {
                      v178.add(v191.$changes.refId);
                    }
                    continue;
                  }
                }
                if (v191.$changes) {
                  vA13.push(v191.$changes);
                  vLN12++;
                }
                if (v189.op !== p10.OPERATION.TOUCH) {
                  if (v189.op === p10.OPERATION.ADD || v182) {
                    vA14.push.apply(vA14, v180.caches[v190] ?? []);
                    v185.add(v190);
                  } else if (v185.has(v190)) {
                    vA14.push.apply(vA14, v180.caches[v190] ?? []);
                  } else {
                    v185.add(v190);
                    f29(vA14, p10.OPERATION.ADD);
                    f42(vA14, v190);
                    if (v181 instanceof vF6) {
                      var v195 = v180.ref.$indexes.get(v190);
                      f41(vA14, v195);
                    }
                    if (v191.$changes) {
                      f42(vA14, v191.$changes.refId);
                    } else {
                      v105[v192](vA14, v191);
                    }
                  }
                } else if (v191.$changes && !v182) {
                  f29(vA14, p10.OPERATION.ADD);
                  f42(vA14, v190);
                  if (v181 instanceof vF6) {
                    var v195 = v180.ref.$indexes.get(v190);
                    f41(vA14, v195);
                  }
                  f42(vA14, v191.$changes.refId);
                }
              }
            }
            for (var vLN019 = 0; vLN019 < vLN12; vLN019++) {
              f73(vLN019);
            }
            return vA14;
          };
          f72.prototype.clone = function () {
            var v196 = new this.constructor();
            var v197 = this._definition.schema;
            for (var v198 in v197) {
              if (typeof this[v198] === "object" && typeof this[v198]?.clone === "function") {
                v196[v198] = this[v198].clone();
              } else {
                v196[v198] = this[v198];
              }
            }
            return v196;
          };
          f72.prototype.toJSON = function () {
            var v199 = this._definition.schema;
            var v200 = this._definition.deprecated;
            var vO5 = {};
            for (var v201 in v199) {
              if (!v200[v201] && this[v201] !== null && typeof this[v201] !== "undefined") {
                vO5[v201] = typeof this[v201].toJSON === "function" ? this[v201].toJSON() : this[`_${v201}`];
              }
            }
            return vO5;
          };
          f72.prototype.discardAllChanges = function () {
            this.$changes.discardAll();
          };
          f72.prototype.getByIndex = function (p390) {
            return this[this._definition.fieldsByIndex[p390]];
          };
          f72.prototype.deleteByIndex = function (p391) {
            this[this._definition.fieldsByIndex[p391]] = undefined;
          };
          f72.prototype.tryEncodeTypeId = function (p392, p393, p394) {
            if (p393._typeid !== p394._typeid) {
              f29(p392, vLN213);
              f42(p392, p394._typeid);
            }
          };
          f72.prototype.getSchemaType = function (p395, p396, p397) {
            var v202;
            if (p395[p396.offset] === vLN213) {
              p396.offset++;
              v202 = this.constructor._context.get(f59(p395, p396));
            }
            return v202 || p397;
          };
          f72.prototype.createTypeInstance = function (p398) {
            var v203 = new p398();
            v203.$changes.root = this.$changes.root;
            return v203;
          };
          f72.prototype._triggerChanges = function (p399) {
            var v204;
            var v205;
            var v206;
            var v207;
            var v208;
            var v209;
            var v210;
            var v211;
            var v212 = new Set();
            var v213 = this.$changes.root.refs;
            function f74(p400) {
              var v214 = p399[p400];
              var v215 = v214.refId;
              var v216 = v213.get(v215);
              var v217 = v216.$callbacks;
              if ((v214.op & p10.OPERATION.DELETE) === p10.OPERATION.DELETE && v214.previousValue instanceof f72) {
                if ((v204 = v214.previousValue.$callbacks?.[p10.OPERATION.DELETE]) === null || v204 === undefined) {
                  undefined;
                } else {
                  v204.forEach(function (p401) {
                    return p401();
                  });
                }
              }
              if (!v217) {
                return "continue";
              }
              if (v216 instanceof f72) {
                if (!v212.has(v215)) {
                  try {
                    if ((v205 = v217?.[p10.OPERATION.REPLACE]) === null || v205 === undefined) {
                      undefined;
                    } else {
                      v205.forEach(function (p402) {
                        return p402();
                      });
                    }
                  } catch (e3) {
                    f72.onError(e3);
                  }
                }
                try {
                  if (v217.hasOwnProperty(v214.field)) {
                    if ((v206 = v217[v214.field]) === null || v206 === undefined) {
                      undefined;
                    } else {
                      v206.forEach(function (p403) {
                        return p403(v214.value, v214.previousValue);
                      });
                    }
                  }
                } catch (e4) {
                  f72.onError(e4);
                }
              } else {
                if (v214.op === p10.OPERATION.ADD && v214.previousValue === undefined) {
                  if ((v207 = v217[p10.OPERATION.ADD]) === null || v207 === undefined) {
                    undefined;
                  } else {
                    v207.forEach(function (p404) {
                      return p404(v214.value, v214.dynamicIndex ?? v214.field);
                    });
                  }
                } else if (v214.op === p10.OPERATION.DELETE) {
                  if (v214.previousValue !== undefined) {
                    if ((v208 = v217[p10.OPERATION.DELETE]) === null || v208 === undefined) {
                      undefined;
                    } else {
                      v208.forEach(function (p405) {
                        return p405(v214.previousValue, v214.dynamicIndex ?? v214.field);
                      });
                    }
                  }
                } else if (v214.op === p10.OPERATION.DELETE_AND_ADD) {
                  if (v214.previousValue !== undefined) {
                    if ((v209 = v217[p10.OPERATION.DELETE]) === null || v209 === undefined) {
                      undefined;
                    } else {
                      v209.forEach(function (p406) {
                        return p406(v214.previousValue, v214.dynamicIndex ?? v214.field);
                      });
                    }
                  }
                  if ((v210 = v217[p10.OPERATION.ADD]) === null || v210 === undefined) {
                    undefined;
                  } else {
                    v210.forEach(function (p407) {
                      return p407(v214.value, v214.dynamicIndex ?? v214.field);
                    });
                  }
                }
                if (v214.value !== v214.previousValue) {
                  if ((v211 = v217[p10.OPERATION.REPLACE]) === null || v211 === undefined) {
                    undefined;
                  } else {
                    v211.forEach(function (p408) {
                      return p408(v214.value, v214.dynamicIndex ?? v214.field);
                    });
                  }
                }
              }
              v212.add(v215);
            }
            for (var vLN020 = 0; vLN020 < p399.length; vLN020++) {
              f74(vLN020);
            }
          };
          f72._definition = vF7.create();
          return f72;
        }();
        function f75(p409) {
          var vA15 = [p409.$changes];
          var vLN13 = 1;
          var vO6 = {};
          var vVO6 = vO6;
          function f76(p410) {
            var v218 = vA15[p410];
            v218.changes.forEach(function (p411) {
              var v219 = v218.ref;
              var v220 = p411.index;
              var v221 = v219._definition ? v219._definition.fieldsByIndex[v220] : v219.$indexes.get(v220);
              vVO6[v221] = v218.getValue(v220);
            });
          }
          for (var vLN021 = 0; vLN021 < vLN13; vLN021++) {
            f76(vLN021);
          }
          return vO6;
        }
        var vO7 = {
          context: new vF8()
        };
        var vF15 = function (p412) {
          f3(f77, p412);
          function f77() {
            return p412 !== null && p412.apply(this, arguments) || this;
          }
          f5([f21("string", vO7)], f77.prototype, "name", undefined);
          f5([f21("string", vO7)], f77.prototype, "type", undefined);
          f5([f21("number", vO7)], f77.prototype, "referencedType", undefined);
          return f77;
        }(vF14);
        var vF16 = function (p413) {
          f3(f78, p413);
          function f78() {
            var v222 = p413 !== null && p413.apply(this, arguments) || this;
            v222.fields = new vF5();
            return v222;
          }
          f5([f21("number", vO7)], f78.prototype, "id", undefined);
          f5([f21([vF15], vO7)], f78.prototype, "fields", undefined);
          return f78;
        }(vF14);
        var vF18 = function (p414) {
          f3(f79, p414);
          function f79() {
            var v223 = p414 !== null && p414.apply(this, arguments) || this;
            v223.types = new vF5();
            return v223;
          }
          f79.encode = function (p415) {
            var v224 = p415.constructor;
            var v225 = new f79();
            v225.rootType = v224._typeid;
            function f80(p416, p417) {
              for (var v226 in p417) {
                var v227 = new vF15();
                v227.name = v226;
                var vUndefined5 = undefined;
                if (typeof p417[v226] === "string") {
                  vUndefined5 = p417[v226];
                } else {
                  var v228 = p417[v226];
                  var vUndefined6 = undefined;
                  if (vF14.is(v228)) {
                    vUndefined5 = "ref";
                    vUndefined6 = p417[v226];
                  } else {
                    vUndefined5 = Object.keys(v228)[0];
                    if (typeof v228[vUndefined5] === "string") {
                      vUndefined5 += ":" + v228[vUndefined5];
                    } else {
                      vUndefined6 = v228[vUndefined5];
                    }
                  }
                  v227.referencedType = vUndefined6 ? vUndefined6._typeid : -1;
                }
                v227.type = vUndefined5;
                p416.fields.push(v227);
              }
              v225.types.push(p416);
            }
            var v229 = v224._context?.types;
            for (var v230 in v229) {
              var v231 = new vF16();
              v231.id = Number(v230);
              f80(v231, v229[v230]._definition.schema);
            }
            return v225.encodeAll();
          };
          f79.decode = function (p418, p419) {
            var v232 = new vF8();
            var v233 = new f79();
            v233.decode(p418, p419);
            var v234 = v233.types.reduce(function (p420, p421) {
              var vF19 = function (p422) {
                f3(f81, p422);
                function f81() {
                  return p422 !== null && p422.apply(this, arguments) || this;
                }
                return f81;
              }(vF14);
              var v235 = p421.id;
              p420[v235] = vF19;
              v232.add(vF19, v235);
              return p420;
            }, {});
            v233.types.forEach(function (p423) {
              var v236 = v234[p423.id];
              p423.fields.forEach(function (p424) {
                var v237;
                if (p424.referencedType !== undefined) {
                  var v238 = p424.type;
                  var v239 = v234[p424.referencedType];
                  if (!v239) {
                    var v240 = p424.type.split(":");
                    v238 = v240[0];
                    v239 = v240[1];
                  }
                  if (v238 === "ref") {
                    f21(v239, {
                      context: v232
                    })(v236.prototype, p424.name);
                  } else {
                    f21((v237 = {}, v237[v238] = v239, v237), {
                      context: v232
                    })(v236.prototype, p424.name);
                  }
                } else {
                  f21(p424.type, {
                    context: v232
                  })(v236.prototype, p424.name);
                }
              });
            });
            var v241 = v234[v233.rootType];
            var v242 = new v241();
            for (var v243 in v241._definition.schema) {
              var v244 = v241._definition.schema[v243];
              if (typeof v244 !== "string") {
                v242[v243] = typeof v244 === "function" ? new v244() : new (f17(Object.keys(v244)[0]).constructor)();
              }
            }
            return v242;
          };
          f5([f21([vF16], vO7)], f79.prototype, "types", undefined);
          f5([f21("number", vO7)], f79.prototype, "rootType", undefined);
          return f79;
        }(vF14);
        f16("map", {
          constructor: vF6
        });
        f16("array", {
          constructor: vF5
        });
        f16("set", {
          constructor: vF10
        });
        f16("collection", {
          constructor: vF9
        });
        p10.ArraySchema = vF5;
        p10.CollectionSchema = vF9;
        p10.Context = vF8;
        p10.MapSchema = vF6;
        p10.Reflection = vF18;
        p10.ReflectionField = vF15;
        p10.ReflectionType = vF16;
        p10.Schema = vF14;
        p10.SchemaDefinition = vF7;
        p10.SetSchema = vF10;
        p10.decode = v118;
        p10.defineTypes = f25;
        p10.deprecated = f24;
        p10.dumpChanges = f75;
        p10.encode = v105;
        p10.filter = f22;
        p10.filterChildren = f23;
        p10.hasFilter = f19;
        p10.registerType = f16;
        p10.type = f21;
      });
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/3rd_party/discord.js": (p425, p426) => {
      'use strict';

      Object.defineProperty(p426, "__esModule", {
        value: true
      });
      p426.discordURLBuilder = undefined;
      function f82(p427) {
        const v245 = window?.location?.hostname || "localhost";
        const v246 = p427.hostname.split(".");
        const v247 = !p427.hostname.includes("trycloudflare.com") && !p427.hostname.includes("discordsays.com") && v246.length > 2 ? "/" + v246[0] : "";
        if (p427.pathname.startsWith("/.proxy")) {
          return p427.protocol + "//" + v245 + v247 + p427.pathname + p427.search;
        } else {
          return p427.protocol + "//" + v245 + "/.proxy/colyseus" + v247 + p427.pathname + p427.search;
        }
      }
      p426.discordURLBuilder = f82;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Auth.js": function (p428, p429, p430) {
      'use strict';

      var v248 = this && this.__awaiter || function (p431, p432, p433, p434) {
        function f83(p435) {
          if (p435 instanceof p433) {
            return p435;
          } else {
            return new p433(function (p436) {
              p436(p435);
            });
          }
        }
        return new (p433 ||= Promise)(function (p437, p438) {
          function f84(p439) {
            try {
              f86(p434.next(p439));
            } catch (e5) {
              p438(e5);
            }
          }
          function f85(p440) {
            try {
              f86(p434.throw(p440));
            } catch (e6) {
              p438(e6);
            }
          }
          function f86(p441) {
            if (p441.done) {
              p437(p441.value);
            } else {
              f83(p441.value).then(f84, f85);
            }
          }
          f86((p434 = p434.apply(p431, p432 || [])).next());
        });
      };
      var v249 = this && this.__classPrivateFieldGet || function (p442, p443, p444, p445) {
        if (p444 === "a" && !p445) {
          throw new TypeError("Private accessor was defined without a getter");
        }
        if (typeof p443 === "function" ? p442 !== p443 || !p445 : !p443.has(p442)) {
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        }
        if (p444 === "m") {
          return p445;
        } else if (p444 === "a") {
          return p445.call(p442);
        } else if (p445) {
          return p445.value;
        } else {
          return p443.get(p442);
        }
      };
      var v250 = this && this.__classPrivateFieldSet || function (p446, p447, p448, p449, p450) {
        if (p449 === "m") {
          throw new TypeError("Private method is not writable");
        }
        if (p449 === "a" && !p450) {
          throw new TypeError("Private accessor was defined without a setter");
        }
        if (typeof p447 === "function" ? p446 !== p447 || !p450 : !p447.has(p446)) {
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        }
        if (p449 === "a") {
          p450.call(p446, p448);
        } else if (p450) {
          p450.value = p448;
        } else {
          p447.set(p446, p448);
        }
        return p448;
      };
      var v251;
      var v252;
      var v253;
      var v254;
      Object.defineProperty(p429, "__esModule", {
        value: true
      });
      p429.Auth = undefined;
      const vP430 = p430("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Storage.js");
      const vP4302 = p430("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/core/nanoevents.js");
      class C {
        constructor(p451) {
          this.http = p451;
          this.settings = {
            path: "/auth",
            key: "colyseus-auth-token"
          };
          v251.set(this, false);
          v252.set(this, undefined);
          v253.set(this, undefined);
          v254.set(this, (0, vP4302.createNanoEvents)());
          (0, vP430.getItem)(this.settings.key, p452 => this.token = p452);
        }
        set token(p453) {
          this.http.authToken = p453;
        }
        get token() {
          return this.http.authToken;
        }
        onChange(p454) {
          const v255 = v249(this, v254, "f").on("change", p454);
          if (!v249(this, v251, "f")) {
            v250(this, v252, new Promise((p455, p456) => {
              this.getUserData().then(p457 => {
                this.emitChange(Object.assign(Object.assign({}, p457), {
                  token: this.token
                }));
              }).catch(p458 => {
                this.emitChange({
                  user: null,
                  token: undefined
                });
              }).finally(() => {
                p455();
              });
            }), "f");
          }
          v250(this, v251, true, "f");
          return v255;
        }
        getUserData() {
          return v248(this, undefined, undefined, function* () {
            if (this.token) {
              return (yield this.http.get(this.settings.path + "/userdata")).data;
            } else {
              throw new Error("missing auth.token");
            }
          });
        }
        registerWithEmailAndPassword(p459, p460, p461) {
          return v248(this, undefined, undefined, function* () {
            const v256 = (yield this.http.post(this.settings.path + "/register", {
              body: {
                email: p459,
                password: p460,
                options: p461
              }
            })).data;
            this.emitChange(v256);
            return v256;
          });
        }
        signInWithEmailAndPassword(p462, p463) {
          return v248(this, undefined, undefined, function* () {
            const v257 = (yield this.http.post(this.settings.path + "/login", {
              body: {
                email: p462,
                password: p463
              }
            })).data;
            this.emitChange(v257);
            return v257;
          });
        }
        signInAnonymously(p464) {
          return v248(this, undefined, undefined, function* () {
            const v258 = (yield this.http.post(this.settings.path + "/anonymous", {
              body: {
                options: p464
              }
            })).data;
            this.emitChange(v258);
            return v258;
          });
        }
        sendPasswordResetEmail(p465) {
          return v248(this, undefined, undefined, function* () {
            return (yield this.http.post(this.settings.path + "/forgot-password", {
              body: {
                email: p465
              }
            })).data;
          });
        }
        signInWithProvider(p466, p467 = {}) {
          return v248(this, undefined, undefined, function* () {
            return new Promise((p468, p469) => {
              const v259 = p467.width || 480;
              const v260 = p467.height || 768;
              const v261 = this.token ? "?token=" + this.token : "";
              const v262 = "Login with " + (p466[0].toUpperCase() + p466.substring(1));
              const v263 = this.http.client.getHttpEndpoint((p467.prefix || this.settings.path + "/provider") + "/" + p466 + v261);
              const v264 = screen.width / 2 - v259 / 2;
              const v265 = screen.height / 2 - v260 / 2;
              v250(this, v253, window.open(v263, v262, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + v259 + ", height=" + v260 + ", top=" + v265 + ", left=" + v264), "f");
              const vF20 = p470 => {
                if (p470.data.user === undefined && p470.data.token === undefined) {
                  return;
                }
                clearInterval(vSetInterval);
                v249(this, v253, "f").close();
                v250(this, v253, undefined, "f");
                window.removeEventListener("message", vF20);
                if (p470.data.error !== undefined) {
                  p469(p470.data.error);
                } else {
                  p468(p470.data);
                  this.emitChange(p470.data);
                }
              };
              const vSetInterval = setInterval(() => {
                if (!v249(this, v253, "f") || v249(this, v253, "f").closed) {
                  v250(this, v253, undefined, "f");
                  p469("cancelled");
                  window.removeEventListener("message", vF20);
                }
              }, 200);
              window.addEventListener("message", vF20);
            });
          });
        }
        signOut() {
          return v248(this, undefined, undefined, function* () {
            this.emitChange({
              user: null,
              token: null
            });
          });
        }
        emitChange(p471) {
          if (p471.token !== undefined) {
            this.token = p471.token;
            if (p471.token === null) {
              (0, vP430.removeItem)(this.settings.key);
            } else {
              (0, vP430.setItem)(this.settings.key, p471.token);
            }
          }
          v249(this, v254, "f").emit("change", p471);
        }
      }
      p429.Auth = C;
      v251 = new WeakMap();
      v252 = new WeakMap();
      v253 = new WeakMap();
      v254 = new WeakMap();
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Client.js": function (p472, p473, p474) {
      'use strict';

      var v266 = this && this.__awaiter || function (p475, p476, p477, p478) {
        function f87(p479) {
          if (p479 instanceof p477) {
            return p479;
          } else {
            return new p477(function (p480) {
              p480(p479);
            });
          }
        }
        return new (p477 ||= Promise)(function (p481, p482) {
          function f88(p483) {
            try {
              f90(p478.next(p483));
            } catch (e7) {
              p482(e7);
            }
          }
          function f89(p484) {
            try {
              f90(p478.throw(p484));
            } catch (e8) {
              p482(e8);
            }
          }
          function f90(p485) {
            if (p485.done) {
              p481(p485.value);
            } else {
              f87(p485.value).then(f88, f89);
            }
          }
          f90((p478 = p478.apply(p475, p476 || [])).next());
        });
      };
      Object.defineProperty(p473, "__esModule", {
        value: true
      });
      p473.Client = p473.MatchMakeError = undefined;
      const vP474 = p474("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/errors/ServerError.js");
      const vP4742 = p474("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Room.js");
      const vP4743 = p474("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/HTTP.js");
      const vP4744 = p474("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Auth.js");
      const vP4745 = p474("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/3rd_party/discord.js");
      class C2 extends Error {
        constructor(p486, p487) {
          super(p486);
          this.code = p487;
          Object.setPrototypeOf(this, C2.prototype);
        }
      }
      p473.MatchMakeError = C2;
      const v267 = typeof window !== "undefined" && typeof window?.location?.hostname !== "undefined" ? window.location.protocol.replace("http", "ws") + "//" + window.location.hostname + (window.location.port && ":" + window.location.port) : "ws://127.0.0.1:2567";
      class C3 {
        constructor(p488 = v267, p489) {
          var v268;
          if (typeof p488 === "string") {
            const v269 = p488.startsWith("/") ? new URL(p488, v267) : new URL(p488);
            const v270 = v269.protocol === "https:" || v269.protocol === "wss:";
            const vNumber = Number(v269.port || (v270 ? 443 : 80));
            this.settings = {
              hostname: v269.hostname,
              pathname: v269.pathname,
              port: vNumber,
              secure: v270
            };
          } else {
            if (p488.port === undefined) {
              p488.port = p488.secure ? 443 : 80;
            }
            if (p488.pathname === undefined) {
              p488.pathname = "";
            }
            this.settings = p488;
          }
          if (this.settings.pathname.endsWith("/")) {
            this.settings.pathname = this.settings.pathname.slice(0, -1);
          }
          this.http = new vP4743.HTTP(this, p489?.headers || {});
          this.auth = new vP4744.Auth(this.http);
          this.urlBuilder = p489?.urlBuilder;
          if (!this.urlBuilder && typeof window !== "undefined" && ((v268 = window?.location?.hostname) === null || v268 === undefined ? undefined : v268.includes("discordsays.com"))) {
            this.urlBuilder = vP4745.discordURLBuilder;
            console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder.");
          }
        }
        joinOrCreate(p490, p491 = {}, p492) {
          return v266(this, undefined, undefined, function* () {
            return yield this.createMatchMakeRequest("joinOrCreate", p490, p491, p492);
          });
        }
        create(p493, p494 = {}, p495) {
          return v266(this, undefined, undefined, function* () {
            return yield this.createMatchMakeRequest("create", p493, p494, p495);
          });
        }
        join(p496, p497 = {}, p498) {
          return v266(this, undefined, undefined, function* () {
            return yield this.createMatchMakeRequest("join", p496, p497, p498);
          });
        }
        joinById(p499, p500 = {}, p501) {
          return v266(this, undefined, undefined, function* () {
            return yield this.createMatchMakeRequest("joinById", p499, p500, p501);
          });
        }
        reconnect(p502, p503) {
          return v266(this, undefined, undefined, function* () {
            if (typeof p502 === "string" && typeof p503 === "string") {
              throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
            }
            const [v271, v272] = p502.split(":");
            if (!v271 || !v272) {
              throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
            }
            return yield this.createMatchMakeRequest("reconnect", v271, {
              reconnectionToken: v272
            }, p503);
          });
        }
        getAvailableRooms(p504 = "") {
          return v266(this, undefined, undefined, function* () {
            return (yield this.http.get("matchmake/" + p504, {
              headers: {
                Accept: "application/json"
              }
            })).data;
          });
        }
        consumeSeatReservation(p505, p506, p507) {
          return v266(this, undefined, undefined, function* () {
            const v273 = this.createRoom(p505.room.name, p506);
            v273.roomId = p505.room.roomId;
            v273.sessionId = p505.sessionId;
            const vO8 = {
              sessionId: v273.sessionId
            };
            if (p505.reconnectionToken) {
              vO8.reconnectionToken = p505.reconnectionToken;
            }
            const v274 = p507 || v273;
            v273.connect(this.buildEndpoint(p505.room, vO8), p505.devMode && (() => v266(this, undefined, undefined, function* () {
              console.info("[Colyseus devMode]: " + String.fromCodePoint(128260) + " Re-establishing connection with room id '" + v273.roomId + "'...");
              let vLN022 = 0;
              let vLN8 = 8;
              const vF21 = () => v266(this, undefined, undefined, function* () {
                vLN022++;
                try {
                  yield this.consumeSeatReservation(p505, p506, v274);
                  console.info("[Colyseus devMode]: " + String.fromCodePoint(9989) + " Successfully re-established connection with room '" + v273.roomId + "'");
                } catch (e9) {
                  if (vLN022 < vLN8) {
                    console.info("[Colyseus devMode]: " + String.fromCodePoint(128260) + " retrying... (" + vLN022 + " out of " + vLN8 + ")");
                    setTimeout(vF21, 2000);
                  } else {
                    console.info("[Colyseus devMode]: " + String.fromCodePoint(10060) + " Failed to reconnect. Is your server running? Please check server logs.");
                  }
                }
              });
              setTimeout(vF21, 2000);
            })), v274, this.http.headers);
            return new Promise((p508, p509) => {
              const vF22 = (p510, p511) => p509(new vP474.ServerError(p510, p511));
              v274.onError.once(vF22);
              v274.onJoin.once(() => {
                v274.onError.remove(vF22);
                p508(v274);
              });
            });
          });
        }
        createMatchMakeRequest(p512, p513, p514 = {}, p515, p516) {
          return v266(this, undefined, undefined, function* () {
            const v275 = (yield this.http.post("matchmake/" + p512 + "/" + p513, {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(p514)
            })).data;
            if (v275.error) {
              throw new C2(v275.error, v275.code);
            }
            if (p512 === "reconnect") {
              v275.reconnectionToken = p514.reconnectionToken;
            }
            return yield this.consumeSeatReservation(v275, p515, p516);
          });
        }
        createRoom(p517, p518) {
          return new vP4742.Room(p517, p518);
        }
        buildEndpoint(p519, p520 = {}) {
          const vA16 = [];
          for (const v276 in p520) {
            if (!p520.hasOwnProperty(v276)) {
              continue;
            }
            vA16.push(v276 + "=" + p520[v276]);
          }
          let v277 = this.settings.secure ? "wss://" : "ws://";
          if (p519.publicAddress) {
            v277 += "" + p519.publicAddress;
          } else {
            v277 += "" + this.settings.hostname + this.getEndpointPort() + this.settings.pathname;
          }
          const v278 = v277 + "/" + p519.processId + "/" + p519.roomId + "?" + vA16.join("&");
          if (this.urlBuilder) {
            return this.urlBuilder(new URL(v278));
          } else {
            return v278;
          }
        }
        getHttpEndpoint(p521 = "") {
          const v279 = p521.startsWith("/") ? p521 : "/" + p521;
          const v280 = (this.settings.secure ? "https" : "http") + "://" + this.settings.hostname + this.getEndpointPort() + this.settings.pathname + v279;
          if (this.urlBuilder) {
            return this.urlBuilder(new URL(v280));
          } else {
            return v280;
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
      p473.Client = C3;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Connection.js": (p522, p523, p524) => {
      'use strict';

      Object.defineProperty(p523, "__esModule", {
        value: true
      });
      p523.Connection = undefined;
      const vP524 = p524("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/transport/WebSocketTransport.js");
      class C4 {
        constructor() {
          this.events = {};
          this.transport = new vP524.WebSocketTransport(this.events);
        }
        send(p525) {
          this.transport.send(p525);
        }
        connect(p526, p527) {
          this.transport.connect(p526, p527);
        }
        close(p528, p529) {
          this.transport.close(p528, p529);
        }
        get isOpen() {
          return this.transport.isOpen;
        }
      }
      p523.Connection = C4;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/HTTP.js": function (p530, p531, p532) {
      'use strict';

      var v281 = this && this.__createBinding || (Object.create ? function (p533, p534, p535, p536 = p535) {
        var v282 = Object.getOwnPropertyDescriptor(p534, p535);
        if (!v282 || ("get" in v282 ? !p534.__esModule : v282.writable || v282.configurable)) {
          v282 = {
            enumerable: true,
            get: function () {
              return p534[p535];
            }
          };
        }
        Object.defineProperty(p533, p536, v282);
      } : function (p537, p538, p539, p540 = p539) {
        p537[p540] = p538[p539];
      });
      var v283 = this && this.__setModuleDefault || (Object.create ? function (p541, p542) {
        Object.defineProperty(p541, "default", {
          enumerable: true,
          value: p542
        });
      } : function (p543, p544) {
        p543.default = p544;
      });
      var v284 = this && this.__importStar || function (p545) {
        if (p545 && p545.__esModule) {
          return p545;
        }
        var vO9 = {};
        if (p545 != null) {
          for (var v285 in p545) {
            if (v285 !== "default" && Object.prototype.hasOwnProperty.call(p545, v285)) {
              v281(vO9, p545, v285);
            }
          }
        }
        v283(vO9, p545);
        return vO9;
      };
      Object.defineProperty(p531, "__esModule", {
        value: true
      });
      p531.HTTP = undefined;
      const vP532 = p532("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/errors/ServerError.js");
      const vV284 = v284(p532("./node_modules/.pnpm/httpie@2.0.0-next.13/node_modules/httpie/xhr/index.mjs"));
      class C5 {
        constructor(p546, p547 = {}) {
          this.client = p546;
          this.headers = p547;
        }
        get(p548, p549 = {}) {
          return this.request("get", p548, p549);
        }
        post(p550, p551 = {}) {
          return this.request("post", p550, p551);
        }
        del(p552, p553 = {}) {
          return this.request("del", p552, p553);
        }
        put(p554, p555 = {}) {
          return this.request("put", p554, p555);
        }
        request(p556, p557, p558 = {}) {
          return vV284[p556](this.client.getHttpEndpoint(p557), this.getOptions(p558)).catch(p559 => {
            const v286 = p559.statusCode;
            const v287 = p559.data?.error || p559.statusMessage || p559.message;
            if (!v286 && !v287) {
              throw p559;
            }
            throw new vP532.ServerError(v286, v287);
          });
        }
        getOptions(p560) {
          p560.headers = Object.assign({}, this.headers, p560.headers);
          if (this.authToken) {
            p560.headers.Authorization = "Bearer " + this.authToken;
          }
          if (typeof cc !== "undefined" && cc.sys && cc.sys.isNative) {} else {
            p560.withCredentials = true;
          }
          return p560;
        }
      }
      p531.HTTP = C5;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Protocol.js": (p561, p562) => {
      'use strict';

      Object.defineProperty(p562, "__esModule", {
        value: true
      });
      p562.utf8Length = p562.utf8Read = p562.ErrorCode = p562.Protocol = undefined;
      var v288;
      (function (p563) {
        p563[p563.HANDSHAKE = 9] = "HANDSHAKE";
        p563[p563.JOIN_ROOM = 10] = "JOIN_ROOM";
        p563[p563.ERROR = 11] = "ERROR";
        p563[p563.LEAVE_ROOM = 12] = "LEAVE_ROOM";
        p563[p563.ROOM_DATA = 13] = "ROOM_DATA";
        p563[p563.ROOM_STATE = 14] = "ROOM_STATE";
        p563[p563.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH";
        p563[p563.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA";
        p563[p563.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES";
      })(v288 = p562.Protocol ||= {});
      var v289;
      (function (p564) {
        p564[p564.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER";
        p564[p564.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA";
        p564[p564.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID";
        p564[p564.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED";
        p564[p564.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED";
        p564[p564.AUTH_FAILED = 4215] = "AUTH_FAILED";
        p564[p564.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR";
      })(v289 = p562.ErrorCode ||= {});
      function f91(p565, p566) {
        const v290 = p565[p566++];
        var vLS2 = "";
        var vLN023 = 0;
        for (var vP566 = p566, v291 = p566 + v290; vP566 < v291; vP566++) {
          var v292 = p565[vP566];
          if ((v292 & 128) === 0) {
            vLS2 += String.fromCharCode(v292);
            continue;
          }
          if ((v292 & 224) === 192) {
            vLS2 += String.fromCharCode((v292 & 31) << 6 | p565[++vP566] & 63);
            continue;
          }
          if ((v292 & 240) === 224) {
            vLS2 += String.fromCharCode((v292 & 15) << 12 | (p565[++vP566] & 63) << 6 | (p565[++vP566] & 63) << 0);
            continue;
          }
          if ((v292 & 248) === 240) {
            vLN023 = (v292 & 7) << 18 | (p565[++vP566] & 63) << 12 | (p565[++vP566] & 63) << 6 | (p565[++vP566] & 63) << 0;
            if (vLN023 >= 65536) {
              vLN023 -= 65536;
              vLS2 += String.fromCharCode((vLN023 >>> 10) + 55296, (vLN023 & 1023) + 56320);
            } else {
              vLS2 += String.fromCharCode(vLN023);
            }
            continue;
          }
          throw new Error("Invalid byte " + v292.toString(16));
        }
        return vLS2;
      }
      p562.utf8Read = f91;
      function f92(p567 = "") {
        let vLN024 = 0;
        let vLN025 = 0;
        for (let vLN026 = 0, v293 = p567.length; vLN026 < v293; vLN026++) {
          vLN024 = p567.charCodeAt(vLN026);
          if (vLN024 < 128) {
            vLN025 += 1;
          } else if (vLN024 < 2048) {
            vLN025 += 2;
          } else if (vLN024 < 55296 || vLN024 >= 57344) {
            vLN025 += 3;
          } else {
            vLN026++;
            vLN025 += 4;
          }
        }
        return vLN025 + 1;
      }
      p562.utf8Length = f92;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Room.js": function (p568, p569, p570) {
      'use strict';

      var v294 = this && this.__createBinding || (Object.create ? function (p571, p572, p573, p574 = p573) {
        var v295 = Object.getOwnPropertyDescriptor(p572, p573);
        if (!v295 || ("get" in v295 ? !p572.__esModule : v295.writable || v295.configurable)) {
          v295 = {
            enumerable: true,
            get: function () {
              return p572[p573];
            }
          };
        }
        Object.defineProperty(p571, p574, v295);
      } : function (p575, p576, p577, p578 = p577) {
        p575[p578] = p576[p577];
      });
      var v296 = this && this.__setModuleDefault || (Object.create ? function (p579, p580) {
        Object.defineProperty(p579, "default", {
          enumerable: true,
          value: p580
        });
      } : function (p581, p582) {
        p581.default = p582;
      });
      var v297 = this && this.__importStar || function (p583) {
        if (p583 && p583.__esModule) {
          return p583;
        }
        var vO10 = {};
        if (p583 != null) {
          for (var v298 in p583) {
            if (v298 !== "default" && Object.prototype.hasOwnProperty.call(p583, v298)) {
              v294(vO10, p583, v298);
            }
          }
        }
        v296(vO10, p583);
        return vO10;
      };
      Object.defineProperty(p569, "__esModule", {
        value: true
      });
      p569.Room = undefined;
      const vV297 = v297(p570("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/msgpack/index.js"));
      const vP570 = p570("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Connection.js");
      const vP5702 = p570("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Protocol.js");
      const vP5703 = p570("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/serializer/Serializer.js");
      const vP5704 = p570("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/core/nanoevents.js");
      const vP5705 = p570("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/core/signal.js");
      const vP5706 = p570("./node_modules/.pnpm/@colyseus+schema@2.0.37/node_modules/@colyseus/schema/build/umd/index.js");
      const vP5707 = p570("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/errors/ServerError.js");
      class C6 {
        constructor(p584, p585) {
          this.onStateChange = (0, vP5705.createSignal)();
          this.onError = (0, vP5705.createSignal)();
          this.onLeave = (0, vP5705.createSignal)();
          this.onJoin = (0, vP5705.createSignal)();
          this.hasJoined = false;
          this.onMessageHandlers = (0, vP5704.createNanoEvents)();
          this.roomId = null;
          this.name = p584;
          if (p585) {
            this.serializer = new ((0, vP5703.getSerializer)("schema"))();
            this.rootSchema = p585;
            this.serializer.state = new p585();
          }
          this.onError((p586, p587) => {
            var v299;
            if ((v299 = console.warn) === null || v299 === undefined) {
              return undefined;
            } else {
              return v299.call(console, "colyseus.js - onError => (" + p586 + ") " + p587);
            }
          });
          this.onLeave(() => this.removeAllListeners());
        }
        get id() {
          return this.roomId;
        }
        connect(p588, p589, p590 = this, p591) {
          const v300 = new vP570.Connection();
          p590.connection = v300;
          v300.events.onmessage = C6.prototype.onMessageCallback.bind(p590);
          v300.events.onclose = function (p592) {
            var v301;
            if (!p590.hasJoined) {
              if ((v301 = console.warn) === null || v301 === undefined) {
                undefined;
              } else {
                v301.call(console, "Room connection was closed unexpectedly (" + p592.code + "): " + p592.reason);
              }
              p590.onError.invoke(p592.code, p592.reason);
              return;
            }
            if (p592.code === vP5707.CloseCode.DEVMODE_RESTART && p589) {
              p589();
            } else {
              p590.onLeave.invoke(p592.code, p592.reason);
              p590.destroy();
            }
          };
          v300.events.onerror = function (p593) {
            var v302;
            if ((v302 = console.warn) === null || v302 === undefined) {
              undefined;
            } else {
              v302.call(console, "Room, onError (" + p593.code + "): " + p593.reason);
            }
            p590.onError.invoke(p593.code, p593.reason);
          };
          v300.connect(p588, p591);
        }
        leave(p594 = true) {
          return new Promise(p595 => {
            this.onLeave(p596 => p595(p596));
            if (this.connection) {
              if (p594) {
                this.connection.send([vP5702.Protocol.LEAVE_ROOM]);
              } else {
                this.connection.close();
              }
            } else {
              this.onLeave.invoke(vP5707.CloseCode.CONSENTED);
            }
          });
        }
        onMessage(p597, p598) {
          return this.onMessageHandlers.on(this.getMessageHandlerKey(p597), p598);
        }
        send(p599, p600) {
          const vA17 = [vP5702.Protocol.ROOM_DATA];
          if (typeof p599 === "string") {
            vP5706.encode.string(vA17, p599);
          } else {
            vP5706.encode.number(vA17, p599);
          }
          let v303;
          if (p600 !== undefined) {
            const v304 = vV297.encode(p600);
            v303 = new Uint8Array(vA17.length + v304.byteLength);
            v303.set(new Uint8Array(vA17), 0);
            v303.set(new Uint8Array(v304), vA17.length);
          } else {
            v303 = new Uint8Array(vA17);
          }
          this.connection.send(v303.buffer);
        }
        sendBytes(p601, p602) {
          const vA18 = [vP5702.Protocol.ROOM_DATA_BYTES];
          if (typeof p601 === "string") {
            vP5706.encode.string(vA18, p601);
          } else {
            vP5706.encode.number(vA18, p601);
          }
          let v305;
          v305 = new Uint8Array(vA18.length + (p602.byteLength || p602.length));
          v305.set(new Uint8Array(vA18), 0);
          v305.set(new Uint8Array(p602), vA18.length);
          this.connection.send(v305.buffer);
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
        onMessageCallback(p603) {
          const v306 = Array.from(new Uint8Array(p603.data));
          const v307 = v306[0];
          if (v307 === vP5702.Protocol.JOIN_ROOM) {
            let vLN14 = 1;
            const v308 = (0, vP5702.utf8Read)(v306, vLN14);
            vLN14 += (0, vP5702.utf8Length)(v308);
            this.serializerId = (0, vP5702.utf8Read)(v306, vLN14);
            vLN14 += (0, vP5702.utf8Length)(this.serializerId);
            if (!this.serializer) {
              const v309 = (0, vP5703.getSerializer)(this.serializerId);
              this.serializer = new v309();
            }
            if (v306.length > vLN14 && this.serializer.handshake) {
              this.serializer.handshake(v306, {
                offset: vLN14
              });
            }
            this.reconnectionToken = this.roomId + ":" + v308;
            this.hasJoined = true;
            this.onJoin.invoke();
            this.connection.send([vP5702.Protocol.JOIN_ROOM]);
          } else if (v307 === vP5702.Protocol.ERROR) {
            const vO11 = {
              offset: 1
            };
            const v310 = vP5706.decode.number(v306, vO11);
            const v311 = vP5706.decode.string(v306, vO11);
            this.onError.invoke(v310, v311);
          } else if (v307 === vP5702.Protocol.LEAVE_ROOM) {
            this.leave();
          } else if (v307 === vP5702.Protocol.ROOM_DATA_SCHEMA) {
            const vO12 = {
              offset: 1
            };
            const v312 = this.serializer.getState().constructor._context;
            const v313 = v312.get(vP5706.decode.number(v306, vO12));
            const v314 = new v313();
            v314.decode(v306, vO12);
            this.dispatchMessage(v313, v314);
          } else if (v307 === vP5702.Protocol.ROOM_STATE) {
            v306.shift();
            this.setState(v306);
          } else if (v307 === vP5702.Protocol.ROOM_STATE_PATCH) {
            v306.shift();
            this.patch(v306);
          } else if (v307 === vP5702.Protocol.ROOM_DATA) {
            const vO13 = {
              offset: 1
            };
            const v315 = vP5706.decode.stringCheck(v306, vO13) ? vP5706.decode.string(v306, vO13) : vP5706.decode.number(v306, vO13);
            const v316 = v306.length > vO13.offset ? vV297.decode(p603.data, vO13.offset) : undefined;
            this.dispatchMessage(v315, v316);
          } else if (v307 === vP5702.Protocol.ROOM_DATA_BYTES) {
            const vO14 = {
              offset: 1
            };
            const v317 = vP5706.decode.stringCheck(v306, vO14) ? vP5706.decode.string(v306, vO14) : vP5706.decode.number(v306, vO14);
            this.dispatchMessage(v317, new Uint8Array(v306.slice(vO14.offset)));
          }
        }
        setState(p604) {
          this.serializer.setState(p604);
          this.onStateChange.invoke(this.serializer.getState());
        }
        patch(p605) {
          this.serializer.patch(p605);
          this.onStateChange.invoke(this.serializer.getState());
        }
        dispatchMessage(p606, p607) {
          var v318;
          const v319 = this.getMessageHandlerKey(p606);
          if (this.onMessageHandlers.events[v319]) {
            this.onMessageHandlers.emit(v319, p607);
          } else if (this.onMessageHandlers.events["*"]) {
            this.onMessageHandlers.emit("*", p606, p607);
          } else if ((v318 = console.warn) === null || v318 === undefined) {
            undefined;
          } else {
            v318.call(console, "colyseus.js: onMessage() not registered for type '" + p606 + "'.");
          }
        }
        destroy() {
          if (this.serializer) {
            this.serializer.teardown();
          }
        }
        getMessageHandlerKey(p608) {
          switch (typeof p608) {
            case "function":
              return "$" + p608._typeid;
            case "string":
              return p608;
            case "number":
              return "i" + p608;
            default:
              throw new Error("invalid message type.");
          }
        }
      }
      p569.Room = C6;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Storage.js": (p609, p610) => {
      'use strict';

      Object.defineProperty(p610, "__esModule", {
        value: true
      });
      p610.getItem = p610.removeItem = p610.setItem = undefined;
      let v320;
      function f93() {
        if (!v320) {
          try {
            v320 = typeof cc !== "undefined" && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage;
          } catch (e10) {}
        }
        if (!v320) {
          v320 = {
            cache: {},
            setItem: function (p611, p612) {
              this.cache[p611] = p612;
            },
            getItem: function (p613) {
              this.cache[p613];
            },
            removeItem: function (p614) {
              delete this.cache[p614];
            }
          };
        }
        return v320;
      }
      function f94(p615, p616) {
        f93().setItem(p615, p616);
      }
      p610.setItem = f94;
      function f95(p617) {
        f93().removeItem(p617);
      }
      p610.removeItem = f95;
      function f96(p618, p619) {
        const v321 = f93().getItem(p618);
        if (typeof Promise === "undefined" || !(v321 instanceof Promise)) {
          p619(v321);
        } else {
          v321.then(p620 => p619(p620));
        }
      }
      p610.getItem = f96;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/core/nanoevents.js": (p621, p622) => {
      'use strict';

      Object.defineProperty(p622, "__esModule", {
        value: true
      });
      p622.createNanoEvents = undefined;
      const vF23 = () => ({
        emit(p623, ..._0x5732ad) {
          let v322 = this.events[p623] || [];
          for (let vLN027 = 0, v323 = v322.length; vLN027 < v323; vLN027++) {
            v322[vLN027](..._0x5732ad);
          }
        },
        events: {},
        on(p624, p625) {
          var v324;
          if (!((v324 = this.events[p624]) === null || v324 === undefined ? undefined : v324.push(p625))) {
            this.events[p624] = [p625];
          }
          return () => {
            var v325;
            this.events[p624] = (v325 = this.events[p624]) === null || v325 === undefined ? undefined : v325.filter(p626 => p625 !== p626);
          };
        }
      });
      p622.createNanoEvents = vF23;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/core/signal.js": (p627, p628) => {
      'use strict';

      Object.defineProperty(p628, "__esModule", {
        value: true
      });
      p628.createSignal = p628.EventEmitter = undefined;
      class C7 {
        constructor() {
          this.handlers = [];
        }
        register(p629, p630 = false) {
          this.handlers.push(p629);
          return this;
        }
        invoke(..._0x4fc088) {
          this.handlers.forEach(p631 => p631.apply(this, _0x4fc088));
        }
        invokeAsync(..._0xfd4b23) {
          return Promise.all(this.handlers.map(p632 => p632.apply(this, _0xfd4b23)));
        }
        remove(p633) {
          const v326 = this.handlers.indexOf(p633);
          this.handlers[v326] = this.handlers[this.handlers.length - 1];
          this.handlers.pop();
        }
        clear() {
          this.handlers = [];
        }
      }
      p628.EventEmitter = C7;
      function f97() {
        const v327 = new C7();
        function f98(p634) {
          return v327.register(p634, this === null);
        }
        ;
        f98.once = p635 => {
          const vF24 = function (..._0x238927) {
            p635.apply(this, _0x238927);
            v327.remove(vF24);
          };
          v327.register(vF24);
        };
        f98.remove = p636 => v327.remove(p636);
        f98.invoke = (..._0x1b5bbe) => v327.invoke(..._0x1b5bbe);
        f98.invokeAsync = (..._0x10db9d) => v327.invokeAsync(..._0x10db9d);
        f98.clear = () => v327.clear();
        return f98;
      }
      p628.createSignal = f97;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/errors/ServerError.js": (p637, p638) => {
      'use strict';

      Object.defineProperty(p638, "__esModule", {
        value: true
      });
      p638.ServerError = p638.CloseCode = undefined;
      var v328;
      (function (p639) {
        p639[p639.CONSENTED = 4000] = "CONSENTED";
        p639[p639.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
      })(v328 = p638.CloseCode ||= {});
      class C8 extends Error {
        constructor(p640, p641) {
          super(p641);
          this.name = "ServerError";
          this.code = p640;
        }
      }
      p638.ServerError = C8;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/index.js": (p642, p643, p644) => {
      'use strict';

      Object.defineProperty(p643, "__esModule", {
        value: true
      });
      p643.SchemaSerializer = p643.registerSerializer = p643.Auth = p643.Room = p643.ErrorCode = p643.Protocol = p643.MatchMakeError = p643.Client = undefined;
      p644("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/legacy.js");
      var vP644 = p644("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Client.js");
      Object.defineProperty(p643, "Client", {
        enumerable: true,
        get: function () {
          return vP644.Client;
        }
      });
      Object.defineProperty(p643, "MatchMakeError", {
        enumerable: true,
        get: function () {
          return vP644.MatchMakeError;
        }
      });
      var vP6442 = p644("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Protocol.js");
      Object.defineProperty(p643, "Protocol", {
        enumerable: true,
        get: function () {
          return vP6442.Protocol;
        }
      });
      Object.defineProperty(p643, "ErrorCode", {
        enumerable: true,
        get: function () {
          return vP6442.ErrorCode;
        }
      });
      var vP6443 = p644("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Room.js");
      Object.defineProperty(p643, "Room", {
        enumerable: true,
        get: function () {
          return vP6443.Room;
        }
      });
      var vP6444 = p644("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/Auth.js");
      Object.defineProperty(p643, "Auth", {
        enumerable: true,
        get: function () {
          return vP6444.Auth;
        }
      });
      const vP6445 = p644("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/serializer/SchemaSerializer.js");
      Object.defineProperty(p643, "SchemaSerializer", {
        enumerable: true,
        get: function () {
          return vP6445.SchemaSerializer;
        }
      });
      const vP6446 = p644("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/serializer/NoneSerializer.js");
      const vP6447 = p644("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/serializer/Serializer.js");
      Object.defineProperty(p643, "registerSerializer", {
        enumerable: true,
        get: function () {
          return vP6447.registerSerializer;
        }
      });
      (0, vP6447.registerSerializer)("schema", vP6445.SchemaSerializer);
      (0, vP6447.registerSerializer)("none", vP6446.NoneSerializer);
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/legacy.js": () => {
      if (!ArrayBuffer.isView) {
        ArrayBuffer.isView = p645 => {
          return p645 !== null && typeof p645 === "object" && p645.buffer instanceof ArrayBuffer;
        };
      }
      if (typeof globalThis === "undefined" && typeof window !== "undefined") {
        window.globalThis = window;
      }
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/msgpack/index.js": (p646, p647) => {
      'use strict';

      Object.defineProperty(p647, "__esModule", {
        value: true
      });
      p647.decode = p647.encode = undefined;
      function f99(p648, p649) {
        this._offset = p649;
        if (p648 instanceof ArrayBuffer) {
          this._buffer = p648;
          this._view = new DataView(this._buffer);
        } else if (ArrayBuffer.isView(p648)) {
          this._buffer = p648.buffer;
          this._view = new DataView(this._buffer, p648.byteOffset, p648.byteLength);
        } else {
          throw new Error("Invalid argument");
        }
      }
      function f100(p650, p651, p652) {
        var vLS3 = "";
        var vLN028 = 0;
        for (var vP651 = p651, v329 = p651 + p652; vP651 < v329; vP651++) {
          var v330 = p650.getUint8(vP651);
          if ((v330 & 128) === 0) {
            vLS3 += String.fromCharCode(v330);
            continue;
          }
          if ((v330 & 224) === 192) {
            vLS3 += String.fromCharCode((v330 & 31) << 6 | p650.getUint8(++vP651) & 63);
            continue;
          }
          if ((v330 & 240) === 224) {
            vLS3 += String.fromCharCode((v330 & 15) << 12 | (p650.getUint8(++vP651) & 63) << 6 | (p650.getUint8(++vP651) & 63) << 0);
            continue;
          }
          if ((v330 & 248) === 240) {
            vLN028 = (v330 & 7) << 18 | (p650.getUint8(++vP651) & 63) << 12 | (p650.getUint8(++vP651) & 63) << 6 | (p650.getUint8(++vP651) & 63) << 0;
            if (vLN028 >= 65536) {
              vLN028 -= 65536;
              vLS3 += String.fromCharCode((vLN028 >>> 10) + 55296, (vLN028 & 1023) + 56320);
            } else {
              vLS3 += String.fromCharCode(vLN028);
            }
            continue;
          }
          throw new Error("Invalid byte " + v330.toString(16));
        }
        return vLS3;
      }
      f99.prototype._array = function (p653) {
        var v331 = new Array(p653);
        for (var vLN029 = 0; vLN029 < p653; vLN029++) {
          v331[vLN029] = this._parse();
        }
        return v331;
      };
      f99.prototype._map = function (p654) {
        var vLS4 = "";
        var vO15 = {};
        for (var vLN030 = 0; vLN030 < p654; vLN030++) {
          vLS4 = this._parse();
          vO15[vLS4] = this._parse();
        }
        return vO15;
      };
      f99.prototype._str = function (p655) {
        var vF100 = f100(this._view, this._offset, p655);
        this._offset += p655;
        return vF100;
      };
      f99.prototype._bin = function (p656) {
        var v332 = this._buffer.slice(this._offset, this._offset + p656);
        this._offset += p656;
        return v332;
      };
      f99.prototype._parse = function () {
        var v333 = this._view.getUint8(this._offset++);
        var v334;
        var vLN031 = 0;
        var vLN032 = 0;
        var vLN033 = 0;
        var vLN034 = 0;
        if (v333 < 192) {
          if (v333 < 128) {
            return v333;
          }
          if (v333 < 144) {
            return this._map(v333 & 15);
          }
          if (v333 < 160) {
            return this._array(v333 & 15);
          }
          return this._str(v333 & 31);
        }
        if (v333 > 223) {
          return (255 - v333 + 1) * -1;
        }
        switch (v333) {
          case 192:
            return null;
          case 194:
            return false;
          case 195:
            return true;
          case 196:
            vLN031 = this._view.getUint8(this._offset);
            this._offset += 1;
            return this._bin(vLN031);
          case 197:
            vLN031 = this._view.getUint16(this._offset);
            this._offset += 2;
            return this._bin(vLN031);
          case 198:
            vLN031 = this._view.getUint32(this._offset);
            this._offset += 4;
            return this._bin(vLN031);
          case 199:
            vLN031 = this._view.getUint8(this._offset);
            vLN032 = this._view.getInt8(this._offset + 1);
            this._offset += 2;
            if (vLN032 === -1) {
              var v335 = this._view.getUint32(this._offset);
              vLN033 = this._view.getInt32(this._offset + 4);
              vLN034 = this._view.getUint32(this._offset + 8);
              this._offset += 12;
              return new Date((vLN033 * 4294967296 + vLN034) * 1000 + v335 / 1000000);
            }
            return [vLN032, this._bin(vLN031)];
          case 200:
            vLN031 = this._view.getUint16(this._offset);
            vLN032 = this._view.getInt8(this._offset + 2);
            this._offset += 3;
            return [vLN032, this._bin(vLN031)];
          case 201:
            vLN031 = this._view.getUint32(this._offset);
            vLN032 = this._view.getInt8(this._offset + 4);
            this._offset += 5;
            return [vLN032, this._bin(vLN031)];
          case 202:
            v334 = this._view.getFloat32(this._offset);
            this._offset += 4;
            return v334;
          case 203:
            v334 = this._view.getFloat64(this._offset);
            this._offset += 8;
            return v334;
          case 204:
            v334 = this._view.getUint8(this._offset);
            this._offset += 1;
            return v334;
          case 205:
            v334 = this._view.getUint16(this._offset);
            this._offset += 2;
            return v334;
          case 206:
            v334 = this._view.getUint32(this._offset);
            this._offset += 4;
            return v334;
          case 207:
            vLN033 = this._view.getUint32(this._offset) * Math.pow(2, 32);
            vLN034 = this._view.getUint32(this._offset + 4);
            this._offset += 8;
            return vLN033 + vLN034;
          case 208:
            v334 = this._view.getInt8(this._offset);
            this._offset += 1;
            return v334;
          case 209:
            v334 = this._view.getInt16(this._offset);
            this._offset += 2;
            return v334;
          case 210:
            v334 = this._view.getInt32(this._offset);
            this._offset += 4;
            return v334;
          case 211:
            vLN033 = this._view.getInt32(this._offset) * Math.pow(2, 32);
            vLN034 = this._view.getUint32(this._offset + 4);
            this._offset += 8;
            return vLN033 + vLN034;
          case 212:
            vLN032 = this._view.getInt8(this._offset);
            this._offset += 1;
            if (vLN032 === 0) {
              this._offset += 1;
              return undefined;
            }
            return [vLN032, this._bin(1)];
          case 213:
            vLN032 = this._view.getInt8(this._offset);
            this._offset += 1;
            return [vLN032, this._bin(2)];
          case 214:
            vLN032 = this._view.getInt8(this._offset);
            this._offset += 1;
            if (vLN032 === -1) {
              v334 = this._view.getUint32(this._offset);
              this._offset += 4;
              return new Date(v334 * 1000);
            }
            return [vLN032, this._bin(4)];
          case 215:
            vLN032 = this._view.getInt8(this._offset);
            this._offset += 1;
            if (vLN032 === 0) {
              vLN033 = this._view.getInt32(this._offset) * Math.pow(2, 32);
              vLN034 = this._view.getUint32(this._offset + 4);
              this._offset += 8;
              return new Date(vLN033 + vLN034);
            }
            if (vLN032 === -1) {
              vLN033 = this._view.getUint32(this._offset);
              vLN034 = this._view.getUint32(this._offset + 4);
              this._offset += 8;
              var v336 = (vLN033 & 3) * 4294967296 + vLN034;
              return new Date(v336 * 1000 + (vLN033 >>> 2) / 1000000);
            }
            return [vLN032, this._bin(8)];
          case 216:
            vLN032 = this._view.getInt8(this._offset);
            this._offset += 1;
            return [vLN032, this._bin(16)];
          case 217:
            vLN031 = this._view.getUint8(this._offset);
            this._offset += 1;
            return this._str(vLN031);
          case 218:
            vLN031 = this._view.getUint16(this._offset);
            this._offset += 2;
            return this._str(vLN031);
          case 219:
            vLN031 = this._view.getUint32(this._offset);
            this._offset += 4;
            return this._str(vLN031);
          case 220:
            vLN031 = this._view.getUint16(this._offset);
            this._offset += 2;
            return this._array(vLN031);
          case 221:
            vLN031 = this._view.getUint32(this._offset);
            this._offset += 4;
            return this._array(vLN031);
          case 222:
            vLN031 = this._view.getUint16(this._offset);
            this._offset += 2;
            return this._map(vLN031);
          case 223:
            vLN031 = this._view.getUint32(this._offset);
            this._offset += 4;
            return this._map(vLN031);
        }
        throw new Error("Could not parse");
      };
      function f101(p657, p658 = 0) {
        var v337 = new f99(p657, p658);
        var v338 = v337._parse();
        if (v337._offset !== p657.byteLength) {
          throw new Error(p657.byteLength - v337._offset + " trailing bytes");
        }
        return v338;
      }
      p647.decode = f101;
      var vLN4294967295 = 4294967295;
      var vLN17179869183 = 17179869183;
      function f102(p659, p660, p661) {
        var vLN035 = 0;
        for (var vLN036 = 0, v339 = p661.length; vLN036 < v339; vLN036++) {
          vLN035 = p661.charCodeAt(vLN036);
          if (vLN035 < 128) {
            p659.setUint8(p660++, vLN035);
          } else if (vLN035 < 2048) {
            p659.setUint8(p660++, vLN035 >> 6 | 192);
            p659.setUint8(p660++, vLN035 & 63 | 128);
          } else if (vLN035 < 55296 || vLN035 >= 57344) {
            p659.setUint8(p660++, vLN035 >> 12 | 224);
            p659.setUint8(p660++, vLN035 >> 6 & 63 | 128);
            p659.setUint8(p660++, vLN035 & 63 | 128);
          } else {
            vLN036++;
            vLN035 = 65536 + ((vLN035 & 1023) << 10 | p661.charCodeAt(vLN036) & 1023);
            p659.setUint8(p660++, vLN035 >> 18 | 240);
            p659.setUint8(p660++, vLN035 >> 12 & 63 | 128);
            p659.setUint8(p660++, vLN035 >> 6 & 63 | 128);
            p659.setUint8(p660++, vLN035 & 63 | 128);
          }
        }
      }
      function f103(p662) {
        var vLN037 = 0;
        var vLN038 = 0;
        for (var vLN039 = 0, v340 = p662.length; vLN039 < v340; vLN039++) {
          vLN037 = p662.charCodeAt(vLN039);
          if (vLN037 < 128) {
            vLN038 += 1;
          } else if (vLN037 < 2048) {
            vLN038 += 2;
          } else if (vLN037 < 55296 || vLN037 >= 57344) {
            vLN038 += 3;
          } else {
            vLN039++;
            vLN038 += 4;
          }
        }
        return vLN038;
      }
      function f104(p663, p664, p665) {
        var v341 = typeof p665;
        var vLN040 = 0;
        var vLN041 = 0;
        var vLN042 = 0;
        var vLN043 = 0;
        var vLN044 = 0;
        var vLN045 = 0;
        if (v341 === "string") {
          vLN044 = f103(p665);
          if (vLN044 < 32) {
            p663.push(vLN044 | 160);
            vLN045 = 1;
          } else if (vLN044 < 256) {
            p663.push(217, vLN044);
            vLN045 = 2;
          } else if (vLN044 < 65536) {
            p663.push(218, vLN044 >> 8, vLN044);
            vLN045 = 3;
          } else if (vLN044 < 4294967296) {
            p663.push(219, vLN044 >> 24, vLN044 >> 16, vLN044 >> 8, vLN044);
            vLN045 = 5;
          } else {
            throw new Error("String too long");
          }
          p664.push({
            _str: p665,
            _length: vLN044,
            _offset: p663.length
          });
          return vLN045 + vLN044;
        }
        if (v341 === "number") {
          if (Math.floor(p665) !== p665 || !isFinite(p665)) {
            p663.push(203);
            p664.push({
              _float: p665,
              _length: 8,
              _offset: p663.length
            });
            return 9;
          }
          if (p665 >= 0) {
            if (p665 < 128) {
              p663.push(p665);
              return 1;
            }
            if (p665 < 256) {
              p663.push(204, p665);
              return 2;
            }
            if (p665 < 65536) {
              p663.push(205, p665 >> 8, p665);
              return 3;
            }
            if (p665 < 4294967296) {
              p663.push(206, p665 >> 24, p665 >> 16, p665 >> 8, p665);
              return 5;
            }
            vLN042 = p665 / Math.pow(2, 32) >> 0;
            vLN043 = p665 >>> 0;
            p663.push(207, vLN042 >> 24, vLN042 >> 16, vLN042 >> 8, vLN042, vLN043 >> 24, vLN043 >> 16, vLN043 >> 8, vLN043);
            return 9;
          } else {
            if (p665 >= -32) {
              p663.push(p665);
              return 1;
            }
            if (p665 >= -128) {
              p663.push(208, p665);
              return 2;
            }
            if (p665 >= -32768) {
              p663.push(209, p665 >> 8, p665);
              return 3;
            }
            if (p665 >= -2147483648) {
              p663.push(210, p665 >> 24, p665 >> 16, p665 >> 8, p665);
              return 5;
            }
            vLN042 = Math.floor(p665 / Math.pow(2, 32));
            vLN043 = p665 >>> 0;
            p663.push(211, vLN042 >> 24, vLN042 >> 16, vLN042 >> 8, vLN042, vLN043 >> 24, vLN043 >> 16, vLN043 >> 8, vLN043);
            return 9;
          }
        }
        if (v341 === "object") {
          if (p665 === null) {
            p663.push(192);
            return 1;
          }
          if (Array.isArray(p665)) {
            vLN044 = p665.length;
            if (vLN044 < 16) {
              p663.push(vLN044 | 144);
              vLN045 = 1;
            } else if (vLN044 < 65536) {
              p663.push(220, vLN044 >> 8, vLN044);
              vLN045 = 3;
            } else if (vLN044 < 4294967296) {
              p663.push(221, vLN044 >> 24, vLN044 >> 16, vLN044 >> 8, vLN044);
              vLN045 = 5;
            } else {
              throw new Error("Array too large");
            }
            for (vLN040 = 0; vLN040 < vLN044; vLN040++) {
              vLN045 += f104(p663, p664, p665[vLN040]);
            }
            return vLN045;
          }
          if (p665 instanceof Date) {
            var v342 = p665.getTime();
            var v343 = Math.floor(v342 / 1000);
            var v344 = (v342 - v343 * 1000) * 1000000;
            if (v343 >= 0 && v344 >= 0 && v343 <= vLN17179869183) {
              if (v344 === 0 && v343 <= vLN4294967295) {
                p663.push(214, 255, v343 >> 24, v343 >> 16, v343 >> 8, v343);
                return 6;
              } else {
                vLN042 = v343 / 4294967296;
                vLN043 = v343 & -1;
                p663.push(215, 255, v344 >> 22, v344 >> 14, v344 >> 6, vLN042, vLN043 >> 24, vLN043 >> 16, vLN043 >> 8, vLN043);
                return 10;
              }
            } else {
              vLN042 = Math.floor(v343 / 4294967296);
              vLN043 = v343 >>> 0;
              p663.push(199, 12, 255, v344 >> 24, v344 >> 16, v344 >> 8, v344, vLN042 >> 24, vLN042 >> 16, vLN042 >> 8, vLN042, vLN043 >> 24, vLN043 >> 16, vLN043 >> 8, vLN043);
              return 15;
            }
          }
          if (p665 instanceof ArrayBuffer) {
            vLN044 = p665.byteLength;
            if (vLN044 < 256) {
              p663.push(196, vLN044);
              vLN045 = 2;
            } else if (vLN044 < 65536) {
              p663.push(197, vLN044 >> 8, vLN044);
              vLN045 = 3;
            } else if (vLN044 < 4294967296) {
              p663.push(198, vLN044 >> 24, vLN044 >> 16, vLN044 >> 8, vLN044);
              vLN045 = 5;
            } else {
              throw new Error("Buffer too large");
            }
            p664.push({
              _bin: p665,
              _length: vLN044,
              _offset: p663.length
            });
            return vLN045 + vLN044;
          }
          if (typeof p665.toJSON === "function") {
            return f104(p663, p664, p665.toJSON());
          }
          var vA19 = [];
          var vLS5 = "";
          var v345 = Object.keys(p665);
          vLN040 = 0;
          vLN041 = v345.length;
          for (; vLN040 < vLN041; vLN040++) {
            vLS5 = v345[vLN040];
            if (p665[vLS5] !== undefined && typeof p665[vLS5] !== "function") {
              vA19.push(vLS5);
            }
          }
          vLN044 = vA19.length;
          if (vLN044 < 16) {
            p663.push(vLN044 | 128);
            vLN045 = 1;
          } else if (vLN044 < 65536) {
            p663.push(222, vLN044 >> 8, vLN044);
            vLN045 = 3;
          } else if (vLN044 < 4294967296) {
            p663.push(223, vLN044 >> 24, vLN044 >> 16, vLN044 >> 8, vLN044);
            vLN045 = 5;
          } else {
            throw new Error("Object too large");
          }
          for (vLN040 = 0; vLN040 < vLN044; vLN040++) {
            vLS5 = vA19[vLN040];
            vLN045 += f104(p663, p664, vLS5);
            vLN045 += f104(p663, p664, p665[vLS5]);
          }
          return vLN045;
        }
        if (v341 === "boolean") {
          p663.push(p665 ? 195 : 194);
          return 1;
        }
        if (v341 === "undefined") {
          p663.push(192);
          return 1;
        }
        if (typeof p665.toJSON === "function") {
          return f104(p663, p664, p665.toJSON());
        }
        throw new Error("Could not encode");
      }
      function f105(p666) {
        var vA20 = [];
        var vA21 = [];
        var vF104 = f104(vA20, vA21, p666);
        var v346 = new ArrayBuffer(vF104);
        var v347 = new DataView(v346);
        var vLN046 = 0;
        var vLN047 = 0;
        var v348 = -1;
        if (vA21.length > 0) {
          v348 = vA21[0]._offset;
        }
        var v349;
        var vLN048 = 0;
        var vLN049 = 0;
        for (var vLN050 = 0, v350 = vA20.length; vLN050 < v350; vLN050++) {
          v347.setUint8(vLN047 + vLN050, vA20[vLN050]);
          if (vLN050 + 1 !== v348) {
            continue;
          }
          v349 = vA21[vLN046];
          vLN048 = v349._length;
          vLN049 = vLN047 + v348;
          if (v349._bin) {
            var v351 = new Uint8Array(v349._bin);
            for (var vLN051 = 0; vLN051 < vLN048; vLN051++) {
              v347.setUint8(vLN049 + vLN051, v351[vLN051]);
            }
          } else if (v349._str) {
            f102(v347, vLN049, v349._str);
          } else if (v349._float !== undefined) {
            v347.setFloat64(vLN049, v349._float);
          }
          vLN046++;
          vLN047 += vLN048;
          if (vA21[vLN046]) {
            v348 = vA21[vLN046]._offset;
          }
        }
        return v346;
      }
      p647.encode = f105;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/serializer/NoneSerializer.js": (p667, p668) => {
      'use strict';

      Object.defineProperty(p668, "__esModule", {
        value: true
      });
      p668.NoneSerializer = undefined;
      class C9 {
        setState(p669) {}
        getState() {
          return null;
        }
        patch(p670) {}
        teardown() {}
        handshake(p671) {}
      }
      p668.NoneSerializer = C9;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/serializer/SchemaSerializer.js": (p672, p673, p674) => {
      'use strict';

      Object.defineProperty(p673, "__esModule", {
        value: true
      });
      p673.SchemaSerializer = undefined;
      const vP674 = p674("./node_modules/.pnpm/@colyseus+schema@2.0.37/node_modules/@colyseus/schema/build/umd/index.js");
      class C10 {
        setState(p675) {
          return this.state.decode(p675);
        }
        getState() {
          return this.state;
        }
        patch(p676) {
          return this.state.decode(p676);
        }
        teardown() {
          var v352;
          if ((v352 = this.state?.$changes) === null || v352 === undefined) {
            undefined;
          } else {
            v352.root.clearRefs();
          }
        }
        handshake(p677, p678) {
          if (this.state) {
            const v353 = new vP674.Reflection();
            v353.decode(p677, p678);
          } else {
            this.state = vP674.Reflection.decode(p677, p678);
          }
        }
      }
      p673.SchemaSerializer = C10;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/serializer/Serializer.js": (p679, p680) => {
      'use strict';

      Object.defineProperty(p680, "__esModule", {
        value: true
      });
      p680.getSerializer = p680.registerSerializer = undefined;
      const vO16 = {};
      function f106(p681, p682) {
        vO16[p681] = p682;
      }
      p680.registerSerializer = f106;
      function f107(p683) {
        const v354 = vO16[p683];
        if (!v354) {
          throw new Error("missing serializer: " + p683);
        }
        return v354;
      }
      p680.getSerializer = f107;
    },
    "./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/transport/WebSocketTransport.js": function (p684, p685, p686) {
      'use strict';

      var v355 = this && this.__importDefault || function (p687) {
        if (p687 && p687.__esModule) {
          return p687;
        } else {
          return {
            default: p687
          };
        }
      };
      Object.defineProperty(p685, "__esModule", {
        value: true
      });
      p685.WebSocketTransport = undefined;
      const vV355 = v355(p686("./node_modules/.pnpm/ws@8.17.1/node_modules/ws/browser.js"));
      const v356 = globalThis.WebSocket || vV355.default;
      class C11 {
        constructor(p688) {
          this.events = p688;
        }
        send(p689) {
          if (p689 instanceof ArrayBuffer) {
            this.ws.send(p689);
          } else if (Array.isArray(p689)) {
            this.ws.send(new Uint8Array(p689).buffer);
          }
        }
        connect(p690, p691) {
          try {
            this.ws = new v356(p690, {
              headers: p691,
              protocols: this.protocols
            });
          } catch (e11) {
            this.ws = new v356(p690, this.protocols);
          }
          this.ws.binaryType = "arraybuffer";
          this.ws.onopen = this.events.onopen;
          this.ws.onmessage = this.events.onmessage;
          this.ws.onclose = this.events.onclose;
          this.ws.onerror = this.events.onerror;
        }
        close(p692, p693) {
          this.ws.close(p692, p693);
        }
        get isOpen() {
          return this.ws.readyState === v356.OPEN;
        }
      }
      p685.WebSocketTransport = C11;
    },
    "./node_modules/.pnpm/howler@2.2.4/node_modules/howler/dist/howler.js": (p694, p695, p696) => {
      var v357;
      var v358;
      (function () {
        'use strict';

        function f108() {
          this.init();
        }
        f108.prototype = {
          init: function () {
            var v359 = this || v388;
            v359._counter = 1000;
            v359._html5AudioPool = [];
            v359.html5PoolSize = 10;
            v359._codecs = {};
            v359._howls = [];
            v359._muted = false;
            v359._volume = 1;
            v359._canPlayEvent = "canplaythrough";
            v359._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;
            v359.masterGain = null;
            v359.noAudio = false;
            v359.usingWebAudio = true;
            v359.autoSuspend = true;
            v359.ctx = null;
            v359.autoUnlock = true;
            v359._setup();
            return v359;
          },
          volume: function (p697) {
            var v360 = this || v388;
            p697 = parseFloat(p697);
            if (!v360.ctx) {
              f125();
            }
            if (typeof p697 !== "undefined" && p697 >= 0 && p697 <= 1) {
              v360._volume = p697;
              if (v360._muted) {
                return v360;
              }
              if (v360.usingWebAudio) {
                v360.masterGain.gain.setValueAtTime(p697, v388.ctx.currentTime);
              }
              for (var vLN052 = 0; vLN052 < v360._howls.length; vLN052++) {
                if (!v360._howls[vLN052]._webAudio) {
                  var v361 = v360._howls[vLN052]._getSoundIds();
                  for (var vLN053 = 0; vLN053 < v361.length; vLN053++) {
                    var v362 = v360._howls[vLN052]._soundById(v361[vLN053]);
                    if (v362 && v362._node) {
                      v362._node.volume = v362._volume * p697;
                    }
                  }
                }
              }
              return v360;
            }
            return v360._volume;
          },
          mute: function (p698) {
            var v363 = this || v388;
            if (!v363.ctx) {
              f125();
            }
            v363._muted = p698;
            if (v363.usingWebAudio) {
              v363.masterGain.gain.setValueAtTime(p698 ? 0 : v363._volume, v388.ctx.currentTime);
            }
            for (var vLN054 = 0; vLN054 < v363._howls.length; vLN054++) {
              if (!v363._howls[vLN054]._webAudio) {
                var v364 = v363._howls[vLN054]._getSoundIds();
                for (var vLN055 = 0; vLN055 < v364.length; vLN055++) {
                  var v365 = v363._howls[vLN054]._soundById(v364[vLN055]);
                  if (v365 && v365._node) {
                    v365._node.muted = p698 ? true : v365._muted;
                  }
                }
              }
            }
            return v363;
          },
          stop: function () {
            var v366 = this || v388;
            for (var vLN056 = 0; vLN056 < v366._howls.length; vLN056++) {
              v366._howls[vLN056].stop();
            }
            return v366;
          },
          unload: function () {
            var v367 = this || v388;
            for (var v368 = v367._howls.length - 1; v368 >= 0; v368--) {
              v367._howls[v368].unload();
            }
            if (v367.usingWebAudio && v367.ctx && typeof v367.ctx.close !== "undefined") {
              v367.ctx.close();
              v367.ctx = null;
              f125();
            }
            return v367;
          },
          codecs: function (p699) {
            return (this || v388)._codecs[p699.replace(/^x-/, "")];
          },
          _setup: function () {
            var v369 = this || v388;
            v369.state = v369.ctx ? v369.ctx.state || "suspended" : "suspended";
            v369._autoSuspend();
            if (!v369.usingWebAudio) {
              if (typeof Audio !== "undefined") {
                try {
                  var v370 = new Audio();
                  if (typeof v370.oncanplaythrough === "undefined") {
                    v369._canPlayEvent = "canplay";
                  }
                } catch (e12) {
                  v369.noAudio = true;
                }
              } else {
                v369.noAudio = true;
              }
            }
            try {
              var v370 = new Audio();
              if (v370.muted) {
                v369.noAudio = true;
              }
            } catch (e13) {}
            if (!v369.noAudio) {
              v369._setupCodecs();
            }
            return v369;
          },
          _setupCodecs: function () {
            var v371 = this || v388;
            var v372 = null;
            try {
              v372 = typeof Audio !== "undefined" ? new Audio() : null;
            } catch (e14) {
              return v371;
            }
            if (!v372 || typeof v372.canPlayType !== "function") {
              return v371;
            }
            var v373 = v372.canPlayType("audio/mpeg;").replace(/^no$/, "");
            var v374 = v371._navigator ? v371._navigator.userAgent : "";
            var v375 = v374.match(/OPR\/(\d+)/g);
            var v376 = v375 && parseInt(v375[0].split("/")[1], 10) < 33;
            var v377 = v374.indexOf("Safari") !== -1 && v374.indexOf("Chrome") === -1;
            var v378 = v374.match(/Version\/(.*?) /);
            var v379 = v377 && v378 && parseInt(v378[1], 10) < 15;
            v371._codecs = {
              mp3: !v376 && (!!v373 || !!v372.canPlayType("audio/mp3;").replace(/^no$/, "")),
              mpeg: !!v373,
              opus: !!v372.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ""),
              ogg: !!v372.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
              oga: !!v372.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
              wav: !!(v372.canPlayType("audio/wav; codecs=\"1\"") || v372.canPlayType("audio/wav")).replace(/^no$/, ""),
              aac: !!v372.canPlayType("audio/aac;").replace(/^no$/, ""),
              caf: !!v372.canPlayType("audio/x-caf;").replace(/^no$/, ""),
              m4a: !!(v372.canPlayType("audio/x-m4a;") || v372.canPlayType("audio/m4a;") || v372.canPlayType("audio/aac;")).replace(/^no$/, ""),
              m4b: !!(v372.canPlayType("audio/x-m4b;") || v372.canPlayType("audio/m4b;") || v372.canPlayType("audio/aac;")).replace(/^no$/, ""),
              mp4: !!(v372.canPlayType("audio/x-mp4;") || v372.canPlayType("audio/mp4;") || v372.canPlayType("audio/aac;")).replace(/^no$/, ""),
              weba: !v379 && !!v372.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
              webm: !v379 && !!v372.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
              dolby: !!v372.canPlayType("audio/mp4; codecs=\"ec-3\"").replace(/^no$/, ""),
              flac: !!(v372.canPlayType("audio/x-flac;") || v372.canPlayType("audio/flac;")).replace(/^no$/, "")
            };
            return v371;
          },
          _unlockAudio: function () {
            var v380 = this || v388;
            if (v380._audioUnlocked || !v380.ctx) {
              return;
            }
            v380._audioUnlocked = false;
            v380.autoUnlock = false;
            if (!v380._mobileUnloaded && v380.ctx.sampleRate !== 44100) {
              v380._mobileUnloaded = true;
              v380.unload();
            }
            v380._scratchBuffer = v380.ctx.createBuffer(1, 1, 22050);
            function f109(p700) {
              while (v380._html5AudioPool.length < v380.html5PoolSize) {
                try {
                  var v381 = new Audio();
                  v381._unlocked = true;
                  v380._releaseHtml5Audio(v381);
                } catch (e15) {
                  v380.noAudio = true;
                  break;
                }
              }
              for (var vLN057 = 0; vLN057 < v380._howls.length; vLN057++) {
                if (!v380._howls[vLN057]._webAudio) {
                  var v382 = v380._howls[vLN057]._getSoundIds();
                  for (var vLN058 = 0; vLN058 < v382.length; vLN058++) {
                    var v383 = v380._howls[vLN057]._soundById(v382[vLN058]);
                    if (v383 && v383._node && !v383._node._unlocked) {
                      v383._node._unlocked = true;
                      v383._node.load();
                    }
                  }
                }
              }
              v380._autoResume();
              var v384 = v380.ctx.createBufferSource();
              v384.buffer = v380._scratchBuffer;
              v384.connect(v380.ctx.destination);
              if (typeof v384.start === "undefined") {
                v384.noteOn(0);
              } else {
                v384.start(0);
              }
              if (typeof v380.ctx.resume === "function") {
                v380.ctx.resume();
              }
              v384.onended = function () {
                v384.disconnect(0);
                v380._audioUnlocked = true;
                document.removeEventListener("touchstart", f109, true);
                document.removeEventListener("touchend", f109, true);
                document.removeEventListener("click", f109, true);
                document.removeEventListener("keydown", f109, true);
                for (var vLN059 = 0; vLN059 < v380._howls.length; vLN059++) {
                  v380._howls[vLN059]._emit("unlock");
                }
              };
            }
            document.addEventListener("touchstart", f109, true);
            document.addEventListener("touchend", f109, true);
            document.addEventListener("click", f109, true);
            document.addEventListener("keydown", f109, true);
            return v380;
          },
          _obtainHtml5Audio: function () {
            var v385 = this || v388;
            if (v385._html5AudioPool.length) {
              return v385._html5AudioPool.pop();
            }
            var v386 = new Audio().play();
            if (v386 && typeof Promise !== "undefined" && (v386 instanceof Promise || typeof v386.then === "function")) {
              v386.catch(function () {
                console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
              });
            }
            return new Audio();
          },
          _releaseHtml5Audio: function (p701) {
            var v387 = this || v388;
            if (p701._unlocked) {
              v387._html5AudioPool.push(p701);
            }
            return v387;
          },
          _autoSuspend: function () {
            var vThis17 = this;
            if (!vThis17.autoSuspend || !vThis17.ctx || typeof vThis17.ctx.suspend === "undefined" || !v388.usingWebAudio) {
              return;
            }
            for (var vLN060 = 0; vLN060 < vThis17._howls.length; vLN060++) {
              if (vThis17._howls[vLN060]._webAudio) {
                for (var vLN061 = 0; vLN061 < vThis17._howls[vLN060]._sounds.length; vLN061++) {
                  if (!vThis17._howls[vLN060]._sounds[vLN061]._paused) {
                    return vThis17;
                  }
                }
              }
            }
            if (vThis17._suspendTimer) {
              clearTimeout(vThis17._suspendTimer);
            }
            vThis17._suspendTimer = setTimeout(function () {
              if (!vThis17.autoSuspend) {
                return;
              }
              vThis17._suspendTimer = null;
              vThis17.state = "suspending";
              function f110() {
                vThis17.state = "suspended";
                if (vThis17._resumeAfterSuspend) {
                  delete vThis17._resumeAfterSuspend;
                  vThis17._autoResume();
                }
              }
              vThis17.ctx.suspend().then(f110, f110);
            }, 30000);
            return vThis17;
          },
          _autoResume: function () {
            var vThis18 = this;
            if (!vThis18.ctx || typeof vThis18.ctx.resume === "undefined" || !v388.usingWebAudio) {
              return;
            }
            if (vThis18.state === "running" && vThis18.ctx.state !== "interrupted" && vThis18._suspendTimer) {
              clearTimeout(vThis18._suspendTimer);
              vThis18._suspendTimer = null;
            } else if (vThis18.state === "suspended" || vThis18.state === "running" && vThis18.ctx.state === "interrupted") {
              vThis18.ctx.resume().then(function () {
                vThis18.state = "running";
                for (var vLN062 = 0; vLN062 < vThis18._howls.length; vLN062++) {
                  vThis18._howls[vLN062]._emit("resume");
                }
              });
              if (vThis18._suspendTimer) {
                clearTimeout(vThis18._suspendTimer);
                vThis18._suspendTimer = null;
              }
            } else if (vThis18.state === "suspending") {
              vThis18._resumeAfterSuspend = true;
            }
            return vThis18;
          }
        };
        var v388 = new f108();
        function f111(p702) {
          var vThis19 = this;
          if (!p702.src || p702.src.length === 0) {
            console.error("An array of source files must be passed with any new Howl.");
            return;
          }
          vThis19.init(p702);
        }
        f111.prototype = {
          init: function (p703) {
            var vThis20 = this;
            if (!v388.ctx) {
              f125();
            }
            vThis20._autoplay = p703.autoplay || false;
            vThis20._format = typeof p703.format !== "string" ? p703.format : [p703.format];
            vThis20._html5 = p703.html5 || false;
            vThis20._muted = p703.mute || false;
            vThis20._loop = p703.loop || false;
            vThis20._pool = p703.pool || 5;
            vThis20._preload = typeof p703.preload === "boolean" || p703.preload === "metadata" ? p703.preload : true;
            vThis20._rate = p703.rate || 1;
            vThis20._sprite = p703.sprite || {};
            vThis20._src = typeof p703.src !== "string" ? p703.src : [p703.src];
            vThis20._volume = p703.volume !== undefined ? p703.volume : 1;
            vThis20._xhr = {
              method: p703.xhr && p703.xhr.method ? p703.xhr.method : "GET",
              headers: p703.xhr && p703.xhr.headers ? p703.xhr.headers : null,
              withCredentials: p703.xhr && p703.xhr.withCredentials ? p703.xhr.withCredentials : false
            };
            vThis20._duration = 0;
            vThis20._state = "unloaded";
            vThis20._sounds = [];
            vThis20._endTimers = {};
            vThis20._queue = [];
            vThis20._playLock = false;
            vThis20._onend = p703.onend ? [{
              fn: p703.onend
            }] : [];
            vThis20._onfade = p703.onfade ? [{
              fn: p703.onfade
            }] : [];
            vThis20._onload = p703.onload ? [{
              fn: p703.onload
            }] : [];
            vThis20._onloaderror = p703.onloaderror ? [{
              fn: p703.onloaderror
            }] : [];
            vThis20._onplayerror = p703.onplayerror ? [{
              fn: p703.onplayerror
            }] : [];
            vThis20._onpause = p703.onpause ? [{
              fn: p703.onpause
            }] : [];
            vThis20._onplay = p703.onplay ? [{
              fn: p703.onplay
            }] : [];
            vThis20._onstop = p703.onstop ? [{
              fn: p703.onstop
            }] : [];
            vThis20._onmute = p703.onmute ? [{
              fn: p703.onmute
            }] : [];
            vThis20._onvolume = p703.onvolume ? [{
              fn: p703.onvolume
            }] : [];
            vThis20._onrate = p703.onrate ? [{
              fn: p703.onrate
            }] : [];
            vThis20._onseek = p703.onseek ? [{
              fn: p703.onseek
            }] : [];
            vThis20._onunlock = p703.onunlock ? [{
              fn: p703.onunlock
            }] : [];
            vThis20._onresume = [];
            vThis20._webAudio = v388.usingWebAudio && !vThis20._html5;
            if (typeof v388.ctx !== "undefined" && v388.ctx && v388.autoUnlock) {
              v388._unlockAudio();
            }
            v388._howls.push(vThis20);
            if (vThis20._autoplay) {
              vThis20._queue.push({
                event: "play",
                action: function () {
                  vThis20.play();
                }
              });
            }
            if (vThis20._preload && vThis20._preload !== "none") {
              vThis20.load();
            }
            return vThis20;
          },
          load: function () {
            var vThis21 = this;
            var v389 = null;
            if (v388.noAudio) {
              vThis21._emit("loaderror", null, "No audio support.");
              return;
            }
            if (typeof vThis21._src === "string") {
              vThis21._src = [vThis21._src];
            }
            for (var vLN063 = 0; vLN063 < vThis21._src.length; vLN063++) {
              var v390;
              var v391;
              if (vThis21._format && vThis21._format[vLN063]) {
                v390 = vThis21._format[vLN063];
              } else {
                v391 = vThis21._src[vLN063];
                if (typeof v391 !== "string") {
                  vThis21._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue;
                }
                v390 = /^data:audio\/([^;,]+);/i.exec(v391);
                if (!v390) {
                  v390 = /\.([^.]+)$/.exec(v391.split("?", 1)[0]);
                }
                v390 &&= v390[1].toLowerCase();
              }
              if (!v390) {
                console.warn("No file extension was found. Consider using the \"format\" property or specify an extension.");
              }
              if (v390 && v388.codecs(v390)) {
                v389 = vThis21._src[vLN063];
                break;
              }
            }
            if (!v389) {
              vThis21._emit("loaderror", null, "No codec support for selected audio sources.");
              return;
            }
            vThis21._src = v389;
            vThis21._state = "loading";
            if (window.location.protocol === "https:" && v389.slice(0, 5) === "http:") {
              vThis21._html5 = true;
              vThis21._webAudio = false;
            }
            new f118(vThis21);
            if (vThis21._webAudio) {
              f119(vThis21);
            }
            return vThis21;
          },
          play: function (p704, p705) {
            var vThis22 = this;
            var v392 = null;
            if (typeof p704 === "number") {
              v392 = p704;
              p704 = null;
            } else if (typeof p704 === "string" && vThis22._state === "loaded" && !vThis22._sprite[p704]) {
              return null;
            } else if (typeof p704 === "undefined") {
              p704 = "__default";
              if (!vThis22._playLock) {
                var vLN064 = 0;
                for (var vLN065 = 0; vLN065 < vThis22._sounds.length; vLN065++) {
                  if (vThis22._sounds[vLN065]._paused && !vThis22._sounds[vLN065]._ended) {
                    vLN064++;
                    v392 = vThis22._sounds[vLN065]._id;
                  }
                }
                if (vLN064 === 1) {
                  p704 = null;
                } else {
                  v392 = null;
                }
              }
            }
            var v393 = v392 ? vThis22._soundById(v392) : vThis22._inactiveSound();
            if (!v393) {
              return null;
            }
            if (v392 && !p704) {
              p704 = v393._sprite || "__default";
            }
            if (vThis22._state !== "loaded") {
              v393._sprite = p704;
              v393._ended = false;
              var v394 = v393._id;
              vThis22._queue.push({
                event: "play",
                action: function () {
                  vThis22.play(v394);
                }
              });
              return v394;
            }
            if (v392 && !v393._paused) {
              if (!p705) {
                vThis22._loadQueue("play");
              }
              return v393._id;
            }
            if (vThis22._webAudio) {
              v388._autoResume();
            }
            var v395 = Math.max(0, v393._seek > 0 ? v393._seek : vThis22._sprite[p704][0] / 1000);
            var v396 = Math.max(0, (vThis22._sprite[p704][0] + vThis22._sprite[p704][1]) / 1000 - v395);
            var v397 = v396 * 1000 / Math.abs(v393._rate);
            var v398 = vThis22._sprite[p704][0] / 1000;
            var v399 = (vThis22._sprite[p704][0] + vThis22._sprite[p704][1]) / 1000;
            v393._sprite = p704;
            v393._ended = false;
            function f112() {
              v393._paused = false;
              v393._seek = v395;
              v393._start = v398;
              v393._stop = v399;
              v393._loop = !!v393._loop || !!vThis22._sprite[p704][2];
            }
            if (v395 >= v399) {
              vThis22._ended(v393);
              return;
            }
            var v400 = v393._node;
            if (vThis22._webAudio) {
              function f113() {
                vThis22._playLock = false;
                f112();
                vThis22._refreshBuffer(v393);
                var v401 = v393._muted || vThis22._muted ? 0 : v393._volume;
                v400.gain.setValueAtTime(v401, v388.ctx.currentTime);
                v393._playStart = v388.ctx.currentTime;
                if (typeof v400.bufferSource.start === "undefined") {
                  if (v393._loop) {
                    v400.bufferSource.noteGrainOn(0, v395, 86400);
                  } else {
                    v400.bufferSource.noteGrainOn(0, v395, v396);
                  }
                } else if (v393._loop) {
                  v400.bufferSource.start(0, v395, 86400);
                } else {
                  v400.bufferSource.start(0, v395, v396);
                }
                if (v397 !== Infinity) {
                  vThis22._endTimers[v393._id] = setTimeout(vThis22._ended.bind(vThis22, v393), v397);
                }
                if (!p705) {
                  setTimeout(function () {
                    vThis22._emit("play", v393._id);
                    vThis22._loadQueue();
                  }, 0);
                }
              }
              if (v388.state === "running" && v388.ctx.state !== "interrupted") {
                f113();
              } else {
                vThis22._playLock = true;
                vThis22.once("resume", f113);
                vThis22._clearTimer(v393._id);
              }
            } else {
              function f114() {
                v400.currentTime = v395;
                v400.muted = v393._muted || vThis22._muted || v388._muted || v400.muted;
                v400.volume = v393._volume * v388.volume();
                v400.playbackRate = v393._rate;
                try {
                  var v402 = v400.play();
                  if (v402 && typeof Promise !== "undefined" && (v402 instanceof Promise || typeof v402.then === "function")) {
                    vThis22._playLock = true;
                    f112();
                    v402.then(function () {
                      vThis22._playLock = false;
                      v400._unlocked = true;
                      if (!p705) {
                        vThis22._emit("play", v393._id);
                      } else {
                        vThis22._loadQueue();
                      }
                    }).catch(function () {
                      vThis22._playLock = false;
                      vThis22._emit("playerror", v393._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                      v393._ended = true;
                      v393._paused = true;
                    });
                  } else if (!p705) {
                    vThis22._playLock = false;
                    f112();
                    vThis22._emit("play", v393._id);
                  }
                  v400.playbackRate = v393._rate;
                  if (v400.paused) {
                    vThis22._emit("playerror", v393._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                    return;
                  }
                  if (p704 !== "__default" || v393._loop) {
                    vThis22._endTimers[v393._id] = setTimeout(vThis22._ended.bind(vThis22, v393), v397);
                  } else {
                    vThis22._endTimers[v393._id] = function () {
                      vThis22._ended(v393);
                      v400.removeEventListener("ended", vThis22._endTimers[v393._id], false);
                    };
                    v400.addEventListener("ended", vThis22._endTimers[v393._id], false);
                  }
                } catch (e16) {
                  vThis22._emit("playerror", v393._id, e16);
                }
              }
              if (v400.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA") {
                v400.src = vThis22._src;
                v400.load();
              }
              var v403 = window && window.ejecta || !v400.readyState && v388._navigator.isCocoonJS;
              if (v400.readyState >= 3 || v403) {
                f114();
              } else {
                vThis22._playLock = true;
                vThis22._state = "loading";
                function f115() {
                  vThis22._state = "loaded";
                  f114();
                  v400.removeEventListener(v388._canPlayEvent, f115, false);
                }
                v400.addEventListener(v388._canPlayEvent, f115, false);
                vThis22._clearTimer(v393._id);
              }
            }
            return v393._id;
          },
          pause: function (p706) {
            var vThis23 = this;
            if (vThis23._state !== "loaded" || vThis23._playLock) {
              vThis23._queue.push({
                event: "pause",
                action: function () {
                  vThis23.pause(p706);
                }
              });
              return vThis23;
            }
            var v404 = vThis23._getSoundIds(p706);
            for (var vLN066 = 0; vLN066 < v404.length; vLN066++) {
              vThis23._clearTimer(v404[vLN066]);
              var v405 = vThis23._soundById(v404[vLN066]);
              if (v405 && !v405._paused) {
                v405._seek = vThis23.seek(v404[vLN066]);
                v405._rateSeek = 0;
                v405._paused = true;
                vThis23._stopFade(v404[vLN066]);
                if (v405._node) {
                  if (vThis23._webAudio) {
                    if (!v405._node.bufferSource) {
                      continue;
                    }
                    if (typeof v405._node.bufferSource.stop === "undefined") {
                      v405._node.bufferSource.noteOff(0);
                    } else {
                      v405._node.bufferSource.stop(0);
                    }
                    vThis23._cleanBuffer(v405._node);
                  } else if (!isNaN(v405._node.duration) || v405._node.duration === Infinity) {
                    v405._node.pause();
                  }
                }
              }
              if (!arguments[1]) {
                vThis23._emit("pause", v405 ? v405._id : null);
              }
            }
            return vThis23;
          },
          stop: function (p707, p708) {
            var vThis24 = this;
            if (vThis24._state !== "loaded" || vThis24._playLock) {
              vThis24._queue.push({
                event: "stop",
                action: function () {
                  vThis24.stop(p707);
                }
              });
              return vThis24;
            }
            var v406 = vThis24._getSoundIds(p707);
            for (var vLN067 = 0; vLN067 < v406.length; vLN067++) {
              vThis24._clearTimer(v406[vLN067]);
              var v407 = vThis24._soundById(v406[vLN067]);
              if (v407) {
                v407._seek = v407._start || 0;
                v407._rateSeek = 0;
                v407._paused = true;
                v407._ended = true;
                vThis24._stopFade(v406[vLN067]);
                if (v407._node) {
                  if (vThis24._webAudio) {
                    if (v407._node.bufferSource) {
                      if (typeof v407._node.bufferSource.stop === "undefined") {
                        v407._node.bufferSource.noteOff(0);
                      } else {
                        v407._node.bufferSource.stop(0);
                      }
                      vThis24._cleanBuffer(v407._node);
                    }
                  } else if (!isNaN(v407._node.duration) || v407._node.duration === Infinity) {
                    v407._node.currentTime = v407._start || 0;
                    v407._node.pause();
                    if (v407._node.duration === Infinity) {
                      vThis24._clearSound(v407._node);
                    }
                  }
                }
                if (!p708) {
                  vThis24._emit("stop", v407._id);
                }
              }
            }
            return vThis24;
          },
          mute: function (p709, p710) {
            var vThis25 = this;
            if (vThis25._state !== "loaded" || vThis25._playLock) {
              vThis25._queue.push({
                event: "mute",
                action: function () {
                  vThis25.mute(p709, p710);
                }
              });
              return vThis25;
            }
            if (typeof p710 === "undefined") {
              if (typeof p709 === "boolean") {
                vThis25._muted = p709;
              } else {
                return vThis25._muted;
              }
            }
            var v408 = vThis25._getSoundIds(p710);
            for (var vLN068 = 0; vLN068 < v408.length; vLN068++) {
              var v409 = vThis25._soundById(v408[vLN068]);
              if (v409) {
                v409._muted = p709;
                if (v409._interval) {
                  vThis25._stopFade(v409._id);
                }
                if (vThis25._webAudio && v409._node) {
                  v409._node.gain.setValueAtTime(p709 ? 0 : v409._volume, v388.ctx.currentTime);
                } else if (v409._node) {
                  v409._node.muted = v388._muted ? true : p709;
                }
                vThis25._emit("mute", v409._id);
              }
            }
            return vThis25;
          },
          volume: function () {
            var vThis26 = this;
            var vArguments = arguments;
            var v410;
            var v411;
            if (vArguments.length === 0) {
              return vThis26._volume;
            } else if (vArguments.length === 1 || vArguments.length === 2 && typeof vArguments[1] === "undefined") {
              var v412 = vThis26._getSoundIds();
              var v413 = v412.indexOf(vArguments[0]);
              if (v413 >= 0) {
                v411 = parseInt(vArguments[0], 10);
              } else {
                v410 = parseFloat(vArguments[0]);
              }
            } else if (vArguments.length >= 2) {
              v410 = parseFloat(vArguments[0]);
              v411 = parseInt(vArguments[1], 10);
            }
            var v414;
            if (typeof v410 !== "undefined" && v410 >= 0 && v410 <= 1) {
              if (vThis26._state !== "loaded" || vThis26._playLock) {
                vThis26._queue.push({
                  event: "volume",
                  action: function () {
                    vThis26.volume.apply(vThis26, vArguments);
                  }
                });
                return vThis26;
              }
              if (typeof v411 === "undefined") {
                vThis26._volume = v410;
              }
              v411 = vThis26._getSoundIds(v411);
              for (var vLN069 = 0; vLN069 < v411.length; vLN069++) {
                v414 = vThis26._soundById(v411[vLN069]);
                if (v414) {
                  v414._volume = v410;
                  if (!vArguments[2]) {
                    vThis26._stopFade(v411[vLN069]);
                  }
                  if (vThis26._webAudio && v414._node && !v414._muted) {
                    v414._node.gain.setValueAtTime(v410, v388.ctx.currentTime);
                  } else if (v414._node && !v414._muted) {
                    v414._node.volume = v410 * v388.volume();
                  }
                  vThis26._emit("volume", v414._id);
                }
              }
            } else {
              v414 = v411 ? vThis26._soundById(v411) : vThis26._sounds[0];
              if (v414) {
                return v414._volume;
              } else {
                return 0;
              }
            }
            return vThis26;
          },
          fade: function (p711, p712, p713, p714) {
            var vThis27 = this;
            if (vThis27._state !== "loaded" || vThis27._playLock) {
              vThis27._queue.push({
                event: "fade",
                action: function () {
                  vThis27.fade(p711, p712, p713, p714);
                }
              });
              return vThis27;
            }
            p711 = Math.min(Math.max(0, parseFloat(p711)), 1);
            p712 = Math.min(Math.max(0, parseFloat(p712)), 1);
            p713 = parseFloat(p713);
            vThis27.volume(p711, p714);
            var v415 = vThis27._getSoundIds(p714);
            for (var vLN070 = 0; vLN070 < v415.length; vLN070++) {
              var v416 = vThis27._soundById(v415[vLN070]);
              if (v416) {
                if (!p714) {
                  vThis27._stopFade(v415[vLN070]);
                }
                if (vThis27._webAudio && !v416._muted) {
                  var v417 = v388.ctx.currentTime;
                  var v418 = v417 + p713 / 1000;
                  v416._volume = p711;
                  v416._node.gain.setValueAtTime(p711, v417);
                  v416._node.gain.linearRampToValueAtTime(p712, v418);
                }
                vThis27._startFadeInterval(v416, p711, p712, p713, v415[vLN070], typeof p714 === "undefined");
              }
            }
            return vThis27;
          },
          _startFadeInterval: function (p715, p716, p717, p718, p719, p720) {
            var vThis28 = this;
            var vP716 = p716;
            var v419 = p717 - p716;
            var v420 = Math.abs(v419 / 0.01);
            var v421 = Math.max(4, v420 > 0 ? p718 / v420 : p718);
            var v422 = Date.now();
            p715._fadeTo = p717;
            p715._interval = setInterval(function () {
              var v423 = (Date.now() - v422) / p718;
              v422 = Date.now();
              vP716 += v419 * v423;
              vP716 = Math.round(vP716 * 100) / 100;
              if (v419 < 0) {
                vP716 = Math.max(p717, vP716);
              } else {
                vP716 = Math.min(p717, vP716);
              }
              if (vThis28._webAudio) {
                p715._volume = vP716;
              } else {
                vThis28.volume(vP716, p715._id, true);
              }
              if (p720) {
                vThis28._volume = vP716;
              }
              if (p717 < p716 && vP716 <= p717 || p717 > p716 && vP716 >= p717) {
                clearInterval(p715._interval);
                p715._interval = null;
                p715._fadeTo = null;
                vThis28.volume(p717, p715._id);
                vThis28._emit("fade", p715._id);
              }
            }, v421);
          },
          _stopFade: function (p721) {
            var vThis29 = this;
            var v424 = vThis29._soundById(p721);
            if (v424 && v424._interval) {
              if (vThis29._webAudio) {
                v424._node.gain.cancelScheduledValues(v388.ctx.currentTime);
              }
              clearInterval(v424._interval);
              v424._interval = null;
              vThis29.volume(v424._fadeTo, p721);
              v424._fadeTo = null;
              vThis29._emit("fade", p721);
            }
            return vThis29;
          },
          loop: function () {
            var vThis30 = this;
            var vArguments2 = arguments;
            var v425;
            var v426;
            var v427;
            if (vArguments2.length === 0) {
              return vThis30._loop;
            } else if (vArguments2.length === 1) {
              if (typeof vArguments2[0] === "boolean") {
                v425 = vArguments2[0];
                vThis30._loop = v425;
              } else {
                v427 = vThis30._soundById(parseInt(vArguments2[0], 10));
                if (v427) {
                  return v427._loop;
                } else {
                  return false;
                }
              }
            } else if (vArguments2.length === 2) {
              v425 = vArguments2[0];
              v426 = parseInt(vArguments2[1], 10);
            }
            var v428 = vThis30._getSoundIds(v426);
            for (var vLN071 = 0; vLN071 < v428.length; vLN071++) {
              v427 = vThis30._soundById(v428[vLN071]);
              if (v427) {
                v427._loop = v425;
                if (vThis30._webAudio && v427._node && v427._node.bufferSource) {
                  v427._node.bufferSource.loop = v425;
                  if (v425) {
                    v427._node.bufferSource.loopStart = v427._start || 0;
                    v427._node.bufferSource.loopEnd = v427._stop;
                    if (vThis30.playing(v428[vLN071])) {
                      vThis30.pause(v428[vLN071], true);
                      vThis30.play(v428[vLN071], true);
                    }
                  }
                }
              }
            }
            return vThis30;
          },
          rate: function () {
            var vThis31 = this;
            var vArguments3 = arguments;
            var v429;
            var v430;
            if (vArguments3.length === 0) {
              v430 = vThis31._sounds[0]._id;
            } else if (vArguments3.length === 1) {
              var v431 = vThis31._getSoundIds();
              var v432 = v431.indexOf(vArguments3[0]);
              if (v432 >= 0) {
                v430 = parseInt(vArguments3[0], 10);
              } else {
                v429 = parseFloat(vArguments3[0]);
              }
            } else if (vArguments3.length === 2) {
              v429 = parseFloat(vArguments3[0]);
              v430 = parseInt(vArguments3[1], 10);
            }
            var v433;
            if (typeof v429 === "number") {
              if (vThis31._state !== "loaded" || vThis31._playLock) {
                vThis31._queue.push({
                  event: "rate",
                  action: function () {
                    vThis31.rate.apply(vThis31, vArguments3);
                  }
                });
                return vThis31;
              }
              if (typeof v430 === "undefined") {
                vThis31._rate = v429;
              }
              v430 = vThis31._getSoundIds(v430);
              for (var vLN072 = 0; vLN072 < v430.length; vLN072++) {
                v433 = vThis31._soundById(v430[vLN072]);
                if (v433) {
                  if (vThis31.playing(v430[vLN072])) {
                    v433._rateSeek = vThis31.seek(v430[vLN072]);
                    v433._playStart = vThis31._webAudio ? v388.ctx.currentTime : v433._playStart;
                  }
                  v433._rate = v429;
                  if (vThis31._webAudio && v433._node && v433._node.bufferSource) {
                    v433._node.bufferSource.playbackRate.setValueAtTime(v429, v388.ctx.currentTime);
                  } else if (v433._node) {
                    v433._node.playbackRate = v429;
                  }
                  var v434 = vThis31.seek(v430[vLN072]);
                  var v435 = (vThis31._sprite[v433._sprite][0] + vThis31._sprite[v433._sprite][1]) / 1000 - v434;
                  var v436 = v435 * 1000 / Math.abs(v433._rate);
                  if (vThis31._endTimers[v430[vLN072]] || !v433._paused) {
                    vThis31._clearTimer(v430[vLN072]);
                    vThis31._endTimers[v430[vLN072]] = setTimeout(vThis31._ended.bind(vThis31, v433), v436);
                  }
                  vThis31._emit("rate", v433._id);
                }
              }
            } else {
              v433 = vThis31._soundById(v430);
              if (v433) {
                return v433._rate;
              } else {
                return vThis31._rate;
              }
            }
            return vThis31;
          },
          seek: function () {
            var vThis32 = this;
            var vArguments4 = arguments;
            var v437;
            var v438;
            if (vArguments4.length === 0) {
              if (vThis32._sounds.length) {
                v438 = vThis32._sounds[0]._id;
              }
            } else if (vArguments4.length === 1) {
              var v439 = vThis32._getSoundIds();
              var v440 = v439.indexOf(vArguments4[0]);
              if (v440 >= 0) {
                v438 = parseInt(vArguments4[0], 10);
              } else if (vThis32._sounds.length) {
                v438 = vThis32._sounds[0]._id;
                v437 = parseFloat(vArguments4[0]);
              }
            } else if (vArguments4.length === 2) {
              v437 = parseFloat(vArguments4[0]);
              v438 = parseInt(vArguments4[1], 10);
            }
            if (typeof v438 === "undefined") {
              return 0;
            }
            if (typeof v437 === "number" && (vThis32._state !== "loaded" || vThis32._playLock)) {
              vThis32._queue.push({
                event: "seek",
                action: function () {
                  vThis32.seek.apply(vThis32, vArguments4);
                }
              });
              return vThis32;
            }
            var v441 = vThis32._soundById(v438);
            if (v441) {
              if (typeof v437 === "number" && v437 >= 0) {
                var v442 = vThis32.playing(v438);
                if (v442) {
                  vThis32.pause(v438, true);
                }
                v441._seek = v437;
                v441._ended = false;
                vThis32._clearTimer(v438);
                if (!vThis32._webAudio && v441._node && !isNaN(v441._node.duration)) {
                  v441._node.currentTime = v437;
                }
                function f116() {
                  if (v442) {
                    vThis32.play(v438, true);
                  }
                  vThis32._emit("seek", v438);
                }
                if (v442 && !vThis32._webAudio) {
                  function f117() {
                    if (!vThis32._playLock) {
                      f116();
                    } else {
                      setTimeout(f117, 0);
                    }
                  }
                  setTimeout(f117, 0);
                } else {
                  f116();
                }
              } else if (vThis32._webAudio) {
                var v443 = vThis32.playing(v438) ? v388.ctx.currentTime - v441._playStart : 0;
                var v444 = v441._rateSeek ? v441._rateSeek - v441._seek : 0;
                return v441._seek + (v444 + v443 * Math.abs(v441._rate));
              } else {
                return v441._node.currentTime;
              }
            }
            return vThis32;
          },
          playing: function (p722) {
            var vThis33 = this;
            if (typeof p722 === "number") {
              var v445 = vThis33._soundById(p722);
              if (v445) {
                return !v445._paused;
              } else {
                return false;
              }
            }
            for (var vLN073 = 0; vLN073 < vThis33._sounds.length; vLN073++) {
              if (!vThis33._sounds[vLN073]._paused) {
                return true;
              }
            }
            return false;
          },
          duration: function (p723) {
            var vThis34 = this;
            var v446 = vThis34._duration;
            var v447 = vThis34._soundById(p723);
            if (v447) {
              v446 = vThis34._sprite[v447._sprite][1] / 1000;
            }
            return v446;
          },
          state: function () {
            return this._state;
          },
          unload: function () {
            var vThis35 = this;
            var v448 = vThis35._sounds;
            for (var vLN074 = 0; vLN074 < v448.length; vLN074++) {
              if (!v448[vLN074]._paused) {
                vThis35.stop(v448[vLN074]._id);
              }
              if (!vThis35._webAudio) {
                vThis35._clearSound(v448[vLN074]._node);
                v448[vLN074]._node.removeEventListener("error", v448[vLN074]._errorFn, false);
                v448[vLN074]._node.removeEventListener(v388._canPlayEvent, v448[vLN074]._loadFn, false);
                v448[vLN074]._node.removeEventListener("ended", v448[vLN074]._endFn, false);
                v388._releaseHtml5Audio(v448[vLN074]._node);
              }
              delete v448[vLN074]._node;
              vThis35._clearTimer(v448[vLN074]._id);
            }
            var v449 = v388._howls.indexOf(vThis35);
            if (v449 >= 0) {
              v388._howls.splice(v449, 1);
            }
            var v450 = true;
            for (vLN074 = 0; vLN074 < v388._howls.length; vLN074++) {
              if (v388._howls[vLN074]._src === vThis35._src || vThis35._src.indexOf(v388._howls[vLN074]._src) >= 0) {
                v450 = false;
                break;
              }
            }
            if (vO17 && v450) {
              delete vO17[vThis35._src];
            }
            v388.noAudio = false;
            vThis35._state = "unloaded";
            vThis35._sounds = [];
            vThis35 = null;
            return null;
          },
          on: function (p724, p725, p726, p727) {
            var vThis36 = this;
            var v451 = vThis36["_on" + p724];
            if (typeof p725 === "function") {
              v451.push(p727 ? {
                id: p726,
                fn: p725,
                once: p727
              } : {
                id: p726,
                fn: p725
              });
            }
            return vThis36;
          },
          off: function (p728, p729, p730) {
            var vThis37 = this;
            var v452 = vThis37["_on" + p728];
            var vLN075 = 0;
            if (typeof p729 === "number") {
              p730 = p729;
              p729 = null;
            }
            if (p729 || p730) {
              for (vLN075 = 0; vLN075 < v452.length; vLN075++) {
                var v453 = p730 === v452[vLN075].id;
                if (p729 === v452[vLN075].fn && v453 || !p729 && v453) {
                  v452.splice(vLN075, 1);
                  break;
                }
              }
            } else if (p728) {
              vThis37["_on" + p728] = [];
            } else {
              var v454 = Object.keys(vThis37);
              for (vLN075 = 0; vLN075 < v454.length; vLN075++) {
                if (v454[vLN075].indexOf("_on") === 0 && Array.isArray(vThis37[v454[vLN075]])) {
                  vThis37[v454[vLN075]] = [];
                }
              }
            }
            return vThis37;
          },
          once: function (p731, p732, p733) {
            var vThis38 = this;
            vThis38.on(p731, p732, p733, 1);
            return vThis38;
          },
          _emit: function (p734, p735, p736) {
            var vThis39 = this;
            var v455 = vThis39["_on" + p734];
            for (var v456 = v455.length - 1; v456 >= 0; v456--) {
              if (!v455[v456].id || v455[v456].id === p735 || p734 === "load") {
                setTimeout(function (p737) {
                  p737.call(this, p735, p736);
                }.bind(vThis39, v455[v456].fn), 0);
                if (v455[v456].once) {
                  vThis39.off(p734, v455[v456].fn, v455[v456].id);
                }
              }
            }
            vThis39._loadQueue(p734);
            return vThis39;
          },
          _loadQueue: function (p738) {
            var vThis40 = this;
            if (vThis40._queue.length > 0) {
              var v457 = vThis40._queue[0];
              if (v457.event === p738) {
                vThis40._queue.shift();
                vThis40._loadQueue();
              }
              if (!p738) {
                v457.action();
              }
            }
            return vThis40;
          },
          _ended: function (p739) {
            var vThis41 = this;
            var v458 = p739._sprite;
            if (!vThis41._webAudio && p739._node && !p739._node.paused && !p739._node.ended && p739._node.currentTime < p739._stop) {
              setTimeout(vThis41._ended.bind(vThis41, p739), 100);
              return vThis41;
            }
            var v459 = !!p739._loop || !!vThis41._sprite[v458][2];
            vThis41._emit("end", p739._id);
            if (!vThis41._webAudio && v459) {
              vThis41.stop(p739._id, true).play(p739._id);
            }
            if (vThis41._webAudio && v459) {
              vThis41._emit("play", p739._id);
              p739._seek = p739._start || 0;
              p739._rateSeek = 0;
              p739._playStart = v388.ctx.currentTime;
              var v460 = (p739._stop - p739._start) * 1000 / Math.abs(p739._rate);
              vThis41._endTimers[p739._id] = setTimeout(vThis41._ended.bind(vThis41, p739), v460);
            }
            if (vThis41._webAudio && !v459) {
              p739._paused = true;
              p739._ended = true;
              p739._seek = p739._start || 0;
              p739._rateSeek = 0;
              vThis41._clearTimer(p739._id);
              vThis41._cleanBuffer(p739._node);
              v388._autoSuspend();
            }
            if (!vThis41._webAudio && !v459) {
              vThis41.stop(p739._id, true);
            }
            return vThis41;
          },
          _clearTimer: function (p740) {
            var vThis42 = this;
            if (vThis42._endTimers[p740]) {
              if (typeof vThis42._endTimers[p740] !== "function") {
                clearTimeout(vThis42._endTimers[p740]);
              } else {
                var v461 = vThis42._soundById(p740);
                if (v461 && v461._node) {
                  v461._node.removeEventListener("ended", vThis42._endTimers[p740], false);
                }
              }
              delete vThis42._endTimers[p740];
            }
            return vThis42;
          },
          _soundById: function (p741) {
            var vThis43 = this;
            for (var vLN076 = 0; vLN076 < vThis43._sounds.length; vLN076++) {
              if (p741 === vThis43._sounds[vLN076]._id) {
                return vThis43._sounds[vLN076];
              }
            }
            return null;
          },
          _inactiveSound: function () {
            var vThis44 = this;
            vThis44._drain();
            for (var vLN077 = 0; vLN077 < vThis44._sounds.length; vLN077++) {
              if (vThis44._sounds[vLN077]._ended) {
                return vThis44._sounds[vLN077].reset();
              }
            }
            return new f118(vThis44);
          },
          _drain: function () {
            var vThis45 = this;
            var v462 = vThis45._pool;
            var vLN078 = 0;
            var vLN079 = 0;
            if (vThis45._sounds.length < v462) {
              return;
            }
            for (vLN079 = 0; vLN079 < vThis45._sounds.length; vLN079++) {
              if (vThis45._sounds[vLN079]._ended) {
                vLN078++;
              }
            }
            for (vLN079 = vThis45._sounds.length - 1; vLN079 >= 0; vLN079--) {
              if (vLN078 <= v462) {
                return;
              }
              if (vThis45._sounds[vLN079]._ended) {
                if (vThis45._webAudio && vThis45._sounds[vLN079]._node) {
                  vThis45._sounds[vLN079]._node.disconnect(0);
                }
                vThis45._sounds.splice(vLN079, 1);
                vLN078--;
              }
            }
          },
          _getSoundIds: function (p742) {
            var vThis46 = this;
            if (typeof p742 === "undefined") {
              var vA22 = [];
              for (var vLN080 = 0; vLN080 < vThis46._sounds.length; vLN080++) {
                vA22.push(vThis46._sounds[vLN080]._id);
              }
              return vA22;
            } else {
              return [p742];
            }
          },
          _refreshBuffer: function (p743) {
            var vThis47 = this;
            p743._node.bufferSource = v388.ctx.createBufferSource();
            p743._node.bufferSource.buffer = vO17[vThis47._src];
            if (p743._panner) {
              p743._node.bufferSource.connect(p743._panner);
            } else {
              p743._node.bufferSource.connect(p743._node);
            }
            p743._node.bufferSource.loop = p743._loop;
            if (p743._loop) {
              p743._node.bufferSource.loopStart = p743._start || 0;
              p743._node.bufferSource.loopEnd = p743._stop || 0;
            }
            p743._node.bufferSource.playbackRate.setValueAtTime(p743._rate, v388.ctx.currentTime);
            return vThis47;
          },
          _cleanBuffer: function (p744) {
            var vThis48 = this;
            var v463 = v388._navigator && v388._navigator.vendor.indexOf("Apple") >= 0;
            if (!p744.bufferSource) {
              return vThis48;
            }
            if (v388._scratchBuffer && p744.bufferSource) {
              p744.bufferSource.onended = null;
              p744.bufferSource.disconnect(0);
              if (v463) {
                try {
                  p744.bufferSource.buffer = v388._scratchBuffer;
                } catch (e17) {}
              }
            }
            p744.bufferSource = null;
            return vThis48;
          },
          _clearSound: function (p745) {
            var v464 = /MSIE |Trident\//.test(v388._navigator && v388._navigator.userAgent);
            if (!v464) {
              p745.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
            }
          }
        };
        function f118(p746) {
          this._parent = p746;
          this.init();
        }
        f118.prototype = {
          init: function () {
            var vThis49 = this;
            var v465 = vThis49._parent;
            vThis49._muted = v465._muted;
            vThis49._loop = v465._loop;
            vThis49._volume = v465._volume;
            vThis49._rate = v465._rate;
            vThis49._seek = 0;
            vThis49._paused = true;
            vThis49._ended = true;
            vThis49._sprite = "__default";
            vThis49._id = ++v388._counter;
            v465._sounds.push(vThis49);
            vThis49.create();
            return vThis49;
          },
          create: function () {
            var vThis50 = this;
            var v466 = vThis50._parent;
            var v467 = v388._muted || vThis50._muted || vThis50._parent._muted ? 0 : vThis50._volume;
            if (v466._webAudio) {
              vThis50._node = typeof v388.ctx.createGain === "undefined" ? v388.ctx.createGainNode() : v388.ctx.createGain();
              vThis50._node.gain.setValueAtTime(v467, v388.ctx.currentTime);
              vThis50._node.paused = true;
              vThis50._node.connect(v388.masterGain);
            } else if (!v388.noAudio) {
              vThis50._node = v388._obtainHtml5Audio();
              vThis50._errorFn = vThis50._errorListener.bind(vThis50);
              vThis50._node.addEventListener("error", vThis50._errorFn, false);
              vThis50._loadFn = vThis50._loadListener.bind(vThis50);
              vThis50._node.addEventListener(v388._canPlayEvent, vThis50._loadFn, false);
              vThis50._endFn = vThis50._endListener.bind(vThis50);
              vThis50._node.addEventListener("ended", vThis50._endFn, false);
              vThis50._node.src = v466._src;
              vThis50._node.preload = v466._preload === true ? "auto" : v466._preload;
              vThis50._node.volume = v467 * v388.volume();
              vThis50._node.load();
            }
            return vThis50;
          },
          reset: function () {
            var vThis51 = this;
            var v468 = vThis51._parent;
            vThis51._muted = v468._muted;
            vThis51._loop = v468._loop;
            vThis51._volume = v468._volume;
            vThis51._rate = v468._rate;
            vThis51._seek = 0;
            vThis51._rateSeek = 0;
            vThis51._paused = true;
            vThis51._ended = true;
            vThis51._sprite = "__default";
            vThis51._id = ++v388._counter;
            return vThis51;
          },
          _errorListener: function () {
            var vThis52 = this;
            vThis52._parent._emit("loaderror", vThis52._id, vThis52._node.error ? vThis52._node.error.code : 0);
            vThis52._node.removeEventListener("error", vThis52._errorFn, false);
          },
          _loadListener: function () {
            var vThis53 = this;
            var v469 = vThis53._parent;
            v469._duration = Math.ceil(vThis53._node.duration * 10) / 10;
            if (Object.keys(v469._sprite).length === 0) {
              v469._sprite = {
                __default: [0, v469._duration * 1000]
              };
            }
            if (v469._state !== "loaded") {
              v469._state = "loaded";
              v469._emit("load");
              v469._loadQueue();
            }
            vThis53._node.removeEventListener(v388._canPlayEvent, vThis53._loadFn, false);
          },
          _endListener: function () {
            var vThis54 = this;
            var v470 = vThis54._parent;
            if (v470._duration === Infinity) {
              v470._duration = Math.ceil(vThis54._node.duration * 10) / 10;
              if (v470._sprite.__default[1] === Infinity) {
                v470._sprite.__default[1] = v470._duration * 1000;
              }
              v470._ended(vThis54);
            }
            vThis54._node.removeEventListener("ended", vThis54._endFn, false);
          }
        };
        var vO17 = {};
        function f119(p747) {
          var v471 = p747._src;
          if (vO17[v471]) {
            p747._duration = vO17[v471].duration;
            f124(p747);
            return;
          }
          if (/^data:[^;]+;base64,/.test(v471)) {
            var vAtob = atob(v471.split(",")[1]);
            var v472 = new Uint8Array(vAtob.length);
            for (var vLN081 = 0; vLN081 < vAtob.length; ++vLN081) {
              v472[vLN081] = vAtob.charCodeAt(vLN081);
            }
            f121(v472.buffer, p747);
          } else {
            var v473 = new XMLHttpRequest();
            v473.open(p747._xhr.method, v471, true);
            v473.withCredentials = p747._xhr.withCredentials;
            v473.responseType = "arraybuffer";
            if (p747._xhr.headers) {
              Object.keys(p747._xhr.headers).forEach(function (p748) {
                v473.setRequestHeader(p748, p747._xhr.headers[p748]);
              });
            }
            v473.onload = function () {
              var v474 = (v473.status + "")[0];
              if (v474 !== "0" && v474 !== "2" && v474 !== "3") {
                p747._emit("loaderror", null, "Failed loading audio file with status: " + v473.status + ".");
                return;
              }
              f121(v473.response, p747);
            };
            v473.onerror = function () {
              if (p747._webAudio) {
                p747._html5 = true;
                p747._webAudio = false;
                p747._sounds = [];
                delete vO17[v471];
                p747.load();
              }
            };
            f120(v473);
          }
        }
        function f120(p749) {
          try {
            p749.send();
          } catch (e18) {
            p749.onerror();
          }
        }
        function f121(p750, p751) {
          function f122() {
            p751._emit("loaderror", null, "Decoding audio data failed.");
          }
          function f123(p752) {
            if (p752 && p751._sounds.length > 0) {
              vO17[p751._src] = p752;
              f124(p751, p752);
            } else {
              f122();
            }
          }
          if (typeof Promise !== "undefined" && v388.ctx.decodeAudioData.length === 1) {
            v388.ctx.decodeAudioData(p750).then(f123).catch(f122);
          } else {
            v388.ctx.decodeAudioData(p750, f123, f122);
          }
        }
        function f124(p753, p754) {
          if (p754 && !p753._duration) {
            p753._duration = p754.duration;
          }
          if (Object.keys(p753._sprite).length === 0) {
            p753._sprite = {
              __default: [0, p753._duration * 1000]
            };
          }
          if (p753._state !== "loaded") {
            p753._state = "loaded";
            p753._emit("load");
            p753._loadQueue();
          }
        }
        function f125() {
          if (!v388.usingWebAudio) {
            return;
          }
          try {
            if (typeof AudioContext !== "undefined") {
              v388.ctx = new AudioContext();
            } else if (typeof webkitAudioContext !== "undefined") {
              v388.ctx = new webkitAudioContext();
            } else {
              v388.usingWebAudio = false;
            }
          } catch (e19) {
            v388.usingWebAudio = false;
          }
          if (!v388.ctx) {
            v388.usingWebAudio = false;
          }
          var v475 = /iP(hone|od|ad)/.test(v388._navigator && v388._navigator.platform);
          var v476 = v388._navigator && v388._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
          var v477 = v476 ? parseInt(v476[1], 10) : null;
          if (v475 && v477 && v477 < 9) {
            var v478 = /safari/.test(v388._navigator && v388._navigator.userAgent.toLowerCase());
            if (v388._navigator && !v478) {
              v388.usingWebAudio = false;
            }
          }
          if (v388.usingWebAudio) {
            v388.masterGain = typeof v388.ctx.createGain === "undefined" ? v388.ctx.createGainNode() : v388.ctx.createGain();
            v388.masterGain.gain.setValueAtTime(v388._muted ? 0 : v388._volume, v388.ctx.currentTime);
            v388.masterGain.connect(v388.ctx.destination);
          }
          v388._setup();
        }
        if (true) {
          v357 = [];
          v358 = function () {
            return {
              Howler: v388,
              Howl: f111
            };
          }.apply(p695, v357);
          if (v358 !== undefined) {
            p694.exports = v358;
          }
        }
        if (true) {
          p695.Howler = v388;
          p695.Howl = f111;
        }
        if (typeof p696.g !== "undefined") {
          p696.g.HowlerGlobal = f108;
          p696.g.Howler = v388;
          p696.g.Howl = f111;
          p696.g.Sound = f118;
        } else if (typeof window !== "undefined") {
          window.HowlerGlobal = f108;
          window.Howler = v388;
          window.Howl = f111;
          window.Sound = f118;
        }
      })();
      (function () {
        'use strict';

        HowlerGlobal.prototype._pos = [0, 0, 0];
        HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
        HowlerGlobal.prototype.stereo = function (p755) {
          var vThis55 = this;
          if (!vThis55.ctx || !vThis55.ctx.listener) {
            return vThis55;
          }
          for (var v479 = vThis55._howls.length - 1; v479 >= 0; v479--) {
            vThis55._howls[v479].stereo(p755);
          }
          return vThis55;
        };
        HowlerGlobal.prototype.pos = function (p756, p757, p758) {
          var vThis56 = this;
          if (!vThis56.ctx || !vThis56.ctx.listener) {
            return vThis56;
          }
          p757 = typeof p757 !== "number" ? vThis56._pos[1] : p757;
          p758 = typeof p758 !== "number" ? vThis56._pos[2] : p758;
          if (typeof p756 === "number") {
            vThis56._pos = [p756, p757, p758];
            if (typeof vThis56.ctx.listener.positionX !== "undefined") {
              vThis56.ctx.listener.positionX.setTargetAtTime(vThis56._pos[0], Howler.ctx.currentTime, 0.1);
              vThis56.ctx.listener.positionY.setTargetAtTime(vThis56._pos[1], Howler.ctx.currentTime, 0.1);
              vThis56.ctx.listener.positionZ.setTargetAtTime(vThis56._pos[2], Howler.ctx.currentTime, 0.1);
            } else {
              vThis56.ctx.listener.setPosition(vThis56._pos[0], vThis56._pos[1], vThis56._pos[2]);
            }
          } else {
            return vThis56._pos;
          }
          return vThis56;
        };
        HowlerGlobal.prototype.orientation = function (p759, p760, p761, p762, p763, p764) {
          var vThis57 = this;
          if (!vThis57.ctx || !vThis57.ctx.listener) {
            return vThis57;
          }
          var v480 = vThis57._orientation;
          p760 = typeof p760 !== "number" ? v480[1] : p760;
          p761 = typeof p761 !== "number" ? v480[2] : p761;
          p762 = typeof p762 !== "number" ? v480[3] : p762;
          p763 = typeof p763 !== "number" ? v480[4] : p763;
          p764 = typeof p764 !== "number" ? v480[5] : p764;
          if (typeof p759 === "number") {
            vThis57._orientation = [p759, p760, p761, p762, p763, p764];
            if (typeof vThis57.ctx.listener.forwardX !== "undefined") {
              vThis57.ctx.listener.forwardX.setTargetAtTime(p759, Howler.ctx.currentTime, 0.1);
              vThis57.ctx.listener.forwardY.setTargetAtTime(p760, Howler.ctx.currentTime, 0.1);
              vThis57.ctx.listener.forwardZ.setTargetAtTime(p761, Howler.ctx.currentTime, 0.1);
              vThis57.ctx.listener.upX.setTargetAtTime(p762, Howler.ctx.currentTime, 0.1);
              vThis57.ctx.listener.upY.setTargetAtTime(p763, Howler.ctx.currentTime, 0.1);
              vThis57.ctx.listener.upZ.setTargetAtTime(p764, Howler.ctx.currentTime, 0.1);
            } else {
              vThis57.ctx.listener.setOrientation(p759, p760, p761, p762, p763, p764);
            }
          } else {
            return v480;
          }
          return vThis57;
        };
        Howl.prototype.init = function (p765) {
          return function (p766) {
            var vThis58 = this;
            vThis58._orientation = p766.orientation || [1, 0, 0];
            vThis58._stereo = p766.stereo || null;
            vThis58._pos = p766.pos || null;
            vThis58._pannerAttr = {
              coneInnerAngle: typeof p766.coneInnerAngle !== "undefined" ? p766.coneInnerAngle : 360,
              coneOuterAngle: typeof p766.coneOuterAngle !== "undefined" ? p766.coneOuterAngle : 360,
              coneOuterGain: typeof p766.coneOuterGain !== "undefined" ? p766.coneOuterGain : 0,
              distanceModel: typeof p766.distanceModel !== "undefined" ? p766.distanceModel : "inverse",
              maxDistance: typeof p766.maxDistance !== "undefined" ? p766.maxDistance : 10000,
              panningModel: typeof p766.panningModel !== "undefined" ? p766.panningModel : "HRTF",
              refDistance: typeof p766.refDistance !== "undefined" ? p766.refDistance : 1,
              rolloffFactor: typeof p766.rolloffFactor !== "undefined" ? p766.rolloffFactor : 1
            };
            vThis58._onstereo = p766.onstereo ? [{
              fn: p766.onstereo
            }] : [];
            vThis58._onpos = p766.onpos ? [{
              fn: p766.onpos
            }] : [];
            vThis58._onorientation = p766.onorientation ? [{
              fn: p766.onorientation
            }] : [];
            return p765.call(this, p766);
          };
        }(Howl.prototype.init);
        Howl.prototype.stereo = function (p767, p768) {
          var vThis59 = this;
          if (!vThis59._webAudio) {
            return vThis59;
          }
          if (vThis59._state !== "loaded") {
            vThis59._queue.push({
              event: "stereo",
              action: function () {
                vThis59.stereo(p767, p768);
              }
            });
            return vThis59;
          }
          var v481 = typeof Howler.ctx.createStereoPanner === "undefined" ? "spatial" : "stereo";
          if (typeof p768 === "undefined") {
            if (typeof p767 === "number") {
              vThis59._stereo = p767;
              vThis59._pos = [p767, 0, 0];
            } else {
              return vThis59._stereo;
            }
          }
          var v482 = vThis59._getSoundIds(p768);
          for (var vLN082 = 0; vLN082 < v482.length; vLN082++) {
            var v483 = vThis59._soundById(v482[vLN082]);
            if (v483) {
              if (typeof p767 === "number") {
                v483._stereo = p767;
                v483._pos = [p767, 0, 0];
                if (v483._node) {
                  v483._pannerAttr.panningModel = "equalpower";
                  if (!v483._panner || !v483._panner.pan) {
                    f126(v483, v481);
                  }
                  if (v481 === "spatial") {
                    if (typeof v483._panner.positionX !== "undefined") {
                      v483._panner.positionX.setValueAtTime(p767, Howler.ctx.currentTime);
                      v483._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                      v483._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                    } else {
                      v483._panner.setPosition(p767, 0, 0);
                    }
                  } else {
                    v483._panner.pan.setValueAtTime(p767, Howler.ctx.currentTime);
                  }
                }
                vThis59._emit("stereo", v483._id);
              } else {
                return v483._stereo;
              }
            }
          }
          return vThis59;
        };
        Howl.prototype.pos = function (p769, p770, p771, p772) {
          var vThis60 = this;
          if (!vThis60._webAudio) {
            return vThis60;
          }
          if (vThis60._state !== "loaded") {
            vThis60._queue.push({
              event: "pos",
              action: function () {
                vThis60.pos(p769, p770, p771, p772);
              }
            });
            return vThis60;
          }
          p770 = typeof p770 !== "number" ? 0 : p770;
          p771 = typeof p771 !== "number" ? -0.5 : p771;
          if (typeof p772 === "undefined") {
            if (typeof p769 === "number") {
              vThis60._pos = [p769, p770, p771];
            } else {
              return vThis60._pos;
            }
          }
          var v484 = vThis60._getSoundIds(p772);
          for (var vLN083 = 0; vLN083 < v484.length; vLN083++) {
            var v485 = vThis60._soundById(v484[vLN083]);
            if (v485) {
              if (typeof p769 === "number") {
                v485._pos = [p769, p770, p771];
                if (v485._node) {
                  if (!v485._panner || v485._panner.pan) {
                    f126(v485, "spatial");
                  }
                  if (typeof v485._panner.positionX !== "undefined") {
                    v485._panner.positionX.setValueAtTime(p769, Howler.ctx.currentTime);
                    v485._panner.positionY.setValueAtTime(p770, Howler.ctx.currentTime);
                    v485._panner.positionZ.setValueAtTime(p771, Howler.ctx.currentTime);
                  } else {
                    v485._panner.setPosition(p769, p770, p771);
                  }
                }
                vThis60._emit("pos", v485._id);
              } else {
                return v485._pos;
              }
            }
          }
          return vThis60;
        };
        Howl.prototype.orientation = function (p773, p774, p775, p776) {
          var vThis61 = this;
          if (!vThis61._webAudio) {
            return vThis61;
          }
          if (vThis61._state !== "loaded") {
            vThis61._queue.push({
              event: "orientation",
              action: function () {
                vThis61.orientation(p773, p774, p775, p776);
              }
            });
            return vThis61;
          }
          p774 = typeof p774 !== "number" ? vThis61._orientation[1] : p774;
          p775 = typeof p775 !== "number" ? vThis61._orientation[2] : p775;
          if (typeof p776 === "undefined") {
            if (typeof p773 === "number") {
              vThis61._orientation = [p773, p774, p775];
            } else {
              return vThis61._orientation;
            }
          }
          var v486 = vThis61._getSoundIds(p776);
          for (var vLN084 = 0; vLN084 < v486.length; vLN084++) {
            var v487 = vThis61._soundById(v486[vLN084]);
            if (v487) {
              if (typeof p773 === "number") {
                v487._orientation = [p773, p774, p775];
                if (v487._node) {
                  if (!v487._panner) {
                    if (!v487._pos) {
                      v487._pos = vThis61._pos || [0, 0, -0.5];
                    }
                    f126(v487, "spatial");
                  }
                  if (typeof v487._panner.orientationX !== "undefined") {
                    v487._panner.orientationX.setValueAtTime(p773, Howler.ctx.currentTime);
                    v487._panner.orientationY.setValueAtTime(p774, Howler.ctx.currentTime);
                    v487._panner.orientationZ.setValueAtTime(p775, Howler.ctx.currentTime);
                  } else {
                    v487._panner.setOrientation(p773, p774, p775);
                  }
                }
                vThis61._emit("orientation", v487._id);
              } else {
                return v487._orientation;
              }
            }
          }
          return vThis61;
        };
        Howl.prototype.pannerAttr = function () {
          var vThis62 = this;
          var vArguments5 = arguments;
          var v488;
          var v489;
          var v490;
          if (!vThis62._webAudio) {
            return vThis62;
          }
          if (vArguments5.length === 0) {
            return vThis62._pannerAttr;
          } else if (vArguments5.length === 1) {
            if (typeof vArguments5[0] === "object") {
              v488 = vArguments5[0];
              if (typeof v489 === "undefined") {
                if (!v488.pannerAttr) {
                  v488.pannerAttr = {
                    coneInnerAngle: v488.coneInnerAngle,
                    coneOuterAngle: v488.coneOuterAngle,
                    coneOuterGain: v488.coneOuterGain,
                    distanceModel: v488.distanceModel,
                    maxDistance: v488.maxDistance,
                    refDistance: v488.refDistance,
                    rolloffFactor: v488.rolloffFactor,
                    panningModel: v488.panningModel
                  };
                }
                vThis62._pannerAttr = {
                  coneInnerAngle: typeof v488.pannerAttr.coneInnerAngle !== "undefined" ? v488.pannerAttr.coneInnerAngle : vThis62._coneInnerAngle,
                  coneOuterAngle: typeof v488.pannerAttr.coneOuterAngle !== "undefined" ? v488.pannerAttr.coneOuterAngle : vThis62._coneOuterAngle,
                  coneOuterGain: typeof v488.pannerAttr.coneOuterGain !== "undefined" ? v488.pannerAttr.coneOuterGain : vThis62._coneOuterGain,
                  distanceModel: typeof v488.pannerAttr.distanceModel !== "undefined" ? v488.pannerAttr.distanceModel : vThis62._distanceModel,
                  maxDistance: typeof v488.pannerAttr.maxDistance !== "undefined" ? v488.pannerAttr.maxDistance : vThis62._maxDistance,
                  refDistance: typeof v488.pannerAttr.refDistance !== "undefined" ? v488.pannerAttr.refDistance : vThis62._refDistance,
                  rolloffFactor: typeof v488.pannerAttr.rolloffFactor !== "undefined" ? v488.pannerAttr.rolloffFactor : vThis62._rolloffFactor,
                  panningModel: typeof v488.pannerAttr.panningModel !== "undefined" ? v488.pannerAttr.panningModel : vThis62._panningModel
                };
              }
            } else {
              v490 = vThis62._soundById(parseInt(vArguments5[0], 10));
              if (v490) {
                return v490._pannerAttr;
              } else {
                return vThis62._pannerAttr;
              }
            }
          } else if (vArguments5.length === 2) {
            v488 = vArguments5[0];
            v489 = parseInt(vArguments5[1], 10);
          }
          var v491 = vThis62._getSoundIds(v489);
          for (var vLN085 = 0; vLN085 < v491.length; vLN085++) {
            v490 = vThis62._soundById(v491[vLN085]);
            if (v490) {
              var v492 = v490._pannerAttr;
              v492 = {
                coneInnerAngle: typeof v488.coneInnerAngle !== "undefined" ? v488.coneInnerAngle : v492.coneInnerAngle,
                coneOuterAngle: typeof v488.coneOuterAngle !== "undefined" ? v488.coneOuterAngle : v492.coneOuterAngle,
                coneOuterGain: typeof v488.coneOuterGain !== "undefined" ? v488.coneOuterGain : v492.coneOuterGain,
                distanceModel: typeof v488.distanceModel !== "undefined" ? v488.distanceModel : v492.distanceModel,
                maxDistance: typeof v488.maxDistance !== "undefined" ? v488.maxDistance : v492.maxDistance,
                refDistance: typeof v488.refDistance !== "undefined" ? v488.refDistance : v492.refDistance,
                rolloffFactor: typeof v488.rolloffFactor !== "undefined" ? v488.rolloffFactor : v492.rolloffFactor,
                panningModel: typeof v488.panningModel !== "undefined" ? v488.panningModel : v492.panningModel
              };
              var v493 = v490._panner;
              if (!v493) {
                if (!v490._pos) {
                  v490._pos = vThis62._pos || [0, 0, -0.5];
                }
                f126(v490, "spatial");
                v493 = v490._panner;
              }
              v493.coneInnerAngle = v492.coneInnerAngle;
              v493.coneOuterAngle = v492.coneOuterAngle;
              v493.coneOuterGain = v492.coneOuterGain;
              v493.distanceModel = v492.distanceModel;
              v493.maxDistance = v492.maxDistance;
              v493.refDistance = v492.refDistance;
              v493.rolloffFactor = v492.rolloffFactor;
              v493.panningModel = v492.panningModel;
            }
          }
          return vThis62;
        };
        Sound.prototype.init = function (p777) {
          return function () {
            var vThis63 = this;
            var v494 = vThis63._parent;
            vThis63._orientation = v494._orientation;
            vThis63._stereo = v494._stereo;
            vThis63._pos = v494._pos;
            vThis63._pannerAttr = v494._pannerAttr;
            p777.call(this);
            if (vThis63._stereo) {
              v494.stereo(vThis63._stereo);
            } else if (vThis63._pos) {
              v494.pos(vThis63._pos[0], vThis63._pos[1], vThis63._pos[2], vThis63._id);
            }
          };
        }(Sound.prototype.init);
        Sound.prototype.reset = function (p778) {
          return function () {
            var vThis64 = this;
            var v495 = vThis64._parent;
            vThis64._orientation = v495._orientation;
            vThis64._stereo = v495._stereo;
            vThis64._pos = v495._pos;
            vThis64._pannerAttr = v495._pannerAttr;
            if (vThis64._stereo) {
              v495.stereo(vThis64._stereo);
            } else if (vThis64._pos) {
              v495.pos(vThis64._pos[0], vThis64._pos[1], vThis64._pos[2], vThis64._id);
            } else if (vThis64._panner) {
              vThis64._panner.disconnect(0);
              vThis64._panner = undefined;
              v495._refreshBuffer(vThis64);
            }
            return p778.call(this);
          };
        }(Sound.prototype.reset);
        function f126(p779, p780) {
          p780 = p780 || "spatial";
          if (p780 === "spatial") {
            p779._panner = Howler.ctx.createPanner();
            p779._panner.coneInnerAngle = p779._pannerAttr.coneInnerAngle;
            p779._panner.coneOuterAngle = p779._pannerAttr.coneOuterAngle;
            p779._panner.coneOuterGain = p779._pannerAttr.coneOuterGain;
            p779._panner.distanceModel = p779._pannerAttr.distanceModel;
            p779._panner.maxDistance = p779._pannerAttr.maxDistance;
            p779._panner.refDistance = p779._pannerAttr.refDistance;
            p779._panner.rolloffFactor = p779._pannerAttr.rolloffFactor;
            p779._panner.panningModel = p779._pannerAttr.panningModel;
            if (typeof p779._panner.positionX !== "undefined") {
              p779._panner.positionX.setValueAtTime(p779._pos[0], Howler.ctx.currentTime);
              p779._panner.positionY.setValueAtTime(p779._pos[1], Howler.ctx.currentTime);
              p779._panner.positionZ.setValueAtTime(p779._pos[2], Howler.ctx.currentTime);
            } else {
              p779._panner.setPosition(p779._pos[0], p779._pos[1], p779._pos[2]);
            }
            if (typeof p779._panner.orientationX !== "undefined") {
              p779._panner.orientationX.setValueAtTime(p779._orientation[0], Howler.ctx.currentTime);
              p779._panner.orientationY.setValueAtTime(p779._orientation[1], Howler.ctx.currentTime);
              p779._panner.orientationZ.setValueAtTime(p779._orientation[2], Howler.ctx.currentTime);
            } else {
              p779._panner.setOrientation(p779._orientation[0], p779._orientation[1], p779._orientation[2]);
            }
          } else {
            p779._panner = Howler.ctx.createStereoPanner();
            p779._panner.pan.setValueAtTime(p779._stereo, Howler.ctx.currentTime);
          }
          p779._panner.connect(p779._node);
          if (!p779._paused) {
            p779._parent.pause(p779._id, true).play(p779._id, true);
          }
        }
      })();
    },
    "./node_modules/.pnpm/httpie@2.0.0-next.13/node_modules/httpie/xhr/index.mjs": (p781, p782, p783) => {
      'use strict';

      p783.r(p782);
      p783.d(p782, {
        del: () => v505,
        get: () => v502,
        patch: () => v504,
        post: () => v503,
        put: () => v506,
        send: () => f128
      });
      function f127(p784, p785) {
        p785.headers = p784.headers || {};
        p785.statusMessage = p784.statusText;
        p785.statusCode = p784.status;
        p785.data = p784.response;
      }
      function f128(p786, p787, p788) {
        return new Promise(function (p789, p790) {
          p788 = p788 || {};
          var v496 = new XMLHttpRequest();
          var v497;
          var v498;
          var v499;
          var v500 = p788.body;
          var v501 = p788.headers || {};
          if (p788.timeout) {
            v496.timeout = p788.timeout;
          }
          v496.ontimeout = v496.onerror = function (p791) {
            p791.timeout = p791.type == "timeout";
            p790(p791);
          };
          v496.open(p786, p787.href || p787);
          v496.onload = function () {
            v499 = v496.getAllResponseHeaders().trim().split(/[\r\n]+/);
            f127(v496, v496);
            while (v498 = v499.shift()) {
              v498 = v498.split(": ");
              v496.headers[v498.shift().toLowerCase()] = v498.join(": ");
            }
            v498 = v496.headers["content-type"];
            if (v498 && !!~v498.indexOf("application/json")) {
              try {
                v496.data = JSON.parse(v496.data, p788.reviver);
              } catch (e20) {
                f127(v496, e20);
                return p790(e20);
              }
            }
            (v496.status >= 400 ? p790 : p789)(v496);
          };
          if (typeof FormData !== "undefined" && v500 instanceof FormData) {} else if (v500 && typeof v500 == "object") {
            v501["content-type"] = "application/json";
            v500 = JSON.stringify(v500);
          }
          v496.withCredentials = !!p788.withCredentials;
          for (v497 in v501) {
            v496.setRequestHeader(v497, v501[v497]);
          }
          v496.send(v500);
        });
      }
      var v502 = f128.bind(f128, "GET");
      var v503 = f128.bind(f128, "POST");
      var v504 = f128.bind(f128, "PATCH");
      var v505 = f128.bind(f128, "DELETE");
      var v506 = f128.bind(f128, "PUT");
    },
    "./node_modules/.pnpm/ws@8.17.1/node_modules/ws/browser.js": p792 => {
      'use strict';

      p792.exports = function () {
        throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
      };
    },
    "./src/temp.js": (p793, p794, p795) => {
      'use strict';

      p795.r(p794);
      var vP795 = p795("./node_modules/.pnpm/howler@2.2.4/node_modules/howler/dist/howler.js");
      var v507 = p795.n(vP795);
      var vP7952 = p795("./node_modules/.pnpm/colyseus.js@0.15.28/node_modules/colyseus.js/lib/index.js");
      p793 = p795.hmd(p793);
      function f129(p796, p797) {
        if (!(p796 instanceof p797)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function f130(p798, p799) {
        for (var vLN086 = 0; vLN086 < p799.length; vLN086++) {
          var v508 = p799[vLN086];
          v508.enumerable = v508.enumerable || false;
          v508.configurable = true;
          if ("value" in v508) {
            v508.writable = true;
          }
          Object.defineProperty(p798, f149(v508.key), v508);
        }
      }
      function f131(p800, p801, p802) {
        if (p801) {
          f130(p800.prototype, p801);
        }
        if (p802) {
          f130(p800, p802);
        }
        Object.defineProperty(p800, "prototype", {
          writable: false
        });
        return p800;
      }
      function f132(p803) {
        return f135(p803) || f134(p803) || f144(p803) || f133();
      }
      function f133() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function f134(p804) {
        if (typeof Symbol != "undefined" && p804[Symbol.iterator] != null || p804["@@iterator"] != null) {
          return Array.from(p804);
        }
      }
      function f135(p805) {
        if (Array.isArray(p805)) {
          return f145(p805);
        }
      }
      function f136(p806, p807) {
        var v509 = typeof Symbol != "undefined" && p806[Symbol.iterator] || p806["@@iterator"];
        if (!v509) {
          if (Array.isArray(p806) || (v509 = f144(p806)) || p807 && p806 && typeof p806.length == "number") {
            if (v509) {
              p806 = v509;
            }
            var vLN087 = 0;
            var v_0x333b08 = function f137() {};
            return {
              s: v_0x333b08,
              n: function (p808) {
                function f138() {
                  return p808.apply(this, arguments);
                }
                f138.toString = function () {
                  return p808.toString();
                };
                return f138;
              }(function () {
                if (vLN087 >= p806.length) {
                  return {
                    done: true
                  };
                } else {
                  return {
                    done: false,
                    value: p806[vLN087++]
                  };
                }
              }),
              e: function f139(p809) {
                throw p809;
              },
              f: v_0x333b08
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var v510;
        var v511 = true;
        var v512 = false;
        return {
          s: function f140() {
            v509 = v509.call(p806);
          },
          n: function f141() {
            var v513 = v509.next();
            v511 = v513.done;
            return v513;
          },
          e: function f142(p810) {
            v512 = true;
            v510 = p810;
          },
          f: function f143() {
            try {
              if (!v511 && v509.return != null) {
                v509.return();
              }
            } finally {
              if (v512) {
                throw v510;
              }
            }
          }
        };
      }
      function f144(p811, p812) {
        if (p811) {
          if (typeof p811 == "string") {
            return f145(p811, p812);
          }
          var v514 = {}.toString.call(p811).slice(8, -1);
          if (v514 === "Object" && p811.constructor) {
            v514 = p811.constructor.name;
          }
          if (v514 === "Map" || v514 === "Set") {
            return Array.from(p811);
          } else if (v514 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v514)) {
            return f145(p811, p812);
          } else {
            return undefined;
          }
        }
      }
      function f145(p813, p814) {
        if (p814 == null || p814 > p813.length) {
          p814 = p813.length;
        }
        for (var vLN088 = 0, vArray = Array(p814); vLN088 < p814; vLN088++) {
          vArray[vLN088] = p813[vLN088];
        }
        return vArray;
      }
      function f146(p815, p816) {
        var v515 = Object.keys(p815);
        if (Object.getOwnPropertySymbols) {
          var v516 = Object.getOwnPropertySymbols(p815);
          if (p816) {
            v516 = v516.filter(function (p817) {
              return Object.getOwnPropertyDescriptor(p815, p817).enumerable;
            });
          }
          v515.push.apply(v515, v516);
        }
        return v515;
      }
      function f147(p818) {
        for (var vLN15 = 1; vLN15 < arguments.length; vLN15++) {
          var v517 = arguments[vLN15] ?? {};
          if (vLN15 % 2) {
            f146(Object(v517), true).forEach(function (p819) {
              f148(p818, p819, v517[p819]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(p818, Object.getOwnPropertyDescriptors(v517));
          } else {
            f146(Object(v517)).forEach(function (p820) {
              Object.defineProperty(p818, p820, Object.getOwnPropertyDescriptor(v517, p820));
            });
          }
        }
        return p818;
      }
      function f148(p821, p822, p823) {
        if ((p822 = f149(p822)) in p821) {
          Object.defineProperty(p821, p822, {
            value: p823,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          p821[p822] = p823;
        }
        return p821;
      }
      function f149(p824) {
        var v_0x14fe2e = f150(p824, "string");
        if (f167(v_0x14fe2e) == "symbol") {
          return v_0x14fe2e;
        } else {
          return v_0x14fe2e + "";
        }
      }
      function f150(p825, p826) {
        if (f167(p825) != "object" || !p825) {
          return p825;
        }
        var v518 = p825[Symbol.toPrimitive];
        if (v518 !== undefined) {
          var v519 = v518.call(p825, p826 || "default");
          if (f167(v519) != "object") {
            return v519;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (p826 === "string" ? String : Number)(p825);
      }
      function f151() {
        var v520;
        var v521;
        var v522 = typeof Symbol == "function" ? Symbol : {};
        var v523 = v522.iterator || "@@iterator";
        var v524 = v522.toStringTag || "@@toStringTag";
        function f152(p827, p828, p829, p830) {
          var v525 = p828 && p828.prototype instanceof f155 ? p828 : f155;
          var v526 = Object.create(v525.prototype);
          f160(v526, "_invoke", function (p831, p832, p833) {
            var v527;
            var v528;
            var v529;
            var vLN089 = 0;
            var v530 = p833 || [];
            var v531 = false;
            var vO18 = {
              p: 0,
              n: 0,
              v: v520,
              a: f154,
              f: f154.bind(v520, 4),
              d: function f153(p834, p835) {
                v527 = p834;
                v528 = 0;
                v529 = v520;
                vO18.n = p835;
                return vO19;
              }
            };
            function f154(p836, p837) {
              v528 = p836;
              v529 = p837;
              v521 = 0;
              for (; !v531 && vLN089 && !v532 && v521 < v530.length; v521++) {
                var v532;
                var v533 = v530[v521];
                var v534 = vO18.p;
                var v535 = v533[2];
                if (p836 > 3) {
                  if (v532 = v535 === p837) {
                    v529 = v533[(v528 = v533[4]) ? 5 : (v528 = 3, 3)];
                    v533[4] = v533[5] = v520;
                  }
                } else if (v533[0] <= v534) {
                  if (v532 = p836 < 2 && v534 < v533[1]) {
                    v528 = 0;
                    vO18.v = p837;
                    vO18.n = v533[1];
                  } else if (v534 < v535 && (v532 = p836 < 3 || v533[0] > p837 || p837 > v535)) {
                    v533[4] = p836;
                    v533[5] = p837;
                    vO18.n = v535;
                    v528 = 0;
                  }
                }
              }
              if (v532 || p836 > 1) {
                return vO19;
              }
              v531 = true;
              throw p837;
            }
            return function (p838, p839, p840) {
              if (vLN089 > 1) {
                throw TypeError("Generator is already running");
              }
              if (v531 && p839 === 1) {
                f154(p839, p840);
              }
              v528 = p839;
              v529 = p840;
              while ((v521 = v528 < 2 ? v520 : v529) || !v531) {
                if (!v527) {
                  if (v528) {
                    if (v528 < 3) {
                      if (v528 > 1) {
                        vO18.n = -1;
                      }
                      f154(v528, v529);
                    } else {
                      vO18.n = v529;
                    }
                  } else {
                    vO18.v = v529;
                  }
                }
                try {
                  vLN089 = 2;
                  if (v527) {
                    if (!v528) {
                      p838 = "next";
                    }
                    if (v521 = v527[p838]) {
                      if (!(v521 = v521.call(v527, v529))) {
                        throw TypeError("iterator result is not an object");
                      }
                      if (!v521.done) {
                        return v521;
                      }
                      v529 = v521.value;
                      if (v528 < 2) {
                        v528 = 0;
                      }
                    } else {
                      if (v528 === 1 && (v521 = v527.return)) {
                        v521.call(v527);
                      }
                      if (v528 < 2) {
                        v529 = TypeError("The iterator does not provide a '" + p838 + "' method");
                        v528 = 1;
                      }
                    }
                    v527 = v520;
                  } else if ((v521 = (v531 = vO18.n < 0) ? v529 : p831.call(p832, vO18)) !== vO19) {
                    break;
                  }
                } catch (e21) {
                  v527 = v520;
                  v528 = 1;
                  v529 = e21;
                } finally {
                  vLN089 = 1;
                }
              }
              return {
                value: v521,
                done: v531
              };
            };
          }(p827, p829, p830), true);
          return v526;
        }
        var vO19 = {};
        function f155() {}
        function f156() {}
        function f157() {}
        v521 = Object.getPrototypeOf;
        var v536 = [][v523] ? v521(v521([][v523]())) : (f160(v521 = {}, v523, function () {
          return this;
        }), v521);
        var v537 = f157.prototype = f155.prototype = Object.create(v536);
        function f158(p841) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(p841, f157);
          } else {
            p841.__proto__ = f157;
            f160(p841, v524, "GeneratorFunction");
          }
          p841.prototype = Object.create(v537);
          return p841;
        }
        f156.prototype = f157;
        f160(v537, "constructor", f157);
        f160(f157, "constructor", f156);
        f156.displayName = "GeneratorFunction";
        f160(f157, v524, "GeneratorFunction");
        f160(v537);
        f160(v537, v524, "Generator");
        f160(v537, v523, function () {
          return this;
        });
        f160(v537, "toString", function () {
          return "[object Generator]";
        });
        return (f151 = function f159() {
          return {
            w: f152,
            m: f158
          };
        })();
      }
      function f160(p842, p843, p844, p845) {
        var v538 = Object.defineProperty;
        try {
          v538({}, "", {});
        } catch (e22) {
          v538 = 0;
        }
        f160 = function f161(p846, p847, p848, p849) {
          function f162(p850, p851) {
            f160(p846, p850, function (p852) {
              return this._invoke(p850, p851, p852);
            });
          }
          if (p847) {
            if (v538) {
              v538(p846, p847, {
                value: p848,
                enumerable: !p849,
                configurable: !p849,
                writable: !p849
              });
            } else {
              p846[p847] = p848;
            }
          } else {
            f162("next", 0);
            f162("throw", 1);
            f162("return", 2);
          }
        };
        f160(p842, p843, p844, p845);
      }
      function f163(p853, p854, p855, p856, p857, p858, p859) {
        try {
          var v539 = p853[p858](p859);
          var v540 = v539.value;
        } catch (e23) {
          p855(e23);
          return;
        }
        if (v539.done) {
          p854(v540);
        } else {
          Promise.resolve(v540).then(p856, p857);
        }
      }
      function f164(p860) {
        return function () {
          var vThis65 = this;
          var vArguments6 = arguments;
          return new Promise(function (p861, p862) {
            var v541 = p860.apply(vThis65, vArguments6);
            function f165(p863) {
              f163(v541, p861, p862, f165, f166, "next", p863);
            }
            function f166(p864) {
              f163(v541, p861, p862, f165, f166, "throw", p864);
            }
            f165(undefined);
          });
        };
      }
      function f167(p865) {
        '@babel/helpers - typeof';

        f167 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p866) {
          return typeof p866;
        } : function (p867) {
          if (p867 && typeof Symbol == "function" && p867.constructor === Symbol && p867 !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof p867;
          }
        };
        return f167(p865);
      }
      var vLN090 = 0;
      window.URLSERV_WORMWORLD = vLN090 ? "http://localhost:3102" : "https://wormworld.io/extension";
      window.URL_CDN = vLN090 ? "http://localhost:3000" : "https://asserts.wormworld.io";
      window.URL_CDN_B = vLN090 ? "localhost:3000" : "asserts.wormworld.io";
      window.URL_CDN_C = vLN090;
      window.URL_CDN_IKIT = "https://ik.imagekit.io/jdfnxk119";
      var v542 = /(.{18})(([AB])([0-9A-Za-z_]{2})([0-9A-Za-z]{3})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2}))/;
      var v543 = true;
      var v544 = true;
      var v545 = false;
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
      (function (p868) {
        if ((typeof exports === "undefined" ? "undefined" : f167(exports)) === "object" && "object" !== "undefined") {
          p793.exports = p868();
        } else if (typeof define === "function" && p795.amdO) {
          define([], p868);
        } else {
          var v546;
          if (typeof window !== "undefined") {
            v546 = window;
          } else if (typeof p795.g !== "undefined") {
            v546 = p795.g;
          } else if (typeof self !== "undefined") {
            v546 = self;
          } else {
            v546 = this;
          }
          v546.nipplejs = p868();
        }
      })(function () {
        var v547;
        var v548;
        var v549;
        "use strict";
        var v550 = !!("ontouchstart" in window);
        var v551 = window.PointerEvent ? true : false;
        var v552 = window.MSPointerEvent ? true : false;
        var vO20 = {
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
        var v553;
        var vO21 = {};
        if (v551) {
          v553 = vO20.pointer;
        } else if (v552) {
          v553 = vO20.MSPointer;
        } else if (v550) {
          v553 = vO20.touch;
          vO21 = vO20.mouse;
        } else {
          v553 = vO20.mouse;
        }
        var vO22 = {};
        vO22.distance = function (p869, p870) {
          var v554 = p870.x - p869.x;
          var v555 = p870.y - p869.y;
          return Math.sqrt(v554 * v554 + v555 * v555);
        };
        vO22.angle = function (p871, p872) {
          var v556 = p872.x - p871.x;
          var v557 = p872.y - p871.y;
          return vO22.degrees(Math.atan2(v557, v556));
        };
        vO22.findCoord = function (p873, p874, p875) {
          var vO23 = {
            x: 0,
            y: 0
          };
          p875 = vO22.radians(p875);
          vO23.x = p873.x - p874 * Math.cos(p875);
          vO23.y = p873.y - p874 * Math.sin(p875);
          return vO23;
        };
        vO22.radians = function (p876) {
          return p876 * (Math.PI / 180);
        };
        vO22.degrees = function (p877) {
          return p877 * (180 / Math.PI);
        };
        vO22.bindEvt = function (p878, p879, p880) {
          var v558 = p879.split(/[ ,]+/g);
          var v559;
          for (var vLN091 = 0; vLN091 < v558.length; vLN091 += 1) {
            v559 = v558[vLN091];
            if (p878.addEventListener) {
              p878.addEventListener(v559, p880, false);
            } else if (p878.attachEvent) {
              p878.attachEvent(v559, p880);
            }
          }
        };
        vO22.unbindEvt = function (p881, p882, p883) {
          var v560 = p882.split(/[ ,]+/g);
          var v561;
          for (var vLN092 = 0; vLN092 < v560.length; vLN092 += 1) {
            v561 = v560[vLN092];
            if (p881.removeEventListener) {
              p881.removeEventListener(v561, p883);
            } else if (p881.detachEvent) {
              p881.detachEvent(v561, p883);
            }
          }
        };
        vO22.trigger = function (p884, p885, p886) {
          var v562 = new CustomEvent(p885, p886);
          p884.dispatchEvent(v562);
        };
        vO22.prepareEvent = function (p887) {
          p887.preventDefault();
          if (p887.type.match(/^touch/)) {
            return p887.changedTouches;
          } else {
            return p887;
          }
        };
        vO22.getScroll = function () {
          var v563 = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
          var v564 = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
          return {
            x: v563,
            y: v564
          };
        };
        vO22.applyPosition = function (p888, p889) {
          if (p889.top || p889.right || p889.bottom || p889.left) {
            p888.style.top = p889.top;
            p888.style.right = p889.right;
            p888.style.bottom = p889.bottom;
            p888.style.left = p889.left;
          } else {
            p888.style.left = p889.x + "px";
            p888.style.top = p889.y + "px";
          }
        };
        vO22.getTransitionStyle = function (p890, p891, p892) {
          var v565 = vO22.configStylePropertyObject(p890);
          for (var v566 in v565) {
            if (v565.hasOwnProperty(v566)) {
              if (typeof p891 === "string") {
                v565[v566] = p891 + " " + p892;
              } else {
                var vLS6 = "";
                for (var vLN093 = 0, v567 = p891.length; vLN093 < v567; vLN093 += 1) {
                  vLS6 += p891[vLN093] + " " + p892 + ", ";
                }
                v565[v566] = vLS6.slice(0, -2);
              }
            }
          }
          return v565;
        };
        vO22.getVendorStyle = function (p893, p894) {
          var v568 = vO22.configStylePropertyObject(p893);
          for (var v569 in v568) {
            if (v568.hasOwnProperty(v569)) {
              v568[v569] = p894;
            }
          }
          return v568;
        };
        vO22.configStylePropertyObject = function (p895) {
          var vO24 = {
            [p895]: ""
          };
          var vA23 = ["webkit", "Moz", "o"];
          vA23.forEach(function (p896) {
            vO24[p896 + p895.charAt(0).toUpperCase() + p895.slice(1)] = "";
          });
          return vO24;
        };
        vO22.extend = function (p897, p898) {
          for (var v570 in p898) {
            if (p898.hasOwnProperty(v570)) {
              p897[v570] = p898[v570];
            }
          }
          return p897;
        };
        vO22.safeExtend = function (p899, p900) {
          var vO25 = {};
          for (var v571 in p899) {
            if (p899.hasOwnProperty(v571) && p900.hasOwnProperty(v571)) {
              vO25[v571] = p900[v571];
            } else if (p899.hasOwnProperty(v571)) {
              vO25[v571] = p899[v571];
            }
          }
          return vO25;
        };
        vO22.map = function (p901, p902) {
          if (p901.length) {
            for (var vLN094 = 0, v572 = p901.length; vLN094 < v572; vLN094 += 1) {
              p902(p901[vLN094]);
            }
          } else {
            p902(p901);
          }
        };
        function f168() {}
        ;
        f168.prototype.on = function (p903, p904) {
          var vThis66 = this;
          var v573 = p903.split(/[ ,]+/g);
          var v574;
          vThis66._handlers_ = vThis66._handlers_ || {};
          for (var vLN095 = 0; vLN095 < v573.length; vLN095 += 1) {
            v574 = v573[vLN095];
            vThis66._handlers_[v574] = vThis66._handlers_[v574] || [];
            vThis66._handlers_[v574].push(p904);
          }
          return vThis66;
        };
        f168.prototype.off = function (p905, p906) {
          var vThis67 = this;
          vThis67._handlers_ = vThis67._handlers_ || {};
          if (p905 === undefined) {
            vThis67._handlers_ = {};
          } else if (p906 === undefined) {
            vThis67._handlers_[p905] = null;
          } else if (vThis67._handlers_[p905] && vThis67._handlers_[p905].indexOf(p906) >= 0) {
            vThis67._handlers_[p905].splice(vThis67._handlers_[p905].indexOf(p906), 1);
          }
          return vThis67;
        };
        f168.prototype.trigger = function (p907, p908) {
          var vThis68 = this;
          var v575 = p907.split(/[ ,]+/g);
          var v576;
          vThis68._handlers_ = vThis68._handlers_ || {};
          for (var vLN096 = 0; vLN096 < v575.length; vLN096 += 1) {
            v576 = v575[vLN096];
            if (vThis68._handlers_[v576] && vThis68._handlers_[v576].length) {
              vThis68._handlers_[v576].forEach(function (p909) {
                p909.call(vThis68, {
                  type: v576,
                  target: vThis68
                }, p908);
              });
            }
          }
        };
        f168.prototype.config = function (p910) {
          var vThis69 = this;
          vThis69.options = vThis69.defaults || {};
          if (p910) {
            vThis69.options = vO22.safeExtend(vThis69.options, p910);
          }
        };
        f168.prototype.bindEvt = function (p911, p912) {
          var vThis70 = this;
          vThis70._domHandlers_ = vThis70._domHandlers_ || {};
          vThis70._domHandlers_[p912] = function () {
            if (typeof vThis70["on" + p912] === "function") {
              vThis70["on" + p912].apply(vThis70, arguments);
            } else {
              console.warn("[WARNING] : Missing \"on" + p912 + "\" handler.");
            }
          };
          vO22.bindEvt(p911, v553[p912], vThis70._domHandlers_[p912]);
          if (vO21[p912]) {
            vO22.bindEvt(p911, vO21[p912], vThis70._domHandlers_[p912]);
          }
          return vThis70;
        };
        f168.prototype.unbindEvt = function (p913, p914) {
          var vThis71 = this;
          vThis71._domHandlers_ = vThis71._domHandlers_ || {};
          vO22.unbindEvt(p913, v553[p914], vThis71._domHandlers_[p914]);
          if (vO21[p914]) {
            vO22.unbindEvt(p913, vO21[p914], vThis71._domHandlers_[p914]);
          }
          delete vThis71._domHandlers_[p914];
          return this;
        };
        function f169(p915, p916) {
          this.identifier = p916.identifier;
          this.position = p916.position;
          this.frontPosition = p916.frontPosition;
          this.collection = p915;
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
          this.config(p916);
          if (this.options.mode === "dynamic") {
            this.options.restOpacity = 0;
          }
          this.id = f169.id;
          f169.id += 1;
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
        f169.prototype = new f168();
        f169.constructor = f169;
        f169.id = 0;
        f169.prototype.buildEl = function (p917) {
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
        f169.prototype.stylize = function () {
          if (this.options.dataOnly) {
            return this;
          }
          var v577 = this.options.fadeTime + "ms";
          var v578 = vO22.getVendorStyle("borderRadius", "50%");
          var v579 = vO22.getTransitionStyle("transition", "opacity", v577);
          var vO26 = {
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
          vO22.extend(vO26.el, v579);
          vO22.extend(vO26.back, v578);
          vO22.extend(vO26.front, v578);
          this.applyStyles(vO26);
          return this;
        };
        f169.prototype.applyStyles = function (p918) {
          for (var v580 in this.ui) {
            if (this.ui.hasOwnProperty(v580)) {
              for (var v581 in p918[v580]) {
                this.ui[v580].style[v581] = p918[v580][v581];
              }
            }
          }
          return this;
        };
        f169.prototype.addToDom = function () {
          if (this.options.dataOnly || document.body.contains(this.ui.el)) {
            return this;
          }
          this.options.zone.appendChild(this.ui.el);
          return this;
        };
        f169.prototype.removeFromDom = function () {
          if (this.options.dataOnly || !document.body.contains(this.ui.el)) {
            return this;
          }
          this.options.zone.removeChild(this.ui.el);
          return this;
        };
        f169.prototype.destroy = function () {
          clearTimeout(this.removeTimeout);
          clearTimeout(this.showTimeout);
          clearTimeout(this.restTimeout);
          this.trigger("destroyed", this.instance);
          this.removeFromDom();
          this.off();
        };
        f169.prototype.show = function (p919) {
          var vThis72 = this;
          if (vThis72.options.dataOnly) {
            return vThis72;
          }
          clearTimeout(vThis72.removeTimeout);
          clearTimeout(vThis72.showTimeout);
          clearTimeout(vThis72.restTimeout);
          vThis72.addToDom();
          vThis72.restCallback();
          setTimeout(function () {
            vThis72.ui.el.style.opacity = 1;
          }, 0);
          vThis72.showTimeout = setTimeout(function () {
            vThis72.trigger("shown", vThis72.instance);
            if (typeof p919 === "function") {
              p919.call(this);
            }
          }, vThis72.options.fadeTime);
          return vThis72;
        };
        f169.prototype.hide = function (p920) {
          var vThis73 = this;
          if (vThis73.options.dataOnly) {
            return vThis73;
          }
          vThis73.ui.el.style.opacity = vThis73.options.restOpacity;
          clearTimeout(vThis73.removeTimeout);
          clearTimeout(vThis73.showTimeout);
          clearTimeout(vThis73.restTimeout);
          vThis73.removeTimeout = setTimeout(function () {
            var v582 = vThis73.options.mode === "dynamic" ? "none" : "block";
            vThis73.ui.el.style.display = v582;
            if (typeof p920 === "function") {
              p920.call(vThis73);
            }
            vThis73.trigger("hidden", vThis73.instance);
          }, vThis73.options.fadeTime);
          if (vThis73.options.restJoystick) {
            vThis73.restPosition();
          }
          return vThis73;
        };
        f169.prototype.restPosition = function (p921) {
          var vThis74 = this;
          vThis74.frontPosition = {
            x: 0,
            y: 0
          };
          var v583 = vThis74.options.fadeTime + "ms";
          var vO27 = {};
          vO27.front = vO22.getTransitionStyle("transition", ["top", "left"], v583);
          var vO28 = {
            front: {}
          };
          vO28.front = {
            left: vThis74.frontPosition.x + "px",
            top: vThis74.frontPosition.y + "px"
          };
          vThis74.applyStyles(vO27);
          vThis74.applyStyles(vO28);
          vThis74.restTimeout = setTimeout(function () {
            if (typeof p921 === "function") {
              p921.call(vThis74);
            }
            vThis74.restCallback();
          }, vThis74.options.fadeTime);
        };
        f169.prototype.restCallback = function () {
          var vThis75 = this;
          var vO29 = {};
          vO29.front = vO22.getTransitionStyle("transition", "none", "");
          vThis75.applyStyles(vO29);
          vThis75.trigger("rested", vThis75.instance);
        };
        f169.prototype.resetDirection = function () {
          this.direction = {
            x: false,
            y: false,
            angle: false
          };
        };
        f169.prototype.computeDirection = function (p922) {
          var v584 = p922.angle.radian;
          var v585 = Math.PI / 4;
          var v586 = Math.PI / 2;
          var v587;
          var v588;
          var v589;
          if (v584 > v585 && v584 < v585 * 3 && !p922.lockX) {
            v587 = "up";
          } else if (v584 > -v585 && v584 <= v585 && !p922.lockY) {
            v587 = "left";
          } else if (v584 > -v585 * 3 && v584 <= -v585 && !p922.lockX) {
            v587 = "down";
          } else if (!p922.lockY) {
            v587 = "right";
          }
          if (!p922.lockY) {
            if (v584 > -v586 && v584 < v586) {
              v588 = "left";
            } else {
              v588 = "right";
            }
          }
          if (!p922.lockX) {
            if (v584 > 0) {
              v589 = "up";
            } else {
              v589 = "down";
            }
          }
          if (p922.force > this.options.threshold) {
            var vO30 = {};
            for (var v590 in this.direction) {
              if (this.direction.hasOwnProperty(v590)) {
                vO30[v590] = this.direction[v590];
              }
            }
            var vO31 = {};
            this.direction = {
              x: v588,
              y: v589,
              angle: v587
            };
            p922.direction = this.direction;
            for (var v590 in vO30) {
              if (vO30[v590] === this.direction[v590]) {
                vO31[v590] = true;
              }
            }
            if (vO31.x && vO31.y && vO31.angle) {
              return p922;
            }
            if (!vO31.x || !vO31.y) {
              this.trigger("plain", p922);
            }
            if (!vO31.x) {
              this.trigger("plain:" + v588, p922);
            }
            if (!vO31.y) {
              this.trigger("plain:" + v589, p922);
            }
            if (!vO31.angle) {
              this.trigger("dir dir:" + v587, p922);
            }
          }
          return p922;
        };
        function f170(p923, p924) {
          var vThis76 = this;
          vThis76.nipples = [];
          vThis76.idles = [];
          vThis76.actives = [];
          vThis76.ids = [];
          vThis76.pressureIntervals = {};
          vThis76.manager = p923;
          vThis76.id = f170.id;
          f170.id += 1;
          vThis76.defaults = {
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
          vThis76.config(p924);
          if (vThis76.options.mode === "static" || vThis76.options.mode === "semi") {
            vThis76.options.multitouch = false;
          }
          if (!vThis76.options.multitouch) {
            vThis76.options.maxNumberOfNipples = 1;
          }
          vThis76.updateBox();
          vThis76.prepareNipples();
          vThis76.bindings();
          vThis76.begin();
          return vThis76.nipples;
        }
        f170.prototype = new f168();
        f170.constructor = f170;
        f170.id = 0;
        f170.prototype.prepareNipples = function () {
          var vThis77 = this;
          var v591 = vThis77.nipples;
          v591.on = vThis77.on.bind(vThis77);
          v591.off = vThis77.off.bind(vThis77);
          v591.options = vThis77.options;
          v591.destroy = vThis77.destroy.bind(vThis77);
          v591.ids = vThis77.ids;
          v591.id = vThis77.id;
          v591.processOnMove = vThis77.processOnMove.bind(vThis77);
          v591.processOnEnd = vThis77.processOnEnd.bind(vThis77);
          v591.get = function (p925) {
            if (p925 === undefined) {
              return v591[0];
            }
            for (var vLN097 = 0, v592 = v591.length; vLN097 < v592; vLN097 += 1) {
              if (v591[vLN097].identifier === p925) {
                return v591[vLN097];
              }
            }
            return false;
          };
        };
        f170.prototype.bindings = function () {
          var vThis78 = this;
          vThis78.bindEvt(vThis78.options.zone, "start");
          vThis78.options.zone.style.touchAction = "none";
          vThis78.options.zone.style.msTouchAction = "none";
        };
        f170.prototype.begin = function () {
          var vThis79 = this;
          var v593 = vThis79.options;
          if (v593.mode === "static") {
            var v594 = vThis79.createNipple(v593.position, vThis79.manager.getIdentifier());
            v594.add();
            vThis79.idles.push(v594);
          }
        };
        f170.prototype.createNipple = function (p926, p927) {
          var vThis80 = this;
          var v595 = vO22.getScroll();
          var vO32 = {};
          var v596 = vThis80.options;
          if (p926.x && p926.y) {
            vO32 = {
              x: p926.x - (v595.x + vThis80.box.left),
              y: p926.y - (v595.y + vThis80.box.top)
            };
          } else if (p926.top || p926.right || p926.bottom || p926.left) {
            var v597 = document.createElement("DIV");
            v597.style.display = "hidden";
            v597.style.top = p926.top;
            v597.style.right = p926.right;
            v597.style.bottom = p926.bottom;
            v597.style.left = p926.left;
            v597.style.position = "absolute";
            v596.zone.appendChild(v597);
            var v598 = v597.getBoundingClientRect();
            v596.zone.removeChild(v597);
            vO32 = p926;
            p926 = {
              x: (v596.dumbBox ? v596.dumbBox.left : v598.left) + v595.x,
              y: (v596.dumbBox ? v596.dumbBox.top : v598.top) + v595.y
            };
          }
          var v599 = new f169(vThis80, {
            color: v596.color,
            size: v596.size,
            threshold: v596.threshold,
            fadeTime: v596.fadeTime,
            dataOnly: v596.dataOnly,
            restJoystick: v596.restJoystick,
            restOpacity: v596.restOpacity,
            mode: v596.mode,
            identifier: p927,
            position: p926,
            zone: v596.zone,
            frontPosition: {
              x: 0,
              y: 0
            }
          });
          if (!v596.dataOnly) {
            vO22.applyPosition(v599.ui.el, vO32);
            vO22.applyPosition(v599.ui.front, v599.frontPosition);
          }
          vThis80.nipples.push(v599);
          vThis80.trigger("added " + v599.identifier + ":added", v599);
          vThis80.manager.trigger("added " + v599.identifier + ":added", v599);
          vThis80.bindNipple(v599);
          return v599;
        };
        f170.prototype.updateBox = function () {
          var vThis81 = this;
          vThis81.box = vThis81.options.zone.getBoundingClientRect();
        };
        f170.prototype.bindNipple = function (p928) {
          var vThis82 = this;
          var v600;
          var v_0x3578f3 = function f171(p929, p930) {
            v600 = p929.type + " " + p930.id + ":" + p929.type;
            vThis82.trigger(v600, p930);
          };
          p928.on("destroyed", vThis82.onDestroyed.bind(vThis82));
          p928.on("shown hidden rested dir plain", v_0x3578f3);
          p928.on("dir:up dir:right dir:down dir:left", v_0x3578f3);
          p928.on("plain:up plain:right plain:down plain:left", v_0x3578f3);
        };
        f170.prototype.pressureFn = function (p931, p932, p933) {
          var vThis83 = this;
          var vLN098 = 0;
          clearInterval(vThis83.pressureIntervals[p933]);
          vThis83.pressureIntervals[p933] = setInterval(function () {
            var v601 = p931.force || p931.pressure || p931.webkitForce || 0;
            if (v601 !== vLN098) {
              p932.trigger("pressure", v601);
              vThis83.trigger("pressure " + p932.identifier + ":pressure", v601);
              vLN098 = v601;
            }
          }.bind(vThis83), 100);
        };
        f170.prototype.onstart = function (p934) {
          var vThis84 = this;
          var v602 = vThis84.options;
          p934 = vO22.prepareEvent(p934);
          vThis84.updateBox();
          var v_0xbe1de9 = function f172(p935) {
            if (vThis84.actives.length < v602.maxNumberOfNipples) {
              vThis84.processOnStart(p935);
            }
          };
          vO22.map(p934, v_0xbe1de9);
          vThis84.manager.bindDocument();
          return false;
        };
        f170.prototype.processOnStart = function (p936) {
          var vThis85 = this;
          var v603 = vThis85.options;
          var v604;
          var v605 = vThis85.manager.getIdentifier(p936);
          var v606 = p936.force || p936.pressure || p936.webkitForce || 0;
          var vO33 = {
            x: p936.pageX,
            y: p936.pageY
          };
          var v607 = vThis85.getOrCreate(v605, vO33);
          if (v607.identifier !== v605) {
            vThis85.manager.removeIdentifier(v607.identifier);
          }
          v607.identifier = v605;
          var v_0x4e059 = function f173(p937) {
            p937.trigger("start", p937);
            vThis85.trigger("start " + p937.id + ":start", p937);
            p937.show();
            if (v606 > 0) {
              vThis85.pressureFn(p936, p937, p937.identifier);
            }
            vThis85.processOnMove(p936);
          };
          if ((v604 = vThis85.idles.indexOf(v607)) >= 0) {
            vThis85.idles.splice(v604, 1);
          }
          vThis85.actives.push(v607);
          vThis85.ids.push(v607.identifier);
          if (v603.mode !== "semi") {
            v_0x4e059(v607);
          } else {
            var v608 = vO22.distance(vO33, v607.position);
            if (v608 <= v603.catchDistance) {
              v_0x4e059(v607);
            } else {
              v607.destroy();
              vThis85.processOnStart(p936);
              return;
            }
          }
          return v607;
        };
        f170.prototype.getOrCreate = function (p938, p939) {
          var vThis86 = this;
          var v609 = vThis86.options;
          var v610;
          if (/(semi|static)/.test(v609.mode)) {
            v610 = vThis86.idles[0];
            if (v610) {
              vThis86.idles.splice(0, 1);
              return v610;
            }
            if (v609.mode === "semi") {
              return vThis86.createNipple(p939, p938);
            }
            console.warn("Coudln't find the needed nipple.");
            return false;
          }
          v610 = vThis86.createNipple(p939, p938);
          return v610;
        };
        f170.prototype.processOnMove = function (p940) {
          var vThis87 = this;
          var v611 = vThis87.options;
          var v612 = vThis87.manager.getIdentifier(p940);
          var v613 = vThis87.nipples.get(v612);
          if (!v613) {
            console.error("Found zombie joystick with ID " + v612);
            vThis87.manager.removeIdentifier(v612);
            return;
          }
          v613.identifier = v612;
          var v614 = v613.options.size / 2;
          var vO34 = {
            x: p940.pageX,
            y: p940.pageY
          };
          var v615 = vO22.distance(vO34, v613.position);
          var v616 = vO22.angle(vO34, v613.position);
          var v617 = vO22.radians(v616);
          var v618 = v615 / v614;
          if (v615 > v614) {
            v615 = v614;
            vO34 = vO22.findCoord(v613.position, v615, v616);
          }
          var v619 = vO34.x - v613.position.x;
          var v620 = vO34.y - v613.position.y;
          if (v611.lockX) {
            v620 = 0;
          }
          if (v611.lockY) {
            v619 = 0;
          }
          v613.frontPosition = {
            x: v619,
            y: v620
          };
          if (!v611.dataOnly) {
            vO22.applyPosition(v613.ui.front, v613.frontPosition);
          }
          var vO35 = {
            identifier: v613.identifier,
            position: vO34,
            force: v618,
            pressure: p940.force || p940.pressure || p940.webkitForce || 0,
            distance: v615,
            angle: {
              radian: v617,
              degree: v616
            },
            instance: v613,
            lockX: v611.lockX,
            lockY: v611.lockY
          };
          vO35 = v613.computeDirection(vO35);
          vO35.angle = {
            radian: vO22.radians(180 - v616),
            degree: 180 - v616
          };
          v613.trigger("move", vO35);
          vThis87.trigger("move " + v613.id + ":move", vO35);
        };
        f170.prototype.processOnEnd = function (p941) {
          var vThis88 = this;
          var v621 = vThis88.options;
          var v622 = vThis88.manager.getIdentifier(p941);
          var v623 = vThis88.nipples.get(v622);
          var v624 = vThis88.manager.removeIdentifier(v623.identifier);
          if (!v623) {
            return;
          }
          if (!v621.dataOnly) {
            v623.hide(function () {
              if (v621.mode === "dynamic") {
                v623.trigger("removed", v623);
                vThis88.trigger("removed " + v623.id + ":removed", v623);
                vThis88.manager.trigger("removed " + v623.id + ":removed", v623);
                v623.destroy();
              }
            });
          }
          clearInterval(vThis88.pressureIntervals[v623.identifier]);
          v623.resetDirection();
          v623.trigger("end", v623);
          vThis88.trigger("end " + v623.id + ":end", v623);
          if (vThis88.ids.indexOf(v623.identifier) >= 0) {
            vThis88.ids.splice(vThis88.ids.indexOf(v623.identifier), 1);
          }
          if (vThis88.actives.indexOf(v623) >= 0) {
            vThis88.actives.splice(vThis88.actives.indexOf(v623), 1);
          }
          if (/(semi|static)/.test(v621.mode)) {
            vThis88.idles.push(v623);
          } else if (vThis88.nipples.indexOf(v623) >= 0) {
            vThis88.nipples.splice(vThis88.nipples.indexOf(v623), 1);
          }
          vThis88.manager.unbindDocument();
          if (/(semi|static)/.test(v621.mode)) {
            vThis88.manager.ids[v624.id] = v624.identifier;
          }
        };
        f170.prototype.onDestroyed = function (p942, p943) {
          var vThis89 = this;
          if (vThis89.nipples.indexOf(p943) >= 0) {
            vThis89.nipples.splice(vThis89.nipples.indexOf(p943), 1);
          }
          if (vThis89.actives.indexOf(p943) >= 0) {
            vThis89.actives.splice(vThis89.actives.indexOf(p943), 1);
          }
          if (vThis89.idles.indexOf(p943) >= 0) {
            vThis89.idles.splice(vThis89.idles.indexOf(p943), 1);
          }
          if (vThis89.ids.indexOf(p943.identifier) >= 0) {
            vThis89.ids.splice(vThis89.ids.indexOf(p943.identifier), 1);
          }
          vThis89.manager.removeIdentifier(p943.identifier);
          vThis89.manager.unbindDocument();
        };
        f170.prototype.destroy = function () {
          var vThis90 = this;
          vThis90.unbindEvt(vThis90.options.zone, "start");
          vThis90.nipples.forEach(function (p944) {
            p944.destroy();
          });
          for (var v625 in vThis90.pressureIntervals) {
            if (vThis90.pressureIntervals.hasOwnProperty(v625)) {
              clearInterval(vThis90.pressureIntervals[v625]);
            }
          }
          vThis90.trigger("destroyed", vThis90.nipples);
          vThis90.manager.unbindDocument();
          vThis90.off();
        };
        function f174(p945) {
          var vThis91 = this;
          vThis91.ids = {};
          vThis91.index = 0;
          vThis91.collections = [];
          vThis91.config(p945);
          vThis91.prepareCollections();
          var v626;
          vO22.bindEvt(window, "resize", function (p946) {
            clearTimeout(v626);
            v626 = setTimeout(function () {
              var v627;
              var v628 = vO22.getScroll();
              vThis91.collections.forEach(function (p947) {
                p947.forEach(function (p948) {
                  v627 = p948.el.getBoundingClientRect();
                  p948.position = {
                    x: v628.x + v627.left,
                    y: v628.y + v627.top
                  };
                });
              });
            }, 100);
          });
          return vThis91.collections;
        }
        ;
        f174.prototype = new f168();
        f174.constructor = f174;
        f174.prototype.prepareCollections = function () {
          var vThis92 = this;
          vThis92.collections.create = vThis92.create.bind(vThis92);
          vThis92.collections.on = vThis92.on.bind(vThis92);
          vThis92.collections.off = vThis92.off.bind(vThis92);
          vThis92.collections.destroy = vThis92.destroy.bind(vThis92);
          vThis92.collections.get = function (p949) {
            var v629;
            vThis92.collections.every(function (p950) {
              if (v629 = p950.get(p949)) {
                return false;
              }
              return true;
            });
            return v629;
          };
        };
        f174.prototype.create = function (p951) {
          return this.createCollection(p951);
        };
        f174.prototype.createCollection = function (p952) {
          var vThis93 = this;
          var v630 = new f170(vThis93, p952);
          vThis93.bindCollection(v630);
          vThis93.collections.push(v630);
          return v630;
        };
        f174.prototype.bindCollection = function (p953) {
          var vThis94 = this;
          var v631;
          var v_0x43f15a = function f175(p954, p955) {
            v631 = p954.type + " " + p955.id + ":" + p954.type;
            vThis94.trigger(v631, p955);
          };
          p953.on("destroyed", vThis94.onDestroyed.bind(vThis94));
          p953.on("shown hidden rested dir plain", v_0x43f15a);
          p953.on("dir:up dir:right dir:down dir:left", v_0x43f15a);
          p953.on("plain:up plain:right plain:down plain:left", v_0x43f15a);
        };
        f174.prototype.bindDocument = function () {
          var vThis95 = this;
          if (!vThis95.binded) {
            vThis95.bindEvt(document, "move").bindEvt(document, "end");
            vThis95.binded = true;
          }
        };
        f174.prototype.unbindDocument = function (p956) {
          var vThis96 = this;
          if (!Object.keys(vThis96.ids).length || p956 === true) {
            vThis96.unbindEvt(document, "move").unbindEvt(document, "end");
            vThis96.binded = false;
          }
        };
        f174.prototype.getIdentifier = function (p957) {
          var v632;
          if (!p957) {
            v632 = this.index;
          } else {
            v632 = p957.identifier === undefined ? p957.pointerId : p957.identifier;
            if (v632 === undefined) {
              v632 = this.latest || 0;
            }
          }
          if (this.ids[v632] === undefined) {
            this.ids[v632] = this.index;
            this.index += 1;
          }
          this.latest = v632;
          return this.ids[v632];
        };
        f174.prototype.removeIdentifier = function (p958) {
          var vO36 = {};
          for (var v633 in this.ids) {
            if (this.ids[v633] === p958) {
              vO36.id = v633;
              vO36.identifier = this.ids[v633];
              delete this.ids[v633];
              break;
            }
          }
          return vO36;
        };
        f174.prototype.onmove = function (p959) {
          var vThis97 = this;
          vThis97.onAny("move", p959);
          return false;
        };
        f174.prototype.onend = function (p960) {
          var vThis98 = this;
          vThis98.onAny("end", p960);
          return false;
        };
        f174.prototype.oncancel = function (p961) {
          var vThis99 = this;
          vThis99.onAny("end", p961);
          return false;
        };
        f174.prototype.onAny = function (p962, p963) {
          var vThis100 = this;
          var v634;
          var v635 = "processOn" + p962.charAt(0).toUpperCase() + p962.slice(1);
          p963 = vO22.prepareEvent(p963);
          var v_0x3f636d = function f176(p964, p965, p966) {
            if (p966.ids.indexOf(p965) >= 0) {
              p966[v635](p964);
              p964._found_ = true;
            }
          };
          var v_0x29c74b = function f177(p967) {
            v634 = vThis100.getIdentifier(p967);
            vO22.map(vThis100.collections, v_0x3f636d.bind(null, p967, v634));
            if (!p967._found_) {
              vThis100.removeIdentifier(v634);
            }
          };
          vO22.map(p963, v_0x29c74b);
          return false;
        };
        f174.prototype.destroy = function () {
          var vThis101 = this;
          vThis101.unbindDocument(true);
          vThis101.ids = {};
          vThis101.index = 0;
          vThis101.collections.forEach(function (p968) {
            p968.destroy();
          });
          vThis101.off();
        };
        f174.prototype.onDestroyed = function (p969, p970) {
          var vThis102 = this;
          if (vThis102.collections.indexOf(p970) < 0) {
            return false;
          }
          vThis102.collections.splice(vThis102.collections.indexOf(p970), 1);
        };
        var v636 = new f174();
        return {
          create: function f178(p971) {
            return v636.create(p971);
          },
          factory: v636
        };
      });
      var v637 = false;
      var v638 = true;
      var vLN22 = 2;
      var v639 = null;
      var vLN16 = 1;
      var vO37 = {};
      var vLN099 = 0;
      window.createLine = function (p972, p973) {
        var v640 = new PIXI.Graphics();
        var vLSff0000 = "#ff0000";
        if (bbs.laserColor && typeof bbs.laserColor === "string") {
          vLSff0000 = parseInt(bbs.laserColor.toString().replace("#", "0x"));
        }
        v640.lineStyle(bbs.laser || 0.2, vLSff0000, 1);
        v640.moveTo(0, 0);
        v640.lineTo(0, 0);
        v640.zIndex = 10001;
        v640.name = "lineHS";
        v640.alpha = 0;
        v640.filters = [new PIXI.filters.BlurFilter(5)];
        p972.addChild(v640);
      };
      window.movimentaLinha = function () {
        try {
          if (!_wwc._anApp.dh.ch.Nm) {
            return;
          }
          var v641 = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS");
          var v642 = _wwc._anApp.dh.ch.Nm.oc;
          var v643 = v642.position.x;
          var v644 = v642.position.y;
          var vLSff00002 = "#ff0000";
          if (bbs.laserColor && typeof bbs.laserColor === "string") {
            vLSff00002 = parseInt(bbs.laserColor.toString().replace("#", "0x"));
          }
          v641.lineStyle(bbs.laser || 0.2, vLSff00002, 1);
          v641.clear();
          v641.lineStyle(bbs.laser || 0.1, vLSff00002, 1);
          v641.moveTo(0, 0);
          v641.lineTo(v643, v644);
          if (bbs.laserActive && _wwc.ismobile) {
            v641.alpha = 0.3;
          }
          v641.filters = [new PIXI.filters.BlurFilter(5)];
        } catch (e24) {
          console.error(e24);
        }
      };
      window.gerarCodigoUnico = function () {
        var v645 = bbs.userId || "";
        var v646 = v645.match(/\d/g);
        var v647 = (v646 || []).reduce(function (p974, p975) {
          return p974 + parseInt(p975, 10);
        }, 0);
        var vLS0123456789ABCDEFGHIJ = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var vLN5 = 5;
        var vLS7 = "";
        var vLS8 = "";
        for (var vLN0100 = 0; vLN0100 < vLN5; vLN0100++) {
          var v648 = Math.floor(Math.random() * vLS0123456789ABCDEFGHIJ.length);
          vLS7 += vLS0123456789ABCDEFGHIJ.charAt(v648);
          var v649 = Math.floor(Math.random() * vLS0123456789ABCDEFGHIJ.length);
          vLS8 += vLS0123456789ABCDEFGHIJ.charAt(v649);
        }
        return "ROOM" + vLS8 + "_" + v647 + "_" + vLS7;
      };
      var vO38 = {
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
      var vO39 = {
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
      var vA24 = ["sao", "dal", "hil", "vin", "fra", "gra", "sin", "tok", "dxb"];
      var vO40 = {
        loaded: false,
        sprites: {},
        textures: {},
        resources: {}
      };
      $("#mm-params-nickname").attr("maxlength", vLN18);
      var vO41 = {
        ref: [],
        hs: {},
        fxdo: function f179(p976) {
          if (bbs.activeSounds2 && bbs.start) {
            if (!vO41[p976].playing()) {
              vO41[p976].play();
            }
          }
        },
        fxAux: function f180(p977, p978) {
          if (p978 === 1 && !vO41.fxStatus.top1) {
            vO41.fxStatus.top1 = true;
            vO41.fxdo("top1");
          }
          return p977;
        },
        fxStatus: {
          top1: false
        }
      };
      window._wwcio = {
        message: null,
        obj: {},
        player: {},
        join: function f181() {},
        update: function f182() {},
        leave: function f183() {},
        leaderboardUpdated: function f184(p979, p980) {
          v_0x1b17f5(p979, p980);
        },
        sendLocation: function f185() {},
        findFriend: function f186() {},
        close: function f187() {},
        set: function f188(p981) {
          return p981;
        },
        friend: null,
        myLocation: {},
        crown: null
      };
      window._wwc = {
        deadPositionMap: function f189() {
          var v650 = new PIXI.Text("X", _wwc.fontStyleMap());
          v650.position.x = _wwc.memory.positionOfDead.x;
          v650.position.y = _wwc.memory.positionOfDead.y;
          _wwc._anApp.og.af.ng.Tg.addChild(v650);
          var vLN0101 = 0;
          var vSetInterval2 = setInterval(function () {
            vLN0101 = !vLN0101;
            v650.alpha = vLN0101;
          }, 500);
          var vSetTimeout = setTimeout(function () {
            clearInterval(vSetInterval2);
            if (!_wwc._anApp.og.af.ng.Tg) {
              return;
            }
            _wwc._anApp.og.af.ng.Tg.removeChild(v650);
            v650.destroy();
          }, 60000);
          _wwc.removeDeadPositionMap = function () {
            clearInterval(vSetInterval2);
            clearTimeout(vSetTimeout);
            if (!_wwc._anApp.og.af.ng.Tg) {
              return;
            }
            _wwc._anApp.og.af.ng.Tg.removeChild(v650);
            if (v650 && v650.destroy) {
              v650.destroy();
            }
          };
        },
        fontStyleMap: function f190(p982) {
          return {
            fontFamily: "Arial",
            fontSize: "12px",
            fill: "red",
            align: "center",
            fontWeight: "bold"
          };
        },
        startGame: function f191() {
          if (_wwc.memory.positionOfDead) {
            var v651 = _wwc.deadPositionMap();
          }
        },
        stopGame: function f192() {
          var v652;
          var v653;
          _wwcio.close();
          _wwcio.findFriendActived = false;
          if (!_wwcio.myLocation) {
            return;
          }
          _wwc.memory.positionOfDead = {
            x: (v652 = _wwcio.myLocation) === null || v652 === undefined || (v652 = v652.position) === null || v652 === undefined ? undefined : v652.x,
            y: (v653 = _wwcio.myLocation) === null || v653 === undefined || (v653 = v653.position) === null || v653 === undefined ? undefined : v653.y
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
        testSkinMod: function f193(p983) {
          var v654 = typeof p983 === "string";
          p983 = parseInt(p983);
          if (v654 && isNaN(p983)) {
            return false;
          } else {
            return parseInt(p983) >= 399 && parseInt(p983) < 8999;
          }
        },
        testWear: function f194(p984) {
          var v655 = typeof p984 === "string";
          p984 = parseInt(p984);
          if (v655 && isNaN(p984)) {
            return false;
          } else {
            return parseInt(p984) >= 399 && parseInt(p984) < 8999;
          }
        },
        isNumberValid: function f195(p985) {
          return p985 !== "" && p985 !== null && p985 !== undefined && !isNaN(p985);
        },
        validInputWear: function f196(p986) {
          var v656 = _wwc.testWear(p986);
          var v657 = typeof skinId === "string";
          if (!v656 && !v657) {
            return p986;
          }
          return 0;
        },
        validInput: function f197(p987) {
          var v658 = _wwc.testSkinMod(p987);
          var v659 = typeof p987 === "string";
          if (!v658 && !v659) {
            return p987;
          }
          try {
            var v660 = $("#inputReplaceSkin").val();
            return encodeURI(_wwc.isNumberValid(v660) ? v660 : bbs.idReplaceSkin || 35);
          } catch (e25) {
            return encodeURI(35);
          }
        },
        fullscreen: null,
        joystick: function f198(p988) {
          var vO42 = {
            checked: true,
            color: "red",
            mode: "dynamic",
            positionMode: "L",
            size: 100,
            pxy: 100
          };
          return vO42;
        },
        load_con: function f199() {
          $(".selecionar-sala-v2").click(function (p989) {
            p989.preventDefault();
            var v661 = $(this).attr("data-con") || bbs.con;
            var v662 = $(this).attr("data-type");
            w2c2020.addRoom($(this).attr("data-room"));
            vO47.dh.Zp = function (p990, p991, p992) {
              bbs.con = p992 ? p990 : v661 || p990;
              _wwc.Zp(bbs.con, p991);
            };
            vO47.Pn();
          });
        },
        fnSaveGame: function f200() {
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
        fnSetCounts: function f201(p993, p994) {
          var v_0xa35afe = function f202(p995, p996, p997, p998) {
            _wwc.setCountGame(p995, p996, p997, p998);
          };
          if (p993 === "count") {
            bbs.kill = (bbs.kill || 0) + (p994 ? 0 : 1);
            bbs.headshot = (bbs.headshot || 0) + (p994 ? 1 : 0);
            bbs.HOL = bbs.headshot > bbs.HOL ? bbs.headshot : bbs.HOL;
            bbs.tkill = bbs.tkill + (p994 ? 0 : 1);
            bbs.theadshot = bbs.theadshot + (p994 ? 1 : 0);
          }
          if (p993 === "open") {
            bbs.kill = 0;
            bbs.headshot = 0;
            if (bbs.saveGame) {}
          }
          if (p993 === "close") {
            if (bbs.saveGame) {
              bbs.died = (bbs.died || 0) + 1;
            } else {
              _wwc.fnSetCounts("zerar");
            }
          }
          if (p993 === "zerar") {
            bbs.kill = 0;
            bbs.tkill = 0;
            bbs.headshot = 0;
            bbs.theadshot = 0;
            bbs.died = 0;
          }
          v_0xa35afe(bbs.kill, bbs.headshot, bbs.tkill, bbs.theadshot);
          localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
        },
        setCountGame: function f203(p999, p1000, p1001, p1002) {
          if (!bbs.saveGame) {
            w2c2020.hsTotal.alpha = 0;
            w2c2020.killTotal.alpha = 0;
          }
          w2c2020.hs.text = p1000;
          w2c2020.hsTotal.text = p1002;
          w2c2020.kill.text = p999;
          w2c2020.killTotal.text = p1001;
        },
        ismobile: f222(),
        Zp: undefined
      };
      window.bbs = {
      hudPositionMode: 0,
        flx: 0,
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
        lr: 10,
        showTophs: false,
        showRechs: false,
        con: null,
        params: "",
        arrow: true,
        activeBadLang: false,
        activeSounds2: true,
        activeZoom: true,
        activeZoomMobile: true,
         hudSettings: {
        mode: 0,
        wi: 0.5
      },
        top10Show: [],
        background: null,
        backgroundIsCustom: false,
        nickname: null,
        code: null,
        configZoom: {
          limitDown: 1.25,
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
      var v663 = localStorage.getItem("wwc_version");
      var v664 = localStorage.getItem("wwcSaveGame");
      var v665 = localStorage.getItem("wwc_config");
      v664 &&= JSON.parse(v664);
      for (var v666 in v664) {
        switch (v666) {
          case "configJoystick":
            if (!v664[v666]) {
              break;
            }
            bbs[v666] = v664[v666];
            for (var v667 in v664[v666].buttons) {
              bbs[v666].buttons[v667] = v664[v666].buttons[v667];
            }
            for (var v668 in v664[v666]) {
              bbs[v666][v668] = v664[v666][v668];
            }
            break;
          case "joystick":
            bbs[v666] = _wwc.joystick();
            for (var v669 in v664[v666]) {
              bbs[v666][v669] = v664[v666][v669];
            }
            break;
          case "display":
            for (var v670 in v664[v666]) {
              bbs[v666][v670] = v664[v666][v670];
            }
            break;
          default:
            bbs[v666] = v664[v666];
            break;
        }
      }
      if (!bbs.version || bbs.version !== vLN22) {
        bbs.version = vLN22;
        bbs.joystick = _wwc.joystick();
      }
      bbs.loading = true;
      window.respawnFn = function () {
        vO47.dh.Cn = 0;
        if (vO47.dh.mq) {
          vO47.dh.mq.close();
        }
        vO47.dh.mq = null;
        vO47.dh.Zp = function (p1003, p1004) {
          _wwc.Zp(bbs.con || p1003, p1004);
        };
        vO47.Pn();
      };
      window.lobbyFn = function () {
        vO47.dh.Cn = 0;
        if (vO47.dh.mq) {
          vO47.dh.mq.close();
        }
        vO47.dh.mq = null;
        vO47.dh.Np();
        v_0x21e4e3();
      };
      $("<button type=\"button\" id=\"mm-wwc\" style=\"float: right;line-height: 48px;width: 61px;background: #156ab3;color: #FFF;font-weight: bold;margin-right: 5px;border-radius: 7px; cursor: pointer;\">Set </button>").insertAfter("#mm-store");
      $(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
      $(".wear-view-cont").append("<div id=\"idWearViewCont\"></div>");
      var vLSDisplaynonepositionr = "display:none;position:relative;background:#FFF;padding:15px;max-width:680px;margin:10px auto;";
      if (_wwc.ismobile) {
        vLSDisplaynonepositionr = "display:none;position:relative;\n                  background:#FFF;padding:20px;\n                  width:calc(100vw - var(--scrollbar-width));\n                  height:100vh;";
      }
      $("body").append(`<div id="wwc-set-view" class="base-popup-view" style="${vLSDisplaynonepositionr}"></div>`);
      var vLSAss = "ass";
      window.mbf = {};
      var v_0x35a3af = function f204(p1005) {
        if (bbs.shiftKey) {
          return;
        }
        var vLN30 = 30;
        var vLN0102 = 0;
        var v671 = false;
        function f205() {
          var vParseFloat = parseFloat(vO47.og.af.Bn);
          vParseFloat = (vParseFloat - 0.06) % (Math.PI * 2);
          if (vParseFloat < 0) {
            vParseFloat += Math.PI * 2;
          }
          vO47.og.af.Bn = vParseFloat.toFixed(2);
        }
        function f206(p1006) {
          v637 = setInterval(function () {
            if (p1006 === 1) {
              vLN0102 = v671 ? vLN0102 - 1 : vLN0102 + 1;
              if (vLN0102 % 80 === 0 && !v671) {
                vLN30 = vLN30 + 18;
                clearInterval(v637);
                f206(1);
              }
            }
            f205();
          }, vLN30);
        }
        if ((p1005 == 7 || p1005.key == "7") && v637 === null) {
          vO47.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
          f206(1);
          return;
        }
        if ((p1005 == 8 || p1005.key == "8") && v637 === null) {
          vO47.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
          f206(2);
          return;
        }
        if (v637 !== null) {
          clearInterval(v637);
          vO47.og.af.ng.Eb.addEventListener("pointermove", mbf.onmovepoint, true);
          v637 = null;
        }
      };
      mbf.mbfass0 = function () {
        _wwcio.findFriend();
      };
      mbf.mbfass1 = function () {
        var v672 = vO47.Ij.Rk.customer ? 400 : 400;
        if (vLN16 <= v672) {
          vLN16 += vLN16 > 15 ? 1 : bbs.configZoom?.step || 1.25;
        }
        vLN16 = Math.min(vLN16, v672);

      };
      mbf.mbfass2 = function () {
        var v673 = vLN16 - (vLN16 > 15 ? 1 : bbs.configZoom?.step);
        vLN16 = v673 < bbs.configZoom?.limitDown ? bbs.configZoom?.step : v673;
      };
      mbf.mbfass3 = function () {
        if (mbf.mbf_rotate) {
          v_0x35a3af(8);
          $("#mbf_rotate").css("background-color", "#000");
        } else {
          v_0x35a3af(v637 ? 0 : 8);
        }
        if (v637) {
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
          v_0x35a3af(8);
        } else {
          v_0x35a3af(v637 ? 0 : 8);
        }
        if (v637) {
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
        vLN16 = 1;
      };
      mbf.mbfass9 = function (p1007) {
        var v674 = vO47.Ij.Rk.customer ? 100 : 2;
        if (p1007.value <= v674) {
          vLN16 = p1007.value;
        }
      };
      mbf.mbf_cambiar_origin = null;
      mbf.mbf_cambiar_current = 0;
      mbf.mbf_cambiar_seq = 0;
      mbf.mbf_cambiar_add = function (p1008, p1009) {
        if (!bbs.cambiar) {
          bbs.cambiar = {};
        }
        if (bbs.cambiar[p1008]) {
          alert("Skin already exists in the list of skins to be");
          return;
        }
        bbs.cambiar[p1008] = p1009 || "Skin " + p1008;
        alert("Skin added to the list of skins to be");
        // localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
        console.log(bbs.cambiar);
      };
      mbf.mbf_cambiar = function () {
        if (mbf.mbf_cambiar_origin === null) {
          mbf.mbf_cambiar_origin = _wwc._anApp.dh.ch.Eh.Hh;
        }
        var v675 = Object.keys(bbs.cambiar);
        if (mbf.mbf_cambiar_seq >= v675.length) {
          mbf.mbf_cambiar_seq = 0;
        }
        for (var vLN0103 = 0; vLN0103 < v675.length; vLN0103++) {
          mbf.mbf_cambiar_current = v675[vLN0103];
          if (vLN0103 === mbf.mbf_cambiar_seq) {
            mbf.mbf_cambiar_current = v675[vLN0103];
            break;
          }
        }
        mbf.mbf_cambiar_seq = mbf.mbf_cambiar_seq + 1;
        _wwc._anApp.dh.ch.Eh.Hh = mbf.mbf_cambiar_current;
        _wwc._anApp.dh.ch.Sm();
      };
      if (bbs.activeZoom) {
        window.onwheel = function (p1010) {
          if (p1010.deltaY < 0) {
            mbf.mbfass1();
          } else {
            mbf.mbfass2();
          }
        };
      }
      var v$2 = $("#idReplaceSkin");
      var vF25 = function () {
        var vF164 = f164(f151().m(function f207(p1011, p1012) {
          return f151().w(function (p1013) {
            while (1) {
              switch (p1013.n) {
                case 0:
                  if (!p1012) {
                    p1013.n = 1;
                    break;
                  }
                  return p1013.a(2);
                case 1:
                  if (!p1011) {
                    p1011 = vO47.Ij.Rk;
                  }
                  console.log(p1011);
                  bbs.userId = p1011.userId;
                  p1013.n = 2;
                  return fetch("https://game.platenn.store/load-page?v="+ Date.now(), {
                  }).then(function (p1014) {
                    p1014.text().then(function (p1015) {
                      $(".description-text").html(p1015);
                      if (p1011.type === "error") {
                        $(".description-text").html(p1011.msg);
                      }
                    });
                  }).catch(function () {
                    $(".description-text").html("Problema de conexão.");
                  });
                case 2:
                  p1013.n = 3;
                  return fetch(URLSERV_WORMWORLD + "/set-worm-world", {
                    headers: {
                      "Content-Type": "application/json",
                      "x-access-token": p1011.tk,
                      "x-uid": bbs.wuid
                    },
                    method: "POST",
                    body: JSON.stringify({
                      userId: bbs.userId
                    })
                  }).then(function (p1016) {
                    p1016.text().then(function (p1017) {
                      $("#wwc-set-view").html(p1017);
                      $("#mm-wwc").click(function (p1018) {
                        $("#wwc-set-view").css("display", "block");
                      });
                      _wwc.load_con();
                      _wwc.fnSaveGame();
                      _wwc.fnSetCounts("start");
                      $("#backgroundArena").change(function () {
                        var v676 = $(this).val();
                        bbs.background = v676;
                        bbs.backgroundUri = null;
                        vO47.xe._g = vO48.bgg(v676);
                        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
                        _wwc._anApp.og.af.ng.Lg.$g(vO47.xe._g);
                        alert("Background changed!");
                      });
                      if (bbs.background !== undefined && bbs.background !== null) {
                        $("#backgroundArena").val(bbs.background);
                        var vParseInt2 = parseInt(bbs.background, 10);
                        vO47.xe._g = vO48.bgg(vParseInt2);
                        _wwc._anApp.og.af.ng.Lg.$g(vO47.xe._g);
                      }
                      var v677 = _wwc.isNumberValid(bbs.idReplaceSkin);
                      if (v677) {
                        $("#inputReplaceSkin").val(bbs.idReplaceSkin);
                      } else {
                        var v678 = $("#inputReplaceSkin").val();
                        v677 = _wwc.isNumberValid(v678);
                        bbs.idReplaceSkin = v677 ? v678 : 33;
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
                  return p1013.a(2);
              }
            }
          }, f207);
        }));
        return function f208(p1019, p1020) {
          return vF164.apply(this, arguments);
        };
      }();
      var v_0x46cab7 = function f209(p1021) {
        if (bbs.PropertyManager) {
          if (bbs.PropertyManager.lj) {
            p1021.skinId = bbs.PropertyManager.lj;
          }
          if (bbs.PropertyManager.mj) {
            p1021.eyesId = bbs.PropertyManager.mj;
          }
          if (bbs.PropertyManager.nj) {
            p1021.mouthId = bbs.PropertyManager.nj;
          }
          if (bbs.PropertyManager.pj) {
            p1021.glassesId = bbs.PropertyManager.pj;
          }
          if (bbs.PropertyManager.oj) {
            p1021.hatId = bbs.PropertyManager.oj;
          }
        }
      };
      var vF27 = function () {
        var vF1642 = f164(f151().m(function f210(p1022, p1023) {
          var v679;
          var v680;
          var v681;
          var v682;
          return f151().w(function (p1024) {
            while (1) {
              switch (p1024.n) {
                case 0:
                  $("#mm-params-nickname").prop("maxlength", vLN18);
                  p1023(p1022);
                  vF25(p1022);
                  _wwc._anApp = vO47;
                  _wwc._tx = function (p1025) {
                    Object.keys(p1025).forEach(function (p1026) {
                      if (p1025[p1026].Yi) {
                        p1025[p1026].fj.nh.Cc.xc.width = p1025[p1026].fj.nh.Cc.xc.width + 2;
                        p1025[p1026].fj.nh.Cc.xc.height = p1025[p1026].fj.nh.Cc.xc.height + 2;
                      }
                    });
                  };
                  _wwc.Zp = vO47.dh.Zp;
                  vO47.dh.Dq = function (p1027, p1028, _0x2fb4b7 = 0) {
                    try {
                      fetch(URLSERV_WORMWORLD + "/game-connect", {
                        headers: {
                          "Content-Type": "application/json",
                          "x-access-token": vO47.Ij.Rk.tk,
                          "x-uid": bbs.wuid
                        },
                        method: "POST",
                        body: JSON.stringify({
                          nickname: bbs.nickname,
                          code: bbs.code,
                          teamRoom: _wwcio.player.teamRoom
                        })
                      }).then(function () {
                        var vF1643 = f164(f151().m(function f211(p1029) {
                          var v683;
                          var v684;
                          return f151().w(function (p1030) {
                            while (1) {
                              switch (p1030.n) {
                                case 0:
                                  p1030.n = 1;
                                  return p1029.json();
                                case 1:
                                  v683 = p1030.v;
                                  v684 = vO47.dh;
                                  if (!v683.connected) {
                                    p1030.n = 2;
                                    break;
                                  }
                                  alert("Update Page\n\nWarning:We detected an invalid action. This may have occurred because your access token was updated, but the game was not properly restarted. Please refresh the page to continue playing safely. If the problem persists, make sure you are not using external modifications or unauthorized extensions.");
                                  v684.Cq();
                                  return p1030.a(2);
                                case 2:
                                  v684.mq = new WebSocket(p1027);
                                  v684.mq.binaryType = "arraybuffer";
                                  vLN16 = _wwc.ismobile ? 1.25 : 1;
                                  bbs.start = new Date();
                                  bbs.con = p1027;
                                  vO37 = {};
                                  vO48.setIntervalRun = setInterval(function () {
                                    vO48.ps3();
                                  }, 20);
                                  v684.mq.onopen = function () {
                                    v_0x171fc3();
                                    _wwc.fnSetCounts("open");
                                    p1028();
                                  };
                                  v684.mq.onclose = function () {
                                    v_0x21e4e3();
                                    _wwc.fnSetCounts("close");
                                    _wwc.stopGame();
                                    clearInterval(vO48.setIntervalRun);
                                    vO48.loadBg = false;
                                    bbs.start = 0;
                                  };
                                  v684.mq.onerror = function (p1031) {
                                    v_0x21e4e3();
                                    _wwc.fnSetCounts("close");
                                    _wwc.stopGame();
                                    clearInterval(vO48.setIntervalRun);
                                    vO48.loadBg = false;
                                    bbs.start = 0;
                                    if (_0x2fb4b7 > 4) {
                                      v684.Cq();
                                    } else {
                                      setTimeout(function () {
                                        _0x2fb4b7++;
                                        console.log("Reconnect server");
                                        vO47.dh.Dq(bbs.con, p1028, _0x2fb4b7);
                                      }, 2000);
                                    }
                                  };
                                  v684.mq.onmessage = function (p1032) {
                                    v684.Kp.Ph(p1032.data);
                                  };
                                case 3:
                                  return p1030.a(2);
                              }
                            }
                          }, f211);
                        }));
                        return function (p1033) {
                          return vF1643.apply(this, arguments);
                        };
                      }());
                    } catch (e26) {
                      console.log(e26);
                      i.Cq();
                    }
                  };
                  vO47.dh.Kp.Yh = function (p1034, p1035) {
                    v_0x21e4e3();
                    this.dh.Oi();
                  };
                  vO47.og.af.ng.Ug.Uf = function (p1036) {
                    var vF28 = function () {
                      return vO48.$F.M(vO48.POGL.Sprite, function () {
                        vO48.POGL.Sprite.call(this);
                        this.sh = 0;
                      });
                    }();
                    for (var v685 in this.rh) {
                      if (p1036[v685] == null || !p1036[v685].hd) {
                        vO48.$F.U(this.rh[v685]);
                        delete this.rh[v685];
                      }
                    }
                    var vLN0104 = 0;
                    var vLN17 = 1;
                    if (bbs.display.custom) {
                      vLN17 = window.innerWidth;
                    }
                    for (var v686 in p1036) {
                      var v687 = p1036[v686];
                      if (v687.hd) {
                        var v688 = this.rh[v686];
                        if (!v688) {
                          var v689 = vO47.Lc.Ub().pb(v687.nd).ub;
                          v688 = new vF28();
                          v688.texture = v689.Ea();
                          v688.width = 40;
                          v688.height = 40;
                          this.rh[v686] = v688;
                          this.addChild(v688);
                        }
                        w2c2020.setPtc(this, v686, v687.od);
                        v688.sh = v687.od;
                    var _0x3a7239 =  vLN17 || window.innerWidth;
                    var _0x6e711 = bbs.hudSettings.mode == 0 ? vLN0104 : _0x3a7239 / 2 + vLN0104 - _0x3a7239 * bbs.hudSettings.wi;
                    v688.position.x = _0x6e711 + 5;
                    v688.position.y = v688.position.y;
                    vLN0104 += 40;
                      }
                    }
                  };
                  if (!bbs.display.customClock) {
                    vO47.og.af.ng.Tg.addChild(w2c2020.clock);
                  }
                  vO47.og.af.ng.Tg.addChild(w2c2020.containerCountInfo);
                  vO47.og.af.ng.Tg.addChild(w2c2020.labelRoom);
                  w2c2020.ptc = {};
                  v679 = [40, 40, 40, 120, 40, 20, 40];
                  for (v680 = 0; v680 < v679.length; v680++) {
                    v681 = "clock_ad" + v680;
                    w2c2020.ptc[v681] = new PIXI.Text(v679[v680], w2c2020.fontStyle["tfc" + v680]);
                    w2c2020.ptc[v681].y = 61;
                  }
                  w2c2020.setPtc = function (p1037, p1038, p1039) {
                    var v690 = v679[p1038] - parseInt((p1039 == 0.99 ? 1 : p1039) * v679[p1038] / 1);
                    var v691 = "clock_ad" + p1038;
                    p1037.rh[p1038].addChild(w2c2020.ptc[v691]);
                    if (w2c2020.ptc[v691]) {
                      w2c2020.ptc[v691].x = v690 >= 100 ? 11 : v690 >= 10 ? 18 : 26;
                      w2c2020.ptc[v691].text = v690;
                    }
                  };
                  v682 = vO47.og.af.ng.Eb;
                  mbf.onmovepoint = function (p1040) {
                    if (p1040.pointerType === "touch" && !p1040.isPrimary) {
                      return;
                    }
                    if (p1040.clientX !== undefined) {
                      vO47.og.af.Bn = Math.atan2(p1040.clientY - v682.offsetHeight * 0.5, p1040.clientX - v682.offsetWidth * 0.5);
                    } else {
                      vO47.og.af.Bn = Math.atan2(p1040.pageY - v682.offsetHeight * 0.5, p1040.pageX - v682.offsetWidth * 0.5);
                    }
                  };
                  mbf.onRun = function (p1041) {
                    if (p1041 && p1041.pointerType === "touch") {
                      return;
                    }
                    vO47.og.af.An = true;
                  };
                  mbf.onStop = function (p1042) {
                    if (p1042 && p1042.pointerType === "touch") {
                      return;
                    }
                    vO47.og.af.An = false;
                  };
                  v682.addEventListener("pointermove", mbf.onmovepoint, true);
                  v682.addEventListener("pointerdown", mbf.onRun, true);
                  v682.addEventListener("pointerup", mbf.onStop, true);
                  if (_wwc.ismobile) {
                    v682.addEventListener("touchstart", function (p1043) {
                      if (p1043 = p1043 || window.event) {
                        vO47.og.af.An = p1043.touches.length >= 2;
                      }
                      p1043.preventDefault();
                    }, true);
                    v682.addEventListener("touchend", function (p1044) {
                      if (p1044 = p1044 || window.event) {
                        vO47.og.af.An = p1044.touches.length >= 2;
                      }
                    }, true);
                  }
                case 1:
                  return p1024.a(2);
              }
            }
          }, f210);
        }));
        return function f212(p1045, p1046) {
          return vF1642.apply(this, arguments);
        };
      }();
      function f213() {
        var v692 = document.createElement("div");
        v692.style.position = "fixed";
        v692.style.top = "0";
        v692.style.height = "100%";
        v692.style.width = "100%";
        v692.style.zIndex = "1000";
        v692.id = "zone_joystick";
        document.body.appendChild(v692);
      }
      function f214() {
        var v693 = document.getElementById("zone_joystick");
        if (v693) {
          v693.remove();
        }
      }
      var v_0x21e4e3 = function f215() {
        if (v639) {
          $("#wwc-mobile-box").remove();
          $("#wwc-mobile-box-slider").remove();
          v639.destroy();
        }
        f214();
      };
      var v_0x171fc3 = function f216() {
        try {
          var v_0x1f6983 = function f217() {
            v639.on("start end", function (p1047, p1048) {}).on("move", function (p1049, p1050) {
              var v694 = p1050.angle.radian <= Math.PI ? p1050.angle.radian * -1 : Math.PI - (p1050.angle.radian - Math.PI);
              vO47.og.af.Bn = v694;
            });
          };
          var v_0x3ffa6b = function f218() {
            if (v639) {
              v639.destroy();
            }
            var vF147 = f147({}, bbs.joystick);
            var vO43 = {};
            if (bbs.customJoystick) {
              f213();
              var vF136 = f136(bbs.customJoystick.buttons);
              var v695;
              try {
                for (vF136.s(); !(v695 = vF136.n()).done;) {
                  var v696 = v695.value;
                  var v697 = document.createElement("div");
                  if (v696.svg) {
                    v697.innerHTML = v696.svg;
                  } else {
                    v697.style.color = v696.color || "#FFF";
                    v697.style.backgroundColor = v696.backgroundColor || "#000";
                    v697.style.borderRadius = "10px";
                    v697.style.textAlign = "center";
                    v697.style.fontWeight = "bold";
                    v697.style.padding = "5px";
                    v697.style.border = "1px solid #f00";
                    v697.style.fontSize = v696.size || "25px";
                    v697.innerHTML = v696.value;
                  }
                  v697.style.position = "absolute";
                  v697.style.top = v696.top;
                  v697.style.left = v696.left;
                  v697.style.display = v696.display;
                  v697.style.cursor = "pointer";
                  v697.id = "cbjt_" + v696.value;
                  v697.dataset.size = v696.size;
                  v697.dataset.color = v696.color || "#FFF";
                  v697.style.opacity = 0.6;
                  document.getElementById("zone_joystick").appendChild(v697);
                  if (v696.display !== "none") {
                    if (v696.value === "ZoomIn") {
                      v697.addEventListener("click", function (p1051) {
                        mbf.mbfass2();
                      });
                    }
                    if (v696.value === "ZoomOut") {
                      v697.addEventListener("click", function (p1052) {
                        mbf.mbfass1();
                      });
                    }
                    if (v696.value === "Accelerator") {
                      v697.addEventListener("pointerdown", function (p1053) {
                        mbf.onRun();
                      });
                      v697.addEventListener("pointerup", function (p1054) {
                        mbf.onStop();
                      });
                    }
                    if (v696.value === "Respawn") {
                      v697.addEventListener("click", function (p1055) {
                        respawnFn();
                      });
                    }
                    if (v696.value === "Rotate") {
                      v697.addEventListener("click", function (p1056) {
                        v_0x35a3af(v637 ? 0 : 8);
                      });
                    }
                    if (v696.value === "Snail") {
                      v697.addEventListener("click", function (p1057) {
                        v_0x35a3af(v637 ? 0 : 7);
                      });
                    }
                    if (v696.value === "Lobby") {
                      v697.addEventListener("click", function (p1058) {
                        lobbyFn();
                      });
                    }
                    if (v696.value === "Search") {
                      v697.addEventListener("click", function (p1059) {
                        mbf.mbfass0();
                      });
                    }
                  }
                  vO43[v696.value] = v697;
                }
              } catch (e27) {
                vF136.e(e27);
              } finally {
                vF136.f();
              }
              vO43.Directional;
              var v698 = vO43.Directional.dataset.size / 2;
              var v699 = parseInt(vO43.Directional.style.left.replace("px", "")) + v698;
              var v700 = parseInt(vO43.Directional.style.top.replace("px", "")) + v698;
              vF147 = {
                zone: vO43.Directional,
                mode: "static",
                position: {
                  left: "50%",
                  top: "50%"
                },
                dumbBox: {
                  left: v699,
                  top: v700
                },
                color: "transparent",
                size: Math.floor(vO43.Directional.dataset.size / 1.6)
              };
            } else {
              vF147.zone = document.getElementById("game-view");
              if (vF147.mode === "static") {
                delete vF147.zone;
              }
            }
            v639 = nipplejs.create(vF147);
            v_0x1f6983();
            if (bbs.customJoystick) {
              $(".nipple > .front").css("background", vO43.Directional.dataset.color);
            }
          };
          if (_wwc.ismobile) {
            var vLS9 = "";
            var v701 = bbs.configJoystick.typeCurrentName === "all" ? "label" : "labelAbbreviation";
            Object.keys(bbs.configJoystick.buttons).forEach(function (p1060) {
              vLS9 = vLS9 + (bbs.configJoystick.buttons[p1060].active ? `<button onclick="${bbs.configJoystick.buttons[p1060].action}" id="mbf_${p1060}">${bbs.configJoystick.buttons[p1060][v701]}</button>` : "");
            });
            var v702 = `
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
        <div id="wwc-mobile-box"><div id="wwc-mobile-buttons" style="">${vLS9}</div></div>`;
            v702 = v702 + (bbs.configJoystick.typeCurrent === "btn" ? "" : `<div id="wwc-mobile-box-slider" class="game-slider-container-02"><input id="sliderZoom" orient="vertical" onchange="mbf.mbfass9(this)" type="range" min="0.25" max="${vO47.Ij.Rk.customer ? 12 : 2}" step="0.25" value="1" style="height: 65vh;"></div>`);
            $("body").append(v702);
          }
          if (_wwc.ismobile && bbs.joystick.checked) {
            if (bbs.customJoystick) {
              console.log("customJoystick");
            }
            v_0x3ffa6b();
          }
        } catch (e28) {
          console.error(e28);
        }
      };
      var v703 = localStorage.getItem("custom_wormworld_wear");
      var v704 = localStorage.getItem("custom_wormworld_skin");
      var v705 = localStorage.getItem("custom_wormworld_badLang");
      var v706 = localStorage.getItem("custom_wormworld_background");
      var v707 = localStorage.getItem("custom_wormworld_audio");
      var vA25 = [" XТ_", "WORMXТ_(d{})", "_xt", "wormxt", "worm_xt", "timmap"];
      if (v705) {
        vA25 = vA25.concat(JSON.parse(v705));
      }
      window.badLanguageRegEx = (vA25 || []).join("|");
      var v_0x5aee3a = function f219(p1061) {
        p1061 = p1061.replace(new RegExp(badLanguageRegEx, "gim"), ":");
        p1061 = p1061.replace(/\uFDFD/g, "");
        p1061 = p1061.substring(0, vLN18);
        return p1061;
      };
      _wwc.customConfig = function (p1062) {
        var v_0x5ccd6a = function f220(p1063, _0x51cf8a = 0) {
          var v708 = p1063.id.toString();
          var v709 = p1063.type.toString().toLowerCase() + "VariantArray";
          var v710 = p1063.type.toString().toLowerCase() + "Dict";
          p1062.textureDict[v708] = {
            custom: true,
            re1ativePath: p1063.file,
            reference: 1000 + _0x51cf8a
          };
          p1062.regionDict[v708] = {
            texture: v708,
            x: p1063.x,
            y: p1063.y,
            w: p1063.w,
            h: p1063.h,
            px: p1063.px,
            py: p1063.py,
            pw: 128,
            ph: 128
          };
          p1062[v710][1000 + _0x51cf8a] = {
            base: [{
              region: v708
            }],
            guest: false,
            nonbuyable: false,
            price: 0,
            priceBefore: 0,
            id: v708
          };
          p1062[v709].push([1000 + _0x51cf8a]);
        };
        if (v703) {
          v703 = JSON.parse(v703);
          if (v703.wear) {
            if (v703.version == "2") {
              v703.data.forEach(function (p1064, p1065) {
                v_0x5ccd6a(p1064, p1065);
              });
            } else {
              for (var v711 in v703.wear.textureDict) {
                p1062.textureDict[v711] = {};
                p1062.textureDict[v711].h1 = true;
                p1062.textureDict[v711].h3 = true;
                p1062.textureDict[v711].re1ativePath = v703.wear.textureDict[v711].file;
              }
              for (var v712 in v703.wear.regionDict) {
                p1062.regionDict[v712] = v703.wear.regionDict[v712];
                var v713 = p1062.regionDict[v712];
                p1062[v713.list][v713.obj.id.toString()] = v713.obj;
                p1062[v713.listVariant].push([v713.obj.id.toString()]);
              }
            }
          }
        }
        if (v704) {
          v704 = JSON.parse(v704);
          if (v704.version_skin == "2") {
            var v_0x32bef9 = function f221(p1066, p1067, p1068, p1069) {
              return {
                texture: p1067,
                h: p1068 - 5,
                w: p1068 - 5,
                x: p1068 * (p1069 ? 0 : p1066 || 0),
                y: 0
              };
            };
            var v714 = "SKIN_" + v704.id + "___Z";
            var vO44 = {
              id: v714,
              regionDict: {},
              textureDict: {},
              skinArrayDict: [],
              skinGroupArrayDict: [{
                id: v714,
                name: {
                  en: "Custom V2"
                },
                list: []
              }],
              version_skin: 3
            };
            var vO45 = {
              id: v714,
              guest: false,
              price: 0,
              priceBefore: 0,
              nonbuyable: false,
              prime: "c_white",
              glow: v704.glow,
              base: []
            };
            for (var v715 = v704.len - 1; v715 >= 0; v715--) {
              vO44.regionDict[`${v714}_${v715}`] = v_0x32bef9(v715, v714, v704.cos, 0);
              vO45.base.push(`${v714}_${v715}`);
            }
            vO44.textureDict[v714] = {
              custom: true,
              re1ativePath: v704.file || v704.td.file,
              h1: true,
              h4: true
            };
            vO44.skinArrayDict.push(vO45);
            vO44.skinGroupArrayDict[0].list.push(v714);
            if (!v704.textureDict[v714]) {
              alert("Error! Texture not found:" + p + " - load again.");
              return;
            }
          }
          if (v704.version_skin == "3") {
            for (var v716 in v704) {
              var vF167 = f167(v704[v716]);
              if (vF167 === "object") {
                p1062[v716] = Array.isArray(v704[v716]) ? [].concat(f132(p1062[v716]), f132(v704[v716])) : f147(f147({}, p1062[v716]), v704[v716]);
              }
            }
            return;
          }
          var v717 = v704.skin.id;
          v704.skin.id = v717.toString();
          for (var v718 in v704.textureDict) {
            p1062.textureDict[v718] = v704.textureDict[v718];
            p1062.textureDict[v718].re1ativePath = v704.textureDict[v718].file;
            p1062.textureDict[v718].h1 = true;
            p1062.textureDict[v718].h4 = true;
          }
          for (var v719 in v704.regionDict) {
            p1062.regionDict[v719] = v704.regionDict[v719];
          }
          p1062.skinGroupArrayDict.push({
            id: "custom",
            name: {
              en: "Custom"
            },
            list: [v717]
          });
          p1062.skinArrayDict.push(v704.skin);
        }
      };
      function f222() {
        var v720 = false;
        (function (p1070) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(p1070) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(p1070.substr(0, 4))) {
            v720 = true;
          }
        })(navigator.userAgent || navigator.vendor || window.opera);
        return v720;
      }
      window.w2c2020 = {
        fontStyle: {
          amarelo: new PIXI.TextStyle({
            align: "center",
            fill: "#f8d968",
            fontSize: 10,
            lineJoin: "round",
            stroke: "red",
            strokeThickness: 1,
            whiteSpace: "normal",
            wordWrap: true
          }),
          b: new PIXI.TextStyle({
            align: "center",
            fill: "#f8d968",
            fontSize: 12,
            lineJoin: "round",
            stroke: "red",
            strokeThickness: 1,
            whiteSpace: "normal",
            wordWrap: true
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
          hsBrancoRight: new PIXI.TextStyle(f148({
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
      var vA26 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
      for (var vLN0105 = 0; vLN0105 < vA26.length; vLN0105++) {
        var v721 = vA26[vLN0105];
        w2c2020.fontStyle["tfc" + vLN0105] = new PIXI.TextStyle({
          align: "center",
          fill: v721,
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
      var v722 = false;
      var vO46 = {
        x: 0,
        y: 0
      };
      w2c2020.rotation.on("pointerdown", function (p1071) {
        w2c2020.friends.rotation += Math.PI / 2;
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}));
      });
      w2c2020.moveSprite.on("pointerdown", function (p1072) {
        v722 = true;
        vO46.x = p1072.data.global.x - w2c2020.friends.x;
        vO46.y = p1072.data.global.y - w2c2020.friends.y;
      });
      w2c2020.moveSprite.on("pointerup", function () {
        v722 = false;
      });
      w2c2020.moveSprite.on("pointerupoutside", function () {
        v722 = false;
      });
      w2c2020.moveSprite.on("pointermove", function (p1073) {
        if (v722) {
          var v723 = p1073.data.global;
          w2c2020.friends.x = v723.x - vO46.x;
          w2c2020.friends.y = v723.y - vO46.y;
          bbs.displayFriends.x = w2c2020.friends.x;
          bbs.displayFriends.y = w2c2020.friends.y;
          localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}));
        }
      });
      w2c2020.moveSprite.visible = false;
      w2c2020.rotation.visible = false;
      window.addEventListener("keydown", function (p1074) {
        if (p1074.key === "Escape") {
          w2c2020.moveSprite.visible = !w2c2020.moveSprite.visible;
          w2c2020.rotation.visible = !w2c2020.rotation.visible;
        }
      });
      w2c2020.label_hs = new PIXI.Text("HS", w2c2020.fontStyle.b);
      w2c2020.label_hs.x = 15;
      w2c2020.label_hs.y = 107;
      w2c2020.hs = new PIXI.Text("0", w2c2020.fontStyle.b);
      w2c2020.hs.x = 20;
      w2c2020.hs.y = 119;
      w2c2020.hsTotal = new PIXI.Text("0", w2c2020.fontStyle.b);
      w2c2020.hsTotal.x = 20;
      w2c2020.hsTotal.y = 132;
      w2c2020.label_kill = new PIXI.Text("KILL", w2c2020.fontStyle.b);
      w2c2020.label_kill.x = 50;
      w2c2020.label_kill.y = 107;
      w2c2020.kill = new PIXI.Text("0", w2c2020.fontStyle.b);
      w2c2020.kill.x = 60;
      w2c2020.kill.y = 120;
      w2c2020.killTotal = new PIXI.Text("0", w2c2020.fontStyle.b);
      w2c2020.killTotal.x = 60;
      w2c2020.killTotal.y = 133;
      w2c2020.clock = PIXI.Sprite.from("https://timmapwormate.com/images/store/clock.png");
      w2c2020.clock.width = 100;
      w2c2020.clock.height = 100;
      w2c2020.clock.x = -50;
      w2c2020.clock.y = -50;  
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
      w2c2020.labelRoom = new PIXI.Text("JKR", w2c2020.fontStyle.amarelo);
      w2c2020.labelRoom.x = -50;
      w2c2020.labelRoom.y = -56;
      w2c2020.addRoom = function (p1078) {
        w2c2020.labelRoom.text = p1078 || "JKR";
      };
      window.addEventListener("keydown", function (p1079) {
        if (p1079.key == "Q" || p1079.key === "q") {
          v_0x35a3af(v637 ? 0 : 7);
        }
        if (p1079.key == "W" || p1079.key === "w") {
          v_0x35a3af(v637 ? 0 : 8);
        }
        if (p1079.key === "8" && vO48.setIntervalRun) {
          v638 = !v638;
        }
        if (p1079.key === "R" || p1079.key === "r") {
          respawnFn();
        }
        if (p1079.key === "4") {
          var v731 = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS");
          if (v731) {
            v731.alpha = v731.alpha ? 0 : 0.3;
          }
        }
        if (p1079.key === "5") {
          var vVLN099 = vLN099;
          if (backgroundArena.length < vVLN099) {
            vVLN099 = bbs.background || 0;
            vLN099 = 0;
          }
          _wwc._anApp.og.af.ng.Lg.$g(vO48.bgg(vVLN099));
          vLN099++;
        }
        if (p1079.key === "1") {
          mbf.mbf_cambiar();
        }
        if (p1079.key === "x1") {
          _wwcio.update(1);
        }
        if (p1079.key === "x2") {
          _wwcio.update(2);
        }
        if (p1079.key === "<" || p1079.key === "," && vO48.setIntervalRun) {
          mbf.mbfass1();
        }
        if (p1079.key === ">" || p1079.key === "." && vO48.setIntervalRun) {
          mbf.mbfass2();
        }
        if (p1079.key === "z" || p1079.key === "Z" && vO48.setIntervalRun) {
          vLN16 = bbs.configZoom?.closeDown || 1;
        }
        if (p1079.key === "c" || p1079.key === "C" && vO48.setIntervalRun) {
          vLN16 = vLN16 === 0.5 ? 2 : bbs.configZoom?.closeUp || 0.25;
        }
      });
      var vO47 = {
        Lc: {
          Gb: {}
        }
      };
      var vO48 = {
        pm: {},
        ps: 0,
        ps2: function f225(p1080, p1081, p1082) {
          if (true) {
            var v732 = p1082 ? 128 : 0;
            var v733 = vO48.$F.N(p1081) / vO48.$V.F * 128 & 127;
            var v734 = (v732 | v733) & 255;
            var v735 = new ArrayBuffer(1);
            new DataView(v735).setInt8(0, v734);
            p1080.Eq(v735);
            p1080.nq = v734;
          } else {}
        },
        ps3: function f226() {
          vO47.dh.xq(vO47.og.af.Gn(), vO47.og.af.Hn());
        },
        setIntervalRun: null,
        loadBg: false,
        LG: function f227(p1083, p1084, p1085) {
          p1083.Ll("gg", p1085.credential, null);
        },
        Lg: function f228(p1086) {
          vO47.xe._g = vO48.bgg();
          _wwc.$C = p1086;
          _wwc.$W = vO48;
          if (bbs.bgGameWidth > 512) {
            return new p1086.WMGBS1();
          } else {
            return new p1086.WMGBS2();
          }
        },
        registry: function () {
          var vF1644 = f164(f151().m(function f229(p1087) {
            var v736;
            return f151().w(function (p1088) {
              while (1) {
                switch (p1088.n) {
                  case 0:
                    p1088.n = 1;
                    return fetch("https://game.platenn.store/dynamic/assets/registry?v="+ Date.now(), {
    
                    }).then(function (p1089) {
                      if (!p1089.ok) {
                        return p1087;
                      }
                      return p1089.json();
                    });
                  case 1:
                    v736 = p1088.v;
                    return p1088.a(2, v736);
                }
              }
            }, f229);
          }));
          function f230(p1090) {
            return vF1644.apply(this, arguments);
          }
          return f230;
        }()
      };
      vO48.Vd = function (p1091, p1092) {
        _wwc.customConfig(p1091);
        if (!p1091) {
          return;
        }
        var vThis103 = this;
        function f231(p1093) {
          var v737 = p1092.Id.Ld;
          vThis103.Rd(v737, p1092.Od.bc(v737).lc(p1093));
        }
        if (this.Fd) {
          this.Pd();
          return;
        }
        var vA27 = [];
        var vA28 = [];
        var vLN0110 = 0;
        var v738 = new PIXI.Loader();
        for (var v739 in p1091.textureDict) {
          if (p1091.textureDict.hasOwnProperty(v739)) {
            var v740 = p1091.textureDict[v739];
            var v741 = v740.re1ativePath || v740.relativePath;
            var v742 = v740.fileSize || 100;
            var v743 = v740.sha256 || null;
            var v744 = new p1092.Wd(v739, v741, v742, v743);
            v744.h1 = v740.h1;
            v744.h4 = v740.h4;
            v744.skinEvo = v740.skinEvo;
            v744.lines = v740.lines;
            v744.speed = v740.speed;
            vA27.push(v744);
            v738.add(v739, v741);
          }
        }
        v738.onProgress.add(function (p1094, p1095) {
          f231(p1094.progress / 100);
        });
        v738.load(function (p1096, p1097) {
          vA27.forEach(function (p1098) {
            p1098.resource = p1097[p1098.ae];
          });
          vThis103.$d(p1091, vA27, p1092);
        });
        return;
      };
      vO48.Zd = function (p1099, p1100, p1101, p1102) {
        $.ajax({
          type: "GET",
          url: p1099._d,
          xhrFields: {
            responseType: "arraybuffer",
            onprogress: function f232(p1103) {
              if (p1103.lengthComputable) {
                p1102(p1103.loaded / p1103.total);
              }
            }
          }
        }).fail(function () {
          p1100(new Error());
        }).done(function (p1104) {
          p1101(p1104);
        });
      };
      vO48.$d = function (p1105, p1106, p1107) {
        function f233(p1108) {
          var v745 = p1107.Id.Md;
          vThis104.Rd(v745, p1107.Od.bc(v745).lc(p1108));
        }
        var vThis104 = this;
        if (this.Fd) {
          this.Pd();
          return;
        }
        var v746;
        var v747;
        var vO49 = {};
        var v_0x286b11 = function f234() {
          for (var vLN0111 = 0; vLN0111 < p1106.length; vLN0111++) {
            try {
              window.URL.revokeObjectURL(p1106[vLN0111].Xd);
            } catch (e29) {}
          }
          vThis104.Sd(new Error());
        };
        var v_0x20128d = function f235() {
          var v748 = vLN0112 == 5 ? 0 : vLN0112;
          f233(v748 / 4);
          vO49[v746.ae] = new vO48.$C.be(v746.Xd, v747);
          v_0x50741f();
        };
        var v_0x50741f = function f236() {
          try {
            if (vLN0112 < p1106.length) {
              v746 = p1106[vLN0112];
              vLN0112++;
              vO49[v746.ae] = new vO48.$C.be(v746.resource.texture, v746.resource.texture.baseTexture);
              v_0x50741f();
              return;
            }
            return vThis104.ce(p1105, vO49);
          } catch (e30) {
            console.error(e30);
          }
        };
        var vLN0112 = 0;
        v_0x50741f();
      };
      vO48.p = function (p1109, p1110) {
        p1109 = p1109.split("|");
        vO48.pm[p1109[0]] = {
          p: p1109[1],
          i: p1110
        };
      };
      vO48.ae = function (p1111, p1112, p1113) {
        if (p1112.maV !== 1) {
          p1112.maV = 1;
          var v749 = p1112.ma.trim().match(v542);
          if (v749 && p1113.dh.Fh[p1112.ae]) {
            var v_0x17d2b5 = function f237(p1114, p1115) {
              if (p1114.includes("_")) {
                if (v757["WEAR_W" + v751 + "_" + p1114]) {
                  return v757["WEAR_W" + v751 + "_" + p1114].reference;
                } else {
                  return p1115;
                }
              }
              return _wwc.wearMap[p1114];
            };
            var v750 = v749[3];
            var v751 = v749[4];
            var v752 = v749[5];
            var v753 = v749[6];
            var v754 = v749[7];
            var v755 = v749[8];
            var v756 = v749[9];
            var v757 = vO47.Lc.Xb().textureDict;
            var v758 = v750 === "B";
            if (v752 !== "000") {
              var v759 = "SKIN_S" + v752.substring(0, 2) + "___" + v752.substring(2);
              var v760 = v757[v759];
              p1113.dh.Fh[p1112.ae].Eh.Hh = !v758 ? parseInt(_wwc.skinMap[v752]) : v760 ? v759 : p1113.dh.Fh[p1112.ae].Eh.Hh;
            }
            if (v753 !== "00") {
              p1113.dh.Fh[p1112.ae].Eh.ni = v_0x17d2b5(v753, p1113.dh.Fh[p1112.ae].Eh.ni);
            }
            if (v754 !== "00") {
              p1113.dh.Fh[p1112.ae].Eh.oi = v_0x17d2b5(v754, p1113.dh.Fh[p1112.ae].Eh.oi);
            }
            if (v755 !== "00") {
              p1113.dh.Fh[p1112.ae].Eh.pi = v_0x17d2b5(v755, p1113.dh.Fh[p1112.ae].Eh.pi);
            }
            if (v756 !== "00") {
              p1113.dh.Fh[p1112.ae].Eh.qi = v_0x17d2b5(v756, p1113.dh.Fh[p1112.ae].Eh.qi);
            }
            p1113.dh.Fh[p1112.ae].Eh.ma = v_0x5aee3a(p1113.dh.Fh[p1112.ae].Eh.ma);
          }
        }
        p1112.ma = v_0x5aee3a(p1112.ma);
      };
      vO48.Xp = function (p1116, p1117, p1118, p1119, p1120, p1121, p1122) {
        if (!_wwc.skinMap) {
          _wwc.skinMap = vO47.Lc.Xb().skinMap;
        }
        if (!_wwc.wearMap) {
          _wwc.wearMap = vO47.Lc.Xb().wearMap;
        }
        var v761 = /^(SKIN|WEAR)_(.*?)_(.{2}|.{3})$/;
        var v762 = vO47.Lc.Xb().hatDict[p1122] ? vO47.Lc.Xb().hatDict[p1122].id : p1122;
        var v763 = vO47.Lc.Xb().glassesDict[p1121] ? vO47.Lc.Xb().glassesDict[p1121].id : p1121;
        var v764 = vO47.Lc.Xb().glassesDict[p1120] ? vO47.Lc.Xb().mouthDict[p1120].id : p1120;
        var v765 = vO47.Lc.Xb().glassesDict[p1119] ? vO47.Lc.Xb().eyesDict[p1119].id : p1119;
        var vLSA = "A";
        var vLS12 = "";
        var vLS__ = "__";
        var v_0x3c1001 = function f238(p1123, p1124) {
          if (v761.test(p1123)) {
            var v766 = v761.exec(p1123);
            return {
              id: v766[2],
              value: v766[3],
              testRun: true
            };
          }
          return {
            id: null,
            value: null,
            testRun: false
          };
        };
        var vO50 = {
          h: v_0x3c1001(p1118, "h"),
          r: v_0x3c1001(v765, "r"),
          a: v_0x3c1001(v764, "a"),
          f: v_0x3c1001(v763, "f"),
          c: v_0x3c1001(v762, "c")
        };
        if (vO50.h.testRun) {
          vLS12 = vO50.h.id.substring(1);
          vLSA = "B";
        }
        if (vO50.r.testRun || vO50.a.testRun || vO50.f.testRun || vO50.c.testRun) {
          vLS__ = (vO50.r.id || vO50.a.id || vO50.f.id || vO50.c.id).substring(1);
        }
        var v_0x1877ac = function f239(p1125, p1126) {
          if (vO50[p1126].value) {
            return vO50[p1126].value.padStart(p1126 === "h" ? 3 : 2, "0");
          }
          if (!_wwc[p1126 === "h" ? "testSkinMod" : "testWear"](p1125 || 0)) {
            if (vO50[p1126].testRun) {
              return p1125.toString().padStart(p1126 === "h" ? 3 : 2, "0");
            } else if (p1126 === "h") {
              return "000";
            } else {
              return "00";
            }
          }
          return _wwc[p1126 === "h" ? "skinMap" : "wearMap"][p1125] || (p1126 === "h" ? "000" : "00");
        };
        var vV_0x1877ac = v_0x1877ac(p1118, "h");
        var vV_0x1877ac2 = v_0x1877ac(p1119, "r");
        var vV_0x1877ac3 = v_0x1877ac(p1120, "a");
        var vV_0x1877ac4 = v_0x1877ac(p1121, "f");
        var vV_0x1877ac5 = v_0x1877ac(p1122, "c");
        var v767 = vLSA + vLS__ + vLS12 + vV_0x1877ac.replace("__", "") + vV_0x1877ac2 + vV_0x1877ac3 + vV_0x1877ac4 + vV_0x1877ac5;
        bbs.code = `${vV_0x1877ac || "000"}|${vV_0x1877ac5 || "00"}`;
        function f240(p1127, p1128) {
          var vLS13 = "";
          vLS13 = p1127.substring(0, vLN18).padEnd(vLN18, "_");
          var v768 = vLS13 + p1128;
          return v768;
        }
        bbs.nickname = f240(p1117, v767);
        return bbs.nickname;
      };
      vO48.bgg = function (p1129) {
        p1129 = parseInt(p1129);
        var v769 = bbs.backgroundUri || "/images/bg-pattern-pow2-ARENA.png";
        if (!isNaN(p1129)) {
          v769 = backgroundArena[p1129]?.uri || v769;
          bbs.bgGameWidth = backgroundArena[p1129]?.w || 512;
          bbs.bgGameHeight = backgroundArena[p1129]?.h || 256;
        }
        var v770 = PIXI.BaseTexture.from(v769);
        bbs.bgGameWidth = v770.width || bbs.bgGameWidth || 512;
        bbs.bgGameHeight = v770.height || bbs.bgGameHeight || 256;
        v770.wrapMode = bbs.bgGameWidth > 999 ? PIXI.WRAP_MODES.CLAMP : PIXI.WRAP_MODES.REPEAT;
        return new PIXI.Texture(v770);
      };
      vO48.genereteTexture = function (p1130) {
        var vLN128 = 128;
        var vLN9 = 9;
        try {
          var v_0x33fdfd = function f241() {
            var vA29 = [];
            for (var vLN0113 = 0; vLN0113 < p1130.lines; vLN0113++) {
              lineContainer = [];
              for (var vLN0114 = 0; vLN0114 < vLN9; vLN0114++) {
                try {
                  var v771 = PIXI.Texture.from(p1130._d, {
                    x: vLN0114 * vLN128,
                    y: vLN0113 * vLN128,
                    width: vLN128,
                    height: vLN128
                  });
                  lineContainer.push(v771);
                } catch (e31) {
                  console.log(vLN0113, vLN0114);
                  console.log(e31);
                  return;
                }
              }
              vA29.push(lineContainer);
            }
            return vA29;
          };
          return v_0x33fdfd();
        } catch (e32) {
          return [];
        }
      };
      var vO51 = {
        headshot: window.URL_CDN + "/sounds/headshot_sound_effect.mp3",
        shaokahn: window.URL_CDN + "/sounds/shao_kahn_sound_effect.mp3",
        speed: window.URL_CDN + "/sounds/woo_Hoo_sound_effect.mp3",
        curve: window.URL_CDN + "/sounds/yes_effect.mp3",
        loser: window.URL_CDN + "/sounds/negative_beeps_effect.mp3",
        top1: window.URL_CDN + "/sounds/mission_complete_sound_effect.mp3"
      };
      vO41.ref = ["speed", "curve"];
      for (var v772 in vO51) {
        vO41[v772] = new vP795.Howl({
          src: [vO51[v772]],
          html5: true,
          autoplay: v772 == "top1",
          loop: false
        });
      }
      var vO52 = {
        "rotate(0deg)": 0,
        "rotate(90deg)": 1.5707963267948966,
        "rotate(180deg)": 3.141592653589793,
        "rotate(270deg)": 4.71238898038469,
        "rotate(360deg)": 0
      };
      var v773 = typeof Symbol == "function" && f167(Symbol.iterator) == "symbol" ? function (p1131) {
        return f167(p1131);
      } : function (p1132) {
        if (p1132 && typeof Symbol == "function" && p1132.constructor === Symbol && p1132 !== Symbol.prototype) {
          return "symbol";
        } else {
          return f167(p1132);
        }
      };
      var v774;
      window.addEventListener("load", function () {
        function f242() {
          (function (p1133, p1134, p1135) {
            function f243(p1136, p1137) {
              return (p1136 === undefined ? "undefined" : v773(p1136)) === p1137;
            }
            function f244() {
              if (typeof p1134.createElement != "function") {
                return p1134.createElement(arguments[0]);
              } else if (v777) {
                return p1134.createElementNS.call(p1134, "http://www.w3.org/2000/svg", arguments[0]);
              } else {
                return p1134.createElement.apply(p1134, arguments);
              }
            }
            var vA30 = [];
            var vA31 = [];
            var vO53 = {
              _version: "3.3.1",
              _config: {
                classPrefix: "",
                enableClasses: true,
                enableJSClass: true,
                usePrefixes: true
              },
              _q: [],
              on: function f245(p1138, p1139) {
                var vThis105 = this;
                setTimeout(function () {
                  p1139(vThis105[p1138]);
                }, 0);
              },
              addTest: function f246(p1140, p1141, p1142) {
                vA31.push({
                  name: p1140,
                  fn: p1141,
                  options: p1142
                });
              },
              addAsyncTest: function f247(p1143) {
                vA31.push({
                  name: null,
                  fn: p1143
                });
              }
            };
            var v_0x3fc9fd = function f248() {};
            v_0x3fc9fd.prototype = vO53;
            v_0x3fc9fd = new v_0x3fc9fd();
            var v775 = false;
            try {
              v775 = "WebSocket" in p1133 && p1133.WebSocket.CLOSING === 2;
            } catch (e33) {}
            v_0x3fc9fd.addTest("websockets", v775);
            var v776 = p1134.documentElement;
            var v777 = v776.nodeName.toLowerCase() === "svg";
            v_0x3fc9fd.addTest("canvas", function () {
              var vF244 = f244("canvas");
              return !!vF244.getContext && !!vF244.getContext("2d");
            });
            v_0x3fc9fd.addTest("canvastext", function () {
              return v_0x3fc9fd.canvas !== false && typeof f244("canvas").getContext("2d").fillText == "function";
            });
            (function () {
              var v778;
              var v779;
              var v780;
              var v781;
              var v782;
              var v783;
              var v784;
              for (var v785 in vA31) {
                if (vA31.hasOwnProperty(v785)) {
                  v778 = [];
                  v779 = vA31[v785];
                  if (v779.name && (v778.push(v779.name.toLowerCase()), v779.options && v779.options.aliases && v779.options.aliases.length)) {
                    for (v780 = 0; v780 < v779.options.aliases.length; v780++) {
                      v778.push(v779.options.aliases[v780].toLowerCase());
                    }
                  }
                  v781 = f243(v779.fn, "function") ? v779.fn() : v779.fn;
                  v782 = 0;
                  for (; v782 < v778.length; v782++) {
                    v783 = v778[v782];
                    v784 = v783.split(".");
                    if (v784.length === 1) {
                      v_0x3fc9fd[v784[0]] = v781;
                    } else {
                      if (!!v_0x3fc9fd[v784[0]] && !(v_0x3fc9fd[v784[0]] instanceof Boolean)) {
                        v_0x3fc9fd[v784[0]] = new Boolean(v_0x3fc9fd[v784[0]]);
                      }
                      v_0x3fc9fd[v784[0]][v784[1]] = v781;
                    }
                    vA30.push((v781 ? "" : "no-") + v784.join("-"));
                  }
                }
              }
            })();
            (function (p1144) {
              var v786 = v776.className;
              var v787 = v_0x3fc9fd._config.classPrefix || "";
              if (v777) {
                v786 = v786.baseVal;
              }
              if (v_0x3fc9fd._config.enableJSClass) {
                var v788 = new RegExp("(^|\\s)" + v787 + "no-js(\\s|$)");
                v786 = v786.replace(v788, "$1" + v787 + "js$2");
              }
              if (v_0x3fc9fd._config.enableClasses) {
                v786 += " " + v787 + p1144.join(" " + v787);
                if (v777) {
                  v776.className.baseVal = v786;
                } else {
                  v776.className = v786;
                }
              }
            })(vA30);
            delete vO53.addTest;
            delete vO53.addAsyncTest;
            for (var vLN0115 = 0; vLN0115 < v_0x3fc9fd._q.length; vLN0115++) {
              v_0x3fc9fd._q[vLN0115]();
            }
            p1133.Modernizr = v_0x3fc9fd;
          })(window, document);
          return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
        }
        document.getElementById("game-wrap").style.display = "block";
        if (!f242()) {
          document.getElementById("error-view").style.display = "block";
          return;
        }
        (function () {
          function f249() {
            return vO47;
          }
          var vO54 = {};
          var vO55 = {};
          var vO56 = {
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
          vO56.a.i = function () {
            var v789 = window.I18N_LANG;
            v789 ||= "en";
            return v789;
          }();
          vO56.a.j = function () {
            var vUndefined7 = undefined;
            switch (vO56.a.i) {
              case "uk":
                vUndefined7 = "uk_UA";
                break;
              case "de":
                vUndefined7 = "de_DE";
                break;
              case "fr":
                vUndefined7 = "fr_FR";
                break;
              case "es":
                vUndefined7 = "es_ES";
                break;
              default:
                vUndefined7 = "en_US";
            }
            return vUndefined7;
          }();
          moment.locale(vO56.a.j);
          var vF29 = function () {
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
          vO55.F = 6.283185307179586;
          vO55.G = Math.PI;
          vO56.H = function (p1145) {
            return window.I18N_MESSAGES[p1145];
          };
          vO56.I = function (p1146) {
            if (p1146[vO56.a.i]) {
              return p1146[vO56.a.i];
            } else if (p1146.en) {
              return p1146.en;
            } else {
              return p1146.x;
            }
          };
          vO56.J = function (p1147) {
            var v790 = (Math.floor(p1147) % 60).toString();
            var v791 = (Math.floor(p1147 / 60) % 60).toString();
            var v792 = (Math.floor(p1147 / 3600) % 24).toString();
            var v793 = Math.floor(p1147 / 86400).toString();
            var v794 = vO56.H("util.time.days");
            var v795 = vO56.H("util.time.hours");
            var v796 = vO56.H("util.time.min");
            var v797 = vO56.H("util.time.sec");
            if (v793 > 0) {
              return v793 + " " + v794 + " " + v792 + " " + v795 + " " + v791 + " " + v796 + " " + v790 + " " + v797;
            } else if (v792 > 0) {
              return v792 + " " + v795 + " " + v791 + " " + v796 + " " + v790 + " " + v797;
            } else if (v791 > 0) {
              return v791 + " " + v796 + " " + v790 + " " + v797;
            } else {
              return v790 + " " + v797;
            }
          };
          vO56.K = function (p1148) {
            if (p1148.includes("href")) {
              return p1148.replaceAll("href", "target=\"_black\" href");
            } else {
              return p1148;
            }
          };
          vO56.L = function (p1149, p1150, p1151, p1152) {
            var v798 = document.createElement("script");
            var v799 = true;
            if (v773(p1150) !== "undefined" && p1150 !== null) {
              if (v773(p1150.id) !== "undefined") {
                v798.id = p1150.id;
              }
              if (v773(p1150.async) !== "undefined" && p1150.async) {
                v798.async = "async";
              }
              if (v773(p1150.defer) !== "undefined" && p1150.defer) {
                v798.defer = "defer";
              }
              if (v773(p1150.crossorigin) !== "undefined") {
                v798.crossorigin = p1150.crossorigin;
              }
            }
            v798.type = v798.type == p1152 ? "module" : "text/javascript";
            v798.src = p1149;
            if (p1151) {
              v798.onload = v798.onreadystatechange = function () {
                v799 = false;
                try {
                  p1151();
                } catch (e34) {}
                v798.onload = v798.onreadystatechange = null;
              };
            }
            (document.head || document.getElementsByTagName("head")[0]).appendChild(v798);
          };
          vO56.M = function (p1153, p1154) {
            var vP1154 = p1154;
            vP1154.prototype = Object.create(p1153.prototype);
            vP1154.prototype.constructor = vP1154;
            vP1154.parent = p1153;
            return vP1154;
          };
          vO56.N = function (p1155) {
            p1155 %= vO55.F;
            if (p1155 < 0) {
              return p1155 + vO55.F;
            } else {
              return p1155;
            }
          };
          vO56.O = function (p1156, p1157, p1158) {
            return vO56.P(p1158, p1156, p1157);
          };
          vO56.P = function (p1159, p1160, p1161) {
            if (p1159 > p1161) {
              return p1161;
            } else if (p1159 < p1160) {
              return p1160;
            } else if (Number.isFinite(p1159)) {
              return p1159;
            } else {
              return (p1160 + p1161) * 0.5;
            }
          };
          vO56.Q = function (p1162, p1163, p1164, p1165) {
            if (p1163 > p1162) {
              return Math.min(p1163, p1162 + p1164 * p1165);
            } else {
              return Math.max(p1163, p1162 - p1164 * p1165);
            }
          };
          vO56.R = function (p1166, p1167, p1168, p1169, p1170) {
            return p1167 + (p1166 - p1167) * Math.pow(1 - p1169, p1168 / p1170);
          };
          vO56.S = function (p1171, p1172, p1173) {
            return p1171 - (p1171 - p1172) * p1173;
          };
          vO56.T = function (p1174, p1175, p1176, p1177) {
            var vP1176 = p1176;
            var vP1175 = p1175;
            var v800 = p1175 + p1177;
            if (p1174 == null) {
              throw new TypeError("this is null or not defined");
            }
            var v801 = p1174.length >>> 0;
            var v802 = vP1176 >> 0;
            var v803 = v802 < 0 ? Math.max(v801 + v802, 0) : Math.min(v802, v801);
            var v804 = vP1175 >> 0;
            var v805 = v804 < 0 ? Math.max(v801 + v804, 0) : Math.min(v804, v801);
            var v806 = v800 === undefined ? v801 : v800 >> 0;
            var v807 = v806 < 0 ? Math.max(v801 + v806, 0) : Math.min(v806, v801);
            var v808 = Math.min(v807 - v805, v801 - v803);
            var vLN19 = 1;
            for (v805 < v803 && v803 < v805 + v808 && (vLN19 = -1, v805 += v808 - 1, v803 += v808 - 1); v808 > 0;) {
              if (v805 in p1174) {
                p1174[v803] = p1174[v805];
              } else {
                delete p1174[v803];
              }
              v805 += vLN19;
              v803 += vLN19;
              v808--;
            }
            return p1174;
          };
          vO56.U = function (p1178) {
            if (p1178.parent != null) {
              p1178.parent.removeChild(p1178);
            }
          };
          vO56.V = function (p1179, p1180) {
            return p1179 + (p1180 - p1179) * Math.random();
          };
          vO56.W = function (p1181) {
            return p1181[parseInt(Math.random() * p1181.length)];
          };
          vO56.X = function () {
            return Math.random().toString(36).substring(2, 15);
          };
          vO56.Y = function (p1182, p1183, p1184) {
            var v809 = (1 - Math.abs(p1184 * 2 - 1)) * p1183;
            var v810 = v809 * (1 - Math.abs(p1182 / 60 % 2 - 1));
            var v811 = p1184 - v809 / 2;
            if (p1182 >= 0 && p1182 < 60) {
              return [v811 + v809, v811 + v810, v811 + 0];
            } else if (p1182 >= 60 && p1182 < 120) {
              return [v811 + v810, v811 + v809, v811 + 0];
            } else if (p1182 >= 120 && p1182 < 180) {
              return [v811 + 0, v811 + v809, v811 + v810];
            } else if (p1182 >= 180 && p1182 < 240) {
              return [v811 + 0, v811 + v810, v811 + v809];
            } else if (p1182 >= 240 && p1182 < 300) {
              return [v811 + v810, v811 + 0, v811 + v809];
            } else {
              return [v811 + v809, v811 + 0, v811 + v810];
            }
          };
          vO56.Z = function (p1185, p1186, p1187) {
            $.get(p1185).fail(p1186).done(p1187);
          };
          vO56.$ = function (p1188, p1189, p1190, p1191) {
            $.ajax({
              type: "GET",
              url: p1188,
              xhrFields: {
                responseType: "arraybuffer",
                onprogress: function f250(p1192) {
                  if (p1192.lengthComputable) {
                    p1191(p1192.loaded / p1192.total * 100);
                  }
                }
              }
            }).fail(p1189).done(p1190);
          };
          vO56._ = function (p1193, p1194) {
            for (var v812 in p1193) {
              if (p1193.hasOwnProperty(v812)) {
                p1194(v812, p1193[v812]);
              }
            }
          };
          vO56.aa = function (p1195) {
            for (var v813 = p1195.length - 1; v813 > 0; v813--) {
              var v814 = Math.floor(Math.random() * (v813 + 1));
              var v815 = p1195[v813];
              p1195[v813] = p1195[v814];
              p1195[v814] = v815;
            }
            return p1195;
          };
          (function () {
            var vLN0116 = 0;
            try {
              DataView.prototype.ba = function (p1196) {
                try {
                  vLN0116 = p1196;
                  return this.getInt8(p1196);
                } catch (e35) {
                  console.log(vLN0116);
                  vO47.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.ca = function (p1197) {
                try {
                  vLN0116 = p1197;
                  return this.getInt16(p1197);
                } catch (e36) {
                  console.log(vLN0116);
                  vO47.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.da = function (p1198) {
                try {
                  vLN0116 = p1198;
                  return this.getInt32(p1198);
                } catch (e37) {
                  console.log(vLN0116);
                  vO47.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.ea = function (p1199) {
                try {
                  vLN0116 = p1199;
                  return this.getFloat32(p1199);
                } catch (e38) {
                  console.log(vLN0116);
                  vO47.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.fa = function (p1200) {
                try {
                  vLN0116 = p1200;
                  return this.getFloat64(p1200);
                } catch (e39) {
                  console.log(vLN0116);
                  vO47.dh.mq.close();
                  return 0;
                }
              };
            } catch (e40) {
              console.log(vLN0116);
              console.error("Error adding methods to DataView prototype:", e40);
            }
          })();
          vO56.ga = function () {
            function f251() {
              if (URLSERV_WORMWORLD) {
                try {
                  ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
                } catch (e41) {}
                v_0xb96c80(true);
              }
            }
            var v816 = false;
            var v_0xb96c80 = function f252() {};
            var vO57 = {};
            var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
            $("#adbl-continue").click(function () {
              $("#" + vLSJDHnkHtYwyXyVgG9).fadeOut(500);
              v_0xb96c80(false);
            });
            vO57.ha = function (p1201) {
              v_0xb96c80 = p1201;
              if (!v816) {
                try {
                  aiptag.cmd.player.push(function () {
                    aiptag.adplayer = new aipPlayer({
                      AD_WIDTH: 960,
                      AD_HEIGHT: 540,
                      AD_FULLSCREEN: true,
                      AD_CENTERPLAYER: false,
                      LOADING_TEXT: "loading advertisement",
                      PREROLL_ELEM: function f253() {
                        return document.getElementById("1eaom01c3pxu9wd3");
                      },
                      AIP_COMPLETE: function f254(p1202) {
                        v_0xb96c80(true);
                        $("#1eaom01c3pxu9wd3").hide();
                        $("#" + vLSJDHnkHtYwyXyVgG9).hide();
                        try {
                          ga("send", "event", "preroll", window.runtimeHash + "_complete");
                        } catch (e42) {}
                      },
                      AIP_REMOVE: function f255() {}
                    });
                  });
                  v816 = true;
                } catch (e43) {}
              }
            };
            vO57.ia = function () {
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
              } catch (e44) {}
              f251();
            };
            return vO57;
          };
          vO56.ja = function (p1203, p1204) {
            var v$3 = $("#" + p1203);
            var vP1204 = p1204;
            var vO58 = {};
            var v817 = false;
            vO58.ha = function () {
              if (!v817) {
                v$3.empty();
                v$3.append("<div id='" + vP1204 + "'></div>");
                try {
                  try {
                    ga("send", "event", "banner", window.runtimeHash + "_display");
                  } catch (e45) {}
                  aiptag.cmd.display.push(function () {
                    aipDisplayTag.display(vP1204);
                  });
                  v817 = true;
                } catch (e46) {}
              }
            };
            vO58.ka = function () {
              try {
                try {
                  ga("send", "event", "banner", window.runtimeHash + "_refresh");
                } catch (e47) {}
                aiptag.cmd.display.push(function () {
                  aipDisplayTag.display(vP1204);
                });
              } catch (e48) {}
            };
            return vO58;
          };
          vO54.la = function () {
            function f256(p1205, p1206, p1207, p1208, p1209, p1210, p1211, p1212, p1213, p1214, p1215) {
              this.ma = p1205;
              this.na = p1206;
              this.oa = null;
              this.pa = false;
              this.qa = p1207;
              this.ra = p1208;
              this.sa = p1209;
              this.ta = p1210;
              this.ua = p1211 || (p1213 || p1209) / 2;
              this.va = p1212 || (p1214 || p1210) / 2;
              this.wa = p1213 || p1209;
              this.xa = p1214 || p1210;
              this.ya = 0.5 - (this.ua - this.wa * 0.5) / this.sa;
              this.za = 0.5 - (this.va - this.xa * 0.5) / this.ta;
              this.Aa = this.sa / this.wa;
              if (p1215) {
                this.ev = p1215;
              } else {
                null;
              }
              this.Ba = this.ta / this.xa;
            }
            f256.Ca = function () {
              return new f256("", null, 0, 0, 0, 0, 0, 0, 0, 0);
            };
            f256.Da = function (p1216, p1217, p1218, p1219) {
              return new f256(p1216, p1217, p1218.x, p1218.y, p1218.w, p1218.h, p1218.px, p1218.py, p1218.pw, p1218.ph, p1219);
            };
            f256.prototype.Ea = function () {
              if (this.pa) {
                return this.oa;
              }
              if (this.na != null) {
                this.oa = new vF29.Texture(this.na, new vF29.Rectangle(this.qa, this.ra, this.sa, this.ta));
              }
              this.pa = true;
              return this.oa;
            };
            f256.prototype.Fa = function () {
              if (this.oa != null) {
                this.oa.destroy();
              }
            };
            return f256;
          }();
          vO54.Ga = function () {
            function f257(p1220, p1221, p1222, p1223, p1224, p1225, p1226, p1227, p1228, p1229, p1230, p1231, p1232, p1233, p1234, p1235, p1236, p1237) {
              this.Ha = p1220;
              this.Ia = p1221;
              this.Ja = p1222;
              this.Ka = p1223;
              this.La = p1224;
              this.Ma = p1225;
              this.Na = p1226;
              this.Oa = p1227;
              this.Pa = p1228;
              this.Qa = p1229;
              this.Ra = p1230;
              this.Sa = p1231;
              this.Ta = p1232;
              this.Ua = p1233;
              this.Va = p1234;
              this.Wa = p1235;
              this.Xa = p1236;
              this.Ya = p1237;
            }
            f257.prototype.Fa = function () {
              for (var vLN0117 = 0; vLN0117 < this.Ha.length; vLN0117++) {
                this.Ha[vLN0117].dispose();
                this.Ha[vLN0117].destroy();
              }
              this.Ha = [];
              for (var vLN0118 = 0; vLN0118 < this.Ia.length; vLN0118++) {
                this.Ia[vLN0118].Fa();
              }
              this.Ia = [];
            };
            f257.Ca = function () {
              var v818 = new f257.Za(vO54._a.$a, vO54._a.$a);
              var v819 = new f257.ab("#ffffff", [vO54._a.$a], [vO54._a.$a]);
              return new f257([], [], {}, v818, {}, new f257.bb(vO54._a.$a), {}, v819, {}, new f257.cb("", v819, v818), {}, new f257.db([vO54._a.$a]), {}, new f257.db([vO54._a.$a]), {}, new f257.db([vO54._a.$a]), {}, new f257.db([vO54._a.$a]));
            };
            f257.eb = function (p1238, p1239, p1240, p1241) {
              var v820 = new f257.Za(vO54._a.$a, vO54._a.$a);
              var v821 = new f257.ab("#ffffff", [p1238], [p1239]);
              return new f257([], [], {}, v820, {}, new f257.bb(vO54._a.$a), {}, v821, {}, new f257.cb("", v821, v820), {}, new f257.db([p1240]), {}, new f257.db([p1241]), {}, new f257.db([vO54._a.$a]), {}, new f257.db([vO54._a.$a]));
            };
            f257.fb = function (p1242, p1243, p1244, p1245) {
              var vO59 = {};
              vO56._(p1242.colorDict, function (p1246, p1247) {
                vO59[p1246] = "#" + p1247;
              });
              var vO60 = {};
              for (var vLN0119 = 0; vLN0119 < p1242.skinArrayDict.length; vLN0119++) {
                var v822 = p1242.skinArrayDict[vLN0119];
                vO60[v822.id] = new f257.ab(vO59[v822.prime], v822.base.map(function (p1248) {
                  return p1243[p1248];
                }), v822.glow.map(function (p1249, p1250) {
                  return p1243[p1249];
                }));
                if (v822.glow[0] == "a_trans") {
                  vO60[v822.id].vbb = p1243.a_black;
                }
              }
              var vUndefined8 = undefined;
              var v823 = p1242.skinUnknown;
              try {
                vUndefined8 = new f257.ab(vO59[v823.prime], v823.base.map(function (p1251) {
                  return p1243[p1251];
                }), v823.glow.map(function (p1252) {
                  return p1243[p1252];
                }));
              } catch (e49) {}
              var vO61 = {};
              vO56._(p1242.eyesDict, function (p1253, p1254) {
                var vParseInt3 = parseInt(p1253);
                vO61[vParseInt3] = new f257.db(p1254.base.map(function (p1255) {
                  return p1243[p1255.region];
                }));
              });
              var v824 = new f257.db(p1242.eyesUnknown.base.map(function (p1256) {
                return p1243[p1256.region];
              }));
              var vO62 = {};
              vO56._(p1242.mouthDict, function (p1257, p1258) {
                var vParseInt4 = parseInt(p1257);
                vO62[vParseInt4] = new f257.db(p1258.base.map(function (p1259) {
                  return p1243[p1259.region];
                }));
              });
              var v825 = new f257.db(p1242.mouthUnknown.base.map(function (p1260) {
                return p1243[p1260.region];
              }));
              var vO63 = {};
              vO56._(p1242.hatDict, function (p1261, p1262) {
                var vParseInt5 = parseInt(p1261);
                vO63[vParseInt5] = new f257.db(p1262.base.map(function (p1263) {
                  return p1243[p1263.region];
                }));
              });
              var v826 = new f257.db(p1242.hatUnknown.base.map(function (p1264) {
                return p1243[p1264.region];
              }));
              var vO64 = {};
              vO56._(p1242.glassesDict, function (p1265, p1266) {
                var vParseInt6 = parseInt(p1265);
                vO64[vParseInt6] = new f257.db(p1266.base.map(function (p1267) {
                  return p1243[p1267.region];
                }));
              });
              var v827 = new f257.db(p1242.glassesUnknown.base.map(function (p1268) {
                return p1243[p1268.region];
              }));
              var vO65 = {};
              vO56._(p1242.portionDict, function (p1269, p1270) {
                p1269 = parseInt(p1269);
                vO65[p1269] = new f257.Za(p1243[p1270.base], p1243[p1270.glow]);
              });
              var vUndefined9 = undefined;
              var v828 = p1242.portionUnknown;
              vUndefined9 = new f257.Za(p1243[v828.base], p1243[v828.glow]);
              var vO66 = {};
              vO56._(p1242.abilityDict, function (p1271, p1272) {
                p1271 = parseInt(p1271);
                vO66[p1271] = new f257.bb(p1243[p1272.base]);
              });
              var vUndefined10 = undefined;
              var v829 = p1242.abilityUnknown;
              vUndefined10 = new f257.bb(p1243[v829.base]);
              var vO67 = {};
              vO56._(p1242.teamDict, function (p1273, p1274) {
                p1273 = parseInt(p1273);
                vO67[p1273] = new f257.cb(p1274.title, new f257.ab(vO59[p1274.skin.prime], null, p1274.skin.glow.map(function (p1275) {
                  return p1243[p1275];
                })), new f257.Za(null, p1243[p1274.portion.glow]));
              });
              var v830 = new f257.cb({}, vUndefined8, vUndefined9);
              return new f257(p1244, p1245, vO65, vUndefined9, vO66, vUndefined10, vO60, vUndefined8, vO67, v830, vO61, v824, vO62, v825, vO63, v826, vO64, v827);
            };
            f257.prototype.gb = function (p1276) {
              var v831 = vO56.aa(Object.keys(this.Na)).slice(0, p1276);
              var v832 = vO56.aa(Object.keys(this.Ra)).slice(0, p1276);
              var v833 = vO56.aa(Object.keys(this.Ta)).slice(0, p1276);
              var v834 = vO56.aa(Object.keys(this.Va)).slice(0, p1276);
              var v835 = vO56.aa(Object.keys(this.Xa)).slice(0, p1276);
              var vA32 = [];
              for (var vLN0120 = 0; vLN0120 < p1276; vLN0120++) {
                var v836 = v831.length > 0 ? v831[vLN0120 % v831.length] : 0;
                var v837 = v832.length > 0 ? v832[vLN0120 % v832.length] : 0;
                var v838 = v833.length > 0 ? v833[vLN0120 % v833.length] : 0;
                var v839 = v834.length > 0 ? v834[vLN0120 % v834.length] : 0;
                var v840 = v835.length > 0 ? v835[vLN0120 % v835.length] : 0;
                vA32.push(new vO54.hb(v836, v837, v838, v839, v840));
              }
              return vA32;
            };
            f257.prototype.ib = function (p1277) {
              if (this.Na.hasOwnProperty(p1277)) {
                return this.Na[p1277];
              } else {
                return this.Oa;
              }
            };
            f257.prototype.jb = function (p1278) {
              if (this.Pa.hasOwnProperty(p1278)) {
                return this.Pa[p1278];
              } else {
                return this.Qa;
              }
            };
            f257.prototype.kb = function (p1279) {
              if (this.Ra.hasOwnProperty(p1279)) {
                return this.Ra[p1279];
              } else {
                return this.Sa;
              }
            };
            f257.prototype.lb = function (p1280) {
              if (this.Ta.hasOwnProperty(p1280)) {
                return this.Ta[p1280];
              } else {
                return this.Ua;
              }
            };
            f257.prototype.mb = function (p1281) {
              if (this.Xa.hasOwnProperty(p1281)) {
                return this.Xa[p1281];
              } else {
                return this.Ya;
              }
            };
            f257.prototype.nb = function (p1282) {
              if (this.Va.hasOwnProperty(p1282)) {
                return this.Va[p1282];
              } else {
                return this.Wa;
              }
            };
            f257.prototype.ob = function (p1283) {
              if (this.Ja.hasOwnProperty(p1283)) {
                return this.Ja[p1283];
              } else {
                return this.Ka;
              }
            };
            f257.prototype.pb = function (p1284) {
              if (this.La.hasOwnProperty(p1284)) {
                return this.La[p1284];
              } else {
                return this.Ma;
              }
            };
            f257.cb = function () {
              function f258(p1285, p1286, p1287) {
                this.qb = p1285;
                this.rb = p1286;
                this.sb = p1287;
              }
              return f258;
            }();
            f257.ab = function () {
              function f259(p1288, p1289, p1290) {
                this.tb = p1288;
                this.ub = p1289;
                this.vb = p1290;
              }
              return f259;
            }();
            f257.db = function () {
              function f260(p1291) {
                this.ub = p1291;
              }
              return f260;
            }();
            f257.Za = function () {
              function f261(p1292, p1293) {
                this.ub = p1292;
                this.vb = p1293;
              }
              return f261;
            }();
            f257.bb = function () {
              function f262(p1294) {
                this.ub = p1294;
              }
              return f262;
            }();
            return f257;
          }();
          vO54._a = function () {
            function f263() {
              var v841 = vF29.BaseTexture.from("/images/wear-ability.png");
              for (var vLN110 = 1; vLN110 < 10; vLN110++) {
                this["vb" + vLN110] = new vO54.la("emoji_" + vLN110, v841, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
              }
              this.wb = new vO54.la("magnet_ability", v841, 158, 86, 67, 124, 148, 63.5, 128, 128);
              this.xb = new vO54.la("velocity_ability", v841, 158, 4, 87, 74, 203, 63.5, 128, 128);
              this.yb = new vO54.la("flex_ability", v841, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
            var _0x3a78e0 = vF29.BaseTexture.from("https://i.imgur.com/9YTOVXg.png");
          this.pwrFlex1 = new vO54.la("flex_ability", _0x3a78e0, 158, 4, 87, 74, 203, 63.5, 128, 128);
          var _0x166409 = vF29.BaseTexture.from("https://i.imgur.com/1BDj8KV.png");
          this.pwrFlex2 = new vO54.la("flex_ability", _0x166409, 156, 140, 87, 60, 170, 128.5, 128, 128);
          this.pwrFlex3 = new vO54.la("flex_ability", _0x166409, 156, 4, 87, 74, 285, 63.5, 128, 128);
              var vLN110 = vF29.BaseTexture.from("/images/def-look.png");
              var v842 = new vO54.la("def_eyes", vLN110, 0, 0, 42, 80, 75, 64, 128, 128);
              var v843 = new vO54.la("def_mouth", vLN110, 46, 0, 20, 48, 109, 63, 128, 128);
              var v844 = new vO54.la("def_skin_glow", vLN110, 70, 0, 32, 32, 0, 0, 0, 0);
              var v845 = new vO54.la("def_skin_base", vLN110, 46, 52, 64, 64, 0, 0, 0, 0);
              var v846 = vO54.Ga.eb(v845, v844, v842, v843);
              _wwc.mySkin = v846;
              this.zb = new vO54.Ab({}, v846);
              this.Bb = -10000;
              this.Cb = -10000;
              this.Db = function () {
                var v847 = window.document.createElement("canvas");
                v847.width = 80;
                v847.height = 80;
                return {
                  Eb: v847,
                  Fb: v847.getContext("2d"),
                  oa: new vF29.Texture(vF29.BaseTexture.from(v847))
                };
              }();
              this.Gb = null;
              this.Hb = [];
            }
            f263.$a = vO54.la.Ca();
            f263.prototype.ha = function () {};
            f263.prototype.Ib = function (p1295, p1296, p1297) {
              var vThis106 = this;
              var v848 = this.zb.Jb();
              if (v848 > 0 && Date.now() - this.Bb < 1200000) {
                if (p1295 != null) {
                  p1295();
                }
                return;
              }
              if (this.Gb != null && !this.Gb.Kb()) {
                if (Date.now() - this.Bb < 300000) {
                  if (p1295 != null) {
                    p1295();
                  }
                  return;
                }
                this.Gb.Lb();
                this.Gb = null;
              }
              var v849 = new vO54.Mb(v848);
              v849.Nb(function (p1298, p1299) {
                if (v849 === vThis106.Gb && p1297 != null) {
                  p1297(p1298, p1299);
                }
              });
              v849.Ob(function (p1300) {
                if (v849 === vThis106.Gb && p1296 != null) {
                  p1296(p1300);
                }
              });
              v849.Pb(function () {
                if (v849 === vThis106.Gb && p1296 != null) {
                  p1296(new Error());
                }
              });
              v849.Qb(function () {
                if (v849 === vThis106.Gb && p1295 != null) {
                  p1295();
                }
              });
              v849.Rb(function (p1301) {
                if (v849 === vThis106.Gb) {
                  vThis106.Cb = Date.now();
                  vThis106.Gb = null;
                  vThis106.Sb();
                  vThis106.zb.Ub().Fa();
                  vThis106.zb = p1301;
                  if (p1295 != null) {
                    p1295();
                  }
                  vThis106.Tb();
                  return;
                }
                try {
                  p1301.Ub().Fa();
                } catch (e50) {}
              });
              v849.Vb();
              this.Bb = Date.now();
              this.Gb = v849;
            };
            f263.prototype.Sb = function () {};
            f263.prototype.Wb = function () {
              return this.zb.Jb() > 0;
            };
            f263.prototype.Xb = function () {
              return this.zb.Yb();
            };
            f263.prototype.Zb = function () {
              return this.Db;
            };
            f263.prototype.$b = function (p1302) {
              this.Hb.push(p1302);
            };
            f263.prototype.Tb = function () {
              for (var vLN0121 = 0; vLN0121 < this.Hb.length; vLN0121++) {
                this.Hb[vLN0121]();
              }
            };
            f263.prototype.Ub = function () {
              return this.zb.Ub();
            };
            return f263;
          }();
          vO54._b = function () {
            function f264(p1303) {
              this.ac = p1303;
            }
            f264.prototype.bc = function (p1304) {
              return this.ac[p1304];
            };
            f264.cc = function () {
              function f265() {
                this.dc = [];
              }
              f265.prototype.ec = function (p1305, p1306) {
                for (var vLN0122 = 0; vLN0122 < this.dc.length; vLN0122++) {
                  if (this.dc[vLN0122].fc === p1305) {
                    throw new Error();
                  }
                }
                this.dc.push(new f264.gc(p1305, p1306));
                return this;
              };
              f265.prototype.hc = function () {
                var vLN0123 = 0;
                for (var vLN0124 = 0; vLN0124 < this.dc.length; vLN0124++) {
                  vLN0123 += this.dc[vLN0124].ic;
                }
                var vO68 = {};
                var vLN0125 = 0;
                for (var vLN0126 = 0; vLN0126 < this.dc.length; vLN0126++) {
                  var v850 = this.dc[vLN0126];
                  v850.ic = v850.ic / vLN0123;
                  v850.jc = vLN0125;
                  v850.kc = vLN0125 + v850.ic;
                  vLN0125 = v850.kc;
                  vO68[v850.fc] = v850;
                }
                return new f264(vO68);
              };
              return f265;
            }();
            f264.gc = function () {
              function f266(p1307, p1308) {
                this.fc = p1307;
                this.ic = p1308;
                this.jc = 0;
                this.kc = 0;
              }
              f266.prototype.lc = function (p1309) {
                return this.jc + (this.kc - this.jc) * p1309;
              };
              return f266;
            }();
            return f264;
          }();
          vO54.WormSpriteTree = function () {
            function f267() {
              this.nc = new vF29.Container();
              this.nc.sortableChildren = true;
              this.oc = new vF30();
              this.oc.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
              this.pc = 0;
              this.qc = new Array(vLN797);
              this.qc[0] = this.rc(0, new vO54.sc(), new vO54.sc());
              for (var vLN111 = 1; vLN111 < vLN797; vLN111++) {
                this.qc[vLN111] = this.rc(vLN111, new vO54.sc(), new vO54.sc());
              }
              this.tc = 0;
              this.uc = 0;
              this.vc = 0;
            }
            var vLN0001 = 0.001;
            var vLN797 = 797;
            var vLN314159 = 3.14159;
            var v851 = -0.06640625;
            var vLN084375 = 0.84375;
            var vLN02578125 = 0.2578125;
            var v852 = -0.03515625;
            var v853 = -0.0625;
            var vLN05625 = 0.5625;
            var v854 = v851 * 3 + vLN084375;
            var v855 = vLN02578125 - v851 * 3;
            var v856 = v851 + v852;
            var vLN0375 = 0.375;
            var vLN0752 = 0.75;
            var v857 = v853 + v853;
            var v858 = v852 * 3 + vLN02578125;
            var v859 = vLN084375 - v852 * 3;
            var v860 = v852 + v851;
            f267.wc = vLN797;
            f267.prototype.rc = function (p1310, p1311, p1312) {
              var v861 = new vF31(p1311, p1312);
              p1311.xc.zIndex = vLN0001 * ((vLN797 - p1310) * 2 + 1 + 3);
              p1312.xc.zIndex = vLN0001 * ((vLN797 - p1310) * 2 - 2 + 3);
              return v861;
            };
            f267.prototype.yc = function (p1313, p1314, p1315, p1316, p1317, p1318, p1319, p1320) {
              var v862 = p1315.ub;
              var v863 = p1313 === vO54.Ac.zc ? p1314.rb.vb : p1315.vb;
              if (v862.length > 0 && v863.length > 0) {
                for (var vLN0127 = 0; vLN0127 < this.qc.length; vLN0127++) {
                  this.qc[vLN0127].Cc.Bc(v862[vLN0127 % v862.length], vLN0127 % v862.length, vLN0127);
                  this.qc[vLN0127].Dc.Bc(vLN0127 == 0 && p1315.vbb ? p1315.vbb : v863[vLN0127 % v863.length], vLN0127 % v862.length, vLN0127);
                  this.qc[vLN0127].Cc.Ec(p1320);
                  this.qc[vLN0127].Dc.Ec(p1320);
                }
              }
              this.oc.yc(p1316, p1317, p1318, p1319);
            };
            var vF30 = function () {
              var v864 = vO56.M(vF29.Container, function () {
                vF29.Container.call(this);
                this.sortableChildren = true;
                this.Fc = [];
                this.Gc = [];
                this.Hc = [];
                this.Ic = [];
                this.Jc = new vF29.Container();
                this.Kc = [];
                this.message = new vF29.Container();
                for (var vLN0128 = 0; vLN0128 < 4; vLN0128++) {
                  var v865 = new vO54.sc();
                  v865.Bc(f249().Lc.wb);
                  this.Jc.addChild(v865.xc);
                  this.Kc.push(v865);
                }
                this.message.zIndex = 0.0012;
                this.addChild(this.message);
                this.VcUn();
                this.Jc.zIndex = 0.0011;
                this.addChild(this.Jc);
                this.Mc();
                this.Nc = new vO54.sc();
                this.Nc.Bc(f249().Lc.xb);
                this.Nc.xc.zIndex = 0.001;
                this.addChild(this.Nc.xc);
                this.Oc();
            
            this.pwr_flex1 = new vO54.sc();
            this.pwr_flex1.Bc(f249().Lc.pwrFlex1);
            this.pwr_flex1.xc.zIndex = 0.002;
            this.addChild(this.pwr_flex1.xc);
            this.pwr_flex2 = new vO54.sc();
            this.pwr_flex2.Bc(f249().Lc.pwrFlex2);
            this.pwr_flex2.xc.zIndex = 0.001;
            this.addChild(this.pwr_flex2.xc);
            this.pwr_flex3 = new vO54.sc();
            this.pwr_flex3.Bc(f249().Lc.pwrFlex3);
            this.pwr_flex3.xc.zIndex = 0.001;
            this.addChild(this.pwr_flex3.xc);
            this.disableFlex();
              });
              v864.prototype.yc = function (p1321, p1322, p1323, p1324) {
                this.Pc(0.002, this.Fc, p1321.ub);
                this.Pc(0.003, this.Gc, p1322.ub);
                this.Pc(0.004, this.Ic, p1324.ub);
                this.Pc(0.005, this.Hc, p1323.ub);
              };
              v864.prototype.Pc = function (p1325, p1326, p1327) {
                while (p1327.length > p1326.length) {
                  var v866 = new vO54.sc();
                  p1326.push(v866);
                  this.addChild(v866.Qc());
                }
                while (p1327.length < p1326.length) {
                  p1326.pop().Rc();
                }
                var vP1325 = p1325;
                for (var vLN0129 = 0; vLN0129 < p1327.length; vLN0129++) {
                  vP1325 += 0.0001;
                  var v867 = p1326[vLN0129];
                  v867.Bc(p1327[vLN0129]);
                  v867.xc.zIndex = vP1325;
                }
              };
              v864.prototype.Sc = function (p1328, p1329, p1330, p1331) {
                this.visible = true;
                this.position.set(p1328, p1329);
                this.rotation = p1331;
                for (var vLN0130 = 0; vLN0130 < this.Fc.length; vLN0130++) {
                  this.Fc[vLN0130].Tc(p1330);
                }
                for (var vLN0131 = 0; vLN0131 < this.Gc.length; vLN0131++) {
                  this.Gc[vLN0131].Tc(p1330);
                }
                for (var vLN0132 = 0; vLN0132 < this.Hc.length; vLN0132++) {
                  this.Hc[vLN0132].Tc(p1330);
                }
                for (var vLN0133 = 0; vLN0133 < this.Ic.length; vLN0133++) {
                  this.Ic[vLN0133].Tc(p1330);
                }
              };
              v864.prototype.Uc = function () {
                this.visible = false;
              };
              v864.prototype.VcAc = function (p1332, p1333, p1334, p1335, p1336) {
                this.message.visible = true;
                this.Mc2.Tc(p1333);
              };
              v864.prototype.VcUn = function () {
                this.message.visible = false;
              };
              v864.prototype.Vc = function (p1337, p1338, p1339, p1340) {
                this.Jc.visible = true;
                var v868 = p1339 / 1000;
                var v869 = 1 / this.Kc.length;
                for (var vLN0134 = 0; vLN0134 < this.Kc.length; vLN0134++) {
                  var v870 = 1 - (v868 + v869 * vLN0134) % 1;
                  this.Kc[vLN0134].xc.alpha = 1 - v870;
                  this.Kc[vLN0134].Tc(p1338 * (0.5 + v870 * 4.5));
                }
              };
              v864.prototype.Mc = function () {
                this.Jc.visible = false;
              };
              v864.prototype.Wc = function (p1341, p1342, p1343, p1344) {
                this.Nc.xc.visible = true;
                this.Nc.xc.alpha = vO56.Q(this.Nc.xc.alpha, p1341.Xc ? 0.9 : 0.2, p1344, 0.0025);
                this.Nc.Tc(p1342);
              };
              v864.prototype.xd = function () {
            this.Nc.xc.visible = false;
          };
          v864.prototype.activeFlex = function (_0x17b4d1, _0xf92d8b, _0xaa299d, _0x2478a0) {
            this.pwr_flex1.xc.visible = window.bbs.flx === 1;
            this.pwr_flex1.xc.alpha = vO56.Q(this.Nc.xc.alpha, _0x17b4d1.Xc ? 1 : 1, _0x2478a0, 1);
            this.pwr_flex1.Tc(_0xf92d8b);
            this.pwr_flex2.xc.visible = window.bbs.flx === 2;
            this.pwr_flex2.xc.alpha = vO56.Q(this.Nc.xc.alpha, _0x17b4d1.Xc ? 0.9 : 0.4, _0x2478a0, 0.0025);
            this.pwr_flex2.Tc(_0xf92d8b);
            this.pwr_flex3.xc.visible = window.bbs.flx === 3;
            this.pwr_flex3.xc.alpha = vO56.Q(this.Nc.xc.alpha, _0x17b4d1.Xc ? 0.9 : 0.4, _0x2478a0, 0.0025);
            this.pwr_flex3.Tc(_0xf92d8b);
          };
          v864.prototype.disableFlex = function () {
            this.pwr_flex1.xc.visible = false;
            this.pwr_flex2.xc.visible = false;
            this.pwr_flex3.xc.visible = false;
          };
              v864.prototype.WXX = function (p1345, p1346, p1347, p1348) {
                this.Nc.xc.visible = true;
                this.Nc.xc.alpha = vO56.Q(this.Nc.xc.alpha, p1345.Xc ? 0.9 : 0.2, p1348, 0.0025);
                this.Nc.Tc(p1346);
              };
              v864.prototype.Oc = function () {
                this.Nc.xc.visible = false;
              };
              return v864;
            }();
            f267.prototype.Yc = function (p1349) {
              return this.uc + this.vc * Math.sin(p1349 * vLN314159 - this.tc);
            };
            f267.prototype.Zc = function (p1350, p1351, p1352, p1353) {
              var v871 = p1350.$c * 2;
              var v872 = p1350._c;
              var v873 = p1350.ad;
              var v874 = v873 * 4 - 3;
              var vV874 = v874;
              this.tc = p1351 / 400 * Math.PI;
              this.uc = v871 * 1.5;
              this.vc = v871 * 0.15 * p1350.bd;
              var v875;
              var v876;
              var v877;
              var v878;
              var v879;
              var v880;
              var v881;
              var v882;
              v876 = v872[0];
              v880 = v872[1];
              if (p1353(v876, v880)) {
                v877 = v872[2];
                v881 = v872[3];
                v878 = v872[4];
                v882 = v872[5];
                var v883 = Math.atan2(v882 + v880 * 2 - v881 * 3, v878 + v876 * 2 - v877 * 3);
                this.oc.Sc(v876, v880, v871, v883);
                this.qc[0].Sc(v876, v880, v871, this.Yc(0), v883);
                this.qc[1].Sc(v854 * v876 + v855 * v877 + v856 * v878, v854 * v880 + v855 * v881 + v856 * v882, v871, this.Yc(1), vF31.cd(this.qc[0], this.qc[2]));
                this.qc[2].Sc(vLN0375 * v876 + vLN0752 * v877 + v857 * v878, vLN0375 * v880 + vLN0752 * v881 + v857 * v882, v871, this.Yc(2), vF31.cd(this.qc[1], this.qc[3]));
                this.qc[3].Sc(v858 * v876 + v859 * v877 + v860 * v878, v858 * v880 + v859 * v881 + v860 * v882, v871, this.Yc(3), vF31.cd(this.qc[2], this.qc[4]));
              } else {
                this.oc.Uc();
                this.qc[0].Uc();
                this.qc[1].Uc();
                this.qc[2].Uc();
                this.qc[3].Uc();
              }
              var vLN4 = 4;
              var vLN23 = 2;
              var v884 = v873 * 2 - 4;
              while (vLN23 < v884) {
                v876 = v872[vLN23];
                v880 = v872[vLN23 + 1];
                if (p1353(v876, v880)) {
                  v875 = v872[vLN23 - 2];
                  v879 = v872[vLN23 - 1];
                  v877 = v872[vLN23 + 2];
                  v881 = v872[vLN23 + 3];
                  v878 = v872[vLN23 + 4];
                  v882 = v872[vLN23 + 5];
                  this.qc[vLN4].Sc(v876, v880, v871, this.Yc(vLN4), vF31.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
                  vLN4++;
                  this.qc[vLN4].Sc(v851 * v875 + vLN084375 * v876 + vLN02578125 * v877 + v852 * v878, v851 * v879 + vLN084375 * v880 + vLN02578125 * v881 + v852 * v882, v871, this.Yc(vLN4), vF31.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
                  vLN4++;
                  this.qc[vLN4].Sc(v853 * v875 + vLN05625 * v876 + vLN05625 * v877 + v853 * v878, v853 * v879 + vLN05625 * v880 + vLN05625 * v881 + v853 * v882, v871, this.Yc(vLN4), vF31.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
                  vLN4++;
                  this.qc[vLN4].Sc(v852 * v875 + vLN02578125 * v876 + vLN084375 * v877 + v851 * v878, v852 * v879 + vLN02578125 * v880 + vLN084375 * v881 + v851 * v882, v871, this.Yc(vLN4), vF31.cd(this.qc[vLN4 - 1], this.qc[vLN4 + 1]));
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
                vLN23 += 2;
              }
              v876 = v872[v873 * 2 - 4];
              v880 = v872[v873 * 2 - 3];
              if (p1353(v876, v880)) {
                v875 = v872[v873 * 2 - 6];
                v879 = v872[v873 * 2 - 5];
                v877 = v872[v873 * 2 - 2];
                v881 = v872[v873 * 2 - 1];
                this.qc[v874 - 5].Sc(v876, v880, v871, this.Yc(v874 - 5), vF31.cd(this.qc[v874 - 6], this.qc[v874 - 4]));
                this.qc[v874 - 4].Sc(v860 * v875 + v859 * v876 + v858 * v877, v860 * v879 + v859 * v880 + v858 * v881, v871, this.Yc(v874 - 4), vF31.cd(this.qc[v874 - 5], this.qc[v874 - 3]));
                this.qc[v874 - 3].Sc(v857 * v875 + vLN0752 * v876 + vLN0375 * v877, v857 * v879 + vLN0752 * v880 + vLN0375 * v881, v871, this.Yc(v874 - 3), vF31.cd(this.qc[v874 - 4], this.qc[v874 - 2]));
                this.qc[v874 - 2].Sc(v856 * v875 + v855 * v876 + v854 * v877, v856 * v879 + v855 * v880 + v854 * v881, v871, this.Yc(v874 - 2), vF31.cd(this.qc[v874 - 3], this.qc[v874 - 1]));
                this.qc[v874 - 1].Sc(v877, v881, v871, this.Yc(v874 - 1), vF31.cd(this.qc[v874 - 2], this.qc[v874 - 1]));
              } else {
                this.qc[v874 - 5].Uc();
                this.qc[v874 - 4].Uc();
                this.qc[v874 - 3].Uc();
                this.qc[v874 - 2].Uc();
                this.qc[v874 - 1].Uc();
              }
              if (this.pc === 0 && vV874 > 0) {
                this.nc.addChild(this.oc);
              }
              if (this.pc > 0 && vV874 === 0) {
                vO56.U(this.oc);
              }
              while (this.pc < vV874) {
                this.nc.addChild(this.qc[this.pc].Cc.Qc());
                this.nc.addChild(this.qc[this.pc].Dc.Qc());
                this.pc += 1;
              }
              while (this.pc > vV874) {
                this.pc -= 1;
                this.qc[this.pc].Dc.Rc();
                this.qc[this.pc].Cc.Rc();
              }
              var v885 = p1350.dd[vO54.fd.ed];
              if (this.qc[0].gd() && v885 && v885.hd) {
                this.oc.Vc(p1350, v871, p1351, p1352);
              } else {
                this.oc.Mc();
              }
              var v886 = p1350.dd[vO54.fd.jd];
              if (this.qc[0].gd() && v886 && v886.hd) {
                this.oc.Wc(p1350, v871, p1351, p1352);
              } else {
                this.oc.Oc();
              }
              var _0x442bb8 = p1350.dd[vO54.fd.pd];
          if (this.qc[0].gd() && _0x442bb8 != null && _0x442bb8.hd) {
            this.oc.activeFlex(p1350, v871, p1351, p1352);
          } else {
            this.oc.disableFlex();
          }
              movimentaLinha();
            };
            var vF31 = function () {
              function f268(p1354, p1355) {
                this.Cc = p1354;
                this.Cc.kd(false);
                this.Dc = p1355;
                this.Dc.kd(false);
                this.ev = null;
              }
              f268.prototype.Sc = function (p1356, p1357, p1358, p1359, p1360) {
                this.Cc.kd(true);
                this.Cc.ld(p1356, p1357);
                this.Cc.Tc(p1358);
                this.Cc.md(p1360);
                this.Dc.kd(true);
                this.Dc.ld(p1356, p1357);
                this.Dc.Tc(p1359);
                this.Dc.md(p1360);
              };
              f268.prototype.Uc = function () {
                this.Cc.kd(false);
                this.Dc.kd(false);
              };
              f268.prototype.gd = function () {
                return this.Cc.gd();
              };
              f268.cd = function (p1361, p1362) {
                return Math.atan2(p1361.Cc.xc.position.y - p1362.Cc.xc.position.y, p1361.Cc.xc.position.x - p1362.Cc.xc.position.x);
              };
              return f268;
            }();
            return f267;
          }();
          vO54.fd = function () {
            function f269(p1363) {
              this.nd = p1363;
              this.hd = false;
              this.od = 1;
            }
            f269.jd = 0;
            f269.pd = 1;
            f269.ed = 2;
            f269.qd = 6;
            f269.rd = 3;
            f269.sd = 4;
            f269.td = 5;
            return f269;
          }();
          vO54.Ab = function (p1364) {
            var vF32 = function () {
              function f270(p1365, p1366) {
                f129(this, f270);
                this.ud = p1365;
                this.vd = p1366;
              }
              return f131(f270, [{
                key: "Jb",
                value: function f271() {
                  return this.ud.revision;
                }
              }, {
                key: "Yb",
                value: function f272() {
                  vO48.Jb();
                  return this.ud;
                }
              }, {
                key: "Ub",
                value: function f273() {
                  return this.vd;
                }
              }]);
            }();
            p1364 = vF32;
            f148(vF32, "wd", new p1364({}, vO54.Ga.Ca()));
            return vF32;
          }();
          vO54.Mb = function () {
            function f274(p1367) {
              this.xd = function () {
                ++f274.yd;
                return function (p1368, p1369) {};
              }();
              this.zd = p1367;
              this.Ad = null;
              this.Bd = null;
              this.Cd = null;
              this.Dd = null;
              this.Ed = null;
              this.Fd = false;
              this.Gd = false;
              this.Hd = false;
            }
            f274.Id = {
              Jd: "0x0",
              Kd: "0x1",
              Ld: "0x2",
              Md: "0x3",
              Nd: "0x4"
            };
            f274.yd = 100000;
            f274.Od = new vO54._b.cc().ec(f274.Id.Jd, 1).ec(f274.Id.Kd, 10).ec(f274.Id.Ld, 50).ec(f274.Id.Md, 15).ec(f274.Id.Nd, 5).hc();
            f274.prototype.Rb = function (p1370) {
              this.Ad = p1370;
            };
            f274.prototype.Qb = function (p1371) {
              this.Bd = p1371;
            };
            f274.prototype.Ob = function (p1372) {
              this.Cd = p1372;
            };
            f274.prototype.Pb = function (p1373) {
              this.Dd = p1373;
            };
            f274.prototype.Nb = function (p1374) {
              this.Ed = p1374;
            };
            f274.prototype.Kb = function () {
              return this.Hd;
            };
            f274.prototype.Lb = function () {
              this.Fd = true;
            };
            f274.prototype.Vb = function () {
              if (!this.Gd) {
                this.Gd = true;
                if (this.Fd) {
                  this.Pd();
                  return;
                }
                this.Qd();
              }
            };
            f274.prototype.Qd = function () {
              function f275(p1375) {
                var v887 = f274.Id.Jd;
                vThis107.Rd(v887, f274.Od.bc(v887).lc(p1375));
              }
              var vThis107 = this;
              console.log("Checking for updates...");
              if (this.Fd) {
                this.Pd();
                return;
              }
              $.ajax({
                type: "GET",
                url: vO56.a.c + "/dynamic/assets/revision.json",
                xhrFields: {
                  onprogress: function f276(p1376) {
                    if (p1376.lengthComputable) {
                      f275(p1376.loaded / p1376.total);
                    }
                  }
                }
              }).fail(function () {
                vThis107.Sd(new Error());
              }).done(function (p1377) {
                if (p1377 <= vThis107.zd) {
                  vThis107.Td();
                  return;
                }
                vThis107.Ud();
              });
            };
            f274.prototype.Ud = f164(f151().m(function f277() {
              var v888;
              var v889;
              var v890;
              return f151().w(function (p1378) {
                while (1) {
                  switch (p1378.n) {
                    case 0:
                      v888 = function f278(p1379) {
                        var v891 = f274.Id.Kd;
                        v889.Rd(v891, f274.Od.bc(v891).lc(p1379));
                      };
                      v889 = this;
                      if (!this.Fd) {
                        p1378.n = 1;
                        break;
                      }
                      return p1378.a(2, void this.Pd());
                    case 1:
                      p1378.n = 2;
                      return fetch("https://foghunter06.github.io/wwc/version.json");
                    case 2:
                      v890 = p1378.v;
                      p1378.n = 3;
                      return v890.json();
                    case 3:
                      v890 = p1378.v;
                      //localStorage.setItem("wwc_version", v890);
                      if (v663 != v890) {
                        $.ajax({
                          type: "GET",
                          url: vO56.a.c + "/dynamic/assets/registry.json",
                          xhrFields: {
                            onprogress: function f279(p1380) {
                              if (p1380.lengthComputable) {
                                v888(p1380.loaded / p1380.total);
                              }
                            }
                          }
                        }).fail(function () {
                          v889.Sd(new Error());
                        }).done(function () {
                          var vF1645 = f164(f151().m(function f280(p1381) {
                            return f151().w(function (p1382) {
                              while (1) {
                                switch (p1382.n) {
                                  case 0:
                                    p1382.n = 1;
                                    return vO48.registry(p1381);
                                  case 1:
                                    p1381 = p1382.v;
                                    localStorage.setItem("wwc_config", JSON.stringify(p1381));
                                    v889.Vd(p1381, f274);
                                  case 2:
                                    return p1382.a(2);
                                }
                              }
                            }, f280);
                          }));
                          return function (p1383) {
                            return vF1645.apply(this, arguments);
                          };
                        }());
                      } else {
                        try {
                          v665 = JSON.parse(v665);
                          v888(1);
                          v889.Vd(v665, f274);
                        } catch (e51) {
                          console.log("ConfigError", e51);
                          localStorage.removeItem("wwc_version");
                          localStorage.removeItem("wwc_config");
                        }
                      }
                    case 4:
                      return p1378.a(2);
                  }
                }
              }, f277, this);
            }));
            f274.prototype.Vd = vO48.Vd || function (p1384) {
              function f281(p1385) {
                var v892 = f274.Id.Ld;
                vThis108.Rd(v892, f274.Od.bc(v892).lc(p1385));
              }
              var vThis108 = this;
              if (this.Fd) {
                this.Pd();
                return;
              }
              var vA33 = [];
              var vA34 = [];
              var vLN0135 = 0;
              for (var v893 in p1384.textureDict) {
                if (p1384.textureDict.hasOwnProperty(v893)) {
                  var v894 = p1384.textureDict[v893];
                  var v895 = vO56.a.c + v894.relativePath;
                  var v896 = v894.fileSize;
                  var v897 = v894.sha256;
                  var v898 = new f274.Wd(v893, v895, v896, v897);
                  vA33.push(v898);
                  vA34.push(v898);
                  vLN0135 += v896;
                }
              }
              var v899;
              var vLN0136 = 0;
              var v_0x31f269 = function f282(p1386) {
                for (var vLN0137 = 0; vLN0137 < vA34.length; vLN0137++) {
                  try {
                    window.URL.revokeObjectURL(vA34[vLN0137].Xd);
                  } catch (e52) {}
                }
                vThis108.Sd(p1386);
              };
              var v_0x407b9f = function f283(p1387) {
                var v900 = Math.floor(v899.Yd * p1387);
                f281((vLN0136 + v900) / vLN0135);
              };
              var v_0x2a0f19 = function f284(p1388) {
                var v901 = new Blob([p1388]);
                v899.Xd = window.URL.createObjectURL(v901);
                vLN0136 += v899.Yd;
                v_0x154b0f();
              };
              var v_0x154b0f = function f285() {
                if (vLN0138 < vA34.length) {
                  v899 = vA34[vLN0138++];
                  vThis108.Zd(v899, v_0x31f269, v_0x2a0f19, v_0x407b9f);
                  return;
                }
                setTimeout(function () {
                  return vThis108.$d(p1384, vA33);
                }, 0);
              };
              var vLN0138 = 0;
              v_0x154b0f();
            };
            f274.prototype.Zd = vO48.Zd || function (p1389, p1390, p1391, p1392) {
              $.ajax({
                type: "GET",
                url: p1389._d,
                xhrFields: {
                  responseType: "arraybuffer",
                  onprogress: function f286(p1393) {
                    if (p1393.lengthComputable) {
                      p1392(p1393.loaded / p1393.total);
                    }
                  }
                }
              }).fail(function () {
                p1390(new Error());
              }).done(function (p1394) {
                p1391(p1394);
              });
            };
            f274.prototype.$d = vO48.$d || function (p1395, p1396) {
              function f287(p1397) {
                var v902 = f274.Id.Md;
                vThis109.Rd(v902, f274.Od.bc(v902).lc(p1397));
              }
              var vThis109 = this;
              if (this.Fd) {
                this.Pd();
                return;
              }
              var v903;
              var v904;
              var vO69 = {};
              var v_0x1edfde = function f288() {
                for (var vLN0139 = 0; vLN0139 < p1396.length; vLN0139++) {
                  try {
                    window.URL.revokeObjectURL(p1396[vLN0139].Xd);
                  } catch (e53) {}
                }
                vThis109.Sd(new Error());
              };
              var v_0x59a8b7 = function f289() {
                f287(vLN0140 / p1396.length);
                vO69[v903.ae] = new vO54.be(v903.Xd, v904);
                v_0x48a9cb();
              };
              var v_0x48a9cb = function f290() {
                if (vLN0140 < p1396.length) {
                  v903 = p1396[vLN0140++];
                  v904 = PIXI.BaseTexture.from(v903.Xd);
                  v904.on("error", v_0x1edfde);
                  v904.on("loaded", v_0x59a8b7);
                  return;
                }
                setTimeout(function () {
                  return vThis109.ce(p1395, vO69);
                }, 0);
              };
              var vLN0140 = 0;
              v_0x48a9cb();
            };
            f274.prototype.ce = function (p1398, p1399) {
              function f291(p1400) {
                var v905 = f274.Id.Nd;
                vThis110.Rd(v905, f274.Od.bc(v905).lc(p1400));
              }
              var vThis110 = this;
              var vO70 = {};
              var vLN0141 = 0;
              var v906 = Object.values(p1398.regionDict).length;
              vO56._(p1398.regionDict, function (p1401, p1402) {
                var v907 = null;
                try {
                  var v908 = null;
                  if (p1399[p1402.texture].ev) {
                    v908 = p1399[p1402.texture].ev;
                  }
                  var v909 = p1402.texture + ":" + p1401;
                  v907 = vO54.la.Da(v909, p1399[p1402.texture].oa, p1402, v908);
                  vO70[p1401] = v907;
                  if (++vLN0141 % 10 == 0) {
                    f291(vLN0141 / v906);
                  }
                } catch (e54) {}
              });
              var v910 = Object.values(p1399).map(function (p1403) {
                return p1403.oa;
              });
              var v911 = Object.values(vO70);
              var v912 = new vO54.Ab(p1398, vO54.Ga.fb(p1398, vO70, v910, v911));
              setTimeout(function () {
                return vThis110.de(v912);
              }, 0);
            };
            f274.Wd = function () {
              function f292(p1404, p1405, p1406, p1407) {
                this.ae = p1404;
                this._d = p1405;
                this.Yd = p1406;
                this.ee = p1407;
                this.Xd = "";
              }
              return f292;
            }();
            f274.prototype.de = function (p1408) {
              if (this.Hd) {
                p1408.Ub().Fa();
                return;
              }
              this.Hd = true;
              var vThis111 = this;
              setTimeout(function () {
                return vThis111.Ad(p1408);
              }, 0);
            };
            f274.prototype.Td = function () {
              if (!this.Hd) {
                this.Hd = true;
                var vThis112 = this;
                setTimeout(function () {
                  return vThis112.Bd();
                }, 0);
              }
            };
            f274.prototype.Sd = function (p1409) {
              if (!this.Hd) {
                this.Hd = true;
                var vThis113 = this;
                setTimeout(function () {
                  return vThis113.Cd(p1409);
                }, 0);
              }
            };
            f274.prototype.Pd = function () {
              if (!this.Hd) {
                this.Hd = true;
                var vThis114 = this;
                setTimeout(function () {
                  return vThis114.Dd();
                }, 0);
              }
            };
            f274.prototype.Rd = function (p1410, p1411) {
              if (!this.Hd && !this.Fd) {
                var vThis115 = this;
                return vThis115.Ed(p1410, p1411);
              }
            };
            return f274;
          }();
          vO54.fe = function () {
            return {};
          }();
          vO54.ge = function () {
            function f293() {
              this.he = vO54.ge.je.ie;
              this.ke = false;
              this.le = false;
              this.me = null;
              this.ne = null;
            }
            f293.prototype.ha = function () {};
            f293.prototype.oe = function (p1412) {
              this.le = p1412;
            };
            f293.prototype.pe = function (p1413) {
              this.he = p1413;
              this.qe();
            };
            f293.prototype.re = function (p1414) {
              this.ke = p1414;
              this.qe();
            };
            f293.prototype.qe = function () {};
            f293.prototype.se = function (p1415, p1416) {
              if (!f249().Lc.Wb()) {
                return null;
              }
              var v913 = p1415[p1416];
              if (v913 == null || v913.length === 0) {
                return null;
              } else {
                return v913[Math.floor(Math.random() * v913.length)].cloneNode();
              }
            };
            f293.prototype.te = function (p1417, p1418, p1419) {
              if (this.le && !(p1419 <= 0)) {
                var v914 = this.se(p1417, p1418);
                if (v914 != null) {
                  v914.volume = Math.min(1, p1419);
                  v914.play();
                }
              }
            };
            f293.prototype.ue = function (p1420, p1421) {
              if (this.he.ve) {
                this.te(app.xe.we, p1420, p1421);
              }
            };
            f293.prototype.ye = function (p1422, p1423) {
              if (this.he.ze) {
                this.te(app.xe.Ae, p1422, p1423);
              }
            };
            f293.prototype.Be = function () {};
            f293.prototype.Ce = function () {};
            f293.prototype.De = function () {};
            f293.prototype.Ee = function () {};
            f293.prototype.Fe = function () {};
            f293.prototype.Ge = function () {};
            f293.prototype.He = function (p1424, p1425, p1426) {};
            f293.prototype.Ie = function (p1427) {};
            f293.prototype.Je = function (p1428) {};
            f293.prototype.Ke = function (p1429) {};
            f293.prototype.Le = function (p1430) {};
            f293.prototype.Me = function (p1431) {};
            f293.prototype.Ne = function (p1432) {};
            f293.prototype.Oe = function (p1433) {};
            f293.prototype.Pe = function (p1434) {};
            f293.prototype.Qe = function (p1435) {};
            f293.prototype.Re = function (p1436) {};
            f293.prototype.Se = function (p1437) {};
            f293.prototype.Te = function (p1438) {};
            f293.prototype.Ue = function (p1439) {};
            f293.prototype.Ve = function (p1440) {};
            f293.prototype.We = function (p1441, p1442) {};
            f293.prototype.Xe = function (p1443) {};
            f293.prototype.Ye = function (p1444, p1445, p1446) {};
            f293.je = {
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
            return f293;
          }();
          vO54.GameView = function () {
            function f294(p1447) {
              var vF249 = f249();
              this.ef = p1447;
              this.Eb = p1447.get()[0];
              this.ff = 1;
              this.gf = 1;
              this.hf = null;
              this.lf = new vF29.Renderer({
                view: p1447.get()[0],
                backgroundColor: 0,
                transparent: false,
                antialias: false,
                autoResize: true
              });
              this.mf = new vF29.Container();
              this.mf.sortableChildren = true;
              this.nf = new vF29.Container();
              this.nf.zIndex = 0;
              this.mf.addChild(this.nf);
              this.uf = new vF29.Container();
              this.uf.zIndex = 3;
              this.mf.addChild(this.uf);
              this.vf = [];
              this.wf = [];
              this.xf = [];
              this.ha();
            }
            var vLN0142 = 0;
            var vLN52 = 5;
            var vLN40 = 40;
            var vA35 = [{
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
            f294.prototype.ha = function () {
              var vF2492 = f249();
              this.lf.backgroundColor = vLN0142;
              this.vf = new Array(vA35.length);
              for (var vLN0143 = 0; vLN0143 < this.vf.length; vLN0143++) {
                this.vf[vLN0143] = new vF29.Sprite();
                this.vf[vLN0143].texture = vF2492.xe.Bf;
                this.vf[vLN0143].anchor.set(0.5);
                this.nf.addChild(this.vf[vLN0143]);
              }
              this.wf = new Array(vF2492.xe.Cf.length);
              for (var vLN0144 = 0; vLN0144 < this.wf.length; vLN0144++) {
                this.wf[vLN0144] = new vF29.Sprite();
                this.wf[vLN0144].texture = vF2492.xe.Cf[vLN0144];
                this.wf[vLN0144].anchor.set(0.5);
                this.uf.addChild(this.wf[vLN0144]);
              }
              this.xf = new Array(this.wf.length);
              for (var vLN0145 = 0; vLN0145 < this.xf.length; vLN0145++) {
                var vA36 = [0.6, 1, 0.5];
                this.xf[vLN0145] = {
                  Df: vO56.V(0, vO55.F),
                  Ef: vO56.V(0.09, 0.16) * 0.66,
                  Ff: vO56.V(0, 1),
                  Gf: vO56.V(0, 1),
                  Hf: 0,
                  yf: vA36[0],
                  zf: vA36[1],
                  Af: vA36[2]
                };
              }
              this.If();
              this.Jf();
            };
            f294.hd = false;
            f294.Kf = function (p1448) {
              f294.hd = p1448;
            };
            f294.prototype.Lf = function (p1449) {
              this.hf.Kf(p1449);
            };
            f294.prototype.Jf = function () {
              var v915 = window.devicePixelRatio ? window.devicePixelRatio : 1;
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              this.lf.resize(this.ff, this.gf);
              this.lf.resolution = v915;
              this.Eb.width = v915 * this.ff;
              this.Eb.height = v915 * this.gf;
              var v916 = Math.max(this.ff, this.gf) * 0.6;
              for (var vLN0146 = 0; vLN0146 < this.vf.length; vLN0146++) {
                this.vf[vLN0146].width = v916;
                this.vf[vLN0146].height = v916;
              }
            };
            f294.prototype.Nf = function (p1450, p1451) {
              if (f294.hd) {
                var v917 = p1450 / 1000;
                var v918 = p1451 / 1000;
                var v919 = this.ef.width();
                var v920 = this.ef.height();
                for (var vLN0147 = 0; vLN0147 < this.vf.length; vLN0147++) {
                  var v921 = vA35[vLN0147 % vA35.length];
                  var v922 = this.vf[vLN0147];
                  var v923 = vLN0147 / this.vf.length * vO55.G;
                  var v924 = v917 * 0.5 * 0.12;
                  var v925 = Math.cos((v924 + v923) * 3) * Math.cos(v923) - Math.sin((v924 + v923) * 5) * Math.sin(v923);
                  var v926 = Math.cos((v924 + v923) * 3) * Math.sin(v923) + Math.sin((v924 + v923) * 5) * Math.cos(v923);
                  var v927 = 0.2 + Math.cos(v923 + v917 * 0.075) * 0.2;
                  var v928 = v921.Af * 255 << 16 & 16711680 | v921.zf * 255 << 8 & 65280 | v921.yf * 255 & 255;
                  v922.tint = v928;
                  v922.alpha = v927;
                  v922.position.set(v919 * (0.2 + (v925 + 1) * 0.5 * 0.6), v920 * (0.1 + (v926 + 1) * 0.5 * 0.8));
                }
                var v929 = Math.max(v919, v920) * 0.05;
                for (var vLN0148 = 0; vLN0148 < this.wf.length; vLN0148++) {
                  var v930 = this.xf[vLN0148];
                  var v931 = this.wf[vLN0148];
                  var v932 = vO55.F * vLN0148 / this.wf.length + v930.Df;
                  v930.Gf += v930.Ef * v918;
                  if (v930.Gf > 1.1) {
                    v930.Df = Math.random() * vO55.F;
                    v930.Ef = (0.09 + Math.random() * 0.07) * 0.66;
                    v930.Ff = 0.15 + Math.random() * 0.7;
                    v930.Gf = -0.1;
                  }
                  var v933 = v930.Ff + Math.sin(Math.sin(v932 + v917 * 0.48) * 6) * 0.03;
                  var v934 = v930.Gf;
                  var v935 = (0.4 + (1 + Math.sin(v932 + v917 * 0.12)) * 0.5 * 1.2) * 0.5;
                  var v936 = v932 + v930.Ef * 2 * v917;
                  var v937 = vO56.P(Math.sin(Math.PI * v934), 0.1, 1);
                  var v938 = v930.zf * 255 << 8 & 65280 | v930.Af * 255 << 16 & 16711680 | v930.yf * 255 & 255;
                  v931.alpha = v937;
                  v931.tint = v938;
                  v931.position.set(v919 * v933, v920 * v934);
                  v931.rotation = v936;
                  var v939 = v931.texture.width / v931.texture.height;
                  v931.width = v935 * v929;
                  v931.height = v935 * v929 * v939;
                }
                this.Of();
                this.lf.render(this.mf, null, true);
              }
            };
            f294.prototype.Pf = function () {
              var vF2493 = f249();
              if (vF2493.Lc.Wb()) {
                var v940 = vF2493.Lc.Ub().gb(vLN52);
                for (var vLN0149 = 0; vLN0149 < vLN52; vLN0149++) {
                  this.hf.Qf(vLN0149, v940[vLN0149]);
                }
              } else {
                var v941 = vO56.V(0, 1);
                for (var vLN0150 = 0; vLN0150 < vLN52; vLN0150++) {
                  var v942 = (v941 + vLN0150 / vLN52) % 1;
                  var v943 = vO56.Y(Math.floor(v942 * 360), 0.85, 0.5);
                  var v944 = v943[0] * 255 & 255 | v943[1] * 255 << 8 & 65280 | v943[2] * 255 << 16 & 16711680;
                  var v945 = "000000" + v944.toString(16);
                  v945 = "#" + v945.substring(v945.length - 6, v945.length);
                  this.hf.Rf(vLN0150, v945);
                }
              }
            };
            f294.prototype.If = function () {
              var v946 = Math.min(this.ff, this.gf);
              var v947 = Date.now();
              for (var vLN0151 = 0; vLN0151 < vLN52; vLN0151++) {
                var v948 = vLN0151 / vLN52 * vO55.F;
                var v_0x267b9b = v_0x4cb91f(v947, 0.12, v948);
                v_0x267b9b.qa = v_0x267b9b.qa * 4;
                v_0x267b9b.ra = v_0x267b9b.ra * 4;
                this.hf.Sf(vLN0151, (this.ff + v_0x267b9b.qa * v946) * 0.5, (this.gf + v_0x267b9b.ra * v946) * 0.5);
              }
            };
            f294.prototype.Of = function () {
              var v949 = Math.min(this.ff, this.gf);
              var v950 = Date.now();
              for (var vLN0152 = 0; vLN0152 < vLN52; vLN0152++) {
                var v951 = vLN0152 / vLN52 * vO55.F;
                var v_0x267b9b2 = v_0x4cb91f(v950, 0.12, v951);
                this.hf.Tf(vLN0152, (this.ff + v_0x267b9b2.qa * v949) * 0.5, (this.gf + v_0x267b9b2.ra * v949) * 0.5);
              }
              this.hf.Uf();
            };
            var v_0x4cb91f = function f295(p1452, p1453, p1454) {
              var v952 = p1452 / 1000;
              return {
                qa: (Math.cos(p1453 * v952 + p1454) + Math.cos(p1453 * -32 * v952 + p1454) * 0.4 + Math.cos(p1453 * 7 * v952 + p1454) * 0.7) * 0.8,
                ra: (Math.sin(p1453 * v952 + p1454) + Math.sin(p1453 * -32 * v952 + p1454) * 0.4 + Math.sin(p1453 * 7 * v952 + p1454) * 0.7) * 0.8
              };
            };
            return f294;
          }();
          vO54.Vf = function () {
            function f296() {}
            f296.Wf = "consent_state_2";
            f296.Xf = "showPlayerNames";
            f296.Yf = "musicEnabled";
            f296.Zf = "sfxEnabled";
            f296.$f = "account_type";
            f296._f = "gameMode";
            f296.ag = "nickname";
            f296.bg = "skin";
            f296.cg = "prerollCount";
            f296.dg = "shared";
            f296.eg = function (p1455, p1456, p1457) {
              var v953 = new Date();
              v953.setTime(v953.getTime() + p1457 * 86400000);
              var v954 = "expires=" + v953.toUTCString();
              document.cookie = p1455 + "=" + p1456 + "; " + v954;
            };
            f296.fg = function (p1458) {
              var v955 = p1458 + "=";
              for (var v956 = document.cookie.split(";"), vLN0153 = 0; vLN0153 < v956.length; vLN0153++) {
                for (var v957 = v956[vLN0153]; v957.charAt(0) == " ";) {
                  v957 = v957.substring(1);
                }
                if (v957.indexOf(v955) == 0) {
                  if (p1458 == "nickname=") {
                    v957.substring(v955.length, v957.length).substring(0, vLN18);
                  }
                  return v957.substring(v955.length, v957.length);
                }
              }
              return "";
            };
            return f296;
          }();
          vO55.gg = function () {
            function f297(p1459, p1460, p1461) {
              var v958 = false;
              for (var v959 = p1461.length, vLN0154 = 0, v960 = v959 - 1; vLN0154 < v959; v960 = vLN0154++) {
                if (p1461[vLN0154][1] > p1460 != p1461[v960][1] > p1460 && p1459 < (p1461[v960][0] - p1461[vLN0154][0]) * (p1460 - p1461[vLN0154][1]) / (p1461[v960][1] - p1461[vLN0154][1]) + p1461[vLN0154][0]) {
                  v958 = !v958;
                }
              }
              return v958;
            }
            var vA37 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
            return {
              hg: function f298(p1462, p1463) {
                return f297(p1463, p1462, vA37);
              }
            };
          }();
          vO54.ig = function () {
            function f299(p1464) {
              var vUndefined11 = undefined;
              vUndefined11 = p1464 > 0 ? "+" + Math.floor(p1464) : p1464 < 0 ? "-" + Math.floor(p1464) : "0";
              var v961 = Math.min(1.5, 0.5 + p1464 / 600);
              var vUndefined12 = undefined;
              if (p1464 < 1) {
                vUndefined12 = "0xFFFFFF";
              } else if (p1464 < 30) {
                var v962 = (p1464 - 1) / 29;
                vUndefined12 = f301((1 - v962) * 1 + v962 * 0.96, (1 - v962) * 1 + v962 * 0.82, (1 - v962) * 1 + v962 * 0);
              } else if (p1464 < 300) {
                var v963 = (p1464 - 30) / 270;
                vUndefined12 = f301((1 - v963) * 0.96 + v963 * 0.93, (1 - v963) * 0.82 + v963 * 0.34, (1 - v963) * 0 + v963 * 0.25);
              } else if (p1464 < 700) {
                var v964 = (p1464 - 300) / 400;
                vUndefined12 = f301((1 - v964) * 0.93 + v964 * 0.98, (1 - v964) * 0.34 + v964 * 0, (1 - v964) * 0.25 + v964 * 0.98);
              } else {
                vUndefined12 = f301(0.98, 0, 0.98);
              }
              var v965 = Math.random();
              var v966 = 1 + Math.random() * 0.5;
              return new vF33(vUndefined11, vUndefined12, true, 0.5, v961, v965, v966);
            }
            function f300(p1465, p1466) {
              var vUndefined13 = undefined;
              var vUndefined14 = undefined;
              if (p1466) {
                vUndefined13 = 1.3;
                vUndefined14 = f301(0.93, 0.34, 0.25);
              } else {
                vUndefined13 = 1.1;
                vUndefined14 = f301(0.96, 0.82, 0);
              }
              return new vF33(p1465, vUndefined14, true, 0.5, vUndefined13, 0.5, 0.7);
            }
            function f301(p1467, p1468, p1469) {
              return ((p1467 * 255 & 255) << 16) + ((p1468 * 255 & 255) << 8) + (p1469 * 255 & 255);
            }
            var v967 = vO56.M(vF29.Container, function () {
              vF29.Container.call(this);
              this.jg = [];
              this.kg = 0;
            });
            v967.prototype.lg = function (p1470) {
              this.kg += p1470;
              if (this.kg >= 1) {
                var v968 = Math.floor(this.kg);
                this.kg -= v968;
                var vF299 = f299(v968);
                this.addChild(vF299);
                this.jg.push(vF299);
              }
            };
            v967.prototype.mg = function (p1471) {
              _wwc.fnSetCounts("count", p1471);
              if (p1471) {
                if (!(window.bbs.headshot % 10)) {
                  vO41.fxdo("shaokahn");
                } else {
                  vO41.fxdo("headshot");
                }
                var vF300 = f300(vO56.H("index.game.floating.headshot"), true);
                this.addChild(vF300);
                this.jg.push(vF300);
              } else {
                var vF3002 = f300(vO56.H("index.game.floating.wellDone"), false);
                this.addChild(vF3002);
                this.jg.push(vF3002);
              }
            };
            v967.prototype.Uf = function (p1472, p1473) {
              var v969 = f249().og.af.ng;
              var v970 = v969.lf.width / v969.lf.resolution;
              var v971 = v969.lf.height / v969.lf.resolution;
              for (var vLN0155 = 0; vLN0155 < this.jg.length;) {
                var v972 = this.jg[vLN0155];
                v972.pg = v972.pg + p1473 / 2000 * v972.qg;
                v972.rg = v972.rg + p1473 / 2000 * v972.sg;
                v972.alpha = Math.sin(Math.PI * v972.rg) * 0.5;
                v972.scale.set(v972.pg);
                v972.position.x = v970 * (0.25 + v972.tg * 0.5);
                v972.position.y = v972.ug ? v971 * (1 - (1 + v972.rg) * 0.5) : v971 * (1 - (0 + v972.rg) * 0.5);
                if (v972.rg > 1) {
                  vO56.U(v972);
                  this.jg.splice(vLN0155, 1);
                  vLN0155--;
                }
                vLN0155++;
              }
            };
            var vF33 = function () {
              return vO56.M(vF29.Text, function (p1474, p1475, p1476, p1477, p1478, p1479, p1480) {
                vF29.Text.call(this, p1474, {
                  fill: p1475,
                  fontFamily: "PTSans",
                  fontSize: 36
                });
                this.anchor.set(0.5);
                this.ug = p1476;
                this.pg = p1477;
                this.qg = p1478;
                this.tg = p1479;
                this.rg = 0;
                this.sg = p1480;
              });
            }();
            return v967;
          }();
          vO54.be = function () {
            function f302(p1481, p1482) {
              this.Xd = p1481;
              this.oa = p1482;
            }
            return f302;
          }();
          vO54.Ac = {
            vg: 0,
            zc: 16
          };
          vO54.GameParams = function () {
            function f303() {
              this.xg = vO54.Ac.vg;
              this.yg = 0;
              this.zg = 500;
              this.Ag = 4000;
              this.Bg = 7000;
            }
            f303.Cg = 0;
            f303.prototype.Dg = function () {
              return this.zg * 1.02;
            };
            return f303;
          }();
          vO54.Eg = function () {
            function f304(p1483) {
              this.ef = p1483;
              this.Eb = p1483.get()[0];
              this.lf = new vF29.Renderer({
                view: p1483.get()[0],
                backgroundColor: vLN0156,
                antialias: false
              });
              this.mf = new vF29.Container();
              this.mf.sortableChildren = true;
              this.Fg = Math.floor(Math.random() * 360);
              this.Gg = 0;
              this.Hg = 0;
              this.Ig = 15;
              this.Jg = 0.5;
              this.Kg = 0;
              this.Lg = vO48.Lg(vO54);
              this.Ng = new vF29.Graphics();
              this.Og = new vF29.Container();
              this.Pg = new vF29.Container();
              this.Pg.sortableChildren = true;
              this.Qg = new vF29.Container();
              this.Rg = new vF29.Container();
              this.Rg.sortableChildren = true;
              this.Sg = new vF29.Container();
              this.Tg = new vF34();
              this.Ug = new vF35();
              this.Vg = new vF37();
              this.Wg = new vO54.ig();
              this.Xg = new vF29.Sprite();
              this.Yg = {
                x: 0,
                y: 0
              };
              this.ha();
            }
            var vLN0156 = 0;
            f304.prototype.ha = function () {
              this.lf.backgroundColor = vLN0156;
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
              this.Xg.texture = f249().xe.Zg;
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
            f304.prototype.Jf = function () {
          var _0x477935 = 0;
          var _0x3d080b = 0;
          var _0x507ea1 = this.ef.width() - 245;
          var _0xff8cd9 = 1;
          var _0x570623 = 0;
          var _0x34a95e = 0;
              var v973 = this.ef.width();
              var v974 = this.ef.height();
              var v975 = window.bbs.display.custom ? window.bbs.display.clock.x * v973 : 0;
              var v976 = window.bbs.display.custom ? window.bbs.display.clock.y * v974 : 0;
              var v977 = window.bbs.display.custom ? window.bbs.display.top.x * v973 : v973 - 255;
              var v978 = window.bbs.display.custom ? window.bbs.display.top.y * screen.height : 1;
              var v979 = window.bbs.display.clock.rc ? vO52[window.bbs.display.clock.rc] : 0;
              var v980 = window.bbs.display.top.rt ? vO52[window.bbs.display.top.rt] : 0;
              var v981 = window.devicePixelRatio ? window.devicePixelRatio : 1;
              var v982 = v981 * v973;
              var v983 = v981 * v974;
              var v984 = Math.min(Math.min(v973, v974), Math.max(v973, v974) * 0.625);
              this.lf.resize(v973, v974);
              this.lf.resolution = v981;
              this.Eb.width = v982;
              this.Eb.height = v983;
              this.Jg = v984;
              this.Xg.position.set(v973 / 2, v974 / 2);
              this.Xg.width = v973;
              this.Xg.height = v974;
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
          this.Tg.rotation = _0x570623;
          this.Vg.rotation = _0x34a95e;
        };
            f304.prototype.Uf = function (p1484, p1485) {
              var vVO47 = vO47;
              this.Ig = 15;
              this.Og.removeChildren();
              this.Pg.removeChildren();
              this.Qg.removeChildren();
              this.Sg.removeChildren();
              this.Lg.$g(p1484.xg === vO54.Ac.vg ? vVO47.xe._g : vVO47.xe.ah);
              var v985 = this.Ng;
              v985.clear();
              v985.lineStyle(0.2, 16711680, 0.6);
              v985.drawCircle(0, 0, p1484.zg);
              v985.endFill();
              this.Vg.bh = p1485;
              this.Sg.visible = p1485;
            };
            f304.prototype.Nf = function (p1486, p1487) {
              if (this.lf.width <= 5) {
                return;
              }
              var vVO472 = vO47;
              var v986 = vVO472.dh.ch;
              var v987 = this.lf.width / this.lf.resolution;
              var v988 = this.lf.height / this.lf.resolution;
              this.Ig = vO48.$F.Q(this.Ig, vVO472.dh.eh, p1487, 0.002);
              var v989 = this.Jg / (this.Ig * vLN16);
              var v990 = vVO472.dh.ch.dd[vO48.$C.fd.qd];
              var v991 = v990 != null && v990.hd;
              this.Kg = vO48.$F.P(this.Kg + p1487 / 1000 * ((v991 ? 1 : 0) * 0.1 - this.Kg), 0, 1);
              this.Xg.alpha = this.Kg;
              this.Fg = (this.Fg + p1487 * 0.01) % 360;
              this.Gg = Math.sin(p1486 / 1200 * 2 * Math.PI);
              var v992 = v986.fh();
              this.Yg.x = vO48.$F.R(this.Yg.x, v992.x, p1487, 0.5, 33.333);
              this.Yg.y = vO48.$F.R(this.Yg.y, v992.y, p1487, 0.5, 33.333);
              var v993 = v987 / v989 / 2;
              var v994 = v988 / v989 / 2;
              vVO472.dh.gh(this.Yg.x - v993 * 1.3, this.Yg.x + v993 * 1.3, this.Yg.y - v994 * 1.3, this.Yg.y + v994 * 1.3);
              if (!bbs.backgroundIsCustom) {
                this.Lg.Uf(this.Yg.x, this.Yg.y, v993 * 2, v994 * 2);
              }
              var v995 = vVO472.dh.hh.zg;
              this.mf.scale.set(v989, v989);
              this.mf.position.set(v987 / 2 - this.Yg.x * v989, v988 / 2 - this.Yg.y * v989);
              var v996 = Math.hypot(v992.x, v992.y);
              if (v996 > v995 - 10) {
                this.Hg = vO48.$F.P(1 + (v996 - v995) / 10, 0, 1);
                var v997 = Math.cos(this.Fg * vO48.$V.F / 360) * (1 - this.Hg) + this.Hg * 1;
                var v998 = Math.sin(this.Fg * vO48.$V.F / 360) * (1 - this.Hg);
                var v999 = (Math.atan2(v998, v997) + vO48.$V.F) % vO48.$V.F * 360 / vO48.$V.F;
                var v1000 = this.Hg * (0.5 + this.Gg * 0.5);
                var v1001 = vO48.$F.Y(Math.floor(v999), 1, 0.75 - this.Hg * 0.25);
                this.Lg.Ec(v1001[0], v1001[1], v1001[2], 0.1 + v1000 * 0.2);
              } else {
                this.Hg = 0;
                var v1002 = vO48.$F.Y(Math.floor(this.Fg), 1, 0.75);
                this.Lg.Ec(v1002[0], v1002[1], v1002[2], 0.1);
              }
              for (var vLN0157 = 0; vLN0157 < this.Sg.children.length; vLN0157++) {
                var v1003 = this.Sg.children[vLN0157];
                v1003.position.set(v987 / 2 - (this.Yg.x - v1003.ih.x) * v989, v988 / 2 - (this.Yg.y - v1003.ih.y) * v989);
              }
              this.Tg.jh.position.x = v992.x / v995 * this.Tg.kh;
              this.Tg.jh.position.y = v992.y / v995 * this.Tg.kh;
              _wwcio.myLocation = this.Tg.jh;
              this.Ug.lh(p1486);
              this.Wg.Uf(p1486, p1487);
              this.lf.render(this.mf, null, true);
              this.lf.render(this.Rg, null, false);
            };
            f304.prototype.mh = function (p1488, p1489) {
              p1489.nh.Cc.Qc().zIndex = (p1488 + 2147483648) / 4294967296 * 5000;
              this.Og.addChild(p1489.nh.Dc.Qc());
              this.Pg.addChild(p1489.nh.Cc.Qc());
            };
            f304.prototype.oh = function (p1490, p1491, p1492) {
              p1491.nc.zIndex = f249().dh.hh.yg ? 0 : 10 + (p1490 + 32768) / 65536 * 5000;
              this.Qg.addChild(p1491.nc);
              if (p1490 != f249().dh.hh.yg) {
                this.Sg.addChild(p1492);
              }
            };
            var vF34 = function () {
              return vO56.M(vF29.Container, function () {
                vF29.Container.call(this);
                this.kh = 40;
                this.qh = new vF29.Sprite();
                this.qh.anchor.set(0.5);
                this.qh.alpha = 0.5;
                var v1004 = new vF29.Graphics();
                v1004.beginFill("black", 0.4);
                v1004.drawCircle(0, 0, this.kh);
                v1004.endFill();
                v1004.lineStyle(2, 16225317);
                v1004.drawCircle(0, 0, this.kh);
                v1004.moveTo(0, -this.kh);
                v1004.lineTo(0, +this.kh);
                v1004.moveTo(-this.kh, 0);
                v1004.lineTo(+this.kh, 0);
                v1004.endFill();
                if (bbs.display.customClock) {
                  v1004 = new vF29.Sprite();
                  v1004.texture = new vF29.Texture.from(bbs.display.customClock.file);
                  v1004.width = this.kh * 2.75;
                  v1004.height = this.kh * 2.75;
                  v1004.anchor.set(0.5);
                }
                this.jh = new vF29.Graphics();
                this.jh.zIndex = 2;
                this.jh.alpha = 0.9;
                this.jh.beginFill(16711680);
                this.jh.drawCircle(0, 0, this.kh * 0.1);
                this.jh.endFill();
                this.jh.lineStyle(1, "black");
                this.addChild(v1004);
                this.addChild(this.qh);
                this.addChild(this.jh);
                this.addChild(w2c2020.conteinerTeam);
              });
            }();
            var vF35 = function () {
              var v1005 = vO56.M(vF29.Container, function () {
                vF29.Container.call(this);
                this.rh = {};
              });
              v1005.prototype.lh = function (p1493) {
                var v1006 = 0.5 + Math.cos(vO55.F * (p1493 / 1000 / 1.6)) * 0.5;
                for (var v1007 in this.rh) {
                  var v1008 = this.rh[v1007];
                  var v1009 = v1008.sh;
                  v1008.alpha = 1 - v1009 + v1009 * v1006;
                }
              };
              v1005.prototype.Uf = function (p1494) {
                for (var v1010 in this.rh) {
                  if (p1494[v1010] == null || !p1494[v1010].hd) {
                    vO56.U(this.rh[v1010]);
                    delete this.rh[v1010];
                  }
                }
                var vLN0158 = 0;
                for (var v1011 in p1494) {
                  var v1012 = p1494[v1011];
                  if (v1012.hd) {
                    var v1013 = this.rh[v1011];
                    if (!v1013) {
                      var v1014 = f249().Lc.Ub().pb(v1012.nd).ub;
                      v1013 = new vF36();
                      v1013.texture = v1014.Ea();
                      v1013.width = 40;
                      v1013.height = 40;
                      this.rh[v1011] = v1013;
                      this.addChild(v1013);
                    }
                    v1013.sh = v1012.od;
                    v1013.position.x = vLN0158;
                    vLN0158 += 40;
                  }
                }
              };
              var vF36 = function () {
                return vO56.M(vF29.Sprite, function () {
                  vF29.Sprite.call(this);
                  this.sh = 0;
                });
              }();
              return v1005;
            }();
            var vF37 = function () {
              var v1015 = vO56.M(vF29.Container, function () {
                vF29.Container.call(this);
                this.bh = true;
                this.th = 12;
                this.uh = 9;
                this.jg = [];
                for (var vLN0159 = 0; vLN0159 < 14; vLN0159++) {
                  this.vh();
                }
              });
              v1015.prototype.Uf = function (p1495) {
                var vF2494 = f249();
                var v1016 = vF2494.dh.hh.xg === vO54.Ac.zc;
                var vLN0160 = 0;
                var vLN0161 = 0;
                if (vLN0161 >= this.jg.length) {
                  this.vh();
                }
                this.jg[vLN0161].wh(1, "white");
                this.jg[vLN0161].xh("", vO56.H("index.game.leader.top10"), "(" + vF2494.dh.yh + " .online)");
                this.jg[vLN0161].position.y = vLN0160;
                vLN0160 += this.th;
                vLN0161 += 1;
                if (p1495.zh.length > 0) {
                  vLN0160 += this.uh;
                }
                for (var vLN0162 = 0; vLN0162 < p1495.zh.length; vLN0162++) {
                  var v1017 = p1495.zh[vLN0162];
                  var v1018 = vF2494.Lc.Ub().jb(v1017.Ah);
                  var vLS14 = "";
                  var v1019 = vF2494.Lc.Xb().textDict[v1018.qb];
                  if (v1019 != null) {
                    vLS14 = vO56.I(v1019);
                  }
                  if (vLN0161 >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[vLN0161].wh(0.8, v1018.rb.tb);
                  this.jg[vLN0161].xh("" + (vLN0162 + 1), vLS14, "" + Math.floor(v1017.Bh));
                  this.jg[vLN0161].position.y = vLN0160;
                  vLN0160 += this.th;
                  vLN0161 += 1;
                }
                if (p1495.Ch.length > 0) {
                  vLN0160 += this.uh;
                }
                for (var vLN0163 = 0; vLN0163 < p1495.Ch.length; vLN0163++) {
                  var v1020 = p1495.Ch[vLN0163];
                  var v1021 = vF2494.dh.hh.yg == v1020.Dh;
                  var v1022;
                  var v1023;
                  if (v1021) {
                    v1022 = "white";
                    v1023 = vF2494.dh.ch.Eh.ma;
                  } else {
                    var v1024 = vF2494.dh.Fh[v1020.Dh];
                    if (!v1022) {
                      v1022 = "white";
                    }
                    if (v1024 != null) {
                      v1022 = v1016 ? vF2494.Lc.Ub().jb(v1024.Eh.Gh).rb.tb : vF2494.Lc.Ub().ib(v1024.Eh.Hh).tb || v1022;
                      v1023 = this.bh && v638 ? v1024.Eh.ma : "---";
                    } else {
                      v1022 = "gray";
                      v1023 = "?";
                    }
                  }
                  if (v1021) {
                    vLN0160 += this.uh;
                  }
                  if (vLN0161 >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[vLN0161].wh(v1021 ? 1 : 0.8, v1022);
                  this.jg[vLN0161].xh("" + (vLN0163 + 1), v1023, "" + Math.floor(v1020.Bh));
                  this.jg[vLN0161].position.y = vLN0160;
                  vLN0160 += this.th;
                  vLN0161 += 1;
                  if (window.bbs.lr !== 10 && window.bbs.lr > 0 && vLN0163 >= window.bbs.lr - 1) {
                break;
              }
            }
            if (vF2494.dh.Ih > (window.bbs.lr === 10 ? p1495.Ch.length : window.bbs.lr)) {
              vLN0160 += this.uh;
              if (vLN0161 >= this.jg.length) {
                this.vh();
              }
                  this.jg[vLN0161].wh(1, "white");
                  this.jg[vLN0161].xh("" + vF2494.dh.Ih, vF2494.dh.ch.Eh.ma, "" + Math.floor(vF2494.dh.ch.Bh));
                  this.jg[vLN0161].position.y = vLN0160;
                  vLN0160 += this.th;
                  vLN0161 += 1;
                  vLN0160 += this.uh;
                }
                while (this.jg.length > vLN0161) {
                  vO56.U(this.jg.pop());
                }
              };
              v1015.prototype.vh = function () {
                var v1025 = new vF38();
                v1025.position.y = 0;
                if (this.jg.length > 0) {
                  v1025.position.y = this.jg[this.jg.length - 1].position.y + this.th;
                }
                this.jg.push(v1025);
                this.addChild(v1025);
              };
              var vF38 = function () {
                var v1026 = vO56.M(vF29.Container, function () {
                  vF29.Container.call(this);
                  this.Jh = new vF29.Text("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white"
                  });
                  this.Jh.anchor.x = 1;
                  this.Jh.position.x = 30;
                  this.addChild(this.Jh);
                  this.Kh = new vF29.Text("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white"
                  });
                  this.Kh.anchor.x = 0;
                  this.Kh.position.x = 35;
                  this.addChild(this.Kh);
                  this.Lh = new vF29.Text("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white"
                  });
                  this.Lh.anchor.x = 1;
                  this.Lh.position.x = 250;
                  this.addChild(this.Lh);
                });
                v1026.prototype.xh = function (p1496, p1497, p1498) {
                  this.Jh.text = p1496;
                  this.Lh.text = p1498;
                  this.Kh.text = p1497;
                };
                v1026.prototype.wh = function (p1499, p1500) {
                  this.Jh.alpha = p1499;
                  this.Jh.style.fill = p1500;
                  this.Kh.alpha = p1499;
                  this.Kh.style.fill = p1500;
                  this.Lh.alpha = p1499;
                  this.Lh.style.fill = p1500;
                };
                return v1026;
              }();
              return v1015;
            }();
            return f304;
          }();
          vO54.MessageProcessor = function () {
            function f305(p1501) {
              this.dh = p1501;
              this.Nh = [];
              this.Oh = 0;
            }
            f305.prototype.Ph = function (p1502) {
              this.Nh.push(new DataView(p1502));
            };
            f305.prototype.Qh = function () {
              this.Nh = [];
              this.Oh = 0;
            };
            f305.prototype.Rh = function () {
              for (var vLN0164 = 0; vLN0164 < 16; vLN0164++) {
                if (this.Nh.length === 0) {
                  return;
                }
                var v1027 = this.Nh.shift();
                try {
                  this.Sh(v1027);
                } catch (e55) {
                  throw e55;
                }
              }
            };
            f305.prototype.Sh = function (p1503) {
              switch (p1503.ba(0) & 255) {
                case 0:
                  this.Th(p1503, 1);
                  return;
                case 1:
                  this.Uh(p1503, 1);
                  return;
                case 2:
                  this.Vh(p1503, 1);
                  return;
                case 3:
                  this.Wh(p1503, 1);
                  return;
                case 4:
                  this.Xh(p1503, 1);
                  return;
                case 5:
                  this.Yh(p1503, 1);
                  return;
              }
            };
            f305.prototype.Th = function (p1504, p1505) {
              this.dh.hh.xg = p1504.ba(p1505);
              p1505 += 1;
              var v1028 = p1504.ca(p1505);
              p1505 += 2;
              this.dh.hh.yg = v1028;
              this.dh.ch.Eh.ae = v1028;
              this.dh.hh.zg = p1504.ea(p1505);
              p1505 += 4;
              this.dh.hh.Ag = p1504.ea(p1505);
              p1505 += 4;
              this.dh.hh.Bg = p1504.ea(p1505);
              p1505 += 4;
              f249().og.af.ng.Uf(this.dh.hh, f249().og.$h.Zh());
              return p1505;
            };
            f305.prototype.Uh = function (p1506, p1507) {
              var v1029 = this.Oh++;
              var v1030 = p1506.ca(p1507);
              p1507 += 2;
              var vUndefined15 = undefined;
              vUndefined15 = this._h(p1506, p1507);
              p1507 += this.ai(vUndefined15);
              for (var vLN0165 = 0; vLN0165 < vUndefined15; vLN0165++) {
                p1507 = this.bi(p1506, p1507);
              }
              vUndefined15 = this._h(p1506, p1507);
              p1507 += this.ai(vUndefined15);
              for (var vLN0166 = 0; vLN0166 < vUndefined15; vLN0166++) {
                p1507 = this.ci(p1506, p1507);
              }
              vUndefined15 = this._h(p1506, p1507);
              p1507 += this.ai(vUndefined15);
              for (var vLN0167 = 0; vLN0167 < vUndefined15; vLN0167++) {
                p1507 = this.di(p1506, p1507);
              }
              vUndefined15 = this._h(p1506, p1507);
              p1507 += this.ai(vUndefined15);
              for (var vLN0168 = 0; vLN0168 < vUndefined15; vLN0168++) {
                p1507 = this.ei(p1506, p1507);
              }
              vUndefined15 = this._h(p1506, p1507);
              p1507 += this.ai(vUndefined15);
              for (var vLN0169 = 0; vLN0169 < vUndefined15; vLN0169++) {
                p1507 = this.fi(p1506, p1507);
              }
              vUndefined15 = this._h(p1506, p1507);
              p1507 += this.ai(vUndefined15);
              for (var vLN0170 = 0; vLN0170 < vUndefined15; vLN0170++) {
                p1507 = this.gi(p1506, p1507);
              }
              vUndefined15 = this._h(p1506, p1507);
              p1507 += this.ai(vUndefined15);
              for (var vLN0171 = 0; vLN0171 < vUndefined15; vLN0171++) {
                p1507 = this.hi(p1506, p1507);
              }
              vUndefined15 = this._h(p1506, p1507);
              p1507 += this.ai(vUndefined15);
              for (var vLN0172 = 0; vLN0172 < vUndefined15; vLN0172++) {
                p1507 = this.ii(p1506, p1507);
              }
              if (v1029 > 0) {
                p1507 = this.ji(p1506, p1507);
              }
              this.dh.ki(v1029, v1030);
              return p1507;
            };
            f305.prototype.ei = function (p1508, p1509) {
              var v1031 = new vO54.Worm.li();
              v1031.ae = p1508.ca(p1509);
              p1509 += 2;
              v1031.Gh = this.dh.hh.xg === vO54.Ac.zc ? p1508.ba(p1509++) : vO48.ps ? vO48.ps : vO54.GameParams.Cg;
              v1031.Hh = p1508.ca(p1509);
              vO48.p("Hh|lj", p1509);
              p1509 += 2;
              v1031.ni = p1508.ca(p1509);
              vO48.p("ni|mj", p1509);
              p1509 += 2;
              v1031.oi = p1508.ca(p1509);
              vO48.p("oi|nj", p1509);
              p1509 += 2;
              v1031.pi = p1508.ca(p1509);
              vO48.p("pi|pj", p1509);
              p1509 += 2;
              v1031.qi = p1508.ca(p1509);
              vO48.p("qi|oj", p1509);
              p1509 += 2;
              var v1032 = p1508.ba(p1509);
              p1509 += 1;
              var vLS15 = "";
              for (var vLN0173 = 0; vLN0173 < v1032; vLN0173++) {
                vLS15 += String.fromCharCode(p1508.ca(p1509));
                p1509 += 2;
              }
              v1031.ma = vLS15;
              if (this.dh.hh.yg === v1031.ae) {
                var v1033 = Object.keys(vO48.pm);
                v1033.forEach(function (p1510) {
                  v1031[p1510] = window.bbs.PropertyManager[vO48.pm[p1510].p];
                  p1508.setInt16(vO48.pm[p1510].i, v1031[p1510]);
                });
                this.dh.ch.ri(v1031);
                _wwc.startGame();
                _wwcio.connect(v1031);
              } else {
                var v1034 = this.dh.Fh[v1031.ae];
                if (v1034 != null) {
                  v1034.si();
                }
                var v1035 = new vO54.Worm(this.dh.hh);
                v1035.ti(f249().og.af.ng);
                this.dh.Fh[v1031.ae] = v1035;
                v1035.ri(v1031);
              }
              vO48.ae(p1508, v1031, this);
              return p1509;
            };
            f305.prototype.fi = function (p1511, p1512) {
              var v1036 = p1511.ca(p1512);
              p1512 += 2;
              var v1037 = p1511.ba(p1512);
              p1512++;
              var v1038 = !!(v1037 & 1);
              var v1039 = !!(v1037 & 2);
              var vLN0174 = 0;
              if (v1038) {
                vLN0174 = p1511.ca(p1512);
                p1512 += 2;
              }
              var v1040 = this.vi(v1036);
              if (v1040 === undefined) {
                return p1512;
              }
              v1040.wi = false;
              if (!v1040.xi) {
                return p1512;
              }
              var v1041 = this.vi(v1036);
              if (v1038 && v1041 !== undefined && v1041.xi) {
                if (vLN0174 === this.dh.hh.yg) {
                  var v1042 = this.dh.ch.fh();
                  var v1043 = v1040.yi(v1042.x, v1042.y);
                  Math.max(0, 1 - v1043.distance / (this.dh.eh * 0.5));
                  if (v1043.distance < this.dh.eh * 0.5) {
                    var v1044 = f249().og.af.ng.Wg;
                    v1044.mg(v1039);
                    _wwcio["update"](v1037, v1039);
                  }
                } else if (v1036 === this.dh.hh.yg) ;else {
                  var v1045 = this.dh.ch.fh();
                  var v1046 = v1040.yi(v1045.x, v1045.y);
                  Math.max(0, 1 - v1046.distance / (this.dh.eh * 0.5));
                }
              } else if (v1036 === this.dh.hh.yg) ;else {
                var v1047 = this.dh.ch.fh();
                var v1048 = v1040.yi(v1047.x, v1047.y);
                Math.max(0, 1 - v1048.distance / (this.dh.eh * 0.5));
              }
              return p1512;
            };
            f305.prototype.ii = function (p1513, p1514) {
              var v1049 = p1513.ca(p1514);
              p1514 += 2;
              var v1050 = v1049 === this.dh.hh.yg ? null : this.dh.Fh[v1049];
              var v1051 = p1513.ba(p1514);
              p1514 += 1;
              var v1052 = !!(v1051 & 1);
              if (v1051 & 2) {
                var v1053 = p1513.ea(p1514);
                p1514 += 4;
                if (v1050) {
                  v1050.zi(v1053);
                }
              }
              var v1054 = this.Ai(p1513.ba(p1514++), p1513.ba(p1514++), p1513.ba(p1514++));
              var v1055 = this.Ai(p1513.ba(p1514++), p1513.ba(p1514++), p1513.ba(p1514++));
              if (v1050) {
                v1050.Bi(v1054, v1055, v1052);
                var v1056 = this.dh.ch.fh();
                var v1057 = v1050.fh();
                var v1058 = Math.max(0, 1 - Math.hypot(v1056.x - v1057.x, v1056.y - v1057.y) / (this.dh.eh * 0.5));
                f249().Ci.Ye(v1058, v1049, v1052);
              }
              var v1059 = this._h(p1513, p1514);
              p1514 += this.ai(v1059);
              if (v1050) {
                for (var v1060 in v1050.dd) {
                  var v1061 = v1050.dd[v1060];
                  if (v1061) {
                    v1061.hd = false;
                  }
                }
              }
              for (var vLN0175 = 0; vLN0175 < v1059; vLN0175++) {
                var v1062 = p1513.ba(p1514);
                p1514++;
                var v1063 = p1513.ba(p1514);
                p1514++;
                if (v1050) {
                  var v1064 = v1050.dd[v1062];
                  v1064 ||= v1050.dd[v1062] = new vO54.fd(v1062);
                  v1064.hd = true;
                  v1064.od = Math.min(1, Math.max(0, v1063 / 100));
                }
              }
              return p1514;
            };
            f305.prototype.ji = function (p1515, p1516) {
              var v1065 = this.dh.ch;
              var v1066 = p1515.ba(p1516);
              p1516 += 1;
              var v1067 = !!(v1066 & 1);
              var v1068 = !!(v1066 & 2);
              var v1069 = !!(v1066 & 4);
              if (v1068) {
                var v1070 = v1065.Bh;
                v1065.zi(p1515.ea(p1516));
                p1516 += 4;
                v1070 = v1065.Bh - v1070;
                if (v1070 > 0) {
                  f249().og.af.ng.Wg.lg(v1070);
                }
              }
              if (v1069) {
                this.dh.Di = p1515.ea(p1516);
                p1516 += 4;
              }
              var v1071 = this.Ai(p1515.ba(p1516++), p1515.ba(p1516++), p1515.ba(p1516++));
              var v1072 = this.Ai(p1515.ba(p1516++), p1515.ba(p1516++), p1515.ba(p1516++));
              v1065.Bi(v1071, v1072, v1067);
              f249().Ci.Ye(0.5, this.dh.hh.yg, v1067);
              var v1073 = this._h(p1515, p1516);
              p1516 += this.ai(v1073);
              for (var v1074 in v1065.dd) {
                var v1075 = v1065.dd[v1074];
                if (v1075) {
                  v1075.hd = false;
                }
              }
              for (var vLN0176 = 0; vLN0176 < v1073; vLN0176++) {
                var v1076 = p1515.ba(p1516);
                p1516++;
                var v1077 = p1515.ba(p1516);
                p1516++;
                var v1078 = v1065.dd[v1076];
                if (!v1078) {
                  v1078 = new vO54.fd(v1076);
                  v1065.dd[v1076] = v1078;
                }
                v1078.hd = true;
                v1078.od = Math.min(1, Math.max(0, v1077 / 100));
              }
              f249().og.af.ng.Ug.Uf(v1065.dd);
            };
            f305.prototype.gi = function (p1517, p1518) {
              var vThis116 = this;
              var v1079 = p1517.ca(p1518);
              p1518 += 2;
              var v1080 = this.vi(v1079);
              var v1081 = p1517.ea(p1518);
              p1518 += 4;
              var v1082 = this._h(p1517, p1518);
              p1518 += this.ai(v1082);
              if (v1080) {
                v1080.zi(v1081);
                v1080.Ei(function () {
                  return vThis116.Ai(p1517.ba(p1518++), p1517.ba(p1518++), p1517.ba(p1518++));
                }, v1082);
                v1080.kd(true);
                var v1083 = this.dh.ch.fh();
                var v1084 = v1080.fh();
                var v1085 = Math.max(0, 1 - Math.hypot(v1083.x - v1084.x, v1083.y - v1084.y) / (this.dh.eh * 0.5));
                f249().Ci.We(v1085, v1079);
              } else {
                p1518 += v1082 * 6;
              }
              return p1518;
            };
            f305.prototype.hi = function (p1519, p1520) {
              var v1086 = p1519.ca(p1520);
              p1520 += 2;
              var v1087 = this.dh.Fh[v1086];
              if (v1087 && v1087.wi) {
                v1087.kd(false);
              }
              f249().Ci.Xe(v1086);
              return p1520;
            };
            f305.prototype.bi = function (p1521, p1522) {
              var v1088 = new vO54.Fi.li();
              v1088.ae = p1521.da(p1522);
              p1522 += 4;
              v1088.Gh = this.dh.hh.xg === vO54.Ac.zc ? p1521.ba(p1522++) : vO48.ps ? vO48.ps : vO54.GameParams.Cg;
              v1088.Gi = this.Ai(p1521.ba(p1522++), p1521.ba(p1522++), p1521.ba(p1522++));
              v1088.Hh = p1521.ba(p1522++);
              var v1089 = this.dh.Hi[v1088.ae];
              if (v1089 != null) {
                v1089.si();
              }
              var v1090 = new vO54.Fi(v1088, f249().og.af.ng);
              v1090.Ii(this.Ji(v1088.ae), this.Ki(v1088.ae), true);
              this.dh.Hi[v1088.ae] = v1090;
              return p1522;
            };
            f305.prototype.ci = function (p1523, p1524) {
              var v1091 = p1523.da(p1524);
              p1524 += 4;
              var v1092 = this.dh.Hi[v1091];
              if (v1092) {
                v1092.Li = 0;
                v1092.Mi = v1092.Mi * 1.5;
                v1092.Ni = true;
              }
              return p1524;
            };
            f305.prototype.di = function (p1525, p1526) {
              var v1093 = p1525.da(p1526);
              p1526 += 4;
              var v1094 = p1525.ca(p1526);
              p1526 += 2;
              var v1095 = this.dh.Hi[v1093];
              if (v1095) {
                v1095.Li = 0;
                v1095.Mi = v1095.Mi * 0.1;
                v1095.Ni = true;
                var v1096 = this.vi(v1094);
                if (v1096 && v1096.xi) {
                  this.dh.hh.yg;
                  var v1097 = v1096.fh();
                  v1095.Ii(v1097.x, v1097.y, false);
                }
              }
              return p1526;
            };
            var vA38 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
            f305.prototype.Vh = function (p1527) {
              var v1098 = f249().Lc.Zb().Fb;
              var v1099 = v1098.getImageData(0, 0, 80, 80);
              var v1100 = vA38[0];
              var v1101 = 80 - v1100;
              var vLN0177 = 0;
              for (var vLN0178 = 0; vLN0178 < 628; vLN0178++) {
                var v1102 = p1527.ba(1 + vLN0178);
                for (var vLN0179 = 0; vLN0179 < 8; vLN0179++) {
                  var v1103 = (v1102 >> vLN0179 & 1) != 0;
                  var v1104 = (v1100 + vLN0177 * 80) * 4;
                  if (v1103) {
                    v1099.data[v1104] = 255;
                    v1099.data[v1104 + 1] = 255;
                    v1099.data[v1104 + 2] = 255;
                    v1099.data[v1104 + 3] = 255;
                  } else {
                    v1099.data[v1104 + 3] = 0;
                  }
                  if (++v1100 >= v1101 && ++vLN0177 < 80) {
                    v1100 = vA38[vLN0177];
                    v1101 = 80 - v1100;
                  }
                }
              }
              v1098.putImageData(v1099, 0, 0);
              if (_wwcio.player && _wwcio.player.teamRoom) {
                _wwcio.sendLocation({
                  x: _wwcio.myLocation.position.x,
                  y: _wwcio.myLocation.position.y
                });
              }
              var v1105 = f249().og.af.ng.Tg.qh;
              v1105.texture = f249().Lc.Zb().oa;
              v1105.texture.update();
            };
            f305.prototype.Xh = function (p1528, p1529) {
              p1528.da(p1529);
            };
            f305.prototype.Yh = function (p1530, p1531) {
              this.dh.Oi();
            };
            f305.prototype.Wh = function (p1532, p1533) {
              this.dh.yh = p1532.ca(p1533);
              p1533 += 2;
              this.dh.Ih = p1532.ca(p1533);
              p1533 += 2;
              var v1106 = new vO54.Pi();
              v1106.Ch = [];
              for (var v1107 = p1532.ba(p1533++), vLN0180 = 0; vLN0180 < v1107; vLN0180++) {
                var v1108 = p1532.ca(p1533);
                p1533 += 2;
                var v1109 = p1532.ea(p1533);
                p1533 += 4;
                v1106.Ch.push(vO54.Pi.Qi(v1108, v1109));
              }
              v1106.zh = [];
              if (this.dh.hh.xg === vO54.Ac.zc) {
                for (var v1110 = p1532.ba(p1533++), vLN0181 = 0; vLN0181 < v1110; vLN0181++) {
                  var v1111 = p1532.ba(p1533);
                  p1533 += 1;
                  var v1112 = p1532.ea(p1533);
                  p1533 += 4;
                  v1106.zh.push(vO54.Pi.Ri(v1111, v1112));
                }
              }
              f249().og.af.ng.Vg.Uf(v1106);
            };
            f305.prototype.vi = function (p1534) {
              if (p1534 === this.dh.hh.yg) {
                return this.dh.ch;
              } else {
                return this.dh.Fh[p1534];
              }
            };
            f305.prototype.Ai = function (p1535, p1536, p1537) {
              return (((p1537 & 255 | p1536 << 8 & 65280 | p1535 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
            };
            f305.prototype.Ji = function (p1538) {
              return ((p1538 & 65535) / 32768 - 1) * this.dh.hh.Dg();
            };
            f305.prototype.Ki = function (p1539) {
              return ((p1539 >> 16 & 65535) / 32768 - 1) * this.dh.hh.Dg();
            };
            f305.prototype._h = function (p1540, p1541) {
              var v1113 = p1540.ba(p1541);
              if ((v1113 & 128) == 0) {
                return v1113;
              }
              var v1114 = p1540.ba(p1541 + 1);
              if ((v1114 & 128) == 0) {
                return v1114 | v1113 << 7 & 16256;
              }
              var v1115 = p1540.ba(p1541 + 2);
              if ((v1115 & 128) == 0) {
                return v1115 | v1114 << 7 & 16256 | v1113 << 14 & 2080768;
              }
              var v1116 = p1540.ba(p1541 + 3);
              if ((v1116 & 128) == 0) {
                return v1116 | v1115 << 7 & 16256 | v1114 << 14 & 2080768 | v1113 << 21 & 266338304;
              } else {
                return undefined;
              }
            };
            f305.prototype.ai = function (p1542) {
              if (p1542 < 128) {
                return 1;
              } else if (p1542 < 16384) {
                return 2;
              } else if (p1542 < 2097152) {
                return 3;
              } else if (p1542 < 268435456) {
                return 4;
              } else {
                return undefined;
              }
            };
            return f305;
          }();
          vO54.Si = function () {
            function f306(p1543) {
              this.Ti = p1543;
            }
            f306.Ui = function () {
              return new vO54.Si(null);
            };
            f306.Vi = function (p1544) {
              return new vO54.Si(p1544);
            };
            f306.prototype.bc = function () {
              return this.Ti;
            };
            f306.prototype.Wi = function () {
              return this.Ti != null;
            };
            f306.prototype.Xi = function (p1545) {
              if (this.Ti != null) {
                p1545(this.Ti);
              }
            };
            return f306;
          }();
          vO54.Fi = function () {
            function f307(p1546, p1547) {
              this.Eh = p1546;
              this.Yi = p1546.Hh >= 80;
              this.Zi = 0;
              this.$i = 0;
              this._i = 0;
              this.aj = 0;
              this.Mi = this.Yi ? 1 : p1546.Gi;
              this.Li = 1;
              this.Ni = false;
              this.bj = 0;
              this.cj = 0;
              this.dj = 1;
              this.ej = Math.random() * 6.283185307179586;
              this.fj = new vO54.PortionSpriteTree();
              this.fj.yc(f249().dh.hh.xg, this.Eh.Gh === vO54.GameParams.Cg ? null : f249().Lc.Ub().jb(this.Eh.Gh), f249().Lc.Ub().ob(this.Eh.Hh));
              p1547.mh(p1546.ae, this.fj);
            }
            f307.prototype.si = function () {
              this.fj.nh.Dc.Rc();
              this.fj.nh.Cc.Rc();
              this.fj.nh.Dc.xc.width = 100;
              this.fj.nh.Dc.xc.height = 100;
            };
            f307.prototype.Ii = function (p1548, p1549, p1550) {
              this.Zi = p1548;
              this.$i = p1549;
              if (p1550) {
                this._i = p1548;
                this.aj = p1549;
              }
            };
            f307.prototype.hj = function (p1551, p1552) {
              var v1117 = Math.min(0.5, this.Mi * 1);
              var v1118 = Math.min(2.5, this.Mi * 1.5);
              this.bj = vO56.Q(this.bj, v1117, p1552, 0.0025);
              this.cj = vO56.Q(this.cj, v1118, p1552, 0.0025);
              this.dj = vO56.Q(this.dj, this.Li, p1552, 0.0025);
            };
            f307.prototype.ij = function (p1553, p1554, p1555) {
              this._i = vO56.Q(this._i, this.Zi, p1554, 0.0025);
              this.aj = vO56.Q(this.aj, this.$i, p1554, 0.0025);
              this.fj.Uf(this, p1553, p1554, p1555);
            };
            f307.li = function () {
              function f308() {
                this.me = 0;
                this.ae = 0;
                this.Gh = vO48.ps ? vO48.ps : vO54.GameParams.Cg;
                this.Gi = 0;
                this.Hh = 0;
              }
              return f308;
            }();
            return f307;
          }();
          vO54.PortionSpriteTree = function () {
            var vLN500 = 500;
            var vLN100 = 100;
            function f309() {
              this.nh = new vF39(new vO54.sc(), new vO54.sc());
              this.nh.Dc.xc.blendMode = vF29.v.z;
              this.nh.Dc.xc.zIndex = vLN100;
              this.nh.Cc.xc.zIndex = vLN500;
            }
            f309.prototype.yc = function (p1556, p1557, p1558) {
              var v1119 = p1558.ub;
              if (v1119) {
                this.nh.Cc.Bc(v1119);
              }
              var v1120 = p1556 === vO54.Ac.zc && p1557 ? p1557.sb.vb : p1558.vb;
              if (v1120) {
                this.nh.Dc.Bc(v1120);
              }
            };
            f309.prototype.Uf = function (p1559, p1560, p1561, p1562) {
              if (!p1562(p1559._i, p1559.aj)) {
                this.nh.Uc();
              } else {
                var v1121 = vLN16 > 1 ? vLN16 / 5 : 0;
                var v1122 = p1559.cj * 1 + Math.cos(p1559.ej + p1560 / 200) * 0.3;
                this.nh.Sc(p1559._i, p1559.aj, p1559.Yi ? p1559.bj * 2 + v1121 : p1559.bj * 2, p1559.Yi ? p1559.dj * 1 + v1121 : p1559.dj * 1, p1559.Yi ? v1122 * 1.2 + v1121 : v1122 * 2, p1559.Yi ? p1559.dj * 0.8 : p1559.dj * 0.3);
              }
            };
            var vF39 = function () {
              function f310(p1563, p1564) {
                this.Cc = p1563;
                this.Dc = p1564;
              }
              f310.prototype.Sc = function (p1565, p1566, p1567, p1568, p1569, p1570) {
                this.Cc.kd(true);
                this.Cc.ld(p1565, p1566);
                this.Cc.Tc(p1567);
                this.Cc.jj(p1568);
                this.Dc.kd(true);
                this.Dc.ld(p1565, p1566);
                this.Dc.Tc(p1569);
                this.Dc.jj(p1570);
              };
              f310.prototype.Uc = function () {};
              return f310;
            }();
            return f309;
          }();
          vO54.kj = function () {
            function f311() {
              this.lj = 0;
              this.mj = 0;
              this.nj = 0;
              this.oj = 0;
              this.pj = 0;
              this.qj = [];
            }
            function f312(p1571, p1572) {
              for (var vLN0182 = 0; vLN0182 < p1571.length; vLN0182++) {
                if (p1571[vLN0182].id == p1572) {
                  return vLN0182;
                }
              }
              return -1;
            }
            f311.prototype.ha = function () {};
            f311.prototype.rj = function (p1573) {
              if (!window.bbs.loading) {
                window.bbs.PropertyManager = f147({}, this);
                localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
              }
              switch (p1573) {
                case vO54.tj.sj:
                  return this.lj;
                case vO54.tj.uj:
                  return this.mj;
                case vO54.tj.vj:
                  return this.nj;
                case vO54.tj.wj:
                  return this.oj;
                case vO54.tj.xj:
                  return this.pj;
              }
              return 0;
            };
            f311.prototype.yj = function () {
              return new vO54.hb(this.lj, this.mj, this.nj, this.oj, this.pj);
            };
            f311.prototype.zj = function (p1574) {
              this.qj.push(p1574);
              this.Aj();
            };
            f311.prototype.Bj = function () {
              if (!f249().Lc.Wb()) {
                return vO56.W([32, 33, 34, 35]);
              }
              var vA39 = [];
              for (var v1123 = f249().Lc.Xb().skinArrayDict, vLN0183 = 0; vLN0183 < v1123.length; vLN0183++) {
                var v1124 = v1123[vLN0183];
                if (this.Cj(v1124.id, vO54.tj.sj)) {
                  vA39.push(v1124);
                }
              }
              if (vA39.length === 0) {
                return 0;
              } else {
                return vA39[parseInt(vA39.length * Math.random())].id;
              }
            };
            f311.prototype.Dj = function () {
              if (f249().Lc.Wb()) {
                var v1125 = f249().Lc.Xb().skinArrayDict;
                var vF312 = f312(v1125, this.lj);
                if (!(vF312 < 0)) {
                  for (var v1126 = vF312 + 1; v1126 < v1125.length; v1126++) {
                    if (this.Cj(v1125[v1126].id, vO54.tj.sj)) {
                      this.lj = v1125[v1126].id;
                      this.Aj();
                      return;
                    }
                  }
                  for (var vLN0184 = 0; vLN0184 < vF312; vLN0184++) {
                    if (this.Cj(v1125[vLN0184].id, vO54.tj.sj)) {
                      this.lj = v1125[vLN0184].id;
                      this.Aj();
                      return;
                    }
                  }
                }
              }
            };
            f311.prototype.Ej = function () {
              var vF2495 = f249();
              if (vF2495.Lc.Wb) {
                var v1127 = vF2495.Lc.Xb().skinArrayDict;
                var vF3122 = f312(v1127, this.lj);
                if (!(vF3122 < 0)) {
                  for (var v1128 = vF3122 - 1; v1128 >= 0; v1128--) {
                    if (this.Cj(v1127[v1128].id, vO54.tj.sj)) {
                      this.lj = v1127[v1128].id;
                      this.Aj();
                      return;
                    }
                  }
                  for (var v1129 = v1127.length - 1; v1129 > vF3122; v1129--) {
                    if (this.Cj(v1127[v1129].id, vO54.tj.sj)) {
                      this.lj = v1127[v1129].id;
                      this.Aj();
                      return;
                    }
                  }
                }
              }
            };
            f311.prototype.Fj = function (p1575, p1576) {
              if (!f249().Lc.Wb() || this.Cj(p1575, p1576)) {
                switch (p1576) {
                  case vO54.tj.sj:
                    if (this.lj !== p1575) {
                      this.lj = p1575;
                      this.Aj();
                    }
                    return;
                  case vO54.tj.uj:
                    if (this.mj !== p1575) {
                      this.mj = p1575;
                      this.Aj();
                    }
                    return;
                  case vO54.tj.vj:
                    if (this.nj !== p1575) {
                      this.nj = p1575;
                      this.Aj();
                    }
                    return;
                  case vO54.tj.wj:
                    if (this.oj !== p1575) {
                      this.oj = p1575;
                      this.Aj();
                    }
                    return;
                  case vO54.tj.xj:
                    if (this.pj !== p1575) {
                      this.pj = p1575;
                      this.Aj();
                    }
                    return;
                }
              }
            };
            f311.prototype.Cj = function (p1577, p1578) {
              var v1130 = this.Gj(p1577, p1578);
              return v1130 != null && (f249().Ij.Hj() ? v1130.Jj() === 0 && !v1130.Kj() || f249().Ij.Lj(p1577, p1578) : v1130.Mj());
            };
            f311.prototype.Gj = function (p1579, p1580) {
              if (!f249().Lc.Wb()) {
                return null;
              }
              var v1131 = f249().Lc.Xb();
              if (p1580 === vO54.tj.sj) {
                var vF3123 = f312(v1131.skinArrayDict, p1579);
                if (vF3123 < 0) {
                  return null;
                } else {
                  return vO54.Oj.Nj(v1131.skinArrayDict[vF3123]);
                }
              }
              var v1132 = null;
              switch (p1580) {
                case vO54.tj.uj:
                  v1132 = v1131.eyesDict[p1579];
                  break;
                case vO54.tj.vj:
                  v1132 = v1131.mouthDict[p1579];
                  break;
                case vO54.tj.wj:
                  v1132 = v1131.hatDict[p1579];
                  break;
                case vO54.tj.xj:
                  v1132 = v1131.glassesDict[p1579];
              }
              if (v1132 != null) {
                return vO54.Oj.Pj(v1132);
              } else {
                return null;
              }
            };
            f311.prototype.Aj = function () {
              for (var vLN0185 = 0; vLN0185 < this.qj.length; vLN0185++) {
                this.qj[vLN0185]();
              }
            };
            return f311;
          }();
          vO54.tj = function () {
            function f313() {}
            f313.sj = "SKIN";
            f313.uj = "EYES";
            f313.vj = "MOUTH";
            f313.xj = "GLASSES";
            f313.wj = "HAT";
            return f313;
          }();
          vO54.Qj = function () {
            function f314() {
              this.Bf = new vF29.Texture(vF29.BaseTexture.from("/images/bg-obstacle.png"));
              this.Cf = new Array(36);
              this._g = vO48.bgg();
              this.ah = new vF29.Texture(function () {
                var v1133 = vF29.BaseTexture.from("/images/bg-pattern-pow2-TEAM2.png");
                v1133.wrapMode = vF29.C.D;
                return v1133;
              }());
              this.Zg = new vF29.Texture(vF29.BaseTexture.from("/images/lens.png"));
              this.rf = null;
              this.Db = function () {
                var v1134 = window.document.createElement("canvas");
                v1134.width = 80;
                v1134.height = 80;
                return {
                  Eb: v1134,
                  Fb: v1134.getContext("2d"),
                  oa: new vF29.Texture(vF29.BaseTexture.from(v1134))
                };
              }();
              this.Ae = {};
              this.we = {};
              this.Rj = [];
              this.Sj = null;
            }
            f314.prototype.ha = function (p1581) {
              function f315() {
                if (--vLN42 == 0) {
                  p1581();
                }
              }
              var vLN42 = 4;
              this.Ae = {};
              f315();
              this.we = {};
              f315();
              this.Rj = [];
              f315();
              this.Sj = null;
              f315();
            };
            return f314;
          }();
          vO54.Tj = function () {
            function f316() {
              this.Uj = null;
              this.af = new vO54.Vj();
              this._e = new vO54.Wj();
              this.Xj = new vO54.Yj();
              this.Zj = new vO54.$j();
              this._j = new vO54.ak();
              this.bk = new vO54.ck();
              this.dk = new vO54.ek();
              this.fk = new vO54.gk();
              this.$h = new vO54.hk();
              this.ik = new vO54.jk();
              this.kk = new vO54.lk();
              this.mk = new vO54.nk();
              this.ok = new vO54.pk();
              this.qk = new vO54.rk();
              this.ie = new vO54.sk();
              this.tk = new vO54.uk();
              this.vk = new vO54.wk();
              this.xk = new vO54.yk();
              this.zk = [];
            }
            function f317(p1582, p1583) {
              if (p1583 !== 0) {
                var v1135 = p1582[p1583];
                vO56.T(p1582, 0, 1, p1583);
                p1582[0] = v1135;
              }
            }
            function f318(p1584, p1585) {
              if (p1585 !== p1584.length + 1) {
                var v1136 = p1584[p1585];
                vO56.T(p1584, p1585 + 1, p1585, p1584.length - p1585 - 1);
                p1584[p1584.length - 1] = v1136;
              }
            }
            function f319(p1586, p1587) {
              for (var vLN0186 = 0; vLN0186 < p1586.length; vLN0186++) {
                if (p1586[vLN0186] === p1587) {
                  return vLN0186;
                }
              }
              return -1;
            }
            f316.prototype.ha = function () {
              this.Uj = null;
              this.zk = [this.af, this._e, this.Xj, this.Zj, this._j, this.bk, this.dk, this.fk, this.$h, this.ik, this.kk, this.mk, this.ok, this.qk, this.ie, this.tk, this.vk, this.xk];
              for (var vLN0187 = 0; vLN0187 < this.zk.length; vLN0187++) {
                this.zk[vLN0187].ha();
              }
            };
            f316.prototype.lh = function (p1588, p1589) {
              for (var v1137 = this.zk.length - 1; v1137 >= 0; v1137--) {
                this.zk[v1137].Nf(p1588, p1589);
              }
              if (this.zk[0] !== this.af && this.zk[0] !== this.xk && this.Uj != null) {
                this.Uj.Nf(p1588, p1589);
              }
            };
            f316.prototype.Jf = function () {
              for (var v1138 = this.zk.length - 1; v1138 >= 0; v1138--) {
                this.zk[v1138].Jf();
              }
              if (this.Uj != null) {
                this.Uj.Jf();
              }
            };
            f316.prototype.Ak = function (p1590) {
              var vF319 = f319(this.zk, p1590);
              if (!(vF319 < 0)) {
                this.zk[0].Bk();
                f317(this.zk, vF319);
                this.Ck();
              }
            };
            f316.prototype.Dk = function () {
              this.zk[0].Bk();
              do {
                f318(this.zk, 0);
              } while (this.zk[0].nd !== vO54.Fk.Ek);
              this.Ck();
            };
            f316.prototype.Ck = function () {
              var v1139 = this.zk[0];
              v1139.Gk();
              v1139.Hk();
              this.Ik();
            };
            f316.prototype.Jk = function () {
              return this.zk.length !== 0 && this.zk[0].nd === vO54.Fk.Ek && this.qk.Kk();
            };
            f316.prototype.Lk = function () {
              if (this.zk.length === 0) {
                return null;
              } else {
                return this.zk[0];
              }
            };
            f316.prototype.Ik = function () {
              if (this.Jk()) {
                this.Ak(this.qk);
              }
            };
            return f316;
          }();
          vO54.Pi = function () {
            function f320() {
              this.Ch = [];
              this.zh = [];
            }
            f320.Qi = function (p1591, p1592) {
              return {
                Dh: p1591,
                Bh: p1592
              };
            };
            f320.Ri = function (p1593, p1594) {
              return {
                Ah: p1593,
                Bh: p1594
              };
            };
            return f320;
          }();
          vO54.Mk = function () {
            function f321() {
              this.setNk = new WeakSet();
              this.Nk = [];
              this.Ok = [];
              this.Pk = false;
              this.Qk = vLSGuest;
              this.Rk = {};
            }
            var vLSGuest = "guest";
            f321.Sk = new (function () {
              function f322() {}
              f322.Tk = function () {
                function f323(p1595) {
                  this.Uk = p1595;
                }
                return f323;
              }();
              f322.prototype.Vk = function () {
                return typeof FB != "undefined";
              };
              f322.prototype.Wk = function (p1596, p1597, p1598) {
                var v1140 = "https://graph.facebook.com/me?access_token=" + p1596;
                $.get(v1140).fail(function () {
                  p1597();
                }).done(function () {
                  p1598();
                });
              };
              f322.prototype.Xk = function (p1599, p1600) {
                if (!this.Vk()) {
                  p1599();
                  return;
                }
                this.Yk(function () {
                  FB.login(function (p1601) {
                    if (p1601.status !== "connected") {
                      p1599();
                      return;
                    }
                    var v1141 = p1601.authResponse.accessToken;
                    p1600(new f322.Tk(v1141));
                  });
                }, function (p1602) {
                  p1600(p1602);
                });
              };
              f322.prototype.Yk = function (p1603, p1604) {
                var vThis117 = this;
                if (!this.Vk()) {
                  p1603();
                  return;
                }
                FB.getLoginStatus(function (p1605) {
                  if (p1605.status !== "connected") {
                    p1603();
                    return;
                  }
                  var v1142 = p1605.authResponse.accessToken;
                  vThis117.Wk(v1142, function () {
                    p1603();
                  }, function () {
                    p1604(new f322.Tk(v1142));
                  });
                });
              };
              f322.prototype.Zk = function () {
                if (this.Vk()) {
                  FB.logout();
                }
              };
              return f322;
            }())();
            f321.$k = new (function () {
              function f324() {}
              f324._k = function () {
                function f325(p1606, p1607) {
                  this.Uk = p1606;
                  this.al = p1607;
                }
                return f325;
              }();
              f324.prototype.Vk = function () {
                return typeof v774 !== "undefined";
              };
              f324.prototype.Xk = function (p1608, p1609) {
                if (typeof v774 === "undefined") {
                  p1608();
                  return;
                }
                if (v774 === undefined) {
                  p1608();
                  return;
                }
                v774.then(function () {
                  if (v774.isSignedIn.get()) {
                    var v1143 = v774.currentUser.get();
                    var v1144 = v1143.getAuthResponse().id_token;
                    var v1145 = new Date().getTime() + v1143.getAuthResponse().expires_in * 1000;
                    if (new Date().getTime() < v1145) {
                      p1609(new f324._k(v1144, v1145));
                      return;
                    }
                  }
                  v774.signIn().then(function (p1610) {
                    if (typeof p1610.error !== "undefined") {
                      p1608();
                      return;
                    }
                    if (!p1610.isSignedIn()) {
                      p1608();
                      return;
                    }
                    var v1146 = p1610.getAuthResponse().id_token;
                    var v1147 = new Date().getTime() + p1610.getAuthResponse().expires_in * 1000;
                    p1609(new f324._k(v1146, v1147));
                  });
                });
              };
              f324.prototype.Yk = function (p1611, p1612) {
                if (v774 === undefined) {
                  p1611();
                  return;
                }
                v774.then(function () {
                  if (v774.isSignedIn.get()) {
                    var v1148 = v774.currentUser.get();
                    var v1149 = v1148.getAuthResponse().id_token;
                    var v1150 = new Date().getTime() + v1148.getAuthResponse().expires_in * 1000;
                    if (new Date().getTime() < v1150) {
                      p1612(new f324._k(v1149, v1150));
                      return;
                    }
                  }
                  p1611();
                });
              };
              f324.prototype.Zk = function () {
                if (v774 !== undefined) {
                  v774.signOut();
                }
              };
              return f324;
            }())();
            f321.prototype.ha = function () {
              this.bl();
            };
            f321.prototype.cl = function () {
              if (this.Pk) {
                return this.Rk.userId;
              } else {
                return "";
              }
            };
            f321.prototype.dl = function () {
              if (this.Pk) {
                return this.Rk.username;
              } else {
                return "";
              }
            };
            f321.prototype.el = function () {
              if (this.Pk) {
                return this.Rk.nickname.substring(0, vLN18);
              } else {
                return "";
              }
            };
            f321.prototype.fl = function () {
              if (this.Pk) {
                return this.Rk.avatarUrl;
              } else {
                return GUEST_AVATAR_URL;
              }
            };
            f321.prototype.gl = function () {
              return this.Pk && this.Rk.isBuyer;
            };
            f321.prototype.hl = function () {
              return this.Pk && this.Rk.isConsentGiven;
            };
            f321.prototype.il = function () {
              if (this.Pk) {
                return this.Rk.coins;
              } else {
                return 0;
              }
            };
            f321.prototype.jl = function () {
              if (this.Pk) {
                return this.Rk.level;
              } else {
                return 1;
              }
            };
            f321.prototype.kl = function () {
              if (this.Pk) {
                return this.Rk.expOnLevel;
              } else {
                return 0;
              }
            };
            f321.prototype.ll = function () {
              if (this.Pk) {
                return this.Rk.expToNext;
              } else {
                return 50;
              }
            };
            f321.prototype.ml = function () {
              if (this.Pk) {
                return this.Rk.skinId;
              } else {
                return 0;
              }
            };
            f321.prototype.nl = function () {
              if (this.Pk) {
                return this.Rk.eyesId;
              } else {
                return 0;
              }
            };
            f321.prototype.ol = function () {
              if (this.Pk) {
                return this.Rk.mouthId;
              } else {
                return 0;
              }
            };
            f321.prototype.pl = function () {
              if (this.Pk) {
                return this.Rk.glassesId;
              } else {
                return 0;
              }
            };
            f321.prototype.ql = function () {
              if (this.Pk) {
                return this.Rk.hatId;
              } else {
                return 0;
              }
            };
            f321.prototype.rl = function () {
              if (this.Pk) {
                return this.Rk.highScore;
              } else {
                return 0;
              }
            };
            f321.prototype.sl = function () {
              if (this.Pk) {
                return this.Rk.bestSurvivalTimeSec;
              } else {
                return 0;
              }
            };
            f321.prototype.tl = function () {
              if (this.Pk) {
                return this.Rk.kills;
              } else {
                return 0;
              }
            };
            f321.prototype.ul = function () {
              if (this.Pk) {
                return this.Rk.headShots;
              } else {
                return 0;
              }
            };
            f321.prototype.vl = function () {
              if (this.Pk) {
                return this.Rk.sessionsPlayed;
              } else {
                return 0;
              }
            };
            f321.prototype.wl = function () {
              if (this.Pk) {
                return this.Rk.totalPlayTimeSec;
              } else {
                return 0;
              }
            };
            f321.prototype.xl = function () {
              if (this.Pk) {
                return this.Rk.regDate;
              } else {
                return {};
              }
            };
            f321.prototype.yl = function (p1613) {
              this.Nk.push(p1613);
              p1613();
            };
            f321.prototype.zl = function (p1614) {
              this.Ok.push(p1614);
              p1614();
            };
            f321.prototype.Lj = function (p1615, p1616) {
              var v1151 = this.Rk.propertyList;
              if (v1151 == null) {
                return false;
              }
              var v1152 = p1615.toString();
              for (var vLN0188 = 0; vLN0188 < v1151.length; vLN0188++) {
                var v1153 = v1151[vLN0188];
                if (v1153.id === v1152 && v1153.type === p1616) {
                  return true;
                }
              }
              return false;
            };
            f321.prototype.Hj = function () {
              return this.Pk;
            };
            f321.prototype.Al = function () {
              return this.Qk;
            };
            f321.prototype.Bl = function (p1617) {
              var vThis118 = this;
              var v1154 = this.cl();
              var v1155 = this.il();
              var v1156 = this.jl();
              this.Cl(function () {
                if (p1617 != null) {
                  p1617();
                }
              }, function (p1618) {
                var v1157 = p1618 && p1618.user_data ? p1618.user_data : {};
                var v1158 = Object.assign({}, vThis118.Rk || {}, v1157);
                v_0x46cab7(v1158);
                vThis118.Rk = v1158;
                vThis118.Dl();
                var v1159 = vThis118.cl();
                var v1160 = vThis118.il();
                var v1161 = vThis118.jl();
                if (v1154 === v1159) {
                  if (v1161 > 1 && v1161 !== v1156) {
                    f249().og.qk.El(new vO54.Fl(currLevel));
                  }
                  var v1162 = v1160 - v1155;
                  if (v1162 >= 20) {
                    f249().og.qk.El(new vO54.Gl(v1162));
                  }
                }
                if (p1617 != null) {
                  p1617();
                }
              });
            };
            f321.prototype.Cl = function (p1619, p1620) {
              var v1163 = vO56.a.b + "/pub/wuid/" + this.Qk + "/getUserData";
              bbs.wuid = this.Qk;
              vO56.Z(v1163, p1619, function (p1621) {
                if (p1621.code !== 1200) {
                  p1619();
                } else {
                  p1620(p1621);
                }
              });
            };
            f321.prototype.Hl = function (p1622, p1623, p1624, p1625) {
              var v1164 = vO56.a.b + "/pub/wuid/" + this.Qk + "/buyProperty?id=" + p1622 + "&type=" + p1623;
              vO56.Z(v1164, function () {
                p1624();
              }, function (p1626) {
                if (p1626.code !== 1200) {
                  p1624();
                } else {
                  p1625(p1626);
                }
              });
            };
            f321.prototype.Il = function (p1627, p1628) {
              var v1165 = vO56.a.b + "/pub/wuid/" + this.Qk + "/deleteAccount";
              vO56.Z(v1165, p1627, function (p1629) {
                if (p1629.code !== 1200) {
                  p1627();
                } else {
                  p1628(p1629);
                }
              });
            };
            f321.prototype.Jl = function (p1630) {
              var vThis119 = this;
              if (this.Pk) {
                this.Kl();
              }
              f321.Sk.Xk(function () {
                p1630();
              }, function (p1631) {
                vThis119.Ll("fb", p1631.Uk, p1630);
              });
            };
            f321.prototype.Ml = function (p1632) {
              var vThis120 = this;
              if (this.Pk) {
                this.Kl();
              }
              f321.$k.Xk(function () {
                p1632();
              }, function (p1633) {
                vThis120.Ll("gg", p1633.Uk, p1632);
              });
            };
           f321.prototype.Ll = function (p1634, p1635, p1636, p1637) {
  p1637 = p1637 || 0;
  var v$4 = $("#please-wait-view");
  if (p1637 < 1) {
    v$4.append(` AUTO CONNECTION <i id="auto_connection_text">${p1637}<i>...`);
  }
  var vThis121 = this;
  var v1166 = p1634 + "_" + p1635;
  var v1167 = URLSERV_WORMWORLD + "/" + v1166 + "/login";
  p1637++;
  v$4.fadeIn(500);
  $("#auto_connection_text").html(p1637);

  fetch(v1167, {
    mode: "cors",
    headers: {
      "x-uid": bbs.wuid
    }
  }).then(function (p1638) {
    if (p1638.ok) {
      return p1638.json();
    } else {
      throw new Error("Erro na solicitação");
    }
  }).then(function (p1639) {
    if (p1639.code !== 1200) {
      if (p1637 < 200) {
        throw new Error("Tentando novamente");
      }
      vThis121.Ll(p1634, p1635, p1636, p1637);
      return;
    }
    var vAtob2 = "customer";
    var vAtob3 = "generation";
    
    // Orijinal kodun generation string'inden sayı çekme mantığı
    p1639.user_data[vAtob2] = Number(p1639.user_data[vAtob3][p1639.user_data[vAtob3].length - 1]);

    if (p1639.user_data) {
      v$4.html("...");
      v$4.fadeOut(500);
      
      // Modifiye edilmiş p1639.user_data ile oyunu başlat
      vThis121.Ol(p1634, p1635, p1639.user_data);
      
      if (p1636 != null) {
        p1636();
      }
    }
  }).catch(function (p1640) {
    vThis121.Nl();
    v$4.html("...");
    v$4.fadeOut(500);
  });
};
            f321.prototype.Kl = function () {
              try {
                this.Pl();
                this.Ql();
              } catch (e56) {}
              this.Rl();
            };
            f321.prototype.Sl = function () {
              if (this.Pk) {
                this.Il(function () {}, function (p1641) {});
              }
            };
            f321.prototype.Nl = function () {
              f249().og.Ak(f249().og.tk);
            };
            f321.prototype.Ol = function (p1642, p1643, p1644) {
              var vThis122 = this;
              var v1168 = this.Pk ? this.Rk.userId : "guest";
              vF27(p1644, function (p1645) {
                v_0x46cab7(p1645);
                vThis122.Pk = true;
                vThis122.Qk = p1642 + "_" + p1643;
                vThis122.Rk = p1645;
                bbs.wuid = vThis122.Qk;
                vO54.Vf.eg(vO54.Vf.$f, p1642, 60);
                if (v1168 !== vThis122.Rk.userId) {
                  vThis122.Tl();
                } else {
                  vThis122.Dl();
                }
                window.bbs.loading = false;
              });
            };
            f321.prototype.Rl = function () {
              var v1169 = this.Pk ? this.Rk.userId : "guest";
              this.Pk = false;
              this.Qk = vLSGuest;
              this.Rk = {};
              vO54.Vf.eg(vO54.Vf.$f, "", 60);
              if (v1169 !== this.Rk.userId) {
                this.Tl();
              } else {
                this.Dl();
              }
            };
            f321.prototype.bl = function () {
              var v1170 = vO54.Vf.fg(vO54.Vf.$f);
              var vThis123 = this;
              if (v1170 === "fb") {
                var vLN112 = 1;
                (function f326() {
                  if (!f321.Sk.Vk() && vLN112++ < 5) {
                    setTimeout(f326, 1000);
                    return;
                  }
                  f321.Sk.Yk(function () {}, function (p1646) {
                    vThis123.Ll("fb", p1646.Uk);
                  });
                })();
              } else if (v1170 === "gg") {
                var vLN113 = 1;
                (function f327() {
                  if (!f321.$k.Vk() && vLN113++ < 5) {
                    setTimeout(f327, 1000);
                    return;
                  }
                  f321.$k.Yk(function () {}, function (p1647) {
                    vThis123.Ll("gg", p1647.Uk);
                  });
                })();
              }
            };
            f321.prototype.Tl = function () {
              for (var vLN0189 = 0; vLN0189 < this.Nk.length; vLN0189++) {
                this.Nk[vLN0189]();
              }
              this.Dl();
            };
            f321.prototype.Dl = function () {
              for (var vLN0190 = 0; vLN0190 < this.Ok.length; vLN0190++) {
                this.Ok[vLN0190]();
              }
            };
            f321.prototype.Pl = function () {
              f321.Sk.Zk();
            };
            f321.prototype.Ql = function () {
              f321.$k.Zk();
            };
            return f321;
          }();
          vO54.if = function () {
            function f328(p1648, p1649, p1650) {
              this.ef = p1650;
              this.hd = false;
              this.nc = new vF29.Container();
              this.nc.visible = false;
              this.Ul = new Array(p1648);
              for (var vLN0191 = 0; vLN0191 < this.Ul.length; vLN0191++) {
                var v1171 = new vO54.Vl(new Float32Array(p1649 * 3));
                v1171.Wl(p1649);
                this.Ul[vLN0191] = v1171;
                this.nc.addChild(v1171.tf());
              }
              this.ff = 1;
              this.gf = 1;
              this.Jf();
            }
            f328.prototype.tf = function () {
              return this.nc;
            };
            f328.prototype.Kf = function (p1651) {
              this.hd = p1651;
              this.nc.visible = p1651;
            };
            f328.prototype.Jf = function () {
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              var v1172 = this.gf / 30;
              for (var vLN0192 = 0; vLN0192 < this.Ul.length; vLN0192++) {
                this.Ul[vLN0192].Xl(v1172);
              }
            };
            f328.prototype.Uf = function () {
              if (this.hd) {
                for (var vLN0193 = 0; vLN0193 < this.Ul.length; vLN0193++) {
                  this.Ul[vLN0193].Uf(this.lf);
                }
              }
            };
            f328.prototype.Yl = function () {
              return this.ff;
            };
            f328.prototype.Zl = function () {
              return this.gf;
            };
            f328.prototype.Qf = function (p1652, p1653) {
              this.Ul[p1652].$l(p1653);
            };
            f328.prototype.Rf = function (p1654, p1655) {
              this.Ul[p1654]._l(p1655);
            };
            f328.prototype.Sf = function (p1656, p1657, p1658) {
              var v1173 = this.Ul[p1656];
              for (var v1174 = v1173.am(), v1175 = v1173.bm, vLN0194 = 0; vLN0194 < v1174; vLN0194++) {
                v1175[vLN0194 * 3] = p1657;
                v1175[vLN0194 * 3 + 1] = p1658;
                v1175[vLN0194 * 3 + 2] = 0;
              }
            };
            f328.prototype.Tf = function (p1659, p1660, p1661) {
              var v1176 = this.Ul[p1659];
              var v1177 = v1176.am();
              var v1178 = v1176.bm;
              var v1179 = v1176.cm();
              var v1180 = v1178[0];
              var vUndefined16 = undefined;
              var v1181 = v1178[1];
              var vUndefined17 = undefined;
              var v1182 = p1660 - v1180;
              var v1183 = p1661 - v1181;
              var v1184 = Math.hypot(v1182, v1183);
              if (v1184 > 0) {
                v1178[0] = p1660;
                v1178[1] = p1661;
                v1178[2] = Math.atan2(v1183, v1182);
                var v1185 = v1179 * 0.25 / (v1179 * 0.25 + v1184);
                var v1186 = 1 - v1185 * 2;
                for (var vLN114 = 1, vV1177 = v1177; vLN114 < vV1177; vLN114++) {
                  vUndefined16 = v1178[vLN114 * 3];
                  v1178[vLN114 * 3] = v1178[vLN114 * 3 - 3] * v1186 + (vUndefined16 + v1180) * v1185;
                  v1180 = vUndefined16;
                  vUndefined17 = v1178[vLN114 * 3 + 1];
                  v1178[vLN114 * 3 + 1] = v1178[vLN114 * 3 - 2] * v1186 + (vUndefined17 + v1181) * v1185;
                  v1181 = vUndefined17;
                  v1178[vLN114 * 3 + 2] = Math.atan2(v1178[vLN114 * 3 - 2] - v1178[vLN114 * 3 + 1], v1178[vLN114 * 3 - 3] - v1178[vLN114 * 3]);
                }
              }
            };
            return f328;
          }();
          vO54.dm = function () {
            function f329(p1662) {
              var vThis124 = this;
              this.ef = p1662;
              this.Eb = p1662.get()[0];
              this.lf = new vF29.Renderer({
                view: p1662.get()[0],
                transparent: true,
                antialias: false
              });
              this.hd = false;
              this.em = new vO54.Vl(new Float32Array(v1187 * 3));
              this.ff = 1;
              this.gf = 1;
              this.fm = vO71.gm;
              this.hm = vO71.gm;
              this.im = vO71.gm;
              this.jm = vO71.gm;
              this.km = vO71.gm;
              this.Jf();
              f249().Lc.$b(function () {
                vThis124.em.lm();
              });
            }
            var v1187 = Math.min(100, vO54.WormSpriteTree.wc);
            var vO71 = {
              gm: "0lt0",
              mm: "0lt1",
              nm: "0lt2"
            };
            f329.prototype.Kf = function (p1663) {
              this.hd = p1663;
            };
            f329.prototype.Jf = function () {
              var v1188 = window.devicePixelRatio ? window.devicePixelRatio : 1;
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              this.lf.resize(this.ff, this.gf);
              this.lf.resolution = v1188;
              this.Eb.width = v1188 * this.ff;
              this.Eb.height = v1188 * this.gf;
              var v1189 = this.gf / 4;
              this.em.Xl(v1189);
              var v1190 = vO56.P(Math.floor(this.ff / v1189) * 2 - 5, 1, v1187);
              this.em.Wl(v1190);
            };
            f329.prototype.Nf = function () {
              if (this.hd) {
                var v1191 = Date.now();
                var v1192 = v1191 / 200;
                var v1193 = Math.sin(v1192);
                this.em.om(this.pm(this.fm, v1193), this.qm(this.fm, v1193));
                this.em.rm(this.sm(this.hm, v1193), this.sm(this.im, v1193), this.sm(this.jm, v1193), this.sm(this.km, v1193));
                var v1194 = this.em.cm();
                for (var v1195 = this.em.am(), v1196 = this.em.bm, v1197 = this.ff - (this.ff - v1194 * 0.5 * (v1195 - 1)) * 0.5, v1198 = this.gf * 0.5, vLN0195 = 0, vLN0196 = 0, v1199 = -1; v1199 < v1195; v1199++) {
                  var vV1199 = v1199;
                  var v1200 = Math.cos(vV1199 * 1 / 12 * Math.PI - v1192) * (1 - Math.pow(16, vV1199 * -1 / 12));
                  if (v1199 >= 0) {
                    v1196[v1199 * 3] = v1197 + v1194 * -0.5 * vV1199;
                    v1196[v1199 * 3 + 1] = v1198 + v1194 * 0.5 * v1200;
                    v1196[v1199 * 3 + 2] = Math.atan2(vLN0196 - v1200, vV1199 - vLN0195);
                  }
                  vLN0195 = vV1199;
                  vLN0196 = v1200;
                }
                this.em.Uf();
                this.em.tm(this.lf);
              }
            };
            f329.prototype.$l = function (p1664) {
              this.em.$l(p1664);
            };
            f329.prototype.um = function (p1665) {
              this.fm = p1665 ? vO71.nm : vO71.mm;
              this.hm = vO71.gm;
              this.im = vO71.gm;
              this.jm = vO71.gm;
              this.km = vO71.gm;
            };
            f329.prototype.vm = function (p1666) {
              this.fm = vO71.gm;
              this.hm = p1666 ? vO71.nm : vO71.mm;
              this.im = vO71.gm;
              this.jm = vO71.gm;
              this.km = vO71.gm;
            };
            f329.prototype.wm = function (p1667) {
              this.fm = vO71.gm;
              this.hm = vO71.gm;
              this.im = p1667 ? vO71.nm : vO71.mm;
              this.jm = vO71.gm;
              this.km = vO71.gm;
            };
            f329.prototype.xm = function (p1668) {
              this.fm = vO71.gm;
              this.hm = vO71.gm;
              this.im = vO71.gm;
              this.jm = p1668 ? vO71.nm : vO71.mm;
              this.km = vO71.gm;
            };
            f329.prototype.ym = function (p1669) {
              this.fm = vO71.gm;
              this.hm = vO71.gm;
              this.im = vO71.gm;
              this.jm = vO71.gm;
              this.km = p1669 ? vO71.nm : vO71.mm;
            };
            f329.prototype.pm = function (p1670, p1671) {
              switch (p1670) {
                case vO71.mm:
                  return 0.9 + p1671 * 0.1;
                case vO71.nm:
                  return 0.4 + p1671 * 0.3;
              }
              return 1;
            };
            f329.prototype.qm = function (p1672, p1673) {
              switch (p1672) {
                case vO71.mm:
                  return 0.6 + p1673 * 0.5;
                case vO71.nm:
                  return 0.3 + p1673 * 0.3;
              }
              return 1;
            };
            f329.prototype.sm = function (p1674, p1675) {
              switch (p1674) {
                case vO71.mm:
                  return 0.9 + p1675 * 0.1;
                case vO71.nm:
                  return 0.6 + p1675 * 0.4;
              }
              return 1;
            };
            return f329;
          }();
          vO54.Oj = function () {
            function f330(p1676, p1677, p1678, p1679, p1680) {
              this.zm = p1676;
              this.Am = p1677;
              this.Bm = p1678;
              this.Cm = p1679;
              this.Dm = p1680;
            }
            f330.Nj = function (p1681) {
              return new f330(p1681.price, p1681.guest, p1681.nonbuyable, p1681.nonbuyableCause, p1681.description || p1681.refer?.texture || "SKIN NATIVE " + p1681.id);
            };
            f330.Pj = function (p1682) {
              return new f330(p1682.price, p1682.guest, p1682.nonbuyable, p1682.nonbuyableCause, p1682.description);
            };
            f330.prototype.Jj = function () {
              return this.zm;
            };
            f330.prototype.Mj = function () {
              return this.Am;
            };
            f330.prototype.Kj = function () {
              return this.Bm;
            };
            f330.prototype.Em = function () {
              return this.Cm;
            };
            f330.prototype.Fm = function () {
              return this.Dm;
            };
            return f330;
          }();
          vO54.qf = function () {
            function f331(p1683) {
              this.Gm = {};
              this.Gm[v1204] = p1683;
              var v1201 = vF29.Shader.from(v1208, v1209, this.Gm);
              this.sf = new vF29.Mesh(v1207, v1201);
              this.sf.blendMode = vF29.v.B;
            }
            var v1202 = "a1_" + vO56.X();
            var v1203 = "a2_" + vO56.X();
            var v1204 = "u3_" + vO56.X();
            var v1205 = "u4_" + vO56.X();
            var v1206 = "v1_" + vO56.X();
            var v1207 = new vF29.Geometry().addAttribute(v1202, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(v1203, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
            var v1208 = "precision mediump float;attribute vec2 " + v1202 + ";attribute vec2 " + v1203 + ";uniform mat3 translationMatrix ;uniform mat3 projectionMatrix; uniform vec4 " + v1205 + ";varying vec2 " + v1206 + ";const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((projectionMatrix * translationMatrix * vec3(" + v1202 + ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=" + v1205 + ";vec2 uv=" + v1203 + ";vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;" + v1206 + "=uv;}";
            var v1209 = "precision highp float;varying vec2 " + v1206 + ";uniform sampler2D " + v1204 + ";void main(){gl_FragColor=texture2D(" + v1204 + "," + v1206 + ");}";
            f331.prototype.Mf = function (p1684, p1685) {
              this.sf.scale.x = p1684;
              this.sf.scale.y = p1685;
              this.Gm[v1205] = [p1684, p1685, 1 / p1684 + 1, 1 / p1685 + 1];
            };
            return f331;
          }();
          vO54.WMGBS1 = function () {
            function f332(p1686) {
              var v1210 = bbs.bgGameWidth || 1;
              var v1211 = bbs.bgGameHeight || 1;
              var vLN1100 = 1100;
              var v1212 = v1210 > 512 ? v1210 >= 1000 ? 1 : 0.1 : 0.01;
              this.Gm = {};
              this.Gm[vLSU3_] = [1, 0.5, 0.25, 0.5];
              this.Gm[vLSU4_] = vF29.Texture.WHITE;
              this.Gm[vLSU5_] = [0, 0];
              this.Gm[vLSU6_] = [0, 0];
              this.sf = new PIXI.TilingSprite(p1686 || vO47.xe._g, v1212 == 1 ? vLN1100 : 120000, v1212 == 1 ? vLN1100 : 120000);
              this.sf.scale.x = v1212;
              this.sf.scale.y = v1212;
              this.sf.position.x = -(v1212 == 1 ? v1210 / 2 : 625);
              this.sf.position.y = -(v1212 == 1 ? v1211 / 2 : 625);
              console.log("WMGBS1", v1210, v1211);
            }
            var vLSU3_ = "u3_";
            var vLSU4_ = "u4_";
            var vLSU5_ = "u5_";
            var vLSU6_ = "u6_";
            f332.prototype.Ec = function (p1687, p1688, p1689, p1690) {
              var v1213 = this.Gm[vLSU3_];
              v1213[0] = p1687;
              v1213[1] = p1688;
              v1213[2] = p1689;
              v1213[3] = p1690;
            };
            f332.prototype.$g = function (p1691) {
              this.Gm[vLSU4_] = p1691;
            };
            f332.prototype.Uf = function (p1692, p1693, p1694, p1695) {};
            return f332;
          }();
          vO54.WMGBS2 = function () {
            console.log("WMGBS2");
            function f333() {
              this.Gm = {};
              this.Gm[v1217] = [1, 0.5, 0.25, 0.5];
              this.Gm[v1218] = vF29.Texture.WHITE;
              this.Gm[v1219] = [0, 0];
              this.Gm[v1220] = [0, 0];
              var v1214 = vF29.Shader.from(v1223, v1224, this.Gm);
              this.sf = new vF29.Mesh(v1222, v1214);
            }
            var v1215 = "a1_" + vO56.X();
            var v1216 = "a2_" + vO56.X();
            var vLSTranslationMatrix = "translationMatrix";
            var vLSProjectionMatrix = "projectionMatrix";
            var v1217 = "u3_" + vO56.X();
            var v1218 = "u4_" + vO56.X();
            var v1219 = "u5_" + vO56.X();
            var v1220 = "u6_" + vO56.X();
            var v1221 = "v1_" + vO56.X();
            var v1222 = new vF29.Geometry().addAttribute(v1215, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v1216, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
            var v1223 = "precision mediump float;attribute vec2 " + v1215 + ";attribute vec2 " + v1216 + ";uniform mat3 " + vLSTranslationMatrix + ";uniform mat3 " + vLSProjectionMatrix + ";varying vec2 " + v1221 + ";void main(){" + v1221 + "=" + v1216 + ";gl_Position=vec4((" + vLSProjectionMatrix + "*" + vLSTranslationMatrix + "*vec3(" + v1215 + ",1.0)).xy,0.0,1.0);}";
            var v1224 = "precision highp float;varying vec2 " + v1221 + ";uniform vec4 " + v1217 + ";uniform sampler2D " + v1218 + ";uniform vec2 " + v1219 + ";uniform vec2 " + v1220 + ";void main(){vec2 coord=" + v1221 + "*" + v1219 + "+" + v1220 + ";vec4 v_color_mix=" + v1217 + ";gl_FragColor=texture2D(" + v1218 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
            f333.prototype.Ec = function (p1696, p1697, p1698, p1699) {
              var v1225 = this.Gm[v1217];
              v1225[0] = p1696;
              v1225[1] = p1697;
              v1225[2] = p1698;
              v1225[3] = p1699;
            };
            f333.prototype.$g = function (p1700) {
              this.Gm[v1218] = p1700;
            };
            f333.prototype.Uf = function (p1701, p1702, p1703, p1704) {
              this.sf.position.x = p1701;
              this.sf.position.y = p1702;
              this.sf.scale.x = p1703;
              this.sf.scale.y = p1704;
              var v1226 = this.Gm[v1219];
              v1226[0] = p1703 * 0.2520615384615385;
              v1226[1] = p1704 * 0.4357063736263738;
              var v1227 = this.Gm[v1220];
              v1227[0] = p1701 * 0.2520615384615385;
              v1227[1] = p1702 * 0.4357063736263738;
            };
            return f333;
          }();
          vO54.sc = function () {
            function f334() {
              this.xc = new PIXI.Sprite();
              this.ev = null;
              this.Hm = 0;
              this.Im = 0;
              this.si = null;
            }
            f334.prototype.Bc = function (p1705, p1706, p1707) {
              if (p1705) {
                this.xc.texture = p1705.Ea();
                this.xc.anchor.set(p1705.ya, p1705.za);
                this.Hm = p1705.Aa;
                this.Im = p1705.Ba;
              } else {}
            };
            f334.prototype.Ec = function (p1708) {
              this.xc.tint = parseInt(p1708.substring(1), 16);
            };
            f334.prototype.Tc = function (p1709) {
              try {
                this.xc.width = p1709 * this.Hm;
                this.xc.height = p1709 * this.Im;
              } catch (e57) {}
            };
            f334.prototype.md = function (p1710) {
              this.xc.rotation = p1710;
            };
            f334.prototype.ld = function (p1711, p1712) {
              this.xc.position.set(p1711, p1712);
            };
            f334.prototype.kd = function (p1713) {
              this.xc.visible = p1713;
            };
            f334.prototype.gd = function () {
              return this.xc.visible;
            };
            f334.prototype.jj = function (p1714) {
              this.xc.alpha = p1714;
            };
            f334.prototype.Qc = function () {
              return this.xc;
            };
            f334.prototype.Rc = function () {
              vO56.U(this.xc);
            };
            return f334;
          }();
          vO54.Worm = function () {
            function f335(p1715) {
              this.hh = p1715;
              this.Eh = new vO54.Worm.li();
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
            f335.prototype.si = function () {
              if (this.Nm != null) {
                vO56.U(this.Nm.nc);
              }
              if (this.Om != null) {
                vO56.U(this.Om);
              }
            };
            f335.prototype.Pm = function () {
              this.zi(0.25);
              this.Eh.ma = "";
              this.wi = true;
              this.dd = {};
              this.kd(false);
            };
            f335.prototype.ri = function (p1716) {
              this.Eh = p1716;
              this.Qm(this.xi);
            };
            f335.prototype.kd = function (p1717) {
              var v1228 = this.xi;
              this.xi = p1717;
              this.Qm(v1228);
            };
            f335.prototype.zi = function (p1718) {
              this.Bh = p1718 * 50;
              var vP1718 = p1718;
              if (p1718 > this.hh.Ag) {
                vP1718 = Math.atan((p1718 - this.hh.Ag) / this.hh.Bg) * this.hh.Bg + this.hh.Ag;
              }
              var v1229 = Math.sqrt(Math.pow(vP1718 * 5, 0.707106781186548) * 4 + 25);
              var v1230 = Math.min(vLN200, Math.max(3, (v1229 - 5) * 5 + 1));
              var v1231 = this.ad;
              this.$c = (5 + v1229 * 0.9) * 0.025;
              this.ad = Math.floor(v1230);
              this.Jm = v1230 - this.ad;
              if (v1231 > 0 && v1231 < this.ad) {
                var v1232 = this.Km[v1231 * 2 - 2];
                var v1233 = this.Km[v1231 * 2 - 1];
                var v1234 = this.Lm[v1231 * 2 - 2];
                var v1235 = this.Lm[v1231 * 2 - 1];
                var v1236 = this._c[v1231 * 2 - 2];
                var v1237 = this._c[v1231 * 2 - 1];
                for (var vV1231 = v1231; vV1231 < this.ad; vV1231++) {
                  this.Km[vV1231 * 2] = v1232;
                  this.Km[vV1231 * 2 + 1] = v1233;
                  this.Lm[vV1231 * 2] = v1234;
                  this.Lm[vV1231 * 2 + 1] = v1235;
                  this._c[vV1231 * 2] = v1236;
                  this._c[vV1231 * 2 + 1] = v1237;
                }
              }
            };
            f335.prototype.Ei = function (p1719, p1720) {
              this.ad = p1720;
              for (var vLN0197 = 0; vLN0197 < this.ad; vLN0197++) {
                this.Km[vLN0197 * 2] = this.Lm[vLN0197 * 2] = this._c[vLN0197 * 2] = p1719();
                this.Km[vLN0197 * 2 + 1] = this.Lm[vLN0197 * 2 + 1] = this._c[vLN0197 * 2 + 1] = p1719();
              }
            };
            f335.prototype.Bi = function (p1721, p1722, p1723) {
              this.Xc = p1723;
              for (var vLN0198 = 0; vLN0198 < this.ad; vLN0198++) {
                this.Km[vLN0198 * 2] = this.Lm[vLN0198 * 2];
                this.Km[vLN0198 * 2 + 1] = this.Lm[vLN0198 * 2 + 1];
              }
              var v1238 = p1721 - this.Lm[0];
              var v1239 = p1722 - this.Lm[1];
              this.Rm(v1238, v1239, this.ad, this.Lm);
            };
            f335.prototype.Rm = function (p1724, p1725, p1726, p1727) {
              var v1240 = Math.hypot(p1724, p1725);
              if (!(v1240 <= 0)) {
                var v1241 = p1727[0];
                var vUndefined18 = undefined;
                p1727[0] += p1724;
                var v1242 = p1727[1];
                var vUndefined19 = undefined;
                p1727[1] += p1725;
                var v1243 = this.$c / (this.$c + v1240);
                var v1244 = 1 - v1243 * 2;
                for (var vLN115 = 1, v1245 = p1726 - 1; vLN115 < v1245; vLN115++) {
                  vUndefined18 = p1727[vLN115 * 2];
                  p1727[vLN115 * 2] = p1727[vLN115 * 2 - 2] * v1244 + (vUndefined18 + v1241) * v1243;
                  v1241 = vUndefined18;
                  vUndefined19 = p1727[vLN115 * 2 + 1];
                  p1727[vLN115 * 2 + 1] = p1727[vLN115 * 2 - 1] * v1244 + (vUndefined19 + v1242) * v1243;
                  v1242 = vUndefined19;
                }
                v1243 = this.Jm * this.$c / (this.Jm * this.$c + v1240);
                v1244 = 1 - v1243 * 2;
                p1727[p1726 * 2 - 2] = p1727[p1726 * 2 - 4] * v1244 + (p1727[p1726 * 2 - 2] + v1241) * v1243;
                p1727[p1726 * 2 - 1] = p1727[p1726 * 2 - 3] * v1244 + (p1727[p1726 * 2 - 1] + v1242) * v1243;
              }
            };
            f335.prototype.fh = function () {
              return {
                x: this._c[0],
                y: this._c[1]
              };
            };
            f335.prototype.yi = function (p1728, p1729) {
              var vLN1000000 = 1000000;
              var vP1728 = p1728;
              var vP1729 = p1729;
              for (var vLN0199 = 0; vLN0199 < this.ad; vLN0199++) {
                var v1246 = this._c[vLN0199 * 2];
                var v1247 = this._c[vLN0199 * 2 + 1];
                var v1248 = Math.hypot(p1728 - v1246, p1729 - v1247);
                if (v1248 < vLN1000000) {
                  vLN1000000 = v1248;
                  vP1728 = v1246;
                  vP1729 = v1247;
                }
              }
              return {
                x: vP1728,
                y: vP1729,
                distance: vLN1000000
              };
            };
            f335.prototype.ti = function (p1730) {
              this.Mm = p1730;
            };
            f335.prototype.hj = function (p1731, p1732) {
              this.dj = vO56.Q(this.dj, this.wi ? this.Xc ? 0.9 + Math.cos(p1731 / 400 * Math.PI) * 0.1 : 1 : 0, p1732, 1 / 800);
              this.bd = vO56.Q(this.bd, this.wi ? this.Xc ? 1 : 0 : 1, p1732, 0.0025);
              if (this.Nm != null) {
                this.Nm.nc.alpha = this.dj;
              }
              if (this.Om != null) {
                this.Om.alpha = this.dj;
              }
            };
            f335.prototype.ij = function (p1733, p1734, p1735, p1736) {
              if (this.xi && this.wi) {
                var v1249 = Math.pow(0.11112, p1734 / 95);
                for (var vLN0200 = 0; vLN0200 < this.ad; vLN0200++) {
                  this._c[vLN0200 * 2] = vO56.S(vO56.S(this.Km[vLN0200 * 2], this.Lm[vLN0200 * 2], p1735), this._c[vLN0200 * 2], v1249);
                  this._c[vLN0200 * 2 + 1] = vO56.S(vO56.S(this.Km[vLN0200 * 2 + 1], this.Lm[vLN0200 * 2 + 1], p1735), this._c[vLN0200 * 2 + 1], v1249);
                }
              }
              if (this.Nm && this.xi) {
                this.Nm.Zc(this, p1733, p1734, p1736);
              }
              if (this.Om) {
                this.Om.ih.x = this._c[0];
                this.Om.ih.y = this._c[1] - this.$c * 3;
              }
            };
            f335.prototype.Qm = function (p1737) {
              if (this.xi) {
                if (!p1737) {
                  this.Sm();
                }
              } else {
                if (this.Nm != null) {
                  vO56.U(this.Nm.nc);
                }
                if (this.Om != null) {
                  vO56.U(this.Om);
                }
              }
            };
            f335.prototype.Sm = function () {
              var vF2496 = f249();
              this.Nm = this.Nm || new vO54.WormSpriteTree();
              vO56.U(this.Nm.nc);
              this.Nm.yc(vF2496.dh.hh.xg, vF2496.Lc.Ub().jb(this.Eh.Gh), vF2496.Lc.Ub().ib(this.Eh.Hh), vF2496.Lc.Ub().kb(this.Eh.ni), vF2496.Lc.Ub().lb(this.Eh.oi), vF2496.Lc.Ub().mb(this.Eh.pi), vF2496.Lc.Ub().nb(this.Eh.qi), "#ffffff");
              this.Om = this.Om || new vO54.Tm("");
              vO56.U(this.Om);
              this.Om.style.fontFamily = "PTSans";
              this.Om.anchor.set(0.5);
              this.Om.style.fontSize = parseInt(bbs.enemyNameFontSize || 14);
              this.Om.style.fill = bbs.enemyNameColor || vF2496.Lc.Ub().ib(this.Eh.Hh).tb || "#fff";
              this.Om.style.fontWeight = "bold";
              this.Om.text = v638 ? this.Eh.ma : "-----";
              this.Mm.oh(this.Eh.ae, this.Nm, this.Om);
            };
            f335.li = function () {
              function f336() {
                this.ae = 0;
                this.Gh = vO48.ps ? vO48.ps : vO54.GameParams.Cg;
                this.Hh = 0;
                this.ni = 0;
                this.oi = 0;
                this.pi = 0;
                this.qi = 0;
                this.ma = 0;
              }
              return f336;
            }();
            return f335;
          }();
          vO54.Tm = function () {
            return vO56.M(vF29.Text, function (p1738, p1739, p1740) {
              vF29.Text.call(this, p1738, p1739, p1740);
              this.ih = {
                x: 0,
                y: 0
              };
            });
          }();
          vO54.hb = function () {
            function f337(p1741, p1742, p1743, p1744, p1745) {
              this.lj = p1741;
              this.mj = p1742;
              this.nj = p1743;
              this.oj = p1744;
              this.pj = p1745;
            }
            f337.prototype.Um = function (p1746) {
              return new f337(p1746, this.mj, this.nj, this.oj, this.pj);
            };
            f337.prototype.Vm = function (p1747) {
              return new f337(this.lj, p1747, this.nj, this.oj, this.pj);
            };
            f337.prototype.Wm = function (p1748) {
              return new f337(this.lj, this.mj, p1748, this.oj, this.pj);
            };
            f337.prototype.Xm = function (p1749) {
              return new f337(this.lj, this.mj, this.nj, p1749, this.pj);
            };
            f337.prototype.Ym = function (p1750) {
              return new f337(this.lj, this.mj, this.nj, this.oj, p1750);
            };
            return f337;
          }();
          vO54.Vl = function () {
            function f338(p1751) {
              this.Zm = new vO54.WormSpriteTree();
              this.Zm.nc.addChild(this.Zm.oc);
              this.$m = null;
              this._m = null;
              this.bm = p1751;
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
            var v1250 = new vO54.hb(0, 0, 0, 0, 0);
            f338.prototype.tf = function () {
              return this.Zm.nc;
            };
            f338.prototype.Wl = function (p1752) {
              this.pc = p1752;
              if (this.Zm.pc !== p1752) {
                for (var vP1752 = p1752; vP1752 < this.Zm.qc.length; vP1752++) {
                  this.Zm.qc[vP1752].Uc();
                }
                while (this.Zm.pc > p1752) {
                  this.Zm.pc -= 1;
                  var v1251 = this.Zm.qc[this.Zm.pc];
                  v1251.Dc.Rc();
                  v1251.Cc.Rc();
                }
                while (this.Zm.pc < p1752) {
                  var v1252 = this.Zm.qc[this.Zm.pc];
                  this.Zm.pc += 1;
                  this.Zm.nc.addChild(v1252.Cc.Qc());
                  this.Zm.nc.addChild(v1252.Dc.Qc());
                  v1252.Cc.jj(this.an);
                  v1252.Dc.jj(this.bn);
                }
                for (var vLN0201 = 0; vLN0201 < this.Zm.oc.Fc.length; vLN0201++) {
                  this.Zm.oc.Fc[vLN0201].jj(this.cn);
                }
                for (var vLN0202 = 0; vLN0202 < this.Zm.oc.Gc.length; vLN0202++) {
                  this.Zm.oc.Gc[vLN0202].jj(this.dn);
                }
                for (var vLN0203 = 0; vLN0203 < this.Zm.oc.Ic.length; vLN0203++) {
                  this.Zm.oc.Ic[vLN0203].jj(this.gn);
                }
                for (var vLN0204 = 0; vLN0204 < this.Zm.oc.Hc.length; vLN0204++) {
                  this.Zm.oc.Hc[vLN0204].jj(this.hn);
                }
              }
            };
            f338.prototype.am = function () {
              return this.pc;
            };
            f338.prototype.$l = function (p1753) {
              this.$m = p1753;
              this._m = "#ffffff";
              this.lm();
            };
            f338.prototype._l = function (p1754) {
              this.$m = v1250;
              this._m = p1754;
              this.lm();
            };
            f338.prototype.lm = function () {
              var vF2497 = f249();
              this.Zm.yc(vO54.Ac.vg, null, vF2497.Lc.Ub().ib(this.$m.lj), vF2497.Lc.Ub().kb(this.$m.mj), vF2497.Lc.Ub().lb(this.$m.nj), vF2497.Lc.Ub().mb(this.$m.pj), vF2497.Lc.Ub().nb(this.$m.oj), this._m);
            };
            f338.prototype.Xl = function (p1755) {
              this.Gi = p1755;
            };
            f338.prototype.cm = function () {
              return this.Gi;
            };
            f338.prototype.om = function (p1756, p1757) {
              this.an = p1756;
              this.bn = p1757;
              for (var vLN0205 = 0; vLN0205 < this.pc; vLN0205++) {
                var v1253 = this.Zm.qc[vLN0205];
                v1253.Cc.jj(this.an);
                v1253.Dc.jj(this.bn);
              }
            };
            f338.prototype.rm = function (p1758, p1759, p1760, p1761) {
              this.cn = p1758;
              this.dn = p1759;
              this.gn = p1760;
              this.hn = p1761;
              for (var vLN0206 = 0; vLN0206 < this.Zm.oc.Fc.length; vLN0206++) {
                this.Zm.oc.Fc[vLN0206].jj(this.cn);
              }
              for (var vLN0207 = 0; vLN0207 < this.Zm.oc.Gc.length; vLN0207++) {
                this.Zm.oc.Gc[vLN0207].jj(this.dn);
              }
              for (var vLN0208 = 0; vLN0208 < this.Zm.oc.Ic.length; vLN0208++) {
                this.Zm.oc.Ic[vLN0208].jj(this.gn);
              }
              for (var vLN0209 = 0; vLN0209 < this.Zm.oc.Hc.length; vLN0209++) {
                this.Zm.oc.Hc[vLN0209].jj(this.hn);
              }
            };
            f338.prototype.Uf = function () {
              var v1254 = this.Gi * 2;
              var v1255 = this.Gi * 2 * 1.5;
              if (this.pc > 0) {
                var v1256 = this.bm[0];
                var v1257 = this.bm[1];
                var v1258 = this.bm[2];
                this.Zm.qc[0].Sc(v1256, v1257, v1254, v1255, v1258);
                this.Zm.oc.Sc(v1256, v1257, v1254, v1258);
              }
              for (var vLN116 = 1; vLN116 < this.pc; vLN116++) {
                var v1259 = this.bm[vLN116 * 3];
                var v1260 = this.bm[vLN116 * 3 + 1];
                var v1261 = this.bm[vLN116 * 3 + 2];
                this.Zm.qc[vLN116].Sc(v1259, v1260, v1254, v1255, v1261);
              }
            };
            f338.prototype.tm = function (p1762) {
              p1762.render(this.Zm.nc);
            };
            return f338;
          }();
          vO54.kf = function () {
            function f339(p1763) {
              this.nd = p1763;
            }
            f339.bgcanvas = $("#background-canvas");
            f339.socialButtons = $("#social-buttons");
            f339.socialButtons.html("");
            f339.jn = $("#game-view");
            f339.gameCanvas = $("#game-canvas");
            f339.ln = $("#results-view");
            f339.mn = $("#stretch-box");
            f339.nn = $("#main-menu-view");
            f339.pn = $("#popup-view");
            f339.qn = $("#loading-view");
            f339.rn = $("#restricted-view");
            f339.sn = $("#toaster-view");
            f339.tn = $("#error-gateway-connection-view");
            f339.un_error = $("#error-game-connection-view");
            f339.vn = $("#markup-wrap");
            f339.prototype.ha = function () {};
            f339.prototype.Gk = function () {};
            f339.prototype.Hk = function () {};
            f339.prototype.Bk = function () {};
            f339.prototype.Jf = function () {};
            f339.prototype.Nf = function (p1764, p1765) {};
            return f339;
          }();
          vO54.Vj = function () {
            function f340(p1766, p1767, p1768, p1769, p1770, p1771) {
              var vLSOK = "OK";
              var v$5 = $(vLSOK);
              v$5.click(function () {
                if (typeof FB != "undefined" && FB.ui !== undefined) {
                  FB.ui({
                    method: "feed",
                    display: "popup",
                    link: p1767,
                    name: p1768,
                    caption: p1769,
                    description: p1770,
                    picture: p1771
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
            var v1262 = vO56.M(vO54.kf, function () {
              vO54.kf.call(this, vO54.Fk.wn);
              var vThis125 = this;
              var vF2498 = f249();
              v$10.toggle(vF44.xn);
              v$6.text(vO56.H("index.game.result.title"));
              v$7.text(vO56.H("index.game.result.continue"));
              v$7.click(function () {
                vF2498.Ci.Be();
                vF2498.zn.yn.ka();
                vF2498.Ci.pe(vO54.ge.je._e);
                vF2498.og.Ak(vF2498.og._e);
              });
              $("html").keydown(function (p1772) {
                if (p1772.keyCode === 32) {
                  vThis125.An = true;
                }
              }).keyup(function (p1773) {
                if (p1773.keyCode === 32) {
                  vThis125.An = false;
                }
              });
              this.ng = new vO54.Eg(vO54.kf.gameCanvas);
              this.Cn = 0;
              this.Bn = 0;
              this.An = false;
            });
            v1262.prototype.ha = function () {};
            v1262.prototype.Gk = function () {
              if (this.Cn === 0) {
                vO54.kf.jn.stop();
                vO54.kf.jn.fadeIn(500);
                vO54.kf.ln.stop();
                vO54.kf.ln.fadeOut(1);
                vO54.kf.nn.stop();
                vO54.kf.nn.fadeOut(50);
                vO54.kf.pn.stop();
                vO54.kf.pn.fadeOut(50);
                vO54.kf.sn.stop();
                vO54.kf.sn.fadeOut(50);
                vO54.kf.qn.stop();
                vO54.kf.qn.fadeOut(50);
                vO54.kf.rn.stop();
                vO54.kf.rn.fadeOut(50);
                vO54.kf.tn.stop();
                vO54.kf.tn.fadeOut(50);
                vO54.kf.un_error.stop();
                vO54.kf.un_error.fadeOut(50);
                vO54.kf.mn.stop();
                vO54.kf.mn.fadeOut(1);
                vO54.kf.bgcanvas.stop();
                vO54.kf.bgcanvas.fadeOut(50);
                vO54.GameView.Kf(false);
                vO54.kf.socialButtons.stop();
                vO54.kf.socialButtons.fadeOut(50);
                vO54.kf.vn.stop();
                vO54.kf.vn.fadeOut(50);
              } else {
                vO54.kf.jn.stop();
                vO54.kf.jn.fadeIn(500);
                vO54.kf.ln.stop();
                vO54.kf.ln.fadeIn(500);
                vO54.kf.nn.stop();
                vO54.kf.nn.fadeOut(50);
                vO54.kf.pn.stop();
                vO54.kf.pn.fadeOut(50);
                vO54.kf.sn.stop();
                vO54.kf.sn.fadeOut(50);
                vO54.kf.qn.stop();
                vO54.kf.qn.fadeOut(50);
                vO54.kf.rn.stop();
                vO54.kf.rn.fadeOut(50);
                vO54.kf.tn.stop();
                vO54.kf.tn.fadeOut(50);
                vO54.kf.un_error.stop();
                vO54.kf.un_error.fadeOut(50);
                vO54.kf.mn.stop();
                vO54.kf.mn.fadeOut(1);
                vO54.kf.bgcanvas.stop();
                vO54.kf.bgcanvas.fadeOut(50);
                vO54.GameView.Kf(false);
                vO54.kf.socialButtons.stop();
                vO54.kf.socialButtons.fadeOut(50);
                vO54.kf.vn.stop();
                vO54.kf.vn.fadeOut(50);
              }
            };
            v1262.prototype.Dn = function () {
              this.Cn = 0;
              return this;
            };
            v1262.prototype.En = function () {
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
            v1262.prototype.Hk = function () {
              this.An = false;
              this.ng.Jf();
              if (this.Cn === 1) {
                f249().Ci.Fe();
              }
            };
            v1262.prototype.Jf = function () {
              this.ng.Jf();
            };
            v1262.prototype.Nf = function (p1774, p1775) {
              this.ng.Nf(p1774, p1775);
            };
            v1262.prototype.Fn = function (p1776, p1777, p1778) {
              var vUndefined20 = undefined;
              var vUndefined21 = undefined;
              var vUndefined22 = undefined;
              if (p1777 >= 1 && p1777 <= 10) {
                vUndefined20 = vO56.H("index.game.result.place.i" + p1777);
                vUndefined21 = vO56.H("index.game.result.placeInBoard");
                vUndefined22 = vO56.H("index.game.social.shareResult.messGood").replace("{0}", p1778).replace("{1}", p1776).replace("{2}", vUndefined20);
              } else {
                vUndefined20 = "";
                vUndefined21 = vO56.H("index.game.result.tryHit");
                vUndefined22 = vO56.H("index.game.social.shareResult.messNorm").replace("{0}", p1778).replace("{1}", p1776);
              }
              v$11.html(vO56.H("index.game.result.your"));
              v$12.html(p1776);
              v$13.html(vUndefined20);
              v$14.html(vUndefined21);
              if (vF44.xn) {
                var v1263 = vO56.H("index.game.result.share");
                vO56.H("index.game.social.shareResult.caption");
                v$10.empty().append(f340(v1263, "https://wormate.io", "wormate.io", vUndefined22, vUndefined22, "https://wormate.io/images/og-share-img-new.jpg"));
              }
            };
            v1262.prototype.Gn = function () {
              return this.Bn;
            };
            v1262.prototype.Hn = function () {
              return this.An;
            };
            return v1262;
          }();
          vO54.sk = function () {
            var v$15 = $("#loading-progress-cont");
            var v$16 = $("#loading-progress-bar");
            var v$17 = $("#loading-progress-text");
            var v1264 = vO56.M(vO54.kf, function () {
              vO54.kf.call(this, vO54.Fk.wn);
              this.In = -1;
              this.Jn = "";
            });
            v1264.prototype.ha = function () {};
            v1264.prototype.Gk = function () {
              vO54.kf.jn.stop();
              vO54.kf.jn.fadeOut(50);
              vO54.kf.ln.stop();
              vO54.kf.ln.fadeOut(50);
              vO54.kf.nn.stop();
              vO54.kf.nn.fadeOut(50);
              vO54.kf.pn.stop();
              vO54.kf.pn.fadeOut(50);
              vO54.kf.sn.stop();
              vO54.kf.sn.fadeOut(50);
              vO54.kf.qn.stop();
              vO54.kf.qn.fadeIn(500);
              vO54.kf.rn.stop();
              vO54.kf.rn.fadeOut(50);
              vO54.kf.tn.stop();
              vO54.kf.tn.fadeOut(50);
              vO54.kf.un_error.stop();
              vO54.kf.un_error.fadeOut(50);
              vO54.kf.mn.stop();
              vO54.kf.mn.fadeIn(1);
              vO54.kf.bgcanvas.stop();
              vO54.kf.bgcanvas.fadeIn(500);
              vO54.GameView.Kf(true);
              vO54.kf.socialButtons.stop();
              vO54.kf.socialButtons.fadeOut(50);
              vO54.kf.vn.stop();
              vO54.kf.vn.fadeOut(50);
            };
            v1264.prototype.Hk = function () {
              f249().Ci.pe(vO54.ge.je.ie);
            };
            v1264.prototype.Bk = function () {};
            v1264.prototype.Kn = function () {
              this.Ln("", 0);
              v$15.stop();
              v$15.fadeIn(100);
            };
            v1264.prototype.Mn = function () {
              v$15.stop();
              v$15.fadeOut(100);
            };
            v1264.prototype.Ln = function (p1779, p1780) {
              if (this.Jn !== p1779) {
                this.Jn = p1779;
              }
              var v1265 = vO56.P(Math.floor(p1780 * 100), 0, 100);
              if (this.In !== v1265) {
                v$16.css({
                  width: v1265 + "%"
                });
                v$17.html(v1265 + " %");
              }
            };
            return v1264;
          }();
          vO54.Wj = function () {
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
            var v1266 = vO56.M(vO54.kf, function () {
              vO54.kf.call(this, vO54.Fk.Ek);
              var vF2499 = f249();
              this.In = -1;
              this.Jn = "";
              this.Nn = new vO54.dm(v$24);
              v$30.click(function () {
                vF2499.Ci.Be();
              });
              v$24.click(function () {
                if (vF2499.Ij.Hj()) {
                  vF2499.Ci.Be();
                  vF2499.og.Ak(vF2499.og.ik);
                }
              });
              v$25.click(function () {
                vF2499.Ci.Be();
                vF2499.On.Ej();
              });
              v$26.click(function () {
                vF2499.Ci.Be();
                vF2499.On.Dj();
              });
              v$29.keypress(function (p1781) {
                if (p1781.keyCode == 13) {
                  vF2499.Pn(true);
                }
              });
              v$31.click(function () {
                vF2499.Ci.Be();
                vF2499.Pn(true);
              });
              v$32.click(function () {
                vF2499.Ci.Be();
                vF2499.Pn(true);
              });
              v$33.click(function () {
                vF2499.Ci.Be();
                vF2499.og.Ak(vF2499.og.fk);
              });
              v$37.click(function () {
                vF2499.Ci.Be();
                vF2499.og.Ak(vF2499.og.$h);
              });
              v$34.click(function () {
                if (vF2499.Ij.Hj()) {
                  vF2499.Ci.Be();
                  vF2499.og.Ak(vF2499.og.dk);
                }
              });
              v$36.click(function () {
                if (vF2499.Ij.Hj()) {
                  vF2499.Ci.Be();
                  vF2499.og.Ak(vF2499.og.bk);
                }
              });
              v$35.click(function () {
                if (vF2499.Ij.Hj()) {
                  vF2499.Ci.Be();
                  vF2499.og.Ak(vF2499.og.kk);
                }
              });
              v$38.click(function () {
                if (vF2499.Ij.Hj()) {
                  vF2499.Ci.Be();
                  vF2499.og.Ak(vF2499.og._j);
                }
              });
              this.Qn();
              this.Rn();
              var v1267 = vO54.Vf.fg(vO54.Vf._f);
              if (v1267 !== "ARENA" && v1267 !== "TEAM2") {
                v1267 = "ARENA";
              }
              v$30.val(v1267);
            });
            v1266.prototype.ha = function () {
              var vF24910 = f249();
              var vThis126 = this;
              vF24910.Ij.zl(function () {
                if (vF24910.Ij.Hj()) {
                  vF24910.On.Fj(vF24910.Ij.ml(), vO54.tj.sj);
                  vF24910.On.Fj(vF24910.Ij.nl(), vO54.tj.uj);
                  vF24910.On.Fj(vF24910.Ij.ol(), vO54.tj.vj);
                  vF24910.On.Fj(vF24910.Ij.pl(), vO54.tj.xj);
                  vF24910.On.Fj(vF24910.Ij.ql(), vO54.tj.wj);
                } else {
                  vF24910.On.Fj(vF24910.Sn(), vO54.tj.sj);
                  vF24910.On.Fj(0, vO54.tj.uj);
                  vF24910.On.Fj(0, vO54.tj.vj);
                  vF24910.On.Fj(0, vO54.tj.xj);
                  vF24910.On.Fj(0, vO54.tj.wj);
                }
              });
              vF24910.Ij.zl(function () {
                v$31.toggle(vF24910.Ij.Hj());
                v$33.toggle(!vF24910.Ij.Hj());
                v$34.toggle(true);
                v$32.toggle(!vF24910.Ij.Hj());
                v$37.toggle(true);
                v$36.toggle(vF24910.Ij.Hj());
                v$35.toggle(vF24910.Ij.Hj());
                v$38.toggle(vF24910.Ij.Hj());
                if (vF24910.Ij.Hj()) {
                  v$27.hide();
                  v$40.html(vF24910.Ij.dl());
                  v$39.attr("src", vF24910.Ij.fl());
                  v$41.html(vF24910.Ij.il());
                  v$42.width(vF24910.Ij.kl() * 100 / vF24910.Ij.ll() + "%");
                  v$43.html(vF24910.Ij.kl() + " / " + vF24910.Ij.ll());
                  v$44.html(vF24910.Ij.jl());
                  v$29.val(vF24910.Ij.el());
                } else {
                  v$27.toggle(vF44.xn && !vF24910.Tn());
                  v$40.html(v$40.data("guest"));
                  v$39.attr("src", vO56.a.e);
                  v$41.html("10");
                  v$42.width("0");
                  v$43.html("");
                  v$44.html(1);
                  v$29.val(vO54.Vf.fg(vO54.Vf.ag));
                }
              });
              vF24910.On.zj(function () {
                vThis126.Nn.$l(vF24910.On.yj());
              });
            };
            v1266.prototype.Gk = function () {
              vO54.kf.jn.stop();
              vO54.kf.jn.fadeOut(50);
              vO54.kf.ln.stop();
              vO54.kf.ln.fadeOut(50);
              vO54.kf.nn.stop();
              vO54.kf.nn.fadeIn(500);
              vO54.kf.pn.stop();
              vO54.kf.pn.fadeOut(50);
              vO54.kf.sn.stop();
              vO54.kf.sn.fadeOut(50);
              vO54.kf.qn.stop();
              vO54.kf.qn.fadeOut(50);
              vO54.kf.rn.stop();
              vO54.kf.rn.fadeOut(50);
              vO54.kf.tn.stop();
              vO54.kf.tn.fadeOut(50);
              vO54.kf.un_error.stop();
              vO54.kf.un_error.fadeOut(50);
              vO54.kf.mn.stop();
              vO54.kf.mn.fadeIn(1);
              vO54.kf.bgcanvas.stop();
              vO54.kf.bgcanvas.fadeIn(500);
              vO54.GameView.Kf(true);
              vO54.kf.socialButtons.stop();
              vO54.kf.socialButtons.fadeIn(500);
              vO54.kf.vn.stop();
              vO54.kf.vn.fadeIn(500);
            };
            v1266.prototype.Un = function () {
              v$18.fadeIn(500);
              v$19.fadeIn(500);
              v$20.fadeIn(500);
              v$21.fadeOut(100);
            };
            v1266.prototype.Vn = function () {
              v$18.fadeOut(100);
              v$19.fadeOut(100);
              v$20.fadeOut(100);
              v$21.fadeIn(500);
            };
            v1266.prototype.Ln = function (p1782, p1783) {
              if (this.Jn !== p1782) {
                this.Jn = p1782;
              }
              var v1268 = vO56.P(Math.floor(p1783 * 100), 0, 100);
              if (this.In !== v1268) {
                v$22.css({
                  width: v1268 + "%"
                });
                v$23.html(v1268 + " %");
              }
            };
            v1266.prototype.Hk = function () {
              f249().Ci.Ce();
              this.Nn.Kf(true);
            };
            v1266.prototype.Bk = function () {
              this.Nn.Kf(false);
            };
            v1266.prototype.Jf = function () {
              this.Nn.Jf();
            };
            v1266.prototype.Nf = function (p1784, p1785) {
              this.Nn.Nf();
            };
            v1266.prototype.el = function () {
              return v$29.val();
            };
            v1266.prototype.Wn = function () {
              return v$30.val();
            };
            v1266.prototype.Qn = function () {};
            v1266.prototype.Rn = function () {
              function f341() {
                vF24911.Xn(true);
                setTimeout(function () {
                  v$27.hide();
                }, 3000);
              }
              var vF24911 = f249();
              if (vF44.xn && !vF24911.Tn()) {
                v$27.show();
                var v1269 = vO56.H("index.game.main.menu.unlockSkins.share");
                var vEncodeURIComponent = encodeURIComponent(vO56.H("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
                var vEncodeURIComponent2 = encodeURIComponent(vO56.H("index.game.main.menu.unlockSkins.comeAndPlay"));
                v$28.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + v1269 + "</span></a>").click(f341));
                v$28.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + v1269 + "</span></a>").click(f341));
              }
            };
            return v1266;
          }();
          vO54.yk = function () {
            var v1270 = vO56.M(vO54.kf, function () {
              vO54.kf.call(this, vO54.Fk.wn);
            });
            v1270.prototype.ha = function () {};
            v1270.prototype.Gk = function () {
              vO54.kf.jn.stop();
              vO54.kf.jn.fadeOut(50);
              vO54.kf.ln.stop();
              vO54.kf.ln.fadeOut(50);
              vO54.kf.nn.stop();
              vO54.kf.nn.fadeOut(50);
              vO54.kf.pn.stop();
              vO54.kf.pn.fadeOut(50);
              vO54.kf.sn.stop();
              vO54.kf.sn.fadeOut(50);
              vO54.kf.qn.stop();
              vO54.kf.qn.fadeOut(50);
              vO54.kf.rn.stop();
              vO54.kf.rn.fadeOut(50);
              vO54.kf.tn.stop();
              vO54.kf.tn.fadeOut(50);
              vO54.kf.un_error.stop();
              vO54.kf.un_error.fadeOut(50);
              vO54.kf.mn.stop();
              vO54.kf.mn.fadeOut(1);
              vO54.kf.bgcanvas.stop();
              vO54.kf.bgcanvas.fadeOut(50);
              vO54.GameView.Kf(false);
              vO54.kf.socialButtons.stop();
              vO54.kf.socialButtons.fadeOut(50);
              vO54.kf.vn.stop();
              vO54.kf.vn.fadeOut(50);
            };
            return v1270;
          }();
          vO54.pk = function () {
            var v1271 = vO56.M(vO54.kf, function () {
              vO54.kf.call(this, vO54.Fk.wn);
            });
            v1271.prototype.ha = function () {};
            v1271.prototype.Gk = function () {
              vO54.kf.jn.stop();
              vO54.kf.jn.fadeOut(50);
              vO54.kf.ln.stop();
              vO54.kf.ln.fadeOut(50);
              vO54.kf.nn.stop();
              vO54.kf.nn.fadeOut(50);
              vO54.kf.pn.stop();
              vO54.kf.pn.fadeOut(50);
              vO54.kf.sn.stop();
              vO54.kf.sn.fadeOut(50);
              vO54.kf.qn.stop();
              vO54.kf.qn.fadeOut(50);
              vO54.kf.rn.stop();
              vO54.kf.rn.fadeIn(500);
              vO54.kf.tn.stop();
              vO54.kf.tn.fadeOut(50);
              vO54.kf.un_error.stop();
              vO54.kf.un_error.fadeOut(50);
              vO54.kf.mn.stop();
              vO54.kf.mn.fadeIn(1);
              vO54.kf.bgcanvas.stop();
              vO54.kf.bgcanvas.fadeIn(500);
              vO54.GameView.Kf(true);
              vO54.kf.socialButtons.stop();
              vO54.kf.socialButtons.fadeOut(50);
              vO54.kf.vn.stop();
              vO54.kf.vn.fadeOut(50);
            };
            v1271.prototype.Hk = function () {};
            return v1271;
          }();
          vO54.rk = function () {
            var v$45 = $("#toaster-stack");
            var v1272 = vO56.M(vO54.kf, function () {
              vO54.kf.call(this, vO54.Fk.wn);
              this.Yn = [];
              this.Zn = null;
            });
            v1272.prototype.ha = function () {};
            v1272.prototype.Gk = function () {
              vO54.kf.jn.stop();
              vO54.kf.jn.fadeOut(50);
              vO54.kf.ln.stop();
              vO54.kf.ln.fadeOut(50);
              vO54.kf.nn.stop();
              vO54.kf.nn.fadeOut(50);
              vO54.kf.pn.stop();
              vO54.kf.pn.fadeOut(50);
              vO54.kf.sn.stop();
              vO54.kf.sn.fadeIn(500);
              vO54.kf.qn.stop();
              vO54.kf.qn.fadeOut(50);
              vO54.kf.rn.stop();
              vO54.kf.rn.fadeOut(50);
              vO54.kf.tn.stop();
              vO54.kf.tn.fadeOut(50);
              vO54.kf.un_error.stop();
              vO54.kf.un_error.fadeOut(50);
              vO54.kf.mn.stop();
              vO54.kf.mn.fadeIn(1);
              vO54.kf.bgcanvas.stop();
              vO54.kf.bgcanvas.fadeIn(500);
              vO54.GameView.Kf(true);
              vO54.kf.socialButtons.stop();
              vO54.kf.socialButtons.fadeOut(50);
              vO54.kf.vn.stop();
              vO54.kf.vn.fadeIn(500);
            };
            v1272.prototype.Hk = function () {
              this.$n();
            };
            v1272.prototype.Kk = function () {
              return this.Zn != null || this.Yn.length > 0;
            };
            v1272.prototype._n = function (p1786) {
              this.Yn.unshift(p1786);
              setTimeout(function () {
                f249().og.Ik();
              }, 0);
            };
            v1272.prototype.El = function (p1787) {
              this.Yn.push(p1787);
              setTimeout(function () {
                f249().og.Ik();
              }, 0);
            };
            v1272.prototype.$n = function () {
              var vThis127 = this;
              if (this.Zn == null) {
                if (this.Yn.length == 0) {
                  f249().og.Dk();
                  return;
                }
                var v1273 = this.Yn.shift();
                this.Zn = v1273;
                var v1274 = v1273.tf();
                v1274.hide();
                v1274.fadeIn(300);
                v$45.append(v1274);
                v1273.ao = function () {
                  v1274.fadeOut(300);
                  setTimeout(function () {
                    v1274.remove();
                  }, 300);
                  if (vThis127.Zn == v1273) {
                    vThis127.Zn = null;
                  }
                  vThis127.$n();
                };
                v1273.Hk();
              }
            };
            return v1272;
          }();
          vO54.Fk = {
            wn: 0,
            Ek: 1
          };
          vO54.bo = function () {
            var v$46 = $("#popup-menu-label");
            var v$47 = $("#popup-menu-coins-box");
            var v$48 = $("#popup-menu-coins-val");
            $("#popup-menu-back").click(function () {
              var vF24912 = f249();
              vF24912.Ci.Be();
              vF24912.og.Dk();
            });
            v$47.click(function () {
              var vF24913 = f249();
              if (vF24913.Ij.Hj()) {
                vF24913.Ci.Be();
                vF24913.og.Ak(vF24913.og._j);
              }
            });
            var v1275 = vO56.M(vO54.kf, function (p1788, p1789) {
              vO54.kf.call(this, vO54.Fk.Ek);
              this.ma = p1788;
              this.co = p1789;
              this.do = [];
            });
            v1275.prototype.ha = function () {
              v1275.parent.prototype.ha.call(this);
              if (!v1275.eo) {
                v1275.eo = true;
                var vF24914 = f249();
                vF24914.Ij.zl(function () {
                  if (vF24914.Ij.Hj()) {
                    v$48.html(vF24914.Ij.il());
                  } else {
                    v$48.html("0");
                  }
                });
              }
              vO54.bo.fo.stop();
              vO54.bo.fo.fadeOut(100);
            };
            v1275.go = $("#coins-view");
            v1275.ho = $("#leaders-view");
            v1275.io = $("#profile-view");
            v1275.jo = $("#settings-view");
            v1275.ko = $("#login-view");
            v1275.lo = $("#skins-view");
            v1275.mo = $("#store-view");
            v1275.no = $("#wear-view");
            v1275.oo = $("#withdraw-consent-view");
            v1275.po = $("#delete-account-view");
            v1275.fo = $("#please-wait-view");
            v1275.prototype.Gk = function () {
              vO54.kf.jn.stop();
              vO54.kf.jn.fadeOut(200);
              vO54.kf.ln.stop();
              vO54.kf.ln.fadeOut(200);
              vO54.kf.nn.stop();
              vO54.kf.nn.fadeOut(200);
              vO54.kf.pn.stop();
              vO54.kf.pn.fadeIn(200);
              vO54.kf.sn.stop();
              vO54.kf.sn.fadeOut(200);
              vO54.kf.qn.stop();
              vO54.kf.qn.fadeOut(200);
              vO54.kf.rn.stop();
              vO54.kf.rn.fadeOut(200);
              vO54.kf.tn.stop();
              vO54.kf.tn.fadeOut(200);
              vO54.kf.un_error.stop();
              vO54.kf.un_error.fadeOut(200);
              vO54.kf.mn.stop();
              vO54.kf.mn.fadeIn(1);
              vO54.kf.bgcanvas.stop();
              vO54.kf.bgcanvas.fadeIn(500);
              vO54.GameView.Kf(true);
              vO54.kf.socialButtons.stop();
              vO54.kf.socialButtons.fadeIn(200);
              vO54.kf.vn.stop();
              vO54.kf.vn.fadeIn(200);
              v$46.html(this.ma);
              v$47.toggle(this.co);
              this.qo();
            };
            v1275.prototype.qo = function () {};
            v1275.prototype.ro = function (p1790) {
              var vThis128 = this;
              var v1276 = vO56.V(0, 2147483647) & 2147483647;
              this.do.push(v1276);
              vO54.bo.fo.stop();
              vO54.bo.fo.fadeIn(100);
              setTimeout(function () {
                vThis128.so(v1276);
              }, p1790);
              return new vF40(this, v1276);
            };
            v1275.prototype.so = function (p1791) {
              var v1277 = this.do.indexOf(p1791);
              if (!(v1277 < 0)) {
                this.do.splice(v1277, 1);
                if (this.do.length === 0) {
                  vO54.bo.fo.stop();
                  vO54.bo.fo.fadeOut(100);
                }
              }
            };
            return v1275;
          }();
          var vF40 = function () {
            function f342(p1792, p1793) {
              this.to = p1792;
              this.uo = p1793;
            }
            f342.prototype.vo = function () {
              this.to.so(this.uo);
            };
            return f342;
          }();
          vO54.ak = function () {
            var v$49 = $("#store-buy-coins_125000");
            var v$50 = $("#store-buy-coins_50000");
            var v$51 = $("#store-buy-coins_16000");
            var v$52 = $("#store-buy-coins_7000");
            var v$53 = $("#store-buy-coins_3250");
            var v$54 = $("#store-buy-coins_1250");
            var v1278 = vO56.M(vO54.bo, function () {
              vO54.bo.call(this, vO56.H("index.game.popup.menu.coins.tab"), false);
              var vF24915 = f249();
              var vThis129 = this;
              v$49.click(function () {
                vF24915.Ci.Be();
                vThis129.wo("coins_125000");
              });
              v$50.click(function () {
                vF24915.Ci.Be();
                vThis129.wo("coins_50000");
              });
              v$51.click(function () {
                vF24915.Ci.Be();
                vThis129.wo("coins_16000");
              });
              v$52.click(function () {
                vF24915.Ci.Be();
                vThis129.wo("coins_7000");
              });
              v$53.click(function () {
                vF24915.Ci.Be();
                vThis129.wo("coins_3250");
              });
              v$54.click(function () {
                vF24915.Ci.Be();
                vThis129.wo("coins_1250");
              });
            });
            v1278.prototype.ha = function () {
              v1278.parent.prototype.ha.call(this);
            };
            v1278.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeIn(200);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeOut(50);
              vO54.bo.io.stop();
              vO54.bo.io.fadeOut(50);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeOut(50);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeOut(50);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeOut(50);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeOut(50);
              vO54.bo.no.stop();
              vO54.bo.no.fadeOut(50);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeOut(50);
              vO54.bo.po.stop();
              vO54.bo.po.fadeOut(50);
            };
            v1278.prototype.Hk = function () {
              f249().Ci.Ce();
            };
            v1278.prototype.wo = function (p1794) {};
            return v1278;
          }();
          vO54.ck = function () {
            var v$55 = $("#highscore-table");
            var v$56 = $("#leaders-button-level");
            var v$57 = $("#leaders-button-highscore");
            var v$58 = $("#leaders-button-kills");
            var v1279 = vO56.M(vO54.bo, function () {
              vO54.bo.call(this, vO56.H("index.game.popup.menu.leaders.tab"), true);
              var vF24916 = f249();
              var vThis130 = this;
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
                vF24916.Ci.Be();
                vThis130.Eo(vThis130.yo.zo);
              });
              v$57.click(function () {
                vF24916.Ci.Be();
                vThis130.Eo(vThis130.yo.Co);
              });
              v$58.click(function () {
                vF24916.Ci.Be();
                vThis130.Eo(vThis130.yo.Do);
              });
            });
            v1279.prototype.ha = function () {
              v1279.parent.prototype.ha.call(this);
            };
            v1279.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeOut(50);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeIn(200);
              vO54.bo.io.stop();
              vO54.bo.io.fadeOut(50);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeOut(50);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeOut(50);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeOut(50);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeOut(50);
              vO54.bo.no.stop();
              vO54.bo.no.fadeOut(50);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeOut(50);
              vO54.bo.po.stop();
              vO54.bo.po.fadeOut(50);
            };
            v1279.prototype.Hk = function () {
              var vThis131 = this;
              f249().Ci.Ce();
              var v1280 = this.ro(5000);
              var v1281 = vO56.a.b + "/pub/leaders";
              vO56.Z(v1281, function () {
                vThis131.xo = {
                  byLevel: [],
                  byHighScore: [],
                  byKillsAndHeadShots: []
                };
                vThis131.Eo(vThis131.Fo ?? vThis131.yo.zo);
                v1280.vo();
              }, function (p1795) {
                vThis131.xo = p1795;
                vThis131.Eo(vThis131.Fo ?? vThis131.yo.zo);
                v1280.vo();
              });
            };
            v1279.prototype.Eo = function (p1796) {
              this.Fo = p1796;
              for (var v1282 in this.yo) {
                if (this.yo.hasOwnProperty(v1282)) {
                  var v1283 = this.yo[v1282];
                  v1283.Ao.removeClass("pressed");
                }
              }
              this.Fo.Ao.addClass("pressed");
              for (var v1284 = this.xo[this.Fo.Bo], vLS16 = "", vLN0210 = 0; vLN0210 < v1284.length; vLN0210++) {
                var v1285 = v1284[vLN0210];
                vLS16 += "<div class=\"table-row\"><span>" + (vLN0210 + 1) + "</span><span><img src=\"" + v1285.avatarUrl + "\"/></span><span>" + v1285.username + "</span><span>" + v1285.level + "</span><span>" + v1285.highScore + "</span><span>" + v1285.headShots + " / " + v1285.kills + "</span></div>";
              }
              v$55.empty();
              v$55.append(vLS16);
            };
            return v1279;
          }();
          vO54.gk = function () {
            var v$59 = $("#popup-login-gg");
            var v$60 = $("#popup-login-fb");
            var v1286 = vO56.M(vO54.bo, function () {
              var vThis132 = this;
              vO54.bo.call(this, vO56.H("index.game.popup.menu.login.tab"), false);
              var vF24917 = f249();
              v$59.click(function () {
                vF24917.Ci.Be();
                var v1287 = vThis132.ro(10000);
                setTimeout(function () {
                  vF24917.Ij.Ml(function () {
                    if (vF24917.Ij.Hj()) {
                      vF24917.Ci.Fe();
                    }
                    v1287.vo();
                  });
                }, 500);
              });
              v$60.click(function () {
                vF24917.Ci.Be();
                var v1288 = vThis132.ro(10000);
                setTimeout(function () {
                  vF24917.Ij.Jl(function () {
                    if (vF24917.Ij.Hj()) {
                      vF24917.Ci.Fe();
                    }
                    v1288.vo();
                  });
                }, 500);
              });
            });
            v1286.prototype.ha = function () {
              v1286.parent.prototype.ha.call(this);
            };
            v1286.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeOut(50);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeOut(50);
              vO54.bo.io.stop();
              vO54.bo.io.fadeOut(50);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeIn(200);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeOut(50);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeOut(50);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeOut(50);
              vO54.bo.no.stop();
              vO54.bo.no.fadeOut(50);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeOut(50);
              vO54.bo.po.stop();
              vO54.bo.po.fadeOut(50);
            };
            v1286.prototype.Hk = function () {
              f249().Ci.Ce();
            };
            return v1286;
          }();
          vO54.ek = function () {
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
            var v1289 = vO56.M(vO54.bo, function () {
              vO54.bo.call(this, vO56.H("index.game.popup.menu.profile.tab"), true);
            });
            v1289.prototype.ha = function () {
              v1289.parent.prototype.ha.call(this);
            };
            v1289.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeOut(50);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeOut(50);
              vO54.bo.io.stop();
              vO54.bo.io.fadeIn(200);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeOut(50);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeOut(50);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeOut(50);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeOut(50);
              vO54.bo.no.stop();
              vO54.bo.no.fadeOut(50);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeOut(50);
              vO54.bo.po.stop();
              vO54.bo.po.fadeOut(50);
            };
            v1289.prototype.Hk = function () {
              var vF24918 = f249();
              vF24918.Ci.Ce();
              var v1290 = vF24918.Ij.xl();
              var v1291 = moment([v1290.year, v1290.month - 1, v1290.day]).format("LL");
              v$62.html(vF24918.Ij.dl());
              v$61.attr("src", vF24918.Ij.fl());
              v$63.width(vF24918.Ij.kl() * 100 / vF24918.Ij.ll() + "%");
              v$64.html(vF24918.Ij.kl() + " / " + vF24918.Ij.ll());
              v$65.html(vF24918.Ij.jl());
              v$66.html(vF24918.Ij.rl());
              v$67.html(vO56.J(vF24918.Ij.sl()));
              v$68.html(vF24918.Ij.tl());
              v$69.html(vF24918.Ij.ul());
              v$70.html(vF24918.Ij.vl());
              v$71.html(vO56.J(vF24918.Ij.wl()));
              v$72.html(v1291);
            };
            return v1289;
          }();
          vO54.hk = function () {
            var v$73 = $("#settings-music-enabled-switch");
            var v$74 = $("#settings-sfx-enabled-switch");
            var v$75 = $("#settings-show-names-switch");
            var v$76 = $("#popup-logout");
            var v$77 = $("#popup-logout-container");
            var v$78 = $("#popup-delete-account");
            var v$79 = $("#popup-delete-account-container");
            var v$80 = $("#popup-withdraw-consent");
            var v1292 = vO56.M(vO54.bo, function () {
              vO54.bo.call(this, vO56.H("index.game.popup.menu.settings.tab"), false);
              var vThis133 = this;
              var vF24919 = f249();
              v$73.click(function () {
                var v1293 = !!v$73.prop("checked");
                vO54.Vf.eg(vO54.Vf.Yf, v1293, 30);
                vF24919.Ci.re(v1293);
                vF24919.Ci.Be();
              });
              v$74.click(function () {
                var v1294 = !!v$74.prop("checked");
                vO54.Vf.eg(vO54.Vf.Zf, v1294, 30);
                vF24919.Ci.oe(v1294);
                vF24919.Ci.Be();
              });
              v$75.click(function () {
                vF24919.Ci.Be();
              });
              v$76.click(function () {
                vF24919.Ci.Be();
                vThis133.ro(500);
                vF24919.Ij.Kl();
              });
              v$78.click(function () {
                if (vF24919.Ij.Hj()) {
                  vF24919.Ci.Be();
                  vF24919.og.Ak(vF24919.og.Zj);
                } else {
                  vF24919.Ci.Ge();
                }
              });
              v$80.click(function () {
                if (vF24919.Go()) {
                  vF24919.Ci.Be();
                  vF24919.og.Ak(vF24919.og.Xj);
                } else {
                  vF24919.Ci.Ge();
                }
              });
            });
            v1292.prototype.ha = function () {
              v1292.parent.prototype.ha.call(this);
              var vF24920 = f249();
              var vUndefined23 = undefined;
              switch (vO54.Vf.fg(vO54.Vf.Yf)) {
                case "false":
                  vUndefined23 = false;
                  break;
                default:
                  vUndefined23 = true;
              }
              v$73.prop("checked", vUndefined23);
              vF24920.Ci.re(vUndefined23);
              var vUndefined24 = undefined;
              switch (vO54.Vf.fg(vO54.Vf.Zf)) {
                case "false":
                  vUndefined24 = false;
                  break;
                default:
                  vUndefined24 = true;
              }
              v$74.prop("checked", vUndefined24);
              vF24920.Ci.oe(vUndefined24);
              var vUndefined25 = undefined;
              switch (vO54.Vf.fg(vO54.Vf.Xf)) {
                case "false":
                  vUndefined25 = false;
                  break;
                default:
                  vUndefined25 = true;
              }
              v$75.prop("checked", vUndefined25);
              vF24920.Ij.yl(function () {
                v$77.toggle(vF24920.Ij.Hj());
                v$79.toggle(vF24920.Ij.Hj());
              });
            };
            v1292.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeOut(50);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeOut(50);
              vO54.bo.io.stop();
              vO54.bo.io.fadeOut(50);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeOut(50);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeIn(200);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeOut(50);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeOut(50);
              vO54.bo.no.stop();
              vO54.bo.no.fadeOut(50);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeOut(50);
              vO54.bo.po.stop();
              vO54.bo.po.fadeOut(50);
            };
            v1292.prototype.Hk = function () {
              var vF24921 = f249();
              vF24921.Ci.Ce();
              if (vF24921.Go()) {
                v$80.show();
              } else {
                v$80.hide();
              }
            };
            v1292.prototype.Zh = function () {
              return v$75.prop("checked");
            };
            return v1292;
          }();
          vO54.jk = function () {
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
            var v1295 = vO56.M(vO54.bo, function () {
              vO54.bo.call(this, vO56.H("index.game.popup.menu.skins.tab"), true);
              var vThis134 = this;
              var vF24922 = f249();
              this.Ho = null;
              this.Io = [];
              this.Jo = {};
              this.Ko = new vO54.dm(v$81);
              v$86.click(function () {
                vF24922.Ci.Be();
                vThis134.Lo();
              });
              v$89.click(function () {
                vF24922.Ci.Be();
                vThis134.Ho.Mo();
              });
              v$90.click(function () {
                vF24922.Ci.Be();
                vThis134.Ho.No();
              });
            });
            v1295.prototype.ha = function () {
              v1295.parent.prototype.ha.call(this);
              var vThis135 = this;
              var vF24923 = f249();
              vF24923.Lc.$b(function () {
                var v1296 = vF24923.Lc.Xb();
                vThis135.Io = [];
                for (var vLN0211 = 0; vLN0211 < v1296.skinGroupArrayDict.length; vLN0211++) {
                  vThis135.Io.push(new vF41(vThis135, v1296.skinGroupArrayDict[vLN0211]));
                }
                vThis135.Jo = {};
                for (var vLN0212 = 0; vLN0212 < v1296.skinArrayDict.length; vLN0212++) {
                  var v1297 = v1296.skinArrayDict[vLN0212];
                  vThis135.Jo[v1297.id] = v1297;
                }
                vThis135.Oo();
              });
              this.Po(false);
              vF24923.On.zj(function () {
                vThis135.Po(false);
              });
            };
            v1295.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeOut(50);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeOut(50);
              vO54.bo.io.stop();
              vO54.bo.io.fadeOut(50);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeOut(50);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeOut(50);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeIn(200);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeOut(50);
              vO54.bo.no.stop();
              vO54.bo.no.fadeOut(50);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeOut(50);
              vO54.bo.po.stop();
              vO54.bo.po.fadeOut(50);
            };
            v1295.prototype.Hk = function () {
              f249().Ci.pe(vO54.ge.je._e);
              f249().Ci.Ce();
              this.Oo();
              this.Ko.Kf(true);
            };
            v1295.prototype.Bk = function () {
              this.Ko.Kf(false);
            };
            v1295.prototype.Jf = function () {
              this.Ko.Jf();
            };
            v1295.prototype.Nf = function (p1797, p1798) {
              this.Ko.Nf();
            };
            v1295.prototype.Oo = function () {
              var vThis136 = this;
              var vThis137 = this;
              var vF24924 = f249();
              v$88.empty();
              for (var vLN0213 = 0; vLN0213 < this.Io.length; vLN0213++) {
                (function (p1799) {
                  var v1298 = vThis136.Io[p1799];
                  var v1299 = document.createElement("li");
                  v$88.append(v1299);
                  var v$91 = $(v1299);
                  if (v1298.To && v1298.To.isCustom) {
                    v$91.css("background-color", "#FFF");
                    v$91.css("color", "#000");
                  }
                  v$91.html(v1298.Qo());
                  v$91.click(function () {
                    vF24924.Ci.Be();
                    vThis137.Ro(v1298);
                  });
                  v1298.So = v$91;
                })(vLN0213);
              }
              if (this.Io.length > 0) {
                var v1300 = vF24924.On.rj(vO54.tj.sj);
                for (var vLN0213 = 0; vLN0213 < this.Io.length; vLN0213++) {
                  var v1301 = this.Io[vLN0213];
                  for (var v1302 = v1301.To.list, vLN0214 = 0; vLN0214 < v1302.length; vLN0214++) {
                    if (v1302[vLN0214] == v1300) {
                      v1301.Uo = vLN0214;
                      this.Ro(v1301);
                      return;
                    }
                  }
                }
                this.Ro(this.Io[0]);
              }
            };
            v1295.prototype.Ro = function (p1800) {
              var vF24925 = f249();
              if (this.Ho !== p1800) {
                this.Ho = p1800;
                v$88.children().removeClass("pressed");
                if (this.Ho.So) {
                  this.Ho.So.addClass("pressed");
                }
                v$83.html("");
                if (p1800.To != null) {
                  var v1303 = vF24925.Lc.Xb().textDict[p1800.To.description];
                  if (v1303 != null) {
                    v$83.html(vO56.K(vO56.I(v1303)));
                  }
                }
                this.Po(true);
              }
            };
            v1295.prototype.Vo = function () {
              if (this.Ho == null) {
                return vO54.Si.Ui();
              } else {
                return this.Ho.Wo();
              }
            };
            v1295.prototype.Lo = function () {
              var vThis138 = this;
              var v1304 = this.Vo();
              if (v1304.Wi()) {
                var v1305 = v1304.bc();
                vThis138.Xo(v1305);
              }
            };
            v1295.prototype.Xo = function (p1801) {
              var vF24926 = f249();
              var v1306 = vF24926.On.Gj(p1801, vO54.tj.sj);
              if (v1306 != null) {
                var v1307 = v1306.Jj();
                if (!(vF24926.Ij.il() < v1307)) {
                  var v1308 = vF24926.On.rj(vO54.tj.sj);
                  var v1309 = vF24926.On.rj(vO54.tj.uj);
                  var v1310 = vF24926.On.rj(vO54.tj.vj);
                  var v1311 = vF24926.On.rj(vO54.tj.xj);
                  var v1312 = vF24926.On.rj(vO54.tj.wj);
                  var v1313 = this.ro(5000);
                  vF24926.Ij.Hl(p1801, vO54.tj.sj, function () {
                    v1313.vo();
                    vF24926.og.Ak(vF24926.og.tk);
                  }, function (p1802) {
                    vF24926.Ij.Bl(function () {
                      vF24926.On.Fj(v1308, vO54.tj.sj);
                      vF24926.On.Fj(v1309, vO54.tj.uj);
                      vF24926.On.Fj(v1310, vO54.tj.vj);
                      vF24926.On.Fj(v1311, vO54.tj.xj);
                      vF24926.On.Fj(v1312, vO54.tj.wj);
                      vF24926.On.Fj(p1801, vO54.tj.sj);
                      v1313.vo();
                    });
                  });
                }
              }
            };
            v1295.prototype.Po = function (p1803) {
              var vF24927 = f249();
              var v1314 = vF24927.On.yj();
              var v1315 = this.Vo();
              if (v1315.Wi()) {
                var v1316 = v1315.bc();
                var v1317 = vF24927.On.Gj(v1316, vO54.tj.sj);
                var v1318 = false;
                var v1319 = vF24927.On.Cj(v1316, vO54.tj.sj);
                var v1320 = true;
                if (v1319) {
                  v$84.hide();
                  v$86.hide();
                } else if (v1317 == null || v1317.Kj()) {
                  v1318 = true;
                  v$84.show();
                  v$86.hide();
                  v$85.text(vO56.H("index.game.popup.menu.store.locked"));
                  if (v1317 != null && v1317.Kj()) {
                    var v1321 = vF24927.Lc.Xb().textDict[v1317.Em()];
                    if (v1321 != null) {
                      v$85.text(vO56.I(v1321));
                    }
                  }
                } else {
                  v1320 = false;
                  v$84.hide();
                  v$86.show();
                  v$87.html(v1317.Jj());
                }
                v$82.html("");
                var v1322 = vF24927.Lc.Xb().textDict[v1317.Fm()];
                var v1323 = v1322 ? vO56.K(vO56.I(v1322)) : v1317.Fm();
                if (v1317 != null && v1317.Fm() != null) {
                  v$82.html(v1323);
                }
                if (v1320 && v1317.Bm !== true) {
                  v$2.html(`<button onclick="mbf.mbf_cambiar_add('${v1316}', '${v1323}')">Add</button>`);
                } else {
                  v$2.html("");
                }
                this.Ko.$l(v1314.Um(v1316));
                this.Ko.um(v1318);
                if (p1803) {
                  vF24927.On.Fj(v1316, vO54.tj.sj);
                }
              }
            };
            var vF41 = function () {
              function f343(p1804, p1805) {
                this.Yo = p1804;
                this.Uo = 0;
                this.To = p1805;
              }
              f343.prototype.Mo = function () {
                if (--this.Uo < 0) {
                  this.Uo = this.To.list.length - 1;
                }
                this.Yo.Po(true);
              };
              f343.prototype.No = function () {
                if (++this.Uo >= this.To.list.length) {
                  this.Uo = 0;
                }
                this.Yo.Po(true);
              };
              f343.prototype.Qo = function () {
                if (this.To.img) {
                  var v1324 = f249().Lc.Xb().customPaths;
                  var v1325 = URL_CDN + "/images/" + v1324.texture;
                  var vA40 = [];
                  try {
                    vA40.push(`background-image:url('${v1325}')`);
                    vA40.push(`background-position: -${v1324.map[this.To.img].x}px -${v1324.map[this.To.img].y}px`);
                    vA40.push("background-repeat:no-repeat");
                    vA40.push("width: 180px");
                    vA40.push("height: 40px");
                  } catch (e58) {
                    console.error(v1325, e58);
                  }
                  return `<div id="${this.To.id}" style="${vA40.join(";")}"></div>`;
                }
                return vO56.I(this.To.name);
              };
              f343.prototype.Wo = function () {
                if (this.Uo >= this.To.list.length) {
                  return vO54.Si.Ui();
                } else {
                  return vO54.Si.Vi(this.To.list[this.Uo]);
                }
              };
              return f343;
            }();
            return v1295;
          }();
          vO54.lk = function () {
            var v$92 = $("#store-go-coins-button");
            var v$93 = $("#store-go-skins-button");
            var v$94 = $("#store-go-wear-button");
            var v1326 = vO56.M(vO54.bo, function () {
              vO54.bo.call(this, vO56.H("index.game.popup.menu.store.tab"), true);
              var vF24928 = f249();
              v$92.click(function () {
                vF24928.Ci.Be();
                vF24928.og.Ak(vF24928.og._j);
              });
              v$93.click(function () {
                vF24928.Ci.Be();
                vF24928.og.Ak(vF24928.og.ik);
              });
              v$94.click(function () {
                vF24928.Ci.Be();
                vF24928.og.Ak(vF24928.og.mk);
              });
            });
            v1326.prototype.ha = function () {
              v1326.parent.prototype.ha.call(this);
            };
            v1326.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeOut(50);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeOut(50);
              vO54.bo.io.stop();
              vO54.bo.io.fadeOut(50);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeOut(50);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeOut(50);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeOut(50);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeIn(200);
              vO54.bo.no.stop();
              vO54.bo.no.fadeOut(50);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeOut(50);
              vO54.bo.po.stop();
              vO54.bo.po.fadeOut(50);
            };
            v1326.prototype.Hk = function () {
              f249().Ci.Ce();
            };
            return v1326;
          }();
          vO54.nk = function () {
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
            var v1327 = vO56.M(vO54.bo, function () {
              var vThis139 = this;
              vO54.bo.call(this, vO56.H("index.game.popup.menu.wear.tab"), true);
              var vF24929 = f249();
              var vThis140 = this;
              this.Zo = [];
              this.uj = new vF42(this, vO54.tj.uj, v$101);
              this.vj = new vF42(this, vO54.tj.vj, v$102);
              this.xj = new vF42(this, vO54.tj.xj, v$103);
              this.wj = new vF42(this, vO54.tj.wj, v$104);
              this.$o = null;
              this._o = null;
              this.ap = null;
              this.bp = null;
              this.cp = null;
              this.dp = null;
              this.Ko = new vO54.dm(v$95);
              v$99.click(function () {
                vF24929.Ci.Be();
                vThis140.ep();
              });
              v$106.click(function () {
                vF24929.Ci.Be();
                vThis140.$o.fp();
              });
              v$107.click(function () {
                vF24929.Ci.Be();
                vThis140.$o.gp();
              });
              v$101.click(function () {
                vF24929.Ci.Be();
                vThis140.hp(vThis139.uj);
              });
              v$102.click(function () {
                vF24929.Ci.Be();
                vThis140.hp(vThis139.vj);
              });
              v$103.click(function () {
                vF24929.Ci.Be();
                vThis140.hp(vThis139.xj);
              });
              v$104.click(function () {
                vF24929.Ci.Be();
                vThis140.hp(vThis139.wj);
              });
              this.Zo.push(this.uj);
              this.Zo.push(this.vj);
              this.Zo.push(this.xj);
              this.Zo.push(this.wj);
            });
            v1327.prototype.ha = function () {
              v1327.parent.prototype.ha.call(this);
              var vF24930 = f249();
              var vThis141 = this;
              vF24930.Lc.$b(function () {
                var v1328 = vF24930.Lc.Xb();
                vThis141._o = v1328.eyesDict;
                vThis141.ap = v1328.mouthDict;
                vThis141.bp = v1328.glassesDict;
                vThis141.cp = v1328.hatDict;
                vThis141.dp = v1328.colorDict;
                vThis141.uj.ip(v1328.eyesVariantArray);
                vThis141.uj.jp(vThis141._o);
                vThis141.vj.ip(v1328.mouthVariantArray);
                vThis141.vj.jp(vThis141.ap);
                vThis141.xj.ip(v1328.glassesVariantArray);
                vThis141.xj.jp(vThis141.bp);
                vThis141.wj.ip(v1328.hatVariantArray);
                vThis141.wj.jp(vThis141.cp);
              });
              this.Po(false);
              vF24930.On.zj(function () {
                vThis141.Po(false);
              });
            };
            v1327.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeOut(50);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeOut(50);
              vO54.bo.io.stop();
              vO54.bo.io.fadeOut(50);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeOut(50);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeOut(50);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeOut(50);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeOut(50);
              vO54.bo.no.stop();
              vO54.bo.no.fadeIn(200);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeOut(50);
              vO54.bo.po.stop();
              vO54.bo.po.fadeOut(50);
            };
            v1327.prototype.Hk = function () {
              f249().Ci.pe(vO54.ge.je._e);
              f249().Ci.Ce();
              this.hp(this.$o ?? this.uj);
              this.Ko.Kf(true);
            };
            v1327.prototype.Bk = function () {
              this.Ko.Kf(false);
            };
            v1327.prototype.Jf = function () {
              this.Ko.Jf();
            };
            v1327.prototype.Nf = function (p1806, p1807) {
              this.Ko.Nf();
            };
            v1327.prototype.hp = function (p1808) {
              this.$o = p1808;
              for (var vLN0215 = 0; vLN0215 < this.Zo.length; vLN0215++) {
                this.Zo[vLN0215].Ao.removeClass("pressed");
              }
              this.$o.Ao.addClass("pressed");
              this.$o.Gk();
            };
            v1327.prototype.kp = function () {
              if (this.$o == null) {
                return vO54.Si.Ui();
              } else {
                return vO54.Si.Vi({
                  ae: this.$o.Wo(),
                  nd: this.$o.nd
                });
              }
            };
            v1327.prototype.ep = function () {
              var vThis142 = this;
              var v1329 = this.kp();
              if (v1329.Wi()) {
                var v1330 = v1329.bc();
                vThis142.lp(v1330.ae, v1330.nd);
              }
            };
            v1327.prototype.lp = function (p1809, p1810) {
              var vF24931 = f249();
              var v1331 = vF24931.On.Gj(p1809, p1810);
              if (v1331 != null) {
                var v1332 = v1331.Jj();
                if (!(vF24931.Ij.il() < v1332)) {
                  var v1333 = vF24931.On.rj(vO54.tj.sj);
                  var v1334 = vF24931.On.rj(vO54.tj.uj);
                  var v1335 = vF24931.On.rj(vO54.tj.vj);
                  var v1336 = vF24931.On.rj(vO54.tj.xj);
                  var v1337 = vF24931.On.rj(vO54.tj.wj);
                  var v1338 = this.ro(5000);
                  vF24931.Ij.Hl(p1809, p1810, function () {
                    v1338.vo();
                    vF24931.og.Ak(vF24931.og.tk);
                  }, function (p1811) {
                    vF24931.Ij.Bl(function () {
                      vF24931.On.Fj(v1333, vO54.tj.sj);
                      vF24931.On.Fj(v1334, vO54.tj.uj);
                      vF24931.On.Fj(v1335, vO54.tj.vj);
                      vF24931.On.Fj(v1336, vO54.tj.xj);
                      vF24931.On.Fj(v1337, vO54.tj.wj);
                      vF24931.On.Fj(p1809, p1810);
                      v1338.vo();
                    });
                  });
                }
              }
            };
            v1327.prototype.Po = function (p1812) {
              var vF24932 = f249();
              var v1339 = vF24932.On.yj();
              var v1340 = this.kp();
              if (v1340.Wi()) {
                var v1341 = v1340.bc();
                var v1342 = vF24932.On.Gj(v1341.ae, v1341.nd);
                var v1343 = false;
                if (vF24932.On.Cj(v1341.ae, v1341.nd)) {
                  v$97.hide();
                  v$99.hide();
                } else if (v1342 == null || v1342.Kj()) {
                  v1343 = true;
                  v$97.show();
                  v$99.hide();
                  v$98.text(vO56.H("index.game.popup.menu.store.locked"));
                  if (v1342 != null && v1342.Kj()) {
                    var v1344 = vF24932.Lc.Xb().textDict[v1342.Em()];
                    if (v1344 != null) {
                      v$98.text(vO56.I(v1344));
                    }
                  }
                } else {
                  v$97.hide();
                  v$99.show();
                  v$100.html(v1342.Jj());
                }
                v$96.html("");
                if (v1342 != null && v1342.Fm() != null) {
                  var v1345 = vF24932.Lc.Xb().textDict[v1342.Fm()];
                  if (v1345 != null) {
                    v$96.html(vO56.K(vO56.I(v1345)));
                  }
                }
                var v1346 = this.Ko;
                switch (v1341.nd) {
                  case vO54.tj.uj:
                    v1346.$l(v1339.Vm(v1341.ae));
                    v1346.vm(v1343);
                    break;
                  case vO54.tj.vj:
                    v1346.$l(v1339.Wm(v1341.ae));
                    v1346.wm(v1343);
                    break;
                  case vO54.tj.xj:
                    v1346.$l(v1339.Ym(v1341.ae));
                    v1346.ym(v1343);
                    break;
                  case vO54.tj.wj:
                    v1346.$l(v1339.Xm(v1341.ae));
                    v1346.xm(v1343);
                }
                if (p1812) {
                  vF24932.On.Fj(v1341.ae, v1341.nd);
                }
              }
            };
            var vF42 = function () {
              function f344(p1813, p1814, p1815) {
                this.Yo = p1813;
                this.nd = p1814;
                this.Ao = p1815;
                this.ac = {};
                this.mp = [[]];
                this.np = -10;
                this.op = -10;
              }
              f344.prototype.ip = function (p1816) {
                this.mp = p1816;
              };
              f344.prototype.jp = function (p1817) {
                this.ac = p1817;
              };
              f344.prototype.Gk = function () {
                var vF24933 = f249();
                var v1347 = vF24933.On.rj(this.nd);
                for (var vLN0216 = 0; vLN0216 < this.mp.length; vLN0216++) {
                  for (var vLN0217 = 0; vLN0217 < this.mp[vLN0216].length; vLN0217++) {
                    if (this.mp[vLN0216][vLN0217] == v1347) {
                      this.pp(vLN0216);
                      this.qp(vLN0217);
                      return;
                    }
                  }
                }
                this.pp(0);
                this.qp(0);
              };
              f344.prototype.fp = function () {
                var v1348 = this.np - 1;
                if (v1348 < 0) {
                  v1348 = this.mp.length - 1;
                }
                this.pp(v1348);
                this.qp(this.op % this.mp[v1348].length);
              };
              f344.prototype.gp = function () {
                var v1349 = this.np + 1;
                if (v1349 >= this.mp.length) {
                  v1349 = 0;
                }
                this.pp(v1349);
                this.qp(this.op % this.mp[v1349].length);
              };
              f344.prototype.pp = function (p1818) {
                var vThis143 = this;
                if (!(p1818 < 0) && !(p1818 >= this.mp.length)) {
                  this.np = p1818;
                  v$105.empty();
                  var v1350 = this.mp[this.np];
                  if (v1350.length > 1) {
                    for (var vLN0218 = 0; vLN0218 < v1350.length; vLN0218++) {
                      (function (p1819) {
                        var v1351 = v1350[p1819];
                        var v1352 = vThis143.ac[v1351];
                        var v1353 = "#" + vThis143.Yo.dp[v1352.prime];
                        var v$108 = $("<div style=\"border-color:" + v1353 + "\"></div>");
                        v$108.click(function () {
                          f249().Ci.Be();
                          vThis143.qp(p1819);
                        });
                        v$105.append(v$108);
                      })(vLN0218);
                    }
                  }
                }
              };
              f344.prototype.qp = function (p1820) {
                if (!(p1820 < 0) && !(p1820 >= this.mp[this.np].length)) {
                  this.op = p1820;
                  v$105.children().css("background-color", "transparent");
                  var v1354 = v$105.children(":nth-child(" + (1 + p1820) + ")");
                  v1354.css("background-color", v1354.css("border-color"));
                  this.Yo.Po(true);
                }
              };
              f344.prototype.Wo = function () {
                return this.mp[this.np][this.op];
              };
              return f344;
            }();
            return v1327;
          }();
          vO54.Yj = function () {
            var v$109 = $("#withdraw-consent-yes");
            var v$110 = $("#withdraw-consent-no");
            var v1355 = vO56.M(vO54.bo, function () {
              vO54.bo.call(this, vO56.H("index.game.popup.menu.consent.tab"), false);
              var vF24934 = f249();
              v$109.click(function () {
                vF24934.Ci.Be();
                if (vF24934.Go()) {
                  vF24934.og.Ak(vF24934.og._e);
                  vF24934.rp(false, true);
                  vF24934.og.qk._n(new vO54.sp());
                } else {
                  vF24934.og.Dk();
                }
              });
              v$110.click(function () {
                vF24934.Ci.Be();
                vF24934.og.Dk();
              });
            });
            v1355.prototype.ha = function () {
              v1355.parent.prototype.ha.call(this);
            };
            v1355.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeOut(50);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeOut(50);
              vO54.bo.io.stop();
              vO54.bo.io.fadeOut(50);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeOut(50);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeOut(50);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeOut(50);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeOut(50);
              vO54.bo.no.stop();
              vO54.bo.no.fadeOut(50);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeIn(200);
              vO54.bo.po.stop();
              vO54.bo.po.fadeOut(50);
            };
            v1355.prototype.Hk = function () {
              f249().Ci.Ce();
            };
            return v1355;
          }();
          vO54.$j = function () {
            var v$111 = $("#delete-account-timer");
            var v$112 = $("#delete-account-yes");
            var v$113 = $("#delete-account-no");
            var v1356 = vO56.M(vO54.bo, function () {
              vO54.bo.call(this, vO56.H("index.game.popup.menu.delete.tab"), false);
              var vF24935 = f249();
              v$112.click(function () {
                vF24935.Ci.Be();
                if (vF24935.Ij.Hj()) {
                  vF24935.Ij.Sl();
                  vF24935.Ij.Kl();
                } else {
                  vF24935.og.Dk();
                }
              });
              v$113.click(function () {
                vF24935.Ci.Be();
                vF24935.og.Dk();
              });
              this.tp = [];
            });
            v1356.prototype.ha = function () {
              v1356.parent.prototype.ha.call(this);
            };
            v1356.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeOut(50);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeOut(50);
              vO54.bo.io.stop();
              vO54.bo.io.fadeOut(50);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeOut(50);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeOut(50);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeOut(50);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeOut(50);
              vO54.bo.no.stop();
              vO54.bo.no.fadeOut(50);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeOut(50);
              vO54.bo.po.stop();
              vO54.bo.po.fadeIn(200);
            };
            v1356.prototype.Hk = function () {
              f249().Ci.Ge();
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
            v1356.prototype.vp = function (p1821, p1822) {
              var vSetTimeout2 = setTimeout(p1821, p1822);
              this.tp.push(vSetTimeout2);
            };
            v1356.prototype.up = function () {
              for (var vLN0219 = 0; vLN0219 < this.tp.length; vLN0219++) {
                clearTimeout(this.tp[vLN0219]);
              }
              this.tp = [];
            };
            return v1356;
          }();
          vO54.wp = function () {
            function f345() {
              this.ao = function () {};
            }
            f345.prototype.tf = function () {};
            f345.prototype.Hk = function () {};
            return f345;
          }();
          vO54.Gl = function () {
            var v1357 = vO56.M(vO54.wp, function (p1823) {
              vO54.wp.call(this);
              var v1358 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
              this.xp = $("<div id=\"" + v1358 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + p1823 + "</div>    <div class=\"toaster-coins-close\">" + vO56.H("index.game.toaster.continue") + "</div></div>");
              var vThis144 = this;
              this.xp.find(".toaster-coins-close").click(function () {
                f249().Ci.Be();
                vThis144.ao();
              });
            });
            v1357.prototype.tf = function () {
              return this.xp;
            };
            v1357.prototype.Hk = function () {
              f249().Ci.Ee();
            };
            return v1357;
          }();
          vO54.Fl = function () {
            var v1359 = vO56.M(vO54.wp, function (p1824) {
              vO54.wp.call(this);
              var v1360 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
              this.xp = $("<div id=\"" + v1360 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + p1824 + "</div>    <div class=\"toaster-levelup-text\">" + vO56.H("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + vO56.H("index.game.toaster.continue") + "</div></div>");
              var vThis145 = this;
              this.xp.find(".toaster-levelup-close").click(function () {
                f249().Ci.Be();
                vThis145.ao();
              });
            });
            v1359.prototype.tf = function () {
              return this.xp;
            };
            v1359.prototype.Hk = function () {
              f249().Ci.De();
            };
            return v1359;
          }();
          vO54.sp = function () {
            var v1361 = vO56.M(vO54.wp, function () {
              vO54.wp.call(this);
              var vThis146 = this;
              var vF24936 = f249();
              var v1362 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
              this.xp = $("<div id=\"" + v1362 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + vO56.a.d + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + vO56.H("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + vO56.H("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + vO56.H("index.game.toaster.consent.iAccept") + "</div></div>");
              this.yp = this.xp.find(".toaster-consent-close");
              this.yp.hide();
              this.yp.click(function () {
                vF24936.Ci.Be();
                if (vF24936.Go()) {
                  vF24936.rp(true, true);
                }
                vThis146.ao();
              });
            });
            v1361.prototype.tf = function () {
              return this.xp;
            };
            v1361.prototype.Hk = function () {
              var vThis147 = this;
              var vF24937 = f249();
              if (vF24937.Go() && !vF24937.hl()) {
                vF24937.Ci.Ge();
                setTimeout(function () {
                  vThis147.yp.fadeIn(300);
                }, 2000);
              } else {
                setTimeout(function () {
                  vThis147.ao();
                }, 0);
              }
            };
            return v1361;
          }();
          vO54.uk = function () {
            var v$114 = $("#error-gateway-connection-retry");
            var v1363 = vO56.M(vO54.kf, function () {
              vO54.kf.call(this, vO54.Fk.wn);
              var vF24938 = f249();
              v$114.click(function () {
                vF24938.Ci.Be();
                vF24938.og.ie.Mn();
                vF24938.og.Ak(vF24938.og.ie);
                setTimeout(function () {
                  var v1364 = vO56.a.b + "/pub/healthCheck/ping";
                  vO56.Z(v1364, function () {
                    vF24938.og.Ak(vF24938.og.tk);
                  }, function (p1825) {
                    vF24938.og.ie.Kn();
                    vF24938.Lc.Ib(function () {
                      vF24938.og.Ak(vF24938.og._e);
                    }, function (p1826) {
                      vF24938.og.Ak(vF24938.og.tk);
                    }, function (p1827, p1828) {
                      var vP1827 = p1827;
                      vF24938.og.ie.Ln(vP1827, p1828);
                    });
                  });
                }, 2000);
              });
            });
            v1363.prototype.ha = function () {};
            v1363.prototype.Gk = function () {
              vO54.kf.jn.stop();
              vO54.kf.jn.fadeOut(50);
              vO54.kf.ln.stop();
              vO54.kf.ln.fadeOut(50);
              vO54.kf.nn.stop();
              vO54.kf.nn.fadeOut(50);
              vO54.kf.pn.stop();
              vO54.kf.pn.fadeOut(50);
              vO54.kf.sn.stop();
              vO54.kf.sn.fadeOut(50);
              vO54.kf.qn.stop();
              vO54.kf.qn.fadeOut(50);
              vO54.kf.rn.stop();
              vO54.kf.rn.fadeOut(50);
              vO54.kf.tn.stop();
              vO54.kf.tn.fadeIn(500);
              vO54.kf.un_error.stop();
              vO54.kf.un_error.fadeOut(50);
              vO54.kf.mn.stop();
              vO54.kf.mn.fadeIn(1);
              vO54.kf.bgcanvas.stop();
              vO54.kf.bgcanvas.fadeIn(500);
              vO54.GameView.Kf(true);
              vO54.kf.socialButtons.stop();
              vO54.kf.socialButtons.fadeOut(50);
              vO54.kf.vn.stop();
              vO54.kf.vn.fadeOut(50);
            };
            v1363.prototype.Hk = function () {
              var vF24939 = f249();
              vF24939.Ci.pe(vO54.ge.je._e);
              vF24939.Ci.Ge();
            };
            return v1363;
          }();
          vO54.wk = function () {
            var v$115 = $("#error-game-connection-retry");
            var v1365 = vO56.M(vO54.kf, function () {
              vO54.kf.call(this, vO54.Fk.wn);
              var vF24940 = f249();
              v$115.click(function () {
                vF24940.Ci.Be();
                vF24940.og.Ak(vF24940.og._e);
              });
            });
            v1365.prototype.ha = function () {};
            v1365.prototype.Gk = function () {
              vO54.kf.jn.stop();
              vO54.kf.jn.fadeOut(50);
              vO54.kf.ln.stop();
              vO54.kf.ln.fadeOut(50);
              vO54.kf.nn.stop();
              vO54.kf.nn.fadeOut(50);
              vO54.kf.pn.stop();
              vO54.kf.pn.fadeOut(50);
              vO54.kf.sn.stop();
              vO54.kf.sn.fadeOut(50);
              vO54.kf.qn.stop();
              vO54.kf.qn.fadeOut(50);
              vO54.kf.rn.stop();
              vO54.kf.rn.fadeOut(50);
              vO54.kf.tn.stop();
              vO54.kf.tn.fadeOut(50);
              vO54.kf.un_error.stop();
              vO54.kf.un_error.fadeIn(500);
              vO54.kf.mn.stop();
              vO54.kf.mn.fadeIn(1);
              vO54.kf.bgcanvas.stop();
              vO54.kf.bgcanvas.fadeIn(500);
              vO54.GameView.Kf(true);
              vO54.kf.socialButtons.stop();
              vO54.kf.socialButtons.fadeOut(50);
              vO54.kf.vn.stop();
              vO54.kf.vn.fadeOut(50);
            };
            v1365.prototype.Hk = function () {
              var vF24941 = f249();
              vF24941.Ci.pe(vO54.ge.je._e);
              vF24941.Ci.Ge();
            };
            return v1365;
          }();
          vO56.zp = function () {
            function f346(p1829) {
              var v1366 = p1829 + Math.floor(Math.random() * 65535) * 37;
              vO54.Vf.eg(vO54.Vf.cg, v1366, 30);
            }
            function f347() {
              return parseInt(vO54.Vf.fg(vO54.Vf.cg)) % 37;
            }
            return function () {
              var vF347 = f347();
              if (!(vF347 >= 0) || !(vF347 < vF44.Ap)) {
                vF347 = Math.max(0, vF44.Ap - 2);
              }
              var vO72 = {
                zn: vF44,
                Bp: false
              };
              vO72.Cp = Date.now();
              vO72.Dp = 0;
              vO72.Ep = 0;
              vO72.Fp = null;
              vO72.Gp = vO56.a.j;
              vO72.Hp = vO56.a.i;
              vO72.dh = null;
              vO72.Lc = null;
              vO72.xe = null;
              vO72.Ci = null;
              vO72.og = null;
              vO72.On = null;
              vO72.Ij = null;
              try {
                if (navigator && navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(function (p1830) {
                    if (p1830.coords !== undefined) {
                      var v1367 = p1830.coords;
                      if (v1367.latitude !== undefined && v1367.longitude !== undefined) {
                        vO72.Fp = p1830;
                      }
                    }
                  }, function (p1831) {});
                }
              } catch (e59) {}
              vO72.Ip = function () {
                vO72.dh = new vO54.Engine();
                vO72.dh.Kp = new vO54.MessageProcessor(vO72.dh);
                vO72.Lc = new vO54._a();
                vO72.xe = new vO54.Qj();
                vO72.Ci = new vO54.ge();
                vO72.og = new vO54.Tj();
                vO72.On = new vO54.kj();
                vO72.Ij = new vO54.Mk();
                vO72.ha();
              };
              vO72.ha = function () {
                try {
                  ga("send", "event", "app", window.runtimeHash + "_init");
                } catch (e60) {}
                vO72.dh.Lp = function () {
                  vO72.og.Ak(vO72.og.vk);
                };
                vO72.dh.Mp = function () {
                  var v1368 = vO72.og._e.Wn();
                  try {
                    ga("send", "event", "game", window.runtimeHash + "_start", v1368);
                  } catch (e61) {}
                  vO72.Ci.pe(vO54.ge.je.af);
                  vO72.og.Ak(vO72.og.af.Dn());
                };
                vO72.dh.Np = function () {
                  try {
                    ga("send", "event", "game", window.runtimeHash + "_end");
                  } catch (e62) {}
                  if ($("body").height() >= 430) {
                    vO72.zn.Op.ka();
                  }
                  vO72.Lc.Ib(null, null, null);
                  (function () {
                    var v1369 = Math.floor(vO72.dh.ch.Bh);
                    var v1370 = vO72.dh.Ih;
                    if (vO72.Ij.Hj()) {
                      vO72.Ij.Bl(function () {
                        vO72.Pp(v1369, v1370);
                      });
                    } else {
                      vO72.Pp(v1369, v1370);
                    }
                  })();
                };
                vO72.dh.Qp = function (p1832) {
                  p1832(vO72.og.af.Gn(), vO72.og.af.Hn());
                };
                vO72.Ij.yl(function () {
                  var v1371 = vO72.og.Lk();
                  if (v1371 != null && v1371.nd === vO54.Fk.Ek) {
                    vO72.Ci.pe(vO54.ge.je._e);
                    vO72.og.Ak(vO72.og._e);
                  }
                  if (vO72.Ij.Hj()) {
                    try {
                      var v1372 = vO72.Ij.cl();
                      ga("set", "userId", v1372);
                    } catch (e63) {}
                  }
                  if (vO72.Go() && vO72.Ij.Hj() && !vO72.Ij.hl()) {
                    vO72.rp(false, false);
                    vO72.og.qk._n(new vO54.sp());
                  } else {
                    vO72.Rp(true);
                  }
                });
                vO72.dh.run();
                vO72.og.ha();
                vO72.On.ha();
                vO72.Lc.ha();
                vO72.og._e.Vn();
                vO72.og.Ak(vO72.og._e);
                vO72.xe.ha(function () {
                  vO72.Ci.ha();
                  vO72.Ij.ha();
                  vO72.Lc.Ib(function () {
                    vO72.og._e.Un();
                    vO72.og.Ak(vO72.og._e);
                  }, function (p1833) {
                    vO72.og._e.Un();
                    vO72.og.Ak(vO72.og.tk);
                  }, function (p1834, p1835) {
                    var vP1834 = p1834;
                    vO72.og.ie.Ln(vP1834, p1835);
                    vO72.og._e.Ln(vP1834, p1835);
                  });
                  if (vO72.Go() && !vO72.hl()) {
                    vO72.og.qk._n(new vO54.sp());
                  } else {
                    vO72.Rp(true);
                  }
                });
              };
              vO72.Sp = function (p1836) {
                if (vO72.Ij.Hj()) {
                  var v1373 = vO72.Ij.Al();
                  var v1374 = vO56.a.b + "/pub/wuid/" + v1373 + "/consent/change?value=" + encodeURI(p1836);
                  vO56.Z(v1374, function () {}, function (p1837) {});
                }
              };
              vO72.Pn = function (p1838) {
                vF347++;
                if (!vO72.zn.Tp && vF347 >= vO72.zn.Ap) {
                  vO72.og.Ak(vO72.og.xk);
                  vO72.Ci.pe(vO54.ge.je.cf);
                  vO72.zn.Up.ia();
                } else {
                  f346(vF347);
                  vO72.Vp(p1838);
                }
              };
              vO72.Vp = function (p1839) {
                if (vO72.dh.Wp()) {
                  vO72.og.ie.Mn();
                  vO72.og.Ak(vO72.og.ie);
                  var v1375 = vO72.og._e.Wn();
                  vO54.Vf.eg(vO54.Vf._f, v1375, 30);
                  var v1376 = vO72.og.$h.Zh();
                  vO54.Vf.eg(vO54.Vf.Xf, v1376, 30);
                  var vLN0220 = 0;
                  if (vO72.Fp != null) {
                    var v1377 = vO72.Fp.coords.latitude;
                    var v1378 = vO72.Fp.coords.longitude;
                    vLN0220 = Math.max(0, Math.min(32767, (v1377 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (v1378 + 180) / 360 * 65536)) << 16;
                  }
                  if (vO72.Ij.Hj()) {
                    vO72.Xp(v1375, vLN0220, p1839);
                  } else {
                    var v1379 = vO72.og._e.el();
                    vO54.Vf.eg(vO54.Vf.ag, v1379, 30);
                    var v1380 = vO72.On.rj(vO54.tj.sj);
                    vO54.Vf.eg(vO54.Vf.bg, v1380, 30);
                    vO72.Yp(v1375, vLN0220);
                  }
                }
              };
              vO72.Xp = function (p1840, p1841, p1842) {
                var vVO72 = vO72;
                var v1381 = vO72.Ij.Al();
                var v1382 = vO72.og._e.el();
                var v1383 = vO72.On.rj(vO54.tj.sj);
                var v1384 = vO72.On.rj(vO54.tj.uj);
                var v1385 = vO72.On.rj(vO54.tj.vj);
                var v1386 = vO72.On.rj(vO54.tj.xj);
                var v1387 = vO72.On.rj(vO54.tj.wj);
                var v1388 = (v545 ? URL_CDN : vO56.a.b) + "/pub/wuid/" + v1381 + "/start?gameMode=" + encodeURI(p1840) + "&gh=" + p1841 + "&nickname=" + vO48.Xp(v1381, v1382, v1383, v1384, v1385, v1386, v1387) + "&skinId=" + encodeURI(_wwc.validInput(v1383 || 0)) + "&eyesId=" + encodeURI(_wwc.validInputWear(v1384)) + "&mouthId=" + encodeURI(_wwc.validInputWear(v1385)) + "&glassesId=" + encodeURI(_wwc.validInputWear(v1386)) + "&hatId=" + encodeURI(_wwc.validInputWear(v1387));
                vO56.Z(v1388, function () {
                  vVO72.og.Ak(vVO72.og.tk);
                }, function (p1843) {
                  if (p1843.code === 1460) {
                    vVO72.og.Ak(vVO72.og.ok);
                    try {
                      ga("send", "event", "restricted", window.runtimeHash + "_tick");
                    } catch (e64) {}
                  } else if (false) {} else {
                    if (!p1843.server_url) {
                      vO47.dh.Cq();
                      return;
                    }
                    var v1389 = p1843.server_url;
                    vVO72.dh.Zp(v1389, v1381, p1842);
                  }
                });
              };
              vO72.Yp = function (p1844, p1845) {
                var vVO722 = vO72;
                var v1390 = vO72.og._e.el();
                var v1391 = vO72.On.rj(vO54.tj.sj);
                var v1392 = vO56.a.b + "/pub/wuid/guest/start?gameMode=" + encodeURI(p1844) + "&gh=" + p1845 + "&nickname=" + encodeURI(v1390) + "&skinId=" + encodeURI(v1391);
                vO56.Z(v1392, function () {
                  vVO722.og.Ak(vVO722.og.tk);
                }, function (p1846) {
                  if (p1846.code === 1460) {
                    vVO722.og.Ak(vVO722.og.ok);
                    try {
                      ga("send", "event", "restricted", window.runtimeHash + "_tick");
                    } catch (e65) {}
                  } else if (p1846.code !== 1200) {
                    vVO722.og.Ak(vVO722.og.tk);
                  } else {
                    var v1393 = p1846.server_url;
                    vVO722.dh.$p(v1393, v1390, v1391);
                  }
                });
              };
              vO72.Pp = function (p1847, p1848) {
                var v1394 = vO72.og._e.el();
                vO72.og.af.Fn(p1847, p1848, v1394);
                vO72.Ci.pe(vO54.ge.je.bf);
                vO72.og.Ak(vO72.og.af.En());
              };
              vO72.Sn = function () {
                if (!vO72.Tn()) {
                  return vO72.On.Bj();
                }
                var vParseInt7 = parseInt(vO54.Vf.fg(vO54.Vf.bg));
                if (vParseInt7 != null && vO72.On.Cj(vParseInt7, vO54.tj.sj)) {
                  return vParseInt7;
                } else {
                  return vO72.On.Bj();
                }
              };
              vO72.Xn = function (p1849) {
                vO54.Vf.eg(vO54.Vf.dg, p1849 ? "true" : "false", 1800);
              };
              vO72.Tn = function () {
                return vO54.Vf.fg(vO54.Vf.dg) === "true";
              };
              vO72.Rp = function (p1850) {
                if (p1850 !== vO72.Bp) {
                  vO72.Bp = p1850;
                  var v1395 = v1395 || {};
                  v1395.consented = p1850;
                  v1395.gdprConsent = p1850;
                  vO72.zn.yn.ha();
                  vO72.zn.Op.ha();
                  vO72.zn.Up.ha(function (p1851) {
                    if (p1851) {
                      f346(vF347 = 0);
                    }
                    vO72.Vp();
                  });
                }
              };
              vO72.rp = function (p1852, p1853) {
                vO54.Vf.eg(vO54.Vf.Wf, p1852 ? "true" : "false");
                if (p1853) {
                  vO72.Sp(p1852);
                }
                vO72.Rp(p1852);
              };
              vO72.hl = function () {
                switch (vO54.Vf.fg(vO54.Vf.Wf)) {
                  case "true":
                    return true;
                  default:
                    return false;
                }
              };
              vO72.Go = function () {
                try {
                  return !!window.isIPInEEA || vO72.Fp != null && !!vO55.gg.hg(vO72.Fp.coords.latitude, vO72.Fp.coords.longitude);
                } catch (e66) {
                  return true;
                }
              };
              vO72.Nf = function () {
                vO72.Dp = performance.now();
                vO72.Ep = vO72.Dp - vO72.Cp;
                vO72.dh.lh(vO72.Dp, vO72.Ep);
                vO72.og.lh(vO72.Dp, vO72.Ep);
                vO72.Cp = vO72.Dp;
              };
              vO72.Jf = function () {
                vO72.og.Jf();
              };
              return vO72;
            }();
          };
          vO54.Engine = function () {
            var vO73 = {
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
              hh: new vO54.GameParams(),
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
            vO73.hh.zg = 500;
            vO73.ch = new vO54.Worm(vO73.hh);
            vO73.run = function () {
              vO73.ch.ti(f249().og.af.ng);
            };
            vO73.gh = function (p1854, p1855, p1856, p1857) {
              vO73.pq = p1854;
              vO73.qq = p1855;
              vO73.rq = p1856;
              vO73.sq = p1857;
              vO73.yq();
            };
            vO73.zq = function (p1858) {
              vO73.oq = p1858;
              vO73.yq();
            };
            vO73.yq = function () {
              vO73.tq = vO73.pq - vO73.oq;
              vO73.uq = vO73.qq + vO73.oq;
              vO73.vq = vO73.rq - vO73.oq;
              vO73.wq = vO73.sq + vO73.oq;
            };
            vO73.lh = function (p1859, p1860) {
              vO73.iq += p1860;
              vO73.hq -= vO73.gq * 0.2 * p1860;
              vO73.Kp.Rh();
              if (vO73.mq !== null && (vO73.Cn === 2 || vO73.Cn === 3)) {
                vO73.Aq(p1859, p1860);
                vO73.eh = 4 + vO73.Di * vO73.ch.$c;
              }
              var v1396 = 1000 / Math.max(1, p1860);
              var vLN0221 = 0;
              for (var vLN0222 = 0; vLN0222 < vO73.fq.length - 1; vLN0222++) {
                vLN0221 += vO73.fq[vLN0222];
                vO73.fq[vLN0222] = vO73.fq[vLN0222 + 1];
              }
              vO73.fq[vO73.fq.length - 1] = v1396;
              vO73.dq = (vLN0221 + v1396) / vO73.fq.length;
            };
            vO73.Bq = function (p1861, p1862) {
              return p1861 > vO73.tq && p1861 < vO73.uq && p1862 > vO73.vq && p1862 < vO73.wq;
            };
            vO73.Aq = function (p1863, p1864) {
              var v1397 = vO73.iq + vO73.hq;
              var v1398 = (v1397 - vO73.jq) / (vO73.kq - vO73.jq);
              vO73.ch.hj(p1863, p1864);
              vO73.ch.ij(p1863, p1864, v1398, vO73.Bq);
              var vLN0223 = 0;
              for (var v1399 in vO73.Fh) {
                var v1400 = vO73.Fh[v1399];
                v1400.hj(p1863, p1864);
                v1400.ij(p1863, p1864, v1398, vO73.Bq);
                if (v1400.xi && v1400.$c > vLN0223) {
                  vLN0223 = v1400.$c;
                }
                if (!v1400.wi && (!!(v1400.dj < 0.005) || !v1400.xi)) {
                  v1400.si();
                  delete vO73.Fh[v1400.Eh.ae];
                }
              }
              vO73.zq(vLN0223 * 3);
              for (var v1401 in vO73.Hi) {
                var v1402 = vO73.Hi[v1401];
                v1402.hj(p1863, p1864);
                v1402.ij(p1863, p1864, vO73.Bq);
                if (v1402.Ni && (v1402.dj < 0.005 || !vO73.Bq(v1402.Zi, v1402.$i))) {
                  v1402.si();
                  delete vO73.Hi[v1402.Eh.ae];
                }
              }
            };
            vO73.ki = function (p1865, p1866) {
              if (vO73.Cn === 1) {
                vO73.Cn = 2;
                vO73.Mp();
              }
              var v1403 = f249().Dp;
              vO73.lq = p1865;
              if (p1865 === 0) {
                vO73.jq = v1403 - 95;
                vO73.kq = v1403;
                vO73.iq = vO73.jq;
                vO73.hq = 0;
              } else {
                vO73.jq = vO73.kq;
                vO73.kq = vO73.kq + p1866;
              }
              var v1404 = vO73.iq + vO73.hq;
              vO73.gq = (v1404 - vO73.jq) / (vO73.kq - vO73.jq);
            };
            vO73.Oi = function () {
              if (vO73.Cn === 1 || vO73.Cn === 2) {
                vO73.Cn = 3;
                var v1405 = vO73.mq;
                setTimeout(function () {
                  if (vO73.Cn === 3) {
                    vO73.Cn = 0;
                  }
                  if (v1405 != null && v1405 === vO73.mq) {
                    vO73.mq.close();
                    vO73.mq = null;
                  }
                }, 4500);
                vO73.Np();
              }
            };
            vO73.Wp = function () {
              return vO73.Cn !== 2 && (vO73.Cn = 1, vO73.Kp.Qh(), vO73.Hi = {}, vO73.Fh = {}, vO73.ch.Pm(), vO73.mq != null && (vO73.mq.close(), vO73.mq = null), true);
            };
            vO73.Cq = function () {
              vO73.mq = null;
              vO73.Kp.Qh();
              if (vO73.Cn !== 3) {
                vO73.Lp();
              }
              vO73.Cn = 0;
            };
            vO73.Zp = function (p1867, p1868) {
              vO73.Dq(p1867, function () {
                var v1406 = Math.min(2048, p1868.length);
                var v1407 = new ArrayBuffer(6 + v1406 * 2);
                var v1408 = new DataView(v1407);
                var vLN0224 = 0;
                v1408.setInt8(vLN0224, 129);
                vLN0224 += 1;
                v1408.setInt16(vLN0224, 2800);
                vLN0224 += 2;
                v1408.setInt8(vLN0224, 1);
                vLN0224 += 1;
                v1408.setInt16(vLN0224, v1406);
                vLN0224 += 2;
                for (var vLN0225 = 0; vLN0225 < v1406; vLN0225++) {
                  v1408.setInt16(vLN0224, p1868.charCodeAt(vLN0225));
                  vLN0224 += 2;
                }
                vO73.Eq(v1407);
              });
            };
            vO73.$p = function (p1869, p1870, p1871) {
              vO73.Dq(p1869, function () {
                var v1409 = Math.min(32, p1870.length);
                var v1410 = new ArrayBuffer(7 + v1409 * 2);
                var v1411 = new DataView(v1410);
                var vLN0226 = 0;
                v1411.setInt8(vLN0226, 129);
                vLN0226 += 1;
                v1411.setInt16(vLN0226, 2800);
                vLN0226 += 2;
                v1411.setInt8(vLN0226, 0);
                vLN0226 += 1;
                v1411.setInt16(vLN0226, p1871);
                vLN0226 += 2;
                v1411.setInt8(vLN0226, v1409);
                vLN0226++;
                for (var vLN0227 = 0; vLN0227 < v1409; vLN0227++) {
                  v1411.setInt16(vLN0226, p1870.charCodeAt(vLN0227));
                  vLN0226 += 2;
                }
                vO73.Eq(v1410);
              });
            };
            vO73.Eq = function (p1872) {
              try {
                if (vO73.mq != null && vO73.mq.readyState === WebSocket.OPEN) {
                  vO73.mq.send(p1872);
                }
              } catch (e67) {
                vO73.Cq();
              }
            };
            vO73.xq = function (p1873, p1874) {
              var v1412 = p1874 ? 128 : 0;
              var v1413 = vO56.N(p1873) / vO55.F * 128 & 127;
              var v1414 = (v1412 | v1413) & 255;
              var v1415 = new ArrayBuffer(1);
              new DataView(v1415).setInt8(0, v1414);
              vO73.Eq(v1415);
              vO73.nq = v1414;
            };
            vO73.Dq = function (p1875, p1876) {
              var v1416 = vO73.mq = new WebSocket(p1875);
              v1416.binaryType = "arraybuffer";
              v1416.onopen = function () {
                if (vO73.mq === v1416) {
                  p1876();
                }
              };
              v1416.onclose = function () {
                if (vO73.mq === v1416) {
                  vO73.Cq();
                }
              };
              v1416.onerror = function (p1877) {
                if (vO73.mq === v1416) {
                  vO73.Cq();
                }
              };
              v1416.onmessage = function (p1878) {
                if (vO73.mq === v1416) {
                  vO73.Kp.Ph(p1878.data);
                }
              };
            };
            return vO73;
          };
          var vF1472 = f147({}, vO48);
          vO48 = f147({
            $C: vO54,
            $V: vO55,
            $F: vO56,
            POGL: vF29
          }, vF1472);
          vO48.Jb = function () {
            (vO47.Lc.zb.ud.skinArrayDict || []).forEach(function (p1879) {
              if (p1879.associados && p1879.associados.includes(vO47.Ij.Rk.userId)) {
                p1879[["n", "o", "n", "b", "u", "y", "a", "b", "l", "e"].join("")] = false;
              }
            });
          };
          var vF44 = function (p1880) {
            var vO74 = {};
            vO74.main = {
              yn: vO56.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
              Op: vO56.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
              Up: vO56.ga(),
              Ap: 4,
              Tp: false,
              xn: true
            };
            vO74.miniclip = {
              yn: vO56.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
              Op: vO56.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
              Up: vO56.ga(),
              Ap: 4,
              Tp: false,
              xn: false
            };
            var v1417 = vO74[window.ENV];
            v1417 ||= vO74.main;
            return v1417;
          }(window.ENV);
          $(function () {
            FastClick.attach(document.body);
          });
          addEventListener("contextmenu", function (p1881) {
            p1881.preventDefault();
            p1881.stopPropagation();
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
          vO56.L("//apis.google.com/js/api:client.js", null, function () {
            gapi.load("auth2", function () {
              v774 = gapi.auth2.init({
                client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
              });
            });
          });
          vO56.L("//connect.facebook.net/" + vO56.a.j + "/sdk.js", {
            id: "facebook-jssdk",
            async: true,
            defer: true,
            crossorigin: "anonymous"
          });
          vO47 = vO56.zp();
          vO47.Ip();
          (function () {
            function f348() {
              requestAnimationFrame(f348);
              f249().Nf();
            }
            f348();
          })();
          (function () {
            function f349() {
              var v1418 = v$116.width();
              var v1419 = v$116.height();
              var v1420 = v$117.outerWidth();
              var v1421 = v$117.outerHeight();
              var v1422 = v$118.outerHeight();
              var v1423 = v$119.outerHeight();
              var v1424 = Math.min(1, Math.min((v1419 - v1423 - v1422) / v1421, v1418 / v1420));
              var v1425 = "translate(-50%, -50%) scale(" + v1424 + ")";
              v$117.css({
                "-webkit-transform": v1425,
                "-moz-transform": v1425,
                "-ms-transform": v1425,
                "-o-transform": v1425,
                transform: v1425
              });
              f249().Jf();
              window.scrollTo(0, 1);
            }
            var v$116 = $("body");
            var v$117 = $("#stretch-box");
            var v$118 = $("#markup-header");
            var v$119 = $("#markup-footer");
            f349();
            $(window).resize(f349);
          })();
        })();
      });
      setTimeout(function () {
        $(".mm-merchant-cont").remove();
      }, 4500);
      $(".description-text").css("height", "300px");
      $("#stretch-box").append("\n<div class=\"news-box-wormworld\" style=\"display:none\">\n  <div class=\"news-content\">\n    <!-- Content will be dynamically loaded here -->\n  </div>\n  <div class=\"news-button\">\n    <input type=\"checkbox\" id=\"news-checkbox\" style=\"cursor: pointer;\">\n    <label for=\"news-checkbox\" style=\"font-size: 12px; color: #555; cursor: pointer;\">\n      Do not show again\n    </label>\n    <button id=\"close-news-button\" class=\"close-button\">\n      Close\n    </button>\n  </div>\n</div>\n");
      var v705 = localStorage.getItem("wormworld_news");  
      if (v707) {
        v707 = JSON.parse(v707);
        if (v707 && v707.audio) {
          vO41.headshot = new vP795.Howl({
            src: [v707.audio],
            html5: true,
            autoplay: false,
            loop: false
          });
        }
      }
      window.testAudioCustom = function () {
        if (v707 && v707.audio) {
          console.log("Playing custom audio?", v707.audio);
          vO41.headshot.play();
        }
      };
      var vF131 = f131(function f351(p1883, p1884, p1885, p1886, p1887) {
        f129(this, f351);
        this.sid = null;
        this.refer = p1883;
        this.wid = p1883;
        this.nickname = p1884;
        this.score = p1886;
        this.myRoom = p1885;
        this.myLocation = {
          x: 0,
          y: 0
        };
        this.teamRoom = p1887;
        this.wuid = bbs.wuid;
      });
      var vA41 = [16711680, 65280, 16776960, 16752640, 16711935, 16777215, 10066329, 65535, 8388736, 255, 3447003, 2719929, 3066993, 1752220];
      function f352(p1888, p1889) {
        if (!p1889) {
          return;
        }
        p1889.playerMap.position.x = p1888.position.x;
        p1889.playerMap.position.y = p1888.position.y;
      }
      function f353(p1890, p1891, p1892) {
        var v1429 = Array.from(p1890.keys()).indexOf(p1891.sid);
        if (v1429 < 0) {
          v1429 = 0;
        }
        var v1430 = vA41[v1429 % vA41.length];
        var v1431 = `${v1429 + 1} - ${p1891.nickname.substring(0, 15)}`;
        var v1432 = new PIXI.Text(v1431, {
          fontFamily: "Arial",
          fontSize: 9.5,
          fill: v1430,
          align: "left"
        });
        v1432.position.y = v1429 * 13;
        w2c2020.friends.addChild(v1432);
        return v1432;
      }
      function f354(p1893, p1894) {
        var v1433 = Array.from(p1893.keys()).indexOf(p1894.sid);
        if (v1433 < 0) {
          v1433 = 0;
        }
        console.log("Index", v1433);
        var v1434 = vA41[v1433 % vA41.length];
        var v1435 = new PIXI.Graphics();
        v1435.id = p1894.sid;
        v1435.zIndex = 3;
        v1435.alpha = 1;
        v1435.beginFill(v1434, 1);
        v1435.drawCircle(0, 0, 3.5);
        v1435.endFill();
        v1435.position.x = p1894.position.x;
        v1435.position.y = p1894.position.y;
        w2c2020.conteinerTeam.addChild(v1435);
        return v1435;
      }
      var v1436 = new Map();
      var v1437 = null;
      var v1438 = null;
      var v_0x24979f = function f355() {
        v1436.forEach(function (p1895) {
          w2c2020.conteinerTeam.removeChild(p1895.playerMap);
          w2c2020.friends.removeChild(p1895.playerText);
        });
        v1436.clear();
        w2c2020.friends.alpha = 0;
      };
      var v_0x5c9a73 = function f356() {
        _wwcio.socket = false;
        v1438 = null;
        v1437 = null;
        v_0x24979f();
      };
      _wwcio.connect = function () {
        var vF1646 = f164(f151().m(function f357(p1896) {
          var v1439;
          var v1440;
          var v1441;
          var v1442;
          var v1443;
          return f151().w(function (p1897) {
            while (1) {
              switch (p1897.p = p1897.n) {
                case 0:
                  console.log(vO47.Ij.Rk.tk, p1896);
                  if (!v1438) {
                    p1897.n = 1;
                    break;
                  }
                  console.warn("Já conectado. Ignorando nova tentativa.");
                  return p1897.a(2);
                case 1:
                  v1439 = (bbs.con || "").match(/(wss:|ws:)\/\/(.*?)-(.*):(.*?)\//);
                  if (!v1439) {
                    v1439 = [];
                  }
                  if (!v1439 || !vA24.includes(v1439[2])) {
                    p1897.n = 6;
                    break;
                  }
                  _wwcio.leaderboardUpdated([], []);
                  v1440 = vLN090 ? "local" : v1439[2];
                  v1441 = _wwc._anApp.dh.hh.xg + (v1439[2] || "L") + (v1439[4] || "0");
                  _wwcio.player = new vF131(p1896 ? p1896.ae : userId, p1896 ? p1896.ma : "AN", v1441, 0, _wwcio.player.teamRoom);
                  p1897.p = 2;
                  v1437 = new vP7952.Client(vO38[v1440]);
                  p1897.n = 3;
                  return v1437.joinOrCreate("switch", {
                    tk: vO47.Ij.Rk.tk || "",
                    roomName: v1441,
                    player: _wwcio.player
                  });
                case 3:
                  v1438 = p1897.v;
                  _wwcio.socket = true;
                  _wwcio.player.sid = v1438.sessionId;
                  v1442 = function f358() {
                    if (!_wwcio.player.teamRoom || !v1438) {
                      w2c2020.friends.alpha = 0;
                      return;
                    }
                    v1438.send("team:join", {
                      teamRoom: _wwcio.player.teamRoom
                    });
                    var vF353 = f353(v1436, _wwcio.player, true);
                    v1436.set(_wwcio.player.sid, {
                      wid: _wwcio.player.wid,
                      playerMap: null,
                      playerText: vF353
                    });
                    w2c2020.friends.alpha = 1;
                    console.log("Conectado com Team!", _wwcio.player.teamRoom);
                  };
                  v1438.onMessage("ready", function (p1898) {
                    _wwcio.player.sid = p1898?.sid || v1438.sessionId;
                    _wwcio.leaderboardUpdated(p1898?.top10 || [], p1898?.top3 || []);
                    v1442();
                  });
                  v1438.onMessage("leaderboard", function (p1899) {
                    if (p1899 !== null && p1899 !== undefined && p1899.top10) {
                      _wwcio.leaderboardUpdated(p1899.top10, p1899.top3 || []);
                    }
                  });
                  v1438.onMessage("team:location", function (p1900) {
                    if (!p1900) {
                      return;
                    }
                    if (_wwcio.player && !_wwcio.player.teamRoom) {
                      v_0x24979f();
                      return;
                    }
                    var v1444 = v1436.get(p1900.sid);
                    if (!v1444) {
                      var v1445 = Array.from(v1436.values()).find(function (p1901) {
                        return p1901.wid === p1900.wid;
                      });
                      console.log("Player", v1445);
                      v1436.set(p1900.sid, {
                        wid: p1900.wid
                      });
                      var vF3532 = f353(v1436, p1900);
                      var vF354 = f354(v1436, p1900);
                      v1444 = v1436.get(p1900.sid);
                      v1444.playerMap = vF354;
                      v1444.playerText = vF3532;
                    }
                    f352(p1900, v1444);
                  });
                  v1438.onMessage("team:leave", function (p1902) {
                    console.log("Saiu do time", p1902);
                    var v1446 = v1436.get(p1902.sid);
                    if (v1446) {
                      w2c2020.conteinerTeam.removeChild(v1446.playerMap);
                      w2c2020.friends.removeChild(v1446.playerText);
                      v1436.delete(p1902.sid);
                    }
                  });
                  v1438.onMessage("error", function (p1903) {
                    console.log(p1903?.message || "Erro inesperado na conexão.");
                    v_0x5c9a73();
                  });
                  v1438.onLeave(function () {
                    console.warn("Desconectado.");
                    v_0x5c9a73();
                  });
                  v1438.onError(function (p1904, p1905) {
                    console.error("Erro de conexão:", p1904, p1905);
                    v_0x5c9a73();
                  });
                  p1897.n = 5;
                  break;
                case 4:
                  p1897.p = 4;
                  v1443 = p1897.v;
                  console.error("Erro: Servidor não disponível.", v1443?.message || v1443);
                  v_0x5c9a73();
                case 5:
                  p1897.n = 7;
                  break;
                case 6:
                  console.error("NO MATCH!");
                case 7:
                  return p1897.a(2);
              }
            }
          }, f357, null, [[2, 4]]);
        }));
        return function (p1906) {
          return vF1646.apply(this, arguments);
        };
      }();
      _wwcio.sendLocation = function (p1907) {
        if (!v1438) {
          return;
        }
        v1438.send("team:location", p1907);
      };
      _wwcio.update = function (p1908, p1909) {
        if (!v1438) {
          return;
        }
        if (p1908 >= 6) {
          p1908 = 1;
        }
        var v1447 = !!(p1908 & 2);
        var vLSUpdate = "update";
        if (v1447 && p1909) {
          vLSUpdate = "headshot";
        }
        if (typeof p1908 === "string") {
          vLSUpdate = p1908;
        }
        v1438.send("action", {
          action: vLSUpdate,
          player: _wwcio.player
        });
      };
      _wwcio.close = function () {
        if (!v1438) {
          return;
        }
        v1438.send("team:leave");
        setTimeout(function () {
          v1438.leave();
          v_0x5c9a73();
        }, 500);
      };
    }
  };
  var vO75 = {};
  function f359(p1910) {
    var v1448 = vO75[p1910];
    if (v1448 !== undefined) {
      return v1448.exports;
    }
    var v1449 = vO75[p1910] = {
      id: p1910,
      loaded: false,
      exports: {}
    };
    vO[p1910].call(v1449.exports, v1449, v1449.exports, f359);
    v1449.loaded = true;
    return v1449.exports;
  }
  (() => {
    f359.amdO = {};
  })();
  (() => {
    f359.n = p1911 => {
      var v1450 = p1911 && p1911.__esModule ? () => p1911.default : () => p1911;
      f359.d(v1450, {
        a: v1450
      });
      return v1450;
    };
  })();
  (() => {
    f359.d = (p1912, p1913) => {
      for (var v1451 in p1913) {
        if (f359.o(p1913, v1451) && !f359.o(p1912, v1451)) {
          Object.defineProperty(p1912, v1451, {
            enumerable: true,
            get: p1913[v1451]
          });
        }
      }
    };
  })();
  (() => {
    f359.g = function () {
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
    f359.hmd = p1914 => {
      p1914 = Object.create(p1914);
      if (!p1914.children) {
        p1914.children = [];
      }
      Object.defineProperty(p1914, "exports", {
        enumerable: true,
        set: () => {
          throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + p1914.id);
        }
      });
      return p1914;
    };
  })();
  (() => {
    f359.o = (p1915, p1916) => Object.prototype.hasOwnProperty.call(p1915, p1916);
  })();
  (() => {
    f359.r = p1917 => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(p1917, Symbol.toStringTag, {
          value: "Module"
        });
      }
      Object.defineProperty(p1917, "__esModule", {
        value: true
      });
    };
  })();
  var vF359 = f359("./src/temp.js");
    $("#mm-advice-cont").html("<div class=\"wormworld-connect-count-b32\" style=\"display: grid !important; grid-template-columns: 1fr 1fr 1fr;gap: 2px;\">\n    <input type=\"button\" value=\"F.SCREEN\" id=\"btnFullScreen\" style=\"background-image: linear-gradient(#00ffc7, #ff47fc); font-weight: bold;font-size: 13px; border-width: 0px; border-color: #ffffff; color: #fff; border-radius: 5px; margin-top: 5px; width: 100%; height: 35px;\" />\n    <input type=\"button\" value=\"RESPAWN\" onclick=\"respawnFn()\" style=\"background-image: linear-gradient(#00ffc7, #ff47fc); font-weight: bold;font-size: 13px; border-width: 0px; border-color: #ffffff; color: #fff; border-radius: 5px; margin-top: 5px; width: 100%; height: 35px;\" />\n    </div>");
const btn = document.getElementById("btnFullScreen");

btn.onclick = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};
})();

(function() {
    // 1. BBS ve Hafıza Ayarları
    window.bbs = window.bbs || {};
    let _internalFlx = parseInt(localStorage.getItem("gemini_flx")) || 2; 
    let _customBg = localStorage.getItem("gemini_bg") || ""; 

    // 2. CSS Güncelleme (Yeni Input alanı için)
    const style = document.createElement('style');
    style.innerHTML = `
        #gemini-modal {
            position: fixed; bottom: 90px; right: 20px;
            width: 240px; background: rgba(10, 10, 10, 0.98);
            border: 2px solid #00ffcc; border-radius: 12px;
            color: white; font-family: sans-serif; z-index: 1000001;
            padding: 15px; display: none; box-shadow: 0 0 20px #00ffcc44;
        }
        #gemini-modal.show { display: block; }
        #gemini-launcher {
            position: fixed; bottom: 20px; right: 20px;
            width: 50px; height: 50px; background: #00ffcc;
            border-radius: 50%; border: none; cursor: pointer;
            z-index: 1000002; display: flex; align-items: center; justify-content: center;
        }
        .m-title { font-size: 14px; color: #00ffcc; text-align: center; margin: 10px 0; font-weight: bold; border-top: 1px solid #333; padding-top: 10px; }
        .m-btn { padding: 8px; margin: 4px 0; background: #222; border-radius: 5px; cursor: pointer; text-align: center; font-size: 12px; }
        .m-btn.active { background: #00ffcc; color: black; font-weight: bold; }
        
        /* Arka Plan Input Alanı */
        .bg-input-wrap { display: flex; gap: 5px; margin-top: 5px; }
        #bg-url-input { 
            flex: 1; background: #111; border: 1px solid #444; color: #eee; 
            padding: 5px; font-size: 11px; border-radius: 4px;
        }
        .bg-apply-btn { background: #00ffcc; color: black; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; font-size: 11px; }
    `;
    document.head.appendChild(style);

    window.setFlex = function(val) {
        _internalFlx = val;
        window.bbs.flx = val;
        localStorage.setItem("gemini_flx", val);
        updateUI();
    };

    function updateUI() {
        document.querySelectorAll('.m-btn').forEach(b => b.classList.remove('active'));
        const activeBtn = document.getElementById(`btn-${_internalFlx}`);
        if (activeBtn) activeBtn.classList.add('active');
    }

    // Başlangıçta varsa eski arka planı yükle
    if(_customBg) {
        setTimeout(() => window.applyCustomBackground(_customBg), 1000);
    }

    // Tuş Takibi
    window.addEventListener('keydown', (e) => {
        if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
        if (e.key.toLowerCase() === "p") modal.classList.toggle('show');
        if (e.key.toLowerCase() === "e") setFlex((_internalFlx % 3) + 1);
    }, true);

    // 6. v864 Hijack (Flexleri korumak için)
    const checkInterval = setInterval(() => {
        if (typeof v864 !== 'undefined' && v864.prototype.activeFlex) {
            v864.prototype.activeFlex = function (_0x17b4d1, _0xf92d8b, _0xaa299d, _0x2478a0) {
                this.pwr_flex1.xc.visible = (window.bbs.flx === 1);
                this.pwr_flex2.xc.visible = (window.bbs.flx === 2);
                this.pwr_flex3.xc.visible = (window.bbs.flx === 3);
                this.pwr_flex1.xc.alpha = 1; this.pwr_flex2.xc.alpha = 1; this.pwr_flex3.xc.alpha = 1;
                this.pwr_flex1.Tc(_0xf92d8b); this.pwr_flex2.Tc(_0xf92d8b); this.pwr_flex3.Tc(_0xf92d8b);
            };
            clearInterval(checkInterval);
        }
    }, 500);

    updateUI();
})();

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

                    const customResponse = `
                    <style>

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

  #game-wrap #game-cont #stretch-box #main-menu-view .line-bottom #mm-wwc {

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

    border: 1px solid #00fff7;
    box-shadow: 0 0 8px 2px rgba(0, 255, 247, 0.5), 0 0 15px 4px rgba(0, 255, 247, 0.3);

    border-radius: 15px;

  }

<style>


  #idReplaceSkin button:hover {

    background-color: #eb991c;

    color: #000;

    box-shadow: 0 0 6px 3px rgba(235, 153, 28, 0.7);
    transition: all 0.3s ease;

    border: 1px solid #cfcfcf;

  }

</style>



<div style="position: relative; padding: 10px; background: linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%); border-radius: 22px;">

  <h2 style="text-align: center; color: #00ccff; margin: 0 0 12px 0; font-size: 18px; font-weight: bold; text-shadow: 0 0 8px rgba(0, 200, 255, 0.4);">⚙️</h2>

  <button style="background: linear-gradient(135deg, #ff4444, #cc0000); color: #fff; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.2); position: absolute; top: 8px; right: 8px; font-size: 12px;" id="mm-wwc-close">

    ✕

  </button>

  <div style="margin-bottom: 10px; background: white; padding: 8px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); clear: both; margin-top: 5px;">

    <label style="font-weight: bold; color: #333; font-size: 12px; display: block; margin-bottom: 4px;">📋 ID:</label>

    <div style="display: flex; gap: 6px; align-items: center;">

      <input type="text" value="${bbs.userId}" id="wormate_id" readonly style="flex: 1; padding: 5px; border: 1px solid #00ccff; border-radius: 4px; background: #f0f8ff; font-family: monospace; font-size: 11px;" />

      <button onclick="navigator.clipboard.writeText('${bbs.userId}')" style="background: #4CAF50; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.2); font-size: 11px;">COPY</button>

    </div>

  </div>

  

    

      <form name="formSkin" method="POST" enctype="multipart/form-data" style="background: white; padding: 8px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 10px;">

        <label style="font-weight: bold; color: #333; font-size: 12px; display: block; margin-bottom: 4px;">📁 File:</label>

        <input id="fileSkin" type="file" accept="application/json" style="padding: 5px; border: 1px solid #00ccff; border-radius: 4px; width: 100%; box-sizing: border-box; font-size: 11px;" />

      </form>

      
        <div class="page-set-worm-world" style="color: black;">

          <div class="group-tab-button">

            <div id="tab_b1" class="tab-button active" onclick="changeTab(0)">

              SET

            </div>

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

        <label>TOP 3</label>

        <input type="checkbox" id="onlytop" />

    </div>

</div>

            <div class="setting-item" style="text-align: right;">

              <span class="setting-label"><i class="fas fa-desktop" style="color: #ffbb00;"></i>Screen:</span>

              <select id="hudPositionMode">

                <option value="0">100%</option>

                <option value="1">75%</option>

                <option value="2">Center</option>

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

    <span style="float: right; cursor: pointer; font-size: 24px; font-weight: bold; color: #fff;" id="mm-wwc-close">&times;</span>

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

        let id_item = "SKIN_" + t.id + "_xo"

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

            name: { en: "CUSTOM SKIN " + (t.skins.length) },

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



  if (document.getElementById("mm-wwc-close")) {

    document.getElementById("mm-wwc-close").addEventListener("click", closeWwcSetView);

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

</script>
`;








// Headshot Simulator for WormWorld.io

// Updated version with improved features from original game code



// Global configuration

const HeadshotSimulator = {

  // Configuration

  config: {

    defaultCount: 1000000,

    delayBetween: 400, // تم تعديل الوقت إلى 1000 مللي ثانية

    soundEnabled: true,

    visualEnabled: true,

    logEnabled: true,

    soundVolume: 0.0, // تم زيادة مستوى الصوت للسماع

    keyBinding: 'h'

  },

  

  // State

  state: {

    running: false,

    sentCount: 0,

    targetCount: 0,

    startTime: 0,

    floatingTexts: [] // لتتبع النصوص العائمة

  },

  

  // Initialize the simulator

  init: function() {

    this.setupKeyBinding();

    // Silent initialization - no UI message

    return this;

  },

  

  // Setup keyboard shortcut

  setupKeyBinding: function() {

    // إزالة أي مستمع موجود لتجنب التكرار

    try {

      if (this._eventListenerAdded) {

        document.removeEventListener('keydown', this._keyDownHandler);

      }

    } catch (e) {

      // تجاهل الأخطاء هنا

    }

    

    // إنشاء معالج جديد يغلق على هذا

    const self = this;

    this._keyDownHandler = function(event) {

      if (event.key.toLowerCase() === self.config.keyBinding.toLowerCase()) {

        self.start();

        event.preventDefault();

      }

    };

    

    // إضافة المستمع الجديد

    document.addEventListener('keydown', this._keyDownHandler);

    this._eventListenerAdded = true;

  },

  

  // Start simulation with optional count

  start: function(count) {

    if (this.state.running) {

      // Silent - no UI message

      return false;

    }

    

    // Validate game state

    if (!this.validateGameState()) {

      return false;

    }

    

    // Initialize simulation

    this.state.running = true;

    this.state.sentCount = 0;

    this.state.targetCount = count || this.config.defaultCount;

    this.state.startTime = Date.now();

    

    // No initialization message

    this.simulateNext();

    return true;

  },

  

  // Start with just 2 headshots

  startTwoHeadshots: function() {

    if (this.state.running) {

      // Already running

      return false;

    }

    

    // Validate game state

    if (!this.validateGameState()) {

      return false;

    }

    

    // Initialize simulation

    this.log("Starting 2 headshots with interval");

    

    // First headshot immediately

    this.simulateHeadshot();

    this.log("Headshot 1/2 simulated", "success");

    

    // Second headshot after delay

    setTimeout(() => {

      this.simulateHeadshot();

      this.log("Headshot 2/2 simulated", "success");

      

      // Continue with normal simulation if needed   ////

      this.log("Two headshots completed, continuing normal operation");

    }, this.config.delayBetween);

    

    return true;

  },

  

  // Validate the current game state

  validateGameState: function() {

    if (!window._wwc || !window._wwc._anApp) {

      this.log("Error: Game not properly initialized or not in-game", "error");

      return false;

    }

    

    // Check if we're in the game by checking for player existence

    if (!window._wwcio || !window._wwcio.player || !window.bbs) {

      this.log("Error: Player not initialized or not in-game", "error");

      return false;

    }

    

    return true;

  },

  

  // Simulate next headshot

  simulateNext: function() {

    if (!this.state.running || this.state.sentCount >= this.state.targetCount) {

      this.complete();

      return;

    }

    

    // Increment counter

    this.state.sentCount++;

    

    // Perform simulation

    try {

      this.simulateHeadshot();

      this.log(`Headshot ${this.state.sentCount}/${this.state.targetCount} simulated`, "success");

      

      // Schedule next with delay

      setTimeout(() => this.simulateNext(), this.config.delayBetween);

    } catch (error) {

      this.log("Error in headshot simulation: " + error.message, "error");

      this.complete();

    }

  },

  

  // Complete the simulation

  complete: function() {

    if (!this.state.running) return;

    

    const duration = ((Date.now() - this.state.startTime) / 1000).toFixed(1);

    this.log(`Simulation complete! ${this.state.sentCount} headshots in ${duration}s`);

    

    // Reset state

    this.state.running = false;

    

    // Save to localStorage

    if (window.bbs) {

      localStorage.setItem("wwcSaveGame", JSON.stringify(window.bbs));

    }

  },

  

  // Core simulation function - UPDATED to match original game logic

  simulateHeadshot: function() {

    // التحقق من حالة اللعبة

    if (!this.validateGameState()) {

      this.log("Game state is no longer valid, stopping simulation", "error");

      this.state.running = false;

      return;

    }

    

    try {

      // استدعاء الدالة الأصلية fnSetCounts من اللعبة إذا كانت متاحة

      if (window._wwc && typeof window._wwc.fnSetCounts === 'function') {

        window._wwc.fnSetCounts("count", true);

      } else {

        // تحديث العدادات يدويًا إذا لم تكن الدالة متاحة

        this.updateCountersManually();

      }

      

      // تحديث نتيجة اللاعب إذا كان ممكنًا

      try {

        if (window._wwcio && window._wwcio.update) {

          window._wwcio.update("headshot");

        }

      } catch (e) {

        this.log("Couldn't update player score", "warn");

      }

      

      // تشغيل صوت headshot - مع دعم للصوت الخاص كل 10 headshots

      if (this.config.soundEnabled) {

        this.playHeadshotSound();

      }

      

      // تنشيط التأثير المرئي إذا كان ممكّنًا

      if (this.config.visualEnabled) {

        this.triggerVisualEffect();

      }

    } catch (error) {

      this.log("Error in headshot simulation: " + error.message, "error");

    }

  },

  

  // NEW: Update counters manually if original function is not available

  updateCountersManually: function() {

    if (window.bbs) {

      // Update all relevant counters like the original game

      window.bbs.headshot = (window.bbs.headshot || 0) + 1;

      window.bbs.theadshot = (window.bbs.theadshot || 0) + 1;

      

      // Update HOL (Highest headshot count) like original game

      window.bbs.HOL = window.bbs.headshot > (window.bbs.HOL || 0) ? window.bbs.headshot : (window.bbs.HOL || 0);

      

      // Try to update the UI counters if setCountGame function exists

      try {

        if (window._wwc && typeof window._wwc.setCountGame === 'function') {

          window._wwc.setCountGame(

            window.bbs.kill || 0,

            window.bbs.headshot || 0,

            window.bbs.tkill || 0,

            window.bbs.theadshot || 0

          );

        }

      } catch (e) {

        this.log("Couldn't update counters in UI", "warn");

      }

      

      // Save to localStorage like original game

      localStorage.setItem("wwcSaveGame", JSON.stringify(window.bbs));

    }

  },

  

  // UPDATED: Play headshot sound to match original game logic

  playHeadshotSound: function() {

    try {

      // Logic from original game: play special sound every 10 headshots

      const isSpecialSound = window.bbs && window.bbs.headshot && !(window.bbs.headshot % 10);

      const soundType = isSpecialSound ? "shaokahn" : "headshot";

      

      // Try to use original game sound system first

      if (window._0x49249a && typeof window._0x49249a.fxdo === 'function') {

        window._0x49249a.fxdo(soundType);

        return;

      } 

      // Second approach - direct Howl objects if available

      else if (window._0x49249a) {

        if (isSpecialSound && window._0x49249a.shaokahn && window._0x49249a.shaokahn.play) {

          window._0x49249a.shaokahn.play();

          return;

        } else if (window._0x49249a.headshot && window._0x49249a.headshot.play) {

          window._0x49249a.headshot.play();

          return;

        }

      }

      

      // Fallback to direct audio playback

      const soundFile = isSpecialSound ? 

        "/sounds/shaokahn_sound_effect.mp3" : 

        "/sounds/headshot_sound_effect.mp3";

      

      const audioElement = document.createElement("audio");

      audioElement.src = (window.URL_CDN || "") + soundFile;

      audioElement.volume = this.config.soundVolume;

      audioElement.play();

    } catch (error) {

      this.log("Couldn't play sound: " + error.message, "warn");

    }

  },

  

  // UPDATED: Trigger visual effect to match original game

  triggerVisualEffect: function() {

    try {

      // Check if we can access the game's UI functions

      if (window._wwc && window._wwc._anApp && typeof window._wwc._anApp.addChild === 'function') {

        // This is just a simulation - no actual floating text is added

        this.log("Floating headshot text would appear now", "info");

      } else {

        this.log("Visual effect triggered silently", "info");

      }

    } catch (error) {

      this.log("Error triggering visual effect: " + error.message, "warn");

    }

  },

  

  // Logging utility - only logs to console, not UI

  log: function(message, type = "info") {

    if (!this.config.logEnabled) return;

    

    const prefix = "🎯 HeadshotSim: ";

    

    switch (type) {

      case "error":

        console.error(prefix + message);

        break;

      case "warn":

        console.warn(prefix + message);

        break;

      default:

        console.log(prefix + message);

    }

  }

};



// تهيئة المحاكي عندما تكون الصفحة جاهزة

(() => {

  // تنظيف أي نسخة سابقة إذا كانت موجودة

  if (window.HeadshotSimulator && window.HeadshotSimulator._cleanupFn) {

    try {

      window.HeadshotSimulator._cleanupFn();

    } catch (e) {

      console.log("Error cleaning up previous simulator:", e);

    }

  }



  // إزالة أي عنصر toast موجود من إصدارات سابقة

  const oldToast = document.getElementById('headshot-toast');

  if (oldToast && oldToast.parentNode) {

    oldToast.parentNode.removeChild(oldToast);

  }



  // انتظر لحظة حتى تتم تهيئة اللعبة

  setTimeout(() => {

    // تهيئة المحاكي بصمت

    HeadshotSimulator.init();

    

    // دالة التنظيف لفصل الأحداث

    HeadshotSimulator._cleanupFn = function() {

      try {

        if (HeadshotSimulator._eventListenerAdded) {

          document.removeEventListener('keydown', HeadshotSimulator._keyDownHandler);

          HeadshotSimulator._eventListenerAdded = false;

        }

      } catch (e) {

        console.log("Error during cleanup:", e);

      }

    };

  }, 3000);

})();



// جعله متاح من خلال متغير عالمي

window.HeadshotSimulator = HeadshotSimulator;



// لاستخدام وظيفة الـ headshots الثنائية:

 HeadshotSimulator.startTwoHeadshots();



// أو للسلوك العادي:

 HeadshotSimulator.start(10);


// ==UserScript==
// @name         WormWorld.io - Auto Eat/Grow Bot
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Press 'p' to start/stop auto-eating and growing fast.
// @author       Your Name
// @match        *://wormworld.io/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function( ) {
    'use strict';

    // --- الإعدادات ---
    const TOGGLE_KEY = 'p';       // الزر لتفعيل/إلغاء التفعيل
    const EAT_INTERVAL = 10;      // مللي ثانية (رقم أقل = أسرع)
    const FOOD_PER_TICK = 500;    // كمية الطعام التي تتم محاكاتها في كل مرة

    let isBotActive = false;
    let botInterval = null;

    // دالة للتحقق من أن اللاعب في اللعبة
    function isPlayerReady() {
        return window._wwcio && window._wwcio.player && window._wwcio.player.alive;
    }

    // هذه هي الدالة الأساسية التي تحاكي أكل الطعام
    // تستخدم الدالة الداخلية للعبة `fnSetCounts` إذا كانت موجودة
    function simulateEating() {
        if (!isPlayerReady()) {
            stopBot();
            console.log("تم إيقاف البوت تلقائيًا (اللاعب ليس في اللعبة).");
            return;
        }

        try {
            // الطريقة الأولى (الأكثر استقرارًا): استخدام دالة اللعبة الداخلية
            if (window._wwc && typeof window._wwc.fnSetCounts === 'function') {
                // "food" هو اسم الحدث الذي تستخدمه اللعبة عند أكل الطعام
                // الرقم الثاني هو الكمية
                window._wwc.fnSetCounts("food", FOOD_PER_TICK);
            }
            // الطريقة الثانية (احتياطية): تعديل المتغير مباشرة
            else if (window._wwcio && window._wwcio.player) {
                window._wwcio.player.food += FOOD_PER_TICK;
                // يجب استدعاء دالة تحديث السكور يدويًا إذا كانت موجودة
                if (typeof window.setScore === 'function') {
                    window.setScore(window._wwcio.player.food);
                }
            } else {
                console.error("لم يتم العثور على طريقة لمحاكاة الأكل.");
                stopBot();
            }
        } catch (e) {
            console.error("حدث خطأ أثناء محاكاة الأكل:", e);
            stopBot();
        }
    }

    // دالة لبدء البوت
    function startBot() {
        if (isBotActive) return;

        if (!isPlayerReady()) {
            console.error("لا يمكن بدء البوت. ابدأ اللعبة أولاً.");
            return;
        }

        isBotActive = true;
        // تكرار دالة الأكل كل فترة زمنية محددة
        botInterval = setInterval(simulateEating, EAT_INTERVAL);
        console.log("تم تفعيل بوت النمو. اضغط على 'p' للإيقاف.");
    }

    // دالة لإيقاف البوت
    function stopBot() {
        if (!isBotActive) return;

        isBotActive = false;
        clearInterval(botInterval);
        botInterval = null;
        console.log("تم إيقاف بوت النمو.");
    }

    // مراقبة الضغط على الأزرار
    document.addEventListener('keydown', function(event) {
        // تجنب التفعيل عند الكتابة في الدردشة
        if (event.key.toLowerCase() === TOGGLE_KEY && event.target.tagName !== 'INPUT') {
            event.preventDefault();

            if (isBotActive) {
                stopBot();
            } else {
                startBot();
            }
        }
    });

    console.log(`تم تحميل بوت النمو للعبة WormWorld.io. اضغط على '${TOGGLE_KEY}' للبدء/الإيقاف.`);

})();










                    

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

(function() {
    const confettiURL = "https://wormate.io/images/confetti-xmas2022.png";
    const targetId = "game-cont";
    const bgLayerId = "game-wandering-confetti";
    
    const gameCont = document.getElementById(targetId);
    if (!gameCont) return;

    // Kapsayıcı ayarları
    if (getComputedStyle(gameCont).position === "static") gameCont.style.position = "relative";
    gameCont.style.overflow = "hidden";

    let bgLayer = document.getElementById(bgLayerId);
    if (!bgLayer) {
        bgLayer = document.createElement("div");
        bgLayer.id = bgLayerId;
        bgLayer.style.cssText = `
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            z-index: 0; pointer-events: none;
            background-image:linear-gradient(356deg, rgb(0 0 0), rgb(0 58 123))
        `;
        gameCont.prepend(bgLayer);
    }

    // Gezinme (Wandering) Animasyonu
    if (!document.getElementById("confetti-wander-style")) {
        const style = document.createElement("style");
        style.id = "confetti-wander-style";
        style.textContent = `
            .wander-item {
                position: absolute;
                background-image: url('${confettiURL}');
                background-size: contain;
                background-repeat: no-repeat;
                will-change: transform;
                opacity: 0.8;
                animation: wanderAround linear infinite alternate;
            }

            @keyframes wanderAround {
                0% { transform: translate(0, 0) rotate(0deg); }
                25% { transform: translate(50px, -100px) rotate(90deg); }
                50% { transform: translate(-30px, -200px) rotate(180deg); }
                75% { transform: translate(40px, -350px) rotate(270deg); }
                100% { transform: translate(0, -500px) rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    const count = 40;
    for (let i = 0; i < count; i++) {
        const conf = document.createElement("div");
        conf.className = "wander-item";
        
        // Boyutlandırma (Orta ve Büyük)
        const size = Math.random() * 30 + 25; // 25px - 55px
        
        conf.style.width = size + "px";
        conf.style.height = size + "px";
        
        // Rastgele başlangıç pozisyonu (Alt tarafa yayılmış)
        conf.style.left = Math.random() * 100 + "%";
        conf.style.top = (Math.random() * 100 + 100) + "%"; 
        
        // Hız ve Gezinme Genişliği
        const duration = Math.random() * 10 + 15; // 15-25 saniye (yavaş ve akıcı)
        const delay = Math.random() * -20; // Animasyonun farklı yerlerden başlaması için
        
        conf.style.animationDuration = duration + "s";
        conf.style.animationDelay = delay + "s";
        
        // Hafif farklı gezinme varyasyonları için her birine rastgele scale ekleyelim
        conf.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
        
        bgLayer.appendChild(conf);
    }
})();