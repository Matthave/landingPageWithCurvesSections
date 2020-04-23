import React from 'react'
import logo from '../images/logo.svg'

function Nav() {
  return (
    <div className="nav">
      <img src={logo} alt="" className="nav__logo" />
      <button className="nav__btn">Try It Free</button>
    </div>
  )
}

export default Nav
