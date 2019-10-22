var isMobile = false;
var navbar= document.getElementById("navbar");
var sticky = navbar.offsetTop;
var darkmode = false;
//Darkmode
document.getElementById("darkbutton").onclick = function() {
    if (darkmode == false) {
        document.getElementById("pagestyle").setAttribute("href", "../styledark.css");
        document.getElementById("darkbutton").innerHTML = "Light Mode";
        var arr = document.getElementsByClassName("githubimg");
        //replace git icon with one from https://www.sccpre.cat/maxp/xiJiox/
        for (var i = 0; i < arr.length; i++)
            arr[i].setAttribute("src", "https://www.sccpre.cat/mypng/full/85-853569_github-icon-white-png.png");
    }
    else if (darkmode == true) {
        document.getElementById("pagestyle").setAttribute("href", "../style.css");
        darkmode = false;
        document.getElementById("darkbutton").innerHTML = "Dark Mode";
        var arr = document.getElementsByClassName("githubimg");
        //replace git icon with one from github assets
        for (var i = 0; i < arr.length; i++)
            arr[i].setAttribute("src", "https://github.githubassets.com/pinned-octocat.svg");
    }
}
//When App opens Detect if mobile
function onAwake() {
    onResize();
    if(/Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = true;
        document.getElementById("sections").style.margin = "0% 5%";
        
    }
}

function onResize(){
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
        navbar.classList.add("sticky")
        document.getElementById("sections").style.marginTop = "55px";
    } 
    else {
    navbar.classList.remove("sticky");
        document.getElementById("sections").style.marginTop = "auto";
    }
};
onAwake();