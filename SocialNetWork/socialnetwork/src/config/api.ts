import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'http://localhost:4002',
});

HTTP.interceptors.request.use((req) => {
  const token = localStorage.getItem('authtoken');
  if (token) {
    req.headers['Authorization'] = `Bearer ${token}`;
  }
  return req;
});
