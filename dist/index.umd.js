!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["use-query-sync-data"]=e(t.Vue)}(this,(function(t){"use strict";
/*!
    * vue-router v4.2.5
    * (c) 2023 Eduardo San Martin Morote
    * @license MIT
    */var e,r,n,o,c,a;(r=e||(e={})).pop="pop",r.push="push",(o=n||(n={})).back="back",o.forward="forward",o.unknown="",Symbol("production"!==process.env.NODE_ENV?"navigation failure":""),(a=c||(c={}))[a.aborted=4]="aborted",a[a.cancelled=8]="cancelled",a[a.duplicated=16]="duplicated",Symbol("production"!==process.env.NODE_ENV?"router view location matched":""),Symbol("production"!==process.env.NODE_ENV?"router view depth":"");const u=Symbol("production"!==process.env.NODE_ENV?"router":""),i=Symbol("production"!==process.env.NODE_ENV?"route location":"");Symbol("production"!==process.env.NODE_ENV?"router view location":"");const s="object"==typeof global&&global&&global.Object===Object&&global;var l="object"==typeof self&&self&&self.Object===Object&&self;const f=s||l||Function("return this")();const p=f.Symbol;var b=Object.prototype,y=b.hasOwnProperty,v=b.toString,j=p?p.toStringTag:void 0;var h=Object.prototype.toString;var d="[object Null]",_="[object Undefined]",g=p?p.toStringTag:void 0;function O(t){return null==t?void 0===t?_:d:g&&g in Object(t)?function(t){var e=y.call(t,j),r=t[j];try{t[j]=void 0;var n=!0}catch(c){}var o=v.call(t);return n&&(e?t[j]=r:delete t[j]),o}(t):function(t){return h.call(t)}(t)}function m(t){return null!=t&&"object"==typeof t}const w=Array.isArray;function A(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var S="[object AsyncFunction]",x="[object Function]",E="[object GeneratorFunction]",z="[object Proxy]";function P(t){if(!A(t))return!1;var e=O(t);return e==x||e==E||e==S||e==z}const N=f["__core-js_shared__"];var k,D=(k=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+k:"";var F=Function.prototype.toString;function U(t){if(null!=t){try{return F.call(t)}catch(e){}try{return t+""}catch(e){}}return""}var I=/^\[object .+?Constructor\]$/,C=Function.prototype,M=Object.prototype,T=C.toString,V=M.hasOwnProperty,B=RegExp("^"+T.call(V).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function q(t){return!(!A(t)||(e=t,D&&D in e))&&(P(t)?B:I).test(U(t));var e}function $(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return q(r)?r:void 0}const R=$(f,"WeakMap");var W=Object.create;const L=function(){function t(){}return function(e){if(!A(e))return{};if(W)return W(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const G=function(){try{var t=$(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();var J=9007199254740991,Q=/^(?:0|[1-9]\d*)$/;function H(t,e){var r=typeof t;return!!(e=null==e?J:e)&&("number"==r||"symbol"!=r&&Q.test(t))&&t>-1&&t%1==0&&t<e}function K(t,e,r){"__proto__"==e&&G?G(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}function X(t,e){return t===e||t!=t&&e!=e}var Y=Object.prototype.hasOwnProperty;function Z(t,e,r){var n=t[e];Y.call(t,e)&&X(n,r)&&(void 0!==r||e in t)||K(t,e,r)}function tt(t,e,r,n){var o=!r;r||(r={});for(var c=-1,a=e.length;++c<a;){var u=e[c],i=n?n(r[u],t[u],u,r,t):void 0;void 0===i&&(i=t[u]),o?K(r,u,i):Z(r,u,i)}return r}var et=9007199254740991;function rt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=et}function nt(t){return null!=t&&rt(t.length)&&!P(t)}var ot=Object.prototype;function ct(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||ot)}function at(t){return m(t)&&"[object Arguments]"==O(t)}var ut=Object.prototype,it=ut.hasOwnProperty,st=ut.propertyIsEnumerable,lt=at(function(){return arguments}())?at:function(t){return m(t)&&it.call(t,"callee")&&!st.call(t,"callee")};const ft=lt;var pt="object"==typeof exports&&exports&&!exports.nodeType&&exports,bt=pt&&"object"==typeof module&&module&&!module.nodeType&&module,yt=bt&&bt.exports===pt?f.Buffer:void 0;const vt=(yt?yt.isBuffer:void 0)||function(){return!1};var jt={};function ht(t){return function(e){return t(e)}}jt["[object Float32Array]"]=jt["[object Float64Array]"]=jt["[object Int8Array]"]=jt["[object Int16Array]"]=jt["[object Int32Array]"]=jt["[object Uint8Array]"]=jt["[object Uint8ClampedArray]"]=jt["[object Uint16Array]"]=jt["[object Uint32Array]"]=!0,jt["[object Arguments]"]=jt["[object Array]"]=jt["[object ArrayBuffer]"]=jt["[object Boolean]"]=jt["[object DataView]"]=jt["[object Date]"]=jt["[object Error]"]=jt["[object Function]"]=jt["[object Map]"]=jt["[object Number]"]=jt["[object Object]"]=jt["[object RegExp]"]=jt["[object Set]"]=jt["[object String]"]=jt["[object WeakMap]"]=!1;var dt="object"==typeof exports&&exports&&!exports.nodeType&&exports,_t=dt&&"object"==typeof module&&module&&!module.nodeType&&module,gt=_t&&_t.exports===dt&&s.process;const Ot=function(){try{var t=_t&&_t.require&&_t.require("util").types;return t||gt&&gt.binding&&gt.binding("util")}catch(e){}}();var mt=Ot&&Ot.isTypedArray;const wt=mt?ht(mt):function(t){return m(t)&&rt(t.length)&&!!jt[O(t)]};var At=Object.prototype.hasOwnProperty;function St(t,e){var r=w(t),n=!r&&ft(t),o=!r&&!n&&vt(t),c=!r&&!n&&!o&&wt(t),a=r||n||o||c,u=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],i=u.length;for(var s in t)!e&&!At.call(t,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||c&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||H(s,i))||u.push(s);return u}function xt(t,e){return function(r){return t(e(r))}}const Et=xt(Object.keys,Object);var zt=Object.prototype.hasOwnProperty;function Pt(t){return nt(t)?St(t):function(t){if(!ct(t))return Et(t);var e=[];for(var r in Object(t))zt.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}var Nt=Object.prototype.hasOwnProperty;function kt(t){if(!A(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=ct(t),r=[];for(var n in t)("constructor"!=n||!e&&Nt.call(t,n))&&r.push(n);return r}function Dt(t){return nt(t)?St(t,!0):kt(t)}const Ft=$(Object,"create");var Ut=Object.prototype.hasOwnProperty;var It=Object.prototype.hasOwnProperty;function Ct(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Mt(t,e){for(var r=t.length;r--;)if(X(t[r][0],e))return r;return-1}Ct.prototype.clear=function(){this.__data__=Ft?Ft(null):{},this.size=0},Ct.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Ct.prototype.get=function(t){var e=this.__data__;if(Ft){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return Ut.call(e,t)?e[t]:void 0},Ct.prototype.has=function(t){var e=this.__data__;return Ft?void 0!==e[t]:It.call(e,t)},Ct.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Ft&&void 0===e?"__lodash_hash_undefined__":e,this};var Tt=Array.prototype.splice;function Vt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Vt.prototype.clear=function(){this.__data__=[],this.size=0},Vt.prototype.delete=function(t){var e=this.__data__,r=Mt(e,t);return!(r<0)&&(r==e.length-1?e.pop():Tt.call(e,r,1),--this.size,!0)},Vt.prototype.get=function(t){var e=this.__data__,r=Mt(e,t);return r<0?void 0:e[r][1]},Vt.prototype.has=function(t){return Mt(this.__data__,t)>-1},Vt.prototype.set=function(t,e){var r=this.__data__,n=Mt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};const Bt=$(f,"Map");function qt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function $t(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Rt(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}$t.prototype.clear=function(){this.size=0,this.__data__={hash:new Ct,map:new(Bt||Vt),string:new Ct}},$t.prototype.delete=function(t){var e=qt(this,t).delete(t);return this.size-=e?1:0,e},$t.prototype.get=function(t){return qt(this,t).get(t)},$t.prototype.has=function(t){return qt(this,t).has(t)},$t.prototype.set=function(t,e){var r=qt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};const Wt=xt(Object.getPrototypeOf,Object);function Lt(t){var e=this.__data__=new Vt(t);this.size=e.size}Lt.prototype.clear=function(){this.__data__=new Vt,this.size=0},Lt.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},Lt.prototype.get=function(t){return this.__data__.get(t)},Lt.prototype.has=function(t){return this.__data__.has(t)},Lt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Vt){var n=r.__data__;if(!Bt||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new $t(n)}return r.set(t,e),this.size=r.size,this};var Gt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Jt=Gt&&"object"==typeof module&&module&&!module.nodeType&&module,Qt=Jt&&Jt.exports===Gt?f.Buffer:void 0,Ht=Qt?Qt.allocUnsafe:void 0;function Kt(){return[]}var Xt=Object.prototype.propertyIsEnumerable,Yt=Object.getOwnPropertySymbols;const Zt=Yt?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,c=[];++r<n;){var a=t[r];e(a,r,t)&&(c[o++]=a)}return c}(Yt(t),(function(e){return Xt.call(t,e)})))}:Kt;const te=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Rt(e,Zt(t)),t=Wt(t);return e}:Kt;function ee(t,e,r){var n=e(t);return w(t)?n:Rt(n,r(t))}function re(t){return ee(t,Pt,Zt)}function ne(t){return ee(t,Dt,te)}const oe=$(f,"DataView");const ce=$(f,"Promise");const ae=$(f,"Set");var ue="[object Map]",ie="[object Promise]",se="[object Set]",le="[object WeakMap]",fe="[object DataView]",pe=U(oe),be=U(Bt),ye=U(ce),ve=U(ae),je=U(R),he=O;(oe&&he(new oe(new ArrayBuffer(1)))!=fe||Bt&&he(new Bt)!=ue||ce&&he(ce.resolve())!=ie||ae&&he(new ae)!=se||R&&he(new R)!=le)&&(he=function(t){var e=O(t),r="[object Object]"==e?t.constructor:void 0,n=r?U(r):"";if(n)switch(n){case pe:return fe;case be:return ue;case ye:return ie;case ve:return se;case je:return le}return e});const de=he;var _e=Object.prototype.hasOwnProperty;const ge=f.Uint8Array;function Oe(t){var e=new t.constructor(t.byteLength);return new ge(e).set(new ge(t)),e}var me=/\w*$/;var we=p?p.prototype:void 0,Ae=we?we.valueOf:void 0;var Se="[object Boolean]",xe="[object Date]",Ee="[object Map]",ze="[object Number]",Pe="[object RegExp]",Ne="[object Set]",ke="[object String]",De="[object Symbol]",Fe="[object ArrayBuffer]",Ue="[object DataView]",Ie="[object Float32Array]",Ce="[object Float64Array]",Me="[object Int8Array]",Te="[object Int16Array]",Ve="[object Int32Array]",Be="[object Uint8Array]",qe="[object Uint8ClampedArray]",$e="[object Uint16Array]",Re="[object Uint32Array]";function We(t,e,r){var n,o,c,a=t.constructor;switch(e){case Fe:return Oe(t);case Se:case xe:return new a(+t);case Ue:return function(t,e){var r=e?Oe(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,r);case Ie:case Ce:case Me:case Te:case Ve:case Be:case qe:case $e:case Re:return function(t,e){var r=e?Oe(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,r);case Ee:return new a;case ze:case ke:return new a(t);case Pe:return(c=new(o=t).constructor(o.source,me.exec(o))).lastIndex=o.lastIndex,c;case Ne:return new a;case De:return n=t,Ae?Object(Ae.call(n)):{}}}var Le=Ot&&Ot.isMap;const Ge=Le?ht(Le):function(t){return m(t)&&"[object Map]"==de(t)};var Je=Ot&&Ot.isSet;const Qe=Je?ht(Je):function(t){return m(t)&&"[object Set]"==de(t)};var He=1,Ke=2,Xe=4,Ye="[object Arguments]",Ze="[object Function]",tr="[object GeneratorFunction]",er="[object Object]",rr={};function nr(t,e,r,n,o,c){var a,u=e&He,i=e&Ke,s=e&Xe;if(r&&(a=o?r(t,n,o,c):r(t)),void 0!==a)return a;if(!A(t))return t;var l=w(t);if(l){if(a=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&_e.call(t,"index")&&(r.index=t.index,r.input=t.input),r}(t),!u)return function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(t,a)}else{var f=de(t),p=f==Ze||f==tr;if(vt(t))return function(t,e){if(e)return t.slice();var r=t.length,n=Ht?Ht(r):new t.constructor(r);return t.copy(n),n}(t,u);if(f==er||f==Ye||p&&!o){if(a=i||p?{}:function(t){return"function"!=typeof t.constructor||ct(t)?{}:L(Wt(t))}(t),!u)return i?function(t,e){return tt(t,te(t),e)}(t,function(t,e){return t&&tt(e,Dt(e),t)}(a,t)):function(t,e){return tt(t,Zt(t),e)}(t,function(t,e){return t&&tt(e,Pt(e),t)}(a,t))}else{if(!rr[f])return o?t:{};a=We(t,f,u)}}c||(c=new Lt);var b=c.get(t);if(b)return b;c.set(t,a),Qe(t)?t.forEach((function(n){a.add(nr(n,e,r,n,t,c))})):Ge(t)&&t.forEach((function(n,o){a.set(o,nr(n,e,r,o,t,c))}));var y=l?void 0:(s?i?ne:re:i?Dt:Pt)(t);return function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););}(y||t,(function(n,o){y&&(n=t[o=n]),Z(a,o,nr(n,e,r,o,t,c))})),a}rr[Ye]=rr["[object Array]"]=rr["[object ArrayBuffer]"]=rr["[object DataView]"]=rr["[object Boolean]"]=rr["[object Date]"]=rr["[object Float32Array]"]=rr["[object Float64Array]"]=rr["[object Int8Array]"]=rr["[object Int16Array]"]=rr["[object Int32Array]"]=rr["[object Map]"]=rr["[object Number]"]=rr[er]=rr["[object RegExp]"]=rr["[object Set]"]=rr["[object String]"]=rr["[object Symbol]"]=rr["[object Uint8Array]"]=rr["[object Uint8ClampedArray]"]=rr["[object Uint16Array]"]=rr["[object Uint32Array]"]=!0,rr["[object Error]"]=rr[Ze]=rr["[object WeakMap]"]=!1;return(e,r,n={})=>{const o=t.inject(i),c=t.inject(u),a=t.ref(nr(e,5));const s=t.ref(null==o?void 0:o.name),l=Object.keys(e),f=(t="push")=>{const e=l.reduce(((t,e)=>{const r=a.value[e];return t[e]="string"!=typeof r?JSON.stringify(r):r,t}),{});o.name===s.value&&c[t]({path:o.path,query:e})},p=()=>{l.forEach((t=>{const n=o.query[t];if(r[t]){const o=r[t](n);a.value[t]=o?n:e[t]}else a.value[t]=n||e[t]})),f("replace")},b=()=>{const t=l.reduce(((t,r)=>{const n=a.value[r],o=e[r];if(m(e[r])&&"string"==typeof n)t[r]=((t,r)=>{try{return JSON.parse(t)}catch{return e[r]}})(n,r);else if(function(t){return null===t}(o))t[r]=null;else if("number"==typeof o)t[r]=+n;else if("boolean"==typeof o){const e="true"===n;t[r]=Boolean(e)}else t[r]=n;return t}),{});a.value=t},y=t.computed((()=>o.query)),v=t.computed((()=>o.params));t.watch((()=>[y.value,v.value]),(()=>{p(),b(),n.queryChangeCallback&&n.queryChangeCallback(a.value)}));return t.onMounted((()=>{n.mountedCallback&&n.mountedCallback(a.value)})),p(),b(),n.initCallback&&n.initCallback(a.value),{queryData:a,updateQueryData:t=>{a.value={...a.value,...t},f()}}}}));