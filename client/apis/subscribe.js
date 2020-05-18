import request from 'superagent'

const subscribeUrl = '/api/subscribe/'

export function getEmail(){
  return request
  .get(subscribeUrl)
  .then(res => res.body)
}

export function addEmail(subscriber){
  return request
  .post(subscribeUrl)
  .send(subscriber)
  .then(res => res.body)
  .catch(errorHandler('POST', 'api/subscribe/'))
}

function errorHandler (method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(`Error: You need to implement an API route for ${method} ${route}`)
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}