import React, { useRef } from "react";
import s from './socMedMain.module.scss'
import insta from '../../static/img/social media/instagramm.png'
import faceboock from '../../static/img/social media/faceboock.png'
import telega from '../../static/img/social media/telega.png'
import { instagramLink, telegramLink, facebookLink } from "../../utils/consts";

const menuItems = [
    { name: 'insta', image: insta, link: instagramLink },
    { name: 'faceboock', image: faceboock, link: facebookLink },
    { name: 'telegramm', image: telega, link: telegramLink },
]

const SocialMediaMenu = () => {
    const btn1 = useRef(null)
    const btn2 = useRef(null)
    const btn3 = useRef(null)

    const refsArr = [btn1, btn2, btn3]

    const toggleClick = (rf) => {
        const page = document.getElementById('mainPageWrapperContainer')
        page.style.animation = 'opacityMainPageUnmount .7s forwards'

        setTimeout(() => {
            rf.current.click()
        }, 700)
    }

    return (
        <div className={s.smmWrapper}>
            <div className={s.smmMenu}>
                {menuItems.map((el, i) => {
                    return (
                        <div className={s.menuItem}>
                            <img onClick={() => toggleClick(refsArr[i])} src={el.image} alt="" />
                            <a ref={refsArr[i]} href={el.link}></a>
                        </div>
                    )
                })}
            </div>
            <div className={s.text}>
                <span>
                    мої соцмережі
                </span>
            </div>
        </div>
    )
}

export default SocialMediaMenu;