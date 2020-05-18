import request from 'superagent'

const profilesUrl = '/api/profiles/'

export function getProfiles(){
  return request
  .get(profilesUrl)
  .then(res => res.body)
}

export function getProfileById(id){
  return request
  .get(`${profilesUrl}${id}`)
  .then(res => res.body)
}

export function addProfile(profile){
  return request
  .post(profilesUrl)
  .send(profile)
  .then(res => res.body)
  .catch(errorHandler('POST', 'api/profiles/'))
}

export function deleteProfile(id){
  return request
  .delete(`${profilesUrl}${id}`)
  .then(res => res.body)
  .catch(errorHandler('DELETE', 'api/profiles/:id'))
}

export function updateProfile (profile) {
  return request
    .put(`${profilesUrl}${task.id}`)
    .send(profile)
    .then(res =>{res.body})
    .catch(errorHandler('PUT', 'api/profiles/:id'))
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