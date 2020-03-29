import React from 'react';
import Button from '../Button/Button.js';
import InputField from '../InputField/InputField.js';

const AddSession = props => {

    return (
        <>
        <div className='Modal__content--header'>
            <h1 className=''>צור מפגש</h1>
        </div>
        <div className='Modal__content--body'>
            <InputField 
                label= 'שם המפגש'
                name= 'sessionName' 
                type= 'text'
                value= 'sessionName'
                placeholder= 'הכנס שם מפגש...'
                className=' InputField__border'
            />
            <InputField 
                label= 'קטגוריה'
                name= 'category' 
                type= 'text'
                value= 'caterogy'
                placeholder= 'בחר קטגוריה...'
                className=' InputField__border'
            />
        </div>
        <div className='Modal__content--actions'>
            <Button label='צור מפגש' type='submit' className='Button__black' onClick={ props.onSubmit }/>
        </div> 
        </>
    );
}

export default AddSession;