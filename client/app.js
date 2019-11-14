import React from 'react'
import {connect} from 'react-redux'
import {Navbar} from './components'
import Routes from './routes'

const App = props => {
  console.log(props.darkMode.darkmode)
  return (
    <div
      id="app-main"
      className={props.darkMode.darkmode ? 'darkmode' : 'lightmode'}
    >
      <Navbar />
      <Routes />
    </div>
  )
}

const mapState = state => {
  return {
    darkMode: state.darkMode
  }
}

export default connect(mapState)(App)
