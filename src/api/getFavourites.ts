import axios from 'axios';
import apiClient from './index';

export const getFavoriteCats = () => {
    return apiClient
    .get('favourites')
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error);
    })
    }