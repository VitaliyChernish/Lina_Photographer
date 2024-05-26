import React, { useEffect, useState } from "react";
import s from './main.module.scss'
import MainPageHeader from "../../widgets/mainPageHeader/mainPageHeader";
import CameraScreen from './cameraScreen/CameraScreen'
import AboutMe from "./aboutMe/aboutMe";
import Background from "./background";
import HowItsWork from "./howItsWork/HowItsWork";
import SocialMediaMenu from "../../widgets/socialMediaWidgets/socialMediaMain";
import './style.css'


import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis'
import TextPlugin from 'gsap/TextPlugin';

//redux
import { selectedPage } from "../../adminPanel/store/slices/mobileNavigationSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { whatSide } from '../../adminPanel/store/slices/swipeSideSlice'
//redux

gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitType);

const MainPage = () => {
    const lenis = new Lenis()
    const [startY, setStartY] = useState(0);
    const [startX, setStartX] = useState(0);
    const [position, setPosition] = useState(0)
    const [swipe, setSwipe] = useState('')

    //redux
    const dispatch = useDispatch()
    const choicedSideSide = useSelector(state => state.side.side)
    //dispatch

    useEffect(() => {
        dispatch(selectedPage(window.location.pathname))
        const page = document.getElementById('mainPageWrapperContainer')
        if (window.innerWidth <= 850) {
            page.style.animation = 'mountMainPageMobile .5s forwards ease'
        } else if (window.innerWidth > 850) {
            page.style.animation = 'opacityMainPageStarted .7s forwards'
        }

        setTimeout(() => {
            page.style.animation = ''
        }, 500)

        function raf(time) {
            lenis.raf(time * .5)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])


    return (
        <>
            <div
                className={s.mainWrapper}
                id="mainPageWrapperContainer">
                <Background />
                <MainPageHeader />
                <SocialMediaMenu />
                <CameraScreen />
                <AboutMe />
                <HowItsWork />
            </div>
        </>
    )
}

export default MainPage;