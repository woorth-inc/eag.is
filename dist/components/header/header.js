import o,{useCallback as f,useState as c,memo as y}from"../../../_snowpack/pkg/react.js";import r from"../../../_snowpack/pkg/styled-components.js";import k from"../../assets/images/eagis-logo.png.proxy.js";import"./style.css.proxy.js";const w=r.div`
  margin: 25px auto 10px;

  display: block;
  width: 175px;
  height: 50px;

  background-image: url(${({src:e})=>e});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  animation: fadein-logo 800ms ease 400ms forwards;
  opacity: 0;
`,x=r.div`
  display: grid;
  grid-template-columns: repeat(${e=>e.items||5}, 1fr);
  grid-column-gap: 30px;
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
`,b=r.div.attrs(e=>({delay:e.delay||0,active:e.active}))`
  font-weight: ${({active:e})=>e?600:200};
  font-size: 18px;
  width: 110px;
  animation: fadein-item 800ms ease ${({delay:e})=>e*230}ms forwards;
  opacity: 0;
  cursor: pointer;
`,v=r.div`
  ${({media:e})=>e.isTablet?"":`
      display: grid;
      grid-template-rows: repeat(2, 1fr);
    `}
`;export default y(({items:e,media:s,refs:n})=>{const[p,m]=c(e.findIndex(({active:t})=>t)),[l,g]=c(performance.now()),d=f((t,i)=>{performance.now()-l<1e3||(n[t].current?.getAttribute("ignore-animation")==="true"?n[t].current?.setAttribute("ignore-animation","false"):i(),m(t),g(performance.now()))},[]);return o.createElement(v,{media:s},o.createElement(w,{src:k}),!s.isTablet&&o.createElement(x,{items:e.length},e.map(({delay:t,label:i,onClick:u},a)=>o.createElement(b,{key:a,delay:+t,active:a===p,ref:n[a],onClick:()=>d(a,u)},i))))});
