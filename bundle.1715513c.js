// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"dist/bundle.js":[function(require,module,exports) {
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e4) { throw _e4; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e5) { didErr = true; err = _e5; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var s = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var s in e) {
      n.d(r, s, function (t) {
        return e[t];
      }.bind(null, s));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "dist", n(n.s = 0);
}([function (e, t, n) {
  "use strict";

  n.r(t);

  var r = /*#__PURE__*/function () {
    function r(e, t, n, _r) {
      _classCallCheck(this, r);

      this.templateElement = document.getElementById(e), this.hostElement = document.getElementById(t);
      var s = document.importNode(this.templateElement.content, !0);
      this.element = s.firstElementChild, _r && (this.element.id = _r), this.attach(n);
    }

    _createClass(r, [{
      key: "attach",
      value: function attach(e) {
        this.hostElement.insertAdjacentElement(e ? "afterbegin" : "beforeend", this.element);
      }
    }]);

    return r;
  }();

  function s(e) {
    var t = !0;
    return e.required && (t = t && 0 !== e.value.toString().trim().length), null != e.minLength && "string" == typeof e.value && (t = t && e.value.length > e.minLength), null != e.maxLength && "string" == typeof e.value && (t = t && e.value.length < e.maxLength), null != e.min && "number" == typeof e.value && (t = t && e.value > e.min), null != e.max && "number" == typeof e.value && (t = t && e.value < e.max), t;
  }

  function i(e, t, n) {
    var r = n.value;
    return {
      configurable: !0,
      get: function get() {
        return r.bind(this);
      }
    };
  }

  var o;
  !function (e) {
    e[e.Active = 0] = "Active", e[e.Finished = 1] = "Finished";
  }(o || (o = {}));

  var l = function l(e, t, n, r, s) {
    _classCallCheck(this, l);

    this.id = e, this.title = t, this.description = n, this.people = r, this.status = s;
  };

  var a = /*#__PURE__*/function (_ref) {
    _inherits(a, _ref);

    var _super = _createSuper(a);

    function a() {
      var _this;

      _classCallCheck(this, a);

      _this = _super.call(this), _this.projects = [];
      return _this;
    }

    _createClass(a, [{
      key: "addProject",
      value: function addProject(e, t, n) {
        var r = new l(Math.random().toString(), e, t, n, o.Active);
        this.projects.push(r), this.updateListeners();
      }
    }, {
      key: "moveProject",
      value: function moveProject(e, t) {
        var n = this.projects.find(function (t) {
          return t.id === e;
        });
        n && n.status !== t && (n.status = t, this.updateListeners());
      }
    }, {
      key: "updateListeners",
      value: function updateListeners() {
        var _iterator = _createForOfIteratorHelper(this.listeners),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _e = _step.value;

            _e(this.projects.slice());
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }], [{
      key: "getInstance",
      value: function getInstance() {
        return this.instance || (this.instance = new a()), this.instance;
      }
    }]);

    return a;
  }( /*#__PURE__*/function () {
    function _class() {
      _classCallCheck(this, _class);

      this.listeners = [];
    }

    _createClass(_class, [{
      key: "addListener",
      value: function addListener(e) {
        this.listeners.push(e);
      }
    }]);

    return _class;
  }());

  var c = a.getInstance();

  var u = function u(e, t, n, r) {
    var s,
        i = arguments.length,
        o = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
    if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);else for (var l = e.length - 1; l >= 0; l--) {
      (s = e[l]) && (o = (i < 3 ? s(o) : i > 3 ? s(t, n, o) : s(t, n)) || o);
    }
    return i > 3 && o && Object.defineProperty(t, n, o), o;
  };

  var d = /*#__PURE__*/function (_r2) {
    _inherits(d, _r2);

    var _super2 = _createSuper(d);

    function d() {
      var _this2;

      _classCallCheck(this, d);

      _this2 = _super2.call(this, "project-input", "app", !0, "user-input"), _this2.titleInputElement = _this2.element.querySelector("#title"), _this2.descriptionInputElement = _this2.element.querySelector("#description"), _this2.peopleInputElement = _this2.element.querySelector("#people"), _this2.configure();
      return _this2;
    }

    _createClass(d, [{
      key: "configure",
      value: function configure() {
        this.element.addEventListener("submit", this.submitHandler);
      }
    }, {
      key: "renderContent",
      value: function renderContent() {}
    }, {
      key: "gatherUserInput",
      value: function gatherUserInput() {
        var e = this.titleInputElement.value,
            t = this.descriptionInputElement.value,
            n = this.peopleInputElement.value,
            r = {
          value: t,
          required: !0,
          minLength: 5
        },
            i = {
          value: +n,
          required: !0,
          min: 1,
          max: 5
        };
        return s({
          value: e,
          required: !0
        }) && s(r) && s(i) ? [e, t, +n] : void alert("Invalid input, please try again");
      }
    }, {
      key: "clearInputs",
      value: function clearInputs() {
        this.titleInputElement.value = "", this.descriptionInputElement.value = "", this.peopleInputElement.value = "";
      }
    }, {
      key: "submitHandler",
      value: function submitHandler(e) {
        e.preventDefault();
        var t = this.gatherUserInput();

        if (Array.isArray(t)) {
          var _t = _slicedToArray(t, 3),
              _e2 = _t[0],
              _n = _t[1],
              _r3 = _t[2];

          c.addProject(_e2, _n, _r3), this.clearInputs();
        }
      }
    }]);

    return d;
  }(r);

  u([i], d.prototype, "submitHandler", null);

  var p = function p(e, t, n, r) {
    var s,
        i = arguments.length,
        o = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
    if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);else for (var l = e.length - 1; l >= 0; l--) {
      (s = e[l]) && (o = (i < 3 ? s(o) : i > 3 ? s(t, n, o) : s(t, n)) || o);
    }
    return i > 3 && o && Object.defineProperty(t, n, o), o;
  };

  var h = /*#__PURE__*/function (_r4) {
    _inherits(h, _r4);

    var _super3 = _createSuper(h);

    function h(e, t) {
      var _this3;

      _classCallCheck(this, h);

      _this3 = _super3.call(this, "single-project", e, !1, t.id), _this3.project = t, _this3.configure(), _this3.renderContent();
      return _this3;
    }

    _createClass(h, [{
      key: "dragStartHandler",
      value: function dragStartHandler(e) {
        e.dataTransfer.setData("text/plain", this.project.id), e.dataTransfer.effectAllowed = "move";
      }
    }, {
      key: "dragEndHandler",
      value: function dragEndHandler(e) {
        console.log("DragEnd");
      }
    }, {
      key: "configure",
      value: function configure() {
        this.element.addEventListener("dragstart", this.dragStartHandler), this.element.addEventListener("dragend", this.dragEndHandler);
      }
    }, {
      key: "renderContent",
      value: function renderContent() {
        this.element.querySelector("h2").textContent = this.project.title, this.element.querySelector("h3").textContent = this.persons + "assigned", this.element.querySelector("p").textContent = this.project.description;
      }
    }, {
      key: "persons",
      get: function get() {
        return 1 === this.project.people ? "1 person" : this.project.people + " persons";
      }
    }]);

    return h;
  }(r);

  p([i], h.prototype, "dragStartHandler", null);

  var f = function f(e, t, n, r) {
    var s,
        i = arguments.length,
        o = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
    if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);else for (var l = e.length - 1; l >= 0; l--) {
      (s = e[l]) && (o = (i < 3 ? s(o) : i > 3 ? s(t, n, o) : s(t, n)) || o);
    }
    return i > 3 && o && Object.defineProperty(t, n, o), o;
  };

  var m = /*#__PURE__*/function (_r5) {
    _inherits(m, _r5);

    var _super4 = _createSuper(m);

    function m(e) {
      var _this4;

      _classCallCheck(this, m);

      _this4 = _super4.call(this, "project-list", "app", !1, e + "-projects"), _this4.type = e, _this4.assignedProjects = [], _this4.configure(), _this4.renderContent();
      return _this4;
    }

    _createClass(m, [{
      key: "dragOverHandler",
      value: function dragOverHandler(e) {
        if (e.dataTransfer && "text/plain" === e.dataTransfer.types[0]) {
          e.preventDefault();
          this.element.querySelector("ul").classList.add("droppable");
        }
      }
    }, {
      key: "dropHandler",
      value: function dropHandler(e) {
        var t = e.dataTransfer.getData("text/plain");
        c.moveProject(t, "active" === this.type ? o.Active : o.Finished);
      }
    }, {
      key: "dragLeaveHandler",
      value: function dragLeaveHandler(e) {
        this.element.querySelector("ul").classList.remove("droppable");
      }
    }, {
      key: "configure",
      value: function configure() {
        var _this5 = this;

        this.element.addEventListener("dragover", this.dragOverHandler), this.element.addEventListener("dragleave", this.dragLeaveHandler), this.element.addEventListener("drop", this.dropHandler), c.addListener(function (e) {
          var t = e.filter(function (e) {
            return "active" === _this5.type ? e.status === o.Active : e.status === o.Finished;
          });
          _this5.assignedProjects = t, _this5.renderProjects();
        });
      }
    }, {
      key: "renderContent",
      value: function renderContent() {
        var e = this.type + "-projects-list";
        this.element.querySelector("ul").id = e, this.element.querySelector("h2").textContent = this.type.toUpperCase() + "PROJECTS";
      }
    }, {
      key: "renderProjects",
      value: function renderProjects() {
        document.getElementById(this.type + "-projects-list").innerHTML = "";

        var _iterator2 = _createForOfIteratorHelper(this.assignedProjects),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _e3 = _step2.value;
            new h(this.element.querySelector("ul").id, _e3);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }]);

    return m;
  }(r);

  f([i], m.prototype, "dragOverHandler", null), f([i], m.prototype, "dropHandler", null), f([i], m.prototype, "dragLeaveHandler", null), new d(), new m("active"), new m("finished");
}]);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "44333" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","dist/bundle.js"], null)
//# sourceMappingURL=/bundle.1715513c.js.map