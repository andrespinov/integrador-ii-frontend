import { store } from '../redux/store'
import * as loginActions from '../redux/login/loginActions'

function timeout (ms, promise) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error('timeout'))
    }, ms)
    promise.then(resolve, reject)
  })
}

const parseResponse = (res) => {
  if (res && res.status < 400) return res

  let message = 'Algo saló mal}.'
  if (res && (res.message === 'Invalid token')) {
    store.dispatch(loginActions.logout())
  }
  if (res && res.status === 401) {
    message = 'Usuario o contraseña incorrectos.'
  }
  const error = { message }
  return Promise.reject(error)
}

const _fetch = async (method, url, data) => {
  const token = store.getState().authReducer.token
  const defaultHeaders = {}
  const apiUrl = 'https://integrador-ii-backend.herokuapp.com/api/v1'

  defaultHeaders.Authorization = token || ''
  defaultHeaders['Content-Type'] = 'application/json'
  // defaultHeaders.Accept = 'application/json, text/plain, */*'

  const requestInit = {
    method,
    headers: new Headers(defaultHeaders)
  }

  if (data) {
    requestInit.body = JSON.stringify(data)
  }

  return await timeout(60000, fetch(`${apiUrl}${url}`, requestInit)
    .then(response => response.json())
    //.then(json => parseResponse(json))
    .catch(function (error) {
      return Promise.reject(error)
    })
  )
}

export default _fetch
