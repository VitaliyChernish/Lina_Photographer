import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import s from './forms.module.scss'
import { updatePriceCard } from '../../utils/functions/update';
import { deletePriceCard } from '../../utils/functions/delete';
import bg1 from '../../staticAdminPanel/borderStyles/backStyle1.png';
import bg2 from '../../staticAdminPanel/borderStyles/backStyle2.png';
import bg3 from '../../staticAdminPanel/borderStyles/backStyle3.png';
import fr1 from '../../staticAdminPanel/borderStyles/frontStyle1.png';
import fr2 from '../../staticAdminPanel/borderStyles/frontStyle2.png';
import fr3 from '../../staticAdminPanel/borderStyles/frontStyle3.png';

const PriceCardsForm = ({ trigger, cardSelected, setTrigger }) => {
    const { register, handleSubmit } = useForm();

    const [styles, setStyles] = useState([]);
    const [stylesBack, setStylesBack] = useState([]);
    const [bgButton, setBgButton] = useState([]);

    const frontHandleCheckboxChange = (event) => {
        const styleValue = event.target.value;
        if (event.target.checked) {
            setStyles(styleValue);
        }
    };
    const backHandleCheckboxChange = (event) => {
        const styleValue = event.target.value;
        if (event.target.checked) {
            setStylesBack(styleValue);
        }
    };
    const buttonHandleCheckboxChange = (event) => {
        const styleValue = event.target.value;
        if (event.target.checked) {
            setBgButton(styleValue);
        }
    };

    const onSubmit = async (data) => {
        await updatePriceCard(
            { index: cardSelected.index }, { name: data.name }, { description: data.description },
            { price: data.price }, { option1: data.option1 }, { option2: data.option2 },
            { option3: data.option3 }, { option4: data.option4 }, { option6: data.option6 },
            { option5: data.option25 }, { moreInfo: data.moreInfo }, { backgroundBtn: data.backgroundBtn || bgButton },
            { styleFront: styles }, { styleBack: stylesBack }, {showDiscountCard: data.showDiscountCard})
        await setTrigger(trigger += 1)
    };

    const deleteCard = async (id) => {
        await deletePriceCard(id)
    }

    return (
        <>
            <h1>РЕДАГУВАННЯ КАРТКИ {cardSelected.name || 'без назви'}</h1>
            <form className={s.cardForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.cardValues}>
                    <input
                        type="text"
                        id="name"
                        placeholder=" "
                        {...register("name")}
                        className={s.input}
                        title="назва послуги"
                    />
                    <label className={s.label} htmlFor="name">{cardSelected.name.length > 20
                        ? cardSelected.name.slice(0, 20) + '...' : cardSelected.name}</label>
                </div>
                <div className={s.cardValues}>
                    <input
                        type="text"
                        id="description"
                        placeholder=" "
                        {...register("description")}
                        className={s.input}
                        title="підзаголовок"
                    />
                    <label className={s.label} htmlFor="description">{cardSelected.description.length > 20
                        ? cardSelected.description.slice(0, 20) + '...' : cardSelected.description}</label>
                </div>
                <div className={s.cardValues}>
                    <input
                        type="text"
                        id="price"
                        placeholder=" "
                        {...register("price")}
                        className={s.input}
                        title="ціна"
                    />
                    <label className={s.label} htmlFor="price">{cardSelected.price.length > 20
                        ? cardSelected.price.slice(0, 20) + '...' : cardSelected.price}</label>
                </div>
                <div className={s.cardValues}>
                    <input
                        type="text"
                        id="option1"
                        placeholder=" "
                        {...register("option1")}
                        className={s.input}
                        title="опція 1"
                    />
                    <label className={s.label} htmlFor="option1">{cardSelected.option1.length > 20
                        ? cardSelected.option1.slice(0, 20) + '...' : cardSelected.option1}</label>
                </div>
                <div className={s.cardValues}>

                    <input
                        type="text"
                        id="option2"
                        placeholder=" "
                        {...register("option2")}
                        className={s.input}
                        title="опція 2"
                    />
                    <label className={s.label} htmlFor="option2">{cardSelected.option2.length > 20
                        ? cardSelected.option2.slice(0, 20) + '...' : cardSelected.option2}</label>
                </div>
                <div className={s.cardValues}>
                    <input
                        type="text"
                        id="option3"
                        placeholder=" "
                        {...register("option3")}
                        className={s.input}
                        title="опція 3"
                    />
                    <label className={s.label} htmlFor="option3">{cardSelected.option3.length > 20
                        ? cardSelected.option3.slice(0, 20) + '...' : cardSelected.option3}</label>
                </div>
                <div className={s.cardValues}>
                    <input
                        type="text"
                        id="option4"
                        placeholder=" "
                        {...register("option4")}
                        className={s.input}
                        title="опція 4"
                    />
                    <label className={s.label} htmlFor="option4">{cardSelected.option4.length > 20
                        ? cardSelected.option4.slice(0, 20) + '...' : cardSelected.option4}</label>
                </div>
                <div className={s.cardValues}>
                    <input
                        type="text"
                        id="option5"
                        placeholder=" "
                        {...register("option5")}
                        className={s.input}
                        title="опція 5"
                    />
                    <label className={s.label} htmlFor="option5">{cardSelected.option5.length > 20
                        ? cardSelected.option5.slice(0, 20) + '...' : cardSelected.option5}</label>
                </div>
                <div className={s.cardValues}>
                    <input
                        type="text"
                        id="option6"
                        placeholder=" "
                        {...register("option6")}
                        className={s.input}
                        title="опція 6"
                    />
                    <label className={s.label} htmlFor="option6">{cardSelected.option6.length > 20
                        ? cardSelected.option6.slice(0, 20) + '...' : cardSelected.option6}</label>
                </div>
                <div className={s.cardValues}>
                    <input
                        type="text"
                        id="moreInfo"
                        placeholder=" "
                        {...register("moreInfo")}
                        className={s.input}
                        title="більше інформації"
                    />
                    <label className={s.label} htmlFor="moreInfo">{cardSelected.moreInfo.length > 20
                        ? cardSelected.moreInfo.slice(0, 20) + '...' : cardSelected.moreInfo}</label>
                </div>
                <div className={s.cardValues}>
                    <label className={`${s.label} ${s.labelForSelect}`} htmlFor="backgroundBtn">Оберіть колір кнопок</label>
                    <ul className={`${s.input} ${s.dropDownSelect}`} id="styleFront" {...register("backgroundBtn")}>
                        <ol><input type="radio" value="#2E8B57" name="backgroundBtn" onChange={buttonHandleCheckboxChange} />
                            <span>#2E8B57</span>
                            <div style={{ backgroundColor: '#2E8B57', width: '50px', height: '25px' }}></div>
                        </ol>
                        <ol><input type="radio" value="#8b2e2e" name="backgroundBtn" onChange={buttonHandleCheckboxChange} />
                            <span>#8b2e2e</span>
                            <div style={{ backgroundColor: '#8b2e2e', width: '50px', height: '25px' }}></div>
                        </ol>
                        <ol><input type="radio" value="#2e788b" name="backgroundBtn" onChange={buttonHandleCheckboxChange} />
                            <span>#2e788b</span>
                            <div style={{ backgroundColor: '#2e788b', width: '50px', height: '25px' }}></div>
                        </ol>
                    </ul>
                    <input
                        type="text"
                        id="backgroundBtn"
                        placeholder="свій варіант кольору кнопки"
                        {...register("backgroundBtn")}
                        title={`свій варіант кольору кнопки`}
                        className={s.input}
                    />
                </div>

                <div className={s.cardValues}>
                    <label for="styleFront" className={`${s.label} ${s.labelForSelect}`}>Оберіть стиль передньої рамки</label>
                    <ul className={`${s.input} ${s.dropDownSelect}`} id="styleFront" {...register("styleFront")}>
                        <ol><input type="radio" value="style1" name="styleFront" onChange={frontHandleCheckboxChange} />
                            <span>style1</span>
                            <img src={fr1} alt="" />
                        </ol>
                        <ol><input type="radio" value="style2" name="styleFront" onChange={frontHandleCheckboxChange} />
                            <span>style2</span>
                            <img src={fr2} alt="" />
                        </ol>
                        <ol><input type="radio" value="style3" name="styleFront" onChange={frontHandleCheckboxChange} />
                            <span>style3</span>
                            <img src={fr3} alt="" />
                        </ol>
                    </ul>
                </div>

                <div className={s.cardValues}>
                    <label id="styleBack" className={`${s.label} ${s.labelForSelect}`} htmlFor="styleBack">Оберіть стиль задньої рамки</label>
                    <ul className={`${s.input} ${s.dropDownSelect}`} id="styleBack" {...register("styleBack")}>
                        <ol><input type="radio" value="styleBack1" name="styleBack" onChange={backHandleCheckboxChange} />
                            <span>styleBack1</span>
                            <img src={bg1} alt="" />
                        </ol>
                        <ol><input type="radio" value="styleBack2" name="styleBack" onChange={backHandleCheckboxChange} />
                            <span>styleBack2</span>
                            <img src={bg2} alt="" />
                        </ol>
                        <ol><input type="radio" value="styleBack3" name="styleBack" onChange={backHandleCheckboxChange} />
                            <span>styleBack3</span>
                            <img src={bg3} alt="" />
                        </ol>
                    </ul>
                </div>
                <div className={`${s.cardValues} ${s.cardVAluesCheckbox}`}>
                <label  htmlFor="showDiscountCard">Показати банер зі знижкою</label>
                    <input
                        type="checkbox"
                        id="showDiscountCard"
                        placeholder=" "
                        {...register("showDiscountCard")}
                        // className={s.input}
                        title="Показати банер зі знижкою"
                    />
                </div>

                <div className={s.buttons}>
                    <button type="submit" className={s.save}>
                        ЗБЕРЕГТИ ЗМІНИ
                    </button>
                </div>
                <div className={s.buttons}>
                    <button type="button" onClick={(e) => deleteCard(cardSelected.id)} className={s.delete}>
                        Delete
                    </button>
                </div>
            </form>
        </>
    )
}

export default PriceCardsForm