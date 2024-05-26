import React, { useState } from "react";
import s from './createbtn.module.scss'
import { useDispatch } from "react-redux";
import {createGallery} from '../../store/slices/photoGallerySlice'

const CreateGalleryButton = () => {
    const dispatch = useDispatch()
    const addNewGallery = () => dispatch(createGallery(true))

    return(
        <div className={s.wrapper}>
            <button onClick={addNewGallery}>
                Створити галерею
            </button>
        </div>
    )
}

export default CreateGalleryButton;