import { UPDATE_CANCELLED, UPDATE_FULFILLED, UPDATE_PENDING } from '../actions'

const initialState = {
  pending: [],
  cancelled: [],
  fulfilled: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PENDING:
      state.pending.push(action.cart)
      return state

    case UPDATE_CANCELLED:
      state.pending[[]]
      state.cancelled.push(action.order)
    case UPDATE_FULFILLED:

    default :
      return state
  }
}

export default reducer