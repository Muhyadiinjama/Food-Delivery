import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // your Express backend URL
});

export const getFoods = () => API.get('/foods');
