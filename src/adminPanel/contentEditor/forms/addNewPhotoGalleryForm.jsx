import React from "react";
import s from './forms.module.scss'
import { useForm } from 'react-hook-form';
import { createPhotoGallery } from "../../utils/functions/create";

const AddNewPhotoGalleryForm = ({ setTrigger, trigger }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const formData = {
                index: new Date().getTime(),
                name: data.name || 'cardSelected_name',
                description: data.description || 'cardSelected.description',
                optionDescription: data.optionDescription || 'cardSelected.optionDescription',
                photos: data.photos || [] // Отримуємо завантажені фотографії
            };
            await createPhotoGallery(formData);
            await setTrigger(trigger)
        } catch (error) {
            console.error('Помилка при створенні галереї:', error);
        }
    };

    return (
       <>
       <h1>СТВОРЕННЯ ФОТО-ГАЛЕРЕЇ</h1>
        <form key={trigger} className={s.cardForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.cardValues}>
                <input
                    type="text"
                    id="name"
                    placeholder=" "
                    {...register("name")}
                    className={s.input}
                />
                <label className={s.label} htmlFor="name">Назва</label>
            </div>
            <div className={s.cardValues}>
                <input
                    type="text"
                    id="description"
                    placeholder=" "
                    {...register("description")}
                    className={s.input}
                />
                <label className={s.label} htmlFor="description">Опис</label>
            </div>
            <div className={s.cardValues}>
                <input
                    type="text"
                    id="optionDescription"
                    placeholder=" "
                    {...register("optionDescription")}
                    className={s.input}
                />
                <label className={s.label} htmlFor="optionDescription">Додатковий опис</label>
            </div>
            {/* Поля для завантаження фотографій */}
            <div className={s.cardValues}>
                <input
                    type="file"
                    id="photos"
                    multiple
                    {...register("photos")}
                    className={s.input}
                />
                <label className={s.label} htmlFor="photos">Фотографії</label>
            </div>
            <div className={s.buttons}>
                <button type="submit" className={s.save}>ЗБЕРЕГТИ ЗМІНИ</button>
            </div>
        </form>
       </>
    )
}

export default AddNewPhotoGalleryForm;


// import React, { useEffect, useState } from "react";
// import s from './forms.module.scss'
// import { serverApi } from "../../utils/consts";
// import { useForm } from 'react-hook-form';
// // import { updatePhotoGallery } from "../../utils/functions/update";
// import { createPhotoGallery } from "../../utils/functions/create";

// const AddNewPhotoGalleryForm = ({ trigger, setTrigger, cardSelected }) => {
//     const { register, handleSubmit } = useForm();

//     // const keysArr = Object.keys(cardSelected)
//     // const valuesArr = Object.values(cardSelected)
//     // const justValidKeys = keysArr.slice(2, valuesArr.length - 2)
//     // const justValidValues = valuesArr.slice(2, valuesArr.length - 2)

//     const onSubmit = async (data) => {
//         console.log(data);
//         await createPhotoGallery(
//             { index: new Date().getTime() }, { name: data.name ? data.name : 'cardSelected_name' }, { description: data.description ? data.description : 'cardSelected.description' },
//             { optionDescription: data.optionDescription ? data.optionDescription : 'cardSelected.optionDescription' },
//             // { image1: data.image1[0] }, { image2: data.image2[0] },
//             // { image3: data.image3[0] }, { image4: data.image4[0] }, { image5: data.image5[0] },
//             // { image6: data.image6[0] }, { image7: data.image7[0] }, { image8: data.image8[0] },
//             // { image9: data.image9[0] }, { image10: data.image10[0] }, { image11: data.image11[0] },
//             )
//         // await setTrigger(trigger += 1)
//     };



//     const downloadImage = (e, element) => {
//         const choiceElement = document.getElementById(element)
//         choiceElement.click()
//     }

//     return (
//         <form key={trigger} className={s.cardForm} onSubmit={handleSubmit(onSubmit)}>
//             <div className={s.buttons}>
//                 <button type="submit" className={s.save}>
//                     ЗБЕРЕГТИ ЗМІНИ
//                 </button>
//             </div>
//             <div className={s.cardValues}>
//                 <input
//                     type="text"
//                     id="name"
//                     placeholder=" "
//                     {...register("name")}
//                     className={s.input}
//                 />
//                 <label className={s.label} htmlFor="name">
//                     {/* {cardSelected.name.length > 20
//                     ? cardSelected.name.slice(0, 20) + '...' : cardSelected.name} */}
//                     </label>
//             </div>
//             <div className={s.cardValues}>
//                 <input
//                     type="text"
//                     id="description"
//                     placeholder=" "
//                     {...register("description")}
//                     className={s.input}
//                 />
//                 <label className={s.label} htmlFor="description">
//                     {/* {cardSelected.name.length > 20
//                     ? cardSelected.name.slice(0, 20) + '...' : cardSelected.name} */}
//                     </label>
//             </div>
//             <div className={s.cardValues}>
//                 <input
//                     type="text"
//                     id="optionDescription"
//                     placeholder=" "
//                     {...register("optionDescription")}
//                     className={s.input}
//                 />
//                 <label className={s.label} htmlFor="optionDescription">
//                     {/* {cardSelected.name.length > 20
//                     ? cardSelected.name.slice(0, 20) + '...' : cardSelected.name} */}
//                     </label>
//             </div>
            

//             {/* {justValidKeys.map((el, i) => {
//                 return (
//                     <div key={i} className={el.match('image') ? s.cardImage : s.cardValues}>
//                         <input
//                             type={el.match('image') ? 'file' : 'text'}
//                             id={el}
//                             placeholder=" "
//                             {...register(el)}
//                             className={s.input}
//                         />
//                         {el.match('image')
//                             ? <>
//                                 <div onClick={(e) => downloadImage(e, el)} >
//                                     <img title="завантажити нове зображення" src={`${serverApi}/static/${justValidValues[i]}`} alt="" />
//                                     <div className={s.download}>ЗАВАНТАЖИТИ</div>
//                                 </div>
//                             </>
//                             : <label className={s.label} htmlFor={el}>{el.match('image')
//                                 ? el
//                                 : justValidValues[i].slice(0, 20)}</label>}
//                     </div>
//                 )
//             })} */}

//             <div className={s.buttons}>
//                 <button type="submit" className={s.save}>
//                     ЗБЕРЕГТИ ЗМІНИ
//                 </button>
//             </div>
//         </form>
//     )
// }

// export default AddNewPhotoGalleryForm;