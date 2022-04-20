if(typeof document!="undefined"){const n=`@keyframes disappear-about {\r
    from {\r
        opacity: 1;\r
        transform: rotateX(0);\r
    }\r
    to {\r
        opacity: 0;\r
        transform: rotateX(90deg);\r
        pointer-events: none;\r
    }\r
}\r
\r
@keyframes appear-about {\r
    from {\r
        opacity: 0;\r
        transform: rotateX(-90deg);\r
    }\r
    to {\r
        opacity: 1;\r
        transform: rotateX(0deg);\r
        pointer-events: all;\r
    }\r
}\r
\r
/* dummy */\r
\r
@keyframes disappear-dummy {\r
    from {\r
        opacity: 1;\r
        transform: rotateX(0) translate(-50%, -50%);\r
    }\r
    to {\r
        opacity: 0;\r
        transform: rotateX(90deg) translate(-50%, -50%);\r
        pointer-events: none;\r
    }\r
}\r
\r
@keyframes appear-dummy {\r
    from {\r
        opacity: 0;\r
        transform: rotateX(-90deg) translate(-50%, -50%);\r
    }\r
    to {\r
        opacity: 1;\r
        transform: rotateX(0deg) translate(-50%, -50%);\r
        pointer-events: all;\r
    }\r
}`,r=document.createElement("style"),t=document.createTextNode(n);r.type="text/css",r.appendChild(t),document.head.appendChild(r)}
