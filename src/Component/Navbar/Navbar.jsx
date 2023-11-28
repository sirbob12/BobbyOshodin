import React from 'react'
import {images} from '../../Constant'
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
//import { useRef } from 'react';



import './Navbar.scss';

const Navbar = () => {




  return (
     <nav className="navbar">
      <div className="container flex">
       <a href="/"> <img src={images.logo} alt="logo" className="logo_image" /></a>

        <ul className="navbar_elements_wrapper">
          <Link to='#about' smooth ><li classname='list_elements'>About</li></Link>
          <Link to='#service' smooth ><li classname='list_elements'>Services</li></Link>
          <Link to='#portfolio' smooth ><li classname='list_elements'>Portfolio</li></Link>
         
        </ul>
      </div>
     </nav>
  )
}

export default Navbar 