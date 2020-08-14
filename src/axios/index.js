import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 30000,
  headers: { 
    "Content-type": "application/x-www-form-urlencoded", 
    "Accept": "application/json", 
  }
});

export default api;