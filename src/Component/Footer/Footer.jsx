import React from 'react'
import { images } from '../../Constant'
import './Footer.scss'
//import {Social} from '../../Component';

const Footer = () => {
  return (
   <section className="footer">
     <div className="footer_container">
      <img src={images.logo} alt="" className="footer_log" />
          <p className="footer_heading">
          <span>&copy;</span> 2022.  All rights reserved. Designed and coded by BobbyOshodin 
          </p>
       
     </div>
   </section>
  )
}

export default Footer