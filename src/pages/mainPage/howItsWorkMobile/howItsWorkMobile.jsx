import React from "react";
import s from './howItsWorkMobile.module.scss'
import { Link } from "react-router-dom";

const HowItsWorkMobile = () => {

    const goToCalendar = () => {

    }

    const items = [
        { name: 'name1', data: 'data1', color: '#dba80e', translateX: '-5vw', styleData: s.elementDescription, styleName1: s.elementRound },
        { name: 'data2', data: 'name2', color: '#7aba6c', translateX: '5vw', styleData: s.elementRound, styleName1: s.elementDescription },
        { name: 'name3', data: 'data3', color: '#ac377b', translateX: '-5vw', styleData: s.elementDescription, styleName1: s.elementRound },
        { name: 'data4', data: 'name4', color: '#13a4dd', translateX: '5vw', styleData: s.elementRound, styleName1: s.elementDescription },
        // { name: 'name5', data: 'data5', color: 'red', translateX: '-5vw', styleData: s.elementDescription, styleName1: s.elementRound },
    ]

    return (
        <div className={s.wrapper}>
            <div className={s.header}>Як відбувається співпраця</div>
            <div className={s.elementsWrapper}>
                {items.map((el, i) => {
                    return (
                        <div style={{ transform: `translateX(${el.translateX})` }} className={s.oneElementWrapper}>
                            <div className={el.styleData}>
                                <div className={s.smallRound}>
                                    <div style={{border: el.styleData === s.elementRound && `5px solid ${el.color}`, color: el.color}} className={s.contentRound}>
                                        {el.data}
                                    </div>
                                </div>
                            </div>
                            <div className={el.styleName1}>
                                <div className={s.smallRound}>
                                    <div style={{border: el.styleData === s.elementDescription && `5px solid ${el.color}`, color: el.color}} className={s.contentRound}>
                                        {el.name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={s.header1}>Як відбувається співпраця</div>
        </div>
    )
}

export default HowItsWorkMobile;


// <div className={s.wrapper}>
//     <div className={s.header}>Наша співпраця починається вже зараз :)</div>
//     <div className={s.wayElements}>
//         <div><p>1</p><span>знайомство та обговорення ідеї</span></div>
//         <div onClick={goToCalendar} ><p>2</p><span>оплата, бронювання дати та студії</span></div>
//         <div><p>3</p><span>підготовка референсів та консультація щодо вбрання</span></div>
//         <div><p>4</p><span>зйомка</span></div>
//         <div><p>5</p><span>готові фотографії через 7-10 днів</span></div>
//     </div>
//     <Link id="goingToCalendarAnimation" to='/calendar'></Link>
// </div>

//2

// <div className={s.wrapper}>
//     <div className={s.hexagonWrapper}>
//         <div className={s.panel}>
//             <div className={s.first}></div>
//         </div>
//         <div className={s.panel}>
//             <div className={s.second}></div>
//         </div>
//         <div className={s.panel}>
//             <div className={s.third}></div>
//         </div>
//         <div className={s.panel}>
//             <div className={s.fourth}></div>
//         </div>
//         <div className={s.panel}>
//             <div className={s.fifth}>fifth</div>
//         </div>
//         <div className={s.panel}>
//             <div className={s.six}>six</div>
//         </div>
//         <div className={s.panel}>
//             <div className={s.seven}>seven</div>
//         </div>
//         <div className={s.panel}>
//             <div className={s.eight}>eight</div>
//         </div>
//         <div className={s.panel}>
//             <div className={s.nine}></div>
//         </div>
//         <div className={s.panel}>
//             <div className={s.ten}>ten</div>
//         </div>
//         <div className={s.panel}>
//             <div className={s.eleven}>eleven</div>
//         </div>
//         <div className={s.panel}>
//             <div className={s.tvelve}></div>
//         </div>
//     </div>
//     <div className={s.contentWrapper}>

//     </div>
// </div>

//2