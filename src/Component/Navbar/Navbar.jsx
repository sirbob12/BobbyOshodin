import React from 'react'
import {images} from '../../Constant'



import './Navbar.scss';

const Navbar = () => {
  return (
     <nav className="navbar">
      <div className="container flex">
       <a href="/"> <img src={images.logo} alt="logo" className="logo_image" /></a>

        <ul className="navbar_elements_wrapper">
          <a href="/about"><li classname='list_elements'>About</li></a>
          <a href="/project1"><li classname='list_elements'>Services</li></a>
          <a href="#"><li classname='list_elements'>Portfolio</li></a>
        </ul>
      </div>
     </nav>
  )
}

export default Navbar 