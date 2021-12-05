
export interface BreedImage {
    id: string | number;
    url: string;
  
  }
  
export interface Breed {
    id: string | number;
    image: BreedImage;
    name: string;
    description: string;
  }