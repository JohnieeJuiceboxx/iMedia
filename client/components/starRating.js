import React, {Component} from 'react'
import StarRatingComponent from 'react-star-rating-component'
import {addedRating, fetchRating, updateRatingValue} from '../store/ratings.js'
import {useToasts} from 'react-toast-notifications'
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
      let rated = await Axios.get('api/ratings')
      rated.data.map(mov => {
        if (
          this.props.movieId.toString() === mov.movieId.toString() &&
          this.props.user.toString() === mov.userId.toString()
        ) {
          let thisOne = mov
          this.setState({rating: thisOne.rating})
        }
      })
    }
  }

  showStars() {
    this.setState({
      showRank: !this.state.showRank
    })
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({showRank: !this.state.showRank, rating: nextValue})

    const ratingToAdd = {
      movieId: this.props.movieId,
      rating: nextValue,
      userId: this.props.user
    }
    if (this.state.rating > 0) {
      this.props.updateRating(ratingToAdd)
    } else {
      this.props.addRating(ratingToAdd)
    }
  }
  render() {
    const {rating} = this.state
    // const {addToast} = useToasts()
    // addToast('Rating Saved!', {
    //   appearance: 'success',
    //   autoDismiss: true,
    //   autoDismissTimeout: 2500
    // })

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
    fetchRating: () => dispatch(fetchRating()),
    updateRating: movie => dispatch(updateRatingValue(movie))
  }
}
export default connect(mapState, mapDispatch)(starRating)
