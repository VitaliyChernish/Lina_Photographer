import React, { useEffect, useState } from "react";
import s from './generalEditable.module.scss'
import CustomInputTypeTex from "../../pageComponents/CustomInput";
import ToggleElement from "../../pageComponents/ToggleElement";
import { editMarkup, editDiscount } from "../../utils/functions/update";
import { getOneMarkup } from "../../utils/functions/get";
import { getOneDiscount } from "../../utils/functions/get";

const GeneralEditableElements = () => {
    //murkup
    const [murkup, setMarkupData] = useState({})
    const [toggleCallback, setToggleCallback] = useState()
    const [markupReady, setMarkupReady] = useState()
    //murkup

    //discount
    const [discount, setDiscount] = useState({})
    const [toggleCallbackDiscount, setToggleCallbackDiscount] = useState()
    const [discountReady, setDiscountReady] = useState()
    //discount


    const onSubmitMarkup = async (e) => {
        const value = e.markupValue
        await editMarkup(value, murkup.position)
        await getOneMarkup(setMarkupData)
    }
    const onSubmitDiscount = async (e) => {
        const value = e.discountValue
        await editDiscount(value, discount.position)
        await getOneDiscount(setDiscount)
    }

    //markup
    useEffect(() => {
        getOneMarkup(setMarkupData)
    }, [toggleCallback])
    useEffect(() => {
        setMarkupReady(murkup.position)
    }, [murkup])
    const patchData = async (position) => {
        await editMarkup(false, position)
    }
    //markup

    //discount
    useEffect(() => {
        getOneDiscount(setDiscount)
    }, [toggleCallbackDiscount])
    useEffect(() => {
        setDiscountReady(discount.position)
    }, [discount])
    const patchDataDiscount = async (position) => {
        await editDiscount(false, position)
    }
    //discount

    return (
        <div className={s.generalEditableContent}>
            <div className={s.settingsItem}>
                <div className={s.header}>НАЦІНКА/ЗНИЖКА</div>
                <div className={s.settingsElements}>
                    <div className={s.input}>
                        <CustomInputTypeTex
                            onSubmit={onSubmitMarkup}
                            name={`% націнки`}
                            value={`markupValue`}
                            percent={murkup} />
                    </div>
                    <div className={s.toggleContainer}>
                        <ToggleElement
                            patchData={patchData}
                            setToggleCallback={setToggleCallback}
                            descr={`встановити цю націнку для всіх цін`}
                            position={markupReady} />
                    </div>
                </div>
                <div className={s.settingsElements}>
                    <div className={s.input}>
                        <CustomInputTypeTex
                            onSubmit={onSubmitDiscount}
                            name={`% знижки`}
                            value={`discountValue`}
                            percent={discount} />
                    </div>
                    <div className={s.toggleContainer}>
                        <ToggleElement
                            patchData={patchDataDiscount}
                            setToggleCallback={setToggleCallbackDiscount}
                            descr={`встановити цю знижку для всіх цін`}
                            position={discountReady} />
                    </div>
                </div>
                <div className={s.settingsElements}>
                    <div className={s.lebelForToggler} >
                        <div className={s.banner}>Банер</div>
                    </div>

                    <div className={s.toggleContainer}>
                        <ToggleElement patchData={patchData} setToggleCallback={setToggleCallback} descr={`відобразити банер зі знижкою скрізь де є знижка`} position={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralEditableElements;