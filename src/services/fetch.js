function timeout (ms, promise) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error('timeout'))
    }, ms)
    promise.then(resolve, reject)
  })
}

const _fetch = async (method, url, data) => {
  const token = ''
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
    .catch(function (error) {
      return Promise.reject(error)
    })
  )
}

export default _fetch
