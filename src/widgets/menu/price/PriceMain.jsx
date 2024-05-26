import React, {useEffect, useRef} from "react";
import s from './price.module.scss'
import { Link } from "react-router-dom";

const PriceMain = () => {
    const btnRef1 = useRef()

    const btnClick = () => {
        setTimeout(() => {
            btnRef1.current.click()
        }, 0)
    }

    return (
        <>
            <div onClick={btnClick} className={s.priceMain}>
                Prices
            </div>
            <Link ref={btnRef1} to='/pricelist'></Link>
        </>
    )
}

export default PriceMain;