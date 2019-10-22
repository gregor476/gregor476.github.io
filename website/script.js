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
        //replace git icon with one from https://www.iconsdb.com/white-icons/github-10-icon.html
        for (var i = 0; i < arr.length; i++)
            arr[i].setAttribute("src", "data:image/png;base64,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");
        darkmode = true;
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