import loginTypes from './loginTypes'

const login = (payload) => ({
  type: loginTypes.LOGIN,
  payload
})

const loginSuccess = (payload) => ({
  type: loginTypes.LOGIN_SUCCESS,
  payload
})

const loginFailure = (payload) => ({
  type: loginTypes.LOGIN_FAILURE,
  payload
})

const logout = () => ({
  type: loginTypes.LOGOUT
})

export {
  login,
  loginSuccess,
  loginFailure,
  logout
}
