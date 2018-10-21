import axios from 'axios';

const OpenWeatherMap = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    timeout: 1000,
});

export default OpenWeatherMap;