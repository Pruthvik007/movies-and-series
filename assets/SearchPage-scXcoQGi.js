import{r as n,j as e,R as x}from"./index-zDtRywbm.js";import{M as f}from"./MediaSelector-5SeHiJ8N.js";import{c as g,M as h}from"./TmdbQueries-NQWd5e5t.js";import{u as j,S}from"./useInfiniteScroll-MktqcI-K.js";import{E as b}from"./ErrorPage-47zB2AXi.js";function y(s,r){const[a,o]=n.useState(s);return n.useEffect(()=>{const t=setTimeout(()=>o(s),r||500);return()=>{clearTimeout(t)}},[s,r]),a}const N=({params:s,setParams:r,mediaType:a,setMediaType:o,classNames:t=""})=>{const[c,i]=n.useState(""),u=y(c,500);return n.useEffect(()=>{r({...s,query:u})},[u]),e.jsxs("div",{className:`flex flex-row gap-3 bg-base-100 p-5 w-full justify-center border-black rounded-lg items-center ${t}`,children:[e.jsx("input",{type:"text",placeholder:"Search...",className:"input input-bordered w-full max-w-xs input-sm md:input-md",value:c,onChange:l=>i(l.target.value)}),e.jsx(f,{mediaType:a,setMediaType:o})]})},F=()=>{const[s,r]=n.useState("MOVIES"),[a,o]=n.useState({page:1,query:"",include_adult:!1}),{data:t,error:c,fetchNextPage:i,hasNextPage:u,isFetching:l,isFetchingNextPage:m}=g(s,a);return j(()=>{u&&i()}),c?e.jsx(b,{}):e.jsxs("div",{className:"container px-3",children:[e.jsx("p",{className:"text-3xl font-bold text-center py-3",children:"Search For Movies And TV Shows"}),e.jsx(N,{classNames:"mb-5",params:a,setParams:o,mediaType:s,setMediaType:r}),e.jsx("div",{className:"flex flex-wrap gap-3 justify-center bg-neutral",children:t==null?void 0:t.pages.map((d,p)=>e.jsx(x.Fragment,{children:e.jsx(h,{mediaList:d.results,mediaType:s,isLoading:l||m})},p))}),e.jsx(S,{})]})};export{F as default};