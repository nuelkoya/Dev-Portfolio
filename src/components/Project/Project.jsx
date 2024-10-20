import React, { forwardRef } from 'react'
import "./Project.scss"
import { FaGithub } from "react-icons/fa";
import stanza from "../../assets/stanza.png"
import fincalc from "../../assets/fincalc.png"
import skylane from "../../assets/skylane.png"

const Project = forwardRef(({  }, ref) => {
  
  return (
    <div className="project" ref={ref}>
        <h1>Projects</h1>

        <div className="projectCard">
            <div className="projectDesc">
                <div className="projectDescTop">
                    <h2>Stanza</h2>
                    <p>
                        Stanza is a web app for creating and sharing poems, 
                        built with modern front-end technologies like React and 
                        styled-components for a clean, responsive UI. 
                        It leverages client-side routing for seamless navigation 
                        and integrates with Firebase on the backend to store and display user-submitted poetry. 
                    </p>
                </div>
                <div className="projectDescBottom">
                    <a href="https://stanza-poem.netlify.app/" target="_blank" className="btn">
                        Go Live
                    </a>
                    <div className="githubIcon">
                        <a href="https://github.com/nuelkoya/Stanza" target="_blank">
                            <FaGithub size={45}/>
                        </a>
                    </div>
                    
                </div>
                
            </div>
            <div className="projectImage">
                <a href="https://stanza-poem.netlify.app/" target="_blank">
                    <div className="hue"></div>
                    <img src={stanza} alt="" />
                </a>
                
            </div>
        </div>



        <div className="projectCard">
            <div className="projectDesc">
                <div className="projectDescTop">
                    <h2>Fincalc</h2>
                    <p>
                        FinCalc is a web app built with React for financial calculations, 
                        offering tools like loan payment estimations, savings growth projections, 
                        and investment planning. 
                        It integrates Chart.js to provide dynamic, real-time visualizations of financial data, 
                        enhancing user insights with customizable charts.
                    </p>
                </div>
                <div className="projectDescBottom">
                    <a href="https://fincalcproject.netlify.app/" target="_blank" className="btn">
                        Go Live
                    </a>
                    <div className="githubIcon">
                        <a href="https://github.com/nuelkoya/Fincalc" target="_blank">
                            <FaGithub size={45}/>
                        </a>
                    </div>
                    
                </div>
                
            </div>
            <div className="projectImage">
                <a href="https://fincalcproject.netlify.app/" target="_blank">
                    <div className="hue"></div>
                    <img src={fincalc} alt="" />
                </a>
                
            </div>
        </div>



        <div className="projectCard">
            <div className="projectDesc">
                <div className="projectDescTop">
                    <h2>Skylane</h2>
                    <p>
                        Skylane Jets is a web application designed for private jet charter services, 
                        featuring a sleek, responsive interface built with React. 
                        It showcases various charter options, provides details about the fleet, and 
                        facilitates inquiries through interactive forms.
                    </p>
                </div>
                <div className="projectDescBottom">
                    <a href="https://skylanejets.netlify.app/" target="_blank" className="btn">
                        Go Live
                    </a>
                    <div className="githubIcon">
                        <a href="https://github.com/nuelkoya/SkylaneJets" target="_blank">
                            <FaGithub size={45}/>
                        </a>
                    </div>
                    
                </div>
                
            </div>
            <div className="projectImage">
                <a href="https://skylanejets.netlify.app/" target="_blank">
                    <div className="hue"></div>
                    <img src={skylane} alt="" />
                </a>
                
            </div>
        </div>
    
    </div>
  )
})

export default Project