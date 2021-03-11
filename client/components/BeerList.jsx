import React from 'react'
import { connect } from 'react-redux'
import { navigate } from '../actions'

import BeerListItem from './BeerListItem'

function BeerList (props) {

  const handleAdmin = () => {
    props.dispatch(navigate('admin'))
  }
  
  return (
    <>
      <button onClick={handleAdmin}>admin</button>
      <div className='beerlist'>
        <p className='welcome'>Welcome! Please select from our delicious selection and don&apos;t hesitate to let us know if we can answer any of your questions.</p>
        {props.beers.map(beer => {
          return (
            <BeerListItem key={beer.id} beer={beer} />
          )
        })}
      </div>
    </>
  )
}

function mapStateToProps(globalState) {
  return {
    activePage: globalState.activePage,
  }
} 

export default connect(mapStateToProps)(BeerList)
