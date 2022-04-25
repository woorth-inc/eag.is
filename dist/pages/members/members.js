import s from"../../../_snowpack/pkg/react.js";import i from"../../../_snowpack/pkg/styled-components.js";import n from"../../components/member/member.js";import p from"../../assets/images/members-icon/nakano_taisuke.jpg.proxy.js";import u from"../../assets/images/members-icon/hirakawa_haruto.jpg.proxy.js";import c from"../../assets/images/members-icon/oishi_reiya.jpg.proxy.js";import g from"../../assets/images/members-icon/okumura_kazuya.jpg.proxy.js";import"./style.css.proxy.js";const k=i.div`
    font-size: 22px;
    text-align: center;

    ${({isMobile:e})=>e?`
            position: absolute;
            transform: translateX(-50%);
            left: 50%;
            margin-top: 300px;
        `:`
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
        `}

    display: grid;
    grid-gap: 40px;
    ${({members:e,isMobile:t})=>t?`
            grid-template-rows: repeat(${e}, 1fr);
        `:`
            grid-template-columns: repeat(${e}, 1fr);
        `}

    opacity: ${({animation:e,isMobile:t})=>t?1:e==="fadein"?0:e==="fadeout"?1:0};
    ${({animation:e,firstRender:t,isMobile:a})=>a||t?"":`animation: ${e}-member 800ms ease 50ms forwards;`}
`;export default({animation:e,firstRender:t,isMobile:a})=>{const r=[{name:"Taisuke Nakano",icon:p,twitter:"ta1suke",github:"ta1suke"},{name:"Haruto Hirakawa",icon:u,twitter:"jpnykw",github:"jpnykw"},{name:"Reiya Oishi",icon:c,twitter:"mi0256",github:"mio256"},{name:"Okumura Kazuya",icon:g,twitter:"mixaz017",github:"mixaz017"}];return s.createElement(k,{animation:e,firstRender:t,isMobile:a,members:r.length},r.map((o,m)=>s.createElement(n,{...o,animation:e,firstRender:t,key:m})))};
