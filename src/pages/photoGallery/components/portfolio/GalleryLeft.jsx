import React from "react";
import s from './portfolio.module.scss';
import img1 from '../../static/creative-scroll-website/img/work/1.jpg'
import img2 from '../../static/creative-scroll-website/img/work/2.jpg'
import img3 from '../../static/creative-scroll-website/img/work/3.jpg'

const GalleryLeft = ({ y, motion }) => {

    const resolution = window.innerWidth
    return (
        <>
           <motion.div style={{ y }} className={s.galeery__left}>
                    <img id="galleryItemLeft" className={s.galler__item} src={img1} alt="" />
                    <div id="galleryItemText" className={`${s.textBlock} ${s.galler__item}`}>
                        <h2 className={s.textBlock__h}>1Creative floating scroll with amazing parallax effect</h2>
                        <p id="texts" className={s.textBlock__p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto ipsa nulla ipsam, rerum iste enim.</p>
                    </div>
                    <img id="galleryItemLeft" className={s.galler__item} src={img2} alt="" />
                    <div id="galleryItemText" className={`${s.textBlock} ${s.galler__item}`}>
                        <h2 className={s.textBlock__h}>Creative floating scroll with amazing parallax effect</h2>
                        <p id="texts" className={s.textBlock__p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto ipsa nulla ipsam, rerum iste enim.</p>
                    </div>
                    <img id="galleryItemLeft" className={s.galler__item} src={img3} alt="" />
                    <div id="galleryItemText" className={`${s.textBlock} ${s.galler__item}`}>
                        <h2 className={s.textBlock__h}>Creative floating scroll with amazing parallax effect</h2>
                        <p id="texts" className={s.textBlock__p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto ipsa nulla ipsam, rerum iste enim.</p>
                    </div>
                </motion.div>
        </>
    )
}

export default GalleryLeft;