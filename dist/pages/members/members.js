import i from"../../../_snowpack/pkg/react.js";import s from"../../../_snowpack/pkg/styled-components.js";import l from"../../components/member/member.js";import p from"../../assets/images/members-icon/nakano_taisuke.jpg.proxy.js";import b from"../../assets/images/members-icon/hirakawa_haruto.jpg.proxy.js";import c from"../../assets/images/members-icon/oishi_reiya.jpg.proxy.js";import u from"../../assets/images/members-icon/okumura_kazuya.jpg.proxy.js";import"./style.css.proxy.js";const r=[{name:"Taisuke Nakano",icon:`/build/${p}`,twitter:"ta1suke",github:"ta1suke"},{name:"Haruto Hirakawa",icon:`/build/${b}`,twitter:"jpnykw",github:"jpnykw"},{name:"Reiya Oishi",icon:`/build/${c}`,twitter:"mi0256",github:"mio256"},{name:"Okumura Kazuya",icon:`/build/${u}`,twitter:"mixaz017",github:"mixaz017"}],m={isTablet:!1,isMobile:!1},d=s.div.attrs(e=>({media:e.media||m,disableClick:e.disableClick,animation:e.animation,firstRender:e.firstRender}))`
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
`,g=s.div.attrs(e=>({media:e.media||m,members:e.members}))`
  display: grid;
  grid-gap: 20px;
  ${({members:e,media:t})=>t.isTablet?`
      grid-template-rows: repeat(${e}, 1fr);
    `:`
      grid-template-columns: repeat(${e}, 1fr);
    `}
`;export default({animation:e,firstRender:t,media:a})=>i.createElement(d,{animation:e,firstRender:t,disableClick:e!=="fadein"&&!a.isTablet,media:a},a.isTablet&&i.createElement("div",{style:{marginBottom:"20px",fontFamily:'"Noto Sans JP"',fontWeight:"500",fontSize:a.isMobile?"18px":"23px"}},"👥メンバー"),i.createElement(g,{media:a,members:r.length},r.map((o,n)=>i.createElement(l,{...o,animation:e,firstRender:t,media:a,key:n}))));
