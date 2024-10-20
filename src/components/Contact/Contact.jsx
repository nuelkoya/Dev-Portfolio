import React, { forwardRef, useEffect } from 'react'
import "./Contact.scss"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Contact = forwardRef( ({ }, ref) => {
    
    const date = new Date()
    return (
      <div className="contact" ref={ref}>
        <div className="contactContainer">
          <h1>Send me a message!</h1>
          <p>Got a question or proposal, or just want say hello? Go ahead.</p>
          <a href="mailto:adetola442@gmail.com" className="btn">Say Hello</a>
        </div>
        <div className="footer">
          <div className="icons">
            <a href="https://github.com/nuelkoya" target="_blank">
              <FaGithub size={35}/>
            </a>
  
            <a href="https://www.linkedin.com/in/adetola-olukoya-49b32222b/" target="_blank">
              <FaLinkedinIn size={35}/>
            </a>
  
            <a href="https://www.instagram.com/klaize_/" target="_blank">
              <FaInstagram size={35}/>
            </a>
            
  
          </div>
          <p>&copy; Adetola Olukoya {date.getFullYear()}</p>
  
        </div>
        
      </div>
    )
  }
)


export default Contact