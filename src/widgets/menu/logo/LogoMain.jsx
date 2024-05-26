import React, { useRef } from "react";
import logo from '../../../static/img/logo.webp'
import s from './logo.module.scss';
import { Link } from "react-router-dom";



const LogoMain = () => {
    const btnRef1 = useRef(null)

    const goToMain = () => {
        btnRef1.current.click()
    }

    return (
        <>
            <Link ref={btnRef1} to='/'></Link>
            {window.innerWidth > 599
                ? <div onClick={goToMain} id="mainPageLogo" className={s.logo} style={{ backgroundImage: `url(${logo})` }}></div>
                : <img onClick={goToMain} className={s.logoMobile} src={logo} alt="logo" />}
        </>
    )
}

export default LogoMain;