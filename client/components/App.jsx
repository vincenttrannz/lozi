import React, {Component} from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import { checkAuth } from '../actions/auth'
import { logoutUser } from '../actions/auth'

import Landing from './Landing'
import Login from './Login'
import Register from './Register'
import Navi from './Navi'
import CreateProfile from './CreateProfile'
import Profile from './Profile'

export class App extends Component{
  componentDidMount() {
    const confirmSuccess = () => { }
    this.props.dispatch(checkAuth(confirmSuccess))
  }

  logout = event => {
    event.preventDefault()
    this.props.dispatch(logoutUser())
  }

  render(){
    const {auth} = this.props
    return(
      <div className='wrapper'>
        <h1>This is Lozi</h1>
        <Router>
          {!auth.isAuthenticated && 
            <>
            <Route exact path='/'>
              <Navi/>
              <Landing/>
            </Route>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            </>
          }

          {auth.isAuthenticated &&
            <>
            <h2>Login successful</h2>
            <Link to="/" onClick={this.logout}>LOGOUT</Link>

            <Link to='/createProfile'>Create your profile</Link>
            <Route exact path='/createProfile' component={CreateProfile}/>

            <Link to='/profile'>Your profile</Link>
            <Route exact path='/profile' component={Profile}></Route>
            </>
          }
        </Router>
      </div>
    )
  }
}

function mapStateToProps({auth}){
  // console.log(auth)
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
