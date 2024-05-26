import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import s from './forms.module.scss'
import { createPriceCard } from '../../utils/functions/create';
import bg1 from '../../staticAdminPanel/borderStyles/backStyle1.png';
import bg2 from '../../staticAdminPanel/borderStyles/backStyle2.png';
import bg3 from '../../staticAdminPanel/borderStyles/backStyle3.png';
import fr1 from '../../staticAdminPanel/borderStyles/frontStyle1.png';
import fr2 from '../../staticAdminPanel/borderStyles/frontStyle2.png';
import fr3 from '../../staticAdminPanel/borderStyles/frontStyle3.png';

const AddNewPriceCardsForm = ({ trigger, setTrigger }) => {
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
        await createPriceCard(
            { index: new Date().getTime() }, { name: data.name }, { description: data.description },
            { price: data.price }, { option1: data.option1 }, { option2: data.option2 },
            { option3: data.option3 }, { option4: data.option4 }, { option5: data.option5 },
            { option6: data.option6 }, { moreInfo: data.moreInfo }, { backgroundBtn: data.backgroundBtn || bgButton },
            { styleFront: styles }, { styleBack: stylesBack })
        await setTrigger(trigger += 1)
    };

    return (
        <>
            <h1>СТВОРЕННЯ КАРТКИ ПОСЛУГ</h1>
            <form className={s.cardForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.cardValues}>
                    <input
                        type="text"
                        id="name"
                        placeholder=" "
                        {...register("name")}
                        className={s.input}
                    />
                    <label className={s.label} htmlFor="name">Назва послуги</label>
                </div>
                <div className={s.cardValues}>
                    <input
                        type="text"
                        id="description"
                        placeholder=" "
                        {...register("description")}
                        className={s.input}
                    />
                    <label className={s.label} htmlFor="description">Короткий опис</label>
                </div>
                <div className={s.cardValues}>
                    <input
                        type="text"
                        id="price"
                        placeholder=" "
                        {...register("price")}
                        className={s.input}
                    />
                    <label className={s.label} htmlFor="price">ціна</label>
                </div>
                <div className={s.cardValues}>
                    <input
                        type="text"
                        id="option1"
                        placeholder=" "
                        {...register("option1")}
                        className={s.input}
                    />
                    <label className={s.label} htmlFor="option1">опція 1</label>
                </div>
                <div className={s.cardValues}>

                    <input
                        type="text"
                        id="option2"
                        placeholder=" "
                        {...register("option2")}
                        className={s.input}
                    />
                    <label className={s.label} htmlFor="option2">опція 2</label>
                </div>
                <div className={s.cardValues}>
                    <input
                        type="text"
                        id="option3"
                        placeholder=" "
                        {...register("option3")}
                        className={s.input}
                    />
                    <label className={s.label} htmlFor="option3">опція 3</label>
                </div>
                <div className={s.cardValues}>
                    <input
                        type="text"
                        id="option4"
                        placeholder=" "
                        {...register("option4")}
                        className={s.input}
                    />
                    <label className={s.label} htmlFor="option4">опція 4</label>
                </div>
                <div className={s.cardValues}>
                    <input
                        type="text"
                        id="option5"
                        placeholder=" "
                        {...register("option5")}
                        className={s.input}
                    />
                    <label className={s.label} htmlFor="option5">опція 5 </label>
                </div>
                <div className={s.cardValues}>
                    <input
                        type="text"
                        id="option6"
                        placeholder=" "
                        {...register("option6")}
                        className={s.input}
                    />
                    <label className={s.label} htmlFor="option6">опція 6 </label>
                </div>
                <div className={s.cardValues}>
                    <input
                        type="text"
                        id="moreInfo"
                        placeholder=" "
                        {...register("moreInfo")}
                        className={s.input}
                    />
                    <label className={s.label} htmlFor="moreInfo">розгорнута інформація</label>
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

                <div className={s.buttons}>
                    <button type="submit" className={s.save}>
                        Створити картку
                    </button>
                </div>
            </form>
        </>
    )
}

export default AddNewPriceCardsForm