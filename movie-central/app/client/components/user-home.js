import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div className="logged">
      <h3 className="welcome">Welcome, {email}</h3>
      <div>
        <h4>make yourself at home</h4>
      </div>
      <div className="button_cont" id="logged-button" align="center">
        <Link to="/splash" className="example_a">
          S T A R T
        </Link>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
