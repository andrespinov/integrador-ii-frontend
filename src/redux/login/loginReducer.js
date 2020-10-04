import loginTypes from './loginTypes'

const initialState = {
  loading: false,
  error: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case loginTypes.LOGIN:
      return {
        ...state,
        loading: true
      }
    case loginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case loginTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      }
    default:
      return state;
  }
}

