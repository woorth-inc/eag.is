import t,{useState as n}from"../../../_snowpack/pkg/react.js";import o from"../../../_snowpack/pkg/styled-components.js";import g from"../../assets/images/eagis-logo.png.proxy.js";import"./style.css.proxy.js";const l=o.div`
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
`,f=o.div`
    display: grid;
    grid-template-columns: repeat(${({items:e})=>e||5}, 1fr);
    grid-column-gap: 30px;

    margin: 0 auto;
    margin-top: 10px;
    text-align: center;
`,u=o.div`
    font-weight: ${e=>e.active?600:200};
    font-size: 18px;
    width: 110px;

    animation: fadein-item 800ms ease ${e=>e.delay*230}ms forwards;
    opacity: 0;
    cursor: pointer;
`,w=o.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
`;export default({items:e})=>{const[i,s]=n(e.findIndex(({active:r})=>r)),[p,c]=n(performance.now());return t.createElement(w,null,t.createElement(l,{src:g}),t.createElement(f,{items:e.length},e.map(({delay:r,label:m,onClick:d},a)=>t.createElement(u,{key:a,delay:r,active:a===i,onClick:()=>{performance.now()-p<1e3||(d(),s(a),c(performance.now()))}},m))))};
