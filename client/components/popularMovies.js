import React, {Component} from 'react'
import {connect} from 'react-redux'

import axios from 'axios'
import SinglePopularMovie from './singlePopularMovie'
import SearchResults from './searchResults'
import {fetchPopularMovies, fetchSearchedMovies} from '../store/movies'

class PopularMovies extends Component {
  constructor() {
    super()

    this.searchMovie = this.searchMovie.bind(this)
    this.searchMovieHandler = this.searchMovieHandler.bind(this)
  }
  componentDidMount() {
    this.props.fetchPopular()
  }

  async searchMovie(clientSearch) {
    const results = await axios.get(
      'https://api.themoviedb.org/3/search/movie?api_key=777f8db0c83570a6c44492e499a03fa0&language=en-US&page=1&include_adult=false&query=' +
        clientSearch
    )
  }
  searchMovieHandler(evt) {
    const search = evt.target.value
    const results = this.props.fetchSearch(search)
  }
  render() {
    return (
      <div className="wrapper">
        <div className="pop z-depth-3">
          {this.props.search.length === 0 ? (
            <h1>Popular Movies 2019</h1>
          ) : (
            <h1>Search Results</h1>
          )}

          <h6>As determined by The Movie Database</h6>
        </div>
        <div id="search_input">
          <i className="material-icons prefix">search</i>

          <input
            id="icon_prefix"
            type="text"
            placeholder="Search a movie..."
            onChange={this.searchMovieHandler}
          />
        </div>

        <table className="striped">
          <thead>
            <tr>
              <th />
              <th>TITLE</th>
              <th>RATING</th>
            </tr>
          </thead>
          <tbody>
            {this.props.search.length === 0 ? (
              <SinglePopularMovie popular={this.props.popular} />
            ) : (
              <SearchResults popular={this.props.search} />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
const mapState = state => {
  return {
    popular: state.movies.popular,
    search: []
  }
}
const mapDispatch = dispatch => {
  return {
    fetchPopular: movies => dispatch(fetchPopularMovies()),
    fetchSearch: movies => dispatch(fetchSearchedMovies(searchItem))
  }
}

export default connect(mapState, mapDispatch)(PopularMovies)
