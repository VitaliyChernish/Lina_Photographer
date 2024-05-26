import React, { useEffect, useState } from "react";
import s from './adminPopap.module.scss';
import { useForm } from "react-hook-form";
import { createCalendar } from "../../utils/functions/create";

const AdminPopap = ({ calendarData, dateForPopap, setTogglePopap }) => {
    const [choicedDayData, setChoicedDayData] = useState({})

    const { register, handleSubmit } = useForm({
        shouldUseNativeValidation: true,
    })

    const createCalendarData = async (data) => {
        const { day, date } = dateForPopap;
        const identificator = new Date().getTime()
        data.identificator = identificator
        data.date = `${day}.${date}`
        createCalendar(data)
        return setTogglePopap(prev => prev = !prev)
    }

    useEffect(() => {
        const fullDate = dateForPopap.day + '.' + dateForPopap.date

        calendarData.forEach((el, i) => {
            el.date == fullDate && setChoicedDayData(el)
        })
    }, [])

    const adminCalendar = ['isOffered', 'isAvailable', 'time', 'description']

    return (
        <div className={s.wrapper}>
            <div className={s.background}></div>
            <div className={s.mainContent}>
                <div className={s.close} onClick={() => setTogglePopap(prev => prev = !prev)}></div>
                <form className={s.form} onSubmit={handleSubmit(createCalendarData)}>

                    {adminCalendar.map((el, i) => {
                        return (
                            <div className={s.cardValues}>
                                <input
                                    type="text"
                                    className={s.input}
                                    placeholder=" "
                                    {...register(el)} // custom message
                                    title={el}
                                />
                                <label className={s.label} htmlFor={`${el}`}>{el}</label>
                            </div>
                        )
                    })}
                    <input style={{ display: 'none' }} id='submitCalendarPopap' type="submit" />
                </form>

                {choicedDayData && <div>
                    <p>date: {choicedDayData.date}</p>
                    <p>date: {choicedDayData.date}</p>
                    <p>заброньовано: <h1>{choicedDayData.isOffered}</h1></p>
                    <p>вільно: {choicedDayData.isAvailable}</p>
                    <p>час: {choicedDayData.time}</p>
                    <p>нотатка: {choicedDayData.description}</p>
                </div>}
            </div>
        </div>
    )
}

export default AdminPopap;