import React from 'react'
import interpretationImage from '../port_asset/sproket_Ltd/interpretationKPMGANALYSIS.png'
import sproketModel from '../port_asset/sproket_Ltd/sproket_model.png';
import bikePurchaseState from '../port_asset/sproket_Ltd/bike_state_purchase.png';
import ageCategory from '../port_asset/sproket_Ltd/age_category.png';
import jobIndustry from '../port_asset/sproket_Ltd/jobIndustry.png';
import wealthSegment from '../port_asset/sproket_Ltd/wealth_segment.png';
import genderPercentage from '../port_asset/sproket_Ltd/gender_percentage.png';
import dashboard from '../port_asset/sproket_Ltd/sprocketDashboard.png';
import highValue from '../port_asset/high_value_customers.png';


//import scss links
import './project1.scss'

const project1 = () => { 
 
  return (

     <section className="project1">
        <div className="container">

        
          <h1 className="projectName"> Sproket Bike Analysis</h1>

          <div className="introduction">
           <h2 className="subHeading">Introduction</h2>
           <p className="paragraphs">
           Our client Sprokket central pty Ltd is a 
           household name in the retail (Bike) business
            in Australlia. Theyre looking to expand their 
            business and maximise profit accross demographics, 
            industries etc.
           </p>

           </div>


          <div className="problemStatement">
           <h2 className="subHeading">Problem Statement</h2> 

           <p className="paragraphs">
           Sprocket central seeks to understand and 
           identify which of its 1000 new customers it should
            target and deploy all its marketing resources on, 
            based on existing data on its old and new customers.</p>
           
            <p className="paragraphs">
             After deep analytical thinking and consideration we 
             came up with the following questions<br/>
              
              <p className="paragraphs">
               <span className='modelSpan'> 1. Which States was bikes purchase the highest and most frequent?</span><br/>
               <span className='modelSpan'> 2. Which Gender purchased bikes the most?<br/></span>
               <span className='modelSpan'>3. Which age category makes the highest purchase?<br/></span>
               <span className='modelSpan'> 4. Which job industry's is bike purchase most frequent?<br/></span>
               <span className='modelSpan'> 5. Which wealth segmentation patronize bike sproket the most?<br/></span>
           </p>
           </p>

           </div>


        <div className="DataSourcing">
           <h2 className="subHeading">Data Sourcing</h2>
            
           <p className="paragraphs">

           Dataset was provided by our client in excel format and meets
            all licensisng, privacy, security policies, standards and regulations.<br/>

            <p className="paragraphs">
             The dataset contains four excel sheets which includes:
              
            <p>
              1.  TitleSheet (Meta data...instructions on how to navigate the dataset)<br/>
              2.  CustomerDemographics<br/>
              3.  NewCustomerList<br/>
              4.  Transactions<br/>
               5. CustomerAddress<br/>
               <p>
               Link to dataset <a ahref= "#">Here</a>.
                </p> 
              </p>
           </p>
           </p>
           </div>


           <div className="tools">
            <h2 className="subheading">Tools</h2>
            <p className="paragraphs">Microsoft Excel, PowerBI</p>
           </div>


        <div className="DataPreProcessing">
           <h2 className="subHeading">Data PreProcessing/Cleaning</h2>

           <p className="paragraph">
           Created the age column in the customerDemographics dataset using 
           the excel DATEDIF function, and also used excel VLOOKUP function 
           to get the profits of the customers based on the customer's id field.<br/>

           
          <p className="paragraph">
           Imported dataset into power query in Power BI for futher wrangling
           
           and transformation.<br/>
           </p>

          <p className="paragraph">
            <p className="paragraph">
          The following process where carried out on dataset to clean the dataset:
          </p>
          In the customerDemographics dataset: <br/>

          <p className="paragraph">
          The default column was removed. 
          Empty fields and blanks from the DOB column was removed. <br/>
          An outlier in the DOB column was spotted and removed.<br/> 
          Fields marked yes in the deceased column was removed.<br/>
          Gender coulumn was made consistent by ensuring it was limited to just "MALE", "FEMALE", "U"<br/>
 
          <p className="paragraph">
          In the CustomerAddress dataset: <br/>
          The state of New South Wales Victoria was replaced with NSW and VIC respectively.

          <p className="paragraph">
          In the Transactions dataset:<br/>
           A calculated column named profit was created.
          </p>
          <p className="paragraph">
          Below is a screenshot of the power BI tables
          </p>
           </p>

          </p>
          </p>
          </p>

          <img src={interpretationImage} alt="image1" className="image_1" />
          </div>


        <div className="model">
          <h2 className="subHeading">Model</h2>

          <p className="paragraph">

          The following tables where joined based on the customer id.<br/>
          
          <span className="modelSpan"> 1. customerDemographic<br/></span>
          <span className="modelSpan"> 2. customerAddress.<br/></span>
          <span className="modelSpan"> 3. Transactions<br/></span>
           
            Below is a screenshot of the model
          </p>

          <img src={sproketModel} alt="image2" className="image2" />
          </div>


        <div className="analysisVisualization">
         <h2 className="heading2"> Analysis and Visualization</h2>
          <p className="paragraph">
         
          Analysis was done using simple visuals since the tables have been perfectly modelled together.

          <h4 className="visualization">Total bike purchase by states</h4>

            </p>
          <img src={bikePurchaseState} alt="image3" className="image3" />

          <p className="paragraph">
            The highest bike purchases is made in the state 
            of NSW. purchases of over 100,000
            </p>

            <h4 className="visualization">
            Total bike purchase by age category

            </h4>

            <img src={ageCategory} alt="image3" className="image3" />

            <p className="paragraph">
              The highest number of bikes is being
               purchased by the age group 40-49.
            </p>

          
            <h4 className="visualization">
            Job industry purchases
            </h4>
            <img src={jobIndustry} alt="image3" className="image3" />

            <p className="paragrahp">
            Purchases are very high within the Manufacturing,
             Healthcare and IT industry's
            </p>

            <h4 className="visualization">
            Purchaeses by wealth segment
            </h4>

            <img src={wealthSegment} alt="image3" className="image3" />
            <p className="paragraph">
            The Mass customers are making the highest purchases.
            </p>

            <h4 className="visualization">
            Gender percentage
            </h4>
            <img src={genderPercentage} alt="image3" className="image3" />
           
           <p className="paragraph">
              Apparently females hold a larger share of the bike purchase market
              </p>

          </div>



         <div className="visualizationDiv">
            <h2 className="visualization_heading">DASHBOARD TO VISUALIZE OUR FINDINGS</h2>
            <img src={dashboard} alt="image8" className="image8" />

            <p className="paragraph">
            Apparently females hold a larger share of the bike purchase market
            </p>
          </div>


        <div className="conclusion">
            <h2 className="heading3">
            Conclusion/Recommendation
            </h2>

            <p className="paragraph">
            Based on these findings we where able to identify
             the customers to target from our newcustomers dataset, 
             considering their state,gender, wealth segment, age_category 
             and the industry they work.<br/>

             Hence we arrived at this list.
            </p>
            <img src={highValue} alt="image9" className="image9" />

            <p className="paragraph">
            Sproket Central should deploy all its marketing 
            resources to target these high value customers.
            </p>

            </div>

            
        </div>
     </section>
        
    
    
  )
}

export default project1