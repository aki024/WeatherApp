import { searchIcon, error, search, weatherDescription, weatherLocation, weatherTemperature } from './domselectors';

async function getWeeklyWeather() {
    try {


        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search.value},${search.value},${search.value}&appid=e082bdc54317ed290c9dc85f80fa8529`, {
            mode: 'cors'
        })

        const weatherData = await response.json();

        const lon = await Math.round(weatherData[0].lon * 100) / 100;
        const lat = await Math.round(weatherData[0].lat * 100) / 100;

        console.log(weatherData, lon, lat);

        const weekResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=e082bdc54317ed290c9dc85f80fa8529`, {
            mode: 'cors'
        })
        const weekWeather = await weekResponse.json();
        console.log(weekWeather);


    } catch (er) {

        console.log(er);
    }
}


export { getWeeklyWeather };