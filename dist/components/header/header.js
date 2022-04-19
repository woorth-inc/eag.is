import React from "../../../_snowpack/pkg/react.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
import EagisLogo from "../../assets/images/eagis-logo.png.proxy.js";
import "./style.css.proxy.js";
const Logo = styled.div`
    margin: 0 auto;
    margin-top: 10px;

    display: block;
    width: 140px;
    height: 40px;

    background-image: url(${(props) => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    animation: fadein-logo 800ms ease 400ms forwards;
    opacity: 0;
`;
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 30px;

    margin: 0 auto;
    margin-top: 10px;
    text-align: center;
`;
const HeaderItem = styled.div`
    font-weight: ${(props) => props.active ? 600 : 200};
    font-size: 18px;
    width: 110px;

    animation: fadein-item 800ms ease ${(props) => props.delay * 230}ms forwards;
    opacity: 0;
    cursor: pointer;
`;
const Container = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
`;
const items = [
  {delay: 3, label: "company"},
  {delay: 2, label: "member"},
  {delay: 1, label: "about", active: true},
  {delay: 2, label: "twitter"},
  {delay: 3, label: "discord"}
];
export default () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Logo, {
  src: EagisLogo
}), /* @__PURE__ */ React.createElement(Wrapper, null, items.map(({delay, label, active}, key) => /* @__PURE__ */ React.createElement(HeaderItem, {
  key,
  delay,
  active
}, label)))));
