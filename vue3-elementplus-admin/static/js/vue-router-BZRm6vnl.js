import{s as ee,C as D,u as K,ah as ne,n as re,d as Ot,L as oe,A as M,aa as Ct,G as it,r as ae,w as se}from"./@vue-B-Waonw5.js";/*!
* vue-router v4.3.0
* (c) 2024 Eduardo San Martin Morote
* @license MIT
*/const U=typeof document<"u";function ce(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const k=Object.assign;function ut(t,e){const n={};for(const r in e){const o=e[r];n[r]=q(o)?o.map(t):t(o)}return n}const Q=()=>{},q=Array.isArray,Pt=/#/g,le=/&/g,ie=/\//g,ue=/=/g,fe=/\?/g,$t=/\+/g,pe=/%5B/g,he=/%5D/g,jt=/%5E/g,de=/%60/g,At=/%7B/g,me=/%7C/g,St=/%7D/g,ge=/%20/g;function ft(t){return encodeURI(""+t).replace(me,"|").replace(pe,"[").replace(he,"]")}function ve(t){return ft(t).replace(At,"{").replace(St,"}").replace(jt,"^")}function pt(t){return ft(t).replace($t,"%2B").replace(ge,"+").replace(Pt,"%23").replace(le,"%26").replace(de,"`").replace(At,"{").replace(St,"}").replace(jt,"^")}function ye(t){return pt(t).replace(ue,"%3D")}function be(t){return ft(t).replace(Pt,"%23").replace(fe,"%3F")}function we(t){return t==null?"":be(t).replace(ie,"%2F")}function X(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ee=/\/$/,Re=t=>t.replace(Ee,"");function ht(t,e,n="/"){let r,o={},p="",h="";const m=e.indexOf("#");let l=e.indexOf("?");return m<l&&m>=0&&(l=-1),l>-1&&(r=e.slice(0,l),p=e.slice(l+1,m>-1?m:e.length),o=t(p)),m>-1&&(r=r||e.slice(0,m),h=e.slice(m,e.length)),r=Pe(r??e,n),{fullPath:r+(p&&"?")+p+h,path:r,query:o,hash:X(h)}}function ke(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function xt(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Oe(t,e,n){const r=e.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&F(e.matched[r],n.matched[o])&&qt(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function F(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qt(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ce(t[n],e[n]))return!1;return!0}function Ce(t,e){return q(t)?Mt(t,e):q(e)?Mt(e,t):t===e}function Mt(t,e){return q(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Pe(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let p=n.length-1,h,m;for(h=0;h<r.length;h++)if(m=r[h],m!==".")if(m==="..")p>1&&p--;else break;return n.slice(0,p).join("/")+"/"+r.slice(h).join("/")}var Y;(function(t){t.pop="pop",t.push="push"})(Y||(Y={}));var N;(function(t){t.back="back",t.forward="forward",t.unknown=""})(N||(N={}));function $e(t){if(!t)if(U){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Re(t)}const je=/^[^#]+#/;function Ae(t,e){return t.replace(je,"#")+e}function Se(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const et=()=>({left:window.scrollX,top:window.scrollY});function xe(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;e=Se(o,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Lt(t,e){return(history.state?history.state.position-e:-1)+t}const dt=new Map;function qe(t,e){dt.set(t,e)}function Me(t){const e=dt.get(t);return dt.delete(t),e}let Le=()=>location.protocol+"//"+location.host;function _t(t,e){const{pathname:n,search:r,hash:o}=e,p=t.indexOf("#");if(p>-1){let h=o.includes(t.slice(p))?t.slice(p).length:1,m=o.slice(h);return m[0]!=="/"&&(m="/"+m),xt(m,"")}return xt(n,t)+r+o}function _e(t,e,n,r){let o=[],p=[],h=null;const m=({state:c})=>{const g=_t(t,location),b=n.value,C=e.value;let P=0;if(c){if(n.value=g,e.value=c,h&&h===b){h=null;return}P=C?c.position-C.position:0}else r(g);o.forEach(R=>{R(n.value,b,{delta:P,type:Y.pop,direction:P?P>0?N.forward:N.back:N.unknown})})};function l(){h=n.value}function u(c){o.push(c);const g=()=>{const b=o.indexOf(c);b>-1&&o.splice(b,1)};return p.push(g),g}function a(){const{history:c}=window;c.state&&c.replaceState(k({},c.state,{scroll:et()}),"")}function i(){for(const c of p)c();p=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",a)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",a,{passive:!0}),{pauseListeners:l,listen:u,destroy:i}}function Bt(t,e,n,r=!1,o=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:o?et():null}}function Be(t){const{history:e,location:n}=window,r={value:_t(t,n)},o={value:e.state};o.value||p(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function p(l,u,a){const i=t.indexOf("#"),c=i>-1?(n.host&&document.querySelector("base")?t:t.slice(i))+l:Le()+t+l;try{e[a?"replaceState":"pushState"](u,"",c),o.value=u}catch(g){console.error(g),n[a?"replace":"assign"](c)}}function h(l,u){const a=k({},e.state,Bt(o.value.back,l,o.value.forward,!0),u,{position:o.value.position});p(l,a,!0),r.value=l}function m(l,u){const a=k({},o.value,e.state,{forward:l,scroll:et()});p(a.current,a,!0);const i=k({},Bt(r.value,l,null),{position:a.position+1},u);p(l,i,!1),r.value=l}return{location:r,state:o,push:m,replace:h}}function Ge(t){t=$e(t);const e=Be(t),n=_e(t,e.state,e.location,e.replace);function r(p,h=!0){h||n.pauseListeners(),history.go(p)}const o=k({location:"",base:t,go:r,createHref:Ae.bind(null,t)},e,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>e.state.value}),o}function Ie(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Ge(t)}function De(t){return typeof t=="string"||t&&typeof t=="object"}function Gt(t){return typeof t=="string"||typeof t=="symbol"}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},It=Symbol("");var Dt;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Dt||(Dt={}));function T(t,e){return k(new Error,{type:t,[It]:!0},e)}function _(t,e){return t instanceof Error&&It in t&&(e==null||!!(t.type&e))}const Wt="[^/]+?",We={sensitive:!1,strict:!1,start:!0,end:!0},Ue=/[.+*?^${}()[\]/\\]/g;function Fe(t,e){const n=k({},We,e),r=[];let o=n.start?"^":"";const p=[];for(const u of t){const a=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let i=0;i<u.length;i++){const c=u[i];let g=40+(n.sensitive?.25:0);if(c.type===0)i||(o+="/"),o+=c.value.replace(Ue,"\\$&"),g+=40;else if(c.type===1){const{value:b,repeatable:C,optional:P,regexp:R}=c;p.push({name:b,repeatable:C,optional:P});const w=R||Wt;if(w!==Wt){g+=10;try{new RegExp(`(${w})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${b}" (${w}): `+x.message)}}let A=C?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;i||(A=P&&u.length<2?`(?:/${A})`:"/"+A),P&&(A+="?"),o+=A,g+=20,P&&(g+=-8),C&&(g+=-20),w===".*"&&(g+=-50)}a.push(g)}r.push(a)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const h=new RegExp(o,n.sensitive?"":"i");function m(u){const a=u.match(h),i={};if(!a)return null;for(let c=1;c<a.length;c++){const g=a[c]||"",b=p[c-1];i[b.name]=g&&b.repeatable?g.split("/"):g}return i}function l(u){let a="",i=!1;for(const c of t){(!i||!a.endsWith("/"))&&(a+="/"),i=!1;for(const g of c)if(g.type===0)a+=g.value;else if(g.type===1){const{value:b,repeatable:C,optional:P}=g,R=b in u?u[b]:"";if(q(R)&&!C)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const w=q(R)?R.join("/"):R;if(!w)if(P)c.length<2&&(a.endsWith("/")?a=a.slice(0,-1):i=!0);else throw new Error(`Missing required param "${b}"`);a+=w}}return a||"/"}return{re:h,score:r,keys:p,parse:m,stringify:l}}function Te(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function He(t,e){let n=0;const r=t.score,o=e.score;for(;n<r.length&&n<o.length;){const p=Te(r[n],o[n]);if(p)return p;n++}if(Math.abs(o.length-r.length)===1){if(Ut(r))return 1;if(Ut(o))return-1}return o.length-r.length}function Ut(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ve={type:0,value:""},ze=/[a-zA-Z0-9_]/;function Ke(t){if(!t)return[[]];if(t==="/")return[[Ve]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const o=[];let p;function h(){p&&o.push(p),p=[]}let m=0,l,u="",a="";function i(){u&&(n===0?p.push({type:0,value:u}):n===1||n===2||n===3?(p.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),p.push({type:1,value:u,regexp:a,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function c(){u+=l}for(;m<t.length;){if(l=t[m++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&i(),h()):l===":"?(i(),n=1):c();break;case 4:c(),n=r;break;case 1:l==="("?n=2:ze.test(l)?c():(i(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&m--);break;case 2:l===")"?a[a.length-1]=="\\"?a=a.slice(0,-1)+l:n=3:a+=l;break;case 3:i(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&m--,a="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),i(),h(),o}function Qe(t,e,n){const r=Fe(Ke(t.path),n),o=k(r,{record:t,parent:e,children:[],alias:[]});return e&&!o.record.aliasOf==!e.record.aliasOf&&e.children.push(o),o}function Xe(t,e){const n=[],r=new Map;e=Ht({strict:!1,end:!0,sensitive:!1},e);function o(a){return r.get(a)}function p(a,i,c){const g=!c,b=Ye(a);b.aliasOf=c&&c.record;const C=Ht(e,a),P=[b];if("alias"in a){const A=typeof a.alias=="string"?[a.alias]:a.alias;for(const x of A)P.push(k({},b,{components:c?c.record.components:b.components,path:x,aliasOf:c?c.record:b}))}let R,w;for(const A of P){const{path:x}=A;if(i&&x[0]!=="/"){const I=i.record.path,L=I[I.length-1]==="/"?"":"/";A.path=i.record.path+(x&&L+x)}if(R=Qe(A,i,C),c?c.alias.push(R):(w=w||R,w!==R&&w.alias.push(R),g&&a.name&&!Tt(R)&&h(a.name)),b.children){const I=b.children;for(let L=0;L<I.length;L++)p(I[L],R,c&&c.children[L])}c=c||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&l(R)}return w?()=>{h(w)}:Q}function h(a){if(Gt(a)){const i=r.get(a);i&&(r.delete(a),n.splice(n.indexOf(i),1),i.children.forEach(h),i.alias.forEach(h))}else{const i=n.indexOf(a);i>-1&&(n.splice(i,1),a.record.name&&r.delete(a.record.name),a.children.forEach(h),a.alias.forEach(h))}}function m(){return n}function l(a){let i=0;for(;i<n.length&&He(a,n[i])>=0&&(a.record.path!==n[i].record.path||!Vt(a,n[i]));)i++;n.splice(i,0,a),a.record.name&&!Tt(a)&&r.set(a.record.name,a)}function u(a,i){let c,g={},b,C;if("name"in a&&a.name){if(c=r.get(a.name),!c)throw T(1,{location:a});C=c.record.name,g=k(Ft(i.params,c.keys.filter(w=>!w.optional).concat(c.parent?c.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),a.params&&Ft(a.params,c.keys.map(w=>w.name))),b=c.stringify(g)}else if(a.path!=null)b=a.path,c=n.find(w=>w.re.test(b)),c&&(g=c.parse(b),C=c.record.name);else{if(c=i.name?r.get(i.name):n.find(w=>w.re.test(i.path)),!c)throw T(1,{location:a,currentLocation:i});C=c.record.name,g=k({},i.params,a.params),b=c.stringify(g)}const P=[];let R=c;for(;R;)P.unshift(R.record),R=R.parent;return{name:C,path:b,params:g,matched:P,meta:Ze(P)}}return t.forEach(a=>p(a)),{addRoute:p,resolve:u,removeRoute:h,getRoutes:m,getRecordMatcher:o}}function Ft(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ye(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ne(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ne(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Tt(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ze(t){return t.reduce((e,n)=>k(e,n.meta),{})}function Ht(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Vt(t,e){return e.children.some(n=>n===t||Vt(t,n))}function Je(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const o=n[r].replace($t," "),p=o.indexOf("="),h=X(p<0?o:o.slice(0,p)),m=p<0?null:X(o.slice(p+1));if(h in e){let l=e[h];q(l)||(l=e[h]=[l]),l.push(m)}else e[h]=m}return e}function zt(t){let e="";for(let n in t){const r=t[n];if(n=ye(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(q(r)?r.map(o=>o&&pt(o)):[r&&pt(r)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function tn(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=q(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return e}const en=Symbol(""),Kt=Symbol(""),nt=Symbol(""),mt=Symbol(""),gt=Symbol("");function Z(){let t=[];function e(r){return t.push(r),()=>{const o=t.indexOf(r);o>-1&&t.splice(o,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function G(t,e,n,r,o,p=h=>h()){const h=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((m,l)=>{const u=c=>{c===!1?l(T(4,{from:n,to:e})):c instanceof Error?l(c):De(c)?l(T(2,{from:e,to:c})):(h&&r.enterCallbacks[o]===h&&typeof c=="function"&&h.push(c),m())},a=p(()=>t.call(r&&r.instances[o],e,n,u));let i=Promise.resolve(a);t.length<3&&(i=i.then(u)),i.catch(c=>l(c))})}function vt(t,e,n,r,o=p=>p()){const p=[];for(const h of t)for(const m in h.components){let l=h.components[m];if(!(e!=="beforeRouteEnter"&&!h.instances[m]))if(nn(l)){const u=(l.__vccOpts||l)[e];u&&p.push(G(u,n,r,h,m,o))}else{let u=l();p.push(()=>u.then(a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${m}" at "${h.path}"`));const i=ce(a)?a.default:a;h.components[m]=i;const c=(i.__vccOpts||i)[e];return c&&G(c,n,r,h,m,o)()}))}}return p}function nn(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qt(t){const e=D(nt),n=D(mt),r=M(()=>e.resolve(K(t.to))),o=M(()=>{const{matched:l}=r.value,{length:u}=l,a=l[u-1],i=n.matched;if(!a||!i.length)return-1;const c=i.findIndex(F.bind(null,a));if(c>-1)return c;const g=Xt(l[u-2]);return u>1&&Xt(a)===g&&i[i.length-1].path!==g?i.findIndex(F.bind(null,l[u-2])):c}),p=M(()=>o.value>-1&&sn(n.params,r.value.params)),h=M(()=>o.value>-1&&o.value===n.matched.length-1&&qt(n.params,r.value.params));function m(l={}){return an(l)?e[K(t.replace)?"replace":"push"](K(t.to)).catch(Q):Promise.resolve()}return{route:r,href:M(()=>r.value.href),isActive:p,isExactActive:h,navigate:m}}const rn=Ot({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qt,setup(t,{slots:e}){const n=oe(Qt(t)),{options:r}=D(nt),o=M(()=>({[Yt(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Yt(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const p=e.default&&e.default(n);return t.custom?p:Ct("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},p)}}}),on=rn;function an(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sn(t,e){for(const n in e){const r=e[n],o=t[n];if(typeof r=="string"){if(r!==o)return!1}else if(!q(o)||o.length!==r.length||r.some((p,h)=>p!==o[h]))return!1}return!0}function Xt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yt=(t,e,n)=>t??e??n,cn=Ot({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=D(gt),o=M(()=>t.route||r.value),p=D(Kt,0),h=M(()=>{let u=K(p);const{matched:a}=o.value;let i;for(;(i=a[u])&&!i.components;)u++;return u}),m=M(()=>o.value.matched[h.value]);it(Kt,M(()=>h.value+1)),it(en,m),it(gt,o);const l=ae();return se(()=>[l.value,m.value,t.name],([u,a,i],[c,g,b])=>{a&&(a.instances[i]=u,g&&g!==a&&u&&u===c&&(a.leaveGuards.size||(a.leaveGuards=g.leaveGuards),a.updateGuards.size||(a.updateGuards=g.updateGuards))),u&&a&&(!g||!F(a,g)||!c)&&(a.enterCallbacks[i]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=o.value,a=t.name,i=m.value,c=i&&i.components[a];if(!c)return Nt(n.default,{Component:c,route:u});const g=i.props[a],b=g?g===!0?u.params:typeof g=="function"?g(u):g:null,C=Ct(c,k({},b,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(i.instances[a]=null)},ref:l}));return Nt(n.default,{Component:C,route:u})||C}}});function Nt(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ln=cn;function un(t){const e=Xe(t.routes,t),n=t.parseQuery||Je,r=t.stringifyQuery||zt,o=t.history,p=Z(),h=Z(),m=Z(),l=ee(B);let u=B;U&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const a=ut.bind(null,s=>""+s),i=ut.bind(null,we),c=ut.bind(null,X);function g(s,d){let f,v;return Gt(s)?(f=e.getRecordMatcher(s),v=d):v=s,e.addRoute(v,f)}function b(s){const d=e.getRecordMatcher(s);d&&e.removeRoute(d)}function C(){return e.getRoutes().map(s=>s.record)}function P(s){return!!e.getRecordMatcher(s)}function R(s,d){if(d=k({},d||l.value),typeof s=="string"){const y=ht(n,s,d.path),j=e.resolve({path:y.path},d),z=o.createHref(y.fullPath);return k(y,j,{params:c(j.params),hash:X(y.hash),redirectedFrom:void 0,href:z})}let f;if(s.path!=null)f=k({},s,{path:ht(n,s.path,d.path).path});else{const y=k({},s.params);for(const j in y)y[j]==null&&delete y[j];f=k({},s,{params:i(y)}),d.params=i(d.params)}const v=e.resolve(f,d),O=s.hash||"";v.params=a(c(v.params));const $=ke(r,k({},s,{hash:ve(O),path:v.path})),E=o.createHref($);return k({fullPath:$,hash:O,query:r===zt?tn(s.query):s.query||{}},v,{redirectedFrom:void 0,href:E})}function w(s){return typeof s=="string"?ht(n,s,l.value.path):k({},s)}function A(s,d){if(u!==s)return T(8,{from:d,to:s})}function x(s){return H(s)}function I(s){return x(k(w(s),{replace:!0}))}function L(s){const d=s.matched[s.matched.length-1];if(d&&d.redirect){const{redirect:f}=d;let v=typeof f=="function"?f(s):f;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=w(v):{path:v},v.params={}),k({query:s.query,hash:s.hash,params:v.path!=null?{}:s.params},v)}}function H(s,d){const f=u=R(s),v=l.value,O=s.state,$=s.force,E=s.replace===!0,y=L(f);if(y)return H(k(w(y),{state:typeof y=="object"?k({},O,y.state):O,force:$,replace:E}),d||f);const j=f;j.redirectedFrom=d;let z;return!$&&Oe(r,v,f)&&(z=T(16,{to:j,from:v}),Rt(v,v,!0,!1)),(z?Promise.resolve(z):yt(j,v)).catch(S=>_(S)?_(S,2)?S:st(S):at(S,j,v)).then(S=>{if(S){if(_(S,2))return H(k({replace:E},w(S.to),{state:typeof S.to=="object"?k({},O,S.to.state):O,force:$}),d||j)}else S=wt(j,v,!0,E,O);return bt(j,v,S),S})}function Zt(s,d){const f=A(s,d);return f?Promise.reject(f):Promise.resolve()}function rt(s){const d=tt.values().next().value;return d&&typeof d.runWithContext=="function"?d.runWithContext(s):s()}function yt(s,d){let f;const[v,O,$]=fn(s,d);f=vt(v.reverse(),"beforeRouteLeave",s,d);for(const y of v)y.leaveGuards.forEach(j=>{f.push(G(j,s,d))});const E=Zt.bind(null,s,d);return f.push(E),W(f).then(()=>{f=[];for(const y of p.list())f.push(G(y,s,d));return f.push(E),W(f)}).then(()=>{f=vt(O,"beforeRouteUpdate",s,d);for(const y of O)y.updateGuards.forEach(j=>{f.push(G(j,s,d))});return f.push(E),W(f)}).then(()=>{f=[];for(const y of $)if(y.beforeEnter)if(q(y.beforeEnter))for(const j of y.beforeEnter)f.push(G(j,s,d));else f.push(G(y.beforeEnter,s,d));return f.push(E),W(f)}).then(()=>(s.matched.forEach(y=>y.enterCallbacks={}),f=vt($,"beforeRouteEnter",s,d,rt),f.push(E),W(f))).then(()=>{f=[];for(const y of h.list())f.push(G(y,s,d));return f.push(E),W(f)}).catch(y=>_(y,8)?y:Promise.reject(y))}function bt(s,d,f){m.list().forEach(v=>rt(()=>v(s,d,f)))}function wt(s,d,f,v,O){const $=A(s,d);if($)return $;const E=d===B,y=U?history.state:{};f&&(v||E?o.replace(s.fullPath,k({scroll:E&&y&&y.scroll},O)):o.push(s.fullPath,O)),l.value=s,Rt(s,d,f,E),st()}let V;function Jt(){V||(V=o.listen((s,d,f)=>{if(!kt.listening)return;const v=R(s),O=L(v);if(O){H(k(O,{replace:!0}),v).catch(Q);return}u=v;const $=l.value;U&&qe(Lt($.fullPath,f.delta),et()),yt(v,$).catch(E=>_(E,12)?E:_(E,2)?(H(E.to,v).then(y=>{_(y,20)&&!f.delta&&f.type===Y.pop&&o.go(-1,!1)}).catch(Q),Promise.reject()):(f.delta&&o.go(-f.delta,!1),at(E,v,$))).then(E=>{E=E||wt(v,$,!1),E&&(f.delta&&!_(E,8)?o.go(-f.delta,!1):f.type===Y.pop&&_(E,20)&&o.go(-1,!1)),bt(v,$,E)}).catch(Q)}))}let ot=Z(),Et=Z(),J;function at(s,d,f){st(s);const v=Et.list();return v.length?v.forEach(O=>O(s,d,f)):console.error(s),Promise.reject(s)}function te(){return J&&l.value!==B?Promise.resolve():new Promise((s,d)=>{ot.add([s,d])})}function st(s){return J||(J=!s,Jt(),ot.list().forEach(([d,f])=>s?f(s):d()),ot.reset()),s}function Rt(s,d,f,v){const{scrollBehavior:O}=t;if(!U||!O)return Promise.resolve();const $=!f&&Me(Lt(s.fullPath,0))||(v||!f)&&history.state&&history.state.scroll||null;return re().then(()=>O(s,d,$)).then(E=>E&&xe(E)).catch(E=>at(E,s,d))}const ct=s=>o.go(s);let lt;const tt=new Set,kt={currentRoute:l,listening:!0,addRoute:g,removeRoute:b,hasRoute:P,getRoutes:C,resolve:R,options:t,push:x,replace:I,go:ct,back:()=>ct(-1),forward:()=>ct(1),beforeEach:p.add,beforeResolve:h.add,afterEach:m.add,onError:Et.add,isReady:te,install(s){const d=this;s.component("RouterLink",on),s.component("RouterView",ln),s.config.globalProperties.$router=d,Object.defineProperty(s.config.globalProperties,"$route",{enumerable:!0,get:()=>K(l)}),U&&!lt&&l.value===B&&(lt=!0,x(o.location).catch(O=>{}));const f={};for(const O in B)Object.defineProperty(f,O,{get:()=>l.value[O],enumerable:!0});s.provide(nt,d),s.provide(mt,ne(f)),s.provide(gt,l);const v=s.unmount;tt.add(s),s.unmount=function(){tt.delete(s),tt.size<1&&(u=B,V&&V(),V=null,l.value=B,lt=!1,J=!1),v()}}};function W(s){return s.reduce((d,f)=>d.then(()=>rt(f)),Promise.resolve())}return kt}function fn(t,e){const n=[],r=[],o=[],p=Math.max(e.matched.length,t.matched.length);for(let h=0;h<p;h++){const m=e.matched[h];m&&(t.matched.find(u=>F(u,m))?r.push(m):n.push(m));const l=t.matched[h];l&&(e.matched.find(u=>F(u,l))||o.push(l))}return[n,r,o]}function pn(){return D(nt)}function hn(){return D(mt)}export{Ie as a,hn as b,un as c,pn as u};
