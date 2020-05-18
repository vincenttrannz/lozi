import React, { Component } from 'react'
import {connect} from 'react-redux'
// import {getProfiles} from '../apis/profiles'
import {fetchProfiles} from '../actions/profiles'

export class Profile extends Component {
  componentDidMount(){
    this.props.dispatch(fetchProfiles())
  }
  render() {
    const auth = this.props.auth
    const profiles = this.props.profiles.profiles
    const yourProfile = profiles.find(profile => profile.id === auth.user.id)
    console.log(yourProfile)
    return (
      <div>
        <h1>Your profile</h1>
        {(yourProfile) ? 
        <div>
          <img src={yourProfile.image_url} width='20%' alt={`${yourProfile.first_name} profile image`}/>
          <ul>
            <li>Name: {yourProfile.first_name} {yourProfile.last_name}</li>
            <li>Date of birth: {yourProfile.birthday}</li>
            <li>Phone: {yourProfile.phone}</li>
            <li>Address: {yourProfile.address}, {yourProfile.city}</li>
            <li>Zip Code: {yourProfile.zipCode}</li>
          </ul>
        </div> :
        <div>
          <h1>loading</h1>
        </div>
        }
      </div>
    )
  }
}

function mapStateToProps(globalState){
  return{
    auth: globalState.auth,
    profiles: globalState.profiles
  }
}

export default connect(mapStateToProps)(Profile)
