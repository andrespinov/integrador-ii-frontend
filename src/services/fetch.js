function timeout (ms, promise) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error('timeout'))
    }, ms)
    promise.then(resolve, reject)
  })
}

const fetch = async (method, url, data) => {
  const token = ''
  const defaultHeaders = {}
  const apiUrl = ''

  defaultHeaders.Authorization = token  ? `Bearer ${token}` : ''
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

export default fetch
