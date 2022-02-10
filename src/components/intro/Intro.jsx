import "./intro.css"
import Me from "../../img/me.png"
import React from 'react'

const Intro = () => {
  return (
    <div className='i'>
      <div className='i-left'>
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h2 className="i-name">Shreya Suroliya</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Content Writer</div>
              <div className="i-title-item">IT Student</div>
              <div className="i-title-item">Vivid Learner</div>
              <div className="i-title-item">And still discovering more</div>
            </div>
          </div>
          <div className="i-desc">Hey, glad you came here. 
          First and foremost, I love writing code. I'm passionate about creating websites, automating the stuff, and would appreciate discussion over the same.</div>
        </div>
      </div>
      <div className='i-right'>
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro