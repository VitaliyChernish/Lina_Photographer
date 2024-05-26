import React from "react";
import s from './mainpageGallery.module.scss'

import background1 from '../../static/mainPageBackgroundGallery/background1.png'
import background2 from '../../static/mainPageBackgroundGallery/background2.png'
import background3 from '../../static/mainPageBackgroundGallery/background3.png'
import background4 from '../../static/mainPageBackgroundGallery/background4.png'
import background5 from '../../static/mainPageBackgroundGallery/background5.png'
import background6 from '../../static/mainPageBackgroundGallery/background6.png'

const backgroundGalleryImages = [
    { img: background1, style: '' },
    { img: background2, style: '' },
    { img: background3, style: '' },
    { img: background4, style: '' },
    { img: background5, style: '' },
    { img: background6, style: '' },
]
const MainPageGallery = () => {
    return (
        <div className={s.mainPageGallery}>
            {backgroundGalleryImages.map((el, i) => {
                return <div key={i} className={`${s.layers__item__background_gallery} ${s.backgroundImg}`} style={{ backgroundImage: `url(${el.img})` }}></div>
            })}
        </div>
    )
}

export default MainPageGallery;