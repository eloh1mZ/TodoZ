(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/uiU":function(t,e,c){},"O/we":function(t,e,c){"use strict";c.r(e);var b=c("mg/X");const s=[];function n(t,e=b.v){let c;const n=[];function O(e){if(Object(b.C)(t,e)&&(t=e,c)){const e=!s.length;for(let e=0;e<n.length;e+=1){const c=n[e];c[1](),s.push(c,t)}if(e){for(let t=0;t<s.length;t+=2)s[t][0](s[t+1]);s.length=0}}}return{set:O,update:function(e){O(e(t))},subscribe:function(s,j=b.v){const l=[s,j];return n.push(l),1===n.length&&(c=e(O)||b.v),s(t),()=>{const t=n.indexOf(l);-1!==t&&n.splice(t,1),0===n.length&&(c(),c=null)}}}}const O=n(JSON.parse(localStorage.getItem("tasks"))||{});O.subscribe(t=>{localStorage.setItem("tasks",JSON.stringify(t))});let j={list:O,add:t=>{O.update(e=>(e[Date.now()]=t,e))},remove:t=>{O.update(e=>(delete e[t],e))},update:(t,e)=>{O.update(c=>(Object.keys(e).forEach(b=>{c[t][b]=e[b]}),c))}};var l=c("W6qR");c("e4h0");function a(t){let e,c,s,n,O,j,l;return{c(){e=Object(b.n)("form"),c=Object(b.n)("input"),s=Object(b.F)(),n=Object(b.n)("button"),O=Object(b.H)("Add"),this.h()},l(t){e=Object(b.g)(t,"FORM",{class:!0});var j=Object(b.e)(e);c=Object(b.g)(j,"INPUT",{type:!0,class:!0}),s=Object(b.h)(j),n=Object(b.g)(j,"BUTTON",{type:!0,class:!0});var l=Object(b.e)(n);O=Object(b.i)(l,"Add"),l.forEach(b.m),j.forEach(b.m),this.h()},h(){Object(b.c)(c,"type","text"),Object(b.c)(c,"class","field__input svelte-4oxzxn"),Object(b.c)(n,"type","submit"),Object(b.c)(n,"class","field__btn svelte-4oxzxn"),Object(b.c)(e,"class","field svelte-4oxzxn")},m(a,r){Object(b.r)(a,e,r),Object(b.b)(e,c),Object(b.E)(c,t[0]),Object(b.b)(e,s),Object(b.b)(e,n),Object(b.b)(n,O),j||(l=[Object(b.t)(c,"input",t[2]),Object(b.t)(e,"submit",Object(b.A)(t[1]))],j=!0)},p(t,[e]){1&e&&c.value!==t[0]&&Object(b.E)(c,t[0])},i:b.v,o:b.v,d(t){t&&Object(b.m)(e),j=!1,Object(b.B)(l)}}}function r(t,e,c){const b=Object(l.a)();let s="";return[s,function(t){s&&(b("submit",{value:s}),c(0,s=""))},function(){s=this.value,c(0,s)}]}class o extends b.a{constructor(t){super(),Object(b.q)(this,t,r,a,b.C,{})}}var i=o;c("kD+9");function u(t){let e,c,s,n,O,j;return O=new i({}),O.$on("submit",t[0]),{c(){e=Object(b.n)("div"),c=Object(b.n)("h1"),s=Object(b.H)("TodoZ"),n=Object(b.F)(),Object(b.k)(O.$$.fragment),this.h()},l(t){e=Object(b.g)(t,"DIV",{class:!0});var j=Object(b.e)(e);c=Object(b.g)(j,"H1",{class:!0});var l=Object(b.e)(c);s=Object(b.i)(l,"TodoZ"),l.forEach(b.m),n=Object(b.h)(j),Object(b.f)(O.$$.fragment,j),j.forEach(b.m),this.h()},h(){Object(b.c)(c,"class","greeting__title"),Object(b.c)(e,"class","greeting svelte-np6swo")},m(t,l){Object(b.r)(t,e,l),Object(b.b)(e,c),Object(b.b)(c,s),Object(b.b)(e,n),Object(b.u)(O,e,null),j=!0},p:b.v,i(t){j||(Object(b.I)(O.$$.fragment,t),j=!0)},o(t){Object(b.J)(O.$$.fragment,t),j=!1},d(t){t&&Object(b.m)(e),Object(b.l)(O)}}}function f(t){return[function(t){j.add({title:t.detail.value})}]}class h extends b.a{constructor(t){super(),Object(b.q)(this,t,f,u,b.C,{})}}var d=h;c("/uiU");function m(t){let e,c,s,n,O,l,a,r,o,i,u,f,h,d,m,g,k=t[0].title+"";return{c(){e=Object(b.n)("article"),c=Object(b.n)("label"),s=Object(b.H)(k),n=Object(b.F)(),O=Object(b.n)("div"),l=Object(b.n)("input"),a=Object(b.F)(),r=Object(b.n)("span"),o=Object(b.F)(),i=Object(b.n)("button"),u=Object(b.H)("Remove"),this.h()},l(t){e=Object(b.g)(t,"ARTICLE",{class:!0,style:!0});var j=Object(b.e)(e);c=Object(b.g)(j,"LABEL",{class:!0,for:!0});var f=Object(b.e)(c);s=Object(b.i)(f,k),f.forEach(b.m),n=Object(b.h)(j),O=Object(b.g)(j,"DIV",{class:!0});var h=Object(b.e)(O);l=Object(b.g)(h,"INPUT",{type:!0,id:!0,class:!0}),a=Object(b.h)(h),r=Object(b.g)(h,"SPAN",{class:!0}),Object(b.e)(r).forEach(b.m),h.forEach(b.m),o=Object(b.h)(j),i=Object(b.g)(j,"BUTTON",{class:!0,style:!0});var d=Object(b.e)(i);u=Object(b.i)(d,"Remove"),d.forEach(b.m),j.forEach(b.m),this.h()},h(){Object(b.c)(c,"class","task__title svelte-1xs759q"),Object(b.c)(c,"for",t[1]),Object(b.c)(l,"type","checkbox"),Object(b.c)(l,"id",t[1]),Object(b.c)(l,"class","checkbox__input visually-hidden"),Object(b.c)(r,"class","checkbox__body"),Object(b.c)(O,"class","checkbox svelte-1xs759q"),Object(b.c)(i,"class","task__btn task__btn--remove svelte-1xs759q"),Object(b.c)(i,"style",f=t[2]<0?`transform: scaleX(${t[4]/p});`:"transform: scaleX(0)"),Object(b.c)(e,"class",h=Object(b.w)("task"+(t[3]?" task--checked":""))+" svelte-1xs759q"),Object(b.c)(e,"style",d=`\n\t\t--x: ${t[2]}px;\n\t\t--optimal-delta: ${p}px;\n\t\t--transition: ${t[5]}s\n\t`)},m(f,h){Object(b.r)(f,e,h),Object(b.b)(e,c),Object(b.b)(c,s),Object(b.b)(e,n),Object(b.b)(e,O),Object(b.b)(O,l),l.checked=t[3],Object(b.b)(O,a),Object(b.b)(O,r),Object(b.b)(e,o),Object(b.b)(e,i),Object(b.b)(i,u),m||(g=[Object(b.t)(l,"change",t[10]),Object(b.t)(l,"change",t[6]),Object(b.t)(i,"click",(function(){Object(b.s)(j.remove(t[1]))&&j.remove(t[1]).apply(this,arguments)})),Object(b.t)(e,"pointermove",t[7]),Object(b.t)(e,"pointerdown",t[8]),Object(b.t)(e,"pointerup",t[9]),Object(b.t)(e,"pointerout",t[9])],m=!0)},p(n,[O]){t=n,1&O&&k!==(k=t[0].title+"")&&Object(b.D)(s,k),2&O&&Object(b.c)(c,"for",t[1]),2&O&&Object(b.c)(l,"id",t[1]),8&O&&(l.checked=t[3]),20&O&&f!==(f=t[2]<0?`transform: scaleX(${t[4]/p});`:"transform: scaleX(0)")&&Object(b.c)(i,"style",f),8&O&&h!==(h=Object(b.w)("task"+(t[3]?" task--checked":""))+" svelte-1xs759q")&&Object(b.c)(e,"class",h),36&O&&d!==(d=`\n\t\t--x: ${t[2]}px;\n\t\t--optimal-delta: ${p}px;\n\t\t--transition: ${t[5]}s\n\t`)&&Object(b.c)(e,"style",d)},i:b.v,o:b.v,d(t){t&&Object(b.m)(e),m=!1,Object(b.B)(g)}}}let p=100;function g(t,e,c){let{task:b}=e,{id:s}=e,n=b.checked;let O=0,l=0,a=0,r=0,o=!1;return t.$$set=t=>{"task"in t&&c(0,b=t.task),"id"in t&&c(1,s=t.id)},t.$$.update=()=>{4&t.$$.dirty&&c(4,l=Math.abs(O))},[b,s,O,n,l,a,function(){c(0,b.checked=!!n&&(t=>{let e=new Date(t);return`${e.getFullYear()}/${e.getMonth()}/${e.getDay()}`})(Date.now()),b),j.update(s,b)},function(t){o&&(l>125||(c(2,O+=t.offsetX-r),O>0&&c(2,O=0),l>125&&c(2,O=O/l*125)))},function(t){o=!0,r=t.offsetX,c(5,a=0)},function(t){o=!1,c(2,O=l<.6*p?0:O/l*p),c(5,a=.25)},function(){n=this.checked,c(3,n)}]}class k extends b.a{constructor(t){super(),Object(b.q)(this,t,g,m,b.C,{task:0,id:1})}}var v=k;c("xT4x");function $(t,e,c){const b=t.slice();return b[3]=e[c],b}function x(t,e){let c,s,n,O,j;return s=new v({props:{task:e[0][e[3]],id:e[3]}}),{key:t,first:null,c(){c=Object(b.n)("li"),Object(b.k)(s.$$.fragment),n=Object(b.F)(),this.h()},l(t){c=Object(b.g)(t,"LI",{class:!0});var e=Object(b.e)(c);Object(b.f)(s.$$.fragment,e),n=Object(b.h)(e),e.forEach(b.m),this.h()},h(){Object(b.c)(c,"class",O=Object(b.w)("tasks__item"+(e[1][e[3]]?" tasks__item--checked":""))+" svelte-15k2s7n"),this.first=c},m(t,e){Object(b.r)(t,c,e),Object(b.u)(s,c,null),Object(b.b)(c,n),j=!0},p(t,n){e=t;const l={};1&n&&(l.task=e[0][e[3]]),1&n&&(l.id=e[3]),s.$set(l),(!j||3&n&&O!==(O=Object(b.w)("tasks__item"+(e[1][e[3]]?" tasks__item--checked":""))+" svelte-15k2s7n"))&&Object(b.c)(c,"class",O)},i(t){j||(Object(b.I)(s.$$.fragment,t),j=!0)},o(t){Object(b.J)(s.$$.fragment,t),j=!1},d(t){t&&Object(b.m)(c),Object(b.l)(s)}}}function _(t){let e,c,s=[],n=new Map,O=Object.keys(t[0]);const j=t=>t[3];for(let e=0;e<O.length;e+=1){let c=$(t,O,e),b=j(c);n.set(b,s[e]=x(b,c))}return{c(){e=Object(b.n)("ul");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=Object(b.g)(t,"UL",{class:!0});var c=Object(b.e)(e);for(let t=0;t<s.length;t+=1)s[t].l(c);c.forEach(b.m),this.h()},h(){Object(b.c)(e,"class","tasks__list svelte-15k2s7n")},m(t,n){Object(b.r)(t,e,n);for(let t=0;t<s.length;t+=1)s[t].m(e,null);c=!0},p(t,[c]){3&c&&(O=Object.keys(t[0]),Object(b.p)(),s=Object(b.K)(s,c,j,1,t,O,n,e,b.z,x,null,$),Object(b.d)())},i(t){if(!c){for(let t=0;t<O.length;t+=1)Object(b.I)(s[t]);c=!0}},o(t){for(let t=0;t<s.length;t+=1)Object(b.J)(s[t]);c=!1},d(t){t&&Object(b.m)(e);for(let t=0;t<s.length;t+=1)s[t].d()}}}function y(t,e,c){let b={},s=j.list.subscribe(t=>{c(0,b=t)}),n={};return Object.keys(b).forEach(t=>{c(1,n[t]=b[t].checked,n)}),Object(l.b)(()=>{s()}),[b,n]}class w extends b.a{constructor(t){super(),Object(b.q)(this,t,y,_,b.C,{})}}var E=w;function I(t){let e,c,s,n;return e=new d({}),s=new E({}),{c(){Object(b.k)(e.$$.fragment),c=Object(b.F)(),Object(b.k)(s.$$.fragment)},l(t){Object(b.f)(e.$$.fragment,t),c=Object(b.h)(t),Object(b.f)(s.$$.fragment,t)},m(t,O){Object(b.u)(e,t,O),Object(b.r)(t,c,O),Object(b.u)(s,t,O),n=!0},p:b.v,i(t){n||(Object(b.I)(e.$$.fragment,t),Object(b.I)(s.$$.fragment,t),n=!0)},o(t){Object(b.J)(e.$$.fragment,t),Object(b.J)(s.$$.fragment,t),n=!1},d(t){Object(b.l)(e,t),t&&Object(b.m)(c),Object(b.l)(s,t)}}}class q extends b.a{constructor(t){super(),Object(b.q)(this,t,null,I,b.C,{})}}e.default=q},e4h0:function(t,e,c){},"kD+9":function(t,e,c){},xT4x:function(t,e,c){}}]);
//# sourceMappingURL=1.chunk.62f9aa24.js.map