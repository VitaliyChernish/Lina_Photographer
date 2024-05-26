import React from "react";
import s from './mainPageHeaderMobile.module.scss';

const MainPageHeaderMobile = () => {
    return (
        <div className={s.headerWrapper}>
            <div className={s.headerContainer}>
                <h1><span className={s.lina}>Lina</span> Tretyakova</h1>
                <h2><span>photographer,</span> content creator</h2>
            </div>
        </div>
    )
}

export default MainPageHeaderMobile;
