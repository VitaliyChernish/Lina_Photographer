import React from "react";
import s from './freeDateComponent.module.scss';
import { createCalendar } from "../../utils/functions/create";

const FreeDateComponent = ({calendarData}) => {

    const addDateToCalendar = () => {
        createCalendar(calendarData)
    }

    return(
        <div className={s.wrapper}>
            <h1>{calendarData}</h1>
            <div onClick={addDateToCalendar} className={s.btnSetFreeDate}>
                ДОДАТИ
            </div>
        </div>
    )
}

export default FreeDateComponent;