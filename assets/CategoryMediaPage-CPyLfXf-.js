import{j as e,Q as d,c as j,r as b,E as x,C as u}from"./index-vDcMo-XS.js";import{u as _,S as N}from"./ScrollToTopButton-DYDeb5Dl.js";import{u as m}from"./useFilters-Dn4ojSsN.js";import{d as C,e as w}from"./TmdbQueries-dh1AQ9Ye.js";import{M as y,S}from"./MediaList-CLHUDK_3.js";const g=({label:a,options:n,value:t,onChange:r})=>e.jsxs("select",{id:a,className:"select select-bordered text-center overflow-hidden",value:t,onChange:s=>r(s.target.value),children:[e.jsx("option",{value:"",children:a}),n.map(s=>e.jsx("option",{value:s.value,children:s.label},s.value))]}),T=({mediaType:a,value:n,onChange:t})=>{const s=C(a).map(l=>({value:String(l.id),label:l.name}));return e.jsx(g,{label:"Genres",options:s,value:n,onChange:t})},F=({className:a="",mediaType:n})=>{const{updateFilters:t,clearFilters:r,filters:s,isFiltersActive:l}=m();return e.jsxs("div",{className:`flex flex-col md:flex-row gap-3 bg-base-100 p-5 w-full justify-center border-black rounded-lg ${a}`,children:[e.jsx(T,{mediaType:n,value:s.with_genres?s.with_genres:"",onChange:o=>t("with_genres",o)}),e.jsx(g,{label:"Sort By Popularity",options:[{value:d.SORT_BY.VOTE_COUNT_DESC,label:"Descending"},{value:d.SORT_BY.VOTE_COUNT_ASC,label:"Ascending"}],value:s.sort_by_vote_count?s.sort_by_vote_count:"",onChange:o=>t("sort_by_vote_count",o)}),l()&&e.jsx("button",{className:"btn btn-md btn-active btn-warning rounded-xl",onClick:r,children:"Clear Filters"})]})},R=()=>{const{ref:a,inView:n}=_(),{mediaType:t,category:r}=j(),s=(t==="movies"||t==="shows")&&r!==void 0&&r in u.categories,{filters:l,activeFilterName:o}=m(),{data:i,error:p,fetchNextPage:f,isFetching:v,hasNextPage:h}=w(t,r,l,s);return b.useEffect(()=>{n&&h&&f()},[n]),s?p?e.jsx(x,{}):e.jsxs("div",{className:"p-3 flex flex-col gap-3 min-height-screen",children:[e.jsxs("div",{className:"flex flex-wrap justify-center gap-3 text-sm md:text-2xl font-bold py-3 text-neutral-content",children:[e.jsx("span",{children:`${u.categories[r].toUpperCase()} ${t.toUpperCase()}`}),e.jsx("span",{children:o?`(From ${o})`:""})]}),r==="discover"&&e.jsx(F,{className:"py-3",mediaType:t}),i&&(i.pages[0].total_results!==0?e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 p-3 gap-3 bg-base-100 rounded-xl mx-auto",children:[i.pages.map(c=>e.jsx(y,{mediaList:c.results,mediaType:t},c.page)),v&&e.jsx(S,{count:20,className:"card-sm md:card-md lg:card-lg flex-shrink-0"})]}):e.jsx("p",{className:"text-sm md:text-3xl text-warning mx-auto md:whitespace-nowrap text-center",children:"No Results Found For Given Category"})),i&&i.pages.length>=1&&e.jsx("div",{id:"observer",ref:a}),e.jsx(N,{})]}):e.jsx(x,{message:"Invalid Category"})};export{R as default};