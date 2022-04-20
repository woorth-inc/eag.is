import o from"../../../_snowpack/pkg/react.js";import p from"../../../_snowpack/pkg/styled-components.js";const i=p.div`
    border: solid 2px white;
    border-radius: 6px;

    background: transparent;
    color: white;

    text-align: center;
    line-height: 20px;
    height: 20px;
    padding: 10px;

    display: block;
    width: 100px;
    cursor: pointer;
`;export default({action:t,className:e,children:r})=>o.createElement(i,{className:e,onClick:t},r);
