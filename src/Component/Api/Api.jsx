import React, {useEffect, useState} from 'react'
import './Api.scss';

const Api = () => {

  const [customers, setCustomers] = useState([])


   const API_URL = 'api/customers'

   const getCustomers = async() =>{
     const response = await fetch(API_URL);
     const data = await response.json();
     setCustomers(data)
   }

   useEffect(()=>{
    getCustomers()
   }, [])
    
  return (
    <section className="api_test">
        <h1 className="text_heading"> Customer Details</h1>
        {customers.map((customers)=>(
          <li className="list_style" key={customers.id}>{customers.name} | {customers.account_no}</li>
        ))}
         
        
    </section>
  )
}

export default Api