import React from 'react'
import {images} from '../../Constant';
import machine_learning from '../../port_asset/machine-learning.png';
import dataAnalysis from '../../port_asset/dataAnalysis.png';
import dataVisualization from '../../port_asset/barChart.png';
import './Skills.scss';

const Skills = () => {
  return (
    <section className="service" id='service'>
      <h1 className="service_heading"> Services</h1>
      

      
          

          <div className="service_wrapper_grid">
            <div className="skills_wrapper">
              <img src={dataAnalysis} alt="skills_images" className="skills_dataAnalysis" />
              <p className="img_captions">Data Analysis</p>
            </div>

            <div className="skills_wrapper">
              <img src={dataVisualization} alt="data_visualization" className="skills_visualization" />
              <p className="img_captions">Data Visualization</p>
            </div>

            <div className="skills_wrapper">
              <img src={machine_learning} alt="machine_leaning" className="skills_machine_learning" />
              <p className="img_captions">Machine Learning</p>
            </div>

          </div>
         
        

      
    </section>
  )
}

export default Skills