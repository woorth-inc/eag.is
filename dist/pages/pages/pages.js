import o from"../../../_snowpack/pkg/react.js";import s from"../../../_snowpack/pkg/styled-components.js";import"./style.css.proxy.js";const a=[{label:"Twitter",icon:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='%23fff'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'/%3E%3C/svg%3E",href:"https://twitter.com/eagisNFT"},{label:"Medium",icon:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512' fill='%23fff'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z'/%3E%3C/svg%3E",href:"https://medium.com/@eagis"},{label:"hello@eag.is",icon:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='%23fff'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z'/%3E%3C/svg%3E",href:"mailto:hello@eag.is"}],n={isTablet:!1,isMobile:!1},p=s.div.attrs(e=>({media:e.media||n,disableClick:e.disableClick,animation:e.animation,firstRender:e.firstRender}))`
  pointer-events: ${({disableClick:e})=>e?"none":"all"};
  text-align: left;
  display: block;

  ${({media:e})=>e.isTablet?`
      margin-top: 50px;
    `:`
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    `}

  /* TODO: モバイル時に表示させる */
  opacity: ${({animation:e,media:t})=>t.isTablet?1:e==="fadein"?0:e==="fadeout"?1:0};
  ${({animation:e,firstRender:t,media:i})=>i.isTablet||t?"":`animation: ${e}-pages 800ms ease 50ms forwards;`}
`,f=s.div.attrs(e=>({media:e.media||n,links:e.links}))`
  display: grid;
  ${({links:e,media:t})=>t.isTablet?`
      grid-template-columns: repeat(${e}, 1fr);
      place-items: center;
      width: 200px;
      margin: 0 auto;
    `:`
      grid-template-rows: repeat(${e}, 1fr);
    `}
`,g=s.div.attrs(e=>({size:e.size,icon:e.icon}))`
    font-size: 25px;
    color: white;
    margin: 7px 0;
    cursor: pointer;

    &::before {
        content: '';
        display: inline-block;
        width: ${({size:e})=>e};
        height: ${({size:e})=>e};

        ${({icon:e})=>`background: url("${e}")`};
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;

        margin-right: 10px;
        position: relative;
        top: 3px;
    }
`;export default({animation:e,firstRender:t,media:i})=>o.createElement(p,{animation:e,firstRender:t,disableClick:e!=="fadein"&&!i.isTablet,media:i},o.createElement(f,{links:a.length,media:i},a.map(({label:l,icon:c,href:r},m)=>o.createElement(g,{icon:c,size:"25px",onClick:()=>open(r),key:m},i.isTablet?"":l))));
