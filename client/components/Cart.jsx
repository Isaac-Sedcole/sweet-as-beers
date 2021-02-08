import React from 'react'
import { connect } from 'react-redux'
import { navigate, delFromCart } from '../actions'

function Cart (props) {

  const handleClick = () => {
    props.dispatch(navigate('listing'))
  }

  const handleDelete = (id) => {
    props.dispatch(delFromCart(id))
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
                <td><input className='update-input' value={quantity} /></td>
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
        <button>Update</button> {/* TODO: implement updates */}
        <button className='button-primary'>Checkout</button>
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
