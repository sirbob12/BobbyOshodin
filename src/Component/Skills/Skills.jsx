import React from 'react'
import {images} from '../../Constant';
import './Skills.scss';

const Skills = () => {
  return (
    <section className="service">
      <h1 className="service_heading">My Service</h1>
      

        <div className="service_wrapper grid">
          
          <div className="design_service">
            <img src={images.design_img} alt="" className="design_image" />
            <p className="design_heading">UI/Ux Design</p>
            <p className="design_text">It is a long established fact that a reader will be
             distracted by the readable content of a page when looking at its layout. The point </p>
          </div>
          <div className="dev_service">
            <img src={images.dev_img} alt="" className="dev_image" />
            <p className="dev_heading">Web Developement</p>
            <p className="dev_text">It is a long established fact that a reader will be
             distracted by the readable content of a page when looking at its layout. The point </p>
          </div>
        </div>

      
    </section>
  )
}

export default Skills