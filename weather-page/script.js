const api = {
    key: "f6390f9510b1d3abe3b1f3ee2e03119b",
    base: " https://api.openweathermap.org/data/2.5/",
};

const alert = document.querySelector(".alert");
const header = document.querySelector("header");
const parg = document.querySelector("header p");

const searchBox = document.querySelector(".search-box");
const search = document.querySelector("header i");
search.addEventListener("click", function () {
    getResults(searchBox.value);
    let inputSearch = searchBox.value;
    console.log(inputSearch + "1111111111");
    searchBox.value = "";

    async function getISS() {
        const response = await fetch(
           " https://geocode.xyz/${inputSearch}?json=1"
        );

        console.log(inputSearch + "0000000000");
        console.log(response + "888888888");
        const data = await response.json();
        console.log(data + "7777777777");
        const latitude = data.latt;
        const longitude = data.longt;

        L.marker([latitude, longitude]).addTo(map);
    }

    getISS();
});
function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((weather) => {
            return weather.json();
        })
        .then(displayResults);
}

function displayResults(weather) {
    let city = document.querySelector(".location .city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector(".location .date");
    date.innerText = dateBuilder(now);

    let temp = document.querySelector(".current .temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let weather_el = document.querySelector(".current .weather");
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector(".hi-low");
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(
        weather.main.temp_max
    )}°c`;
}
function dateBuilder(d) {
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}
var map = L.map("map").setView([0, 0], 1);

L.tileLayer(
    "https://api.maptiler.com/maps/streets/%7Bz%7D/%7Bx%7D/%7By%7D.png?key=9Epy1Vsb9K1Jl3LXdPk0",
    {
        attribution:
            '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }
).addTo(map);