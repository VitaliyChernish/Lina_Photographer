import React from "react";
import s from './topContentMobile.module.scss';
import MainPageMenu from "../../../widgets/menu/mainPageMenu/MainPageMenu";

import mainImg from '../../../static/img/layer-33webp.webp'
import MainPageGallery from "../../../widgets/mainPageGallery/MainPageGallery";

const TopContentMobile = () => {

    return (
        <div className={s.cameraScreenWrapper}>
            <div className={s.cameraScreenContainer}>
                {/* <div className={s.menuContainer}></div> */}
                <div className={s.mainImg} style={{ backgroundImage: `url(${mainImg})` }}></div>
                <div className={s.gallery}>
                    <MainPageGallery />
                    <MainPageMenu />
                </div>
            </div>
        </div>
    )
}

export default TopContentMobile;