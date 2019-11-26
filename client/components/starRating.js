import React, {Component} from 'react'
import Rating from '@material-ui/lab/Rating'
import PropTypes from 'prop-types'
import Tooltip from '@material-ui/core/Tooltip'

const labels = {
  0.5: '0.5',
  1: '1',
  1.5: '1.5',
  2: '2',
  2.5: '2.5',
  3: '3',
  3.5: '3.5',
  4: '4',
  4.5: '4.5',
  5: '5',
  6: '6',
  6.5: '6.5',
  7: '7',
  7.5: '7.5',
  8: '8',
  8.5: '8.5',
  9: '9',
  9.5: '9.5',
  10: 'PERFECT!'
}

function IconContainer(props) {
  const {value, ...other} = props
  return (
    <Tooltip title={labels[value] || ''}>
      <span {...other} />
    </Tooltip>
  )
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired
}

export default class starRating extends Component {
  constructor() {
    super()
    this.state = {
      showRank: false,
      rating: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.showStars = this.showStars.bind(this)
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
  render() {
    return (
      <div>
        <div>
          <img
            src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico "
            className="rank-star"
            width={25}
            onClick={() => this.showStars()}
            style={{display: this.state.showRank ? 'none' : 'block'}}
          />
          {this.state.rating > 0 ? this.state.rating : null}
        </div>
        <div
          className="rank"
          style={{display: this.state.showRank ? 'block' : 'none'}}
        >
          <Rating
            // name="customized-10"
            value={this.state.rating}
            max={10}
            precision={0.5}
            size="large"
            name="size-large"
            IconContainerComponent={IconContainer}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}
