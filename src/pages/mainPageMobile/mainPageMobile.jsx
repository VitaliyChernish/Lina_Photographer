import React, { useState, useEffect } from "react";
import s from './mainPageMobile.module.scss';
import SocialMediaMenuMobile from './socialMediaMenuMobile/socialMediaMenuMobile'
import MainPageHeaderMobile from "./mainPageHeaderMobile/mainPageHeaderMobile";
import TopContentMobile from "./topContentMobile/topContentMobile";
import AboutMeMobile from "./aboutMeMobile/aboutMeMobile";
import HowItsWorkMobileLight from "./howItsWorkMobileLight/howItsWorkMobileLight";
import './style.css'
import ScrollToTop from "../../widgets/scrollToTop/ScrollToTop";
import Portfolio from "./portfolio/portfolioMain";

//redux
import { selectedPage } from "../../adminPanel/store/slices/mobileNavigationSlice";
import { useDispatch } from "react-redux";
import { whatSide } from '../../adminPanel/store/slices/swipeSideSlice'
import WhatIFilming from "./whatIFilming/whatIFilming";
import MainContent from "./mainContent/MainContent";
//redux

const MainPageMobile = () => {
    const [startY, setStartY] = useState(0);
    const [startX, setStartX] = useState(0);
    const [position, setPosition] = useState(0)
    const [swipe, setSwipe] = useState('')

    //redux
    const dispatch = useDispatch()
    //dispatch

    useEffect(() => {
        dispatch(selectedPage(window.location.pathname))
        const page = document.getElementById('mainPageWrapperContainer')
        page.style.animation = 'mountMainPageMobile .5s forwards ease'

        setTimeout(() => {
            page.style.animation = ''
        }, 500)
    }, [])

    //swipe control start

    /////disable default scroll
    // useEffect(() => {
    //     const handleWheel = (event) => {
    //         event.preventDefault();
    //     };

    //     const disableScroll = () => {
    //         window.addEventListener('wheel', handleWheel, { passive: false });
    //         window.addEventListener('touchmove', handleWheel, { passive: false });

    //         return () => {
    //             window.removeEventListener('wheel', handleWheel);
    //             window.removeEventListener('touchmove', handleWheel);
    //         };
    //     };

    //     disableScroll();

    //     // Додаткові ефекти або очищення тут

    //     return () => {
    //         // Очищення ефектів, якщо потрібно
    //         window.removeEventListener('wheel', handleWheel);
    //         window.removeEventListener('touchmove', handleWheel);
    //     };
    // }, []);

    /////disable default scroll

    const handleTouchStart = (event) => {
        setStartX(event.touches[0].clientX)
        setStartY(event.touches[0].clientY);
    };

    const handleTouchEnd = (event) => {
        const endY = event.changedTouches[0].clientY;
        const endX = event.changedTouches[0].clientX;

        //left and right swipe start
        if (startX > endX && startX - endX >= 100) {
            // console.log('left');
            setTimeout(() => {
                dispatch(whatSide('left'))
                setSwipe('left')
            }, 0)
        } else if (startX < endX && endX - startX >= 100) {
            // console.log('right');

            setTimeout(() => {
                setSwipe('right')
            }, 0)
        }
        //left and right swipe end

        //up and down swipe start
        // if (startY > endY && startY - endY >= 50) {
        //     // console.log('down');
        //     setTimeout(() => {
        //         setPosition(prev => prev + document.documentElement.clientHeight)
        //     }, 110)
        // } else if (startY < endY && endY - startY >= 50) {
        //     // console.log('up');
        //     setTimeout(() => {
        //         setPosition(prev => prev - document.documentElement.clientHeight)
        //     }, 110)
        // }
        //up and down swipe end
    };

    useEffect(() => {
        if (swipe === 'left') {
            const wrapperElement = document.getElementById('mainPageWrapperContainer')
            wrapperElement.style.animation = `unmountMainPageMobile .5s forwards ease-in-out`
            setTimeout(() => {
                const nawigateButton = document.getElementById('galleryForSwipeId')
                nawigateButton.click()
            }, 500)
        }

    }, [swipe])

    //up and down swipe start
    // const controlPosition = () => {
    //     if (position !== 0) {
    //         position < document.documentElement.clientHeight && setPosition(0)
    //         position >= (document.documentElement.clientHeight * 2) && setPosition(document.documentElement.clientHeight * 2)
    //     }
    // }

    // useEffect(() => {
    //     window.scrollTo({
    //         top: position,
    //         behavior: 'smooth' // Додамо плавність прокрутки
    //     });
    //     controlPosition()
    // }, [position])
    //up and down swipe end
    //swipe control end

    return (
        <>
            <ScrollToTop />
            <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className={s.mainWrapper}
                id="mainPageWrapperContainer">
                <MainPageHeaderMobile />
                <SocialMediaMenuMobile />
                <TopContentMobile />
                <MainContent />
                <AboutMeMobile />
                <WhatIFilming />
                <HowItsWorkMobileLight />
                <Portfolio /> 
            </div>
        </>
    )
}

export default MainPageMobile;