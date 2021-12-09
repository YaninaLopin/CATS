import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {'x-api-key': 'c8e9e444-da06-41c8-b094-581f2ccc1d5e'}
});

export default apiClient;