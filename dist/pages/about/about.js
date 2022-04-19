import n from"../../../_snowpack/pkg/react.js";import a from"../../../_snowpack/pkg/styled-components.js";import i from"../../components/card/card.js";import"./style.css.proxy.js";const o=a.div`
    position: relative;
    margin: 0 auto;
    width: 500px;
`,r=a(i)`
    display: inline-block;

    position: absolute;
    left: 50%;

    z-index: ${t=>3-t.id};
`,p=a.div`
    width: 1200px;
    margin: 0 auto;

    font-weight: 900;
    font-size: 30px;
    text-align: center;

    position: relative;
    top: 100px;

    p {
        font-size: 150px;
        font-style: italic;
        margin: -40px 0;
    }

    ${[{id:1,style:`
                height: 100px;
                margin-top: 55px;
                background: linear-gradient(black 0, rgba(255,255,255,0) 100px);
            `},{id:3,style:`
                height: 200px;
                margin-top: 60px;
                background: linear-gradient(rgba(255,255,255,0) 0, black 100px);
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
`;export default()=>n.createElement(n.Fragment,null,n.createElement(p,null,["Easy to get","Aegis with","Eagis"].map((t,e)=>n.createElement("p",{key:e,style:{opacity:"0",animation:`fadein 800ms ease ${900+e*120}ms forwards`}},t))),n.createElement(o,null,["safe","unsafe","unknown"].map((t,e)=>n.createElement(r,{type:"NFT",name:"VeryLongAnimals",icon:"https://lh3.googleusercontent.com/fIn8q46M8M9RnmMOz3Kf1sAKlJRUw3nFAt6xX25Bxtw62BAhrN0CyVTKZz8BQ3O4-C6sLaD2vlTU_sYHL7737-YaK2uKZwjvuikQhg=s0",state:t,detail:"Super Long Animal",id:e,key:e}))));
