import { container, nextWeek, weatherDescription } from "./domselectors";
const changeBg = () => {

    if (weatherDescription.innerHTML === 'Clear') {
        container.style.backgroundImage = "url('./images/1031_nc_sunny_weather_2-1.jpeg')"
        nextWeek.style.backgroundColor = "rgba(0, 0, 0, 0.274)"
    } else if (weatherDescription.innerHTML === 'Clouds') {
        container.style.backgroundImage = "url('./images/Cloudy-Weather-HD-Wallpapers-9.jpg')";
        nextWeek.style.backgroundColor = "rgba(0, 0, 0, 0.274)"
    } else if (weatherDescription.innerHTML === 'Snow') {
        nextWeek.style.backgroundColor = '';
        container.style.backgroundImage = "url('./images/teahub.io-december-wallpaper-hd-2171611.jpg')";
    } else if (weatherDescription.innerHTML === 'Rain' || weatherDescription.innerHTML === 'Drizzle') {
        container.style.backgroundImage = "url('./images/Z0kmvgB-rain-hd-wallpaper.jpg')";
        nextWeek.style.backgroundColor = '';
    } else if (weatherDescription.innerHTML === 'Thunderstorm') {
        nextWeek.style.backgroundColor = '';
        container.style.backgroundImage = "url('./images/thunderstorm.jpg')";
    } else {
        nextWeek.style.backgroundColor = '';
        container.style.backgroundImage = "url('./images/misty-weather-3.jpg')";
    }
}


export { changeBg }