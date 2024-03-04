import{j as e,M as m,C as c,r as g,a as f,u as p,b,B as v}from"./index-etcjrlAC.js";import{W as N,T as w,M as y}from"./MediaList-40pOnKEG.js";import{u as M,a as _,b as C}from"./TmdbQueries-55vd4mkA.js";import{E as S}from"./ErrorPage-ezoT_Q9Y.js";const j=({name:s,id:t,type:a="VIDEO",mediaType:n})=>e.jsxs("div",{children:[e.jsx(m.Header,{children:e.jsx("h3",{className:"text-xl font-semibold text",children:s})}),e.jsxs(m.Body,{children:[t.length>0&&e.jsx("iframe",{className:"w-full h-80",src:(a==="VIDEO"?c.YOUTUBE_VIDEO_URL:n==="movies"?c.VIDSRC_MOVIE_URL:c.VIDSRC_SHOW_URL)+t,allowFullScreen:!0}),t.length===0&&e.jsx("p",{className:"text-xl font-bold text-red-500 text-center",children:"Video Not Available"})]})]}),L=({mediaType:s,id:t})=>{const{openModal:a}=g.useContext(f);return e.jsx("button",{onClick:()=>a(e.jsx(j,{name:"Watch At VidSrc",id:t.toString(),type:"MEDIA",mediaType:s})),className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg",children:s==="movies"?"Watch Movie":"Watch Show"})},R=({mediaType:s,mediaDetails:t})=>{const{openModal:a}=g.useContext(f),n=M(s,t.id.toString());let r={name:"",id:""};if(n.isSuccess){const l=n.data.results.find(o=>o.official&&o.site==="YouTube"&&o.type==="Trailer"&&o.name==="Official Trailer");l&&(r={name:l.name,id:l.key})}return e.jsxs("div",{className:"flex flex-col gap-3 bg-neutral p-3 rounded-xl max-w-full",children:[e.jsx(V,{mediaDetails:t,mediaType:s}),t.tagline!==void 0&&t.tagline.length>0&&e.jsxs("p",{className:"text-md md:text-lg italic font-semibold text",children:['"',t.tagline,'"']}),e.jsx("div",{className:"text-lg md:text-xl italic font-semibold text",children:e.jsx("p",{children:t.overview})}),e.jsxs("div",{className:"flex gap-3 justify-center md:justify-start",children:[e.jsx("button",{onClick:()=>a(e.jsx(j,{...r})),className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg",children:"Play Trailer"}),e.jsx(L,{mediaType:s,id:t.id}),e.jsx(N,{mediaDetails:t,mediaType:s})]}),e.jsxs("div",{className:"flex flex-col gap-3 lg:flex-row max-w-6xl",children:[e.jsx(h,{data:t.genres,type:"Genres"}),e.jsx(h,{data:t.production_companies,type:"Production Companies"})]})]})},V=({mediaDetails:s,mediaType:t})=>{const a=t==="movies"?s.original_title:s.original_name,n=t==="movies"?s.release_date:s.first_air_date;return e.jsxs("p",{className:"text-3xl text-white",children:[a," (",n.split("-")[0],")"]})},h=({data:s,type:t})=>e.jsxs("div",{className:"flex flex-col items-center md:flex-row bg-base-100 rounded-xl p-3 gap-x-2 overflow-x-auto",children:[e.jsx("p",{className:"text-xl font-bold text-white",children:t}),e.jsx("div",{className:"flex justify-start rounded-md shadow-sm gap-2 p-2 max-w-full overflow-x-auto",role:"group",children:s.map(a=>e.jsx("button",{type:"button",className:"btn btn-sm md:btn-md btn-active btn-info",children:a.name},a.id))})]}),B=({color:s})=>e.jsx("svg",{className:`w-4 h-4 ms-1 ${s}`,"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 22 20",children:e.jsx("path",{d:"M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"})}),E=({actualRating:s,totalRating:t,displayText:a})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center flex-wrap justify-center gap-1",children:[e.jsx("div",{className:"flex",children:Array.from({length:t}).map((n,r)=>e.jsx(B,{color:r<Math.floor(s)?"text-yellow-300":"text-gray-300 dark:text-gray-500"},r))}),a&&e.jsx("p",{className:"text-sm ms-1",children:a})]})}),O=({mediaType:s,mediaDetails:t})=>e.jsxs("div",{className:"rounded-lg shadow flex flex-col items-center md:flex-row gap-5 text-center md:text-left justify-center p-5 bg-base-100",children:[e.jsxs("div",{className:"space-y-5",children:[e.jsx("div",{className:"card-lg",children:e.jsx(w,{imagePath:t==null?void 0:t.poster_path,alt:t==null?void 0:t.id.toString()})}),e.jsx(E,{actualRating:Number((t.vote_average/2).toFixed(1)),totalRating:5,displayText:`${t.vote_average.toFixed(1)} / 10`})]}),t&&e.jsx(R,{mediaDetails:t,mediaType:s})]}),k=()=>{const s=p();return e.jsx("button",{onClick:()=>s(-1),className:"btn hover:btn-primary btn-neutral btn-sm lg:btn-md text-white font-bold py-2 px-4 rounded fixed right-5 bottom-5",children:"Back"})},W=()=>{var o,i,x,d,u;const{id:s,mediaType:t}=b(),{isLoading:a,error:n,data:r}=_(t,s),l=C(t,s);return a?e.jsx(v,{}):n?e.jsx(S,{}):e.jsxs("div",{className:"flex flex-col gap-5 p-3",children:[r&&e.jsx(O,{mediaDetails:r,mediaType:t}),((i=(o=l.data)==null?void 0:o.results)==null?void 0:i.length)!==void 0&&((d=(x=l.data)==null?void 0:x.results)==null?void 0:d.length)>0&&e.jsxs("div",{className:"bg-neutral rounded-xl p-3",children:[e.jsx("p",{className:"text-3xl font-bold text-white font-sans py-2",children:"Recommendations"}),e.jsx("div",{className:"flex gap-3 scrollbar-hidden",children:e.jsx(y,{mediaList:(u=l.data)==null?void 0:u.results,mediaType:t,isLoading:l.isLoading})})]}),e.jsx(k,{})]})};export{W as default};
