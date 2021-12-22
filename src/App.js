import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/Header'
import CollectionCard from './components/CollectionCard'
import PunkList from './components/PunkList'
import Main from './components/Main'

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const nftData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x0c647766453e72ca2f32AA692443b65a807174Cf&order_direction=asc'
      )
      setPunkListData(nftData.data.assets)
    }
    console.log(punkListData)
    getMyNfts()
  }, [])

  return (
    <div className='App'>
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList nftdata={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
      )}
    </div>
  )
}

export default App
