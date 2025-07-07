/*import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export default instance;*/
// client/src/api/axios.js
/*import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Add Authorization header to every request (if token exists)
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token'); // Make sure admin token is stored here
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default instance;*/

// src/api/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Attach token from localStorage
instance.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default instance;
