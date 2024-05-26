import React from "react";
import s from './galHeadMob.module.scss';
// import heroImage from '../../static/creative-scroll-website/img/hero1.png'
// import heroImage from '../../../../static/img/layer-33.png'
import heroImage from '../../../static/img/layer-33.png'
// import heroImage from '../../../../static/img/layer-333.JPG'
import HeaderContentMobile from "./headContentMob/headContentMob";

const GalHeadMob = () => {

    return (
        <header className={s.heroSection}>
            {/* <img id='heroSectionImage' className={s.heroMobile} src={heroImage} alt="heroImg" /> */}
            {/* <HeaderContentMobile/> */}
        </header>
    )
}

export default GalHeadMob;