var K=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function P(p,t,u){return u={path:t,exports:{},require:function(h,s){return Q(h,s??u.path)}},p(u,u.exports),u.exports}function Q(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var B=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;function X(p){if(p==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(p)}function Z(){try{if(!Object.assign)return!1;var p=new String("abc");if(p[5]="de",Object.getOwnPropertyNames(p)[0]==="5")return!1;for(var t={},u=0;u<10;u++)t["_"+String.fromCharCode(u)]=u;var h=Object.getOwnPropertyNames(t).map(function(y){return t[y]});if(h.join("")!=="0123456789")return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach(function(y){s[y]=y}),Object.keys(Object.assign({},s)).join("")==="abcdefghijklmnopqrst"}catch(y){return!1}}var E=Z()?Object.assign:function(p,t){for(var u,h=X(p),s,y=1;y<arguments.length;y++){u=Object(arguments[y]);for(var g in u)W.call(u,g)&&(h[g]=u[g]);if(B){s=B(u);for(var _=0;_<s.length;_++)Y.call(u,s[_])&&(h[s[_]]=u[s[_]])}}return h},x=P(function(p,t){var u=60103,h=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,y=60110,g=60112;t.Suspense=60113;var _=60115,q=60116;if(typeof Symbol=="function"&&Symbol.for){var d=Symbol.for;u=d("react.element"),h=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),s=d("react.provider"),y=d("react.context"),g=d("react.forward_ref"),t.Suspense=d("react.suspense"),_=d("react.memo"),q=d("react.lazy")}var A=typeof Symbol=="function"&&Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=A&&e[A]||e["@@iterator"],typeof e=="function"?e:null)}function O(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M={};function j(e,r,n){this.props=e,this.context=r,this.refs=M,this.updater=n||I}j.prototype.isReactComponent={},j.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(O(85));this.updater.enqueueSetState(this,e,r,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function U(){}U.prototype=j.prototype;function k(e,r,n){this.props=e,this.context=r,this.refs=M,this.updater=n||I}var C=k.prototype=new U;C.constructor=k,E(C,j.prototype),C.isPureReactComponent=!0;var b={current:null},F=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function T(e,r,n){var i,o={},c=null,a=null;if(r!=null)for(i in r.ref!==void 0&&(a=r.ref),r.key!==void 0&&(c=""+r.key),r)F.call(r,i)&&!N.hasOwnProperty(i)&&(o[i]=r[i]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var f=Array(l),v=0;v<l;v++)f[v]=arguments[v+2];o.children=f}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)o[i]===void 0&&(o[i]=l[i]);return{$$typeof:u,type:e,key:c,ref:a,props:o,_owner:b.current}}function z(e,r){return{$$typeof:u,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function $(e){return typeof e=="object"&&e!==null&&e.$$typeof===u}function H(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var D=/\/+/g;function R(e,r){return typeof e=="object"&&e!==null&&e.key!=null?H(""+e.key):r.toString(36)}function w(e,r,n,i,o){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case u:case h:a=!0}}if(a)return a=e,o=o(a),e=i===""?"."+R(a,0):i,Array.isArray(o)?(n="",e!=null&&(n=e.replace(D,"$&/")+"/"),w(o,r,n,"",function(v){return v})):o!=null&&($(o)&&(o=z(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(D,"$&/")+"/")+e)),r.push(o)),1;if(a=0,i=i===""?".":i+":",Array.isArray(e))for(var l=0;l<e.length;l++){c=e[l];var f=i+R(c,l);a+=w(c,r,n,f,o)}else if(f=V(e),typeof f=="function")for(e=f.call(e),l=0;!(c=e.next()).done;)c=c.value,f=i+R(c,l++),a+=w(c,r,n,f,o);else if(c==="object")throw r=""+e,Error(O(31,r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r));return a}function S(e,r,n){if(e==null)return e;var i=[],o=0;return w(e,i,"","",function(c){return r.call(n,c,o++)}),i}function G(e){if(e._status===-1){var r=e._result;r=r(),e._status=0,e._result=r,r.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var L={current:null};function m(){var e=L.current;if(e===null)throw Error(O(321));return e}var J={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:E};t.Children={map:S,forEach:function(e,r,n){S(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return S(e,function(){r++}),r},toArray:function(e){return S(e,function(r){return r})||[]},only:function(e){if(!$(e))throw Error(O(143));return e}},t.Component=j,t.PureComponent=k,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,t.cloneElement=function(e,r,n){if(e==null)throw Error(O(267,e));var i=E({},e.props),o=e.key,c=e.ref,a=e._owner;if(r!=null){if(r.ref!==void 0&&(c=r.ref,a=b.current),r.key!==void 0&&(o=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in r)F.call(r,f)&&!N.hasOwnProperty(f)&&(i[f]=r[f]===void 0&&l!==void 0?l[f]:r[f])}var f=arguments.length-2;if(f===1)i.children=n;else if(1<f){l=Array(f);for(var v=0;v<f;v++)l[v]=arguments[v+2];i.children=l}return{$$typeof:u,type:e.type,key:o,ref:c,props:i,_owner:a}},t.createContext=function(e,r){return r===void 0&&(r=null),e={$$typeof:y,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=T,t.createFactory=function(e){var r=T.bind(null,e);return r.type=e,r},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:g,render:e}},t.isValidElement=$,t.lazy=function(e){return{$$typeof:q,_payload:{_status:-1,_result:e},_init:G}},t.memo=function(e,r){return{$$typeof:_,type:e,compare:r===void 0?null:r}},t.useCallback=function(e,r){return m().useCallback(e,r)},t.useContext=function(e,r){return m().useContext(e,r)},t.useDebugValue=function(){},t.useEffect=function(e,r){return m().useEffect(e,r)},t.useImperativeHandle=function(e,r,n){return m().useImperativeHandle(e,r,n)},t.useLayoutEffect=function(e,r){return m().useLayoutEffect(e,r)},t.useMemo=function(e,r){return m().useMemo(e,r)},t.useReducer=function(e,r,n){return m().useReducer(e,r,n)},t.useRef=function(e){return m().useRef(e)},t.useState=function(e){return m().useState(e)},t.version="17.0.2"}),ee=P(function(p){p.exports=x});export{K as a,P as c,E as o,ee as r};
