//Action Type
const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE'

//Action Creator
export const toggleDarkMode = () => ({type: TOGGLE_DARK_MODE})

//Initial State
const initialState = {
  darkmode: false
}

//Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkmode: !state.darkmode
      }
    default:
      return state
  }
}
