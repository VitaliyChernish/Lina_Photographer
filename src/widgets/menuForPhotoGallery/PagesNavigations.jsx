import React, { useRef } from "react";
import s from './mainNavigations.module.scss'
import { Link } from "react-router-dom";

const PagesNavigations = ({btnsArr, page1, page2, page3}) => {

    const btnRef1 = useRef()
    const btnRef2 = useRef()
    const btnRef3 = useRef()

    const refsArr = [btnRef1, btnRef2, btnRef3]


    const btnClick = (elem) => {
        elem.current.click()
    }

    return (
        <>
            <div className={s.photoMain}>
                {btnsArr.map((el, i) => {
                    return (
                        <div className={s.menuItem} onClick={() => btnClick(refsArr[i])}>
                            <p>{el.name}</p>
                        </div>
                    )
                })}
            </div>
            <Link style={{ display: 'none' }} ref={btnRef1} to={`/${page1}`}></Link>
            <Link style={{ display: 'none' }} ref={btnRef2} to={`/${page2}`}></Link>
            <Link style={{ display: 'none' }} ref={btnRef3} to={`/${page3}`}></Link>
        </>
    )
}

export default PagesNavigations;