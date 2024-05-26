import React from "react";
import s from './onCameraMenu.module.scss'
import photoImg from '../../../../widgets/mobileNavigation/static/icons/photos.png'
import pricetImg from '../../../../widgets/mobileNavigation/static/icons/price.png'
import conditions from '../../../../widgets/mobileNavigation/static/icons/conditions.png'

const OnCameraMenu = () => {
    return (
        <div className={s.onCameraMenuWrapper}>
            <div className={s.cameramunues}>
                <div id='photoImgCameraButton' className={s.menuItem}>
                    <img src={photoImg} alt="" />
                    <span>photo</span>
                </div>
                <div id='priceImgCameraButton' className={s.menuItem}>
                    <img src={pricetImg} alt="" />
                    <span>price</span>
                </div>

                <div id='conditionsImgCameraButton' className={s.menuItem}>
                    <img src={conditions} alt="" />
                    <span>conditions</span>
                </div>

            </div>
        </div>
    )
}

export default OnCameraMenu;