import React from 'react'
import Logo from '../../Logos/Logo.js'
import Connect from './Connect.js'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <Logo width={"301"} height={"55"} />
        <Connect />
    </div>
  )
}

export default Navbar