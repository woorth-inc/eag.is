import r,{useState as t,useRef as P}from"../_snowpack/pkg/react.js";import M from"../_snowpack/pkg/react-dom.js";import{useMediaQuery as A}from"../_snowpack/pkg/react-responsive.js";import R from"./components/header/header.js";import w from"./pages/home/home.js";import C from"./pages/members/members.js";import E from"./pages/company/company.js";import H from"./pages/partners/partners.js";import O from"./pages/pages/pages.js";import"./style.css.proxy.js";const T=()=>{const[m,i]=t("home"),[p,c]=t("fadein"),[l,b]=t(""),[g,d]=t(""),[f,u]=t(""),[y,k]=t(""),s=P(!0),n=A({query:"(max-width: 1100px)"}),o=(e,a)=>{switch(e){case"home":{c(a);break}case"members":{d(a);break}case"company":{b(a);break}case"partners":{u(a);break}case"pages":{k(a);break}}},j=e=>{s.current&&(s.current=!1),o(m,"fadeout"),setTimeout(()=>{o(e,"fadein"),i(e)},700)},h=[{delay:3,label:"company"},{delay:2,label:"members"},{delay:1,label:"home",active:!0},{delay:2,label:"partners"},{delay:3,label:"pages"}].map(e=>Object.assign(e,{onClick:()=>{j(e.label)}}));return r.createElement(r.Fragment,null,r.createElement(R,{items:h,isMobile:n}),[[w,p],[H,f],[C,g],[E,l],[O,y]].map(([e,a])=>r.createElement(e,{firstRender:s.current,isMobile:n,animation:a})))};M.render(r.createElement(T,null),document.getElementById("app"));
