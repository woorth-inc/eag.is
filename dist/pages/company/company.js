import e from"../../../_snowpack/pkg/react.js";import o from"../../../_snowpack/pkg/styled-components.js";import g from"../../assets/images/woorth-inc-logo.png.proxy.js";import f from"../../components/button/button.js";import"./style.css.proxy.js";const u=o.div`
    pointer-events: ${({disableClick:t})=>t?"none":"all"};
    font-size: 24px;
    display: block;

    ${({media:t})=>t.isTablet?`
            margin: 100px auto;
            width: ${t.isMobile?400:500}px;
            text-align: center;
        `:`
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;

            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 60px;
            align-items: center;
        `}

    opacity: ${({animation:t,media:a})=>a.isTablet?1:t==="fadein"?0:t==="fadeout"?1:0};
    ${({animation:t,firstRender:a,media:n})=>n.isTablet||a?"":`animation: ${t}-company 800ms ease 50ms forwards;`}

    & div {
        width: ${({media:t})=>t.isTablet?"auto":"415px"};
        padding: 0 30px;
    }

    & p {
        font-family: 'Noto Sans JP';
        font-weight: 400;
        font-size: ${({media:t})=>t.isTablet?14:24}px;
    }

    & p > span {
        font-family: Poppins;
    }
`,r=o.div`
    & > p {
        margin: 0;
        font-size: 15px;
        color: #c0c0c0;
    }

    & > p:nth-of-type(1) {
        font-size: ${({media:t})=>t.isTablet?24:26}px;
        font-weight: 700;
        color: #fff;
    }

    & > p:nth-of-type(3) {
        margin-top: 40px;
        margin-bottom: 20px;
    }
`,l=o.div`
    background: url('${g}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    height: ${({media:t})=>t.isTablet?74:120}px;
    margin-bottom: ${({media:t})=>t.isTablet?20:0}px;
`,x=o.div`
    margin-top: 40px;
    text-align: right;
`,i=o.p`
    margin: 0 60px;
    font-size: 16px !important;
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
`,p=o(f)`
    font-size: 12px;
    line-height: 30px;
    width: 120px !important;
    height: 30px;
    margin: 20px auto;
`,s="https://woorth.io/",c="https://notionforms.io/forms/eagis-contact-form",m=({withoutLink:t})=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement("span",null,'"'),"無限の価値を見つけて伸ばす",e.createElement("span",null,'"')),e.createElement("p",null,"を目標に",e.createElement("span",null,"Web3"),"領域の事業を進めるスタートアップ"),e.createElement("p",null,"ブロックチェーン開発、暗号資産ウォレット開発、",e.createElement("span",null,"NFT"),"発行支援等の",e.createElement("span",null,"Web3"),"領域を包括したサービスの提供を行っています。また今後は",e.createElement("span",null,"Web3"),"学習サービス等も提供予定です。"),e.createElement("p",null,"急成長するこの領域で正常に発展できる基盤を作るべく様々な事業に取り組んでいます。",e.createElement("span",null,"NFT"),"やその他",e.createElement("span",null,"Web3"),"事業でお困りのことやご相談があれば気軽にお問い合わせください。"),!t&&e.createElement(x,null,e.createElement(i,{onClick:()=>open(s)},"コーポレートサイトへ"),e.createElement(i,{onClick:()=>open(c)},"お問い合わせ")));export default({animation:t,firstRender:a,media:n})=>e.createElement(u,{animation:t,firstRender:a,disableClick:t!=="fadein"&&!n.isTablet,media:n},n.isTablet?e.createElement(e.Fragment,null,e.createElement("div",{style:{marginBottom:"20px",fontFamily:'"Noto Sans JP"',fontWeight:"500",fontSize:n.isMobile?"18px":"23px"}},"🏢会社概要"),e.createElement(l,{media:n}),e.createElement(r,{media:n},e.createElement(m,{withoutLink:!0}),e.createElement("div",{style:{height:"25px"}}),e.createElement(p,{action:()=>open(s)},"コーポレートサイト"),e.createElement(p,{action:()=>open(c)},"お問い合わせ"))):e.createElement(e.Fragment,null,e.createElement(r,{media:n},e.createElement(m,{withoutLink:!1})),e.createElement(l,{media:n})));
