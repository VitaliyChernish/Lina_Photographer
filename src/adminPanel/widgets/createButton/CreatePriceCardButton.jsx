import React from "react";
import s from './createbtn.module.scss'
import { useDispatch } from "react-redux";
import { createPriceCard } from "../../store/slices/priceCardSlice";

const CreateCardPriceButton = () => {
    const dispatch = useDispatch()
    const addNewPriceCard = () => dispatch(createPriceCard(true))

    return(
        <div className={s.wrapper}>
            <button onClick={addNewPriceCard}>
                Створити нову картку цін
            </button>
        </div>
    )
}

export default CreateCardPriceButton;