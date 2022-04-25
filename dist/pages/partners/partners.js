import r from"../../../_snowpack/pkg/react.js";import s from"../../../_snowpack/pkg/styled-components.js";import p from"../../assets/images/partners-logo/microsoft.png.proxy.js";import m from"../../assets/images/partners-logo/microsoft_azure.png.proxy.js";import i from"../../assets/images/partners-logo/verylonganimals.png.proxy.js";import"./style.css.proxy.js";const l=s.div`
    font-size: 24px;
    text-align: center;

    position: absolute;
    left: 50%;

    ${({isMobile:t})=>t?`
            transform: translateX(-50%);
        `:`
            top: 50%;
            transform: translate(-50%, -50%);
        `}

    opacity: ${({animation:t,isMobile:e})=>e?1:t==="fadein"?0:t==="fadeout"?1:0};
    ${({animation:t,firstRender:e,isMobile:o})=>o||e?"":`animation: ${t}-company 800ms ease 50ms forwards;`}
`,c=s.div`
    grid-gap: 20px;
`,g=s.img`
    height: 40px;
    margin: 10px 20px;
`;export default({animation:t,firstRender:e,isMobile:o})=>r.createElement(l,{animation:t,firstRender:e,isMobile:o},o&&r.createElement("div",{style:{marginBottom:"20px",fontFamily:'"Noto Sans JP"',fontSize:"16px"}},"パートナー"),r.createElement(c,null,[p,m,i].map((a,n)=>r.createElement(g,{src:a,key:n}))));
