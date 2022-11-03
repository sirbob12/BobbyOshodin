import React from 'react'
import {images} from '../Constant'
import {Contact} from '../Component'

//import scss links
import './project1.scss'

const project1 = () => { 
  const contactStyle = {
     background:'white'
  }
  return (
  
      
         <section className="project1">
          <div className="container">         
            <hr/>
            
            <div className="heading_tags">
            <h1 className="heading">FESTIVEBUYS WEB APPLICATION</h1>
            <h1 className="main_heading_tag">
              AN ECOMMERCE SOLUTION FOR GIFTS AT AFFORDABLE PRICES.
            </h1>
            </div>

            <img src={images.Landing_page} alt="" className="landing_page" />
             

             <div className="summary_group">
            <h1 className="summary">SUMMARY</h1>
            <p className="summary_text">
              An ecommerce web application which enables customers to make gift purchases
              based on their holidays or festival preferences. Hence saving time of trying to make choice 
              from ambigous gifts list.
            </p>
            </div>

            <hr className='summary_line'/>

            
            <div className="scope">
            <h1 className="scope_work">Scope of work</h1>
            <p className="scope_text">
              In order to make this product meet the needs of the end users, I gathered insights from<br/>
              users research and interviews, which informed my decisions on the developement of a prototype<br/>
              with a users friendly interface and simple design.
            </p>
            </div>

            <img src={images.frame} alt="" className="frame" />

            <hr className='goal_line'/>

            <div className="goal_class">
              <h2 className="goal">My Goal</h2>
              
              <div className="right_goals">
              <h1 className="goal_paragraph">
                My goal was to design a web application with a <br/>very simple user interface that 
                that will allow customers<br/> buy gifts that is specifically suited for the given <br/>festival celebration 
                without having to spend so much time <br/>trying to select from a large pool of gifts which might not <br/> be realated to the given 
                season and could be a hassle.             
              </h1>

              
              </div>
            </div>
             
            <img src={images.goals} alt="goals_image" className="goals_image" />
            <hr className='case_study_line'/>

            <h1 className="case_study">
              CASE STUDY COMING SOON
            </h1>
            
            <div className="hifi_section">
            <h2 className="heading">The solution</h2>
            <h2 className="solutions_subheading">
              HI-FIDELITY WEB APPLICATION DESIGN
            </h2>

             <img src={images.frontend} alt="" className="frontend" />
             <img src={images.backend} alt="" className="backend" />
            </div>

            <Contact style={{contactStyle}}/>
          </div>
         </section>
    
    
  )
}

export default project1