if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const c=e=>i(e,t),u={module:{uri:t},exports:l,require:c};s[t]=Promise.all(r.map((e=>u[e]||c(e)))).then((e=>(n(...e),l)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"0e4cf582fd0b6af655dc42a3bc310a38"},{url:"service.html",revision:"1be0926b5381868883672d57192a50fc"},{url:"static/css/index.0e2de821.css",revision:null},{url:"static/css/service.a5614ede.css",revision:null},{url:"static/js/256.06362265.js",revision:null},{url:"static/js/index.c6264465.js",revision:null},{url:"static/js/runtime~index.f17e0d17.js",revision:null},{url:"static/js/runtime~service.97bb11f6.js",revision:null},{url:"static/js/service.ec398fe6.js",revision:null},{url:"static/media/service.9116b65479b279ed0988.png",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
