import React from 'react'
import {connect} from 'react-redux'

import Header from './Header'
import BeerList from './BeerList'
import Cart from './Cart'
import Order from './Order'
import Admin from './Admin'

import beerData from '../../data/beers'

function App (props) {
  // console.log(props.activePage)
  const renderSwitch = () => {
    switch (props.activePage.target) {

      case 'listing':
        return <BeerList beers={beerData.beers} />
      case 'cart' :
        return <Cart />
      case 'checkout' :
        return <Order />
      case 'admin' :
        return <Admin />
      default :
        break
    }
  }
  return (
    <div className='app'>
      <Header />
      {/* { props.activePage.target == 'listing' ? <BeerList beers={beerData.beers} /> : <Cart /> }      */}
      {renderSwitch()}
    </div>
  )
}

function mapStateToProps(globalState) {
  return {
    activePage: globalState.activePage
  }
} 

export default connect(mapStateToProps)(App)
