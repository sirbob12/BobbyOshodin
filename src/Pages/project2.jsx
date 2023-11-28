import React from 'react';
import {images} from '../Constant';
import './project2.scss';
import sql1 from '../port_asset/sql1.png';
import sql2 from '../port_asset/sql2.png';
import healthcareTable from '../port_asset/healthCareDataTable.png';
import executiveDashboard from '../port_asset/excutiveDashboard.png';



const project2 = () => {
  return (
    
    <section className="project2">
      <div className="containerWrapper"> 

        <h1 className="main_heading">Festive-Buys-Store-Analysis</h1>

        <h2 className="heading2">Introduction:</h2>
        <p className="paragraph">
        This project aims to show my data analysis and
         visualization skills using SQL, MS Excel and 
         data modelling skills using powerBI. 
         The problem statement is an imaginary concept 
         I think the stakeholders would be intrested in.
        </p>
        
        <h2 className="heading2">Problem Statement</h2>
        <p className="paragraph">
        FestiveBuys is a fictional American retail store chain on
        the cusp of an exciting expansion with retail outlets in 3 states.
         As the company prepares to establish its new headquarters, 
         the stakes are high. The opening event promises not only to celebrate
          the brand's success but also to recognize and reward exceptional contributors.

       <p className="section_paragraph">
          After critical thinking, three pivotal questions demand answers:<br/>
          <p className="section_paragraph">
         1. In which location have we achieved the highest sales?<br/>
         2. Which sales representative has consistently achieved the highest sales figures?<br/>
         3. Who among our esteemed customers has made the most substantial purchases, 
         contributing significantly to our success?<br/>
        </p>
         </p>
         </p>

         <h2 className="heading2">Tools</h2> 
         <p> Microsoft SQL Server, PowerBi</p>
        
         <h2 className="heading2">Data Sourcing</h2> 
         <p className="paragraph">
         Dataset was stored in a Microsoft SQL database . The information where categorically seperated into 9 different tables.<br/>
          <p>
          The Tables include the following:
           
           <p>
            production.products<br/>
            production.brands<br/>
            production.categories<br/>
            sales.stores<br/>
            sales.staff<br/>
            sales.staff<br/>
            sales.orderItems<br/>
            production.stocks<br/>
            sales.customers<br/>
            </p>

           

            I used SQL joins to form the table that contained all the 
            information I needed for this project...
            </p>
         </p>

          <div className="sql_div">
            <img src={sql1} alt="sql1image" className="sql1image" />
            <img src={sql2} alt="sql2image" className="sql2image" />
          </div>

          <p className="paragraph">View data source Here</p>

          <h2 className="heading2">Data Transformation</h2>
          <p className="paragraph">
          The dataset was imported into Power Bi from SQL. Power Query was used to perform data cleaning.
           After properly cross-checking all the columns they were found
            to be valid, complete, and void of null values. However unwanted
             and irrelevant columns such as the category_name column were removed.
              The data type of the date was properly formatted.<br/>
          <p>Below is a screenshot of power cleaning with power query.</p>
          </p>

          <img src={healthcareTable} alt="image1" className="image1" />

         <div className="visualization">
          <h2 className="heading2">Data Visualization</h2>
          <p className="paragraph">
          A power BI dashboard was designed to visualize
           our findings from the dataset provided.
            Below is a screenshot of the dashboard 
            for the executives.
          </p>

          <img src={executiveDashboard} alt="image3" className="image3" />

          <p className="paragraph">
          View Dashboard [Here](BikeStore Visualize.pbix)
          </p>
          </div>

          <h2 className="heading2">
          CONCLUSIONS AND RECOMMENDATIONS.
          </h2>

          <p className="paragraph">
         1 .The state of New York happens to generate the highest revenue for the company.
            Hence it's the most appropriate to locate the new office headquarters.<br/>
         2 .Marcelen Boyer is the salesman with the highest sales in terms of revenue raked in. 
           Hence he should be considered for the sales manager position at the new office headquarters.<br/>
         3 .Pamella Newman is our top customer and should be recognized, awarded, and given company incentives such as a car, a vacation, and discounts on subsequent purchases.
          </p>
          






      </div>
    </section>
  )
}

export default project2