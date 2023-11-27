import React from 'react'
import {images} from '../../Constant';
import IMG_2519 from '../../port_asset/IMG_2519.png';
import './About.scss';

const About = () => {
  return (
     <section className="about">
         <img src={images.rectangle} alt="" className="rectangle" />
       
        <img src={images.circle} alt="" className="circle" />

      <div className="about_wrapper grid">
        <div className="shape">
          <img src={IMG_2519} alt="photo" className="photo" />
        </div>

        <div className="right_section">
          <h1 className="about_me">About Me</h1>
          <p className="about_section">
          Embracing the art of data, I am dedicated<br/>
          to transforming complexity into clarity. <br/>
          With a passion for deciphering trends and an<br/>
           unwavering commitment to impactful insights, <br/>
           I weave stories that empower decision-makers.<br/>
           As a data analyst, I bring a fusion of curiosity <br/>
           and precision, exploring the dynamic interplay <br/>
           between technology and human behavior. <br/>
           Join me on this journey where every data <br/>
           point becomes a narrative, shaping a future<br/>
            driven by meaningful analytics. <br/>
            Let's transcend traditional boundaries together,<br/>
             unlocking the true potential of data. </p>

          <a href="file:///C:/Users/PC/Documents/BOBBY_OSHODIN_DATA_ANALYST_RESUME.pdf" target='blank'
           className="btn_about_me">
            Download CV
            </a>
        </div>
      </div>
     </section>
  ) 
}

export default About