import React from 'react';
import Button from '../Button/Button.js';
import Form from '../Form/Form.js';
import Input from '../Form/Input.js';
import Dropdown from '../Form/Dropdown.js';
import Category from './Category.js';

const AddSession = props => {

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <>
        <Form title={<p className='Form__title'>צור מפגש</p>} onSubmit={onSubmit}>
                <Input 
                    name= 'sessionName' 
                    type= 'text'
                    placeholder= 'הכנס שם מפגש...'
                    className='Form__input'
                    required
                />
                <Dropdown 
                    name= 'sessionCategory' 
                    options= {Category}
                    className='Form__input'
                    required
                />
                <Input 
                    name= 'sessionDate' 
                    type= 'date'
                    placeholder= 'הכנס שם מפגש...'
                    className='Form__input Form__input--2'
                    required
                />
                <Input 
                    name= 'sessionTime' 
                    type= 'text'
                    placeholder= ' hh:mm '
                    className='Form__input Form__input--2'
                    pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
                    required
                />
                <Button label='צור מפגש' type='submit' className='Button__black Form__button'/>
        </Form>
        </>
    );
}

export default AddSession;