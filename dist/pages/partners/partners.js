import a from"../../../_snowpack/pkg/react.js";import o from"../../../_snowpack/pkg/styled-components.js";import p from"../../assets/images/partners-logo/microsoft.png.proxy.js";import l from"../../assets/images/partners-logo/microsoft_azure.png.proxy.js";import m from"../../assets/images/partners-logo/verylonganimals.png.proxy.js";import"./style.css.proxy.js";const i={isMobile:!1,isTablet:!1},c=o.div.attrs(t=>({media:t.media||i,animation:t.animation,firstRender:t.firstRender}))`
	font-size: 24px;
	text-align: center;
	display: block;

	${({media:t})=>t.isTablet?`
			margin-top: ${t.isMobile?"10px":"50px"};
		`:`
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		`}

	opacity: ${({animation:t,media:s})=>s.isTablet?1:t==="fadein"?0:t==="fadeout"?1:0};
	${({animation:t,firstRender:s,media:e})=>e.isTablet||s?"":`animation: ${t}-company 800ms ease 50ms forwards;`}
`,f=o.div.attrs(t=>({media:t.media||i}))`
	${({media:t})=>t.isTablet?`
			display: grid;
			justify-content: center;
			grid-gap: 5px;
			align-items: center;
			margin: 0 auto;
		`:""}
`,g=o.img.attrs(t=>({media:t.media||i}))`
	height: ${({media:t})=>t.isMobile?"22px":t.isTablet?"30px":"40px"};
	margin: 10px ${({media:t})=>t.isTablet?"auto":"20px"};
`;export default({animation:t,firstRender:s,media:e})=>a.createElement(c,{animation:t,firstRender:s,media:e},e.isTablet&&a.createElement("div",{style:{marginBottom:"20px",fontFamily:'"Noto Sans JP"',fontWeight:"500",fontSize:e.isMobile?"18px":"23px"}},"🤝パートナー"),a.createElement(f,{media:e},[p,l,m].map((r,n)=>a.createElement(g,{media:e,src:r,key:n}))));
