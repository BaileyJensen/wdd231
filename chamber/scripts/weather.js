const currentTemp = document.querySelector("#temp");
const forecast = document.querySelector("#forecast");
const description = document.querySelector("#description");


const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.39&lon=-111.85&units=imperial&appid=f5f7d25573708f5c765bc6b5b3022d2f"


async function apiFetch() {
    try {
        const response = await fetch(url)
        const data = await response.json();

        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

apiFetch();