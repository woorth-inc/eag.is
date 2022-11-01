import t,{memo as f}from"../../../_snowpack/pkg/react.js";import o from"../../../_snowpack/pkg/styled-components.js";import d from"../../assets/images/woorth-inc-logo.png.proxy.js";import u from"../../components/button/button.js";import"./style.css.proxy.js";const r={isTablet:!1,isMobile:!1},x=o.div.attrs(e=>({media:e.media||r,animation:e.animation,firstRender:e.firstRender}))`
  pointer-events: ${({disableClick:e})=>e?"none":"all"};
  display: block;

  ${({media:e})=>e.isTablet?`
      margin: 100px auto;
      width: ${e.isMobile?325:540}px;
      text-align: center;
    `:`
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: calc(50% + 20px);

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 60px;
      align-items: center;
    `}

  opacity: ${({animation:e,media:a})=>a.isTablet?1:e==="fadein"?0:e==="fadeout"?1:0};
  ${({animation:e,firstRender:a,media:n})=>n.isTablet||a?"":`animation: ${e}-company 800ms ease 50ms forwards;`}

  & div {
    width: ${({media:e})=>e.isTablet?"auto":"500px"};
    padding: 0 ${({media:e})=>e.isMobile?"0":"30px"};
  }

  & p {
    font-family: 'Noto Sans JP';
    font-weight: 400;
    font-size: ${({media:e})=>e.isTablet?12:16}px;
  }

  & p > span {
    font-family: Poppins;
  }
`,l=o.div.attrs(e=>({media:e.media||r}))`
  & > p {
    margin: 0;
    color: #c0c0c0;
  }

  & > p:nth-of-type(1) {
    font-size: ${({media:e})=>e.isTablet?22:28}px;
    font-weight: 700;
    color: #fff;
  }

  & > p:nth-of-type(3) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`,i=o.div.attrs(e=>({media:e.media||r}))`
  background: url('${d}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: ${({media:e})=>e.isTablet?60:110}px;
  margin-bottom: ${({media:e})=>e.isTablet?20:0}px;
`,h=o.div`
  margin-top: 40px;
  text-align: right;
`,s=o.p`
  margin: 0 60px;
  font-size: 16px;
  cursor: pointer;
  color: #7070ed;

  &::after {
    content: '';
    margin-left: 5px;
    margin-top: 7px;

    position: absolute;
    height: 16px;
    width: 16px;

    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512' fill='%237070ed '%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z'/%3E%3C/svg%3E") 0 0 no-repeat;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`,p=o(u)`
  font-size: 12px;
  line-height: 30px;
  width: 120px !important;
  height: 30px;
  margin: 20px auto;
`,c=()=>{open("https://woorth.io/")},m=()=>{open("https://notionforms.io/forms/eagis-contact-form")},g=f(({withoutLink:e})=>t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement("span",null,'"'),"無限の価値を見つけて伸ばす",t.createElement("span",null,'"')),t.createElement("p",null,"を目標に",t.createElement("span",null,"Web3"),"領域の事業を進めるスタートアップ"),t.createElement("p",null,"ブロックチェーン開発、暗号資産ウォレット開発、",t.createElement("span",null,"NFT"),"発行支援等の",t.createElement("span",null,"Web3"),"領域を包括したサービスの提供を行っています。また今後は",t.createElement("span",null,"Web3"),"学習サービス等も提供予定です。"),t.createElement("p",null,"急成長するこの領域で正常に発展できる基盤を作るべく様々な事業に取り組んでいます。",t.createElement("span",null,"NFT"),"やその他",t.createElement("span",null,"Web3"),"事業でお困りのことやご相談があれば気軽にお問い合わせください。"),!e&&t.createElement(h,null,t.createElement(s,{onClick:c},"コーポレートサイトへ"),t.createElement(s,{onClick:m},"お問い合わせ"))));export default({animation:e,firstRender:a,media:n})=>t.createElement(x,{animation:e,firstRender:a,disableClick:e!=="fadein"&&!n.isTablet,media:n},n.isTablet?t.createElement(t.Fragment,null,t.createElement("div",{style:{marginBottom:"20px",fontFamily:'"Noto Sans JP"',fontWeight:"500",fontSize:n.isMobile?"18px":"23px"}},"🏢会社概要"),t.createElement(i,{media:n}),t.createElement(l,{media:n},t.createElement(g,{withoutLink:!0}),t.createElement("div",{style:{height:"25px"}}),t.createElement(p,{action:c},"コーポレートサイト"),t.createElement(p,{action:m},"お問い合わせ"))):t.createElement(t.Fragment,null,t.createElement(l,{media:n},t.createElement(g,{withoutLink:!1})),t.createElement(i,{media:n})));
