let mdoc_js_run4,mdoc_js_run8,mdoc_js_run3,mdoc_js_run1,mdoc_js_run5,mdoc_js_run7,mdoc_js_run0;
(function(){
'use strict';Object.freeze({esVersion:6,assumingES6:!0,productionMode:!0,linkerVersion:"1.10.0",fileLevelThis:this});var g;function h(a){for(var b in a)return b}
function l(a){switch(typeof a){case "string":return"java.lang.String";case "number":return"number"===typeof a&&(a|0)===a&&1/a!==1/-0?a<<24>>24===a?"java.lang.Byte":a<<16>>16===a?"java.lang.Short":"java.lang.Integer":"number"!==typeof a||a===a&&Math.fround(a)!==a?"java.lang.Double":"java.lang.Float";case "boolean":return"java.lang.Boolean";case "undefined":return"java.lang.Void";default:return null===a?a.v():a instanceof m?"java.lang.Long":a&&a.$classData?a.$classData.name:null.w()}}var p=0,q=new WeakMap;
function r(a){switch(typeof a){case "string":return t(a);case "number":a=+a;u||(u=new w);var b=u;var d=a|0;d===a&&-Infinity!==1/a?a=d:(b.n[0]=a,a=(b.g[0]|0)^(b.g[1]|0));return a;case "bigint":b=0;for(a<BigInt(0)&&(a=~a);a!==BigInt(0);)b^=Number(BigInt.asIntN(32,a)),a>>=BigInt(32);return b;case "boolean":return a?1231:1237;case "undefined":return 0;case "symbol":return a=a.description,void 0===a?0:t(a);default:if(null===a)return 0;b=q.get(a);void 0===b&&(p=b=p+1|0,q.set(a,b));return b}}
function x(){}x.prototype.constructor=x;function y(){}y.prototype=x.prototype;x.prototype.m=function(){return r(this)};x.prototype.o=function(){var a=this.m();return l(this)+"@"+(+(a>>>0)).toString(16)};x.prototype.toString=function(){return this.o()};function z(a){if("number"===typeof a){this.a=Array(a);for(var b=0;b<a;b++)this.a[b]=null}else this.a=a}z.prototype=new y;z.prototype.constructor=z;function A(a){if("number"===typeof a){this.a=Array(a);for(var b=0;b<a;b++)this.a[b]=!1}else this.a=a}
A.prototype=new y;A.prototype.constructor=A;function B(a){this.a="number"===typeof a?new Uint16Array(a):a}B.prototype=new y;B.prototype.constructor=B;function C(a){this.a="number"===typeof a?new Int8Array(a):a}C.prototype=new y;C.prototype.constructor=C;function D(a){this.a="number"===typeof a?new Int16Array(a):a}D.prototype=new y;D.prototype.constructor=D;function E(a){this.a="number"===typeof a?new Int32Array(a):a}E.prototype=new y;E.prototype.constructor=E;
function F(a){if("number"===typeof a){this.a=Array(a);for(var b=0;b<a;b++)this.a[b]=g}else this.a=a}F.prototype=new y;F.prototype.constructor=F;function G(a){this.a="number"===typeof a?new Float32Array(a):a}G.prototype=new y;G.prototype.constructor=G;function H(a){this.a="number"===typeof a?new Float64Array(a):a}H.prototype=new y;H.prototype.constructor=H;
function I(){this.k=this.b=null;this.l=0;this.p=null;this.d="";this.f=this.j=void 0;this.name="";this.isJSClass=this.isArrayClass=this.isInterface=this.isPrimitive=!1;this.isInstance=void 0}function J(a,b,d,c){var e=new I;e.b={};e.p=a;e.d=b;e.f=f=>f===e;e.name=d;e.isPrimitive=!0;e.isInstance=()=>!1;void 0!==c&&(e.j=K(e,c));return e}function L(a,b,d){var c=new I,e=h(a);c.b=d;c.d="L"+b+";";c.f=f=>!!f.b[e];c.name=b;c.isInterface=!1;c.isInstance=f=>!!(f&&f.$classData&&f.$classData.b[e]);return c}
function K(a,b,d){var c=new I;b.prototype.$classData=c;var e="["+a.d;c.b={c:1,x:1,u:1};c.k=a;c.l=1;c.d=e;c.name=e;c.isArrayClass=!0;c.f=d||(f=>c===f);c.isInstance=f=>f instanceof b;return c}var M=new I;M.b={c:1};M.d="Ljava.lang.Object;";M.f=a=>!a.isPrimitive;M.name="java.lang.Object";M.isInstance=a=>null!==a;M.j=K(M,z,a=>{var b=a.l;return 1===b?!a.k.isPrimitive:1<b});x.prototype.$classData=M;J(void 0,"V","void",void 0);J(!1,"Z","boolean",A);J(0,"C","char",B);J(0,"B","byte",C);J(0,"S","short",D);
J(0,"I","int",E);var N=J(null,"J","long",F);J(0,"F","float",G);J(0,"D","double",H);function w(){this.n=this.g=this.e=null;u=this;this.e=new ArrayBuffer(8);this.g=new Int32Array(this.e,0,2);new Float32Array(this.e,0,2);this.n=new Float64Array(this.e,0,1);this.g[0]=16909060;new Int8Array(this.e,0,8)}w.prototype=new y;w.prototype.constructor=w;w.prototype.$classData=L({t:0},"java.lang.FloatingPointBits$",{t:1,c:1});var u;function O(){}O.prototype=new y;O.prototype.constructor=O;
O.prototype.$classData=L({q:0},"mdocjs$",{q:1,c:1});var P;function R(){P||(P=new O)}function m(a,b){this.i=a;this.h=b}m.prototype=new y;m.prototype.constructor=m;m.prototype.m=function(){return this.i^this.h};m.prototype.o=function(){S||(S=new T);var a=this.i,b=this.h;return b===a>>31?""+a:0>b?"-"+U(-a|0,0!==a?~b:-b|0):U(a,b)};m.prototype.$classData=L({r:0},"org.scalajs.linker.runtime.RuntimeLong",{r:1,c:1});
function U(a,b){if(0===(-2097152&b))b=""+(4294967296*b+ +(a>>>0));else{var d=(32+Math.clz32(1E9)|0)-(0!==b?Math.clz32(b):32+Math.clz32(a)|0)|0,c=d,e=0===(32&c)?1E9<<c:0;c=0===(32&c)?5E8>>>(31-c|0)|0|0<<c:1E9<<c;var f=a,k=b;for(a=b=0;0<=d&&0!==(-2097152&k);){var n=f,v=k,V=e,Q=c;if(v===Q?(-2147483648^n)>=(-2147483648^V):(-2147483648^v)>=(-2147483648^Q))n=k,v=c,k=f-e|0,n=(-2147483648^k)>(-2147483648^f)?-1+(n-v|0)|0:n-v|0,f=k,k=n,32>d?b|=1<<d:a|=1<<d;d=-1+d|0;n=c>>>1|0;e=e>>>1|0|c<<31;c=n}d=k;if(0===
d?-1147483648<=(-2147483648^f):-2147483648<=(-2147483648^d))d=4294967296*k+ +(f>>>0),f=d/1E9,e=f/4294967296|0,c=b,b=f=c+(f|0)|0,a=(-2147483648^f)<(-2147483648^c)?1+(a+e|0)|0:a+e|0,f=d%1E9|0;d=""+f;b=""+(4294967296*a+ +(b>>>0))+"000000000".substring(d.length|0)+d}return b}function T(){}T.prototype=new y;T.prototype.constructor=T;T.prototype.$classData=L({s:0},"org.scalajs.linker.runtime.RuntimeLong$",{s:1,c:1});var S;
function t(a){for(var b=0,d=1,c=-1+(a.length|0)|0;0<=c;)b=b+Math.imul(65535&(a.charCodeAt(c)|0),d)|0,d=Math.imul(31,d),c=-1+c|0;return b}g=new m(0,0);N.p=g;mdoc_js_run4=function(){R()};mdoc_js_run8=function(){R()};mdoc_js_run3=function(){R()};mdoc_js_run1=function(){R()};mdoc_js_run5=function(){R()};mdoc_js_run7=function(){R()};mdoc_js_run0=function(){R()};
}).call(this);
