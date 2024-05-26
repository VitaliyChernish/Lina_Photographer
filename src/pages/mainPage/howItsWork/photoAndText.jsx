import React from "react";
import s from './howWork.module.scss';
import imgage from '../../../static/img/layer-28webp.webp'

const PhotoAndText = () => {
    return(
        <div className={s.photoTextWrapper}>
            <div className={s.image} style={{backgroundImage: `url(${imgage})`}}></div>
        </div>
    )
}

export default PhotoAndText;