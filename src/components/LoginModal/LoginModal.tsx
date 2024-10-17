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


// component

const LoginModal: FC = () => {

    const [isVisible, setIsVisible] = useState(false)
    const dispatch = useAppDispatch()

    function onClick() {
        setIsVisible(!isVisible)
    }

    const initial:initialType = {
        email: '',
        password: ''
    }

    function onSubmit(values:initialType):void {
        // console.log(values)
        dispatch(loginUserOperation(values))
    }

    const validationSchema: Yup.ObjectSchema<initialType> = Yup.object().shape({
        email: Yup.string().email().required('Email address is required'),
        password: Yup.string().min(8).max(15).required('Password is required')
    })

    return (
            <div>
                <Icon iconName="x"></Icon>
                <Formik
                    initialValues={initial}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form>
                        <Field type='email' name='email' required></Field>
                        <button onClick={onClick}>
                        {isVisible ? <Icon iconName="eye"></Icon>:<Icon iconName="eye-off"></Icon>}
                        </button>
                        <ErrorMessage name='email' component='span'></ErrorMessage>
                        <Field type='password' name='password' required></Field>
                        <button onClick={onClick}>
                        {isVisible ? <Icon iconName="eye"></Icon>:<Icon iconName="eye-off"></Icon>}
                        </button>
                        <ErrorMessage name='password' component='span'></ErrorMessage>
                        <button type='submit'>Login</button>
                    </Form>
                </Formik>
            </div>
    )
}

export default LoginModal