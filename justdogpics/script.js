var image = document.querySelector(".image");

getpic();

if(/Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
    document.getElementById("text").innerHTML = "Tap for more Dogs!";
}

window.addEventListener('click', () => {
    getpic();
});
function getpic() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://dog.ceo/api/breeds/image/random`;
    

    fetch(api)
    .then(response => {
        return response.json();
    })
    .then (data => {
        //console.log(data);
        const {message} = data;
        
        image.src = message;

    });
}