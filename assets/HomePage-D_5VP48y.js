import{b as m,r as c,j as e,C as i,E as d}from"./index-DRbrSTtU.js";import{f as x}from"./TmdbQueries-DuWHvMVu.js";import{M as p}from"./MediaList-CspnExjm.js";import{M as f}from"./MediaSelector-C6M0u8Fl.js";const b=({category:s})=>{const l=m(),[t,r]=c.useState("movies"),{isLoading:n,data:a}=x(t,s),o=()=>{l(`${i.ENV.BASE_URL}media/${t}/${s}`)};return e.jsxs("div",{className:"flex flex-col gap-3 p-3 bg-neutral rounded-xl",children:[e.jsxs("div",{className:"flex place-content-between items-center",children:[e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx("p",{className:"text-md lg:text-lg font-bold text",children:i.categories[s]}),e.jsx(f,{mediaType:t,setMediaType:r})]}),e.jsx("button",{onClick:o,className:"btn btn-active btn-primary btn-sm md:btn-sm lg:btn-md",children:"View More"})]}),e.jsx("div",{className:"flex gap-3 scrollbar-hidden",children:e.jsx(p,{mediaList:a==null?void 0:a.results,mediaType:t,isLoading:n})})]})},v=()=>e.jsx("div",{className:"flex flex-col gap-3 p-3",children:Object.keys(d.movies).map(s=>e.jsx(b,{category:s},s))});export{v as default};
