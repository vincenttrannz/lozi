import {combineReducers} from 'redux'

import auth from './auth'
import users from './users'
import profiles from './profiles'
import waiting from './waiting'

export default combineReducers({
//  import stuffs
  auth,
  waiting,
  users,
  profiles
})
