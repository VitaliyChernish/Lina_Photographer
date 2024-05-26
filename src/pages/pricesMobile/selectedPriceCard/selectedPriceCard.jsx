import React, { useEffect, useRef, useState } from "react";
import './selectedCard.css'
import s from './selectedPriceCard.module.scss';
import { timeIcon, priceIcon, galleryIcon } from "../../../utils/consts";
import priceCardBG1 from '../../../static/img/priceCard1.JPG'
import { Link } from 'react-router-dom'
import PopapOrder from "../../../widgets/popapOrder/PopapOrder";

const SelectedPriceCard = ({ choicedData }) => {
    const [togglePopap, setTogglePopap] = useState(false)

    const goToCalendar = useRef(null)
    const cardContent = useRef(null)
    const headerRef = useRef(null)
    const circlesRef = useRef(null)
    const cardBtn = useRef(null)


    useEffect(() => {
        const cardContentRef = cardContent.current.style
        const hearedDescrRef = headerRef.current.style
        const circlesDescrRef = circlesRef.current.style
        const cardButton = cardBtn.current.style
        setTimeout(() => {
            cardContentRef.animation = `contentDescrMount .8s forwards`
            hearedDescrRef.animation = `headerDescrMount .5s forwards`
            circlesDescrRef.animation = `circlesDescrMount .5s .2s forwards`
            cardButton.animation = `circlesDescrMount .4s .4s forwards`
        }, 500)
        return () => {
            // Anything in here is fired on component unmount.
            cardContentRef.animation = `contentDescrUnmount .8s forwards`
            hearedDescrRef.animation = `headerDescrUnmount .5s forwards`
            circlesDescrRef.animation = `circlesDescrUnmount .5s  forwards`
            cardButton.animation = `circlesDescrUnmount .5s  forwards`
        }
    }, [choicedData])

    return (
        <>
            {togglePopap && <PopapOrder setTogglePopap={setTogglePopap} />}
            <div id="wrapperOfOnePrice" className={s.wrapperOfOnePrice}>
                <div ref={headerRef} className={s.contentHeader}>
                    <h1>{choicedData.name}</h1>
                </div>
                <div className={s.contentDescription}>
                    <div ref={circlesRef} className={s.circles}>
                        <div className={s.circle}>
                            <img width={50} height={50} src={priceIcon} alt="" />
                            <div className={s.otions}>
                                <p>${choicedData.price}</p>
                            </div>
                        </div>
                        <div className={s.circle}>
                            <img width={50} height={50} src={timeIcon} alt="" />
                            <div className={s.otions}>
                                <p>{choicedData.option1}</p>
                                <p>години</p>
                            </div>
                        </div>
                        <div className={s.circle}>
                            <img width={50} height={50} src={galleryIcon} alt="" />
                            <div className={s.otions}>
                                <p>{choicedData.option3}</p>
                                <p>фото</p>
                            </div>
                        </div>
                    </div>
                    <div ref={cardContent} className={s.photoDescription}>
                        <div className={s.descrContent}>
                            <p>{choicedData.description}</p>
                            {/* <p>{choicedData.optionDescription}</p> */}
                            <p>{choicedData.option2}</p>
                            <p>{choicedData.option4}</p>
                            {/* <p>{choicedData.option5}</p> */}
                            <p>{choicedData.option6}</p>
                            <p>{choicedData.moreInfo}</p>
                        </div>
                        <div className={s.empty}>
                            <div className={s.angleMask}></div>
                        </div>
                        <div onClick={() => goToCalendar.current.click()} className={s.descrBottom}>
                            <p>Календар</p>
                            <Link ref={goToCalendar} to={'/calendar'} ></Link>
                        </div>
                        <div ref={cardBtn} onClick={() => setTogglePopap(!togglePopap)} className={s.descrBtn}>
                            <p style={{ pointerEvents: 'none' }} >хочу</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SelectedPriceCard;