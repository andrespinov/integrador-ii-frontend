import loginTypes from '../login/loginTypes'

const initialState = {
  token: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case loginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload
      }
    case loginTypes.LOGOUT:
      return {
        ...state,
        token: null
      }
    default:
      return state;
  }
}

