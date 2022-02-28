import { container, weatherDescription } from "./domselectors";
const changeBg = () => {

    if (weatherDescription.innerHTML === 'Clear') {
        container.style.backgroundImage = "url('../src/images/1031_nc_sunny_weather_2-1.jpeg')"
    } else if (weatherDescription.innerHTML === 'Clouds') {
        container.style.backgroundImage = "url('../src/images/Cloudy-Weather-HD-Wallpapers-9.jpg')";
    } else if (weatherDescription.innerHTML === 'Snow') {
        container.style.backgroundImage = "url('../src/images/teahub.io-december-wallpaper-hd-2171611.jpg')";
    } else if (weatherDescription.innerHTML === 'Rain' || weatherDescription.innerHTML === 'Drizzle') {
        container.style.backgroundImage = "url('../src/images/Z0kmvgB-rain-hd-wallpaper.jpg')";
    } else if (weatherDescription.innerHTML === 'Thunderstorm') {
        container.style.backgroundImage = "url('../src/images/thunderstorm.jpg')";
    } else {
        container.style.backgroundImage = "url('../src/images/misty-weather-3.jpg')";
    }
}


export { changeBg }