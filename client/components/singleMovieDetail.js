import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import {fetchSingleMovie, fetchSimilarMovies} from '../store/movies'

class SingleMovieDetail extends Component {
  componentDidMount() {
    const movieId = this.props.match.params.movieId

    this.props.fetchSingle(movieId)
    this.props.fetchSimilar(movieId)
  }
  componentDidUpdate(prevProps) {
    const movieId = this.props.match.params.movieId

    if (prevProps.single.id !== Number(movieId)) {
      this.props.fetchSingle(movieId)
    }
  }

  render() {
    return (
      <div className="wrapper">
        <h1 className="detail-title">{`${this.props.single.title} `}</h1>
        <h6>"{this.props.single.tagline}"</h6>
        <div className="single-detail">
          <div>
            <Link to="/popular">
              <img
                src={`https://image.tmdb.org/t/p/w300/${
                  this.props.single.poster_path
                }`}
                className="poster"
              />
            </Link>
          </div>
          <div className="right-details z-depth-2">
            <div>
              <strong>Release Date: </strong>
              {this.props.single.release_date}
            </div>
            <div>
              <strong>Runtime: </strong>
              {this.props.single.runtime} min
            </div>
            <div>
              <p>{this.props.single.overview}</p>
              <div className="also-like">
                <p className="padding-left">You might also like:</p>

                <div className="recommended">
                  {this.props.similar.slice(0, 7).map(movie => (
                    <div key={movie.id.toString()}>
                      <Link to={`/movie/${movie.id}`}>
                        <img
                          src={`https://image.tmdb.org/t/p/w45/${
                            movie.poster_path
                          }`}
                          className="poster"
                          //  onClick={movie.id => (this.updater())}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const MapState = state => {
  return {
    single: state.movies.single,
    similar: state.movies.similar
  }
}

const MapDispatch = dispatch => {
  return {
    fetchSingle: movieId => dispatch(fetchSingleMovie(movieId)),
    fetchSimilar: movieId => dispatch(fetchSimilarMovies(movieId))
  }
}

export default connect(MapState, MapDispatch)(SingleMovieDetail)
