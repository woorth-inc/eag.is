import e from"../../../_snowpack/pkg/react.js";import a from"../../../_snowpack/pkg/styled-components.js";import i from"../../components/card/card.js";import r from"../../components/button/button.js";import"./style.css.proxy.js";const s=a.div`
    height: 198px;
    position: relative;
    bottom: 50px;
`,p=a(i)`
    position: absolute;
    transform: translateX(-50%);
    left: calc(50% + ${({id:t})=>["-300px","0px","300px"][t]});
    z-index: ${({id:t})=>3-t};

    opacity: 0;
    animation: fadein-card 800ms ease ${({id:t})=>900+t*120}ms forwards;
`,l=a.div`
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
            `}].map(({id:t,style:n})=>`
            p:nth-of-type(${t}):before {
                content: '';
                position: absolute;
                left: 0;

                width: 100%;
                z-index: 1;

                ${n}
            }
        `).join(`
`)}
`,c=a(r)`
    margin: 40px auto;
`;export default()=>{const t=()=>{window.open("https://docs.eag.is/")};return e.createElement(e.Fragment,null,e.createElement(l,null,["Easy to get","Aegis with","Eagis"].map((n,o)=>e.createElement("p",{key:o,style:{opacity:"0",animation:`fadein-title 800ms ease ${900+o*120}ms forwards`}},n))),e.createElement(s,null,["safe","unsafe","unknown"].map((n,o)=>e.createElement(p,{type:"NFT",name:"Collection Name",icon:"https://lh3.googleusercontent.com/fIn8q46M8M9RnmMOz3Kf1sAKlJRUw3nFAt6xX25Bxtw62BAhrN0CyVTKZz8BQ3O4-C6sLaD2vlTU_sYHL7737-YaK2uKZwjvuikQhg=s0",state:n,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",id:o,key:o}))),e.createElement(c,{action:t},"Docs"))};
