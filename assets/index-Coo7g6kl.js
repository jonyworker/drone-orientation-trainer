(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Jl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const xt={},Ms=[],Vn=()=>{},Sd=()=>!1,ko=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),zo=n=>n.startsWith("onUpdate:"),Xt=Object.assign,Ql=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ph=Object.prototype.hasOwnProperty,ht=(n,e)=>ph.call(n,e),qe=Array.isArray,Ss=n=>wr(n)==="[object Map]",Os=n=>wr(n)==="[object Set]",Dc=n=>wr(n)==="[object Date]",Je=n=>typeof n=="function",Rt=n=>typeof n=="string",Wn=n=>typeof n=="symbol",gt=n=>n!==null&&typeof n=="object",Ed=n=>(gt(n)||Je(n))&&Je(n.then)&&Je(n.catch),wd=Object.prototype.toString,wr=n=>wd.call(n),mh=n=>wr(n).slice(8,-1),Td=n=>wr(n)==="[object Object]",ec=n=>Rt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,rr=Jl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ho=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},gh=/-\w/g,Tn=Ho(n=>n.replace(gh,e=>e.slice(1).toUpperCase())),_h=/\B([A-Z])/g,Ji=Ho(n=>n.replace(_h,"-$1").toLowerCase()),Ad=Ho(n=>n.charAt(0).toUpperCase()+n.slice(1)),sa=Ho(n=>n?`on${Ad(n)}`:""),kn=(n,e)=>!Object.is(n,e),ho=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Rd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Cd=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Lc;const Vo=()=>Lc||(Lc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ht(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Rt(i)?yh(i):Ht(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Rt(n)||gt(n))return n}const xh=/;(?![^(]*\))/g,vh=/:([^]+)/,bh=/\/\*[^]*?\*\//g;function yh(n){const e={};return n.replace(bh,"").split(xh).forEach(t=>{if(t){const i=t.split(vh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Tt(n){let e="";if(Rt(n))e=n;else if(qe(n))for(let t=0;t<n.length;t++){const i=Tt(n[t]);i&&(e+=i+" ")}else if(gt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Mh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sh=Jl(Mh);function Pd(n){return!!n||n===""}function Eh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Bs(n[i],e[i]);return t}function Bs(n,e){if(n===e)return!0;let t=Dc(n),i=Dc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Wn(n),i=Wn(e),t||i)return n===e;if(t=qe(n),i=qe(e),t||i)return t&&i?Eh(n,e):!1;if(t=gt(n),i=gt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Bs(n[o],e[o]))return!1}}return String(n)===String(e)}function tc(n,e){return n.findIndex(t=>Bs(t,e))}const Dd=n=>!!(n&&n.__v_isRef===!0),ce=n=>Rt(n)?n:n==null?"":qe(n)||gt(n)&&(n.toString===wd||!Je(n.toString))?Dd(n)?ce(n.value):JSON.stringify(n,Ld,2):String(n),Ld=(n,e)=>Dd(e)?Ld(n,e.value):Ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[ra(i,r)+" =>"]=s,t),{})}:Os(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ra(t))}:Wn(e)?ra(e):gt(e)&&!qe(e)&&!Td(e)?String(e):e,ra=(n,e="")=>{var t;return Wn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Ft;class wh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ft&&(Ft.active?(this.parent=Ft,this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Ft;try{return Ft=this,e()}finally{Ft=t}}}on(){++this._on===1&&(this.prevScope=Ft,Ft=this)}off(){if(this._on>0&&--this._on===0){if(Ft===this)Ft=this.prevScope;else{let e=Ft;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Th(){return Ft}let bt;const oa=new WeakSet;class Id{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ft&&(Ft.active?Ft.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,oa.has(this)&&(oa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Nd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ic(this),Fd(this);const e=bt,t=An;bt=this,An=!0;try{return this.fn()}finally{Od(this),bt=e,An=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)sc(e);this.deps=this.depsTail=void 0,Ic(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?oa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Za(this)&&this.run()}get dirty(){return Za(this)}}let Ud=0,or,ar;function Nd(n,e=!1){if(n.flags|=8,e){n.next=ar,ar=n;return}n.next=or,or=n}function nc(){Ud++}function ic(){if(--Ud>0)return;if(ar){let e=ar;for(ar=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;or;){let e=or;for(or=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Fd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Od(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),sc(i),Ah(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Za(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Bd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===hr)||(n.globalVersion=hr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Za(n))))return;n.flags|=2;const e=n.dep,t=bt,i=An;bt=n,An=!0;try{Fd(n);const s=n.fn(n._value);(e.version===0||kn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{bt=t,An=i,Od(n),n.flags&=-3}}function sc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)sc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Ah(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let An=!0;const kd=[];function ui(){kd.push(An),An=!1}function di(){const n=kd.pop();An=n===void 0?!0:n}function Ic(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=bt;bt=void 0;try{e()}finally{bt=t}}}let hr=0;class Rh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!bt||!An||bt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==bt)t=this.activeLink=new Rh(bt,this),bt.deps?(t.prevDep=bt.depsTail,bt.depsTail.nextDep=t,bt.depsTail=t):bt.deps=bt.depsTail=t,zd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=bt.depsTail,t.nextDep=void 0,bt.depsTail.nextDep=t,bt.depsTail=t,bt.deps===t&&(bt.deps=i)}return t}trigger(e){this.version++,hr++,this.notify(e)}notify(e){nc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ic()}}}function zd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)zd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ja=new WeakMap,$i=Symbol(""),Qa=Symbol(""),pr=Symbol("");function Vt(n,e,t){if(An&&bt){let i=Ja.get(n);i||Ja.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new rc),s.map=i,s.key=t),s.track()}}function si(n,e,t,i,s,r){const o=Ja.get(n);if(!o){hr++;return}const a=l=>{l&&l.trigger()};if(nc(),e==="clear")o.forEach(a);else{const l=qe(n),c=l&&ec(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===pr||!Wn(f)&&f>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(pr)),e){case"add":l?c&&a(o.get("length")):(a(o.get($i)),Ss(n)&&a(o.get(Qa)));break;case"delete":l||(a(o.get($i)),Ss(n)&&a(o.get(Qa)));break;case"set":Ss(n)&&a(o.get($i));break}}ic()}function is(n){const e=ft(n);return e===n?e:(Vt(e,"iterate",pr),xn(n)?e:e.map(Pn))}function Go(n){return Vt(n=ft(n),"iterate",pr),n}function Fn(n,e){return fi(n)?Ps(qi(n)?Pn(e):e):Pn(e)}const Ch={__proto__:null,[Symbol.iterator](){return aa(this,Symbol.iterator,n=>Fn(this,n))},concat(...n){return is(this).concat(...n.map(e=>qe(e)?is(e):e))},entries(){return aa(this,"entries",n=>(n[1]=Fn(this,n[1]),n))},every(n,e){return Kn(this,"every",n,e,void 0,arguments)},filter(n,e){return Kn(this,"filter",n,e,t=>t.map(i=>Fn(this,i)),arguments)},find(n,e){return Kn(this,"find",n,e,t=>Fn(this,t),arguments)},findIndex(n,e){return Kn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Kn(this,"findLast",n,e,t=>Fn(this,t),arguments)},findLastIndex(n,e){return Kn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Kn(this,"forEach",n,e,void 0,arguments)},includes(...n){return la(this,"includes",n)},indexOf(...n){return la(this,"indexOf",n)},join(n){return is(this).join(n)},lastIndexOf(...n){return la(this,"lastIndexOf",n)},map(n,e){return Kn(this,"map",n,e,void 0,arguments)},pop(){return Ks(this,"pop")},push(...n){return Ks(this,"push",n)},reduce(n,...e){return Uc(this,"reduce",n,e)},reduceRight(n,...e){return Uc(this,"reduceRight",n,e)},shift(){return Ks(this,"shift")},some(n,e){return Kn(this,"some",n,e,void 0,arguments)},splice(...n){return Ks(this,"splice",n)},toReversed(){return is(this).toReversed()},toSorted(n){return is(this).toSorted(n)},toSpliced(...n){return is(this).toSpliced(...n)},unshift(...n){return Ks(this,"unshift",n)},values(){return aa(this,"values",n=>Fn(this,n))}};function aa(n,e,t){const i=Go(n),s=i[e]();return i!==n&&!xn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Ph=Array.prototype;function Kn(n,e,t,i,s,r){const o=Go(n),a=o!==n&&!xn(n),l=o[e];if(l!==Ph[e]){const d=l.apply(n,r);return a?Pn(d):d}let c=t;o!==n&&(a?c=function(d,f){return t.call(this,Fn(n,d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Uc(n,e,t,i){const s=Go(n),r=s!==n&&!xn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=Fn(n,c)),t.call(this,c,Fn(n,u),d,n)}):t.length>3&&(o=function(c,u,d){return t.call(this,c,u,d,n)}));const l=s[e](o,...i);return a?Fn(n,l):l}function la(n,e,t){const i=ft(n);Vt(i,"iterate",pr);const s=i[e](...t);return(s===-1||s===!1)&&lc(t[0])?(t[0]=ft(t[0]),i[e](...t)):s}function Ks(n,e,t=[]){ui(),nc();const i=ft(n)[e].apply(n,t);return ic(),di(),i}const Dh=Jl("__proto__,__v_isRef,__isVue"),Hd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Wn));function Lh(n){Wn(n)||(n=String(n));const e=ft(this);return Vt(e,"has",n),e.hasOwnProperty(n)}class Vd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Vh:$d:r?Xd:Wd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=qe(e);if(!s){let l;if(o&&(l=Ch[t]))return l;if(t==="hasOwnProperty")return Lh}const a=Reflect.get(e,t,Wt(e)?e:i);if((Wn(t)?Hd.has(t):Dh(t))||(s||Vt(e,"get",t),r))return a;if(Wt(a)){const l=o&&ec(t)?a:a.value;return s&&gt(l)?tl(l):l}return gt(a)?s?tl(a):Cn(a):a}}class Gd extends Vd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=qe(e)&&ec(t);if(!this._isShallow){const c=fi(r);if(!xn(i)&&!fi(i)&&(r=ft(r),i=ft(i)),!o&&Wt(r)&&!Wt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:ht(e,t),l=Reflect.set(e,t,i,Wt(e)?e:s);return e===ft(s)&&l&&(a?kn(i,r)&&si(e,"set",t,i):si(e,"add",t,i)),l}deleteProperty(e,t){const i=ht(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&si(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Wn(t)||!Hd.has(t))&&Vt(e,"has",t),i}ownKeys(e){return Vt(e,"iterate",qe(e)?"length":$i),Reflect.ownKeys(e)}}class Ih extends Vd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Uh=new Gd,Nh=new Ih,Fh=new Gd(!0);const el=n=>n,Br=n=>Reflect.getPrototypeOf(n);function Oh(n,e,t){return function(...i){const s=this.__v_raw,r=ft(s),o=Ss(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?el:e?Ps:Pn;return!e&&Vt(r,"iterate",l?Qa:$i),Xt(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function kr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Bh(n,e){const t={get(s){const r=this.__v_raw,o=ft(r),a=ft(s);n||(kn(s,a)&&Vt(o,"get",s),Vt(o,"get",a));const{has:l}=Br(o),c=e?el:n?Ps:Pn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Vt(ft(s),"iterate",$i),s.size},has(s){const r=this.__v_raw,o=ft(r),a=ft(s);return n||(kn(s,a)&&Vt(o,"has",s),Vt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ft(a),c=e?el:n?Ps:Pn;return!n&&Vt(l,"iterate",$i),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return Xt(t,n?{add:kr("add"),set:kr("set"),delete:kr("delete"),clear:kr("clear")}:{add(s){const r=ft(this),o=Br(r),a=ft(s),l=!e&&!xn(s)&&!fi(s)?a:s;return o.has.call(r,l)||kn(s,l)&&o.has.call(r,s)||kn(a,l)&&o.has.call(r,a)||(r.add(l),si(r,"add",l,l)),this},set(s,r){!e&&!xn(r)&&!fi(r)&&(r=ft(r));const o=ft(this),{has:a,get:l}=Br(o);let c=a.call(o,s);c||(s=ft(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?kn(r,u)&&si(o,"set",s,r):si(o,"add",s,r),this},delete(s){const r=ft(this),{has:o,get:a}=Br(r);let l=o.call(r,s);l||(s=ft(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&si(r,"delete",s,void 0),c},clear(){const s=ft(this),r=s.size!==0,o=s.clear();return r&&si(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Oh(s,n,e)}),t}function oc(n,e){const t=Bh(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ht(t,s)&&s in i?t:i,s,r)}const kh={get:oc(!1,!1)},zh={get:oc(!1,!0)},Hh={get:oc(!0,!1)};const Wd=new WeakMap,Xd=new WeakMap,$d=new WeakMap,Vh=new WeakMap;function Gh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cn(n){return fi(n)?n:ac(n,!1,Uh,kh,Wd)}function Wh(n){return ac(n,!1,Fh,zh,Xd)}function tl(n){return ac(n,!0,Nh,Hh,$d)}function ac(n,e,t,i,s){if(!gt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Gh(mh(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function qi(n){return fi(n)?qi(n.__v_raw):!!(n&&n.__v_isReactive)}function fi(n){return!!(n&&n.__v_isReadonly)}function xn(n){return!!(n&&n.__v_isShallow)}function lc(n){return n?!!n.__v_raw:!1}function ft(n){const e=n&&n.__v_raw;return e?ft(e):n}function Xh(n){return!ht(n,"__v_skip")&&Object.isExtensible(n)&&Rd(n,"__v_skip",!0),n}const Pn=n=>gt(n)?Cn(n):n,Ps=n=>gt(n)?tl(n):n;function Wt(n){return n?n.__v_isRef===!0:!1}function $e(n){return $h(n,!1)}function $h(n,e){return Wt(n)?n:new qh(n,e)}class qh{constructor(e,t){this.dep=new rc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ft(e),this._value=t?e:Pn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||xn(e)||fi(e);e=i?e:ft(e),kn(e,t)&&(this._rawValue=e,this._value=i?e:Pn(e),this.dep.trigger())}}function Be(n){return Wt(n)?n.value:n}const Yh={get:(n,e,t)=>e==="__v_raw"?n:Be(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Wt(s)&&!Wt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function qd(n){return qi(n)?n:new Proxy(n,Yh)}class Kh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new rc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=hr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&bt!==this)return Nd(this,!0),!0}get value(){const e=this.dep.track();return Bd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function jh(n,e,t=!1){let i,s;return Je(n)?i=n:(i=n.get,s=n.set),new Kh(i,s,t)}const zr={},So=new WeakMap;let Bi;function Zh(n,e=!1,t=Bi){if(t){let i=So.get(t);i||So.set(t,i=[]),i.push(n)}}function Jh(n,e,t=xt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=y=>s?y:xn(y)||s===!1||s===0?ri(y,1):ri(y);let u,d,f,p,g=!1,b=!1;if(Wt(n)?(d=()=>n.value,g=xn(n)):qi(n)?(d=()=>c(n),g=!0):qe(n)?(b=!0,g=n.some(y=>qi(y)||xn(y)),d=()=>n.map(y=>{if(Wt(y))return y.value;if(qi(y))return c(y);if(Je(y))return l?l(y,2):y()})):Je(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){ui();try{f()}finally{di()}}const y=Bi;Bi=u;try{return l?l(n,3,[p]):n(p)}finally{Bi=y}}:d=Vn,e&&s){const y=d,F=s===!0?1/0:s;d=()=>ri(y(),F)}const m=Th(),h=()=>{u.stop(),m&&m.active&&Ql(m.effects,u)};if(r&&e){const y=e;e=(...F)=>{const D=y(...F);return h(),D}}let A=b?new Array(n.length).fill(zr):zr;const T=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const F=u.run();if(y||s||g||(b?F.some((D,R)=>kn(D,A[R])):kn(F,A))){f&&f();const D=Bi;Bi=u;try{const R=[F,A===zr?void 0:b&&A[0]===zr?[]:A,p];A=F,l?l(e,3,R):e(...R)}finally{Bi=D}}}else u.run()};return a&&a(T),u=new Id(d),u.scheduler=o?()=>o(T,!1):T,p=y=>Zh(y,!1,u),f=u.onStop=()=>{const y=So.get(u);if(y){if(l)l(y,4);else for(const F of y)F();So.delete(u)}},e?i?T(!0):A=u.run():o?o(T.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function ri(n,e=1/0,t){if(e<=0||!gt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Wt(n))ri(n.value,e,t);else if(qe(n))for(let i=0;i<n.length;i++)ri(n[i],e,t);else if(Os(n)||Ss(n))n.forEach(i=>{ri(i,e,t)});else if(Td(n)){for(const i in n)ri(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ri(n[i],e,t)}return n}function Tr(n,e,t,i){try{return i?n(...i):n()}catch(s){Wo(s,e,t)}}function Dn(n,e,t,i){if(Je(n)){const s=Tr(n,e,t,i);return s&&Ed(s)&&s.catch(r=>{Wo(r,e,t)}),s}if(qe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Dn(n[r],e,t,i));return s}}function Wo(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){ui(),Tr(r,null,10,[n,l,c]),di();return}}Qh(n,t,s,i,o)}function Qh(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const jt=[];let Nn=-1;const Es=[];let yi=null,xs=0;const Yd=Promise.resolve();let Eo=null;function cc(n){const e=Eo||Yd;return n?e.then(this?n.bind(this):n):e}function ep(n){let e=Nn+1,t=jt.length;for(;e<t;){const i=e+t>>>1,s=jt[i],r=mr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function uc(n){if(!(n.flags&1)){const e=mr(n),t=jt[jt.length-1];!t||!(n.flags&2)&&e>=mr(t)?jt.push(n):jt.splice(ep(e),0,n),n.flags|=1,Kd()}}function Kd(){Eo||(Eo=Yd.then(Zd))}function tp(n){qe(n)?Es.push(...n):yi&&n.id===-1?yi.splice(xs+1,0,n):n.flags&1||(Es.push(n),n.flags|=1),Kd()}function Nc(n,e,t=Nn+1){for(;t<jt.length;t++){const i=jt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;jt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function jd(n){if(Es.length){const e=[...new Set(Es)].sort((t,i)=>mr(t)-mr(i));if(Es.length=0,yi){yi.push(...e);return}for(yi=e,xs=0;xs<yi.length;xs++){const t=yi[xs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}yi=null,xs=0}}const mr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Zd(n){try{for(Nn=0;Nn<jt.length;Nn++){const e=jt[Nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Tr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nn<jt.length;Nn++){const e=jt[Nn];e&&(e.flags&=-2)}Nn=-1,jt.length=0,jd(),Eo=null,(jt.length||Es.length)&&Zd()}}let _n=null,Jd=null;function wo(n){const e=_n;return _n=n,Jd=n&&n.type.__scopeId||null,e}function np(n,e=_n,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&$c(-1);const r=wo(e),o=Yi.length;let a;try{a=n(...s)}finally{for(let l=Yi.length;l>o;l--)Ef();wo(r),i._d&&$c(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Qd(n,e){if(_n===null)return n;const t=Yo(_n),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=xt]=e[s];r&&(Je(r)&&(r={mounted:r,updated:r}),r.deep&&ri(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Pi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ui(),Dn(l,t,8,[n.el,a,n,e]),di())}}function ip(n,e){if(Zt){let t=Zt.provides;const i=Zt.parent&&Zt.parent.provides;i===t&&(t=Zt.provides=Object.create(i)),t[n]=e}}function po(n,e,t=!1){const i=Jp();if(i||ws){let s=ws?ws._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Je(e)?e.call(i&&i.proxy):e}}const sp=Symbol.for("v-scx"),rp=()=>po(sp);function mn(n,e,t){return ef(n,e,t)}function ef(n,e,t=xt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Xt({},t),l=e&&i||!e&&r!=="post";let c;if(xr){if(r==="sync"){const p=rp();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Vn,p.resume=Vn,p.pause=Vn,p}}const u=Zt;a.call=(p,g,b)=>Dn(p,u,g,b);let d=!1;r==="post"?a.scheduler=p=>{en(p,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(p,g)=>{g?p():uc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Jh(n,e,a);return xr&&(c?c.push(f):l&&f()),f}function op(n,e,t){const i=this.proxy,s=Rt(n)?n.includes(".")?tf(i,n):()=>i[n]:n.bind(i,i);let r;Je(e)?r=e:(r=e.handler,t=e);const o=Ar(this),a=ef(s,r.bind(i),t);return o(),a}function tf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const ap=Symbol("_vte"),lp=n=>n.__isTeleport,ca=Symbol("_leaveCb");function dc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,dc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function nf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Fc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const To=new WeakMap;function lr(n,e,t,i,s=!1){if(qe(n)){n.forEach((b,m)=>lr(b,e&&(qe(e)?e[m]:e),t,i,s));return}if(cr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&lr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Yo(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===xt?a.refs={}:a.refs,d=a.setupState,f=ft(d),p=d===xt?Sd:b=>Fc(u,b)?!1:ht(f,b),g=(b,m)=>!(m&&Fc(u,m));if(c!=null&&c!==l){if(Oc(e),Rt(c))u[c]=null,p(c)&&(d[c]=null);else if(Wt(c)){const b=e;g(c,b.k)&&(c.value=null),b.k&&(u[b.k]=null)}}if(Je(l))Tr(l,a,12,[o,u]);else{const b=Rt(l),m=Wt(l);if(b||m){const h=()=>{if(n.f){const A=b?p(l)?d[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)qe(A)&&Ql(A,r);else if(qe(A))A.includes(r)||A.push(r);else if(b)u[l]=[r],p(l)&&(d[l]=u[l]);else{const T=[r];g(l,n.k)&&(l.value=T),n.k&&(u[n.k]=T)}}else b?(u[l]=o,p(l)&&(d[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const A=()=>{h(),To.delete(n)};A.id=-1,To.set(n,A),en(A,t)}else Oc(n),h()}}}function Oc(n){const e=To.get(n);e&&(e.flags|=8,To.delete(n))}Vo().requestIdleCallback;Vo().cancelIdleCallback;const cr=n=>!!n.type.__asyncLoader,sf=n=>n.type.__isKeepAlive;function cp(n,e){rf(n,"a",e)}function up(n,e){rf(n,"da",e)}function rf(n,e,t=Zt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Xo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)sf(s.parent.vnode)&&dp(i,e,t,s),s=s.parent}}function dp(n,e,t,i){const s=Xo(e,n,i,!0);of(()=>{Ql(i[e],s)},t)}function Xo(n,e,t=Zt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{ui();const a=Ar(t),l=Dn(e,t,n,o);return a(),di(),l});return i?s.unshift(r):s.push(r),r}}const hi=n=>(e,t=Zt)=>{(!xr||n==="sp")&&Xo(n,(...i)=>e(...i),t)},fp=hi("bm"),ks=hi("m"),hp=hi("bu"),pp=hi("u"),zs=hi("bum"),of=hi("um"),mp=hi("sp"),gp=hi("rtg"),_p=hi("rtc");function xp(n,e=Zt){Xo("ec",n,e)}const vp=Symbol.for("v-ndc");function En(n,e,t,i){let s;const r=t,o=qe(n);if(o||Rt(n)){const a=o&&qi(n);let l=!1,c=!1;a&&(l=!xn(n),c=fi(n),n=Go(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=e(l?c?Ps(Pn(n[u])):Pn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(gt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const nl=n=>n?Rf(n)?Yo(n):nl(n.parent):null,ur=Xt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>nl(n.parent),$root:n=>nl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>lf(n),$forceUpdate:n=>n.f||(n.f=()=>{uc(n.update)}),$nextTick:n=>n.n||(n.n=cc.bind(n.proxy)),$watch:n=>op.bind(n)}),ua=(n,e)=>n!==xt&&!n.__isScriptSetup&&ht(n,e),bp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ua(i,e))return o[e]=1,i[e];if(s!==xt&&ht(s,e))return o[e]=2,s[e];if(ht(r,e))return o[e]=3,r[e];if(t!==xt&&ht(t,e))return o[e]=4,t[e];il&&(o[e]=0)}}const c=ur[e];let u,d;if(c)return e==="$attrs"&&Vt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==xt&&ht(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,ht(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ua(s,e)?(s[e]=t,!0):i!==xt&&ht(i,e)?(i[e]=t,!0):ht(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==xt&&a[0]!=="$"&&ht(n,a)||ua(e,a)||ht(r,a)||ht(i,a)||ht(ur,a)||ht(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ht(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Bc(n){return qe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let il=!0;function yp(n){const e=lf(n),t=n.proxy,i=n.ctx;il=!1,e.beforeCreate&&kc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:g,activated:b,deactivated:m,beforeDestroy:h,beforeUnmount:A,destroyed:T,unmounted:y,render:F,renderTracked:D,renderTriggered:R,errorCaptured:I,serverPrefetch:S,expose:x,inheritAttrs:P,components:q,directives:V,filters:$}=e;if(c&&Mp(c,i,null),o)for(const ee in o){const H=o[ee];Je(H)&&(i[ee]=H.bind(t))}if(s){const ee=s.call(t,t);gt(ee)&&(n.data=Cn(ee))}if(il=!0,r)for(const ee in r){const H=r[ee],pe=Je(H)?H.bind(t,t):Je(H.get)?H.get.bind(t,t):Vn,Se=!Je(H)&&Je(H.set)?H.set.bind(t):Vn,De=je({get:pe,set:Se});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>De.value,set:ze=>De.value=ze})}if(a)for(const ee in a)af(a[ee],i,t,ee);if(l){const ee=Je(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(H=>{ip(H,ee[H])})}u&&kc(u,n,"c");function X(ee,H){qe(H)?H.forEach(pe=>ee(pe.bind(t))):H&&ee(H.bind(t))}if(X(fp,d),X(ks,f),X(hp,p),X(pp,g),X(cp,b),X(up,m),X(xp,I),X(_p,D),X(gp,R),X(zs,A),X(of,y),X(mp,S),qe(x))if(x.length){const ee=n.exposed||(n.exposed={});x.forEach(H=>{Object.defineProperty(ee,H,{get:()=>t[H],set:pe=>t[H]=pe,enumerable:!0})})}else n.exposed||(n.exposed={});F&&n.render===Vn&&(n.render=F),P!=null&&(n.inheritAttrs=P),q&&(n.components=q),V&&(n.directives=V),S&&nf(n)}function Mp(n,e,t=Vn){qe(n)&&(n=sl(n));for(const i in n){const s=n[i];let r;gt(s)?"default"in s?r=po(s.from||i,s.default,!0):r=po(s.from||i):r=po(s),Wt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function kc(n,e,t){Dn(qe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function af(n,e,t,i){let s=i.includes(".")?tf(t,i):()=>t[i];if(Rt(n)){const r=e[n];Je(r)&&mn(s,r)}else if(Je(n))mn(s,n.bind(t));else if(gt(n))if(qe(n))n.forEach(r=>af(r,e,t,i));else{const r=Je(n.handler)?n.handler.bind(t):e[n.handler];Je(r)&&mn(s,r,n)}}function lf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Ao(l,c,o,!0)),Ao(l,e,o)),gt(e)&&r.set(e,l),l}function Ao(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Ao(n,r,t,!0),s&&s.forEach(o=>Ao(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Sp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Sp={data:zc,props:Hc,emits:Hc,methods:nr,computed:nr,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:nr,directives:nr,watch:wp,provide:zc,inject:Ep};function zc(n,e){return e?n?function(){return Xt(Je(n)?n.call(this,this):n,Je(e)?e.call(this,this):e)}:e:n}function Ep(n,e){return nr(sl(n),sl(e))}function sl(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function qt(n,e){return n?[...new Set([].concat(n,e))]:e}function nr(n,e){return n?Xt(Object.create(null),n,e):e}function Hc(n,e){return n?qe(n)&&qe(e)?[...new Set([...n,...e])]:Xt(Object.create(null),Bc(n),Bc(e??{})):e}function wp(n,e){if(!n)return e;if(!e)return n;const t=Xt(Object.create(null),n);for(const i in e)t[i]=qt(n[i],e[i]);return t}function cf(){return{app:null,config:{isNativeTag:Sd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tp=0;function Ap(n,e){return function(i,s=null){Je(i)||(i=Xt({},i)),s!=null&&!gt(s)&&(s=null);const r=cf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Tp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:sm,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&Je(u.install)?(o.add(u),u.install(c,...d)):Je(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const p=c._ceVNode||Ot(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,Yo(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Dn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=ws;ws=c;try{return u()}finally{ws=d}}};return c}}let ws=null;const Rp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Tn(e)}Modifiers`]||n[`${Ji(e)}Modifiers`];function Cp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||xt;let s=t;const r=e.startsWith("update:"),o=r&&Rp(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Rt(u)?u.trim():u)),o.number&&(s=t.map(Cd)));let a,l=i[a=sa(e)]||i[a=sa(Tn(e))];!l&&r&&(l=i[a=sa(Ji(e))]),l&&Dn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Dn(c,n,6,s)}}const Pp=new WeakMap;function uf(n,e,t=!1){const i=t?Pp:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Je(n)){const l=c=>{const u=uf(c,e,!0);u&&(a=!0,Xt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(gt(n)&&i.set(n,null),null):(qe(r)?r.forEach(l=>o[l]=null):Xt(o,r),gt(n)&&i.set(n,o),o)}function $o(n,e){return!n||!ko(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),ht(n,e[0].toLowerCase()+e.slice(1))||ht(n,Ji(e))||ht(n,e))}function Vc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:p,ctx:g,inheritAttrs:b}=n,m=wo(n);let h,A;try{if(t.shapeFlag&4){const y=s||i,F=y;h=On(c.call(F,y,u,d,p,f,g)),A=a}else{const y=e;h=On(y.length>1?y(d,{attrs:a,slots:o,emit:l}):y(d,null)),A=e.props?a:Dp(a)}}catch(y){Yi.length=0,Wo(y,n,1),h=Ot(Ti)}let T=h;if(A&&b!==!1){const y=Object.keys(A),{shapeFlag:F}=T;y.length&&F&7&&(r&&y.some(zo)&&(A=Lp(A,r)),T=Ds(T,A,!1,!0))}return t.dirs&&(T=Ds(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&dc(T,t.transition),h=T,wo(m),h}const Dp=n=>{let e;for(const t in n)(t==="class"||t==="style"||ko(t))&&((e||(e={}))[t]=n[t]);return e},Lp=(n,e)=>{const t={};for(const i in n)(!zo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Ip(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Gc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(df(o,i,f)&&!$o(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Gc(i,o,c):!0:!!o;return!1}function Gc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(df(e,n,r)&&!$o(t,r))return!0}return!1}function df(n,e,t){const i=n[t],s=e[t];return t==="style"&&gt(i)&&gt(s)?!Bs(i,s):i!==s}function Up({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const ff={},hf=()=>Object.create(ff),pf=n=>Object.getPrototypeOf(n)===ff;function Np(n,e,t,i=!1){const s={},r=hf();n.propsDefaults=Object.create(null),mf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Wh(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Fp(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ft(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if($o(n.emitsOptions,f))continue;const p=e[f];if(l)if(ht(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const g=Tn(f);s[g]=rl(l,a,g,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{mf(n,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!ht(e,d)&&((u=Ji(d))===d||!ht(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=rl(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!ht(e,d))&&(delete r[d],c=!0)}c&&si(n.attrs,"set","")}function mf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(rr(l))continue;const c=e[l];let u;s&&ht(s,u=Tn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:$o(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ft(t),c=a||xt;for(let u=0;u<r.length;u++){const d=r[u];t[d]=rl(s,l,d,c[d],n,!ht(c,d))}}return o}function rl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=ht(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Je(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Ar(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ji(t))&&(i=!0))}return i}const Op=new WeakMap;function gf(n,e,t=!1){const i=t?Op:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Je(n)){const u=d=>{l=!0;const[f,p]=gf(d,e,!0);Xt(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return gt(n)&&i.set(n,Ms),Ms;if(qe(r))for(let u=0;u<r.length;u++){const d=Tn(r[u]);Wc(d)&&(o[d]=xt)}else if(r)for(const u in r){const d=Tn(u);if(Wc(d)){const f=r[u],p=o[d]=qe(f)||Je(f)?{type:f}:Xt({},f),g=p.type;let b=!1,m=!0;if(qe(g))for(let h=0;h<g.length;++h){const A=g[h],T=Je(A)&&A.name;if(T==="Boolean"){b=!0;break}else T==="String"&&(m=!1)}else b=Je(g)&&g.name==="Boolean";p[0]=b,p[1]=m,(b||ht(p,"default"))&&a.push(d)}}const c=[o,a];return gt(n)&&i.set(n,c),c}function Wc(n){return n[0]!=="$"&&!rr(n)}const fc=n=>n==="_"||n==="_ctx"||n==="$stable",hc=n=>qe(n)?n.map(On):[On(n)],Bp=(n,e,t)=>{if(e._n)return e;const i=np((...s)=>hc(e(...s)),t);return i._c=!1,i},_f=(n,e,t)=>{const i=n._ctx;for(const s in n){if(fc(s))continue;const r=n[s];if(Je(r))e[s]=Bp(s,r,i);else if(r!=null){const o=hc(r);e[s]=()=>o}}},xf=(n,e)=>{const t=hc(e);n.slots.default=()=>t},vf=(n,e,t)=>{for(const i in e)(t||!fc(i))&&(n[i]=e[i])},kp=(n,e,t)=>{const i=n.slots=hf();if(n.vnode.shapeFlag&32){const s=e._;s?(vf(i,e,t),t&&Rd(i,"_",s,!0)):_f(e,i)}else e&&xf(n,e)},zp=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=xt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:vf(s,e,t):(r=!e.$stable,_f(e,s)),o=e}else e&&(xf(n,e),o={default:1});if(r)for(const a in s)!fc(a)&&o[a]==null&&delete s[a]},en=Xp;function Hp(n){return Vp(n)}function Vp(n,e){const t=Vo();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=Vn,insertStaticContent:g}=n,b=(C,N,M,se=null,Z=null,te=null,J=void 0,re=null,j=!!N.dynamicChildren)=>{if(C===N)return;C&&!js(C,N)&&(se=be(C),ze(C,Z,te,!0),C=null),N.patchFlag===-2&&(j=!1,N.dynamicChildren=null);const{type:Y,ref:we,shapeFlag:w}=N;switch(Y){case qo:m(C,N,M,se);break;case Ti:h(C,N,M,se);break;case mo:C==null&&A(N,M,se,J);break;case rt:q(C,N,M,se,Z,te,J,re,j);break;default:w&1?F(C,N,M,se,Z,te,J,re,j):w&6?V(C,N,M,se,Z,te,J,re,j):(w&64||w&128)&&Y.process(C,N,M,se,Z,te,J,re,j,ke)}we!=null&&Z?lr(we,C&&C.ref,te,N||C,!N):we==null&&C&&C.ref!=null&&lr(C.ref,null,te,C,!0)},m=(C,N,M,se)=>{if(C==null)i(N.el=a(N.children),M,se);else{const Z=N.el=C.el;N.children!==C.children&&c(Z,N.children)}},h=(C,N,M,se)=>{C==null?i(N.el=l(N.children||""),M,se):N.el=C.el},A=(C,N,M,se)=>{[C.el,C.anchor]=g(C.children,N,M,se,C.el,C.anchor)},T=({el:C,anchor:N},M,se)=>{let Z;for(;C&&C!==N;)Z=f(C),i(C,M,se),C=Z;i(N,M,se)},y=({el:C,anchor:N})=>{let M;for(;C&&C!==N;)M=f(C),s(C),C=M;s(N)},F=(C,N,M,se,Z,te,J,re,j)=>{if(N.type==="svg"?J="svg":N.type==="math"&&(J="mathml"),C==null)D(N,M,se,Z,te,J,re,j);else{const Y=C.el&&C.el._isVueCE?C.el:null;try{Y&&Y._beginPatch(),S(C,N,Z,te,J,re,j)}finally{Y&&Y._endPatch()}}},D=(C,N,M,se,Z,te,J,re)=>{let j,Y;const{props:we,shapeFlag:w,transition:_,dirs:O}=C;if(j=C.el=o(C.type,te,we&&we.is,we),w&8?u(j,C.children):w&16&&I(C.children,j,null,se,Z,da(C,te),J,re),O&&Pi(C,null,se,"created"),R(j,C,C.scopeId,J,se),we){for(const Q in we)Q!=="value"&&!rr(Q)&&r(j,Q,null,we[Q],te,se);"value"in we&&r(j,"value",null,we.value,te),(Y=we.onVnodeBeforeMount)&&Ln(Y,se,C)}O&&Pi(C,null,se,"beforeMount");const W=Gp(Z,_);W&&_.beforeEnter(j),i(j,N,M),((Y=we&&we.onVnodeMounted)||W||O)&&en(()=>{Y&&Ln(Y,se,C),W&&_.enter(j),O&&Pi(C,null,se,"mounted")},Z)},R=(C,N,M,se,Z)=>{if(M&&p(C,M),se)for(let te=0;te<se.length;te++)p(C,se[te]);if(Z){let te=Z.subTree;if(N===te||Sf(te.type)&&(te.ssContent===N||te.ssFallback===N)){const J=Z.vnode;R(C,J,J.scopeId,J.slotScopeIds,Z.parent)}}},I=(C,N,M,se,Z,te,J,re,j=0)=>{for(let Y=j;Y<C.length;Y++){const we=C[Y]=re?ii(C[Y]):On(C[Y]);b(null,we,N,M,se,Z,te,J,re)}},S=(C,N,M,se,Z,te,J)=>{const re=N.el=C.el;let{patchFlag:j,dynamicChildren:Y,dirs:we}=N;j|=C.patchFlag&16;const w=C.props||xt,_=N.props||xt;let O;if(M&&Di(M,!1),(O=_.onVnodeBeforeUpdate)&&Ln(O,M,N,C),we&&Pi(N,C,M,"beforeUpdate"),M&&Di(M,!0),Y&&(!C.dynamicChildren||C.dynamicChildren.length!==Y.length)&&(j=0,J=!1,Y=null),(w.innerHTML&&_.innerHTML==null||w.textContent&&_.textContent==null)&&u(re,""),Y?x(C.dynamicChildren,Y,re,M,se,da(N,Z),te):J||H(C,N,re,null,M,se,da(N,Z),te,!1),j>0){if(j&16)P(re,w,_,M,Z);else if(j&2&&w.class!==_.class&&r(re,"class",null,_.class,Z),j&4&&r(re,"style",w.style,_.style,Z),j&8){const W=N.dynamicProps;for(let Q=0;Q<W.length;Q++){const G=W[Q],ve=w[G],de=_[G];(de!==ve||G==="value")&&r(re,G,ve,de,Z,M)}}j&1&&C.children!==N.children&&u(re,N.children)}else!J&&Y==null&&P(re,w,_,M,Z);((O=_.onVnodeUpdated)||we)&&en(()=>{O&&Ln(O,M,N,C),we&&Pi(N,C,M,"updated")},se)},x=(C,N,M,se,Z,te,J)=>{for(let re=0;re<N.length;re++){const j=C[re],Y=N[re],we=j.el&&(j.type===rt||!js(j,Y)||j.shapeFlag&198)?d(j.el):M;b(j,Y,we,null,se,Z,te,J,!0)}},P=(C,N,M,se,Z)=>{if(N!==M){if(N!==xt)for(const te in N)!rr(te)&&!(te in M)&&r(C,te,N[te],null,Z,se);for(const te in M){if(rr(te))continue;const J=M[te],re=N[te];J!==re&&te!=="value"&&r(C,te,re,J,Z,se)}"value"in M&&r(C,"value",N.value,M.value,Z)}},q=(C,N,M,se,Z,te,J,re,j)=>{const Y=N.el=C?C.el:a(""),we=N.anchor=C?C.anchor:a("");let{patchFlag:w,dynamicChildren:_,slotScopeIds:O}=N;O&&(re=re?re.concat(O):O),C==null?(i(Y,M,se),i(we,M,se),I(N.children||[],M,we,Z,te,J,re,j)):w>0&&w&64&&_&&C.dynamicChildren&&C.dynamicChildren.length===_.length?(x(C.dynamicChildren,_,M,Z,te,J,re),(N.key!=null||Z&&N===Z.subTree)&&bf(C,N,!0)):H(C,N,M,we,Z,te,J,re,j)},V=(C,N,M,se,Z,te,J,re,j)=>{N.slotScopeIds=re,C==null?N.shapeFlag&512?Z.ctx.activate(N,M,se,J,j):$(N,M,se,Z,te,J,j):ne(C,N,j)},$=(C,N,M,se,Z,te,J)=>{const re=C.component=Zp(C,se,Z);if(sf(C)&&(re.ctx.renderer=ke),Qp(re,!1,J),re.asyncDep){if(Z&&Z.registerDep(re,X,J),!C.el){const j=re.subTree=Ot(Ti);h(null,j,N,M),C.placeholder=j.el}}else X(re,C,N,M,Z,te,J)},ne=(C,N,M)=>{const se=N.component=C.component;if(Ip(C,N,M))if(se.asyncDep&&!se.asyncResolved){ee(se,N,M);return}else se.next=N,se.update();else N.el=C.el,se.vnode=N},X=(C,N,M,se,Z,te,J)=>{const re=()=>{if(C.isMounted){let{next:w,bu:_,u:O,parent:W,vnode:Q}=C;{const Ce=yf(C);if(Ce){w&&(w.el=Q.el,ee(C,w,J)),Ce.asyncDep.then(()=>{en(()=>{C.isUnmounted||Y()},Z)});return}}let G=w,ve;Di(C,!1),w?(w.el=Q.el,ee(C,w,J)):w=Q,_&&ho(_),(ve=w.props&&w.props.onVnodeBeforeUpdate)&&Ln(ve,W,w,Q),Di(C,!0);const de=Vc(C),Te=C.subTree;C.subTree=de,b(Te,de,d(Te.el),be(Te),C,Z,te),w.el=de.el,G===null&&Up(C,de.el),O&&en(O,Z),(ve=w.props&&w.props.onVnodeUpdated)&&en(()=>Ln(ve,W,w,Q),Z)}else{let w;const{el:_,props:O}=N,{bm:W,m:Q,parent:G,root:ve,type:de}=C,Te=cr(N);Di(C,!1),W&&ho(W),!Te&&(w=O&&O.onVnodeBeforeMount)&&Ln(w,G,N),Di(C,!0);{ve.ce&&ve.ce._hasShadowRoot()&&ve.ce._injectChildStyle(de,C.parent?C.parent.type:void 0);const Ce=C.subTree=Vc(C);b(null,Ce,M,se,C,Z,te),N.el=Ce.el}if(Q&&en(Q,Z),!Te&&(w=O&&O.onVnodeMounted)){const Ce=N;en(()=>Ln(w,G,Ce),Z)}(N.shapeFlag&256||G&&cr(G.vnode)&&G.vnode.shapeFlag&256)&&C.a&&en(C.a,Z),C.isMounted=!0,N=M=se=null}};C.scope.on();const j=C.effect=new Id(re);C.scope.off();const Y=C.update=j.run.bind(j),we=C.job=j.runIfDirty.bind(j);we.i=C,we.id=C.uid,j.scheduler=()=>uc(we),Di(C,!0),Y()},ee=(C,N,M)=>{N.component=C;const se=C.vnode.props;C.vnode=N,C.next=null,Fp(C,N.props,se,M),zp(C,N.children,M),ui(),Nc(C),di()},H=(C,N,M,se,Z,te,J,re,j=!1)=>{const Y=C&&C.children,we=C?C.shapeFlag:0,w=N.children,{patchFlag:_,shapeFlag:O}=N;if(_>0){if(_&128){Se(Y,w,M,se,Z,te,J,re,j);return}else if(_&256){pe(Y,w,M,se,Z,te,J,re,j);return}}O&8?(we&16&&Ae(Y,Z,te),w!==Y&&u(M,w)):we&16?O&16?Se(Y,w,M,se,Z,te,J,re,j):Ae(Y,Z,te,!0):(we&8&&u(M,""),O&16&&I(w,M,se,Z,te,J,re,j))},pe=(C,N,M,se,Z,te,J,re,j)=>{C=C||Ms,N=N||Ms;const Y=C.length,we=N.length,w=Math.min(Y,we);let _;for(_=0;_<w;_++){const O=N[_]=j?ii(N[_]):On(N[_]);b(C[_],O,M,null,Z,te,J,re,j)}Y>we?Ae(C,Z,te,!0,!1,w):I(N,M,se,Z,te,J,re,j,w)},Se=(C,N,M,se,Z,te,J,re,j)=>{let Y=0;const we=N.length;let w=C.length-1,_=we-1;for(;Y<=w&&Y<=_;){const O=C[Y],W=N[Y]=j?ii(N[Y]):On(N[Y]);if(js(O,W))b(O,W,M,null,Z,te,J,re,j);else break;Y++}for(;Y<=w&&Y<=_;){const O=C[w],W=N[_]=j?ii(N[_]):On(N[_]);if(js(O,W))b(O,W,M,null,Z,te,J,re,j);else break;w--,_--}if(Y>w){if(Y<=_){const O=_+1,W=O<we?N[O].el:se;for(;Y<=_;)b(null,N[Y]=j?ii(N[Y]):On(N[Y]),M,W,Z,te,J,re,j),Y++}}else if(Y>_)for(;Y<=w;)ze(C[Y],Z,te,!0),Y++;else{const O=Y,W=Y,Q=new Map;for(Y=W;Y<=_;Y++){const Ie=N[Y]=j?ii(N[Y]):On(N[Y]);Ie.key!=null&&Q.set(Ie.key,Y)}let G,ve=0;const de=_-W+1;let Te=!1,Ce=0;const le=new Array(de);for(Y=0;Y<de;Y++)le[Y]=0;for(Y=O;Y<=w;Y++){const Ie=C[Y];if(ve>=de){ze(Ie,Z,te,!0);continue}let Ue;if(Ie.key!=null)Ue=Q.get(Ie.key);else for(G=W;G<=_;G++)if(le[G-W]===0&&js(Ie,N[G])){Ue=G;break}Ue===void 0?ze(Ie,Z,te,!0):(le[Ue-W]=Y+1,Ue>=Ce?Ce=Ue:Te=!0,b(Ie,N[Ue],M,null,Z,te,J,re,j),ve++)}const Re=Te?Wp(le):Ms;for(G=Re.length-1,Y=de-1;Y>=0;Y--){const Ie=W+Y,Ue=N[Ie],xe=N[Ie+1],Ve=Ie+1<we?xe.el||Mf(xe):se;le[Y]===0?b(null,Ue,M,Ve,Z,te,J,re,j):Te&&(G<0||Y!==Re[G]?De(Ue,M,Ve,2):G--)}}},De=(C,N,M,se,Z=null)=>{const{el:te,type:J,transition:re,children:j,shapeFlag:Y}=C;if(Y&6){De(C.component.subTree,N,M,se);return}if(Y&128){C.suspense.move(N,M,se);return}if(Y&64){J.move(C,N,M,ke);return}if(J===rt){i(te,N,M);for(let w=0;w<j.length;w++)De(j[w],N,M,se);i(C.anchor,N,M);return}if(J===mo){T(C,N,M);return}if(se!==2&&Y&1&&re)if(se===0)re.persisted&&!te[ca]?i(te,N,M):(re.beforeEnter(te),i(te,N,M),en(()=>re.enter(te),Z));else{const{leave:w,delayLeave:_,afterLeave:O}=re,W=()=>{C.ctx.isUnmounted?s(te):i(te,N,M)},Q=()=>{const G=te._isLeaving||!!te[ca];te._isLeaving&&te[ca](!0),re.persisted&&!G?W():w(te,()=>{W(),O&&O()})};_?_(te,W,Q):Q()}else i(te,N,M)},ze=(C,N,M,se=!1,Z=!1)=>{const{type:te,props:J,ref:re,children:j,dynamicChildren:Y,shapeFlag:we,patchFlag:w,dirs:_,cacheIndex:O,memo:W}=C;if(w===-2&&(Z=!1),re!=null&&(ui(),lr(re,null,M,C,!0),di()),O!=null&&(N.renderCache[O]=void 0),we&256){N.ctx.deactivate(C);return}const Q=we&1&&_,G=!cr(C);let ve;if(G&&(ve=J&&J.onVnodeBeforeUnmount)&&Ln(ve,N,C),we&6)me(C.component,M,se);else{if(we&128){C.suspense.unmount(M,se);return}Q&&Pi(C,null,N,"beforeUnmount"),we&64?C.type.remove(C,N,M,ke,se):Y&&!Y.hasOnce&&(te!==rt||w>0&&w&64)?Ae(Y,N,M,!1,!0):(te===rt&&w&384||!Z&&we&16)&&Ae(j,N,M),se&&it(C)}const de=W!=null&&O==null;(G&&(ve=J&&J.onVnodeUnmounted)||Q||de)&&en(()=>{ve&&Ln(ve,N,C),Q&&Pi(C,null,N,"unmounted"),de&&(C.el=null)},M)},it=C=>{const{type:N,el:M,anchor:se,transition:Z}=C;if(N===rt){ie(M,se);return}if(N===mo){y(C);return}const te=()=>{s(M),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(C.shapeFlag&1&&Z&&!Z.persisted){const{leave:J,delayLeave:re}=Z,j=()=>J(M,te);re?re(C.el,te,j):j()}else te()},ie=(C,N)=>{let M;for(;C!==N;)M=f(C),s(C),C=M;s(N)},me=(C,N,M)=>{const{bum:se,scope:Z,job:te,subTree:J,um:re,m:j,a:Y}=C;Xc(j),Xc(Y),se&&ho(se),Z.stop(),te&&(te.flags|=8,ze(J,C,N,M)),re&&en(re,N),en(()=>{C.isUnmounted=!0},N)},Ae=(C,N,M,se=!1,Z=!1,te=0)=>{for(let J=te;J<C.length;J++)ze(C[J],N,M,se,Z)},be=C=>{if(C.shapeFlag&6)return be(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const N=f(C.anchor||C.el),M=N&&N[ap];return M?f(M):N};let Fe=!1;const tt=(C,N,M)=>{let se;C==null?N._vnode&&(ze(N._vnode,null,null,!0),se=N._vnode.component):b(N._vnode||null,C,N,null,null,null,M),N._vnode=C,Fe||(Fe=!0,Nc(se),jd(),Fe=!1)},ke={p:b,um:ze,m:De,r:it,mt:$,mc:I,pc:H,pbc:x,n:be,o:n};return{render:tt,hydrate:void 0,createApp:Ap(tt)}}function da({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Di({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Gp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function bf(n,e,t=!1){const i=n.children,s=e.children;if(qe(i)&&qe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ii(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&bf(o,a)),a.type===qo&&(a.patchFlag===-1&&(a=s[r]=ii(a)),a.el=o.el),a.type===Ti&&!a.el&&(a.el=o.el)}}function Wp(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function yf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:yf(e)}function Xc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Mf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Mf(e.subTree):null}const Sf=n=>n.__isSuspense;function Xp(n,e){e&&e.pendingBranch?qe(n)?e.effects.push(...n):e.effects.push(n):tp(n)}const rt=Symbol.for("v-fgt"),qo=Symbol.for("v-txt"),Ti=Symbol.for("v-cmt"),mo=Symbol.for("v-stc"),Yi=[];let un=null;function he(n=!1){Yi.push(un=n?null:[])}function Ef(){Yi.pop(),un=Yi[Yi.length-1]||null}let gr=1;function $c(n,e=!1){gr+=n,n<0&&un&&e&&(un.hasOnce=!0)}function wf(n){return n.dynamicChildren=gr>0?un||Ms:null,Ef(),gr>0&&un&&un.push(n),n}function ge(n,e,t,i,s,r){return wf(v(n,e,t,i,s,r,!0))}function zn(n,e,t,i,s){return wf(Ot(n,e,t,i,s,!0))}function Tf(n){return n?n.__v_isVNode===!0:!1}function js(n,e){return n.type===e.type&&n.key===e.key}const Af=({key:n})=>n??null,go=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Rt(n)||Wt(n)||Je(n)?{i:_n,r:n,k:e,f:!!t}:n:null);function v(n,e=null,t=null,i=0,s=null,r=n===rt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Af(e),ref:e&&go(e),scopeId:Jd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_n};return a?(Ro(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Rt(t)?8:16),gr>0&&!o&&un&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&un.push(l),l}const Ot=$p;function $p(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===vp)&&(n=Ti),Tf(n)){const a=Ds(n,e,!0);return t&&Ro(a,t),gr>0&&!r&&un&&(a.shapeFlag&6?un[un.indexOf(n)]=a:un.push(a)),a.patchFlag=-2,a}if(im(n)&&(n=n.__vccOpts),e){e=qp(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=Tt(a)),gt(l)&&(lc(l)&&!qe(l)&&(l=Xt({},l)),e.style=Ht(l))}const o=Rt(n)?1:Sf(n)?128:lp(n)?64:gt(n)?4:Je(n)?2:0;return v(n,e,t,i,s,o,r,!0)}function qp(n){return n?lc(n)||pf(n)?Xt({},n):n:null}function Ds(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Yp(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Af(c),ref:e&&e.ref?t&&r?qe(r)?r.concat(go(e)):[r,go(e)]:go(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==rt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ds(n.ssContent),ssFallback:n.ssFallback&&Ds(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&dc(u,l.clone(u)),u}function Dt(n=" ",e=0){return Ot(qo,null,n,e)}function _r(n,e){const t=Ot(mo,null,n);return t.staticCount=e,t}function ut(n="",e=!1){return e?(he(),zn(Ti,null,n)):Ot(Ti,null,n)}function On(n){return n==null||typeof n=="boolean"?Ot(Ti):qe(n)?Ot(rt,null,n.slice()):Tf(n)?ii(n):Ot(qo,null,String(n))}function ii(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ds(n)}function Ro(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(qe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Ro(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!pf(e)?e._ctx=_n:s===3&&_n&&(_n.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Je(e)){if(i&65){Ro(n,{default:e});return}e={default:e,_ctx:_n},t=32}else e=String(e),i&64?(t=16,e=[Dt(e)]):t=8;n.children=e,n.shapeFlag|=t}function Yp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Tt([e.class,i.class]));else if(s==="style")e.style=Ht([e.style,i.style]);else if(ko(s)){const r=e[s],o=i[s];o&&r!==o&&!(qe(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!zo(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function Ln(n,e,t,i=null){Dn(n,e,7,[t,i])}const Kp=cf();let jp=0;function Zp(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Kp,r={uid:jp++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gf(i,s),emitsOptions:uf(i,s),emit:null,emitted:null,propsDefaults:xt,inheritAttrs:i.inheritAttrs,ctx:xt,data:xt,props:xt,attrs:xt,slots:xt,refs:xt,setupState:xt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Cp.bind(null,r),n.ce&&n.ce(r),r}let Zt=null;const Jp=()=>Zt||_n;let Co,ol;{const n=Vo(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Co=e("__VUE_INSTANCE_SETTERS__",t=>Zt=t),ol=e("__VUE_SSR_SETTERS__",t=>xr=t)}const Ar=n=>{const e=Zt;return Co(n),n.scope.on(),()=>{n.scope.off(),Co(e)}},qc=()=>{Zt&&Zt.scope.off(),Co(null)};function Rf(n){return n.vnode.shapeFlag&4}let xr=!1;function Qp(n,e=!1,t=!1){e&&ol(e);const{props:i,children:s}=n.vnode,r=Rf(n);Np(n,i,r,e),kp(n,s,t||e);const o=r?em(n,e):void 0;return e&&ol(!1),o}function em(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,bp);const{setup:i}=t;if(i){ui();const s=n.setupContext=i.length>1?nm(n):null,r=Ar(n),o=Tr(i,n,0,[n.props,s]),a=Ed(o);if(di(),r(),(a||n.sp)&&!cr(n)&&nf(n),a){if(o.then(qc,qc),e)return o.then(l=>{Yc(n,l)}).catch(l=>{Wo(l,n,0)});n.asyncDep=o}else Yc(n,o)}else Cf(n)}function Yc(n,e,t){Je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:gt(e)&&(n.setupState=qd(e)),Cf(n)}function Cf(n,e,t){const i=n.type;n.render||(n.render=i.render||Vn);{const s=Ar(n);ui();try{yp(n)}finally{di(),s()}}}const tm={get(n,e){return Vt(n,"get",""),n[e]}};function nm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,tm),slots:n.slots,emit:n.emit,expose:e}}function Yo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(qd(Xh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ur)return ur[t](n)},has(e,t){return t in e||t in ur}})):n.proxy}function im(n){return Je(n)&&"__vccOpts"in n}const je=(n,e)=>jh(n,e,xr),sm="3.5.40";let al;const Kc=typeof window<"u"&&window.trustedTypes;if(Kc)try{al=Kc.createPolicy("vue",{createHTML:n=>n})}catch{}const Pf=al?n=>al.createHTML(n):n=>n,rm="http://www.w3.org/2000/svg",om="http://www.w3.org/1998/Math/MathML",ni=typeof document<"u"?document:null,jc=ni&&ni.createElement("template"),am={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ni.createElementNS(rm,n):e==="mathml"?ni.createElementNS(om,n):t?ni.createElement(n,{is:t}):ni.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ni.createTextNode(n),createComment:n=>ni.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ni.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{jc.innerHTML=Pf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=jc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},lm=Symbol("_vtc");function cm(n,e,t){const i=n[lm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Zc=Symbol("_vod"),um=Symbol("_vsh"),dm=Symbol(""),fm=/(?:^|;)\s*display\s*:/;function hm(n,e,t){const i=n.style,s=Rt(t);let r=!1;if(t&&!s){if(e)if(Rt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ir(i,a,"")}else for(const o in e)t[o]==null&&ir(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?mm(n,o,!Rt(e)&&e?e[o]:void 0,a)||ir(i,o,a):ir(i,o,"")}}else if(s){if(e!==t){const o=i[dm];o&&(t+=";"+o),i.cssText=t,r=fm.test(t)}}else e&&n.removeAttribute("style");Zc in n&&(n[Zc]=r?i.display:"",n[um]&&(i.display="none"))}const Jc=/\s*!important$/;function ir(n,e,t){if(qe(t))t.forEach(i=>ir(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=pm(n,e);Jc.test(t)?n.setProperty(Ji(i),t.replace(Jc,""),"important"):n[i]=t}}const Qc=["Webkit","Moz","ms"],fa={};function pm(n,e){const t=fa[e];if(t)return t;let i=Tn(e);if(i!=="filter"&&i in n)return fa[e]=i;i=Ad(i);for(let s=0;s<Qc.length;s++){const r=Qc[s]+i;if(r in n)return fa[e]=r}return e}function mm(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Rt(i)&&t===i}const eu="http://www.w3.org/1999/xlink";function tu(n,e,t,i,s,r=Sh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(eu,e.slice(6,e.length)):n.setAttributeNS(eu,e,t):t==null||r&&!Pd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Wn(t)?String(t):t)}function nu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Pf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Pd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function pc(n,e,t,i){n.addEventListener(e,t,i)}function gm(n,e,t,i){n.removeEventListener(e,t,i)}const iu=Symbol("_vei");function _m(n,e,t,i,s=null){const r=n[iu]||(n[iu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=bm(e);if(i){const c=r[e]=Sm(i,s);pc(n,a,c,l)}else o&&(gm(n,a,o,l),r[e]=void 0)}}const xm=/(Once|Passive|Capture)$/,vm=/^on:?(?:Once|Passive|Capture)$/;function bm(n){let e,t;for(;(t=n.match(xm))&&!vm.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Ji(n.slice(2)),e]}let ha=0;const ym=Promise.resolve(),Mm=()=>ha||(ym.then(()=>ha=0),ha=Date.now());function Sm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(qe(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Dn(c,e,5,a)}}else Dn(s,e,5,[i])};return t.value=n,t.attached=Mm(),t}const su=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Em=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?cm(n,i,o):e==="style"?hm(n,t,i):ko(e)?zo(e)||_m(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wm(n,e,i,o))?(nu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&tu(n,e,i,o,r,e!=="value")):n._isVueCE&&(Tm(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Rt(i)))?nu(n,Tn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),tu(n,e,i,o))};function wm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&su(e)&&Je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return su(e)&&Rt(t)?!1:e in n}function Tm(n,e){const t=n._def.props;if(!t)return!1;const i=Tn(e);return Array.isArray(t)?t.some(s=>Tn(s)===i):Object.keys(t).some(s=>Tn(s)===i)}const Po=n=>{const e=n.props["onUpdate:modelValue"]||!1;return qe(e)?t=>ho(e,t):e},Ts=Symbol("_assign"),Am={deep:!0,created(n,e,t){n[Ts]=Po(t),pc(n,"change",()=>{const i=n._modelValue,s=vr(n),r=n.checked,o=n[Ts];if(qe(i)){const a=tc(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Os(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Df(n,r))})},mounted:ru,beforeUpdate(n,e,t){n[Ts]=Po(t),ru(n,e,t)}};function ru(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(qe(e))s=tc(e,i.props.value)>-1;else if(Os(e))s=e.has(i.props.value);else{if(e===t)return;s=Bs(e,Df(n,!0))}n.checked!==s&&(n.checked=s)}const Rm={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,pc(n,"change",()=>{const s=Array.prototype.filter.call(n.options,r=>r.selected).map(r=>t?Cd(vr(r)):vr(r));n[Ts](n.multiple?Os(n._modelValue)?new Set(s):s:s[0]),n._assigning=!0,cc(()=>{n._assigning=!1})}),n[Ts]=Po(i)},mounted(n,{value:e}){ou(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[Ts]=Po(t)},updated(n,{value:e}){n._assigning||ou(n,e)}};function ou(n,e){const t=n.multiple,i=qe(e);if(!(t&&!i&&!Os(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=vr(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=tc(e,a)>-1}else o.selected=e.has(a);else if(Bs(vr(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function vr(n){return"_value"in n?n._value:n.value}function Df(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Cm=["ctrl","shift","alt","meta"],Pm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Cm.some(t=>n[`${t}Key`]&&!e.includes(t))},mc=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=Pm[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},Dm=Xt({patchProp:Em},am);let au;function Lm(){return au||(au=Hp(Dm))}const Im=((...n)=>{const e=Lm().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Nm(i);if(!s)return;const r=e._component;!Je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Um(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Um(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Nm(n){return Rt(n)?document.querySelector(n):n}const Lf="drone-trainer-controller-calibration",Fm={version:1,calibrated:!1,deadzone:.03,axes:{roll:{min:-1,center:0,max:1},pitch:{min:-1,center:0,max:1},yaw:{min:-1,center:0,max:1},throttle:{min:-1,max:1}}};function vs(){return JSON.parse(JSON.stringify(Fm))}function ll(n,e,t){return Math.min(t,Math.max(e,n))}function Om(n,e,t){const i=Number(n??0),s=Number(e?.min??-1),r=Number(e?.center??0),o=Number(e?.max??1);let a=0;if(i<r){const c=r-s;c>1e-4&&(a=-((r-i)/c))}if(i>r){const c=o-r;c>1e-4&&(a=(i-r)/c)}if(a=ll(a,-1,1),Math.abs(a)<=t)return 0;const l=Math.sign(a);return ll(l*((Math.abs(a)-t)/(1-t)),-1,1)}function Bm(n,e){const t=Number(n??-1),i=Number(e?.min??-1),r=Number(e?.max??1)-i;return r<=1e-4?0:ll((t-i)/r,0,1)}function km(){if(typeof window>"u")return vs();try{const n=window.localStorage.getItem(Lf);if(!n)return vs();const e=JSON.parse(n);return{...vs(),...e,axes:{...vs().axes,...e.axes??{}}}}catch{return vs()}}const pi=Cn(km());function gc(){function n(){window.localStorage.setItem(Lf,JSON.stringify(pi))}function e(){const s=vs();Object.assign(pi,s),n()}function t(s){Object.assign(pi,s),pi.calibrated=!0,n()}function i(s,r){return s==="throttle"?Bm(r,pi.axes.throttle):Om(r,pi.axes[s],pi.deadzone)}return{calibration:pi,normalizeAxis:i,save:n,reset:e,setCalibration:t}}const zm={class:"flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-lime-300/20 bg-[#11151c] shadow-2xl shadow-black/60"},Hm={class:"flex shrink-0 items-start justify-between gap-4 border-b border-white/10 px-6 py-5"},Vm={class:"flex items-center gap-2"},Gm={class:"min-h-0 flex-1 overflow-y-auto p-6"},Wm={key:0,class:"rounded-2xl border border-amber-200/15 bg-amber-200/5.5 p-5 text-sm leading-6 text-amber-50/70"},Xm={class:"mt-6 grid gap-3 sm:grid-cols-3"},$m={class:"rounded-2xl border border-white/10 bg-black/20 p-4 text-center"},qm={class:"mt-2 font-mono text-xl font-semibold tabular-nums text-sky-100"},Ym={class:"rounded-2xl border border-white/10 bg-black/20 p-4 text-center"},Km={class:"mt-2 font-mono text-xl font-semibold tabular-nums text-sky-100"},jm={class:"rounded-2xl border border-white/10 bg-black/20 p-4 text-center"},Zm={class:"mt-2 font-mono text-xl font-semibold tabular-nums text-sky-100"},Jm={class:"mt-6 space-y-3"},Qm={class:"flex items-center justify-between gap-4"},eg={class:"text-sm font-semibold capitalize text-white/80"},tg={class:"mt-1 font-mono text-xs text-sky-100"},ng={class:"mt-4 h-2 overflow-hidden rounded-full bg-white/10"},ig={class:"mt-3 grid grid-cols-2 gap-3 text-xs"},sg={class:"mt-1 font-mono tabular-nums text-white/75"},rg={class:"text-right"},og={class:"mt-1 font-mono tabular-nums text-white/75"},ag={class:"mt-6 flex gap-3"},lg=["disabled"],cg={class:"mt-6 rounded-2xl border border-white/10 bg-black/20 p-4"},ug={class:"mt-3 grid grid-cols-3 gap-3"},dg={class:"mt-1 font-mono text-sm text-lime-100"},fg={class:"mt-1 font-mono text-sm text-lime-100"},hg={class:"mt-1 font-mono text-sm text-lime-100"},pg={class:"mt-3 rounded-2xl border border-white/10 bg-black/20 p-4"},mg={class:"mt-3 space-y-2"},gg={class:"capitalize text-white/55"},_g={class:"font-mono tabular-nums text-white/70"},xg={class:"font-mono tabular-nums text-white/70"},vg={key:0,class:"mt-6 flex gap-3"},bg={key:1,class:"mt-6 rounded-2xl border border-lime-300/20 bg-lime-300/6 p-5 text-center"},yg={__name:"ControllerCalibrationPanel",emits:["close"],setup(n,{emit:e}){const t=e,{setCalibration:i}=gc(),s=$e(!1),r=$e(1),o=$e(!1),a=$e(""),l=$e({roll:0,pitch:0,throttle:0,yaw:0}),c=$e({roll:null,pitch:null,yaw:null}),u=$e({roll:{min:null,max:null},pitch:{min:null,max:null},throttle:{min:null,max:null},yaw:{min:null,max:null}});let d=null;function f(S){return S==null?"----":Number(S).toFixed(4)}function p(){const S=navigator.getGamepads?.()??[];return Array.from(S).find(x=>x&&x.axes.length>=4)??null}function g(S,x){const P=u.value[S];P.min===null&&(P.min=x),P.max===null&&(P.max=x),P.min=Math.min(P.min,x),P.max=Math.max(P.max,x)}function b(){const S=p();if(!S){o.value=!1,a.value="",d=requestAnimationFrame(b);return}o.value=!0,a.value=S.id;const x={roll:S.axes[0]??0,pitch:S.axes[1]??0,throttle:S.axes[2]??0,yaw:S.axes[3]??0};l.value=x,r.value===2&&(g("roll",x.roll),g("pitch",x.pitch),g("throttle",x.throttle),g("yaw",x.yaw)),d=requestAnimationFrame(b)}function m(){c.value={roll:l.value.roll,pitch:l.value.pitch,yaw:l.value.yaw},h(),r.value=2}function h(){u.value={roll:{min:null,max:null},pitch:{min:null,max:null},throttle:{min:null,max:null},yaw:{min:null,max:null}}}function A(){r.value=1}function T(){r.value=3}function y(){h(),r.value=2}function F(S,x){if(S===null||x===null)return 0;const P=Math.abs(x-S);return Math.min(100,P/2*100)}function D(S,x){return S===null||x===null?!1:Math.abs(x-S)>=1.6}function R(){i({deadzone:.03,axes:{roll:{min:u.value.roll.min,center:c.value.roll,max:u.value.roll.max},pitch:{min:u.value.pitch.min,center:c.value.pitch,max:u.value.pitch.max},yaw:{min:u.value.yaw.min,center:c.value.yaw,max:u.value.yaw.max},throttle:{min:u.value.throttle.min,max:u.value.throttle.max}}}),s.value=!0}const I=()=>D(u.value.roll.min,u.value.roll.max)&&D(u.value.pitch.min,u.value.pitch.max)&&D(u.value.yaw.min,u.value.yaw.max)&&D(u.value.throttle.min,u.value.throttle.max);return ks(()=>{d=requestAnimationFrame(b)}),zs(()=>{d!==null&&cancelAnimationFrame(d)}),(S,x)=>(he(),ge("div",{class:"fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm",onClick:x[2]||(x[2]=mc(P=>t("close"),["self"]))},[v("section",zm,[v("header",Hm,[v("div",null,[v("div",Vm,[v("span",{class:Tt(["h-2.5 w-2.5 rounded-full",o.value?"bg-lime-300 shadow-[0_0_12px_rgba(190,242,100,.7)]":"bg-white/25"])},null,2),x[3]||(x[3]=v("p",{class:"text-sm font-semibold text-lime-100"}," Controller Calibration ",-1)),x[4]||(x[4]=v("span",{class:"rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45"}," v0.1 ",-1))]),x[5]||(x[5]=v("p",{class:"mt-1 text-xs text-white/45"}," 校正控制器中立點與操作範圍 ",-1))]),v("button",{type:"button",class:"rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-xs text-white/55 hover:bg-white/10 hover:text-white",onClick:x[0]||(x[0]=P=>t("close"))}," 關閉 ")]),v("div",Gm,[o.value?(he(),ge(rt,{key:1},[r.value===1?(he(),ge(rt,{key:0},[x[12]||(x[12]=v("div",{class:"text-center"},[v("p",{class:"text-xs font-semibold uppercase tracking-[0.2em] text-lime-200/60"}," STEP 1 / 3 "),v("h2",{class:"mt-3 text-2xl font-semibold text-white"}," 中立點校正 "),v("p",{class:"mx-auto mt-3 max-w-md text-sm leading-6 text-white/55"}," 完全放開右搖桿， 並讓左搖桿的 Yaw 自動回到中央。 保持控制器不動後，再記錄中立點。 ")],-1)),v("div",Xm,[v("div",$m,[x[6]||(x[6]=v("p",{class:"text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40"}," Roll ",-1)),v("p",qm,ce(f(l.value.roll)),1),x[7]||(x[7]=v("p",{class:"mt-1 text-[11px] text-white/35"}," AXIS 0 ",-1))]),v("div",Ym,[x[8]||(x[8]=v("p",{class:"text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40"}," Pitch ",-1)),v("p",Km,ce(f(l.value.pitch)),1),x[9]||(x[9]=v("p",{class:"mt-1 text-[11px] text-white/35"}," AXIS 1 ",-1))]),v("div",jm,[x[10]||(x[10]=v("p",{class:"text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40"}," Yaw ",-1)),v("p",Zm,ce(f(l.value.yaw)),1),x[11]||(x[11]=v("p",{class:"mt-1 text-[11px] text-white/35"}," AXIS 3 ",-1))])]),x[13]||(x[13]=v("div",{class:"mt-5 rounded-2xl border border-sky-300/15 bg-sky-300/4.5 p-4 text-sm leading-6 text-sky-50/65"},[Dt(" 這裡顯示的是控制器原始數值。 中立位置不一定剛好是 "),v("span",{class:"font-mono text-sky-100"}," 0.0000 "),Dt("。 ")],-1)),v("button",{type:"button",class:"mt-6 w-full rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-200",onClick:m}," 記錄中立點 ")],64)):r.value===2?(he(),ge(rt,{key:1},[x[16]||(x[16]=_r('<div class="text-center"><p class="text-xs font-semibold uppercase tracking-[0.2em] text-lime-200/60"> STEP 2 / 3 </p><h2 class="mt-3 text-2xl font-semibold text-white"> 操作範圍校正 </h2><p class="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/55"> 將左右兩支搖桿完整推到所有方向的極限。 系統會持續記錄每個軸曾經到過的最小值與最大值。 </p></div><div class="mt-5 rounded-2xl border border-lime-300/15 bg-lime-300/4 p-4 text-sm leading-6 text-lime-50/70"> 建議將右搖桿沿著外圈完整繞一圈， 再把左搖桿的 Yaw 左右推到底， Throttle 則從最低推到最高一次。 </div>',2)),v("div",Jm,[(he(),ge(rt,null,En(["roll","pitch","yaw","throttle"],P=>v("article",{key:P,class:"rounded-2xl border border-white/10 bg-black/20 p-4"},[v("div",Qm,[v("div",null,[v("p",eg,ce(P),1),v("p",tg," RAW "+ce(f(l.value[P])),1)]),v("span",{class:Tt(["rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]",D(u.value[P].min,u.value[P].max)?"bg-lime-300/15 text-lime-200":"bg-white/5 text-white/35"])},ce(D(u.value[P].min,u.value[P].max)?"READY":"MOVE"),3)]),v("div",ng,[v("div",{class:"h-full rounded-full bg-lime-300/70 transition-[width] duration-100",style:Ht({width:`${F(u.value[P].min,u.value[P].max)}%`})},null,4)]),v("div",ig,[v("div",null,[x[14]||(x[14]=v("p",{class:"text-white/35"}," MIN ",-1)),v("p",sg,ce(f(u.value[P].min)),1)]),v("div",rg,[x[15]||(x[15]=v("p",{class:"text-white/35"}," MAX ",-1)),v("p",og,ce(f(u.value[P].max)),1)])])])),64))]),v("div",ag,[v("button",{type:"button",class:"flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/65 hover:bg-white/10",onClick:A}," 上一步 "),v("button",{type:"button",class:Tt(["flex-2 rounded-2xl px-5 py-3 text-sm font-semibold transition",I()?"bg-lime-300 text-slate-950 hover:bg-lime-200":"cursor-not-allowed bg-white/5 text-white/25"]),disabled:!I(),onClick:T}," 完成範圍校正 ",10,lg)])],64)):r.value===3?(he(),ge(rt,{key:2},[x[25]||(x[25]=_r('<div class="text-center"><p class="text-xs font-semibold uppercase tracking-[0.2em] text-lime-200/60"> STEP 3 / 3 </p><div class="mx-auto mt-4 grid h-14 w-14 place-items-center rounded-full bg-lime-300/15 text-2xl text-lime-200"> ✓ </div><h2 class="mt-4 text-2xl font-semibold text-white"> 確認校正結果 </h2><p class="mx-auto mt-3 max-w-md text-sm leading-6 text-white/55"> 請確認中立點與操作範圍是否正常。 儲存後，系統會將這組資料套用到飛行控制。 </p></div>',1)),v("div",cg,[x[20]||(x[20]=v("p",{class:"text-xs font-semibold uppercase tracking-[0.18em] text-white/40"}," Center ",-1)),v("div",ug,[v("div",null,[x[17]||(x[17]=v("p",{class:"text-xs text-white/35"}," Roll ",-1)),v("p",dg,ce(f(c.value.roll)),1)]),v("div",null,[x[18]||(x[18]=v("p",{class:"text-xs text-white/35"}," Pitch ",-1)),v("p",fg,ce(f(c.value.pitch)),1)]),v("div",null,[x[19]||(x[19]=v("p",{class:"text-xs text-white/35"}," Yaw ",-1)),v("p",hg,ce(f(c.value.yaw)),1)])])]),v("div",pg,[x[21]||(x[21]=v("p",{class:"text-xs font-semibold uppercase tracking-[0.18em] text-white/40"}," Range ",-1)),v("div",mg,[(he(),ge(rt,null,En(["roll","pitch","yaw","throttle"],P=>v("div",{key:P,class:"grid grid-cols-[1fr_auto_auto] items-center gap-4 text-xs"},[v("p",gg,ce(P),1),v("p",_g,ce(f(u.value[P].min)),1),v("p",xg,ce(f(u.value[P].max)),1)])),64))])]),s.value?(he(),ge("div",bg,[x[22]||(x[22]=v("div",{class:"mx-auto grid h-12 w-12 place-items-center rounded-full bg-lime-300/15 text-xl text-lime-200"}," ✓ ",-1)),x[23]||(x[23]=v("p",{class:"mt-3 font-semibold text-lime-100"}," 控制器校正完成 ",-1)),x[24]||(x[24]=v("p",{class:"mt-2 text-sm leading-6 text-white/50"}," 校正資料已儲存，之後的飛行控制會自動使用這組設定。 ",-1)),v("button",{type:"button",class:"mt-5 w-full rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-lime-200",onClick:x[1]||(x[1]=P=>t("close"))}," 完成 ")])):(he(),ge("div",vg,[v("button",{type:"button",class:"flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/65 hover:bg-white/10",onClick:y}," 重新測量 "),v("button",{type:"button",class:"flex-2 rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-200",onClick:R}," 儲存校正 ")]))],64)):ut("",!0)],64)):(he(),ge("div",Wm," 尚未偵測到控制器。 請插上 LiteRadio 2 SIM， 並輕微移動搖桿， 讓瀏覽器取得 Gamepad 資料。 "))])])]))}};const _c="178",Mg=0,lu=1,Sg=2,If=1,Uf=2,ti=3,Ai=0,tn=1,Gt=2,Ei=0,As=1,cu=2,uu=3,du=4,Eg=5,Hi=100,wg=101,Tg=102,Ag=103,Rg=104,Cg=200,Pg=201,Dg=202,Lg=203,cl=204,ul=205,Ig=206,Ug=207,Ng=208,Fg=209,Og=210,Bg=211,kg=212,zg=213,Hg=214,dl=0,fl=1,hl=2,Ls=3,pl=4,ml=5,gl=6,_l=7,Nf=0,Vg=1,Gg=2,wi=0,Wg=1,Xg=2,$g=3,qg=4,Yg=5,Kg=6,jg=7,Ff=300,Is=301,Us=302,xl=303,vl=304,Ko=306,bl=1e3,Wi=1001,yl=1002,Rn=1003,Zg=1004,Hr=1005,Hn=1006,pa=1007,Xi=1008,Xn=1009,Of=1010,Bf=1011,br=1012,xc=1013,ji=1014,oi=1015,Rr=1016,vc=1017,bc=1018,yr=1020,kf=35902,zf=1021,Hf=1022,wn=1023,Mr=1026,Sr=1027,Vf=1028,yc=1029,Gf=1030,Mc=1031,Sc=1033,_o=33776,xo=33777,vo=33778,bo=33779,Ml=35840,Sl=35841,El=35842,wl=35843,Tl=36196,Al=37492,Rl=37496,Cl=37808,Pl=37809,Dl=37810,Ll=37811,Il=37812,Ul=37813,Nl=37814,Fl=37815,Ol=37816,Bl=37817,kl=37818,zl=37819,Hl=37820,Vl=37821,yo=36492,Gl=36494,Wl=36495,Wf=36283,Xl=36284,$l=36285,ql=36286,Jg=3200,Qg=3201,Xf=0,e0=1,Mi="",cn="srgb",Ns="srgb-linear",Do="linear",mt="srgb",ss=7680,fu=519,t0=512,n0=513,i0=514,$f=515,s0=516,r0=517,o0=518,a0=519,hu=35044,pu="300 es",ai=2e3,Lo=2001;class Hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mu=1234567;const dr=Math.PI/180,Er=180/Math.PI;function Vs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function Ec(n,e){return(n%e+e)%e}function l0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function c0(n,e,t){return n!==e?(t-n)/(e-n):0}function fr(n,e,t){return(1-t)*n+t*e}function u0(n,e,t,i){return fr(n,e,1-Math.exp(-t*i))}function d0(n,e=1){return e-Math.abs(Ec(n,e*2)-e)}function f0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function h0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function p0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function m0(n,e){return n+Math.random()*(e-n)}function g0(n){return n*(.5-Math.random())}function _0(n){n!==void 0&&(mu=n);let e=mu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function x0(n){return n*dr}function v0(n){return n*Er}function b0(n){return(n&n-1)===0&&n!==0}function y0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function M0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function S0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ke={DEG2RAD:dr,RAD2DEG:Er,generateUUID:Vs,clamp:nt,euclideanModulo:Ec,mapLinear:l0,inverseLerp:c0,lerp:fr,damp:u0,pingpong:d0,smoothstep:f0,smootherstep:h0,randInt:p0,randFloat:m0,randFloatSpread:g0,seededRandom:_0,degToRad:x0,radToDeg:v0,isPowerOfTwo:b0,ceilPowerOfTwo:y0,floorPowerOfTwo:M0,setQuaternionFromProperEuler:S0,normalize:Yt,denormalize:bs};class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],b=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=b;return}if(d!==b||l!==f||c!==p||u!==g){let m=1-a;const h=l*f+c*p+u*g+d*b,A=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const F=Math.sqrt(T),D=Math.atan2(F,h*A);m=Math.sin(m*D)/F,a=Math.sin(a*D)/F}const y=a*A;if(l=l*m+f*y,c=c*m+p*y,u=u*m+g*y,d=d*m+b*y,m===1-a){const F=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=F,c*=F,u*=F,d*=F}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*p-c*f,e[t+1]=l*g+u*f+c*d-a*p,e[t+2]=c*g+u*p+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ma.copy(this).projectOnVector(e),this.sub(ma)}reflect(e){return this.sub(ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new z,gu=new Cr;class Ze{constructor(e,t,i,s,r,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],b=s[0],m=s[3],h=s[6],A=s[1],T=s[4],y=s[7],F=s[2],D=s[5],R=s[8];return r[0]=o*b+a*A+l*F,r[3]=o*m+a*T+l*D,r[6]=o*h+a*y+l*R,r[1]=c*b+u*A+d*F,r[4]=c*m+u*T+d*D,r[7]=c*h+u*y+d*R,r[2]=f*b+p*A+g*F,r[5]=f*m+p*T+g*D,r[8]=f*h+p*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=t*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=d*b,e[1]=(s*c-u*i)*b,e[2]=(a*i-s*o)*b,e[3]=f*b,e[4]=(u*t-s*l)*b,e[5]=(s*r-a*t)*b,e[6]=p*b,e[7]=(i*l-c*t)*b,e[8]=(o*t-i*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new Ze;function qf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function E0(){const n=Io("canvas");return n.style.display="block",n}const _u={};function Rs(n){n in _u||(_u[n]=!0,console.warn(n))}function w0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function T0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function A0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xu=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vu=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R0(){const n={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?Do:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ns]:{primaries:e,whitePoint:i,transfer:Do,toXYZ:xu,fromXYZ:vu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:xu,fromXYZ:vu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}const at=R0();function ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rs;class C0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rs===void 0&&(rs=Io("canvas")),rs.width=e.width,rs.height=e.height;const s=rs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=rs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Io("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ci(t[i]/255)*255):t[i]=ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let P0=0;class wc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Vs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_a(s[o].image)):r.push(_a(s[o]))}else r=_a(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function _a(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?C0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let D0=0;const xa=new z;class nn extends Hs{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,i=Wi,s=Wi,r=Hn,o=Xi,a=wn,l=Xn,c=nn.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Vs(),this.name="",this.source=new wc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xa).x}get height(){return this.source.getSize(xa).y}get depth(){return this.source.getSize(xa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bl:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case yl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bl:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case yl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Ff;nn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,s=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],b=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,y=(p+1)/2,F=(h+1)/2,D=(u+f)/4,R=(d+b)/4,I=(g+m)/4;return T>y&&T>F?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=D/i,r=R/i):y>F?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=D/s,r=I/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=R/r,s=I/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(d-b)*(d-b)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(d-b)/A,this.z=(f-u)/A,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class L0 extends Hs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new nn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new wc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends L0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Yf extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I0 extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vr.copy(i.boundingBox)),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Gr.subVectors(this.max,Zs),os.subVectors(e.a,Zs),as.subVectors(e.b,Zs),ls.subVectors(e.c,Zs),mi.subVectors(as,os),gi.subVectors(ls,as),Li.subVectors(os,ls);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Li.z,Li.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Li.z,0,-Li.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Li.y,Li.x,0];return!va(t,os,as,ls,Gr)||(t=[1,0,0,0,1,0,0,0,1],!va(t,os,as,ls,Gr))?!1:(Wr.crossVectors(mi,gi),t=[Wr.x,Wr.y,Wr.z],va(t,os,as,ls,Gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jn=[new z,new z,new z,new z,new z,new z,new z,new z],bn=new z,Vr=new Pr,os=new z,as=new z,ls=new z,mi=new z,gi=new z,Li=new z,Zs=new z,Gr=new z,Wr=new z,Ii=new z;function va(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ii.fromArray(n,r);const a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),u=i.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const U0=new Pr,Js=new z,ba=new z;class jo{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):U0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const t=Js.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Js,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(ba)),this.expandByPoint(Js.copy(e.center).sub(ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zn=new z,ya=new z,Xr=new z,_i=new z,Ma=new z,$r=new z,Sa=new z;class Kf{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ya.copy(e).add(t).multiplyScalar(.5),Xr.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(ya);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Xr),a=_i.dot(this.direction),l=-_i.dot(Xr),c=_i.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*l-a,f=o*a-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const b=1/u;d*=b,f*=b,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ya).addScaledVector(Xr,f),p}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),s=Zn.dot(Zn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,i,s,r){Ma.subVectors(t,e),$r.subVectors(i,e),Sa.crossVectors(Ma,$r);let o=this.direction.dot(Sa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);const l=a*this.direction.dot($r.crossVectors(_i,$r));if(l<0)return null;const c=a*this.direction.dot(Ma.cross(_i));if(c<0||l+c>o)return null;const u=-a*_i.dot(Sa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,i,s,r,o,a,l,c,u,d,f,p,g,b,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,f,p,g,b,m)}set(e,t,i,s,r,o,a,l,c,u,d,f,p,g,b,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=b,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,b=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-b*c,t[9]=-a*l,t[2]=b-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,b=c*d;t[0]=f+b*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=b+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,b=c*d;t[0]=f-b*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=b-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,b=a*d;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+b,t[1]=l*d,t[5]=b*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,b=a*c;t[0]=l*u,t[4]=b-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+g,t[10]=f-b*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,b=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+b,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=b*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N0,e,F0)}lookAt(e,t,i){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),xi.crossVectors(i,an),xi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),xi.crossVectors(i,an)),xi.normalize(),qr.crossVectors(an,xi),s[0]=xi.x,s[4]=qr.x,s[8]=an.x,s[1]=xi.y,s[5]=qr.y,s[9]=an.y,s[2]=xi.z,s[6]=qr.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],b=i[6],m=i[10],h=i[14],A=i[3],T=i[7],y=i[11],F=i[15],D=s[0],R=s[4],I=s[8],S=s[12],x=s[1],P=s[5],q=s[9],V=s[13],$=s[2],ne=s[6],X=s[10],ee=s[14],H=s[3],pe=s[7],Se=s[11],De=s[15];return r[0]=o*D+a*x+l*$+c*H,r[4]=o*R+a*P+l*ne+c*pe,r[8]=o*I+a*q+l*X+c*Se,r[12]=o*S+a*V+l*ee+c*De,r[1]=u*D+d*x+f*$+p*H,r[5]=u*R+d*P+f*ne+p*pe,r[9]=u*I+d*q+f*X+p*Se,r[13]=u*S+d*V+f*ee+p*De,r[2]=g*D+b*x+m*$+h*H,r[6]=g*R+b*P+m*ne+h*pe,r[10]=g*I+b*q+m*X+h*Se,r[14]=g*S+b*V+m*ee+h*De,r[3]=A*D+T*x+y*$+F*H,r[7]=A*R+T*P+y*ne+F*pe,r[11]=A*I+T*q+y*X+F*Se,r[15]=A*S+T*V+y*ee+F*De,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],b=e[7],m=e[11],h=e[15];return g*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*p-i*l*p)+b*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+t*c*d-t*a*p-r*o*d+i*o*p+r*a*u-i*c*u)+h*(-s*a*u-t*l*d+t*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],b=e[13],m=e[14],h=e[15],A=d*m*c-b*f*c+b*l*p-a*m*p-d*l*h+a*f*h,T=g*f*c-u*m*c-g*l*p+o*m*p+u*l*h-o*f*h,y=u*b*c-g*d*c+g*a*p-o*b*p-u*a*h+o*d*h,F=g*d*l-u*b*l-g*a*f+o*b*f+u*a*m-o*d*m,D=t*A+i*T+s*y+r*F;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/D;return e[0]=A*R,e[1]=(b*f*r-d*m*r-b*s*p+i*m*p+d*s*h-i*f*h)*R,e[2]=(a*m*r-b*l*r+b*s*c-i*m*c-a*s*h+i*l*h)*R,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*p-i*l*p)*R,e[4]=T*R,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*h+t*f*h)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*h-t*l*h)*R,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*R,e[8]=y*R,e[9]=(g*d*r-u*b*r-g*i*p+t*b*p+u*i*h-t*d*h)*R,e[10]=(o*b*r-g*a*r+g*i*c-t*b*c-o*i*h+t*a*h)*R,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*p-t*a*p)*R,e[12]=F*R,e[13]=(u*b*s-g*d*s+g*i*f-t*b*f-u*i*m+t*d*m)*R,e[14]=(g*a*s-o*b*s-g*i*l+t*b*l+o*i*m-t*a*m)*R,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,p=r*u,g=r*d,b=o*u,m=o*d,h=a*d,A=l*c,T=l*u,y=l*d,F=i.x,D=i.y,R=i.z;return s[0]=(1-(b+h))*F,s[1]=(p+y)*F,s[2]=(g-T)*F,s[3]=0,s[4]=(p-y)*D,s[5]=(1-(f+h))*D,s[6]=(m+A)*D,s[7]=0,s[8]=(g+T)*R,s[9]=(m-A)*R,s[10]=(1-(f+b))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=cs.set(s[0],s[1],s[2]).length();const o=cs.set(s[4],s[5],s[6]).length(),a=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yn.copy(this);const c=1/r,u=1/o,d=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,t.setFromRotationMatrix(yn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ai){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let p,g;if(a===ai)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Lo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ai){const l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(o-r),f=(t+e)*c,p=(i+s)*u;let g,b;if(a===ai)g=(o+r)*d,b=-2*d;else if(a===Lo)g=r*d,b=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=b,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const cs=new z,yn=new wt,N0=new z(0,0,0),F0=new z(1,1,1),xi=new z,qr=new z,an=new z,bu=new wt,yu=new Cr;class $n{constructor(e=0,t=0,i=0,s=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yu.setFromEuler(this),this.setFromQuaternion(yu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class jf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let O0=0;const Mu=new z,us=new Cr,Jn=new wt,Yr=new z,Qs=new z,B0=new z,k0=new Cr,Su=new z(1,0,0),Eu=new z(0,1,0),wu=new z(0,0,1),Tu={type:"added"},z0={type:"removed"},ds={type:"childadded",child:null},Ea={type:"childremoved",child:null};class Lt extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new z,t=new $n,i=new Cr,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ze}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Su,e)}rotateY(e){return this.rotateOnAxis(Eu,e)}rotateZ(e){return this.rotateOnAxis(wu,e)}translateOnAxis(e,t){return Mu.copy(e).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Su,e)}translateY(e){return this.translateOnAxis(Eu,e)}translateZ(e){return this.translateOnAxis(wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Yr.copy(e):Yr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Qs,Yr,this.up):Jn.lookAt(Yr,Qs,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),us.setFromRotationMatrix(Jn),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tu),ds.child=e,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(z0),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tu),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,B0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,k0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Lt.DEFAULT_UP=new z(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new z,Qn=new z,wa=new z,ei=new z,fs=new z,hs=new z,Au=new z,Ta=new z,Aa=new z,Ra=new z,Ca=new At,Pa=new At,Da=new At;class Sn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Mn.subVectors(e,t),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Mn.subVectors(s,t),Qn.subVectors(i,t),wa.subVectors(e,t);const o=Mn.dot(Mn),a=Mn.dot(Qn),l=Mn.dot(wa),c=Qn.dot(Qn),u=Qn.dot(wa),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ca.setScalar(0),Pa.setScalar(0),Da.setScalar(0),Ca.fromBufferAttribute(e,t),Pa.fromBufferAttribute(e,i),Da.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ca,r.x),o.addScaledVector(Pa,r.y),o.addScaledVector(Da,r.z),o}static isFrontFacing(e,t,i,s){return Mn.subVectors(i,t),Qn.subVectors(e,t),Mn.cross(Qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Mn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Sn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;fs.subVectors(s,i),hs.subVectors(r,i),Ta.subVectors(e,i);const l=fs.dot(Ta),c=hs.dot(Ta);if(l<=0&&c<=0)return t.copy(i);Aa.subVectors(e,s);const u=fs.dot(Aa),d=hs.dot(Aa);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(fs,o);Ra.subVectors(e,r);const p=fs.dot(Ra),g=hs.dot(Ra);if(g>=0&&p<=g)return t.copy(r);const b=p*c-l*g;if(b<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(hs,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Au.subVectors(r,s),a=(d-u)/(d-u+(p-g)),t.copy(s).addScaledVector(Au,a);const h=1/(m+b+f);return o=b*h,a=f*h,t.copy(i).addScaledVector(fs,o).addScaledVector(hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function La(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=Ec(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=La(o,r,e+1/3),this.g=La(o,r,e),this.b=La(o,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=cn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const i=Zf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return at.workingToColorSpace(zt.copy(this),e),Math.round(nt(zt.r*255,0,255))*65536+Math.round(nt(zt.g*255,0,255))*256+Math.round(nt(zt.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(zt.copy(this),t);const i=zt.r,s=zt.g,r=zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=cn){at.workingToColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,s=zt.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Kr);const i=fr(vi.h,Kr.h,t),s=fr(vi.s,Kr.s,t),r=fr(vi.l,Kr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new et;et.NAMES=Zf;let H0=0;class Gs extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=As,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=ul,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cl&&(i.blendSrc=this.blendSrc),this.blendDst!==ul&&(i.blendDst=this.blendDst),this.blendEquation!==Hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vn extends Gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new z,jr=new st;let V0=0;class Gn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:V0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hu,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hu&&(e.usage=this.usage),e}}class Jf extends Gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qf extends Gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class St extends Gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let G0=0;const pn=new wt,Ia=new Lt,ps=new z,ln=new Pr,er=new Pr,Nt=new z;class Jt extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qf(e)?Qf:Jf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,i){return pn.makeTranslation(e,t,i),this.applyMatrix4(pn),this}scale(e,t,i){return pn.makeScale(e,t,i),this.applyMatrix4(pn),this}lookAt(e){return Ia.lookAt(e),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new St(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];er.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(ln.min,er.min),ln.expandByPoint(Nt),Nt.addVectors(ln.max,er.max),ln.expandByPoint(Nt)):(ln.expandByPoint(er.min),ln.expandByPoint(er.max))}ln.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Nt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(e,c),Nt.add(ps)),s=Math.max(s,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new z,l[I]=new z;const c=new z,u=new z,d=new z,f=new st,p=new st,g=new st,b=new z,m=new z;function h(I,S,x){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,x),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,x),u.sub(c),d.sub(c),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),a[I].add(b),a[S].add(b),a[x].add(b),l[I].add(m),l[S].add(m),l[x].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let I=0,S=A.length;I<S;++I){const x=A[I],P=x.start,q=x.count;for(let V=P,$=P+q;V<$;V+=3)h(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const T=new z,y=new z,F=new z,D=new z;function R(I){F.fromBufferAttribute(s,I),D.copy(F);const S=a[I];T.copy(S),T.sub(F.multiplyScalar(F.dot(S))).normalize(),y.crossVectors(D,S);const P=y.dot(l[I])<0?-1:1;o.setXYZW(I,T.x,T.y,T.z,P)}for(let I=0,S=A.length;I<S;++I){const x=A[I],P=x.start,q=x.count;for(let V=P,$=P+q;V<$;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,d=new z;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),b=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?p=l[b]*a.data.stride+a.offset:p=l[b]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new Gn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ru=new wt,Ui=new Kf,Zr=new jo,Cu=new z,Jr=new z,Qr=new z,eo=new z,Ua=new z,to=new z,Pu=new z,no=new z;class Pt extends Lt{constructor(e=new Jt,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Ua.fromBufferAttribute(d,e),o?to.addScaledVector(Ua,u):to.addScaledVector(Ua.sub(t),u))}t.add(to)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(Zr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Zr,Cu)===null||Ui.origin.distanceToSquared(Cu)>(e.far-e.near)**2))&&(Ru.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(Ru),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,b=f.length;g<b;g++){const m=f[g],h=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=A,F=T;y<F;y+=3){const D=a.getX(y),R=a.getX(y+1),I=a.getX(y+2);s=io(this,h,e,i,c,u,d,D,R,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),b=Math.min(a.count,p.start+p.count);for(let m=g,h=b;m<h;m+=3){const A=a.getX(m),T=a.getX(m+1),y=a.getX(m+2);s=io(this,o,e,i,c,u,d,A,T,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,b=f.length;g<b;g++){const m=f[g],h=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=A,F=T;y<F;y+=3){const D=y,R=y+1,I=y+2;s=io(this,h,e,i,c,u,d,D,R,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=g,h=b;m<h;m+=3){const A=m,T=m+1,y=m+2;s=io(this,o,e,i,c,u,d,A,T,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function W0(n,e,t,i,s,r,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ai,a),l===null)return null;no.copy(a),no.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(no);return c<t.near||c>t.far?null:{distance:c,point:no.clone(),object:n}}function io(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Jr),n.getVertexPosition(l,Qr),n.getVertexPosition(c,eo);const u=W0(n,e,t,i,Jr,Qr,eo,Pu);if(u){const d=new z;Sn.getBarycoord(Pu,Jr,Qr,eo,d),s&&(u.uv=Sn.getInterpolatedAttribute(s,a,l,c,d,new st)),r&&(u.uv1=Sn.getInterpolatedAttribute(r,a,l,c,d,new st)),o&&(u.normal=Sn.getInterpolatedAttribute(o,a,l,c,d,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};Sn.getNormal(Jr,Qr,eo,f.normal),u.face=f,u.barycoord=d}return u}class li extends Jt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(d,2));function g(b,m,h,A,T,y,F,D,R,I,S){const x=y/R,P=F/I,q=y/2,V=F/2,$=D/2,ne=R+1,X=I+1;let ee=0,H=0;const pe=new z;for(let Se=0;Se<X;Se++){const De=Se*P-V;for(let ze=0;ze<ne;ze++){const it=ze*x-q;pe[b]=it*A,pe[m]=De*T,pe[h]=$,c.push(pe.x,pe.y,pe.z),pe[b]=0,pe[m]=0,pe[h]=D>0?1:-1,u.push(pe.x,pe.y,pe.z),d.push(ze/R),d.push(1-Se/I),ee+=1}}for(let Se=0;Se<I;Se++)for(let De=0;De<R;De++){const ze=f+De+ne*Se,it=f+De+ne*(Se+1),ie=f+(De+1)+ne*(Se+1),me=f+(De+1)+ne*Se;l.push(ze,it,me),l.push(it,ie,me),H+=6}a.addGroup(p,H,S),p+=H,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Kt(n){const e={};for(let t=0;t<n.length;t++){const i=Fs(n[t]);for(const s in i)e[s]=i[s]}return e}function X0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function eh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const $0={clone:Fs,merge:Kt};var q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=X0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class th extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new z,Du=new st,Lu=new st;class gn extends th{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,Du,Lu),t.subVectors(Lu,Du)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ms=-90,gs=1;class K0 extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(ms,gs,e,t);s.layers=this.layers,this.add(s);const r=new gn(ms,gs,e,t);r.layers=this.layers,this.add(r);const o=new gn(ms,gs,e,t);o.layers=this.layers,this.add(o);const a=new gn(ms,gs,e,t);a.layers=this.layers,this.add(a);const l=new gn(ms,gs,e,t);l.layers=this.layers,this.add(l);const c=new gn(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class nh extends nn{constructor(e=[],t=Is,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class j0 extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new nh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new li(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Ei});r.uniforms.tEquirect.value=t;const o=new Pt(s,r),a=t.minFilter;return t.minFilter===Xi&&(t.minFilter=Hn),new K0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Si extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z0={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,i),h=this._getHandJoint(c,b);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Si;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Tc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new et(e),this.near=t,this.far=i}clone(){return new Tc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class J0 extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fa=new z,Q0=new z,e_=new Ze;class ki{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Fa.subVectors(i,t).cross(Q0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||e_.getNormalMatrix(e),s=this.coplanarPoint(Fa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new jo,t_=new st(.5,.5),so=new z;class Ac{constructor(e=new ki,t=new ki,i=new ki,s=new ki,r=new ki,o=new ki){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ai){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],p=s[8],g=s[9],b=s[10],m=s[11],h=s[12],A=s[13],T=s[14],y=s[15];if(i[0].setComponents(l-r,f-c,m-p,y-h).normalize(),i[1].setComponents(l+r,f+c,m+p,y+h).normalize(),i[2].setComponents(l+o,f+u,m+g,y+A).normalize(),i[3].setComponents(l-o,f-u,m-g,y-A).normalize(),i[4].setComponents(l-a,f-d,m-b,y-T).normalize(),t===ai)i[5].setComponents(l+a,f+d,m+b,y+T).normalize();else if(t===Lo)i[5].setComponents(a,d,b,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){Ni.center.set(0,0,0);const t=t_.distanceTo(e.center);return Ni.radius=.7071067811865476+t,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(so.x=s.normal.x>0?e.max.x:e.min.x,so.y=s.normal.y>0?e.max.y:e.min.y,so.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zo extends Gs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uo=new z,No=new z,Iu=new wt,tr=new Kf,ro=new jo,Oa=new z,Uu=new z;class Rc extends Lt{constructor(e=new Jt,t=new Zo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Uo.fromBufferAttribute(t,s-1),No.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Uo.distanceTo(No);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,e.ray.intersectsSphere(ro)===!1)return;Iu.copy(s).invert(),tr.copy(e.ray).applyMatrix4(Iu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let b=p,m=g-1;b<m;b+=c){const h=u.getX(b),A=u.getX(b+1),T=oo(this,e,tr,l,h,A,b);T&&t.push(T)}if(this.isLineLoop){const b=u.getX(g-1),m=u.getX(p),h=oo(this,e,tr,l,b,m,g-1);h&&t.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let b=p,m=g-1;b<m;b+=c){const h=oo(this,e,tr,l,b,b+1,b);h&&t.push(h)}if(this.isLineLoop){const b=oo(this,e,tr,l,g-1,p,g-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function oo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Uo.fromBufferAttribute(a,s),No.fromBufferAttribute(a,r),t.distanceSqToSegment(Uo,No,Oa,Uu)>i)return;Oa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Oa);if(!(c<e.near||c>e.far))return{distance:c,point:Uu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Nu=new z,Fu=new z;class n_ extends Rc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Nu.fromBufferAttribute(t,s),Fu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Nu.distanceTo(Fu);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ih extends nn{constructor(e,t,i=ji,s,r,o,a=Rn,l=Rn,c,u=Mr,d=1){if(u!==Mr&&u!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Dr extends Jt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new z,u=new st;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(a,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ki extends Jt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],p=[];let g=0;const b=[],m=i/2;let h=0;A(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new St(d,3)),this.setAttribute("normal",new St(f,3)),this.setAttribute("uv",new St(p,2));function A(){const y=new z,F=new z;let D=0;const R=(t-e)/i;for(let I=0;I<=r;I++){const S=[],x=I/r,P=x*(t-e)+e;for(let q=0;q<=s;q++){const V=q/s,$=V*l+a,ne=Math.sin($),X=Math.cos($);F.x=P*ne,F.y=-x*i+m,F.z=P*X,d.push(F.x,F.y,F.z),y.set(ne,R,X).normalize(),f.push(y.x,y.y,y.z),p.push(V,1-x),S.push(g++)}b.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){const x=b[S][I],P=b[S+1][I],q=b[S+1][I+1],V=b[S][I+1];(e>0||S!==0)&&(u.push(x,P,V),D+=3),(t>0||S!==r-1)&&(u.push(P,q,V),D+=3)}c.addGroup(h,D,0),h+=D}function T(y){const F=g,D=new st,R=new z;let I=0;const S=y===!0?e:t,x=y===!0?1:-1;for(let q=1;q<=s;q++)d.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),g++;const P=g;for(let q=0;q<=s;q++){const $=q/s*l+a,ne=Math.cos($),X=Math.sin($);R.x=S*X,R.y=m*x,R.z=S*ne,d.push(R.x,R.y,R.z),f.push(0,x,0),D.x=ne*.5+.5,D.y=X*.5*x+.5,p.push(D.x,D.y),g++}for(let q=0;q<s;q++){const V=F+q,$=P+q;y===!0?u.push($,$+1,V):u.push($+1,$,V),I+=3}c.addGroup(h,I,y===!0?1:2),h+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cc extends Ki{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Cc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lr extends Jt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,p=[],g=[],b=[],m=[];for(let h=0;h<u;h++){const A=h*f-o;for(let T=0;T<c;T++){const y=T*d-r;g.push(y,-A,0),b.push(0,0,1),m.push(T/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<a;A++){const T=A+c*h,y=A+c*(h+1),F=A+1+c*(h+1),D=A+1+c*h;p.push(T,y,D),p.push(y,F,D)}this.setIndex(p),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(b,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ws extends Jt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let d=e;const f=(t-e)/s,p=new z,g=new st;for(let b=0;b<=s;b++){for(let m=0;m<=i;m++){const h=r+m/i*o;p.x=d*Math.cos(h),p.y=d*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}d+=f}for(let b=0;b<s;b++){const m=b*(i+1);for(let h=0;h<i;h++){const A=h+m,T=A,y=A+i+1,F=A+i+2,D=A+1;a.push(T,y,D),a.push(y,F,D)}}this.setIndex(a),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Fo extends Jt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new z,f=new z,p=[],g=[],b=[],m=[];for(let h=0;h<=i;h++){const A=[],T=h/i;let y=0;h===0&&o===0?y=.5/t:h===i&&l===Math.PI&&(y=-.5/t);for(let F=0;F<=t;F++){const D=F/t;d.x=-e*Math.cos(s+D*r)*Math.sin(o+T*a),d.y=e*Math.cos(o+T*a),d.z=e*Math.sin(s+D*r)*Math.sin(o+T*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),b.push(f.x,f.y,f.z),m.push(D+y,1-T),A.push(c++)}u.push(A)}for(let h=0;h<i;h++)for(let A=0;A<t;A++){const T=u[h][A+1],y=u[h][A],F=u[h+1][A],D=u[h+1][A+1];(h!==0||o>0)&&p.push(T,y,D),(h!==i-1||l<Math.PI)&&p.push(y,F,D)}this.setIndex(p),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(b,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vi extends Gs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xf,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class i_ extends Gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class s_ extends Gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sh extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class r_ extends sh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ba=new wt,Ou=new z,Bu=new z;class o_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ac,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ou.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ou),Bu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bu),t.updateMatrixWorld(),Ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rh extends th{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class a_ extends o_{constructor(){super(new rh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class l_ extends sh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new a_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class c_ extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class u_ extends n_{constructor(e=10,t=10,i=4473924,s=8947848){i=new et(i),s=new et(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,p=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const b=f===r?i:s;b.toArray(c,p),p+=3,b.toArray(c,p),p+=3,b.toArray(c,p),p+=3,b.toArray(c,p),p+=3}const u=new Jt;u.setAttribute("position",new St(l,3)),u.setAttribute("color",new St(c,3));const d=new Zo({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const ku=new z;let ao,ka;class d_ extends Lt{constructor(e=new z(0,0,1),t=new z(0,0,0),i=1,s=16776960,r=i*.2,o=r*.2){super(),this.type="ArrowHelper",ao===void 0&&(ao=new Jt,ao.setAttribute("position",new St([0,0,0,0,1,0],3)),ka=new Cc(.5,1,5,1),ka.translate(0,-.5,0)),this.position.copy(t),this.line=new Rc(ao,new Zo({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Pt(ka,new vn({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{ku.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(ku,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}function zu(n,e,t,i){const s=f_(i);switch(t){case zf:return n*e;case Vf:return n*e/s.components*s.byteLength;case yc:return n*e/s.components*s.byteLength;case Gf:return n*e*2/s.components*s.byteLength;case Mc:return n*e*2/s.components*s.byteLength;case Hf:return n*e*3/s.components*s.byteLength;case wn:return n*e*4/s.components*s.byteLength;case Sc:return n*e*4/s.components*s.byteLength;case _o:case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vo:case bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sl:case wl:return Math.max(n,16)*Math.max(e,8)/4;case Ml:case El:return Math.max(n,8)*Math.max(e,8)/2;case Tl:case Al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Il:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case kl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yo:case Gl:case Wl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Wf:case Xl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $l:case ql:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function f_(n){switch(n){case Xn:case Of:return{byteLength:1,components:1};case br:case Bf:case Rr:return{byteLength:2,components:1};case vc:case bc:return{byteLength:2,components:4};case ji:case xc:case oi:return{byteLength:4,components:1};case kf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_c);function oh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function h_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],b=d[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++f,d[f]=b)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const b=d[p];n.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var p_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m_=`#ifdef USE_ALPHAHASH
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
#endif`,g_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,__=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b_=`#ifdef USE_AOMAP
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
#endif`,y_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M_=`#ifdef USE_BATCHING
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
#endif`,S_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,A_=`#ifdef USE_IRIDESCENCE
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
#endif`,R_=`#ifdef USE_BUMPMAP
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
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,O_=`#define PI 3.141592653589793
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
} // validated`,B_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k_=`vec3 transformedNormal = objectNormal;
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
#endif`,z_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W_="gl_FragColor = linearToOutputTexel( gl_FragColor );",X_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$_=`#ifdef USE_ENVMAP
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
#endif`,q_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y_=`#ifdef USE_ENVMAP
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
#endif`,K_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j_=`#ifdef USE_ENVMAP
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
#endif`,Z_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tx=`#ifdef USE_GRADIENTMAP
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
}`,nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rx=`uniform bool receiveShadow;
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
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dx=`PhysicalMaterial material;
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
#endif`,fx=`struct PhysicalMaterial {
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
}`,hx=`
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
#endif`,px=`#if defined( RE_IndirectDiffuse )
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
#endif`,mx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_x=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sx=`#if defined( USE_POINTS_UV )
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
#endif`,Ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ax=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`#ifdef USE_MORPHTARGETS
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
#endif`,Px=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fx=`#ifdef USE_NORMALMAP
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
#endif`,Ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jx=`float getShadowMask() {
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
}`,Qx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ev=`#ifdef USE_SKINNING
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
#endif`,tv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nv=`#ifdef USE_SKINNING
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
#endif`,iv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ov=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,av=`#ifdef USE_TRANSMISSION
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
#endif`,lv=`#ifdef USE_TRANSMISSION
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
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pv=`uniform sampler2D t2D;
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
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`#include <common>
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
}`,bv=`#if DEPTH_PACKING == 3200
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
}`,yv=`#define DISTANCE
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
}`,Mv=`#define DISTANCE
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
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`uniform float scale;
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
}`,Tv=`uniform vec3 diffuse;
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
}`,Av=`#include <common>
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
}`,Rv=`uniform vec3 diffuse;
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
}`,Cv=`#define LAMBERT
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
}`,Pv=`#define LAMBERT
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
}`,Dv=`#define MATCAP
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
}`,Lv=`#define MATCAP
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
}`,Iv=`#define NORMAL
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
}`,Uv=`#define NORMAL
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
}`,Nv=`#define PHONG
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
}`,Fv=`#define PHONG
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
}`,Ov=`#define STANDARD
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
}`,Bv=`#define STANDARD
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
}`,kv=`#define TOON
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
}`,zv=`#define TOON
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
}`,Hv=`uniform float size;
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
}`,Vv=`uniform vec3 diffuse;
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
}`,Gv=`#include <common>
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
}`,Wv=`uniform vec3 color;
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
}`,Xv=`uniform float rotation;
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
}`,$v=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:p_,alphahash_pars_fragment:m_,alphamap_fragment:g_,alphamap_pars_fragment:__,alphatest_fragment:x_,alphatest_pars_fragment:v_,aomap_fragment:b_,aomap_pars_fragment:y_,batching_pars_vertex:M_,batching_vertex:S_,begin_vertex:E_,beginnormal_vertex:w_,bsdfs:T_,iridescence_fragment:A_,bumpmap_pars_fragment:R_,clipping_planes_fragment:C_,clipping_planes_pars_fragment:P_,clipping_planes_pars_vertex:D_,clipping_planes_vertex:L_,color_fragment:I_,color_pars_fragment:U_,color_pars_vertex:N_,color_vertex:F_,common:O_,cube_uv_reflection_fragment:B_,defaultnormal_vertex:k_,displacementmap_pars_vertex:z_,displacementmap_vertex:H_,emissivemap_fragment:V_,emissivemap_pars_fragment:G_,colorspace_fragment:W_,colorspace_pars_fragment:X_,envmap_fragment:$_,envmap_common_pars_fragment:q_,envmap_pars_fragment:Y_,envmap_pars_vertex:K_,envmap_physical_pars_fragment:ox,envmap_vertex:j_,fog_vertex:Z_,fog_pars_vertex:J_,fog_fragment:Q_,fog_pars_fragment:ex,gradientmap_pars_fragment:tx,lightmap_pars_fragment:nx,lights_lambert_fragment:ix,lights_lambert_pars_fragment:sx,lights_pars_begin:rx,lights_toon_fragment:ax,lights_toon_pars_fragment:lx,lights_phong_fragment:cx,lights_phong_pars_fragment:ux,lights_physical_fragment:dx,lights_physical_pars_fragment:fx,lights_fragment_begin:hx,lights_fragment_maps:px,lights_fragment_end:mx,logdepthbuf_fragment:gx,logdepthbuf_pars_fragment:_x,logdepthbuf_pars_vertex:xx,logdepthbuf_vertex:vx,map_fragment:bx,map_pars_fragment:yx,map_particle_fragment:Mx,map_particle_pars_fragment:Sx,metalnessmap_fragment:Ex,metalnessmap_pars_fragment:wx,morphinstance_vertex:Tx,morphcolor_vertex:Ax,morphnormal_vertex:Rx,morphtarget_pars_vertex:Cx,morphtarget_vertex:Px,normal_fragment_begin:Dx,normal_fragment_maps:Lx,normal_pars_fragment:Ix,normal_pars_vertex:Ux,normal_vertex:Nx,normalmap_pars_fragment:Fx,clearcoat_normal_fragment_begin:Ox,clearcoat_normal_fragment_maps:Bx,clearcoat_pars_fragment:kx,iridescence_pars_fragment:zx,opaque_fragment:Hx,packing:Vx,premultiplied_alpha_fragment:Gx,project_vertex:Wx,dithering_fragment:Xx,dithering_pars_fragment:$x,roughnessmap_fragment:qx,roughnessmap_pars_fragment:Yx,shadowmap_pars_fragment:Kx,shadowmap_pars_vertex:jx,shadowmap_vertex:Zx,shadowmask_pars_fragment:Jx,skinbase_vertex:Qx,skinning_pars_vertex:ev,skinning_vertex:tv,skinnormal_vertex:nv,specularmap_fragment:iv,specularmap_pars_fragment:sv,tonemapping_fragment:rv,tonemapping_pars_fragment:ov,transmission_fragment:av,transmission_pars_fragment:lv,uv_pars_fragment:cv,uv_pars_vertex:uv,uv_vertex:dv,worldpos_vertex:fv,background_vert:hv,background_frag:pv,backgroundCube_vert:mv,backgroundCube_frag:gv,cube_vert:_v,cube_frag:xv,depth_vert:vv,depth_frag:bv,distanceRGBA_vert:yv,distanceRGBA_frag:Mv,equirect_vert:Sv,equirect_frag:Ev,linedashed_vert:wv,linedashed_frag:Tv,meshbasic_vert:Av,meshbasic_frag:Rv,meshlambert_vert:Cv,meshlambert_frag:Pv,meshmatcap_vert:Dv,meshmatcap_frag:Lv,meshnormal_vert:Iv,meshnormal_frag:Uv,meshphong_vert:Nv,meshphong_frag:Fv,meshphysical_vert:Ov,meshphysical_frag:Bv,meshtoon_vert:kv,meshtoon_frag:zv,points_vert:Hv,points_frag:Vv,shadow_vert:Gv,shadow_frag:Wv,sprite_vert:Xv,sprite_frag:$v},ye={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Bn={basic:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new et(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Kt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Kt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new et(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Kt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Kt([ye.points,ye.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Kt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Kt([ye.common,ye.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Kt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Kt([ye.sprite,ye.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Kt([ye.common,ye.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Kt([ye.lights,ye.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Bn.physical={uniforms:Kt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const lo={r:0,b:0,g:0},Fi=new $n,qv=new wt;function Yv(n,e,t,i,s,r,o){const a=new et(0);let l=r===!0?0:1,c,u,d=null,f=0,p=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function b(T){let y=!1;const F=g(T);F===null?h(a,l):F&&F.isColor&&(h(F,1),y=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,y){const F=g(y);F&&(F.isCubeTexture||F.mapping===Ko)?(u===void 0&&(u=new Pt(new li(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Fs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Fi.copy(y.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),u.material.uniforms.envMap.value=F,u.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qv.makeRotationFromEuler(Fi)),u.material.toneMapped=at.getTransfer(F.colorSpace)!==mt,(d!==F||f!==F.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=F,f=F.version,p=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):F&&F.isTexture&&(c===void 0&&(c=new Pt(new Lr(2,2),new Ri({name:"BackgroundMaterial",uniforms:Fs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=F,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=at.getTransfer(F.colorSpace)!==mt,F.matrixAutoUpdate===!0&&F.updateMatrix(),c.material.uniforms.uvTransform.value.copy(F.matrix),(d!==F||f!==F.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=F,f=F.version,p=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function h(T,y){T.getRGB(lo,eh(n)),i.buffers.color.setClear(lo.r,lo.g,lo.b,y,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,y=1){a.set(T),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(a,l)},render:b,addToRenderList:m,dispose:A}}function Kv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(x,P,q,V,$){let ne=!1;const X=d(V,q,P);r!==X&&(r=X,c(r.object)),ne=p(x,V,q,$),ne&&g(x,V,q,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,y(x,P,q,V),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,P,q){const V=q.wireframe===!0;let $=i[x.id];$===void 0&&($={},i[x.id]=$);let ne=$[P.id];ne===void 0&&(ne={},$[P.id]=ne);let X=ne[V];return X===void 0&&(X=f(l()),ne[V]=X),X}function f(x){const P=[],q=[],V=[];for(let $=0;$<t;$++)P[$]=0,q[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:q,attributeDivisors:V,object:x,attributes:{},index:null}}function p(x,P,q,V){const $=r.attributes,ne=P.attributes;let X=0;const ee=q.getAttributes();for(const H in ee)if(ee[H].location>=0){const Se=$[H];let De=ne[H];if(De===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(De=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(De=x.instanceColor)),Se===void 0||Se.attribute!==De||De&&Se.data!==De.data)return!0;X++}return r.attributesNum!==X||r.index!==V}function g(x,P,q,V){const $={},ne=P.attributes;let X=0;const ee=q.getAttributes();for(const H in ee)if(ee[H].location>=0){let Se=ne[H];Se===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(Se=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(Se=x.instanceColor));const De={};De.attribute=Se,Se&&Se.data&&(De.data=Se.data),$[H]=De,X++}r.attributes=$,r.attributesNum=X,r.index=V}function b(){const x=r.newAttributes;for(let P=0,q=x.length;P<q;P++)x[P]=0}function m(x){h(x,0)}function h(x,P){const q=r.newAttributes,V=r.enabledAttributes,$=r.attributeDivisors;q[x]=1,V[x]===0&&(n.enableVertexAttribArray(x),V[x]=1),$[x]!==P&&(n.vertexAttribDivisor(x,P),$[x]=P)}function A(){const x=r.newAttributes,P=r.enabledAttributes;for(let q=0,V=P.length;q<V;q++)P[q]!==x[q]&&(n.disableVertexAttribArray(q),P[q]=0)}function T(x,P,q,V,$,ne,X){X===!0?n.vertexAttribIPointer(x,P,q,$,ne):n.vertexAttribPointer(x,P,q,V,$,ne)}function y(x,P,q,V){b();const $=V.attributes,ne=q.getAttributes(),X=P.defaultAttributeValues;for(const ee in ne){const H=ne[ee];if(H.location>=0){let pe=$[ee];if(pe===void 0&&(ee==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),ee==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor)),pe!==void 0){const Se=pe.normalized,De=pe.itemSize,ze=e.get(pe);if(ze===void 0)continue;const it=ze.buffer,ie=ze.type,me=ze.bytesPerElement,Ae=ie===n.INT||ie===n.UNSIGNED_INT||pe.gpuType===xc;if(pe.isInterleavedBufferAttribute){const be=pe.data,Fe=be.stride,tt=pe.offset;if(be.isInstancedInterleavedBuffer){for(let ke=0;ke<H.locationSize;ke++)h(H.location+ke,be.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let ke=0;ke<H.locationSize;ke++)m(H.location+ke);n.bindBuffer(n.ARRAY_BUFFER,it);for(let ke=0;ke<H.locationSize;ke++)T(H.location+ke,De/H.locationSize,ie,Se,Fe*me,(tt+De/H.locationSize*ke)*me,Ae)}else{if(pe.isInstancedBufferAttribute){for(let be=0;be<H.locationSize;be++)h(H.location+be,pe.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let be=0;be<H.locationSize;be++)m(H.location+be);n.bindBuffer(n.ARRAY_BUFFER,it);for(let be=0;be<H.locationSize;be++)T(H.location+be,De/H.locationSize,ie,Se,De*me,De/H.locationSize*be*me,Ae)}}else if(X!==void 0){const Se=X[ee];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(H.location,Se);break;case 3:n.vertexAttrib3fv(H.location,Se);break;case 4:n.vertexAttrib4fv(H.location,Se);break;default:n.vertexAttrib1fv(H.location,Se)}}}}A()}function F(){I();for(const x in i){const P=i[x];for(const q in P){const V=P[q];for(const $ in V)u(V[$].object),delete V[$];delete P[q]}delete i[x]}}function D(x){if(i[x.id]===void 0)return;const P=i[x.id];for(const q in P){const V=P[q];for(const $ in V)u(V[$].object),delete V[$];delete P[q]}delete i[x.id]}function R(x){for(const P in i){const q=i[P];if(q[x.id]===void 0)continue;const V=q[x.id];for(const $ in V)u(V[$].object),delete V[$];delete q[x.id]}}function I(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:m,disableUnusedAttributes:A}}function jv(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let b=0;b<d;b++)g+=u[b]*f[b];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==wn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===Rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Xn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==oi&&!I)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:F,maxSamples:D}}function Jv(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ki,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const A=r?0:i,T=A*4;let y=h.clippingState||null;l.value=y,y=u(g,f,T,p);for(let F=0;F!==T;++F)y[F]=t[F];h.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const b=d!==null?d.length:0;let m=null;if(b!==0){if(m=l.value,g!==!0||m===null){const h=p+b*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<h)&&(m=new Float32Array(h));for(let T=0,y=p;T!==b;++T,y+=4)o.copy(d[T]).applyMatrix4(A,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function Qv(n){let e=new WeakMap;function t(o,a){return a===xl?o.mapping=Is:a===vl&&(o.mapping=Us),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===xl||a===vl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new j0(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ys=4,Hu=[.125,.215,.35,.446,.526,.582],Gi=20,za=new rh,Vu=new et;let Ha=null,Va=0,Ga=0,Wa=!1;const zi=(1+Math.sqrt(5))/2,_s=1/zi,Gu=[new z(-zi,_s,0),new z(zi,_s,0),new z(-_s,0,zi),new z(_s,0,zi),new z(0,zi,-_s),new z(0,zi,_s),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],eb=new z;class Wu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=eb}=r;Ha=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ha,Va,Ga),this._renderer.xr.enabled=Wa,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ha=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Rr,format:wn,colorSpace:Ns,depthBuffer:!1},s=Xu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tb(r)),this._blurMaterial=nb(r,e,t)}return s}_compileMaterial(e){const t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,i,s,r){const l=new gn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Vu),d.toneMapping=wi,d.autoClear=!1;const g=new vn({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),b=new Pt(new li,g);let m=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,m=!0):(g.color.copy(Vu),m=!0);for(let A=0;A<6;A++){const T=A%3;T===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):T===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const y=this._cubeSize;co(s,T*y,A>2?y:0,y,y),d.setRenderTarget(s),m&&d.render(b,l),d.render(e,l)}b.geometry.dispose(),b.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Is||e.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$u());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;co(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,za)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gu[(s-r-1)%Gu.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Pt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Gi-1),b=r/g,m=isFinite(r)?1+Math.floor(u*b):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const h=[];let A=0;for(let R=0;R<Gi;++R){const I=R/b,S=Math.exp(-I*I/2);h.push(S),R===0?A+=S:R<m&&(A+=2*S)}for(let R=0;R<h.length;R++)h[R]=h[R]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-i;const y=this._sizeLods[s],F=3*y*(s>T-ys?s-T+ys:0),D=4*(this._cubeSize-y);co(t,F,D,3*y,2*y),l.setRenderTarget(t),l.render(d,za)}}function tb(n){const e=[],t=[],i=[];let s=n;const r=n-ys+1+Hu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ys?l=Hu[o-n+ys-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,b=3,m=2,h=1,A=new Float32Array(b*g*p),T=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let D=0;D<p;D++){const R=D%3*2/3-1,I=D>2?0:-1,S=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];A.set(S,b*g*D),T.set(f,m*g*D);const x=[D,D,D,D,D,D];y.set(x,h*g*D)}const F=new Jt;F.setAttribute("position",new Gn(A,b)),F.setAttribute("uv",new Gn(T,m)),F.setAttribute("faceIndex",new Gn(y,h)),e.push(F),s>ys&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xu(n,e,t){const i=new Zi(n,e,t);return i.texture.mapping=Ko,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function co(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function nb(n,e,t){const i=new Float32Array(Gi),s=new z(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pc(),fragmentShader:`

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
	`}function ib(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===xl||l===vl,u=l===Is||l===Us;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Wu(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Wu(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function sb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Rs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function rb(n,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let b=0;if(p!==null){const A=p.array;b=p.version;for(let T=0,y=A.length;T<y;T+=3){const F=A[T+0],D=A[T+1],R=A[T+2];f.push(F,D,D,R,R,F)}}else if(g!==void 0){const A=g.array;b=g.version;for(let T=0,y=A.length/3-1;T<y;T+=3){const F=T+0,D=T+1,R=T+2;f.push(F,D,D,R,R,F)}}else return;const m=new(qf(f)?Qf:Jf)(f,1);m.version=b;const h=r.get(d);h&&e.remove(h),r.set(d,m)}function u(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function ob(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function d(f,p,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],b[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,b,0,g);let h=0;for(let A=0;A<g;A++)h+=p[A]*b[A];t.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ab(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function lb(n,e,t){const i=new WeakMap,s=new At;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let x=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),b===!0&&(y=2),m===!0&&(y=3);let F=a.attributes.position.count*y,D=1;F>e.maxTextureSize&&(D=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const R=new Float32Array(F*D*4*d),I=new Yf(R,F,D,d);I.type=oi,I.needsUpdate=!0;const S=y*4;for(let P=0;P<d;P++){const q=h[P],V=A[P],$=T[P],ne=F*D*4*P;for(let X=0;X<q.count;X++){const ee=X*S;g===!0&&(s.fromBufferAttribute(q,X),R[ne+ee+0]=s.x,R[ne+ee+1]=s.y,R[ne+ee+2]=s.z,R[ne+ee+3]=0),b===!0&&(s.fromBufferAttribute(V,X),R[ne+ee+4]=s.x,R[ne+ee+5]=s.y,R[ne+ee+6]=s.z,R[ne+ee+7]=0),m===!0&&(s.fromBufferAttribute($,X),R[ne+ee+8]=s.x,R[ne+ee+9]=s.y,R[ne+ee+10]=s.z,R[ne+ee+11]=$.itemSize===4?s.w:1)}}f={count:d,texture:I,size:new st(F,D)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const b=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",b),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function cb(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const ah=new nn,Yu=new ih(1,1),lh=new Yf,ch=new I0,uh=new nh,Ku=[],ju=[],Zu=new Float32Array(16),Ju=new Float32Array(9),Qu=new Float32Array(4);function Xs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ku[s];if(r===void 0&&(r=new Float32Array(s),Ku[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Jo(n,e){let t=ju[e];t===void 0&&(t=new Int32Array(e),ju[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ub(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function db(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function fb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function hb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function pb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;Qu.set(i),n.uniformMatrix2fv(this.addr,!1,Qu),Ut(t,i)}}function mb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;Ju.set(i),n.uniformMatrix3fv(this.addr,!1,Ju),Ut(t,i)}}function gb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;Zu.set(i),n.uniformMatrix4fv(this.addr,!1,Zu),Ut(t,i)}}function _b(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function vb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function yb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function Sb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function Eb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function wb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Yu.compareFunction=$f,r=Yu):r=ah,t.setTexture2D(e||r,s)}function Tb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ch,s)}function Ab(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||uh,s)}function Rb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||lh,s)}function Cb(n){switch(n){case 5126:return ub;case 35664:return db;case 35665:return fb;case 35666:return hb;case 35674:return pb;case 35675:return mb;case 35676:return gb;case 5124:case 35670:return _b;case 35667:case 35671:return xb;case 35668:case 35672:return vb;case 35669:case 35673:return bb;case 5125:return yb;case 36294:return Mb;case 36295:return Sb;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return wb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return Rb}}function Pb(n,e){n.uniform1fv(this.addr,e)}function Db(n,e){const t=Xs(e,this.size,2);n.uniform2fv(this.addr,t)}function Lb(n,e){const t=Xs(e,this.size,3);n.uniform3fv(this.addr,t)}function Ib(n,e){const t=Xs(e,this.size,4);n.uniform4fv(this.addr,t)}function Ub(n,e){const t=Xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Nb(n,e){const t=Xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Fb(n,e){const t=Xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ob(n,e){n.uniform1iv(this.addr,e)}function Bb(n,e){n.uniform2iv(this.addr,e)}function kb(n,e){n.uniform3iv(this.addr,e)}function zb(n,e){n.uniform4iv(this.addr,e)}function Hb(n,e){n.uniform1uiv(this.addr,e)}function Vb(n,e){n.uniform2uiv(this.addr,e)}function Gb(n,e){n.uniform3uiv(this.addr,e)}function Wb(n,e){n.uniform4uiv(this.addr,e)}function Xb(n,e,t){const i=this.cache,s=e.length,r=Jo(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ah,r[o])}function $b(n,e,t){const i=this.cache,s=e.length,r=Jo(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ch,r[o])}function qb(n,e,t){const i=this.cache,s=e.length,r=Jo(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||uh,r[o])}function Yb(n,e,t){const i=this.cache,s=e.length,r=Jo(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||lh,r[o])}function Kb(n){switch(n){case 5126:return Pb;case 35664:return Db;case 35665:return Lb;case 35666:return Ib;case 35674:return Ub;case 35675:return Nb;case 35676:return Fb;case 5124:case 35670:return Ob;case 35667:case 35671:return Bb;case 35668:case 35672:return kb;case 35669:case 35673:return zb;case 5125:return Hb;case 36294:return Vb;case 36295:return Gb;case 36296:return Wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Xb;case 35679:case 36299:case 36307:return $b;case 35680:case 36300:case 36308:case 36293:return qb;case 36289:case 36303:case 36311:case 36292:return Yb}}class jb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Cb(t.type)}}class Zb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kb(t.type)}}class Jb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function ed(n,e){n.seq.push(e),n.map[e.id]=e}function Qb(n,e,t){const i=n.name,s=i.length;for(Xa.lastIndex=0;;){const r=Xa.exec(i),o=Xa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ed(t,c===void 0?new jb(a,n,e):new Zb(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Jb(a),ed(t,d)),t=d}}}class Mo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Qb(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function td(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ey=37297;let ty=0;function ny(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const nd=new Ze;function iy(n){at._getMatrix(nd,at.workingColorSpace,n);const e=`mat3( ${nd.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case Do:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function id(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ny(n.getShaderSource(e),o)}else return s}function sy(n,e){const t=iy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ry(n,e){let t;switch(e){case Wg:t="Linear";break;case Xg:t="Reinhard";break;case $g:t="Cineon";break;case qg:t="ACESFilmic";break;case Kg:t="AgX";break;case jg:t="Neutral";break;case Yg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const uo=new z;function oy(){at.getLuminanceCoefficients(uo);const n=uo.x.toFixed(4),e=uo.y.toFixed(4),t=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ay(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function ly(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function sr(n){return n!==""}function sd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(n){return n.replace(uy,fy)}const dy=new Map;function fy(n,e){let t=Qe[e];if(t===void 0){const i=dy.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yl(t)}const hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function od(n){return n.replace(hy,py)}function py(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ad(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function my(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===If?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Uf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function gy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Is:case Us:e="ENVMAP_TYPE_CUBE";break;case Ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _y(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Us&&(e="ENVMAP_MODE_REFRACTION"),e}function xy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Nf:e="ENVMAP_BLENDING_MULTIPLY";break;case Vg:e="ENVMAP_BLENDING_MIX";break;case Gg:e="ENVMAP_BLENDING_ADD";break}return e}function vy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function by(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=my(t),c=gy(t),u=_y(t),d=xy(t),f=vy(t),p=ay(t),g=ly(r),b=s.createProgram();let m,h,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sr).join(`
`),h.length>0&&(h+=`
`)):(m=[ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),h=[ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==wi?ry("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,sy("linearToOutputTexel",t.outputColorSpace),oy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),o=Yl(o),o=sd(o,t),o=rd(o,t),a=Yl(a),a=sd(a,t),a=rd(a,t),o=od(o),a=od(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=A+m+o,y=A+h+a,F=td(s,s.VERTEX_SHADER,T),D=td(s,s.FRAGMENT_SHADER,y);s.attachShader(b,F),s.attachShader(b,D),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function R(P){if(n.debug.checkShaderErrors){const q=s.getProgramInfoLog(b).trim(),V=s.getShaderInfoLog(F).trim(),$=s.getShaderInfoLog(D).trim();let ne=!0,X=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,F,D);else{const ee=id(s,F,"vertex"),H=id(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+q+`
`+ee+`
`+H)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(V===""||$==="")&&(X=!1);X&&(P.diagnostics={runnable:ne,programLog:q,vertexShader:{log:V,prefix:m},fragmentShader:{log:$,prefix:h}})}s.deleteShader(F),s.deleteShader(D),I=new Mo(s,b),S=cy(s,b)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(b,ey)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ty++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=F,this.fragmentShader=D,this}let yy=0;class My{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Sy(e),t.set(e,i)),i}}class Sy{constructor(e){this.id=yy++,this.code=e,this.usedTimes=0}}function Ey(n,e,t,i,s,r,o){const a=new jf,l=new My,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,P,q,V){const $=q.fog,ne=V.geometry,X=S.isMeshStandardMaterial?q.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),H=ee&&ee.mapping===Ko?ee.image.height:null,pe=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Se=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,De=Se!==void 0?Se.length:0;let ze=0;ne.morphAttributes.position!==void 0&&(ze=1),ne.morphAttributes.normal!==void 0&&(ze=2),ne.morphAttributes.color!==void 0&&(ze=3);let it,ie,me,Ae;if(pe){const lt=Bn[pe];it=lt.vertexShader,ie=lt.fragmentShader}else it=S.vertexShader,ie=S.fragmentShader,l.update(S),me=l.getVertexShaderID(S),Ae=l.getFragmentShaderID(S);const be=n.getRenderTarget(),Fe=n.state.buffers.depth.getReversed(),tt=V.isInstancedMesh===!0,ke=V.isBatchedMesh===!0,vt=!!S.map,C=!!S.matcap,N=!!ee,M=!!S.aoMap,se=!!S.lightMap,Z=!!S.bumpMap,te=!!S.normalMap,J=!!S.displacementMap,re=!!S.emissiveMap,j=!!S.metalnessMap,Y=!!S.roughnessMap,we=S.anisotropy>0,w=S.clearcoat>0,_=S.dispersion>0,O=S.iridescence>0,W=S.sheen>0,Q=S.transmission>0,G=we&&!!S.anisotropyMap,ve=w&&!!S.clearcoatMap,de=w&&!!S.clearcoatNormalMap,Te=w&&!!S.clearcoatRoughnessMap,Ce=O&&!!S.iridescenceMap,le=O&&!!S.iridescenceThicknessMap,Re=W&&!!S.sheenColorMap,Ie=W&&!!S.sheenRoughnessMap,Ue=!!S.specularMap,xe=!!S.specularColorMap,Ve=!!S.specularIntensityMap,B=Q&&!!S.transmissionMap,Me=Q&&!!S.thicknessMap,ue=!!S.gradientMap,Pe=!!S.alphaMap,fe=S.alphaTest>0,ae=!!S.alphaHash,Ne=!!S.extensions;let Ge=wi;S.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const _t={shaderID:pe,shaderType:S.type,shaderName:S.name,vertexShader:it,fragmentShader:ie,defines:S.defines,customVertexShaderID:me,customFragmentShaderID:Ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ke,batchingColor:ke&&V._colorsTexture!==null,instancing:tt,instancingColor:tt&&V.instanceColor!==null,instancingMorph:tt&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:be===null?n.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ns,alphaToCoverage:!!S.alphaToCoverage,map:vt,matcap:C,envMap:N,envMapMode:N&&ee.mapping,envMapCubeUVHeight:H,aoMap:M,lightMap:se,bumpMap:Z,normalMap:te,displacementMap:f&&J,emissiveMap:re,normalMapObjectSpace:te&&S.normalMapType===e0,normalMapTangentSpace:te&&S.normalMapType===Xf,metalnessMap:j,roughnessMap:Y,anisotropy:we,anisotropyMap:G,clearcoat:w,clearcoatMap:ve,clearcoatNormalMap:de,clearcoatRoughnessMap:Te,dispersion:_,iridescence:O,iridescenceMap:Ce,iridescenceThicknessMap:le,sheen:W,sheenColorMap:Re,sheenRoughnessMap:Ie,specularMap:Ue,specularColorMap:xe,specularIntensityMap:Ve,transmission:Q,transmissionMap:B,thicknessMap:Me,gradientMap:ue,opaque:S.transparent===!1&&S.blending===As&&S.alphaToCoverage===!1,alphaMap:Pe,alphaTest:fe,alphaHash:ae,combine:S.combine,mapUv:vt&&b(S.map.channel),aoMapUv:M&&b(S.aoMap.channel),lightMapUv:se&&b(S.lightMap.channel),bumpMapUv:Z&&b(S.bumpMap.channel),normalMapUv:te&&b(S.normalMap.channel),displacementMapUv:J&&b(S.displacementMap.channel),emissiveMapUv:re&&b(S.emissiveMap.channel),metalnessMapUv:j&&b(S.metalnessMap.channel),roughnessMapUv:Y&&b(S.roughnessMap.channel),anisotropyMapUv:G&&b(S.anisotropyMap.channel),clearcoatMapUv:ve&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:de&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:le&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&b(S.sheenRoughnessMap.channel),specularMapUv:Ue&&b(S.specularMap.channel),specularColorMapUv:xe&&b(S.specularColorMap.channel),specularIntensityMapUv:Ve&&b(S.specularIntensityMap.channel),transmissionMapUv:B&&b(S.transmissionMap.channel),thicknessMapUv:Me&&b(S.thicknessMap.channel),alphaMapUv:Pe&&b(S.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(te||we),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ne.attributes.uv&&(vt||Pe),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Fe,skinning:V.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:ze,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:vt&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===mt,decodeVideoTextureEmissive:re&&S.emissiveMap.isVideoTexture===!0&&at.getTransfer(S.emissiveMap.colorSpace)===mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Gt,flipSided:S.side===tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ne&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&S.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function h(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)x.push(P),x.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(A(x,S),T(x,S),x.push(n.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function A(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function T(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const x=g[S.type];let P;if(x){const q=Bn[x];P=$0.clone(q.uniforms)}else P=S.uniforms;return P}function F(S,x){let P;for(let q=0,V=u.length;q<V;q++){const $=u[q];if($.cacheKey===x){P=$,++P.usedTimes;break}}return P===void 0&&(P=new by(n,x,S,r),u.push(P)),P}function D(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function R(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:F,releaseProgram:D,releaseShaderCache:R,programs:u,dispose:I}}function wy(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Ty(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ld(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,p,g,b,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:b,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=b,h.group=m),e++,h}function a(d,f,p,g,b,m){const h=o(d,f,p,g,b,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(d,f,p,g,b,m){const h=o(d,f,p,g,b,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||Ty),i.length>1&&i.sort(f||ld),s.length>1&&s.sort(f||ld)}function u(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Ay(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new cd,n.set(i,[o])):s>=r.length?(o=new cd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ry(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new et};break;case"SpotLight":t={position:new z,direction:new z,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Cy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Py=0;function Dy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ly(n){const e=new Ry,t=Cy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const s=new z,r=new wt,o=new wt;function a(c){let u=0,d=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,b=0,m=0,h=0,A=0,T=0,y=0,F=0,D=0,R=0;c.sort(Dy);for(let S=0,x=c.length;S<x;S++){const P=c[S],q=P.color,V=P.intensity,$=P.distance,ne=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=q.r*V,d+=q.g*V,f+=q.b*V;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],V);R++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,H=t.get(P);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=ne,i.directionalShadowMatrix[p]=P.shadow.matrix,A++}i.directional[p]=X,p++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(q).multiplyScalar(V),X.distance=$,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[b]=X;const ee=P.shadow;if(P.map&&(i.spotLightMap[F]=P.map,F++,ee.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[b]=ee.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,i.spotShadow[b]=H,i.spotShadowMap[b]=ne,y++}b++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(q).multiplyScalar(V),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=X,m++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const ee=P.shadow,H=t.get(P);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,H.shadowCameraNear=ee.camera.near,H.shadowCameraFar=ee.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=ne,i.pointShadowMatrix[g]=P.shadow.matrix,T++}i.point[g]=X,g++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(V),X.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[h]=X,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==b||I.rectAreaLength!==m||I.hemiLength!==h||I.numDirectionalShadows!==A||I.numPointShadows!==T||I.numSpotShadows!==y||I.numSpotMaps!==F||I.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=b,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=y+F-D,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=R,I.directionalLength=p,I.pointLength=g,I.spotLength=b,I.rectAreaLength=m,I.hemiLength=h,I.numDirectionalShadows=A,I.numPointShadows=T,I.numSpotShadows=y,I.numSpotMaps=F,I.numLightProbes=R,i.version=Py++)}function l(c,u){let d=0,f=0,p=0,g=0,b=0;const m=u.matrixWorldInverse;for(let h=0,A=c.length;h<A;h++){const T=c[h];if(T.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(T.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const y=i.hemi[b];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),b++}}}return{setup:a,setupView:l,state:i}}function ud(n){const e=new Ly(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Iy(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ud(n),e.set(s,[a])):r>=o.length?(a=new ud(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ny=`uniform sampler2D shadow_pass;
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
}`;function Fy(n,e,t){let i=new Ac;const s=new st,r=new st,o=new At,a=new i_({depthPacking:Qg}),l=new s_,c={},u=t.maxTextureSize,d={[Ai]:tn,[tn]:Ai,[Gt]:Gt},f=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Uy,fragmentShader:Ny}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Jt;g.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Pt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=If;let h=this.type;this.render=function(D,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const S=n.getRenderTarget(),x=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Ei),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const V=h!==ti&&this.type===ti,$=h===ti&&this.type!==ti;for(let ne=0,X=D.length;ne<X;ne++){const ee=D[ne],H=ee.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const pe=H.getFrameExtents();if(s.multiply(pe),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pe.x),s.x=r.x*pe.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pe.y),s.y=r.y*pe.y,H.mapSize.y=r.y)),H.map===null||V===!0||$===!0){const De=this.type!==ti?{minFilter:Rn,magFilter:Rn}:{};H.map!==null&&H.map.dispose(),H.map=new Zi(s.x,s.y,De),H.map.texture.name=ee.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const Se=H.getViewportCount();for(let De=0;De<Se;De++){const ze=H.getViewport(De);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),q.viewport(o),H.updateMatrices(ee,De),i=H.getFrustum(),y(R,I,H.camera,ee,this.type)}H.isPointLightShadow!==!0&&this.type===ti&&A(H,I),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(S,x,P)};function A(D,R){const I=e.update(b);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Zi(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(R,null,I,f,b,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(R,null,I,p,b,null)}function T(D,R,I,S){let x=null;const P=I.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(P!==void 0)x=P;else if(x=I.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const q=x.uuid,V=R.uuid;let $=c[q];$===void 0&&($={},c[q]=$);let ne=$[V];ne===void 0&&(ne=x.clone(),$[V]=ne,R.addEventListener("dispose",F)),x=ne}if(x.visible=R.visible,x.wireframe=R.wireframe,S===ti?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:d[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const q=n.properties.get(x);q.light=I}return x}function y(D,R,I,S,x){if(D.visible===!1)return;if(D.layers.test(R.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&x===ti)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,D.matrixWorld);const V=e.update(D),$=D.material;if(Array.isArray($)){const ne=V.groups;for(let X=0,ee=ne.length;X<ee;X++){const H=ne[X],pe=$[H.materialIndex];if(pe&&pe.visible){const Se=T(D,pe,S,x);D.onBeforeShadow(n,D,R,I,V,Se,H),n.renderBufferDirect(I,null,V,Se,D,H),D.onAfterShadow(n,D,R,I,V,Se,H)}}}else if($.visible){const ne=T(D,$,S,x);D.onBeforeShadow(n,D,R,I,V,ne,null),n.renderBufferDirect(I,null,V,ne,D,null),D.onAfterShadow(n,D,R,I,V,ne,null)}}const q=D.children;for(let V=0,$=q.length;V<$;V++)y(q[V],R,I,S,x)}function F(D){D.target.removeEventListener("dispose",F);for(const I in c){const S=c[I],x=D.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Oy={[dl]:fl,[hl]:gl,[pl]:_l,[Ls]:ml,[fl]:dl,[gl]:hl,[_l]:pl,[ml]:Ls};function By(n,e){function t(){let B=!1;const Me=new At;let ue=null;const Pe=new At(0,0,0,0);return{setMask:function(fe){ue!==fe&&!B&&(n.colorMask(fe,fe,fe,fe),ue=fe)},setLocked:function(fe){B=fe},setClear:function(fe,ae,Ne,Ge,_t){_t===!0&&(fe*=Ge,ae*=Ge,Ne*=Ge),Me.set(fe,ae,Ne,Ge),Pe.equals(Me)===!1&&(n.clearColor(fe,ae,Ne,Ge),Pe.copy(Me))},reset:function(){B=!1,ue=null,Pe.set(-1,0,0,0)}}}function i(){let B=!1,Me=!1,ue=null,Pe=null,fe=null;return{setReversed:function(ae){if(Me!==ae){const Ne=e.get("EXT_clip_control");ae?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),Me=ae;const Ge=fe;fe=null,this.setClear(Ge)}},getReversed:function(){return Me},setTest:function(ae){ae?be(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(ae){ue!==ae&&!B&&(n.depthMask(ae),ue=ae)},setFunc:function(ae){if(Me&&(ae=Oy[ae]),Pe!==ae){switch(ae){case dl:n.depthFunc(n.NEVER);break;case fl:n.depthFunc(n.ALWAYS);break;case hl:n.depthFunc(n.LESS);break;case Ls:n.depthFunc(n.LEQUAL);break;case pl:n.depthFunc(n.EQUAL);break;case ml:n.depthFunc(n.GEQUAL);break;case gl:n.depthFunc(n.GREATER);break;case _l:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=ae}},setLocked:function(ae){B=ae},setClear:function(ae){fe!==ae&&(Me&&(ae=1-ae),n.clearDepth(ae),fe=ae)},reset:function(){B=!1,ue=null,Pe=null,fe=null,Me=!1}}}function s(){let B=!1,Me=null,ue=null,Pe=null,fe=null,ae=null,Ne=null,Ge=null,_t=null;return{setTest:function(lt){B||(lt?be(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function(lt){Me!==lt&&!B&&(n.stencilMask(lt),Me=lt)},setFunc:function(lt,Bt,dn){(ue!==lt||Pe!==Bt||fe!==dn)&&(n.stencilFunc(lt,Bt,dn),ue=lt,Pe=Bt,fe=dn)},setOp:function(lt,Bt,dn){(ae!==lt||Ne!==Bt||Ge!==dn)&&(n.stencilOp(lt,Bt,dn),ae=lt,Ne=Bt,Ge=dn)},setLocked:function(lt){B=lt},setClear:function(lt){_t!==lt&&(n.clearStencil(lt),_t=lt)},reset:function(){B=!1,Me=null,ue=null,Pe=null,fe=null,ae=null,Ne=null,Ge=null,_t=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],g=null,b=!1,m=null,h=null,A=null,T=null,y=null,F=null,D=null,R=new et(0,0,0),I=0,S=!1,x=null,P=null,q=null,V=null,$=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ee=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=ee>=1):H.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=ee>=2);let pe=null,Se={};const De=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),it=new At().fromArray(De),ie=new At().fromArray(ze);function me(B,Me,ue,Pe){const fe=new Uint8Array(4),ae=n.createTexture();n.bindTexture(B,ae),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<ue;Ne++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(Me+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return ae}const Ae={};Ae[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),be(n.DEPTH_TEST),o.setFunc(Ls),Z(!1),te(lu),be(n.CULL_FACE),M(Ei);function be(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Fe(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function tt(B,Me){return d[B]!==Me?(n.bindFramebuffer(B,Me),d[B]=Me,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Me),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function ke(B,Me){let ue=p,Pe=!1;if(B){ue=f.get(Me),ue===void 0&&(ue=[],f.set(Me,ue));const fe=B.textures;if(ue.length!==fe.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Ne=fe.length;ae<Ne;ae++)ue[ae]=n.COLOR_ATTACHMENT0+ae;ue.length=fe.length,Pe=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(ue)}function vt(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const C={[Hi]:n.FUNC_ADD,[wg]:n.FUNC_SUBTRACT,[Tg]:n.FUNC_REVERSE_SUBTRACT};C[Ag]=n.MIN,C[Rg]=n.MAX;const N={[Cg]:n.ZERO,[Pg]:n.ONE,[Dg]:n.SRC_COLOR,[cl]:n.SRC_ALPHA,[Og]:n.SRC_ALPHA_SATURATE,[Ng]:n.DST_COLOR,[Ig]:n.DST_ALPHA,[Lg]:n.ONE_MINUS_SRC_COLOR,[ul]:n.ONE_MINUS_SRC_ALPHA,[Fg]:n.ONE_MINUS_DST_COLOR,[Ug]:n.ONE_MINUS_DST_ALPHA,[Bg]:n.CONSTANT_COLOR,[kg]:n.ONE_MINUS_CONSTANT_COLOR,[zg]:n.CONSTANT_ALPHA,[Hg]:n.ONE_MINUS_CONSTANT_ALPHA};function M(B,Me,ue,Pe,fe,ae,Ne,Ge,_t,lt){if(B===Ei){b===!0&&(Fe(n.BLEND),b=!1);return}if(b===!1&&(be(n.BLEND),b=!0),B!==Eg){if(B!==m||lt!==S){if((h!==Hi||y!==Hi)&&(n.blendEquation(n.FUNC_ADD),h=Hi,y=Hi),lt)switch(B){case As:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cu:n.blendFunc(n.ONE,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case du:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case As:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case uu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case du:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}A=null,T=null,F=null,D=null,R.set(0,0,0),I=0,m=B,S=lt}return}fe=fe||Me,ae=ae||ue,Ne=Ne||Pe,(Me!==h||fe!==y)&&(n.blendEquationSeparate(C[Me],C[fe]),h=Me,y=fe),(ue!==A||Pe!==T||ae!==F||Ne!==D)&&(n.blendFuncSeparate(N[ue],N[Pe],N[ae],N[Ne]),A=ue,T=Pe,F=ae,D=Ne),(Ge.equals(R)===!1||_t!==I)&&(n.blendColor(Ge.r,Ge.g,Ge.b,_t),R.copy(Ge),I=_t),m=B,S=!1}function se(B,Me){B.side===Gt?Fe(n.CULL_FACE):be(n.CULL_FACE);let ue=B.side===tn;Me&&(ue=!ue),Z(ue),B.blending===As&&B.transparent===!1?M(Ei):M(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const Pe=B.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),re(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(B){x!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),x=B)}function te(B){B!==Mg?(be(n.CULL_FACE),B!==P&&(B===lu?n.cullFace(n.BACK):B===Sg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),P=B}function J(B){B!==q&&(X&&n.lineWidth(B),q=B)}function re(B,Me,ue){B?(be(n.POLYGON_OFFSET_FILL),(V!==Me||$!==ue)&&(n.polygonOffset(Me,ue),V=Me,$=ue)):Fe(n.POLYGON_OFFSET_FILL)}function j(B){B?be(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function Y(B){B===void 0&&(B=n.TEXTURE0+ne-1),pe!==B&&(n.activeTexture(B),pe=B)}function we(B,Me,ue){ue===void 0&&(pe===null?ue=n.TEXTURE0+ne-1:ue=pe);let Pe=Se[ue];Pe===void 0&&(Pe={type:void 0,texture:void 0},Se[ue]=Pe),(Pe.type!==B||Pe.texture!==Me)&&(pe!==ue&&(n.activeTexture(ue),pe=ue),n.bindTexture(B,Me||Ae[B]),Pe.type=B,Pe.texture=Me)}function w(){const B=Se[pe];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function W(){try{n.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{n.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{n.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{n.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{n.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{n.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{n.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(B){it.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),it.copy(B))}function Ie(B){ie.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),ie.copy(B))}function Ue(B,Me){let ue=c.get(Me);ue===void 0&&(ue=new WeakMap,c.set(Me,ue));let Pe=ue.get(B);Pe===void 0&&(Pe=n.getUniformBlockIndex(Me,B.name),ue.set(B,Pe))}function xe(B,Me){const Pe=c.get(Me).get(B);l.get(Me)!==Pe&&(n.uniformBlockBinding(Me,Pe,B.__bindingPointIndex),l.set(Me,Pe))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},pe=null,Se={},d={},f=new WeakMap,p=[],g=null,b=!1,m=null,h=null,A=null,T=null,y=null,F=null,D=null,R=new et(0,0,0),I=0,S=!1,x=null,P=null,q=null,V=null,$=null,it.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:be,disable:Fe,bindFramebuffer:tt,drawBuffers:ke,useProgram:vt,setBlending:M,setMaterial:se,setFlipSided:Z,setCullFace:te,setLineWidth:J,setPolygonOffset:re,setScissorTest:j,activeTexture:Y,bindTexture:we,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:Ce,texImage3D:le,updateUBOMapping:Ue,uniformBlockBinding:xe,texStorage2D:de,texStorage3D:Te,texSubImage2D:W,texSubImage3D:Q,compressedTexSubImage2D:G,compressedTexSubImage3D:ve,scissor:Re,viewport:Ie,reset:Ve}}function ky(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return p?new OffscreenCanvas(w,_):Io("canvas")}function b(w,_,O){let W=1;const Q=we(w);if((Q.width>O||Q.height>O)&&(W=O/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const G=Math.floor(W*Q.width),ve=Math.floor(W*Q.height);d===void 0&&(d=g(G,ve));const de=_?g(G,ve):d;return de.width=G,de.height=ve,de.getContext("2d").drawImage(w,0,0,G,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+G+"x"+ve+")."),de}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function m(w){return w.generateMipmaps}function h(w){n.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(w,_,O,W,Q=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let G=_;if(_===n.RED&&(O===n.FLOAT&&(G=n.R32F),O===n.HALF_FLOAT&&(G=n.R16F),O===n.UNSIGNED_BYTE&&(G=n.R8)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(G=n.R8UI),O===n.UNSIGNED_SHORT&&(G=n.R16UI),O===n.UNSIGNED_INT&&(G=n.R32UI),O===n.BYTE&&(G=n.R8I),O===n.SHORT&&(G=n.R16I),O===n.INT&&(G=n.R32I)),_===n.RG&&(O===n.FLOAT&&(G=n.RG32F),O===n.HALF_FLOAT&&(G=n.RG16F),O===n.UNSIGNED_BYTE&&(G=n.RG8)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(G=n.RG8UI),O===n.UNSIGNED_SHORT&&(G=n.RG16UI),O===n.UNSIGNED_INT&&(G=n.RG32UI),O===n.BYTE&&(G=n.RG8I),O===n.SHORT&&(G=n.RG16I),O===n.INT&&(G=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(G=n.RGB8UI),O===n.UNSIGNED_SHORT&&(G=n.RGB16UI),O===n.UNSIGNED_INT&&(G=n.RGB32UI),O===n.BYTE&&(G=n.RGB8I),O===n.SHORT&&(G=n.RGB16I),O===n.INT&&(G=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),O===n.UNSIGNED_INT&&(G=n.RGBA32UI),O===n.BYTE&&(G=n.RGBA8I),O===n.SHORT&&(G=n.RGBA16I),O===n.INT&&(G=n.RGBA32I)),_===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),_===n.RGBA){const ve=Q?Do:at.getTransfer(W);O===n.FLOAT&&(G=n.RGBA32F),O===n.HALF_FLOAT&&(G=n.RGBA16F),O===n.UNSIGNED_BYTE&&(G=ve===mt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function y(w,_){let O;return w?_===null||_===ji||_===yr?O=n.DEPTH24_STENCIL8:_===oi?O=n.DEPTH32F_STENCIL8:_===br&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ji||_===yr?O=n.DEPTH_COMPONENT24:_===oi?O=n.DEPTH_COMPONENT32F:_===br&&(O=n.DEPTH_COMPONENT16),O}function F(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Rn&&w.minFilter!==Hn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function D(w){const _=w.target;_.removeEventListener("dispose",D),I(_),_.isVideoTexture&&u.delete(_)}function R(w){const _=w.target;_.removeEventListener("dispose",R),x(_)}function I(w){const _=i.get(w);if(_.__webglInit===void 0)return;const O=w.source,W=f.get(O);if(W){const Q=W[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(w),Object.keys(W).length===0&&f.delete(O)}i.remove(w)}function S(w){const _=i.get(w);n.deleteTexture(_.__webglTexture);const O=w.source,W=f.get(O);delete W[_.__cacheKey],o.memory.textures--}function x(w){const _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let Q=0;Q<_.__webglFramebuffer[W].length;Q++)n.deleteFramebuffer(_.__webglFramebuffer[W][Q]);else n.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)n.deleteFramebuffer(_.__webglFramebuffer[W]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=w.textures;for(let W=0,Q=O.length;W<Q;W++){const G=i.get(O[W]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(O[W])}i.remove(w)}let P=0;function q(){P=0}function V(){const w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function $(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function ne(w,_){const O=i.get(w);if(w.isVideoTexture&&j(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const W=w.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(O,w,_);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function X(w,_){const O=i.get(w);if(w.version>0&&O.__version!==w.version){Ae(O,w,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function ee(w,_){const O=i.get(w);if(w.version>0&&O.__version!==w.version){Ae(O,w,_);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function H(w,_){const O=i.get(w);if(w.version>0&&O.__version!==w.version){be(O,w,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}const pe={[bl]:n.REPEAT,[Wi]:n.CLAMP_TO_EDGE,[yl]:n.MIRRORED_REPEAT},Se={[Rn]:n.NEAREST,[Zg]:n.NEAREST_MIPMAP_NEAREST,[Hr]:n.NEAREST_MIPMAP_LINEAR,[Hn]:n.LINEAR,[pa]:n.LINEAR_MIPMAP_NEAREST,[Xi]:n.LINEAR_MIPMAP_LINEAR},De={[t0]:n.NEVER,[a0]:n.ALWAYS,[n0]:n.LESS,[$f]:n.LEQUAL,[i0]:n.EQUAL,[o0]:n.GEQUAL,[s0]:n.GREATER,[r0]:n.NOTEQUAL};function ze(w,_){if(_.type===oi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Hn||_.magFilter===pa||_.magFilter===Hr||_.magFilter===Xi||_.minFilter===Hn||_.minFilter===pa||_.minFilter===Hr||_.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,pe[_.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,pe[_.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,pe[_.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Se[_.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Se[_.minFilter]),_.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,De[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Rn||_.minFilter!==Hr&&_.minFilter!==Xi||_.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function it(w,_){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",D));const W=_.source;let Q=f.get(W);Q===void 0&&(Q={},f.set(W,Q));const G=$(_);if(G!==w.__cacheKey){Q[G]===void 0&&(Q[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[G].usedTimes++;const ve=Q[w.__cacheKey];ve!==void 0&&(Q[w.__cacheKey].usedTimes--,ve.usedTimes===0&&S(_)),w.__cacheKey=G,w.__webglTexture=Q[G].texture}return O}function ie(w,_,O){return Math.floor(Math.floor(w/O)/_)}function me(w,_,O,W){const G=w.updateRanges;if(G.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,O,W,_.data);else{G.sort((le,Re)=>le.start-Re.start);let ve=0;for(let le=1;le<G.length;le++){const Re=G[ve],Ie=G[le],Ue=Re.start+Re.count,xe=ie(Ie.start,_.width,4),Ve=ie(Re.start,_.width,4);Ie.start<=Ue+1&&xe===Ve&&ie(Ie.start+Ie.count-1,_.width,4)===xe?Re.count=Math.max(Re.count,Ie.start+Ie.count-Re.start):(++ve,G[ve]=Ie)}G.length=ve+1;const de=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),Ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let le=0,Re=G.length;le<Re;le++){const Ie=G[le],Ue=Math.floor(Ie.start/4),xe=Math.ceil(Ie.count/4),Ve=Ue%_.width,B=Math.floor(Ue/_.width),Me=xe,ue=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,Ve,B,Me,ue,O,W,_.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,de),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function Ae(w,_,O){let W=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=n.TEXTURE_3D);const Q=it(w,_),G=_.source;t.bindTexture(W,w.__webglTexture,n.TEXTURE0+O);const ve=i.get(G);if(G.version!==ve.__version||Q===!0){t.activeTexture(n.TEXTURE0+O);const de=at.getPrimaries(at.workingColorSpace),Te=_.colorSpace===Mi?null:at.getPrimaries(_.colorSpace),Ce=_.colorSpace===Mi||de===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let le=b(_.image,!1,s.maxTextureSize);le=Y(_,le);const Re=r.convert(_.format,_.colorSpace),Ie=r.convert(_.type);let Ue=T(_.internalFormat,Re,Ie,_.colorSpace,_.isVideoTexture);ze(W,_);let xe;const Ve=_.mipmaps,B=_.isVideoTexture!==!0,Me=ve.__version===void 0||Q===!0,ue=G.dataReady,Pe=F(_,le);if(_.isDepthTexture)Ue=y(_.format===Sr,_.type),Me&&(B?t.texStorage2D(n.TEXTURE_2D,1,Ue,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Ue,le.width,le.height,0,Re,Ie,null));else if(_.isDataTexture)if(Ve.length>0){B&&Me&&t.texStorage2D(n.TEXTURE_2D,Pe,Ue,Ve[0].width,Ve[0].height);for(let fe=0,ae=Ve.length;fe<ae;fe++)xe=Ve[fe],B?ue&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,xe.width,xe.height,Re,Ie,xe.data):t.texImage2D(n.TEXTURE_2D,fe,Ue,xe.width,xe.height,0,Re,Ie,xe.data);_.generateMipmaps=!1}else B?(Me&&t.texStorage2D(n.TEXTURE_2D,Pe,Ue,le.width,le.height),ue&&me(_,le,Re,Ie)):t.texImage2D(n.TEXTURE_2D,0,Ue,le.width,le.height,0,Re,Ie,le.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){B&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Ue,Ve[0].width,Ve[0].height,le.depth);for(let fe=0,ae=Ve.length;fe<ae;fe++)if(xe=Ve[fe],_.format!==wn)if(Re!==null)if(B){if(ue)if(_.layerUpdates.size>0){const Ne=zu(xe.width,xe.height,_.format,_.type);for(const Ge of _.layerUpdates){const _t=xe.data.subarray(Ge*Ne/xe.data.BYTES_PER_ELEMENT,(Ge+1)*Ne/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,Ge,xe.width,xe.height,1,Re,_t)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,xe.width,xe.height,le.depth,Re,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Ue,xe.width,xe.height,le.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ue&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,xe.width,xe.height,le.depth,Re,Ie,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Ue,xe.width,xe.height,le.depth,0,Re,Ie,xe.data)}else{B&&Me&&t.texStorage2D(n.TEXTURE_2D,Pe,Ue,Ve[0].width,Ve[0].height);for(let fe=0,ae=Ve.length;fe<ae;fe++)xe=Ve[fe],_.format!==wn?Re!==null?B?ue&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,xe.width,xe.height,Re,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Ue,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ue&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,xe.width,xe.height,Re,Ie,xe.data):t.texImage2D(n.TEXTURE_2D,fe,Ue,xe.width,xe.height,0,Re,Ie,xe.data)}else if(_.isDataArrayTexture)if(B){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Ue,le.width,le.height,le.depth),ue)if(_.layerUpdates.size>0){const fe=zu(le.width,le.height,_.format,_.type);for(const ae of _.layerUpdates){const Ne=le.data.subarray(ae*fe/le.data.BYTES_PER_ELEMENT,(ae+1)*fe/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,le.width,le.height,1,Re,Ie,Ne)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Re,Ie,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,le.width,le.height,le.depth,0,Re,Ie,le.data);else if(_.isData3DTexture)B?(Me&&t.texStorage3D(n.TEXTURE_3D,Pe,Ue,le.width,le.height,le.depth),ue&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Re,Ie,le.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,le.width,le.height,le.depth,0,Re,Ie,le.data);else if(_.isFramebufferTexture){if(Me)if(B)t.texStorage2D(n.TEXTURE_2D,Pe,Ue,le.width,le.height);else{let fe=le.width,ae=le.height;for(let Ne=0;Ne<Pe;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,Ue,fe,ae,0,Re,Ie,null),fe>>=1,ae>>=1}}else if(Ve.length>0){if(B&&Me){const fe=we(Ve[0]);t.texStorage2D(n.TEXTURE_2D,Pe,Ue,fe.width,fe.height)}for(let fe=0,ae=Ve.length;fe<ae;fe++)xe=Ve[fe],B?ue&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Re,Ie,xe):t.texImage2D(n.TEXTURE_2D,fe,Ue,Re,Ie,xe);_.generateMipmaps=!1}else if(B){if(Me){const fe=we(le);t.texStorage2D(n.TEXTURE_2D,Pe,Ue,fe.width,fe.height)}ue&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Ie,le)}else t.texImage2D(n.TEXTURE_2D,0,Ue,Re,Ie,le);m(_)&&h(W),ve.__version=G.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function be(w,_,O){if(_.image.length!==6)return;const W=it(w,_),Q=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);const G=i.get(Q);if(Q.version!==G.__version||W===!0){t.activeTexture(n.TEXTURE0+O);const ve=at.getPrimaries(at.workingColorSpace),de=_.colorSpace===Mi?null:at.getPrimaries(_.colorSpace),Te=_.colorSpace===Mi||ve===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ce=_.isCompressedTexture||_.image[0].isCompressedTexture,le=_.image[0]&&_.image[0].isDataTexture,Re=[];for(let ae=0;ae<6;ae++)!Ce&&!le?Re[ae]=b(_.image[ae],!0,s.maxCubemapSize):Re[ae]=le?_.image[ae].image:_.image[ae],Re[ae]=Y(_,Re[ae]);const Ie=Re[0],Ue=r.convert(_.format,_.colorSpace),xe=r.convert(_.type),Ve=T(_.internalFormat,Ue,xe,_.colorSpace),B=_.isVideoTexture!==!0,Me=G.__version===void 0||W===!0,ue=Q.dataReady;let Pe=F(_,Ie);ze(n.TEXTURE_CUBE_MAP,_);let fe;if(Ce){B&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ve,Ie.width,Ie.height);for(let ae=0;ae<6;ae++){fe=Re[ae].mipmaps;for(let Ne=0;Ne<fe.length;Ne++){const Ge=fe[Ne];_.format!==wn?Ue!==null?B?ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,0,0,Ge.width,Ge.height,Ue,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,Ve,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,0,0,Ge.width,Ge.height,Ue,xe,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,Ve,Ge.width,Ge.height,0,Ue,xe,Ge.data)}}}else{if(fe=_.mipmaps,B&&Me){fe.length>0&&Pe++;const ae=we(Re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ve,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(le){B?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Re[ae].width,Re[ae].height,Ue,xe,Re[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ve,Re[ae].width,Re[ae].height,0,Ue,xe,Re[ae].data);for(let Ne=0;Ne<fe.length;Ne++){const _t=fe[Ne].image[ae].image;B?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,0,0,_t.width,_t.height,Ue,xe,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,Ve,_t.width,_t.height,0,Ue,xe,_t.data)}}else{B?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ue,xe,Re[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ve,Ue,xe,Re[ae]);for(let Ne=0;Ne<fe.length;Ne++){const Ge=fe[Ne];B?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,0,0,Ue,xe,Ge.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,Ve,Ue,xe,Ge.image[ae])}}}m(_)&&h(n.TEXTURE_CUBE_MAP),G.__version=Q.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Fe(w,_,O,W,Q,G){const ve=r.convert(O.format,O.colorSpace),de=r.convert(O.type),Te=T(O.internalFormat,ve,de,O.colorSpace),Ce=i.get(_),le=i.get(O);if(le.__renderTarget=_,!Ce.__hasExternalTextures){const Re=Math.max(1,_.width>>G),Ie=Math.max(1,_.height>>G);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,G,Te,Re,Ie,_.depth,0,ve,de,null):t.texImage2D(Q,G,Te,Re,Ie,0,ve,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),re(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Q,le.__webglTexture,0,J(_)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Q,le.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(w,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),_.depthBuffer){const W=_.depthTexture,Q=W&&W.isDepthTexture?W.type:null,G=y(_.stencilBuffer,Q),ve=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=J(_);re(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,G,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,G,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,G,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,w)}else{const W=_.textures;for(let Q=0;Q<W.length;Q++){const G=W[Q],ve=r.convert(G.format,G.colorSpace),de=r.convert(G.type),Te=T(G.internalFormat,ve,de,G.colorSpace),Ce=J(_);O&&re(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Te,_.width,_.height):re(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,Te,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Te,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ke(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(_.depthTexture);W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ne(_.depthTexture,0);const Q=W.__webglTexture,G=J(_);if(_.depthTexture.format===Mr)re(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(_.depthTexture.format===Sr)re(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function vt(w){const _=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const W=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=W}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const W=w.texture.mipmaps;W&&W.length>0?ke(_.__webglFramebuffer[0],w):ke(_.__webglFramebuffer,w)}else if(O){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=n.createRenderbuffer(),tt(_.__webglDepthbuffer[W],w,!1);else{const Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,G)}}else{const W=w.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),tt(_.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,G)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(w,_,O){const W=i.get(w);_!==void 0&&Fe(W.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&vt(w)}function N(w){const _=w.texture,O=i.get(w),W=i.get(_);w.addEventListener("dispose",R);const Q=w.textures,G=w.isWebGLCubeRenderTarget===!0,ve=Q.length>1;if(ve||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=_.version,o.memory.textures++),G){O.__webglFramebuffer=[];for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[de]=[];for(let Te=0;Te<_.mipmaps.length;Te++)O.__webglFramebuffer[de][Te]=n.createFramebuffer()}else O.__webglFramebuffer[de]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let de=0;de<_.mipmaps.length;de++)O.__webglFramebuffer[de]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ve)for(let de=0,Te=Q.length;de<Te;de++){const Ce=i.get(Q[de]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&re(w)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<Q.length;de++){const Te=Q[de];O.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[de]);const Ce=r.convert(Te.format,Te.colorSpace),le=r.convert(Te.type),Re=T(Te.internalFormat,Ce,le,Te.colorSpace,w.isXRRenderTarget===!0),Ie=J(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Re,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,O.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),tt(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),ze(n.TEXTURE_CUBE_MAP,_);for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)Fe(O.__webglFramebuffer[de][Te],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Te);else Fe(O.__webglFramebuffer[de],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(_)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let de=0,Te=Q.length;de<Te;de++){const Ce=Q[de],le=i.get(Ce);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),ze(n.TEXTURE_2D,Ce),Fe(O.__webglFramebuffer,w,Ce,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),m(Ce)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(de=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,W.__webglTexture),ze(de,_),_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)Fe(O.__webglFramebuffer[Te],w,_,n.COLOR_ATTACHMENT0,de,Te);else Fe(O.__webglFramebuffer,w,_,n.COLOR_ATTACHMENT0,de,0);m(_)&&h(de),t.unbindTexture()}w.depthBuffer&&vt(w)}function M(w){const _=w.textures;for(let O=0,W=_.length;O<W;O++){const Q=_[O];if(m(Q)){const G=A(w),ve=i.get(Q).__webglTexture;t.bindTexture(G,ve),h(G),t.unbindTexture()}}}const se=[],Z=[];function te(w){if(w.samples>0){if(re(w)===!1){const _=w.textures,O=w.width,W=w.height;let Q=n.COLOR_BUFFER_BIT;const G=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(w),de=_.length>1;if(de)for(let Ce=0;Ce<_.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Te=w.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ce=0;Ce<_.length;Ce++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ce]);const le=i.get(_[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,O,W,0,0,O,W,Q,n.NEAREST),l===!0&&(se.length=0,Z.length=0,se.push(n.COLOR_ATTACHMENT0+Ce),w.depthBuffer&&w.resolveDepthBuffer===!1&&(se.push(G),Z.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let Ce=0;Ce<_.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ce]);const le=i.get(_[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function J(w){return Math.min(s.maxSamples,w.samples)}function re(w){const _=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function j(w){const _=o.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function Y(w,_){const O=w.colorSpace,W=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Ns&&O!==Mi&&(at.getTransfer(O)===mt?(W!==wn||Q!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function we(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=q,this.setTexture2D=ne,this.setTexture2DArray=X,this.setTexture3D=ee,this.setTextureCube=H,this.rebindTextures=C,this.setupRenderTarget=N,this.updateRenderTargetMipmap=M,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=re}function zy(n,e){function t(i,s=Mi){let r;const o=at.getTransfer(s);if(i===Xn)return n.UNSIGNED_BYTE;if(i===vc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Of)return n.BYTE;if(i===Bf)return n.SHORT;if(i===br)return n.UNSIGNED_SHORT;if(i===xc)return n.INT;if(i===ji)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===Rr)return n.HALF_FLOAT;if(i===zf)return n.ALPHA;if(i===Hf)return n.RGB;if(i===wn)return n.RGBA;if(i===Mr)return n.DEPTH_COMPONENT;if(i===Sr)return n.DEPTH_STENCIL;if(i===Vf)return n.RED;if(i===yc)return n.RED_INTEGER;if(i===Gf)return n.RG;if(i===Mc)return n.RG_INTEGER;if(i===Sc)return n.RGBA_INTEGER;if(i===_o||i===xo||i===vo||i===bo)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ml||i===Sl||i===El||i===wl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tl||i===Al||i===Rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Tl||i===Al)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Rl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cl||i===Pl||i===Dl||i===Ll||i===Il||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===kl||i===zl||i===Hl||i===Vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Cl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ll)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Il)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ul)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ol)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yo||i===Gl||i===Wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===yo)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wf||i===Xl||i===$l||i===ql)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===yo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vy=`
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

}`;class Gy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new nn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ri({vertexShader:Hy,fragmentShader:Vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new Lr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wy extends Hs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const b=new Gy,m=t.getContextAttributes();let h=null,A=null;const T=[],y=[],F=new st;let D=null;const R=new gn;R.viewport=new At;const I=new gn;I.viewport=new At;const S=[R,I],x=new c_;let P=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let me=T[ie];return me===void 0&&(me=new Na,T[ie]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ie){let me=T[ie];return me===void 0&&(me=new Na,T[ie]=me),me.getGripSpace()},this.getHand=function(ie){let me=T[ie];return me===void 0&&(me=new Na,T[ie]=me),me.getHandSpace()};function V(ie){const me=y.indexOf(ie.inputSource);if(me===-1)return;const Ae=T[me];Ae!==void 0&&(Ae.update(ie.inputSource,ie.frame,c||o),Ae.dispatchEvent({type:ie.type,data:ie.inputSource}))}function $(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ne);for(let ie=0;ie<T.length;ie++){const me=y[ie];me!==null&&(y[ie]=null,T[ie].disconnect(me))}P=null,q=null,b.reset(),e.setRenderTarget(h),p=null,f=null,d=null,s=null,A=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,be=null,Fe=null;m.depth&&(Fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=m.stencil?Sr:Mr,be=m.stencil?yr:ji);const tt={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(tt),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Zi(f.textureWidth,f.textureHeight,{format:wn,type:Xn,depthTexture:new ih(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Zi(p.framebufferWidth,p.framebufferHeight,{format:wn,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ne(ie){for(let me=0;me<ie.removed.length;me++){const Ae=ie.removed[me],be=y.indexOf(Ae);be>=0&&(y[be]=null,T[be].disconnect(Ae))}for(let me=0;me<ie.added.length;me++){const Ae=ie.added[me];let be=y.indexOf(Ae);if(be===-1){for(let tt=0;tt<T.length;tt++)if(tt>=y.length){y.push(Ae),be=tt;break}else if(y[tt]===null){y[tt]=Ae,be=tt;break}if(be===-1)break}const Fe=T[be];Fe&&Fe.connect(Ae)}}const X=new z,ee=new z;function H(ie,me,Ae){X.setFromMatrixPosition(me.matrixWorld),ee.setFromMatrixPosition(Ae.matrixWorld);const be=X.distanceTo(ee),Fe=me.projectionMatrix.elements,tt=Ae.projectionMatrix.elements,ke=Fe[14]/(Fe[10]-1),vt=Fe[14]/(Fe[10]+1),C=(Fe[9]+1)/Fe[5],N=(Fe[9]-1)/Fe[5],M=(Fe[8]-1)/Fe[0],se=(tt[8]+1)/tt[0],Z=ke*M,te=ke*se,J=be/(-M+se),re=J*-M;if(me.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(re),ie.translateZ(J),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Fe[10]===-1)ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const j=ke+J,Y=vt+J,we=Z-re,w=te+(be-re),_=C*vt/Y*j,O=N*vt/Y*j;ie.projectionMatrix.makePerspective(we,w,_,O,j,Y),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function pe(ie,me){me===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(me.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let me=ie.near,Ae=ie.far;b.texture!==null&&(b.depthNear>0&&(me=b.depthNear),b.depthFar>0&&(Ae=b.depthFar)),x.near=I.near=R.near=me,x.far=I.far=R.far=Ae,(P!==x.near||q!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,q=x.far),R.layers.mask=ie.layers.mask|2,I.layers.mask=ie.layers.mask|4,x.layers.mask=R.layers.mask|I.layers.mask;const be=ie.parent,Fe=x.cameras;pe(x,be);for(let tt=0;tt<Fe.length;tt++)pe(Fe[tt],be);Fe.length===2?H(x,R,I):x.projectionMatrix.copy(R.projectionMatrix),Se(ie,x,be)};function Se(ie,me,Ae){Ae===null?ie.matrix.copy(me.matrixWorld):(ie.matrix.copy(Ae.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(me.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Er*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(x)};let De=null;function ze(ie,me){if(u=me.getViewerPose(c||o),g=me,u!==null){const Ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let be=!1;Ae.length!==x.cameras.length&&(x.cameras.length=0,be=!0);for(let ke=0;ke<Ae.length;ke++){const vt=Ae[ke];let C=null;if(p!==null)C=p.getViewport(vt);else{const M=d.getViewSubImage(f,vt);C=M.viewport,ke===0&&(e.setRenderTargetTextures(A,M.colorTexture,M.depthStencilTexture),e.setRenderTarget(A))}let N=S[ke];N===void 0&&(N=new gn,N.layers.enable(ke),N.viewport=new At,S[ke]=N),N.matrix.fromArray(vt.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(vt.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(C.x,C.y,C.width,C.height),ke===0&&(x.matrix.copy(N.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),be===!0&&x.cameras.push(N)}const Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const ke=d.getDepthInformation(Ae[0]);ke&&ke.isValid&&ke.texture&&b.init(e,ke,s.renderState)}}for(let Ae=0;Ae<T.length;Ae++){const be=y[Ae],Fe=T[Ae];be!==null&&Fe!==void 0&&Fe.update(be,me,c||o)}De&&De(ie,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),g=null}const it=new oh;it.setAnimationLoop(ze),this.setAnimationLoop=function(ie){De=ie},this.dispose=function(){}}}const Oi=new $n,Xy=new wt;function $y(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,eh(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,A,T,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),d(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),b(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,A,T):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===tn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===tn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const A=e.get(h),T=A.envMap,y=A.envMapRotation;T&&(m.envMap.value=T,Oi.copy(y),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(Xy.makeRotationFromEuler(Oi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,A,T){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*A,m.scale.value=T*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,A){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===tn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function b(m,h){const A=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qy(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const y=T.program;i.uniformBlockBinding(A,y)}function c(A,T){let y=s[A.id];y===void 0&&(g(A),y=u(A),s[A.id]=y,A.addEventListener("dispose",m));const F=T.program;i.updateUBOMapping(A,F);const D=e.render.frame;r[A.id]!==D&&(f(A),r[A.id]=D)}function u(A){const T=d();A.__bindingPointIndex=T;const y=n.createBuffer(),F=A.__size,D=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,F,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,y),y}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const T=s[A.id],y=A.uniforms,F=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let D=0,R=y.length;D<R;D++){const I=Array.isArray(y[D])?y[D]:[y[D]];for(let S=0,x=I.length;S<x;S++){const P=I[S];if(p(P,D,S,F)===!0){const q=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let ne=0;ne<V.length;ne++){const X=V[ne],ee=b(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,q+$,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,$),$+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,T,y,F){const D=A.value,R=T+"_"+y;if(F[R]===void 0)return typeof D=="number"||typeof D=="boolean"?F[R]=D:F[R]=D.clone(),!0;{const I=F[R];if(typeof D=="number"||typeof D=="boolean"){if(I!==D)return F[R]=D,!0}else if(I.equals(D)===!1)return I.copy(D),!0}return!1}function g(A){const T=A.uniforms;let y=0;const F=16;for(let R=0,I=T.length;R<I;R++){const S=Array.isArray(T[R])?T[R]:[T[R]];for(let x=0,P=S.length;x<P;x++){const q=S[x],V=Array.isArray(q.value)?q.value:[q.value];for(let $=0,ne=V.length;$<ne;$++){const X=V[$],ee=b(X),H=y%F,pe=H%ee.boundary,Se=H+pe;y+=pe,Se!==0&&F-Se<ee.storage&&(y+=F-Se),q.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=y,y+=ee.storage}}}const D=y%F;return D>0&&(y+=F-D),A.__size=y,A.__cache={},this}function b(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const y=o.indexOf(T.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function h(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Yy{constructor(e={}){const{canvas:t=E0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),b=new Int32Array(4);let m=null,h=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let F=!1;this._outputColorSpace=cn;let D=0,R=0,I=null,S=-1,x=null;const P=new At,q=new At;let V=null;const $=new et(0);let ne=0,X=t.width,ee=t.height,H=1,pe=null,Se=null;const De=new At(0,0,X,ee),ze=new At(0,0,X,ee);let it=!1;const ie=new Ac;let me=!1,Ae=!1;const be=new wt,Fe=new wt,tt=new z,ke=new At,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function N(){return I===null?H:1}let M=i;function se(E,k){return t.getContext(E,k)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_c}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ae,!1),M===null){const k="webgl2";if(M=se(k,E),M===null)throw se(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Z,te,J,re,j,Y,we,w,_,O,W,Q,G,ve,de,Te,Ce,le,Re,Ie,Ue,xe,Ve,B;function Me(){Z=new sb(M),Z.init(),xe=new zy(M,Z),te=new Zv(M,Z,e,xe),J=new By(M,Z),te.reverseDepthBuffer&&f&&J.buffers.depth.setReversed(!0),re=new ab(M),j=new wy,Y=new ky(M,Z,J,j,te,xe,re),we=new Qv(y),w=new ib(y),_=new h_(M),Ve=new Kv(M,_),O=new rb(M,_,re,Ve),W=new cb(M,O,_,re),Re=new lb(M,te,Y),Te=new Jv(j),Q=new Ey(y,we,w,Z,te,Ve,Te),G=new $y(y,j),ve=new Ay,de=new Iy(Z),le=new Yv(y,we,w,J,W,p,l),Ce=new Fy(y,W,te),B=new qy(M,re,te,J),Ie=new jv(M,Z,re),Ue=new ob(M,Z,re),re.programs=Q.programs,y.capabilities=te,y.extensions=Z,y.properties=j,y.renderLists=ve,y.shadowMap=Ce,y.state=J,y.info=re}Me();const ue=new Wy(y,M);this.xr=ue,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const E=Z.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Z.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(X,ee,!1))},this.getSize=function(E){return E.set(X,ee)},this.setSize=function(E,k,K=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,ee=k,t.width=Math.floor(E*H),t.height=Math.floor(k*H),K===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(X*H,ee*H).floor()},this.setDrawingBufferSize=function(E,k,K){X=E,ee=k,H=K,t.width=Math.floor(E*K),t.height=Math.floor(k*K),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(De)},this.setViewport=function(E,k,K,L){E.isVector4?De.set(E.x,E.y,E.z,E.w):De.set(E,k,K,L),J.viewport(P.copy(De).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(ze)},this.setScissor=function(E,k,K,L){E.isVector4?ze.set(E.x,E.y,E.z,E.w):ze.set(E,k,K,L),J.scissor(q.copy(ze).multiplyScalar(H).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(E){J.setScissorTest(it=E)},this.setOpaqueSort=function(E){pe=E},this.setTransparentSort=function(E){Se=E},this.getClearColor=function(E){return E.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,K=!0){let L=0;if(E){let U=!1;if(I!==null){const oe=I.texture.format;U=oe===Sc||oe===Mc||oe===yc}if(U){const oe=I.texture.type,_e=oe===Xn||oe===ji||oe===br||oe===yr||oe===vc||oe===bc,Le=le.getClearColor(),Ee=le.getClearAlpha(),We=Le.r,Xe=Le.g,Oe=Le.b;_e?(g[0]=We,g[1]=Xe,g[2]=Oe,g[3]=Ee,M.clearBufferuiv(M.COLOR,0,g)):(b[0]=We,b[1]=Xe,b[2]=Oe,b[3]=Ee,M.clearBufferiv(M.COLOR,0,b))}else L|=M.COLOR_BUFFER_BIT}k&&(L|=M.DEPTH_BUFFER_BIT),K&&(L|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),le.dispose(),ve.dispose(),de.dispose(),j.dispose(),we.dispose(),w.dispose(),W.dispose(),Ve.dispose(),B.dispose(),Q.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",qn),ue.removeEventListener("sessionend",$s),sn.stop()};function Pe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const E=re.autoReset,k=Ce.enabled,K=Ce.autoUpdate,L=Ce.needsUpdate,U=Ce.type;Me(),re.autoReset=E,Ce.enabled=k,Ce.autoUpdate=K,Ce.needsUpdate=L,Ce.type=U}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ne(E){const k=E.target;k.removeEventListener("dispose",Ne),Ge(k)}function Ge(E){_t(E),j.remove(E)}function _t(E){const k=j.get(E).programs;k!==void 0&&(k.forEach(function(K){Q.releaseProgram(K)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,K,L,U,oe){k===null&&(k=vt);const _e=U.isMesh&&U.matrixWorld.determinant()<0,Le=Qo(E,k,K,L,U);J.setMaterial(L,_e);let Ee=K.index,We=1;if(L.wireframe===!0){if(Ee=O.getWireframeAttribute(K),Ee===void 0)return;We=2}const Xe=K.drawRange,Oe=K.attributes.position;let Ye=Xe.start*We,dt=(Xe.start+Xe.count)*We;oe!==null&&(Ye=Math.max(Ye,oe.start*We),dt=Math.min(dt,(oe.start+oe.count)*We)),Ee!==null?(Ye=Math.max(Ye,0),dt=Math.min(dt,Ee.count)):Oe!=null&&(Ye=Math.max(Ye,0),dt=Math.min(dt,Oe.count));const yt=dt-Ye;if(yt<0||yt===1/0)return;Ve.setup(U,L,Le,K,Ee);let pt,ct=Ie;if(Ee!==null&&(pt=_.get(Ee),ct=Ue,ct.setIndex(pt)),U.isMesh)L.wireframe===!0?(J.setLineWidth(L.wireframeLinewidth*N()),ct.setMode(M.LINES)):ct.setMode(M.TRIANGLES);else if(U.isLine){let He=L.linewidth;He===void 0&&(He=1),J.setLineWidth(He*N()),U.isLineSegments?ct.setMode(M.LINES):U.isLineLoop?ct.setMode(M.LINE_LOOP):ct.setMode(M.LINE_STRIP)}else U.isPoints?ct.setMode(M.POINTS):U.isSprite&&ct.setMode(M.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Rs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))ct.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const He=U._multiDrawStarts,Et=U._multiDrawCounts,ot=U._multiDrawCount,rn=Ee?_.get(Ee).bytesPerElement:1,ns=j.get(L).currentProgram.getUniforms();for(let on=0;on<ot;on++)ns.setValue(M,"_gl_DrawID",on),ct.render(He[on]/rn,Et[on])}else if(U.isInstancedMesh)ct.renderInstances(Ye,yt,U.count);else if(K.isInstancedBufferGeometry){const He=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Et=Math.min(K.instanceCount,He);ct.renderInstances(Ye,yt,Et)}else ct.render(Ye,yt)};function lt(E,k,K){E.transparent===!0&&E.side===Gt&&E.forceSinglePass===!1?(E.side=tn,E.needsUpdate=!0,ts(E,k,K),E.side=Ai,E.needsUpdate=!0,ts(E,k,K),E.side=Gt):ts(E,k,K)}this.compile=function(E,k,K=null){K===null&&(K=E),h=de.get(K),h.init(k),T.push(h),K.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),E!==K&&E.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights();const L=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const oe=U.material;if(oe)if(Array.isArray(oe))for(let _e=0;_e<oe.length;_e++){const Le=oe[_e];lt(Le,K,U),L.add(Le)}else lt(oe,K,U),L.add(oe)}),h=T.pop(),L},this.compileAsync=function(E,k,K=null){const L=this.compile(E,k,K);return new Promise(U=>{function oe(){if(L.forEach(function(_e){j.get(_e).currentProgram.isReady()&&L.delete(_e)}),L.size===0){U(E);return}setTimeout(oe,10)}Z.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Bt=null;function dn(E){Bt&&Bt(E)}function qn(){sn.stop()}function $s(){sn.start()}const sn=new oh;sn.setAnimationLoop(dn),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(E){Bt=E,ue.setAnimationLoop(E),E===null?sn.stop():sn.start()},ue.addEventListener("sessionstart",qn),ue.addEventListener("sessionend",$s),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(k),k=ue.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,k,I),h=de.get(E,T.length),h.init(k),T.push(h),Fe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ie.setFromProjectionMatrix(Fe),Ae=this.localClippingEnabled,me=Te.init(this.clippingPlanes,Ae),m=ve.get(E,A.length),m.init(),A.push(m),ue.enabled===!0&&ue.isPresenting===!0){const oe=y.xr.getDepthSensingMesh();oe!==null&&Yn(oe,k,-1/0,y.sortObjects)}Yn(E,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(pe,Se),C=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,C&&le.addToRenderList(m,E),this.info.render.frame++,me===!0&&Te.beginShadows();const K=h.state.shadowsArray;Ce.render(K,E,k),me===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const L=m.opaque,U=m.transmissive;if(h.setupLights(),k.isArrayCamera){const oe=k.cameras;if(U.length>0)for(let _e=0,Le=oe.length;_e<Le;_e++){const Ee=oe[_e];Ir(L,U,E,Ee)}C&&le.render(E);for(let _e=0,Le=oe.length;_e<Le;_e++){const Ee=oe[_e];Qi(m,E,Ee,Ee.viewport)}}else U.length>0&&Ir(L,U,E,k),C&&le.render(E),Qi(m,E,k);I!==null&&R===0&&(Y.updateMultisampleRenderTarget(I),Y.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(y,E,k),Ve.resetDefaultState(),S=-1,x=null,T.pop(),T.length>0?(h=T[T.length-1],me===!0&&Te.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Yn(E,k,K,L){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ie.intersectsSprite(E)){L&&ke.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Fe);const _e=W.update(E),Le=E.material;Le.visible&&m.push(E,_e,Le,K,ke.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ie.intersectsObject(E))){const _e=W.update(E),Le=E.material;if(L&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ke.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),ke.copy(_e.boundingSphere.center)),ke.applyMatrix4(E.matrixWorld).applyMatrix4(Fe)),Array.isArray(Le)){const Ee=_e.groups;for(let We=0,Xe=Ee.length;We<Xe;We++){const Oe=Ee[We],Ye=Le[Oe.materialIndex];Ye&&Ye.visible&&m.push(E,_e,Ye,K,ke.z,Oe)}}else Le.visible&&m.push(E,_e,Le,K,ke.z,null)}}const oe=E.children;for(let _e=0,Le=oe.length;_e<Le;_e++)Yn(oe[_e],k,K,L)}function Qi(E,k,K,L){const U=E.opaque,oe=E.transmissive,_e=E.transparent;h.setupLightsView(K),me===!0&&Te.setGlobalState(y.clippingPlanes,K),L&&J.viewport(P.copy(L)),U.length>0&&es(U,k,K),oe.length>0&&es(oe,k,K),_e.length>0&&es(_e,k,K),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Ir(E,k,K,L){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[L.id]===void 0&&(h.state.transmissionRenderTarget[L.id]=new Zi(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Rr:Xn,minFilter:Xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const oe=h.state.transmissionRenderTarget[L.id],_e=L.viewport||P;oe.setSize(_e.z*y.transmissionResolutionScale,_e.w*y.transmissionResolutionScale);const Le=y.getRenderTarget(),Ee=y.getActiveCubeFace(),We=y.getActiveMipmapLevel();y.setRenderTarget(oe),y.getClearColor($),ne=y.getClearAlpha(),ne<1&&y.setClearColor(16777215,.5),y.clear(),C&&le.render(K);const Xe=y.toneMapping;y.toneMapping=wi;const Oe=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),h.setupLightsView(L),me===!0&&Te.setGlobalState(y.clippingPlanes,L),es(E,K,L),Y.updateMultisampleRenderTarget(oe),Y.updateRenderTargetMipmap(oe),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let dt=0,yt=k.length;dt<yt;dt++){const pt=k[dt],ct=pt.object,He=pt.geometry,Et=pt.material,ot=pt.group;if(Et.side===Gt&&ct.layers.test(L.layers)){const rn=Et.side;Et.side=tn,Et.needsUpdate=!0,Ur(ct,K,L,He,Et,ot),Et.side=rn,Et.needsUpdate=!0,Ye=!0}}Ye===!0&&(Y.updateMultisampleRenderTarget(oe),Y.updateRenderTargetMipmap(oe))}y.setRenderTarget(Le,Ee,We),y.setClearColor($,ne),Oe!==void 0&&(L.viewport=Oe),y.toneMapping=Xe}function es(E,k,K){const L=k.isScene===!0?k.overrideMaterial:null;for(let U=0,oe=E.length;U<oe;U++){const _e=E[U],Le=_e.object,Ee=_e.geometry,We=_e.group;let Xe=_e.material;Xe.allowOverride===!0&&L!==null&&(Xe=L),Le.layers.test(K.layers)&&Ur(Le,k,K,Ee,Xe,We)}}function Ur(E,k,K,L,U,oe){E.onBeforeRender(y,k,K,L,U,oe),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(y,k,K,L,E,oe),U.transparent===!0&&U.side===Gt&&U.forceSinglePass===!1?(U.side=tn,U.needsUpdate=!0,y.renderBufferDirect(K,k,L,U,E,oe),U.side=Ai,U.needsUpdate=!0,y.renderBufferDirect(K,k,L,U,E,oe),U.side=Gt):y.renderBufferDirect(K,k,L,U,E,oe),E.onAfterRender(y,k,K,L,U,oe)}function ts(E,k,K){k.isScene!==!0&&(k=vt);const L=j.get(E),U=h.state.lights,oe=h.state.shadowsArray,_e=U.state.version,Le=Q.getParameters(E,U.state,oe,k,K),Ee=Q.getProgramCacheKey(Le);let We=L.programs;L.environment=E.isMeshStandardMaterial?k.environment:null,L.fog=k.fog,L.envMap=(E.isMeshStandardMaterial?w:we).get(E.envMap||L.environment),L.envMapRotation=L.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,We===void 0&&(E.addEventListener("dispose",Ne),We=new Map,L.programs=We);let Xe=We.get(Ee);if(Xe!==void 0){if(L.currentProgram===Xe&&L.lightsStateVersion===_e)return Fr(E,Le),Xe}else Le.uniforms=Q.getUniforms(E),E.onBeforeCompile(Le,y),Xe=Q.acquireProgram(Le,Ee),We.set(Ee,Xe),L.uniforms=Le.uniforms;const Oe=L.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=Te.uniform),Fr(E,Le),L.needsLights=ta(E),L.lightsStateVersion=_e,L.needsLights&&(Oe.ambientLightColor.value=U.state.ambient,Oe.lightProbe.value=U.state.probe,Oe.directionalLights.value=U.state.directional,Oe.directionalLightShadows.value=U.state.directionalShadow,Oe.spotLights.value=U.state.spot,Oe.spotLightShadows.value=U.state.spotShadow,Oe.rectAreaLights.value=U.state.rectArea,Oe.ltc_1.value=U.state.rectAreaLTC1,Oe.ltc_2.value=U.state.rectAreaLTC2,Oe.pointLights.value=U.state.point,Oe.pointLightShadows.value=U.state.pointShadow,Oe.hemisphereLights.value=U.state.hemi,Oe.directionalShadowMap.value=U.state.directionalShadowMap,Oe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Oe.spotShadowMap.value=U.state.spotShadowMap,Oe.spotLightMatrix.value=U.state.spotLightMatrix,Oe.spotLightMap.value=U.state.spotLightMap,Oe.pointShadowMap.value=U.state.pointShadowMap,Oe.pointShadowMatrix.value=U.state.pointShadowMatrix),L.currentProgram=Xe,L.uniformsList=null,Xe}function Nr(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Mo.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Fr(E,k){const K=j.get(E);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function Qo(E,k,K,L,U){k.isScene!==!0&&(k=vt),Y.resetTextureUnits();const oe=k.fog,_e=L.isMeshStandardMaterial?k.environment:null,Le=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ns,Ee=(L.isMeshStandardMaterial?w:we).get(L.envMap||_e),We=L.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Xe=!!K.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),Oe=!!K.morphAttributes.position,Ye=!!K.morphAttributes.normal,dt=!!K.morphAttributes.color;let yt=wi;L.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(yt=y.toneMapping);const pt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ct=pt!==void 0?pt.length:0,He=j.get(L),Et=h.state.lights;if(me===!0&&(Ae===!0||E!==x)){const $t=E===x&&L.id===S;Te.setState(L,E,$t)}let ot=!1;L.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Et.state.version||He.outputColorSpace!==Le||U.isBatchedMesh&&He.batching===!1||!U.isBatchedMesh&&He.batching===!0||U.isBatchedMesh&&He.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&He.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&He.instancing===!1||!U.isInstancedMesh&&He.instancing===!0||U.isSkinnedMesh&&He.skinning===!1||!U.isSkinnedMesh&&He.skinning===!0||U.isInstancedMesh&&He.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&He.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&He.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&He.instancingMorph===!1&&U.morphTexture!==null||He.envMap!==Ee||L.fog===!0&&He.fog!==oe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Te.numPlanes||He.numIntersection!==Te.numIntersection)||He.vertexAlphas!==We||He.vertexTangents!==Xe||He.morphTargets!==Oe||He.morphNormals!==Ye||He.morphColors!==dt||He.toneMapping!==yt||He.morphTargetsCount!==ct)&&(ot=!0):(ot=!0,He.__version=L.version);let rn=He.currentProgram;ot===!0&&(rn=ts(L,k,U));let ns=!1,on=!1,Ys=!1;const Mt=rn.getUniforms(),fn=He.uniforms;if(J.useProgram(rn.program)&&(ns=!0,on=!0,Ys=!0),L.id!==S&&(S=L.id,on=!0),ns||x!==E){J.buffers.depth.getReversed()?(be.copy(E.projectionMatrix),T0(be),A0(be),Mt.setValue(M,"projectionMatrix",be)):Mt.setValue(M,"projectionMatrix",E.projectionMatrix),Mt.setValue(M,"viewMatrix",E.matrixWorldInverse);const Qt=Mt.map.cameraPosition;Qt!==void 0&&Qt.setValue(M,tt.setFromMatrixPosition(E.matrixWorld)),te.logarithmicDepthBuffer&&Mt.setValue(M,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&Mt.setValue(M,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,on=!0,Ys=!0)}if(U.isSkinnedMesh){Mt.setOptional(M,U,"bindMatrix"),Mt.setOptional(M,U,"bindMatrixInverse");const $t=U.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Mt.setValue(M,"boneTexture",$t.boneTexture,Y))}U.isBatchedMesh&&(Mt.setOptional(M,U,"batchingTexture"),Mt.setValue(M,"batchingTexture",U._matricesTexture,Y),Mt.setOptional(M,U,"batchingIdTexture"),Mt.setValue(M,"batchingIdTexture",U._indirectTexture,Y),Mt.setOptional(M,U,"batchingColorTexture"),U._colorsTexture!==null&&Mt.setValue(M,"batchingColorTexture",U._colorsTexture,Y));const hn=K.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Re.update(U,K,rn),(on||He.receiveShadow!==U.receiveShadow)&&(He.receiveShadow=U.receiveShadow,Mt.setValue(M,"receiveShadow",U.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(fn.envMap.value=Ee,fn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&k.environment!==null&&(fn.envMapIntensity.value=k.environmentIntensity),on&&(Mt.setValue(M,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&ea(fn,Ys),oe&&L.fog===!0&&G.refreshFogUniforms(fn,oe),G.refreshMaterialUniforms(fn,L,H,ee,h.state.transmissionRenderTarget[E.id]),Mo.upload(M,Nr(He),fn,Y)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Mo.upload(M,Nr(He),fn,Y),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&Mt.setValue(M,"center",U.center),Mt.setValue(M,"modelViewMatrix",U.modelViewMatrix),Mt.setValue(M,"normalMatrix",U.normalMatrix),Mt.setValue(M,"modelMatrix",U.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const $t=L.uniformsGroups;for(let Qt=0,ia=$t.length;Qt<ia;Qt++){const Ci=$t[Qt];B.update(Ci,rn),B.bind(Ci,rn)}}return rn}function ea(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function ta(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,k,K){const L=j.get(E);L.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,L.__autoAllocateDepthBuffer===!1&&(L.__useRenderToTexture=!1),j.get(E.texture).__webglTexture=k,j.get(E.depthTexture).__webglTexture=L.__autoAllocateDepthBuffer?void 0:K,L.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){const K=j.get(E);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0};const Or=M.createFramebuffer();this.setRenderTarget=function(E,k=0,K=0){I=E,D=k,R=K;let L=!0,U=null,oe=!1,_e=!1;if(E){const Ee=j.get(E);if(Ee.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(M.FRAMEBUFFER,null),L=!1;else if(Ee.__webglFramebuffer===void 0)Y.setupRenderTarget(E);else if(Ee.__hasExternalTextures)Y.rebindTextures(E,j.get(E.texture).__webglTexture,j.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Oe=E.depthTexture;if(Ee.__boundDepthTexture!==Oe){if(Oe!==null&&j.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(E)}}const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(_e=!0);const Xe=j.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xe[k])?U=Xe[k][K]:U=Xe[k],oe=!0):E.samples>0&&Y.useMultisampledRTT(E)===!1?U=j.get(E).__webglMultisampledFramebuffer:Array.isArray(Xe)?U=Xe[K]:U=Xe,P.copy(E.viewport),q.copy(E.scissor),V=E.scissorTest}else P.copy(De).multiplyScalar(H).floor(),q.copy(ze).multiplyScalar(H).floor(),V=it;if(K!==0&&(U=Or),J.bindFramebuffer(M.FRAMEBUFFER,U)&&L&&J.drawBuffers(E,U),J.viewport(P),J.scissor(q),J.setScissorTest(V),oe){const Ee=j.get(E.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ee.__webglTexture,K)}else if(_e){const Ee=j.get(E.texture),We=k;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,Ee.__webglTexture,K,We)}else if(E!==null&&K!==0){const Ee=j.get(E.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Ee.__webglTexture,K)}S=-1},this.readRenderTargetPixels=function(E,k,K,L,U,oe,_e,Le=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=j.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee){J.bindFramebuffer(M.FRAMEBUFFER,Ee);try{const We=E.textures[Le],Xe=We.format,Oe=We.type;if(!te.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-L&&K>=0&&K<=E.height-U&&(E.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Le),M.readPixels(k,K,L,U,xe.convert(Xe),xe.convert(Oe),oe))}finally{const We=I!==null?j.get(I).__webglFramebuffer:null;J.bindFramebuffer(M.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(E,k,K,L,U,oe,_e,Le=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=j.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee)if(k>=0&&k<=E.width-L&&K>=0&&K<=E.height-U){J.bindFramebuffer(M.FRAMEBUFFER,Ee);const We=E.textures[Le],Xe=We.format,Oe=We.type;if(!te.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,Ye),M.bufferData(M.PIXEL_PACK_BUFFER,oe.byteLength,M.STREAM_READ),E.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Le),M.readPixels(k,K,L,U,xe.convert(Xe),xe.convert(Oe),0);const dt=I!==null?j.get(I).__webglFramebuffer:null;J.bindFramebuffer(M.FRAMEBUFFER,dt);const yt=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await w0(M,yt,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,Ye),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,oe),M.deleteBuffer(Ye),M.deleteSync(yt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,K=0){const L=Math.pow(2,-K),U=Math.floor(E.image.width*L),oe=Math.floor(E.image.height*L),_e=k!==null?k.x:0,Le=k!==null?k.y:0;Y.setTexture2D(E,0),M.copyTexSubImage2D(M.TEXTURE_2D,K,0,0,_e,Le,U,oe),J.unbindTexture()};const qs=M.createFramebuffer(),na=M.createFramebuffer();this.copyTextureToTexture=function(E,k,K=null,L=null,U=0,oe=null){oe===null&&(U!==0?(Rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=U,U=0):oe=0);let _e,Le,Ee,We,Xe,Oe,Ye,dt,yt;const pt=E.isCompressedTexture?E.mipmaps[oe]:E.image;if(K!==null)_e=K.max.x-K.min.x,Le=K.max.y-K.min.y,Ee=K.isBox3?K.max.z-K.min.z:1,We=K.min.x,Xe=K.min.y,Oe=K.isBox3?K.min.z:0;else{const hn=Math.pow(2,-U);_e=Math.floor(pt.width*hn),Le=Math.floor(pt.height*hn),E.isDataArrayTexture?Ee=pt.depth:E.isData3DTexture?Ee=Math.floor(pt.depth*hn):Ee=1,We=0,Xe=0,Oe=0}L!==null?(Ye=L.x,dt=L.y,yt=L.z):(Ye=0,dt=0,yt=0);const ct=xe.convert(k.format),He=xe.convert(k.type);let Et;k.isData3DTexture?(Y.setTexture3D(k,0),Et=M.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Y.setTexture2DArray(k,0),Et=M.TEXTURE_2D_ARRAY):(Y.setTexture2D(k,0),Et=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,k.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,k.unpackAlignment);const ot=M.getParameter(M.UNPACK_ROW_LENGTH),rn=M.getParameter(M.UNPACK_IMAGE_HEIGHT),ns=M.getParameter(M.UNPACK_SKIP_PIXELS),on=M.getParameter(M.UNPACK_SKIP_ROWS),Ys=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,pt.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,pt.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,We),M.pixelStorei(M.UNPACK_SKIP_ROWS,Xe),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Oe);const Mt=E.isDataArrayTexture||E.isData3DTexture,fn=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){const hn=j.get(E),$t=j.get(k),Qt=j.get(hn.__renderTarget),ia=j.get($t.__renderTarget);J.bindFramebuffer(M.READ_FRAMEBUFFER,Qt.__webglFramebuffer),J.bindFramebuffer(M.DRAW_FRAMEBUFFER,ia.__webglFramebuffer);for(let Ci=0;Ci<Ee;Ci++)Mt&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,j.get(E).__webglTexture,U,Oe+Ci),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,j.get(k).__webglTexture,oe,yt+Ci)),M.blitFramebuffer(We,Xe,_e,Le,Ye,dt,_e,Le,M.DEPTH_BUFFER_BIT,M.NEAREST);J.bindFramebuffer(M.READ_FRAMEBUFFER,null),J.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(U!==0||E.isRenderTargetTexture||j.has(E)){const hn=j.get(E),$t=j.get(k);J.bindFramebuffer(M.READ_FRAMEBUFFER,qs),J.bindFramebuffer(M.DRAW_FRAMEBUFFER,na);for(let Qt=0;Qt<Ee;Qt++)Mt?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,hn.__webglTexture,U,Oe+Qt):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,hn.__webglTexture,U),fn?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,$t.__webglTexture,oe,yt+Qt):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,$t.__webglTexture,oe),U!==0?M.blitFramebuffer(We,Xe,_e,Le,Ye,dt,_e,Le,M.COLOR_BUFFER_BIT,M.NEAREST):fn?M.copyTexSubImage3D(Et,oe,Ye,dt,yt+Qt,We,Xe,_e,Le):M.copyTexSubImage2D(Et,oe,Ye,dt,We,Xe,_e,Le);J.bindFramebuffer(M.READ_FRAMEBUFFER,null),J.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else fn?E.isDataTexture||E.isData3DTexture?M.texSubImage3D(Et,oe,Ye,dt,yt,_e,Le,Ee,ct,He,pt.data):k.isCompressedArrayTexture?M.compressedTexSubImage3D(Et,oe,Ye,dt,yt,_e,Le,Ee,ct,pt.data):M.texSubImage3D(Et,oe,Ye,dt,yt,_e,Le,Ee,ct,He,pt):E.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,oe,Ye,dt,_e,Le,ct,He,pt.data):E.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,oe,Ye,dt,pt.width,pt.height,ct,pt.data):M.texSubImage2D(M.TEXTURE_2D,oe,Ye,dt,_e,Le,ct,He,pt);M.pixelStorei(M.UNPACK_ROW_LENGTH,ot),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,rn),M.pixelStorei(M.UNPACK_SKIP_PIXELS,ns),M.pixelStorei(M.UNPACK_SKIP_ROWS,on),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Ys),oe===0&&k.generateMipmaps&&M.generateMipmap(Et),J.unbindTexture()},this.copyTextureToTexture3D=function(E,k,K=null,L=null,U=0){return Rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,K,L,U)},this.initRenderTarget=function(E){j.get(E).__webglFramebuffer===void 0&&Y.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Y.setTextureCube(E,0):E.isData3DTexture?Y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Y.setTexture2DArray(E,0):Y.setTexture2D(E,0),J.unbindTexture()},this.resetState=function(){D=0,R=0,I=null,J.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const Un={score:!1,challenge:!0},Ky={class:"pointer-events-none absolute inset-0 z-10 p-4 text-white"},jy={class:"absolute left-4 top-4 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur"},Zy={class:"mt-1 text-sm font-medium"},Jy={key:0,class:"absolute right-4 top-44 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/45 px-3 py-2.5 backdrop-blur"},Qy={class:"grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5"},eM={class:"min-w-0"},tM={class:"mt-0.5 text-sm font-semibold"},nM={class:"text-[11px] text-white/50"},iM={class:"absolute bottom-4 left-4 grid grid-cols-2 gap-2 sm:grid-cols-4"},sM={class:"rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur"},rM={class:"mt-1 text-sm font-semibold"},oM={class:"rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur"},aM={class:"mt-1 text-sm font-semibold"},lM={class:"rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur"},cM={class:"mt-1 text-sm font-semibold"},uM={key:0,class:"rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur"},dM={class:"mt-1 text-sm font-semibold"},fM={__name:"FlightHUD",props:{telemetry:{type:Object,required:!0},statusText:{type:String,default:""},windMode:{type:String,default:"none"},cameraBearing:{type:[Number,String],default:0}},setup(n){const e=n,t=je(()=>e.windMode!=="none"),i=je(()=>Number(e.cameraBearing)||0),s=je(()=>{const l=Number(e.telemetry.windDirection)||0;return o(l+i.value)}),r=je(()=>{const l=o(Number(e.telemetry.windDirection)||0);return l>=337.5||l<22.5?"吹向北方":l<67.5?"吹向東北":l<112.5?"吹向東方":l<157.5?"吹向東南":l<202.5?"吹向南方":l<247.5?"吹向西南":l<292.5?"吹向西方":"吹向西北"});function o(l){return(l%360+360)%360}function a(l,c=1){const u=Number(l);return Number.isFinite(u)?u.toFixed(c):"0.0"}return(l,c)=>(he(),ge("div",Ky,[v("div",jy,[c[0]||(c[0]=v("p",{class:"text-[10px] uppercase tracking-[0.2em] text-white/45"}," Flight status ",-1)),v("p",Zy,ce(n.statusText),1)]),t.value?(he(),ge("div",Jy,[v("div",Qy,[(he(),ge("svg",{class:"h-6 w-6 transition-transform duration-300",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:Ht({transform:`rotate(${s.value}deg)`})},[...c[1]||(c[1]=[v("path",{d:"M12 20V5M12 5L7.5 9.5M12 5L16.5 9.5",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])],4))]),v("div",eM,[c[2]||(c[2]=v("p",{class:"text-[10px] uppercase tracking-[0.18em] text-white/45"}," Wind drift ",-1)),v("p",tM,ce(a(n.telemetry.windSpeed,2))+" m/s ",1),v("p",nM,ce(r.value),1)])])):ut("",!0),v("div",iM,[v("div",sM,[c[3]||(c[3]=v("p",{class:"text-[9px] uppercase tracking-[0.16em] text-white/40"}," Altitude ",-1)),v("p",rM,ce(a(n.telemetry.altitude))+" m ",1)]),v("div",oM,[c[4]||(c[4]=v("p",{class:"text-[9px] uppercase tracking-[0.16em] text-white/40"}," Speed ",-1)),v("p",aM,ce(a(n.telemetry.speed))+" m/s ",1)]),v("div",lM,[c[5]||(c[5]=v("p",{class:"text-[9px] uppercase tracking-[0.16em] text-white/40"}," Distance ",-1)),v("p",cM,ce(a(n.telemetry.distance))+" m ",1)]),Be(Un).score?(he(),ge("div",uM,[c[6]||(c[6]=v("p",{class:"text-[9px] uppercase tracking-[0.16em] text-white/40"}," Score ",-1)),v("p",dM,ce(Math.round(Number(n.telemetry.score)||0)),1)])):ut("",!0)])]))}},hM={class:"pointer-events-none flex flex-col items-center"},pM={class:"relative size-32 rounded-full border border-white/15 bg-black/60 shadow-2xl backdrop-blur-md"},mM={class:"absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/10 bg-black/80"},gM={class:"text-sm font-bold text-white"},_M={class:"text-[9px] text-white/50"},xM={__name:"CompassHUD",props:{heading:{type:Number,default:0}},setup(n){const e=n;function t(o){const a=Number(o);return Number.isFinite(a)?(a%360+360)%360:0}const i=je(()=>t(e.heading)),s=je(()=>{const o=i.value;return o>=337.5||o<22.5?"N":o<67.5?"NE":o<112.5?"E":o<157.5?"SE":o<202.5?"S":o<247.5?"SW":o<292.5?"W":"NW"}),r=$e(t(e.heading));return mn(()=>e.heading,o=>{const a=t(o),l=t(r.value);let c=a-l;c>180?c-=360:c<-180&&(c+=360),r.value+=c},{immediate:!0}),(o,a)=>(he(),ge("div",hM,[v("div",pM,[a[1]||(a[1]=_r('<div class="absolute inset-3 rounded-full border border-white/10"></div><div class="absolute left-1/2 top-3 h-2 w-px -translate-x-1/2 bg-white/50"></div><div class="absolute bottom-3 left-1/2 h-2 w-px -translate-x-1/2 bg-white/30"></div><div class="absolute left-3 top-1/2 h-px w-2 -translate-y-1/2 bg-white/30"></div><div class="absolute right-3 top-1/2 h-px w-2 -translate-y-1/2 bg-white/30"></div><span class="absolute left-1/2 top-2 -translate-x-1/2 text-xs font-bold text-lime-300"> N </span><span class="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-white/70"> E </span><span class="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-semibold text-white/50"> S </span><span class="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-white/70"> W </span>',9)),v("div",{class:"absolute inset-0 origin-center transition-transform duration-100 ease-linear",style:Ht({transform:`rotate(${r.value}deg)`})},[...a[0]||(a[0]=[v("svg",{viewBox:"0 0 128 128",class:"size-full"},[v("path",{d:`M64 29\r
               L57 44\r
               L64 40\r
               L71 44\r
               Z`,fill:"#bef264"})],-1)])],4),v("div",mM,[v("span",gM,ce(i.value.toFixed(0))+"° ",1),v("span",_M,ce(s.value),1)])]),a[2]||(a[2]=v("div",{class:"mt-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/50 backdrop-blur"}," Drone Heading ",-1))]))}},vM={key:0,class:"pointer-events-none absolute left-4 top-28 w-72 rounded-2xl border border-white/10 bg-black/60 p-4 text-white backdrop-blur"},bM={class:"flex items-center justify-between gap-3"},yM={class:"rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/55"},MM={class:"mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3"},SM={class:"rounded-xl bg-white/5 p-3 text-center"},EM={class:"mt-1 text-2xl font-semibold"},wM={class:"text-xs text-white/45"},TM={class:"rounded-xl bg-lime-300/10 p-3 text-center"},AM={class:"mt-1 text-3xl font-semibold text-lime-200"},RM={class:"text-xs text-lime-100/70"},CM={key:0,class:"mt-4 rounded-xl border border-lime-300/25 bg-lime-300/10 p-3 text-center"},PM={key:1,class:"mt-4"},DM={class:"flex items-center justify-between text-xs text-white/50"},LM={class:"mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"},IM={__name:"ChallengeHUD",props:{challenge:{type:Object,default:null}},setup(n){return(e,t)=>n.challenge?(he(),ge("div",vM,[v("div",bM,[t[0]||(t[0]=v("p",{class:"text-[10px] font-semibold uppercase tracking-[0.24em] text-lime-300/70"}," Random Heading ",-1)),v("span",yM," ROUND "+ce(n.challenge.round),1)]),v("div",MM,[v("div",SM,[t[1]||(t[1]=v("p",{class:"text-[10px] uppercase tracking-[0.16em] text-white/40"},"機頭",-1)),v("p",EM,ce(n.challenge.headingLabel),1),v("p",wM,ce(n.challenge.headingDegrees)+"°",1)]),t[3]||(t[3]=v("div",{class:"text-white/30"},"＋",-1)),v("div",TM,[t[2]||(t[2]=v("p",{class:"text-[10px] uppercase tracking-[0.16em] text-lime-200/60"},"前往",-1)),v("p",AM,ce(n.challenge.targetArrow),1),v("p",RM,ce(n.challenge.targetLabel),1)])]),n.challenge.completed?(he(),ge("div",CM,[...t[4]||(t[4]=[v("p",{class:"text-sm font-semibold text-lime-200"},"完成，準備下一題",-1),v("p",{class:"mt-1 text-xs text-white/50"},"機頭將重新隨機轉向",-1)])])):(he(),ge("div",PM,[v("div",DM,[t[5]||(t[5]=v("span",null,"保持機頭，僅用 Pitch／Roll",-1)),v("span",null,ce(n.challenge.progress.toFixed(1))+" / "+ce(n.challenge.targetDistance.toFixed(1))+" m",1)]),v("div",LM,[v("div",{class:"h-full rounded-full bg-lime-300 transition-[width] duration-100",style:Ht({width:`${Math.min(n.challenge.progress/n.challenge.targetDistance*100,100)}%`})},null,4)])])),t[6]||(t[6]=v("p",{class:"mt-3 text-xs leading-5 text-white/45"}," Yaw 已鎖定。請勿先轉正機頭，直接讓機體側移或倒退前往世界方向。 ",-1))])):ut("",!0)}},UM={key:0,class:"pointer-events-none absolute bottom-6 left-1/2 z-30 w-[min(90vw,600px)] -translate-x-1/2"},NM={class:"rounded-2xl border border-white/10 bg-black/75 px-6 py-4 shadow-2xl backdrop-blur-md"},FM={key:0,class:"flex h-20 items-center justify-center"},OM={key:1,class:"flex h-20 items-center justify-center"},BM={class:"flex items-center justify-center gap-3"},kM={class:"text-xl font-black tracking-[0.08em] text-white"},zM={key:0,class:"text-xl font-medium leading-none text-white/55"},HM={key:1,class:"font-mono text-lg font-semibold tabular-nums text-lime-200"},VM={class:"mt-5"},GM={class:"relative h-7"},WM={class:"relative mt-1 h-4 font-mono text-[9px] tabular-nums text-white/25"},XM={__name:"StickTrainingHUD",props:{exercise:{type:Object,default:null},completed:{type:Boolean,default:!1},round:{type:Number,default:0},errorType:{type:String,default:null},errorMessage:{type:String,default:""},waitingForCenter:{type:Boolean,default:!1},waitingForStartCenter:{type:Boolean,default:!1},waitingForNextRound:{type:Boolean,default:!1},successMin:{type:Number,default:.4},successMax:{type:Number,default:.6},successHoldProgress:{type:Number,default:0}},setup(n){const e=n,t=je(()=>{if(!e.exercise)return 0;const f=Number(e.exercise.currentValue??0),p=Number(e.exercise.direction??1);return Math.max(0,Math.min(1,f*p))}),i=je(()=>Math.round(t.value*100)),s=je(()=>{const f=e.exercise?.targetValue;return f==null?null:Math.round(Number(f)*100)}),r=je(()=>s.value===null),o=je(()=>Math.round(e.successMin*100)),a=je(()=>Math.round(e.successMax*100)),l=je(()=>Math.max(0,(e.successMax-e.successMin)*100)),c=je(()=>t.value>=e.successMin&&t.value<=e.successMax),u=je(()=>l.value*Math.max(0,Math.min(1,e.successHoldProgress))),d=je(()=>e.errorType?"error":e.completed||e.waitingForCenter||c.value?"success":"normal");return(f,p)=>n.exercise||n.waitingForStartCenter||n.waitingForNextRound?(he(),ge("div",UM,[v("section",NM,[n.waitingForStartCenter?(he(),ge("div",FM,[...p[0]||(p[0]=[v("div",{class:"flex items-center gap-3 text-sky-200"},[v("span",{class:"text-xl"}," ◎ "),v("span",{class:"text-sm font-semibold"}," 請將搖桿回到中心 ")],-1)])])):n.waitingForNextRound&&!n.exercise?(he(),ge("div",OM,[...p[1]||(p[1]=[v("div",{class:"flex items-center gap-3 text-lime-200"},[v("span",{class:"text-lg"}," ✓ "),v("span",{class:"text-sm font-semibold"}," 準備下一題 ")],-1)])])):n.exercise?(he(),ge(rt,{key:2},[v("div",BM,[v("h2",kM,ce(n.exercise.title),1),r.value?(he(),ge("span",zM,ce(n.exercise.arrow),1)):(he(),ge("span",HM,ce(s.value)+"% ",1))]),v("div",VM,[v("div",GM,[p[2]||(p[2]=v("div",{class:"absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-white/10"},null,-1)),v("div",{class:Tt(["absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-lime-300/20",c.value?"shadow-[0_0_14px_rgba(190,242,100,0.22)]":""]),style:Ht({left:`${o.value}%`,width:`${l.value}%`})},null,6),v("div",{class:"absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-lime-300 transition-[width] duration-75",style:Ht({left:`${o.value}%`,width:`${u.value}%`})},null,4),v("div",{class:"absolute top-1/2 h-5 w-px -translate-y-1/2 bg-lime-300/70",style:Ht({left:`${o.value}%`})},null,4),v("div",{class:"absolute top-1/2 h-5 w-px -translate-y-1/2 bg-lime-300/70",style:Ht({left:`${a.value}%`})},null,4),v("div",{class:Tt(["absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black transition-[left,background-color,box-shadow] duration-75",{"bg-white":d.value==="normal","bg-lime-300 shadow-[0_0_14px_rgba(190,242,100,0.75)]":d.value==="success","bg-red-300 shadow-[0_0_12px_rgba(252,165,165,0.65)]":d.value==="error"}]),style:Ht({left:`${i.value}%`})},null,6)]),v("div",WM,[p[3]||(p[3]=v("span",{class:"absolute left-0"}," 0% ",-1)),v("span",{class:"absolute -translate-x-1/2 text-lime-200/65",style:Ht({left:`${o.value}%`})},ce(o.value)+"% ",5),v("span",{class:"absolute -translate-x-1/2 text-lime-200/65",style:Ht({left:`${a.value}%`})},ce(a.value)+"% ",5),p[4]||(p[4]=v("span",{class:"absolute right-0"}," 100% ",-1))])])],64)):ut("",!0)])])):ut("",!0)}},dh=[{value:"angled",label:"斜俯視",distance:15,height:7.5,lookHeight:1.4},{value:"eye",label:"平視",distance:18,height:1.8,lookHeight:1.45},{value:"low",label:"低角度",distance:17,height:.75,lookHeight:1.65},{value:"high",label:"高角度俯視",distance:14,height:12.5,lookHeight:1.1}],Kl=[{value:"front",label:"正面 0°",degrees:0},{value:"diagonal",label:"斜角 45°",degrees:45},{value:"right",label:"右側 90°",degrees:90},{value:"back",label:"背面 180°",degrees:180},{value:"left",label:"左側 −90°",degrees:-90}],$M=[{value:"none",label:"無風"},{value:"breeze",label:"穩定微風"},{value:"gusty",label:"變向陣風"}],Oo=[{value:"light",label:"微風",multiplier:.6,description:"較容易預判與修正"},{value:"normal",label:"標準",multiplier:1,description:"標準穩定控制訓練"},{value:"strong",label:"強風",multiplier:1.6,description:"需要更快、更精細地修正"}],Bo=[{value:"large",label:"大",radius:4,description:"容錯空間較大"},{value:"normal",label:"標準",radius:2.5,description:"標準穩定範圍"},{value:"small",label:"小",radius:1.5,description:"要求精細位置控制"}],fh=[{value:"north",label:"北",degrees:0,symbol:"↑"},{value:"east",label:"東",degrees:90,symbol:"→"},{value:"south",label:"南",degrees:180,symbol:"↓"},{value:"west",label:"西",degrees:270,symbol:"←"},{value:"random",label:"隨機",degrees:null,symbol:"◇"}],dd=[{value:30,label:"30 秒",description:"快速"},{value:60,label:"60 秒",description:"標準"},{value:120,label:"120 秒",description:"持續"}],qM=[{value:"free",label:"自由練習"},{value:"randomHeading",label:"方向訓練"},{value:"stickTraining1",label:"搖桿訓練 Lv.1"},{value:"stickTraining2",label:"搖桿訓練 Lv.2"},{value:"stabilityTraining1",label:"穩定控制 Lv.1"},{value:"stabilityTraining2",label:"穩定控制 Lv.2"}],YM=Cn({cameraHeight:"angled",cameraBearing:"front",windMode:"none",trainingMode:"free",stabilityHeading:"random",stabilityWindLevel:"normal",stabilityZoneSize:"normal",stabilityDuration:60,showHeadingArrow:!0,showHelp:!0});function KM(){return YM}const jM={key:0,class:"mb-5"},ZM={key:0},JM={class:"grid grid-cols-5 gap-1"},QM=["onClick"],eS={class:"block text-lg font-semibold"},tS={class:"mt-1 block font-mono text-[10px] text-white/30"},nS={class:"mt-5 border-t border-white/8 pt-5"},iS={class:"mb-2 flex items-center justify-start gap-1"},sS={class:"text-xs text-white/40"},rS={class:"grid grid-cols-3 gap-2"},oS=["onClick"],aS={class:"block text-sm font-semibold"},lS={class:"mt-5 border-t border-white/8 pt-5"},cS={class:"mb-2 flex items-center justify-start gap-1"},uS={class:"text-xs text-white/40"},dS={class:"grid grid-cols-3 gap-2"},fS=["onClick"],hS={class:"block text-sm font-semibold"},pS={class:"mt-1 block font-mono text-[10px] text-white/35"},mS={class:"grid grid-cols-4 gap-2"},gS=["onClick"],_S={class:"block text-sm font-semibold"},xS={class:"mt-1 block text-[10px] text-white/30"},vS={key:0,class:"mt-3 flex items-center gap-3 rounded-xl border border-white/10 bg-white/2.5 p-3"},bS=["value"],yS={__name:"StabilityTrainingSettings",props:{settings:{type:Object,required:!0},embedded:{type:Boolean,default:!1},showDifficulty:{type:Boolean,default:!0}},emits:["update-heading","update-wind-level","update-zone-size","update-duration"],setup(n,{emit:e}){const t=n,i=e,s=dd.map(f=>f.value),r=je(()=>!s.includes(Number(t.settings.stabilityDuration)));function o(f){i("update-wind-level",f)}function a(f){i("update-zone-size",f)}function l(f){i("update-duration",f)}function c(){r.value||i("update-duration",90)}function u(f){i("update-duration",f.target.value)}function d(f){i("update-heading",f)}return(f,p)=>(he(),ge("section",{class:Tt(n.embedded?"":"rounded-2xl border border-white/10 bg-white/[0.035] p-4")},[n.embedded?ut("",!0):(he(),ge("div",jM,[...p[0]||(p[0]=[v("p",{class:"text-[11px] font-semibold uppercase tracking-[0.22em] text-lime-300/70"}," Stability Training ",-1),v("h2",{class:"mt-1 text-base font-semibold text-white"}," 訓練設定 ",-1)])])),n.showDifficulty?(he(),ge(rt,{key:1},[n.showDifficulty?(he(),ge("div",ZM,[p[1]||(p[1]=v("div",{class:"mb-2 flex items-center justify-start gap-2"},[v("p",{class:"text-xs font-semibold uppercase tracking-[0.16em] text-white/80"},"Heading"),v("p",{class:"text-xs text-white/40"},"指定機頭方向可針對單一方向反覆練習；隨機模式會在每次挑戰重新抽取方向。")],-1)),v("div",JM,[(he(!0),ge(rt,null,En(Be(fh),g=>(he(),ge("button",{key:g.value,type:"button",class:Tt(["rounded-xl border px-2 py-3 text-center transition",n.settings.stabilityHeading===g.value?"border-lime-300/50 bg-lime-300/10 text-lime-200":"border-white/10 bg-white/[0.025] text-white/55 hover:border-white/20 hover:bg-white/5"]),onClick:b=>d(g.value)},[v("span",eS,ce(g.symbol),1),v("span",tS,ce(g.degrees===null?"RANDOM":`${g.degrees}°`),1)],10,QM))),128))])])):ut("",!0),v("div",nS,[v("div",iS,[p[2]||(p[2]=v("p",{class:"text-xs font-semibold uppercase tracking-[0.16em] text-white/80"},"Wind",-1)),v("p",sS,ce(Be(Oo).find(g=>g.value===n.settings.stabilityWindLevel)?.description),1)]),v("div",rS,[(he(!0),ge(rt,null,En(Be(Oo),g=>(he(),ge("button",{key:g.value,type:"button",class:Tt(["rounded-xl border px-3 py-3 text-center transition",n.settings.stabilityWindLevel===g.value?"border-lime-300/50 bg-lime-300/10 text-lime-200":"border-white/10 bg-white/2.5 text-white/55 hover:border-white/20 hover:bg-white/5"]),onClick:b=>o(g.value)},[v("span",aS,ce(g.label),1)],10,oS))),128))])]),v("div",lS,[v("div",cS,[p[3]||(p[3]=v("p",{class:"text-xs font-semibold uppercase tracking-[0.16em] text-white/80"},"Target Size",-1)),v("p",uS,ce(Be(Bo).find(g=>g.value===n.settings.stabilityZoneSize)?.description),1)]),v("div",dS,[(he(!0),ge(rt,null,En(Be(Bo),g=>(he(),ge("button",{key:g.value,type:"button",class:Tt(["rounded-xl border px-3 py-3 text-center transition",n.settings.stabilityZoneSize===g.value?"border-lime-300/50 bg-lime-300/10 text-lime-200":"border-white/10 bg-white/2.5 text-white/55 hover:border-white/20 hover:bg-white/5"]),onClick:b=>a(g.value)},[v("span",hS,ce(g.label),1),v("span",pS," R "+ce(g.radius.toFixed(1))+" m ",1)],10,fS))),128))])])],64)):ut("",!0),v("div",{class:Tt(n.showDifficulty?"mt-5 border-t border-white/8 pt-5":"")},[p[7]||(p[7]=v("div",{class:"mb-2 flex items-center justify-start gap-1"},[v("p",{class:"text-xs font-semibold uppercase tracking-[0.16em] text-white/80"},"Duration"),v("p",{class:"text-xs text-white/40"},"30 秒適合快速練習，60 秒為標準訓練， 120 秒以上開始考驗持續穩定控制。")],-1)),v("div",mS,[(he(!0),ge(rt,null,En(Be(dd),g=>(he(),ge("button",{key:g.value,type:"button",class:Tt(["rounded-xl border px-2 py-3 text-center transition",Number(n.settings.stabilityDuration)===g.value?"border-lime-300/50 bg-lime-300/10 text-lime-200":"border-white/10 bg-white/2.5 text-white/55 hover:border-white/20 hover:bg-white/5"]),onClick:b=>l(g.value)},[v("span",_S,ce(g.label),1),v("span",xS,ce(g.description),1)],10,gS))),128)),v("button",{type:"button",class:Tt(["rounded-xl border px-2 py-3 text-center transition",r.value?"border-lime-300/50 bg-lime-300/10 text-lime-200":"border-white/10 bg-white/2.5 text-white/55 hover:border-white/20 hover:bg-white/5"]),onClick:c},[...p[4]||(p[4]=[v("span",{class:"block text-sm font-semibold"}," 自訂 ",-1),v("span",{class:"mt-1 block text-[10px] text-white/30"}," 10–600 秒 ",-1)])],2)]),r.value?(he(),ge("div",vS,[p[5]||(p[5]=v("label",{for:"stability-custom-duration",class:"text-xs text-white/45"}," 自訂秒數 ",-1)),v("input",{id:"stability-custom-duration",value:n.settings.stabilityDuration,type:"number",min:"10",max:"600",step:"10",class:"min-w-0 flex-1 rounded-lg border border-white/10 bg-black/30 px-3 py-2 font-mono text-sm text-white outline-none transition focus:border-lime-300/40",onChange:u},null,40,bS),p[6]||(p[6]=v("span",{class:"text-xs text-white/40"}," 秒 ",-1))])):ut("",!0)],2)],2))}},MS={key:0,class:"absolute inset-0 z-40 flex items-center justify-center bg-black/40 px-4 py-4 backdrop-blur-[2px]"},SS={class:"pointer-events-auto max-h-[calc(100%-16px)] w-[min(580px,calc(100%-16px))] overflow-y-auto rounded-3xl border border-white/10 bg-black/80 p-6 shadow-2xl backdrop-blur"},ES={class:"mb-5"},wS={class:"text-xs font-semibold uppercase tracking-[0.22em] text-lime-300"},TS={key:0,class:"mt-2 text-sm leading-6 text-white/50"},AS={key:1,class:"mt-2 text-sm leading-6 text-white/50"},RS={key:1,class:"pointer-events-none absolute inset-0 z-30 flex items-center justify-center"},CS={class:"flex flex-col items-center rounded-3xl border border-white/10 bg-black/55 px-10 py-8 text-center backdrop-blur"},PS={class:"text-xs font-semibold uppercase tracking-[0.22em] text-lime-300"},DS={class:"mt-4 flex flex-wrap justify-center gap-2"},LS={class:"rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"},IS={class:"rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"},US={class:"rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"},NS={class:"mt-1 text-xl font-semibold text-white"},FS={class:"mt-6 font-mono text-6xl font-semibold text-white"},OS={key:2,class:"pointer-events-none absolute left-1/2 top-5 z-30 -translate-x-1/2"},BS={class:"flex items-center gap-3 rounded-full border border-white/10 bg-black/55 px-5 py-2 backdrop-blur"},kS={class:"font-mono text-lg font-semibold tracking-[0.18em] text-white"},zS={class:"text-xs text-white/50"},HS={class:"text-xs text-white/50"},VS={key:3,class:"absolute inset-0 z-40 flex items-center justify-center bg-black/55 backdrop-blur-sm"},GS={class:"pointer-events-auto w-[min(420px,calc(100%-32px))] rounded-3xl border border-white/10 bg-black/80 p-6 shadow-2xl"},WS={class:"mb-6"},XS={class:"text-xs font-semibold uppercase tracking-[0.22em] text-lime-300"},$S={key:0,class:"mb-5 grid grid-cols-2 gap-3"},qS={class:"rounded-2xl border border-white/10 bg-white/4 p-4"},YS={class:"mt-1 text-base font-semibold text-white"},KS={class:"rounded-2xl border border-white/10 bg-white/4 p-4"},jS={class:"mt-1 text-base font-semibold text-white"},ZS={class:"mb-5 grid grid-cols-2 gap-3"},JS={class:"rounded-2xl border border-white/10 bg-white/4 p-4"},QS={class:"mt-1 text-base font-semibold text-white"},eE={class:"rounded-2xl border border-white/10 bg-white/4 p-4"},tE={class:"mt-1 text-base font-semibold text-white"},nE={class:"grid grid-cols-2 gap-3"},iE={class:"rounded-2xl border border-white/10 bg-white/4 p-4"},sE={class:"mt-1 font-mono text-lg font-semibold text-white"},rE={class:"rounded-2xl border border-white/10 bg-white/4 p-4"},oE={class:"mt-1 font-mono text-lg font-semibold text-lime-300"},aE={class:"rounded-2xl border border-white/10 bg-white/4 p-4"},lE={class:"mt-1 font-mono text-lg font-semibold text-white"},cE={class:"rounded-2xl border border-white/10 bg-white/4 p-4"},uE={class:"mt-1 font-mono text-lg font-semibold text-white"},dE={__name:"StabilityTrainingHUD",props:{timeLabel:{type:String,required:!0},phase:{type:String,required:!0},headingLabel:{type:String,default:"-"},totalLabel:{type:String,default:"00:00.0"},insideLabel:{type:String,default:"00:00.0"},outsideLabel:{type:String,default:"00:00.0"},stabilityLabel:{type:String,default:"0.0%"},readyCount:{type:Number,default:3},level:{type:Number,default:1},settings:{type:Object,default:null},showDifficulty:{type:Boolean,default:!1},windLabel:{type:String,default:""},zoneLabel:{type:String,default:""},durationLabel:{type:String,default:""}},emits:["start","retry","change-settings","update-heading","update-wind-level","update-zone-size","update-duration"],setup(n,{emit:e}){const t=e;return(i,s)=>n.phase==="setup"?(he(),ge("div",MS,[v("section",SS,[v("header",ES,[v("p",wS," Stability Training Lv."+ce(n.level),1),s[7]||(s[7]=v("h2",{class:"mt-2 text-2xl font-semibold text-white"}," 準備好了嗎？ ",-1)),n.level===1?(he(),ge("p",TS," 保持機頭方向不變，只使用 Pitch／Roll，將無人機維持在穩定範圍內。 ")):(he(),ge("p",AS," 設定本回合的風力與穩定範圍，確認後開始訓練。 "))]),n.settings?(he(),zn(yS,{key:0,settings:n.settings,embedded:!0,"show-difficulty":n.level===2,onUpdateHeading:s[0]||(s[0]=r=>t("update-heading",r)),onUpdateWindLevel:s[1]||(s[1]=r=>t("update-wind-level",r)),onUpdateZoneSize:s[2]||(s[2]=r=>t("update-zone-size",r)),onUpdateDuration:s[3]||(s[3]=r=>t("update-duration",r))},null,8,["settings","show-difficulty"])):ut("",!0),v("button",{type:"button",class:"mt-5 w-full rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold tracking-[0.12em] text-black transition hover:bg-lime-200 active:scale-[0.99]",onClick:s[4]||(s[4]=r=>t("start"))}," START ")])])):n.phase==="ready"?(he(),ge("div",RS,[v("div",CS,[v("p",PS," Stability Training Lv."+ce(n.level),1),v("div",DS,[n.showDifficulty?(he(),ge(rt,{key:0},[v("span",LS," WIND · "+ce(n.windLabel),1),v("span",IS," TARGET · "+ce(n.zoneLabel),1)],64)):ut("",!0),v("span",US," TIME · "+ce(n.durationLabel),1)]),s[8]||(s[8]=v("p",{class:"mt-3 text-sm uppercase tracking-[0.16em] text-white/50"}," Heading ",-1)),v("p",NS,ce(n.headingLabel),1),v("p",FS,ce(n.readyCount),1)])])):n.phase==="running"?(he(),ge("div",OS,[v("div",BS,[v("span",kS,ce(n.timeLabel),1),n.showDifficulty?(he(),ge(rt,{key:0},[s[9]||(s[9]=v("span",{class:"h-4 w-px bg-white/10"},null,-1)),v("span",zS,ce(n.windLabel),1),s[10]||(s[10]=v("span",{class:"text-xs text-white/30"}," · ",-1)),v("span",HS,ce(n.zoneLabel),1)],64)):ut("",!0)])])):n.phase==="finished"?(he(),ge("div",VS,[v("section",GS,[v("header",WS,[v("p",XS," Stability Training Lv."+ce(n.level),1),s[11]||(s[11]=v("h2",{class:"mt-2 text-2xl font-semibold text-white"}," 穩定控制完成 ",-1))]),n.showDifficulty?(he(),ge("div",$S,[v("div",qS,[s[12]||(s[12]=v("p",{class:"text-[11px] uppercase tracking-[0.18em] text-white/40"}," Wind ",-1)),v("p",YS,ce(n.windLabel),1)]),v("div",KS,[s[13]||(s[13]=v("p",{class:"text-[11px] uppercase tracking-[0.18em] text-white/40"}," Target ",-1)),v("p",jS,ce(n.zoneLabel),1)])])):ut("",!0),v("div",ZS,[v("div",JS,[s[14]||(s[14]=v("p",{class:"text-[11px] uppercase tracking-[0.18em] text-white/40"}," Heading ",-1)),v("p",QS,ce(n.headingLabel),1)]),v("div",eE,[s[15]||(s[15]=v("p",{class:"text-[11px] uppercase tracking-[0.18em] text-white/40"}," Duration ",-1)),v("p",tE,ce(n.durationLabel),1)])]),v("div",nE,[v("div",iE,[s[16]||(s[16]=v("p",{class:"text-[11px] uppercase tracking-[0.16em] text-white/40"}," Total ",-1)),v("p",sE,ce(n.totalLabel),1)]),v("div",rE,[s[17]||(s[17]=v("p",{class:"text-[11px] uppercase tracking-[0.16em] text-white/40"}," Stability ",-1)),v("p",oE,ce(n.stabilityLabel),1)]),v("div",aE,[s[18]||(s[18]=v("p",{class:"text-[11px] uppercase tracking-[0.16em] text-white/40"}," In Zone ",-1)),v("p",lE,ce(n.insideLabel),1)]),v("div",cE,[s[19]||(s[19]=v("p",{class:"text-[11px] uppercase tracking-[0.16em] text-white/40"}," Out of Zone ",-1)),v("p",uE,ce(n.outsideLabel),1)])]),v("button",{type:"button",class:"mt-5 w-full rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-200 active:scale-[0.99]",onClick:s[5]||(s[5]=r=>t("retry"))}," 再次挑戰 "),n.level===2&&n.showDifficulty?(he(),ge("button",{key:1,type:"button",class:"mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white active:scale-[0.99]",onClick:s[6]||(s[6]=r=>t("change-settings"))}," 變更設定 ")):ut("",!0)])])):ut("",!0)}},jl=[{degrees:0,radians:0,key:"north",label:"北",shortLabel:"N"},{degrees:90,radians:Math.PI/2,key:"east",label:"東",shortLabel:"E"},{degrees:180,radians:Math.PI,key:"south",label:"南",shortLabel:"S"},{degrees:270,radians:-Math.PI/2,key:"west",label:"西",shortLabel:"W"}],fE=[{key:"north",label:"北方",arrow:"↑",vector:{x:0,z:-1}},{key:"east",label:"東方",arrow:"→",vector:{x:1,z:0}},{key:"south",label:"南方",arrow:"↓",vector:{x:0,z:1}},{key:"west",label:"西方",arrow:"←",vector:{x:-1,z:0}}],hE={id:"random-heading-cardinal",title:"Random Heading",description:"保持機頭方向，使用 Pitch／Roll 前往指定的世界方向。",distance:3,successDelay:.65},pE=[hE];class mE{constructor(){this.challenge=null,this.heading=null,this.direction=null,this.startPosition=new z,this.targetPosition=new z,this.progress=0,this.round=0,this.phase="idle",this.successTimer=0,this.lastPair=""}start(e,t){return this.challenge=e,this.round=0,this.lastPair="",this.nextRound(t)}nextRound(e){if(!this.challenge)return this.getState();let t,i,s;do t=fd(jl),i=fd(fE),s=`${t.key}:${i.key}`;while(s===this.lastPair);return this.lastPair=s,this.heading=t,this.direction=i,this.round+=1,this.progress=0,this.phase="active",this.successTimer=0,this.startPosition.copy(e),this.targetPosition.set(e.x+i.vector.x*this.challenge.distance,e.y,e.z+i.vector.z*this.challenge.distance),this.getState()}reset(){return this.challenge=null,this.heading=null,this.direction=null,this.startPosition.set(0,0,0),this.targetPosition.set(0,0,0),this.progress=0,this.round=0,this.phase="idle",this.successTimer=0,this.lastPair="",this.getState()}update(e,t){if(!this.challenge||!this.direction)return this.getState();if(this.phase==="success")return this.successTimer+=e,this.getState();const i=t.clone().sub(this.startPosition),{x:s,z:r}=this.direction.vector;return this.progress=Math.max(0,i.x*s+i.z*r),this.progress>=this.challenge.distance&&(this.progress=this.challenge.distance,this.phase="success",this.successTimer=0),this.getState()}shouldAdvance(){return this.phase==="success"&&this.successTimer>=this.challenge.successDelay}getHeadingRadians(){return this.heading?.radians??0}getTargetPosition(){return this.targetPosition}getState(){return{active:!!this.challenge,id:this.challenge?.id??null,title:this.challenge?.title??"",description:this.challenge?.description??"",round:this.round,phase:this.phase,headingDegrees:this.heading?.degrees??0,headingLabel:this.heading?.label??"",headingShortLabel:this.heading?.shortLabel??"",targetDirection:this.direction?.key??"",targetLabel:this.direction?.label??"",targetArrow:this.direction?.arrow??"",targetDistance:this.challenge?.distance??0,progress:this.progress,completed:this.phase==="success"}}}function fd(n){return n[Math.floor(Math.random()*n.length)]}const $a={KeyW:["throttle",1],KeyS:["throttle",-1],KeyA:["yaw",1],KeyD:["yaw",-1],ArrowUp:["pitch",1],ArrowDown:["pitch",-1],ArrowLeft:["roll",-1],ArrowRight:["roll",1]};function gE({onPause:n,onReset:e,onHelp:t}){const i=Cn({throttle:.5,yaw:0,pitch:0,roll:0}),s=new Set;function r(){i.throttle=.5,i.yaw=0,i.pitch=0,i.roll=0;for(const c of s){const u=$a[c];if(!u)continue;const[d,f]=u;if(d==="throttle"){i.throttle=f>0?1:0;continue}i[d]+=f}i.yaw=Math.max(-1,Math.min(1,i.yaw)),i.pitch=Math.max(-1,Math.min(1,i.pitch)),i.roll=Math.max(-1,Math.min(1,i.roll))}function o(c){if($a[c.code]){c.preventDefault(),s.add(c.code),r();return}c.repeat||(c.code==="Space"?(c.preventDefault(),n?.()):c.code==="KeyR"?e?.():c.code==="KeyH"&&t?.())}function a(c){$a[c.code]&&(c.preventDefault(),s.delete(c.code),r())}function l(){s.clear(),r()}return ks(()=>{window.addEventListener("keydown",o,{passive:!1}),window.addEventListener("keyup",a,{passive:!1}),window.addEventListener("blur",l)}),zs(()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",a),window.removeEventListener("blur",l)}),{input:i,clearInput:l}}const fo={roll:0,pitch:1,throttle:2,yaw:3};function _E(){const n=$e(!1),e=$e(""),t=$e(null),{normalizeAxis:i}=gc(),s=Cn({throttle:0,yaw:0,pitch:0,roll:0});let r=null;function o(){s.throttle=0,s.yaw=0,s.pitch=0,s.roll=0}function a(){const f=navigator.getGamepads?.()??[];return t.value!==null&&f[t.value]?f[t.value]:Array.from(f).find(p=>p&&p.axes.length>=4)??null}function l(){const f=a();if(!f){n.value=!1,e.value="",t.value=null,o();return}n.value=!0,e.value=f.id,t.value=f.index,s.roll=i("roll",f.axes[fo.roll]),s.pitch=i("pitch",f.axes[fo.pitch]),s.yaw=-i("yaw",f.axes[fo.yaw]),s.throttle=i("throttle",f.axes[fo.throttle])}function c(){l(),r=requestAnimationFrame(c)}function u(f){f.gamepad.axes.length>=4&&(t.value=f.gamepad.index,e.value=f.gamepad.id,n.value=!0)}function d(f){f.gamepad.index===t.value&&(n.value=!1,t.value=null,e.value="",o())}return ks(()=>{window.addEventListener("gamepadconnected",u),window.addEventListener("gamepaddisconnected",d),r=requestAnimationFrame(c)}),zs(()=>{window.removeEventListener("gamepadconnected",u),window.removeEventListener("gamepaddisconnected",d),r!==null&&cancelAnimationFrame(r)}),{input:s,connected:n,gamepadId:e,gamepadIndex:t,clearInput:o}}const hd=.2,qa=.1,pd=.4,md=.6,gd=[.25,.5,.75],_d=.05,xd=1e3,xE=600,vd=[{id:"pitch-forward",axis:"pitch",direction:1,title:"FORWARD",label:"前進",stick:"右搖桿",arrow:"↑",instruction:"將右搖桿向前推"},{id:"pitch-backward",axis:"pitch",direction:-1,title:"BACKWARD",label:"後退",stick:"右搖桿",arrow:"↓",instruction:"將右搖桿向後拉"},{id:"roll-left",axis:"roll",direction:-1,title:"ROLL LEFT",label:"左移",stick:"右搖桿",arrow:"←",instruction:"將右搖桿向左推"},{id:"roll-right",axis:"roll",direction:1,title:"ROLL RIGHT",label:"右移",stick:"右搖桿",arrow:"→",instruction:"將右搖桿向右推"},{id:"yaw-left",axis:"yaw",direction:1,title:"YAW LEFT",label:"左轉",stick:"左搖桿",arrow:"↺",instruction:"將左搖桿向左推"},{id:"yaw-right",axis:"yaw",direction:-1,title:"YAW RIGHT",label:"右轉",stick:"左搖桿",arrow:"↻",instruction:"將左搖桿向右推"}],vE={pitch:"Pitch",roll:"Roll",yaw:"Yaw"};function bd(n){return n[Math.floor(Math.random()*n.length)]}function bE(n){const e=$e(null),t=$e(!1),i=$e(0),s=$e(!1),r=$e(!1),o=$e(!1),a=$e(null),l=$e(""),c=$e(pd),u=$e(md),d=$e(null),f=$e(0);let p=null,g=null,b=null,m=null;function h(){return Number(n?.value??n??1)}function A(){a.value=null,l.value=""}function T(){p!==null&&(clearTimeout(p),p=null)}function y(){m=null,f.value=0}function F(){if(h()===2){const $=gd.filter(X=>X!==b),ne=bd($.length?$:gd);b=ne,d.value=ne,c.value=Math.max(0,ne-_d),u.value=Math.min(1,ne+_d);return}d.value=null,c.value=pd,u.value=md}function D(V){return Math.abs(Number(V?.pitch??0))<=qa&&Math.abs(Number(V?.roll??0))<=qa&&Math.abs(Number(V?.yaw??0))<=qa}function R(){T();const V=vd.filter(ne=>ne.id!==g),$=bd(V.length?V:vd);g=$.id,F(),e.value={...$,currentValue:0,targetValue:d.value},t.value=!1,r.value=!1,o.value=!1,A(),y(),i.value+=1}function I(){o.value||(o.value=!0,p=setTimeout(()=>{o.value=!1,R()},xE))}function S(){T(),e.value=null,i.value=0,g=null,b=null,t.value=!1,s.value=!0,r.value=!1,o.value=!1,A(),y(),F()}function x(){T(),e.value=null,t.value=!1,s.value=!1,r.value=!1,o.value=!1,A(),y()}function P(V,$){return["pitch","roll","yaw"].find(X=>X===$?!1:Math.abs(Number(V?.[X]??0))>=hd)}function q(V){if(s.value){D(V)&&(s.value=!1,I());return}if(o.value||!e.value)return;if(r.value){D(V)&&(r.value=!1,y(),I());return}if(t.value)return;const $=e.value,ne=Number(V?.[$.axis]??0);$.currentValue=ne;const X=ne*$.direction;if(X<=-hd){y(),a.value="wrong-direction",l.value="方向相反，請往指定方向操作";return}const ee=P(V,$.axis);if(ee){y(),a.value="wrong-axis",l.value=`目前操作的是 ${vE[ee]}`;return}if(X>u.value){y(),a.value="over-input",l.value="操作過量，請減少推桿幅度";return}if(X<c.value){y(),A();return}A();const H=performance.now();m===null&&(m=H);const pe=H-m;f.value=Math.min(1,pe/xd),!(pe<xd)&&(f.value=1,t.value=!0,r.value=!0,A())}return n?.value!==void 0&&mn(n,()=>{S()}),{currentExercise:e,completed:t,round:i,waitingForStartCenter:s,waitingForCenter:r,waitingForNextRound:o,errorType:a,errorMessage:l,successMin:c,successMax:u,targetValue:d,successHoldProgress:f,start:S,stop:x,update:q}}class yE{constructor(e){this.camera=e,this.offset=new z(9.5,7.5,11.5),this.targetPosition=new z,this.lookTarget=new z,this.preset=null}setPreset(e,t,i,s=!1){this.preset=e;const r=Ke.degToRad(t.degrees);this.offset.set(Math.sin(r)*e.distance,e.height,Math.cos(r)*e.distance),s&&(this.camera.position.set(i.x+this.offset.x,this.offset.y,i.z+this.offset.z),this.camera.lookAt(i.x,e.lookHeight,i.z))}update(e,t){if(!this.preset)return;const i=1-Math.exp(-2.1*e);this.targetPosition.set(t.x+this.offset.x,this.offset.y,t.z+this.offset.z),this.camera.position.lerp(this.targetPosition,i),this.lookTarget.set(t.x,Math.max(this.preset.lookHeight,t.y),t.z),this.camera.lookAt(this.lookTarget)}}function ME(n){return(Ke.radToDeg(n)%360+360)%360}function SE(n){const e=["↑","↗","→","↘","↓","↙","←","↖"],t=(n%360+360)%360;return e[Math.round(t/45)%8]}const EE=new z(0,1,0);class wE{constructor(e){this.drone=e,this.velocity=new z,this.localAcceleration=new z,this.worldAcceleration=new z,this.currentWindAcceleration=new z,this.state={yaw:0,pitchVisual:0,rollVisual:0},this.randomYawTimer=0}reset(e=0){this.velocity.set(0,0,0),this.localAcceleration.set(0,0,0),this.worldAcceleration.set(0,0,0),this.currentWindAcceleration.set(0,0,0),this.state.yaw=e,this.state.pitchVisual=0,this.state.rollVisual=0,this.randomYawTimer=0,this.drone.position.set(0,1.5,0),this.drone.rotation.set(0,-e,0)}stopMotion(){this.velocity.set(0,0,0),this.localAcceleration.set(0,0,0),this.worldAcceleration.set(0,0,0),this.currentWindAcceleration.set(0,0,0),this.state.pitchVisual=0,this.state.rollVisual=0,this.drone.rotation.set(0,-this.state.yaw,0)}update(e,t,i,s){const r=Number.isFinite(e)?Ke.clamp(e,0,.05):0;this.updateRandomOrientation(r,s);const o=Ke.degToRad(95);this.state.yaw-=t.yaw*o*r;const a=Ke.degToRad(17),l=1-Math.exp(-9*r);this.state.pitchVisual=Ke.lerp(this.state.pitchVisual,t.pitch*a,l),this.state.rollVisual=Ke.lerp(this.state.rollVisual,-t.roll*a,l);const u=(t.throttle-.5)*2;this.localAcceleration.set(t.roll*4.4,u*4.1,-t.pitch*4.4),this.worldAcceleration.copy(this.localAcceleration).applyAxisAngle(EE,-this.state.yaw),this.velocity.addScaledVector(this.worldAcceleration,r),this.updateWindAcceleration(i),this.velocity.addScaledVector(this.currentWindAcceleration,r);const d=Math.exp(-.66*r),f=Math.exp(-1.25*r);this.velocity.x*=d,this.velocity.z*=d,this.velocity.y*=f;const p=Math.hypot(this.velocity.x,this.velocity.z);if(p>5.3){const g=5.3/p;this.velocity.x*=g,this.velocity.z*=g}this.velocity.y=Ke.clamp(this.velocity.y,-2.8,2.8),this.drone.position.addScaledVector(this.velocity,r),this.clampAltitude(),this.drone.rotation.set(this.state.pitchVisual,-this.state.yaw,this.state.rollVisual,"YXZ");for(const g of this.drone.userData.rotors??[])g.rotation.y+=g.userData.spinDirection*(18+t.throttle*14)*r;return{altitude:this.drone.position.y,speed:this.velocity.length(),yaw:ME(this.state.yaw),distance:Math.hypot(this.drone.position.x,this.drone.position.z)}}updateWindAcceleration(e){if(!e||!Number.isFinite(e.x)||!Number.isFinite(e.y)||!Number.isFinite(e.z)){this.currentWindAcceleration.set(0,0,0);return}this.currentWindAcceleration.copy(e)}updateRandomOrientation(e,t){if(t!=="random"){this.randomYawTimer=0;return}if(this.randomYawTimer+=e,this.randomYawTimer>=8){const i=[45,90,135,180],s=i[Math.floor(Math.random()*i.length)];this.state.yaw+=Ke.degToRad(s),this.randomYawTimer=0}}clampAltitude(){this.drone.position.y<.35&&(this.drone.position.y=.35,this.velocity.y<0&&(this.velocity.y=0)),this.drone.position.y>5.2&&(this.drone.position.y=5.2,this.velocity.y>0&&(this.velocity.y=0))}}class TE{constructor(e=12){this.size=e,this.half=e/2,this.wasOutside=!1,this.count=0}reset(){this.wasOutside=!1,this.count=0}update(e){const t=Math.abs(e.x)>this.half||Math.abs(e.z)>this.half;return t&&!this.wasOutside&&(this.count+=1),this.wasOutside=t,{outside:t,count:this.count}}}class AE{constructor(e=6){this.zoneHalf=e,this.score=0}reset(){this.score=0}update(e,t,i){const s=Ke.clamp(1-t/this.zoneHalf,0,1);return this.score=i?Math.max(0,this.score-e*35):this.score+e*(10+s*90),this.score}}class RE{constructor(){this.mode="none",this.baseDirection=0,this.currentDirection=0,this.targetDirection=0,this.baseSpeed=0,this.currentSpeed=0,this.targetSpeed=0,this.nextSpeedChangeAt=0,this.nextDirectionChangeAt=0,this.lastElapsedTime=0,this.acceleration=new z}reset(e="none"){return this.mode=e,this.lastElapsedTime=0,e==="none"?(this.baseDirection=0,this.currentDirection=0,this.targetDirection=0,this.baseSpeed=0,this.currentSpeed=0,this.targetSpeed=0,this.nextSpeedChangeAt=0,this.nextDirectionChangeAt=0,this.acceleration.set(0,0,0),this.getState()):(this.baseDirection=Math.random()*Math.PI*2,this.currentDirection=this.baseDirection,this.targetDirection=this.baseDirection,e==="gusty"?this.baseSpeed=.42:e==="stability"?this.baseSpeed=.28:this.baseSpeed=.34,this.currentSpeed=this.baseSpeed,this.targetSpeed=this.baseSpeed,e==="stability"?(this.nextSpeedChangeAt=Ke.randFloat(1.8,3.2),this.nextDirectionChangeAt=Ke.randFloat(4,7)):(this.nextSpeedChangeAt=1.5,this.nextDirectionChangeAt=e==="gusty"?4:3),this.updateAcceleration(),this.getState())}update(e,t=0){const i=Number.isFinite(e)?Ke.clamp(e,0,.05):0,s=Number.isFinite(t)?Math.max(0,t):0;if(this.mode==="none")return this.acceleration.set(0,0,0),this.lastElapsedTime=s,this.getState();s<this.lastElapsedTime&&(this.nextSpeedChangeAt=s+Ke.randFloat(1.2,2.4),this.mode==="stability"?this.nextDirectionChangeAt=s+Ke.randFloat(4,7):this.nextDirectionChangeAt=s+(this.mode==="gusty"?Ke.randFloat(3,5):Ke.randFloat(2.5,4))),this.lastElapsedTime=s,this.updateSpeedTarget(s),this.updateDirectionTarget(s);let r=1.2,o=.7;return this.mode==="gusty"?(r=1.8,o=1.6):this.mode==="stability"&&(r=1.05,o=.85),this.currentSpeed=Ke.damp(this.currentSpeed,this.targetSpeed,r,i),this.currentDirection=PE(this.currentDirection,this.targetDirection,o,i),this.updateAcceleration(),this.getState()}updateSpeedTarget(e){if(!(e<this.nextSpeedChangeAt)){if(this.mode==="gusty"){const i=Math.random()<.35?Ke.randFloat(1.25,1.7):Ke.randFloat(.72,1.2);this.targetSpeed=this.baseSpeed*i,this.nextSpeedChangeAt=e+Ke.randFloat(1.2,3);return}if(this.mode==="stability"){const i=Math.random()<.25?Ke.randFloat(1.15,1.4):Ke.randFloat(.65,1.08);this.targetSpeed=this.baseSpeed*i,this.nextSpeedChangeAt=e+Ke.randFloat(1.8,3.8);return}this.targetSpeed=this.baseSpeed*Ke.randFloat(.78,1.18),this.nextSpeedChangeAt=e+Ke.randFloat(1.8,3.8)}}updateDirectionTarget(e){if(e<this.nextDirectionChangeAt)return;if(this.mode==="gusty"){const i=Math.random()<.5?-1:1,s=Ke.randFloat(35,120),r=Ke.degToRad(s*i);this.targetDirection=Ya(this.currentDirection+r),this.baseDirection=this.targetDirection,this.nextDirectionChangeAt=e+Ke.randFloat(5,10);return}if(this.mode==="stability"){const i=Ke.randFloat(25,100),s=Math.random()<.5?-1:1,r=Ke.degToRad(i*s);this.targetDirection=Ya(this.currentDirection+r),this.baseDirection=this.targetDirection,this.nextDirectionChangeAt=e+Ke.randFloat(4.5,8);return}const t=Ke.degToRad(Ke.randFloat(-7,7));this.targetDirection=Ya(this.baseDirection+t),this.nextDirectionChangeAt=e+Ke.randFloat(3.5,6.5)}updateAcceleration(){this.acceleration.set(Math.sin(this.currentDirection)*this.currentSpeed,0,-Math.cos(this.currentDirection)*this.currentSpeed)}getState(){return{acceleration:this.acceleration.clone(),speed:this.acceleration.length(),direction:CE(this.acceleration)}}}function CE(n){if(!n||n.lengthSq()===0)return 0;const e=Math.atan2(n.x,-n.z);return(Ke.radToDeg(e)%360+360)%360}function PE(n,e,t,i){const s=Math.atan2(Math.sin(e-n),Math.cos(e-n));return n+s*(1-Math.exp(-t*i))}function Ya(n){return Math.atan2(Math.sin(n),Math.cos(n))}function DE(){const n=new Si,e=new Ws(.34,.4,64),t=new vn({color:16777215,transparent:!0,opacity:.42,side:Gt,depthWrite:!1,depthTest:!0}),i=new Pt(e,t);i.rotation.x=-Math.PI/2,i.position.y=.018,i.castShadow=!1,i.receiveShadow=!1,n.add(i);const s=new Dr(.035,32),r=new vn({color:16777215,transparent:!0,opacity:.55,side:Gt,depthWrite:!1}),o=new Pt(s,r);return o.rotation.x=-Math.PI/2,o.position.y=.019,o.castShadow=!1,o.receiveShadow=!1,n.add(o),n}function In(n,e){const t=new Pt(n,e);return t.castShadow=!0,t.receiveShadow=!0,t}function LE(){const n=new Si;n.name="trainer-drone";const e=new Vi({color:1514016,roughness:.5}),t=new Vi({color:14221118,roughness:.4}),i=new Vi({color:4804445,roughness:.6}),s=new Vi({color:329224,metalness:.2,roughness:.15}),r=new Vi({color:10133933,transparent:!0,opacity:.45,roughness:.5}),o=In(new li(.72,.22,.92),e);o.position.y=.06,n.add(o);const a=In(new li(.48,.17,.54),t);a.position.set(0,.22,-.1),n.add(a);const l=In(new li(.25,.18,.18),e);l.position.set(0,-.03,-.56),n.add(l);const c=In(new Ki(.07,.07,.055,24),s);c.rotation.x=Math.PI/2,c.position.set(0,-.03,-.665),n.add(c);const u=new li(1.55,.09,.11),d=In(u,t);d.rotation.y=Math.PI/4,d.position.y=.04,n.add(d);const f=In(u,i);f.rotation.y=-Math.PI/4,f.position.y=.04,n.add(f);const p=[[-.56,.11,-.56],[.56,.11,-.56],[-.56,.11,.56],[.56,.11,.56]],g=[];p.forEach(([D,R,I],S)=>{const x=In(new Ki(.11,.13,.16,20),S<2?t:i);x.position.set(D,R,I),n.add(x);const P=In(new Ki(.36,.36,.018,36),r);P.position.set(D,R+.13,I),P.userData.spinDirection=S%2===0?1:-1,n.add(P),g.push(P)});const b=new vn({color:15925109}),m=new vn({color:16726344}),h=In(new Fo(.045,12,12),b);h.position.set(-.28,.11,-.48),n.add(h);const A=h.clone();A.position.x=.28,n.add(A);const T=In(new Fo(.045,12,12),m);T.position.set(-.28,.11,.48),n.add(T);const y=T.clone();y.position.x=.28,n.add(y);const F=new d_(new z(0,0,-1),new z(0,.55,0),1.1,14221118,.22,.13);return F.name="heading-arrow",n.add(F),n.userData.rotors=g,n.userData.headingArrow=F,n}function IE(){const n=new Si,e=new Pt(new Dr(.72,64),new vn({color:10741301,transparent:!0,opacity:.12,side:Gt,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.position.y=.025;const t=new Pt(new Ws(.58,.72,64),new vn({color:14285213,transparent:!0,opacity:.9,side:Gt,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.position.y=.03,n.add(e,t),n.visible=!1,n}function UE(){const n=new J0;n.background=new et(592656),n.fog=new Tc(592656,24,58);const e=new r_(13232127,2106410,1.45);n.add(e);const t=new l_(16777215,2.2);return t.position.set(8,14,6),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.left=-18,t.shadow.camera.right=18,t.shadow.camera.top=18,t.shadow.camera.bottom=-18,n.add(t),n}function NE(n,e=12){const t=new Pt(new Lr(80,80),new Vi({color:1119515,roughness:.92}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t);const i=new u_(80,80,3949647,2304563);i.position.y=.006,n.add(i);const s=e/2,r=[[-s,.03,-s],[s,.03,-s],[s,.03,s],[-s,.03,s]],o=r.map(([p,g,b])=>new z(p,g,b));o.push(o[0].clone());const a=new Jt().setFromPoints(o),l=new Zo({color:14221118}),c=new Rc(a,l);n.add(c);const u=new Pt(new Ws(.38,.47,48),new vn({color:14221118,side:Gt}));u.rotation.x=-Math.PI/2,u.position.y=.012,n.add(u);const d=new Ki(.035,.035,1.8,12),f=new Vi({color:14221118});for(const[p,,g]of r){const b=new Pt(d,f);b.position.set(p,.9,g),b.castShadow=!0,n.add(b)}return{ground:t,grid:i,boundary:c,centerRing:u}}function FE(n=2.5){const e=new Si,t=new Dr(n,96),i=new vn({color:16777215,transparent:!0,opacity:.035,side:Gt,depthWrite:!1}),s=new Pt(t,i);s.rotation.x=-Math.PI/2,s.position.y=.012,e.add(s);const r=new Ws(n-.035,n+.035,96),o=new vn({color:16777215,transparent:!0,opacity:.55,side:Gt,depthWrite:!1}),a=new Pt(r,o);return a.rotation.x=-Math.PI/2,a.position.y=.015,e.add(a),e.userData.radius=n,e.userData.ringMaterial=o,e.userData.fillMaterial=i,e}const OE={class:"relative min-h-145 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl shadow-black/40"},BE={key:4,class:"pointer-events-none absolute right-4 top-4 z-30 flex flex-col items-end gap-3"},kE={key:5,class:"pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs text-white/60 backdrop-blur"},yd=60,Ka=3,ja=12,zE={__name:"GameCanvas",props:{settings:Object,game:Object,controllerCalibrating:{type:Boolean,default:!1}},emits:["input-ready","control-source-ready","register-actions"],setup(n,{emit:e}){const t=n,i=e,s=$e(null),r=pE[0],o=$e(null),a=$e(0),l=$e(null),c=$e(!1),u=$e(0),d=$e(0),f=$e(0),p=$e("ready"),g=$e(0),b=$e(0),m=$e("normal"),h=$e("normal"),A=$e(yd),T=$e("random"),y=je(()=>Math.max(1,Math.ceil(Ka-b.value))),F=je(()=>Math.max(0,A.value-g.value)),D=je(()=>t.settings.trainingMode==="randomHeading"),R=je(()=>t.settings.trainingMode.startsWith("stickTraining")),I=je(()=>t.settings.trainingMode.startsWith("stabilityTraining")),S=je(()=>t.settings.trainingMode==="stabilityTraining2"?2:1),x=je(()=>t.settings.trainingMode==="stickTraining2"?2:1);let P,q,V,$,ne,X,ee,H,pe,Se,De,ze=0;const it=new RE,ie=new TE(ja),me=new AE(ja/2),Ae=new mE,{input:be,clearInput:Fe}=gE({onPause:$s,onReset:qn,onHelp:()=>{t.settings.showHelp=!t.settings.showHelp}}),{input:tt,connected:ke}=_E();function vt(){return ke.value?tt:be}const C=je(()=>ke.value?"gamepad":"keyboard"),N=je(()=>E(F.value)),M=je(()=>{const L=d.value+f.value,U=L>0?d.value/L*100:0;return{heading:l.value,total:L,inside:d.value,outside:f.value,stability:U}}),se=je(()=>{if(t.settings.trainingMode!=="stabilityTraining2")return 2.5;const L=p.value==="setup"?t.settings.stabilityZoneSize:h.value;return Bo.find(U=>U.value===L)?.radius??2.5}),Z=je(()=>{if(t.settings.trainingMode!=="stabilityTraining2")return 1;const L=p.value==="setup"?t.settings.stabilityWindLevel:m.value;return Oo.find(U=>U.value===L)?.multiplier??1}),te=je(()=>t.settings.trainingMode!=="stabilityTraining2"?"":Oo.find(L=>L.value===m.value)?.label??"-"),J=je(()=>{if(t.settings.trainingMode!=="stabilityTraining2")return"";const L=Bo.find(U=>U.value===h.value);return L?`${L.label} · R ${L.radius.toFixed(1)} m`:"-"}),re=je(()=>na(A.value)),j=je(()=>k(M.value.total)),Y=je(()=>k(M.value.inside)),we=je(()=>k(M.value.outside)),w=je(()=>`${M.value.stability.toFixed(1)}%`),_=je(()=>Me()),O=Cn({throttle:.5,yaw:0,pitch:0,roll:0}),{currentExercise:W,completed:Q,round:G,waitingForStartCenter:ve,waitingForCenter:de,waitingForNextRound:Te,errorType:Ce,errorMessage:le,successMin:Re,successMax:Ie,successHoldProgress:Ue,start:xe,stop:Ve,update:B}=bE(x);function Me(){const L=l.value;if(!L)return"-";const U=(Ke.radToDeg(L.radians)+360)%360;return U===0?"NORTH ↑":U===90?"EAST →":U===180?"SOUTH ↓":U===270?"WEST ←":`${Math.round(U)}°`}function ue(L,U){return L.find(oe=>oe.value===U)??L[0]}function Pe(){return jl[Math.floor(Math.random()*jl.length)]}function fe(){const L=fh.find(U=>U.value===T.value);return!L||L.value==="random"?Pe():{degrees:L.degrees,radians:Ke.degToRad(L.degrees)}}function ae(L){return L==="away"?0:L==="toward"?Math.PI:L==="left"?-Math.PI/2:L==="right"?Math.PI/2:L==="random"?Math.random()*Math.PI*2-Math.PI:H?.state.yaw??0}function Ne(){q=UE(),V=new gn(48,1,.1,100),P=new Yy({antialias:!0}),P.domElement.style.width="100%",P.domElement.style.height="100%",P.domElement.style.display="block",P.setPixelRatio(Math.min(window.devicePixelRatio,2)),P.shadowMap.enabled=!0,P.shadowMap.type=Uf,P.outputColorSpace=cn,s.value.appendChild(P.domElement),NE(q,ja),$=LE(),q.add($),ne=DE(),q.add(ne),X=FE(se.value),X.position.set(0,0,0),q.add(X),ee=IE(),q.add(ee),H=new wE($),pe=new yE(V),Bt(!0),qn(),dn(),Se=new ResizeObserver(dn),Se.observe(s.value)}function Ge(){if(!I.value||!$){c.value=!1,u.value=0;return}const L=Math.hypot($.position.x,$.position.z);u.value=L,c.value=L>se.value}function _t(L){!I.value||p.value!=="ready"||(b.value+=L,b.value>=Ka&&(b.value=Ka,p.value="running"))}function lt(L){if(!I.value||p.value!=="running")return;const U=A.value-g.value,oe=Math.min(L,Math.max(0,U));if(oe>0&&(c.value?f.value+=oe:d.value+=oe,g.value+=oe),g.value>=A.value-1e-4){g.value=A.value;const Le=d.value+f.value,Ee=A.value-Le;Math.abs(Ee)>0&&(c.value?f.value+=Ee:d.value+=Ee),p.value="finished",H?.stopMotion()}}function Bt(L=!1){pe&&pe.setPreset(ue(dh,t.settings.cameraHeight),ue(Kl,t.settings.cameraBearing),$?.position??new z(0,1.5,0),L)}function dn(){if(!P||!V||!s.value)return;const{clientWidth:L,clientHeight:U}=s.value;!L||!U||(P.setSize(L,U),V.aspect=L/U,V.updateProjectionMatrix())}function qn(){if(!H)return;Fe(),t.game.paused.value=!1;let L=ae(t.settings.trainingMode);I.value&&(l.value=Pe(),L=l.value.radians,es()),Un.challenge&&D.value&&(o.value=Ae.start(r,new z(0,1.5,0)),L=Ae.getHeadingRadians()),H.reset(L),a.value=(Ke.radToDeg(L)+360)%360;const U=I.value?"stability":t.settings.windMode;it.reset(U),ie.reset(),Un.score&&me.reset(),(!Un.challenge||!D.value)&&(Ae.reset(),o.value=null),Qi(),Object.assign(t.game.telemetry,{altitude:1.5,speed:0,yaw:0,distance:0,score:0,time:0,boundaryCount:0,outside:!1,windSpeed:0,windDirection:0}),Yn(),sn(),Bt(!0)}function $s(){t.game.paused.value=!t.game.paused.value,Fe()}function sn(){if(!X)return;X.visible=I.value;const L=se.value/2.5;X.scale.set(L,L,L)}function Yn(){!$||!ne||ne.position.set($.position.x,0,$.position.z)}function Qi(){if(!ee)return;if(!Un.challenge||!D.value||!o.value?.active){ee.visible=!1;return}const L=Ae.getTargetPosition();ee.position.set(L.x,0,L.z),ee.visible=!0}function Ir(){H.reset(0),o.value=Ae.nextRound($.position);const L=Ae.getHeadingRadians();H.reset(L),a.value=(Ke.radToDeg(L)+360)%360,Qi(),Yn()}function es(){d.value=0,f.value=0,g.value=0,b.value=0,p.value="setup"}function Ur(){if(!(!I.value||p.value!=="setup")){if(A.value=qs(t.settings.stabilityDuration),t.settings.trainingMode==="stabilityTraining2"&&(T.value=t.settings.stabilityHeading,m.value=t.settings.stabilityWindLevel,h.value=t.settings.stabilityZoneSize,l.value=fe()),d.value=0,f.value=0,g.value=0,b.value=0,p.value="ready",H?.stopMotion(),H){const L=l.value?.radians??0;H.reset(L)}it.reset("stability"),Yn(),Ge()}}function ts(){if(!I.value||p.value!=="finished")return;Fe(),t.game.paused.value=!1,t.settings.trainingMode==="stabilityTraining2"?l.value=fe():l.value=Pe();const L=l.value.radians;d.value=0,f.value=0,g.value=0,b.value=0,p.value="ready",H?.reset(L),a.value=(Ke.radToDeg(L)+360)%360,it.reset("stability"),ie.reset(),Object.assign(t.game.telemetry,{altitude:1.5,speed:0,yaw:0,distance:0,score:0,time:0,boundaryCount:0,outside:!1,windSpeed:0,windDirection:0}),Yn(),sn(),Ge(),Bt(!0)}function Nr(){t.settings.trainingMode==="stabilityTraining2"&&qn()}function Fr(L){t.settings.trainingMode!=="stabilityTraining2"||p.value!=="setup"||(t.settings.stabilityHeading=L)}function Qo(L){t.settings.trainingMode!=="stabilityTraining2"||p.value!=="setup"||(t.settings.stabilityWindLevel=L)}function ea(L){t.settings.trainingMode!=="stabilityTraining2"||p.value!=="setup"||(t.settings.stabilityZoneSize=L,sn(),Ge())}function ta(L){!I.value||p.value!=="setup"||(t.settings.stabilityDuration=qs(L))}function Or(L){De=requestAnimationFrame(Or);const U=Math.min((L-ze)/1e3||0,.033);if(ze=L,!t.game.paused.value&&!t.controllerCalibrating){const oe=t.game.telemetry;oe.time+=U;const _e=I.value&&p.value!=="running",Le=I.value?g.value:oe.time,Ee=_e?{acceleration:new z,speed:0,direction:0}:it.update(U,Le),We=I.value?Z.value:1,Xe={acceleration:Ee.acceleration.clone().multiplyScalar(We),speed:Ee.speed*We,direction:Ee.direction},Oe=vt();Object.assign(O,Oe),R.value&&B(Oe);let Ye=Oe;R.value?Ye={throttle:.5,yaw:0,pitch:0,roll:0}:I.value?p.value==="running"?Ye={throttle:.5,yaw:0,pitch:Oe.pitch,roll:Oe.roll}:Ye={throttle:.5,yaw:0,pitch:0,roll:0}:Un.challenge&&D.value&&(Ye={throttle:Oe.throttle,yaw:0,pitch:Oe.pitch,roll:Oe.roll});const dt=Un.challenge&&D.value||I.value?"free":t.settings.trainingMode,yt=H.update(U,Ye,Xe.acceleration,dt);a.value=(Number(yt.yaw??0)+360)%360;const pt=ie.update($.position);Ge(),_t(U),lt(U);const ct=X?.userData?.ringMaterial;ct&&(ct.color.set(c.value?16735324:16777215),ct.opacity=c.value?.95:.55),Un.challenge&&D.value&&(o.value=Ae.update(U,$.position),Ae.shouldAdvance()&&Ir()),Object.assign(oe,yt,{outside:pt.outside,boundaryCount:pt.count,windSpeed:Xe.speed,windDirection:Xe.direction}),oe.score=Un.score?me.update(U,oe.distance,oe.outside):0,pe.update(U,$.position)}Yn(),sn(),Qi(),P.render(q,V)}function qs(L){const U=Number(L);return Number.isFinite(U)?Math.min(600,Math.max(10,Math.round(U))):yd}function na(L){const U=qs(L);if(U<60)return`${U} 秒`;if(U%60===0)return`${U/60} 分鐘`;const oe=Math.floor(U/60),_e=U%60;return`${oe} 分 ${_e} 秒`}function E(L){const U=Math.ceil(Math.max(0,L)),oe=Math.floor(U/60),_e=U%60;return`${String(oe).padStart(2,"0")}:${String(_e).padStart(2,"0")}`}function k(L){const U=Math.max(0,L),oe=Math.floor(U/60),_e=U%60;return`${String(oe).padStart(2,"0")}:`+_e.toFixed(1).padStart(4,"0")}function K(){cancelAnimationFrame(De),Se?.disconnect(),q?.traverse(L=>{L.geometry?.dispose(),(L.material?Array.isArray(L.material)?L.material:[L.material]:[]).forEach(oe=>{oe.dispose()})}),P?.dispose(),P?.domElement?.remove()}return mn(()=>[t.settings.cameraHeight,t.settings.cameraBearing],()=>Bt(!1)),mn(()=>t.settings.windMode,qn),mn(()=>t.settings.trainingMode,qn),mn(()=>t.settings.showHeadingArrow,L=>{$?.userData.headingArrow&&($.userData.headingArrow.visible=L)}),mn(C,L=>{i("control-source-ready",L)},{immediate:!0}),mn(()=>t.settings.trainingMode,()=>{if(R.value){xe();return}Ve()},{immediate:!0}),mn(()=>t.settings.stabilityZoneSize,()=>{t.settings.trainingMode==="stabilityTraining2"&&(sn(),Ge())}),ks(async()=>{await cc(),Ne(),i("input-ready",O),i("register-actions",{reset:qn,togglePause:$s}),De=requestAnimationFrame(Or)}),zs(K),(L,U)=>(he(),ge("div",OE,[v("div",{ref_key:"canvasHost",ref:s,class:"absolute inset-0"},null,512),!R.value&&!I.value?(he(),zn(fM,{key:0,telemetry:n.game.telemetry,"status-text":n.game.statusText.value,"wind-mode":n.settings.windMode,"camera-bearing":ue(Be(Kl),n.settings.cameraBearing).degrees},null,8,["telemetry","status-text","wind-mode","camera-bearing"])):ut("",!0),Be(Un).challenge&&D.value?(he(),zn(IM,{key:1,challenge:o.value},null,8,["challenge"])):ut("",!0),R.value?(he(),zn(XM,{key:2,exercise:Be(W),completed:Be(Q),"waiting-for-start-center":Be(ve),"waiting-for-center":Be(de),"waiting-for-next-round":Be(Te),round:Be(G),"error-type":Be(Ce),"error-message":Be(le),"success-min":Be(Re),"success-max":Be(Ie),"success-hold-progress":Be(Ue)},null,8,["exercise","completed","waiting-for-start-center","waiting-for-center","waiting-for-next-round","round","error-type","error-message","success-min","success-max","success-hold-progress"])):ut("",!0),I.value?(he(),zn(dE,{key:3,"time-label":N.value,phase:p.value,"heading-label":_.value,"total-label":j.value,"inside-label":Y.value,"outside-label":we.value,"stability-label":w.value,"ready-count":y.value,level:S.value,settings:n.settings,"show-difficulty":L.isStabilityTrainingLevel2,"wind-label":te.value,"zone-label":J.value,"duration-label":re.value,onUpdateHeading:Fr,onUpdateWindLevel:Qo,onUpdateZoneSize:ea,onUpdateDuration:ta,onStart:Ur,onRetry:ts,onChangeSettings:Nr},null,8,["time-label","phase","heading-label","total-label","inside-label","outside-label","stability-label","ready-count","level","settings","show-difficulty","wind-label","zone-label","duration-label"])):ut("",!0),R.value?ut("",!0):(he(),ge("div",BE,[Ot(xM,{heading:a.value},null,8,["heading"])])),!R.value&&!I.value?(he(),ge("div",kE," 鏡頭只跟位置，不跟機頭旋轉 ")):ut("",!0)]))}},HE={class:"space-y-2"},VE={class:"flex items-center justify-between text-xs text-white/60"},GE={class:"relative aspect-square w-24 rounded-full border border-white/15 bg-black/30"},Md={__name:"StickIndicator",props:{title:{type:String,required:!0},horizontalLabel:{type:String,required:!0},verticalLabel:{type:String,required:!0},x:{type:Number,default:0},y:{type:Number,default:0}},setup(n){return(e,t)=>(he(),ge("div",HE,[v("div",VE,[v("span",null,ce(n.title),1),v("span",null,ce(n.horizontalLabel)+" / "+ce(n.verticalLabel),1)]),v("div",GE,[t[0]||(t[0]=v("div",{class:"absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-white/10"},null,-1)),t[1]||(t[1]=v("div",{class:"absolute top-1/2 left-2 right-2 h-px -translate-y-1/2 bg-white/10"},null,-1)),v("div",{class:"absolute left-1/2 top-1/2 size-5 rounded-full border border-lime-200/80 bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.55)] transition-transform duration-75",style:Ht({transform:`translate(calc(-50% + ${n.x*31}px), calc(-50% + ${-n.y*31}px))`})},null,4)])]))}},WE={class:"rounded-2xl border border-white/10 bg-white/[0.035] p-4"},XE={class:"mb-4 flex items-center justify-between gap-3"},$E={class:"flex items-center gap-3"},qE={class:"flex items-center gap-2"},YE={class:"flex items-center gap-2 text-xs text-white/55"},KE={class:"grid grid-cols-2 gap-3"},jE={class:"mt-4 grid grid-cols-2 gap-2 text-xs text-white/55"},ZE={class:"rounded-xl bg-black/20 p-3"},JE={key:0},QE={class:"rounded-xl bg-black/20 p-3"},e1={key:0},t1={__name:"ControlsPanel",props:{input:Object,settings:Object,controlSource:{type:String,default:"keyboard"}},setup(n){return(e,t)=>(he(),ge("section",WE,[v("div",XE,[t[3]||(t[3]=v("div",null,[v("p",{class:"text-xs uppercase tracking-[0.2em] text-white/40"}," Mode 2 "),v("h2",{class:"mt-1 font-semibold"}," 控制輸入 ")],-1)),v("div",$E,[v("div",qE,[t[1]||(t[1]=v("span",{class:"text-[10px] uppercase tracking-[0.14em] text-white/30"}," Input ",-1)),v("span",{class:Tt(["rounded-full border px-2.5 py-1 text-[10px] font-semibold",n.controlSource==="gamepad"?"border-lime-300/20 bg-lime-300/10 text-lime-200":"border-white/10 bg-white/5 text-white/45"])},ce(n.controlSource==="gamepad"?"🎮 LiteRadio":"⌨️ Keyboard"),3)]),v("label",YE,[Qd(v("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>n.settings.showHeadingArrow=i),type:"checkbox",class:"accent-lime-300"},null,512),[[Am,n.settings.showHeadingArrow]]),t[2]||(t[2]=Dt(" 機頭箭頭 ",-1))])])]),v("div",KE,[Ot(Md,{title:"左桿",x:-n.input.yaw,y:n.input.throttle*2-1,"x-label":"Yaw","y-label":"Throttle"},null,8,["x","y"]),Ot(Md,{title:"右桿",x:n.input.roll,y:n.input.pitch,"x-label":"Roll","y-label":"Pitch"},null,8,["x","y"])]),v("div",jE,[n.controlSource==="gamepad"?(he(),ge(rt,{key:0},[t[7]||(t[7]=v("div",{class:"rounded-xl bg-black/20 p-3"},[v("strong",{class:"text-white"}," 左桿 ↑ / ↓ "),v("br"),Dt(" Throttle ")],-1)),v("div",ZE,[t[4]||(t[4]=v("strong",{class:"text-white"}," 左桿 ← / → ",-1)),t[5]||(t[5]=v("br",null,null,-1)),t[6]||(t[6]=Dt(" Yaw ",-1)),n.settings.trainingMode==="randomHeading"?(he(),ge("span",JE," （本模式鎖定） ")):ut("",!0)]),t[8]||(t[8]=v("div",{class:"rounded-xl bg-black/20 p-3"},[v("strong",{class:"text-white"}," 右桿 ↑ / ↓ "),v("br"),Dt(" Pitch ")],-1)),t[9]||(t[9]=v("div",{class:"rounded-xl bg-black/20 p-3"},[v("strong",{class:"text-white"}," 右桿 ← / → "),v("br"),Dt(" Roll ")],-1))],64)):(he(),ge(rt,{key:1},[t[13]||(t[13]=v("div",{class:"rounded-xl bg-black/20 p-3"},[v("strong",{class:"text-white"}," W / S "),v("br"),Dt(" Throttle ")],-1)),v("div",QE,[t[10]||(t[10]=v("strong",{class:"text-white"}," A / D ",-1)),t[11]||(t[11]=v("br",null,null,-1)),t[12]||(t[12]=Dt(" Yaw ",-1)),n.settings.trainingMode==="randomHeading"?(he(),ge("span",e1," （本模式鎖定） ")):ut("",!0)]),t[14]||(t[14]=v("div",{class:"rounded-xl bg-black/20 p-3"},[v("strong",{class:"text-white"}," ↑ / ↓ "),v("br"),Dt(" Pitch ")],-1)),t[15]||(t[15]=v("div",{class:"rounded-xl bg-black/20 p-3"},[v("strong",{class:"text-white"}," ← / → "),v("br"),Dt(" Roll ")],-1))],64))])]))}};function n1(n=0){return{current:n,min:n,max:n,baseline:n}}function i1(){const n=typeof navigator<"u"&&"getGamepads"in navigator,e=$e(!1),t=$e(null),i=$e(""),s=$e(""),r=$e(0),o=Cn([]),a=Cn([]);let l=0;const c=je(()=>o.length),u=je(()=>a.length);function d(T){for(;o.length<T.axes.length;){const y=T.axes[o.length]??0;o.push(n1(y))}o.length>T.axes.length&&o.splice(T.axes.length)}function f(T){e.value=!0,t.value=T.index,i.value=T.id||"Unknown gamepad",s.value=T.mapping||"none",r.value=T.timestamp||0,d(T),T.axes.forEach((y,F)=>{const D=o[F];D.current=y,D.min=Math.min(D.min,y),D.max=Math.max(D.max,y)}),a.splice(0,a.length,...T.buttons.map((y,F)=>({index:F,value:y.value,pressed:y.pressed,touched:y.touched})))}function p(){if(!n)return null;const T=navigator.getGamepads?.()??[];return t.value!=null&&T[t.value]?T[t.value]:Array.from(T).find(Boolean)??null}function g(){const T=p();T?f(T):(e.value=!1,t.value=null),l=requestAnimationFrame(g)}function b(T){t.value=T.gamepad.index,f(T.gamepad)}function m(T){t.value===T.gamepad.index&&(e.value=!1,t.value=null)}function h(){o.forEach(T=>{T.min=T.current,T.max=T.current})}function A(){o.forEach(T=>{T.baseline=T.current})}return ks(()=>{n&&(window.addEventListener("gamepadconnected",b),window.addEventListener("gamepaddisconnected",m),g())}),zs(()=>{window.removeEventListener("gamepadconnected",b),window.removeEventListener("gamepaddisconnected",m),cancelAnimationFrame(l)}),{supported:n,connected:e,gamepadIndex:t,gamepadId:i,mapping:s,timestamp:r,axes:o,buttons:a,axisCount:c,buttonCount:u,resetRange:h,captureBaseline:A}}const s1={class:"flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-sky-300/20 bg-[#11151c] shadow-2xl shadow-black/60"},r1={class:"flex shrink-0 items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6"},o1={class:"flex flex-wrap items-center gap-2"},a1={class:"min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6"},l1={key:0,class:"rounded-xl border border-rose-300/20 bg-rose-300/10 p-3 text-sm leading-6 text-rose-100"},c1={class:"rounded-2xl border border-white/10 bg-black/25 p-4"},u1={class:"flex items-center justify-between gap-3"},d1={class:"mt-3 break-all text-sm font-medium leading-6 text-white/85"},f1={class:"mt-3 grid grid-cols-2 gap-2 text-xs text-white/45 sm:grid-cols-4"},h1={class:"font-mono text-white/75"},p1={class:"font-mono text-white/75"},m1={class:"font-mono text-white/75"},g1={class:"font-mono text-white/75"},_1={key:1,class:"mt-3 text-sm leading-6 text-white/55"},x1={key:0,class:"mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"},v1={class:"flex items-center gap-2"},b1={class:"rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-[10px] text-white/50"},y1={class:"mt-4 flex flex-wrap gap-2"},M1={class:"mt-4 grid gap-3 lg:grid-cols-2"},S1={class:"flex items-start justify-between gap-4"},E1={class:"flex flex-wrap items-center gap-2"},w1={class:"text-sm font-semibold text-white/80"},T1={class:"rounded-md border border-sky-300/15 bg-sky-300/[0.07] px-2 py-0.5 text-[11px] font-semibold text-sky-100"},A1={class:"mt-1 text-[11px] text-white/40"},R1={key:0,class:"text-right"},C1={class:"mt-0.5 font-mono text-sm font-semibold tabular-nums text-white/65"},P1={class:"mt-0.5 font-mono text-lg font-semibold tabular-nums text-lime-100"},D1={key:1,class:"font-mono text-base font-semibold tabular-nums text-sky-100"},L1={class:"relative mt-4 h-2 overflow-hidden rounded-full bg-white/10"},I1={class:"mt-3 grid grid-cols-3 gap-2 text-[11px] text-white/40"},U1={class:"mt-0.5 font-mono tabular-nums text-white/70"},N1={class:"text-center"},F1={class:"mt-0.5 font-mono tabular-nums text-white/70"},O1={class:"text-right"},B1={class:"mt-0.5 font-mono tabular-nums text-white/70"},k1={key:0,class:"mt-4 border-t border-white/[0.07] pt-3"},z1={class:"mt-2 grid grid-cols-3 gap-2 text-[10px]"},H1={class:"mt-0.5 font-mono text-white/55"},V1={class:"text-center"},G1={class:"text-white/30"},W1={class:"mt-0.5 font-mono text-white/55"},X1={class:"text-right"},$1={class:"mt-0.5 font-mono text-white/55"},q1={class:"mt-5"},Y1={class:"mt-2 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8"},K1={class:"mt-1 text-[10px]"},j1={__name:"ControllerDebugPanel",emits:["close"],setup(n,{emit:e}){const t=e,{supported:i,connected:s,gamepadIndex:r,gamepadId:o,mapping:a,axes:l,buttons:c,axisCount:u,buttonCount:d,resetRange:f,captureBaseline:p}=i1(),{calibration:g,normalizeAxis:b}=gc(),m={0:{name:"Roll",description:"左移 / 右移",calibrationKey:"roll"},1:{name:"Pitch",description:"後移 / 前移",calibrationKey:"pitch"},2:{name:"Throttle",description:"下降 / 升高",calibrationKey:"throttle"},3:{name:"Yaw",description:"左轉 / 右轉",calibrationKey:"yaw"},4:{name:"SA",description:"兩段開關",calibrationKey:null},5:{name:"SB",description:"三段開關",calibrationKey:null},6:{name:"SC",description:"三段開關",calibrationKey:null},7:{name:"SD",description:"兩段開關",calibrationKey:null}};function h(D){return m[D]??{name:"Unknown",description:"尚未設定",calibrationKey:null}}function A(D){return Number(D??0).toFixed(4)}function T(D){return Math.min(100,Math.max(0,(Number(D??0)+1)/2*100))}function y(D,R){const I=h(D);if(!I.calibrationKey)return null;let S=b(I.calibrationKey,R);return I.calibrationKey==="yaw"&&(S=-S),S}function F(D){const R=h(D);return R.calibrationKey?g.axes[R.calibrationKey]??null:null}return(D,R)=>(he(),ge("div",{class:"fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm",onClick:R[3]||(R[3]=mc(I=>t("close"),["self"]))},[v("section",s1,[v("header",r1,[v("div",null,[v("div",o1,[v("span",{class:Tt(["h-2.5 w-2.5 rounded-full",Be(s)?"bg-lime-300 shadow-[0_0_12px_rgba(190,242,100,.75)]":"bg-white/25"])},null,2),R[4]||(R[4]=v("p",{class:"text-sm font-semibold text-sky-100"}," Controller Debug ",-1)),R[5]||(R[5]=v("span",{class:"rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45"}," v0.5 ",-1))]),R[6]||(R[6]=v("p",{class:"mt-1 text-xs leading-5 text-white/45"}," 比較控制器原始輸入與校正後實際送進遊戲的數值。 ",-1))]),v("button",{type:"button",class:"shrink-0 rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-xs text-white/55 transition hover:bg-white/10 hover:text-white",onClick:R[0]||(R[0]=I=>t("close"))}," 關閉 ")]),v("div",a1,[Be(i)?(he(),ge(rt,{key:1},[v("div",c1,[v("div",u1,[R[7]||(R[7]=v("p",{class:"text-xs font-semibold uppercase tracking-[0.18em] text-white/40"}," Connection ",-1)),v("span",{class:Tt(["rounded-full px-2.5 py-1 text-[11px] font-semibold",Be(s)?"bg-lime-300/15 text-lime-200":"bg-white/5 text-white/40"])},ce(Be(s)?"CONNECTED":"WAITING"),3)]),Be(s)?(he(),ge(rt,{key:0},[v("p",d1,ce(Be(o)),1),v("div",f1,[v("p",null,[R[8]||(R[8]=Dt(" Index ",-1)),v("span",h1,ce(Be(r)),1)]),v("p",null,[R[9]||(R[9]=Dt(" Mapping ",-1)),v("span",p1,ce(Be(a)||"none"),1)]),v("p",null,[R[10]||(R[10]=Dt(" Axes ",-1)),v("span",m1,ce(Be(u)),1)]),v("p",null,[R[11]||(R[11]=Dt(" Buttons ",-1)),v("span",g1,ce(Be(d)),1)])])],64)):(he(),ge("p",_1," 插上 LiteRadio 2 SIM 後，動一下搖桿或按任一按鈕。 部分瀏覽器要收到第一次操作後才會顯示控制器。 "))]),Be(s)?(he(),ge("div",x1,[R[12]||(R[12]=v("div",{class:"flex-1"},[v("p",{class:"text-xs font-semibold uppercase tracking-[0.18em] text-white/40"}," Calibration "),v("p",{class:"mt-1 text-xs text-white/45"}," 遊戲控制會使用目前儲存的校正設定。 ")],-1)),v("div",v1,[v("span",{class:Tt(["rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]",Be(g).calibrated?"bg-lime-300/15 text-lime-200":"bg-amber-300/10 text-amber-100"])},ce(Be(g).calibrated?"CALIBRATED":"DEFAULT"),3),v("span",b1," Deadzone "+ce(Math.round(Be(g).deadzone*100))+"% ",1)])])):ut("",!0),Be(s)?(he(),ge(rt,{key:1},[v("div",y1,[v("button",{type:"button",class:"rounded-xl bg-sky-200 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-sky-100",onClick:R[1]||(R[1]=(...I)=>Be(f)&&Be(f)(...I))}," 重置 Min / Max "),v("button",{type:"button",class:"rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/70 transition hover:bg-white/10",onClick:R[2]||(R[2]=(...I)=>Be(p)&&Be(p)(...I))}," 記錄目前值為 Baseline ")]),v("div",M1,[(he(!0),ge(rt,null,En(Be(l),(I,S)=>(he(),ge("article",{key:S,class:"rounded-2xl border border-white/10 bg-black/20 p-4"},[v("div",S1,[v("div",null,[v("div",E1,[v("p",w1," AXIS "+ce(S),1),v("span",T1,ce(h(S).name),1)]),v("p",A1,ce(h(S).description),1)]),h(S).calibrationKey?(he(),ge("div",R1,[R[13]||(R[13]=v("p",{class:"text-[9px] font-semibold uppercase tracking-[0.14em] text-white/30"}," RAW ",-1)),v("p",C1,ce(A(I.current)),1),R[14]||(R[14]=v("p",{class:"mt-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-lime-200/50"}," CALIBRATED ",-1)),v("p",P1,ce(A(y(S,I.current))),1)])):(he(),ge("p",D1,ce(A(I.current)),1))]),v("div",L1,[R[15]||(R[15]=v("div",{class:"absolute inset-y-0 left-1/2 w-px bg-white/35"},null,-1)),v("div",{class:"absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200 shadow-[0_0_10px_rgba(186,230,253,.65)]",style:Ht({left:`${T(I.current)}%`})},null,4)]),v("div",I1,[v("div",null,[R[16]||(R[16]=v("p",null,"RAW MIN",-1)),v("p",U1,ce(A(I.min)),1)]),v("div",N1,[R[17]||(R[17]=v("p",null,"BASELINE",-1)),v("p",F1,ce(A(I.baseline)),1)]),v("div",O1,[R[18]||(R[18]=v("p",null,"RAW MAX",-1)),v("p",B1,ce(A(I.max)),1)])]),F(S)&&h(S).calibrationKey?(he(),ge("div",k1,[R[21]||(R[21]=v("p",{class:"text-[9px] font-semibold uppercase tracking-[0.14em] text-white/30"}," CALIBRATION PROFILE ",-1)),v("div",z1,[v("div",null,[R[19]||(R[19]=v("p",{class:"text-white/30"}," RAW MIN ",-1)),v("p",H1,ce(A(F(S).min)),1)]),v("div",V1,[v("p",G1,ce((h(S).calibrationKey==="throttle","CENTER")),1),v("p",W1,ce(h(S).calibrationKey==="throttle"?"—":A(F(S).center)),1)]),v("div",X1,[R[20]||(R[20]=v("p",{class:"text-white/30"}," RAW CENTER ",-1)),v("p",$1,ce(A(F(S).max)),1)])])])):ut("",!0)]))),128))]),v("div",q1,[R[22]||(R[22]=v("p",{class:"text-xs font-semibold uppercase tracking-[0.18em] text-white/40"}," Buttons ",-1)),v("div",Y1,[(he(!0),ge(rt,null,En(Be(c),I=>(he(),ge("div",{key:I.index,class:Tt(["rounded-lg border px-2 py-2 text-center font-mono text-xs",I.pressed?"border-lime-300/40 bg-lime-300/15 text-lime-100":"border-white/10 bg-black/20 text-white/45"])},[v("p",null,"B"+ce(I.index),1),v("p",K1,ce(A(I.value)),1)],2))),128))])]),R[23]||(R[23]=v("div",{class:"mt-5 rounded-2xl border border-sky-300/15 bg-sky-300/4.5 p-4 text-xs leading-5 text-sky-50/65"}," RAW 是瀏覽器直接取得的 Gamepad 原始值； CALIBRATED 是經過中立點、操作範圍與 Deadzone 修正後， 實際提供給遊戲控制的數值。 ",-1))],64)):ut("",!0)],64)):(he(),ge("div",l1," 這個瀏覽器沒有提供 Gamepad API。 請改用最新版 Chrome 或其他支援 Gamepad API 的瀏覽器。 "))])])]))}},Z1=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},J1={class:"w-full max-w-2xl rounded-3xl border border-white/10 bg-[#15181f] p-6 shadow-2xl"},Q1={class:"flex items-start justify-between gap-4"},ew={class:"text-xs uppercase tracking-[0.24em] text-lime-300/70"},tw={key:0,class:"mt-6 grid gap-3 sm:grid-cols-2"},nw={key:1,class:"mt-6 grid gap-3 sm:grid-cols-2"},iw={__name:"HelpPanel",props:{controlSource:{type:String,default:"keyboard"}},emits:["close"],setup(n,{emit:e}){const t=e;return(i,s)=>(he(),ge("div",{class:"absolute inset-0 z-30 grid place-items-center bg-black/60 p-4 backdrop-blur-sm",onClick:s[1]||(s[1]=mc(r=>t("close"),["self"]))},[v("section",J1,[v("div",Q1,[v("div",null,[v("p",ew,ce(n.controlSource==="gamepad"?"Controller controls":"Keyboard controls"),1),s[2]||(s[2]=v("h2",{class:"mt-2 text-2xl font-semibold"}," 操作說明 ",-1))]),v("button",{class:"rounded-xl border border-white/10 px-3 py-2 text-sm hover:bg-white/5",onClick:s[0]||(s[0]=r=>t("close"))}," 關閉 ")]),n.controlSource==="gamepad"?(he(),ge("div",tw,[...s[3]||(s[3]=[_r('<div class="rounded-2xl bg-black/25 p-4" data-v-69866eec><h3 class="font-semibold" data-v-69866eec> 左搖桿 </h3><p class="mt-3 leading-7 text-white/65" data-v-69866eec><kbd data-v-69866eec>↑</kbd> 增加 Throttle 　 <kbd data-v-69866eec>↓</kbd> 降低 Throttle <br data-v-69866eec><kbd data-v-69866eec>←</kbd> 左轉 Yaw 　 <kbd data-v-69866eec>→</kbd> 右轉 Yaw </p></div><div class="rounded-2xl bg-black/25 p-4" data-v-69866eec><h3 class="font-semibold" data-v-69866eec> 右搖桿 </h3><p class="mt-3 leading-7 text-white/65" data-v-69866eec><kbd data-v-69866eec>↑</kbd> 前進 Pitch 　 <kbd data-v-69866eec>↓</kbd> 後退 Pitch <br data-v-69866eec><kbd data-v-69866eec>←</kbd> 左移 Roll 　 <kbd data-v-69866eec>→</kbd> 右移 Roll </p></div>',2)])])):(he(),ge("div",nw,[...s[4]||(s[4]=[_r('<div class="rounded-2xl bg-black/25 p-4" data-v-69866eec><h3 class="font-semibold" data-v-69866eec> 左搖桿 </h3><p class="mt-3 leading-7 text-white/65" data-v-69866eec><kbd data-v-69866eec>W</kbd> 升高 　 <kbd data-v-69866eec>S</kbd> 下降 <br data-v-69866eec><kbd data-v-69866eec>A</kbd> 左轉 　 <kbd data-v-69866eec>D</kbd> 右轉 </p></div><div class="rounded-2xl bg-black/25 p-4" data-v-69866eec><h3 class="font-semibold" data-v-69866eec> 右搖桿 </h3><p class="mt-3 leading-7 text-white/65" data-v-69866eec><kbd data-v-69866eec>↑</kbd> 前進 　 <kbd data-v-69866eec>↓</kbd> 後退 <br data-v-69866eec><kbd data-v-69866eec>←</kbd> 左移 　 <kbd data-v-69866eec>→</kbd> 右移 </p></div>',2)])])),s[5]||(s[5]=v("div",{class:"mt-3 rounded-2xl bg-black/25 p-4 text-sm leading-7 text-white/65"},[v("kbd",null,"Space"),Dt(" 暫停／繼續 　 "),v("kbd",null,"R"),Dt(" 重置 　 "),v("kbd",null,"H"),Dt(" 顯示／隱藏說明 ")],-1)),s[6]||(s[6]=v("p",{class:"mt-5 text-sm leading-6 text-white/50"}," 這是無 GPS 水平位置訓練。鬆開方向輸入後，無人機會因慣性繼續漂移，需要提前反向修正。 ",-1))])]))}},sw=Z1(iw,[["__scopeId","data-v-69866eec"]]),rw={class:"rounded-2xl border border-white/10 bg-white/[0.035] p-4"},ow={class:"mb-4 flex items-center justify-between"},aw={class:"grid grid-cols-2 gap-2"},lw={class:"text-xs text-white/45"},cw={class:"mt-1 text-lg font-semibold tabular-nums"},uw={class:"col-span-2 rounded-xl bg-black/25 p-3"},dw={class:"mt-1 flex items-baseline justify-between gap-3"},fw={class:"text-lg font-semibold"},hw={class:"text-sm tabular-nums text-cyan-200"},pw={class:"mt-3 flex items-center justify-between rounded-xl border border-white/10 px-3 py-2 text-sm"},mw={__name:"TelemetryPanel",props:{telemetry:Object,windMode:String},setup(n){return(e,t)=>(he(),ge("section",rw,[v("div",ow,[t[0]||(t[0]=v("div",null,[v("p",{class:"text-xs uppercase tracking-[0.2em] text-white/40"},"Telemetry"),v("h2",{class:"mt-1 font-semibold"},"飛行資料")],-1)),v("span",{class:Tt(["rounded-full px-2.5 py-1 text-xs",n.telemetry.outside?"bg-red-500/15 text-red-300":"bg-lime-300/10 text-lime-300"])},ce(n.telemetry.outside?"OUT":"IN ZONE"),3)]),v("dl",aw,[(he(!0),ge(rt,null,En([["高度",`${n.telemetry.altitude.toFixed(2)} m`],["速度",`${n.telemetry.speed.toFixed(2)} m/s`],["機頭",`${n.telemetry.yaw.toFixed(0)}°`],["離中心",`${n.telemetry.distance.toFixed(2)} m`]],i=>(he(),ge("div",{key:i[0],class:"rounded-xl bg-black/25 p-3"},[v("dt",lw,ce(i[0]),1),v("dd",cw,ce(i[1]),1)]))),128)),v("div",uw,[t[1]||(t[1]=v("dt",{class:"text-xs text-white/45"},"環境風",-1)),v("dd",dw,[v("span",fw,ce(n.windMode==="none"?"無風":"微風"),1),v("span",hw,ce(n.windMode==="none"?"0.0 m/s":`${Be(SE)(n.telemetry.windDirection)} ${n.telemetry.windSpeed.toFixed(1)} m/s · ${n.telemetry.windDirection.toFixed(0)}°`),1)])])]),v("div",pw,[t[2]||(t[2]=v("span",{class:"text-white/55"},"超界次數",-1)),v("strong",{class:Tt(["tabular-nums",n.telemetry.boundaryCount?"text-red-300":"text-white"])},ce(n.telemetry.boundaryCount),3)])]))}},gw={class:"mb-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur"},_w={class:"flex flex-wrap items-center gap-2"},xw=["onUpdate:modelValue"],vw=["value"],bw={__name:"TopBar",props:{settings:Object,paused:Boolean},emits:["toggle-pause","reset","toggle-help","toggle-controller-debug","toggle-controller-calibration"],setup(n,{emit:e}){const t=n,i=e;return(s,r)=>(he(),ge("header",gw,[r[5]||(r[5]=v("div",null,[v("p",{class:"text-[11px] font-semibold uppercase tracking-[0.28em] text-lime-300/80"},"v0.4 Controller Foundation · Third-person ATTI trainer"),v("h1",{class:"mt-1 text-xl font-semibold tracking-tight lg:text-2xl"},"Drone Orientation Trainer")],-1)),v("div",_w,[(he(!0),ge(rt,null,En([{label:"訓練",key:"trainingMode",options:Be(qM)},{label:"風況",key:"windMode",options:Be($M)},{label:"相機高度",key:"cameraHeight",options:Be(dh)},{label:"相機方位",key:"cameraBearing",options:Be(Kl)}],o=>(he(),ge("label",{key:o.key,class:"flex items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm text-white/70"},[v("span",null,ce(o.label),1),Qd(v("select",{"onUpdate:modelValue":a=>t.settings[o.key]=a,class:"bg-transparent text-white outline-none"},[(he(!0),ge(rt,null,En(o.options,a=>(he(),ge("option",{key:a.value,value:a.value,class:"bg-[#171a20]"},ce(a.label),9,vw))),128))],8,xw),[[Rm,t.settings[o.key]]])]))),128)),v("button",{class:"rounded-xl border border-lime-300/20 bg-lime-300/10 px-4 py-2 text-sm text-lime-100 hover:bg-lime-300/15",onClick:r[0]||(r[0]=o=>i("toggle-controller-calibration"))}," 🎯 控制器校正 "),v("button",{class:"rounded-xl border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm text-sky-100 hover:bg-sky-300/15",onClick:r[1]||(r[1]=o=>i("toggle-controller-debug"))}," 🎮 遙控器診斷 "),v("button",{class:"rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10",onClick:r[2]||(r[2]=o=>i("toggle-help"))}," 操作說明 "),v("button",{class:"rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10",onClick:r[3]||(r[3]=o=>i("toggle-pause"))},ce(n.paused?"繼續":"暫停"),1),v("button",{class:"rounded-xl bg-lime-300 px-4 py-2 text-sm font-semibold text-black hover:bg-lime-200",onClick:r[4]||(r[4]=o=>i("reset"))}," 重置 ")])]))}},hh=$e(!1),Zl=Cn({altitude:1.5,speed:0,yaw:0,distance:0,score:0,time:0,boundaryCount:0,outside:!1,windSpeed:0,windDirection:0}),yw=je(()=>hh.value?"已暫停":Zl.outside?"超出範圍":Zl.distance<1.2?"中心穩定":"修正漂移");function Mw(){return{paused:hh,telemetry:Zl,statusText:yw}}const Sw={class:"min-h-screen bg-[#090b10] text-white"},Ew={class:"mx-auto flex min-h-screen max-w-[1800px] flex-col p-3 lg:p-5"},ww={class:"grid min-h-0 flex-1 gap-3 xl:grid-cols-[minmax(0,1fr)_320px]"},Tw={class:"flex flex-col gap-3"},Aw={key:0,class:"rounded-2xl border border-lime-300/15 bg-lime-300/4 p-4 text-sm text-white/65"},Rw={__name:"DroneTrainer",setup(n){const e=KM(),t=Mw(),i=$e({throttle:0,yaw:0,pitch:0,roll:0}),s=$e({reset:()=>{},togglePause:()=>{}}),r=$e(!1),o=$e(!1),a=$e("keyboard");function l(d){i.value=d}function c(d){a.value=d}function u(d){s.value=d}return(d,f)=>(he(),ge("main",Sw,[v("div",Ew,[Ot(bw,{settings:Be(e),paused:Be(t).paused.value,onTogglePause:s.value.togglePause,onReset:s.value.reset,onToggleHelp:f[0]||(f[0]=p=>Be(e).showHelp=!Be(e).showHelp),onToggleControllerDebug:f[1]||(f[1]=p=>r.value=!r.value),onToggleControllerCalibration:f[2]||(f[2]=p=>o.value=!o.value)},null,8,["settings","paused","onTogglePause","onReset"]),v("section",ww,[Ot(zE,{settings:Be(e),game:Be(t),"controller-calibrating":o.value,onInputReady:l,onControlSourceReady:c,onRegisterActions:u},null,8,["settings","game","controller-calibrating"]),v("aside",Tw,[Ot(mw,{telemetry:Be(t).telemetry,"wind-mode":Be(e).windMode},null,8,["telemetry","wind-mode"]),Ot(t1,{input:i.value,settings:Be(e),"control-source":a.value},null,8,["input","settings","control-source"]),Be(e).trainingMode==="randomHeading"?(he(),ge("section",Aw,[...f[6]||(f[6]=[v("p",{class:"font-semibold text-lime-200"}," v0.3 Random Heading ",-1),v("p",{class:"mt-2 leading-6"}," 機頭會在北、東、南、西之間隨機切換。 請保持機頭不動，只用 Pitch／Roll 前往指定的世界方向， 完成後立即進入下一題。 ",-1)])])):ut("",!0)])])]),Be(e).showHelp?(he(),zn(sw,{key:0,"control-source":a.value,onClose:f[3]||(f[3]=p=>Be(e).showHelp=!1)},null,8,["control-source"])):ut("",!0),r.value?(he(),zn(j1,{key:1,onClose:f[4]||(f[4]=p=>r.value=!1)})):ut("",!0),o.value?(he(),zn(yg,{key:2,onClose:f[5]||(f[5]=p=>o.value=!1)})):ut("",!0)]))}},Cw={__name:"App",setup(n){return(e,t)=>(he(),zn(Rw))}};Im(Cw).mount("#app");
