import React, { Component } from 'react'

import {addEmail} from '../apis/subscribe'

export class Lead extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
    }
    this.submit = false
  }
  
  handleChange = e =>{
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e =>{
    e.preventDefault()
    addEmail(this.state)
    .then(this.props.showSubscribes)
    .then(this.resetForm)
    this.submit = true
  }

  resetForm = () =>{
    this.setState({
      name: '',
      email: ''
    })
  }

  render() {
    const subscribes = this.props.subscribes
    return (
      <div>
        <div className='logo'>
        </div>
        <div className='welcome'>
          <h3>Introducing</h3>
          <h1>Cravee</h1>
        </div>
        <div className='content'>
          <p>We're creating a magical app to help you find all the food that you desire for in Canada and accross the world.</p>
          <p>You'll find places/shops near you that you never know existed, from local street food to weird and wonderful fine dining restaurants.</p>
          <p>We hope it's gonna be the last city guide you will ever need to your next travel. And it's free!</p>
          <p><b>Get early access.</b> <strong>Launching late June, 2020</strong></p>
        </div>
        <div className='subscriber'>
          <p>We have {subscribes.length} subscribers ready to rock the market</p>
        </div>
        {!this.submit &&
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Your name: </label>
            <input type="text" id='name' name='name' value={this.state.name} onChange={this.handleChange}/>
            <label htmlFor="email">Your email: </label>
            <input type="email" id='email' name='email' value={this.state.email} onChange={this.handleChange}/>
            <button type='submit' value='Submit'>submit</button>
          </form>
        </div>
        }
        {this.submit &&
        <h3>Thanks for your subscribe, you are our #{subscribes.length} member</h3>
        }
      </div>
    )
  }
}

export default Lead
