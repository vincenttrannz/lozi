import React, { Component } from 'react'
import {connect} from 'react-redux'
import { loginError, registerUserRequest } from '../actions/auth'

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  }

  componentDidMount() {
    this.props.dispatch(loginError(''))
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submit = e => {
    e.preventDefault()
    e.target.reset()
    let { username, email, password, confirm_password,} = this.state

    if (confirm_password != password) {
      return this.props.dispatch(loginError("Passwords don't match, please try again"))
    }

    const confirmSuccess = () => { this.props.history.push('/profile') }

    this.props.dispatch(registerUserRequest({ username, email, password,}, confirmSuccess))
  }

  render() {
    const {auth} = this.props
    return (
      <div>
        <h5>Sign Up</h5>
        {auth.errorMessage && <div><strong style={{color: 'brown'}}>{auth.errorMessage}</strong></div>}
        <form onSubmit={this.submit}>
          <label htmlFor="username">User name: </label>
          <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange} required/>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange} required/>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} required/>
          <label htmlFor="confirm_password">Confirm password: </label>
          <input type="password" name="confirm_password" id="confirm_password" value={this.state.confirm_password} onChange={this.handleChange} required/>
          <button type="submit" value="Signup">signup</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({auth}){
  return{
    auth
  }
}

export default connect(mapStateToProps)(Register)
