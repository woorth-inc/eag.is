import r from"../../../_snowpack/pkg/react.js";import p from"../../../_snowpack/pkg/styled-components.js";const i=p.div`
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
    transition: 600ms;

    &:hover {
        background: white;
        color: black;
    }
`;export default({action:t,className:e,children:o})=>r.createElement(i,{className:e,onClick:t},o);
