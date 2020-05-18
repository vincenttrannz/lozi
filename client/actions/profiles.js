import {getProfiles} from '../apis/profiles'

export const REQUEST = 'REQUEST'
export const RECEIVE_PROFILES = 'RECEIVE_PROFILES'
export const CREATE_PROFILE_FAILURE = 'CREATE_PROFILE_FAILURE'

export const request = () => {
  return {
    type: REQUEST
  }
}

export const receiveProfiles = (profiles) => {
  return {
    type: RECEIVE_PROFILES,
    profiles
  }
}

export function createProfileError (message) {
  return {
    type: CREATE_PROFILE_FAILURE,
    message
  }
}

export function fetchProfiles (){
  return(dispatch) =>{
    dispatch(request())
    getProfiles()
    .then(profiles=>{
      dispatch(receiveProfiles(profiles))
    })
    .catch(err => {
      dispatch(createProfileError(err))
    })
  }
}