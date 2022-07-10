import React from 'react'
import {images} from '../../Constant'
import './Navbar.scss';

const Navbar = () => {
  return (
     <nav className="navbar">
      <div className="container flex">
       <a href="/Home"> <img src={images.logo} alt="logo" className="logo_image" /></a>

        <ul className="navbar_elements_wrapper">
          <a href="#"><li classname='list_elements'>About</li></a>
          <a href="#"><li classname='list_elements'>Skills</li></a>
          <a href="#"><li classname='list_elements'>Portfolio</li></a>
        </ul>
      </div>
     </nav>
  )
}

export default Navbar 