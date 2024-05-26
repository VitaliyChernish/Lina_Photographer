import React from "react";
import s from './header.module.scss';
// import logo from '../../static/img/candleLogo.png'
import { motion } from 'framer-motion'

const HeaderContent = ({ y }) => {

    const resolution = window.innerWidth

    return (
        <div className={s.container}>
            {resolution <= 850
                ? <div className={s.mainHeader}>
                    <h1 className={s.mainTitle}><p>PHOTO</p><p>GALLERY</p></h1>
                </div>
                : <div className={s.mainHeader}>
                    <motion.h1 style={{ y }} className={s.mainTitle}><p>PHOTO</p><p>GALLERY</p></motion.h1>
                </div>
            }
        </div>
    )
}

export default HeaderContent;