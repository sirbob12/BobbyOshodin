import React from 'react'
import {images} from '../../Constant';
import './Portfolio.scss';

const portfolio = () => {
  return (
    <section className="portfolio">
        <div className="portfolio_wrapper">
            <h1 className="portfolio_heading">My Portfolio</h1>
               <div className="portfolio_container">
                <div className="portfolio_card1">
                    <img src={images.app1} alt="image" className="app1_img" />
                    <p className="app1_heading">Social-Media</p>
                    <a href="#" className="btn">View Design</a>
                </div>
                <div className="portfolio_card1">

                    <img src={images.app2} alt="image" className="app1_img" />
                    <p className="app1_heading">Netflix</p>
                    <a href="#" className="btn">View Design</a>
                </div>

                <div className="portfolio_card1">
                    <img src={images.app3} alt="image" className="app1_img" />
                    <p className="app1_heading">Invetor</p>
                    <a href="#" className="btn">View Design</a>
                </div>
              
               </div>

        </div>
    </section>
  )
}

export default portfolio