!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["use-query-sync-data"]=e(t.Vue)}(this,(function(t){"use strict";const e="object"==typeof global&&global&&global.Object===Object&&global;var r="object"==typeof self&&self&&self.Object===Object&&self;const n=e||r||Function("return this")();const o=n.Symbol;var c=Object.prototype,a=c.hasOwnProperty,u=c.toString,i=o?o.toStringTag:void 0;var s=Object.prototype.toString;var f="[object Null]",l="[object Undefined]",p=o?o.toStringTag:void 0;function b(t){return null==t?void 0===t?l:f:p&&p in Object(t)?function(t){var e=a.call(t,i),r=t[i];try{t[i]=void 0;var n=!0}catch(c){}var o=u.call(t);return n&&(e?t[i]=r:delete t[i]),o}(t):function(t){return s.call(t)}(t)}function y(t){return null!=t&&"object"==typeof t}const v=Array.isArray;function j(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var h="[object AsyncFunction]",d="[object Function]",_="[object GeneratorFunction]",g="[object Proxy]";function O(t){if(!j(t))return!1;var e=b(t);return e==d||e==_||e==h||e==g}const m=n["__core-js_shared__"];var w,A=(w=/[^.]+$/.exec(m&&m.keys&&m.keys.IE_PROTO||""))?"Symbol(src)_1."+w:"";var x=Function.prototype.toString;function S(t){if(null!=t){try{return x.call(t)}catch(e){}try{return t+""}catch(e){}}return""}var z=/^\[object .+?Constructor\]$/,P=Function.prototype,F=Object.prototype,U=P.toString,k=F.hasOwnProperty,I=RegExp("^"+U.call(k).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function C(t){return!(!j(t)||(e=t,A&&A in e))&&(O(t)?I:z).test(S(t));var e}function E(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return C(r)?r:void 0}const M=E(n,"WeakMap");var T=Object.create;const B=function(){function t(){}return function(e){if(!j(e))return{};if(T)return T(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const q=function(){try{var t=E(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();var D=9007199254740991,$=/^(?:0|[1-9]\d*)$/;function R(t,e){var r=typeof t;return!!(e=null==e?D:e)&&("number"==r||"symbol"!=r&&$.test(t))&&t>-1&&t%1==0&&t<e}function N(t,e,r){"__proto__"==e&&q?q(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}function V(t,e){return t===e||t!=t&&e!=e}var W=Object.prototype.hasOwnProperty;function L(t,e,r){var n=t[e];W.call(t,e)&&V(n,r)&&(void 0!==r||e in t)||N(t,e,r)}function G(t,e,r,n){var o=!r;r||(r={});for(var c=-1,a=e.length;++c<a;){var u=e[c],i=n?n(r[u],t[u],u,r,t):void 0;void 0===i&&(i=t[u]),o?N(r,u,i):L(r,u,i)}return r}var J=9007199254740991;function Q(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=J}function H(t){return null!=t&&Q(t.length)&&!O(t)}var K=Object.prototype;function X(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||K)}function Y(t){return y(t)&&"[object Arguments]"==b(t)}var Z=Object.prototype,tt=Z.hasOwnProperty,et=Z.propertyIsEnumerable,rt=Y(function(){return arguments}())?Y:function(t){return y(t)&&tt.call(t,"callee")&&!et.call(t,"callee")};const nt=rt;var ot="object"==typeof exports&&exports&&!exports.nodeType&&exports,ct=ot&&"object"==typeof module&&module&&!module.nodeType&&module,at=ct&&ct.exports===ot?n.Buffer:void 0;const ut=(at?at.isBuffer:void 0)||function(){return!1};var it={};function st(t){return function(e){return t(e)}}it["[object Float32Array]"]=it["[object Float64Array]"]=it["[object Int8Array]"]=it["[object Int16Array]"]=it["[object Int32Array]"]=it["[object Uint8Array]"]=it["[object Uint8ClampedArray]"]=it["[object Uint16Array]"]=it["[object Uint32Array]"]=!0,it["[object Arguments]"]=it["[object Array]"]=it["[object ArrayBuffer]"]=it["[object Boolean]"]=it["[object DataView]"]=it["[object Date]"]=it["[object Error]"]=it["[object Function]"]=it["[object Map]"]=it["[object Number]"]=it["[object Object]"]=it["[object RegExp]"]=it["[object Set]"]=it["[object String]"]=it["[object WeakMap]"]=!1;var ft="object"==typeof exports&&exports&&!exports.nodeType&&exports,lt=ft&&"object"==typeof module&&module&&!module.nodeType&&module,pt=lt&&lt.exports===ft&&e.process;const bt=function(){try{var t=lt&&lt.require&&lt.require("util").types;return t||pt&&pt.binding&&pt.binding("util")}catch(e){}}();var yt=bt&&bt.isTypedArray;const vt=yt?st(yt):function(t){return y(t)&&Q(t.length)&&!!it[b(t)]};var jt=Object.prototype.hasOwnProperty;function ht(t,e){var r=v(t),n=!r&&nt(t),o=!r&&!n&&ut(t),c=!r&&!n&&!o&&vt(t),a=r||n||o||c,u=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],i=u.length;for(var s in t)!e&&!jt.call(t,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||c&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||R(s,i))||u.push(s);return u}function dt(t,e){return function(r){return t(e(r))}}const _t=dt(Object.keys,Object);var gt=Object.prototype.hasOwnProperty;function Ot(t){return H(t)?ht(t):function(t){if(!X(t))return _t(t);var e=[];for(var r in Object(t))gt.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}var mt=Object.prototype.hasOwnProperty;function wt(t){if(!j(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=X(t),r=[];for(var n in t)("constructor"!=n||!e&&mt.call(t,n))&&r.push(n);return r}function At(t){return H(t)?ht(t,!0):wt(t)}const xt=E(Object,"create");var St=Object.prototype.hasOwnProperty;var zt=Object.prototype.hasOwnProperty;function Pt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Ft(t,e){for(var r=t.length;r--;)if(V(t[r][0],e))return r;return-1}Pt.prototype.clear=function(){this.__data__=xt?xt(null):{},this.size=0},Pt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Pt.prototype.get=function(t){var e=this.__data__;if(xt){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return St.call(e,t)?e[t]:void 0},Pt.prototype.has=function(t){var e=this.__data__;return xt?void 0!==e[t]:zt.call(e,t)},Pt.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=xt&&void 0===e?"__lodash_hash_undefined__":e,this};var Ut=Array.prototype.splice;function kt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}kt.prototype.clear=function(){this.__data__=[],this.size=0},kt.prototype.delete=function(t){var e=this.__data__,r=Ft(e,t);return!(r<0)&&(r==e.length-1?e.pop():Ut.call(e,r,1),--this.size,!0)},kt.prototype.get=function(t){var e=this.__data__,r=Ft(e,t);return r<0?void 0:e[r][1]},kt.prototype.has=function(t){return Ft(this.__data__,t)>-1},kt.prototype.set=function(t,e){var r=this.__data__,n=Ft(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};const It=E(n,"Map");function Ct(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Et(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Mt(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}Et.prototype.clear=function(){this.size=0,this.__data__={hash:new Pt,map:new(It||kt),string:new Pt}},Et.prototype.delete=function(t){var e=Ct(this,t).delete(t);return this.size-=e?1:0,e},Et.prototype.get=function(t){return Ct(this,t).get(t)},Et.prototype.has=function(t){return Ct(this,t).has(t)},Et.prototype.set=function(t,e){var r=Ct(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};const Tt=dt(Object.getPrototypeOf,Object);function Bt(t){var e=this.__data__=new kt(t);this.size=e.size}Bt.prototype.clear=function(){this.__data__=new kt,this.size=0},Bt.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},Bt.prototype.get=function(t){return this.__data__.get(t)},Bt.prototype.has=function(t){return this.__data__.has(t)},Bt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof kt){var n=r.__data__;if(!It||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Et(n)}return r.set(t,e),this.size=r.size,this};var qt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Dt=qt&&"object"==typeof module&&module&&!module.nodeType&&module,$t=Dt&&Dt.exports===qt?n.Buffer:void 0,Rt=$t?$t.allocUnsafe:void 0;function Nt(){return[]}var Vt=Object.prototype.propertyIsEnumerable,Wt=Object.getOwnPropertySymbols;const Lt=Wt?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,c=[];++r<n;){var a=t[r];e(a,r,t)&&(c[o++]=a)}return c}(Wt(t),(function(e){return Vt.call(t,e)})))}:Nt;const Gt=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Mt(e,Lt(t)),t=Tt(t);return e}:Nt;function Jt(t,e,r){var n=e(t);return v(t)?n:Mt(n,r(t))}function Qt(t){return Jt(t,Ot,Lt)}function Ht(t){return Jt(t,At,Gt)}const Kt=E(n,"DataView");const Xt=E(n,"Promise");const Yt=E(n,"Set");var Zt="[object Map]",te="[object Promise]",ee="[object Set]",re="[object WeakMap]",ne="[object DataView]",oe=S(Kt),ce=S(It),ae=S(Xt),ue=S(Yt),ie=S(M),se=b;(Kt&&se(new Kt(new ArrayBuffer(1)))!=ne||It&&se(new It)!=Zt||Xt&&se(Xt.resolve())!=te||Yt&&se(new Yt)!=ee||M&&se(new M)!=re)&&(se=function(t){var e=b(t),r="[object Object]"==e?t.constructor:void 0,n=r?S(r):"";if(n)switch(n){case oe:return ne;case ce:return Zt;case ae:return te;case ue:return ee;case ie:return re}return e});const fe=se;var le=Object.prototype.hasOwnProperty;const pe=n.Uint8Array;function be(t){var e=new t.constructor(t.byteLength);return new pe(e).set(new pe(t)),e}var ye=/\w*$/;var ve=o?o.prototype:void 0,je=ve?ve.valueOf:void 0;var he="[object Boolean]",de="[object Date]",_e="[object Map]",ge="[object Number]",Oe="[object RegExp]",me="[object Set]",we="[object String]",Ae="[object Symbol]",xe="[object ArrayBuffer]",Se="[object DataView]",ze="[object Float32Array]",Pe="[object Float64Array]",Fe="[object Int8Array]",Ue="[object Int16Array]",ke="[object Int32Array]",Ie="[object Uint8Array]",Ce="[object Uint8ClampedArray]",Ee="[object Uint16Array]",Me="[object Uint32Array]";function Te(t,e,r){var n,o,c,a=t.constructor;switch(e){case xe:return be(t);case he:case de:return new a(+t);case Se:return function(t,e){var r=e?be(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,r);case ze:case Pe:case Fe:case Ue:case ke:case Ie:case Ce:case Ee:case Me:return function(t,e){var r=e?be(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,r);case _e:return new a;case ge:case we:return new a(t);case Oe:return(c=new(o=t).constructor(o.source,ye.exec(o))).lastIndex=o.lastIndex,c;case me:return new a;case Ae:return n=t,je?Object(je.call(n)):{}}}var Be=bt&&bt.isMap;const qe=Be?st(Be):function(t){return y(t)&&"[object Map]"==fe(t)};var De=bt&&bt.isSet;const $e=De?st(De):function(t){return y(t)&&"[object Set]"==fe(t)};var Re=1,Ne=2,Ve=4,We="[object Arguments]",Le="[object Function]",Ge="[object GeneratorFunction]",Je="[object Object]",Qe={};function He(t,e,r,n,o,c){var a,u=e&Re,i=e&Ne,s=e&Ve;if(r&&(a=o?r(t,n,o,c):r(t)),void 0!==a)return a;if(!j(t))return t;var f=v(t);if(f){if(a=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&le.call(t,"index")&&(r.index=t.index,r.input=t.input),r}(t),!u)return function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(t,a)}else{var l=fe(t),p=l==Le||l==Ge;if(ut(t))return function(t,e){if(e)return t.slice();var r=t.length,n=Rt?Rt(r):new t.constructor(r);return t.copy(n),n}(t,u);if(l==Je||l==We||p&&!o){if(a=i||p?{}:function(t){return"function"!=typeof t.constructor||X(t)?{}:B(Tt(t))}(t),!u)return i?function(t,e){return G(t,Gt(t),e)}(t,function(t,e){return t&&G(e,At(e),t)}(a,t)):function(t,e){return G(t,Lt(t),e)}(t,function(t,e){return t&&G(e,Ot(e),t)}(a,t))}else{if(!Qe[l])return o?t:{};a=Te(t,l,u)}}c||(c=new Bt);var b=c.get(t);if(b)return b;c.set(t,a),$e(t)?t.forEach((function(n){a.add(He(n,e,r,n,t,c))})):qe(t)&&t.forEach((function(n,o){a.set(o,He(n,e,r,o,t,c))}));var y=f?void 0:(s?i?Ht:Qt:i?At:Ot)(t);return function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););}(y||t,(function(n,o){y&&(n=t[o=n]),L(a,o,He(n,e,r,o,t,c))})),a}Qe[We]=Qe["[object Array]"]=Qe["[object ArrayBuffer]"]=Qe["[object DataView]"]=Qe["[object Boolean]"]=Qe["[object Date]"]=Qe["[object Float32Array]"]=Qe["[object Float64Array]"]=Qe["[object Int8Array]"]=Qe["[object Int16Array]"]=Qe["[object Int32Array]"]=Qe["[object Map]"]=Qe["[object Number]"]=Qe[Je]=Qe["[object RegExp]"]=Qe["[object Set]"]=Qe["[object String]"]=Qe["[object Symbol]"]=Qe["[object Uint8Array]"]=Qe["[object Uint8ClampedArray]"]=Qe["[object Uint16Array]"]=Qe["[object Uint32Array]"]=!0,Qe["[object Error]"]=Qe[Le]=Qe["[object WeakMap]"]=!1;return(e,r,n,o={})=>{const{useRouter:c,useRoute:a}=n,u=a(),i=c(),s=t.ref(He(e,5));const f=t.ref(null==u?void 0:u.name),l=Object.keys(e),p=(t="push")=>{const e=l.reduce(((t,e)=>{const r=s.value[e];return t[e]="string"!=typeof r?JSON.stringify(r):r,t}),{});u.name===f.value&&i[t]({path:u.path,query:e})},b=()=>{l.forEach((t=>{const n=u.query[t];if(r[t]){const o=r[t](n);s.value[t]=o?n:e[t]}else s.value[t]=n||e[t]})),p("replace")},v=()=>{const t=l.reduce(((t,r)=>{const n=s.value[r],o=e[r];if(y(e[r])&&"string"==typeof n)t[r]=((t,r)=>{try{return JSON.parse(t)}catch{return e[r]}})(n,r);else if(function(t){return null===t}(o))t[r]=null;else if("number"==typeof o)t[r]=+n;else if("boolean"==typeof o){const e="true"===n;t[r]=Boolean(e)}else t[r]=n;return t}),{});s.value=t},j=t.computed((()=>u.query)),h=t.computed((()=>u.params));t.watch((()=>[j.value,h.value]),(()=>{b(),v(),o.queryChangeCallback&&o.queryChangeCallback(s.value)}));return t.onMounted((()=>{o.mountedCallback&&o.mountedCallback(s.value)})),b(),v(),o.initCallback&&o.initCallback(s.value),{queryData:s,updateQueryData:t=>{s.value={...s.value,...t},p()}}}}));
