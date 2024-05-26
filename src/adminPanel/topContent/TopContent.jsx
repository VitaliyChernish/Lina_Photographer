import React from "react";
import s from './topContent.module.scss'
import helpBlack from '../staticAdminPanel/icons/helpBlack.png'
import notificationBlack from '../staticAdminPanel/icons/notificationBlack.png'
import avatar from '../staticAdminPanel/icons/avatar.png'

const TopContent = () => {
    return (
        <section className={s.topContent}>
            <div className={s.leftBlock}>
                <h1 className={s.headerH1}>Good morning Lina</h1>
                <span>your weekly Financial update</span>
            </div>
            <div className={s.rightBlock}>
                <input type="search" className={s.search} />
                <div className={s.helpIcon} style={{ backgroundImage: `url(${helpBlack})` }}></div>
                <div className={s.helpIcon} style={{ backgroundImage: `url(${notificationBlack})`}}></div>
                <div className={s.avatar} style={{ backgroundImage: `url(${avatar})`}}></div>
            </div>
        </section>
    )
}

export default TopContent;