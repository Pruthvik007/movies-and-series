import{r,j as t}from"./index-Ac_zv6rf.js";import{M as l}from"./MediaSelector-ng0G0DNN.js";import{u as c,M as d}from"./MediaList-aDQ_0sjM.js";const n=()=>{const[s,a]=r.useState("movies"),{watchList:o}=c(),e=o[s],i=e.length===0;return t.jsxs("div",{className:"p-5 rounded-xl space-y-5 flex flex-col",children:[t.jsx(l,{mediaType:s,setMediaType:a}),t.jsx("div",{className:"rounded-xl flex flex-wrap bg-neutral gap-5 justify-start p-3",children:i?t.jsxs("p",{className:"text-xl font-bold text-yellow-500 mx-auto",children:["No ",s.charAt(0).toUpperCase()+s.slice(1)," Added To Watchlist!"]}):t.jsx(d,{mediaType:s,mediaList:e})})]})};export{n as default};
