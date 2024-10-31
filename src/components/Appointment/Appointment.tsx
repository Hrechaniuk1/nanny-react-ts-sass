// general imports 
import {FC, Dispatch} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// custom imports
import Icon from '../Icon/Icon'

// styles 
import css from './Appointment.module.scss'

// types
type AppointmentProps = {
    name: string;
    img: string;
    isOpen: Dispatch<React.SetStateAction<boolean>>
}

type InnitialType = {
    address: string
    phone: string
    age: string
    time: string
    email: string
    name: string
    comment: string
}


// component

const Appointment: FC<AppointmentProps> = ({name, img, isOpen}) => {

    const innitial: InnitialType = {
        address: '',
    phone: '',
    age: '',
    time: '',
    email: '',
    name: '',
    comment: ''
    }

    const validationSchema = Yup.object({
        address: Yup.string()
          .min(5, 'Address must be at least 5 characters long')
          .required('Address is required'),
          
        phone: Yup.string()
          .matches(/^[0-9+]{10,15}$/, 'Phone number must be between 10 and 15 digits')
          .required('Phone number is required'),
      
        age: Yup.number()
          .typeError('Age must be a number')
          .min(18, 'Minimum age is 18')
          .max(100, 'Maximum age is 100')
          .required('Age is required'),
      
        time: Yup.string()
          .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Time must be in HH:MM format')
          .required('Time is required'),
      
        email: Yup.string()
          .email('Invalid email format')
          .required('Email is required'),
      
        name: Yup.string()
          .min(2, 'Name must be at least 2 characters long')
          .required('Name is required'),
      
        comment: Yup.string()
          .max(500, 'Comment can be up to 500 characters')
          .optional(), 
      });

    function submitHandler(values:InnitialType) {
        console.log(values)
        isOpen(false)
    }

    function closeModal() {
        isOpen(false)
    }

    return (
        <div className={css.formBox}>
            <button className={css.closeBtn} onClick={closeModal}><Icon className={css.iconClose} iconName="x"></Icon></button>
            <h5 className={css.title}>Make an appointment with a babysitter</h5>
            <p className={css.description}>Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner.</p>
            <div className={css.nannyBox}>
                <div className={css.imgBox}><img src={img} alt="avatar" /></div>
                <ul className={css.nameList}>
                    <li><p>Your nanny</p></li>
                    <li><p>{name}</p></li>
                </ul>
            </div>
            <Formik
                initialValues={innitial}
                onSubmit={submitHandler}
                validationSchema={validationSchema}
            >
                <Form className={css.form}>
                    <div className={css.formGrid}>
                    <Field className={css.gridItem1} type='text' name='address' placeholder='Address' required></Field>
                    <ErrorMessage name='address' component='span'></ErrorMessage>
                    <Field className={css.gridItem2}  type='phone' name='phone' placeholder='+380...' required></Field>
                    <ErrorMessage name='phone' component='span'></ErrorMessage>
                    <Field className={css.gridItem3}  type='text' name='age' placeholder="Child's age" required></Field>
                    <ErrorMessage name='age' component='span'></ErrorMessage>
                    <Field className={css.gridItem4}  type='text' name='time' placeholder='Time' required></Field>
                    <ErrorMessage name='time' component='span'></ErrorMessage>
                    <Field className={css.gridItem5}  type='email' name='email' placeholder='Email' required></Field>
                    <ErrorMessage name='email' component='span'></ErrorMessage>
                    <Field className={css.gridItem6}  type='text' name='name' placeholder='Father or mother name' required></Field>
                    <ErrorMessage name='name' component='span'></ErrorMessage>
                    <Field className={css.gridItem7}  type='text' as="textarea" name='comment' placeholder='Comment' required></Field>
                    <ErrorMessage name='comment' component='span'></ErrorMessage>
                    </div>
                    <button type='submit' >Send</button>
                </Form>
            </Formik>
        </div>
    )

}

export default Appointment