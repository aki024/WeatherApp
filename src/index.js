import './style.css';
import { eventListeners, defaultWeather } from './getWeather';
import { defaultWeekWeather } from './getWeeklyWeather';


defaultWeather();
defaultWeekWeather();

eventListeners();