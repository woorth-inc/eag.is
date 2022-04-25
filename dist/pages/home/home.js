import n from"../../../_snowpack/pkg/react.js";import p from"../../../_snowpack/pkg/styled-components.js";import c from"../../components/card/card.js";import l from"../../components/button/button.js";import x from"../../assets/images/popup/safe.png.proxy.js";import d from"../../assets/images/popup/unsafe.png.proxy.js";import g from"../../assets/images/popup/unknown.png.proxy.js";import"./style.css.proxy.js";const u=p.div`
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
    animation: ${({animation:t})=>`${t}-card`} 800ms ease ${({id:t,animation:o,firstRender:e})=>(e?900:30)+(o==="fadein"?t*120:(2-t)*120)}ms forwards;
`,y=p.div`
    height: 198px;
    position: relative;
    bottom: ${({isMobile:t})=>t?"20px":"50px"};
`,h=p.p`
    opacity: ${({animation:t})=>t==="fadein"?0:1};
    animation: ${({animation:t})=>`${t}-title`} 800ms ease ${({id:t,animation:o,firstRender:e})=>(e?900:30)+(o==="fadein"?t*120:(2-t)*120)}ms forwards;
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
                `}].map(({id:o,style:e})=>`
                p:nth-of-type(${o}):before {
                    content: '';
                    position: absolute;
                    left: 0;

                    width: 100%;
                    z-index: 1;

                    ${e}
                }
            `).join(`
`)}
`,r=p(l)`
    margin: 40px auto;
    width: 110px;
    opacity: ${({animation:t})=>t==="fadein"?0:1};
    animation: ${({animation:t})=>`${t}-button`} 800ms ease ${({firstRender:t})=>t?600:50}ms forwards;
`;export default({animation:t,firstRender:o,isMobile:e})=>{const i=()=>{open("https://docs.eag.is/")},m=()=>{open("blank")};return n.createElement(u,{isMobile:e},n.createElement(b,{isMobile:e},["Easy to get","Aegis with","Eagis"].map((s,a)=>n.createElement(h,{animation:t,firstRender:o,id:a,key:a},s))),n.createElement(y,{isMobile:e},e?[x,d,g].map((s,a)=>n.createElement("img",{style:{position:"absolute",left:`calc(50% + ${[-300,0,300][a]}px)`,transform:"translateX(-50%)",zIndex:3-a,WebkitBoxShadow:"0px 0px 15px 7px rgba(0, 0, 0, 0.3)",boxShadow:"0px 0px 15px 7px rgba(0, 0, 0, 0.3)"},src:s,key:a})):["safe","unsafe","unknown"].map((s,a)=>n.createElement(f,{type:"NFT",name:"Collection Name",icon:"https://lh3.googleusercontent.com/fIn8q46M8M9RnmMOz3Kf1sAKlJRUw3nFAt6xX25Bxtw62BAhrN0CyVTKZz8BQ3O4-C6sLaD2vlTU_sYHL7737-YaK2uKZwjvuikQhg=s0",state:s,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",animation:t,firstRender:o,id:a,key:a}))),n.createElement("div",{style:e?{margin:"20px 0"}:{display:"flex",width:"300px",margin:"0 auto"}},n.createElement(r,{action:i,animation:t,firstRender:o},"Docs"),n.createElement(r,{action:m,animation:t,firstRender:o},"Pre-Register")))};
