import { URL_BASE } from './config'

function create (storeData, token) {
  const URL = `${URL_BASE}stores`
  const options = {
    method: 'POST',
    body: JSON.stringify(storeData),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return fetch(URL, options)
}

export { create }
