(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"./src/app/core/AppContext.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/react/index.js").createContext({unregister:function(){},register:function(){return function(){}}});t.default=r},"./src/app/core/index.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/tslib/tslib.es6.js"),o=r.__importDefault(n("./node_modules/react/index.js")),s=r.__importDefault(n("./src/app/core/AppContext.ts")),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.componentDidMount=function(){this.unregister=this.context.register(this.props.params)},t.prototype.componentWillUnmount=function(){this.unregister()},t.prototype.render=function(){return this.props.children},t.contextType=s.default,t}(o.default.Component);t.default=l},"./src/app/main/App.tsx":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/tslib/tslib.es6.js"),o=r.__importStar(n("./node_modules/react/index.js")),s=n("./node_modules/react-hot-loader/index.js"),l=n("./src/app/main/Header/index.ts"),u=o.lazy(function(){return Promise.resolve().then(function(){return r.__importStar(n("./src/app/module1/index.ts"))})}),d=n("./node_modules/react-router/es/index.js"),i=n("./node_modules/react-router-dom/es/index.js"),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement(l.Header,null),o.default.createElement("div",{style:{color:"red"}},"hello ",this.props.x," !!"),o.default.createElement("div",null,o.default.createElement(i.Link,{to:"/"},"/")),o.default.createElement("div",null,o.default.createElement(i.Link,{to:"/module1"},"module1")),o.default.createElement(d.Switch,null,o.default.createElement(d.Route,{path:"/module1"},o.default.createElement(u,{prop1:this.props.x}))))},t.defaultProps={x:"bla"},t}(o.Component);t.default=s.hot(e)(a)}).call(this,n("./node_modules/webpack/buildin/module.js")(e))},"./src/app/main/Header/Header.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/tslib/tslib.es6.js"),o=r.__importStar(n("./node_modules/react/index.js")),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){return o.default.createElement("header",{style:{color:"black"}},"header!!")},t}(o.Component);t.default=s},"./src/app/main/Header/index.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/tslib/tslib.es6.js").__importDefault(n("./src/app/main/Header/Header.tsx"));t.Header=r.default},"./src/app/main/index.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/tslib/tslib.es6.js").__importDefault(n("./src/app/main/App.tsx"));t.App=r.default},"./src/app/module1/components/Module1.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/tslib/tslib.es6.js"),o=r.__importStar(n("./node_modules/react/index.js")),s=r.__importDefault(n("./src/app/core/index.tsx")),l={module1:{}},u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){return o.default.createElement(s.default,{params:l},"module1 ",this.props.prop1," !")},t.defaultProps={prop1:"hello"},t}(o.Component);t.default=u},"./src/app/module1/index.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/tslib/tslib.es6.js").__importDefault(n("./src/app/module1/components/Module1.tsx"));t.default=r.default},"./src/index.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("./node_modules/tslib/tslib.es6.js"),s=o.__importStar(n("./node_modules/react/index.js")),l=o.__importDefault(n("./node_modules/react-dom/index.js")),u=n("./src/app/main/index.ts"),d=o.__importDefault(n("./src/app/core/AppContext.ts")),i=n("./node_modules/react-router-dom/es/index.js"),a={unregister:function(e){console.log("unregister",e)},register:function(e){return console.log("register",e),function(){a.unregister(e)}}};n("./src/polyfills.js"),r=document.createElement("div"),document.body.appendChild(r),l.default.render(s.default.createElement(s.Suspense,{fallback:s.default.createElement("div",null,"Loading...")},s.default.createElement(d.default.Provider,{value:a},s.default.createElement(i.BrowserRouter,null,s.default.createElement(u.App,null)))),r)},"./src/polyfills.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n("./node_modules/core-js/index.js")},0:function(e,t,n){e.exports=n("./src/index.tsx")}},[[0,1,2]]]);
//# sourceMappingURL=main.fd7510e3.chunk.js.map