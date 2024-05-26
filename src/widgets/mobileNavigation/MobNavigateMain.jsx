import React, { useEffect } from "react";
import s from './mobNavigateMain.module.scss';
import { Link } from "react-router-dom";
import './style.css';
import { backArrowIcon } from "../../utils/consts";
import { mobileButtons } from "../../utils/arrs";

//redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectedPage } from '../../adminPanel/store/slices/mobileNavigationSlice'
//redux

const MobNavigateMain = () => {

    //redux
    const state = useSelector(state => state.selectedPage.selectedPage)
    const dispatch = useDispatch()
    //redux

    useEffect(() => {
        const currentURL = window.location.pathname;
        mobileButtons.forEach((el) => {
            document.getElementById(`${el.blockId}`).style.top = '105%'
            if (el.link === currentURL) {
                document.getElementById(`${el.blockId}`).style.top = '-20%'
                document.getElementById(`${el.blockId}`).classList.add('active')
            }
        })

    }, [])


    useEffect(() => {
        const buttons = document.querySelectorAll('[name="mobileNawigationButtons"]')

        buttons.forEach((el, i) => {
            el.style.animation = 'navigateAnimationDisable .5s forwards'
            if (mobileButtons[i].link === state) {
                el.classList.add('active')
                el.style.animation = 'navigateAnimationActive .5s forwards'
            } else if (el.classList.contains('active')) {
                return (
                    el.classList.remove('active'),
                    el.style.animation = 'navigateAnimationDisable .5s forwards'
                )
            }
            
        })

    }, [state])

    const pageChanger = async (event, element) => {
        const page = document.getElementById(`${element.id}`)
        page.click()
        await dispatch(selectedPage(element.link))
    }

    return (
        <>
            <div onClick={() => window.history.back()} className={s.buttonBack}>
                <img src={backArrowIcon} alt="" />
            </div>
            <div className={s.wrapper}>
                <div className={s.mobNavContainer}>
                    <div className={s.backgroundContainer}></div>
                    {mobileButtons.map((el, i) => {
                        return (
                            <>
                                <div key={i} id={el.blockId} name='mobileNawigationButtons' onClick={(e) => pageChanger(e, el)} className={`${s.mobNavElem}`}>
                                    <div className={s.activeElem}></div>
                                    <span className='spanFromMobNavElem'></span>
                                    <img src={el.icon} alt="" />
                                    <Link id={el.id} to={el.link}></Link>
                                    <div className='elementName'>{el.name}</div>
                                </div>

                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default MobNavigateMain