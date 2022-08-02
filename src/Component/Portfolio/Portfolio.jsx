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

                    <div className="text_btn_wrapper">
                    <h1 className="app1_heading">Social-Media</h1>
                    <p className="_text_captions">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, suscipit architecto? Totam, architecto est dignissimos, unde alias voluptatem saepe assumenda impedit dolore aliquam cupiditate possimus ad excepturi sit, qui et!
                    </p>
                    <a href="#" className="btn">See More</a>
                    </div>
                </div>
                <div className="portfolio_card2">

                    
                    <div className="text_btn_wrapper">
                    <h1 className="app1_heading">Social-Media</h1>
                    <p className="_text_captions">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, suscipit architecto? Totam, architecto est dignissimos, unde alias voluptatem saepe assumenda impedit dolore aliquam cupiditate possimus ad excepturi sit, qui et!
                    </p>
                    <a href="#" className="btn">See More</a>
                    </div>
                    <img src={images.app2} alt="image" className="app2_img" />
                </div>

                <div className="portfolio_card3">
                    <img src={images.app3} alt="image" className="app3_img" />
                    <div className="text_btn_wrapper">
                    <h1 className="app1_heading">Social-Media</h1>
                    <p className="_text_captions">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, suscipit architecto? Totam, architecto est dignissimos, unde alias voluptatem saepe assumenda impedit dolore aliquam cupiditate possimus ad excepturi sit, qui et!
                    </p>
                    <a href="#" className="btn">See More</a>
                    </div>
                </div>
              
               </div>

        </div>
    </section>
  )
}

export default portfolio