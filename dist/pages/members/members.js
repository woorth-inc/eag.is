import r from"../../../_snowpack/pkg/react.js";import i from"../../../_snowpack/pkg/styled-components.js";import o from"../../components/member/member.js";import n from"../../assets/images/members-icon/nakano_taisuke.jpg.proxy.js";import p from"../../assets/images/members-icon/hirakawa_haruto.jpg.proxy.js";import u from"../../assets/images/members-icon/oishi_reiya.jpg.proxy.js";import c from"../../assets/images/members-icon/okumura_kazuya.jpg.proxy.js";import"./style.css.proxy.js";const g=i.div`
    font-size: 22px;
    text-align: center;

    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    display: grid;
    grid-template-columns: repeat(${({members:e})=>e}, 1fr);
    grid-gap: 60px;

    opacity: ${({animation:e})=>e==="fadein"?0:e==="fadeout"?1:0};
    ${({animation:e,firstRender:t})=>t?"":`animation: ${e}-member 800ms ease 50ms forwards;`}
`;export default({animation:e,firstRender:t})=>{const a=[{name:"Taisuke Nakano",icon:n,twitter:"ta1suke",github:"ta1suke"},{name:"Haruto Hirakawa",icon:p,twitter:"jpnykw",github:"jpnykw"},{name:"Reiya Oishi",icon:u,twitter:"mi0256",github:"mio256"},{name:"Okumura Kazuya",icon:c,twitter:"mixaz017",github:"mixaz017"}];return r.createElement(g,{animation:e,firstRender:t,members:a.length},a.map((s,m)=>r.createElement(o,{...s,key:m})))};
