import axios from 'axios';


const Apixu = axios.create({
    baseURL: 'http://api.apixu.com/v1/',
    timeout: 1000
});

export default Apixu;
