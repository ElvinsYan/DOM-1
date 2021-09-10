// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"epB2":[function(require,module,exports) {
var div1 = dom.create("<div><span>div1</span></div>");
console.log(div1);

var div2 = dom.create("<div>div2</div>");
dom.after(after, div2);

var div3 = dom.create("<div>div3</div>");
dom.before(before, div3);

var div4 = dom.create("<div>append</div>");
dom.append(appendTest, div4);

var div5 = dom.create("<div id='parent'></div>");
dom.wrap(wrap, div5);

var nodes = dom.empty(window.empty);
console.log(nodes);

dom.attr(attribute, "title", "Hi, I am Elvins");
var title = dom.attr(attribute, "title");
console.log("title: " + title);

dom.text(textTest, "\u4F60\u597D\uFF0C\u8FD9\u662F\u65B0\u7684\u5185\u5BB9");
console.log(dom.text(textTest));

dom.style(styleTest1, { border: "1px solid blue", color: "green" });
console.log("border: " + dom.style(styleTest1, "border"));
dom.style(styleTest2, "border", "1px solid black");

dom.class.add(classTest, "blue");
dom.class.add(classTest, "green");
dom.class.remove(classTest, "blue");
console.log(dom.class.contains(classTest, "blue"));

var div = dom.find("#test1>.red")[1];
dom.style(div, "color", "blue");

var divList = dom.find(".red");
dom.each(divList, function (n) {
  return console.log(n);
});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.382ae612.map