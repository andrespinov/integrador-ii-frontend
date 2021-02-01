import fetch from '../fetch'
import routes from './routes'

const login = async (payload) => {
  return fetch('post', routes.LOGIN, payload)
}

export {
  login
}