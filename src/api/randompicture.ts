import axios from 'axios';
import { BreedImage } from '../types/breed';
import apiClient from './index';

export const getNewImage = async (breedId:string|number): Promise< BreedImage | undefined > => {
    try {
      const response = await axios.get(
        `images/search?breed_id=${breedId}&include_breeds=false`
      );
      const newcats = response.data;
     // console.log('newcats', newcats);
      if (newcats.length > 0) {
       // console.log(breeds[0]);
       // setImage(newcats[0]);
       return newcats[0];
      }
    } catch (error) {
      console.log(error);
    }
  };