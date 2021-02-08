export const ADD_TO_CART = 'ADD_TO_CART'
export const NAVIGATE = 'NAVIGATE'
export const DEL_FROM_CART = 'DEL_FROM_CART'

export function addToCart (id, name) {
  return {
    type: ADD_TO_CART,
    id: id,
    name: name
  }
}

export function navigate (target) {
  return {
    type: NAVIGATE,
    target: target // 'listing' or 'cart'
  }
}

export function delFromCart (id) {
  return {
    type: DEL_FROM_CART,
    id: id
  }
}