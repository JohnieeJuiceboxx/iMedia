import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import axios from 'axios'

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      searchResults: {}
    }
    this.searchMovie = this.searchMovie.bind(this)
    this.searchMovie()
  }
  async searchMovie() {
    const results = await axios.get(
      'https://api.themoviedb.org/3/search/movie?api_key=777f8db0c83570a6c44492e499a03fa0&language=en-US&query=batman&page=1&include_adult=false'
    )
    this.setState({
      searchResults: {...results.data.results}
    })
  }

  render() {
    return (
      <div className="div-nav">
        <nav id="navi">
          {this.props.isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <Link to="/home">Home</Link>
              <a href="#" onClick={this.props.handleClick}>
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

              <input
                id="nav-center"
                type="text"
                placeholder="Search a movie..."
              />

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
