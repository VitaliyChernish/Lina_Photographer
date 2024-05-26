import React from "react";
import s from './mainHeader.module.scss'

const MainPageHeader = () => {
    return (
        <>
            <div className={s.background}></div>
            <div className={s.headerWrapper}>
                <h1><span className={s.lina}>Lina</span> Tretyakova</h1>
                <h2><span>photographer,</span> content creator</h2>
            </div>
            {/* <div className={s.backgroundMenu}></div> */}
        </>
    )
}

export default MainPageHeader;

//clip-path: polygon(1% 0, 75% 0%, 100% 17%, 99% 100%, 71% 54%, 31% 43%);