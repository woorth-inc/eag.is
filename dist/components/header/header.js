import t,{useState as i}from"../../../_snowpack/pkg/react.js";import o from"../../../_snowpack/pkg/styled-components.js";import l from"../../assets/images/eagis-logo.png.proxy.js";import"./style.css.proxy.js";const f=o.div`
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
`,u=o.div`
    display: grid;
    grid-template-columns: repeat(${({items:e})=>e||5}, 1fr);
    grid-column-gap: 30px;

    margin: 0 auto;
    margin-top: 10px;
    text-align: center;
`,w=o.div`
    font-weight: ${e=>e.active?600:200};
    font-size: 18px;
    width: 110px;

    animation: fadein-item 800ms ease ${e=>e.delay*230}ms forwards;
    opacity: 0;
    cursor: pointer;
`,x=o.div`
    ${({isMobile:e})=>e?"":`
            display: grid;
            grid-template-rows: repeat(2, 1fr);
        `}
`;export default({items:e,isMobile:n})=>{const[s,p]=i(e.findIndex(({active:r})=>r)),[c,m]=i(performance.now());return t.createElement(x,{isMobile:n},t.createElement(f,{src:l}),!n&&t.createElement(u,{items:e.length},e.map(({delay:r,label:d,onClick:g},a)=>t.createElement(w,{key:a,delay:r,active:a===s,onClick:()=>{performance.now()-c<1e3||(g(),p(a),m(performance.now()))}},d))))};
