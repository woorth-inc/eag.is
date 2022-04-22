import t from"../../../_snowpack/pkg/react.js";import a from"../../../_snowpack/pkg/styled-components.js";import p from"../../assets/images/eagis-logo.png.proxy.js";import"./style.css.proxy.js";const c=a.div`
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
`,m=a.div`
    display: grid;
    grid-template-columns: repeat(${({items:e})=>e||5}, 1fr);
    grid-column-gap: 30px;

    margin: 0 auto;
    margin-top: 10px;
    text-align: center;
`,g=a.div`
    font-weight: ${e=>e.active?600:200};
    font-size: 18px;
    width: 110px;

    animation: fadein-item 800ms ease ${e=>e.delay*230}ms forwards;
    opacity: 0;
    cursor: pointer;
`,d=a.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
`;export default({items:e})=>t.createElement(d,null,t.createElement(c,{src:p}),t.createElement(m,{items:e.length},e.map(({delay:o,label:r,active:i,onClick:n},s)=>t.createElement(g,{key:s,delay:o,active:i,onClick:n},r))));
