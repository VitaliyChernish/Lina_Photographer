import React from "react";
import s from './crudBtns.module.scss';
import { deletePhotoGallery } from "../../utils/functions/delete";
import { addPhotoForGallery } from "../../utils/functions/create";

const CrudBtnsPanel = ({cardSelected, handleSubmit, onSubmit, setTrigger, trigger}) => {

    const deleteGallery = async (e) => {
       await deletePhotoGallery(cardSelected.id)
       await setTrigger(trigger += 1)
    }

    const morePhotoForGallery = async (e) => {
        const photo = e.target.files[0]
        
        await addPhotoForGallery(photo, cardSelected.photos[0].photoGalleryId)
        await setTrigger(trigger += 1)
    }

    const addModePhoto = async () => {
        const el = document.getElementById('addMorePhotoForGalleryButton')
        el.click()
    }

    return(
        <div className={s.buttonsWrapper}>
        <div className={s.buttonsContainer}>
            <div className={s.buttons}>
                <button type="button" onClick={handleSubmit(onSubmit)} className={s.save}>
                    save
                </button>
            </div>
            <div className={s.buttons}>
                <div onClick={addModePhoto} className={s.add}>
                    <input id="addMorePhotoForGalleryButton" type="file" onChange={morePhotoForGallery} />
                    <span>add file</span>
                </div>
            </div>
            <div className={s.buttons}>
                <button type="button" onClick={deleteGallery} className={s.delete}>
                    delete
                </button>
            </div>
        </div>
    </div>
    )
}

export default CrudBtnsPanel;