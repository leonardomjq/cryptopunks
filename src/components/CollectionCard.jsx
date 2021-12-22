import React from 'react'
import './collectioncard.css'
import weth from '../a/assets/weth.png'
// import eth from '../a/assets/eth.png'

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className='CollectionCard'>
      <img src={image} alt='' />
      <div className='details'>
        <div className='name'>
          {name}
          <div className='id'>•#{id}</div>
        </div>
      </div>
      <div className='priceContainer'>
        <img src={weth} alt='' className='wethImage' />
        <div className='price'>{traits[0]?.value}</div>
      </div>
    </div>
  )
}

export default CollectionCard
