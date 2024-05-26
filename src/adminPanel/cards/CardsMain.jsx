import React from "react";
import s from './cards.module.scss'
import calendar from '../staticAdminPanel/icons/calendar.png'
import bills from '../staticAdminPanel/icons/bills.png'
import date from '../staticAdminPanel/icons/date.png'
import 'react-circular-progressbar/dist/styles.css';
import CardRender from "./cardRender/CardRender";

const cardsDataForTest = [
    { id: 1, img: bills, title: 'Конверсії', titleDescr: 'Конверсії', value: '200', value2: ' 42', descriptions: 'зростання на 15%', backgroundColor: 'red', percentage: 42 },
    { id: 2, img: calendar, title: 'Утримання', titleDescr: 'час проведений на сайті', value: '63', value2: ' 17', descriptions: 'спад на 4%', backgroundColor: 'green', percentage: 15 },
    { id: 3, img: date, title: 'Відмови', titleDescr: 'жодного переглянутого блоку', value: '5', value2: '', descriptions: 'зростання на 7%', backgroundColor: 'yellow', percentage: 92 },
    { id: 4, img: calendar, title: 'Витрати', titleDescr: 'Витрати', value: '13', value2: ' 17', descriptions: 'зростання на 2%', backgroundColor: 'blue', percentage: 30 },
]

const Cards = () => {
    return (
        <section className={s.cards}>
            <div className={s.head}>Головні цілі</div>
            <div className={s.cardsContainder}>
                {cardsDataForTest.map((el, i) => {
                    return (
                        <CardRender el={el} i={i} />
                    )
                })}
            </div>
        </section>
    )
}
export default Cards;