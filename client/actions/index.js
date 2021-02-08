export const ADD_TO_CART = 'ADD_TO_CART'

export function addToCart (id, name) {
  return {
    type: ADD_TO_CART,
    id: id,
    name: name
  }
}