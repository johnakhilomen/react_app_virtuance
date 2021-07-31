import React, { useEffect } from 'react';
import styles from './Images.module.css';
import {useDispatch, useSelector} from 'react-redux'
import { ImageState, GetImagesThunk, UpdateImageThunk } from './imagesSlice';
import { Image } from './imagesSlice';

export function Images() {
  const dispatch = useDispatch();
  const {counter}: any = useSelector(state => state) as ImageState;
  const {value} = counter ; 
  
  const setName = (evt: any) => {
    const payload = {
      name: evt.target.name,
      newName: evt.target.value
    }
    dispatch(UpdateImageThunk(payload))
  }

  useEffect(() => {
    dispatch(GetImagesThunk());
  }, [dispatch])

  return (
    <div>
      <h1 className={styles.header}>Images</h1>
      <div className="imgsDisplay">
      {
        // show images and image data here
        value.map((img: Image, index: number) => {
          return <div key={index}>
            <img src={img.url} alt={img.name}></img>
            <input type="text" name={img.name} value={img.name} onChange={setName}></input>
          </div>
        })
      }
      </div>
    </div>
  );
}
