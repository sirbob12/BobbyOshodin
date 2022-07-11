import React from 'react';
import {images} from '../../Constant'
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_wrapper">
        <img src={images.image1} alt="hero_image" className="image1" />

        <div className="container grid">
          
          <div className="left_section">
            <p className="heading_text">Hello,</p>
            <h1 className="main_heading heading_align">I'm Bobby</h1>
            <h2 className="subheading-text subheading_align">UI/UX designer</h2>

            <p className="text_paragraph">I create, design and develope amazing products <br/>and 
            experiences that makes people happy</p>

            <a href="#" className="btn_cta">Hire me</a>
          </div>

          <div className="right_section">
            <img src={images.hero_image} alt="hero_image" className="hero_image" />
          </div>
        </div>
      </div>

     
    </section>
  )
}

export default Hero