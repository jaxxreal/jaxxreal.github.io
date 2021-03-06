webpackJsonp([0],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n(1),n(298);var o=n(299),a=r(o),i=n(326),u=n(463),c=n(501),s=r(c),l=n(628),f=r(l),d=n(629),p=r(d),v=(0,s.default)();(0,p.default)(v),(0,i.render)(a.default.createElement(u.Provider,{store:v},a.default.createElement(f.default,null)),document.getElementById("root"))},298:function(e,t){},501:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(474),a=n(502),i=r(a),u=n(503),c=r(u),s=function(){return(0,o.compose)((0,o.applyMiddleware)(i.default))(o.createStore)(c.default)};t.default=s},503:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(504),o=n(511),a=(0,r.combineReducers)({exchanger:o.reducer});t.default=a},511:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Exchanger=t.actionTypes=t.actions=t.reducer=void 0;var a=n(512),i=o(a),u=n(515),c=o(u),s=n(513),l=r(s),f=n(599),d=r(f);t.reducer=i.default,t.actions=d,t.actionTypes=l,t.Exchanger=c.default,t.default=i.default},512:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:null,payload:null};switch(t.type){case s.SET_RATE:var n=function(){var n=t.payload,r=n.base,o=n.date,a=n.rates,c=l.TARGET_CURRENCIES.map(function(t){var n=i(t,2),r=n[0],o=n[1],c=(e.get("balance")*a[r]).toFixed(2),s=c.split("."),f=i(s,2),d=f[0],p=f[1];return(0,u.Map)({sign:o,base:r,amount:parseFloat(c),int:d,float:p,legend:r+" - "+l.CURRENCY_DESCRIPTIONS[r]})});return{v:e.set("base",r).set("date",o).set("rates",a).set("balances",(0,u.List)(c))}}();if("object"===("undefined"==typeof n?"undefined":a(n)))return n.v;default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=o;var u=n(506),c=n(513),s=r(c),l=n(514),f=(200*Math.random()).toFixed(2),d=JSON.parse(window.localStorage.getItem("operations")||"[]"),p=(0,u.fromJS)({base:"USD",date:"",rates:{},operations:d,balance:parseFloat(f),balances:[]})},513:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LOAD_RATES="LOAD_RATE",t.SET_RATE="SET_RATE"},514:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.APP_ROOT="/",t.API_URL="http://localhost:3004",t.CONVERTER_URL="https://openexchangerates.org/api",t.CONVERTER_APP_ID="55eddbe2da0b494a8555825944f3cb2e",t.TARGET_CURRENCIES=[["USD","$"],["EUR","€"],["GBP","£"]],t.CURRENCY_DESCRIPTIONS={USD:"United States Dollar",EUR:"Euro Member Countries",GBP:"United Kingdom Pound"}},515:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Exchanger=void 0;var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(299),l=o(s),f=n(516),d=o(f),p=n(463),v=n(474),_=n(506),h=n(517),m=o(h),y=n(591),b=o(y),g=n(593),x=o(g),w=n(597),E=o(w),O=n(598),N=o(O),P=n(599),S=r(P),R=n(627),j=o(R),M=t.Exchanger=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selectedIdx:0},e.loadRate(),(0,m.default)(n,["selectBase"]),n}return u(t,e),c(t,[{key:"selectBase",value:function(e){this.setState({selectedIdx:e})}},{key:"render",value:function(){var e=this.state.selectedIdx,t=this.props.balances,n={callback:this.selectBase};return l.default.createElement("div",{className:"exchanger"},l.default.createElement("div",{className:"exchanger__inner"},l.default.createElement("div",{className:"exchanger__carousel"},t.isEmpty()?null:l.default.createElement(b.default,{className:"exchanger__carousel-body",swipeOptions:n},t.map(function(t,n){return l.default.createElement("div",{key:t.get("base"),className:(0,d.default)("exchanger__carousel-item",{"exchanger__carousel-item_active":n===e})},l.default.createElement("div",{className:"balance"},l.default.createElement("div",{className:"balance__main"},l.default.createElement("span",{className:"balance__sign"},t.get("sign")),l.default.createElement("span",{className:"balance__int"},t.get("int"),"."),l.default.createElement("span",{className:"balance__float"},t.get("float"))),l.default.createElement("div",{className:"balance__legend"},t.get("legend"))))})),l.default.createElement("div",{className:"carousel-progress"},l.default.createElement("div",{className:"carousel-progress__inner"},t.map(function(t,n){return l.default.createElement("div",{key:t.get("base"),className:(0,d.default)("carousel-progress__item",{"carousel-progress__item_active":n===e})})})))),l.default.createElement("ul",{className:"exchanger__actions"},l.default.createElement("li",{className:"exchanger__actions-item"},l.default.createElement("button",{className:"btn btn_round btn_transparent btn_40"},l.default.createElement("span",{className:"btn__content"},l.default.createElement("svg",{className:"icon icon_add"},l.default.createElement("use",{xlinkHref:x.default})))),l.default.createElement("span",{className:"exchanger__actions-legend"},"Top Up")),l.default.createElement("li",{className:"exchanger__actions-item"},l.default.createElement("button",{className:"btn btn_round btn_transparent btn_40"},l.default.createElement("span",{className:"btn__content"},l.default.createElement("svg",{className:"icon icon_cached"},l.default.createElement("use",{xlinkHref:N.default})))),l.default.createElement("span",{className:"exchanger__actions-legend"},"Exchange")),l.default.createElement("li",{className:"exchanger__actions-item"},l.default.createElement("button",{className:"btn btn_round btn_transparent btn_40"},l.default.createElement("span",{className:"btn__content"},l.default.createElement("svg",{className:"icon icon_arrow-forward"},l.default.createElement("use",{xlinkHref:E.default})))),l.default.createElement("span",{className:"exchanger__actions-legend"},"Bank")))),l.default.createElement(j.default,null))}}]),t}(s.Component);M.propTypes={balances:s.PropTypes.instanceOf(_.List).isRequired,loadRate:s.PropTypes.func.isRequired},t.default=(0,p.connect)(function(e){return{balances:e.getIn(["exchanger","balances"])}},function(e){return(0,v.bindActionCreators)(S,e)})(M)},517:function(e,t,n){var r=n(518),o=n(519),a=n(529),i=n(583),u=n(590),c=i(function(e,t){return r(t,function(t){t=u(t),o(e,t,a(e[t],e))}),e});e.exports=c},518:function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}e.exports=n},519:function(e,t,n){function r(e,t,n){"__proto__"==t&&o?o(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var o=n(520);e.exports=r},520:function(e,t,n){var r=n(521),o=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},521:function(e,t,n){function r(e,t){var n=a(e,t);return o(n)?n:void 0}var o=n(522),a=n(528);e.exports=r},522:function(e,t,n){function r(e){if(!i(e)||a(e))return!1;var t=o(e)?v:s;return t.test(u(e))}var o=n(523),a=n(525),i=n(524),u=n(527),c=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,l=Function.prototype,f=Object.prototype,d=l.toString,p=f.hasOwnProperty,v=RegExp("^"+d.call(p).replace(c,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=r},523:function(e,t,n){function r(e){if(!a(e))return!1;var t=o(e);return t==u||t==c||t==i||t==s}var o=n(477),a=n(524),i="[object AsyncFunction]",u="[object Function]",c="[object GeneratorFunction]",s="[object Proxy]";e.exports=r},524:function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},525:function(e,t,n){function r(e){return!!a&&a in e}var o=n(526),a=function(){var e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=r},526:function(e,t,n){var r=n(479),o=r["__core-js_shared__"];e.exports=o},527:function(e,t){function n(e){if(null!=e){try{return o.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var r=Function.prototype,o=r.toString;e.exports=n},528:function(e,t){function n(e,t){return null==e?void 0:e[t]}e.exports=n},529:function(e,t,n){var r=n(530),o=n(538),a=n(573),i=n(576),u=1,c=32,s=r(function(e,t,n){var r=u;if(n.length){var l=i(n,a(s));r|=c}return o(e,r,t,n,l)});s.placeholder={},e.exports=s},530:function(e,t,n){function r(e,t){return i(a(e,t,o),e+"")}var o=n(531),a=n(532),i=n(534);e.exports=r},531:function(e,t){function n(e){return e}e.exports=n},532:function(e,t,n){function r(e,t,n){return t=a(void 0===t?e.length-1:t,0),function(){for(var r=arguments,i=-1,u=a(r.length-t,0),c=Array(u);++i<u;)c[i]=r[t+i];i=-1;for(var s=Array(t+1);++i<t;)s[i]=r[i];return s[t]=n(c),o(e,this,s)}}var o=n(533),a=Math.max;e.exports=r},533:function(e,t){function n(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}e.exports=n},534:function(e,t,n){var r=n(535),o=n(537),a=o(r);e.exports=a},535:function(e,t,n){var r=n(536),o=n(520),a=n(531),i=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:a;e.exports=i},536:function(e,t){function n(e){return function(){return e}}e.exports=n},537:function(e,t){function n(e){var t=0,n=0;return function(){var i=a(),u=o-(i-n);if(n=i,u>0){if(++t>=r)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var r=800,o=16,a=Date.now;e.exports=n},538:function(e,t,n){function r(e,t,n,r,w,E,O,N){var P=t&h;if(!P&&"function"!=typeof e)throw new TypeError(v);var S=r?r.length:0;if(S||(t&=~(b|g),r=w=void 0),O=void 0===O?O:x(p(O),0),N=void 0===N?N:p(N),S-=w?w.length:0,t&g){var R=r,j=w;r=w=void 0}var M=P?void 0:s(e),T=[e,t,n,r,w,R,j,E,O,N];if(M&&l(T,M),e=T[0],t=T[1],n=T[2],r=T[3],w=T[4],N=T[9]=void 0===T[9]?P?0:e.length:x(T[9]-S,0),!N&&t&(m|y)&&(t&=~(m|y)),t&&t!=_)k=t==m||t==y?i(e,t,N):t!=b&&t!=(_|b)||w.length?u.apply(void 0,T):c(e,t,n,r);else var k=a(e,t,n);var A=M?o:f;return d(A(k,T),e,t)}var o=n(539),a=n(542),i=n(545),u=n(546),c=n(577),s=n(554),l=n(578),f=n(563),d=n(564),p=n(579),v="Expected a function",_=1,h=2,m=8,y=16,b=32,g=64,x=Math.max;e.exports=r},539:function(e,t,n){var r=n(531),o=n(540),a=o?function(e,t){return o.set(e,t),e}:r;e.exports=a},540:function(e,t,n){var r=n(541),o=r&&new r;e.exports=o},541:function(e,t,n){var r=n(521),o=n(479),a=r(o,"WeakMap");e.exports=a},542:function(e,t,n){function r(e,t,n){function r(){var t=this&&this!==a&&this instanceof r?c:e;return t.apply(u?n:this,arguments)}var u=t&i,c=o(e);return r}var o=n(543),a=n(479),i=1;e.exports=r},543:function(e,t,n){function r(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=o(e.prototype),r=e.apply(n,t);return a(r)?r:n}}var o=n(544),a=n(524);e.exports=r},544:function(e,t,n){var r=n(524),o=Object.create,a=function(){function e(){}return function(t){if(!r(t))return{};if(o)return o(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();e.exports=a},545:function(e,t,n){function r(e,t,n){function r(){for(var a=arguments.length,d=Array(a),p=a,v=c(r);p--;)d[p]=arguments[p];var _=a<3&&d[0]!==v&&d[a-1]!==v?[]:s(d,v);if(a-=_.length,a<n)return u(e,t,i,r.placeholder,void 0,d,_,void 0,void 0,n-a);var h=this&&this!==l&&this instanceof r?f:e;return o(h,this,d)}var f=a(e);return r}var o=n(533),a=n(543),i=n(546),u=n(550),c=n(573),s=n(576),l=n(479);e.exports=r},546:function(e,t,n){function r(e,t,n,b,g,x,w,E,O,N){function P(){for(var p=arguments.length,v=Array(p),_=p;_--;)v[_]=arguments[_];if(M)var h=s(P),m=i(v,h);if(b&&(v=o(v,b,g,M)),x&&(v=a(v,x,w,M)),p-=m,M&&p<N){var y=f(v,h);return c(e,t,r,P.placeholder,n,v,y,E,O,N-p)}var A=R?n:this,C=j?A[e]:e;return p=v.length,E?v=l(v,E):T&&p>1&&v.reverse(),S&&O<p&&(v.length=O),this&&this!==d&&this instanceof P&&(C=k||u(C)),C.apply(A,v)}var S=t&m,R=t&p,j=t&v,M=t&(_|h),T=t&y,k=j?void 0:u(e);return P}var o=n(547),a=n(548),i=n(549),u=n(543),c=n(550),s=n(573),l=n(574),f=n(576),d=n(479),p=1,v=2,_=8,h=16,m=128,y=512;e.exports=r},547:function(e,t){function n(e,t,n,o){for(var a=-1,i=e.length,u=n.length,c=-1,s=t.length,l=r(i-u,0),f=Array(s+l),d=!o;++c<s;)f[c]=t[c];for(;++a<u;)(d||a<i)&&(f[n[a]]=e[a]);for(;l--;)f[c++]=e[a++];return f}var r=Math.max;e.exports=n},548:function(e,t){function n(e,t,n,o){for(var a=-1,i=e.length,u=-1,c=n.length,s=-1,l=t.length,f=r(i-c,0),d=Array(f+l),p=!o;++a<f;)d[a]=e[a];for(var v=a;++s<l;)d[v+s]=t[s];for(;++u<c;)(p||a<i)&&(d[v+n[u]]=e[a++]);return d}var r=Math.max;e.exports=n},549:function(e,t){function n(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}e.exports=n},550:function(e,t,n){function r(e,t,n,r,p,v,_,h,m,y){var b=t&l,g=b?_:void 0,x=b?void 0:_,w=b?v:void 0,E=b?void 0:v;t|=b?f:d,t&=~(b?d:f),t&s||(t&=~(u|c));var O=[e,t,p,w,g,E,x,h,m,y],N=n.apply(void 0,O);return o(e)&&a(N,O),N.placeholder=r,i(N,e,t)}var o=n(551),a=n(563),i=n(564),u=1,c=2,s=4,l=8,f=32,d=64;e.exports=r},551:function(e,t,n){function r(e){var t=i(e),n=u[t];if("function"!=typeof n||!(t in o.prototype))return!1;if(e===n)return!0;var r=a(n);return!!r&&e===r[0]}var o=n(552),a=n(554),i=n(556),u=n(558);e.exports=r},552:function(e,t,n){function r(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=i,this.__views__=[]}var o=n(544),a=n(553),i=4294967295;r.prototype=o(a.prototype),r.prototype.constructor=r,e.exports=r},553:function(e,t){function n(){}e.exports=n},554:function(e,t,n){var r=n(540),o=n(555),a=r?function(e){return r.get(e)}:o;e.exports=a},555:function(e,t){function n(){}e.exports=n},556:function(e,t,n){function r(e){for(var t=e.name+"",n=o[t],r=i.call(o,t)?n.length:0;r--;){var a=n[r],u=a.func;if(null==u||u==e)return a.name}return t}var o=n(557),a=Object.prototype,i=a.hasOwnProperty;e.exports=r},557:function(e,t){var n={};e.exports=n},558:function(e,t,n){function r(e){if(c(e)&&!u(e)&&!(e instanceof o)){if(e instanceof a)return e;if(f.call(e,"__wrapped__"))return s(e)}return new a(e)}var o=n(552),a=n(559),i=n(553),u=n(560),c=n(485),s=n(561),l=Object.prototype,f=l.hasOwnProperty;r.prototype=i.prototype,r.prototype.constructor=r,e.exports=r},559:function(e,t,n){function r(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=void 0}var o=n(544),a=n(553);r.prototype=o(a.prototype),r.prototype.constructor=r,e.exports=r},560:function(e,t){var n=Array.isArray;e.exports=n},561:function(e,t,n){function r(e){if(e instanceof o)return e.clone();var t=new a(e.__wrapped__,e.__chain__);return t.__actions__=i(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var o=n(552),a=n(559),i=n(562);e.exports=r},562:function(e,t){function n(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}e.exports=n},563:function(e,t,n){var r=n(539),o=n(537),a=o(r);e.exports=a},564:function(e,t,n){function r(e,t,n){var r=t+"";return i(e,a(r,u(o(r),n)))}var o=n(565),a=n(566),i=n(534),u=n(567);e.exports=r},565:function(e,t){function n(e){var t=e.match(r);return t?t[1].split(o):[]}var r=/\{\n\/\* \[wrapped with (.+)\] \*/,o=/,? & /;e.exports=n},566:function(e,t){function n(e,t){var n=t.length;if(!n)return e;var o=n-1;return t[o]=(n>1?"& ":"")+t[o],t=t.join(n>2?", ":" "),e.replace(r,"{\n/* [wrapped with "+t+"] */\n")}var r=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;e.exports=n},567:function(e,t,n){function r(e,t){return o(_,function(n){var r="_."+n[0];t&n[1]&&!a(e,r)&&e.push(r)}),e.sort()}var o=n(518),a=n(568),i=1,u=2,c=8,s=16,l=32,f=64,d=128,p=256,v=512,_=[["ary",d],["bind",i],["bindKey",u],["curry",c],["curryRight",s],["flip",v],["partial",l],["partialRight",f],["rearg",p]];e.exports=r},568:function(e,t,n){function r(e,t){var n=null==e?0:e.length;return!!n&&o(e,t,0)>-1}var o=n(569);e.exports=r},569:function(e,t,n){function r(e,t,n){return t===t?i(e,t,n):o(e,a,n)}var o=n(570),a=n(571),i=n(572);e.exports=r},570:function(e,t){function n(e,t,n,r){for(var o=e.length,a=n+(r?1:-1);r?a--:++a<o;)if(t(e[a],a,e))return a;return-1}e.exports=n},571:function(e,t){function n(e){return e!==e}e.exports=n},572:function(e,t){function n(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}e.exports=n},573:function(e,t){function n(e){var t=e;return t.placeholder}e.exports=n},574:function(e,t,n){function r(e,t){for(var n=e.length,r=i(t.length,n),u=o(e);r--;){var c=t[r];e[r]=a(c,n)?u[c]:void 0}return e}var o=n(562),a=n(575),i=Math.min;e.exports=r},575:function(e,t){function n(e,t){return t=null==t?r:t,!!t&&("number"==typeof e||o.test(e))&&e>-1&&e%1==0&&e<t}var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;e.exports=n},576:function(e,t){function n(e,t){for(var n=-1,o=e.length,a=0,i=[];++n<o;){var u=e[n];u!==t&&u!==r||(e[n]=r,i[a++]=n)}return i}var r="__lodash_placeholder__";e.exports=n},577:function(e,t,n){function r(e,t,n,r){function c(){for(var t=-1,a=arguments.length,u=-1,f=r.length,d=Array(f+a),p=this&&this!==i&&this instanceof c?l:e;++u<f;)d[u]=r[u];for(;a--;)d[u++]=arguments[++t];return o(p,s?n:this,d)}var s=t&u,l=a(e);return c}var o=n(533),a=n(543),i=n(479),u=1;e.exports=r},578:function(e,t,n){function r(e,t){var n=e[1],r=t[1],_=n|r,h=_<(c|s|d),m=r==d&&n==f||r==d&&n==p&&e[7].length<=t[8]||r==(d|p)&&t[7].length<=t[8]&&n==f;if(!h&&!m)return e;r&c&&(e[2]=t[2],_|=n&c?0:l);var y=t[3];if(y){var b=e[3];e[3]=b?o(b,y,t[4]):y,e[4]=b?i(e[3],u):t[4]}return y=t[5],y&&(b=e[5],e[5]=b?a(b,y,t[6]):y,e[6]=b?i(e[5],u):t[6]),y=t[7],y&&(e[7]=y),r&d&&(e[8]=null==e[8]?t[8]:v(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=_,e}var o=n(547),a=n(548),i=n(576),u="__lodash_placeholder__",c=1,s=2,l=4,f=8,d=128,p=256,v=Math.min;e.exports=r},579:function(e,t,n){function r(e){var t=o(e),n=t%1;return t===t?n?t-n:t:0}var o=n(580);e.exports=r},580:function(e,t,n){function r(e){if(!e)return 0===e?e:0;if(e=o(e),e===a||e===-a){var t=e<0?-1:1;return t*i}return e===e?e:0}var o=n(581),a=1/0,i=1.7976931348623157e308;e.exports=r},581:function(e,t,n){function r(e){if("number"==typeof e)return e;if(a(e))return i;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=s.test(e);return n||l.test(e)?f(e.slice(2),n?2:8):c.test(e)?i:+e}var o=n(524),a=n(582),i=NaN,u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt;e.exports=r},582:function(e,t,n){function r(e){return"symbol"==typeof e||a(e)&&o(e)==i}var o=n(477),a=n(485),i="[object Symbol]";e.exports=r},583:function(e,t,n){function r(e){return i(a(e,void 0,o),e+"")}var o=n(584),a=n(532),i=n(534);e.exports=r},584:function(e,t,n){function r(e){var t=null==e?0:e.length;return t?o(e,1):[]}var o=n(585);e.exports=r},585:function(e,t,n){function r(e,t,n,i,u){var c=-1,s=e.length;for(n||(n=a),u||(u=[]);++c<s;){var l=e[c];t>0&&n(l)?t>1?r(l,t-1,n,i,u):o(u,l):i||(u[u.length]=l)}return u}var o=n(586),a=n(587);e.exports=r},586:function(e,t){function n(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}e.exports=n},587:function(e,t,n){function r(e){return i(e)||a(e)||!!(u&&e&&e[u])}var o=n(478),a=n(588),i=n(560),u=o?o.isConcatSpreadable:void 0;e.exports=r},588:function(e,t,n){var r=n(589),o=n(485),a=Object.prototype,i=a.hasOwnProperty,u=a.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(e){return o(e)&&i.call(e,"callee")&&!u.call(e,"callee")};e.exports=c},589:function(e,t,n){function r(e){return a(e)&&o(e)==i}var o=n(477),a=n(485),i="[object Arguments]";e.exports=r},590:function(e,t,n){function r(e){if("string"==typeof e||o(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}var o=n(582),a=1/0;e.exports=r},593:function(e,t,n){var r=n(594),o='<symbol viewBox="0 0 24 24" id="add_5f2f1d997029911a8c7237d2afd04f57" ><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></symbol>';e.exports=r.add(o,"add_5f2f1d997029911a8c7237d2afd04f57")},594:function(e,t,n){var r=n(595),o=new r;document.body?o.elem=o.render(document.body):document.addEventListener("DOMContentLoaded",function(){o.elem=o.render(document.body)},!1),e.exports=o},595:function(e,t,n){function r(e){return Array.prototype.slice.call(e,0)}function o(e){return e.replace(/\(|\)/g,"\\$&")}function a(e,t,n){var a=e.querySelectorAll(l);a&&r(a).forEach(function(e){e.attributes&&r(e.attributes).forEach(function(r){var a=r.localName.toLowerCase();if(s.indexOf(a)!==-1){var i=f.exec(e.getAttribute(a));if(i&&0===i[1].indexOf(t)){var u=o(n+i[1].split(t)[1]);e.setAttribute(a,"url("+u+")")}}})})}function i(e){try{if(document.importNode)return document.importNode(e,!0)}catch(e){}return e}function u(){var e=document.getElementsByTagName("base")[0],t=window.location.href.split("#")[0],n=e&&e.href;this.urlPrefix=n&&n!==t?t+p:p;var o=new c;o.sniff(),this.browser=o.browser,this.content=[],"ie"!==this.browser.name&&n&&window.addEventListener("spriteLoaderLocationUpdated",function(e){var t=this.urlPrefix,n=e.detail.newUrl.split(p)[0]+p;if(a(this.svg,t,n),this.urlPrefix=n,"firefox"===this.browser.name||"edge"===this.browser.name||"chrome"===this.browser.name&&this.browser.version[0]>=49){var o=r(document.querySelectorAll("use[*|href]"));o.forEach(function(e){var r=e.getAttribute(v);r&&0===r.indexOf(t)&&e.setAttributeNS(_,v,n+r.split(p)[1])})}}.bind(this))}var c=n(596),s=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke"],l="["+s.join("],[")+"]",f=/^url\((.*)\)$/,d=function(e){for(var t=e.querySelector("defs"),n=e.querySelectorAll("symbol linearGradient, symbol radialGradient, symbol pattern"),r=0,o=n.length;r<o;r++)t.appendChild(n[r])},p="#",v="xlink:href",_="http://www.w3.org/1999/xlink",h='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="'+_+'"',m="</svg>",y="{content}";u.styles=["position:absolute","width:0","height:0"],u.spriteTemplate=function(){return h+' style="'+u.styles.join(";")+'"><defs>'+y+"</defs>"+m},u.symbolTemplate=function(){return h+">"+y+m},u.prototype.content=null,u.prototype.add=function(e,t){return this.svg&&this.appendSymbol(e),this.content.push(e),p+t},u.prototype.wrapSVG=function(e,t){var n=t.replace(y,e),r=(new DOMParser).parseFromString(n,"image/svg+xml").documentElement,o=i(r);return"ie"!==this.browser.name&&this.urlPrefix&&a(o,p,this.urlPrefix),o},u.prototype.appendSymbol=function(e){var t=this.wrapSVG(e,u.symbolTemplate()).childNodes[0];this.svg.querySelector("defs").appendChild(t),"firefox"===this.browser.name&&d(this.svg)},u.prototype.toString=function(){var e=document.createElement("div");return e.appendChild(this.render()),e.innerHTML},u.prototype.render=function(e,t){e=e||null,t="boolean"!=typeof t||t;var n=this.wrapSVG(this.content.join(""),u.spriteTemplate());return"firefox"===this.browser.name&&d(n),e&&(t&&e.childNodes[0]?e.insertBefore(n,e.childNodes[0]):e.appendChild(n)),this.svg=n,n},e.exports=u},596:function(e,t){!function(t){function n(){var e=this;u.forEach(function(t){e[t]={name:i,version:[],versionString:i}})}function r(e,t,n){a[t].forEach(function(r){var a=r[0],u=r[1],c=n.match(a);c&&(e[t].name=u,c[2]?(e[t].versionString=c[2],e[t].version=[]):c[1]?(e[t].versionString=c[1].replace(/_/g,"."),e[t].version=o(c[1])):(e[t].versionString=i,e[t].version=[]))})}function o(e){return e.split(/[\._]/).map(function(e){return parseInt(e)})}var a={browser:[[/msie ([\.\_\d]+)/,"ie"],[/trident\/.*?rv:([\.\_\d]+)/,"ie"],[/firefox\/([\.\_\d]+)/,"firefox"],[/chrome\/([\.\_\d]+)/,"chrome"],[/version\/([\.\_\d]+).*?safari/,"safari"],[/mobile safari ([\.\_\d]+)/,"safari"],[/android.*?version\/([\.\_\d]+).*?safari/,"com.android.browser"],[/crios\/([\.\_\d]+).*?safari/,"chrome"],[/opera/,"opera"],[/opera\/([\.\_\d]+)/,"opera"],[/opera ([\.\_\d]+)/,"opera"],[/opera mini.*?version\/([\.\_\d]+)/,"opera.mini"],[/opios\/([a-z\.\_\d]+)/,"opera"],[/blackberry/,"blackberry"],[/blackberry.*?version\/([\.\_\d]+)/,"blackberry"],[/bb\d+.*?version\/([\.\_\d]+)/,"blackberry"],[/rim.*?version\/([\.\_\d]+)/,"blackberry"],[/iceweasel\/([\.\_\d]+)/,"iceweasel"],[/edge\/([\.\d]+)/,"edge"]],os:[[/linux ()([a-z\.\_\d]+)/,"linux"],[/mac os x/,"macos"],[/mac os x.*?([\.\_\d]+)/,"macos"],[/os ([\.\_\d]+) like mac os/,"ios"],[/openbsd ()([a-z\.\_\d]+)/,"openbsd"],[/android/,"android"],[/android ([a-z\.\_\d]+);/,"android"],[/mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/,"firefoxos"],[/windows\s*(?:nt)?\s*([\.\_\d]+)/,"windows"],[/windows phone.*?([\.\_\d]+)/,"windows.phone"],[/windows mobile/,"windows.mobile"],[/blackberry/,"blackberryos"],[/bb\d+/,"blackberryos"],[/rim.*?os\s*([\.\_\d]+)/,"blackberryos"]],device:[[/ipad/,"ipad"],[/iphone/,"iphone"],[/lumia/,"lumia"],[/htc/,"htc"],[/nexus/,"nexus"],[/galaxy nexus/,"galaxy.nexus"],[/nokia/,"nokia"],[/ gt\-/,"galaxy"],[/ sm\-/,"galaxy"],[/xbox/,"xbox"],[/(?:bb\d+)|(?:blackberry)|(?: rim )/,"blackberry"]]},i="Unknown",u=Object.keys(a);n.prototype.sniff=function(e){var t=this,n=(e||navigator.userAgent||"").toLowerCase();u.forEach(function(e){r(t,e,n)})},"undefined"!=typeof e&&e.exports?e.exports=n:(t.Sniffr=new n,t.Sniffr.sniff(navigator.userAgent))}(this)},597:function(e,t,n){var r=n(594),o='<symbol viewBox="0 0 24 24" id="arrow_forward_de68f09fbfeea09529e3959102de534b" ><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></symbol>';e.exports=r.add(o,"arrow_forward_de68f09fbfeea09529e3959102de534b")},598:function(e,t,n){var r=n(594),o='<symbol viewBox="0 0 24 24" id="cached_69fee9cc422ecfd3d54cbf5e392ecbdc" ><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/></symbol>';e.exports=r.add(o,"cached_69fee9cc422ecfd3d54cbf5e392ecbdc")},599:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.loadRate=t.setRate=void 0;var o=n(513),a=r(o),i=n(600),u=t.setRate=function(e){return{type:a.SET_RATE,payload:e}};t.loadRate=function(){return function(e){return i.currency.getLatest().then(function(t){var n=t.data;return e(u(n))})}}},600:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.currency=void 0;var o=n(601),a=r(o);t.currency=a},601:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.convertFromTo=t.getLatest=void 0;var o=n(602),a=r(o),i=n(514),u=a.default.create();t.getLatest=function(){return u.get(i.CONVERTER_URL+"/latest.json?app_id="+i.CONVERTER_APP_ID)},t.convertFromTo=function(e,t,n){return u.get(i.CONVERTER_URL+"/convert/"+e+"/"+t+"/"+n+"?app_id="+i.CONVERTER_APP_ID)}},627:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Operations=void 0;var o=n(299),a=r(o),i=n(463),u=n(506),c=t.Operations=function(e){var t=e.operations;return a.default.createElement("ul",{className:"exchanger__history"},t.map(function(e){return a.default.createElement("li",{key:e.createdAt,className:"exchanger__history-item"},a.default.createElement("div",{className:"operation"},a.default.createElement("div",{className:"operation__icon"}),a.default.createElement("div",{className:"operation__details"},a.default.createElement("div",{className:"operation__legend"},"Exchanged from ",e.outcomeCurrency),a.default.createElement("div",{className:"operation__time"},e.createdAt.getHours(),":",e.createdAt.getMinutes())),a.default.createElement("ul",{className:"operation__amount"},a.default.createElement("li",{className:"operation__amount-item operation__amount-item_income"},"+ ",e.income),a.default.createElement("li",{className:"operation__amount-item operation__amount-item_outcome"},"- ",e.outcome))))}),t.isEmpty()?a.default.createElement("li",{className:"exchanger__history-item exchanger__history-item_empty"},"You have no operations. Nice chance to try, isn't it?"):null)};c.propTypes={operations:o.PropTypes.instanceOf(u.List).isRequired},t.default=(0,i.connect)(function(e){return{operations:e.getIn(["exchanger","operations"],new u.List)}})(c)},628:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(299),s=r(c),l=n(511),f=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"componentWillMount",value:function(){console.log("AppWrapper mounted!")}},{key:"render",value:function(){return s.default.createElement("div",{className:"layout"},s.default.createElement("main",null,s.default.createElement(l.Exchanger,null)))}}]),t}(c.Component);t.default=f},629:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(602),a=r(o),i=n(514);t.default=function(){a.default.interceptors.request.use(function(e){
return e.url=i.API_URL+"/"+e.url,e})}}});
//# sourceMappingURL=app.bundle.js.map