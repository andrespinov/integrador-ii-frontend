import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Input, Button } from '../../../../components'
import { LoginFormContainer } from './styles'

const validationScheme = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required()
})

const LoginForm = ({ onSubmit }) => {

  return (
    <LoginFormContainer>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationScheme={validationScheme}
        onSubmit={onSubmit}
     >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
         <div className='form'>
            <div  className='header'>
              <h1>Welcome!</h1>
              <span>Consequat laborum fugiat dolore fugiat culpa cupidatat Lorem elit.</span>
            </div>
           <Input
              label='Email'
              value={values.email}
              onChange={handleChange}
           />
           <Input
              label='Password'
              value={values.email}
              onChange={handleChange}
           />
           <Button className='login-button' title='Login' />
         </div>
       )}
       </Formik>
    </LoginFormContainer>
  )
}

export default LoginForm
