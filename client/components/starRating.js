import React, {Component} from 'react'
import StarRatingComponent from 'react-star-rating-component'
import {connect} from 'react-redux'

class starRating extends Component {
  constructor() {
    super()
    this.state = {
      showRank: false,
      rating: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.showStars = this.showStars.bind(this)
    this.onStarClick = this.onStarClick.bind(this)
  }

  showStars() {
    this.setState({
      showRank: !this.state.showRank
    })
  }
  handleChange(evt) {
    this.setState({
      showRank: !this.state.showRank,
      rating: evt.target.value
    })
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({showRank: !this.state.showRank, rating: nextValue})
  }
  render() {
    const {rating} = this.state

    return (
      <div>
        <div>
          {this.state.rating > 0 ? (
            <img
              src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico "
              className="rank-star"
              width={25}
              onClick={() => this.showStars()}
              style={{display: this.state.showRank ? 'none' : 'inline'}}
            />
          ) : (
            <img
              src="https://www.freeiconspng.com/uploads/white-star-icon-2.png"
              className="rank-star"
              width={25}
              onClick={() => this.showStars()}
              alt="Icon Free White Star"
              style={{display: this.state.showRank ? 'none' : 'block'}}
            />
          )}
          {this.state.rating > 0 ? this.state.rating : null}
        </div>
        <div
          className="rank"
          style={{display: this.state.showRank ? 'block' : 'none'}}
        >
          <StarRatingComponent
            name="rate1"
            starCount={10}
            value={rating}
            onStarClick={this.onStarClick}
          />
        </div>
      </div>
    )
  }
}

export default connect(mapState, null)(starRating)
