import axios from 'axios';

const api = axios.create({
    baseURL: 'https://portifoliobackend.herokuapp.com',
    json: true
});

export default api;