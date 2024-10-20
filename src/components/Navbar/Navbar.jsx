import React, { forwardRef, useEffect, useState } from 'react'
import  "./Navbar.scss"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";


const Navbar = forwardRef(({ showDropdown, setShowDropdown, contactTop, projectTop, setCheckDropdown }, ref) => {
  
  const [pageWidth, setPageWidth] = useState(window.innerWidth)
  
  useEffect(() => {
    if(ref.current.classList.value.includes('dropdown')){
        setCheckDropdown(true)
    }else{
        setCheckDropdown(false)
    }
    
  })
  


  useEffect(()=>{
    const windowSizeHandler = () => {
        setPageWidth(window.innerWidth)
    }

    window.addEventListener("resize", windowSizeHandler)
    if(window.innerWidth > 800){
        setShowDropdown(false)
    }

  })

  const handleProjectNav = () => {
      setShowDropdown(false)
      console.log(projectTop)
      window.scrollTo({
        top: projectTop,
        behavior: "smooth"
      })
  }

  const handleContactNav = () => {
    setShowDropdown(false)
    window.scrollTo({
      top: contactTop,
      behavior: "smooth"
    })
    
}

  return (
    <div className="navbar">

        <div className="left">
            <a href="">
                <h1>Adetola</h1>
            </a>
        </div>
        <div className={`right ${showDropdown ? `dropdown` : ''}`} ref={ref}>
            <div className="close" onClick={() => setShowDropdown(prev => !prev)}>
                {
                    showDropdown &&
                    <IoMdClose size={45} style={{color: "#52b788"}}/>
                    
                }
            </div>
            
            <a href="">About</a>
            <a onClick={()=>handleProjectNav()}>Projects</a>
            <a onClick={()=>handleContactNav()}>Contact</a>
            <a href="https://copper-ardelia-20.tiiny.site/" target="_blank" className="btnNav">Resume</a>
        </div>
        <div className="hamburger"
            onClick={() => setShowDropdown(prev => !prev)}
        >
            {
                !showDropdown 
                && <GiHamburgerMenu size={45} style={{color: "#52b788"}}/>
            }
            
            


        </div>

    </div>
  )
})

export default Navbar