import React from 'react'
import {images} from '../../Constant'
import linkedin from '../../port_asset/linkedin.png';
import github1 from '../../port_asset/github1.png';
import x from '../../port_asset/x.png';
import './Social.scss';

const Social = () => {
  return (
    <section className="social">
      <div className="wrapper">
       <a href="https://bit.ly/47nklpw" target="_blank" className="linkedin"><img src={linkedin} alt="" className="linkedImg" /></a>
       <a href="https://bit.ly/3QJXtL9" target="_blank" className="github1"><img src={github1} alt="" className="githubImg" /></a>
       <a href="#" target="_blank" className="x"><img src={x} alt="" className="x" /></a>
      </div>
    </section>
  )
}

export default Social