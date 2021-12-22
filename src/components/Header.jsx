import React from 'react'
import punkLogo from '../a/assets/header/cryptopunk-logo.png'
import './header.css'
import searchIcon from '../a/assets/header/search.png'
import themeSwitchIcon from '../a/assets/header/theme-switch.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='logoContainer'>
        <img src={punkLogo} alt='fuckoff' className='punkLogo' />
      </div>
      <div className='searchBar'>
        <div className='searchIconContainer'>
          <img src={searchIcon} alt='fuckoff' className='searchIcon' />
        </div>
        <input
          className='searchInput'
          placeholder='collection, item or users...'
        />
      </div>
      <div className='headeritems'>
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className='headerActions'>
        <div className='themeSwitchContainer'>
          <img
            src={themeSwitchIcon}
            alt='fuckoff'
            className='themeSwitchIcon'
          />
        </div>
      </div>
      <div className='loginButton'>GET IN</div>
    </div>
  )
}

export default Header
