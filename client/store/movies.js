import axios from 'axios'

//Action Type
const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES'
const GET_SINGLE_MOVIE = 'GET_SINGLE_MOVIE'
const GET_SIMILAR_MOVIES = 'GET_SIMILAR_MOVIES'
const GET_SEARCHED_MOVIES = 'GET_SEARCHED_MOVIES'

//Action Creator
export const getPopularMovies = movies => ({type: GET_POPULAR_MOVIES, movies})
export const getSingleMovie = movie => ({type: GET_SINGLE_MOVIE, movie})
export const getSimilarMovies = movies => ({type: GET_SIMILAR_MOVIES, movies})
export const getSearchedMovies = movies => ({type: GET_SEARCHED_MOVIES, movies})

//Initial State
const initialState = {
  popular: [],
  single: {},
  similar: [],
  search: []
}

//Thunk
export const fetchPopularMovies = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=777f8db0c83570a6c44492e499a03fa0&language=en-US&page=1'
      )
      dispatch(getPopularMovies(data.results))
    } catch (error) {
      console.error(error)
    }
  }
}
export const fetchSimilarMovies = movieId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=777f8db0c83570a6c44492e499a03fa0&language=en-US&page=1
    `
      )
      dispatch(getSimilarMovies(data.results))
    } catch (error) {
      console.error(error)
    }
  }
}
export const fetchSingleMovie = movieId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=777f8db0c83570a6c44492e499a03fa0&language=en-US
        `
      )
      dispatch(getSingleMovie(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const fetchSearchedMovies = clientSearch => {
  return async dispatch => {
    try {
      const {data} = await axios.get(
        'https://api.themoviedb.org/3/search/movie?api_key=777f8db0c83570a6c44492e499a03fa0&language=en-US&page=1&include_adult=false&query=' +
          clientSearch
      )

      dispatch(getSearchedMovies(data))
    } catch (error) {
      console.error(error)
    }
  }
}

//Reducer
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popular: action.movies
      }
    case GET_SINGLE_MOVIE:
      return {
        ...state,
        single: action.movie
      }
    case GET_SIMILAR_MOVIES:
      return {
        ...state,
        similar: action.movies
      }
    case GET_SEARCHED_MOVIES:
      return {
        ...state,
        search: action.movies
      }
    default:
      return state
  }
}
export default moviesReducer
