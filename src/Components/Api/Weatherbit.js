import axios from 'axios';


const Weatherbit = axios.create({
    baseURL: 'https://api.weatherbit.io/v2.0/',
    timeout: 1000
});

export default Weatherbit;