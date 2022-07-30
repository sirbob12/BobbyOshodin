import React from 'react'
import './contact.css';

const Contact = () => {
  return (
    <section className="contact">
        <div className="contact container">
            <h1 className="contact_heading">Contact Me</h1>
            <form>      
              <input name="name" type="text" class="feedback-input" placeholder="Name" />   
              <input name="email" type="text" class="feedback-input" placeholder="Email" />
              <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
              <input type="submit" value="SUBMIT"/>
            </form>
        </div>
    </section>
  )
}

export default Contact