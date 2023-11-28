import React from 'react'
import pythonPage from '../port_asset/sproket_Ltd/jupiter_notebook1.png';
import humanaData from '../port_asset/powerbi_floridaHealthCare.png';
import humanDashboard from '../port_asset/dashboard_florida.png';

//sass extention link
import './project3.scss';

const project3 = () => {
  return (
    <section className="project3">
      <div className="container">

        <h1 className="main_heading">Healthcare-Data-Visualization</h1>

      <div className="intoduction">
        <h2 className="heading2">Introduction</h2>
        <p className="paragraph">
        Humana is a Medicare Advantage HMO, 
        PPO and PFFS organization and a stand-alone 
        prescription drug plan with a Medicare contract 
        in the state of florida. And seeks to have an overview/ 
        descriptives analysis of its operations within the state.
        </p>
        </div>


        <div className="problemStatement">
        <h2 className="heading2">Problem Statement</h2>
        <p className="paragraph">
        The state of florida is a state of over 20 million people and Humana our
         client wants in clear simple terms to know how its faring in the state 
         based on its medicare service delivery, by eveluating its key performance 
         indicators

        <p>
          After analytically examining the dataset, 3 questions needs to be answered.
         <p>         How many people are using Medicare in the state?<br/>
          How many people are using Humana medicare in the state ?<br/>
          What is Humana's share of the market in the state of Florida ?<br/>
          </p>
 
          </p>
        </p>
        </div>

        <div className="dataSourcing">
          <h2 className="heading2">Data Sourcing</h2>
          <p className="paragraph">
          The data was collected from Kaggle.<br/>
          Dataset was collected in a csv format.
          </p>
        </div>

        <div className="dataTransformation">
          <h2 className="heading2">Data Transformation</h2>
          <p className="paragraph">
          Data was imported into Jupyter Notebook. 
          And i used the pandas library to clean the 
          data and carryout Exploratory data analysis
          by doing the following:

<p>
          Identified and removed 9 missing values.<br/>
          Identifying and removing the outliers<br/>
          <p> Below is a ScreenShot of my_Jupiter's_Note book tab</p>
          </p>
          </p>

          <img src={pythonPage} alt="image" className="image" />

          <p className="paragraph">
          There after dataset was imported into Power BI for futher wrangling and transformation.
          The following processes where carried out on the data set:
          <p>
          The count and state column was merged into one column and renamed as Location.<br/>
          A new column called market share was created which was derived by dividing the count column by the market share
          </p>
         </p>

          <img src={humanaData} alt="image" className="image" />

          
        </div>

        <div className="dataVisualization">
          <h2 className="heading2">Data Visualization</h2>
          <p className="paragraph">The data was visualized with Power BI. Clearly showing major KPI's</p>
           <img src={humanDashboard} alt="image4" className="image4" />

           
        </div>

        <div className="conclusion">
          <h2 className="heading2">Conclusion</h2>
          <p className="paragraph">
          There are 4,524,170 users of medicare in the state of Florida.
          Humana has 813,254 users of its service in the state of Florida.
          Humana controls 17.98% of the medicare market in the state of Florida
          </p>
        </div>

      </div>
    </section>
  )
}

export default project3