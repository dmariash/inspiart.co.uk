import React from 'react'
import { Redirect } from 'react-router-dom'
import { handleLogin, isLoggedIn } from '../utils/auth'

import { layout } from '../img'

import './login.sass'

class LoginPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      password: '',
      loggedIn: isLoggedIn(),
      incorrectPassword: false,
    }
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUpdate (event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    handleLogin(this.state)
    if (isLoggedIn()) {
      this.setState({loggedIn: true})
    } else {
      this.setState({password: '', incorrectPassword: true})
    }
  }

  render () {
    if (this.state.loggedIn) {
      return (
        <Redirect to={{ pathname: `/app/home` }} />
      )
    }

    return (
      <section className='hero is-light is-fullheight login-container'>
        <img className='login-topborder' src={layout.topborder} />
        <img className='login-bottomborder' src={layout.bottomborder} />
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <h2 className='title has-text-grey login'>
              Jenny and Dan
            </h2>
            <div className='column is-4 is-offset-4'>
              <div className='box'>
                <form method='post' onSubmit={this.handleSubmit}>
                  <div className='field'>
                    <div className='control'>
                      <input
                        className={`input ${this.state.incorrectPassword === true ? 'is-danger' : ''}`}
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleUpdate}
                        style={{fontFamily: 'Adamina, monospace'}}
                      />
                    </div>
                    {this.state.incorrectPassword === true &&
                      <p className='help is-danger'>Invalid password</p>
                    }
                  </div>
                  <button 
                    className='button is-block is-info is-fullwidth'
                    style={{fontFamily: 'Adamina, monospace'}}
                  >Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default LoginPage
