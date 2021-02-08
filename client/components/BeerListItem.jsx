import React from 'react'
import { addToCart,  navigate } from '../actions'
import {connect} from 'react-redux'


function BeerListItem (props) {

  const { name, brewery, country, abv, id } = props.beer

  // console.log(id)

  const handleClick = () => {
    props.dispatch(addToCart(id, name))
    props.dispatch(navigate('cart'))
  }

  return (
    <div className='beer'>
      <p className='name'>{name}</p>
      <p className='description'>{brewery}</p>
      <p>
        <span className='country'>{country}</span>
        <span className='abv'>{abv} abv</span>
        <a onClick={() => handleClick()} href='#' className='cart-link'>Add to cart</a>
      </p>
    </div>
  )
}

export default connect()(BeerListItem)
