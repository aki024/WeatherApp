const searchIcon = document.querySelector('.fa-magnifying-glass');
const search = document.querySelector('#search');
const weatherDescription = document.querySelector('.weatherDescription');
const weatherLocation = document.querySelector('.weatherLocation');
const weatherTemperature = document.querySelector('.weatherTemperature');
const error = document.querySelector('.err');
const feelsLike = document.querySelector('.feelsLike');
const windSpeed = document.querySelector('.windSpeed')
const humidity = document.querySelector('.humidity')
const weatherLogo = document.querySelector('.weatherLogo');
const container = document.querySelector('.container')
const days = document.querySelectorAll('.day');
const dayName = document.querySelectorAll('.dayName');
const dayMaxTemp = document.querySelectorAll('.dayMaxTemp');
const dayMinTemp = document.querySelectorAll('.dayMinTemp');
const dayIcon = document.querySelectorAll('.dayIcon i');
const nextWeek = document.querySelector('.nextWeek');
const currentDayL = document.querySelector('.currentDay');





export { currentDayL, nextWeek, days, dayName, dayMaxTemp, dayMinTemp, dayIcon, searchIcon, weatherLogo, search, weatherDescription, container, weatherLocation, weatherTemperature, error, feelsLike, windSpeed, humidity };