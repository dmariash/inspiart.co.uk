import React from 'react'
import { Redirect } from 'react-router-dom'
import { logout } from '../utils/auth'

class LogoutPage extends React.Component {

  render () {
    logout()
    return (
      <Redirect to={{ pathname: `/app/login` }} />
    )
  }
}

export default LogoutPage
