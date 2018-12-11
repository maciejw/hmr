(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/app/core/AppContext.ts":
/*!************************************!*\
  !*** ./src/app/core/AppContext.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var AppContext = react_1.createContext({
    unregister: function () { },
    register: function () { return function () { }; }
});
exports.default = AppContext;


/***/ }),

/***/ "./src/app/core/index.tsx":
/*!********************************!*\
  !*** ./src/app/core/index.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var AppContext_1 = tslib_1.__importDefault(__webpack_require__(/*! @app/core/AppContext */ "./src/app/core/AppContext.ts"));
var Module = /** @class */ (function (_super) {
    tslib_1.__extends(Module, _super);
    function Module() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Module.prototype.componentDidMount = function () {
        this.unregister = this.context.register(this.props.params);
    };
    Module.prototype.componentWillUnmount = function () {
        this.unregister();
    };
    Module.prototype.render = function () {
        return this.props.children;
    };
    Module.contextType = AppContext_1.default;
    return Module;
}(react_1.default.Component));
exports.default = Module;


/***/ }),

/***/ "./src/app/main/App.tsx":
/*!******************************!*\
  !*** ./src/app/main/App.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_hot_loader_1 = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
var Header_1 = __webpack_require__(/*! ./Header */ "./src/app/main/Header/index.ts");
var Module1 = react_1.lazy(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(__webpack_require__(/*! @app/module1 */ "./src/app/module1/index.ts")); }); });
var react_router_1 = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Header_1.Header, null),
            react_1.default.createElement("div", { style: { color: 'red' } },
                "hello ",
                this.props.x,
                " !!"),
            react_1.default.createElement("div", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "/")),
            react_1.default.createElement("div", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/module1" }, "module1")),
            react_1.default.createElement(react_router_1.Switch, null,
                react_1.default.createElement(react_router_1.Route, { path: "/module1" },
                    react_1.default.createElement(Module1, { prop1: this.props.x })))));
    };
    App.defaultProps = { x: 'bla' };
    return App;
}(react_1.Component));
exports.default = react_hot_loader_1.hot(module)(App);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/app/main/Header/Header.tsx":
/*!****************************************!*\
  !*** ./src/app/main/Header/Header.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var Header = /** @class */ (function (_super) {
    tslib_1.__extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return react_1.default.createElement("header", { style: { color: 'black' } }, "header!!");
    };
    return Header;
}(react_1.Component));
exports.default = Header;


/***/ }),

/***/ "./src/app/main/Header/index.ts":
/*!**************************************!*\
  !*** ./src/app/main/Header/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Header_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Header */ "./src/app/main/Header/Header.tsx"));
exports.Header = Header_1.default;


/***/ }),

/***/ "./src/app/main/index.ts":
/*!*******************************!*\
  !*** ./src/app/main/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var App_1 = tslib_1.__importDefault(__webpack_require__(/*! ./App */ "./src/app/main/App.tsx"));
exports.App = App_1.default;


/***/ }),

/***/ "./src/app/module1/components/Module1.tsx":
/*!************************************************!*\
  !*** ./src/app/module1/components/Module1.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var core_1 = tslib_1.__importDefault(__webpack_require__(/*! @app/core */ "./src/app/core/index.tsx"));
var params = {
    module1: {}
};
var Module1 = /** @class */ (function (_super) {
    tslib_1.__extends(Module1, _super);
    function Module1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Module1.prototype.render = function () {
        return react_1.default.createElement(core_1.default, { params: params },
            "module1 ",
            this.props.prop1,
            " !");
    };
    Module1.defaultProps = { prop1: 'hello' };
    return Module1;
}(react_1.Component));
exports.default = Module1;


/***/ }),

/***/ "./src/app/module1/index.ts":
/*!**********************************!*\
  !*** ./src/app/module1/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Module1_1 = tslib_1.__importDefault(__webpack_require__(/*! ./components/Module1 */ "./src/app/module1/components/Module1.tsx"));
exports.default = Module1_1.default;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_dom_1 = tslib_1.__importDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
var main_1 = __webpack_require__(/*! @app/main */ "./src/app/main/index.ts");
var AppContext_1 = tslib_1.__importDefault(__webpack_require__(/*! @app/core/AppContext */ "./src/app/core/AppContext.ts"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var context = {
    unregister: function (params) {
        console.log('unregister', params);
    },
    register: function (params) {
        console.log('register', params);
        return function () {
            context.unregister(params);
        };
    }
};
function main() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var root;
        return tslib_1.__generator(this, function (_a) {
            root = document.createElement('div');
            document.body.appendChild(root);
            react_dom_1.default.render(react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement("div", null, "Loading...") },
                react_1.default.createElement(AppContext_1.default.Provider, { value: context },
                    react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                        react_1.default.createElement(main_1.App, null)))), root);
            return [2 /*return*/];
        });
    });
}
Promise.resolve().then(function () { return tslib_1.__importStar(__webpack_require__(/*! ./polyfills */ "./src/polyfills.js")); }).then(main);


/***/ }),

/***/ "./src/polyfills.js":
/*!**************************!*\
  !*** ./src/polyfills.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! core-js */ "./node_modules/core-js/index.js");


/***/ }),

/***/ 0:
/*!******************************************************************************************************************!*\
  !*** multi eventsource-polyfill webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000 ./src/index.tsx ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! eventsource-polyfill */"./node_modules/eventsource-polyfill/dist/browserify-eventsource.js");
__webpack_require__(/*! webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000 */"./node_modules/webpack-hot-middleware/client.js?path=/__webpack_hmr&timeout=20000");
module.exports = __webpack_require__(/*! ./src/index.tsx */"./src/index.tsx");


/***/ })

},[[0,"runtime~main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map