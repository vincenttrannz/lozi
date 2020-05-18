import request from 'superagent'

const baseURL = '/api/users/'

export function getUsers() {
  return request
    .get(baseURL)
    .then(res => res.body)
}

export function update(id, newUser) {
  return request
    .put(baseURL + id)
    .send(newUser)
    .then(res => res.body)
}