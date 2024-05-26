import React, { useRef } from "react";
import s from './photoGallery.module.scss'
import { Link } from "react-router-dom";
import bgImg from '../../../static/img/cameraScreen.png'
import './menuStyle.css';

const MainPageMenu = () => {
    const btnRef1 = useRef()
    const btnRef2 = useRef()
    const btnRef3 = useRef()
    const btnRef4 = useRef()

    //mobile
    const btn2MobileClick = () => {
        const page = document.getElementById('mainPageWrapperContainer')
        page.style.animation = 'opacityMainPageUnmount .7s forwards';

        setTimeout(() => {
            btnRef3.current.click()
        }, 700)
    }

    const btn1MobileClick = () => {
        const page = document.getElementById('mainPageWrapperContainer')
        page.style.animation = 'opacityMainPageUnmount .7s forwards';

        setTimeout(() => {
            btnRef2.current.click()
        }, 700)
    }

    const btnMobileClick = () => {
        const page = document.getElementById('mainPageWrapperContainer')
        page.style.animation = 'opacityMainPageUnmount .7s forwards';

        setTimeout(() => {
            btnRef1.current.click()
        }, 700)
    }
    //mobile

    const btn3Click = () => {
        const page = document.getElementById('mainPageWrapperContainer')
        page.style.animation = 'opacityMainPageUnmount .7s forwards';

        setTimeout(() => {
            btnRef4.current.click()
        }, 700)
    }

    const btn2Click = () => {
        const page = document.getElementById('mainPageWrapperContainer')
        page.style.animation = 'opacityMainPageUnmount .7s forwards';

        setTimeout(() => {
            btnRef3.current.click()
        }, 700)
    }

    const btn1Click = () => {
        const page = document.getElementById('mainPageWrapperContainer')
        page.style.animation = 'opacityMainPageUnmount .7s forwards';

        setTimeout(() => {
            btnRef2.current.click()
        }, 700)
    }

    const btnClick = () => {
        const page = document.getElementById('mainPageWrapperContainer')
        page.style.animation = 'opacityMainPageUnmount .7s forwards';

        setTimeout(() => {
            btnRef1.current.click()
        }, 700)
    }


    return (
        <div className={s.menuMain}>
            <div>
                <a onClick={btnClick}>Галерея</a>
                <a onClick={btn1Click}>Послуги</a>
                <a onClick={btn3Click}>Календар</a>
                <a onClick={btn2Click}>Умови</a>
            </div>


            <Link style={{ display: 'none' }} ref={btnRef1} to='/photoGallery'></Link>
            <Link style={{ display: 'none' }} ref={btnRef2} to='/pricelist'></Link>
            <Link style={{ display: 'none' }} ref={btnRef4} to='/calendar'></Link>
            <Link style={{ display: 'none' }} ref={btnRef3} to='/conditions'></Link>
        </div>
    )
}

export default MainPageMenu