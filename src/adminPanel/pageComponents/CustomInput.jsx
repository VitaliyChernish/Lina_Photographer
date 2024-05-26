import React, { useEffect, useState } from "react";
import s from './style.module.scss'
import { useForm } from 'react-hook-form';

const CustomInputTypeTex = ({onSubmit, name, percent, value}) => {
    const [perc, setPerc] = useState()
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        setPerc(percent.percent)
    }, [percent])

    return (
       <form onSubmit={handleSubmit(onSubmit)}>
         <div className={s.cardValues}>
            <input
                type="text"
                id={value}
                placeholder=" "
                {...register(value)}
                className={s.input}
            />
            <label className={s.label} htmlFor="name">{name + ': ' + perc}</label>
        </div>
       </form>
    )
}

export default CustomInputTypeTex;