import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Splash extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.darkMode.darkmode !== this.props.darkMode.darkmode) {
      this.spiderSelector()
    }
  }
  spiderSelector() {
    if (!this.props.darkMode.darkmode) {
      return <img src="/spidey.png" className="spidey" />
    }
    return <img src="/black-suit-spider-man.png" className="spidey2" />
  }
  render() {
    return (
      <div className="splash">
        <div className="splash-left">
          <div className="anton-text intro-text">INTRO</div>
          <div className="anton-text intro-text">DUCING</div>
          <div id="black-text" className="anton-text">
            MOVIE
          </div>
          <div id="black-text" className="anton-text">
            CENTRAL
          </div>
          <div className="overview">
            The leading movie website for the lastest films.
          </div>

          <div className="button_cont" align="center">
            <Link to="/popular" className="example_a">
              E N T E R
            </Link>
          </div>
        </div>
        <div className="spidey-div">
          {/* {!this.props.darkMode.darkmode ? (
            <img src="/spidey.png" className="spidey" />
          ) : (
            <img src="/black-suit-spider-man.png" className="spidey" />
          )} */}
          {this.spiderSelector()}
        </div>
      </div>
    )
  }
}
const mapState = state => {
  return {
    darkMode: state.darkMode
  }
}
export default connect(mapState)(Splash)
