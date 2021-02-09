import React from 'react'
import {connect} from 'react-redux'

const Admin = (props) => {
  return(
    <>
      <h1>Hello Mr. Administrator</h1>
      <div className='admin-div'>
        <div>
          <h3>Pending</h3>
          <ul>
            {props.orders.pending.map(order => {
              return (
              <li><ul>
                {order.map(item => {
                  return <li>{item.name}</li>
                })} 
              </ul></li>
              )            
            })}
          </ul>
        </div>
        <div>
          <h3>Cancelled</h3>
        </div>
        <div>
          <h3>Fulfilled</h3>
        </div>
      </div>
    </>
  )
}


function mapStateToProps(globalState) {
  return {
    activePage: globalState.activePage,
    cart: globalState.cart,
    orders: globalState.orders
  }
} 

export default connect(mapStateToProps)(Admin)