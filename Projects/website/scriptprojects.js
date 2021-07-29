var isMobile = false;

//When App opens Detect if mobile
function onAwake() {
    onResize();
    if(/Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = true;
        document.getElementById("core").style.margin = "0% 5%";
        
    }
}

function onResize(){
    if (window.innerWidth <= 630) {
        document.getElementById("core").style.minWidth = "0px";
    }
    else if (window.innerWidth > 630) {
        document.getElementById("core").style.minWidth = "600px";
    }
    
}

window.addEventListener("resize", onResize);

onAwake();