import React from "react";
import s from './contactsOnCamera.module.scss';


const ContactsOnCamera = () => {

    const openPhone = () => {
        const elem = document.getElementById('phuneNumberWrapperId')
        elem.style.opacity = 1
    }

    return (
        <div onClick={openPhone} className={s.contactsOnCamera}>
            <span>phone</span>
        </div>
    )
}

export default ContactsOnCamera;