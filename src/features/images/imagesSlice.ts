import { createSlice } from '@reduxjs/toolkit';
import { fetchImages, updateImages } from './imagesAPI';

// TODO
// Create Image type definition
export interface Image {
  id: string,
  name: string,
  url: string 
}

export interface ImageState {
  value: Image[];
  status: 'idle' | 'loading' | 'failed' | 'loaded';
}

const initialState: ImageState = {
  value: [],
  status: 'idle',
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    getImages(state, {payload}) {
      state.status = !payload ? 'failed' : 'loaded';
      state.value = payload
    },
    updateImage(state, {payload})
    {
      state.status = !payload ? 'failed' : 'loaded';
      state.value = payload
    }
  }
});

export const { getImages, updateImage } = imagesSlice.actions;

export const GetImagesThunk = () => async (dispatch: any) => {
  try {
    dispatch(getImages(await fetchImages()));
  } catch (e: any) {
    return console.error(e.message);
  }
}

export const UpdateImageThunk = (body: any) => async (dispatch: any) => {
  try {
    dispatch(updateImage(await updateImages(body)));
  } catch (e: any) {
    return console.error(e.message);
  }
}

const ImageSliceReducer = imagesSlice.reducer;
export default ImageSliceReducer;



