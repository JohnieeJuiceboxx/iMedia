import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <div className="splash-left">
          <div className="anton-text">INTRO</div>
          <div className="anton-text">DUCING</div>
          <div id="black-text" className="anton-text">
            MOVIE
          </div>
          <div id="black-text" className="anton-text">
            CENTRAL
          </div>
          <div>The leading movie website for the lastest films.</div>

          <div className="button_cont" align="center">
            <Link to="/popular" className="example_a">
              E N T E R
            </Link>
          </div>
        </div>
        <div className="spidey-div">
          <img src="/spidey.png" className="spidey" />
        </div>
      </div>
    )
  }
}
