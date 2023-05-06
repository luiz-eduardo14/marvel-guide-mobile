import { API_URL } from '@env';
import axios from 'axios';

const api = axios.create({
  baseURL: API_URL,
  timeout: 12000,
  method: 'GET',
});

export default api;
