import React from 'react'
import code from "../../assets/coding.svg"
import "./About.css"
const About = () => {
  return (
    <div className="wrapper-about">
      <img className="code" src = {code} alt="" />
      <div >
        <h1 className="head-about">About Software Developer <span>Fatih</span></h1>
      </div>
      <div className="personal-content">
        <h2>Hi, I'am Fatih</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>I know JS, ReactJS, Django, NodeJS, MongoDB,SQL, Python, AWS Services.</h4>
        <h2><a href="mailto:fatihsenko@gmail.com" className="email">Send email</a> : fatihsenko@gmail.com</h2>
      </div>
    </div>
  )
}

export default About