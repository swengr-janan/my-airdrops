// src/axios.js
import axios from 'axios';

// Create an axios instance with default settings
const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Use your backend API base URL
});

// Optional: Set up an interceptor to include the token in headers if present
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance; // Export the axios instance to be used across your app
