import axios from 'axios';

const http = axios.create({
  baseURL: '/api',
  // baseURL: 'http://localhost:5016/api/',
});

export default http;
