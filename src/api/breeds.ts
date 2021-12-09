import axios from 'axios';
import apiClient from './index';

export const getBreeds = async () => {
    try {
      const response = await axios.get('breeds');
      const breeds = response.data;
      //console.log('breeds', breeds);
      return breeds;
    } catch (error) {
      console.log(error);
    } 
  }

//   export const getPromisedBreeds = () => {
//   axios.get('breeds')
//   .then((response) => {
//       const breeds = response.data;
//       if (breeds.length > 0) {
//         return breeds
//     }})
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   })
// }