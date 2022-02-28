import { animate } from './animation';
import { changeBg } from './backgroundChange';
import { weatherLogo, feelsLike, windSpeed, humidity, search, weatherDescription, weatherLocation, weatherTemperature } from './domselectors';
import { getWeeklyWeather } from './getWeeklyWeather';

import { iconSet, iconSrc } from './weatherIcons';

let storeData;

async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&APPID=e082bdc54317ed290c9dc85f80fa8529&units=metric`, {
            mode: 'cors'
        })




        const weatherData = await response.json();

        const celsius = await Math.round(weatherData.main.temp);
        const cityName = await weatherData.name;
        const description = await weatherData.weather[0].main;
        const feelsLikeTemp = await Math.round(weatherData.main.feels_like);
        const speedOfWind = await weatherData.wind.speed;
        const humidityPercentage = await weatherData.main.humidity;

        weatherDescription.innerHTML = description;
        weatherLocation.innerHTML = cityName;
        weatherTemperature.innerHTML = celsius + '℃';
        feelsLike.innerHTML = 'FEELS LIKE: ' + feelsLikeTemp + '℃';
        windSpeed.innerHTML = 'WIND: ' + speedOfWind + ' m/s';
        humidity.innerHTML = 'HUMIDITY: ' + humidityPercentage + '%';
        storeData = await weatherData;
        const icon = document.querySelector('.weatherLogo i');
        icon.classList.remove('fa-solid');
        icon.classList.remove(iconSrc);
        iconSet();



        icon.classList.add('fa-solid');
        icon.classList.add(iconSrc);
        weatherLogo.appendChild(icon);
        animate();
        changeBg();


    } catch (er) {

        alert('Invalid city name');
        console.error(er);
    }
}
const eventListeners = () => {
    const searchIcon2 = document.querySelector('.fa-magnifying-glass')
    searchIcon2.addEventListener('click', getWeather);
    searchIcon2.addEventListener('click', getWeeklyWeather);
}

const defaultWeather = async() => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&APPID=e082bdc54317ed290c9dc85f80fa8529&units=metric`, {
            mode: 'cors'
        })




        const weatherData = await response.json();

        const celsius = await Math.round(weatherData.main.temp);
        const cityName = await weatherData.name;
        const description = await weatherData.weather[0].main;
        const feelsLikeTemp = await Math.round(weatherData.main.feels_like);
        const speedOfWind = await weatherData.wind.speed;
        const humidityPercentage = await weatherData.main.humidity;

        weatherDescription.innerHTML = description;
        weatherLocation.innerHTML = cityName;
        weatherTemperature.innerHTML = celsius + '℃';
        feelsLike.innerHTML = 'FEELS LIKE: ' + feelsLikeTemp + '℃';
        windSpeed.innerHTML = 'WIND: ' + speedOfWind + ' m/s';
        humidity.innerHTML = 'HUMIDITY: ' + humidityPercentage + '%';
        storeData = await weatherData;
        const icon = document.querySelector('.weatherLogo i');
        icon.classList.remove('fa-solid');
        icon.classList.remove(iconSrc);
        iconSet();



        icon.classList.add('fa-solid');
        icon.classList.add(iconSrc);
        weatherLogo.appendChild(icon);
        animate();
        changeBg();

    } catch (er) {

        alert('Invalid argument');
        console.error(er);
    }
}


export { eventListeners, getWeather, storeData, defaultWeather };