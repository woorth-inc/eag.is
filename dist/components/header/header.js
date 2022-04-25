import o,{useState as s}from"../../../_snowpack/pkg/react.js";import r from"../../../_snowpack/pkg/styled-components.js";import u from"../../assets/images/eagis-logo.png.proxy.js";import"./style.css.proxy.js";const f=r.div`
    margin: 25px auto 10px;

    display: block;
    width: 175px;
    height: 50px;

    background-image: url(${e=>e.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    animation: fadein-logo 800ms ease 400ms forwards;
    opacity: 0;
`,w=r.div`
    display: grid;
    grid-template-columns: repeat(${({items:e})=>e||5}, 1fr);
    grid-column-gap: 30px;

    margin: 0 auto;
    margin-top: 10px;
    text-align: center;
`,x=r.div`
    font-weight: ${e=>e.active?600:200};
    font-size: 18px;
    width: 110px;

    animation: fadein-item 800ms ease ${e=>e.delay*230}ms forwards;
    opacity: 0;
    cursor: pointer;
`,y=r.div`
    ${({media:e})=>e.isTablet?"":`
            display: grid;
            grid-template-rows: repeat(2, 1fr);
        `}
`;export default({items:e,media:i,refs:a})=>{const[c,p]=s(e.findIndex(({active:n})=>n)),[m,g]=s(performance.now());return o.createElement(y,{media:i},o.createElement(f,{src:u}),!i.isTablet&&o.createElement(w,{items:e.length},e.map(({delay:n,label:l,onClick:d},t)=>o.createElement(x,{key:t,delay:n,active:t===c,ref:a[t],onClick:()=>{performance.now()-m<1e3||(a[t].current?.getAttribute("ignore-animation")==="true"?a[t].current?.setAttribute("ignore-animation","false"):d(),p(t),g(performance.now()))}},l))))};
