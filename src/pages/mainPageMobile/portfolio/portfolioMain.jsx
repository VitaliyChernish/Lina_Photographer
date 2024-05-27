import React from "react";
import s from './portfolio.module.scss'
import { serverApi } from "../../../adminPanel/utils/consts";

const justImage = [
    {'filename': '0fbcbaa7-f017-4c94-89c9-880a8ed6324d.png'},
    {'filename': '1bd95e14-cd4e-4632-8df0-3620db718320.jpg'},
    {'filename': '1f0b98cf-a85e-4dbd-951a-055334d3ae22.png'},
    {'filename': '02b27007-a6f4-4cec-9e99-c8912f0717bf.jpg'},
    {'filename': '1f0b98cf-a85e-4dbd-951a-055334d3ae22.png'},
]

const Portfolio = () => {
    return (
        <section className={s.wrapper}>
                <img id="photoImageForMountCompinent" className={s.photoImage} src={`${serverApi}/static/${justImage[0]}`} alt="photo_image" />
                <div className={s.services}>
                    <ul>
                        <li>Студийна</li>
                        <li>Вулична</li>
                        <li>Репортажна</li>
                        <li>Предметна</li>
                        <li>Заходи</li>
                    </ul>
                </div>
                <div className={s.items}>
                    {justImage.map((el, i) => {
                        return <div key={i} className={s.item} tabIndex='1' style={{ backgroundImage: `url(${serverApi}/static/${el.filename})` }}></div>
                    })}
                </div>
                <div className={s.servicesBottom}>
                    <ul>
                        <li>Від 2 годин</li>
                        <li>Від 1,5 годин</li>
                        <li>Від 2 годин</li>
                        <li>Від 1 години</li>
                        <li>Від 2 годин</li>
                    </ul>
                </div>
        </section>
    )
}

export default Portfolio;