if(typeof document!="undefined"){const r=`@keyframes fadein-title {\r
    from {\r
        opacity: 0;\r
        transform: translateY(-70px);\r
    }\r
    to {\r
        opacity: 1;\r
        transform: translateY(0);\r
        pointer-events: all;\r
    }\r
}\r
\r
@keyframes fadein-card {\r
    from {\r
        opacity: 0;\r
        margin-left: 160px;\r
    }\r
    to {\r
        opacity: 1;\r
        margin-left: 0;\r
        pointer-events: all;\r
    }\r
}\r
\r
/* reverse */\r
\r
@keyframes fadeout-title {\r
    from {\r
        opacity: 1;\r
        transform: translateY(0);\r
    }\r
    to {\r
        opacity: 0;\r
        transform: translateY(-70px);\r
        pointer-events: none;\r
    }\r
}\r
\r
@keyframes fadeout-card {\r
    from {\r
        opacity: 1;\r
        margin-left: 0;\r
    }\r
    to {\r
        opacity: 0;\r
        margin-left: 160px;\r
        pointer-events: none;\r
    }\r
}`,n=document.createElement("style"),e=document.createTextNode(r);n.type="text/css",n.appendChild(e),document.head.appendChild(n)}