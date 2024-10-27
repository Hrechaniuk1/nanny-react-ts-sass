// general imports
import { FC, useState } from "react"
import { useAppDispatch } from "../../genTypes/types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

// component imports
import Icon from "../Icon/Icon";
import { registerUserOperation } from "../../redux/operatioms";
import css from './RegistrationModal.module.scss'

// types
type initialType = {
    name: string,
    email: string,
    password: string
}

type registrFormProps = {
    isOpen: React.Dispatch<React.SetStateAction<boolean>>
}

// component

const RegistrationModal: FC<registrFormProps> = ({isOpen}) => {

    const [isVisible, setIsVisible] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState('password')

    const dispatch = useAppDispatch()

    function onClick() {
        setIsVisible(!isVisible)
        if(isPasswordVisible === 'password') {  
            setIsPasswordVisible('text')
        } else {
            setIsPasswordVisible('password')
        }
        
    }

    function closeModal() {
        isOpen(false)
    }

    function onSubmit(values:initialType):void {
        // console.log(values)
        dispatch(registerUserOperation(values))
        isOpen(false)
    }

    const initial:initialType = {
        name: '',
        email: '',
        password: ''
    }

    const validationSchema: Yup.ObjectSchema<initialType> = Yup.object().shape({
        name: Yup.string().min(2).max(20).required('Enter your name please'),
        email: Yup.string().email().required('Email address is required'),
        password: Yup.string().min(8).max(15).required('Password is required')
    })

    return (
            <div className={css.formBox}>
                <h3 className={css.title}>Registration</h3>
                <p className={css.description}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</p>
                <button className={css.closeBtn} onClick={closeModal}><Icon className={css.iconClose} iconName="x"></Icon></button>
                <Formik
                    initialValues={initial}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className={css.form}>
                        <Field name='name' placeholder='Your name' required></Field>
                        <ErrorMessage name='name' component='span'></ErrorMessage>
                        <Field type='email' name='email' placeholder='Email' required></Field>
                        <ErrorMessage name='email' component='span'></ErrorMessage>
                        <div className={css.inputBox}>
                        <Field type={isPasswordVisible} name='password' placeholder='Password' required></Field>
                        <button className={css.isVisBtn} onClick={onClick} type="button">
                        {isVisible ? <Icon className={css.iconEye} iconName="eye"></Icon>:<Icon className={css.iconEye} iconName="eye-off"></Icon>}
                        </button>
                        </div>
                        <ErrorMessage name='password' component='span'></ErrorMessage>
                        <button className={css.submitBtn} type='submit'>Register</button>
                    </Form>
                </Formik>
            </div>
    )
}

export default RegistrationModal