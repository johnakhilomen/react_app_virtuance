import { Image} from './imagesSlice';
import axios, {AxiosResponse} from "axios";

axios.defaults.baseURL = "http://localhost:8080/";

const response = (response: AxiosResponse) => response.data;
const error = (err: any) => console.error(err);
type bodyRequest = {name : string; newName: string};

const request: any = {
    get: (url: string) => axios.get(url)
    .then(response)
    .catch(error),

    update: (url: string, body: bodyRequest) => axios.patch(url, body, {
      headers: {
        "Content-type": "Application/json"
      }
    })
    .then(response)
    .catch(error)
};

// A mock function to mimic making an async request for data
export function fetchImages() {
  return new Promise<Image[]>(async (resolve, reject) => {
    const images: Image[] = request.get("/images");
    return resolve(images);
  });
}

export function updateImages(body: bodyRequest) {
  return new Promise<any>(async (resolve, reject) => {
    const response = request.update("/update", body);
    return resolve(response);
  });
}