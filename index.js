const apiKey = "a8dd288cc33ac1b79200d925b92856ed";
let city = "london"
function getData() {
    fetch(  
        "https://api.openweathermap.org/data/2.5/weather?q= "
        + city
        + "&units=metric&APPID="
        +apiKey
    ).then((response) => response.json())
    .then((data) => console.log(data))
}

getData();