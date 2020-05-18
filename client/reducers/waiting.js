import { RECEIVE_PROFILES, REQUEST} from '../actions/profiles'

const initialState = false

function waiting (state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return true

    case RECEIVE_PROFILES:
      return false

    default:
      return state
  }
}

export default waiting