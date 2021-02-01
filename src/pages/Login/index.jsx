import React, { useCallback } from 'react'
import Grid from '@material-ui/core/Grid'
import LoginForm from './components/LoginForm'
import { LoginContainer } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/login/loginActions'
import BuildImage from '../../assets/images/buildingg.png'

const Login = () => {
  const { loading, error } = useSelector(state => state.loginReducer)
  const dispatch = useDispatch()

  const handleLogin = useCallback((payload) => {
    dispatch(login(payload))
  }, [dispatch])

  return (
    <LoginContainer>
      <Grid container justify='center' className='content'>
        <Grid item xs={12} md={5} align='center'>
          <LoginForm onSubmit={handleLogin} loading={loading} error={error} />
        </Grid>
        <Grid item xs={12} md={7} className='panel'>
          <img alt='Building' className='building' src={BuildImage} />
        </Grid>
      </Grid>
    </LoginContainer>
  )
}

export default Login
