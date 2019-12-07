import axios from 'axios'

// ACTION TYPES
const ADD_RATING = 'ADD_RATING'
const GOT_RATING = 'GOT_RATING'

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
// INITIAL STATE
const initialState = {
  rating: [],
  movieId: ''
}

const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RATING:
      return {...state, rating: action.rating}
    case GOT_RATING:
      return {...state, rating: [...action.rating]}
    default:
      return state
  }
}

export default ratingReducer
