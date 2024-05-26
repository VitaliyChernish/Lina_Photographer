import React, { useEffect } from "react";
import s from './howWork.module.scss';
import './howWork.css';
import Way from "./way";
import PhotoAndText from "./photoAndText";
import thirdBachround from '../../../static/img/mainPageThirdScreenForm.png'
// import thirdBachround from '../../../static/img/mainPageThirdScreenFormWebp.webp'

const HowItsWork = () => {

    function throttle(func, delay) {
        let lastCalled = 0;
        return function (...args) {
            const now = new Date().getTime();
            if (now - lastCalled >= delay) {
                func(...args);
                lastCalled = now;
            }
        };
    }


    function animOnScroll() {
        const animItems = document.querySelectorAll('.element-animation');

        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top;
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('element-show')
            } else {
                animItem.classList.remove('element-show')
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    const throttledScroll = throttle(animOnScroll, 30);

    useEffect(() => {
        const animItems = document.querySelectorAll('.element-animation');

        if (animItems.length > 0) {
            document.addEventListener('scroll', throttledScroll)

            return function () {
                document.removeEventListener('scroll', throttledScroll)
            }
        }
    }, [])

    return (
        <div className={s.wrapper}>
            {/* <div className={s.mainPoligon}></div> */}
            <div className={s.thirdBachround} style={{backgroundImage: `url(${thirdBachround})`}}></div>
            <div className={s.header}>
                Як відбувається співпраця
                <div className={s.descr}>від дзвінка до готових фото</div>
            </div>
            <div className='elementAnimation'>
                <Way />
            </div>
            <PhotoAndText />
        </div>
    )
}

export default HowItsWork;