import React, { useState, useEffect } from "react";
import s from './popapOrder.module.scss'
import { createCustomer } from "../../adminPanel/utils/functions/create";
import { useForm } from "react-hook-form"
import PopapAccept from "../popapAccept/PopapAccept";
import './popaporder.css'

const PopapOrder = ({ dateForPopap, setTogglePopap }) => {
    const [popapAccept, setPopapAccept] = useState(false)

    useEffect(() => {
        const popapOrder = document.getElementById('popapOrderWrapper')
        popapOrder.style.animation = 'popapOrderStarted .7s forwards'
    }, [])

    const { register, handleSubmit } = useForm({
        shouldUseNativeValidation: true,
    })
    const createCustomerData = async (data) => {

        if (dateForPopap) {
            const { day, date } = dateForPopap;
            const identificator = new Date().getTime()
            data.identificator = identificator
            data.date = `${day}.${date}`
            data.isAvailable = false
            createCustomer(data)
        } else {
            const identificator = new Date().getTime()
            data.identificator = identificator
            data.isAvailable = false
            console.log('data: ', data);
            createCustomer(data)
        }

        if (data.phone) {
            openPopap()
            setTogglePopap(prev => prev = !prev)
        }

        return
    }

    const customerParams = ['name', 'telegramm', 'phone']

    const openPopap = () => {
        const popapOrder = document.getElementById('popapOrderWrapper')
        popapOrder.style.animation = 'popapOrderUnmount .7s forwards'
        const submitEl = document.getElementById('submitCalendarPopap')

        return setTimeout(() => {
            submitEl.click()
        }, 700);
    }
    const closePopap = () => {
        return setPopapAccept(!popapAccept)
    }
    const popapEnd = () => {
        return setTogglePopap(prev => prev = !prev)
    }

    const renderLabelLanguage = (el) => {
        switch(el){
            case 'name' :{
                return `Ім'я*`
            }case 'telegramm' :{
                return 'Телеграм'
            }case 'phone' :{
                return 'Телефон*'
            } default: {
                return el
            }
        }
    }

    return (
        <>
            {/* <div className={s.backgroundWrapper}>
                
            </div> */}
            <div className={s.wrapper} id="popapOrderWrapper">
                <div className={s.background}></div>
                {popapAccept
                    ? <PopapAccept closePop={popapEnd} setPopapAccept={setPopapAccept} />
                    : <div className={s.mainContainer}>
                        <div className={s.colose} onClick={closePopap}>
                            <span className={s.wertical}></span>
                            <span className={s.horizontal}></span>
                        </div>
                        <div className={s.choicedDate}>
                            {dateForPopap && <span>{dateForPopap.day + '.' + dateForPopap.date}</span>}
                        </div>
                        <form className={s.form} onSubmit={handleSubmit(createCustomerData)}>
                            {customerParams.map((el, i) => {
                                return (
                                    <div className={s.cardValues}>
                                        <input
                                            type="text"
                                            className={s.input}
                                            placeholder=" "
                                            {...register(el, {
                                                required: el === 'name' | el === 'phone' && "Будь ласка, заповнить поля форми",
                                            })} // custom message
                                            title={el}
                                        />
                                        <label className={s.label} htmlFor={`${el}`}>{renderLabelLanguage(el)}</label>
                                    </div>
                                )
                            })}
                            <input style={{ display: 'none' }} id='submitCalendarPopap' type="submit" />
                        </form>
                        <div onClick={handleSubmit(createCustomerData)} className={s.closeAndSubmit}><span>підтвердити</span></div>
                    </div>}
            </div>
        </>
    )
}

export default PopapOrder;