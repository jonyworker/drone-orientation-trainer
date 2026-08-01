(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Al(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ct={},fs=[],Cn=()=>{},Ku=()=>!1,xo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),vo=n=>n.startsWith("onUpdate:"),Ft=Object.assign,Rl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Xh=Object.prototype.hasOwnProperty,tt=(n,e)=>Xh.call(n,e),Be=Array.isArray,hs=n=>ur(n)==="[object Map]",ws=n=>ur(n)==="[object Set]",hc=n=>ur(n)==="[object Date]",Xe=n=>typeof n=="function",yt=n=>typeof n=="string",Dn=n=>typeof n=="symbol",at=n=>n!==null&&typeof n=="object",ju=n=>(at(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),Zu=Object.prototype.toString,ur=n=>Zu.call(n),qh=n=>ur(n).slice(8,-1),Ju=n=>ur(n)==="[object Object]",Cl=n=>yt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ws=Al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},$h=/-\w/g,gn=Mo(n=>n.replace($h,e=>e.slice(1).toUpperCase())),Yh=/\B([A-Z])/g,Gi=Mo(n=>n.replace(Yh,"-$1").toLowerCase()),Qu=Mo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Oo=Mo(n=>n?`on${Qu(n)}`:""),An=(n,e)=>!Object.is(n,e),$r=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ef=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},tf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let dc;const So=()=>dc||(dc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wi(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=yt(i)?Jh(i):Wi(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(yt(n)||at(n))return n}const Kh=/;(?![^(]*\))/g,jh=/:([^]+)/,Zh=/\/\*[^]*?\*\//g;function Jh(n){const e={};return n.replace(Zh,"").split(Kh).forEach(t=>{if(t){const i=t.split(jh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Js(n){let e="";if(yt(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=Js(n[t]);i&&(e+=i+" ")}else if(at(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Qh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ed=Al(Qh);function nf(n){return!!n||n===""}function td(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=As(n[i],e[i]);return t}function As(n,e){if(n===e)return!0;let t=hc(n),i=hc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Dn(n),i=Dn(e),t||i)return n===e;if(t=Be(n),i=Be(e),t||i)return t&&i?td(n,e):!1;if(t=at(n),i=at(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!As(n[o],e[o]))return!1}}return String(n)===String(e)}function Pl(n,e){return n.findIndex(t=>As(t,e))}const sf=n=>!!(n&&n.__v_isRef===!0),st=n=>yt(n)?n:n==null?"":Be(n)||at(n)&&(n.toString===Zu||!Xe(n.toString))?sf(n)?st(n.value):JSON.stringify(n,rf,2):String(n),rf=(n,e)=>sf(e)?rf(n,e.value):hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Bo(i,r)+" =>"]=s,t),{})}:ws(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Bo(t))}:Dn(e)?Bo(e):at(e)&&!Be(e)&&!Ju(e)?String(e):e,Bo=(n,e="")=>{var t;return Dn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Dt;class nd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Dt&&(Dt.active?(this.parent=Dt,this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Dt;try{return Dt=this,e()}finally{Dt=t}}}on(){++this._on===1&&(this.prevScope=Dt,Dt=this)}off(){if(this._on>0&&--this._on===0){if(Dt===this)Dt=this.prevScope;else{let e=Dt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function id(){return Dt}let ft;const zo=new WeakSet;class of{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Dt&&(Dt.active?Dt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,zo.has(this)&&(zo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,pc(this),cf(this);const e=ft,t=_n;ft=this,_n=!0;try{return this.fn()}finally{uf(this),ft=e,_n=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Il(e);this.deps=this.depsTail=void 0,pc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?zo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Aa(this)&&this.run()}get dirty(){return Aa(this)}}let af=0,Xs,qs;function lf(n,e=!1){if(n.flags|=8,e){n.next=qs,qs=n;return}n.next=Xs,Xs=n}function Dl(){af++}function Ll(){if(--af>0)return;if(qs){let e=qs;for(qs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Xs;){let e=Xs;for(Xs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function cf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function uf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Il(i),sd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Aa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ff(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ff(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Qs)||(n.globalVersion=Qs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Aa(n))))return;n.flags|=2;const e=n.dep,t=ft,i=_n;ft=n,_n=!0;try{cf(n);const s=n.fn(n._value);(e.version===0||An(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ft=t,_n=i,uf(n),n.flags&=-3}}function Il(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Il(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function sd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let _n=!0;const hf=[];function Jn(){hf.push(_n),_n=!1}function Qn(){const n=hf.pop();_n=n===void 0?!0:n}function pc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ft;ft=void 0;try{e()}finally{ft=t}}}let Qs=0;class rd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ul{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ft||!_n||ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ft)t=this.activeLink=new rd(ft,this),ft.deps?(t.prevDep=ft.depsTail,ft.depsTail.nextDep=t,ft.depsTail=t):ft.deps=ft.depsTail=t,df(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ft.depsTail,t.nextDep=void 0,ft.depsTail.nextDep=t,ft.depsTail=t,ft.deps===t&&(ft.deps=i)}return t}trigger(e){this.version++,Qs++,this.notify(e)}notify(e){Dl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ll()}}}function df(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)df(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ra=new WeakMap,Ni=Symbol(""),Ca=Symbol(""),er=Symbol("");function Ut(n,e,t){if(_n&&ft){let i=Ra.get(n);i||Ra.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Ul),s.map=i,s.key=t),s.track()}}function Xn(n,e,t,i,s,r){const o=Ra.get(n);if(!o){Qs++;return}const a=l=>{l&&l.trigger()};if(Dl(),e==="clear")o.forEach(a);else{const l=Be(n),c=l&&Cl(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===er||!Dn(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(er)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ni)),hs(n)&&a(o.get(Ca)));break;case"delete":l||(a(o.get(Ni)),hs(n)&&a(o.get(Ca)));break;case"set":hs(n)&&a(o.get(Ni));break}}Ll()}function qi(n){const e=et(n);return e===n?e:(Ut(e,"iterate",er),ln(n)?e:e.map(vn))}function yo(n){return Ut(n=et(n),"iterate",er),n}function bn(n,e){return ei(n)?vs(Fi(n)?vn(e):e):vn(e)}const od={__proto__:null,[Symbol.iterator](){return Ho(this,Symbol.iterator,n=>bn(this,n))},concat(...n){return qi(this).concat(...n.map(e=>Be(e)?qi(e):e))},entries(){return Ho(this,"entries",n=>(n[1]=bn(this,n[1]),n))},every(n,e){return Fn(this,"every",n,e,void 0,arguments)},filter(n,e){return Fn(this,"filter",n,e,t=>t.map(i=>bn(this,i)),arguments)},find(n,e){return Fn(this,"find",n,e,t=>bn(this,t),arguments)},findIndex(n,e){return Fn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Fn(this,"findLast",n,e,t=>bn(this,t),arguments)},findLastIndex(n,e){return Fn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Fn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Vo(this,"includes",n)},indexOf(...n){return Vo(this,"indexOf",n)},join(n){return qi(this).join(n)},lastIndexOf(...n){return Vo(this,"lastIndexOf",n)},map(n,e){return Fn(this,"map",n,e,void 0,arguments)},pop(){return Us(this,"pop")},push(...n){return Us(this,"push",n)},reduce(n,...e){return mc(this,"reduce",n,e)},reduceRight(n,...e){return mc(this,"reduceRight",n,e)},shift(){return Us(this,"shift")},some(n,e){return Fn(this,"some",n,e,void 0,arguments)},splice(...n){return Us(this,"splice",n)},toReversed(){return qi(this).toReversed()},toSorted(n){return qi(this).toSorted(n)},toSpliced(...n){return qi(this).toSpliced(...n)},unshift(...n){return Us(this,"unshift",n)},values(){return Ho(this,"values",n=>bn(this,n))}};function Ho(n,e,t){const i=yo(n),s=i[e]();return i!==n&&!ln(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const ad=Array.prototype;function Fn(n,e,t,i,s,r){const o=yo(n),a=o!==n&&!ln(n),l=o[e];if(l!==ad[e]){const f=l.apply(n,r);return a?vn(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,bn(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function mc(n,e,t,i){const s=yo(n),r=s!==n&&!ln(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=bn(n,c)),t.call(this,c,bn(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](o,...i);return a?bn(n,l):l}function Vo(n,e,t){const i=et(n);Ut(i,"iterate",er);const s=i[e](...t);return(s===-1||s===!1)&&Ol(t[0])?(t[0]=et(t[0]),i[e](...t)):s}function Us(n,e,t=[]){Jn(),Dl();const i=et(n)[e].apply(n,t);return Ll(),Qn(),i}const ld=Al("__proto__,__v_isRef,__isVue"),pf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Dn));function cd(n){Dn(n)||(n=String(n));const e=et(this);return Ut(e,"has",n),e.hasOwnProperty(n)}class mf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?vd:vf:r?xf:_f).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!s){let l;if(o&&(l=od[t]))return l;if(t==="hasOwnProperty")return cd}const a=Reflect.get(e,t,Nt(e)?e:i);if((Dn(t)?pf.has(t):ld(t))||(s||Ut(e,"get",t),r))return a;if(Nt(a)){const l=o&&Cl(t)?a:a.value;return s&&at(l)?Da(l):l}return at(a)?s?Da(a):Rs(a):a}}class gf extends mf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Be(e)&&Cl(t);if(!this._isShallow){const c=ei(r);if(!ln(i)&&!ei(i)&&(r=et(r),i=et(i)),!o&&Nt(r)&&!Nt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:tt(e,t),l=Reflect.set(e,t,i,Nt(e)?e:s);return e===et(s)&&l&&(a?An(i,r)&&Xn(e,"set",t,i):Xn(e,"add",t,i)),l}deleteProperty(e,t){const i=tt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Xn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Dn(t)||!pf.has(t))&&Ut(e,"has",t),i}ownKeys(e){return Ut(e,"iterate",Be(e)?"length":Ni),Reflect.ownKeys(e)}}class ud extends mf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const fd=new gf,hd=new ud,dd=new gf(!0);const Pa=n=>n,Mr=n=>Reflect.getPrototypeOf(n);function pd(n,e,t){return function(...i){const s=this.__v_raw,r=et(s),o=hs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Pa:e?vs:vn;return!e&&Ut(r,"iterate",l?Ca:Ni),Ft(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Sr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function md(n,e){const t={get(s){const r=this.__v_raw,o=et(r),a=et(s);n||(An(s,a)&&Ut(o,"get",s),Ut(o,"get",a));const{has:l}=Mr(o),c=e?Pa:n?vs:vn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ut(et(s),"iterate",Ni),s.size},has(s){const r=this.__v_raw,o=et(r),a=et(s);return n||(An(s,a)&&Ut(o,"has",s),Ut(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=et(a),c=e?Pa:n?vs:vn;return!n&&Ut(l,"iterate",Ni),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Ft(t,n?{add:Sr("add"),set:Sr("set"),delete:Sr("delete"),clear:Sr("clear")}:{add(s){const r=et(this),o=Mr(r),a=et(s),l=!e&&!ln(s)&&!ei(s)?a:s;return o.has.call(r,l)||An(s,l)&&o.has.call(r,s)||An(a,l)&&o.has.call(r,a)||(r.add(l),Xn(r,"add",l,l)),this},set(s,r){!e&&!ln(r)&&!ei(r)&&(r=et(r));const o=et(this),{has:a,get:l}=Mr(o);let c=a.call(o,s);c||(s=et(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?An(r,u)&&Xn(o,"set",s,r):Xn(o,"add",s,r),this},delete(s){const r=et(this),{has:o,get:a}=Mr(r);let l=o.call(r,s);l||(s=et(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Xn(r,"delete",s,void 0),c},clear(){const s=et(this),r=s.size!==0,o=s.clear();return r&&Xn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=pd(s,n,e)}),t}function Nl(n,e){const t=md(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(tt(t,s)&&s in i?t:i,s,r)}const gd={get:Nl(!1,!1)},_d={get:Nl(!1,!0)},xd={get:Nl(!0,!1)};const _f=new WeakMap,xf=new WeakMap,vf=new WeakMap,vd=new WeakMap;function Md(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rs(n){return ei(n)?n:Fl(n,!1,fd,gd,_f)}function Sd(n){return Fl(n,!1,dd,_d,xf)}function Da(n){return Fl(n,!0,hd,xd,vf)}function Fl(n,e,t,i,s){if(!at(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Md(qh(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Fi(n){return ei(n)?Fi(n.__v_raw):!!(n&&n.__v_isReactive)}function ei(n){return!!(n&&n.__v_isReadonly)}function ln(n){return!!(n&&n.__v_isShallow)}function Ol(n){return n?!!n.__v_raw:!1}function et(n){const e=n&&n.__v_raw;return e?et(e):n}function yd(n){return!tt(n,"__v_skip")&&Object.isExtensible(n)&&ef(n,"__v_skip",!0),n}const vn=n=>at(n)?Rs(n):n,vs=n=>at(n)?Da(n):n;function Nt(n){return n?n.__v_isRef===!0:!1}function Oi(n){return Ed(n,!1)}function Ed(n,e){return Nt(n)?n:new bd(n,e)}class bd{constructor(e,t){this.dep=new Ul,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:et(e),this._value=t?e:vn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||ln(e)||ei(e);e=i?e:et(e),An(e,t)&&(this._rawValue=e,this._value=i?e:vn(e),this.dep.trigger())}}function Et(n){return Nt(n)?n.value:n}const Td={get:(n,e,t)=>e==="__v_raw"?n:Et(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Nt(s)&&!Nt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Mf(n){return Fi(n)?n:new Proxy(n,Td)}class wd{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ul(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return lf(this,!0),!0}get value(){const e=this.dep.track();return ff(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ad(n,e,t=!1){let i,s;return Xe(n)?i=n:(i=n.get,s=n.set),new wd(i,s,t)}const yr={},io=new WeakMap;let wi;function Rd(n,e=!1,t=wi){if(t){let i=io.get(t);i||io.set(t,i=[]),i.push(n)}}function Cd(n,e,t=ct){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=M=>s?M:ln(M)||s===!1||s===0?qn(M,1):qn(M);let u,f,h,p,_=!1,x=!1;if(Nt(n)?(f=()=>n.value,_=ln(n)):Fi(n)?(f=()=>c(n),_=!0):Be(n)?(x=!0,_=n.some(M=>Fi(M)||ln(M)),f=()=>n.map(M=>{if(Nt(M))return M.value;if(Fi(M))return c(M);if(Xe(M))return l?l(M,2):M()})):Xe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Jn();try{h()}finally{Qn()}}const M=wi;wi=u;try{return l?l(n,3,[p]):n(p)}finally{wi=M}}:f=Cn,e&&s){const M=f,L=s===!0?1/0:s;f=()=>qn(M(),L)}const m=id(),d=()=>{u.stop(),m&&m.active&&Rl(m.effects,u)};if(r&&e){const M=e;e=(...L)=>{const P=M(...L);return d(),P}}let w=x?new Array(n.length).fill(yr):yr;const T=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const L=u.run();if(M||s||_||(x?L.some((P,R)=>An(P,w[R])):An(L,w))){h&&h();const P=wi;wi=u;try{const R=[L,w===yr?void 0:x&&w[0]===yr?[]:w,p];w=L,l?l(e,3,R):e(...R)}finally{wi=P}}}else u.run()};return a&&a(T),u=new of(f),u.scheduler=o?()=>o(T,!1):T,p=M=>Rd(M,!1,u),h=u.onStop=()=>{const M=io.get(u);if(M){if(l)l(M,4);else for(const L of M)L();io.delete(u)}},e?i?T(!0):w=u.run():o?o(T.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function qn(n,e=1/0,t){if(e<=0||!at(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Nt(n))qn(n.value,e,t);else if(Be(n))for(let i=0;i<n.length;i++)qn(n[i],e,t);else if(ws(n)||hs(n))n.forEach(i=>{qn(i,e,t)});else if(Ju(n)){for(const i in n)qn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&qn(n[i],e,t)}return n}function fr(n,e,t,i){try{return i?n(...i):n()}catch(s){Eo(s,e,t)}}function Mn(n,e,t,i){if(Xe(n)){const s=fr(n,e,t,i);return s&&ju(s)&&s.catch(r=>{Eo(r,e,t)}),s}if(Be(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Mn(n[r],e,t,i));return s}}function Eo(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ct;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Jn(),fr(r,null,10,[n,l,c]),Qn();return}}Pd(n,t,s,i,o)}function Pd(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Vt=[];let En=-1;const ds=[];let li=null,as=0;const Sf=Promise.resolve();let so=null;function Bl(n){const e=so||Sf;return n?e.then(this?n.bind(this):n):e}function Dd(n){let e=En+1,t=Vt.length;for(;e<t;){const i=e+t>>>1,s=Vt[i],r=tr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function zl(n){if(!(n.flags&1)){const e=tr(n),t=Vt[Vt.length-1];!t||!(n.flags&2)&&e>=tr(t)?Vt.push(n):Vt.splice(Dd(e),0,n),n.flags|=1,yf()}}function yf(){so||(so=Sf.then(bf))}function Ld(n){Be(n)?ds.push(...n):li&&n.id===-1?li.splice(as+1,0,n):n.flags&1||(ds.push(n),n.flags|=1),yf()}function gc(n,e,t=En+1){for(;t<Vt.length;t++){const i=Vt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Vt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ef(n){if(ds.length){const e=[...new Set(ds)].sort((t,i)=>tr(t)-tr(i));if(ds.length=0,li){li.push(...e);return}for(li=e,as=0;as<li.length;as++){const t=li[as];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}li=null,as=0}}const tr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function bf(n){try{for(En=0;En<Vt.length;En++){const e=Vt[En];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),fr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;En<Vt.length;En++){const e=Vt[En];e&&(e.flags&=-2)}En=-1,Vt.length=0,Ef(),so=null,(Vt.length||ds.length)&&bf()}}let an=null,Tf=null;function ro(n){const e=an;return an=n,Tf=n&&n.type.__scopeId||null,e}function Id(n,e=an,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Ac(-1);const r=ro(e),o=Bi.length;let a;try{a=n(...s)}finally{for(let l=Bi.length;l>o;l--)jf();ro(r),i._d&&Ac(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function wf(n,e){if(an===null)return n;const t=Ro(an),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ct]=e[s];r&&(Xe(r)&&(r={mounted:r,updated:r}),r.deep&&qn(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function xi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Jn(),Mn(l,t,8,[n.el,a,n,e]),Qn())}}function Ud(n,e){if(kt){let t=kt.provides;const i=kt.parent&&kt.parent.provides;i===t&&(t=kt.provides=Object.create(i)),t[n]=e}}function Yr(n,e,t=!1){const i=Cp();if(i||ps){let s=ps?ps._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}const Nd=Symbol.for("v-scx"),Fd=()=>Yr(Nd);function ui(n,e,t){return Af(n,e,t)}function Af(n,e,t=ct){const{immediate:i,deep:s,flush:r,once:o}=t,a=Ft({},t),l=e&&i||!e&&r!=="post";let c;if(ir){if(r==="sync"){const p=Fd();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Cn,p.resume=Cn,p.pause=Cn,p}}const u=kt;a.call=(p,_,x)=>Mn(p,u,_,x);let f=!1;r==="post"?a.scheduler=p=>{Xt(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():zl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=Cd(n,e,a);return ir&&(c?c.push(h):l&&h()),h}function Od(n,e,t){const i=this.proxy,s=yt(n)?n.includes(".")?Rf(i,n):()=>i[n]:n.bind(i,i);let r;Xe(e)?r=e:(r=e.handler,t=e);const o=hr(this),a=Af(s,r.bind(i),t);return o(),a}function Rf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Bd=Symbol("_vte"),zd=n=>n.__isTeleport,ko=Symbol("_leaveCb");function Hl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Hl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Cf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function _c(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const oo=new WeakMap;function $s(n,e,t,i,s=!1){if(Be(n)){n.forEach((x,m)=>$s(x,e&&(Be(e)?e[m]:e),t,i,s));return}if(Ys(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&$s(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Ro(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ct?a.refs={}:a.refs,f=a.setupState,h=et(f),p=f===ct?Ku:x=>_c(u,x)?!1:tt(h,x),_=(x,m)=>!(m&&_c(u,m));if(c!=null&&c!==l){if(xc(e),yt(c))u[c]=null,p(c)&&(f[c]=null);else if(Nt(c)){const x=e;_(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if(Xe(l))fr(l,a,12,[o,u]);else{const x=yt(l),m=Nt(l);if(x||m){const d=()=>{if(n.f){const w=x?p(l)?f[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)Be(w)&&Rl(w,r);else if(Be(w))w.includes(r)||w.push(r);else if(x)u[l]=[r],p(l)&&(f[l]=u[l]);else{const T=[r];_(l,n.k)&&(l.value=T),n.k&&(u[n.k]=T)}}else x?(u[l]=o,p(l)&&(f[l]=o)):m&&(_(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const w=()=>{d(),oo.delete(n)};w.id=-1,oo.set(n,w),Xt(w,t)}else xc(n),d()}}}function xc(n){const e=oo.get(n);e&&(e.flags|=8,oo.delete(n))}So().requestIdleCallback;So().cancelIdleCallback;const Ys=n=>!!n.type.__asyncLoader,Pf=n=>n.type.__isKeepAlive;function Hd(n,e){Df(n,"a",e)}function Vd(n,e){Df(n,"da",e)}function Df(n,e,t=kt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(bo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Pf(s.parent.vnode)&&kd(i,e,t,s),s=s.parent}}function kd(n,e,t,i){const s=bo(e,n,i,!0);Lf(()=>{Rl(i[e],s)},t)}function bo(n,e,t=kt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Jn();const a=hr(t),l=Mn(e,t,n,o);return a(),Qn(),l});return i?s.unshift(r):s.push(r),r}}const ti=n=>(e,t=kt)=>{(!ir||n==="sp")&&bo(n,(...i)=>e(...i),t)},Gd=ti("bm"),Vl=ti("m"),Wd=ti("bu"),Xd=ti("u"),kl=ti("bum"),Lf=ti("um"),qd=ti("sp"),$d=ti("rtg"),Yd=ti("rtc");function Kd(n,e=kt){bo("ec",n,e)}const jd=Symbol.for("v-ndc");function La(n,e,t,i){let s;const r=t,o=Be(n);if(o||yt(n)){const a=o&&Fi(n);let l=!1,c=!1;a&&(l=!ln(n),c=ei(n),n=yo(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?vs(vn(n[u])):vn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(at(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Ia=n=>n?th(n)?Ro(n):Ia(n.parent):null,Ks=Ft(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ia(n.parent),$root:n=>Ia(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Uf(n),$forceUpdate:n=>n.f||(n.f=()=>{zl(n.update)}),$nextTick:n=>n.n||(n.n=Bl.bind(n.proxy)),$watch:n=>Od.bind(n)}),Go=(n,e)=>n!==ct&&!n.__isScriptSetup&&tt(n,e),Zd={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Go(i,e))return o[e]=1,i[e];if(s!==ct&&tt(s,e))return o[e]=2,s[e];if(tt(r,e))return o[e]=3,r[e];if(t!==ct&&tt(t,e))return o[e]=4,t[e];Ua&&(o[e]=0)}}const c=Ks[e];let u,f;if(c)return e==="$attrs"&&Ut(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ct&&tt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,tt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Go(s,e)?(s[e]=t,!0):i!==ct&&tt(i,e)?(i[e]=t,!0):tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==ct&&a[0]!=="$"&&tt(n,a)||Go(e,a)||tt(r,a)||tt(i,a)||tt(Ks,a)||tt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function vc(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ua=!0;function Jd(n){const e=Uf(n),t=n.proxy,i=n.ctx;Ua=!1,e.beforeCreate&&Mc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:x,deactivated:m,beforeDestroy:d,beforeUnmount:w,destroyed:T,unmounted:M,render:L,renderTracked:P,renderTriggered:R,errorCaptured:N,serverPrefetch:b,expose:S,inheritAttrs:D,components:X,directives:V,filters:te}=e;if(c&&Qd(c,i,null),o)for(const Q in o){const z=o[Q];Xe(z)&&(i[Q]=z.bind(t))}if(s){const Q=s.call(t,t);at(Q)&&(n.data=Rs(Q))}if(Ua=!0,r)for(const Q in r){const z=r[Q],pe=Xe(z)?z.bind(t,t):Xe(z.get)?z.get.bind(t,t):Cn,ve=!Xe(z)&&Xe(z.set)?z.set.bind(t):Cn,Ae=$n({get:pe,set:ve});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:he=>Ae.value=he})}if(a)for(const Q in a)If(a[Q],i,t,Q);if(l){const Q=Xe(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(z=>{Ud(z,Q[z])})}u&&Mc(u,n,"c");function Y(Q,z){Be(z)?z.forEach(pe=>Q(pe.bind(t))):z&&Q(z.bind(t))}if(Y(Gd,f),Y(Vl,h),Y(Wd,p),Y(Xd,_),Y(Hd,x),Y(Vd,m),Y(Kd,N),Y(Yd,P),Y($d,R),Y(kl,w),Y(Lf,M),Y(qd,b),Be(S))if(S.length){const Q=n.exposed||(n.exposed={});S.forEach(z=>{Object.defineProperty(Q,z,{get:()=>t[z],set:pe=>t[z]=pe,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===Cn&&(n.render=L),D!=null&&(n.inheritAttrs=D),X&&(n.components=X),V&&(n.directives=V),b&&Cf(n)}function Qd(n,e,t=Cn){Be(n)&&(n=Na(n));for(const i in n){const s=n[i];let r;at(s)?"default"in s?r=Yr(s.from||i,s.default,!0):r=Yr(s.from||i):r=Yr(s),Nt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Mc(n,e,t){Mn(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function If(n,e,t,i){let s=i.includes(".")?Rf(t,i):()=>t[i];if(yt(n)){const r=e[n];Xe(r)&&ui(s,r)}else if(Xe(n))ui(s,n.bind(t));else if(at(n))if(Be(n))n.forEach(r=>If(r,e,t,i));else{const r=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(r)&&ui(s,r,n)}}function Uf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>ao(l,c,o,!0)),ao(l,e,o)),at(e)&&r.set(e,l),l}function ao(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&ao(n,r,t,!0),s&&s.forEach(o=>ao(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=ep[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const ep={data:Sc,props:yc,emits:yc,methods:Vs,computed:Vs,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:Vs,directives:Vs,watch:np,provide:Sc,inject:tp};function Sc(n,e){return e?n?function(){return Ft(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function tp(n,e){return Vs(Na(n),Na(e))}function Na(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Bt(n,e){return n?[...new Set([].concat(n,e))]:e}function Vs(n,e){return n?Ft(Object.create(null),n,e):e}function yc(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:Ft(Object.create(null),vc(n),vc(e??{})):e}function np(n,e){if(!n)return e;if(!e)return n;const t=Ft(Object.create(null),n);for(const i in e)t[i]=Bt(n[i],e[i]);return t}function Nf(){return{app:null,config:{isNativeTag:Ku,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ip=0;function sp(n,e){return function(i,s=null){Xe(i)||(i=Ft({},i)),s!=null&&!at(s)&&(s=null);const r=Nf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:ip++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Np,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Xe(u.install)?(o.add(u),u.install(c,...f)):Xe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||Ct(i,s);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Ro(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Mn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=ps;ps=c;try{return u()}finally{ps=f}}};return c}}let ps=null;const rp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${gn(e)}Modifiers`]||n[`${Gi(e)}Modifiers`];function op(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ct;let s=t;const r=e.startsWith("update:"),o=r&&rp(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>yt(u)?u.trim():u)),o.number&&(s=t.map(tf)));let a,l=i[a=Oo(e)]||i[a=Oo(gn(e))];!l&&r&&(l=i[a=Oo(Gi(e))]),l&&Mn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Mn(c,n,6,s)}}const ap=new WeakMap;function Ff(n,e,t=!1){const i=t?ap:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Xe(n)){const l=c=>{const u=Ff(c,e,!0);u&&(a=!0,Ft(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(at(n)&&i.set(n,null),null):(Be(r)?r.forEach(l=>o[l]=null):Ft(o,r),at(n)&&i.set(n,o),o)}function To(n,e){return!n||!xo(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),tt(n,e[0].toLowerCase()+e.slice(1))||tt(n,Gi(e))||tt(n,e))}function Ec(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:_,inheritAttrs:x}=n,m=ro(n);let d,w;try{if(t.shapeFlag&4){const M=s||i,L=M;d=Tn(c.call(L,M,u,f,p,h,_)),w=a}else{const M=e;d=Tn(M.length>1?M(f,{attrs:a,slots:o,emit:l}):M(f,null)),w=e.props?a:lp(a)}}catch(M){Bi.length=0,Eo(M,n,1),d=Ct(di)}let T=d;if(w&&x!==!1){const M=Object.keys(w),{shapeFlag:L}=T;M.length&&L&7&&(r&&M.some(vo)&&(w=cp(w,r)),T=Ms(T,w,!1,!0))}return t.dirs&&(T=Ms(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&Hl(T,t.transition),d=T,ro(m),d}const lp=n=>{let e;for(const t in n)(t==="class"||t==="style"||xo(t))&&((e||(e={}))[t]=n[t]);return e},cp=(n,e)=>{const t={};for(const i in n)(!vo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function up(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?bc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Of(o,i,h)&&!To(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?bc(i,o,c):!0:!!o;return!1}function bc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Of(e,n,r)&&!To(t,r))return!0}return!1}function Of(n,e,t){const i=n[t],s=e[t];return t==="style"&&at(i)&&at(s)?!As(i,s):i!==s}function fp({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Bf={},zf=()=>Object.create(Bf),Hf=n=>Object.getPrototypeOf(n)===Bf;function hp(n,e,t,i=!1){const s={},r=zf();n.propsDefaults=Object.create(null),Vf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Sd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function dp(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=et(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(To(n.emitsOptions,h))continue;const p=e[h];if(l)if(tt(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const _=gn(h);s[_]=Fa(l,a,_,p,n,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{Vf(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!tt(e,f)&&((u=Gi(f))===f||!tt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=Fa(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!tt(e,f))&&(delete r[f],c=!0)}c&&Xn(n.attrs,"set","")}function Vf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ws(l))continue;const c=e[l];let u;s&&tt(s,u=gn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:To(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=et(t),c=a||ct;for(let u=0;u<r.length;u++){const f=r[u];t[f]=Fa(s,l,f,c[f],n,!tt(c,f))}}return o}function Fa(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=hr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Gi(t))&&(i=!0))}return i}const pp=new WeakMap;function kf(n,e,t=!1){const i=t?pp:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Xe(n)){const u=f=>{l=!0;const[h,p]=kf(f,e,!0);Ft(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return at(n)&&i.set(n,fs),fs;if(Be(r))for(let u=0;u<r.length;u++){const f=gn(r[u]);Tc(f)&&(o[f]=ct)}else if(r)for(const u in r){const f=gn(u);if(Tc(f)){const h=r[u],p=o[f]=Be(h)||Xe(h)?{type:h}:Ft({},h),_=p.type;let x=!1,m=!0;if(Be(_))for(let d=0;d<_.length;++d){const w=_[d],T=Xe(w)&&w.name;if(T==="Boolean"){x=!0;break}else T==="String"&&(m=!1)}else x=Xe(_)&&_.name==="Boolean";p[0]=x,p[1]=m,(x||tt(p,"default"))&&a.push(f)}}const c=[o,a];return at(n)&&i.set(n,c),c}function Tc(n){return n[0]!=="$"&&!Ws(n)}const Gl=n=>n==="_"||n==="_ctx"||n==="$stable",Wl=n=>Be(n)?n.map(Tn):[Tn(n)],mp=(n,e,t)=>{if(e._n)return e;const i=Id((...s)=>Wl(e(...s)),t);return i._c=!1,i},Gf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Gl(s))continue;const r=n[s];if(Xe(r))e[s]=mp(s,r,i);else if(r!=null){const o=Wl(r);e[s]=()=>o}}},Wf=(n,e)=>{const t=Wl(e);n.slots.default=()=>t},Xf=(n,e,t)=>{for(const i in e)(t||!Gl(i))&&(n[i]=e[i])},gp=(n,e,t)=>{const i=n.slots=zf();if(n.vnode.shapeFlag&32){const s=e._;s?(Xf(i,e,t),t&&ef(i,"_",s,!0)):Gf(e,i)}else e&&Wf(n,e)},_p=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ct;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Xf(s,e,t):(r=!e.$stable,Gf(e,s)),o=e}else e&&(Wf(n,e),o={default:1});if(r)for(const a in s)!Gl(a)&&o[a]==null&&delete s[a]},Xt=yp;function xp(n){return vp(n)}function vp(n,e){const t=So();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Cn,insertStaticContent:_}=n,x=(A,C,v,re=null,K=null,J=null,j=void 0,se=null,$=!!C.dynamicChildren)=>{if(A===C)return;A&&!Ns(A,C)&&(re=ge(A),he(A,K,J,!0),A=null),C.patchFlag===-2&&($=!1,C.dynamicChildren=null);const{type:G,ref:ye,shapeFlag:E}=C;switch(G){case wo:m(A,C,v,re);break;case di:d(A,C,v,re);break;case Kr:A==null&&w(C,v,re,j);break;case rn:X(A,C,v,re,K,J,j,se,$);break;default:E&1?L(A,C,v,re,K,J,j,se,$):E&6?V(A,C,v,re,K,J,j,se,$):(E&64||E&128)&&G.process(A,C,v,re,K,J,j,se,$,Ne)}ye!=null&&K?$s(ye,A&&A.ref,J,C||A,!C):ye==null&&A&&A.ref!=null&&$s(A.ref,null,J,A,!0)},m=(A,C,v,re)=>{if(A==null)i(C.el=a(C.children),v,re);else{const K=C.el=A.el;C.children!==A.children&&c(K,C.children)}},d=(A,C,v,re)=>{A==null?i(C.el=l(C.children||""),v,re):C.el=A.el},w=(A,C,v,re)=>{[A.el,A.anchor]=_(A.children,C,v,re,A.el,A.anchor)},T=({el:A,anchor:C},v,re)=>{let K;for(;A&&A!==C;)K=h(A),i(A,v,re),A=K;i(C,v,re)},M=({el:A,anchor:C})=>{let v;for(;A&&A!==C;)v=h(A),s(A),A=v;s(C)},L=(A,C,v,re,K,J,j,se,$)=>{if(C.type==="svg"?j="svg":C.type==="math"&&(j="mathml"),A==null)P(C,v,re,K,J,j,se,$);else{const G=A.el&&A.el._isVueCE?A.el:null;try{G&&G._beginPatch(),b(A,C,K,J,j,se,$)}finally{G&&G._endPatch()}}},P=(A,C,v,re,K,J,j,se)=>{let $,G;const{props:ye,shapeFlag:E,transition:g,dirs:I}=A;if($=A.el=o(A.type,J,ye&&ye.is,ye),E&8?u($,A.children):E&16&&N(A.children,$,null,re,K,Wo(A,J),j,se),I&&xi(A,null,re,"created"),R($,A,A.scopeId,j,re),ye){for(const Z in ye)Z!=="value"&&!Ws(Z)&&r($,Z,null,ye[Z],J,re);"value"in ye&&r($,"value",null,ye.value,J),(G=ye.onVnodeBeforeMount)&&Sn(G,re,A)}I&&xi(A,null,re,"beforeMount");const k=Mp(K,g);k&&g.beforeEnter($),i($,C,v),((G=ye&&ye.onVnodeMounted)||k||I)&&Xt(()=>{G&&Sn(G,re,A),k&&g.enter($),I&&xi(A,null,re,"mounted")},K)},R=(A,C,v,re,K)=>{if(v&&p(A,v),re)for(let J=0;J<re.length;J++)p(A,re[J]);if(K){let J=K.subTree;if(C===J||Kf(J.type)&&(J.ssContent===C||J.ssFallback===C)){const j=K.vnode;R(A,j,j.scopeId,j.slotScopeIds,K.parent)}}},N=(A,C,v,re,K,J,j,se,$=0)=>{for(let G=$;G<A.length;G++){const ye=A[G]=se?Wn(A[G]):Tn(A[G]);x(null,ye,C,v,re,K,J,j,se)}},b=(A,C,v,re,K,J,j)=>{const se=C.el=A.el;let{patchFlag:$,dynamicChildren:G,dirs:ye}=C;$|=A.patchFlag&16;const E=A.props||ct,g=C.props||ct;let I;if(v&&vi(v,!1),(I=g.onVnodeBeforeUpdate)&&Sn(I,v,C,A),ye&&xi(C,A,v,"beforeUpdate"),v&&vi(v,!0),G&&(!A.dynamicChildren||A.dynamicChildren.length!==G.length)&&($=0,j=!1,G=null),(E.innerHTML&&g.innerHTML==null||E.textContent&&g.textContent==null)&&u(se,""),G?S(A.dynamicChildren,G,se,v,re,Wo(C,K),J):j||z(A,C,se,null,v,re,Wo(C,K),J,!1),$>0){if($&16)D(se,E,g,v,K);else if($&2&&E.class!==g.class&&r(se,"class",null,g.class,K),$&4&&r(se,"style",E.style,g.style,K),$&8){const k=C.dynamicProps;for(let Z=0;Z<k.length;Z++){const H=k[Z],_e=E[H],ce=g[H];(ce!==_e||H==="value")&&r(se,H,_e,ce,K,v)}}$&1&&A.children!==C.children&&u(se,C.children)}else!j&&G==null&&D(se,E,g,v,K);((I=g.onVnodeUpdated)||ye)&&Xt(()=>{I&&Sn(I,v,C,A),ye&&xi(C,A,v,"updated")},re)},S=(A,C,v,re,K,J,j)=>{for(let se=0;se<C.length;se++){const $=A[se],G=C[se],ye=$.el&&($.type===rn||!Ns($,G)||$.shapeFlag&198)?f($.el):v;x($,G,ye,null,re,K,J,j,!0)}},D=(A,C,v,re,K)=>{if(C!==v){if(C!==ct)for(const J in C)!Ws(J)&&!(J in v)&&r(A,J,C[J],null,K,re);for(const J in v){if(Ws(J))continue;const j=v[J],se=C[J];j!==se&&J!=="value"&&r(A,J,se,j,K,re)}"value"in v&&r(A,"value",C.value,v.value,K)}},X=(A,C,v,re,K,J,j,se,$)=>{const G=C.el=A?A.el:a(""),ye=C.anchor=A?A.anchor:a("");let{patchFlag:E,dynamicChildren:g,slotScopeIds:I}=C;I&&(se=se?se.concat(I):I),A==null?(i(G,v,re),i(ye,v,re),N(C.children||[],v,ye,K,J,j,se,$)):E>0&&E&64&&g&&A.dynamicChildren&&A.dynamicChildren.length===g.length?(S(A.dynamicChildren,g,v,K,J,j,se),(C.key!=null||K&&C===K.subTree)&&qf(A,C,!0)):z(A,C,v,ye,K,J,j,se,$)},V=(A,C,v,re,K,J,j,se,$)=>{C.slotScopeIds=se,A==null?C.shapeFlag&512?K.ctx.activate(C,v,re,j,$):te(C,v,re,K,J,j,$):ie(A,C,$)},te=(A,C,v,re,K,J,j)=>{const se=A.component=Rp(A,re,K);if(Pf(A)&&(se.ctx.renderer=Ne),Pp(se,!1,j),se.asyncDep){if(K&&K.registerDep(se,Y,j),!A.el){const $=se.subTree=Ct(di);d(null,$,C,v),A.placeholder=$.el}}else Y(se,A,C,v,K,J,j)},ie=(A,C,v)=>{const re=C.component=A.component;if(up(A,C,v))if(re.asyncDep&&!re.asyncResolved){Q(re,C,v);return}else re.next=C,re.update();else C.el=A.el,re.vnode=C},Y=(A,C,v,re,K,J,j)=>{const se=()=>{if(A.isMounted){let{next:E,bu:g,u:I,parent:k,vnode:Z}=A;{const Te=$f(A);if(Te){E&&(E.el=Z.el,Q(A,E,j)),Te.asyncDep.then(()=>{Xt(()=>{A.isUnmounted||G()},K)});return}}let H=E,_e;vi(A,!1),E?(E.el=Z.el,Q(A,E,j)):E=Z,g&&$r(g),(_e=E.props&&E.props.onVnodeBeforeUpdate)&&Sn(_e,k,E,Z),vi(A,!0);const ce=Ec(A),Ee=A.subTree;A.subTree=ce,x(Ee,ce,f(Ee.el),ge(Ee),A,K,J),E.el=ce.el,H===null&&fp(A,ce.el),I&&Xt(I,K),(_e=E.props&&E.props.onVnodeUpdated)&&Xt(()=>Sn(_e,k,E,Z),K)}else{let E;const{el:g,props:I}=C,{bm:k,m:Z,parent:H,root:_e,type:ce}=A,Ee=Ys(C);vi(A,!1),k&&$r(k),!Ee&&(E=I&&I.onVnodeBeforeMount)&&Sn(E,H,C),vi(A,!0);{_e.ce&&_e.ce._hasShadowRoot()&&_e.ce._injectChildStyle(ce,A.parent?A.parent.type:void 0);const Te=A.subTree=Ec(A);x(null,Te,v,re,A,K,J),C.el=Te.el}if(Z&&Xt(Z,K),!Ee&&(E=I&&I.onVnodeMounted)){const Te=C;Xt(()=>Sn(E,H,Te),K)}(C.shapeFlag&256||H&&Ys(H.vnode)&&H.vnode.shapeFlag&256)&&A.a&&Xt(A.a,K),A.isMounted=!0,C=v=re=null}};A.scope.on();const $=A.effect=new of(se);A.scope.off();const G=A.update=$.run.bind($),ye=A.job=$.runIfDirty.bind($);ye.i=A,ye.id=A.uid,$.scheduler=()=>zl(ye),vi(A,!0),G()},Q=(A,C,v)=>{C.component=A;const re=A.vnode.props;A.vnode=C,A.next=null,dp(A,C.props,re,v),_p(A,C.children,v),Jn(),gc(A),Qn()},z=(A,C,v,re,K,J,j,se,$=!1)=>{const G=A&&A.children,ye=A?A.shapeFlag:0,E=C.children,{patchFlag:g,shapeFlag:I}=C;if(g>0){if(g&128){ve(G,E,v,re,K,J,j,se,$);return}else if(g&256){pe(G,E,v,re,K,J,j,se,$);return}}I&8?(ye&16&&Re(G,K,J),E!==G&&u(v,E)):ye&16?I&16?ve(G,E,v,re,K,J,j,se,$):Re(G,K,J,!0):(ye&8&&u(v,""),I&16&&N(E,v,re,K,J,j,se,$))},pe=(A,C,v,re,K,J,j,se,$)=>{A=A||fs,C=C||fs;const G=A.length,ye=C.length,E=Math.min(G,ye);let g;for(g=0;g<E;g++){const I=C[g]=$?Wn(C[g]):Tn(C[g]);x(A[g],I,v,null,K,J,j,se,$)}G>ye?Re(A,K,J,!0,!1,E):N(C,v,re,K,J,j,se,$,E)},ve=(A,C,v,re,K,J,j,se,$)=>{let G=0;const ye=C.length;let E=A.length-1,g=ye-1;for(;G<=E&&G<=g;){const I=A[G],k=C[G]=$?Wn(C[G]):Tn(C[G]);if(Ns(I,k))x(I,k,v,null,K,J,j,se,$);else break;G++}for(;G<=E&&G<=g;){const I=A[E],k=C[g]=$?Wn(C[g]):Tn(C[g]);if(Ns(I,k))x(I,k,v,null,K,J,j,se,$);else break;E--,g--}if(G>E){if(G<=g){const I=g+1,k=I<ye?C[I].el:re;for(;G<=g;)x(null,C[G]=$?Wn(C[G]):Tn(C[G]),v,k,K,J,j,se,$),G++}}else if(G>g)for(;G<=E;)he(A[G],K,J,!0),G++;else{const I=G,k=G,Z=new Map;for(G=k;G<=g;G++){const Pe=C[G]=$?Wn(C[G]):Tn(C[G]);Pe.key!=null&&Z.set(Pe.key,G)}let H,_e=0;const ce=g-k+1;let Ee=!1,Te=0;const ae=new Array(ce);for(G=0;G<ce;G++)ae[G]=0;for(G=I;G<=E;G++){const Pe=A[G];if(_e>=ce){he(Pe,K,J,!0);continue}let Le;if(Pe.key!=null)Le=Z.get(Pe.key);else for(H=k;H<=g;H++)if(ae[H-k]===0&&Ns(Pe,C[H])){Le=H;break}Le===void 0?he(Pe,K,J,!0):(ae[Le-k]=G+1,Le>=Te?Te=Le:Ee=!0,x(Pe,C[Le],v,null,K,J,j,se,$),_e++)}const be=Ee?Sp(ae):fs;for(H=be.length-1,G=ce-1;G>=0;G--){const Pe=k+G,Le=C[Pe],me=C[Pe+1],He=Pe+1<ye?me.el||Yf(me):re;ae[G]===0?x(null,Le,v,He,K,J,j,se,$):Ee&&(H<0||G!==be[H]?Ae(Le,v,He,2):H--)}}},Ae=(A,C,v,re,K=null)=>{const{el:J,type:j,transition:se,children:$,shapeFlag:G}=A;if(G&6){Ae(A.component.subTree,C,v,re);return}if(G&128){A.suspense.move(C,v,re);return}if(G&64){j.move(A,C,v,Ne);return}if(j===rn){i(J,C,v);for(let E=0;E<$.length;E++)Ae($[E],C,v,re);i(A.anchor,C,v);return}if(j===Kr){T(A,C,v);return}if(re!==2&&G&1&&se)if(re===0)se.persisted&&!J[ko]?i(J,C,v):(se.beforeEnter(J),i(J,C,v),Xt(()=>se.enter(J),K));else{const{leave:E,delayLeave:g,afterLeave:I}=se,k=()=>{A.ctx.isUnmounted?s(J):i(J,C,v)},Z=()=>{const H=J._isLeaving||!!J[ko];J._isLeaving&&J[ko](!0),se.persisted&&!H?k():E(J,()=>{k(),I&&I()})};g?g(J,k,Z):Z()}else i(J,C,v)},he=(A,C,v,re=!1,K=!1)=>{const{type:J,props:j,ref:se,children:$,dynamicChildren:G,shapeFlag:ye,patchFlag:E,dirs:g,cacheIndex:I,memo:k}=A;if(E===-2&&(K=!1),se!=null&&(Jn(),$s(se,null,v,A,!0),Qn()),I!=null&&(C.renderCache[I]=void 0),ye&256){C.ctx.deactivate(A);return}const Z=ye&1&&g,H=!Ys(A);let _e;if(H&&(_e=j&&j.onVnodeBeforeUnmount)&&Sn(_e,C,A),ye&6)de(A.component,v,re);else{if(ye&128){A.suspense.unmount(v,re);return}Z&&xi(A,null,C,"beforeUnmount"),ye&64?A.type.remove(A,C,v,Ne,re):G&&!G.hasOnce&&(J!==rn||E>0&&E&64)?Re(G,C,v,!1,!0):(J===rn&&E&384||!K&&ye&16)&&Re($,C,v),re&&ze(A)}const ce=k!=null&&I==null;(H&&(_e=j&&j.onVnodeUnmounted)||Z||ce)&&Xt(()=>{_e&&Sn(_e,C,A),Z&&xi(A,null,C,"unmounted"),ce&&(A.el=null)},v)},ze=A=>{const{type:C,el:v,anchor:re,transition:K}=A;if(C===rn){ee(v,re);return}if(C===Kr){M(A);return}const J=()=>{s(v),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(A.shapeFlag&1&&K&&!K.persisted){const{leave:j,delayLeave:se}=K,$=()=>j(v,J);se?se(A.el,J,$):$()}else J()},ee=(A,C)=>{let v;for(;A!==C;)v=h(A),s(A),A=v;s(C)},de=(A,C,v)=>{const{bum:re,scope:K,job:J,subTree:j,um:se,m:$,a:G}=A;wc($),wc(G),re&&$r(re),K.stop(),J&&(J.flags|=8,he(j,A,C,v)),se&&Xt(se,C),Xt(()=>{A.isUnmounted=!0},C)},Re=(A,C,v,re=!1,K=!1,J=0)=>{for(let j=J;j<A.length;j++)he(A[j],C,v,re,K)},ge=A=>{if(A.shapeFlag&6)return ge(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const C=h(A.anchor||A.el),v=C&&C[Bd];return v?h(v):C};let De=!1;const je=(A,C,v)=>{let re;A==null?C._vnode&&(he(C._vnode,null,null,!0),re=C._vnode.component):x(C._vnode||null,A,C,null,null,null,v),C._vnode=A,De||(De=!0,gc(re),Ef(),De=!1)},Ne={p:x,um:he,m:Ae,r:ze,mt:te,mc:N,pc:z,pbc:S,n:ge,o:n};return{render:je,hydrate:void 0,createApp:sp(je)}}function Wo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function vi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Mp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function qf(n,e,t=!1){const i=n.children,s=e.children;if(Be(i)&&Be(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Wn(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&qf(o,a)),a.type===wo&&(a.patchFlag===-1&&(a=s[r]=Wn(a)),a.el=o.el),a.type===di&&!a.el&&(a.el=o.el)}}function Sp(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function $f(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$f(e)}function wc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Yf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Yf(e.subTree):null}const Kf=n=>n.__isSuspense;function yp(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):Ld(n)}const rn=Symbol.for("v-fgt"),wo=Symbol.for("v-txt"),di=Symbol.for("v-cmt"),Kr=Symbol.for("v-stc"),Bi=[];let en=null;function ut(n=!1){Bi.push(en=n?null:[])}function jf(){Bi.pop(),en=Bi[Bi.length-1]||null}let nr=1;function Ac(n,e=!1){nr+=n,n<0&&en&&e&&(en.hasOnce=!0)}function Zf(n){return n.dynamicChildren=nr>0?en||fs:null,jf(),nr>0&&en&&en.push(n),n}function xt(n,e,t,i,s,r){return Zf(ne(n,e,t,i,s,r,!0))}function Ao(n,e,t,i,s){return Zf(Ct(n,e,t,i,s,!0))}function Jf(n){return n?n.__v_isVNode===!0:!1}function Ns(n,e){return n.type===e.type&&n.key===e.key}const Qf=({key:n})=>n??null,jr=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?yt(n)||Nt(n)||Xe(n)?{i:an,r:n,k:e,f:!!t}:n:null);function ne(n,e=null,t=null,i=0,s=null,r=n===rn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Qf(e),ref:e&&jr(e),scopeId:Tf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:an};return a?(lo(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=yt(t)?8:16),nr>0&&!o&&en&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&en.push(l),l}const Ct=Ep;function Ep(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===jd)&&(n=di),Jf(n)){const a=Ms(n,e,!0);return t&&lo(a,t),nr>0&&!r&&en&&(a.shapeFlag&6?en[en.indexOf(n)]=a:en.push(a)),a.patchFlag=-2,a}if(Up(n)&&(n=n.__vccOpts),e){e=bp(e);let{class:a,style:l}=e;a&&!yt(a)&&(e.class=Js(a)),at(l)&&(Ol(l)&&!Be(l)&&(l=Ft({},l)),e.style=Wi(l))}const o=yt(n)?1:Kf(n)?128:zd(n)?64:at(n)?4:Xe(n)?2:0;return ne(n,e,t,i,s,o,r,!0)}function bp(n){return n?Ol(n)||Hf(n)?Ft({},n):n:null}function Ms(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Tp(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Qf(c),ref:e&&e.ref?t&&r?Be(r)?r.concat(jr(e)):[r,jr(e)]:jr(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==rn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ms(n.ssContent),ssFallback:n.ssFallback&&Ms(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Hl(u,l.clone(u)),u}function ls(n=" ",e=0){return Ct(wo,null,n,e)}function eh(n,e){const t=Ct(Kr,null,n);return t.staticCount=e,t}function Hi(n="",e=!1){return e?(ut(),Ao(di,null,n)):Ct(di,null,n)}function Tn(n){return n==null||typeof n=="boolean"?Ct(di):Be(n)?Ct(rn,null,n.slice()):Jf(n)?Wn(n):Ct(wo,null,String(n))}function Wn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ms(n)}function lo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),lo(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Hf(e)?e._ctx=an:s===3&&an&&(an.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Xe(e)){if(i&65){lo(n,{default:e});return}e={default:e,_ctx:an},t=32}else e=String(e),i&64?(t=16,e=[ls(e)]):t=8;n.children=e,n.shapeFlag|=t}function Tp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Js([e.class,i.class]));else if(s==="style")e.style=Wi([e.style,i.style]);else if(xo(s)){const r=e[s],o=i[s];o&&r!==o&&!(Be(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!vo(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function Sn(n,e,t,i=null){Mn(n,e,7,[t,i])}const wp=Nf();let Ap=0;function Rp(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||wp,r={uid:Ap++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new nd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kf(i,s),emitsOptions:Ff(i,s),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=op.bind(null,r),n.ce&&n.ce(r),r}let kt=null;const Cp=()=>kt||an;let co,Oa;{const n=So(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};co=e("__VUE_INSTANCE_SETTERS__",t=>kt=t),Oa=e("__VUE_SSR_SETTERS__",t=>ir=t)}const hr=n=>{const e=kt;return co(n),n.scope.on(),()=>{n.scope.off(),co(e)}},Rc=()=>{kt&&kt.scope.off(),co(null)};function th(n){return n.vnode.shapeFlag&4}let ir=!1;function Pp(n,e=!1,t=!1){e&&Oa(e);const{props:i,children:s}=n.vnode,r=th(n);hp(n,i,r,e),gp(n,s,t||e);const o=r?Dp(n,e):void 0;return e&&Oa(!1),o}function Dp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Zd);const{setup:i}=t;if(i){Jn();const s=n.setupContext=i.length>1?Ip(n):null,r=hr(n),o=fr(i,n,0,[n.props,s]),a=ju(o);if(Qn(),r(),(a||n.sp)&&!Ys(n)&&Cf(n),a){if(o.then(Rc,Rc),e)return o.then(l=>{Cc(n,l)}).catch(l=>{Eo(l,n,0)});n.asyncDep=o}else Cc(n,o)}else nh(n)}function Cc(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:at(e)&&(n.setupState=Mf(e)),nh(n)}function nh(n,e,t){const i=n.type;n.render||(n.render=i.render||Cn);{const s=hr(n);Jn();try{Jd(n)}finally{Qn(),s()}}}const Lp={get(n,e){return Ut(n,"get",""),n[e]}};function Ip(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Lp),slots:n.slots,emit:n.emit,expose:e}}function Ro(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Mf(yd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ks)return Ks[t](n)},has(e,t){return t in e||t in Ks}})):n.proxy}function Up(n){return Xe(n)&&"__vccOpts"in n}const $n=(n,e)=>Ad(n,e,ir),Np="3.5.40";let Ba;const Pc=typeof window<"u"&&window.trustedTypes;if(Pc)try{Ba=Pc.createPolicy("vue",{createHTML:n=>n})}catch{}const ih=Ba?n=>Ba.createHTML(n):n=>n,Fp="http://www.w3.org/2000/svg",Op="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,Dc=Gn&&Gn.createElement("template"),Bp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Gn.createElementNS(Fp,n):e==="mathml"?Gn.createElementNS(Op,n):t?Gn.createElement(n,{is:t}):Gn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Gn.createTextNode(n),createComment:n=>Gn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Dc.innerHTML=ih(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Dc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},zp=Symbol("_vtc");function Hp(n,e,t){const i=n[zp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Lc=Symbol("_vod"),Vp=Symbol("_vsh"),kp=Symbol(""),Gp=/(?:^|;)\s*display\s*:/;function Wp(n,e,t){const i=n.style,s=yt(t);let r=!1;if(t&&!s){if(e)if(yt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ks(i,a,"")}else for(const o in e)t[o]==null&&ks(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?qp(n,o,!yt(e)&&e?e[o]:void 0,a)||ks(i,o,a):ks(i,o,"")}}else if(s){if(e!==t){const o=i[kp];o&&(t+=";"+o),i.cssText=t,r=Gp.test(t)}}else e&&n.removeAttribute("style");Lc in n&&(n[Lc]=r?i.display:"",n[Vp]&&(i.display="none"))}const Ic=/\s*!important$/;function ks(n,e,t){if(Be(t))t.forEach(i=>ks(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Xp(n,e);Ic.test(t)?n.setProperty(Gi(i),t.replace(Ic,""),"important"):n[i]=t}}const Uc=["Webkit","Moz","ms"],Xo={};function Xp(n,e){const t=Xo[e];if(t)return t;let i=gn(e);if(i!=="filter"&&i in n)return Xo[e]=i;i=Qu(i);for(let s=0;s<Uc.length;s++){const r=Uc[s]+i;if(r in n)return Xo[e]=r}return e}function qp(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&yt(i)&&t===i}const Nc="http://www.w3.org/1999/xlink";function Fc(n,e,t,i,s,r=ed(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Nc,e.slice(6,e.length)):n.setAttributeNS(Nc,e,t):t==null||r&&!nf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Dn(t)?String(t):t)}function Oc(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ih(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=nf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Xl(n,e,t,i){n.addEventListener(e,t,i)}function $p(n,e,t,i){n.removeEventListener(e,t,i)}const Bc=Symbol("_vei");function Yp(n,e,t,i,s=null){const r=n[Bc]||(n[Bc]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Zp(e);if(i){const c=r[e]=em(i,s);Xl(n,a,c,l)}else o&&($p(n,a,o,l),r[e]=void 0)}}const Kp=/(Once|Passive|Capture)$/,jp=/^on:?(?:Once|Passive|Capture)$/;function Zp(n){let e,t;for(;(t=n.match(Kp))&&!jp.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Gi(n.slice(2)),e]}let qo=0;const Jp=Promise.resolve(),Qp=()=>qo||(Jp.then(()=>qo=0),qo=Date.now());function em(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(Be(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Mn(c,e,5,a)}}else Mn(s,e,5,[i])};return t.value=n,t.attached=Qp(),t}const zc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,tm=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Hp(n,i,o):e==="style"?Wp(n,t,i):xo(e)?vo(e)||Yp(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):nm(n,e,i,o))?(Oc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Fc(n,e,i,o,r,e!=="value")):n._isVueCE&&(im(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!yt(i)))?Oc(n,gn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Fc(n,e,i,o))};function nm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&zc(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return zc(e)&&yt(t)?!1:e in n}function im(n,e){const t=n._def.props;if(!t)return!1;const i=gn(e);return Array.isArray(t)?t.some(s=>gn(s)===i):Object.keys(t).some(s=>gn(s)===i)}const uo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Be(e)?t=>$r(e,t):e},ms=Symbol("_assign"),sm={deep:!0,created(n,e,t){n[ms]=uo(t),Xl(n,"change",()=>{const i=n._modelValue,s=sr(n),r=n.checked,o=n[ms];if(Be(i)){const a=Pl(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(ws(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(sh(n,r))})},mounted:Hc,beforeUpdate(n,e,t){n[ms]=uo(t),Hc(n,e,t)}};function Hc(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(Be(e))s=Pl(e,i.props.value)>-1;else if(ws(e))s=e.has(i.props.value);else{if(e===t)return;s=As(e,sh(n,!0))}n.checked!==s&&(n.checked=s)}const rm={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,Xl(n,"change",()=>{const s=Array.prototype.filter.call(n.options,r=>r.selected).map(r=>t?tf(sr(r)):sr(r));n[ms](n.multiple?ws(n._modelValue)?new Set(s):s:s[0]),n._assigning=!0,Bl(()=>{n._assigning=!1})}),n[ms]=uo(i)},mounted(n,{value:e}){Vc(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[ms]=uo(t)},updated(n,{value:e}){n._assigning||Vc(n,e)}};function Vc(n,e){const t=n.multiple,i=Be(e);if(!(t&&!i&&!ws(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=sr(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Pl(e,a)>-1}else o.selected=e.has(a);else if(As(sr(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function sr(n){return"_value"in n?n._value:n.value}function sh(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const om=["ctrl","shift","alt","meta"],am={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>om.some(t=>n[`${t}Key`]&&!e.includes(t))},lm=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=am[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},cm=Ft({patchProp:tm},Bp);let kc;function um(){return kc||(kc=xp(cm))}const fm=((...n)=>{const e=um().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=dm(i);if(!s)return;const r=e._component;!Xe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,hm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function hm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function dm(n){return yt(n)?document.querySelector(n):n}const ql="178",pm=0,Gc=1,mm=2,rh=1,oh=2,kn=3,pi=0,$t=1,qt=2,fi=0,gs=1,Wc=2,Xc=3,qc=4,gm=5,Ci=100,_m=101,xm=102,vm=103,Mm=104,Sm=200,ym=201,Em=202,bm=203,za=204,Ha=205,Tm=206,wm=207,Am=208,Rm=209,Cm=210,Pm=211,Dm=212,Lm=213,Im=214,Va=0,ka=1,Ga=2,Ss=3,Wa=4,Xa=5,qa=6,$a=7,ah=0,Um=1,Nm=2,hi=0,Fm=1,Om=2,Bm=3,zm=4,Hm=5,Vm=6,km=7,lh=300,ys=301,Es=302,Ya=303,Ka=304,Co=306,ja=1e3,Li=1001,Za=1002,xn=1003,Gm=1004,Er=1005,Rn=1006,$o=1007,Ii=1008,Ln=1009,ch=1010,uh=1011,rr=1012,$l=1013,Vi=1014,Yn=1015,dr=1016,Yl=1017,Kl=1018,or=1020,fh=35902,hh=1021,dh=1022,mn=1023,ar=1026,lr=1027,ph=1028,jl=1029,mh=1030,Zl=1031,Jl=1033,Zr=33776,Jr=33777,Qr=33778,eo=33779,Ja=35840,Qa=35841,el=35842,tl=35843,nl=36196,il=37492,sl=37496,rl=37808,ol=37809,al=37810,ll=37811,cl=37812,ul=37813,fl=37814,hl=37815,dl=37816,pl=37817,ml=37818,gl=37819,_l=37820,xl=37821,to=36492,vl=36494,Ml=36495,gh=36283,Sl=36284,yl=36285,El=36286,Wm=3200,Xm=3201,_h=0,qm=1,ci="",Qt="srgb",bs="srgb-linear",fo="linear",ot="srgb",$i=7680,$c=519,$m=512,Ym=513,Km=514,xh=515,jm=516,Zm=517,Jm=518,Qm=519,Yc=35044,Kc="300 es",Kn=2e3,ho=2001;class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jc=1234567;const js=Math.PI/180,cr=180/Math.PI;function Ps(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function Ql(n,e){return(n%e+e)%e}function eg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function tg(n,e,t){return n!==e?(t-n)/(e-n):0}function Zs(n,e,t){return(1-t)*n+t*e}function ng(n,e,t,i){return Zs(n,e,1-Math.exp(-t*i))}function ig(n,e=1){return e-Math.abs(Ql(n,e*2)-e)}function sg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function rg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function og(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ag(n,e){return n+Math.random()*(e-n)}function lg(n){return n*(.5-Math.random())}function cg(n){n!==void 0&&(jc=n);let e=jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ug(n){return n*js}function fg(n){return n*cr}function hg(n){return(n&n-1)===0&&n!==0}function dg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function pg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function mg(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const it={DEG2RAD:js,RAD2DEG:cr,generateUUID:Ps,clamp:Ke,euclideanModulo:Ql,mapLinear:eg,inverseLerp:tg,lerp:Zs,damp:ng,pingpong:ig,smoothstep:sg,smootherstep:rg,randInt:og,randFloat:ag,randFloatSpread:lg,seededRandom:cg,degToRad:ug,radToDeg:fg,isPowerOfTwo:hg,ceilPowerOfTwo:dg,floorPowerOfTwo:pg,setQuaternionFromProperEuler:mg,normalize:zt,denormalize:cs};class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==h||c!==p||u!==_){let m=1-a;const d=l*h+c*p+u*_+f*x,w=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const L=Math.sqrt(T),P=Math.atan2(L,d*w);m=Math.sin(m*P)/L,a=Math.sin(a*P)/L}const M=a*w;if(l=l*m+h*M,c=c*m+p*M,u=u*m+_*M,f=f*m+x*M,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-a*p,e[t+2]=c*_+u*p+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yo=new O,Zc=new pr;class We{constructor(e,t,i,s,r,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],x=s[0],m=s[3],d=s[6],w=s[1],T=s[4],M=s[7],L=s[2],P=s[5],R=s[8];return r[0]=o*x+a*w+l*L,r[3]=o*m+a*T+l*P,r[6]=o*d+a*M+l*R,r[1]=c*x+u*w+f*L,r[4]=c*m+u*T+f*P,r[7]=c*d+u*M+f*R,r[2]=h*x+p*w+_*L,r[5]=h*m+p*T+_*P,r[8]=h*d+p*M+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,p=c*r-o*l,_=t*f+i*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ko.makeScale(e,t)),this}rotate(e){return this.premultiply(Ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ko=new We;function vh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gg(){const n=po("canvas");return n.style.display="block",n}const Jc={};function _s(n){n in Jc||(Jc[n]=!0,console.warn(n))}function _g(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function xg(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vg(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qc=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eu=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mg(){const n={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ot&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?fo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[bs]:{primaries:e,whitePoint:i,transfer:fo,toXYZ:Qc,fromXYZ:eu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Qc,fromXYZ:eu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}const Qe=Mg();function Zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Yi;class Sg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Yi===void 0&&(Yi=po("canvas")),Yi.width=e.width,Yi.height=e.height;const s=Yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Yi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=po("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zn(t[i]/255)*255):t[i]=Zn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yg=0;class ec{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jo(s[o].image)):r.push(jo(s[o]))}else r=jo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function jo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eg=0;const Zo=new O;class Yt extends Cs{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=Li,s=Li,r=Rn,o=Ii,a=mn,l=Ln,c=Yt.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Ps(),this.name="",this.source=new ec(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zo).x}get height(){return this.source.getSize(Zo).y}get depth(){return this.source.getSize(Zo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ja:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case Za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ja:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case Za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=lh;Yt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,s=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,M=(p+1)/2,L=(d+1)/2,P=(u+h)/4,R=(f+x)/4,N=(_+m)/4;return T>M&&T>L?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=P/i,r=R/i):M>L?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=P/s,r=N/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=R/r,s=N/r),this.set(i,s,r,t),this}let w=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(f-x)/w,this.z=(h-u)/w,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bg extends Cs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Yt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ec(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends bg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Mh extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tg extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,un):un.fromBufferAttribute(r,o),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),br.copy(i.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Tr.subVectors(this.max,Fs),Ki.subVectors(e.a,Fs),ji.subVectors(e.b,Fs),Zi.subVectors(e.c,Fs),ni.subVectors(ji,Ki),ii.subVectors(Zi,ji),Mi.subVectors(Ki,Zi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Mi.z,Mi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Mi.z,0,-Mi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Mi.y,Mi.x,0];return!Jo(t,Ki,ji,Zi,Tr)||(t=[1,0,0,0,1,0,0,0,1],!Jo(t,Ki,ji,Zi,Tr))?!1:(wr.crossVectors(ni,ii),t=[wr.x,wr.y,wr.z],Jo(t,Ki,ji,Zi,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const On=[new O,new O,new O,new O,new O,new O,new O,new O],un=new O,br=new mr,Ki=new O,ji=new O,Zi=new O,ni=new O,ii=new O,Mi=new O,Fs=new O,Tr=new O,wr=new O,Si=new O;function Jo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Si.fromArray(n,r);const a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=e.dot(Si),c=t.dot(Si),u=i.dot(Si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const wg=new mr,Os=new O,Qo=new O;class Po{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const t=Os.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Os,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(Qo)),this.expandByPoint(Os.copy(e.center).sub(Qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Bn=new O,ea=new O,Ar=new O,si=new O,ta=new O,Rr=new O,na=new O;class Sh{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ea.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),si.copy(this.origin).sub(ea);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ar),a=si.dot(this.direction),l=-si.dot(Ar),c=si.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=r*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ea).addScaledVector(Ar,h),p}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const i=Bn.dot(this.direction),s=Bn.dot(Bn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,i,s,r){ta.subVectors(t,e),Rr.subVectors(i,e),na.crossVectors(ta,Rr);let o=this.direction.dot(na),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,e);const l=a*this.direction.dot(Rr.crossVectors(si,Rr));if(l<0)return null;const c=a*this.direction.dot(ta.cross(si));if(c<0||l+c>o)return null;const u=-a*si.dot(na);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,i,s,r,o,a,l,c,u,f,h,p,_,x,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,h,p,_,x,m)}set(e,t,i,s,r,o,a,l,c,u,f,h,p,_,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ji.setFromMatrixColumn(e,0).length(),r=1/Ji.setFromMatrixColumn(e,1).length(),o=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,x=c*f;t[0]=h+x*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ag,e,Rg)}lookAt(e,t,i){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),ri.crossVectors(i,Zt),ri.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),ri.crossVectors(i,Zt)),ri.normalize(),Cr.crossVectors(Zt,ri),s[0]=ri.x,s[4]=Cr.x,s[8]=Zt.x,s[1]=ri.y,s[5]=Cr.y,s[9]=Zt.y,s[2]=ri.z,s[6]=Cr.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],x=i[6],m=i[10],d=i[14],w=i[3],T=i[7],M=i[11],L=i[15],P=s[0],R=s[4],N=s[8],b=s[12],S=s[1],D=s[5],X=s[9],V=s[13],te=s[2],ie=s[6],Y=s[10],Q=s[14],z=s[3],pe=s[7],ve=s[11],Ae=s[15];return r[0]=o*P+a*S+l*te+c*z,r[4]=o*R+a*D+l*ie+c*pe,r[8]=o*N+a*X+l*Y+c*ve,r[12]=o*b+a*V+l*Q+c*Ae,r[1]=u*P+f*S+h*te+p*z,r[5]=u*R+f*D+h*ie+p*pe,r[9]=u*N+f*X+h*Y+p*ve,r[13]=u*b+f*V+h*Q+p*Ae,r[2]=_*P+x*S+m*te+d*z,r[6]=_*R+x*D+m*ie+d*pe,r[10]=_*N+x*X+m*Y+d*ve,r[14]=_*b+x*V+m*Q+d*Ae,r[3]=w*P+T*S+M*te+L*z,r[7]=w*R+T*D+M*ie+L*pe,r[11]=w*N+T*X+M*Y+L*ve,r[15]=w*b+T*V+M*Q+L*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],x=e[7],m=e[11],d=e[15];return _*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*p-i*l*p)+x*(+t*l*p-t*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+m*(+t*c*f-t*a*p-r*o*f+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-t*l*f+t*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],x=e[13],m=e[14],d=e[15],w=f*m*c-x*h*c+x*l*p-a*m*p-f*l*d+a*h*d,T=_*h*c-u*m*c-_*l*p+o*m*p+u*l*d-o*h*d,M=u*x*c-_*f*c+_*a*p-o*x*p-u*a*d+o*f*d,L=_*f*l-u*x*l-_*a*h+o*x*h+u*a*m-o*f*m,P=t*w+i*T+s*M+r*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=w*R,e[1]=(x*h*r-f*m*r-x*s*p+i*m*p+f*s*d-i*h*d)*R,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*d+i*l*d)*R,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*p-i*l*p)*R,e[4]=T*R,e[5]=(u*m*r-_*h*r+_*s*p-t*m*p-u*s*d+t*h*d)*R,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*d-t*l*d)*R,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*p+t*l*p)*R,e[8]=M*R,e[9]=(_*f*r-u*x*r-_*i*p+t*x*p+u*i*d-t*f*d)*R,e[10]=(o*x*r-_*a*r+_*i*c-t*x*c-o*i*d+t*a*d)*R,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*p-t*a*p)*R,e[12]=L*R,e[13]=(u*x*s-_*f*s+_*i*h-t*x*h-u*i*m+t*f*m)*R,e[14]=(_*a*s-o*x*s-_*i*l+t*x*l+o*i*m-t*a*m)*R,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*h+t*a*h)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,p=r*u,_=r*f,x=o*u,m=o*f,d=a*f,w=l*c,T=l*u,M=l*f,L=i.x,P=i.y,R=i.z;return s[0]=(1-(x+d))*L,s[1]=(p+M)*L,s[2]=(_-T)*L,s[3]=0,s[4]=(p-M)*P,s[5]=(1-(h+d))*P,s[6]=(m+w)*P,s[7]=0,s[8]=(_+T)*R,s[9]=(m-w)*R,s[10]=(1-(h+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ji.set(s[0],s[1],s[2]).length();const o=Ji.set(s[4],s[5],s[6]).length(),a=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],fn.copy(this);const c=1/r,u=1/o,f=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=f,fn.elements[9]*=f,fn.elements[10]*=f,t.setFromRotationMatrix(fn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Kn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s);let p,_;if(a===Kn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ho)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Kn){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),h=(t+e)*c,p=(i+s)*u;let _,x;if(a===Kn)_=(o+r)*f,x=-2*f;else if(a===ho)_=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ji=new O,fn=new vt,Ag=new O(0,0,0),Rg=new O(1,1,1),ri=new O,Cr=new O,Zt=new O,tu=new vt,nu=new pr;class In{constructor(e=0,t=0,i=0,s=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nu.setFromEuler(this),this.setFromQuaternion(nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class yh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cg=0;const iu=new O,Qi=new pr,zn=new vt,Pr=new O,Bs=new O,Pg=new O,Dg=new pr,su=new O(1,0,0),ru=new O(0,1,0),ou=new O(0,0,1),au={type:"added"},Lg={type:"removed"},es={type:"childadded",child:null},ia={type:"childremoved",child:null};class Tt extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new O,t=new In,i=new pr,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new We}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(su,e)}rotateY(e){return this.rotateOnAxis(ru,e)}rotateZ(e){return this.rotateOnAxis(ou,e)}translateOnAxis(e,t){return iu.copy(e).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(su,e)}translateY(e){return this.translateOnAxis(ru,e)}translateZ(e){return this.translateOnAxis(ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pr.copy(e):Pr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Bs,Pr,this.up):zn.lookAt(Pr,Bs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(zn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(au),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lg),ia.child=e,this.dispatchEvent(ia),ia.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(au),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,Pg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Dg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Tt.DEFAULT_UP=new O(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new O,Hn=new O,sa=new O,Vn=new O,ts=new O,ns=new O,lu=new O,ra=new O,oa=new O,aa=new O,la=new St,ca=new St,ua=new St;class pn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),hn.subVectors(e,t),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){hn.subVectors(s,t),Hn.subVectors(i,t),sa.subVectors(e,t);const o=hn.dot(hn),a=hn.dot(Hn),l=hn.dot(sa),c=Hn.dot(Hn),u=Hn.dot(sa),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return la.setScalar(0),ca.setScalar(0),ua.setScalar(0),la.fromBufferAttribute(e,t),ca.fromBufferAttribute(e,i),ua.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(la,r.x),o.addScaledVector(ca,r.y),o.addScaledVector(ua,r.z),o}static isFrontFacing(e,t,i,s){return hn.subVectors(i,t),Hn.subVectors(e,t),hn.cross(Hn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),hn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ts.subVectors(s,i),ns.subVectors(r,i),ra.subVectors(e,i);const l=ts.dot(ra),c=ns.dot(ra);if(l<=0&&c<=0)return t.copy(i);oa.subVectors(e,s);const u=ts.dot(oa),f=ns.dot(oa);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ts,o);aa.subVectors(e,r);const p=ts.dot(aa),_=ns.dot(aa);if(_>=0&&p<=_)return t.copy(r);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(ns,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return lu.subVectors(r,s),a=(f-u)/(f-u+(p-_)),t.copy(s).addScaledVector(lu,a);const d=1/(m+x+h);return o=x*d,a=h*d,t.copy(i).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function fa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Qe.workingColorSpace){if(e=Ql(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=fa(o,r,e+1/3),this.g=fa(o,r,e),this.b=fa(o,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Qt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=Eh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Qe.workingToColorSpace(It.copy(this),e),Math.round(Ke(It.r*255,0,255))*65536+Math.round(Ke(It.g*255,0,255))*256+Math.round(Ke(It.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(It.copy(this),t);const i=It.r,s=It.g,r=It.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Qt){Qe.workingToColorSpace(It.copy(this),e);const t=It.r,i=It.g,s=It.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Dr);const i=Zs(oi.h,Dr.h,t),s=Zs(oi.s,Dr.s,t),r=Zs(oi.l,Dr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new $e;$e.NAMES=Eh;let Ig=0;class Ds extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=gs,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Ha,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(i.blending=this.blending),this.side!==pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==za&&(i.blendSrc=this.blendSrc),this.blendDst!==Ha&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Un extends Ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new O,Lr=new Ze;let Ug=0;class Pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ug++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yc,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=cs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),s=zt(s,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yc&&(e.usage=this.usage),e}}class bh extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Th extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gt extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ng=0;const sn=new vt,ha=new Tt,is=new O,Jt=new mr,zs=new mr,Rt=new O;class Gt extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vh(e)?Th:bh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(Jt.min,zs.min),Jt.expandByPoint(Rt),Rt.addVectors(Jt.max,zs.max),Jt.expandByPoint(Rt)):(Jt.expandByPoint(zs.min),Jt.expandByPoint(zs.max))}Jt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(e,c),Rt.add(is)),s=Math.max(s,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new O,l[N]=new O;const c=new O,u=new O,f=new O,h=new Ze,p=new Ze,_=new Ze,x=new O,m=new O;function d(N,b,S){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,S),h.fromBufferAttribute(r,N),p.fromBufferAttribute(r,b),_.fromBufferAttribute(r,S),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(D),a[N].add(x),a[b].add(x),a[S].add(x),l[N].add(m),l[b].add(m),l[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,b=w.length;N<b;++N){const S=w[N],D=S.start,X=S.count;for(let V=D,te=D+X;V<te;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const T=new O,M=new O,L=new O,P=new O;function R(N){L.fromBufferAttribute(s,N),P.copy(L);const b=a[N];T.copy(b),T.sub(L.multiplyScalar(L.dot(b))).normalize(),M.crossVectors(P,b);const D=M.dot(l[N])<0?-1:1;o.setXYZW(N,T.x,T.y,T.z,D)}for(let N=0,b=w.length;N<b;++N){const S=w[N],D=S.start,X=S.count;for(let V=D,te=D+X;V<te;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new Pn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cu=new vt,yi=new Sh,Ir=new Po,uu=new O,Ur=new O,Nr=new O,Fr=new O,da=new O,Or=new O,fu=new O,Br=new O;class Pt extends Tt{constructor(e=new Gt,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Or.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(da.fromBufferAttribute(f,e),o?Or.addScaledVector(da,u):Or.addScaledVector(da.sub(t),u))}t.add(Or)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(Ir.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Ir,uu)===null||yi.origin.distanceToSquared(uu)>(e.far-e.near)**2))&&(cu.copy(r).invert(),yi.copy(e.ray).applyMatrix4(cu),!(i.boundingBox!==null&&yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=o[m.materialIndex],w=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,L=T;M<L;M+=3){const P=a.getX(M),R=a.getX(M+1),N=a.getX(M+2);s=zr(this,d,e,i,c,u,f,P,R,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const w=a.getX(m),T=a.getX(m+1),M=a.getX(m+2);s=zr(this,o,e,i,c,u,f,w,T,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=o[m.materialIndex],w=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,L=T;M<L;M+=3){const P=M,R=M+1,N=M+2;s=zr(this,d,e,i,c,u,f,P,R,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const w=m,T=m+1,M=m+2;s=zr(this,o,e,i,c,u,f,w,T,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Fg(n,e,t,i,s,r,o,a){let l;if(e.side===$t?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===pi,a),l===null)return null;Br.copy(a),Br.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:n}}function zr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ur),n.getVertexPosition(l,Nr),n.getVertexPosition(c,Fr);const u=Fg(n,e,t,i,Ur,Nr,Fr,fu);if(u){const f=new O;pn.getBarycoord(fu,Ur,Nr,Fr,f),s&&(u.uv=pn.getInterpolatedAttribute(s,a,l,c,f,new Ze)),r&&(u.uv1=pn.getInterpolatedAttribute(r,a,l,c,f,new Ze)),o&&(u.normal=pn.getInterpolatedAttribute(o,a,l,c,f,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};pn.getNormal(Ur,Nr,Fr,h.normal),u.face=h,u.barycoord=f}return u}class jn extends Gt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function _(x,m,d,w,T,M,L,P,R,N,b){const S=M/R,D=L/N,X=M/2,V=L/2,te=P/2,ie=R+1,Y=N+1;let Q=0,z=0;const pe=new O;for(let ve=0;ve<Y;ve++){const Ae=ve*D-V;for(let he=0;he<ie;he++){const ze=he*S-X;pe[x]=ze*w,pe[m]=Ae*T,pe[d]=te,c.push(pe.x,pe.y,pe.z),pe[x]=0,pe[m]=0,pe[d]=P>0?1:-1,u.push(pe.x,pe.y,pe.z),f.push(he/R),f.push(1-ve/N),Q+=1}}for(let ve=0;ve<N;ve++)for(let Ae=0;Ae<R;Ae++){const he=h+Ae+ie*ve,ze=h+Ae+ie*(ve+1),ee=h+(Ae+1)+ie*(ve+1),de=h+(Ae+1)+ie*ve;l.push(he,ze,de),l.push(ze,ee,de),z+=6}a.addGroup(p,z,b),p+=z,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=Ts(n[t]);for(const s in i)e[s]=i[s]}return e}function Og(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Bg={clone:Ts,merge:Ht};var zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends Ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zg,this.fragmentShader=Hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=Og(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ah extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new O,hu=new Ze,du=new Ze;class on extends Ah{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,hu,du),t.subVectors(du,hu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,rs=1;class Vg extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(ss,rs,e,t);s.layers=this.layers,this.add(s);const r=new on(ss,rs,e,t);r.layers=this.layers,this.add(r);const o=new on(ss,rs,e,t);o.layers=this.layers,this.add(o);const a=new on(ss,rs,e,t);a.layers=this.layers,this.add(a);const l=new on(ss,rs,e,t);l.layers=this.layers,this.add(l);const c=new on(ss,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Rh extends Yt{constructor(e=[],t=ys,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kg extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Rh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new jn(5,5,5),r=new mi({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:fi});r.uniforms.tEquirect.value=t;const o=new Pt(s,r),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Rn),new Vg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Ui extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gg={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ui;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class tc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=i}clone(){return new tc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Wg extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ma=new O,Xg=new O,qg=new We;class Ai{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ma.subVectors(i,t).cross(Xg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ma),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||qg.getNormalMatrix(e),s=this.coplanarPoint(ma).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Po,$g=new Ze(.5,.5),Hr=new O;class nc{constructor(e=new Ai,t=new Ai,i=new Ai,s=new Ai,r=new Ai,o=new Ai){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],p=s[8],_=s[9],x=s[10],m=s[11],d=s[12],w=s[13],T=s[14],M=s[15];if(i[0].setComponents(l-r,h-c,m-p,M-d).normalize(),i[1].setComponents(l+r,h+c,m+p,M+d).normalize(),i[2].setComponents(l+o,h+u,m+_,M+w).normalize(),i[3].setComponents(l-o,h-u,m-_,M-w).normalize(),i[4].setComponents(l-a,h-f,m-x,M-T).normalize(),t===Kn)i[5].setComponents(l+a,h+f,m+x,M+T).normalize();else if(t===ho)i[5].setComponents(a,f,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){Ei.center.set(0,0,0);const t=$g.distanceTo(e.center);return Ei.radius=.7071067811865476+t,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Hr.x=s.normal.x>0?e.max.x:e.min.x,Hr.y=s.normal.y>0?e.max.y:e.min.y,Hr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Do extends Ds{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mo=new O,go=new O,pu=new vt,Hs=new Sh,Vr=new Po,ga=new O,mu=new O;class ic extends Tt{constructor(e=new Gt,t=new Do){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)mo.fromBufferAttribute(t,s-1),go.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=mo.distanceTo(go);e.setAttribute("lineDistance",new gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,e.ray.intersectsSphere(Vr)===!1)return;pu.copy(s).invert(),Hs.copy(e.ray).applyMatrix4(pu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const d=u.getX(x),w=u.getX(x+1),T=kr(this,e,Hs,l,d,w,x);T&&t.push(T)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(p),d=kr(this,e,Hs,l,x,m,_-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const d=kr(this,e,Hs,l,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){const x=kr(this,e,Hs,l,_-1,p,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function kr(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(mo.fromBufferAttribute(a,s),go.fromBufferAttribute(a,r),t.distanceSqToSegment(mo,go,ga,mu)>i)return;ga.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ga);if(!(c<e.near||c>e.far))return{distance:c,point:mu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const gu=new O,_u=new O;class Yg extends ic{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)gu.fromBufferAttribute(t,s),_u.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+gu.distanceTo(_u);e.setAttribute("lineDistance",new gt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ch extends Yt{constructor(e,t,i=Vi,s,r,o,a=xn,l=xn,c,u=ar,f=1){if(u!==ar&&u!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ec(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lo extends Gt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new O,u=new Ze;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const p=i+f/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(a,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class zi extends Gt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],p=[];let _=0;const x=[],m=i/2;let d=0;w(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new gt(f,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(p,2));function w(){const M=new O,L=new O;let P=0;const R=(t-e)/i;for(let N=0;N<=r;N++){const b=[],S=N/r,D=S*(t-e)+e;for(let X=0;X<=s;X++){const V=X/s,te=V*l+a,ie=Math.sin(te),Y=Math.cos(te);L.x=D*ie,L.y=-S*i+m,L.z=D*Y,f.push(L.x,L.y,L.z),M.set(ie,R,Y).normalize(),h.push(M.x,M.y,M.z),p.push(V,1-S),b.push(_++)}x.push(b)}for(let N=0;N<s;N++)for(let b=0;b<r;b++){const S=x[b][N],D=x[b+1][N],X=x[b+1][N+1],V=x[b][N+1];(e>0||b!==0)&&(u.push(S,D,V),P+=3),(t>0||b!==r-1)&&(u.push(D,X,V),P+=3)}c.addGroup(d,P,0),d+=P}function T(M){const L=_,P=new Ze,R=new O;let N=0;const b=M===!0?e:t,S=M===!0?1:-1;for(let X=1;X<=s;X++)f.push(0,m*S,0),h.push(0,S,0),p.push(.5,.5),_++;const D=_;for(let X=0;X<=s;X++){const te=X/s*l+a,ie=Math.cos(te),Y=Math.sin(te);R.x=b*Y,R.y=m*S,R.z=b*ie,f.push(R.x,R.y,R.z),h.push(0,S,0),P.x=ie*.5+.5,P.y=Y*.5*S+.5,p.push(P.x,P.y),_++}for(let X=0;X<s;X++){const V=L+X,te=D+X;M===!0?u.push(te,te+1,V):u.push(te+1,te,V),N+=3}c.addGroup(d,N,M===!0?1:2),d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Io extends zi{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Io(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gr extends Gt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,p=[],_=[],x=[],m=[];for(let d=0;d<u;d++){const w=d*h-o;for(let T=0;T<c;T++){const M=T*f-r;_.push(M,-w,0),x.push(0,0,1),m.push(T/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<a;w++){const T=w+c*d,M=w+c*(d+1),L=w+1+c*(d+1),P=w+1+c*d;p.push(T,M,P),p.push(M,L,P)}this.setIndex(p),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.width,e.height,e.widthSegments,e.heightSegments)}}class _r extends Gt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let f=e;const h=(t-e)/s,p=new O,_=new Ze;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){const d=r+m/i*o;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,u.push(_.x,_.y)}f+=h}for(let x=0;x<s;x++){const m=x*(i+1);for(let d=0;d<i;d++){const w=d+m,T=w,M=w+i+1,L=w+i+2,P=w+1;a.push(T,M,P),a.push(M,L,P)}}this.setIndex(a),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class _o extends Gt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new O,h=new O,p=[],_=[],x=[],m=[];for(let d=0;d<=i;d++){const w=[],T=d/i;let M=0;d===0&&o===0?M=.5/t:d===i&&l===Math.PI&&(M=-.5/t);for(let L=0;L<=t;L++){const P=L/t;f.x=-e*Math.cos(s+P*r)*Math.sin(o+T*a),f.y=e*Math.cos(o+T*a),f.z=e*Math.sin(s+P*r)*Math.sin(o+T*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(P+M,1-T),w.push(c++)}u.push(w)}for(let d=0;d<i;d++)for(let w=0;w<t;w++){const T=u[d][w+1],M=u[d][w],L=u[d+1][w],P=u[d+1][w+1];(d!==0||o>0)&&p.push(T,M,P),(d!==i-1||l<Math.PI)&&p.push(M,L,P)}this.setIndex(p),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pi extends Ds{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_h,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kg extends Ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jg extends Ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ph extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Zg extends Ph{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _a=new vt,xu=new O,vu=new O;class Jg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nc,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(xu),vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vu),t.updateMatrixWorld(),_a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dh extends Ah{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Qg extends Jg{constructor(){super(new Dh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class e_ extends Ph{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Qg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class t_ extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class n_ extends Yg{constructor(e=10,t=10,i=4473924,s=8947848){i=new $e(i),s=new $e(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,p=0,_=-a;h<=t;h++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const x=h===r?i:s;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}const u=new Gt;u.setAttribute("position",new gt(l,3)),u.setAttribute("color",new gt(c,3));const f=new Do({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Mu=new O;let Gr,xa;class i_ extends Tt{constructor(e=new O(0,0,1),t=new O(0,0,0),i=1,s=16776960,r=i*.2,o=r*.2){super(),this.type="ArrowHelper",Gr===void 0&&(Gr=new Gt,Gr.setAttribute("position",new gt([0,0,0,0,1,0],3)),xa=new Io(.5,1,5,1),xa.translate(0,-.5,0)),this.position.copy(t),this.line=new ic(Gr,new Do({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Pt(xa,new Un({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Mu.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Mu,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}function Su(n,e,t,i){const s=s_(i);switch(t){case hh:return n*e;case ph:return n*e/s.components*s.byteLength;case jl:return n*e/s.components*s.byteLength;case mh:return n*e*2/s.components*s.byteLength;case Zl:return n*e*2/s.components*s.byteLength;case dh:return n*e*3/s.components*s.byteLength;case mn:return n*e*4/s.components*s.byteLength;case Jl:return n*e*4/s.components*s.byteLength;case Zr:case Jr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qr:case eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qa:case tl:return Math.max(n,16)*Math.max(e,8)/4;case Ja:case el:return Math.max(n,8)*Math.max(e,8)/2;case nl:case il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case al:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case cl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ul:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ml:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _l:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case to:case vl:case Ml:return Math.ceil(n/4)*Math.ceil(e/4)*16;case gh:case Sl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case yl:case El:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function s_(n){switch(n){case Ln:case ch:return{byteLength:1,components:1};case rr:case uh:case dr:return{byteLength:2,components:1};case Yl:case Kl:return{byteLength:2,components:4};case Vi:case $l:case Yn:return{byteLength:4,components:1};case fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ql);function Lh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function r_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var o_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,l_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,d_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,m_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,g_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,__=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,v_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,M_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,C_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,P_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,D_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,L_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F_="gl_FragColor = linearToOutputTexel( gl_FragColor );",O_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,G_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Y_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,J_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Q_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,s0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,r0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,a0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,m0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,b0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,C0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,N0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,G0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,W0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,X0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,K0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ex=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ox=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,px=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ax=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Px=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ox=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:o_,alphahash_pars_fragment:a_,alphamap_fragment:l_,alphamap_pars_fragment:c_,alphatest_fragment:u_,alphatest_pars_fragment:f_,aomap_fragment:h_,aomap_pars_fragment:d_,batching_pars_vertex:p_,batching_vertex:m_,begin_vertex:g_,beginnormal_vertex:__,bsdfs:x_,iridescence_fragment:v_,bumpmap_pars_fragment:M_,clipping_planes_fragment:S_,clipping_planes_pars_fragment:y_,clipping_planes_pars_vertex:E_,clipping_planes_vertex:b_,color_fragment:T_,color_pars_fragment:w_,color_pars_vertex:A_,color_vertex:R_,common:C_,cube_uv_reflection_fragment:P_,defaultnormal_vertex:D_,displacementmap_pars_vertex:L_,displacementmap_vertex:I_,emissivemap_fragment:U_,emissivemap_pars_fragment:N_,colorspace_fragment:F_,colorspace_pars_fragment:O_,envmap_fragment:B_,envmap_common_pars_fragment:z_,envmap_pars_fragment:H_,envmap_pars_vertex:V_,envmap_physical_pars_fragment:J_,envmap_vertex:k_,fog_vertex:G_,fog_pars_vertex:W_,fog_fragment:X_,fog_pars_fragment:q_,gradientmap_pars_fragment:$_,lightmap_pars_fragment:Y_,lights_lambert_fragment:K_,lights_lambert_pars_fragment:j_,lights_pars_begin:Z_,lights_toon_fragment:Q_,lights_toon_pars_fragment:e0,lights_phong_fragment:t0,lights_phong_pars_fragment:n0,lights_physical_fragment:i0,lights_physical_pars_fragment:s0,lights_fragment_begin:r0,lights_fragment_maps:o0,lights_fragment_end:a0,logdepthbuf_fragment:l0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:u0,logdepthbuf_vertex:f0,map_fragment:h0,map_pars_fragment:d0,map_particle_fragment:p0,map_particle_pars_fragment:m0,metalnessmap_fragment:g0,metalnessmap_pars_fragment:_0,morphinstance_vertex:x0,morphcolor_vertex:v0,morphnormal_vertex:M0,morphtarget_pars_vertex:S0,morphtarget_vertex:y0,normal_fragment_begin:E0,normal_fragment_maps:b0,normal_pars_fragment:T0,normal_pars_vertex:w0,normal_vertex:A0,normalmap_pars_fragment:R0,clearcoat_normal_fragment_begin:C0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:D0,iridescence_pars_fragment:L0,opaque_fragment:I0,packing:U0,premultiplied_alpha_fragment:N0,project_vertex:F0,dithering_fragment:O0,dithering_pars_fragment:B0,roughnessmap_fragment:z0,roughnessmap_pars_fragment:H0,shadowmap_pars_fragment:V0,shadowmap_pars_vertex:k0,shadowmap_vertex:G0,shadowmask_pars_fragment:W0,skinbase_vertex:X0,skinning_pars_vertex:q0,skinning_vertex:$0,skinnormal_vertex:Y0,specularmap_fragment:K0,specularmap_pars_fragment:j0,tonemapping_fragment:Z0,tonemapping_pars_fragment:J0,transmission_fragment:Q0,transmission_pars_fragment:ex,uv_pars_fragment:tx,uv_pars_vertex:nx,uv_vertex:ix,worldpos_vertex:sx,background_vert:rx,background_frag:ox,backgroundCube_vert:ax,backgroundCube_frag:lx,cube_vert:cx,cube_frag:ux,depth_vert:fx,depth_frag:hx,distanceRGBA_vert:dx,distanceRGBA_frag:px,equirect_vert:mx,equirect_frag:gx,linedashed_vert:_x,linedashed_frag:xx,meshbasic_vert:vx,meshbasic_frag:Mx,meshlambert_vert:Sx,meshlambert_frag:yx,meshmatcap_vert:Ex,meshmatcap_frag:bx,meshnormal_vert:Tx,meshnormal_frag:wx,meshphong_vert:Ax,meshphong_frag:Rx,meshphysical_vert:Cx,meshphysical_frag:Px,meshtoon_vert:Dx,meshtoon_frag:Lx,points_vert:Ix,points_frag:Ux,shadow_vert:Nx,shadow_frag:Fx,sprite_vert:Ox,sprite_frag:Bx},xe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},wn={basic:{uniforms:Ht([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ht([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new $e(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ht([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ht([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ht([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new $e(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ht([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ht([xe.points,xe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ht([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ht([xe.common,xe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ht([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ht([xe.sprite,xe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Ht([xe.common,xe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Ht([xe.lights,xe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};wn.physical={uniforms:Ht([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Wr={r:0,b:0,g:0},bi=new In,zx=new vt;function Hx(n,e,t,i,s,r,o){const a=new $e(0);let l=r===!0?0:1,c,u,f=null,h=0,p=null;function _(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function x(T){let M=!1;const L=_(T);L===null?d(a,l):L&&L.isColor&&(d(L,1),M=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,M){const L=_(M);L&&(L.isCubeTexture||L.mapping===Co)?(u===void 0&&(u=new Pt(new jn(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:Ts(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),bi.copy(M.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zx.makeRotationFromEuler(bi)),u.material.toneMapped=Qe.getTransfer(L.colorSpace)!==ot,(f!==L||h!==L.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=L,h=L.version,p=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Pt(new gr(2,2),new mi({name:"BackgroundMaterial",uniforms:Ts(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(L.colorSpace)!==ot,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||h!==L.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=L,h=L.version,p=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,M){T.getRGB(Wr,wh(n)),i.buffers.color.setClear(Wr.r,Wr.g,Wr.b,M,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(a,l)},render:x,addToRenderList:m,dispose:w}}function Vx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(S,D,X,V,te){let ie=!1;const Y=f(V,X,D);r!==Y&&(r=Y,c(r.object)),ie=p(S,V,X,te),ie&&_(S,V,X,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,M(S,D,X,V),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,D,X){const V=X.wireframe===!0;let te=i[S.id];te===void 0&&(te={},i[S.id]=te);let ie=te[D.id];ie===void 0&&(ie={},te[D.id]=ie);let Y=ie[V];return Y===void 0&&(Y=h(l()),ie[V]=Y),Y}function h(S){const D=[],X=[],V=[];for(let te=0;te<t;te++)D[te]=0,X[te]=0,V[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,D,X,V){const te=r.attributes,ie=D.attributes;let Y=0;const Q=X.getAttributes();for(const z in Q)if(Q[z].location>=0){const ve=te[z];let Ae=ie[z];if(Ae===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(Ae=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(Ae=S.instanceColor)),ve===void 0||ve.attribute!==Ae||Ae&&ve.data!==Ae.data)return!0;Y++}return r.attributesNum!==Y||r.index!==V}function _(S,D,X,V){const te={},ie=D.attributes;let Y=0;const Q=X.getAttributes();for(const z in Q)if(Q[z].location>=0){let ve=ie[z];ve===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor));const Ae={};Ae.attribute=ve,ve&&ve.data&&(Ae.data=ve.data),te[z]=Ae,Y++}r.attributes=te,r.attributesNum=Y,r.index=V}function x(){const S=r.newAttributes;for(let D=0,X=S.length;D<X;D++)S[D]=0}function m(S){d(S,0)}function d(S,D){const X=r.newAttributes,V=r.enabledAttributes,te=r.attributeDivisors;X[S]=1,V[S]===0&&(n.enableVertexAttribArray(S),V[S]=1),te[S]!==D&&(n.vertexAttribDivisor(S,D),te[S]=D)}function w(){const S=r.newAttributes,D=r.enabledAttributes;for(let X=0,V=D.length;X<V;X++)D[X]!==S[X]&&(n.disableVertexAttribArray(X),D[X]=0)}function T(S,D,X,V,te,ie,Y){Y===!0?n.vertexAttribIPointer(S,D,X,te,ie):n.vertexAttribPointer(S,D,X,V,te,ie)}function M(S,D,X,V){x();const te=V.attributes,ie=X.getAttributes(),Y=D.defaultAttributeValues;for(const Q in ie){const z=ie[Q];if(z.location>=0){let pe=te[Q];if(pe===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor)),pe!==void 0){const ve=pe.normalized,Ae=pe.itemSize,he=e.get(pe);if(he===void 0)continue;const ze=he.buffer,ee=he.type,de=he.bytesPerElement,Re=ee===n.INT||ee===n.UNSIGNED_INT||pe.gpuType===$l;if(pe.isInterleavedBufferAttribute){const ge=pe.data,De=ge.stride,je=pe.offset;if(ge.isInstancedInterleavedBuffer){for(let Ne=0;Ne<z.locationSize;Ne++)d(z.location+Ne,ge.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ne=0;Ne<z.locationSize;Ne++)m(z.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let Ne=0;Ne<z.locationSize;Ne++)T(z.location+Ne,Ae/z.locationSize,ee,ve,De*de,(je+Ae/z.locationSize*Ne)*de,Re)}else{if(pe.isInstancedBufferAttribute){for(let ge=0;ge<z.locationSize;ge++)d(z.location+ge,pe.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ge=0;ge<z.locationSize;ge++)m(z.location+ge);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let ge=0;ge<z.locationSize;ge++)T(z.location+ge,Ae/z.locationSize,ee,ve,Ae*de,Ae/z.locationSize*ge*de,Re)}}else if(Y!==void 0){const ve=Y[Q];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(z.location,ve);break;case 3:n.vertexAttrib3fv(z.location,ve);break;case 4:n.vertexAttrib4fv(z.location,ve);break;default:n.vertexAttrib1fv(z.location,ve)}}}}w()}function L(){N();for(const S in i){const D=i[S];for(const X in D){const V=D[X];for(const te in V)u(V[te].object),delete V[te];delete D[X]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const X in D){const V=D[X];for(const te in V)u(V[te].object),delete V[te];delete D[X]}delete i[S.id]}function R(S){for(const D in i){const X=i[D];if(X[S.id]===void 0)continue;const V=X[S.id];for(const te in V)u(V[te].object),delete V[te];delete X[S.id]}}function N(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function kx(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*h[x];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Gx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==mn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const N=R===dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ln&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Yn&&!N)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:L,maxSamples:P}}function Wx(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ai,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const w=r?0:i,T=w*4;let M=d.clippingState||null;l.value=M,M=u(_,h,T,p);for(let L=0;L!==T;++L)M[L]=t[L];d.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const d=p+x*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,M=p;T!==x;++T,M+=4)o.copy(f[T]).applyMatrix4(w,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Xx(n){let e=new WeakMap;function t(o,a){return a===Ya?o.mapping=ys:a===Ka&&(o.mapping=Es),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ya||a===Ka)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kg(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const us=4,yu=[.125,.215,.35,.446,.526,.582],Di=20,va=new Dh,Eu=new $e;let Ma=null,Sa=0,ya=0,Ea=!1;const Ri=(1+Math.sqrt(5))/2,os=1/Ri,bu=[new O(-Ri,os,0),new O(Ri,os,0),new O(-os,0,Ri),new O(os,0,Ri),new O(0,Ri,-os),new O(0,Ri,os),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],qx=new O;class Tu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=qx}=r;Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ma,Sa,ya),this._renderer.xr.enabled=Ea,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:dr,format:mn,colorSpace:bs,depthBuffer:!1},s=wu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$x(r)),this._blurMaterial=Yx(r,e,t)}return s}_compileMaterial(e){const t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,i,s,r){const l=new on(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Eu),f.toneMapping=hi,f.autoClear=!1;const _=new Un({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),x=new Pt(new jn,_);let m=!1;const d=e.background;d?d.isColor&&(_.color.copy(d),e.background=null,m=!0):(_.color.copy(Eu),m=!0);for(let w=0;w<6;w++){const T=w%3;T===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):T===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));const M=this._cubeSize;Xr(s,T*M,w>2?M:0,M,M),f.setRenderTarget(s),m&&f.render(x,l),f.render(e,l)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ys||e.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Xr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,va)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bu[(s-r-1)%bu.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Pt(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Di-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):Di;m>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const d=[];let w=0;for(let R=0;R<Di;++R){const N=R/x,b=Math.exp(-N*N/2);d.push(b),R===0?w+=b:R<m&&(w+=2*b)}for(let R=0;R<d.length;R++)d[R]=d[R]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=_,h.mipInt.value=T-i;const M=this._sizeLods[s],L=3*M*(s>T-us?s-T+us:0),P=4*(this._cubeSize-M);Xr(t,L,P,3*M,2*M),l.setRenderTarget(t),l.render(f,va)}}function $x(n){const e=[],t=[],i=[];let s=n;const r=n-us+1+yu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-us?l=yu[o-n+us-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,m=2,d=1,w=new Float32Array(x*_*p),T=new Float32Array(m*_*p),M=new Float32Array(d*_*p);for(let P=0;P<p;P++){const R=P%3*2/3-1,N=P>2?0:-1,b=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];w.set(b,x*_*P),T.set(h,m*_*P);const S=[P,P,P,P,P,P];M.set(S,d*_*P)}const L=new Gt;L.setAttribute("position",new Pn(w,x)),L.setAttribute("uv",new Pn(T,m)),L.setAttribute("faceIndex",new Pn(M,d)),e.push(L),s>us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function wu(n,e,t){const i=new ki(n,e,t);return i.texture.mapping=Co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Yx(n,e,t){const i=new Float32Array(Di),s=new O(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Au(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Ru(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function sc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ya||l===Ka,u=l===ys||l===Es;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Tu(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Tu(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function jx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&_s("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Zx(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const w=p.array;x=p.version;for(let T=0,M=w.length;T<M;T+=3){const L=w[T+0],P=w[T+1],R=w[T+2];h.push(L,P,P,R,R,L)}}else if(_!==void 0){const w=_.array;x=_.version;for(let T=0,M=w.length/3-1;T<M;T+=3){const L=T+0,P=T+1,R=T+2;h.push(L,P,P,R,R,L)}}else return;const m=new(vh(h)?Th:bh)(h,1);m.version=x;const d=r.get(f);d&&e.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Jx(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,r,h*o),t.update(p,i,1)}function c(h,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,h*o,_),t.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function f(h,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,x,0,_);let d=0;for(let w=0;w<_;w++)d+=p[w]*x[w];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Qx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ev(n,e,t){const i=new WeakMap,s=new St;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let L=a.attributes.position.count*M,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const R=new Float32Array(L*P*4*f),N=new Mh(R,L,P,f);N.type=Yn,N.needsUpdate=!0;const b=M*4;for(let D=0;D<f;D++){const X=d[D],V=w[D],te=T[D],ie=L*P*4*D;for(let Y=0;Y<X.count;Y++){const Q=Y*b;_===!0&&(s.fromBufferAttribute(X,Y),R[ie+Q+0]=s.x,R[ie+Q+1]=s.y,R[ie+Q+2]=s.z,R[ie+Q+3]=0),x===!0&&(s.fromBufferAttribute(V,Y),R[ie+Q+4]=s.x,R[ie+Q+5]=s.y,R[ie+Q+6]=s.z,R[ie+Q+7]=0),m===!0&&(s.fromBufferAttribute(te,Y),R[ie+Q+8]=s.x,R[ie+Q+9]=s.y,R[ie+Q+10]=s.z,R[ie+Q+11]=te.itemSize===4?s.w:1)}}h={count:f,texture:N,size:new Ze(L,P)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function tv(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Ih=new Yt,Cu=new Ch(1,1),Uh=new Mh,Nh=new Tg,Fh=new Rh,Pu=[],Du=[],Lu=new Float32Array(16),Iu=new Float32Array(9),Uu=new Float32Array(4);function Ls(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Pu[s];if(r===void 0&&(r=new Float32Array(s),Pu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Uo(n,e){let t=Du[e];t===void 0&&(t=new Int32Array(e),Du[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function nv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function ov(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(wt(t,i))return;Uu.set(i),n.uniformMatrix2fv(this.addr,!1,Uu),At(t,i)}}function av(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(wt(t,i))return;Iu.set(i),n.uniformMatrix3fv(this.addr,!1,Iu),At(t,i)}}function lv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(wt(t,i))return;Lu.set(i),n.uniformMatrix4fv(this.addr,!1,Lu),At(t,i)}}function cv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function uv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function dv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function gv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function _v(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Cu.compareFunction=xh,r=Cu):r=Ih,t.setTexture2D(e||r,s)}function xv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Nh,s)}function vv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Fh,s)}function Mv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Uh,s)}function Sv(n){switch(n){case 5126:return nv;case 35664:return iv;case 35665:return sv;case 35666:return rv;case 35674:return ov;case 35675:return av;case 35676:return lv;case 5124:case 35670:return cv;case 35667:case 35671:return uv;case 35668:case 35672:return fv;case 35669:case 35673:return hv;case 5125:return dv;case 36294:return pv;case 36295:return mv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return Mv}}function yv(n,e){n.uniform1fv(this.addr,e)}function Ev(n,e){const t=Ls(e,this.size,2);n.uniform2fv(this.addr,t)}function bv(n,e){const t=Ls(e,this.size,3);n.uniform3fv(this.addr,t)}function Tv(n,e){const t=Ls(e,this.size,4);n.uniform4fv(this.addr,t)}function wv(n,e){const t=Ls(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Av(n,e){const t=Ls(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Rv(n,e){const t=Ls(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Cv(n,e){n.uniform1iv(this.addr,e)}function Pv(n,e){n.uniform2iv(this.addr,e)}function Dv(n,e){n.uniform3iv(this.addr,e)}function Lv(n,e){n.uniform4iv(this.addr,e)}function Iv(n,e){n.uniform1uiv(this.addr,e)}function Uv(n,e){n.uniform2uiv(this.addr,e)}function Nv(n,e){n.uniform3uiv(this.addr,e)}function Fv(n,e){n.uniform4uiv(this.addr,e)}function Ov(n,e,t){const i=this.cache,s=e.length,r=Uo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ih,r[o])}function Bv(n,e,t){const i=this.cache,s=e.length,r=Uo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Nh,r[o])}function zv(n,e,t){const i=this.cache,s=e.length,r=Uo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Fh,r[o])}function Hv(n,e,t){const i=this.cache,s=e.length,r=Uo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Uh,r[o])}function Vv(n){switch(n){case 5126:return yv;case 35664:return Ev;case 35665:return bv;case 35666:return Tv;case 35674:return wv;case 35675:return Av;case 35676:return Rv;case 5124:case 35670:return Cv;case 35667:case 35671:return Pv;case 35668:case 35672:return Dv;case 35669:case 35673:return Lv;case 5125:return Iv;case 36294:return Uv;case 36295:return Nv;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return Hv}}class kv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Sv(t.type)}}class Gv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vv(t.type)}}class Wv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function Nu(n,e){n.seq.push(e),n.map[e.id]=e}function Xv(n,e,t){const i=n.name,s=i.length;for(ba.lastIndex=0;;){const r=ba.exec(i),o=ba.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nu(t,c===void 0?new kv(a,n,e):new Gv(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Wv(a),Nu(t,f)),t=f}}}class no{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Xv(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Fu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const qv=37297;let $v=0;function Yv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ou=new We;function Kv(n){Qe._getMatrix(Ou,Qe.workingColorSpace,n);const e=`mat3( ${Ou.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case fo:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Bu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Yv(n.getShaderSource(e),o)}else return s}function jv(n,e){const t=Kv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Zv(n,e){let t;switch(e){case Fm:t="Linear";break;case Om:t="Reinhard";break;case Bm:t="Cineon";break;case zm:t="ACESFilmic";break;case Vm:t="AgX";break;case km:t="Neutral";break;case Hm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qr=new O;function Jv(){Qe.getLuminanceCoefficients(qr);const n=qr.x.toFixed(4),e=qr.y.toFixed(4),t=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function eM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Gs(n){return n!==""}function zu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nM=/^[ \t]*#include +<([\w\d./]+)>/gm;function bl(n){return n.replace(nM,sM)}const iM=new Map;function sM(n,e){let t=qe[e];if(t===void 0){const i=iM.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bl(t)}const rM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(n){return n.replace(rM,oM)}function oM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ku(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function aM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===oh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function lM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ys:case Es:e="ENVMAP_TYPE_CUBE";break;case Co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cM(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Es&&(e="ENVMAP_MODE_REFRACTION"),e}function uM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ah:e="ENVMAP_BLENDING_MULTIPLY";break;case Um:e="ENVMAP_BLENDING_MIX";break;case Nm:e="ENVMAP_BLENDING_ADD";break}return e}function fM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function hM(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=aM(t),c=lM(t),u=cM(t),f=uM(t),h=fM(t),p=Qv(t),_=eM(r),x=s.createProgram();let m,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Gs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Gs).join(`
`),d.length>0&&(d+=`
`)):(m=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),d=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?qe.tonemapping_pars_fragment:"",t.toneMapping!==hi?Zv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,jv("linearToOutputTexel",t.outputColorSpace),Jv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),o=bl(o),o=zu(o,t),o=Hu(o,t),a=bl(a),a=zu(a,t),a=Hu(a,t),o=Vu(o),a=Vu(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=w+m+o,M=w+d+a,L=Fu(s,s.VERTEX_SHADER,T),P=Fu(s,s.FRAGMENT_SHADER,M);s.attachShader(x,L),s.attachShader(x,P),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(D){if(n.debug.checkShaderErrors){const X=s.getProgramInfoLog(x).trim(),V=s.getShaderInfoLog(L).trim(),te=s.getShaderInfoLog(P).trim();let ie=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,L,P);else{const Q=Bu(s,L,"vertex"),z=Bu(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+Q+`
`+z)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(V===""||te==="")&&(Y=!1);Y&&(D.diagnostics={runnable:ie,programLog:X,vertexShader:{log:V,prefix:m},fragmentShader:{log:te,prefix:d}})}s.deleteShader(L),s.deleteShader(P),N=new no(s,x),b=tM(s,x)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,qv)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$v++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=P,this}let dM=0;class pM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new mM(e),t.set(e,i)),i}}class mM{constructor(e){this.id=dM++,this.code=e,this.usedTimes=0}}function gM(n,e,t,i,s,r,o){const a=new yh,l=new pM,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,X,V){const te=X.fog,ie=V.geometry,Y=b.isMeshStandardMaterial?X.environment:null,Q=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),z=Q&&Q.mapping===Co?Q.image.height:null,pe=_[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ve=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ae=ve!==void 0?ve.length:0;let he=0;ie.morphAttributes.position!==void 0&&(he=1),ie.morphAttributes.normal!==void 0&&(he=2),ie.morphAttributes.color!==void 0&&(he=3);let ze,ee,de,Re;if(pe){const nt=wn[pe];ze=nt.vertexShader,ee=nt.fragmentShader}else ze=b.vertexShader,ee=b.fragmentShader,l.update(b),de=l.getVertexShaderID(b),Re=l.getFragmentShaderID(b);const ge=n.getRenderTarget(),De=n.state.buffers.depth.getReversed(),je=V.isInstancedMesh===!0,Ne=V.isBatchedMesh===!0,pt=!!b.map,A=!!b.matcap,C=!!Q,v=!!b.aoMap,re=!!b.lightMap,K=!!b.bumpMap,J=!!b.normalMap,j=!!b.displacementMap,se=!!b.emissiveMap,$=!!b.metalnessMap,G=!!b.roughnessMap,ye=b.anisotropy>0,E=b.clearcoat>0,g=b.dispersion>0,I=b.iridescence>0,k=b.sheen>0,Z=b.transmission>0,H=ye&&!!b.anisotropyMap,_e=E&&!!b.clearcoatMap,ce=E&&!!b.clearcoatNormalMap,Ee=E&&!!b.clearcoatRoughnessMap,Te=I&&!!b.iridescenceMap,ae=I&&!!b.iridescenceThicknessMap,be=k&&!!b.sheenColorMap,Pe=k&&!!b.sheenRoughnessMap,Le=!!b.specularMap,me=!!b.specularColorMap,He=!!b.specularIntensityMap,U=Z&&!!b.transmissionMap,Me=Z&&!!b.thicknessMap,le=!!b.gradientMap,Ce=!!b.alphaMap,ue=b.alphaTest>0,oe=!!b.alphaHash,Ie=!!b.extensions;let Ge=hi;b.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const ht={shaderID:pe,shaderType:b.type,shaderName:b.name,vertexShader:ze,fragmentShader:ee,defines:b.defines,customVertexShaderID:de,customFragmentShaderID:Re,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&V._colorsTexture!==null,instancing:je,instancingColor:je&&V.instanceColor!==null,instancingMorph:je&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:bs,alphaToCoverage:!!b.alphaToCoverage,map:pt,matcap:A,envMap:C,envMapMode:C&&Q.mapping,envMapCubeUVHeight:z,aoMap:v,lightMap:re,bumpMap:K,normalMap:J,displacementMap:h&&j,emissiveMap:se,normalMapObjectSpace:J&&b.normalMapType===qm,normalMapTangentSpace:J&&b.normalMapType===_h,metalnessMap:$,roughnessMap:G,anisotropy:ye,anisotropyMap:H,clearcoat:E,clearcoatMap:_e,clearcoatNormalMap:ce,clearcoatRoughnessMap:Ee,dispersion:g,iridescence:I,iridescenceMap:Te,iridescenceThicknessMap:ae,sheen:k,sheenColorMap:be,sheenRoughnessMap:Pe,specularMap:Le,specularColorMap:me,specularIntensityMap:He,transmission:Z,transmissionMap:U,thicknessMap:Me,gradientMap:le,opaque:b.transparent===!1&&b.blending===gs&&b.alphaToCoverage===!1,alphaMap:Ce,alphaTest:ue,alphaHash:oe,combine:b.combine,mapUv:pt&&x(b.map.channel),aoMapUv:v&&x(b.aoMap.channel),lightMapUv:re&&x(b.lightMap.channel),bumpMapUv:K&&x(b.bumpMap.channel),normalMapUv:J&&x(b.normalMap.channel),displacementMapUv:j&&x(b.displacementMap.channel),emissiveMapUv:se&&x(b.emissiveMap.channel),metalnessMapUv:$&&x(b.metalnessMap.channel),roughnessMapUv:G&&x(b.roughnessMap.channel),anisotropyMapUv:H&&x(b.anisotropyMap.channel),clearcoatMapUv:_e&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(b.sheenRoughnessMap.channel),specularMapUv:Le&&x(b.specularMap.channel),specularColorMapUv:me&&x(b.specularColorMap.channel),specularIntensityMapUv:He&&x(b.specularIntensityMap.channel),transmissionMapUv:U&&x(b.transmissionMap.channel),thicknessMapUv:Me&&x(b.thicknessMap.channel),alphaMapUv:Ce&&x(b.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(J||ye),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ie.attributes.uv&&(pt||Ce),fog:!!te,useFog:b.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:De,skinning:V.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:he,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:pt&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===ot,decodeVideoTextureEmissive:se&&b.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(b.emissiveMap.colorSpace)===ot,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===qt,flipSided:b.side===$t,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ie&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&b.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function d(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(w(S,b),T(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function w(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function T(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){const S=_[b.type];let D;if(S){const X=wn[S];D=Bg.clone(X.uniforms)}else D=b.uniforms;return D}function L(b,S){let D;for(let X=0,V=u.length;X<V;X++){const te=u[X];if(te.cacheKey===S){D=te,++D.usedTimes;break}}return D===void 0&&(D=new hM(n,S,b,r),u.push(D)),D}function P(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function R(b){l.remove(b)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:L,releaseProgram:P,releaseShaderCache:R,programs:u,dispose:N}}function _M(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function xM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,p,_,x,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function a(f,h,p,_,x,m){const d=o(f,h,p,_,x,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(f,h,p,_,x,m){const d=o(f,h,p,_,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||xM),i.length>1&&i.sort(h||Gu),s.length>1&&s.sort(h||Gu)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function vM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Wu,n.set(i,[o])):s>=r.length?(o=new Wu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function MM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new $e};break;case"SpotLight":t={position:new O,direction:new O,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function SM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yM=0;function EM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bM(n){const e=new MM,t=SM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new vt,o=new vt;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,w=0,T=0,M=0,L=0,P=0,R=0;c.sort(EM);for(let b=0,S=c.length;b<S;b++){const D=c[b],X=D.color,V=D.intensity,te=D.distance,ie=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=X.r*V,f+=X.g*V,h+=X.b*V;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],V);R++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,z=t.get(D);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=ie,i.directionalShadowMatrix[p]=D.shadow.matrix,w++}i.directional[p]=Y,p++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(X).multiplyScalar(V),Y.distance=te,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[x]=Y;const Q=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,Q.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[x]=Q.matrix,D.castShadow){const z=t.get(D);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,i.spotShadow[x]=z,i.spotShadowMap[x]=ie,M++}x++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(X).multiplyScalar(V),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=Y,m++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const Q=D.shadow,z=t.get(D);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,z.shadowCameraNear=Q.camera.near,z.shadowCameraFar=Q.camera.far,i.pointShadow[_]=z,i.pointShadowMap[_]=ie,i.pointShadowMatrix[_]=D.shadow.matrix,T++}i.point[_]=Y,_++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(V),Y.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[d]=Y,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==p||N.pointLength!==_||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==d||N.numDirectionalShadows!==w||N.numPointShadows!==T||N.numSpotShadows!==M||N.numSpotMaps!==L||N.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=M+L-P,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,N.directionalLength=p,N.pointLength=_,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=d,N.numDirectionalShadows=w,N.numPointShadows=T,N.numSpotShadows=M,N.numSpotMaps=L,N.numLightProbes=R,i.version=yM++)}function l(c,u){let f=0,h=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const T=c[d];if(T.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(T.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Xu(n){const e=new bM(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function TM(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Xu(n),e.set(s,[a])):r>=o.length?(a=new Xu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const wM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function RM(n,e,t){let i=new nc;const s=new Ze,r=new Ze,o=new St,a=new Kg({depthPacking:Xm}),l=new jg,c={},u=t.maxTextureSize,f={[pi]:$t,[$t]:pi,[qt]:qt},h=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:wM,fragmentShader:AM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Gt;_.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Pt(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rh;let d=this.type;this.render=function(P,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),X=n.state;X.setBlending(fi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const V=d!==kn&&this.type===kn,te=d===kn&&this.type!==kn;for(let ie=0,Y=P.length;ie<Y;ie++){const Q=P[ie],z=Q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const pe=z.getFrameExtents();if(s.multiply(pe),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pe.x),s.x=r.x*pe.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pe.y),s.y=r.y*pe.y,z.mapSize.y=r.y)),z.map===null||V===!0||te===!0){const Ae=this.type!==kn?{minFilter:xn,magFilter:xn}:{};z.map!==null&&z.map.dispose(),z.map=new ki(s.x,s.y,Ae),z.map.texture.name=Q.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const ve=z.getViewportCount();for(let Ae=0;Ae<ve;Ae++){const he=z.getViewport(Ae);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),X.viewport(o),z.updateMatrices(Q,Ae),i=z.getFrustum(),M(R,N,z.camera,Q,this.type)}z.isPointLightShadow!==!0&&this.type===kn&&w(z,N),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,S,D)};function w(P,R){const N=e.update(x);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ki(s.x,s.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,N,h,x,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,N,p,x,null)}function T(P,R,N,b){let S=null;const D=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)S=D;else if(S=N.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const X=S.uuid,V=R.uuid;let te=c[X];te===void 0&&(te={},c[X]=te);let ie=te[V];ie===void 0&&(ie=S.clone(),te[V]=ie,R.addEventListener("dispose",L)),S=ie}if(S.visible=R.visible,S.wireframe=R.wireframe,b===kn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:f[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=n.properties.get(S);X.light=N}return S}function M(P,R,N,b,S){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===kn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const V=e.update(P),te=P.material;if(Array.isArray(te)){const ie=V.groups;for(let Y=0,Q=ie.length;Y<Q;Y++){const z=ie[Y],pe=te[z.materialIndex];if(pe&&pe.visible){const ve=T(P,pe,b,S);P.onBeforeShadow(n,P,R,N,V,ve,z),n.renderBufferDirect(N,null,V,ve,P,z),P.onAfterShadow(n,P,R,N,V,ve,z)}}}else if(te.visible){const ie=T(P,te,b,S);P.onBeforeShadow(n,P,R,N,V,ie,null),n.renderBufferDirect(N,null,V,ie,P,null),P.onAfterShadow(n,P,R,N,V,ie,null)}}const X=P.children;for(let V=0,te=X.length;V<te;V++)M(X[V],R,N,b,S)}function L(P){P.target.removeEventListener("dispose",L);for(const N in c){const b=c[N],S=P.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const CM={[Va]:ka,[Ga]:qa,[Wa]:$a,[Ss]:Xa,[ka]:Va,[qa]:Ga,[$a]:Wa,[Xa]:Ss};function PM(n,e){function t(){let U=!1;const Me=new St;let le=null;const Ce=new St(0,0,0,0);return{setMask:function(ue){le!==ue&&!U&&(n.colorMask(ue,ue,ue,ue),le=ue)},setLocked:function(ue){U=ue},setClear:function(ue,oe,Ie,Ge,ht){ht===!0&&(ue*=Ge,oe*=Ge,Ie*=Ge),Me.set(ue,oe,Ie,Ge),Ce.equals(Me)===!1&&(n.clearColor(ue,oe,Ie,Ge),Ce.copy(Me))},reset:function(){U=!1,le=null,Ce.set(-1,0,0,0)}}}function i(){let U=!1,Me=!1,le=null,Ce=null,ue=null;return{setReversed:function(oe){if(Me!==oe){const Ie=e.get("EXT_clip_control");oe?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Me=oe;const Ge=ue;ue=null,this.setClear(Ge)}},getReversed:function(){return Me},setTest:function(oe){oe?ge(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(oe){le!==oe&&!U&&(n.depthMask(oe),le=oe)},setFunc:function(oe){if(Me&&(oe=CM[oe]),Ce!==oe){switch(oe){case Va:n.depthFunc(n.NEVER);break;case ka:n.depthFunc(n.ALWAYS);break;case Ga:n.depthFunc(n.LESS);break;case Ss:n.depthFunc(n.LEQUAL);break;case Wa:n.depthFunc(n.EQUAL);break;case Xa:n.depthFunc(n.GEQUAL);break;case qa:n.depthFunc(n.GREATER);break;case $a:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=oe}},setLocked:function(oe){U=oe},setClear:function(oe){ue!==oe&&(Me&&(oe=1-oe),n.clearDepth(oe),ue=oe)},reset:function(){U=!1,le=null,Ce=null,ue=null,Me=!1}}}function s(){let U=!1,Me=null,le=null,Ce=null,ue=null,oe=null,Ie=null,Ge=null,ht=null;return{setTest:function(nt){U||(nt?ge(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(nt){Me!==nt&&!U&&(n.stencilMask(nt),Me=nt)},setFunc:function(nt,cn,Nn){(le!==nt||Ce!==cn||ue!==Nn)&&(n.stencilFunc(nt,cn,Nn),le=nt,Ce=cn,ue=Nn)},setOp:function(nt,cn,Nn){(oe!==nt||Ie!==cn||Ge!==Nn)&&(n.stencilOp(nt,cn,Nn),oe=nt,Ie=cn,Ge=Nn)},setLocked:function(nt){U=nt},setClear:function(nt){ht!==nt&&(n.clearStencil(nt),ht=nt)},reset:function(){U=!1,Me=null,le=null,Ce=null,ue=null,oe=null,Ie=null,Ge=null,ht=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],_=null,x=!1,m=null,d=null,w=null,T=null,M=null,L=null,P=null,R=new $e(0,0,0),N=0,b=!1,S=null,D=null,X=null,V=null,te=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Q=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=Q>=1):z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=Q>=2);let pe=null,ve={};const Ae=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),ze=new St().fromArray(Ae),ee=new St().fromArray(he);function de(U,Me,le,Ce){const ue=new Uint8Array(4),oe=n.createTexture();n.bindTexture(U,oe),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<le;Ie++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(Me+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return oe}const Re={};Re[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(n.DEPTH_TEST),o.setFunc(Ss),K(!1),J(Gc),ge(n.CULL_FACE),v(fi);function ge(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function De(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function je(U,Me){return f[U]!==Me?(n.bindFramebuffer(U,Me),f[U]=Me,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Me),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function Ne(U,Me){let le=p,Ce=!1;if(U){le=h.get(Me),le===void 0&&(le=[],h.set(Me,le));const ue=U.textures;if(le.length!==ue.length||le[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ie=ue.length;oe<Ie;oe++)le[oe]=n.COLOR_ATTACHMENT0+oe;le.length=ue.length,Ce=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Ce=!0);Ce&&n.drawBuffers(le)}function pt(U){return _!==U?(n.useProgram(U),_=U,!0):!1}const A={[Ci]:n.FUNC_ADD,[_m]:n.FUNC_SUBTRACT,[xm]:n.FUNC_REVERSE_SUBTRACT};A[vm]=n.MIN,A[Mm]=n.MAX;const C={[Sm]:n.ZERO,[ym]:n.ONE,[Em]:n.SRC_COLOR,[za]:n.SRC_ALPHA,[Cm]:n.SRC_ALPHA_SATURATE,[Am]:n.DST_COLOR,[Tm]:n.DST_ALPHA,[bm]:n.ONE_MINUS_SRC_COLOR,[Ha]:n.ONE_MINUS_SRC_ALPHA,[Rm]:n.ONE_MINUS_DST_COLOR,[wm]:n.ONE_MINUS_DST_ALPHA,[Pm]:n.CONSTANT_COLOR,[Dm]:n.ONE_MINUS_CONSTANT_COLOR,[Lm]:n.CONSTANT_ALPHA,[Im]:n.ONE_MINUS_CONSTANT_ALPHA};function v(U,Me,le,Ce,ue,oe,Ie,Ge,ht,nt){if(U===fi){x===!0&&(De(n.BLEND),x=!1);return}if(x===!1&&(ge(n.BLEND),x=!0),U!==gm){if(U!==m||nt!==b){if((d!==Ci||M!==Ci)&&(n.blendEquation(n.FUNC_ADD),d=Ci,M=Ci),nt)switch(U){case gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wc:n.blendFunc(n.ONE,n.ONE);break;case Xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,T=null,L=null,P=null,R.set(0,0,0),N=0,m=U,b=nt}return}ue=ue||Me,oe=oe||le,Ie=Ie||Ce,(Me!==d||ue!==M)&&(n.blendEquationSeparate(A[Me],A[ue]),d=Me,M=ue),(le!==w||Ce!==T||oe!==L||Ie!==P)&&(n.blendFuncSeparate(C[le],C[Ce],C[oe],C[Ie]),w=le,T=Ce,L=oe,P=Ie),(Ge.equals(R)===!1||ht!==N)&&(n.blendColor(Ge.r,Ge.g,Ge.b,ht),R.copy(Ge),N=ht),m=U,b=!1}function re(U,Me){U.side===qt?De(n.CULL_FACE):ge(n.CULL_FACE);let le=U.side===$t;Me&&(le=!le),K(le),U.blending===gs&&U.transparent===!1?v(fi):v(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Ce=U.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),se(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(U){S!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),S=U)}function J(U){U!==pm?(ge(n.CULL_FACE),U!==D&&(U===Gc?n.cullFace(n.BACK):U===mm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),D=U}function j(U){U!==X&&(Y&&n.lineWidth(U),X=U)}function se(U,Me,le){U?(ge(n.POLYGON_OFFSET_FILL),(V!==Me||te!==le)&&(n.polygonOffset(Me,le),V=Me,te=le)):De(n.POLYGON_OFFSET_FILL)}function $(U){U?ge(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function G(U){U===void 0&&(U=n.TEXTURE0+ie-1),pe!==U&&(n.activeTexture(U),pe=U)}function ye(U,Me,le){le===void 0&&(pe===null?le=n.TEXTURE0+ie-1:le=pe);let Ce=ve[le];Ce===void 0&&(Ce={type:void 0,texture:void 0},ve[le]=Ce),(Ce.type!==U||Ce.texture!==Me)&&(pe!==le&&(n.activeTexture(le),pe=le),n.bindTexture(U,Me||Re[U]),Ce.type=U,Ce.texture=Me)}function E(){const U=ve[pe];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(U){ze.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ze.copy(U))}function Pe(U){ee.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ee.copy(U))}function Le(U,Me){let le=c.get(Me);le===void 0&&(le=new WeakMap,c.set(Me,le));let Ce=le.get(U);Ce===void 0&&(Ce=n.getUniformBlockIndex(Me,U.name),le.set(U,Ce))}function me(U,Me){const Ce=c.get(Me).get(U);l.get(Me)!==Ce&&(n.uniformBlockBinding(Me,Ce,U.__bindingPointIndex),l.set(Me,Ce))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},pe=null,ve={},f={},h=new WeakMap,p=[],_=null,x=!1,m=null,d=null,w=null,T=null,M=null,L=null,P=null,R=new $e(0,0,0),N=0,b=!1,S=null,D=null,X=null,V=null,te=null,ze.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ge,disable:De,bindFramebuffer:je,drawBuffers:Ne,useProgram:pt,setBlending:v,setMaterial:re,setFlipSided:K,setCullFace:J,setLineWidth:j,setPolygonOffset:se,setScissorTest:$,activeTexture:G,bindTexture:ye,unbindTexture:E,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:Te,texImage3D:ae,updateUBOMapping:Le,uniformBlockBinding:me,texStorage2D:ce,texStorage3D:Ee,texSubImage2D:k,texSubImage3D:Z,compressedTexSubImage2D:H,compressedTexSubImage3D:_e,scissor:be,viewport:Pe,reset:He}}function DM(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,g){return p?new OffscreenCanvas(E,g):po("canvas")}function x(E,g,I){let k=1;const Z=ye(E);if((Z.width>I||Z.height>I)&&(k=I/Math.max(Z.width,Z.height)),k<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const H=Math.floor(k*Z.width),_e=Math.floor(k*Z.height);f===void 0&&(f=_(H,_e));const ce=g?_(H,_e):f;return ce.width=H,ce.height=_e,ce.getContext("2d").drawImage(E,0,0,H,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+H+"x"+_e+")."),ce}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function m(E){return E.generateMipmaps}function d(E){n.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(E,g,I,k,Z=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let H=g;if(g===n.RED&&(I===n.FLOAT&&(H=n.R32F),I===n.HALF_FLOAT&&(H=n.R16F),I===n.UNSIGNED_BYTE&&(H=n.R8)),g===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(H=n.R8UI),I===n.UNSIGNED_SHORT&&(H=n.R16UI),I===n.UNSIGNED_INT&&(H=n.R32UI),I===n.BYTE&&(H=n.R8I),I===n.SHORT&&(H=n.R16I),I===n.INT&&(H=n.R32I)),g===n.RG&&(I===n.FLOAT&&(H=n.RG32F),I===n.HALF_FLOAT&&(H=n.RG16F),I===n.UNSIGNED_BYTE&&(H=n.RG8)),g===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(H=n.RG8UI),I===n.UNSIGNED_SHORT&&(H=n.RG16UI),I===n.UNSIGNED_INT&&(H=n.RG32UI),I===n.BYTE&&(H=n.RG8I),I===n.SHORT&&(H=n.RG16I),I===n.INT&&(H=n.RG32I)),g===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(H=n.RGB8UI),I===n.UNSIGNED_SHORT&&(H=n.RGB16UI),I===n.UNSIGNED_INT&&(H=n.RGB32UI),I===n.BYTE&&(H=n.RGB8I),I===n.SHORT&&(H=n.RGB16I),I===n.INT&&(H=n.RGB32I)),g===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),I===n.UNSIGNED_INT&&(H=n.RGBA32UI),I===n.BYTE&&(H=n.RGBA8I),I===n.SHORT&&(H=n.RGBA16I),I===n.INT&&(H=n.RGBA32I)),g===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),g===n.RGBA){const _e=Z?fo:Qe.getTransfer(k);I===n.FLOAT&&(H=n.RGBA32F),I===n.HALF_FLOAT&&(H=n.RGBA16F),I===n.UNSIGNED_BYTE&&(H=_e===ot?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function M(E,g){let I;return E?g===null||g===Vi||g===or?I=n.DEPTH24_STENCIL8:g===Yn?I=n.DEPTH32F_STENCIL8:g===rr&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Vi||g===or?I=n.DEPTH_COMPONENT24:g===Yn?I=n.DEPTH_COMPONENT32F:g===rr&&(I=n.DEPTH_COMPONENT16),I}function L(E,g){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==xn&&E.minFilter!==Rn?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function P(E){const g=E.target;g.removeEventListener("dispose",P),N(g),g.isVideoTexture&&u.delete(g)}function R(E){const g=E.target;g.removeEventListener("dispose",R),S(g)}function N(E){const g=i.get(E);if(g.__webglInit===void 0)return;const I=E.source,k=h.get(I);if(k){const Z=k[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(E),Object.keys(k).length===0&&h.delete(I)}i.remove(E)}function b(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const I=E.source,k=h.get(I);delete k[g.__cacheKey],o.memory.textures--}function S(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let Z=0;Z<g.__webglFramebuffer[k].length;Z++)n.deleteFramebuffer(g.__webglFramebuffer[k][Z]);else n.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)n.deleteFramebuffer(g.__webglFramebuffer[k]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=E.textures;for(let k=0,Z=I.length;k<Z;k++){const H=i.get(I[k]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(I[k])}i.remove(E)}let D=0;function X(){D=0}function V(){const E=D;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),D+=1,E}function te(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function ie(E,g){const I=i.get(E);if(E.isVideoTexture&&$(E),E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){const k=E.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(I,E,g);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+g)}function Y(E,g){const I=i.get(E);if(E.version>0&&I.__version!==E.version){Re(I,E,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+g)}function Q(E,g){const I=i.get(E);if(E.version>0&&I.__version!==E.version){Re(I,E,g);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+g)}function z(E,g){const I=i.get(E);if(E.version>0&&I.__version!==E.version){ge(I,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+g)}const pe={[ja]:n.REPEAT,[Li]:n.CLAMP_TO_EDGE,[Za]:n.MIRRORED_REPEAT},ve={[xn]:n.NEAREST,[Gm]:n.NEAREST_MIPMAP_NEAREST,[Er]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[$o]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},Ae={[$m]:n.NEVER,[Qm]:n.ALWAYS,[Ym]:n.LESS,[xh]:n.LEQUAL,[Km]:n.EQUAL,[Jm]:n.GEQUAL,[jm]:n.GREATER,[Zm]:n.NOTEQUAL};function he(E,g){if(g.type===Yn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Rn||g.magFilter===$o||g.magFilter===Er||g.magFilter===Ii||g.minFilter===Rn||g.minFilter===$o||g.minFilter===Er||g.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,pe[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,pe[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,pe[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ve[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ve[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ae[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===xn||g.minFilter!==Er&&g.minFilter!==Ii||g.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function ze(E,g){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",P));const k=g.source;let Z=h.get(k);Z===void 0&&(Z={},h.set(k,Z));const H=te(g);if(H!==E.__cacheKey){Z[H]===void 0&&(Z[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),Z[H].usedTimes++;const _e=Z[E.__cacheKey];_e!==void 0&&(Z[E.__cacheKey].usedTimes--,_e.usedTimes===0&&b(g)),E.__cacheKey=H,E.__webglTexture=Z[H].texture}return I}function ee(E,g,I){return Math.floor(Math.floor(E/I)/g)}function de(E,g,I,k){const H=E.updateRanges;if(H.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,I,k,g.data);else{H.sort((ae,be)=>ae.start-be.start);let _e=0;for(let ae=1;ae<H.length;ae++){const be=H[_e],Pe=H[ae],Le=be.start+be.count,me=ee(Pe.start,g.width,4),He=ee(be.start,g.width,4);Pe.start<=Le+1&&me===He&&ee(Pe.start+Pe.count-1,g.width,4)===me?be.count=Math.max(be.count,Pe.start+Pe.count-be.start):(++_e,H[_e]=Pe)}H.length=_e+1;const ce=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),Te=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ae=0,be=H.length;ae<be;ae++){const Pe=H[ae],Le=Math.floor(Pe.start/4),me=Math.ceil(Pe.count/4),He=Le%g.width,U=Math.floor(Le/g.width),Me=me,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,He,U,Me,le,I,k,g.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function Re(E,g,I){let k=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=n.TEXTURE_3D);const Z=ze(E,g),H=g.source;t.bindTexture(k,E.__webglTexture,n.TEXTURE0+I);const _e=i.get(H);if(H.version!==_e.__version||Z===!0){t.activeTexture(n.TEXTURE0+I);const ce=Qe.getPrimaries(Qe.workingColorSpace),Ee=g.colorSpace===ci?null:Qe.getPrimaries(g.colorSpace),Te=g.colorSpace===ci||ce===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ae=x(g.image,!1,s.maxTextureSize);ae=G(g,ae);const be=r.convert(g.format,g.colorSpace),Pe=r.convert(g.type);let Le=T(g.internalFormat,be,Pe,g.colorSpace,g.isVideoTexture);he(k,g);let me;const He=g.mipmaps,U=g.isVideoTexture!==!0,Me=_e.__version===void 0||Z===!0,le=H.dataReady,Ce=L(g,ae);if(g.isDepthTexture)Le=M(g.format===lr,g.type),Me&&(U?t.texStorage2D(n.TEXTURE_2D,1,Le,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Le,ae.width,ae.height,0,be,Pe,null));else if(g.isDataTexture)if(He.length>0){U&&Me&&t.texStorage2D(n.TEXTURE_2D,Ce,Le,He[0].width,He[0].height);for(let ue=0,oe=He.length;ue<oe;ue++)me=He[ue],U?le&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,me.width,me.height,be,Pe,me.data):t.texImage2D(n.TEXTURE_2D,ue,Le,me.width,me.height,0,be,Pe,me.data);g.generateMipmaps=!1}else U?(Me&&t.texStorage2D(n.TEXTURE_2D,Ce,Le,ae.width,ae.height),le&&de(g,ae,be,Pe)):t.texImage2D(n.TEXTURE_2D,0,Le,ae.width,ae.height,0,be,Pe,ae.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){U&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Le,He[0].width,He[0].height,ae.depth);for(let ue=0,oe=He.length;ue<oe;ue++)if(me=He[ue],g.format!==mn)if(be!==null)if(U){if(le)if(g.layerUpdates.size>0){const Ie=Su(me.width,me.height,g.format,g.type);for(const Ge of g.layerUpdates){const ht=me.data.subarray(Ge*Ie/me.data.BYTES_PER_ELEMENT,(Ge+1)*Ie/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,Ge,me.width,me.height,1,be,ht)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,me.width,me.height,ae.depth,be,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,Le,me.width,me.height,ae.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,me.width,me.height,ae.depth,be,Pe,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,Le,me.width,me.height,ae.depth,0,be,Pe,me.data)}else{U&&Me&&t.texStorage2D(n.TEXTURE_2D,Ce,Le,He[0].width,He[0].height);for(let ue=0,oe=He.length;ue<oe;ue++)me=He[ue],g.format!==mn?be!==null?U?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,me.width,me.height,be,me.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,Le,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?le&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,me.width,me.height,be,Pe,me.data):t.texImage2D(n.TEXTURE_2D,ue,Le,me.width,me.height,0,be,Pe,me.data)}else if(g.isDataArrayTexture)if(U){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Le,ae.width,ae.height,ae.depth),le)if(g.layerUpdates.size>0){const ue=Su(ae.width,ae.height,g.format,g.type);for(const oe of g.layerUpdates){const Ie=ae.data.subarray(oe*ue/ae.data.BYTES_PER_ELEMENT,(oe+1)*ue/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,ae.width,ae.height,1,be,Pe,Ie)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,be,Pe,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ae.width,ae.height,ae.depth,0,be,Pe,ae.data);else if(g.isData3DTexture)U?(Me&&t.texStorage3D(n.TEXTURE_3D,Ce,Le,ae.width,ae.height,ae.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,be,Pe,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ae.width,ae.height,ae.depth,0,be,Pe,ae.data);else if(g.isFramebufferTexture){if(Me)if(U)t.texStorage2D(n.TEXTURE_2D,Ce,Le,ae.width,ae.height);else{let ue=ae.width,oe=ae.height;for(let Ie=0;Ie<Ce;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,Le,ue,oe,0,be,Pe,null),ue>>=1,oe>>=1}}else if(He.length>0){if(U&&Me){const ue=ye(He[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Le,ue.width,ue.height)}for(let ue=0,oe=He.length;ue<oe;ue++)me=He[ue],U?le&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,be,Pe,me):t.texImage2D(n.TEXTURE_2D,ue,Le,be,Pe,me);g.generateMipmaps=!1}else if(U){if(Me){const ue=ye(ae);t.texStorage2D(n.TEXTURE_2D,Ce,Le,ue.width,ue.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Pe,ae)}else t.texImage2D(n.TEXTURE_2D,0,Le,be,Pe,ae);m(g)&&d(k),_e.__version=H.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ge(E,g,I){if(g.image.length!==6)return;const k=ze(E,g),Z=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+I);const H=i.get(Z);if(Z.version!==H.__version||k===!0){t.activeTexture(n.TEXTURE0+I);const _e=Qe.getPrimaries(Qe.workingColorSpace),ce=g.colorSpace===ci?null:Qe.getPrimaries(g.colorSpace),Ee=g.colorSpace===ci||_e===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Te=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,be=[];for(let oe=0;oe<6;oe++)!Te&&!ae?be[oe]=x(g.image[oe],!0,s.maxCubemapSize):be[oe]=ae?g.image[oe].image:g.image[oe],be[oe]=G(g,be[oe]);const Pe=be[0],Le=r.convert(g.format,g.colorSpace),me=r.convert(g.type),He=T(g.internalFormat,Le,me,g.colorSpace),U=g.isVideoTexture!==!0,Me=H.__version===void 0||k===!0,le=Z.dataReady;let Ce=L(g,Pe);he(n.TEXTURE_CUBE_MAP,g);let ue;if(Te){U&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,He,Pe.width,Pe.height);for(let oe=0;oe<6;oe++){ue=be[oe].mipmaps;for(let Ie=0;Ie<ue.length;Ie++){const Ge=ue[Ie];g.format!==mn?Le!==null?U?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,0,0,Ge.width,Ge.height,Le,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,He,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,0,0,Ge.width,Ge.height,Le,me,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,He,Ge.width,Ge.height,0,Le,me,Ge.data)}}}else{if(ue=g.mipmaps,U&&Me){ue.length>0&&Ce++;const oe=ye(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,He,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ae){U?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,be[oe].width,be[oe].height,Le,me,be[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,He,be[oe].width,be[oe].height,0,Le,me,be[oe].data);for(let Ie=0;Ie<ue.length;Ie++){const ht=ue[Ie].image[oe].image;U?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,0,0,ht.width,ht.height,Le,me,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,He,ht.width,ht.height,0,Le,me,ht.data)}}else{U?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Le,me,be[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,He,Le,me,be[oe]);for(let Ie=0;Ie<ue.length;Ie++){const Ge=ue[Ie];U?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,0,0,Le,me,Ge.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,He,Le,me,Ge.image[oe])}}}m(g)&&d(n.TEXTURE_CUBE_MAP),H.__version=Z.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function De(E,g,I,k,Z,H){const _e=r.convert(I.format,I.colorSpace),ce=r.convert(I.type),Ee=T(I.internalFormat,_e,ce,I.colorSpace),Te=i.get(g),ae=i.get(I);if(ae.__renderTarget=g,!Te.__hasExternalTextures){const be=Math.max(1,g.width>>H),Pe=Math.max(1,g.height>>H);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,H,Ee,be,Pe,g.depth,0,_e,ce,null):t.texImage2D(Z,H,Ee,be,Pe,0,_e,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),se(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,Z,ae.__webglTexture,0,j(g)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,Z,ae.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(E,g,I){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const k=g.depthTexture,Z=k&&k.isDepthTexture?k.type:null,H=M(g.stencilBuffer,Z),_e=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=j(g);se(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,H,g.width,g.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,H,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,H,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,E)}else{const k=g.textures;for(let Z=0;Z<k.length;Z++){const H=k[Z],_e=r.convert(H.format,H.colorSpace),ce=r.convert(H.type),Ee=T(H.internalFormat,_e,ce,H.colorSpace),Te=j(g);I&&se(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,Ee,g.width,g.height):se(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,Ee,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(g.depthTexture);k.__renderTarget=g,(!k.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ie(g.depthTexture,0);const Z=k.__webglTexture,H=j(g);if(g.depthTexture.format===ar)se(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(g.depthTexture.format===lr)se(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function pt(E){const g=i.get(E),I=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const k=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",Z)};k.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=k}if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const k=E.texture.mipmaps;k&&k.length>0?Ne(g.__webglFramebuffer[0],E):Ne(g.__webglFramebuffer,E)}else if(I){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=n.createRenderbuffer(),je(g.__webglDepthbuffer[k],E,!1);else{const Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,H)}}else{const k=E.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),je(g.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,H)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function A(E,g,I){const k=i.get(E);g!==void 0&&De(k.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&pt(E)}function C(E){const g=E.texture,I=i.get(E),k=i.get(g);E.addEventListener("dispose",R);const Z=E.textures,H=E.isWebGLCubeRenderTarget===!0,_e=Z.length>1;if(_e||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=g.version,o.memory.textures++),H){I.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[ce]=[];for(let Ee=0;Ee<g.mipmaps.length;Ee++)I.__webglFramebuffer[ce][Ee]=n.createFramebuffer()}else I.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let ce=0;ce<g.mipmaps.length;ce++)I.__webglFramebuffer[ce]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(_e)for(let ce=0,Ee=Z.length;ce<Ee;ce++){const Te=i.get(Z[ce]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&se(E)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ce=0;ce<Z.length;ce++){const Ee=Z[ce];I.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[ce]);const Te=r.convert(Ee.format,Ee.colorSpace),ae=r.convert(Ee.type),be=T(Ee.internalFormat,Te,ae,Ee.colorSpace,E.isXRRenderTarget===!0),Pe=j(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,be,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,I.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),je(I.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),he(n.TEXTURE_CUBE_MAP,g);for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ee=0;Ee<g.mipmaps.length;Ee++)De(I.__webglFramebuffer[ce][Ee],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee);else De(I.__webglFramebuffer[ce],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ce=0,Ee=Z.length;ce<Ee;ce++){const Te=Z[ce],ae=i.get(Te);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),he(n.TEXTURE_2D,Te),De(I.__webglFramebuffer,E,Te,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(Te)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,k.__webglTexture),he(ce,g),g.mipmaps&&g.mipmaps.length>0)for(let Ee=0;Ee<g.mipmaps.length;Ee++)De(I.__webglFramebuffer[Ee],E,g,n.COLOR_ATTACHMENT0,ce,Ee);else De(I.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,ce,0);m(g)&&d(ce),t.unbindTexture()}E.depthBuffer&&pt(E)}function v(E){const g=E.textures;for(let I=0,k=g.length;I<k;I++){const Z=g[I];if(m(Z)){const H=w(E),_e=i.get(Z).__webglTexture;t.bindTexture(H,_e),d(H),t.unbindTexture()}}}const re=[],K=[];function J(E){if(E.samples>0){if(se(E)===!1){const g=E.textures,I=E.width,k=E.height;let Z=n.COLOR_BUFFER_BIT;const H=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(E),ce=g.length>1;if(ce)for(let Te=0;Te<g.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ee=E.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Te=0;Te<g.length;Te++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Te]);const ae=i.get(g[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,I,k,0,0,I,k,Z,n.NEAREST),l===!0&&(re.length=0,K.length=0,re.push(n.COLOR_ATTACHMENT0+Te),E.depthBuffer&&E.resolveDepthBuffer===!1&&(re.push(H),K.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,K)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Te=0;Te<g.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Te]);const ae=i.get(g[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function j(E){return Math.min(s.maxSamples,E.samples)}function se(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function $(E){const g=o.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function G(E,g){const I=E.colorSpace,k=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==bs&&I!==ci&&(Qe.getTransfer(I)===ot?(k!==mn||Z!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),g}function ye(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=X,this.setTexture2D=ie,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=z,this.rebindTextures=A,this.setupRenderTarget=C,this.updateRenderTargetMipmap=v,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=se}function LM(n,e){function t(i,s=ci){let r;const o=Qe.getTransfer(s);if(i===Ln)return n.UNSIGNED_BYTE;if(i===Yl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ch)return n.BYTE;if(i===uh)return n.SHORT;if(i===rr)return n.UNSIGNED_SHORT;if(i===$l)return n.INT;if(i===Vi)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===dr)return n.HALF_FLOAT;if(i===hh)return n.ALPHA;if(i===dh)return n.RGB;if(i===mn)return n.RGBA;if(i===ar)return n.DEPTH_COMPONENT;if(i===lr)return n.DEPTH_STENCIL;if(i===ph)return n.RED;if(i===jl)return n.RED_INTEGER;if(i===mh)return n.RG;if(i===Zl)return n.RG_INTEGER;if(i===Jl)return n.RGBA_INTEGER;if(i===Zr||i===Jr||i===Qr||i===eo)if(o===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ja||i===Qa||i===el||i===tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nl||i===il||i===sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===nl||i===il)return o===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===sl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===rl||i===ol||i===al||i===ll||i===cl||i===ul||i===fl||i===hl||i===dl||i===pl||i===ml||i===gl||i===_l||i===xl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===rl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ol)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===al)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ll)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ul)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ml)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_l)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===to||i===vl||i===Ml)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===to)return o===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gh||i===Sl||i===yl||i===El)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===to)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===El)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const IM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class NM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Yt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new mi({vertexShader:IM,fragmentShader:UM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new gr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FM extends Cs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const x=new NM,m=t.getContextAttributes();let d=null,w=null;const T=[],M=[],L=new Ze;let P=null;const R=new on;R.viewport=new St;const N=new on;N.viewport=new St;const b=[R,N],S=new t_;let D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=T[ee];return de===void 0&&(de=new pa,T[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=T[ee];return de===void 0&&(de=new pa,T[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=T[ee];return de===void 0&&(de=new pa,T[ee]=de),de.getHandSpace()};function V(ee){const de=M.indexOf(ee.inputSource);if(de===-1)return;const Re=T[de];Re!==void 0&&(Re.update(ee.inputSource,ee.frame,c||o),Re.dispatchEvent({type:ee.type,data:ee.inputSource}))}function te(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",ie);for(let ee=0;ee<T.length;ee++){const de=M[ee];de!==null&&(M[ee]=null,T[ee].disconnect(de))}D=null,X=null,x.reset(),e.setRenderTarget(d),p=null,h=null,f=null,s=null,w=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",te),s.addEventListener("inputsourceschange",ie),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,ge=null,De=null;m.depth&&(De=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=m.stencil?lr:ar,ge=m.stencil?or:Vi);const je={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(je),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new ki(h.textureWidth,h.textureHeight,{format:mn,type:Ln,depthTexture:new Ch(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new ki(p.framebufferWidth,p.framebufferHeight,{format:mn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ze.setContext(s),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ie(ee){for(let de=0;de<ee.removed.length;de++){const Re=ee.removed[de],ge=M.indexOf(Re);ge>=0&&(M[ge]=null,T[ge].disconnect(Re))}for(let de=0;de<ee.added.length;de++){const Re=ee.added[de];let ge=M.indexOf(Re);if(ge===-1){for(let je=0;je<T.length;je++)if(je>=M.length){M.push(Re),ge=je;break}else if(M[je]===null){M[je]=Re,ge=je;break}if(ge===-1)break}const De=T[ge];De&&De.connect(Re)}}const Y=new O,Q=new O;function z(ee,de,Re){Y.setFromMatrixPosition(de.matrixWorld),Q.setFromMatrixPosition(Re.matrixWorld);const ge=Y.distanceTo(Q),De=de.projectionMatrix.elements,je=Re.projectionMatrix.elements,Ne=De[14]/(De[10]-1),pt=De[14]/(De[10]+1),A=(De[9]+1)/De[5],C=(De[9]-1)/De[5],v=(De[8]-1)/De[0],re=(je[8]+1)/je[0],K=Ne*v,J=Ne*re,j=ge/(-v+re),se=j*-v;if(de.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(se),ee.translateZ(j),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),De[10]===-1)ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const $=Ne+j,G=pt+j,ye=K-se,E=J+(ge-se),g=A*pt/G*$,I=C*pt/G*$;ee.projectionMatrix.makePerspective(ye,E,g,I,$,G),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function pe(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let de=ee.near,Re=ee.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(Re=x.depthFar)),S.near=N.near=R.near=de,S.far=N.far=R.far=Re,(D!==S.near||X!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,X=S.far),R.layers.mask=ee.layers.mask|2,N.layers.mask=ee.layers.mask|4,S.layers.mask=R.layers.mask|N.layers.mask;const ge=ee.parent,De=S.cameras;pe(S,ge);for(let je=0;je<De.length;je++)pe(De[je],ge);De.length===2?z(S,R,N):S.projectionMatrix.copy(R.projectionMatrix),ve(ee,S,ge)};function ve(ee,de,Re){Re===null?ee.matrix.copy(de.matrixWorld):(ee.matrix.copy(Re.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(de.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=cr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Ae=null;function he(ee,de){if(u=de.getViewerPose(c||o),_=de,u!==null){const Re=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let ge=!1;Re.length!==S.cameras.length&&(S.cameras.length=0,ge=!0);for(let Ne=0;Ne<Re.length;Ne++){const pt=Re[Ne];let A=null;if(p!==null)A=p.getViewport(pt);else{const v=f.getViewSubImage(h,pt);A=v.viewport,Ne===0&&(e.setRenderTargetTextures(w,v.colorTexture,v.depthStencilTexture),e.setRenderTarget(w))}let C=b[Ne];C===void 0&&(C=new on,C.layers.enable(Ne),C.viewport=new St,b[Ne]=C),C.matrix.fromArray(pt.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(pt.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(A.x,A.y,A.width,A.height),Ne===0&&(S.matrix.copy(C.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ge===!0&&S.cameras.push(C)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const Ne=f.getDepthInformation(Re[0]);Ne&&Ne.isValid&&Ne.texture&&x.init(e,Ne,s.renderState)}}for(let Re=0;Re<T.length;Re++){const ge=M[Re],De=T[Re];ge!==null&&De!==void 0&&De.update(ge,de,c||o)}Ae&&Ae(ee,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const ze=new Lh;ze.setAnimationLoop(he),this.setAnimationLoop=function(ee){Ae=ee},this.dispose=function(){}}}const Ti=new In,OM=new vt;function BM(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,wh(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,w,T,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,w,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===$t&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===$t&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const w=e.get(d),T=w.envMap,M=w.envMapRotation;T&&(m.envMap.value=T,Ti.copy(M),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(OM.makeRotationFromEuler(Ti)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,w,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=T*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$t&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const w=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function zM(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){const M=T.program;i.uniformBlockBinding(w,M)}function c(w,T){let M=s[w.id];M===void 0&&(_(w),M=u(w),s[w.id]=M,w.addEventListener("dispose",m));const L=T.program;i.updateUBOMapping(w,L);const P=e.render.frame;r[w.id]!==P&&(h(w),r[w.id]=P)}function u(w){const T=f();w.__bindingPointIndex=T;const M=n.createBuffer(),L=w.__size,P=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,L,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,M),M}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const T=s[w.id],M=w.uniforms,L=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let P=0,R=M.length;P<R;P++){const N=Array.isArray(M[P])?M[P]:[M[P]];for(let b=0,S=N.length;b<S;b++){const D=N[b];if(p(D,P,b,L)===!0){const X=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let te=0;for(let ie=0;ie<V.length;ie++){const Y=V[ie],Q=x(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,X+te,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,te),te+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,T,M,L){const P=w.value,R=T+"_"+M;if(L[R]===void 0)return typeof P=="number"||typeof P=="boolean"?L[R]=P:L[R]=P.clone(),!0;{const N=L[R];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return L[R]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function _(w){const T=w.uniforms;let M=0;const L=16;for(let R=0,N=T.length;R<N;R++){const b=Array.isArray(T[R])?T[R]:[T[R]];for(let S=0,D=b.length;S<D;S++){const X=b[S],V=Array.isArray(X.value)?X.value:[X.value];for(let te=0,ie=V.length;te<ie;te++){const Y=V[te],Q=x(Y),z=M%L,pe=z%Q.boundary,ve=z+pe;M+=pe,ve!==0&&L-ve<Q.storage&&(M+=L-ve),X.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=Q.storage}}}const P=M%L;return P>0&&(M+=L-P),w.__size=M,w.__cache={},this}function x(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function m(w){const T=w.target;T.removeEventListener("dispose",m);const M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function d(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class HM{constructor(e={}){const{canvas:t=gg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const w=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let L=!1;this._outputColorSpace=Qt;let P=0,R=0,N=null,b=-1,S=null;const D=new St,X=new St;let V=null;const te=new $e(0);let ie=0,Y=t.width,Q=t.height,z=1,pe=null,ve=null;const Ae=new St(0,0,Y,Q),he=new St(0,0,Y,Q);let ze=!1;const ee=new nc;let de=!1,Re=!1;const ge=new vt,De=new vt,je=new O,Ne=new St,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function C(){return N===null?z:1}let v=i;function re(y,F){return t.getContext(y,F)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ql}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",oe,!1),v===null){const F="webgl2";if(v=re(F,y),v===null)throw re(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let K,J,j,se,$,G,ye,E,g,I,k,Z,H,_e,ce,Ee,Te,ae,be,Pe,Le,me,He,U;function Me(){K=new jx(v),K.init(),me=new LM(v,K),J=new Gx(v,K,e,me),j=new PM(v,K),J.reverseDepthBuffer&&h&&j.buffers.depth.setReversed(!0),se=new Qx(v),$=new _M,G=new DM(v,K,j,$,J,me,se),ye=new Xx(M),E=new Kx(M),g=new r_(v),He=new Vx(v,g),I=new Zx(v,g,se,He),k=new tv(v,I,g,se),be=new ev(v,J,G),Ee=new Wx($),Z=new gM(M,ye,E,K,J,He,Ee),H=new BM(M,$),_e=new vM,ce=new TM(K),ae=new Hx(M,ye,E,j,k,p,l),Te=new RM(M,k,J),U=new zM(v,se,J,j),Pe=new kx(v,K,se),Le=new Jx(v,K,se),se.programs=Z.programs,M.capabilities=J,M.extensions=K,M.properties=$,M.renderLists=_e,M.shadowMap=Te,M.state=j,M.info=se}Me();const le=new FM(M,v);this.xr=le,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const y=K.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=K.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(y){y!==void 0&&(z=y,this.setSize(Y,Q,!1))},this.getSize=function(y){return y.set(Y,Q)},this.setSize=function(y,F,W=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,Q=F,t.width=Math.floor(y*z),t.height=Math.floor(F*z),W===!0&&(t.style.width=y+"px",t.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(Y*z,Q*z).floor()},this.setDrawingBufferSize=function(y,F,W){Y=y,Q=F,z=W,t.width=Math.floor(y*W),t.height=Math.floor(F*W),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(Ae)},this.setViewport=function(y,F,W,q){y.isVector4?Ae.set(y.x,y.y,y.z,y.w):Ae.set(y,F,W,q),j.viewport(D.copy(Ae).multiplyScalar(z).round())},this.getScissor=function(y){return y.copy(he)},this.setScissor=function(y,F,W,q){y.isVector4?he.set(y.x,y.y,y.z,y.w):he.set(y,F,W,q),j.scissor(X.copy(he).multiplyScalar(z).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(y){j.setScissorTest(ze=y)},this.setOpaqueSort=function(y){pe=y},this.setTransparentSort=function(y){ve=y},this.getClearColor=function(y){return y.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,W=!0){let q=0;if(y){let B=!1;if(N!==null){const fe=N.texture.format;B=fe===Jl||fe===Zl||fe===jl}if(B){const fe=N.texture.type,Se=fe===Ln||fe===Vi||fe===rr||fe===or||fe===Yl||fe===Kl,Ue=ae.getClearColor(),we=ae.getClearAlpha(),Ve=Ue.r,ke=Ue.g,Fe=Ue.b;Se?(_[0]=Ve,_[1]=ke,_[2]=Fe,_[3]=we,v.clearBufferuiv(v.COLOR,0,_)):(x[0]=Ve,x[1]=ke,x[2]=Fe,x[3]=we,v.clearBufferiv(v.COLOR,0,x))}else q|=v.COLOR_BUFFER_BIT}F&&(q|=v.DEPTH_BUFFER_BIT),W&&(q|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ae.dispose(),_e.dispose(),ce.dispose(),$.dispose(),ye.dispose(),E.dispose(),k.dispose(),He.dispose(),U.dispose(),Z.dispose(),le.dispose(),le.removeEventListener("sessionstart",rc),le.removeEventListener("sessionend",oc),gi.stop()};function Ce(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=se.autoReset,F=Te.enabled,W=Te.autoUpdate,q=Te.needsUpdate,B=Te.type;Me(),se.autoReset=y,Te.enabled=F,Te.autoUpdate=W,Te.needsUpdate=q,Te.type=B}function oe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ie(y){const F=y.target;F.removeEventListener("dispose",Ie),Ge(F)}function Ge(y){ht(y),$.remove(y)}function ht(y){const F=$.get(y).programs;F!==void 0&&(F.forEach(function(W){Z.releaseProgram(W)}),y.isShaderMaterial&&Z.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,W,q,B,fe){F===null&&(F=pt);const Se=B.isMesh&&B.matrixWorld.determinant()<0,Ue=zh(y,F,W,q,B);j.setMaterial(q,Se);let we=W.index,Ve=1;if(q.wireframe===!0){if(we=I.getWireframeAttribute(W),we===void 0)return;Ve=2}const ke=W.drawRange,Fe=W.attributes.position;let Ye=ke.start*Ve,rt=(ke.start+ke.count)*Ve;fe!==null&&(Ye=Math.max(Ye,fe.start*Ve),rt=Math.min(rt,(fe.start+fe.count)*Ve)),we!==null?(Ye=Math.max(Ye,0),rt=Math.min(rt,we.count)):Fe!=null&&(Ye=Math.max(Ye,0),rt=Math.min(rt,Fe.count));const Mt=rt-Ye;if(Mt<0||Mt===1/0)return;He.setup(B,q,Ue,W,we);let dt,lt=Pe;if(we!==null&&(dt=g.get(we),lt=Le,lt.setIndex(dt)),B.isMesh)q.wireframe===!0?(j.setLineWidth(q.wireframeLinewidth*C()),lt.setMode(v.LINES)):lt.setMode(v.TRIANGLES);else if(B.isLine){let Oe=q.linewidth;Oe===void 0&&(Oe=1),j.setLineWidth(Oe*C()),B.isLineSegments?lt.setMode(v.LINES):B.isLineLoop?lt.setMode(v.LINE_LOOP):lt.setMode(v.LINE_STRIP)}else B.isPoints?lt.setMode(v.POINTS):B.isSprite&&lt.setMode(v.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)_s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))lt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Oe=B._multiDrawStarts,_t=B._multiDrawCounts,Je=B._multiDrawCount,Kt=we?g.get(we).bytesPerElement:1,Xi=$.get(q).currentProgram.getUniforms();for(let jt=0;jt<Je;jt++)Xi.setValue(v,"_gl_DrawID",jt),lt.render(Oe[jt]/Kt,_t[jt])}else if(B.isInstancedMesh)lt.renderInstances(Ye,Mt,B.count);else if(W.isInstancedBufferGeometry){const Oe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_t=Math.min(W.instanceCount,Oe);lt.renderInstances(Ye,Mt,_t)}else lt.render(Ye,Mt)};function nt(y,F,W){y.transparent===!0&&y.side===qt&&y.forceSinglePass===!1?(y.side=$t,y.needsUpdate=!0,vr(y,F,W),y.side=pi,y.needsUpdate=!0,vr(y,F,W),y.side=qt):vr(y,F,W)}this.compile=function(y,F,W=null){W===null&&(W=y),d=ce.get(W),d.init(F),T.push(d),W.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),y!==W&&y.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();const q=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const fe=B.material;if(fe)if(Array.isArray(fe))for(let Se=0;Se<fe.length;Se++){const Ue=fe[Se];nt(Ue,W,B),q.add(Ue)}else nt(fe,W,B),q.add(fe)}),d=T.pop(),q},this.compileAsync=function(y,F,W=null){const q=this.compile(y,F,W);return new Promise(B=>{function fe(){if(q.forEach(function(Se){$.get(Se).currentProgram.isReady()&&q.delete(Se)}),q.size===0){B(y);return}setTimeout(fe,10)}K.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let cn=null;function Nn(y){cn&&cn(y)}function rc(){gi.stop()}function oc(){gi.start()}const gi=new Lh;gi.setAnimationLoop(Nn),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(y){cn=y,le.setAnimationLoop(y),y===null?gi.stop():gi.start()},le.addEventListener("sessionstart",rc),le.addEventListener("sessionend",oc),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(F),F=le.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,F,N),d=ce.get(y,T.length),d.init(F),T.push(d),De.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ee.setFromProjectionMatrix(De),Re=this.localClippingEnabled,de=Ee.init(this.clippingPlanes,Re),m=_e.get(y,w.length),m.init(),w.push(m),le.enabled===!0&&le.isPresenting===!0){const fe=M.xr.getDepthSensingMesh();fe!==null&&No(fe,F,-1/0,M.sortObjects)}No(y,F,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(pe,ve),A=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,A&&ae.addToRenderList(m,y),this.info.render.frame++,de===!0&&Ee.beginShadows();const W=d.state.shadowsArray;Te.render(W,y,F),de===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,B=m.transmissive;if(d.setupLights(),F.isArrayCamera){const fe=F.cameras;if(B.length>0)for(let Se=0,Ue=fe.length;Se<Ue;Se++){const we=fe[Se];lc(q,B,y,we)}A&&ae.render(y);for(let Se=0,Ue=fe.length;Se<Ue;Se++){const we=fe[Se];ac(m,y,we,we.viewport)}}else B.length>0&&lc(q,B,y,F),A&&ae.render(y),ac(m,y,F);N!==null&&R===0&&(G.updateMultisampleRenderTarget(N),G.updateRenderTargetMipmap(N)),y.isScene===!0&&y.onAfterRender(M,y,F),He.resetDefaultState(),b=-1,S=null,T.pop(),T.length>0?(d=T[T.length-1],de===!0&&Ee.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function No(y,F,W,q){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ee.intersectsSprite(y)){q&&Ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(De);const Se=k.update(y),Ue=y.material;Ue.visible&&m.push(y,Se,Ue,W,Ne.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ee.intersectsObject(y))){const Se=k.update(y),Ue=y.material;if(q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ne.copy(y.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ne.copy(Se.boundingSphere.center)),Ne.applyMatrix4(y.matrixWorld).applyMatrix4(De)),Array.isArray(Ue)){const we=Se.groups;for(let Ve=0,ke=we.length;Ve<ke;Ve++){const Fe=we[Ve],Ye=Ue[Fe.materialIndex];Ye&&Ye.visible&&m.push(y,Se,Ye,W,Ne.z,Fe)}}else Ue.visible&&m.push(y,Se,Ue,W,Ne.z,null)}}const fe=y.children;for(let Se=0,Ue=fe.length;Se<Ue;Se++)No(fe[Se],F,W,q)}function ac(y,F,W,q){const B=y.opaque,fe=y.transmissive,Se=y.transparent;d.setupLightsView(W),de===!0&&Ee.setGlobalState(M.clippingPlanes,W),q&&j.viewport(D.copy(q)),B.length>0&&xr(B,F,W),fe.length>0&&xr(fe,F,W),Se.length>0&&xr(Se,F,W),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function lc(y,F,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[q.id]===void 0&&(d.state.transmissionRenderTarget[q.id]=new ki(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?dr:Ln,minFilter:Ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const fe=d.state.transmissionRenderTarget[q.id],Se=q.viewport||D;fe.setSize(Se.z*M.transmissionResolutionScale,Se.w*M.transmissionResolutionScale);const Ue=M.getRenderTarget(),we=M.getActiveCubeFace(),Ve=M.getActiveMipmapLevel();M.setRenderTarget(fe),M.getClearColor(te),ie=M.getClearAlpha(),ie<1&&M.setClearColor(16777215,.5),M.clear(),A&&ae.render(W);const ke=M.toneMapping;M.toneMapping=hi;const Fe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),d.setupLightsView(q),de===!0&&Ee.setGlobalState(M.clippingPlanes,q),xr(y,W,q),G.updateMultisampleRenderTarget(fe),G.updateRenderTargetMipmap(fe),K.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let rt=0,Mt=F.length;rt<Mt;rt++){const dt=F[rt],lt=dt.object,Oe=dt.geometry,_t=dt.material,Je=dt.group;if(_t.side===qt&&lt.layers.test(q.layers)){const Kt=_t.side;_t.side=$t,_t.needsUpdate=!0,cc(lt,W,q,Oe,_t,Je),_t.side=Kt,_t.needsUpdate=!0,Ye=!0}}Ye===!0&&(G.updateMultisampleRenderTarget(fe),G.updateRenderTargetMipmap(fe))}M.setRenderTarget(Ue,we,Ve),M.setClearColor(te,ie),Fe!==void 0&&(q.viewport=Fe),M.toneMapping=ke}function xr(y,F,W){const q=F.isScene===!0?F.overrideMaterial:null;for(let B=0,fe=y.length;B<fe;B++){const Se=y[B],Ue=Se.object,we=Se.geometry,Ve=Se.group;let ke=Se.material;ke.allowOverride===!0&&q!==null&&(ke=q),Ue.layers.test(W.layers)&&cc(Ue,F,W,we,ke,Ve)}}function cc(y,F,W,q,B,fe){y.onBeforeRender(M,F,W,q,B,fe),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(M,F,W,q,y,fe),B.transparent===!0&&B.side===qt&&B.forceSinglePass===!1?(B.side=$t,B.needsUpdate=!0,M.renderBufferDirect(W,F,q,B,y,fe),B.side=pi,B.needsUpdate=!0,M.renderBufferDirect(W,F,q,B,y,fe),B.side=qt):M.renderBufferDirect(W,F,q,B,y,fe),y.onAfterRender(M,F,W,q,B,fe)}function vr(y,F,W){F.isScene!==!0&&(F=pt);const q=$.get(y),B=d.state.lights,fe=d.state.shadowsArray,Se=B.state.version,Ue=Z.getParameters(y,B.state,fe,F,W),we=Z.getProgramCacheKey(Ue);let Ve=q.programs;q.environment=y.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(y.isMeshStandardMaterial?E:ye).get(y.envMap||q.environment),q.envMapRotation=q.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Ve===void 0&&(y.addEventListener("dispose",Ie),Ve=new Map,q.programs=Ve);let ke=Ve.get(we);if(ke!==void 0){if(q.currentProgram===ke&&q.lightsStateVersion===Se)return fc(y,Ue),ke}else Ue.uniforms=Z.getUniforms(y),y.onBeforeCompile(Ue,M),ke=Z.acquireProgram(Ue,we),Ve.set(we,ke),q.uniforms=Ue.uniforms;const Fe=q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Fe.clippingPlanes=Ee.uniform),fc(y,Ue),q.needsLights=Vh(y),q.lightsStateVersion=Se,q.needsLights&&(Fe.ambientLightColor.value=B.state.ambient,Fe.lightProbe.value=B.state.probe,Fe.directionalLights.value=B.state.directional,Fe.directionalLightShadows.value=B.state.directionalShadow,Fe.spotLights.value=B.state.spot,Fe.spotLightShadows.value=B.state.spotShadow,Fe.rectAreaLights.value=B.state.rectArea,Fe.ltc_1.value=B.state.rectAreaLTC1,Fe.ltc_2.value=B.state.rectAreaLTC2,Fe.pointLights.value=B.state.point,Fe.pointLightShadows.value=B.state.pointShadow,Fe.hemisphereLights.value=B.state.hemi,Fe.directionalShadowMap.value=B.state.directionalShadowMap,Fe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Fe.spotShadowMap.value=B.state.spotShadowMap,Fe.spotLightMatrix.value=B.state.spotLightMatrix,Fe.spotLightMap.value=B.state.spotLightMap,Fe.pointShadowMap.value=B.state.pointShadowMap,Fe.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=ke,q.uniformsList=null,ke}function uc(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=no.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function fc(y,F){const W=$.get(y);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function zh(y,F,W,q,B){F.isScene!==!0&&(F=pt),G.resetTextureUnits();const fe=F.fog,Se=q.isMeshStandardMaterial?F.environment:null,Ue=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:bs,we=(q.isMeshStandardMaterial?E:ye).get(q.envMap||Se),Ve=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Fe=!!W.morphAttributes.position,Ye=!!W.morphAttributes.normal,rt=!!W.morphAttributes.color;let Mt=hi;q.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Mt=M.toneMapping);const dt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,lt=dt!==void 0?dt.length:0,Oe=$.get(q),_t=d.state.lights;if(de===!0&&(Re===!0||y!==S)){const Ot=y===S&&q.id===b;Ee.setState(q,y,Ot)}let Je=!1;q.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==_t.state.version||Oe.outputColorSpace!==Ue||B.isBatchedMesh&&Oe.batching===!1||!B.isBatchedMesh&&Oe.batching===!0||B.isBatchedMesh&&Oe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Oe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Oe.instancing===!1||!B.isInstancedMesh&&Oe.instancing===!0||B.isSkinnedMesh&&Oe.skinning===!1||!B.isSkinnedMesh&&Oe.skinning===!0||B.isInstancedMesh&&Oe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Oe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Oe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Oe.instancingMorph===!1&&B.morphTexture!==null||Oe.envMap!==we||q.fog===!0&&Oe.fog!==fe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Ee.numPlanes||Oe.numIntersection!==Ee.numIntersection)||Oe.vertexAlphas!==Ve||Oe.vertexTangents!==ke||Oe.morphTargets!==Fe||Oe.morphNormals!==Ye||Oe.morphColors!==rt||Oe.toneMapping!==Mt||Oe.morphTargetsCount!==lt)&&(Je=!0):(Je=!0,Oe.__version=q.version);let Kt=Oe.currentProgram;Je===!0&&(Kt=vr(q,F,B));let Xi=!1,jt=!1,Is=!1;const mt=Kt.getUniforms(),tn=Oe.uniforms;if(j.useProgram(Kt.program)&&(Xi=!0,jt=!0,Is=!0),q.id!==b&&(b=q.id,jt=!0),Xi||S!==y){j.buffers.depth.getReversed()?(ge.copy(y.projectionMatrix),xg(ge),vg(ge),mt.setValue(v,"projectionMatrix",ge)):mt.setValue(v,"projectionMatrix",y.projectionMatrix),mt.setValue(v,"viewMatrix",y.matrixWorldInverse);const Wt=mt.map.cameraPosition;Wt!==void 0&&Wt.setValue(v,je.setFromMatrixPosition(y.matrixWorld)),J.logarithmicDepthBuffer&&mt.setValue(v,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&mt.setValue(v,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,jt=!0,Is=!0)}if(B.isSkinnedMesh){mt.setOptional(v,B,"bindMatrix"),mt.setOptional(v,B,"bindMatrixInverse");const Ot=B.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),mt.setValue(v,"boneTexture",Ot.boneTexture,G))}B.isBatchedMesh&&(mt.setOptional(v,B,"batchingTexture"),mt.setValue(v,"batchingTexture",B._matricesTexture,G),mt.setOptional(v,B,"batchingIdTexture"),mt.setValue(v,"batchingIdTexture",B._indirectTexture,G),mt.setOptional(v,B,"batchingColorTexture"),B._colorsTexture!==null&&mt.setValue(v,"batchingColorTexture",B._colorsTexture,G));const nn=W.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&be.update(B,W,Kt),(jt||Oe.receiveShadow!==B.receiveShadow)&&(Oe.receiveShadow=B.receiveShadow,mt.setValue(v,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(tn.envMap.value=we,tn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(tn.envMapIntensity.value=F.environmentIntensity),jt&&(mt.setValue(v,"toneMappingExposure",M.toneMappingExposure),Oe.needsLights&&Hh(tn,Is),fe&&q.fog===!0&&H.refreshFogUniforms(tn,fe),H.refreshMaterialUniforms(tn,q,z,Q,d.state.transmissionRenderTarget[y.id]),no.upload(v,uc(Oe),tn,G)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(no.upload(v,uc(Oe),tn,G),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&mt.setValue(v,"center",B.center),mt.setValue(v,"modelViewMatrix",B.modelViewMatrix),mt.setValue(v,"normalMatrix",B.normalMatrix),mt.setValue(v,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ot=q.uniformsGroups;for(let Wt=0,Fo=Ot.length;Wt<Fo;Wt++){const _i=Ot[Wt];U.update(_i,Kt),U.bind(_i,Kt)}}return Kt}function Hh(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Vh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,F,W){const q=$.get(y);q.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),$.get(y.texture).__webglTexture=F,$.get(y.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const W=$.get(y);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const kh=v.createFramebuffer();this.setRenderTarget=function(y,F=0,W=0){N=y,P=F,R=W;let q=!0,B=null,fe=!1,Se=!1;if(y){const we=$.get(y);if(we.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(v.FRAMEBUFFER,null),q=!1;else if(we.__webglFramebuffer===void 0)G.setupRenderTarget(y);else if(we.__hasExternalTextures)G.rebindTextures(y,$.get(y.texture).__webglTexture,$.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Fe=y.depthTexture;if(we.__boundDepthTexture!==Fe){if(Fe!==null&&$.has(Fe)&&(y.width!==Fe.image.width||y.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(y)}}const Ve=y.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Se=!0);const ke=$.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?B=ke[F][W]:B=ke[F],fe=!0):y.samples>0&&G.useMultisampledRTT(y)===!1?B=$.get(y).__webglMultisampledFramebuffer:Array.isArray(ke)?B=ke[W]:B=ke,D.copy(y.viewport),X.copy(y.scissor),V=y.scissorTest}else D.copy(Ae).multiplyScalar(z).floor(),X.copy(he).multiplyScalar(z).floor(),V=ze;if(W!==0&&(B=kh),j.bindFramebuffer(v.FRAMEBUFFER,B)&&q&&j.drawBuffers(y,B),j.viewport(D),j.scissor(X),j.setScissorTest(V),fe){const we=$.get(y.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,W)}else if(Se){const we=$.get(y.texture),Ve=F;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,we.__webglTexture,W,Ve)}else if(y!==null&&W!==0){const we=$.get(y.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,we.__webglTexture,W)}b=-1},this.readRenderTargetPixels=function(y,F,W,q,B,fe,Se,Ue=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=$.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){j.bindFramebuffer(v.FRAMEBUFFER,we);try{const Ve=y.textures[Ue],ke=Ve.format,Fe=Ve.type;if(!J.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-q&&W>=0&&W<=y.height-B&&(y.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Ue),v.readPixels(F,W,q,B,me.convert(ke),me.convert(Fe),fe))}finally{const Ve=N!==null?$.get(N).__webglFramebuffer:null;j.bindFramebuffer(v.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(y,F,W,q,B,fe,Se,Ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=$.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we)if(F>=0&&F<=y.width-q&&W>=0&&W<=y.height-B){j.bindFramebuffer(v.FRAMEBUFFER,we);const Ve=y.textures[Ue],ke=Ve.format,Fe=Ve.type;if(!J.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Ye),v.bufferData(v.PIXEL_PACK_BUFFER,fe.byteLength,v.STREAM_READ),y.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Ue),v.readPixels(F,W,q,B,me.convert(ke),me.convert(Fe),0);const rt=N!==null?$.get(N).__webglFramebuffer:null;j.bindFramebuffer(v.FRAMEBUFFER,rt);const Mt=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await _g(v,Mt,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Ye),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,fe),v.deleteBuffer(Ye),v.deleteSync(Mt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,W=0){const q=Math.pow(2,-W),B=Math.floor(y.image.width*q),fe=Math.floor(y.image.height*q),Se=F!==null?F.x:0,Ue=F!==null?F.y:0;G.setTexture2D(y,0),v.copyTexSubImage2D(v.TEXTURE_2D,W,0,0,Se,Ue,B,fe),j.unbindTexture()};const Gh=v.createFramebuffer(),Wh=v.createFramebuffer();this.copyTextureToTexture=function(y,F,W=null,q=null,B=0,fe=null){fe===null&&(B!==0?(_s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=B,B=0):fe=0);let Se,Ue,we,Ve,ke,Fe,Ye,rt,Mt;const dt=y.isCompressedTexture?y.mipmaps[fe]:y.image;if(W!==null)Se=W.max.x-W.min.x,Ue=W.max.y-W.min.y,we=W.isBox3?W.max.z-W.min.z:1,Ve=W.min.x,ke=W.min.y,Fe=W.isBox3?W.min.z:0;else{const nn=Math.pow(2,-B);Se=Math.floor(dt.width*nn),Ue=Math.floor(dt.height*nn),y.isDataArrayTexture?we=dt.depth:y.isData3DTexture?we=Math.floor(dt.depth*nn):we=1,Ve=0,ke=0,Fe=0}q!==null?(Ye=q.x,rt=q.y,Mt=q.z):(Ye=0,rt=0,Mt=0);const lt=me.convert(F.format),Oe=me.convert(F.type);let _t;F.isData3DTexture?(G.setTexture3D(F,0),_t=v.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(G.setTexture2DArray(F,0),_t=v.TEXTURE_2D_ARRAY):(G.setTexture2D(F,0),_t=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,F.unpackAlignment);const Je=v.getParameter(v.UNPACK_ROW_LENGTH),Kt=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Xi=v.getParameter(v.UNPACK_SKIP_PIXELS),jt=v.getParameter(v.UNPACK_SKIP_ROWS),Is=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,dt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,dt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Ve),v.pixelStorei(v.UNPACK_SKIP_ROWS,ke),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Fe);const mt=y.isDataArrayTexture||y.isData3DTexture,tn=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const nn=$.get(y),Ot=$.get(F),Wt=$.get(nn.__renderTarget),Fo=$.get(Ot.__renderTarget);j.bindFramebuffer(v.READ_FRAMEBUFFER,Wt.__webglFramebuffer),j.bindFramebuffer(v.DRAW_FRAMEBUFFER,Fo.__webglFramebuffer);for(let _i=0;_i<we;_i++)mt&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,$.get(y).__webglTexture,B,Fe+_i),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,$.get(F).__webglTexture,fe,Mt+_i)),v.blitFramebuffer(Ve,ke,Se,Ue,Ye,rt,Se,Ue,v.DEPTH_BUFFER_BIT,v.NEAREST);j.bindFramebuffer(v.READ_FRAMEBUFFER,null),j.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(B!==0||y.isRenderTargetTexture||$.has(y)){const nn=$.get(y),Ot=$.get(F);j.bindFramebuffer(v.READ_FRAMEBUFFER,Gh),j.bindFramebuffer(v.DRAW_FRAMEBUFFER,Wh);for(let Wt=0;Wt<we;Wt++)mt?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,nn.__webglTexture,B,Fe+Wt):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,nn.__webglTexture,B),tn?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Ot.__webglTexture,fe,Mt+Wt):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Ot.__webglTexture,fe),B!==0?v.blitFramebuffer(Ve,ke,Se,Ue,Ye,rt,Se,Ue,v.COLOR_BUFFER_BIT,v.NEAREST):tn?v.copyTexSubImage3D(_t,fe,Ye,rt,Mt+Wt,Ve,ke,Se,Ue):v.copyTexSubImage2D(_t,fe,Ye,rt,Ve,ke,Se,Ue);j.bindFramebuffer(v.READ_FRAMEBUFFER,null),j.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else tn?y.isDataTexture||y.isData3DTexture?v.texSubImage3D(_t,fe,Ye,rt,Mt,Se,Ue,we,lt,Oe,dt.data):F.isCompressedArrayTexture?v.compressedTexSubImage3D(_t,fe,Ye,rt,Mt,Se,Ue,we,lt,dt.data):v.texSubImage3D(_t,fe,Ye,rt,Mt,Se,Ue,we,lt,Oe,dt):y.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,fe,Ye,rt,Se,Ue,lt,Oe,dt.data):y.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,fe,Ye,rt,dt.width,dt.height,lt,dt.data):v.texSubImage2D(v.TEXTURE_2D,fe,Ye,rt,Se,Ue,lt,Oe,dt);v.pixelStorei(v.UNPACK_ROW_LENGTH,Je),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Kt),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Xi),v.pixelStorei(v.UNPACK_SKIP_ROWS,jt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Is),fe===0&&F.generateMipmaps&&v.generateMipmap(_t),j.unbindTexture()},this.copyTextureToTexture3D=function(y,F,W=null,q=null,B=0){return _s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,F,W,q,B)},this.initRenderTarget=function(y){$.get(y).__webglFramebuffer===void 0&&G.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?G.setTextureCube(y,0):y.isData3DTexture?G.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?G.setTexture2DArray(y,0):G.setTexture2D(y,0),j.unbindTexture()},this.resetState=function(){P=0,R=0,N=null,j.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const yn={score:!1,challenge:!0},VM={class:"pointer-events-none absolute inset-0 z-10 p-4 text-white"},kM={class:"absolute left-4 top-4 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur"},GM={class:"mt-1 text-sm font-medium"},WM={key:0,class:"absolute right-4 top-44 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/45 px-3 py-2.5 backdrop-blur"},XM={class:"grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5"},qM={class:"min-w-0"},$M={class:"mt-0.5 text-sm font-semibold"},YM={class:"text-[11px] text-white/50"},KM={class:"absolute bottom-4 left-4 grid grid-cols-2 gap-2 sm:grid-cols-4"},jM={class:"rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur"},ZM={class:"mt-1 text-sm font-semibold"},JM={class:"rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur"},QM={class:"mt-1 text-sm font-semibold"},eS={class:"rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur"},tS={class:"mt-1 text-sm font-semibold"},nS={key:0,class:"rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur"},iS={class:"mt-1 text-sm font-semibold"},sS={__name:"FlightHUD",props:{telemetry:{type:Object,required:!0},statusText:{type:String,default:""},windMode:{type:String,default:"none"},cameraBearing:{type:[Number,String],default:0}},setup(n){const e=n,t=$n(()=>e.windMode!=="none"),i=$n(()=>Number(e.cameraBearing)||0),s=$n(()=>{const l=Number(e.telemetry.windDirection)||0;return o(l+i.value)}),r=$n(()=>{const l=o(Number(e.telemetry.windDirection)||0);return l>=337.5||l<22.5?"吹向北方":l<67.5?"吹向東北":l<112.5?"吹向東方":l<157.5?"吹向東南":l<202.5?"吹向南方":l<247.5?"吹向西南":l<292.5?"吹向西方":"吹向西北"});function o(l){return(l%360+360)%360}function a(l,c=1){const u=Number(l);return Number.isFinite(u)?u.toFixed(c):"0.0"}return(l,c)=>(ut(),xt("div",VM,[ne("div",kM,[c[0]||(c[0]=ne("p",{class:"text-[10px] uppercase tracking-[0.2em] text-white/45"}," Flight status ",-1)),ne("p",GM,st(n.statusText),1)]),t.value?(ut(),xt("div",WM,[ne("div",XM,[(ut(),xt("svg",{class:"h-6 w-6 transition-transform duration-300",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:Wi({transform:`rotate(${s.value}deg)`})},[...c[1]||(c[1]=[ne("path",{d:"M12 20V5M12 5L7.5 9.5M12 5L16.5 9.5",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],4))]),ne("div",qM,[c[2]||(c[2]=ne("p",{class:"text-[10px] uppercase tracking-[0.18em] text-white/45"}," Wind drift ",-1)),ne("p",$M,st(a(n.telemetry.windSpeed,2))+" m/s ",1),ne("p",YM,st(r.value),1)])])):Hi("",!0),ne("div",KM,[ne("div",jM,[c[3]||(c[3]=ne("p",{class:"text-[9px] uppercase tracking-[0.16em] text-white/40"}," Altitude ",-1)),ne("p",ZM,st(a(n.telemetry.altitude))+" m ",1)]),ne("div",JM,[c[4]||(c[4]=ne("p",{class:"text-[9px] uppercase tracking-[0.16em] text-white/40"}," Speed ",-1)),ne("p",QM,st(a(n.telemetry.speed))+" m/s ",1)]),ne("div",eS,[c[5]||(c[5]=ne("p",{class:"text-[9px] uppercase tracking-[0.16em] text-white/40"}," Distance ",-1)),ne("p",tS,st(a(n.telemetry.distance))+" m ",1)]),Et(yn).score?(ut(),xt("div",nS,[c[6]||(c[6]=ne("p",{class:"text-[9px] uppercase tracking-[0.16em] text-white/40"}," Score ",-1)),ne("p",iS,st(Math.round(Number(n.telemetry.score)||0)),1)])):Hi("",!0)])]))}},rS={class:"pointer-events-none flex flex-col items-center"},oS={class:"relative size-32 rounded-full border border-white/15 bg-black/60 shadow-2xl backdrop-blur-md"},aS={class:"absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/10 bg-black/80"},lS={class:"text-sm font-bold text-white"},cS={class:"text-[9px] text-white/50"},uS={__name:"CompassHUD",props:{heading:{type:Number,default:0}},setup(n){const e=n;function t(o){const a=Number(o);return Number.isFinite(a)?(a%360+360)%360:0}const i=$n(()=>t(e.heading)),s=$n(()=>{const o=i.value;return o>=337.5||o<22.5?"N":o<67.5?"NE":o<112.5?"E":o<157.5?"SE":o<202.5?"S":o<247.5?"SW":o<292.5?"W":"NW"}),r=Oi(t(e.heading));return ui(()=>e.heading,o=>{const a=t(o),l=t(r.value);let c=a-l;c>180?c-=360:c<-180&&(c+=360),r.value+=c},{immediate:!0}),(o,a)=>(ut(),xt("div",rS,[ne("div",oS,[a[1]||(a[1]=eh('<div class="absolute inset-3 rounded-full border border-white/10"></div><div class="absolute left-1/2 top-3 h-2 w-px -translate-x-1/2 bg-white/50"></div><div class="absolute bottom-3 left-1/2 h-2 w-px -translate-x-1/2 bg-white/30"></div><div class="absolute left-3 top-1/2 h-px w-2 -translate-y-1/2 bg-white/30"></div><div class="absolute right-3 top-1/2 h-px w-2 -translate-y-1/2 bg-white/30"></div><span class="absolute left-1/2 top-2 -translate-x-1/2 text-xs font-bold text-lime-300"> N </span><span class="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-white/70"> E </span><span class="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-semibold text-white/50"> S </span><span class="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-white/70"> W </span>',9)),ne("div",{class:"absolute inset-0 origin-center transition-transform duration-100 ease-linear",style:Wi({transform:`rotate(${r.value}deg)`})},[...a[0]||(a[0]=[ne("svg",{viewBox:"0 0 128 128",class:"size-full"},[ne("path",{d:`M64 29
               L57 44
               L64 40
               L71 44
               Z`,fill:"#bef264"})],-1)])],4),ne("div",aS,[ne("span",lS,st(i.value.toFixed(0))+"° ",1),ne("span",cS,st(s.value),1)])]),a[2]||(a[2]=ne("div",{class:"mt-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/50 backdrop-blur"}," Drone Heading ",-1))]))}},fS={key:0,class:"pointer-events-none absolute left-4 top-28 w-72 rounded-2xl border border-white/10 bg-black/60 p-4 text-white backdrop-blur"},hS={class:"flex items-center justify-between gap-3"},dS={class:"rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/55"},pS={class:"mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3"},mS={class:"rounded-xl bg-white/5 p-3 text-center"},gS={class:"mt-1 text-2xl font-semibold"},_S={class:"text-xs text-white/45"},xS={class:"rounded-xl bg-lime-300/10 p-3 text-center"},vS={class:"mt-1 text-3xl font-semibold text-lime-200"},MS={class:"text-xs text-lime-100/70"},SS={key:0,class:"mt-4 rounded-xl border border-lime-300/25 bg-lime-300/10 p-3 text-center"},yS={key:1,class:"mt-4"},ES={class:"flex items-center justify-between text-xs text-white/50"},bS={class:"mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"},TS={__name:"ChallengeHUD",props:{challenge:{type:Object,default:null}},setup(n){return(e,t)=>n.challenge?(ut(),xt("div",fS,[ne("div",hS,[t[0]||(t[0]=ne("p",{class:"text-[10px] font-semibold uppercase tracking-[0.24em] text-lime-300/70"}," Random Heading ",-1)),ne("span",dS," ROUND "+st(n.challenge.round),1)]),ne("div",pS,[ne("div",mS,[t[1]||(t[1]=ne("p",{class:"text-[10px] uppercase tracking-[0.16em] text-white/40"},"機頭",-1)),ne("p",gS,st(n.challenge.headingLabel),1),ne("p",_S,st(n.challenge.headingDegrees)+"°",1)]),t[3]||(t[3]=ne("div",{class:"text-white/30"},"＋",-1)),ne("div",xS,[t[2]||(t[2]=ne("p",{class:"text-[10px] uppercase tracking-[0.16em] text-lime-200/60"},"前往",-1)),ne("p",vS,st(n.challenge.targetArrow),1),ne("p",MS,st(n.challenge.targetLabel),1)])]),n.challenge.completed?(ut(),xt("div",SS,[...t[4]||(t[4]=[ne("p",{class:"text-sm font-semibold text-lime-200"},"完成，準備下一題",-1),ne("p",{class:"mt-1 text-xs text-white/50"},"機頭將重新隨機轉向",-1)])])):(ut(),xt("div",yS,[ne("div",ES,[t[5]||(t[5]=ne("span",null,"保持機頭，僅用 Pitch／Roll",-1)),ne("span",null,st(n.challenge.progress.toFixed(1))+" / "+st(n.challenge.targetDistance.toFixed(1))+" m",1)]),ne("div",bS,[ne("div",{class:"h-full rounded-full bg-lime-300 transition-[width] duration-100",style:Wi({width:`${Math.min(n.challenge.progress/n.challenge.targetDistance*100,100)}%`})},null,4)])])),t[6]||(t[6]=ne("p",{class:"mt-3 text-xs leading-5 text-white/45"}," Yaw 已鎖定。請勿先轉正機頭，直接讓機體側移或倒退前往世界方向。 ",-1))])):Hi("",!0)}},wS=[{degrees:0,radians:0,key:"north",label:"北",shortLabel:"N"},{degrees:90,radians:Math.PI/2,key:"east",label:"東",shortLabel:"E"},{degrees:180,radians:Math.PI,key:"south",label:"南",shortLabel:"S"},{degrees:270,radians:-Math.PI/2,key:"west",label:"西",shortLabel:"W"}],AS=[{key:"north",label:"北方",arrow:"↑",vector:{x:0,z:-1}},{key:"east",label:"東方",arrow:"→",vector:{x:1,z:0}},{key:"south",label:"南方",arrow:"↓",vector:{x:0,z:1}},{key:"west",label:"西方",arrow:"←",vector:{x:-1,z:0}}],RS={id:"random-heading-cardinal",title:"Random Heading",description:"保持機頭方向，使用 Pitch／Roll 前往指定的世界方向。",distance:3,successDelay:.65},CS=[RS];class PS{constructor(){this.challenge=null,this.heading=null,this.direction=null,this.startPosition=new O,this.targetPosition=new O,this.progress=0,this.round=0,this.phase="idle",this.successTimer=0,this.lastPair=""}start(e,t){return this.challenge=e,this.round=0,this.lastPair="",this.nextRound(t)}nextRound(e){if(!this.challenge)return this.getState();let t,i,s;do t=qu(wS),i=qu(AS),s=`${t.key}:${i.key}`;while(s===this.lastPair);return this.lastPair=s,this.heading=t,this.direction=i,this.round+=1,this.progress=0,this.phase="active",this.successTimer=0,this.startPosition.copy(e),this.targetPosition.set(e.x+i.vector.x*this.challenge.distance,e.y,e.z+i.vector.z*this.challenge.distance),this.getState()}reset(){return this.challenge=null,this.heading=null,this.direction=null,this.startPosition.set(0,0,0),this.targetPosition.set(0,0,0),this.progress=0,this.round=0,this.phase="idle",this.successTimer=0,this.lastPair="",this.getState()}update(e,t){if(!this.challenge||!this.direction)return this.getState();if(this.phase==="success")return this.successTimer+=e,this.getState();const i=t.clone().sub(this.startPosition),{x:s,z:r}=this.direction.vector;return this.progress=Math.max(0,i.x*s+i.z*r),this.progress>=this.challenge.distance&&(this.progress=this.challenge.distance,this.phase="success",this.successTimer=0),this.getState()}shouldAdvance(){return this.phase==="success"&&this.successTimer>=this.challenge.successDelay}getHeadingRadians(){return this.heading?.radians??0}getTargetPosition(){return this.targetPosition}getState(){return{active:!!this.challenge,id:this.challenge?.id??null,title:this.challenge?.title??"",description:this.challenge?.description??"",round:this.round,phase:this.phase,headingDegrees:this.heading?.degrees??0,headingLabel:this.heading?.label??"",headingShortLabel:this.heading?.shortLabel??"",targetDirection:this.direction?.key??"",targetLabel:this.direction?.label??"",targetArrow:this.direction?.arrow??"",targetDistance:this.challenge?.distance??0,progress:this.progress,completed:this.phase==="success"}}}function qu(n){return n[Math.floor(Math.random()*n.length)]}const Ta={KeyW:["throttle",1],KeyS:["throttle",-1],KeyA:["yaw",1],KeyD:["yaw",-1],ArrowUp:["pitch",1],ArrowDown:["pitch",-1],ArrowLeft:["roll",-1],ArrowRight:["roll",1]};function DS({onPause:n,onReset:e,onHelp:t}){const i=Rs({throttle:0,yaw:0,pitch:0,roll:0}),s=new Set;function r(){i.throttle=0,i.yaw=0,i.pitch=0,i.roll=0;for(const c of s){const u=Ta[c];if(!u)continue;const[f,h]=u;i[f]+=h}for(const c of Object.keys(i))i[c]=Math.max(-1,Math.min(1,i[c]))}function o(c){if(Ta[c.code]){c.preventDefault(),s.add(c.code),r();return}c.repeat||(c.code==="Space"?(c.preventDefault(),n?.()):c.code==="KeyR"?e?.():c.code==="KeyH"&&t?.())}function a(c){Ta[c.code]&&(c.preventDefault(),s.delete(c.code),r())}function l(){s.clear(),r()}return Vl(()=>{window.addEventListener("keydown",o,{passive:!1}),window.addEventListener("keyup",a,{passive:!1}),window.addEventListener("blur",l)}),kl(()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",a),window.removeEventListener("blur",l)}),{input:i,clearInput:l}}class LS{constructor(e){this.camera=e,this.offset=new O(9.5,7.5,11.5),this.targetPosition=new O,this.lookTarget=new O,this.preset=null}setPreset(e,t,i,s=!1){this.preset=e;const r=it.degToRad(t.degrees);this.offset.set(Math.sin(r)*e.distance,e.height,Math.cos(r)*e.distance),s&&(this.camera.position.set(i.x+this.offset.x,this.offset.y,i.z+this.offset.z),this.camera.lookAt(i.x,e.lookHeight,i.z))}update(e,t){if(!this.preset)return;const i=1-Math.exp(-2.1*e);this.targetPosition.set(t.x+this.offset.x,this.offset.y,t.z+this.offset.z),this.camera.position.lerp(this.targetPosition,i),this.lookTarget.set(t.x,Math.max(this.preset.lookHeight,t.y),t.z),this.camera.lookAt(this.lookTarget)}}function IS(n){return(it.radToDeg(n)%360+360)%360}function US(n){const e=["↑","↗","→","↘","↓","↙","←","↖"],t=(n%360+360)%360;return e[Math.round(t/45)%8]}const NS=new O(0,1,0);class FS{constructor(e){this.drone=e,this.velocity=new O,this.localAcceleration=new O,this.worldAcceleration=new O,this.currentWindAcceleration=new O,this.state={yaw:0,pitchVisual:0,rollVisual:0},this.randomYawTimer=0}reset(e=0){this.velocity.set(0,0,0),this.localAcceleration.set(0,0,0),this.worldAcceleration.set(0,0,0),this.currentWindAcceleration.set(0,0,0),this.state.yaw=e,this.state.pitchVisual=0,this.state.rollVisual=0,this.randomYawTimer=0,this.drone.position.set(0,1.5,0),this.drone.rotation.set(0,-e,0)}update(e,t,i,s){const r=Number.isFinite(e)?it.clamp(e,0,.05):0;this.updateRandomOrientation(r,s);const o=it.degToRad(95);this.state.yaw-=t.yaw*o*r;const a=it.degToRad(17),l=1-Math.exp(-9*r);this.state.pitchVisual=it.lerp(this.state.pitchVisual,t.pitch*a,l),this.state.rollVisual=it.lerp(this.state.rollVisual,-t.roll*a,l),this.localAcceleration.set(t.roll*4.4,t.throttle*4.1,-t.pitch*4.4),this.worldAcceleration.copy(this.localAcceleration).applyAxisAngle(NS,-this.state.yaw),this.velocity.addScaledVector(this.worldAcceleration,r),this.updateWindAcceleration(i),this.velocity.addScaledVector(this.currentWindAcceleration,r);const c=Math.exp(-.66*r),u=Math.exp(-1.25*r);this.velocity.x*=c,this.velocity.z*=c,this.velocity.y*=u;const f=Math.hypot(this.velocity.x,this.velocity.z);if(f>5.3){const h=5.3/f;this.velocity.x*=h,this.velocity.z*=h}this.velocity.y=it.clamp(this.velocity.y,-2.8,2.8),this.drone.position.addScaledVector(this.velocity,r),this.clampAltitude(),this.drone.rotation.set(this.state.pitchVisual,-this.state.yaw,this.state.rollVisual,"YXZ");for(const h of this.drone.userData.rotors??[])h.rotation.y+=h.userData.spinDirection*(18+Math.abs(t.throttle)*14)*r;return{altitude:this.drone.position.y,speed:this.velocity.length(),yaw:IS(this.state.yaw),distance:Math.hypot(this.drone.position.x,this.drone.position.z)}}updateWindAcceleration(e){if(!e||!Number.isFinite(e.x)||!Number.isFinite(e.y)||!Number.isFinite(e.z)){this.currentWindAcceleration.set(0,0,0);return}this.currentWindAcceleration.copy(e)}updateRandomOrientation(e,t){if(t!=="random"){this.randomYawTimer=0;return}if(this.randomYawTimer+=e,this.randomYawTimer>=8){const i=[45,90,135,180],s=i[Math.floor(Math.random()*i.length)];this.state.yaw+=it.degToRad(s),this.randomYawTimer=0}}clampAltitude(){this.drone.position.y<.35&&(this.drone.position.y=.35,this.velocity.y<0&&(this.velocity.y=0)),this.drone.position.y>5.2&&(this.drone.position.y=5.2,this.velocity.y>0&&(this.velocity.y=0))}}const Oh=[{value:"angled",label:"斜俯視",distance:15,height:7.5,lookHeight:1.4},{value:"eye",label:"平視",distance:18,height:1.8,lookHeight:1.45},{value:"low",label:"低角度",distance:17,height:.75,lookHeight:1.65},{value:"high",label:"高角度俯視",distance:14,height:12.5,lookHeight:1.1}],Tl=[{value:"front",label:"正面 0°",degrees:0},{value:"diagonal",label:"斜角 45°",degrees:45},{value:"right",label:"右側 90°",degrees:90},{value:"back",label:"背面 180°",degrees:180},{value:"left",label:"左側 −90°",degrees:-90}],OS=[{value:"none",label:"無風"},{value:"breeze",label:"穩定微風"},{value:"gusty",label:"變向陣風"}],BS=[{value:"free",label:"自由練習"},{value:"randomHeading",label:"方向訓練"}],zS=Rs({cameraHeight:"angled",cameraBearing:"front",windMode:"none",trainingMode:"free",showHeadingArrow:!0,showHelp:!0});function HS(){return zS}class VS{constructor(e=12){this.size=e,this.half=e/2,this.wasOutside=!1,this.count=0}reset(){this.wasOutside=!1,this.count=0}update(e){const t=Math.abs(e.x)>this.half||Math.abs(e.z)>this.half;return t&&!this.wasOutside&&(this.count+=1),this.wasOutside=t,{outside:t,count:this.count}}}class kS{constructor(e=6){this.zoneHalf=e,this.score=0}reset(){this.score=0}update(e,t,i){const s=it.clamp(1-t/this.zoneHalf,0,1);return this.score=i?Math.max(0,this.score-e*35):this.score+e*(10+s*90),this.score}}class GS{constructor(){this.mode="none",this.baseDirection=0,this.currentDirection=0,this.targetDirection=0,this.baseSpeed=0,this.currentSpeed=0,this.targetSpeed=0,this.nextSpeedChangeAt=0,this.nextDirectionChangeAt=0,this.lastElapsedTime=0,this.acceleration=new O}reset(e="none"){return this.mode=e,this.lastElapsedTime=0,e==="none"?(this.baseDirection=0,this.currentDirection=0,this.targetDirection=0,this.baseSpeed=0,this.currentSpeed=0,this.targetSpeed=0,this.nextSpeedChangeAt=0,this.nextDirectionChangeAt=0,this.acceleration.set(0,0,0),this.getState()):(this.baseDirection=Math.random()*Math.PI*2,this.currentDirection=this.baseDirection,this.targetDirection=this.baseDirection,e==="gusty"?this.baseSpeed=.42:e==="gusty"?this.baseSpeed=.42:this.baseSpeed=.34,this.currentSpeed=this.baseSpeed,this.targetSpeed=this.baseSpeed,this.nextSpeedChangeAt=1.5,this.nextDirectionChangeAt=e==="gusty"?4:3,this.updateAcceleration(),this.getState())}update(e,t=0){const i=Number.isFinite(e)?it.clamp(e,0,.05):0,s=Number.isFinite(t)?Math.max(0,t):0;if(this.mode==="none")return this.acceleration.set(0,0,0),this.lastElapsedTime=s,this.getState();s<this.lastElapsedTime&&(this.nextSpeedChangeAt=s+it.randFloat(1.2,2.4),this.nextDirectionChangeAt=s+(this.mode==="gusty"?it.randFloat(3,5):it.randFloat(2.5,4))),this.lastElapsedTime=s,this.updateSpeedTarget(s),this.updateDirectionTarget(s);const r=this.mode==="gusty"?1.8:1.2,o=this.mode==="gusty"?1.6:.7;return this.currentSpeed=it.damp(this.currentSpeed,this.targetSpeed,r,i),this.currentDirection=XS(this.currentDirection,this.targetDirection,o,i),this.updateAcceleration(),this.getState()}updateSpeedTarget(e){if(!(e<this.nextSpeedChangeAt))if(this.mode==="gusty"){const i=Math.random()<.35?it.randFloat(1.25,1.7):it.randFloat(.72,1.2);this.targetSpeed=this.baseSpeed*i,this.nextSpeedChangeAt=e+it.randFloat(1.2,3)}else this.targetSpeed=this.baseSpeed*it.randFloat(.78,1.18),this.nextSpeedChangeAt=e+it.randFloat(1.8,3.8)}updateDirectionTarget(e){if(!(e<this.nextDirectionChangeAt))if(this.mode==="gusty"){const t=Math.random()<.5?-1:1,i=it.randFloat(35,120),s=it.degToRad(i*t);this.targetDirection=$u(this.currentDirection+s),this.baseDirection=this.targetDirection,this.nextDirectionChangeAt=e+it.randFloat(5,10)}else{const t=it.degToRad(it.randFloat(-7,7));this.targetDirection=$u(this.baseDirection+t),this.nextDirectionChangeAt=e+it.randFloat(3.5,6.5)}}updateAcceleration(){this.acceleration.set(Math.sin(this.currentDirection)*this.currentSpeed,0,-Math.cos(this.currentDirection)*this.currentSpeed)}getState(){return{acceleration:this.acceleration.clone(),speed:this.acceleration.length(),direction:WS(this.acceleration)}}}function WS(n){if(!n||n.lengthSq()===0)return 0;const e=Math.atan2(n.x,-n.z);return(it.radToDeg(e)%360+360)%360}function XS(n,e,t,i){const s=Math.atan2(Math.sin(e-n),Math.cos(e-n));return n+s*(1-Math.exp(-t*i))}function $u(n){return Math.atan2(Math.sin(n),Math.cos(n))}function qS(){const n=new Ui,e=new _r(.34,.4,64),t=new Un({color:16777215,transparent:!0,opacity:.42,side:qt,depthWrite:!1,depthTest:!0}),i=new Pt(e,t);i.rotation.x=-Math.PI/2,i.position.y=.018,i.castShadow=!1,i.receiveShadow=!1,n.add(i);const s=new Lo(.035,32),r=new Un({color:16777215,transparent:!0,opacity:.55,side:qt,depthWrite:!1}),o=new Pt(s,r);return o.rotation.x=-Math.PI/2,o.position.y=.019,o.castShadow=!1,o.receiveShadow=!1,n.add(o),n}function dn(n,e){const t=new Pt(n,e);return t.castShadow=!0,t.receiveShadow=!0,t}function $S(){const n=new Ui;n.name="trainer-drone";const e=new Pi({color:1514016,roughness:.5}),t=new Pi({color:14221118,roughness:.4}),i=new Pi({color:4804445,roughness:.6}),s=new Pi({color:329224,metalness:.2,roughness:.15}),r=new Pi({color:10133933,transparent:!0,opacity:.45,roughness:.5}),o=dn(new jn(.72,.22,.92),e);o.position.y=.06,n.add(o);const a=dn(new jn(.48,.17,.54),t);a.position.set(0,.22,-.1),n.add(a);const l=dn(new Io(.18,.48,4),t);l.rotation.x=-Math.PI/2,l.rotation.z=Math.PI/4,l.position.set(0,.13,-.68),n.add(l);const c=dn(new jn(.25,.18,.18),e);c.position.set(0,-.03,-.56),n.add(c);const u=dn(new zi(.07,.07,.055,24),s);u.rotation.x=Math.PI/2,u.position.set(0,-.03,-.665),n.add(u);const f=new jn(1.55,.09,.11),h=dn(f,t);h.rotation.y=Math.PI/4,h.position.y=.04,n.add(h);const p=dn(f,i);p.rotation.y=-Math.PI/4,p.position.y=.04,n.add(p);const _=[[-.56,.11,-.56],[.56,.11,-.56],[-.56,.11,.56],[.56,.11,.56]],x=[];_.forEach(([R,N,b],S)=>{const D=dn(new zi(.11,.13,.16,20),S<2?t:i);D.position.set(R,N,b),n.add(D);const X=dn(new zi(.36,.36,.018,36),r);X.position.set(R,N+.13,b),X.userData.spinDirection=S%2===0?1:-1,n.add(X),x.push(X)});const m=new Un({color:15925109}),d=new Un({color:16726344}),w=dn(new _o(.045,12,12),m);w.position.set(-.28,.11,-.48),n.add(w);const T=w.clone();T.position.x=.28,n.add(T);const M=dn(new _o(.045,12,12),d);M.position.set(-.28,.11,.48),n.add(M);const L=M.clone();L.position.x=.28,n.add(L);const P=new i_(new O(0,0,-1),new O(0,.55,0),1.1,14221118,.22,.13);return P.name="heading-arrow",n.add(P),n.userData.rotors=x,n.userData.headingArrow=P,n}function YS(){const n=new Ui,e=new Pt(new Lo(.72,64),new Un({color:10741301,transparent:!0,opacity:.12,side:qt,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.position.y=.025;const t=new Pt(new _r(.58,.72,64),new Un({color:14285213,transparent:!0,opacity:.9,side:qt,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.position.y=.03,n.add(e,t),n.visible=!1,n}function KS(){const n=new Wg;n.background=new $e(592656),n.fog=new tc(592656,24,58);const e=new Zg(13232127,2106410,1.45);n.add(e);const t=new e_(16777215,2.2);return t.position.set(8,14,6),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.left=-18,t.shadow.camera.right=18,t.shadow.camera.top=18,t.shadow.camera.bottom=-18,n.add(t),n}function jS(n,e=12){const t=new Pt(new gr(80,80),new Pi({color:1119515,roughness:.92}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);const i=new n_(80,80,3949647,2304563);i.position.y=.006,n.add(i);const s=e/2,r=[[-s,.03,-s],[s,.03,-s],[s,.03,s],[-s,.03,s]],o=r.map(([p,_,x])=>new O(p,_,x));o.push(o[0].clone());const a=new Gt().setFromPoints(o),l=new Do({color:14221118}),c=new ic(a,l);n.add(c);const u=new Pt(new _r(.38,.47,48),new Un({color:14221118,side:qt}));u.rotation.x=-Math.PI/2,u.position.y=.012,n.add(u);const f=new zi(.035,.035,1.8,12),h=new Pi({color:14221118});for(const[p,,_]of r){const x=new Pt(f,h);x.position.set(p,.9,_),x.castShadow=!0,n.add(x)}return{ground:t,grid:i,boundary:c,centerRing:u}}const ZS={class:"relative min-h-[580px] overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl shadow-black/40"},JS={class:"pointer-events-none absolute right-4 top-4 z-30 flex flex-col items-end gap-3"},wa=12,QS={__name:"GameCanvas",props:{settings:Object,game:Object},emits:["input-ready","register-actions"],setup(n,{emit:e}){const t=n,i=e,s=Oi(null),r=CS[0],o=Oi(null),a=Oi(0),l=$n(()=>t.settings.trainingMode==="randomHeading");let c,u,f,h,p,_,x,m,d,w,T=0;const M=new GS,L=new VS(wa),P=new kS(wa/2),R=new PS,{input:N,clearInput:b}=DS({onPause:Y,onReset:ie,onHelp:()=>{t.settings.showHelp=!t.settings.showHelp}});function S(he,ze){return he.find(ee=>ee.value===ze)??he[0]}function D(he){return he==="away"?0:he==="toward"?Math.PI:he==="left"?-Math.PI/2:he==="right"?Math.PI/2:he==="random"?Math.random()*Math.PI*2-Math.PI:x?.state.yaw??0}function X(){u=KS(),f=new on(48,1,.1,100),c=new HM({antialias:!0}),c.domElement.style.width="100%",c.domElement.style.height="100%",c.domElement.style.display="block",c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.shadowMap.enabled=!0,c.shadowMap.type=oh,c.outputColorSpace=Qt,s.value.appendChild(c.domElement),jS(u,wa),h=$S(),u.add(h),p=qS(),u.add(p),_=YS(),u.add(_),x=new FS(h),m=new LS(f),V(!0),ie(),te(),d=new ResizeObserver(te),d.observe(s.value)}function V(he=!1){m&&m.setPreset(S(Oh,t.settings.cameraHeight),S(Tl,t.settings.cameraBearing),h?.position??new O(0,1.5,0),he)}function te(){if(!c||!f||!s.value)return;const{clientWidth:he,clientHeight:ze}=s.value;!he||!ze||(c.setSize(he,ze),f.aspect=he/ze,f.updateProjectionMatrix())}function ie(){if(!x)return;b(),t.game.paused.value=!1;let he=D(t.settings.trainingMode);yn.challenge&&l.value&&(o.value=R.start(r,new O(0,1.5,0)),he=R.getHeadingRadians()),x.reset(he),a.value=(it.radToDeg(he)+360)%360,M.reset(t.settings.windMode),L.reset(),yn.score&&P.reset(),(!yn.challenge||!l.value)&&(R.reset(),o.value=null),z(),Object.assign(t.game.telemetry,{altitude:1.5,speed:0,yaw:0,distance:0,score:0,time:0,boundaryCount:0,outside:!1,windSpeed:0,windDirection:0}),Q(),V(!0)}function Y(){t.game.paused.value=!t.game.paused.value,b()}function Q(){!h||!p||p.position.set(h.position.x,0,h.position.z)}function z(){if(!_)return;if(!yn.challenge||!l.value||!o.value?.active){_.visible=!1;return}const he=R.getTargetPosition();_.position.set(he.x,0,he.z),_.visible=!0}function pe(){x.reset(0),o.value=R.nextRound(h.position);const he=R.getHeadingRadians();x.reset(he),a.value=(it.radToDeg(he)+360)%360,z(),Q()}function ve(he){w=requestAnimationFrame(ve);const ze=Math.min((he-T)/1e3||0,.033);if(T=he,!t.game.paused.value){const ee=t.game.telemetry;ee.time+=ze;const de=M.update(ze,ee.time),Re=yn.challenge&&l.value?{throttle:N.throttle,yaw:0,pitch:N.pitch,roll:N.roll}:N,ge=x.update(ze,Re,de.acceleration,yn.challenge&&l.value?"free":t.settings.trainingMode);a.value=(Number(ge.yaw??0)+360)%360;const De=L.update(h.position);yn.challenge&&l.value&&(o.value=R.update(ze,h.position),R.shouldAdvance()&&pe()),Object.assign(ee,ge,{outside:De.outside,boundaryCount:De.count,windSpeed:de.speed,windDirection:de.direction}),ee.score=yn.score?P.update(ze,ee.distance,ee.outside):0,m.update(ze,h.position)}Q(),z(),c.render(u,f)}function Ae(){cancelAnimationFrame(w),d?.disconnect(),u?.traverse(he=>{he.geometry?.dispose(),(he.material?Array.isArray(he.material)?he.material:[he.material]:[]).forEach(ee=>{ee.dispose()})}),c?.dispose(),c?.domElement?.remove()}return ui(()=>[t.settings.cameraHeight,t.settings.cameraBearing],()=>V(!1)),ui(()=>t.settings.windMode,ie),ui(()=>t.settings.trainingMode,ie),ui(()=>t.settings.showHeadingArrow,he=>{h?.userData.headingArrow&&(h.userData.headingArrow.visible=he)}),Vl(async()=>{await Bl(),X(),i("input-ready",N),i("register-actions",{reset:ie,togglePause:Y}),w=requestAnimationFrame(ve)}),kl(Ae),(he,ze)=>(ut(),xt("div",ZS,[ne("div",{ref_key:"canvasHost",ref:s,class:"absolute inset-0"},null,512),Ct(sS,{telemetry:n.game.telemetry,"status-text":n.game.statusText.value,"wind-mode":n.settings.windMode,"camera-bearing":S(Et(Tl),n.settings.cameraBearing).degrees},null,8,["telemetry","status-text","wind-mode","camera-bearing"]),Et(yn).challenge&&l.value?(ut(),Ao(TS,{key:0,challenge:o.value},null,8,["challenge"])):Hi("",!0),ne("div",JS,[Ct(uS,{heading:a.value},null,8,["heading"])]),ze[0]||(ze[0]=ne("div",{class:"pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs text-white/60 backdrop-blur"}," 鏡頭只跟位置，不跟機頭旋轉 ",-1))]))}},ey={class:"space-y-2"},ty={class:"flex items-center justify-between text-xs text-white/60"},ny={class:"relative aspect-square w-24 rounded-full border border-white/15 bg-black/30"},Yu={__name:"StickIndicator",props:{title:{type:String,required:!0},horizontalLabel:{type:String,required:!0},verticalLabel:{type:String,required:!0},x:{type:Number,default:0},y:{type:Number,default:0}},setup(n){return(e,t)=>(ut(),xt("div",ey,[ne("div",ty,[ne("span",null,st(n.title),1),ne("span",null,st(n.horizontalLabel)+" / "+st(n.verticalLabel),1)]),ne("div",ny,[t[0]||(t[0]=ne("div",{class:"absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-white/10"},null,-1)),t[1]||(t[1]=ne("div",{class:"absolute top-1/2 left-2 right-2 h-px -translate-y-1/2 bg-white/10"},null,-1)),ne("div",{class:"absolute left-1/2 top-1/2 size-5 rounded-full border border-lime-200/80 bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.55)] transition-transform duration-75",style:Wi({transform:`translate(calc(-50% + ${n.x*31}px), calc(-50% + ${-n.y*31}px))`})},null,4)])]))}},iy={class:"rounded-2xl border border-white/10 bg-white/[0.035] p-4"},sy={class:"mb-4 flex items-center justify-between"},ry={class:"flex items-center gap-2 text-xs text-white/55"},oy={class:"grid grid-cols-2 gap-3"},ay={class:"mt-4 grid grid-cols-2 gap-2 text-xs text-white/55"},ly={class:"rounded-xl bg-black/20 p-3"},cy={key:0},uy={__name:"ControlsPanel",props:{input:Object,settings:Object},setup(n){return(e,t)=>(ut(),xt("section",iy,[ne("div",sy,[t[2]||(t[2]=ne("div",null,[ne("p",{class:"text-xs uppercase tracking-[0.2em] text-white/40"},"Mode 2"),ne("h2",{class:"mt-1 font-semibold"},"搖桿輸入")],-1)),ne("label",ry,[wf(ne("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>n.settings.showHeadingArrow=i),type:"checkbox",class:"accent-lime-300"},null,512),[[sm,n.settings.showHeadingArrow]]),t[1]||(t[1]=ls("機頭箭頭",-1))])]),ne("div",oy,[Ct(Yu,{title:"左桿",x:n.input.yaw,y:n.input.throttle,"x-label":"Yaw","y-label":"Throttle"},null,8,["x","y"]),Ct(Yu,{title:"右桿",x:n.input.roll,y:n.input.pitch,"x-label":"Roll","y-label":"Pitch"},null,8,["x","y"])]),ne("div",ay,[t[6]||(t[6]=ne("div",{class:"rounded-xl bg-black/20 p-3"},[ne("strong",{class:"text-white"},"W / S"),ne("br"),ls("升降 Throttle")],-1)),ne("div",ly,[t[3]||(t[3]=ne("strong",{class:"text-white"},"A / D",-1)),t[4]||(t[4]=ne("br",null,null,-1)),t[5]||(t[5]=ls("旋轉 Yaw",-1)),n.settings.trainingMode==="randomHeading"?(ut(),xt("span",cy,"（本模式鎖定）")):Hi("",!0)]),t[7]||(t[7]=ne("div",{class:"rounded-xl bg-black/20 p-3"},[ne("strong",{class:"text-white"},"↑ / ↓"),ne("br"),ls("前後 Pitch")],-1)),t[8]||(t[8]=ne("div",{class:"rounded-xl bg-black/20 p-3"},[ne("strong",{class:"text-white"},"← / →"),ne("br"),ls("左右 Roll")],-1))])]))}},fy=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},hy={class:"w-full max-w-2xl rounded-3xl border border-white/10 bg-[#15181f] p-6 shadow-2xl"},dy={class:"flex items-start justify-between gap-4"},py={__name:"HelpPanel",emits:["close"],setup(n,{emit:e}){const t=e;return(i,s)=>(ut(),xt("div",{class:"absolute inset-0 z-30 grid place-items-center bg-black/60 p-4 backdrop-blur-sm",onClick:s[1]||(s[1]=lm(r=>t("close"),["self"]))},[ne("section",hy,[ne("div",dy,[s[2]||(s[2]=ne("div",null,[ne("p",{class:"text-xs uppercase tracking-[0.24em] text-lime-300/70"}," Keyboard controls "),ne("h2",{class:"mt-2 text-2xl font-semibold"}," 操作說明 ")],-1)),ne("button",{class:"rounded-xl border border-white/10 px-3 py-2 text-sm hover:bg-white/5",onClick:s[0]||(s[0]=r=>t("close"))}," 關閉 ")]),s[3]||(s[3]=eh('<div class="mt-6 grid gap-3 sm:grid-cols-2" data-v-81f32447><div class="rounded-2xl bg-black/25 p-4" data-v-81f32447><h3 class="font-semibold" data-v-81f32447>左搖桿</h3><p class="mt-3 leading-7 text-white/65" data-v-81f32447><kbd data-v-81f32447>W</kbd> 升高　 <kbd data-v-81f32447>S</kbd> 下降 <br data-v-81f32447><kbd data-v-81f32447>A</kbd> 左轉　 <kbd data-v-81f32447>D</kbd> 右轉 </p></div><div class="rounded-2xl bg-black/25 p-4" data-v-81f32447><h3 class="font-semibold" data-v-81f32447>右搖桿</h3><p class="mt-3 leading-7 text-white/65" data-v-81f32447><kbd data-v-81f32447>↑</kbd> 前進　 <kbd data-v-81f32447>↓</kbd> 後退 <br data-v-81f32447><kbd data-v-81f32447>←</kbd> 左移　 <kbd data-v-81f32447>→</kbd> 右移 </p></div></div><div class="mt-3 rounded-2xl bg-black/25 p-4 text-sm leading-7 text-white/65" data-v-81f32447><kbd data-v-81f32447>Space</kbd> 暫停／繼續　 <kbd data-v-81f32447>R</kbd> 重置　 <kbd data-v-81f32447>H</kbd> 顯示／隱藏說明 </div><p class="mt-5 text-sm leading-6 text-white/50" data-v-81f32447> 這是無 GPS 水平位置訓練。鬆開方向鍵後，無人機會因慣性繼續漂移，需要提前反向修正。 </p>',3))])]))}},my=fy(py,[["__scopeId","data-v-81f32447"]]),gy={class:"rounded-2xl border border-white/10 bg-white/[0.035] p-4"},_y={class:"mb-4 flex items-center justify-between"},xy={class:"grid grid-cols-2 gap-2"},vy={class:"text-xs text-white/45"},My={class:"mt-1 text-lg font-semibold tabular-nums"},Sy={class:"col-span-2 rounded-xl bg-black/25 p-3"},yy={class:"mt-1 flex items-baseline justify-between gap-3"},Ey={class:"text-lg font-semibold"},by={class:"text-sm tabular-nums text-cyan-200"},Ty={class:"mt-3 flex items-center justify-between rounded-xl border border-white/10 px-3 py-2 text-sm"},wy={__name:"TelemetryPanel",props:{telemetry:Object,windMode:String},setup(n){return(e,t)=>(ut(),xt("section",gy,[ne("div",_y,[t[0]||(t[0]=ne("div",null,[ne("p",{class:"text-xs uppercase tracking-[0.2em] text-white/40"},"Telemetry"),ne("h2",{class:"mt-1 font-semibold"},"飛行資料")],-1)),ne("span",{class:Js(["rounded-full px-2.5 py-1 text-xs",n.telemetry.outside?"bg-red-500/15 text-red-300":"bg-lime-300/10 text-lime-300"])},st(n.telemetry.outside?"OUT":"IN ZONE"),3)]),ne("dl",xy,[(ut(!0),xt(rn,null,La([["高度",`${n.telemetry.altitude.toFixed(2)} m`],["速度",`${n.telemetry.speed.toFixed(2)} m/s`],["機頭",`${n.telemetry.yaw.toFixed(0)}°`],["離中心",`${n.telemetry.distance.toFixed(2)} m`]],i=>(ut(),xt("div",{key:i[0],class:"rounded-xl bg-black/25 p-3"},[ne("dt",vy,st(i[0]),1),ne("dd",My,st(i[1]),1)]))),128)),ne("div",Sy,[t[1]||(t[1]=ne("dt",{class:"text-xs text-white/45"},"環境風",-1)),ne("dd",yy,[ne("span",Ey,st(n.windMode==="none"?"無風":"微風"),1),ne("span",by,st(n.windMode==="none"?"0.0 m/s":`${Et(US)(n.telemetry.windDirection)} ${n.telemetry.windSpeed.toFixed(1)} m/s · ${n.telemetry.windDirection.toFixed(0)}°`),1)])])]),ne("div",Ty,[t[2]||(t[2]=ne("span",{class:"text-white/55"},"超界次數",-1)),ne("strong",{class:Js(["tabular-nums",n.telemetry.boundaryCount?"text-red-300":"text-white"])},st(n.telemetry.boundaryCount),3)])]))}},Ay={class:"mb-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur"},Ry={class:"flex flex-wrap items-center gap-2"},Cy=["onUpdate:modelValue"],Py=["value"],Dy={__name:"TopBar",props:{settings:Object,paused:Boolean},emits:["toggle-pause","reset","toggle-help"],setup(n,{emit:e}){const t=n,i=e;return(s,r)=>(ut(),xt("header",Ay,[r[3]||(r[3]=ne("div",null,[ne("p",{class:"text-[11px] font-semibold uppercase tracking-[0.28em] text-lime-300/80"},"v0.2 Foundation · Third-person ATTI trainer"),ne("h1",{class:"mt-1 text-xl font-semibold tracking-tight lg:text-2xl"},"Drone Orientation Trainer")],-1)),ne("div",Ry,[(ut(!0),xt(rn,null,La([{label:"訓練",key:"trainingMode",options:Et(BS)},{label:"風況",key:"windMode",options:Et(OS)},{label:"相機高度",key:"cameraHeight",options:Et(Oh)},{label:"相機方位",key:"cameraBearing",options:Et(Tl)}],o=>(ut(),xt("label",{key:o.key,class:"flex items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm text-white/70"},[ne("span",null,st(o.label),1),wf(ne("select",{"onUpdate:modelValue":a=>t.settings[o.key]=a,class:"bg-transparent text-white outline-none"},[(ut(!0),xt(rn,null,La(o.options,a=>(ut(),xt("option",{key:a.value,value:a.value,class:"bg-[#171a20]"},st(a.label),9,Py))),128))],8,Cy),[[rm,t.settings[o.key]]])]))),128)),ne("button",{class:"rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10",onClick:r[0]||(r[0]=o=>i("toggle-help"))},"操作說明"),ne("button",{class:"rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10",onClick:r[1]||(r[1]=o=>i("toggle-pause"))},st(n.paused?"繼續":"暫停"),1),ne("button",{class:"rounded-xl bg-lime-300 px-4 py-2 text-sm font-semibold text-black hover:bg-lime-200",onClick:r[2]||(r[2]=o=>i("reset"))},"重置")])]))}},Bh=Oi(!1),wl=Rs({altitude:1.5,speed:0,yaw:0,distance:0,score:0,time:0,boundaryCount:0,outside:!1,windSpeed:0,windDirection:0}),Ly=$n(()=>Bh.value?"已暫停":wl.outside?"超出範圍":wl.distance<1.2?"中心穩定":"修正漂移");function Iy(){return{paused:Bh,telemetry:wl,statusText:Ly}}const Uy={class:"min-h-screen bg-[#090b10] text-white"},Ny={class:"mx-auto flex min-h-screen max-w-[1800px] flex-col p-3 lg:p-5"},Fy={class:"grid min-h-0 flex-1 gap-3 xl:grid-cols-[minmax(0,1fr)_320px]"},Oy={class:"flex flex-col gap-3"},By={key:0,class:"rounded-2xl border border-lime-300/15 bg-lime-300/[0.04] p-4 text-sm text-white/65"},zy={__name:"DroneTrainer",setup(n){const e=HS(),t=Iy(),i=Oi({throttle:0,yaw:0,pitch:0,roll:0}),s=Oi({reset:()=>{},togglePause:()=>{}});function r(a){i.value=a}function o(a){s.value=a}return(a,l)=>(ut(),xt("main",Uy,[ne("div",Ny,[Ct(Dy,{settings:Et(e),paused:Et(t).paused.value,onTogglePause:s.value.togglePause,onReset:s.value.reset,onToggleHelp:l[0]||(l[0]=c=>Et(e).showHelp=!Et(e).showHelp)},null,8,["settings","paused","onTogglePause","onReset"]),ne("section",Fy,[Ct(QS,{settings:Et(e),game:Et(t),onInputReady:r,onRegisterActions:o},null,8,["settings","game"]),ne("aside",Oy,[Ct(wy,{telemetry:Et(t).telemetry,"wind-mode":Et(e).windMode},null,8,["telemetry","wind-mode"]),Ct(uy,{input:i.value,settings:Et(e)},null,8,["input","settings"]),Et(e).trainingMode==="randomHeading"?(ut(),xt("section",By,[...l[2]||(l[2]=[ne("p",{class:"font-semibold text-lime-200"},"v0.3 Random Heading",-1),ne("p",{class:"mt-2 leading-6"},"機頭會在北、東、南、西之間隨機切換。請保持機頭不動，只用 Pitch／Roll 前往指定的世界方向，完成後立即進入下一題。",-1)])])):Hi("",!0)])])]),Et(e).showHelp?(ut(),Ao(my,{key:0,onClose:l[1]||(l[1]=c=>Et(e).showHelp=!1)})):Hi("",!0)]))}},Hy={__name:"App",setup(n){return(e,t)=>(ut(),Ao(zy))}};fm(Hy).mount("#app");
