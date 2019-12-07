import React, {Component} from 'react'
import StarRatingComponent from 'react-star-rating-component'
import {addedRating, fetchRating} from '../store/ratings.js'
import {connect} from 'react-redux'
import Axios from 'axios'

class starRating extends Component {
  constructor() {
    super()
    this.state = {
      showRank: false,
      rating: 0
    }
    this.showStars = this.showStars.bind(this)
    this.onStarClick = this.onStarClick.bind(this)
  }
  async componentDidMount() {
    if (this.props.isLoggedIn) {
      // let rated = await this.props.fetchRating()
      let rated = await Axios.get('api/ratings')
      let rates = rated.data.map(mov => {
        if (this.props.movieId.toString() === mov.movieId.toString()) {
          let thisOne = mov
          console.log(thisOne)
          this.setState({rating: thisOne.rating})
        }
      })
      //this.setState({rating: rated})
    }
  }

  showStars() {
    this.setState({
      showRank: !this.state.showRank
    })
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({showRank: !this.state.showRank, rating: nextValue})

    console.log(this.props.user)
    const ratingToAdd = {
      movieId: this.props.movieId,
      rating: nextValue,
      userId: this.props.user
    }
    this.props.addRating(ratingToAdd)
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

const mapState = state => {
  return {
    user: state.user.id,
    isLoggedIn: !!state.user.id
  }
}
const mapDispatch = dispatch => {
  return {
    addRating: rating => dispatch(addedRating(rating)),
    fetchRating: () => dispatch(fetchRating())
  }
}
export default connect(mapState, mapDispatch)(starRating)
