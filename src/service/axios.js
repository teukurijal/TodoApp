import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://todos-restful-api.herokuapp.com/api',
});

module.exports = axiosInstance;
