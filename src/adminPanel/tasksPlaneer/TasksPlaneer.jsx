import React, { useEffect, useState } from "react";
import s from './taskPlaneer.module.scss'
import Calendar from "../../pages/calendar/Calendar";
import FreeDateComponent from "./freeDateComponent/FreeDateComponent";
import BookedDateComponent from "./booketDateComponent/BooketDateComponent";
import { toggleFreeData } from "../store/slices/freeDataSlice";

//redux
import { useSelector, useDispatch } from "react-redux";
import { getAllCalendarData, getOneUser } from "../utils/functions/get";
//redux

const TaskPlaneer = () => {
    const [allCalendarData, setAllCalendarData] = useState([])
    const [userData, setUserData] = useState([])
    const dispatch = useDispatch()
    const calendarData = useSelector(state => state.calendarAdminData.calendar)
    const freeDate = useSelector(state => state.freeData.calendar)

    useEffect(() => {
        getAllCalendarData(setAllCalendarData)
    }, [calendarData])

    useEffect(() => {
        dispatch(toggleFreeData('freeDate'))
        allCalendarData.forEach((el, i) => {
            if (el.date === calendarData) {
                getOneUser(setUserData, el.identificator)
                dispatch(toggleFreeData(''))
            }
        })

    }, [allCalendarData])


    return (
        <section className={s.wrapper}>
            <div className={s.header}>
                <h2>Поставити цілі</h2>
            </div>
            <div className={s.mainContainer}>
                <div className={s.leftPanel}>
                    {freeDate === 'freeDate'
                        ? <FreeDateComponent calendarData={calendarData} />
                        : <BookedDateComponent calendarData={calendarData} userData={userData} />}
                </div>
                <div className={s.rightPanel}>
                    <Calendar adminPopap={true} />
                </div>
            </div>
        </section>
    )
}

export default TaskPlaneer;