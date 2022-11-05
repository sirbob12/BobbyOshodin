import React from 'react'
import {images} from '../Constant'
import './project2.scss'

const project2 = () => {
  return (
     <section className="project2">
      <div className="container">
        <hr className='main_line'/>


       <div className="section1">
        <p className="small_heading">BEDROOMPROS</p>
        <h1 className="heading_description">
           A BLOG THAT PROVIDES SEXUAL EDUCATION AND INFORMATION 
           FOR YOUNG ADULTS...
        </h1>

        </div>

        <img src={images.Bedroompros} alt="" className="bedroompros" />

        <div className="summary">
          <p className="summary_heading">Summary</p>
          <h1 className="summary_subheading">
            A blog which brings hands on information on bedroom matters such as sex, sexual health,
            sexual education and other related matters in a very simple and accesible way.
          </h1>
        </div>

         <hr className="body_line" />

        
        <div className="scope">
          <h1 className="scope_heading">Scope of work</h1>

          <p className="scope_subtitle">
            In other to make this application more engaging and user friendy,
            I gathered sufficient information <br/>about the end users which are majorly
            young adults between the ages of 22-45. THis information helped <br/>me to develope 
            a prototype with simple design and user friendly interface.

          </p>
          
          <img src={images.frame} alt="" className="scope" />
        </div>
         
        <hr className="body_line" />

        <div className="goal">
          <p className="goal_heading">My Goal</p>
          <h1 className="goal_subheading">
            As a product designer my goal is to design an easy<br/>to use and engaging 
            solution which is void of ambiguity.<br/> Also adding visual interactions such as 
            videos, pictures,<br/> gifts, and create a very intuitive user interface that gives users a 
            seamless experience.
          </h1>
        </div>

        <img src={images.goals} alt="" className="goals_image" />

        <div className="case_study">
          <h1 className="case_study_heading">CASE STUDY COMMING SOON</h1>
        </div>
        
      </div>
     </section>
  )
}

export default project2