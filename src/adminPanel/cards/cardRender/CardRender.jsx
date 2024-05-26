import React from "react";
import s from './cardRender.module.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import cardMask from '../../staticAdminPanel/cardMask.png'

const CardRender = ({ el, i }) => {
    return (
        <article key={i} className={s.cardBody} >
            <div className={s.statColor} style={{ backgroundColor: el.backgroundColor }}></div>
            <div className={s.cardFigure} style={{ backgroundImage: `url(${cardMask})` }}>
                <div className={s.left}>
                    <div className={s.cardIcon} style={{ backgroundImage: `url(${el.img})` }}></div>
                    <h3 title={el.titleDescr} className={s.cardTitle}>{el.title}</h3>
                    <div className={s.cardValues}>
                        <span title="фактично" className={s.value1}>{el.value}</span>
                        <span className={s.middle}> - </span>
                        <span title="заплановано" className={s.value2}>{el.value2}</span>
                    </div>
                    <div className={s.description}>{el.descriptions}</div>
                </div>
                <div className={s.right}>
                    <CircularProgressbar
                        value={el.percentage}
                        text={`${el.percentage}%`}
                        maxValue={100}
                        styles={buildStyles({
                            pathColor: el.backgroundColor,
                            textColor: 'black',
                            textSize: `150%`,
                        })} />
                </div>
            </div>
        </article>
    )
}

export default CardRender;