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
        loading: true,
        error: ''
      }
    case loginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: ''
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

