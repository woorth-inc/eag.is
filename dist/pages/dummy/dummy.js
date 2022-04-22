import o from"../../../_snowpack/pkg/react.js";import s from"../../../_snowpack/pkg/styled-components.js";import"./style.css.proxy.js";const e=s.div`
    font-size: 24px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    opacity: ${({animation:t})=>t==="fadein"?0:1};
    animation: ${({animation:t})=>`${t}-dummy`} 800ms ease 50ms forwards;
`;export default({animation:t})=>o.createElement(e,{animation:t},"(=^・・^=)");
