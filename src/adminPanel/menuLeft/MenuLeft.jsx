import React, { useEffect, useRef, useState } from "react";
import s from './menuLeft.module.scss';
import './menuLeft.css'
import logo from '../staticAdminPanel/logo.webp'
import settingsIcon from '../staticAdminPanel/icons/settingsIcon.png';
import statsWhite from '../staticAdminPanel/icons/statsWhite.png'
import usersWhite from '../staticAdminPanel/icons/usersWhite.png'
import tasksWhite from '../staticAdminPanel/icons/tasksWhite.png'
import editContentWhite from '../staticAdminPanel/icons/editContentWhite.png'
import { Link } from "react-router-dom";


const MenuLeft = ({setPage}) => {
    const [prevEvent, setPrevIvent] = useState('')
    const btnRefMain = useRef(null)
    const[animate, setAnimate] = useState(false)

    useEffect(() => {
        const changeElem = document.getElementById('changeMainContenFromAdminPanel')
        changeElem.style.animation = 'toggleMainBodyContentUnmount .5s'
    }, [animate])

    useEffect(() => {
        const firstElem = document.getElementById('firstIconFromLeftMenu')
        firstElem.classList.add('activeIconFromLeftMenu')
        setPrevIvent(firstElem)
    }, [setPage])

    const handleClick = (event, linka, page) => {
        setAnimate(!animate)

        setTimeout(() => {
            setPage(page)
        },350)
        setPrevIvent(event.target)
        if (event.target.classList.contains('activeIconFromLeftMenu')) {
            return null
        }
        if (prevEvent.classList) {
            prevEvent.classList.remove('activeIconFromLeftMenu')
        }
        event.target.classList.add('activeIconFromLeftMenu')
        if (linka) {
            return linka.current.click()
        }

    }

    return (
        <menu className={s.vidgetMenu}>
            <div className={s.menuForm}>
                <div title="головна сторінка сайту" onClick={(event) => handleClick(event, btnRefMain)} className={s.logo} style={{ backgroundImage: `url(${logo})` }}></div>
                <div className={s.menuItems}>
                    <span id="firstIconFromLeftMenu" title='статистика' onClick={(event) => handleClick(event, false, 'stats')} className={s.icon} style={{ backgroundImage: `url(${statsWhite})` }}></span>
                    <span title='користувачі' onClick={(event) => handleClick(event, false, 'users')} className={s.icon} style={{ backgroundImage: `url(${usersWhite})` }}></span>
                    <span title='планування задач' onClick={(event) => handleClick(event, false, 'planeer')} className={s.icon} style={{ backgroundImage: `url(${tasksWhite})` }}></span>
                    <span title='редагувати контент' onClick={(event) => handleClick(event, false, 'editContent')} className={s.icon} style={{ backgroundImage: `url(${editContentWhite})` }}></span>
                    <Link ref={btnRefMain} to='/'></Link>
                </div>
                <div title='settings' className={s.settingsIcon} style={{ backgroundImage: `url(${settingsIcon})` }}></div>
            </div>
        </menu>
    )
}

export default MenuLeft;