import React, { useEffect, useState } from "react";
import s from './aboutMeMobile.module.scss';
import PopapOrder from '../../../widgets/popapOrder/PopapOrder'

import linaImg2 from '../../../static/img/layer-2.png'
import collageBg from '../../../static/img/aboutMePhotoCollagewebp.webp'

const AboutMeMobile = () => {
    const [opacity, setOpacity] = useState(0)
    const [togglePopap, setTogglePopap] = useState(false)

    useEffect(() => {
        const topContent = document.getElementById('aboutMeContentPC')
        const rect = topContent.getBoundingClientRect();
        if (window.innerWidth >= 600) {

            const handleScrollPlus = () => {
                const coefficient = Math.round((window.scrollY / window.innerHeight * 100))
                const opasty = ((0 + (coefficient / 100)).toFixed(2));
                setOpacity(opasty)
            };
            const handleScrollSubtract = () => {
                const coefficient = Math.round((window.scrollY / window.innerHeight * 100))
                const opasty = ((2 - (coefficient / 100)).toFixed(2));
                setOpacity(opasty)
            }
            
            topContent.style.opacity = opacity
            // Додаємо слухача скролу при вході в компонент
            if(rect.top === 0) {
                window.addEventListener('scroll', handleScrollSubtract);
            } else {
                window.addEventListener('scroll', handleScrollPlus);
            }
            return () => {
                window.removeEventListener('scroll', handleScrollPlus, handleScrollSubtract);
            };
        }

        // Прибираємо слухача при виході з компонента
        
    }, [opacity])

    return (
        <>
            <div className={s.collage} >
                <div className={s.backgroundBlock} style={{ backgroundImage: `url(${collageBg})` }}></div>
            </div>
            {togglePopap && <PopapOrder setTogglePopap={setTogglePopap} />}
            <div className={s.aboutMe} id="aboutMeContentPC">
                <div className={s.content}>
                    <div className={s.header}>
                        <h2>Обожнюю людей та фотографувати.</h2>
                    </div>
                    <span>
                        <p>Впевнена, що кожен з нас може побачити себе з іншої сторони,
                            через фото. Побачити та полюбити, ще сильніше.</p>
                        <p>Мені цікаві різні формати зйомок, тому не обмежую себе лише студійними.
                            Підтримаю будь-яку вашу ідею, обговоримо всі деталі, знайдемо
                            найбільш комфортні образи і формати зйомки - та зробимо багато
                            красивих фото. </p>
                    </span>
                    <div onClick={() => setTogglePopap(true)} className={s.buttonOrder}>
                        <a>Замовити зйомку</a>
                    </div>

                </div>
                <div className={s.image}>
                    <img src={linaImg2} alt="" />
                </div>
            </div>
        </>
    )
}

export default AboutMeMobile;