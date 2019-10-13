import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    this.setState({ active: !this.state.active, navBarActiveClass: !this.state.active ? 'is-active' : '' })
  }

  render() {
    return (
      <nav className="navbar is-primary" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo"><div className="navbar-logo">inspiart.co.uk</div></Link>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
            <span />
            <span />
            <span />
          </div>
        </div>
          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-start">
              <Link className="navbar-item" to="/">Home</Link>
              <Link className="navbar-item" to="/gallery">Gallery</Link>
              {/* <Link className="navbar-item" to="/blog">Blog</Link> */}
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button" href="/contact">
                    <strong>Contact Me</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
