import React from "react";
import s from './header.module.scss';
// import heroImage from '../../static/creative-scroll-website/img/hero1.png'
import heroImage from '../../../../static/img/layer-33.png'
// import heroImage from '../../../../static/img/layer-333.JPG'
import HeaderContent from "./HeaderContent";

const Header = ({ y, motion }) => {

    return (
        <header className={s.heroSection}>
            {window.innerWidth <= 850
                ? <img id='heroSectionImage' className={s.heroMobile} src={heroImage} alt="heroImg" />
                : <motion.img id='heroSectionImage' className={s.hero} src={heroImage} alt="heroImg" />
            }

            <HeaderContent y={y} motion={motion} />
        </header>
    )
}

export default Header;