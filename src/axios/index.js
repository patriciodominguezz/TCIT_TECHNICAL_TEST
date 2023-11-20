import axiosImport from 'axios';

const axios = axiosImport.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default axios;