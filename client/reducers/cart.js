import { ADD_TO_CART } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, {
        id: action.id,
        name: action.name,
        quantity: 1
      }]
    default :
      return state
  }
}

export default reducer