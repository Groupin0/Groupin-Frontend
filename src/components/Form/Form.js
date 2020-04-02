import React from 'react';
import './Form.scss';
import { useForm } from "react-hook-form";

const Form = ({ defaultValues, children, onSubmit, title = '' }) => {
    const methods = useForm({ defaultValues });
    const { handleSubmit } = methods;

    return (
        <form className='Form' onSubmit={ handleSubmit(onSubmit) }>
            { title }
            { Array.isArray(children)
                ? children.map(child => {
                    return child.props.name
                        ? React.createElement(child.type, {...{
                            ...child.props,
                            register: methods.register,
                            key: child.props.name
                        }}) : child;
                }) : children
            }
    </form>
    );
}

export default Form;