import{s as h,f as _,h as m,n as v}from"../chunks/scheduler.4eff0beb.js";import{S as x,i as $,r as b,u as P,v as w,d as H,t as L,w as M,g as c,s as T,h as f,x as p,c as C,a as i,f as u}from"../chunks/index.436c0c33.js";import{P as j,g as y,a as d}from"../chunks/post.c0d7a243.js";function S(l){let e,o="Hello, I am <em>Post Zero.</em>",n,s,t='<a href="https://helenawsu.github.io/blog-0/" rel="nofollow">https://helenawsu.github.io/blog-0/</a>';return{c(){e=c("p"),e.innerHTML=o,n=T(),s=c("p"),s.innerHTML=t},l(a){e=f(a,"P",{"data-svelte-h":!0}),p(e)!=="svelte-1brh48u"&&(e.innerHTML=o),n=C(a),s=f(a,"P",{"data-svelte-h":!0}),p(s)!=="svelte-ikrxjt"&&(s.innerHTML=t)},m(a,r){i(a,e,r),i(a,n,r),i(a,s,r)},p:v,d(a){a&&(u(e),u(n),u(s))}}}function Z(l){let e,o;const n=[l[0],g];let s={$$slots:{default:[S]},$$scope:{ctx:l}};for(let t=0;t<n.length;t+=1)s=_(s,n[t]);return e=new j({props:s}),{c(){b(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,a){w(e,t,a),o=!0},p(t,[a]){const r=a&1?y(n,[a&1&&d(t[0]),a&0&&d(g)]):{};a&2&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){o||(H(e.$$.fragment,t),o=!0)},o(t){L(e.$$.fragment,t),o=!1},d(t){M(e,t)}}}const g={title:"Post Zero",date:"2022-08-13",description:"https://helenawsu.github.io/blog-0/"};function k(l,e,o){return l.$$set=n=>{o(0,e=_(_({},e),m(n)))},e=m(e),[e]}class A extends x{constructor(e){super(),$(this,e,k,Z,h,{})}}export{A as component};
