// general imports
import { FC, useState } from "react"
import { useAppDispatch } from "../../genTypes/types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

// component imports
import Icon from "../Icon/Icon";
import { loginUserOperation } from "../../redux/operatioms";

// types
type initialType = {
    email: string,
    password: string
}

type loginFormProps = {
    isOpen: React.Dispatch<React.SetStateAction<boolean>>
}

// styles 
import css from './LoginModal.module.scss'

// component

const LoginModal: FC<loginFormProps> = ({isOpen}) => {

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
        dispatch(loginUserOperation(values))
    }

    const initial:initialType = {
        email: '',
        password: ''
    }

    const validationSchema: Yup.ObjectSchema<initialType> = Yup.object().shape({
        email: Yup.string().email().required('Email address is required'),
        password: Yup.string().min(8).max(15).required('Password is required')
    })

    return (
            <div className={css.formBox}>
                <h3 className={css.title}>Log in</h3>
                <p className={css.description}>Welcome back! Please enter your credentials to access your account and continue your babysitter search.</p>
                <button className={css.closeBtn} onClick={closeModal}><Icon className={css.iconClose} iconName="x"></Icon></button>
                <Formik
                    initialValues={initial}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className={css.form}>
                        <div className={css.inputBox}>
                        <Field className={css.input} type='email' name='email' placeholder='Email' required></Field>
                        <ErrorMessage name='email' component='span'></ErrorMessage>
                        </div>
                        <div className={css.inputBox}>
                        <Field className={css.input} type={isPasswordVisible} name='password' placeholder='Password' required></Field>
                        <button className={css.isVisBtn} onClick={onClick} type="button">
                        {isVisible ? <Icon className={css.iconEye} iconName="eye"></Icon>:<Icon className={css.iconEye} iconName="eye-off"></Icon>}
                        </button>
                        <button className={css.submitBtn} type='submit'>Login</button>
                        <ErrorMessage name='password' component='span'></ErrorMessage>
                        </div>
                    </Form>
                </Formik>
            </div>
    )
}

export default LoginModal