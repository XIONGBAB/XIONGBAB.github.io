if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const l=e=>i(e,n),o={module:{uri:n},exports:c,require:l};s[n]=Promise.all(r.map((e=>o[e]||l(e)))).then((e=>(t(...e),c)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"187f17458c93ce7e887c70c184ff212a"},{url:"service.html",revision:"42b220113127c606fc0ac209b0b1b5ce"},{url:"static/css/index.0e2de821.css",revision:null},{url:"static/css/service.d3155dff.css",revision:null},{url:"static/js/256.06362265.js",revision:null},{url:"static/js/index.464b297d.js",revision:null},{url:"static/js/runtime~index.f17e0d17.js",revision:null},{url:"static/js/runtime~service.97bb11f6.js",revision:null},{url:"static/js/service.ec398fe6.js",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
