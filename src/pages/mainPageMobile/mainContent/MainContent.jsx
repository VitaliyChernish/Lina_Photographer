import React, { useState, useEffect } from "react";
import s from './mainContent.module.scss';
import mainImage from '../../../static/img/layer-24.png'
import MainPageMenu from "../../../widgets/menu/mainPageMenu/MainPageMenu";
import SocialMediaMenu from "../socialMediaMenuPC/SocialMediaMenu";
import PopapOrder from "../../../widgets/popapOrder/PopapOrder";
import ScrollToTop from "../../../widgets/scrollToTop/ScrollToTop";

const MainContent = () => {
    const [opacity, setOpacity] = useState(1)
    const [togglePopap, setTogglePopap] = useState(false)
    
    useEffect(() => {
        const topContent = document.getElementById('mainTopContentPC')

            const handleScroll = () => {
                const coefficient = Math.round((window.scrollY / window.innerHeight * 100))
                const opasty = ((1 - (coefficient / 100)).toFixed(2));
                setOpacity(opasty)
            };
    
            topContent.style.opacity = opacity
            // Додаємо слухача скролу при вході в компонент
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };

        // Прибираємо слухача при виході з компонента
        
    }, [opacity])

    return (
        <section className={s.wrapper} id="mainTopContentPC">
            {togglePopap && <PopapOrder setTogglePopap={setTogglePopap} /> }
            <div className={s.mainImage} style={{ backgroundImage: `url(${mainImage})` }}></div>
            <div className={s.content}>
                <div className={s.left}>
                    <div className={s.leftSide}>
                        <div className={s.blackRectangle}>
                            <div className={s.dots}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className={s.verticalName}>
                            Lina
                        </div>
                    </div>
                    <div className={s.rightSide}>
                        <div className={s.smmLinks}>
                            <span>instagram</span>
                            <span>---------</span>
                            <span>telegram</span>
                        </div>
                        <div className={s.name}>
                            Photographer
                        </div>
                        <div onClick={() => setTogglePopap(true)} className={s.buttonOrder}>
                            <a>Замовити зйомку</a>
                        </div>
                    </div>
                </div>
                <div className={s.right}>
                    <div className={s.menu}>
                        <MainPageMenu />
                    </div>
                    <div className={s.middle}>
                        Content creator
                    </div>
                    <div className={s.smmIcons}>
                        <SocialMediaMenu />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainContent;