import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { loginUser, loginError } from '../actions/auth'

export class Login extends Component {
  state={
    username: '',
    password: '',
  }

  handleChange = event =>{
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    let { username, password } = this.state
    console.log(this.state)
    const confirmSuccess = () => { this.props.history.push('/') }
    this.props.dispatch(loginUser({ username, password }, confirmSuccess))
  }

  render() {
    const {auth} = this.props
    return (
      <div>
        {auth.errorMessage && <span className="">{auth.errorMessage}</span>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange} required/>
          <label htmlFor="password">Password: </label>
          <input type="text" name="password" id="password" value={this.state.password} onChange={this.handleChange} required/>
          <button type='submit' value='Login'>login</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  console.log(auth)
  return {
    auth
  }
}

export default connect(mapStateToProps)(Login)
