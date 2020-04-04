import React, {useState} from 'react';
import '../../Shared/Form.scss';

import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import Button from '../../Button/Button.js';
import InputText from "../../Feilds/InputText/InputText";
import InputDate from "../../Feilds/InputDate/InputDate";
import InputTime from "../../Feilds/InputTime/InputTime";
import Dropdown from "../../Feilds/DropDown/Dropdown";
import {errorMessages} from "../../../static/formTexts";
import {createSession, isLoading} from "../../../state/actions";

const AddSession = () => {
    const dispatch = useDispatch();
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const categories = useSelector(state => state.categories);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (formValues) => {
        if (selectedCategoryId === null) {
            setSelectedCategoryId(-1);
            return;
        }
        const finalForm = {
            ...formValues,
            category: selectedCategoryId
        };

        console.log(finalForm);
        dispatch(createSession(finalForm));
    };

    return (
        <div>
        <form className='Form' onSubmit={handleSubmit(onSubmit)}>
            <p className='Form__title'>יצירת מפגש</p>
                <div className='Form__row'>
                    <InputText
                        register={register({required: true, minLength: 3, maxLength: 15})}
                        name= 'title'
                        placeholder= 'הכנס כותרת מפגש'
                        className={`Form__input ${errors.title ? 'Form__input--error' : ''}`} />
                        {errors.title && <small className='Form__error'>{errorMessages.title[errors.title.type]}</small>}
                </div>
                {/*<div className='Form__row'>*/}
                {/*    <InputDate*/}
                {/*        register={register({required: true})}*/}
                {/*        name= 'start_date'*/}
                {/*        placeholder= 'הכנס תאריך מפגש'*/}
                {/*        className={`Form__input Form__input--small ${(errors.start_date || errors.time) ? 'Form__input--error' : ''}`} />*/}
                {/*    <InputTime*/}
                {/*        register={register({required: true})}*/}
                {/*        name= 'start_time'*/}
                {/*        placeholder= 'שעת מפגש'*/}
                {/*        className={`Form__input Form__input--small ${(errors.start_date || errors.start_time) ? 'Form__input--error' : ''}`} />*/}
                {/*    {(errors.start_date || errors.start_time) && <small className='Form__error'>{errorMessages.start_date}</small>}*/}
                {/*</div>*/}
            <div className='Form__row'>
                <Dropdown
                    setValue={setSelectedCategoryId}
                    name='category'
                    defaultVal={selectedCategoryId}
                    options= {categories}
                    placeholder='בחר קטגוריה'
                    className={`Form__input ${errors.title ? 'Form__input--error' : ''}`} />
                {selectedCategoryId === -1 && <small className='Form__error'>{errorMessages.category}</small>}
            </div>
                <Button label='צור מפגש' type='submit' className='Button__black Form__button'/>
        </form>
        </div>
    );
};

export default AddSession;