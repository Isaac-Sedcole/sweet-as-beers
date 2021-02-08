import { combineReducers } from 'redux'
import cart from './cart'
import activePage from './activePage'

// import otherReducer from './other-reducer'


export default combineReducers({
  cart: cart,
  activePage: activePage
  // otherReducer
})
