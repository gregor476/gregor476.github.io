var isMobile = false;
var navbar= document.getElementById("navbar");
var sticky = navbar.offsetTop;
//When App opens Detect if mobile
function onAwake() {
    onResize();
    if(/Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = true;
        
        document.getElementById("sections").style.margin = "0% 5%";
    }
}

function onResize(){
    var sticky = navbar.offsetTop;
    if (window.innerWidth <= 630) {
        document.getElementById("sections").style.minWidth = "0px";
    }
    else if (window.innerWidth > 630) {
        document.getElementById("sections").style.minWidth = "600px";
    }
    
}

window.addEventListener("resize", onResize);
window.onscroll = function() {
    if (window.pageYOffset >= sticky) {
        console.log("STICK");
        navbar.classList.add("sticky")
    } 
    else {
    navbar.classList.remove("sticky");
    }
};
onAwake();