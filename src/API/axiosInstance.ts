import axios from 'axios';

const API_TOKEN = 'ytPOkFfjVvopfcmJ6uSL9s5usLYn8sjd';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export { axiosInstance as axiosRequest };
