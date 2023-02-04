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
        document.querySelector(".temp").innerText = data.main.temp
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png"
        document.querySelector(".descrip").innerText = data.weather[0].description 
        document.querySelector(".humidity").innerText = data.main.humidity
        document.querySelector(".wind").innerText = data.clouds.all
    } )
}

document.querySelector("#search-btn").addEventListener("click" , getFormData)

function getFormData() {
    let cityName = document.getElementById("city-name");
    getData(cityName.value);
    console.log("hmm")
}