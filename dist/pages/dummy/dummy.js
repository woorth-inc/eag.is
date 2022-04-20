import e from"../../../_snowpack/pkg/react.js";import a from"../../../_snowpack/pkg/styled-components.js";const s=a.div`
    font-size: 24px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    opacity: ${({animation:t})=>t==="fadein"?1:0};
    animation: ${({animation:t})=>`${t}-dummy`} 800ms ease 50ms forwards;
`;export default({animation:t,onWheel:o})=>e.createElement(s,{animation:t,onWheel:o},"(=^・・^=)");
