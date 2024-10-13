// general imports
import { FC, useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

// component imports
import Icon from "../Icon/Icon";

// types
type initialType = {
    name: string,
    email: string,
    password: string
}

// component

const RegistrationModal: FC = () => {

    const [isVisible, setIsVisible] = useState(false)

    function onClick() {
        setIsVisible(!isVisible)
    }

    const initial:initialType = {
        name: '',
        email: '',
        password: ''
    }

    function onSubmit(values:initialType):void {
        console.log(values)
    }

    const validationSchema: Yup.ObjectSchema<initialType> = Yup.object().shape({
        name: Yup.string().min(2).max(20).required('Enter your name please'),
        email: Yup.string().email().required('Email address is required'),
        password: Yup.string().min(8).max(15).required('Password is required')
    })

    return (
        <div>
            <div>
                <Icon iconName="x"></Icon>
                <Formik
                    initialValues={initial}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form>
                        <Field name='name' required></Field>
                        <ErrorMessage name='name' component='span'></ErrorMessage>
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
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default RegistrationModal