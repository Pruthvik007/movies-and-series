import{j as e,M as p,C as x,r as h,a as u,u as N,B as v,L as M,Q as j,b as C,c as _}from"./index-Cp5AYT38.js";import{u as E,a as b,b as S}from"./TmdbQueries-C2bTFeR_.js";import{W as R,I as w,M as I}from"./MediaList-Bs-LZfg6.js";const L="/movies-and-series/assets/play-DEuCVnC0.png",g=({name:t,id:a,type:l="VIDEO",mediaType:n="movies"})=>{const s=(l==="VIDEO"?x.YOUTUBE_VIDEO_URL:n==="movies"?x.VIDSRC_MOVIE_URL:x.VIDSRC_SHOW_URL)+a;return e.jsxs("div",{children:[e.jsx(p.Header,{children:e.jsx("h3",{className:"text-xl font-semibold text",children:t})}),e.jsxs(p.Body,{children:[a.length>0&&e.jsx("iframe",{className:"w-full h-80",src:s,allowFullScreen:!0}),a.length===0&&e.jsx("p",{className:"text-xl font-bold text-red-500 text-center",children:"Video Not Available"})]})]})},V=({mediaType:t,id:a})=>{const{openModal:l}=h.useContext(u),n=()=>{l(e.jsx(g,{name:"Watch At VidSrc",id:a.toString(),type:"MEDIA",mediaType:t}))};return N("Enter",n),e.jsx("button",{onClick:n,className:"custom-btn-primary",children:t==="movies"?"Watch Movie":"Watch Show"})},W=({color:t})=>e.jsx("svg",{className:`w-4 h-4 ms-1 ${t}`,"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 22 20",children:e.jsx("path",{d:"M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"})}),k=({actualRating:t,totalRating:a,displayText:l})=>e.jsxs("div",{className:"flex items-center flex-wrap gap-1 max-w-fit",children:[e.jsx("div",{className:"flex",children:Array.from({length:a}).map((n,s)=>e.jsx(W,{color:s<Math.floor(t)?"text-yellow-300":"text-gray-300 dark:text-gray-500"},s))}),l&&e.jsx("p",{className:"text-sm ms-1",children:l})]}),B=({mediaType:t,mediaId:a})=>{const{isLoading:l,error:n,data:s}=E(t,a),{openModal:o}=h.useContext(u),c=b(t,a),r=()=>{let d={name:"",id:""};if(c.isSuccess){const m=c.data.results.sort((i,y)=>i.name.localeCompare(y.name)).find(i=>i.official&&i.site==="YouTube"&&i.type==="Trailer"&&i.name.toLowerCase().includes("trailer"));m&&(d={name:m.name,id:m.key})}o(e.jsx(g,{...d}))};return N(" ",r),e.jsxs("div",{children:[l&&e.jsx(v,{}),n!==null&&e.jsx("p",{className:"text-3xl text-red-500",children:"Something Went Wrong!"}),s&&e.jsxs("div",{className:"rounded-lg shadow flex flex-col items-center md:flex-row gap-5 text-center md:text-left justify-center p-5 bg-base-100",children:[e.jsx(O,{mediaDetails:s}),e.jsxs("div",{className:"flex flex-col gap-3 bg-neutral p-3 rounded-xl w-full md:w-2/3 lg:w-full",children:[e.jsx(A,{mediaDetails:s,mediaType:t}),s.tagline&&s.tagline.length>0&&e.jsxs("p",{className:"text-md md:text-lg italic font-semibold text",children:['"',s.tagline,'"']}),e.jsx("div",{className:"text-lg md:text-xl italic font-semibold text",children:e.jsx("p",{children:s.overview})}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-3 justify-center items-center md:justify-start",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{onClick:r,className:"custom-btn-primary",children:"Watch Trailer"}),e.jsx(V,{mediaType:t,id:s.id})]}),e.jsx(R,{mediaDetails:s,mediaType:t})]}),e.jsx(f,{mediaType:t,data:s.genres,type:"Genres"}),e.jsx(f,{data:s.production_companies,type:"Production Companies",mediaType:t})]})]})]})},A=({mediaDetails:t,mediaType:a})=>{const l=a==="movies"?t.original_title:t.original_name,n=a==="movies"?t.release_date:t.first_air_date;return e.jsxs("p",{className:"text-3xl text-white",children:[l," (",n.split("-")[0],")"]})},f=({data:t,type:a,mediaType:l})=>{const n=a==="Genres"?j.WITH_GENRES:j.WITH_COMPANIES;return e.jsxs("div",{className:"flex flex-col items-center md:flex-row bg-base-100 rounded-xl py-2 px-4 gap-x-2",children:[e.jsx("p",{className:"text-lg text whitespace-nowrap",children:a}),e.jsx("div",{className:"flex rounded-md shadow-sm gap-2 p-2 overflow-x-auto max-w-full",role:"group",children:t.map(s=>e.jsx(M,{to:`${x.ENV.BASE_URL}media/${l}/discover?${n}=${s.id}`,type:"button",className:"btn btn-sm md:btn-md btn-active btn-info",children:s.name},s.id))})]})},O=({mediaDetails:t})=>e.jsxs("div",{className:"flex flex-col items-center gap-y-5",children:[e.jsx(w,{imagePath:t==null?void 0:t.poster_path,alt:t==null?void 0:t.id.toString(),loading:"eager",className:"card-lg"}),e.jsx(k,{actualRating:Number((t.vote_average/2).toFixed(1)),totalRating:5,displayText:`${t.vote_average.toFixed(1)} / 10`})]}),U=({mediaType:t,mediaId:a})=>{const{isLoading:l,error:n,data:s}=S(t,a);if(!n)return e.jsxs("div",{className:"bg-neutral rounded-xl p-3",children:[e.jsx("p",{className:"text-3xl font-bold text-white font-sans py-2",children:"Recommendations"}),n!==null&&e.jsx("p",{className:"text-3xl text-red-500",children:"Something Went Wrong!"}),s&&s.results.length===0&&e.jsx("p",{className:"text-3xl text-red-500 text-center",children:"No Recommendations Found!"}),s&&s.results.length>0&&e.jsx("div",{className:"flex gap-3 scrollbar-hidden",children:e.jsx(I,{mediaList:s.results,mediaType:t,isLoading:l})})]})},P=()=>{const t=C();return e.jsx("button",{onClick:()=>t(-1),className:"btn hover:btn-primary btn-neutral btn-sm lg:btn-md text-white font-bold py-2 px-4 rounded fixed right-5 bottom-5",children:"Back"})},T=({mediaType:t,mediaId:a})=>{const{openModal:l}=h.useContext(u),{isLoading:n,error:s,data:o}=b(t,a),c=r=>{const d={name:r.name,id:r.key};l(e.jsx(g,{...d}))};return e.jsxs("div",{className:"bg-neutral rounded-xl p-3 shadow",children:[e.jsx("p",{className:"text-3xl font-bold text-white font-sans py-4",children:"Videos"}),n&&e.jsx(v,{}),s!==null&&e.jsx("p",{className:"text-3xl text-red-500",children:"Something Went Wrong!"}),o&&o.results.length===0&&e.jsx("p",{className:"text-3xl text-red-500 text-center",children:"No Videos Found!"}),o&&e.jsx("div",{className:"flex gap-3 overflow-x-auto",children:o.results.map(r=>e.jsxs("div",{className:"relative cursor-pointer",onClick:()=>c(r),children:[e.jsx(w,{alt:r.name,imagePath:r.key,imageType:"YOUTUBE_THUMBNAIL",loading:"lazy",className:"card-horizontal-sm md:card-horizontal-md lg:card-horizontal-lg rounded-xl overflow-y-clip"}),e.jsx("img",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10",src:L,alt:"play"})]},r.key))})]})},Y=()=>{const{id:t,mediaType:a}=_();return e.jsxs("div",{className:"flex flex-col gap-5 p-3",children:[e.jsx(B,{mediaId:t,mediaType:a}),e.jsx(T,{mediaId:t,mediaType:a}),e.jsx(U,{mediaId:t,mediaType:a}),e.jsx(P,{})]})};export{Y as default};