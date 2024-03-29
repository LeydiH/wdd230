const baseURL = "https://leydih.github.io/wdd130/";
const linksURL = "https://leydih.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}
getLinks();

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=29.90&lon=-95.61&appid=66f5836c76e8f5ea0dae08aa7834ee0c';
const url = 'https://api.openweathermap.org/data/2.5/weather';

const latitude = 39.8687372;
const longitude = -3.9969766;


const queryParam = `?lat=${latitude}&lon=${longitude}&units=imperial&appid=66f5836c76e8f5ea0dae08aa7834ee0c`;


const fullUrl = `${url}${queryParam}`;
console.log(fullUrl);

async function apiFetch() {
    try {
        const response = await fetch(fullUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


apiFetch();


function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}