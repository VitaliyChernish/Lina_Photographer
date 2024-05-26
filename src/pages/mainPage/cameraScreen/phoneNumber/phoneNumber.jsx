import React from "react";
import s from './phone.module.scss';

const PhoneNumber = () => {

    const closePhone = () => {
        const elem = document.getElementById('phuneNumberWrapperId')
        return elem.style.opacity = 0
    }

    return (
        <div id="phuneNumberWrapperId" className={s.phuneNumberWrapper}>
            <div onClick={closePhone} className={s.close}>
                <div className={s.first}></div>
                <div className={s.second}></div>
            </div>
            <div className={s.phuneNumberContainer}>
                093 - 93 - 11 - 710
            </div>
        </div>
    )
}

export default PhoneNumber;