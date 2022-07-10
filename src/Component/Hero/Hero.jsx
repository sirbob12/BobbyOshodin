import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_wrapper">
        <img src="#" alt="" className="hero_background_image" />

        <div className="container grid">
          
          <div className="right_section">
            <p className="heading_text">Hello</p>
            <h1 className="main_heading heading_align">I'm Bobby</h1>
            <h2 className="subheading-text subheading_align">UI/UX Design</h2>

            <p className="text_paragraph">I create, design and develope amazing products and 
            experiences that makes people happy</p>
          </div>

          <div className="left-section">
            <img src="#" alt="hero_image" className="hero_image" />
          </div>
        </div>
      </div>

     
    </section>
  )
}

export default Hero