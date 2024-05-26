import React from "react";
import s from './aboutMe.module.scss';
import linaImg from '../../../static/img/layer-333webp.webp'
import linaImgCover from '../../../static/img/layer-334webp.webp'
import mainPageSecondScreenForm from '../../../static/img/mainPageSecondScreenFormWebp.webp'

const AboutMe = () => {
    return (
        <>
            <div className={s.mainPageSecondScreenForm} style={{ backgroundImage: `url(${mainPageSecondScreenForm})` }}></div>
            <div className={s.aboutMe}>
                <div className={s.image}>
                    <img src={linaImg} alt="" />
                </div>
                <div className={`${s.image} ${s.imageOver}`}>
                    <img src={linaImgCover} alt="" />
                </div>
                <div className={s.content}>
                    <span>
                        <p>Я - Ліна і я обожнюю людей та фотографувати. </p>
                        <p>Впевнена, що кожен з нас може побачити себе з іншої сторони,
                            через фото. Побачити та полюбити, ще сильніше.</p>
                        <p>Мені цікаві різні формати зйомок, тому не обмежую себе лише студійними.
                            Підтримаю будь-яку вашу ідею, обговоримо всі деталі, знайдемо
                            найбільш комфортні образи і формати зйомки - та зробимо багато
                            красивих фото. </p>
                    </span>
                </div>
            </div>
        </>
    )
}

export default AboutMe;