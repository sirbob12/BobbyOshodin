import React from 'react';
import {images} from '../../Constant';
import data3 from '../../port_asset/data3.svg';

import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_wrapper">
    

        <div className="container grid">
          
          <div className="left_section">
            <p className="heading_text">Hello,</p>
            <h1 className="main_heading heading_align">I'm Bobby</h1>
            <h2 className="subheading-text subheading_align">Data Analyst</h2>

            <p className="text_paragraph">I draw meaningful insights from complex datasets<br/> and help organizations
            make profitable decisions</p>

            <a href="/project2" className="btn_cta">Hire me</a>
          </div>

          <div className="right_section">
            <img src={data3} alt="hero_image" className="hero_image" />
          </div>
        </div>
      </div>

     
    </section>
  )
}

export default Hero