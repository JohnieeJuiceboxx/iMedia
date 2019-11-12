import React, {Component} from 'react'

import {Link, BrowserRouter as Router} from 'react-router-dom'
import axios from 'axios'

export default class SingleMovieDetail extends Component {
  constructor() {
    super()
    this.state = {
      movieDetails: {},
      similar: []
    }
  }
  async componentDidMount() {
    const movieId = this.props.match.params.movieId
    const movies = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=777f8db0c83570a6c44492e499a03fa0&language=en-US
    `)
    const similar = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=777f8db0c83570a6c44492e499a03fa0&language=en-US&page=1
    `)
    this.setState({
      movieDetails: {...movies.data},
      similar: [...similar.data.results]
    })
  }
  async updater(movieId) {
    console.log(movieId)
    const movies = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=777f8db0c83570a6c44492e499a03fa0&language=en-US
    `)
    this.setState({
      movieDetails: {...movies.data}
    })
  }
  render() {
    return (
      <Router>
        <div className="wrapper">
          <h1 className="detail-title">{`${
            this.state.movieDetails.title
          } `}</h1>
          <h6>"{this.state.movieDetails.tagline}"</h6>
          <div className="single-detail">
            <div>
              <Link to="/popular">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${
                    this.state.movieDetails.poster_path
                  }`}
                  className="poster"
                />
              </Link>
            </div>
            <div className="right-details z-depth-2">
              <div>
                <strong>Release Date: </strong>
                {this.state.movieDetails.release_date}
              </div>
              <div>
                <strong>Runtime: </strong>
                {this.state.movieDetails.runtime} min
              </div>
              <div>
                <p>{this.state.movieDetails.overview}</p>
                <div className="also-like">
                  <p className="padding-left">You might also like:</p>

                  <div className="recommended">
                    {this.state.similar.slice(0, 7).map(movie => (
                      <div key={movie.id.toString()}>
                        <Link to={`/movie/${movie.id}`}>
                          <img
                            src={`https://image.tmdb.org/t/p/w45/${
                              movie.poster_path
                            }`}
                            className="poster"
                            onClick={`${movie.id} => this.updater()`}
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
      </Router>
    )
  }
}
