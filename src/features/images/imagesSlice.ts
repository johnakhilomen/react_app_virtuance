import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchImages } from './imagesAPI';

// TODO
// Create Image type definition
export interface Image {}

export interface ImageState {
  value: Image[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ImageState = {
  value: [],
  status: 'idle',
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {}
});

export const {  } = imagesSlice.actions;

export default imagesSlice.reducer;
