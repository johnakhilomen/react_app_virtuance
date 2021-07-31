import { Image } from './imagesSlice';

// A mock function to mimic making an async request for data
export function fetchImages() {
  return new Promise<Image[]>((resolve, reject) => {
    // make a request to get images
    return [];
  });
}
