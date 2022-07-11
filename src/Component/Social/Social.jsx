import React from 'react'
import {images} from '../../Constant'
import './Social.scss';

const Social = () => {
  return (
    <section className="social">
      <div className="wrapper">
        <img src={images.behance} alt="" className="behance" />
        <img src={images.dribbble} alt="" className="Instagram" />
        <img src={images.instagram} alt="" className="Dribbble" />
      </div>
    </section>
  )
}

export default Social