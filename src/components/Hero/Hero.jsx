import React from 'react'
import "./Hero.scss"
import heroPicture from "../../assets/hero.jpg"

const Hero = () => {
  return (
    <div className="hero">
      <div className="leftHero">
        <p>Hi, my name is</p>
        <h1>Adetola Olukoya.</h1>
        <p className="heroDetail">
            Creative and detail-oriented front-end developer with a passion for building seamless, 
            user-friendly web experiences. Proficient in HTML, CSS, and JavaScript, 
            with experience in modern frameworks like React. 
            Skilled at transforming designs into functional, responsive websites, 
            ensuring cross-browser compatibility and optimal performance. 
            Committed to delivering high-quality code that enhances user interaction.
        </p>
        
        <div className="leftHeroBottom">
        </div>
      </div>
      
      

      <div className="rightHero">
        <img src={heroPicture} alt="" />
      </div>
    </div>
  )
}

export default Hero