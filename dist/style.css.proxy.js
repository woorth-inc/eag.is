if(typeof document!="undefined"){const t=`@keyframes disappear-about {
    from {
        opacity: 1;
        transform: rotateX(0);
    }
    to {
        opacity: 0;
        transform: rotateX(90deg);
        pointer-events: none;
    }
}

@keyframes appear-about {
    from {
        opacity: 0;
        transform: rotateX(-90deg);
    }
    to {
        opacity: 1;
        transform: rotateX(0deg);
        pointer-events: all;
    }
}

/* dummy */

@keyframes disappear-dummy {
    from {
        opacity: 1;
        transform: rotateX(0) translate(-50%, -50%);
    }
    to {
        opacity: 0;
        transform: rotateX(90deg) translate(-50%, -50%);
        pointer-events: none;
    }
}

@keyframes appear-dummy {
    from {
        opacity: 0;
        transform: rotateX(-90deg) translate(-50%, -50%);
    }
    to {
        opacity: 1;
        transform: rotateX(0deg) translate(-50%, -50%);
        pointer-events: all;
    }
}`,n=document.createElement("style"),e=document.createTextNode(t);n.type="text/css",n.appendChild(e),document.head.appendChild(n)}
