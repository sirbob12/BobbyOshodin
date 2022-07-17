import React from 'react'
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact">
        <div className="contact container">
            <h1 className="contact_heading">Contact Me</h1>
            <form>
            <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
        </div>
    </section>
  )
}

export default Contact