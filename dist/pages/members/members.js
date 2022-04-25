import r from"../../../_snowpack/pkg/react.js";import i from"../../../_snowpack/pkg/styled-components.js";import n from"../../components/member/member.js";import p from"../../assets/images/members-icon/nakano_taisuke.jpg.proxy.js";import l from"../../assets/images/members-icon/hirakawa_haruto.jpg.proxy.js";import c from"../../assets/images/members-icon/oishi_reiya.jpg.proxy.js";import u from"../../assets/images/members-icon/okumura_kazuya.jpg.proxy.js";import"./style.css.proxy.js";const g=i.div`
    pointer-events: ${({disableClick:e})=>e?"none":"all"};
    font-size: 22px;
    text-align: center;
    display: block;

    ${({media:e})=>e.isTablet?`
            margin-top: 20px;
            width: 300px;
            margin: 100px auto;
        `:`
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
        `}

    opacity: ${({animation:e,media:t})=>t.isTablet?1:e==="fadein"?0:e==="fadeout"?1:0};
    ${({animation:e,firstRender:t,media:a})=>a.isTablet||t?"":`animation: ${e}-member 800ms ease 50ms forwards;`}
`,b=i.div`
    display: grid;
    grid-gap: 20px;
    ${({members:e,media:t})=>t.isTablet?`
            grid-template-rows: repeat(${e}, 1fr);
        `:`
            grid-template-columns: repeat(${e}, 1fr);
        `}
`;export default({animation:e,firstRender:t,media:a})=>{const s=[{name:"Taisuke Nakano",icon:p,twitter:"ta1suke",github:"ta1suke"},{name:"Haruto Hirakawa",icon:l,twitter:"jpnykw",github:"jpnykw"},{name:"Reiya Oishi",icon:c,twitter:"mi0256",github:"mio256"},{name:"Okumura Kazuya",icon:u,twitter:"mixaz017",github:"mixaz017"}];return r.createElement(g,{animation:e,firstRender:t,disableClick:e!=="fadein"&&!a.isTablet,media:a},a.isTablet&&r.createElement("div",{style:{marginBottom:"20px",fontFamily:'"Noto Sans JP"',fontWeight:"500",fontSize:a.isMobile?"18px":"23px"}},"👥メンバー"),r.createElement(b,{media:a,members:s.length},s.map((o,m)=>r.createElement(n,{...o,animation:e,firstRender:t,media:a,key:m}))))};
