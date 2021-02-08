import React from 'react'
import {connect} from 'react-redux'

import Header from './Header'
import BeerList from './BeerList'
import Cart from './Cart'

import beerData from '../../data/beers'

function App (props) {
  // console.log(props.activePage)
  return (
    <div className='app'>
      <Header />
      { props.activePage.target == 'listing' ? <BeerList beers={beerData.beers} /> : <Cart /> }
    </div>
  )
}

function mapStateToProps(globalState) {
  return {
    activePage: globalState.activePage
  }
} 

export default connect(mapStateToProps)(App)
