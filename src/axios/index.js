import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api',
  timeout: 30000,
  headers: { 
    "Content-type": "application/x-www-form-urlencoded", 
    "Accept": "application/json", 
  }
});

export default api;