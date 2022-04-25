if(typeof document!="undefined"){const n=`@keyframes fadein-title {\r
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
@keyframes fadein-button {\r
    from {\r
        opacity: 0;\r
        transform: translateY(70px);\r
    }\r
    to {\r
        opacity: 1;\r
        transform: translateY(0);\r
        pointer-events: all;\r
    }\r
}\r
\r
@keyframes fadein-description-line1 {\r
    from {\r
        opacity: 0;\r
        transform: translateX(70px);\r
    }\r
    to {\r
        opacity: 1;\r
        transform: translateX(0);\r
        pointer-events: all;\r
    }\r
}\r
\r
@keyframes fadein-description-line2 {\r
    from {\r
        opacity: 0;\r
        transform: translateX(-70px);\r
    }\r
    to {\r
        opacity: 1;\r
        transform: translateX(0);\r
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
}\r
\r
@keyframes fadeout-button {\r
    from {\r
        opacity: 1;\r
        transform: translateY(0);\r
        pointer-events: all;\r
    }\r
    to {\r
        opacity: 0;\r
        transform: translateY(70px);\r
    }\r
}`,r=document.createElement("style"),t=document.createTextNode(n);r.type="text/css",r.appendChild(t),document.head.appendChild(r)}
