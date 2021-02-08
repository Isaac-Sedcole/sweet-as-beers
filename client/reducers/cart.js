import { ADD_TO_CART } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      
      // state = state.map(items => {
      //   if(items.id == action.id) {
      //     items.quantity++
      //   }else {
      //      return [...state, {
      //       id: action.id,
      //       name: action.name,
      //       quantity: 1
      //     }]
      //   }
      //   return items
      // }) 
      // console.log(state)
      // return state

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



      // console.log(s)

      // return s
    default :
      return state
  }
}

export default reducer