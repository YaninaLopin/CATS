import apiClient from './index';

export const addToFavorites = async (imageId: string | number) => {
    try {
      const response = await apiClient.post(`favourites`, {
        image_id: imageId,
      });
      const data = response.data;
    } catch (error) {
      console.log(error);
    }
  };    