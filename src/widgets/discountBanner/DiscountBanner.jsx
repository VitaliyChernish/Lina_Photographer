import React, { useEffect, useState } from "react";
import s from './discountBanner.module.scss';
import { getOneDiscount } from "../../adminPanel/utils/functions/get";

const DiscountBanner = ({ showDiscountCard }) => {

    const [discount, setDiscount] = useState({})

    useEffect(() => {
        getOneDiscount(setDiscount)
    }, [])

    return (
        <>
            {showDiscountCard === true
                ? <div className={s.wrapper} >
                    <span>Знижка: {discount.percent}%</span>
                </div >
                : <span></span>}
        </>
    )
}

export default DiscountBanner;