import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addProfile} from '../apis/profiles'
import {fetchProfiles, createProfileError} from '../actions/profiles'
// import profiles from '../reducers/profiles'

export class CreateProfile extends Component {
  state = {
    gender: '',
    first_name: '',
    last_name: '',
    birthday: '',
    address: '',
    city: '',
    phone: '',
    zipCode: '',
    image_url: '',
    facebook_url: ''
  }

  componentDidMount(){
    this.props.dispatch(createProfileError(''))
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submit = e => {
    e.preventDefault()
    e.target.reset()
    let {gender, first_name, last_name, birthday, address, city, phone, zipCode, image_url, facebook_url} = this.state
    
    if (isNaN(phone)) {
      return this.props.dispatch(createProfileError("Phone need to be a number, please try again"))
    }

    if (isNaN(zipCode)) {
      return this.props.dispatch(createProfileError("Zip code need to be a number, please try again"))
    }

    const confirmSuccess = () => { this.props.history.push('/') }
    
    this.props.dispatch(fetchProfiles())
    addProfile(this.state, confirmSuccess)
  }

  render() {
    const profiles = this.props.profiles
    return (
      <div>
        {profiles.errorMessage && <span>{profiles.errorMessage}</span>}
        <form onSubmit={this.submit}>
          <label htmlFor="gender">Gender</label>
          <select onChange={this.handleChange} value={this.state.gender} name="gender" required>
            <option value="">--Please choose one --</option>
            <option name='gender' value="Mr">Mr</option>
            <option name='gender' value="Ms">Ms</option>
            <option name='gender' value="Miss">Miss</option>
            <option name='gender' value="Mrs">Mrs.</option>
          </select>
          <div>
            <label htmlFor="firstname">First name: </label>
            <input type="text" name='first_name' id="first_name" required value={this.state.first_name} onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="lastname">Last name: </label>
            <input type="text" name='last_name' id="last_name" required value={this.state.last_name} onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="phone">Phone: </label>
            <input type="tel" name='phone' id="phone" required value={this.state.phone} onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="birthday">Date of birth: </label>
            <input type="date" name='birthday' id="birthday" required value={this.state.birthday} onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="address">Address :</label>
            <input type="text" name='address' id="address" required value={this.state.address} onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="city">City :</label>
            <input type="text" name='city' id="city" required value={this.state.city} onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="zipCode">Postal Code :</label>
            <input type="number" name='zipCode' id="zipCode" required value={this.state.zipCode} onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="image_url">Your image URL :</label>
            <input type="text" name='image_url' id="image_url" value={this.state.image_url} onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="facebook_url">Your facebook URL :</label>
            <input type="text" name='facebook_url' id="facebook_url" value={this.state.facebook_url} onChange={this.handleChange}/>
          </div>
          <button type='submit' value='Submit'>Submit</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(globalState){
  // console.log(globalState)
  return{
    profiles: globalState.profiles
  }
}

export default connect(mapStateToProps)(CreateProfile)
