import a from"../../../_snowpack/pkg/react.js";import t from"../../../_snowpack/pkg/styled-components.js";import n from"../../assets/images/eagis-logo.png.proxy.js";import"./style.css.proxy.js";const s=t.div`
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
`,l=t.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 30px;

    margin: 0 auto;
    margin-top: 10px;
    text-align: center;
`,p=t.div`
    font-weight: ${e=>e.active?600:200};
    font-size: 18px;
    width: 110px;

    animation: fadein-item 800ms ease ${e=>e.delay*230}ms forwards;
    opacity: 0;
    cursor: pointer;
`,m=t.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
`,c=[{delay:3,label:"company"},{delay:2,label:"member"},{delay:1,label:"about",active:!0},{delay:2,label:"twitter"},{delay:3,label:"discord"}];export default()=>a.createElement(a.Fragment,null,a.createElement(m,null,a.createElement(s,{src:n}),a.createElement(l,null,c.map(({delay:e,label:o,active:r},i)=>a.createElement(p,{key:i,delay:e,active:r},o)))));
