import React from "react";
import s from './insta.module.scss';

const Insta = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.middle1}>
                <div className={s.middle2}>
                    <div className={s.circle1}>
                        <div className={s.circle2}></div>
                    </div>
                    <div className={s.dot}></div>
                </div>
            </div>
        </div>
    )
}

export default Insta;