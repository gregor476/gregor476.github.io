var isMobile = false;


function onAwake() {
    if(/Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = true;
        onResize();
        document.getElementById("sections").style.margin = "0% 5%";
    }
}
/*
function scrollFunction() {
    if (true) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("header").style.visibility = "hidden";
          } else {
            document.getElementById("header").style.visibility = "visible";
        }
    }   
}
window.onscroll = function() {scrollFunction()}; */
function onResize(){
    if (window.innerWidth <= 630) {
        document.getElementById("sections").style.minWidth = "0px";
    }
    else if (window.innerWidth > 630) {
        document.getElementById("sections").style.minWidth = "600px";
    }
    
}
window.addEventListener("resize", onResize);
onAwake();