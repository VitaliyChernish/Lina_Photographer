import React from "react";
import s from './cameraScreen.module.scss'
import bgImg from '../../../../static/img/cameraScreen.png'

const CameraScreen = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.backgroundImage} style={{backgroundImage: `url(${bgImg})`}}></div>
                <div className={s.menu}>
                    <li>Home</li>
                    <li>Photo</li>
                    <li>Prices</li>
                </div>
            </div>
        </div>
    )
}

export default CameraScreen;