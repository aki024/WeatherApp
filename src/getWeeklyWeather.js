import { search, dayName, dayMaxTemp, dayMinTemp, dayIcon } from './domselectors';
import { dailyIconSet, dayIcons } from './weatherIcons';
let currentDay;


let arr3;
let maxTemp;
async function getWeeklyWeather() {
    try {
        let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&APPID=e082bdc54317ed290c9dc85f80fa8529&units=metric`, {
            mode: 'cors'
        })
        let currentWeekDay = new Date();
        currentDay = currentWeekDay.getDay();

        const weatherData = await response.json();
        const lon = await Math.round(weatherData.coord.lon * 100) / 100;
        const lat = await Math.round(weatherData.coord.lat * 100) / 100;



        const weekResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=e082bdc54317ed290c9dc85f80fa8529&units=metric`, {
            mode: 'cors'
        })
        const weekWeather = await weekResponse.json();

        let arr1 = weekDays.splice(currentDay + 1, weekDays.length);
        let arr2 = weekDays.splice(0, currentDay + 1);
        arr3 = [].concat(arr1, arr2);

        maxTemp = await weekWeather.daily;

        for (let i = 0; i < dayName.length; i++) {
            dayName[i].innerHTML = arr3[i];
            dayMaxTemp[i].innerHTML = Math.round(maxTemp[i].temp.max) + '℃';
            dayMinTemp[i].innerHTML = Math.round(maxTemp[i].temp.min) + '℃';
            dayIcon[i].classList.add('fa-solid');
            dailyIconSet();
            dayIcon[i].classList.add(dayIcons[i]);

        }
    } catch (er) {

        console.log(er);
    }
}

const defaultWeekWeather = async() => {
    try {
        let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', ];

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&APPID=e082bdc54317ed290c9dc85f80fa8529&units=metric`, {
            mode: 'cors'
        })
        let currentWeekDay = new Date();
        currentDay = currentWeekDay.getDay();
        const weatherData = await response.json();

        const lon = await Math.round(weatherData.coord.lon * 100) / 100;
        const lat = await Math.round(weatherData.coord.lat * 100) / 100;



        const weekResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=e082bdc54317ed290c9dc85f80fa8529&units=metric`, {
            mode: 'cors'
        })
        const weekWeather = await weekResponse.json();

        let arr1 = weekDays.splice(currentDay + 1, weekDays.length);
        let arr2 = weekDays.splice(0, currentDay + 1);
        arr3 = [].concat(arr1, arr2);

        maxTemp = await weekWeather.daily;

        for (let i = 0; i < dayName.length; i++) {
            dayName[i].innerHTML = arr3[i];
            dayMaxTemp[i].innerHTML = Math.round(maxTemp[i].temp.max) + '℃';
            dayMinTemp[i].innerHTML = Math.round(maxTemp[i].temp.min) + '℃';
            dayIcon[i].classList.add('fa-solid');
            dailyIconSet();
            dayIcon[i].classList.add(dayIcons[i]);

        }
    } catch (er) {

        console.log(er);
    }
}



export { getWeeklyWeather, maxTemp, defaultWeekWeather, };