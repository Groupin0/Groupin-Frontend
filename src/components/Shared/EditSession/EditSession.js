import React, {useState} from "react";
import InputText from "../../Feilds/InputText/InputText";
import {errorMessages} from "../../../static/formTexts";
import Dropdown from "../../Feilds/DropDown/Dropdown";
import Button from "../../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import InputDate from "../../Feilds/InputDate/InputDate";
import InputTime from "../../Feilds/InputTime/InputTime";
import InputNumber from "../../Feilds/InputNumber/InputNumber";
import InputTextArea from "../../Feilds/InputTextArea/InputTextArea";
import InputCheckbox from "../../Feilds/InputCheckbox/InputCheckbox";
import {prapreEditForm} from "../../../services/formService";
import {editSession} from "../../../state/actions";
import {importZoomUrl} from "../../../services/platformService";


const EditSession = ({session}) => {
    const {id, title, start_date, end_date, category, capacity, platform_media_id, platform_media_pwd, description, active} = session;
    const dispatch = useDispatch();
    const [selectedCategoryId, setSelectedCategoryId] = useState(category);
    const [descriptionText, setDescriptionText] = useState(description);
    const categories = useSelector(state => state.categories);
    const { register, handleSubmit, errors } = useForm();


    const onSubmit = (form) => {
        const finalForm = prapreEditForm(form, descriptionText, selectedCategoryId, id);
        dispatch(editSession(finalForm));
    };

    return (
        <div>
            <form className='Form' style={{width: '600px'}} onSubmit={handleSubmit(onSubmit)}>
                <p className='Form__title'>עריכת מפגש</p>
                <div className='Form__row'>
                    <InputText
                        register={register({required: true, minLength: 3, maxLength: 45})}
                        name='title'
                        defaultValue={title}
                        placeholder='הכנס כותרת מפגש'
                        className={`Form__input ${errors.title ? 'Form__input--error' : ''}`}/>
                    {errors.title && <small className='Form__error'>{errorMessages.title[errors.title.type]}</small>}
                </div>
                <div className='Form__row'>
                    <Dropdown
                        setValue={setSelectedCategoryId}
                        name='category'
                        defaultVal={selectedCategoryId}
                        options={categories}
                        placeholder='בחר קטגוריה'
                        className={`Form__input ${selectedCategoryId === -1 ? 'Form__input--error' : ''}`}/>
                    {selectedCategoryId === -1 && <small className='Form__error'>{errorMessages.category}</small>}
                </div>
                <div className='Form__row'>
                    <InputDate
                        register={register({required: true})}
                        name= 'start_date'
                        defaultValue={start_date}
                        placeholder= 'הכנס תאריך מפגש'
                        className={`Form__input Form__input--small ${(errors.start_date || errors.time) ? 'Form__input--error' : ''}`} />
                    <InputTime
                        register={register({required: true})}
                        name= 'start_time'
                        defaultValue={start_date}
                        placeholder= 'שעת מפגש'
                        className={`Form__input Form__input--small ${(errors.start_date || errors.start_time) ? 'Form__input--error' : ''}`} />
                        {(errors.start_date || errors.start_time) && <small className='Form__error'>{errorMessages.start_date}</small>}
                </div>
                <div className='Form__row'>
                    <InputNumber
                        register={register({required: true, min: 10, max: 180})}
                        defaultValue={(end_date - start_date) / 1000 / 60}
                        name= 'duration'
                        placeholder= 'משך זמן המפגש בדקות'
                        className={`Form__input Form__input--small ${(errors.duration) ? 'Form__input--error' : ''}`} />
                    <InputNumber
                        register={register}
                        name= 'capacity'
                        defaultValue={capacity}
                        placeholder= 'כמות משתתפים'
                        className={`Form__input Form__input--small`} />
                        {errors.duration && <small className='Form__error'>{errorMessages.duration[errors.duration.type]}</small>}
                </div>
                <div className='Form__row'>
                    <InputText
                        register={register({pattern: /zoom.us\/j\/(\w+)(\?pwd=(.*))*/})}
                        name='platform_url'
                        defaultValue={platform_media_id ? importZoomUrl(platform_media_id, platform_media_pwd) : ''}
                        placeholder='הכנס כתובת מפגש (ZOOM URL)'
                        className={`Form__input ${errors.platform_url ? 'Form__input--error' : ''}`}/>
                        {errors.platform_url && <small className='Form__error'>{errorMessages.platform_url}</small>}
                </div>
                <div className='Form__row'>
                    <InputTextArea
                        defaultVal={descriptionText}
                        className={`Form__input`}
                        placeholder='הכנס הסבר על המפגש... (עד 2000 תווים)'
                        onChange={setDescriptionText}
                    />
                </div>
                <div className='Form__row'>
                    <InputCheckbox
                        name='active'
                        defaultValue={active}
                        className={`Form__input`}
                        register={register}
                    />
                </div>
                <Button label='סיים' type='submit' className='Button__black Form__button'/>
            </form>
        </div>
    )
};

export default EditSession;
