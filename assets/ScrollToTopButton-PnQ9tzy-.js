import{j as o}from"./index-vWfmPbfg.js";import{r as e,a as t}from"./react-BzPveaeN.js";const r=()=>{window.scrollTo({top:0,behavior:"smooth"})},n=e.memo((()=>{const[n,s]=e.useState(!1);return e.useEffect((()=>{const o=()=>{const o=document.documentElement.scrollTop;s(o>300)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)}),[]),o.jsx(t.Fragment,{children:n&&o.jsx("button",{style:{position:"fixed",bottom:"30px",right:"30px"},onClick:r,color:"secondary","aria-label":"add",children:"▲"})})}));export{n as S};