import o from"../../../_snowpack/pkg/react.js";import s from"../../../_snowpack/pkg/styled-components.js";import"./style.css.proxy.js";const r=s.div`
    font-size: 24px;
    text-align: center;

    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    opacity: ${({animation:e})=>e==="fadein"?0:e==="fadeout"?1:0};
    ${({animation:e,firstRender:t})=>t?"":`animation: ${e}-member 800ms ease 50ms forwards;`}
`;export default({animation:e,firstRender:t})=>o.createElement(r,{animation:e,firstRender:t},o.createElement("p",null,"members"),o.createElement("p",null,"・(=^・・^=)"));
