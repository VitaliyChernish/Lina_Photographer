import React, { useEffect, useState } from "react";
import s from './photoslider.module.scss';
import './photoslider.css'
import { useParams } from "react-router";
import { getAllPhotoGallery } from "../../../../../adminPanel/utils/functions/get";
import { serverApi } from "../../../../../adminPanel/utils/consts";
import PagesNavigations from "../../../../../widgets/menuForPhotoGallery/PagesNavigations";

const btnsArr = [
    { name: 'Головна' },
    { name: 'Послуги' },
    { name: 'Умови' },
]

const PhotoSliderMain = () => {
    const [sliderData, setSliderData] = useState([])
    const [justImage, setJustImage] = useState([])

    // const arr = [oksana, kostya]
    const { title } = useParams()

    useEffect(() => {
        getAllPhotoGallery(setSliderData)
    }, [])

    const getValues = (sliderData) => {
        if (sliderData) {
            return setJustImage(sliderData.photos)
        }
    }

    useEffect(() => {
        getValues(sliderData[title])
    }, [sliderData])

    useEffect(() => {
        const photo = document.getElementById('photoImageForMountCompinent')
        photo.style.animation = 'mountSlider 1.5s'
    }, [])

    return (
        <>
            <PagesNavigations btnsArr={btnsArr} page1={''} page2={'pricelist'} page3={'conditions'} />
            <div className={s.wrapper}>
                <img id="photoImageForMountCompinent" className={s.photoImage} src={`${serverApi}/static/${justImage[0]}`} alt="photo_image" />
                <div className={s.items}>
                    {justImage.map((el, i) => {
                        return <div key={i} className={s.item} tabIndex='1' style={{ backgroundImage: `url(${serverApi}/static/${el.filename})` }}></div>
                    })}
                </div>
            </div>
        </>
    )
}

export default PhotoSliderMain