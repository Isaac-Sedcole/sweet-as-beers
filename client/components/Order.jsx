import React from 'react'
import { connect } from 'react-redux'
import { navigate, updateCart } from '../actions'

const Order = (props) => {

  const handleHome = () => {
    props.dispatch(updateCart([]))
    props.dispatch(navigate('listing'))
  }

  return (
    <div>
      <h1>Thankyou! for ordering beer!</h1>
      <ul>
        {props.cart.map(item => {
          return <li>{item.name} --- {item.quantity}</li>
        })}
      </ul>
      <button onClick={handleHome}>HOME</button>
    </div>
  )
}

function mapStateToProps(globalState) {
  return {
    activePage: globalState.activePage,
    cart: globalState.cart
  }
} 

export default connect(mapStateToProps)(Order)