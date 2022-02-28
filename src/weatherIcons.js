import { dayName } from './domselectors';
import { storeData } from './getWeather';
import { maxTemp } from './getWeeklyWeather';

let iconSrc;
let dayIcons = [];

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

const dailyIconSet = () => {


    for (let i = 0; i < dayName.length; i++) {
        const weatherType = maxTemp[i].weather[0].icon;
        const weatherIcon = weatherType.slice(0, -1);

        switch (weatherIcon) {
            case '10':
                dayIcons[i] = 'fa-cloud-rain';
                break;
            case '11': //thunderstorm
                dayIcons[i] = 'fa-poo-storm';
                break;
            case '13': // snow
                dayIcons[i] = 'fa-snowflake'
                break;
            case '01': //clear sky
                dayIcons[i] = 'fa-sun'
                break;
            case '50': // mist
                dayIcons[i] = 'fa-smog'
                break;
            case '09':
                dayIcons[i] = 'fa-cloud-showers-heavy'
                break;
            case '02': //fewclouds
                dayIcons[i] = 'fa-cloud-meatball'
                break;
            default:
                dayIcons[i] = 'fa-cloud'

        }
    }



}

export { iconSrc, iconSet, dayIcons, dailyIconSet };