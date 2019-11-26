import React, {Component} from 'react'
import axios from 'axios'
import SinglePopularMovie from './singlePopularMovie'
import SearchResults from './searchResults'

export default class PopularMovies extends Component {
  constructor() {
    super()
    this.state = {
      popular: [],
      search: []
    }
    this.searchMovie = this.searchMovie.bind(this)
    this.searchMovieHandler = this.searchMovieHandler.bind(this)
  }
  async componentDidMount() {
    const movies = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=777f8db0c83570a6c44492e499a03fa0&language=en-US&page=1'
    )

    this.setState({
      popular: [...movies.data.results]
    })
  }

  async searchMovie(clientSearch) {
    const results = await axios.get(
      'https://api.themoviedb.org/3/search/movie?api_key=777f8db0c83570a6c44492e499a03fa0&language=en-US&page=1&include_adult=false&query=' +
        clientSearch
    )
    this.setState({
      search: [...results.data.results]
    })
  }
  searchMovieHandler(evt) {
    const search = evt.target.value
    this.searchMovie(search)
  }
  render() {
    return (
      <div className="wrapper">
        <div className="pop z-depth-3">
          {this.state.search.length === 0 ? (
            <h1>Popular Movies 2019</h1>
          ) : (
            <h1>Search Results</h1>
          )}

          <h6>As determined by The Movie Database</h6>
        </div>
        <div id="search_input">
          <i className="material-icons prefix" id="magnifying">
            search
          </i>

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
              <th>Your Rating</th>
            </tr>
          </thead>
          <tbody>
            {this.state.search.length === 0 ? (
              <SinglePopularMovie popular={this.state.popular} />
            ) : (
              <SearchResults popular={this.state.search} />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
