import { UPDATE_PENDING } from '../actions'

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
    default :
      return state
  }
}

export default reducer