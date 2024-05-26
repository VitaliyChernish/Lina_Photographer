import React from "react";
import s from './hederContentMob.module.scss';
// import logo from '../../static/img/candleLogo.png'

const HeaderContentMobile = () => {

    const resolution = window.innerWidth

    return (
        <div className={s.container}>
            <div className={s.mainHeader}>
                <h1 className={s.mainTitle}><p>Фото</p><p>Галерея</p></h1>
            </div>
        </div>
    )
}

export default HeaderContentMobile;