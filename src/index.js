import './style.css';
// import { searchIcon } from './domselectors';
import { getWeather, eventListeners, weatherData, defaultWeather } from './getWeather';

const searchIcon = document.querySelector('.fa-solid.fa-magnifying-glass');
defaultWeather();


eventListeners();