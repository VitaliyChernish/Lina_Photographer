import React, { useRef, useState } from "react";
import s from './portfolio.module.scss';
import { Link } from "react-router-dom";
import './gallery.css'
import { serverApi } from "../../../../adminPanel/utils/consts";

const GalleryRight = ({ galleryData, y, motion }) => {

    const [index, setIndex] = useState(0)

    const button1Ref = useRef(null);

    const handleclick = (btn, elem, index) => {
        setIndex(index)
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
        <motion.div style={{ y }} className={s.gallery__right}>
            {galleryData.map((el, i) => {
                return (
                    <>
                        <div key={i} className={`${s.textBlock} ${s.galler__item}`}>
                            <h2 className={s.textBlock__h}>{el.name}</h2>
                            <p id="texts" className={s.textBlock__p}>{el.description}</p>
                        </div>

                        <img name={`photo__galleryElement${i}`} onClick={() => handleclick(button1Ref, `photo__galleryElement${i}`, i)}
                            id="galleryItemRight" className={s.galler__item} src={`${serverApi}/static/${el.photos[0].filename}`} alt="" />
                        <Link ref={button1Ref} to={`photoSlider/${index}`}></Link>
                    </>
                )
            })}
        </motion.div>
    )
}

export default GalleryRight;