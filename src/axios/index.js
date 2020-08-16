import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api',
  timeout: 30000,
  headers: { 
    "Content-Type": "application/x-www-form-urlencoded", 
    "Accept": "application/json", 
    "Currency-Type": localStorage.getItem('currency_type') || 'USD', 
  }
});

export default api;