import React, { useState } from 'react'
import { connect } from 'react-redux'
import { navigate, delFromCart, updateCart, updatePending } from '../actions'

function Cart (props) {
  const [cart, setCart] = useState(
    props.cart
  )

  const handleClick = () => {
    props.dispatch(navigate('listing'))
  }

  const handleDelete = (id) => {
    props.dispatch(delFromCart(id))
  }

  const handleChange = (e, id) => {
    setCart(cart.map(item => {
      if(item.id == id) {
        item.quantity = parseInt(e.target.value)
      }
      return item
    }))
  }

  const handleUpdate = (cart) => {
    console.log(cart)
    props.dispatch(updateCart(cart))
    alert("cart updated")
  }

  const handleCheckout = () => {

    props.dispatch(updatePending(cart))
    props.dispatch(navigate('checkout'))

  }

  return (
    <div className='cart'>
      <table>
        <thead>
          <tr>
            <td>Beer</td>
            <td>Quantity</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {props.cart.map(({ id, name, quantity }) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                <td><input className='update-input' placeholder={quantity}
                      onChange={(e) => handleChange(e, id)}
                    /></td>
                {/* TODO: implement deletes */}
                <td><button onClick={() => handleDelete(id)}>
                  <span className='fa fa-trash fa-2x' />
                </button></td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <p className='actions'>
        <a href='#' onClick={handleClick}>Continue shopping</a>
        <button onClick={() => handleUpdate(props.cart)}>Update</button> {/* TODO: implement updates */}
        <button className='button-primary' onClick={handleCheckout}>Checkout</button>
      </p>
    </div>
  )
}

function mapStateToProps(globalState) {
  return {
    cart: globalState.cart
  }
} 

export default connect(mapStateToProps)(Cart)
