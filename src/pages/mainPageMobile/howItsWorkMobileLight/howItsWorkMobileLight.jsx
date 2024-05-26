import React, { useRef, useState, useEffect } from "react";
import s from './howItsWorkMobileLight.module.scss'
import { Link } from "react-router-dom";
import PopapOrder from "../../../widgets/popapOrder/PopapOrder";
import MainPageMenu from "../../../widgets/menu/mainPageMenu/MainPageMenu";

const cardsArr = [
    { forFunc: 'goToCalendar', button: 'календар', number: 2, name: 'Бронювання', data: 'Будь ласка, оберіть зручні дату та час', color: '#3bf0ab96' },
    // { number: 1, name: 'Заявка', data: 'Знайомство та обговорення ідеї', color: '#6ae04d97' },
    { number: 3, name: 'Підготовка', data: 'Підготовка референсів та консультація щодо вбрання', color: '#47d6e9ae' },
    { umber: 4, name: 'Зйомка', data: 'зйомка', color: '#df48ecab' },
    { forFunc: 'goTogallery', button: 'галерея', nnumber: 5, name: 'Результат', data: 'Готові фотографії через 7-10 днів', color: '#e5f051b2' },
]

const HowItsWorkMobileLight = () => {
    const calendarRef = useRef(null)
    const galleryRef = useRef(null)

    const [opacity, setOpacity] = useState(0)
    const [togglePopap, setTogglePopap] = useState(false)

    useEffect(() => {
        const topContent = document.getElementById('howItsWorContentkPC')
        const rect = topContent.getBoundingClientRect();
        if (window.innerWidth >= 600) {

            const handleScrollPlus = () => {
                const coefficient = Math.round((window.scrollY / window.innerHeight * 100))
                const opasty = ((-1 + (coefficient / 100)).toFixed(2));
                setOpacity(opasty)
            };
            const handleScrollSubtract = () => {
                const coefficient = Math.round((window.scrollY / window.innerHeight * 100))
                const opasty = ((2 - (coefficient / 100)).toFixed(2));
                setOpacity(opasty)
            }
            topContent.style.opacity = opacity
            // Додаємо слухача скролу при вході в компонент
            // if (rect.top === 0) {
            //     window.addEventListener('scroll', handleScrollSubtract);
            // } else {
                window.addEventListener('scroll', handleScrollPlus);
            // }
            return () => {
                window.removeEventListener('scroll', handleScrollPlus, handleScrollSubtract);
            };
        }

        // Прибираємо слухача при виході з компонента

    }, [opacity])

    const buttonToggle = (el) => {
        const page = document.getElementById('mainPageWrapperContainer')
        page.style.animation = 'opacityMainPageUnmount .7s forwards';

        switch (el) {
            case 'goToCalendar': {
                return setTimeout(() => {
                    calendarRef.current.click()
                }, 750)
            } case 'goTogallery': {
                return setTimeout(() => {
                    galleryRef.current.click()
                }, 750)
            } default: {
                return
            }
        }

    }


    return (
        <div className={s.wrapper} id="howItsWorContentkPC">
            <Link ref={calendarRef} to='/calendar'></Link>
            <Link ref={galleryRef} to='/photoGallery'></Link>
            {togglePopap && <PopapOrder setTogglePopap={setTogglePopap} />}
            <div className={s.infoblock}>
                <div className={s.menu}>
                    <MainPageMenu />
                </div>
            <div className={s.header}>
                <h2>Попрацюємо</h2>
            </div>
            <div onClick={() => setTogglePopap(true)} className={s.buttonOrder}>
                        <a>Замовити зйомку</a>
                    </div>
            </div>
            <div className={s.cards}>
                {cardsArr.map((el, i) => {
                    return (
                        <div key={i} className={s.card} style={{ backgroundColor: 'el.color' }}>
                            <div className={s.number}>
                                <div className={s.smallRound}>
                                    <h2>{el.number}</h2>
                                </div>
                            </div>
                            <div className={s.description}>
                                <div className={s.content}>
                                    <h2>{el.name}</h2>
                                    <p>{el.data}</p>
                                </div>
                                {el.button &&
                                    <div onClick={() => buttonToggle(el.forFunc)} className={s.button}>
                                        <span>{el.button}</span>
                                    </div>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HowItsWorkMobileLight;