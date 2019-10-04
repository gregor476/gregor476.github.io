function onAwake() {
    if(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        document.getElementById("sections").style.margin = "0% 2%";
    }
}
onAwake();