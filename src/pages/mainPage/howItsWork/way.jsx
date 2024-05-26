import React from "react";
import s from './howWork.module.scss';
import backgroundWay1 from '../../../static/img/roadWayPunctir.png'
import { Link } from "react-router-dom";

const Way = () => {

    const goToCalendar = () => {
        const page = document.getElementById('mainPageWrapperContainer')
        const calendarButton = document.getElementById('goingToCalendarAnimation')
        
        page.style.animation = 'opacityMainPageUnmount .7s forwards';

        setTimeout(() => {
            calendarButton.click()
        }, 750)
    }

    return (
        <div className={s.wayWrapper} style={{ backgroundImage: `url(${backgroundWay1})` }}>
            <div className={s.wayElements}>
                <div><p>1</p><span>знайомство та обговорення ідеї</span></div>
                <div onClick={goToCalendar} ><p>2</p><span>оплата, бронювання дати та студії</span></div>
                <div><p>3</p><span>підготовка референсів та консультація щодо вбрання</span></div>
                <div><p>4</p><span>зйомка</span></div>
                <div><p>5</p><span>готові фотографії через 7-10 днів</span></div>
            </div>
            <Link id="goingToCalendarAnimation" to='/calendar'></Link>
        </div>
    )
}

export default Way;