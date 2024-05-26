import React, { useEffect, useState } from "react";
import s from './mainBody.module.scss';
import './mainBody.css'
import calendar from '../staticAdminPanel/icons/calendar.png'
import bills from '../staticAdminPanel/icons/bills.png'
import CardRender from "../cards/cardRender/CardRender";
import maskVertical from '../staticAdminPanel/cardMaskVertical.png'
import phoneWhite from '../staticAdminPanel/icons/phoneWhite.png'
import computerWhite from '../staticAdminPanel/icons/computerWhite.png'
import androidWhite from '../staticAdminPanel/icons/androidWhite.png'
import apple from '../staticAdminPanel/icons/apple.png'
import windows from '../staticAdminPanel/icons/windows.png'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    scales: {
        x: {
            grid: {
                display: false,
            },
            border: {
                display: false
            }
        },
        y: {
            display: false,
            grid: {
                display: false,
            },
        }
    },
    plugins: {
        legend: {
            position: 'top',
            display: false,
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
        },
    },
    elements: {
        bar: {
            borderWidth: 0,
            borderRadius: 8,
            inflateAmount: 0,
            borderSkipped: 'center',
        }
    }
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Прибуток',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#5351fa',
            fill: false,
        },
        {
            label: 'Збитки',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 17, 0, 0.452)',
            fill: false,
        },

    ],
};

const cardsDataForTest = [
    { id: 1, img: bills, title: 'На рекламу', titleDescr: 'витрати на рекламу', value: '200', value2: ' 42', descriptions: 'зростання на 1%', backgroundColor: 'gray', percentage: 5 },
    { id: 2, img: calendar, title: 'Решта витрат', titleDescr: 'закупівлі, логістика', value: '63', value2: ' 17', descriptions: 'зростання на 7%', backgroundColor: 'violet', percentage: 85 },
]


const MainBody = () => {

    const[visits, setVisits] = useState(426)
    const[unique, setUnique] = useState(372)
    const[device, setDevice] = useState(phoneWhite)
    const[platform, setPlatform] = useState(apple)
    const[region, setRegion] = useState('Ukraine')

    return (
        <section id="statisticSectionAdminPanel" className={s.wrapper}>
            <div className={s.header}>
                <h2>Invoices</h2>
            </div>
            <div className={s.content}>
                <div className={s.leftContainer} >
                    <div className={s.backgroundElement} style={{ backgroundImage: `url(${maskVertical})` }}>
                        <div className={s.userCount}>
                            <div title='всі візити на сайті' className={s.allVisits}>Візитив на сайт: <span className={s.icon}>{visits}</span></div>
                            <div title='унікальні візити на сайті' className={s.uniqueVisits}>Унікальних: <span className={s.icon}>{unique}</span></div>
                            <div title={`телефон чи комп'ютер`} className={s.devices}>Пристрій: <span className={s.icon} style={{ backgroundImage: `url(${device})` }}></span></div>
                            <div title='андроїд\віндовс\епл' className={s.devices}>Система: <span className={s.icon} style={{ backgroundImage: `url(${platform})` }}></span></div>
                            <div title='де знаходиться користувач' className={s.region}>Регіон: <span className={s.icon}>{region}</span></div>
                        </div>

                        <div className={s.desctiptions}>

                        </div>
                    </div>
                </div>
                <div className={s.rightContainer}>
                    <div className={s.cards}>
                        {cardsDataForTest.map((el, i) => {
                            return <CardRender el={el} i={i} />
                        })}
                    </div>
                    <div className={s.diagrammContainer}>
                            <div id="diagramMenuContent" className={s.menuActive}>
                                <div className={s.menuItem}>Витрати</div>
                                <div className={s.menuItem}>Дохід</div>
                                <div className={s.menuItem}>Активність</div>
                            </div>
                        <div className={s.diagram}>
                            <Bar options={options} data={data} />
                            <div className={s.stats}>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MainBody;