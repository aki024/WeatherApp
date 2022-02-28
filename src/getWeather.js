import { animate } from './animation';
import { changeBg } from './backgroundChange';
import { weatherLogo, feelsLike, windSpeed, humidity, search, weatherDescription, weatherLocation, weatherTemperature, currentDayL, searchIcon } from './domselectors';
import { getWeeklyWeather } from './getWeeklyWeather';

import { iconSet, iconSrc } from './weatherIcons';
let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentWeekDay = new Date();
let currentDay;
let currentDayString;
currentDay = currentWeekDay.getDay();
currentDayString = weekDays[currentDay];
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
        currentDayL.innerHTML = currentDayString;
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
        search.value = '';
    } catch (er) {

        alert('Invalid city name');
        console.error(er);
    }
}
const eventListeners = () => {
    const searchIcon2 = document.querySelector('.fa-magnifying-glass')
    searchIcon2.addEventListener('click', getWeather);
    searchIcon2.addEventListener('click', getWeeklyWeather);
    search.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            searchIcon.click();
        }
    })
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
        currentDayL.innerHTML = currentDayString;
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