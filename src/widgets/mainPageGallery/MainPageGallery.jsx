import React, {useRef} from "react";
import s from './mainPageGallery.module.scss'
import gallery from '../../static/img/mainPagePhotoCollagewebp.webp'
import { Link } from "react-router-dom";

const MainPageGallery = () => {
    const goToGallery = useRef(null)
    return (
        <div className={s.wrapper}>
            <div className={s.mainBlock} >
                <img onClick={() => goToGallery.current.click()} src={gallery} alt="" />
                <Link ref={goToGallery} to={'/photoGallery'} ></Link>
            </div>
        </div>
    )
}

export default MainPageGallery;