(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{314:function(e,t,n){__NEXT_REGISTER_PAGE("/post",function(){return e.exports=n(315),{page:e.exports.default}})},315:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return P});var r=n(7),o=n.n(r),u=n(0),i=n.n(u),c=n(24),s=n.n(c),a=n(32),f=n.n(a),l=n(53),p=n.n(l);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){h(e,t,n[t])})}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t,n,r,o,u,i){try{var c=e[u](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,v(t).apply(this,arguments))}var n,r,c,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,u["Component"]),n=t,r=[{key:"render",value:function(){return i.a.createElement("main",null,i.a.createElement(f.a,null,i.a.createElement("title",null," ",this.props.title," ")," "),i.a.createElement("h1",null," ",this.props.title," "),i.a.createElement("p",null," ",this.props.body," "),i.a.createElement(s.a,{href:"/"},i.a.createElement("a",null," Go back to home ")," ")," ")}}],c=[{key:"getInitialProps",value:(a=o.a.mark(function e(t){var n,r,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,e.next=3,p()("https://jsonplaceholder.typicode.com/posts/".concat(n.id));case 3:return r=e.sent,e.next=6,r.json();case 6:return u=e.sent,e.abrupt("return",b({},u));case 8:case"end":return e.stop()}},e,this)}),l=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=a.apply(e,t);function u(e){d(o,n,r,u,i,"next",e)}function i(e){d(o,n,r,u,i,"throw",e)}u(void 0)})},function(e){return l.apply(this,arguments)})}],r&&m(n.prototype,r),c&&m(n,c),t}()},32:function(e,t,n){e.exports=n(104)},48:function(e,t,n){"use strict";n.r(t);var r="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest;for(var u in o.open(t.method||"get",e),t.headers)o.setRequestHeader(u,t.headers[u]);function i(){var e,t=[],n=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(o,u,i){t.push(u=u.toLowerCase()),n.push([u,i]),e=r[u],r[u]=e?e+","+i:i}),{ok:1==(o.status/200|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:i,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==t.credentials,o.onload=function(){n(i())},o.onerror=r,o.send(t.body)})};t.default=r},53:function(e,t,n){e.exports=window.fetch||(window.fetch=n(48).default||n(48))}},[[314,1,0]]]);