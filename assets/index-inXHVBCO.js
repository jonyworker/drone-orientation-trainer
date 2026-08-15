(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Nl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const pt={},_s=[],On=()=>{},dd=()=>!1,To=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ao=n=>n.startsWith("onUpdate:"),Vt=Object.assign,Fl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ah=Object.prototype.hasOwnProperty,ot=(n,e)=>ah.call(n,e),Ve=Array.isArray,xs=n=>_r(n)==="[object Map]",Ls=n=>_r(n)==="[object Set]",Mc=n=>_r(n)==="[object Date]",Ye=n=>typeof n=="function",Tt=n=>typeof n=="string",kn=n=>typeof n=="symbol",ft=n=>n!==null&&typeof n=="object",fd=n=>(ft(n)||Ye(n))&&Ye(n.then)&&Ye(n.catch),hd=Object.prototype.toString,_r=n=>hd.call(n),lh=n=>_r(n).slice(8,-1),pd=n=>_r(n)==="[object Object]",Ol=n=>Tt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Zs=Nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ro=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},ch=/-\w/g,yn=Ro(n=>n.replace(ch,e=>e.slice(1).toUpperCase())),uh=/\B([A-Z])/g,ji=Ro(n=>n.replace(uh,"-$1").toLowerCase()),md=Ro(n=>n.charAt(0).toUpperCase()+n.slice(1)),Wo=Ro(n=>n?`on${md(n)}`:""),Nn=(n,e)=>!Object.is(n,e),to=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},gd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},_d=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Sc;const Co=()=>Sc||(Sc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function kt(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Tt(i)?ph(i):kt(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Tt(n)||ft(n))return n}const dh=/;(?![^(]*\))/g,fh=/:([^]+)/,hh=/\/\*[^]*?\*\//g;function ph(n){const e={};return n.replace(hh,"").split(dh).forEach(t=>{if(t){const i=t.split(fh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Kt(n){let e="";if(Tt(n))e=n;else if(Ve(n))for(let t=0;t<n.length;t++){const i=Kt(n[t]);i&&(e+=i+" ")}else if(ft(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const mh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gh=Nl(mh);function xd(n){return!!n||n===""}function _h(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Is(n[i],e[i]);return t}function Is(n,e){if(n===e)return!0;let t=Mc(n),i=Mc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=kn(n),i=kn(e),t||i)return n===e;if(t=Ve(n),i=Ve(e),t||i)return t&&i?_h(n,e):!1;if(t=ft(n),i=ft(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Is(n[o],e[o]))return!1}}return String(n)===String(e)}function Bl(n,e){return n.findIndex(t=>Is(t,e))}const vd=n=>!!(n&&n.__v_isRef===!0),xe=n=>Tt(n)?n:n==null?"":Ve(n)||ft(n)&&(n.toString===hd||!Ye(n.toString))?vd(n)?xe(n.value):JSON.stringify(n,Md,2):String(n),Md=(n,e)=>vd(e)?Md(n,e.value):xs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Xo(i,r)+" =>"]=s,t),{})}:Ls(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Xo(t))}:kn(e)?Xo(e):ft(e)&&!Ve(e)&&!pd(e)?String(e):e,Xo=(n,e="")=>{var t;return kn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Nt;class xh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Nt&&(Nt.active?(this.parent=Nt,this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Nt;try{return Nt=this,e()}finally{Nt=t}}}on(){++this._on===1&&(this.prevScope=Nt,Nt=this)}off(){if(this._on>0&&--this._on===0){if(Nt===this)Nt=this.prevScope;else{let e=Nt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function vh(){return Nt}let mt;const $o=new WeakSet;class Sd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Nt&&(Nt.active?Nt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$o.has(this)&&($o.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||yd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bc(this),Ed(this);const e=mt,t=En;mt=this,En=!0;try{return this.fn()}finally{wd(this),mt=e,En=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Hl(e);this.deps=this.depsTail=void 0,bc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$o.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Na(this)&&this.run()}get dirty(){return Na(this)}}let bd=0,Js,Qs;function yd(n,e=!1){if(n.flags|=8,e){n.next=Qs,Qs=n;return}n.next=Js,Js=n}function kl(){bd++}function zl(){if(--bd>0)return;if(Qs){let e=Qs;for(Qs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Js;){let e=Js;for(Js=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Ed(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function wd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Hl(i),Mh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Na(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Td(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Td(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===rr)||(n.globalVersion=rr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Na(n))))return;n.flags|=2;const e=n.dep,t=mt,i=En;mt=n,En=!0;try{Ed(n);const s=n.fn(n._value);(e.version===0||Nn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{mt=t,En=i,wd(n),n.flags&=-3}}function Hl(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Hl(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Mh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let En=!0;const Ad=[];function ri(){Ad.push(En),En=!1}function oi(){const n=Ad.pop();En=n===void 0?!0:n}function bc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=mt;mt=void 0;try{e()}finally{mt=t}}}let rr=0;class Sh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!mt||!En||mt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==mt)t=this.activeLink=new Sh(mt,this),mt.deps?(t.prevDep=mt.depsTail,mt.depsTail.nextDep=t,mt.depsTail=t):mt.deps=mt.depsTail=t,Rd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=mt.depsTail,t.nextDep=void 0,mt.depsTail.nextDep=t,mt.depsTail=t,mt.deps===t&&(mt.deps=i)}return t}trigger(e){this.version++,rr++,this.notify(e)}notify(e){kl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{zl()}}}function Rd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Rd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Fa=new WeakMap,Gi=Symbol(""),Oa=Symbol(""),or=Symbol("");function zt(n,e,t){if(En&&mt){let i=Fa.get(n);i||Fa.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Vl),s.map=i,s.key=t),s.track()}}function Qn(n,e,t,i,s,r){const o=Fa.get(n);if(!o){rr++;return}const a=l=>{l&&l.trigger()};if(kl(),e==="clear")o.forEach(a);else{const l=Ve(n),c=l&&Ol(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===or||!kn(f)&&f>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(or)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Gi)),xs(n)&&a(o.get(Oa)));break;case"delete":l||(a(o.get(Gi)),xs(n)&&a(o.get(Oa)));break;case"set":xs(n)&&a(o.get(Gi));break}}zl()}function Ji(n){const e=rt(n);return e===n?e:(zt(e,"iterate",or),pn(n)?e:e.map(An))}function Po(n){return zt(n=rt(n),"iterate",or),n}function Ln(n,e){return ai(n)?ws(Wi(n)?An(e):e):An(e)}const bh={__proto__:null,[Symbol.iterator](){return qo(this,Symbol.iterator,n=>Ln(this,n))},concat(...n){return Ji(this).concat(...n.map(e=>Ve(e)?Ji(e):e))},entries(){return qo(this,"entries",n=>(n[1]=Ln(this,n[1]),n))},every(n,e){return Wn(this,"every",n,e,void 0,arguments)},filter(n,e){return Wn(this,"filter",n,e,t=>t.map(i=>Ln(this,i)),arguments)},find(n,e){return Wn(this,"find",n,e,t=>Ln(this,t),arguments)},findIndex(n,e){return Wn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Wn(this,"findLast",n,e,t=>Ln(this,t),arguments)},findLastIndex(n,e){return Wn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Wn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Yo(this,"includes",n)},indexOf(...n){return Yo(this,"indexOf",n)},join(n){return Ji(this).join(n)},lastIndexOf(...n){return Yo(this,"lastIndexOf",n)},map(n,e){return Wn(this,"map",n,e,void 0,arguments)},pop(){return Hs(this,"pop")},push(...n){return Hs(this,"push",n)},reduce(n,...e){return yc(this,"reduce",n,e)},reduceRight(n,...e){return yc(this,"reduceRight",n,e)},shift(){return Hs(this,"shift")},some(n,e){return Wn(this,"some",n,e,void 0,arguments)},splice(...n){return Hs(this,"splice",n)},toReversed(){return Ji(this).toReversed()},toSorted(n){return Ji(this).toSorted(n)},toSpliced(...n){return Ji(this).toSpliced(...n)},unshift(...n){return Hs(this,"unshift",n)},values(){return qo(this,"values",n=>Ln(this,n))}};function qo(n,e,t){const i=Po(n),s=i[e]();return i!==n&&!pn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const yh=Array.prototype;function Wn(n,e,t,i,s,r){const o=Po(n),a=o!==n&&!pn(n),l=o[e];if(l!==yh[e]){const d=l.apply(n,r);return a?An(d):d}let c=t;o!==n&&(a?c=function(d,f){return t.call(this,Ln(n,d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function yc(n,e,t,i){const s=Po(n),r=s!==n&&!pn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=Ln(n,c)),t.call(this,c,Ln(n,u),d,n)}):t.length>3&&(o=function(c,u,d){return t.call(this,c,u,d,n)}));const l=s[e](o,...i);return a?Ln(n,l):l}function Yo(n,e,t){const i=rt(n);zt(i,"iterate",or);const s=i[e](...t);return(s===-1||s===!1)&&Xl(t[0])?(t[0]=rt(t[0]),i[e](...t)):s}function Hs(n,e,t=[]){ri(),kl();const i=rt(n)[e].apply(n,t);return zl(),oi(),i}const Eh=Nl("__proto__,__v_isRef,__isVue"),Cd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(kn));function wh(n){kn(n)||(n=String(n));const e=rt(this);return zt(e,"has",n),e.hasOwnProperty(n)}class Pd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Nh:Ud:r?Id:Ld).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ve(e);if(!s){let l;if(o&&(l=bh[t]))return l;if(t==="hasOwnProperty")return wh}const a=Reflect.get(e,t,Ht(e)?e:i);if((kn(t)?Cd.has(t):Eh(t))||(s||zt(e,"get",t),r))return a;if(Ht(a)){const l=o&&Ol(t)?a:a.value;return s&&ft(l)?ka(l):l}return ft(a)?s?ka(a):Tn(a):a}}class Dd extends Pd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Ve(e)&&Ol(t);if(!this._isShallow){const c=ai(r);if(!pn(i)&&!ai(i)&&(r=rt(r),i=rt(i)),!o&&Ht(r)&&!Ht(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:ot(e,t),l=Reflect.set(e,t,i,Ht(e)?e:s);return e===rt(s)&&l&&(a?Nn(i,r)&&Qn(e,"set",t,i):Qn(e,"add",t,i)),l}deleteProperty(e,t){const i=ot(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Qn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!kn(t)||!Cd.has(t))&&zt(e,"has",t),i}ownKeys(e){return zt(e,"iterate",Ve(e)?"length":Gi),Reflect.ownKeys(e)}}class Th extends Pd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ah=new Dd,Rh=new Th,Ch=new Dd(!0);const Ba=n=>n,Ar=n=>Reflect.getPrototypeOf(n);function Ph(n,e,t){return function(...i){const s=this.__v_raw,r=rt(s),o=xs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Ba:e?ws:An;return!e&&zt(r,"iterate",l?Oa:Gi),Vt(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function Rr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Dh(n,e){const t={get(s){const r=this.__v_raw,o=rt(r),a=rt(s);n||(Nn(s,a)&&zt(o,"get",s),zt(o,"get",a));const{has:l}=Ar(o),c=e?Ba:n?ws:An;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&zt(rt(s),"iterate",Gi),s.size},has(s){const r=this.__v_raw,o=rt(r),a=rt(s);return n||(Nn(s,a)&&zt(o,"has",s),zt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=rt(a),c=e?Ba:n?ws:An;return!n&&zt(l,"iterate",Gi),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return Vt(t,n?{add:Rr("add"),set:Rr("set"),delete:Rr("delete"),clear:Rr("clear")}:{add(s){const r=rt(this),o=Ar(r),a=rt(s),l=!e&&!pn(s)&&!ai(s)?a:s;return o.has.call(r,l)||Nn(s,l)&&o.has.call(r,s)||Nn(a,l)&&o.has.call(r,a)||(r.add(l),Qn(r,"add",l,l)),this},set(s,r){!e&&!pn(r)&&!ai(r)&&(r=rt(r));const o=rt(this),{has:a,get:l}=Ar(o);let c=a.call(o,s);c||(s=rt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Nn(r,u)&&Qn(o,"set",s,r):Qn(o,"add",s,r),this},delete(s){const r=rt(this),{has:o,get:a}=Ar(r);let l=o.call(r,s);l||(s=rt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Qn(r,"delete",s,void 0),c},clear(){const s=rt(this),r=s.size!==0,o=s.clear();return r&&Qn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Ph(s,n,e)}),t}function Gl(n,e){const t=Dh(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ot(t,s)&&s in i?t:i,s,r)}const Lh={get:Gl(!1,!1)},Ih={get:Gl(!1,!0)},Uh={get:Gl(!0,!1)};const Ld=new WeakMap,Id=new WeakMap,Ud=new WeakMap,Nh=new WeakMap;function Fh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tn(n){return ai(n)?n:Wl(n,!1,Ah,Lh,Ld)}function Oh(n){return Wl(n,!1,Ch,Ih,Id)}function ka(n){return Wl(n,!0,Rh,Uh,Ud)}function Wl(n,e,t,i,s){if(!ft(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Fh(lh(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Wi(n){return ai(n)?Wi(n.__v_raw):!!(n&&n.__v_isReactive)}function ai(n){return!!(n&&n.__v_isReadonly)}function pn(n){return!!(n&&n.__v_isShallow)}function Xl(n){return n?!!n.__v_raw:!1}function rt(n){const e=n&&n.__v_raw;return e?rt(e):n}function Bh(n){return!ot(n,"__v_skip")&&Object.isExtensible(n)&&gd(n,"__v_skip",!0),n}const An=n=>ft(n)?Tn(n):n,ws=n=>ft(n)?ka(n):n;function Ht(n){return n?n.__v_isRef===!0:!1}function je(n){return kh(n,!1)}function kh(n,e){return Ht(n)?n:new zh(n,e)}class zh{constructor(e,t){this.dep=new Vl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:rt(e),this._value=t?e:An(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||pn(e)||ai(e);e=i?e:rt(e),Nn(e,t)&&(this._rawValue=e,this._value=i?e:An(e),this.dep.trigger())}}function ke(n){return Ht(n)?n.value:n}const Hh={get:(n,e,t)=>e==="__v_raw"?n:ke(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Ht(s)&&!Ht(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Nd(n){return Wi(n)?n:new Proxy(n,Hh)}class Vh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Vl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=rr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&mt!==this)return yd(this,!0),!0}get value(){const e=this.dep.track();return Td(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Gh(n,e,t=!1){let i,s;return Ye(n)?i=n:(i=n.get,s=n.set),new Vh(i,s,t)}const Cr={},fo=new WeakMap;let Ui;function Wh(n,e=!1,t=Ui){if(t){let i=fo.get(t);i||fo.set(t,i=[]),i.push(n)}}function Xh(n,e,t=pt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=S=>s?S:pn(S)||s===!1||s===0?ei(S,1):ei(S);let u,d,f,p,_=!1,v=!1;if(Ht(n)?(d=()=>n.value,_=pn(n)):Wi(n)?(d=()=>c(n),_=!0):Ve(n)?(v=!0,_=n.some(S=>Wi(S)||pn(S)),d=()=>n.map(S=>{if(Ht(S))return S.value;if(Wi(S))return c(S);if(Ye(S))return l?l(S,2):S()})):Ye(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){ri();try{f()}finally{oi()}}const S=Ui;Ui=u;try{return l?l(n,3,[p]):n(p)}finally{Ui=S}}:d=On,e&&s){const S=d,I=s===!0?1/0:s;d=()=>ei(S(),I)}const m=vh(),h=()=>{u.stop(),m&&m.active&&Fl(m.effects,u)};if(r&&e){const S=e;e=(...I)=>{const P=S(...I);return h(),P}}let A=v?new Array(n.length).fill(Cr):Cr;const T=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const I=u.run();if(S||s||_||(v?I.some((P,R)=>Nn(P,A[R])):Nn(I,A))){f&&f();const P=Ui;Ui=u;try{const R=[I,A===Cr?void 0:v&&A[0]===Cr?[]:A,p];A=I,l?l(e,3,R):e(...R)}finally{Ui=P}}}else u.run()};return a&&a(T),u=new Sd(d),u.scheduler=o?()=>o(T,!1):T,p=S=>Wh(S,!1,u),f=u.onStop=()=>{const S=fo.get(u);if(S){if(l)l(S,4);else for(const I of S)I();fo.delete(u)}},e?i?T(!0):A=u.run():o?o(T.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function ei(n,e=1/0,t){if(e<=0||!ft(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ht(n))ei(n.value,e,t);else if(Ve(n))for(let i=0;i<n.length;i++)ei(n[i],e,t);else if(Ls(n)||xs(n))n.forEach(i=>{ei(i,e,t)});else if(pd(n)){for(const i in n)ei(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ei(n[i],e,t)}return n}function xr(n,e,t,i){try{return i?n(...i):n()}catch(s){Do(s,e,t)}}function Rn(n,e,t,i){if(Ye(n)){const s=xr(n,e,t,i);return s&&fd(s)&&s.catch(r=>{Do(r,e,t)}),s}if(Ve(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Rn(n[r],e,t,i));return s}}function Do(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||pt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){ri(),xr(r,null,10,[n,l,c]),oi();return}}$h(n,t,s,i,o)}function $h(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const qt=[];let Dn=-1;const vs=[];let gi=null,hs=0;const Fd=Promise.resolve();let ho=null;function $l(n){const e=ho||Fd;return n?e.then(this?n.bind(this):n):e}function qh(n){let e=Dn+1,t=qt.length;for(;e<t;){const i=e+t>>>1,s=qt[i],r=ar(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function ql(n){if(!(n.flags&1)){const e=ar(n),t=qt[qt.length-1];!t||!(n.flags&2)&&e>=ar(t)?qt.push(n):qt.splice(qh(e),0,n),n.flags|=1,Od()}}function Od(){ho||(ho=Fd.then(kd))}function Yh(n){Ve(n)?vs.push(...n):gi&&n.id===-1?gi.splice(hs+1,0,n):n.flags&1||(vs.push(n),n.flags|=1),Od()}function Ec(n,e,t=Dn+1){for(;t<qt.length;t++){const i=qt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;qt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Bd(n){if(vs.length){const e=[...new Set(vs)].sort((t,i)=>ar(t)-ar(i));if(vs.length=0,gi){gi.push(...e);return}for(gi=e,hs=0;hs<gi.length;hs++){const t=gi[hs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}gi=null,hs=0}}const ar=n=>n.id==null?n.flags&2?-1:1/0:n.id;function kd(n){try{for(Dn=0;Dn<qt.length;Dn++){const e=qt[Dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),xr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Dn<qt.length;Dn++){const e=qt[Dn];e&&(e.flags&=-2)}Dn=-1,qt.length=0,Bd(),ho=null,(qt.length||vs.length)&&kd()}}let hn=null,zd=null;function po(n){const e=hn;return hn=n,zd=n&&n.type.__scopeId||null,e}function Kh(n,e=hn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Nc(-1);const r=po(e),o=Xi.length;let a;try{a=n(...s)}finally{for(let l=Xi.length;l>o;l--)ff();po(r),i._d&&Nc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Hd(n,e){if(hn===null)return n;const t=No(hn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=pt]=e[s];r&&(Ye(r)&&(r={mounted:r,updated:r}),r.deep&&ei(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ti(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ri(),Rn(l,t,8,[n.el,a,n,e]),oi())}}function jh(n,e){if(Yt){let t=Yt.provides;const i=Yt.parent&&Yt.parent.provides;i===t&&(t=Yt.provides=Object.create(i)),t[n]=e}}function no(n,e,t=!1){const i=Xp();if(i||Ms){let s=Ms?Ms._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ye(e)?e.call(i&&i.proxy):e}}const Zh=Symbol.for("v-scx"),Jh=()=>no(Zh);function Mn(n,e,t){return Vd(n,e,t)}function Vd(n,e,t=pt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Vt({},t),l=e&&i||!e&&r!=="post";let c;if(ur){if(r==="sync"){const p=Jh();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=On,p.resume=On,p.pause=On,p}}const u=Yt;a.call=(p,_,v)=>Rn(p,u,_,v);let d=!1;r==="post"?a.scheduler=p=>{Jt(p,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(p,_)=>{_?p():ql(p)}),a.augmentJob=p=>{e&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Xh(n,e,a);return ur&&(c?c.push(f):l&&f()),f}function Qh(n,e,t){const i=this.proxy,s=Tt(n)?n.includes(".")?Gd(i,n):()=>i[n]:n.bind(i,i);let r;Ye(e)?r=e:(r=e.handler,t=e);const o=vr(this),a=Vd(s,r.bind(i),t);return o(),a}function Gd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const ep=Symbol("_vte"),tp=n=>n.__isTeleport,Ko=Symbol("_leaveCb");function Yl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Yl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Wd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function wc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const mo=new WeakMap;function er(n,e,t,i,s=!1){if(Ve(n)){n.forEach((v,m)=>er(v,e&&(Ve(e)?e[m]:e),t,i,s));return}if(tr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&er(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?No(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===pt?a.refs={}:a.refs,d=a.setupState,f=rt(d),p=d===pt?dd:v=>wc(u,v)?!1:ot(f,v),_=(v,m)=>!(m&&wc(u,m));if(c!=null&&c!==l){if(Tc(e),Tt(c))u[c]=null,p(c)&&(d[c]=null);else if(Ht(c)){const v=e;_(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(Ye(l))xr(l,a,12,[o,u]);else{const v=Tt(l),m=Ht(l);if(v||m){const h=()=>{if(n.f){const A=v?p(l)?d[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)Ve(A)&&Fl(A,r);else if(Ve(A))A.includes(r)||A.push(r);else if(v)u[l]=[r],p(l)&&(d[l]=u[l]);else{const T=[r];_(l,n.k)&&(l.value=T),n.k&&(u[n.k]=T)}}else v?(u[l]=o,p(l)&&(d[l]=o)):m&&(_(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const A=()=>{h(),mo.delete(n)};A.id=-1,mo.set(n,A),Jt(A,t)}else Tc(n),h()}}}function Tc(n){const e=mo.get(n);e&&(e.flags|=8,mo.delete(n))}Co().requestIdleCallback;Co().cancelIdleCallback;const tr=n=>!!n.type.__asyncLoader,Xd=n=>n.type.__isKeepAlive;function np(n,e){$d(n,"a",e)}function ip(n,e){$d(n,"da",e)}function $d(n,e,t=Yt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Lo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Xd(s.parent.vnode)&&sp(i,e,t,s),s=s.parent}}function sp(n,e,t,i){const s=Lo(e,n,i,!0);qd(()=>{Fl(i[e],s)},t)}function Lo(n,e,t=Yt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{ri();const a=vr(t),l=Rn(e,t,n,o);return a(),oi(),l});return i?s.unshift(r):s.push(r),r}}const li=n=>(e,t=Yt)=>{(!ur||n==="sp")&&Lo(n,(...i)=>e(...i),t)},rp=li("bm"),Us=li("m"),op=li("bu"),ap=li("u"),Ns=li("bum"),qd=li("um"),lp=li("sp"),cp=li("rtg"),up=li("rtc");function dp(n,e=Yt){Lo("ec",n,e)}const fp=Symbol.for("v-ndc");function qi(n,e,t,i){let s;const r=t,o=Ve(n);if(o||Tt(n)){const a=o&&Wi(n);let l=!1,c=!1;a&&(l=!pn(n),c=ai(n),n=Po(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=e(l?c?ws(An(n[u])):An(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(ft(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const za=n=>n?gf(n)?No(n):za(n.parent):null,nr=Vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>za(n.parent),$root:n=>za(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Kd(n),$forceUpdate:n=>n.f||(n.f=()=>{ql(n.update)}),$nextTick:n=>n.n||(n.n=$l.bind(n.proxy)),$watch:n=>Qh.bind(n)}),jo=(n,e)=>n!==pt&&!n.__isScriptSetup&&ot(n,e),hp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(jo(i,e))return o[e]=1,i[e];if(s!==pt&&ot(s,e))return o[e]=2,s[e];if(ot(r,e))return o[e]=3,r[e];if(t!==pt&&ot(t,e))return o[e]=4,t[e];Ha&&(o[e]=0)}}const c=nr[e];let u,d;if(c)return e==="$attrs"&&zt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==pt&&ot(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,ot(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return jo(s,e)?(s[e]=t,!0):i!==pt&&ot(i,e)?(i[e]=t,!0):ot(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==pt&&a[0]!=="$"&&ot(n,a)||jo(e,a)||ot(r,a)||ot(i,a)||ot(nr,a)||ot(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ot(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ac(n){return Ve(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ha=!0;function pp(n){const e=Kd(n),t=n.proxy,i=n.ctx;Ha=!1,e.beforeCreate&&Rc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:_,activated:v,deactivated:m,beforeDestroy:h,beforeUnmount:A,destroyed:T,unmounted:S,render:I,renderTracked:P,renderTriggered:R,errorCaptured:U,serverPrefetch:b,expose:x,inheritAttrs:D,components:X,directives:z,filters:ee}=e;if(c&&mp(c,i,null),o)for(const te in o){const H=o[te];Ye(H)&&(i[te]=H.bind(t))}if(s){const te=s.call(t,t);ft(te)&&(n.data=Tn(te))}if(Ha=!0,r)for(const te in r){const H=r[te],fe=Ye(H)?H.bind(t,t):Ye(H.get)?H.get.bind(t,t):On,be=!Ye(H)&&Ye(H.set)?H.set.bind(t):On,Re=Mt({get:fe,set:be});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>Re.value,set:He=>Re.value=He})}if(a)for(const te in a)Yd(a[te],i,t,te);if(l){const te=Ye(l)?l.call(t):l;Reflect.ownKeys(te).forEach(H=>{jh(H,te[H])})}u&&Rc(u,n,"c");function $(te,H){Ve(H)?H.forEach(fe=>te(fe.bind(t))):H&&te(H.bind(t))}if($(rp,d),$(Us,f),$(op,p),$(ap,_),$(np,v),$(ip,m),$(dp,U),$(up,P),$(cp,R),$(Ns,A),$(qd,S),$(lp,b),Ve(x))if(x.length){const te=n.exposed||(n.exposed={});x.forEach(H=>{Object.defineProperty(te,H,{get:()=>t[H],set:fe=>t[H]=fe,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===On&&(n.render=I),D!=null&&(n.inheritAttrs=D),X&&(n.components=X),z&&(n.directives=z),b&&Wd(n)}function mp(n,e,t=On){Ve(n)&&(n=Va(n));for(const i in n){const s=n[i];let r;ft(s)?"default"in s?r=no(s.from||i,s.default,!0):r=no(s.from||i):r=no(s),Ht(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Rc(n,e,t){Rn(Ve(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Yd(n,e,t,i){let s=i.includes(".")?Gd(t,i):()=>t[i];if(Tt(n)){const r=e[n];Ye(r)&&Mn(s,r)}else if(Ye(n))Mn(s,n.bind(t));else if(ft(n))if(Ve(n))n.forEach(r=>Yd(r,e,t,i));else{const r=Ye(n.handler)?n.handler.bind(t):e[n.handler];Ye(r)&&Mn(s,r,n)}}function Kd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>go(l,c,o,!0)),go(l,e,o)),ft(e)&&r.set(e,l),l}function go(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&go(n,r,t,!0),s&&s.forEach(o=>go(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=gp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const gp={data:Cc,props:Pc,emits:Pc,methods:Ys,computed:Ys,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:Ys,directives:Ys,watch:xp,provide:Cc,inject:_p};function Cc(n,e){return e?n?function(){return Vt(Ye(n)?n.call(this,this):n,Ye(e)?e.call(this,this):e)}:e:n}function _p(n,e){return Ys(Va(n),Va(e))}function Va(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Wt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ys(n,e){return n?Vt(Object.create(null),n,e):e}function Pc(n,e){return n?Ve(n)&&Ve(e)?[...new Set([...n,...e])]:Vt(Object.create(null),Ac(n),Ac(e??{})):e}function xp(n,e){if(!n)return e;if(!e)return n;const t=Vt(Object.create(null),n);for(const i in e)t[i]=Wt(n[i],e[i]);return t}function jd(){return{app:null,config:{isNativeTag:dd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vp=0;function Mp(n,e){return function(i,s=null){Ye(i)||(i=Vt({},i)),s!=null&&!ft(s)&&(s=null);const r=jd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:vp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Zp,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&Ye(u.install)?(o.add(u),u.install(c,...d)):Ye(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const p=c._ceVNode||Ft(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,No(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Rn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Ms;Ms=c;try{return u()}finally{Ms=d}}};return c}}let Ms=null;const Sp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${yn(e)}Modifiers`]||n[`${ji(e)}Modifiers`];function bp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||pt;let s=t;const r=e.startsWith("update:"),o=r&&Sp(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Tt(u)?u.trim():u)),o.number&&(s=t.map(_d)));let a,l=i[a=Wo(e)]||i[a=Wo(yn(e))];!l&&r&&(l=i[a=Wo(ji(e))]),l&&Rn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Rn(c,n,6,s)}}const yp=new WeakMap;function Zd(n,e,t=!1){const i=t?yp:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ye(n)){const l=c=>{const u=Zd(c,e,!0);u&&(a=!0,Vt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ft(n)&&i.set(n,null),null):(Ve(r)?r.forEach(l=>o[l]=null):Vt(o,r),ft(n)&&i.set(n,o),o)}function Io(n,e){return!n||!To(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),ot(n,e[0].toLowerCase()+e.slice(1))||ot(n,ji(e))||ot(n,e))}function Dc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:p,ctx:_,inheritAttrs:v}=n,m=po(n);let h,A;try{if(t.shapeFlag&4){const S=s||i,I=S;h=In(c.call(I,S,u,d,p,f,_)),A=a}else{const S=e;h=In(S.length>1?S(d,{attrs:a,slots:o,emit:l}):S(d,null)),A=e.props?a:Ep(a)}}catch(S){Xi.length=0,Do(S,n,1),h=Ft(Si)}let T=h;if(A&&v!==!1){const S=Object.keys(A),{shapeFlag:I}=T;S.length&&I&7&&(r&&S.some(Ao)&&(A=wp(A,r)),T=Ts(T,A,!1,!0))}return t.dirs&&(T=Ts(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&Yl(T,t.transition),h=T,po(m),h}const Ep=n=>{let e;for(const t in n)(t==="class"||t==="style"||To(t))&&((e||(e={}))[t]=n[t]);return e},wp=(n,e)=>{const t={};for(const i in n)(!Ao(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Tp(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Lc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Jd(o,i,f)&&!Io(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Lc(i,o,c):!0:!!o;return!1}function Lc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Jd(e,n,r)&&!Io(t,r))return!0}return!1}function Jd(n,e,t){const i=n[t],s=e[t];return t==="style"&&ft(i)&&ft(s)?!Is(i,s):i!==s}function Ap({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Qd={},ef=()=>Object.create(Qd),tf=n=>Object.getPrototypeOf(n)===Qd;function Rp(n,e,t,i=!1){const s={},r=ef();n.propsDefaults=Object.create(null),nf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Oh(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Cp(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=rt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Io(n.emitsOptions,f))continue;const p=e[f];if(l)if(ot(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const _=yn(f);s[_]=Ga(l,a,_,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{nf(n,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!ot(e,d)&&((u=ji(d))===d||!ot(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=Ga(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!ot(e,d))&&(delete r[d],c=!0)}c&&Qn(n.attrs,"set","")}function nf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Zs(l))continue;const c=e[l];let u;s&&ot(s,u=yn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Io(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=rt(t),c=a||pt;for(let u=0;u<r.length;u++){const d=r[u];t[d]=Ga(s,l,d,c[d],n,!ot(c,d))}}return o}function Ga(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=ot(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ye(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=vr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ji(t))&&(i=!0))}return i}const Pp=new WeakMap;function sf(n,e,t=!1){const i=t?Pp:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ye(n)){const u=d=>{l=!0;const[f,p]=sf(d,e,!0);Vt(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ft(n)&&i.set(n,_s),_s;if(Ve(r))for(let u=0;u<r.length;u++){const d=yn(r[u]);Ic(d)&&(o[d]=pt)}else if(r)for(const u in r){const d=yn(u);if(Ic(d)){const f=r[u],p=o[d]=Ve(f)||Ye(f)?{type:f}:Vt({},f),_=p.type;let v=!1,m=!0;if(Ve(_))for(let h=0;h<_.length;++h){const A=_[h],T=Ye(A)&&A.name;if(T==="Boolean"){v=!0;break}else T==="String"&&(m=!1)}else v=Ye(_)&&_.name==="Boolean";p[0]=v,p[1]=m,(v||ot(p,"default"))&&a.push(d)}}const c=[o,a];return ft(n)&&i.set(n,c),c}function Ic(n){return n[0]!=="$"&&!Zs(n)}const Kl=n=>n==="_"||n==="_ctx"||n==="$stable",jl=n=>Ve(n)?n.map(In):[In(n)],Dp=(n,e,t)=>{if(e._n)return e;const i=Kh((...s)=>jl(e(...s)),t);return i._c=!1,i},rf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Kl(s))continue;const r=n[s];if(Ye(r))e[s]=Dp(s,r,i);else if(r!=null){const o=jl(r);e[s]=()=>o}}},of=(n,e)=>{const t=jl(e);n.slots.default=()=>t},af=(n,e,t)=>{for(const i in e)(t||!Kl(i))&&(n[i]=e[i])},Lp=(n,e,t)=>{const i=n.slots=ef();if(n.vnode.shapeFlag&32){const s=e._;s?(af(i,e,t),t&&gd(i,"_",s,!0)):rf(e,i)}else e&&of(n,e)},Ip=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=pt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:af(s,e,t):(r=!e.$stable,rf(e,s)),o=e}else e&&(of(n,e),o={default:1});if(r)for(const a in s)!Kl(a)&&o[a]==null&&delete s[a]},Jt=Bp;function Up(n){return Np(n)}function Np(n,e){const t=Co();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=On,insertStaticContent:_}=n,v=(C,L,y,re=null,K=null,Q=null,Z=void 0,ie=null,J=!!L.dynamicChildren)=>{if(C===L)return;C&&!Vs(C,L)&&(re=ge(C),He(C,K,Q,!0),C=null),L.patchFlag===-2&&(J=!1,L.dynamicChildren=null);const{type:W,ref:ve,shapeFlag:M}=L;switch(W){case Uo:m(C,L,y,re);break;case Si:h(C,L,y,re);break;case io:C==null&&A(L,y,re,Z);break;case gt:X(C,L,y,re,K,Q,Z,ie,J);break;default:M&1?I(C,L,y,re,K,Q,Z,ie,J):M&6?z(C,L,y,re,K,Q,Z,ie,J):(M&64||M&128)&&W.process(C,L,y,re,K,Q,Z,ie,J,Oe)}ve!=null&&K?er(ve,C&&C.ref,Q,L||C,!L):ve==null&&C&&C.ref!=null&&er(C.ref,null,Q,C,!0)},m=(C,L,y,re)=>{if(C==null)i(L.el=a(L.children),y,re);else{const K=L.el=C.el;L.children!==C.children&&c(K,L.children)}},h=(C,L,y,re)=>{C==null?i(L.el=l(L.children||""),y,re):L.el=C.el},A=(C,L,y,re)=>{[C.el,C.anchor]=_(C.children,L,y,re,C.el,C.anchor)},T=({el:C,anchor:L},y,re)=>{let K;for(;C&&C!==L;)K=f(C),i(C,y,re),C=K;i(L,y,re)},S=({el:C,anchor:L})=>{let y;for(;C&&C!==L;)y=f(C),s(C),C=y;s(L)},I=(C,L,y,re,K,Q,Z,ie,J)=>{if(L.type==="svg"?Z="svg":L.type==="math"&&(Z="mathml"),C==null)P(L,y,re,K,Q,Z,ie,J);else{const W=C.el&&C.el._isVueCE?C.el:null;try{W&&W._beginPatch(),b(C,L,K,Q,Z,ie,J)}finally{W&&W._endPatch()}}},P=(C,L,y,re,K,Q,Z,ie)=>{let J,W;const{props:ve,shapeFlag:M,transition:g,dirs:N}=C;if(J=C.el=o(C.type,Q,ve&&ve.is,ve),M&8?u(J,C.children):M&16&&U(C.children,J,null,re,K,Zo(C,Q),Z,ie),N&&Ti(C,null,re,"created"),R(J,C,C.scopeId,Z,re),ve){for(const j in ve)j!=="value"&&!Zs(j)&&r(J,j,null,ve[j],Q,re);"value"in ve&&r(J,"value",null,ve.value,Q),(W=ve.onVnodeBeforeMount)&&Cn(W,re,C)}N&&Ti(C,null,re,"beforeMount");const G=Fp(K,g);G&&g.beforeEnter(J),i(J,L,y),((W=ve&&ve.onVnodeMounted)||G||N)&&Jt(()=>{W&&Cn(W,re,C),G&&g.enter(J),N&&Ti(C,null,re,"mounted")},K)},R=(C,L,y,re,K)=>{if(y&&p(C,y),re)for(let Q=0;Q<re.length;Q++)p(C,re[Q]);if(K){let Q=K.subTree;if(L===Q||df(Q.type)&&(Q.ssContent===L||Q.ssFallback===L)){const Z=K.vnode;R(C,Z,Z.scopeId,Z.slotScopeIds,K.parent)}}},U=(C,L,y,re,K,Q,Z,ie,J=0)=>{for(let W=J;W<C.length;W++){const ve=C[W]=ie?Jn(C[W]):In(C[W]);v(null,ve,L,y,re,K,Q,Z,ie)}},b=(C,L,y,re,K,Q,Z)=>{const ie=L.el=C.el;let{patchFlag:J,dynamicChildren:W,dirs:ve}=L;J|=C.patchFlag&16;const M=C.props||pt,g=L.props||pt;let N;if(y&&Ai(y,!1),(N=g.onVnodeBeforeUpdate)&&Cn(N,y,L,C),ve&&Ti(L,C,y,"beforeUpdate"),y&&Ai(y,!0),W&&(!C.dynamicChildren||C.dynamicChildren.length!==W.length)&&(J=0,Z=!1,W=null),(M.innerHTML&&g.innerHTML==null||M.textContent&&g.textContent==null)&&u(ie,""),W?x(C.dynamicChildren,W,ie,y,re,Zo(L,K),Q):Z||H(C,L,ie,null,y,re,Zo(L,K),Q,!1),J>0){if(J&16)D(ie,M,g,y,K);else if(J&2&&M.class!==g.class&&r(ie,"class",null,g.class,K),J&4&&r(ie,"style",M.style,g.style,K),J&8){const G=L.dynamicProps;for(let j=0;j<G.length;j++){const V=G[j],pe=M[V],le=g[V];(le!==pe||V==="value")&&r(ie,V,pe,le,K,y)}}J&1&&C.children!==L.children&&u(ie,L.children)}else!Z&&W==null&&D(ie,M,g,y,K);((N=g.onVnodeUpdated)||ve)&&Jt(()=>{N&&Cn(N,y,L,C),ve&&Ti(L,C,y,"updated")},re)},x=(C,L,y,re,K,Q,Z)=>{for(let ie=0;ie<L.length;ie++){const J=C[ie],W=L[ie],ve=J.el&&(J.type===gt||!Vs(J,W)||J.shapeFlag&198)?d(J.el):y;v(J,W,ve,null,re,K,Q,Z,!0)}},D=(C,L,y,re,K)=>{if(L!==y){if(L!==pt)for(const Q in L)!Zs(Q)&&!(Q in y)&&r(C,Q,L[Q],null,K,re);for(const Q in y){if(Zs(Q))continue;const Z=y[Q],ie=L[Q];Z!==ie&&Q!=="value"&&r(C,Q,ie,Z,K,re)}"value"in y&&r(C,"value",L.value,y.value,K)}},X=(C,L,y,re,K,Q,Z,ie,J)=>{const W=L.el=C?C.el:a(""),ve=L.anchor=C?C.anchor:a("");let{patchFlag:M,dynamicChildren:g,slotScopeIds:N}=L;N&&(ie=ie?ie.concat(N):N),C==null?(i(W,y,re),i(ve,y,re),U(L.children||[],y,ve,K,Q,Z,ie,J)):M>0&&M&64&&g&&C.dynamicChildren&&C.dynamicChildren.length===g.length?(x(C.dynamicChildren,g,y,K,Q,Z,ie),(L.key!=null||K&&L===K.subTree)&&lf(C,L,!0)):H(C,L,y,ve,K,Q,Z,ie,J)},z=(C,L,y,re,K,Q,Z,ie,J)=>{L.slotScopeIds=ie,C==null?L.shapeFlag&512?K.ctx.activate(L,y,re,Z,J):ee(L,y,re,K,Q,Z,J):ne(C,L,J)},ee=(C,L,y,re,K,Q,Z)=>{const ie=C.component=Wp(C,re,K);if(Xd(C)&&(ie.ctx.renderer=Oe),$p(ie,!1,Z),ie.asyncDep){if(K&&K.registerDep(ie,$,Z),!C.el){const J=ie.subTree=Ft(Si);h(null,J,L,y),C.placeholder=J.el}}else $(ie,C,L,y,K,Q,Z)},ne=(C,L,y)=>{const re=L.component=C.component;if(Tp(C,L,y))if(re.asyncDep&&!re.asyncResolved){te(re,L,y);return}else re.next=L,re.update();else L.el=C.el,re.vnode=L},$=(C,L,y,re,K,Q,Z)=>{const ie=()=>{if(C.isMounted){let{next:M,bu:g,u:N,parent:G,vnode:j}=C;{const Te=cf(C);if(Te){M&&(M.el=j.el,te(C,M,Z)),Te.asyncDep.then(()=>{Jt(()=>{C.isUnmounted||W()},K)});return}}let V=M,pe;Ai(C,!1),M?(M.el=j.el,te(C,M,Z)):M=j,g&&to(g),(pe=M.props&&M.props.onVnodeBeforeUpdate)&&Cn(pe,G,M,j),Ai(C,!0);const le=Dc(C),ye=C.subTree;C.subTree=le,v(ye,le,d(ye.el),ge(ye),C,K,Q),M.el=le.el,V===null&&Ap(C,le.el),N&&Jt(N,K),(pe=M.props&&M.props.onVnodeUpdated)&&Jt(()=>Cn(pe,G,M,j),K)}else{let M;const{el:g,props:N}=L,{bm:G,m:j,parent:V,root:pe,type:le}=C,ye=tr(L);Ai(C,!1),G&&to(G),!ye&&(M=N&&N.onVnodeBeforeMount)&&Cn(M,V,L),Ai(C,!0);{pe.ce&&pe.ce._hasShadowRoot()&&pe.ce._injectChildStyle(le,C.parent?C.parent.type:void 0);const Te=C.subTree=Dc(C);v(null,Te,y,re,C,K,Q),L.el=Te.el}if(j&&Jt(j,K),!ye&&(M=N&&N.onVnodeMounted)){const Te=L;Jt(()=>Cn(M,V,Te),K)}(L.shapeFlag&256||V&&tr(V.vnode)&&V.vnode.shapeFlag&256)&&C.a&&Jt(C.a,K),C.isMounted=!0,L=y=re=null}};C.scope.on();const J=C.effect=new Sd(ie);C.scope.off();const W=C.update=J.run.bind(J),ve=C.job=J.runIfDirty.bind(J);ve.i=C,ve.id=C.uid,J.scheduler=()=>ql(ve),Ai(C,!0),W()},te=(C,L,y)=>{L.component=C;const re=C.vnode.props;C.vnode=L,C.next=null,Cp(C,L.props,re,y),Ip(C,L.children,y),ri(),Ec(C),oi()},H=(C,L,y,re,K,Q,Z,ie,J=!1)=>{const W=C&&C.children,ve=C?C.shapeFlag:0,M=L.children,{patchFlag:g,shapeFlag:N}=L;if(g>0){if(g&128){be(W,M,y,re,K,Q,Z,ie,J);return}else if(g&256){fe(W,M,y,re,K,Q,Z,ie,J);return}}N&8?(ve&16&&Ce(W,K,Q),M!==W&&u(y,M)):ve&16?N&16?be(W,M,y,re,K,Q,Z,ie,J):Ce(W,K,Q,!0):(ve&8&&u(y,""),N&16&&U(M,y,re,K,Q,Z,ie,J))},fe=(C,L,y,re,K,Q,Z,ie,J)=>{C=C||_s,L=L||_s;const W=C.length,ve=L.length,M=Math.min(W,ve);let g;for(g=0;g<M;g++){const N=L[g]=J?Jn(L[g]):In(L[g]);v(C[g],N,y,null,K,Q,Z,ie,J)}W>ve?Ce(C,K,Q,!0,!1,M):U(L,y,re,K,Q,Z,ie,J,M)},be=(C,L,y,re,K,Q,Z,ie,J)=>{let W=0;const ve=L.length;let M=C.length-1,g=ve-1;for(;W<=M&&W<=g;){const N=C[W],G=L[W]=J?Jn(L[W]):In(L[W]);if(Vs(N,G))v(N,G,y,null,K,Q,Z,ie,J);else break;W++}for(;W<=M&&W<=g;){const N=C[M],G=L[g]=J?Jn(L[g]):In(L[g]);if(Vs(N,G))v(N,G,y,null,K,Q,Z,ie,J);else break;M--,g--}if(W>M){if(W<=g){const N=g+1,G=N<ve?L[N].el:re;for(;W<=g;)v(null,L[W]=J?Jn(L[W]):In(L[W]),y,G,K,Q,Z,ie,J),W++}}else if(W>g)for(;W<=M;)He(C[W],K,Q,!0),W++;else{const N=W,G=W,j=new Map;for(W=G;W<=g;W++){const De=L[W]=J?Jn(L[W]):In(L[W]);De.key!=null&&j.set(De.key,W)}let V,pe=0;const le=g-G+1;let ye=!1,Te=0;const ae=new Array(le);for(W=0;W<le;W++)ae[W]=0;for(W=N;W<=M;W++){const De=C[W];if(pe>=le){He(De,K,Q,!0);continue}let Le;if(De.key!=null)Le=j.get(De.key);else for(V=G;V<=g;V++)if(ae[V-G]===0&&Vs(De,L[V])){Le=V;break}Le===void 0?He(De,K,Q,!0):(ae[Le-G]=W+1,Le>=Te?Te=Le:ye=!0,v(De,L[Le],y,null,K,Q,Z,ie,J),pe++)}const Ee=ye?Op(ae):_s;for(V=Ee.length-1,W=le-1;W>=0;W--){const De=G+W,Le=L[De],me=L[De+1],Ge=De+1<ve?me.el||uf(me):re;ae[W]===0?v(null,Le,y,Ge,K,Q,Z,ie,J):ye&&(V<0||W!==Ee[V]?Re(Le,y,Ge,2):V--)}}},Re=(C,L,y,re,K=null)=>{const{el:Q,type:Z,transition:ie,children:J,shapeFlag:W}=C;if(W&6){Re(C.component.subTree,L,y,re);return}if(W&128){C.suspense.move(L,y,re);return}if(W&64){Z.move(C,L,y,Oe);return}if(Z===gt){i(Q,L,y);for(let M=0;M<J.length;M++)Re(J[M],L,y,re);i(C.anchor,L,y);return}if(Z===io){T(C,L,y);return}if(re!==2&&W&1&&ie)if(re===0)ie.persisted&&!Q[Ko]?i(Q,L,y):(ie.beforeEnter(Q),i(Q,L,y),Jt(()=>ie.enter(Q),K));else{const{leave:M,delayLeave:g,afterLeave:N}=ie,G=()=>{C.ctx.isUnmounted?s(Q):i(Q,L,y)},j=()=>{const V=Q._isLeaving||!!Q[Ko];Q._isLeaving&&Q[Ko](!0),ie.persisted&&!V?G():M(Q,()=>{G(),N&&N()})};g?g(Q,G,j):j()}else i(Q,L,y)},He=(C,L,y,re=!1,K=!1)=>{const{type:Q,props:Z,ref:ie,children:J,dynamicChildren:W,shapeFlag:ve,patchFlag:M,dirs:g,cacheIndex:N,memo:G}=C;if(M===-2&&(K=!1),ie!=null&&(ri(),er(ie,null,y,C,!0),oi()),N!=null&&(L.renderCache[N]=void 0),ve&256){L.ctx.deactivate(C);return}const j=ve&1&&g,V=!tr(C);let pe;if(V&&(pe=Z&&Z.onVnodeBeforeUnmount)&&Cn(pe,L,C),ve&6)he(C.component,y,re);else{if(ve&128){C.suspense.unmount(y,re);return}j&&Ti(C,null,L,"beforeUnmount"),ve&64?C.type.remove(C,L,y,Oe,re):W&&!W.hasOnce&&(Q!==gt||M>0&&M&64)?Ce(W,L,y,!1,!0):(Q===gt&&M&384||!K&&ve&16)&&Ce(J,L,y),re&&nt(C)}const le=G!=null&&N==null;(V&&(pe=Z&&Z.onVnodeUnmounted)||j||le)&&Jt(()=>{pe&&Cn(pe,L,C),j&&Ti(C,null,L,"unmounted"),le&&(C.el=null)},y)},nt=C=>{const{type:L,el:y,anchor:re,transition:K}=C;if(L===gt){se(y,re);return}if(L===io){S(C);return}const Q=()=>{s(y),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(C.shapeFlag&1&&K&&!K.persisted){const{leave:Z,delayLeave:ie}=K,J=()=>Z(y,Q);ie?ie(C.el,Q,J):J()}else Q()},se=(C,L)=>{let y;for(;C!==L;)y=f(C),s(C),C=y;s(L)},he=(C,L,y)=>{const{bum:re,scope:K,job:Q,subTree:Z,um:ie,m:J,a:W}=C;Uc(J),Uc(W),re&&to(re),K.stop(),Q&&(Q.flags|=8,He(Z,C,L,y)),ie&&Jt(ie,L),Jt(()=>{C.isUnmounted=!0},L)},Ce=(C,L,y,re=!1,K=!1,Q=0)=>{for(let Z=Q;Z<C.length;Z++)He(C[Z],L,y,re,K)},ge=C=>{if(C.shapeFlag&6)return ge(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const L=f(C.anchor||C.el),y=L&&L[ep];return y?f(y):L};let Ne=!1;const Je=(C,L,y)=>{let re;C==null?L._vnode&&(He(L._vnode,null,null,!0),re=L._vnode.component):v(L._vnode||null,C,L,null,null,null,y),L._vnode=C,Ne||(Ne=!0,Ec(re),Bd(),Ne=!1)},Oe={p:v,um:He,m:Re,r:nt,mt:ee,mc:U,pc:H,pbc:x,n:ge,o:n};return{render:Je,hydrate:void 0,createApp:Mp(Je)}}function Zo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ai({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Fp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function lf(n,e,t=!1){const i=n.children,s=e.children;if(Ve(i)&&Ve(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Jn(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&lf(o,a)),a.type===Uo&&(a.patchFlag===-1&&(a=s[r]=Jn(a)),a.el=o.el),a.type===Si&&!a.el&&(a.el=o.el)}}function Op(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function cf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cf(e)}function Uc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function uf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?uf(e.subTree):null}const df=n=>n.__isSuspense;function Bp(n,e){e&&e.pendingBranch?Ve(n)?e.effects.push(...n):e.effects.push(n):Yh(n)}const gt=Symbol.for("v-fgt"),Uo=Symbol.for("v-txt"),Si=Symbol.for("v-cmt"),io=Symbol.for("v-stc"),Xi=[];let ln=null;function we(n=!1){Xi.push(ln=n?null:[])}function ff(){Xi.pop(),ln=Xi[Xi.length-1]||null}let lr=1;function Nc(n,e=!1){lr+=n,n<0&&ln&&e&&(ln.hasOnce=!0)}function hf(n){return n.dynamicChildren=lr>0?ln||_s:null,ff(),lr>0&&ln&&ln.push(n),n}function Fe(n,e,t,i,s,r){return hf(w(n,e,t,i,s,r,!0))}function xi(n,e,t,i,s){return hf(Ft(n,e,t,i,s,!0))}function pf(n){return n?n.__v_isVNode===!0:!1}function Vs(n,e){return n.type===e.type&&n.key===e.key}const mf=({key:n})=>n??null,so=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Tt(n)||Ht(n)||Ye(n)?{i:hn,r:n,k:e,f:!!t}:n:null);function w(n,e=null,t=null,i=0,s=null,r=n===gt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&mf(e),ref:e&&so(e),scopeId:zd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:hn};return a?(_o(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Tt(t)?8:16),lr>0&&!o&&ln&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ln.push(l),l}const Ft=kp;function kp(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===fp)&&(n=Si),pf(n)){const a=Ts(n,e,!0);return t&&_o(a,t),lr>0&&!r&&ln&&(a.shapeFlag&6?ln[ln.indexOf(n)]=a:ln.push(a)),a.patchFlag=-2,a}if(jp(n)&&(n=n.__vccOpts),e){e=zp(e);let{class:a,style:l}=e;a&&!Tt(a)&&(e.class=Kt(a)),ft(l)&&(Xl(l)&&!Ve(l)&&(l=Vt({},l)),e.style=kt(l))}const o=Tt(n)?1:df(n)?128:tp(n)?64:ft(n)?4:Ye(n)?2:0;return w(n,e,t,i,s,o,r,!0)}function zp(n){return n?Xl(n)||tf(n)?Vt({},n):n:null}function Ts(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Hp(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&mf(c),ref:e&&e.ref?t&&r?Ve(r)?r.concat(so(e)):[r,so(e)]:so(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==gt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ts(n.ssContent),ssFallback:n.ssFallback&&Ts(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Yl(u,l.clone(u)),u}function Ct(n=" ",e=0){return Ft(Uo,null,n,e)}function cr(n,e){const t=Ft(io,null,n);return t.staticCount=e,t}function Rt(n="",e=!1){return e?(we(),xi(Si,null,n)):Ft(Si,null,n)}function In(n){return n==null||typeof n=="boolean"?Ft(Si):Ve(n)?Ft(gt,null,n.slice()):pf(n)?Jn(n):Ft(Uo,null,String(n))}function Jn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ts(n)}function _o(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ve(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),_o(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!tf(e)?e._ctx=hn:s===3&&hn&&(hn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Ye(e)){if(i&65){_o(n,{default:e});return}e={default:e,_ctx:hn},t=32}else e=String(e),i&64?(t=16,e=[Ct(e)]):t=8;n.children=e,n.shapeFlag|=t}function Hp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Kt([e.class,i.class]));else if(s==="style")e.style=kt([e.style,i.style]);else if(To(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ve(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Ao(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function Cn(n,e,t,i=null){Rn(n,e,7,[t,i])}const Vp=jd();let Gp=0;function Wp(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Vp,r={uid:Gp++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sf(i,s),emitsOptions:Zd(i,s),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:i.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=bp.bind(null,r),n.ce&&n.ce(r),r}let Yt=null;const Xp=()=>Yt||hn;let xo,Wa;{const n=Co(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};xo=e("__VUE_INSTANCE_SETTERS__",t=>Yt=t),Wa=e("__VUE_SSR_SETTERS__",t=>ur=t)}const vr=n=>{const e=Yt;return xo(n),n.scope.on(),()=>{n.scope.off(),xo(e)}},Fc=()=>{Yt&&Yt.scope.off(),xo(null)};function gf(n){return n.vnode.shapeFlag&4}let ur=!1;function $p(n,e=!1,t=!1){e&&Wa(e);const{props:i,children:s}=n.vnode,r=gf(n);Rp(n,i,r,e),Lp(n,s,t||e);const o=r?qp(n,e):void 0;return e&&Wa(!1),o}function qp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,hp);const{setup:i}=t;if(i){ri();const s=n.setupContext=i.length>1?Kp(n):null,r=vr(n),o=xr(i,n,0,[n.props,s]),a=fd(o);if(oi(),r(),(a||n.sp)&&!tr(n)&&Wd(n),a){if(o.then(Fc,Fc),e)return o.then(l=>{Oc(n,l)}).catch(l=>{Do(l,n,0)});n.asyncDep=o}else Oc(n,o)}else _f(n)}function Oc(n,e,t){Ye(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ft(e)&&(n.setupState=Nd(e)),_f(n)}function _f(n,e,t){const i=n.type;n.render||(n.render=i.render||On);{const s=vr(n);ri();try{pp(n)}finally{oi(),s()}}}const Yp={get(n,e){return zt(n,"get",""),n[e]}};function Kp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Yp),slots:n.slots,emit:n.emit,expose:e}}function No(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Nd(Bh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in nr)return nr[t](n)},has(e,t){return t in e||t in nr}})):n.proxy}function jp(n){return Ye(n)&&"__vccOpts"in n}const Mt=(n,e)=>Gh(n,e,ur),Zp="3.5.40";let Xa;const Bc=typeof window<"u"&&window.trustedTypes;if(Bc)try{Xa=Bc.createPolicy("vue",{createHTML:n=>n})}catch{}const xf=Xa?n=>Xa.createHTML(n):n=>n,Jp="http://www.w3.org/2000/svg",Qp="http://www.w3.org/1998/Math/MathML",Zn=typeof document<"u"?document:null,kc=Zn&&Zn.createElement("template"),em={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Zn.createElementNS(Jp,n):e==="mathml"?Zn.createElementNS(Qp,n):t?Zn.createElement(n,{is:t}):Zn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Zn.createTextNode(n),createComment:n=>Zn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Zn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{kc.innerHTML=xf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=kc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},tm=Symbol("_vtc");function nm(n,e,t){const i=n[tm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const zc=Symbol("_vod"),im=Symbol("_vsh"),sm=Symbol(""),rm=/(?:^|;)\s*display\s*:/;function om(n,e,t){const i=n.style,s=Tt(t);let r=!1;if(t&&!s){if(e)if(Tt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ks(i,a,"")}else for(const o in e)t[o]==null&&Ks(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?lm(n,o,!Tt(e)&&e?e[o]:void 0,a)||Ks(i,o,a):Ks(i,o,"")}}else if(s){if(e!==t){const o=i[sm];o&&(t+=";"+o),i.cssText=t,r=rm.test(t)}}else e&&n.removeAttribute("style");zc in n&&(n[zc]=r?i.display:"",n[im]&&(i.display="none"))}const Hc=/\s*!important$/;function Ks(n,e,t){if(Ve(t))t.forEach(i=>Ks(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=am(n,e);Hc.test(t)?n.setProperty(ji(i),t.replace(Hc,""),"important"):n[i]=t}}const Vc=["Webkit","Moz","ms"],Jo={};function am(n,e){const t=Jo[e];if(t)return t;let i=yn(e);if(i!=="filter"&&i in n)return Jo[e]=i;i=md(i);for(let s=0;s<Vc.length;s++){const r=Vc[s]+i;if(r in n)return Jo[e]=r}return e}function lm(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Tt(i)&&t===i}const Gc="http://www.w3.org/1999/xlink";function Wc(n,e,t,i,s,r=gh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Gc,e.slice(6,e.length)):n.setAttributeNS(Gc,e,t):t==null||r&&!xd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":kn(t)?String(t):t)}function Xc(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?xf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=xd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Zl(n,e,t,i){n.addEventListener(e,t,i)}function cm(n,e,t,i){n.removeEventListener(e,t,i)}const $c=Symbol("_vei");function um(n,e,t,i,s=null){const r=n[$c]||(n[$c]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=hm(e);if(i){const c=r[e]=gm(i,s);Zl(n,a,c,l)}else o&&(cm(n,a,o,l),r[e]=void 0)}}const dm=/(Once|Passive|Capture)$/,fm=/^on:?(?:Once|Passive|Capture)$/;function hm(n){let e,t;for(;(t=n.match(dm))&&!fm.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):ji(n.slice(2)),e]}let Qo=0;const pm=Promise.resolve(),mm=()=>Qo||(pm.then(()=>Qo=0),Qo=Date.now());function gm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(Ve(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Rn(c,e,5,a)}}else Rn(s,e,5,[i])};return t.value=n,t.attached=mm(),t}const qc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,_m=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?nm(n,i,o):e==="style"?om(n,t,i):To(e)?Ao(e)||um(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xm(n,e,i,o))?(Xc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wc(n,e,i,o,r,e!=="value")):n._isVueCE&&(vm(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Tt(i)))?Xc(n,yn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Wc(n,e,i,o))};function xm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&qc(e)&&Ye(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return qc(e)&&Tt(t)?!1:e in n}function vm(n,e){const t=n._def.props;if(!t)return!1;const i=yn(e);return Array.isArray(t)?t.some(s=>yn(s)===i):Object.keys(t).some(s=>yn(s)===i)}const vo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ve(e)?t=>to(e,t):e},Ss=Symbol("_assign"),Mm={deep:!0,created(n,e,t){n[Ss]=vo(t),Zl(n,"change",()=>{const i=n._modelValue,s=dr(n),r=n.checked,o=n[Ss];if(Ve(i)){const a=Bl(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Ls(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(vf(n,r))})},mounted:Yc,beforeUpdate(n,e,t){n[Ss]=vo(t),Yc(n,e,t)}};function Yc(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(Ve(e))s=Bl(e,i.props.value)>-1;else if(Ls(e))s=e.has(i.props.value);else{if(e===t)return;s=Is(e,vf(n,!0))}n.checked!==s&&(n.checked=s)}const Sm={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,Zl(n,"change",()=>{const s=Array.prototype.filter.call(n.options,r=>r.selected).map(r=>t?_d(dr(r)):dr(r));n[Ss](n.multiple?Ls(n._modelValue)?new Set(s):s:s[0]),n._assigning=!0,$l(()=>{n._assigning=!1})}),n[Ss]=vo(i)},mounted(n,{value:e}){Kc(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[Ss]=vo(t)},updated(n,{value:e}){n._assigning||Kc(n,e)}};function Kc(n,e){const t=n.multiple,i=Ve(e);if(!(t&&!i&&!Ls(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=dr(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Bl(e,a)>-1}else o.selected=e.has(a);else if(Is(dr(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function dr(n){return"_value"in n?n._value:n.value}function vf(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const bm=["ctrl","shift","alt","meta"],ym={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>bm.some(t=>n[`${t}Key`]&&!e.includes(t))},Jl=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=ym[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},Em=Vt({patchProp:_m},em);let jc;function wm(){return jc||(jc=Up(Em))}const Tm=((...n)=>{const e=wm().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Rm(i);if(!s)return;const r=e._component;!Ye(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Am(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Am(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Rm(n){return Tt(n)?document.querySelector(n):n}const Mf="drone-trainer-controller-calibration",Cm={version:1,calibrated:!1,deadzone:.03,axes:{roll:{min:-1,center:0,max:1},pitch:{min:-1,center:0,max:1},yaw:{min:-1,center:0,max:1},throttle:{min:-1,max:1}}};function ps(){return JSON.parse(JSON.stringify(Cm))}function $a(n,e,t){return Math.min(t,Math.max(e,n))}function Pm(n,e,t){const i=Number(n??0),s=Number(e?.min??-1),r=Number(e?.center??0),o=Number(e?.max??1);let a=0;if(i<r){const c=r-s;c>1e-4&&(a=-((r-i)/c))}if(i>r){const c=o-r;c>1e-4&&(a=(i-r)/c)}if(a=$a(a,-1,1),Math.abs(a)<=t)return 0;const l=Math.sign(a);return $a(l*((Math.abs(a)-t)/(1-t)),-1,1)}function Dm(n,e){const t=Number(n??-1),i=Number(e?.min??-1),r=Number(e?.max??1)-i;return r<=1e-4?0:$a((t-i)/r,0,1)}function Lm(){if(typeof window>"u")return ps();try{const n=window.localStorage.getItem(Mf);if(!n)return ps();const e=JSON.parse(n);return{...ps(),...e,axes:{...ps().axes,...e.axes??{}}}}catch{return ps()}}const ci=Tn(Lm());function Ql(){function n(){window.localStorage.setItem(Mf,JSON.stringify(ci))}function e(){const s=ps();Object.assign(ci,s),n()}function t(s){Object.assign(ci,s),ci.calibrated=!0,n()}function i(s,r){return s==="throttle"?Dm(r,ci.axes.throttle):Pm(r,ci.axes[s],ci.deadzone)}return{calibration:ci,normalizeAxis:i,save:n,reset:e,setCalibration:t}}const Im={class:"flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-lime-300/20 bg-[#11151c] shadow-2xl shadow-black/60"},Um={class:"flex shrink-0 items-start justify-between gap-4 border-b border-white/10 px-6 py-5"},Nm={class:"flex items-center gap-2"},Fm={class:"min-h-0 flex-1 overflow-y-auto p-6"},Om={key:0,class:"rounded-2xl border border-amber-200/15 bg-amber-200/5.5 p-5 text-sm leading-6 text-amber-50/70"},Bm={class:"mt-6 grid gap-3 sm:grid-cols-3"},km={class:"rounded-2xl border border-white/10 bg-black/20 p-4 text-center"},zm={class:"mt-2 font-mono text-xl font-semibold tabular-nums text-sky-100"},Hm={class:"rounded-2xl border border-white/10 bg-black/20 p-4 text-center"},Vm={class:"mt-2 font-mono text-xl font-semibold tabular-nums text-sky-100"},Gm={class:"rounded-2xl border border-white/10 bg-black/20 p-4 text-center"},Wm={class:"mt-2 font-mono text-xl font-semibold tabular-nums text-sky-100"},Xm={class:"mt-6 space-y-3"},$m={class:"flex items-center justify-between gap-4"},qm={class:"text-sm font-semibold capitalize text-white/80"},Ym={class:"mt-1 font-mono text-xs text-sky-100"},Km={class:"mt-4 h-2 overflow-hidden rounded-full bg-white/10"},jm={class:"mt-3 grid grid-cols-2 gap-3 text-xs"},Zm={class:"mt-1 font-mono tabular-nums text-white/75"},Jm={class:"text-right"},Qm={class:"mt-1 font-mono tabular-nums text-white/75"},eg={class:"mt-6 flex gap-3"},tg=["disabled"],ng={class:"mt-6 rounded-2xl border border-white/10 bg-black/20 p-4"},ig={class:"mt-3 grid grid-cols-3 gap-3"},sg={class:"mt-1 font-mono text-sm text-lime-100"},rg={class:"mt-1 font-mono text-sm text-lime-100"},og={class:"mt-1 font-mono text-sm text-lime-100"},ag={class:"mt-3 rounded-2xl border border-white/10 bg-black/20 p-4"},lg={class:"mt-3 space-y-2"},cg={class:"capitalize text-white/55"},ug={class:"font-mono tabular-nums text-white/70"},dg={class:"font-mono tabular-nums text-white/70"},fg={key:0,class:"mt-6 flex gap-3"},hg={key:1,class:"mt-6 rounded-2xl border border-lime-300/20 bg-lime-300/6 p-5 text-center"},pg={__name:"ControllerCalibrationPanel",emits:["close"],setup(n,{emit:e}){const t=e,{setCalibration:i}=Ql(),s=je(!1),r=je(1),o=je(!1),a=je(""),l=je({roll:0,pitch:0,throttle:0,yaw:0}),c=je({roll:null,pitch:null,yaw:null}),u=je({roll:{min:null,max:null},pitch:{min:null,max:null},throttle:{min:null,max:null},yaw:{min:null,max:null}});let d=null;function f(b){return b==null?"----":Number(b).toFixed(4)}function p(){const b=navigator.getGamepads?.()??[];return Array.from(b).find(x=>x&&x.axes.length>=4)??null}function _(b,x){const D=u.value[b];D.min===null&&(D.min=x),D.max===null&&(D.max=x),D.min=Math.min(D.min,x),D.max=Math.max(D.max,x)}function v(){const b=p();if(!b){o.value=!1,a.value="",d=requestAnimationFrame(v);return}o.value=!0,a.value=b.id;const x={roll:b.axes[0]??0,pitch:b.axes[1]??0,throttle:b.axes[2]??0,yaw:b.axes[3]??0};l.value=x,r.value===2&&(_("roll",x.roll),_("pitch",x.pitch),_("throttle",x.throttle),_("yaw",x.yaw)),d=requestAnimationFrame(v)}function m(){c.value={roll:l.value.roll,pitch:l.value.pitch,yaw:l.value.yaw},h(),r.value=2}function h(){u.value={roll:{min:null,max:null},pitch:{min:null,max:null},throttle:{min:null,max:null},yaw:{min:null,max:null}}}function A(){r.value=1}function T(){r.value=3}function S(){h(),r.value=2}function I(b,x){if(b===null||x===null)return 0;const D=Math.abs(x-b);return Math.min(100,D/2*100)}function P(b,x){return b===null||x===null?!1:Math.abs(x-b)>=1.6}function R(){i({deadzone:.03,axes:{roll:{min:u.value.roll.min,center:c.value.roll,max:u.value.roll.max},pitch:{min:u.value.pitch.min,center:c.value.pitch,max:u.value.pitch.max},yaw:{min:u.value.yaw.min,center:c.value.yaw,max:u.value.yaw.max},throttle:{min:u.value.throttle.min,max:u.value.throttle.max}}}),s.value=!0}const U=()=>P(u.value.roll.min,u.value.roll.max)&&P(u.value.pitch.min,u.value.pitch.max)&&P(u.value.yaw.min,u.value.yaw.max)&&P(u.value.throttle.min,u.value.throttle.max);return Us(()=>{d=requestAnimationFrame(v)}),Ns(()=>{d!==null&&cancelAnimationFrame(d)}),(b,x)=>(we(),Fe("div",{class:"fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm",onClick:x[2]||(x[2]=Jl(D=>t("close"),["self"]))},[w("section",Im,[w("header",Um,[w("div",null,[w("div",Nm,[w("span",{class:Kt(["h-2.5 w-2.5 rounded-full",o.value?"bg-lime-300 shadow-[0_0_12px_rgba(190,242,100,.7)]":"bg-white/25"])},null,2),x[3]||(x[3]=w("p",{class:"text-sm font-semibold text-lime-100"}," Controller Calibration ",-1)),x[4]||(x[4]=w("span",{class:"rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45"}," v0.1 ",-1))]),x[5]||(x[5]=w("p",{class:"mt-1 text-xs text-white/45"}," 校正控制器中立點與操作範圍 ",-1))]),w("button",{type:"button",class:"rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-xs text-white/55 hover:bg-white/10 hover:text-white",onClick:x[0]||(x[0]=D=>t("close"))}," 關閉 ")]),w("div",Fm,[o.value?(we(),Fe(gt,{key:1},[r.value===1?(we(),Fe(gt,{key:0},[x[12]||(x[12]=w("div",{class:"text-center"},[w("p",{class:"text-xs font-semibold uppercase tracking-[0.2em] text-lime-200/60"}," STEP 1 / 3 "),w("h2",{class:"mt-3 text-2xl font-semibold text-white"}," 中立點校正 "),w("p",{class:"mx-auto mt-3 max-w-md text-sm leading-6 text-white/55"}," 完全放開右搖桿， 並讓左搖桿的 Yaw 自動回到中央。 保持控制器不動後，再記錄中立點。 ")],-1)),w("div",Bm,[w("div",km,[x[6]||(x[6]=w("p",{class:"text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40"}," Roll ",-1)),w("p",zm,xe(f(l.value.roll)),1),x[7]||(x[7]=w("p",{class:"mt-1 text-[11px] text-white/35"}," AXIS 0 ",-1))]),w("div",Hm,[x[8]||(x[8]=w("p",{class:"text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40"}," Pitch ",-1)),w("p",Vm,xe(f(l.value.pitch)),1),x[9]||(x[9]=w("p",{class:"mt-1 text-[11px] text-white/35"}," AXIS 1 ",-1))]),w("div",Gm,[x[10]||(x[10]=w("p",{class:"text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40"}," Yaw ",-1)),w("p",Wm,xe(f(l.value.yaw)),1),x[11]||(x[11]=w("p",{class:"mt-1 text-[11px] text-white/35"}," AXIS 3 ",-1))])]),x[13]||(x[13]=w("div",{class:"mt-5 rounded-2xl border border-sky-300/15 bg-sky-300/4.5 p-4 text-sm leading-6 text-sky-50/65"},[Ct(" 這裡顯示的是控制器原始數值。 中立位置不一定剛好是 "),w("span",{class:"font-mono text-sky-100"}," 0.0000 "),Ct("。 ")],-1)),w("button",{type:"button",class:"mt-6 w-full rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-200",onClick:m}," 記錄中立點 ")],64)):r.value===2?(we(),Fe(gt,{key:1},[x[16]||(x[16]=cr('<div class="text-center"><p class="text-xs font-semibold uppercase tracking-[0.2em] text-lime-200/60"> STEP 2 / 3 </p><h2 class="mt-3 text-2xl font-semibold text-white"> 操作範圍校正 </h2><p class="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/55"> 將左右兩支搖桿完整推到所有方向的極限。 系統會持續記錄每個軸曾經到過的最小值與最大值。 </p></div><div class="mt-5 rounded-2xl border border-lime-300/15 bg-lime-300/4 p-4 text-sm leading-6 text-lime-50/70"> 建議將右搖桿沿著外圈完整繞一圈， 再把左搖桿的 Yaw 左右推到底， Throttle 則從最低推到最高一次。 </div>',2)),w("div",Xm,[(we(),Fe(gt,null,qi(["roll","pitch","yaw","throttle"],D=>w("article",{key:D,class:"rounded-2xl border border-white/10 bg-black/20 p-4"},[w("div",$m,[w("div",null,[w("p",qm,xe(D),1),w("p",Ym," RAW "+xe(f(l.value[D])),1)]),w("span",{class:Kt(["rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]",P(u.value[D].min,u.value[D].max)?"bg-lime-300/15 text-lime-200":"bg-white/5 text-white/35"])},xe(P(u.value[D].min,u.value[D].max)?"READY":"MOVE"),3)]),w("div",Km,[w("div",{class:"h-full rounded-full bg-lime-300/70 transition-[width] duration-100",style:kt({width:`${I(u.value[D].min,u.value[D].max)}%`})},null,4)]),w("div",jm,[w("div",null,[x[14]||(x[14]=w("p",{class:"text-white/35"}," MIN ",-1)),w("p",Zm,xe(f(u.value[D].min)),1)]),w("div",Jm,[x[15]||(x[15]=w("p",{class:"text-white/35"}," MAX ",-1)),w("p",Qm,xe(f(u.value[D].max)),1)])])])),64))]),w("div",eg,[w("button",{type:"button",class:"flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/65 hover:bg-white/10",onClick:A}," 上一步 "),w("button",{type:"button",class:Kt(["flex-2 rounded-2xl px-5 py-3 text-sm font-semibold transition",U()?"bg-lime-300 text-slate-950 hover:bg-lime-200":"cursor-not-allowed bg-white/5 text-white/25"]),disabled:!U(),onClick:T}," 完成範圍校正 ",10,tg)])],64)):r.value===3?(we(),Fe(gt,{key:2},[x[25]||(x[25]=cr('<div class="text-center"><p class="text-xs font-semibold uppercase tracking-[0.2em] text-lime-200/60"> STEP 3 / 3 </p><div class="mx-auto mt-4 grid h-14 w-14 place-items-center rounded-full bg-lime-300/15 text-2xl text-lime-200"> ✓ </div><h2 class="mt-4 text-2xl font-semibold text-white"> 確認校正結果 </h2><p class="mx-auto mt-3 max-w-md text-sm leading-6 text-white/55"> 請確認中立點與操作範圍是否正常。 儲存後，系統會將這組資料套用到飛行控制。 </p></div>',1)),w("div",ng,[x[20]||(x[20]=w("p",{class:"text-xs font-semibold uppercase tracking-[0.18em] text-white/40"}," Center ",-1)),w("div",ig,[w("div",null,[x[17]||(x[17]=w("p",{class:"text-xs text-white/35"}," Roll ",-1)),w("p",sg,xe(f(c.value.roll)),1)]),w("div",null,[x[18]||(x[18]=w("p",{class:"text-xs text-white/35"}," Pitch ",-1)),w("p",rg,xe(f(c.value.pitch)),1)]),w("div",null,[x[19]||(x[19]=w("p",{class:"text-xs text-white/35"}," Yaw ",-1)),w("p",og,xe(f(c.value.yaw)),1)])])]),w("div",ag,[x[21]||(x[21]=w("p",{class:"text-xs font-semibold uppercase tracking-[0.18em] text-white/40"}," Range ",-1)),w("div",lg,[(we(),Fe(gt,null,qi(["roll","pitch","yaw","throttle"],D=>w("div",{key:D,class:"grid grid-cols-[1fr_auto_auto] items-center gap-4 text-xs"},[w("p",cg,xe(D),1),w("p",ug,xe(f(u.value[D].min)),1),w("p",dg,xe(f(u.value[D].max)),1)])),64))])]),s.value?(we(),Fe("div",hg,[x[22]||(x[22]=w("div",{class:"mx-auto grid h-12 w-12 place-items-center rounded-full bg-lime-300/15 text-xl text-lime-200"}," ✓ ",-1)),x[23]||(x[23]=w("p",{class:"mt-3 font-semibold text-lime-100"}," 控制器校正完成 ",-1)),x[24]||(x[24]=w("p",{class:"mt-2 text-sm leading-6 text-white/50"}," 校正資料已儲存，之後的飛行控制會自動使用這組設定。 ",-1)),w("button",{type:"button",class:"mt-5 w-full rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-lime-200",onClick:x[1]||(x[1]=D=>t("close"))}," 完成 ")])):(we(),Fe("div",fg,[w("button",{type:"button",class:"flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/65 hover:bg-white/10",onClick:S}," 重新測量 "),w("button",{type:"button",class:"flex-2 rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-200",onClick:R}," 儲存校正 ")]))],64)):Rt("",!0)],64)):(we(),Fe("div",Om," 尚未偵測到控制器。 請插上 LiteRadio 2 SIM， 並輕微移動搖桿， 讓瀏覽器取得 Gamepad 資料。 "))])])]))}};const ec="178",mg=0,Zc=1,gg=2,Sf=1,bf=2,jn=3,bi=0,en=1,Qt=2,vi=0,bs=1,Jc=2,Qc=3,eu=4,_g=5,Oi=100,xg=101,vg=102,Mg=103,Sg=104,bg=200,yg=201,Eg=202,wg=203,qa=204,Ya=205,Tg=206,Ag=207,Rg=208,Cg=209,Pg=210,Dg=211,Lg=212,Ig=213,Ug=214,Ka=0,ja=1,Za=2,As=3,Ja=4,Qa=5,el=6,tl=7,yf=0,Ng=1,Fg=2,Mi=0,Og=1,Bg=2,kg=3,zg=4,Hg=5,Vg=6,Gg=7,Ef=300,Rs=301,Cs=302,nl=303,il=304,Fo=306,sl=1e3,zi=1001,rl=1002,wn=1003,Wg=1004,Pr=1005,Fn=1006,ea=1007,Hi=1008,zn=1009,wf=1010,Tf=1011,fr=1012,tc=1013,Yi=1014,ti=1015,Mr=1016,nc=1017,ic=1018,hr=1020,Af=35902,Rf=1021,Cf=1022,bn=1023,pr=1026,mr=1027,Pf=1028,sc=1029,Df=1030,rc=1031,oc=1033,ro=33776,oo=33777,ao=33778,lo=33779,ol=35840,al=35841,ll=35842,cl=35843,ul=36196,dl=37492,fl=37496,hl=37808,pl=37809,ml=37810,gl=37811,_l=37812,xl=37813,vl=37814,Ml=37815,Sl=37816,bl=37817,yl=37818,El=37819,wl=37820,Tl=37821,co=36492,Al=36494,Rl=36495,Lf=36283,Cl=36284,Pl=36285,Dl=36286,Xg=3200,$g=3201,If=0,qg=1,_i="",an="srgb",Ps="srgb-linear",Mo="linear",dt="srgb",Qi=7680,tu=519,Yg=512,Kg=513,jg=514,Uf=515,Zg=516,Jg=517,Qg=518,e_=519,nu=35044,iu="300 es",ni=2e3,So=2001;class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let su=1234567;const ir=Math.PI/180,gr=180/Math.PI;function Os(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function ac(n,e){return(n%e+e)%e}function t_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function n_(n,e,t){return n!==e?(t-n)/(e-n):0}function sr(n,e,t){return(1-t)*n+t*e}function i_(n,e,t,i){return sr(n,e,1-Math.exp(-t*i))}function s_(n,e=1){return e-Math.abs(ac(n,e*2)-e)}function r_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function o_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function a_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function l_(n,e){return n+Math.random()*(e-n)}function c_(n){return n*(.5-Math.random())}function u_(n){n!==void 0&&(su=n);let e=su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function d_(n){return n*ir}function f_(n){return n*gr}function h_(n){return(n&n-1)===0&&n!==0}function p_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function m_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function g_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ms(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const lt={DEG2RAD:ir,RAD2DEG:gr,generateUUID:Os,clamp:et,euclideanModulo:ac,mapLinear:t_,inverseLerp:n_,lerp:sr,damp:i_,pingpong:s_,smoothstep:r_,smootherstep:o_,randInt:a_,randFloat:l_,randFloatSpread:c_,seededRandom:u_,degToRad:d_,radToDeg:f_,isPowerOfTwo:h_,ceilPowerOfTwo:p_,floorPowerOfTwo:m_,setQuaternionFromProperEuler:g_,normalize:Xt,denormalize:ms};class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Sr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(d!==v||l!==f||c!==p||u!==_){let m=1-a;const h=l*f+c*p+u*_+d*v,A=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const I=Math.sqrt(T),P=Math.atan2(I,h*A);m=Math.sin(m*P)/I,a=Math.sin(a*P)/I}const S=a*A;if(l=l*m+f*S,c=c*m+p*S,u=u*m+_*S,d=d*m+v*S,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=I,c*=I,u*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*d+l*p-c*f,e[t+1]=l*_+u*f+c*d-a*p,e[t+2]=c*_+u*p+a*f-l*d,e[t+3]=u*_-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new B,ru=new Sr;class qe{constructor(e,t,i,s,r,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],_=i[8],v=s[0],m=s[3],h=s[6],A=s[1],T=s[4],S=s[7],I=s[2],P=s[5],R=s[8];return r[0]=o*v+a*A+l*I,r[3]=o*m+a*T+l*P,r[6]=o*h+a*S+l*R,r[1]=c*v+u*A+d*I,r[4]=c*m+u*T+d*P,r[7]=c*h+u*S+d*R,r[2]=f*v+p*A+_*I,r[5]=f*m+p*T+_*P,r[8]=f*h+p*S+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,p=c*r-o*l,_=t*d+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(na.makeScale(e,t)),this}rotate(e){return this.premultiply(na.makeRotation(-e)),this}translate(e,t){return this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const na=new qe;function Nf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function __(){const n=bo("canvas");return n.style.display="block",n}const ou={};function ys(n){n in ou||(ou[n]=!0,console.warn(n))}function x_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function v_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function M_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const au=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lu=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function S_(){const n={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?Mo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ps]:{primaries:e,whitePoint:i,transfer:Mo,toXYZ:au,fromXYZ:lu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:au,fromXYZ:lu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),n}const st=S_();function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Es(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let es;class b_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{es===void 0&&(es=bo("canvas")),es.width=e.width,es.height=e.height;const s=es.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=es}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(si(t[i]/255)*255):t[i]=si(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let y_=0;class lc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=Os(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ia(s[o].image)):r.push(ia(s[o]))}else r=ia(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ia(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?b_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let E_=0;const sa=new B;class tn extends Fs{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,i=zi,s=zi,r=Fn,o=Hi,a=bn,l=zn,c=tn.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Os(),this.name="",this.source=new lc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sa).x}get height(){return this.source.getSize(sa).y}get depth(){return this.source.getSize(sa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ef)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sl:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sl:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Ef;tn.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,s=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,S=(p+1)/2,I=(h+1)/2,P=(u+f)/4,R=(d+v)/4,U=(_+m)/4;return T>S&&T>I?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=P/i,r=R/i):S>I?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=P/s,r=U/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=R/r,s=U/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(d-v)/A,this.z=(f-u)/A,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w_ extends Fs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new tn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new lc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends w_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ff extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class T_ extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dr.copy(i.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Lr.subVectors(this.max,Gs),ts.subVectors(e.a,Gs),ns.subVectors(e.b,Gs),is.subVectors(e.c,Gs),ui.subVectors(ns,ts),di.subVectors(is,ns),Ri.subVectors(ts,is);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ri.z,Ri.y,ui.z,0,-ui.x,di.z,0,-di.x,Ri.z,0,-Ri.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ri.y,Ri.x,0];return!ra(t,ts,ns,is,Lr)||(t=[1,0,0,0,1,0,0,0,1],!ra(t,ts,ns,is,Lr))?!1:(Ir.crossVectors(ui,di),t=[Ir.x,Ir.y,Ir.z],ra(t,ts,ns,is,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xn=[new B,new B,new B,new B,new B,new B,new B,new B],gn=new B,Dr=new br,ts=new B,ns=new B,is=new B,ui=new B,di=new B,Ri=new B,Gs=new B,Lr=new B,Ir=new B,Ci=new B;function ra(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ci.fromArray(n,r);const a=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),u=i.dot(Ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const A_=new br,Ws=new B,oa=new B;class Oo{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):A_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const t=Ws.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ws,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(oa)),this.expandByPoint(Ws.copy(e.center).sub(oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const $n=new B,aa=new B,Ur=new B,fi=new B,la=new B,Nr=new B,ca=new B;class Of{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){aa.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(aa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ur),a=fi.dot(this.direction),l=-fi.dot(Ur),c=fi.lengthSq(),u=Math.abs(1-o*o);let d,f,p,_;if(u>0)if(d=o*l-a,f=o*a-l,_=r*u,d>=0)if(f>=-_)if(f<=_){const v=1/u;d*=v,f*=v,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(aa).addScaledVector(Ur,f),p}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const i=$n.dot(this.direction),s=$n.dot($n)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,i,s,r){la.subVectors(t,e),Nr.subVectors(i,e),ca.crossVectors(la,Nr);let o=this.direction.dot(ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,e);const l=a*this.direction.dot(Nr.crossVectors(fi,Nr));if(l<0)return null;const c=a*this.direction.dot(la.cross(fi));if(c<0||l+c>o)return null;const u=-a*fi.dot(ca);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,s,r,o,a,l,c,u,d,f,p,_,v,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,f,p,_,v,m)}set(e,t,i,s,r,o,a,l,c,u,d,f,p,_,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ss.setFromMatrixColumn(e,0).length(),r=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*d,_=a*u,v=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,_=c*u,v=c*d;t[0]=f+v*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,_=c*u,v=c*d;t[0]=f-v*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,_=a*u,v=a*d;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+_,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+v,t[5]=o*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R_,e,C_)}lookAt(e,t,i){const s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),hi.crossVectors(i,rn),hi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),hi.crossVectors(i,rn)),hi.normalize(),Fr.crossVectors(rn,hi),s[0]=hi.x,s[4]=Fr.x,s[8]=rn.x,s[1]=hi.y,s[5]=Fr.y,s[9]=rn.y,s[2]=hi.z,s[6]=Fr.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],_=i[2],v=i[6],m=i[10],h=i[14],A=i[3],T=i[7],S=i[11],I=i[15],P=s[0],R=s[4],U=s[8],b=s[12],x=s[1],D=s[5],X=s[9],z=s[13],ee=s[2],ne=s[6],$=s[10],te=s[14],H=s[3],fe=s[7],be=s[11],Re=s[15];return r[0]=o*P+a*x+l*ee+c*H,r[4]=o*R+a*D+l*ne+c*fe,r[8]=o*U+a*X+l*$+c*be,r[12]=o*b+a*z+l*te+c*Re,r[1]=u*P+d*x+f*ee+p*H,r[5]=u*R+d*D+f*ne+p*fe,r[9]=u*U+d*X+f*$+p*be,r[13]=u*b+d*z+f*te+p*Re,r[2]=_*P+v*x+m*ee+h*H,r[6]=_*R+v*D+m*ne+h*fe,r[10]=_*U+v*X+m*$+h*be,r[14]=_*b+v*z+m*te+h*Re,r[3]=A*P+T*x+S*ee+I*H,r[7]=A*R+T*D+S*ne+I*fe,r[11]=A*U+T*X+S*$+I*be,r[15]=A*b+T*z+S*te+I*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],v=e[7],m=e[11],h=e[15];return _*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*p-i*l*p)+v*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+t*c*d-t*a*p-r*o*d+i*o*p+r*a*u-i*c*u)+h*(-s*a*u-t*l*d+t*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],v=e[13],m=e[14],h=e[15],A=d*m*c-v*f*c+v*l*p-a*m*p-d*l*h+a*f*h,T=_*f*c-u*m*c-_*l*p+o*m*p+u*l*h-o*f*h,S=u*v*c-_*d*c+_*a*p-o*v*p-u*a*h+o*d*h,I=_*d*l-u*v*l-_*a*f+o*v*f+u*a*m-o*d*m,P=t*A+i*T+s*S+r*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=A*R,e[1]=(v*f*r-d*m*r-v*s*p+i*m*p+d*s*h-i*f*h)*R,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*h+i*l*h)*R,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*p-i*l*p)*R,e[4]=T*R,e[5]=(u*m*r-_*f*r+_*s*p-t*m*p-u*s*h+t*f*h)*R,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*h-t*l*h)*R,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*R,e[8]=S*R,e[9]=(_*d*r-u*v*r-_*i*p+t*v*p+u*i*h-t*d*h)*R,e[10]=(o*v*r-_*a*r+_*i*c-t*v*c-o*i*h+t*a*h)*R,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*p-t*a*p)*R,e[12]=I*R,e[13]=(u*v*s-_*d*s+_*i*f-t*v*f-u*i*m+t*d*m)*R,e[14]=(_*a*s-o*v*s-_*i*l+t*v*l+o*i*m-t*a*m)*R,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,p=r*u,_=r*d,v=o*u,m=o*d,h=a*d,A=l*c,T=l*u,S=l*d,I=i.x,P=i.y,R=i.z;return s[0]=(1-(v+h))*I,s[1]=(p+S)*I,s[2]=(_-T)*I,s[3]=0,s[4]=(p-S)*P,s[5]=(1-(f+h))*P,s[6]=(m+A)*P,s[7]=0,s[8]=(_+T)*R,s[9]=(m-A)*R,s[10]=(1-(f+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ss.set(s[0],s[1],s[2]).length();const o=ss.set(s[4],s[5],s[6]).length(),a=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],_n.copy(this);const c=1/r,u=1/o,d=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,t.setFromRotationMatrix(_n),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ni){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let p,_;if(a===ni)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===So)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ni){const l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(o-r),f=(t+e)*c,p=(i+s)*u;let _,v;if(a===ni)_=(o+r)*d,v=-2*d;else if(a===So)_=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ss=new B,_n=new yt,R_=new B(0,0,0),C_=new B(1,1,1),hi=new B,Fr=new B,rn=new B,cu=new yt,uu=new Sr;class Hn{constructor(e=0,t=0,i=0,s=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uu.setFromEuler(this),this.setFromQuaternion(uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Bf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P_=0;const du=new B,rs=new Sr,qn=new yt,Or=new B,Xs=new B,D_=new B,L_=new Sr,fu=new B(1,0,0),hu=new B(0,1,0),pu=new B(0,0,1),mu={type:"added"},I_={type:"removed"},os={type:"childadded",child:null},ua={type:"childremoved",child:null};class Pt extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new B,t=new Hn,i=new Sr,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new qe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(fu,e)}rotateY(e){return this.rotateOnAxis(hu,e)}rotateZ(e){return this.rotateOnAxis(pu,e)}translateOnAxis(e,t){return du.copy(e).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fu,e)}translateY(e){return this.translateOnAxis(hu,e)}translateZ(e){return this.translateOnAxis(pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Or.copy(e):Or.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Xs,Or,this.up):qn.lookAt(Or,Xs,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(qn),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mu),os.child=e,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I_),ua.child=e,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mu),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,D_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,L_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Pt.DEFAULT_UP=new B(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new B,Yn=new B,da=new B,Kn=new B,as=new B,ls=new B,gu=new B,fa=new B,ha=new B,pa=new B,ma=new wt,ga=new wt,_a=new wt;class Sn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),xn.subVectors(e,t),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){xn.subVectors(s,t),Yn.subVectors(i,t),da.subVectors(e,t);const o=xn.dot(xn),a=xn.dot(Yn),l=xn.dot(da),c=Yn.dot(Yn),u=Yn.dot(da),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ma.setScalar(0),ga.setScalar(0),_a.setScalar(0),ma.fromBufferAttribute(e,t),ga.fromBufferAttribute(e,i),_a.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ma,r.x),o.addScaledVector(ga,r.y),o.addScaledVector(_a,r.z),o}static isFrontFacing(e,t,i,s){return xn.subVectors(i,t),Yn.subVectors(e,t),xn.cross(Yn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),xn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Sn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;as.subVectors(s,i),ls.subVectors(r,i),fa.subVectors(e,i);const l=as.dot(fa),c=ls.dot(fa);if(l<=0&&c<=0)return t.copy(i);ha.subVectors(e,s);const u=as.dot(ha),d=ls.dot(ha);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(as,o);pa.subVectors(e,r);const p=as.dot(pa),_=ls.dot(pa);if(_>=0&&p<=_)return t.copy(r);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(ls,a);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return gu.subVectors(r,s),a=(d-u)/(d-u+(p-_)),t.copy(s).addScaledVector(gu,a);const h=1/(m+v+f);return o=v*h,a=f*h,t.copy(i).addScaledVector(as,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Br={h:0,s:0,l:0};function xa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=ac(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=xa(o,r,e+1/3),this.g=xa(o,r,e),this.b=xa(o,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=an){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const i=kf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return st.workingToColorSpace(Bt.copy(this),e),Math.round(et(Bt.r*255,0,255))*65536+Math.round(et(Bt.g*255,0,255))*256+Math.round(et(Bt.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Bt.copy(this),t);const i=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=an){st.workingToColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,s=Bt.b;return e!==an?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Br);const i=sr(pi.h,Br.h,t),s=sr(pi.s,Br.s,t),r=sr(pi.l,Br.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ze;Ze.NAMES=kf;let U_=0;class Bs extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=bs,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ya,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ya&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vn extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new B,kr=new tt;let N_=0;class Bn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:N_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nu,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ms(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ms(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ms(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ms(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ms(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nu&&(e.usage=this.usage),e}}class zf extends Bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Hf extends Bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class St extends Bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let F_=0;const dn=new yt,va=new Pt,cs=new B,on=new br,$s=new br,It=new B;class jt extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nf(e)?Hf:zf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new St(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];on.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(on.min,$s.min),on.expandByPoint(It),It.addVectors(on.max,$s.max),on.expandByPoint(It)):(on.expandByPoint($s.min),on.expandByPoint($s.max))}on.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(e,c),It.add(cs)),s=Math.max(s,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new B,l[U]=new B;const c=new B,u=new B,d=new B,f=new tt,p=new tt,_=new tt,v=new B,m=new B;function h(U,b,x){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,x),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,b),_.fromBufferAttribute(r,x),u.sub(c),d.sub(c),p.sub(f),_.sub(f);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(D),a[U].add(v),a[b].add(v),a[x].add(v),l[U].add(m),l[b].add(m),l[x].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,b=A.length;U<b;++U){const x=A[U],D=x.start,X=x.count;for(let z=D,ee=D+X;z<ee;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const T=new B,S=new B,I=new B,P=new B;function R(U){I.fromBufferAttribute(s,U),P.copy(I);const b=a[U];T.copy(b),T.sub(I.multiplyScalar(I.dot(b))).normalize(),S.crossVectors(P,b);const D=S.dot(l[U])<0?-1:1;o.setXYZW(U,T.x,T.y,T.z,D)}for(let U=0,b=A.length;U<b;++U){const x=A[U],D=x.start,X=x.count;for(let z=D,ee=D+X;z<ee;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,d=new B;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new Bn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _u=new yt,Pi=new Of,zr=new Oo,xu=new B,Hr=new B,Vr=new B,Gr=new B,Ma=new B,Wr=new B,vu=new B,Xr=new B;class Ut extends Pt{constructor(e=new jt,t=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Ma.fromBufferAttribute(d,e),o?Wr.addScaledVector(Ma,u):Wr.addScaledVector(Ma.sub(t),u))}t.add(Wr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!(zr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(zr,xu)===null||Pi.origin.distanceToSquared(xu)>(e.far-e.near)**2))&&(_u.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(_u),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],h=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,I=T;S<I;S+=3){const P=a.getX(S),R=a.getX(S+1),U=a.getX(S+2);s=$r(this,h,e,i,c,u,d,P,R,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const A=a.getX(m),T=a.getX(m+1),S=a.getX(m+2);s=$r(this,o,e,i,c,u,d,A,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],h=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,I=T;S<I;S+=3){const P=S,R=S+1,U=S+2;s=$r(this,h,e,i,c,u,d,P,R,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const A=m,T=m+1,S=m+2;s=$r(this,o,e,i,c,u,d,A,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function O_(n,e,t,i,s,r,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===bi,a),l===null)return null;Xr.copy(a),Xr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Xr);return c<t.near||c>t.far?null:{distance:c,point:Xr.clone(),object:n}}function $r(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Hr),n.getVertexPosition(l,Vr),n.getVertexPosition(c,Gr);const u=O_(n,e,t,i,Hr,Vr,Gr,vu);if(u){const d=new B;Sn.getBarycoord(vu,Hr,Vr,Gr,d),s&&(u.uv=Sn.getInterpolatedAttribute(s,a,l,c,d,new tt)),r&&(u.uv1=Sn.getInterpolatedAttribute(r,a,l,c,d,new tt)),o&&(u.normal=Sn.getInterpolatedAttribute(o,a,l,c,d,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new B,materialIndex:0};Sn.getNormal(Hr,Vr,Gr,f.normal),u.face=f,u.barycoord=d}return u}class ii extends jt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(d,2));function _(v,m,h,A,T,S,I,P,R,U,b){const x=S/R,D=I/U,X=S/2,z=I/2,ee=P/2,ne=R+1,$=U+1;let te=0,H=0;const fe=new B;for(let be=0;be<$;be++){const Re=be*D-z;for(let He=0;He<ne;He++){const nt=He*x-X;fe[v]=nt*A,fe[m]=Re*T,fe[h]=ee,c.push(fe.x,fe.y,fe.z),fe[v]=0,fe[m]=0,fe[h]=P>0?1:-1,u.push(fe.x,fe.y,fe.z),d.push(He/R),d.push(1-be/U),te+=1}}for(let be=0;be<U;be++)for(let Re=0;Re<R;Re++){const He=f+Re+ne*be,nt=f+Re+ne*(be+1),se=f+(Re+1)+ne*(be+1),he=f+(Re+1)+ne*be;l.push(He,nt,he),l.push(nt,se,he),H+=6}a.addGroup(p,H,b),p+=H,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=Ds(n[t]);for(const s in i)e[s]=i[s]}return e}function B_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const k_={clone:Ds,merge:$t};var z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z_,this.fragmentShader=H_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=B_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Gf extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new B,Mu=new tt,Su=new tt;class fn extends Gf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,Mu,Su),t.subVectors(Su,Mu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,ds=1;class V_ extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(us,ds,e,t);s.layers=this.layers,this.add(s);const r=new fn(us,ds,e,t);r.layers=this.layers,this.add(r);const o=new fn(us,ds,e,t);o.layers=this.layers,this.add(o);const a=new fn(us,ds,e,t);a.layers=this.layers,this.add(a);const l=new fn(us,ds,e,t);l.layers=this.layers,this.add(l);const c=new fn(us,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===So)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Wf extends tn{constructor(e=[],t=Rs,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class G_ extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Wf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ii(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:vi});r.uniforms.tEquirect.value=t;const o=new Ut(s,r),a=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Fn),new V_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Vi extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W_={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(W_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Vi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class cc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=t,this.far=i}clone(){return new cc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class X_ extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ba=new B,$_=new B,q_=new qe;class Ni{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ba.subVectors(i,t).cross($_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ba),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||q_.getNormalMatrix(e),s=this.coplanarPoint(ba).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Oo,Y_=new tt(.5,.5),qr=new B;class uc{constructor(e=new Ni,t=new Ni,i=new Ni,s=new Ni,r=new Ni,o=new Ni){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],p=s[8],_=s[9],v=s[10],m=s[11],h=s[12],A=s[13],T=s[14],S=s[15];if(i[0].setComponents(l-r,f-c,m-p,S-h).normalize(),i[1].setComponents(l+r,f+c,m+p,S+h).normalize(),i[2].setComponents(l+o,f+u,m+_,S+A).normalize(),i[3].setComponents(l-o,f-u,m-_,S-A).normalize(),i[4].setComponents(l-a,f-d,m-v,S-T).normalize(),t===ni)i[5].setComponents(l+a,f+d,m+v,S+T).normalize();else if(t===So)i[5].setComponents(a,d,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){Di.center.set(0,0,0);const t=Y_.distanceTo(e.center);return Di.radius=.7071067811865476+t,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(qr.x=s.normal.x>0?e.max.x:e.min.x,qr.y=s.normal.y>0?e.max.y:e.min.y,qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bo extends Bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yo=new B,Eo=new B,bu=new yt,qs=new Of,Yr=new Oo,ya=new B,yu=new B;class dc extends Pt{constructor(e=new jt,t=new Bo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)yo.fromBufferAttribute(t,s-1),Eo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=yo.distanceTo(Eo);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,e.ray.intersectsSphere(Yr)===!1)return;bu.copy(s).invert(),qs.copy(e.ray).applyMatrix4(bu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){const h=u.getX(v),A=u.getX(v+1),T=Kr(this,e,qs,l,h,A,v);T&&t.push(T)}if(this.isLineLoop){const v=u.getX(_-1),m=u.getX(p),h=Kr(this,e,qs,l,v,m,_-1);h&&t.push(h)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){const h=Kr(this,e,qs,l,v,v+1,v);h&&t.push(h)}if(this.isLineLoop){const v=Kr(this,e,qs,l,_-1,p,_-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Kr(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(yo.fromBufferAttribute(a,s),Eo.fromBufferAttribute(a,r),t.distanceSqToSegment(yo,Eo,ya,yu)>i)return;ya.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ya);if(!(c<e.near||c>e.far))return{distance:c,point:yu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Eu=new B,wu=new B;class K_ extends dc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Eu.fromBufferAttribute(t,s),wu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Eu.distanceTo(wu);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xf extends tn{constructor(e,t,i=Yi,s,r,o,a=wn,l=wn,c,u=pr,d=1){if(u!==pr&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ko extends jt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new B,u=new tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(a,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class $i extends jt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],p=[];let _=0;const v=[],m=i/2;let h=0;A(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new St(d,3)),this.setAttribute("normal",new St(f,3)),this.setAttribute("uv",new St(p,2));function A(){const S=new B,I=new B;let P=0;const R=(t-e)/i;for(let U=0;U<=r;U++){const b=[],x=U/r,D=x*(t-e)+e;for(let X=0;X<=s;X++){const z=X/s,ee=z*l+a,ne=Math.sin(ee),$=Math.cos(ee);I.x=D*ne,I.y=-x*i+m,I.z=D*$,d.push(I.x,I.y,I.z),S.set(ne,R,$).normalize(),f.push(S.x,S.y,S.z),p.push(z,1-x),b.push(_++)}v.push(b)}for(let U=0;U<s;U++)for(let b=0;b<r;b++){const x=v[b][U],D=v[b+1][U],X=v[b+1][U+1],z=v[b][U+1];(e>0||b!==0)&&(u.push(x,D,z),P+=3),(t>0||b!==r-1)&&(u.push(D,X,z),P+=3)}c.addGroup(h,P,0),h+=P}function T(S){const I=_,P=new tt,R=new B;let U=0;const b=S===!0?e:t,x=S===!0?1:-1;for(let X=1;X<=s;X++)d.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),_++;const D=_;for(let X=0;X<=s;X++){const ee=X/s*l+a,ne=Math.cos(ee),$=Math.sin(ee);R.x=b*$,R.y=m*x,R.z=b*ne,d.push(R.x,R.y,R.z),f.push(0,x,0),P.x=ne*.5+.5,P.y=$*.5*x+.5,p.push(P.x,P.y),_++}for(let X=0;X<s;X++){const z=I+X,ee=D+X;S===!0?u.push(ee,ee+1,z):u.push(ee+1,ee,z),U+=3}c.addGroup(h,U,S===!0?1:2),h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zo extends $i{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new zo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yr extends jt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,p=[],_=[],v=[],m=[];for(let h=0;h<u;h++){const A=h*f-o;for(let T=0;T<c;T++){const S=T*d-r;_.push(S,-A,0),v.push(0,0,1),m.push(T/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<a;A++){const T=A+c*h,S=A+c*(h+1),I=A+1+c*(h+1),P=A+1+c*h;p.push(T,S,P),p.push(S,I,P)}this.setIndex(p),this.setAttribute("position",new St(_,3)),this.setAttribute("normal",new St(v,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Er extends jt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let d=e;const f=(t-e)/s,p=new B,_=new tt;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const h=r+m/i*o;p.x=d*Math.cos(h),p.y=d*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,u.push(_.x,_.y)}d+=f}for(let v=0;v<s;v++){const m=v*(i+1);for(let h=0;h<i;h++){const A=h+m,T=A,S=A+i+1,I=A+i+2,P=A+1;a.push(T,S,P),a.push(S,I,P)}}this.setIndex(a),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wo extends jt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new B,f=new B,p=[],_=[],v=[],m=[];for(let h=0;h<=i;h++){const A=[],T=h/i;let S=0;h===0&&o===0?S=.5/t:h===i&&l===Math.PI&&(S=-.5/t);for(let I=0;I<=t;I++){const P=I/t;d.x=-e*Math.cos(s+P*r)*Math.sin(o+T*a),d.y=e*Math.cos(o+T*a),d.z=e*Math.sin(s+P*r)*Math.sin(o+T*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(P+S,1-T),A.push(c++)}u.push(A)}for(let h=0;h<i;h++)for(let A=0;A<t;A++){const T=u[h][A+1],S=u[h][A],I=u[h+1][A],P=u[h+1][A+1];(h!==0||o>0)&&p.push(T,S,P),(h!==i-1||l<Math.PI)&&p.push(S,I,P)}this.setIndex(p),this.setAttribute("position",new St(_,3)),this.setAttribute("normal",new St(v,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bi extends Bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=If,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class j_ extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Z_ extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $f extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class J_ extends $f{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ea=new yt,Tu=new B,Au=new B;class Q_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uc,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tu),Au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Au),t.updateMatrixWorld(),Ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qf extends Gf{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class e0 extends Q_{constructor(){super(new qf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class t0 extends $f{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new e0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class n0 extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class i0 extends K_{constructor(e=10,t=10,i=4473924,s=8947848){i=new Ze(i),s=new Ze(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,p=0,_=-a;f<=t;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const v=f===r?i:s;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const u=new jt;u.setAttribute("position",new St(l,3)),u.setAttribute("color",new St(c,3));const d=new Bo({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Ru=new B;let jr,wa;class s0 extends Pt{constructor(e=new B(0,0,1),t=new B(0,0,0),i=1,s=16776960,r=i*.2,o=r*.2){super(),this.type="ArrowHelper",jr===void 0&&(jr=new jt,jr.setAttribute("position",new St([0,0,0,0,1,0],3)),wa=new zo(.5,1,5,1),wa.translate(0,-.5,0)),this.position.copy(t),this.line=new dc(jr,new Bo({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ut(wa,new Vn({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Ru.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Ru,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}function Cu(n,e,t,i){const s=r0(i);switch(t){case Rf:return n*e;case Pf:return n*e/s.components*s.byteLength;case sc:return n*e/s.components*s.byteLength;case Df:return n*e*2/s.components*s.byteLength;case rc:return n*e*2/s.components*s.byteLength;case Cf:return n*e*3/s.components*s.byteLength;case bn:return n*e*4/s.components*s.byteLength;case oc:return n*e*4/s.components*s.byteLength;case ro:case oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ao:case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case al:case cl:return Math.max(n,16)*Math.max(e,8)/4;case ol:case ll:return Math.max(n,8)*Math.max(e,8)/2;case ul:case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ml:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case gl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case yl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case El:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case co:case Al:case Rl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Lf:case Cl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Pl:case Dl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function r0(n){switch(n){case zn:case wf:return{byteLength:1,components:1};case fr:case Tf:case Mr:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case Yi:case tc:case ti:return{byteLength:4,components:1};case Af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);function Yf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function o0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],v=d[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const v=d[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var a0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l0=`#ifdef USE_ALPHAHASH
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
#endif`,c0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h0=`#ifdef USE_AOMAP
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
#endif`,p0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m0=`#ifdef USE_BATCHING
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
#endif`,g0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,M0=`#ifdef USE_IRIDESCENCE
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
#endif`,S0=`#ifdef USE_BUMPMAP
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
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,P0=`#define PI 3.141592653589793
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
} // validated`,D0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,L0=`vec3 transformedNormal = objectNormal;
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
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O0="gl_FragColor = linearToOutputTexel( gl_FragColor );",B0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y0=`#ifdef USE_GRADIENTMAP
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
}`,K0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J0=`uniform bool receiveShadow;
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
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,ex=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sx=`PhysicalMaterial material;
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
#endif`,rx=`struct PhysicalMaterial {
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
}`,ox=`
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
#endif`,ax=`#if defined( RE_IndirectDiffuse )
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
#endif`,lx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ux=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gx=`#if defined( USE_POINTS_UV )
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
#endif`,_x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bx=`#ifdef USE_MORPHTARGETS
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
#endif`,yx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cx=`#ifdef USE_NORMALMAP
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
#endif`,Px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xx=`float getShadowMask() {
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
}`,$x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qx=`#ifdef USE_SKINNING
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
#endif`,Yx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kx=`#ifdef USE_SKINNING
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
#endif`,jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
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
#endif`,tv=`#ifdef USE_TRANSMISSION
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
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,av=`uniform sampler2D t2D;
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
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`#include <common>
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
}`,hv=`#if DEPTH_PACKING == 3200
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
}`,pv=`#define DISTANCE
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
}`,mv=`#define DISTANCE
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`uniform float scale;
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
}`,vv=`uniform vec3 diffuse;
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
}`,Mv=`#include <common>
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
}`,Sv=`uniform vec3 diffuse;
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
}`,bv=`#define LAMBERT
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
}`,yv=`#define LAMBERT
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
}`,Ev=`#define MATCAP
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
}`,wv=`#define MATCAP
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
}`,Tv=`#define NORMAL
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
}`,Av=`#define NORMAL
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
}`,Rv=`#define PHONG
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
}`,Cv=`#define PHONG
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
}`,Pv=`#define STANDARD
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
}`,Dv=`#define STANDARD
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
}`,Lv=`#define TOON
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
}`,Iv=`#define TOON
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
}`,Uv=`uniform float size;
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
}`,Nv=`uniform vec3 diffuse;
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
}`,Fv=`#include <common>
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
}`,Ov=`uniform vec3 color;
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
}`,Bv=`uniform float rotation;
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
}`,kv=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:a0,alphahash_pars_fragment:l0,alphamap_fragment:c0,alphamap_pars_fragment:u0,alphatest_fragment:d0,alphatest_pars_fragment:f0,aomap_fragment:h0,aomap_pars_fragment:p0,batching_pars_vertex:m0,batching_vertex:g0,begin_vertex:_0,beginnormal_vertex:x0,bsdfs:v0,iridescence_fragment:M0,bumpmap_pars_fragment:S0,clipping_planes_fragment:b0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:E0,clipping_planes_vertex:w0,color_fragment:T0,color_pars_fragment:A0,color_pars_vertex:R0,color_vertex:C0,common:P0,cube_uv_reflection_fragment:D0,defaultnormal_vertex:L0,displacementmap_pars_vertex:I0,displacementmap_vertex:U0,emissivemap_fragment:N0,emissivemap_pars_fragment:F0,colorspace_fragment:O0,colorspace_pars_fragment:B0,envmap_fragment:k0,envmap_common_pars_fragment:z0,envmap_pars_fragment:H0,envmap_pars_vertex:V0,envmap_physical_pars_fragment:Q0,envmap_vertex:G0,fog_vertex:W0,fog_pars_vertex:X0,fog_fragment:$0,fog_pars_fragment:q0,gradientmap_pars_fragment:Y0,lightmap_pars_fragment:K0,lights_lambert_fragment:j0,lights_lambert_pars_fragment:Z0,lights_pars_begin:J0,lights_toon_fragment:ex,lights_toon_pars_fragment:tx,lights_phong_fragment:nx,lights_phong_pars_fragment:ix,lights_physical_fragment:sx,lights_physical_pars_fragment:rx,lights_fragment_begin:ox,lights_fragment_maps:ax,lights_fragment_end:lx,logdepthbuf_fragment:cx,logdepthbuf_pars_fragment:ux,logdepthbuf_pars_vertex:dx,logdepthbuf_vertex:fx,map_fragment:hx,map_pars_fragment:px,map_particle_fragment:mx,map_particle_pars_fragment:gx,metalnessmap_fragment:_x,metalnessmap_pars_fragment:xx,morphinstance_vertex:vx,morphcolor_vertex:Mx,morphnormal_vertex:Sx,morphtarget_pars_vertex:bx,morphtarget_vertex:yx,normal_fragment_begin:Ex,normal_fragment_maps:wx,normal_pars_fragment:Tx,normal_pars_vertex:Ax,normal_vertex:Rx,normalmap_pars_fragment:Cx,clearcoat_normal_fragment_begin:Px,clearcoat_normal_fragment_maps:Dx,clearcoat_pars_fragment:Lx,iridescence_pars_fragment:Ix,opaque_fragment:Ux,packing:Nx,premultiplied_alpha_fragment:Fx,project_vertex:Ox,dithering_fragment:Bx,dithering_pars_fragment:kx,roughnessmap_fragment:zx,roughnessmap_pars_fragment:Hx,shadowmap_pars_fragment:Vx,shadowmap_pars_vertex:Gx,shadowmap_vertex:Wx,shadowmask_pars_fragment:Xx,skinbase_vertex:$x,skinning_pars_vertex:qx,skinning_vertex:Yx,skinnormal_vertex:Kx,specularmap_fragment:jx,specularmap_pars_fragment:Zx,tonemapping_fragment:Jx,tonemapping_pars_fragment:Qx,transmission_fragment:ev,transmission_pars_fragment:tv,uv_pars_fragment:nv,uv_pars_vertex:iv,uv_vertex:sv,worldpos_vertex:rv,background_vert:ov,background_frag:av,backgroundCube_vert:lv,backgroundCube_frag:cv,cube_vert:uv,cube_frag:dv,depth_vert:fv,depth_frag:hv,distanceRGBA_vert:pv,distanceRGBA_frag:mv,equirect_vert:gv,equirect_frag:_v,linedashed_vert:xv,linedashed_frag:vv,meshbasic_vert:Mv,meshbasic_frag:Sv,meshlambert_vert:bv,meshlambert_frag:yv,meshmatcap_vert:Ev,meshmatcap_frag:wv,meshnormal_vert:Tv,meshnormal_frag:Av,meshphong_vert:Rv,meshphong_frag:Cv,meshphysical_vert:Pv,meshphysical_frag:Dv,meshtoon_vert:Lv,meshtoon_frag:Iv,points_vert:Uv,points_frag:Nv,shadow_vert:Fv,shadow_frag:Ov,sprite_vert:Bv,sprite_frag:kv},_e={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Un={basic:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:$t([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:$t([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:$t([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:$t([_e.points,_e.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:$t([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:$t([_e.common,_e.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:$t([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:$t([_e.sprite,_e.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:$t([_e.common,_e.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:$t([_e.lights,_e.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Un.physical={uniforms:$t([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Zr={r:0,b:0,g:0},Li=new Hn,zv=new yt;function Hv(n,e,t,i,s,r,o){const a=new Ze(0);let l=r===!0?0:1,c,u,d=null,f=0,p=null;function _(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function v(T){let S=!1;const I=_(T);I===null?h(a,l):I&&I.isColor&&(h(I,1),S=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,S){const I=_(S);I&&(I.isCubeTexture||I.mapping===Fo)?(u===void 0&&(u=new Ut(new ii(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Ds(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Li.copy(S.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zv.makeRotationFromEuler(Li)),u.material.toneMapped=st.getTransfer(I.colorSpace)!==dt,(d!==I||f!==I.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=I,f=I.version,p=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Ut(new yr(2,2),new yi({name:"BackgroundMaterial",uniforms:Ds(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=st.getTransfer(I.colorSpace)!==dt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||f!==I.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=I,f=I.version,p=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function h(T,S){T.getRGB(Zr,Vf(n)),i.buffers.color.setClear(Zr.r,Zr.g,Zr.b,S,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),l=S,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(a,l)},render:v,addToRenderList:m,dispose:A}}function Vv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(x,D,X,z,ee){let ne=!1;const $=d(z,X,D);r!==$&&(r=$,c(r.object)),ne=p(x,z,X,ee),ne&&_(x,z,X,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,S(x,D,X,z),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,D,X){const z=X.wireframe===!0;let ee=i[x.id];ee===void 0&&(ee={},i[x.id]=ee);let ne=ee[D.id];ne===void 0&&(ne={},ee[D.id]=ne);let $=ne[z];return $===void 0&&($=f(l()),ne[z]=$),$}function f(x){const D=[],X=[],z=[];for(let ee=0;ee<t;ee++)D[ee]=0,X[ee]=0,z[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:z,object:x,attributes:{},index:null}}function p(x,D,X,z){const ee=r.attributes,ne=D.attributes;let $=0;const te=X.getAttributes();for(const H in te)if(te[H].location>=0){const be=ee[H];let Re=ne[H];if(Re===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(Re=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(Re=x.instanceColor)),be===void 0||be.attribute!==Re||Re&&be.data!==Re.data)return!0;$++}return r.attributesNum!==$||r.index!==z}function _(x,D,X,z){const ee={},ne=D.attributes;let $=0;const te=X.getAttributes();for(const H in te)if(te[H].location>=0){let be=ne[H];be===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(be=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(be=x.instanceColor));const Re={};Re.attribute=be,be&&be.data&&(Re.data=be.data),ee[H]=Re,$++}r.attributes=ee,r.attributesNum=$,r.index=z}function v(){const x=r.newAttributes;for(let D=0,X=x.length;D<X;D++)x[D]=0}function m(x){h(x,0)}function h(x,D){const X=r.newAttributes,z=r.enabledAttributes,ee=r.attributeDivisors;X[x]=1,z[x]===0&&(n.enableVertexAttribArray(x),z[x]=1),ee[x]!==D&&(n.vertexAttribDivisor(x,D),ee[x]=D)}function A(){const x=r.newAttributes,D=r.enabledAttributes;for(let X=0,z=D.length;X<z;X++)D[X]!==x[X]&&(n.disableVertexAttribArray(X),D[X]=0)}function T(x,D,X,z,ee,ne,$){$===!0?n.vertexAttribIPointer(x,D,X,ee,ne):n.vertexAttribPointer(x,D,X,z,ee,ne)}function S(x,D,X,z){v();const ee=z.attributes,ne=X.getAttributes(),$=D.defaultAttributeValues;for(const te in ne){const H=ne[te];if(H.location>=0){let fe=ee[te];if(fe===void 0&&(te==="instanceMatrix"&&x.instanceMatrix&&(fe=x.instanceMatrix),te==="instanceColor"&&x.instanceColor&&(fe=x.instanceColor)),fe!==void 0){const be=fe.normalized,Re=fe.itemSize,He=e.get(fe);if(He===void 0)continue;const nt=He.buffer,se=He.type,he=He.bytesPerElement,Ce=se===n.INT||se===n.UNSIGNED_INT||fe.gpuType===tc;if(fe.isInterleavedBufferAttribute){const ge=fe.data,Ne=ge.stride,Je=fe.offset;if(ge.isInstancedInterleavedBuffer){for(let Oe=0;Oe<H.locationSize;Oe++)h(H.location+Oe,ge.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)m(H.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Oe=0;Oe<H.locationSize;Oe++)T(H.location+Oe,Re/H.locationSize,se,be,Ne*he,(Je+Re/H.locationSize*Oe)*he,Ce)}else{if(fe.isInstancedBufferAttribute){for(let ge=0;ge<H.locationSize;ge++)h(H.location+ge,fe.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ge=0;ge<H.locationSize;ge++)m(H.location+ge);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let ge=0;ge<H.locationSize;ge++)T(H.location+ge,Re/H.locationSize,se,be,Re*he,Re/H.locationSize*ge*he,Ce)}}else if($!==void 0){const be=$[te];if(be!==void 0)switch(be.length){case 2:n.vertexAttrib2fv(H.location,be);break;case 3:n.vertexAttrib3fv(H.location,be);break;case 4:n.vertexAttrib4fv(H.location,be);break;default:n.vertexAttrib1fv(H.location,be)}}}}A()}function I(){U();for(const x in i){const D=i[x];for(const X in D){const z=D[X];for(const ee in z)u(z[ee].object),delete z[ee];delete D[X]}delete i[x]}}function P(x){if(i[x.id]===void 0)return;const D=i[x.id];for(const X in D){const z=D[X];for(const ee in z)u(z[ee].object),delete z[ee];delete D[X]}delete i[x.id]}function R(x){for(const D in i){const X=i[D];if(X[x.id]===void 0)continue;const z=X[x.id];for(const ee in z)u(z[ee].object),delete z[ee];delete X[x.id]}}function U(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function Gv(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];t.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v]*f[v];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Wv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==bn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const U=R===Mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==zn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ti&&!U)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:I,maxSamples:P}}function Xv(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ni,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const A=r?0:i,T=A*4;let S=h.clippingState||null;l.value=S,S=u(_,f,T,p);for(let I=0;I!==T;++I)S[I]=t[I];h.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const h=p+v*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<h)&&(m=new Float32Array(h));for(let T=0,S=p;T!==v;++T,S+=4)o.copy(d[T]).applyMatrix4(A,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function $v(n){let e=new WeakMap;function t(o,a){return a===nl?o.mapping=Rs:a===il&&(o.mapping=Cs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===nl||a===il)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new G_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const gs=4,Pu=[.125,.215,.35,.446,.526,.582],ki=20,Ta=new qf,Du=new Ze;let Aa=null,Ra=0,Ca=0,Pa=!1;const Fi=(1+Math.sqrt(5))/2,fs=1/Fi,Lu=[new B(-Fi,fs,0),new B(Fi,fs,0),new B(-fs,0,Fi),new B(fs,0,Fi),new B(0,Fi,-fs),new B(0,Fi,fs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],qv=new B;class Iu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=qv}=r;Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Aa,Ra,Ca),this._renderer.xr.enabled=Pa,e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Mr,format:bn,colorSpace:Ps,depthBuffer:!1},s=Uu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yv(r)),this._blurMaterial=Kv(r,e,t)}return s}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,i,s,r){const l=new fn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Du),d.toneMapping=Mi,d.autoClear=!1;const _=new Vn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),v=new Ut(new ii,_);let m=!1;const h=e.background;h?h.isColor&&(_.color.copy(h),e.background=null,m=!0):(_.color.copy(Du),m=!0);for(let A=0;A<6;A++){const T=A%3;T===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):T===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const S=this._cubeSize;Jr(s,T*S,A>2?S:0,S,S),d.setRenderTarget(s),m&&d.render(v,l),d.render(e,l)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Rs||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Jr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ta)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Lu[(s-r-1)%Lu.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ut(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ki-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const h=[];let A=0;for(let R=0;R<ki;++R){const U=R/v,b=Math.exp(-U*U/2);h.push(b),R===0?A+=b:R<m&&(A+=2*b)}for(let R=0;R<h.length;R++)h[R]=h[R]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=_,f.mipInt.value=T-i;const S=this._sizeLods[s],I=3*S*(s>T-gs?s-T+gs:0),P=4*(this._cubeSize-S);Jr(t,I,P,3*S,2*S),l.setRenderTarget(t),l.render(d,Ta)}}function Yv(n){const e=[],t=[],i=[];let s=n;const r=n-gs+1+Pu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-gs?l=Pu[o-n+gs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,v=3,m=2,h=1,A=new Float32Array(v*_*p),T=new Float32Array(m*_*p),S=new Float32Array(h*_*p);for(let P=0;P<p;P++){const R=P%3*2/3-1,U=P>2?0:-1,b=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];A.set(b,v*_*P),T.set(f,m*_*P);const x=[P,P,P,P,P,P];S.set(x,h*_*P)}const I=new jt;I.setAttribute("position",new Bn(A,v)),I.setAttribute("uv",new Bn(T,m)),I.setAttribute("faceIndex",new Bn(S,h)),e.push(I),s>gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Uu(n,e,t){const i=new Ki(n,e,t);return i.texture.mapping=Fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Kv(n,e,t){const i=new Float32Array(ki),s=new B(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Nu(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Fu(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}function jv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===nl||l===il,u=l===Rs||l===Cs;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Iu(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Iu(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Zv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ys("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Jv(n,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,_=d.attributes.position;let v=0;if(p!==null){const A=p.array;v=p.version;for(let T=0,S=A.length;T<S;T+=3){const I=A[T+0],P=A[T+1],R=A[T+2];f.push(I,P,P,R,R,I)}}else if(_!==void 0){const A=_.array;v=_.version;for(let T=0,S=A.length/3-1;T<S;T+=3){const I=T+0,P=T+1,R=T+2;f.push(I,P,P,R,R,I)}}else return;const m=new(Nf(f)?Hf:zf)(f,1);m.version=v;const h=r.get(d);h&&e.remove(h),r.set(d,m)}function u(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Qv(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,f*o,_),t.update(p,i,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,i,1)}function d(f,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,v,0,_);let h=0;for(let A=0;A<_;A++)h+=p[A]*v[A];t.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function eM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function tM(n,e,t){const i=new WeakMap,s=new wt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let x=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let I=a.attributes.position.count*S,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const R=new Float32Array(I*P*4*d),U=new Ff(R,I,P,d);U.type=ti,U.needsUpdate=!0;const b=S*4;for(let D=0;D<d;D++){const X=h[D],z=A[D],ee=T[D],ne=I*P*4*D;for(let $=0;$<X.count;$++){const te=$*b;_===!0&&(s.fromBufferAttribute(X,$),R[ne+te+0]=s.x,R[ne+te+1]=s.y,R[ne+te+2]=s.z,R[ne+te+3]=0),v===!0&&(s.fromBufferAttribute(z,$),R[ne+te+4]=s.x,R[ne+te+5]=s.y,R[ne+te+6]=s.z,R[ne+te+7]=0),m===!0&&(s.fromBufferAttribute(ee,$),R[ne+te+8]=s.x,R[ne+te+9]=s.y,R[ne+te+10]=s.z,R[ne+te+11]=ee.itemSize===4?s.w:1)}}f={count:d,texture:U,size:new tt(I,P)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function nM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Kf=new tn,Ou=new Xf(1,1),jf=new Ff,Zf=new T_,Jf=new Wf,Bu=[],ku=[],zu=new Float32Array(16),Hu=new Float32Array(9),Vu=new Float32Array(4);function ks(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Bu[s];if(r===void 0&&(r=new Float32Array(s),Bu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ho(n,e){let t=ku[e];t===void 0&&(t=new Int32Array(e),ku[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function iM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function sM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function rM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function oM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function aM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;Vu.set(i),n.uniformMatrix2fv(this.addr,!1,Vu),Lt(t,i)}}function lM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;Hu.set(i),n.uniformMatrix3fv(this.addr,!1,Hu),Lt(t,i)}}function cM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;zu.set(i),n.uniformMatrix4fv(this.addr,!1,zu),Lt(t,i)}}function uM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function dM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function fM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function pM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function gM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function _M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function xM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ou.compareFunction=Uf,r=Ou):r=Kf,t.setTexture2D(e||r,s)}function vM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Zf,s)}function MM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Jf,s)}function SM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||jf,s)}function bM(n){switch(n){case 5126:return iM;case 35664:return sM;case 35665:return rM;case 35666:return oM;case 35674:return aM;case 35675:return lM;case 35676:return cM;case 5124:case 35670:return uM;case 35667:case 35671:return dM;case 35668:case 35672:return fM;case 35669:case 35673:return hM;case 5125:return pM;case 36294:return mM;case 36295:return gM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return xM;case 35679:case 36299:case 36307:return vM;case 35680:case 36300:case 36308:case 36293:return MM;case 36289:case 36303:case 36311:case 36292:return SM}}function yM(n,e){n.uniform1fv(this.addr,e)}function EM(n,e){const t=ks(e,this.size,2);n.uniform2fv(this.addr,t)}function wM(n,e){const t=ks(e,this.size,3);n.uniform3fv(this.addr,t)}function TM(n,e){const t=ks(e,this.size,4);n.uniform4fv(this.addr,t)}function AM(n,e){const t=ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function RM(n,e){const t=ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function CM(n,e){const t=ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function PM(n,e){n.uniform1iv(this.addr,e)}function DM(n,e){n.uniform2iv(this.addr,e)}function LM(n,e){n.uniform3iv(this.addr,e)}function IM(n,e){n.uniform4iv(this.addr,e)}function UM(n,e){n.uniform1uiv(this.addr,e)}function NM(n,e){n.uniform2uiv(this.addr,e)}function FM(n,e){n.uniform3uiv(this.addr,e)}function OM(n,e){n.uniform4uiv(this.addr,e)}function BM(n,e,t){const i=this.cache,s=e.length,r=Ho(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Kf,r[o])}function kM(n,e,t){const i=this.cache,s=e.length,r=Ho(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Zf,r[o])}function zM(n,e,t){const i=this.cache,s=e.length,r=Ho(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Jf,r[o])}function HM(n,e,t){const i=this.cache,s=e.length,r=Ho(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||jf,r[o])}function VM(n){switch(n){case 5126:return yM;case 35664:return EM;case 35665:return wM;case 35666:return TM;case 35674:return AM;case 35675:return RM;case 35676:return CM;case 5124:case 35670:return PM;case 35667:case 35671:return DM;case 35668:case 35672:return LM;case 35669:case 35673:return IM;case 5125:return UM;case 36294:return NM;case 36295:return FM;case 36296:return OM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return kM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return HM}}class GM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bM(t.type)}}class WM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=VM(t.type)}}class XM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function Gu(n,e){n.seq.push(e),n.map[e.id]=e}function $M(n,e,t){const i=n.name,s=i.length;for(Da.lastIndex=0;;){const r=Da.exec(i),o=Da.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Gu(t,c===void 0?new GM(a,n,e):new WM(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new XM(a),Gu(t,d)),t=d}}}class uo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);$M(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Wu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const qM=37297;let YM=0;function KM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Xu=new qe;function jM(n){st._getMatrix(Xu,st.workingColorSpace,n);const e=`mat3( ${Xu.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case Mo:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $u(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+KM(n.getShaderSource(e),o)}else return s}function ZM(n,e){const t=jM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function JM(n,e){let t;switch(e){case Og:t="Linear";break;case Bg:t="Reinhard";break;case kg:t="Cineon";break;case zg:t="ACESFilmic";break;case Vg:t="AgX";break;case Gg:t="Neutral";break;case Hg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qr=new B;function QM(){st.getLuminanceCoefficients(Qr);const n=Qr.x.toFixed(4),e=Qr.y.toFixed(4),t=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function tS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function js(n){return n!==""}function qu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ll(n){return n.replace(iS,rS)}const sS=new Map;function rS(n,e){let t=Ke[e];if(t===void 0){const i=sS.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ll(t)}const oS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(n){return n.replace(oS,aS)}function aS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ju(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function lS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Sf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===bf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function cS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case Fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uS(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Cs&&(e="ENVMAP_MODE_REFRACTION"),e}function dS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yf:e="ENVMAP_BLENDING_MULTIPLY";break;case Ng:e="ENVMAP_BLENDING_MIX";break;case Fg:e="ENVMAP_BLENDING_ADD";break}return e}function fS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function hS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=lS(t),c=cS(t),u=uS(t),d=dS(t),f=fS(t),p=eS(t),_=tS(r),v=s.createProgram();let m,h,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(js).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(js).join(`
`),h.length>0&&(h+=`
`)):(m=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),h=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Mi?JM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,ZM("linearToOutputTexel",t.outputColorSpace),QM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),o=Ll(o),o=qu(o,t),o=Yu(o,t),a=Ll(a),a=qu(a,t),a=Yu(a,t),o=Ku(o),a=Ku(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=A+m+o,S=A+h+a,I=Wu(s,s.VERTEX_SHADER,T),P=Wu(s,s.FRAGMENT_SHADER,S);s.attachShader(v,I),s.attachShader(v,P),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(D){if(n.debug.checkShaderErrors){const X=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(I).trim(),ee=s.getShaderInfoLog(P).trim();let ne=!0,$=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,I,P);else{const te=$u(s,I,"vertex"),H=$u(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+te+`
`+H)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(z===""||ee==="")&&($=!1);$&&(D.diagnostics={runnable:ne,programLog:X,vertexShader:{log:z,prefix:m},fragmentShader:{log:ee,prefix:h}})}s.deleteShader(I),s.deleteShader(P),U=new uo(s,v),b=nS(s,v)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,qM)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=YM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=P,this}let pS=0;class mS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gS(e),t.set(e,i)),i}}class gS{constructor(e){this.id=pS++,this.code=e,this.usedTimes=0}}function _S(n,e,t,i,s,r,o){const a=new Bf,l=new mS,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,x,D,X,z){const ee=X.fog,ne=z.geometry,$=b.isMeshStandardMaterial?X.environment:null,te=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),H=te&&te.mapping===Fo?te.image.height:null,fe=_[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const be=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Re=be!==void 0?be.length:0;let He=0;ne.morphAttributes.position!==void 0&&(He=1),ne.morphAttributes.normal!==void 0&&(He=2),ne.morphAttributes.color!==void 0&&(He=3);let nt,se,he,Ce;if(fe){const at=Un[fe];nt=at.vertexShader,se=at.fragmentShader}else nt=b.vertexShader,se=b.fragmentShader,l.update(b),he=l.getVertexShaderID(b),Ce=l.getFragmentShaderID(b);const ge=n.getRenderTarget(),Ne=n.state.buffers.depth.getReversed(),Je=z.isInstancedMesh===!0,Oe=z.isBatchedMesh===!0,ct=!!b.map,C=!!b.matcap,L=!!te,y=!!b.aoMap,re=!!b.lightMap,K=!!b.bumpMap,Q=!!b.normalMap,Z=!!b.displacementMap,ie=!!b.emissiveMap,J=!!b.metalnessMap,W=!!b.roughnessMap,ve=b.anisotropy>0,M=b.clearcoat>0,g=b.dispersion>0,N=b.iridescence>0,G=b.sheen>0,j=b.transmission>0,V=ve&&!!b.anisotropyMap,pe=M&&!!b.clearcoatMap,le=M&&!!b.clearcoatNormalMap,ye=M&&!!b.clearcoatRoughnessMap,Te=N&&!!b.iridescenceMap,ae=N&&!!b.iridescenceThicknessMap,Ee=G&&!!b.sheenColorMap,De=G&&!!b.sheenRoughnessMap,Le=!!b.specularMap,me=!!b.specularColorMap,Ge=!!b.specularIntensityMap,F=j&&!!b.transmissionMap,Me=j&&!!b.thicknessMap,ce=!!b.gradientMap,Pe=!!b.alphaMap,ue=b.alphaTest>0,oe=!!b.alphaHash,Ie=!!b.extensions;let $e=Mi;b.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&($e=n.toneMapping);const _t={shaderID:fe,shaderType:b.type,shaderName:b.name,vertexShader:nt,fragmentShader:se,defines:b.defines,customVertexShaderID:he,customFragmentShaderID:Ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&z._colorsTexture!==null,instancing:Je,instancingColor:Je&&z.instanceColor!==null,instancingMorph:Je&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ps,alphaToCoverage:!!b.alphaToCoverage,map:ct,matcap:C,envMap:L,envMapMode:L&&te.mapping,envMapCubeUVHeight:H,aoMap:y,lightMap:re,bumpMap:K,normalMap:Q,displacementMap:f&&Z,emissiveMap:ie,normalMapObjectSpace:Q&&b.normalMapType===qg,normalMapTangentSpace:Q&&b.normalMapType===If,metalnessMap:J,roughnessMap:W,anisotropy:ve,anisotropyMap:V,clearcoat:M,clearcoatMap:pe,clearcoatNormalMap:le,clearcoatRoughnessMap:ye,dispersion:g,iridescence:N,iridescenceMap:Te,iridescenceThicknessMap:ae,sheen:G,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Le,specularColorMap:me,specularIntensityMap:Ge,transmission:j,transmissionMap:F,thicknessMap:Me,gradientMap:ce,opaque:b.transparent===!1&&b.blending===bs&&b.alphaToCoverage===!1,alphaMap:Pe,alphaTest:ue,alphaHash:oe,combine:b.combine,mapUv:ct&&v(b.map.channel),aoMapUv:y&&v(b.aoMap.channel),lightMapUv:re&&v(b.lightMap.channel),bumpMapUv:K&&v(b.bumpMap.channel),normalMapUv:Q&&v(b.normalMap.channel),displacementMapUv:Z&&v(b.displacementMap.channel),emissiveMapUv:ie&&v(b.emissiveMap.channel),metalnessMapUv:J&&v(b.metalnessMap.channel),roughnessMapUv:W&&v(b.roughnessMap.channel),anisotropyMapUv:V&&v(b.anisotropyMap.channel),clearcoatMapUv:pe&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:le&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(b.sheenRoughnessMap.channel),specularMapUv:Le&&v(b.specularMap.channel),specularColorMapUv:me&&v(b.specularColorMap.channel),specularIntensityMapUv:Ge&&v(b.specularIntensityMap.channel),transmissionMapUv:F&&v(b.transmissionMap.channel),thicknessMapUv:Me&&v(b.thicknessMap.channel),alphaMapUv:Pe&&v(b.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Q||ve),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ne.attributes.uv&&(ct||Pe),fog:!!ee,useFog:b.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ne,skinning:z.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:He,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:ct&&b.map.isVideoTexture===!0&&st.getTransfer(b.map.colorSpace)===dt,decodeVideoTextureEmissive:ie&&b.emissiveMap.isVideoTexture===!0&&st.getTransfer(b.emissiveMap.colorSpace)===dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Qt,flipSided:b.side===en,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ie&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&b.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function h(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)x.push(D),x.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(A(x,b),T(x,b),x.push(n.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function A(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function T(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),b.push(a.mask)}function S(b){const x=_[b.type];let D;if(x){const X=Un[x];D=k_.clone(X.uniforms)}else D=b.uniforms;return D}function I(b,x){let D;for(let X=0,z=u.length;X<z;X++){const ee=u[X];if(ee.cacheKey===x){D=ee,++D.usedTimes;break}}return D===void 0&&(D=new hS(n,x,b,r),u.push(D)),D}function P(b){if(--b.usedTimes===0){const x=u.indexOf(b);u[x]=u[u.length-1],u.pop(),b.destroy()}}function R(b){l.remove(b)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:I,releaseProgram:P,releaseShaderCache:R,programs:u,dispose:U}}function xS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function vS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Zu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ju(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,p,_,v,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=v,h.group=m),e++,h}function a(d,f,p,_,v,m){const h=o(d,f,p,_,v,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(d,f,p,_,v,m){const h=o(d,f,p,_,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||vS),i.length>1&&i.sort(f||Zu),s.length>1&&s.sort(f||Zu)}function u(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function MS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Ju,n.set(i,[o])):s>=r.length?(o=new Ju,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function SS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ze};break;case"SpotLight":t={position:new B,direction:new B,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function bS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yS=0;function ES(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wS(n){const e=new SS,t=bS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,r=new yt,o=new yt;function a(c){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,_=0,v=0,m=0,h=0,A=0,T=0,S=0,I=0,P=0,R=0;c.sort(ES);for(let b=0,x=c.length;b<x;b++){const D=c[b],X=D.color,z=D.intensity,ee=D.distance,ne=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=X.r*z,d+=X.g*z,f+=X.b*z;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],z);R++}else if(D.isDirectionalLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const te=D.shadow,H=t.get(D);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=ne,i.directionalShadowMatrix[p]=D.shadow.matrix,A++}i.directional[p]=$,p++}else if(D.isSpotLight){const $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(X).multiplyScalar(z),$.distance=ee,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[v]=$;const te=D.shadow;if(D.map&&(i.spotLightMap[I]=D.map,I++,te.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[v]=te.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=ne,S++}v++}else if(D.isRectAreaLight){const $=e.get(D);$.color.copy(X).multiplyScalar(z),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=$,m++}else if(D.isPointLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const te=D.shadow,H=t.get(D);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,H.shadowCameraNear=te.camera.near,H.shadowCameraFar=te.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=ne,i.pointShadowMatrix[_]=D.shadow.matrix,T++}i.point[_]=$,_++}else if(D.isHemisphereLight){const $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(z),$.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[h]=$,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==p||U.pointLength!==_||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==S||U.numSpotMaps!==I||U.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+I-P,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,U.directionalLength=p,U.pointLength=_,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=S,U.numSpotMaps=I,U.numLightProbes=R,i.version=yS++)}function l(c,u){let d=0,f=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let h=0,A=c.length;h<A;h++){const T=c[h];if(T.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(T.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Qu(n){const e=new wS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function TS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Qu(n),e.set(s,[a])):r>=o.length?(a=new Qu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const AS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RS=`uniform sampler2D shadow_pass;
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
}`;function CS(n,e,t){let i=new uc;const s=new tt,r=new tt,o=new wt,a=new j_({depthPacking:$g}),l=new Z_,c={},u=t.maxTextureSize,d={[bi]:en,[en]:bi,[Qt]:Qt},f=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:AS,fragmentShader:RS}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new jt;_.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ut(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sf;let h=this.type;this.render=function(P,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const b=n.getRenderTarget(),x=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),X=n.state;X.setBlending(vi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const z=h!==jn&&this.type===jn,ee=h===jn&&this.type!==jn;for(let ne=0,$=P.length;ne<$;ne++){const te=P[ne],H=te.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const fe=H.getFrameExtents();if(s.multiply(fe),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/fe.x),s.x=r.x*fe.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/fe.y),s.y=r.y*fe.y,H.mapSize.y=r.y)),H.map===null||z===!0||ee===!0){const Re=this.type!==jn?{minFilter:wn,magFilter:wn}:{};H.map!==null&&H.map.dispose(),H.map=new Ki(s.x,s.y,Re),H.map.texture.name=te.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const be=H.getViewportCount();for(let Re=0;Re<be;Re++){const He=H.getViewport(Re);o.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),X.viewport(o),H.updateMatrices(te,Re),i=H.getFrustum(),S(R,U,H.camera,te,this.type)}H.isPointLightShadow!==!0&&this.type===jn&&A(H,U),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(b,x,D)};function A(P,R){const U=e.update(v);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ki(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,U,f,v,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,U,p,v,null)}function T(P,R,U,b){let x=null;const D=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)x=D;else if(x=U.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const X=x.uuid,z=R.uuid;let ee=c[X];ee===void 0&&(ee={},c[X]=ee);let ne=ee[z];ne===void 0&&(ne=x.clone(),ee[z]=ne,R.addEventListener("dispose",I)),x=ne}if(x.visible=R.visible,x.wireframe=R.wireframe,b===jn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:d[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const X=n.properties.get(x);X.light=U}return x}function S(P,R,U,b,x){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===jn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);const z=e.update(P),ee=P.material;if(Array.isArray(ee)){const ne=z.groups;for(let $=0,te=ne.length;$<te;$++){const H=ne[$],fe=ee[H.materialIndex];if(fe&&fe.visible){const be=T(P,fe,b,x);P.onBeforeShadow(n,P,R,U,z,be,H),n.renderBufferDirect(U,null,z,be,P,H),P.onAfterShadow(n,P,R,U,z,be,H)}}}else if(ee.visible){const ne=T(P,ee,b,x);P.onBeforeShadow(n,P,R,U,z,ne,null),n.renderBufferDirect(U,null,z,ne,P,null),P.onAfterShadow(n,P,R,U,z,ne,null)}}const X=P.children;for(let z=0,ee=X.length;z<ee;z++)S(X[z],R,U,b,x)}function I(P){P.target.removeEventListener("dispose",I);for(const U in c){const b=c[U],x=P.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}const PS={[Ka]:ja,[Za]:el,[Ja]:tl,[As]:Qa,[ja]:Ka,[el]:Za,[tl]:Ja,[Qa]:As};function DS(n,e){function t(){let F=!1;const Me=new wt;let ce=null;const Pe=new wt(0,0,0,0);return{setMask:function(ue){ce!==ue&&!F&&(n.colorMask(ue,ue,ue,ue),ce=ue)},setLocked:function(ue){F=ue},setClear:function(ue,oe,Ie,$e,_t){_t===!0&&(ue*=$e,oe*=$e,Ie*=$e),Me.set(ue,oe,Ie,$e),Pe.equals(Me)===!1&&(n.clearColor(ue,oe,Ie,$e),Pe.copy(Me))},reset:function(){F=!1,ce=null,Pe.set(-1,0,0,0)}}}function i(){let F=!1,Me=!1,ce=null,Pe=null,ue=null;return{setReversed:function(oe){if(Me!==oe){const Ie=e.get("EXT_clip_control");oe?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Me=oe;const $e=ue;ue=null,this.setClear($e)}},getReversed:function(){return Me},setTest:function(oe){oe?ge(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(oe){ce!==oe&&!F&&(n.depthMask(oe),ce=oe)},setFunc:function(oe){if(Me&&(oe=PS[oe]),Pe!==oe){switch(oe){case Ka:n.depthFunc(n.NEVER);break;case ja:n.depthFunc(n.ALWAYS);break;case Za:n.depthFunc(n.LESS);break;case As:n.depthFunc(n.LEQUAL);break;case Ja:n.depthFunc(n.EQUAL);break;case Qa:n.depthFunc(n.GEQUAL);break;case el:n.depthFunc(n.GREATER);break;case tl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=oe}},setLocked:function(oe){F=oe},setClear:function(oe){ue!==oe&&(Me&&(oe=1-oe),n.clearDepth(oe),ue=oe)},reset:function(){F=!1,ce=null,Pe=null,ue=null,Me=!1}}}function s(){let F=!1,Me=null,ce=null,Pe=null,ue=null,oe=null,Ie=null,$e=null,_t=null;return{setTest:function(at){F||(at?ge(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(at){Me!==at&&!F&&(n.stencilMask(at),Me=at)},setFunc:function(at,mn,Gn){(ce!==at||Pe!==mn||ue!==Gn)&&(n.stencilFunc(at,mn,Gn),ce=at,Pe=mn,ue=Gn)},setOp:function(at,mn,Gn){(oe!==at||Ie!==mn||$e!==Gn)&&(n.stencilOp(at,mn,Gn),oe=at,Ie=mn,$e=Gn)},setLocked:function(at){F=at},setClear:function(at){_t!==at&&(n.clearStencil(at),_t=at)},reset:function(){F=!1,Me=null,ce=null,Pe=null,ue=null,oe=null,Ie=null,$e=null,_t=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],_=null,v=!1,m=null,h=null,A=null,T=null,S=null,I=null,P=null,R=new Ze(0,0,0),U=0,b=!1,x=null,D=null,X=null,z=null,ee=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,te=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=te>=1):H.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=te>=2);let fe=null,be={};const Re=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),nt=new wt().fromArray(Re),se=new wt().fromArray(He);function he(F,Me,ce,Pe){const ue=new Uint8Array(4),oe=n.createTexture();n.bindTexture(F,oe),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<ce;Ie++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(Me+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return oe}const Ce={};Ce[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(n.DEPTH_TEST),o.setFunc(As),K(!1),Q(Zc),ge(n.CULL_FACE),y(vi);function ge(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Ne(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Je(F,Me){return d[F]!==Me?(n.bindFramebuffer(F,Me),d[F]=Me,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Me),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function Oe(F,Me){let ce=p,Pe=!1;if(F){ce=f.get(Me),ce===void 0&&(ce=[],f.set(Me,ce));const ue=F.textures;if(ce.length!==ue.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ie=ue.length;oe<Ie;oe++)ce[oe]=n.COLOR_ATTACHMENT0+oe;ce.length=ue.length,Pe=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(ce)}function ct(F){return _!==F?(n.useProgram(F),_=F,!0):!1}const C={[Oi]:n.FUNC_ADD,[xg]:n.FUNC_SUBTRACT,[vg]:n.FUNC_REVERSE_SUBTRACT};C[Mg]=n.MIN,C[Sg]=n.MAX;const L={[bg]:n.ZERO,[yg]:n.ONE,[Eg]:n.SRC_COLOR,[qa]:n.SRC_ALPHA,[Pg]:n.SRC_ALPHA_SATURATE,[Rg]:n.DST_COLOR,[Tg]:n.DST_ALPHA,[wg]:n.ONE_MINUS_SRC_COLOR,[Ya]:n.ONE_MINUS_SRC_ALPHA,[Cg]:n.ONE_MINUS_DST_COLOR,[Ag]:n.ONE_MINUS_DST_ALPHA,[Dg]:n.CONSTANT_COLOR,[Lg]:n.ONE_MINUS_CONSTANT_COLOR,[Ig]:n.CONSTANT_ALPHA,[Ug]:n.ONE_MINUS_CONSTANT_ALPHA};function y(F,Me,ce,Pe,ue,oe,Ie,$e,_t,at){if(F===vi){v===!0&&(Ne(n.BLEND),v=!1);return}if(v===!1&&(ge(n.BLEND),v=!0),F!==_g){if(F!==m||at!==b){if((h!==Oi||S!==Oi)&&(n.blendEquation(n.FUNC_ADD),h=Oi,S=Oi),at)switch(F){case bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jc:n.blendFunc(n.ONE,n.ONE);break;case Qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Qc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}A=null,T=null,I=null,P=null,R.set(0,0,0),U=0,m=F,b=at}return}ue=ue||Me,oe=oe||ce,Ie=Ie||Pe,(Me!==h||ue!==S)&&(n.blendEquationSeparate(C[Me],C[ue]),h=Me,S=ue),(ce!==A||Pe!==T||oe!==I||Ie!==P)&&(n.blendFuncSeparate(L[ce],L[Pe],L[oe],L[Ie]),A=ce,T=Pe,I=oe,P=Ie),($e.equals(R)===!1||_t!==U)&&(n.blendColor($e.r,$e.g,$e.b,_t),R.copy($e),U=_t),m=F,b=!1}function re(F,Me){F.side===Qt?Ne(n.CULL_FACE):ge(n.CULL_FACE);let ce=F.side===en;Me&&(ce=!ce),K(ce),F.blending===bs&&F.transparent===!1?y(vi):y(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Pe=F.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ie(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(F){x!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),x=F)}function Q(F){F!==mg?(ge(n.CULL_FACE),F!==D&&(F===Zc?n.cullFace(n.BACK):F===gg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),D=F}function Z(F){F!==X&&($&&n.lineWidth(F),X=F)}function ie(F,Me,ce){F?(ge(n.POLYGON_OFFSET_FILL),(z!==Me||ee!==ce)&&(n.polygonOffset(Me,ce),z=Me,ee=ce)):Ne(n.POLYGON_OFFSET_FILL)}function J(F){F?ge(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function W(F){F===void 0&&(F=n.TEXTURE0+ne-1),fe!==F&&(n.activeTexture(F),fe=F)}function ve(F,Me,ce){ce===void 0&&(fe===null?ce=n.TEXTURE0+ne-1:ce=fe);let Pe=be[ce];Pe===void 0&&(Pe={type:void 0,texture:void 0},be[ce]=Pe),(Pe.type!==F||Pe.texture!==Me)&&(fe!==ce&&(n.activeTexture(ce),fe=ce),n.bindTexture(F,Me||Ce[F]),Pe.type=F,Pe.texture=Me)}function M(){const F=be[fe];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(F){nt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),nt.copy(F))}function De(F){se.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),se.copy(F))}function Le(F,Me){let ce=c.get(Me);ce===void 0&&(ce=new WeakMap,c.set(Me,ce));let Pe=ce.get(F);Pe===void 0&&(Pe=n.getUniformBlockIndex(Me,F.name),ce.set(F,Pe))}function me(F,Me){const Pe=c.get(Me).get(F);l.get(Me)!==Pe&&(n.uniformBlockBinding(Me,Pe,F.__bindingPointIndex),l.set(Me,Pe))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},fe=null,be={},d={},f=new WeakMap,p=[],_=null,v=!1,m=null,h=null,A=null,T=null,S=null,I=null,P=null,R=new Ze(0,0,0),U=0,b=!1,x=null,D=null,X=null,z=null,ee=null,nt.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ge,disable:Ne,bindFramebuffer:Je,drawBuffers:Oe,useProgram:ct,setBlending:y,setMaterial:re,setFlipSided:K,setCullFace:Q,setLineWidth:Z,setPolygonOffset:ie,setScissorTest:J,activeTexture:W,bindTexture:ve,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:N,texImage2D:Te,texImage3D:ae,updateUBOMapping:Le,uniformBlockBinding:me,texStorage2D:le,texStorage3D:ye,texSubImage2D:G,texSubImage3D:j,compressedTexSubImage2D:V,compressedTexSubImage3D:pe,scissor:Ee,viewport:De,reset:Ge}}function LS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,g){return p?new OffscreenCanvas(M,g):bo("canvas")}function v(M,g,N){let G=1;const j=ve(M);if((j.width>N||j.height>N)&&(G=N/Math.max(j.width,j.height)),G<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const V=Math.floor(G*j.width),pe=Math.floor(G*j.height);d===void 0&&(d=_(V,pe));const le=g?_(V,pe):d;return le.width=V,le.height=pe,le.getContext("2d").drawImage(M,0,0,V,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+V+"x"+pe+")."),le}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),M;return M}function m(M){return M.generateMipmaps}function h(M){n.generateMipmap(M)}function A(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(M,g,N,G,j=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let V=g;if(g===n.RED&&(N===n.FLOAT&&(V=n.R32F),N===n.HALF_FLOAT&&(V=n.R16F),N===n.UNSIGNED_BYTE&&(V=n.R8)),g===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(V=n.R8UI),N===n.UNSIGNED_SHORT&&(V=n.R16UI),N===n.UNSIGNED_INT&&(V=n.R32UI),N===n.BYTE&&(V=n.R8I),N===n.SHORT&&(V=n.R16I),N===n.INT&&(V=n.R32I)),g===n.RG&&(N===n.FLOAT&&(V=n.RG32F),N===n.HALF_FLOAT&&(V=n.RG16F),N===n.UNSIGNED_BYTE&&(V=n.RG8)),g===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(V=n.RG8UI),N===n.UNSIGNED_SHORT&&(V=n.RG16UI),N===n.UNSIGNED_INT&&(V=n.RG32UI),N===n.BYTE&&(V=n.RG8I),N===n.SHORT&&(V=n.RG16I),N===n.INT&&(V=n.RG32I)),g===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(V=n.RGB8UI),N===n.UNSIGNED_SHORT&&(V=n.RGB16UI),N===n.UNSIGNED_INT&&(V=n.RGB32UI),N===n.BYTE&&(V=n.RGB8I),N===n.SHORT&&(V=n.RGB16I),N===n.INT&&(V=n.RGB32I)),g===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),N===n.UNSIGNED_INT&&(V=n.RGBA32UI),N===n.BYTE&&(V=n.RGBA8I),N===n.SHORT&&(V=n.RGBA16I),N===n.INT&&(V=n.RGBA32I)),g===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),g===n.RGBA){const pe=j?Mo:st.getTransfer(G);N===n.FLOAT&&(V=n.RGBA32F),N===n.HALF_FLOAT&&(V=n.RGBA16F),N===n.UNSIGNED_BYTE&&(V=pe===dt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function S(M,g){let N;return M?g===null||g===Yi||g===hr?N=n.DEPTH24_STENCIL8:g===ti?N=n.DEPTH32F_STENCIL8:g===fr&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Yi||g===hr?N=n.DEPTH_COMPONENT24:g===ti?N=n.DEPTH_COMPONENT32F:g===fr&&(N=n.DEPTH_COMPONENT16),N}function I(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==wn&&M.minFilter!==Fn?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function P(M){const g=M.target;g.removeEventListener("dispose",P),U(g),g.isVideoTexture&&u.delete(g)}function R(M){const g=M.target;g.removeEventListener("dispose",R),x(g)}function U(M){const g=i.get(M);if(g.__webglInit===void 0)return;const N=M.source,G=f.get(N);if(G){const j=G[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&b(M),Object.keys(G).length===0&&f.delete(N)}i.remove(M)}function b(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const N=M.source,G=f.get(N);delete G[g.__cacheKey],o.memory.textures--}function x(M){const g=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let j=0;j<g.__webglFramebuffer[G].length;j++)n.deleteFramebuffer(g.__webglFramebuffer[G][j]);else n.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)n.deleteFramebuffer(g.__webglFramebuffer[G]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=M.textures;for(let G=0,j=N.length;G<j;G++){const V=i.get(N[G]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(N[G])}i.remove(M)}let D=0;function X(){D=0}function z(){const M=D;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),D+=1,M}function ee(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function ne(M,g){const N=i.get(M);if(M.isVideoTexture&&J(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){const G=M.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(N,M,g);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+g)}function $(M,g){const N=i.get(M);if(M.version>0&&N.__version!==M.version){Ce(N,M,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+g)}function te(M,g){const N=i.get(M);if(M.version>0&&N.__version!==M.version){Ce(N,M,g);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+g)}function H(M,g){const N=i.get(M);if(M.version>0&&N.__version!==M.version){ge(N,M,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+g)}const fe={[sl]:n.REPEAT,[zi]:n.CLAMP_TO_EDGE,[rl]:n.MIRRORED_REPEAT},be={[wn]:n.NEAREST,[Wg]:n.NEAREST_MIPMAP_NEAREST,[Pr]:n.NEAREST_MIPMAP_LINEAR,[Fn]:n.LINEAR,[ea]:n.LINEAR_MIPMAP_NEAREST,[Hi]:n.LINEAR_MIPMAP_LINEAR},Re={[Yg]:n.NEVER,[e_]:n.ALWAYS,[Kg]:n.LESS,[Uf]:n.LEQUAL,[jg]:n.EQUAL,[Qg]:n.GEQUAL,[Zg]:n.GREATER,[Jg]:n.NOTEQUAL};function He(M,g){if(g.type===ti&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Fn||g.magFilter===ea||g.magFilter===Pr||g.magFilter===Hi||g.minFilter===Fn||g.minFilter===ea||g.minFilter===Pr||g.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,fe[g.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,fe[g.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,fe[g.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,be[g.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,be[g.minFilter]),g.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Re[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===wn||g.minFilter!==Pr&&g.minFilter!==Hi||g.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function nt(M,g){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",P));const G=g.source;let j=f.get(G);j===void 0&&(j={},f.set(G,j));const V=ee(g);if(V!==M.__cacheKey){j[V]===void 0&&(j[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),j[V].usedTimes++;const pe=j[M.__cacheKey];pe!==void 0&&(j[M.__cacheKey].usedTimes--,pe.usedTimes===0&&b(g)),M.__cacheKey=V,M.__webglTexture=j[V].texture}return N}function se(M,g,N){return Math.floor(Math.floor(M/N)/g)}function he(M,g,N,G){const V=M.updateRanges;if(V.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,N,G,g.data);else{V.sort((ae,Ee)=>ae.start-Ee.start);let pe=0;for(let ae=1;ae<V.length;ae++){const Ee=V[pe],De=V[ae],Le=Ee.start+Ee.count,me=se(De.start,g.width,4),Ge=se(Ee.start,g.width,4);De.start<=Le+1&&me===Ge&&se(De.start+De.count-1,g.width,4)===me?Ee.count=Math.max(Ee.count,De.start+De.count-Ee.start):(++pe,V[pe]=De)}V.length=pe+1;const le=n.getParameter(n.UNPACK_ROW_LENGTH),ye=n.getParameter(n.UNPACK_SKIP_PIXELS),Te=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ae=0,Ee=V.length;ae<Ee;ae++){const De=V[ae],Le=Math.floor(De.start/4),me=Math.ceil(De.count/4),Ge=Le%g.width,F=Math.floor(Le/g.width),Me=me,ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Ge,F,Me,ce,N,G,g.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function Ce(M,g,N){let G=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=n.TEXTURE_3D);const j=nt(M,g),V=g.source;t.bindTexture(G,M.__webglTexture,n.TEXTURE0+N);const pe=i.get(V);if(V.version!==pe.__version||j===!0){t.activeTexture(n.TEXTURE0+N);const le=st.getPrimaries(st.workingColorSpace),ye=g.colorSpace===_i?null:st.getPrimaries(g.colorSpace),Te=g.colorSpace===_i||le===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ae=v(g.image,!1,s.maxTextureSize);ae=W(g,ae);const Ee=r.convert(g.format,g.colorSpace),De=r.convert(g.type);let Le=T(g.internalFormat,Ee,De,g.colorSpace,g.isVideoTexture);He(G,g);let me;const Ge=g.mipmaps,F=g.isVideoTexture!==!0,Me=pe.__version===void 0||j===!0,ce=V.dataReady,Pe=I(g,ae);if(g.isDepthTexture)Le=S(g.format===mr,g.type),Me&&(F?t.texStorage2D(n.TEXTURE_2D,1,Le,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Le,ae.width,ae.height,0,Ee,De,null));else if(g.isDataTexture)if(Ge.length>0){F&&Me&&t.texStorage2D(n.TEXTURE_2D,Pe,Le,Ge[0].width,Ge[0].height);for(let ue=0,oe=Ge.length;ue<oe;ue++)me=Ge[ue],F?ce&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,me.width,me.height,Ee,De,me.data):t.texImage2D(n.TEXTURE_2D,ue,Le,me.width,me.height,0,Ee,De,me.data);g.generateMipmaps=!1}else F?(Me&&t.texStorage2D(n.TEXTURE_2D,Pe,Le,ae.width,ae.height),ce&&he(g,ae,Ee,De)):t.texImage2D(n.TEXTURE_2D,0,Le,ae.width,ae.height,0,Ee,De,ae.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){F&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Le,Ge[0].width,Ge[0].height,ae.depth);for(let ue=0,oe=Ge.length;ue<oe;ue++)if(me=Ge[ue],g.format!==bn)if(Ee!==null)if(F){if(ce)if(g.layerUpdates.size>0){const Ie=Cu(me.width,me.height,g.format,g.type);for(const $e of g.layerUpdates){const _t=me.data.subarray($e*Ie/me.data.BYTES_PER_ELEMENT,($e+1)*Ie/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,$e,me.width,me.height,1,Ee,_t)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,me.width,me.height,ae.depth,Ee,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,Le,me.width,me.height,ae.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,me.width,me.height,ae.depth,Ee,De,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,Le,me.width,me.height,ae.depth,0,Ee,De,me.data)}else{F&&Me&&t.texStorage2D(n.TEXTURE_2D,Pe,Le,Ge[0].width,Ge[0].height);for(let ue=0,oe=Ge.length;ue<oe;ue++)me=Ge[ue],g.format!==bn?Ee!==null?F?ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,me.width,me.height,Ee,me.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,Le,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ce&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,me.width,me.height,Ee,De,me.data):t.texImage2D(n.TEXTURE_2D,ue,Le,me.width,me.height,0,Ee,De,me.data)}else if(g.isDataArrayTexture)if(F){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Le,ae.width,ae.height,ae.depth),ce)if(g.layerUpdates.size>0){const ue=Cu(ae.width,ae.height,g.format,g.type);for(const oe of g.layerUpdates){const Ie=ae.data.subarray(oe*ue/ae.data.BYTES_PER_ELEMENT,(oe+1)*ue/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,ae.width,ae.height,1,Ee,De,Ie)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ee,De,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ae.width,ae.height,ae.depth,0,Ee,De,ae.data);else if(g.isData3DTexture)F?(Me&&t.texStorage3D(n.TEXTURE_3D,Pe,Le,ae.width,ae.height,ae.depth),ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ee,De,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ae.width,ae.height,ae.depth,0,Ee,De,ae.data);else if(g.isFramebufferTexture){if(Me)if(F)t.texStorage2D(n.TEXTURE_2D,Pe,Le,ae.width,ae.height);else{let ue=ae.width,oe=ae.height;for(let Ie=0;Ie<Pe;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,Le,ue,oe,0,Ee,De,null),ue>>=1,oe>>=1}}else if(Ge.length>0){if(F&&Me){const ue=ve(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Pe,Le,ue.width,ue.height)}for(let ue=0,oe=Ge.length;ue<oe;ue++)me=Ge[ue],F?ce&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Ee,De,me):t.texImage2D(n.TEXTURE_2D,ue,Le,Ee,De,me);g.generateMipmaps=!1}else if(F){if(Me){const ue=ve(ae);t.texStorage2D(n.TEXTURE_2D,Pe,Le,ue.width,ue.height)}ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,De,ae)}else t.texImage2D(n.TEXTURE_2D,0,Le,Ee,De,ae);m(g)&&h(G),pe.__version=V.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function ge(M,g,N){if(g.image.length!==6)return;const G=nt(M,g),j=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+N);const V=i.get(j);if(j.version!==V.__version||G===!0){t.activeTexture(n.TEXTURE0+N);const pe=st.getPrimaries(st.workingColorSpace),le=g.colorSpace===_i?null:st.getPrimaries(g.colorSpace),ye=g.colorSpace===_i||pe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Te=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,Ee=[];for(let oe=0;oe<6;oe++)!Te&&!ae?Ee[oe]=v(g.image[oe],!0,s.maxCubemapSize):Ee[oe]=ae?g.image[oe].image:g.image[oe],Ee[oe]=W(g,Ee[oe]);const De=Ee[0],Le=r.convert(g.format,g.colorSpace),me=r.convert(g.type),Ge=T(g.internalFormat,Le,me,g.colorSpace),F=g.isVideoTexture!==!0,Me=V.__version===void 0||G===!0,ce=j.dataReady;let Pe=I(g,De);He(n.TEXTURE_CUBE_MAP,g);let ue;if(Te){F&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ge,De.width,De.height);for(let oe=0;oe<6;oe++){ue=Ee[oe].mipmaps;for(let Ie=0;Ie<ue.length;Ie++){const $e=ue[Ie];g.format!==bn?Le!==null?F?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,0,0,$e.width,$e.height,Le,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,Ge,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,0,0,$e.width,$e.height,Le,me,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,Ge,$e.width,$e.height,0,Le,me,$e.data)}}}else{if(ue=g.mipmaps,F&&Me){ue.length>0&&Pe++;const oe=ve(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ge,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ae){F?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ee[oe].width,Ee[oe].height,Le,me,Ee[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ge,Ee[oe].width,Ee[oe].height,0,Le,me,Ee[oe].data);for(let Ie=0;Ie<ue.length;Ie++){const _t=ue[Ie].image[oe].image;F?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,0,0,_t.width,_t.height,Le,me,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,Ge,_t.width,_t.height,0,Le,me,_t.data)}}else{F?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Le,me,Ee[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ge,Le,me,Ee[oe]);for(let Ie=0;Ie<ue.length;Ie++){const $e=ue[Ie];F?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,0,0,Le,me,$e.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,Ge,Le,me,$e.image[oe])}}}m(g)&&h(n.TEXTURE_CUBE_MAP),V.__version=j.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Ne(M,g,N,G,j,V){const pe=r.convert(N.format,N.colorSpace),le=r.convert(N.type),ye=T(N.internalFormat,pe,le,N.colorSpace),Te=i.get(g),ae=i.get(N);if(ae.__renderTarget=g,!Te.__hasExternalTextures){const Ee=Math.max(1,g.width>>V),De=Math.max(1,g.height>>V);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,V,ye,Ee,De,g.depth,0,pe,le,null):t.texImage2D(j,V,ye,Ee,De,0,pe,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),ie(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,j,ae.__webglTexture,0,Z(g)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,j,ae.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(M,g,N){if(n.bindRenderbuffer(n.RENDERBUFFER,M),g.depthBuffer){const G=g.depthTexture,j=G&&G.isDepthTexture?G.type:null,V=S(g.stencilBuffer,j),pe=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=Z(g);ie(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,V,g.width,g.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,V,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,V,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,M)}else{const G=g.textures;for(let j=0;j<G.length;j++){const V=G[j],pe=r.convert(V.format,V.colorSpace),le=r.convert(V.type),ye=T(V.internalFormat,pe,le,V.colorSpace),Te=Z(g);N&&ie(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,ye,g.width,g.height):ie(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,ye,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ye,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(g.depthTexture);G.__renderTarget=g,(!G.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ne(g.depthTexture,0);const j=G.__webglTexture,V=Z(g);if(g.depthTexture.format===pr)ie(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(g.depthTexture.format===mr)ie(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ct(M){const g=i.get(M),N=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const G=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",j)};G.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=G}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const G=M.texture.mipmaps;G&&G.length>0?Oe(g.__webglFramebuffer[0],M):Oe(g.__webglFramebuffer,M)}else if(N){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=n.createRenderbuffer(),Je(g.__webglDepthbuffer[G],M,!1);else{const j=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,V)}}else{const G=M.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Je(g.__webglDepthbuffer,M,!1);else{const j=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,V)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(M,g,N){const G=i.get(M);g!==void 0&&Ne(G.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&ct(M)}function L(M){const g=M.texture,N=i.get(M),G=i.get(g);M.addEventListener("dispose",R);const j=M.textures,V=M.isWebGLCubeRenderTarget===!0,pe=j.length>1;if(pe||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=g.version,o.memory.textures++),V){N.__webglFramebuffer=[];for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[le]=[];for(let ye=0;ye<g.mipmaps.length;ye++)N.__webglFramebuffer[le][ye]=n.createFramebuffer()}else N.__webglFramebuffer[le]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let le=0;le<g.mipmaps.length;le++)N.__webglFramebuffer[le]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(pe)for(let le=0,ye=j.length;le<ye;le++){const Te=i.get(j[le]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&ie(M)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let le=0;le<j.length;le++){const ye=j[le];N.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[le]);const Te=r.convert(ye.format,ye.colorSpace),ae=r.convert(ye.type),Ee=T(ye.internalFormat,Te,ae,ye.colorSpace,M.isXRRenderTarget===!0),De=Z(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Ee,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,N.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Je(N.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),He(n.TEXTURE_CUBE_MAP,g);for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0)for(let ye=0;ye<g.mipmaps.length;ye++)Ne(N.__webglFramebuffer[le][ye],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye);else Ne(N.__webglFramebuffer[le],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(g)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let le=0,ye=j.length;le<ye;le++){const Te=j[le],ae=i.get(Te);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),He(n.TEXTURE_2D,Te),Ne(N.__webglFramebuffer,M,Te,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),m(Te)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(le=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,G.__webglTexture),He(le,g),g.mipmaps&&g.mipmaps.length>0)for(let ye=0;ye<g.mipmaps.length;ye++)Ne(N.__webglFramebuffer[ye],M,g,n.COLOR_ATTACHMENT0,le,ye);else Ne(N.__webglFramebuffer,M,g,n.COLOR_ATTACHMENT0,le,0);m(g)&&h(le),t.unbindTexture()}M.depthBuffer&&ct(M)}function y(M){const g=M.textures;for(let N=0,G=g.length;N<G;N++){const j=g[N];if(m(j)){const V=A(M),pe=i.get(j).__webglTexture;t.bindTexture(V,pe),h(V),t.unbindTexture()}}}const re=[],K=[];function Q(M){if(M.samples>0){if(ie(M)===!1){const g=M.textures,N=M.width,G=M.height;let j=n.COLOR_BUFFER_BIT;const V=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(M),le=g.length>1;if(le)for(let Te=0;Te<g.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ye=M.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Te=0;Te<g.length;Te++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Te]);const ae=i.get(g[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,N,G,0,0,N,G,j,n.NEAREST),l===!0&&(re.length=0,K.length=0,re.push(n.COLOR_ATTACHMENT0+Te),M.depthBuffer&&M.resolveDepthBuffer===!1&&(re.push(V),K.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,K)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Te=0;Te<g.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Te]);const ae=i.get(g[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Z(M){return Math.min(s.maxSamples,M.samples)}function ie(M){const g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function J(M){const g=o.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function W(M,g){const N=M.colorSpace,G=M.format,j=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==Ps&&N!==_i&&(st.getTransfer(N)===dt?(G!==bn||j!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}function ve(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=X,this.setTexture2D=ne,this.setTexture2DArray=$,this.setTexture3D=te,this.setTextureCube=H,this.rebindTextures=C,this.setupRenderTarget=L,this.updateRenderTargetMipmap=y,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=ie}function IS(n,e){function t(i,s=_i){let r;const o=st.getTransfer(s);if(i===zn)return n.UNSIGNED_BYTE;if(i===nc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ic)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Af)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wf)return n.BYTE;if(i===Tf)return n.SHORT;if(i===fr)return n.UNSIGNED_SHORT;if(i===tc)return n.INT;if(i===Yi)return n.UNSIGNED_INT;if(i===ti)return n.FLOAT;if(i===Mr)return n.HALF_FLOAT;if(i===Rf)return n.ALPHA;if(i===Cf)return n.RGB;if(i===bn)return n.RGBA;if(i===pr)return n.DEPTH_COMPONENT;if(i===mr)return n.DEPTH_STENCIL;if(i===Pf)return n.RED;if(i===sc)return n.RED_INTEGER;if(i===Df)return n.RG;if(i===rc)return n.RG_INTEGER;if(i===oc)return n.RGBA_INTEGER;if(i===ro||i===oo||i===ao||i===lo)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ol||i===al||i===ll||i===cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ul||i===dl||i===fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ul||i===dl)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hl||i===pl||i===ml||i===gl||i===_l||i===xl||i===vl||i===Ml||i===Sl||i===bl||i===yl||i===El||i===wl||i===Tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===hl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ml)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_l)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ml)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===El)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===co||i===Al||i===Rl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===co)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lf||i===Cl||i===Pl||i===Dl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===co)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const US=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NS=`
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

}`;class FS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new tn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yi({vertexShader:US,fragmentShader:NS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new yr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OS extends Fs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null;const v=new FS,m=t.getContextAttributes();let h=null,A=null;const T=[],S=[],I=new tt;let P=null;const R=new fn;R.viewport=new wt;const U=new fn;U.viewport=new wt;const b=[R,U],x=new n0;let D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let he=T[se];return he===void 0&&(he=new Sa,T[se]=he),he.getTargetRaySpace()},this.getControllerGrip=function(se){let he=T[se];return he===void 0&&(he=new Sa,T[se]=he),he.getGripSpace()},this.getHand=function(se){let he=T[se];return he===void 0&&(he=new Sa,T[se]=he),he.getHandSpace()};function z(se){const he=S.indexOf(se.inputSource);if(he===-1)return;const Ce=T[he];Ce!==void 0&&(Ce.update(se.inputSource,se.frame,c||o),Ce.dispatchEvent({type:se.type,data:se.inputSource}))}function ee(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",ne);for(let se=0;se<T.length;se++){const he=S[se];he!==null&&(S[se]=null,T[se].disconnect(he))}D=null,X=null,v.reset(),e.setRenderTarget(h),p=null,f=null,d=null,s=null,A=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,ge=null,Ne=null;m.depth&&(Ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=m.stencil?mr:pr,ge=m.stencil?hr:Yi);const Je={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(Je),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Ki(f.textureWidth,f.textureHeight,{format:bn,type:zn,depthTexture:new Xf(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ce),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Ki(p.framebufferWidth,p.framebufferHeight,{format:bn,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),nt.setContext(s),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ne(se){for(let he=0;he<se.removed.length;he++){const Ce=se.removed[he],ge=S.indexOf(Ce);ge>=0&&(S[ge]=null,T[ge].disconnect(Ce))}for(let he=0;he<se.added.length;he++){const Ce=se.added[he];let ge=S.indexOf(Ce);if(ge===-1){for(let Je=0;Je<T.length;Je++)if(Je>=S.length){S.push(Ce),ge=Je;break}else if(S[Je]===null){S[Je]=Ce,ge=Je;break}if(ge===-1)break}const Ne=T[ge];Ne&&Ne.connect(Ce)}}const $=new B,te=new B;function H(se,he,Ce){$.setFromMatrixPosition(he.matrixWorld),te.setFromMatrixPosition(Ce.matrixWorld);const ge=$.distanceTo(te),Ne=he.projectionMatrix.elements,Je=Ce.projectionMatrix.elements,Oe=Ne[14]/(Ne[10]-1),ct=Ne[14]/(Ne[10]+1),C=(Ne[9]+1)/Ne[5],L=(Ne[9]-1)/Ne[5],y=(Ne[8]-1)/Ne[0],re=(Je[8]+1)/Je[0],K=Oe*y,Q=Oe*re,Z=ge/(-y+re),ie=Z*-y;if(he.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(ie),se.translateZ(Z),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Ne[10]===-1)se.projectionMatrix.copy(he.projectionMatrix),se.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const J=Oe+Z,W=ct+Z,ve=K-ie,M=Q+(ge-ie),g=C*ct/W*J,N=L*ct/W*J;se.projectionMatrix.makePerspective(ve,M,g,N,J,W),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function fe(se,he){he===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(he.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let he=se.near,Ce=se.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(Ce=v.depthFar)),x.near=U.near=R.near=he,x.far=U.far=R.far=Ce,(D!==x.near||X!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,X=x.far),R.layers.mask=se.layers.mask|2,U.layers.mask=se.layers.mask|4,x.layers.mask=R.layers.mask|U.layers.mask;const ge=se.parent,Ne=x.cameras;fe(x,ge);for(let Je=0;Je<Ne.length;Je++)fe(Ne[Je],ge);Ne.length===2?H(x,R,U):x.projectionMatrix.copy(R.projectionMatrix),be(se,x,ge)};function be(se,he,Ce){Ce===null?se.matrix.copy(he.matrixWorld):(se.matrix.copy(Ce.matrixWorld),se.matrix.invert(),se.matrix.multiply(he.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(he.projectionMatrix),se.projectionMatrixInverse.copy(he.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=gr*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(se){l=se,f!==null&&(f.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let Re=null;function He(se,he){if(u=he.getViewerPose(c||o),_=he,u!==null){const Ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let ge=!1;Ce.length!==x.cameras.length&&(x.cameras.length=0,ge=!0);for(let Oe=0;Oe<Ce.length;Oe++){const ct=Ce[Oe];let C=null;if(p!==null)C=p.getViewport(ct);else{const y=d.getViewSubImage(f,ct);C=y.viewport,Oe===0&&(e.setRenderTargetTextures(A,y.colorTexture,y.depthStencilTexture),e.setRenderTarget(A))}let L=b[Oe];L===void 0&&(L=new fn,L.layers.enable(Oe),L.viewport=new wt,b[Oe]=L),L.matrix.fromArray(ct.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(ct.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(C.x,C.y,C.width,C.height),Oe===0&&(x.matrix.copy(L.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ge===!0&&x.cameras.push(L)}const Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const Oe=d.getDepthInformation(Ce[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(e,Oe,s.renderState)}}for(let Ce=0;Ce<T.length;Ce++){const ge=S[Ce],Ne=T[Ce];ge!==null&&Ne!==void 0&&Ne.update(ge,he,c||o)}Re&&Re(se,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}const nt=new Yf;nt.setAnimationLoop(He),this.setAnimationLoop=function(se){Re=se},this.dispose=function(){}}}const Ii=new Hn,BS=new yt;function kS(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Vf(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,A,T,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),d(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(r(m,h),_(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),v(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,A,T):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===en&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===en&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const A=e.get(h),T=A.envMap,S=A.envMapRotation;T&&(m.envMap.value=T,Ii.copy(S),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(BS.makeRotationFromEuler(Ii)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,A,T){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*A,m.scale.value=T*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,A){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===en&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const A=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function zS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const S=T.program;i.uniformBlockBinding(A,S)}function c(A,T){let S=s[A.id];S===void 0&&(_(A),S=u(A),s[A.id]=S,A.addEventListener("dispose",m));const I=T.program;i.updateUBOMapping(A,I);const P=e.render.frame;r[A.id]!==P&&(f(A),r[A.id]=P)}function u(A){const T=d();A.__bindingPointIndex=T;const S=n.createBuffer(),I=A.__size,P=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,I,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const T=s[A.id],S=A.uniforms,I=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let P=0,R=S.length;P<R;P++){const U=Array.isArray(S[P])?S[P]:[S[P]];for(let b=0,x=U.length;b<x;b++){const D=U[b];if(p(D,P,b,I)===!0){const X=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let ee=0;for(let ne=0;ne<z.length;ne++){const $=z[ne],te=v($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,X+ee,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,ee),ee+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,T,S,I){const P=A.value,R=T+"_"+S;if(I[R]===void 0)return typeof P=="number"||typeof P=="boolean"?I[R]=P:I[R]=P.clone(),!0;{const U=I[R];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return I[R]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function _(A){const T=A.uniforms;let S=0;const I=16;for(let R=0,U=T.length;R<U;R++){const b=Array.isArray(T[R])?T[R]:[T[R]];for(let x=0,D=b.length;x<D;x++){const X=b[x],z=Array.isArray(X.value)?X.value:[X.value];for(let ee=0,ne=z.length;ee<ne;ee++){const $=z[ee],te=v($),H=S%I,fe=H%te.boundary,be=H+fe;S+=fe,be!==0&&I-be<te.storage&&(S+=I-be),X.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=te.storage}}}const P=S%I;return P>0&&(S+=I-P),A.__size=S,A.__cache={},this}function v(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function h(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class HS{constructor(e={}){const{canvas:t=__(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let I=!1;this._outputColorSpace=an;let P=0,R=0,U=null,b=-1,x=null;const D=new wt,X=new wt;let z=null;const ee=new Ze(0);let ne=0,$=t.width,te=t.height,H=1,fe=null,be=null;const Re=new wt(0,0,$,te),He=new wt(0,0,$,te);let nt=!1;const se=new uc;let he=!1,Ce=!1;const ge=new yt,Ne=new yt,Je=new B,Oe=new wt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function L(){return U===null?H:1}let y=i;function re(E,O){return t.getContext(E,O)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ec}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",oe,!1),y===null){const O="webgl2";if(y=re(O,E),y===null)throw re(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let K,Q,Z,ie,J,W,ve,M,g,N,G,j,V,pe,le,ye,Te,ae,Ee,De,Le,me,Ge,F;function Me(){K=new Zv(y),K.init(),me=new IS(y,K),Q=new Wv(y,K,e,me),Z=new DS(y,K),Q.reverseDepthBuffer&&f&&Z.buffers.depth.setReversed(!0),ie=new eM(y),J=new xS,W=new LS(y,K,Z,J,Q,me,ie),ve=new $v(S),M=new jv(S),g=new o0(y),Ge=new Vv(y,g),N=new Jv(y,g,ie,Ge),G=new nM(y,N,g,ie),Ee=new tM(y,Q,W),ye=new Xv(J),j=new _S(S,ve,M,K,Q,Ge,ye),V=new kS(S,J),pe=new MS,le=new TS(K),ae=new Hv(S,ve,M,Z,G,p,l),Te=new CS(S,G,Q),F=new zS(y,ie,Q,Z),De=new Gv(y,K,ie),Le=new Qv(y,K,ie),ie.programs=j.programs,S.capabilities=Q,S.extensions=K,S.properties=J,S.renderLists=pe,S.shadowMap=Te,S.state=Z,S.info=ie}Me();const ce=new OS(S,y);this.xr=ce,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const E=K.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=K.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize($,te,!1))},this.getSize=function(E){return E.set($,te)},this.setSize=function(E,O,q=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,te=O,t.width=Math.floor(E*H),t.height=Math.floor(O*H),q===!0&&(t.style.width=E+"px",t.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set($*H,te*H).floor()},this.setDrawingBufferSize=function(E,O,q){$=E,te=O,H=q,t.width=Math.floor(E*q),t.height=Math.floor(O*q),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(Re)},this.setViewport=function(E,O,q,Y){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,O,q,Y),Z.viewport(D.copy(Re).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(He)},this.setScissor=function(E,O,q,Y){E.isVector4?He.set(E.x,E.y,E.z,E.w):He.set(E,O,q,Y),Z.scissor(X.copy(He).multiplyScalar(H).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(E){Z.setScissorTest(nt=E)},this.setOpaqueSort=function(E){fe=E},this.setTransparentSort=function(E){be=E},this.getClearColor=function(E){return E.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,q=!0){let Y=0;if(E){let k=!1;if(U!==null){const de=U.texture.format;k=de===oc||de===rc||de===sc}if(k){const de=U.texture.type,Se=de===zn||de===Yi||de===fr||de===hr||de===nc||de===ic,Ue=ae.getClearColor(),Ae=ae.getClearAlpha(),We=Ue.r,Xe=Ue.g,Be=Ue.b;Se?(_[0]=We,_[1]=Xe,_[2]=Be,_[3]=Ae,y.clearBufferuiv(y.COLOR,0,_)):(v[0]=We,v[1]=Xe,v[2]=Be,v[3]=Ae,y.clearBufferiv(y.COLOR,0,v))}else Y|=y.COLOR_BUFFER_BIT}O&&(Y|=y.DEPTH_BUFFER_BIT),q&&(Y|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ae.dispose(),pe.dispose(),le.dispose(),J.dispose(),ve.dispose(),M.dispose(),G.dispose(),Ge.dispose(),F.dispose(),j.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",hc),ce.removeEventListener("sessionend",pc),Ei.stop()};function Pe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const E=ie.autoReset,O=Te.enabled,q=Te.autoUpdate,Y=Te.needsUpdate,k=Te.type;Me(),ie.autoReset=E,Te.enabled=O,Te.autoUpdate=q,Te.needsUpdate=Y,Te.type=k}function oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ie(E){const O=E.target;O.removeEventListener("dispose",Ie),$e(O)}function $e(E){_t(E),J.remove(E)}function _t(E){const O=J.get(E).programs;O!==void 0&&(O.forEach(function(q){j.releaseProgram(q)}),E.isShaderMaterial&&j.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,q,Y,k,de){O===null&&(O=ct);const Se=k.isMesh&&k.matrixWorld.determinant()<0,Ue=th(E,O,q,Y,k);Z.setMaterial(Y,Se);let Ae=q.index,We=1;if(Y.wireframe===!0){if(Ae=N.getWireframeAttribute(q),Ae===void 0)return;We=2}const Xe=q.drawRange,Be=q.attributes.position;let Qe=Xe.start*We,ut=(Xe.start+Xe.count)*We;de!==null&&(Qe=Math.max(Qe,de.start*We),ut=Math.min(ut,(de.start+de.count)*We)),Ae!==null?(Qe=Math.max(Qe,0),ut=Math.min(ut,Ae.count)):Be!=null&&(Qe=Math.max(Qe,0),ut=Math.min(ut,Be.count));const Et=ut-Qe;if(Et<0||Et===1/0)return;Ge.setup(k,Y,Ue,q,Ae);let xt,ht=De;if(Ae!==null&&(xt=g.get(Ae),ht=Le,ht.setIndex(xt)),k.isMesh)Y.wireframe===!0?(Z.setLineWidth(Y.wireframeLinewidth*L()),ht.setMode(y.LINES)):ht.setMode(y.TRIANGLES);else if(k.isLine){let ze=Y.linewidth;ze===void 0&&(ze=1),Z.setLineWidth(ze*L()),k.isLineSegments?ht.setMode(y.LINES):k.isLineLoop?ht.setMode(y.LINE_LOOP):ht.setMode(y.LINE_STRIP)}else k.isPoints?ht.setMode(y.POINTS):k.isSprite&&ht.setMode(y.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))ht.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ze=k._multiDrawStarts,bt=k._multiDrawCounts,it=k._multiDrawCount,nn=Ae?g.get(Ae).bytesPerElement:1,Zi=J.get(Y).currentProgram.getUniforms();for(let sn=0;sn<it;sn++)Zi.setValue(y,"_gl_DrawID",sn),ht.render(ze[sn]/nn,bt[sn])}else if(k.isInstancedMesh)ht.renderInstances(Qe,Et,k.count);else if(q.isInstancedBufferGeometry){const ze=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,bt=Math.min(q.instanceCount,ze);ht.renderInstances(Qe,Et,bt)}else ht.render(Qe,Et)};function at(E,O,q){E.transparent===!0&&E.side===Qt&&E.forceSinglePass===!1?(E.side=en,E.needsUpdate=!0,Tr(E,O,q),E.side=bi,E.needsUpdate=!0,Tr(E,O,q),E.side=Qt):Tr(E,O,q)}this.compile=function(E,O,q=null){q===null&&(q=E),h=le.get(q),h.init(O),T.push(h),q.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),E!==q&&E.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),h.setupLights();const Y=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const de=k.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){const Ue=de[Se];at(Ue,q,k),Y.add(Ue)}else at(de,q,k),Y.add(de)}),h=T.pop(),Y},this.compileAsync=function(E,O,q=null){const Y=this.compile(E,O,q);return new Promise(k=>{function de(){if(Y.forEach(function(Se){J.get(Se).currentProgram.isReady()&&Y.delete(Se)}),Y.size===0){k(E);return}setTimeout(de,10)}K.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let mn=null;function Gn(E){mn&&mn(E)}function hc(){Ei.stop()}function pc(){Ei.start()}const Ei=new Yf;Ei.setAnimationLoop(Gn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(E){mn=E,ce.setAnimationLoop(E),E===null?Ei.stop():Ei.start()},ce.addEventListener("sessionstart",hc),ce.addEventListener("sessionend",pc),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(O),O=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,O,U),h=le.get(E,T.length),h.init(O),T.push(h),Ne.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),se.setFromProjectionMatrix(Ne),Ce=this.localClippingEnabled,he=ye.init(this.clippingPlanes,Ce),m=pe.get(E,A.length),m.init(),A.push(m),ce.enabled===!0&&ce.isPresenting===!0){const de=S.xr.getDepthSensingMesh();de!==null&&Vo(de,O,-1/0,S.sortObjects)}Vo(E,O,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(fe,be),C=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,C&&ae.addToRenderList(m,E),this.info.render.frame++,he===!0&&ye.beginShadows();const q=h.state.shadowsArray;Te.render(q,E,O),he===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,k=m.transmissive;if(h.setupLights(),O.isArrayCamera){const de=O.cameras;if(k.length>0)for(let Se=0,Ue=de.length;Se<Ue;Se++){const Ae=de[Se];gc(Y,k,E,Ae)}C&&ae.render(E);for(let Se=0,Ue=de.length;Se<Ue;Se++){const Ae=de[Se];mc(m,E,Ae,Ae.viewport)}}else k.length>0&&gc(Y,k,E,O),C&&ae.render(E),mc(m,E,O);U!==null&&R===0&&(W.updateMultisampleRenderTarget(U),W.updateRenderTargetMipmap(U)),E.isScene===!0&&E.onAfterRender(S,E,O),Ge.resetDefaultState(),b=-1,x=null,T.pop(),T.length>0?(h=T[T.length-1],he===!0&&ye.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Vo(E,O,q,Y){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||se.intersectsSprite(E)){Y&&Oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ne);const Se=G.update(E),Ue=E.material;Ue.visible&&m.push(E,Se,Ue,q,Oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||se.intersectsObject(E))){const Se=G.update(E),Ue=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Oe.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Oe.copy(Se.boundingSphere.center)),Oe.applyMatrix4(E.matrixWorld).applyMatrix4(Ne)),Array.isArray(Ue)){const Ae=Se.groups;for(let We=0,Xe=Ae.length;We<Xe;We++){const Be=Ae[We],Qe=Ue[Be.materialIndex];Qe&&Qe.visible&&m.push(E,Se,Qe,q,Oe.z,Be)}}else Ue.visible&&m.push(E,Se,Ue,q,Oe.z,null)}}const de=E.children;for(let Se=0,Ue=de.length;Se<Ue;Se++)Vo(de[Se],O,q,Y)}function mc(E,O,q,Y){const k=E.opaque,de=E.transmissive,Se=E.transparent;h.setupLightsView(q),he===!0&&ye.setGlobalState(S.clippingPlanes,q),Y&&Z.viewport(D.copy(Y)),k.length>0&&wr(k,O,q),de.length>0&&wr(de,O,q),Se.length>0&&wr(Se,O,q),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function gc(E,O,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[Y.id]===void 0&&(h.state.transmissionRenderTarget[Y.id]=new Ki(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Mr:zn,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const de=h.state.transmissionRenderTarget[Y.id],Se=Y.viewport||D;de.setSize(Se.z*S.transmissionResolutionScale,Se.w*S.transmissionResolutionScale);const Ue=S.getRenderTarget(),Ae=S.getActiveCubeFace(),We=S.getActiveMipmapLevel();S.setRenderTarget(de),S.getClearColor(ee),ne=S.getClearAlpha(),ne<1&&S.setClearColor(16777215,.5),S.clear(),C&&ae.render(q);const Xe=S.toneMapping;S.toneMapping=Mi;const Be=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),h.setupLightsView(Y),he===!0&&ye.setGlobalState(S.clippingPlanes,Y),wr(E,q,Y),W.updateMultisampleRenderTarget(de),W.updateRenderTargetMipmap(de),K.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ut=0,Et=O.length;ut<Et;ut++){const xt=O[ut],ht=xt.object,ze=xt.geometry,bt=xt.material,it=xt.group;if(bt.side===Qt&&ht.layers.test(Y.layers)){const nn=bt.side;bt.side=en,bt.needsUpdate=!0,_c(ht,q,Y,ze,bt,it),bt.side=nn,bt.needsUpdate=!0,Qe=!0}}Qe===!0&&(W.updateMultisampleRenderTarget(de),W.updateRenderTargetMipmap(de))}S.setRenderTarget(Ue,Ae,We),S.setClearColor(ee,ne),Be!==void 0&&(Y.viewport=Be),S.toneMapping=Xe}function wr(E,O,q){const Y=O.isScene===!0?O.overrideMaterial:null;for(let k=0,de=E.length;k<de;k++){const Se=E[k],Ue=Se.object,Ae=Se.geometry,We=Se.group;let Xe=Se.material;Xe.allowOverride===!0&&Y!==null&&(Xe=Y),Ue.layers.test(q.layers)&&_c(Ue,O,q,Ae,Xe,We)}}function _c(E,O,q,Y,k,de){E.onBeforeRender(S,O,q,Y,k,de),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(S,O,q,Y,E,de),k.transparent===!0&&k.side===Qt&&k.forceSinglePass===!1?(k.side=en,k.needsUpdate=!0,S.renderBufferDirect(q,O,Y,k,E,de),k.side=bi,k.needsUpdate=!0,S.renderBufferDirect(q,O,Y,k,E,de),k.side=Qt):S.renderBufferDirect(q,O,Y,k,E,de),E.onAfterRender(S,O,q,Y,k,de)}function Tr(E,O,q){O.isScene!==!0&&(O=ct);const Y=J.get(E),k=h.state.lights,de=h.state.shadowsArray,Se=k.state.version,Ue=j.getParameters(E,k.state,de,O,q),Ae=j.getProgramCacheKey(Ue);let We=Y.programs;Y.environment=E.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(E.isMeshStandardMaterial?M:ve).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,We===void 0&&(E.addEventListener("dispose",Ie),We=new Map,Y.programs=We);let Xe=We.get(Ae);if(Xe!==void 0){if(Y.currentProgram===Xe&&Y.lightsStateVersion===Se)return vc(E,Ue),Xe}else Ue.uniforms=j.getUniforms(E),E.onBeforeCompile(Ue,S),Xe=j.acquireProgram(Ue,Ae),We.set(Ae,Xe),Y.uniforms=Ue.uniforms;const Be=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=ye.uniform),vc(E,Ue),Y.needsLights=ih(E),Y.lightsStateVersion=Se,Y.needsLights&&(Be.ambientLightColor.value=k.state.ambient,Be.lightProbe.value=k.state.probe,Be.directionalLights.value=k.state.directional,Be.directionalLightShadows.value=k.state.directionalShadow,Be.spotLights.value=k.state.spot,Be.spotLightShadows.value=k.state.spotShadow,Be.rectAreaLights.value=k.state.rectArea,Be.ltc_1.value=k.state.rectAreaLTC1,Be.ltc_2.value=k.state.rectAreaLTC2,Be.pointLights.value=k.state.point,Be.pointLightShadows.value=k.state.pointShadow,Be.hemisphereLights.value=k.state.hemi,Be.directionalShadowMap.value=k.state.directionalShadowMap,Be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Be.spotShadowMap.value=k.state.spotShadowMap,Be.spotLightMatrix.value=k.state.spotLightMatrix,Be.spotLightMap.value=k.state.spotLightMap,Be.pointShadowMap.value=k.state.pointShadowMap,Be.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=Xe,Y.uniformsList=null,Xe}function xc(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=uo.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function vc(E,O){const q=J.get(E);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function th(E,O,q,Y,k){O.isScene!==!0&&(O=ct),W.resetTextureUnits();const de=O.fog,Se=Y.isMeshStandardMaterial?O.environment:null,Ue=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ps,Ae=(Y.isMeshStandardMaterial?M:ve).get(Y.envMap||Se),We=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xe=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Be=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,ut=!!q.morphAttributes.color;let Et=Mi;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Et=S.toneMapping);const xt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ht=xt!==void 0?xt.length:0,ze=J.get(Y),bt=h.state.lights;if(he===!0&&(Ce===!0||E!==x)){const Gt=E===x&&Y.id===b;ye.setState(Y,E,Gt)}let it=!1;Y.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==bt.state.version||ze.outputColorSpace!==Ue||k.isBatchedMesh&&ze.batching===!1||!k.isBatchedMesh&&ze.batching===!0||k.isBatchedMesh&&ze.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ze.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ze.instancing===!1||!k.isInstancedMesh&&ze.instancing===!0||k.isSkinnedMesh&&ze.skinning===!1||!k.isSkinnedMesh&&ze.skinning===!0||k.isInstancedMesh&&ze.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ze.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ze.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ze.instancingMorph===!1&&k.morphTexture!==null||ze.envMap!==Ae||Y.fog===!0&&ze.fog!==de||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ye.numPlanes||ze.numIntersection!==ye.numIntersection)||ze.vertexAlphas!==We||ze.vertexTangents!==Xe||ze.morphTargets!==Be||ze.morphNormals!==Qe||ze.morphColors!==ut||ze.toneMapping!==Et||ze.morphTargetsCount!==ht)&&(it=!0):(it=!0,ze.__version=Y.version);let nn=ze.currentProgram;it===!0&&(nn=Tr(Y,O,k));let Zi=!1,sn=!1,zs=!1;const vt=nn.getUniforms(),cn=ze.uniforms;if(Z.useProgram(nn.program)&&(Zi=!0,sn=!0,zs=!0),Y.id!==b&&(b=Y.id,sn=!0),Zi||x!==E){Z.buffers.depth.getReversed()?(ge.copy(E.projectionMatrix),v_(ge),M_(ge),vt.setValue(y,"projectionMatrix",ge)):vt.setValue(y,"projectionMatrix",E.projectionMatrix),vt.setValue(y,"viewMatrix",E.matrixWorldInverse);const Zt=vt.map.cameraPosition;Zt!==void 0&&Zt.setValue(y,Je.setFromMatrixPosition(E.matrixWorld)),Q.logarithmicDepthBuffer&&vt.setValue(y,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&vt.setValue(y,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,sn=!0,zs=!0)}if(k.isSkinnedMesh){vt.setOptional(y,k,"bindMatrix"),vt.setOptional(y,k,"bindMatrixInverse");const Gt=k.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),vt.setValue(y,"boneTexture",Gt.boneTexture,W))}k.isBatchedMesh&&(vt.setOptional(y,k,"batchingTexture"),vt.setValue(y,"batchingTexture",k._matricesTexture,W),vt.setOptional(y,k,"batchingIdTexture"),vt.setValue(y,"batchingIdTexture",k._indirectTexture,W),vt.setOptional(y,k,"batchingColorTexture"),k._colorsTexture!==null&&vt.setValue(y,"batchingColorTexture",k._colorsTexture,W));const un=q.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Ee.update(k,q,nn),(sn||ze.receiveShadow!==k.receiveShadow)&&(ze.receiveShadow=k.receiveShadow,vt.setValue(y,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(cn.envMap.value=Ae,cn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(cn.envMapIntensity.value=O.environmentIntensity),sn&&(vt.setValue(y,"toneMappingExposure",S.toneMappingExposure),ze.needsLights&&nh(cn,zs),de&&Y.fog===!0&&V.refreshFogUniforms(cn,de),V.refreshMaterialUniforms(cn,Y,H,te,h.state.transmissionRenderTarget[E.id]),uo.upload(y,xc(ze),cn,W)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(uo.upload(y,xc(ze),cn,W),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&vt.setValue(y,"center",k.center),vt.setValue(y,"modelViewMatrix",k.modelViewMatrix),vt.setValue(y,"normalMatrix",k.normalMatrix),vt.setValue(y,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Gt=Y.uniformsGroups;for(let Zt=0,Go=Gt.length;Zt<Go;Zt++){const wi=Gt[Zt];F.update(wi,nn),F.bind(wi,nn)}}return nn}function nh(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function ih(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,O,q){const Y=J.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),J.get(E.texture).__webglTexture=O,J.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const q=J.get(E);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0};const sh=y.createFramebuffer();this.setRenderTarget=function(E,O=0,q=0){U=E,P=O,R=q;let Y=!0,k=null,de=!1,Se=!1;if(E){const Ae=J.get(E);if(Ae.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(y.FRAMEBUFFER,null),Y=!1;else if(Ae.__webglFramebuffer===void 0)W.setupRenderTarget(E);else if(Ae.__hasExternalTextures)W.rebindTextures(E,J.get(E.texture).__webglTexture,J.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Be=E.depthTexture;if(Ae.__boundDepthTexture!==Be){if(Be!==null&&J.has(Be)&&(E.width!==Be.image.width||E.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(E)}}const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Se=!0);const Xe=J.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xe[O])?k=Xe[O][q]:k=Xe[O],de=!0):E.samples>0&&W.useMultisampledRTT(E)===!1?k=J.get(E).__webglMultisampledFramebuffer:Array.isArray(Xe)?k=Xe[q]:k=Xe,D.copy(E.viewport),X.copy(E.scissor),z=E.scissorTest}else D.copy(Re).multiplyScalar(H).floor(),X.copy(He).multiplyScalar(H).floor(),z=nt;if(q!==0&&(k=sh),Z.bindFramebuffer(y.FRAMEBUFFER,k)&&Y&&Z.drawBuffers(E,k),Z.viewport(D),Z.scissor(X),Z.setScissorTest(z),de){const Ae=J.get(E.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ae.__webglTexture,q)}else if(Se){const Ae=J.get(E.texture),We=O;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Ae.__webglTexture,q,We)}else if(E!==null&&q!==0){const Ae=J.get(E.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Ae.__webglTexture,q)}b=-1},this.readRenderTargetPixels=function(E,O,q,Y,k,de,Se,Ue=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=J.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){Z.bindFramebuffer(y.FRAMEBUFFER,Ae);try{const We=E.textures[Ue],Xe=We.format,Be=We.type;if(!Q.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-Y&&q>=0&&q<=E.height-k&&(E.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Ue),y.readPixels(O,q,Y,k,me.convert(Xe),me.convert(Be),de))}finally{const We=U!==null?J.get(U).__webglFramebuffer:null;Z.bindFramebuffer(y.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(E,O,q,Y,k,de,Se,Ue=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=J.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae)if(O>=0&&O<=E.width-Y&&q>=0&&q<=E.height-k){Z.bindFramebuffer(y.FRAMEBUFFER,Ae);const We=E.textures[Ue],Xe=We.format,Be=We.type;if(!Q.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Qe),y.bufferData(y.PIXEL_PACK_BUFFER,de.byteLength,y.STREAM_READ),E.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Ue),y.readPixels(O,q,Y,k,me.convert(Xe),me.convert(Be),0);const ut=U!==null?J.get(U).__webglFramebuffer:null;Z.bindFramebuffer(y.FRAMEBUFFER,ut);const Et=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await x_(y,Et,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Qe),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,de),y.deleteBuffer(Qe),y.deleteSync(Et),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,q=0){const Y=Math.pow(2,-q),k=Math.floor(E.image.width*Y),de=Math.floor(E.image.height*Y),Se=O!==null?O.x:0,Ue=O!==null?O.y:0;W.setTexture2D(E,0),y.copyTexSubImage2D(y.TEXTURE_2D,q,0,0,Se,Ue,k,de),Z.unbindTexture()};const rh=y.createFramebuffer(),oh=y.createFramebuffer();this.copyTextureToTexture=function(E,O,q=null,Y=null,k=0,de=null){de===null&&(k!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=k,k=0):de=0);let Se,Ue,Ae,We,Xe,Be,Qe,ut,Et;const xt=E.isCompressedTexture?E.mipmaps[de]:E.image;if(q!==null)Se=q.max.x-q.min.x,Ue=q.max.y-q.min.y,Ae=q.isBox3?q.max.z-q.min.z:1,We=q.min.x,Xe=q.min.y,Be=q.isBox3?q.min.z:0;else{const un=Math.pow(2,-k);Se=Math.floor(xt.width*un),Ue=Math.floor(xt.height*un),E.isDataArrayTexture?Ae=xt.depth:E.isData3DTexture?Ae=Math.floor(xt.depth*un):Ae=1,We=0,Xe=0,Be=0}Y!==null?(Qe=Y.x,ut=Y.y,Et=Y.z):(Qe=0,ut=0,Et=0);const ht=me.convert(O.format),ze=me.convert(O.type);let bt;O.isData3DTexture?(W.setTexture3D(O,0),bt=y.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(W.setTexture2DArray(O,0),bt=y.TEXTURE_2D_ARRAY):(W.setTexture2D(O,0),bt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,O.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,O.unpackAlignment);const it=y.getParameter(y.UNPACK_ROW_LENGTH),nn=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Zi=y.getParameter(y.UNPACK_SKIP_PIXELS),sn=y.getParameter(y.UNPACK_SKIP_ROWS),zs=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,xt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,xt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,We),y.pixelStorei(y.UNPACK_SKIP_ROWS,Xe),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Be);const vt=E.isDataArrayTexture||E.isData3DTexture,cn=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const un=J.get(E),Gt=J.get(O),Zt=J.get(un.__renderTarget),Go=J.get(Gt.__renderTarget);Z.bindFramebuffer(y.READ_FRAMEBUFFER,Zt.__webglFramebuffer),Z.bindFramebuffer(y.DRAW_FRAMEBUFFER,Go.__webglFramebuffer);for(let wi=0;wi<Ae;wi++)vt&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,J.get(E).__webglTexture,k,Be+wi),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,J.get(O).__webglTexture,de,Et+wi)),y.blitFramebuffer(We,Xe,Se,Ue,Qe,ut,Se,Ue,y.DEPTH_BUFFER_BIT,y.NEAREST);Z.bindFramebuffer(y.READ_FRAMEBUFFER,null),Z.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||J.has(E)){const un=J.get(E),Gt=J.get(O);Z.bindFramebuffer(y.READ_FRAMEBUFFER,rh),Z.bindFramebuffer(y.DRAW_FRAMEBUFFER,oh);for(let Zt=0;Zt<Ae;Zt++)vt?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,un.__webglTexture,k,Be+Zt):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,un.__webglTexture,k),cn?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Gt.__webglTexture,de,Et+Zt):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Gt.__webglTexture,de),k!==0?y.blitFramebuffer(We,Xe,Se,Ue,Qe,ut,Se,Ue,y.COLOR_BUFFER_BIT,y.NEAREST):cn?y.copyTexSubImage3D(bt,de,Qe,ut,Et+Zt,We,Xe,Se,Ue):y.copyTexSubImage2D(bt,de,Qe,ut,We,Xe,Se,Ue);Z.bindFramebuffer(y.READ_FRAMEBUFFER,null),Z.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else cn?E.isDataTexture||E.isData3DTexture?y.texSubImage3D(bt,de,Qe,ut,Et,Se,Ue,Ae,ht,ze,xt.data):O.isCompressedArrayTexture?y.compressedTexSubImage3D(bt,de,Qe,ut,Et,Se,Ue,Ae,ht,xt.data):y.texSubImage3D(bt,de,Qe,ut,Et,Se,Ue,Ae,ht,ze,xt):E.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,de,Qe,ut,Se,Ue,ht,ze,xt.data):E.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,de,Qe,ut,xt.width,xt.height,ht,xt.data):y.texSubImage2D(y.TEXTURE_2D,de,Qe,ut,Se,Ue,ht,ze,xt);y.pixelStorei(y.UNPACK_ROW_LENGTH,it),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,nn),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Zi),y.pixelStorei(y.UNPACK_SKIP_ROWS,sn),y.pixelStorei(y.UNPACK_SKIP_IMAGES,zs),de===0&&O.generateMipmaps&&y.generateMipmap(bt),Z.unbindTexture()},this.copyTextureToTexture3D=function(E,O,q=null,Y=null,k=0){return ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,q,Y,k)},this.initRenderTarget=function(E){J.get(E).__webglFramebuffer===void 0&&W.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?W.setTextureCube(E,0):E.isData3DTexture?W.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?W.setTexture2DArray(E,0):W.setTexture2D(E,0),Z.unbindTexture()},this.resetState=function(){P=0,R=0,U=null,Z.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}const Pn={score:!1,challenge:!0},VS={class:"pointer-events-none absolute inset-0 z-10 p-4 text-white"},GS={class:"absolute left-4 top-4 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur"},WS={class:"mt-1 text-sm font-medium"},XS={key:0,class:"absolute right-4 top-44 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/45 px-3 py-2.5 backdrop-blur"},$S={class:"grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5"},qS={class:"min-w-0"},YS={class:"mt-0.5 text-sm font-semibold"},KS={class:"text-[11px] text-white/50"},jS={class:"absolute bottom-4 left-4 grid grid-cols-2 gap-2 sm:grid-cols-4"},ZS={class:"rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur"},JS={class:"mt-1 text-sm font-semibold"},QS={class:"rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur"},eb={class:"mt-1 text-sm font-semibold"},tb={class:"rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur"},nb={class:"mt-1 text-sm font-semibold"},ib={key:0,class:"rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur"},sb={class:"mt-1 text-sm font-semibold"},rb={__name:"FlightHUD",props:{telemetry:{type:Object,required:!0},statusText:{type:String,default:""},windMode:{type:String,default:"none"},cameraBearing:{type:[Number,String],default:0}},setup(n){const e=n,t=Mt(()=>e.windMode!=="none"),i=Mt(()=>Number(e.cameraBearing)||0),s=Mt(()=>{const l=Number(e.telemetry.windDirection)||0;return o(l+i.value)}),r=Mt(()=>{const l=o(Number(e.telemetry.windDirection)||0);return l>=337.5||l<22.5?"吹向北方":l<67.5?"吹向東北":l<112.5?"吹向東方":l<157.5?"吹向東南":l<202.5?"吹向南方":l<247.5?"吹向西南":l<292.5?"吹向西方":"吹向西北"});function o(l){return(l%360+360)%360}function a(l,c=1){const u=Number(l);return Number.isFinite(u)?u.toFixed(c):"0.0"}return(l,c)=>(we(),Fe("div",VS,[w("div",GS,[c[0]||(c[0]=w("p",{class:"text-[10px] uppercase tracking-[0.2em] text-white/45"}," Flight status ",-1)),w("p",WS,xe(n.statusText),1)]),t.value?(we(),Fe("div",XS,[w("div",$S,[(we(),Fe("svg",{class:"h-6 w-6 transition-transform duration-300",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:kt({transform:`rotate(${s.value}deg)`})},[...c[1]||(c[1]=[w("path",{d:"M12 20V5M12 5L7.5 9.5M12 5L16.5 9.5",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],4))]),w("div",qS,[c[2]||(c[2]=w("p",{class:"text-[10px] uppercase tracking-[0.18em] text-white/45"}," Wind drift ",-1)),w("p",YS,xe(a(n.telemetry.windSpeed,2))+" m/s ",1),w("p",KS,xe(r.value),1)])])):Rt("",!0),w("div",jS,[w("div",ZS,[c[3]||(c[3]=w("p",{class:"text-[9px] uppercase tracking-[0.16em] text-white/40"}," Altitude ",-1)),w("p",JS,xe(a(n.telemetry.altitude))+" m ",1)]),w("div",QS,[c[4]||(c[4]=w("p",{class:"text-[9px] uppercase tracking-[0.16em] text-white/40"}," Speed ",-1)),w("p",eb,xe(a(n.telemetry.speed))+" m/s ",1)]),w("div",tb,[c[5]||(c[5]=w("p",{class:"text-[9px] uppercase tracking-[0.16em] text-white/40"}," Distance ",-1)),w("p",nb,xe(a(n.telemetry.distance))+" m ",1)]),ke(Pn).score?(we(),Fe("div",ib,[c[6]||(c[6]=w("p",{class:"text-[9px] uppercase tracking-[0.16em] text-white/40"}," Score ",-1)),w("p",sb,xe(Math.round(Number(n.telemetry.score)||0)),1)])):Rt("",!0)])]))}},ob={class:"pointer-events-none flex flex-col items-center"},ab={class:"relative size-32 rounded-full border border-white/15 bg-black/60 shadow-2xl backdrop-blur-md"},lb={class:"absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/10 bg-black/80"},cb={class:"text-sm font-bold text-white"},ub={class:"text-[9px] text-white/50"},db={__name:"CompassHUD",props:{heading:{type:Number,default:0}},setup(n){const e=n;function t(o){const a=Number(o);return Number.isFinite(a)?(a%360+360)%360:0}const i=Mt(()=>t(e.heading)),s=Mt(()=>{const o=i.value;return o>=337.5||o<22.5?"N":o<67.5?"NE":o<112.5?"E":o<157.5?"SE":o<202.5?"S":o<247.5?"SW":o<292.5?"W":"NW"}),r=je(t(e.heading));return Mn(()=>e.heading,o=>{const a=t(o),l=t(r.value);let c=a-l;c>180?c-=360:c<-180&&(c+=360),r.value+=c},{immediate:!0}),(o,a)=>(we(),Fe("div",ob,[w("div",ab,[a[1]||(a[1]=cr('<div class="absolute inset-3 rounded-full border border-white/10"></div><div class="absolute left-1/2 top-3 h-2 w-px -translate-x-1/2 bg-white/50"></div><div class="absolute bottom-3 left-1/2 h-2 w-px -translate-x-1/2 bg-white/30"></div><div class="absolute left-3 top-1/2 h-px w-2 -translate-y-1/2 bg-white/30"></div><div class="absolute right-3 top-1/2 h-px w-2 -translate-y-1/2 bg-white/30"></div><span class="absolute left-1/2 top-2 -translate-x-1/2 text-xs font-bold text-lime-300"> N </span><span class="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-white/70"> E </span><span class="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-semibold text-white/50"> S </span><span class="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-white/70"> W </span>',9)),w("div",{class:"absolute inset-0 origin-center transition-transform duration-100 ease-linear",style:kt({transform:`rotate(${r.value}deg)`})},[...a[0]||(a[0]=[w("svg",{viewBox:"0 0 128 128",class:"size-full"},[w("path",{d:`M64 29
               L57 44
               L64 40
               L71 44
               Z`,fill:"#bef264"})],-1)])],4),w("div",lb,[w("span",cb,xe(i.value.toFixed(0))+"° ",1),w("span",ub,xe(s.value),1)])]),a[2]||(a[2]=w("div",{class:"mt-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/50 backdrop-blur"}," Drone Heading ",-1))]))}},fb={key:0,class:"pointer-events-none absolute left-4 top-28 w-72 rounded-2xl border border-white/10 bg-black/60 p-4 text-white backdrop-blur"},hb={class:"flex items-center justify-between gap-3"},pb={class:"rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/55"},mb={class:"mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3"},gb={class:"rounded-xl bg-white/5 p-3 text-center"},_b={class:"mt-1 text-2xl font-semibold"},xb={class:"text-xs text-white/45"},vb={class:"rounded-xl bg-lime-300/10 p-3 text-center"},Mb={class:"mt-1 text-3xl font-semibold text-lime-200"},Sb={class:"text-xs text-lime-100/70"},bb={key:0,class:"mt-4 rounded-xl border border-lime-300/25 bg-lime-300/10 p-3 text-center"},yb={key:1,class:"mt-4"},Eb={class:"flex items-center justify-between text-xs text-white/50"},wb={class:"mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"},Tb={__name:"ChallengeHUD",props:{challenge:{type:Object,default:null}},setup(n){return(e,t)=>n.challenge?(we(),Fe("div",fb,[w("div",hb,[t[0]||(t[0]=w("p",{class:"text-[10px] font-semibold uppercase tracking-[0.24em] text-lime-300/70"}," Random Heading ",-1)),w("span",pb," ROUND "+xe(n.challenge.round),1)]),w("div",mb,[w("div",gb,[t[1]||(t[1]=w("p",{class:"text-[10px] uppercase tracking-[0.16em] text-white/40"},"機頭",-1)),w("p",_b,xe(n.challenge.headingLabel),1),w("p",xb,xe(n.challenge.headingDegrees)+"°",1)]),t[3]||(t[3]=w("div",{class:"text-white/30"},"＋",-1)),w("div",vb,[t[2]||(t[2]=w("p",{class:"text-[10px] uppercase tracking-[0.16em] text-lime-200/60"},"前往",-1)),w("p",Mb,xe(n.challenge.targetArrow),1),w("p",Sb,xe(n.challenge.targetLabel),1)])]),n.challenge.completed?(we(),Fe("div",bb,[...t[4]||(t[4]=[w("p",{class:"text-sm font-semibold text-lime-200"},"完成，準備下一題",-1),w("p",{class:"mt-1 text-xs text-white/50"},"機頭將重新隨機轉向",-1)])])):(we(),Fe("div",yb,[w("div",Eb,[t[5]||(t[5]=w("span",null,"保持機頭，僅用 Pitch／Roll",-1)),w("span",null,xe(n.challenge.progress.toFixed(1))+" / "+xe(n.challenge.targetDistance.toFixed(1))+" m",1)]),w("div",wb,[w("div",{class:"h-full rounded-full bg-lime-300 transition-[width] duration-100",style:kt({width:`${Math.min(n.challenge.progress/n.challenge.targetDistance*100,100)}%`})},null,4)])])),t[6]||(t[6]=w("p",{class:"mt-3 text-xs leading-5 text-white/45"}," Yaw 已鎖定。請勿先轉正機頭，直接讓機體側移或倒退前往世界方向。 ",-1))])):Rt("",!0)}},Ab={key:0,class:"pointer-events-none absolute bottom-6 left-1/2 z-30 w-[min(90vw,600px)] -translate-x-1/2"},Rb={class:"rounded-2xl border border-white/10 bg-black/75 px-6 py-4 shadow-2xl backdrop-blur-md"},Cb={key:0,class:"flex h-20 items-center justify-center"},Pb={key:1,class:"flex h-20 items-center justify-center"},Db={class:"flex items-center justify-center gap-3"},Lb={class:"text-xl font-black tracking-[0.08em] text-white"},Ib={key:0,class:"text-xl font-medium leading-none text-white/55"},Ub={key:1,class:"font-mono text-lg font-semibold tabular-nums text-lime-200"},Nb={class:"mt-5"},Fb={class:"relative h-7"},Ob={class:"relative mt-1 h-4 font-mono text-[9px] tabular-nums text-white/25"},Bb={__name:"StickTrainingHUD",props:{exercise:{type:Object,default:null},completed:{type:Boolean,default:!1},round:{type:Number,default:0},errorType:{type:String,default:null},errorMessage:{type:String,default:""},waitingForCenter:{type:Boolean,default:!1},waitingForStartCenter:{type:Boolean,default:!1},waitingForNextRound:{type:Boolean,default:!1},successMin:{type:Number,default:.4},successMax:{type:Number,default:.6},successHoldProgress:{type:Number,default:0}},setup(n){const e=n,t=Mt(()=>{if(!e.exercise)return 0;const f=Number(e.exercise.currentValue??0),p=Number(e.exercise.direction??1);return Math.max(0,Math.min(1,f*p))}),i=Mt(()=>Math.round(t.value*100)),s=Mt(()=>{const f=e.exercise?.targetValue;return f==null?null:Math.round(Number(f)*100)}),r=Mt(()=>s.value===null),o=Mt(()=>Math.round(e.successMin*100)),a=Mt(()=>Math.round(e.successMax*100)),l=Mt(()=>Math.max(0,(e.successMax-e.successMin)*100)),c=Mt(()=>t.value>=e.successMin&&t.value<=e.successMax),u=Mt(()=>l.value*Math.max(0,Math.min(1,e.successHoldProgress))),d=Mt(()=>e.errorType?"error":e.completed||e.waitingForCenter||c.value?"success":"normal");return(f,p)=>n.exercise||n.waitingForStartCenter||n.waitingForNextRound?(we(),Fe("div",Ab,[w("section",Rb,[n.waitingForStartCenter?(we(),Fe("div",Cb,[...p[0]||(p[0]=[w("div",{class:"flex items-center gap-3 text-sky-200"},[w("span",{class:"text-xl"}," ◎ "),w("span",{class:"text-sm font-semibold"}," 請將搖桿回到中心 ")],-1)])])):n.waitingForNextRound&&!n.exercise?(we(),Fe("div",Pb,[...p[1]||(p[1]=[w("div",{class:"flex items-center gap-3 text-lime-200"},[w("span",{class:"text-lg"}," ✓ "),w("span",{class:"text-sm font-semibold"}," 準備下一題 ")],-1)])])):n.exercise?(we(),Fe(gt,{key:2},[w("div",Db,[w("h2",Lb,xe(n.exercise.title),1),r.value?(we(),Fe("span",Ib,xe(n.exercise.arrow),1)):(we(),Fe("span",Ub,xe(s.value)+"% ",1))]),w("div",Nb,[w("div",Fb,[p[2]||(p[2]=w("div",{class:"absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-white/10"},null,-1)),w("div",{class:Kt(["absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-lime-300/20",c.value?"shadow-[0_0_14px_rgba(190,242,100,0.22)]":""]),style:kt({left:`${o.value}%`,width:`${l.value}%`})},null,6),w("div",{class:"absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-lime-300 transition-[width] duration-75",style:kt({left:`${o.value}%`,width:`${u.value}%`})},null,4),w("div",{class:"absolute top-1/2 h-5 w-px -translate-y-1/2 bg-lime-300/70",style:kt({left:`${o.value}%`})},null,4),w("div",{class:"absolute top-1/2 h-5 w-px -translate-y-1/2 bg-lime-300/70",style:kt({left:`${a.value}%`})},null,4),w("div",{class:Kt(["absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black transition-[left,background-color,box-shadow] duration-75",{"bg-white":d.value==="normal","bg-lime-300 shadow-[0_0_14px_rgba(190,242,100,0.75)]":d.value==="success","bg-red-300 shadow-[0_0_12px_rgba(252,165,165,0.65)]":d.value==="error"}]),style:kt({left:`${i.value}%`})},null,6)]),w("div",Ob,[p[3]||(p[3]=w("span",{class:"absolute left-0"}," 0% ",-1)),w("span",{class:"absolute -translate-x-1/2 text-lime-200/65",style:kt({left:`${o.value}%`})},xe(o.value)+"% ",5),w("span",{class:"absolute -translate-x-1/2 text-lime-200/65",style:kt({left:`${a.value}%`})},xe(a.value)+"% ",5),p[4]||(p[4]=w("span",{class:"absolute right-0"}," 100% ",-1))])])],64)):Rt("",!0)])])):Rt("",!0)}},kb=[{degrees:0,radians:0,key:"north",label:"北",shortLabel:"N"},{degrees:90,radians:Math.PI/2,key:"east",label:"東",shortLabel:"E"},{degrees:180,radians:Math.PI,key:"south",label:"南",shortLabel:"S"},{degrees:270,radians:-Math.PI/2,key:"west",label:"西",shortLabel:"W"}],zb=[{key:"north",label:"北方",arrow:"↑",vector:{x:0,z:-1}},{key:"east",label:"東方",arrow:"→",vector:{x:1,z:0}},{key:"south",label:"南方",arrow:"↓",vector:{x:0,z:1}},{key:"west",label:"西方",arrow:"←",vector:{x:-1,z:0}}],Hb={id:"random-heading-cardinal",title:"Random Heading",description:"保持機頭方向，使用 Pitch／Roll 前往指定的世界方向。",distance:3,successDelay:.65},Vb=[Hb];class Gb{constructor(){this.challenge=null,this.heading=null,this.direction=null,this.startPosition=new B,this.targetPosition=new B,this.progress=0,this.round=0,this.phase="idle",this.successTimer=0,this.lastPair=""}start(e,t){return this.challenge=e,this.round=0,this.lastPair="",this.nextRound(t)}nextRound(e){if(!this.challenge)return this.getState();let t,i,s;do t=ed(kb),i=ed(zb),s=`${t.key}:${i.key}`;while(s===this.lastPair);return this.lastPair=s,this.heading=t,this.direction=i,this.round+=1,this.progress=0,this.phase="active",this.successTimer=0,this.startPosition.copy(e),this.targetPosition.set(e.x+i.vector.x*this.challenge.distance,e.y,e.z+i.vector.z*this.challenge.distance),this.getState()}reset(){return this.challenge=null,this.heading=null,this.direction=null,this.startPosition.set(0,0,0),this.targetPosition.set(0,0,0),this.progress=0,this.round=0,this.phase="idle",this.successTimer=0,this.lastPair="",this.getState()}update(e,t){if(!this.challenge||!this.direction)return this.getState();if(this.phase==="success")return this.successTimer+=e,this.getState();const i=t.clone().sub(this.startPosition),{x:s,z:r}=this.direction.vector;return this.progress=Math.max(0,i.x*s+i.z*r),this.progress>=this.challenge.distance&&(this.progress=this.challenge.distance,this.phase="success",this.successTimer=0),this.getState()}shouldAdvance(){return this.phase==="success"&&this.successTimer>=this.challenge.successDelay}getHeadingRadians(){return this.heading?.radians??0}getTargetPosition(){return this.targetPosition}getState(){return{active:!!this.challenge,id:this.challenge?.id??null,title:this.challenge?.title??"",description:this.challenge?.description??"",round:this.round,phase:this.phase,headingDegrees:this.heading?.degrees??0,headingLabel:this.heading?.label??"",headingShortLabel:this.heading?.shortLabel??"",targetDirection:this.direction?.key??"",targetLabel:this.direction?.label??"",targetArrow:this.direction?.arrow??"",targetDistance:this.challenge?.distance??0,progress:this.progress,completed:this.phase==="success"}}}function ed(n){return n[Math.floor(Math.random()*n.length)]}const La={KeyW:["throttle",1],KeyS:["throttle",-1],KeyA:["yaw",1],KeyD:["yaw",-1],ArrowUp:["pitch",1],ArrowDown:["pitch",-1],ArrowLeft:["roll",-1],ArrowRight:["roll",1]};function Wb({onPause:n,onReset:e,onHelp:t}){const i=Tn({throttle:.5,yaw:0,pitch:0,roll:0}),s=new Set;function r(){i.throttle=.5,i.yaw=0,i.pitch=0,i.roll=0;for(const c of s){const u=La[c];if(!u)continue;const[d,f]=u;if(d==="throttle"){i.throttle=f>0?1:0;continue}i[d]+=f}i.yaw=Math.max(-1,Math.min(1,i.yaw)),i.pitch=Math.max(-1,Math.min(1,i.pitch)),i.roll=Math.max(-1,Math.min(1,i.roll))}function o(c){if(La[c.code]){c.preventDefault(),s.add(c.code),r();return}c.repeat||(c.code==="Space"?(c.preventDefault(),n?.()):c.code==="KeyR"?e?.():c.code==="KeyH"&&t?.())}function a(c){La[c.code]&&(c.preventDefault(),s.delete(c.code),r())}function l(){s.clear(),r()}return Us(()=>{window.addEventListener("keydown",o,{passive:!1}),window.addEventListener("keyup",a,{passive:!1}),window.addEventListener("blur",l)}),Ns(()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",a),window.removeEventListener("blur",l)}),{input:i,clearInput:l}}const eo={roll:0,pitch:1,throttle:2,yaw:3};function Xb(){const n=je(!1),e=je(""),t=je(null),{normalizeAxis:i}=Ql(),s=Tn({throttle:0,yaw:0,pitch:0,roll:0});let r=null;function o(){s.throttle=0,s.yaw=0,s.pitch=0,s.roll=0}function a(){const f=navigator.getGamepads?.()??[];return t.value!==null&&f[t.value]?f[t.value]:Array.from(f).find(p=>p&&p.axes.length>=4)??null}function l(){const f=a();if(!f){n.value=!1,e.value="",t.value=null,o();return}n.value=!0,e.value=f.id,t.value=f.index,s.roll=i("roll",f.axes[eo.roll]),s.pitch=i("pitch",f.axes[eo.pitch]),s.yaw=-i("yaw",f.axes[eo.yaw]),s.throttle=i("throttle",f.axes[eo.throttle])}function c(){l(),r=requestAnimationFrame(c)}function u(f){f.gamepad.axes.length>=4&&(t.value=f.gamepad.index,e.value=f.gamepad.id,n.value=!0)}function d(f){f.gamepad.index===t.value&&(n.value=!1,t.value=null,e.value="",o())}return Us(()=>{window.addEventListener("gamepadconnected",u),window.addEventListener("gamepaddisconnected",d),r=requestAnimationFrame(c)}),Ns(()=>{window.removeEventListener("gamepadconnected",u),window.removeEventListener("gamepaddisconnected",d),r!==null&&cancelAnimationFrame(r)}),{input:s,connected:n,gamepadId:e,gamepadIndex:t,clearInput:o}}const td=.2,Ia=.1,nd=.4,id=.6,sd=[.25,.5,.75],rd=.05,od=1e3,$b=600,ad=[{id:"pitch-forward",axis:"pitch",direction:1,title:"FORWARD",label:"前進",stick:"右搖桿",arrow:"↑",instruction:"將右搖桿向前推"},{id:"pitch-backward",axis:"pitch",direction:-1,title:"BACKWARD",label:"後退",stick:"右搖桿",arrow:"↓",instruction:"將右搖桿向後拉"},{id:"roll-left",axis:"roll",direction:-1,title:"ROLL LEFT",label:"左移",stick:"右搖桿",arrow:"←",instruction:"將右搖桿向左推"},{id:"roll-right",axis:"roll",direction:1,title:"ROLL RIGHT",label:"右移",stick:"右搖桿",arrow:"→",instruction:"將右搖桿向右推"},{id:"yaw-left",axis:"yaw",direction:1,title:"YAW LEFT",label:"左轉",stick:"左搖桿",arrow:"↺",instruction:"將左搖桿向左推"},{id:"yaw-right",axis:"yaw",direction:-1,title:"YAW RIGHT",label:"右轉",stick:"左搖桿",arrow:"↻",instruction:"將左搖桿向右推"}],qb={pitch:"Pitch",roll:"Roll",yaw:"Yaw"};function ld(n){return n[Math.floor(Math.random()*n.length)]}function Yb(n){const e=je(null),t=je(!1),i=je(0),s=je(!1),r=je(!1),o=je(!1),a=je(null),l=je(""),c=je(nd),u=je(id),d=je(null),f=je(0);let p=null,_=null,v=null,m=null;function h(){return Number(n?.value??n??1)}function A(){a.value=null,l.value=""}function T(){p!==null&&(clearTimeout(p),p=null)}function S(){m=null,f.value=0}function I(){if(h()===2){const ee=sd.filter($=>$!==v),ne=ld(ee.length?ee:sd);v=ne,d.value=ne,c.value=Math.max(0,ne-rd),u.value=Math.min(1,ne+rd);return}d.value=null,c.value=nd,u.value=id}function P(z){return Math.abs(Number(z?.pitch??0))<=Ia&&Math.abs(Number(z?.roll??0))<=Ia&&Math.abs(Number(z?.yaw??0))<=Ia}function R(){T();const z=ad.filter(ne=>ne.id!==_),ee=ld(z.length?z:ad);_=ee.id,I(),e.value={...ee,currentValue:0,targetValue:d.value},t.value=!1,r.value=!1,o.value=!1,A(),S(),i.value+=1}function U(){o.value||(o.value=!0,p=setTimeout(()=>{o.value=!1,R()},$b))}function b(){T(),e.value=null,i.value=0,_=null,v=null,t.value=!1,s.value=!0,r.value=!1,o.value=!1,A(),S(),I()}function x(){T(),e.value=null,t.value=!1,s.value=!1,r.value=!1,o.value=!1,A(),S()}function D(z,ee){return["pitch","roll","yaw"].find($=>$===ee?!1:Math.abs(Number(z?.[$]??0))>=td)}function X(z){if(s.value){P(z)&&(s.value=!1,U());return}if(o.value||!e.value)return;if(r.value){P(z)&&(r.value=!1,S(),U());return}if(t.value)return;const ee=e.value,ne=Number(z?.[ee.axis]??0);ee.currentValue=ne;const $=ne*ee.direction;if($<=-td){S(),a.value="wrong-direction",l.value="方向相反，請往指定方向操作";return}const te=D(z,ee.axis);if(te){S(),a.value="wrong-axis",l.value=`目前操作的是 ${qb[te]}`;return}if($>u.value){S(),a.value="over-input",l.value="操作過量，請減少推桿幅度";return}if($<c.value){S(),A();return}A();const H=performance.now();m===null&&(m=H);const fe=H-m;f.value=Math.min(1,fe/od),!(fe<od)&&(f.value=1,t.value=!0,r.value=!0,A())}return n?.value!==void 0&&Mn(n,()=>{b()}),{currentExercise:e,completed:t,round:i,waitingForStartCenter:s,waitingForCenter:r,waitingForNextRound:o,errorType:a,errorMessage:l,successMin:c,successMax:u,targetValue:d,successHoldProgress:f,start:b,stop:x,update:X}}class Kb{constructor(e){this.camera=e,this.offset=new B(9.5,7.5,11.5),this.targetPosition=new B,this.lookTarget=new B,this.preset=null}setPreset(e,t,i,s=!1){this.preset=e;const r=lt.degToRad(t.degrees);this.offset.set(Math.sin(r)*e.distance,e.height,Math.cos(r)*e.distance),s&&(this.camera.position.set(i.x+this.offset.x,this.offset.y,i.z+this.offset.z),this.camera.lookAt(i.x,e.lookHeight,i.z))}update(e,t){if(!this.preset)return;const i=1-Math.exp(-2.1*e);this.targetPosition.set(t.x+this.offset.x,this.offset.y,t.z+this.offset.z),this.camera.position.lerp(this.targetPosition,i),this.lookTarget.set(t.x,Math.max(this.preset.lookHeight,t.y),t.z),this.camera.lookAt(this.lookTarget)}}function jb(n){return(lt.radToDeg(n)%360+360)%360}function Zb(n){const e=["↑","↗","→","↘","↓","↙","←","↖"],t=(n%360+360)%360;return e[Math.round(t/45)%8]}const Jb=new B(0,1,0);class Qb{constructor(e){this.drone=e,this.velocity=new B,this.localAcceleration=new B,this.worldAcceleration=new B,this.currentWindAcceleration=new B,this.state={yaw:0,pitchVisual:0,rollVisual:0},this.randomYawTimer=0}reset(e=0){this.velocity.set(0,0,0),this.localAcceleration.set(0,0,0),this.worldAcceleration.set(0,0,0),this.currentWindAcceleration.set(0,0,0),this.state.yaw=e,this.state.pitchVisual=0,this.state.rollVisual=0,this.randomYawTimer=0,this.drone.position.set(0,1.5,0),this.drone.rotation.set(0,-e,0)}update(e,t,i,s){const r=Number.isFinite(e)?lt.clamp(e,0,.05):0;this.updateRandomOrientation(r,s);const o=lt.degToRad(95);this.state.yaw-=t.yaw*o*r;const a=lt.degToRad(17),l=1-Math.exp(-9*r);this.state.pitchVisual=lt.lerp(this.state.pitchVisual,t.pitch*a,l),this.state.rollVisual=lt.lerp(this.state.rollVisual,-t.roll*a,l);const u=(t.throttle-.5)*2;this.localAcceleration.set(t.roll*4.4,u*4.1,-t.pitch*4.4),this.worldAcceleration.copy(this.localAcceleration).applyAxisAngle(Jb,-this.state.yaw),this.velocity.addScaledVector(this.worldAcceleration,r),this.updateWindAcceleration(i),this.velocity.addScaledVector(this.currentWindAcceleration,r);const d=Math.exp(-.66*r),f=Math.exp(-1.25*r);this.velocity.x*=d,this.velocity.z*=d,this.velocity.y*=f;const p=Math.hypot(this.velocity.x,this.velocity.z);if(p>5.3){const _=5.3/p;this.velocity.x*=_,this.velocity.z*=_}this.velocity.y=lt.clamp(this.velocity.y,-2.8,2.8),this.drone.position.addScaledVector(this.velocity,r),this.clampAltitude(),this.drone.rotation.set(this.state.pitchVisual,-this.state.yaw,this.state.rollVisual,"YXZ");for(const _ of this.drone.userData.rotors??[])_.rotation.y+=_.userData.spinDirection*(18+t.throttle*14)*r;return{altitude:this.drone.position.y,speed:this.velocity.length(),yaw:jb(this.state.yaw),distance:Math.hypot(this.drone.position.x,this.drone.position.z)}}updateWindAcceleration(e){if(!e||!Number.isFinite(e.x)||!Number.isFinite(e.y)||!Number.isFinite(e.z)){this.currentWindAcceleration.set(0,0,0);return}this.currentWindAcceleration.copy(e)}updateRandomOrientation(e,t){if(t!=="random"){this.randomYawTimer=0;return}if(this.randomYawTimer+=e,this.randomYawTimer>=8){const i=[45,90,135,180],s=i[Math.floor(Math.random()*i.length)];this.state.yaw+=lt.degToRad(s),this.randomYawTimer=0}}clampAltitude(){this.drone.position.y<.35&&(this.drone.position.y=.35,this.velocity.y<0&&(this.velocity.y=0)),this.drone.position.y>5.2&&(this.drone.position.y=5.2,this.velocity.y>0&&(this.velocity.y=0))}}const Qf=[{value:"angled",label:"斜俯視",distance:15,height:7.5,lookHeight:1.4},{value:"eye",label:"平視",distance:18,height:1.8,lookHeight:1.45},{value:"low",label:"低角度",distance:17,height:.75,lookHeight:1.65},{value:"high",label:"高角度俯視",distance:14,height:12.5,lookHeight:1.1}],Il=[{value:"front",label:"正面 0°",degrees:0},{value:"diagonal",label:"斜角 45°",degrees:45},{value:"right",label:"右側 90°",degrees:90},{value:"back",label:"背面 180°",degrees:180},{value:"left",label:"左側 −90°",degrees:-90}],ey=[{value:"none",label:"無風"},{value:"breeze",label:"穩定微風"},{value:"gusty",label:"變向陣風"}],ty=[{value:"free",label:"自由練習"},{value:"randomHeading",label:"方向訓練"},{value:"stickTraining1",label:"搖桿訓練 Lv.1"},{value:"stickTraining2",label:"搖桿訓練 Lv.2"}],ny=Tn({cameraHeight:"angled",cameraBearing:"front",windMode:"none",trainingMode:"free",showHeadingArrow:!0,showHelp:!0});function iy(){return ny}class sy{constructor(e=12){this.size=e,this.half=e/2,this.wasOutside=!1,this.count=0}reset(){this.wasOutside=!1,this.count=0}update(e){const t=Math.abs(e.x)>this.half||Math.abs(e.z)>this.half;return t&&!this.wasOutside&&(this.count+=1),this.wasOutside=t,{outside:t,count:this.count}}}class ry{constructor(e=6){this.zoneHalf=e,this.score=0}reset(){this.score=0}update(e,t,i){const s=lt.clamp(1-t/this.zoneHalf,0,1);return this.score=i?Math.max(0,this.score-e*35):this.score+e*(10+s*90),this.score}}class oy{constructor(){this.mode="none",this.baseDirection=0,this.currentDirection=0,this.targetDirection=0,this.baseSpeed=0,this.currentSpeed=0,this.targetSpeed=0,this.nextSpeedChangeAt=0,this.nextDirectionChangeAt=0,this.lastElapsedTime=0,this.acceleration=new B}reset(e="none"){return this.mode=e,this.lastElapsedTime=0,e==="none"?(this.baseDirection=0,this.currentDirection=0,this.targetDirection=0,this.baseSpeed=0,this.currentSpeed=0,this.targetSpeed=0,this.nextSpeedChangeAt=0,this.nextDirectionChangeAt=0,this.acceleration.set(0,0,0),this.getState()):(this.baseDirection=Math.random()*Math.PI*2,this.currentDirection=this.baseDirection,this.targetDirection=this.baseDirection,e==="gusty"?this.baseSpeed=.42:e==="gusty"?this.baseSpeed=.42:this.baseSpeed=.34,this.currentSpeed=this.baseSpeed,this.targetSpeed=this.baseSpeed,this.nextSpeedChangeAt=1.5,this.nextDirectionChangeAt=e==="gusty"?4:3,this.updateAcceleration(),this.getState())}update(e,t=0){const i=Number.isFinite(e)?lt.clamp(e,0,.05):0,s=Number.isFinite(t)?Math.max(0,t):0;if(this.mode==="none")return this.acceleration.set(0,0,0),this.lastElapsedTime=s,this.getState();s<this.lastElapsedTime&&(this.nextSpeedChangeAt=s+lt.randFloat(1.2,2.4),this.nextDirectionChangeAt=s+(this.mode==="gusty"?lt.randFloat(3,5):lt.randFloat(2.5,4))),this.lastElapsedTime=s,this.updateSpeedTarget(s),this.updateDirectionTarget(s);const r=this.mode==="gusty"?1.8:1.2,o=this.mode==="gusty"?1.6:.7;return this.currentSpeed=lt.damp(this.currentSpeed,this.targetSpeed,r,i),this.currentDirection=ly(this.currentDirection,this.targetDirection,o,i),this.updateAcceleration(),this.getState()}updateSpeedTarget(e){if(!(e<this.nextSpeedChangeAt))if(this.mode==="gusty"){const i=Math.random()<.35?lt.randFloat(1.25,1.7):lt.randFloat(.72,1.2);this.targetSpeed=this.baseSpeed*i,this.nextSpeedChangeAt=e+lt.randFloat(1.2,3)}else this.targetSpeed=this.baseSpeed*lt.randFloat(.78,1.18),this.nextSpeedChangeAt=e+lt.randFloat(1.8,3.8)}updateDirectionTarget(e){if(!(e<this.nextDirectionChangeAt))if(this.mode==="gusty"){const t=Math.random()<.5?-1:1,i=lt.randFloat(35,120),s=lt.degToRad(i*t);this.targetDirection=cd(this.currentDirection+s),this.baseDirection=this.targetDirection,this.nextDirectionChangeAt=e+lt.randFloat(5,10)}else{const t=lt.degToRad(lt.randFloat(-7,7));this.targetDirection=cd(this.baseDirection+t),this.nextDirectionChangeAt=e+lt.randFloat(3.5,6.5)}}updateAcceleration(){this.acceleration.set(Math.sin(this.currentDirection)*this.currentSpeed,0,-Math.cos(this.currentDirection)*this.currentSpeed)}getState(){return{acceleration:this.acceleration.clone(),speed:this.acceleration.length(),direction:ay(this.acceleration)}}}function ay(n){if(!n||n.lengthSq()===0)return 0;const e=Math.atan2(n.x,-n.z);return(lt.radToDeg(e)%360+360)%360}function ly(n,e,t,i){const s=Math.atan2(Math.sin(e-n),Math.cos(e-n));return n+s*(1-Math.exp(-t*i))}function cd(n){return Math.atan2(Math.sin(n),Math.cos(n))}function cy(){const n=new Vi,e=new Er(.34,.4,64),t=new Vn({color:16777215,transparent:!0,opacity:.42,side:Qt,depthWrite:!1,depthTest:!0}),i=new Ut(e,t);i.rotation.x=-Math.PI/2,i.position.y=.018,i.castShadow=!1,i.receiveShadow=!1,n.add(i);const s=new ko(.035,32),r=new Vn({color:16777215,transparent:!0,opacity:.55,side:Qt,depthWrite:!1}),o=new Ut(s,r);return o.rotation.x=-Math.PI/2,o.position.y=.019,o.castShadow=!1,o.receiveShadow=!1,n.add(o),n}function vn(n,e){const t=new Ut(n,e);return t.castShadow=!0,t.receiveShadow=!0,t}function uy(){const n=new Vi;n.name="trainer-drone";const e=new Bi({color:1514016,roughness:.5}),t=new Bi({color:14221118,roughness:.4}),i=new Bi({color:4804445,roughness:.6}),s=new Bi({color:329224,metalness:.2,roughness:.15}),r=new Bi({color:10133933,transparent:!0,opacity:.45,roughness:.5}),o=vn(new ii(.72,.22,.92),e);o.position.y=.06,n.add(o);const a=vn(new ii(.48,.17,.54),t);a.position.set(0,.22,-.1),n.add(a);const l=vn(new zo(.18,.48,4),t);l.rotation.x=-Math.PI/2,l.rotation.z=Math.PI/4,l.position.set(0,.13,-.68),n.add(l);const c=vn(new ii(.25,.18,.18),e);c.position.set(0,-.03,-.56),n.add(c);const u=vn(new $i(.07,.07,.055,24),s);u.rotation.x=Math.PI/2,u.position.set(0,-.03,-.665),n.add(u);const d=new ii(1.55,.09,.11),f=vn(d,t);f.rotation.y=Math.PI/4,f.position.y=.04,n.add(f);const p=vn(d,i);p.rotation.y=-Math.PI/4,p.position.y=.04,n.add(p);const _=[[-.56,.11,-.56],[.56,.11,-.56],[-.56,.11,.56],[.56,.11,.56]],v=[];_.forEach(([R,U,b],x)=>{const D=vn(new $i(.11,.13,.16,20),x<2?t:i);D.position.set(R,U,b),n.add(D);const X=vn(new $i(.36,.36,.018,36),r);X.position.set(R,U+.13,b),X.userData.spinDirection=x%2===0?1:-1,n.add(X),v.push(X)});const m=new Vn({color:15925109}),h=new Vn({color:16726344}),A=vn(new wo(.045,12,12),m);A.position.set(-.28,.11,-.48),n.add(A);const T=A.clone();T.position.x=.28,n.add(T);const S=vn(new wo(.045,12,12),h);S.position.set(-.28,.11,.48),n.add(S);const I=S.clone();I.position.x=.28,n.add(I);const P=new s0(new B(0,0,-1),new B(0,.55,0),1.1,14221118,.22,.13);return P.name="heading-arrow",n.add(P),n.userData.rotors=v,n.userData.headingArrow=P,n}function dy(){const n=new Vi,e=new Ut(new ko(.72,64),new Vn({color:10741301,transparent:!0,opacity:.12,side:Qt,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.position.y=.025;const t=new Ut(new Er(.58,.72,64),new Vn({color:14285213,transparent:!0,opacity:.9,side:Qt,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.position.y=.03,n.add(e,t),n.visible=!1,n}function fy(){const n=new X_;n.background=new Ze(592656),n.fog=new cc(592656,24,58);const e=new J_(13232127,2106410,1.45);n.add(e);const t=new t0(16777215,2.2);return t.position.set(8,14,6),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.left=-18,t.shadow.camera.right=18,t.shadow.camera.top=18,t.shadow.camera.bottom=-18,n.add(t),n}function hy(n,e=12){const t=new Ut(new yr(80,80),new Bi({color:1119515,roughness:.92}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);const i=new i0(80,80,3949647,2304563);i.position.y=.006,n.add(i);const s=e/2,r=[[-s,.03,-s],[s,.03,-s],[s,.03,s],[-s,.03,s]],o=r.map(([p,_,v])=>new B(p,_,v));o.push(o[0].clone());const a=new jt().setFromPoints(o),l=new Bo({color:14221118}),c=new dc(a,l);n.add(c);const u=new Ut(new Er(.38,.47,48),new Vn({color:14221118,side:Qt}));u.rotation.x=-Math.PI/2,u.position.y=.012,n.add(u);const d=new $i(.035,.035,1.8,12),f=new Bi({color:14221118});for(const[p,,_]of r){const v=new Ut(d,f);v.position.set(p,.9,_),v.castShadow=!0,n.add(v)}return{ground:t,grid:i,boundary:c,centerRing:u}}const py={class:"relative min-h-145 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl shadow-black/40"},my={key:3,class:"pointer-events-none absolute right-4 top-4 z-30 flex flex-col items-end gap-3"},gy={key:4,class:"pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs text-white/60 backdrop-blur"},Ua=12,_y={__name:"GameCanvas",props:{settings:Object,game:Object,controllerCalibrating:{type:Boolean,default:!1}},emits:["input-ready","control-source-ready","register-actions"],setup(n,{emit:e}){const t=n,i=e,s=je(null),r=Vb[0],o=je(null),a=je(0),l=Mt(()=>t.settings.trainingMode==="randomHeading"),c=Mt(()=>t.settings.trainingMode.startsWith("stickTraining")),u=Mt(()=>t.settings.trainingMode==="stickTraining2"?2:1);let d,f,p,_,v,m,h,A,T,S,I=0;const P=new oy,R=new sy(Ua),U=new ry(Ua/2),b=new Gb,{input:x,clearInput:D}=Wb({onPause:Q,onReset:K,onHelp:()=>{t.settings.showHelp=!t.settings.showHelp}}),{input:X,connected:z}=Xb();function ee(){return z.value?X:x}const ne=Mt(()=>z.value?"gamepad":"keyboard"),$=Tn({throttle:.5,yaw:0,pitch:0,roll:0}),{currentExercise:te,completed:H,round:fe,waitingForStartCenter:be,waitingForCenter:Re,waitingForNextRound:He,errorType:nt,errorMessage:se,successMin:he,successMax:Ce,successHoldProgress:ge,start:Ne,stop:Je,update:Oe}=Yb(u);function ct(M,g){return M.find(N=>N.value===g)??M[0]}function C(M){return M==="away"?0:M==="toward"?Math.PI:M==="left"?-Math.PI/2:M==="right"?Math.PI/2:M==="random"?Math.random()*Math.PI*2-Math.PI:h?.state.yaw??0}function L(){f=fy(),p=new fn(48,1,.1,100),d=new HS({antialias:!0}),d.domElement.style.width="100%",d.domElement.style.height="100%",d.domElement.style.display="block",d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.shadowMap.enabled=!0,d.shadowMap.type=bf,d.outputColorSpace=an,s.value.appendChild(d.domElement),hy(f,Ua),_=uy(),f.add(_),v=cy(),f.add(v),m=dy(),f.add(m),h=new Qb(_),A=new Kb(p),y(!0),K(),re(),T=new ResizeObserver(re),T.observe(s.value)}function y(M=!1){A&&A.setPreset(ct(Qf,t.settings.cameraHeight),ct(Il,t.settings.cameraBearing),_?.position??new B(0,1.5,0),M)}function re(){if(!d||!p||!s.value)return;const{clientWidth:M,clientHeight:g}=s.value;!M||!g||(d.setSize(M,g),p.aspect=M/g,p.updateProjectionMatrix())}function K(){if(!h)return;D(),t.game.paused.value=!1;let M=C(t.settings.trainingMode);Pn.challenge&&l.value&&(o.value=b.start(r,new B(0,1.5,0)),M=b.getHeadingRadians()),h.reset(M),a.value=(lt.radToDeg(M)+360)%360,P.reset(t.settings.windMode),R.reset(),Pn.score&&U.reset(),(!Pn.challenge||!l.value)&&(b.reset(),o.value=null),ie(),Object.assign(t.game.telemetry,{altitude:1.5,speed:0,yaw:0,distance:0,score:0,time:0,boundaryCount:0,outside:!1,windSpeed:0,windDirection:0}),Z(),y(!0)}function Q(){t.game.paused.value=!t.game.paused.value,D()}function Z(){!_||!v||v.position.set(_.position.x,0,_.position.z)}function ie(){if(!m)return;if(!Pn.challenge||!l.value||!o.value?.active){m.visible=!1;return}const M=b.getTargetPosition();m.position.set(M.x,0,M.z),m.visible=!0}function J(){h.reset(0),o.value=b.nextRound(_.position);const M=b.getHeadingRadians();h.reset(M),a.value=(lt.radToDeg(M)+360)%360,ie(),Z()}function W(M){S=requestAnimationFrame(W);const g=Math.min((M-I)/1e3||0,.033);if(I=M,!t.game.paused.value&&!t.controllerCalibrating){const N=t.game.telemetry;N.time+=g;const G=P.update(g,N.time),j=ee();Object.assign($,j),c.value&&Oe(j);let V=j;c.value?V={throttle:.5,yaw:0,pitch:0,roll:0}:Pn.challenge&&l.value&&(V={throttle:j.throttle,yaw:0,pitch:j.pitch,roll:j.roll});const pe=h.update(g,V,G.acceleration,Pn.challenge&&l.value?"free":t.settings.trainingMode);a.value=(Number(pe.yaw??0)+360)%360;const le=R.update(_.position);Pn.challenge&&l.value&&(o.value=b.update(g,_.position),b.shouldAdvance()&&J()),Object.assign(N,pe,{outside:le.outside,boundaryCount:le.count,windSpeed:G.speed,windDirection:G.direction}),N.score=Pn.score?U.update(g,N.distance,N.outside):0,A.update(g,_.position)}Z(),ie(),d.render(f,p)}function ve(){cancelAnimationFrame(S),T?.disconnect(),f?.traverse(M=>{M.geometry?.dispose(),(M.material?Array.isArray(M.material)?M.material:[M.material]:[]).forEach(N=>{N.dispose()})}),d?.dispose(),d?.domElement?.remove()}return Mn(()=>[t.settings.cameraHeight,t.settings.cameraBearing],()=>y(!1)),Mn(()=>t.settings.windMode,K),Mn(()=>t.settings.trainingMode,K),Mn(()=>t.settings.showHeadingArrow,M=>{_?.userData.headingArrow&&(_.userData.headingArrow.visible=M)}),Mn(ne,M=>{i("control-source-ready",M)},{immediate:!0}),Mn(()=>t.settings.trainingMode,()=>{if(c.value){Ne();return}Je()},{immediate:!0}),Us(async()=>{await $l(),L(),i("input-ready",$),i("register-actions",{reset:K,togglePause:Q}),S=requestAnimationFrame(W)}),Ns(ve),(M,g)=>(we(),Fe("div",py,[w("div",{ref_key:"canvasHost",ref:s,class:"absolute inset-0"},null,512),c.value?Rt("",!0):(we(),xi(rb,{key:0,telemetry:n.game.telemetry,"status-text":n.game.statusText.value,"wind-mode":n.settings.windMode,"camera-bearing":ct(ke(Il),n.settings.cameraBearing).degrees},null,8,["telemetry","status-text","wind-mode","camera-bearing"])),ke(Pn).challenge&&l.value?(we(),xi(Tb,{key:1,challenge:o.value},null,8,["challenge"])):Rt("",!0),c.value?(we(),xi(Bb,{key:2,exercise:ke(te),completed:ke(H),"waiting-for-start-center":ke(be),"waiting-for-center":ke(Re),"waiting-for-next-round":ke(He),round:ke(fe),"error-type":ke(nt),"error-message":ke(se),"success-min":ke(he),"success-max":ke(Ce),"success-hold-progress":ke(ge)},null,8,["exercise","completed","waiting-for-start-center","waiting-for-center","waiting-for-next-round","round","error-type","error-message","success-min","success-max","success-hold-progress"])):Rt("",!0),c.value?Rt("",!0):(we(),Fe("div",my,[Ft(db,{heading:a.value},null,8,["heading"])])),c.value?Rt("",!0):(we(),Fe("div",gy," 鏡頭只跟位置，不跟機頭旋轉 "))]))}},xy={class:"space-y-2"},vy={class:"flex items-center justify-between text-xs text-white/60"},My={class:"relative aspect-square w-24 rounded-full border border-white/15 bg-black/30"},ud={__name:"StickIndicator",props:{title:{type:String,required:!0},horizontalLabel:{type:String,required:!0},verticalLabel:{type:String,required:!0},x:{type:Number,default:0},y:{type:Number,default:0}},setup(n){return(e,t)=>(we(),Fe("div",xy,[w("div",vy,[w("span",null,xe(n.title),1),w("span",null,xe(n.horizontalLabel)+" / "+xe(n.verticalLabel),1)]),w("div",My,[t[0]||(t[0]=w("div",{class:"absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-white/10"},null,-1)),t[1]||(t[1]=w("div",{class:"absolute top-1/2 left-2 right-2 h-px -translate-y-1/2 bg-white/10"},null,-1)),w("div",{class:"absolute left-1/2 top-1/2 size-5 rounded-full border border-lime-200/80 bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.55)] transition-transform duration-75",style:kt({transform:`translate(calc(-50% + ${n.x*31}px), calc(-50% + ${-n.y*31}px))`})},null,4)])]))}},Sy={class:"rounded-2xl border border-white/10 bg-white/[0.035] p-4"},by={class:"mb-4 flex items-center justify-between gap-3"},yy={class:"flex items-center gap-3"},Ey={class:"flex items-center gap-2"},wy={class:"flex items-center gap-2 text-xs text-white/55"},Ty={class:"grid grid-cols-2 gap-3"},Ay={class:"mt-4 grid grid-cols-2 gap-2 text-xs text-white/55"},Ry={class:"rounded-xl bg-black/20 p-3"},Cy={key:0},Py={class:"rounded-xl bg-black/20 p-3"},Dy={key:0},Ly={__name:"ControlsPanel",props:{input:Object,settings:Object,controlSource:{type:String,default:"keyboard"}},setup(n){return(e,t)=>(we(),Fe("section",Sy,[w("div",by,[t[3]||(t[3]=w("div",null,[w("p",{class:"text-xs uppercase tracking-[0.2em] text-white/40"}," Mode 2 "),w("h2",{class:"mt-1 font-semibold"}," 控制輸入 ")],-1)),w("div",yy,[w("div",Ey,[t[1]||(t[1]=w("span",{class:"text-[10px] uppercase tracking-[0.14em] text-white/30"}," Input ",-1)),w("span",{class:Kt(["rounded-full border px-2.5 py-1 text-[10px] font-semibold",n.controlSource==="gamepad"?"border-lime-300/20 bg-lime-300/10 text-lime-200":"border-white/10 bg-white/5 text-white/45"])},xe(n.controlSource==="gamepad"?"🎮 LiteRadio":"⌨️ Keyboard"),3)]),w("label",wy,[Hd(w("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>n.settings.showHeadingArrow=i),type:"checkbox",class:"accent-lime-300"},null,512),[[Mm,n.settings.showHeadingArrow]]),t[2]||(t[2]=Ct(" 機頭箭頭 ",-1))])])]),w("div",Ty,[Ft(ud,{title:"左桿",x:-n.input.yaw,y:n.input.throttle*2-1,"x-label":"Yaw","y-label":"Throttle"},null,8,["x","y"]),Ft(ud,{title:"右桿",x:n.input.roll,y:n.input.pitch,"x-label":"Roll","y-label":"Pitch"},null,8,["x","y"])]),w("div",Ay,[n.controlSource==="gamepad"?(we(),Fe(gt,{key:0},[t[7]||(t[7]=w("div",{class:"rounded-xl bg-black/20 p-3"},[w("strong",{class:"text-white"}," 左桿 ↑ / ↓ "),w("br"),Ct(" Throttle ")],-1)),w("div",Ry,[t[4]||(t[4]=w("strong",{class:"text-white"}," 左桿 ← / → ",-1)),t[5]||(t[5]=w("br",null,null,-1)),t[6]||(t[6]=Ct(" Yaw ",-1)),n.settings.trainingMode==="randomHeading"?(we(),Fe("span",Cy," （本模式鎖定） ")):Rt("",!0)]),t[8]||(t[8]=w("div",{class:"rounded-xl bg-black/20 p-3"},[w("strong",{class:"text-white"}," 右桿 ↑ / ↓ "),w("br"),Ct(" Pitch ")],-1)),t[9]||(t[9]=w("div",{class:"rounded-xl bg-black/20 p-3"},[w("strong",{class:"text-white"}," 右桿 ← / → "),w("br"),Ct(" Roll ")],-1))],64)):(we(),Fe(gt,{key:1},[t[13]||(t[13]=w("div",{class:"rounded-xl bg-black/20 p-3"},[w("strong",{class:"text-white"}," W / S "),w("br"),Ct(" Throttle ")],-1)),w("div",Py,[t[10]||(t[10]=w("strong",{class:"text-white"}," A / D ",-1)),t[11]||(t[11]=w("br",null,null,-1)),t[12]||(t[12]=Ct(" Yaw ",-1)),n.settings.trainingMode==="randomHeading"?(we(),Fe("span",Dy," （本模式鎖定） ")):Rt("",!0)]),t[14]||(t[14]=w("div",{class:"rounded-xl bg-black/20 p-3"},[w("strong",{class:"text-white"}," ↑ / ↓ "),w("br"),Ct(" Pitch ")],-1)),t[15]||(t[15]=w("div",{class:"rounded-xl bg-black/20 p-3"},[w("strong",{class:"text-white"}," ← / → "),w("br"),Ct(" Roll ")],-1))],64))])]))}};function Iy(n=0){return{current:n,min:n,max:n,baseline:n}}function Uy(){const n=typeof navigator<"u"&&"getGamepads"in navigator,e=je(!1),t=je(null),i=je(""),s=je(""),r=je(0),o=Tn([]),a=Tn([]);let l=0;const c=Mt(()=>o.length),u=Mt(()=>a.length);function d(T){for(;o.length<T.axes.length;){const S=T.axes[o.length]??0;o.push(Iy(S))}o.length>T.axes.length&&o.splice(T.axes.length)}function f(T){e.value=!0,t.value=T.index,i.value=T.id||"Unknown gamepad",s.value=T.mapping||"none",r.value=T.timestamp||0,d(T),T.axes.forEach((S,I)=>{const P=o[I];P.current=S,P.min=Math.min(P.min,S),P.max=Math.max(P.max,S)}),a.splice(0,a.length,...T.buttons.map((S,I)=>({index:I,value:S.value,pressed:S.pressed,touched:S.touched})))}function p(){if(!n)return null;const T=navigator.getGamepads?.()??[];return t.value!=null&&T[t.value]?T[t.value]:Array.from(T).find(Boolean)??null}function _(){const T=p();T?f(T):(e.value=!1,t.value=null),l=requestAnimationFrame(_)}function v(T){t.value=T.gamepad.index,f(T.gamepad)}function m(T){t.value===T.gamepad.index&&(e.value=!1,t.value=null)}function h(){o.forEach(T=>{T.min=T.current,T.max=T.current})}function A(){o.forEach(T=>{T.baseline=T.current})}return Us(()=>{n&&(window.addEventListener("gamepadconnected",v),window.addEventListener("gamepaddisconnected",m),_())}),Ns(()=>{window.removeEventListener("gamepadconnected",v),window.removeEventListener("gamepaddisconnected",m),cancelAnimationFrame(l)}),{supported:n,connected:e,gamepadIndex:t,gamepadId:i,mapping:s,timestamp:r,axes:o,buttons:a,axisCount:c,buttonCount:u,resetRange:h,captureBaseline:A}}const Ny={class:"flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-sky-300/20 bg-[#11151c] shadow-2xl shadow-black/60"},Fy={class:"flex shrink-0 items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6"},Oy={class:"flex flex-wrap items-center gap-2"},By={class:"min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6"},ky={key:0,class:"rounded-xl border border-rose-300/20 bg-rose-300/10 p-3 text-sm leading-6 text-rose-100"},zy={class:"rounded-2xl border border-white/10 bg-black/25 p-4"},Hy={class:"flex items-center justify-between gap-3"},Vy={class:"mt-3 break-all text-sm font-medium leading-6 text-white/85"},Gy={class:"mt-3 grid grid-cols-2 gap-2 text-xs text-white/45 sm:grid-cols-4"},Wy={class:"font-mono text-white/75"},Xy={class:"font-mono text-white/75"},$y={class:"font-mono text-white/75"},qy={class:"font-mono text-white/75"},Yy={key:1,class:"mt-3 text-sm leading-6 text-white/55"},Ky={key:0,class:"mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"},jy={class:"flex items-center gap-2"},Zy={class:"rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-[10px] text-white/50"},Jy={class:"mt-4 flex flex-wrap gap-2"},Qy={class:"mt-4 grid gap-3 lg:grid-cols-2"},eE={class:"flex items-start justify-between gap-4"},tE={class:"flex flex-wrap items-center gap-2"},nE={class:"text-sm font-semibold text-white/80"},iE={class:"rounded-md border border-sky-300/15 bg-sky-300/[0.07] px-2 py-0.5 text-[11px] font-semibold text-sky-100"},sE={class:"mt-1 text-[11px] text-white/40"},rE={key:0,class:"text-right"},oE={class:"mt-0.5 font-mono text-sm font-semibold tabular-nums text-white/65"},aE={class:"mt-0.5 font-mono text-lg font-semibold tabular-nums text-lime-100"},lE={key:1,class:"font-mono text-base font-semibold tabular-nums text-sky-100"},cE={class:"relative mt-4 h-2 overflow-hidden rounded-full bg-white/10"},uE={class:"mt-3 grid grid-cols-3 gap-2 text-[11px] text-white/40"},dE={class:"mt-0.5 font-mono tabular-nums text-white/70"},fE={class:"text-center"},hE={class:"mt-0.5 font-mono tabular-nums text-white/70"},pE={class:"text-right"},mE={class:"mt-0.5 font-mono tabular-nums text-white/70"},gE={key:0,class:"mt-4 border-t border-white/[0.07] pt-3"},_E={class:"mt-2 grid grid-cols-3 gap-2 text-[10px]"},xE={class:"mt-0.5 font-mono text-white/55"},vE={class:"text-center"},ME={class:"text-white/30"},SE={class:"mt-0.5 font-mono text-white/55"},bE={class:"text-right"},yE={class:"mt-0.5 font-mono text-white/55"},EE={class:"mt-5"},wE={class:"mt-2 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8"},TE={class:"mt-1 text-[10px]"},AE={__name:"ControllerDebugPanel",emits:["close"],setup(n,{emit:e}){const t=e,{supported:i,connected:s,gamepadIndex:r,gamepadId:o,mapping:a,axes:l,buttons:c,axisCount:u,buttonCount:d,resetRange:f,captureBaseline:p}=Uy(),{calibration:_,normalizeAxis:v}=Ql(),m={0:{name:"Roll",description:"左移 / 右移",calibrationKey:"roll"},1:{name:"Pitch",description:"後移 / 前移",calibrationKey:"pitch"},2:{name:"Throttle",description:"下降 / 升高",calibrationKey:"throttle"},3:{name:"Yaw",description:"左轉 / 右轉",calibrationKey:"yaw"},4:{name:"SA",description:"兩段開關",calibrationKey:null},5:{name:"SB",description:"三段開關",calibrationKey:null},6:{name:"SC",description:"三段開關",calibrationKey:null},7:{name:"SD",description:"兩段開關",calibrationKey:null}};function h(P){return m[P]??{name:"Unknown",description:"尚未設定",calibrationKey:null}}function A(P){return Number(P??0).toFixed(4)}function T(P){return Math.min(100,Math.max(0,(Number(P??0)+1)/2*100))}function S(P,R){const U=h(P);if(!U.calibrationKey)return null;let b=v(U.calibrationKey,R);return U.calibrationKey==="yaw"&&(b=-b),b}function I(P){const R=h(P);return R.calibrationKey?_.axes[R.calibrationKey]??null:null}return(P,R)=>(we(),Fe("div",{class:"fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm",onClick:R[3]||(R[3]=Jl(U=>t("close"),["self"]))},[w("section",Ny,[w("header",Fy,[w("div",null,[w("div",Oy,[w("span",{class:Kt(["h-2.5 w-2.5 rounded-full",ke(s)?"bg-lime-300 shadow-[0_0_12px_rgba(190,242,100,.75)]":"bg-white/25"])},null,2),R[4]||(R[4]=w("p",{class:"text-sm font-semibold text-sky-100"}," Controller Debug ",-1)),R[5]||(R[5]=w("span",{class:"rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45"}," v0.5 ",-1))]),R[6]||(R[6]=w("p",{class:"mt-1 text-xs leading-5 text-white/45"}," 比較控制器原始輸入與校正後實際送進遊戲的數值。 ",-1))]),w("button",{type:"button",class:"shrink-0 rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-xs text-white/55 transition hover:bg-white/10 hover:text-white",onClick:R[0]||(R[0]=U=>t("close"))}," 關閉 ")]),w("div",By,[ke(i)?(we(),Fe(gt,{key:1},[w("div",zy,[w("div",Hy,[R[7]||(R[7]=w("p",{class:"text-xs font-semibold uppercase tracking-[0.18em] text-white/40"}," Connection ",-1)),w("span",{class:Kt(["rounded-full px-2.5 py-1 text-[11px] font-semibold",ke(s)?"bg-lime-300/15 text-lime-200":"bg-white/5 text-white/40"])},xe(ke(s)?"CONNECTED":"WAITING"),3)]),ke(s)?(we(),Fe(gt,{key:0},[w("p",Vy,xe(ke(o)),1),w("div",Gy,[w("p",null,[R[8]||(R[8]=Ct(" Index ",-1)),w("span",Wy,xe(ke(r)),1)]),w("p",null,[R[9]||(R[9]=Ct(" Mapping ",-1)),w("span",Xy,xe(ke(a)||"none"),1)]),w("p",null,[R[10]||(R[10]=Ct(" Axes ",-1)),w("span",$y,xe(ke(u)),1)]),w("p",null,[R[11]||(R[11]=Ct(" Buttons ",-1)),w("span",qy,xe(ke(d)),1)])])],64)):(we(),Fe("p",Yy," 插上 LiteRadio 2 SIM 後，動一下搖桿或按任一按鈕。 部分瀏覽器要收到第一次操作後才會顯示控制器。 "))]),ke(s)?(we(),Fe("div",Ky,[R[12]||(R[12]=w("div",{class:"flex-1"},[w("p",{class:"text-xs font-semibold uppercase tracking-[0.18em] text-white/40"}," Calibration "),w("p",{class:"mt-1 text-xs text-white/45"}," 遊戲控制會使用目前儲存的校正設定。 ")],-1)),w("div",jy,[w("span",{class:Kt(["rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]",ke(_).calibrated?"bg-lime-300/15 text-lime-200":"bg-amber-300/10 text-amber-100"])},xe(ke(_).calibrated?"CALIBRATED":"DEFAULT"),3),w("span",Zy," Deadzone "+xe(Math.round(ke(_).deadzone*100))+"% ",1)])])):Rt("",!0),ke(s)?(we(),Fe(gt,{key:1},[w("div",Jy,[w("button",{type:"button",class:"rounded-xl bg-sky-200 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-sky-100",onClick:R[1]||(R[1]=(...U)=>ke(f)&&ke(f)(...U))}," 重置 Min / Max "),w("button",{type:"button",class:"rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/70 transition hover:bg-white/10",onClick:R[2]||(R[2]=(...U)=>ke(p)&&ke(p)(...U))}," 記錄目前值為 Baseline ")]),w("div",Qy,[(we(!0),Fe(gt,null,qi(ke(l),(U,b)=>(we(),Fe("article",{key:b,class:"rounded-2xl border border-white/10 bg-black/20 p-4"},[w("div",eE,[w("div",null,[w("div",tE,[w("p",nE," AXIS "+xe(b),1),w("span",iE,xe(h(b).name),1)]),w("p",sE,xe(h(b).description),1)]),h(b).calibrationKey?(we(),Fe("div",rE,[R[13]||(R[13]=w("p",{class:"text-[9px] font-semibold uppercase tracking-[0.14em] text-white/30"}," RAW ",-1)),w("p",oE,xe(A(U.current)),1),R[14]||(R[14]=w("p",{class:"mt-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-lime-200/50"}," CALIBRATED ",-1)),w("p",aE,xe(A(S(b,U.current))),1)])):(we(),Fe("p",lE,xe(A(U.current)),1))]),w("div",cE,[R[15]||(R[15]=w("div",{class:"absolute inset-y-0 left-1/2 w-px bg-white/35"},null,-1)),w("div",{class:"absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200 shadow-[0_0_10px_rgba(186,230,253,.65)]",style:kt({left:`${T(U.current)}%`})},null,4)]),w("div",uE,[w("div",null,[R[16]||(R[16]=w("p",null,"RAW MIN",-1)),w("p",dE,xe(A(U.min)),1)]),w("div",fE,[R[17]||(R[17]=w("p",null,"BASELINE",-1)),w("p",hE,xe(A(U.baseline)),1)]),w("div",pE,[R[18]||(R[18]=w("p",null,"RAW MAX",-1)),w("p",mE,xe(A(U.max)),1)])]),I(b)&&h(b).calibrationKey?(we(),Fe("div",gE,[R[21]||(R[21]=w("p",{class:"text-[9px] font-semibold uppercase tracking-[0.14em] text-white/30"}," CALIBRATION PROFILE ",-1)),w("div",_E,[w("div",null,[R[19]||(R[19]=w("p",{class:"text-white/30"}," RAW MIN ",-1)),w("p",xE,xe(A(I(b).min)),1)]),w("div",vE,[w("p",ME,xe((h(b).calibrationKey==="throttle","CENTER")),1),w("p",SE,xe(h(b).calibrationKey==="throttle"?"—":A(I(b).center)),1)]),w("div",bE,[R[20]||(R[20]=w("p",{class:"text-white/30"}," RAW CENTER ",-1)),w("p",yE,xe(A(I(b).max)),1)])])])):Rt("",!0)]))),128))]),w("div",EE,[R[22]||(R[22]=w("p",{class:"text-xs font-semibold uppercase tracking-[0.18em] text-white/40"}," Buttons ",-1)),w("div",wE,[(we(!0),Fe(gt,null,qi(ke(c),U=>(we(),Fe("div",{key:U.index,class:Kt(["rounded-lg border px-2 py-2 text-center font-mono text-xs",U.pressed?"border-lime-300/40 bg-lime-300/15 text-lime-100":"border-white/10 bg-black/20 text-white/45"])},[w("p",null,"B"+xe(U.index),1),w("p",TE,xe(A(U.value)),1)],2))),128))])]),R[23]||(R[23]=w("div",{class:"mt-5 rounded-2xl border border-sky-300/15 bg-sky-300/4.5 p-4 text-xs leading-5 text-sky-50/65"}," RAW 是瀏覽器直接取得的 Gamepad 原始值； CALIBRATED 是經過中立點、操作範圍與 Deadzone 修正後， 實際提供給遊戲控制的數值。 ",-1))],64)):Rt("",!0)],64)):(we(),Fe("div",ky," 這個瀏覽器沒有提供 Gamepad API。 請改用最新版 Chrome 或其他支援 Gamepad API 的瀏覽器。 "))])])]))}},RE=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},CE={class:"w-full max-w-2xl rounded-3xl border border-white/10 bg-[#15181f] p-6 shadow-2xl"},PE={class:"flex items-start justify-between gap-4"},DE={class:"text-xs uppercase tracking-[0.24em] text-lime-300/70"},LE={key:0,class:"mt-6 grid gap-3 sm:grid-cols-2"},IE={key:1,class:"mt-6 grid gap-3 sm:grid-cols-2"},UE={__name:"HelpPanel",props:{controlSource:{type:String,default:"keyboard"}},emits:["close"],setup(n,{emit:e}){const t=e;return(i,s)=>(we(),Fe("div",{class:"absolute inset-0 z-30 grid place-items-center bg-black/60 p-4 backdrop-blur-sm",onClick:s[1]||(s[1]=Jl(r=>t("close"),["self"]))},[w("section",CE,[w("div",PE,[w("div",null,[w("p",DE,xe(n.controlSource==="gamepad"?"Controller controls":"Keyboard controls"),1),s[2]||(s[2]=w("h2",{class:"mt-2 text-2xl font-semibold"}," 操作說明 ",-1))]),w("button",{class:"rounded-xl border border-white/10 px-3 py-2 text-sm hover:bg-white/5",onClick:s[0]||(s[0]=r=>t("close"))}," 關閉 ")]),n.controlSource==="gamepad"?(we(),Fe("div",LE,[...s[3]||(s[3]=[cr('<div class="rounded-2xl bg-black/25 p-4" data-v-1fad982c><h3 class="font-semibold" data-v-1fad982c> 左搖桿 </h3><p class="mt-3 leading-7 text-white/65" data-v-1fad982c><kbd data-v-1fad982c>↑</kbd> 增加 Throttle 　 <kbd data-v-1fad982c>↓</kbd> 降低 Throttle <br data-v-1fad982c><kbd data-v-1fad982c>←</kbd> 左轉 Yaw 　 <kbd data-v-1fad982c>→</kbd> 右轉 Yaw </p></div><div class="rounded-2xl bg-black/25 p-4" data-v-1fad982c><h3 class="font-semibold" data-v-1fad982c> 右搖桿 </h3><p class="mt-3 leading-7 text-white/65" data-v-1fad982c><kbd data-v-1fad982c>↑</kbd> 前進 Pitch 　 <kbd data-v-1fad982c>↓</kbd> 後退 Pitch <br data-v-1fad982c><kbd data-v-1fad982c>←</kbd> 左移 Roll 　 <kbd data-v-1fad982c>→</kbd> 右移 Roll </p></div>',2)])])):(we(),Fe("div",IE,[...s[4]||(s[4]=[cr('<div class="rounded-2xl bg-black/25 p-4" data-v-1fad982c><h3 class="font-semibold" data-v-1fad982c> 左搖桿 </h3><p class="mt-3 leading-7 text-white/65" data-v-1fad982c><kbd data-v-1fad982c>W</kbd> 升高 　 <kbd data-v-1fad982c>S</kbd> 下降 <br data-v-1fad982c><kbd data-v-1fad982c>A</kbd> 左轉 　 <kbd data-v-1fad982c>D</kbd> 右轉 </p></div><div class="rounded-2xl bg-black/25 p-4" data-v-1fad982c><h3 class="font-semibold" data-v-1fad982c> 右搖桿 </h3><p class="mt-3 leading-7 text-white/65" data-v-1fad982c><kbd data-v-1fad982c>↑</kbd> 前進 　 <kbd data-v-1fad982c>↓</kbd> 後退 <br data-v-1fad982c><kbd data-v-1fad982c>←</kbd> 左移 　 <kbd data-v-1fad982c>→</kbd> 右移 </p></div>',2)])])),s[5]||(s[5]=w("div",{class:"mt-3 rounded-2xl bg-black/25 p-4 text-sm leading-7 text-white/65"},[w("kbd",null,"Space"),Ct(" 暫停／繼續 　 "),w("kbd",null,"R"),Ct(" 重置 　 "),w("kbd",null,"H"),Ct(" 顯示／隱藏說明 ")],-1)),s[6]||(s[6]=w("p",{class:"mt-5 text-sm leading-6 text-white/50"}," 這是無 GPS 水平位置訓練。鬆開方向輸入後，無人機會因慣性繼續漂移，需要提前反向修正。 ",-1))])]))}},NE=RE(UE,[["__scopeId","data-v-1fad982c"]]),FE={class:"rounded-2xl border border-white/10 bg-white/[0.035] p-4"},OE={class:"mb-4 flex items-center justify-between"},BE={class:"grid grid-cols-2 gap-2"},kE={class:"text-xs text-white/45"},zE={class:"mt-1 text-lg font-semibold tabular-nums"},HE={class:"col-span-2 rounded-xl bg-black/25 p-3"},VE={class:"mt-1 flex items-baseline justify-between gap-3"},GE={class:"text-lg font-semibold"},WE={class:"text-sm tabular-nums text-cyan-200"},XE={class:"mt-3 flex items-center justify-between rounded-xl border border-white/10 px-3 py-2 text-sm"},$E={__name:"TelemetryPanel",props:{telemetry:Object,windMode:String},setup(n){return(e,t)=>(we(),Fe("section",FE,[w("div",OE,[t[0]||(t[0]=w("div",null,[w("p",{class:"text-xs uppercase tracking-[0.2em] text-white/40"},"Telemetry"),w("h2",{class:"mt-1 font-semibold"},"飛行資料")],-1)),w("span",{class:Kt(["rounded-full px-2.5 py-1 text-xs",n.telemetry.outside?"bg-red-500/15 text-red-300":"bg-lime-300/10 text-lime-300"])},xe(n.telemetry.outside?"OUT":"IN ZONE"),3)]),w("dl",BE,[(we(!0),Fe(gt,null,qi([["高度",`${n.telemetry.altitude.toFixed(2)} m`],["速度",`${n.telemetry.speed.toFixed(2)} m/s`],["機頭",`${n.telemetry.yaw.toFixed(0)}°`],["離中心",`${n.telemetry.distance.toFixed(2)} m`]],i=>(we(),Fe("div",{key:i[0],class:"rounded-xl bg-black/25 p-3"},[w("dt",kE,xe(i[0]),1),w("dd",zE,xe(i[1]),1)]))),128)),w("div",HE,[t[1]||(t[1]=w("dt",{class:"text-xs text-white/45"},"環境風",-1)),w("dd",VE,[w("span",GE,xe(n.windMode==="none"?"無風":"微風"),1),w("span",WE,xe(n.windMode==="none"?"0.0 m/s":`${ke(Zb)(n.telemetry.windDirection)} ${n.telemetry.windSpeed.toFixed(1)} m/s · ${n.telemetry.windDirection.toFixed(0)}°`),1)])])]),w("div",XE,[t[2]||(t[2]=w("span",{class:"text-white/55"},"超界次數",-1)),w("strong",{class:Kt(["tabular-nums",n.telemetry.boundaryCount?"text-red-300":"text-white"])},xe(n.telemetry.boundaryCount),3)])]))}},qE={class:"mb-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur"},YE={class:"flex flex-wrap items-center gap-2"},KE=["onUpdate:modelValue"],jE=["value"],ZE={__name:"TopBar",props:{settings:Object,paused:Boolean},emits:["toggle-pause","reset","toggle-help","toggle-controller-debug","toggle-controller-calibration"],setup(n,{emit:e}){const t=n,i=e;return(s,r)=>(we(),Fe("header",qE,[r[5]||(r[5]=w("div",null,[w("p",{class:"text-[11px] font-semibold uppercase tracking-[0.28em] text-lime-300/80"},"v0.4 Controller Foundation · Third-person ATTI trainer"),w("h1",{class:"mt-1 text-xl font-semibold tracking-tight lg:text-2xl"},"Drone Orientation Trainer")],-1)),w("div",YE,[(we(!0),Fe(gt,null,qi([{label:"訓練",key:"trainingMode",options:ke(ty)},{label:"風況",key:"windMode",options:ke(ey)},{label:"相機高度",key:"cameraHeight",options:ke(Qf)},{label:"相機方位",key:"cameraBearing",options:ke(Il)}],o=>(we(),Fe("label",{key:o.key,class:"flex items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm text-white/70"},[w("span",null,xe(o.label),1),Hd(w("select",{"onUpdate:modelValue":a=>t.settings[o.key]=a,class:"bg-transparent text-white outline-none"},[(we(!0),Fe(gt,null,qi(o.options,a=>(we(),Fe("option",{key:a.value,value:a.value,class:"bg-[#171a20]"},xe(a.label),9,jE))),128))],8,KE),[[Sm,t.settings[o.key]]])]))),128)),w("button",{class:"rounded-xl border border-lime-300/20 bg-lime-300/10 px-4 py-2 text-sm text-lime-100 hover:bg-lime-300/15",onClick:r[0]||(r[0]=o=>i("toggle-controller-calibration"))}," 🎯 控制器校正 "),w("button",{class:"rounded-xl border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm text-sky-100 hover:bg-sky-300/15",onClick:r[1]||(r[1]=o=>i("toggle-controller-debug"))}," 🎮 遙控器診斷 "),w("button",{class:"rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10",onClick:r[2]||(r[2]=o=>i("toggle-help"))}," 操作說明 "),w("button",{class:"rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10",onClick:r[3]||(r[3]=o=>i("toggle-pause"))},xe(n.paused?"繼續":"暫停"),1),w("button",{class:"rounded-xl bg-lime-300 px-4 py-2 text-sm font-semibold text-black hover:bg-lime-200",onClick:r[4]||(r[4]=o=>i("reset"))}," 重置 ")])]))}},eh=je(!1),Ul=Tn({altitude:1.5,speed:0,yaw:0,distance:0,score:0,time:0,boundaryCount:0,outside:!1,windSpeed:0,windDirection:0}),JE=Mt(()=>eh.value?"已暫停":Ul.outside?"超出範圍":Ul.distance<1.2?"中心穩定":"修正漂移");function QE(){return{paused:eh,telemetry:Ul,statusText:JE}}const ew={class:"min-h-screen bg-[#090b10] text-white"},tw={class:"mx-auto flex min-h-screen max-w-[1800px] flex-col p-3 lg:p-5"},nw={class:"grid min-h-0 flex-1 gap-3 xl:grid-cols-[minmax(0,1fr)_320px]"},iw={class:"flex flex-col gap-3"},sw={key:0,class:"rounded-2xl border border-lime-300/15 bg-lime-300/4 p-4 text-sm text-white/65"},rw={__name:"DroneTrainer",setup(n){const e=iy(),t=QE(),i=je({throttle:0,yaw:0,pitch:0,roll:0}),s=je({reset:()=>{},togglePause:()=>{}}),r=je(!1),o=je(!1),a=je("keyboard");function l(d){i.value=d}function c(d){a.value=d}function u(d){s.value=d}return(d,f)=>(we(),Fe("main",ew,[w("div",tw,[Ft(ZE,{settings:ke(e),paused:ke(t).paused.value,onTogglePause:s.value.togglePause,onReset:s.value.reset,onToggleHelp:f[0]||(f[0]=p=>ke(e).showHelp=!ke(e).showHelp),onToggleControllerDebug:f[1]||(f[1]=p=>r.value=!r.value),onToggleControllerCalibration:f[2]||(f[2]=p=>o.value=!o.value)},null,8,["settings","paused","onTogglePause","onReset"]),w("section",nw,[Ft(_y,{settings:ke(e),game:ke(t),"controller-calibrating":o.value,onInputReady:l,onControlSourceReady:c,onRegisterActions:u},null,8,["settings","game","controller-calibrating"]),w("aside",iw,[Ft($E,{telemetry:ke(t).telemetry,"wind-mode":ke(e).windMode},null,8,["telemetry","wind-mode"]),Ft(Ly,{input:i.value,settings:ke(e),"control-source":a.value},null,8,["input","settings","control-source"]),ke(e).trainingMode==="randomHeading"?(we(),Fe("section",sw,[...f[6]||(f[6]=[w("p",{class:"font-semibold text-lime-200"}," v0.3 Random Heading ",-1),w("p",{class:"mt-2 leading-6"}," 機頭會在北、東、南、西之間隨機切換。 請保持機頭不動，只用 Pitch／Roll 前往指定的世界方向， 完成後立即進入下一題。 ",-1)])])):Rt("",!0)])])]),ke(e).showHelp?(we(),xi(NE,{key:0,"control-source":a.value,onClose:f[3]||(f[3]=p=>ke(e).showHelp=!1)},null,8,["control-source"])):Rt("",!0),r.value?(we(),xi(AE,{key:1,onClose:f[4]||(f[4]=p=>r.value=!1)})):Rt("",!0),o.value?(we(),xi(pg,{key:2,onClose:f[5]||(f[5]=p=>o.value=!1)})):Rt("",!0)]))}},ow={__name:"App",setup(n){return(e,t)=>(we(),xi(rw))}};Tm(ow).mount("#app");
