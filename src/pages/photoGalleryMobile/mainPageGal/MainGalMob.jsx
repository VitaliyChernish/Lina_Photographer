import React, { useRef, useEffect, useState } from "react";
import s from './mainGalMob.module.scss'
import GalHeadMob from "../galHeadMob/galHeadMob";
import PortfolioMobile from "../galHeadMob/portfolioMob/portfolioMob";
// import Test from "../test/Test";

const MainGalMob = () => {
    const [opacity, setOpacity] = useState(1)

    useEffect(() => {
        const header = document.getElementById('headerPhotoGallery')

        if(window.innerWidth >= 600){
            const handleScroll = () => {
                const coefficient = Math.round((window.scrollY / window.innerHeight * 100))
                const opasty = ((1 - (coefficient / 100)).toFixed(2));
                setOpacity(opasty)
            };
    
            header.style.opacity = opacity
            // Додаємо слухача скролу при вході в компонент
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }

        // Прибираємо слухача при виході з компонента
        
    }, [opacity])

    return (
        <div >
            <div id="headerPhotoGallery" className={s.headerPhotoGallery}>
                <GalHeadMob />
            </div>
            <div id="portfolioPhotoGallery" className={s.portfolioPhotoGallery}>
                <PortfolioMobile />
            </div>
        </div>
    )
}

export default MainGalMob;