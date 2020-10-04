import fetch from '../fetch'
import routes from './routes'

const login = async () => {
  return fetch('post', routes.LOGIN)
}

export {
  login
}