import React from "react";
import s from './booketDateComponent.module.scss';
import { deleteCalendarDay } from "../../utils/functions/delete";

const BookedDateComponent = ({ calendarData, userData }) => {

    const deleteOneCalendarDay = () => {
        console.log('calendarData: ', calendarData);
        deleteCalendarDay(calendarData)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.date}><h1>{calendarData}</h1></div>
            <div className={s.name}>
                Забронював:<h2>{userData.name}</h2>
            </div>
            <div className={s.phone}>
                Телефон:<a href="tel:+1234567890">{userData.phone}</a>
            </div>
            <div className={s.telegramm}>
                Telegram:<a href={`https://t.me/${userData.telegramm}`}>{userData.telegramm}</a>
            </div>

            <div onClick={deleteOneCalendarDay} className={s.delete}>ВИДАЛИТИ</div>
        </div>
    )
}

export default BookedDateComponent;