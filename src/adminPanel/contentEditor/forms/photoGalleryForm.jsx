import React, { useEffect, useState } from "react";
import s from './forms.module.scss'
import { serverApi } from "../../utils/consts";
import { useForm } from 'react-hook-form';
import { updatePhotoGallery, updatePhotosForGallery } from "../../utils/functions/update";
import { deleteOnePhoto } from "../../utils/functions/delete";
import CrudBtnsPanel from "../../widgets/crudBtnsPanel/CrudBtnsPanel";

const PhotoGalleryForm = ({ trigger, setTrigger, cardSelected }) => {
    const { register, handleSubmit } = useForm();

    const keysArr = Object.keys(cardSelected)
    const valuesArr = Object.values(cardSelected)
    const justValidKeys = keysArr.slice(2, valuesArr.length - 2)
    const justValidValues = valuesArr.slice(2, valuesArr.length - 2)

    const onSubmit = async (data) => {
        await updatePhotoGallery(
            { index: cardSelected.index }, { name: data.name ? data.name : cardSelected.name },
            { description: data.description ? data.description : cardSelected.description },
            { optionDescription: data.optionDescription ? data.optionDescription : cardSelected.optionDescription }
        )
        await setTrigger(trigger += 1)
    };


    const downloadImage = (e, element) => {
        const choiceElement = document.getElementById(element)
        choiceElement.click()
    }

    const changePhoto = async (e, photoId) => {
        const photo = e.target.files[0]
        await updatePhotosForGallery(cardSelected.id, photoId, photo)
        await setTrigger(trigger += 1)
    }

    const deletePhotoForGallery = async (e, photoId) => {
        await deleteOnePhoto(photoId)
        await setTrigger(trigger += 1)
    }


    const allPhotosData = cardSelected.photos

    return (

        <>
            <div className={s.headerWrapper}>
                <h1>РЕДАГУВАННЯ ГАЛЕРЕЇ {cardSelected.name}</h1>
            </div>
            <CrudBtnsPanel
                cardSelected={cardSelected}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                setTrigger={setTrigger}
                trigger={trigger} />

            <form key={trigger} className={s.cardForm} onSubmit={handleSubmit(onSubmit)}>
                {justValidKeys.map((el, i) => {
                    return (
                        <div key={i} className={s.cardValues}>
                            <input
                                type={el.match('image') ? 'file' : 'text'}
                                id={el}
                                placeholder=" "
                                {...register(el)}
                                className={s.input}
                            />
                            <label className={s.label} htmlFor={el}>{justValidValues[i].slice(0, 20)}</label>
                        </div>
                    )
                })}
                {allPhotosData.map((el, i) => {
                    return (
                        <div key={i} className={s.cardImage}>
                            <input id={el.filename} onChange={(e) => changePhoto(e, el.id)} type="file" />
                            <img title="завантажити нове зображення" src={`${serverApi}/static/${el.filename}`} alt="" />
                            <div className={s.buttonsOnPhoto}>
                                <div onClick={(e) => downloadImage(e, el.filename)} className={s.download}>
                                    <span>ЗАВАНТАЖИТИ</span>
                                </div>
                                <div onClick={(e) => deletePhotoForGallery(e, el.id)} className={s.deletePhoto}>
                                    <span>ВИДАЛИТИ</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </form>
        </>
    )
}

export default PhotoGalleryForm;