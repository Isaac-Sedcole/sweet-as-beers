export const ADD_TO_CART = 'ADD_TO_CART'
export const NAVIGATE = 'NAVIGATE'
export const DEL_FROM_CART = 'DEL_FROM_CART'
export const UPDATE_CART = 'UPDATE_CART'
export const UPDATE_PENDING = 'UPDATE_PENDING'
export const UPDATE_CANCELLED = 'UPDATE_CANCELLED'
export const UPDATE_FULFILLED = 'UPDATE_FULFILLED'

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

export function updateCart(cart) {
  return {
    type: UPDATE_CART,
    cart: cart
  }
}

export function updatePending(cart) {
  return {
    type: UPDATE_PENDING,
    cart: cart
  }
}

export function updateCancelled(order) {
  return {
    type: UPDATE_CANCELLED,
    order: order
  }
}

export function updateFulfilled(order) {
  return {
    type: UPDATE_FULFILLED,
    order: order
  }
}