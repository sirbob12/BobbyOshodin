import React from 'react'
import {images} from '../../Constant';
import './About.scss';

const About = () => {
  return (
     <section className="about">
         <img src={images.rectangle} alt="" className="rectangle" />
        <img src={images.rect_design} alt="" className="rect_design" />
        <img src={images.circle} alt="" className="circle" />

      <div className="about_wrapper grid">
        <div className="shape"></div>

        <div className="right_section">
          <h1 className="about_me">About Me</h1>
          <p className="about_section">
          It is a long established fact that a  classical<br/>
           will be distracted by the readable content<br/>
            page when looking at its layout. The point <br/>
             Lorem Ipsum is that it has a more-or-less <br/>
              of letters, as opposed to using 'Content here,  <br/>
              here', making it look like readable English. <br/>
               publishing packages and web page editors now <br/>
                as their default model text, and a search for <br/>
                 will uncover many web sites still in their infancy. </p>

          <a href="" className="btn_about_me">Download CV</a>
        </div>
      </div>
     </section>
  ) 
}

export default About