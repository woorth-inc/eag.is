import a from"../../../_snowpack/pkg/react.js";import n from"../../../_snowpack/pkg/styled-components.js";import p from"../../components/card/card.js";import m from"../../components/button/button.js";import c from"../../assets/images/popup/safe.png.proxy.js";import d from"../../assets/images/popup/unsafe.png.proxy.js";import x from"../../assets/images/popup/unknown.png.proxy.js";import f from"../../assets/images/popup/all_in_one.png.proxy.js";import"./style.css.proxy.js";const r={isTablet:!1,isMobile:!1},b=n.div.attrs(t=>({media:t.media||r,disableClick:t.disableClick}))`
  pointer-events: ${({disableClick:t})=>t?"none":"all"};
  display: block;

  ${({media:t})=>t.isTablet?`
      position: relative;
      bottom: 50px;
    `:""}
`,g=n.div.attrs(t=>({media:t.media||r}))`
  position: relative;
  height: ${({media:t})=>t.isMobile?"162px":t.isTablet?"135px":"198px"};
  bottom: ${({media:t})=>t.isTablet?"21px":"59px"};
`,u=n(p).attrs(t=>({index:t.index||0,animation:t.animation,firstRender:t.firstRender,...t}))`
  position: absolute;
  transform: translateX(-50%);
  left: calc(50% + ${({index:t})=>["-300px","0px","300px"][t]});
  z-index: ${({index:t})=>3-t};

  -webkit-box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.3);

  opacity: ${({animation:t})=>t==="fadein"?0:1};
  animation: ${({animation:t})=>`${t}-card`} 800ms ease ${({index:t,firstRender:e})=>(e?900:50)+t*120}ms forwards;
`,$=n.img.attrs(t=>({animation:t.animation,index:t.index||0,firstRender:t.firstRender}))`
  position: absolute;
  width: 250px;

  transform: translateX(-50%);
  left: calc(50% + ${({index:t})=>[-170,0,170][t]}px);
  z-index: calc(3 - ${({index:t})=>t});

  -webkit-box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.3);

  opacity: ${({animation:t})=>t==="fadein"?0:1};
  animation: ${({animation:t})=>`${t}-card`} 800ms ease ${({index:t,firstRender:e})=>(e?900:50)+t*120}ms forwards;
`,y=n.img`
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  width: 400px;
  top: 70px;
`,h=n.p.attrs(t=>({animation:t.animation,index:t.index||0,firstRender:t.firstRender}))`
  opacity: ${({animation:t})=>t==="fadein"?0:1};
  animation: ${({animation:t})=>`${t}-title`} 800ms ease ${({index:t,firstRender:e})=>(e?900:50)+t*120}ms forwards;
`,w=n.div.attrs(t=>({media:t.media||r}))`
  font-weight: 900;
  font-size: 30px;
  text-align: center;
  ${({media:t})=>t.isMobile?"":"transform: scale(1.4, 0.7)"};

  margin: 0 auto;
  position: relative;
  top: ${({media:t})=>t.isMobile?"60px":"30px"};

  p {
    font-style: italic;
    font-size: ${({media:t})=>t.isMobile?"35px":t.isTablet?"60px":"130px"};
    margin: ${({media:t})=>t.isTablet?"-10px":"-40px"} 0;
  }

  ${({media:t})=>t.isTablet?`
    `:[{id:1,style:`
          height: 320px;
          margin-top: 40px;
          background: linear-gradient(black 0, rgba(255,255,255,0) 100%);
        `},{id:3,style:`
          height: 320px;
          margin-top: -140px;
          background: linear-gradient(rgba(255,255,255,0) 0, black 100%);
        `}].map(({id:e,style:i})=>`
      p:nth-of-type(${e}):before {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        z-index: 1;
        ${i}
      }
    `).join(`
`)}
`,l=n(m).attrs(t=>({media:t.media||r,animation:t.animation,firstRender:t.firstRender,style:t.style}))`
  width: 110px;
  margin: ${({media:t})=>t.isMobile?"20px":"40px"} auto;
  opacity: ${({animation:t})=>t==="fadein"?0:1};
  animation: ${({animation:t})=>`${t}-button`} 800ms ease ${({firstRender:t})=>t?600:50}ms forwards;
  ${({style:t})=>t||""}
`,k=n.div.attrs(t=>({media:t.media||r,animation:t.animation,firstRender:t.firstRender}))`
  margin: 0 auto;
  width: 90%;
  text-align: center;
  margin-top: ${({media:t})=>t.isTablet?"20px":"0"};

  font-family: "Noto Sans JP";
  font-weight: 700;

  & > p {
    margin: 0;
  }

  & > p:nth-of-type(1) {
    opacity: ${({animation:t})=>t==="fadein"?0:1};
    animation: ${({animation:t})=>`${t}-description-line1`} 800ms ease ${({firstRender:t})=>t?600:50}ms forwards;
  }

  & > p:nth-of-type(2) {
    opacity: ${({animation:t})=>t==="fadein"?0:1};
    animation: ${({animation:t})=>`${t}-description-line2`} 800ms ease ${({firstRender:t})=>t?600:50}ms forwards;
  }
`,T=()=>{open("https://docs.eag.is/")},E=()=>{open("https://chrome.google.com/webstore/detail/eagis-web3-security-tool/ichdnpogfildckjjhdgkanoonbapoaml?hl=ja")};export default({animation:t,firstRender:e,media:i})=>a.createElement(b,{media:i,disableClick:t!=="fadein"},a.createElement(w,{media:i},["Easy to get","Aegis with","Eagis"].map((s,o)=>a.createElement(h,{animation:t,firstRender:e,index:o,key:o},s))),a.createElement(g,{media:i},i.isMobile?a.createElement(y,{src:f,alt:"popup example"}):i.isTablet?[c,d,x].map((s,o)=>a.createElement($,{animation:t,firstRender:e,src:`/build/${s}`,index:o,key:o})):["safe","unsafe","unknown"].map((s,o)=>a.createElement(u,{type:"NFT",name:"Collection Name",icon:"https://lh3.googleusercontent.com/fIn8q46M8M9RnmMOz3Kf1sAKlJRUw3nFAt6xX25Bxtw62BAhrN0CyVTKZz8BQ3O4-C6sLaD2vlTU_sYHL7737-YaK2uKZwjvuikQhg=s0",state:s,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",animation:t,firstRender:e,index:o,key:o}))),i.isTablet&&a.createElement(k,{animation:t,firstRender:e,media:i},a.createElement("p",null,"NFT真贋鑑定や危険なサイトの判定を行う"),a.createElement("p",null,"Web3セキュリティツール")),a.createElement("div",{style:i.isMobile?{marginTop:"50px",marginBottom:"20px"}:{display:"flex",width:"300px",margin:"0 auto"}},a.createElement(l,{action:T,animation:t,firstRender:e,media:i},"Docs"),a.createElement(l,{action:E,animation:t,firstRender:e,media:i,style:`
          font-family: "Noto Sans JP";
          font-weight: 500;
        `},"インストール")));
