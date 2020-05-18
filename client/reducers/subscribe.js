import { RECEIVE_EMAIL } from '../actions/subscribe'

const initialState = []

function subscribe (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_EMAIL:
      return action.emails
    default:
      return state
  }
}

export default subscribe