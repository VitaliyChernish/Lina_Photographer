import React, {useRef} from "react";
import s from './sidebar.module.scss';
import { Link } from "react-router-dom";
import { telegramIcon, instagramIcon, phoneIcon, telegramLink, instagramLink, phoneNumber } from "../../utils/consts";

const Sidebar = () => {

    const telegramRef = useRef(null)
    const instagramRef = useRef(null)
    const phoneRef = useRef(null)

    const goToTelegram = () => {
        telegramRef.current.click()
    }
    const goToInstagram = () => {
        instagramRef.current.click()
    }
    const callMe = () => {
        phoneRef.current.click()
    }

    return (
        <div className={s.buttonsWrapper}>
            <div className={s.buttonsContainer}>
                <div className={s.buttons}>
                    <button type="button" onClick={goToTelegram} className={s.save}>
                        <img src={telegramIcon} alt="" />
                    </button>
                </div>
                <div className={s.buttons}>
                    <div onClick={goToInstagram} className={s.add}>
                        <img src={instagramIcon} alt="" />
                    </div>
                </div>
                <div className={s.buttons}>
                    <button type="button" onClick={callMe} className={s.delete}>
                        <img src={phoneIcon} alt="" />
                    </button>
                </div>
            </div>

            <div style={{display: 'none'}}>
                <Link ref={telegramRef} to={telegramLink}></Link>
                <Link ref={instagramRef} to={instagramLink}></Link>
                <a ref={phoneRef} href={`tel:+38${phoneNumber}`}></a>
            </div>
        </div>
    )
}

export default Sidebar;