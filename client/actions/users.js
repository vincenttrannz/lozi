export const RECEIVE_USERS = 'RECEIVE_USERS'

import { getUsers, update } from '../apis/users'

export function receiveUsers() {
  return dispatch => {
    return getUsers()
      .then(res => {
        return dispatch({
          type: RECEIVE_USERS,
          users: res
        })
      })
  }
}

export function updateUser(id, user) {
  return dispatch => {
    return update(id, user)
      .then(res => {
        return dispatch({
          type: 'LOGIN_SUCCESS',
          user: res
        })
      })
  }
}