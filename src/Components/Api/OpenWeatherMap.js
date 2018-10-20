import React from 'react';
import axios from 'axios';

const openWeatherMap = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    timeout: 1000,
});

export default openWeatherMap;