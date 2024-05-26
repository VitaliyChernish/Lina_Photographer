import React, { useEffect } from "react";
import s from './popapAccept.module.scss'

const PopapAccept = ({ closePop, setPopapAccept }) => {

    useEffect(() => {
        const popapClose = document.getElementById('popapOrderClose')
        popapClose.style.animation = 'popapOrderStarted .7s forwards'
    }, [])

    const accepted = () => {
        const popapClose = document.getElementById('popapOrderClose')
        popapClose.style.animation = 'popapOrderUnmount .4s forwards'

        return setTimeout(() => {
            setPopapAccept(prev => prev = !prev)
        }, 400)
    }
    const decline = () => {
        const popapClose = document.getElementById('popapOrderClose')
        popapClose.style.animation = 'popapOrderUnmount .4s forwards'

        return setTimeout(() => {
            closePop()
        }, 400)
    }

    return (
        <div id='popapOrderClose' className={s.mainContainer}>
                <button onClick={decline}><p className={s.close}>ВІДМІНИТИ БРОНЮВАННЯ :(</p></button>
                <button onClick={accepted}><p className={s.accept}>ПРОДОВЖИТИ ЗАПОВНЕННЯ :)</p></button>
        </div>
    )
}
export default PopapAccept;