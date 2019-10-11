window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".description");
    let temperatureDegree = document.querySelector(".degree");
    let locationTimezone = document.querySelector(".timezone");

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/c5919bf140b1e8053275b054a58fe40b/${lat},${long}`;


            fetch(api)
            .then(response => {
                return response.json();
            })
            .then (data => {
                console.log(data);
                const {temperature, summary } = data.currently;
                //Set all DOM elements
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary
                locationTimezone.textContent = data.timezone;

            });
        });
    }
    else {
        h1.textContent = "Please Enable Geolocation"
    }


});