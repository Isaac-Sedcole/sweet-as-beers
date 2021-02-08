import { ADD_TO_CART, DEL_FROM_CART, UPDATE_CART } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let alreadyExists = false
      let s = state.map(item => {
        console.log(item)
        if(item.id == action.id) {
          alreadyExists = true
          item.quantity++
        }
        return item
      })

      if(!alreadyExists) {
        return [...state, {
          id: action.id,
          name: action.name,
          quantity: 1
        }]
      } else {
        return s 
      }

    case DEL_FROM_CART : 
      return state.filter((item) => item.id !== action.id)

    case UPDATE_CART :
      //item that contains an array of ids and quantities
      // let s = [...state]
      // for(let i = 0; i<state.length;i++) {
      //    for(let j =0; j<action.items.length;j++)  {
      //        if(actions.items[j] == state[i]) {
      //             state[i] = actions.items[j]
      // }
      //         
      // }
      // }

    default :
      return state
  }
}

export default reducer