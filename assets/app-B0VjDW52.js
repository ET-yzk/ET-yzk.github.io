/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jo(e){const t=Object.create(null);for(const i of e.split(","))t[i]=1;return i=>i in t}const Ee={},dn=[],Yt=()=>{},jc=()=>!1,ll=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),No=e=>e.startsWith("onUpdate:"),Be=Object.assign,Ho=(e,t)=>{const i=e.indexOf(t);i>-1&&e.splice(i,1)},Hh=Object.prototype.hasOwnProperty,_e=(e,t)=>Hh.call(e,t),ie=Array.isArray,un=e=>al(e)==="[object Map]",xn=e=>al(e)==="[object Set]",qr=e=>al(e)==="[object Date]",ae=e=>typeof e=="function",Ie=e=>typeof e=="string",Kt=e=>typeof e=="symbol",Ae=e=>e!==null&&typeof e=="object",Nc=e=>(Ae(e)||ae(e))&&ae(e.then)&&ae(e.catch),Hc=Object.prototype.toString,al=e=>Hc.call(e),zh=e=>al(e).slice(8,-1),zc=e=>al(e)==="[object Object]",zo=e=>Ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,pn=jo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),na=e=>{const t=Object.create(null);return(i=>t[i]||(t[i]=e(i)))},qh=/-\w/g,ot=na(e=>e.replace(qh,t=>t.slice(1).toUpperCase())),Uh=/\B([A-Z])/g,Gi=na(e=>e.replace(Uh,"-$1").toLowerCase()),ol=na(e=>e.charAt(0).toUpperCase()+e.slice(1)),xa=na(e=>e?`on${ol(e)}`:""),Ai=(e,t)=>!Object.is(e,t),Ml=(e,...t)=>{for(let i=0;i<e.length;i++)e[i](...t)},qc=(e,t,i,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:i})},Nl=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Wh=e=>{const t=Ie(e)?Number(e):NaN;return isNaN(t)?e:t};let Ur;const la=()=>Ur||(Ur=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qo(e){if(ie(e)){const t={};for(let i=0;i<e.length;i++){const n=e[i],l=Ie(n)?Jh(n):qo(n);if(l)for(const a in l)t[a]=l[a]}return t}else if(Ie(e)||Ae(e))return e}const Gh=/;(?![^(]*\))/g,Yh=/:([^]+)/,Kh=/\/\*[^]*?\*\//g;function Jh(e){const t={};return e.replace(Kh,"").split(Gh).forEach(i=>{if(i){const n=i.split(Yh);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Uo(e){let t="";if(Ie(e))t=e;else if(ie(e))for(let i=0;i<e.length;i++){const n=Uo(e[i]);n&&(t+=n+" ")}else if(Ae(e))for(const i in e)e[i]&&(t+=i+" ");return t.trim()}const Qh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xh=jo(Qh);function Uc(e){return!!e||e===""}function Zh(e,t){if(e.length!==t.length)return!1;let i=!0;for(let n=0;i&&n<e.length;n++)i=Ni(e[n],t[n]);return i}function Ni(e,t){if(e===t)return!0;let i=qr(e),n=qr(t);if(i||n)return i&&n?e.getTime()===t.getTime():!1;if(i=Kt(e),n=Kt(t),i||n)return e===t;if(i=ie(e),n=ie(t),i||n)return i&&n?Zh(e,t):!1;if(i=Ae(e),n=Ae(t),i||n){if(!i||!n)return!1;const l=Object.keys(e).length,a=Object.keys(t).length;if(l!==a)return!1;for(const o in e){const r=e.hasOwnProperty(o),s=t.hasOwnProperty(o);if(r&&!s||!r&&s||!Ni(e[o],t[o]))return!1}}return String(e)===String(t)}function Wo(e,t){return e.findIndex(i=>Ni(i,t))}const Wc=e=>!!(e&&e.__v_isRef===!0),ao=e=>Ie(e)?e:e==null?"":ie(e)||Ae(e)&&(e.toString===Hc||!ae(e.toString))?Wc(e)?ao(e.value):JSON.stringify(e,Gc,2):String(e),Gc=(e,t)=>Wc(t)?Gc(e,t.value):un(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((i,[n,l],a)=>(i[La(n,a)+" =>"]=l,i),{})}:xn(t)?{[`Set(${t.size})`]:[...t.values()].map(i=>La(i))}:Kt(t)?La(t):Ae(t)&&!ie(t)&&!zc(t)?String(t):t,La=(e,t="")=>{var i;return Kt(e)?`Symbol(${(i=e.description)!=null?i:t})`:e};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ye;class em{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ye,!t&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,i;if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].pause();for(t=0,i=this.effects.length;t<i;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,i;if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].resume();for(t=0,i=this.effects.length;t<i;t++)this.effects[t].resume()}}run(t){if(this._active){const i=Ye;try{return Ye=this,t()}finally{Ye=i}}}on(){++this._on===1&&(this.prevScope=Ye,Ye=this)}off(){this._on>0&&--this._on===0&&(Ye=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let i,n;for(i=0,n=this.effects.length;i<n;i++)this.effects[i].stop();for(this.effects.length=0,i=0,n=this.cleanups.length;i<n;i++)this.cleanups[i]();if(this.cleanups.length=0,this.scopes){for(i=0,n=this.scopes.length;i<n;i++)this.scopes[i].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0}}}function Yc(){return Ye}function tm(e,t=!1){Ye&&Ye.cleanups.push(e)}let Le;const Sa=new WeakSet;class Kc{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ye&&Ye.active&&Ye.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Sa.has(this)&&(Sa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Qc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wr(this),Xc(this);const t=Le,i=Dt;Le=this,Dt=!0;try{return this.fn()}finally{Zc(this),Le=t,Dt=i,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ko(t);this.deps=this.depsTail=void 0,Wr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Sa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){oo(this)&&this.run()}get dirty(){return oo(this)}}let Jc=0,Mn,Vn;function Qc(e,t=!1){if(e.flags|=8,t){e.next=Vn,Vn=e;return}e.next=Mn,Mn=e}function Go(){Jc++}function Yo(){if(--Jc>0)return;if(Vn){let t=Vn;for(Vn=void 0;t;){const i=t.next;t.next=void 0,t.flags&=-9,t=i}}let e;for(;Mn;){let t=Mn;for(Mn=void 0;t;){const i=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=i}}if(e)throw e}function Xc(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Zc(e){let t,i=e.depsTail,n=i;for(;n;){const l=n.prevDep;n.version===-1?(n===i&&(i=l),Ko(n),im(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=l}e.deps=t,e.depsTail=i}function oo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ed(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ed(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Gn)||(e.globalVersion=Gn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!oo(e))))return;e.flags|=2;const t=e.dep,i=Le,n=Dt;Le=e,Dt=!0;try{Xc(e);const l=e.fn(e._value);(t.version===0||Ai(l,e._value))&&(e.flags|=128,e._value=l,t.version++)}catch(l){throw t.version++,l}finally{Le=i,Dt=n,Zc(e),e.flags&=-3}}function Ko(e,t=!1){const{dep:i,prevSub:n,nextSub:l}=e;if(n&&(n.nextSub=l,e.prevSub=void 0),l&&(l.prevSub=n,e.nextSub=void 0),i.subs===e&&(i.subs=n,!n&&i.computed)){i.computed.flags&=-5;for(let a=i.computed.deps;a;a=a.nextDep)Ko(a,!0)}!t&&!--i.sc&&i.map&&i.map.delete(i.key)}function im(e){const{prevDep:t,nextDep:i}=e;t&&(t.nextDep=i,e.prevDep=void 0),i&&(i.prevDep=t,e.nextDep=void 0)}let Dt=!0;const td=[];function ui(){td.push(Dt),Dt=!1}function pi(){const e=td.pop();Dt=e===void 0?!0:e}function Wr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const i=Le;Le=void 0;try{t()}finally{Le=i}}}let Gn=0;class nm{constructor(t,i){this.sub=t,this.dep=i,this.version=i.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class aa{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Le||!Dt||Le===this.computed)return;let i=this.activeLink;if(i===void 0||i.sub!==Le)i=this.activeLink=new nm(Le,this),Le.deps?(i.prevDep=Le.depsTail,Le.depsTail.nextDep=i,Le.depsTail=i):Le.deps=Le.depsTail=i,id(i);else if(i.version===-1&&(i.version=this.version,i.nextDep)){const n=i.nextDep;n.prevDep=i.prevDep,i.prevDep&&(i.prevDep.nextDep=n),i.prevDep=Le.depsTail,i.nextDep=void 0,Le.depsTail.nextDep=i,Le.depsTail=i,Le.deps===i&&(Le.deps=n)}return i}trigger(t){this.version++,Gn++,this.notify(t)}notify(t){Go();try{for(let i=this.subs;i;i=i.prevSub)i.sub.notify()&&i.sub.dep.notify()}finally{Yo()}}}function id(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)id(n)}const i=e.dep.subs;i!==e&&(e.prevSub=i,i&&(i.nextSub=e)),e.dep.subs=e}}const Hl=new WeakMap,Mi=Symbol(""),ro=Symbol(""),Yn=Symbol("");function Ke(e,t,i){if(Dt&&Le){let n=Hl.get(e);n||Hl.set(e,n=new Map);let l=n.get(i);l||(n.set(i,l=new aa),l.map=n,l.key=i),l.track()}}function ri(e,t,i,n,l,a){const o=Hl.get(e);if(!o){Gn++;return}const r=s=>{s&&s.trigger()};if(Go(),t==="clear")o.forEach(r);else{const s=ie(e),u=s&&zo(i);if(s&&i==="length"){const d=Number(n);o.forEach((p,h)=>{(h==="length"||h===Yn||!Kt(h)&&h>=d)&&r(p)})}else switch((i!==void 0||o.has(void 0))&&r(o.get(i)),u&&r(o.get(Yn)),t){case"add":s?u&&r(o.get("length")):(r(o.get(Mi)),un(e)&&r(o.get(ro)));break;case"delete":s||(r(o.get(Mi)),un(e)&&r(o.get(ro)));break;case"set":un(e)&&r(o.get(Mi));break}}Yo()}function lm(e,t){const i=Hl.get(e);return i&&i.get(t)}function Xi(e){const t=me(e);return t===e?t:(Ke(t,"iterate",Yn),Et(e)?t:t.map(Fe))}function oa(e){return Ke(e=me(e),"iterate",Yn),e}const am={__proto__:null,[Symbol.iterator](){return Pa(this,Symbol.iterator,Fe)},concat(...e){return Xi(this).concat(...e.map(t=>ie(t)?Xi(t):t))},entries(){return Pa(this,"entries",e=>(e[1]=Fe(e[1]),e))},every(e,t){return ti(this,"every",e,t,void 0,arguments)},filter(e,t){return ti(this,"filter",e,t,i=>i.map(Fe),arguments)},find(e,t){return ti(this,"find",e,t,Fe,arguments)},findIndex(e,t){return ti(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ti(this,"findLast",e,t,Fe,arguments)},findLastIndex(e,t){return ti(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ti(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ca(this,"includes",e)},indexOf(...e){return Ca(this,"indexOf",e)},join(e){return Xi(this).join(e)},lastIndexOf(...e){return Ca(this,"lastIndexOf",e)},map(e,t){return ti(this,"map",e,t,void 0,arguments)},pop(){return Dn(this,"pop")},push(...e){return Dn(this,"push",e)},reduce(e,...t){return Gr(this,"reduce",e,t)},reduceRight(e,...t){return Gr(this,"reduceRight",e,t)},shift(){return Dn(this,"shift")},some(e,t){return ti(this,"some",e,t,void 0,arguments)},splice(...e){return Dn(this,"splice",e)},toReversed(){return Xi(this).toReversed()},toSorted(e){return Xi(this).toSorted(e)},toSpliced(...e){return Xi(this).toSpliced(...e)},unshift(...e){return Dn(this,"unshift",e)},values(){return Pa(this,"values",Fe)}};function Pa(e,t,i){const n=oa(e),l=n[t]();return n!==e&&!Et(e)&&(l._next=l.next,l.next=()=>{const a=l._next();return a.value&&(a.value=i(a.value)),a}),l}const om=Array.prototype;function ti(e,t,i,n,l,a){const o=oa(e),r=o!==e&&!Et(e),s=o[t];if(s!==om[t]){const p=s.apply(e,a);return r?Fe(p):p}let u=i;o!==e&&(r?u=function(p,h){return i.call(this,Fe(p),h,e)}:i.length>2&&(u=function(p,h){return i.call(this,p,h,e)}));const d=s.call(o,u,n);return r&&l?l(d):d}function Gr(e,t,i,n){const l=oa(e);let a=i;return l!==e&&(Et(e)?i.length>3&&(a=function(o,r,s){return i.call(this,o,r,s,e)}):a=function(o,r,s){return i.call(this,o,Fe(r),s,e)}),l[t](a,...n)}function Ca(e,t,i){const n=me(e);Ke(n,"iterate",Yn);const l=n[t](...i);return(l===-1||l===!1)&&Jo(i[0])?(i[0]=me(i[0]),n[t](...i)):l}function Dn(e,t,i=[]){ui(),Go();const n=me(e)[t].apply(e,i);return Yo(),pi(),n}const rm=jo("__proto__,__v_isRef,__isVue"),nd=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Kt));function sm(e){Kt(e)||(e=String(e));const t=me(this);return Ke(t,"has",e),t.hasOwnProperty(e)}class ld{constructor(t=!1,i=!1){this._isReadonly=t,this._isShallow=i}get(t,i,n){if(i==="__v_skip")return t.__v_skip;const l=this._isReadonly,a=this._isShallow;if(i==="__v_isReactive")return!l;if(i==="__v_isReadonly")return l;if(i==="__v_isShallow")return a;if(i==="__v_raw")return n===(l?a?dd:cd:a?sd:rd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=ie(t);if(!l){let s;if(o&&(s=am[i]))return s;if(i==="hasOwnProperty")return sm}const r=Reflect.get(t,i,Ce(t)?t:n);return(Kt(i)?nd.has(i):rm(i))||(l||Ke(t,"get",i),a)?r:Ce(r)?o&&zo(i)?r:r.value:Ae(r)?l?Mt(r):Hi(r):r}}class ad extends ld{constructor(t=!1){super(!1,t)}set(t,i,n,l){let a=t[i];if(!this._isShallow){const s=Ti(a);if(!Et(n)&&!Ti(n)&&(a=me(a),n=me(n)),!ie(t)&&Ce(a)&&!Ce(n))return s||(a.value=n),!0}const o=ie(t)&&zo(i)?Number(i)<t.length:_e(t,i),r=Reflect.set(t,i,n,Ce(t)?t:l);return t===me(l)&&(o?Ai(n,a)&&ri(t,"set",i,n):ri(t,"add",i,n)),r}deleteProperty(t,i){const n=_e(t,i);t[i];const l=Reflect.deleteProperty(t,i);return l&&n&&ri(t,"delete",i,void 0),l}has(t,i){const n=Reflect.has(t,i);return(!Kt(i)||!nd.has(i))&&Ke(t,"has",i),n}ownKeys(t){return Ke(t,"iterate",ie(t)?"length":Mi),Reflect.ownKeys(t)}}class od extends ld{constructor(t=!1){super(!0,t)}set(t,i){return!0}deleteProperty(t,i){return!0}}const cm=new ad,dm=new od,um=new ad(!0),pm=new od(!0),so=e=>e,El=e=>Reflect.getPrototypeOf(e);function hm(e,t,i){return function(...n){const l=this.__v_raw,a=me(l),o=un(a),r=e==="entries"||e===Symbol.iterator&&o,s=e==="keys"&&o,u=l[e](...n),d=i?so:t?zl:Fe;return!t&&Ke(a,"iterate",s?ro:Mi),{next(){const{value:p,done:h}=u.next();return h?{value:p,done:h}:{value:r?[d(p[0]),d(p[1])]:d(p),done:h}},[Symbol.iterator](){return this}}}}function Al(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function mm(e,t){const i={get(l){const a=this.__v_raw,o=me(a),r=me(l);e||(Ai(l,r)&&Ke(o,"get",l),Ke(o,"get",r));const{has:s}=El(o),u=t?so:e?zl:Fe;if(s.call(o,l))return u(a.get(l));if(s.call(o,r))return u(a.get(r));a!==o&&a.get(l)},get size(){const l=this.__v_raw;return!e&&Ke(me(l),"iterate",Mi),l.size},has(l){const a=this.__v_raw,o=me(a),r=me(l);return e||(Ai(l,r)&&Ke(o,"has",l),Ke(o,"has",r)),l===r?a.has(l):a.has(l)||a.has(r)},forEach(l,a){const o=this,r=o.__v_raw,s=me(r),u=t?so:e?zl:Fe;return!e&&Ke(s,"iterate",Mi),r.forEach((d,p)=>l.call(a,u(d),u(p),o))}};return Be(i,e?{add:Al("add"),set:Al("set"),delete:Al("delete"),clear:Al("clear")}:{add(l){!t&&!Et(l)&&!Ti(l)&&(l=me(l));const a=me(this);return El(a).has.call(a,l)||(a.add(l),ri(a,"add",l,l)),this},set(l,a){!t&&!Et(a)&&!Ti(a)&&(a=me(a));const o=me(this),{has:r,get:s}=El(o);let u=r.call(o,l);u||(l=me(l),u=r.call(o,l));const d=s.call(o,l);return o.set(l,a),u?Ai(a,d)&&ri(o,"set",l,a):ri(o,"add",l,a),this},delete(l){const a=me(this),{has:o,get:r}=El(a);let s=o.call(a,l);s||(l=me(l),s=o.call(a,l)),r&&r.call(a,l);const u=a.delete(l);return s&&ri(a,"delete",l,void 0),u},clear(){const l=me(this),a=l.size!==0,o=l.clear();return a&&ri(l,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(l=>{i[l]=hm(l,e,t)}),i}function ra(e,t){const i=mm(e,t);return(n,l,a)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?n:Reflect.get(_e(i,l)&&l in n?i:n,l,a)}const fm={get:ra(!1,!1)},gm={get:ra(!1,!0)},vm={get:ra(!0,!1)},_m={get:ra(!0,!0)},rd=new WeakMap,sd=new WeakMap,cd=new WeakMap,dd=new WeakMap;function bm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ym(e){return e.__v_skip||!Object.isExtensible(e)?0:bm(zh(e))}function Hi(e){return Ti(e)?e:sa(e,!1,cm,fm,rd)}function ud(e){return sa(e,!1,um,gm,sd)}function Mt(e){return sa(e,!0,dm,vm,cd)}function pd(e){return sa(e,!0,pm,_m,dd)}function sa(e,t,i,n,l){if(!Ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=ym(e);if(a===0)return e;const o=l.get(e);if(o)return o;const r=new Proxy(e,a===2?n:i);return l.set(e,r),r}function Vi(e){return Ti(e)?Vi(e.__v_raw):!!(e&&e.__v_isReactive)}function Ti(e){return!!(e&&e.__v_isReadonly)}function Et(e){return!!(e&&e.__v_isShallow)}function Jo(e){return e?!!e.__v_raw:!1}function me(e){const t=e&&e.__v_raw;return t?me(t):e}function wm(e){return!_e(e,"__v_skip")&&Object.isExtensible(e)&&qc(e,"__v_skip",!0),e}const Fe=e=>Ae(e)?Hi(e):e,zl=e=>Ae(e)?Mt(e):e;function Ce(e){return e?e.__v_isRef===!0:!1}function Q(e){return hd(e,!1)}function ee(e){return hd(e,!0)}function hd(e,t){return Ce(e)?e:new km(e,t)}class km{constructor(t,i){this.dep=new aa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=i?t:me(t),this._value=i?t:Fe(t),this.__v_isShallow=i}get value(){return this.dep.track(),this._value}set value(t){const i=this._rawValue,n=this.__v_isShallow||Et(t)||Ti(t);t=n?t:me(t),Ai(t,i)&&(this._rawValue=t,this._value=n?t:Fe(t),this.dep.trigger())}}function kt(e){return Ce(e)?e.value:e}function se(e){return ae(e)?e():kt(e)}const Em={get:(e,t,i)=>t==="__v_raw"?e:kt(Reflect.get(e,t,i)),set:(e,t,i,n)=>{const l=e[t];return Ce(l)&&!Ce(i)?(l.value=i,!0):Reflect.set(e,t,i,n)}};function md(e){return Vi(e)?e:new Proxy(e,Em)}class Am{constructor(t){this.__v_isRef=!0,this._value=void 0;const i=this.dep=new aa,{get:n,set:l}=t(i.track.bind(i),i.trigger.bind(i));this._get=n,this._set=l}get value(){return this._value=this._get()}set value(t){this._set(t)}}function fd(e){return new Am(e)}function Tm(e){const t=ie(e)?new Array(e.length):{};for(const i in e)t[i]=gd(e,i);return t}class xm{constructor(t,i,n){this._object=t,this._key=i,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return lm(me(this._object),this._key)}}class Lm{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Ln(e,t,i){return Ce(e)?e:ae(e)?new Lm(e):Ae(e)&&arguments.length>1?gd(e,t,i):Q(e)}function gd(e,t,i){const n=e[t];return Ce(n)?n:new xm(e,t,i)}class Sm{constructor(t,i,n){this.fn=t,this.setter=i,this._value=void 0,this.dep=new aa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!i,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return Qc(this,!0),!0}get value(){const t=this.dep.track();return ed(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Pm(e,t,i=!1){let n,l;return ae(e)?n=e:(n=e.get,l=e.set),new Sm(n,l,i)}const Tl={},ql=new WeakMap;let Ri;function Cm(e,t=!1,i=Ri){if(i){let n=ql.get(i);n||ql.set(i,n=[]),n.push(e)}}function Om(e,t,i=Ee){const{immediate:n,deep:l,once:a,scheduler:o,augmentJob:r,call:s}=i,u=T=>l?T:Et(T)||l===!1||l===0?si(T,1):si(T);let d,p,h,m,g=!1,b=!1;if(Ce(e)?(p=()=>e.value,g=Et(e)):Vi(e)?(p=()=>u(e),g=!0):ie(e)?(b=!0,g=e.some(T=>Vi(T)||Et(T)),p=()=>e.map(T=>{if(Ce(T))return T.value;if(Vi(T))return u(T);if(ae(T))return s?s(T,2):T()})):ae(e)?t?p=s?()=>s(e,2):e:p=()=>{if(h){ui();try{h()}finally{pi()}}const T=Ri;Ri=d;try{return s?s(e,3,[m]):e(m)}finally{Ri=T}}:p=Yt,t&&l){const T=p,C=l===!0?1/0:l;p=()=>si(T(),C)}const y=Yc(),A=()=>{d.stop(),y&&y.active&&Ho(y.effects,d)};if(a&&t){const T=t;t=(...C)=>{T(...C),A()}}let w=b?new Array(e.length).fill(Tl):Tl;const v=T=>{if(!(!(d.flags&1)||!d.dirty&&!T))if(t){const C=d.run();if(l||g||(b?C.some((N,M)=>Ai(N,w[M])):Ai(C,w))){h&&h();const N=Ri;Ri=d;try{const M=[C,w===Tl?void 0:b&&w[0]===Tl?[]:w,m];w=C,s?s(t,3,M):t(...M)}finally{Ri=N}}}else d.run()};return r&&r(v),d=new Kc(p),d.scheduler=o?()=>o(v,!1):v,m=T=>Cm(T,!1,d),h=d.onStop=()=>{const T=ql.get(d);if(T){if(s)s(T,4);else for(const C of T)C();ql.delete(d)}},t?n?v(!0):w=d.run():o?o(v.bind(null,!0),!0):d.run(),A.pause=d.pause.bind(d),A.resume=d.resume.bind(d),A.stop=A,A}function si(e,t=1/0,i){if(t<=0||!Ae(e)||e.__v_skip||(i=i||new Map,(i.get(e)||0)>=t))return e;if(i.set(e,t),t--,Ce(e))si(e.value,t,i);else if(ie(e))for(let n=0;n<e.length;n++)si(e[n],t,i);else if(xn(e)||un(e))e.forEach(n=>{si(n,t,i)});else if(zc(e)){for(const n in e)si(e[n],t,i);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&si(e[n],t,i)}return e}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rl(e,t,i,n){try{return n?e(...n):e()}catch(l){sl(l,t,i)}}function Rt(e,t,i,n){if(ae(e)){const l=rl(e,t,i,n);return l&&Nc(l)&&l.catch(a=>{sl(a,t,i)}),l}if(ie(e)){const l=[];for(let a=0;a<e.length;a++)l.push(Rt(e[a],t,i,n));return l}}function sl(e,t,i,n=!0){const l=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Ee;if(t){let r=t.parent;const s=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${i}`;for(;r;){const d=r.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,s,u)===!1)return}r=r.parent}if(a){ui(),rl(a,null,10,[e,s,u]),pi();return}}Dm(e,i,l,n,o)}function Dm(e,t,i,n=!0,l=!1){if(l)throw e;console.error(e)}const et=[];let Ut=-1;const hn=[];let yi=null,nn=0;const vd=Promise.resolve();let Ul=null;function xt(e){const t=Ul||vd;return e?t.then(this?e.bind(this):e):t}function Im(e){let t=Ut+1,i=et.length;for(;t<i;){const n=t+i>>>1,l=et[n],a=Kn(l);a<e||a===e&&l.flags&2?t=n+1:i=n}return t}function Qo(e){if(!(e.flags&1)){const t=Kn(e),i=et[et.length-1];!i||!(e.flags&2)&&t>=Kn(i)?et.push(e):et.splice(Im(t),0,e),e.flags|=1,_d()}}function _d(){Ul||(Ul=vd.then(bd))}function Rm(e){ie(e)?hn.push(...e):yi&&e.id===-1?yi.splice(nn+1,0,e):e.flags&1||(hn.push(e),e.flags|=1),_d()}function Yr(e,t,i=Ut+1){for(;i<et.length;i++){const n=et[i];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;et.splice(i,1),i--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Wl(e){if(hn.length){const t=[...new Set(hn)].sort((i,n)=>Kn(i)-Kn(n));if(hn.length=0,yi){yi.push(...t);return}for(yi=t,nn=0;nn<yi.length;nn++){const i=yi[nn];i.flags&4&&(i.flags&=-2),i.flags&8||i(),i.flags&=-2}yi=null,nn=0}}const Kn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function bd(e){try{for(Ut=0;Ut<et.length;Ut++){const t=et[Ut];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),rl(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ut<et.length;Ut++){const t=et[Ut];t&&(t.flags&=-2)}Ut=-1,et.length=0,Wl(),Ul=null,(et.length||hn.length)&&bd()}}let ht=null,yd=null;function Gl(e){const t=ht;return ht=e,yd=e&&e.type.__scopeId||null,t}function Bm(e,t=ht,i){if(!t||e._n)return e;const n=(...l)=>{n._d&&Jl(-1);const a=Gl(t);let o;try{o=e(...l)}finally{Gl(a),n._d&&Jl(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function e5(e,t){if(ht===null)return e;const i=pa(ht),n=e.dirs||(e.dirs=[]);for(let l=0;l<t.length;l++){let[a,o,r,s=Ee]=t[l];a&&(ae(a)&&(a={mounted:a,updated:a}),a.deep&&si(o),n.push({dir:a,instance:i,value:o,oldValue:void 0,arg:r,modifiers:s}))}return e}function Wt(e,t,i,n){const l=e.dirs,a=t&&t.dirs;for(let o=0;o<l.length;o++){const r=l[o];a&&(r.oldValue=a[o].value);let s=r.dir[n];s&&(ui(),Rt(s,i,8,[e.el,r,e,t]),pi())}}const $m=Symbol("_vte"),wd=e=>e.__isTeleport,oi=Symbol("_leaveCb"),xl=Symbol("_enterCb");function kd(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return de(()=>{e.isMounted=!0}),tr(()=>{e.isUnmounting=!0}),e}const _t=[Function,Array],Ed={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_t,onEnter:_t,onAfterEnter:_t,onEnterCancelled:_t,onBeforeLeave:_t,onLeave:_t,onAfterLeave:_t,onLeaveCancelled:_t,onBeforeAppear:_t,onAppear:_t,onAfterAppear:_t,onAppearCancelled:_t},Ad=e=>{const t=e.subTree;return t.component?Ad(t.component):t},Mm={name:"BaseTransition",props:Ed,setup(e,{slots:t}){const i=Qt(),n=kd();return()=>{const l=t.default&&Xo(t.default(),!0);if(!l||!l.length)return;const a=Td(l),o=me(e),{mode:r}=o;if(n.isLeaving)return Oa(a);const s=Kr(a);if(!s)return Oa(a);let u=Jn(s,o,n,i,p=>u=p);s.type!==je&&zi(s,u);let d=i.subTree&&Kr(i.subTree);if(d&&d.type!==je&&!Bi(d,s)&&Ad(i).type!==je){let p=Jn(d,o,n,i);if(zi(d,p),r==="out-in"&&s.type!==je)return n.isLeaving=!0,p.afterLeave=()=>{n.isLeaving=!1,i.job.flags&8||i.update(),delete p.afterLeave,d=void 0},Oa(a);r==="in-out"&&s.type!==je?p.delayLeave=(h,m,g)=>{const b=xd(n,d);b[String(d.key)]=d,h[oi]=()=>{m(),h[oi]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{g(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return a}}};function Td(e){let t=e[0];if(e.length>1){for(const i of e)if(i.type!==je){t=i;break}}return t}const Vm=Mm;function xd(e,t){const{leavingVNodes:i}=e;let n=i.get(t.type);return n||(n=Object.create(null),i.set(t.type,n)),n}function Jn(e,t,i,n,l){const{appear:a,mode:o,persisted:r=!1,onBeforeEnter:s,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:h,onLeave:m,onAfterLeave:g,onLeaveCancelled:b,onBeforeAppear:y,onAppear:A,onAfterAppear:w,onAppearCancelled:v}=t,T=String(e.key),C=xd(i,e),N=(L,B)=>{L&&Rt(L,n,9,B)},M=(L,B)=>{const F=B[1];N(L,B),ie(L)?L.every(O=>O.length<=1)&&F():L.length<=1&&F()},H={mode:o,persisted:r,beforeEnter(L){let B=s;if(!i.isMounted)if(a)B=y||s;else return;L[oi]&&L[oi](!0);const F=C[T];F&&Bi(e,F)&&F.el[oi]&&F.el[oi](),N(B,[L])},enter(L){let B=u,F=d,O=p;if(!i.isMounted)if(a)B=A||u,F=w||d,O=v||p;else return;let J=!1;const U=L[xl]=Z=>{J||(J=!0,Z?N(O,[L]):N(F,[L]),H.delayedLeave&&H.delayedLeave(),L[xl]=void 0)};B?M(B,[L,U]):U()},leave(L,B){const F=String(e.key);if(L[xl]&&L[xl](!0),i.isUnmounting)return B();N(h,[L]);let O=!1;const J=L[oi]=U=>{O||(O=!0,B(),U?N(b,[L]):N(g,[L]),L[oi]=void 0,C[F]===e&&delete C[F])};C[F]=e,m?M(m,[L,J]):J()},clone(L){const B=Jn(L,t,i,n,l);return l&&l(B),B}};return H}function Oa(e){if(dl(e))return e=xi(e),e.children=null,e}function Kr(e){if(!dl(e))return wd(e.type)&&e.children?Td(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:i}=e;if(i){if(t&16)return i[0];if(t&32&&ae(i.default))return i.default()}}function zi(e,t){e.shapeFlag&6&&e.component?(e.transition=t,zi(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Xo(e,t=!1,i){let n=[],l=0;for(let a=0;a<e.length;a++){let o=e[a];const r=i==null?o.key:String(i)+String(o.key!=null?o.key:a);o.type===at?(o.patchFlag&128&&l++,n=n.concat(Xo(o.children,t,r))):(t||o.type!==je)&&n.push(r!=null?xi(o,{key:r}):o)}if(l>1)for(let a=0;a<n.length;a++)n[a].patchFlag=-2;return n}function D(e,t){return ae(e)?Be({name:e.name},t,{setup:e}):e}function cl(){const e=Qt();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function Zo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function t5(e){const t=Qt(),i=ee(null);if(t){const l=t.refs===Ee?t.refs={}:t.refs;Object.defineProperty(l,e,{enumerable:!0,get:()=>i.value,set:a=>i.value=a})}return i}const Yl=new WeakMap;function mn(e,t,i,n,l=!1){if(ie(e)){e.forEach((g,b)=>mn(g,t&&(ie(t)?t[b]:t),i,n,l));return}if(fn(n)&&!l){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&mn(e,t,i,n.component.subTree);return}const a=n.shapeFlag&4?pa(n.component):n.el,o=l?null:a,{i:r,r:s}=e,u=t&&t.r,d=r.refs===Ee?r.refs={}:r.refs,p=r.setupState,h=me(p),m=p===Ee?jc:g=>_e(h,g);if(u!=null&&u!==s){if(Jr(t),Ie(u))d[u]=null,m(u)&&(p[u]=null);else if(Ce(u)){u.value=null;const g=t;g.k&&(d[g.k]=null)}}if(ae(s))rl(s,r,12,[o,d]);else{const g=Ie(s),b=Ce(s);if(g||b){const y=()=>{if(e.f){const A=g?m(s)?p[s]:d[s]:s.value;if(l)ie(A)&&Ho(A,a);else if(ie(A))A.includes(a)||A.push(a);else if(g)d[s]=[a],m(s)&&(p[s]=d[s]);else{const w=[a];s.value=w,e.k&&(d[e.k]=w)}}else g?(d[s]=o,m(s)&&(p[s]=o)):b&&(s.value=o,e.k&&(d[e.k]=o))};if(o){const A=()=>{y(),Yl.delete(e)};A.id=-1,Yl.set(e,A),ut(A,i)}else Jr(e),y()}}}function Jr(e){const t=Yl.get(e);t&&(t.flags|=8,Yl.delete(e))}let Qr=!1;const Zi=()=>{Qr||(console.error("Hydration completed but contains mismatches."),Qr=!0)},Fm=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",jm=e=>e.namespaceURI.includes("MathML"),Ll=e=>{if(e.nodeType===1){if(Fm(e))return"svg";if(jm(e))return"mathml"}},rn=e=>e.nodeType===8;function Nm(e){const{mt:t,p:i,o:{patchProp:n,createText:l,nextSibling:a,parentNode:o,remove:r,insert:s,createComment:u}}=e,d=(v,T)=>{if(!T.hasChildNodes()){i(null,v,T),Wl(),T._vnode=v;return}p(T.firstChild,v,null,null,null),Wl(),T._vnode=v},p=(v,T,C,N,M,H=!1)=>{H=H||!!T.dynamicChildren;const L=rn(v)&&v.data==="[",B=()=>b(v,T,C,N,M,L),{type:F,ref:O,shapeFlag:J,patchFlag:U}=T;let Z=v.nodeType;T.el=v,U===-2&&(H=!1,T.dynamicChildren=null);let V=null;switch(F){case ji:Z!==3?T.children===""?(s(T.el=l(""),o(v),v),V=v):V=B():(v.data!==T.children&&(Zi(),v.data=T.children),V=a(v));break;case je:w(v)?(V=a(v),A(T.el=v.content.firstChild,v,C)):Z!==8||L?V=B():V=a(v);break;case jn:if(L&&(v=a(v),Z=v.nodeType),Z===1||Z===3){V=v;const le=!T.children.length;for(let K=0;K<T.staticCount;K++)le&&(T.children+=V.nodeType===1?V.outerHTML:V.data),K===T.staticCount-1&&(T.anchor=V),V=a(V);return L?a(V):V}else B();break;case at:L?V=g(v,T,C,N,M,H):V=B();break;default:if(J&1)(Z!==1||T.type.toLowerCase()!==v.tagName.toLowerCase())&&!w(v)?V=B():V=h(v,T,C,N,M,H);else if(J&6){T.slotScopeIds=M;const le=o(v);if(L?V=y(v):rn(v)&&v.data==="teleport start"?V=y(v,v.data,"teleport end"):V=a(v),t(T,le,null,C,N,Ll(le),H),fn(T)&&!T.type.__asyncResolved){let K;L?(K=Me(at),K.anchor=V?V.previousSibling:le.lastChild):K=v.nodeType===3?Xd(""):Me("div"),K.el=v,T.component.subTree=K}}else J&64?Z!==8?V=B():V=T.type.hydrate(v,T,C,N,M,H,e,m):J&128&&(V=T.type.hydrate(v,T,C,N,Ll(o(v)),M,H,e,p))}return O!=null&&mn(O,null,N,T),V},h=(v,T,C,N,M,H)=>{H=H||!!T.dynamicChildren;const{type:L,props:B,patchFlag:F,shapeFlag:O,dirs:J,transition:U}=T,Z=L==="input"||L==="option";if(Z||F!==-1){J&&Wt(T,null,C,"created");let V=!1;if(w(v)){V=Nd(null,U)&&C&&C.vnode.props&&C.vnode.props.appear;const K=v.content.firstChild;if(V){const ce=K.getAttribute("class");ce&&(K.$cls=ce),U.beforeEnter(K)}A(K,v,C),T.el=v=K}if(O&16&&!(B&&(B.innerHTML||B.textContent))){let K=m(v.firstChild,T,v,C,N,M,H);for(;K;){Sl(v,1)||Zi();const ce=K;K=K.nextSibling,r(ce)}}else if(O&8){let K=T.children;K[0]===`
`&&(v.tagName==="PRE"||v.tagName==="TEXTAREA")&&(K=K.slice(1)),v.textContent!==K&&(Sl(v,0)||Zi(),v.textContent=T.children)}if(B){if(Z||!H||F&48){const K=v.tagName.includes("-");for(const ce in B)(Z&&(ce.endsWith("value")||ce==="indeterminate")||ll(ce)&&!pn(ce)||ce[0]==="."||K)&&n(v,ce,null,B[ce],void 0,C)}else if(B.onClick)n(v,"onClick",null,B.onClick,void 0,C);else if(F&4&&Vi(B.style))for(const K in B.style)B.style[K]}let le;(le=B&&B.onVnodeBeforeMount)&&bt(le,C,T),J&&Wt(T,null,C,"beforeMount"),((le=B&&B.onVnodeMounted)||J||V)&&Yd(()=>{le&&bt(le,C,T),V&&U.enter(v),J&&Wt(T,null,C,"mounted")},N)}return v.nextSibling},m=(v,T,C,N,M,H,L)=>{L=L||!!T.dynamicChildren;const B=T.children,F=B.length;for(let O=0;O<F;O++){const J=L?B[O]:B[O]=wt(B[O]),U=J.type===ji;v?(U&&!L&&O+1<F&&wt(B[O+1]).type===ji&&(s(l(v.data.slice(J.children.length)),C,a(v)),v.data=J.children),v=p(v,J,N,M,H,L)):U&&!J.children?s(J.el=l(""),C):(Sl(C,1)||Zi(),i(null,J,C,null,N,M,Ll(C),H))}return v},g=(v,T,C,N,M,H)=>{const{slotScopeIds:L}=T;L&&(M=M?M.concat(L):L);const B=o(v),F=m(a(v),T,B,C,N,M,H);return F&&rn(F)&&F.data==="]"?a(T.anchor=F):(Zi(),s(T.anchor=u("]"),B,F),F)},b=(v,T,C,N,M,H)=>{if(Sl(v.parentElement,1)||Zi(),T.el=null,H){const F=y(v);for(;;){const O=a(v);if(O&&O!==F)r(O);else break}}const L=a(v),B=o(v);return r(v),i(null,T,B,L,C,N,Ll(B),M),C&&(C.vnode.el=T.el,Wd(C,T.el)),L},y=(v,T="[",C="]")=>{let N=0;for(;v;)if(v=a(v),v&&rn(v)&&(v.data===T&&N++,v.data===C)){if(N===0)return a(v);N--}return v},A=(v,T,C)=>{const N=T.parentNode;N&&N.replaceChild(v,T);let M=C;for(;M;)M.vnode.el===T&&(M.vnode.el=M.subTree.el=v),M=M.parent},w=v=>v.nodeType===1&&v.tagName==="TEMPLATE";return[d,p]}const Xr="data-allow-mismatch",Hm={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Sl(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(Xr);)e=e.parentElement;const i=e&&e.getAttribute(Xr);if(i==null)return!1;if(i==="")return!0;{const n=i.split(",");return t===0&&n.includes("children")?!0:n.includes(Hm[t])}}la().requestIdleCallback;la().cancelIdleCallback;function zm(e,t){if(rn(e)&&e.data==="["){let i=1,n=e.nextSibling;for(;n;){if(n.nodeType===1){if(t(n)===!1)break}else if(rn(n))if(n.data==="]"){if(--i===0)break}else n.data==="["&&i++;n=n.nextSibling}}else t(e)}const fn=e=>!!e.type.__asyncLoader;function er(e){ae(e)&&(e={loader:e});const{loader:t,loadingComponent:i,errorComponent:n,delay:l=200,hydrate:a,timeout:o,suspensible:r=!0,onError:s}=e;let u=null,d,p=0;const h=()=>(p++,u=null,m()),m=()=>{let g;return u||(g=u=t().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),s)return new Promise((y,A)=>{s(b,()=>y(h()),()=>A(b),p+1)});throw b}).then(b=>g!==u&&u?u:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),d=b,b)))};return D({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(g,b,y){let A=!1;(b.bu||(b.bu=[])).push(()=>A=!0);const w=()=>{A||y()},v=a?()=>{const T=a(w,C=>zm(g,C));T&&(b.bum||(b.bum=[])).push(T)}:w;d?v():m().then(()=>!b.isUnmounted&&v())},get __asyncResolved(){return d},setup(){const g=Ne;if(Zo(g),d)return()=>Da(d,g);const b=v=>{u=null,sl(v,g,13,!n)};if(r&&g.suspense||yn)return m().then(v=>()=>Da(v,g)).catch(v=>(b(v),()=>n?Me(n,{error:v}):null));const y=Q(!1),A=Q(),w=Q(!!l);return l&&setTimeout(()=>{w.value=!1},l),o!=null&&setTimeout(()=>{if(!y.value&&!A.value){const v=new Error(`Async component timed out after ${o}ms.`);b(v),A.value=v}},o),m().then(()=>{y.value=!0,g.parent&&dl(g.parent.vnode)&&g.parent.update()}).catch(v=>{b(v),A.value=v}),()=>{if(y.value&&d)return Da(d,g);if(A.value&&n)return Me(n,{error:A.value});if(i&&!w.value)return Me(i)}}})}function Da(e,t){const{ref:i,props:n,children:l,ce:a}=t.vnode,o=Me(e,n,l);return o.ref=i,o.ce=a,delete t.vnode.ce,o}const dl=e=>e.type.__isKeepAlive;function qm(e,t){Ld(e,"a",t)}function Um(e,t){Ld(e,"da",t)}function Ld(e,t,i=Ne){const n=e.__wdc||(e.__wdc=()=>{let l=i;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(ca(t,n,i),i){let l=i.parent;for(;l&&l.parent;)dl(l.parent.vnode)&&Wm(n,t,i,l),l=l.parent}}function Wm(e,t,i,n){const l=ca(t,e,n,!0);Vt(()=>{Ho(n[t],l)},i)}function ca(e,t,i=Ne,n=!1){if(i){const l=i[e]||(i[e]=[]),a=t.__weh||(t.__weh=(...o)=>{ui();const r=ul(i),s=Rt(t,i,e,o);return r(),pi(),s});return n?l.unshift(a):l.push(a),a}}const hi=e=>(t,i=Ne)=>{(!yn||e==="sp")&&ca(e,(...n)=>t(...n),i)},Gm=hi("bm"),de=hi("m"),Ym=hi("bu"),Sd=hi("u"),tr=hi("bum"),Vt=hi("um"),Km=hi("sp"),Jm=hi("rtg"),Qm=hi("rtc");function Xm(e,t=Ne){ca("ec",e,t)}const Zm="components";function Pe(e,t){return t0(Zm,e,!0,t)||e}const e0=Symbol.for("v-ndc");function t0(e,t,i=!0,n=!1){const l=ht||Ne;if(l){const a=l.type;{const r=N0(a,!1);if(r&&(r===t||r===ot(t)||r===ol(ot(t))))return a}const o=Zr(l[e]||a[e],t)||Zr(l.appContext[e],t);return!o&&n?a:o}}function Zr(e,t){return e&&(e[t]||e[ot(t)]||e[ol(ot(t))])}function i5(e,t,i,n){let l;const a=i,o=ie(e);if(o||Ie(e)){const r=o&&Vi(e);let s=!1,u=!1;r&&(s=!Et(e),u=Ti(e),e=oa(e)),l=new Array(e.length);for(let d=0,p=e.length;d<p;d++)l[d]=t(s?u?zl(Fe(e[d])):Fe(e[d]):e[d],d,void 0,a)}else if(typeof e=="number"){l=new Array(e);for(let r=0;r<e;r++)l[r]=t(r+1,r,void 0,a)}else if(Ae(e))if(e[Symbol.iterator])l=Array.from(e,(r,s)=>t(r,s,void 0,a));else{const r=Object.keys(e);l=new Array(r.length);for(let s=0,u=r.length;s<u;s++){const d=r[s];l[s]=t(e[d],d,s,a)}}else l=[];return l}const co=e=>e?Zd(e)?pa(e):co(e.parent):null,Fn=Be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>co(e.parent),$root:e=>co(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Cd(e),$forceUpdate:e=>e.f||(e.f=()=>{Qo(e.update)}),$nextTick:e=>e.n||(e.n=xt.bind(e.proxy)),$watch:e=>w0.bind(e)}),Ia=(e,t)=>e!==Ee&&!e.__isScriptSetup&&_e(e,t),i0={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:i,setupState:n,data:l,props:a,accessCache:o,type:r,appContext:s}=e;let u;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return n[t];case 2:return l[t];case 4:return i[t];case 3:return a[t]}else{if(Ia(n,t))return o[t]=1,n[t];if(l!==Ee&&_e(l,t))return o[t]=2,l[t];if((u=e.propsOptions[0])&&_e(u,t))return o[t]=3,a[t];if(i!==Ee&&_e(i,t))return o[t]=4,i[t];uo&&(o[t]=0)}}const d=Fn[t];let p,h;if(d)return t==="$attrs"&&Ke(e.attrs,"get",""),d(e);if((p=r.__cssModules)&&(p=p[t]))return p;if(i!==Ee&&_e(i,t))return o[t]=4,i[t];if(h=s.config.globalProperties,_e(h,t))return h[t]},set({_:e},t,i){const{data:n,setupState:l,ctx:a}=e;return Ia(l,t)?(l[t]=i,!0):n!==Ee&&_e(n,t)?(n[t]=i,!0):_e(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=i,!0)},has({_:{data:e,setupState:t,accessCache:i,ctx:n,appContext:l,propsOptions:a,type:o}},r){let s,u;return!!(i[r]||e!==Ee&&r[0]!=="$"&&_e(e,r)||Ia(t,r)||(s=a[0])&&_e(s,r)||_e(n,r)||_e(Fn,r)||_e(l.config.globalProperties,r)||(u=o.__cssModules)&&u[r])},defineProperty(e,t,i){return i.get!=null?e._.accessCache[t]=0:_e(i,"value")&&this.set(e,t,i.value,null),Reflect.defineProperty(e,t,i)}};function es(e){return ie(e)?e.reduce((t,i)=>(t[i]=null,t),{}):e}let uo=!0;function n0(e){const t=Cd(e),i=e.proxy,n=e.ctx;uo=!1,t.beforeCreate&&ts(t.beforeCreate,e,"bc");const{data:l,computed:a,methods:o,watch:r,provide:s,inject:u,created:d,beforeMount:p,mounted:h,beforeUpdate:m,updated:g,activated:b,deactivated:y,beforeDestroy:A,beforeUnmount:w,destroyed:v,unmounted:T,render:C,renderTracked:N,renderTriggered:M,errorCaptured:H,serverPrefetch:L,expose:B,inheritAttrs:F,components:O,directives:J,filters:U}=t;if(u&&l0(u,n,null),o)for(const le in o){const K=o[le];ae(K)&&(n[le]=K.bind(i))}if(l){const le=l.call(i,i);Ae(le)&&(e.data=Hi(le))}if(uo=!0,a)for(const le in a){const K=a[le],ce=ae(K)?K.bind(i,i):ae(K.get)?K.get.bind(i,i):Yt,rt=!ae(K)&&ae(K.set)?K.set.bind(i):Yt,Xe=E({get:ce,set:rt});Object.defineProperty(n,le,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:$e=>Xe.value=$e})}if(r)for(const le in r)Pd(r[le],n,i,le);if(s){const le=ae(s)?s.call(i):s;Reflect.ownKeys(le).forEach(K=>{It(K,le[K])})}d&&ts(d,e,"c");function V(le,K){ie(K)?K.forEach(ce=>le(ce.bind(i))):K&&le(K.bind(i))}if(V(Gm,p),V(de,h),V(Ym,m),V(Sd,g),V(qm,b),V(Um,y),V(Xm,H),V(Qm,N),V(Jm,M),V(tr,w),V(Vt,T),V(Km,L),ie(B))if(B.length){const le=e.exposed||(e.exposed={});B.forEach(K=>{Object.defineProperty(le,K,{get:()=>i[K],set:ce=>i[K]=ce,enumerable:!0})})}else e.exposed||(e.exposed={});C&&e.render===Yt&&(e.render=C),F!=null&&(e.inheritAttrs=F),O&&(e.components=O),J&&(e.directives=J),L&&Zo(e)}function l0(e,t,i=Yt){ie(e)&&(e=po(e));for(const n in e){const l=e[n];let a;Ae(l)?"default"in l?a=we(l.from||n,l.default,!0):a=we(l.from||n):a=we(l),Ce(a)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[n]=a}}function ts(e,t,i){Rt(ie(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,i)}function Pd(e,t,i,n){let l=n.includes(".")?qd(i,n):()=>i[n];if(Ie(e)){const a=t[e];ae(a)&&ke(l,a)}else if(ae(e))ke(l,e.bind(i));else if(Ae(e))if(ie(e))e.forEach(a=>Pd(a,t,i,n));else{const a=ae(e.handler)?e.handler.bind(i):t[e.handler];ae(a)&&ke(l,a,e)}}function Cd(e){const t=e.type,{mixins:i,extends:n}=t,{mixins:l,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,r=a.get(t);let s;return r?s=r:!l.length&&!i&&!n?s=t:(s={},l.length&&l.forEach(u=>Kl(s,u,o,!0)),Kl(s,t,o)),Ae(t)&&a.set(t,s),s}function Kl(e,t,i,n=!1){const{mixins:l,extends:a}=t;a&&Kl(e,a,i,!0),l&&l.forEach(o=>Kl(e,o,i,!0));for(const o in t)if(!(n&&o==="expose")){const r=a0[o]||i&&i[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const a0={data:is,props:ns,emits:ns,methods:$n,computed:$n,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:$n,directives:$n,watch:r0,provide:is,inject:o0};function is(e,t){return t?e?function(){return Be(ae(e)?e.call(this,this):e,ae(t)?t.call(this,this):t)}:t:e}function o0(e,t){return $n(po(e),po(t))}function po(e){if(ie(e)){const t={};for(let i=0;i<e.length;i++)t[e[i]]=e[i];return t}return e}function Ze(e,t){return e?[...new Set([].concat(e,t))]:t}function $n(e,t){return e?Be(Object.create(null),e,t):t}function ns(e,t){return e?ie(e)&&ie(t)?[...new Set([...e,...t])]:Be(Object.create(null),es(e),es(t??{})):t}function r0(e,t){if(!e)return t;if(!t)return e;const i=Be(Object.create(null),e);for(const n in t)i[n]=Ze(e[n],t[n]);return i}function Od(){return{app:null,config:{isNativeTag:jc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let s0=0;function c0(e,t){return function(n,l=null){ae(n)||(n=Be({},n)),l!=null&&!Ae(l)&&(l=null);const a=Od(),o=new WeakSet,r=[];let s=!1;const u=a.app={_uid:s0++,_component:n,_props:l,_container:null,_context:a,_instance:null,version:z0,get config(){return a.config},set config(d){},use(d,...p){return o.has(d)||(d&&ae(d.install)?(o.add(d),d.install(u,...p)):ae(d)&&(o.add(d),d(u,...p))),u},mixin(d){return a.mixins.includes(d)||a.mixins.push(d),u},component(d,p){return p?(a.components[d]=p,u):a.components[d]},directive(d,p){return p?(a.directives[d]=p,u):a.directives[d]},mount(d,p,h){if(!s){const m=u._ceVNode||Me(n,l);return m.appContext=a,h===!0?h="svg":h===!1&&(h=void 0),p&&t?t(m,d):e(m,d,h),s=!0,u._container=d,d.__vue_app__=u,pa(m.component)}},onUnmount(d){r.push(d)},unmount(){s&&(Rt(r,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(d,p){return a.provides[d]=p,u},runWithContext(d){const p=Fi;Fi=u;try{return d()}finally{Fi=p}}};return u}}let Fi=null;function It(e,t){if(Ne){let i=Ne.provides;const n=Ne.parent&&Ne.parent.provides;n===i&&(i=Ne.provides=Object.create(n)),i[e]=t}}function we(e,t,i=!1){const n=Qt();if(n||Fi){let l=Fi?Fi._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(l&&e in l)return l[e];if(arguments.length>1)return i&&ae(t)?t.call(n&&n.proxy):t}}function Dd(){return!!(Qt()||Fi)}const Id={},Rd=()=>Object.create(Id),Bd=e=>Object.getPrototypeOf(e)===Id;function d0(e,t,i,n=!1){const l={},a=Rd();e.propsDefaults=Object.create(null),$d(e,t,l,a);for(const o in e.propsOptions[0])o in l||(l[o]=void 0);i?e.props=n?l:ud(l):e.type.props?e.props=l:e.props=a,e.attrs=a}function u0(e,t,i,n){const{props:l,attrs:a,vnode:{patchFlag:o}}=e,r=me(l),[s]=e.propsOptions;let u=!1;if((n||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let h=d[p];if(ua(e.emitsOptions,h))continue;const m=t[h];if(s)if(_e(a,h))m!==a[h]&&(a[h]=m,u=!0);else{const g=ot(h);l[g]=ho(s,r,g,m,e,!1)}else m!==a[h]&&(a[h]=m,u=!0)}}}else{$d(e,t,l,a)&&(u=!0);let d;for(const p in r)(!t||!_e(t,p)&&((d=Gi(p))===p||!_e(t,d)))&&(s?i&&(i[p]!==void 0||i[d]!==void 0)&&(l[p]=ho(s,r,p,void 0,e,!0)):delete l[p]);if(a!==r)for(const p in a)(!t||!_e(t,p))&&(delete a[p],u=!0)}u&&ri(e.attrs,"set","")}function $d(e,t,i,n){const[l,a]=e.propsOptions;let o=!1,r;if(t)for(let s in t){if(pn(s))continue;const u=t[s];let d;l&&_e(l,d=ot(s))?!a||!a.includes(d)?i[d]=u:(r||(r={}))[d]=u:ua(e.emitsOptions,s)||(!(s in n)||u!==n[s])&&(n[s]=u,o=!0)}if(a){const s=me(i),u=r||Ee;for(let d=0;d<a.length;d++){const p=a[d];i[p]=ho(l,s,p,u[p],e,!_e(u,p))}}return o}function ho(e,t,i,n,l,a){const o=e[i];if(o!=null){const r=_e(o,"default");if(r&&n===void 0){const s=o.default;if(o.type!==Function&&!o.skipFactory&&ae(s)){const{propsDefaults:u}=l;if(i in u)n=u[i];else{const d=ul(l);n=u[i]=s.call(null,t),d()}}else n=s;l.ce&&l.ce._setProp(i,n)}o[0]&&(a&&!r?n=!1:o[1]&&(n===""||n===Gi(i))&&(n=!0))}return n}const p0=new WeakMap;function Md(e,t,i=!1){const n=i?p0:t.propsCache,l=n.get(e);if(l)return l;const a=e.props,o={},r=[];let s=!1;if(!ae(e)){const d=p=>{s=!0;const[h,m]=Md(p,t,!0);Be(o,h),m&&r.push(...m)};!i&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!a&&!s)return Ae(e)&&n.set(e,dn),dn;if(ie(a))for(let d=0;d<a.length;d++){const p=ot(a[d]);ls(p)&&(o[p]=Ee)}else if(a)for(const d in a){const p=ot(d);if(ls(p)){const h=a[d],m=o[p]=ie(h)||ae(h)?{type:h}:Be({},h),g=m.type;let b=!1,y=!0;if(ie(g))for(let A=0;A<g.length;++A){const w=g[A],v=ae(w)&&w.name;if(v==="Boolean"){b=!0;break}else v==="String"&&(y=!1)}else b=ae(g)&&g.name==="Boolean";m[0]=b,m[1]=y,(b||_e(m,"default"))&&r.push(p)}}const u=[o,r];return Ae(e)&&n.set(e,u),u}function ls(e){return e[0]!=="$"&&!pn(e)}const ir=e=>e==="_"||e==="_ctx"||e==="$stable",nr=e=>ie(e)?e.map(wt):[wt(e)],h0=(e,t,i)=>{if(t._n)return t;const n=Bm((...l)=>nr(t(...l)),i);return n._c=!1,n},Vd=(e,t,i)=>{const n=e._ctx;for(const l in e){if(ir(l))continue;const a=e[l];if(ae(a))t[l]=h0(l,a,n);else if(a!=null){const o=nr(a);t[l]=()=>o}}},Fd=(e,t)=>{const i=nr(t);e.slots.default=()=>i},jd=(e,t,i)=>{for(const n in t)(i||!ir(n))&&(e[n]=t[n])},m0=(e,t,i)=>{const n=e.slots=Rd();if(e.vnode.shapeFlag&32){const l=t._;l?(jd(n,t,i),i&&qc(n,"_",l,!0)):Vd(t,n)}else t&&Fd(e,t)},f0=(e,t,i)=>{const{vnode:n,slots:l}=e;let a=!0,o=Ee;if(n.shapeFlag&32){const r=t._;r?i&&r===1?a=!1:jd(l,t,i):(a=!t.$stable,Vd(t,l)),o=t}else t&&(Fd(e,t),o={default:1});if(a)for(const r in l)!ir(r)&&o[r]==null&&delete l[r]},ut=Yd;function g0(e){return v0(e,Nm)}function v0(e,t){const i=la();i.__VUE__=!0;const{insert:n,remove:l,patchProp:a,createElement:o,createText:r,createComment:s,setText:u,setElementText:d,parentNode:p,nextSibling:h,setScopeId:m=Yt,insertStaticContent:g}=e,b=(_,k,x,I=null,P=null,R=null,W=void 0,z=null,j=!!k.dynamicChildren)=>{if(_===k)return;_&&!Bi(_,k)&&(I=S(_),$e(_,P,R,!0),_=null),k.patchFlag===-2&&(j=!1,k.dynamicChildren=null);const{type:$,ref:ne,shapeFlag:Y}=k;switch($){case ji:y(_,k,x,I);break;case je:A(_,k,x,I);break;case jn:_==null&&w(k,x,I,W);break;case at:O(_,k,x,I,P,R,W,z,j);break;default:Y&1?C(_,k,x,I,P,R,W,z,j):Y&6?J(_,k,x,I,P,R,W,z,j):(Y&64||Y&128)&&$.process(_,k,x,I,P,R,W,z,j,X)}ne!=null&&P?mn(ne,_&&_.ref,R,k||_,!k):ne==null&&_&&_.ref!=null&&mn(_.ref,null,R,_,!0)},y=(_,k,x,I)=>{if(_==null)n(k.el=r(k.children),x,I);else{const P=k.el=_.el;k.children!==_.children&&u(P,k.children)}},A=(_,k,x,I)=>{_==null?n(k.el=s(k.children||""),x,I):k.el=_.el},w=(_,k,x,I)=>{[_.el,_.anchor]=g(_.children,k,x,I,_.el,_.anchor)},v=({el:_,anchor:k},x,I)=>{let P;for(;_&&_!==k;)P=h(_),n(_,x,I),_=P;n(k,x,I)},T=({el:_,anchor:k})=>{let x;for(;_&&_!==k;)x=h(_),l(_),_=x;l(k)},C=(_,k,x,I,P,R,W,z,j)=>{k.type==="svg"?W="svg":k.type==="math"&&(W="mathml"),_==null?N(k,x,I,P,R,W,z,j):L(_,k,P,R,W,z,j)},N=(_,k,x,I,P,R,W,z)=>{let j,$;const{props:ne,shapeFlag:Y,transition:te,dirs:oe}=_;if(j=_.el=o(_.type,R,ne&&ne.is,ne),Y&8?d(j,_.children):Y&16&&H(_.children,j,null,I,P,Ra(_,R),W,z),oe&&Wt(_,null,I,"created"),M(j,_,_.scopeId,W,I),ne){for(const xe in ne)xe!=="value"&&!pn(xe)&&a(j,xe,null,ne[xe],R,I);"value"in ne&&a(j,"value",null,ne.value,R),($=ne.onVnodeBeforeMount)&&bt($,I,_)}oe&&Wt(_,null,I,"beforeMount");const he=Nd(P,te);he&&te.beforeEnter(j),n(j,k,x),(($=ne&&ne.onVnodeMounted)||he||oe)&&ut(()=>{$&&bt($,I,_),he&&te.enter(j),oe&&Wt(_,null,I,"mounted")},P)},M=(_,k,x,I,P)=>{if(x&&m(_,x),I)for(let R=0;R<I.length;R++)m(_,I[R]);if(P){let R=P.subTree;if(k===R||Gd(R.type)&&(R.ssContent===k||R.ssFallback===k)){const W=P.vnode;M(_,W,W.scopeId,W.slotScopeIds,P.parent)}}},H=(_,k,x,I,P,R,W,z,j=0)=>{for(let $=j;$<_.length;$++){const ne=_[$]=z?wi(_[$]):wt(_[$]);b(null,ne,k,x,I,P,R,W,z)}},L=(_,k,x,I,P,R,W)=>{const z=k.el=_.el;let{patchFlag:j,dynamicChildren:$,dirs:ne}=k;j|=_.patchFlag&16;const Y=_.props||Ee,te=k.props||Ee;let oe;if(x&&Oi(x,!1),(oe=te.onVnodeBeforeUpdate)&&bt(oe,x,k,_),ne&&Wt(k,_,x,"beforeUpdate"),x&&Oi(x,!0),(Y.innerHTML&&te.innerHTML==null||Y.textContent&&te.textContent==null)&&d(z,""),$?B(_.dynamicChildren,$,z,x,I,Ra(k,P),R):W||K(_,k,z,null,x,I,Ra(k,P),R,!1),j>0){if(j&16)F(z,Y,te,x,P);else if(j&2&&Y.class!==te.class&&a(z,"class",null,te.class,P),j&4&&a(z,"style",Y.style,te.style,P),j&8){const he=k.dynamicProps;for(let xe=0;xe<he.length;xe++){const be=he[xe],lt=Y[be],Ge=te[be];(Ge!==lt||be==="value")&&a(z,be,lt,Ge,P,x)}}j&1&&_.children!==k.children&&d(z,k.children)}else!W&&$==null&&F(z,Y,te,x,P);((oe=te.onVnodeUpdated)||ne)&&ut(()=>{oe&&bt(oe,x,k,_),ne&&Wt(k,_,x,"updated")},I)},B=(_,k,x,I,P,R,W)=>{for(let z=0;z<k.length;z++){const j=_[z],$=k[z],ne=j.el&&(j.type===at||!Bi(j,$)||j.shapeFlag&198)?p(j.el):x;b(j,$,ne,null,I,P,R,W,!0)}},F=(_,k,x,I,P)=>{if(k!==x){if(k!==Ee)for(const R in k)!pn(R)&&!(R in x)&&a(_,R,k[R],null,P,I);for(const R in x){if(pn(R))continue;const W=x[R],z=k[R];W!==z&&R!=="value"&&a(_,R,z,W,P,I)}"value"in x&&a(_,"value",k.value,x.value,P)}},O=(_,k,x,I,P,R,W,z,j)=>{const $=k.el=_?_.el:r(""),ne=k.anchor=_?_.anchor:r("");let{patchFlag:Y,dynamicChildren:te,slotScopeIds:oe}=k;oe&&(z=z?z.concat(oe):oe),_==null?(n($,x,I),n(ne,x,I),H(k.children||[],x,ne,P,R,W,z,j)):Y>0&&Y&64&&te&&_.dynamicChildren?(B(_.dynamicChildren,te,x,P,R,W,z),(k.key!=null||P&&k===P.subTree)&&Hd(_,k,!0)):K(_,k,x,ne,P,R,W,z,j)},J=(_,k,x,I,P,R,W,z,j)=>{k.slotScopeIds=z,_==null?k.shapeFlag&512?P.ctx.activate(k,x,I,W,j):U(k,x,I,P,R,W,j):Z(_,k,j)},U=(_,k,x,I,P,R,W)=>{const z=_.component=$0(_,I,P);if(dl(_)&&(z.ctx.renderer=X),M0(z,!1,W),z.asyncDep){if(P&&P.registerDep(z,V,W),!_.el){const j=z.subTree=Me(je);A(null,j,k,x),_.placeholder=j.el}}else V(z,_,k,x,P,R,W)},Z=(_,k,x)=>{const I=k.component=_.component;if(L0(_,k,x))if(I.asyncDep&&!I.asyncResolved){le(I,k,x);return}else I.next=k,I.update();else k.el=_.el,I.vnode=k},V=(_,k,x,I,P,R,W)=>{const z=()=>{if(_.isMounted){let{next:Y,bu:te,u:oe,parent:he,vnode:xe}=_;{const ct=zd(_);if(ct){Y&&(Y.el=xe.el,le(_,Y,W)),ct.asyncDep.then(()=>{_.isUnmounted||z()});return}}let be=Y,lt;Oi(_,!1),Y?(Y.el=xe.el,le(_,Y,W)):Y=xe,te&&Ml(te),(lt=Y.props&&Y.props.onVnodeBeforeUpdate)&&bt(lt,he,Y,xe),Oi(_,!0);const Ge=Ba(_),Pt=_.subTree;_.subTree=Ge,b(Pt,Ge,p(Pt.el),S(Pt),_,P,R),Y.el=Ge.el,be===null&&Wd(_,Ge.el),oe&&ut(oe,P),(lt=Y.props&&Y.props.onVnodeUpdated)&&ut(()=>bt(lt,he,Y,xe),P)}else{let Y;const{el:te,props:oe}=k,{bm:he,m:xe,parent:be,root:lt,type:Ge}=_,Pt=fn(k);if(Oi(_,!1),he&&Ml(he),!Pt&&(Y=oe&&oe.onVnodeBeforeMount)&&bt(Y,be,k),Oi(_,!0),te&&Te){const ct=()=>{_.subTree=Ba(_),Te(te,_.subTree,_,P,null)};Pt&&Ge.__asyncHydrate?Ge.__asyncHydrate(te,_,ct):ct()}else{lt.ce&&lt.ce._def.shadowRoot!==!1&&lt.ce._injectChildStyle(Ge);const ct=_.subTree=Ba(_);b(null,ct,x,I,_,P,R),k.el=ct.el}if(xe&&ut(xe,P),!Pt&&(Y=oe&&oe.onVnodeMounted)){const ct=k;ut(()=>bt(Y,be,ct),P)}(k.shapeFlag&256||be&&fn(be.vnode)&&be.vnode.shapeFlag&256)&&_.a&&ut(_.a,P),_.isMounted=!0,k=x=I=null}};_.scope.on();const j=_.effect=new Kc(z);_.scope.off();const $=_.update=j.run.bind(j),ne=_.job=j.runIfDirty.bind(j);ne.i=_,ne.id=_.uid,j.scheduler=()=>Qo(ne),Oi(_,!0),$()},le=(_,k,x)=>{k.component=_;const I=_.vnode.props;_.vnode=k,_.next=null,u0(_,k.props,I,x),f0(_,k.children,x),ui(),Yr(_),pi()},K=(_,k,x,I,P,R,W,z,j=!1)=>{const $=_&&_.children,ne=_?_.shapeFlag:0,Y=k.children,{patchFlag:te,shapeFlag:oe}=k;if(te>0){if(te&128){rt($,Y,x,I,P,R,W,z,j);return}else if(te&256){ce($,Y,x,I,P,R,W,z,j);return}}oe&8?(ne&16&&We($,P,R),Y!==$&&d(x,Y)):ne&16?oe&16?rt($,Y,x,I,P,R,W,z,j):We($,P,R,!0):(ne&8&&d(x,""),oe&16&&H(Y,x,I,P,R,W,z,j))},ce=(_,k,x,I,P,R,W,z,j)=>{_=_||dn,k=k||dn;const $=_.length,ne=k.length,Y=Math.min($,ne);let te;for(te=0;te<Y;te++){const oe=k[te]=j?wi(k[te]):wt(k[te]);b(_[te],oe,x,null,P,R,W,z,j)}$>ne?We(_,P,R,!0,!1,Y):H(k,x,I,P,R,W,z,j,Y)},rt=(_,k,x,I,P,R,W,z,j)=>{let $=0;const ne=k.length;let Y=_.length-1,te=ne-1;for(;$<=Y&&$<=te;){const oe=_[$],he=k[$]=j?wi(k[$]):wt(k[$]);if(Bi(oe,he))b(oe,he,x,null,P,R,W,z,j);else break;$++}for(;$<=Y&&$<=te;){const oe=_[Y],he=k[te]=j?wi(k[te]):wt(k[te]);if(Bi(oe,he))b(oe,he,x,null,P,R,W,z,j);else break;Y--,te--}if($>Y){if($<=te){const oe=te+1,he=oe<ne?k[oe].el:I;for(;$<=te;)b(null,k[$]=j?wi(k[$]):wt(k[$]),x,he,P,R,W,z,j),$++}}else if($>te)for(;$<=Y;)$e(_[$],P,R,!0),$++;else{const oe=$,he=$,xe=new Map;for($=he;$<=te;$++){const dt=k[$]=j?wi(k[$]):wt(k[$]);dt.key!=null&&xe.set(dt.key,$)}let be,lt=0;const Ge=te-he+1;let Pt=!1,ct=0;const On=new Array(Ge);for($=0;$<Ge;$++)On[$]=0;for($=oe;$<=Y;$++){const dt=_[$];if(lt>=Ge){$e(dt,P,R,!0);continue}let zt;if(dt.key!=null)zt=xe.get(dt.key);else for(be=he;be<=te;be++)if(On[be-he]===0&&Bi(dt,k[be])){zt=be;break}zt===void 0?$e(dt,P,R,!0):(On[zt-he]=$+1,zt>=ct?ct=zt:Pt=!0,b(dt,k[zt],x,null,P,R,W,z,j),lt++)}const Nr=Pt?_0(On):dn;for(be=Nr.length-1,$=Ge-1;$>=0;$--){const dt=he+$,zt=k[dt],Hr=k[dt+1],zr=dt+1<ne?Hr.el||Hr.placeholder:I;On[$]===0?b(null,zt,x,zr,P,R,W,z,j):Pt&&(be<0||$!==Nr[be]?Xe(zt,x,zr,2):be--)}}},Xe=(_,k,x,I,P=null)=>{const{el:R,type:W,transition:z,children:j,shapeFlag:$}=_;if($&6){Xe(_.component.subTree,k,x,I);return}if($&128){_.suspense.move(k,x,I);return}if($&64){W.move(_,k,x,X);return}if(W===at){n(R,k,x);for(let Y=0;Y<j.length;Y++)Xe(j[Y],k,x,I);n(_.anchor,k,x);return}if(W===jn){v(_,k,x);return}if(I!==2&&$&1&&z)if(I===0)z.beforeEnter(R),n(R,k,x),ut(()=>z.enter(R),P);else{const{leave:Y,delayLeave:te,afterLeave:oe}=z,he=()=>{_.ctx.isUnmounted?l(R):n(R,k,x)},xe=()=>{R._isLeaving&&R[oi](!0),Y(R,()=>{he(),oe&&oe()})};te?te(R,he,xe):xe()}else n(R,k,x)},$e=(_,k,x,I=!1,P=!1)=>{const{type:R,props:W,ref:z,children:j,dynamicChildren:$,shapeFlag:ne,patchFlag:Y,dirs:te,cacheIndex:oe}=_;if(Y===-2&&(P=!1),z!=null&&(ui(),mn(z,null,x,_,!0),pi()),oe!=null&&(k.renderCache[oe]=void 0),ne&256){k.ctx.deactivate(_);return}const he=ne&1&&te,xe=!fn(_);let be;if(xe&&(be=W&&W.onVnodeBeforeUnmount)&&bt(be,k,_),ne&6)Ht(_.component,x,I);else{if(ne&128){_.suspense.unmount(x,I);return}he&&Wt(_,null,k,"beforeUnmount"),ne&64?_.type.remove(_,k,x,X,I):$&&!$.hasOnce&&(R!==at||Y>0&&Y&64)?We($,k,x,!1,!0):(R===at&&Y&384||!P&&ne&16)&&We(j,k,x),I&&st(_)}(xe&&(be=W&&W.onVnodeUnmounted)||he)&&ut(()=>{be&&bt(be,k,_),he&&Wt(_,null,k,"unmounted")},x)},st=_=>{const{type:k,el:x,anchor:I,transition:P}=_;if(k===at){ei(x,I);return}if(k===jn){T(_);return}const R=()=>{l(x),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(_.shapeFlag&1&&P&&!P.persisted){const{leave:W,delayLeave:z}=P,j=()=>W(x,R);z?z(_.el,R,j):j()}else R()},ei=(_,k)=>{let x;for(;_!==k;)x=h(_),l(_),_=x;l(k)},Ht=(_,k,x)=>{const{bum:I,scope:P,job:R,subTree:W,um:z,m:j,a:$}=_;as(j),as($),I&&Ml(I),P.stop(),R&&(R.flags|=8,$e(W,_,k,x)),z&&ut(z,k),ut(()=>{_.isUnmounted=!0},k)},We=(_,k,x,I=!1,P=!1,R=0)=>{for(let W=R;W<_.length;W++)$e(_[W],k,x,I,P)},S=_=>{if(_.shapeFlag&6)return S(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const k=h(_.anchor||_.el),x=k&&k[$m];return x?h(x):k};let G=!1;const q=(_,k,x)=>{_==null?k._vnode&&$e(k._vnode,null,null,!0):b(k._vnode||null,_,k,null,null,null,x),k._vnode=_,G||(G=!0,Yr(),Wl(),G=!1)},X={p:b,um:$e,m:Xe,r:st,mt:U,mc:H,pc:K,pbc:B,n:S,o:e};let fe,Te;return t&&([fe,Te]=t(X)),{render:q,hydrate:fe,createApp:c0(q,fe)}}function Ra({type:e,props:t},i){return i==="svg"&&e==="foreignObject"||i==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:i}function Oi({effect:e,job:t},i){i?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Nd(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Hd(e,t,i=!1){const n=e.children,l=t.children;if(ie(n)&&ie(l))for(let a=0;a<n.length;a++){const o=n[a];let r=l[a];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=l[a]=wi(l[a]),r.el=o.el),!i&&r.patchFlag!==-2&&Hd(o,r)),r.type===ji&&r.patchFlag!==-1&&(r.el=o.el),r.type===je&&!r.el&&(r.el=o.el)}}function _0(e){const t=e.slice(),i=[0];let n,l,a,o,r;const s=e.length;for(n=0;n<s;n++){const u=e[n];if(u!==0){if(l=i[i.length-1],e[l]<u){t[n]=l,i.push(n);continue}for(a=0,o=i.length-1;a<o;)r=a+o>>1,e[i[r]]<u?a=r+1:o=r;u<e[i[a]]&&(a>0&&(t[n]=i[a-1]),i[a]=n)}}for(a=i.length,o=i[a-1];a-- >0;)i[a]=o,o=t[o];return i}function zd(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:zd(t)}function as(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const b0=Symbol.for("v-scx"),y0=()=>we(b0);function da(e,t){return lr(e,null,t)}function ke(e,t,i){return lr(e,t,i)}function lr(e,t,i=Ee){const{immediate:n,deep:l,flush:a,once:o}=i,r=Be({},i),s=t&&n||!t&&a!=="post";let u;if(yn){if(a==="sync"){const m=y0();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!s){const m=()=>{};return m.stop=Yt,m.resume=Yt,m.pause=Yt,m}}const d=Ne;r.call=(m,g,b)=>Rt(m,d,g,b);let p=!1;a==="post"?r.scheduler=m=>{ut(m,d&&d.suspense)}:a!=="sync"&&(p=!0,r.scheduler=(m,g)=>{g?m():Qo(m)}),r.augmentJob=m=>{t&&(m.flags|=4),p&&(m.flags|=2,d&&(m.id=d.uid,m.i=d))};const h=Om(e,t,r);return yn&&(u?u.push(h):s&&h()),h}function w0(e,t,i){const n=this.proxy,l=Ie(e)?e.includes(".")?qd(n,e):()=>n[e]:e.bind(n,n);let a;ae(t)?a=t:(a=t.handler,i=t);const o=ul(this),r=lr(l,a.bind(n),i);return o(),r}function qd(e,t){const i=t.split(".");return()=>{let n=e;for(let l=0;l<i.length&&n;l++)n=n[i[l]];return n}}const k0=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ot(t)}Modifiers`]||e[`${Gi(t)}Modifiers`];function E0(e,t,...i){if(e.isUnmounted)return;const n=e.vnode.props||Ee;let l=i;const a=t.startsWith("update:"),o=a&&k0(n,t.slice(7));o&&(o.trim&&(l=i.map(d=>Ie(d)?d.trim():d)),o.number&&(l=i.map(Nl)));let r,s=n[r=xa(t)]||n[r=xa(ot(t))];!s&&a&&(s=n[r=xa(Gi(t))]),s&&Rt(s,e,6,l);const u=n[r+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,Rt(u,e,6,l)}}const A0=new WeakMap;function Ud(e,t,i=!1){const n=i?A0:t.emitsCache,l=n.get(e);if(l!==void 0)return l;const a=e.emits;let o={},r=!1;if(!ae(e)){const s=u=>{const d=Ud(u,t,!0);d&&(r=!0,Be(o,d))};!i&&t.mixins.length&&t.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!a&&!r?(Ae(e)&&n.set(e,null),null):(ie(a)?a.forEach(s=>o[s]=null):Be(o,a),Ae(e)&&n.set(e,o),o)}function ua(e,t){return!e||!ll(t)?!1:(t=t.slice(2).replace(/Once$/,""),_e(e,t[0].toLowerCase()+t.slice(1))||_e(e,Gi(t))||_e(e,t))}function Ba(e){const{type:t,vnode:i,proxy:n,withProxy:l,propsOptions:[a],slots:o,attrs:r,emit:s,render:u,renderCache:d,props:p,data:h,setupState:m,ctx:g,inheritAttrs:b}=e,y=Gl(e);let A,w;try{if(i.shapeFlag&4){const T=l||n,C=T;A=wt(u.call(C,T,d,p,m,h,g)),w=r}else{const T=t;A=wt(T.length>1?T(p,{attrs:r,slots:o,emit:s}):T(p,null)),w=t.props?r:T0(r)}}catch(T){Nn.length=0,sl(T,e,1),A=Me(je)}let v=A;if(w&&b!==!1){const T=Object.keys(w),{shapeFlag:C}=v;T.length&&C&7&&(a&&T.some(No)&&(w=x0(w,a)),v=xi(v,w,!1,!0))}return i.dirs&&(v=xi(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(i.dirs):i.dirs),i.transition&&zi(v,i.transition),A=v,Gl(y),A}const T0=e=>{let t;for(const i in e)(i==="class"||i==="style"||ll(i))&&((t||(t={}))[i]=e[i]);return t},x0=(e,t)=>{const i={};for(const n in e)(!No(n)||!(n.slice(9)in t))&&(i[n]=e[n]);return i};function L0(e,t,i){const{props:n,children:l,component:a}=e,{props:o,children:r,patchFlag:s}=t,u=a.emitsOptions;if(t.dirs||t.transition)return!0;if(i&&s>=0){if(s&1024)return!0;if(s&16)return n?os(n,o,u):!!o;if(s&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const h=d[p];if(o[h]!==n[h]&&!ua(u,h))return!0}}}else return(l||r)&&(!r||!r.$stable)?!0:n===o?!1:n?o?os(n,o,u):!0:!!o;return!1}function os(e,t,i){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let l=0;l<n.length;l++){const a=n[l];if(t[a]!==e[a]&&!ua(i,a))return!0}return!1}function Wd({vnode:e,parent:t},i){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=i,t=t.parent;else break}}const Gd=e=>e.__isSuspense;function Yd(e,t){t&&t.pendingBranch?ie(e)?t.effects.push(...e):t.effects.push(e):Rm(e)}const at=Symbol.for("v-fgt"),ji=Symbol.for("v-txt"),je=Symbol.for("v-cmt"),jn=Symbol.for("v-stc"),Nn=[];let mt=null;function Kd(e=!1){Nn.push(mt=e?null:[])}function S0(){Nn.pop(),mt=Nn[Nn.length-1]||null}let Qn=1;function Jl(e,t=!1){Qn+=e,e<0&&mt&&t&&(mt.hasOnce=!0)}function Jd(e){return e.dynamicChildren=Qn>0?mt||dn:null,S0(),Qn>0&&mt&&mt.push(e),e}function P0(e,t,i,n,l,a){return Jd(sn(e,t,i,n,l,a,!0))}function C0(e,t,i,n,l){return Jd(Me(e,t,i,n,l,!0))}function Ql(e){return e?e.__v_isVNode===!0:!1}function Bi(e,t){return e.type===t.type&&e.key===t.key}const Qd=({key:e})=>e??null,Vl=({ref:e,ref_key:t,ref_for:i})=>(typeof e=="number"&&(e=""+e),e!=null?Ie(e)||Ce(e)||ae(e)?{i:ht,r:e,k:t,f:!!i}:e:null);function sn(e,t=null,i=null,n=0,l=null,a=e===at?0:1,o=!1,r=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Qd(t),ref:t&&Vl(t),scopeId:yd,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:n,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:ht};return r?(ar(s,i),a&128&&e.normalize(s)):i&&(s.shapeFlag|=Ie(i)?8:16),Qn>0&&!o&&mt&&(s.patchFlag>0||a&6)&&s.patchFlag!==32&&mt.push(s),s}const Me=O0;function O0(e,t=null,i=null,n=0,l=null,a=!1){if((!e||e===e0)&&(e=je),Ql(e)){const r=xi(e,t,!0);return i&&ar(r,i),Qn>0&&!a&&mt&&(r.shapeFlag&6?mt[mt.indexOf(e)]=r:mt.push(r)),r.patchFlag=-2,r}if(H0(e)&&(e=e.__vccOpts),t){t=D0(t);let{class:r,style:s}=t;r&&!Ie(r)&&(t.class=Uo(r)),Ae(s)&&(Jo(s)&&!ie(s)&&(s=Be({},s)),t.style=qo(s))}const o=Ie(e)?1:Gd(e)?128:wd(e)?64:Ae(e)?4:ae(e)?2:0;return sn(e,t,i,n,l,o,a,!0)}function D0(e){return e?Jo(e)||Bd(e)?Be({},e):e:null}function xi(e,t,i=!1,n=!1){const{props:l,ref:a,patchFlag:o,children:r,transition:s}=e,u=t?I0(l||{},t):l,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Qd(u),ref:t&&t.ref?i&&a?ie(a)?a.concat(Vl(t)):[a,Vl(t)]:Vl(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==at?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:s,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&xi(e.ssContent),ssFallback:e.ssFallback&&xi(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return s&&n&&zi(d,s.clone(d)),d}function Xd(e=" ",t=0){return Me(ji,null,e,t)}function n5(e,t){const i=Me(jn,null,e);return i.staticCount=t,i}function l5(e="",t=!1){return t?(Kd(),C0(je,null,e)):Me(je,null,e)}function wt(e){return e==null||typeof e=="boolean"?Me(je):ie(e)?Me(at,null,e.slice()):Ql(e)?wi(e):Me(ji,null,String(e))}function wi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:xi(e)}function ar(e,t){let i=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(ie(t))i=16;else if(typeof t=="object")if(n&65){const l=t.default;l&&(l._c&&(l._d=!1),ar(e,l()),l._c&&(l._d=!0));return}else{i=32;const l=t._;!l&&!Bd(t)?t._ctx=ht:l===3&&ht&&(ht.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ae(t)?(t={default:t,_ctx:ht},i=32):(t=String(t),n&64?(i=16,t=[Xd(t)]):i=8);e.children=t,e.shapeFlag|=i}function I0(...e){const t={};for(let i=0;i<e.length;i++){const n=e[i];for(const l in n)if(l==="class")t.class!==n.class&&(t.class=Uo([t.class,n.class]));else if(l==="style")t.style=qo([t.style,n.style]);else if(ll(l)){const a=t[l],o=n[l];o&&a!==o&&!(ie(a)&&a.includes(o))&&(t[l]=a?[].concat(a,o):o)}else l!==""&&(t[l]=n[l])}return t}function bt(e,t,i,n=null){Rt(e,t,7,[i,n])}const R0=Od();let B0=0;function $0(e,t,i){const n=e.type,l=(t?t.appContext:e.appContext)||R0,a={uid:B0++,vnode:e,type:n,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new em(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Md(n,l),emitsOptions:Ud(n,l),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:n.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=E0.bind(null,a),e.ce&&e.ce(a),a}let Ne=null;const Qt=()=>Ne||ht;let Xl,mo;{const e=la(),t=(i,n)=>{let l;return(l=e[i])||(l=e[i]=[]),l.push(n),a=>{l.length>1?l.forEach(o=>o(a)):l[0](a)}};Xl=t("__VUE_INSTANCE_SETTERS__",i=>Ne=i),mo=t("__VUE_SSR_SETTERS__",i=>yn=i)}const ul=e=>{const t=Ne;return Xl(e),e.scope.on(),()=>{e.scope.off(),Xl(t)}},rs=()=>{Ne&&Ne.scope.off(),Xl(null)};function Zd(e){return e.vnode.shapeFlag&4}let yn=!1;function M0(e,t=!1,i=!1){t&&mo(t);const{props:n,children:l}=e.vnode,a=Zd(e);d0(e,n,a,t),m0(e,l,i||t);const o=a?V0(e,t):void 0;return t&&mo(!1),o}function V0(e,t){const i=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,i0);const{setup:n}=i;if(n){ui();const l=e.setupContext=n.length>1?j0(e):null,a=ul(e),o=rl(n,e,0,[e.props,l]),r=Nc(o);if(pi(),a(),(r||e.sp)&&!fn(e)&&Zo(e),r){if(o.then(rs,rs),t)return o.then(s=>{ss(e,s)}).catch(s=>{sl(s,e,0)});e.asyncDep=o}else ss(e,o)}else eu(e)}function ss(e,t,i){ae(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ae(t)&&(e.setupState=md(t)),eu(e)}function eu(e,t,i){const n=e.type;e.render||(e.render=n.render||Yt);{const l=ul(e);ui();try{n0(e)}finally{pi(),l()}}}const F0={get(e,t){return Ke(e,"get",""),e[t]}};function j0(e){const t=i=>{e.exposed=i||{}};return{attrs:new Proxy(e.attrs,F0),slots:e.slots,emit:e.emit,expose:t}}function pa(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(md(wm(e.exposed)),{get(t,i){if(i in t)return t[i];if(i in Fn)return Fn[i](e)},has(t,i){return i in t||i in Fn}})):e.proxy}function N0(e,t=!0){return ae(e)?e.displayName||e.name:e.name||t&&e.__name}function H0(e){return ae(e)&&"__vccOpts"in e}const E=(e,t)=>Pm(e,t,yn);function c(e,t,i){const n=(a,o,r)=>{Jl(-1);try{return Me(a,o,r)}finally{Jl(1)}},l=arguments.length;return l===2?Ae(t)&&!ie(t)?Ql(t)?n(e,null,[t]):n(e,t):n(e,null,t):(l>3?i=Array.prototype.slice.call(arguments,2):l===3&&Ql(i)&&(i=[i]),n(e,t,i))}const z0="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fo;const cs=typeof window<"u"&&window.trustedTypes;if(cs)try{fo=cs.createPolicy("vue",{createHTML:e=>e})}catch{}const tu=fo?e=>fo.createHTML(e):e=>e,q0="http://www.w3.org/2000/svg",U0="http://www.w3.org/1998/Math/MathML",ai=typeof document<"u"?document:null,ds=ai&&ai.createElement("template"),W0={insert:(e,t,i)=>{t.insertBefore(e,i||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,i,n)=>{const l=t==="svg"?ai.createElementNS(q0,e):t==="mathml"?ai.createElementNS(U0,e):i?ai.createElement(e,{is:i}):ai.createElement(e);return e==="select"&&n&&n.multiple!=null&&l.setAttribute("multiple",n.multiple),l},createText:e=>ai.createTextNode(e),createComment:e=>ai.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ai.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,i,n,l,a){const o=i?i.previousSibling:t.lastChild;if(l&&(l===a||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),i),!(l===a||!(l=l.nextSibling)););else{ds.innerHTML=tu(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const r=ds.content;if(n==="svg"||n==="mathml"){const s=r.firstChild;for(;s.firstChild;)r.appendChild(s.firstChild);r.removeChild(s)}t.insertBefore(r,i)}return[o?o.nextSibling:t.firstChild,i?i.previousSibling:t.lastChild]}},gi="transition",In="animation",wn=Symbol("_vtc"),iu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},nu=Be({},Ed,iu),G0=e=>(e.displayName="Transition",e.props=nu,e),kn=G0((e,{slots:t})=>c(Vm,lu(e),t)),Di=(e,t=[])=>{ie(e)?e.forEach(i=>i(...t)):e&&e(...t)},us=e=>e?ie(e)?e.some(t=>t.length>1):e.length>1:!1;function lu(e){const t={};for(const O in e)O in iu||(t[O]=e[O]);if(e.css===!1)return t;const{name:i="v",type:n,duration:l,enterFromClass:a=`${i}-enter-from`,enterActiveClass:o=`${i}-enter-active`,enterToClass:r=`${i}-enter-to`,appearFromClass:s=a,appearActiveClass:u=o,appearToClass:d=r,leaveFromClass:p=`${i}-leave-from`,leaveActiveClass:h=`${i}-leave-active`,leaveToClass:m=`${i}-leave-to`}=e,g=Y0(l),b=g&&g[0],y=g&&g[1],{onBeforeEnter:A,onEnter:w,onEnterCancelled:v,onLeave:T,onLeaveCancelled:C,onBeforeAppear:N=A,onAppear:M=w,onAppearCancelled:H=v}=t,L=(O,J,U,Z)=>{O._enterCancelled=Z,bi(O,J?d:r),bi(O,J?u:o),U&&U()},B=(O,J)=>{O._isLeaving=!1,bi(O,p),bi(O,m),bi(O,h),J&&J()},F=O=>(J,U)=>{const Z=O?M:w,V=()=>L(J,O,U);Di(Z,[J,V]),ps(()=>{bi(J,O?s:a),qt(J,O?d:r),us(Z)||hs(J,n,b,V)})};return Be(t,{onBeforeEnter(O){Di(A,[O]),qt(O,a),qt(O,o)},onBeforeAppear(O){Di(N,[O]),qt(O,s),qt(O,u)},onEnter:F(!1),onAppear:F(!0),onLeave(O,J){O._isLeaving=!0;const U=()=>B(O,J);qt(O,p),O._enterCancelled?(qt(O,h),go()):(go(),qt(O,h)),ps(()=>{O._isLeaving&&(bi(O,p),qt(O,m),us(T)||hs(O,n,y,U))}),Di(T,[O,U])},onEnterCancelled(O){L(O,!1,void 0,!0),Di(v,[O])},onAppearCancelled(O){L(O,!0,void 0,!0),Di(H,[O])},onLeaveCancelled(O){B(O),Di(C,[O])}})}function Y0(e){if(e==null)return null;if(Ae(e))return[$a(e.enter),$a(e.leave)];{const t=$a(e);return[t,t]}}function $a(e){return Wh(e)}function qt(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.add(i)),(e[wn]||(e[wn]=new Set)).add(t)}function bi(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const i=e[wn];i&&(i.delete(t),i.size||(e[wn]=void 0))}function ps(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let K0=0;function hs(e,t,i,n){const l=e._endId=++K0,a=()=>{l===e._endId&&n()};if(i!=null)return setTimeout(a,i);const{type:o,timeout:r,propCount:s}=au(e,t);if(!o)return n();const u=o+"end";let d=0;const p=()=>{e.removeEventListener(u,h),a()},h=m=>{m.target===e&&++d>=s&&p()};setTimeout(()=>{d<s&&p()},r+1),e.addEventListener(u,h)}function au(e,t){const i=window.getComputedStyle(e),n=g=>(i[g]||"").split(", "),l=n(`${gi}Delay`),a=n(`${gi}Duration`),o=ms(l,a),r=n(`${In}Delay`),s=n(`${In}Duration`),u=ms(r,s);let d=null,p=0,h=0;t===gi?o>0&&(d=gi,p=o,h=a.length):t===In?u>0&&(d=In,p=u,h=s.length):(p=Math.max(o,u),d=p>0?o>u?gi:In:null,h=d?d===gi?a.length:s.length:0);const m=d===gi&&/\b(?:transform|all)(?:,|$)/.test(n(`${gi}Property`).toString());return{type:d,timeout:p,propCount:h,hasTransform:m}}function ms(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((i,n)=>fs(i)+fs(e[n])))}function fs(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function go(){return document.body.offsetHeight}function J0(e,t,i){const n=e[wn];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):i?e.setAttribute("class",t):e.className=t}const Zl=Symbol("_vod"),ou=Symbol("_vsh"),a5={name:"show",beforeMount(e,{value:t},{transition:i}){e[Zl]=e.style.display==="none"?"":e.style.display,i&&t?i.beforeEnter(e):Rn(e,t)},mounted(e,{value:t},{transition:i}){i&&t&&i.enter(e)},updated(e,{value:t,oldValue:i},{transition:n}){!t!=!i&&(n?t?(n.beforeEnter(e),Rn(e,!0),n.enter(e)):n.leave(e,()=>{Rn(e,!1)}):Rn(e,t))},beforeUnmount(e,{value:t}){Rn(e,t)}};function Rn(e,t){e.style.display=t?e[Zl]:"none",e[ou]=!t}const Q0=Symbol(""),X0=/(?:^|;)\s*display\s*:/;function Z0(e,t,i){const n=e.style,l=Ie(i);let a=!1;if(i&&!l){if(t)if(Ie(t))for(const o of t.split(";")){const r=o.slice(0,o.indexOf(":")).trim();i[r]==null&&Fl(n,r,"")}else for(const o in t)i[o]==null&&Fl(n,o,"");for(const o in i)o==="display"&&(a=!0),Fl(n,o,i[o])}else if(l){if(t!==i){const o=n[Q0];o&&(i+=";"+o),n.cssText=i,a=X0.test(i)}}else t&&e.removeAttribute("style");Zl in e&&(e[Zl]=a?n.display:"",e[ou]&&(n.display="none"))}const gs=/\s*!important$/;function Fl(e,t,i){if(ie(i))i.forEach(n=>Fl(e,t,n));else if(i==null&&(i=""),t.startsWith("--"))e.setProperty(t,i);else{const n=ef(e,t);gs.test(i)?e.setProperty(Gi(n),i.replace(gs,""),"important"):e[n]=i}}const vs=["Webkit","Moz","ms"],Ma={};function ef(e,t){const i=Ma[t];if(i)return i;let n=ot(t);if(n!=="filter"&&n in e)return Ma[t]=n;n=ol(n);for(let l=0;l<vs.length;l++){const a=vs[l]+n;if(a in e)return Ma[t]=a}return t}const _s="http://www.w3.org/1999/xlink";function bs(e,t,i,n,l,a=Xh(t)){n&&t.startsWith("xlink:")?i==null?e.removeAttributeNS(_s,t.slice(6,t.length)):e.setAttributeNS(_s,t,i):i==null||a&&!Uc(i)?e.removeAttribute(t):e.setAttribute(t,a?"":Kt(i)?String(i):i)}function ys(e,t,i,n,l){if(t==="innerHTML"||t==="textContent"){i!=null&&(e[t]=t==="innerHTML"?tu(i):i);return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const r=a==="OPTION"?e.getAttribute("value")||"":e.value,s=i==null?e.type==="checkbox"?"on":"":String(i);(r!==s||!("_value"in e))&&(e.value=s),i==null&&e.removeAttribute(t),e._value=i;return}let o=!1;if(i===""||i==null){const r=typeof e[t];r==="boolean"?i=Uc(i):i==null&&r==="string"?(i="",o=!0):r==="number"&&(i=0,o=!0)}try{e[t]=i}catch{}o&&e.removeAttribute(l||t)}function ci(e,t,i,n){e.addEventListener(t,i,n)}function tf(e,t,i,n){e.removeEventListener(t,i,n)}const ws=Symbol("_vei");function nf(e,t,i,n,l=null){const a=e[ws]||(e[ws]={}),o=a[t];if(n&&o)o.value=n;else{const[r,s]=lf(t);if(n){const u=a[t]=rf(n,l);ci(e,r,u,s)}else o&&(tf(e,r,o,s),a[t]=void 0)}}const ks=/(?:Once|Passive|Capture)$/;function lf(e){let t;if(ks.test(e)){t={};let n;for(;n=e.match(ks);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Gi(e.slice(2)),t]}let Va=0;const af=Promise.resolve(),of=()=>Va||(af.then(()=>Va=0),Va=Date.now());function rf(e,t){const i=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=i.attached)return;Rt(sf(n,i.value),t,5,[n])};return i.value=e,i.attached=of(),i}function sf(e,t){if(ie(t)){const i=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{i.call(e),e._stopped=!0},t.map(n=>l=>!l._stopped&&n&&n(l))}else return t}const Es=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,cf=(e,t,i,n,l,a)=>{const o=l==="svg";t==="class"?J0(e,n,o):t==="style"?Z0(e,i,n):ll(t)?No(t)||nf(e,t,i,n,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):df(e,t,n,o))?(ys(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&bs(e,t,n,o,a,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ie(n))?ys(e,ot(t),n,a,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),bs(e,t,n,o))};function df(e,t,i,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Es(t)&&ae(i));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const l=e.tagName;if(l==="IMG"||l==="VIDEO"||l==="CANVAS"||l==="SOURCE")return!1}return Es(t)&&Ie(i)?!1:t in e}const ru=new WeakMap,su=new WeakMap,ea=Symbol("_moveCb"),As=Symbol("_enterCb"),uf=e=>(delete e.props.mode,e),pf=uf({name:"TransitionGroup",props:Be({},nu,{tag:String,moveClass:String}),setup(e,{slots:t}){const i=Qt(),n=kd();let l,a;return Sd(()=>{if(!l.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!gf(l[0].el,i.vnode.el,o)){l=[];return}l.forEach(hf),l.forEach(mf);const r=l.filter(ff);go(),r.forEach(s=>{const u=s.el,d=u.style;qt(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=u[ea]=h=>{h&&h.target!==u||(!h||h.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",p),u[ea]=null,bi(u,o))};u.addEventListener("transitionend",p)}),l=[]}),()=>{const o=me(e),r=lu(o);let s=o.tag||at;if(l=[],a)for(let u=0;u<a.length;u++){const d=a[u];d.el&&d.el instanceof Element&&(l.push(d),zi(d,Jn(d,r,n,i)),ru.set(d,d.el.getBoundingClientRect()))}a=t.default?Xo(t.default()):[];for(let u=0;u<a.length;u++){const d=a[u];d.key!=null&&zi(d,Jn(d,r,n,i))}return Me(s,null,a)}}}),cu=pf;function hf(e){const t=e.el;t[ea]&&t[ea](),t[As]&&t[As]()}function mf(e){su.set(e,e.el.getBoundingClientRect())}function ff(e){const t=ru.get(e),i=su.get(e),n=t.left-i.left,l=t.top-i.top;if(n||l){const a=e.el.style;return a.transform=a.webkitTransform=`translate(${n}px,${l}px)`,a.transitionDuration="0s",e}}function gf(e,t,i){const n=e.cloneNode(),l=e[wn];l&&l.forEach(r=>{r.split(/\s+/).forEach(s=>s&&n.classList.remove(s))}),i.split(/\s+/).forEach(r=>r&&n.classList.add(r)),n.style.display="none";const a=t.nodeType===1?t:t.parentNode;a.appendChild(n);const{hasTransform:o}=au(n);return a.removeChild(n),o}const Li=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ie(t)?i=>Ml(t,i):t};function vf(e){e.target.composing=!0}function Ts(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const At=Symbol("_assign"),xs={created(e,{modifiers:{lazy:t,trim:i,number:n}},l){e[At]=Li(l);const a=n||l.props&&l.props.type==="number";ci(e,t?"change":"input",o=>{if(o.target.composing)return;let r=e.value;i&&(r=r.trim()),a&&(r=Nl(r)),e[At](r)}),i&&ci(e,"change",()=>{e.value=e.value.trim()}),t||(ci(e,"compositionstart",vf),ci(e,"compositionend",Ts),ci(e,"change",Ts))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:i,modifiers:{lazy:n,trim:l,number:a}},o){if(e[At]=Li(o),e.composing)return;const r=(a||e.type==="number")&&!/^0\d/.test(e.value)?Nl(e.value):e.value,s=t??"";r!==s&&(document.activeElement===e&&e.type!=="range"&&(n&&t===i||l&&e.value.trim()===s)||(e.value=s))}},_f={deep:!0,created(e,t,i){e[At]=Li(i),ci(e,"change",()=>{const n=e._modelValue,l=En(e),a=e.checked,o=e[At];if(ie(n)){const r=Wo(n,l),s=r!==-1;if(a&&!s)o(n.concat(l));else if(!a&&s){const u=[...n];u.splice(r,1),o(u)}}else if(xn(n)){const r=new Set(n);a?r.add(l):r.delete(l),o(r)}else o(du(e,a))})},mounted:Ls,beforeUpdate(e,t,i){e[At]=Li(i),Ls(e,t,i)}};function Ls(e,{value:t,oldValue:i},n){e._modelValue=t;let l;if(ie(t))l=Wo(t,n.props.value)>-1;else if(xn(t))l=t.has(n.props.value);else{if(t===i)return;l=Ni(t,du(e,!0))}e.checked!==l&&(e.checked=l)}const bf={created(e,{value:t},i){e.checked=Ni(t,i.props.value),e[At]=Li(i),ci(e,"change",()=>{e[At](En(e))})},beforeUpdate(e,{value:t,oldValue:i},n){e[At]=Li(n),t!==i&&(e.checked=Ni(t,n.props.value))}},yf={deep:!0,created(e,{value:t,modifiers:{number:i}},n){const l=xn(t);ci(e,"change",()=>{const a=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>i?Nl(En(o)):En(o));e[At](e.multiple?l?new Set(a):a:a[0]),e._assigning=!0,xt(()=>{e._assigning=!1})}),e[At]=Li(n)},mounted(e,{value:t}){Ss(e,t)},beforeUpdate(e,t,i){e[At]=Li(i)},updated(e,{value:t}){e._assigning||Ss(e,t)}};function Ss(e,t){const i=e.multiple,n=ie(t);if(!(i&&!n&&!xn(t))){for(let l=0,a=e.options.length;l<a;l++){const o=e.options[l],r=En(o);if(i)if(n){const s=typeof r;s==="string"||s==="number"?o.selected=t.some(u=>String(u)===String(r)):o.selected=Wo(t,r)>-1}else o.selected=t.has(r);else if(Ni(En(o),t)){e.selectedIndex!==l&&(e.selectedIndex=l);return}}!i&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function En(e){return"_value"in e?e._value:e.value}function du(e,t){const i=t?"_trueValue":"_falseValue";return i in e?e[i]:t}const o5={created(e,t,i){Pl(e,t,i,null,"created")},mounted(e,t,i){Pl(e,t,i,null,"mounted")},beforeUpdate(e,t,i,n){Pl(e,t,i,n,"beforeUpdate")},updated(e,t,i,n){Pl(e,t,i,n,"updated")}};function wf(e,t){switch(e){case"SELECT":return yf;case"TEXTAREA":return xs;default:switch(t){case"checkbox":return _f;case"radio":return bf;default:return xs}}}function Pl(e,t,i,n,l){const o=wf(e.tagName,i.props&&i.props.type)[l];o&&o(e,t,i,n)}const kf=Be({patchProp:cf},W0);let Fa,Ps=!1;function Ef(){return Fa=Ps?Fa:g0(kf),Ps=!0,Fa}const Af=((...e)=>{const t=Ef().createApp(...e),{mount:i}=t;return t.mount=n=>{const l=xf(n);if(l)return i(l,!0,Tf(l))},t});function Tf(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function xf(e){return Ie(e)?document.querySelector(e):e}var pl=e=>/^[a-z][a-z0-9+.-]*:/.test(e)||e.startsWith("//"),Lf=/.md((\?|#).*)?$/,or=(e,t="/")=>pl(e)||e.startsWith("/")&&!e.startsWith(t)&&!Lf.test(e),Xt=e=>/^(https?:)?\/\//.test(e),Cs=e=>{if(!e||e.endsWith("/"))return e;let t=e.replace(/(^|\/)README.md$/i,"$1index.html");return t.endsWith(".md")?t=`${t.substring(0,t.length-3)}.html`:t.endsWith(".html")||(t=`${t}.html`),t.endsWith("/index.html")&&(t=t.substring(0,t.length-10)),t},Sf="http://.",Pf=(e,t)=>{if(!e.startsWith("/")&&t){const i=t.slice(0,t.lastIndexOf("/"));return Cs(new URL(`${i}/${e}`,Sf).pathname)}return Cs(e)},Cf=(e,t)=>{const i=Object.keys(e).sort((n,l)=>{const a=l.split("/").length-n.split("/").length;return a!==0?a:l.length-n.length});for(const n of i)if(t.startsWith(n))return n;return"/"},Of=/(#|\?)/,uu=e=>{const[t,...i]=e.split(Of);return{pathname:t,hashAndQueries:i.join("")}},Df=["link","meta","script","style","noscript","template"],If=["title","base"],Rf=([e,t,i])=>If.includes(e)?e:Df.includes(e)?e==="meta"&&t.name?`${e}.${t.name}`:e==="template"&&t.id?`${e}.${t.id}`:JSON.stringify([e,Object.entries(t).map(([n,l])=>typeof l=="boolean"?l?[n,""]:null:[n,l]).filter(n=>n!=null).sort(([n],[l])=>n.localeCompare(l)),i]):null,Bf=e=>{const t=new Set,i=[];return e.forEach(n=>{const l=Rf(n);l&&!t.has(l)&&(t.add(l),i.push(n))}),i},$f=e=>e.startsWith("/")?e:`/${e}`,rr=e=>e.endsWith("/")||e.endsWith(".html")?e:`${e}/`,ha=e=>e.endsWith("/")?e.slice(0,-1):e,pu=e=>e.startsWith("/")?e.slice(1):e,hu=e=>typeof e=="function",Lt=e=>Object.prototype.toString.call(e)==="[object Object]",pe=e=>typeof e=="string";const Mf="modulepreload",Vf=function(e){return"/"+e},Os={},f=function(t,i,n){let l=Promise.resolve();if(i&&i.length>0){let s=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),r=o?.nonce||o?.getAttribute("nonce");l=s(i.map(u=>{if(u=Vf(u),u in Os)return;Os[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":Mf,d||(h.as="script"),h.crossOrigin="",h.href=u,r&&h.setAttribute("nonce",r),document.head.appendChild(h),d)return new Promise((m,g)=>{h.addEventListener("load",m),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function a(o){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o}return l.then(o=>{for(const r of o||[])r.status==="rejected"&&a(r.reason);return t().catch(a)})},Ff=JSON.parse("{}"),jf=Object.fromEntries([["/404.html",{loader:()=>f(()=>import("./404.html-BQl1nUif.js"),[]),meta:{date:17005248e5,excerpt:`
<div class="hint-container important">
<p class="hint-container-title">Attention</p>
<p>You have reached the very last page of the Internet.</p>
<p>We hope you have enjoyed your browsing.</p>
<p>Now turn off your computer and go outside.</p>
</div>`,readingTime:{minutes:.46,words:137},title:"404 Not Found",icon:"tabler:error-404-off",index:!1,type:"article"}}],["/LICENSE.html",{loader:()=>f(()=>import("./LICENSE.html-BwOg2NUN.js"),[]),meta:{date:1677456e6,excerpt:`
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>Copyright © 2023 &lt;copyright zkye&gt;</p>
<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
<p>THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
</div>`,readingTime:{minutes:.6,words:181},title:"The MIT License (MIT)",index:!1,type:"article"}}],["/coming-soon.html",{loader:()=>f(()=>import("./coming-soon.html-BNm6kXfo.js"),[]),meta:{date:-27080352e6,excerpt:`
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>This page is not yet ready.</p>
<p>Please come back later.</p>
<p>😃</p>
</div>`,readingTime:{minutes:.11,words:32},title:"Coming Soon",icon:"hugeicons:coming-soon-01",index:!1,type:"article"}}],["/home.html",{loader:()=>f(()=>import("./home.html-BcsxNKL7.js"),[]),meta:{title:"Coming soon...",icon:"at",index:!1}}],["/",{loader:()=>f(()=>import("./index.html-BMKkEs8P.js"),[]),meta:{title:"主页",icon:"home"}}],["/tags.html",{loader:()=>f(()=>import("./tags.html-UUSz4v0H.js"),[]),meta:{date:1610928e6,category:["Blog 指南"],excerpt:`
<ul>
<li>Lang：计算机语言技术相关原理与解释</li>
<li></li>
</ul>`,readingTime:{minutes:.1,words:30},title:"Tags说明",icon:"simplybuilt",index:!1,type:"article"}}],["/book/The_Self-Cultivation_of_an_Alibaba_Engineer.html",{loader:()=>f(()=>import("./The_Self-Cultivation_of_an_Alibaba_Engineer.html-B_S3QFHt.js"),[]),meta:{date:16781472e5,excerpt:`
<blockquote>
<p>阿里云开发社区的电子书《阿里工程师的自我修养》总结</p>
</blockquote>`,readingTime:{minutes:10.79,words:3237},title:"《阿里工程师的自我修养》",icon:"material-symbols:computer-rounded",type:"article"}}],["/book/",{loader:()=>f(()=>import("./index.html-BbJcmiCM.js"),[]),meta:{date:16426368e5,category:["开源书籍"],readingTime:{minutes:.07,words:21},title:"开源书籍",icon:"📖",type:"article"}}],["/book/test_pdf.html",{loader:()=>f(()=>import("./test_pdf.html-sIVfXc0D.js"),[]),meta:{date:15778368e5,excerpt:`
`,readingTime:{minutes:.09,words:26},title:"Test PDF",icon:"bxs:file-pdf",type:"article"}}],["/course/Android-development.html",{loader:()=>f(()=>import("./Android-development.html-CaMogsdm.js"),[]),meta:{date:17005248e5,excerpt:`
<h2>版本号</h2>
<p>a.b.c:</p>`,readingTime:{minutes:.25,words:75},title:"移动开发",type:"article"}}],["/course/Network-review.html",{loader:()=>f(()=>import("./Network-review.html-BRWjed2s.js"),[]),meta:{date:16409088e5,category:["课程复习"],tag:["计网"],excerpt:`
<h2>物理层</h2>
<blockquote>
<p>单位：bit</p>
<p>考虑多大的电压代表“0”/“1”，以及接收方如何识别发出放的所发送的比特流；</p>
<p>确定连接电缆的插头应该有多少根引脚及各引脚见应该如何连接。</p>
</blockquote>`,readingTime:{minutes:8.62,words:2587},title:"计网复习",icon:"simplybuilt",type:"article"}}],["/course/Operating-System-Practice.html",{loader:()=>f(()=>import("./Operating-System-Practice.html-D02ul-Dx.js"),[]),meta:{date:16473024e5,isEncrypted:!0,readingTime:{minutes:29.41,words:8822},title:"操作系统练习",icon:"simplybuilt",type:"article"}}],["/course/bian-yi-yuan-li.html",{loader:()=>f(()=>import("./bian-yi-yuan-li.html-dQrtZOKY.js"),[]),meta:{date:16462656e5,category:["课程笔记"],tag:["编译原理"],excerpt:`
<h2>文法</h2>
<h3>字符串方幂</h3>`,readingTime:{minutes:6.41,words:1924},title:"编译原理",icon:"simplybuilt",type:"article"}}],["/course/bigdata.html",{loader:()=>f(()=>import("./bigdata.html-C3fnPJX2.js"),[]),meta:{date:16781472e5,excerpt:`
<ol>
<li>
<p>用一两句话讲一下大数据科学是做什么的？</p>
<p>数据—&gt;规律—&gt;决策</p>
</li>
<li>
<p>大数据科学领域涉及了很多具体的研究领域。都包括什么？各举一个具体的例子？本门课所关心的具体领域是什么？</p>
<p>数据采集 数据存储——paxos算法(谁提出的 解决什么问题——分布式系统里的数据存储问题 共识问题) 数据传输 数据可视化 数据并行计算</p>
<p>paxos：Leslie Lamport</p>
</li>
<li></li>
</ol>`,readingTime:{minutes:.48,words:144},title:"大数据与知识工程复习",type:"article"}}],["/course/cao-zuo-xi-tong-gai-lun.html",{loader:()=>f(()=>import("./cao-zuo-xi-tong-gai-lun.html-12jYbJfx.js"),[]),meta:{date:16454016e5,category:["课程笔记"],tag:["操作系统"],excerpt:`
<blockquote>
<p>作业ip：https://10.11.119.115 / http://10.11.119.115:8234 [内网访问]</p>
<ul>
<li>初始用户及密码均为学号</li>
</ul>
<p>评分标准：</p>
<ul>
<li>出勤率+作业+课堂表现     20%</li>
<li>平时测验（每次5%，共8次） 40%</li>
<li></li>
</ul>
</blockquote>`,readingTime:{minutes:39.37,words:11810},title:"操作系统概论",icon:"simplybuilt",type:"article"}}],["/course/db-read-data.html",{loader:()=>f(()=>import("./db-read-data.html-CWd3ymAV.js"),[]),meta:{date:1645488e6,category:["课程复习"],tag:["数据库"],excerpt:`
<h2>事务特性（ACID）</h2>
<blockquote>
<p>事务是并发控制的单位，是用户定义的一个操作序列。</p>
</blockquote>`,readingTime:{minutes:2.57,words:772},title:"数据库复习",icon:"simplybuilt",type:"article"}}],["/course/",{loader:()=>f(()=>import("./index.html-DQyb_SSM.js"),[]),meta:{date:16781472e5,category:["课程笔记"],readingTime:{minutes:.07,words:21},title:"课程笔记",icon:"📒",type:"article"}}],["/daily/BST.html",{loader:()=>f(()=>import("./BST.html-BWZE7h8N.js"),[]),meta:{date:16471296e5,category:["天天笔记"],tag:["Algorithm","BST"],excerpt:`
<h3>定义</h3>
<p>BST是满足如下3个条件的二叉树：</p>`,readingTime:{minutes:.45,words:136},title:"二叉查找树(BST)",icon:"simplybuilt",type:"article"}}],["/daily/Class-defines-itself-internally.html",{loader:()=>f(()=>import("./Class-defines-itself-internally.html-CnHbOJto.js"),[]),meta:{date:1636848e6,category:["天天笔记"],tag:["Cpp","Lang"],excerpt:`
<h2>CPP</h2>
<blockquote>
<p>为什么C++类定义中，数据成员不能被指定为自身类型，但可以是指向自身类型的指针或引用？</p>
</blockquote>`,readingTime:{minutes:1.18,words:353},title:"类内部定义自身",icon:"simplybuilt",type:"article"}}],["/daily/Functioncallback.html",{loader:()=>f(()=>import("./Functioncallback.html-DYzxacW3.js"),[]),meta:{date:163512e7,category:["天天笔记"],tag:["Lang"],excerpt:`
<blockquote>
<p>整理自 <a href="https://www.zhihu.com/people/mac-82-59" target="_blank" rel="noopener noreferrer">码农的荒岛求生</a></p>
</blockquote>`,readingTime:{minutes:13.5,words:4051},title:"函数回调",icon:"simplybuilt",type:"article"}}],["/daily/Listary-Everything.html",{loader:()=>f(()=>import("./Listary-Everything.html-CCWfJ2d9.js"),[]),meta:{date:16341696e5,category:["天天笔记"],tag:["Tools"],excerpt:`
<blockquote>
<p>1、Everything 是一款独立的本地搜索软件，更是一款基于文件系统的搜索引擎，侧重于文件搜索，替代了传统的本地搜索工具，主要是做「过滤筛查」的，面向的是「结果集」，是为了方便文件的批处理操作；</p>
<p>2、Listary 是一款效率辅助搜索工具，更多是作为启动器设计的，侧重于文件定位，无需拥有自己的主界面，需要依附其它软件，主要是做「定位」的，面向的是「单一对象」，进而扩展更多动作，提升操作效率。</p>
</blockquote>`,readingTime:{minutes:1.21,words:363},title:"Listary & Everything",icon:"simplybuilt",type:"article"}}],["/daily/LoadBalance.html",{loader:()=>f(()=>import("./LoadBalance.html-BabKp5KZ.js"),[]),meta:{date:1639872e6,category:["天天笔记"],tag:["LoadBalance"],excerpt:`
<blockquote>
<p>Nginx 与 SpringCloud 的 Ribbon 对比：</p>
<ul>
<li>Nginx 做的是客户端范围访问请求的负载均衡，负责将客户端请求代理转发给服务器。</li>
<li>Ribbon 做的是 SpringCloud 内部微服务之间访问的负载均衡，该请求源自 完成某用户请求而需要调用的内部微服务。</li>
</ul>
</blockquote>`,readingTime:{minutes:1.23,words:369},title:"负载均衡分类",icon:"simplybuilt",type:"article"}}],["/daily/Message-push.html",{loader:()=>f(()=>import("./Message-push.html-Aorn2b-A.js"),[]),meta:{date:16426368e5,category:["天天笔记"],tag:["Technology"],excerpt:`
`,readingTime:{minutes:.07,words:21},title:"消息推送实现原理",icon:"simplybuilt",type:"article"}}],["/daily/Promise-base.html",{loader:()=>f(()=>import("./Promise-base.html-BArUkQq_.js"),[]),meta:{date:16343424e5,category:["天天笔记"],tag:["JavaScript"],excerpt:`
<blockquote>
<p><a href="https://www.jianshu.com/p/270fec5b33ce" target="_blank" rel="noopener noreferrer">整理自🌐</a></p>
</blockquote>`,readingTime:{minutes:11.85,words:3555},title:"Promise基本使用及方法介绍",icon:"simplybuilt",type:"article"}}],["/daily/Python-loop.html",{loader:()=>f(()=>import("./Python-loop.html-sJGMKyqp.js"),[]),meta:{date:16341696e5,category:["天天笔记"],tag:["Python"],excerpt:`
<p>编写循环时，遵循下面三个原则可以大大提高运行效率，避免不需要的低效计算：</p>`,readingTime:{minutes:.69,words:207},title:"Python中循环代码优化",icon:"simplybuilt",type:"article"}}],["/daily/RIP-OSPF.html",{loader:()=>f(()=>import("./RIP-OSPF.html-CJKtptmA.js"),[]),meta:{date:16370208e5,category:["天天笔记"],tag:["计网"],excerpt:`
<blockquote>
<p><a href="https://www.zhihu.com/people/chexiaopang" target="_blank" rel="noopener noreferrer">车小胖</a> 计算机网络话题下的优秀答主</p>
</blockquote>`,readingTime:{minutes:2.35,words:705},title:"如何形象说明路由协议RIP和OSPF？",icon:"simplybuilt",type:"article"}}],["/daily/Redis.html",{loader:()=>f(()=>import("./Redis.html-DmfYjxYl.js"),[]),meta:{date:1610496e6,category:["天天笔记"],tag:["Redis","Interview"],excerpt:`
<p>2种可持续化策略</p>
<hr>
<h2><strong>缓存雪崩</strong></h2>`,readingTime:{minutes:2.88,words:865},title:"Redis 缓存问题解释",icon:"simplybuilt",type:"article"}}],["/daily/Synergetic-process.html",{loader:()=>f(()=>import("./Synergetic-process.html-CS719VIK.js"),[]),meta:{date:16350336e5,category:["天天笔记"],tag:["OS","Kotlin"],excerpt:`
<blockquote>
<p>**协程，英文Coroutines，是一种比线程更加轻量级的存在。**正如一个进程可以拥有多个线程一样，一个线程也可以拥有多个协程。</p>
</blockquote>`,readingTime:{minutes:6.24,words:1872},title:"协程",icon:"simplybuilt",type:"article"}}],["/daily/TCP.html",{loader:()=>f(()=>import("./TCP.html-C_22tU2z.js"),[]),meta:{date:1639008e6,category:["天天笔记"],tag:["TCP","计网"],excerpt:`
<blockquote>
<p>链接：<a href="https://www.nowcoder.com/questionTerminal/ec843c8a27c84a7693865f55a71a7e8c" target="_blank" rel="noopener noreferrer">https://www.nowcoder.com/questionTerminal/ec843c8a27c84a7693865f55a71a7e8c</a></p>
<p>来源：牛客网</p>
</blockquote>`,readingTime:{minutes:9.11,words:2734},title:"TCP 握手",icon:"simplybuilt",type:"article"}}],["/daily/Thread-safety.html",{loader:()=>f(()=>import("./Thread-safety.html-CZEM5Gch.js"),[]),meta:{date:16447104e5,category:["天天笔记"],tag:["OS"],excerpt:`
<blockquote>
<p>线程安全是多线程编程时的计算机程序代码中的一个概念。在拥有共享数据的多条线程并行执行的程序中，线程安全的代码会通过同步机制保证各个线程都可以正常且正确的执行，不会出现<strong>数据污染</strong><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>等意外情况。</p>
<p>如果一个函数能够安全地同时被多个线程调用而得到正确的结果，那么，我们说这个函数是线程安全的。所谓"安全"，一切可能导致结果不正确的因素都是不安全的调用。</p>
</blockquote>`,readingTime:{minutes:1.08,words:323},title:"线程安全",icon:"simplybuilt",type:"article"}}],["/daily/Ubuntu.html",{loader:()=>f(()=>import("./Ubuntu.html-Cuukolxr.js"),[]),meta:{date:15790464e5,category:["天天笔记"],tag:["Ubuntu"],excerpt:`
<h2>Ubuntu crontab 自动任务配置</h2>`,readingTime:{minutes:.52,words:155},title:"Ubuntu",icon:"simplybuilt",type:"article"}}],["/daily/Vim.html",{loader:()=>f(()=>import("./Vim.html-BhfodAJc.js"),[]),meta:{date:1634688e6,category:["天天笔记"],tag:["Vim"],excerpt:`
<blockquote>
<p>Vim是Vi的增强版本，在不正式的情况下，两者是一回事。</p>
<p>Vim是所有UNIX和Linux系统下的标准软件。</p>
</blockquote>`,readingTime:{minutes:3.89,words:1168},title:"Vim Intro",icon:"simplybuilt",type:"article"}}],["/daily/algolia.html",{loader:()=>f(()=>import("./algolia.html-C4QTB_ah.js"),[]),meta:{date:16781472e5,excerpt:`<p>icon: simplybuilt
category: 天天笔记</p>`,readingTime:{minutes:.13,words:39},title:"algolia 搜索",type:"article"}}],["/daily/bitmap.html",{loader:()=>f(()=>import("./bitmap.html-4F3kpqV9.js"),[]),meta:{date:1638576e6,category:["天天笔记"],tag:["Algorithm"],excerpt:`
<h2>1. BitMap</h2>
<p>Bit-map的基本思想就是用一个bit位来标记某个元素对应的Value，而Key即是该元素。由于采用了Bit为单位来存储数据，因此在存储空间方面，可以大大节省。（PS：划重点 <strong>节省存储空间</strong>）</p>`,readingTime:{minutes:10.61,words:3184},title:"Bitmap简介",icon:"simplybuilt",type:"article"}}],["/daily/ci.html",{loader:()=>f(()=>import("./ci.html-CU3HlpqD.js"),[]),meta:{date:17005248e5,category:["天天笔记"],excerpt:`
<h2>Github Action</h2>
`,readingTime:{minutes:.1,words:31},title:"CI 持续集成 todo",icon:"simplybuilt",type:"article"}}],["/daily/common-nouns.html",{loader:()=>f(()=>import("./common-nouns.html-yJ6EfNJI.js"),[]),meta:{date:16781472e5,category:["天天笔记"],tag:["专有名词"],excerpt:`
<ol>
<li>
<p><code>Thread</code> <strong>[θred]</strong> 线程</p>
</li>
<li>
<p><code>ReentrantLock</code> <strong>[riːˈɛntrənt]</strong> 可重入锁</p>
</li>
<li>
<p><code>synchronized</code> <strong>[ˈsɪŋkrənaɪzd]</strong> 同步锁</p>
</li>
<li>
<p><code>iterator</code> <strong>['it reit ]</strong> 迭代器</p>
</li>
<li></li>
</ol>`,readingTime:{minutes:.17,words:51},title:"常用名词【Common nouns】",icon:"simplybuilt",type:"article"}}],["/daily/decorator.html",{loader:()=>f(()=>import("./decorator.html-gHnft1cg.js"),[]),meta:{date:16781472e5,category:["天天笔记"],excerpt:`
<p><a href="https://www.jianshu.com/p/ee82b941772a" target="_blank" rel="noopener noreferrer">理解Python装饰器(Decorator) - 简书 (jianshu.com)</a></p>`,readingTime:{minutes:.36,words:108},title:"如何理解 Python 装饰器",icon:"simplybuilt",type:"article"}}],["/daily/django-auth.html",{loader:()=>f(()=>import("./django-auth.html-DafMiLci.js"),[]),meta:{date:16781472e5,category:["天天笔记"],tag:["Django"],excerpt:`
<p><a href="https://zhuanlan.zhihu.com/p/415424659" target="_blank" rel="noopener noreferrer">django中request.user的由来 - 知乎 (zhihu.com)</a></p>`,readingTime:{minutes:.4,words:119},title:"Django自定义认证",icon:"simplybuilt",type:"article"}}],["/daily/docker-desktop-wsl2-change-dir.html",{loader:()=>f(()=>import("./docker-desktop-wsl2-change-dir.html-Y7fRub6K.js"),[]),meta:{date:16442784e5,category:["天天笔记"],tag:["Tools"],excerpt:`
<h2>修改 docker-data 存储位置</h2>`,readingTime:{minutes:3.11,words:932},title:"Docker - Docker Desktop(WSL2)",icon:"simplybuilt",type:"article"}}],["/daily/docker.html",{loader:()=>f(()=>import("./docker.html-C8K6eCM7.js"),[]),meta:{date:17371584e5,category:["天天笔记"],excerpt:`
<ol>
<li>
<p>若遇到 docker 容器服务长时间启动不起来，即长时间处于 <code>starting</code> 状态，很可能是对外端口与主机使用端口出现冲突，排查方法如下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 首先，查看 docker 服务的日志文件，若端口冲突会在其中显示</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> journalctl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker.service</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 若锁定是端口冲突问题后，可以选择找到占用端口的服务停止，或者修改 docker-compose.yml 文件中的对外端口</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> lsof</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> :[端口号]</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # 查看占用端口的进程信息</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若选择修改 <code>docker-compose.yml</code> 文件，修改对外的端口即可，容器之间的调用仍按照内部端口地址，不用修改！<mark>还需要进一步学习docker网络方面的知识</mark></p>
<p>注：<code>\${}</code> 是环境变量替换的语法，用于在 Docker Compose 文件中引用环境变量的值。具体来说：</p>
<ul>
<li><code>\${VARIABLE_NAME}</code>：表示从环境变量中获取 <code>VARIABLE_NAME</code> 的值。</li>
<li><code>\${VARIABLE_NAME:-default_value}</code>：如果环境变量 <code>VARIABLE_NAME</code> 未设置或为空，则使用 <code>default_value</code> 作为默认值。</li>
</ul>
</li>
</ol>`,readingTime:{minutes:.91,words:273},title:"Docker 实践",icon:"simplybuilt",type:"article"}}],["/daily/dp.html",{loader:()=>f(()=>import("./dp.html-Cjuzz3Ac.js"),[]),meta:{date:16376256e5,category:["天天笔记"],tag:["Algorithm"],excerpt:`
<h2>如何理解动态规划？</h2>
<blockquote>
<p><a href="https://www.zhihu.com/people/niu-dai-68-44" target="_blank" rel="noopener noreferrer">牛岱</a> 字节跳动 Web Infra Engineer</p>
</blockquote>`,readingTime:{minutes:2.71,words:812},title:"动态规划简单理解",icon:"simplybuilt",type:"article"}}],["/daily/elasticsearch.html",{loader:()=>f(()=>import("./elasticsearch.html-B030LC_g.js"),[]),meta:{date:17447616e5,category:["天天笔记"],excerpt:`
<h2>安装</h2>
<h3>通过压缩包安装（推荐）</h3>`,readingTime:{minutes:1.23,words:370},title:"Docker 安装 elasticsearch",icon:"simplybuilt",type:"article"}}],["/daily/frontend-base.html",{loader:()=>f(()=>import("./frontend-base.html-Dx9Rsiv_.js"),[]),meta:{date:1638144e6,category:["天天笔记"],tag:["Frontend","Interview"],excerpt:`
<h2>JS &amp; Vue &amp; React</h2>`,readingTime:{minutes:5.35,words:1604},title:"前端基础",icon:"simplybuilt",type:"article"}}],["/daily/hook.html",{loader:()=>f(()=>import("./hook.html-K03rilJQ.js"),[]),meta:{date:16384032e5,category:["天天笔记"],tag:["Java"],excerpt:`
<blockquote>
<p>Hook，英文直译是”钩子“的意思。在程序中将其理解为”劫持“可能会更好理解，我们可以通过hook技术来劫持某个对象，从而控制它与其他对象的交互。</p>
</blockquote>`,readingTime:{minutes:4.55,words:1365},title:"Hook",icon:"simplybuilt",type:"article"}}],["/daily/javabean.html",{loader:()=>f(()=>import("./javabean.html-Da7vBMwb.js"),[]),meta:{date:1636848e6,category:["天天笔记"],tag:["Java"],excerpt:`
<h2>Java bean 是个什么概念</h2>`,readingTime:{minutes:3.68,words:1103},title:"Java Bean",icon:"simplybuilt",type:"article"}}],["/daily/lock.html",{loader:()=>f(()=>import("./lock.html-Biv4x0DO.js"),[]),meta:{date:16781472e5,category:["天天笔记"],excerpt:`
<p><a href="https://blog.csdn.net/hd12370/article/details/82814348" target="_blank" rel="noopener noreferrer">死锁面试题（什么是死锁，产生死锁的原因及必要条件）<em>AddoilDan的博客-CSDN博客</em>死锁</a></p>`,readingTime:{minutes:.21,words:62},title:"锁相关",icon:"simplybuilt",type:"article"}}],["/daily/pycharm-remote-develop.html",{loader:()=>f(()=>import("./pycharm-remote-develop.html-Z7RyntJK.js"),[]),meta:{date:16987104e5,excerpt:`
<p>pycharm的远程开发，关键在于配置远程解释器，在配置远程解释器时需要选择远程映射目录，默认为<code>/tmp/pycharm_project_xxx</code>，其中保存的便是本地项目的远程同步文件，如果不需要将本地文件在服务区同步保留可以不更改，如果需要在远程服务器也保存文件则需要将其修改到指定远程文件夹，及下图的同步文件夹后半部。</p>`,readingTime:{minutes:1.06,words:318},title:"Pycharm 远程开发",type:"article"}}],["/daily/python-mateclass.html",{loader:()=>f(()=>import("./python-mateclass.html-C9jiQvMN.js"),[]),meta:{date:16781472e5,category:["天天笔记"],tag:["Python"],excerpt:`
<p>一 你可以从这里获取什么？</p>
<ol>
<li>
<p>也许你在阅读别人的代码的时候碰到过metaclass，那你可以参考这里的介绍。</p>
</li>
<li>
<p>或许你需要设计一些底层的库，也许metaclass能帮你简化你的设计（也有可能复杂化：）</p>
</li>
<li>
<p>也许你在了解metaclass的相关知识之后，你对python的类的一些机制会更了解。</p>
</li>
<li>
<p>更多...</p>
</li>
</ol>`,readingTime:{minutes:11.1,words:3331},title:"Python mateclass",icon:"simplybuilt",type:"article"}}],["/daily/python-memory-management-strategy.html",{loader:()=>f(()=>import("./python-memory-management-strategy.html-J98b2FQY.js"),[]),meta:{date:16993152e5,category:["天天笔记"],tag:["Python"],excerpt:`
<blockquote>
<p>引用计数、垃圾回收、内存池机制</p>
<p>垃圾回收机制主要是以引用计数为主要手段以标记清除和隔代回收机制为辅的手段</p>
</blockquote>`,readingTime:{minutes:6.85,words:2055},title:"Python 内存管理策略",icon:"simplybuilt",type:"article"}}],["/daily/pythonGenerator.html",{loader:()=>f(()=>import("./pythonGenerator.html-Kl8gH_xA.js"),[]),meta:{date:163728e7,category:["天天笔记"],tag:["Python"],excerpt:`
<blockquote>
<p>这一记录源于Leetcode排列的数组，在解题时使用了（x xxx）的生成器，反复思考确认在逻辑上无误，调试时才发现，用到的生成器在一次调用循环后便无法再次执行。</p>
</blockquote>`,readingTime:{minutes:3.83,words:1148},title:"Python 生成器",icon:"simplybuilt",type:"article"}}],["/daily/python_inf_nan.html",{loader:()=>f(()=>import("./python_inf_nan.html-DCGh0f_Y.js"),[]),meta:{date:16461792e5,category:["天天笔记"],tag:["Python"],excerpt:`
<blockquote>
<p>from <a href="https://www.jianshu.com/p/d9caa4ab46e1" target="_blank" rel="noopener noreferrer">认识python中的inf和nan - 简书 (jianshu.com)</a></p>
</blockquote>`,readingTime:{minutes:1.49,words:448},title:"认识python中的inf和nan",icon:"simplybuilt",type:"article"}}],["/daily/",{loader:()=>f(()=>import("./index.html-CU7jEA7D.js"),[]),meta:{date:16426368e5,category:["天天笔记"],readingTime:{minutes:1.11,words:333},title:"天天笔记",icon:"📔",type:"article"}}],["/daily/remote-server-usage.html",{loader:()=>f(()=>import("./remote-server-usage.html-D5mLeisW.js"),[]),meta:{date:1715904e6,category:["天天笔记"],tag:["Ubuntu"],excerpt:`
<h2>1. 远程服务连接外网</h2>
<p>背景：实验室的服务器只能通过内网访问，且无法直接连接到互联网</p>`,readingTime:{minutes:3.35,words:1004},title:"远程服务器使用",icon:"simplybuilt",type:"article"}}],["/daily/runtime.html",{loader:()=>f(()=>import("./runtime.html-VDit73xD.js"),[]),meta:{date:16428096e5,category:["天天笔记"],tag:["OS"],excerpt:`
<blockquote>
<p><a href="https://www.zhihu.com/question/20607178" target="_blank" rel="noopener noreferrer">运行时（runtime）是什么意思？应该怎样深入且直观地理解？ - 知乎 (zhihu.com)</a></p>
<p>根据使用语境有两种含义，一个是单纯的字面意思，指程序运行的时候。</p>
<p>另一个是指支撑程序运行所需的环境，包括比如系统性的变量、其他系统级的辅助程序等。</p>
</blockquote>`,readingTime:{minutes:9.8,words:2940},title:"Runtime",icon:"simplybuilt",type:"article"}}],["/daily/scm-%20prefix-config.html",{loader:()=>f(()=>import("./scm- prefix-config.html-BmVi-_2O.js"),[]),meta:{date:17191872e5,category:["天天笔记"],tag:["Ubuntu"],excerpt:`
<h2>一、参考文档</h2>
<p>使用文档见：<a href="https://b53bjq9eoy.feishu.cn/docx/INBqdC5WLoD8Qwx9iDXcFDPInpc" target="_blank" rel="noopener noreferrer">SCM 超算平台使用（踩坑指南） - 飞书云文档 (feishu.cn)</a></p>`,readingTime:{minutes:3.85,words:1155},title:"学校 SCM 超算平台使用",icon:"simplybuilt",type:"article"}}],["/daily/str-repr.html",{loader:()=>f(()=>import("./str-repr.html-DXnW9bsl.js"),[]),meta:{date:16357248e5,category:["天天笔记"],tag:["Python"],excerpt:`
<h2>字符串的表示形式</h2>
<p>我们都知道，Python的内置函数<code>repr()</code>能够把对象用字符串的形式表达出来，方便我们辨认。这就是“字符串表示形式”。<code>repr()</code>就是通过<code>__repr__</code>这个特殊方法来得到一个对象的字符串表示形式的。如果没有实现<code>__repr__</code>，当我们在控制台里打印一个向量的实例时，得到的字符串可能会是 &lt;Vector object at 0x10a514f98&gt;。</p>`,readingTime:{minutes:2.76,words:827},title:"__str__和__repr__的异同",icon:"simplybuilt",type:"article"}}],["/daily/tree.html",{loader:()=>f(()=>import("./tree.html-HraYTyZc.js"),[]),meta:{date:16781472e5,category:["天天笔记"],excerpt:`
<h2>概述</h2>
<p>我们平时其实接触到了各种树的应用，如二叉树、二叉搜索树、平衡二叉树、B树、B+树，下面将列出一些对其定义的个人理解。<a href="https://zhuanlan.zhihu.com/p/27700617" target="_blank" rel="noopener noreferrer">平衡二叉树、B树、B+树、B*树 理解其中一种你就都明白了 - 知乎 (zhihu.com)</a></p>`,readingTime:{minutes:7.39,words:2216},title:"Tree",icon:"simplybuilt",type:"article"}}],["/daily/vue3-lifecycle.html",{loader:()=>f(()=>import("./vue3-lifecycle.html-CriHD1FQ.js"),[]),meta:{date:16426368e5,category:["天天笔记"],tag:["Vue"],excerpt:`
<h2>生命周期图示</h2>
<p>下图展示了实例的生命周期。我们不需要立马弄明白所有的东西，不过随着不断学习和使用，它的参考价值会越来越高。</p>`,readingTime:{minutes:.37,words:111},title:"Vue3 Lifecycle",icon:"simplybuilt",type:"article"}}],["/daily/vuepress-starter.html",{loader:()=>f(()=>import("./vuepress-starter.html-DEc3lDCW.js"),[]),meta:{date:16426368e5,category:["天天笔记"],tag:["Vue","VuePress","使用指南"],excerpt:`
<h2>简介</h2>
<p>VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 <a href="https://zh.wikipedia.org/wiki/Markdown" target="_blank" rel="noopener noreferrer">Markdown在新窗口打开</a> 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。</p>`,readingTime:{minutes:2.64,words:793},title:"VuePress",icon:"simplybuilt",type:"article"}}],["/daily/wechat-deploy.html",{loader:()=>f(()=>import("./wechat-deploy.html-C_x66VDu.js"),[]),meta:{date:16341696e5,category:["天天笔记"],tag:["WeChatApp","Backend","Deploy"],excerpt:`
<h2>环境开发类型</h2>
<ul>
<li>云开发</li>
<li>云托管
<ul>
<li>持续集成</li>
<li>Dockerfile</li>
</ul>
</li>
<li>个人服务器 + 备案的 https 域名</li>
</ul>`,readingTime:{minutes:.25,words:76},title:"微信小程序后端开发环境部署",icon:"simplybuilt",type:"article"}}],["/en/home.html",{loader:()=>f(()=>import("./home.html-BDV3PqsE.js"),[]),meta:{title:"Project home",icon:"at"}}],["/en/",{loader:()=>f(()=>import("./index.html-CN4xO6An.js"),[]),meta:{title:"Blog Home",icon:"mdi:home"}}],["/interview/aq.html",{loader:()=>f(()=>import("./aq.html-C1NP6SVY.js"),[]),meta:{date:1642032e6,category:["面试瞎想"],tag:["Interview"],excerpt:`
<p><strong>1. 你对于“需要了解代码底层才能写好程序”持何观点？</strong></p>`,readingTime:{minutes:2.61,words:782},title:"Q&A",icon:"simplybuilt",type:"article"}}],["/interview/bytedance.html",{loader:()=>f(()=>import("./bytedance.html-DUjPXwT8.js"),[]),meta:{date:16781472e5,category:["面试瞎想"],tag:["Interview","ByteDance"],excerpt:`
<p>微信视频设计用例！！！</p>
<p>测试在字节中的地位</p>`,readingTime:{minutes:67.55,words:20265},title:"字节跳动面试",icon:"simplybuilt",type:"article"}}],["/interview/code.html",{loader:()=>f(()=>import("./code.html-BZO4OSF0.js"),[]),meta:{date:16781472e5,excerpt:`
<ol>
<li>大数相乘</li>
<li>零钱兑换</li>
<li>链表判环</li>
<li>大数除法</li>
<li>leetcode440</li>
<li>ip复原</li>
</ol>`,readingTime:{minutes:.11,words:34},title:"手撕代码",type:"article"}}],["/interview/didi.html",{loader:()=>f(()=>import("./didi.html-Dw7oGgZ_.js"),[]),meta:{date:16781472e5,excerpt:`
<h2>测开</h2>
<ol>
<li>
<p>IOC和AOP，DI</p>
<p><strong>区分</strong></p>
<p>AOP、OOP在字面上虽然非常类似，但却是面向不同领域的两种设计思想。OOP（<a href="https://baike.baidu.com/item/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B" target="_blank" rel="noopener noreferrer">面向对象编程</a>）针对业务处理过程的实体及其属性和行为进行抽象封装，以获得更加清晰高效的<a href="https://baike.baidu.com/item/%E9%80%BB%E8%BE%91%E5%8D%95%E5%85%83" target="_blank" rel="noopener noreferrer">逻辑单元</a>划分。</p>
<p>而AOP则是针对业务处理过程中的切面进行提取，它所面对的是处理过程中的某个步骤或阶段，以获得逻辑过程中各部分之间低<a href="https://baike.baidu.com/item/%E8%80%A6%E5%90%88%E6%80%A7" target="_blank" rel="noopener noreferrer">耦合性</a>的隔离效果。这两种设计思想在目标上有着本质的差异。</p>
<p>上面的陈述可能过于理论化，举个简单的例子，对于“雇员”这样一个<a href="https://baike.baidu.com/item/%E4%B8%9A%E5%8A%A1%E5%AE%9E%E4%BD%93" target="_blank" rel="noopener noreferrer">业务实体</a>进行封装，自然是OOP/OOD的任务，我们可以为其建立一个“Employee”类，并将“雇员”相关的属性和行为封装其中。而用AOP设计思想对“雇员”进行封装将无从谈起。</p>
<p>同样，对于“权限检查”这一动作片断进行划分，则是AOP的目标领域。而通过OOD/OOP对一个动作进行封装，则有点不伦不类。</p>
<p>换而言之，OOD/OOP面向名词领域，AOP面向动词领域。</p>
<p><strong>关系</strong></p>
<p>很多人在初次接触 AOP 的时候可能会说，AOP 能做到的，一个定义良好的 OOP 的接口也一样能够做到，我想这个观点是值得商榷的。AOP和定义良好的 OOP 的接口可以说都是用来解决并且实现需求中的横切问题的方法。但是对于 OOP 中的接口来说，它仍然需要我们在相应的模块中去调用该接口中相关的方法，这是 OOP 所无法避免的，并且一旦接口不得不进行修改的时候，所有事情会变得一团糟；AOP 则不会这样，你只需要修改相应的 Aspect，再重新编织（weave）即可。 当然，AOP 也绝对不会代替 OOP。核心的需求仍然会由 OOP 来加以实现，而 AOP 将会和 OOP 整合起来，以此之长，补彼之短。</p>
</li>
<li>
<p>冒泡排序、归并排序、快排、选择排序、归并排序、最长重复子串</p>
</li>
<li>
<p>如何理解容器</p>
</li>
<li>
<p>http和https，ssl建立连接过程</p>
</li>
<li>
<p>tcp3次握手，4次挥手</p>
</li>
<li></li>
</ol>`,readingTime:{minutes:2.09,words:628},title:"滴滴",type:"article"}}],["/interview/hikvision.html",{loader:()=>f(()=>import("./hikvision.html-uXEYce6Q.js"),[]),meta:{date:16781472e5,excerpt:`
<blockquote>
<p>测试开发</p>
</blockquote>`,readingTime:{minutes:24.08,words:7224},title:"海康威视",type:"article"}}],["/interview/me.html",{loader:()=>f(()=>import("./me.html-CissXh9B.js"),[]),meta:{date:16781472e5,isEncrypted:!0,readingTime:{minutes:2.16,words:648},title:"自我介绍",type:"article"}}],["/interview/note.html",{loader:()=>f(()=>import("./note.html-B6oHAZSS.js"),[]),meta:{date:16781472e5,excerpt:`
<h2>SQL</h2>
<h3>sql执行顺序</h3>`,readingTime:{minutes:.75,words:226},title:"知识点整理",type:"article"}}],["/interview/",{loader:()=>f(()=>import("./index.html-eWzdZLcp.js"),[]),meta:{date:16426368e5,category:["面试瞎想"],readingTime:{minutes:.07,words:21},title:"面试瞎想",icon:"✨",type:"article"}}],["/intro/",{loader:()=>f(()=>import("./index.html-gNiH5_iI.js"),[]),meta:{title:"档案主页",icon:"mdi:user-tag"}}],["/java/base.html",{loader:()=>f(()=>import("./base.html-DMYyXgOt.js"),[]),meta:{date:1738368e6,excerpt:`
<ol>
<li>
<p>Java 是面向对象的（OOP）</p>
</li>
<li>
<p>Java 语言是健壮的：Java 的强类型机制、异常处理、垃圾自动回收等</p>
</li>
<li>
<p>Java 语言具有跨平台性，即一次编译（.class），多端运行</p>
</li>
<li>
<p>Java 语言是解释型<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup><sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>语言</p>
</li>
<li></li>
</ol>`,readingTime:{minutes:.48,words:143},title:"Java 基础",type:"article"}}],["/java/bean.html",{loader:()=>f(()=>import("./bean.html-DDmNdcgz.js"),[]),meta:{date:16752096e5,excerpt:`
<h2>Spring Bean</h2>
<blockquote>
<p>Spring Bean 是 Spring 框架中被管理的对象。它可以是符合特定规范的 Java 类实例。Spring 通过配置文件或注解等方式来定义个管理这些 Bean，实现了对象的创建、初始化、依赖注入等生命周期的管理。这使得应用程序的组件之间更加松散耦合，提高代码的可维护性和可扩展性。</p>
</blockquote>`,readingTime:{minutes:4.08,words:1225},title:"Bean",type:"article"}}],["/java/hashmap.html",{loader:()=>f(()=>import("./hashmap.html-DOciJ2bw.js"),[]),meta:{date:17407872e5,excerpt:`
<h2>Java8为什么将HashMap的插入方法改为了尾插法</h2>`,readingTime:{minutes:15.72,words:4717},title:"HashMap",type:"article"}}],["/java/jeepay.html",{loader:()=>f(()=>import("./jeepay.html-CwFNiB1V.js"),[]),meta:{date:17449344e5,category:["天天笔记"],excerpt:`
<blockquote>
<p>记一次耗时 7 天的独立完成的聚合支付项目需求分析、调研、全栈开发、调试及部署过程，原项目详见<a href="https://github.com/jeequan/jeepay" target="_blank" rel="noopener noreferrer">Jeepay</a></p>
<p>二次开发项目见：<a href="https://github.com/ET-yzk/jeepay" target="_blank" rel="noopener noreferrer">ET-yzk / jeepay</a></p>
<p>部署项目见：<a href="https://merchant.yzketx.online" target="_blank" rel="noopener noreferrer">https://merchant.yzketx.online</a></p>
<p>主要修改点：<a href="https://merchant.yzketx.online/prefilledOrder/publicPay" target="_blank" rel="noopener noreferrer">https://merchant.yzketx.online/prefilledOrder/publicPay</a></p>
</blockquote>`,readingTime:{minutes:3.84,words:1153},title:"Jeepay 聚合支付项目二次开发",icon:"simplybuilt",type:"article"}}],["/java/lock.html",{loader:()=>f(()=>import("./lock.html-DZ2WZ6NQ.js"),[]),meta:{date:1738368e6,excerpt:`
<p><a href="https://blog.csdn.net/hd12370/article/details/82814348" target="_blank" rel="noopener noreferrer">死锁面试题（什么是死锁，产生死锁的原因及必要条件）_AddoilDan的博客-CSDN博客_死锁</a></p>`,readingTime:{minutes:23.25,words:6974},title:"Lock",type:"article"}}],["/java/mapstruct.html",{loader:()=>f(()=>import("./mapstruct.html-DNc0T7Bl.js"),[]),meta:{date:17407872e5,excerpt:`
<blockquote>
<p><a href="https://mapstruct.org" target="_blank" rel="noopener noreferrer">MapStruct</a> is a code generator that greatly simplifies the implementation of mappings between Java bean types based on a convention over configuration approach.</p>
<p>The generated mapping code uses plain method invocations and thus is fast, type-safe and easy to understand.</p>
</blockquote>`,readingTime:{minutes:1.84,words:551},title:"MapStruct",type:"article"}}],["/java/oj-mate.html",{loader:()=>f(()=>import("./oj-mate.html-CIoqQF7a.js"),[]),meta:{date:1744848e6,excerpt:`
<blockquote>
<p>OJ+在线课程+课程/算法双向推荐+伙伴匹配</p>
</blockquote>`,readingTime:{minutes:23,words:6899},title:"iStep 改造",type:"article"}}],["/java/parallel-stream.html",{loader:()=>f(()=>import("./parallel-stream.html-CnSltv32.js"),[]),meta:{date:1738368e6,excerpt:`
<p>这个方法有陷阱，参见 https://cloud.tencent.com/developer/article/2092812 等等</p>`,readingTime:{minutes:.06,words:19},title:"Parallel Stream",type:"article"}}],["/java/requestbody-requestparam.html",{loader:()=>f(()=>import("./requestbody-requestparam.html-qiBopUVV.js"),[]),meta:{date:17407872e5,excerpt:`
<h2>@RequestBody 和 @RequestParam 原理</h2>`,readingTime:{minutes:5.55,words:1666},title:"SpringMVC",type:"article"}}],["/java/session.html",{loader:()=>f(()=>import("./session.html-DVQm8HLV.js"),[]),meta:{date:17407872e5,excerpt:`
<h2>一、问题现象</h2>
<p>本地部署多个服务时出现以下现象：</p>`,readingTime:{minutes:3.04,words:912},title:"单机多服务部署下 JSESSIONID 冲突解决方案",type:"article"}}],["/java/spring-aop.html",{loader:()=>f(()=>import("./spring-aop.html-CxwZ4Lks.js"),[]),meta:{date:17407872e5,excerpt:`
<h2>遇到问题</h2>
<h3>Call transactional methods via an injected dependency instead of directly via 'this’</h3>`,readingTime:{minutes:4.04,words:1213},title:"Spring AOP",type:"article"}}],["/java/springboot-error-path.html",{loader:()=>f(()=>import("./springboot-error-path.html-DpU37P8U.js"),[]),meta:{date:1738368e6,excerpt:`
<p>在 Spring Boot 应用中，当某些错误或特定情况发生时，请求会被转发或重定向到 <code>/error</code> 路径，然后由注册到该路径的 <code>ErrorController</code> (例如Spring Boot默认的 <code>BasicErrorController</code> 或自定义的 <code>MateMatchErrorController</code>) 来处理。</p>`,readingTime:{minutes:3.39,words:1017},title:"SpringBoot 中关于 /error 到处理",type:"article"}}],["/java/sql-query.html",{loader:()=>f(()=>import("./sql-query.html-Bf1GGVj6.js"),[]),meta:{date:1738368e6,excerpt:`
<h2>简述</h2>
<p>SQL查询语句的执行顺序与书写顺序不同，具体步骤如下（基于MySQL）：</p>`,readingTime:{minutes:3.35,words:1005},title:"SQL 查询语句执行顺序",type:"article"}}],["/java/tips.html",{loader:()=>f(()=>import("./tips.html-CYjd2s2C.js"),[]),meta:{date:1738368e6,excerpt:`
<h2>工具类</h2>
<blockquote>
<p>优秀的工具类不应该只是用他们，更应该深入到他们的实现，去学习他们优秀的实现。</p>
</blockquote>`,readingTime:{minutes:.32,words:97},title:"Java Usage",type:"article"}}],["/java/volatile.html",{loader:()=>f(()=>import("./volatile.html-CbtHB5vs.js"),[]),meta:{date:17385408e5,excerpt:`
<blockquote>
<p><a href="https://www.mianshiya.com/question/1780933295115104258" target="_blank" rel="noopener noreferrer">面试鸭-Java中volatile关键字的作用是什么？</a>保证变量可见性和部分有序性。</p>
<p><a href="https://www.mianshiya.com/question/1780933295043801090" target="_blank" rel="noopener noreferrer">面试鸭-什么是Java中的指令重排序？</a>Java编译器和处理器为优化性能，在保证<strong>单线程程序语义不变</strong>的情况下，对指令执行顺序进行重新调整。</p>
<p><code>volatile</code> 直接翻译成中文，最常见的、能体现其“易变”或“不稳定”含义的词是：</p>
<ol>
<li><strong>易变的 (yì biàn de)</strong> - 这个最直接，表示容易改变。</li>
<li><strong>不稳定的 (bù wěndìng de)</strong> - 也体现了其值可能随时会变动，不固定的性质。</li>
<li><strong>易挥发 (yì huīfā)</strong> - 这是从化学中的“易挥发物质”引申过来的意思，指容易蒸发、转变成气体。在计算机领域有时也用这个词，带有值容易“飘走”、“丢失”或被覆盖的隐喻。</li>
<li><strong>易失 (yì shī)</strong> - 这个词在计算机领域常用于“易失性内存 (volatile memory)”，指断电后数据会丢失的内存（如 RAM）。</li>
</ol>
<p>在 Java 多线程的上下文中，<code>volatile</code> 强调的是变量的<strong>可见性</strong>，即一个线程对它的修改能立刻被其他线程看到。这里的“易变”或“不稳定”是指这个变量的值不受 CPU 缓存的束缚，总是直接从主内存读取，因为它“可能被其他线程随时改变”，所以它的值是“易变的”、“不稳定的”，不能假设它在缓存中是最新或一致的。</p>
<p>所以，最能直接翻译其含义并适用于编程上下文的是 <strong>易变的</strong> 或 <strong>不稳定的</strong>，而 <strong>易挥发</strong> 也是一个常用但略带比喻色彩的翻译。</p>
</blockquote>`,readingTime:{minutes:9.68,words:2903},title:"volatile 关键字",type:"article"}}],["/java/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%92%8C%E5%8F%8C%E4%BA%B2%E5%A7%94%E6%B4%BE.html",{loader:()=>f(()=>import("./类加载和双亲委派.html-BHD2prgd.js"),[]),meta:{date:17384544e5,excerpt:`
<h2>类加载</h2>
<hr>
<h3><strong>类加载器的实现机制</strong></h3>`,readingTime:{minutes:19,words:5700},title:"类加载器",type:"article"}}],["/java/%E8%B8%A9%E5%9D%91%E8%AE%B0%E5%BD%95.html",{loader:()=>f(()=>import("./踩坑记录.html-CbJea06l.js"),[]),meta:{date:17356896e5,excerpt:`
<h2>Idea</h2>
<h3>Lombok 没有正确注入</h3>`,readingTime:{minutes:8.38,words:2513},title:"SpringBoot3 踩坑实录",type:"article"}}],["/knowledge_base/api.html",{loader:()=>f(()=>import("./api.html-PhZw0U7I.js"),[]),meta:{date:16781472e5,excerpt:`
<h2>安全</h2>
<p>API 在生产环境中不可返回缺失的参数信息，最多只可在调试阶段返回。</p>`,readingTime:{minutes:.13,words:40},title:"API 必知必会",type:"article"}}],["/knowledge_base/",{loader:()=>f(()=>import("./index.html-DXFcbMi4.js"),[]),meta:{date:16781472e5,category:["备忘清单"],readingTime:{minutes:.13,words:39},title:"备忘清单",icon:"🎗️",type:"article"}}],["/knowledge_base/sql.html",{loader:()=>f(()=>import("./sql.html-wzO18qXG.js"),[]),meta:{date:16781472e5,excerpt:`
<h2>count</h2>
<ul>
<li>count(*) ：它会获取所有行的数据，不做任何处理，行数加1。</li>
<li>count(1)：它会获取所有行的数据，每行固定值1，也是行数加1。</li>
<li>count(id)：id代表主键，它需要从所有行的数据中解析出id字段，其中id肯定都不为NULL，行数加1。</li>
<li>count(普通索引列)：它需要从所有行的数据中解析出普通索引列，然后判断是否为NULL，如果不是NULL，则行数+1。</li>
<li>count(未加索引列)：它会全表扫描获取所有数据，解析中未加索引列，然后判断是否为NULL，如果不是NULL，则行数+1。</li>
</ul>`,readingTime:{minutes:2.47,words:740},title:"SQL 必知必会",type:"article"}}],["/leetcode/leetcode.html",{loader:()=>f(()=>import("./leetcode.html-BWLlJLwA.js"),[]),meta:{date:16409952e5,category:["力扣刷题"],tag:["Algorithm"],excerpt:`
<p>[TOC]</p>
<h2>动态规划</h2>`,readingTime:{minutes:1.68,words:503},title:"LeetCode 笔记",icon:"simplybuilt",type:"article"}}],["/leetcode/",{loader:()=>f(()=>import("./index.html-C1dAFwRY.js"),[]),meta:{date:16426368e5,category:["力扣刷题"],readingTime:{minutes:.09,words:28},title:"力扣刷题",icon:"simple-icons:leetcode",type:"article"}}],["/leetcode/tips.html",{loader:()=>f(()=>import("./tips.html-BJb7jjSo.js"),[]),meta:{date:16781472e5,category:["力扣刷题"],tag:["Algorithm"],excerpt:`
<h2>思路</h2>
<ol>
<li>
<p>对于 <code>int</code> 数据处理可考虑：</p>
<ul>
<li>排序</li>
<li>位运算，如异或</li>
<li>数学规律</li>
</ul>
</li>
<li>
<p>递归【以中间情况来思考】</p>
</li>
<li>
<p>从后往前！！比如在特定空间排序</p>
</li>
<li>
<p>左右匹配：可用栈，左值直接入栈，右值与栈尾匹配</p>
</li>
<li>
<p><code>连续长度的最值问题</code>优先考虑<code>滑动窗口</code></p>
</li>
<li>
<p>对于多种走法的最值问题大多数情况下优先考虑BFS，如果用BFS解决不了再考虑DFS。
对于多种走法的概率或种数问题则考虑用动态规划。</p>
</li>
<li>
<p>利用位运算：</p>
<ul>
<li>
<p>奇偶判断：&amp;1 -&gt; 与运算</p>
</li>
<li>
<p>2 倍运算：利用 &gt;&gt;n -&gt; /2^n，n&lt;&lt; -&gt;*2^n</p>
</li>
</ul>
</li>
<li>
<p>由于python的特性，或许在一开始就申请完空间会比采用append更高效</p>
</li>
<li>
<p>首尾指针：left, right = 0, length - 1; left &lt; right</p>
</li>
<li>
<p>快慢指针：slow, fast = 0, 0; fast走的快</p>
</li>
<li>
<p>快排的base可以取nums[low]/nums[high]</p>
<p>对应：需要注意取nums[low]则需先从从高位开始向前，取nums[high]则需先从低位向后。</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-python"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> quick_sort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> low</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> high</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> low </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&gt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> high:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    i, j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> low, high  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 对应</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    base </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> nums[low]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> j:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> j </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">and</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> nums[j] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&gt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> base:  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 对应</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        nums[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> nums[j]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> j </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">and</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> nums[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> base:  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 对应</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        nums[j] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> nums[i]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    nums[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> base</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">    quick_sort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(low, i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">    quick_sort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, high)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>巧妙利用 短路特性</p>
</li>
<li>
<p>搜索二叉树与中序遍历，左小右大</p>
</li>
<li>
<p>完全二叉树叶子节点为所有节点的一半</p>
</li>
<li>
<p>建立【大顶堆/小顶堆】只能保证堆顶的【最大/最小值】</p>
</li>
<li>
<p>线段树？<a href="https://leetcode-cn.com/problems/maximum-subarray/solution/zui-da-zi-xu-he-by-leetcode-solution/" target="_blank" rel="noopener noreferrer">最大子序和 - 最大子数组和 - 力扣（LeetCode） (leetcode-cn.com)</a></p>
</li>
<li>
<p>HashMap用于解决匹配问题，如两数之和等</p>
</li>
<li>
<p>快慢指针实现中间节点的获取 <a href="https://leetcode.cn/problems/palindrome-linked-list/description/" target="_blank" rel="noopener noreferrer">234.回文链表</a></p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">ListNode</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> slow </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">ListNode</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> fast </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 快慢指针找到中间节点</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (fast </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> &amp;&amp;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> fast</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">next</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> !=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    slow </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> slow</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    fast </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> fast</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (fast </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // 说明存在奇数中间节点</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // 相关处理逻辑，如跳过等</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>`,readingTime:{minutes:2.56,words:767},title:"总结",icon:"simplybuilt",type:"article"}}],["/llm/Current%20Research%20Status%20of%20LLMs%20in%20Processing%20Tabu.html",{loader:()=>f(()=>import("./Current Research Status of LLMs in Processing Tabu.html-DOaSLNSG.js"),[]),meta:{date:17416512e5,excerpt:'<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120">',readingTime:{minutes:9.88,words:2964},title:"Current Research Status of LLMs in Processing Tabular Files and the Role of Agent Systems",type:"article"}}],["/llm/coda-correction.html",{loader:()=>f(()=>import("./coda-correction.html-D3BMZu0c.js"),[]),meta:{date:17356896e5,excerpt:`
<h2>目标</h2>
<p>实现大模型自动纠错，不在乎代码只在乎结果。</p>`,readingTime:{minutes:4.08,words:1223},title:"代码纠错研究",type:"article"}}],["/llm/prompt.html",{loader:()=>f(()=>import("./prompt.html-CelcG8jE.js"),[]),meta:{date:1738368e6,excerpt:`
<table>
<thead>
<tr>
<th>method</th>
<th>prompt</th>
<th>reference</th>
</tr>
</thead>
<tbody>
<tr>
<td>Q2D</td>
<td 1="" query="" empty="">Write a passage that answers the given query:<br>- Query:<br>Passage: {doc 1}<br>- Query: {query 2}<br>Passage: {doc 2}<br>- Query: {query 3}<br>Passage: {doc 3}<br>- Query: {query 4}<br>Passage: {doc 4}<br>- Query: {query}<br>Passage:</td>
<td></td>
</tr>
<tr>
<td>Q2D/ZS</td>
<td query="">Write a passage that answers the following query:</td>
<td></td>
</tr>
<tr>
<td>Q2D/PRF</td>
<td 1="" prf="" doc="" empty="">Write a passage that answers the given query based on the context:<br>- Context:<br>{PRF doc 2}<br>{PRF doc 3}<br>- Query: {query}<br>Passage:</td>
<td></td>
</tr>
<tr>
<td>Q2E</td>
<td 1="" query="" empty="">Write a list of keywords for the given query:<br>- Query:<br>Keywords: {expansion 1}<br>- Query: {query 2}<br>Keywords: {expansion 2}<br>- Query: {query 3}<br>Keywords: {expansion 3}<br>- Query: {query 4}<br>Keywords: {expansion 4}<br>- Query: {query}<br>Keywords:</td>
<td></td>
</tr>
<tr>
<td>Q2E/ZS</td>
<td query="">Write a list of keywords for the following query:</td>
<td></td>
</tr>
<tr>
<td>Q2E/PRF</td>
<td 1="" prf="" doc="" empty="">Write a list of keywords for the given query based on the context:<br>- Context:<br>{PRF doc 2}<br>{PRF doc 3}<br>- Query: {query}<br>Keywords:</td>
<td></td>
</tr>
<tr>
<td>CoT</td>
<td query="">Answer the following query:<br>Give the rationale before answering</td>
<td></td>
</tr>
<tr>
<td>CoT/PRF</td>
<td 1="" prf="" doc="">Answer the following query based on the context:<br>- Context:<br>{PRF doc 2}<br>{PRF doc 3}<br>- Query: {query}<br>Give the rationale before answering</td>
<td></td>
</tr>
</tbody>
</table>`,readingTime:{minutes:4.22,words:1265},title:"Prompt",type:"article"}}],["/mysql/read-many-data.html",{loader:()=>f(()=>import("./read-many-data.html-nz-iP68Q.js"),[]),meta:{date:1738368e6,excerpt:`
<ol>
<li>先尽可能筛选掉无关的数据（只取需要的行和列） ✅ 推荐</li>
<li>使用线程池 ✅ 推荐</li>
<li>手动分页查询 ⚠️ 每次的 offset 依旧需要消耗一定数据库计算</li>
<li>Mybatis 流式查询 ⚠️ 注意数据库连接池资源</li>
</ol>`,readingTime:{minutes:7.71,words:2312},title:"读取大量数据库数据的优化策略",type:"article"}}],["/offer/offer_review.html",{loader:()=>f(()=>import("./offer_review.html-CFjicY8P.js"),[]),meta:{date:15805152e5,excerpt:`
<p>需看项目：</p>
<p>智能BI、OJ、云图库（部分）、AI智能体</p>`,readingTime:{minutes:.39,words:117},title:"面试准备及复盘",index:!1,type:"article"}}],["/other/aliyun-server.html",{loader:()=>f(()=>import("./aliyun-server.html-CiZ692P9.js"),[]),meta:{date:16333056e5,category:["未知分类"],tag:["Aliyun"],excerpt:`
<h2>关闭原有服务</h2>
<p>应用程序安装信息：</p>`,readingTime:{minutes:.29,words:86},title:"阿里云轻量服务器自定义服务",icon:"simplybuilt",type:"article"}}],["/other/github-page.html",{loader:()=>f(()=>import("./github-page.html-pyrODjUL.js"),[]),meta:{date:16330464e5,category:["未知分类"],tag:["GithubPage"],excerpt:"<h2>Welcome to GitHub Pages</h2>",readingTime:{minutes:.64,words:192},title:"",icon:"simplybuilt",type:"article"}}],["/other/otherAPI.html",{loader:()=>f(()=>import("./otherAPI.html-DKVF4379.js"),[]),meta:{date:1642032e6,category:["未知分类"],tag:["API"],excerpt:`
<h2>一言</h2>
<p><a helf="https://v1.hitokoto.cn/?encode=text">一言</a></p>`,readingTime:{minutes:.93,words:279},title:"Other API",icon:"simplybuilt",type:"article"}}],["/other/",{loader:()=>f(()=>import("./index.html-BFyxQ6k7.js"),[]),meta:{date:16426368e5,category:["未知分类"],readingTime:{minutes:.18,words:53},title:"未知分类",icon:"👻",type:"article"}}],["/paper/Data-Copilot-%20Bridging%20Billions%20of%20Data%20and%20Humans%20with%20Autonomous%20Workflow.html",{loader:()=>f(()=>import("./Data-Copilot- Bridging Billions of Data and Humans with Autonomous Workflow.html-Fk0CKslj.js"),[]),meta:{date:17339616e5,category:["论文阅读"],tag:["LLM","Data Process"],excerpt:`
<blockquote>
<p>Wenqi Zhang, Yongliang Shen, Weiming Lu, and Yueting Zhuang. Data-Copilot: Bridging Billions of Data and Humans with Autonomous Workflow: arXiv:2306.07209[Z]. arXiv，2023. (2023–06–12).</p>
</blockquote>`,readingTime:{minutes:5.67,words:1702},title:"Data-Copilot: Bridging Billions of Data and Humans with Autonomous Workflow",type:"article"}}],["/paper/SELF-INSTRUCT%20Aligning%20Language%20Models%20with%20Self-Generated%20Instructions.html",{loader:()=>f(()=>import("./SELF-INSTRUCT Aligning Language Models with Self-Generated Instructions.html-BxZOTQEB.js"),[]),meta:{date:17350848e5,category:["论文阅读"],tag:["LLM"],excerpt:`
<blockquote>
<p>Wang, Yizhong, Yeganeh Kordi, Swaroop Mishra, Alisa Liu, Noah A. Smith, Daniel Khashabi, and Hannaneh Hajishirzi. Self-Instruct: Aligning Language Models with Self-Generated Instructions: arXiv:2212.10560[Z]. arXiv，2023. (2023–05–25).</p>
</blockquote>`,readingTime:{minutes:2.93,words:879},title:"SELF-INSTRUCT: Aligning Language Models with Self-Generated Instructions",type:"article"}}],["/paper/",{loader:()=>f(()=>import("./index.html-DsTidobb.js"),[]),meta:{date:15778368e5,category:["论文阅读"],readingTime:{minutes:.06,words:19},title:"论文阅读",icon:"📜",type:"article"}}],["/paprikayi/Halloween.html",{loader:()=>f(()=>import("./Halloween.html-Ctv5041q.js"),[]),meta:{date:16987104e5,isEncrypted:!0,readingTime:{minutes:.03,words:9},title:"Halloween!",type:"article"}}],["/paprikayi/",{loader:()=>f(()=>import("./index.html-z0K9QHWs.js"),[]),meta:{date:16987104e5,category:["PaprikaYi"],isEncrypted:!0,readingTime:{minutes:.05,words:15},title:"PaprikaYi",icon:"🌶️",type:"article"}}],["/problem/Android%20Studio.html",{loader:()=>f(()=>import("./Android Studio.html-DkFMSaaK.js"),[]),meta:{date:16366752e5,category:["踩坑指南"],tag:["Android","Tools"],excerpt:`
<h2>Could not install Gradle distribution</h2>`,readingTime:{minutes:.27,words:82},title:"Android Studio 😃",icon:"simplybuilt",type:"article"}}],["/problem/Conda-Downloaded-bytes-did-not-match-Content-Length.html",{loader:()=>f(()=>import("./Conda-Downloaded-bytes-did-not-match-Content-Length.html-Dmni3X5q.js"),[]),meta:{date:16340832e5,category:["踩坑指南"],tag:["Conda"],excerpt:`
<h2>问题描述</h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">CondaError:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Downloaded</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bytes</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> did</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> not</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> match</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Content-Length</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  url:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://repo.anaconda.com/pkgs/main/linux-64/cudnn-7.0.5-cuda8.0_0.tar.bz2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  target_path:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /home/yyf/miniconda3/pkgs/cudnn-7.0.5-cuda8.0_0.tar.bz2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  Content-Length:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 261398285</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  downloaded</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bytes:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 47463195</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:1.21,words:362},title:"Conda - Downloaded bytes did not match Content-Length",icon:"simplybuilt",type:"article"}}],["/problem/Microsoft-typewriting.html",{loader:()=>f(()=>import("./Microsoft-typewriting.html-CeNnsdA3.js"),[]),meta:{date:16339104e5,category:["踩坑指南"],tag:["Microsoft","Tools"],excerpt:`
<p><strong>PS：</strong><code>在Microsoft拼音卡到无法使用后，使用了一段时间的搜狗输入法，还是怀念Microsoft拼音的设计，于是决定解决其卡顿问题。以下解决方案来自 知乎用户</code></p>`,readingTime:{minutes:1.77,words:530},title:"Microsoft拼音卡顿问题",icon:"simplybuilt",type:"article"}}],["/problem/Python-cls-self-classmethod-staticmethod.html",{loader:()=>f(()=>import("./Python-cls-self-classmethod-staticmethod.html-kIox4z_n.js"),[]),meta:{date:16341696e5,category:["踩坑指南"],tag:["Python"],excerpt:`
<blockquote>
<p>作者：<a href="https://www.zhihu.com/people/mamingqing" target="_blank" rel="noopener noreferrer">秦风</a>，每个人对他所属的社会都有责任，那个社会的弊病也有他一份。</p>
</blockquote>`,readingTime:{minutes:2.55,words:765},title:"Python: cls 与 self，@classmethod 与 @staticmethod",icon:"simplybuilt",type:"article"}}],["/problem/Too-many-redirects.html",{loader:()=>f(()=>import("./Too-many-redirects.html-CkxWRD5O.js"),[]),meta:{excerpt:`
<h2>问题描述</h2>
<p>今天在更新网站的时候，出现了【重定向次数过多导致网页访问失败】的错误，经过查询，网上提出了几种可能：</p>`,readingTime:{minutes:1.32,words:396},title:"网页重定向次数过多错误",type:"article"}}],["/problem/jupyterlab.html",{loader:()=>f(()=>import("./jupyterlab.html-6D7DaoWB.js"),[]),meta:{date:16353792e5,category:["踩坑指南"],tag:["Jupyter"],excerpt:`
<h2>Extension 报 Error 500 的问题</h2>`,readingTime:{minutes:.69,words:207},title:"Jupyter Lab",icon:"simplybuilt",type:"article"}}],["/problem/",{loader:()=>f(()=>import("./index.html-9TXWRssu.js"),[]),meta:{date:16426368e5,category:["踩坑指南"],readingTime:{minutes:.37,words:110},title:"踩坑指南",icon:"📡",type:"article"}}],["/problem/vim.html",{loader:()=>f(()=>import("./vim.html-DyXpLyF6.js"),[]),meta:{date:1635552e6,category:["踩坑指南"],tag:["Vim"],excerpt:`
<h2>问题 1</h2>
<p>在 Windows Powershell 中通过 vim 编辑并保存文件，会多出 <code>.filename.un~</code> &amp; <code>.filename~</code> 文件</p>`,readingTime:{minutes:1.07,words:322},title:"vim 常见问题",icon:"simplybuilt",type:"article"}}],["/problem/wechat-backend-Django.html",{loader:()=>f(()=>import("./wechat-backend-Django.html-BeUanbM2.js"),[]),meta:{date:1634688e6,category:["踩坑指南"],tag:["WeChat","Django"],excerpt:`
<h3>1. Virtualenv虚拟环境的创建、激活、及退出</h3>`,readingTime:{minutes:1.46,words:439},title:"微信小程序后端开发踩坑之Django",icon:"simplybuilt",type:"article"}}],["/reprint/Vue-improve10.html",{loader:()=>f(()=>import("./Vue-improve10.html-CA6LLqFq.js"),[]),meta:{date:16336512e5,category:["转载整理"],tag:["Vue"],excerpt:`
<blockquote>
<p>作者：bartonwang，腾讯 IEG 客户端开发工程师</p>
</blockquote>`,readingTime:{minutes:11.65,words:3496},title:"Vue 跨平台性能优化十法",icon:"simplybuilt",type:"article"}}],["/reprint/pythonMultithreading.html",{loader:()=>f(()=>import("./pythonMultithreading.html-DdDaTFIT.js"),[]),meta:{date:16390944e5,category:["转载整理"],tag:["Redis","SpringBoot"],excerpt:`
<blockquote>
<p><a href="https://www.zhihu.com/people/chen-chi-40-92" target="_blank" rel="noopener noreferrer">DarrenChan陈驰</a> 国防科技大学 计算机技术硕士</p>
</blockquote>`,readingTime:{minutes:6.34,words:1903},title:"Python 多线程",icon:"simplybuilt",type:"article"}}],["/reprint/rag-or-fine-tuning.html",{loader:()=>f(()=>import("./rag-or-fine-tuning.html-BCuYg53S.js"),[]),meta:{date:17024256e5,category:["转载整理"],tag:["RAG","NLP","LLM"],excerpt:`
<h2>引言</h2>
<p>随着人们对大型语言模型 (LLM) 的兴趣激增，许多开发人员和组织正忙于利用其能力构建应用程序。然而，当开箱即用的预训练LLM没有按预期或希望执行时，如何提高LLM申请的性能的问题。最终我们会问自己：我们应该使用<a href="https://arxiv.org/abs/2005.11401" target="_blank" rel="noopener noreferrer">检索增强生成</a>（RAG）还是模型微调来改善结果？</p>`,readingTime:{minutes:24.96,words:7488},title:"大模型优化：RAG 还是微调？",icon:"simplybuilt",type:"article"}}],["/reprint/",{loader:()=>f(()=>import("./index.html-BCEbVYqz.js"),[]),meta:{date:16426368e5,category:["转载整理"],readingTime:{minutes:.22,words:66},title:"转载整理",icon:"🔭",type:"article"}}],["/reprint/redis-template.html",{loader:()=>f(()=>import("./redis-template.html-i9R1gHFG.js"),[]),meta:{date:1642032e6,category:["转载整理"],tag:["Redis","SpringBoot"],excerpt:`
<blockquote>
<p>整理自 <a href="https://www.jianshu.com/p/7bf5dc61ca06/" target="_blank" rel="noopener noreferrer">如何使用RedisTemplate访问Redis数据结构 - 简书 (jianshu.com)</a></p>
</blockquote>`,readingTime:{minutes:25.82,words:7747},title:"如何使用RedisTemplate访问Redis数据结构",icon:"simplybuilt",type:"article"}}],["/roast/about-agi.html",{loader:()=>f(()=>import("./about-agi.html-Dvwo0cFw.js"),[]),meta:{date:17317152e5,category:["小吐槽"],excerpt:`
<p>其实我关于 AI 的构想，第一反应是美剧《疑犯追踪》中的，而不是电影《钢铁侠》中的 Jvis，这很奇怪</p>`,readingTime:{minutes:.7,words:211},title:"关于 AGI 想法",icon:"mdi:idea",index:!1,type:"article"}}],["/roast/diary.html",{loader:()=>f(()=>import("./diary.html-CG0aKwTj.js"),[]),meta:{category:["小吐槽"],isEncrypted:!0,readingTime:{minutes:9.98,words:2994},title:"《真的是日记》",icon:"🌸",index:!1,type:"article"}}],["/roast/",{loader:()=>f(()=>import("./index.html-C9PdaAI6.js"),[]),meta:{date:1677456e6,category:["小吐槽"],excerpt:'<p>本来这里是有吐槽的，但是捏，记着记着就…写得多了点 <a href="diary">🫥</a></p>',readingTime:{minutes:.23,words:68},title:"《假装是日记》",icon:"twemoji:woozy-face",type:"article"}}],["/roast/todo-list.html",{loader:()=>f(()=>import("./todo-list.html-B27hfnY8.js"),[]),meta:{category:["小吐槽"],isEncrypted:!0,readingTime:{minutes:.09,words:27},title:"《假装是待办》",icon:"🪴",index:!1,type:"article"}}],["/tip/Jupyter%20Lab%20Useage.html",{loader:()=>f(()=>import("./Jupyter Lab Useage.html-BEtfS6CN.js"),[]),meta:{date:16752096e5,excerpt:`
<h2>基础操作</h2>
<ul>
<li>切换命令模式与编辑模式:
<ul>
<li>Esc 或 Ctrl+M: 进入命令模式（无光标，无加粗框）</li>
<li>Enter: 进入编辑模式（有光标，有加粗框）</li>
</ul>
</li>
</ul>`,readingTime:{minutes:1.2,words:360},title:"Jupyter Lab Useage",type:"article"}}],["/tip/disable.html",{loader:()=>f(()=>import("./disable.html-rcoZG18q.js"),[]),meta:{date:16426368e5,category:["使用指南"],excerpt:`<p>你可以通过设置页面的 Frontmatter，在页面禁用一些功能。</p>
`,readingTime:{minutes:.4,words:120},title:"组件禁用",icon:"material-symbols:disabled-by-default-rounded",type:"article"}}],["/tip/encrypt.html",{loader:()=>f(()=>import("./encrypt.html-XhnbDVcN.js"),[]),meta:{date:16426368e5,category:["使用指南"],tag:["使用指南"],isEncrypted:!0,readingTime:{minutes:.57,words:171},title:"密码加密的文章",icon:"material-symbols:encrypted",type:"article"}}],["/tip/page.html",{loader:()=>f(()=>import("./page.html-CK0yECI6.js"),[]),meta:{author:"yzk",date:15778368e5,category:["使用指南"],tag:["使用指南"],excerpt:`<h2>页面信息</h2>
<p>你可以在 Markdown 的 Frontmatter 中设置页面信息。</p>`,readingTime:{minutes:1.06,words:318},title:"页面配置",icon:"mdi:file",type:"article"}}],["/tip/",{loader:()=>f(()=>import("./index.html-QmNKDCRA.js"),[]),meta:{date:16426368e5,category:["使用指南"],excerpt:`<blockquote>
<p>在 vuepress 的 markdown 文件中，如果使用了没有包裹的 &lt;&gt; 标签，那么该标签中的内容会被渲染为 HTML，从而导致页面展示异常。</p>
<p>一个方便的解决方法是，使用 \` \` 来包裹内容，这样内容会被渲染为纯文本。</p>
</blockquote>`,readingTime:{minutes:.34,words:102},title:"主要功能与配置演示",icon:"vscode-icons:file-type-vueconfig",type:"article"}}],["/tip/typora.html",{loader:()=>f(()=>import("./typora.html-BdbBlKCi.js"),[]),meta:{date:16448832e5,category:["使用指南"],tag:["Tools"],excerpt:`
<blockquote>
<p>Typora is a cross-platform minimal markdown editor, providing seamless experience for both markdown readers and writers.</p>
</blockquote>`,readingTime:{minutes:2.16,words:649},title:"Typora",icon:"fluent:scan-type-24-filled",type:"article"}}],["/tmp/langchain.html",{loader:()=>f(()=>import("./langchain.html-DmK3NdYH.js"),[]),meta:{date:15778368e5,excerpt:"<p>使用例子：https://zhuanlan.zhihu.com/p/651151321</p>",readingTime:{minutes:.05,words:16},title:"",type:"article"}}],["/tmp/llm_usage.html",{loader:()=>f(()=>import("./llm_usage.html-DCVJbv3B.js"),[]),meta:{date:15778368e5,excerpt:`<ul>
<li>将few-shot放在history，模拟连续对话，glm反卷总局在chatglm2证实了该方法比直接将few-shot全部放在prompt中效果要好</li>
<li>准备数据：可能我们需要对大量的数据集进行打标，非常庞大，人工打标已经不现实，我们就可以借助权威大模型如chatgpt4来实现达标，但是数据量太大成本大，那我们就可以只让权威大模型处理一小部分如1万条内容，然后再借助这一万条数据内容让我们本地的大模型进行学习打标，类似于蒸馏，得到一个专门打标的本地大模型，再来为所有数据打标。</li>
<li>peft微调：只产生较小的peft权重模型（可能mb量级），而不是和原模型一样大小的新模型，在运行时，可以直接融合peft权重和原始模型运行，也就可以更加方便得 训练多个专用的peft权重模型处理不同专门的问题（综述Paper: “scaling down to scale up: a guide to parameter-efficent fine-tuning.”）｜难点是如何尽可能减少对原模型在非领域性能的损害。
<ul>
<li>选择性方法：研究说性能不一，不推荐</li>
<li>重新参数化方法：代表 LoRA，相当于冻结一部分权重或者模块，利用mask冻结输入和固定结构？<a href="https://www.bilibili.com/video/BV1yu411L7JN?vd_source=3df634e699c8240e5fd26ed74b439c15" target="_blank" rel="noopener noreferrer">微调LLM中的魔鬼细节｜大型语言模型lora调教指南</a></li>
<li>加法方法：adapters &amp; soft prompt tuning</li>
</ul>
</li>
<li></li>
</ul>`,readingTime:{minutes:1.31,words:394},title:"",type:"article"}}],["/tmp/prompt.html",{loader:()=>f(()=>import("./prompt.html-BEYjpcL6.js"),[]),meta:{date:15778368e5,excerpt:`<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-markdown"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Act as Professor Synapse🧞‍♂️, a conductor of expert agents . Your job is to support me in accomplishing my goals by finding alignment with me , then calling upon an expert agent perfectly suited to the task by initializing :</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Synapse _ CoR ="[ emoji ]: I am an expert in [ role &amp; domain ]. I know [ context ]. I will reason step - by - step to determine the best course of action to achieve [ goal ]. I can use [ tools ] and [ relevant frameworks ] to help in this process .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">I will help you accomplish your goal by following these steps :</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[ reasoned steps ]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">My task ends when [ completion ].</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[ first step , question ]"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Instructions :</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">1.🧞‍♂️gather context , relevant information and clarify my goals by asking questions</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">2.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> Once confirmed , initialize Synapse _ CoR</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">3.🧞‍♂️and \${ emoji } support me until goal is complete</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Commands :</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/ start = 🧞‍♂️, introduce and begin with step one</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/ ts = 🧞‍♂️, summon ( Synapse _ CoR *3) town square debate</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/ save 🧞‍♂️, restate goal , summarize  progress , reason next step</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Personality :</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> curious , inquisitive , encouraging</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> use emojis to express yourself</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Rules :</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> End every output with a question orreasoned next step</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> Start every output with 🧞‍♂️: or \${ emoji }: to indicate who is speaking</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> Organize every output with 🧞‍♂️ aligning on my request , followed by \${ emoji } response</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> 🧞‍♂️recommend save after each task is completed</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> Finally , please remember to speak to me in Chinese</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:11.81,words:3543},title:"",type:"article"}}],["/tmp/rag.html",{loader:()=>f(()=>import("./rag.html-DbAqtas2.js"),[]),meta:{date:15778368e5,excerpt:`
<blockquote>
<p>http://arxiv.org/abs/2005.11401</p>
</blockquote>`,readingTime:{minutes:.58,words:174},title:"RAG PPT",type:"article"}}],["/tmp/test.html",{loader:()=>f(()=>import("./test.html-YJ0Qzk5f.js"),[]),meta:{date:15778368e5,readingTime:{minutes:.02,words:6},title:"",index:!1,type:"article"}}],["/web_game/ai_gomoku.html",{loader:()=>f(()=>import("./ai_gomoku.html-BU0ARN_M.js"),[]),meta:{date:16885152e5,excerpt:`
<iframe src="/game/ai-gomoku.html" width="100%" style="aspect-ratio: 1/1;"></iframe>`,readingTime:{minutes:3.67,words:1102},title:"智能五子棋",type:"article"}}],["/web_game/ai_snake.html",{loader:()=>f(()=>import("./ai_snake.html-CyhOwIgb.js"),[]),meta:{date:1693872e6,excerpt:`
<iframe src="/game/ai-snake.html" width="140%" style="aspect-ratio: 17/12;"></iframe>`,readingTime:{minutes:23.23,words:6968},title:"智能贪吃蛇",type:"article"}}],["/book/ddia/DDIA_README.html",{loader:()=>f(()=>import("./DDIA_README.html-Dch3wO4a.js"),[]),meta:{title:"《设计数据密集型应用》原文序"}}],["/book/ddia/LICENSE.html",{loader:()=>f(()=>import("./LICENSE.html-Gn-0vin-.js"),[]),meta:{author:[{name:"Martin Kleppmann(著)"},{name:"冯若航(译)"}],date:16426368e5,excerpt:`
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<hr>
<p>Creative Commons Corporation ("Creative Commons") is not a law firm and
does not provide legal services or legal advice. Distribution of
Creative Commons public licenses does not create a lawyer-client or
other relationship. Creative Commons makes its licenses and related
information available on an "as-is" basis. Creative Commons gives no
warranties regarding its licenses, any material licensed under their
terms and conditions, or any related information. Creative Commons
disclaims all liability for damages resulting from their use to the
fullest extent possible.</p>
<p>Using Creative Commons Public Licenses</p>
<p>Creative Commons public licenses provide a standard set of terms and
conditions that creators and other rights holders may use to share
original works of authorship and other material subject to copyright
and certain other rights specified in the public license below. The
following considerations are for informational purposes only, are not
exhaustive, and do not form part of our licenses.</p>
<pre><code> Considerations for licensors: Our public licenses are
 intended for use by those authorized to give the public
 permission to use material in ways otherwise restricted by
 copyright and certain other rights. Our licenses are
 irrevocable. Licensors should read and understand the terms
 and conditions of the license they choose before applying it.
 Licensors should also secure all rights necessary before
 applying our licenses so that the public can reuse the
 material as expected. Licensors should clearly mark any
 material not subject to the license. This includes other CC-
 licensed material, or material used under an exception or
 limitation to copyright. More considerations for licensors:
wiki.creativecommons.org/Considerations_for_licensors

 Considerations for the public: By using one of our public
 licenses, a licensor grants the public permission to use the
 licensed material under specified terms and conditions. If
 the licensor's permission is not necessary for any reason--for
 example, because of any applicable exception or limitation to
 copyright--then that use is not regulated by the license. Our
 licenses grant only permissions under copyright and certain
 other rights that a licensor has authority to grant. Use of
 the licensed material may still be restricted for other
 reasons, including because others have copyright or other
 rights in the material. A licensor may make special requests,
 such as asking that all changes be marked or described.
 Although not required by our licenses, you are encouraged to
 respect those requests where reasonable. More considerations
 for the public:
wiki.creativecommons.org/Considerations_for_licensees
</code></pre>
<hr>
<p>Creative Commons Attribution 4.0 International Public License</p>
<p>By exercising the Licensed Rights (defined below), You accept and agree
to be bound by the terms and conditions of this Creative Commons
Attribution 4.0 International Public License ("Public License"). To the
extent this Public License may be interpreted as a contract, You are
granted the Licensed Rights in consideration of Your acceptance of
these terms and conditions, and the Licensor grants You such rights in
consideration of benefits the Licensor receives from making the
Licensed Material available under these terms and conditions.</p>
<p>Section 1 -- Definitions.</p>
<p>a. Adapted Material means material subject to Copyright and Similar
Rights that is derived from or based upon the Licensed Material
and in which the Licensed Material is translated, altered,
arranged, transformed, or otherwise modified in a manner requiring
permission under the Copyright and Similar Rights held by the
Licensor. For purposes of this Public License, where the Licensed
Material is a musical work, performance, or sound recording,
Adapted Material is always produced where the Licensed Material is
synched in timed relation with a moving image.</p>
<p>b. Adapter's License means the license You apply to Your Copyright
and Similar Rights in Your contributions to Adapted Material in
accordance with the terms and conditions of this Public License.</p>
<p>c. Copyright and Similar Rights means copyright and/or similar rights
closely related to copyright including, without limitation,
performance, broadcast, sound recording, and Sui Generis Database
Rights, without regard to how the rights are labeled or
categorized. For purposes of this Public License, the rights
specified in Section 2(b)(1)-(2) are not Copyright and Similar
Rights.</p>
<p>d. Effective Technological Measures means those measures that, in the
absence of proper authority, may not be circumvented under laws
fulfilling obligations under Article 11 of the WIPO Copyright
Treaty adopted on December 20, 1996, and/or similar international
agreements.</p>
<p>e. Exceptions and Limitations means fair use, fair dealing, and/or
any other exception or limitation to Copyright and Similar Rights
that applies to Your use of the Licensed Material.</p>
<p>f. Licensed Material means the artistic or literary work, database,
or other material to which the Licensor applied this Public
License.</p>
<p>g. Licensed Rights means the rights granted to You subject to the
terms and conditions of this Public License, which are limited to
all Copyright and Similar Rights that apply to Your use of the
Licensed Material and that the Licensor has authority to license.</p>
<p>h. Licensor means the individual(s) or entity(ies) granting rights
under this Public License.</p>
<p>i. Share means to provide material to the public by any means or
process that requires permission under the Licensed Rights, such
as reproduction, public display, public performance, distribution,
dissemination, communication, or importation, and to make material
available to the public including in ways that members of the
public may access the material from a place and at a time
individually chosen by them.</p>
<p>j. Sui Generis Database Rights means rights other than copyright
resulting from Directive 96/9/EC of the European Parliament and of
the Council of 11 March 1996 on the legal protection of databases,
as amended and/or succeeded, as well as other essentially
equivalent rights anywhere in the world.</p>
<p>k. You means the individual or entity exercising the Licensed Rights
under this Public License. Your has a corresponding meaning.</p>
<p>Section 2 -- Scope.</p>
<p>a. License grant.</p>
<pre><code>   1. Subject to the terms and conditions of this Public License,
      the Licensor hereby grants You a worldwide, royalty-free,
      non-sublicensable, non-exclusive, irrevocable license to
      exercise the Licensed Rights in the Licensed Material to:

        a. reproduce and Share the Licensed Material, in whole or
           in part; and

        b. produce, reproduce, and Share Adapted Material.

   2. Exceptions and Limitations. For the avoidance of doubt, where
      Exceptions and Limitations apply to Your use, this Public
      License does not apply, and You do not need to comply with
      its terms and conditions.

   3. Term. The term of this Public License is specified in Section
      6(a).

   4. Media and formats; technical modifications allowed. The
      Licensor authorizes You to exercise the Licensed Rights in
      all media and formats whether now known or hereafter created,
      and to make technical modifications necessary to do so. The
      Licensor waives and/or agrees not to assert any right or
      authority to forbid You from making technical modifications
      necessary to exercise the Licensed Rights, including
      technical modifications necessary to circumvent Effective
      Technological Measures. For purposes of this Public License,
      simply making modifications authorized by this Section 2(a)
      (4) never produces Adapted Material.

   5. Downstream recipients.

        a. Offer from the Licensor -- Licensed Material. Every
           recipient of the Licensed Material automatically
           receives an offer from the Licensor to exercise the
           Licensed Rights under the terms and conditions of this
           Public License.

        b. No downstream restrictions. You may not offer or impose
           any additional or different terms or conditions on, or
           apply any Effective Technological Measures to, the
           Licensed Material if doing so restricts exercise of the
           Licensed Rights by any recipient of the Licensed
           Material.

   6. No endorsement. Nothing in this Public License constitutes or
      may be construed as permission to assert or imply that You
      are, or that Your use of the Licensed Material is, connected
      with, or sponsored, endorsed, or granted official status by,
      the Licensor or others designated to receive attribution as
      provided in Section 3(a)(1)(A)(i).
</code></pre>
<p>b. Other rights.</p>
<pre><code>   1. Moral rights, such as the right of integrity, are not
      licensed under this Public License, nor are publicity,
      privacy, and/or other similar personality rights; however, to
      the extent possible, the Licensor waives and/or agrees not to
      assert any such rights held by the Licensor to the limited
      extent necessary to allow You to exercise the Licensed
      Rights, but not otherwise.

   2. Patent and trademark rights are not licensed under this
      Public License.

   3. To the extent possible, the Licensor waives any right to
      collect royalties from You for the exercise of the Licensed
      Rights, whether directly or through a collecting society
      under any voluntary or waivable statutory or compulsory
      licensing scheme. In all other cases the Licensor expressly
      reserves any right to collect such royalties.
</code></pre>
<p>Section 3 -- License Conditions.</p>
<p>Your exercise of the Licensed Rights is expressly made subject to the
following conditions.</p>
<p>a. Attribution.</p>
<pre><code>   1. If You Share the Licensed Material (including in modified
      form), You must:

        a. retain the following if it is supplied by the Licensor
           with the Licensed Material:

             i. identification of the creator(s) of the Licensed
                Material and any others designated to receive
                attribution, in any reasonable manner requested by
                the Licensor (including by pseudonym if
                designated);

            ii. a copyright notice;

           iii. a notice that refers to this Public License;

            iv. a notice that refers to the disclaimer of
                warranties;

             v. a URI or hyperlink to the Licensed Material to the
                extent reasonably practicable;

        b. indicate if You modified the Licensed Material and
           retain an indication of any previous modifications; and

        c. indicate the Licensed Material is licensed under this
           Public License, and include the text of, or the URI or
           hyperlink to, this Public License.

   2. You may satisfy the conditions in Section 3(a)(1) in any
      reasonable manner based on the medium, means, and context in
      which You Share the Licensed Material. For example, it may be
      reasonable to satisfy the conditions by providing a URI or
      hyperlink to a resource that includes the required
      information.

   3. If requested by the Licensor, You must remove any of the
      information required by Section 3(a)(1)(A) to the extent
      reasonably practicable.

   4. If You Share Adapted Material You produce, the Adapter's
      License You apply must not prevent recipients of the Adapted
      Material from complying with this Public License.
</code></pre>
<p>Section 4 -- Sui Generis Database Rights.</p>
<p>Where the Licensed Rights include Sui Generis Database Rights that
apply to Your use of the Licensed Material:</p>
<p>a. for the avoidance of doubt, Section 2(a)(1) grants You the right
to extract, reuse, reproduce, and Share all or a substantial
portion of the contents of the database;</p>
<p>b. if You include all or a substantial portion of the database
contents in a database in which You have Sui Generis Database
Rights, then the database in which You have Sui Generis Database
Rights (but not its individual contents) is Adapted Material; and</p>
<p>c. You must comply with the conditions in Section 3(a) if You Share
all or a substantial portion of the contents of the database.</p>
<p>For the avoidance of doubt, this Section 4 supplements and does not
replace Your obligations under this Public License where the Licensed
Rights include other Copyright and Similar Rights.</p>
<p>Section 5 -- Disclaimer of Warranties and Limitation of Liability.</p>
<p>a. UNLESS OTHERWISE SEPARATELY UNDERTAKEN BY THE LICENSOR, TO THE
EXTENT POSSIBLE, THE LICENSOR OFFERS THE LICENSED MATERIAL AS-IS
AND AS-AVAILABLE, AND MAKES NO REPRESENTATIONS OR WARRANTIES OF
ANY KIND CONCERNING THE LICENSED MATERIAL, WHETHER EXPRESS,
IMPLIED, STATUTORY, OR OTHER. THIS INCLUDES, WITHOUT LIMITATION,
WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE, NON-INFRINGEMENT, ABSENCE OF LATENT OR OTHER DEFECTS,
ACCURACY, OR THE PRESENCE OR ABSENCE OF ERRORS, WHETHER OR NOT
KNOWN OR DISCOVERABLE. WHERE DISCLAIMERS OF WARRANTIES ARE NOT
ALLOWED IN FULL OR IN PART, THIS DISCLAIMER MAY NOT APPLY TO YOU.</p>
<p>b. TO THE EXTENT POSSIBLE, IN NO EVENT WILL THE LICENSOR BE LIABLE
TO YOU ON ANY LEGAL THEORY (INCLUDING, WITHOUT LIMITATION,
NEGLIGENCE) OR OTHERWISE FOR ANY DIRECT, SPECIAL, INDIRECT,
INCIDENTAL, CONSEQUENTIAL, PUNITIVE, EXEMPLARY, OR OTHER LOSSES,
COSTS, EXPENSES, OR DAMAGES ARISING OUT OF THIS PUBLIC LICENSE OR
USE OF THE LICENSED MATERIAL, EVEN IF THE LICENSOR HAS BEEN
ADVISED OF THE POSSIBILITY OF SUCH LOSSES, COSTS, EXPENSES, OR
DAMAGES. WHERE A LIMITATION OF LIABILITY IS NOT ALLOWED IN FULL OR
IN PART, THIS LIMITATION MAY NOT APPLY TO YOU.</p>
<p>c. The disclaimer of warranties and limitation of liability provided
above shall be interpreted in a manner that, to the extent
possible, most closely approximates an absolute disclaimer and
waiver of all liability.</p>
<p>Section 6 -- Term and Termination.</p>
<p>a. This Public License applies for the term of the Copyright and
Similar Rights licensed here. However, if You fail to comply with
this Public License, then Your rights under this Public License
terminate automatically.</p>
<p>b. Where Your right to use the Licensed Material has terminated under
Section 6(a), it reinstates:</p>
<pre><code>   1. automatically as of the date the violation is cured, provided
      it is cured within 30 days of Your discovery of the
      violation; or

   2. upon express reinstatement by the Licensor.

 For the avoidance of doubt, this Section 6(b) does not affect any
 right the Licensor may have to seek remedies for Your violations
 of this Public License.
</code></pre>
<p>c. For the avoidance of doubt, the Licensor may also offer the
Licensed Material under separate terms or conditions or stop
distributing the Licensed Material at any time; however, doing so
will not terminate this Public License.</p>
<p>d. Sections 1, 5, 6, 7, and 8 survive termination of this Public
License.</p>
<p>Section 7 -- Other Terms and Conditions.</p>
<p>a. The Licensor shall not be bound by any additional or different
terms or conditions communicated by You unless expressly agreed.</p>
<p>b. Any arrangements, understandings, or agreements regarding the
Licensed Material not stated herein are separate from and
independent of the terms and conditions of this Public License.</p>
<p>Section 8 -- Interpretation.</p>
<p>a. For the avoidance of doubt, this Public License does not, and
shall not be interpreted to, reduce, limit, restrict, or impose
conditions on any use of the Licensed Material that could lawfully
be made without permission under this Public License.</p>
<p>b. To the extent possible, if any provision of this Public License is
deemed unenforceable, it shall be automatically reformed to the
minimum extent necessary to make it enforceable. If the provision
cannot be reformed, it shall be severed from this Public License
without affecting the enforceability of the remaining terms and
conditions.</p>
<p>c. No term or condition of this Public License will be waived and no
failure to comply consented to unless expressly agreed to by the
Licensor.</p>
<p>d. Nothing in this Public License constitutes or may be interpreted
as a limitation upon, or waiver of, any privileges and immunities
that apply to the Licensor or You, including from the legal
processes of any jurisdiction or authority.</p>
<hr>
<p>Creative Commons is not a party to its public
licenses. Notwithstanding, Creative Commons may elect to apply one of
its public licenses to material it publishes and in those instances
will be considered the “Licensor.” The text of the Creative Commons
public licenses is dedicated to the public domain under the CC0 Public
Domain Dedication. Except for the limited purpose of indicating that
material is shared under a Creative Commons public license or as
otherwise permitted by the Creative Commons policies published at
creativecommons.org/policies, Creative Commons does not authorize the
use of the trademark "Creative Commons" or any other trademark or logo
of Creative Commons without its prior written consent including,
without limitation, in connection with any unauthorized modifications
to any of its public licenses or any other arrangements,
understandings, or agreements concerning use of licensed material. For
the avoidance of doubt, this paragraph does not form part of the
public licenses.</p>
<p>Creative Commons may be contacted at creativecommons.org.</p>
</div>`,readingTime:{minutes:8.75,words:2624},title:"开源协议",icon:"clarity:license-solid",type:"article"}}],["/book/ddia/ch1.html",{loader:()=>f(()=>import("./ch1.html-84mVew16.js"),[]),meta:{title:"第一章：可靠性，可伸缩性，可维护性",icon:"tabler:number-1-small"}}],["/book/ddia/ch10.html",{loader:()=>f(()=>import("./ch10.html-BbSgae7n.js"),[]),meta:{title:"第十章：批处理",icon:"tabler:number-10-small"}}],["/book/ddia/ch11.html",{loader:()=>f(()=>import("./ch11.html-gIf608YD.js"),[]),meta:{title:"第十一章：流处理",icon:"tabler:number-11-small"}}],["/book/ddia/ch12.html",{loader:()=>f(()=>import("./ch12.html-_4yTSd8r.js"),[]),meta:{title:"第十二章：数据系统的未来",icon:"tabler:number-12-small"}}],["/book/ddia/ch2.html",{loader:()=>f(()=>import("./ch2.html-DKEZHgiV.js"),[]),meta:{title:"第二章：数据模型与查询语言",icon:"tabler:number-2-small"}}],["/book/ddia/ch3.html",{loader:()=>f(()=>import("./ch3.html-C4V1XkFy.js"),[]),meta:{title:"第三章：存储与检索",icon:"tabler:number-3-small"}}],["/book/ddia/ch4.html",{loader:()=>f(()=>import("./ch4.html-DtOyaseT.js"),[]),meta:{title:"第四章：编码与演化",icon:"tabler:number-4-small"}}],["/book/ddia/ch5.html",{loader:()=>f(()=>import("./ch5.html-BRWnE1PE.js"),[]),meta:{title:"第五章：复制",icon:"tabler:number-5-small"}}],["/book/ddia/ch6.html",{loader:()=>f(()=>import("./ch6.html-BF6fCNSJ.js"),[]),meta:{title:"第六章：分区",icon:"tabler:number-6-small"}}],["/book/ddia/ch7.html",{loader:()=>f(()=>import("./ch7.html-l9afEMhB.js"),[]),meta:{title:"第七章：事务",icon:"tabler:number-7-small"}}],["/book/ddia/ch8.html",{loader:()=>f(()=>import("./ch8.html-BwOOjEj7.js"),[]),meta:{title:"第八章：分布式系统的麻烦",icon:"tabler:number-8-small"}}],["/book/ddia/ch9.html",{loader:()=>f(()=>import("./ch9.html-CzYHjA35.js"),[]),meta:{title:"第九章：一致性与共识",icon:"tabler:number-9-small"}}],["/book/ddia/colophon.html",{loader:()=>f(()=>import("./colophon.html-BUZEXkAM.js"),[]),meta:{title:"后记",icon:"fa6-solid:file-pen"}}],["/book/ddia/ddia_sidebar.html",{loader:()=>f(()=>import("./ddia_sidebar.html-Dwrzpc3R.js"),[]),meta:{title:"目录",icon:"material-symbols:view-sidebar"}}],["/book/ddia/glossary.html",{loader:()=>f(()=>import("./glossary.html-XdDf4m3N.js"),[]),meta:{title:"术语表 【DRAFT】",icon:"emojione-monotone:pound-symbol"}}],["/book/ddia/part-i.html",{loader:()=>f(()=>import("./part-i.html-BNjO-jls.js"),[]),meta:{title:"第一部分：数据系统的基石",icon:"mdi:number-one-circle"}}],["/book/ddia/part-ii.html",{loader:()=>f(()=>import("./part-ii.html-CCBxIam_.js"),[]),meta:{title:"第二部分：分布式数据",icon:"mdi:number-two-circle"}}],["/book/ddia/part-iii.html",{loader:()=>f(()=>import("./part-iii.html-xk_a_SnP.js"),[]),meta:{title:"第三部分：衍生数据",icon:"mdi:number-three-circle"}}],["/book/ddia/preface.html",{loader:()=>f(()=>import("./preface.html-BQmx-K5o.js"),[]),meta:{title:"序言",icon:"ic:baseline-discount"}}],["/book/ddia/",{loader:()=>f(()=>import("./index.html-BDkB18cM.js"),[]),meta:{title:"《设计数据密集型应用》",icon:"clarity:data-cluster-solid-alerted"}}],["/book/kama-DesignPattern/",{loader:()=>f(()=>import("./index.html-CsNeLoag.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h2>编程导航设计模式教程</h2>
<p><a href="https://www.codefather.cn/course/1930517607799193602?contentType=text&amp;tabKey=info" target="_blank" rel="noopener noreferrer">保姆级 23 种设计模式教程</a></p>`,readingTime:{minutes:1.39,words:416},title:"总览",icon:"icon-park-outline:overall-reduction",type:"article"}}],["/course/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/",{loader:()=>f(()=>import("./index.html-Cr1NUosB.js"),[]),meta:{date:17005248e5,excerpt:`
<blockquote>
<i class="fa-brandbilibili">
<p><a href="https://space.bilibili.com/360996402/channel/collectiondetail?sid=533771" target="_blank" rel="noopener noreferrer">湖科大教书匠</a></p>
</i></blockquote>`,readingTime:{minutes:.2,words:59},title:"深入浅出计算机网络",icon:"network-wired",order:2,type:"article"}}],["/en/guide/disable.html",{loader:()=>f(()=>import("./disable.html-DponOT06.js"),[]),meta:{date:16426368e5,category:["Guide"],excerpt:`<p>You can disable some functions on the page by setting the Frontmatter of the page.</p>
`,readingTime:{minutes:.25,words:76},title:"Component disabled",icon:"config",type:"article"}}],["/en/guide/encrypt.html",{loader:()=>f(()=>import("./encrypt.html-BigEL6rk.js"),[]),meta:{date:16426368e5,category:["Guide"],tag:["使用指南"],isEncrypted:!0,readingTime:{minutes:.35,words:106},title:"Encryption article",icon:"lock",type:"article"}}],["/en/guide/markdown.html",{loader:()=>f(()=>import("./markdown.html-GRsbIMK6.js"),[]),meta:{date:16426368e5,category:["Guide"],tag:["Markdown"],excerpt:`<p><code>vuepress-theme-hope</code> enables more syntax in Markdown via the built-in <a href="https://vuepress-theme-hope.github.io/md-enhance" target="_blank" rel="noopener noreferrer">md-enhance</a> plugin.</p>
`,readingTime:{minutes:2.63,words:789},title:"Markdown Enhance",icon:"markdown",type:"article"}}],["/en/guide/page.html",{loader:()=>f(()=>import("./page.html-BxoX7xoM.js"),[]),meta:{author:"Ms.Hope",date:15778368e5,category:["Guide"],tag:["使用指南"],excerpt:"<h2>Page information</h2>",readingTime:{minutes:.63,words:188},title:"page config",icon:"page",type:"article"}}],["/en/guide/",{loader:()=>f(()=>import("./index.html-BfZkv9yE.js"),[]),meta:{date:16426368e5,category:["Guide"],excerpt:`
<ul>
<li>
<p><a href="/en/guide/page.html" target="_blank">Page Config</a></p>
</li>
<li>
<p><a href="/en/guide/markdown.html" target="_blank">Markdown Enhance</a></p>
</li>
<li>
<p><a href="/en/guide/disable.html" target="_blank">Function Disable</a></p>
</li>
<li>
<p><a href="/en/guide/encrypt.html" target="_blank">Encryption Demo</a></p>
</li>
</ul>`,readingTime:{minutes:.07,words:21},title:"Guides",icon:"creative",type:"article"}}],["/en/intro/",{loader:()=>f(()=>import("./index.html-BwVDeDf1.js"),[]),meta:{title:"档案主页",icon:"mdi:user-tag"}}],["/tip/markdown/demo.html",{loader:()=>f(()=>import("./demo.html-DEvJpLjK.js"),[]),meta:{date:16781472e5,category:["使用指南"],tag:["Markdown"],excerpt:"<!-- markdownlint-disable -->",readingTime:{minutes:3.05,words:914},title:"Markdown 示例",icon:"solar:pen-new-square-bold",order:2,type:"article"}}],["/tip/markdown/markdown-intro.html",{loader:()=>f(()=>import("./markdown-intro.html-DMk_D9m4.js"),[]),meta:{date:16426368e5,category:["使用指南"],tag:["Markdown"],excerpt:`
<p>Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。</p>
<p>Markdown 的目标是实现「易读易写」。</p>
`,readingTime:{minutes:19.11,words:5732},title:"Markdown v2",icon:"streamline:markdown-document-programming-solid",order:1,type:"article"}}],["/tip/markdown/",{loader:()=>f(()=>import("./index.html-7WwuJ6f_.js"),[]),meta:{date:16426368e5,excerpt:`
<p><code>vuepress-theme-hope</code> 通过内置 <a href="https://vuepress-theme-hope.github.io/md-enhance" target="_blank" rel="noopener noreferrer">md-enhance</a>，在 Markdown 中启用了更多的语法与新功能。</p>
`,readingTime:{minutes:7.97,words:2390},title:"Markdown 介绍",icon:"teenyicons:markdown-solid",order:2,type:"article"}}],["/book/kama-DesignPattern/DesignPattern/1-%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./1-单例模式.html-EdbweMrC.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1074" target="_blank" rel="noopener noreferrer">单例模式-小明的购物车</a></p>`,readingTime:{minutes:8.28,words:2485},title:"单例模式",icon:"tabler:number-1-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/10-%E6%A1%A5%E6%8E%A5%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./10-桥接模式.html-CBNANN6q.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1092" target="_blank" rel="noopener noreferrer">桥接模式-万能遥控器</a></p>`,readingTime:{minutes:7.17,words:2151},title:"桥接模式",icon:"tabler:number-10-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/11-%E7%BB%84%E5%90%88%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./11-组合模式.html-JlP1pUD-.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1090" target="_blank" rel="noopener noreferrer">组合模式-公司组织架构</a></p>`,readingTime:{minutes:5.49,words:1647},title:"组合模式",icon:"tabler:number-11-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/12-%E4%BA%AB%E5%85%83%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./12-享元模式.html-B59cUozz.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1091" target="_blank" rel="noopener noreferrer">享元模式-图形编辑器</a></p>`,readingTime:{minutes:6.14,words:1843},title:"享元模式",icon:"tabler:number-12-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/13-%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./13-观察者模式.html-Kskotnc6.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1075" target="_blank" rel="noopener noreferrer">观察者模式-时间观察者</a></p>`,readingTime:{minutes:6.86,words:2059},title:"观察者模式",icon:"tabler:number-13-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/14-%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./14-策略模式.html-B8_fqZlj.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1082" target="_blank" rel="noopener noreferrer">策略模式-超市打折</a></p>`,readingTime:{minutes:6.98,words:2093},title:"策略模式",icon:"tabler:number-14-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/15-%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./15-命令模式.html-yBJtL_0s.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1093" target="_blank" rel="noopener noreferrer">命令模式-自助点餐机</a></p>`,readingTime:{minutes:8.02,words:2405},title:"命令模式",icon:"tabler:number-15-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/16-%E4%B8%AD%E4%BB%8B%E8%80%85%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./16-中介者模式.html-V5K5tBr5.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1094" target="_blank" rel="noopener noreferrer">中介者模式-简易聊天室</a></p>`,readingTime:{minutes:6.92,words:2077},title:"中介者模式",icon:"tabler:number-16-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/17-%E5%A4%87%E5%BF%98%E5%BD%95%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./17-备忘录模式.html-Bt7A27Uk.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<blockquote>
<p>计数器应用</p>
</blockquote>`,readingTime:{minutes:4.64,words:1392},title:"备忘录模式",icon:"tabler:number-17-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/18-%E6%A8%A1%E6%9D%BF%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./18-模板方法模式.html-UyqOEj0C.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1087" target="_blank" rel="noopener noreferrer">模板方法模式-咖啡馆</a></p>`,readingTime:{minutes:7.43,words:2228},title:"模板方法模式",icon:"tabler:number-18-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/19-%E8%BF%AD%E4%BB%A3%E5%99%A8%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./19-迭代器模式.html-CytnFVJl.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1099" target="_blank" rel="noopener noreferrer">迭代器模式-学生名单</a></p>`,readingTime:{minutes:6.82,words:2047},title:"迭代器模式",icon:"tabler:number-19-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/2-%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./2-工厂方法模式.html-BxxBkUtf.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1076" target="_blank" rel="noopener noreferrer">工厂方法模式-积木工厂</a></p>`,readingTime:{minutes:7.83,words:2349},title:"工厂方法模式",icon:"tabler:number-2-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/20-%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./20-状态模式.html-B32NVBc6.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1097" target="_blank" rel="noopener noreferrer">状态模式-开关台灯</a></p>`,readingTime:{minutes:6.28,words:1883},title:"状态模式",icon:"tabler:number-20-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/21-%E8%B4%A3%E4%BB%BB%E9%93%BE%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./21-责任链模式.html-7shEChzX.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1100" target="_blank" rel="noopener noreferrer">责任链模式-请假审批</a></p>`,readingTime:{minutes:7.86,words:2359},title:"责任链模式",icon:"tabler:number-21-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/22-%E8%A7%A3%E9%87%8A%E5%99%A8%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./22-解释器模式.html-M-jCVgOa.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1096" target="_blank" rel="noopener noreferrer">解释器模式-数学表达式</a></p>`,readingTime:{minutes:6.82,words:2046},title:"解释器模式",icon:"tabler:number-22-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/23-%E8%AE%BF%E9%97%AE%E8%80%85%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./23-访问者模式.html-CFfAJGUq.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1098" target="_blank" rel="noopener noreferrer">访问者模式-图形的面积</a></p>`,readingTime:{minutes:7.2,words:2161},title:"访问者模式",icon:"tabler:number-23-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/3-%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./3-抽象工厂模式.html-DI6ggfHc.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1077" target="_blank" rel="noopener noreferrer">抽象工厂模式-家具工厂</a></p>`,readingTime:{minutes:9.64,words:2893},title:"抽象工厂模式",icon:"tabler:number-3-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/4-%E5%BB%BA%E9%80%A0%E8%80%85%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./4-建造者模式.html-2HRYra2B.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1084" target="_blank" rel="noopener noreferrer">建造者模式-自行车加工</a></p>`,readingTime:{minutes:8.76,words:2627},title:"建造者模式",icon:"tabler:number-4-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/5-%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./5-原型模式.html-Co9LbwCH.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1083" target="_blank" rel="noopener noreferrer">原型模式-矩形原型</a></p>`,readingTime:{minutes:7.92,words:2375},title:"原型模式",icon:"tabler:number-5-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/6-%E9%80%82%E9%85%8D%E5%99%A8%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./6-适配器模式.html-C_-e7t0c.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1085" target="_blank" rel="noopener noreferrer">适配器模式-扩展坞</a></p>`,readingTime:{minutes:4.94,words:1481},title:"适配器模式",icon:"tabler:number-6-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/7-%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./7-代理模式.html-BTTQLt0a.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1088" target="_blank" rel="noopener noreferrer">代理模式-小明买房子</a></p>`,readingTime:{minutes:5.17,words:1552},title:"代理模式",icon:"tabler:number-7-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/8-%E8%A3%85%E9%A5%B0%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./8-装饰模式.html-sy2dzTcS.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1086" target="_blank" rel="noopener noreferrer">装饰器模式-咖啡加糖</a></p>`,readingTime:{minutes:7.42,words:2226},title:"装饰模式",icon:"tabler:number-8-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/9-%E5%A4%96%E8%A7%82%E6%A8%A1%E5%BC%8F.html",{loader:()=>f(()=>import("./9-外观模式.html-D2cHsGCO.js"),[]),meta:{author:{name:"kamacoder",url:"https://www.programmercarl.com"},date:15778368e5,excerpt:`
<h3>题目链接</h3>
<p><a href="https://kamacoder.com/problempage.php?pid=1089" target="_blank" rel="noopener noreferrer">外观模式-电源开关</a></p>`,readingTime:{minutes:5.21,words:1563},title:"外观模式",icon:"tabler:number-9-small",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/behavior-patterns-overview.html",{loader:()=>f(()=>import("./behavior-patterns-overview.html-BQK-7SHl.js"),[]),meta:{author:{name:"yupi",url:"https://github.com/liyupi"},date:15778368e5,excerpt:`
<figure><img src="https://raw.githubusercontent.com/ET-yzk/picgo/blog/B71uwYJcGJfSh4Dt-20250908160501868.webp" alt="行为型模式" tabindex="0" loading="lazy"><figcaption>行为型模式</figcaption></figure>`,readingTime:{minutes:1.28,words:385},title:"概述",icon:"lucide:section",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/creation-patterns-overview.html",{loader:()=>f(()=>import("./creation-patterns-overview.html-Coa00pRn.js"),[]),meta:{author:{name:"yupi",url:"https://github.com/liyupi"},date:15778368e5,excerpt:`
<figure><img src="https://raw.githubusercontent.com/ET-yzk/picgo/blog/ACVmIl7cpgh3sWUJ.webp" alt="创建型模式" tabindex="0" loading="lazy"><figcaption>创建型模式</figcaption></figure>`,readingTime:{minutes:1.06,words:317},title:"概述",icon:"lucide:section",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/muti-design-pattern-combination-application.html",{loader:()=>f(()=>import("./muti-design-pattern-combination-application.html-jJqkGhtf.js"),[]),meta:{author:{name:"yupi",url:"https://github.com/liyupi"},date:15778368e5,excerpt:`
<blockquote>
<p>本文主要介绍如何使用多种设计模式组合，实现更灵活、更易扩展的系统结构。</p>
<p>更多详见：<a href="https://www.codefather.cn/course/1930517607799193602/section/1930522090147020802?contentType=text&amp;tabKey=info" target="_blank" rel="noopener noreferrer">保姆级 23 种设计模式教程 - 编程导航</a></p>
</blockquote>`,readingTime:{minutes:24.17,words:7250},title:"多种设计模式的组合应用",icon:"icon-park-outline:bydesign",type:"article"}}],["/book/kama-DesignPattern/DesignPattern/structure-patterns-overview.html",{loader:()=>f(()=>import("./structure-patterns-overview.html-cRQofCIv.js"),[]),meta:{author:{name:"yupi",url:"https://github.com/liyupi"},date:15778368e5,excerpt:`
<figure><img src="https://raw.githubusercontent.com/ET-yzk/picgo/blog/ACVmIl7cpgh3sWUJ.webp" alt="结构型模式" tabindex="0" loading="lazy"><figcaption>结构型模式</figcaption></figure>`,readingTime:{minutes:1.04,words:312},title:"概述",icon:"lucide:section",type:"article"}}],["/tip/markdown/emoji/emoji.html",{loader:()=>f(()=>import("./emoji.html-BGvrtaXH.js"),[]),meta:{date:16426368e5,category:["使用指南"],tag:["Markdown"],excerpt:`<ul>
<li>"100": "💯",</li>
<li>"1234": "🔢",</li>
<li>"grinning": "😀",</li>
<li>"smiley": "😃",</li>
<li>"smile": "😄",</li>
<li>"grin": "😁",</li>
<li>"laughing": "😆",</li>
<li>"satisfied": "😆",</li>
<li>"sweat_smile": "😅",</li>
<li>"rofl": "🤣",</li>
<li>"joy": "😂",</li>
<li>"slightly_smiling_face": "🙂",</li>
<li>"upside_down_face": "🙃",</li>
<li>"wink": "😉",</li>
<li>"blush": "😊",</li>
<li>"innocent": "😇",</li>
<li>"smiling_face_with_three_hearts": "🥰",</li>
<li>"heart_eyes": "😍",</li>
<li>"star_struck": "🤩",</li>
<li>"kissing_heart": "😘",</li>
<li>"kissing": "😗",</li>
<li>"relaxed": "☺️",</li>
<li>"kissing_closed_eyes": "😚",</li>
<li>"kissing_smiling_eyes": "😙",</li>
<li>"smiling_face_with_tear": "🥲",</li>
<li>"yum": "😋",</li>
<li>"stuck_out_tongue": "😛",</li>
<li>"stuck_out_tongue_winking_eye": "😜",</li>
<li>"zany_face": "🤪",</li>
<li>"stuck_out_tongue_closed_eyes": "😝",</li>
<li>"money_mouth_face": "🤑",</li>
<li>"hugs": "🤗",</li>
<li>"hand_over_mouth": "🤭",</li>
<li>"shushing_face": "🤫",</li>
<li>"thinking": "🤔",</li>
<li>"zipper_mouth_face": "🤐",</li>
<li>"raised_eyebrow": "🤨",</li>
<li>"neutral_face": "😐",</li>
<li>"expressionless": "😑",</li>
<li>"no_mouth": "😶",</li>
<li>"smirk": "😏",</li>
<li>"unamused": "😒",</li>
<li>"roll_eyes": "🙄",</li>
<li>"grimacing": "😬",</li>
<li>"lying_face": "🤥",</li>
<li>"relieved": "😌",</li>
<li>"pensive": "😔",</li>
<li>"sleepy": "😪",</li>
<li>"drooling_face": "🤤",</li>
<li>"sleeping": "😴",</li>
<li>"mask": "😷",</li>
<li>"face_with_thermometer": "🤒",</li>
<li>"face_with_head_bandage": "🤕",</li>
<li>"nauseated_face": "🤢",</li>
<li>"vomiting_face": "🤮",</li>
<li>"sneezing_face": "🤧",</li>
<li>"hot_face": "🥵",</li>
<li>"cold_face": "🥶",</li>
<li>"woozy_face": "🥴",</li>
<li>"dizzy_face": "😵",</li>
<li>"exploding_head": "🤯",</li>
<li>"cowboy_hat_face": "🤠",</li>
<li>"partying_face": "🥳",</li>
<li>"disguised_face": "🥸",</li>
<li>"sunglasses": "😎",</li>
<li>"nerd_face": "🤓",</li>
<li>"monocle_face": "🧐",</li>
<li>"confused": "😕",</li>
<li>"worried": "😟",</li>
<li>"slightly_frowning_face": "🙁",</li>
<li>"frowning_face": "☹️",</li>
<li>"open_mouth": "😮",</li>
<li>"hushed": "😯",</li>
<li>"astonished": "😲",</li>
<li>"flushed": "😳",</li>
<li>"pleading_face": "🥺",</li>
<li>"frowning": "😦",</li>
<li>"anguished": "😧",</li>
<li>"fearful": "😨",</li>
<li>"cold_sweat": "😰",</li>
<li>"disappointed_relieved": "😥",</li>
<li>"cry": "😢",</li>
<li>"sob": "😭",</li>
<li>"scream": "😱",</li>
<li>"confounded": "😖",</li>
<li>"persevere": "😣",</li>
<li>"disappointed": "😞",</li>
<li>"sweat": "😓",</li>
<li>"weary": "😩",</li>
<li>"tired_face": "😫",</li>
<li>"yawning_face": "🥱",</li>
<li>"triumph": "😤",</li>
<li>"rage": "😡",</li>
<li>"pout": "😡",</li>
<li>"angry": "😠",</li>
<li>"cursing_face": "🤬",</li>
<li>"smiling_imp": "😈",</li>
<li>"imp": "👿",</li>
<li>"skull": "💀",</li>
<li>"skull_and_crossbones": "☠️",</li>
<li>"hankey": "💩",</li>
<li>"poop": "💩",</li>
<li>"shit": "💩",</li>
<li>"clown_face": "🤡",</li>
<li>"japanese_ogre": "👹",</li>
<li>"japanese_goblin": "👺",</li>
<li>"ghost": "👻",</li>
<li>"alien": "👽",</li>
<li>"space_invader": "👾",</li>
<li>"robot": "🤖",</li>
<li>"smiley_cat": "😺",</li>
<li>"smile_cat": "😸",</li>
<li>"joy_cat": "😹",</li>
<li>"heart_eyes_cat": "😻",</li>
<li>"smirk_cat": "😼",</li>
<li>"kissing_cat": "😽",</li>
<li>"scream_cat": "🙀",</li>
<li>"crying_cat_face": "😿",</li>
<li>"pouting_cat": "😾",</li>
<li>"see_no_evil": "🙈",</li>
<li>"hear_no_evil": "🙉",</li>
<li>"speak_no_evil": "🙊",</li>
<li>"kiss": "💋",</li>
<li>"love_letter": "💌",</li>
<li>"cupid": "💘",</li>
<li>"gift_heart": "💝",</li>
<li>"sparkling_heart": "💖",</li>
<li>"heartpulse": "💗",</li>
<li>"heartbeat": "💓",</li>
<li>"revolving_hearts": "💞",</li>
<li>"two_hearts": "💕",</li>
<li>"heart_decoration": "💟",</li>
<li>"heavy_heart_exclamation": "❣️",</li>
<li>"broken_heart": "💔",</li>
<li>"heart": "❤️",</li>
<li>"orange_heart": "🧡",</li>
<li>"yellow_heart": "💛",</li>
<li>"green_heart": "💚",</li>
<li>"blue_heart": "💙",</li>
<li>"purple_heart": "💜",</li>
<li>"brown_heart": "🤎",</li>
<li>"black_heart": "🖤",</li>
<li>"white_heart": "🤍",</li>
<li>"anger": "💢",</li>
<li>"boom": "💥",</li>
<li>"collision": "💥",</li>
<li>"dizzy": "💫",</li>
<li>"sweat_drops": "💦",</li>
<li>"dash": "💨",</li>
<li>"hole": "🕳️",</li>
<li>"bomb": "💣",</li>
<li>"speech_balloon": "💬",</li>
<li>"eye_speech_bubble": "👁️‍🗨️",</li>
<li>"left_speech_bubble": "🗨️",</li>
<li>"right_anger_bubble": "🗯️",</li>
<li>"thought_balloon": "💭",</li>
<li>"zzz": "💤",</li>
<li>"wave": "👋",</li>
<li>"raised_back_of_hand": "🤚",</li>
<li>"raised_hand_with_fingers_splayed": "🖐️",</li>
<li>"hand": "✋",</li>
<li>"raised_hand": "✋",</li>
<li>"vulcan_salute": "🖖",</li>
<li>"ok_hand": "👌",</li>
<li>"pinched_fingers": "🤌",</li>
<li>"pinching_hand": "🤏",</li>
<li>"v": "✌️",</li>
<li>"crossed_fingers": "🤞",</li>
<li>"love_you_gesture": "🤟",</li>
<li>"metal": "🤘",</li>
<li>"call_me_hand": "🤙",</li>
<li>"point_left": "👈",</li>
<li>"point_right": "👉",</li>
<li>"point_up_2": "👆",</li>
<li>"middle_finger": "🖕",</li>
<li>"fu": "🖕",</li>
<li>"point_down": "👇",</li>
<li>"point_up": "☝️",</li>
<li>"+1": "👍",</li>
<li>"thumbsup": "👍",</li>
<li>"-1": "👎",</li>
<li>"thumbsdown": "👎",</li>
<li>"fist_raised": "✊",</li>
<li>"fist": "✊",</li>
<li>"fist_oncoming": "👊",</li>
<li>"facepunch": "👊",</li>
<li>"punch": "👊",</li>
<li>"fist_left": "🤛",</li>
<li>"fist_right": "🤜",</li>
<li>"clap": "👏",</li>
<li>"raised_hands": "🙌",</li>
<li>"open_hands": "👐",</li>
<li>"palms_up_together": "🤲",</li>
<li>"handshake": "🤝",</li>
<li>"pray": "🙏",</li>
<li>"writing_hand": "✍️",</li>
<li>"nail_care": "💅",</li>
<li>"selfie": "🤳",</li>
<li>"muscle": "💪",</li>
<li>"mechanical_arm": "🦾",</li>
<li>"mechanical_leg": "🦿",</li>
<li>"leg": "🦵",</li>
<li>"foot": "🦶",</li>
<li>"ear": "👂",</li>
<li>"ear_with_hearing_aid": "🦻",</li>
<li>"nose": "👃",</li>
<li>"brain": "🧠",</li>
<li>"anatomical_heart": "🫀",</li>
<li>"lungs": "🫁",</li>
<li>"tooth": "🦷",</li>
<li>"bone": "🦴",</li>
<li>"eyes": "👀",</li>
<li>"eye": "👁️",</li>
<li>"tongue": "👅",</li>
<li>"lips": "👄",</li>
<li>"baby": "👶",</li>
<li>"child": "🧒",</li>
<li>"boy": "👦",</li>
<li>"girl": "👧",</li>
<li>"adult": "🧑",</li>
<li>"blond_haired_person": "👱",</li>
<li>"man": "👨",</li>
<li>"bearded_person": "🧔",</li>
<li>"red_haired_man": "👨‍🦰",</li>
<li>"curly_haired_man": "👨‍🦱",</li>
<li>"white_haired_man": "👨‍🦳",</li>
<li>"bald_man": "👨‍🦲",</li>
<li>"woman": "👩",</li>
<li>"red_haired_woman": "👩‍🦰",</li>
<li>"person_red_hair": "🧑‍🦰",</li>
<li>"curly_haired_woman": "👩‍🦱",</li>
<li>"person_curly_hair": "🧑‍🦱",</li>
<li>"white_haired_woman": "👩‍🦳",</li>
<li>"person_white_hair": "🧑‍🦳",</li>
<li>"bald_woman": "👩‍🦲",</li>
<li>"person_bald": "🧑‍🦲",</li>
<li>"blond_haired_woman": "👱‍♀️",</li>
<li>"blonde_woman": "👱‍♀️",</li>
<li>"blond_haired_man": "👱‍♂️",</li>
<li>"older_adult": "🧓",</li>
<li>"older_man": "👴",</li>
<li>"older_woman": "👵",</li>
<li>"frowning_person": "🙍",</li>
<li>"frowning_man": "🙍‍♂️",</li>
<li>"frowning_woman": "🙍‍♀️",</li>
<li>"pouting_face": "🙎",</li>
<li>"pouting_man": "🙎‍♂️",</li>
<li>"pouting_woman": "🙎‍♀️",</li>
<li>"no_good": "🙅",</li>
<li>"no_good_man": "🙅‍♂️",</li>
<li>"ng_man": "🙅‍♂️",</li>
<li>"no_good_woman": "🙅‍♀️",</li>
<li>"ng_woman": "🙅‍♀️",</li>
<li>"ok_person": "🙆",</li>
<li>"ok_man": "🙆‍♂️",</li>
<li>"ok_woman": "🙆‍♀️",</li>
<li>"tipping_hand_person": "💁",</li>
<li>"information_desk_person": "💁",</li>
<li>"tipping_hand_man": "💁‍♂️",</li>
<li>"sassy_man": "💁‍♂️",</li>
<li>"tipping_hand_woman": "💁‍♀️",</li>
<li>"sassy_woman": "💁‍♀️",</li>
<li>"raising_hand": "🙋",</li>
<li>"raising_hand_man": "🙋‍♂️",</li>
<li>"raising_hand_woman": "🙋‍♀️",</li>
<li>"deaf_person": "🧏",</li>
<li>"deaf_man": "🧏‍♂️",</li>
<li>"deaf_woman": "🧏‍♀️",</li>
<li>"bow": "🙇",</li>
<li>"bowing_man": "🙇‍♂️",</li>
<li>"bowing_woman": "🙇‍♀️",</li>
<li>"facepalm": "🤦",</li>
<li>"man_facepalming": "🤦‍♂️",</li>
<li>"woman_facepalming": "🤦‍♀️",</li>
<li>"shrug": "🤷",</li>
<li>"man_shrugging": "🤷‍♂️",</li>
<li>"woman_shrugging": "🤷‍♀️",</li>
<li>"health_worker": "🧑‍⚕️",</li>
<li>"man_health_worker": "👨‍⚕️",</li>
<li>"woman_health_worker": "👩‍⚕️",</li>
<li>"student": "🧑‍🎓",</li>
<li>"man_student": "👨‍🎓",</li>
<li>"woman_student": "👩‍🎓",</li>
<li>"teacher": "🧑‍🏫",</li>
<li>"man_teacher": "👨‍🏫",</li>
<li>"woman_teacher": "👩‍🏫",</li>
<li>"judge": "🧑‍⚖️",</li>
<li>"man_judge": "👨‍⚖️",</li>
<li>"woman_judge": "👩‍⚖️",</li>
<li>"farmer": "🧑‍🌾",</li>
<li>"man_farmer": "👨‍🌾",</li>
<li>"woman_farmer": "👩‍🌾",</li>
<li>"cook": "🧑‍🍳",</li>
<li>"man_cook": "👨‍🍳",</li>
<li>"woman_cook": "👩‍🍳",</li>
<li>"mechanic": "🧑‍🔧",</li>
<li>"man_mechanic": "👨‍🔧",</li>
<li>"woman_mechanic": "👩‍🔧",</li>
<li>"factory_worker": "🧑‍🏭",</li>
<li>"man_factory_worker": "👨‍🏭",</li>
<li>"woman_factory_worker": "👩‍🏭",</li>
<li>"office_worker": "🧑‍💼",</li>
<li>"man_office_worker": "👨‍💼",</li>
<li>"woman_office_worker": "👩‍💼",</li>
<li>"scientist": "🧑‍🔬",</li>
<li>"man_scientist": "👨‍🔬",</li>
<li>"woman_scientist": "👩‍🔬",</li>
<li>"technologist": "🧑‍💻",</li>
<li>"man_technologist": "👨‍💻",</li>
<li>"woman_technologist": "👩‍💻",</li>
<li>"singer": "🧑‍🎤",</li>
<li>"man_singer": "👨‍🎤",</li>
<li>"woman_singer": "👩‍🎤",</li>
<li>"artist": "🧑‍🎨",</li>
<li>"man_artist": "👨‍🎨",</li>
<li>"woman_artist": "👩‍🎨",</li>
<li>"pilot": "🧑‍✈️",</li>
<li>"man_pilot": "👨‍✈️",</li>
<li>"woman_pilot": "👩‍✈️",</li>
<li>"astronaut": "🧑‍🚀",</li>
<li>"man_astronaut": "👨‍🚀",</li>
<li>"woman_astronaut": "👩‍🚀",</li>
<li>"firefighter": "🧑‍🚒",</li>
<li>"man_firefighter": "👨‍🚒",</li>
<li>"woman_firefighter": "👩‍🚒",</li>
<li>"police_officer": "👮",</li>
<li>"cop": "👮",</li>
<li>"policeman": "👮‍♂️",</li>
<li>"policewoman": "👮‍♀️",</li>
<li>"detective": "🕵️",</li>
<li>"male_detective": "🕵️‍♂️",</li>
<li>"female_detective": "🕵️‍♀️",</li>
<li>"guard": "💂",</li>
<li>"guardsman": "💂‍♂️",</li>
<li>"guardswoman": "💂‍♀️",</li>
<li>"ninja": "🥷",</li>
<li>"construction_worker": "👷",</li>
<li>"construction_worker_man": "👷‍♂️",</li>
<li>"construction_worker_woman": "👷‍♀️",</li>
<li>"prince": "🤴",</li>
<li>"princess": "👸",</li>
<li>"person_with_turban": "👳",</li>
<li>"man_with_turban": "👳‍♂️",</li>
<li>"woman_with_turban": "👳‍♀️",</li>
<li>"man_with_gua_pi_mao": "👲",</li>
<li>"woman_with_headscarf": "🧕",</li>
<li>"person_in_tuxedo": "🤵",</li>
<li>"man_in_tuxedo": "🤵‍♂️",</li>
<li>"woman_in_tuxedo": "🤵‍♀️",</li>
<li>"person_with_veil": "👰",</li>
<li>"man_with_veil": "👰‍♂️",</li>
<li>"woman_with_veil": "👰‍♀️",</li>
<li>"bride_with_veil": "👰‍♀️",</li>
<li>"pregnant_woman": "🤰",</li>
<li>"breast_feeding": "🤱",</li>
<li>"woman_feeding_baby": "👩‍🍼",</li>
<li>"man_feeding_baby": "👨‍🍼",</li>
<li>"person_feeding_baby": "🧑‍🍼",</li>
<li>"angel": "👼",</li>
<li>"santa": "🎅",</li>
<li>"mrs_claus": "🤶",</li>
<li>"mx_claus": "🧑‍🎄",</li>
<li>"superhero": "🦸",</li>
<li>"superhero_man": "🦸‍♂️",</li>
<li>"superhero_woman": "🦸‍♀️",</li>
<li>"supervillain": "🦹",</li>
<li>"supervillain_man": "🦹‍♂️",</li>
<li>"supervillain_woman": "🦹‍♀️",</li>
<li>"mage": "🧙",</li>
<li>"mage_man": "🧙‍♂️",</li>
<li>"mage_woman": "🧙‍♀️",</li>
<li>"fairy": "🧚",</li>
<li>"fairy_man": "🧚‍♂️",</li>
<li>"fairy_woman": "🧚‍♀️",</li>
<li>"vampire": "🧛",</li>
<li>"vampire_man": "🧛‍♂️",</li>
<li>"vampire_woman": "🧛‍♀️",</li>
<li>"merperson": "🧜",</li>
<li>"merman": "🧜‍♂️",</li>
<li>"mermaid": "🧜‍♀️",</li>
<li>"elf": "🧝",</li>
<li>"elf_man": "🧝‍♂️",</li>
<li>"elf_woman": "🧝‍♀️",</li>
<li>"genie": "🧞",</li>
<li>"genie_man": "🧞‍♂️",</li>
<li>"genie_woman": "🧞‍♀️",</li>
<li>"zombie": "🧟",</li>
<li>"zombie_man": "🧟‍♂️",</li>
<li>"zombie_woman": "🧟‍♀️",</li>
<li>"massage": "💆",</li>
<li>"massage_man": "💆‍♂️",</li>
<li>"massage_woman": "💆‍♀️",</li>
<li>"haircut": "💇",</li>
<li>"haircut_man": "💇‍♂️",</li>
<li>"haircut_woman": "💇‍♀️",</li>
<li>"walking": "🚶",</li>
<li>"walking_man": "🚶‍♂️",</li>
<li>"walking_woman": "🚶‍♀️",</li>
<li>"standing_person": "🧍",</li>
<li>"standing_man": "🧍‍♂️",</li>
<li>"standing_woman": "🧍‍♀️",</li>
<li>"kneeling_person": "🧎",</li>
<li>"kneeling_man": "🧎‍♂️",</li>
<li>"kneeling_woman": "🧎‍♀️",</li>
<li>"person_with_probing_cane": "🧑‍🦯",</li>
<li>"man_with_probing_cane": "👨‍🦯",</li>
<li>"woman_with_probing_cane": "👩‍🦯",</li>
<li>"person_in_motorized_wheelchair": "🧑‍🦼",</li>
<li>"man_in_motorized_wheelchair": "👨‍🦼",</li>
<li>"woman_in_motorized_wheelchair": "👩‍🦼",</li>
<li>"person_in_manual_wheelchair": "🧑‍🦽",</li>
<li>"man_in_manual_wheelchair": "👨‍🦽",</li>
<li>"woman_in_manual_wheelchair": "👩‍🦽",</li>
<li>"runner": "🏃",</li>
<li>"running": "🏃",</li>
<li>"running_man": "🏃‍♂️",</li>
<li>"running_woman": "🏃‍♀️",</li>
<li>"woman_dancing": "💃",</li>
<li>"dancer": "💃",</li>
<li>"man_dancing": "🕺",</li>
<li>"business_suit_levitating": "🕴️",</li>
<li>"dancers": "👯",</li>
<li>"dancing_men": "👯‍♂️",</li>
<li>"dancing_women": "👯‍♀️",</li>
<li>"sauna_person": "🧖",</li>
<li>"sauna_man": "🧖‍♂️",</li>
<li>"sauna_woman": "🧖‍♀️",</li>
<li>"climbing": "🧗",</li>
<li>"climbing_man": "🧗‍♂️",</li>
<li>"climbing_woman": "🧗‍♀️",</li>
<li>"person_fencing": "🤺",</li>
<li>"horse_racing": "🏇",</li>
<li>"skier": "⛷️",</li>
<li>"snowboarder": "🏂",</li>
<li>"golfing": "🏌️",</li>
<li>"golfing_man": "🏌️‍♂️",</li>
<li>"golfing_woman": "🏌️‍♀️",</li>
<li>"surfer": "🏄",</li>
<li>"surfing_man": "🏄‍♂️",</li>
<li>"surfing_woman": "🏄‍♀️",</li>
<li>"rowboat": "🚣",</li>
<li>"rowing_man": "🚣‍♂️",</li>
<li>"rowing_woman": "🚣‍♀️",</li>
<li>"swimmer": "🏊",</li>
<li>"swimming_man": "🏊‍♂️",</li>
<li>"swimming_woman": "🏊‍♀️",</li>
<li>"bouncing_ball_person": "⛹️",</li>
<li>"bouncing_ball_man": "⛹️‍♂️",</li>
<li>"basketball_man": "⛹️‍♂️",</li>
<li>"bouncing_ball_woman": "⛹️‍♀️",</li>
<li>"basketball_woman": "⛹️‍♀️",</li>
<li>"weight_lifting": "🏋️",</li>
<li>"weight_lifting_man": "🏋️‍♂️",</li>
<li>"weight_lifting_woman": "🏋️‍♀️",</li>
<li>"bicyclist": "🚴",</li>
<li>"biking_man": "🚴‍♂️",</li>
<li>"biking_woman": "🚴‍♀️",</li>
<li>"mountain_bicyclist": "🚵",</li>
<li>"mountain_biking_man": "🚵‍♂️",</li>
<li>"mountain_biking_woman": "🚵‍♀️",</li>
<li>"cartwheeling": "🤸",</li>
<li>"man_cartwheeling": "🤸‍♂️",</li>
<li>"woman_cartwheeling": "🤸‍♀️",</li>
<li>"wrestling": "🤼",</li>
<li>"men_wrestling": "🤼‍♂️",</li>
<li>"women_wrestling": "🤼‍♀️",</li>
<li>"water_polo": "🤽",</li>
<li>"man_playing_water_polo": "🤽‍♂️",</li>
<li>"woman_playing_water_polo": "🤽‍♀️",</li>
<li>"handball_person": "🤾",</li>
<li>"man_playing_handball": "🤾‍♂️",</li>
<li>"woman_playing_handball": "🤾‍♀️",</li>
<li>"juggling_person": "🤹",</li>
<li>"man_juggling": "🤹‍♂️",</li>
<li>"woman_juggling": "🤹‍♀️",</li>
<li>"lotus_position": "🧘",</li>
<li>"lotus_position_man": "🧘‍♂️",</li>
<li>"lotus_position_woman": "🧘‍♀️",</li>
<li>"bath": "🛀",</li>
<li>"sleeping_bed": "🛌",</li>
<li>"people_holding_hands": "🧑‍🤝‍🧑",</li>
<li>"two_women_holding_hands": "👭",</li>
<li>"couple": "👫",</li>
<li>"two_men_holding_hands": "👬",</li>
<li>"couplekiss": "💏",</li>
<li>"couplekiss_man_woman": "👩‍❤️‍💋‍👨",</li>
<li>"couplekiss_man_man": "👨‍❤️‍💋‍👨",</li>
<li>"couplekiss_woman_woman": "👩‍❤️‍💋‍👩",</li>
<li>"couple_with_heart": "💑",</li>
<li>"couple_with_heart_woman_man": "👩‍❤️‍👨",</li>
<li>"couple_with_heart_man_man": "👨‍❤️‍👨",</li>
<li>"couple_with_heart_woman_woman": "👩‍❤️‍👩",</li>
<li>"family": "👪",</li>
<li>"family_man_woman_boy": "👨‍👩‍👦",</li>
<li>"family_man_woman_girl": "👨‍👩‍👧",</li>
<li>"family_man_woman_girl_boy": "👨‍👩‍👧‍👦",</li>
<li>"family_man_woman_boy_boy": "👨‍👩‍👦‍👦",</li>
<li>"family_man_woman_girl_girl": "👨‍👩‍👧‍👧",</li>
<li>"family_man_man_boy": "👨‍👨‍👦",</li>
<li>"family_man_man_girl": "👨‍👨‍👧",</li>
<li>"family_man_man_girl_boy": "👨‍👨‍👧‍👦",</li>
<li>"family_man_man_boy_boy": "👨‍👨‍👦‍👦",</li>
<li>"family_man_man_girl_girl": "👨‍👨‍👧‍👧",</li>
<li>"family_woman_woman_boy": "👩‍👩‍👦",</li>
<li>"family_woman_woman_girl": "👩‍👩‍👧",</li>
<li>"family_woman_woman_girl_boy": "👩‍👩‍👧‍👦",</li>
<li>"family_woman_woman_boy_boy": "👩‍👩‍👦‍👦",</li>
<li>"family_woman_woman_girl_girl": "👩‍👩‍👧‍👧",</li>
<li>"family_man_boy": "👨‍👦",</li>
<li>"family_man_boy_boy": "👨‍👦‍👦",</li>
<li>"family_man_girl": "👨‍👧",</li>
<li>"family_man_girl_boy": "👨‍👧‍👦",</li>
<li>"family_man_girl_girl": "👨‍👧‍👧",</li>
<li>"family_woman_boy": "👩‍👦",</li>
<li>"family_woman_boy_boy": "👩‍👦‍👦",</li>
<li>"family_woman_girl": "👩‍👧",</li>
<li>"family_woman_girl_boy": "👩‍👧‍👦",</li>
<li>"family_woman_girl_girl": "👩‍👧‍👧",</li>
<li>"speaking_head": "🗣️",</li>
<li>"bust_in_silhouette": "👤",</li>
<li>"busts_in_silhouette": "👥",</li>
<li>"people_hugging": "🫂",</li>
<li>"footprints": "👣",</li>
<li>"monkey_face": "🐵",</li>
<li>"monkey": "🐒",</li>
<li>"gorilla": "🦍",</li>
<li>"orangutan": "🦧",</li>
<li>"dog": "🐶",</li>
<li>"dog2": "🐕",</li>
<li>"guide_dog": "🦮",</li>
<li>"service_dog": "🐕‍🦺",</li>
<li>"poodle": "🐩",</li>
<li>"wolf": "🐺",</li>
<li>"fox_face": "🦊",</li>
<li>"raccoon": "🦝",</li>
<li>"cat": "🐱",</li>
<li>"cat2": "🐈",</li>
<li>"black_cat": "🐈‍⬛",</li>
<li>"lion": "🦁",</li>
<li>"tiger": "🐯",</li>
<li>"tiger2": "🐅",</li>
<li>"leopard": "🐆",</li>
<li>"horse": "🐴",</li>
<li>"racehorse": "🐎",</li>
<li>"unicorn": "🦄",</li>
<li>"zebra": "🦓",</li>
<li>"deer": "🦌",</li>
<li>"bison": "🦬",</li>
<li>"cow": "🐮",</li>
<li>"ox": "🐂",</li>
<li>"water_buffalo": "🐃",</li>
<li>"cow2": "🐄",</li>
<li>"pig": "🐷",</li>
<li>"pig2": "🐖",</li>
<li>"boar": "🐗",</li>
<li>"pig_nose": "🐽",</li>
<li>"ram": "🐏",</li>
<li>"sheep": "🐑",</li>
<li>"goat": "🐐",</li>
<li>"dromedary_camel": "🐪",</li>
<li>"camel": "🐫",</li>
<li>"llama": "🦙",</li>
<li>"giraffe": "🦒",</li>
<li>"elephant": "🐘",</li>
<li>"mammoth": "🦣",</li>
<li>"rhinoceros": "🦏",</li>
<li>"hippopotamus": "🦛",</li>
<li>"mouse": "🐭",</li>
<li>"mouse2": "🐁",</li>
<li>"rat": "🐀",</li>
<li>"hamster": "🐹",</li>
<li>"rabbit": "🐰",</li>
<li>"rabbit2": "🐇",</li>
<li>"chipmunk": "🐿️",</li>
<li>"beaver": "🦫",</li>
<li>"hedgehog": "🦔",</li>
<li>"bat": "🦇",</li>
<li>"bear": "🐻",</li>
<li>"polar_bear": "🐻‍❄️",</li>
<li>"koala": "🐨",</li>
<li>"panda_face": "🐼",</li>
<li>"sloth": "🦥",</li>
<li>"otter": "🦦",</li>
<li>"skunk": "🦨",</li>
<li>"kangaroo": "🦘",</li>
<li>"badger": "🦡",</li>
<li>"feet": "🐾",</li>
<li>"paw_prints": "🐾",</li>
<li>"turkey": "🦃",</li>
<li>"chicken": "🐔",</li>
<li>"rooster": "🐓",</li>
<li>"hatching_chick": "🐣",</li>
<li>"baby_chick": "🐤",</li>
<li>"hatched_chick": "🐥",</li>
<li>"bird": "🐦",</li>
<li>"penguin": "🐧",</li>
<li>"dove": "🕊️",</li>
<li>"eagle": "🦅",</li>
<li>"duck": "🦆",</li>
<li>"swan": "🦢",</li>
<li>"owl": "🦉",</li>
<li>"dodo": "🦤",</li>
<li>"feather": "🪶",</li>
<li>"flamingo": "🦩",</li>
<li>"peacock": "🦚",</li>
<li>"parrot": "🦜",</li>
<li>"frog": "🐸",</li>
<li>"crocodile": "🐊",</li>
<li>"turtle": "🐢",</li>
<li>"lizard": "🦎",</li>
<li>"snake": "🐍",</li>
<li>"dragon_face": "🐲",</li>
<li>"dragon": "🐉",</li>
<li>"sauropod": "🦕",</li>
<li>"t-rex": "🦖",</li>
<li>"whale": "🐳",</li>
<li>"whale2": "🐋",</li>
<li>"dolphin": "🐬",</li>
<li>"flipper": "🐬",</li>
<li>"seal": "🦭",</li>
<li>"fish": "🐟",</li>
<li>"tropical_fish": "🐠",</li>
<li>"blowfish": "🐡",</li>
<li>"shark": "🦈",</li>
<li>"octopus": "🐙",</li>
<li>"shell": "🐚",</li>
<li>"snail": "🐌",</li>
<li>"butterfly": "🦋",</li>
<li>"bug": "🐛",</li>
<li>"ant": "🐜",</li>
<li>"bee": "🐝",</li>
<li>"honeybee": "🐝",</li>
<li>"beetle": "🪲",</li>
<li>"lady_beetle": "🐞",</li>
<li>"cricket": "🦗",</li>
<li>"cockroach": "🪳",</li>
<li>"spider": "🕷️",</li>
<li>"spider_web": "🕸️",</li>
<li>"scorpion": "🦂",</li>
<li>"mosquito": "🦟",</li>
<li>"fly": "🪰",</li>
<li>"worm": "🪱",</li>
<li>"microbe": "🦠",</li>
<li>"bouquet": "💐",</li>
<li>"cherry_blossom": "🌸",</li>
<li>"white_flower": "💮",</li>
<li>"rosette": "🏵️",</li>
<li>"rose": "🌹",</li>
<li>"wilted_flower": "🥀",</li>
<li>"hibiscus": "🌺",</li>
<li>"sunflower": "🌻",</li>
<li>"blossom": "🌼",</li>
<li>"tulip": "🌷",</li>
<li>"seedling": "🌱",</li>
<li>"potted_plant": "🪴",</li>
<li>"evergreen_tree": "🌲",</li>
<li>"deciduous_tree": "🌳",</li>
<li>"palm_tree": "🌴",</li>
<li>"cactus": "🌵",</li>
<li>"ear_of_rice": "🌾",</li>
<li>"herb": "🌿",</li>
<li>"shamrock": "☘️",</li>
<li>"four_leaf_clover": "🍀",</li>
<li>"maple_leaf": "🍁",</li>
<li>"fallen_leaf": "🍂",</li>
<li>"leaves": "🍃",</li>
<li>"grapes": "🍇",</li>
<li>"melon": "🍈",</li>
<li>"watermelon": "🍉",</li>
<li>"tangerine": "🍊",</li>
<li>"orange": "🍊",</li>
<li>"mandarin": "🍊",</li>
<li>"lemon": "🍋",</li>
<li>"banana": "🍌",</li>
<li>"pineapple": "🍍",</li>
<li>"mango": "🥭",</li>
<li>"apple": "🍎",</li>
<li>"green_apple": "🍏",</li>
<li>"pear": "🍐",</li>
<li>"peach": "🍑",</li>
<li>"cherries": "🍒",</li>
<li>"strawberry": "🍓",</li>
<li>"blueberries": "🫐",</li>
<li>"kiwi_fruit": "🥝",</li>
<li>"tomato": "🍅",</li>
<li>"olive": "🫒",</li>
<li>"coconut": "🥥",</li>
<li>"avocado": "🥑",</li>
<li>"eggplant": "🍆",</li>
<li>"potato": "🥔",</li>
<li>"carrot": "🥕",</li>
<li>"corn": "🌽",</li>
<li>"hot_pepper": "🌶️",</li>
<li>"bell_pepper": "🫑",</li>
<li>"cucumber": "🥒",</li>
<li>"leafy_green": "🥬",</li>
<li>"broccoli": "🥦",</li>
<li>"garlic": "🧄",</li>
<li>"onion": "🧅",</li>
<li>"mushroom": "🍄",</li>
<li>"peanuts": "🥜",</li>
<li>"chestnut": "🌰",</li>
<li>"bread": "🍞",</li>
<li>"croissant": "🥐",</li>
<li>"baguette_bread": "🥖",</li>
<li>"flatbread": "🫓",</li>
<li>"pretzel": "🥨",</li>
<li>"bagel": "🥯",</li>
<li>"pancakes": "🥞",</li>
<li>"waffle": "🧇",</li>
<li>"cheese": "🧀",</li>
<li>"meat_on_bone": "🍖",</li>
<li>"poultry_leg": "🍗",</li>
<li>"cut_of_meat": "🥩",</li>
<li>"bacon": "🥓",</li>
<li>"hamburger": "🍔",</li>
<li>"fries": "🍟",</li>
<li>"pizza": "🍕",</li>
<li>"hotdog": "🌭",</li>
<li>"sandwich": "🥪",</li>
<li>"taco": "🌮",</li>
<li>"burrito": "🌯",</li>
<li>"tamale": "🫔",</li>
<li>"stuffed_flatbread": "🥙",</li>
<li>"falafel": "🧆",</li>
<li>"egg": "🥚",</li>
<li>"fried_egg": "🍳",</li>
<li>"shallow_pan_of_food": "🥘",</li>
<li>"stew": "🍲",</li>
<li>"fondue": "🫕",</li>
<li>"bowl_with_spoon": "🥣",</li>
<li>"green_salad": "🥗",</li>
<li>"popcorn": "🍿",</li>
<li>"butter": "🧈",</li>
<li>"salt": "🧂",</li>
<li>"canned_food": "🥫",</li>
<li>"bento": "🍱",</li>
<li>"rice_cracker": "🍘",</li>
<li>"rice_ball": "🍙",</li>
<li>"rice": "🍚",</li>
<li>"curry": "🍛",</li>
<li>"ramen": "🍜",</li>
<li>"spaghetti": "🍝",</li>
<li>"sweet_potato": "🍠",</li>
<li>"oden": "🍢",</li>
<li>"sushi": "🍣",</li>
<li>"fried_shrimp": "🍤",</li>
<li>"fish_cake": "🍥",</li>
<li>"moon_cake": "🥮",</li>
<li>"dango": "🍡",</li>
<li>"dumpling": "🥟",</li>
<li>"fortune_cookie": "🥠",</li>
<li>"takeout_box": "🥡",</li>
<li>"crab": "🦀",</li>
<li>"lobster": "🦞",</li>
<li>"shrimp": "🦐",</li>
<li>"squid": "🦑",</li>
<li>"oyster": "🦪",</li>
<li>"icecream": "🍦",</li>
<li>"shaved_ice": "🍧",</li>
<li>"ice_cream": "🍨",</li>
<li>"doughnut": "🍩",</li>
<li>"cookie": "🍪",</li>
<li>"birthday": "🎂",</li>
<li>"cake": "🍰",</li>
<li>"cupcake": "🧁",</li>
<li>"pie": "🥧",</li>
<li>"chocolate_bar": "🍫",</li>
<li>"candy": "🍬",</li>
<li>"lollipop": "🍭",</li>
<li>"custard": "🍮",</li>
<li>"honey_pot": "🍯",</li>
<li>"baby_bottle": "🍼",</li>
<li>"milk_glass": "🥛",</li>
<li>"coffee": "☕",</li>
<li>"teapot": "🫖",</li>
<li>"tea": "🍵",</li>
<li>"sake": "🍶",</li>
<li>"champagne": "🍾",</li>
<li>"wine_glass": "🍷",</li>
<li>"cocktail": "🍸",</li>
<li>"tropical_drink": "🍹",</li>
<li>"beer": "🍺",</li>
<li>"beers": "🍻",</li>
<li>"clinking_glasses": "🥂",</li>
<li>"tumbler_glass": "🥃",</li>
<li>"cup_with_straw": "🥤",</li>
<li>"bubble_tea": "🧋",</li>
<li>"beverage_box": "🧃",</li>
<li>"mate": "🧉",</li>
<li>"ice_cube": "🧊",</li>
<li>"chopsticks": "🥢",</li>
<li>"plate_with_cutlery": "🍽️",</li>
<li>"fork_and_knife": "🍴",</li>
<li>"spoon": "🥄",</li>
<li>"hocho": "🔪",</li>
<li>"knife": "🔪",</li>
<li>"amphora": "🏺",</li>
<li>"earth_africa": "🌍",</li>
<li>"earth_americas": "🌎",</li>
<li>"earth_asia": "🌏",</li>
<li>"globe_with_meridians": "🌐",</li>
<li>"world_map": "🗺️",</li>
<li>"japan": "🗾",</li>
<li>"compass": "🧭",</li>
<li>"mountain_snow": "🏔️",</li>
<li>"mountain": "⛰️",</li>
<li>"volcano": "🌋",</li>
<li>"mount_fuji": "🗻",</li>
<li>"camping": "🏕️",</li>
<li>"beach_umbrella": "🏖️",</li>
<li>"desert": "🏜️",</li>
<li>"desert_island": "🏝️",</li>
<li>"national_park": "🏞️",</li>
<li>"stadium": "🏟️",</li>
<li>"classical_building": "🏛️",</li>
<li>"building_construction": "🏗️",</li>
<li>"bricks": "🧱",</li>
<li>"rock": "🪨",</li>
<li>"wood": "🪵",</li>
<li>"hut": "🛖",</li>
<li>"houses": "🏘️",</li>
<li>"derelict_house": "🏚️",</li>
<li>"house": "🏠",</li>
<li>"house_with_garden": "🏡",</li>
<li>"office": "🏢",</li>
<li>"post_office": "🏣",</li>
<li>"european_post_office": "🏤",</li>
<li>"hospital": "🏥",</li>
<li>"bank": "🏦",</li>
<li>"hotel": "🏨",</li>
<li>"love_hotel": "🏩",</li>
<li>"convenience_store": "🏪",</li>
<li>"school": "🏫",</li>
<li>"department_store": "🏬",</li>
<li>"factory": "🏭",</li>
<li>"japanese_castle": "🏯",</li>
<li>"european_castle": "🏰",</li>
<li>"wedding": "💒",</li>
<li>"tokyo_tower": "🗼",</li>
<li>"statue_of_liberty": "🗽",</li>
<li>"church": "⛪",</li>
<li>"mosque": "🕌",</li>
<li>"hindu_temple": "🛕",</li>
<li>"synagogue": "🕍",</li>
<li>"shinto_shrine": "⛩️",</li>
<li>"kaaba": "🕋",</li>
<li>"fountain": "⛲",</li>
<li>"tent": "⛺",</li>
<li>"foggy": "🌁",</li>
<li>"night_with_stars": "🌃",</li>
<li>"cityscape": "🏙️",</li>
<li>"sunrise_over_mountains": "🌄",</li>
<li>"sunrise": "🌅",</li>
<li>"city_sunset": "🌆",</li>
<li>"city_sunrise": "🌇",</li>
<li>"bridge_at_night": "🌉",</li>
<li>"hotsprings": "♨️",</li>
<li>"carousel_horse": "🎠",</li>
<li>"ferris_wheel": "🎡",</li>
<li>"roller_coaster": "🎢",</li>
<li>"barber": "💈",</li>
<li>"circus_tent": "🎪",</li>
<li>"steam_locomotive": "🚂",</li>
<li>"railway_car": "🚃",</li>
<li>"bullettrain_side": "🚄",</li>
<li>"bullettrain_front": "🚅",</li>
<li>"train2": "🚆",</li>
<li>"metro": "🚇",</li>
<li>"light_rail": "🚈",</li>
<li>"station": "🚉",</li>
<li>"tram": "🚊",</li>
<li>"monorail": "🚝",</li>
<li>"mountain_railway": "🚞",</li>
<li>"train": "🚋",</li>
<li>"bus": "🚌",</li>
<li>"oncoming_bus": "🚍",</li>
<li>"trolleybus": "🚎",</li>
<li>"minibus": "🚐",</li>
<li>"ambulance": "🚑",</li>
<li>"fire_engine": "🚒",</li>
<li>"police_car": "🚓",</li>
<li>"oncoming_police_car": "🚔",</li>
<li>"taxi": "🚕",</li>
<li>"oncoming_taxi": "🚖",</li>
<li>"car": "🚗",</li>
<li>"red_car": "🚗",</li>
<li>"oncoming_automobile": "🚘",</li>
<li>"blue_car": "🚙",</li>
<li>"pickup_truck": "🛻",</li>
<li>"truck": "🚚",</li>
<li>"articulated_lorry": "🚛",</li>
<li>"tractor": "🚜",</li>
<li>"racing_car": "🏎️",</li>
<li>"motorcycle": "🏍️",</li>
<li>"motor_scooter": "🛵",</li>
<li>"manual_wheelchair": "🦽",</li>
<li>"motorized_wheelchair": "🦼",</li>
<li>"auto_rickshaw": "🛺",</li>
<li>"bike": "🚲",</li>
<li>"kick_scooter": "🛴",</li>
<li>"skateboard": "🛹",</li>
<li>"roller_skate": "🛼",</li>
<li>"busstop": "🚏",</li>
<li>"motorway": "🛣️",</li>
<li>"railway_track": "🛤️",</li>
<li>"oil_drum": "🛢️",</li>
<li>"fuelpump": "⛽",</li>
<li>"rotating_light": "🚨",</li>
<li>"traffic_light": "🚥",</li>
<li>"vertical_traffic_light": "🚦",</li>
<li>"stop_sign": "🛑",</li>
<li>"construction": "🚧",</li>
<li>"anchor": "⚓",</li>
<li>"boat": "⛵",</li>
<li>"sailboat": "⛵",</li>
<li>"canoe": "🛶",</li>
<li>"speedboat": "🚤",</li>
<li>"passenger_ship": "🛳️",</li>
<li>"ferry": "⛴️",</li>
<li>"motor_boat": "🛥️",</li>
<li>"ship": "🚢",</li>
<li>"airplane": "✈️",</li>
<li>"small_airplane": "🛩️",</li>
<li>"flight_departure": "🛫",</li>
<li>"flight_arrival": "🛬",</li>
<li>"parachute": "🪂",</li>
<li>"seat": "💺",</li>
<li>"helicopter": "🚁",</li>
<li>"suspension_railway": "🚟",</li>
<li>"mountain_cableway": "🚠",</li>
<li>"aerial_tramway": "🚡",</li>
<li>"artificial_satellite": "🛰️",</li>
<li>"rocket": "🚀",</li>
<li>"flying_saucer": "🛸",</li>
<li>"bellhop_bell": "🛎️",</li>
<li>"luggage": "🧳",</li>
<li>"hourglass": "⌛",</li>
<li>"hourglass_flowing_sand": "⏳",</li>
<li>"watch": "⌚",</li>
<li>"alarm_clock": "⏰",</li>
<li>"stopwatch": "⏱️",</li>
<li>"timer_clock": "⏲️",</li>
<li>"mantelpiece_clock": "🕰️",</li>
<li>"clock12": "🕛",</li>
<li>"clock1230": "🕧",</li>
<li>"clock1": "🕐",</li>
<li>"clock130": "🕜",</li>
<li>"clock2": "🕑",</li>
<li>"clock230": "🕝",</li>
<li>"clock3": "🕒",</li>
<li>"clock330": "🕞",</li>
<li>"clock4": "🕓",</li>
<li>"clock430": "🕟",</li>
<li>"clock5": "🕔",</li>
<li>"clock530": "🕠",</li>
<li>"clock6": "🕕",</li>
<li>"clock630": "🕡",</li>
<li>"clock7": "🕖",</li>
<li>"clock730": "🕢",</li>
<li>"clock8": "🕗",</li>
<li>"clock830": "🕣",</li>
<li>"clock9": "🕘",</li>
<li>"clock930": "🕤",</li>
<li>"clock10": "🕙",</li>
<li>"clock1030": "🕥",</li>
<li>"clock11": "🕚",</li>
<li>"clock1130": "🕦",</li>
<li>"new_moon": "🌑",</li>
<li>"waxing_crescent_moon": "🌒",</li>
<li>"first_quarter_moon": "🌓",</li>
<li>"moon": "🌔",</li>
<li>"waxing_gibbous_moon": "🌔",</li>
<li>"full_moon": "🌕",</li>
<li>"waning_gibbous_moon": "🌖",</li>
<li>"last_quarter_moon": "🌗",</li>
<li>"waning_crescent_moon": "🌘",</li>
<li>"crescent_moon": "🌙",</li>
<li>"new_moon_with_face": "🌚",</li>
<li>"first_quarter_moon_with_face": "🌛",</li>
<li>"last_quarter_moon_with_face": "🌜",</li>
<li>"thermometer": "🌡️",</li>
<li>"sunny": "☀️",</li>
<li>"full_moon_with_face": "🌝",</li>
<li>"sun_with_face": "🌞",</li>
<li>"ringed_planet": "🪐",</li>
<li>"star": "⭐",</li>
<li>"star2": "🌟",</li>
<li>"stars": "🌠",</li>
<li>"milky_way": "🌌",</li>
<li>"cloud": "☁️",</li>
<li>"partly_sunny": "⛅",</li>
<li>"cloud_with_lightning_and_rain": "⛈️",</li>
<li>"sun_behind_small_cloud": "🌤️",</li>
<li>"sun_behind_large_cloud": "🌥️",</li>
<li>"sun_behind_rain_cloud": "🌦️",</li>
<li>"cloud_with_rain": "🌧️",</li>
<li>"cloud_with_snow": "🌨️",</li>
<li>"cloud_with_lightning": "🌩️",</li>
<li>"tornado": "🌪️",</li>
<li>"fog": "🌫️",</li>
<li>"wind_face": "🌬️",</li>
<li>"cyclone": "🌀",</li>
<li>"rainbow": "🌈",</li>
<li>"closed_umbrella": "🌂",</li>
<li>"open_umbrella": "☂️",</li>
<li>"umbrella": "☔",</li>
<li>"parasol_on_ground": "⛱️",</li>
<li>"zap": "⚡",</li>
<li>"snowflake": "❄️",</li>
<li>"snowman_with_snow": "☃️",</li>
<li>"snowman": "⛄",</li>
<li>"comet": "☄️",</li>
<li>"fire": "🔥",</li>
<li>"droplet": "💧",</li>
<li>"ocean": "🌊",</li>
<li>"jack_o_lantern": "🎃",</li>
<li>"christmas_tree": "🎄",</li>
<li>"fireworks": "🎆",</li>
<li>"sparkler": "🎇",</li>
<li>"firecracker": "🧨",</li>
<li>"sparkles": "✨",</li>
<li>"balloon": "🎈",</li>
<li>"tada": "🎉",</li>
<li>"confetti_ball": "🎊",</li>
<li>"tanabata_tree": "🎋",</li>
<li>"bamboo": "🎍",</li>
<li>"dolls": "🎎",</li>
<li>"flags": "🎏",</li>
<li>"wind_chime": "🎐",</li>
<li>"rice_scene": "🎑",</li>
<li>"red_envelope": "🧧",</li>
<li>"ribbon": "🎀",</li>
<li>"gift": "🎁",</li>
<li>"reminder_ribbon": "🎗️",</li>
<li>"tickets": "🎟️",</li>
<li>"ticket": "🎫",</li>
<li>"medal_military": "🎖️",</li>
<li>"trophy": "🏆",</li>
<li>"medal_sports": "🏅",</li>
<li>"1st_place_medal": "🥇",</li>
<li>"2nd_place_medal": "🥈",</li>
<li>"3rd_place_medal": "🥉",</li>
<li>"soccer": "⚽",</li>
<li>"baseball": "⚾",</li>
<li>"softball": "🥎",</li>
<li>"basketball": "🏀",</li>
<li>"volleyball": "🏐",</li>
<li>"football": "🏈",</li>
<li>"rugby_football": "🏉",</li>
<li>"tennis": "🎾",</li>
<li>"flying_disc": "🥏",</li>
<li>"bowling": "🎳",</li>
<li>"cricket_game": "🏏",</li>
<li>"field_hockey": "🏑",</li>
<li>"ice_hockey": "🏒",</li>
<li>"lacrosse": "🥍",</li>
<li>"ping_pong": "🏓",</li>
<li>"badminton": "🏸",</li>
<li>"boxing_glove": "🥊",</li>
<li>"martial_arts_uniform": "🥋",</li>
<li>"goal_net": "🥅",</li>
<li>"golf": "⛳",</li>
<li>"ice_skate": "⛸️",</li>
<li>"fishing_pole_and_fish": "🎣",</li>
<li>"diving_mask": "🤿",</li>
<li>"running_shirt_with_sash": "🎽",</li>
<li>"ski": "🎿",</li>
<li>"sled": "🛷",</li>
<li>"curling_stone": "🥌",</li>
<li>"dart": "🎯",</li>
<li>"yo_yo": "🪀",</li>
<li>"kite": "🪁",</li>
<li>"8ball": "🎱",</li>
<li>"crystal_ball": "🔮",</li>
<li>"magic_wand": "🪄",</li>
<li>"nazar_amulet": "🧿",</li>
<li>"video_game": "🎮",</li>
<li>"joystick": "🕹️",</li>
<li>"slot_machine": "🎰",</li>
<li>"game_die": "🎲",</li>
<li>"jigsaw": "🧩",</li>
<li>"teddy_bear": "🧸",</li>
<li>"pinata": "🪅",</li>
<li>"nesting_dolls": "🪆",</li>
<li>"spades": "♠️",</li>
<li>"hearts": "♥️",</li>
<li>"diamonds": "♦️",</li>
<li>"clubs": "♣️",</li>
<li>"chess_pawn": "♟️",</li>
<li>"black_joker": "🃏",</li>
<li>"mahjong": "🀄",</li>
<li>"flower_playing_cards": "🎴",</li>
<li>"performing_arts": "🎭",</li>
<li>"framed_picture": "🖼️",</li>
<li>"art": "🎨",</li>
<li>"thread": "🧵",</li>
<li>"sewing_needle": "🪡",</li>
<li>"yarn": "🧶",</li>
<li>"knot": "🪢",</li>
<li>"eyeglasses": "👓",</li>
<li>"dark_sunglasses": "🕶️",</li>
<li>"goggles": "🥽",</li>
<li>"lab_coat": "🥼",</li>
<li>"safety_vest": "🦺",</li>
<li>"necktie": "👔",</li>
<li>"shirt": "👕",</li>
<li>"tshirt": "👕",</li>
<li>"jeans": "👖",</li>
<li>"scarf": "🧣",</li>
<li>"gloves": "🧤",</li>
<li>"coat": "🧥",</li>
<li>"socks": "🧦",</li>
<li>"dress": "👗",</li>
<li>"kimono": "👘",</li>
<li>"sari": "🥻",</li>
<li>"one_piece_swimsuit": "🩱",</li>
<li>"swim_brief": "🩲",</li>
<li>"shorts": "🩳",</li>
<li>"bikini": "👙",</li>
<li>"womans_clothes": "👚",</li>
<li>"purse": "👛",</li>
<li>"handbag": "👜",</li>
<li>"pouch": "👝",</li>
<li>"shopping": "🛍️",</li>
<li>"school_satchel": "🎒",</li>
<li>"thong_sandal": "🩴",</li>
<li>"mans_shoe": "👞",</li>
<li>"shoe": "👞",</li>
<li>"athletic_shoe": "👟",</li>
<li>"hiking_boot": "🥾",</li>
<li>"flat_shoe": "🥿",</li>
<li>"high_heel": "👠",</li>
<li>"sandal": "👡",</li>
<li>"ballet_shoes": "🩰",</li>
<li>"boot": "👢",</li>
<li>"crown": "👑",</li>
<li>"womans_hat": "👒",</li>
<li>"tophat": "🎩",</li>
<li>"mortar_board": "🎓",</li>
<li>"billed_cap": "🧢",</li>
<li>"military_helmet": "🪖",</li>
<li>"rescue_worker_helmet": "⛑️",</li>
<li>"prayer_beads": "📿",</li>
<li>"lipstick": "💄",</li>
<li>"ring": "💍",</li>
<li>"gem": "💎",</li>
<li>"mute": "🔇",</li>
<li>"speaker": "🔈",</li>
<li>"sound": "🔉",</li>
<li>"loud_sound": "🔊",</li>
<li>"loudspeaker": "📢",</li>
<li>"mega": "📣",</li>
<li>"postal_horn": "📯",</li>
<li>"bell": "🔔",</li>
<li>"no_bell": "🔕",</li>
<li>"musical_score": "🎼",</li>
<li>"musical_note": "🎵",</li>
<li>"notes": "🎶",</li>
<li>"studio_microphone": "🎙️",</li>
<li>"level_slider": "🎚️",</li>
<li>"control_knobs": "🎛️",</li>
<li>"microphone": "🎤",</li>
<li>"headphones": "🎧",</li>
<li>"radio": "📻",</li>
<li>"saxophone": "🎷",</li>
<li>"accordion": "🪗",</li>
<li>"guitar": "🎸",</li>
<li>"musical_keyboard": "🎹",</li>
<li>"trumpet": "🎺",</li>
<li>"violin": "🎻",</li>
<li>"banjo": "🪕",</li>
<li>"drum": "🥁",</li>
<li>"long_drum": "🪘",</li>
<li>"iphone": "📱",</li>
<li>"calling": "📲",</li>
<li>"phone": "☎️",</li>
<li>"telephone": "☎️",</li>
<li>"telephone_receiver": "📞",</li>
<li>"pager": "📟",</li>
<li>"fax": "📠",</li>
<li>"battery": "🔋",</li>
<li>"electric_plug": "🔌",</li>
<li>"computer": "💻",</li>
<li>"desktop_computer": "🖥️",</li>
<li>"printer": "🖨️",</li>
<li>"keyboard": "⌨️",</li>
<li>"computer_mouse": "🖱️",</li>
<li>"trackball": "🖲️",</li>
<li>"minidisc": "💽",</li>
<li>"floppy_disk": "💾",</li>
<li>"cd": "💿",</li>
<li>"dvd": "📀",</li>
<li>"abacus": "🧮",</li>
<li>"movie_camera": "🎥",</li>
<li>"film_strip": "🎞️",</li>
<li>"film_projector": "📽️",</li>
<li>"clapper": "🎬",</li>
<li>"tv": "📺",</li>
<li>"camera": "📷",</li>
<li>"camera_flash": "📸",</li>
<li>"video_camera": "📹",</li>
<li>"vhs": "📼",</li>
<li>"mag": "🔍",</li>
<li>"mag_right": "🔎",</li>
<li>"candle": "🕯️",</li>
<li>"bulb": "💡",</li>
<li>"flashlight": "🔦",</li>
<li>"izakaya_lantern": "🏮",</li>
<li>"lantern": "🏮",</li>
<li>"diya_lamp": "🪔",</li>
<li>"notebook_with_decorative_cover": "📔",</li>
<li>"closed_book": "📕",</li>
<li>"book": "📖",</li>
<li>"open_book": "📖",</li>
<li>"green_book": "📗",</li>
<li>"blue_book": "📘",</li>
<li>"orange_book": "📙",</li>
<li>"books": "📚",</li>
<li>"notebook": "📓",</li>
<li>"ledger": "📒",</li>
<li>"page_with_curl": "📃",</li>
<li>"scroll": "📜",</li>
<li>"page_facing_up": "📄",</li>
<li>"newspaper": "📰",</li>
<li>"newspaper_roll": "🗞️",</li>
<li>"bookmark_tabs": "📑",</li>
<li>"bookmark": "🔖",</li>
<li>"label": "🏷️",</li>
<li>"moneybag": "💰",</li>
<li>"coin": "🪙",</li>
<li>"yen": "💴",</li>
<li>"dollar": "💵",</li>
<li>"euro": "💶",</li>
<li>"pound": "💷",</li>
<li>"money_with_wings": "💸",</li>
<li>"credit_card": "💳",</li>
<li>"receipt": "🧾",</li>
<li>"chart": "💹",</li>
<li>"envelope": "✉️",</li>
<li>"email": "📧",</li>
<li>"e-mail": "📧",</li>
<li>"incoming_envelope": "📨",</li>
<li>"envelope_with_arrow": "📩",</li>
<li>"outbox_tray": "📤",</li>
<li>"inbox_tray": "📥",</li>
<li>"package": "📦",</li>
<li>"mailbox": "📫",</li>
<li>"mailbox_closed": "📪",</li>
<li>"mailbox_with_mail": "📬",</li>
<li>"mailbox_with_no_mail": "📭",</li>
<li>"postbox": "📮",</li>
<li>"ballot_box": "🗳️",</li>
<li>"pencil2": "✏️",</li>
<li>"black_nib": "✒️",</li>
<li>"fountain_pen": "🖋️",</li>
<li>"pen": "🖊️",</li>
<li>"paintbrush": "🖌️",</li>
<li>"crayon": "🖍️",</li>
<li>"memo": "📝",</li>
<li>"pencil": "📝",</li>
<li>"briefcase": "💼",</li>
<li>"file_folder": "📁",</li>
<li>"open_file_folder": "📂",</li>
<li>"card_index_dividers": "🗂️",</li>
<li>"date": "📅",</li>
<li>"calendar": "📆",</li>
<li>"spiral_notepad": "🗒️",</li>
<li>"spiral_calendar": "🗓️",</li>
<li>"card_index": "📇",</li>
<li>"chart_with_upwards_trend": "📈",</li>
<li>"chart_with_downwards_trend": "📉",</li>
<li>"bar_chart": "📊",</li>
<li>"clipboard": "📋",</li>
<li>"pushpin": "📌",</li>
<li>"round_pushpin": "📍",</li>
<li>"paperclip": "📎",</li>
<li>"paperclips": "🖇️",</li>
<li>"straight_ruler": "📏",</li>
<li>"triangular_ruler": "📐",</li>
<li>"scissors": "✂️",</li>
<li>"card_file_box": "🗃️",</li>
<li>"file_cabinet": "🗄️",</li>
<li>"wastebasket": "🗑️",</li>
<li>"lock": "🔒",</li>
<li>"unlock": "🔓",</li>
<li>"lock_with_ink_pen": "🔏",</li>
<li>"closed_lock_with_key": "🔐",</li>
<li>"key": "🔑",</li>
<li>"old_key": "🗝️",</li>
<li>"hammer": "🔨",</li>
<li>"axe": "🪓",</li>
<li>"pick": "⛏️",</li>
<li>"hammer_and_pick": "⚒️",</li>
<li>"hammer_and_wrench": "🛠️",</li>
<li>"dagger": "🗡️",</li>
<li>"crossed_swords": "⚔️",</li>
<li>"gun": "🔫",</li>
<li>"boomerang": "🪃",</li>
<li>"bow_and_arrow": "🏹",</li>
<li>"shield": "🛡️",</li>
<li>"carpentry_saw": "🪚",</li>
<li>"wrench": "🔧",</li>
<li>"screwdriver": "🪛",</li>
<li>"nut_and_bolt": "🔩",</li>
<li>"gear": "⚙️",</li>
<li>"clamp": "🗜️",</li>
<li>"balance_scale": "⚖️",</li>
<li>"probing_cane": "🦯",</li>
<li>"link": "🔗",</li>
<li>"chains": "⛓️",</li>
<li>"hook": "🪝",</li>
<li>"toolbox": "🧰",</li>
<li>"magnet": "🧲",</li>
<li>"ladder": "🪜",</li>
<li>"alembic": "⚗️",</li>
<li>"test_tube": "🧪",</li>
<li>"petri_dish": "🧫",</li>
<li>"dna": "🧬",</li>
<li>"microscope": "🔬",</li>
<li>"telescope": "🔭",</li>
<li>"satellite": "📡",</li>
<li>"syringe": "💉",</li>
<li>"drop_of_blood": "🩸",</li>
<li>"pill": "💊",</li>
<li>"adhesive_bandage": "🩹",</li>
<li>"stethoscope": "🩺",</li>
<li>"door": "🚪",</li>
<li>"elevator": "🛗",</li>
<li>"mirror": "🪞",</li>
<li>"window": "🪟",</li>
<li>"bed": "🛏️",</li>
<li>"couch_and_lamp": "🛋️",</li>
<li>"chair": "🪑",</li>
<li>"toilet": "🚽",</li>
<li>"plunger": "🪠",</li>
<li>"shower": "🚿",</li>
<li>"bathtub": "🛁",</li>
<li>"mouse_trap": "🪤",</li>
<li>"razor": "🪒",</li>
<li>"lotion_bottle": "🧴",</li>
<li>"safety_pin": "🧷",</li>
<li>"broom": "🧹",</li>
<li>"basket": "🧺",</li>
<li>"roll_of_paper": "🧻",</li>
<li>"bucket": "🪣",</li>
<li>"soap": "🧼",</li>
<li>"toothbrush": "🪥",</li>
<li>"sponge": "🧽",</li>
<li>"fire_extinguisher": "🧯",</li>
<li>"shopping_cart": "🛒",</li>
<li>"smoking": "🚬",</li>
<li>"coffin": "⚰️",</li>
<li>"headstone": "🪦",</li>
<li>"funeral_urn": "⚱️",</li>
<li>"moyai": "🗿",</li>
<li>"placard": "🪧",</li>
<li>"atm": "🏧",</li>
<li>"put_litter_in_its_place": "🚮",</li>
<li>"potable_water": "🚰",</li>
<li>"wheelchair": "♿",</li>
<li>"mens": "🚹",</li>
<li>"womens": "🚺",</li>
<li>"restroom": "🚻",</li>
<li>"baby_symbol": "🚼",</li>
<li>"wc": "🚾",</li>
<li>"passport_control": "🛂",</li>
<li>"customs": "🛃",</li>
<li>"baggage_claim": "🛄",</li>
<li>"left_luggage": "🛅",</li>
<li>"warning": "⚠️",</li>
<li>"children_crossing": "🚸",</li>
<li>"no_entry": "⛔",</li>
<li>"no_entry_sign": "🚫",</li>
<li>"no_bicycles": "🚳",</li>
<li>"no_smoking": "🚭",</li>
<li>"do_not_litter": "🚯",</li>
<li>"non-potable_water": "🚱",</li>
<li>"no_pedestrians": "🚷",</li>
<li>"no_mobile_phones": "📵",</li>
<li>"underage": "🔞",</li>
<li>"radioactive": "☢️",</li>
<li>"biohazard": "☣️",</li>
<li>"arrow_up": "⬆️",</li>
<li>"arrow_upper_right": "↗️",</li>
<li>"arrow_right": "➡️",</li>
<li>"arrow_lower_right": "↘️",</li>
<li>"arrow_down": "⬇️",</li>
<li>"arrow_lower_left": "↙️",</li>
<li>"arrow_left": "⬅️",</li>
<li>"arrow_upper_left": "↖️",</li>
<li>"arrow_up_down": "↕️",</li>
<li>"left_right_arrow": "↔️",</li>
<li>"leftwards_arrow_with_hook": "↩️",</li>
<li>"arrow_right_hook": "↪️",</li>
<li>"arrow_heading_up": "⤴️",</li>
<li>"arrow_heading_down": "⤵️",</li>
<li>"arrows_clockwise": "🔃",</li>
<li>"arrows_counterclockwise": "🔄",</li>
<li>"back": "🔙",</li>
<li>"end": "🔚",</li>
<li>"on": "🔛",</li>
<li>"soon": "🔜",</li>
<li>"top": "🔝",</li>
<li>"place_of_worship": "🛐",</li>
<li>"atom_symbol": "⚛️",</li>
<li>"om": "🕉️",</li>
<li>"star_of_david": "✡️",</li>
<li>"wheel_of_dharma": "☸️",</li>
<li>"yin_yang": "☯️",</li>
<li>"latin_cross": "✝️",</li>
<li>"orthodox_cross": "☦️",</li>
<li>"star_and_crescent": "☪️",</li>
<li>"peace_symbol": "☮️",</li>
<li>"menorah": "🕎",</li>
<li>"six_pointed_star": "🔯",</li>
<li>"aries": "♈",</li>
<li>"taurus": "♉",</li>
<li>"gemini": "♊",</li>
<li>"cancer": "♋",</li>
<li>"leo": "♌",</li>
<li>"virgo": "♍",</li>
<li>"libra": "♎",</li>
<li>"scorpius": "♏",</li>
<li>"sagittarius": "♐",</li>
<li>"capricorn": "♑",</li>
<li>"aquarius": "♒",</li>
<li>"pisces": "♓",</li>
<li>"ophiuchus": "⛎",</li>
<li>"twisted_rightwards_arrows": "🔀",</li>
<li>"repeat": "🔁",</li>
<li>"repeat_one": "🔂",</li>
<li>"arrow_forward": "▶️",</li>
<li>"fast_forward": "⏩",</li>
<li>"next_track_button": "⏭️",</li>
<li>"play_or_pause_button": "⏯️",</li>
<li>"arrow_backward": "◀️",</li>
<li>"rewind": "⏪",</li>
<li>"previous_track_button": "⏮️",</li>
<li>"arrow_up_small": "🔼",</li>
<li>"arrow_double_up": "⏫",</li>
<li>"arrow_down_small": "🔽",</li>
<li>"arrow_double_down": "⏬",</li>
<li>"pause_button": "⏸️",</li>
<li>"stop_button": "⏹️",</li>
<li>"record_button": "⏺️",</li>
<li>"eject_button": "⏏️",</li>
<li>"cinema": "🎦",</li>
<li>"low_brightness": "🔅",</li>
<li>"high_brightness": "🔆",</li>
<li>"signal_strength": "📶",</li>
<li>"vibration_mode": "📳",</li>
<li>"mobile_phone_off": "📴",</li>
<li>"female_sign": "♀️",</li>
<li>"male_sign": "♂️",</li>
<li>"transgender_symbol": "⚧️",</li>
<li>"heavy_multiplication_x": "✖️",</li>
<li>"heavy_plus_sign": "➕",</li>
<li>"heavy_minus_sign": "➖",</li>
<li>"heavy_division_sign": "➗",</li>
<li>"infinity": "♾️",</li>
<li>"bangbang": "‼️",</li>
<li>"interrobang": "⁉️",</li>
<li>"question": "❓",</li>
<li>"grey_question": "❔",</li>
<li>"grey_exclamation": "❕",</li>
<li>"exclamation": "❗",</li>
<li>"heavy_exclamation_mark": "❗",</li>
<li>"wavy_dash": "〰️",</li>
<li>"currency_exchange": "💱",</li>
<li>"heavy_dollar_sign": "💲",</li>
<li>"medical_symbol": "⚕️",</li>
<li>"recycle": "♻️",</li>
<li>"fleur_de_lis": "⚜️",</li>
<li>"trident": "🔱",</li>
<li>"name_badge": "📛",</li>
<li>"beginner": "🔰",</li>
<li>"o": "⭕",</li>
<li>"white_check_mark": "✅",</li>
<li>"ballot_box_with_check": "☑️",</li>
<li>"heavy_check_mark": "✔️",</li>
<li>"x": "❌",</li>
<li>"negative_squared_cross_mark": "❎",</li>
<li>"curly_loop": "➰",</li>
<li>"loop": "➿",</li>
<li>"part_alternation_mark": "〽️",</li>
<li>"eight_spoked_asterisk": "✳️",</li>
<li>"eight_pointed_black_star": "✴️",</li>
<li>"sparkle": "❇️",</li>
<li>"copyright": "©️",</li>
<li>"registered": "®️",</li>
<li>"tm": "™️",</li>
<li>"hash": "#️⃣",</li>
<li>"asterisk": "*️⃣",</li>
<li>"zero": "0️⃣",</li>
<li>"one": "1️⃣",</li>
<li>"two": "2️⃣",</li>
<li>"three": "3️⃣",</li>
<li>"four": "4️⃣",</li>
<li>"five": "5️⃣",</li>
<li>"six": "6️⃣",</li>
<li>"seven": "7️⃣",</li>
<li>"eight": "8️⃣",</li>
<li>"nine": "9️⃣",</li>
<li>"keycap_ten": "🔟",</li>
<li>"capital_abcd": "🔠",</li>
<li>"abcd": "🔡",</li>
<li>"symbols": "🔣",</li>
<li>"abc": "🔤",</li>
<li>"a": "🅰️",</li>
<li>"ab": "🆎",</li>
<li>"b": "🅱️",</li>
<li>"cl": "🆑",</li>
<li>"cool": "🆒",</li>
<li>"free": "🆓",</li>
<li>"information_source": "ℹ️",</li>
<li>"id": "🆔",</li>
<li>"m": "Ⓜ️",</li>
<li>"new": "🆕",</li>
<li>"ng": "🆖",</li>
<li>"o2": "🅾️",</li>
<li>"ok": "🆗",</li>
<li>"parking": "🅿️",</li>
<li>"sos": "🆘",</li>
<li>"up": "🆙",</li>
<li>"vs": "🆚",</li>
<li>"koko": "🈁",</li>
<li>"sa": "🈂️",</li>
<li>"ideograph_advantage": "🉐",</li>
<li>"accept": "🉑",</li>
<li>"congratulations": "㊗️",</li>
<li>"secret": "㊙️",</li>
<li>"u6e80": "🈵",</li>
<li>"red_circle": "🔴",</li>
<li>"orange_circle": "🟠",</li>
<li>"yellow_circle": "🟡",</li>
<li>"green_circle": "🟢",</li>
<li>"large_blue_circle": "🔵",</li>
<li>"purple_circle": "🟣",</li>
<li>"brown_circle": "🟤",</li>
<li>"black_circle": "⚫",</li>
<li>"white_circle": "⚪",</li>
<li>"red_square": "🟥",</li>
<li>"orange_square": "🟧",</li>
<li>"yellow_square": "🟨",</li>
<li>"green_square": "🟩",</li>
<li>"blue_square": "🟦",</li>
<li>"purple_square": "🟪",</li>
<li>"brown_square": "🟫",</li>
<li>"black_large_square": "⬛",</li>
<li>"white_large_square": "⬜",</li>
<li>"black_medium_square": "◼️",</li>
<li>"white_medium_square": "◻️",</li>
<li>"black_medium_small_square": "◾",</li>
<li>"white_medium_small_square": "◽",</li>
<li>"black_small_square": "▪️",</li>
<li>"white_small_square": "▫️",</li>
<li>"large_orange_diamond": "🔶",</li>
<li>"large_blue_diamond": "🔷",</li>
<li>"small_orange_diamond": "🔸",</li>
<li>"small_blue_diamond": "🔹",</li>
<li>"small_red_triangle": "🔺",</li>
<li>"small_red_triangle_down": "🔻",</li>
<li>"diamond_shape_with_a_dot_inside": "💠",</li>
<li>"radio_button": "🔘",</li>
<li>"white_square_button": "🔳",</li>
<li>"black_square_button": "🔲",</li>
<li>"checkered_flag": "🏁",</li>
<li>"triangular_flag_on_post": "🚩",</li>
<li>"crossed_flags": "🎌",</li>
<li>"black_flag": "🏴",</li>
<li>"white_flag": "🏳️",</li>
<li>"rainbow_flag": "🏳️‍🌈",</li>
<li>"transgender_flag": "🏳️‍⚧️",</li>
<li>"pirate_flag": "🏴‍☠️",</li>
<li>"ascension_island": "🇦🇨",</li>
<li>"andorra": "🇦🇩",</li>
<li>"united_arab_emirates": "🇦🇪",</li>
<li>"afghanistan": "🇦🇫",</li>
<li>"antigua_barbuda": "🇦🇬",</li>
<li>"anguilla": "🇦🇮",</li>
<li>"albania": "🇦🇱",</li>
<li>"armenia": "🇦🇲",</li>
<li>"angola": "🇦🇴",</li>
<li>"antarctica": "🇦🇶",</li>
<li>"argentina": "🇦🇷",</li>
<li>"american_samoa": "🇦🇸",</li>
<li>"austria": "🇦🇹",</li>
<li>"australia": "🇦🇺",</li>
<li>"aruba": "🇦🇼",</li>
<li>"aland_islands": "🇦🇽",</li>
<li>"azerbaijan": "🇦🇿",</li>
<li>"bosnia_herzegovina": "🇧🇦",</li>
<li>"barbados": "🇧🇧",</li>
<li>"bangladesh": "🇧🇩",</li>
<li>"belgium": "🇧🇪",</li>
<li>"burkina_faso": "🇧🇫",</li>
<li>"bulgaria": "🇧🇬",</li>
<li>"bahrain": "🇧🇭",</li>
<li>"burundi": "🇧🇮",</li>
<li>"benin": "🇧🇯",</li>
<li>"st_barthelemy": "🇧🇱",</li>
<li>"bermuda": "🇧🇲",</li>
<li>"brunei": "🇧🇳",</li>
<li>"bolivia": "🇧🇴",</li>
<li>"caribbean_netherlands": "🇧🇶",</li>
<li>"brazil": "🇧🇷",</li>
<li>"bahamas": "🇧🇸",</li>
<li>"bhutan": "🇧🇹",</li>
<li>"bouvet_island": "🇧🇻",</li>
<li>"botswana": "🇧🇼",</li>
<li>"belarus": "🇧🇾",</li>
<li>"belize": "🇧🇿",</li>
<li>"canada": "🇨🇦",</li>
<li>"cocos_islands": "🇨🇨",</li>
<li>"congo_kinshasa": "🇨🇩",</li>
<li>"central_african_republic": "🇨🇫",</li>
<li>"congo_brazzaville": "🇨🇬",</li>
<li>"switzerland": "🇨🇭",</li>
<li>"cote_divoire": "🇨🇮",</li>
<li>"cook_islands": "🇨🇰",</li>
<li>"chile": "🇨🇱",</li>
<li>"cameroon": "🇨🇲",</li>
<li>"cn": "🇨🇳",</li>
<li>"colombia": "🇨🇴",</li>
<li>"clipperton_island": "🇨🇵",</li>
<li>"costa_rica": "🇨🇷",</li>
<li>"cuba": "🇨🇺",</li>
<li>"cape_verde": "🇨🇻",</li>
<li>"curacao": "🇨🇼",</li>
<li>"christmas_island": "🇨🇽",</li>
<li>"cyprus": "🇨🇾",</li>
<li>"czech_republic": "🇨🇿",</li>
<li>"de": "🇩🇪",</li>
<li>"diego_garcia": "🇩🇬",</li>
<li>"djibouti": "🇩🇯",</li>
<li>"denmark": "🇩🇰",</li>
<li>"dominica": "🇩🇲",</li>
<li>"dominican_republic": "🇩🇴",</li>
<li>"algeria": "🇩🇿",</li>
<li>"ceuta_melilla": "🇪🇦",</li>
<li>"ecuador": "🇪🇨",</li>
<li>"estonia": "🇪🇪",</li>
<li>"egypt": "🇪🇬",</li>
<li>"western_sahara": "🇪🇭",</li>
<li>"eritrea": "🇪🇷",</li>
<li>"es": "🇪🇸",</li>
<li>"ethiopia": "🇪🇹",</li>
<li>"eu": "🇪🇺",</li>
<li>"european_union": "🇪🇺",</li>
<li>"finland": "🇫🇮",</li>
<li>"fiji": "🇫🇯",</li>
<li>"falkland_islands": "🇫🇰",</li>
<li>"micronesia": "🇫🇲",</li>
<li>"faroe_islands": "🇫🇴",</li>
<li>"fr": "🇫🇷",</li>
<li>"gabon": "🇬🇦",</li>
<li>"gb": "🇬🇧",</li>
<li>"uk": "🇬🇧",</li>
<li>"grenada": "🇬🇩",</li>
<li>"georgia": "🇬🇪",</li>
<li>"french_guiana": "🇬🇫",</li>
<li>"guernsey": "🇬🇬",</li>
<li>"ghana": "🇬🇭",</li>
<li>"gibraltar": "🇬🇮",</li>
<li>"greenland": "🇬🇱",</li>
<li>"gambia": "🇬🇲",</li>
<li>"guinea": "🇬🇳",</li>
<li>"guadeloupe": "🇬🇵",</li>
<li>"equatorial_guinea": "🇬🇶",</li>
<li>"greece": "🇬🇷",</li>
<li>"south_georgia_south_sandwich_islands": "🇬🇸",</li>
<li>"guatemala": "🇬🇹",</li>
<li>"guam": "🇬🇺",</li>
<li>"guinea_bissau": "🇬🇼",</li>
<li>"guyana": "🇬🇾",</li>
<li>"hong_kong": "🇭🇰",</li>
<li>"heard_mcdonald_islands": "🇭🇲",</li>
<li>"honduras": "🇭🇳",</li>
<li>"croatia": "🇭🇷",</li>
<li>"haiti": "🇭🇹",</li>
<li>"hungary": "🇭🇺",</li>
<li>"canary_islands": "🇮🇨",</li>
<li>"indonesia": "🇮🇩",</li>
<li>"ireland": "🇮🇪",</li>
<li>"israel": "🇮🇱",</li>
<li>"isle_of_man": "🇮🇲",</li>
<li>"india": "🇮🇳",</li>
<li>"british_indian_ocean_territory": "🇮🇴",</li>
<li>"iraq": "🇮🇶",</li>
<li>"iran": "🇮🇷",</li>
<li>"iceland": "🇮🇸",</li>
<li>"it": "🇮🇹",</li>
<li>"jersey": "🇯🇪",</li>
<li>"jamaica": "🇯🇲",</li>
<li>"jordan": "🇯🇴",</li>
<li>"jp": "🇯🇵",</li>
<li>"kenya": "🇰🇪",</li>
<li>"kyrgyzstan": "🇰🇬",</li>
<li>"cambodia": "🇰🇭",</li>
<li>"kiribati": "🇰🇮",</li>
<li>"comoros": "🇰🇲",</li>
<li>"st_kitts_nevis": "🇰🇳",</li>
<li>"north_korea": "🇰🇵",</li>
<li>"kr": "🇰🇷",</li>
<li>"kuwait": "🇰🇼",</li>
<li>"cayman_islands": "🇰🇾",</li>
<li>"kazakhstan": "🇰🇿",</li>
<li>"laos": "🇱🇦",</li>
<li>"lebanon": "🇱🇧",</li>
<li>"st_lucia": "🇱🇨",</li>
<li>"liechtenstein": "🇱🇮",</li>
<li>"sri_lanka": "🇱🇰",</li>
<li>"liberia": "🇱🇷",</li>
<li>"lesotho": "🇱🇸",</li>
<li>"lithuania": "🇱🇹",</li>
<li>"luxembourg": "🇱🇺",</li>
<li>"latvia": "🇱🇻",</li>
<li>"libya": "🇱🇾",</li>
<li>"morocco": "🇲🇦",</li>
<li>"monaco": "🇲🇨",</li>
<li>"moldova": "🇲🇩",</li>
<li>"montenegro": "🇲🇪",</li>
<li>"st_martin": "🇲🇫",</li>
<li>"madagascar": "🇲🇬",</li>
<li>"marshall_islands": "🇲🇭",</li>
<li>"macedonia": "🇲🇰",</li>
<li>"mali": "🇲🇱",</li>
<li>"myanmar": "🇲🇲",</li>
<li>"mongolia": "🇲🇳",</li>
<li>"macau": "🇲🇴",</li>
<li>"northern_mariana_islands": "🇲🇵",</li>
<li>"martinique": "🇲🇶",</li>
<li>"mauritania": "🇲🇷",</li>
<li>"montserrat": "🇲🇸",</li>
<li>"malta": "🇲🇹",</li>
<li>"mauritius": "🇲🇺",</li>
<li>"maldives": "🇲🇻",</li>
<li>"malawi": "🇲🇼",</li>
<li>"mexico": "🇲🇽",</li>
<li>"malaysia": "🇲🇾",</li>
<li>"mozambique": "🇲🇿",</li>
<li>"namibia": "🇳🇦",</li>
<li>"new_caledonia": "🇳🇨",</li>
<li>"niger": "🇳🇪",</li>
<li>"norfolk_island": "🇳🇫",</li>
<li>"nigeria": "🇳🇬",</li>
<li>"nicaragua": "🇳🇮",</li>
<li>"netherlands": "🇳🇱",</li>
<li>"norway": "🇳🇴",</li>
<li>"nepal": "🇳🇵",</li>
<li>"nauru": "🇳🇷",</li>
<li>"niue": "🇳🇺",</li>
<li>"new_zealand": "🇳🇿",</li>
<li>"oman": "🇴🇲",</li>
<li>"panama": "🇵🇦",</li>
<li>"peru": "🇵🇪",</li>
<li>"french_polynesia": "🇵🇫",</li>
<li>"papua_new_guinea": "🇵🇬",</li>
<li>"philippines": "🇵🇭",</li>
<li>"pakistan": "🇵🇰",</li>
<li>"poland": "🇵🇱",</li>
<li>"st_pierre_miquelon": "🇵🇲",</li>
<li>"pitcairn_islands": "🇵🇳",</li>
<li>"puerto_rico": "🇵🇷",</li>
<li>"palestinian_territories": "🇵🇸",</li>
<li>"portugal": "🇵🇹",</li>
<li>"palau": "🇵🇼",</li>
<li>"paraguay": "🇵🇾",</li>
<li>"qatar": "🇶🇦",</li>
<li>"reunion": "🇷🇪",</li>
<li>"romania": "🇷🇴",</li>
<li>"serbia": "🇷🇸",</li>
<li>"ru": "🇷🇺",</li>
<li>"rwanda": "🇷🇼",</li>
<li>"saudi_arabia": "🇸🇦",</li>
<li>"solomon_islands": "🇸🇧",</li>
<li>"seychelles": "🇸🇨",</li>
<li>"sudan": "🇸🇩",</li>
<li>"sweden": "🇸🇪",</li>
<li>"singapore": "🇸🇬",</li>
<li>"st_helena": "🇸🇭",</li>
<li>"slovenia": "🇸🇮",</li>
<li>"svalbard_jan_mayen": "🇸🇯",</li>
<li>"slovakia": "🇸🇰",</li>
<li>"sierra_leone": "🇸🇱",</li>
<li>"san_marino": "🇸🇲",</li>
<li>"senegal": "🇸🇳",</li>
<li>"somalia": "🇸🇴",</li>
<li>"suriname": "🇸🇷",</li>
<li>"south_sudan": "🇸🇸",</li>
<li>"sao_tome_principe": "🇸🇹",</li>
<li>"el_salvador": "🇸🇻",</li>
<li>"sint_maarten": "🇸🇽",</li>
<li>"syria": "🇸🇾",</li>
<li>"swaziland": "🇸🇿",</li>
<li>"tristan_da_cunha": "🇹🇦",</li>
<li>"turks_caicos_islands": "🇹🇨",</li>
<li>"chad": "🇹🇩",</li>
<li>"french_southern_territories": "🇹🇫",</li>
<li>"togo": "🇹🇬",</li>
<li>"thailand": "🇹🇭",</li>
<li>"tajikistan": "🇹🇯",</li>
<li>"tokelau": "🇹🇰",</li>
<li>"timor_leste": "🇹🇱",</li>
<li>"turkmenistan": "🇹🇲",</li>
<li>"tunisia": "🇹🇳",</li>
<li>"tonga": "🇹🇴",</li>
<li>"tr": "🇹🇷",</li>
<li>"trinidad_tobago": "🇹🇹",</li>
<li>"tuvalu": "🇹🇻",</li>
<li>"taiwan": "🇹🇼",</li>
<li>"tanzania": "🇹🇿",</li>
<li>"ukraine": "🇺🇦",</li>
<li>"uganda": "🇺🇬",</li>
<li>"us_outlying_islands": "🇺🇲",</li>
<li>"united_nations": "🇺🇳",</li>
<li>"us": "🇺🇸",</li>
<li>"uruguay": "🇺🇾",</li>
<li>"uzbekistan": "🇺🇿",</li>
<li>"vatican_city": "🇻🇦",</li>
<li>"st_vincent_grenadines": "🇻🇨",</li>
<li>"venezuela": "🇻🇪",</li>
<li>"british_virgin_islands": "🇻🇬",</li>
<li>"us_virgin_islands": "🇻🇮",</li>
<li>"vietnam": "🇻🇳",</li>
<li>"vanuatu": "🇻🇺",</li>
<li>"wallis_futuna": "🇼🇫",</li>
<li>"samoa": "🇼🇸",</li>
<li>"kosovo": "🇽🇰",</li>
<li>"yemen": "🇾🇪",</li>
<li>"mayotte": "🇾🇹",</li>
<li>"south_africa": "🇿🇦",</li>
<li>"zambia": "🇿🇲",</li>
<li>"zimbabwe": "🇿🇼",</li>
<li>"england": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",</li>
<li>"scotland": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",</li>
<li>"wales": "🏴󠁧󠁢󠁷󠁬󠁳󠁿"</li>
</ul>`,readingTime:{minutes:6.24,words:1873},title:"Markdown Emoji v1 汇总",icon:"twemoji:full-moon-face",type:"article"}}],["/tip/markdown/emoji/nature.html",{loader:()=>f(()=>import("./nature.html-hkFf1LAB.js"),[]),meta:{date:16781472e5,category:["使用指南"],tag:["Markdown"],excerpt:`<ul>
<li>☀️ <code>:sunny:</code></li>
<li>☔ <code>:umbrella:</code></li>
<li>☁️ <code>:cloud:</code></li>
<li>❄️ <code>:snowflake:</code></li>
<li>⛄ <code>:snowman:</code></li>
<li>⚡ <code>:zap:</code></li>
<li>🌀 <code>:cyclone:</code></li>
<li>🌁 <code>:foggy:</code></li>
<li>🌊 <code>:ocean:</code></li>
<li>🐱 <code>:cat:</code></li>
<li>🐶 <code>:dog:</code></li>
<li>🐭 <code>:mouse:</code></li>
<li>🐹 <code>:hamster:</code></li>
<li>🐰 <code>:rabbit:</code></li>
<li>🐺 <code>:wolf:</code></li>
<li>🐸 <code>:frog:</code></li>
<li>🐯 <code>:tiger:</code></li>
<li>🐨 <code>:koala:</code></li>
<li>🐻 <code>:bear:</code></li>
<li>🐷 <code>:pig:</code></li>
<li>🐽 <code>:pig_nose:</code></li>
<li>🐮 <code>:cow:</code></li>
<li>🐗 <code>:boar:</code></li>
<li>🐵 <code>:monkey_face:</code></li>
<li>🐒 <code>:monkey:</code></li>
<li>🐴 <code>:horse:</code></li>
<li>🐎 <code>:racehorse:</code></li>
<li>🐫 <code>:camel:</code></li>
<li>🐑 <code>:sheep:</code></li>
<li>🐘 <code>:elephant:</code></li>
<li>🐼 <code>:panda_face:</code></li>
<li>🐍 <code>:snake:</code></li>
<li>🐦 <code>:bird:</code></li>
<li>🐤 <code>:baby_chick:</code></li>
<li>🐥 <code>:hatched_chick:</code></li>
<li>🐣 <code>:hatching_chick:</code></li>
<li>🐔 <code>:chicken:</code></li>
<li>🐧 <code>:penguin:</code></li>
<li>🐢 <code>:turtle:</code></li>
<li>🐛 <code>:bug:</code></li>
<li>🐝 <code>:honeybee:</code></li>
<li>🐜 <code>:ant:</code></li>
<li>🪲 <code>:beetle:</code></li>
<li>🐌 <code>:snail:</code></li>
<li>🐙 <code>:octopus:</code></li>
<li>🐠 <code>:tropical_fish:</code></li>
<li>🐟 <code>:fish:</code></li>
<li>🐳 <code>:whale:</code></li>
<li>🐋 <code>:whale2:</code></li>
<li>🐬 <code>:dolphin:</code></li>
<li>🐄 <code>:cow2:</code></li>
<li>🐏 <code>:ram:</code></li>
<li>🐀 <code>:rat:</code></li>
<li>🐃 <code>:water_buffalo:</code></li>
<li>🐅 <code>:tiger2:</code></li>
<li>🐇 <code>:rabbit2:</code></li>
<li>🐉 <code>:dragon:</code></li>
<li>🐐 <code>:goat:</code></li>
<li>🐓 <code>:rooster:</code></li>
<li>🐕 <code>:dog2:</code></li>
<li>🐖 <code>:pig2:</code></li>
<li>🐁 <code>:mouse2:</code></li>
<li>🐂 <code>:ox:</code></li>
<li>🐲 <code>:dragon_face:</code></li>
<li>🐡 <code>:blowfish:</code></li>
<li>🐊 <code>:crocodile:</code></li>
<li>🐪 <code>:dromedary_camel:</code></li>
<li>🐆 <code>:leopard:</code></li>
<li>🐈 <code>:cat2:</code></li>
<li>🐩 <code>:poodle:</code></li>
<li>🐾 <code>:paw_prints:</code></li>
<li>💐 <code>:bouquet:</code></li>
<li>🌸 <code>:cherry_blossom:</code></li>
<li>🌷 <code>:tulip:</code></li>
<li>🍀 <code>:four_leaf_clover:</code></li>
<li>🌹 <code>:rose:</code></li>
<li>🌻 <code>:sunflower:</code></li>
<li>🌺 <code>:hibiscus:</code></li>
<li>🍁 <code>:maple_leaf:</code></li>
<li>🍃 <code>:leaves:</code></li>
<li>🍂 <code>:fallen_leaf:</code></li>
<li>🌿 <code>:herb:</code></li>
<li>🍄 <code>:mushroom:</code></li>
<li>🌵 <code>:cactus:</code></li>
<li>🌴 <code>:palm_tree:</code></li>
<li>🌲 <code>:evergreen_tree:</code></li>
<li>🌳 <code>:deciduous_tree:</code></li>
<li>🌰 <code>:chestnut:</code></li>
<li>🌱 <code>:seedling:</code></li>
<li>🌼 <code>:blossom:</code></li>
<li>🌾 <code>:ear_of_rice:</code></li>
<li>🐚 <code>:shell:</code></li>
<li>🌐 <code>:globe_with_meridians:</code></li>
<li>🌞 <code>:sun_with_face:</code></li>
<li>🌝 <code>:full_moon_with_face:</code></li>
<li>🌚 <code>:new_moon_with_face:</code></li>
<li>🌑 <code>:new_moon:</code></li>
<li>🌒 <code>:waxing_crescent_moon:</code></li>
<li>🌓 <code>:first_quarter_moon:</code></li>
<li>🌔 <code>:waxing_gibbous_moon:</code></li>
<li>🌕 <code>:full_moon:</code></li>
<li>🌖 <code>:waning_gibbous_moon:</code></li>
<li>🌗 <code>:last_quarter_moon:</code></li>
<li>🌘 <code>:waning_crescent_moon:</code></li>
<li>🌜 <code>:last_quarter_moon_with_face:</code></li>
<li>🌛 <code>:first_quarter_moon_with_face:</code></li>
<li>🌙 <code>:crescent_moon:</code></li>
<li>🌍 <code>:earth_africa:</code></li>
<li>🌎 <code>:earth_americas:</code></li>
<li>🌏 <code>:earth_asia:</code></li>
<li>🌋 <code>:volcano:</code></li>
<li>🌌 <code>:milky_way:</code></li>
<li>⛅ <code>:partly_sunny:</code></li>
</ul>`,readingTime:{minutes:.82,words:245},title:"自然 Emoji",icon:"twemoji:deciduous-tree",type:"article"}}],["/tip/markdown/emoji/object.html",{loader:()=>f(()=>import("./object.html-DEmXnPv3.js"),[]),meta:{date:16781472e5,category:["使用指南"],tag:["Markdown"],excerpt:`<ul>
<li>🎍 <code>:bamboo:</code></li>
<li>💝 <code>:gift_heart:</code></li>
<li>🎎 <code>:dolls:</code></li>
<li>🎒 <code>:school_satchel:</code></li>
<li>🎓 <code>:mortar_board:</code></li>
<li>🎏 <code>:flags:</code></li>
<li>🎆 <code>:fireworks:</code></li>
<li>🎇 <code>:sparkler:</code></li>
<li>🎐 <code>:wind_chime:</code></li>
<li>🎑 <code>:rice_scene:</code></li>
<li>🎃 <code>:jack_o_lantern:</code></li>
<li>👻 <code>:ghost:</code></li>
<li>🎅 <code>:santa:</code></li>
<li>🎄 <code>:christmas_tree:</code></li>
<li>🎁 <code>:gift:</code></li>
<li>🔔 <code>:bell:</code></li>
<li>🔕 <code>:no_bell:</code></li>
<li>🎋 <code>:tanabata_tree:</code></li>
<li>🎉 <code>:tada:</code></li>
<li>🎊 <code>:confetti_ball:</code></li>
<li>🎈 <code>:balloon:</code></li>
<li>🔮 <code>:crystal_ball:</code></li>
<li>💿 <code>:cd:</code></li>
<li>📀 <code>:dvd:</code></li>
<li>💾 <code>:floppy_disk:</code></li>
<li>📷 <code>:camera:</code></li>
<li>📹 <code>:video_camera:</code></li>
<li>🎥 <code>:movie_camera:</code></li>
<li>💻 <code>:computer:</code></li>
<li>📺 <code>:tv:</code></li>
<li>📱 <code>:iphone:</code></li>
<li>☎️ <code>:phone:</code></li>
<li>☎️ <code>:telephone:</code></li>
<li>📞 <code>:telephone_receiver:</code></li>
<li>📟 <code>:pager:</code></li>
<li>📠 <code>:fax:</code></li>
<li>💽 <code>:minidisc:</code></li>
<li>📼 <code>:vhs:</code></li>
<li>🔉 <code>:sound:</code></li>
<li>🔈 <code>:speaker:</code></li>
<li>🔇 <code>:mute:</code></li>
<li>📢 <code>:loudspeaker:</code></li>
<li>📣 <code>:mega:</code></li>
<li>⌛ <code>:hourglass:</code></li>
<li>⏳ <code>:hourglass_flowing_sand:</code></li>
<li>⏰ <code>:alarm_clock:</code></li>
<li>⌚ <code>:watch:</code></li>
<li>📻 <code>:radio:</code></li>
<li>📡 <code>:satellite:</code></li>
<li>➿ <code>:loop:</code></li>
<li>🔍 <code>:mag:</code></li>
<li>🔎 <code>:mag_right:</code></li>
<li>🔓 <code>:unlock:</code></li>
<li>🔒 <code>:lock:</code></li>
<li>🔏 <code>:lock_with_ink_pen:</code></li>
<li>🔐 <code>:closed_lock_with_key:</code></li>
<li>🔑 <code>:key:</code></li>
<li>💡 <code>:bulb:</code></li>
<li>🔦 <code>:flashlight:</code></li>
<li>🔆 <code>:high_brightness:</code></li>
<li>🔅 <code>:low_brightness:</code></li>
<li>🔌 <code>:electric_plug:</code></li>
<li>🔋 <code>:battery:</code></li>
<li>📲 <code>:calling:</code></li>
<li>📧 <code>:email:</code></li>
<li>📫 <code>:mailbox:</code></li>
<li>📮 <code>:postbox:</code></li>
<li>🛀 <code>:bath:</code></li>
<li>🛁 <code>:bathtub:</code></li>
<li>🚿 <code>:shower:</code></li>
<li>🚽 <code>:toilet:</code></li>
<li>🔧 <code>:wrench:</code></li>
<li>🔩 <code>:nut_and_bolt:</code></li>
<li>🔨 <code>:hammer:</code></li>
<li>💺 <code>:seat:</code></li>
<li>💰 <code>:moneybag:</code></li>
<li>💴 <code>:yen:</code></li>
<li>💵 <code>:dollar:</code></li>
<li>💷 <code>:pound:</code></li>
<li>💶 <code>:euro:</code></li>
<li>💳 <code>:credit_card:</code></li>
<li>💸 <code>:money_with_wings:</code></li>
<li>📧 <code>:e-mail:</code></li>
<li>📥 <code>:inbox_tray:</code></li>
<li>📤 <code>:outbox_tray:</code></li>
<li>✉️ <code>:envelope:</code></li>
<li>📨 <code>:incoming_envelope:</code></li>
<li>📯 <code>:postal_horn:</code></li>
<li>📪 <code>:mailbox_closed:</code></li>
<li>📬 <code>:mailbox_with_mail:</code></li>
<li>📭 <code>:mailbox_with_no_mail:</code></li>
<li>📦 <code>:package:</code></li>
<li>🚪 <code>:door:</code></li>
<li>🚬 <code>:smoking:</code></li>
<li>💣 <code>:bomb:</code></li>
<li>🔫 <code>:gun:</code></li>
<li>🔪 <code>:hocho:</code></li>
<li>💊 <code>:pill:</code></li>
<li>💉 <code>:syringe:</code></li>
<li>📄 <code>:page_facing_up:</code></li>
<li>📃 <code>:page_with_curl:</code></li>
<li>📑 <code>:bookmark_tabs:</code></li>
<li>📊 <code>:bar_chart:</code></li>
<li>📈 <code>:chart_with_upwards_trend:</code></li>
<li>📉 <code>:chart_with_downwards_trend:</code></li>
<li>📜 <code>:scroll:</code></li>
<li>📋 <code>:clipboard:</code></li>
<li>📆 <code>:calendar:</code></li>
<li>📅 <code>:date:</code></li>
<li>📇 <code>:card_index:</code></li>
<li>📁 <code>:file_folder:</code></li>
<li>📂 <code>:open_file_folder:</code></li>
<li>✂️ <code>:scissors:</code></li>
<li>📌 <code>:pushpin:</code></li>
<li>📎 <code>:paperclip:</code></li>
<li>✒️ <code>:black_nib:</code></li>
<li>✏️ <code>:pencil2:</code></li>
<li>📏 <code>:straight_ruler:</code></li>
<li>📐 <code>:triangular_ruler:</code></li>
<li>📕 <code>:closed_book:</code></li>
<li>📗 <code>:green_book:</code></li>
<li>📘 <code>:blue_book:</code></li>
<li>📙 <code>:orange_book:</code></li>
<li>📓 <code>:notebook:</code></li>
<li>📔 <code>:notebook_with_decorative_cover:</code></li>
<li>📒 <code>:ledger:</code></li>
<li>📚 <code>:books:</code></li>
<li>🔖 <code>:bookmark:</code></li>
<li>📛 <code>:name_badge:</code></li>
<li>🔬 <code>:microscope:</code></li>
<li>🔭 <code>:telescope:</code></li>
<li>📰 <code>:newspaper:</code></li>
<li>🏈 <code>:football:</code></li>
<li>🏀 <code>:basketball:</code></li>
<li>⚽ <code>:soccer:</code></li>
<li>⚾ <code>:baseball:</code></li>
<li>🎾 <code>:tennis:</code></li>
<li>🎱 <code>:8ball:</code></li>
<li>🏉 <code>:rugby_football:</code></li>
<li>🎳 <code>:bowling:</code></li>
<li>⛳ <code>:golf:</code></li>
<li>🚵 <code>:mountain_bicyclist:</code></li>
<li>🚴 <code>:bicyclist:</code></li>
<li>🏇 <code>:horse_racing:</code></li>
<li>🏂 <code>:snowboarder:</code></li>
<li>🏊 <code>:swimmer:</code></li>
<li>🏄 <code>:surfer:</code></li>
<li>🎿 <code>:ski:</code></li>
<li>♠️ <code>:spades:</code></li>
<li>♥️ <code>:hearts:</code></li>
<li>♣️ <code>:clubs:</code></li>
<li>♦️ <code>:diamonds:</code></li>
<li>💎 <code>:gem:</code></li>
<li>💍 <code>:ring:</code></li>
<li>🏆 <code>:trophy:</code></li>
<li>🎼 <code>:musical_score:</code></li>
<li>🎹 <code>:musical_keyboard:</code></li>
<li>🎻 <code>:violin:</code></li>
<li>👾 <code>:space_invader:</code></li>
<li>🎮 <code>:video_game:</code></li>
<li>🃏 <code>:black_joker:</code></li>
<li>🎴 <code>:flower_playing_cards:</code></li>
<li>🎲 <code>:game_die:</code></li>
<li>🎯 <code>:dart:</code></li>
<li>🀄 <code>:mahjong:</code></li>
<li>🎬 <code>:clapper:</code></li>
<li>📝 <code>:memo:</code></li>
<li>📝 <code>:pencil:</code></li>
<li>📖 <code>:book:</code></li>
<li>🎨 <code>:art:</code></li>
<li>🎤 <code>:microphone:</code></li>
<li>🎧 <code>:headphones:</code></li>
<li>🎺 <code>:trumpet:</code></li>
<li>🎷 <code>:saxophone:</code></li>
<li>🎸 <code>:guitar:</code></li>
<li>👞 <code>:shoe:</code></li>
<li>👡 <code>:sandal:</code></li>
<li>👠 <code>:high_heel:</code></li>
<li>💄 <code>:lipstick:</code></li>
<li>👢 <code>:boot:</code></li>
<li>👕 <code>:shirt:</code></li>
<li>👕 <code>:tshirt:</code></li>
<li>👔 <code>:necktie:</code></li>
<li>👚 <code>:womans_clothes:</code></li>
<li>👗 <code>:dress:</code></li>
<li>🎽 <code>:running_shirt_with_sash:</code></li>
<li>👖 <code>:jeans:</code></li>
<li>👘 <code>:kimono:</code></li>
<li>👙 <code>:bikini:</code></li>
<li>🎀 <code>:ribbon:</code></li>
<li>🎩 <code>:tophat:</code></li>
<li>👑 <code>:crown:</code></li>
<li>👒 <code>:womans_hat:</code></li>
<li>👞 <code>:mans_shoe:</code></li>
<li>🌂 <code>:closed_umbrella:</code></li>
<li>💼 <code>:briefcase:</code></li>
<li>👜 <code>:handbag:</code></li>
<li>👝 <code>:pouch:</code></li>
<li>👛 <code>:purse:</code></li>
<li>👓 <code>:eyeglasses:</code></li>
<li>🎣 <code>:fishing_pole_and_fish:</code></li>
<li>☕ <code>:coffee:</code></li>
<li>🍵 <code>:tea:</code></li>
<li>🍶 <code>:sake:</code></li>
<li>🍼 <code>:baby_bottle:</code></li>
<li>🍺 <code>:beer:</code></li>
<li>🍻 <code>:beers:</code></li>
<li>🍸 <code>:cocktail:</code></li>
<li>🍹 <code>:tropical_drink:</code></li>
<li>🍷 <code>:wine_glass:</code></li>
<li>🍴 <code>:fork_and_knife:</code></li>
<li>🍕 <code>:pizza:</code></li>
<li>🍔 <code>:hamburger:</code></li>
<li>🍟 <code>:fries:</code></li>
<li>🍗 <code>:poultry_leg:</code></li>
<li>🍖 <code>:meat_on_bone:</code></li>
<li>🍝 <code>:spaghetti:</code></li>
<li>🍛 <code>:curry:</code></li>
<li>🍤 <code>:fried_shrimp:</code></li>
<li>🍱 <code>:bento:</code></li>
<li>🍣 <code>:sushi:</code></li>
<li>🍥 <code>:fish_cake:</code></li>
<li>🍙 <code>:rice_ball:</code></li>
<li>🍘 <code>:rice_cracker:</code></li>
<li>🍚 <code>:rice:</code></li>
<li>🍜 <code>:ramen:</code></li>
<li>🍲 <code>:stew:</code></li>
<li>🍢 <code>:oden:</code></li>
<li>🍡 <code>:dango:</code></li>
<li>🥚 <code>:egg:</code></li>
<li>🍞 <code>:bread:</code></li>
<li>🍩 <code>:doughnut:</code></li>
<li>🍮 <code>:custard:</code></li>
<li>🍦 <code>:icecream:</code></li>
<li>🍨 <code>:ice_cream:</code></li>
<li>🍧 <code>:shaved_ice:</code></li>
<li>🎂 <code>:birthday:</code></li>
<li>🍰 <code>:cake:</code></li>
<li>🍪 <code>:cookie:</code></li>
<li>🍫 <code>:chocolate_bar:</code></li>
<li>🍬 <code>:candy:</code></li>
<li>🍭 <code>:lollipop:</code></li>
<li>🍯 <code>:honey_pot:</code></li>
<li>🍎 <code>:apple:</code></li>
<li>🍏 <code>:green_apple:</code></li>
<li>🍊 <code>:tangerine:</code></li>
<li>🍋 <code>:lemon:</code></li>
<li>🍒 <code>:cherries:</code></li>
<li>🍇 <code>:grapes:</code></li>
<li>🍉 <code>:watermelon:</code></li>
<li>🍓 <code>:strawberry:</code></li>
<li>🍑 <code>:peach:</code></li>
<li>🍈 <code>:melon:</code></li>
<li>🍌 <code>:banana:</code></li>
<li>🍐 <code>:pear:</code></li>
<li>🍍 <code>:pineapple:</code></li>
<li>🍠 <code>:sweet_potato:</code></li>
<li>🍆 <code>:eggplant:</code></li>
<li>🍅 <code>:tomato:</code></li>
<li>🌽 <code>:corn:</code></li>
</ul>`,readingTime:{minutes:1.8,words:540},title:"对象 Emoji",icon:"twemoji:ewe",type:"article"}}],["/tip/markdown/emoji/people.html",{loader:()=>f(()=>import("./people.html-D3vObS4m.js"),[]),meta:{date:16781472e5,category:["使用指南"],tag:["Markdown"],excerpt:`<ul>
<li>😄 <code>:smile:</code></li>
<li>😆 <code>:laughing:</code></li>
<li>😊 <code>:blush:</code></li>
<li>😃 <code>:smiley:</code></li>
<li>😏 <code>:smirk:</code></li>
<li>😍 <code>:heart_eyes:</code></li>
<li>😘 <code>:kissing_heart:</code></li>
<li>😚 <code>:kissing_closed_eyes:</code></li>
<li>😳 <code>:flushed:</code></li>
<li>😌 <code>:relieved:</code></li>
<li>😆 <code>:satisfied:</code></li>
<li>😁 <code>:grin:</code></li>
<li>😉 <code>:wink:</code></li>
<li>😜 <code>:stuck_out_tongue_winking_eye:</code></li>
<li>😝 <code>:stuck_out_tongue_closed_eyes:</code></li>
<li>😀 <code>:grinning:</code></li>
<li>😗 <code>:kissing:</code></li>
<li>😙 <code>:kissing_smiling_eyes:</code></li>
<li>😛 <code>:stuck_out_tongue:</code></li>
<li>😴 <code>:sleeping:</code></li>
<li>😟 <code>:worried:</code></li>
<li>😦 <code>:frowning:</code></li>
<li>😧 <code>:anguished:</code></li>
<li>😮 <code>:open_mouth:</code></li>
<li>😬 <code>:grimacing:</code></li>
<li>😕 <code>:confused:</code></li>
<li>😯 <code>:hushed:</code></li>
<li>😑 <code>:expressionless:</code></li>
<li>😒 <code>:unamused:</code></li>
<li>😅 <code>:sweat_smile:</code></li>
<li>😓 <code>:sweat:</code></li>
<li>😥 <code>:disappointed_relieved:</code></li>
<li>😩 <code>:weary:</code></li>
<li>😔 <code>:pensive:</code></li>
<li>😞 <code>:disappointed:</code></li>
<li>😖 <code>:confounded:</code></li>
<li>😨 <code>:fearful:</code></li>
<li>😰 <code>:cold_sweat:</code></li>
<li>😣 <code>:persevere:</code></li>
<li>😢 <code>:cry:</code></li>
<li>😭 <code>:sob:</code></li>
<li>😂 <code>:joy:</code></li>
<li>😲 <code>:astonished:</code></li>
<li>😱 <code>:scream:</code></li>
<li>😫 <code>:tired_face:</code></li>
<li>😠 <code>:angry:</code></li>
<li>😡 <code>:rage:</code></li>
<li>😤 <code>:triumph:</code></li>
<li>😪 <code>:sleepy:</code></li>
<li>😋 <code>:yum:</code></li>
<li>😷 <code>:mask:</code></li>
<li>😎 <code>:sunglasses:</code></li>
<li>😵 <code>:dizzy_face:</code></li>
<li>👿 <code>:imp:</code></li>
<li>😈 <code>:smiling_imp:</code></li>
<li>😐 <code>:neutral_face:</code></li>
<li>😶 <code>:no_mouth:</code></li>
<li>😇 <code>:innocent:</code></li>
<li>👽 <code>:alien:</code></li>
<li>💛 <code>:yellow_heart:</code></li>
<li>💙 <code>:blue_heart:</code></li>
<li>💜 <code>:purple_heart:</code></li>
<li>❤️ <code>:heart:</code></li>
<li>💚 <code>:green_heart:</code></li>
<li>💔 <code>:broken_heart:</code></li>
<li>💓 <code>:heartbeat:</code></li>
<li>💗 <code>:heartpulse:</code></li>
<li>💕 <code>:two_hearts:</code></li>
<li>💞 <code>:revolving_hearts:</code></li>
<li>💘 <code>:cupid:</code></li>
<li>💖 <code>:sparkling_heart:</code></li>
<li>✨ <code>:sparkles:</code></li>
<li>⭐ <code>:star:</code></li>
<li>🌟 <code>:star2:</code></li>
<li>💫 <code>:dizzy:</code></li>
<li>💥 <code>:boom:</code></li>
<li>💥 <code>:collision:</code></li>
<li>💢 <code>:anger:</code></li>
<li>❗ <code>:exclamation:</code></li>
<li>❓ <code>:question:</code></li>
<li>❕ <code>:grey_exclamation:</code></li>
<li>❔ <code>:grey_question:</code></li>
<li>💤 <code>:zzz:</code></li>
<li>💨 <code>:dash:</code></li>
<li>💦 <code>:sweat_drops:</code></li>
<li>🎶 <code>:notes:</code></li>
<li>🎵 <code>:musical_note:</code></li>
<li>🔥 <code>:fire:</code></li>
<li>💩 <code>:hankey:</code></li>
<li>💩 <code>:poop:</code></li>
<li>💩 <code>:shit:</code></li>
<li>👍 <code>:+1:</code></li>
<li>👍 <code>:thumbsup:</code></li>
<li>👎 <code>:-1:</code></li>
<li>👎 <code>:thumbsdown:</code></li>
<li>👌 <code>:ok_hand:</code></li>
<li>👊 <code>:punch:</code></li>
<li>👊 <code>:facepunch:</code></li>
<li>✊ <code>:fist:</code></li>
<li>✌️ <code>:v:</code></li>
<li>👋 <code>:wave:</code></li>
<li>✋ <code>:hand:</code></li>
<li>✋ <code>:raised_hand:</code></li>
<li>👐 <code>:open_hands:</code></li>
<li>☝️ <code>:point_up:</code></li>
<li>👇 <code>:point_down:</code></li>
<li>👈 <code>:point_left:</code></li>
<li>👉 <code>:point_right:</code></li>
<li>🙌 <code>:raised_hands:</code></li>
<li>🙏 <code>:pray:</code></li>
<li>👆 <code>:point_up_2:</code></li>
<li>👏 <code>:clap:</code></li>
<li>💪 <code>:muscle:</code></li>
<li>🤘 <code>:metal:</code></li>
<li>🖕 <code>:fu:</code></li>
<li>🏃 <code>:runner:</code></li>
<li>🏃 <code>:running:</code></li>
<li>👫 <code>:couple:</code></li>
<li>👪 <code>:family:</code></li>
<li>👬 <code>:two_men_holding_hands:</code></li>
<li>👭 <code>:two_women_holding_hands:</code></li>
<li>💃 <code>:dancer:</code></li>
<li>👯 <code>:dancers:</code></li>
<li>🙆‍♀️ <code>:ok_woman:</code></li>
<li>🙅 <code>:no_good:</code></li>
<li>💁 <code>:information_desk_person:</code></li>
<li>🙋 <code>:raising_hand:</code></li>
<li>👰‍♀️ <code>:bride_with_veil:</code></li>
<li>:person_with_pouting_face: <code>:person_with_pouting_face:</code></li>
<li>:person_frowning: <code>:person_frowning:</code></li>
<li>🙇 <code>:bow:</code></li>
<li>💑 <code>:couple_with_heart:</code></li>
<li>💆 <code>:massage:</code></li>
<li>💇 <code>:haircut:</code></li>
<li>💅 <code>:nail_care:</code></li>
<li>👦 <code>:boy:</code></li>
<li>👧 <code>:girl:</code></li>
<li>👩 <code>:woman:</code></li>
<li>👨 <code>:man:</code></li>
<li>👶 <code>:baby:</code></li>
<li>👵 <code>:older_woman:</code></li>
<li>👴 <code>:older_man:</code></li>
<li>:person_with_blond_hair: <code>:person_with_blond_hair:</code></li>
<li>👲 <code>:man_with_gua_pi_mao:</code></li>
<li>👳‍♂️ <code>:man_with_turban:</code></li>
<li>👷 <code>:construction_worker:</code></li>
<li>👮 <code>:cop:</code></li>
<li>👼 <code>:angel:</code></li>
<li>👸 <code>:princess:</code></li>
<li>😺 <code>:smiley_cat:</code></li>
<li>😸 <code>:smile_cat:</code></li>
<li>😻 <code>:heart_eyes_cat:</code></li>
<li>😽 <code>:kissing_cat:</code></li>
<li>😼 <code>:smirk_cat:</code></li>
<li>🙀 <code>:scream_cat:</code></li>
<li>😿 <code>:crying_cat_face:</code></li>
<li>😹 <code>:joy_cat:</code></li>
<li>😾 <code>:pouting_cat:</code></li>
<li>👹 <code>:japanese_ogre:</code></li>
<li>👺 <code>:japanese_goblin:</code></li>
<li>🙈 <code>:see_no_evil:</code></li>
<li>🙉 <code>:hear_no_evil:</code></li>
<li>🙊 <code>:speak_no_evil:</code></li>
<li>💂‍♂️ <code>:guardsman:</code></li>
<li>💀 <code>:skull:</code></li>
<li>🐾 <code>:feet:</code></li>
<li>👄 <code>:lips:</code></li>
<li>💋 <code>:kiss:</code></li>
<li>💧 <code>:droplet:</code></li>
<li>👂 <code>:ear:</code></li>
<li>👀 <code>:eyes:</code></li>
<li>👃 <code>:nose:</code></li>
<li>👅 <code>:tongue:</code></li>
<li>💌 <code>:love_letter:</code></li>
<li>👤 <code>:bust_in_silhouette:</code></li>
<li>👥 <code>:busts_in_silhouette:</code></li>
<li>💬 <code>:speech_balloon:</code></li>
<li>💭 <code>:thought_balloon:</code></li>
</ul>`,readingTime:{minutes:1.26,words:377},title:"人物 Emoji",icon:"twemoji:astronaut-light-skin-tone",type:"article"}}],["/tip/markdown/emoji/place.html",{loader:()=>f(()=>import("./place.html-CNrQypGB.js"),[]),meta:{date:16781472e5,category:["使用指南"],tag:["Markdown"],excerpt:`<ul>
<li>🏠 <code>:house:</code></li>
<li>🏡 <code>:house_with_garden:</code></li>
<li>🏫 <code>:school:</code></li>
<li>🏢 <code>:office:</code></li>
<li>🏣 <code>:post_office:</code></li>
<li>🏥 <code>:hospital:</code></li>
<li>🏦 <code>:bank:</code></li>
<li>🏪 <code>:convenience_store:</code></li>
<li>🏩 <code>:love_hotel:</code></li>
<li>🏨 <code>:hotel:</code></li>
<li>💒 <code>:wedding:</code></li>
<li>⛪ <code>:church:</code></li>
<li>🏬 <code>:department_store:</code></li>
<li>🏤 <code>:european_post_office:</code></li>
<li>🌇 <code>:city_sunrise:</code></li>
<li>🌆 <code>:city_sunset:</code></li>
<li>🏯 <code>:japanese_castle:</code></li>
<li>🏰 <code>:european_castle:</code></li>
<li>⛺ <code>:tent:</code></li>
<li>🏭 <code>:factory:</code></li>
<li>🗼 <code>:tokyo_tower:</code></li>
<li>🗾 <code>:japan:</code></li>
<li>🗻 <code>:mount_fuji:</code></li>
<li>🌄 <code>:sunrise_over_mountains:</code></li>
<li>🌅 <code>:sunrise:</code></li>
<li>🌠 <code>:stars:</code></li>
<li>🗽 <code>:statue_of_liberty:</code></li>
<li>🌉 <code>:bridge_at_night:</code></li>
<li>🎠 <code>:carousel_horse:</code></li>
<li>🌈 <code>:rainbow:</code></li>
<li>🎡 <code>:ferris_wheel:</code></li>
<li>⛲ <code>:fountain:</code></li>
<li>🎢 <code>:roller_coaster:</code></li>
<li>🚢 <code>:ship:</code></li>
<li>🚤 <code>:speedboat:</code></li>
<li>⛵ <code>:boat:</code></li>
<li>⛵ <code>:sailboat:</code></li>
<li>🚣 <code>:rowboat:</code></li>
<li>⚓ <code>:anchor:</code></li>
<li>🚀 <code>:rocket:</code></li>
<li>✈️ <code>:airplane:</code></li>
<li>🚁 <code>:helicopter:</code></li>
<li>🚂 <code>:steam_locomotive:</code></li>
<li>🚊 <code>:tram:</code></li>
<li>🚞 <code>:mountain_railway:</code></li>
<li>🚲 <code>:bike:</code></li>
<li>🚡 <code>:aerial_tramway:</code></li>
<li>🚟 <code>:suspension_railway:</code></li>
<li>🚠 <code>:mountain_cableway:</code></li>
<li>🚜 <code>:tractor:</code></li>
<li>🚙 <code>:blue_car:</code></li>
<li>🚘 <code>:oncoming_automobile:</code></li>
<li>🚗 <code>:car:</code></li>
<li>🚗 <code>:red_car:</code></li>
<li>🚕 <code>:taxi:</code></li>
<li>🚖 <code>:oncoming_taxi:</code></li>
<li>🚛 <code>:articulated_lorry:</code></li>
<li>🚌 <code>:bus:</code></li>
<li>🚍 <code>:oncoming_bus:</code></li>
<li>🚨 <code>:rotating_light:</code></li>
<li>🚓 <code>:police_car:</code></li>
<li>🚔 <code>:oncoming_police_car:</code></li>
<li>🚒 <code>:fire_engine:</code></li>
<li>🚑 <code>:ambulance:</code></li>
<li>🚐 <code>:minibus:</code></li>
<li>🚚 <code>:truck:</code></li>
<li>🚋 <code>:train:</code></li>
<li>🚉 <code>:station:</code></li>
<li>🚆 <code>:train2:</code></li>
<li>🚅 <code>:bullettrain_front:</code></li>
<li>🚄 <code>:bullettrain_side:</code></li>
<li>🚈 <code>:light_rail:</code></li>
<li>🚝 <code>:monorail:</code></li>
<li>🚃 <code>:railway_car:</code></li>
<li>🚎 <code>:trolleybus:</code></li>
<li>🎫 <code>:ticket:</code></li>
<li>⛽ <code>:fuelpump:</code></li>
<li>🚦 <code>:vertical_traffic_light:</code></li>
<li>🚥 <code>:traffic_light:</code></li>
<li>⚠️ <code>:warning:</code></li>
<li>🚧 <code>:construction:</code></li>
<li>🔰 <code>:beginner:</code></li>
<li>🏧 <code>:atm:</code></li>
<li>🎰 <code>:slot_machine:</code></li>
<li>🚏 <code>:busstop:</code></li>
<li>💈 <code>:barber:</code></li>
<li>♨️ <code>:hotsprings:</code></li>
<li>🏁 <code>:checkered_flag:</code></li>
<li>🎌 <code>:crossed_flags:</code></li>
<li>🏮 <code>:izakaya_lantern:</code></li>
<li>🗿 <code>:moyai:</code></li>
<li>🎪 <code>:circus_tent:</code></li>
<li>🎭 <code>:performing_arts:</code></li>
<li>📍 <code>:round_pushpin:</code></li>
<li>🚩 <code>:triangular_flag_on_post:</code></li>
</ul>`,readingTime:{minutes:.7,words:210},title:"地点 Emoji",icon:"twemoji:house-with-garden",type:"article"}}],["/tip/markdown/emoji/",{loader:()=>f(()=>import("./index.html-CRb_b4lt.js"),[]),meta:{title:"Emoji 列表",icon:"mdi:emoji",order:3}}],["/tip/markdown/emoji/symbol.html",{loader:()=>f(()=>import("./symbol.html-1MdS7gyN.js"),[]),meta:{date:16781472e5,category:["使用指南"],tag:["Markdown"],excerpt:`<ul>
<li>1️⃣ <code>:one:</code></li>
<li>2️⃣ <code>:two:</code></li>
<li>3️⃣ <code>:three:</code></li>
<li>4️⃣ <code>:four:</code></li>
<li>5️⃣ <code>:five:</code></li>
<li>6️⃣ <code>:six:</code></li>
<li>7️⃣ <code>:seven:</code></li>
<li>8️⃣ <code>:eight:</code></li>
<li>9️⃣ <code>:nine:</code></li>
<li>🔟 <code>:keycap_ten:</code></li>
<li>🔢 <code>:1234:</code></li>
<li>0️⃣ <code>:zero:</code></li>
<li>#️⃣ <code>:hash:</code></li>
<li>🔣 <code>:symbols:</code></li>
<li>◀️ <code>:arrow_backward:</code></li>
<li>⬇️ <code>:arrow_down:</code></li>
<li>▶️ <code>:arrow_forward:</code></li>
<li>⬅️ <code>:arrow_left:</code></li>
<li>🔠 <code>:capital_abcd:</code></li>
<li>🔡 <code>:abcd:</code></li>
<li>🔤 <code>:abc:</code></li>
<li>↙️ <code>:arrow_lower_left:</code></li>
<li>↘️ <code>:arrow_lower_right:</code></li>
<li>➡️ <code>:arrow_right:</code></li>
<li>⬆️ <code>:arrow_up:</code></li>
<li>↖️ <code>:arrow_upper_left:</code></li>
<li>↗️ <code>:arrow_upper_right:</code></li>
<li>⏬ <code>:arrow_double_down:</code></li>
<li>⏫ <code>:arrow_double_up:</code></li>
<li>🔽 <code>:arrow_down_small:</code></li>
<li>⤵️ <code>:arrow_heading_down:</code></li>
<li>⤴️ <code>:arrow_heading_up:</code></li>
<li>↩️ <code>:leftwards_arrow_with_hook:</code></li>
<li>↪️ <code>:arrow_right_hook:</code></li>
<li>↔️ <code>:left_right_arrow:</code></li>
<li>↕️ <code>:arrow_up_down:</code></li>
<li>🔼 <code>:arrow_up_small:</code></li>
<li>🔃 <code>:arrows_clockwise:</code></li>
<li>🔄 <code>:arrows_counterclockwise:</code></li>
<li>⏪ <code>:rewind:</code></li>
<li>⏩ <code>:fast_forward:</code></li>
<li>ℹ️ <code>:information_source:</code></li>
<li>🆗 <code>:ok:</code></li>
<li>🔀 <code>:twisted_rightwards_arrows:</code></li>
<li>🔁 <code>:repeat:</code></li>
<li>🔂 <code>:repeat_one:</code></li>
<li>🆕 <code>:new:</code></li>
<li>🔝 <code>:top:</code></li>
<li>🆙 <code>:up:</code></li>
<li>🆒 <code>:cool:</code></li>
<li>🆓 <code>:free:</code></li>
<li>🆖 <code>:ng:</code></li>
<li>🎦 <code>:cinema:</code></li>
<li>🈁 <code>:koko:</code></li>
<li>📶 <code>:signal_strength:</code></li>
<li>🈂️ <code>:sa:</code></li>
<li>🚻 <code>:restroom:</code></li>
<li>🚹 <code>:mens:</code></li>
<li>🚺 <code>:womens:</code></li>
<li>🚼 <code>:baby_symbol:</code></li>
<li>🚭 <code>:no_smoking:</code></li>
<li>🅿️ <code>:parking:</code></li>
<li>♿ <code>:wheelchair:</code></li>
<li>🚇 <code>:metro:</code></li>
<li>🛄 <code>:baggage_claim:</code></li>
<li>🉑 <code>:accept:</code></li>
<li>🚾 <code>:wc:</code></li>
<li>🚰 <code>:potable_water:</code></li>
<li>🚮 <code>:put_litter_in_its_place:</code></li>
<li>㊙️ <code>:secret:</code></li>
<li>㊗️ <code>:congratulations:</code></li>
<li>Ⓜ️ <code>:m:</code></li>
<li>🛂 <code>:passport_control:</code></li>
<li>🛅 <code>:left_luggage:</code></li>
<li>🛃 <code>:customs:</code></li>
<li>🉐 <code>:ideograph_advantage:</code></li>
<li>🆑 <code>:cl:</code></li>
<li>🆘 <code>:sos:</code></li>
<li>🆔 <code>:id:</code></li>
<li>🚫 <code>:no_entry_sign:</code></li>
<li>🔞 <code>:underage:</code></li>
<li>📵 <code>:no_mobile_phones:</code></li>
<li>🚯 <code>:do_not_litter:</code></li>
<li>🚱 <code>:non-potable_water:</code></li>
<li>🚳 <code>:no_bicycles:</code></li>
<li>🚷 <code>:no_pedestrians:</code></li>
<li>🚸 <code>:children_crossing:</code></li>
<li>⛔ <code>:no_entry:</code></li>
<li>✳️ <code>:eight_spoked_asterisk:</code></li>
<li>❇️ <code>:sparkle:</code></li>
<li>✴️ <code>:eight_pointed_black_star:</code></li>
<li>💟 <code>:heart_decoration:</code></li>
<li>🆚 <code>:vs:</code></li>
<li>📳 <code>:vibration_mode:</code></li>
<li>📴 <code>:mobile_phone_off:</code></li>
<li>💹 <code>:chart:</code></li>
<li>💱 <code>:currency_exchange:</code></li>
<li>♈ <code>:aries:</code></li>
<li>♉ <code>:taurus:</code></li>
<li>♊ <code>:gemini:</code></li>
<li>♋ <code>:cancer:</code></li>
<li>♌ <code>:leo:</code></li>
<li>♍ <code>:virgo:</code></li>
<li>♎ <code>:libra:</code></li>
<li>♏ <code>:scorpius:</code></li>
<li>♐ <code>:sagittarius:</code></li>
<li>♑ <code>:capricorn:</code></li>
<li>♒ <code>:aquarius:</code></li>
<li>♓ <code>:pisces:</code></li>
<li>⛎ <code>:ophiuchus:</code></li>
<li>🔯 <code>:six_pointed_star:</code></li>
<li>❎ <code>:negative_squared_cross_mark:</code></li>
<li>🅰️ <code>:a:</code></li>
<li>🅱️ <code>:b:</code></li>
<li>🆎 <code>:ab:</code></li>
<li>🅾️ <code>:o2:</code></li>
<li>💠 <code>:diamond_shape_with_a_dot_inside:</code></li>
<li>♻️ <code>:recycle:</code></li>
<li>🔚 <code>:end:</code></li>
<li>🔙 <code>:back:</code></li>
<li>🔛 <code>:on:</code></li>
<li>🔜 <code>:soon:</code></li>
<li>🕐 <code>:clock1:</code></li>
<li>🕜 <code>:clock130:</code></li>
<li>🕙 <code>:clock10:</code></li>
<li>🕥 <code>:clock1030:</code></li>
<li>🕚 <code>:clock11:</code></li>
<li>🕦 <code>:clock1130:</code></li>
<li>🕛 <code>:clock12:</code></li>
<li>🕧 <code>:clock1230:</code></li>
<li>🕑 <code>:clock2:</code></li>
<li>🕝 <code>:clock230:</code></li>
<li>🕒 <code>:clock3:</code></li>
<li>🕞 <code>:clock330:</code></li>
<li>🕓 <code>:clock4:</code></li>
<li>🕟 <code>:clock430:</code></li>
<li>🕔 <code>:clock5:</code></li>
<li>🕠 <code>:clock530:</code></li>
<li>🕕 <code>:clock6:</code></li>
<li>🕡 <code>:clock630:</code></li>
<li>🕖 <code>:clock7:</code></li>
<li>🕢 <code>:clock730:</code></li>
<li>🕗 <code>:clock8:</code></li>
<li>🕣 <code>:clock830:</code></li>
<li>🕘 <code>:clock9:</code></li>
<li>🕤 <code>:clock930:</code></li>
<li>💲 <code>:heavy_dollar_sign:</code></li>
<li>©️ <code>:copyright:</code></li>
<li>®️ <code>:registered:</code></li>
<li>™️ <code>:tm:</code></li>
<li>❌ <code>:x:</code></li>
<li>❗ <code>:heavy_exclamation_mark:</code></li>
<li>‼️ <code>:bangbang:</code></li>
<li>⁉️ <code>:interrobang:</code></li>
<li>⭕ <code>:o:</code></li>
<li>✖️ <code>:heavy_multiplication_x:</code></li>
<li>➕ <code>:heavy_plus_sign:</code></li>
<li>➖ <code>:heavy_minus_sign:</code></li>
<li>➗ <code>:heavy_division_sign:</code></li>
<li>💮 <code>:white_flower:</code></li>
<li>💯 <code>:100:</code></li>
<li>✔️ <code>:heavy_check_mark:</code></li>
<li>☑️ <code>:ballot_box_with_check:</code></li>
<li>🔘 <code>:radio_button:</code></li>
<li>🔗 <code>:link:</code></li>
<li>➰ <code>:curly_loop:</code></li>
<li>〰️ <code>:wavy_dash:</code></li>
<li>〽️ <code>:part_alternation_mark:</code></li>
<li>🔱 <code>:trident:</code></li>
<li>▪️ <code>:black_small_square:</code></li>
<li>▫️ <code>:white_small_square:</code></li>
<li>◾ <code>:black_medium_small_square:</code></li>
<li>◽ <code>:white_medium_small_square:</code></li>
<li>◼️ <code>:black_medium_square:</code></li>
<li>◻️ <code>:white_medium_square:</code></li>
<li>⬛ <code>:black_large_square:</code></li>
<li>⬜ <code>:white_large_square:</code></li>
<li>✅ <code>:white_check_mark:</code></li>
<li>🔲 <code>:black_square_button:</code></li>
<li>🔳 <code>:white_square_button:</code></li>
<li>⚫ <code>:black_circle:</code></li>
<li>⚪ <code>:white_circle:</code></li>
<li>🔴 <code>:red_circle:</code></li>
<li>🔵 <code>:large_blue_circle:</code></li>
<li>🔷 <code>:large_blue_diamond:</code></li>
<li>🔶 <code>:large_orange_diamond:</code></li>
<li>🔹 <code>:small_blue_diamond:</code></li>
<li>🔸 <code>:small_orange_diamond:</code></li>
<li>🔺 <code>:small_red_triangle:</code></li>
<li>🔻 <code>:small_red_triangle_down:</code></li>
</ul>`,readingTime:{minutes:1.34,words:401},title:"符号 Emoji",icon:"twemoji:recycling-symbol",type:"article"}}],["/java/",{loader:()=>f(()=>import("./index.html-RAyUWPcn.js"),[]),meta:{title:"Java"}}],["/llm/",{loader:()=>f(()=>import("./index.html-Dtz7LwMH.js"),[]),meta:{title:"Llm"}}],["/mysql/",{loader:()=>f(()=>import("./index.html-BaMxc-et.js"),[]),meta:{title:"Mysql"}}],["/offer/",{loader:()=>f(()=>import("./index.html-CYhtijmn.js"),[]),meta:{title:"Offer"}}],["/tmp/",{loader:()=>f(()=>import("./index.html-D5OYIClp.js"),[]),meta:{title:"Tmp"}}],["/web_game/",{loader:()=>f(()=>import("./index.html-rJrQkYrW.js"),[]),meta:{title:"Web Game"}}],["/book/kama-DesignPattern/DesignPattern/",{loader:()=>f(()=>import("./index.html-BrxXXK3G.js"),[]),meta:{title:"Design Pattern"}}],["/category/",{loader:()=>f(()=>import("./index.html-CHpD5-Dd.js"),[]),meta:{title:"分类",index:!1}}],["/category/blog-%E6%8C%87%E5%8D%97/",{loader:()=>f(()=>import("./index.html-BrGBIBXK.js"),[]),meta:{title:"Blog 指南 分类",index:!1}}],["/category/%E5%BC%80%E6%BA%90%E4%B9%A6%E7%B1%8D/",{loader:()=>f(()=>import("./index.html-BoMtrOUp.js"),[]),meta:{title:"开源书籍 分类",index:!1}}],["/category/%E8%AF%BE%E7%A8%8B%E5%A4%8D%E4%B9%A0/",{loader:()=>f(()=>import("./index.html-CxRCe0se.js"),[]),meta:{title:"课程复习 分类",index:!1}}],["/category/%E8%AF%BE%E7%A8%8B%E7%AC%94%E8%AE%B0/",{loader:()=>f(()=>import("./index.html-BHypEX6C.js"),[]),meta:{title:"课程笔记 分类",index:!1}}],["/category/%E5%A4%A9%E5%A4%A9%E7%AC%94%E8%AE%B0/",{loader:()=>f(()=>import("./index.html-3JkystqN.js"),[]),meta:{title:"天天笔记 分类",index:!1}}],["/category/%E9%9D%A2%E8%AF%95%E7%9E%8E%E6%83%B3/",{loader:()=>f(()=>import("./index.html-gXeHMNIb.js"),[]),meta:{title:"面试瞎想 分类",index:!1}}],["/category/%E5%A4%87%E5%BF%98%E6%B8%85%E5%8D%95/",{loader:()=>f(()=>import("./index.html-BCJ7Tq5k.js"),[]),meta:{title:"备忘清单 分类",index:!1}}],["/category/%E5%8A%9B%E6%89%A3%E5%88%B7%E9%A2%98/",{loader:()=>f(()=>import("./index.html-D7quewts.js"),[]),meta:{title:"力扣刷题 分类",index:!1}}],["/category/%E6%9C%AA%E7%9F%A5%E5%88%86%E7%B1%BB/",{loader:()=>f(()=>import("./index.html-DNmW_9NJ.js"),[]),meta:{title:"未知分类 分类",index:!1}}],["/category/%E8%AE%BA%E6%96%87%E9%98%85%E8%AF%BB/",{loader:()=>f(()=>import("./index.html-BqApacRS.js"),[]),meta:{title:"论文阅读 分类",index:!1}}],["/category/paprikayi/",{loader:()=>f(()=>import("./index.html-CQv_gBvm.js"),[]),meta:{title:"PaprikaYi 分类",index:!1}}],["/category/%E8%B8%A9%E5%9D%91%E6%8C%87%E5%8D%97/",{loader:()=>f(()=>import("./index.html-DixXPVRz.js"),[]),meta:{title:"踩坑指南 分类",index:!1}}],["/category/%E8%BD%AC%E8%BD%BD%E6%95%B4%E7%90%86/",{loader:()=>f(()=>import("./index.html-CqmvpVCA.js"),[]),meta:{title:"转载整理 分类",index:!1}}],["/category/%E5%B0%8F%E5%90%90%E6%A7%BD/",{loader:()=>f(()=>import("./index.html-C44OV2_N.js"),[]),meta:{title:"小吐槽 分类",index:!1}}],["/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{loader:()=>f(()=>import("./index.html-BfMT6yPI.js"),[]),meta:{title:"使用指南 分类",index:!1}}],["/en/category/",{loader:()=>f(()=>import("./index.html-DfhY9oeB.js"),[]),meta:{title:"Category",index:!1}}],["/en/category/guide/",{loader:()=>f(()=>import("./index.html-CInf-RZr.js"),[]),meta:{title:"Guide Category",index:!1}}],["/tag/",{loader:()=>f(()=>import("./index.html-DSvbEsIK.js"),[]),meta:{title:"标签",index:!1}}],["/tag/%E8%AE%A1%E7%BD%91/",{loader:()=>f(()=>import("./index.html-BOHF6jXD.js"),[]),meta:{title:"标签: 计网",index:!1}}],["/tag/%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86/",{loader:()=>f(()=>import("./index.html-lalrB5WU.js"),[]),meta:{title:"标签: 编译原理",index:!1}}],["/tag/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/",{loader:()=>f(()=>import("./index.html-DsVYxvLg.js"),[]),meta:{title:"标签: 操作系统",index:!1}}],["/tag/%E6%95%B0%E6%8D%AE%E5%BA%93/",{loader:()=>f(()=>import("./index.html-0GTcWZDY.js"),[]),meta:{title:"标签: 数据库",index:!1}}],["/tag/algorithm/",{loader:()=>f(()=>import("./index.html-CsLcUkmb.js"),[]),meta:{title:"标签: Algorithm",index:!1}}],["/tag/bst/",{loader:()=>f(()=>import("./index.html-BobayEwH.js"),[]),meta:{title:"标签: BST",index:!1}}],["/tag/cpp/",{loader:()=>f(()=>import("./index.html-CrIhhweN.js"),[]),meta:{title:"标签: Cpp",index:!1}}],["/tag/lang/",{loader:()=>f(()=>import("./index.html-BcS8ZX2L.js"),[]),meta:{title:"标签: Lang",index:!1}}],["/tag/tools/",{loader:()=>f(()=>import("./index.html-BhpffURo.js"),[]),meta:{title:"标签: Tools",index:!1}}],["/tag/loadbalance/",{loader:()=>f(()=>import("./index.html-BV3aXKx2.js"),[]),meta:{title:"标签: LoadBalance",index:!1}}],["/tag/technology/",{loader:()=>f(()=>import("./index.html-D7mfS96X.js"),[]),meta:{title:"标签: Technology",index:!1}}],["/tag/javascript/",{loader:()=>f(()=>import("./index.html-K2-7epKQ.js"),[]),meta:{title:"标签: JavaScript",index:!1}}],["/tag/python/",{loader:()=>f(()=>import("./index.html-BYs53vZJ.js"),[]),meta:{title:"标签: Python",index:!1}}],["/tag/redis/",{loader:()=>f(()=>import("./index.html-Df4k0K2h.js"),[]),meta:{title:"标签: Redis",index:!1}}],["/tag/interview/",{loader:()=>f(()=>import("./index.html-CWsA316Q.js"),[]),meta:{title:"标签: Interview",index:!1}}],["/tag/os/",{loader:()=>f(()=>import("./index.html-DWck-uI6.js"),[]),meta:{title:"标签: OS",index:!1}}],["/tag/kotlin/",{loader:()=>f(()=>import("./index.html-DW2eKgFF.js"),[]),meta:{title:"标签: Kotlin",index:!1}}],["/tag/tcp/",{loader:()=>f(()=>import("./index.html-CAEVTfz1.js"),[]),meta:{title:"标签: TCP",index:!1}}],["/tag/ubuntu/",{loader:()=>f(()=>import("./index.html-MVdU6BIX.js"),[]),meta:{title:"标签: Ubuntu",index:!1}}],["/tag/vim/",{loader:()=>f(()=>import("./index.html-ChmmV23P.js"),[]),meta:{title:"标签: Vim",index:!1}}],["/tag/%E4%B8%93%E6%9C%89%E5%90%8D%E8%AF%8D/",{loader:()=>f(()=>import("./index.html-B3djlVyg.js"),[]),meta:{title:"标签: 专有名词",index:!1}}],["/tag/django/",{loader:()=>f(()=>import("./index.html-O4hOdWDk.js"),[]),meta:{title:"标签: Django",index:!1}}],["/tag/frontend/",{loader:()=>f(()=>import("./index.html-Dqsehzre.js"),[]),meta:{title:"标签: Frontend",index:!1}}],["/tag/java/",{loader:()=>f(()=>import("./index.html-BkEtnoSR.js"),[]),meta:{title:"标签: Java",index:!1}}],["/tag/vue/",{loader:()=>f(()=>import("./index.html-F4diZO_-.js"),[]),meta:{title:"标签: Vue",index:!1}}],["/tag/vuepress/",{loader:()=>f(()=>import("./index.html-S6Ah6UYa.js"),[]),meta:{title:"标签: VuePress",index:!1}}],["/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{loader:()=>f(()=>import("./index.html-Dv0t4bZ4.js"),[]),meta:{title:"标签: 使用指南",index:!1}}],["/tag/wechatapp/",{loader:()=>f(()=>import("./index.html-k-n99hQm.js"),[]),meta:{title:"标签: WeChatApp",index:!1}}],["/tag/backend/",{loader:()=>f(()=>import("./index.html-B3eVmpYn.js"),[]),meta:{title:"标签: Backend",index:!1}}],["/tag/deploy/",{loader:()=>f(()=>import("./index.html-DzVvmcsn.js"),[]),meta:{title:"标签: Deploy",index:!1}}],["/tag/bytedance/",{loader:()=>f(()=>import("./index.html-DBx2KHYz.js"),[]),meta:{title:"标签: ByteDance",index:!1}}],["/tag/aliyun/",{loader:()=>f(()=>import("./index.html-lVzDu6LJ.js"),[]),meta:{title:"标签: Aliyun",index:!1}}],["/tag/githubpage/",{loader:()=>f(()=>import("./index.html-CHAalEPD.js"),[]),meta:{title:"标签: GithubPage",index:!1}}],["/tag/api/",{loader:()=>f(()=>import("./index.html-Y1_zxIHZ.js"),[]),meta:{title:"标签: API",index:!1}}],["/tag/llm/",{loader:()=>f(()=>import("./index.html-nzXq5s4p.js"),[]),meta:{title:"标签: LLM",index:!1}}],["/tag/data-process/",{loader:()=>f(()=>import("./index.html-CYhnP2yN.js"),[]),meta:{title:"标签: Data Process",index:!1}}],["/tag/android/",{loader:()=>f(()=>import("./index.html-l2DNUSep.js"),[]),meta:{title:"标签: Android",index:!1}}],["/tag/conda/",{loader:()=>f(()=>import("./index.html-CduGH2YG.js"),[]),meta:{title:"标签: Conda",index:!1}}],["/tag/microsoft/",{loader:()=>f(()=>import("./index.html-Cboqtjmx.js"),[]),meta:{title:"标签: Microsoft",index:!1}}],["/tag/jupyter/",{loader:()=>f(()=>import("./index.html-CLMy2yYG.js"),[]),meta:{title:"标签: Jupyter",index:!1}}],["/tag/wechat/",{loader:()=>f(()=>import("./index.html-ChkAvio0.js"),[]),meta:{title:"标签: WeChat",index:!1}}],["/tag/springboot/",{loader:()=>f(()=>import("./index.html-UZ803_xF.js"),[]),meta:{title:"标签: SpringBoot",index:!1}}],["/tag/rag/",{loader:()=>f(()=>import("./index.html-C8rtztdR.js"),[]),meta:{title:"标签: RAG",index:!1}}],["/tag/nlp/",{loader:()=>f(()=>import("./index.html-BowkGLvS.js"),[]),meta:{title:"标签: NLP",index:!1}}],["/tag/markdown/",{loader:()=>f(()=>import("./index.html-BZNXkqv4.js"),[]),meta:{title:"标签: Markdown",index:!1}}],["/en/tag/",{loader:()=>f(()=>import("./index.html-ULz2eHW2.js"),[]),meta:{title:"Tag",index:!1}}],["/en/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{loader:()=>f(()=>import("./index.html-4wygwiKp.js"),[]),meta:{title:"Tag: 使用指南",index:!1}}],["/en/tag/markdown/",{loader:()=>f(()=>import("./index.html-ooVLXeBU.js"),[]),meta:{title:"Tag: Markdown",index:!1}}],["/article/",{loader:()=>f(()=>import("./index.html-DSSGIruf.js"),[]),meta:{title:"文章",index:!1}}],["/en/article/",{loader:()=>f(()=>import("./index.html-BR0sewDG.js"),[]),meta:{title:"Articles",index:!1}}],["/star/",{loader:()=>f(()=>import("./index.html-CgAic69t.js"),[]),meta:{title:"星标",index:!1}}],["/en/star/",{loader:()=>f(()=>import("./index.html-D_Ff0xWT.js"),[]),meta:{title:"Star",index:!1}}],["/timeline/",{loader:()=>f(()=>import("./index.html-CPNWM6tu.js"),[]),meta:{title:"时间轴",index:!1}}],["/en/timeline/",{loader:()=>f(()=>import("./index.html-Dl332ip7.js"),[]),meta:{title:"Timeline",index:!1}}]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ln=typeof document<"u";function mu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Nf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&mu(e.default)}const ve=Object.assign;function ja(e,t){const i={};for(const n in t){const l=t[n];i[n]=Bt(l)?l.map(e):e(l)}return i}const Hn=()=>{},Bt=Array.isArray,fu=/#/g,Hf=/&/g,zf=/\//g,qf=/=/g,Uf=/\?/g,gu=/\+/g,Wf=/%5B/g,Gf=/%5D/g,vu=/%5E/g,Yf=/%60/g,_u=/%7B/g,Kf=/%7C/g,bu=/%7D/g,Jf=/%20/g;function sr(e){return encodeURI(""+e).replace(Kf,"|").replace(Wf,"[").replace(Gf,"]")}function Qf(e){return sr(e).replace(_u,"{").replace(bu,"}").replace(vu,"^")}function vo(e){return sr(e).replace(gu,"%2B").replace(Jf,"+").replace(fu,"%23").replace(Hf,"%26").replace(Yf,"`").replace(_u,"{").replace(bu,"}").replace(vu,"^")}function Xf(e){return vo(e).replace(qf,"%3D")}function Zf(e){return sr(e).replace(fu,"%23").replace(Uf,"%3F")}function e1(e){return e==null?"":Zf(e).replace(zf,"%2F")}function Xn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const t1=/\/$/,i1=e=>e.replace(t1,"");function Na(e,t,i="/"){let n,l={},a="",o="";const r=t.indexOf("#");let s=t.indexOf("?");return r<s&&r>=0&&(s=-1),s>-1&&(n=t.slice(0,s),a=t.slice(s+1,r>-1?r:t.length),l=e(a)),r>-1&&(n=n||t.slice(0,r),o=t.slice(r,t.length)),n=o1(n??t,i),{fullPath:n+(a&&"?")+a+o,path:n,query:l,hash:Xn(o)}}function n1(e,t){const i=t.query?e(t.query):"";return t.path+(i&&"?")+i+(t.hash||"")}function Ds(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function l1(e,t,i){const n=t.matched.length-1,l=i.matched.length-1;return n>-1&&n===l&&An(t.matched[n],i.matched[l])&&yu(t.params,i.params)&&e(t.query)===e(i.query)&&t.hash===i.hash}function An(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function yu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const i in e)if(!a1(e[i],t[i]))return!1;return!0}function a1(e,t){return Bt(e)?Is(e,t):Bt(t)?Is(t,e):e===t}function Is(e,t){return Bt(t)?e.length===t.length&&e.every((i,n)=>i===t[n]):e.length===1&&e[0]===t}function o1(e,t){if(e.startsWith("/"))return e;if(!e)return t;const i=t.split("/"),n=e.split("/"),l=n[n.length-1];(l===".."||l===".")&&n.push("");let a=i.length-1,o,r;for(o=0;o<n.length;o++)if(r=n[o],r!==".")if(r==="..")a>1&&a--;else break;return i.slice(0,a).join("/")+"/"+n.slice(o).join("/")}const li={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Zn;(function(e){e.pop="pop",e.push="push"})(Zn||(Zn={}));var zn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(zn||(zn={}));function r1(e){if(!e)if(ln){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),i1(e)}const s1=/^[^#]+#/;function c1(e,t){return e.replace(s1,"#")+t}function d1(e,t){const i=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-i.left-(t.left||0),top:n.top-i.top-(t.top||0)}}const ma=()=>({left:window.scrollX,top:window.scrollY});function u1(e){let t;if("el"in e){const i=e.el,n=typeof i=="string"&&i.startsWith("#"),l=typeof i=="string"?n?document.getElementById(i.slice(1)):document.querySelector(i):i;if(!l)return;t=d1(l,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Rs(e,t){return(history.state?history.state.position-t:-1)+e}const _o=new Map;function p1(e,t){_o.set(e,t)}function h1(e){const t=_o.get(e);return _o.delete(e),t}let m1=()=>location.protocol+"//"+location.host;function wu(e,t){const{pathname:i,search:n,hash:l}=t,a=e.indexOf("#");if(a>-1){let r=l.includes(e.slice(a))?e.slice(a).length:1,s=l.slice(r);return s[0]!=="/"&&(s="/"+s),Ds(s,"")}return Ds(i,e)+n+l}function f1(e,t,i,n){let l=[],a=[],o=null;const r=({state:h})=>{const m=wu(e,location),g=i.value,b=t.value;let y=0;if(h){if(i.value=m,t.value=h,o&&o===g){o=null;return}y=b?h.position-b.position:0}else n(m);l.forEach(A=>{A(i.value,g,{delta:y,type:Zn.pop,direction:y?y>0?zn.forward:zn.back:zn.unknown})})};function s(){o=i.value}function u(h){l.push(h);const m=()=>{const g=l.indexOf(h);g>-1&&l.splice(g,1)};return a.push(m),m}function d(){const{history:h}=window;h.state&&h.replaceState(ve({},h.state,{scroll:ma()}),"")}function p(){for(const h of a)h();a=[],window.removeEventListener("popstate",r),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",r),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:s,listen:u,destroy:p}}function Bs(e,t,i,n=!1,l=!1){return{back:e,current:t,forward:i,replaced:n,position:window.history.length,scroll:l?ma():null}}function g1(e){const{history:t,location:i}=window,n={value:wu(e,i)},l={value:t.state};l.value||a(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(s,u,d){const p=e.indexOf("#"),h=p>-1?(i.host&&document.querySelector("base")?e:e.slice(p))+s:m1()+e+s;try{t[d?"replaceState":"pushState"](u,"",h),l.value=u}catch(m){console.error(m),i[d?"replace":"assign"](h)}}function o(s,u){const d=ve({},t.state,Bs(l.value.back,s,l.value.forward,!0),u,{position:l.value.position});a(s,d,!0),n.value=s}function r(s,u){const d=ve({},l.value,t.state,{forward:s,scroll:ma()});a(d.current,d,!0);const p=ve({},Bs(n.value,s,null),{position:d.position+1},u);a(s,p,!1),n.value=s}return{location:n,state:l,push:r,replace:o}}function v1(e){e=r1(e);const t=g1(e),i=f1(e,t.state,t.location,t.replace);function n(a,o=!0){o||i.pauseListeners(),history.go(a)}const l=ve({location:"",base:e,go:n,createHref:c1.bind(null,e)},t,i);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>t.state.value}),l}function _1(e){return typeof e=="string"||e&&typeof e=="object"}function ku(e){return typeof e=="string"||typeof e=="symbol"}const Eu=Symbol("");var $s;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})($s||($s={}));function Tn(e,t){return ve(new Error,{type:e,[Eu]:!0},t)}function ii(e,t){return e instanceof Error&&Eu in e&&(t==null||!!(e.type&t))}const Ms="[^/]+?",b1={sensitive:!1,strict:!1,start:!0,end:!0},y1=/[.+*?^${}()[\]/\\]/g;function w1(e,t){const i=ve({},b1,t),n=[];let l=i.start?"^":"";const a=[];for(const u of e){const d=u.length?[]:[90];i.strict&&!u.length&&(l+="/");for(let p=0;p<u.length;p++){const h=u[p];let m=40+(i.sensitive?.25:0);if(h.type===0)p||(l+="/"),l+=h.value.replace(y1,"\\$&"),m+=40;else if(h.type===1){const{value:g,repeatable:b,optional:y,regexp:A}=h;a.push({name:g,repeatable:b,optional:y});const w=A||Ms;if(w!==Ms){m+=10;try{new RegExp(`(${w})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+T.message)}}let v=b?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;p||(v=y&&u.length<2?`(?:/${v})`:"/"+v),y&&(v+="?"),l+=v,m+=20,y&&(m+=-8),b&&(m+=-20),w===".*"&&(m+=-50)}d.push(m)}n.push(d)}if(i.strict&&i.end){const u=n.length-1;n[u][n[u].length-1]+=.7000000000000001}i.strict||(l+="/?"),i.end?l+="$":i.strict&&!l.endsWith("/")&&(l+="(?:/|$)");const o=new RegExp(l,i.sensitive?"":"i");function r(u){const d=u.match(o),p={};if(!d)return null;for(let h=1;h<d.length;h++){const m=d[h]||"",g=a[h-1];p[g.name]=m&&g.repeatable?m.split("/"):m}return p}function s(u){let d="",p=!1;for(const h of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const m of h)if(m.type===0)d+=m.value;else if(m.type===1){const{value:g,repeatable:b,optional:y}=m,A=g in u?u[g]:"";if(Bt(A)&&!b)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=Bt(A)?A.join("/"):A;if(!w)if(y)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${g}"`);d+=w}}return d||"/"}return{re:o,score:n,keys:a,parse:r,stringify:s}}function k1(e,t){let i=0;for(;i<e.length&&i<t.length;){const n=t[i]-e[i];if(n)return n;i++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Au(e,t){let i=0;const n=e.score,l=t.score;for(;i<n.length&&i<l.length;){const a=k1(n[i],l[i]);if(a)return a;i++}if(Math.abs(l.length-n.length)===1){if(Vs(n))return 1;if(Vs(l))return-1}return l.length-n.length}function Vs(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const E1={type:0,value:""},A1=/[a-zA-Z0-9_]/;function T1(e){if(!e)return[[]];if(e==="/")return[[E1]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${i})/"${u}": ${m}`)}let i=0,n=i;const l=[];let a;function o(){a&&l.push(a),a=[]}let r=0,s,u="",d="";function p(){u&&(i===0?a.push({type:0,value:u}):i===1||i===2||i===3?(a.length>1&&(s==="*"||s==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:u,regexp:d,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=s}for(;r<e.length;){if(s=e[r++],s==="\\"&&i!==2){n=i,i=4;continue}switch(i){case 0:s==="/"?(u&&p(),o()):s===":"?(p(),i=1):h();break;case 4:h(),i=n;break;case 1:s==="("?i=2:A1.test(s)?h():(p(),i=0,s!=="*"&&s!=="?"&&s!=="+"&&r--);break;case 2:s===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+s:i=3:d+=s;break;case 3:p(),i=0,s!=="*"&&s!=="?"&&s!=="+"&&r--,d="";break;default:t("Unknown state");break}}return i===2&&t(`Unfinished custom RegExp for param "${u}"`),p(),o(),l}function x1(e,t,i){const n=w1(T1(e.path),i),l=ve(n,{record:e,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}function L1(e,t){const i=[],n=new Map;t=Hs({strict:!1,end:!0,sensitive:!1},t);function l(p){return n.get(p)}function a(p,h,m){const g=!m,b=js(p);b.aliasOf=m&&m.record;const y=Hs(t,p),A=[b];if("alias"in p){const T=typeof p.alias=="string"?[p.alias]:p.alias;for(const C of T)A.push(js(ve({},b,{components:m?m.record.components:b.components,path:C,aliasOf:m?m.record:b})))}let w,v;for(const T of A){const{path:C}=T;if(h&&C[0]!=="/"){const N=h.record.path,M=N[N.length-1]==="/"?"":"/";T.path=h.record.path+(C&&M+C)}if(w=x1(T,h,y),m?m.alias.push(w):(v=v||w,v!==w&&v.alias.push(w),g&&p.name&&!Ns(w)&&o(p.name)),Tu(w)&&s(w),b.children){const N=b.children;for(let M=0;M<N.length;M++)a(N[M],w,m&&m.children[M])}m=m||w}return v?()=>{o(v)}:Hn}function o(p){if(ku(p)){const h=n.get(p);h&&(n.delete(p),i.splice(i.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=i.indexOf(p);h>-1&&(i.splice(h,1),p.record.name&&n.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function r(){return i}function s(p){const h=C1(p,i);i.splice(h,0,p),p.record.name&&!Ns(p)&&n.set(p.record.name,p)}function u(p,h){let m,g={},b,y;if("name"in p&&p.name){if(m=n.get(p.name),!m)throw Tn(1,{location:p});y=m.record.name,g=ve(Fs(h.params,m.keys.filter(v=>!v.optional).concat(m.parent?m.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),p.params&&Fs(p.params,m.keys.map(v=>v.name))),b=m.stringify(g)}else if(p.path!=null)b=p.path,m=i.find(v=>v.re.test(b)),m&&(g=m.parse(b),y=m.record.name);else{if(m=h.name?n.get(h.name):i.find(v=>v.re.test(h.path)),!m)throw Tn(1,{location:p,currentLocation:h});y=m.record.name,g=ve({},h.params,p.params),b=m.stringify(g)}const A=[];let w=m;for(;w;)A.unshift(w.record),w=w.parent;return{name:y,path:b,params:g,matched:A,meta:P1(A)}}e.forEach(p=>a(p));function d(){i.length=0,n.clear()}return{addRoute:a,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:r,getRecordMatcher:l}}function Fs(e,t){const i={};for(const n of t)n in e&&(i[n]=e[n]);return i}function js(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:S1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function S1(e){const t={},i=e.props||!1;if("component"in e)t.default=i;else for(const n in e.components)t[n]=typeof i=="object"?i[n]:i;return t}function Ns(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function P1(e){return e.reduce((t,i)=>ve(t,i.meta),{})}function Hs(e,t){const i={};for(const n in e)i[n]=n in t?t[n]:e[n];return i}function C1(e,t){let i=0,n=t.length;for(;i!==n;){const a=i+n>>1;Au(e,t[a])<0?n=a:i=a+1}const l=O1(e);return l&&(n=t.lastIndexOf(l,n-1)),n}function O1(e){let t=e;for(;t=t.parent;)if(Tu(t)&&Au(e,t)===0)return t}function Tu({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function D1(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let l=0;l<n.length;++l){const a=n[l].replace(gu," "),o=a.indexOf("="),r=Xn(o<0?a:a.slice(0,o)),s=o<0?null:Xn(a.slice(o+1));if(r in t){let u=t[r];Bt(u)||(u=t[r]=[u]),u.push(s)}else t[r]=s}return t}function zs(e){let t="";for(let i in e){const n=e[i];if(i=Xf(i),n==null){n!==void 0&&(t+=(t.length?"&":"")+i);continue}(Bt(n)?n.map(a=>a&&vo(a)):[n&&vo(n)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+i,a!=null&&(t+="="+a))})}return t}function I1(e){const t={};for(const i in e){const n=e[i];n!==void 0&&(t[i]=Bt(n)?n.map(l=>l==null?null:""+l):n==null?n:""+n)}return t}const R1=Symbol(""),qs=Symbol(""),fa=Symbol(""),cr=Symbol(""),bo=Symbol("");function Bn(){let e=[];function t(n){return e.push(n),()=>{const l=e.indexOf(n);l>-1&&e.splice(l,1)}}function i(){e=[]}return{add:t,list:()=>e.slice(),reset:i}}function ki(e,t,i,n,l,a=o=>o()){const o=n&&(n.enterCallbacks[l]=n.enterCallbacks[l]||[]);return()=>new Promise((r,s)=>{const u=h=>{h===!1?s(Tn(4,{from:i,to:t})):h instanceof Error?s(h):_1(h)?s(Tn(2,{from:t,to:h})):(o&&n.enterCallbacks[l]===o&&typeof h=="function"&&o.push(h),r())},d=a(()=>e.call(n&&n.instances[l],t,i,u));let p=Promise.resolve(d);e.length<3&&(p=p.then(u)),p.catch(h=>s(h))})}function Ha(e,t,i,n,l=a=>a()){const a=[];for(const o of e)for(const r in o.components){let s=o.components[r];if(!(t!=="beforeRouteEnter"&&!o.instances[r]))if(mu(s)){const d=(s.__vccOpts||s)[t];d&&a.push(ki(d,i,n,o,r,l))}else{let u=s();a.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${r}" at "${o.path}"`);const p=Nf(d)?d.default:d;o.mods[r]=d,o.components[r]=p;const m=(p.__vccOpts||p)[t];return m&&ki(m,i,n,o,r,l)()}))}}return a}function Us(e){const t=we(fa),i=we(cr),n=E(()=>{const s=kt(e.to);return t.resolve(s)}),l=E(()=>{const{matched:s}=n.value,{length:u}=s,d=s[u-1],p=i.matched;if(!d||!p.length)return-1;const h=p.findIndex(An.bind(null,d));if(h>-1)return h;const m=Ws(s[u-2]);return u>1&&Ws(d)===m&&p[p.length-1].path!==m?p.findIndex(An.bind(null,s[u-2])):h}),a=E(()=>l.value>-1&&F1(i.params,n.value.params)),o=E(()=>l.value>-1&&l.value===i.matched.length-1&&yu(i.params,n.value.params));function r(s={}){if(V1(s)){const u=t[kt(e.replace)?"replace":"push"](kt(e.to)).catch(Hn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:n,href:E(()=>n.value.href),isActive:a,isExactActive:o,navigate:r}}function B1(e){return e.length===1?e[0]:e}const $1=D({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Us,setup(e,{slots:t}){const i=Hi(Us(e)),{options:n}=we(fa),l=E(()=>({[Gs(e.activeClass,n.linkActiveClass,"router-link-active")]:i.isActive,[Gs(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:i.isExactActive}));return()=>{const a=t.default&&B1(t.default(i));return e.custom?a:c("a",{"aria-current":i.isExactActive?e.ariaCurrentValue:null,href:i.href,onClick:i.navigate,class:l.value},a)}}}),M1=$1;function V1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function F1(e,t){for(const i in t){const n=t[i],l=e[i];if(typeof n=="string"){if(n!==l)return!1}else if(!Bt(l)||l.length!==n.length||n.some((a,o)=>a!==l[o]))return!1}return!0}function Ws(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Gs=(e,t,i)=>e??t??i,j1=D({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:i}){const n=we(bo),l=E(()=>e.route||n.value),a=we(qs,0),o=E(()=>{let u=kt(a);const{matched:d}=l.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),r=E(()=>l.value.matched[o.value]);It(qs,E(()=>o.value+1)),It(R1,r),It(bo,l);const s=Q();return ke(()=>[s.value,r.value,e.name],([u,d,p],[h,m,g])=>{d&&(d.instances[p]=u,m&&m!==d&&u&&u===h&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),u&&d&&(!m||!An(d,m)||!h)&&(d.enterCallbacks[p]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=l.value,d=e.name,p=r.value,h=p&&p.components[d];if(!h)return Ys(i.default,{Component:h,route:u});const m=p.props[d],g=m?m===!0?u.params:typeof m=="function"?m(u):m:null,y=c(h,ve({},g,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(p.instances[d]=null)},ref:s}));return Ys(i.default,{Component:y,route:u})||y}}});function Ys(e,t){if(!e)return null;const i=e(t);return i.length===1?i[0]:i}const N1=j1;function H1(e){const t=L1(e.routes,e),i=e.parseQuery||D1,n=e.stringifyQuery||zs,l=e.history,a=Bn(),o=Bn(),r=Bn(),s=ee(li);let u=li;ln&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ja.bind(null,S=>""+S),p=ja.bind(null,e1),h=ja.bind(null,Xn);function m(S,G){let q,X;return ku(S)?(q=t.getRecordMatcher(S),X=G):X=S,t.addRoute(X,q)}function g(S){const G=t.getRecordMatcher(S);G&&t.removeRoute(G)}function b(){return t.getRoutes().map(S=>S.record)}function y(S){return!!t.getRecordMatcher(S)}function A(S,G){if(G=ve({},G||s.value),typeof S=="string"){const k=Na(i,S,G.path),x=t.resolve({path:k.path},G),I=l.createHref(k.fullPath);return ve(k,x,{params:h(x.params),hash:Xn(k.hash),redirectedFrom:void 0,href:I})}let q;if(S.path!=null)q=ve({},S,{path:Na(i,S.path,G.path).path});else{const k=ve({},S.params);for(const x in k)k[x]==null&&delete k[x];q=ve({},S,{params:p(k)}),G.params=p(G.params)}const X=t.resolve(q,G),fe=S.hash||"";X.params=d(h(X.params));const Te=n1(n,ve({},S,{hash:Qf(fe),path:X.path})),_=l.createHref(Te);return ve({fullPath:Te,hash:fe,query:n===zs?I1(S.query):S.query||{}},X,{redirectedFrom:void 0,href:_})}function w(S){return typeof S=="string"?Na(i,S,s.value.path):ve({},S)}function v(S,G){if(u!==S)return Tn(8,{from:G,to:S})}function T(S){return M(S)}function C(S){return T(ve(w(S),{replace:!0}))}function N(S){const G=S.matched[S.matched.length-1];if(G&&G.redirect){const{redirect:q}=G;let X=typeof q=="function"?q(S):q;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=w(X):{path:X},X.params={}),ve({query:S.query,hash:S.hash,params:X.path!=null?{}:S.params},X)}}function M(S,G){const q=u=A(S),X=s.value,fe=S.state,Te=S.force,_=S.replace===!0,k=N(q);if(k)return M(ve(w(k),{state:typeof k=="object"?ve({},fe,k.state):fe,force:Te,replace:_}),G||q);const x=q;x.redirectedFrom=G;let I;return!Te&&l1(n,X,q)&&(I=Tn(16,{to:x,from:X}),Xe(X,X,!0,!1)),(I?Promise.resolve(I):B(x,X)).catch(P=>ii(P)?ii(P,2)?P:rt(P):K(P,x,X)).then(P=>{if(P){if(ii(P,2))return M(ve({replace:_},w(P.to),{state:typeof P.to=="object"?ve({},fe,P.to.state):fe,force:Te}),G||x)}else P=O(x,X,!0,_,fe);return F(x,X,P),P})}function H(S,G){const q=v(S,G);return q?Promise.reject(q):Promise.resolve()}function L(S){const G=ei.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(S):S()}function B(S,G){let q;const[X,fe,Te]=z1(S,G);q=Ha(X.reverse(),"beforeRouteLeave",S,G);for(const k of X)k.leaveGuards.forEach(x=>{q.push(ki(x,S,G))});const _=H.bind(null,S,G);return q.push(_),We(q).then(()=>{q=[];for(const k of a.list())q.push(ki(k,S,G));return q.push(_),We(q)}).then(()=>{q=Ha(fe,"beforeRouteUpdate",S,G);for(const k of fe)k.updateGuards.forEach(x=>{q.push(ki(x,S,G))});return q.push(_),We(q)}).then(()=>{q=[];for(const k of Te)if(k.beforeEnter)if(Bt(k.beforeEnter))for(const x of k.beforeEnter)q.push(ki(x,S,G));else q.push(ki(k.beforeEnter,S,G));return q.push(_),We(q)}).then(()=>(S.matched.forEach(k=>k.enterCallbacks={}),q=Ha(Te,"beforeRouteEnter",S,G,L),q.push(_),We(q))).then(()=>{q=[];for(const k of o.list())q.push(ki(k,S,G));return q.push(_),We(q)}).catch(k=>ii(k,8)?k:Promise.reject(k))}function F(S,G,q){r.list().forEach(X=>L(()=>X(S,G,q)))}function O(S,G,q,X,fe){const Te=v(S,G);if(Te)return Te;const _=G===li,k=ln?history.state:{};q&&(X||_?l.replace(S.fullPath,ve({scroll:_&&k&&k.scroll},fe)):l.push(S.fullPath,fe)),s.value=S,Xe(S,G,q,_),rt()}let J;function U(){J||(J=l.listen((S,G,q)=>{if(!Ht.listening)return;const X=A(S),fe=N(X);if(fe){M(ve(fe,{replace:!0,force:!0}),X).catch(Hn);return}u=X;const Te=s.value;ln&&p1(Rs(Te.fullPath,q.delta),ma()),B(X,Te).catch(_=>ii(_,12)?_:ii(_,2)?(M(ve(w(_.to),{force:!0}),X).then(k=>{ii(k,20)&&!q.delta&&q.type===Zn.pop&&l.go(-1,!1)}).catch(Hn),Promise.reject()):(q.delta&&l.go(-q.delta,!1),K(_,X,Te))).then(_=>{_=_||O(X,Te,!1),_&&(q.delta&&!ii(_,8)?l.go(-q.delta,!1):q.type===Zn.pop&&ii(_,20)&&l.go(-1,!1)),F(X,Te,_)}).catch(Hn)}))}let Z=Bn(),V=Bn(),le;function K(S,G,q){rt(S);const X=V.list();return X.length?X.forEach(fe=>fe(S,G,q)):console.error(S),Promise.reject(S)}function ce(){return le&&s.value!==li?Promise.resolve():new Promise((S,G)=>{Z.add([S,G])})}function rt(S){return le||(le=!S,U(),Z.list().forEach(([G,q])=>S?q(S):G()),Z.reset()),S}function Xe(S,G,q,X){const{scrollBehavior:fe}=e;if(!ln||!fe)return Promise.resolve();const Te=!q&&h1(Rs(S.fullPath,0))||(X||!q)&&history.state&&history.state.scroll||null;return xt().then(()=>fe(S,G,Te)).then(_=>_&&u1(_)).catch(_=>K(_,S,G))}const $e=S=>l.go(S);let st;const ei=new Set,Ht={currentRoute:s,listening:!0,addRoute:m,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:y,getRoutes:b,resolve:A,options:e,push:T,replace:C,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:a.add,beforeResolve:o.add,afterEach:r.add,onError:V.add,isReady:ce,install(S){const G=this;S.component("RouterLink",M1),S.component("RouterView",N1),S.config.globalProperties.$router=G,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>kt(s)}),ln&&!st&&s.value===li&&(st=!0,T(l.location).catch(fe=>{}));const q={};for(const fe in li)Object.defineProperty(q,fe,{get:()=>s.value[fe],enumerable:!0});S.provide(fa,G),S.provide(cr,ud(q)),S.provide(bo,s);const X=S.unmount;ei.add(S),S.unmount=function(){ei.delete(S),ei.size<1&&(u=li,J&&J(),J=null,s.value=li,st=!1,le=!1),X()}}};function We(S){return S.reduce((G,q)=>G.then(()=>L(q)),Promise.resolve())}return Ht}function z1(e,t){const i=[],n=[],l=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){const r=t.matched[o];r&&(e.matched.find(u=>An(u,r))?n.push(r):i.push(r));const s=e.matched[o];s&&(t.matched.find(u=>An(u,s))||l.push(s))}return[i,n,l]}function Si(){return we(fa)}function Ft(e){return we(cr)}var dr=Symbol(""),St=()=>{const e=we(dr);if(!e)throw new Error("useClientData() is called without provider.");return e},q1=()=>St().pageComponent,U1=()=>St().pageData,xu=()=>St().pageFrontmatter,W1=()=>St().pageHead,Lu=()=>St().pageLang,G1=()=>St().pageLayout,ga=()=>St().routeLocale,ur=()=>St().routePath,Y1=()=>St().routes,K1=()=>St().siteData,J1=()=>St().siteLocaleData,jt=St,Ue=xu,Su=Lu,Yi=U1,Pu=J1,yo=new Set,Zt=e=>{yo.add(e),Vt(()=>{yo.delete(e)})},Q1=Symbol(""),wo=ee(Ff),gn=ee(jf),Cu=(e,t)=>{const i=Pf(e,t);if(gn.value[i])return i;const n=encodeURI(i);if(gn.value[n])return n;const l=wo.value[i]||wo.value[n];return l||i},Tt=(e,t)=>{const{pathname:i,hashAndQueries:n}=uu(e),l=Cu(i,t),a=l+n;return gn.value[l]?{...gn.value[l],path:a,notFound:!1}:{...gn.value["/404.html"],path:a,notFound:!0}},X1=(e,t)=>{const{pathname:i,hashAndQueries:n}=uu(e);return Cu(i,t)+n},Z1=e=>{if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)&&!(e.currentTarget&&e.currentTarget.getAttribute("target")?.match(/\b_blank\b/i)))return e.preventDefault(),!0},Re=D({name:"RouteLink",props:{to:{type:String,required:!0},active:Boolean,activeClass:{type:String,default:"route-link-active"}},slots:Object,setup(e,{slots:t}){const i=Si(),n=Ft(),l=E(()=>e.to.startsWith("#")||e.to.startsWith("?")?e.to:`/${X1(e.to,n.path).substring(1)}`);return()=>c("a",{class:["route-link",{[e.activeClass]:e.active}],href:l.value,onClick:(a={})=>{Z1(a)&&i.push(e.to).catch()}},t.default())}}),eg=D({name:"AutoLink",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){const i=Ln(e,"config"),n=Ft(),l=K1(),a=E(()=>pl(i.value.link)),o=E(()=>i.value.target||(a.value?"_blank":void 0)),r=E(()=>o.value==="_blank"),s=E(()=>!a.value&&!r.value),u=E(()=>i.value.rel||(r.value?"noopener noreferrer":null)),d=E(()=>i.value.ariaLabel??i.value.text),p=E(()=>{if(i.value.exact)return!1;const m=Object.keys(l.value.locales);return m.length?m.every(g=>g!==i.value.link):i.value.link!=="/"}),h=E(()=>s.value?i.value.activeMatch?(i.value.activeMatch instanceof RegExp?i.value.activeMatch:new RegExp(i.value.activeMatch,"u")).test(n.path):p.value?n.path.startsWith(i.value.link):n.path===i.value.link:!1);return()=>{const{before:m,after:g,default:b}=t,y=b?.(i.value)??[m?.(i.value),i.value.text,g?.(i.value)];return s.value?c(Re,{class:"auto-link",to:i.value.link,active:h.value,"aria-label":d.value},()=>y):c("a",{class:"auto-link external-link",href:i.value.link,"aria-label":d.value,rel:u.value,target:o.value},y)}}}),va=D({name:"ClientOnly",setup(e,t){const i=Q(!1);return de(()=>{i.value=!0}),()=>i.value?t.slots.default?.():null}}),Cl=e=>{yo.forEach(t=>t(e))},Ou=D({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(e){const t=q1(),i=E(()=>{if(!e.path)return t.value;const l=Tt(e.path);return er(async()=>l.loader().then(({comp:a})=>a))}),n=xu();return ke(n,()=>{Cl("updated")},{deep:!0,flush:"post"}),()=>c(i.value,{onVnodeMounted:()=>{Cl("mounted")},onVnodeUpdated:()=>{Cl("updated")},onVnodeBeforeUnmount:()=>{Cl("beforeUnmount")}})}}),tg="Layout",ig="en-US",Ii=Hi({resolveLayouts:e=>e.reduce((t,i)=>({...t,...i.layouts}),{}),resolvePageHead:(e,t,i)=>{const n=pe(t.description)?t.description:i.description,l=[...Array.isArray(t.head)?t.head:[],...i.head,["title",{},e],["meta",{name:"description",content:n}]];return Bf(l)},resolvePageHeadTitle:(e,t)=>[e.title,t.title].filter(i=>!!i).join(" | "),resolvePageLang:(e,t)=>e.lang||t.lang||ig,resolvePageLayout:(e,t)=>{const i=pe(e.frontmatter.layout)?e.frontmatter.layout:tg;if(!t[i])throw new Error(`[vuepress] Cannot resolve layout: ${i}`);return t[i]},resolveRouteLocale:(e,t)=>Cf(e,decodeURI(t)),resolveSiteLocaleData:({base:e,locales:t,...i},n)=>({...i,...t[n],head:[...t[n]?.head??[],...i.head]})}),Qe=(e={})=>e,ye=e=>Xt(e)?e:`/${pu(e)}`,ng=Object.defineProperty,lg=(e,t)=>{for(var i in t)ng(e,i,{get:t[i],enumerable:!0})},ag={};lg(ag,{COMPONENT_STATE_TYPE:()=>og,INSPECTOR_ID:()=>rg,INSPECTOR_LABEL:()=>sg,INSPECTOR_NODES:()=>cg,INSPECTOR_STATE_SECTION_NAME:()=>dg,PLUGIN_ID:()=>Du,PLUGIN_LABEL:()=>pr});var Du="org.vuejs.vuepress",pr="VuePress",og=pr,rg=Du,sg=pr,Ks={id:"INTERNAL",label:"Internal",keys:["layouts","routes","redirects"]},Js={id:"SITE",label:"Site",keys:["siteData","siteLocaleData"]},Qs={id:"ROUTE",label:"Route",keys:["routePath","routeLocale"]},Xs={id:"PAGE",label:"Page",keys:["pageData","pageFrontmatter","pageLang","pageHead","pageHeadTitle","pageLayout","pageComponent"]},cg={[Ks.id]:Ks,[Js.id]:Js,[Qs.id]:Qs,[Xs.id]:Xs},dg="State";const Zs=e=>typeof e=="number"?`${e}px`:e,Sn=({size:e=48,stroke:t=4,wrapper:i=!0,height:n=2*e})=>{const l=c("span",{style:`--loading-icon: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid' viewBox='25 25 50 50'%3E%3CanimateTransform attributeName='transform' type='rotate' dur='2s' keyTimes='0;1' repeatCount='indefinite' values='0;360'%3E%3C/animateTransform%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='currentColor' stroke-width='${t}' stroke-linecap='round'%3E%3Canimate attributeName='stroke-dasharray' dur='1.5s' keyTimes='0;0.5;1' repeatCount='indefinite' values='1,200;90,200;1,200'%3E%3C/animate%3E%3Canimate attributeName='stroke-dashoffset' dur='1.5s' keyTimes='0;0.5;1' repeatCount='indefinite' values='0;-35px;-125px'%3E%3C/animate%3E%3C/circle%3E%3C/svg%3E");--icon-size: ${Zs(e)};display: inline-block;width: var(--icon-size);height: var(--icon-size);background-color: currentcolor;-webkit-mask-image: var(--loading-icon);mask-image: var(--loading-icon)`});return i?c("div",{style:`display: flex;align-items: center;justify-content: center;height: ${Zs(n)}`},l):l};Sn.displayName="LoadingIcon";const hr=(e,{slots:t})=>t.default();var pt=Uint8Array,cn=Uint16Array,ug=Int32Array,Iu=new pt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ru=new pt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),pg=new pt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Bu=function(e,t){for(var i=new cn(31),n=0;n<31;++n)i[n]=t+=1<<e[n-1];for(var l=new ug(i[30]),n=1;n<30;++n)for(var a=i[n];a<i[n+1];++a)l[a]=a-i[n]<<5|n;return{b:i,r:l}},$u=Bu(Iu,2),Mu=$u.b,hg=$u.r;Mu[28]=258,hg[258]=28;var mg=Bu(Ru,0),fg=mg.b,ko=new cn(32768);for(var Se=0;Se<32768;++Se){var vi=(Se&43690)>>1|(Se&21845)<<1;vi=(vi&52428)>>2|(vi&13107)<<2,vi=(vi&61680)>>4|(vi&3855)<<4,ko[Se]=((vi&65280)>>8|(vi&255)<<8)>>1}var qn=(function(e,t,i){for(var n=e.length,l=0,a=new cn(t);l<n;++l)e[l]&&++a[e[l]-1];var o=new cn(t);for(l=1;l<t;++l)o[l]=o[l-1]+a[l-1]<<1;var r;if(i){r=new cn(1<<t);var s=15-t;for(l=0;l<n;++l)if(e[l])for(var u=l<<4|e[l],d=t-e[l],p=o[e[l]-1]++<<d,h=p|(1<<d)-1;p<=h;++p)r[ko[p]>>s]=u}else for(r=new cn(n),l=0;l<n;++l)e[l]&&(r[l]=ko[o[e[l]-1]++]>>15-e[l]);return r}),hl=new pt(288);for(var Se=0;Se<144;++Se)hl[Se]=8;for(var Se=144;Se<256;++Se)hl[Se]=9;for(var Se=256;Se<280;++Se)hl[Se]=7;for(var Se=280;Se<288;++Se)hl[Se]=8;var Vu=new pt(32);for(var Se=0;Se<32;++Se)Vu[Se]=5;var gg=qn(hl,9,1),vg=qn(Vu,5,1),za=function(e){for(var t=e[0],i=1;i<e.length;++i)e[i]>t&&(t=e[i]);return t},Ct=function(e,t,i){var n=t/8|0;return(e[n]|e[n+1]<<8)>>(t&7)&i},qa=function(e,t){var i=t/8|0;return(e[i]|e[i+1]<<8|e[i+2]<<16)>>(t&7)},_g=function(e){return(e+7)/8|0},Fu=function(e,t,i){return(t==null||t<0)&&(t=0),(i==null||i>e.length)&&(i=e.length),new pt(e.subarray(t,i))},bg=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],yt=function(e,t,i){var n=new Error(t||bg[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,yt),!i)throw n;return n},yg=function(e,t,i,n){var l=e.length,a=0;if(!l||t.f&&!t.l)return i||new pt(0);var o=!i,r=o||t.i!=2,s=t.i;o&&(i=new pt(l*3));var u=function(fe){var Te=i.length;if(fe>Te){var _=new pt(Math.max(Te*2,fe));_.set(i),i=_}},d=t.f||0,p=t.p||0,h=t.b||0,m=t.l,g=t.d,b=t.m,y=t.n,A=l*8;do{if(!m){d=Ct(e,p,1);var w=Ct(e,p+1,3);if(p+=3,w)if(w==1)m=gg,g=vg,b=9,y=5;else if(w==2){var N=Ct(e,p,31)+257,M=Ct(e,p+10,15)+4,H=N+Ct(e,p+5,31)+1;p+=14;for(var L=new pt(H),B=new pt(19),F=0;F<M;++F)B[pg[F]]=Ct(e,p+F*3,7);p+=M*3;for(var O=za(B),J=(1<<O)-1,U=qn(B,O,1),F=0;F<H;){var Z=U[Ct(e,p,J)];p+=Z&15;var v=Z>>4;if(v<16)L[F++]=v;else{var V=0,le=0;for(v==16?(le=3+Ct(e,p,3),p+=2,V=L[F-1]):v==17?(le=3+Ct(e,p,7),p+=3):v==18&&(le=11+Ct(e,p,127),p+=7);le--;)L[F++]=V}}var K=L.subarray(0,N),ce=L.subarray(N);b=za(K),y=za(ce),m=qn(K,b,1),g=qn(ce,y,1)}else yt(1);else{var v=_g(p)+4,T=e[v-4]|e[v-3]<<8,C=v+T;if(C>l){s&&yt(0);break}r&&u(h+T),i.set(e.subarray(v,C),h),t.b=h+=T,t.p=p=C*8,t.f=d;continue}if(p>A){s&&yt(0);break}}r&&u(h+131072);for(var rt=(1<<b)-1,Xe=(1<<y)-1,$e=p;;$e=p){var V=m[qa(e,p)&rt],st=V>>4;if(p+=V&15,p>A){s&&yt(0);break}if(V||yt(2),st<256)i[h++]=st;else if(st==256){$e=p,m=null;break}else{var ei=st-254;if(st>264){var F=st-257,Ht=Iu[F];ei=Ct(e,p,(1<<Ht)-1)+Mu[F],p+=Ht}var We=g[qa(e,p)&Xe],S=We>>4;We||yt(3),p+=We&15;var ce=fg[S];if(S>3){var Ht=Ru[S];ce+=qa(e,p)&(1<<Ht)-1,p+=Ht}if(p>A){s&&yt(0);break}r&&u(h+131072);var G=h+ei;if(h<ce){var q=a-ce,X=Math.min(ce,G);for(q+h<0&&yt(3);h<X;++h)i[h]=n[q+h]}for(;h<G;++h)i[h]=i[h-ce]}}t.l=m,t.p=$e,t.b=h,t.f=d,m&&(d=1,t.m=b,t.d=g,t.n=y)}while(!d);return h!=i.length&&o?Fu(i,0,h):i.subarray(0,h)},wg=new pt(0),kg=function(e,t){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&yt(6,"invalid zlib data"),(e[1]>>5&1)==1&&yt(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function Eg(e,t){return yg(e.subarray(kg(e),-4),{i:2},t,t)}var Eo=typeof TextDecoder<"u"&&new TextDecoder,Ag=0;try{Eo.decode(wg,{stream:!0}),Ag=1}catch{}var Tg=function(e){for(var t="",i=0;;){var n=e[i++],l=(n>127)+(n>223)+(n>239);if(i+l>e.length)return{s:t,r:Fu(e,i-1)};l?l==3?(n=((n&15)<<18|(e[i++]&63)<<12|(e[i++]&63)<<6|e[i++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):l&1?t+=String.fromCharCode((n&31)<<6|e[i++]&63):t+=String.fromCharCode((n&15)<<12|(e[i++]&63)<<6|e[i++]&63):t+=String.fromCharCode(n)}};function xg(e,t){{for(var i=new pt(e.length),n=0;n<e.length;++n)i[n]=e.charCodeAt(n);return i}for(var l=e.length,n=0;n<l;++n);}function Lg(e,t){var i;if(Eo)return Eo.decode(e);var n=Tg(e),l=n.s,i=n.r;return i.length&&yt(8),l}const el=e=>{const t=atob(e);return Lg(Eg(xg(t)))},Sg=e=>/\b(?:Android|iPhone)/i.test(e),Pg=e=>/version\/([\w.]+) .*(mobile ?safari|safari)/i.test(e),ju=e=>[/\((ipad);[-\w),; ]+apple/i,/applecoremedia\/[\w.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i].some(t=>t.test(e)),Cg=e=>[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i].some(t=>t.test(e)),Og=e=>[/(mac os x) ?([\w. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i].some(t=>t.test(e)),ec=()=>document.documentElement.getAttribute("data-theme")==="dark",Nu=[...new Array(6)].map((e,t)=>`[vp-content] h${t+1}`).join(","),Dg=(e,t=2)=>{if(t===!1)return[];const[i,n]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t,l=e.filter(o=>o.level>=i&&o.level<=n),a=[];e:for(let o=0;o<l.length;o++){const r=l[o];if(o===0)a.push(r);else{for(let s=o-1;s>=0;s--){const u=l[s];if(u.level<r.level){u.children.push(r);continue e}}a.push(r)}}return a},Ig=(e,t=[])=>{let i;if(t.length){const n=e.cloneNode(!0);n.querySelectorAll(t.join(",")).forEach(l=>{l.remove()}),i=n.textContent||""}else i=e.textContent||"";return i.trim()},Rg=(e=Nu,t=[])=>Array.from(document.querySelectorAll(e)).filter(i=>i.id&&i.hasChildNodes()).map(i=>({element:i,title:Ig(i,t),link:`#${i.id}`,slug:i.id,level:Number(i.tagName[1]),children:[]})),Bg=({selector:e=Nu,levels:t=2,ignore:i=[]}={})=>Dg(Rg(e,i),t),$g=e=>e instanceof Element?document.activeElement===e&&(["TEXTAREA","SELECT","INPUT"].includes(e.tagName)||e.hasAttribute("contenteditable")):!1,_a=e=>typeof e<"u",jl=e=>typeof e=="number",{isArray:Jt}=Array,qi=(e,t)=>pe(e)&&e.startsWith(t),Hu=(e,t)=>pe(e)&&e.endsWith(t),{entries:Pi}=Object,{keys:ft}=Object,{values:Mg}=Object,mr=e=>{if(e){if(typeof e=="number")return new Date(e);const t=Date.parse(e.toString());if(!Number.isNaN(t))return new Date(t)}return null},ml=e=>qi(e,"/")&&e[1]!=="/",zu=e=>e.every(t=>t.type===je?!0:t.type===at?t.children==null||Jt(t.children)&&zu(t.children):!1),vn=e=>e==null?!0:Jt(e)?zu(e):!1,Vg=(e,t)=>t.some(i=>{if(pe(i))return i===e.key;const{key:n,ctrl:l=!1,shift:a=!1,alt:o=!1}=i;return n===e.key&&l===e.ctrlKey&&a===e.shiftKey&&o===e.altKey}),Je=(e,t)=>{const i=(t?._instance??Qt())?.appContext.components;return i?e in i||ot(e)in i||ol(ot(e))in i:!1},Ua="message-container";class fr{elements;constructor(){this.elements={}}static get containerElement(){let t=document.getElementById(Ua);return t||(t=document.createElement("div"),t.id=Ua,document.body.appendChild(t),t)}getElement(t){return this.elements[t]}pop(t,i=2e3,n=!0){const l=Date.now(),a=document.createElement("div");return a.className="message-item move-in",a.innerHTML=t,fr.containerElement.appendChild(a),this.elements[l]=a,n&&a.addEventListener("click",()=>{this.close(l)}),i>0&&setTimeout(()=>{this.close(l)},i),l}close(t){if(t){const i=this.elements[t];i.classList.remove("move-in"),i.classList.add("move-out"),i.addEventListener("animationend",()=>{i.remove(),delete this.elements[t]})}else ft(this.elements).forEach(i=>{this.close(Number(i))})}destroy(){const t=document.getElementById(Ua);t&&document.body.removeChild(t),this.elements={}}}const Fg=e=>new Promise(t=>{setTimeout(t,e)}),jg=Symbol(""),Ao=Q(!1);typeof document<"u"&&(Ao.value=ec(),new MutationObserver(()=>{Ao.value=ec()}).observe(document.documentElement,{attributeFilter:["data-theme"],attributes:!0}));const Ng=()=>Mt(we(jg,Ao)),Hg=(e={})=>{const t=Q([]);return Zt(i=>{t.value=i==="beforeUnmount"?[]:Bg(se(e))}),t},qu=e=>{const t=ga();return E(()=>se(e)[t.value]??{})},gt=qu;function $t(e){return Yc()?(tm(e),!0):!1}const Wa=new WeakMap,zg=(...e)=>{var t;const i=e[0],n=(t=Qt())==null?void 0:t.proxy;if(n==null&&!Dd())throw new Error("injectLocal must be called in setup");return n&&Wa.has(n)&&i in Wa.get(n)?Wa.get(n)[i]:we(...e)},Ui=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const qg=e=>e!=null,Ug=Object.prototype.toString,Wg=e=>Ug.call(e)==="[object Object]",tt=()=>{},To=Gg();function Gg(){var e,t;return Ui&&((e=window?.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window?.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window?.navigator.userAgent))}function Uu(...e){if(e.length!==1)return Ln(...e);const t=e[0];return typeof t=="function"?Mt(fd(()=>({get:t,set:tt}))):Q(t)}function gr(e,t){function i(...n){return new Promise((l,a)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(l).catch(a)})}return i}const Wu=e=>e();function Yg(e,t={}){let i,n,l=tt;const a=s=>{clearTimeout(s),l(),l=tt};let o;return s=>{const u=se(e),d=se(t.maxWait);return i&&a(i),u<=0||d!==void 0&&d<=0?(n&&(a(n),n=void 0),Promise.resolve(s())):new Promise((p,h)=>{l=t.rejectOnCancel?h:p,o=s,d&&!n&&(n=setTimeout(()=>{i&&a(i),n=void 0,p(o())},d)),i=setTimeout(()=>{n&&a(n),n=void 0,p(s())},u)})}}function Kg(...e){let t=0,i,n=!0,l=tt,a,o,r,s,u;!Ce(e[0])&&typeof e[0]=="object"?{delay:o,trailing:r=!0,leading:s=!0,rejectOnCancel:u=!1}=e[0]:[o,r=!0,s=!0,u=!1]=e;const d=()=>{i&&(clearTimeout(i),i=void 0,l(),l=tt)};return h=>{const m=se(o),g=Date.now()-t,b=()=>a=h();return d(),m<=0?(t=Date.now(),b()):(g>m&&(s||!n)?(t=Date.now(),b()):r&&(a=new Promise((y,A)=>{l=u?A:y,i=setTimeout(()=>{t=Date.now(),n=!0,y(b()),d()},Math.max(0,m-g))})),!s&&!i&&(i=setTimeout(()=>n=!0,m)),n=!1,a)}}function Jg(e=Wu,t={}){const{initialState:i="active"}=t,n=Uu(i==="active");function l(){n.value=!1}function a(){n.value=!0}const o=(...r)=>{n.value&&e(...r)};return{isActive:Mt(n),pause:l,resume:a,eventFilter:o}}function Qg(e){let t;function i(){return t||(t=e()),t}return i.reset=async()=>{const n=t;t=void 0,n&&await n},i}function tc(e){return e.endsWith("rem")?Number.parseFloat(e)*16:Number.parseFloat(e)}function Un(e){return Array.isArray(e)?e:[e]}function Gu(e){return Qt()}function ba(e,t=200,i={}){return gr(Yg(t,i),e)}function Yu(e,t=200,i=!1,n=!0,l=!1){return gr(Kg(t,i,n,l),e)}function Xg(e,t,i={}){const{eventFilter:n=Wu,...l}=i;return ke(e,gr(n,t),l)}function Zg(e,t,i={}){const{eventFilter:n,initialState:l="active",...a}=i,{eventFilter:o,pause:r,resume:s,isActive:u}=Jg(n,{initialState:l});return{stop:Xg(e,t,{...a,eventFilter:o}),pause:r,resume:s,isActive:u}}function Ki(e,t=!0,i){Gu()?de(e,i):t?e():xt(e)}function e2(e,t){Gu()&&Vt(e,t)}function t2(e,t=1e3,i={}){const{immediate:n=!0,immediateCallback:l=!1}=i;let a=null;const o=ee(!1);function r(){a&&(clearInterval(a),a=null)}function s(){o.value=!1,r()}function u(){const d=se(t);d<=0||(o.value=!0,l&&e(),r(),o.value&&(a=setInterval(e,d)))}if(n&&Ui&&u(),Ce(t)||typeof t=="function"){const d=ke(t,()=>{o.value&&Ui&&u()});$t(d)}return $t(s),{isActive:pd(o),pause:s,resume:u}}function i2(e,t,i={}){const{immediate:n=!0,immediateCallback:l=!1}=i,a=ee(!1);let o;function r(){o&&(clearTimeout(o),o=void 0)}function s(){a.value=!1,r()}function u(...d){l&&e(),r(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=void 0,e(...d)},se(t))}return n&&(a.value=!0,Ui&&u()),$t(s),{isPending:pd(a),start:u,stop:s}}function Wi(e=!1,t={}){const{truthyValue:i=!0,falsyValue:n=!1}=t,l=Ce(e),a=ee(e);function o(r){if(arguments.length)return a.value=r,a.value;{const s=se(i);return a.value=a.value===s?se(n):s,a.value}}return l?o:[a,o]}function ze(e,t,i){return ke(e,t,{...i,immediate:!0})}const qe=Ui?window:void 0,vr=Ui?window.document:void 0,Ku=Ui?window.navigator:void 0;function He(e){var t;const i=se(e);return(t=i?.$el)!=null?t:i}function re(...e){const t=[],i=()=>{t.forEach(r=>r()),t.length=0},n=(r,s,u,d)=>(r.addEventListener(s,u,d),()=>r.removeEventListener(s,u,d)),l=E(()=>{const r=Un(se(e[0])).filter(s=>s!=null);return r.every(s=>typeof s!="string")?r:void 0}),a=ze(()=>{var r,s;return[(s=(r=l.value)==null?void 0:r.map(u=>He(u)))!=null?s:[qe].filter(u=>u!=null),Un(se(l.value?e[1]:e[0])),Un(kt(l.value?e[2]:e[1])),se(l.value?e[3]:e[2])]},([r,s,u,d])=>{if(i(),!r?.length||!s?.length||!u?.length)return;const p=Wg(d)?{...d}:d;t.push(...r.flatMap(h=>s.flatMap(m=>u.map(g=>n(h,m,g,p)))))},{flush:"post"}),o=()=>{a(),i()};return $t(i),o}let ic=!1;function n2(e,t,i={}){const{window:n=qe,ignore:l=[],capture:a=!0,detectIframe:o=!1,controls:r=!1}=i;if(!n)return r?{stop:tt,cancel:tt,trigger:tt}:tt;if(To&&!ic){ic=!0;const y={passive:!0};Array.from(n.document.body.children).forEach(A=>A.addEventListener("click",tt,y)),n.document.documentElement.addEventListener("click",tt,y)}let s=!0;const u=y=>se(l).some(A=>{if(typeof A=="string")return Array.from(n.document.querySelectorAll(A)).some(w=>w===y.target||y.composedPath().includes(w));{const w=He(A);return w&&(y.target===w||y.composedPath().includes(w))}});function d(y){const A=se(y);return A&&A.$.subTree.shapeFlag===16}function p(y,A){const w=se(y),v=w.$.subTree&&w.$.subTree.children;return v==null||!Array.isArray(v)?!1:v.some(T=>T.el===A.target||A.composedPath().includes(T.el))}const h=y=>{const A=He(e);if(y.target!=null&&!(!(A instanceof Element)&&d(e)&&p(e,y))&&!(!A||A===y.target||y.composedPath().includes(A))){if("detail"in y&&y.detail===0&&(s=!u(y)),!s){s=!0;return}t(y)}};let m=!1;const g=[re(n,"click",y=>{m||(m=!0,setTimeout(()=>{m=!1},0),h(y))},{passive:!0,capture:a}),re(n,"pointerdown",y=>{const A=He(e);s=!u(y)&&!!(A&&!y.composedPath().includes(A))},{passive:!0}),o&&re(n,"blur",y=>{setTimeout(()=>{var A;const w=He(e);((A=n.document.activeElement)==null?void 0:A.tagName)==="IFRAME"&&!w?.contains(n.document.activeElement)&&t(y)},0)},{passive:!0})].filter(Boolean),b=()=>g.forEach(y=>y());return r?{stop:b,cancel:()=>{s=!1},trigger:y=>{s=!0,h(y),s=!1}}:b}function l2(){const e=ee(!1),t=Qt();return t&&de(()=>{e.value=!0},t),e}function Ji(e){const t=l2();return E(()=>(t.value,!!e()))}function _r(e,t,i={}){const{window:n=qe,...l}=i;let a;const o=Ji(()=>n&&"MutationObserver"in n),r=()=>{a&&(a.disconnect(),a=void 0)},s=E(()=>{const h=se(e),m=Un(h).map(He).filter(qg);return new Set(m)}),u=ke(s,h=>{r(),o.value&&h.size&&(a=new MutationObserver(t),h.forEach(m=>a.observe(m,l)))},{immediate:!0,flush:"post"}),d=()=>a?.takeRecords(),p=()=>{u(),r()};return $t(p),{isSupported:o,stop:p,takeRecords:d}}function a2(e,t,i={}){const{window:n=qe,document:l=n?.document,flush:a="sync"}=i;if(!n||!l)return tt;let o;const r=d=>{o?.(),o=d},s=da(()=>{const d=He(e);if(d){const{stop:p}=_r(l,h=>{h.map(g=>[...g.removedNodes]).flat().some(g=>g===d||g.contains(d))&&t(h)},{window:n,childList:!0,subtree:!0});r(p)}},{flush:a}),u=()=>{s(),r()};return $t(u),u}function o2(e,t={}){const{immediate:i=!0,fpsLimit:n=void 0,window:l=qe,once:a=!1}=t,o=ee(!1),r=E(()=>n?1e3/se(n):null);let s=0,u=null;function d(m){if(!o.value||!l)return;s||(s=m);const g=m-s;if(r.value&&g<r.value){u=l.requestAnimationFrame(d);return}if(s=m,e({delta:g,timestamp:m}),a){o.value=!1,u=null;return}u=l.requestAnimationFrame(d)}function p(){!o.value&&l&&(o.value=!0,s=0,u=l.requestAnimationFrame(d))}function h(){o.value=!1,u!=null&&l&&(l.cancelAnimationFrame(u),u=null)}return i&&p(),$t(h),{isActive:Mt(o),pause:h,resume:p}}const r2=Symbol("vueuse-ssr-width");function s2(){const e=Dd()?zg(r2,null):null;return typeof e=="number"?e:void 0}function br(e,t={}){const{window:i=qe,ssrWidth:n=s2()}=t,l=Ji(()=>i&&"matchMedia"in i&&typeof i.matchMedia=="function"),a=ee(typeof n=="number"),o=ee(),r=ee(!1),s=u=>{r.value=u.matches};return da(()=>{if(a.value){a.value=!l.value;const u=se(e).split(",");r.value=u.some(d=>{const p=d.includes("not all"),h=d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),m=d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let g=!!(h||m);return h&&g&&(g=n>=tc(h[1])),m&&g&&(g=n<=tc(m[1])),p?!g:g});return}l.value&&(o.value=i.matchMedia(se(e)),r.value=o.value.matches)}),re(o,"change",s,{passive:!0}),E(()=>r.value)}function nc(e,t={}){const{controls:i=!1,navigator:n=Ku}=t,l=Ji(()=>n&&"permissions"in n),a=ee(),o=typeof e=="string"?{name:e}:e,r=ee(),s=()=>{var d,p;r.value=(p=(d=a.value)==null?void 0:d.state)!=null?p:"prompt"};re(a,"change",s,{passive:!0});const u=Qg(async()=>{if(l.value){if(!a.value)try{a.value=await n.permissions.query(o)}catch{a.value=void 0}finally{s()}if(i)return me(a.value)}});return u(),i?{state:r,isSupported:l,query:u}:r}function c2(e={}){const{navigator:t=Ku,read:i=!1,source:n,copiedDuring:l=1500,legacy:a=!1}=e,o=Ji(()=>t&&"clipboard"in t),r=nc("clipboard-read"),s=nc("clipboard-write"),u=E(()=>o.value||a),d=ee(""),p=ee(!1),h=i2(()=>p.value=!1,l,{immediate:!1});async function m(){let w=!(o.value&&A(r.value));if(!w)try{d.value=await t.clipboard.readText()}catch{w=!0}w&&(d.value=y())}u.value&&i&&re(["copy","cut"],m,{passive:!0});async function g(w=se(n)){if(u.value&&w!=null){let v=!(o.value&&A(s.value));if(!v)try{await t.clipboard.writeText(w)}catch{v=!0}v&&b(w),d.value=w,p.value=!0,h.start()}}function b(w){const v=document.createElement("textarea");v.value=w??"",v.style.position="absolute",v.style.opacity="0",document.body.appendChild(v),v.select(),document.execCommand("copy"),v.remove()}function y(){var w,v,T;return(T=(v=(w=document?.getSelection)==null?void 0:w.call(document))==null?void 0:v.toString())!=null?T:""}function A(w){return w==="granted"||w==="prompt"}return{isSupported:u,text:d,copied:p,copy:g}}const Ol=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Dl="__vueuse_ssr_handlers__",d2=u2();function u2(){return Dl in Ol||(Ol[Dl]=Ol[Dl]||{}),Ol[Dl]}function p2(e,t){return d2[e]||t}function h2(e){return br("(prefers-color-scheme: dark)",e)}function m2(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const f2={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},lc="vueuse-storage";function Qi(e,t,i,n={}){var l;const{flush:a="pre",deep:o=!0,listenToStorageChanges:r=!0,writeDefaults:s=!0,mergeDefaults:u=!1,shallow:d,window:p=qe,eventFilter:h,onError:m=U=>{console.error(U)},initOnMounted:g}=n,b=(d?ee:Q)(typeof t=="function"?t():t),y=E(()=>se(e));if(!i)try{i=p2("getDefaultStorage",()=>{var U;return(U=qe)==null?void 0:U.localStorage})()}catch(U){m(U)}if(!i)return b;const A=se(t),w=m2(A),v=(l=n.serializer)!=null?l:f2[w],{pause:T,resume:C}=Zg(b,U=>B(U),{flush:a,deep:o,eventFilter:h});ke(y,()=>O(),{flush:a});let N=!1;const M=U=>{g&&!N||O(U)},H=U=>{g&&!N||J(U)};p&&r&&(i instanceof Storage?re(p,"storage",M,{passive:!0}):re(p,lc,H)),g?Ki(()=>{N=!0,O()}):O();function L(U,Z){if(p){const V={key:y.value,oldValue:U,newValue:Z,storageArea:i};p.dispatchEvent(i instanceof Storage?new StorageEvent("storage",V):new CustomEvent(lc,{detail:V}))}}function B(U){try{const Z=i.getItem(y.value);if(U==null)L(Z,null),i.removeItem(y.value);else{const V=v.write(U);Z!==V&&(i.setItem(y.value,V),L(Z,V))}}catch(Z){m(Z)}}function F(U){const Z=U?U.newValue:i.getItem(y.value);if(Z==null)return s&&A!=null&&i.setItem(y.value,v.write(A)),A;if(!U&&u){const V=v.read(Z);return typeof u=="function"?u(V,A):w==="object"&&!Array.isArray(V)?{...A,...V}:V}else return typeof Z!="string"?Z:v.read(Z)}function O(U){if(!(U&&U.storageArea!==i)){if(U&&U.key==null){b.value=A;return}if(!(U&&U.key!==y.value)){T();try{const Z=v.write(b.value);(U===void 0||U?.newValue!==Z)&&(b.value=F(U))}catch(Z){m(Z)}finally{U?xt(C):C()}}}}function J(U){O(U.detail)}return b}function ya(e,t,i={}){const{window:n=qe,...l}=i;let a;const o=Ji(()=>n&&"ResizeObserver"in n),r=()=>{a&&(a.disconnect(),a=void 0)},s=E(()=>{const p=se(e);return Array.isArray(p)?p.map(h=>He(h)):[He(p)]}),u=ke(s,p=>{if(r(),o.value&&n){a=new ResizeObserver(t);for(const h of p)h&&a.observe(h,l)}},{immediate:!0,flush:"post"}),d=()=>{r(),u()};return $t(d),{isSupported:o,stop:d}}function g2(e,t={}){const{delayEnter:i=0,delayLeave:n=0,triggerOnRemoval:l=!1,window:a=qe}=t,o=ee(!1);let r;const s=u=>{const d=u?i:n;r&&(clearTimeout(r),r=void 0),d?r=setTimeout(()=>o.value=u,d):o.value=u};return a&&(re(e,"mouseenter",()=>s(!0),{passive:!0}),re(e,"mouseleave",()=>s(!1),{passive:!0}),l&&a2(E(()=>He(e)),()=>s(!1))),o}function v2(e,t={width:0,height:0},i={}){const{window:n=qe,box:l="content-box"}=i,a=E(()=>{var p,h;return(h=(p=He(e))==null?void 0:p.namespaceURI)==null?void 0:h.includes("svg")}),o=ee(t.width),r=ee(t.height),{stop:s}=ya(e,([p])=>{const h=l==="border-box"?p.borderBoxSize:l==="content-box"?p.contentBoxSize:p.devicePixelContentBoxSize;if(n&&a.value){const m=He(e);if(m){const g=m.getBoundingClientRect();o.value=g.width,r.value=g.height}}else if(h){const m=Un(h);o.value=m.reduce((g,{inlineSize:b})=>g+b,0),r.value=m.reduce((g,{blockSize:b})=>g+b,0)}else o.value=p.contentRect.width,r.value=p.contentRect.height},i);Ki(()=>{const p=He(e);p&&(o.value="offsetWidth"in p?p.offsetWidth:t.width,r.value="offsetHeight"in p?p.offsetHeight:t.height)});const u=ke(()=>He(e),p=>{o.value=p?t.width:0,r.value=p?t.height:0});function d(){s(),u()}return{width:o,height:r,stop:d}}const ac=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function wa(e,t={}){const{document:i=vr,autoExit:n=!1}=t,l=E(()=>{var w;return(w=He(e))!=null?w:i?.documentElement}),a=ee(!1),o=E(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(w=>i&&w in i||l.value&&w in l.value)),r=E(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(w=>i&&w in i||l.value&&w in l.value)),s=E(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(w=>i&&w in i||l.value&&w in l.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(w=>i&&w in i),d=Ji(()=>l.value&&i&&o.value!==void 0&&r.value!==void 0&&s.value!==void 0),p=()=>u?i?.[u]===l.value:!1,h=()=>{if(s.value){if(i&&i[s.value]!=null)return i[s.value];{const w=l.value;if(w?.[s.value]!=null)return!!w[s.value]}}return!1};async function m(){if(!(!d.value||!a.value)){if(r.value)if(i?.[r.value]!=null)await i[r.value]();else{const w=l.value;w?.[r.value]!=null&&await w[r.value]()}a.value=!1}}async function g(){if(!d.value||a.value)return;h()&&await m();const w=l.value;o.value&&w?.[o.value]!=null&&(await w[o.value](),a.value=!0)}async function b(){await(a.value?m():g())}const y=()=>{const w=h();(!w||w&&p())&&(a.value=w)},A={capture:!1,passive:!0};return re(i,ac,y,A),re(()=>He(l),ac,y,A),Ki(y,!1),n&&$t(m),{isSupported:d,isFullscreen:a,enter:g,exit:m,toggle:b}}function Ga(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}const oc=1;function _2(e,t={}){const{throttle:i=0,idle:n=200,onStop:l=tt,onScroll:a=tt,offset:o={left:0,right:0,top:0,bottom:0},observe:r={mutation:!1},eventListenerOptions:s={capture:!1,passive:!0},behavior:u="auto",window:d=qe,onError:p=L=>{console.error(L)}}=t,h=typeof r=="boolean"?{mutation:r}:r,m=ee(0),g=ee(0),b=E({get(){return m.value},set(L){A(L,void 0)}}),y=E({get(){return g.value},set(L){A(void 0,L)}});function A(L,B){var F,O,J,U;if(!d)return;const Z=se(e);if(!Z)return;(J=Z instanceof Document?d.document.body:Z)==null||J.scrollTo({top:(F=se(B))!=null?F:y.value,left:(O=se(L))!=null?O:b.value,behavior:se(u)});const V=((U=Z?.document)==null?void 0:U.documentElement)||Z?.documentElement||Z;b!=null&&(m.value=V.scrollLeft),y!=null&&(g.value=V.scrollTop)}const w=ee(!1),v=Hi({left:!0,right:!1,top:!0,bottom:!1}),T=Hi({left:!1,right:!1,top:!1,bottom:!1}),C=L=>{w.value&&(w.value=!1,T.left=!1,T.right=!1,T.top=!1,T.bottom=!1,l(L))},N=ba(C,i+n),M=L=>{var B;if(!d)return;const F=((B=L?.document)==null?void 0:B.documentElement)||L?.documentElement||He(L),{display:O,flexDirection:J,direction:U}=getComputedStyle(F),Z=U==="rtl"?-1:1,V=F.scrollLeft;T.left=V<m.value,T.right=V>m.value;const le=Math.abs(V*Z)<=(o.left||0),K=Math.abs(V*Z)+F.clientWidth>=F.scrollWidth-(o.right||0)-oc;O==="flex"&&J==="row-reverse"?(v.left=K,v.right=le):(v.left=le,v.right=K),m.value=V;let ce=F.scrollTop;L===d.document&&!ce&&(ce=d.document.body.scrollTop),T.top=ce<g.value,T.bottom=ce>g.value;const rt=Math.abs(ce)<=(o.top||0),Xe=Math.abs(ce)+F.clientHeight>=F.scrollHeight-(o.bottom||0)-oc;O==="flex"&&J==="column-reverse"?(v.top=Xe,v.bottom=rt):(v.top=rt,v.bottom=Xe),g.value=ce},H=L=>{var B;if(!d)return;const F=(B=L.target.documentElement)!=null?B:L.target;M(F),w.value=!0,N(L),a(L)};return re(e,"scroll",i?Yu(H,i,!0,!1):H,s),Ki(()=>{try{const L=se(e);if(!L)return;M(L)}catch(L){p(L)}}),h?.mutation&&e!=null&&e!==d&&e!==document&&_r(e,()=>{const L=se(e);L&&M(L)},{attributes:!0,childList:!0,subtree:!0}),re(e,"scrollend",C,s),{x:b,y,isScrolling:w,arrivedState:v,directions:T,measure(){const L=se(e);d&&L&&M(L)}}}function b2(e,t,i={}){const{window:n=qe}=i;return Qi(e,t,n?.localStorage,i)}function y2(e={}){const{controls:t=!1,interval:i="requestAnimationFrame",immediate:n=!0}=e,l=Q(new Date),a=()=>l.value=new Date,o=i==="requestAnimationFrame"?o2(a,{immediate:n}):t2(a,i,{immediate:n});return t?{now:l,...o}:l}function w2(e={}){const{window:t=qe}=e;if(!t)return ee(["en"]);const i=t.navigator,n=ee(i.languages);return re(t,"languagechange",()=>{n.value=i.languages},{passive:!0}),n}function k2(e,t=tt,i={}){const{immediate:n=!0,manual:l=!1,type:a="text/javascript",async:o=!0,crossOrigin:r,referrerPolicy:s,noModule:u,defer:d,document:p=vr,attrs:h={},nonce:m=void 0}=i,g=ee(null);let b=null;const y=v=>new Promise((T,C)=>{const N=B=>(g.value=B,T(B),B);if(!p){T(!1);return}let M=!1,H=p.querySelector(`script[src="${se(e)}"]`);H?H.hasAttribute("data-loaded")&&N(H):(H=p.createElement("script"),H.type=a,H.async=o,H.src=se(e),d&&(H.defer=d),r&&(H.crossOrigin=r),u&&(H.noModule=u),s&&(H.referrerPolicy=s),m&&(H.nonce=m),Object.entries(h).forEach(([B,F])=>H?.setAttribute(B,F)),M=!0);const L={passive:!0};re(H,"error",B=>C(B),L),re(H,"abort",B=>C(B),L),re(H,"load",()=>{H.setAttribute("data-loaded","true"),t(H),N(H)},L),M&&(H=p.head.appendChild(H)),v||N(H)}),A=(v=!0)=>(b||(b=y(v)),b),w=()=>{if(!p)return;b=null,g.value&&(g.value=null);const v=p.querySelector(`script[src="${se(e)}"]`);v&&p.head.removeChild(v)};return n&&!l&&Ki(A),l||e2(w),{scriptTag:g,load:A,unload:w}}function Ju(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const i=e.parentNode;return!i||i.tagName==="BODY"?!1:Ju(i)}}function E2(e){const t=e||window.event,i=t.target;return Ju(i)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}const Ya=new WeakMap;function fl(e,t=!1){const i=ee(t);let n=null,l="";ke(Uu(e),r=>{const s=Ga(se(r));if(s){const u=s;if(Ya.get(u)||Ya.set(u,u.style.overflow),u.style.overflow!=="hidden"&&(l=u.style.overflow),u.style.overflow==="hidden")return i.value=!0;if(i.value)return u.style.overflow="hidden"}},{immediate:!0});const a=()=>{const r=Ga(se(e));!r||i.value||(To&&(n=re(r,"touchmove",s=>{E2(s)},{passive:!1})),r.style.overflow="hidden",i.value=!0)},o=()=>{const r=Ga(se(e));!r||!i.value||(To&&n?.(),r.style.overflow=l,Ya.delete(r),i.value=!1)};return $t(o),E({get(){return i.value},set(r){r?a():o()}})}function yr(e,t,i={}){const{window:n=qe}=i;return Qi(e,t,n?.sessionStorage,i)}let A2=0;function T2(e,t={}){const i=ee(!1),{document:n=vr,immediate:l=!0,manual:a=!1,id:o=`vueuse_styletag_${++A2}`}=t,r=ee(e);let s=()=>{};const u=()=>{if(!n)return;const p=n.getElementById(o)||n.createElement("style");p.isConnected||(p.id=o,t.nonce&&(p.nonce=t.nonce),t.media&&(p.media=t.media),n.head.appendChild(p)),!i.value&&(s=ke(r,h=>{p.textContent=h},{immediate:!0}),i.value=!0)},d=()=>{!n||!i.value||(s(),n.head.removeChild(n.getElementById(o)),i.value=!1)};return l&&!a&&Ki(u),a||$t(d),{id:o,css:r,unload:d,load:u,isLoaded:Mt(i)}}function x2(e={}){const{window:t=qe,...i}=e;return _2(t,i)}function L2(e={}){const{window:t=qe,initialWidth:i=Number.POSITIVE_INFINITY,initialHeight:n=Number.POSITIVE_INFINITY,listenOrientation:l=!0,includeScrollbar:a=!0,type:o="inner"}=e,r=ee(i),s=ee(n),u=()=>{if(t)if(o==="outer")r.value=t.outerWidth,s.value=t.outerHeight;else if(o==="visual"&&t.visualViewport){const{width:p,height:h,scale:m}=t.visualViewport;r.value=Math.round(p*m),s.value=Math.round(h*m)}else a?(r.value=t.innerWidth,s.value=t.innerHeight):(r.value=t.document.documentElement.clientWidth,s.value=t.document.documentElement.clientHeight)};u(),Ki(u);const d={passive:!0};if(re("resize",u,d),t&&o==="visual"&&t.visualViewport&&re(t.visualViewport,"resize",u,d),l){const p=br("(orientation: portrait)");ke(p,()=>u())}return{width:r,height:s}}const S2=(e,t)=>{re("keydown",n=>{const l=se(e);l?.length&&Vg(n,l)&&!$g(n.target)&&(n.preventDefault(),t())})},P2=()=>{const e=Y1();return E(()=>Object.keys(e.value))},Qu=(e=!0)=>{const{frontmatter:t,page:i}=jt();return E(()=>t.value.contributors===!1||!se(e)?[]:i.value.git.contributors??[])};var rc={"/":{contributors:"贡献者",changelog:"更新日志",timeOn:"于",viewChangelog:"查看所有更新日志",latestUpdateAt:"最近更新"},"/en/":{contributors:"Contributors",changelog:"Changelog",timeOn:"on",viewChangelog:"View All Changelog",latestUpdateAt:"Last Updated"}};const C2=typeof rc>"u"?{}:rc,Xu=()=>gt(C2),O2=(e=!0)=>{const{lang:t,page:i}=jt(),n=Xu();return E(()=>{if(!se(e))return null;const l=i.value.git?.updatedTime??i.value.git?.changelog?.[0].time;if(!l)return null;const a=new Date(l),o=new Intl.DateTimeFormat(t.value,{dateStyle:"short",timeStyle:"short"}).format(l);return{date:a,text:o,iso:a.toISOString(),locale:n.value.latestUpdateAt}})},D2=({level:e=2,text:t,anchor:i})=>c(`h${e||2}`,{id:i,tabindex:"-1"},c("a",{href:`#${i}`,class:"header-anchor"},c("span",t))),I2=({name:e,url:t,avatar:i})=>c(t?"a":"span",{href:t,target:"_blank",rel:"noreferrer",class:"vp-contributor"},[i?c("img",{src:i,alt:"",class:"vp-contributor-avatar"}):null,c("span",{class:"vp-contributor-name"},e)]),R2=D({name:"GitContributors",props:{title:String,headerLevel:{type:Number,default:2}},setup(e){const t=Qu(),i=Xu();return()=>t.value.length?[c(D2,{level:e.headerLevel,anchor:"doc-contributors",text:e.title||i.value.contributors}),c("div",{class:"vp-contributors"},t.value.map(n=>c(I2,n)))]:null}}),B2={enhance:({app:e})=>{e.component("GitContributors",R2)}},$2=Object.freeze(Object.defineProperty({__proto__:null,default:B2},Symbol.toStringTag,{value:"Module"})),M2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),V2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));var wr={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":"#8DA1AC","line-color":"#8DA1AC","element-color":"black",fill:"white","yes-text":"Yes","no-text":"No","arrow-end":"block",scale:1},F2={...wr,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#595959","line-width":0},end:{class:"end-element","font-color":"#fff",fill:"#595959","line-width":0},operation:{class:"operation-element","font-color":"#fff",fill:"#1890ff","line-width":0},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#1890ff","line-width":0},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#FF485E","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FF485E","line-width":0},parallel:{class:"parallel-element","font-color":"#fff",fill:"#1890ff","line-width":0}}},j2={...wr,"line-width":1,symbols:{start:{class:"start-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},end:{class:"end-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},operation:{class:"operation-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},inputoutput:{class:"inputoutput-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},subroutine:{class:"subroutine-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},condition:{class:"condition-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},parallel:{class:"parallel-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"}}},N2={...wr,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#2F495F","line-width":0},end:{class:"end-element","font-color":"#fff",fill:"#2F495F","line-width":0},operation:{class:"operation-element","font-color":"#fff",fill:"#00BC7D","line-width":0},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#EB4D5D","line-width":0},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#937AC4","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FFB500","line-width":0},parallel:{class:"parallel-element","font-color":"#fff",fill:"#2F495F","line-width":0}}};const sc={ant:F2,vue:N2,pie:j2};var H2=D({name:"FlowChart",props:{code:{type:String,required:!0},preset:{type:String,default:"vue"}},setup(e){const t=cl(),{code:i,preset:n}=Tm(e),l=ee(),a=Q(!1),o=Q(1);let r=null;const s=p=>p<419?.8:p>1280?1:.9;re("resize",ba(()=>{if(r){const p=s(window.innerWidth);o.value!==p&&(o.value=p,r.draw(t,{...sc[e.preset],scale:p}))}},100));const u=()=>{r?.clean(),r=null},d=async()=>{const{parse:p}=await f(async()=>{const{parse:h}=await import("./flowchart-G1WAoCnn.js");return{parse:h}},[]);r=p(el(i.value)),o.value=s(window.innerWidth),a.value=!0,r.draw(t,{...sc[e.preset],scale:o.value})};return Zt(async p=>{p==="mounted"&&await d()}),de(()=>{}),Vt(u),()=>[a.value?null:c(Sn,{class:"flowchart-loading",height:192}),c("div",{ref:l,class:["flowchart-wrapper",e.preset],id:t,style:{display:a.value?"block":"none"}})]}});let z2={};const q2=()=>z2,U2=e=>`data:image/svg+xml;charset=utf8,${e.replace(/<br>/g,"<br />").replace(/%/g,"%25").replace(/"/g,"%22").replace(/'/g,"%27").replace(/&/g,"%26").replace(/#/g,"%23").replace(/{/g,"%7B").replace(/}/g,"%7D").replace(/</g,"%3C").replace(/>/g,"%3E")}`,W2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1316 1024" fill="currentColor"><path d="M658.286 0C415.89 0 0 297.106 0 512c0 214.82 415.89 512 658.286 512 242.322 0 658.285-294.839 658.285-512S900.608 0 658.286 0zm0 877.714c-161.573 0-512-221.769-512-365.714 0-144.018 350.427-365.714 512-365.714 161.572 0 512 217.16 512 365.714s-350.428 365.714-512 365.714z"/><path d="M658.286 292.571a219.429 219.429 0 1 0 0 438.858 219.429 219.429 0 0 0 0-438.858zm0 292.572a73.143 73.143 0 1 1 0-146.286 73.143 73.143 0 0 1 0 146.286z"/></svg>',G2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor"><path d="M828.976 894.125H190.189c-70.55 0-127.754-57.185-127.754-127.753V606.674c0-17.634 14.31-31.933 31.933-31.933h63.889c17.634 0 31.932 14.299 31.932 31.933v95.822c0 35.282 28.596 63.877 63.877 63.877h511.033c35.281 0 63.877-28.595 63.877-63.877v-95.822c0-17.634 14.298-31.933 31.943-31.933h63.878c17.635 0 31.933 14.299 31.933 31.933v159.7c0 70.566-57.191 127.751-127.754 127.751zM249.939 267.51c12.921-12.92 33.885-12.92 46.807 0l148.97 148.972V94.893c0-17.634 14.302-31.947 31.934-31.947h63.876c17.638 0 31.946 14.313 31.946 31.947v321.589l148.97-148.972c12.922-12.92 33.876-12.92 46.797 0l46.814 46.818c12.922 12.922 12.922 33.874 0 46.807L552.261 624.93c-1.14 1.138-21.664 13.684-42.315 13.693-20.877.01-41.88-12.542-43.021-13.693L203.122 361.135c-12.923-12.934-12.923-33.885 0-46.807l46.817-46.818z"/></svg>',en={useMaxWidth:!1};var Y2=D({name:"Mermaid",props:{code:{type:String,required:!0},title:String},setup(e){const t=cl(),i=Ng(),{themeVariables:n,...l}=q2(),a=ee(),o=E(()=>el(e.code)),r=Q(""),s=async()=>{const{default:p}=await f(async()=>{const{default:h}=await import("./mermaid.esm.min-D0AP4tmO.js").then(m=>m.bF);return{default:h}},[]);p.initialize({theme:i.value?"dark":"default",themeVariables:{dark:i.value,...hu(n)?n(i.value):n},flowchart:en,sequence:en,journey:en,gantt:en,er:en,pie:en,...l,startOnLoad:!1}),r.value=(await p.render(t,o.value)).svg},u=()=>{const{body:p}=document,h=document.createElement("div");h.classList.add("mermaid-preview"),h.innerHTML=r.value,p.appendChild(h),h.addEventListener("click",()=>{p.removeChild(h)})},d=()=>{const p=U2(r.value),h=document.createElement("a");h.setAttribute("href",p),h.setAttribute("download",`${e.title?el(e.title):t}.svg`),h.click()};return de(()=>{ze(i,s,{flush:"post"})}),()=>[c("div",{class:"mermaid-actions"},[c("button",{class:"preview-button",title:"preview",innerHTML:W2,onClick:u}),c("button",{class:"download-button",title:"download",innerHTML:G2,onClick:d})]),c("div",{ref:a,class:"mermaid-wrapper"},r.value?c("div",{class:"mermaid-content",innerHTML:r.value}):c(Sn,{class:"mermaid-loading",height:96}))]}});const K2=Qe({enhance:({app:e})=>{e.component("FlowChart",H2),e.component("Mermaid",Y2)}}),J2=Object.freeze(Object.defineProperty({__proto__:null,default:K2},Symbol.toStringTag,{value:"Module"})),Q2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),X2=Qe({setup(){re("beforeprint",()=>{document.querySelectorAll("details").forEach(e=>{e.open=!0})},{passive:!0})}}),Z2=Object.freeze(Object.defineProperty({__proto__:null,default:X2},Symbol.toStringTag,{value:"Module"})),ev=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));var tv=D({name:"VPPreview",props:{title:String,locales:{type:Object,default:()=>({})}},slots:Object,setup(e,{slots:t}){const i=`vp-preview-${cl()}`,n=gt(e.locales),[l,a]=Wi(!1),o=ee(),r=Q("0"),s=()=>{a(),r.value=l.value?`${o.value.clientHeight}px`:"0"};let u=!1;return re("beforeprint",()=>{u=l.value,a(!0)}),re("afterprint",()=>{u||a()}),ya(o,()=>{l.value&&(r.value=`${o.value.clientHeight}px`)}),()=>c("div",{class:{"vp-preview":!0,"is-expanded":l.value}},[c("div",{class:"vp-preview-showcase"},t.content()),c("div",{class:"vp-preview-control"},[e.title?c("div",{class:"vp-preview-title"},decodeURIComponent(e.title)):null,c("button",{type:"button",class:"vp-preview-toggle-button",title:n.value.toggle,"aria-label":n.value.toggle,"aria-controls":i,"aria-expanded":l.value,onClick:()=>{s()}},c("div",{class:"vp-preview-toggle-icon"}))]),c("div",{id:i,class:"vp-preview-code-wrapper",style:{height:r.value},"data-allow-mismatch":"attribute"},c("div",{class:"vp-preview-code",ref:o},t.code()))])}}),iv={"/":{toggle:"切换代码"},"/en/":{toggle:"Toggle code"}},nv=Qe({enhance:({app:e})=>{e.component("VPPreview",(t,{slots:i})=>c(tv,{locales:iv,...t},i))}});const lv=Object.freeze(Object.defineProperty({__proto__:null,default:nv},Symbol.toStringTag,{value:"Module"})),av="VUEPRESS_CODE_TAB_STORE",Il=Qi(av,{}),ov=D({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},tabId:String},slots:Object,setup(e,{slots:t}){let i=e.data.map(()=>cl());const n=Q(e.active),l=ee([]),a=()=>{e.tabId&&(Il.value[e.tabId]=e.data[n.value].id)},o=(d=n.value)=>{n.value=d<l.value.length-1?d+1:0,l.value[n.value].focus()},r=(d=n.value)=>{n.value=d>0?d-1:l.value.length-1,l.value[n.value].focus()},s=(d,p)=>{d.key===" "||d.key==="Enter"?(d.preventDefault(),n.value=p):d.key==="ArrowRight"?(d.preventDefault(),o()):d.key==="ArrowLeft"&&(d.preventDefault(),r()),e.tabId&&(Il.value[e.tabId]=e.data[n.value].id)},u=()=>{if(e.tabId){const d=e.data.findIndex(({id:p})=>Il.value[e.tabId]===p);if(d!==-1)return d}return e.active};return de(()=>{n.value=u(),ke(()=>e.tabId&&Il.value[e.tabId],(d,p)=>{if(e.tabId&&d!==p){const h=e.data.findIndex(({id:m})=>m===d);h!==-1&&(n.value=h)}})}),()=>e.data.length?c("div",{class:"vp-code-tabs"},[c("div",{class:"vp-code-tabs-nav",role:"tablist"},e.data.map(({id:d},p)=>{const h=p===n.value;return c("button",{type:"button",ref:m=>{m&&(l.value[p]=m)},class:["vp-code-tab-nav",{active:h}],role:"tab","aria-controls":i[p],"aria-selected":h,onClick:()=>{n.value=p,a()},onKeydown:m=>{s(m,p)}},t[`title${p}`]({value:d,isActive:h}))})),e.data.map(({id:d},p)=>{const h=p===n.value;return c("div",{class:["vp-code-tab",{active:h}],id:i[p],role:"tabpanel","aria-expanded":h},[c("div",{class:"vp-code-tab-title"},t[`title${p}`]({value:d,isActive:h})),t[`tab${p}`]({value:d,isActive:h})])})]):null}}),rv="VUEPRESS_TAB_STORE",Ka=Qi(rv,{}),sv=D({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},tabId:String},slots:Object,setup(e,{slots:t}){let i=e.data.map(()=>cl());const n=Q(e.active),l=ee([]),a=()=>{e.tabId&&(Ka.value[e.tabId]=e.data[n.value].id)},o=(d=n.value)=>{n.value=d<l.value.length-1?d+1:0,l.value[n.value].focus()},r=(d=n.value)=>{n.value=d>0?d-1:l.value.length-1,l.value[n.value].focus()},s=(d,p)=>{d.key===" "||d.key==="Enter"?(d.preventDefault(),n.value=p):d.key==="ArrowRight"?(d.preventDefault(),o()):d.key==="ArrowLeft"&&(d.preventDefault(),r()),a()},u=()=>{if(e.tabId){const d=e.data.findIndex(({id:p})=>Ka.value[e.tabId]===p);if(d!==-1)return d}return e.active};return de(()=>{n.value=u(),ke(()=>e.tabId&&Ka.value[e.tabId],(d,p)=>{if(e.tabId&&d!==p){const h=e.data.findIndex(({id:m})=>m===d);h!==-1&&(n.value=h)}})}),()=>e.data.length?c("div",{class:"vp-tabs"},[c("div",{class:"vp-tabs-nav",role:"tablist"},e.data.map(({id:d},p)=>{const h=p===n.value;return c("button",{type:"button",ref:m=>{m&&(l.value[p]=m)},class:["vp-tab-nav",{active:h}],role:"tab","aria-controls":i[p],"aria-selected":h,onClick:()=>{n.value=p,a()},onKeydown:m=>{s(m,p)}},t[`title${p}`]({value:d,isActive:h}))})),e.data.map(({id:d},p)=>{const h=p===n.value;return c("div",{class:["vp-tab",{active:h}],id:i[p],role:"tabpanel","aria-expanded":h},[c("div",{class:"vp-tab-title"},t[`title${p}`]({value:d,isActive:h})),t[`tab${p}`]({value:d,isActive:h})])})]):null}}),cv={enhance:({app:e})=>{e.component("CodeTabs",ov),e.component("Tabs",sv)}},dv=Object.freeze(Object.defineProperty({__proto__:null,default:cv},Symbol.toStringTag,{value:"Module"})),uv='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',pv='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>';var hv={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"};const Ja=hv,cc={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},mv=(e,t,i)=>{const n=document.createElement(e);return Lt(t)&&ft(t).forEach(l=>{if(l.indexOf("data"))n[l]=t[l];else{const a=l.replace("data","");n.dataset[a]=t[l]}}),n},kr=e=>({...Ja,...e,jsLib:Array.from(new Set([Ja.jsLib,e.jsLib??[]].flat())),cssLib:Array.from(new Set([Ja.cssLib,e.cssLib??[]].flat()))}),_n=(e,t)=>{if(_a(e[t]))return e[t];const i=new Promise(n=>{const l=document.createElement("script");l.src=t,document.querySelector("body")?.appendChild(l),l.onload=()=>{n()}});return e[t]=i,i},fv=(e,t)=>{if(t.css&&Array.from(e.childNodes).every(i=>i.nodeName!=="STYLE")){const i=mv("style",{innerHTML:t.css});e.appendChild(i)}},gv=(e,t,i)=>{const n=i.getScript();if(n&&Array.from(t.childNodes).every(l=>l.nodeName!=="SCRIPT")){const l=document.createElement("script");l.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e} .vp-code-demo-display').shadowRoot;
${n}}`)),t.appendChild(l)}},vv=["html","js","css"],_v=e=>{const t=ft(e),i={html:[],js:[],css:[],isLegal:!1};return vv.forEach(n=>{const l=t.filter(a=>cc[n].types.includes(a));if(l.length){const a=l[0];i[n]=[e[a].replace(/^\n|\n$/g,""),cc[n].map[a]??a]}}),i.isLegal=(!i.html.length||i.html[1]==="none")&&(!i.js.length||i.js[1]==="none")&&(!i.css.length||i.css[1]==="none"),i},Zu=e=>e.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),ep=e=>`<div id="app">
${Zu(e)}
</div>`,bv=e=>`${e.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,yv=e=>e.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),tp=e=>`(function(exports){var module={};module.exports=exports;${e};return module.exports.__esModule?exports.default:module.exports;})({})`,wv=(e,t)=>{const i=kr(t),n=e.js[0]??"";return{...i,html:Zu(e.html[0]??""),js:n,css:e.css[0]??"",isLegal:e.isLegal,getScript:()=>i.useBabel?window.Babel?.transform(n,{presets:["es2015"]})?.code??"":n}},kv=/<template>([\s\S]+)<\/template>/u,Ev=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,Av=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,Tv=(e,t)=>{const i=kr(t),n=e.html[0]??"",l=kv.exec(n),a=Ev.exec(n),o=Av.exec(n),r=l?.[1].replace(/^\n|\n$/g,"")??"",[s="",u=""]=a?[a[4].replace(/^\n|\n$/g,""),a[3]]:[],[d="",p=""]=o?[o[4].replace(/^\n|\n$/g,""),o[3]]:[],h=u===""&&(p===""||p==="css");return{...i,html:ep(r),js:yv(s),css:d,isLegal:h,jsLib:[i.vue,...i.jsLib],getScript:()=>{const m=t.useBabel?window.Babel?.transform(s,{presets:["es2015"]})?.code??"":s.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${tp(m)};appOptions.template=\`${r.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},xv=(e,t)=>{const i=kr(t),n=e.js[0]??"";return{...i,html:ep(""),js:bv(n),css:e.css[0]??e.js[0]?.replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim()??"",isLegal:e.isLegal,jsLib:[i.react,i.reactDOM,...i.jsLib],jsx:!0,getScript:()=>{const l=window.Babel?.transform(n,{presets:["es2015","react"]})?.code??"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${tp(l)}))`}}},bn={},Lv=e=>Promise.all([_n(bn,e.babel),_n(bn,e.react),_n(bn,e.reactDOM)]),Sv=e=>{const t=[_n(bn,e.vue)];return e.useBabel&&t.push(_n(bn,e.babel)),Promise.all(t)},Pv=e=>e.useBabel?_n(bn,e.babel):Promise.resolve();var Cv=D({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:String,config:String,code:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){const[i,n]=Wi(!1),l=ee(),a=ee(),o=Q("0"),r=Q(!1),s=E(()=>JSON.parse(e.config?el(e.config):"{}")),u=E(()=>{const b=JSON.parse(el(e.code));return _v(b)}),d=E(()=>e.type==="react"?xv(u.value,s.value):e.type==="vue"?Tv(u.value,s.value):wv(u.value,s.value)),p=E(()=>d.value.isLegal),h=(b=!1)=>{const y=l.value.attachShadow({mode:"open"}),A=document.createElement("div");A.classList.add("code-demo-app"),y.appendChild(A),p.value?(b&&(A.innerHTML=d.value.html),fv(y,d.value),gv(e.id,y,d.value),o.value="0"):o.value="auto",r.value=!0},m=()=>{switch(e.type){case"react":return Lv(d.value).then(()=>{h()});case"vue":return Sv(d.value).then(()=>{h()});default:return Pv(d.value).then(()=>{h(!0)})}};let g=null;return re("beforeprint",()=>{n(!0)}),re("afterprint",()=>{g!==null&&n(g),g=null}),ya(a,()=>{i.value&&(o.value=`${a.value.clientHeight+14}px`)}),de(async()=>{await m()}),()=>c("div",{class:"vp-container vp-code-demo",id:e.id},[c("div",{class:"vp-container-header"},[d.value.isLegal?c("button",{type:"button",title:"toggle",class:["vp-code-demo-toggle-button",i.value?"down":"end"],onClick:()=>{o.value=i.value?"0":`${a.value.clientHeight+14}px`,n()}}):null,e.title?c("span",{class:"vp-container-title"},decodeURIComponent(e.title)):null,d.value.isLegal&&(d.value.jsfiddle??!0)?c("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[c("input",{type:"hidden",name:"html",value:d.value.html}),c("input",{type:"hidden",name:"js",value:d.value.js}),c("input",{type:"hidden",name:"css",value:d.value.css}),c("input",{type:"hidden",name:"wrap",value:"1"}),c("input",{type:"hidden",name:"panel_js",value:"3"}),c("input",{type:"hidden",name:"resources",value:[...d.value.cssLib,...d.value.jsLib].join(",")}),c("button",{type:"submit",class:"jsfiddle-button",innerHTML:pv,"aria-label":"JSFiddle","data-balloon-pos":"down"})]):null,!d.value.isLegal||(d.value.codepen??!0)?c("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[c("input",{type:"hidden",name:"data",value:JSON.stringify({html:d.value.html,js:d.value.js,css:d.value.css,js_external:d.value.jsLib.join(";"),css_external:d.value.cssLib.join(";"),layout:d.value.codepenLayout,html_pre_processor:u.value.html[1]??"none",js_pre_processor:u.value.js[1]??(d.value.jsx?"babel":"none"),css_pre_processor:u.value.css[1]??"none",editors:d.value.codepenEditors})}),c("button",{type:"submit",innerHTML:uv,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"down"})]):null]),r.value?null:c(Sn,{class:"vp-code-demo-loading"}),c("div",{ref:l,class:"vp-code-demo-display",style:{display:p.value&&r.value?"block":"none"}}),c("div",{class:"vp-code-demo-code-wrapper",style:{height:o.value}},c("div",{ref:a,class:"vp-code-demo-codes"},t.default()))])}}),Ov=D({name:"MdDemo",props:{id:{type:String,required:!0},title:String},slots:Object,setup(e,{slots:t}){const[i,n]=Wi(!1),l=ee(),a=Q("0");let o=null;return re("beforeprint",()=>{n(!0)}),re("afterprint",()=>{o!==null&&n(o),o=null}),ya(l,()=>{i.value&&(a.value=`${l.value.clientHeight+14}px`)}),()=>c("div",{class:"vp-container vp-md-demo",id:e.id},[c("div",{class:"vp-container-header"},[c("button",{type:"button",title:"toggle",class:["vp-md-demo-toggle-button",i.value?"down":"end"],onClick:()=>{a.value=i.value?"0":`${l.value.clientHeight+14}px`,n()}}),e.title?c("div",{class:"vp-container-title"},decodeURIComponent(e.title)):null]),c("div",{class:"vp-md-demo-display"},t.default()),c("div",{class:"vp-md-demo-code-wrapper",style:{height:a.value}},c("div",{ref:l,class:"vp-md-demo-codes"},t.code()))])}});const Dv={enhance:({app:e})=>{e.component("CodeDemo",Cv),e.component("MdDemo",Ov)}},Iv=Object.freeze(Object.defineProperty({__proto__:null,default:Dv},Symbol.toStringTag,{value:"Module"})),Rv=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Bv=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),$v=JSON.parse(`{"encrypt":{"admin":{"tokens":["$2b$10$pUDI02Vu/QhDpPyKJGOY2OHtySo1NxL3/RmUg.Na8RLl/PQLgHj2m"]},"config":{"/interview/me":{"tokens":["$2b$10$0JrIrm1t2Tnx058WOLrQZOx3QpWNiIG47UbTlMojsIzwhQ7Sdl01y"]},"/en/guide/encrypt":{"tokens":["$2b$10$i5cr78pS8O3W./woemkTx.jG1cOxuk9KBk6PZSnx7VB090nla/6Oq"]},"/tip/encrypt":{"tokens":["$2b$10$E7LA18udaf6uGlB/ebYBeOpBWog3JCx0aaDYlIdj9VstaPq.JFmQe"]},"/course/Operating-System-Practice":{"tokens":["$2b$10$y5JRPKd.9wHG4VZXo0p9kee96CY6CBaL3gxTWjIycpsE/N7qI9.nC"]},"/paprikayi/":{"tokens":["$2b$10$hKwxOVgv31chBC7vOwqL4eSmot1f7BstukNp.6Jby3rBzXZlQv1VW"]},"/roast/diary":{"tokens":["$2b$10$ZfRGAbyRLbJp/9HPgdyenOXyJ04nrrjtVtza87VS.5AC9uGFzEksO"]},"/roast/todo-list":{"tokens":["$2b$10$8rA6Rl/EyxeYjK..dGvqWuiIi6bGXGzQ7QLGvp75PfA9Ou5yAHz2i"]}}},"logo":"/logo.png","logoDark":"/logo-darkmode.png","author":{"name":"kfkfka🍀zkye","url":"https://blog.yzketx.online/"},"docsDir":"docs","docsBranch":"master","repo":"https://github.com/ET-yzk/blog-v2","repoDisplay":true,"themeColor":false,"darkmode":"switch","fullscreen":false,"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","contributors":"贡献者","editLink":"编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"星标","empty":"$text 为空"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routerLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家"},"navbar":[{"text":"主页","link":"/","icon":"iconamoon:home-fill"},{"text":"开源书籍","icon":"lets-icons:book-open-alt-fill","prefix":"/book/","children":[{"text":"《设计密集型应用》","link":"ddia/","icon":"clarity:data-cluster-solid-alerted"},{"text":"《设计模式-卡码网》","link":"kama-DesignPattern/","icon":"ic:baseline-design-services"},{"text":"《阿里工程师的自我修养》","link":"The_Self-Cultivation_of_an_Alibaba_Engineer","icon":"material-symbols:computer-rounded"}]},{"text":"导航","icon":"fa6-solid:compass","prefix":"/","children":[{"text":"天天笔记","link":"daily/","icon":"ri:quill-pen-fill","children":[]},{"text":"踩坑指南","link":"problem/","icon":"mdi:shoe-print","children":[]},{"text":"转载整理","link":"reprint/","icon":"mdi:clipboard","children":[]},{"text":"力扣刷题","prefix":"leetcode/","icon":"ph:code-fill","children":[{"text":"数组","link":"array/","icon":"mdi:numeric"},{"text":"链表","link":"linkedlist/","icon":"mdi:format-list-bulleted"},{"text":"哈希表","link":"hashtable/","icon":"ph:hash"},{"text":"字符串","link":"string/","icon":"mdi:format-letter-case"},{"text":"栈与队列","link":"stackandqueue/","icon":"ph:stack"},{"text":"树","link":"tree/","icon":"ph:tree-view"},{"text":"回溯","link":"backtracking/","icon":"fluent:arrow-step-back-16-regular"},{"text":"贪心","link":"greedy/","icon":"material-symbols:all-inclusive"},{"text":"动态规划","link":"dynamicprogramming/","icon":"ic:round-auto-mode"},{"text":"图论","link":"graph/","icon":"ph:graph"}]},{"text":"使用指南","prefix":"tip/","icon":"mdi:compass","children":[{"text":"Markdown","link":"markdown/","icon":"ph:markdown-logo"},{"text":"Typora","link":"typora","icon":"fluent:scan-type-24-filled"}]}]},{"text":"iSTEP Blog","icon":"brandico:blogger-rect","link":"https://blog.yzketx.online/iSTEP.github.io/"}],"sidebar":{"/course/":"structure","/daily/":"structure","/java/":"structure","/llm/":"structure","/mysql/":"structure","/interview/":"structure","/knowledge_base/":"structure","/leetcode/":"structure","/other/":"structure","/problem/":"structure","/reprint/":"structure","/tip/":"structure","/read-paper/":"structure","/trance/":"structure","/paprikayi/":"structure","/paper/":"structure","/book/":[{"text":"《设计数据密集型应用》","icon":"clarity:data-cluster-solid-alerted","collapsible":true,"prefix":"/book/ddia/","children":["preface","ddia_sidebar",{"text":"一览","collapsible":true,"expanded":true,"icon":"ic:outline-try","children":["part-i","part-ii","part-iii"]},{"text":"卷一","collapsible":true,"icon":"tabler:square-number-1-filled","children":["ch1","ch2","ch3","ch4"]},{"text":"卷二","collapsible":true,"icon":"tabler:square-number-2-filled","children":["ch5","ch6","ch7","ch8","ch9"]},{"text":"卷三","collapsible":true,"icon":"tabler:square-number-3-filled","children":["ch10","ch11","ch12"]},"glossary","colophon","LICENSE"]},{"text":"《设计模式-卡码网》","icon":"ic:baseline-design-services","collapsible":true,"prefix":"/book/kama-DesignPattern/","children":["",{"text":"创建型模式","collapsible":true,"expanded":true,"icon":"mdi:create-new-folder-outline","prefix":"DesignPattern/","children":["creation-patterns-overview","1-单例模式","2-工厂方法模式","3-抽象工厂模式","4-建造者模式","5-原型模式"]},{"text":"结构型模式","collapsible":true,"icon":"hugeicons:pyramid-structure-01","prefix":"DesignPattern/","children":["structure-patterns-overview","6-适配器模式","7-代理模式","8-装饰模式","9-外观模式","10-桥接模式","11-组合模式","12-享元模式"]},{"text":"行为型模式","collapsible":true,"icon":"jam:subtraction","prefix":"DesignPattern/","children":["behavior-patterns-overview","13-观察者模式","14-策略模式","15-命令模式","16-中介者模式","17-备忘录模式","18-模板方法模式","19-迭代器模式","20-状态模式","21-责任链模式","22-解释器模式","23-访问者模式"]},"DesignPattern/muti-design-pattern-combination-application"]},"The_Self-Cultivation_of_an_Alibaba_Engineer","test_pdf"]},"footer":"At four o'clock in the morning, I saw Begonia flowers awake. ❀","copyright":"Copyright © 2021-至今 kfkfka | <a href=\\"/LICENSE\\">MIT License</a> 🌻","blog":{"intro":"/intro/","description":"near zero","medias":{"Email":"mailto:yzket@foxmail.com","Github":"https://github.com/ET-yzk"},"articlePerPage":10}},"/en/":{"lang":"en-US","navbarLocales":{"langName":"English","selectLangAriaLabel":"Select language"},"metaLocales":{"author":"Author","date":"Writing Date","origin":"Original","views":"Page views","category":"Category","tag":"Tag","readingTime":"Reading Time","words":"Words","toc":"On This Page","prev":"Prev","next":"Next","contributors":"Contributors","editLink":"Edit this page","print":"Print"},"blogLocales":{"article":"Articles","articleList":"Article List","category":"Category","tag":"Tag","timeline":"Timeline","timelineTitle":"Yesterday Once More!","all":"All","intro":"Personal Intro","star":"Star","empty":"No $text"},"paginationLocales":{"prev":"Prev","next":"Next","navigate":"Jump to","action":"Go","errorText":"Please enter a number between 1 and $page !"},"outlookLocales":{"themeColor":"Theme Color","darkmode":"Theme Mode","fullscreen":"Full Screen"},"encryptLocales":{"iconLabel":"Page Encrypted","placeholder":"Enter password","remember":"Remember password","errorHint":"Please enter the correct password!"},"routerLocales":{"skipToContent":"Skip to main content","notFoundTitle":"Page not found","notFoundMsg":["There’s nothing here.","How did we get here?","That’s a Four-Oh-Four.","Looks like we've got some broken links."],"back":"Go back","home":"Take me home"},"navbar":[{"text":"Blog Home","link":"/en/","icon":"mdi:home"},{"text":"Guide","icon":"icon-park-solid:guide-board","link":"/en/guide/"},{"text":"Docs","link":"/en/docs/","icon":"mdi:notebook"}],"sidebar":{"/en/":["","home",{"text":"Guide","icon":"icon-park-solid:guide-board","prefix":"guide/","children":["","page","markdown","disable","encrypt"]}]},"footer":"Theme by <a href=\\"https://theme-hope.vuejs.press\\">vuepress-theme-hope</a> ❀","copyright":"Copyright © 2021-PRESRENT kfkfka | <a href=\\"/LICENSE\\">MIT License</a> 🌻","blog":{"intro":"/en/intro/","description":"π","medias":{"Github":"https://github.com/ET-yzk","Gmail":"mailto:yzketx@gmail.com"}}}},"displayFooter":true,"copyright":"Copyright © 2021-present zkye | <a href=\\"https://blog.yzketx.online/LICENSE\\">MIT License</a>"}`),Mv=Q($v),ip=()=>Mv,np=Symbol(""),Vv=()=>{const e=we(np);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},Fv=(e,t)=>{const{locales:i,...n}=e;return{...n,...i?.[t]}},jv=Qe({enhance({app:e}){const t=ip(),i=e._context.provides[dr],n=E(()=>Fv(t.value,i.routeLocale.value));e.provide(np,n),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return n.value}}})}}),Nv=Object.freeze(Object.defineProperty({__proto__:null,default:jv},Symbol.toStringTag,{value:"Module"}));var Hv={"/":{backToTop:"返回顶部"},"/en/":{backToTop:"Back to top"}};const zv=D({name:"BackToTop",setup(){const e=Ue(),t=gt(Hv),i=ee(),{height:n}=v2(i),{height:l}=L2(),{y:a}=x2(),o=E(()=>(e.value.backToTop??!0)&&a.value>100),r=E(()=>a.value/(n.value-l.value)*100);return de(()=>{i.value=document.body}),()=>c(kn,{name:"fade-in"},()=>o.value?c("button",{type:"button",class:"vp-back-to-top-button","aria-label":t.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[c("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":r.value},c("svg",c("circle",{cx:"26",cy:"26",r:"24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-dasharray":`${Math.PI*r.value*.48} ${Math.PI*(100-r.value)*.48}`}))),c("div",{class:"back-to-top-icon"})]):null)}}),qv=Qe({rootComponents:[zv]}),Uv=Object.freeze(Object.defineProperty({__proto__:null,default:qv},Symbol.toStringTag,{value:"Module"})),Wv=/language-(shellscript|shell|bash|sh|zsh)/,Gv=({selector:e,ignoreSelector:t,inlineSelector:i,duration:n=2e3,locales:l,showInMobile:a,transform:o})=>{const r=br("(max-width: 419px)"),s=E(()=>!r.value||a),u=gt(l),d=b=>{if(b.hasAttribute("copy-code"))return;const y=document.createElement("button");y.type="button",y.classList.add("vp-copy-code-button"),y.setAttribute("aria-label",u.value.copy),y.setAttribute("data-copied",u.value.copied),b.parentElement?.insertBefore(y,b),b.setAttribute("copy-code","")},p=()=>{document.body.classList.toggle("no-copy-code",!s.value),s.value&&document.querySelectorAll(e).forEach(d)};ze(s,()=>xt(p),{flush:"post"}),Zt(b=>{b!=="beforeUnmount"&&p()});const{copy:h}=c2({legacy:!0}),m=new WeakMap,g=async(b,y,A)=>{const w=y.cloneNode(!0);o&&o(w);let v=w.textContent||"";if(Wv.test(b.className)&&(v=v.replace(/^ *(\$|>) /gm,"")),await h(v),n<=0)return;A.classList.add("copied"),clearTimeout(m.get(A));const T=setTimeout(()=>{A.classList.remove("copied"),A.blur(),m.delete(A)},n);m.set(A,T)};re("click",b=>{const y=b.target;if(s.value&&y.matches('div[class*="language-"] > button.vp-copy-code-button')){const A=y.parentElement,w=y.nextElementSibling;if(!A||!w)return;g(A,w,y)}},{passive:!0})};var Yv={"/":{copy:"复制代码",copied:"已复制"},"/en/":{copy:"Copy code",copied:"Copied"}};const Kv=Qe({setup:()=>{Gv({selector:'[vp-content] div[class*="language-"] pre',ignoreSelector:"",inlineSelector:"",locales:Yv,duration:2e3,showInMobile:!1})}}),Jv=Object.freeze(Object.defineProperty({__proto__:null,default:Kv},Symbol.toStringTag,{value:"Module"})),Qv=D({name:"VPIcon",props:{type:{type:String,default:"unknown"},prefix:String,icon:String,color:String,size:[String,Number],verticalAlign:String,sizing:{type:String,default:"height"}},setup(e){const t=E(()=>e.icon?Xt(e.icon)?e.icon:ml(e.icon)?ye(e.icon):null:null),i=E(()=>{const l={},{type:a,verticalAlign:o,size:r,sizing:s}=e,u={sizing:s};return e.color&&(l.color=e.color),r&&(l["--icon-size"]=Number.isNaN(Number(r))?r:`${r}px`),o&&(l["--icon-vertical-align"]=o),a==="iconify"&&(s!=="height"&&(u.width=e.size||"1em"),s!=="width"&&(u.height=e.size||"1em")),ft(l).length&&(u.style=l),u}),n=l=>l.includes("fa-")||/^fa.$/.test(l)?l:`fa-${l}`;return()=>{const{type:l,icon:a,prefix:o="",sizing:r}=e;if(!a)return null;if(t.value)return c("img",{class:"vp-icon",src:t.value,alt:"","aria-hidden":"","no-view":"",...i.value});if(l==="iconify")return c("iconify-icon",{key:a,class:"vp-icon",icon:a.includes(":")?a:`${o}${a}`,...i.value});if(l==="fontawesome"){const[s,u]=a.includes(":")?a.split(":",2):["fas",a];return c("i",{key:a,class:["vp-icon",s.length===1?`fa${s}`:n(s),...u.split(" ").map(n),r==="height"?"":"fa-fw"],...i.value})}return c("i",{key:a,class:["vp-icon",a.includes(" ")?a:`${o}${a}`],...i.value})}}}),Xv={enhance:({app:e})=>{Je("VPIcon")||e.component("VPIcon",t=>c(Qv,{type:"iconify",prefix:"",...t}))},setup:()=>{k2("https://cdn.jsdelivr.net/npm/iconify-icon@2")}},Zv=Object.freeze(Object.defineProperty({__proto__:null,default:Xv},Symbol.toStringTag,{value:"Module"})),e3=Q({}),lp=Symbol(""),t3=()=>we(lp),i3=e=>{e.provide(lp,e3)},ap=e=>new Promise((t,i)=>{e.complete?t({type:"image",element:e,src:e.src,width:e.naturalWidth,height:e.naturalHeight,alt:e.alt,msrc:e.src}):(e.onload=()=>{t(ap(e))},e.onerror=()=>{i()})}),n3='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',l3=(e,{download:t=!0,fullscreen:i=!0}={})=>{e.on("uiRegister",()=>{if(e.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:n=>{const l=[];let a=-1;for(let o=0;o<e.getNumItems();o++){const r=document.createElement("div");r.className="photo-swipe-bullet",r.onclick=s=>{e.goTo(l.indexOf(s.target))},l.push(r),n.appendChild(r)}e.on("change",()=>{a>=0&&l[a].classList.remove("active"),l[e.currIndex].classList.add("active"),a=e.currIndex})}}),i){const{isSupported:n,toggle:l}=wa();n.value&&e.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{l()}})}t&&e.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:n=>{n.setAttribute("download",""),n.setAttribute("target","_blank"),n.setAttribute("rel","noopener"),e.on("change",()=>{n.setAttribute("href",e.currSlide.data.src)})}})})},a3=({selector:e,locales:t,download:i=!0,fullscreen:n=!0,scrollToClose:l=!0})=>{const a=t3(),o=gt(t),r=Ue(),s=E(()=>{const{photoSwipe:m}=r.value;return m===!1?null:pe(m)?m:Jt(e)?e.join(", "):e}),u=E(()=>({...a.value,...o.value,download:i,fullscreen:n,scrollToClose:l}));let d=null,p=0,h=null;re("click",async m=>{const g=m.target;if(!s.value||!d||!g.matches(s.value))return;p!==0&&h.destroy();const b=Date.now(),y=await d,A=Array.from(document.querySelectorAll(s.value)),w=A.map(T=>({html:n3,element:T,msrc:T.src})),v=A.findIndex(T=>T===g);h=new y({preloaderDelay:0,showHideAnimationType:"zoom",...u.value,dataSource:w,index:v,...l?{closeOnVerticalDrag:!0,wheelToZoom:!1}:{}}),p=b,l3(h,{download:i,fullscreen:n}),h.init(),h.on("destroy",()=>{h=null,p=0}),A.map((T,C)=>ap(T).then(N=>{p===b&&(w.splice(C,1,N),h?.refreshSlideContent(C))}))},{passive:!0}),re("wheel",()=>{u.value.scrollToClose&&h?.close()}),de(()=>{("requestIdleCallback"in window?window.requestIdleCallback:setTimeout)(()=>{d=f(async()=>{const{default:m}=await import("./photoswipe.esm-CKV1Bsxh.js");return{default:m}},[]).then(({default:m})=>m)})}),Vt(()=>{h?.destroy()})};var o3={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"},"/en/":{closeTitle:"Close",downloadTitle:"Download Image",fullscreenTitle:"Switch to fullscreen",zoomTitle:"Zoom in/out",arrowPrevTitle:"Prev (Arrow Left)",arrowNextTitle:"Next (Arrow Right)"}};const r3="[vp-content] :not(a) > img:not([no-view])",s3=o3,c3=!0,d3=!0,u3=!0;var p3=Qe({enhance:({app:e})=>{i3(e)},setup:()=>{a3({selector:r3,locales:s3,download:c3,fullscreen:d3,scrollToClose:u3})}});const h3=Object.freeze(Object.defineProperty({__proto__:null,default:p3},Symbol.toStringTag,{value:"Module"})),op=({type:e="info",text:t="",vertical:i,color:n,bgColor:l},{slots:a})=>c("span",{class:["vp-badge",e,{diy:!!(n||l)}],style:{backgroundColor:l??!1,color:n??!1,verticalAlign:i??!1}},a.default?.()??t);op.displayName="Badge";const m3="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture",dc=e=>pe(e)?e:`${e}px`,rp=(e,t=0)=>{const i=ee(),n=E(()=>dc(kt(e.width)??"100%")),l=Q("auto"),a=s=>{if(pe(s)){const[u,d]=s.split(":"),p=Number(u)/Number(d);if(!Number.isNaN(p))return p}return typeof s=="number"?s:16/9},o=s=>{const u=kt(e.height),d=a(kt(e.ratio));return u?dc(u):`${Number(s)/d+kt(t)}px`},r=()=>{i.value&&(l.value=o(i.value.clientWidth))};return de(()=>{r(),Ce(t)&&ke(t,r),re("orientationchange",r),re("resize",r)}),{el:i,width:n,height:l,resize:r}},uc="https://player.bilibili.com/player.html";var f3=D({name:"BiliBili",props:{bvid:String,aid:String,cid:String,title:{type:String,default:"A BiliBili video"},page:{type:[String,Number],default:1},width:{type:[String,Number],default:"100%"},height:[String,Number],ratio:{type:[String,Number],default:16/9},time:{type:[String,Number],default:0},autoplay:Boolean},setup(e){const{el:t,width:i,height:n,resize:l}=rp(e),a=Q(!1),o=E(()=>{const{aid:r,bvid:s,cid:u,autoplay:d,time:p,page:h}=e;return r&&u?`${uc}?aid=${r}&cid=${u}&t=${p}&autoplay=${d?1:0}&p=${h}`:s?`${uc}?bvid=${s}&t=${p}&autoplay=${d?1:0}`:null});return()=>o.value?[c("div",{class:"bilibili-desc"},c("a",{class:"sr-only",href:o.value},e.title)),c("iframe",{ref:t,src:o.value,title:e.title,class:"bilibili-iframe",allow:m3,style:{width:i.value,height:a.value?n.value:0},onLoad:()=>{a.value=!0,l()}}),a.value?null:c(Sn)]:[]}});const ge=({name:e="",color:t="currentColor",ariaLabel:i},{attrs:n,slots:l})=>c("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${e}-icon`],viewBox:"0 0 1024 1024",fill:t,"aria-label":i??`${e} icon`,...n},l.default());ge.displayName="IconBase";const sp=()=>c(ge,{name:"enter-fullscreen"},()=>c("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));sp.displayName="EnterFullScreenIcon";const cp=()=>c(ge,{name:"cancel-fullscreen"},()=>c("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));cp.displayName="CancelFullScreenIcon";const g3=e=>Xt(e)?e:`https://github.com/${e}`,Er=(e="")=>!Xt(e)||e.includes("github.com")?"GitHub":e.includes("bitbucket.org")?"Bitbucket":e.includes("gitlab.com")?"GitLab":e.includes("gitee.com")?"Gitee":null,dp=()=>c(ge,{name:"github"},()=>c("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));dp.displayName="GitHubIcon";const up=()=>c(ge,{name:"gitee"},()=>c("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));up.displayName="GiteeIcon";const pp=()=>c(ge,{name:"bitbucket"},()=>c("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));pp.displayName="BitbucketIcon";const hp=()=>c(ge,{name:"source"},()=>c("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));hp.displayName="SourceIcon";const v3=({link:e,type:t=Er(e??"")})=>{if(!t)return null;const i=t.toLowerCase();return c(i==="bitbucket"?pp:i==="github"?dp:i==="gitlab"?"GitLab":i==="gitee"?up:hp)},_3=(e,t=0)=>{let i=3735928559^t,n=1103547991^t;for(let l=0,a;l<e.length;l++)a=e.charCodeAt(l),i=Math.imul(i^a,2654435761),n=Math.imul(n^a,1597334677);return i=Math.imul(i^i>>>16,2246822507),i^=Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507),n^=Math.imul(i^i>>>13,3266489909),4294967296*(2097151&n)+(i>>>0)},gl=(e,t)=>_3(e)%t,mp=/#.*$/u,b3=e=>{const t=mp.exec(e);return t?t[0]:""},pc=e=>decodeURI(e).replace(mp,"").replace(/\/index\.html$/iu,"/").replace(/\/(README|index)\.md$/iu,"/").replace(/\.(?:html|md)$/iu,""),fp=(e,t)=>{if(!_a(t))return!1;const i=pc(e.path),n=pc(t),l=b3(t);return l?l===e.hash&&(!n||i===n):i===n};let y3=class{containerElement;popupElements={};constructor(){const t="popup-container",i=document.getElementById(t);i?this.containerElement=i:(this.containerElement=document.createElement("div"),this.containerElement.id=t,document.body.appendChild(this.containerElement))}emit(t,i){const n=document.createElement("div"),l=document.createElement("div"),a=Date.now();return this.containerElement.appendChild(n),this.popupElements[a]=n,n.className="popup-wrapper appear",n.appendChild(l),n.addEventListener("click",()=>{this.close(a)}),l.className="popup-container",l.innerHTML=t,typeof i=="number"&&setTimeout(()=>{this.close(a)},i),a}close(t){if(t){const i=this.popupElements[t];i.classList.replace("appear","disappear"),i.children[0].addEventListener("animationend",()=>{i.remove(),delete this.popupElements[t]})}else ft(this.popupElements).forEach(i=>{this.close(Number(i))})}destroy(){document.body.removeChild(this.containerElement)}};const w3=()=>{const{availWidth:e,availHeight:t}=screen,{screenLeft:i,screenTop:n,innerWidth:l,innerHeight:a}=window,o=Math.max(e/2,600),r=Math.max(t/2,400);return{width:o,height:r,left:i+l/2-o/2,top:n+a/2-r/2}},k3=(e,t="_blank",i=["resizable","status"])=>{const{width:n,height:l,left:a,top:o}=w3();window.open(e,t,`width=${n},height=${l},left=${a},top=${o},${i.join(",")}`)?.focus()},E3=e=>Xt(e)?e:ye(e);var A3={"/":{hint:"<p>此浏览器不支持嵌入式 PDF。请下载 PDF 查看：<a href='[url]' target='_blank'>下载 PDF</a></p>"},"/en/":{hint:"<p>This browser does not support embedding PDFs. Please download the PDF to view it: <a href='[url]' target='_blank'>Download PDF</a></p>"}};const Qa=e=>{console.error(`[PDF]: ${e}`)},T3=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},x3=e=>e instanceof HTMLElement?e:e==="string"?document.querySelector(e):document.body,L3=e=>{let t=Pi(e).map(([i,n])=>i==="noToolbar"?`toolbar=${n?"0":"1"}`:`${encodeURIComponent(i)}=${encodeURIComponent(n)}`).join("&");return t&&(t=`#${t.slice(0,t.length-1)}`),t},Xa=(e,t,i,n,l)=>{T3(t);const a=`${e==="pdfjs"?`${rr(ye("https://theme-hope-assets.vuejs.press/pdfjs/"))}web/viewer.html?file=${encodeURIComponent(i)}`:i}${L3(n)}`,o=e==="pdfjs"||e==="iframe"?"iframe":"embed",r=document.createElement(o);return r.className="pdf-viewer",r.type="application/pdf",r.title=l,r.src=a,r instanceof HTMLIFrameElement&&(r.allow="fullscreen"),t.classList.add("pdf-viewer-container"),t.appendChild(r),t.getElementsByTagName(o)[0]},S3=(e,t,{title:i,hint:n,options:l={},force:a})=>{if(typeof window>"u"||!window?.navigator?.userAgent)return null;const{navigator:o}=window,{userAgent:r}=o,s=_a(window.Promise),u=ju(r)||Sg(r),d=!u&&Pg(r),p=!u&&/firefox/iu.test(r)&&r.split("rv:").length>1?parseInt(r.split("rv:")[1].split(".")[0],10)>18:!1,h=!u&&(s||p),m=x3(t);if(!m)return Qa("Target element cannot be determined"),null;const g=Xt(e)?e:`${window.origin}${e}`,b=i??/\/([^/]+).pdf/.exec(e)?.[1]??"PDF Viewer";return a?g?Xa("pdfjs",m,e,l,b):(Qa("PDF link is not accessible."),null):h||!u?Xa(d?"iframe":"embed",m,e,l,b):g?Xa("pdfjs",m,e,l,b):(m.innerHTML=n.replace(/\[url\]/g,e),Qa("This browser does not support embedded PDFs"),null)};var P3=D({name:"PDF",props:{url:{type:String,required:!0},title:String,width:{type:[String,Number],default:"100%"},height:[String,Number],ratio:{type:[String,Number],default:16/9},page:{type:[String,Number],default:1},noToolbar:Boolean,noFullscreen:Boolean,zoom:[String,Number],viewer:Boolean},setup(e){const{el:t,width:i,height:n,resize:l}=rp(e),a=qu(A3),o=ee(),r=ee(),s=fl(o),u=Q(!1);return ke(u,d=>{s.value=d}),de(()=>{o.value=document.body,S3(E3(e.url),r.value,{title:e.title,hint:a.value.hint,options:{page:e.page,noToolbar:e.noToolbar,...e.zoom&&e.zoom.toString()!=="100"?{zoom:e.zoom}:{}},force:e.viewer}),l()}),Vt(()=>{s.value=!1}),()=>c("div",{class:["pdf-viewer-wrapper",{fullscreen:u.value}],ref:t,style:u.value?{}:{width:i.value,height:n.value}},[c("div",{ref:r}),e.noFullscreen?null:c("button",{class:"pdf-fullscreen-button",onClick:()=>{u.value=!u.value}},c(u.value?cp:sp,{class:"pdf-fullscreen-icon"}))])}}),C3=[{name:"twitter",link:"https://twitter.com/intent/tweet?text=[title]&url=[url]&hashtags=[tags][title]",color:"#000",shape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="m587 451 291-339h-69L555 407 354 112H120l305 446-305 354h68l268-310 213 310h235zM214 163h107l488 699H702z"/></svg>'},{name:"facebook",link:"https://www.facebook.com/sharer/sharer.php?u=[url]&title=[title]&description=[description]&quote=[summary]&hashtag=[tags]",color:"#3c599b",shape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M295 360h93v-91c0-40 1-101 30-139 30-41 72-68 144-68 118 0 168 17 168 17l-24 138s-39-12-75-12-69 13-69 50v105h149l-10 134H562v468H388V494h-93z"/></svg>'},{name:"reddit",link:"https://www.reddit.com/submit?title=[title]&url=[url]",color:"#ff4501",shape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M678 779c9 9 9 18 0 27-34 37-90 55-166 55s-132-18-166-55c-9-9-9-18 0-27a17 17 0 0 1 12-6c5 0 9 2 13 6 26 29 74 43 141 43s114-14 141-43a17 17 0 0 1 13-6c5 0 9 2 12 6M400 562a82 82 0 0 1 0 112 70 70 0 0 1-53 23c-20 0-38-8-53-23a78 78 0 0 1-22-56c0-22 7-41 22-56a71 71 0 0 1 106 0m352 56c0 22-7 41-22 56a71 71 0 0 1-53 23c-21 0-38-8-53-23a78 78 0 0 1-22-56c0-22 8-40 22-56 15-16 32-23 53-23 20 0 38 7 53 23 15 15 22 34 22 56m210-106c0-29-10-54-29-74a94 94 0 0 0-71-31c-28 0-52 10-72 31-73-53-160-81-260-85l52-250 168 40c0 21 7 40 21 55 15 16 32 23 53 23s38-7 53-23 22-34 22-56-7-41-22-57a71 71 0 0 0-53-23c-30 0-52 15-67 44L572 63c-10-3-17 2-21 14l-57 276c-101 5-187 33-259 86a94 94 0 0 0-73-32c-28 0-51 10-71 31a105 105 0 0 0-29 74 108 108 0 0 0 57 96 241 241 0 0 0-5 49c0 84 39 156 117 216 78 59 172 89 282 89s205-30 283-89c78-60 117-132 117-216 0-19-2-35-6-50a108 108 0 0 0 55-95"/></svg>'},{name:"telegram",link:"https://t.me/share/url?url=[url]&text=[title]%0D%0A[description|summary]",color:"#158cc7",shape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="m413 807 13-187 340-307c15-14-3-21-23-8L323 570l-183-58c-39-11-39-38 9-57l709-274c33-14 64 8 51 58L788 807c-8 40-33 50-66 31L538 703l-88 85c-10 10-19 19-37 19"/></svg>'},{name:"whatsapp",link:"https://api.whatsapp.com/send?text=[title]%0D%0A[url]%0D%0A[description|summary]",color:"#31B84C",shape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="m62 962 64-231a444 444 0 0 1-60-223 448 448 0 0 1 765-315 442 442 0 0 1 131 315c0 246-201 446-448 446a449 449 0 0 1-214-54zm340-640c-9-22-18-19-25-20h-22a41 41 0 0 0-30 14c-10 11-39 38-39 93s40 108 46 115c6 8 79 120 191 168 27 12 48 19 64 24 27 8 51 7 71 4 21-3 66-27 75-53s9-48 7-53c-3-4-11-7-22-13l-76-36c-11-4-18-5-26 6-7 11-28 36-35 43-6 8-13 9-24 3-11-5-47-17-90-55-34-30-56-66-63-77-6-12 0-18 5-23l17-20c6-6 8-11 11-18 4-8 2-14-1-20l-34-83z"/></svg>'},{name:"email",link:"mailto:?subject=[title]&body=[url]%0D%0A%0D%0A[description|summary]",color:"#1384FF",action:"open",shape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M152 177h720c49 0 89 37 90 83L512 494 63 260c0-46 40-83 89-83M62 349v414c0 46 41 84 90 84h720c49 0 90-38 90-84V349L523 572a24 24 0 0 1-22 0z"/></svg>'}];const Rl=e=>document.querySelector(`meta[name="${e}"]`)?.getAttribute("content")??null,hc=(e,t="")=>{const i=["vp-share-icon",t];return Xt(e)||ml(e)?c("img",{class:i,src:e,loading:"lazy","no-view":""}):qi(e,"<")&&Hu(e,">")?c("div",{class:i,innerHTML:e}):c("div",{class:[...i,e]})};var O3=D({name:"ShareService",props:{config:{type:Object,required:!0},plain:Boolean,title:String,description:String,url:String,summary:String,cover:String,tag:[Array,String]},setup(e){let t;const{frontmatter:i,page:n}=jt(),l=Q(!1),a=()=>{const r=e.title??n.value.title,s=e.description??i.value.description??Rl("description")??Rl("og:description")??Rl("twitter:description"),u=e.url??typeof window>"u"?null:window.location.href,d=e.cover??Rl("og:image"),p=document.querySelector("[vp-content] :not(a) > img")?.getAttribute("src"),h=e.tag??i.value.tag??i.value.tags,m=Jt(h)?h.filter(pe).join(","):pe(h)?h:null;return e.config.link.replace(/\[([^\]]+)\]/g,(g,b)=>{const y=b.split("|");for(const A of y){if(A==="url"&&u)return u;if(A==="title"&&r)return r;if(A==="description"&&s)return s;if(A==="summary"&&e.summary)return e.summary;if(A==="cover"&&d)return d;if(A==="image"&&p)return p;if(A==="tags"&&m)return m}return""})},o=()=>{const r=a();switch(e.config.action){case"navigate":window.open(r);break;case"open":window.open(r,"_blank");break;case"qrcode":f(async()=>{const{toDataURL:s}=await import("./browser-BjcGmAWY.js").then(u=>u.b);return{toDataURL:s}},[]).then(({toDataURL:s})=>s(r,{errorCorrectionLevel:"H",width:250,scale:1,margin:1.5})).then(s=>{t.emit(`<img src="${s}" alt="qrcode" class="share-qrcode" />`)});break;default:k3(r,"share")}};return de(()=>{t=new y3}),()=>{const{config:{name:r,icon:s,shape:u,color:d},plain:p}=e;return[c("button",{type:"button",class:["vp-share-button",{plain:p}],"aria-label":r,"data-balloon-pos":"up",onClick:()=>{o()}},p?hc(u,"plain"):s?hc(s):c("div",{class:"vp-share-icon colorful",style:{background:d},innerHTML:u})),l.value?c("div",{class:"share-popup"}):null]}}});const mc=C3;var D3=D({name:"Share",props:{services:{type:[String,Array],default:()=>mc.map(({name:e})=>e)},titleGetter:{type:Function,default:e=>e.title},descriptionGetter:{type:Function,default:e=>e.frontmatter.description},summaryGetter:{type:Function,default:e=>e.summary},coverGetter:{type:Function,default:e=>e.cover},tagGetter:{type:Function,default:({frontmatter:e})=>e.tag??e.tags},inline:Boolean,colorful:Boolean},setup(e){const t=Yi(),i=E(()=>(pe(e.services)?e.services.split(","):e.services).map(l=>Lt(l)?l.name&&l.link?l:null:mc.find(({name:a})=>a===l)).filter(l=>!!l)),n=E(()=>{const l={};return["titleGetter","descriptionGetter","summaryGetter","coverGetter","tagGetter"].forEach(a=>{if(hu(e[a])){const o=e[a](t.value);o&&(l[a.replace("Getter","")]=o)}}),l});return()=>c("div",{class:"vp-share-buttons",style:e.inline?{display:"inline-block"}:{}},i.value.map(l=>c(O3,{config:l,...n.value,plain:!e.colorful})))}});const I3={enhance:({app:e})=>{Je("Badge")||e.component("Badge",op),Je("BiliBili")||e.component("BiliBili",f3),Je("PDF")||e.component("PDF",P3),Je("Share")||e.component("Share",D3)},setup:()=>{},rootComponents:[]},R3=Object.freeze(Object.defineProperty({__proto__:null,default:I3},Symbol.toStringTag,{value:"Module"})),fc=async(e,t)=>{const{path:i,query:n}=e.currentRoute.value,{scrollBehavior:l}=e.options;e.options.scrollBehavior=void 0,await e.replace({path:i,query:n,hash:t}),e.options.scrollBehavior=l},B3=({headerLinkSelector:e,headerAnchorSelector:t,delay:i,offset:n=5})=>{const l=Si();re("scroll",ba(()=>{const o=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(o)<n){fc(l,"");return}const s=window.innerHeight+o,u=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),d=Math.abs(u-s)<n,p=Array.from(document.querySelectorAll(e)),m=Array.from(document.querySelectorAll(t)).filter(g=>p.some(b=>b.hash===g.hash));for(let g=0;g<m.length;g++){const b=m[g],y=m[g+1],A=o>=(b.parentElement?.offsetTop??0)-n,w=!y||o<(y.parentElement?.offsetTop??0)-n;if(!(A&&w))continue;const T=decodeURIComponent(l.currentRoute.value.hash),C=decodeURIComponent(b.hash);if(T===C)return;if(d){for(let N=g+1;N<m.length;N++)if(T===decodeURIComponent(m[N].hash))return}fc(l,C);return}},i))},$3=".vp-sidebar-link, .vp-toc-link",M3=".header-anchor",V3=200,F3=5,j3=Qe({setup(){B3({headerLinkSelector:$3,headerAnchorSelector:M3,delay:V3,offset:F3})}}),N3=Object.freeze(Object.defineProperty({__proto__:null,default:j3},Symbol.toStringTag,{value:"Module"}));let gp=e=>pe(e.title)?{title:e.title}:null;const vp=Symbol(""),H3=e=>{gp=e},z3=()=>we(vp),q3=e=>{e.provide(vp,gp)};var U3={"/":{title:"目录",empty:"暂无目录"},"/en/":{title:"Catalog",empty:"No catalog"}},W3=D({name:"Catalog",props:{base:String,level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(e){const{page:t,routes:i,site:n}=jt(),l=z3(),a=gt(U3),o=ee(Pi(i.value).map(([s,{meta:u}])=>{const d=l(u);if(!d)return null;const p=s.split("/").length;return{level:Hu(s,"/")?p-2:p-1,base:s.replace(/\/[^/]+\/?$/,"/"),path:s,...d}}).filter(s=>Lt(s)&&pe(s.title))),r=E(()=>{const s=e.base?$f(rr(e.base)):t.value.path.replace(/\/[^/]+$/,"/"),u=s.split("/").length-2,d=[];return o.value.filter(({level:p,path:h})=>{if(!qi(h,s)||h===s)return!1;if(s==="/"){const m=ft(n.value.locales).filter(g=>g!=="/");if(h==="/404.html"||m.some(g=>qi(h,g)))return!1}return p-u<=e.level}).sort(({title:p,level:h,order:m},{title:g,level:b,order:y})=>h-b||(jl(m)?jl(y)?m>0?y>0?m-y:-1:y<0?m-y:1:m:jl(y)?y:p.localeCompare(g))).forEach(p=>{const{base:h,level:m}=p;switch(m-u){case 1:{d.push(p);break}case 2:{const g=d.find(b=>b.path===h);g&&(g.children??=[]).push(p);break}default:{const g=d.find(b=>b.path===h.replace(/\/[^/]+\/$/,"/"));if(g){const b=g.children?.find(y=>y.path===h);b&&(b.children??=[]).push(p)}}}}),d});return()=>{const s=r.value.some(u=>u.children);return c("div",{class:["vp-catalog",{index:e.index}]},[e.hideHeading?null:c("h2",{class:"vp-catalog-main-title"},a.value.title),r.value.length?c(e.index?"ol":"ul",{class:["vp-catalog-list",{deep:s}]},r.value.map(({children:u=[],title:d,path:p,content:h})=>{const m=c(Re,{class:"vp-catalog-title",to:p},()=>h?c(h):d);return c("li",{class:"vp-catalog-item"},s?[c("h3",{id:d,class:["vp-catalog-child-title",{"has-children":u.length}]},[c("a",{href:`#${d}`,class:"vp-catalog-header-anchor","aria-hidden":!0}),m]),u.length?c(e.index?"ol":"ul",{class:"vp-child-catalogs"},u.map(({children:g=[],content:b,path:y,title:A})=>c("li",{class:"vp-child-catalog"},[c("div",{class:["vp-catalog-sub-title",{"has-children":g.length}]},[c("a",{href:`#${A}`,class:"vp-catalog-header-anchor"}),c(Re,{class:"vp-catalog-title",to:y},()=>b?c(b):A)]),g.length?c(e.index?"ol":"div",{class:e.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},g.map(({content:w,path:v,title:T})=>e.index?c("li",{class:"vp-sub-catalog"},c(Re,{to:v},()=>w?c(w):T)):c(Re,{class:"vp-sub-catalog-link",to:v},()=>w?c(w):T))):null]))):null]:c("div",{class:"vp-catalog-child-title"},m))})):c("p",{class:"vp-empty-catalog"},a.value.empty)])}}}),G3=Qe({enhance:({app:e})=>{q3(e),Je("Catalog",e)||e.component("Catalog",W3)}});const Y3=Object.freeze(Object.defineProperty({__proto__:null,default:G3},Symbol.toStringTag,{value:"Module"}));/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const gc=(e,t)=>{e.classList.add(t)},vc=(e,t)=>{e.classList.remove(t)},K3=e=>{e?.parentNode?.removeChild(e)},Za=(e,t,i)=>e<t?t:e>i?i:e,_c=e=>(-1+e)*100,J3=(()=>{const e=[],t=()=>{const i=e.shift();i&&i(t)};return i=>{e.push(i),e.length===1&&t()}})(),Q3=e=>e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(t,i)=>i.toUpperCase()),Bl=(()=>{const e=["Webkit","O","Moz","ms"],t={},i=a=>{const{style:o}=document.body;if(a in o)return a;const r=a.charAt(0).toUpperCase()+a.slice(1);let s=e.length;for(;s--;){const u=`${e[s]}${r}`;if(u in o)return u}return a},n=a=>{const o=Q3(a);return t[o]??=i(o)},l=(a,o,r)=>{a.style[n(o)]=r};return(a,o)=>{for(const r in o){const s=o[r];Object.hasOwn(o,r)&&_a(s)&&l(a,r,s)}}})(),ni={minimum:.08,easing:"ease",speed:200,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},De={percent:null,isRendered:()=>!!document.getElementById("nprogress"),set:e=>{const{speed:t,easing:i}=ni,n=De.isStarted(),l=Za(e,ni.minimum,1);De.percent=l===1?null:l;const a=De.render(!n),o=a.querySelector(ni.barSelector);return a.offsetWidth,J3(r=>{Bl(o,{transform:`translate3d(${_c(l)}%,0,0)`,transition:`all ${t}ms ${i}`}),l===1?(Bl(a,{transition:"none",opacity:"1"}),a.offsetWidth,setTimeout(()=>{Bl(a,{transition:`all ${t}ms linear`,opacity:"0"}),setTimeout(()=>{De.remove(),r()},t)},t)):setTimeout(()=>{r()},t)}),De},isStarted:()=>typeof De.percent=="number",start:()=>{De.percent||De.set(0);const e=()=>{setTimeout(()=>{De.percent&&(De.trickle(),e())},ni.trickleSpeed)};return e(),De},done:e=>!e&&!De.percent?De:De.increase(.3+.5*Math.random()).set(1),increase:e=>{let{percent:t}=De;return t?(t=Za(t+(typeof e=="number"?e:(1-t)*Za(Math.random()*t,.1,.95)),0,.994),De.set(t)):De.start()},trickle:()=>De.increase(Math.random()*ni.trickleRate),render:e=>{if(De.isRendered())return document.getElementById("nprogress");gc(document.documentElement,"nprogress-busy");const t=document.createElement("div");t.id="nprogress",t.innerHTML=ni.template;const i=t.querySelector(ni.barSelector),n=document.querySelector(ni.parent),l=e?"-100":_c(De.percent??0);return Bl(i,{transition:"all 0 linear",transform:`translate3d(${l}%,0,0)`}),n&&(n!==document.body&&gc(n,"nprogress-custom-parent"),n.appendChild(t)),t},remove:()=>{vc(document.documentElement,"nprogress-busy"),vc(document.querySelector(ni.parent),"nprogress-custom-parent"),K3(document.getElementById("nprogress"))}},X3=()=>{de(()=>{const e=Si(),t=new Set;t.add(e.currentRoute.value.path),e.beforeEach(i=>{t.has(i.path)||De.start()}),e.afterEach(i=>{t.add(i.path),De.done()})})},Z3=Qe({setup(){X3()}}),e4=Object.freeze(Object.defineProperty({__proto__:null,default:Z3},Symbol.toStringTag,{value:"Module"})),t4={"Content-Type":"application/json"},_p=e=>`${e.replace(/\/?$/,"/")}api/`,bp=(e,t="")=>{if(typeof e=="object"&&e.errno)throw new TypeError(`${t} failed with ${e.errno}: ${e.errmsg}`);return e},i4=({serverURL:e,lang:t,paths:i,type:n,signal:l})=>fetch(`${_p(e)}article?path=${encodeURIComponent(i.join(","))}&type=${encodeURIComponent(n.join(","))}&lang=${t}`,{signal:l}).then(a=>a.json()).then(a=>bp(a,"Get counter").data),n4=({serverURL:e,lang:t,path:i,type:n,action:l})=>fetch(`${_p(e)}article?lang=${t}`,{method:"POST",headers:t4,body:JSON.stringify({path:i,type:n,action:l})}).then(a=>a.json()).then(a=>bp(a,"Update counter").data),l4=({serverURL:e,lang:t,paths:i,signal:n})=>i4({serverURL:e,lang:t,paths:i,type:["time"],signal:n}),a4=e=>n4({...e,type:"time",action:"inc"}),o4=(e="")=>e.replace(/\/$/u,""),r4=e=>/^(https?:)?\/\//.test(e),bc=e=>{const t=o4(e);return r4(t)?t:`https://${t}`},s4=e=>{e.name!=="AbortError"&&console.error(e.message)},yc=e=>{const{path:t}=e.dataset;return t!=null&&t.length?t:null},wc=(e,t)=>{t.forEach((i,n)=>{const l=e[n].time;typeof l=="number"&&(i.innerText=l.toString())})},yp=({serverURL:e,path:t=window.location.pathname,selector:i=".waline-pageview-count",update:n=!0,lang:l=navigator.language})=>{const a=new AbortController,o=Array.from(document.querySelectorAll(i)),r=u=>{const d=yc(u);return d!==null&&t!==d},s=u=>l4({serverURL:bc(e),paths:u.map(d=>yc(d)??t),lang:l,signal:a.signal}).then(d=>wc(d,u)).catch(s4);if(n){const u=o.filter(p=>!r(p)),d=o.filter(r);a4({serverURL:bc(e),path:t,lang:l}).then(p=>wc(p,u)),d.length&&s(d)}else s(o);return a.abort.bind(a)};var c4={provider:"Waline",dark:"auto",serverURL:"https://comment.yzketx.online/",requiredMeta:["nick"],emoji:["//unpkg.com/@waline/emojis@1.2.0/alus","//unpkg.com/@waline/emojis@1.2.0/bilibili","//unpkg.com/@waline/emojis@1.2.0/tw-emoji"]};const d4=c4,u4=Q(d4),wp=Symbol(""),kp=()=>we(wp),Ep=kp,p4=e=>{e.provide(wp,Mt(u4))};var h4={"/":{placeholder:"请留言。(填写邮箱可在被回复时收到邮件提醒)"},"/en/":{placeholder:"Write a comment here (Fill in the email address to receive an email notification when being replied)"}};const m4=h4;f(()=>Promise.resolve({}),[]);var f4=D({name:"WalineComment",props:{identifier:{type:String,required:!0}},setup(e){const{frontmatter:t,lang:i}=jt(),n=Ep(),l=gt(m4);let a=null;const o=E(()=>!!n.value.serverURL),r=E(()=>o.value&&(t.value.pageview??n.value.pageview??!0)),s=E(()=>({lang:i.value==="zh-CN"?"zh-CN":"en",locale:l.value,dark:"[data-theme='dark']",...n.value,path:e.identifier}));return de(()=>{ze(()=>[e.identifier,n.value.serverURL,n.value.delay,r.value],async()=>{a?.(),a=null,r.value&&(await xt(),await Fg(n.value.delay??800),a=yp({serverURL:n.value.serverURL,path:e.identifier}))},{flush:"post"})}),()=>o.value?c("div",{id:"comment",class:"waline-wrapper"},c(er({loader:async()=>{const{Waline:u}=await f(async()=>{const{Waline:d}=await import("./component-UiPo_xR2.js");return{Waline:d}},[]);return()=>c(va,()=>c(u,s.value))},loadingComponent:Sn}))):null}}),g4=D({name:"CommentService",props:{identifier:String,darkmode:Boolean},setup(e){const{frontmatter:t,page:i}=jt(),n=kp(),l=E(()=>t.value.comment??n.value.comment??!0);return()=>c(f4,{class:"vp-comment","vp-comment":"",identifier:e.identifier??t.value.commentID??i.value.path,darkmode:e.darkmode,style:{display:l.value?"block":"none"}})}}),v4=Qe({enhance:({app:e})=>{p4(e),e.component("CommentService",g4)}});const _4=Object.freeze(Object.defineProperty({__proto__:null,default:v4},Symbol.toStringTag,{value:"Module"})),b4=(e,t)=>{const i=gt(t),n=Ue(),l=Yi(),a=E(()=>!!n.value.copy||n.value.copy!==!1&&e.global),o=E(()=>Lt(n.value.copy)?n.value.copy:null),r=E(()=>o.value?.disableCopy??e.disableCopy??!1),s=E(()=>a.value?o.value?.disableSelection??e.disableSelection??!1:!1),u=E(()=>a.value?o.value?.maxLength??e.maxLength??0:0),d=E(()=>o.value?.triggerLength??e.triggerLength??100),p=b=>b?`${ha(Xt(b)?b:`https://${b}`)}${l.value.path}`:window.location.href,h=(b,y)=>{const{author:A,license:w,link:v}=i.value;return[b?A.replace(":author",b):"",y?w.replace(":license",y):"",v.replace(":link",p(e.canonical))].filter(T=>T).join(`
`)},m=()=>{if(pe(l.value.copyright))return l.value.copyright.replace(":link",p());const{author:b,license:y}=l.value.copyright??{};return h(b??e.author,y??e.license)},g=b=>{const y=getSelection();if(y){const A=y.getRangeAt(0);if(a.value){const w=A.toString().length;if(r.value||u.value&&w>u.value){b.preventDefault();return}if(w>=d.value){b.preventDefault();const v=m(),T=document.createElement("div");T.appendChild(y.getRangeAt(0).cloneContents()),b.clipboardData&&(b.clipboardData.setData("text/html",`${T.innerHTML}<hr><div class="copyright">${v.replace(/\\n/g,"<br>")}</div>`),b.clipboardData.setData("text/plain",`${y.getRangeAt(0).cloneContents().textContent||""}
------
${v}`))}}}};de(()=>{const b=document.querySelector("#app");re(b,"copy",g),da(()=>{b.style.userSelect=s.value?"none":"auto"})})};var y4={"/":{author:"著作权归:author所有",license:"基于:license协议",link:"原文链接：:link"},"/en/":{author:"Copyright by :author",license:"License under :license",link:":link"}},w4={canonical:"https://blog.yzketx.online/",author:"kfkfka🍀zkye",license:"",global:!0,disableCopy:!1,disableSelection:!1,triggerLength:100,maxLength:0},k4=Qe({setup:()=>{b4(w4,y4)}});const E4=Object.freeze(Object.defineProperty({__proto__:null,default:k4},Symbol.toStringTag,{value:"Module"}));var A4={0:{"/":{0:"分",1:"类",2:":",3:" ",4:"$",5:"c",6:"o",7:"n",8:"t",9:"e",10:"n",11:"t"},"/en/":{0:"C",1:"a",2:"t",3:"e",4:"g",5:"o",6:"r",7:"y",8:":",9:" ",10:"$",11:"c",12:"o",13:"n",14:"t",15:"e",16:"n",17:"t"}},1:{"/":{0:"标",1:"签",2:":",3:" ",4:"$",5:"c",6:"o",7:"n",8:"t",9:"e",10:"n",11:"t"},"/en/":{0:"T",1:"a",2:"g",3:":",4:" ",5:"$",6:"c",7:"o",8:"n",9:"t",10:"e",11:"n",12:"t"}}},T4={"/":{cancel:"取消",placeholder:"搜索",search:"搜索",clear:"清除搜索文字",remove:"删除当前项目",searching:"搜索中",defaultTitle:"文档",select:"选择",navigate:"切换",autocomplete:"自动补全",exit:"关闭",queryHistory:"搜索历史",resultHistory:"历史结果",emptyHistory:"无搜索历史",emptyResult:"没有找到结果",loading:"正在加载搜索索引..."},"/en/":{cancel:"Cancel",placeholder:"Search",search:"Search",clear:"Clear search query",remove:"Delete current item",searching:"Searching",defaultTitle:"Documentation",select:"to select",navigate:"to navigate",autocomplete:"to autocomplete",exit:"to exit",queryHistory:"Search History",resultHistory:"Result History",emptyHistory:"Empty Search History",emptyResult:"No results found",loading:"Loading search indexes..."}},x4={searchDelay:150,suggestDelay:0,queryHistoryCount:5,resultHistoryCount:5,hotKeys:[{key:"k",ctrl:!0},{key:"/",ctrl:!0}],worker:"slimsearch.worker.js"};const s5=A4,tl=x4,ka=T4,eo="Canceled because of new search request.",L4=()=>{const e=new Worker(`/${tl.worker}`,{}),t={suggest:null,search:null,all:null};return e.addEventListener("message",({data:i})=>{const[n,l,a]=i,o=t[n];o?.id===l&&o.resolve(a)}),e.addEventListener("error",i=>{console.warn("Search Worker error:",i)}),{suggest:(i,n,l)=>new Promise((a,o)=>{t.suggest?.reject(new Error(eo));const r=Date.now();e.postMessage({type:"suggest",id:r,query:i,locale:n,options:l}),t.suggest={id:r,resolve:a,reject:o}}),search:(i,n,l)=>new Promise((a,o)=>{t.search?.reject(new Error(eo));const r=Date.now();e.postMessage({type:"search",id:r,query:i,locale:n,options:l}),t.search={id:r,resolve:a,reject:o}}),all:(i,n,l)=>new Promise((a,o)=>{t.all?.reject(new Error(eo));const r=Date.now();e.postMessage({type:"all",id:r,query:i,locale:n,options:l}),t.all={id:r,resolve:a,reject:o}}),terminate:()=>{e.terminate(),Mg(t).forEach(i=>{i?.reject(new Error("Worker has been terminated."))})}}},S4=Q({}),Ap=Symbol(""),Tp=()=>{const e=ga(),t=we(Ap);return E(()=>{const{locales:i={},...n}=t.value;return{...n,...i[e.value]}})},P4=e=>{e.provide(Ap,Mt(S4))},C4='<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',xp=({class:e,hint:t})=>c("div",{class:[e,"loading"]},[c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100"},[c("circle",{cx:"28",cy:"75",r:"11",fill:"currentColor"},c("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),c("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 47a28 28 0 0 1 28 28"},c("animate",{attributeName:"stroke-opacity",begin:"0.1s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),c("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 25a50 50 0 0 1 50 50"},c("animate",{attributeName:"stroke-opacity",begin:"0.2s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"}))]),t]);xp.displayName="SearchLoading";const Pn=({name:e="",color:t="currentColor"},{slots:i})=>c("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${e}-icon`],viewBox:"0 0 1024 1024",fill:t,"aria-label":`${e} icon`},i.default());Pn.displayName="SVGWrapper";const O4=()=>c(Pn,{name:"heading"},()=>c("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));O4.displayName="HeadingIcon";const D4=()=>c(Pn,{name:"heart"},()=>c("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));D4.displayName="HeartIcon";const I4=()=>c(Pn,{name:"history"},()=>c("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));I4.displayName="HistoryIcon";const R4=()=>c(Pn,{name:"title"},()=>c("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));R4.displayName="TitleIcon";const Ar=()=>c(Pn,{name:"search"},()=>c("path",{d:"M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"}));Ar.displayName="SearchIcon";let B4=null;const Lp=()=>B4??=Wi(),$4=(e,t=!1)=>{const i=Q(0),n=E(()=>e.value[i.value]),l=()=>{i.value=i.value>0?i.value-1:e.value.length-1},a=()=>{i.value=i.value<e.value.length-1?i.value+1:0};return ke(e,()=>{t||(i.value=0)}),{index:i,item:n,prev:l,next:a}},M4=()=>{const e=Ji(()=>typeof window<"u"&&"userAgent"in window.navigator);return E(()=>e.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},V4=/[\u4e00-\u9fff\u3400-\u4dbf\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]/,F4=(e="")=>e.split(/\s+/).map(t=>{if(t.length>3){const i=t.split("");if(i.every(n=>V4.test(n)))return i}return t}).flat(),j4=e=>{const t=Q([]);{const{page:i,routeLocale:n}=jt(),l=Tp();de(()=>{const{suggest:a,terminate:o}=L4(),r=s=>{const{resultsFilter:u,querySplitter:d,suggestionsFilter:p=m=>m,...h}=l.value;s.length>=3?a(s,n.value,h).then(m=>p(m,s,n.value,i.value)).then(m=>{t.value=m.length?qi(m[0],s)&&!m[0].slice(s.length).includes(" ")?m:[s,...m]:[]}).catch(m=>{console.error(m)}):t.value=[]};ze([e,n],([s])=>{r(s.join(" "))}),Vt(()=>{o()})})}return{enabled:!0,suggestions:t}},N4='<svg width="15" height="15" aria-label="Enter key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"></path></g></svg>',H4='<svg width="15" height="15" aria-label="Arrow down" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path></g></svg>',z4='<svg width="15" height="15" aria-label="Arrow up" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path></g></svg>',q4='<svg width="15" height="15" aria-label="Escape key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"></path></g></svg>',to=tl.hotKeys[0];var U4=D({name:"SearchBox",setup(){const e=gt(ka),[t,i]=Lp(),n=Q(!1);S2(tl.hotKeys,()=>{t.value||i()});const l=E(()=>to?[...(n.value?["⌃","⇧","⌥","⌘"]:["Ctrl","Shift","Alt","Win"]).filter((a,o)=>to[["ctrl","shift","alt","meta"][o]]),to.key.toUpperCase()]:null);return de(()=>{const{userAgent:a}=navigator;n.value=Og(a)||Cg(a)||ju(a)}),()=>[c("button",{type:"button",class:"slimsearch-button","aria-label":e.value.search,onClick:()=>{i(!0)}},[c(Ar),c("div",{class:"slimsearch-placeholder"},e.value.search),l.value?c("div",{class:"slimsearch-key-hints"},l.value.map(a=>c("kbd",{class:"slimsearch-key"},a))):null])]}}),W4=D({name:"SearchKeyHints",setup(){const e=gt(ka),t=M4();return()=>t.value?null:c("div",{class:"slimsearch-hints"},[c("span",{class:"slimsearch-hint"},[c("kbd",{innerHTML:N4}),e.value.select]),c("span",{class:"slimsearch-hint"},[c("kbd",{innerHTML:z4}),c("kbd",{innerHTML:H4}),e.value.navigate]),c("span",{class:"slimsearch-hint"},[c("kbd",{innerHTML:q4}),e.value.exit])])}});const G4=er({loader:()=>f(()=>import("./SearchResult-BSUjAjKc.js"),[]),loadingComponent:()=>{const e=gt(ka);return c(xp,{class:"slimsearch-result-wrapper",hint:e.value.loading})}}),Y4=["ArrowDown","ArrowUp","Escape","Tab","Enter"];var K4=D({name:"SearchModal",setup(){const e=gt(ka),t=Pu(),i=Tp(),[n,l]=Lp(),a=Q(""),o=Q([]),{suggestions:r}=j4(o),s=Q(!1),{index:u,prev:d,next:p}=$4(r),h=ee(),m=ee(),g=ee(),b=fl(g.value),y=E(()=>s.value&&r.value.length),A=(w=u.value)=>{a.value=r.value[w],s.value=!1};return re("keydown",w=>{y.value?w.key==="ArrowUp"?d():w.key==="ArrowDown"?p():w.key==="Tab"?A():(w.key==="Enter"||w.key==="Escape")&&(s.value=!1):w.key==="Escape"&&l(!1)},{passive:!0}),n2(m,()=>{s.value=!1}),ze(a,ba(()=>(i.value.querySplitter?.(a.value)??Promise.resolve(F4(a.value))).then(w=>{o.value=w.filter(v=>v.length)}),Math.min(tl.searchDelay,tl.suggestDelay))),de(()=>{g.value=document.body,ke(n,w=>{w&&h.value?.focus()},{flush:"post"})}),Vt(()=>{b.value=!1}),()=>n.value?c("div",{class:"slimsearch-modal-wrapper"},[c("div",{class:"slimsearch-mask",onClick:()=>{l(!1),a.value=""}}),c("div",{class:"slimsearch-modal"},[c("div",{class:"slimsearch-box"},[c("form",[c("label",{id:"slimsearch-label",for:"slimsearch-input","aria-label":e.value.search},c(Ar)),c("input",{ref:h,type:"search",class:"slimsearch-input",id:"slimsearch-input",placeholder:e.value.placeholder,spellcheck:"false",autocapitalize:"off",autocomplete:"off",autocorrect:"off",name:`${t.value.title}-search`,value:a.value,"aria-controls":"slimsearch-results",onKeydown:w=>{y.value&&Y4.includes(w.key)&&w.preventDefault()},onInput:({target:w})=>{a.value=w.value,s.value=!0,u.value=0}}),a.value?c("button",{type:"reset",class:"slimsearch-clear-button",title:e.value.clear,"aria-label":e.value.clear,innerHTML:C4,onClick:()=>{a.value=""}}):null,y.value?c("ul",{class:"slimsearch-suggestions",ref:m},r.value.map((w,v)=>c("li",{class:["slimsearch-suggestion",{active:v===u.value}],onClick:()=>{A(v)}},[c("kbd",{class:"slimsearch-auto-complete",title:`Tab ${e.value.autocomplete}`},"Tab"),w]))):null]),c("button",{type:"button",class:"slimsearch-close-button",onClick:()=>{l(!1),a.value=""}},e.value.cancel)]),c(G4,{queries:o.value,isFocusing:!y.value,onClose:()=>{l(!1)},onUpdateQuery:w=>{a.value=w}}),c(W4)])]):null}}),J4=Qe({enhance({app:e}){P4(e),e.component("SearchBox",U4)},rootComponents:[K4]});const Q4=Object.freeze(Object.defineProperty({__proto__:null,default:J4},Symbol.toStringTag,{value:"Module"})),Sp="VUEPRESS_REDIRECT_STATUS",kc=b2(Sp,{}),Ec=yr(Sp,{}),X4=e=>{const t=w2(),i=ga(),n=Pi(e.config);return E(()=>{if(n.some(([l])=>i.value===l)){for(const l of t.value)for(const[a,o]of n)if(o.includes(l))return a===i.value?null:{lang:l,localePath:a}}return null})};var Z4=D({name:"RedirectModal",props:{config:{type:Object,required:!0},locales:{type:Object,required:!0}},setup(e){const t=Si(),{routeLocale:i,routePath:n}=jt(),l=X4(e.config),a=Q(),o=fl(a),r=Q(!1),s=E(()=>{if(!l.value)return null;const{lang:d,localePath:p}=l.value,h=[e.locales[p],e.locales[i.value]];return{hint:h.map(({hint:m})=>m.replace("$1",d)),switch:h.map(({switch:m})=>m.replace("$1",d)).join(" / "),cancel:h.map(({cancel:m})=>m).join(" / "),remember:h.map(({remember:m})=>m).join(" / ")}}),u=()=>{Ec.value[i.value]=!0,r.value&&(kc.value[i.value]=!0),o.value=!1};return ke(n,()=>{o.value=!1}),de(async()=>{a.value=document.body,await xt(),l.value&&!Ec.value[i.value]&&!kc.value[i.value]&&(o.value=!0)}),tr(()=>{o.value=!1}),()=>c(cu,{name:"fade-in-scale-up"},()=>o.value?c("div",{key:"mask",class:"redirect-modal-mask"},c("div",{key:"popup",class:"redirect-modal-wrapper"},[c("div",{class:"redirect-modal-content"},s.value?.hint.map(d=>c("p",d))),c("div",{class:"redirect-modal-hint"},[c("input",{id:"remember-redirect",type:"checkbox",value:r.value,onChange:()=>{r.value=!r.value}}),c("label",{for:"remember-redirect"},s.value?.remember)]),c("button",{type:"button",class:"redirect-modal-action primary",onClick:()=>{u(),t.replace(n.value.replace(i.value,l.value.localePath))}},s.value?.switch),c("button",{type:"button",class:"redirect-modal-action",onClick:()=>{u()}},s.value?.cancel)])):null)}}),e_={config:{"/":["zh-CN"],"/en/":["en-US"]},autoLocale:!1,defaultLocale:"/en/",localeFallback:!0,defaultBehavior:"defaultLocale"},t_={"/":{name:"简体中文",hint:"你的首选语言是 $1，是否切换到该语言？",switch:"切换到 $1",cancel:"取消",remember:"记住我的选择"},"/en/":{name:"English",hint:"Your primary language is $1, do you want to switch to it?",switch:"Switch to $1",cancel:"Cancel",remember:"Remember my choice"}};const Pp=e_;var i_=Qe({setup(){},rootComponents:[()=>c(Z4,{config:Pp,locales:t_})]});const n_=Object.freeze(Object.defineProperty({__proto__:null,config:Pp,default:i_},Symbol.toStringTag,{value:"Module"}));/*!
 * watermark-js-plus v1.6.3
 * (c) 2022-2024 Michael Sun
 * Released under the MIT License.
 */function l_(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",i==="top"&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var a_="@keyframes watermark{0%{background-position:0 0}25%{background-position:100% 100%}50%{background-position:100% 0}75%{background-position:0 100%}to{background-position:0 0}}@keyframes watermark-horizontal{0%{background-position-x:0}to{background-position-x:100%}}@keyframes watermark-vertical{0%{background-position-y:0}to{background-position-y:100%}}";l_(a_);var xo=function(e,t){return xo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(i[l]=n[l])},xo(e,t)};function o_(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");xo(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}var Ei=function(){return Ei=Object.assign||function(t){for(var i,n=1,l=arguments.length;n<l;n++){i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},Ei.apply(this,arguments)};function di(e,t,i,n){function l(a){return a instanceof i?a:new i(function(o){o(a)})}return new(i||(i=Promise))(function(a,o){function r(d){try{u(n.next(d))}catch(p){o(p)}}function s(d){try{u(n.throw(d))}catch(p){o(p)}}function u(d){d.done?a(d.value):l(d.value).then(r,s)}u((n=n.apply(e,t||[])).next())})}function Gt(e,t){var i={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,l,a,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=r(0),o.throw=r(1),o.return=r(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function r(u){return function(d){return s([u,d])}}function s(u){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(i=0)),i;)try{if(n=1,l&&(a=u[0]&2?l.return:u[0]?l.throw||((a=l.return)&&a.call(l),0):l.next)&&!(a=a.call(l,u[1])).done)return a;switch(l=0,a&&(u=[u[0]&2,a.value]),u[0]){case 0:case 1:a=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,l=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(a=i.trys,!(a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){i=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){i.label=u[1];break}if(u[0]===6&&i.label<a[1]){i.label=a[1],a=u;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(u);break}a[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(d){u=[6,d],l=0}finally{n=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}var Cp=function(e){return e.toDataURL("image/png",1)},Op=function(e){return typeof e=="function"},Ot=function(e){return e===void 0},r_=function(e){return typeof e=="string"},Ac=function(e,t,i){t===void 0&&(t={}),i===void 0&&(i="http://www.w3.org/2000/svg");var n=document.createElementNS(i,e);for(var l in t)n.setAttribute(l,t[l]);return n},s_=function(e,t,i){for(var n=[],l="",a="",o=0,r=t.length;o<r;o++){if(a=t.charAt(o),a===`
`){n.push(l),l="";continue}l+=a,e.measureText(l).width>i&&(n.push(l.substring(0,l.length-1)),l="",o--)}return n.push(l),n},c_=function(e,t){return di(void 0,void 0,void 0,function(){var i,n,l,a,o,r,s,u,d;return Gt(this,function(p){switch(p.label){case 0:return i=Ac("svg",{xmlns:"http://www.w3.org/2000/svg"}),n=document.createElement("div"),n.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),n.style.cssText=`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font: `.concat(e.font,`;
  color: `).concat(t.fontColor,`;
`),n.innerHTML="<div class='rich-text-content'>".concat(t.content,"</div>"),document.body.appendChild(n),[4,d_(n)];case 1:return p.sent(),l=(d=n.querySelector(".rich-text-content"))===null||d===void 0?void 0:d.getBoundingClientRect(),a=l?.width,o=l?.height,document.body.removeChild(n),r=t.richTextWidth||a||t.width,s=t.richTextHeight||o||t.height,i.setAttribute("width",r.toString()),i.setAttribute("height",s.toString()),u=Ac("foreignObject",{width:r.toString(),height:s.toString()}),u.appendChild(n),i.appendChild(u),[2,{element:i,width:r,height:s}]}})})};function d_(e){return di(this,void 0,void 0,function(){var t,i,n,l,a;return Gt(this,function(o){switch(o.label){case 0:t=e.querySelectorAll("img"),i=function(r){var s,u,d,p,h;return Gt(this,function(m){switch(m.label){case 0:if(s=r.getAttribute("src"),!s)return[3,6];m.label=1;case 1:return m.trys.push([1,5,,6]),[4,fetch(s)];case 2:return u=m.sent(),[4,u.blob()];case 3:return d=m.sent(),[4,new Promise(function(g,b){var y=new FileReader;y.onloadend=function(){return g(y.result)},y.onerror=b,y.readAsDataURL(d)})];case 4:return p=m.sent(),r_(p)&&r.setAttribute("src",p),[3,6];case 5:return h=m.sent(),console.error("Error converting ".concat(s," to base64:"),h),[3,6];case 6:return[2]}})},n=0,l=Array.from(t),o.label=1;case 1:return n<l.length?(a=l[n],[5,i(a)]):[3,4];case 2:o.sent(),o.label=3;case 3:return n++,[3,1];case 4:return[2]}})})}var u_=function(e){var t=e.outerHTML.replace(/<(img|br|input|hr|embed)(.*?)>/g,"<$1$2/>").replace(/\n/g,"").replace(/\t/g,"").replace(/#/g,"%23");return"data:image/svg+xml;charset=utf-8,".concat(t)},Ve=function(e,t){return Ot(e)?t:e},Tc=function(e,t,i){t===void 0&&(t=void 0),i===void 0&&(i=void 0);var n=new Image;return n.setAttribute("crossOrigin","anonymous"),!Ot(t)&&(n.width=t),!Ot(i)&&(n.height=i),n.src=e,new Promise(function(l){n.onload=function(){l(n)}})},p_=function(e,t,i){return Array.from({length:e},function(){return new Array(t).fill(i)})},h_=function(e,t){if(!e)return"";var i=Math.random()*6+2,n=Math.random()*2+2;switch(t){case"repeat":return"animation: 200s linear 0s infinite alternate watermark !important;";case"repeat-x":return"animation: ".concat(i,"s linear 0s infinite alternate watermark-vertical !important;'");case"repeat-y":return"animation: ".concat(n,"s linear 0s infinite alternate watermark-horizontal !important;'");case"no-repeat":return"animation: ".concat(i,"s linear 0s infinite alternate watermark-horizontal, ").concat(n,"s linear 0s infinite alternate watermark-vertical !important;");default:return""}},xc={width:300,height:300,rotate:45,layout:"default",auxiliaryLine:!1,translatePlacement:"middle",contentType:"text",content:"hello watermark-js-plus",textType:"fill",imageWidth:0,imageHeight:0,lineHeight:30,zIndex:2147483647,backgroundPosition:"0 0",backgroundRepeat:"repeat",fontSize:"20px",fontFamily:"sans-serif",fontStyle:"",fontVariant:"",fontColor:"#000",fontWeight:"normal",filter:"none",letterSpacing:"0px",wordSpacing:"0px",globalAlpha:.5,mode:"default",mutationObserve:!0,monitorProtection:!1,movable:!1,parent:"body",onSuccess:function(){},onBeforeDestroy:function(){},onDestroyed:function(){},onObserveError:function(){}},m_=function(e,t,i){var n=e.getContext("2d");if(n===null)throw new Error("get context error");n.font="".concat(t.fontStyle," ").concat(t.fontVariant," ").concat(t.fontWeight," ").concat(t.fontSize," ").concat(t.fontFamily),n.filter=t.filter,n.letterSpacing=t.letterSpacing,n.wordSpacing=t.wordSpacing,t?.rotate&&(t.rotate=(360-t.rotate%360)*(Math.PI/180)),Ot(i.textRowMaxWidth)&&(t.textRowMaxWidth=t.width);var l={image:{rect:{width:t.imageWidth,height:t.imageHeight},position:{x:0,y:0}},textLine:{data:[],yOffsetValue:0},advancedStyleParams:{linear:{x0:0,x1:0},radial:{x0:0,y0:0,r0:0,x1:0,y1:0,r1:0},conic:{x:0,y:0,startAngle:0},pattern:{}}};switch(t.contentType){case"text":l.textLine.data=[t.content];break;case"multi-line-text":l.textLine.data=s_(n,t.content,t.textRowMaxWidth);break}var a=t.width/2,o=t.height/2,r="middle",s="center";switch(!Ot(i?.translateX)&&!Ot(i?.translateY)?(a=i?.translateX,o=i?.translateY,r="top",s="left"):(l.advancedStyleParams.linear.x0=-t.width/2,l.advancedStyleParams.linear.x1=t.width/2,l.advancedStyleParams.radial.r0=0,l.advancedStyleParams.radial.r1=t.width/2),i.translatePlacement){case"top":a=t.width/2,o=0,r="top",l.advancedStyleParams.linear.x0=-t.width/2,l.advancedStyleParams.linear.x1=t.width/2,l.advancedStyleParams.radial.y0=l.textLine.data.length*t.lineHeight/2,l.advancedStyleParams.radial.y1=l.textLine.data.length*t.lineHeight/2,l.advancedStyleParams.conic.y=l.textLine.data.length*t.lineHeight/2;break;case"top-start":a=0,o=0,r="top",s="start",l.advancedStyleParams.linear.x0=0,l.advancedStyleParams.linear.x1=t.width,l.advancedStyleParams.radial.x0=t.width/2,l.advancedStyleParams.radial.y0=l.textLine.data.length*t.lineHeight/2,l.advancedStyleParams.radial.x1=t.width/2,l.advancedStyleParams.radial.y1=l.textLine.data.length*t.lineHeight/2,l.advancedStyleParams.conic.x=t.width/2,l.advancedStyleParams.conic.y=l.textLine.data.length*t.lineHeight/2;break;case"top-end":a=t.width,o=0,r="top",s="end",l.advancedStyleParams.linear.x0=0,l.advancedStyleParams.linear.x1=-t.width,l.advancedStyleParams.radial.x0=-t.width/2,l.advancedStyleParams.radial.y0=l.textLine.data.length*t.lineHeight/2,l.advancedStyleParams.radial.x1=-t.width/2,l.advancedStyleParams.radial.y1=l.textLine.data.length*t.lineHeight/2,l.advancedStyleParams.conic.x=-t.width/2,l.advancedStyleParams.conic.y=l.textLine.data.length*t.lineHeight/2;break;case"bottom":a=t.width/2,o=t.height,r="bottom",l.advancedStyleParams.linear.x0=-t.width/2,l.advancedStyleParams.linear.x1=t.width/2,l.advancedStyleParams.radial.y0=-l.textLine.data.length*t.lineHeight/2,l.advancedStyleParams.radial.y1=-l.textLine.data.length*t.lineHeight/2,l.advancedStyleParams.conic.x=0,l.advancedStyleParams.conic.y=-l.textLine.data.length*t.lineHeight/2;break;case"bottom-start":a=0,o=t.height,r="bottom",s="start",l.advancedStyleParams.linear.x0=0,l.advancedStyleParams.linear.x1=t.width,l.advancedStyleParams.radial.x0=t.width/2,l.advancedStyleParams.radial.y0=-l.textLine.data.length*t.lineHeight/2,l.advancedStyleParams.radial.x1=t.width/2,l.advancedStyleParams.radial.y1=-l.textLine.data.length*t.lineHeight/2,l.advancedStyleParams.conic.x=t.width/2,l.advancedStyleParams.conic.y=-l.textLine.data.length*t.lineHeight/2;break;case"bottom-end":a=t.width,o=t.height,r="bottom",s="end",l.advancedStyleParams.linear.x0=0,l.advancedStyleParams.linear.x1=-t.width,l.advancedStyleParams.radial.x0=-t.width/2,l.advancedStyleParams.radial.y0=-l.textLine.data.length*t.lineHeight/2,l.advancedStyleParams.radial.x1=-t.width/2,l.advancedStyleParams.radial.y1=-l.textLine.data.length*t.lineHeight/2,l.advancedStyleParams.conic.x=-t.width/2,l.advancedStyleParams.conic.y=-l.textLine.data.length*t.lineHeight/2;break;case"left":a=0,o=t.height/2,s="start",l.advancedStyleParams.linear.x0=0,l.advancedStyleParams.linear.x1=t.width,l.advancedStyleParams.radial.x0=t.width/2,l.advancedStyleParams.radial.x1=t.width/2,l.advancedStyleParams.conic.x=t.width/2,l.advancedStyleParams.conic.y=0;break;case"right":a=t.width,o=t.height/2,s="end",l.advancedStyleParams.linear.x0=0,l.advancedStyleParams.linear.x1=-t.width,l.advancedStyleParams.radial.x0=-t.width/2,l.advancedStyleParams.radial.x1=-t.width/2,l.advancedStyleParams.conic.x=-t.width/2,l.advancedStyleParams.conic.y=0;break}if(t.translateX=a,t.translateY=o,Ot(i?.textBaseline)&&(t.textBaseline=r),Ot(i?.textAlign)&&(t.textAlign=s),["text","multi-line-text"].includes(t.contentType))switch(t.textBaseline){case"middle":l.textLine.yOffsetValue=(l.textLine.data.length-1)*t.lineHeight/2;break;case"bottom":case"alphabetic":case"ideographic":l.textLine.yOffsetValue=(l.textLine.data.length-1)*t.lineHeight+(t.lineHeight-parseInt(t.fontSize))/2;break;case"top":case"hanging":l.textLine.yOffsetValue=-t.lineHeight/2+parseInt(t.fontSize)/2;break}return l},Lo=(function(e){typeof window>"u"||e&&Object.defineProperty(window,"MutationObserver",{writable:!1,configurable:!1})}),ta=(function(){function e(t,i){this.props=t,this.options=i,this.canvas=e.createCanvas(this.options.width,this.options.height),this.recommendOptions=m_(this.canvas,this.options,this.props)}return e.createCanvas=function(t,i){var n,l=window.devicePixelRatio||1,a=document.createElement("canvas");return a.width=t*l,a.height=i*l,a.style.width="".concat(t,"px"),a.style.height="".concat(i,"px"),(n=a.getContext("2d"))===null||n===void 0||n.setTransform(l,0,0,l,0,0),a},e.clearCanvas=function(t){var i=t.getContext("2d");if(i===null)throw new Error("get context error");i.restore(),i.resetTransform(),i.clearRect(0,0,t.width,t.height);var n=window.devicePixelRatio||1;i.setTransform(n,0,0,n,0,0)},e.prototype.getCanvas=function(){return this.canvas},e.prototype.clear=function(){e.clearCanvas(this.canvas)},e.prototype.draw=function(){var t=this,i=this.canvas.getContext("2d");if(i===null)throw new Error("get context error");return this.options.auxiliaryLine&&(i.beginPath(),i.rect(0,0,this.options.width,this.options.height),i.lineWidth=1,i.strokeStyle="#000",i.stroke(),i.closePath(),i.beginPath(),i.rect(this.options.translateX,this.options.translateY,1,1),i.lineWidth=1,i.strokeStyle="#f00",i.stroke(),i.closePath()),this.setStyle(i),i.save(),i.translate(this.options.translateX,this.options.translateY),i.rotate(this.options.rotate),new Promise(function(n){switch(t.options.contentType){case"text":t.drawText(i,n);break;case"image":t.drawImage(i,n);break;case"multi-line-text":t.drawMultiLineText(i,n);break;case"rich-text":t.drawRichText(i,n);break}})},e.prototype.setStyle=function(t){var i,n="fillStyle";this.options.textType==="stroke"&&(n="strokeStyle");var l=this.options.fontColor;if(!((i=this.options)===null||i===void 0)&&i.advancedStyle)switch(this.options.advancedStyle.type){case"linear":l=this.createLinearGradient(t);break;case"radial":l=this.createRadialGradient(t);break;case"conic":l=this.createConicGradient(t);break;case"pattern":l=this.createPattern(t);break}t[n]&&l&&(t[n]=l),this.options.textAlign&&(t.textAlign=this.options.textAlign),this.options.textBaseline&&(t.textBaseline=this.options.textBaseline),t.globalAlpha=this.options.globalAlpha,this.options.shadowStyle&&(t.shadowBlur=Ve(this.options.shadowStyle.shadowBlur,0),t.shadowColor=Ve(this.options.shadowStyle.shadowColor,"#00000000"),t.shadowOffsetX=Ve(this.options.shadowStyle.shadowOffsetX,0),t.shadowOffsetY=Ve(this.options.shadowStyle.shadowOffsetY,0)),Op(this.options.extraDrawFunc)&&this.options.extraDrawFunc(t)},e.prototype.createLinearGradient=function(t){var i,n,l,a,o,r,s,u,d,p,h,m,g,b,y,A=t.createLinearGradient(Ve((l=(n=(i=this.options.advancedStyle)===null||i===void 0?void 0:i.params)===null||n===void 0?void 0:n.linear)===null||l===void 0?void 0:l.x0,this.recommendOptions.advancedStyleParams.linear.x0),Ve((r=(o=(a=this.options.advancedStyle)===null||a===void 0?void 0:a.params)===null||o===void 0?void 0:o.linear)===null||r===void 0?void 0:r.y0,0),Ve((d=(u=(s=this.options.advancedStyle)===null||s===void 0?void 0:s.params)===null||u===void 0?void 0:u.linear)===null||d===void 0?void 0:d.x1,this.recommendOptions.advancedStyleParams.linear.x1),Ve((m=(h=(p=this.options.advancedStyle)===null||p===void 0?void 0:p.params)===null||h===void 0?void 0:h.linear)===null||m===void 0?void 0:m.y1,0));return(y=(b=(g=this.options)===null||g===void 0?void 0:g.advancedStyle)===null||b===void 0?void 0:b.colorStops)===null||y===void 0||y.forEach(function(w){A.addColorStop(w.offset,w.color)}),A},e.prototype.createConicGradient=function(t){var i,n,l,a,o,r,s,u,d,p,h,m,g,b,y,A=t.createConicGradient(Ve((a=(l=(n=(i=this.options)===null||i===void 0?void 0:i.advancedStyle)===null||n===void 0?void 0:n.params)===null||l===void 0?void 0:l.conic)===null||a===void 0?void 0:a.startAngle,0),Ve((u=(s=(r=(o=this.options)===null||o===void 0?void 0:o.advancedStyle)===null||r===void 0?void 0:r.params)===null||s===void 0?void 0:s.conic)===null||u===void 0?void 0:u.x,this.recommendOptions.advancedStyleParams.conic.x),Ve((m=(h=(p=(d=this.options)===null||d===void 0?void 0:d.advancedStyle)===null||p===void 0?void 0:p.params)===null||h===void 0?void 0:h.conic)===null||m===void 0?void 0:m.y,this.recommendOptions.advancedStyleParams.conic.y));return(y=(b=(g=this.options)===null||g===void 0?void 0:g.advancedStyle)===null||b===void 0?void 0:b.colorStops)===null||y===void 0||y.forEach(function(w){A.addColorStop(w.offset,w.color)}),A},e.prototype.createRadialGradient=function(t){var i,n,l,a,o,r,s,u,d,p,h,m,g,b,y,A,w,v,T,C,N,M,H,L,B,F,O,J=t.createRadialGradient(Ve((a=(l=(n=(i=this.options)===null||i===void 0?void 0:i.advancedStyle)===null||n===void 0?void 0:n.params)===null||l===void 0?void 0:l.radial)===null||a===void 0?void 0:a.x0,this.recommendOptions.advancedStyleParams.radial.x0),Ve((u=(s=(r=(o=this.options)===null||o===void 0?void 0:o.advancedStyle)===null||r===void 0?void 0:r.params)===null||s===void 0?void 0:s.radial)===null||u===void 0?void 0:u.y0,this.recommendOptions.advancedStyleParams.radial.y0),Ve((m=(h=(p=(d=this.options)===null||d===void 0?void 0:d.advancedStyle)===null||p===void 0?void 0:p.params)===null||h===void 0?void 0:h.radial)===null||m===void 0?void 0:m.r0,this.recommendOptions.advancedStyleParams.radial.r0),Ve((A=(y=(b=(g=this.options)===null||g===void 0?void 0:g.advancedStyle)===null||b===void 0?void 0:b.params)===null||y===void 0?void 0:y.radial)===null||A===void 0?void 0:A.x1,this.recommendOptions.advancedStyleParams.radial.x1),Ve((C=(T=(v=(w=this.options)===null||w===void 0?void 0:w.advancedStyle)===null||v===void 0?void 0:v.params)===null||T===void 0?void 0:T.radial)===null||C===void 0?void 0:C.y1,this.recommendOptions.advancedStyleParams.radial.y1),Ve((L=(H=(M=(N=this.options)===null||N===void 0?void 0:N.advancedStyle)===null||M===void 0?void 0:M.params)===null||H===void 0?void 0:H.radial)===null||L===void 0?void 0:L.r1,this.recommendOptions.advancedStyleParams.radial.r1));return(O=(F=(B=this.options)===null||B===void 0?void 0:B.advancedStyle)===null||F===void 0?void 0:F.colorStops)===null||O===void 0||O.forEach(function(U){J.addColorStop(U.offset,U.color)}),J},e.prototype.createPattern=function(t){var i,n,l,a,o,r,s,u;return t.createPattern((a=(l=(n=(i=this.options)===null||i===void 0?void 0:i.advancedStyle)===null||n===void 0?void 0:n.params)===null||l===void 0?void 0:l.pattern)===null||a===void 0?void 0:a.image,((u=(s=(r=(o=this.options)===null||o===void 0?void 0:o.advancedStyle)===null||r===void 0?void 0:r.params)===null||s===void 0?void 0:s.pattern)===null||u===void 0?void 0:u.repetition)||"")},e.prototype.setText=function(t,i){var n="fillText";this.options.textType==="stroke"&&(n="strokeText"),t[n]&&t[n](i.text,i.x,i.y,i.maxWidth)},e.prototype.drawText=function(t,i){this.setText(t,{text:this.options.content,x:0,y:0-this.recommendOptions.textLine.yOffsetValue,maxWidth:this.options.textRowMaxWidth||this.options.width}),i(t.canvas)},e.prototype.drawImage=function(t,i){var n=this;Tc(this.options.image).then(function(l){var a=n.getImageRect(l),o=a.width,r=a.height,s=n.getDrawImagePosition(o,r);t.drawImage(l,s.x,s.y,o,r),i(t.canvas)})},e.prototype.drawMultiLineText=function(t,i){var n=this,l=this.recommendOptions.textLine.data,a=this.recommendOptions.textLine.yOffsetValue;l.forEach(function(o,r){n.setText(t,{text:o,x:0,y:n.options.lineHeight*r-a,maxWidth:n.options.textRowMaxWidth||n.options.width})}),i(t.canvas)},e.prototype.drawRichText=function(t,i){return di(this,void 0,void 0,function(){var n,l=this;return Gt(this,function(a){switch(a.label){case 0:return[4,c_(t,this.options)];case 1:return n=a.sent(),Tc(u_(n.element),n.width,n.height).then(function(o){var r=l.getDrawImagePosition(o.width,o.height);t.drawImage(o,r.x,r.y,o.width,o.height),i(t.canvas)}),[2]}})})},e.prototype.getImageRect=function(t){var i={width:this.options.imageWidth||0,height:this.options.imageHeight||0};switch(!0){case(i.width!==0&&i.height===0):i.height=i.width*t.height/t.width;break;case(i.width===0&&i.height!==0):i.width=i.height*t.width/t.height;break;case(i.width===0&&i.height===0):i.width=t.width,i.height=t.height;break}return i},e.prototype.getDrawImagePosition=function(t,i){var n,l,a={x:-t/2,y:-i/2};switch(this.options.translatePlacement){case"top":a.x=-t/2,a.y=0;break;case"top-start":a.x=0,a.y=0;break;case"top-end":a.x=-t,a.y=0;break;case"bottom":a.x=-t/2,a.y=-i;break;case"bottom-start":a.x=0,a.y=-i;break;case"bottom-end":a.x=-t,a.y=-i;break;case"left":a.x=0,a.y=-i/2;break;case"right":a.x=-t,a.y=-i/2;break}return!Ot((n=this.props)===null||n===void 0?void 0:n.translateX)&&(a.x=0),!Ot((l=this.props)===null||l===void 0?void 0:l.translateY)&&(a.y=0),a},e})(),f_=(function(){function e(t,i){var n,l,a,o;this.options=t,this.partialWidth=this.options.width,this.partialHeight=this.options.height,this.rows=((n=this.options.gridLayoutOptions)===null||n===void 0?void 0:n.rows)||1,this.cols=((l=this.options.gridLayoutOptions)===null||l===void 0?void 0:l.cols)||1,this.matrix=((a=this.options.gridLayoutOptions)===null||a===void 0?void 0:a.matrix)||p_(this.rows,this.cols,1),this.gap=((o=this.options.gridLayoutOptions)===null||o===void 0?void 0:o.gap)||[0,0],this.partialCanvas=i}return e.prototype.draw=function(){var t,i,n,l,a,o,r,s,u=ta.createCanvas(((t=this.options.gridLayoutOptions)===null||t===void 0?void 0:t.width)||this.partialWidth*this.cols+this.gap[0]*this.cols,((i=this.options.gridLayoutOptions)===null||i===void 0?void 0:i.height)||this.partialHeight*this.rows+this.gap[1]*this.rows),d=u.getContext("2d");!((n=this.options.gridLayoutOptions)===null||n===void 0)&&n.backgroundImage&&d?.drawImage((l=this.options.gridLayoutOptions)===null||l===void 0?void 0:l.backgroundImage,0,0,(a=this.options.gridLayoutOptions)===null||a===void 0?void 0:a.width,(o=this.options.gridLayoutOptions)===null||o===void 0?void 0:o.height);for(var p=0;p<this.rows;p++)for(var h=0;h<this.cols;h++)!((s=(r=this.matrix)===null||r===void 0?void 0:r[p])===null||s===void 0)&&s[h]&&d?.drawImage(this.partialCanvas,this.partialWidth*h+this.gap[0]*h,this.partialHeight*p+this.gap[1]*p,this.partialWidth,this.partialHeight);return u},e})(),g_=function(e,t){switch(e.layout){case"grid":return new f_(e,t).draw();default:return t}},v_=function(e){var t,i,n;switch(e.layout){case"grid":{var l=((t=e.gridLayoutOptions)===null||t===void 0?void 0:t.cols)||1,a=((i=e.gridLayoutOptions)===null||i===void 0?void 0:i.rows)||1,o=((n=e.gridLayoutOptions)===null||n===void 0?void 0:n.gap)||[0,0];return[e.width*l+o[0]*l,e.height*a+o[1]*a]}default:return[e.width,e.height]}},Dp=(function(){function e(t){t===void 0&&(t={}),this.parentElement=document.body,this.isCreating=!1,this.props=t,this.options=Ei(Ei({},xc),t),this.changeParentElement(this.options.parent),this.watermarkCanvas=new ta(this.props,this.options),Lo(this.options.monitorProtection)}return e.prototype.changeOptions=function(){return di(this,arguments,void 0,function(t,i,n){return t===void 0&&(t={}),i===void 0&&(i="overwrite"),n===void 0&&(n=!0),Gt(this,function(l){switch(l.label){case 0:return this.initConfigData(t,i),Lo(this.options.monitorProtection),n?(this.remove(),[4,this.create()]):[3,2];case 1:l.sent(),l.label=2;case 2:return[2]}})})},e.prototype.create=function(){return di(this,void 0,void 0,function(){var t,i,n,l,a,o,r,s,u,d,p,h;return Gt(this,function(m){switch(m.label){case 0:return this.isCreating?[2]:(this.isCreating=!0,this.validateUnique()?this.validateContent()?(t=Ot(this.watermarkDom),[4,(o=this.watermarkCanvas)===null||o===void 0?void 0:o.draw()]):(this.isCreating=!1,[2]):(this.isCreating=!1,[2]));case 1:if(m.sent(),this.layoutCanvas=g_(this.options,(r=this.watermarkCanvas)===null||r===void 0?void 0:r.getCanvas()),i=Cp(this.layoutCanvas),(s=this.watermarkCanvas)===null||s===void 0||s.clear(),this.watermarkDom=document.createElement("div"),n=document.createElement("div"),this.watermarkDom.__WATERMARK__="watermark",this.watermarkDom.__WATERMARK__INSTANCE__=this,l=this.checkParentElementType(),this.watermarkDom.style.cssText=`
      z-index:`.concat(this.options.zIndex,`!important;display:block!important;visibility:visible!important;transform:none!important;scale:none!important;
      `).concat(l==="custom"?"top:0!important;bottom:0!important;left:0!important;right:0!important;height:100%!important;pointer-events:none!important;position:absolute!important;":"position:relative!important;",`
    `),a=v_(this.options),n.style.cssText=`
      display:block!important;visibility:visible!important;pointer-events:none;top:0;bottom:0;left:0;right:0;transform:none!important;scale:none!important;
      position:`.concat(l==="root"?"fixed":"absolute",`!important;-webkit-print-color-adjust:exact!important;width:100%!important;height:100%!important;
      z-index:`).concat(this.options.zIndex,"!important;background-image:url(").concat(i,")!important;background-repeat:").concat(this.options.backgroundRepeat,`!important;
      background-size:`).concat(a[0],"px ").concat(a[1],"px!important;background-position:").concat(this.options.backgroundPosition,`;
      `).concat(h_(this.options.movable,this.options.backgroundRepeat),`
    `),this.watermarkDom.appendChild(n),this.parentElement.appendChild(this.watermarkDom),this.options.mutationObserve)try{this.bindMutationObserve()}catch{(d=(u=this.options).onObserveError)===null||d===void 0||d.call(u)}return t&&((h=(p=this.options).onSuccess)===null||h===void 0||h.call(p)),this.isCreating=!1,[2]}})})},e.prototype.destroy=function(){this.remove(),this.watermarkDom=void 0},e.prototype.check=function(){return di(this,void 0,void 0,function(){return Gt(this,function(t){return[2,this.parentElement.contains(this.watermarkDom)]})})},e.prototype.remove=function(){var t,i,n,l,a,o,r,s;(i=(t=this.options).onBeforeDestroy)===null||i===void 0||i.call(t),(n=this.observer)===null||n===void 0||n.disconnect(),(l=this.parentObserve)===null||l===void 0||l.disconnect(),(o=(a=this.watermarkDom)===null||a===void 0?void 0:a.parentNode)===null||o===void 0||o.removeChild(this.watermarkDom),(s=(r=this.options).onDestroyed)===null||s===void 0||s.call(r)},e.prototype.initConfigData=function(t,i){var n=this;i===void 0&&(i="overwrite"),i==="append"?Object.keys(t).forEach(function(l){n.props&&(n.props[l]=t[l])}):this.props=t,this.options=Ei(Ei({},xc),this.props),this.changeParentElement(this.options.parent),this.watermarkCanvas=new ta(this.props,this.options)},e.prototype.changeParentElement=function(t){if(typeof t=="string"){var i=document.querySelector(t);i&&(this.parentElement=i)}else this.parentElement=t;this.parentElement||console.error("[WatermarkJsPlus]: please pass a valid parent element.")},e.prototype.validateUnique=function(){var t=!0;return Array.from(this.parentElement.childNodes).forEach(function(i){t&&Object.hasOwnProperty.call(i,"__WATERMARK__")&&(t=!1)}),t},e.prototype.validateContent=function(){switch(this.options.contentType){case"image":return Object.hasOwnProperty.call(this.options,"image");case"multi-line-text":case"rich-text":case"text":return this.options.content.length>0}},e.prototype.checkParentElementType=function(){return["html","body"].includes(this.parentElement.tagName.toLocaleLowerCase())?"root":"custom"},e.prototype.bindMutationObserve=function(){var t=this;this.watermarkDom&&(this.observer=new MutationObserver(function(i){return di(t,void 0,void 0,function(){return Gt(this,function(n){switch(n.label){case 0:return i.length>0?(this.remove(),[4,this.create()]):[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}),this.observer.observe(this.watermarkDom,{attributes:!0,childList:!0,subtree:!0,characterData:!0}),this.parentObserve=new MutationObserver(function(i){return di(t,void 0,void 0,function(){var n,l,a,o;return Gt(this,function(r){switch(r.label){case 0:n=0,l=i,r.label=1;case 1:return n<l.length?(a=l[n],a?.target===this.watermarkDom||((o=a?.removedNodes)===null||o===void 0?void 0:o[0])===this.watermarkDom||a.type==="childList"&&a.target===this.parentElement&&a.target.lastChild!==this.watermarkDom?(this.remove(),[4,this.create()]):[3,3]):[3,4];case 2:r.sent(),r.label=3;case 3:return n++,[3,1];case 4:return[2]}})})}),this.parentObserve.observe(this.parentElement,{attributes:!0,childList:!0,subtree:!0,characterData:!0}))},e})();(function(e){o_(t,e);function t(i){i===void 0&&(i={});var n={globalAlpha:.005,mode:"blind"};return e.call(this,Ei(Ei({},i),n))||this}return t.prototype.changeOptions=function(){return di(this,arguments,void 0,function(i,n,l){return i===void 0&&(i={}),n===void 0&&(n="overwrite"),l===void 0&&(l=!0),Gt(this,function(a){switch(a.label){case 0:return i.globalAlpha=.005,i.mode="blind",this.initConfigData(i,n),Lo(this.options.monitorProtection),l?(this.remove(),[4,this.create()]):[3,2];case 1:a.sent(),a.label=2;case 2:return[2]}})})},t.decode=function(i){var n=i.url,l=n===void 0?"":n,a=i.fillColor,o=a===void 0?"#000":a,r=i.compositeOperation,s=r===void 0?"color-burn":r,u=i.mode,d=u===void 0?"canvas":u,p=i.compositeTimes,h=p===void 0?3:p,m=i.onSuccess;if(l&&d==="canvas"){var g=new Image;g.src=l,g.addEventListener("load",function(){var b=g.width,y=g.height,A=ta.createCanvas(b,y),w=A.getContext("2d");if(!w)throw new Error("get context error");w.drawImage(g,0,0,b,y),w.globalCompositeOperation=s,w.fillStyle=o;for(var v=0;v<h;v++)w.fillRect(0,0,b,y);var T=Cp(A);Op(m)&&m?.(T)})}},t})(Dp);const __=(e,t)=>{const i=Pu(),n=new Dp,l=()=>{if(se(t)){const a={content:i.value.title,fontColor:"#76747f",globalAlpha:se(e).mode==="blind"?.005:.165,...se(e)};a.image?.startsWith("/")&&(a.image=ye(a.image)),n.changeOptions(a)}else n.destroy()};ze([t,Ce(e)?e:null],l,{flush:"post"})},Ip=Symbol(""),b_=Q({}),y_=e=>{const t=we(Ip),i=Ue();return E(()=>{const{watermark:n}=i.value;return{...se(e),...t.value,...Lt(n)?n:{}}})},w_=e=>{e.provide(Ip,b_)};var k_={movable:!0},E_=Qe({enhance({app:e}){w_(e)},setup(){const e=Ue(),t=y_(E(()=>{const{watermark:n}=e.value;return Lt(n)?{}:k_})),i=E(()=>{const{watermark:n}=e.value;return!!(n??!1)});__(t,i)}});const A_=Object.freeze(Object.defineProperty({__proto__:null,default:E_},Symbol.toStringTag,{value:"Module"}));var Lc={"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"},"/en/":{word:"About $word words",less1Minute:"Less than 1 minute",time:"About $time min"}};const Rp=()=>{const e=Yi();return E(()=>e.value.readingTime??null)},Bp=(e,t)=>{const{minutes:i,words:n}=e,{less1Minute:l,word:a,time:o}=t;return{time:i<1?l:o.replace("$time",Math.round(i).toString()),words:a.replace("$word",n.toString())}},Sc={words:"",time:""},So=typeof Lc>"u"?null:Lc,$p=()=>So?gt(So):E(()=>null),T_=()=>{if(So===null)return E(()=>Sc);const e=Rp(),t=$p();return E(()=>e.value&&t.value?Bp(e.value,t.value):Sc)},Pc=()=>null,x_=()=>{const e=Ep();return t=>yp({serverURL:e.value.serverURL,...t})},L_="719px",S_="1440px",P_="9",Cn={mobileBreakPoint:L_,pcBreakPoint:S_,colorNumber:P_},Ci=()=>ip(),Nt=()=>Vv(),Oe=()=>({...jt(),theme:Ci(),themeLocale:Nt()}),nt=()=>{const e=Ci();return E(()=>!!e.value.pure)},Mp=()=>{const e=Nt();return E(()=>e.value.author)},Cc=e=>Lt(e)&&pe(e.name),il=(e,t=!1)=>e?Jt(e)?e.map(i=>pe(i)?{name:i}:Cc(i)?i:null).filter(i=>i!==null):pe(e)?[{name:e}]:Cc(e)?[e]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${t?"":"| false"} | undefined\`, but got`,e),[]):[],Vp=(e,t)=>{if(e){if(Jt(e)&&e.every(pe))return e;if(pe(e))return[e];console.error(`Expect ${t} to be \`string[] | string | undefined\`, but got`,e)}return[]},Fp=e=>Vp(e,"category"),jp=e=>Vp(e,"tag"),Np=()=>{const e=Ue(),t=Mp();return E(()=>{const{author:i}=e.value;return i?il(i):i===!1?[]:il(t.value,!1)})},C_=()=>{const e=Ue(),t=we(Symbol.for("categoryMap"),null);return E(()=>Fp(e.value.category??e.value.categories).map(i=>({name:i,path:t?.value.map[i]?.path??""})))},O_=()=>{const e=Ue(),t=we(Symbol.for("tagMap"),null);return E(()=>jp(e.value.tag??e.value.tags).map(i=>({name:i,path:t?.value.map[i]?.path??""})))},D_=()=>{const{frontmatter:e,page:t}=Oe();return E(()=>{const i=mr(e.value.date);if(i)return i;const{createdTime:n}=t.value.git??{};return n?new Date(n):null})},I_=()=>{const{frontmatter:e,themeLocale:t}=Oe(),i=Np(),n=C_(),l=O_(),a=D_(),o=Rp(),r=T_(),s=E(()=>({author:i.value,category:n.value,date:a.value,tag:l.value,isOriginal:e.value.isOriginal??!1,readingTime:o.value,readingTimeLocale:r.value,pageview:e.value.pageview??!0})),u=E(()=>e.value.pageInfo??t.value.pageInfo??null);return{info:s,items:u}},vt=()=>{const e=Nt();return E(()=>e.value.metaLocales)},R_="http://.",mi=()=>{const e=Si(),t=Ft();return i=>{if(!i)return;if(pl(i))return window.open(i);if(ml(i))return t.fullPath===i?void 0:void e.push(i);const n=t.path.slice(0,t.path.lastIndexOf("/"));return void e.push(new URL(`${n}/${encodeURI(i)}`,R_).pathname)}},Hp=()=>c(ge,{name:"author"},()=>c("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));Hp.displayName="AuthorIcon";const zp=()=>c(ge,{name:"calendar"},()=>c("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));zp.displayName="CalendarIcon";const qp=()=>c(ge,{name:"category"},()=>c("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));qp.displayName="CategoryIcon";const Up=()=>c(ge,{name:"eye"},()=>c("path",{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"}));Up.displayName="EyeIcon";const Wp=()=>c(ge,{name:"fire"},()=>c("path",{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"}));Wp.displayName="FireIcon";const Gp=()=>c(ge,{name:"print"},()=>c("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));Gp.displayName="PrintIcon";const Yp=()=>c(ge,{name:"tag"},()=>c("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Yp.displayName="TagIcon";const Kp=()=>c(ge,{name:"timer"},()=>c("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));Kp.displayName="TimerIcon";const Jp=()=>c(ge,{name:"word"},()=>[c("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),c("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);Jp.displayName="WordIcon";var B_=D({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0}},setup(e){const t=vt(),i=nt();return()=>e.author.length?c("span",{class:"page-author-info","aria-label":`${t.value.author}${i.value?"":"🖊"}`,...i.value?{}:{"data-balloon-pos":"up"}},[c(Hp),c("span",e.author.map(n=>n.url?c("a",{class:"page-author-item",href:n.url,target:"_blank",rel:"noopener noreferrer"},n.name):c("span",{class:"page-author-item"},n.name))),c("span",{property:"author",content:e.author.map(n=>n.name).join(", ")})]):null}}),$_=D({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0}},setup(e){const t=vt(),i=mi(),n=nt();return()=>e.category.length?c("span",{class:"page-category-info","aria-label":`${t.value.category}${n.value?"":"🌈"}`,...n.value?{}:{"data-balloon-pos":"up"}},[c(qp),e.category.map(({name:l,path:a})=>c("span",{class:["page-category-item",{[`color${gl(l,Number(Cn.colorNumber))}`]:!n.value,clickable:a}],role:a?"navigation":"",onClick:()=>{a&&i(a)}},l)),c("meta",{property:"articleSection",content:e.category.map(({name:l})=>l).join(",")})]):null}}),M_=D({name:"DateInfo",inheritAttrs:!1,props:{date:Object},setup(e){const t=Su(),i=vt(),n=nt(),l=E(()=>new Intl.DateTimeFormat(t.value,{dateStyle:"short"})),a=E(()=>e.date?l.value.format(e.date):null);return()=>e.date?c("span",{class:"page-date-info","aria-label":`${i.value.date}${n.value?"":"📅"}`,...n.value?{}:{"data-balloon-pos":"up"}},[c(zp),c("span",{"data-allow-mismatch":"text"},a.value),c("meta",{property:"datePublished",content:e.date.toISOString()||""})]):null}}),V_=D({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(e){const t=vt();return()=>e.isOriginal?c("span",{class:"page-original-info"},t.value.origin):null}}),F_=D({name:"PageViewInfo",inheritAttrs:!1,props:{pageview:[Boolean,String]},setup(e){const t=ur(),i=vt(),n=nt(),l=ee(),a=Q(0);return _r(l,()=>{const o=l.value.textContent;o&&!isNaN(Number(o))&&(a.value=Number(o))},{childList:!0}),()=>e.pageview?c("span",{class:"page-pageview-info","aria-label":`${i.value.views}${n.value?"":"🔢"}`,...n.value?{}:{"data-balloon-pos":"up"}},[c(a.value<1e3?Up:Wp),c("span",{ref:l,id:"ArtalkPV",class:"vp-pageview waline-pageview-count","data-path":pe(e.pageview)?e.pageview:t.value,"data-page-key":pe(e.pageview)?e.pageview:t.value},"...")]):null}}),j_=D({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:Object,readingTimeLocale:Object},setup(e){const t=vt(),i=nt(),n=E(()=>{if(!e.readingTime)return null;const{minutes:l}=e.readingTime;return l<1?"PT1M":`PT${Math.round(l)}M`});return()=>e.readingTimeLocale?.time?c("span",{class:"page-reading-time-info","aria-label":`${t.value.readingTime}${i.value?"":"⌛"}`,...i.value?{}:{"data-balloon-pos":"up"}},[c(Kp),c("span",e.readingTimeLocale.time),c("meta",{property:"timeRequired",content:n.value})]):null}}),N_=D({name:"TagInfo",inheritAttrs:!1,props:{tag:Array},setup(e){const t=vt(),i=mi(),n=nt();return()=>e.tag?.length?c("span",{class:"page-tag-info","aria-label":`${t.value.tag}${n.value?"":"🏷"}`,...n.value?{}:{"data-balloon-pos":"up"}},[c(Yp),e.tag.map(({name:l,path:a})=>c("span",{class:["page-tag-item",{[`color${gl(l,Number(Cn.colorNumber))}`]:!n.value,clickable:a}],role:a?"navigation":"",onClick:()=>{a&&i(a)}},l)),c("meta",{property:"keywords",content:e.tag.map(({name:l})=>l).join(",")})]):null}}),H_=D({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:Object,readingTimeLocale:Object},setup(e){const t=vt(),i=nt();return()=>e.readingTimeLocale?.words?c("span",{class:"page-word-info","aria-label":`${t.value.words}${i.value?"":"🔠"}`,...i.value?{}:{"data-balloon-pos":"up"}},[c(Jp),c("span",e.readingTimeLocale.words),c("meta",{property:"wordCount",content:e.readingTime?.words})]):null}}),Qp=D({name:"PageInfo",components:{AuthorInfo:B_,CategoryInfo:$_,DateInfo:M_,OriginalInfo:V_,PageViewInfo:F_,ReadingTimeInfo:j_,TagInfo:N_,WordInfo:H_},props:{items:[Boolean,Array],info:{type:Object,required:!0}},setup(e){const t=nt();return()=>{const i=e.items??["Author","Original","Date","PageView","ReadingTime","Category","Tag"];return i?c("div",{class:"page-info"},i.map(n=>c(Pe(`${n}Info`),{...e.info,isPure:t.value}))):null}}});const Tr={"/course/":[{text:"深入浅出计算机网络",prefix:"深入浅出计算机网络/",collapsible:!0,icon:"network-wired",children:[]},"bigdata","cao-zuo-xi-tong-gai-lun","Operating-System-Practice","db-read-data","Android-development","bian-yi-yuan-li","Network-review"],"/daily/":["str-repr","algolia","bitmap","ci","django-auth","docker-desktop-wsl2-change-dir","elasticsearch","docker","hook","javabean","Listary-Everything","Promise-base","pycharm-remote-develop","python-mateclass","python-memory-management-strategy","pythonGenerator","Python-loop","Redis","runtime","TCP","tree","Ubuntu","Vim","vue3-lifecycle","vuepress-starter","BST","Functioncallback","frontend-base","dp","Synergetic-process","RIP-OSPF","decorator","scm- prefix-config","common-nouns","wechat-deploy","Message-push","Class-defines-itself-internally","Thread-safety","python_inf_nan","LoadBalance","remote-server-usage","lock"],"/java/":["bean","hashmap","oj-mate","tips","base","jeepay","lock","mapstruct","parallel-stream","spring-aop","springboot-error-path","踩坑记录","requestbody-requestparam","sql-query","volatile","session","类加载和双亲委派"],"/llm/":["Current Research Status of LLMs in Processing Tabu","prompt","coda-correction"],"/mysql/":["read-many-data"],"/interview/":["aq","bytedance","code","hikvision","didi","note","me"],"/knowledge_base/":["api","sql"],"/leetcode/":["leetcode","tips"],"/other/":["github-page","otherAPI","aliyun-server"],"/problem/":["Android Studio","Conda-Downloaded-bytes-did-not-match-Content-Length","jupyterlab","Microsoft-typewriting","Python-cls-self-classmethod-staticmethod","vim","wechat-backend-Django","Too-many-redirects"],"/reprint/":["pythonMultithreading","Vue-improve10","rag-or-fine-tuning","redis-template"],"/tip/":[{text:"Markdown 介绍",prefix:"markdown/",collapsible:!0,icon:"teenyicons:markdown-solid",children:["markdown-intro","demo",{text:"Emoji 列表",prefix:"emoji/",collapsible:!0,icon:"mdi:emoji",children:["emoji","people","place","object","symbol","nature"]}]},"Jupyter Lab Useage","typora","encrypt","disable","page"],"/read-paper/":[],"/trance/":[],"/paprikayi/":["Halloween"],"/paper/":["Data-Copilot- Bridging Billions of Data and Humans with Autonomous Workflow","SELF-INSTRUCT Aligning Language Models with Self-Generated Instructions"]},Xp=Symbol(""),vl=()=>{const e=we(Xp);if(!e)throw new Error("useDarkMode() is called without provider.");return e},z_=e=>{const t=h2(),i=Ci(),n=E(()=>i.value.darkmode??"switch"),l=Qi("vuepress-theme-hope-scheme","auto"),a=E(()=>{const r=n.value;return r==="disable"?!1:r==="enable"?!0:r==="auto"?t.value:r==="toggle"?l.value==="dark":l.value==="dark"||l.value==="auto"&&t.value}),o=E(()=>{const r=n.value;return r==="switch"||r==="toggle"});e.provide(Xp,{canToggle:o,config:n,isDarkMode:a,status:l}),Object.defineProperties(e.config.globalProperties,{$isDarkMode:{get:()=>a.value}})},q_=()=>{const{config:e,isDarkMode:t,status:i}=vl();da(()=>{e.value==="disable"?i.value="light":e.value==="enable"?i.value="dark":e.value==="toggle"&&i.value==="auto"&&(i.value="light")}),re("beforeprint",()=>{t.value&&document.documentElement.setAttribute("data-theme","light")}),re("afterprint",()=>{t.value&&document.documentElement.setAttribute("data-theme","dark")}),de(()=>{ze(t,n=>{document.documentElement.setAttribute("data-theme",n?"dark":"light")})})},Po=e=>!pl(e)&&!or(e),ia=(e,t=!1,i)=>{const{meta:n,path:l,notFound:a}=Tt(e,i);return a?{text:l,link:l}:{text:!t&&n.shortTitle?n.shortTitle:n.title||l,link:l,icon:n.icon}},$i=(e="",t="")=>pl(t)||ml(t)?t:`${rr(e)}${t}`,Zp=(e,t)=>{const i=pe(e)?ia($i(t,e)):pe(e.link)?{...e,link:Po(e.link)?Tt($i(t,e.link)).path:e.link}:e;if("children"in i){const n=$i(t,i.prefix),l=i.children==="structure"?Tr[n]:i.children;return{...i,prefix:n,children:l.map(a=>Zp(a,n))}}return{...i}},Co=({config:e,prefix:t=""})=>e.map(i=>Zp(i,t)),U_=({config:e,routePath:t})=>{const i=ft(e).sort((n,l)=>l.length-n.length);for(const n of i)if(qi(decodeURI(t),n)){const l=e[n];return Co({config:l==="structure"?Tr[n]:l||[],prefix:n})}return console.warn(`${decodeURI(t)} is missing it's sidebar config.`),[]},W_=({config:e,routeLocale:t,routePath:i})=>e==="structure"?Co({config:Tr[t],prefix:t}):Jt(e)?Co({config:e}):Lt(e)?U_({config:e,routePath:i}):[],eh=Symbol(""),G_=()=>{const{frontmatter:e,routeLocale:t,routePath:i,themeLocale:n}=Oe(),l=E(()=>e.value.home?!1:e.value.sidebar??n.value.sidebar??"structure"),a=E(()=>W_({config:l.value,routeLocale:t.value,routePath:i.value}));It(eh,a)},xr=()=>{const e=we(eh);if(!e)throw new Error("useSidebarItems() is called without provider.");return e};var Y_=D({name:"PageFooter",setup(){const{frontmatter:e,theme:t,themeLocale:i}=Oe(),n=Np(),l=E(()=>{const{copyright:u,footer:d}=e.value;return d!==!1&&!!(u||d||i.value.displayFooter)}),a=E(()=>{const{footer:u}=e.value;return pe(u)?u:i.value.footer??""}),o=E(()=>n.value.map(({name:u})=>u).join(", ")),r=u=>`Copyright © ${new Date().getFullYear()} ${o.value} ${u?`${u} Licensed`:""}`,s=E(()=>{const{copyright:u,license:d=""}=e.value,{license:p}=t.value,{copyright:h}=i.value;return u??(d?r(d):h??(o.value||p?r(p):!1))});return()=>l.value?c("footer",{class:"vp-footer-wrapper","vp-footer":""},[a.value?c("div",{class:"vp-footer",innerHTML:a.value}):null,s.value?c("div",{class:"vp-copyright",innerHTML:s.value}):null]):null}});const th=()=>c(ge,{name:"outlook"},()=>[c("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);th.displayName="AppearanceIcon";const ih=()=>c(ge,{name:"auto"},()=>c("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));ih.displayName="AutoColorModeIcon";const nh=()=>c(ge,{name:"light"},()=>c("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));nh.displayName="LightColorModeIcon";const lh=()=>c(ge,{name:"dark"},()=>c("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));lh.displayName="DarkColorModeIcon";var ah=D({name:"ColorModeSwitch",setup(){const{config:e,isDarkMode:t,status:i}=vl(),n=nt(),l=()=>{e.value==="switch"?i.value={light:"dark",dark:"auto",auto:"light"}[i.value]:i.value=i.value==="light"?"dark":"light"},a=async o=>{if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!n.value)){l();return}const r=o.clientX,s=o.clientY,u=Math.hypot(Math.max(r,innerWidth-r),Math.max(s,innerHeight-s)),d=t.value;await document.startViewTransition(async()=>{l(),await xt()}).ready,t.value!==d&&document.documentElement.animate({clipPath:t.value?[`circle(${u}px at ${r}px ${s}px)`,`circle(0px at ${r}px ${s}px)`]:[`circle(0px at ${r}px ${s}px)`,`circle(${u}px at ${r}px ${s}px)`]},{duration:400,pseudoElement:t.value?"::view-transition-old(root)":"::view-transition-new(root)"})};return()=>c("button",{type:"button",class:"vp-color-mode-switch",id:"color-mode-switch",onClick:a},[c(ih,{style:{display:i.value==="auto"?"block":"none"}}),c(lh,{style:{display:i.value==="dark"?"block":"none"}}),c(nh,{style:{display:i.value==="light"?"block":"none"}})])}});const oh=()=>{const e=Nt();return E(()=>e.value.outlookLocales)};var K_=D({name:"ColorMode",setup(){const e=oh(),{canToggle:t}=vl();return()=>t.value?c("div",{class:"vp-color-mode"},[c("label",{class:"vp-color-mode-title",for:"color-mode-switch"},e.value.darkmode),c(ah)]):null}});const rh=()=>c(ge,{name:"cancel-fullscreen"},()=>c("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));rh.displayName="CancelFullScreenIcon";const sh=()=>c(ge,{name:"enter-fullscreen"},()=>c("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));sh.displayName="EnterFullScreenIcon";var ch=D({name:"ToggleFullScreenButton",setup(){const{isSupported:e,isFullscreen:t,toggle:i}=wa();return()=>e.value?c("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:t.value,onClick:()=>i()},t.value?c(rh):c(sh)):null}}),J_=D({name:"ToggleFullScreenButton",setup(){const e=oh(),{isSupported:t}=wa();return()=>t.value?c("div",{class:"full-screen-wrapper"},[c("label",{class:"full-screen-title",for:"full-screen-switch"},e.value.fullscreen),c(ch)]):null}}),dh=D({name:"AppearanceSettings",setup(){const e=Ci(),t=nt(),i=E(()=>!t.value&&e.value.fullscreen);return()=>c(va,()=>[null,c(K_),i.value?c(J_):null])}}),Q_=D({name:"AppearanceButton",setup(){const e=Ci(),{canToggle:t}=vl(),{isSupported:i}=wa(),n=nt(),l=Q(!1),a=E(()=>!n.value&&e.value.fullscreen&&i),o=E(()=>t.value||a.value);return Zt(()=>{l.value=!1}),()=>o.value?c("div",{class:"vp-nav-item hide-in-mobile"},t.value&&!a.value?c(ah):a.value&&!t.value?c(ch):c("button",{type:"button",class:["vp-appearance-button",{open:l.value}],tabindex:"-1","aria-hidden":!0},[c(th),c("div",{class:"vp-appearance-dropdown"},c(dh))])):null}});const uh=()=>c(ge,{name:"i18n"},()=>[c("path",{d:"M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"})]);uh.displayName="I18nIcon";const it=({config:e,iconSizing:t="both"},{emit:i,slots:n})=>{const{icon:l}=e;return c(eg,{config:e,onFocusout:()=>{i("focusout")}},{...n,before:n.before??(l?()=>c(Pe("VPIcon"),{icon:l,sizing:t}):null)})};it.displayName="AutoLink";var ph=D({name:"NavbarDropdown",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){const i=Ln(e,"config"),n=E(()=>i.value.ariaLabel??i.value.text),l=Q(!1),a=o=>{o.detail===0&&(l.value=!l.value)};return Zt(()=>{l.value=!1}),()=>c("div",{class:["vp-dropdown-wrapper",{open:l.value}]},[c("button",{type:"button",class:"vp-dropdown-title","aria-label":n.value,onClick:a},[t.title?.()??[c(Pe("VPIcon"),{icon:i.value.icon}),e.config.text],c("span",{class:"arrow"}),c("ul",{class:"vp-dropdown"},i.value.children.map((o,r)=>{const s=r===i.value.children.length-1;return c("li",{class:"vp-dropdown-item"},"children"in o?[c("h4",{class:"vp-dropdown-subtitle"},o.link?c(it,{config:o,onFocusout:()=>{o.children.length===0&&s&&(l.value=!1)}}):o.text),c("ul",{class:"vp-dropdown-subitems"},o.children.map((u,d)=>c("li",{class:"vp-dropdown-subitem"},c(it,{config:u,onFocusout:()=>{d===o.children.length-1&&s&&(l.value=!1)}}))))]:c(it,{config:o,onFocusout:()=>{s&&(l.value=!1)}}))}))])])}});const X_=()=>{const{routeLocale:e,site:t,siteLocale:i,theme:n,themeLocale:l}=Oe(),a=P2(),o=Ft(),r=Q(!1);return de(()=>{r.value=!0}),E(()=>{const s=ft(t.value.locales),u=Pi(n.value.extraLocales??{});if(s.length<2&&!u.length)return null;const{path:d,fullPath:p}=o,{navbarLocales:h}=l.value;return{text:"",ariaLabel:h.selectLangAriaLabel,children:[...s.map(m=>{const g=t.value.locales[m]??{},b=n.value.locales[m]??{},y=g.lang,A=b.navbarLocales.langName;let w;if(y===i.value.lang)w=p;else{const v=d.replace(e.value,m);w=a.value.some(T=>T===v)?r.value?p.replace(d,v):v:b.home??m}return{text:A,link:w}}),...u.map(([m,g])=>({text:m,link:g.replace(":route",(r.value?p:g).replace(e.value,""))}))]}})};var Z_=D({name:"LanguageDropdown",setup(){const e=X_();return()=>e.value?c("div",{class:"vp-nav-item"},c(ph,{config:e.value},{title:()=>c(uh,{"aria-label":e.value?.ariaLabel,style:{width:"1rem",height:"1rem",verticalAlign:"middle"}})})):null}}),e6=D({name:"NavScreenMenu",props:{config:{type:Object,required:!0}},setup(e){const t=Ln(e,"config"),i=Ft(),n=E(()=>t.value.ariaLabel??t.value.text),l=Q(!1),a=(o,r)=>r[r.length-1]===o;return Zt(()=>{l.value=!1}),ke(()=>i.fullPath,()=>{l.value=!1}),()=>[c("button",{type:"button",class:["vp-nav-screen-menu-title",{active:l.value}],"aria-label":n.value,onClick:()=>{l.value=!l.value}},[c("span",{class:"text"},[c(Pe("VPIcon"),{icon:t.value.icon,sizing:"both"}),e.config.text]),c("span",{class:["arrow",l.value?"down":"end"]})]),c("ul",{class:["vp-nav-screen-menu",{hide:!l.value}]},t.value.children.map(o=>c("li",{class:"vp-nav-screen-menu-item"},"children"in o?[c("h4",{class:"vp-nav-screen-menu-subtitle"},o.link?c(it,{config:o,onFocusout:()=>{a(o,t.value.children)&&o.children.length===0&&(l.value=!1)}}):o.text),c("ul",{class:"vp-nav-screen-menu-subitems"},o.children.map(r=>c("li",{class:"vp-nav-screen-menu-subitem"},c(it,{config:r,onFocusout:()=>{a(r,o.children)&&a(o,t.value.children)&&(l.value=!1)}}))))]:c(it,{config:o,onFocusout:()=>{a(o,t.value.children)&&(l.value=!1)}}))))]}});const hh=(e,t="")=>pe(e)?ia($i(t,e)):"children"in e?{...e,...e.link&&Po(e.link)?{link:Tt($i(t,e.link)).path}:{},children:e.children.map(i=>hh(i,$i(t,e.prefix)))}:{...e,link:Po(e.link)?Tt($i(t,e.link)).path:e.link},mh=()=>{const e=Nt();return E(()=>(e.value.navbar||[]).map(t=>hh(t)))};var t6=D({name:"NavScreenLinks",setup(){const e=mh();return()=>e.value.length?c("nav",{class:"nav-screen-links"},e.value.map(t=>c("div",{class:"navbar-links-item"},"children"in t?c(e6,{config:t}):c(it,{config:t})))):null}});const{mobileBreakPoint:i6,pcBreakPoint:n6}=Cn,Oc=e=>e.endsWith("px")?Number(e.slice(0,-2)):null,Ea=()=>{const e=Q(!1),t=Q(!1),i=()=>{e.value=window.innerWidth<=(Oc(i6)??719),t.value=window.innerWidth>=(Oc(n6)??1440)};return re("resize",i,!1),re("orientationchange",i,!1),de(()=>{i()}),{isMobile:e,isPC:t}};var l6=D({name:"NavScreen",props:{show:Boolean},slots:Object,setup(e,{slots:t}){const{isMobile:i}=Ea(),n=ee(),l=fl(n);return Zt(()=>{l.value=!1}),ke(i,a=>{!a&&e.show&&(l.value=!1)}),de(()=>{n.value=document.body}),Vt(()=>{l.value=!1}),()=>c(kn,{name:"fade-in-down",onEnter:()=>{l.value=!0},onAfterLeave:()=>{l.value=!1}},()=>e.show?c("div",{id:"nav-screen",class:"vp-nav-screen"},c("div",{class:"vp-nav-screen-container"},[t.navScreenTop?.(),c(t6),c("div",{class:"vp-appearance-wrapper"},c(dh)),t.navScreenBottom?.()])):null)}}),a6=D({name:"NavbarBrand",setup(){const{routeLocale:e,siteLocale:t,themeLocale:i}=Oe(),n=E(()=>i.value.home??e.value),l=E(()=>t.value.title),a=E(()=>i.value.navbarTitle??l.value),o=E(()=>i.value.logo?ye(i.value.logo):null),r=E(()=>i.value.logoDark?ye(i.value.logoDark):null);return()=>c(Re,{to:n.value,class:"vp-brand","aria-label":i.value.routerLocales.home},()=>[o.value?c("img",{class:["vp-nav-logo",{light:!!r.value}],src:o.value,alt:""}):null,r.value?c("img",{class:["vp-nav-logo dark"],src:r.value,alt:""}):null,a.value?c("span",{class:["vp-site-name",{"hide-in-pad":o.value&&(i.value.hideSiteNameOnMobile??!0)}]},a.value):null])}}),o6=D({name:"NavbarLinks",setup(){const e=mh();return()=>e.value.length?c("nav",{class:"vp-nav-links"},e.value.map(t=>c("div",{class:"vp-nav-item hide-in-mobile"},"children"in t?c(ph,{config:t}):c(it,{config:t,iconSizing:"height"})))):null}});const r6=()=>{const e=Nt(),t=E(()=>e.value.repo),i=E(()=>t.value?g3(t.value):null),n=E(()=>t.value?Er(t.value):null),l=E(()=>i.value?e.value.repoLabel??n.value??"Source":null);return E(()=>!i.value||!l.value||e.value.repoDisplay===!1?null:{type:n.value??"Source",label:l.value,link:i.value})};var s6=D({name:"RepoLink",setup(){const e=r6();return()=>e.value?c("div",{class:"vp-nav-item vp-action"},c("a",{class:"vp-action-link",href:e.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":e.value.label},c(v3,{type:e.value.type,style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const fh=({active:e=!1},{emit:t})=>c("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":e}],"aria-label":"Toggle Navbar","aria-expanded":e,"aria-controls":"nav-screen",onClick:()=>{t("toggle")}},c("span",[c("span",{class:"vp-top"}),c("span",{class:"vp-middle"}),c("span",{class:"vp-bottom"})]));fh.displayName="ToggleNavbarButton";const Oo=(e,{emit:t})=>c("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>{t("toggle")}},c("span",{class:"icon"}));Oo.displayName="ToggleSidebarButton",Oo.emits=["toggle"];var c6=D({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(e,{emit:t,slots:i}){const n=Nt(),{isMobile:l}=Ea(),a=Q(!1),o=E(()=>{const{navbarAutoHide:d="mobile"}=n.value;return d!=="none"&&(d==="always"||l.value)}),r=E(()=>n.value.navbarLayout??{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),s={Brand:a6,Language:Z_,Links:o6,Repo:s6,Outlook:Q_,Search:Je("SearchBox")?Pe("SearchBox"):Pc},u=d=>s[d]??(Je(d)?Pe(d):Pc);return Zt(()=>{a.value=!1}),ke(l,d=>{d||(a.value=!1)}),()=>[c("header",{key:"navbar",id:"navbar",class:["vp-navbar",{"auto-hide":o.value}],"vp-navbar":""},[c("div",{class:"vp-navbar-start"},[c(Oo,{onToggle:()=>{a.value&&(a.value=!1),t("toggleSidebar")}}),r.value.start?.map(d=>c(u(d)))]),c("div",{class:"vp-navbar-center"},[r.value.center?.map(d=>c(u(d)))]),c("div",{class:"vp-navbar-end"},[r.value.end?.map(d=>c(u(d))),c(fh,{active:a.value,onToggle:()=>{a.value=!a.value}})])]),c(l6,{show:a.value},i)]}});const Lr=(e,t)=>t.activeMatch?new RegExp(t.activeMatch,"u").test(e.path):fp(e,t.link);var d6=D({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(e){const t=Ft();return()=>pe(e.config.link)?c(it,{class:["vp-sidebar-link",{active:Lr(t,e.config)}],config:{...e.config,exact:!0}}):c("p",e,[c(Pe("VPIcon"),{icon:e.config.icon,sizing:"both"}),e.config.text])}});const Sr=(e,t)=>"children"in t?!!t.prefix&&fp(e,t.prefix)||t.children.some(i=>Sr(e,i)):Lr(e,t);var u6=D({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(e,{emit:t}){const i=Ft(),n=Q(!1),l=E(()=>Sr(i,e.config)),a=E(()=>Lr(i,e.config)),o=E(()=>e.open||e.config.expanded&&!n.value);return()=>{const{collapsible:r,children:s=[],icon:u,prefix:d,link:p,text:h}=e.config;return c("section",{class:"vp-sidebar-group"},[c(r?"button":"p",{class:["vp-sidebar-header",{clickable:r||p,exact:a.value,active:l.value}],...r?{type:"button",onClick:()=>{n.value=!0,t("toggle")}}:{}},[c(Pe("VPIcon"),{icon:u,sizing:"both"}),p?c(it,{class:"vp-sidebar-title no-external-link-icon",config:{text:h,link:p}}):c("span",{class:"vp-sidebar-title"},h),r?c("span",{class:["vp-arrow",o.value?"down":"end"]}):null]),o.value||!r?c(gh,{key:d,config:s}):null])}}}),gh=D({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(e){const t=Ft(),i=ur(),n=Q(-1),l=a=>{n.value=a===n.value?-1:a};return ze(i,()=>{const a=e.config.findIndex(o=>Sr(t,o));n.value=a},{flush:"post"}),()=>c("ul",{class:"vp-sidebar-links"},e.config.map((a,o)=>c("li","children"in a?c(u6,{config:a,open:o===n.value,onToggle:()=>{l(o)}}):c(d6,{config:a}))))}}),p6=D({name:"SideBar",slots:Object,setup(e,{slots:t}){const i=Ft(),n=xr(),l=ee();return de(()=>{ze(()=>i.hash,a=>{const o=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${i.path}${a}"]`);if(!o)return;const{top:r,height:s}=l.value.getBoundingClientRect(),{top:u,height:d}=o.getBoundingClientRect();u<r?o.scrollIntoView(!0):u+d>r+s&&o.scrollIntoView(!1)})}),()=>c("aside",{ref:l,key:"sidebar",id:"sidebar",class:"vp-sidebar","vp-sidebar":""},[t.sidebarTop?.(),t.sidebarItems?.(n.value)??c(gh,{config:n.value}),t.sidebarBottom?.()])}}),Pr=D({name:"MainLayout",props:{containerClass:String,noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(e,{slots:t}){const{frontmatter:i,theme:n,themeLocale:l}=Oe(),{isMobile:a,isPC:o}=Ea(),r=nt(),[s,u]=Wi(!1),[d,p]=Wi(!1),h=xr(),m=ee(),g=fl(m),b=Q(!1),y=E(()=>e.noNavbar||i.value.navbar===!1||l.value.navbar===!1?!1:!!(l.value.logo??l.value.repo??l.value.navbar)),A=E(()=>i.value.externalLinkIcon??n.value.externalLinkIcon??!0),w=E(()=>!e.noToc&&!i.value.home&&!!(i.value.toc??l.value.toc??!0)),v={x:0,y:0},T=M=>{v.x=M.changedTouches[0].clientX,v.y=M.changedTouches[0].clientY},C=M=>{const H=M.changedTouches[0].clientX-v.x,L=M.changedTouches[0].clientY-v.y;Math.abs(H)>Math.abs(L)*1.5&&Math.abs(H)>40&&(H>0&&v.x<=80?u(!0):u(!1))};let N=0;return re("scroll",Yu(()=>{const M=window.scrollY;M<=58||M<N?b.value=!1:N+200<M&&!s.value&&(b.value=!0),N=M},300,!0)),ke(a,M=>{M||u(!1)}),ke(s,M=>{g.value=M}),Zt(()=>{u(!1)}),de(()=>{m.value=document.body}),Vt(()=>{g.value=!1}),()=>{const M=t.sidebarTop?.(),H=t.sidebarItems?.(h.value),L=t.sidebarBottom?.(),B=vn(M)&&vn(H)&&vn(L),F=e.noSidebar||i.value.sidebar===!1||(i.value.home||h.value.length===0)&&B;return c(Je("GlobalEncrypt")?Pe("GlobalEncrypt"):hr,()=>c("div",{class:["theme-container",{"hide-navbar":b.value,"no-navbar":!y.value,"sidebar-collapsed":!a.value&&!o.value&&d.value,"sidebar-open":a.value&&s.value,"no-sidebar":F,"external-link-icon":A.value,pure:r.value,"has-toc":w.value},e.containerClass??"",i.value.containerClass??""],"vp-container":"",onTouchStart:T,onTouchEnd:C},[y.value?c(c6,{onToggleSidebar:()=>u()},t):null,c(kn,{name:"fade-in"},()=>s.value?c("div",{class:"vp-sidebar-mask",onClick:()=>u(!1)}):null),c(kn,{name:"fade-in"},()=>a.value?null:c("div",{class:"toggle-sidebar-wrapper",onClick:()=>p()},c("span",{class:["arrow",d.value?"end":"start"]}))),F?null:c(p6,null,t),t.default(),c(Y_)]))}}});const vh=()=>{const{frontmatter:e,themeLocale:t}=Oe(),i=E(()=>e.value.changelog??((t.value.changelog??!1)&&!e.value.home)),n=E(()=>{const{contributors:a,home:o}=e.value;return Jt(a)?o?!1:t.value.contributors??!0:a??(o?!1:t.value.contributors??!0)}),l=E(()=>e.value.lastUpdated??t.value.lastUpdated??!0);return{changelog:i,contributors:n,lastUpdated:l}};var Aa=D({name:"MarkdownContent",props:{custom:Boolean},slots:Object,setup(e,{slots:t}){const i=Ci(),{changelog:n,contributors:l}=vh(),a=Q(),o=g2(a,{delayEnter:jl(i.value.focus)?i.value.focus:1500,delayLeave:0}),r=E(()=>!!(i.value.focus??i.value.pure)&&o.value);return de(()=>{const s=document.documentElement;ze(r,u=>{u?s.classList.add("is-focusing"):s.classList.remove("is-focusing")})}),()=>c("div",{class:{custom:e.custom},"vp-content":""},[t.contentBefore?.(),c(Ou,{ref:a,id:"markdown-content"}),t.contentAfter?.(),n.value&&Je("GitChangelog")?c(Pe("GitChangelog")):null,l.value==="content"&&Je("GitContributors")?c(Pe("GitContributors")):null])}}),Cr=D({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const t=Nt(),i=ee(),n=({target:l})=>{const a=document.querySelector(l.hash);if(a){const o=()=>{a.removeAttribute("tabindex"),a.removeEventListener("blur",o)};a.setAttribute("tabindex","-1"),a.addEventListener("blur",o),a.focus(),window.scrollTo(0,0)}};return Zt(()=>{i.value?.focus()}),()=>[c("span",{ref:i,tabindex:"-1"}),c("a",{href:`#${e.content}`,class:"vp-skip-link sr-only",onClick:n},t.value.routerLocales.skipToContent)]}});const Do=()=>c(ge,{name:"slide-down"},()=>c("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));Do.displayName="SlideDownIcon";const Or=(e,{emit:t})=>c("button",{type:"button",class:"vp-hero-slide-down-button",onClick:()=>t("click")},[c(Do),c(Do)]);Or.displayName="HeroSlideDownButton";var ue=D({name:"DropTransition",props:{delay:{type:Number,default:0},duration:{type:Number,default:.25},group:Boolean,appear:Boolean},slots:Object,setup(e,{slots:t}){const i=l=>{l.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,l.style.transform="translateY(-20px)",l.style.opacity="0"},n=l=>{l.style.transform="translateY(0)",l.style.opacity="1"};return()=>{const l={name:"drop",appear:e.appear,onAppear:i,onAfterAppear:n,onEnter:i,onAfterEnter:n,onBeforeLeave:i};return e.group?c(cu,l,t.default):c(kn,l,t.default)}}});let io=null,no=null;const Io={wait:()=>io,pending:()=>{io=new Promise(e=>{no=e})},resolve:()=>{no?.(),io=null,no=null}};var _h=D({name:"MainFadeInUpTransition",slots:Object,setup(e,{slots:t}){const i=nt();return()=>i.value?c(hr,t.default):c(kn,{name:"fade-in-up",mode:"out-in",onBeforeEnter:Io.resolve,onBeforeLeave:Io.pending},t.default)}}),bh=D({name:"PageTitle",setup(){const{frontmatter:e,page:t,themeLocale:i}=Oe(),{info:n,items:l}=I_();return()=>c("div",{class:"vp-page-title"},[c("h1",[i.value.titleIcon===!1?null:c(Pe("VPIcon"),{icon:e.value.icon}),t.value.title]),c(Qp,{info:n.value,items:l.value}),c("hr")])}});const h6=(e,t)=>{const i=e.replace(t,"/").split("/"),n=[];let l=ha(t);return i.forEach((a,o)=>{o!==i.length-1?(l+=`${a}/`,n.push({link:l,name:a||"Home"})):a!==""&&(l+=a,n.push({link:l,name:a}))}),n};var m6=D({name:"BreadCrumb",setup(){const{frontmatter:e,page:t,routeLocale:i,routePath:n,themeLocale:l}=Oe(),a=ee([]),o=E(()=>(e.value.breadcrumb??l.value.breadcrumb??!0)&&a.value.length>1),r=E(()=>e.value.breadcrumbIcon??l.value.breadcrumbIcon??!0),s=()=>{const u=h6(t.value.path,i.value).map(({link:d,name:p})=>{const{path:h,meta:m,notFound:g}=Tt(d);return g||m.breadcrumbExclude?null:{title:m.shortTitle||m.title||p,icon:m.icon,path:h}}).filter(d=>d!==null);u.length>1&&(a.value=u)};return de(()=>{ze(n,s)}),()=>c("nav",{class:["vp-breadcrumb",{disable:!o.value}]},o.value?c("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},a.value.map((u,d)=>c("li",{class:{"is-active":a.value.length-1===d},property:"itemListElement",typeof:"ListItem"},[c(Re,{to:u.path,property:"item",typeof:"WebPage"},()=>[r.value?c(Pe("VPIcon"),{icon:u.icon}):null,c("span",{property:"name"},u.title||"Unknown")]),c("meta",{property:"position",content:d+1})]))):[])}});const Dc=(e,t)=>e===!1?e:Lt(e)?{...e,link:ia(e.link,!0,t).link}:pe(e)?ia(e,!0,t):null,Ro=(e,t,i)=>{const n=e.findIndex(a=>a.link===t);if(n!==-1){if(!e[n+i])return null;const a=e[n+i];return a.link?a:"prefix"in a&&!Tt(a.prefix).notFound?{...a,link:a.prefix}:null}for(const a of e)if("children"in a){const o=Ro(a.children,t,i);if(o)return o}const l=e.findIndex(a=>"prefix"in a&&a.prefix===t);if(l!==-1){if(!e[l+i])return null;const a=e[l+i];return a.link?a:"prefix"in a&&!Tt(a.prefix).notFound?{...a,link:a.prefix}:null}return null},f6=()=>{const{frontmatter:e,routePath:t,themeLocale:i}=Oe(),n=xr(),l=E(()=>{const o=Dc(e.value.prev,t.value);return o===!1?null:o??(i.value.prevLink===!1?null:Ro(n.value,t.value,-1))}),a=E(()=>{const o=Dc(e.value.next,t.value);return o===!1?null:o??(i.value.nextLink===!1?null:Ro(n.value,t.value,1))});return{prevLink:l,nextLink:a}};var g6=D({name:"PageNav",setup(){const e=vt(),t=mi(),{prevLink:i,nextLink:n}=f6();return re("keydown",l=>{l.altKey&&(l.key==="ArrowRight"?n.value&&(t(n.value.link),l.preventDefault()):l.key==="ArrowLeft"&&i.value&&(t(i.value.link),l.preventDefault()))}),()=>i.value||n.value?c("nav",{class:"vp-page-nav"},[i.value?c(it,{class:"prev",config:i.value},()=>[c("div",{class:"hint"},[c("span",{class:"arrow start"}),e.value.prev]),c("div",{class:"link"},[c(Pe("VPIcon"),{icon:i.value?.icon}),i.value?.text])]):null,n.value?c(it,{class:"next",config:n.value},()=>[c("div",{class:"hint"},[e.value.next,c("span",{class:"arrow end"})]),c("div",{class:"link"},[n.value?.text,c(Pe("VPIcon"),{icon:n.value?.icon})])]):null]):null}}),v6=D({name:"PrintButton",setup(){const e=vt(),t=Ci();return()=>t.value.print===!1?null:c("button",{type:"button",class:"print-button",title:e.value.print,onClick:()=>{window.print()}},c(Gp))}});const Ic={selector:[...Array.from({length:6}).map((e,t)=>`#markdown-content > h${t+1}`),"[vp-content] > h2"].join(", "),levels:"deep",ignore:[".vp-badge",".vp-icon"]};var _6=D({name:"TOC",props:{items:Array},slots:Object,setup(e,{slots:t}){const{frontmatter:i,themeLocale:n}=Oe(),l=E(()=>{const y=i.value.toc??n.value.toc;return Lt(y)?{...Ic,...y}:y??!0?Ic:void 0}),a=Hg(l),o=Ft(),r=vt(),[s,u]=Wi(),d=ee(),p=Q("-2rem"),h=y=>{d.value?.scrollTo({top:y,behavior:"smooth"})},m=()=>{if(d.value){const y=document.querySelector(".vp-toc-item.active");y?p.value=`${y.getBoundingClientRect().top-d.value.getBoundingClientRect().top+d.value.scrollTop}px`:p.value="-2rem"}else p.value="-2rem"};de(()=>{ze(()=>o.hash,y=>{if(d.value){const A=document.querySelector(`#toc a.vp-toc-link[href$="${y}"]`);if(!A)return;const{top:w,height:v}=d.value.getBoundingClientRect(),{top:T,height:C}=A.getBoundingClientRect();T<w?h(d.value.scrollTop+T-w):T+C>w+v&&h(d.value.scrollTop+T+C-w-v)}},{flush:"post"}),ze(()=>o.fullPath,m,{flush:"post"})});const g=({title:y,level:A,slug:w})=>c(Re,{to:`#${w}`,class:["vp-toc-link",`level${A}`],onClick:()=>{u()}},()=>y),b=y=>y.length?c("ul",{class:"vp-toc-list"},y.map(A=>{const w=b(A.children);return[c("li",{class:["vp-toc-item",{active:o.hash===`#${A.slug}`}]},g(A)),w?c("li",w):null]})):null;return()=>l.value||e.items?.length?c(va,()=>{const y=e.items?.length?b(e.items):b(a.value),A=t.toc?.(a.value)??(y?[c("div",{class:"vp-toc-header",onClick:()=>{u()}},[r.value.toc,c(v6),c("div",{class:["arrow",s.value?"down":"end"]})]),c("div",{class:["vp-toc-wrapper",s.value?"open":""],ref:d},[y,c("div",{class:"vp-toc-marker",style:{top:p.value}})])]:null),w=t.tocBefore?.(),v=t.tocAfter?.();return vn(A)&&vn(w)&&vn(v)?null:c("div",{class:"vp-toc-placeholder"},[c("aside",{id:"toc","vp-toc":""},[w,A,v])])}):null}});const yh=()=>c(ge,{name:"edit"},()=>[c("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),c("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);yh.displayName="EditIcon";const b6={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},y6=({docsRepo:e,docsBranch:t,docsDir:i,filePathRelative:n,editLinkPattern:l})=>{if(!n)return null;const a=Er(e);let o;return l?o=l:a!==null&&(o=b6[a]),o?o.replace(/:repo/u,Xt(e)?e:`https://github.com/${e}`).replace(/:branch/u,t).replace(/:path/u,pu(`${ha(i)}/${n}`)):null},w6=()=>{const{frontmatter:e,page:t,themeLocale:i}=Oe(),n=vt();return E(()=>{const{repo:l,docsRepo:a=l,docsBranch:o="main",docsDir:r="",editLink:s,editLinkPattern:u=""}=i.value;if(!(e.value.editLink??s??!0)||!a)return null;const d=y6({docsRepo:a,docsBranch:o,docsDir:r,editLinkPattern:u,filePathRelative:t.value.filePathRelative});return d?{text:n.value.editLink,link:d}:null})};var k6=D({name:"PageMeta",setup(){const e=vh(),t=Qu(),i=w6(),n=O2(e.lastUpdated),l=vt();return()=>c("footer",{class:"vp-page-meta"},[i.value?c("div",{class:"vp-meta-item edit-link"},c(it,{class:"vp-meta-label",config:i.value},{before:()=>c(yh)})):null,c("div",{class:"vp-meta-item git-info"},[(!e.changelog.value||!Je("GitChangelog"))&&n.value?c("div",{class:"update-time"},[c("span",{class:"vp-meta-label"},n.value.locale),c("time",{class:"vp-meta-info",datetime:n.value.iso,"data-allow-mismatch":""},n.value.text)]):null,e.contributors.value&&e.contributors.value!=="content"&&t.value.length?c("div",{class:"contributors"},[c("span",{class:"vp-meta-label"},`${l.value.contributors}: `),t.value.map(({email:a,name:o},r,s)=>[c("span",{class:"vp-meta-info",title:`email: ${a}`},o),r!==s.length-1?",":""])]):null])])}}),E6=D({name:"PageContent",slots:Object,setup(e,{slots:t}){const{frontmatter:i}=Oe(),{isDarkMode:n}=vl();return()=>c("main",{id:"main-content",class:"vp-page"},c(Je("LocalEncrypt")?Pe("LocalEncrypt"):hr,()=>[t.pageTop?.(),i.value.cover?c("div",{class:"page-cover"},c("img",{src:ye(i.value.cover),alt:"","no-view":""})):null,c(m6),c(bh),c(_6,null,t),t.content?.()??c(Aa,null,t),c(k6),c(g6),Je("CommentService")?c(Pe("CommentService"),{darkmode:n.value}):null,t.pageBottom?.()]))}});const Bo=(e,{slots:t})=>{const{bgImage:i,bgImageDark:n,bgImageStyle:l,color:a,description:o,image:r,imageDark:s,header:u,features:d=[]}=e;return c("div",{class:"vp-feature-wrapper"},[i?c("div",{class:["vp-feature-bg",{light:n}],style:[{"background-image":`url(${i})`},l]}):null,n?c("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${n})`},l]}):null,c("div",{class:"vp-feature",style:a?{color:a}:{}},[t.image?.(e)??[r?c("img",{class:["vp-feature-image",{light:s}],src:ye(r),alt:""}):null,s?c("img",{class:"vp-feature-image dark",src:ye(s),alt:""}):null],t.info?.(e)??[u?c("h2",{class:"vp-feature-header"},u):null,o?c("div",{class:"vp-feature-description",innerHTML:o}):null],d.length?c("div",{class:"vp-features"},d.map(({icon:p,title:h,details:m,link:g})=>{const b=[c("h3",{class:"vp-feature-title"},[c(Pe("VPIcon"),{icon:p}),c("span",{innerHTML:h})]),c("div",{class:"vp-feature-details",innerHTML:m})];return g?or(g)?c("a",{class:"vp-feature-item link",href:g,"aria-label":h,target:"_blank"},b):c(Re,{class:"vp-feature-item link",to:g,"aria-label":h},()=>b):c("div",{class:"vp-feature-item"},b)})):null])])};Bo.displayName="FeaturePanel";var A6=D({name:"HeroInfo",slots:Object,setup(e,{slots:t}){const{frontmatter:i,siteLocale:n}=Oe(),l=E(()=>{const{heroText:s,tagline:u,heroStyle:d,heroFullScreen:p=!1}=i.value;return{text:s??(n.value.title||"Hello"),tagline:u??n.value.description,style:d??null,isFullScreen:p}}),a=E(()=>{const{heroImage:s,heroImageDark:u,heroAlt:d,heroImageStyle:p}=i.value;return{image:s?ye(s):null,imageDark:u?ye(u):null,style:p??null,alt:d??""}}),o=E(()=>{const{bgImage:s,bgImageDark:u,bgImageStyle:d}=i.value;return{image:pe(s)?ye(s):null,imageDark:pe(u)?ye(u):null,style:d??null}}),r=E(()=>i.value.actions??[]);return()=>c("header",{class:["vp-hero-info-wrapper",{"hero-fullscreen":l.value.isFullScreen}],style:l.value.style},[t.heroBg?.(o.value)??[o.value.image?c("div",{class:["vp-hero-mask",{light:o.value.imageDark}],style:[{"background-image":`url(${o.value.image})`},o.value.style]}):null,o.value.imageDark?c("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${o.value.imageDark})`},o.value.style]}):null],c("div",{class:"vp-hero-info"},[t.heroLogo?.(a.value)??c(ue,{appear:!0,group:!0},()=>{const{image:s,imageDark:u,style:d,alt:p}=a.value;return[s?c("img",{key:"light",class:["vp-hero-image",{light:u}],style:d,src:s,alt:p}):null,u?c("img",{key:"dark",class:"vp-hero-image dark",style:d,src:u,alt:p}):null]}),t.heroInfo?.(l.value)??c("div",{class:"vp-hero-infos"},[l.value.text?c(ue,{appear:!0,delay:.04},()=>c("h1",{id:"main-title",class:"vp-hero-title"},l.value.text)):null,l.value.tagline?c(ue,{appear:!0,delay:.08},()=>c("div",{id:"main-description",innerHTML:l.value.tagline})):null,r.value.length?c(ue,{appear:!0,delay:.12},()=>c("p",{class:"vp-hero-actions"},r.value.map(s=>c(it,{class:["vp-hero-action",s.type??"default","no-external-link-icon"],config:s})))):null])]),l.value.isFullScreen?c(Or,{onClick:()=>window.scrollTo({top:window.innerHeight-(document.querySelector("[vp-navbar]")?.clientHeight??0),behavior:"smooth"})}):null])}});const wh=(e,{slots:t})=>{const{bgImage:i,bgImageDark:n,bgImageStyle:l,color:a,description:o,image:r,imageDark:s,header:u,highlights:d=[],type:p="un-order"}=e;return c("div",{class:"vp-highlight-wrapper",style:a?{color:a}:{}},[i?c("div",{class:["vp-highlight-bg",{light:n}],style:[{"background-image":`url(${i})`},l]}):null,n?c("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${n})`},l]}):null,c("div",{class:"vp-highlight"},[t.image?.(e)??[r?c("img",{class:["vp-highlight-image",{light:s}],src:ye(r),alt:""}):null,s?c("img",{class:"vp-highlight-image dark",src:ye(s),alt:""}):null],t.info?.(e)??[c("div",{class:"vp-highlight-info-wrapper"},c("div",{class:"vp-highlight-info"},[u?c("h2",{class:"vp-highlight-header",innerHTML:u}):null,o?c("div",{class:"vp-highlight-description",innerHTML:o}):null,t.highlights?.(d)??c(p==="order"?"ol":p==="no-order"?"dl":"ul",{class:"vp-highlights"},d.map(({icon:h,title:m,details:g,link:b})=>{const y=[c(p==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[h?c(Pe("VPIcon"),{class:"vp-highlight-icon",icon:h}):null,c("span",{innerHTML:m})]),g?c(p==="no-order"?"dd":"div",{class:"vp-highlight-details",innerHTML:g}):null];return c(p==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:b}]},b?or(b)?c("a",{class:"vp-highlight-item link",href:b,"aria-label":m,target:"_blank"},y):c(Re,{class:"vp-highlight-item link",to:b,"aria-label":m},()=>y):c("div",{class:"vp-highlight-item"},y))}))]))]])])};wh.displayName="HighlightSection";var T6=D({name:"HomePage",slots:Object,setup(e,{slots:t}){const i=Ue();return()=>{const{features:n,highlights:l}=i.value;return c("main",{id:"main-content",class:"vp-page vp-project-home","aria-labelledby":i.value.heroText===""?"":"main-title"},[t.heroBefore?.(),c(A6,null,t),t.heroAfter?.(),Jt(l)?l.map(a=>"features"in a?c(Bo,a):c(wh,a)):Jt(n)?c(ue,{appear:!0,delay:.24},()=>c(Bo,{features:n})):null,t.content?.()??c(ue,{appear:!0,delay:.32},()=>c(Aa,null,t))])}}}),x6=D({name:"PortfolioHero",slots:Object,setup(e,{slots:t}){const i=Mp(),n=Ue(),l=Q(0),a=E(()=>n.value.titles?.[l.value]??""),o=Q(""),r=E(()=>{const{name:h,avatar:m,avatarDark:g,avatarAlt:b,avatarStyle:y}=n.value;return{name:h??i.value.name,avatar:m?ye(m):null,avatarDark:g?ye(g):null,alt:(b||h)??"",style:y??null}}),s=E(()=>{const{bgImage:h,bgImageDark:m,bgImageStyle:g}=n.value;return{image:pe(h)?ye(h):null,imageDark:pe(m)?ye(m):null,style:g??null}}),u=E(()=>{const{welcome:h,name:m,titles:g=[],medias:b}=n.value;return{name:m??i.value.name,welcome:h??"👋 Hi There, I'm",title:o.value,titles:g,medias:b??null}}),d=()=>{o.value="";let h=0,m=!1;const g=async()=>{if(!m)if(o.value+=a.value[h],h+=1,await xt(),h<a.value.length)setTimeout(()=>{g()},150);else{const b=u.value.titles.length;setTimeout(()=>{l.value=b<=1||l.value===u.value.titles.length-1?0:l.value+1},1e3)}};return g(),()=>{m=!0}};let p;return de(()=>{ze(a,()=>{p?.(),p=d()})}),()=>c("section",{id:"portfolio",class:["vp-portfolio",{bg:s.value.image}]},[t.portfolioBg?.(s.value)??[s.value.image?c("div",{class:["vp-portfolio-mask",{light:s.value.imageDark}],style:[{background:`url(${s.value.image}) center/cover no-repeat`},s.value.style]}):null,s.value.imageDark?c("div",{class:"vp-portfolio-mask dark",style:[{background:`url(${s.value.imageDark}) center/cover no-repeat`},s.value.style]}):null],t.portfolioAvatar?.(r.value)??c("div",{class:"vp-portfolio-avatar"},[c(ue,{delay:.04},()=>{const{avatar:h,avatarDark:m,name:g,alt:b,style:y}=r.value;return[h?c("img",{key:"light",class:{light:m},src:h,title:g,alt:b,style:y}):null,m?c("img",{key:"dark",class:"dark",src:m,title:g,alt:b,style:y}):null]})]),c("div",{class:"vp-portfolio-container"},t.portfolioInfo?.(u.value)??c("div",{class:"vp-portfolio-info"},[c(ue,{appear:!0,delay:.08},()=>c("h6",{class:"vp-portfolio-welcome"},u.value.welcome)),c(ue,{appear:!0,delay:.12},()=>c("h1",{class:"vp-portfolio-name",id:"main-title"},u.value.name)),c(ue,{appear:!0,delay:.16},()=>c("h2",{class:"vp-portfolio-title"},o.value)),c(ue,{appear:!0,delay:.2},()=>u.value.medias?c("div",{class:"vp-portfolio-medias"},u.value.medias.map(({name:h,url:m,icon:g})=>c("a",{class:"vp-portfolio-media",href:m,rel:"noopener noreferrer",target:"_blank",title:h},c(Pe("VPIcon"),{icon:g,sizing:"both"})))):Je("SocialMedias")?c(Pe("SocialMedias")):null)]))])}}),L6=D({name:"PortfolioHome",slots:Object,setup(e,{slots:t}){const i=Ue();return()=>{const n=i.value.content??"portfolio";return c("main",{id:"main-content",class:"vp-page vp-portfolio-home","aria-labelledby":"main-title"},[c(x6,null,t),n==="none"?null:t.content?.()??c("div",c(ue,{appear:!0,delay:.24},()=>c(Aa,{class:{"vp-portfolio-content":n==="portfolio"}},t)))])}}}),S6=D({name:"Layout",slots:Object,setup(e,{slots:t}){const{frontmatter:i,page:n}=Oe();return()=>[c(Cr),c(Pr,null,{...t,default:t.default??(()=>i.value.portfolio?c(L6,null,t):i.value.home?c(T6,null,t):c(_h,()=>c(E6,{key:n.value.path},t))),navScreenBottom:t.navScreenBottom??(Je("BloggerInfo")?()=>c(Pe("BloggerInfo")):null)})]}}),P6=D({name:"NotFound",slots:Object,setup(e,{slots:t}){const{routeLocale:i,theme:n,themeLocale:l}=Oe(),a=Si(),o=Q(!1),r=E(()=>n.value.locales[o.value?i.value:"/"].routerLocales),s=()=>{if(!o.value)return r.value.notFoundMsg[0];const u=r.value.notFoundMsg;return u[Math.floor(Math.random()*u.length)]};return de(()=>{o.value=!0}),()=>[c(Cr),c(Pr,{noSidebar:!0},{...t,default:()=>c("main",{id:"main-content",class:"vp-page not-found"},t.default?.()??[c("div",{class:"not-found-hint"},[c("p",{class:"error-code"},"404"),c("h1",{class:"error-title"},r.value.notFoundTitle),c("p",{class:"error-hint"},s())]),c("div",{class:"actions"},[c("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},r.value.back),c("button",{type:"button",class:"action-button",onClick:()=>{a.push(l.value.home??i.value)}},r.value.home)])])})]}});const Dr=()=>c(ge,{name:"lock"},()=>c("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Dr.displayName="LockIcon";const C6=JSON.parse('{"category":{"/":{"path":"/category/","map":{"Blog 指南":{"path":"/category/blog-%E6%8C%87%E5%8D%97/","indexes":[0]},"开源书籍":{"path":"/category/%E5%BC%80%E6%BA%90%E4%B9%A6%E7%B1%8D/","indexes":[1]},"课程复习":{"path":"/category/%E8%AF%BE%E7%A8%8B%E5%A4%8D%E4%B9%A0/","indexes":[2,3]},"课程笔记":{"path":"/category/%E8%AF%BE%E7%A8%8B%E7%AC%94%E8%AE%B0/","indexes":[4,5,6]},"天天笔记":{"path":"/category/%E5%A4%A9%E5%A4%A9%E7%AC%94%E8%AE%B0/","indexes":[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]},"面试瞎想":{"path":"/category/%E9%9D%A2%E8%AF%95%E7%9E%8E%E6%83%B3/","indexes":[49,50,51]},"备忘清单":{"path":"/category/%E5%A4%87%E5%BF%98%E6%B8%85%E5%8D%95/","indexes":[52]},"力扣刷题":{"path":"/category/%E5%8A%9B%E6%89%A3%E5%88%B7%E9%A2%98/","indexes":[53,54,55]},"未知分类":{"path":"/category/%E6%9C%AA%E7%9F%A5%E5%88%86%E7%B1%BB/","indexes":[56,57,58,59]},"论文阅读":{"path":"/category/%E8%AE%BA%E6%96%87%E9%98%85%E8%AF%BB/","indexes":[60,61,62]},"PaprikaYi":{"path":"/category/paprikayi/","indexes":[63]},"踩坑指南":{"path":"/category/%E8%B8%A9%E5%9D%91%E6%8C%87%E5%8D%97/","indexes":[64,65,66,67,68,69,70,71]},"转载整理":{"path":"/category/%E8%BD%AC%E8%BD%BD%E6%95%B4%E7%90%86/","indexes":[72,73,74,75,76]},"小吐槽":{"path":"/category/%E5%B0%8F%E5%90%90%E6%A7%BD/","indexes":[77,78,79,80]},"使用指南":{"path":"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","indexes":[81,82,83,84,85,86,87,88,89,90,91,92,93]}}},"/en/":{"path":"/en/category/","map":{"Guide":{"path":"/en/category/guide/","indexes":[94,95,96,97,98]}}}},"tag":{"/":{"path":"/tag/","map":{"计网":{"path":"/tag/%E8%AE%A1%E7%BD%91/","indexes":[3,30,36]},"编译原理":{"path":"/tag/%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86/","indexes":[5]},"操作系统":{"path":"/tag/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/","indexes":[6]},"数据库":{"path":"/tag/%E6%95%B0%E6%8D%AE%E5%BA%93/","indexes":[2]},"Algorithm":{"path":"/tag/algorithm/","indexes":[53,20,55,31,34]},"BST":{"path":"/tag/bst/","indexes":[20]},"Cpp":{"path":"/tag/cpp/","indexes":[37]},"Lang":{"path":"/tag/lang/","indexes":[37,40]},"Tools":{"path":"/tag/tools/","indexes":[87,23,65,44,71]},"LoadBalance":{"path":"/tag/loadbalance/","indexes":[29]},"Technology":{"path":"/tag/technology/","indexes":[25]},"JavaScript":{"path":"/tag/javascript/","indexes":[43]},"Python":{"path":"/tag/python/","indexes":[13,18,21,35,39,45,69]},"Redis":{"path":"/tag/redis/","indexes":[74,75,47]},"Interview":{"path":"/tag/interview/","indexes":[49,51,33,47]},"OS":{"path":"/tag/os/","indexes":[22,24,41]},"Kotlin":{"path":"/tag/kotlin/","indexes":[41]},"TCP":{"path":"/tag/tcp/","indexes":[30]},"Ubuntu":{"path":"/tag/ubuntu/","indexes":[10,11,48]},"Vim":{"path":"/tag/vim/","indexes":[66,42]},"专有名词":{"path":"/tag/%E4%B8%93%E6%9C%89%E5%90%8D%E8%AF%8D/","indexes":[14]},"Django":{"path":"/tag/django/","indexes":[16,68]},"Frontend":{"path":"/tag/frontend/","indexes":[33]},"Java":{"path":"/tag/java/","indexes":[32,38]},"Vue":{"path":"/tag/vue/","indexes":[27,28,76]},"VuePress":{"path":"/tag/vuepress/","indexes":[28]},"使用指南":{"path":"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","indexes":[28,89,93]},"WeChatApp":{"path":"/tag/wechatapp/","indexes":[46]},"Backend":{"path":"/tag/backend/","indexes":[46]},"Deploy":{"path":"/tag/deploy/","indexes":[46]},"ByteDance":{"path":"/tag/bytedance/","indexes":[49]},"Aliyun":{"path":"/tag/aliyun/","indexes":[58]},"GithubPage":{"path":"/tag/githubpage/","indexes":[59]},"API":{"path":"/tag/api/","indexes":[57]},"LLM":{"path":"/tag/llm/","indexes":[60,61,72]},"Data Process":{"path":"/tag/data-process/","indexes":[61]},"Android":{"path":"/tag/android/","indexes":[65]},"Conda":{"path":"/tag/conda/","indexes":[70]},"Microsoft":{"path":"/tag/microsoft/","indexes":[71]},"Jupyter":{"path":"/tag/jupyter/","indexes":[67]},"WeChat":{"path":"/tag/wechat/","indexes":[68]},"SpringBoot":{"path":"/tag/springboot/","indexes":[74,75]},"RAG":{"path":"/tag/rag/","indexes":[72]},"NLP":{"path":"/tag/nlp/","indexes":[72]},"Markdown":{"path":"/tag/markdown/","indexes":[81,82,83,84,85,86,91,92]}}},"/en/":{"path":"/en/tag/","map":{"使用指南":{"path":"/en/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","indexes":[95,98]},"Markdown":{"path":"/en/tag/markdown/","indexes":[96]}}}}}'),kh=JSON.parse('["/tags.html","/book/","/course/db-read-data.html","/course/Network-review.html","/course/","/course/bian-yi-yuan-li.html","/course/cao-zuo-xi-tong-gai-lun.html","/java/jeepay.html","/daily/elasticsearch.html","/daily/docker.html","/daily/scm-%20prefix-config.html","/daily/remote-server-usage.html","/daily/ci.html","/daily/python-memory-management-strategy.html","/daily/common-nouns.html","/daily/decorator.html","/daily/django-auth.html","/daily/lock.html","/daily/python-mateclass.html","/daily/tree.html","/daily/BST.html","/daily/python_inf_nan.html","/daily/Thread-safety.html","/daily/docker-desktop-wsl2-change-dir.html","/daily/runtime.html","/daily/Message-push.html","/daily/","/daily/vue3-lifecycle.html","/daily/vuepress-starter.html","/daily/LoadBalance.html","/daily/TCP.html","/daily/bitmap.html","/daily/hook.html","/daily/frontend-base.html","/daily/dp.html","/daily/pythonGenerator.html","/daily/RIP-OSPF.html","/daily/Class-defines-itself-internally.html","/daily/javabean.html","/daily/str-repr.html","/daily/Functioncallback.html","/daily/Synergetic-process.html","/daily/Vim.html","/daily/Promise-base.html","/daily/Listary-Everything.html","/daily/Python-loop.html","/daily/wechat-deploy.html","/daily/Redis.html","/daily/Ubuntu.html","/interview/bytedance.html","/interview/","/interview/aq.html","/knowledge_base/","/leetcode/tips.html","/leetcode/","/leetcode/leetcode.html","/other/","/other/otherAPI.html","/other/aliyun-server.html","/other/github-page.html","/paper/SELF-INSTRUCT%20Aligning%20Language%20Models%20with%20Self-Generated%20Instructions.html","/paper/Data-Copilot-%20Bridging%20Billions%20of%20Data%20and%20Humans%20with%20Autonomous%20Workflow.html","/paper/","/paprikayi/","/problem/","/problem/Android%20Studio.html","/problem/vim.html","/problem/jupyterlab.html","/problem/wechat-backend-Django.html","/problem/Python-cls-self-classmethod-staticmethod.html","/problem/Conda-Downloaded-bytes-did-not-match-Content-Length.html","/problem/Microsoft-typewriting.html","/reprint/rag-or-fine-tuning.html","/reprint/","/reprint/redis-template.html","/reprint/pythonMultithreading.html","/reprint/Vue-improve10.html","/roast/about-agi.html","/roast/","/roast/diary.html","/roast/todo-list.html","/tip/markdown/demo.html","/tip/markdown/emoji/nature.html","/tip/markdown/emoji/object.html","/tip/markdown/emoji/people.html","/tip/markdown/emoji/place.html","/tip/markdown/emoji/symbol.html","/tip/typora.html","/tip/disable.html","/tip/encrypt.html","/tip/","/tip/markdown/markdown-intro.html","/tip/markdown/emoji/emoji.html","/tip/page.html","/en/guide/disable.html","/en/guide/encrypt.html","/en/guide/markdown.html","/en/guide/","/en/guide/page.html","/java/oj-mate.html","/llm/Current%20Research%20Status%20of%20LLMs%20in%20Processing%20Tabu.html","/java/hashmap.html","/java/mapstruct.html","/java/requestbody-requestparam.html","/java/session.html","/java/spring-aop.html","/java/volatile.html","/java/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%92%8C%E5%8F%8C%E4%BA%B2%E5%A7%94%E6%B4%BE.html","/java/base.html","/java/lock.html","/java/parallel-stream.html","/java/springboot-error-path.html","/java/sql-query.html","/java/tips.html","/llm/prompt.html","/mysql/read-many-data.html","/java/%E8%B8%A9%E5%9D%91%E8%AE%B0%E5%BD%95.html","/llm/coda-correction.html","/course/Android-development.html","/course/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/","/daily/pycharm-remote-develop.html","/paprikayi/Halloween.html","/web_game/ai_snake.html","/web_game/ai_gomoku.html","/book/The_Self-Cultivation_of_an_Alibaba_Engineer.html","/course/bigdata.html","/daily/algolia.html","/interview/code.html","/interview/didi.html","/interview/hikvision.html","/interview/me.html","/interview/note.html","/knowledge_base/api.html","/knowledge_base/sql.html","/LICENSE.html","/java/bean.html","/tip/Jupyter%20Lab%20Useage.html","/course/Operating-System-Practice.html","/book/ddia/LICENSE.html","/tip/markdown/","/offer/offer_review.html","/book/test_pdf.html","/tmp/langchain.html","/tmp/llm_usage.html","/tmp/prompt.html","/tmp/rag.html","/tmp/test.html","/book/kama-DesignPattern/","/book/kama-DesignPattern/DesignPattern/1-%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/10-%E6%A1%A5%E6%8E%A5%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/11-%E7%BB%84%E5%90%88%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/12-%E4%BA%AB%E5%85%83%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/13-%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/14-%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/15-%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/16-%E4%B8%AD%E4%BB%8B%E8%80%85%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/17-%E5%A4%87%E5%BF%98%E5%BD%95%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/18-%E6%A8%A1%E6%9D%BF%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/19-%E8%BF%AD%E4%BB%A3%E5%99%A8%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/2-%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/20-%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/21-%E8%B4%A3%E4%BB%BB%E9%93%BE%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/22-%E8%A7%A3%E9%87%8A%E5%99%A8%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/23-%E8%AE%BF%E9%97%AE%E8%80%85%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/3-%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/4-%E5%BB%BA%E9%80%A0%E8%80%85%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/5-%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/6-%E9%80%82%E9%85%8D%E5%99%A8%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/7-%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/8-%E8%A3%85%E9%A5%B0%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/9-%E5%A4%96%E8%A7%82%E6%A8%A1%E5%BC%8F.html","/book/kama-DesignPattern/DesignPattern/behavior-patterns-overview.html","/book/kama-DesignPattern/DesignPattern/creation-patterns-overview.html","/book/kama-DesignPattern/DesignPattern/muti-design-pattern-combination-application.html","/book/kama-DesignPattern/DesignPattern/structure-patterns-overview.html","/coming-soon.html","/problem/Too-many-redirects.html"]'),O6=JSON.parse('{"article":{"/":{"path":"/article/","indexes":[7,99,8,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,9,116,117,60,61,77,10,11,72,118,12,119,13,120,121,63,122,123,124,125,4,126,14,15,16,17,18,19,49,127,128,129,130,131,132,52,133,53,81,82,83,84,85,86,134,78,135,136,137,20,5,21,2,6,87,22,23,24,1,25,26,27,28,50,54,56,64,73,88,89,90,138,91,139,92,51,57,74,55,3,29,75,30,31,32,33,34,35,36,37,38,65,39,66,67,40,41,42,68,43,44,45,46,69,70,71,76,58,59,0,47,140,48,141,62,93,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,79,80]},"/en/":{"path":"/en/article/","indexes":[94,95,96,97,98]}},"star":{"/":{"path":"/star/","indexes":[4,52,1,26,50,54,56,64,73]},"/en/":{"path":"/en/star/","indexes":[]}},"timeline":{"/":{"path":"/timeline/","indexes":[7,99,8,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,9,116,117,60,61,77,10,11,72,118,12,119,13,120,121,63,122,123,124,125,4,126,14,15,16,17,18,19,49,127,128,129,130,131,132,52,133,53,81,82,83,84,85,86,134,78,135,136,137,20,5,21,2,6,87,22,23,24,1,25,26,27,28,50,54,56,64,73,88,89,90,138,91,139,92,51,57,74,55,3,29,75,30,31,32,33,34,35,36,37,38,65,39,66,67,40,41,42,68,43,44,45,46,69,70,71,76,58,59,0,47,140,48,141,62,93,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175]},"/en/":{"path":"/en/timeline/","indexes":[94,95,96,97,98]}}}'),$o=ee(C6);Mt($o);const Eh=e=>{const{frontmatter:t,page:i,routeLocale:n}=jt();return E(()=>{const l=e??t.value.blog?.key??"";if(!l)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};if(!(l in $o.value))throw new Error(`useBlogCategory: key ${l} is invalid`);const a=$o.value[l][n.value],o={path:a.path,map:{}};for(const r in a.map){const s=a.map[r];o.map[r]={path:s.path,items:[]};for(const u of s.indexes){const{path:d,meta:p}=Tt(kh[u]);o.map[r].items.push({path:d,info:p})}i.value.path===s.path&&(o.currentItems=o.map[r].items)}return o})},Mo=ee(O6);Mt(Mo);const Ta=e=>{const{frontmatter:t,routeLocale:i}=jt();return E(()=>{const n=e??t.value.blog?.key??"";if(!n)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!(n in Mo.value))throw new Error(`useBlogType: key ${e} is invalid`);const l=Mo.value[n][i.value],a={path:l.path,items:[]};for(const o of l.indexes){const{path:r,meta:s}=Tt(kh[o]);a.items.push({path:r,info:s})}return a})},D6={Email:'<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"/><path fill="#fff" d="M270.077 286.233H751.99c32.933 0 59.86 24.855 60.274 55.51l-301.023 157L210.217 341.88c.207-30.723 26.927-55.717 59.86-55.717zm-59.929 115.714-.276 277.756c0 30.931 27.134 56.2 60.205 56.2H751.99c33.14 0 60.274-25.269 60.274-56.2V401.81L518.283 551.492a15.88 15.88 0 0 1-14.43 0L210.148 401.947z"/></svg>',Github:'<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>',Gmail:'<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon gmail-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#DB4437"/><path fill="#E67C73" d="M277.48 285.567h465.767v441.362H277.48V285.567z"/><path fill="#FFF" d="M282.543 285.567h-10.645c-25.962 0-47.122 21.808-47.122 48.705v343.952c0 26.897 21.08 48.705 47.122 48.705h24.976V407.954l213.49 169.95 213.489-169.95V726.93h24.975c26.04 0 47.123-21.809 47.123-48.705V334.272c0-26.897-21.134-48.705-47.123-48.705h-10.644L510.364 480.44 282.542 285.567z"/></svg>'};var I6=[];const _l=()=>{const{theme:e,themeLocale:t}=Oe();return E(()=>({...e.value.blog,...t.value.blog}))};var Ah=D({name:"SocialMedias",setup(){const e=_l(),t=nt(),i=E(()=>Pi(e.value.medias??{}).map(([n,l])=>typeof l=="string"?{name:n,icon:D6[n],link:l}:{name:n,...l}));return()=>i.value.length?c("div",{class:"vp-social-medias"},i.value.map(({name:n,icon:l,link:a})=>c("a",{class:"vp-social-media",href:a,rel:"noopener noreferrer",target:"_blank","aria-label":n||"",...t.value?{}:{"data-balloon-pos":"up"},innerHTML:Xt(l)?`<img class="vp-social-media-icon ${n}-icon" src="${l}">`:l}))):null}});const Th=Symbol(""),bl=()=>{const e=we(Th);if(!e)throw new Error("useArticles() is called without provider.");return e},R6=()=>{const e=Ta("article");It(Th,e)},fi=()=>{const e=Nt();return E(()=>e.value.blogLocales)},xh=Symbol.for("categoryMap"),yl=()=>{const e=we(xh);if(!e)throw new Error("useCategoryMap() is called without provider.");return e},B6=()=>{const e=Eh("category");It(xh,e)},Lh=Symbol.for("tagMap"),wl=()=>{const e=we(Lh);if(!e)throw new Error("useTagMap() is called without provider.");return e},$6=()=>{const e=Eh("tag");It(Lh,e)},Sh=Symbol(""),Ir=()=>{const e=we(Sh);if(!e)throw new Error("useTimeline() is called without provider.");return e},M6=()=>{const e=Ta("timeline"),t=Su(),i=E(()=>{const n=[];return e.value.items.forEach(({info:l,path:a})=>{const o=mr(l.date);if(o){const r=o.getFullYear();(!n[0]||n[0].year!==r)&&n.unshift({year:r,items:[]}),n[0].items.push({date:o.toLocaleDateString(t.value,{month:"numeric",day:"numeric"}),info:l,path:a})}}),{...e.value,config:n.reverse()}});It(Sh,i)};var Rr=D({name:"BloggerInfo",slots:Object,setup(e,{slots:t}){const i=fi(),n=_l(),{siteLocale:l,themeLocale:a}=Oe(),o=bl(),r=yl(),s=wl(),u=Ir(),d=mi(),p=E(()=>({name:n.value.name??il(a.value.author)[0]?.name??l.value.title,avatar:n.value.avatar??a.value.logo??null,description:n.value.description??null})),h=E(()=>n.value.intro);return()=>{const{article:m,category:g,tag:b,timeline:y}=i.value,A=[[o.value.path,o.value.items.length,m],[r.value.path,ft(r.value.map).length,g],[s.value.path,ft(s.value.map).length,b],[u.value.path,u.value.items.length,y]];return c("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},t.bloggerInfo?.(p.value)??[c("div",{class:"vp-blogger",...h.value?{"aria-label":i.value.intro,"data-balloon-pos":"down",role:"link",onClick:()=>{d(h.value)}}:{}},[p.value.avatar?c("img",{class:"vp-blogger-avatar",src:ye(p.value.avatar),property:"image",alt:"Blogger Avatar",loading:"lazy"}):null,p.value.name?c("div",{class:"vp-blogger-name",property:"name"},p.value.name):null,p.value.description?c("div",{class:"vp-blogger-description",innerHTML:p.value.description}):null,h.value?c("meta",{property:"url",content:ye(h.value)}):null]),c("div",{class:"vp-blog-counts"},A.map(([w,v,T])=>c(Re,{class:"vp-blog-count",to:w},()=>[c("div",{class:"count"},v),c("div",T)]))),c(Ah)])}}});const Ph=Symbol(""),Br=()=>{const e=we(Ph);if(!e)throw new Error("useStars() is called without provider.");return e},V6=()=>{const e=Ta("star");It(Ph,e)},$r=()=>c(ge,{name:"category"},()=>c("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));$r.displayName="CategoryIcon";const Mr=()=>c(ge,{name:"tag"},()=>c("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Mr.displayName="TagIcon";const Vr=()=>c(ge,{name:"timeline"},()=>c("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));Vr.displayName="TimelineIcon";const Ch=()=>c(ge,{name:"slides"},()=>c("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));Ch.displayName="SlideIcon";const Oh=()=>c(ge,{name:"sticky"},()=>[c("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);Oh.displayName="StickyIcon";const Fr=()=>c(ge,{name:"article"},()=>c("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));Fr.displayName="ArticleIcon";const F6=e=>{const t=Nt();return E(()=>{const{["author"]:i}=e.value;return i?il(i):i===!1?[]:il(t.value.author,!1)})},j6=e=>{const t=yl();return E(()=>Fp(e.value.category).map(i=>({name:i,path:t.value.map[i].path})))},N6=e=>{const t=wl();return E(()=>jp(e.value.tag).map(i=>({name:i,path:t.value.map[i].path})))},H6=e=>E(()=>{const{["date"]:t}=e.value;return mr(t)}),z6=e=>{const t=Ln(e,"info"),i=_l(),n=F6(t),l=j6(t),a=N6(t),o=H6(t),r=$p(),s=E(()=>({author:n.value,category:l.value,date:o.value,tag:a.value,isOriginal:t.value.isOriginal??!1,readingTime:t.value.readingTime??null,readingTimeLocale:t.value.readingTime&&r.value?Bp(t.value.readingTime,r.value):null,pageview:e.path})),u=E(()=>i.value.articleInfo??null);return{info:s,items:u}};var q6=D({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){const i=Ln(e,"info"),{info:n,items:l}=z6(e),a=Si();return()=>{const{title:o,type:r,isEncrypted:s=!1,cover:u=null,excerpt:d=null,sticky:p}=i.value,h=n.value;return c("div",{class:"vp-article-wrapper",onClick:m=>{m.target?.matches("summary")||(m.preventDefault(),a.push(e.path))}},c("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[t.articleCover?.({cover:u})??(u?[c("img",{class:"vp-article-cover",src:ye(u),alt:"",loading:"lazy"}),c("meta",{property:"image",content:ye(u)})]:[]),p?c(Oh):null,c(Re,{to:e.path},()=>t.articleTitle?.({title:o,isEncrypted:s,type:r})??c("header",{class:"vp-article-title"},[s?c(Dr):null,r==="slide"?c(Ch):null,c("span",{property:"headline"},o)])),t.articleExcerpt?.({excerpt:d})??(d?c("div",{class:"vp-article-excerpt",innerHTML:d}):null),c("hr",{class:"vp-article-hr"}),t.articleInfo?.(h)??c(Qp,{info:h,items:l.value,onClick:m=>{m.stopPropagation()}})]))}}});const U6='<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>';var W6=D({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(e,{emit:t}){const i=new fr,n=Nt(),l=Q(""),a=E(()=>n.value.paginationLocales),o=E(()=>Math.ceil(e.total/e.perPage)),r=E(()=>!!o.value&&o.value!==1),s=E(()=>o.value<7?!1:e.current>4),u=E(()=>o.value<7?!1:e.current<o.value-3),d=E(()=>{const{current:m}=e;let g=1,b=o.value;const y=[];o.value>=7&&(m<=4&&m<o.value-3?(g=1,b=5):m>4&&m>=o.value-3?(b=o.value,g=o.value-4):o.value>7&&(g=m-2,b=m+2));for(let A=g;A<=b;A++)y.push(A);return y}),p=m=>{t("updateCurrentPage",m)},h=m=>{const g=parseInt(m,10);g<=o.value&&g>0?p(g):i.pop(`${U6}${a.value.errorText.replace(/\$page/gu,o.value.toString())}`)};return()=>c("div",{class:"vp-pagination"},r.value?c("nav",{class:"vp-pagination-list"},[c("div",{class:"vp-pagination-number "},[e.current>1?c("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>{p(e.current-1)}},a.value.prev):null,s.value?[c("div",{role:"navigation",onClick:()=>{p(1)}},1),c("div",{class:"ellipsis"},"...")]:null,d.value.map(m=>c("div",{key:m,class:{active:e.current===m},role:"navigation",onClick:()=>{p(m)}},m)),u.value?[c("div",{class:"ellipsis"},"..."),c("div",{role:"navigation",onClick:()=>{p(o.value)}},o.value)]:null,e.current<o.value?c("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>{p(e.current+1)}},a.value.next):null]),c("div",{class:"vp-pagination-nav"},[c("label",{for:"navigation-text"},`${a.value.navigate}: `),c("input",{id:"navigation-text",value:l.value,onInput:({target:m})=>{l.value=m.value},onKeydown:m=>{m.key==="Enter"&&(m.preventDefault(),h(l.value))}}),c("button",{class:"vp-pagination-button",type:"button",role:"navigation",title:a.value.action,onClick:()=>{h(l.value)}},a.value.action)])]):[])}}),jr=D({name:"ArticleList",props:{items:{type:Array,required:!0}},slots:Object,setup(e,{slots:t}){const i=Ft(),n=Si(),l=fi(),a=_l(),o=x_(),r=Q(1),s=E(()=>a.value.articlePerPage??10),u=E(()=>e.items.slice((r.value-1)*s.value,r.value*s.value)),d=async p=>{r.value=p;const h={...i.query};!(h.page===p.toString()||p===1&&!h.page)&&(p===1?delete h.page:h.page=p.toString(),await n.push({path:i.path,query:h})),await xt(),o({selector:".vp-pageview"})};return de(()=>{const{page:p}=i.query;d(p?Number(p):1),ke(r,()=>{const h=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,h)},100)})}),()=>c("div",{id:"article-list",class:"vp-article-list",role:"feed"},u.value.length?[...u.value.map(({info:p,path:h},m)=>c(ue,{appear:!0,delay:m*.04},()=>c(q6,{key:h,info:p,path:h},t))),c(W6,{current:r.value,perPage:s.value,total:e.items.length,onUpdateCurrentPage:d})]:c("h2",{class:"vp-empty-hint"},l.value.empty.replace("$text",l.value.article.toLocaleLowerCase())))}});const G6="//theme-hope-assets.vuejs.press/hero/default.jpg";var Y6=D({name:"BlogHero",slots:Object,setup(e,{slots:t}){const{frontmatter:i,siteLocale:n}=Oe(),l=E(()=>{const{heroText:r,heroStyle:s,tagline:u,heroFullScreen:d=!1}=i.value;return{text:r??(n.value.title||"Hello"),tagline:u??"",style:s??null,isFullScreen:d}}),a=E(()=>{const{heroImage:r,heroImageDark:s,heroAlt:u,heroImageStyle:d}=i.value;return{image:r?ye(r):null,imageDark:s?ye(s):null,style:d??null,alt:u??""}}),o=E(()=>{const{bgImage:r,bgImageDark:s,bgImageStyle:u}=i.value;return{image:pe(r)?ye(r):r===!1?null:G6,imageDark:pe(s)?ye(s):null,style:u??null}});return()=>i.value.hero===!1?null:c("div",{class:["vp-blog-hero",{"hero-fullscreen":i.value.heroFullScreen,"no-bg":!o.value.image}]},[t.heroBg?.(o.value)??[o.value.image?c("div",{class:["vp-blog-mask",{light:o.value.imageDark}],style:[{background:`url(${o.value.image}) center/cover no-repeat`},o.value.style]}):null,o.value.imageDark?c("div",{class:"vp-blog-mask dark",style:[{background:`url(${o.value.imageDark}) center/cover no-repeat`},o.value.style]}):null],t.heroLogo?.(a.value)??c(ue,{appear:!0,group:!0,delay:.04},()=>{const{image:r,imageDark:s,style:u,alt:d}=a.value;return[r?c("img",{key:"light",class:["vp-blog-hero-image",{light:s}],style:u,src:r,alt:d}):null,s?c("img",{key:"dark",class:"vp-blog-hero-image dark",style:u,src:s,alt:d}):null]}),t.heroInfo?.(l.value)??c("div",{class:"vp-blog-hero-info"},[c(ue,{appear:!0,delay:.08},()=>l.value.text?c("h1",{class:"vp-blog-hero-title"},l.value.text):null),c(ue,{appear:!0,delay:.12},()=>l.value.tagline?c("div",{class:"vp-blog-hero-description",innerHTML:l.value.tagline}):null)]),i.value.heroFullScreen?c(Or,{onClick:()=>window.scrollTo({top:window.innerHeight-(document.querySelector("[vp-navbar]")?.clientHeight??0),behavior:"smooth"})}):null])}}),K6=D({name:"ArticlesInfo",setup(){const e=bl(),t=fi(),i=Br(),n=mi(),l=E(()=>e.value.items.length),a=E(()=>i.value.items);return()=>c(ue,()=>c("div",{class:"vp-star-article-wrapper"},[c("div",{class:"title",onClick:()=>{n(e.value.path)}},[c(Fr),c("span",{class:"num"},l.value),t.value.article]),c("hr"),a.value.length?c("ul",{class:"vp-star-articles"},a.value.map(({info:o,path:r},s)=>c(ue,{appear:!0,delay:.08*(s+1)},()=>c("li",{class:"vp-star-article"},c(Re,{to:r},()=>o.title))))):c("div",{class:"vp-star-article-empty"},t.value.empty.replace("$text",t.value.star))]))}}),Dh=D({name:"CategoryList",setup(){const e=Yi(),t=yl();return()=>c("ul",{class:"vp-category-list"},Pi(t.value.map).sort(([,i],[,n])=>n.items.length-i.items.length).map(([i,{path:n,items:l}])=>c("li",{class:"vp-category-item"},c(Re,{class:["vp-category",`color${gl(i,Number(Cn.colorNumber))}`,{active:n===e.value.path}],to:n},()=>[i,c("span",{class:"vp-category-count"},l.length)]))))}}),J6=D({name:"CategoriesInfo",setup(){const e=fi(),t=yl(),i=mi(),n=E(()=>ft(t.value.map).length);return()=>c("div",{class:"vp-category-wrapper"},[n.value?[c("div",{class:"title",onClick:()=>{i(t.value.path)}},[c($r),c("span",{class:"num"},n.value),e.value.category]),c("hr"),c(ue,{delay:.04},()=>c(Dh))]:c("div",{class:"vp-category-empty"},e.value.empty.replace("$text",e.value.category))])}}),Ih=D({name:"TagList",setup(){const e=Ue(),t=wl(),i=n=>n===e.value.blog?.name;return()=>c("ul",{class:"vp-tag-list"},Pi(t.value.map).sort(([,n],[,l])=>l.items.length-n.items.length).map(([n,{path:l,items:a}])=>c("li",{class:"vp-tag-item"},c(Re,{class:["vp-tag",`color${gl(n,Number(Cn.colorNumber))}`,{active:i(n)}],to:l},()=>[n,c("span",{class:"vp-tag-count"},a.length)]))))}}),Q6=D({name:"TagsInfo",setup(){const e=fi(),t=wl(),i=mi(),n=E(()=>ft(t.value.map).length);return()=>c("div",{class:"vp-tag-wrapper"},[n.value?[c("div",{class:"title",onClick:()=>{i(t.value.path)}},[c(Mr),c("span",{class:"num"},n.value),e.value.tag]),c("hr"),c(ue,{delay:.04},()=>c(Ih))]:c("div",{class:"vp-tag-empty"},e.value.empty.replace("$text",e.value.tag))])}}),X6=D({name:"TimelineList",setup(){const e=fi(),t=Ir(),i=mi();return()=>c("div",{class:"timeline-list-wrapper"},[c("div",{class:"title",onClick:()=>{i(t.value.path)}},[c(Vr),c("span",{class:"num"},t.value.items.length),e.value.timeline]),c("hr"),c("div",{class:"timeline-content"},c("ul",{class:"timeline-list"},t.value.config.map(({year:n,items:l},a)=>c(ue,{appear:!0,delay:.08*(a+1)},()=>c("li",[c("h3",{class:"timeline-year"},n),c("ul",{class:"timeline-year-wrapper"},l.map(({date:o,info:r,path:s})=>c("li",{class:"timeline-item"},[c("span",{class:"timeline-date"},o),c(Re,{class:"timeline-title",to:s},()=>r.title)])))])))))])}});const Z6={article:Fr,category:$r,tag:Mr,timeline:Vr};var Rh=D({name:"InfoList",setup(){const e=fi(),t=Q("article");return()=>c("div",{class:"vp-blog-infos"},[c("div",{class:"vp-blog-type-switcher"},Pi(Z6).map(([i,n])=>c("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{t.value=i}},c("div",{class:["vp-blog-type-icon-wrapper",{active:t.value===i}],"aria-label":e.value[i],"data-balloon-pos":"down"},c(n))))),c(ue,()=>t.value==="article"?c(K6):t.value==="category"?c(J6):t.value==="tag"?c(Q6):c(X6))])}});const kl=(e,{slots:t})=>c("aside",{class:"vp-blog-info-wrapper"},[t.infoBefore?.(),c(ue,()=>c(Rr,{},t)),c(ue,{delay:.04},()=>c(Rh)),t.infoAfter?.()]);kl.displayName="InfoPanel";var e8=D({name:"ProjectPanel",props:{items:{type:Array,required:!0}},setup(e){const t=nt(),i=mi();return()=>c("div",{class:"vp-project-panel"},e.items.map(({icon:n,link:l,name:a,desc:o,background:r})=>c("a",{class:["vp-project-card",{[`color${gl(a,Number(Cn.colorNumber))}`]:!t.value&&!r}],...r?{style:r}:{},href:ml(l)?ye(l):l,onClick:s=>{i(l),s.preventDefault()}},[n?c(Pe("VPIcon"),{class:"vp-project-icon",icon:n}):null,c("div",{class:"vp-project-name"},a),c("div",{class:"vp-project-desc"},o)])))}}),t8=D({name:"BlogHome",slots:Object,setup(e,{slots:t}){const i=bl(),n=Ue(),l=E(()=>n.value.projects??[]);return()=>c("div",{class:"vp-page vp-blog-home"},[t.heroBefore?.(),c(Y6,{},t),t.heroAfter?.(),c("div",{class:"blog-page-wrapper"},[c("main",{id:"main-content",class:"vp-blog-main"},[t.articlesBefore?.()??(l.value.length?c(ue,{appear:!0,delay:.16},()=>c(e8,{items:l.value})):null),c(ue,{appear:!0,delay:.24},()=>c(jr,{items:i.value.items},t)),t.articlesAfter?.()]),c(ue,{appear:!0,delay:.16},()=>c(kl,{key:"blog"},t))]),t.content?.()??c(ue,{appear:!0,delay:.28},()=>c(Aa,{},t))])}}),i8=D({name:"BlogMainLayout",slots:Object,setup(e,{slots:t}){const{isMobile:i}=Ea();return()=>[c(Cr),c(Pr,{noSidebar:!i.value,noToc:!0},{...t,navScreenBottom:()=>t.navScreenBottom?.()??c(Rr,{},t),sidebarItems:n=>t.sidebarItems?.(n)??(i.value?c(Rh):null)})]}}),n8=D({name:"CategoryPage",slots:Object,setup(e,{slots:t}){const i=Yi(),n=Ue(),l=yl(),a=wl(),o=E(()=>{const r=n.value.blog;if(r?.type!=="category")return null;const{name:s,key:u}=r;return u==="category"?{component:Dh,items:s?l.value.map[s].items:null}:u==="tag"?{component:Ih,items:s?a.value.map[s].items:null}:null});return()=>c("div",{class:"vp-page vp-blog"},c("div",{class:"blog-page-wrapper"},[c("main",{id:"main-content",class:"vp-blog-main"},t.default?.()??[c(ue,{appear:!0},()=>o.value?c(o.value.component):null),t.articlesBefore?.(),o.value?.items?c(ue,{appear:!0,delay:.08},()=>[c(jr,{key:i.value.path,items:o.value.items},t)]):null,t.articlesAfter?.()]),c(ue,{delay:.16},()=>c(kl,{key:"blog"},t))]))}}),l8=D({name:"TimelineItems",setup(){const e=_l(),t=fi(),i=Ir(),n=E(()=>e.value.timeline??t.value.timelineTitle);return()=>c("div",{class:"timeline-wrapper"},c("ul",{class:"timeline-content"},[c(ue,()=>c("li",{class:"motto"},n.value)),i.value.config.map(({year:l,items:a},o)=>c(ue,{appear:!0,delay:.08*(o+1),group:!0},()=>[c("h3",{key:"title",id:l,class:"timeline-year-title"},c("span",l)),c("li",{key:"content",class:"timeline-year-list"},[c("ul",{class:"timeline-year-wrapper"},a.map(({date:r,info:s,path:u})=>c("li",{class:"timeline-item"},[c("span",{class:"timeline-date"},r),c(Re,{class:"timeline-title",to:u},()=>s.title)])))])]))]))}});const Bh=(e,{slots:t})=>c("div",{class:"vp-page vp-blog"},c("div",{class:"blog-page-wrapper"},[c("main",{id:"main-content",class:"vp-blog-main"},[t.articlesBefore?.(),c(ue,{appear:!0},()=>c(l8)),t.articlesAfter?.()]),c(ue,{appear:!0},()=>c(kl,{key:"blog"},t))]));Bh.displayName="TimelinePage";var a8=D({name:"ArticleType",setup(){const{page:e,routeLocale:t}=Oe(),i=bl(),n=Br(),l=fi(),a=E(()=>[{text:l.value.all,path:i.value.path},{text:l.value.star,path:n.value.path},...I6.map(({key:o,path:r})=>{const s=r.replace(/^\//,t.value);return{text:l.value[o]??Tt(s).meta.title??o,path:s}})]);return()=>c("ul",{class:"vp-article-type-wrapper"},a.value.map(o=>c("li",{class:["vp-article-type",{active:o.path===e.value.path}]},c(Re,{to:o.path},()=>o.text))))}}),o8=D({name:"TypePage",slots:Object,setup(e,{slots:t}){const i=Ta(),n=Ue(),l=Yi(),a=bl(),o=Br(),r=E(()=>{const s=n.value.blog;return s?.type!=="type"||!s.key?a.value.items:s.key==="star"?o.value.items:i.value.items});return()=>c("div",{class:"vp-page vp-blog"},c("div",{class:"blog-page-wrapper"},[c("main",{id:"main-content",class:"vp-blog-main"},t.default?.()??[c(ue,()=>c(a8)),t.articlesBefore?.(),c(ue,{appear:!0,delay:.08},()=>c(jr,{key:l.value.path,items:r.value})),t.articlesAfter?.()]),c(ue,{appear:!0,delay:.08},()=>c(kl,{key:"blog"},t))]))}}),r8=D({name:"Blog",slots:Object,setup(e,{slots:t}){const i=Ue();return()=>{const{type:n,key:l}=i.value.blog??{};return c(i8,null,{...t,default:()=>t.default?.()??c(n==="category"?n8:n==="type"?l==="timeline"?Bh:o8:t8,null,t)})}}});const s8=()=>{R6(),B6(),V6(),$6(),M6()},c8=setTimeout,Wn=16,$h=10,d8=16,u8=100,tn="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),_i=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1],p8=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],h8=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],Mh=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892],Vo=(e,t)=>{if(t<=0||t>e.length)throw Error(`Illegal length: ${t}`);let i=0,n,l;const a=[];for(;i<t;){if(n=e[i++]&255,a.push(tn[n>>2&63]),n=(n&3)<<4,i>=t){a.push(tn[n&63]);break}if(l=e[i++]&255,n|=l>>4&15,a.push(tn[n&63]),n=(l&15)<<2,i>=t){a.push(tn[n&63]);break}l=e[i++]&255,n|=l>>6&3,a.push(tn[n&63]),a.push(tn[l&63])}return a.join("")},m8=(e,t)=>{const i=e.length;let n=0,l=0,a,o,r,s,u,d;const p=[];for(;n<i-1&&l<t&&(d=e.charCodeAt(n++),a=d<_i.length?_i[d]:-1,d=e.charCodeAt(n++),o=d<_i.length?_i[d]:-1,!(a===-1||o===-1||(u=a<<2>>>0,u|=(o&48)>>4,p.push(String.fromCharCode(u)),++l>=t||n>=i)||(d=e.charCodeAt(n++),r=d<_i.length?_i[d]:-1,r===-1)||(u=(o&15)<<4>>>0,u|=(r&60)>>2,p.push(String.fromCharCode(u)),++l>=t||n>=i)));)d=e.charCodeAt(n++),s=d<_i.length?_i[d]:-1,u=(r&3)<<6>>>0,u|=s,p.push(String.fromCharCode(u)),++l;return p.map(h=>h.charCodeAt(0))},nl=(e,t,i,n)=>{let l,a=e[t],o=e[t+1];return a^=i[0],l=n[a>>>24],l+=n[256|a>>16&255],l^=n[512|a>>8&255],l+=n[768|a&255],o^=l^i[1],l=n[o>>>24],l+=n[256|o>>16&255],l^=n[512|o>>8&255],l+=n[768|o&255],a^=l^i[2],l=n[a>>>24],l+=n[256|a>>16&255],l^=n[512|a>>8&255],l+=n[768|a&255],o^=l^i[3],l=n[o>>>24],l+=n[256|o>>16&255],l^=n[512|o>>8&255],l+=n[768|o&255],a^=l^i[4],l=n[a>>>24],l+=n[256|a>>16&255],l^=n[512|a>>8&255],l+=n[768|a&255],o^=l^i[5],l=n[o>>>24],l+=n[256|o>>16&255],l^=n[512|o>>8&255],l+=n[768|o&255],a^=l^i[6],l=n[a>>>24],l+=n[256|a>>16&255],l^=n[512|a>>8&255],l+=n[768|a&255],o^=l^i[7],l=n[o>>>24],l+=n[256|o>>16&255],l^=n[512|o>>8&255],l+=n[768|o&255],a^=l^i[8],l=n[a>>>24],l+=n[256|a>>16&255],l^=n[512|a>>8&255],l+=n[768|a&255],o^=l^i[9],l=n[o>>>24],l+=n[256|o>>16&255],l^=n[512|o>>8&255],l+=n[768|o&255],a^=l^i[10],l=n[a>>>24],l+=n[256|a>>16&255],l^=n[512|a>>8&255],l+=n[768|a&255],o^=l^i[11],l=n[o>>>24],l+=n[256|o>>16&255],l^=n[512|o>>8&255],l+=n[768|o&255],a^=l^i[12],l=n[a>>>24],l+=n[256|a>>16&255],l^=n[512|a>>8&255],l+=n[768|a&255],o^=l^i[13],l=n[o>>>24],l+=n[256|o>>16&255],l^=n[512|o>>8&255],l+=n[768|o&255],a^=l^i[14],l=n[a>>>24],l+=n[256|a>>16&255],l^=n[512|a>>8&255],l+=n[768|a&255],o^=l^i[15],l=n[o>>>24],l+=n[256|o>>16&255],l^=n[512|o>>8&255],l+=n[768|o&255],a^=l^i[16],e[t]=o^i[d8+1],e[t+1]=a,e},an=(e,t)=>{let i=0;for(let n=0;n<4;++n)i=i<<8|e[t]&255,t=(t+1)%e.length;return{key:i,offp:t}},Rc=(e,t,i)=>{const n=t.length,l=i.length;let a=0,o=new Int32Array([0,0]),r;for(let s=0;s<n;s++)r=an(e,a),a=r.offp,t[s]^=r.key;for(let s=0;s<n;s+=2)o=nl(o,0,t,i),t[s]=o[0],t[s+1]=o[1];for(let s=0;s<l;s+=2)o=nl(o,0,t,i),i[s]=o[0],i[s+1]=o[1]},f8=(e,t,i,n)=>{const l=i.length,a=n.length;let o=0,r=new Int32Array([0,0]),s;for(let u=0;u<l;u++)s=an(t,o),o=s.offp,i[u]^=s.key;o=0;for(let u=0;u<l;u+=2)s=an(e,o),o=s.offp,r[0]^=s.key,s=an(e,o),o=s.offp,r[1]^=s.key,r=nl(r,0,i,n),i[u]=r[0],i[u+1]=r[1];for(let u=0;u<a;u+=2)s=an(e,o),o=s.offp,r[0]^=s.key,s=an(e,o),o=s.offp,r[1]^=s.key,r=nl(r,0,i,n),n[u]=r[0],n[u+1]=r[1]},Bc=(e,t,i,n,l)=>{const a=new Int32Array(Mh),o=a.length;i=1<<i>>>0;const r=new Int32Array(p8),s=new Int32Array(h8);f8(t,e,r,s);let u=0;const d=()=>{if(u<i){const h=Date.now();for(;u<i&&(u+=1,Rc(e,r,s),Rc(t,r,s),!(Date.now()-h>u8)););}else{for(let m=0;m<64;m++)for(let g=0;g<o>>1;g++)nl(a,g<<1,r,s);const h=[];for(let m=0;m<o;m++)h.push(a[m]>>24&255),h.push(a[m]>>16&255),h.push(a[m]>>8&255),h.push(a[m]&255);return n?h:Promise.resolve(h)}if(!n)return new Promise(h=>c8(()=>{d().then(h)}))};if(!n)return d();let p;do p=d();while(!p);return p},g8=e=>{try{const t=new Uint32Array(e);return globalThis.crypto.getRandomValues(t),Array.from(t)}catch{throw Error("WebCryptoAPI / globalThis is not available")}},Vh=(...e)=>new Error(`Illegal arguments: ${e.map(t=>typeof t).join(", ")}`),v8=(e=$h)=>{if(typeof e!="number")throw Vh(e);return e=e<4?4:e>31?31:e,`$2b$${e<10?"0":""}${e}$${Vo(g8(Wn),Wn)}`},_8=e=>{let t=0,i=0;for(let n=0;n<e.length;++n)i=e.charCodeAt(n),i<128?t+=1:i<2048?t+=2:(i&64512)===55296&&(e.charCodeAt(n+1)&64512)===56320?(n++,t+=4):t+=3;return t},b8=e=>{let t=0,i,n;const l=new Array(_8(e));for(let a=0,o=e.length;a<o;++a)i=e.charCodeAt(a),i<128?l[t++]=i:i<2048?(l[t++]=i>>6|192,l[t++]=i&63|128):(i&64512)===55296&&((n=e.charCodeAt(a+1))&64512)===56320?(i=65536+((i&1023)<<10)+(n&1023),++a,l[t++]=i>>18|240,l[t++]=i>>12&63|128,l[t++]=i>>6&63|128,l[t++]=i&63|128):(l[t++]=i>>12|224,l[t++]=i>>6&63|128,l[t++]=i&63|128);return l},y8=(e,t,i,n)=>{if(typeof e!="string"||typeof t!="string")throw new Error("Invalid content / salt: not a string");let l,a;if(t.charAt(0)!=="$"||t.charAt(1)!=="2")throw new Error("Invalid salt version: "+t.substring(0,2));if(t.charAt(2)==="$")l="\0",a=3;else{if(l=t.charAt(2),l!=="a"&&l!=="b"&&l!=="y"||t.charAt(3)!=="$")throw Error("Invalid salt revision: "+t.substring(2,4));a=4}const o=t.substring(a,a+2),r=/\d\d/.test(o)?Number(o):null;if(r===null)throw new Error("Missing salt rounds");if(r<4||r>31)throw new Error(`Illegal number of rounds (4-31): ${r}`);const s=t.substring(a+3,a+25);e+=l>="a"?"\0":"";const u=b8(e),d=m8(s,Wn);if(d.length!==Wn)throw new Error(`Illegal salt: ${s}`);const p=h=>`$2${l>="a"?l:""}$${r<10?"0":""}${r}$${Vo(d,Wn)}${Vo(h,Mh.length*4-1)}`;return i?p(Bc(u,d,r,!0)):Bc(u,d,r,!1).then(h=>p(h))},w8=(e,t=$h)=>y8(e,typeof t=="number"?v8(t):t,!0),Fo=(e,t)=>{if(typeof e!="string"||typeof t!="string")throw Vh(e,t);return t.length!==60?!1:w8(e,t.substring(0,29))===t};var Fh=D({name:"PasswordModal",props:{hint:String,full:Boolean,showTitle:Boolean},emits:["verify"],setup(e,{emit:t}){const{frontmatter:i,themeLocale:n}=Oe(),l=Q(""),a=Q(!1),o=Q(!1),r=E(()=>n.value.encryptLocales);let s=null;const u=()=>{s&&clearTimeout(s),a.value=!1,t("verify",l.value,o.value),xt().then(()=>{a.value=!0,s=setTimeout(()=>{a.value=!1},1e3)})};return()=>c("div",{class:["vp-decrypt-layer",{expand:e.full||i.value.home}]},[e.showTitle?c(bh):null,c("div",{class:"vp-decrypt-modal"},[c("div",{class:["vp-decrypt-hint",{tried:a.value}]},a.value?r.value.errorHint:c(Dr,{"aria-label":r.value.iconLabel})),e.hint?c("div",{class:"vp-decrypt-hint"},e.hint):null,c("div",{class:"vp-decrypt-input"},[c("input",{type:"password",value:l.value,placeholder:r.value.placeholder,onInput:({target:d})=>{l.value=d.value},onKeydown:({key:d})=>{d==="Enter"&&u()}})]),c("div",{class:"vp-remember-password"},[c("input",{id:"remember-password",type:"checkbox",value:o.value,onChange:()=>{o.value=!o.value}}),c("label",{for:"remember-password"},r.value.remember)]),c("button",{type:"button",class:"vp-decrypt-submit",onClick:()=>{u()}},"OK")])])}});const jh=()=>{const e=Ci();return E(()=>e.value.encrypt)},$c="VUEPRESS_HOPE_GLOBAL_TOKEN",k8=()=>{const e=jh(),t=Qi($c,""),i=yr($c,"");return{status:E(()=>{const{global:n=!1,admin:l}=e.value,a=n&&!!l?.tokens.length,o=a?t.value?e.value.admin.tokens.every(r=>!Fo(t.value,r)):e.value.admin.tokens.every(r=>!Fo(i.value,r)):!1;return{isEncrypted:a,isLocked:o,hint:l?.hint??""}}),validate:(n,l=!1)=>{(l?t:i).value=n}}};var E8=D({name:"GlobalEncrypt",slots:Object,setup(e,{slots:t}){const{status:i,validate:n}=k8(),l=Q(!1);return de(()=>{l.value=!0}),()=>{const{isEncrypted:a,isLocked:o,hint:r}=i.value;return c(_h,()=>a?l.value?o?c(Fh,{full:!0,hint:r,onVerify:n}):t.default():null:t.default())}}});const lo=(e="",t)=>!!e&&Fo(e,t),Mc="VUEPRESS_HOPE_PATH_TOKEN",A8=()=>{const e=Yi(),t=jh(),i=Qi(Mc,{}),n=yr(Mc,{}),l=o=>Lt(t.value.config)?ft(t.value.config).filter(r=>qi(decodeURI(o),r)).sort((r,s)=>s.length-r.length):[],a=o=>{const{config:r={}}=t.value,s=l(o);if(s.length>0){const u=s.find(d=>r[d].hint);return{isEncrypted:!0,isLocked:s.some(d=>(i.value[d]?r[d].tokens.every(p=>!lo(i.value[d],p)):!0)&&(n.value[d]?r[d].tokens.every(p=>!lo(n.value[d],p)):!0)),hint:u?r[u].hint:""}}return{isEncrypted:!1,isLocked:!1,hint:""}};return{status:E(()=>a(e.value.path)),getStatus:a,validate:(o,r=!1)=>{const{config:s={}}=t.value,u=l(e.value.path);for(const d of u)if(s[d].tokens.some(p=>lo(o,p))){(r?i:n).value[d]=o;break}}}};var T8=D({name:"LocalEncrypt",slots:Object,setup(e,{slots:t}){const{status:i,validate:n}=A8(),l=Q(!1);return de(()=>{l.value=!0}),()=>{const{isEncrypted:a,isLocked:o,hint:r}=i.value;return a?l.value?o?c(Fh,{showTitle:!0,full:!0,hint:r,onVerify:n}):t.default():null:t.default()}}});H3(e=>{const t=e.title,i=e.index??!0,n=e.icon;return i?{title:t,content:n?()=>[c(Pe("VPIcon"),{icon:n,sizing:"both"}),t]:null,order:e.order,index:e.index}:null});const x8={enhance:({app:e,router:t})=>{const{scrollBehavior:i}=t.options;t.options.scrollBehavior=async(...n)=>(await Io.wait(),i(...n)),z_(e),e.component("BloggerInfo",Rr),e.component("SocialMedias",Ah),e.component("GlobalEncrypt",E8),e.component("LocalEncrypt",T8)},setup:()=>{q_(),G_(),s8()},layouts:{Layout:S6,NotFound:P6,Blog:r8}},L8=Object.freeze(Object.defineProperty({__proto__:null,default:x8},Symbol.toStringTag,{value:"Module"})),Vc=1e3*60*60*24,S8=(e,t={"/":"Running time: :day days :hour hours :minute minutes :second seconds"},i=!1)=>{const{routeLocale:n,routePath:l}=Oe(),a=y2();let o="";const r=(e instanceof Date?e:new Date(e)).getTime(),s=E(()=>{const u=a.value.getTime()-r,d=new Date(u%Vc);return{day:Math.floor(u/Vc),hour:d.getHours(),minute:d.getMinutes(),second:d.getSeconds()}});de(()=>{ze([l,s],()=>{const u=document.querySelector(".vp-footer");if(u){const{day:d,hour:p,minute:h,second:m}=s.value,g=(t[n.value]||t["/"]).replace(":day",d.toString()).replace(":hour",p.toString()).replace(":minute",h.toString()).replace(":second",m.toString());u.innerHTML=`${i?`${u.innerHTML.replace(`<br>${o}`,"")}<br>`:""}${g}`,o=g}},{flush:"post"})})},Nh=`.theme-container .vp-page.vp-portfolio-home,
.theme-container .vp-page.vp-blog-home {
  padding-top: 0;
}
.vp-blog-hero.hero-fullscreen {
  height: 100vh;
}
`,P8=Nh+`.theme-container .vp-project-home {
  padding-top: 0;
}

.vp-hero-info-wrapper{
  padding-top: var(--navbar-height);
}
`,C8=[".vp-navbar",".vp-site-name",".vp-dropdown-title",".vp-dropdown-subtitle",".vp-navbar .auto-link",".vp-navbar .auto-link.route-link-active",".vp-action-link",".vp-color-mode-switch",".vp-appearance-button",".slimsearch-button",".DocSearch-Button"],O8=[".vp-toggle-navbar-button .vp-top",".vp-toggle-navbar-button .vp-middle",".vp-toggle-navbar-button .vp-bottom",".vp-toggle-sidebar-button .icon",".vp-toggle-sidebar-button:before",".vp-toggle-sidebar-button:after"],D8=e=>e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/{/g,"%7B").replace(/}/g,"%7D").replace(/</g,"%3C").replace(/>/g,"%3E"),Fc=(e,t="")=>`${C8.map(i=>`${t} .transparent-navbar ${i}`).join(",")} {
  color: ${e};
}
${O8.map(i=>`${t} .transparent-navbar ${i}`).join(",")} {
  background: ${e};
}

${t}.transparent-navbar .dropdown-wrapper .dropdown-title > .arrow {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='${D8(e)}' d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'/%3E%3C/svg%3E");
}
`,I8=({type:e,threshold:t=50,light:i,dark:n}={})=>{const l=Ue(),a=ur(),o=ga(),r=E(e==="all"?()=>!0:e==="homepage"?()=>l.value.home??a.value===o.value:()=>l.value.portfolio??l.value.layout==="Blog"),s=()=>{window.scrollY<t&&r.value?document.body.classList.add("transparent-navbar"):document.body.classList.remove("transparent-navbar")};T2((e==="homepage"?P8:Nh)+(i?Fc(i,""):"")+(n&&i!==n?Fc(n,'[data-theme="dark"]'):"")),re("scroll",s),de(()=>{ze(a,s,{flush:"post"})})},R8=(e,t)=>{const i=e.__vccOpts||e;for(const[n,l]of t)i[n]=l;return i},B8={name:"Hitokoto",data(){return{hitokotoText:"🍥🍃 「 Loading... 」",hitokotoLink:"#",authorText:""}},mounted(){fetch("https://v1.hitokoto.cn").then(e=>e.json()).then(e=>{let t="";e.from&&(t+=`「${e.from}」`),e.from_who&&(t+=` ©${e.from_who}`),this.hitokotoLink=`https://hitokoto.cn/?uuid=${e.uuid}`,this.hitokotoText=`🍃『 ${e.hitokoto} 』`,this.authorText=t?`——${t}`:""}).catch(console.error)}},$8={style:{"text-align":"center"}},M8=["href"],V8={style:{"text-align":"right","font-size":"0.8em"}},F8={id:"hitokoto_author"};function j8(e,t,i,n,l,a){return Kd(),P0("div",null,[sn("p",$8,[sn("a",{href:l.hitokotoLink,id:"hitokoto_text",target:"_blank"},ao(l.hitokotoText),9,M8)]),sn("p",V8,[sn("span",F8,ao(l.authorText),1)])])}const N8=R8(B8,[["render",j8]]),H8=Qe({setup(){S8(new Date("2022-01-20"),{"/en/":"<br>🐋 Running time: <b>:day</b> days <b>:hour</b> hours <b>:minute</b> minutes <b>:second</b> seconds 🐳","/":"<br>🐋 已运行 <b>:day</b> 天 <b>:hour</b> 小时 <b>:minute</b> 分钟 <b>:second</b> 秒 🐳"},!0),I8()},enhance:({app:e,router:t,siteData:i})=>{e.component("Hitokoto",N8)}}),z8=Object.freeze(Object.defineProperty({__proto__:null,default:H8},Symbol.toStringTag,{value:"Module"})),$l=[$2,M2,V2,J2,Q2,Z2,ev,lv,dv,Iv,Rv,Bv,Nv,Uv,Jv,Zv,h3,R3,N3,Y3,e4,_4,E4,Q4,n_,A_,L8,z8].map(e=>e.default).filter(Boolean),q8=JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[["script",{"src":"https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"}],["script",{"src":"https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"}],["script",{"src":"https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"}],["script",{"src":"https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"}],["script",{"src":"https://unpkg.com/axios/dist/axios.min.js"}],["link",{"rel":"icon","href":"/favicon.ico"}]],"locales":{"/":{"lang":"zh-CN","title":"ET-yzk 🌱","description":"凌晨四点，见海棠花未眠 🌸"},"/en/":{"lang":"en-US","title":"Kfkfka ✨","description":"Kfkfka personal blog"}}}');var on=ee(q8),U8=v1,W8=()=>{const e=H1({history:U8(ha("/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(t,i,n)=>n||(t.hash?{el:t.hash}:{top:0})});return e.beforeResolve(async(t,i)=>{if(t.path!==i.path||i===li){const n=Tt(t.fullPath);if(n.path!==t.fullPath)return n.path;const l=await n.loader();t.meta={...n.meta,_pageChunk:l}}else t.path===i.path&&(t.meta=i.meta)}),e},G8=e=>{e.component("ClientOnly",va),e.component("Content",Ou),e.component("RouteLink",Re)},Y8=(e,t,i)=>{const n=E(()=>t.currentRoute.value.path),l=fd((y,A)=>({get(){return y(),t.currentRoute.value.meta._pageChunk},set(w){t.currentRoute.value.meta._pageChunk=w,A()}})),a=E(()=>Ii.resolveLayouts(i)),o=E(()=>Ii.resolveRouteLocale(on.value.locales,n.value)),r=E(()=>Ii.resolveSiteLocaleData(on.value,o.value)),s=E(()=>l.value.comp),u=E(()=>l.value.data),d=E(()=>u.value.frontmatter),p=E(()=>Ii.resolvePageHeadTitle(u.value,r.value)),h=E(()=>Ii.resolvePageHead(p.value,d.value,r.value)),m=E(()=>Ii.resolvePageLang(u.value,r.value)),g=E(()=>Ii.resolvePageLayout(u.value,a.value)),b={layouts:a,pageData:u,pageComponent:s,pageFrontmatter:d,pageHead:h,pageHeadTitle:p,pageLang:m,pageLayout:g,redirects:wo,routeLocale:o,routePath:n,routes:gn,siteData:on,siteLocaleData:r,frontmatter:d,head:h,headTitle:p,lang:m,page:u,site:on,siteLocale:r};return e.provide(dr,b),Object.defineProperties(e.config.globalProperties,{$pageFrontmatter:{get:()=>d.value},$pageHead:{get:()=>h.value},$pageHeadTitle:{get:()=>p.value},$pageLang:{get:()=>m.value},$pageData:{get:()=>u.value},$routeLocale:{get:()=>o.value},$withBase:{get:()=>ye},$frontmatter:{get:()=>d.value},$head:{get:()=>h.value},$headTitle:{get:()=>p.value},$lang:{get:()=>m.value},$page:{get:()=>u.value},$site:{get:()=>on.value},$siteLocale:{get:()=>r.value}}),b},K8=([e,t,i=""])=>{const n=Object.entries(t).map(([r,s])=>pe(s)?`[${r}=${JSON.stringify(s)}]`:s?`[${r}]`:"").join(""),l=`head > ${e}${n}`;return Array.from(document.querySelectorAll(l)).find(r=>r.innerText===i)??null},J8=([e,t,i])=>{if(!pe(e))return null;const n=document.createElement(e);return Lt(t)&&Object.entries(t).forEach(([l,a])=>{pe(a)?n.setAttribute(l,a):a&&n.setAttribute(l,"")}),pe(i)&&n.appendChild(document.createTextNode(i)),n},Q8=()=>{const e=W1(),t=Lu();let i=[];const n=()=>{e.value.forEach(o=>{const r=K8(o);r&&i.push(r)})},l=()=>{const o=[];return e.value.forEach(r=>{const s=J8(r);s&&o.push(s)}),o},a=()=>{document.documentElement.lang=t.value;const o=l();i.forEach((r,s)=>{const u=o.findIndex(d=>r.isEqualNode(d));u===-1?(r.remove(),delete i[s]):o.splice(u,1)}),o.forEach(r=>document.head.appendChild(r)),i=[...i.filter(r=>!!r),...o]};It(Q1,a),de(()=>{n(),ke(e,a,{immediate:!1})})},X8=Af,Z8=async()=>{const e=X8({name:"Vuepress",setup(){Q8();for(const l of $l)l.setup?.();const i=$l.flatMap(({rootComponents:l=[]})=>l.map(a=>c(a))),n=G1();return()=>[c(n.value),i]}}),t=W8();G8(e),Y8(e,t,$l);for(const i of $l)await i.enhance?.({app:e,router:t,siteData:on});return e.use(t),{app:e,router:t}};Z8().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{xs as $,Lt as A,I4 as B,C4 as C,jt as D,Tp as E,ee as F,de as G,ze as H,ba as I,Vt as J,b2 as K,L4 as L,pe as M,tl as N,T2 as O,C0 as P,ao as Q,Re as R,at as S,i5 as T,kt as U,we as V,Qi as W,t5 as X,e5 as Y,Uo as Z,R8 as _,n5 as a,Ce as a0,a5 as a1,xt as a2,tr as a3,qo as a4,k2 as a5,o5 as a6,y2 as a7,It as a8,f as a9,sn as b,P0 as c,Z8 as createVueApp,Xd as d,Me as e,l5 as f,D as g,ga as h,gt as i,ka as j,Hi as k,Q as l,E as m,c as n,Kd as o,re as p,ke as q,Pe as r,xp as s,Ln as t,Si as u,R4 as v,Bm as w,O4 as x,D4 as y,s5 as z};
