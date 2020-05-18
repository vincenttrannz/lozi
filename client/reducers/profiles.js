import { RECEIVE_PROFILES, CREATE_PROFILE_FAILURE } from '../actions/profiles'

const initialState = {
  profiles: [],
  errorMessage: ''
}

function profiles (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PROFILES:
      return {
        profiles: action.profiles
      }
    case CREATE_PROFILE_FAILURE:
      return {
        errorMessage: action.message
      }
    default:
      return state
  }
}

export default profiles