import axios from 'axios';

export const getBreads = async () => {
    try {
      const response = await axios.get('breeds');
      const breeds = response.data;
      //console.log('breeds', breeds);
      return breeds;
    } catch (error) {
      console.log(error);
    } 
  }

  export const getPromisedBreeds = () => {
  axios.get('breeds')
  .then(function (response) {
    // handle success
    const breeds = response.data;
      if (breeds.length > 0) {
        //console.log(breeds[0]);
        return breeds[0];
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });}