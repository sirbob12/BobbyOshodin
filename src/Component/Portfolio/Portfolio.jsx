import React from 'react';
import {images} from '../../Constant';
import './Portfolio.scss';
import sproketDashboard from '../../port_asset/sproket_Ltd/sprocketDashboard.png';
import executiveDashBoard from '../../port_asset/excutiveDashboard.png';
import medicalDashboard from '../../port_asset/medicalDashboard.png';


const portfolio = () => {
  return (
    <section className="portfolio" id='portfolio'>
        <div className="portfolio_wrapper">
            <h1 className="portfolio_heading">Portfolio</h1>
               <div className="portfolio_container">
                
                <div className="portfolio_card1">
                    <img src={sproketDashboard} alt="image" className="app1_img" />

                    <div className="text_btn_wrapper">
                    <h1 className="app1_heading">SPROKET BIKE ANALYSIS</h1>
                    <p className="_text_captions">
                    Sprocket central seeks to understand and identify which of its 1000 new customers it
                     should target and deploy all its marketing resources on, 
                     Based on existing data on its old and new customers
                    </p>
                    <a href="/project1" className="btn" >See More</a>
                    </div>
                </div>
                <div className="portfolio_card2">

                    
                    <div className="text_btn_wrapper">
                    <h1 className="app1_heading">Festive-Buy-Analysis</h1>
                    <p className="_text_captions">
                    FestiveBuys is a fictional American retail store chain
                     on the cusp of an exciting expansion with retail outlets
                      in 3 states. As the company prepares to establish its 
                      new headquarters, the stakes are high. The opening event 
                      promises not only to celebrate the brand's success but also 
                      to recognize and reward exceptional contributors.


                    </p>
                    <a href="/project2" className="btn">See More</a>
                    </div>
                    <img src={executiveDashBoard} alt="image" className="app2_img" />
                </div>

                <div className="portfolio_card3">
                    <img src={medicalDashboard} alt="image" className="app3_img" />
                    <div className="text_btn_wrapper">
                    <h1 className="app1_heading"> Healthcare Analysis</h1>
                    <p className="_text_captions">
                    The state of florida is a state of over 20 million
                     people and Humana our client wants in clear simple terms to know
                     how its faring in the state based on its medicare service delivery,
                      by eveluating its key performance indicators
                    </p>
                    <a href="/project3" className="btn">See More</a>
                    </div>
                </div>
              
               </div>

        </div>
    </section>
  )
}

export default portfolio;