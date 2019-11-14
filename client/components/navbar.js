import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {toggleDarkMode} from '../store/darkMode'

class Navbar extends Component {
  render() {
    return (
      <div className="div-nav">
        <nav id="navi">
          {this.props.isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <Link to="/splash" className="nav-left">
                <div className="nav-logo">MOVIE</div>
                <div className="nav-logo">CENTRAL</div>
              </Link>
              <a
                href="#"
                className="nav-right"
                onClick={this.props.handleClick}
              >
                Logout
              </a>
            </div>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              <Link to="/splash" className="nav-left">
                <div className="nav-logo">MOVIE</div>
                <div className="nav-logo">CENTRAL</div>
              </Link>
              <div className="dark-button-def">
                <i
                  className="material-icons nav-right"
                  onClick={() => {
                    this.props.toggleDarkMode()
                  }}
                >
                  brightness_4
                </i>
              </div>

              <Link to="/login" className="nav-right">
                Login
              </Link>
              <Link to="/signup" className="nav-right">
                Sign Up
              </Link>
            </div>
          )}
        </nav>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    toggleDarkMode() {
      console.log('darkness!')
      dispatch(toggleDarkMode())
    },
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
