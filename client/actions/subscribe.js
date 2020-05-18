import {getEmail} from '../apis/subscribe'

export const REQUEST = 'REQUEST'
export const RECEIVE_EMAILS = 'RECEIVE_EMAILS'

export const request = () => {
  return {
    type: REQUEST
  }
}

export const receiveEmails = (emails) => {
  return {
    type: RECEIVE_EMAILS,
    emails
  }
}

export function fetchEmails (){
  return(dispatch) =>{
    getEmail()
    .then(emails=>{
      dispatch(receiveEmails(emails))
    })
  }
}