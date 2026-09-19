const currentTemp = document.querySelector(".temp");
const forecast = document.querySelector("#forecast");
const description = document.querySelector("#description");


const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.39&lon=-111.85&units=imperial&appid=f5f7d25573708f5c765bc6b5b3022d2f"

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=40.39&lon=-111.85&units=imperial&appid=f5f7d25573708f5c765bc6b5b3022d2f"





async function apiFetch() {
    try {
        const response = await fetch(url)
        const data = await response.json();



        const forecastResponse = await fetch(forecastUrl)
        const forecastData = await forecastResponse.json();
        console.log(forecastData);

        displayResults(data, forecastData);



        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

apiFetch();


function displayResults(data, forecastData) {
    currentTemp.innerHTML = `Current Temp: ${data.main.temp}&deg;F`

    description.innerHTML = `Current Weather: ${data.weather[0].description.charAt(0).toUpperCase()}` + `${data.weather[0].description.slice(1)}`

    forecast.innerHTML = `${forecastData.list[0].dt_txt.split(" ")[0]} - ${forecastData.list[0].main.temp}&deg;F<br>`;

    forecast.innerHTML += `${forecastData.list[1].dt_txt.split(" ")[0]} - ${forecastData.list[1].main.temp}&deg;F<br>`;

    forecast.innerHTML += `${forecastData.list[10].dt_txt.split(" ")[0]} - ${forecastData.list[10].main.temp}&deg;F<br>`;






}



