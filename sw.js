if(!self.define){let e,c={};const n=(n,f)=>(n=new URL(n+".js",f).href,c[n]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=c,document.head.appendChild(e)}else e=n,importScripts(n),c()})).then((()=>{let e=c[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(f,i)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(c[s])return;let r={};const a=e=>n(e,s),o={module:{uri:s},exports:r,require:a};c[s]=Promise.all(f.map((e=>o[e]||a(e)))).then((e=>(i(...e),r)))}}define(["./workbox-4aa34959"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"bc937f5b979c1a1fbe7addf04505f46b"},{url:"apple-touch-icon-180x180.png",revision:"9d57ab38ff54e83b1f84c369f96bdba1"},{url:"favicon.ico",revision:"f2413d192135c1f5194f5e7016a8a4d0"},{url:"index.html",revision:"69cab06195364baca9ff90d64ae6d20c"},{url:"maskable-icon-512x512.png",revision:"833fff5b4eec6c465ab04ccd3f704220"},{url:"pwa-192x192.png",revision:"befb82638ebfb5c672ec7f706c36f760"},{url:"pwa-512x512.png",revision:"65d2283264dbc6fc7c46ed485302b02b"},{url:"pwa-64x64.png",revision:"349705ff2e4cfb54bb5f9959fac93091"},{url:"registerSW.js",revision:"e27b9ab3ec078907ee600c5bc9597dfc"},{url:"favicon.ico",revision:"f2413d192135c1f5194f5e7016a8a4d0"},{url:"pwa-64x64.png",revision:"349705ff2e4cfb54bb5f9959fac93091"},{url:"pwa-192x192.png",revision:"befb82638ebfb5c672ec7f706c36f760"},{url:"pwa-512x512.png",revision:"65d2283264dbc6fc7c46ed485302b02b"},{url:"maskable-icon-512x512.png",revision:"833fff5b4eec6c465ab04ccd3f704220"},{url:"manifest.webmanifest",revision:"f4248ddff6e0e175db8cdcff043ed6c4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({url:e})=>e.origin===self.location.origin&&/\.(png|jpg|jpeg|gif|svg)$/.test(e.pathname)),new e.CacheFirst({cacheName:"local-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:5184e3})]}),"GET"),e.registerRoute(/\/assets\/react-.*\.js$/,new e.CacheFirst({cacheName:"react-chunks",plugins:[new e.ExpirationPlugin({maxAgeSeconds:5184e3})]}),"GET"),e.registerRoute(/\/assets\/react_query-.*\.js$/,new e.CacheFirst({cacheName:"react-query-chunks",plugins:[new e.ExpirationPlugin({maxAgeSeconds:5184e3})]}),"GET")}));
