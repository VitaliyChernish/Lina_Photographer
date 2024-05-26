import React from "react";
import s from './cameraScreen.module.scss';
import bgImg from '../../../static/img/cameraScreenJPEG2000.webp'
import MainPageMenu from "../../../widgets/menu/mainPageMenu/MainPageMenu";
import mainImg from '../../../static/img/layer-33webp.webp'
import OnCameraMenu from "./onCameraMenu/onCameraMenu";
import ContactsOnCamera from "./contactsOnCamera/contactsOnCamera";
import PhoneNumber from "./phoneNumber/phoneNumber";
import mainPageFirstScreenForm from '../../../static/img/mainPageFirstScreenFormWebp.webp'

const CameraScreen = () => {

    return (
        <div style={{height: document.documentElement.clientHeight}} className={s.cameraScreenWrapper}>
            <div className={s.cameraScreenContainer}>
                <div className={s.mainPageFirstScreenForm} style={{ backgroundImage: `url(${mainPageFirstScreenForm})` }} ></div>
                <div className={s.menuContainer}></div>
                <div className={s.mainImg} style={{ backgroundImage: `url(${mainImg})` }}></div>
                <div className={s.screenImage} style={{ backgroundImage: `url(${bgImg})` }}>
                        <div className={s.mainImgScreen}>
                            <PhoneNumber />
                            <ContactsOnCamera />
                            <OnCameraMenu />
                            <MainPageMenu />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default CameraScreen;