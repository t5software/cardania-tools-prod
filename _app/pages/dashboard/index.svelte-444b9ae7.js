var ht=Object.defineProperty,pt=Object.defineProperties;var dt=Object.getOwnPropertyDescriptors;var Te=Object.getOwnPropertySymbols;var yt=Object.prototype.hasOwnProperty,mt=Object.prototype.propertyIsEnumerable;var Re=(u,c,l)=>c in u?ht(u,c,{enumerable:!0,configurable:!0,writable:!0,value:l}):u[c]=l,Se=(u,c)=>{for(var l in c||(c={}))yt.call(c,l)&&Re(u,l,c[l]);if(Te)for(var l of Te(c))mt.call(c,l)&&Re(u,l,c[l]);return u},Ne=(u,c)=>pt(u,dt(c));import{P as gt,S as He,i as We,s as Ge,e as R,k as Z,t as G,c as S,a as L,m as v,h as q,d as C,H as wt,b as M,g as re,I as b,j as xt,n as V,l as De,Q as Et,p as oe,q as qe,r as ee,R as Bt,w as It,T as bt,o as ze,K as _t,x as At,y as Ft,z as Ut,C as Ct,U as kt}from"../../chunks/index-a49ce2fa.js";/* empty css                       */import{b as Tt}from"../../chunks/paths-396f020f.js";const Rt=()=>{const u=gt("__svelte__");return{page:{subscribe:u.page.subscribe},navigating:{subscribe:u.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:u.navigating.subscribe}},session:u.session,updated:u.updated}},St={subscribe(u){return Rt().page.subscribe(u)}};function Nt(u){let c,l,d,f,y,s,i,p,x,m;return{c(){c=R("div"),l=R("img"),f=Z(),y=R("div"),s=R("h1"),i=G(u[0]),p=Z(),x=R("h2"),m=G(u[1]),this.h()},l(g){c=S(g,"DIV",{class:!0});var w=L(c);l=S(w,"IMG",{src:!0,alt:!0,class:!0}),f=v(w),y=S(w,"DIV",{class:!0});var E=L(y);s=S(E,"H1",{});var A=L(s);i=q(A,u[0]),A.forEach(C),p=v(E),x=S(E,"H2",{});var T=L(x);m=q(T,u[1]),T.forEach(C),E.forEach(C),w.forEach(C),this.h()},h(){wt(l.src,d=Tt+"/assets/"+u[2])||M(l,"src",d),M(l,"alt",u[1]),M(l,"class","svelte-1d3ck5e"),M(y,"class","container svelte-1d3ck5e"),M(c,"class","card svelte-1d3ck5e")},m(g,w){re(g,c,w),b(c,l),b(c,f),b(c,y),b(y,s),b(s,i),b(y,p),b(y,x),b(x,m)},p(g,[w]){w&1&&xt(i,g[0])},i:V,o:V,d(g){g&&C(c)}}}function Dt(u,c,l){var i,p;let{assets:d}=c;const f=(i=d[0])==null?void 0:i.cardania,y=(p=d[0])==null?void 0:p.image;let s;return f==="Resources"?s=d.length:s=d.reduce((x,m)=>x+(m==null?void 0:m.quantity),0),u.$$set=x=>{"assets"in x&&l(3,d=x.assets)},[s,f,y,d]}class Lt extends He{constructor(c){super(),We(this,c,Dt,Nt,Ge,{assets:3})}}var je={},le={};le.byteLength=$t;le.toByteArray=Ht;le.fromByteArray=qt;var W=[],P=[],Pt=typeof Uint8Array!="undefined"?Uint8Array:Array,ye="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Q=0,Mt=ye.length;Q<Mt;++Q)W[Q]=ye[Q],P[ye.charCodeAt(Q)]=Q;P["-".charCodeAt(0)]=62;P["_".charCodeAt(0)]=63;function Ve(u){var c=u.length;if(c%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var l=u.indexOf("=");l===-1&&(l=c);var d=l===c?0:4-l%4;return[l,d]}function $t(u){var c=Ve(u),l=c[0],d=c[1];return(l+d)*3/4-d}function Ot(u,c,l){return(c+l)*3/4-l}function Ht(u){var c,l=Ve(u),d=l[0],f=l[1],y=new Pt(Ot(u,d,f)),s=0,i=f>0?d-4:d,p;for(p=0;p<i;p+=4)c=P[u.charCodeAt(p)]<<18|P[u.charCodeAt(p+1)]<<12|P[u.charCodeAt(p+2)]<<6|P[u.charCodeAt(p+3)],y[s++]=c>>16&255,y[s++]=c>>8&255,y[s++]=c&255;return f===2&&(c=P[u.charCodeAt(p)]<<2|P[u.charCodeAt(p+1)]>>4,y[s++]=c&255),f===1&&(c=P[u.charCodeAt(p)]<<10|P[u.charCodeAt(p+1)]<<4|P[u.charCodeAt(p+2)]>>2,y[s++]=c>>8&255,y[s++]=c&255),y}function Wt(u){return W[u>>18&63]+W[u>>12&63]+W[u>>6&63]+W[u&63]}function Gt(u,c,l){for(var d,f=[],y=c;y<l;y+=3)d=(u[y]<<16&16711680)+(u[y+1]<<8&65280)+(u[y+2]&255),f.push(Wt(d));return f.join("")}function qt(u){for(var c,l=u.length,d=l%3,f=[],y=16383,s=0,i=l-d;s<i;s+=y)f.push(Gt(u,s,s+y>i?i:s+y));return d===1?(c=u[l-1],f.push(W[c>>2]+W[c<<4&63]+"==")):d===2&&(c=(u[l-2]<<8)+u[l-1],f.push(W[c>>10]+W[c>>4&63]+W[c<<2&63]+"=")),f.join("")}var we={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */we.read=function(u,c,l,d,f){var y,s,i=f*8-d-1,p=(1<<i)-1,x=p>>1,m=-7,g=l?f-1:0,w=l?-1:1,E=u[c+g];for(g+=w,y=E&(1<<-m)-1,E>>=-m,m+=i;m>0;y=y*256+u[c+g],g+=w,m-=8);for(s=y&(1<<-m)-1,y>>=-m,m+=d;m>0;s=s*256+u[c+g],g+=w,m-=8);if(y===0)y=1-x;else{if(y===p)return s?NaN:(E?-1:1)*(1/0);s=s+Math.pow(2,d),y=y-x}return(E?-1:1)*s*Math.pow(2,y-d)};we.write=function(u,c,l,d,f,y){var s,i,p,x=y*8-f-1,m=(1<<x)-1,g=m>>1,w=f===23?Math.pow(2,-24)-Math.pow(2,-77):0,E=d?0:y-1,A=d?1:-1,T=c<0||c===0&&1/c<0?1:0;for(c=Math.abs(c),isNaN(c)||c===1/0?(i=isNaN(c)?1:0,s=m):(s=Math.floor(Math.log(c)/Math.LN2),c*(p=Math.pow(2,-s))<1&&(s--,p*=2),s+g>=1?c+=w/p:c+=w*Math.pow(2,1-g),c*p>=2&&(s++,p/=2),s+g>=m?(i=0,s=m):s+g>=1?(i=(c*p-1)*Math.pow(2,f),s=s+g):(i=c*Math.pow(2,g-1)*Math.pow(2,f),s=0));f>=8;u[l+E]=i&255,E+=A,i/=256,f-=8);for(s=s<<f|i,x+=f;x>0;u[l+E]=s&255,E+=A,s/=256,x-=8);u[l+E-A]|=T*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(u){const c=le,l=we,d=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;u.Buffer=i,u.SlowBuffer=Y,u.INSPECT_MAX_BYTES=50;const f=2147483647;u.kMaxLength=f,i.TYPED_ARRAY_SUPPORT=y(),!i.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function y(){try{const r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(i.prototype,"parent",{enumerable:!0,get:function(){if(!!i.isBuffer(this))return this.buffer}}),Object.defineProperty(i.prototype,"offset",{enumerable:!0,get:function(){if(!!i.isBuffer(this))return this.byteOffset}});function s(r){if(r>f)throw new RangeError('The value "'+r+'" is invalid for option "size"');const e=new Uint8Array(r);return Object.setPrototypeOf(e,i.prototype),e}function i(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return g(r)}return p(r,e,t)}i.poolSize=8192;function p(r,e,t){if(typeof r=="string")return w(r,e);if(ArrayBuffer.isView(r))return A(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(H(r,ArrayBuffer)||r&&H(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(H(r,SharedArrayBuffer)||r&&H(r.buffer,SharedArrayBuffer)))return T(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const n=r.valueOf&&r.valueOf();if(n!=null&&n!==r)return i.from(n,e,t);const o=z(r);if(o)return o;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return i.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}i.from=function(r,e,t){return p(r,e,t)},Object.setPrototypeOf(i.prototype,Uint8Array.prototype),Object.setPrototypeOf(i,Uint8Array);function x(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function m(r,e,t){return x(r),r<=0?s(r):e!==void 0?typeof t=="string"?s(r).fill(e,t):s(r).fill(e):s(r)}i.alloc=function(r,e,t){return m(r,e,t)};function g(r){return x(r),s(r<0?0:$(r)|0)}i.allocUnsafe=function(r){return g(r)},i.allocUnsafeSlow=function(r){return g(r)};function w(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!i.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const t=D(r,e)|0;let n=s(t);const o=n.write(r,e);return o!==t&&(n=n.slice(0,o)),n}function E(r){const e=r.length<0?0:$(r.length)|0,t=s(e);for(let n=0;n<e;n+=1)t[n]=r[n]&255;return t}function A(r){if(H(r,Uint8Array)){const e=new Uint8Array(r);return T(e.buffer,e.byteOffset,e.byteLength)}return E(r)}function T(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(n,i.prototype),n}function z(r){if(i.isBuffer(r)){const e=$(r.length)|0,t=s(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||de(r.length)?s(0):E(r);if(r.type==="Buffer"&&Array.isArray(r.data))return E(r.data)}function $(r){if(r>=f)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f.toString(16)+" bytes");return r|0}function Y(r){return+r!=r&&(r=0),i.alloc(+r)}i.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==i.prototype},i.compare=function(e,t){if(H(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),H(t,Uint8Array)&&(t=i.from(t,t.offset,t.byteLength)),!i.isBuffer(e)||!i.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,o=t.length;for(let a=0,h=Math.min(n,o);a<h;++a)if(e[a]!==t[a]){n=e[a],o=t[a];break}return n<o?-1:o<n?1:0},i.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return i.alloc(0);let n;if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const o=i.allocUnsafe(t);let a=0;for(n=0;n<e.length;++n){let h=e[n];if(H(h,Uint8Array))a+h.length>o.length?(i.isBuffer(h)||(h=i.from(h)),h.copy(o,a)):Uint8Array.prototype.set.call(o,h,a);else if(i.isBuffer(h))h.copy(o,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=h.length}return o};function D(r,e){if(i.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||H(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);const t=r.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&t===0)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return pe(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return ke(r).length;default:if(o)return n?-1:pe(r).length;e=(""+e).toLowerCase(),o=!0}}i.byteLength=D;function ae(r,e,t){let n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return nt(this,e,t);case"utf8":case"utf-8":return Ee(this,e,t);case"ascii":return tt(this,e,t);case"latin1":case"binary":return rt(this,e,t);case"base64":return ve(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return it(this,e,t);default:if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}i.prototype._isBuffer=!0;function O(r,e,t){const n=r[e];r[e]=r[t],r[t]=n}i.prototype.swap16=function(){const e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)O(this,t,t+1);return this},i.prototype.swap32=function(){const e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)O(this,t,t+3),O(this,t+1,t+2);return this},i.prototype.swap64=function(){const e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)O(this,t,t+7),O(this,t+1,t+6),O(this,t+2,t+5),O(this,t+3,t+4);return this},i.prototype.toString=function(){const e=this.length;return e===0?"":arguments.length===0?Ee(this,0,e):ae.apply(this,arguments)},i.prototype.toLocaleString=i.prototype.toString,i.prototype.equals=function(e){if(!i.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:i.compare(this,e)===0},i.prototype.inspect=function(){let e="";const t=u.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},d&&(i.prototype[d]=i.prototype.inspect),i.prototype.compare=function(e,t,n,o,a){if(H(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),!i.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?e.length:0),o===void 0&&(o=0),a===void 0&&(a=this.length),t<0||n>e.length||o<0||a>this.length)throw new RangeError("out of range index");if(o>=a&&t>=n)return 0;if(o>=a)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,o>>>=0,a>>>=0,this===e)return 0;let h=a-o,B=n-t;const F=Math.min(h,B),_=this.slice(o,a),U=e.slice(t,n);for(let I=0;I<F;++I)if(_[I]!==U[I]){h=_[I],B=U[I];break}return h<B?-1:B<h?1:0};function ne(r,e,t,n,o){if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,de(t)&&(t=o?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(o)return-1;t=r.length-1}else if(t<0)if(o)t=0;else return-1;if(typeof e=="string"&&(e=i.from(e,n)),i.isBuffer(e))return e.length===0?-1:X(r,e,t,n,o);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?o?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):X(r,[e],t,n,o);throw new TypeError("val must be string, number or Buffer")}function X(r,e,t,n,o){let a=1,h=r.length,B=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,h/=2,B/=2,t/=2}function F(U,I){return a===1?U[I]:U.readUInt16BE(I*a)}let _;if(o){let U=-1;for(_=t;_<h;_++)if(F(r,_)===F(e,U===-1?0:_-U)){if(U===-1&&(U=_),_-U+1===B)return U*a}else U!==-1&&(_-=_-U),U=-1}else for(t+B>h&&(t=h-B),_=t;_>=0;_--){let U=!0;for(let I=0;I<B;I++)if(F(r,_+I)!==F(e,I)){U=!1;break}if(U)return _}return-1}i.prototype.includes=function(e,t,n){return this.indexOf(e,t,n)!==-1},i.prototype.indexOf=function(e,t,n){return ne(this,e,t,n,!0)},i.prototype.lastIndexOf=function(e,t,n){return ne(this,e,t,n,!1)};function se(r,e,t,n){t=Number(t)||0;const o=r.length-t;n?(n=Number(n),n>o&&(n=o)):n=o;const a=e.length;n>a/2&&(n=a/2);let h;for(h=0;h<n;++h){const B=parseInt(e.substr(h*2,2),16);if(de(B))return h;r[t+h]=B}return h}function Je(r,e,t,n){return ue(pe(e,r.length-t),r,t,n)}function Ke(r,e,t,n){return ue(st(e),r,t,n)}function Qe(r,e,t,n){return ue(ke(e),r,t,n)}function Ze(r,e,t,n){return ue(ut(e,r.length-t),r,t,n)}i.prototype.write=function(e,t,n,o){if(t===void 0)o="utf8",n=this.length,t=0;else if(n===void 0&&typeof t=="string")o=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?(n=n>>>0,o===void 0&&(o="utf8")):(o=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const a=this.length-t;if((n===void 0||n>a)&&(n=a),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");let h=!1;for(;;)switch(o){case"hex":return se(this,e,t,n);case"utf8":case"utf-8":return Je(this,e,t,n);case"ascii":case"latin1":case"binary":return Ke(this,e,t,n);case"base64":return Qe(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ze(this,e,t,n);default:if(h)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),h=!0}},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ve(r,e,t){return e===0&&t===r.length?c.fromByteArray(r):c.fromByteArray(r.slice(e,t))}function Ee(r,e,t){t=Math.min(r.length,t);const n=[];let o=e;for(;o<t;){const a=r[o];let h=null,B=a>239?4:a>223?3:a>191?2:1;if(o+B<=t){let F,_,U,I;switch(B){case 1:a<128&&(h=a);break;case 2:F=r[o+1],(F&192)===128&&(I=(a&31)<<6|F&63,I>127&&(h=I));break;case 3:F=r[o+1],_=r[o+2],(F&192)===128&&(_&192)===128&&(I=(a&15)<<12|(F&63)<<6|_&63,I>2047&&(I<55296||I>57343)&&(h=I));break;case 4:F=r[o+1],_=r[o+2],U=r[o+3],(F&192)===128&&(_&192)===128&&(U&192)===128&&(I=(a&15)<<18|(F&63)<<12|(_&63)<<6|U&63,I>65535&&I<1114112&&(h=I))}}h===null?(h=65533,B=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|h&1023),n.push(h),o+=B}return et(n)}const Be=4096;function et(r){const e=r.length;if(e<=Be)return String.fromCharCode.apply(String,r);let t="",n=0;for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=Be));return t}function tt(r,e,t){let n="";t=Math.min(r.length,t);for(let o=e;o<t;++o)n+=String.fromCharCode(r[o]&127);return n}function rt(r,e,t){let n="";t=Math.min(r.length,t);for(let o=e;o<t;++o)n+=String.fromCharCode(r[o]);return n}function nt(r,e,t){const n=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>n)&&(t=n);let o="";for(let a=e;a<t;++a)o+=ft[r[a]];return o}function it(r,e,t){const n=r.slice(e,t);let o="";for(let a=0;a<n.length-1;a+=2)o+=String.fromCharCode(n[a]+n[a+1]*256);return o}i.prototype.slice=function(e,t){const n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);const o=this.subarray(e,t);return Object.setPrototypeOf(o,i.prototype),o};function k(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}i.prototype.readUintLE=i.prototype.readUIntLE=function(e,t,n){e=e>>>0,t=t>>>0,n||k(e,t,this.length);let o=this[e],a=1,h=0;for(;++h<t&&(a*=256);)o+=this[e+h]*a;return o},i.prototype.readUintBE=i.prototype.readUIntBE=function(e,t,n){e=e>>>0,t=t>>>0,n||k(e,t,this.length);let o=this[e+--t],a=1;for(;t>0&&(a*=256);)o+=this[e+--t]*a;return o},i.prototype.readUint8=i.prototype.readUInt8=function(e,t){return e=e>>>0,t||k(e,1,this.length),this[e]},i.prototype.readUint16LE=i.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||k(e,2,this.length),this[e]|this[e+1]<<8},i.prototype.readUint16BE=i.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||k(e,2,this.length),this[e]<<8|this[e+1]},i.prototype.readUint32LE=i.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||k(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},i.prototype.readUint32BE=i.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||k(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},i.prototype.readBigUInt64LE=j(function(e){e=e>>>0,K(e,"offset");const t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ie(e,this.length-8);const o=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+n*2**24;return BigInt(o)+(BigInt(a)<<BigInt(32))}),i.prototype.readBigUInt64BE=j(function(e){e=e>>>0,K(e,"offset");const t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ie(e,this.length-8);const o=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(o)<<BigInt(32))+BigInt(a)}),i.prototype.readIntLE=function(e,t,n){e=e>>>0,t=t>>>0,n||k(e,t,this.length);let o=this[e],a=1,h=0;for(;++h<t&&(a*=256);)o+=this[e+h]*a;return a*=128,o>=a&&(o-=Math.pow(2,8*t)),o},i.prototype.readIntBE=function(e,t,n){e=e>>>0,t=t>>>0,n||k(e,t,this.length);let o=t,a=1,h=this[e+--o];for(;o>0&&(a*=256);)h+=this[e+--o]*a;return a*=128,h>=a&&(h-=Math.pow(2,8*t)),h},i.prototype.readInt8=function(e,t){return e=e>>>0,t||k(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},i.prototype.readInt16LE=function(e,t){e=e>>>0,t||k(e,2,this.length);const n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n},i.prototype.readInt16BE=function(e,t){e=e>>>0,t||k(e,2,this.length);const n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n},i.prototype.readInt32LE=function(e,t){return e=e>>>0,t||k(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},i.prototype.readInt32BE=function(e,t){return e=e>>>0,t||k(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},i.prototype.readBigInt64LE=j(function(e){e=e>>>0,K(e,"offset");const t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ie(e,this.length-8);const o=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(o)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)}),i.prototype.readBigInt64BE=j(function(e){e=e>>>0,K(e,"offset");const t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ie(e,this.length-8);const o=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(o)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)}),i.prototype.readFloatLE=function(e,t){return e=e>>>0,t||k(e,4,this.length),l.read(this,e,!0,23,4)},i.prototype.readFloatBE=function(e,t){return e=e>>>0,t||k(e,4,this.length),l.read(this,e,!1,23,4)},i.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||k(e,8,this.length),l.read(this,e,!0,52,8)},i.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||k(e,8,this.length),l.read(this,e,!1,52,8)};function N(r,e,t,n,o,a){if(!i.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<a)throw new RangeError('"value" argument is out of bounds');if(t+n>r.length)throw new RangeError("Index out of range")}i.prototype.writeUintLE=i.prototype.writeUIntLE=function(e,t,n,o){if(e=+e,t=t>>>0,n=n>>>0,!o){const B=Math.pow(2,8*n)-1;N(this,e,t,n,B,0)}let a=1,h=0;for(this[t]=e&255;++h<n&&(a*=256);)this[t+h]=e/a&255;return t+n},i.prototype.writeUintBE=i.prototype.writeUIntBE=function(e,t,n,o){if(e=+e,t=t>>>0,n=n>>>0,!o){const B=Math.pow(2,8*n)-1;N(this,e,t,n,B,0)}let a=n-1,h=1;for(this[t+a]=e&255;--a>=0&&(h*=256);)this[t+a]=e/h&255;return t+n},i.prototype.writeUint8=i.prototype.writeUInt8=function(e,t,n){return e=+e,t=t>>>0,n||N(this,e,t,1,255,0),this[t]=e&255,t+1},i.prototype.writeUint16LE=i.prototype.writeUInt16LE=function(e,t,n){return e=+e,t=t>>>0,n||N(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},i.prototype.writeUint16BE=i.prototype.writeUInt16BE=function(e,t,n){return e=+e,t=t>>>0,n||N(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},i.prototype.writeUint32LE=i.prototype.writeUInt32LE=function(e,t,n){return e=+e,t=t>>>0,n||N(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},i.prototype.writeUint32BE=i.prototype.writeUInt32BE=function(e,t,n){return e=+e,t=t>>>0,n||N(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function Ie(r,e,t,n,o){Ce(e,n,o,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let h=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=h,h=h>>8,r[t++]=h,h=h>>8,r[t++]=h,h=h>>8,r[t++]=h,t}function be(r,e,t,n,o){Ce(e,n,o,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let h=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=h,h=h>>8,r[t+2]=h,h=h>>8,r[t+1]=h,h=h>>8,r[t]=h,t+8}i.prototype.writeBigUInt64LE=j(function(e,t=0){return Ie(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),i.prototype.writeBigUInt64BE=j(function(e,t=0){return be(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),i.prototype.writeIntLE=function(e,t,n,o){if(e=+e,t=t>>>0,!o){const F=Math.pow(2,8*n-1);N(this,e,t,n,F-1,-F)}let a=0,h=1,B=0;for(this[t]=e&255;++a<n&&(h*=256);)e<0&&B===0&&this[t+a-1]!==0&&(B=1),this[t+a]=(e/h>>0)-B&255;return t+n},i.prototype.writeIntBE=function(e,t,n,o){if(e=+e,t=t>>>0,!o){const F=Math.pow(2,8*n-1);N(this,e,t,n,F-1,-F)}let a=n-1,h=1,B=0;for(this[t+a]=e&255;--a>=0&&(h*=256);)e<0&&B===0&&this[t+a+1]!==0&&(B=1),this[t+a]=(e/h>>0)-B&255;return t+n},i.prototype.writeInt8=function(e,t,n){return e=+e,t=t>>>0,n||N(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},i.prototype.writeInt16LE=function(e,t,n){return e=+e,t=t>>>0,n||N(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},i.prototype.writeInt16BE=function(e,t,n){return e=+e,t=t>>>0,n||N(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},i.prototype.writeInt32LE=function(e,t,n){return e=+e,t=t>>>0,n||N(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},i.prototype.writeInt32BE=function(e,t,n){return e=+e,t=t>>>0,n||N(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},i.prototype.writeBigInt64LE=j(function(e,t=0){return Ie(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),i.prototype.writeBigInt64BE=j(function(e,t=0){return be(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function _e(r,e,t,n,o,a){if(t+n>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Ae(r,e,t,n,o){return e=+e,t=t>>>0,o||_e(r,e,t,4),l.write(r,e,t,n,23,4),t+4}i.prototype.writeFloatLE=function(e,t,n){return Ae(this,e,t,!0,n)},i.prototype.writeFloatBE=function(e,t,n){return Ae(this,e,t,!1,n)};function Fe(r,e,t,n,o){return e=+e,t=t>>>0,o||_e(r,e,t,8),l.write(r,e,t,n,52,8),t+8}i.prototype.writeDoubleLE=function(e,t,n){return Fe(this,e,t,!0,n)},i.prototype.writeDoubleBE=function(e,t,n){return Fe(this,e,t,!1,n)},i.prototype.copy=function(e,t,n,o){if(!i.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!o&&o!==0&&(o=this.length),t>=e.length&&(t=e.length),t||(t=0),o>0&&o<n&&(o=n),o===n||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-t<o-n&&(o=e.length-t+n);const a=o-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,n,o):Uint8Array.prototype.set.call(e,this.subarray(n,o),t),a},i.prototype.fill=function(e,t,n,o){if(typeof e=="string"){if(typeof t=="string"?(o=t,t=0,n=this.length):typeof n=="string"&&(o=n,n=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!i.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){const h=e.charCodeAt(0);(o==="utf8"&&h<128||o==="latin1")&&(e=h)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<n;++a)this[a]=e;else{const h=i.isBuffer(e)?e:i.from(e,o),B=h.length;if(B===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<n-t;++a)this[a+t]=h[a%B]}return this};const J={};function he(r,e,t){J[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(o){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:o,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}he("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),he("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError),he("ERR_OUT_OF_RANGE",function(r,e,t){let n=`The value of "${r}" is out of range.`,o=t;return Number.isInteger(t)&&Math.abs(t)>2**32?o=Ue(String(t)):typeof t=="bigint"&&(o=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(o=Ue(o)),o+="n"),n+=` It must be ${e}. Received ${o}`,n},RangeError);function Ue(r){let e="",t=r.length;const n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function ot(r,e,t){K(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&ie(e,r.length-(t+1))}function Ce(r,e,t,n,o,a){if(r>t||r<e){const h=typeof e=="bigint"?"n":"";let B;throw a>3?e===0||e===BigInt(0)?B=`>= 0${h} and < 2${h} ** ${(a+1)*8}${h}`:B=`>= -(2${h} ** ${(a+1)*8-1}${h}) and < 2 ** ${(a+1)*8-1}${h}`:B=`>= ${e}${h} and <= ${t}${h}`,new J.ERR_OUT_OF_RANGE("value",B,r)}ot(n,o,a)}function K(r,e){if(typeof r!="number")throw new J.ERR_INVALID_ARG_TYPE(e,"number",r)}function ie(r,e,t){throw Math.floor(r)!==r?(K(r,t),new J.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new J.ERR_BUFFER_OUT_OF_BOUNDS:new J.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}const ct=/[^+/0-9A-Za-z-_]/g;function at(r){if(r=r.split("=")[0],r=r.trim().replace(ct,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function pe(r,e){e=e||1/0;let t;const n=r.length;let o=null;const a=[];for(let h=0;h<n;++h){if(t=r.charCodeAt(h),t>55295&&t<57344){if(!o){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(h+1===n){(e-=3)>-1&&a.push(239,191,189);continue}o=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),o=t;continue}t=(o-55296<<10|t-56320)+65536}else o&&(e-=3)>-1&&a.push(239,191,189);if(o=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function st(r){const e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function ut(r,e){let t,n,o;const a=[];for(let h=0;h<r.length&&!((e-=2)<0);++h)t=r.charCodeAt(h),n=t>>8,o=t%256,a.push(o),a.push(n);return a}function ke(r){return c.toByteArray(at(r))}function ue(r,e,t,n){let o;for(o=0;o<n&&!(o+t>=e.length||o>=r.length);++o)e[o+t]=r[o];return o}function H(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function de(r){return r!==r}const ft=function(){const r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){const n=t*16;for(let o=0;o<16;++o)e[n+o]=r[t]+r[o]}return e}();function j(r){return typeof BigInt=="undefined"?lt:r}function lt(){throw new Error("BigInt not supported")}})(je);var ce={};Object.defineProperty(ce,"__esModule",{value:!0});ce.bech32m=ge=ce.bech32=void 0;const fe="qpzry9x8gf2tvdw0s3jn54khce6mua7l",Ye={};for(let u=0;u<fe.length;u++){const c=fe.charAt(u);Ye[c]=u}function te(u){const c=u>>25;return(u&33554431)<<5^-(c>>0&1)&996825010^-(c>>1&1)&642813549^-(c>>2&1)&513874426^-(c>>3&1)&1027748829^-(c>>4&1)&705979059}function Le(u){let c=1;for(let l=0;l<u.length;++l){const d=u.charCodeAt(l);if(d<33||d>126)return"Invalid prefix ("+u+")";c=te(c)^d>>5}c=te(c);for(let l=0;l<u.length;++l){const d=u.charCodeAt(l);c=te(c)^d&31}return c}function xe(u,c,l,d){let f=0,y=0;const s=(1<<l)-1,i=[];for(let p=0;p<u.length;++p)for(f=f<<c|u[p],y+=c;y>=l;)y-=l,i.push(f>>y&s);if(d)y>0&&i.push(f<<l-y&s);else{if(y>=c)return"Excess padding";if(f<<l-y&s)return"Non-zero padding"}return i}function zt(u){return xe(u,8,5,!0)}function jt(u){const c=xe(u,5,8,!1);if(Array.isArray(c))return c}function Vt(u){const c=xe(u,5,8,!1);if(Array.isArray(c))return c;throw new Error(c)}function Xe(u){let c;u==="bech32"?c=1:c=734539939;function l(s,i,p){if(p=p||90,s.length+7+i.length>p)throw new TypeError("Exceeds length limit");s=s.toLowerCase();let x=Le(s);if(typeof x=="string")throw new Error(x);let m=s+"1";for(let g=0;g<i.length;++g){const w=i[g];if(w>>5!==0)throw new Error("Non 5-bit word");x=te(x)^w,m+=fe.charAt(w)}for(let g=0;g<6;++g)x=te(x);x^=c;for(let g=0;g<6;++g){const w=x>>(5-g)*5&31;m+=fe.charAt(w)}return m}function d(s,i){if(i=i||90,s.length<8)return s+" too short";if(s.length>i)return"Exceeds length limit";const p=s.toLowerCase(),x=s.toUpperCase();if(s!==p&&s!==x)return"Mixed-case string "+s;s=p;const m=s.lastIndexOf("1");if(m===-1)return"No separator character for "+s;if(m===0)return"Missing prefix for "+s;const g=s.slice(0,m),w=s.slice(m+1);if(w.length<6)return"Data too short";let E=Le(g);if(typeof E=="string")return E;const A=[];for(let T=0;T<w.length;++T){const z=w.charAt(T),$=Ye[z];if($===void 0)return"Unknown character "+z;E=te(E)^$,!(T+6>=w.length)&&A.push($)}return E!==c?"Invalid checksum for "+s:{prefix:g,words:A}}function f(s,i){const p=d(s,i);if(typeof p=="object")return p}function y(s,i){const p=d(s,i);if(typeof p=="object")return p;throw new Error(p)}return{decodeUnsafe:f,decode:y,encode:l,toWords:zt,fromWordsUnsafe:jt,fromWords:Vt}}var ge=ce.bech32=Xe("bech32");ce.bech32m=Xe("bech32m");var Pe=[{name:"Cardania Terraforms",policyId:"c859e9d7e71b8f90bdc1e453fd1b9adbc5e6163898fb574543cb5be8",image:"terraforms.gif"},{name:"First Edition Collector's Art",policyId:"a1dbe9979c84f028c7c24f0ae63a32e10ebac8e091cc5fdb94e22e67",image:"first.gif"},{name:"Founders Cards",policyId:"ccb3577601d6cf0e021288871112926338bee685c6c37eeadf6dddd9",image:"founders.gif"},{name:"Dark Technologies Unopened Packs",policyId:"71ed3b742838988825e2e574e441e11a19ab6e9e4f101e5f59a46a76",image:"dark.gif"},{name:"Technocracy Unopened Packs",policyId:"4de8f6ef521125e09d898267368ebeebf2287a562620daea3d853163",image:"technocracy.gif"},{name:"Cleansing Fire Unopened Packs",policyId:"f9c7a0cb60e2bd7c2bcd7041460dc19f8767623a735994e1d2f54186",image:"cleansing.gif"},{name:"Transfungalism Unopened Packs",policyId:"f1dd8861a9b92fb42c54c3d11486a7ae60a48c3aaa87b717d586a667",image:"transfungalism.gif"},{name:"Symbiosis Unopened Packs",policyId:"c872827bbd63ddef2fb635b2136d224c7e5871c749f818ff0dbf9eb7",image:"symbiosis.gif"},{name:"Mysterious Orbs",policyId:"a8437dfff20edb4bff07b00277e9a197f111bcf12c44728c19519663",image:"orb.gif"},{name:"Ghost Chain Commemorative Cards",policyId:"3cf7bd1c22f87aa81adaf886089fbefa01af9339099f999df0e0c708",image:"ghost.gif"},{name:"Interplanetary Postage",policyId:"5e5fa5618b01679afecbda56f63df9dbd699ce0fa93434896d314513",image:"interplanetary.gif"},{name:"Oktoberfest Collection",policyId:"d0b4c7811012fc5e9860c2fe374265f4e465ff99586ed7352fa9a866",image:"oktoberfest.gif"},{name:"RAD Tokens",policyId:"6787a47e9f73efe4002d763337140da27afa8eb9a39413d2c39d4286",image:"rad.png"},{name:"Astral Alliance Unopened Packs",policyId:"de0056ba8e5ea474363308d347bb75820c5d2126fcd958addca4ebfc",image:"astral.gif"},{name:"Citizens/Avatars",policyId:"3530c5d7ce77ea067c20bbca7688e18731c8f0c7de456a940eefa27c",image:"citizens.gif"},{name:"Resources",policyId:"650296faadaccf9bb9852678ce0e881c5c09f1a6da9cb7531b3c23bb",image:"resources.gif"}];const Yt="https://pool.pm/wallet/";async function Me(u){var d;const l=(d=await(await fetch(Yt+u)).json())==null?void 0:d.tokens;return l==null?void 0:l.map(f=>{var y,s;return Ne(Se({},f),{cardania:(y=Pe.filter(i=>i.policyId===f.policy)[0])==null?void 0:y.name,image:(s=Pe.filter(i=>i.policyId===f.policy)[0])==null?void 0:s.image})}).filter(f=>f.cardania)}function Xt(u){const c=Number(u.toLowerCase().charAt(1));let l,d;d={hash:u.slice(2).slice(0,56),type:0},l={hash:u.slice(2).slice(56),type:0};let f=0;f|=c;const y=`${f.toString(16).padStart(2,"0")}${d.hash}${l.hash}`,s=je.Buffer.from(y,"hex"),i="addr",p=ge.toWords(s);return ge.encode(i,p,1e3)}const{document:me}=bt;function $e(u,c,l){const d=u.slice();return d[9]=c[l],d}function Jt(u){let c,l,d;return{c(){c=R("div"),l=R("h2"),d=G("Switch your wallet to mainnet and refresh this page."),this.h()},l(f){c=S(f,"DIV",{class:!0});var y=L(c);l=S(y,"H2",{});var s=L(l);d=q(s,"Switch your wallet to mainnet and refresh this page."),s.forEach(C),y.forEach(C),this.h()},h(){M(c,"class","content svelte-1gyxz3m")},m(f,y){re(f,c,y),b(c,l),b(l,d)},p:V,i:V,o:V,d(f){f&&C(c)}}}function Kt(u){let c,l,d,f,y,s,i,p,x,m,g,w,E,A,T,z,$;return{c(){c=R("div"),l=R("h1"),d=G("Dashboard"),f=Z(),y=R("h2"),s=G("See all your Cardania assets in one place"),i=Z(),p=R("button"),x=G("Connect Wallet"),m=Z(),g=R("p"),w=G("*This is still a work in progress. Nami wallet only. See my progress on GitHub "),E=R("a"),A=G("here"),T=G("."),this.h()},l(Y){c=S(Y,"DIV",{class:!0});var D=L(c);l=S(D,"H1",{});var ae=L(l);d=q(ae,"Dashboard"),ae.forEach(C),f=v(D),y=S(D,"H2",{});var O=L(y);s=q(O,"See all your Cardania assets in one place"),O.forEach(C),i=v(D),p=S(D,"BUTTON",{class:!0});var ne=L(p);x=q(ne,"Connect Wallet"),ne.forEach(C),m=v(D),g=S(D,"P",{});var X=L(g);w=q(X,"*This is still a work in progress. Nami wallet only. See my progress on GitHub "),E=S(X,"A",{href:!0});var se=L(E);A=q(se,"here"),se.forEach(C),T=q(X,"."),X.forEach(C),D.forEach(C),this.h()},h(){M(p,"class","svelte-1gyxz3m"),M(E,"href","https://github.com/t5software/cardania-tools/milestone/2"),M(c,"class","content svelte-1gyxz3m")},m(Y,D){re(Y,c,D),b(c,l),b(l,d),b(c,f),b(c,y),b(y,s),b(c,i),b(c,p),b(p,x),b(c,m),b(c,g),b(g,w),b(g,E),b(E,A),b(g,T),z||($=_t(p,"click",u[4]),z=!0)},p:V,i:V,o:V,d(Y){Y&&C(c),z=!1,$()}}}function Qt(u){let c,l,d=u[3],f=[];for(let s=0;s<d.length;s+=1)f[s]=Oe($e(u,d,s));const y=s=>oe(f[s],1,1,()=>{f[s]=null});return{c(){c=R("div");for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){c=S(s,"DIV",{class:!0});var i=L(c);for(let p=0;p<f.length;p+=1)f[p].l(i);i.forEach(C),this.h()},h(){M(c,"class","cards svelte-1gyxz3m")},m(s,i){re(s,c,i);for(let p=0;p<f.length;p+=1)f[p].m(c,null);l=!0},p(s,i){if(i&9){d=s[3];let p;for(p=0;p<d.length;p+=1){const x=$e(s,d,p);f[p]?(f[p].p(x,i),ee(f[p],1)):(f[p]=Oe(x),f[p].c(),ee(f[p],1),f[p].m(c,null))}for(ze(),p=d.length;p<f.length;p+=1)y(p);qe()}},i(s){if(!l){for(let i=0;i<d.length;i+=1)ee(f[i]);l=!0}},o(s){f=f.filter(Boolean);for(let i=0;i<f.length;i+=1)oe(f[i]);l=!1},d(s){s&&C(c),kt(f,s)}}}function Oe(u){let c,l;function d(...f){return u[5](u[9],...f)}return c=new Lt({props:{assets:u[0].filter(d)}}),{c(){At(c.$$.fragment)},l(f){Ft(c.$$.fragment,f)},m(f,y){Ut(c,f,y),l=!0},p(f,y){u=f;const s={};y&9&&(s.assets=u[0].filter(d)),c.$set(s)},i(f){l||(ee(c.$$.fragment,f),l=!0)},o(f){oe(c.$$.fragment,f),l=!1},d(f){Ct(c,f)}}}function Zt(u){let c,l,d,f,y,s;const i=[Qt,Kt,Jt],p=[];function x(m,g){return m[0].length>0?0:m[2]?m[1]!=="mainnet"?2:-1:1}return~(d=x(u))&&(f=p[d]=i[d](u)),{c(){c=R("meta"),l=Z(),f&&f.c(),y=De(),this.h()},l(m){const g=Et('[data-svelte="svelte-11dm2ul"]',me.head);c=S(g,"META",{name:!0,content:!0}),g.forEach(C),l=v(m),f&&f.l(m),y=De(),this.h()},h(){me.title="Home",M(c,"name","description"),M(c,"content","Search for Cardania Assets by Wallet Address")},m(m,g){b(me.head,c),re(m,l,g),~d&&p[d].m(m,g),re(m,y,g),s=!0},p(m,[g]){let w=d;d=x(m),d===w?~d&&p[d].p(m,g):(f&&(ze(),oe(p[w],1,1,()=>{p[w]=null}),qe()),~d?(f=p[d],f?f.p(m,g):(f=p[d]=i[d](m),f.c()),ee(f,1),f.m(y.parentNode,y)):f=null)},i(m){s||(ee(f),s=!0)},o(m){oe(f),s=!1},d(m){C(c),m&&C(l),~d&&p[d].d(m),m&&C(y)}}}function vt(u,c,l){let d,f;Bt(u,St,w=>l(8,f=w));let y=[],s="",i="",p="",x=!1;It(async()=>{document.getElementsByTagName("body")[0].style.overflow="auto";const w=f.url.searchParams.get("addr");w&&(console.log("test: "+w),l(0,y=await Me(w)))});async function m(){let w=window.cardano;try{let E=await w.nami.enable();l(2,x=await w.nami.isEnabled());try{let A=await E.getNetworkId();l(1,s=A===1?"mainnet":"testnet")}catch(A){console.error(A),p="Unable to get network from Nami"}try{let A=(await E.getUsedAddresses())[0];i=Xt(A),console.log(i),l(0,y=await Me(i))}catch(A){console.error(A),p="Unable to get address from Nami"}}catch(E){console.error(E),p="Unable to enable Nami"}}const g=(w,E)=>E.cardania===w;return u.$$.update=()=>{u.$$.dirty&1&&l(3,d=[...new Set(y.map(w=>w.cardania))])},[y,s,x,d,m,g]}class or extends He{constructor(c){super(),We(this,c,vt,Zt,Ge,{})}}export{or as default};
