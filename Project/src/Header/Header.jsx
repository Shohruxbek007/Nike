import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='header'>
      <div className='search1'><i className="fa-solid fa-bars"></i></div><div className='search1 '><img className='logo' src="logo.png" alt="" /></div><div className='search'><input type="text" /><i id='search' className="fa-solid fa-magnifying-glass"></i></div>

    </div>
  )
}

export default Header
