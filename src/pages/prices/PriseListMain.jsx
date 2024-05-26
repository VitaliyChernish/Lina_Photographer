import React, { useEffect, useState } from "react";
import s from './priseList.module.scss'
import './pricesList.css'
import { getAllPriceCard } from "../../adminPanel/utils/functions/get";
import PagesNavigations from "../../widgets/menuForPhotoGallery/PagesNavigations";
import DiscountBanner from "../../widgets/discountBanner/DiscountBanner";
import { selectedPage } from "../../adminPanel/store/slices/mobileNavigationSlice";

//redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { whatSide } from '../../adminPanel/store/slices/swipeSideSlice'
//redux

const btnsArr = [
    { name: 'Головна', },
    { name: 'Фотогалерея' },
    { name: 'Умови' }
]

const PriseListMain = () => {
    const [priceCardData, setPriceCardData] = useState([])

    //redux
    const dispatch = useDispatch()
    const choicedSideSide = useSelector(state => state.side.side)
    //dispatch

    useEffect(() => {
        dispatch(selectedPage(window.location.pathname))
        getAllPriceCard(setPriceCardData)
        const screen = document.getElementById('pricesMainScreen');

        if (window.innerWidth <= 850) {
            if (choicedSideSide === 'right') {
                screen.style.animation = 'mountPriseListMobileRight .5s'
            } else if (choicedSideSide === 'left') {
                screen.style.animation = 'mountPriseListMobileLeft .5s'
            }

        }
        if (window.innerWidth > 850) {
            screen.style.animation = 'mountComponentPrice .5s'
        }


    }, [])

    const showBack = (index) => {
        const article = document.getElementById(`articlePrice${index}`);
        const articleBack = document.getElementById(`articlePriceBack${index}`);
        // Додайте перевірку, щоб уникнути помилок, якщо article не знайдено
        article.style.animation = 'rotateCard .5s forwards';
        setTimeout(() => {
            articleBack.style.animation = 'rotateCardBack .5s forwards';
        }, 500)
    }

    const showFront = (index) => {
        const article = document.getElementById(`articlePrice${index}`);
        const articleBack = document.getElementById(`articlePriceBack${index}`);
        // Додайте перевірку, щоб уникнути помилок, якщо article не знайдено
        articleBack.style.animation = 'rotateCard .5s forwards';
        setTimeout(() => {
            article.style.animation = 'rotateCardBack .5s forwards';
        }, 500)
    }



    //swipe control start
    const [startX, setStartX] = useState(0);
    const [swipe, setSwipe] = useState('')

    const handleTouchStart = (event) => {
        setStartX(event.touches[0].clientX)
    };

    const handleTouchEnd = (event) => {
        const endX = event.changedTouches[0].clientX;

        //left and right swipe start
        if (startX > endX && startX - endX >= 100) {
            // console.log('left');
            setTimeout(() => {
                setSwipe('left')
            }, 0)
        } else if (startX < endX && endX - startX >= 100) {
            // console.log('right');
            setTimeout(() => {
                setSwipe('right')
            }, 0)
        }
        //left and right swipe end
    };

    useEffect(() => {
        if (swipe === 'left') {
            const wrapperElement = document.getElementById('pricesMainScreen')
            wrapperElement.style.animation = 'swipeLeft .5s'
            dispatch(whatSide('left'))
            setTimeout(() => {
                const nawigateButton = document.getElementById('conditionsForSwipeId')
                nawigateButton.click()
            }, 500)
        }
        if (swipe === 'right') {
            const wrapperElement = document.getElementById('pricesMainScreen')
            wrapperElement.style.animation = 'swipeRight .5s'
            dispatch(whatSide('right'))
            setTimeout(() => {
                const nawigateButton = document.getElementById('galleryForSwipeId')
                nawigateButton.click()
            }, 500)
        }
    }, [swipe])

    //swipe control end

    return (
        <>
            {window.innerWidth >= 850
                && <PagesNavigations btnsArr={btnsArr} page1={''} page2={'photoGallery'} page3={'conditions'} />}
            <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className={s.pricesMainScreen}
                id="pricesMainScreen"  >

                <section id="test1" className={s.priceContainer}>
                    {priceCardData.map((el, i) => {
                        return (
                            <>
                                <article className={s.position}>
                                    <div id={`articlePrice${i}`} key={i} className={`${s.positionFront} ${s[el.styleFront]}`}>

                                        <h2>{el.name}</h2>
                                        <span>{el.description}</span>
                                        <div className={`${s.price} ${s[el.styleFront]}`}>${+el.price - (el.price / 100 * 10)}usd</div>
                                        <DiscountBanner showDiscountCard={el.showDiscountCard} />
                                        <div className={s.elementPos}><span>&#10004;</span><span>{el.option1}</span></div>
                                        <div className={s.elementPos}><span>&#10004;</span><span>{el.option2}</span></div>
                                        <div className={s.elementPos}><span>&#10004;</span><span>{el.option3}</span></div>
                                        <div className={s.elementPos}><span>&#10004;</span><span>{el.option4}</span></div>
                                        <div className={s.elementPos}><span>&#10004;</span><span>{el.option5}</span></div>

                                        <label style={{ backgroundColor: `${el.backgroundBtn}` }} className={s.labelMoreDetail} htmlFor={`moreDetail${i}`}>Показати більше</label>
                                        <button onClick={() => showBack(i)} id={`moreDetail${i}`}></button>
                                        <div style={{ backgroundColor: `${el.backgroundBtn}` }} className={s.buy}>buy</div>
                                    </div>

                                    <div id={`articlePriceBack${i}`} key={i} className={`${s.positionBack} ${s[el.styleBack]}`}>
                                        <h2>{el.name}</h2>
                                        <span>{el.description}</span>
                                        <div className={`${s.price} ${s[el.styleBack]}`}>${el.price}usd</div>

                                        <div className={s.elementPos}><span>&#10004;</span><span>{el.option6}</span></div>
                                        <div className={s.elementPos}><span>&#10004;</span><span>{el.position2}</span></div>
                                        <div className={s.elementPos}><span>&#10004;</span><span>{el.position3}</span></div>
                                        <div className={s.elementPos}><span>&#10004;</span><span>{el.position4}</span></div>
                                        <div className={s.elementPos}><span>&#10004;</span><span>{el.position5}</span></div>

                                        <label style={{ backgroundColor: `${el.backgroundBtn}` }} className={s.labelMoreDetail} htmlFor={`hideDetail${i}`}>повернути</label>
                                        <button onClick={() => showFront(i)} id={`hideDetail${i}`}></button>
                                        <div style={{ backgroundColor: `${el.backgroundBtn}` }} className={s.buy}>buy</div>
                                    </div>
                                </article>
                            </>
                        )
                    })}
                </section>
            </div>
        </>
    )
}

export default PriseListMain;