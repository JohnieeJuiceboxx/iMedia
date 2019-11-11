import React, {Component} from 'react'
import axios from 'axios'
import SinglePopularMovie from './singlePopularMovie'

export default class PopularMovies extends Component {
  constructor() {
    super()
    this.state = {
      popular: []
    }
    this.searchMovie = this.searchMovie.bind(this)
  }
  async componentDidMount() {
    const movies = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=777f8db0c83570a6c44492e499a03fa0&language=en-US&page=1'
    )

    this.setState({
      popular: [...movies.data.results]
    })
    console.log(movies.data.results)
  }
  searchMovie(clientSearch) {
    const movieSearch =
      'https://api.themoviedb.org/3/search/movie?api_key=777f8db0c83570a6c44492e499a03fa0&query=' +
      clientSearch
  }
  render() {
    return (
      <div className="wrapper">
        <div className="pop z-depth-3">
          <h1>Popular Movies 2019</h1>
          <h6>As determined by The Movie Database</h6>
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
            <SinglePopularMovie popular={this.state.popular} />
          </tbody>
        </table>
      </div>
    )
  }
}
