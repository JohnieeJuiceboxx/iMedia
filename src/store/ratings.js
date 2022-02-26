import axios from 'axios'

// ACTION TYPES
const ADD_RATING = 'ADD_RATING'
const GOT_RATING = 'GOT_RATING'
const UPDATE_RATING = 'UPDATE_RATING'

// ACTION CREATORS
const addRating = rating => {
  return {
    type: ADD_RATING,
    rating
  }
}
const gotRating = rating => {
  return {
    type: GOT_RATING,
    rating
  }
}
const updatedRating = rating => {
  return {
    type: UPDATE_RATING,
    rating
  }
}
//Thunks

export const addedRating = rating => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/ratings', rating)
      dispatch(addRating(data))
    } catch (error) {
      console.error(error)
    }
  }
}
export const fetchRating = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/ratings/`)
      dispatch(gotRating(data))
    } catch (error) {
      console.error(error)
    }
  }
}
export const updateRatingValue = rating => {
  return async dispatch => {
    try {
      await axios.put('/api/ratings', rating)
      dispatch(updatedRating(rating))
    } catch (error) {
      console.error(error)
    }
  }
}
// INITIAL STATE
const initialState = {
  rating: 0
}

const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RATING:
      return {...state, rating: action.rating}
    case GOT_RATING:
      return {...state, rating: action.rating}
    case UPDATE_RATING:
      // let newRating = [...state.rating].map(movie => {
      //   console.log(movie)
      //   if (movie.movieId === action.movie) {
      //     movie.rating = action.movie.rating
      //   }

      //   return movie
      // })
      let newRating = action.rating

      return {...state, rating: newRating}
    default:
      return state
  }
}

export default ratingReducer
