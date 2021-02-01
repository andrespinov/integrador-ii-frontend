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
          handleSubmit,
        }) => (
          <div className='form'>
            <div  className='header'>
              <h1>Bienvenido!</h1>
              <span>A la plataforma para construir tus sueños.</span>
            </div>
            <Input
              name='name'
              label='Usuario'
              value={values.email}
              onChange={handleChange}
              error={Boolean(touched.name && errors.name)}
              errorMessage={errors.name}
            />
            <Input
              name='password'
              label='Contraseña'
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
              title='Ingresar'
              loading={loading}
            />
          </div>
        )}
      </Formik>
    </LoginFormContainer>
  )
}

export default LoginForm
