import{r as c,j as t}from"./index-CLN04q1F.js";import{M as l}from"./MediaSelector-BFfOpvZ1.js";import{u as r,M as d}from"./MediaList-3IQR5rkF.js";const n=()=>{const[s,a]=c.useState("movies"),{watchList:o}=r(),e=o[s],i=e.length===0;return t.jsxs("div",{className:"p-5 rounded-xl space-y-5 flex flex-col",children:[t.jsx(l,{className:"mx-auto",mediaType:s,setMediaType:a}),i?t.jsxs("p",{className:"text-xl font-bold text-yellow-500 mx-auto",children:["No ",s.charAt(0).toUpperCase()+s.slice(1)," Added To Watchlist!"]}):t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 p-3 gap-3 bg-base-100 max-w-fit rounded-xl mx-auto",children:t.jsx(d,{mediaType:s,mediaList:e})})]})};export{n as default};
