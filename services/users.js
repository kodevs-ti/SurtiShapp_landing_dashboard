import { URL_BASE } from './config'

function signIn (dataCredentials) {
  const URL = `${URL_BASE}auth/login`
  const options = {
    method: 'POST',
    body: JSON.stringify(dataCredentials),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return fetch(URL, options)
}

function createAccount (dataUser) {
  const URL = `${URL_BASE}users/signup`
  const options = {
    method: 'POST',
    body: JSON.stringify(dataUser),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return fetch(URL, options)
}

export {
  signIn,
  createAccount
}
