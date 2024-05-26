import React, { useEffect, useState } from "react";
import s from './pricesListMobile.module.scss'
import './pricelist.css'
import { getAllPriceCard } from "../../adminPanel/utils/functions/get";
import { selectedPage } from "../../adminPanel/store/slices/mobileNavigationSlice";
import ScrollToTop from "../../widgets/scrollToTop/ScrollToTop";
import SelectedPriceCard from "./selectedPriceCard/selectedPriceCard";

import priceCardBG1 from '../../static/img/priceCard1.JPG'
import priceCardBG2 from '../../static/img/layer-31.png'
import priceCardBG3 from '../../static/img/priceCard3.JPG'
import priceCardBG4 from '../../static/img/priceCard4.jpg'

//redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { whatSide } from '../../adminPanel/store/slices/swipeSideSlice'
//redux

const backgrounds = [priceCardBG1, priceCardBG2, priceCardBG4]

const PriseListMobileMain = () => {
    const [priceCardData, setPriceCardData] = useState([])
    const [choicedData, setChoicedData] = useState({})

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

    useEffect(() => {
        setChoicedData(priceCardData[0])

        const elements = document.querySelectorAll('#oneOfMobileGalleryElement')
        elements.forEach((el, i) => {
            el.style.animation = `removeShadow .8s forwards`
        })
        const firstElem = document.querySelectorAll('#oneOfMobileGalleryElement')[0]
        setTimeout(() => {
            if (firstElem) {
                firstElem.style.animation = `addShadow 1s forwards`
            }
        }, 0)
    }, [priceCardData])

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

    const choiceImage = () => {
        const wrapper = document.getElementById('pricesMainScreen')

        if (window.innerHeight / window.innerWidth >= 1.9) {
            wrapper.style.setProperty('--height-wrapper', '100vh')
        } else {
            wrapper.style.setProperty('--height-wrapper', '85vh')
        }
    }

    useEffect(() => {
        choicedData && choiceImage()
    }, [choicedData])

    //swipe control end

    const choiceBlock = (e, element) => {
        const elements = document.querySelectorAll('#oneOfMobileGalleryElement')
        elements.forEach((el, i) => {
            el.style.animation = `removeShadow .8s forwards`
        })
        e.target.style.animation = `addShadow .8s forwards`
        setChoicedData(element)
    }

    return (
        <>

            <div
                className={s.wrapper}
                id="pricesMainScreen"  >
                <ScrollToTop />

                <div onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    className={s.photoImage}
                >
                    {choicedData &&
                        <SelectedPriceCard choicedData={choicedData} />
                    }
                </div>

                <div id="photoContent" className={s.items} >
                    <div className={s.sliderImages}
                        style={{
                            width: `${priceCardData.length * 40}vw`,
                            left: `${((priceCardData.length * 40) - 100) / 2}vw`,
                        }}
                    >
                        {priceCardData.map((el, i) => {
                            return (
                                <div id="oneOfMobileGalleryElement" key={i}
                                    onClick={(e) => choiceBlock(e, el)}
                                    className={s.item}
                                >
                                    <div style={{ pointerEvents: 'none' }} className={s.content}>
                                        <h2>{el.name}</h2>
                                        <p style={{fontSize: '16px'}}>${el.price}</p>
                                        <p>Зйомка {el.option1} години</p>
                                        <p>{el.option2}</p>
                                        <p>{el.option6}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default PriseListMobileMain;