import React, { useEffect } from "react";
import s from './mobNawWhite.module.scss';
// import home from '../../static/img/'
import './mobNawStyle.css'

const MobileNawigationsWhite = () => {

    // const handleIconClick = (event) => {
    //     const icon = event.target;
    //     // icon.classList.add("initialised");
    //     const index = icon.getAttribute("data-index");
    //     const navtab = findClosestParent(icon, ".tab");
    //     const previous = navtab.dataset.selected || -1;

    //     navtab.classList.add("moving");
    //     navtab.dataset.selected = index;

    //     console.log('navtab: ', navtab);

    //     const menuBtns = document.querySelectorAll('#mobileMenuAnimationElement')

    //     menuBtns.forEach((el, i) => {
    //         if (el === event.target) {
    //             el.classList.add('initialised')
    //         } else {
    //             el.classList.remove('initialised')
    //         }
    //     })

    //     // if (previous === -1) {
    //     //     navtab.querySelector('.icon[data-index="2"]').classList.add("initialised");
    //     // }

    //     // if ((previous === "1" && index === "3") || (previous === "3" && index === "1")) {
    //     //     navtab.querySelector('.icon[data-index="2"]').classList.remove("initialised");
    //     //     setTimeout(() => {
    //     //         navtab.querySelector('.icon[data-index="2"]').classList.add("initialised");
    //     //     },0);
    //     // }

    //     setTimeout(() => {
    //         navtab.classList.remove("moving");
    //         navtab.classList.remove("hidemiddle");
    //     }, 750);
    // };

    // const findClosestParent = (element, selector) => {
    //     while (element) {
    //         if (element.matches(selector)) {
    //             return element;
    //         }
    //         element = element.parentElement;
    //     }
    //     return null;
    // };

    const toggleMenu = (e) => {
        const elements = document.querySelectorAll('#mobileMenuAnimationElement')
        elements.forEach((el, i) => {
            if (el !== e.target) {
                el.classList.remove(s.activeMobileNawigationBtn)
            }
        })
        e.target.classList.add(s.activeMobileNawigationBtn)
    }

    return (
        // <nav className={`${s.tab} tab`} data-selected="2">
        //     <div className={s.icons}>
        //         <div onClick={handleIconClick} data-index='1' id="mobileMenuAnimationElement" className={`${s.icon} icon`}>
        //             <img  src="https://img.icons8.com/ios-filled/50/3e8363/cottage--v1.png" alt="home--v1" />
        //         </div>
        //         <div onClick={handleIconClick} data-index='2' id="mobileMenuAnimationElement" className={`${s.icon} icon`}>
        //             <img src="https://img.icons8.com/ios-filled/50/3e8363/stack-of-photos--v1.png" alt="image-gallery" />
        //         </div>
        //         <div onClick={handleIconClick} data-index='3' id="mobileMenuAnimationElement" className={`${s.icon} icon`}>
        //             <img  src="https://img.icons8.com/ios-filled/50/3e8363/price-tag-usd--v1.png" alt="price-tag-usd--v1" />
        //         </div>
        //     </div>
        //     <div className={s.bar}>
        //         <div className={s.cap}></div>
        //         <div className={s.middle}>
        //             <div className={s.side}></div>
        //             <div className={s.circle}></div>
        //             <div className={s.side}></div>
        //         </div>
        //         <div className={s.cap}></div>
        //     </div>
        // </nav>
        <div className={s.navigation}>
            <ul>
                <li onClick={toggleMenu} className={s.list} id="mobileMenuAnimationElement">
                    <div className={s.elementBlock}>
                        <span className={s.icon}>
                            <img src="https://img.icons8.com/ios-filled/50/3e8363/stack-of-photos--v1.png" alt="home--v1" />
                        </span>
                        <span className={s.text}>Home</span>
                    </div>
                </li>
                <li onClick={toggleMenu} className={s.list} id="mobileMenuAnimationElement">
                    <div>
                        <span className={s.icon}>
                            <img src="https://img.icons8.com/ios-filled/50/3e8363/price-tag-usd--v1.png" alt="home--v1" />
                        </span>
                        <span className={s.text}>Gallery</span>
                    </div>
                </li>
                <li onClick={toggleMenu} className={s.list} id="mobileMenuAnimationElement">
                    <div>
                        <span className={s.icon}>
                            <img src="https://img.icons8.com/ios-filled/50/3e8363/cottage--v1.png" alt="home--v1" />
                        </span>
                        <span className={s.text}>Prices</span>
                    </div>
                </li>
                <li onClick={toggleMenu} className={s.list} id="mobileMenuAnimationElement">
                    <div>
                        <span className={s.icon}>
                            <img src="https://img.icons8.com/ios-filled/50/3e8363/cottage--v1.png" alt="home--v1" />
                        </span>
                        <span className={s.text}>Conditions</span>
                    </div>
                </li>
                <div className={s.indicator}></div>
            </ul>
        </div>
    )
}

export default MobileNawigationsWhite;