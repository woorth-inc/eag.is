import o from"../../../_snowpack/pkg/react.js";import i from"../../../_snowpack/pkg/styled-components.js";import r from"../../components/card/card.js";import p from"../../components/button/button.js";import"./style.css.proxy.js";const l=i(r)`
    position: absolute;
    transform: translateX(-50%);
    left: calc(50% + ${({id:t})=>["-300px","0px","300px"][t]});
    z-index: ${({id:t})=>3-t};

    opacity: ${({animation:t})=>t==="fadein"?0:1};
    animation: ${({animation:t})=>`${t}-card`} 800ms ease ${({id:t,animation:e,firstRender:n})=>(n?900:30)+(e==="fadein"?t*120:(2-t)*120)}ms forwards;
`,c=i.div`
    height: 198px;
    position: relative;
    bottom: 50px;
`,m=i.p`
    opacity: ${({animation:t})=>t==="fadein"?0:1};
    animation: ${({animation:t})=>`${t}-title`} 800ms ease ${({id:t,animation:e,firstRender:n})=>(n?900:30)+(e==="fadein"?t*120:(2-t)*120)}ms forwards;
`,d=i.div`
    font-weight: 900;
    font-size: 30px;
    text-align: center;
    transform: scale(1.4, 0.7);

    margin: 0 auto;
    position: relative;
    top: 30px;

    p {
        font-size: 130px;
        font-style: italic;
        margin: -40px 0;
    }

    ${[{id:1,style:`
                height: 320px;
                margin-top: 40px;
                background: linear-gradient(black 0, rgba(255,255,255,0) 100%);
            `},{id:3,style:`
                height: 320px;
                margin-top: -140px;
                background: linear-gradient(rgba(255,255,255,0) 0, black 100%);
            `}].map(({id:t,style:e})=>`
            p:nth-of-type(${t}):before {
                content: '';
                position: absolute;
                left: 0;

                width: 100%;
                z-index: 1;

                ${e}
            }
        `).join(`
`)}
`,u=i(p)`
    margin: 40px auto;
    opacity: ${({animation:t})=>t==="fadein"?0:1};
    animation: ${({animation:t})=>`${t}-button`} 800ms ease ${({firstRender:t})=>t?600:50}ms forwards;
`;export default({animation:t,firstRender:e})=>{const n=()=>{window.open("https://docs.eag.is/")};return o.createElement("div",null,o.createElement(d,null,["Easy to get","Aegis with","Eagis"].map((s,a)=>o.createElement(m,{animation:t,firstRender:e,id:a,key:a},s))),o.createElement(c,null,["safe","unsafe","unknown"].map((s,a)=>o.createElement(l,{type:"NFT",name:"Collection Name",icon:"https://lh3.googleusercontent.com/fIn8q46M8M9RnmMOz3Kf1sAKlJRUw3nFAt6xX25Bxtw62BAhrN0CyVTKZz8BQ3O4-C6sLaD2vlTU_sYHL7737-YaK2uKZwjvuikQhg=s0",state:s,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",animation:t,firstRender:e,id:a,key:a}))),o.createElement(u,{action:n,animation:t,firstRender:e},"Docs"))};
