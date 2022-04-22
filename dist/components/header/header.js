import t,{useState as c}from"../../../_snowpack/pkg/react.js";import a from"../../../_snowpack/pkg/styled-components.js";import d from"../../assets/images/eagis-logo.png.proxy.js";import"./style.css.proxy.js";const m=a.div`
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
`,g=a.div`
    display: grid;
    grid-template-columns: repeat(${({items:e})=>e||5}, 1fr);
    grid-column-gap: 30px;

    margin: 0 auto;
    margin-top: 10px;
    text-align: center;
`,l=a.div`
    font-weight: ${e=>e.active?600:200};
    font-size: 18px;
    width: 110px;

    animation: fadein-item 800ms ease ${e=>e.delay*230}ms forwards;
    opacity: 0;
    cursor: pointer;
`,u=a.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
`;export default({items:e})=>{const[i,n]=c(e.findIndex(({active:o})=>o));return t.createElement(u,null,t.createElement(m,{src:d}),t.createElement(g,{items:e.length},e.map(({delay:o,label:s,onClick:p},r)=>t.createElement(l,{key:r,delay:o,active:r===i,onClick:()=>{p(),n(r)}},s))))};
