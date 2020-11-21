import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Input, Button } from '../../../../components'
import { LoginFormContainer } from './styles'

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  password: Yup.string().required()
})

const LoginForm = ({ onSubmit, loading, error }) => {

  return (
    <LoginFormContainer>
      <Formik
        initialValues={{ name: '', password: '' }}
        validationSchema={validationSchema}
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
              name='name'
              label='Username'
              value={values.email}
              onChange={handleChange}
              error={Boolean(touched.name && errors.name)}
              errorMessage={errors.name}
            />
            <Input
              name='password'
              label='Password'
              value={values.email}
              onChange={handleChange}
              type='password'
              error={Boolean(touched.password && errors.password)}
              errorMessage={errors.password}
            />
            {Boolean(error) && <div className='error-message'><span>{error}</span></div>}
            <Button
              onClick={handleSubmit}
              className='login-button'
              title='Log in'
              loading={loading}
            />
          </div>
        )}
      </Formik>
    </LoginFormContainer>
  )
}

export default LoginForm
