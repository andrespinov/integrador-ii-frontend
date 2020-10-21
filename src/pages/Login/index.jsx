import React from 'react'
import Grid from '@material-ui/core/Grid'
import LoginForm from './components/LoginForm'
import { LoginContainer } from './styles'

const Login = () => {
  return (
    <LoginContainer>
      <Grid container spacing={3} justify='center' className='content'>
        <Grid item xs={12} md={5} align='center'>
          <LoginForm />
        </Grid>
        <Grid item xs={12} md={7} className='panel'></Grid>
      </Grid>
    </LoginContainer>
  )
}

export default Login
