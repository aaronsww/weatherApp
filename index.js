const apiKey = "a8dd288cc33ac1b79200d925b92856ed";
function getData(city) {
    fetch(  
        "https://api.openweathermap.org/data/2.5/weather?q= "
        + city
        + "&units=metric&APPID="
        +apiKey
    ).then((response) => response.json())
    .then((data) => {
        console.log(data)
        document.querySelector(".city").innerText = data.name
        document.querySelector(".temp").innerText = Math.round(data.main.temp)
        document.querySelector(".cel").innerText = "°C"
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png"
        document.querySelector(".descrip").innerText = data.weather[0].description 
        document.querySelector(".humidity").innerText = "Humidity : " + data.main.humidity + "%"
        document.querySelector(".wind").innerText = "Wind Speed : " + data.clouds.all + "km/h"
    } )
}

document.querySelector("#search-btn").addEventListener("click" , getFormData)

function getFormData() {
    let cityName = document.getElementById("city-name");
    getData(cityName.value);
}