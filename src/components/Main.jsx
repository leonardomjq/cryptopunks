import React, { useState, useEffect } from 'react'
import instaIcon from '../a/assets/owner/instagram.png'
import twitterIcon from '../a/assets/owner/twitter.png'
import moreIcon from '../a/assets/owner/more.png'
import './main.css'

const Main = ({ punkListData, selectedPunk }) => {
  const [activePunk, setActivePunk] = useState(punkListData[3])

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk])
  }, [punkListData, selectedPunk])

  return (
    <div className='main'>
      <div className='mainContent'>
        <div className='punkHighlight'>
          <div className='punkContainer'>
            <img
              src={activePunk.image_url}
              alt='null'
              className='selectedPunk'
            />
          </div>
        </div>

        <div className='partb'>
          <div className='punkDetails' style={{ color: '#fff' }}>
            <div className='title'>{activePunk.name}</div>
            <span className='itemNumber'>•#{activePunk.token_id}</span>
          </div>
          <div className='owner'>
            <div className='ownerImageContainer'>
              <img
                className='logos'
                src={activePunk.owner.profile_img_url}
                alt=''
              />
            </div>
            <div className='ownerDetails'>
              <div className='ownerNameAndHandle'>
                <div>{activePunk.owner.address}</div>
                <div className='ownerHandle'>leonardomjq@gmail.com</div>
              </div>

              <div className='links'>
                <div className='ownerLink'>
                  <img className='logos' src={moreIcon} alt='' />
                </div>
                <div className='ownerLink'>
                  <img className='logos' src={twitterIcon} alt='' />
                </div>
                <div className='ownerLink'>
                  <img className='logos' src={instaIcon} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
