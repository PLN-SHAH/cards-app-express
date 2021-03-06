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
})({"js/Card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card =
/*#__PURE__*/
function () {
  function Card(title, text, category) {
    _classCallCheck(this, Card);

    this.title = title;
    this.text = text;
    this.category = category;
    this.render();
    this.createButton();
  }

  _createClass(Card, [{
    key: "createButton",
    value: function createButton() {
      var buttonDelete = document.createElement("button");
      buttonDelete.className = "card__button-close";
      buttonDelete.innerHTML = "x";
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var buttonDelete = document.createElement("button");
      var cardsContainer = document.querySelector(".cards");
      var cardHTML = document.createElement("section");
      var cardMeta = document.createElement("section");
      cardHTML.className = "card";
      buttonDelete.className = "card__button-close";
      buttonDelete.innerHTML = "x";
      buttonDelete.addEventListener("click", function (event) {
        //delete on server
        fetch("/cards/", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          //req.body
          body: JSON.stringify({
            category: _this.category,
            title: _this.title,
            text: _this.text
          })
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          return console.log("this is data obj", data);
        }); //delete from dom

        event.target.parentNode.remove();
      });
      cardMeta.classList = "card__meta";
      cardMeta.innerHTML = "<span class=\"card__category\"> ".concat(this.category, "</span>");
      cardMeta.appendChild(buttonDelete);
      cardHTML.innerHTML = "<h3 class=\"card__title\">".concat(this.title, "</h3>\n                          <p class=\"card__text\">").concat(this.text, "</p> ");
      cardHTML.insertAdjacentElement("afterbegin", cardMeta);
      cardsContainer.appendChild(cardHTML);
    }
  }]);

  return Card;
}();

exports.Card = Card;
},{}],"js/CardList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardList = void 0;

var _Card = require("./Card");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var cardsContainer = document.querySelector(".cards");

var CardList =
/*#__PURE__*/
function () {
  function CardList() {
    _classCallCheck(this, CardList);

    this.clearList();
    this.renderList();
  }

  _createClass(CardList, [{
    key: "clearList",
    value: function clearList() {
      cardsContainer.innerHTML = "";
    }
  }, {
    key: "renderList",
    value: function renderList() {
      fetch("/cards").then(function (res) {
        return res.json();
      }).then(function (data) {
        data.forEach(function (card) {
          new _Card.Card(card.title, card.text, card.category);
          console.log(card.category);
        });
      });
    }
  }]);

  return CardList;
}();

exports.CardList = CardList;
},{"./Card":"js/Card.js"}],"js/Form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

var _CardList = require("./CardList.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var form = document.querySelector(".card-form");

var Form =
/*#__PURE__*/
function () {
  function Form() {
    _classCallCheck(this, Form);

    this.render();
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      this.createInput(form);
      this.createTextArea(form);
      this.createCategory(form);
      this.createSubmitButton(form);
    }
  }, {
    key: "createTextArea",
    value: function createTextArea() {
      var sectionTextarea = document.createElement("section");
      var textarea = document.createElement("textarea");
      var label = document.createElement("label");
      sectionTextarea.classList = "card-form__text";
      textarea.classList = "card-form__textarea";
      label.innerHTML = "Card title";
      textarea.name = "text";
      textarea.placeholder = "type in text here";
      sectionTextarea.appendChild(label);
      sectionTextarea.appendChild(textarea);
      form.appendChild(sectionTextarea);
    }
  }, {
    key: "createInput",
    value: function createInput() {
      var inputTitle = document.createElement("input");
      var label = document.createElement("label");
      var sectionInput = document.createElement("section");
      sectionInput.classList = "card-form__title";
      label.innerHTML = "Card title";
      inputTitle.classList = "card-form__title__input";
      inputTitle.type = "text";
      inputTitle.name = "title";
      inputTitle.placeholder = "type in title here";
      inputTitle.required = " true";
      sectionInput.appendChild(label);
      sectionInput.appendChild(inputTitle);
      form.appendChild(sectionInput);
    }
  }, {
    key: "createCategory",
    value: function createCategory() {
      var sectionCategory = document.createElement("section");
      var label = document.createElement("label");
      var inputCategory = document.createElement("input");
      sectionCategory.classList = "card-form__category";
      inputCategory.classList = "card-form__category__input";
      label.innerHTML = "Category";
      inputCategory.type = "text";
      inputCategory.name = "category";
      inputCategory.required = " true";
      sectionCategory.appendChild(label);
      sectionCategory.appendChild(inputCategory);
      form.appendChild(sectionCategory);
    }
  }, {
    key: "createSubmitButton",
    value: function createSubmitButton() {
      var button = document.createElement("button");
      button.classList = "card-form__button";
      button.type = "submit";
      button.innerHTML = "Create new card";
      form.appendChild(button);
    }
  }]);

  return Form;
}();

exports.Form = Form;
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var _event$target = event.target,
      titleEl = _event$target.title,
      textEl = _event$target.text,
      categoryEl = _event$target.category;
  fetch("/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      category: categoryEl,
      title: titleEl.value,
      text: textEl.value
    })
  });
  new _CardList.CardList();
});
},{"./CardList.js":"js/CardList.js"}],"main.js":[function(require,module,exports) {
"use strict";

var _CardList = require("./js/CardList.js");

var _Form = require("./js/Form.js");

new _Form.Form();
new _CardList.CardList();
var cardCategoryHTML = document.querySelector(".card__category");
},{"./js/CardList.js":"js/CardList.js","./js/Form.js":"js/Form.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62967" + '/');

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
      } else {
        window.location.reload();
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map