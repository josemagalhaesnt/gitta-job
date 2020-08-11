import axios from 'axios';

const url = 'https://jobs.github.com';

const api = axios.create({
    baseURL: `https://cors-anywhere.herokuapp.com/${url}`
});

export default api;
