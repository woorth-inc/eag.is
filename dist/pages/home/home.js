import a from"../../../_snowpack/pkg/react.js";import p from"../../../_snowpack/pkg/styled-components.js";import c from"../../components/card/card.js";import l from"../../components/button/button.js";import x from"../../assets/images/popup/safe.png.proxy.js";import d from"../../assets/images/popup/unsafe.png.proxy.js";import g from"../../assets/images/popup/unknown.png.proxy.js";import"./style.css.proxy.js";const u=p.div`
    ${({isMobile:t})=>t?`
            position: relative;
            bottom: 50px;
        `:""}
`,f=p(c)`
    position: absolute;
    transform: translateX(-50%);
    left: calc(50% + ${({id:t})=>["-300px","0px","300px"][t]});
    z-index: ${({id:t})=>3-t};

    -webkit-box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.3);

    opacity: ${({animation:t})=>t==="fadein"?0:1};
    animation: ${({animation:t})=>`${t}-card`} 800ms ease ${({id:t,firstRender:e})=>(e?900:50)+t*120}ms forwards;
`,y=p.div`
    height: 198px;
    position: relative;
    bottom: ${({isMobile:t})=>t?"20px":"50px"};
`,h=p.p`
    opacity: ${({animation:t})=>t==="fadein"?0:1};
    animation: ${({animation:t})=>`${t}-title`} 800ms ease ${({id:t,firstRender:e})=>(e?900:50)+t*120}ms forwards;
`,b=p.div`
    font-weight: 900;
    font-size: 30px;
    text-align: center;
    transform: scale(1.4, 0.7);

    margin: 0 auto;
    position: relative;
    top: 30px;

    p {
        font-style: italic;
        font-size: ${({isMobile:t})=>t?"60px":"130px"};
        margin: ${({isMobile:t})=>t?"-10px":"-40px"} 0;
    }

    ${({isMobile:t})=>t?`
        `:[{id:1,style:`
                    height: 320px;
                    margin-top: 40px;
                    background: linear-gradient(black 0, rgba(255,255,255,0) 100%);
                `},{id:3,style:`
                    height: 320px;
                    margin-top: -140px;
                    background: linear-gradient(rgba(255,255,255,0) 0, black 100%);
                `}].map(({id:e,style:n})=>`
                p:nth-of-type(${e}):before {
                    content: '';
                    position: absolute;
                    left: 0;

                    width: 100%;
                    z-index: 1;

                    ${n}
                }
            `).join(`
`)}
`,r=p(l)`
    margin: 40px auto;
    width: 110px;
    opacity: ${({animation:t})=>t==="fadein"?0:1};
    animation: ${({animation:t})=>`${t}-button`} 800ms ease ${({firstRender:t})=>t?600:50}ms forwards;
`;export default({animation:t,firstRender:e,isMobile:n})=>{const i=()=>{open("https://docs.eag.is/")},m=()=>{open("blank")};return a.createElement(u,{isMobile:n},a.createElement(b,{isMobile:n},["Easy to get","Aegis with","Eagis"].map((s,o)=>a.createElement(h,{animation:t,firstRender:e,id:o,key:o},s))),a.createElement(y,{isMobile:n},n?[x,d,g].map((s,o)=>a.createElement("img",{style:{position:"absolute",left:`calc(50% + ${[-300,0,300][o]}px)`,transform:"translateX(-50%)",zIndex:3-o,WebkitBoxShadow:"0px 0px 15px 7px rgba(0, 0, 0, 0.3)",boxShadow:"0px 0px 15px 7px rgba(0, 0, 0, 0.3)"},src:s,key:o})):["safe","unsafe","unknown"].map((s,o)=>a.createElement(f,{type:"NFT",name:"Collection Name",icon:"https://lh3.googleusercontent.com/fIn8q46M8M9RnmMOz3Kf1sAKlJRUw3nFAt6xX25Bxtw62BAhrN0CyVTKZz8BQ3O4-C6sLaD2vlTU_sYHL7737-YaK2uKZwjvuikQhg=s0",state:s,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",animation:t,firstRender:e,id:o,key:o}))),a.createElement("div",{style:n?{margin:"20px 0"}:{display:"flex",width:"300px",margin:"0 auto"}},a.createElement(r,{action:i,animation:t,firstRender:e},"Docs"),a.createElement(r,{action:m,animation:t,firstRender:e},"Pre-Register")))};
