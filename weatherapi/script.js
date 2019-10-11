window.addEventListener('load', ()=> {
    let long;
    let lat;
    var text = document.querySelector(".text");


    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/c5919bf140b1e8053275b054a58fe40b/${lat},${long}`;
            
            console.log(lat + ", " + long);

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then (data => {
                //console.log(data);
                const {temperature} = data.currently;
                const {summary} = data.hourly;
                //Set all DOM elements
                
                whatToWear(text, temperature, summary);

            });
        });
    }
    else {
        text.textContent = "Please Enable Geolocation"
    }


});
function whatToWear(text, temperature, summary) {
    var tshirt = false;
    
    //Check Temperature
    //Hot
    if (temperature >= 80) {
        tshirt = true;
        text.textContent = "T-Shirt and Shorts";
        
    }
    //Fairly Cold
    else if (temperature < 55 && temperature >= 45) {
        text.textContent = "Jacket and Pants";
    }
    //Cold
    else if (temperature < 45) {
        text.textContent = "Layer Up it's a cold one";
    }
    //Chilly
    else if (temperature >= 55 && temperature <= 65) {
        text.textContent = "Long-Sleeve and Pants";
    }
    //Warm
    else if (temperature > 65 && temperature < 80) {
        tshirt = true;
        text.textContent = "T-Shirt and Pants";
    }
    else {
        alert("ERROR");
    }
    //Check rain
    if (summary.includes("rain") || summary.includes("storm") || summary.includes("Rain") ||
        summary.includes("Storm") || summary.includes("snow") || summary.includes("Snow")) {
        
        if (tshirt) {
            text.textContent = text.textContent + " and an Umbrella";
        }
        else {
            text.textContent = text.textContent + " with a Raincoat";
        }

    }
    

}