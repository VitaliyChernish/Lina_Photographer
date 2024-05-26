import React, { useState, useRef, useEffect } from "react";
import s from './style.module.scss'
import done from '../staticAdminPanel/icons/done.png'

const ToggleElement = (props) => {
    const [toggler, setToggler] = useState()
    const btnRef1 = useRef(null)
    const elemRef1 = useRef(null)

    const toggle = async () => {
        props.patchData(toggler)
        await toggleAnimation()
    }

    useEffect(() => {
        if (props.position) {
            btnRef1.current.style.left = 'calc(var(--index)*.8)'
            elemRef1.current.style.filter = 'inherit'
            setToggler(!props.position)
        } else {
            btnRef1.current.style.left = '0'
            elemRef1.current.style.filter = 'brightness(.3)'
            setToggler(!props.position)
        }
    }, [props]);

    const toggleAnimation = async () => {
        if (toggler) {
            btnRef1.current.style.left = 'calc(var(--index)*.8)'
            elemRef1.current.style.filter = 'inherit'
            return await setToggler(false)
        } else {
            btnRef1.current.style.left = '0'
            elemRef1.current.style.filter = 'brightness(.3)'
            return await setToggler(true)
        }
    }

    return (
        <>
            <div title={props.descr} onClick={toggle} className={s.toggleMain}>
                <div ref={btnRef1} className={s.toggleCircle}></div>
            </div>
            <div ref={elemRef1} className={s.backgroundImage} style={{ backgroundImage: `url(${done})` }}></div>
        </>
    )
}

export default ToggleElement;