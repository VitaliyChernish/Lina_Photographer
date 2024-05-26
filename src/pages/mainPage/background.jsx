import React from "react";
import s from './main.module.scss';
import bgImg from '../../static/img/background1.jpg'

const Background = () => {
    return(
        <>
            <div className={s.background} style={{backgroundImage: window.innerWidth >= 850 ? `url(${bgImg})` : ``}}></div>
        </>
    )
}

export default Background;