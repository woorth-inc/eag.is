import s from"../../../_snowpack/pkg/react.js";import r from"../../../_snowpack/pkg/styled-components.js";import i from"../../assets/images/partners-logo/microsoft.png.proxy.js";import p from"../../assets/images/partners-logo/microsoft_azure.png.proxy.js";import l from"../../assets/images/partners-logo/verylonganimals.png.proxy.js";import"./style.css.proxy.js";const m=r.div`
    font-size: 24px;
    text-align: center;
    display: block;

    ${({media:t})=>t.isTablet?`
            margin-top: ${t.isMobile?"10px":"50px"};
        `:`
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        `}

    opacity: ${({animation:t,media:o})=>o.isTablet?1:t==="fadein"?0:t==="fadeout"?1:0};
    ${({animation:t,firstRender:o,media:e})=>e.isTablet||o?"":`animation: ${t}-company 800ms ease 50ms forwards;`}
`,g=r.div`
    ${({media:t})=>t.isTablet?`
            display: grid;
            justify-content: center;
            grid-gap: 5px;

            align-items: center;
            margin: 0 auto;
        `:""}
`,c=r.img`
    height: ${({media:t})=>t.isMobile?"22px":t.isTablet?"30px":"40px"};
    margin: 10px ${({media:t})=>t.isTablet?"auto":"20px"};
`;export default({animation:t,firstRender:o,media:e})=>s.createElement(m,{animation:t,firstRender:o,media:e},e.isTablet&&s.createElement("div",{style:{marginBottom:"20px",fontFamily:'"Noto Sans JP"',fontWeight:"500",fontSize:e.isMobile?"18px":"23px"}},"🤝パートナー"),s.createElement(g,{media:e},[i,p,l].map((a,n)=>s.createElement(c,{media:e,src:a,key:n}))));
