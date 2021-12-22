import React from 'react'
import CollectionCard from './CollectionCard'
import './punklist.css'

const PunkList = ({ nftdata, setSelectedPunk }) => {
  return (
    <div className='punklist'>
      {nftdata.map((nft) => (
        <div onClick={() => setSelectedPunk(nft.token_id)} key={nft.token_id}>
          <CollectionCard
            // key={nft.token_id}
            id={nft.token_id}
            name={nft.name}
            traits={nft.traits}
            image={nft.image_url}
          />
        </div>
      ))}
    </div>
  )
}

export default PunkList
