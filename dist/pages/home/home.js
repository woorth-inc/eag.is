import o from"../../../_snowpack/pkg/react.js";import p from"../../../_snowpack/pkg/styled-components.js";import c from"../../components/card/card.js";import m from"../../components/button/button.js";import x from"../../assets/images/popup/safe.png.proxy.js";import g from"../../assets/images/popup/unsafe.png.proxy.js";import d from"../../assets/images/popup/unknown.png.proxy.js";import b from"../../assets/images/popup/all_in_one.png.proxy.js";import"./style.css.proxy.js";const f=p.div`
    pointer-events: ${({disableClick:e})=>e?"none":"all"};
    display: block;

    ${({media:e})=>e.isTablet?`
            position: relative;
            bottom: 50px;
        `:""}
`,u=p.div`
    position: relative;
    height: ${({media:e})=>e.isMobile?"162px":e.isTablet?"135px":"198px"};
    bottom: ${({media:e})=>e.isTablet?"21px":"59px"};
`,$=p(c)`
    position: absolute;
    transform: translateX(-50%);
    left: calc(50% + ${({id:e})=>["-300px","0px","300px"][e]});
    z-index: ${({id:e})=>3-e};

    -webkit-box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.3);

    opacity: ${({animation:e})=>e==="fadein"?0:1};
    animation: ${({animation:e})=>`${e}-card`} 800ms ease ${({id:e,firstRender:t})=>(t?900:50)+e*120}ms forwards;
`,y=p.img`
    position: absolute;
    width: 250px;

    transform: translateX(-50%);
    left: calc(50% + ${({id:e})=>[-170,0,170][e]}px);
    z-index: calc(3 - ${({id:e})=>e});

    -webkit-box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.3);

    opacity: ${({animation:e})=>e==="fadein"?0:1};
    animation: ${({animation:e})=>`${e}-card`} 800ms ease ${({id:e,firstRender:t})=>(t?900:50)+e*120}ms forwards;
`,h=p.img`
    position: relative;
    transform: translateX(-50%);
    left: 50%;
    width: 400px;
    top: 70px;

`,w=p.p`
    opacity: ${({animation:e})=>e==="fadein"?0:1};
    animation: ${({animation:e})=>`${e}-title`} 800ms ease ${({id:e,firstRender:t})=>(t?900:50)+e*120}ms forwards;
`,k=p.div`
    font-weight: 900;
    font-size: 30px;
    text-align: center;
    ${({media:e})=>e.isMobile?"":"transform: scale(1.4, 0.7)"};

    margin: 0 auto;
    position: relative;
    top: ${({media:e})=>e.isMobile?"60px":"30px"};

    p {
        font-style: italic;
        font-size: ${({media:e})=>e.isMobile?"35px":e.isTablet?"60px":"130px"};
        margin: ${({media:e})=>e.isTablet?"-10px":"-40px"} 0;
    }

    ${({media:e})=>e.isTablet?`
        `:[{id:1,style:`
                    height: 320px;
                    margin-top: 40px;
                    background: linear-gradient(black 0, rgba(255,255,255,0) 100%);
                `},{id:3,style:`
                    height: 320px;
                    margin-top: -140px;
                    background: linear-gradient(rgba(255,255,255,0) 0, black 100%);
                `}].map(({id:t,style:a})=>`
                p:nth-of-type(${t}):before {
                    content: '';
                    position: absolute;
                    left: 0;

                    width: 100%;
                    z-index: 1;

                    ${a}
                }
            `).join(`
`)}
`,i=p(m)`
    width: 110px;
    margin: ${({media:e})=>e.isMobile?"20px":"40px"} auto;
    opacity: ${({animation:e})=>e==="fadein"?0:1};
    animation: ${({animation:e})=>`${e}-button`} 800ms ease ${({firstRender:e})=>e?600:50}ms forwards;
`,T=p.div`
    margin: 0 auto;
    width: 80%;
    text-align: center;
    margin-top: ${({media:e})=>e.isTablet?"20px":"0"};

    & > p {
        margin: 0;
    }

    & > p:nth-of-type(1) {
        opacity: ${({animation:e})=>e==="fadein"?0:1};
        animation: ${({animation:e})=>`${e}-description-line1`} 800ms ease ${({firstRender:e})=>e?600:50}ms forwards;
    }

    & > p:nth-of-type(2) {
        opacity: ${({animation:e})=>e==="fadein"?0:1};
        animation: ${({animation:e})=>`${e}-description-line2`} 800ms ease ${({firstRender:e})=>e?600:50}ms forwards;
    }
`;export default({animation:e,firstRender:t,media:a})=>{const r=()=>{open("https://docs.eag.is/")},l=()=>{open("https://notionforms.io/forms/eagis-pre-register-form")};return o.createElement(f,{media:a,disableClick:e!=="fadein"},o.createElement(k,{media:a},["Easy to get","Aegis with","Eagis"].map((n,s)=>o.createElement(w,{animation:e,firstRender:t,id:s,key:s},n))),o.createElement(u,{media:a},a.isMobile?o.createElement(h,{src:b,alt:"popup example"}):a.isTablet?[x,g,d].map((n,s)=>o.createElement(y,{animation:e,firstRender:t,src:n,id:s,key:s})):["safe","unsafe","unknown"].map((n,s)=>o.createElement($,{type:"NFT",name:"Collection Name",icon:"https://lh3.googleusercontent.com/fIn8q46M8M9RnmMOz3Kf1sAKlJRUw3nFAt6xX25Bxtw62BAhrN0CyVTKZz8BQ3O4-C6sLaD2vlTU_sYHL7737-YaK2uKZwjvuikQhg=s0",state:n,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",animation:e,firstRender:t,id:s,key:s}))),a.isTablet&&o.createElement(T,{animation:e,firstRender:t,media:a},o.createElement("p",null,"NFT真贋鑑定や危険なサイトの判定を行う"),o.createElement("p",null,"Web3時代の無料セキュリティツール")),o.createElement("div",{style:a.isMobile?{marginTop:"50px",marginBottom:"20px"}:{display:"flex",width:"300px",margin:"0 auto"}},o.createElement(i,{action:r,animation:e,firstRender:t,media:a},"Docs"),o.createElement(i,{action:l,animation:e,firstRender:t,media:a},"Pre-Register")))};
