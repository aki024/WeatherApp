import { storeData } from './getWeather';

let iconSrc;

const iconSet = () => {
    const weatherType = storeData.weather[0].icon;
    const weatherIcon = weatherType.slice(0, -1);
    switch (weatherIcon) {
        case '10':
            iconSrc = 'fa-cloud-rain';
            break;
        case '11': //thunderstorm
            iconSrc = 'fa-poo-storm';
            break;
        case '13': // snow
            iconSrc = 'fa-snowflake'
            break;
        case '01': //clear sky
            iconSrc = 'fa-sun'
            break;
        case '50': // mist
            iconSrc = 'fa-smog'
            break;
        case '09':
            iconSrc = 'fa-cloud-showers-heavy'
            break;
        case '02': //fewclouds
            iconSrc = 'fa-cloud-meatball'
            break;
        default:
            iconSrc = 'fa-cloud'


    }

}

export { iconSrc, iconSet };