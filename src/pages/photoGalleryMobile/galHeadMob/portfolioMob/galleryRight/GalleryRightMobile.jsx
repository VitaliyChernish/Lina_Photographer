import React, { useRef, useState } from "react";
import s from './galleryRight.module.scss';
import { Link } from "react-router-dom";
import { serverApi } from "../../../../../adminPanel/utils/consts";
import paper from '../../../../../static/img/texture/texturePaper.png'

const GalleryRightMobile = ({ galleryData }) => {

    const [galleryId, setGalleryId] = useState(0)

    const button1Ref = useRef(null);

    const handleclick = (btn, elem, index) => {
        setGalleryId(index)
        const element = document.querySelector(`[name = ${elem}]`)
        element.style.animation = 'goingToSlider, 1s'
        const mainBlockGallery = document.getElementById('portfolioPhotoGallery')

        const photoCollection = document.querySelector(`[name = ${elem}]`)
        photoCollection.style.animation = 'goingToSlider 1.5s'

        mainBlockGallery.style.animation = 'galleryTogglePage 1.5s'

        setTimeout(() => {
            btn.current.click();
        }, 1000)
    }

    return (
        <div className={s.gallery__right}>
            <div className={s.right}>
                {galleryData.map((el, index) => {
                    return (
                        <div key={index} className={`${s.textBlock} ${s.galler__item}`}>
                            <div className={s.content}>
                                <p id="texts" className={s.textBlock__p}>{el.description}</p>
                                <h2 className={s.textBlock__h}>{el.name}</h2>
                            </div>

                            <div className={s.imageContainer}>
                                <img name={`photo__galleryElement${index}`} onClick={() => handleclick(button1Ref, `photo__galleryElement${index}`, index)}
                                    id="galleryItemRight" className={s.galler__item} src={`${serverApi}/static/${el.photos[0].filename}`} alt="" />
                            </div>
                            <Link ref={button1Ref} to={`photoSlider/${galleryId}`}></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GalleryRightMobile;