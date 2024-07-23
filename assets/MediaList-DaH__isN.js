import{r as p,W as $,j as t,C as d,x as b,L as m}from"./index-BQwDxFRD.js";const E="/movies-and-series/assets/save-D_bEhPz3.png",S="/movies-and-series/assets/saved-v8U9ROfz.png",U=()=>p.useContext($),A=({mediaDetails:s,mediaType:e,asIcons:n=!1,className:r="",iconsLoading:l="eager"})=>{const{addMediaToWatchList:g,removeMediaFromWatchList:u,isMediaPresentInWatchlist:c}=U(),x=o=>{o.preventDefault(),g(s,e)},i=o=>{o.preventDefault(),u(s,e)},a=o=>{const f=o?i:x,N=o?`bg-red-500 hover:bg-red-700 ${n&&"btn btn-xs md:btn-sm rounded-full"}`:`bg-blue-500 hover:bg-blue-700 ${n&&"btn btn-xs md:btn-sm rounded-full"}`,_=o?S:E,h=o?"Remove From Watchlist":"Add To Watchlist";return t.jsx("button",{onClick:f,className:`${N} text-white font-bold p-2 rounded-lg ${r}`,children:n?t.jsx("img",{src:_,alt:h,className:"w-full h-full",loading:l}):t.jsx("span",{children:h})})};return t.jsx("div",{children:a(c(s.id,e))})},j=({count:s=1,className:e})=>t.jsx(t.Fragment,{children:Array.from({length:s}).map((n,r)=>t.jsx("div",{role:"placeholder",className:`bg-slate-400 dark:bg-slate-700 animate-pulse ${e}`},r))}),I=({imagePath:s,alt:e,imageType:n="POSTER",loading:r="eager",className:l=""})=>{const[g,u]=p.useState(!0),c=(a="sm")=>n==="YOUTUBE_THUMBNAIL"?i(a):x(a),x=(a="sm")=>d.ENV.TMDB_API_IMAGE_URL+b[n][a]+s,i=(a="sm")=>d.YOUTUBE_THUMBNAIL_URL+s+"/"+b[n][a];return t.jsx(t.Fragment,{children:s?t.jsx("div",{className:l,children:t.jsx("img",{src:c(),alt:e,style:{filter:`${g?"blur(20px)":""}`,transition:"1s filter linear"},onLoad:()=>{u(!1)},loading:r,height:"100%",width:"100%",srcSet:`${c("sm")} 300w, ${c("md")} 768w, ${c("lg")} 1280w`,sizes:"(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"})}):t.jsxs("div",{className:"relative",children:[t.jsx(j,{className:l}),t.jsx("p",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",children:e})]})})},v=({media:s,mediaType:e,imageLoading:n="eager"})=>{const r=s.poster_path?s.poster_path:s.backdrop_path,l=s.title||s.name||s.id.toString();return t.jsxs("div",{className:"relative group",children:[t.jsx(I,{imagePath:r,alt:l,loading:n,className:"card-sm md:card-md lg:card-lg overflow-y-clip"}),s.vote_average!==0&&t.jsx("div",{className:"absolute top-1 right-1 badge badge-xs sm:badge-sm md:badge-md lg:badge-lg badge-neutral rounded-full",children:s.vote_average.toFixed(1)}),t.jsx(A,{mediaDetails:s,mediaType:e,asIcons:!0,className:"block lg:hidden lg:group-hover:block absolute bottom-1 right-1",iconsLoading:n})]})},w=({mediaList:s,mediaType:e,isLoading:n})=>t.jsxs(t.Fragment,{children:[s==null?void 0:s.slice(0,10).map(r=>t.jsx(m,{to:`${d.ENV.BASE_URL}/details/${e}/${r.id}`,children:t.jsx(v,{media:r,mediaType:e,imageLoading:"eager"})},r.id)),s==null?void 0:s.slice(10).map(r=>t.jsx(m,{to:`${d.ENV.BASE_URL}/details/${e}/${r.id}`,children:t.jsx(v,{media:r,mediaType:e,imageLoading:"lazy"})},r.id)),n&&t.jsx(j,{count:20,className:"card-sm md:card-md lg:card-lg"})]});export{I,w as M,A as W,U as u};
