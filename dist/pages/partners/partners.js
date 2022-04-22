import r from"../../../_snowpack/pkg/react.js";import t from"../../../_snowpack/pkg/styled-components.js";import n from"../../assets/images/partners-logo/microsoft.png.proxy.js";import p from"../../assets/images/partners-logo/microsoft_azure.png.proxy.js";import m from"../../assets/images/partners-logo/verylonganimals.png.proxy.js";import"./style.css.proxy.js";const i=t.div`
    font-size: 24px;
    text-align: center;

    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    opacity: ${({animation:e})=>e==="fadein"?0:e==="fadeout"?1:0};
    ${({animation:e,firstRender:o})=>o?"":`animation: ${e}-company 800ms ease 50ms forwards;`}
`,c=t.div`
    grid-gap: 20px;
`,g=t.img`
    height: 40px;
    margin: 10px 20px;
`;export default({animation:e,firstRender:o})=>r.createElement(i,{animation:e,firstRender:o},r.createElement(c,null,[n,p,m].map((s,a)=>r.createElement(g,{src:s,key:a}))));
