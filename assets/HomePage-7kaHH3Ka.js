import{u as c,r as m,j as e,C as l}from"./index-6XiZI6HP.js";import{f as d}from"./TmdbQueries-_Vd8cdMr.js";import{M as x}from"./MediaList-GM15O1Pa.js";import{M as p}from"./MediaSelector-hJpuhg1X.js";const s=({category:a})=>{const r=c(),[t,n]=m.useState("movies"),{isLoading:o,data:i}=d(t,a);return e.jsxs("div",{className:"flex flex-col gap-3 p-3 bg-neutral rounded-xl",children:[e.jsxs("div",{className:"w-full flex place-content-between items-center",children:[e.jsxs("div",{className:"flex gap-4  items-center",children:[e.jsx("p",{className:"text-md lg:text-lg font-bold text",children:l.CATEGORIES[a]}),e.jsx(p,{mediaType:t,setMediaType:n})]}),e.jsx("button",{onClick:()=>r(`${l.ENV.BASE_URL}/media/${t}/${a}`),className:"btn btn-active btn-primary btn-sm md:btn-sm lg:btn-md",children:"View More"})]}),e.jsx("div",{className:"flex gap-3 scrollbar-hidden",children:e.jsx(x,{mediaList:i==null?void 0:i.results,mediaType:t,isLoading:o})})]})},b=()=>e.jsxs("div",{className:"flex flex-col gap-3 p-3",children:[e.jsx(s,{category:"trending"}),e.jsx(s,{category:"now_playing"}),e.jsx(s,{category:"popular"}),e.jsx(s,{category:"top_rated"}),e.jsx(s,{category:"upcoming"})]});export{b as default};
