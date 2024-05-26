import React, { useRef, useEffect, useState } from "react";
import s from './main.module.scss'
import Header from "../header/Header";
import Portfolio from "../portfolio/Portfolio";
import './style.css';
import {
    motion,
    useScroll,
    useTransform,
    MotionValue
} from "framer-motion";
// import Test from "../test/Test";

const Main = () => {
    const [opacity, setOpacity] = useState(1)
    function useParallax(value: MotionValue<number>, distance: number) {
        return useTransform(value, [0, 1], [-distance, distance]);
    }

    const container = useRef(null);
    const { scrollYProgress } = useScroll({ target: container });

    const y = useParallax(scrollYProgress, 50);
    const y1 = useParallax(scrollYProgress, -250);
    const y2 = useParallax(scrollYProgress, 150);

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
        <div ref={container}>
            <div id="headerPhotoGallery" className={s.headerPhotoGallery}>
                <Header y={y2} motion={motion} />
            </div>
            <div id="portfolioPhotoGallery" className={s.portfolioPhotoGallery}>
                <Portfolio y={y} y1={y1} motion={motion} />
            </div>
        </div>
    )
}

export default Main;