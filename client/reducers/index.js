import { combineReducers } from 'redux'
import cart from './cart'
import activePage from './activePage'
import orders from './orders'

// import otherReducer from './other-reducer'


export default combineReducers({
  cart: cart,
  activePage: activePage,
  orders: orders
  // otherReducer
})
