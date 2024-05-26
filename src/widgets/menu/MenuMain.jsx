import React from "react";
import s from './menu.module.scss';
import PhotoGallery from "./photoGallery/PhotoGallery";

const MenuMain = () => {

    return (
        <div className={s.menuMainContainer}>
            <PhotoGallery />
        </div>
    )
}

export default MenuMain;