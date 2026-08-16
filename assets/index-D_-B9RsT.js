(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Ql(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const _t={},ys=[],Hn=()=>{},Sd=()=>!1,zo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ho=n=>n.startsWith("onUpdate:"),Xt=Object.assign,ec=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},hh=Object.prototype.hasOwnProperty,ft=(n,e)=>hh.call(n,e),Xe=Array.isArray,Ms=n=>wr(n)==="[object Map]",Fs=n=>wr(n)==="[object Set]",Dc=n=>wr(n)==="[object Date]",je=n=>typeof n=="function",At=n=>typeof n=="string",Wn=n=>typeof n=="symbol",mt=n=>n!==null&&typeof n=="object",Ed=n=>(mt(n)||je(n))&&je(n.then)&&je(n.catch),wd=Object.prototype.toString,wr=n=>wd.call(n),ph=n=>wr(n).slice(8,-1),Td=n=>wr(n)==="[object Object]",tc=n=>At(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,rr=Ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},mh=/-\w/g,Tn=Vo(n=>n.replace(mh,e=>e.slice(1).toUpperCase())),gh=/\B([A-Z])/g,Ji=Vo(n=>n.replace(gh,"-$1").toLowerCase()),Ad=Vo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ra=Vo(n=>n?`on${Ad(n)}`:""),Bn=(n,e)=>!Object.is(n,e),po=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Rd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Cd=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Lc;const Go=()=>Lc||(Lc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ht(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=At(i)?bh(i):Ht(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(At(n)||mt(n))return n}const _h=/;(?![^(]*\))/g,xh=/:([^]+)/,vh=/\/\*[^]*?\*\//g;function bh(n){const e={};return n.replace(vh,"").split(_h).forEach(t=>{if(t){const i=t.split(xh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ct(n){let e="";if(At(n))e=n;else if(Xe(n))for(let t=0;t<n.length;t++){const i=Ct(n[t]);i&&(e+=i+" ")}else if(mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const yh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Mh=Ql(yh);function Pd(n){return!!n||n===""}function Sh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Os(n[i],e[i]);return t}function Os(n,e){if(n===e)return!0;let t=Dc(n),i=Dc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Wn(n),i=Wn(e),t||i)return n===e;if(t=Xe(n),i=Xe(e),t||i)return t&&i?Sh(n,e):!1;if(t=mt(n),i=mt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Os(n[o],e[o]))return!1}}return String(n)===String(e)}function nc(n,e){return n.findIndex(t=>Os(t,e))}const Dd=n=>!!(n&&n.__v_isRef===!0),le=n=>At(n)?n:n==null?"":Xe(n)||mt(n)&&(n.toString===wd||!je(n.toString))?Dd(n)?le(n.value):JSON.stringify(n,Ld,2):String(n),Ld=(n,e)=>Dd(e)?Ld(n,e.value):Ms(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[oa(i,r)+" =>"]=s,t),{})}:Fs(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>oa(t))}:Wn(e)?oa(e):mt(e)&&!Xe(e)&&!Td(e)?String(e):e,oa=(n,e="")=>{var t;return Wn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Ot;class Eh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ot&&(Ot.active?(this.parent=Ot,this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Ot;try{return Ot=this,e()}finally{Ot=t}}}on(){++this._on===1&&(this.prevScope=Ot,Ot=this)}off(){if(this._on>0&&--this._on===0){if(Ot===this)Ot=this.prevScope;else{let e=Ot;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function wh(){return Ot}let vt;const aa=new WeakSet;class Id{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&(Ot.active?Ot.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,aa.has(this)&&(aa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Nd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ic(this),Fd(this);const e=vt,t=An;vt=this,An=!0;try{return this.fn()}finally{Od(this),vt=e,An=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)rc(e);this.deps=this.depsTail=void 0,Ic(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?aa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ja(this)&&this.run()}get dirty(){return Ja(this)}}let Ud=0,or,ar;function Nd(n,e=!1){if(n.flags|=8,e){n.next=ar,ar=n;return}n.next=or,or=n}function ic(){Ud++}function sc(){if(--Ud>0)return;if(ar){let e=ar;for(ar=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;or;){let e=or;for(or=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Fd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Od(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),rc(i),Th(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Ja(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Bd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===hr)||(n.globalVersion=hr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ja(n))))return;n.flags|=2;const e=n.dep,t=vt,i=An;vt=n,An=!0;try{Fd(n);const s=n.fn(n._value);(e.version===0||Bn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{vt=t,An=i,Od(n),n.flags&=-3}}function rc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)rc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Th(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let An=!0;const kd=[];function li(){kd.push(An),An=!1}function ci(){const n=kd.pop();An=n===void 0?!0:n}function Ic(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=vt;vt=void 0;try{e()}finally{vt=t}}}let hr=0;class Ah{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class oc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!vt||!An||vt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==vt)t=this.activeLink=new Ah(vt,this),vt.deps?(t.prevDep=vt.depsTail,vt.depsTail.nextDep=t,vt.depsTail=t):vt.deps=vt.depsTail=t,zd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=vt.depsTail,t.nextDep=void 0,vt.depsTail.nextDep=t,vt.depsTail=t,vt.deps===t&&(vt.deps=i)}return t}trigger(e){this.version++,hr++,this.notify(e)}notify(e){ic();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{sc()}}}function zd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)zd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Qa=new WeakMap,$i=Symbol(""),el=Symbol(""),pr=Symbol("");function Vt(n,e,t){if(An&&vt){let i=Qa.get(n);i||Qa.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new oc),s.map=i,s.key=t),s.track()}}function ni(n,e,t,i,s,r){const o=Qa.get(n);if(!o){hr++;return}const a=l=>{l&&l.trigger()};if(ic(),e==="clear")o.forEach(a);else{const l=Xe(n),c=l&&tc(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===pr||!Wn(f)&&f>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(pr)),e){case"add":l?c&&a(o.get("length")):(a(o.get($i)),Ms(n)&&a(o.get(el)));break;case"delete":l||(a(o.get($i)),Ms(n)&&a(o.get(el)));break;case"set":Ms(n)&&a(o.get($i));break}}sc()}function ns(n){const e=dt(n);return e===n?e:(Vt(e,"iterate",pr),_n(n)?e:e.map(Pn))}function Wo(n){return Vt(n=dt(n),"iterate",pr),n}function Nn(n,e){return ui(n)?Cs(qi(n)?Pn(e):e):Pn(e)}const Rh={__proto__:null,[Symbol.iterator](){return la(this,Symbol.iterator,n=>Nn(this,n))},concat(...n){return ns(this).concat(...n.map(e=>Xe(e)?ns(e):e))},entries(){return la(this,"entries",n=>(n[1]=Nn(this,n[1]),n))},every(n,e){return qn(this,"every",n,e,void 0,arguments)},filter(n,e){return qn(this,"filter",n,e,t=>t.map(i=>Nn(this,i)),arguments)},find(n,e){return qn(this,"find",n,e,t=>Nn(this,t),arguments)},findIndex(n,e){return qn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return qn(this,"findLast",n,e,t=>Nn(this,t),arguments)},findLastIndex(n,e){return qn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return qn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ca(this,"includes",n)},indexOf(...n){return ca(this,"indexOf",n)},join(n){return ns(this).join(n)},lastIndexOf(...n){return ca(this,"lastIndexOf",n)},map(n,e){return qn(this,"map",n,e,void 0,arguments)},pop(){return Ks(this,"pop")},push(...n){return Ks(this,"push",n)},reduce(n,...e){return Uc(this,"reduce",n,e)},reduceRight(n,...e){return Uc(this,"reduceRight",n,e)},shift(){return Ks(this,"shift")},some(n,e){return qn(this,"some",n,e,void 0,arguments)},splice(...n){return Ks(this,"splice",n)},toReversed(){return ns(this).toReversed()},toSorted(n){return ns(this).toSorted(n)},toSpliced(...n){return ns(this).toSpliced(...n)},unshift(...n){return Ks(this,"unshift",n)},values(){return la(this,"values",n=>Nn(this,n))}};function la(n,e,t){const i=Wo(n),s=i[e]();return i!==n&&!_n(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Ch=Array.prototype;function qn(n,e,t,i,s,r){const o=Wo(n),a=o!==n&&!_n(n),l=o[e];if(l!==Ch[e]){const d=l.apply(n,r);return a?Pn(d):d}let c=t;o!==n&&(a?c=function(d,f){return t.call(this,Nn(n,d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Uc(n,e,t,i){const s=Wo(n),r=s!==n&&!_n(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=Nn(n,c)),t.call(this,c,Nn(n,u),d,n)}):t.length>3&&(o=function(c,u,d){return t.call(this,c,u,d,n)}));const l=s[e](o,...i);return a?Nn(n,l):l}function ca(n,e,t){const i=dt(n);Vt(i,"iterate",pr);const s=i[e](...t);return(s===-1||s===!1)&&cc(t[0])?(t[0]=dt(t[0]),i[e](...t)):s}function Ks(n,e,t=[]){li(),ic();const i=dt(n)[e].apply(n,t);return sc(),ci(),i}const Ph=Ql("__proto__,__v_isRef,__isVue"),Hd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Wn));function Dh(n){Wn(n)||(n=String(n));const e=dt(this);return Vt(e,"has",n),e.hasOwnProperty(n)}class Vd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Hh:$d:r?Xd:Wd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Xe(e);if(!s){let l;if(o&&(l=Rh[t]))return l;if(t==="hasOwnProperty")return Dh}const a=Reflect.get(e,t,Wt(e)?e:i);if((Wn(t)?Hd.has(t):Ph(t))||(s||Vt(e,"get",t),r))return a;if(Wt(a)){const l=o&&tc(t)?a:a.value;return s&&mt(l)?nl(l):l}return mt(a)?s?nl(a):Cn(a):a}}class Gd extends Vd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Xe(e)&&tc(t);if(!this._isShallow){const c=ui(r);if(!_n(i)&&!ui(i)&&(r=dt(r),i=dt(i)),!o&&Wt(r)&&!Wt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:ft(e,t),l=Reflect.set(e,t,i,Wt(e)?e:s);return e===dt(s)&&l&&(a?Bn(i,r)&&ni(e,"set",t,i):ni(e,"add",t,i)),l}deleteProperty(e,t){const i=ft(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ni(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Wn(t)||!Hd.has(t))&&Vt(e,"has",t),i}ownKeys(e){return Vt(e,"iterate",Xe(e)?"length":$i),Reflect.ownKeys(e)}}class Lh extends Vd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ih=new Gd,Uh=new Lh,Nh=new Gd(!0);const tl=n=>n,kr=n=>Reflect.getPrototypeOf(n);function Fh(n,e,t){return function(...i){const s=this.__v_raw,r=dt(s),o=Ms(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?tl:e?Cs:Pn;return!e&&Vt(r,"iterate",l?el:$i),Xt(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function zr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Oh(n,e){const t={get(s){const r=this.__v_raw,o=dt(r),a=dt(s);n||(Bn(s,a)&&Vt(o,"get",s),Vt(o,"get",a));const{has:l}=kr(o),c=e?tl:n?Cs:Pn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Vt(dt(s),"iterate",$i),s.size},has(s){const r=this.__v_raw,o=dt(r),a=dt(s);return n||(Bn(s,a)&&Vt(o,"has",s),Vt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=dt(a),c=e?tl:n?Cs:Pn;return!n&&Vt(l,"iterate",$i),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return Xt(t,n?{add:zr("add"),set:zr("set"),delete:zr("delete"),clear:zr("clear")}:{add(s){const r=dt(this),o=kr(r),a=dt(s),l=!e&&!_n(s)&&!ui(s)?a:s;return o.has.call(r,l)||Bn(s,l)&&o.has.call(r,s)||Bn(a,l)&&o.has.call(r,a)||(r.add(l),ni(r,"add",l,l)),this},set(s,r){!e&&!_n(r)&&!ui(r)&&(r=dt(r));const o=dt(this),{has:a,get:l}=kr(o);let c=a.call(o,s);c||(s=dt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Bn(r,u)&&ni(o,"set",s,r):ni(o,"add",s,r),this},delete(s){const r=dt(this),{has:o,get:a}=kr(r);let l=o.call(r,s);l||(s=dt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ni(r,"delete",s,void 0),c},clear(){const s=dt(this),r=s.size!==0,o=s.clear();return r&&ni(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Fh(s,n,e)}),t}function ac(n,e){const t=Oh(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ft(t,s)&&s in i?t:i,s,r)}const Bh={get:ac(!1,!1)},kh={get:ac(!1,!0)},zh={get:ac(!0,!1)};const Wd=new WeakMap,Xd=new WeakMap,$d=new WeakMap,Hh=new WeakMap;function Vh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cn(n){return ui(n)?n:lc(n,!1,Ih,Bh,Wd)}function Gh(n){return lc(n,!1,Nh,kh,Xd)}function nl(n){return lc(n,!0,Uh,zh,$d)}function lc(n,e,t,i,s){if(!mt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Vh(ph(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function qi(n){return ui(n)?qi(n.__v_raw):!!(n&&n.__v_isReactive)}function ui(n){return!!(n&&n.__v_isReadonly)}function _n(n){return!!(n&&n.__v_isShallow)}function cc(n){return n?!!n.__v_raw:!1}function dt(n){const e=n&&n.__v_raw;return e?dt(e):n}function Wh(n){return!ft(n,"__v_skip")&&Object.isExtensible(n)&&Rd(n,"__v_skip",!0),n}const Pn=n=>mt(n)?Cn(n):n,Cs=n=>mt(n)?nl(n):n;function Wt(n){return n?n.__v_isRef===!0:!1}function We(n){return Xh(n,!1)}function Xh(n,e){return Wt(n)?n:new $h(n,e)}class $h{constructor(e,t){this.dep=new oc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:dt(e),this._value=t?e:Pn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||_n(e)||ui(e);e=i?e:dt(e),Bn(e,t)&&(this._rawValue=e,this._value=i?e:Pn(e),this.dep.trigger())}}function Oe(n){return Wt(n)?n.value:n}const qh={get:(n,e,t)=>e==="__v_raw"?n:Oe(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Wt(s)&&!Wt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function qd(n){return qi(n)?n:new Proxy(n,qh)}class Yh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new oc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=hr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&vt!==this)return Nd(this,!0),!0}get value(){const e=this.dep.track();return Bd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Kh(n,e,t=!1){let i,s;return je(n)?i=n:(i=n.get,s=n.set),new Yh(i,s,t)}const Hr={},Eo=new WeakMap;let Bi;function jh(n,e=!1,t=Bi){if(t){let i=Eo.get(t);i||Eo.set(t,i=[]),i.push(n)}}function Zh(n,e,t=_t){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=M=>s?M:_n(M)||s===!1||s===0?ii(M,1):ii(M);let u,d,f,h,v=!1,y=!1;if(Wt(n)?(d=()=>n.value,v=_n(n)):qi(n)?(d=()=>c(n),v=!0):Xe(n)?(y=!0,v=n.some(M=>qi(M)||_n(M)),d=()=>n.map(M=>{if(Wt(M))return M.value;if(qi(M))return c(M);if(je(M))return l?l(M,2):M()})):je(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){li();try{f()}finally{ci()}}const M=Bi;Bi=u;try{return l?l(n,3,[h]):n(h)}finally{Bi=M}}:d=Hn,e&&s){const M=d,U=s===!0?1/0:s;d=()=>ii(M(),U)}const m=wh(),p=()=>{u.stop(),m&&m.active&&ec(m.effects,u)};if(r&&e){const M=e;e=(...U)=>{const P=M(...U);return p(),P}}let R=y?new Array(n.length).fill(Hr):Hr;const T=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const U=u.run();if(M||s||v||(y?U.some((P,A)=>Bn(P,R[A])):Bn(U,R))){f&&f();const P=Bi;Bi=u;try{const A=[U,R===Hr?void 0:y&&R[0]===Hr?[]:R,h];R=U,l?l(e,3,A):e(...A)}finally{Bi=P}}}else u.run()};return a&&a(T),u=new Id(d),u.scheduler=o?()=>o(T,!1):T,h=M=>jh(M,!1,u),f=u.onStop=()=>{const M=Eo.get(u);if(M){if(l)l(M,4);else for(const U of M)U();Eo.delete(u)}},e?i?T(!0):R=u.run():o?o(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ii(n,e=1/0,t){if(e<=0||!mt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Wt(n))ii(n.value,e,t);else if(Xe(n))for(let i=0;i<n.length;i++)ii(n[i],e,t);else if(Fs(n)||Ms(n))n.forEach(i=>{ii(i,e,t)});else if(Td(n)){for(const i in n)ii(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ii(n[i],e,t)}return n}function Tr(n,e,t,i){try{return i?n(...i):n()}catch(s){Xo(s,e,t)}}function Dn(n,e,t,i){if(je(n)){const s=Tr(n,e,t,i);return s&&Ed(s)&&s.catch(r=>{Xo(r,e,t)}),s}if(Xe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Dn(n[r],e,t,i));return s}}function Xo(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||_t;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){li(),Tr(r,null,10,[n,l,c]),ci();return}}Jh(n,t,s,i,o)}function Jh(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const jt=[];let Un=-1;const Ss=[];let yi=null,_s=0;const Yd=Promise.resolve();let wo=null;function uc(n){const e=wo||Yd;return n?e.then(this?n.bind(this):n):e}function Qh(n){let e=Un+1,t=jt.length;for(;e<t;){const i=e+t>>>1,s=jt[i],r=mr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function dc(n){if(!(n.flags&1)){const e=mr(n),t=jt[jt.length-1];!t||!(n.flags&2)&&e>=mr(t)?jt.push(n):jt.splice(Qh(e),0,n),n.flags|=1,Kd()}}function Kd(){wo||(wo=Yd.then(Zd))}function ep(n){Xe(n)?Ss.push(...n):yi&&n.id===-1?yi.splice(_s+1,0,n):n.flags&1||(Ss.push(n),n.flags|=1),Kd()}function Nc(n,e,t=Un+1){for(;t<jt.length;t++){const i=jt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;jt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function jd(n){if(Ss.length){const e=[...new Set(Ss)].sort((t,i)=>mr(t)-mr(i));if(Ss.length=0,yi){yi.push(...e);return}for(yi=e,_s=0;_s<yi.length;_s++){const t=yi[_s];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}yi=null,_s=0}}const mr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Zd(n){try{for(Un=0;Un<jt.length;Un++){const e=jt[Un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Tr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Un<jt.length;Un++){const e=jt[Un];e&&(e.flags&=-2)}Un=-1,jt.length=0,jd(),wo=null,(jt.length||Ss.length)&&Zd()}}let gn=null,Jd=null;function To(n){const e=gn;return gn=n,Jd=n&&n.type.__scopeId||null,e}function tp(n,e=gn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&$c(-1);const r=To(e),o=Yi.length;let a;try{a=n(...s)}finally{for(let l=Yi.length;l>o;l--)Ef();To(r),i._d&&$c(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Qd(n,e){if(gn===null)return n;const t=Ko(gn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=_t]=e[s];r&&(je(r)&&(r={mounted:r,updated:r}),r.deep&&ii(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Pi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(li(),Dn(l,t,8,[n.el,a,n,e]),ci())}}function np(n,e){if(Zt){let t=Zt.provides;const i=Zt.parent&&Zt.parent.provides;i===t&&(t=Zt.provides=Object.create(i)),t[n]=e}}function mo(n,e,t=!1){const i=Zp();if(i||Es){let s=Es?Es._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&je(e)?e.call(i&&i.proxy):e}}const ip=Symbol.for("v-scx"),sp=()=>mo(ip);function pn(n,e,t){return ef(n,e,t)}function ef(n,e,t=_t){const{immediate:i,deep:s,flush:r,once:o}=t,a=Xt({},t),l=e&&i||!e&&r!=="post";let c;if(xr){if(r==="sync"){const h=sp();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Hn,h.resume=Hn,h.pause=Hn,h}}const u=Zt;a.call=(h,v,y)=>Dn(h,u,v,y);let d=!1;r==="post"?a.scheduler=h=>{en(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,v)=>{v?h():dc(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=Zh(n,e,a);return xr&&(c?c.push(f):l&&f()),f}function rp(n,e,t){const i=this.proxy,s=At(n)?n.includes(".")?tf(i,n):()=>i[n]:n.bind(i,i);let r;je(e)?r=e:(r=e.handler,t=e);const o=Ar(this),a=ef(s,r.bind(i),t);return o(),a}function tf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const op=Symbol("_vte"),ap=n=>n.__isTeleport,ua=Symbol("_leaveCb");function fc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,fc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function nf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Fc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ao=new WeakMap;function lr(n,e,t,i,s=!1){if(Xe(n)){n.forEach((y,m)=>lr(y,e&&(Xe(e)?e[m]:e),t,i,s));return}if(cr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&lr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Ko(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===_t?a.refs={}:a.refs,d=a.setupState,f=dt(d),h=d===_t?Sd:y=>Fc(u,y)?!1:ft(f,y),v=(y,m)=>!(m&&Fc(u,m));if(c!=null&&c!==l){if(Oc(e),At(c))u[c]=null,h(c)&&(d[c]=null);else if(Wt(c)){const y=e;v(c,y.k)&&(c.value=null),y.k&&(u[y.k]=null)}}if(je(l))Tr(l,a,12,[o,u]);else{const y=At(l),m=Wt(l);if(y||m){const p=()=>{if(n.f){const R=y?h(l)?d[l]:u[l]:v()||!n.k?l.value:u[n.k];if(s)Xe(R)&&ec(R,r);else if(Xe(R))R.includes(r)||R.push(r);else if(y)u[l]=[r],h(l)&&(d[l]=u[l]);else{const T=[r];v(l,n.k)&&(l.value=T),n.k&&(u[n.k]=T)}}else y?(u[l]=o,h(l)&&(d[l]=o)):m&&(v(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const R=()=>{p(),Ao.delete(n)};R.id=-1,Ao.set(n,R),en(R,t)}else Oc(n),p()}}}function Oc(n){const e=Ao.get(n);e&&(e.flags|=8,Ao.delete(n))}Go().requestIdleCallback;Go().cancelIdleCallback;const cr=n=>!!n.type.__asyncLoader,sf=n=>n.type.__isKeepAlive;function lp(n,e){rf(n,"a",e)}function cp(n,e){rf(n,"da",e)}function rf(n,e,t=Zt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if($o(e,i,t),t){let s=t.parent;for(;s&&s.parent;)sf(s.parent.vnode)&&up(i,e,t,s),s=s.parent}}function up(n,e,t,i){const s=$o(e,n,i,!0);of(()=>{ec(i[e],s)},t)}function $o(n,e,t=Zt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{li();const a=Ar(t),l=Dn(e,t,n,o);return a(),ci(),l});return i?s.unshift(r):s.push(r),r}}const di=n=>(e,t=Zt)=>{(!xr||n==="sp")&&$o(n,(...i)=>e(...i),t)},dp=di("bm"),Bs=di("m"),fp=di("bu"),hp=di("u"),ks=di("bum"),of=di("um"),pp=di("sp"),mp=di("rtg"),gp=di("rtc");function _p(n,e=Zt){$o("ec",n,e)}const xp=Symbol.for("v-ndc");function Vn(n,e,t,i){let s;const r=t,o=Xe(n);if(o||At(n)){const a=o&&qi(n);let l=!1,c=!1;a&&(l=!_n(n),c=ui(n),n=Wo(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=e(l?c?Cs(Pn(n[u])):Pn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(mt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const il=n=>n?Rf(n)?Ko(n):il(n.parent):null,ur=Xt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>il(n.parent),$root:n=>il(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>lf(n),$forceUpdate:n=>n.f||(n.f=()=>{dc(n.update)}),$nextTick:n=>n.n||(n.n=uc.bind(n.proxy)),$watch:n=>rp.bind(n)}),da=(n,e)=>n!==_t&&!n.__isScriptSetup&&ft(n,e),vp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(da(i,e))return o[e]=1,i[e];if(s!==_t&&ft(s,e))return o[e]=2,s[e];if(ft(r,e))return o[e]=3,r[e];if(t!==_t&&ft(t,e))return o[e]=4,t[e];sl&&(o[e]=0)}}const c=ur[e];let u,d;if(c)return e==="$attrs"&&Vt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==_t&&ft(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,ft(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return da(s,e)?(s[e]=t,!0):i!==_t&&ft(i,e)?(i[e]=t,!0):ft(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==_t&&a[0]!=="$"&&ft(n,a)||da(e,a)||ft(r,a)||ft(i,a)||ft(ur,a)||ft(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ft(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Bc(n){return Xe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let sl=!0;function bp(n){const e=lf(n),t=n.proxy,i=n.ctx;sl=!1,e.beforeCreate&&kc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:v,activated:y,deactivated:m,beforeDestroy:p,beforeUnmount:R,destroyed:T,unmounted:M,render:U,renderTracked:P,renderTriggered:A,errorCaptured:N,serverPrefetch:E,expose:x,inheritAttrs:D,components:$,directives:B,filters:Z}=e;if(c&&yp(c,i,null),o)for(const K in o){const V=o[K];je(V)&&(i[K]=V.bind(t))}if(s){const K=s.call(t,t);mt(K)&&(n.data=Cn(K))}if(sl=!0,r)for(const K in r){const V=r[K],me=je(V)?V.bind(t,t):je(V.get)?V.get.bind(t,t):Hn,Ee=!je(V)&&je(V.set)?V.set.bind(t):Hn,De=Ye({get:me,set:Ee});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>De.value,set:ze=>De.value=ze})}if(a)for(const K in a)af(a[K],i,t,K);if(l){const K=je(l)?l.call(t):l;Reflect.ownKeys(K).forEach(V=>{np(V,K[V])})}u&&kc(u,n,"c");function q(K,V){Xe(V)?V.forEach(me=>K(me.bind(t))):V&&K(V.bind(t))}if(q(dp,d),q(Bs,f),q(fp,h),q(hp,v),q(lp,y),q(cp,m),q(_p,N),q(gp,P),q(mp,A),q(ks,R),q(of,M),q(pp,E),Xe(x))if(x.length){const K=n.exposed||(n.exposed={});x.forEach(V=>{Object.defineProperty(K,V,{get:()=>t[V],set:me=>t[V]=me,enumerable:!0})})}else n.exposed||(n.exposed={});U&&n.render===Hn&&(n.render=U),D!=null&&(n.inheritAttrs=D),$&&(n.components=$),B&&(n.directives=B),E&&nf(n)}function yp(n,e,t=Hn){Xe(n)&&(n=rl(n));for(const i in n){const s=n[i];let r;mt(s)?"default"in s?r=mo(s.from||i,s.default,!0):r=mo(s.from||i):r=mo(s),Wt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function kc(n,e,t){Dn(Xe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function af(n,e,t,i){let s=i.includes(".")?tf(t,i):()=>t[i];if(At(n)){const r=e[n];je(r)&&pn(s,r)}else if(je(n))pn(s,n.bind(t));else if(mt(n))if(Xe(n))n.forEach(r=>af(r,e,t,i));else{const r=je(n.handler)?n.handler.bind(t):e[n.handler];je(r)&&pn(s,r,n)}}function lf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Ro(l,c,o,!0)),Ro(l,e,o)),mt(e)&&r.set(e,l),l}function Ro(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Ro(n,r,t,!0),s&&s.forEach(o=>Ro(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Mp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Mp={data:zc,props:Hc,emits:Hc,methods:nr,computed:nr,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:nr,directives:nr,watch:Ep,provide:zc,inject:Sp};function zc(n,e){return e?n?function(){return Xt(je(n)?n.call(this,this):n,je(e)?e.call(this,this):e)}:e:n}function Sp(n,e){return nr(rl(n),rl(e))}function rl(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function qt(n,e){return n?[...new Set([].concat(n,e))]:e}function nr(n,e){return n?Xt(Object.create(null),n,e):e}function Hc(n,e){return n?Xe(n)&&Xe(e)?[...new Set([...n,...e])]:Xt(Object.create(null),Bc(n),Bc(e??{})):e}function Ep(n,e){if(!n)return e;if(!e)return n;const t=Xt(Object.create(null),n);for(const i in e)t[i]=qt(n[i],e[i]);return t}function cf(){return{app:null,config:{isNativeTag:Sd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wp=0;function Tp(n,e){return function(i,s=null){je(i)||(i=Xt({},i)),s!=null&&!mt(s)&&(s=null);const r=cf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:wp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:im,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&je(u.install)?(o.add(u),u.install(c,...d)):je(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||Bt(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Ko(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Dn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Es;Es=c;try{return u()}finally{Es=d}}};return c}}let Es=null;const Ap=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Tn(e)}Modifiers`]||n[`${Ji(e)}Modifiers`];function Rp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||_t;let s=t;const r=e.startsWith("update:"),o=r&&Ap(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>At(u)?u.trim():u)),o.number&&(s=t.map(Cd)));let a,l=i[a=ra(e)]||i[a=ra(Tn(e))];!l&&r&&(l=i[a=ra(Ji(e))]),l&&Dn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Dn(c,n,6,s)}}const Cp=new WeakMap;function uf(n,e,t=!1){const i=t?Cp:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!je(n)){const l=c=>{const u=uf(c,e,!0);u&&(a=!0,Xt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(mt(n)&&i.set(n,null),null):(Xe(r)?r.forEach(l=>o[l]=null):Xt(o,r),mt(n)&&i.set(n,o),o)}function qo(n,e){return!n||!zo(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),ft(n,e[0].toLowerCase()+e.slice(1))||ft(n,Ji(e))||ft(n,e))}function Vc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:v,inheritAttrs:y}=n,m=To(n);let p,R;try{if(t.shapeFlag&4){const M=s||i,U=M;p=Fn(c.call(U,M,u,d,h,f,v)),R=a}else{const M=e;p=Fn(M.length>1?M(d,{attrs:a,slots:o,emit:l}):M(d,null)),R=e.props?a:Pp(a)}}catch(M){Yi.length=0,Xo(M,n,1),p=Bt(Ti)}let T=p;if(R&&y!==!1){const M=Object.keys(R),{shapeFlag:U}=T;M.length&&U&7&&(r&&M.some(Ho)&&(R=Dp(R,r)),T=Ps(T,R,!1,!0))}return t.dirs&&(T=Ps(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&fc(T,t.transition),p=T,To(m),p}const Pp=n=>{let e;for(const t in n)(t==="class"||t==="style"||zo(t))&&((e||(e={}))[t]=n[t]);return e},Dp=(n,e)=>{const t={};for(const i in n)(!Ho(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Lp(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Gc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(df(o,i,f)&&!qo(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Gc(i,o,c):!0:!!o;return!1}function Gc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(df(e,n,r)&&!qo(t,r))return!0}return!1}function df(n,e,t){const i=n[t],s=e[t];return t==="style"&&mt(i)&&mt(s)?!Os(i,s):i!==s}function Ip({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const ff={},hf=()=>Object.create(ff),pf=n=>Object.getPrototypeOf(n)===ff;function Up(n,e,t,i=!1){const s={},r=hf();n.propsDefaults=Object.create(null),mf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Gh(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Np(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=dt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(qo(n.emitsOptions,f))continue;const h=e[f];if(l)if(ft(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const v=Tn(f);s[v]=ol(l,a,v,h,n,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{mf(n,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!ft(e,d)&&((u=Ji(d))===d||!ft(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=ol(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!ft(e,d))&&(delete r[d],c=!0)}c&&ni(n.attrs,"set","")}function mf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(rr(l))continue;const c=e[l];let u;s&&ft(s,u=Tn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:qo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=dt(t),c=a||_t;for(let u=0;u<r.length;u++){const d=r[u];t[d]=ol(s,l,d,c[d],n,!ft(c,d))}}return o}function ol(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=ft(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&je(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Ar(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ji(t))&&(i=!0))}return i}const Fp=new WeakMap;function gf(n,e,t=!1){const i=t?Fp:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!je(n)){const u=d=>{l=!0;const[f,h]=gf(d,e,!0);Xt(o,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return mt(n)&&i.set(n,ys),ys;if(Xe(r))for(let u=0;u<r.length;u++){const d=Tn(r[u]);Wc(d)&&(o[d]=_t)}else if(r)for(const u in r){const d=Tn(u);if(Wc(d)){const f=r[u],h=o[d]=Xe(f)||je(f)?{type:f}:Xt({},f),v=h.type;let y=!1,m=!0;if(Xe(v))for(let p=0;p<v.length;++p){const R=v[p],T=je(R)&&R.name;if(T==="Boolean"){y=!0;break}else T==="String"&&(m=!1)}else y=je(v)&&v.name==="Boolean";h[0]=y,h[1]=m,(y||ft(h,"default"))&&a.push(d)}}const c=[o,a];return mt(n)&&i.set(n,c),c}function Wc(n){return n[0]!=="$"&&!rr(n)}const hc=n=>n==="_"||n==="_ctx"||n==="$stable",pc=n=>Xe(n)?n.map(Fn):[Fn(n)],Op=(n,e,t)=>{if(e._n)return e;const i=tp((...s)=>pc(e(...s)),t);return i._c=!1,i},_f=(n,e,t)=>{const i=n._ctx;for(const s in n){if(hc(s))continue;const r=n[s];if(je(r))e[s]=Op(s,r,i);else if(r!=null){const o=pc(r);e[s]=()=>o}}},xf=(n,e)=>{const t=pc(e);n.slots.default=()=>t},vf=(n,e,t)=>{for(const i in e)(t||!hc(i))&&(n[i]=e[i])},Bp=(n,e,t)=>{const i=n.slots=hf();if(n.vnode.shapeFlag&32){const s=e._;s?(vf(i,e,t),t&&Rd(i,"_",s,!0)):_f(e,i)}else e&&xf(n,e)},kp=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=_t;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:vf(s,e,t):(r=!e.$stable,_f(e,s)),o=e}else e&&(xf(n,e),o={default:1});if(r)for(const a in s)!hc(a)&&o[a]==null&&delete s[a]},en=Wp;function zp(n){return Hp(n)}function Hp(n,e){const t=Go();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Hn,insertStaticContent:v}=n,y=(C,I,S,oe=null,J=null,te=null,Q=void 0,se=null,j=!!I.dynamicChildren)=>{if(C===I)return;C&&!js(C,I)&&(oe=ve(C),ze(C,J,te,!0),C=null),I.patchFlag===-2&&(j=!1,I.dynamicChildren=null);const{type:Y,ref:we,shapeFlag:w}=I;switch(Y){case Yo:m(C,I,S,oe);break;case Ti:p(C,I,S,oe);break;case go:C==null&&R(I,S,oe,Q);break;case ct:$(C,I,S,oe,J,te,Q,se,j);break;default:w&1?U(C,I,S,oe,J,te,Q,se,j):w&6?B(C,I,S,oe,J,te,Q,se,j):(w&64||w&128)&&Y.process(C,I,S,oe,J,te,Q,se,j,ke)}we!=null&&J?lr(we,C&&C.ref,te,I||C,!I):we==null&&C&&C.ref!=null&&lr(C.ref,null,te,C,!0)},m=(C,I,S,oe)=>{if(C==null)i(I.el=a(I.children),S,oe);else{const J=I.el=C.el;I.children!==C.children&&c(J,I.children)}},p=(C,I,S,oe)=>{C==null?i(I.el=l(I.children||""),S,oe):I.el=C.el},R=(C,I,S,oe)=>{[C.el,C.anchor]=v(C.children,I,S,oe,C.el,C.anchor)},T=({el:C,anchor:I},S,oe)=>{let J;for(;C&&C!==I;)J=f(C),i(C,S,oe),C=J;i(I,S,oe)},M=({el:C,anchor:I})=>{let S;for(;C&&C!==I;)S=f(C),s(C),C=S;s(I)},U=(C,I,S,oe,J,te,Q,se,j)=>{if(I.type==="svg"?Q="svg":I.type==="math"&&(Q="mathml"),C==null)P(I,S,oe,J,te,Q,se,j);else{const Y=C.el&&C.el._isVueCE?C.el:null;try{Y&&Y._beginPatch(),E(C,I,J,te,Q,se,j)}finally{Y&&Y._endPatch()}}},P=(C,I,S,oe,J,te,Q,se)=>{let j,Y;const{props:we,shapeFlag:w,transition:g,dirs:F}=C;if(j=C.el=o(C.type,te,we&&we.is,we),w&8?u(j,C.children):w&16&&N(C.children,j,null,oe,J,fa(C,te),Q,se),F&&Pi(C,null,oe,"created"),A(j,C,C.scopeId,Q,oe),we){for(const ee in we)ee!=="value"&&!rr(ee)&&r(j,ee,null,we[ee],te,oe);"value"in we&&r(j,"value",null,we.value,te),(Y=we.onVnodeBeforeMount)&&Ln(Y,oe,C)}F&&Pi(C,null,oe,"beforeMount");const W=Vp(J,g);W&&g.beforeEnter(j),i(j,I,S),((Y=we&&we.onVnodeMounted)||W||F)&&en(()=>{Y&&Ln(Y,oe,C),W&&g.enter(j),F&&Pi(C,null,oe,"mounted")},J)},A=(C,I,S,oe,J)=>{if(S&&h(C,S),oe)for(let te=0;te<oe.length;te++)h(C,oe[te]);if(J){let te=J.subTree;if(I===te||Sf(te.type)&&(te.ssContent===I||te.ssFallback===I)){const Q=J.vnode;A(C,Q,Q.scopeId,Q.slotScopeIds,J.parent)}}},N=(C,I,S,oe,J,te,Q,se,j=0)=>{for(let Y=j;Y<C.length;Y++){const we=C[Y]=se?ti(C[Y]):Fn(C[Y]);y(null,we,I,S,oe,J,te,Q,se)}},E=(C,I,S,oe,J,te,Q)=>{const se=I.el=C.el;let{patchFlag:j,dynamicChildren:Y,dirs:we}=I;j|=C.patchFlag&16;const w=C.props||_t,g=I.props||_t;let F;if(S&&Di(S,!1),(F=g.onVnodeBeforeUpdate)&&Ln(F,S,I,C),we&&Pi(I,C,S,"beforeUpdate"),S&&Di(S,!0),Y&&(!C.dynamicChildren||C.dynamicChildren.length!==Y.length)&&(j=0,Q=!1,Y=null),(w.innerHTML&&g.innerHTML==null||w.textContent&&g.textContent==null)&&u(se,""),Y?x(C.dynamicChildren,Y,se,S,oe,fa(I,J),te):Q||V(C,I,se,null,S,oe,fa(I,J),te,!1),j>0){if(j&16)D(se,w,g,S,J);else if(j&2&&w.class!==g.class&&r(se,"class",null,g.class,J),j&4&&r(se,"style",w.style,g.style,J),j&8){const W=I.dynamicProps;for(let ee=0;ee<W.length;ee++){const G=W[ee],xe=w[G],de=g[G];(de!==xe||G==="value")&&r(se,G,xe,de,J,S)}}j&1&&C.children!==I.children&&u(se,I.children)}else!Q&&Y==null&&D(se,w,g,S,J);((F=g.onVnodeUpdated)||we)&&en(()=>{F&&Ln(F,S,I,C),we&&Pi(I,C,S,"updated")},oe)},x=(C,I,S,oe,J,te,Q)=>{for(let se=0;se<I.length;se++){const j=C[se],Y=I[se],we=j.el&&(j.type===ct||!js(j,Y)||j.shapeFlag&198)?d(j.el):S;y(j,Y,we,null,oe,J,te,Q,!0)}},D=(C,I,S,oe,J)=>{if(I!==S){if(I!==_t)for(const te in I)!rr(te)&&!(te in S)&&r(C,te,I[te],null,J,oe);for(const te in S){if(rr(te))continue;const Q=S[te],se=I[te];Q!==se&&te!=="value"&&r(C,te,se,Q,J,oe)}"value"in S&&r(C,"value",I.value,S.value,J)}},$=(C,I,S,oe,J,te,Q,se,j)=>{const Y=I.el=C?C.el:a(""),we=I.anchor=C?C.anchor:a("");let{patchFlag:w,dynamicChildren:g,slotScopeIds:F}=I;F&&(se=se?se.concat(F):F),C==null?(i(Y,S,oe),i(we,S,oe),N(I.children||[],S,we,J,te,Q,se,j)):w>0&&w&64&&g&&C.dynamicChildren&&C.dynamicChildren.length===g.length?(x(C.dynamicChildren,g,S,J,te,Q,se),(I.key!=null||J&&I===J.subTree)&&bf(C,I,!0)):V(C,I,S,we,J,te,Q,se,j)},B=(C,I,S,oe,J,te,Q,se,j)=>{I.slotScopeIds=se,C==null?I.shapeFlag&512?J.ctx.activate(I,S,oe,Q,j):Z(I,S,oe,J,te,Q,j):ne(C,I,j)},Z=(C,I,S,oe,J,te,Q)=>{const se=C.component=jp(C,oe,J);if(sf(C)&&(se.ctx.renderer=ke),Jp(se,!1,Q),se.asyncDep){if(J&&J.registerDep(se,q,Q),!C.el){const j=se.subTree=Bt(Ti);p(null,j,I,S),C.placeholder=j.el}}else q(se,C,I,S,J,te,Q)},ne=(C,I,S)=>{const oe=I.component=C.component;if(Lp(C,I,S))if(oe.asyncDep&&!oe.asyncResolved){K(oe,I,S);return}else oe.next=I,oe.update();else I.el=C.el,oe.vnode=I},q=(C,I,S,oe,J,te,Q)=>{const se=()=>{if(C.isMounted){let{next:w,bu:g,u:F,parent:W,vnode:ee}=C;{const Re=yf(C);if(Re){w&&(w.el=ee.el,K(C,w,Q)),Re.asyncDep.then(()=>{en(()=>{C.isUnmounted||Y()},J)});return}}let G=w,xe;Di(C,!1),w?(w.el=ee.el,K(C,w,Q)):w=ee,g&&po(g),(xe=w.props&&w.props.onVnodeBeforeUpdate)&&Ln(xe,W,w,ee),Di(C,!0);const de=Vc(C),Te=C.subTree;C.subTree=de,y(Te,de,d(Te.el),ve(Te),C,J,te),w.el=de.el,G===null&&Ip(C,de.el),F&&en(F,J),(xe=w.props&&w.props.onVnodeUpdated)&&en(()=>Ln(xe,W,w,ee),J)}else{let w;const{el:g,props:F}=I,{bm:W,m:ee,parent:G,root:xe,type:de}=C,Te=cr(I);Di(C,!1),W&&po(W),!Te&&(w=F&&F.onVnodeBeforeMount)&&Ln(w,G,I),Di(C,!0);{xe.ce&&xe.ce._hasShadowRoot()&&xe.ce._injectChildStyle(de,C.parent?C.parent.type:void 0);const Re=C.subTree=Vc(C);y(null,Re,S,oe,C,J,te),I.el=Re.el}if(ee&&en(ee,J),!Te&&(w=F&&F.onVnodeMounted)){const Re=I;en(()=>Ln(w,G,Re),J)}(I.shapeFlag&256||G&&cr(G.vnode)&&G.vnode.shapeFlag&256)&&C.a&&en(C.a,J),C.isMounted=!0,I=S=oe=null}};C.scope.on();const j=C.effect=new Id(se);C.scope.off();const Y=C.update=j.run.bind(j),we=C.job=j.runIfDirty.bind(j);we.i=C,we.id=C.uid,j.scheduler=()=>dc(we),Di(C,!0),Y()},K=(C,I,S)=>{I.component=C;const oe=C.vnode.props;C.vnode=I,C.next=null,Np(C,I.props,oe,S),kp(C,I.children,S),li(),Nc(C),ci()},V=(C,I,S,oe,J,te,Q,se,j=!1)=>{const Y=C&&C.children,we=C?C.shapeFlag:0,w=I.children,{patchFlag:g,shapeFlag:F}=I;if(g>0){if(g&128){Ee(Y,w,S,oe,J,te,Q,se,j);return}else if(g&256){me(Y,w,S,oe,J,te,Q,se,j);return}}F&8?(we&16&&Ie(Y,J,te),w!==Y&&u(S,w)):we&16?F&16?Ee(Y,w,S,oe,J,te,Q,se,j):Ie(Y,J,te,!0):(we&8&&u(S,""),F&16&&N(w,S,oe,J,te,Q,se,j))},me=(C,I,S,oe,J,te,Q,se,j)=>{C=C||ys,I=I||ys;const Y=C.length,we=I.length,w=Math.min(Y,we);let g;for(g=0;g<w;g++){const F=I[g]=j?ti(I[g]):Fn(I[g]);y(C[g],F,S,null,J,te,Q,se,j)}Y>we?Ie(C,J,te,!0,!1,w):N(I,S,oe,J,te,Q,se,j,w)},Ee=(C,I,S,oe,J,te,Q,se,j)=>{let Y=0;const we=I.length;let w=C.length-1,g=we-1;for(;Y<=w&&Y<=g;){const F=C[Y],W=I[Y]=j?ti(I[Y]):Fn(I[Y]);if(js(F,W))y(F,W,S,null,J,te,Q,se,j);else break;Y++}for(;Y<=w&&Y<=g;){const F=C[w],W=I[g]=j?ti(I[g]):Fn(I[g]);if(js(F,W))y(F,W,S,null,J,te,Q,se,j);else break;w--,g--}if(Y>w){if(Y<=g){const F=g+1,W=F<we?I[F].el:oe;for(;Y<=g;)y(null,I[Y]=j?ti(I[Y]):Fn(I[Y]),S,W,J,te,Q,se,j),Y++}}else if(Y>g)for(;Y<=w;)ze(C[Y],J,te,!0),Y++;else{const F=Y,W=Y,ee=new Map;for(Y=W;Y<=g;Y++){const Le=I[Y]=j?ti(I[Y]):Fn(I[Y]);Le.key!=null&&ee.set(Le.key,Y)}let G,xe=0;const de=g-W+1;let Te=!1,Re=0;const ae=new Array(de);for(Y=0;Y<de;Y++)ae[Y]=0;for(Y=F;Y<=w;Y++){const Le=C[Y];if(xe>=de){ze(Le,J,te,!0);continue}let Ue;if(Le.key!=null)Ue=ee.get(Le.key);else for(G=W;G<=g;G++)if(ae[G-W]===0&&js(Le,I[G])){Ue=G;break}Ue===void 0?ze(Le,J,te,!0):(ae[Ue-W]=Y+1,Ue>=Re?Re=Ue:Te=!0,y(Le,I[Ue],S,null,J,te,Q,se,j),xe++)}const Ae=Te?Gp(ae):ys;for(G=Ae.length-1,Y=de-1;Y>=0;Y--){const Le=W+Y,Ue=I[Le],ge=I[Le+1],Ge=Le+1<we?ge.el||Mf(ge):oe;ae[Y]===0?y(null,Ue,S,Ge,J,te,Q,se,j):Te&&(G<0||Y!==Ae[G]?De(Ue,S,Ge,2):G--)}}},De=(C,I,S,oe,J=null)=>{const{el:te,type:Q,transition:se,children:j,shapeFlag:Y}=C;if(Y&6){De(C.component.subTree,I,S,oe);return}if(Y&128){C.suspense.move(I,S,oe);return}if(Y&64){Q.move(C,I,S,ke);return}if(Q===ct){i(te,I,S);for(let w=0;w<j.length;w++)De(j[w],I,S,oe);i(C.anchor,I,S);return}if(Q===go){T(C,I,S);return}if(oe!==2&&Y&1&&se)if(oe===0)se.persisted&&!te[ua]?i(te,I,S):(se.beforeEnter(te),i(te,I,S),en(()=>se.enter(te),J));else{const{leave:w,delayLeave:g,afterLeave:F}=se,W=()=>{C.ctx.isUnmounted?s(te):i(te,I,S)},ee=()=>{const G=te._isLeaving||!!te[ua];te._isLeaving&&te[ua](!0),se.persisted&&!G?W():w(te,()=>{W(),F&&F()})};g?g(te,W,ee):ee()}else i(te,I,S)},ze=(C,I,S,oe=!1,J=!1)=>{const{type:te,props:Q,ref:se,children:j,dynamicChildren:Y,shapeFlag:we,patchFlag:w,dirs:g,cacheIndex:F,memo:W}=C;if(w===-2&&(J=!1),se!=null&&(li(),lr(se,null,S,C,!0),ci()),F!=null&&(I.renderCache[F]=void 0),we&256){I.ctx.deactivate(C);return}const ee=we&1&&g,G=!cr(C);let xe;if(G&&(xe=Q&&Q.onVnodeBeforeUnmount)&&Ln(xe,I,C),we&6)he(C.component,S,oe);else{if(we&128){C.suspense.unmount(S,oe);return}ee&&Pi(C,null,I,"beforeUnmount"),we&64?C.type.remove(C,I,S,ke,oe):Y&&!Y.hasOnce&&(te!==ct||w>0&&w&64)?Ie(Y,I,S,!1,!0):(te===ct&&w&384||!J&&we&16)&&Ie(j,I,S),oe&&it(C)}const de=W!=null&&F==null;(G&&(xe=Q&&Q.onVnodeUnmounted)||ee||de)&&en(()=>{xe&&Ln(xe,I,C),ee&&Pi(C,null,I,"unmounted"),de&&(C.el=null)},S)},it=C=>{const{type:I,el:S,anchor:oe,transition:J}=C;if(I===ct){ie(S,oe);return}if(I===go){M(C);return}const te=()=>{s(S),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(C.shapeFlag&1&&J&&!J.persisted){const{leave:Q,delayLeave:se}=J,j=()=>Q(S,te);se?se(C.el,te,j):j()}else te()},ie=(C,I)=>{let S;for(;C!==I;)S=f(C),s(C),C=S;s(I)},he=(C,I,S)=>{const{bum:oe,scope:J,job:te,subTree:Q,um:se,m:j,a:Y}=C;Xc(j),Xc(Y),oe&&po(oe),J.stop(),te&&(te.flags|=8,ze(Q,C,I,S)),se&&en(se,I),en(()=>{C.isUnmounted=!0},I)},Ie=(C,I,S,oe=!1,J=!1,te=0)=>{for(let Q=te;Q<C.length;Q++)ze(C[Q],I,S,oe,J)},ve=C=>{if(C.shapeFlag&6)return ve(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const I=f(C.anchor||C.el),S=I&&I[op];return S?f(S):I};let Fe=!1;const et=(C,I,S)=>{let oe;C==null?I._vnode&&(ze(I._vnode,null,null,!0),oe=I._vnode.component):y(I._vnode||null,C,I,null,null,null,S),I._vnode=C,Fe||(Fe=!0,Nc(oe),jd(),Fe=!1)},ke={p:y,um:ze,m:De,r:it,mt:Z,mc:N,pc:V,pbc:x,n:ve,o:n};return{render:et,hydrate:void 0,createApp:Tp(et)}}function fa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Di({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Vp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function bf(n,e,t=!1){const i=n.children,s=e.children;if(Xe(i)&&Xe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ti(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&bf(o,a)),a.type===Yo&&(a.patchFlag===-1&&(a=s[r]=ti(a)),a.el=o.el),a.type===Ti&&!a.el&&(a.el=o.el)}}function Gp(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function yf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:yf(e)}function Xc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Mf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Mf(e.subTree):null}const Sf=n=>n.__isSuspense;function Wp(n,e){e&&e.pendingBranch?Xe(n)?e.effects.push(...n):e.effects.push(n):ep(n)}const ct=Symbol.for("v-fgt"),Yo=Symbol.for("v-txt"),Ti=Symbol.for("v-cmt"),go=Symbol.for("v-stc"),Yi=[];let cn=null;function pe(n=!1){Yi.push(cn=n?null:[])}function Ef(){Yi.pop(),cn=Yi[Yi.length-1]||null}let gr=1;function $c(n,e=!1){gr+=n,n<0&&cn&&e&&(cn.hasOnce=!0)}function wf(n){return n.dynamicChildren=gr>0?cn||ys:null,Ef(),gr>0&&cn&&cn.push(n),n}function _e(n,e,t,i,s,r){return wf(b(n,e,t,i,s,r,!0))}function kn(n,e,t,i,s){return wf(Bt(n,e,t,i,s,!0))}function Tf(n){return n?n.__v_isVNode===!0:!1}function js(n,e){return n.type===e.type&&n.key===e.key}const Af=({key:n})=>n??null,_o=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?At(n)||Wt(n)||je(n)?{i:gn,r:n,k:e,f:!!t}:n:null);function b(n,e=null,t=null,i=0,s=null,r=n===ct?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Af(e),ref:e&&_o(e),scopeId:Jd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:gn};return a?(Co(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),gr>0&&!o&&cn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&cn.push(l),l}const Bt=Xp;function Xp(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===xp)&&(n=Ti),Tf(n)){const a=Ps(n,e,!0);return t&&Co(a,t),gr>0&&!r&&cn&&(a.shapeFlag&6?cn[cn.indexOf(n)]=a:cn.push(a)),a.patchFlag=-2,a}if(nm(n)&&(n=n.__vccOpts),e){e=$p(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=Ct(a)),mt(l)&&(cc(l)&&!Xe(l)&&(l=Xt({},l)),e.style=Ht(l))}const o=At(n)?1:Sf(n)?128:ap(n)?64:mt(n)?4:je(n)?2:0;return b(n,e,t,i,s,o,r,!0)}function $p(n){return n?cc(n)||pf(n)?Xt({},n):n:null}function Ps(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?qp(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Af(c),ref:e&&e.ref?t&&r?Xe(r)?r.concat(_o(e)):[r,_o(e)]:_o(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ct?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ps(n.ssContent),ssFallback:n.ssFallback&&Ps(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&fc(u,l.clone(u)),u}function Rt(n=" ",e=0){return Bt(Yo,null,n,e)}function _r(n,e){const t=Bt(go,null,n);return t.staticCount=e,t}function ht(n="",e=!1){return e?(pe(),kn(Ti,null,n)):Bt(Ti,null,n)}function Fn(n){return n==null||typeof n=="boolean"?Bt(Ti):Xe(n)?Bt(ct,null,n.slice()):Tf(n)?ti(n):Bt(Yo,null,String(n))}function ti(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ps(n)}function Co(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Xe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Co(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!pf(e)?e._ctx=gn:s===3&&gn&&(gn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(je(e)){if(i&65){Co(n,{default:e});return}e={default:e,_ctx:gn},t=32}else e=String(e),i&64?(t=16,e=[Rt(e)]):t=8;n.children=e,n.shapeFlag|=t}function qp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ct([e.class,i.class]));else if(s==="style")e.style=Ht([e.style,i.style]);else if(zo(s)){const r=e[s],o=i[s];o&&r!==o&&!(Xe(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Ho(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function Ln(n,e,t,i=null){Dn(n,e,7,[t,i])}const Yp=cf();let Kp=0;function jp(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Yp,r={uid:Kp++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Eh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gf(i,s),emitsOptions:uf(i,s),emit:null,emitted:null,propsDefaults:_t,inheritAttrs:i.inheritAttrs,ctx:_t,data:_t,props:_t,attrs:_t,slots:_t,refs:_t,setupState:_t,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Rp.bind(null,r),n.ce&&n.ce(r),r}let Zt=null;const Zp=()=>Zt||gn;let Po,al;{const n=Go(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Po=e("__VUE_INSTANCE_SETTERS__",t=>Zt=t),al=e("__VUE_SSR_SETTERS__",t=>xr=t)}const Ar=n=>{const e=Zt;return Po(n),n.scope.on(),()=>{n.scope.off(),Po(e)}},qc=()=>{Zt&&Zt.scope.off(),Po(null)};function Rf(n){return n.vnode.shapeFlag&4}let xr=!1;function Jp(n,e=!1,t=!1){e&&al(e);const{props:i,children:s}=n.vnode,r=Rf(n);Up(n,i,r,e),Bp(n,s,t||e);const o=r?Qp(n,e):void 0;return e&&al(!1),o}function Qp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,vp);const{setup:i}=t;if(i){li();const s=n.setupContext=i.length>1?tm(n):null,r=Ar(n),o=Tr(i,n,0,[n.props,s]),a=Ed(o);if(ci(),r(),(a||n.sp)&&!cr(n)&&nf(n),a){if(o.then(qc,qc),e)return o.then(l=>{Yc(n,l)}).catch(l=>{Xo(l,n,0)});n.asyncDep=o}else Yc(n,o)}else Cf(n)}function Yc(n,e,t){je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:mt(e)&&(n.setupState=qd(e)),Cf(n)}function Cf(n,e,t){const i=n.type;n.render||(n.render=i.render||Hn);{const s=Ar(n);li();try{bp(n)}finally{ci(),s()}}}const em={get(n,e){return Vt(n,"get",""),n[e]}};function tm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,em),slots:n.slots,emit:n.emit,expose:e}}function Ko(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(qd(Wh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ur)return ur[t](n)},has(e,t){return t in e||t in ur}})):n.proxy}function nm(n){return je(n)&&"__vccOpts"in n}const Ye=(n,e)=>Kh(n,e,xr),im="3.5.40";let ll;const Kc=typeof window<"u"&&window.trustedTypes;if(Kc)try{ll=Kc.createPolicy("vue",{createHTML:n=>n})}catch{}const Pf=ll?n=>ll.createHTML(n):n=>n,sm="http://www.w3.org/2000/svg",rm="http://www.w3.org/1998/Math/MathML",ei=typeof document<"u"?document:null,jc=ei&&ei.createElement("template"),om={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ei.createElementNS(sm,n):e==="mathml"?ei.createElementNS(rm,n):t?ei.createElement(n,{is:t}):ei.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ei.createTextNode(n),createComment:n=>ei.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ei.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{jc.innerHTML=Pf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=jc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},am=Symbol("_vtc");function lm(n,e,t){const i=n[am];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Zc=Symbol("_vod"),cm=Symbol("_vsh"),um=Symbol(""),dm=/(?:^|;)\s*display\s*:/;function fm(n,e,t){const i=n.style,s=At(t);let r=!1;if(t&&!s){if(e)if(At(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ir(i,a,"")}else for(const o in e)t[o]==null&&ir(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?pm(n,o,!At(e)&&e?e[o]:void 0,a)||ir(i,o,a):ir(i,o,"")}}else if(s){if(e!==t){const o=i[um];o&&(t+=";"+o),i.cssText=t,r=dm.test(t)}}else e&&n.removeAttribute("style");Zc in n&&(n[Zc]=r?i.display:"",n[cm]&&(i.display="none"))}const Jc=/\s*!important$/;function ir(n,e,t){if(Xe(t))t.forEach(i=>ir(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=hm(n,e);Jc.test(t)?n.setProperty(Ji(i),t.replace(Jc,""),"important"):n[i]=t}}const Qc=["Webkit","Moz","ms"],ha={};function hm(n,e){const t=ha[e];if(t)return t;let i=Tn(e);if(i!=="filter"&&i in n)return ha[e]=i;i=Ad(i);for(let s=0;s<Qc.length;s++){const r=Qc[s]+i;if(r in n)return ha[e]=r}return e}function pm(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&At(i)&&t===i}const eu="http://www.w3.org/1999/xlink";function tu(n,e,t,i,s,r=Mh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(eu,e.slice(6,e.length)):n.setAttributeNS(eu,e,t):t==null||r&&!Pd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Wn(t)?String(t):t)}function nu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Pf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Pd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function mc(n,e,t,i){n.addEventListener(e,t,i)}function mm(n,e,t,i){n.removeEventListener(e,t,i)}const iu=Symbol("_vei");function gm(n,e,t,i,s=null){const r=n[iu]||(n[iu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=vm(e);if(i){const c=r[e]=Mm(i,s);mc(n,a,c,l)}else o&&(mm(n,a,o,l),r[e]=void 0)}}const _m=/(Once|Passive|Capture)$/,xm=/^on:?(?:Once|Passive|Capture)$/;function vm(n){let e,t;for(;(t=n.match(_m))&&!xm.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Ji(n.slice(2)),e]}let pa=0;const bm=Promise.resolve(),ym=()=>pa||(bm.then(()=>pa=0),pa=Date.now());function Mm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(Xe(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Dn(c,e,5,a)}}else Dn(s,e,5,[i])};return t.value=n,t.attached=ym(),t}const su=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Sm=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?lm(n,i,o):e==="style"?fm(n,t,i):zo(e)?Ho(e)||gm(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Em(n,e,i,o))?(nu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&tu(n,e,i,o,r,e!=="value")):n._isVueCE&&(wm(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!At(i)))?nu(n,Tn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),tu(n,e,i,o))};function Em(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&su(e)&&je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return su(e)&&At(t)?!1:e in n}function wm(n,e){const t=n._def.props;if(!t)return!1;const i=Tn(e);return Array.isArray(t)?t.some(s=>Tn(s)===i):Object.keys(t).some(s=>Tn(s)===i)}const Do=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Xe(e)?t=>po(e,t):e},ws=Symbol("_assign"),Tm={deep:!0,created(n,e,t){n[ws]=Do(t),mc(n,"change",()=>{const i=n._modelValue,s=vr(n),r=n.checked,o=n[ws];if(Xe(i)){const a=nc(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Fs(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Df(n,r))})},mounted:ru,beforeUpdate(n,e,t){n[ws]=Do(t),ru(n,e,t)}};function ru(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(Xe(e))s=nc(e,i.props.value)>-1;else if(Fs(e))s=e.has(i.props.value);else{if(e===t)return;s=Os(e,Df(n,!0))}n.checked!==s&&(n.checked=s)}const Am={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,mc(n,"change",()=>{const s=Array.prototype.filter.call(n.options,r=>r.selected).map(r=>t?Cd(vr(r)):vr(r));n[ws](n.multiple?Fs(n._modelValue)?new Set(s):s:s[0]),n._assigning=!0,uc(()=>{n._assigning=!1})}),n[ws]=Do(i)},mounted(n,{value:e}){ou(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[ws]=Do(t)},updated(n,{value:e}){n._assigning||ou(n,e)}};function ou(n,e){const t=n.multiple,i=Xe(e);if(!(t&&!i&&!Fs(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=vr(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=nc(e,a)>-1}else o.selected=e.has(a);else if(Os(vr(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function vr(n){return"_value"in n?n._value:n.value}function Df(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Rm=["ctrl","shift","alt","meta"],Cm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Rm.some(t=>n[`${t}Key`]&&!e.includes(t))},gc=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=Cm[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},Pm=Xt({patchProp:Sm},om);let au;function Dm(){return au||(au=zp(Pm))}const Lm=((...n)=>{const e=Dm().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Um(i);if(!s)return;const r=e._component;!je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Im(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Im(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Um(n){return At(n)?document.querySelector(n):n}const Lf="drone-trainer-controller-calibration",Nm={version:1,calibrated:!1,deadzone:.03,axes:{roll:{min:-1,center:0,max:1},pitch:{min:-1,center:0,max:1},yaw:{min:-1,center:0,max:1},throttle:{min:-1,max:1}}};function xs(){return JSON.parse(JSON.stringify(Nm))}function cl(n,e,t){return Math.min(t,Math.max(e,n))}function Fm(n,e,t){const i=Number(n??0),s=Number(e?.min??-1),r=Number(e?.center??0),o=Number(e?.max??1);let a=0;if(i<r){const c=r-s;c>1e-4&&(a=-((r-i)/c))}if(i>r){const c=o-r;c>1e-4&&(a=(i-r)/c)}if(a=cl(a,-1,1),Math.abs(a)<=t)return 0;const l=Math.sign(a);return cl(l*((Math.abs(a)-t)/(1-t)),-1,1)}function Om(n,e){const t=Number(n??-1),i=Number(e?.min??-1),r=Number(e?.max??1)-i;return r<=1e-4?0:cl((t-i)/r,0,1)}function Bm(){if(typeof window>"u")return xs();try{const n=window.localStorage.getItem(Lf);if(!n)return xs();const e=JSON.parse(n);return{...xs(),...e,axes:{...xs().axes,...e.axes??{}}}}catch{return xs()}}const pi=Cn(Bm());function _c(){function n(){window.localStorage.setItem(Lf,JSON.stringify(pi))}function e(){const s=xs();Object.assign(pi,s),n()}function t(s){Object.assign(pi,s),pi.calibrated=!0,n()}function i(s,r){return s==="throttle"?Om(r,pi.axes.throttle):Fm(r,pi.axes[s],pi.deadzone)}return{calibration:pi,normalizeAxis:i,save:n,reset:e,setCalibration:t}}const km={class:"flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-lime-300/20 bg-[#11151c] shadow-2xl shadow-black/60"},zm={class:"flex shrink-0 items-start justify-between gap-4 border-b border-white/10 px-6 py-5"},Hm={class:"flex items-center gap-2"},Vm={class:"min-h-0 flex-1 overflow-y-auto p-6"},Gm={key:0,class:"rounded-2xl border border-amber-200/15 bg-amber-200/5.5 p-5 text-sm leading-6 text-amber-50/70"},Wm={class:"mt-6 grid gap-3 sm:grid-cols-3"},Xm={class:"rounded-2xl border border-white/10 bg-black/20 p-4 text-center"},$m={class:"mt-2 font-mono text-xl font-semibold tabular-nums text-sky-100"},qm={class:"rounded-2xl border border-white/10 bg-black/20 p-4 text-center"},Ym={class:"mt-2 font-mono text-xl font-semibold tabular-nums text-sky-100"},Km={class:"rounded-2xl border border-white/10 bg-black/20 p-4 text-center"},jm={class:"mt-2 font-mono text-xl font-semibold tabular-nums text-sky-100"},Zm={class:"mt-6 space-y-3"},Jm={class:"flex items-center justify-between gap-4"},Qm={class:"text-sm font-semibold capitalize text-white/80"},eg={class:"mt-1 font-mono text-xs text-sky-100"},tg={class:"mt-4 h-2 overflow-hidden rounded-full bg-white/10"},ng={class:"mt-3 grid grid-cols-2 gap-3 text-xs"},ig={class:"mt-1 font-mono tabular-nums text-white/75"},sg={class:"text-right"},rg={class:"mt-1 font-mono tabular-nums text-white/75"},og={class:"mt-6 flex gap-3"},ag=["disabled"],lg={class:"mt-6 rounded-2xl border border-white/10 bg-black/20 p-4"},cg={class:"mt-3 grid grid-cols-3 gap-3"},ug={class:"mt-1 font-mono text-sm text-lime-100"},dg={class:"mt-1 font-mono text-sm text-lime-100"},fg={class:"mt-1 font-mono text-sm text-lime-100"},hg={class:"mt-3 rounded-2xl border border-white/10 bg-black/20 p-4"},pg={class:"mt-3 space-y-2"},mg={class:"capitalize text-white/55"},gg={class:"font-mono tabular-nums text-white/70"},_g={class:"font-mono tabular-nums text-white/70"},xg={key:0,class:"mt-6 flex gap-3"},vg={key:1,class:"mt-6 rounded-2xl border border-lime-300/20 bg-lime-300/6 p-5 text-center"},bg={__name:"ControllerCalibrationPanel",emits:["close"],setup(n,{emit:e}){const t=e,{setCalibration:i}=_c(),s=We(!1),r=We(1),o=We(!1),a=We(""),l=We({roll:0,pitch:0,throttle:0,yaw:0}),c=We({roll:null,pitch:null,yaw:null}),u=We({roll:{min:null,max:null},pitch:{min:null,max:null},throttle:{min:null,max:null},yaw:{min:null,max:null}});let d=null;function f(E){return E==null?"----":Number(E).toFixed(4)}function h(){const E=navigator.getGamepads?.()??[];return Array.from(E).find(x=>x&&x.axes.length>=4)??null}function v(E,x){const D=u.value[E];D.min===null&&(D.min=x),D.max===null&&(D.max=x),D.min=Math.min(D.min,x),D.max=Math.max(D.max,x)}function y(){const E=h();if(!E){o.value=!1,a.value="",d=requestAnimationFrame(y);return}o.value=!0,a.value=E.id;const x={roll:E.axes[0]??0,pitch:E.axes[1]??0,throttle:E.axes[2]??0,yaw:E.axes[3]??0};l.value=x,r.value===2&&(v("roll",x.roll),v("pitch",x.pitch),v("throttle",x.throttle),v("yaw",x.yaw)),d=requestAnimationFrame(y)}function m(){c.value={roll:l.value.roll,pitch:l.value.pitch,yaw:l.value.yaw},p(),r.value=2}function p(){u.value={roll:{min:null,max:null},pitch:{min:null,max:null},throttle:{min:null,max:null},yaw:{min:null,max:null}}}function R(){r.value=1}function T(){r.value=3}function M(){p(),r.value=2}function U(E,x){if(E===null||x===null)return 0;const D=Math.abs(x-E);return Math.min(100,D/2*100)}function P(E,x){return E===null||x===null?!1:Math.abs(x-E)>=1.6}function A(){i({deadzone:.03,axes:{roll:{min:u.value.roll.min,center:c.value.roll,max:u.value.roll.max},pitch:{min:u.value.pitch.min,center:c.value.pitch,max:u.value.pitch.max},yaw:{min:u.value.yaw.min,center:c.value.yaw,max:u.value.yaw.max},throttle:{min:u.value.throttle.min,max:u.value.throttle.max}}}),s.value=!0}const N=()=>P(u.value.roll.min,u.value.roll.max)&&P(u.value.pitch.min,u.value.pitch.max)&&P(u.value.yaw.min,u.value.yaw.max)&&P(u.value.throttle.min,u.value.throttle.max);return Bs(()=>{d=requestAnimationFrame(y)}),ks(()=>{d!==null&&cancelAnimationFrame(d)}),(E,x)=>(pe(),_e("div",{class:"fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm",onClick:x[2]||(x[2]=gc(D=>t("close"),["self"]))},[b("section",km,[b("header",zm,[b("div",null,[b("div",Hm,[b("span",{class:Ct(["h-2.5 w-2.5 rounded-full",o.value?"bg-lime-300 shadow-[0_0_12px_rgba(190,242,100,.7)]":"bg-white/25"])},null,2),x[3]||(x[3]=b("p",{class:"text-sm font-semibold text-lime-100"}," Controller Calibration ",-1)),x[4]||(x[4]=b("span",{class:"rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45"}," v0.1 ",-1))]),x[5]||(x[5]=b("p",{class:"mt-1 text-xs text-white/45"}," 校正控制器中立點與操作範圍 ",-1))]),b("button",{type:"button",class:"rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-xs text-white/55 hover:bg-white/10 hover:text-white",onClick:x[0]||(x[0]=D=>t("close"))}," 關閉 ")]),b("div",Vm,[o.value?(pe(),_e(ct,{key:1},[r.value===1?(pe(),_e(ct,{key:0},[x[12]||(x[12]=b("div",{class:"text-center"},[b("p",{class:"text-xs font-semibold uppercase tracking-[0.2em] text-lime-200/60"}," STEP 1 / 3 "),b("h2",{class:"mt-3 text-2xl font-semibold text-white"}," 中立點校正 "),b("p",{class:"mx-auto mt-3 max-w-md text-sm leading-6 text-white/55"}," 完全放開右搖桿， 並讓左搖桿的 Yaw 自動回到中央。 保持控制器不動後，再記錄中立點。 ")],-1)),b("div",Wm,[b("div",Xm,[x[6]||(x[6]=b("p",{class:"text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40"}," Roll ",-1)),b("p",$m,le(f(l.value.roll)),1),x[7]||(x[7]=b("p",{class:"mt-1 text-[11px] text-white/35"}," AXIS 0 ",-1))]),b("div",qm,[x[8]||(x[8]=b("p",{class:"text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40"}," Pitch ",-1)),b("p",Ym,le(f(l.value.pitch)),1),x[9]||(x[9]=b("p",{class:"mt-1 text-[11px] text-white/35"}," AXIS 1 ",-1))]),b("div",Km,[x[10]||(x[10]=b("p",{class:"text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40"}," Yaw ",-1)),b("p",jm,le(f(l.value.yaw)),1),x[11]||(x[11]=b("p",{class:"mt-1 text-[11px] text-white/35"}," AXIS 3 ",-1))])]),x[13]||(x[13]=b("div",{class:"mt-5 rounded-2xl border border-sky-300/15 bg-sky-300/4.5 p-4 text-sm leading-6 text-sky-50/65"},[Rt(" 這裡顯示的是控制器原始數值。 中立位置不一定剛好是 "),b("span",{class:"font-mono text-sky-100"}," 0.0000 "),Rt("。 ")],-1)),b("button",{type:"button",class:"mt-6 w-full rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-200",onClick:m}," 記錄中立點 ")],64)):r.value===2?(pe(),_e(ct,{key:1},[x[16]||(x[16]=_r('<div class="text-center"><p class="text-xs font-semibold uppercase tracking-[0.2em] text-lime-200/60"> STEP 2 / 3 </p><h2 class="mt-3 text-2xl font-semibold text-white"> 操作範圍校正 </h2><p class="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/55"> 將左右兩支搖桿完整推到所有方向的極限。 系統會持續記錄每個軸曾經到過的最小值與最大值。 </p></div><div class="mt-5 rounded-2xl border border-lime-300/15 bg-lime-300/4 p-4 text-sm leading-6 text-lime-50/70"> 建議將右搖桿沿著外圈完整繞一圈， 再把左搖桿的 Yaw 左右推到底， Throttle 則從最低推到最高一次。 </div>',2)),b("div",Zm,[(pe(),_e(ct,null,Vn(["roll","pitch","yaw","throttle"],D=>b("article",{key:D,class:"rounded-2xl border border-white/10 bg-black/20 p-4"},[b("div",Jm,[b("div",null,[b("p",Qm,le(D),1),b("p",eg," RAW "+le(f(l.value[D])),1)]),b("span",{class:Ct(["rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]",P(u.value[D].min,u.value[D].max)?"bg-lime-300/15 text-lime-200":"bg-white/5 text-white/35"])},le(P(u.value[D].min,u.value[D].max)?"READY":"MOVE"),3)]),b("div",tg,[b("div",{class:"h-full rounded-full bg-lime-300/70 transition-[width] duration-100",style:Ht({width:`${U(u.value[D].min,u.value[D].max)}%`})},null,4)]),b("div",ng,[b("div",null,[x[14]||(x[14]=b("p",{class:"text-white/35"}," MIN ",-1)),b("p",ig,le(f(u.value[D].min)),1)]),b("div",sg,[x[15]||(x[15]=b("p",{class:"text-white/35"}," MAX ",-1)),b("p",rg,le(f(u.value[D].max)),1)])])])),64))]),b("div",og,[b("button",{type:"button",class:"flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/65 hover:bg-white/10",onClick:R}," 上一步 "),b("button",{type:"button",class:Ct(["flex-2 rounded-2xl px-5 py-3 text-sm font-semibold transition",N()?"bg-lime-300 text-slate-950 hover:bg-lime-200":"cursor-not-allowed bg-white/5 text-white/25"]),disabled:!N(),onClick:T}," 完成範圍校正 ",10,ag)])],64)):r.value===3?(pe(),_e(ct,{key:2},[x[25]||(x[25]=_r('<div class="text-center"><p class="text-xs font-semibold uppercase tracking-[0.2em] text-lime-200/60"> STEP 3 / 3 </p><div class="mx-auto mt-4 grid h-14 w-14 place-items-center rounded-full bg-lime-300/15 text-2xl text-lime-200"> ✓ </div><h2 class="mt-4 text-2xl font-semibold text-white"> 確認校正結果 </h2><p class="mx-auto mt-3 max-w-md text-sm leading-6 text-white/55"> 請確認中立點與操作範圍是否正常。 儲存後，系統會將這組資料套用到飛行控制。 </p></div>',1)),b("div",lg,[x[20]||(x[20]=b("p",{class:"text-xs font-semibold uppercase tracking-[0.18em] text-white/40"}," Center ",-1)),b("div",cg,[b("div",null,[x[17]||(x[17]=b("p",{class:"text-xs text-white/35"}," Roll ",-1)),b("p",ug,le(f(c.value.roll)),1)]),b("div",null,[x[18]||(x[18]=b("p",{class:"text-xs text-white/35"}," Pitch ",-1)),b("p",dg,le(f(c.value.pitch)),1)]),b("div",null,[x[19]||(x[19]=b("p",{class:"text-xs text-white/35"}," Yaw ",-1)),b("p",fg,le(f(c.value.yaw)),1)])])]),b("div",hg,[x[21]||(x[21]=b("p",{class:"text-xs font-semibold uppercase tracking-[0.18em] text-white/40"}," Range ",-1)),b("div",pg,[(pe(),_e(ct,null,Vn(["roll","pitch","yaw","throttle"],D=>b("div",{key:D,class:"grid grid-cols-[1fr_auto_auto] items-center gap-4 text-xs"},[b("p",mg,le(D),1),b("p",gg,le(f(u.value[D].min)),1),b("p",_g,le(f(u.value[D].max)),1)])),64))])]),s.value?(pe(),_e("div",vg,[x[22]||(x[22]=b("div",{class:"mx-auto grid h-12 w-12 place-items-center rounded-full bg-lime-300/15 text-xl text-lime-200"}," ✓ ",-1)),x[23]||(x[23]=b("p",{class:"mt-3 font-semibold text-lime-100"}," 控制器校正完成 ",-1)),x[24]||(x[24]=b("p",{class:"mt-2 text-sm leading-6 text-white/50"}," 校正資料已儲存，之後的飛行控制會自動使用這組設定。 ",-1)),b("button",{type:"button",class:"mt-5 w-full rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-lime-200",onClick:x[1]||(x[1]=D=>t("close"))}," 完成 ")])):(pe(),_e("div",xg,[b("button",{type:"button",class:"flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/65 hover:bg-white/10",onClick:M}," 重新測量 "),b("button",{type:"button",class:"flex-2 rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-200",onClick:A}," 儲存校正 ")]))],64)):ht("",!0)],64)):(pe(),_e("div",Gm," 尚未偵測到控制器。 請插上 LiteRadio 2 SIM， 並輕微移動搖桿， 讓瀏覽器取得 Gamepad 資料。 "))])])]))}};const xc="178",yg=0,lu=1,Mg=2,If=1,Uf=2,Qn=3,Ai=0,tn=1,Gt=2,Ei=0,Ts=1,cu=2,uu=3,du=4,Sg=5,Hi=100,Eg=101,wg=102,Tg=103,Ag=104,Rg=200,Cg=201,Pg=202,Dg=203,ul=204,dl=205,Lg=206,Ig=207,Ug=208,Ng=209,Fg=210,Og=211,Bg=212,kg=213,zg=214,fl=0,hl=1,pl=2,Ds=3,ml=4,gl=5,_l=6,xl=7,Nf=0,Hg=1,Vg=2,wi=0,Gg=1,Wg=2,Xg=3,$g=4,qg=5,Yg=6,Kg=7,Ff=300,Ls=301,Is=302,vl=303,bl=304,jo=306,yl=1e3,Wi=1001,Ml=1002,Rn=1003,jg=1004,Vr=1005,zn=1006,ma=1007,Xi=1008,Xn=1009,Of=1010,Bf=1011,br=1012,vc=1013,ji=1014,si=1015,Rr=1016,bc=1017,yc=1018,yr=1020,kf=35902,zf=1021,Hf=1022,wn=1023,Mr=1026,Sr=1027,Vf=1028,Mc=1029,Gf=1030,Sc=1031,Ec=1033,xo=33776,vo=33777,bo=33778,yo=33779,Sl=35840,El=35841,wl=35842,Tl=35843,Al=36196,Rl=37492,Cl=37496,Pl=37808,Dl=37809,Ll=37810,Il=37811,Ul=37812,Nl=37813,Fl=37814,Ol=37815,Bl=37816,kl=37817,zl=37818,Hl=37819,Vl=37820,Gl=37821,Mo=36492,Wl=36494,Xl=36495,Wf=36283,$l=36284,ql=36285,Yl=36286,Zg=3200,Jg=3201,Xf=0,Qg=1,Mi="",ln="srgb",Us="srgb-linear",Lo="linear",pt="srgb",is=7680,fu=519,e0=512,t0=513,n0=514,$f=515,i0=516,s0=517,r0=518,o0=519,hu=35044,pu="300 es",ri=2e3,Io=2001;class zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mu=1234567;const dr=Math.PI/180,Er=180/Math.PI;function Hs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function wc(n,e){return(n%e+e)%e}function a0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function l0(n,e,t){return n!==e?(t-n)/(e-n):0}function fr(n,e,t){return(1-t)*n+t*e}function c0(n,e,t,i){return fr(n,e,1-Math.exp(-t*i))}function u0(n,e=1){return e-Math.abs(wc(n,e*2)-e)}function d0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function f0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function h0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function p0(n,e){return n+Math.random()*(e-n)}function m0(n){return n*(.5-Math.random())}function g0(n){n!==void 0&&(mu=n);let e=mu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _0(n){return n*dr}function x0(n){return n*Er}function v0(n){return(n&n-1)===0&&n!==0}function b0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function y0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function M0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),h=r((i-e)/2),v=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Je={DEG2RAD:dr,RAD2DEG:Er,generateUUID:Hs,clamp:nt,euclideanModulo:wc,mapLinear:a0,inverseLerp:l0,lerp:fr,damp:c0,pingpong:u0,smoothstep:d0,smootherstep:f0,randInt:h0,randFloat:p0,randFloatSpread:m0,seededRandom:g0,degToRad:_0,radToDeg:x0,isPowerOfTwo:v0,ceilPowerOfTwo:b0,floorPowerOfTwo:y0,setQuaternionFromProperEuler:M0,normalize:Yt,denormalize:vs};class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],h=r[o+1],v=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=v,e[t+3]=y;return}if(d!==y||l!==f||c!==h||u!==v){let m=1-a;const p=l*f+c*h+u*v+d*y,R=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const U=Math.sqrt(T),P=Math.atan2(U,p*R);m=Math.sin(m*P)/U,a=Math.sin(a*P)/U}const M=a*R;if(l=l*m+f*M,c=c*m+h*M,u=u*m+v*M,d=d*m+y*M,m===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=U,c*=U,u*=U,d*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],v=r[o+3];return e[t]=a*v+u*d+l*h-c*f,e[t+1]=l*v+u*f+c*d-a*h,e[t+2]=c*v+u*h+a*f-l*d,e[t+3]=u*v-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d-f*h*v;break;case"YXZ":this._x=f*u*d+c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d+f*h*v;break;case"ZXY":this._x=f*u*d-c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d-f*h*v;break;case"ZYX":this._x=f*u*d-c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d+f*h*v;break;case"YZX":this._x=f*u*d+c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d-f*h*v;break;case"XZY":this._x=f*u*d-c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d+f*h*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new z,gu=new Cr;class Ke{constructor(e,t,i,s,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],v=i[8],y=s[0],m=s[3],p=s[6],R=s[1],T=s[4],M=s[7],U=s[2],P=s[5],A=s[8];return r[0]=o*y+a*R+l*U,r[3]=o*m+a*T+l*P,r[6]=o*p+a*M+l*A,r[1]=c*y+u*R+d*U,r[4]=c*m+u*T+d*P,r[7]=c*p+u*M+d*A,r[2]=f*y+h*R+v*U,r[5]=f*m+h*T+v*P,r[8]=f*p+h*M+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,v=t*d+i*f+s*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(s*c-u*i)*y,e[2]=(a*i-s*o)*y,e[3]=f*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=h*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new Ke;function qf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Uo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function S0(){const n=Uo("canvas");return n.style.display="block",n}const _u={};function As(n){n in _u||(_u[n]=!0,console.warn(n))}function E0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function w0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function T0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xu=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vu=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A0(){const n={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?Lo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return As("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return As("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Us]:{primaries:e,whitePoint:i,transfer:Lo,toXYZ:xu,fromXYZ:vu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:xu,fromXYZ:vu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),n}const lt=A0();function ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ss;class R0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ss===void 0&&(ss=Uo("canvas")),ss.width=e.width,ss.height=e.height;const s=ss.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ss}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Uo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ai(t[i]/255)*255):t[i]=ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let C0=0;class Tc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Hs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xa(s[o].image)):r.push(xa(s[o]))}else r=xa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function xa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?R0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let P0=0;const va=new z;class nn extends zs{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,i=Wi,s=Wi,r=zn,o=Xi,a=wn,l=Xn,c=nn.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Hs(),this.name="",this.source=new Tc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(va).x}get height(){return this.source.getSize(va).y}get depth(){return this.source.getSize(va).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yl:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yl:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Ff;nn.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,s=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],v=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,M=(h+1)/2,U=(p+1)/2,P=(u+f)/4,A=(d+y)/4,N=(v+m)/4;return T>M&&T>U?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=P/i,r=A/i):M>U?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=P/s,r=N/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=A/r,s=N/r),this.set(i,s,r,t),this}let R=Math.sqrt((m-v)*(m-v)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(R)<.001&&(R=1),this.x=(m-v)/R,this.y=(d-y)/R,this.z=(f-u)/R,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class D0 extends zs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new nn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Tc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends D0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Yf extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class L0 extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gr.copy(i.boundingBox)),Gr.applyMatrix4(e.matrixWorld),this.union(Gr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Wr.subVectors(this.max,Zs),rs.subVectors(e.a,Zs),os.subVectors(e.b,Zs),as.subVectors(e.c,Zs),mi.subVectors(os,rs),gi.subVectors(as,os),Li.subVectors(rs,as);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Li.z,Li.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Li.z,0,-Li.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Li.y,Li.x,0];return!ba(t,rs,os,as,Wr)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,rs,os,as,Wr))?!1:(Xr.crossVectors(mi,gi),t=[Xr.x,Xr.y,Xr.z],ba(t,rs,os,as,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new z,new z,new z,new z,new z,new z,new z,new z],bn=new z,Gr=new Pr,rs=new z,os=new z,as=new z,mi=new z,gi=new z,Li=new z,Zs=new z,Wr=new z,Xr=new z,Ii=new z;function ba(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ii.fromArray(n,r);const a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),u=i.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const I0=new Pr,Js=new z,ya=new z;class Zo{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):I0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const t=Js.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Js,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(ya)),this.expandByPoint(Js.copy(e.center).sub(ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Kn=new z,Ma=new z,$r=new z,_i=new z,Sa=new z,qr=new z,Ea=new z;class Kf{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ma.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(Ma);const r=e.distanceTo(t)*.5,o=-this.direction.dot($r),a=_i.dot(this.direction),l=-_i.dot($r),c=_i.lengthSq(),u=Math.abs(1-o*o);let d,f,h,v;if(u>0)if(d=o*l-a,f=o*a-l,v=r*u,d>=0)if(f>=-v)if(f<=v){const y=1/u;d*=y,f*=y,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ma).addScaledVector($r,f),h}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),s=Kn.dot(Kn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,i,s,r){Sa.subVectors(t,e),qr.subVectors(i,e),Ea.crossVectors(Sa,qr);let o=this.direction.dot(Ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);const l=a*this.direction.dot(qr.crossVectors(_i,qr));if(l<0)return null;const c=a*this.direction.dot(Sa.cross(_i));if(c<0||l+c>o)return null;const u=-a*_i.dot(Ea);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,i,s,r,o,a,l,c,u,d,f,h,v,y,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,f,h,v,y,m)}set(e,t,i,s,r,o,a,l,c,u,d,f,h,v,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=v,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ls.setFromMatrixColumn(e,0).length(),r=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,v=a*u,y=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+v*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=v+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,v=c*u,y=c*d;t[0]=f+y*a,t[4]=v*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-v,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,v=c*u,y=c*d;t[0]=f-y*a,t[4]=-o*d,t[8]=v+h*a,t[1]=h+v*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,v=a*u,y=a*d;t[0]=l*u,t[4]=v*c-h,t[8]=f*c+y,t[1]=l*d,t[5]=y*c+f,t[9]=h*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,v=a*l,y=a*c;t[0]=l*u,t[4]=y-f*d,t[8]=v*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+v,t[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,h=o*c,v=a*l,y=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+y,t[5]=o*u,t[9]=h*d-v,t[2]=v*d-h,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(U0,e,N0)}lookAt(e,t,i){const s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),xi.crossVectors(i,on),xi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),xi.crossVectors(i,on)),xi.normalize(),Yr.crossVectors(on,xi),s[0]=xi.x,s[4]=Yr.x,s[8]=on.x,s[1]=xi.y,s[5]=Yr.y,s[9]=on.y,s[2]=xi.z,s[6]=Yr.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],v=i[2],y=i[6],m=i[10],p=i[14],R=i[3],T=i[7],M=i[11],U=i[15],P=s[0],A=s[4],N=s[8],E=s[12],x=s[1],D=s[5],$=s[9],B=s[13],Z=s[2],ne=s[6],q=s[10],K=s[14],V=s[3],me=s[7],Ee=s[11],De=s[15];return r[0]=o*P+a*x+l*Z+c*V,r[4]=o*A+a*D+l*ne+c*me,r[8]=o*N+a*$+l*q+c*Ee,r[12]=o*E+a*B+l*K+c*De,r[1]=u*P+d*x+f*Z+h*V,r[5]=u*A+d*D+f*ne+h*me,r[9]=u*N+d*$+f*q+h*Ee,r[13]=u*E+d*B+f*K+h*De,r[2]=v*P+y*x+m*Z+p*V,r[6]=v*A+y*D+m*ne+p*me,r[10]=v*N+y*$+m*q+p*Ee,r[14]=v*E+y*B+m*K+p*De,r[3]=R*P+T*x+M*Z+U*V,r[7]=R*A+T*D+M*ne+U*me,r[11]=R*N+T*$+M*q+U*Ee,r[15]=R*E+T*B+M*K+U*De,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],v=e[3],y=e[7],m=e[11],p=e[15];return v*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+y*(+t*l*h-t*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+m*(+t*c*d-t*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+p*(-s*a*u-t*l*d+t*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],v=e[12],y=e[13],m=e[14],p=e[15],R=d*m*c-y*f*c+y*l*h-a*m*h-d*l*p+a*f*p,T=v*f*c-u*m*c-v*l*h+o*m*h+u*l*p-o*f*p,M=u*y*c-v*d*c+v*a*h-o*y*h-u*a*p+o*d*p,U=v*d*l-u*y*l-v*a*f+o*y*f+u*a*m-o*d*m,P=t*R+i*T+s*M+r*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return e[0]=R*A,e[1]=(y*f*r-d*m*r-y*s*h+i*m*h+d*s*p-i*f*p)*A,e[2]=(a*m*r-y*l*r+y*s*c-i*m*c-a*s*p+i*l*p)*A,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*A,e[4]=T*A,e[5]=(u*m*r-v*f*r+v*s*h-t*m*h-u*s*p+t*f*p)*A,e[6]=(v*l*r-o*m*r-v*s*c+t*m*c+o*s*p-t*l*p)*A,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*h+t*l*h)*A,e[8]=M*A,e[9]=(v*d*r-u*y*r-v*i*h+t*y*h+u*i*p-t*d*p)*A,e[10]=(o*y*r-v*a*r+v*i*c-t*y*c-o*i*p+t*a*p)*A,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*h-t*a*h)*A,e[12]=U*A,e[13]=(u*y*s-v*d*s+v*i*f-t*y*f-u*i*m+t*d*m)*A,e[14]=(v*a*s-o*y*s-v*i*l+t*y*l+o*i*m-t*a*m)*A,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,v=r*d,y=o*u,m=o*d,p=a*d,R=l*c,T=l*u,M=l*d,U=i.x,P=i.y,A=i.z;return s[0]=(1-(y+p))*U,s[1]=(h+M)*U,s[2]=(v-T)*U,s[3]=0,s[4]=(h-M)*P,s[5]=(1-(f+p))*P,s[6]=(m+R)*P,s[7]=0,s[8]=(v+T)*A,s[9]=(m-R)*A,s[10]=(1-(f+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ls.set(s[0],s[1],s[2]).length();const o=ls.set(s[4],s[5],s[6]).length(),a=ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yn.copy(this);const c=1/r,u=1/o,d=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,t.setFromRotationMatrix(yn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ri){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let h,v;if(a===ri)h=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Io)h=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ri){const l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(o-r),f=(t+e)*c,h=(i+s)*u;let v,y;if(a===ri)v=(o+r)*d,y=-2*d;else if(a===Io)v=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ls=new z,yn=new Et,U0=new z(0,0,0),N0=new z(1,1,1),xi=new z,Yr=new z,on=new z,bu=new Et,yu=new Cr;class $n{constructor(e=0,t=0,i=0,s=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yu.setFromEuler(this),this.setFromQuaternion(yu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class jf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let F0=0;const Mu=new z,cs=new Cr,jn=new Et,Kr=new z,Qs=new z,O0=new z,B0=new Cr,Su=new z(1,0,0),Eu=new z(0,1,0),wu=new z(0,0,1),Tu={type:"added"},k0={type:"removed"},us={type:"childadded",child:null},wa={type:"childremoved",child:null};class Lt extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new z,t=new $n,i=new Cr,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ke}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Su,e)}rotateY(e){return this.rotateOnAxis(Eu,e)}rotateZ(e){return this.rotateOnAxis(wu,e)}translateOnAxis(e,t){return Mu.copy(e).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Su,e)}translateY(e){return this.translateOnAxis(Eu,e)}translateZ(e){return this.translateOnAxis(wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Kr.copy(e):Kr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Qs,Kr,this.up):jn.lookAt(Kr,Qs,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(jn),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tu),us.child=e,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(k0),wa.child=e,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tu),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,O0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,B0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Lt.DEFAULT_UP=new z(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new z,Zn=new z,Ta=new z,Jn=new z,ds=new z,fs=new z,Au=new z,Aa=new z,Ra=new z,Ca=new z,Pa=new Tt,Da=new Tt,La=new Tt;class En{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Mn.subVectors(e,t),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Mn.subVectors(s,t),Zn.subVectors(i,t),Ta.subVectors(e,t);const o=Mn.dot(Mn),a=Mn.dot(Zn),l=Mn.dot(Ta),c=Zn.dot(Zn),u=Zn.dot(Ta),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,v=(o*u-a*l)*f;return r.set(1-h-v,v,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Pa.setScalar(0),Da.setScalar(0),La.setScalar(0),Pa.fromBufferAttribute(e,t),Da.fromBufferAttribute(e,i),La.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Pa,r.x),o.addScaledVector(Da,r.y),o.addScaledVector(La,r.z),o}static isFrontFacing(e,t,i,s){return Mn.subVectors(i,t),Zn.subVectors(e,t),Mn.cross(Zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Mn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return En.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ds.subVectors(s,i),fs.subVectors(r,i),Aa.subVectors(e,i);const l=ds.dot(Aa),c=fs.dot(Aa);if(l<=0&&c<=0)return t.copy(i);Ra.subVectors(e,s);const u=ds.dot(Ra),d=fs.dot(Ra);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ds,o);Ca.subVectors(e,r);const h=ds.dot(Ca),v=fs.dot(Ca);if(v>=0&&h<=v)return t.copy(r);const y=h*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(fs,a);const m=u*v-h*d;if(m<=0&&d-u>=0&&h-v>=0)return Au.subVectors(r,s),a=(d-u)/(d-u+(h-v)),t.copy(s).addScaledVector(Au,a);const p=1/(m+y+f);return o=y*p,a=f*p,t.copy(i).addScaledVector(ds,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},jr={h:0,s:0,l:0};function Ia(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=wc(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ia(o,r,e+1/3),this.g=Ia(o,r,e),this.b=Ia(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=ln){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const i=Zf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return lt.workingToColorSpace(zt.copy(this),e),Math.round(nt(zt.r*255,0,255))*65536+Math.round(nt(zt.g*255,0,255))*256+Math.round(nt(zt.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(zt.copy(this),t);const i=zt.r,s=zt.g,r=zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=ln){lt.workingToColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,s=zt.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(jr);const i=fr(vi.h,jr.h,t),s=fr(vi.s,jr.s,t),r=fr(vi.l,jr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new tt;tt.NAMES=Zf;let z0=0;class Vs extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Hs(),this.name="",this.type="Material",this.blending=Ts,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=dl,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ul&&(i.blendSrc=this.blendSrc),this.blendDst!==dl&&(i.blendDst=this.blendDst),this.blendEquation!==Hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xn extends Vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new z,Zr=new st;let H0=0;class Gn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hu,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zr.fromBufferAttribute(this,t),Zr.applyMatrix3(e),this.setXY(t,Zr.x,Zr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hu&&(e.usage=this.usage),e}}class Jf extends Gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qf extends Gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mt extends Gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let V0=0;const hn=new Et,Ua=new Lt,hs=new z,an=new Pr,er=new Pr,Ft=new z;class Jt extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qf(e)?Qf:Jf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,i){return hn.makeTranslation(e,t,i),this.applyMatrix4(hn),this}scale(e,t,i){return hn.makeScale(e,t,i),this.applyMatrix4(hn),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];er.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(an.min,er.min),an.expandByPoint(Ft),Ft.addVectors(an.max,er.max),an.expandByPoint(Ft)):(an.expandByPoint(er.min),an.expandByPoint(er.max))}an.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ft.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(e,c),Ft.add(hs)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new z,l[N]=new z;const c=new z,u=new z,d=new z,f=new st,h=new st,v=new st,y=new z,m=new z;function p(N,E,x){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,x),f.fromBufferAttribute(r,N),h.fromBufferAttribute(r,E),v.fromBufferAttribute(r,x),u.sub(c),d.sub(c),h.sub(f),v.sub(f);const D=1/(h.x*v.y-v.x*h.y);isFinite(D)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(d,-h.y).multiplyScalar(D),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-v.x).multiplyScalar(D),a[N].add(y),a[E].add(y),a[x].add(y),l[N].add(m),l[E].add(m),l[x].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let N=0,E=R.length;N<E;++N){const x=R[N],D=x.start,$=x.count;for(let B=D,Z=D+$;B<Z;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const T=new z,M=new z,U=new z,P=new z;function A(N){U.fromBufferAttribute(s,N),P.copy(U);const E=a[N];T.copy(E),T.sub(U.multiplyScalar(U.dot(E))).normalize(),M.crossVectors(P,E);const D=M.dot(l[N])<0?-1:1;o.setXYZW(N,T.x,T.y,T.z,D)}for(let N=0,E=R.length;N<E;++N){const x=R[N],D=x.start,$=x.count;for(let B=D,Z=D+$;B<Z;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,d=new z;if(e)for(let f=0,h=e.count;f<h;f+=3){const v=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?h=l[y]*a.data.stride+a.offset:h=l[y]*u;for(let p=0;p<u;p++)f[v++]=c[h++]}return new Gn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ru=new Et,Ui=new Kf,Jr=new Zo,Cu=new z,Qr=new z,eo=new z,to=new z,Na=new z,no=new z,Pu=new z,io=new z;class Dt extends Lt{constructor(e=new Jt,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){no.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Na.fromBufferAttribute(d,e),o?no.addScaledVector(Na,u):no.addScaledVector(Na.sub(t),u))}t.add(no)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere),Jr.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(Jr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Jr,Cu)===null||Ui.origin.distanceToSquared(Cu)>(e.far-e.near)**2))&&(Ru.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(Ru),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const m=f[v],p=o[m.materialIndex],R=Math.max(m.start,h.start),T=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let M=R,U=T;M<U;M+=3){const P=a.getX(M),A=a.getX(M+1),N=a.getX(M+2);s=so(this,p,e,i,c,u,d,P,A,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let m=v,p=y;m<p;m+=3){const R=a.getX(m),T=a.getX(m+1),M=a.getX(m+2);s=so(this,o,e,i,c,u,d,R,T,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const m=f[v],p=o[m.materialIndex],R=Math.max(m.start,h.start),T=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let M=R,U=T;M<U;M+=3){const P=M,A=M+1,N=M+2;s=so(this,p,e,i,c,u,d,P,A,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,h.start),y=Math.min(l.count,h.start+h.count);for(let m=v,p=y;m<p;m+=3){const R=m,T=m+1,M=m+2;s=so(this,o,e,i,c,u,d,R,T,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function G0(n,e,t,i,s,r,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ai,a),l===null)return null;io.copy(a),io.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(io);return c<t.near||c>t.far?null:{distance:c,point:io.clone(),object:n}}function so(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Qr),n.getVertexPosition(l,eo),n.getVertexPosition(c,to);const u=G0(n,e,t,i,Qr,eo,to,Pu);if(u){const d=new z;En.getBarycoord(Pu,Qr,eo,to,d),s&&(u.uv=En.getInterpolatedAttribute(s,a,l,c,d,new st)),r&&(u.uv1=En.getInterpolatedAttribute(r,a,l,c,d,new st)),o&&(u.normal=En.getInterpolatedAttribute(o,a,l,c,d,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};En.getNormal(Qr,eo,to,f.normal),u.face=f,u.barycoord=d}return u}class oi extends Jt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;v("z","y","x",-1,-1,i,t,e,o,r,0),v("z","y","x",1,-1,i,t,-e,o,r,1),v("x","z","y",1,1,e,i,t,s,o,2),v("x","z","y",1,-1,e,i,-t,s,o,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(d,2));function v(y,m,p,R,T,M,U,P,A,N,E){const x=M/A,D=U/N,$=M/2,B=U/2,Z=P/2,ne=A+1,q=N+1;let K=0,V=0;const me=new z;for(let Ee=0;Ee<q;Ee++){const De=Ee*D-B;for(let ze=0;ze<ne;ze++){const it=ze*x-$;me[y]=it*R,me[m]=De*T,me[p]=Z,c.push(me.x,me.y,me.z),me[y]=0,me[m]=0,me[p]=P>0?1:-1,u.push(me.x,me.y,me.z),d.push(ze/A),d.push(1-Ee/N),K+=1}}for(let Ee=0;Ee<N;Ee++)for(let De=0;De<A;De++){const ze=f+De+ne*Ee,it=f+De+ne*(Ee+1),ie=f+(De+1)+ne*(Ee+1),he=f+(De+1)+ne*Ee;l.push(ze,it,he),l.push(it,ie,he),V+=6}a.addGroup(h,V,E),h+=V,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Kt(n){const e={};for(let t=0;t<n.length;t++){const i=Ns(n[t]);for(const s in i)e[s]=i[s]}return e}function W0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function eh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const X0={clone:Ns,merge:Kt};var $0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$0,this.fragmentShader=q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=W0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class th extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new z,Du=new st,Lu=new st;class mn extends th{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,Du,Lu),t.subVectors(Lu,Du)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class Y0 extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(ps,ms,e,t);s.layers=this.layers,this.add(s);const r=new mn(ps,ms,e,t);r.layers=this.layers,this.add(r);const o=new mn(ps,ms,e,t);o.layers=this.layers,this.add(o);const a=new mn(ps,ms,e,t);a.layers=this.layers,this.add(a);const l=new mn(ps,ms,e,t);l.layers=this.layers,this.add(l);const c=new mn(ps,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Io)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class nh extends nn{constructor(e=[],t=Ls,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class K0 extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new nh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new oi(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Ei});r.uniforms.tEquirect.value=t;const o=new Dt(s,r),a=t.minFilter;return t.minFilter===Xi&&(t.minFilter=zn),new Y0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Si extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j0={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,v=.005;c.inputState.pinching&&f>h+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Si;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ac{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=t,this.far=i}clone(){return new Ac(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Z0 extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Oa=new z,J0=new z,Q0=new Ke;class ki{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Oa.subVectors(i,t).cross(J0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Oa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Q0.getNormalMatrix(e),s=this.coplanarPoint(Oa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Zo,e_=new st(.5,.5),ro=new z;class Rc{constructor(e=new ki,t=new ki,i=new ki,s=new ki,r=new ki,o=new ki){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ri){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],h=s[8],v=s[9],y=s[10],m=s[11],p=s[12],R=s[13],T=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,m-h,M-p).normalize(),i[1].setComponents(l+r,f+c,m+h,M+p).normalize(),i[2].setComponents(l+o,f+u,m+v,M+R).normalize(),i[3].setComponents(l-o,f-u,m-v,M-R).normalize(),i[4].setComponents(l-a,f-d,m-y,M-T).normalize(),t===ri)i[5].setComponents(l+a,f+d,m+y,M+T).normalize();else if(t===Io)i[5].setComponents(a,d,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){Ni.center.set(0,0,0);const t=e_.distanceTo(e.center);return Ni.radius=.7071067811865476+t,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ro.x=s.normal.x>0?e.max.x:e.min.x,ro.y=s.normal.y>0?e.max.y:e.min.y,ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jo extends Vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const No=new z,Fo=new z,Iu=new Et,tr=new Kf,oo=new Zo,Ba=new z,Uu=new z;class Cc extends Lt{constructor(e=new Jt,t=new Jo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)No.fromBufferAttribute(t,s-1),Fo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=No.distanceTo(Fo);e.setAttribute("lineDistance",new Mt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;Iu.copy(s).invert(),tr.copy(e.ray).applyMatrix4(Iu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let y=h,m=v-1;y<m;y+=c){const p=u.getX(y),R=u.getX(y+1),T=ao(this,e,tr,l,p,R,y);T&&t.push(T)}if(this.isLineLoop){const y=u.getX(v-1),m=u.getX(h),p=ao(this,e,tr,l,y,m,v-1);p&&t.push(p)}}else{const h=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let y=h,m=v-1;y<m;y+=c){const p=ao(this,e,tr,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){const y=ao(this,e,tr,l,v-1,h,v-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ao(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(No.fromBufferAttribute(a,s),Fo.fromBufferAttribute(a,r),t.distanceSqToSegment(No,Fo,Ba,Uu)>i)return;Ba.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ba);if(!(c<e.near||c>e.far))return{distance:c,point:Uu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Nu=new z,Fu=new z;class t_ extends Cc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Nu.fromBufferAttribute(t,s),Fu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Nu.distanceTo(Fu);e.setAttribute("lineDistance",new Mt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ih extends nn{constructor(e,t,i=ji,s,r,o,a=Rn,l=Rn,c,u=Mr,d=1){if(u!==Mr&&u!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Dr extends Jt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new z,u=new st;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const h=i+d/t*s;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(a,3)),this.setAttribute("uv",new Mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ki extends Jt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let v=0;const y=[],m=i/2;let p=0;R(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Mt(d,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(h,2));function R(){const M=new z,U=new z;let P=0;const A=(t-e)/i;for(let N=0;N<=r;N++){const E=[],x=N/r,D=x*(t-e)+e;for(let $=0;$<=s;$++){const B=$/s,Z=B*l+a,ne=Math.sin(Z),q=Math.cos(Z);U.x=D*ne,U.y=-x*i+m,U.z=D*q,d.push(U.x,U.y,U.z),M.set(ne,A,q).normalize(),f.push(M.x,M.y,M.z),h.push(B,1-x),E.push(v++)}y.push(E)}for(let N=0;N<s;N++)for(let E=0;E<r;E++){const x=y[E][N],D=y[E+1][N],$=y[E+1][N+1],B=y[E][N+1];(e>0||E!==0)&&(u.push(x,D,B),P+=3),(t>0||E!==r-1)&&(u.push(D,$,B),P+=3)}c.addGroup(p,P,0),p+=P}function T(M){const U=v,P=new st,A=new z;let N=0;const E=M===!0?e:t,x=M===!0?1:-1;for(let $=1;$<=s;$++)d.push(0,m*x,0),f.push(0,x,0),h.push(.5,.5),v++;const D=v;for(let $=0;$<=s;$++){const Z=$/s*l+a,ne=Math.cos(Z),q=Math.sin(Z);A.x=E*q,A.y=m*x,A.z=E*ne,d.push(A.x,A.y,A.z),f.push(0,x,0),P.x=ne*.5+.5,P.y=q*.5*x+.5,h.push(P.x,P.y),v++}for(let $=0;$<s;$++){const B=U+$,Z=D+$;M===!0?u.push(Z,Z+1,B):u.push(Z+1,Z,B),N+=3}c.addGroup(p,N,M===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qo extends Ki{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Qo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lr extends Jt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,h=[],v=[],y=[],m=[];for(let p=0;p<u;p++){const R=p*f-o;for(let T=0;T<c;T++){const M=T*d-r;v.push(M,-R,0),y.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<a;R++){const T=R+c*p,M=R+c*(p+1),U=R+1+c*(p+1),P=R+1+c*p;h.push(T,M,P),h.push(M,U,P)}this.setIndex(h),this.setAttribute("position",new Mt(v,3)),this.setAttribute("normal",new Mt(y,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gs extends Jt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let d=e;const f=(t-e)/s,h=new z,v=new st;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){const p=r+m/i*o;h.x=d*Math.cos(p),h.y=d*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),v.x=(h.x/t+1)/2,v.y=(h.y/t+1)/2,u.push(v.x,v.y)}d+=f}for(let y=0;y<s;y++){const m=y*(i+1);for(let p=0;p<i;p++){const R=p+m,T=R,M=R+i+1,U=R+i+2,P=R+1;a.push(T,M,P),a.push(M,U,P)}}this.setIndex(a),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(c,3)),this.setAttribute("uv",new Mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Oo extends Jt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new z,f=new z,h=[],v=[],y=[],m=[];for(let p=0;p<=i;p++){const R=[],T=p/i;let M=0;p===0&&o===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let U=0;U<=t;U++){const P=U/t;d.x=-e*Math.cos(s+P*r)*Math.sin(o+T*a),d.y=e*Math.cos(o+T*a),d.z=e*Math.sin(s+P*r)*Math.sin(o+T*a),v.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),m.push(P+M,1-T),R.push(c++)}u.push(R)}for(let p=0;p<i;p++)for(let R=0;R<t;R++){const T=u[p][R+1],M=u[p][R],U=u[p+1][R],P=u[p+1][R+1];(p!==0||o>0)&&h.push(T,M,P),(p!==i-1||l<Math.PI)&&h.push(M,U,P)}this.setIndex(h),this.setAttribute("position",new Mt(v,3)),this.setAttribute("normal",new Mt(y,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vi extends Vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xf,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class n_ extends Vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class i_ extends Vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sh extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class s_ extends sh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ka=new Et,Ou=new z,Bu=new z;class r_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ou.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ou),Bu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bu),t.updateMatrixWorld(),ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rh extends th{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class o_ extends r_{constructor(){super(new rh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class a_ extends sh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new o_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class l_ extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class c_ extends t_{constructor(e=10,t=10,i=4473924,s=8947848){i=new tt(i),s=new tt(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,h=0,v=-a;f<=t;f++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const y=f===r?i:s;y.toArray(c,h),h+=3,y.toArray(c,h),h+=3,y.toArray(c,h),h+=3,y.toArray(c,h),h+=3}const u=new Jt;u.setAttribute("position",new Mt(l,3)),u.setAttribute("color",new Mt(c,3));const d=new Jo({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const ku=new z;let lo,za;class u_ extends Lt{constructor(e=new z(0,0,1),t=new z(0,0,0),i=1,s=16776960,r=i*.2,o=r*.2){super(),this.type="ArrowHelper",lo===void 0&&(lo=new Jt,lo.setAttribute("position",new Mt([0,0,0,0,1,0],3)),za=new Qo(.5,1,5,1),za.translate(0,-.5,0)),this.position.copy(t),this.line=new Cc(lo,new Jo({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Dt(za,new xn({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{ku.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(ku,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}function zu(n,e,t,i){const s=d_(i);switch(t){case zf:return n*e;case Vf:return n*e/s.components*s.byteLength;case Mc:return n*e/s.components*s.byteLength;case Gf:return n*e*2/s.components*s.byteLength;case Sc:return n*e*2/s.components*s.byteLength;case Hf:return n*e*3/s.components*s.byteLength;case wn:return n*e*4/s.components*s.byteLength;case Ec:return n*e*4/s.components*s.byteLength;case xo:case vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bo:case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case El:case Tl:return Math.max(n,16)*Math.max(e,8)/4;case Sl:case wl:return Math.max(n,8)*Math.max(e,8)/2;case Al:case Rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Il:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Mo:case Wl:case Xl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Wf:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ql:case Yl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function d_(n){switch(n){case Xn:case Of:return{byteLength:1,components:1};case br:case Bf:case Rr:return{byteLength:2,components:1};case bc:case yc:return{byteLength:2,components:4};case ji:case vc:case si:return{byteLength:4,components:1};case kf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xc);function oh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function f_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,v)=>h.start-v.start);let f=0;for(let h=1;h<d.length;h++){const v=d[f],y=d[h];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,v=d.length;h<v;h++){const y=d[h];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var h_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p_=`#ifdef USE_ALPHAHASH
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
#endif`,m_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,__=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v_=`#ifdef USE_AOMAP
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
#endif`,b_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y_=`#ifdef USE_BATCHING
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
#endif`,M_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T_=`#ifdef USE_IRIDESCENCE
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
#endif`,A_=`#ifdef USE_BUMPMAP
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
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,F_=`#define PI 3.141592653589793
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
} // validated`,O_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B_=`vec3 transformedNormal = objectNormal;
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
#endif`,k_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G_="gl_FragColor = linearToOutputTexel( gl_FragColor );",W_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X_=`#ifdef USE_ENVMAP
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
#endif`,$_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
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
#endif`,j_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ex=`#ifdef USE_GRADIENTMAP
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
}`,tx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sx=`uniform bool receiveShadow;
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
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,ox=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ux=`PhysicalMaterial material;
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
#endif`,dx=`struct PhysicalMaterial {
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
}`,fx=`
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
#endif`,hx=`#if defined( RE_IndirectDiffuse )
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
#endif`,px=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mx=`#if defined( USE_POINTS_UV )
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
#endif`,Sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rx=`#ifdef USE_MORPHTARGETS
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
#endif`,Cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nx=`#ifdef USE_NORMALMAP
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
#endif`,Fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ox=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zx=`float getShadowMask() {
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
}`,Jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tv=`#ifdef USE_SKINNING
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
#endif`,nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ov=`#ifdef USE_TRANSMISSION
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
#endif`,av=`#ifdef USE_TRANSMISSION
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
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hv=`uniform sampler2D t2D;
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
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`#include <common>
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
}`,vv=`#if DEPTH_PACKING == 3200
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
}`,bv=`#define DISTANCE
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
}`,yv=`#define DISTANCE
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
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`uniform float scale;
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
}`,wv=`uniform vec3 diffuse;
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
}`,Tv=`#include <common>
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
}`,Av=`uniform vec3 diffuse;
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
}`,Rv=`#define LAMBERT
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
}`,Cv=`#define LAMBERT
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
}`,Pv=`#define MATCAP
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
}`,Dv=`#define MATCAP
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
}`,Lv=`#define NORMAL
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
}`,Iv=`#define NORMAL
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
}`,Uv=`#define PHONG
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
}`,Nv=`#define PHONG
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
}`,Fv=`#define STANDARD
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
}`,Ov=`#define STANDARD
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
}`,Bv=`#define TOON
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
}`,kv=`#define TOON
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
}`,zv=`uniform float size;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Vv=`#include <common>
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
}`,Gv=`uniform vec3 color;
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
}`,Wv=`uniform float rotation;
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
}`,Xv=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:h_,alphahash_pars_fragment:p_,alphamap_fragment:m_,alphamap_pars_fragment:g_,alphatest_fragment:__,alphatest_pars_fragment:x_,aomap_fragment:v_,aomap_pars_fragment:b_,batching_pars_vertex:y_,batching_vertex:M_,begin_vertex:S_,beginnormal_vertex:E_,bsdfs:w_,iridescence_fragment:T_,bumpmap_pars_fragment:A_,clipping_planes_fragment:R_,clipping_planes_pars_fragment:C_,clipping_planes_pars_vertex:P_,clipping_planes_vertex:D_,color_fragment:L_,color_pars_fragment:I_,color_pars_vertex:U_,color_vertex:N_,common:F_,cube_uv_reflection_fragment:O_,defaultnormal_vertex:B_,displacementmap_pars_vertex:k_,displacementmap_vertex:z_,emissivemap_fragment:H_,emissivemap_pars_fragment:V_,colorspace_fragment:G_,colorspace_pars_fragment:W_,envmap_fragment:X_,envmap_common_pars_fragment:$_,envmap_pars_fragment:q_,envmap_pars_vertex:Y_,envmap_physical_pars_fragment:rx,envmap_vertex:K_,fog_vertex:j_,fog_pars_vertex:Z_,fog_fragment:J_,fog_pars_fragment:Q_,gradientmap_pars_fragment:ex,lightmap_pars_fragment:tx,lights_lambert_fragment:nx,lights_lambert_pars_fragment:ix,lights_pars_begin:sx,lights_toon_fragment:ox,lights_toon_pars_fragment:ax,lights_phong_fragment:lx,lights_phong_pars_fragment:cx,lights_physical_fragment:ux,lights_physical_pars_fragment:dx,lights_fragment_begin:fx,lights_fragment_maps:hx,lights_fragment_end:px,logdepthbuf_fragment:mx,logdepthbuf_pars_fragment:gx,logdepthbuf_pars_vertex:_x,logdepthbuf_vertex:xx,map_fragment:vx,map_pars_fragment:bx,map_particle_fragment:yx,map_particle_pars_fragment:Mx,metalnessmap_fragment:Sx,metalnessmap_pars_fragment:Ex,morphinstance_vertex:wx,morphcolor_vertex:Tx,morphnormal_vertex:Ax,morphtarget_pars_vertex:Rx,morphtarget_vertex:Cx,normal_fragment_begin:Px,normal_fragment_maps:Dx,normal_pars_fragment:Lx,normal_pars_vertex:Ix,normal_vertex:Ux,normalmap_pars_fragment:Nx,clearcoat_normal_fragment_begin:Fx,clearcoat_normal_fragment_maps:Ox,clearcoat_pars_fragment:Bx,iridescence_pars_fragment:kx,opaque_fragment:zx,packing:Hx,premultiplied_alpha_fragment:Vx,project_vertex:Gx,dithering_fragment:Wx,dithering_pars_fragment:Xx,roughnessmap_fragment:$x,roughnessmap_pars_fragment:qx,shadowmap_pars_fragment:Yx,shadowmap_pars_vertex:Kx,shadowmap_vertex:jx,shadowmask_pars_fragment:Zx,skinbase_vertex:Jx,skinning_pars_vertex:Qx,skinning_vertex:ev,skinnormal_vertex:tv,specularmap_fragment:nv,specularmap_pars_fragment:iv,tonemapping_fragment:sv,tonemapping_pars_fragment:rv,transmission_fragment:ov,transmission_pars_fragment:av,uv_pars_fragment:lv,uv_pars_vertex:cv,uv_vertex:uv,worldpos_vertex:dv,background_vert:fv,background_frag:hv,backgroundCube_vert:pv,backgroundCube_frag:mv,cube_vert:gv,cube_frag:_v,depth_vert:xv,depth_frag:vv,distanceRGBA_vert:bv,distanceRGBA_frag:yv,equirect_vert:Mv,equirect_frag:Sv,linedashed_vert:Ev,linedashed_frag:wv,meshbasic_vert:Tv,meshbasic_frag:Av,meshlambert_vert:Rv,meshlambert_frag:Cv,meshmatcap_vert:Pv,meshmatcap_frag:Dv,meshnormal_vert:Lv,meshnormal_frag:Iv,meshphong_vert:Uv,meshphong_frag:Nv,meshphysical_vert:Fv,meshphysical_frag:Ov,meshtoon_vert:Bv,meshtoon_frag:kv,points_vert:zv,points_frag:Hv,shadow_vert:Vv,shadow_frag:Gv,sprite_vert:Wv,sprite_frag:Xv},Me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},On={basic:{uniforms:Kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Kt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Kt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Kt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Kt([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Kt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Kt([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Kt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Kt([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Kt([Me.common,Me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Kt([Me.lights,Me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};On.physical={uniforms:Kt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const co={r:0,b:0,g:0},Fi=new $n,$v=new Et;function qv(n,e,t,i,s,r,o){const a=new tt(0);let l=r===!0?0:1,c,u,d=null,f=0,h=null;function v(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function y(T){let M=!1;const U=v(T);U===null?p(a,l):U&&U.isColor&&(p(U,1),M=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,M){const U=v(M);U&&(U.isCubeTexture||U.mapping===jo)?(u===void 0&&(u=new Dt(new oi(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Ns(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Fi.copy(M.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($v.makeRotationFromEuler(Fi)),u.material.toneMapped=lt.getTransfer(U.colorSpace)!==pt,(d!==U||f!==U.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=U,f=U.version,h=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new Dt(new Lr(2,2),new Ri({name:"BackgroundMaterial",uniforms:Ns(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=lt.getTransfer(U.colorSpace)!==pt,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(d!==U||f!==U.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=U,f=U.version,h=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,M){T.getRGB(co,eh(n)),i.buffers.color.setClear(co.r,co.g,co.b,M,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:y,addToRenderList:m,dispose:R}}function Yv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(x,D,$,B,Z){let ne=!1;const q=d(B,$,D);r!==q&&(r=q,c(r.object)),ne=h(x,B,$,Z),ne&&v(x,B,$,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,M(x,D,$,B),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,D,$){const B=$.wireframe===!0;let Z=i[x.id];Z===void 0&&(Z={},i[x.id]=Z);let ne=Z[D.id];ne===void 0&&(ne={},Z[D.id]=ne);let q=ne[B];return q===void 0&&(q=f(l()),ne[B]=q),q}function f(x){const D=[],$=[],B=[];for(let Z=0;Z<t;Z++)D[Z]=0,$[Z]=0,B[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:$,attributeDivisors:B,object:x,attributes:{},index:null}}function h(x,D,$,B){const Z=r.attributes,ne=D.attributes;let q=0;const K=$.getAttributes();for(const V in K)if(K[V].location>=0){const Ee=Z[V];let De=ne[V];if(De===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(De=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(De=x.instanceColor)),Ee===void 0||Ee.attribute!==De||De&&Ee.data!==De.data)return!0;q++}return r.attributesNum!==q||r.index!==B}function v(x,D,$,B){const Z={},ne=D.attributes;let q=0;const K=$.getAttributes();for(const V in K)if(K[V].location>=0){let Ee=ne[V];Ee===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(Ee=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(Ee=x.instanceColor));const De={};De.attribute=Ee,Ee&&Ee.data&&(De.data=Ee.data),Z[V]=De,q++}r.attributes=Z,r.attributesNum=q,r.index=B}function y(){const x=r.newAttributes;for(let D=0,$=x.length;D<$;D++)x[D]=0}function m(x){p(x,0)}function p(x,D){const $=r.newAttributes,B=r.enabledAttributes,Z=r.attributeDivisors;$[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),Z[x]!==D&&(n.vertexAttribDivisor(x,D),Z[x]=D)}function R(){const x=r.newAttributes,D=r.enabledAttributes;for(let $=0,B=D.length;$<B;$++)D[$]!==x[$]&&(n.disableVertexAttribArray($),D[$]=0)}function T(x,D,$,B,Z,ne,q){q===!0?n.vertexAttribIPointer(x,D,$,Z,ne):n.vertexAttribPointer(x,D,$,B,Z,ne)}function M(x,D,$,B){y();const Z=B.attributes,ne=$.getAttributes(),q=D.defaultAttributeValues;for(const K in ne){const V=ne[K];if(V.location>=0){let me=Z[K];if(me===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(me=x.instanceColor)),me!==void 0){const Ee=me.normalized,De=me.itemSize,ze=e.get(me);if(ze===void 0)continue;const it=ze.buffer,ie=ze.type,he=ze.bytesPerElement,Ie=ie===n.INT||ie===n.UNSIGNED_INT||me.gpuType===vc;if(me.isInterleavedBufferAttribute){const ve=me.data,Fe=ve.stride,et=me.offset;if(ve.isInstancedInterleavedBuffer){for(let ke=0;ke<V.locationSize;ke++)p(V.location+ke,ve.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ke=0;ke<V.locationSize;ke++)m(V.location+ke);n.bindBuffer(n.ARRAY_BUFFER,it);for(let ke=0;ke<V.locationSize;ke++)T(V.location+ke,De/V.locationSize,ie,Ee,Fe*he,(et+De/V.locationSize*ke)*he,Ie)}else{if(me.isInstancedBufferAttribute){for(let ve=0;ve<V.locationSize;ve++)p(V.location+ve,me.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ve=0;ve<V.locationSize;ve++)m(V.location+ve);n.bindBuffer(n.ARRAY_BUFFER,it);for(let ve=0;ve<V.locationSize;ve++)T(V.location+ve,De/V.locationSize,ie,Ee,De*he,De/V.locationSize*ve*he,Ie)}}else if(q!==void 0){const Ee=q[K];if(Ee!==void 0)switch(Ee.length){case 2:n.vertexAttrib2fv(V.location,Ee);break;case 3:n.vertexAttrib3fv(V.location,Ee);break;case 4:n.vertexAttrib4fv(V.location,Ee);break;default:n.vertexAttrib1fv(V.location,Ee)}}}}R()}function U(){N();for(const x in i){const D=i[x];for(const $ in D){const B=D[$];for(const Z in B)u(B[Z].object),delete B[Z];delete D[$]}delete i[x]}}function P(x){if(i[x.id]===void 0)return;const D=i[x.id];for(const $ in D){const B=D[$];for(const Z in B)u(B[Z].object),delete B[Z];delete D[$]}delete i[x.id]}function A(x){for(const D in i){const $=i[D];if($[x.id]===void 0)continue;const B=$[x.id];for(const Z in B)u(B[Z].object),delete B[Z];delete $[x.id]}}function N(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:R}}function Kv(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let v=0;v<d;v++)h+=u[v];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let v=0;for(let y=0;y<d;y++)v+=u[y]*f[y];t.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==wn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const N=A===Rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Xn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==si&&!N)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=v>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:U,maxSamples:P}}function Zv(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ki,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const v=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const R=r?0:i,T=R*4;let M=p.clippingState||null;l.value=M,M=u(v,f,T,h);for(let U=0;U!==T;++U)M[U]=t[U];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,v){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const p=h+y*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,M=h;T!==y;++T,M+=4)o.copy(d[T]).applyMatrix4(R,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Jv(n){let e=new WeakMap;function t(o,a){return a===vl?o.mapping=Ls:a===bl&&(o.mapping=Is),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===vl||a===bl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new K0(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const bs=4,Hu=[.125,.215,.35,.446,.526,.582],Gi=20,Ha=new rh,Vu=new tt;let Va=null,Ga=0,Wa=0,Xa=!1;const zi=(1+Math.sqrt(5))/2,gs=1/zi,Gu=[new z(-zi,gs,0),new z(zi,gs,0),new z(-gs,0,zi),new z(gs,0,zi),new z(0,zi,-gs),new z(0,zi,gs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Qv=new z;class Wu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Qv}=r;Va=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Va,Ga,Wa),this._renderer.xr.enabled=Xa,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Va=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Rr,format:wn,colorSpace:Us,depthBuffer:!1},s=Xu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eb(r)),this._blurMaterial=tb(r,e,t)}return s}_compileMaterial(e){const t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,Ha)}_sceneToCubeUV(e,t,i,s,r){const l=new mn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Vu),d.toneMapping=wi,d.autoClear=!1;const v=new xn({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),y=new Dt(new oi,v);let m=!1;const p=e.background;p?p.isColor&&(v.color.copy(p),e.background=null,m=!0):(v.color.copy(Vu),m=!0);for(let R=0;R<6;R++){const T=R%3;T===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[R],r.y,r.z)):T===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[R]));const M=this._cubeSize;uo(s,T*M,R>2?M:0,M,M),d.setRenderTarget(s),m&&d.render(y,l),d.render(e,l)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ls||e.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$u());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;uo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ha)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gu[(s-r-1)%Gu.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Dt(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Gi-1),y=r/v,m=isFinite(r)?1+Math.floor(u*y):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const p=[];let R=0;for(let A=0;A<Gi;++A){const N=A/y,E=Math.exp(-N*N/2);p.push(E),A===0?R+=E:A<m&&(R+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/R;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=v,f.mipInt.value=T-i;const M=this._sizeLods[s],U=3*M*(s>T-bs?s-T+bs:0),P=4*(this._cubeSize-M);uo(t,U,P,3*M,2*M),l.setRenderTarget(t),l.render(d,Ha)}}function eb(n){const e=[],t=[],i=[];let s=n;const r=n-bs+1+Hu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-bs?l=Hu[o-n+bs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,v=6,y=3,m=2,p=1,R=new Float32Array(y*v*h),T=new Float32Array(m*v*h),M=new Float32Array(p*v*h);for(let P=0;P<h;P++){const A=P%3*2/3-1,N=P>2?0:-1,E=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];R.set(E,y*v*P),T.set(f,m*v*P);const x=[P,P,P,P,P,P];M.set(x,p*v*P)}const U=new Jt;U.setAttribute("position",new Gn(R,y)),U.setAttribute("uv",new Gn(T,m)),U.setAttribute("faceIndex",new Gn(M,p)),e.push(U),s>bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xu(n,e,t){const i=new Zi(n,e,t);return i.texture.mapping=jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function tb(n,e,t){const i=new Float32Array(Gi),s=new z(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function $u(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function qu(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}function nb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===vl||l===bl,u=l===Ls||l===Is;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Wu(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(t===null&&(t=new Wu(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ib(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&As("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sb(n,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,v=d.attributes.position;let y=0;if(h!==null){const R=h.array;y=h.version;for(let T=0,M=R.length;T<M;T+=3){const U=R[T+0],P=R[T+1],A=R[T+2];f.push(U,P,P,A,A,U)}}else if(v!==void 0){const R=v.array;y=v.version;for(let T=0,M=R.length/3-1;T<M;T+=3){const U=T+0,P=T+1,A=T+2;f.push(U,P,P,A,A,U)}}else return;const m=new(qf(f)?Qf:Jf)(f,1);m.version=y;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function rb(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*o),t.update(h,i,1)}function c(f,h,v){v!==0&&(n.drawElementsInstanced(i,h,r,f*o,v),t.update(h,i,v))}function u(f,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,v);let m=0;for(let p=0;p<v;p++)m+=h[p];t.update(m,i,1)}function d(f,h,v,y){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,y,0,v);let p=0;for(let R=0;R<v;R++)p+=h[R]*y[R];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ob(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ab(n,e,t){const i=new WeakMap,s=new Tt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let x=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var h=x;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let U=a.attributes.position.count*M,P=1;U>e.maxTextureSize&&(P=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const A=new Float32Array(U*P*4*d),N=new Yf(A,U,P,d);N.type=si,N.needsUpdate=!0;const E=M*4;for(let D=0;D<d;D++){const $=p[D],B=R[D],Z=T[D],ne=U*P*4*D;for(let q=0;q<$.count;q++){const K=q*E;v===!0&&(s.fromBufferAttribute($,q),A[ne+K+0]=s.x,A[ne+K+1]=s.y,A[ne+K+2]=s.z,A[ne+K+3]=0),y===!0&&(s.fromBufferAttribute(B,q),A[ne+K+4]=s.x,A[ne+K+5]=s.y,A[ne+K+6]=s.z,A[ne+K+7]=0),m===!0&&(s.fromBufferAttribute(Z,q),A[ne+K+8]=s.x,A[ne+K+9]=s.y,A[ne+K+10]=s.z,A[ne+K+11]=Z.itemSize===4?s.w:1)}}f={count:d,texture:N,size:new st(U,P)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function lb(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const ah=new nn,Yu=new ih(1,1),lh=new Yf,ch=new L0,uh=new nh,Ku=[],ju=[],Zu=new Float32Array(16),Ju=new Float32Array(9),Qu=new Float32Array(4);function Ws(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ku[s];if(r===void 0&&(r=new Float32Array(s),Ku[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ea(n,e){let t=ju[e];t===void 0&&(t=new Int32Array(e),ju[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ub(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function db(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function fb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function hb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;Qu.set(i),n.uniformMatrix2fv(this.addr,!1,Qu),Ut(t,i)}}function pb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;Ju.set(i),n.uniformMatrix3fv(this.addr,!1,Ju),Ut(t,i)}}function mb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;Zu.set(i),n.uniformMatrix4fv(this.addr,!1,Zu),Ut(t,i)}}function gb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function xb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function vb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function bb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function Mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function Sb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function Eb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Yu.compareFunction=$f,r=Yu):r=ah,t.setTexture2D(e||r,s)}function wb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ch,s)}function Tb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||uh,s)}function Ab(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||lh,s)}function Rb(n){switch(n){case 5126:return cb;case 35664:return ub;case 35665:return db;case 35666:return fb;case 35674:return hb;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return _b;case 35668:case 35672:return xb;case 35669:case 35673:return vb;case 5125:return bb;case 36294:return yb;case 36295:return Mb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return Eb;case 35679:case 36299:case 36307:return wb;case 35680:case 36300:case 36308:case 36293:return Tb;case 36289:case 36303:case 36311:case 36292:return Ab}}function Cb(n,e){n.uniform1fv(this.addr,e)}function Pb(n,e){const t=Ws(e,this.size,2);n.uniform2fv(this.addr,t)}function Db(n,e){const t=Ws(e,this.size,3);n.uniform3fv(this.addr,t)}function Lb(n,e){const t=Ws(e,this.size,4);n.uniform4fv(this.addr,t)}function Ib(n,e){const t=Ws(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ub(n,e){const t=Ws(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Nb(n,e){const t=Ws(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Fb(n,e){n.uniform1iv(this.addr,e)}function Ob(n,e){n.uniform2iv(this.addr,e)}function Bb(n,e){n.uniform3iv(this.addr,e)}function kb(n,e){n.uniform4iv(this.addr,e)}function zb(n,e){n.uniform1uiv(this.addr,e)}function Hb(n,e){n.uniform2uiv(this.addr,e)}function Vb(n,e){n.uniform3uiv(this.addr,e)}function Gb(n,e){n.uniform4uiv(this.addr,e)}function Wb(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ah,r[o])}function Xb(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ch,r[o])}function $b(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||uh,r[o])}function qb(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||lh,r[o])}function Yb(n){switch(n){case 5126:return Cb;case 35664:return Pb;case 35665:return Db;case 35666:return Lb;case 35674:return Ib;case 35675:return Ub;case 35676:return Nb;case 5124:case 35670:return Fb;case 35667:case 35671:return Ob;case 35668:case 35672:return Bb;case 35669:case 35673:return kb;case 5125:return zb;case 36294:return Hb;case 36295:return Vb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Wb;case 35679:case 36299:case 36307:return Xb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return qb}}class Kb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rb(t.type)}}class jb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yb(t.type)}}class Zb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function ed(n,e){n.seq.push(e),n.map[e.id]=e}function Jb(n,e,t){const i=n.name,s=i.length;for($a.lastIndex=0;;){const r=$a.exec(i),o=$a.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ed(t,c===void 0?new Kb(a,n,e):new jb(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Zb(a),ed(t,d)),t=d}}}class So{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Jb(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function td(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Qb=37297;let ey=0;function ty(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const nd=new Ke;function ny(n){lt._getMatrix(nd,lt.workingColorSpace,n);const e=`mat3( ${nd.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case Lo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function id(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ty(n.getShaderSource(e),o)}else return s}function iy(n,e){const t=ny(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sy(n,e){let t;switch(e){case Gg:t="Linear";break;case Wg:t="Reinhard";break;case Xg:t="Cineon";break;case $g:t="ACESFilmic";break;case Yg:t="AgX";break;case Kg:t="Neutral";break;case qg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fo=new z;function ry(){lt.getLuminanceCoefficients(fo);const n=fo.x.toFixed(4),e=fo.y.toFixed(4),t=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function ay(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ly(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function sr(n){return n!==""}function sd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(n){return n.replace(cy,dy)}const uy=new Map;function dy(n,e){let t=Ze[e];if(t===void 0){const i=uy.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kl(t)}const fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function od(n){return n.replace(fy,hy)}function hy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ad(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function py(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===If?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Uf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function my(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ls:case Is:e="ENVMAP_TYPE_CUBE";break;case jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gy(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Is&&(e="ENVMAP_MODE_REFRACTION"),e}function _y(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Nf:e="ENVMAP_BLENDING_MULTIPLY";break;case Hg:e="ENVMAP_BLENDING_MIX";break;case Vg:e="ENVMAP_BLENDING_ADD";break}return e}function xy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function vy(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=py(t),c=my(t),u=gy(t),d=_y(t),f=xy(t),h=oy(t),v=ay(r),y=s.createProgram();let m,p,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(m=[ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==wi?sy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,iy("linearToOutputTexel",t.outputColorSpace),ry(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),o=Kl(o),o=sd(o,t),o=rd(o,t),a=Kl(a),a=sd(a,t),a=rd(a,t),o=od(o),a=od(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=R+m+o,M=R+p+a,U=td(s,s.VERTEX_SHADER,T),P=td(s,s.FRAGMENT_SHADER,M);s.attachShader(y,U),s.attachShader(y,P),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(D){if(n.debug.checkShaderErrors){const $=s.getProgramInfoLog(y).trim(),B=s.getShaderInfoLog(U).trim(),Z=s.getShaderInfoLog(P).trim();let ne=!0,q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,U,P);else{const K=id(s,U,"vertex"),V=id(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+$+`
`+K+`
`+V)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(B===""||Z==="")&&(q=!1);q&&(D.diagnostics={runnable:ne,programLog:$,vertexShader:{log:B,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(U),s.deleteShader(P),N=new So(s,y),E=ly(s,y)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,Qb)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ey++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=P,this}let by=0;class yy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new My(e),t.set(e,i)),i}}class My{constructor(e){this.id=by++,this.code=e,this.usedTimes=0}}function Sy(n,e,t,i,s,r,o){const a=new jf,l=new yy,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,x,D,$,B){const Z=$.fog,ne=B.geometry,q=E.isMeshStandardMaterial?$.environment:null,K=(E.isMeshStandardMaterial?t:e).get(E.envMap||q),V=K&&K.mapping===jo?K.image.height:null,me=v[E.type];E.precision!==null&&(h=s.getMaxPrecision(E.precision),h!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",h,"instead."));const Ee=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,De=Ee!==void 0?Ee.length:0;let ze=0;ne.morphAttributes.position!==void 0&&(ze=1),ne.morphAttributes.normal!==void 0&&(ze=2),ne.morphAttributes.color!==void 0&&(ze=3);let it,ie,he,Ie;if(me){const rt=On[me];it=rt.vertexShader,ie=rt.fragmentShader}else it=E.vertexShader,ie=E.fragmentShader,l.update(E),he=l.getVertexShaderID(E),Ie=l.getFragmentShaderID(E);const ve=n.getRenderTarget(),Fe=n.state.buffers.depth.getReversed(),et=B.isInstancedMesh===!0,ke=B.isBatchedMesh===!0,xt=!!E.map,C=!!E.matcap,I=!!K,S=!!E.aoMap,oe=!!E.lightMap,J=!!E.bumpMap,te=!!E.normalMap,Q=!!E.displacementMap,se=!!E.emissiveMap,j=!!E.metalnessMap,Y=!!E.roughnessMap,we=E.anisotropy>0,w=E.clearcoat>0,g=E.dispersion>0,F=E.iridescence>0,W=E.sheen>0,ee=E.transmission>0,G=we&&!!E.anisotropyMap,xe=w&&!!E.clearcoatMap,de=w&&!!E.clearcoatNormalMap,Te=w&&!!E.clearcoatRoughnessMap,Re=F&&!!E.iridescenceMap,ae=F&&!!E.iridescenceThicknessMap,Ae=W&&!!E.sheenColorMap,Le=W&&!!E.sheenRoughnessMap,Ue=!!E.specularMap,ge=!!E.specularColorMap,Ge=!!E.specularIntensityMap,O=ee&&!!E.transmissionMap,be=ee&&!!E.thicknessMap,ce=!!E.gradientMap,Ce=!!E.alphaMap,fe=E.alphaTest>0,re=!!E.alphaHash,Ne=!!E.extensions;let qe=wi;E.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(qe=n.toneMapping);const ut={shaderID:me,shaderType:E.type,shaderName:E.name,vertexShader:it,fragmentShader:ie,defines:E.defines,customVertexShaderID:he,customFragmentShaderID:Ie,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:h,batching:ke,batchingColor:ke&&B._colorsTexture!==null,instancing:et,instancingColor:et&&B.instanceColor!==null,instancingMorph:et&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Us,alphaToCoverage:!!E.alphaToCoverage,map:xt,matcap:C,envMap:I,envMapMode:I&&K.mapping,envMapCubeUVHeight:V,aoMap:S,lightMap:oe,bumpMap:J,normalMap:te,displacementMap:f&&Q,emissiveMap:se,normalMapObjectSpace:te&&E.normalMapType===Qg,normalMapTangentSpace:te&&E.normalMapType===Xf,metalnessMap:j,roughnessMap:Y,anisotropy:we,anisotropyMap:G,clearcoat:w,clearcoatMap:xe,clearcoatNormalMap:de,clearcoatRoughnessMap:Te,dispersion:g,iridescence:F,iridescenceMap:Re,iridescenceThicknessMap:ae,sheen:W,sheenColorMap:Ae,sheenRoughnessMap:Le,specularMap:Ue,specularColorMap:ge,specularIntensityMap:Ge,transmission:ee,transmissionMap:O,thicknessMap:be,gradientMap:ce,opaque:E.transparent===!1&&E.blending===Ts&&E.alphaToCoverage===!1,alphaMap:Ce,alphaTest:fe,alphaHash:re,combine:E.combine,mapUv:xt&&y(E.map.channel),aoMapUv:S&&y(E.aoMap.channel),lightMapUv:oe&&y(E.lightMap.channel),bumpMapUv:J&&y(E.bumpMap.channel),normalMapUv:te&&y(E.normalMap.channel),displacementMapUv:Q&&y(E.displacementMap.channel),emissiveMapUv:se&&y(E.emissiveMap.channel),metalnessMapUv:j&&y(E.metalnessMap.channel),roughnessMapUv:Y&&y(E.roughnessMap.channel),anisotropyMapUv:G&&y(E.anisotropyMap.channel),clearcoatMapUv:xe&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:de&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Le&&y(E.sheenRoughnessMap.channel),specularMapUv:Ue&&y(E.specularMap.channel),specularColorMapUv:ge&&y(E.specularColorMap.channel),specularIntensityMapUv:Ge&&y(E.specularIntensityMap.channel),transmissionMapUv:O&&y(E.transmissionMap.channel),thicknessMapUv:be&&y(E.thicknessMap.channel),alphaMapUv:Ce&&y(E.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(te||we),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!ne.attributes.uv&&(xt||Ce),fog:!!Z,useFog:E.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Fe,skinning:B.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:ze,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:xt&&E.map.isVideoTexture===!0&&lt.getTransfer(E.map.colorSpace)===pt,decodeVideoTextureEmissive:se&&E.emissiveMap.isVideoTexture===!0&&lt.getTransfer(E.emissiveMap.colorSpace)===pt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Gt,flipSided:E.side===tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ne&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&E.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)x.push(D),x.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(R(x,E),T(x,E),x.push(n.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function R(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function T(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),E.push(a.mask)}function M(E){const x=v[E.type];let D;if(x){const $=On[x];D=X0.clone($.uniforms)}else D=E.uniforms;return D}function U(E,x){let D;for(let $=0,B=u.length;$<B;$++){const Z=u[$];if(Z.cacheKey===x){D=Z,++D.usedTimes;break}}return D===void 0&&(D=new vy(n,x,E,r),u.push(D)),D}function P(E){if(--E.usedTimes===0){const x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:U,releaseProgram:P,releaseShaderCache:A,programs:u,dispose:N}}function Ey(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function wy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ld(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,h,v,y,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:v,renderOrder:d.renderOrder,z:y,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function a(d,f,h,v,y,m){const p=o(d,f,h,v,y,m);h.transmission>0?i.push(p):h.transparent===!0?s.push(p):t.push(p)}function l(d,f,h,v,y,m){const p=o(d,f,h,v,y,m);h.transmission>0?i.unshift(p):h.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||wy),i.length>1&&i.sort(f||ld),s.length>1&&s.sort(f||ld)}function u(){for(let d=e,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Ty(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new cd,n.set(i,[o])):s>=r.length?(o=new cd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ay(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new tt};break;case"SpotLight":t={position:new z,direction:new z,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Ry(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Cy=0;function Py(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Dy(n){const e=new Ay,t=Ry(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const s=new z,r=new Et,o=new Et;function a(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let h=0,v=0,y=0,m=0,p=0,R=0,T=0,M=0,U=0,P=0,A=0;c.sort(Py);for(let E=0,x=c.length;E<x;E++){const D=c[E],$=D.color,B=D.intensity,Z=D.distance,ne=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=$.r*B,d+=$.g*B,f+=$.b*B;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],B);A++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,V=t.get(D);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=ne,i.directionalShadowMatrix[h]=D.shadow.matrix,R++}i.directional[h]=q,h++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy($).multiplyScalar(B),q.distance=Z,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[y]=q;const K=D.shadow;if(D.map&&(i.spotLightMap[U]=D.map,U++,K.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[y]=K.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,i.spotShadow[y]=V,i.spotShadowMap[y]=ne,M++}y++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy($).multiplyScalar(B),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=q,m++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const K=D.shadow,V=t.get(D);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,i.pointShadow[v]=V,i.pointShadowMap[v]=ne,i.pointShadowMatrix[v]=D.shadow.matrix,T++}i.point[v]=q,v++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(B),q.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==h||N.pointLength!==v||N.spotLength!==y||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==R||N.numPointShadows!==T||N.numSpotShadows!==M||N.numSpotMaps!==U||N.numLightProbes!==A)&&(i.directional.length=h,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=M+U-P,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=A,N.directionalLength=h,N.pointLength=v,N.spotLength=y,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=R,N.numPointShadows=T,N.numSpotShadows=M,N.numSpotMaps=U,N.numLightProbes=A,i.version=Cy++)}function l(c,u){let d=0,f=0,h=0,v=0,y=0;const m=u.matrixWorldInverse;for(let p=0,R=c.length;p<R;p++){const T=c[p];if(T.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(T.isSpotLight){const M=i.spot[h];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(T.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function ud(n){const e=new Dy(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ly(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ud(n),e.set(s,[a])):r>=o.length?(a=new ud(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uy=`uniform sampler2D shadow_pass;
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
}`;function Ny(n,e,t){let i=new Rc;const s=new st,r=new st,o=new Tt,a=new n_({depthPacking:Jg}),l=new i_,c={},u=t.maxTextureSize,d={[Ai]:tn,[tn]:Ai,[Gt]:Gt},f=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Iy,fragmentShader:Uy}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const v=new Jt;v.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Dt(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=If;let p=this.type;this.render=function(P,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const E=n.getRenderTarget(),x=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Ei),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const B=p!==Qn&&this.type===Qn,Z=p===Qn&&this.type!==Qn;for(let ne=0,q=P.length;ne<q;ne++){const K=P[ne],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const me=V.getFrameExtents();if(s.multiply(me),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,V.mapSize.y=r.y)),V.map===null||B===!0||Z===!0){const De=this.type!==Qn?{minFilter:Rn,magFilter:Rn}:{};V.map!==null&&V.map.dispose(),V.map=new Zi(s.x,s.y,De),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const Ee=V.getViewportCount();for(let De=0;De<Ee;De++){const ze=V.getViewport(De);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),$.viewport(o),V.updateMatrices(K,De),i=V.getFrustum(),M(A,N,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===Qn&&R(V,N),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,x,D)};function R(P,A){const N=e.update(y);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Zi(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(A,null,N,f,y,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(A,null,N,h,y,null)}function T(P,A,N,E){let x=null;const D=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)x=D;else if(x=N.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const $=x.uuid,B=A.uuid;let Z=c[$];Z===void 0&&(Z={},c[$]=Z);let ne=Z[B];ne===void 0&&(ne=x.clone(),Z[B]=ne,A.addEventListener("dispose",U)),x=ne}if(x.visible=A.visible,x.wireframe=A.wireframe,E===Qn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:d[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const $=n.properties.get(x);$.light=N}return x}function M(P,A,N,E,x){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===Qn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const B=e.update(P),Z=P.material;if(Array.isArray(Z)){const ne=B.groups;for(let q=0,K=ne.length;q<K;q++){const V=ne[q],me=Z[V.materialIndex];if(me&&me.visible){const Ee=T(P,me,E,x);P.onBeforeShadow(n,P,A,N,B,Ee,V),n.renderBufferDirect(N,null,B,Ee,P,V),P.onAfterShadow(n,P,A,N,B,Ee,V)}}}else if(Z.visible){const ne=T(P,Z,E,x);P.onBeforeShadow(n,P,A,N,B,ne,null),n.renderBufferDirect(N,null,B,ne,P,null),P.onAfterShadow(n,P,A,N,B,ne,null)}}const $=P.children;for(let B=0,Z=$.length;B<Z;B++)M($[B],A,N,E,x)}function U(P){P.target.removeEventListener("dispose",U);for(const N in c){const E=c[N],x=P.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const Fy={[fl]:hl,[pl]:_l,[ml]:xl,[Ds]:gl,[hl]:fl,[_l]:pl,[xl]:ml,[gl]:Ds};function Oy(n,e){function t(){let O=!1;const be=new Tt;let ce=null;const Ce=new Tt(0,0,0,0);return{setMask:function(fe){ce!==fe&&!O&&(n.colorMask(fe,fe,fe,fe),ce=fe)},setLocked:function(fe){O=fe},setClear:function(fe,re,Ne,qe,ut){ut===!0&&(fe*=qe,re*=qe,Ne*=qe),be.set(fe,re,Ne,qe),Ce.equals(be)===!1&&(n.clearColor(fe,re,Ne,qe),Ce.copy(be))},reset:function(){O=!1,ce=null,Ce.set(-1,0,0,0)}}}function i(){let O=!1,be=!1,ce=null,Ce=null,fe=null;return{setReversed:function(re){if(be!==re){const Ne=e.get("EXT_clip_control");re?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),be=re;const qe=fe;fe=null,this.setClear(qe)}},getReversed:function(){return be},setTest:function(re){re?ve(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(re){ce!==re&&!O&&(n.depthMask(re),ce=re)},setFunc:function(re){if(be&&(re=Fy[re]),Ce!==re){switch(re){case fl:n.depthFunc(n.NEVER);break;case hl:n.depthFunc(n.ALWAYS);break;case pl:n.depthFunc(n.LESS);break;case Ds:n.depthFunc(n.LEQUAL);break;case ml:n.depthFunc(n.EQUAL);break;case gl:n.depthFunc(n.GEQUAL);break;case _l:n.depthFunc(n.GREATER);break;case xl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=re}},setLocked:function(re){O=re},setClear:function(re){fe!==re&&(be&&(re=1-re),n.clearDepth(re),fe=re)},reset:function(){O=!1,ce=null,Ce=null,fe=null,be=!1}}}function s(){let O=!1,be=null,ce=null,Ce=null,fe=null,re=null,Ne=null,qe=null,ut=null;return{setTest:function(rt){O||(rt?ve(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function(rt){be!==rt&&!O&&(n.stencilMask(rt),be=rt)},setFunc:function(rt,Nt,un){(ce!==rt||Ce!==Nt||fe!==un)&&(n.stencilFunc(rt,Nt,un),ce=rt,Ce=Nt,fe=un)},setOp:function(rt,Nt,un){(re!==rt||Ne!==Nt||qe!==un)&&(n.stencilOp(rt,Nt,un),re=rt,Ne=Nt,qe=un)},setLocked:function(rt){O=rt},setClear:function(rt){ut!==rt&&(n.clearStencil(rt),ut=rt)},reset:function(){O=!1,be=null,ce=null,Ce=null,fe=null,re=null,Ne=null,qe=null,ut=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],v=null,y=!1,m=null,p=null,R=null,T=null,M=null,U=null,P=null,A=new tt(0,0,0),N=0,E=!1,x=null,D=null,$=null,B=null,Z=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=K>=2);let me=null,Ee={};const De=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),it=new Tt().fromArray(De),ie=new Tt().fromArray(ze);function he(O,be,ce,Ce){const fe=new Uint8Array(4),re=n.createTexture();n.bindTexture(O,re),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<ce;Ne++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(be+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return re}const Ie={};Ie[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),Ie[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ie[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ie[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),o.setFunc(Ds),J(!1),te(lu),ve(n.CULL_FACE),S(Ei);function ve(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function Fe(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function et(O,be){return d[O]!==be?(n.bindFramebuffer(O,be),d[O]=be,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=be),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=be),!0):!1}function ke(O,be){let ce=h,Ce=!1;if(O){ce=f.get(be),ce===void 0&&(ce=[],f.set(be,ce));const fe=O.textures;if(ce.length!==fe.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let re=0,Ne=fe.length;re<Ne;re++)ce[re]=n.COLOR_ATTACHMENT0+re;ce.length=fe.length,Ce=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,Ce=!0);Ce&&n.drawBuffers(ce)}function xt(O){return v!==O?(n.useProgram(O),v=O,!0):!1}const C={[Hi]:n.FUNC_ADD,[Eg]:n.FUNC_SUBTRACT,[wg]:n.FUNC_REVERSE_SUBTRACT};C[Tg]=n.MIN,C[Ag]=n.MAX;const I={[Rg]:n.ZERO,[Cg]:n.ONE,[Pg]:n.SRC_COLOR,[ul]:n.SRC_ALPHA,[Fg]:n.SRC_ALPHA_SATURATE,[Ug]:n.DST_COLOR,[Lg]:n.DST_ALPHA,[Dg]:n.ONE_MINUS_SRC_COLOR,[dl]:n.ONE_MINUS_SRC_ALPHA,[Ng]:n.ONE_MINUS_DST_COLOR,[Ig]:n.ONE_MINUS_DST_ALPHA,[Og]:n.CONSTANT_COLOR,[Bg]:n.ONE_MINUS_CONSTANT_COLOR,[kg]:n.CONSTANT_ALPHA,[zg]:n.ONE_MINUS_CONSTANT_ALPHA};function S(O,be,ce,Ce,fe,re,Ne,qe,ut,rt){if(O===Ei){y===!0&&(Fe(n.BLEND),y=!1);return}if(y===!1&&(ve(n.BLEND),y=!0),O!==Sg){if(O!==m||rt!==E){if((p!==Hi||M!==Hi)&&(n.blendEquation(n.FUNC_ADD),p=Hi,M=Hi),rt)switch(O){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cu:n.blendFunc(n.ONE,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case du:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case uu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case du:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}R=null,T=null,U=null,P=null,A.set(0,0,0),N=0,m=O,E=rt}return}fe=fe||be,re=re||ce,Ne=Ne||Ce,(be!==p||fe!==M)&&(n.blendEquationSeparate(C[be],C[fe]),p=be,M=fe),(ce!==R||Ce!==T||re!==U||Ne!==P)&&(n.blendFuncSeparate(I[ce],I[Ce],I[re],I[Ne]),R=ce,T=Ce,U=re,P=Ne),(qe.equals(A)===!1||ut!==N)&&(n.blendColor(qe.r,qe.g,qe.b,ut),A.copy(qe),N=ut),m=O,E=!1}function oe(O,be){O.side===Gt?Fe(n.CULL_FACE):ve(n.CULL_FACE);let ce=O.side===tn;be&&(ce=!ce),J(ce),O.blending===Ts&&O.transparent===!1?S(Ei):S(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Ce=O.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),se(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(O){x!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),x=O)}function te(O){O!==yg?(ve(n.CULL_FACE),O!==D&&(O===lu?n.cullFace(n.BACK):O===Mg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),D=O}function Q(O){O!==$&&(q&&n.lineWidth(O),$=O)}function se(O,be,ce){O?(ve(n.POLYGON_OFFSET_FILL),(B!==be||Z!==ce)&&(n.polygonOffset(be,ce),B=be,Z=ce)):Fe(n.POLYGON_OFFSET_FILL)}function j(O){O?ve(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function Y(O){O===void 0&&(O=n.TEXTURE0+ne-1),me!==O&&(n.activeTexture(O),me=O)}function we(O,be,ce){ce===void 0&&(me===null?ce=n.TEXTURE0+ne-1:ce=me);let Ce=Ee[ce];Ce===void 0&&(Ce={type:void 0,texture:void 0},Ee[ce]=Ce),(Ce.type!==O||Ce.texture!==be)&&(me!==ce&&(n.activeTexture(ce),me=ce),n.bindTexture(O,be||Ie[O]),Ce.type=O,Ce.texture=be)}function w(){const O=Ee[me];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(O){it.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),it.copy(O))}function Le(O){ie.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ie.copy(O))}function Ue(O,be){let ce=c.get(be);ce===void 0&&(ce=new WeakMap,c.set(be,ce));let Ce=ce.get(O);Ce===void 0&&(Ce=n.getUniformBlockIndex(be,O.name),ce.set(O,Ce))}function ge(O,be){const Ce=c.get(be).get(O);l.get(be)!==Ce&&(n.uniformBlockBinding(be,Ce,O.__bindingPointIndex),l.set(be,Ce))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},me=null,Ee={},d={},f=new WeakMap,h=[],v=null,y=!1,m=null,p=null,R=null,T=null,M=null,U=null,P=null,A=new tt(0,0,0),N=0,E=!1,x=null,D=null,$=null,B=null,Z=null,it.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ve,disable:Fe,bindFramebuffer:et,drawBuffers:ke,useProgram:xt,setBlending:S,setMaterial:oe,setFlipSided:J,setCullFace:te,setLineWidth:Q,setPolygonOffset:se,setScissorTest:j,activeTexture:Y,bindTexture:we,unbindTexture:w,compressedTexImage2D:g,compressedTexImage3D:F,texImage2D:Re,texImage3D:ae,updateUBOMapping:Ue,uniformBlockBinding:ge,texStorage2D:de,texStorage3D:Te,texSubImage2D:W,texSubImage3D:ee,compressedTexSubImage2D:G,compressedTexSubImage3D:xe,scissor:Ae,viewport:Le,reset:Ge}}function By(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,g){return h?new OffscreenCanvas(w,g):Uo("canvas")}function y(w,g,F){let W=1;const ee=we(w);if((ee.width>F||ee.height>F)&&(W=F/Math.max(ee.width,ee.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const G=Math.floor(W*ee.width),xe=Math.floor(W*ee.height);d===void 0&&(d=v(G,xe));const de=g?v(G,xe):d;return de.width=G,de.height=xe,de.getContext("2d").drawImage(w,0,0,G,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+G+"x"+xe+")."),de}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(w,g,F,W,ee=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let G=g;if(g===n.RED&&(F===n.FLOAT&&(G=n.R32F),F===n.HALF_FLOAT&&(G=n.R16F),F===n.UNSIGNED_BYTE&&(G=n.R8)),g===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.R8UI),F===n.UNSIGNED_SHORT&&(G=n.R16UI),F===n.UNSIGNED_INT&&(G=n.R32UI),F===n.BYTE&&(G=n.R8I),F===n.SHORT&&(G=n.R16I),F===n.INT&&(G=n.R32I)),g===n.RG&&(F===n.FLOAT&&(G=n.RG32F),F===n.HALF_FLOAT&&(G=n.RG16F),F===n.UNSIGNED_BYTE&&(G=n.RG8)),g===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RG8UI),F===n.UNSIGNED_SHORT&&(G=n.RG16UI),F===n.UNSIGNED_INT&&(G=n.RG32UI),F===n.BYTE&&(G=n.RG8I),F===n.SHORT&&(G=n.RG16I),F===n.INT&&(G=n.RG32I)),g===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RGB8UI),F===n.UNSIGNED_SHORT&&(G=n.RGB16UI),F===n.UNSIGNED_INT&&(G=n.RGB32UI),F===n.BYTE&&(G=n.RGB8I),F===n.SHORT&&(G=n.RGB16I),F===n.INT&&(G=n.RGB32I)),g===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),F===n.UNSIGNED_INT&&(G=n.RGBA32UI),F===n.BYTE&&(G=n.RGBA8I),F===n.SHORT&&(G=n.RGBA16I),F===n.INT&&(G=n.RGBA32I)),g===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),g===n.RGBA){const xe=ee?Lo:lt.getTransfer(W);F===n.FLOAT&&(G=n.RGBA32F),F===n.HALF_FLOAT&&(G=n.RGBA16F),F===n.UNSIGNED_BYTE&&(G=xe===pt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function M(w,g){let F;return w?g===null||g===ji||g===yr?F=n.DEPTH24_STENCIL8:g===si?F=n.DEPTH32F_STENCIL8:g===br&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ji||g===yr?F=n.DEPTH_COMPONENT24:g===si?F=n.DEPTH_COMPONENT32F:g===br&&(F=n.DEPTH_COMPONENT16),F}function U(w,g){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Rn&&w.minFilter!==zn?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function P(w){const g=w.target;g.removeEventListener("dispose",P),N(g),g.isVideoTexture&&u.delete(g)}function A(w){const g=w.target;g.removeEventListener("dispose",A),x(g)}function N(w){const g=i.get(w);if(g.__webglInit===void 0)return;const F=w.source,W=f.get(F);if(W){const ee=W[g.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(w),Object.keys(W).length===0&&f.delete(F)}i.remove(w)}function E(w){const g=i.get(w);n.deleteTexture(g.__webglTexture);const F=w.source,W=f.get(F);delete W[g.__cacheKey],o.memory.textures--}function x(w){const g=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let ee=0;ee<g.__webglFramebuffer[W].length;ee++)n.deleteFramebuffer(g.__webglFramebuffer[W][ee]);else n.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)n.deleteFramebuffer(g.__webglFramebuffer[W]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=w.textures;for(let W=0,ee=F.length;W<ee;W++){const G=i.get(F[W]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(F[W])}i.remove(w)}let D=0;function $(){D=0}function B(){const w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function Z(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function ne(w,g){const F=i.get(w);if(w.isVideoTexture&&j(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const W=w.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(F,w,g);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+g)}function q(w,g){const F=i.get(w);if(w.version>0&&F.__version!==w.version){Ie(F,w,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+g)}function K(w,g){const F=i.get(w);if(w.version>0&&F.__version!==w.version){Ie(F,w,g);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+g)}function V(w,g){const F=i.get(w);if(w.version>0&&F.__version!==w.version){ve(F,w,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+g)}const me={[yl]:n.REPEAT,[Wi]:n.CLAMP_TO_EDGE,[Ml]:n.MIRRORED_REPEAT},Ee={[Rn]:n.NEAREST,[jg]:n.NEAREST_MIPMAP_NEAREST,[Vr]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[ma]:n.LINEAR_MIPMAP_NEAREST,[Xi]:n.LINEAR_MIPMAP_LINEAR},De={[e0]:n.NEVER,[o0]:n.ALWAYS,[t0]:n.LESS,[$f]:n.LEQUAL,[n0]:n.EQUAL,[r0]:n.GEQUAL,[i0]:n.GREATER,[s0]:n.NOTEQUAL};function ze(w,g){if(g.type===si&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===zn||g.magFilter===ma||g.magFilter===Vr||g.magFilter===Xi||g.minFilter===zn||g.minFilter===ma||g.minFilter===Vr||g.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,me[g.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,me[g.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,me[g.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Ee[g.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Ee[g.minFilter]),g.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,De[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Rn||g.minFilter!==Vr&&g.minFilter!==Xi||g.type===si&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function it(w,g){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",P));const W=g.source;let ee=f.get(W);ee===void 0&&(ee={},f.set(W,ee));const G=Z(g);if(G!==w.__cacheKey){ee[G]===void 0&&(ee[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ee[G].usedTimes++;const xe=ee[w.__cacheKey];xe!==void 0&&(ee[w.__cacheKey].usedTimes--,xe.usedTimes===0&&E(g)),w.__cacheKey=G,w.__webglTexture=ee[G].texture}return F}function ie(w,g,F){return Math.floor(Math.floor(w/F)/g)}function he(w,g,F,W){const G=w.updateRanges;if(G.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,F,W,g.data);else{G.sort((ae,Ae)=>ae.start-Ae.start);let xe=0;for(let ae=1;ae<G.length;ae++){const Ae=G[xe],Le=G[ae],Ue=Ae.start+Ae.count,ge=ie(Le.start,g.width,4),Ge=ie(Ae.start,g.width,4);Le.start<=Ue+1&&ge===Ge&&ie(Le.start+Le.count-1,g.width,4)===ge?Ae.count=Math.max(Ae.count,Le.start+Le.count-Ae.start):(++xe,G[xe]=Le)}G.length=xe+1;const de=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),Re=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ae=0,Ae=G.length;ae<Ae;ae++){const Le=G[ae],Ue=Math.floor(Le.start/4),ge=Math.ceil(Le.count/4),Ge=Ue%g.width,O=Math.floor(Ue/g.width),be=ge,ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,Ge,O,be,ce,F,W,g.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,de),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function Ie(w,g,F){let W=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=n.TEXTURE_3D);const ee=it(w,g),G=g.source;t.bindTexture(W,w.__webglTexture,n.TEXTURE0+F);const xe=i.get(G);if(G.version!==xe.__version||ee===!0){t.activeTexture(n.TEXTURE0+F);const de=lt.getPrimaries(lt.workingColorSpace),Te=g.colorSpace===Mi?null:lt.getPrimaries(g.colorSpace),Re=g.colorSpace===Mi||de===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ae=y(g.image,!1,s.maxTextureSize);ae=Y(g,ae);const Ae=r.convert(g.format,g.colorSpace),Le=r.convert(g.type);let Ue=T(g.internalFormat,Ae,Le,g.colorSpace,g.isVideoTexture);ze(W,g);let ge;const Ge=g.mipmaps,O=g.isVideoTexture!==!0,be=xe.__version===void 0||ee===!0,ce=G.dataReady,Ce=U(g,ae);if(g.isDepthTexture)Ue=M(g.format===Sr,g.type),be&&(O?t.texStorage2D(n.TEXTURE_2D,1,Ue,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Ue,ae.width,ae.height,0,Ae,Le,null));else if(g.isDataTexture)if(Ge.length>0){O&&be&&t.texStorage2D(n.TEXTURE_2D,Ce,Ue,Ge[0].width,Ge[0].height);for(let fe=0,re=Ge.length;fe<re;fe++)ge=Ge[fe],O?ce&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,ge.width,ge.height,Ae,Le,ge.data):t.texImage2D(n.TEXTURE_2D,fe,Ue,ge.width,ge.height,0,Ae,Le,ge.data);g.generateMipmaps=!1}else O?(be&&t.texStorage2D(n.TEXTURE_2D,Ce,Ue,ae.width,ae.height),ce&&he(g,ae,Ae,Le)):t.texImage2D(n.TEXTURE_2D,0,Ue,ae.width,ae.height,0,Ae,Le,ae.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){O&&be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Ue,Ge[0].width,Ge[0].height,ae.depth);for(let fe=0,re=Ge.length;fe<re;fe++)if(ge=Ge[fe],g.format!==wn)if(Ae!==null)if(O){if(ce)if(g.layerUpdates.size>0){const Ne=zu(ge.width,ge.height,g.format,g.type);for(const qe of g.layerUpdates){const ut=ge.data.subarray(qe*Ne/ge.data.BYTES_PER_ELEMENT,(qe+1)*Ne/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,qe,ge.width,ge.height,1,Ae,ut)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,ge.width,ge.height,ae.depth,Ae,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Ue,ge.width,ge.height,ae.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,ge.width,ge.height,ae.depth,Ae,Le,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Ue,ge.width,ge.height,ae.depth,0,Ae,Le,ge.data)}else{O&&be&&t.texStorage2D(n.TEXTURE_2D,Ce,Ue,Ge[0].width,Ge[0].height);for(let fe=0,re=Ge.length;fe<re;fe++)ge=Ge[fe],g.format!==wn?Ae!==null?O?ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,ge.width,ge.height,Ae,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Ue,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ce&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,ge.width,ge.height,Ae,Le,ge.data):t.texImage2D(n.TEXTURE_2D,fe,Ue,ge.width,ge.height,0,Ae,Le,ge.data)}else if(g.isDataArrayTexture)if(O){if(be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Ue,ae.width,ae.height,ae.depth),ce)if(g.layerUpdates.size>0){const fe=zu(ae.width,ae.height,g.format,g.type);for(const re of g.layerUpdates){const Ne=ae.data.subarray(re*fe/ae.data.BYTES_PER_ELEMENT,(re+1)*fe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,ae.width,ae.height,1,Ae,Le,Ne)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ae,Le,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,ae.width,ae.height,ae.depth,0,Ae,Le,ae.data);else if(g.isData3DTexture)O?(be&&t.texStorage3D(n.TEXTURE_3D,Ce,Ue,ae.width,ae.height,ae.depth),ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ae,Le,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,ae.width,ae.height,ae.depth,0,Ae,Le,ae.data);else if(g.isFramebufferTexture){if(be)if(O)t.texStorage2D(n.TEXTURE_2D,Ce,Ue,ae.width,ae.height);else{let fe=ae.width,re=ae.height;for(let Ne=0;Ne<Ce;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,Ue,fe,re,0,Ae,Le,null),fe>>=1,re>>=1}}else if(Ge.length>0){if(O&&be){const fe=we(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Ue,fe.width,fe.height)}for(let fe=0,re=Ge.length;fe<re;fe++)ge=Ge[fe],O?ce&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Ae,Le,ge):t.texImage2D(n.TEXTURE_2D,fe,Ue,Ae,Le,ge);g.generateMipmaps=!1}else if(O){if(be){const fe=we(ae);t.texStorage2D(n.TEXTURE_2D,Ce,Ue,fe.width,fe.height)}ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Le,ae)}else t.texImage2D(n.TEXTURE_2D,0,Ue,Ae,Le,ae);m(g)&&p(W),xe.__version=G.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function ve(w,g,F){if(g.image.length!==6)return;const W=it(w,g),ee=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+F);const G=i.get(ee);if(ee.version!==G.__version||W===!0){t.activeTexture(n.TEXTURE0+F);const xe=lt.getPrimaries(lt.workingColorSpace),de=g.colorSpace===Mi?null:lt.getPrimaries(g.colorSpace),Te=g.colorSpace===Mi||xe===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Re=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,Ae=[];for(let re=0;re<6;re++)!Re&&!ae?Ae[re]=y(g.image[re],!0,s.maxCubemapSize):Ae[re]=ae?g.image[re].image:g.image[re],Ae[re]=Y(g,Ae[re]);const Le=Ae[0],Ue=r.convert(g.format,g.colorSpace),ge=r.convert(g.type),Ge=T(g.internalFormat,Ue,ge,g.colorSpace),O=g.isVideoTexture!==!0,be=G.__version===void 0||W===!0,ce=ee.dataReady;let Ce=U(g,Le);ze(n.TEXTURE_CUBE_MAP,g);let fe;if(Re){O&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Ge,Le.width,Le.height);for(let re=0;re<6;re++){fe=Ae[re].mipmaps;for(let Ne=0;Ne<fe.length;Ne++){const qe=fe[Ne];g.format!==wn?Ue!==null?O?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,0,0,qe.width,qe.height,Ue,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,Ge,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,0,0,qe.width,qe.height,Ue,ge,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,Ge,qe.width,qe.height,0,Ue,ge,qe.data)}}}else{if(fe=g.mipmaps,O&&be){fe.length>0&&Ce++;const re=we(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Ge,re.width,re.height)}for(let re=0;re<6;re++)if(ae){O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ae[re].width,Ae[re].height,Ue,ge,Ae[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,Ae[re].width,Ae[re].height,0,Ue,ge,Ae[re].data);for(let Ne=0;Ne<fe.length;Ne++){const ut=fe[Ne].image[re].image;O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,0,0,ut.width,ut.height,Ue,ge,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,Ge,ut.width,ut.height,0,Ue,ge,ut.data)}}else{O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ue,ge,Ae[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,Ue,ge,Ae[re]);for(let Ne=0;Ne<fe.length;Ne++){const qe=fe[Ne];O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,0,0,Ue,ge,qe.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,Ge,Ue,ge,qe.image[re])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),G.__version=ee.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Fe(w,g,F,W,ee,G){const xe=r.convert(F.format,F.colorSpace),de=r.convert(F.type),Te=T(F.internalFormat,xe,de,F.colorSpace),Re=i.get(g),ae=i.get(F);if(ae.__renderTarget=g,!Re.__hasExternalTextures){const Ae=Math.max(1,g.width>>G),Le=Math.max(1,g.height>>G);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,G,Te,Ae,Le,g.depth,0,xe,de,null):t.texImage2D(ee,G,Te,Ae,Le,0,xe,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),se(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,ee,ae.__webglTexture,0,Q(g)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,ee,ae.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(w,g,F){if(n.bindRenderbuffer(n.RENDERBUFFER,w),g.depthBuffer){const W=g.depthTexture,ee=W&&W.isDepthTexture?W.type:null,G=M(g.stencilBuffer,ee),xe=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=Q(g);se(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,G,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,G,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,G,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,w)}else{const W=g.textures;for(let ee=0;ee<W.length;ee++){const G=W[ee],xe=r.convert(G.format,G.colorSpace),de=r.convert(G.type),Te=T(G.internalFormat,xe,de,G.colorSpace),Re=Q(g);F&&se(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Te,g.width,g.height):se(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,Te,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Te,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ke(w,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(g.depthTexture);W.__renderTarget=g,(!W.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ne(g.depthTexture,0);const ee=W.__webglTexture,G=Q(g);if(g.depthTexture.format===Mr)se(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(g.depthTexture.format===Sr)se(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function xt(w){const g=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const W=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){const ee=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",ee)};W.addEventListener("dispose",ee),g.__depthDisposeCallback=ee}g.__boundDepthTexture=W}if(w.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const W=w.texture.mipmaps;W&&W.length>0?ke(g.__webglFramebuffer[0],w):ke(g.__webglFramebuffer,w)}else if(F){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=n.createRenderbuffer(),et(g.__webglDepthbuffer[W],w,!1);else{const ee=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,G)}}else{const W=w.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),et(g.__webglDepthbuffer,w,!1);else{const ee=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,G)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(w,g,F){const W=i.get(w);g!==void 0&&Fe(W.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&xt(w)}function I(w){const g=w.texture,F=i.get(w),W=i.get(g);w.addEventListener("dispose",A);const ee=w.textures,G=w.isWebGLCubeRenderTarget===!0,xe=ee.length>1;if(xe||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=g.version,o.memory.textures++),G){F.__webglFramebuffer=[];for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[de]=[];for(let Te=0;Te<g.mipmaps.length;Te++)F.__webglFramebuffer[de][Te]=n.createFramebuffer()}else F.__webglFramebuffer[de]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let de=0;de<g.mipmaps.length;de++)F.__webglFramebuffer[de]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(xe)for(let de=0,Te=ee.length;de<Te;de++){const Re=i.get(ee[de]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&se(w)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){const Te=ee[de];F.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[de]);const Re=r.convert(Te.format,Te.colorSpace),ae=r.convert(Te.type),Ae=T(Te.internalFormat,Re,ae,Te.colorSpace,w.isXRRenderTarget===!0),Le=Q(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Ae,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,F.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),et(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),ze(n.TEXTURE_CUBE_MAP,g);for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)Fe(F.__webglFramebuffer[de][Te],w,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Te);else Fe(F.__webglFramebuffer[de],w,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(g)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let de=0,Te=ee.length;de<Te;de++){const Re=ee[de],ae=i.get(Re);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),ze(n.TEXTURE_2D,Re),Fe(F.__webglFramebuffer,w,Re,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),m(Re)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(de=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,W.__webglTexture),ze(de,g),g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)Fe(F.__webglFramebuffer[Te],w,g,n.COLOR_ATTACHMENT0,de,Te);else Fe(F.__webglFramebuffer,w,g,n.COLOR_ATTACHMENT0,de,0);m(g)&&p(de),t.unbindTexture()}w.depthBuffer&&xt(w)}function S(w){const g=w.textures;for(let F=0,W=g.length;F<W;F++){const ee=g[F];if(m(ee)){const G=R(w),xe=i.get(ee).__webglTexture;t.bindTexture(G,xe),p(G),t.unbindTexture()}}}const oe=[],J=[];function te(w){if(w.samples>0){if(se(w)===!1){const g=w.textures,F=w.width,W=w.height;let ee=n.COLOR_BUFFER_BIT;const G=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(w),de=g.length>1;if(de)for(let Re=0;Re<g.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Te=w.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Re=0;Re<g.length;Re++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Re]);const ae=i.get(g[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,F,W,0,0,F,W,ee,n.NEAREST),l===!0&&(oe.length=0,J.length=0,oe.push(n.COLOR_ATTACHMENT0+Re),w.depthBuffer&&w.resolveDepthBuffer===!1&&(oe.push(G),J.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,J)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let Re=0;Re<g.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Re]);const ae=i.get(g[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const g=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Q(w){return Math.min(s.maxSamples,w.samples)}function se(w){const g=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function j(w){const g=o.render.frame;u.get(w)!==g&&(u.set(w,g),w.update())}function Y(w,g){const F=w.colorSpace,W=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Us&&F!==Mi&&(lt.getTransfer(F)===pt?(W!==wn||ee!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function we(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=$,this.setTexture2D=ne,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=C,this.setupRenderTarget=I,this.updateRenderTargetMipmap=S,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=se}function ky(n,e){function t(i,s=Mi){let r;const o=lt.getTransfer(s);if(i===Xn)return n.UNSIGNED_BYTE;if(i===bc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Of)return n.BYTE;if(i===Bf)return n.SHORT;if(i===br)return n.UNSIGNED_SHORT;if(i===vc)return n.INT;if(i===ji)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===Rr)return n.HALF_FLOAT;if(i===zf)return n.ALPHA;if(i===Hf)return n.RGB;if(i===wn)return n.RGBA;if(i===Mr)return n.DEPTH_COMPONENT;if(i===Sr)return n.DEPTH_STENCIL;if(i===Vf)return n.RED;if(i===Mc)return n.RED_INTEGER;if(i===Gf)return n.RG;if(i===Sc)return n.RG_INTEGER;if(i===Ec)return n.RGBA_INTEGER;if(i===xo||i===vo||i===bo||i===yo)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sl||i===El||i===wl||i===Tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===El)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Al||i===Rl||i===Cl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Al||i===Rl)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pl||i===Dl||i===Ll||i===Il||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===kl||i===zl||i===Hl||i===Vl||i===Gl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Pl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ll)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Il)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ul)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ol)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mo||i===Wl||i===Xl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Mo)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wf||i===$l||i===ql||i===Yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Mo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===$l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ql)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hy=`
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

}`;class Vy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new nn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ri({vertexShader:zy,fragmentShader:Hy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new Lr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gy extends zs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,v=null;const y=new Vy,m=t.getContextAttributes();let p=null,R=null;const T=[],M=[],U=new st;let P=null;const A=new mn;A.viewport=new Tt;const N=new mn;N.viewport=new Tt;const E=[A,N],x=new l_;let D=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let he=T[ie];return he===void 0&&(he=new Fa,T[ie]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ie){let he=T[ie];return he===void 0&&(he=new Fa,T[ie]=he),he.getGripSpace()},this.getHand=function(ie){let he=T[ie];return he===void 0&&(he=new Fa,T[ie]=he),he.getHandSpace()};function B(ie){const he=M.indexOf(ie.inputSource);if(he===-1)return;const Ie=T[he];Ie!==void 0&&(Ie.update(ie.inputSource,ie.frame,c||o),Ie.dispatchEvent({type:ie.type,data:ie.inputSource}))}function Z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ne);for(let ie=0;ie<T.length;ie++){const he=M[ie];he!==null&&(M[ie]=null,T[ie].disconnect(he))}D=null,$=null,y.reset(),e.setRenderTarget(p),h=null,f=null,d=null,s=null,R=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,ve=null,Fe=null;m.depth&&(Fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=m.stencil?Sr:Mr,ve=m.stencil?yr:ji);const et={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(et),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),R=new Zi(f.textureWidth,f.textureHeight,{format:wn,type:Xn,depthTexture:new ih(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,Ie),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),R=new Zi(h.framebufferWidth,h.framebufferHeight,{format:wn,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ne(ie){for(let he=0;he<ie.removed.length;he++){const Ie=ie.removed[he],ve=M.indexOf(Ie);ve>=0&&(M[ve]=null,T[ve].disconnect(Ie))}for(let he=0;he<ie.added.length;he++){const Ie=ie.added[he];let ve=M.indexOf(Ie);if(ve===-1){for(let et=0;et<T.length;et++)if(et>=M.length){M.push(Ie),ve=et;break}else if(M[et]===null){M[et]=Ie,ve=et;break}if(ve===-1)break}const Fe=T[ve];Fe&&Fe.connect(Ie)}}const q=new z,K=new z;function V(ie,he,Ie){q.setFromMatrixPosition(he.matrixWorld),K.setFromMatrixPosition(Ie.matrixWorld);const ve=q.distanceTo(K),Fe=he.projectionMatrix.elements,et=Ie.projectionMatrix.elements,ke=Fe[14]/(Fe[10]-1),xt=Fe[14]/(Fe[10]+1),C=(Fe[9]+1)/Fe[5],I=(Fe[9]-1)/Fe[5],S=(Fe[8]-1)/Fe[0],oe=(et[8]+1)/et[0],J=ke*S,te=ke*oe,Q=ve/(-S+oe),se=Q*-S;if(he.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(se),ie.translateZ(Q),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Fe[10]===-1)ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const j=ke+Q,Y=xt+Q,we=J-se,w=te+(ve-se),g=C*xt/Y*j,F=I*xt/Y*j;ie.projectionMatrix.makePerspective(we,w,g,F,j,Y),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function me(ie,he){he===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(he.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let he=ie.near,Ie=ie.far;y.texture!==null&&(y.depthNear>0&&(he=y.depthNear),y.depthFar>0&&(Ie=y.depthFar)),x.near=N.near=A.near=he,x.far=N.far=A.far=Ie,(D!==x.near||$!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,$=x.far),A.layers.mask=ie.layers.mask|2,N.layers.mask=ie.layers.mask|4,x.layers.mask=A.layers.mask|N.layers.mask;const ve=ie.parent,Fe=x.cameras;me(x,ve);for(let et=0;et<Fe.length;et++)me(Fe[et],ve);Fe.length===2?V(x,A,N):x.projectionMatrix.copy(A.projectionMatrix),Ee(ie,x,ve)};function Ee(ie,he,Ie){Ie===null?ie.matrix.copy(he.matrixWorld):(ie.matrix.copy(Ie.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(he.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Er*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let De=null;function ze(ie,he){if(u=he.getViewerPose(c||o),v=he,u!==null){const Ie=u.views;h!==null&&(e.setRenderTargetFramebuffer(R,h.framebuffer),e.setRenderTarget(R));let ve=!1;Ie.length!==x.cameras.length&&(x.cameras.length=0,ve=!0);for(let ke=0;ke<Ie.length;ke++){const xt=Ie[ke];let C=null;if(h!==null)C=h.getViewport(xt);else{const S=d.getViewSubImage(f,xt);C=S.viewport,ke===0&&(e.setRenderTargetTextures(R,S.colorTexture,S.depthStencilTexture),e.setRenderTarget(R))}let I=E[ke];I===void 0&&(I=new mn,I.layers.enable(ke),I.viewport=new Tt,E[ke]=I),I.matrix.fromArray(xt.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(xt.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(C.x,C.y,C.width,C.height),ke===0&&(x.matrix.copy(I.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ve===!0&&x.cameras.push(I)}const Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const ke=d.getDepthInformation(Ie[0]);ke&&ke.isValid&&ke.texture&&y.init(e,ke,s.renderState)}}for(let Ie=0;Ie<T.length;Ie++){const ve=M[Ie],Fe=T[Ie];ve!==null&&Fe!==void 0&&Fe.update(ve,he,c||o)}De&&De(ie,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),v=null}const it=new oh;it.setAnimationLoop(ze),this.setAnimationLoop=function(ie){De=ie},this.dispose=function(){}}}const Oi=new $n,Wy=new Et;function Xy(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,eh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,R,T,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,R,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const R=e.get(p),T=R.envMap,M=R.envMapRotation;T&&(m.envMap.value=T,Oi.copy(M),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(Wy.makeRotationFromEuler(Oi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,R,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*R,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,R){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const R=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $y(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,T){const M=T.program;i.uniformBlockBinding(R,M)}function c(R,T){let M=s[R.id];M===void 0&&(v(R),M=u(R),s[R.id]=M,R.addEventListener("dispose",m));const U=T.program;i.updateUBOMapping(R,U);const P=e.render.frame;r[R.id]!==P&&(f(R),r[R.id]=P)}function u(R){const T=d();R.__bindingPointIndex=T;const M=n.createBuffer(),U=R.__size,P=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,U,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,M),M}function d(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const T=s[R.id],M=R.uniforms,U=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let P=0,A=M.length;P<A;P++){const N=Array.isArray(M[P])?M[P]:[M[P]];for(let E=0,x=N.length;E<x;E++){const D=N[E];if(h(D,P,E,U)===!0){const $=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let Z=0;for(let ne=0;ne<B.length;ne++){const q=B[ne],K=y(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,$+Z,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,Z),Z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(R,T,M,U){const P=R.value,A=T+"_"+M;if(U[A]===void 0)return typeof P=="number"||typeof P=="boolean"?U[A]=P:U[A]=P.clone(),!0;{const N=U[A];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return U[A]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function v(R){const T=R.uniforms;let M=0;const U=16;for(let A=0,N=T.length;A<N;A++){const E=Array.isArray(T[A])?T[A]:[T[A]];for(let x=0,D=E.length;x<D;x++){const $=E[x],B=Array.isArray($.value)?$.value:[$.value];for(let Z=0,ne=B.length;Z<ne;Z++){const q=B[Z],K=y(q),V=M%U,me=V%K.boundary,Ee=V+me;M+=me,Ee!==0&&U-Ee<K.storage&&(M+=U-Ee),$.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=M,M+=K.storage}}}const P=M%U;return P>0&&(M+=U-P),R.__size=M,R.__cache={},this}function y(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function m(R){const T=R.target;T.removeEventListener("dispose",m);const M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(const R in s)n.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class qy{constructor(e={}){const{canvas:t=S0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const v=new Uint32Array(4),y=new Int32Array(4);let m=null,p=null;const R=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let U=!1;this._outputColorSpace=ln;let P=0,A=0,N=null,E=-1,x=null;const D=new Tt,$=new Tt;let B=null;const Z=new tt(0);let ne=0,q=t.width,K=t.height,V=1,me=null,Ee=null;const De=new Tt(0,0,q,K),ze=new Tt(0,0,q,K);let it=!1;const ie=new Rc;let he=!1,Ie=!1;const ve=new Et,Fe=new Et,et=new z,ke=new Tt,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function I(){return N===null?V:1}let S=i;function oe(_,L){return t.getContext(_,L)}try{const _={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xc}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",re,!1),S===null){const L="webgl2";if(S=oe(L,_),S===null)throw oe(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let J,te,Q,se,j,Y,we,w,g,F,W,ee,G,xe,de,Te,Re,ae,Ae,Le,Ue,ge,Ge,O;function be(){J=new ib(S),J.init(),ge=new ky(S,J),te=new jv(S,J,e,ge),Q=new Oy(S,J),te.reverseDepthBuffer&&f&&Q.buffers.depth.setReversed(!0),se=new ob(S),j=new Ey,Y=new By(S,J,Q,j,te,ge,se),we=new Jv(M),w=new nb(M),g=new f_(S),Ge=new Yv(S,g),F=new sb(S,g,se,Ge),W=new lb(S,F,g,se),Ae=new ab(S,te,Y),Te=new Zv(j),ee=new Sy(M,we,w,J,te,Ge,Te),G=new Xy(M,j),xe=new Ty,de=new Ly(J),ae=new qv(M,we,w,Q,W,h,l),Re=new Ny(M,W,te),O=new $y(S,se,te,Q),Le=new Kv(S,J,se),Ue=new rb(S,J,se),se.programs=ee.programs,M.capabilities=te,M.extensions=J,M.properties=j,M.renderLists=xe,M.shadowMap=Re,M.state=Q,M.info=se}be();const ce=new Gy(M,S);this.xr=ce,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const _=J.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=J.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(_){_!==void 0&&(V=_,this.setSize(q,K,!1))},this.getSize=function(_){return _.set(q,K)},this.setSize=function(_,L,H=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=_,K=L,t.width=Math.floor(_*V),t.height=Math.floor(L*V),H===!0&&(t.style.width=_+"px",t.style.height=L+"px"),this.setViewport(0,0,_,L)},this.getDrawingBufferSize=function(_){return _.set(q*V,K*V).floor()},this.setDrawingBufferSize=function(_,L,H){q=_,K=L,V=H,t.width=Math.floor(_*H),t.height=Math.floor(L*H),this.setViewport(0,0,_,L)},this.getCurrentViewport=function(_){return _.copy(D)},this.getViewport=function(_){return _.copy(De)},this.setViewport=function(_,L,H,X){_.isVector4?De.set(_.x,_.y,_.z,_.w):De.set(_,L,H,X),Q.viewport(D.copy(De).multiplyScalar(V).round())},this.getScissor=function(_){return _.copy(ze)},this.setScissor=function(_,L,H,X){_.isVector4?ze.set(_.x,_.y,_.z,_.w):ze.set(_,L,H,X),Q.scissor($.copy(ze).multiplyScalar(V).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(_){Q.setScissorTest(it=_)},this.setOpaqueSort=function(_){me=_},this.setTransparentSort=function(_){Ee=_},this.getClearColor=function(_){return _.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(_=!0,L=!0,H=!0){let X=0;if(_){let k=!1;if(N!==null){const ue=N.texture.format;k=ue===Ec||ue===Sc||ue===Mc}if(k){const ue=N.texture.type,ye=ue===Xn||ue===ji||ue===br||ue===yr||ue===bc||ue===yc,Pe=ae.getClearColor(),Se=ae.getClearAlpha(),He=Pe.r,$e=Pe.g,Be=Pe.b;ye?(v[0]=He,v[1]=$e,v[2]=Be,v[3]=Se,S.clearBufferuiv(S.COLOR,0,v)):(y[0]=He,y[1]=$e,y[2]=Be,y[3]=Se,S.clearBufferiv(S.COLOR,0,y))}else X|=S.COLOR_BUFFER_BIT}L&&(X|=S.DEPTH_BUFFER_BIT),H&&(X|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ae.dispose(),xe.dispose(),de.dispose(),j.dispose(),we.dispose(),w.dispose(),W.dispose(),Ge.dispose(),O.dispose(),ee.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",fi),ce.removeEventListener("sessionend",hi),vn.stop()};function Ce(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const _=se.autoReset,L=Re.enabled,H=Re.autoUpdate,X=Re.needsUpdate,k=Re.type;be(),se.autoReset=_,Re.enabled=L,Re.autoUpdate=H,Re.needsUpdate=X,Re.type=k}function re(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Ne(_){const L=_.target;L.removeEventListener("dispose",Ne),qe(L)}function qe(_){ut(_),j.remove(_)}function ut(_){const L=j.get(_).programs;L!==void 0&&(L.forEach(function(H){ee.releaseProgram(H)}),_.isShaderMaterial&&ee.releaseShaderCache(_))}this.renderBufferDirect=function(_,L,H,X,k,ue){L===null&&(L=xt);const ye=k.isMesh&&k.matrixWorld.determinant()<0,Pe=Br(_,L,H,X,k);Q.setMaterial(X,ye);let Se=H.index,He=1;if(X.wireframe===!0){if(Se=F.getWireframeAttribute(H),Se===void 0)return;He=2}const $e=H.drawRange,Be=H.attributes.position;let Qe=$e.start*He,ot=($e.start+$e.count)*He;ue!==null&&(Qe=Math.max(Qe,ue.start*He),ot=Math.min(ot,(ue.start+ue.count)*He)),Se!==null?(Qe=Math.max(Qe,0),ot=Math.min(ot,Se.count)):Be!=null&&(Qe=Math.max(Qe,0),ot=Math.min(ot,Be.count));const wt=ot-Qe;if(wt<0||wt===1/0)return;Ge.setup(k,X,Pe,H,Se);let bt,gt=Le;if(Se!==null&&(bt=g.get(Se),gt=Ue,gt.setIndex(bt)),k.isMesh)X.wireframe===!0?(Q.setLineWidth(X.wireframeLinewidth*I()),gt.setMode(S.LINES)):gt.setMode(S.TRIANGLES);else if(k.isLine){let Ve=X.linewidth;Ve===void 0&&(Ve=1),Q.setLineWidth(Ve*I()),k.isLineSegments?gt.setMode(S.LINES):k.isLineLoop?gt.setMode(S.LINE_LOOP):gt.setMode(S.LINE_STRIP)}else k.isPoints?gt.setMode(S.POINTS):k.isSprite&&gt.setMode(S.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)As("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))gt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ve=k._multiDrawStarts,St=k._multiDrawCounts,at=k._multiDrawCount,sn=Se?g.get(Se).bytesPerElement:1,ts=j.get(X).currentProgram.getUniforms();for(let rn=0;rn<at;rn++)ts.setValue(S,"_gl_DrawID",rn),gt.render(Ve[rn]/sn,St[rn])}else if(k.isInstancedMesh)gt.renderInstances(Qe,wt,k.count);else if(H.isInstancedBufferGeometry){const Ve=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,St=Math.min(H.instanceCount,Ve);gt.renderInstances(Qe,wt,St)}else gt.render(Qe,wt)};function rt(_,L,H){_.transparent===!0&&_.side===Gt&&_.forceSinglePass===!1?(_.side=tn,_.needsUpdate=!0,es(_,L,H),_.side=Ai,_.needsUpdate=!0,es(_,L,H),_.side=Gt):es(_,L,H)}this.compile=function(_,L,H=null){H===null&&(H=_),p=de.get(H),p.init(L),T.push(p),H.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),_!==H&&_.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const X=new Set;return _.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ue=k.material;if(ue)if(Array.isArray(ue))for(let ye=0;ye<ue.length;ye++){const Pe=ue[ye];rt(Pe,H,k),X.add(Pe)}else rt(ue,H,k),X.add(ue)}),p=T.pop(),X},this.compileAsync=function(_,L,H=null){const X=this.compile(_,L,H);return new Promise(k=>{function ue(){if(X.forEach(function(ye){j.get(ye).currentProgram.isReady()&&X.delete(ye)}),X.size===0){k(_);return}setTimeout(ue,10)}J.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Nt=null;function un(_){Nt&&Nt(_)}function fi(){vn.stop()}function hi(){vn.start()}const vn=new oh;vn.setAnimationLoop(un),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(_){Nt=_,ce.setAnimationLoop(_),_===null?vn.stop():vn.start()},ce.addEventListener("sessionstart",fi),ce.addEventListener("sessionend",hi),this.render=function(_,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(L),L=ce.getCamera()),_.isScene===!0&&_.onBeforeRender(M,_,L,N),p=de.get(_,T.length),p.init(L),T.push(p),Fe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),ie.setFromProjectionMatrix(Fe),Ie=this.localClippingEnabled,he=Te.init(this.clippingPlanes,Ie),m=xe.get(_,R.length),m.init(),R.push(m),ce.enabled===!0&&ce.isPresenting===!0){const ue=M.xr.getDepthSensingMesh();ue!==null&&Xs(ue,L,-1/0,M.sortObjects)}Xs(_,L,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(me,Ee),C=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,C&&ae.addToRenderList(m,_),this.info.render.frame++,he===!0&&Te.beginShadows();const H=p.state.shadowsArray;Re.render(H,_,L),he===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,k=m.transmissive;if(p.setupLights(),L.isArrayCamera){const ue=L.cameras;if(k.length>0)for(let ye=0,Pe=ue.length;ye<Pe;ye++){const Se=ue[ye];Ur(X,k,_,Se)}C&&ae.render(_);for(let ye=0,Pe=ue.length;ye<Pe;ye++){const Se=ue[ye];Ir(m,_,Se,Se.viewport)}}else k.length>0&&Ur(X,k,_,L),C&&ae.render(_),Ir(m,_,L);N!==null&&A===0&&(Y.updateMultisampleRenderTarget(N),Y.updateRenderTargetMipmap(N)),_.isScene===!0&&_.onAfterRender(M,_,L),Ge.resetDefaultState(),E=-1,x=null,T.pop(),T.length>0?(p=T[T.length-1],he===!0&&Te.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Xs(_,L,H,X){if(_.visible===!1)return;if(_.layers.test(L.layers)){if(_.isGroup)H=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(L);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||ie.intersectsSprite(_)){X&&ke.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Fe);const ye=W.update(_),Pe=_.material;Pe.visible&&m.push(_,ye,Pe,H,ke.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||ie.intersectsObject(_))){const ye=W.update(_),Pe=_.material;if(X&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),ke.copy(_.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),ke.copy(ye.boundingSphere.center)),ke.applyMatrix4(_.matrixWorld).applyMatrix4(Fe)),Array.isArray(Pe)){const Se=ye.groups;for(let He=0,$e=Se.length;He<$e;He++){const Be=Se[He],Qe=Pe[Be.materialIndex];Qe&&Qe.visible&&m.push(_,ye,Qe,H,ke.z,Be)}}else Pe.visible&&m.push(_,ye,Pe,H,ke.z,null)}}const ue=_.children;for(let ye=0,Pe=ue.length;ye<Pe;ye++)Xs(ue[ye],L,H,X)}function Ir(_,L,H,X){const k=_.opaque,ue=_.transmissive,ye=_.transparent;p.setupLightsView(H),he===!0&&Te.setGlobalState(M.clippingPlanes,H),X&&Q.viewport(D.copy(X)),k.length>0&&Qi(k,L,H),ue.length>0&&Qi(ue,L,H),ye.length>0&&Qi(ye,L,H),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Ur(_,L,H,X){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Zi(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Rr:Xn,minFilter:Xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const ue=p.state.transmissionRenderTarget[X.id],ye=X.viewport||D;ue.setSize(ye.z*M.transmissionResolutionScale,ye.w*M.transmissionResolutionScale);const Pe=M.getRenderTarget(),Se=M.getActiveCubeFace(),He=M.getActiveMipmapLevel();M.setRenderTarget(ue),M.getClearColor(Z),ne=M.getClearAlpha(),ne<1&&M.setClearColor(16777215,.5),M.clear(),C&&ae.render(H);const $e=M.toneMapping;M.toneMapping=wi;const Be=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),he===!0&&Te.setGlobalState(M.clippingPlanes,X),Qi(_,H,X),Y.updateMultisampleRenderTarget(ue),Y.updateRenderTargetMipmap(ue),J.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ot=0,wt=L.length;ot<wt;ot++){const bt=L[ot],gt=bt.object,Ve=bt.geometry,St=bt.material,at=bt.group;if(St.side===Gt&&gt.layers.test(X.layers)){const sn=St.side;St.side=tn,St.needsUpdate=!0,Nr(gt,H,X,Ve,St,at),St.side=sn,St.needsUpdate=!0,Qe=!0}}Qe===!0&&(Y.updateMultisampleRenderTarget(ue),Y.updateRenderTargetMipmap(ue))}M.setRenderTarget(Pe,Se,He),M.setClearColor(Z,ne),Be!==void 0&&(X.viewport=Be),M.toneMapping=$e}function Qi(_,L,H){const X=L.isScene===!0?L.overrideMaterial:null;for(let k=0,ue=_.length;k<ue;k++){const ye=_[k],Pe=ye.object,Se=ye.geometry,He=ye.group;let $e=ye.material;$e.allowOverride===!0&&X!==null&&($e=X),Pe.layers.test(H.layers)&&Nr(Pe,L,H,Se,$e,He)}}function Nr(_,L,H,X,k,ue){_.onBeforeRender(M,L,H,X,k,ue),_.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),k.onBeforeRender(M,L,H,X,_,ue),k.transparent===!0&&k.side===Gt&&k.forceSinglePass===!1?(k.side=tn,k.needsUpdate=!0,M.renderBufferDirect(H,L,X,k,_,ue),k.side=Ai,k.needsUpdate=!0,M.renderBufferDirect(H,L,X,k,_,ue),k.side=Gt):M.renderBufferDirect(H,L,X,k,_,ue),_.onAfterRender(M,L,H,X,k,ue)}function es(_,L,H){L.isScene!==!0&&(L=xt);const X=j.get(_),k=p.state.lights,ue=p.state.shadowsArray,ye=k.state.version,Pe=ee.getParameters(_,k.state,ue,L,H),Se=ee.getProgramCacheKey(Pe);let He=X.programs;X.environment=_.isMeshStandardMaterial?L.environment:null,X.fog=L.fog,X.envMap=(_.isMeshStandardMaterial?w:we).get(_.envMap||X.environment),X.envMapRotation=X.environment!==null&&_.envMap===null?L.environmentRotation:_.envMapRotation,He===void 0&&(_.addEventListener("dispose",Ne),He=new Map,X.programs=He);let $e=He.get(Se);if($e!==void 0){if(X.currentProgram===$e&&X.lightsStateVersion===ye)return Or(_,Pe),$e}else Pe.uniforms=ee.getUniforms(_),_.onBeforeCompile(Pe,M),$e=ee.acquireProgram(Pe,Se),He.set(Se,$e),X.uniforms=Pe.uniforms;const Be=X.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Be.clippingPlanes=Te.uniform),Or(_,Pe),X.needsLights=ta(_),X.lightsStateVersion=ye,X.needsLights&&(Be.ambientLightColor.value=k.state.ambient,Be.lightProbe.value=k.state.probe,Be.directionalLights.value=k.state.directional,Be.directionalLightShadows.value=k.state.directionalShadow,Be.spotLights.value=k.state.spot,Be.spotLightShadows.value=k.state.spotShadow,Be.rectAreaLights.value=k.state.rectArea,Be.ltc_1.value=k.state.rectAreaLTC1,Be.ltc_2.value=k.state.rectAreaLTC2,Be.pointLights.value=k.state.point,Be.pointLightShadows.value=k.state.pointShadow,Be.hemisphereLights.value=k.state.hemi,Be.directionalShadowMap.value=k.state.directionalShadowMap,Be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Be.spotShadowMap.value=k.state.spotShadowMap,Be.spotLightMatrix.value=k.state.spotLightMatrix,Be.spotLightMap.value=k.state.spotLightMap,Be.pointShadowMap.value=k.state.pointShadowMap,Be.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=$e,X.uniformsList=null,$e}function Fr(_){if(_.uniformsList===null){const L=_.currentProgram.getUniforms();_.uniformsList=So.seqWithValue(L.seq,_.uniforms)}return _.uniformsList}function Or(_,L){const H=j.get(_);H.outputColorSpace=L.outputColorSpace,H.batching=L.batching,H.batchingColor=L.batchingColor,H.instancing=L.instancing,H.instancingColor=L.instancingColor,H.instancingMorph=L.instancingMorph,H.skinning=L.skinning,H.morphTargets=L.morphTargets,H.morphNormals=L.morphNormals,H.morphColors=L.morphColors,H.morphTargetsCount=L.morphTargetsCount,H.numClippingPlanes=L.numClippingPlanes,H.numIntersection=L.numClipIntersection,H.vertexAlphas=L.vertexAlphas,H.vertexTangents=L.vertexTangents,H.toneMapping=L.toneMapping}function Br(_,L,H,X,k){L.isScene!==!0&&(L=xt),Y.resetTextureUnits();const ue=L.fog,ye=X.isMeshStandardMaterial?L.environment:null,Pe=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Us,Se=(X.isMeshStandardMaterial?w:we).get(X.envMap||ye),He=X.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,$e=!!H.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Be=!!H.morphAttributes.position,Qe=!!H.morphAttributes.normal,ot=!!H.morphAttributes.color;let wt=wi;X.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(wt=M.toneMapping);const bt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,gt=bt!==void 0?bt.length:0,Ve=j.get(X),St=p.state.lights;if(he===!0&&(Ie===!0||_!==x)){const $t=_===x&&X.id===E;Te.setState(X,_,$t)}let at=!1;X.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==St.state.version||Ve.outputColorSpace!==Pe||k.isBatchedMesh&&Ve.batching===!1||!k.isBatchedMesh&&Ve.batching===!0||k.isBatchedMesh&&Ve.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ve.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ve.instancing===!1||!k.isInstancedMesh&&Ve.instancing===!0||k.isSkinnedMesh&&Ve.skinning===!1||!k.isSkinnedMesh&&Ve.skinning===!0||k.isInstancedMesh&&Ve.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ve.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ve.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ve.instancingMorph===!1&&k.morphTexture!==null||Ve.envMap!==Se||X.fog===!0&&Ve.fog!==ue||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Te.numPlanes||Ve.numIntersection!==Te.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==$e||Ve.morphTargets!==Be||Ve.morphNormals!==Qe||Ve.morphColors!==ot||Ve.toneMapping!==wt||Ve.morphTargetsCount!==gt)&&(at=!0):(at=!0,Ve.__version=X.version);let sn=Ve.currentProgram;at===!0&&(sn=es(X,L,k));let ts=!1,rn=!1,Ys=!1;const yt=sn.getUniforms(),dn=Ve.uniforms;if(Q.useProgram(sn.program)&&(ts=!0,rn=!0,Ys=!0),X.id!==E&&(E=X.id,rn=!0),ts||x!==_){Q.buffers.depth.getReversed()?(ve.copy(_.projectionMatrix),w0(ve),T0(ve),yt.setValue(S,"projectionMatrix",ve)):yt.setValue(S,"projectionMatrix",_.projectionMatrix),yt.setValue(S,"viewMatrix",_.matrixWorldInverse);const Qt=yt.map.cameraPosition;Qt!==void 0&&Qt.setValue(S,et.setFromMatrixPosition(_.matrixWorld)),te.logarithmicDepthBuffer&&yt.setValue(S,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&yt.setValue(S,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,rn=!0,Ys=!0)}if(k.isSkinnedMesh){yt.setOptional(S,k,"bindMatrix"),yt.setOptional(S,k,"bindMatrixInverse");const $t=k.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),yt.setValue(S,"boneTexture",$t.boneTexture,Y))}k.isBatchedMesh&&(yt.setOptional(S,k,"batchingTexture"),yt.setValue(S,"batchingTexture",k._matricesTexture,Y),yt.setOptional(S,k,"batchingIdTexture"),yt.setValue(S,"batchingIdTexture",k._indirectTexture,Y),yt.setOptional(S,k,"batchingColorTexture"),k._colorsTexture!==null&&yt.setValue(S,"batchingColorTexture",k._colorsTexture,Y));const fn=H.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Ae.update(k,H,sn),(rn||Ve.receiveShadow!==k.receiveShadow)&&(Ve.receiveShadow=k.receiveShadow,yt.setValue(S,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(dn.envMap.value=Se,dn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&L.environment!==null&&(dn.envMapIntensity.value=L.environmentIntensity),rn&&(yt.setValue(S,"toneMappingExposure",M.toneMappingExposure),Ve.needsLights&&$s(dn,Ys),ue&&X.fog===!0&&G.refreshFogUniforms(dn,ue),G.refreshMaterialUniforms(dn,X,V,K,p.state.transmissionRenderTarget[_.id]),So.upload(S,Fr(Ve),dn,Y)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(So.upload(S,Fr(Ve),dn,Y),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&yt.setValue(S,"center",k.center),yt.setValue(S,"modelViewMatrix",k.modelViewMatrix),yt.setValue(S,"normalMatrix",k.normalMatrix),yt.setValue(S,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const $t=X.uniformsGroups;for(let Qt=0,sa=$t.length;Qt<sa;Qt++){const Ci=$t[Qt];O.update(Ci,sn),O.bind(Ci,sn)}}return sn}function $s(_,L){_.ambientLightColor.needsUpdate=L,_.lightProbe.needsUpdate=L,_.directionalLights.needsUpdate=L,_.directionalLightShadows.needsUpdate=L,_.pointLights.needsUpdate=L,_.pointLightShadows.needsUpdate=L,_.spotLights.needsUpdate=L,_.spotLightShadows.needsUpdate=L,_.rectAreaLights.needsUpdate=L,_.hemisphereLights.needsUpdate=L}function ta(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(_,L,H){const X=j.get(_);X.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),j.get(_.texture).__webglTexture=L,j.get(_.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:H,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,L){const H=j.get(_);H.__webglFramebuffer=L,H.__useDefaultFramebuffer=L===void 0};const na=S.createFramebuffer();this.setRenderTarget=function(_,L=0,H=0){N=_,P=L,A=H;let X=!0,k=null,ue=!1,ye=!1;if(_){const Se=j.get(_);if(Se.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(S.FRAMEBUFFER,null),X=!1;else if(Se.__webglFramebuffer===void 0)Y.setupRenderTarget(_);else if(Se.__hasExternalTextures)Y.rebindTextures(_,j.get(_.texture).__webglTexture,j.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const Be=_.depthTexture;if(Se.__boundDepthTexture!==Be){if(Be!==null&&j.has(Be)&&(_.width!==Be.image.width||_.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(_)}}const He=_.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ye=!0);const $e=j.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray($e[L])?k=$e[L][H]:k=$e[L],ue=!0):_.samples>0&&Y.useMultisampledRTT(_)===!1?k=j.get(_).__webglMultisampledFramebuffer:Array.isArray($e)?k=$e[H]:k=$e,D.copy(_.viewport),$.copy(_.scissor),B=_.scissorTest}else D.copy(De).multiplyScalar(V).floor(),$.copy(ze).multiplyScalar(V).floor(),B=it;if(H!==0&&(k=na),Q.bindFramebuffer(S.FRAMEBUFFER,k)&&X&&Q.drawBuffers(_,k),Q.viewport(D),Q.scissor($),Q.setScissorTest(B),ue){const Se=j.get(_.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+L,Se.__webglTexture,H)}else if(ye){const Se=j.get(_.texture),He=L;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Se.__webglTexture,H,He)}else if(_!==null&&H!==0){const Se=j.get(_.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Se.__webglTexture,H)}E=-1},this.readRenderTargetPixels=function(_,L,H,X,k,ue,ye,Pe=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=j.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se){Q.bindFramebuffer(S.FRAMEBUFFER,Se);try{const He=_.textures[Pe],$e=He.format,Be=He.type;if(!te.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=_.width-X&&H>=0&&H<=_.height-k&&(_.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Pe),S.readPixels(L,H,X,k,ge.convert($e),ge.convert(Be),ue))}finally{const He=N!==null?j.get(N).__webglFramebuffer:null;Q.bindFramebuffer(S.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(_,L,H,X,k,ue,ye,Pe=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=j.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se)if(L>=0&&L<=_.width-X&&H>=0&&H<=_.height-k){Q.bindFramebuffer(S.FRAMEBUFFER,Se);const He=_.textures[Pe],$e=He.format,Be=He.type;if(!te.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Qe),S.bufferData(S.PIXEL_PACK_BUFFER,ue.byteLength,S.STREAM_READ),_.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Pe),S.readPixels(L,H,X,k,ge.convert($e),ge.convert(Be),0);const ot=N!==null?j.get(N).__webglFramebuffer:null;Q.bindFramebuffer(S.FRAMEBUFFER,ot);const wt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await E0(S,wt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Qe),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,ue),S.deleteBuffer(Qe),S.deleteSync(wt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,L=null,H=0){const X=Math.pow(2,-H),k=Math.floor(_.image.width*X),ue=Math.floor(_.image.height*X),ye=L!==null?L.x:0,Pe=L!==null?L.y:0;Y.setTexture2D(_,0),S.copyTexSubImage2D(S.TEXTURE_2D,H,0,0,ye,Pe,k,ue),Q.unbindTexture()};const qs=S.createFramebuffer(),ia=S.createFramebuffer();this.copyTextureToTexture=function(_,L,H=null,X=null,k=0,ue=null){ue===null&&(k!==0?(As("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=k,k=0):ue=0);let ye,Pe,Se,He,$e,Be,Qe,ot,wt;const bt=_.isCompressedTexture?_.mipmaps[ue]:_.image;if(H!==null)ye=H.max.x-H.min.x,Pe=H.max.y-H.min.y,Se=H.isBox3?H.max.z-H.min.z:1,He=H.min.x,$e=H.min.y,Be=H.isBox3?H.min.z:0;else{const fn=Math.pow(2,-k);ye=Math.floor(bt.width*fn),Pe=Math.floor(bt.height*fn),_.isDataArrayTexture?Se=bt.depth:_.isData3DTexture?Se=Math.floor(bt.depth*fn):Se=1,He=0,$e=0,Be=0}X!==null?(Qe=X.x,ot=X.y,wt=X.z):(Qe=0,ot=0,wt=0);const gt=ge.convert(L.format),Ve=ge.convert(L.type);let St;L.isData3DTexture?(Y.setTexture3D(L,0),St=S.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Y.setTexture2DArray(L,0),St=S.TEXTURE_2D_ARRAY):(Y.setTexture2D(L,0),St=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,L.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,L.unpackAlignment);const at=S.getParameter(S.UNPACK_ROW_LENGTH),sn=S.getParameter(S.UNPACK_IMAGE_HEIGHT),ts=S.getParameter(S.UNPACK_SKIP_PIXELS),rn=S.getParameter(S.UNPACK_SKIP_ROWS),Ys=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,bt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,bt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,He),S.pixelStorei(S.UNPACK_SKIP_ROWS,$e),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Be);const yt=_.isDataArrayTexture||_.isData3DTexture,dn=L.isDataArrayTexture||L.isData3DTexture;if(_.isDepthTexture){const fn=j.get(_),$t=j.get(L),Qt=j.get(fn.__renderTarget),sa=j.get($t.__renderTarget);Q.bindFramebuffer(S.READ_FRAMEBUFFER,Qt.__webglFramebuffer),Q.bindFramebuffer(S.DRAW_FRAMEBUFFER,sa.__webglFramebuffer);for(let Ci=0;Ci<Se;Ci++)yt&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,j.get(_).__webglTexture,k,Be+Ci),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,j.get(L).__webglTexture,ue,wt+Ci)),S.blitFramebuffer(He,$e,ye,Pe,Qe,ot,ye,Pe,S.DEPTH_BUFFER_BIT,S.NEAREST);Q.bindFramebuffer(S.READ_FRAMEBUFFER,null),Q.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(k!==0||_.isRenderTargetTexture||j.has(_)){const fn=j.get(_),$t=j.get(L);Q.bindFramebuffer(S.READ_FRAMEBUFFER,qs),Q.bindFramebuffer(S.DRAW_FRAMEBUFFER,ia);for(let Qt=0;Qt<Se;Qt++)yt?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,fn.__webglTexture,k,Be+Qt):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,fn.__webglTexture,k),dn?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,$t.__webglTexture,ue,wt+Qt):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,$t.__webglTexture,ue),k!==0?S.blitFramebuffer(He,$e,ye,Pe,Qe,ot,ye,Pe,S.COLOR_BUFFER_BIT,S.NEAREST):dn?S.copyTexSubImage3D(St,ue,Qe,ot,wt+Qt,He,$e,ye,Pe):S.copyTexSubImage2D(St,ue,Qe,ot,He,$e,ye,Pe);Q.bindFramebuffer(S.READ_FRAMEBUFFER,null),Q.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else dn?_.isDataTexture||_.isData3DTexture?S.texSubImage3D(St,ue,Qe,ot,wt,ye,Pe,Se,gt,Ve,bt.data):L.isCompressedArrayTexture?S.compressedTexSubImage3D(St,ue,Qe,ot,wt,ye,Pe,Se,gt,bt.data):S.texSubImage3D(St,ue,Qe,ot,wt,ye,Pe,Se,gt,Ve,bt):_.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,ue,Qe,ot,ye,Pe,gt,Ve,bt.data):_.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,ue,Qe,ot,bt.width,bt.height,gt,bt.data):S.texSubImage2D(S.TEXTURE_2D,ue,Qe,ot,ye,Pe,gt,Ve,bt);S.pixelStorei(S.UNPACK_ROW_LENGTH,at),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,sn),S.pixelStorei(S.UNPACK_SKIP_PIXELS,ts),S.pixelStorei(S.UNPACK_SKIP_ROWS,rn),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ys),ue===0&&L.generateMipmaps&&S.generateMipmap(St),Q.unbindTexture()},this.copyTextureToTexture3D=function(_,L,H=null,X=null,k=0){return As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,L,H,X,k)},this.initRenderTarget=function(_){j.get(_).__webglFramebuffer===void 0&&Y.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Y.setTextureCube(_,0):_.isData3DTexture?Y.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Y.setTexture2DArray(_,0):Y.setTexture2D(_,0),Q.unbindTexture()},this.resetState=function(){P=0,A=0,N=null,Q.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const In={score:!1,challenge:!0},Yy={class:"pointer-events-none absolute inset-0 z-10 p-4 text-white"},Ky={class:"absolute left-4 top-4 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur"},jy={class:"mt-1 text-sm font-medium"},Zy={key:0,class:"absolute right-4 top-44 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/45 px-3 py-2.5 backdrop-blur"},Jy={class:"grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5"},Qy={class:"min-w-0"},eM={class:"mt-0.5 text-sm font-semibold"},tM={class:"text-[11px] text-white/50"},nM={class:"absolute bottom-4 left-4 grid grid-cols-2 gap-2 sm:grid-cols-4"},iM={class:"rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur"},sM={class:"mt-1 text-sm font-semibold"},rM={class:"rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur"},oM={class:"mt-1 text-sm font-semibold"},aM={class:"rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur"},lM={class:"mt-1 text-sm font-semibold"},cM={key:0,class:"rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur"},uM={class:"mt-1 text-sm font-semibold"},dM={__name:"FlightHUD",props:{telemetry:{type:Object,required:!0},statusText:{type:String,default:""},windMode:{type:String,default:"none"},cameraBearing:{type:[Number,String],default:0}},setup(n){const e=n,t=Ye(()=>e.windMode!=="none"),i=Ye(()=>Number(e.cameraBearing)||0),s=Ye(()=>{const l=Number(e.telemetry.windDirection)||0;return o(l+i.value)}),r=Ye(()=>{const l=o(Number(e.telemetry.windDirection)||0);return l>=337.5||l<22.5?"吹向北方":l<67.5?"吹向東北":l<112.5?"吹向東方":l<157.5?"吹向東南":l<202.5?"吹向南方":l<247.5?"吹向西南":l<292.5?"吹向西方":"吹向西北"});function o(l){return(l%360+360)%360}function a(l,c=1){const u=Number(l);return Number.isFinite(u)?u.toFixed(c):"0.0"}return(l,c)=>(pe(),_e("div",Yy,[b("div",Ky,[c[0]||(c[0]=b("p",{class:"text-[10px] uppercase tracking-[0.2em] text-white/45"}," Flight status ",-1)),b("p",jy,le(n.statusText),1)]),t.value?(pe(),_e("div",Zy,[b("div",Jy,[(pe(),_e("svg",{class:"h-6 w-6 transition-transform duration-300",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:Ht({transform:`rotate(${s.value}deg)`})},[...c[1]||(c[1]=[b("path",{d:"M12 20V5M12 5L7.5 9.5M12 5L16.5 9.5",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],4))]),b("div",Qy,[c[2]||(c[2]=b("p",{class:"text-[10px] uppercase tracking-[0.18em] text-white/45"}," Wind drift ",-1)),b("p",eM,le(a(n.telemetry.windSpeed,2))+" m/s ",1),b("p",tM,le(r.value),1)])])):ht("",!0),b("div",nM,[b("div",iM,[c[3]||(c[3]=b("p",{class:"text-[9px] uppercase tracking-[0.16em] text-white/40"}," Altitude ",-1)),b("p",sM,le(a(n.telemetry.altitude))+" m ",1)]),b("div",rM,[c[4]||(c[4]=b("p",{class:"text-[9px] uppercase tracking-[0.16em] text-white/40"}," Speed ",-1)),b("p",oM,le(a(n.telemetry.speed))+" m/s ",1)]),b("div",aM,[c[5]||(c[5]=b("p",{class:"text-[9px] uppercase tracking-[0.16em] text-white/40"}," Distance ",-1)),b("p",lM,le(a(n.telemetry.distance))+" m ",1)]),Oe(In).score?(pe(),_e("div",cM,[c[6]||(c[6]=b("p",{class:"text-[9px] uppercase tracking-[0.16em] text-white/40"}," Score ",-1)),b("p",uM,le(Math.round(Number(n.telemetry.score)||0)),1)])):ht("",!0)])]))}},fM={class:"pointer-events-none flex flex-col items-center"},hM={class:"relative size-32 rounded-full border border-white/15 bg-black/60 shadow-2xl backdrop-blur-md"},pM={class:"absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/10 bg-black/80"},mM={class:"text-sm font-bold text-white"},gM={class:"text-[9px] text-white/50"},_M={__name:"CompassHUD",props:{heading:{type:Number,default:0}},setup(n){const e=n;function t(o){const a=Number(o);return Number.isFinite(a)?(a%360+360)%360:0}const i=Ye(()=>t(e.heading)),s=Ye(()=>{const o=i.value;return o>=337.5||o<22.5?"N":o<67.5?"NE":o<112.5?"E":o<157.5?"SE":o<202.5?"S":o<247.5?"SW":o<292.5?"W":"NW"}),r=We(t(e.heading));return pn(()=>e.heading,o=>{const a=t(o),l=t(r.value);let c=a-l;c>180?c-=360:c<-180&&(c+=360),r.value+=c},{immediate:!0}),(o,a)=>(pe(),_e("div",fM,[b("div",hM,[a[1]||(a[1]=_r('<div class="absolute inset-3 rounded-full border border-white/10"></div><div class="absolute left-1/2 top-3 h-2 w-px -translate-x-1/2 bg-white/50"></div><div class="absolute bottom-3 left-1/2 h-2 w-px -translate-x-1/2 bg-white/30"></div><div class="absolute left-3 top-1/2 h-px w-2 -translate-y-1/2 bg-white/30"></div><div class="absolute right-3 top-1/2 h-px w-2 -translate-y-1/2 bg-white/30"></div><span class="absolute left-1/2 top-2 -translate-x-1/2 text-xs font-bold text-lime-300"> N </span><span class="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-white/70"> E </span><span class="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-semibold text-white/50"> S </span><span class="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-white/70"> W </span>',9)),b("div",{class:"absolute inset-0 origin-center transition-transform duration-100 ease-linear",style:Ht({transform:`rotate(${r.value}deg)`})},[...a[0]||(a[0]=[b("svg",{viewBox:"0 0 128 128",class:"size-full"},[b("path",{d:`M64 29
               L57 44
               L64 40
               L71 44
               Z`,fill:"#bef264"})],-1)])],4),b("div",pM,[b("span",mM,le(i.value.toFixed(0))+"° ",1),b("span",gM,le(s.value),1)])]),a[2]||(a[2]=b("div",{class:"mt-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/50 backdrop-blur"}," Drone Heading ",-1))]))}},xM={key:0,class:"pointer-events-none absolute left-4 top-28 w-72 rounded-2xl border border-white/10 bg-black/60 p-4 text-white backdrop-blur"},vM={class:"flex items-center justify-between gap-3"},bM={class:"rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/55"},yM={class:"mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3"},MM={class:"rounded-xl bg-white/5 p-3 text-center"},SM={class:"mt-1 text-2xl font-semibold"},EM={class:"text-xs text-white/45"},wM={class:"rounded-xl bg-lime-300/10 p-3 text-center"},TM={class:"mt-1 text-3xl font-semibold text-lime-200"},AM={class:"text-xs text-lime-100/70"},RM={key:0,class:"mt-4 rounded-xl border border-lime-300/25 bg-lime-300/10 p-3 text-center"},CM={key:1,class:"mt-4"},PM={class:"flex items-center justify-between text-xs text-white/50"},DM={class:"mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"},LM={__name:"ChallengeHUD",props:{challenge:{type:Object,default:null}},setup(n){return(e,t)=>n.challenge?(pe(),_e("div",xM,[b("div",vM,[t[0]||(t[0]=b("p",{class:"text-[10px] font-semibold uppercase tracking-[0.24em] text-lime-300/70"}," Random Heading ",-1)),b("span",bM," ROUND "+le(n.challenge.round),1)]),b("div",yM,[b("div",MM,[t[1]||(t[1]=b("p",{class:"text-[10px] uppercase tracking-[0.16em] text-white/40"},"機頭",-1)),b("p",SM,le(n.challenge.headingLabel),1),b("p",EM,le(n.challenge.headingDegrees)+"°",1)]),t[3]||(t[3]=b("div",{class:"text-white/30"},"＋",-1)),b("div",wM,[t[2]||(t[2]=b("p",{class:"text-[10px] uppercase tracking-[0.16em] text-lime-200/60"},"前往",-1)),b("p",TM,le(n.challenge.targetArrow),1),b("p",AM,le(n.challenge.targetLabel),1)])]),n.challenge.completed?(pe(),_e("div",RM,[...t[4]||(t[4]=[b("p",{class:"text-sm font-semibold text-lime-200"},"完成，準備下一題",-1),b("p",{class:"mt-1 text-xs text-white/50"},"機頭將重新隨機轉向",-1)])])):(pe(),_e("div",CM,[b("div",PM,[t[5]||(t[5]=b("span",null,"保持機頭，僅用 Pitch／Roll",-1)),b("span",null,le(n.challenge.progress.toFixed(1))+" / "+le(n.challenge.targetDistance.toFixed(1))+" m",1)]),b("div",DM,[b("div",{class:"h-full rounded-full bg-lime-300 transition-[width] duration-100",style:Ht({width:`${Math.min(n.challenge.progress/n.challenge.targetDistance*100,100)}%`})},null,4)])])),t[6]||(t[6]=b("p",{class:"mt-3 text-xs leading-5 text-white/45"}," Yaw 已鎖定。請勿先轉正機頭，直接讓機體側移或倒退前往世界方向。 ",-1))])):ht("",!0)}},IM={key:0,class:"pointer-events-none absolute bottom-6 left-1/2 z-30 w-[min(90vw,600px)] -translate-x-1/2"},UM={class:"rounded-2xl border border-white/10 bg-black/75 px-6 py-4 shadow-2xl backdrop-blur-md"},NM={key:0,class:"flex h-20 items-center justify-center"},FM={key:1,class:"flex h-20 items-center justify-center"},OM={class:"flex items-center justify-center gap-3"},BM={class:"text-xl font-black tracking-[0.08em] text-white"},kM={key:0,class:"text-xl font-medium leading-none text-white/55"},zM={key:1,class:"font-mono text-lg font-semibold tabular-nums text-lime-200"},HM={class:"mt-5"},VM={class:"relative h-7"},GM={class:"relative mt-1 h-4 font-mono text-[9px] tabular-nums text-white/25"},WM={__name:"StickTrainingHUD",props:{exercise:{type:Object,default:null},completed:{type:Boolean,default:!1},round:{type:Number,default:0},errorType:{type:String,default:null},errorMessage:{type:String,default:""},waitingForCenter:{type:Boolean,default:!1},waitingForStartCenter:{type:Boolean,default:!1},waitingForNextRound:{type:Boolean,default:!1},successMin:{type:Number,default:.4},successMax:{type:Number,default:.6},successHoldProgress:{type:Number,default:0}},setup(n){const e=n,t=Ye(()=>{if(!e.exercise)return 0;const f=Number(e.exercise.currentValue??0),h=Number(e.exercise.direction??1);return Math.max(0,Math.min(1,f*h))}),i=Ye(()=>Math.round(t.value*100)),s=Ye(()=>{const f=e.exercise?.targetValue;return f==null?null:Math.round(Number(f)*100)}),r=Ye(()=>s.value===null),o=Ye(()=>Math.round(e.successMin*100)),a=Ye(()=>Math.round(e.successMax*100)),l=Ye(()=>Math.max(0,(e.successMax-e.successMin)*100)),c=Ye(()=>t.value>=e.successMin&&t.value<=e.successMax),u=Ye(()=>l.value*Math.max(0,Math.min(1,e.successHoldProgress))),d=Ye(()=>e.errorType?"error":e.completed||e.waitingForCenter||c.value?"success":"normal");return(f,h)=>n.exercise||n.waitingForStartCenter||n.waitingForNextRound?(pe(),_e("div",IM,[b("section",UM,[n.waitingForStartCenter?(pe(),_e("div",NM,[...h[0]||(h[0]=[b("div",{class:"flex items-center gap-3 text-sky-200"},[b("span",{class:"text-xl"}," ◎ "),b("span",{class:"text-sm font-semibold"}," 請將搖桿回到中心 ")],-1)])])):n.waitingForNextRound&&!n.exercise?(pe(),_e("div",FM,[...h[1]||(h[1]=[b("div",{class:"flex items-center gap-3 text-lime-200"},[b("span",{class:"text-lg"}," ✓ "),b("span",{class:"text-sm font-semibold"}," 準備下一題 ")],-1)])])):n.exercise?(pe(),_e(ct,{key:2},[b("div",OM,[b("h2",BM,le(n.exercise.title),1),r.value?(pe(),_e("span",kM,le(n.exercise.arrow),1)):(pe(),_e("span",zM,le(s.value)+"% ",1))]),b("div",HM,[b("div",VM,[h[2]||(h[2]=b("div",{class:"absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-white/10"},null,-1)),b("div",{class:Ct(["absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-lime-300/20",c.value?"shadow-[0_0_14px_rgba(190,242,100,0.22)]":""]),style:Ht({left:`${o.value}%`,width:`${l.value}%`})},null,6),b("div",{class:"absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-lime-300 transition-[width] duration-75",style:Ht({left:`${o.value}%`,width:`${u.value}%`})},null,4),b("div",{class:"absolute top-1/2 h-5 w-px -translate-y-1/2 bg-lime-300/70",style:Ht({left:`${o.value}%`})},null,4),b("div",{class:"absolute top-1/2 h-5 w-px -translate-y-1/2 bg-lime-300/70",style:Ht({left:`${a.value}%`})},null,4),b("div",{class:Ct(["absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black transition-[left,background-color,box-shadow] duration-75",{"bg-white":d.value==="normal","bg-lime-300 shadow-[0_0_14px_rgba(190,242,100,0.75)]":d.value==="success","bg-red-300 shadow-[0_0_12px_rgba(252,165,165,0.65)]":d.value==="error"}]),style:Ht({left:`${i.value}%`})},null,6)]),b("div",GM,[h[3]||(h[3]=b("span",{class:"absolute left-0"}," 0% ",-1)),b("span",{class:"absolute -translate-x-1/2 text-lime-200/65",style:Ht({left:`${o.value}%`})},le(o.value)+"% ",5),b("span",{class:"absolute -translate-x-1/2 text-lime-200/65",style:Ht({left:`${a.value}%`})},le(a.value)+"% ",5),h[4]||(h[4]=b("span",{class:"absolute right-0"}," 100% ",-1))])])],64)):ht("",!0)])])):ht("",!0)}},dh=[{value:"angled",label:"斜俯視",distance:15,height:7.5,lookHeight:1.4},{value:"eye",label:"平視",distance:18,height:1.8,lookHeight:1.45},{value:"low",label:"低角度",distance:17,height:.75,lookHeight:1.65},{value:"high",label:"高角度俯視",distance:14,height:12.5,lookHeight:1.1}],jl=[{value:"front",label:"正面 0°",degrees:0},{value:"diagonal",label:"斜角 45°",degrees:45},{value:"right",label:"右側 90°",degrees:90},{value:"back",label:"背面 180°",degrees:180},{value:"left",label:"左側 −90°",degrees:-90}],XM=[{value:"none",label:"無風"},{value:"breeze",label:"穩定微風"},{value:"gusty",label:"變向陣風"}],Bo=[{value:"light",label:"微風",multiplier:.6,description:"較容易預判與修正"},{value:"normal",label:"標準",multiplier:1,description:"標準穩定控制訓練"},{value:"strong",label:"強風",multiplier:1.6,description:"需要更快、更精細地修正"}],ko=[{value:"large",label:"大",radius:4,description:"容錯空間較大"},{value:"normal",label:"標準",radius:2.5,description:"標準穩定範圍"},{value:"small",label:"小",radius:1.5,description:"要求精細位置控制"}],dd=[{value:30,label:"30 秒",description:"快速"},{value:60,label:"60 秒",description:"標準"},{value:120,label:"120 秒",description:"持續"}],$M=[{value:"free",label:"自由練習"},{value:"randomHeading",label:"方向訓練"},{value:"stickTraining1",label:"搖桿訓練 Lv.1"},{value:"stickTraining2",label:"搖桿訓練 Lv.2"},{value:"stabilityTraining1",label:"穩定控制 Lv.1"},{value:"stabilityTraining2",label:"穩定控制 Lv.2"}],qM=Cn({cameraHeight:"angled",cameraBearing:"front",windMode:"none",trainingMode:"free",stabilityWindLevel:"normal",stabilityZoneSize:"normal",stabilityDuration:60,showHeadingArrow:!0,showHelp:!0});function YM(){return qM}const KM={key:0,class:"mb-5"},jM={class:"grid grid-cols-3 gap-2"},ZM=["onClick"],JM={class:"block text-sm font-semibold"},QM={class:"mt-2 text-xs text-white/40"},eS={class:"mt-5 border-t border-white/8 pt-5"},tS={class:"grid grid-cols-3 gap-2"},nS=["onClick"],iS={class:"block text-sm font-semibold"},sS={class:"mt-1 block font-mono text-[10px] text-white/35"},rS={class:"mt-2 text-xs text-white/40"},oS={class:"grid grid-cols-4 gap-2"},aS=["onClick"],lS={class:"block text-sm font-semibold"},cS={class:"mt-1 block text-[10px] text-white/30"},uS={key:0,class:"mt-3 flex items-center gap-3 rounded-xl border border-white/10 bg-white/2.5 p-3"},dS=["value"],fS={__name:"StabilityTrainingSettings",props:{settings:{type:Object,required:!0},embedded:{type:Boolean,default:!1},showDifficulty:{type:Boolean,default:!0}},emits:["update-wind-level","update-zone-size","update-duration"],setup(n,{emit:e}){const t=n,i=e,s=dd.map(d=>d.value),r=Ye(()=>!s.includes(Number(t.settings.stabilityDuration)));function o(d){i("update-wind-level",d)}function a(d){i("update-zone-size",d)}function l(d){i("update-duration",d)}function c(){r.value||i("update-duration",90)}function u(d){i("update-duration",d.target.value)}return(d,f)=>(pe(),_e("section",{class:Ct(n.embedded?"":"rounded-2xl border border-white/10 bg-white/[0.035] p-4")},[n.embedded?ht("",!0):(pe(),_e("div",KM,[...f[0]||(f[0]=[b("p",{class:"text-[11px] font-semibold uppercase tracking-[0.22em] text-lime-300/70"}," Stability Training ",-1),b("h2",{class:"mt-1 text-base font-semibold text-white"}," 訓練設定 ",-1)])])),n.showDifficulty?(pe(),_e(ct,{key:1},[b("div",null,[f[1]||(f[1]=b("p",{class:"mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/45"}," Wind ",-1)),b("div",jM,[(pe(!0),_e(ct,null,Vn(Oe(Bo),h=>(pe(),_e("button",{key:h.value,type:"button",class:Ct(["rounded-xl border px-3 py-3 text-center transition",n.settings.stabilityWindLevel===h.value?"border-lime-300/50 bg-lime-300/10 text-lime-200":"border-white/10 bg-white/2.5 text-white/55 hover:border-white/20 hover:bg-white/5"]),onClick:v=>o(h.value)},[b("span",JM,le(h.label),1)],10,ZM))),128))]),b("p",QM,le(Oe(Bo).find(h=>h.value===n.settings.stabilityWindLevel)?.description),1)]),b("div",eS,[f[2]||(f[2]=b("p",{class:"mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/45"}," Target Size ",-1)),b("div",tS,[(pe(!0),_e(ct,null,Vn(Oe(ko),h=>(pe(),_e("button",{key:h.value,type:"button",class:Ct(["rounded-xl border px-3 py-3 text-center transition",n.settings.stabilityZoneSize===h.value?"border-lime-300/50 bg-lime-300/10 text-lime-200":"border-white/10 bg-white/2.5 text-white/55 hover:border-white/20 hover:bg-white/5"]),onClick:v=>a(h.value)},[b("span",iS,le(h.label),1),b("span",sS," R "+le(h.radius.toFixed(1))+" m ",1)],10,nS))),128))]),b("p",rS,le(Oe(ko).find(h=>h.value===n.settings.stabilityZoneSize)?.description),1)])],64)):ht("",!0),b("div",{class:Ct(n.showDifficulty?"mt-5 border-t border-white/8 pt-5":"")},[f[6]||(f[6]=b("div",{class:"mb-2 flex items-center justify-between gap-3"},[b("p",{class:"text-xs font-semibold uppercase tracking-[0.16em] text-white/45"}," Duration "),b("span",{class:"text-[11px] text-white/30"}," 訓練時間 ")],-1)),b("div",oS,[(pe(!0),_e(ct,null,Vn(Oe(dd),h=>(pe(),_e("button",{key:h.value,type:"button",class:Ct(["rounded-xl border px-2 py-3 text-center transition",Number(n.settings.stabilityDuration)===h.value?"border-lime-300/50 bg-lime-300/10 text-lime-200":"border-white/10 bg-white/2.5 text-white/55 hover:border-white/20 hover:bg-white/5"]),onClick:v=>l(h.value)},[b("span",lS,le(h.label),1),b("span",cS,le(h.description),1)],10,aS))),128)),b("button",{type:"button",class:Ct(["rounded-xl border px-2 py-3 text-center transition",r.value?"border-lime-300/50 bg-lime-300/10 text-lime-200":"border-white/10 bg-white/2.5 text-white/55 hover:border-white/20 hover:bg-white/5"]),onClick:c},[...f[3]||(f[3]=[b("span",{class:"block text-sm font-semibold"}," 自訂 ",-1),b("span",{class:"mt-1 block text-[10px] text-white/30"}," 10–600 秒 ",-1)])],2)]),r.value?(pe(),_e("div",uS,[f[4]||(f[4]=b("label",{for:"stability-custom-duration",class:"text-xs text-white/45"}," 自訂秒數 ",-1)),b("input",{id:"stability-custom-duration",value:n.settings.stabilityDuration,type:"number",min:"10",max:"600",step:"10",class:"min-w-0 flex-1 rounded-lg border border-white/10 bg-black/30 px-3 py-2 font-mono text-sm text-white outline-none transition focus:border-lime-300/40",onChange:u},null,40,dS),f[5]||(f[5]=b("span",{class:"text-xs text-white/40"}," 秒 ",-1))])):ht("",!0),f[7]||(f[7]=b("p",{class:"mt-2 text-xs text-white/40"}," 30 秒適合快速練習，60 秒為標準訓練， 120 秒以上開始考驗持續穩定控制。 ",-1))],2)],2))}},hS={key:0,class:"absolute inset-0 z-40 flex items-center justify-center bg-black/40 px-4 py-4 backdrop-blur-[2px]"},pS={class:"pointer-events-auto max-h-[calc(100%-16px)] w-[min(580px,calc(100%-16px))] overflow-y-auto rounded-3xl border border-white/10 bg-black/80 p-6 shadow-2xl backdrop-blur"},mS={class:"mb-5"},gS={class:"text-xs font-semibold uppercase tracking-[0.22em] text-lime-300"},_S={key:0,class:"mt-2 text-sm leading-6 text-white/50"},xS={key:1,class:"mt-2 text-sm leading-6 text-white/50"},vS={key:1,class:"pointer-events-none absolute inset-0 z-30 flex items-center justify-center"},bS={class:"flex flex-col items-center rounded-3xl border border-white/10 bg-black/55 px-10 py-8 text-center backdrop-blur"},yS={class:"text-xs font-semibold uppercase tracking-[0.22em] text-lime-300"},MS={class:"mt-4 flex flex-wrap justify-center gap-2"},SS={class:"rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"},ES={class:"rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"},wS={class:"rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"},TS={class:"mt-1 text-xl font-semibold text-white"},AS={class:"mt-6 font-mono text-6xl font-semibold text-white"},RS={key:2,class:"pointer-events-none absolute left-1/2 top-5 z-30 -translate-x-1/2"},CS={class:"flex items-center gap-3 rounded-full border border-white/10 bg-black/55 px-5 py-2 backdrop-blur"},PS={class:"font-mono text-lg font-semibold tracking-[0.18em] text-white"},DS={class:"text-xs text-white/50"},LS={class:"text-xs text-white/50"},IS={key:3,class:"absolute inset-0 z-40 flex items-center justify-center bg-black/55 backdrop-blur-sm"},US={class:"pointer-events-auto w-[min(420px,calc(100%-32px))] rounded-3xl border border-white/10 bg-black/80 p-6 shadow-2xl"},NS={class:"mb-6"},FS={class:"text-xs font-semibold uppercase tracking-[0.22em] text-lime-300"},OS={key:0,class:"mb-5 grid grid-cols-2 gap-3"},BS={class:"rounded-2xl border border-white/10 bg-white/4 p-4"},kS={class:"mt-1 text-base font-semibold text-white"},zS={class:"rounded-2xl border border-white/10 bg-white/4 p-4"},HS={class:"mt-1 text-base font-semibold text-white"},VS={class:"mb-5 grid grid-cols-2 gap-3"},GS={class:"rounded-2xl border border-white/10 bg-white/4 p-4"},WS={class:"mt-1 text-base font-semibold text-white"},XS={class:"rounded-2xl border border-white/10 bg-white/4 p-4"},$S={class:"mt-1 text-base font-semibold text-white"},qS={class:"grid grid-cols-2 gap-3"},YS={class:"rounded-2xl border border-white/10 bg-white/4 p-4"},KS={class:"mt-1 font-mono text-lg font-semibold text-white"},jS={class:"rounded-2xl border border-white/10 bg-white/4 p-4"},ZS={class:"mt-1 font-mono text-lg font-semibold text-lime-300"},JS={class:"rounded-2xl border border-white/10 bg-white/4 p-4"},QS={class:"mt-1 font-mono text-lg font-semibold text-white"},e1={class:"rounded-2xl border border-white/10 bg-white/4 p-4"},t1={class:"mt-1 font-mono text-lg font-semibold text-white"},n1={__name:"StabilityTrainingHUD",props:{timeLabel:{type:String,required:!0},phase:{type:String,required:!0},headingLabel:{type:String,default:"-"},totalLabel:{type:String,default:"00:00.0"},insideLabel:{type:String,default:"00:00.0"},outsideLabel:{type:String,default:"00:00.0"},stabilityLabel:{type:String,default:"0.0%"},readyCount:{type:Number,default:3},level:{type:Number,default:1},settings:{type:Object,default:null},showDifficulty:{type:Boolean,default:!1},windLabel:{type:String,default:""},zoneLabel:{type:String,default:""},durationLabel:{type:String,default:""}},emits:["start","retry","change-settings","update-wind-level","update-zone-size","update-duration"],setup(n,{emit:e}){const t=e;return(i,s)=>n.phase==="setup"?(pe(),_e("div",hS,[b("section",pS,[b("header",mS,[b("p",gS," Stability Training Lv."+le(n.level),1),s[7]||(s[7]=b("h2",{class:"mt-2 text-2xl font-semibold text-white"}," 準備好了嗎？ ",-1)),n.level===1?(pe(),_e("p",_S,[...s[6]||(s[6]=[Rt(" 保持機頭方向不變，只使用 Pitch／Roll， ",-1),b("br",null,null,-1),Rt(" 將無人機維持在穩定範圍內。 ",-1)])])):(pe(),_e("p",xS," 設定本回合的風力與穩定範圍，確認後開始訓練。 "))]),n.settings?(pe(),kn(fS,{key:0,settings:n.settings,embedded:!0,"show-difficulty":n.level===2,onUpdateWindLevel:s[0]||(s[0]=r=>t("update-wind-level",r)),onUpdateZoneSize:s[1]||(s[1]=r=>t("update-zone-size",r)),onUpdateDuration:s[2]||(s[2]=r=>t("update-duration",r))},null,8,["settings","show-difficulty"])):ht("",!0),b("button",{type:"button",class:"mt-5 w-full rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold tracking-[0.12em] text-black transition hover:bg-lime-200 active:scale-[0.99]",onClick:s[3]||(s[3]=r=>t("start"))}," START ")])])):n.phase==="ready"?(pe(),_e("div",vS,[b("div",bS,[b("p",yS," Stability Training Lv."+le(n.level),1),b("div",MS,[n.showDifficulty?(pe(),_e(ct,{key:0},[b("span",SS," WIND · "+le(n.windLabel),1),b("span",ES," TARGET · "+le(n.zoneLabel),1)],64)):ht("",!0),b("span",wS," TIME · "+le(n.durationLabel),1)]),s[8]||(s[8]=b("p",{class:"mt-3 text-sm uppercase tracking-[0.16em] text-white/50"}," Heading ",-1)),b("p",TS,le(n.headingLabel),1),b("p",AS,le(n.readyCount),1)])])):n.phase==="running"?(pe(),_e("div",RS,[b("div",CS,[b("span",PS,le(n.timeLabel),1),n.showDifficulty?(pe(),_e(ct,{key:0},[s[9]||(s[9]=b("span",{class:"h-4 w-px bg-white/10"},null,-1)),b("span",DS,le(n.windLabel),1),s[10]||(s[10]=b("span",{class:"text-xs text-white/30"}," · ",-1)),b("span",LS,le(n.zoneLabel),1)],64)):ht("",!0)])])):n.phase==="finished"?(pe(),_e("div",IS,[b("section",US,[b("header",NS,[b("p",FS," Stability Training Lv."+le(n.level),1),s[11]||(s[11]=b("h2",{class:"mt-2 text-2xl font-semibold text-white"}," 穩定控制完成 ",-1))]),n.showDifficulty?(pe(),_e("div",OS,[b("div",BS,[s[12]||(s[12]=b("p",{class:"text-[11px] uppercase tracking-[0.18em] text-white/40"}," Wind ",-1)),b("p",kS,le(n.windLabel),1)]),b("div",zS,[s[13]||(s[13]=b("p",{class:"text-[11px] uppercase tracking-[0.18em] text-white/40"}," Target ",-1)),b("p",HS,le(n.zoneLabel),1)])])):ht("",!0),b("div",VS,[b("div",GS,[s[14]||(s[14]=b("p",{class:"text-[11px] uppercase tracking-[0.18em] text-white/40"}," Heading ",-1)),b("p",WS,le(n.headingLabel),1)]),b("div",XS,[s[15]||(s[15]=b("p",{class:"text-[11px] uppercase tracking-[0.18em] text-white/40"}," Duration ",-1)),b("p",$S,le(n.durationLabel),1)])]),b("div",qS,[b("div",YS,[s[16]||(s[16]=b("p",{class:"text-[11px] uppercase tracking-[0.16em] text-white/40"}," Total ",-1)),b("p",KS,le(n.totalLabel),1)]),b("div",jS,[s[17]||(s[17]=b("p",{class:"text-[11px] uppercase tracking-[0.16em] text-white/40"}," Stability ",-1)),b("p",ZS,le(n.stabilityLabel),1)]),b("div",JS,[s[18]||(s[18]=b("p",{class:"text-[11px] uppercase tracking-[0.16em] text-white/40"}," In Zone ",-1)),b("p",QS,le(n.insideLabel),1)]),b("div",e1,[s[19]||(s[19]=b("p",{class:"text-[11px] uppercase tracking-[0.16em] text-white/40"}," Out of Zone ",-1)),b("p",t1,le(n.outsideLabel),1)])]),b("button",{type:"button",class:"mt-5 w-full rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-200 active:scale-[0.99]",onClick:s[4]||(s[4]=r=>t("retry"))}," 再次挑戰 "),n.level===2&&n.showDifficulty?(pe(),_e("button",{key:1,type:"button",class:"mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white active:scale-[0.99]",onClick:s[5]||(s[5]=r=>t("change-settings"))}," 變更設定 ")):ht("",!0)])])):ht("",!0)}},Zl=[{degrees:0,radians:0,key:"north",label:"北",shortLabel:"N"},{degrees:90,radians:Math.PI/2,key:"east",label:"東",shortLabel:"E"},{degrees:180,radians:Math.PI,key:"south",label:"南",shortLabel:"S"},{degrees:270,radians:-Math.PI/2,key:"west",label:"西",shortLabel:"W"}],i1=[{key:"north",label:"北方",arrow:"↑",vector:{x:0,z:-1}},{key:"east",label:"東方",arrow:"→",vector:{x:1,z:0}},{key:"south",label:"南方",arrow:"↓",vector:{x:0,z:1}},{key:"west",label:"西方",arrow:"←",vector:{x:-1,z:0}}],s1={id:"random-heading-cardinal",title:"Random Heading",description:"保持機頭方向，使用 Pitch／Roll 前往指定的世界方向。",distance:3,successDelay:.65},r1=[s1];class o1{constructor(){this.challenge=null,this.heading=null,this.direction=null,this.startPosition=new z,this.targetPosition=new z,this.progress=0,this.round=0,this.phase="idle",this.successTimer=0,this.lastPair=""}start(e,t){return this.challenge=e,this.round=0,this.lastPair="",this.nextRound(t)}nextRound(e){if(!this.challenge)return this.getState();let t,i,s;do t=fd(Zl),i=fd(i1),s=`${t.key}:${i.key}`;while(s===this.lastPair);return this.lastPair=s,this.heading=t,this.direction=i,this.round+=1,this.progress=0,this.phase="active",this.successTimer=0,this.startPosition.copy(e),this.targetPosition.set(e.x+i.vector.x*this.challenge.distance,e.y,e.z+i.vector.z*this.challenge.distance),this.getState()}reset(){return this.challenge=null,this.heading=null,this.direction=null,this.startPosition.set(0,0,0),this.targetPosition.set(0,0,0),this.progress=0,this.round=0,this.phase="idle",this.successTimer=0,this.lastPair="",this.getState()}update(e,t){if(!this.challenge||!this.direction)return this.getState();if(this.phase==="success")return this.successTimer+=e,this.getState();const i=t.clone().sub(this.startPosition),{x:s,z:r}=this.direction.vector;return this.progress=Math.max(0,i.x*s+i.z*r),this.progress>=this.challenge.distance&&(this.progress=this.challenge.distance,this.phase="success",this.successTimer=0),this.getState()}shouldAdvance(){return this.phase==="success"&&this.successTimer>=this.challenge.successDelay}getHeadingRadians(){return this.heading?.radians??0}getTargetPosition(){return this.targetPosition}getState(){return{active:!!this.challenge,id:this.challenge?.id??null,title:this.challenge?.title??"",description:this.challenge?.description??"",round:this.round,phase:this.phase,headingDegrees:this.heading?.degrees??0,headingLabel:this.heading?.label??"",headingShortLabel:this.heading?.shortLabel??"",targetDirection:this.direction?.key??"",targetLabel:this.direction?.label??"",targetArrow:this.direction?.arrow??"",targetDistance:this.challenge?.distance??0,progress:this.progress,completed:this.phase==="success"}}}function fd(n){return n[Math.floor(Math.random()*n.length)]}const qa={KeyW:["throttle",1],KeyS:["throttle",-1],KeyA:["yaw",1],KeyD:["yaw",-1],ArrowUp:["pitch",1],ArrowDown:["pitch",-1],ArrowLeft:["roll",-1],ArrowRight:["roll",1]};function a1({onPause:n,onReset:e,onHelp:t}){const i=Cn({throttle:.5,yaw:0,pitch:0,roll:0}),s=new Set;function r(){i.throttle=.5,i.yaw=0,i.pitch=0,i.roll=0;for(const c of s){const u=qa[c];if(!u)continue;const[d,f]=u;if(d==="throttle"){i.throttle=f>0?1:0;continue}i[d]+=f}i.yaw=Math.max(-1,Math.min(1,i.yaw)),i.pitch=Math.max(-1,Math.min(1,i.pitch)),i.roll=Math.max(-1,Math.min(1,i.roll))}function o(c){if(qa[c.code]){c.preventDefault(),s.add(c.code),r();return}c.repeat||(c.code==="Space"?(c.preventDefault(),n?.()):c.code==="KeyR"?e?.():c.code==="KeyH"&&t?.())}function a(c){qa[c.code]&&(c.preventDefault(),s.delete(c.code),r())}function l(){s.clear(),r()}return Bs(()=>{window.addEventListener("keydown",o,{passive:!1}),window.addEventListener("keyup",a,{passive:!1}),window.addEventListener("blur",l)}),ks(()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",a),window.removeEventListener("blur",l)}),{input:i,clearInput:l}}const ho={roll:0,pitch:1,throttle:2,yaw:3};function l1(){const n=We(!1),e=We(""),t=We(null),{normalizeAxis:i}=_c(),s=Cn({throttle:0,yaw:0,pitch:0,roll:0});let r=null;function o(){s.throttle=0,s.yaw=0,s.pitch=0,s.roll=0}function a(){const f=navigator.getGamepads?.()??[];return t.value!==null&&f[t.value]?f[t.value]:Array.from(f).find(h=>h&&h.axes.length>=4)??null}function l(){const f=a();if(!f){n.value=!1,e.value="",t.value=null,o();return}n.value=!0,e.value=f.id,t.value=f.index,s.roll=i("roll",f.axes[ho.roll]),s.pitch=i("pitch",f.axes[ho.pitch]),s.yaw=-i("yaw",f.axes[ho.yaw]),s.throttle=i("throttle",f.axes[ho.throttle])}function c(){l(),r=requestAnimationFrame(c)}function u(f){f.gamepad.axes.length>=4&&(t.value=f.gamepad.index,e.value=f.gamepad.id,n.value=!0)}function d(f){f.gamepad.index===t.value&&(n.value=!1,t.value=null,e.value="",o())}return Bs(()=>{window.addEventListener("gamepadconnected",u),window.addEventListener("gamepaddisconnected",d),r=requestAnimationFrame(c)}),ks(()=>{window.removeEventListener("gamepadconnected",u),window.removeEventListener("gamepaddisconnected",d),r!==null&&cancelAnimationFrame(r)}),{input:s,connected:n,gamepadId:e,gamepadIndex:t,clearInput:o}}const hd=.2,Ya=.1,pd=.4,md=.6,gd=[.25,.5,.75],_d=.05,xd=1e3,c1=600,vd=[{id:"pitch-forward",axis:"pitch",direction:1,title:"FORWARD",label:"前進",stick:"右搖桿",arrow:"↑",instruction:"將右搖桿向前推"},{id:"pitch-backward",axis:"pitch",direction:-1,title:"BACKWARD",label:"後退",stick:"右搖桿",arrow:"↓",instruction:"將右搖桿向後拉"},{id:"roll-left",axis:"roll",direction:-1,title:"ROLL LEFT",label:"左移",stick:"右搖桿",arrow:"←",instruction:"將右搖桿向左推"},{id:"roll-right",axis:"roll",direction:1,title:"ROLL RIGHT",label:"右移",stick:"右搖桿",arrow:"→",instruction:"將右搖桿向右推"},{id:"yaw-left",axis:"yaw",direction:1,title:"YAW LEFT",label:"左轉",stick:"左搖桿",arrow:"↺",instruction:"將左搖桿向左推"},{id:"yaw-right",axis:"yaw",direction:-1,title:"YAW RIGHT",label:"右轉",stick:"左搖桿",arrow:"↻",instruction:"將左搖桿向右推"}],u1={pitch:"Pitch",roll:"Roll",yaw:"Yaw"};function bd(n){return n[Math.floor(Math.random()*n.length)]}function d1(n){const e=We(null),t=We(!1),i=We(0),s=We(!1),r=We(!1),o=We(!1),a=We(null),l=We(""),c=We(pd),u=We(md),d=We(null),f=We(0);let h=null,v=null,y=null,m=null;function p(){return Number(n?.value??n??1)}function R(){a.value=null,l.value=""}function T(){h!==null&&(clearTimeout(h),h=null)}function M(){m=null,f.value=0}function U(){if(p()===2){const Z=gd.filter(q=>q!==y),ne=bd(Z.length?Z:gd);y=ne,d.value=ne,c.value=Math.max(0,ne-_d),u.value=Math.min(1,ne+_d);return}d.value=null,c.value=pd,u.value=md}function P(B){return Math.abs(Number(B?.pitch??0))<=Ya&&Math.abs(Number(B?.roll??0))<=Ya&&Math.abs(Number(B?.yaw??0))<=Ya}function A(){T();const B=vd.filter(ne=>ne.id!==v),Z=bd(B.length?B:vd);v=Z.id,U(),e.value={...Z,currentValue:0,targetValue:d.value},t.value=!1,r.value=!1,o.value=!1,R(),M(),i.value+=1}function N(){o.value||(o.value=!0,h=setTimeout(()=>{o.value=!1,A()},c1))}function E(){T(),e.value=null,i.value=0,v=null,y=null,t.value=!1,s.value=!0,r.value=!1,o.value=!1,R(),M(),U()}function x(){T(),e.value=null,t.value=!1,s.value=!1,r.value=!1,o.value=!1,R(),M()}function D(B,Z){return["pitch","roll","yaw"].find(q=>q===Z?!1:Math.abs(Number(B?.[q]??0))>=hd)}function $(B){if(s.value){P(B)&&(s.value=!1,N());return}if(o.value||!e.value)return;if(r.value){P(B)&&(r.value=!1,M(),N());return}if(t.value)return;const Z=e.value,ne=Number(B?.[Z.axis]??0);Z.currentValue=ne;const q=ne*Z.direction;if(q<=-hd){M(),a.value="wrong-direction",l.value="方向相反，請往指定方向操作";return}const K=D(B,Z.axis);if(K){M(),a.value="wrong-axis",l.value=`目前操作的是 ${u1[K]}`;return}if(q>u.value){M(),a.value="over-input",l.value="操作過量，請減少推桿幅度";return}if(q<c.value){M(),R();return}R();const V=performance.now();m===null&&(m=V);const me=V-m;f.value=Math.min(1,me/xd),!(me<xd)&&(f.value=1,t.value=!0,r.value=!0,R())}return n?.value!==void 0&&pn(n,()=>{E()}),{currentExercise:e,completed:t,round:i,waitingForStartCenter:s,waitingForCenter:r,waitingForNextRound:o,errorType:a,errorMessage:l,successMin:c,successMax:u,targetValue:d,successHoldProgress:f,start:E,stop:x,update:$}}class f1{constructor(e){this.camera=e,this.offset=new z(9.5,7.5,11.5),this.targetPosition=new z,this.lookTarget=new z,this.preset=null}setPreset(e,t,i,s=!1){this.preset=e;const r=Je.degToRad(t.degrees);this.offset.set(Math.sin(r)*e.distance,e.height,Math.cos(r)*e.distance),s&&(this.camera.position.set(i.x+this.offset.x,this.offset.y,i.z+this.offset.z),this.camera.lookAt(i.x,e.lookHeight,i.z))}update(e,t){if(!this.preset)return;const i=1-Math.exp(-2.1*e);this.targetPosition.set(t.x+this.offset.x,this.offset.y,t.z+this.offset.z),this.camera.position.lerp(this.targetPosition,i),this.lookTarget.set(t.x,Math.max(this.preset.lookHeight,t.y),t.z),this.camera.lookAt(this.lookTarget)}}function h1(n){return(Je.radToDeg(n)%360+360)%360}function p1(n){const e=["↑","↗","→","↘","↓","↙","←","↖"],t=(n%360+360)%360;return e[Math.round(t/45)%8]}const m1=new z(0,1,0);class g1{constructor(e){this.drone=e,this.velocity=new z,this.localAcceleration=new z,this.worldAcceleration=new z,this.currentWindAcceleration=new z,this.state={yaw:0,pitchVisual:0,rollVisual:0},this.randomYawTimer=0}reset(e=0){this.velocity.set(0,0,0),this.localAcceleration.set(0,0,0),this.worldAcceleration.set(0,0,0),this.currentWindAcceleration.set(0,0,0),this.state.yaw=e,this.state.pitchVisual=0,this.state.rollVisual=0,this.randomYawTimer=0,this.drone.position.set(0,1.5,0),this.drone.rotation.set(0,-e,0)}stopMotion(){this.velocity.set(0,0,0),this.localAcceleration.set(0,0,0),this.worldAcceleration.set(0,0,0),this.currentWindAcceleration.set(0,0,0),this.state.pitchVisual=0,this.state.rollVisual=0,this.drone.rotation.set(0,-this.state.yaw,0)}update(e,t,i,s){const r=Number.isFinite(e)?Je.clamp(e,0,.05):0;this.updateRandomOrientation(r,s);const o=Je.degToRad(95);this.state.yaw-=t.yaw*o*r;const a=Je.degToRad(17),l=1-Math.exp(-9*r);this.state.pitchVisual=Je.lerp(this.state.pitchVisual,t.pitch*a,l),this.state.rollVisual=Je.lerp(this.state.rollVisual,-t.roll*a,l);const u=(t.throttle-.5)*2;this.localAcceleration.set(t.roll*4.4,u*4.1,-t.pitch*4.4),this.worldAcceleration.copy(this.localAcceleration).applyAxisAngle(m1,-this.state.yaw),this.velocity.addScaledVector(this.worldAcceleration,r),this.updateWindAcceleration(i),this.velocity.addScaledVector(this.currentWindAcceleration,r);const d=Math.exp(-.66*r),f=Math.exp(-1.25*r);this.velocity.x*=d,this.velocity.z*=d,this.velocity.y*=f;const h=Math.hypot(this.velocity.x,this.velocity.z);if(h>5.3){const v=5.3/h;this.velocity.x*=v,this.velocity.z*=v}this.velocity.y=Je.clamp(this.velocity.y,-2.8,2.8),this.drone.position.addScaledVector(this.velocity,r),this.clampAltitude(),this.drone.rotation.set(this.state.pitchVisual,-this.state.yaw,this.state.rollVisual,"YXZ");for(const v of this.drone.userData.rotors??[])v.rotation.y+=v.userData.spinDirection*(18+t.throttle*14)*r;return{altitude:this.drone.position.y,speed:this.velocity.length(),yaw:h1(this.state.yaw),distance:Math.hypot(this.drone.position.x,this.drone.position.z)}}updateWindAcceleration(e){if(!e||!Number.isFinite(e.x)||!Number.isFinite(e.y)||!Number.isFinite(e.z)){this.currentWindAcceleration.set(0,0,0);return}this.currentWindAcceleration.copy(e)}updateRandomOrientation(e,t){if(t!=="random"){this.randomYawTimer=0;return}if(this.randomYawTimer+=e,this.randomYawTimer>=8){const i=[45,90,135,180],s=i[Math.floor(Math.random()*i.length)];this.state.yaw+=Je.degToRad(s),this.randomYawTimer=0}}clampAltitude(){this.drone.position.y<.35&&(this.drone.position.y=.35,this.velocity.y<0&&(this.velocity.y=0)),this.drone.position.y>5.2&&(this.drone.position.y=5.2,this.velocity.y>0&&(this.velocity.y=0))}}class _1{constructor(e=12){this.size=e,this.half=e/2,this.wasOutside=!1,this.count=0}reset(){this.wasOutside=!1,this.count=0}update(e){const t=Math.abs(e.x)>this.half||Math.abs(e.z)>this.half;return t&&!this.wasOutside&&(this.count+=1),this.wasOutside=t,{outside:t,count:this.count}}}class x1{constructor(e=6){this.zoneHalf=e,this.score=0}reset(){this.score=0}update(e,t,i){const s=Je.clamp(1-t/this.zoneHalf,0,1);return this.score=i?Math.max(0,this.score-e*35):this.score+e*(10+s*90),this.score}}class v1{constructor(){this.mode="none",this.baseDirection=0,this.currentDirection=0,this.targetDirection=0,this.baseSpeed=0,this.currentSpeed=0,this.targetSpeed=0,this.nextSpeedChangeAt=0,this.nextDirectionChangeAt=0,this.lastElapsedTime=0,this.acceleration=new z}reset(e="none"){return this.mode=e,this.lastElapsedTime=0,e==="none"?(this.baseDirection=0,this.currentDirection=0,this.targetDirection=0,this.baseSpeed=0,this.currentSpeed=0,this.targetSpeed=0,this.nextSpeedChangeAt=0,this.nextDirectionChangeAt=0,this.acceleration.set(0,0,0),this.getState()):(this.baseDirection=Math.random()*Math.PI*2,this.currentDirection=this.baseDirection,this.targetDirection=this.baseDirection,e==="gusty"?this.baseSpeed=.42:e==="stability"?this.baseSpeed=.28:this.baseSpeed=.34,this.currentSpeed=this.baseSpeed,this.targetSpeed=this.baseSpeed,e==="stability"?(this.nextSpeedChangeAt=Je.randFloat(1.8,3.2),this.nextDirectionChangeAt=Je.randFloat(4,7)):(this.nextSpeedChangeAt=1.5,this.nextDirectionChangeAt=e==="gusty"?4:3),this.updateAcceleration(),this.getState())}update(e,t=0){const i=Number.isFinite(e)?Je.clamp(e,0,.05):0,s=Number.isFinite(t)?Math.max(0,t):0;if(this.mode==="none")return this.acceleration.set(0,0,0),this.lastElapsedTime=s,this.getState();s<this.lastElapsedTime&&(this.nextSpeedChangeAt=s+Je.randFloat(1.2,2.4),this.mode==="stability"?this.nextDirectionChangeAt=s+Je.randFloat(4,7):this.nextDirectionChangeAt=s+(this.mode==="gusty"?Je.randFloat(3,5):Je.randFloat(2.5,4))),this.lastElapsedTime=s,this.updateSpeedTarget(s),this.updateDirectionTarget(s);let r=1.2,o=.7;return this.mode==="gusty"?(r=1.8,o=1.6):this.mode==="stability"&&(r=1.05,o=.85),this.currentSpeed=Je.damp(this.currentSpeed,this.targetSpeed,r,i),this.currentDirection=y1(this.currentDirection,this.targetDirection,o,i),this.updateAcceleration(),this.getState()}updateSpeedTarget(e){if(!(e<this.nextSpeedChangeAt)){if(this.mode==="gusty"){const i=Math.random()<.35?Je.randFloat(1.25,1.7):Je.randFloat(.72,1.2);this.targetSpeed=this.baseSpeed*i,this.nextSpeedChangeAt=e+Je.randFloat(1.2,3);return}if(this.mode==="stability"){const i=Math.random()<.25?Je.randFloat(1.15,1.4):Je.randFloat(.65,1.08);this.targetSpeed=this.baseSpeed*i,this.nextSpeedChangeAt=e+Je.randFloat(1.8,3.8);return}this.targetSpeed=this.baseSpeed*Je.randFloat(.78,1.18),this.nextSpeedChangeAt=e+Je.randFloat(1.8,3.8)}}updateDirectionTarget(e){if(e<this.nextDirectionChangeAt)return;if(this.mode==="gusty"){const i=Math.random()<.5?-1:1,s=Je.randFloat(35,120),r=Je.degToRad(s*i);this.targetDirection=Ka(this.currentDirection+r),this.baseDirection=this.targetDirection,this.nextDirectionChangeAt=e+Je.randFloat(5,10);return}if(this.mode==="stability"){const i=Je.randFloat(25,100),s=Math.random()<.5?-1:1,r=Je.degToRad(i*s);this.targetDirection=Ka(this.currentDirection+r),this.baseDirection=this.targetDirection,this.nextDirectionChangeAt=e+Je.randFloat(4.5,8);return}const t=Je.degToRad(Je.randFloat(-7,7));this.targetDirection=Ka(this.baseDirection+t),this.nextDirectionChangeAt=e+Je.randFloat(3.5,6.5)}updateAcceleration(){this.acceleration.set(Math.sin(this.currentDirection)*this.currentSpeed,0,-Math.cos(this.currentDirection)*this.currentSpeed)}getState(){return{acceleration:this.acceleration.clone(),speed:this.acceleration.length(),direction:b1(this.acceleration)}}}function b1(n){if(!n||n.lengthSq()===0)return 0;const e=Math.atan2(n.x,-n.z);return(Je.radToDeg(e)%360+360)%360}function y1(n,e,t,i){const s=Math.atan2(Math.sin(e-n),Math.cos(e-n));return n+s*(1-Math.exp(-t*i))}function Ka(n){return Math.atan2(Math.sin(n),Math.cos(n))}function M1(){const n=new Si,e=new Gs(.34,.4,64),t=new xn({color:16777215,transparent:!0,opacity:.42,side:Gt,depthWrite:!1,depthTest:!0}),i=new Dt(e,t);i.rotation.x=-Math.PI/2,i.position.y=.018,i.castShadow=!1,i.receiveShadow=!1,n.add(i);const s=new Dr(.035,32),r=new xn({color:16777215,transparent:!0,opacity:.55,side:Gt,depthWrite:!1}),o=new Dt(s,r);return o.rotation.x=-Math.PI/2,o.position.y=.019,o.castShadow=!1,o.receiveShadow=!1,n.add(o),n}function Sn(n,e){const t=new Dt(n,e);return t.castShadow=!0,t.receiveShadow=!0,t}function S1(){const n=new Si;n.name="trainer-drone";const e=new Vi({color:1514016,roughness:.5}),t=new Vi({color:14221118,roughness:.4}),i=new Vi({color:4804445,roughness:.6}),s=new Vi({color:329224,metalness:.2,roughness:.15}),r=new Vi({color:10133933,transparent:!0,opacity:.45,roughness:.5}),o=Sn(new oi(.72,.22,.92),e);o.position.y=.06,n.add(o);const a=Sn(new oi(.48,.17,.54),t);a.position.set(0,.22,-.1),n.add(a);const l=Sn(new Qo(.18,.48,4),t);l.rotation.x=-Math.PI/2,l.rotation.z=Math.PI/4,l.position.set(0,.13,-.68),n.add(l);const c=Sn(new oi(.25,.18,.18),e);c.position.set(0,-.03,-.56),n.add(c);const u=Sn(new Ki(.07,.07,.055,24),s);u.rotation.x=Math.PI/2,u.position.set(0,-.03,-.665),n.add(u);const d=new oi(1.55,.09,.11),f=Sn(d,t);f.rotation.y=Math.PI/4,f.position.y=.04,n.add(f);const h=Sn(d,i);h.rotation.y=-Math.PI/4,h.position.y=.04,n.add(h);const v=[[-.56,.11,-.56],[.56,.11,-.56],[-.56,.11,.56],[.56,.11,.56]],y=[];v.forEach(([A,N,E],x)=>{const D=Sn(new Ki(.11,.13,.16,20),x<2?t:i);D.position.set(A,N,E),n.add(D);const $=Sn(new Ki(.36,.36,.018,36),r);$.position.set(A,N+.13,E),$.userData.spinDirection=x%2===0?1:-1,n.add($),y.push($)});const m=new xn({color:15925109}),p=new xn({color:16726344}),R=Sn(new Oo(.045,12,12),m);R.position.set(-.28,.11,-.48),n.add(R);const T=R.clone();T.position.x=.28,n.add(T);const M=Sn(new Oo(.045,12,12),p);M.position.set(-.28,.11,.48),n.add(M);const U=M.clone();U.position.x=.28,n.add(U);const P=new u_(new z(0,0,-1),new z(0,.55,0),1.1,14221118,.22,.13);return P.name="heading-arrow",n.add(P),n.userData.rotors=y,n.userData.headingArrow=P,n}function E1(){const n=new Si,e=new Dt(new Dr(.72,64),new xn({color:10741301,transparent:!0,opacity:.12,side:Gt,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.position.y=.025;const t=new Dt(new Gs(.58,.72,64),new xn({color:14285213,transparent:!0,opacity:.9,side:Gt,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.position.y=.03,n.add(e,t),n.visible=!1,n}function w1(){const n=new Z0;n.background=new tt(592656),n.fog=new Ac(592656,24,58);const e=new s_(13232127,2106410,1.45);n.add(e);const t=new a_(16777215,2.2);return t.position.set(8,14,6),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.left=-18,t.shadow.camera.right=18,t.shadow.camera.top=18,t.shadow.camera.bottom=-18,n.add(t),n}function T1(n,e=12){const t=new Dt(new Lr(80,80),new Vi({color:1119515,roughness:.92}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);const i=new c_(80,80,3949647,2304563);i.position.y=.006,n.add(i);const s=e/2,r=[[-s,.03,-s],[s,.03,-s],[s,.03,s],[-s,.03,s]],o=r.map(([h,v,y])=>new z(h,v,y));o.push(o[0].clone());const a=new Jt().setFromPoints(o),l=new Jo({color:14221118}),c=new Cc(a,l);n.add(c);const u=new Dt(new Gs(.38,.47,48),new xn({color:14221118,side:Gt}));u.rotation.x=-Math.PI/2,u.position.y=.012,n.add(u);const d=new Ki(.035,.035,1.8,12),f=new Vi({color:14221118});for(const[h,,v]of r){const y=new Dt(d,f);y.position.set(h,.9,v),y.castShadow=!0,n.add(y)}return{ground:t,grid:i,boundary:c,centerRing:u}}function A1(n=2.5){const e=new Si,t=new Dr(n,96),i=new xn({color:16777215,transparent:!0,opacity:.035,side:Gt,depthWrite:!1}),s=new Dt(t,i);s.rotation.x=-Math.PI/2,s.position.y=.012,e.add(s);const r=new Gs(n-.035,n+.035,96),o=new xn({color:16777215,transparent:!0,opacity:.55,side:Gt,depthWrite:!1}),a=new Dt(r,o);return a.rotation.x=-Math.PI/2,a.position.y=.015,e.add(a),e.userData.radius=n,e.userData.ringMaterial=o,e.userData.fillMaterial=i,e}const R1={class:"relative min-h-145 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl shadow-black/40"},C1={key:4,class:"pointer-events-none absolute right-4 top-4 z-30 flex flex-col items-end gap-3"},P1={key:5,class:"pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs text-white/60 backdrop-blur"},yd=60,ja=3,Za=12,D1={__name:"GameCanvas",props:{settings:Object,game:Object,controllerCalibrating:{type:Boolean,default:!1}},emits:["input-ready","control-source-ready","register-actions"],setup(n,{emit:e}){const t=n,i=e,s=We(null),r=r1[0],o=We(null),a=We(0),l=We(null),c=We(!1),u=We(0),d=We(0),f=We(0),h=We("ready"),v=We(0),y=We(0),m=We("normal"),p=We("normal"),R=We(yd),T=Ye(()=>Math.max(1,Math.ceil(ja-y.value))),M=Ye(()=>Math.max(0,R.value-v.value)),U=Ye(()=>t.settings.trainingMode==="randomHeading"),P=Ye(()=>t.settings.trainingMode.startsWith("stickTraining")),A=Ye(()=>t.settings.trainingMode.startsWith("stabilityTraining")),N=Ye(()=>t.settings.trainingMode==="stabilityTraining2"?2:1),E=Ye(()=>t.settings.trainingMode==="stickTraining2"?2:1);let x,D,$,B,Z,ne,q,K,V,me,Ee,De=0;const ze=new v1,it=new _1(Za),ie=new x1(Za/2),he=new o1,{input:Ie,clearInput:ve}=a1({onPause:un,onReset:Nt,onHelp:()=>{t.settings.showHelp=!t.settings.showHelp}}),{input:Fe,connected:et}=l1();function ke(){return et.value?Fe:Ie}const xt=Ye(()=>et.value?"gamepad":"keyboard"),C=Ye(()=>na(M.value)),I=Ye(()=>{const _=d.value+f.value,L=_>0?d.value/_*100:0;return{heading:l.value,total:_,inside:d.value,outside:f.value,stability:L}}),S=Ye(()=>{if(t.settings.trainingMode!=="stabilityTraining2")return 2.5;const _=h.value==="setup"?t.settings.stabilityZoneSize:p.value;return ko.find(L=>L.value===_)?.radius??2.5}),oe=Ye(()=>{if(t.settings.trainingMode!=="stabilityTraining2")return 1;const _=h.value==="setup"?t.settings.stabilityWindLevel:m.value;return Bo.find(L=>L.value===_)?.multiplier??1}),J=Ye(()=>t.settings.trainingMode!=="stabilityTraining2"?"":Bo.find(_=>_.value===m.value)?.label??"-"),te=Ye(()=>{if(t.settings.trainingMode!=="stabilityTraining2")return"";const _=ko.find(L=>L.value===p.value);return _?`${_.label} · R ${_.radius.toFixed(1)} m`:"-"}),Q=Ye(()=>ta(R.value)),se=Ye(()=>qs(I.value.total)),j=Ye(()=>qs(I.value.inside)),Y=Ye(()=>qs(I.value.outside)),we=Ye(()=>`${I.value.stability.toFixed(1)}%`),w=Ye(()=>O()),g=Cn({throttle:.5,yaw:0,pitch:0,roll:0}),{currentExercise:F,completed:W,round:ee,waitingForStartCenter:G,waitingForCenter:xe,waitingForNextRound:de,errorType:Te,errorMessage:Re,successMin:ae,successMax:Ae,successHoldProgress:Le,start:Ue,stop:ge,update:Ge}=d1(E);function O(){const _=l.value;if(!_)return"-";const L=(Je.radToDeg(_.radians)+360)%360;return L===0?"NORTH ↑":L===90?"EAST →":L===180?"SOUTH ↓":L===270?"WEST ←":`${Math.round(L)}°`}function be(_,L){return _.find(H=>H.value===L)??_[0]}function ce(){return Zl[Math.floor(Math.random()*Zl.length)]}function Ce(_){return _==="away"?0:_==="toward"?Math.PI:_==="left"?-Math.PI/2:_==="right"?Math.PI/2:_==="random"?Math.random()*Math.PI*2-Math.PI:K?.state.yaw??0}function fe(){D=w1(),$=new mn(48,1,.1,100),x=new qy({antialias:!0}),x.domElement.style.width="100%",x.domElement.style.height="100%",x.domElement.style.display="block",x.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.shadowMap.enabled=!0,x.shadowMap.type=Uf,x.outputColorSpace=ln,s.value.appendChild(x.domElement),T1(D,Za),B=S1(),D.add(B),Z=M1(),D.add(Z),ne=A1(S.value),ne.position.set(0,0,0),D.add(ne),q=E1(),D.add(q),K=new g1(B),V=new f1($),ut(!0),Nt(),rt(),me=new ResizeObserver(rt),me.observe(s.value)}function re(){if(!A.value||!B){c.value=!1,u.value=0;return}const _=Math.hypot(B.position.x,B.position.z);u.value=_,c.value=_>S.value}function Ne(_){!A.value||h.value!=="ready"||(y.value+=_,y.value>=ja&&(y.value=ja,h.value="running"))}function qe(_){if(!A.value||h.value!=="running")return;const L=R.value-v.value,H=Math.min(_,Math.max(0,L));if(H>0&&(c.value?f.value+=H:d.value+=H,v.value+=H),v.value>=R.value-1e-4){v.value=R.value;const k=d.value+f.value,ue=R.value-k;Math.abs(ue)>0&&(c.value?f.value+=ue:d.value+=ue),h.value="finished",K?.stopMotion()}}function ut(_=!1){V&&V.setPreset(be(dh,t.settings.cameraHeight),be(jl,t.settings.cameraBearing),B?.position??new z(0,1.5,0),_)}function rt(){if(!x||!$||!s.value)return;const{clientWidth:_,clientHeight:L}=s.value;!_||!L||(x.setSize(_,L),$.aspect=_/L,$.updateProjectionMatrix())}function Nt(){if(!K)return;ve(),t.game.paused.value=!1;let _=Ce(t.settings.trainingMode);A.value&&(l.value=ce(),_=l.value.radians,Ir()),In.challenge&&U.value&&(o.value=he.start(r,new z(0,1.5,0)),_=he.getHeadingRadians()),K.reset(_),a.value=(Je.radToDeg(_)+360)%360;const L=A.value?"stability":t.settings.windMode;ze.reset(L),it.reset(),In.score&&ie.reset(),(!In.challenge||!U.value)&&(he.reset(),o.value=null),vn(),Object.assign(t.game.telemetry,{altitude:1.5,speed:0,yaw:0,distance:0,score:0,time:0,boundaryCount:0,outside:!1,windSpeed:0,windDirection:0}),hi(),fi(),ut(!0)}function un(){t.game.paused.value=!t.game.paused.value,ve()}function fi(){if(!ne)return;ne.visible=A.value;const _=S.value/2.5;ne.scale.set(_,_,_)}function hi(){!B||!Z||Z.position.set(B.position.x,0,B.position.z)}function vn(){if(!q)return;if(!In.challenge||!U.value||!o.value?.active){q.visible=!1;return}const _=he.getTargetPosition();q.position.set(_.x,0,_.z),q.visible=!0}function Xs(){K.reset(0),o.value=he.nextRound(B.position);const _=he.getHeadingRadians();K.reset(_),a.value=(Je.radToDeg(_)+360)%360,vn(),hi()}function Ir(){d.value=0,f.value=0,v.value=0,y.value=0,h.value="setup"}function Ur(){if(!(!A.value||h.value!=="setup")){if(R.value=$s(t.settings.stabilityDuration),t.settings.trainingMode==="stabilityTraining2"&&(m.value=t.settings.stabilityWindLevel,p.value=t.settings.stabilityZoneSize),d.value=0,f.value=0,v.value=0,y.value=0,h.value="ready",K?.stopMotion(),K){const _=l.value?.radians??0;K.reset(_)}ze.reset("stability"),hi(),re()}}function Qi(){if(!A.value||h.value!=="finished")return;ve(),t.game.paused.value=!1,l.value=ce();const _=l.value.radians;d.value=0,f.value=0,v.value=0,y.value=0,h.value="ready",K?.reset(_),a.value=(Je.radToDeg(_)+360)%360,ze.reset("stability"),it.reset(),Object.assign(t.game.telemetry,{altitude:1.5,speed:0,yaw:0,distance:0,score:0,time:0,boundaryCount:0,outside:!1,windSpeed:0,windDirection:0}),hi(),fi(),re(),ut(!0)}function Nr(){t.settings.trainingMode==="stabilityTraining2"&&Nt()}function es(_){t.settings.trainingMode!=="stabilityTraining2"||h.value!=="setup"||(t.settings.stabilityWindLevel=_)}function Fr(_){t.settings.trainingMode!=="stabilityTraining2"||h.value!=="setup"||(t.settings.stabilityZoneSize=_,fi(),re())}function Or(_){!A.value||h.value!=="setup"||(t.settings.stabilityDuration=$s(_))}function Br(_){Ee=requestAnimationFrame(Br);const L=Math.min((_-De)/1e3||0,.033);if(De=_,!t.game.paused.value&&!t.controllerCalibrating){const H=t.game.telemetry;H.time+=L;const X=A.value&&h.value!=="running",k=A.value?v.value:H.time,ue=X?{acceleration:new z,speed:0,direction:0}:ze.update(L,k),ye=A.value?oe.value:1,Pe={acceleration:ue.acceleration.clone().multiplyScalar(ye),speed:ue.speed*ye,direction:ue.direction},Se=ke();Object.assign(g,Se),P.value&&Ge(Se);let He=Se;P.value?He={throttle:.5,yaw:0,pitch:0,roll:0}:A.value?h.value==="running"?He={throttle:.5,yaw:0,pitch:Se.pitch,roll:Se.roll}:He={throttle:.5,yaw:0,pitch:0,roll:0}:In.challenge&&U.value&&(He={throttle:Se.throttle,yaw:0,pitch:Se.pitch,roll:Se.roll});const $e=In.challenge&&U.value||A.value?"free":t.settings.trainingMode,Be=K.update(L,He,Pe.acceleration,$e);a.value=(Number(Be.yaw??0)+360)%360;const Qe=it.update(B.position);re(),Ne(L),qe(L);const ot=ne?.userData?.ringMaterial;ot&&(ot.color.set(c.value?16735324:16777215),ot.opacity=c.value?.95:.55),In.challenge&&U.value&&(o.value=he.update(L,B.position),he.shouldAdvance()&&Xs()),Object.assign(H,Be,{outside:Qe.outside,boundaryCount:Qe.count,windSpeed:Pe.speed,windDirection:Pe.direction}),H.score=In.score?ie.update(L,H.distance,H.outside):0,V.update(L,B.position)}hi(),fi(),vn(),x.render(D,$)}function $s(_){const L=Number(_);return Number.isFinite(L)?Math.min(600,Math.max(10,Math.round(L))):yd}function ta(_){const L=$s(_);if(L<60)return`${L} 秒`;if(L%60===0)return`${L/60} 分鐘`;const H=Math.floor(L/60),X=L%60;return`${H} 分 ${X} 秒`}function na(_){const L=Math.ceil(Math.max(0,_)),H=Math.floor(L/60),X=L%60;return`${String(H).padStart(2,"0")}:${String(X).padStart(2,"0")}`}function qs(_){const L=Math.max(0,_),H=Math.floor(L/60),X=L%60;return`${String(H).padStart(2,"0")}:`+X.toFixed(1).padStart(4,"0")}function ia(){cancelAnimationFrame(Ee),me?.disconnect(),D?.traverse(_=>{_.geometry?.dispose(),(_.material?Array.isArray(_.material)?_.material:[_.material]:[]).forEach(H=>{H.dispose()})}),x?.dispose(),x?.domElement?.remove()}return pn(()=>[t.settings.cameraHeight,t.settings.cameraBearing],()=>ut(!1)),pn(()=>t.settings.windMode,Nt),pn(()=>t.settings.trainingMode,Nt),pn(()=>t.settings.showHeadingArrow,_=>{B?.userData.headingArrow&&(B.userData.headingArrow.visible=_)}),pn(xt,_=>{i("control-source-ready",_)},{immediate:!0}),pn(()=>t.settings.trainingMode,()=>{if(P.value){Ue();return}ge()},{immediate:!0}),pn(()=>t.settings.stabilityZoneSize,()=>{t.settings.trainingMode==="stabilityTraining2"&&(fi(),re())}),Bs(async()=>{await uc(),fe(),i("input-ready",g),i("register-actions",{reset:Nt,togglePause:un}),Ee=requestAnimationFrame(Br)}),ks(ia),(_,L)=>(pe(),_e("div",R1,[b("div",{ref_key:"canvasHost",ref:s,class:"absolute inset-0"},null,512),!P.value&&!A.value?(pe(),kn(dM,{key:0,telemetry:n.game.telemetry,"status-text":n.game.statusText.value,"wind-mode":n.settings.windMode,"camera-bearing":be(Oe(jl),n.settings.cameraBearing).degrees},null,8,["telemetry","status-text","wind-mode","camera-bearing"])):ht("",!0),Oe(In).challenge&&U.value?(pe(),kn(LM,{key:1,challenge:o.value},null,8,["challenge"])):ht("",!0),P.value?(pe(),kn(WM,{key:2,exercise:Oe(F),completed:Oe(W),"waiting-for-start-center":Oe(G),"waiting-for-center":Oe(xe),"waiting-for-next-round":Oe(de),round:Oe(ee),"error-type":Oe(Te),"error-message":Oe(Re),"success-min":Oe(ae),"success-max":Oe(Ae),"success-hold-progress":Oe(Le)},null,8,["exercise","completed","waiting-for-start-center","waiting-for-center","waiting-for-next-round","round","error-type","error-message","success-min","success-max","success-hold-progress"])):ht("",!0),A.value?(pe(),kn(n1,{key:3,"time-label":C.value,phase:h.value,"ready-count":T.value,"heading-label":w.value,"total-label":se.value,"inside-label":j.value,"outside-label":Y.value,"stability-label":we.value,level:N.value,"show-difficulty":n.settings.trainingMode==="stabilityTraining2",settings:n.settings,"wind-label":J.value,"zone-label":te.value,"duration-label":Q.value,onUpdateWindLevel:es,onUpdateZoneSize:Fr,onUpdateDuration:Or,onStart:Ur,onRetry:Qi,onChangeSettings:Nr},null,8,["time-label","phase","ready-count","heading-label","total-label","inside-label","outside-label","stability-label","level","show-difficulty","settings","wind-label","zone-label","duration-label"])):ht("",!0),P.value?ht("",!0):(pe(),_e("div",C1,[Bt(_M,{heading:a.value},null,8,["heading"])])),!P.value&&!A.value?(pe(),_e("div",P1," 鏡頭只跟位置，不跟機頭旋轉 ")):ht("",!0)]))}},L1={class:"space-y-2"},I1={class:"flex items-center justify-between text-xs text-white/60"},U1={class:"relative aspect-square w-24 rounded-full border border-white/15 bg-black/30"},Md={__name:"StickIndicator",props:{title:{type:String,required:!0},horizontalLabel:{type:String,required:!0},verticalLabel:{type:String,required:!0},x:{type:Number,default:0},y:{type:Number,default:0}},setup(n){return(e,t)=>(pe(),_e("div",L1,[b("div",I1,[b("span",null,le(n.title),1),b("span",null,le(n.horizontalLabel)+" / "+le(n.verticalLabel),1)]),b("div",U1,[t[0]||(t[0]=b("div",{class:"absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-white/10"},null,-1)),t[1]||(t[1]=b("div",{class:"absolute top-1/2 left-2 right-2 h-px -translate-y-1/2 bg-white/10"},null,-1)),b("div",{class:"absolute left-1/2 top-1/2 size-5 rounded-full border border-lime-200/80 bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.55)] transition-transform duration-75",style:Ht({transform:`translate(calc(-50% + ${n.x*31}px), calc(-50% + ${-n.y*31}px))`})},null,4)])]))}},N1={class:"rounded-2xl border border-white/10 bg-white/[0.035] p-4"},F1={class:"mb-4 flex items-center justify-between gap-3"},O1={class:"flex items-center gap-3"},B1={class:"flex items-center gap-2"},k1={class:"flex items-center gap-2 text-xs text-white/55"},z1={class:"grid grid-cols-2 gap-3"},H1={class:"mt-4 grid grid-cols-2 gap-2 text-xs text-white/55"},V1={class:"rounded-xl bg-black/20 p-3"},G1={key:0},W1={class:"rounded-xl bg-black/20 p-3"},X1={key:0},$1={__name:"ControlsPanel",props:{input:Object,settings:Object,controlSource:{type:String,default:"keyboard"}},setup(n){return(e,t)=>(pe(),_e("section",N1,[b("div",F1,[t[3]||(t[3]=b("div",null,[b("p",{class:"text-xs uppercase tracking-[0.2em] text-white/40"}," Mode 2 "),b("h2",{class:"mt-1 font-semibold"}," 控制輸入 ")],-1)),b("div",O1,[b("div",B1,[t[1]||(t[1]=b("span",{class:"text-[10px] uppercase tracking-[0.14em] text-white/30"}," Input ",-1)),b("span",{class:Ct(["rounded-full border px-2.5 py-1 text-[10px] font-semibold",n.controlSource==="gamepad"?"border-lime-300/20 bg-lime-300/10 text-lime-200":"border-white/10 bg-white/5 text-white/45"])},le(n.controlSource==="gamepad"?"🎮 LiteRadio":"⌨️ Keyboard"),3)]),b("label",k1,[Qd(b("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>n.settings.showHeadingArrow=i),type:"checkbox",class:"accent-lime-300"},null,512),[[Tm,n.settings.showHeadingArrow]]),t[2]||(t[2]=Rt(" 機頭箭頭 ",-1))])])]),b("div",z1,[Bt(Md,{title:"左桿",x:-n.input.yaw,y:n.input.throttle*2-1,"x-label":"Yaw","y-label":"Throttle"},null,8,["x","y"]),Bt(Md,{title:"右桿",x:n.input.roll,y:n.input.pitch,"x-label":"Roll","y-label":"Pitch"},null,8,["x","y"])]),b("div",H1,[n.controlSource==="gamepad"?(pe(),_e(ct,{key:0},[t[7]||(t[7]=b("div",{class:"rounded-xl bg-black/20 p-3"},[b("strong",{class:"text-white"}," 左桿 ↑ / ↓ "),b("br"),Rt(" Throttle ")],-1)),b("div",V1,[t[4]||(t[4]=b("strong",{class:"text-white"}," 左桿 ← / → ",-1)),t[5]||(t[5]=b("br",null,null,-1)),t[6]||(t[6]=Rt(" Yaw ",-1)),n.settings.trainingMode==="randomHeading"?(pe(),_e("span",G1," （本模式鎖定） ")):ht("",!0)]),t[8]||(t[8]=b("div",{class:"rounded-xl bg-black/20 p-3"},[b("strong",{class:"text-white"}," 右桿 ↑ / ↓ "),b("br"),Rt(" Pitch ")],-1)),t[9]||(t[9]=b("div",{class:"rounded-xl bg-black/20 p-3"},[b("strong",{class:"text-white"}," 右桿 ← / → "),b("br"),Rt(" Roll ")],-1))],64)):(pe(),_e(ct,{key:1},[t[13]||(t[13]=b("div",{class:"rounded-xl bg-black/20 p-3"},[b("strong",{class:"text-white"}," W / S "),b("br"),Rt(" Throttle ")],-1)),b("div",W1,[t[10]||(t[10]=b("strong",{class:"text-white"}," A / D ",-1)),t[11]||(t[11]=b("br",null,null,-1)),t[12]||(t[12]=Rt(" Yaw ",-1)),n.settings.trainingMode==="randomHeading"?(pe(),_e("span",X1," （本模式鎖定） ")):ht("",!0)]),t[14]||(t[14]=b("div",{class:"rounded-xl bg-black/20 p-3"},[b("strong",{class:"text-white"}," ↑ / ↓ "),b("br"),Rt(" Pitch ")],-1)),t[15]||(t[15]=b("div",{class:"rounded-xl bg-black/20 p-3"},[b("strong",{class:"text-white"}," ← / → "),b("br"),Rt(" Roll ")],-1))],64))])]))}};function q1(n=0){return{current:n,min:n,max:n,baseline:n}}function Y1(){const n=typeof navigator<"u"&&"getGamepads"in navigator,e=We(!1),t=We(null),i=We(""),s=We(""),r=We(0),o=Cn([]),a=Cn([]);let l=0;const c=Ye(()=>o.length),u=Ye(()=>a.length);function d(T){for(;o.length<T.axes.length;){const M=T.axes[o.length]??0;o.push(q1(M))}o.length>T.axes.length&&o.splice(T.axes.length)}function f(T){e.value=!0,t.value=T.index,i.value=T.id||"Unknown gamepad",s.value=T.mapping||"none",r.value=T.timestamp||0,d(T),T.axes.forEach((M,U)=>{const P=o[U];P.current=M,P.min=Math.min(P.min,M),P.max=Math.max(P.max,M)}),a.splice(0,a.length,...T.buttons.map((M,U)=>({index:U,value:M.value,pressed:M.pressed,touched:M.touched})))}function h(){if(!n)return null;const T=navigator.getGamepads?.()??[];return t.value!=null&&T[t.value]?T[t.value]:Array.from(T).find(Boolean)??null}function v(){const T=h();T?f(T):(e.value=!1,t.value=null),l=requestAnimationFrame(v)}function y(T){t.value=T.gamepad.index,f(T.gamepad)}function m(T){t.value===T.gamepad.index&&(e.value=!1,t.value=null)}function p(){o.forEach(T=>{T.min=T.current,T.max=T.current})}function R(){o.forEach(T=>{T.baseline=T.current})}return Bs(()=>{n&&(window.addEventListener("gamepadconnected",y),window.addEventListener("gamepaddisconnected",m),v())}),ks(()=>{window.removeEventListener("gamepadconnected",y),window.removeEventListener("gamepaddisconnected",m),cancelAnimationFrame(l)}),{supported:n,connected:e,gamepadIndex:t,gamepadId:i,mapping:s,timestamp:r,axes:o,buttons:a,axisCount:c,buttonCount:u,resetRange:p,captureBaseline:R}}const K1={class:"flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-sky-300/20 bg-[#11151c] shadow-2xl shadow-black/60"},j1={class:"flex shrink-0 items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6"},Z1={class:"flex flex-wrap items-center gap-2"},J1={class:"min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6"},Q1={key:0,class:"rounded-xl border border-rose-300/20 bg-rose-300/10 p-3 text-sm leading-6 text-rose-100"},eE={class:"rounded-2xl border border-white/10 bg-black/25 p-4"},tE={class:"flex items-center justify-between gap-3"},nE={class:"mt-3 break-all text-sm font-medium leading-6 text-white/85"},iE={class:"mt-3 grid grid-cols-2 gap-2 text-xs text-white/45 sm:grid-cols-4"},sE={class:"font-mono text-white/75"},rE={class:"font-mono text-white/75"},oE={class:"font-mono text-white/75"},aE={class:"font-mono text-white/75"},lE={key:1,class:"mt-3 text-sm leading-6 text-white/55"},cE={key:0,class:"mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"},uE={class:"flex items-center gap-2"},dE={class:"rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-[10px] text-white/50"},fE={class:"mt-4 flex flex-wrap gap-2"},hE={class:"mt-4 grid gap-3 lg:grid-cols-2"},pE={class:"flex items-start justify-between gap-4"},mE={class:"flex flex-wrap items-center gap-2"},gE={class:"text-sm font-semibold text-white/80"},_E={class:"rounded-md border border-sky-300/15 bg-sky-300/[0.07] px-2 py-0.5 text-[11px] font-semibold text-sky-100"},xE={class:"mt-1 text-[11px] text-white/40"},vE={key:0,class:"text-right"},bE={class:"mt-0.5 font-mono text-sm font-semibold tabular-nums text-white/65"},yE={class:"mt-0.5 font-mono text-lg font-semibold tabular-nums text-lime-100"},ME={key:1,class:"font-mono text-base font-semibold tabular-nums text-sky-100"},SE={class:"relative mt-4 h-2 overflow-hidden rounded-full bg-white/10"},EE={class:"mt-3 grid grid-cols-3 gap-2 text-[11px] text-white/40"},wE={class:"mt-0.5 font-mono tabular-nums text-white/70"},TE={class:"text-center"},AE={class:"mt-0.5 font-mono tabular-nums text-white/70"},RE={class:"text-right"},CE={class:"mt-0.5 font-mono tabular-nums text-white/70"},PE={key:0,class:"mt-4 border-t border-white/[0.07] pt-3"},DE={class:"mt-2 grid grid-cols-3 gap-2 text-[10px]"},LE={class:"mt-0.5 font-mono text-white/55"},IE={class:"text-center"},UE={class:"text-white/30"},NE={class:"mt-0.5 font-mono text-white/55"},FE={class:"text-right"},OE={class:"mt-0.5 font-mono text-white/55"},BE={class:"mt-5"},kE={class:"mt-2 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8"},zE={class:"mt-1 text-[10px]"},HE={__name:"ControllerDebugPanel",emits:["close"],setup(n,{emit:e}){const t=e,{supported:i,connected:s,gamepadIndex:r,gamepadId:o,mapping:a,axes:l,buttons:c,axisCount:u,buttonCount:d,resetRange:f,captureBaseline:h}=Y1(),{calibration:v,normalizeAxis:y}=_c(),m={0:{name:"Roll",description:"左移 / 右移",calibrationKey:"roll"},1:{name:"Pitch",description:"後移 / 前移",calibrationKey:"pitch"},2:{name:"Throttle",description:"下降 / 升高",calibrationKey:"throttle"},3:{name:"Yaw",description:"左轉 / 右轉",calibrationKey:"yaw"},4:{name:"SA",description:"兩段開關",calibrationKey:null},5:{name:"SB",description:"三段開關",calibrationKey:null},6:{name:"SC",description:"三段開關",calibrationKey:null},7:{name:"SD",description:"兩段開關",calibrationKey:null}};function p(P){return m[P]??{name:"Unknown",description:"尚未設定",calibrationKey:null}}function R(P){return Number(P??0).toFixed(4)}function T(P){return Math.min(100,Math.max(0,(Number(P??0)+1)/2*100))}function M(P,A){const N=p(P);if(!N.calibrationKey)return null;let E=y(N.calibrationKey,A);return N.calibrationKey==="yaw"&&(E=-E),E}function U(P){const A=p(P);return A.calibrationKey?v.axes[A.calibrationKey]??null:null}return(P,A)=>(pe(),_e("div",{class:"fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm",onClick:A[3]||(A[3]=gc(N=>t("close"),["self"]))},[b("section",K1,[b("header",j1,[b("div",null,[b("div",Z1,[b("span",{class:Ct(["h-2.5 w-2.5 rounded-full",Oe(s)?"bg-lime-300 shadow-[0_0_12px_rgba(190,242,100,.75)]":"bg-white/25"])},null,2),A[4]||(A[4]=b("p",{class:"text-sm font-semibold text-sky-100"}," Controller Debug ",-1)),A[5]||(A[5]=b("span",{class:"rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45"}," v0.5 ",-1))]),A[6]||(A[6]=b("p",{class:"mt-1 text-xs leading-5 text-white/45"}," 比較控制器原始輸入與校正後實際送進遊戲的數值。 ",-1))]),b("button",{type:"button",class:"shrink-0 rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-xs text-white/55 transition hover:bg-white/10 hover:text-white",onClick:A[0]||(A[0]=N=>t("close"))}," 關閉 ")]),b("div",J1,[Oe(i)?(pe(),_e(ct,{key:1},[b("div",eE,[b("div",tE,[A[7]||(A[7]=b("p",{class:"text-xs font-semibold uppercase tracking-[0.18em] text-white/40"}," Connection ",-1)),b("span",{class:Ct(["rounded-full px-2.5 py-1 text-[11px] font-semibold",Oe(s)?"bg-lime-300/15 text-lime-200":"bg-white/5 text-white/40"])},le(Oe(s)?"CONNECTED":"WAITING"),3)]),Oe(s)?(pe(),_e(ct,{key:0},[b("p",nE,le(Oe(o)),1),b("div",iE,[b("p",null,[A[8]||(A[8]=Rt(" Index ",-1)),b("span",sE,le(Oe(r)),1)]),b("p",null,[A[9]||(A[9]=Rt(" Mapping ",-1)),b("span",rE,le(Oe(a)||"none"),1)]),b("p",null,[A[10]||(A[10]=Rt(" Axes ",-1)),b("span",oE,le(Oe(u)),1)]),b("p",null,[A[11]||(A[11]=Rt(" Buttons ",-1)),b("span",aE,le(Oe(d)),1)])])],64)):(pe(),_e("p",lE," 插上 LiteRadio 2 SIM 後，動一下搖桿或按任一按鈕。 部分瀏覽器要收到第一次操作後才會顯示控制器。 "))]),Oe(s)?(pe(),_e("div",cE,[A[12]||(A[12]=b("div",{class:"flex-1"},[b("p",{class:"text-xs font-semibold uppercase tracking-[0.18em] text-white/40"}," Calibration "),b("p",{class:"mt-1 text-xs text-white/45"}," 遊戲控制會使用目前儲存的校正設定。 ")],-1)),b("div",uE,[b("span",{class:Ct(["rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]",Oe(v).calibrated?"bg-lime-300/15 text-lime-200":"bg-amber-300/10 text-amber-100"])},le(Oe(v).calibrated?"CALIBRATED":"DEFAULT"),3),b("span",dE," Deadzone "+le(Math.round(Oe(v).deadzone*100))+"% ",1)])])):ht("",!0),Oe(s)?(pe(),_e(ct,{key:1},[b("div",fE,[b("button",{type:"button",class:"rounded-xl bg-sky-200 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-sky-100",onClick:A[1]||(A[1]=(...N)=>Oe(f)&&Oe(f)(...N))}," 重置 Min / Max "),b("button",{type:"button",class:"rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/70 transition hover:bg-white/10",onClick:A[2]||(A[2]=(...N)=>Oe(h)&&Oe(h)(...N))}," 記錄目前值為 Baseline ")]),b("div",hE,[(pe(!0),_e(ct,null,Vn(Oe(l),(N,E)=>(pe(),_e("article",{key:E,class:"rounded-2xl border border-white/10 bg-black/20 p-4"},[b("div",pE,[b("div",null,[b("div",mE,[b("p",gE," AXIS "+le(E),1),b("span",_E,le(p(E).name),1)]),b("p",xE,le(p(E).description),1)]),p(E).calibrationKey?(pe(),_e("div",vE,[A[13]||(A[13]=b("p",{class:"text-[9px] font-semibold uppercase tracking-[0.14em] text-white/30"}," RAW ",-1)),b("p",bE,le(R(N.current)),1),A[14]||(A[14]=b("p",{class:"mt-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-lime-200/50"}," CALIBRATED ",-1)),b("p",yE,le(R(M(E,N.current))),1)])):(pe(),_e("p",ME,le(R(N.current)),1))]),b("div",SE,[A[15]||(A[15]=b("div",{class:"absolute inset-y-0 left-1/2 w-px bg-white/35"},null,-1)),b("div",{class:"absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200 shadow-[0_0_10px_rgba(186,230,253,.65)]",style:Ht({left:`${T(N.current)}%`})},null,4)]),b("div",EE,[b("div",null,[A[16]||(A[16]=b("p",null,"RAW MIN",-1)),b("p",wE,le(R(N.min)),1)]),b("div",TE,[A[17]||(A[17]=b("p",null,"BASELINE",-1)),b("p",AE,le(R(N.baseline)),1)]),b("div",RE,[A[18]||(A[18]=b("p",null,"RAW MAX",-1)),b("p",CE,le(R(N.max)),1)])]),U(E)&&p(E).calibrationKey?(pe(),_e("div",PE,[A[21]||(A[21]=b("p",{class:"text-[9px] font-semibold uppercase tracking-[0.14em] text-white/30"}," CALIBRATION PROFILE ",-1)),b("div",DE,[b("div",null,[A[19]||(A[19]=b("p",{class:"text-white/30"}," RAW MIN ",-1)),b("p",LE,le(R(U(E).min)),1)]),b("div",IE,[b("p",UE,le((p(E).calibrationKey==="throttle","CENTER")),1),b("p",NE,le(p(E).calibrationKey==="throttle"?"—":R(U(E).center)),1)]),b("div",FE,[A[20]||(A[20]=b("p",{class:"text-white/30"}," RAW CENTER ",-1)),b("p",OE,le(R(U(E).max)),1)])])])):ht("",!0)]))),128))]),b("div",BE,[A[22]||(A[22]=b("p",{class:"text-xs font-semibold uppercase tracking-[0.18em] text-white/40"}," Buttons ",-1)),b("div",kE,[(pe(!0),_e(ct,null,Vn(Oe(c),N=>(pe(),_e("div",{key:N.index,class:Ct(["rounded-lg border px-2 py-2 text-center font-mono text-xs",N.pressed?"border-lime-300/40 bg-lime-300/15 text-lime-100":"border-white/10 bg-black/20 text-white/45"])},[b("p",null,"B"+le(N.index),1),b("p",zE,le(R(N.value)),1)],2))),128))])]),A[23]||(A[23]=b("div",{class:"mt-5 rounded-2xl border border-sky-300/15 bg-sky-300/4.5 p-4 text-xs leading-5 text-sky-50/65"}," RAW 是瀏覽器直接取得的 Gamepad 原始值； CALIBRATED 是經過中立點、操作範圍與 Deadzone 修正後， 實際提供給遊戲控制的數值。 ",-1))],64)):ht("",!0)],64)):(pe(),_e("div",Q1," 這個瀏覽器沒有提供 Gamepad API。 請改用最新版 Chrome 或其他支援 Gamepad API 的瀏覽器。 "))])])]))}},VE=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},GE={class:"w-full max-w-2xl rounded-3xl border border-white/10 bg-[#15181f] p-6 shadow-2xl"},WE={class:"flex items-start justify-between gap-4"},XE={class:"text-xs uppercase tracking-[0.24em] text-lime-300/70"},$E={key:0,class:"mt-6 grid gap-3 sm:grid-cols-2"},qE={key:1,class:"mt-6 grid gap-3 sm:grid-cols-2"},YE={__name:"HelpPanel",props:{controlSource:{type:String,default:"keyboard"}},emits:["close"],setup(n,{emit:e}){const t=e;return(i,s)=>(pe(),_e("div",{class:"absolute inset-0 z-30 grid place-items-center bg-black/60 p-4 backdrop-blur-sm",onClick:s[1]||(s[1]=gc(r=>t("close"),["self"]))},[b("section",GE,[b("div",WE,[b("div",null,[b("p",XE,le(n.controlSource==="gamepad"?"Controller controls":"Keyboard controls"),1),s[2]||(s[2]=b("h2",{class:"mt-2 text-2xl font-semibold"}," 操作說明 ",-1))]),b("button",{class:"rounded-xl border border-white/10 px-3 py-2 text-sm hover:bg-white/5",onClick:s[0]||(s[0]=r=>t("close"))}," 關閉 ")]),n.controlSource==="gamepad"?(pe(),_e("div",$E,[...s[3]||(s[3]=[_r('<div class="rounded-2xl bg-black/25 p-4" data-v-1fad982c><h3 class="font-semibold" data-v-1fad982c> 左搖桿 </h3><p class="mt-3 leading-7 text-white/65" data-v-1fad982c><kbd data-v-1fad982c>↑</kbd> 增加 Throttle 　 <kbd data-v-1fad982c>↓</kbd> 降低 Throttle <br data-v-1fad982c><kbd data-v-1fad982c>←</kbd> 左轉 Yaw 　 <kbd data-v-1fad982c>→</kbd> 右轉 Yaw </p></div><div class="rounded-2xl bg-black/25 p-4" data-v-1fad982c><h3 class="font-semibold" data-v-1fad982c> 右搖桿 </h3><p class="mt-3 leading-7 text-white/65" data-v-1fad982c><kbd data-v-1fad982c>↑</kbd> 前進 Pitch 　 <kbd data-v-1fad982c>↓</kbd> 後退 Pitch <br data-v-1fad982c><kbd data-v-1fad982c>←</kbd> 左移 Roll 　 <kbd data-v-1fad982c>→</kbd> 右移 Roll </p></div>',2)])])):(pe(),_e("div",qE,[...s[4]||(s[4]=[_r('<div class="rounded-2xl bg-black/25 p-4" data-v-1fad982c><h3 class="font-semibold" data-v-1fad982c> 左搖桿 </h3><p class="mt-3 leading-7 text-white/65" data-v-1fad982c><kbd data-v-1fad982c>W</kbd> 升高 　 <kbd data-v-1fad982c>S</kbd> 下降 <br data-v-1fad982c><kbd data-v-1fad982c>A</kbd> 左轉 　 <kbd data-v-1fad982c>D</kbd> 右轉 </p></div><div class="rounded-2xl bg-black/25 p-4" data-v-1fad982c><h3 class="font-semibold" data-v-1fad982c> 右搖桿 </h3><p class="mt-3 leading-7 text-white/65" data-v-1fad982c><kbd data-v-1fad982c>↑</kbd> 前進 　 <kbd data-v-1fad982c>↓</kbd> 後退 <br data-v-1fad982c><kbd data-v-1fad982c>←</kbd> 左移 　 <kbd data-v-1fad982c>→</kbd> 右移 </p></div>',2)])])),s[5]||(s[5]=b("div",{class:"mt-3 rounded-2xl bg-black/25 p-4 text-sm leading-7 text-white/65"},[b("kbd",null,"Space"),Rt(" 暫停／繼續 　 "),b("kbd",null,"R"),Rt(" 重置 　 "),b("kbd",null,"H"),Rt(" 顯示／隱藏說明 ")],-1)),s[6]||(s[6]=b("p",{class:"mt-5 text-sm leading-6 text-white/50"}," 這是無 GPS 水平位置訓練。鬆開方向輸入後，無人機會因慣性繼續漂移，需要提前反向修正。 ",-1))])]))}},KE=VE(YE,[["__scopeId","data-v-1fad982c"]]),jE={class:"rounded-2xl border border-white/10 bg-white/[0.035] p-4"},ZE={class:"mb-4 flex items-center justify-between"},JE={class:"grid grid-cols-2 gap-2"},QE={class:"text-xs text-white/45"},ew={class:"mt-1 text-lg font-semibold tabular-nums"},tw={class:"col-span-2 rounded-xl bg-black/25 p-3"},nw={class:"mt-1 flex items-baseline justify-between gap-3"},iw={class:"text-lg font-semibold"},sw={class:"text-sm tabular-nums text-cyan-200"},rw={class:"mt-3 flex items-center justify-between rounded-xl border border-white/10 px-3 py-2 text-sm"},ow={__name:"TelemetryPanel",props:{telemetry:Object,windMode:String},setup(n){return(e,t)=>(pe(),_e("section",jE,[b("div",ZE,[t[0]||(t[0]=b("div",null,[b("p",{class:"text-xs uppercase tracking-[0.2em] text-white/40"},"Telemetry"),b("h2",{class:"mt-1 font-semibold"},"飛行資料")],-1)),b("span",{class:Ct(["rounded-full px-2.5 py-1 text-xs",n.telemetry.outside?"bg-red-500/15 text-red-300":"bg-lime-300/10 text-lime-300"])},le(n.telemetry.outside?"OUT":"IN ZONE"),3)]),b("dl",JE,[(pe(!0),_e(ct,null,Vn([["高度",`${n.telemetry.altitude.toFixed(2)} m`],["速度",`${n.telemetry.speed.toFixed(2)} m/s`],["機頭",`${n.telemetry.yaw.toFixed(0)}°`],["離中心",`${n.telemetry.distance.toFixed(2)} m`]],i=>(pe(),_e("div",{key:i[0],class:"rounded-xl bg-black/25 p-3"},[b("dt",QE,le(i[0]),1),b("dd",ew,le(i[1]),1)]))),128)),b("div",tw,[t[1]||(t[1]=b("dt",{class:"text-xs text-white/45"},"環境風",-1)),b("dd",nw,[b("span",iw,le(n.windMode==="none"?"無風":"微風"),1),b("span",sw,le(n.windMode==="none"?"0.0 m/s":`${Oe(p1)(n.telemetry.windDirection)} ${n.telemetry.windSpeed.toFixed(1)} m/s · ${n.telemetry.windDirection.toFixed(0)}°`),1)])])]),b("div",rw,[t[2]||(t[2]=b("span",{class:"text-white/55"},"超界次數",-1)),b("strong",{class:Ct(["tabular-nums",n.telemetry.boundaryCount?"text-red-300":"text-white"])},le(n.telemetry.boundaryCount),3)])]))}},aw={class:"mb-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur"},lw={class:"flex flex-wrap items-center gap-2"},cw=["onUpdate:modelValue"],uw=["value"],dw={__name:"TopBar",props:{settings:Object,paused:Boolean},emits:["toggle-pause","reset","toggle-help","toggle-controller-debug","toggle-controller-calibration"],setup(n,{emit:e}){const t=n,i=e;return(s,r)=>(pe(),_e("header",aw,[r[5]||(r[5]=b("div",null,[b("p",{class:"text-[11px] font-semibold uppercase tracking-[0.28em] text-lime-300/80"},"v0.4 Controller Foundation · Third-person ATTI trainer"),b("h1",{class:"mt-1 text-xl font-semibold tracking-tight lg:text-2xl"},"Drone Orientation Trainer")],-1)),b("div",lw,[(pe(!0),_e(ct,null,Vn([{label:"訓練",key:"trainingMode",options:Oe($M)},{label:"風況",key:"windMode",options:Oe(XM)},{label:"相機高度",key:"cameraHeight",options:Oe(dh)},{label:"相機方位",key:"cameraBearing",options:Oe(jl)}],o=>(pe(),_e("label",{key:o.key,class:"flex items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm text-white/70"},[b("span",null,le(o.label),1),Qd(b("select",{"onUpdate:modelValue":a=>t.settings[o.key]=a,class:"bg-transparent text-white outline-none"},[(pe(!0),_e(ct,null,Vn(o.options,a=>(pe(),_e("option",{key:a.value,value:a.value,class:"bg-[#171a20]"},le(a.label),9,uw))),128))],8,cw),[[Am,t.settings[o.key]]])]))),128)),b("button",{class:"rounded-xl border border-lime-300/20 bg-lime-300/10 px-4 py-2 text-sm text-lime-100 hover:bg-lime-300/15",onClick:r[0]||(r[0]=o=>i("toggle-controller-calibration"))}," 🎯 控制器校正 "),b("button",{class:"rounded-xl border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm text-sky-100 hover:bg-sky-300/15",onClick:r[1]||(r[1]=o=>i("toggle-controller-debug"))}," 🎮 遙控器診斷 "),b("button",{class:"rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10",onClick:r[2]||(r[2]=o=>i("toggle-help"))}," 操作說明 "),b("button",{class:"rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10",onClick:r[3]||(r[3]=o=>i("toggle-pause"))},le(n.paused?"繼續":"暫停"),1),b("button",{class:"rounded-xl bg-lime-300 px-4 py-2 text-sm font-semibold text-black hover:bg-lime-200",onClick:r[4]||(r[4]=o=>i("reset"))}," 重置 ")])]))}},fh=We(!1),Jl=Cn({altitude:1.5,speed:0,yaw:0,distance:0,score:0,time:0,boundaryCount:0,outside:!1,windSpeed:0,windDirection:0}),fw=Ye(()=>fh.value?"已暫停":Jl.outside?"超出範圍":Jl.distance<1.2?"中心穩定":"修正漂移");function hw(){return{paused:fh,telemetry:Jl,statusText:fw}}const pw={class:"min-h-screen bg-[#090b10] text-white"},mw={class:"mx-auto flex min-h-screen max-w-[1800px] flex-col p-3 lg:p-5"},gw={class:"grid min-h-0 flex-1 gap-3 xl:grid-cols-[minmax(0,1fr)_320px]"},_w={class:"flex flex-col gap-3"},xw={key:0,class:"rounded-2xl border border-lime-300/15 bg-lime-300/4 p-4 text-sm text-white/65"},vw={__name:"DroneTrainer",setup(n){const e=YM(),t=hw(),i=We({throttle:0,yaw:0,pitch:0,roll:0}),s=We({reset:()=>{},togglePause:()=>{}}),r=We(!1),o=We(!1),a=We("keyboard");function l(d){i.value=d}function c(d){a.value=d}function u(d){s.value=d}return(d,f)=>(pe(),_e("main",pw,[b("div",mw,[Bt(dw,{settings:Oe(e),paused:Oe(t).paused.value,onTogglePause:s.value.togglePause,onReset:s.value.reset,onToggleHelp:f[0]||(f[0]=h=>Oe(e).showHelp=!Oe(e).showHelp),onToggleControllerDebug:f[1]||(f[1]=h=>r.value=!r.value),onToggleControllerCalibration:f[2]||(f[2]=h=>o.value=!o.value)},null,8,["settings","paused","onTogglePause","onReset"]),b("section",gw,[Bt(D1,{settings:Oe(e),game:Oe(t),"controller-calibrating":o.value,onInputReady:l,onControlSourceReady:c,onRegisterActions:u},null,8,["settings","game","controller-calibrating"]),b("aside",_w,[Bt(ow,{telemetry:Oe(t).telemetry,"wind-mode":Oe(e).windMode},null,8,["telemetry","wind-mode"]),Bt($1,{input:i.value,settings:Oe(e),"control-source":a.value},null,8,["input","settings","control-source"]),Oe(e).trainingMode==="randomHeading"?(pe(),_e("section",xw,[...f[6]||(f[6]=[b("p",{class:"font-semibold text-lime-200"}," v0.3 Random Heading ",-1),b("p",{class:"mt-2 leading-6"}," 機頭會在北、東、南、西之間隨機切換。 請保持機頭不動，只用 Pitch／Roll 前往指定的世界方向， 完成後立即進入下一題。 ",-1)])])):ht("",!0)])])]),Oe(e).showHelp?(pe(),kn(KE,{key:0,"control-source":a.value,onClose:f[3]||(f[3]=h=>Oe(e).showHelp=!1)},null,8,["control-source"])):ht("",!0),r.value?(pe(),kn(HE,{key:1,onClose:f[4]||(f[4]=h=>r.value=!1)})):ht("",!0),o.value?(pe(),kn(bg,{key:2,onClose:f[5]||(f[5]=h=>o.value=!1)})):ht("",!0)]))}},bw={__name:"App",setup(n){return(e,t)=>(pe(),kn(vw))}};Lm(bw).mount("#app");
