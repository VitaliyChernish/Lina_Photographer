import React from "react";
import s from './calendarGreed.module.scss';

const CalendarGreed = ({ renderCalendar }) => {

    return (
        <div className={s.calendargrid}>
            <div className={s.calendarrow}>
                <div className={s.calendarday}>Пн</div>
                <div className={s.calendarday}>Вт</div>
                <div className={s.calendarday}>Ср</div>
                <div className={s.calendarday}>Чт</div>
                <div className={s.calendarday}>Пт</div>
                <div className={s.calendarday}>Сб</div>
                <div className={s.calendarday}>Нд</div>
            </div>
            <div className={s.calendarrow}>
                {renderCalendar()}
            </div>
        </div>
    )
}

export default CalendarGreed;