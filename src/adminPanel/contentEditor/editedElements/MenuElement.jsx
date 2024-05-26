import React, { useRef, useState } from "react";
import s from './editedElem.module.scss';

const MenuElement = ({ setMyRef, openSubMenu, header, toggleList, cardData, editContent, arrowId, SomeComponent }) => {
    const refsArr = useRef([])
    const [refffsArr, setRefffsArr] = useState([])

    const test = async (e, i) => {
        setMyRef(refffsArr[i])
        await editContent(e, i)
    }

    const addToRefs = (el) => {
        if (el && !refsArr.current.includes(el)) {
            refsArr.current.push(el)
        }

        setRefffsArr(refsArr.current)
    }

    return (
        <>
            <div onClick={openSubMenu} className={`${s.openLists} ${s.listItem}`}>{header}<span id={arrowId} className={s.arrow}>&#x276F;</span></div>
            {SomeComponent ? <SomeComponent test={'test'} /> : <></>}
            {toggleList && <div className={`${s.lists}`}>
                {cardData.length > 0 && cardData.map((el, i) => {
                    return (
                        <div ref={addToRefs} className={`${s.menuItem}`} key={i} onClick={(e) => test(e, i)} >id{el.id}: {el.name ? el.name : 'без назви'}</div>
                    )
                })}
            </div>}
        </>
    )
}

export default MenuElement;