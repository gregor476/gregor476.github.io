var image = document.querySelector(".image");

getpic();


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