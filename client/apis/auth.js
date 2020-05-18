import { register as authRegister, signIn as authLogin } from 'authenticare/client'

const errorMessages = {
  "USERNAME_UNAVAILABLE": "Sorry, that username is taken.",
  "INVALID_CREDENTIALS": "Sorry, your username or password is incorrect.",
}

const authUrl = process.env.BASE_API_URL  // see .env and webpack.config.js

export function register (creds) {
  return authRegister(creds, {
      baseUrl: authUrl
    })
    .catch(err => {
      throw errorMessages[err.response.body.errorType]
    })
}

export function login (creds) {
  return authLogin(creds, {
    baseUrl: authUrl
    })
    .catch(err => {
      throw errorMessages[err.response.body.errorType]
    })
}
