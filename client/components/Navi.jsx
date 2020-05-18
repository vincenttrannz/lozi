import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navi extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/register'>Register</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navi
