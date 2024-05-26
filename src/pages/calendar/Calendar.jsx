import React, { useEffect, useState } from 'react';
import s from './calendar.module.scss'
import CalendarGreed from './calendarGreed/CalendarGreed';
import PopapOrder from '../../widgets/popapOrder/PopapOrder';
import { getAllCalendarData } from '../../adminPanel/utils/functions/get';
import './calendar.css';
import AdminPopap from '../../adminPanel/widgets/adminPopap/adminPopap'
import { calendarAdminData } from '../../adminPanel/store/slices/calendarDataSlice';
import { toggleFreeData } from '../../adminPanel/store/slices/freeDataSlice';
import PagesNavigations from '../../widgets/menuForPhotoGallery/PagesNavigations';
import { selectedPage } from '../../adminPanel/store/slices/mobileNavigationSlice';

//redux
import { useDispatch } from 'react-redux';
import { whatSide } from '../../adminPanel/store/slices/swipeSideSlice';
//redux

function Calendar({ adminPopap }) {
    const [startY, setStartY] = useState(0);
    const [startX, setStartX] = useState(0);
    const [position, setPosition] = useState(0)
    const [swipe, setSwipe] = useState('')
    //redux
    const dispatch = useDispatch()
    //redux

    const [date, setDate] = useState(new Date());
    const [togglePopap, setTogglePopap] = useState(false);
    const [dateForPopap, setDateForPopap] = useState({})
    const [calendarData, setCalendarData] = useState({})

    useEffect(() => {
        dispatch(selectedPage(window.location.pathname))
        const calendar = document.getElementById('calendarWrapper')
        if(window.innerWidth <= 600) {
            calendar.style.animation = 'mountCalendarMobile .7s forwards'
        } else {
            calendar.style.animation = 'calendarWrapperStarted .7s forwards'
        }
        
        getAllCalendarData(setCalendarData)
    }, [])

    useEffect(() => {
        renderCalendar()
    }, [date])

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    // Функція для генерації початкового дня тижня у місяці
    const getStartDayOfMonth = (year, month) => {
        return new Date(year, month, 0).getDay();
    };

    // Функція для зміни місяця
    const changeMonth = (amount) => {
        const newDate = new Date(date);
        newDate.setMonth(date.getMonth() + amount);
        setDate(newDate);
        // matchDayFromCalendar()
    };

    const toggleOrder = async (e, day) => {

        dispatch(toggleFreeData('freeDate'))

        e.target.style.filter = 'brightness(.3)';
        e.target.style.pointerEvents = 'none';

        // Отримуємо дату у форматі 'день.місяць.рік'

        const fullDate = day + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();

        // Оновлюємо стан dateForPopap
        await setDateForPopap({
            day: day,
            date: (date.getMonth() + 1) + '.' + date.getFullYear()
        });

        // Викликаємо функцію з використанням отриманої дати
        await dispatch(calendarAdminData(fullDate));

        // Перемикаємо popap
        setTogglePopap(!togglePopap);
    };

    const matchDayFromCalendar = (month) => {
        const dayOnCalendar = document.querySelectorAll('#daysOnCalendar')
        dayOnCalendar.forEach(el => {
            el.style.backgroundColor = 'rgba(212, 212, 212, 0.089)'
        })
        if (calendarData[0]) {
            return calendarData.forEach(dateFromServer => {
                const dateArr = dateFromServer.date.split('.')
                const dayFromServer = dateArr[0]
                const monthFromServer = dateArr[1]

                dayOnCalendar.forEach(el => {
                    if (+dayFromServer === +el.textContent && +monthFromServer === +month) {
                        // return window.innerWidth > 600 ? el.style.backgroundColor = '#660202' : el.style.filter = 'brightness(.2) invert(0) sepia(1) saturate(10000%) hue-rotate(180deg) '
                        el.style.backgroundColor = dateFromServer.identificator ? '#b83b2a67' : '#2ab83667'
                        el.style.textShadow = 'none'
                        el.style.pointerEvents = dateFromServer.identificator ? adminPopap ? 'all' : 'none' : 'all'
                    }
                })
            })
        }
    }

    const renderCalendar = () => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const startDay = getStartDayOfMonth(year, month);

        const today = date.getDate()
        const todayMonth = new Date().getMonth()

        const days = [];
        for (let i = 1; i <= daysInMonth + startDay; i++) {
            const day = i - startDay;
            days.push(
                <div className={s.daysOnCalendarWrapper}>
                    <div
                        id='daysOnCalendar'
                        key={i}
                        onClick={(e) => toggleOrder(e, day, month)}
                        style={{
                            opacity: day > 0 ? 1 : 0,
                            pointerEvents: adminPopap ? 'all' : 'none',
                        }}
                        className={`${s.calendarday} 
                    ${day < today && month === todayMonth && s.styleForNitAvailable}`}>
                        {day > 0 ? day : ''}
                    </div>
                </div>
            );
        }
        matchDayFromCalendar(month + 1)
        return days;
    };

    const popapToglerFunc = () => {
        return adminPopap
            //   ? <AdminPopap calendarData={calendarData} dateForPopap={dateForPopap} setTogglePopap={setTogglePopap} />
            ? ''
            : <PopapOrder dateForPopap={dateForPopap} setTogglePopap={setTogglePopap} />
    }

     //swipe control start

    const handleTouchStart = (event) => {
        setStartX(event.touches[0].clientX)
        setStartY(event.touches[0].clientY);
    };

    const handleTouchEnd = (event) => {
        const endY = event.changedTouches[0].clientY;
        const endX = event.changedTouches[0].clientX;

        //left and right swipe start
        if (startX > endX && startX - endX >= 100) {
            // console.log('left');
            setTimeout(() => {
                dispatch(whatSide('left'))
                setSwipe('left')
            }, 0)
        } else if (startX < endX && endX - startX >= 100) {
            // console.log('right');

            setTimeout(() => {
                dispatch(whatSide('right'))
                setSwipe('right')
            }, 0)
        }
        //left and right swipe end
    };

    useEffect(() => {
        if (swipe === 'right') {
            const wrapperElement = document.getElementById('calendarWrapper')
            wrapperElement.style.animation = `unmountCalendarMobile .5s forwards ease-in-out`
            setTimeout(() => {
                const nawigateButton = document.getElementById('pricelistForSwipeId')
                nawigateButton.click()
            }, 500)
        }

    }, [swipe])

    //swipe control end

    return (
        <>
            {togglePopap && popapToglerFunc()}
            <div 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className={s.wrapper}  
            id='calendarWrapper'>
                <div className={s.calendarheader}>
                    <button className={s.toggleButton} onClick={() => changeMonth(-1)}>Prev</button>
                    <span>
                        {date.toLocaleDateString('default', { month: 'long', year: 'numeric' })}
                    </span>
                    <button className={s.toggleButton} onClick={() => changeMonth(1)}>Next</button>
                </div>
                <div className={s.calendarBody}>
                    <CalendarGreed renderCalendar={renderCalendar} />
                </div>
            </div>
        </>
    );
}

export default Calendar;