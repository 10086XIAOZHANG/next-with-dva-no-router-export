(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{242:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(328),{page:e.exports.default}})},32:function(e,t,n){e.exports=n(104)},328:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n.n(r),u=n(0),i=n.n(u),a=n(32),c=n.n(a),s=n(53),l=n.n(s);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,h(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,i.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){console.log("==BasicLayout===")}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.title,r=void 0===n?"This is the default title":n;return i.a.createElement("div",null,i.a.createElement(c.a,null,i.a.createElement("title",null,r),i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),t)}}])&&p(n.prototype,r),o&&p(n,o),t}(),d=n(24),v=n.n(d),w=function(e){return i.a.createElement("article",null,i.a.createElement("h2",null,e.title),i.a.createElement("p",null,e.body),i.a.createElement(v.a,{href:{pathname:"/post",query:{id:e.id}},as:"/post/".concat(e.id)},i.a.createElement("a",null,"Read more...")))};function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t,n,r,o,u,i){try{var a=e[u](i),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return S});var S=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),j(this,P(t).apply(this,arguments))}var n,r,a,s,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,u["Component"]),n=t,r=[{key:"render",value:function(){return i.a.createElement("main",null,i.a.createElement(m,{title:"首页"},i.a.createElement(c.a,null,i.a.createElement("link",{rel:"stylesheet",href:"/_next/static/style.css"})),i.a.createElement("h1",null,"List of posts"),i.a.createElement("section",null,this.props.postList.map(function(e){return i.a.createElement(w,_({},e,{key:e.id}))}))))}}],a=[{key:"getInitialProps",value:(s=o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()("https://jsonplaceholder.typicode.com/posts?_page=1");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",{postList:n});case 7:case"end":return e.stop()}},e,this)}),f=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=s.apply(e,t);function u(e){O(o,n,r,u,i,"next",e)}function i(e){O(o,n,r,u,i,"throw",e)}u(void 0)})},function(){return f.apply(this,arguments)})}],r&&g(n.prototype,r),a&&g(n,a),t}()},48:function(e,t,n){"use strict";n.r(t);var r="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest;for(var u in o.open(t.method||"get",e),t.headers)o.setRequestHeader(u,t.headers[u]);function i(){var e,t=[],n=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(o,u,i){t.push(u=u.toLowerCase()),n.push([u,i]),e=r[u],r[u]=e?e+","+i:i}),{ok:1==(o.status/200|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:i,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==t.credentials,o.onload=function(){n(i())},o.onerror=r,o.send(t.body)})};t.default=r},53:function(e,t,n){e.exports=window.fetch||(window.fetch=n(48).default||n(48))}},[[242,1,0]]]);