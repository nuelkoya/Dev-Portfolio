import { useRef, useState, useEffect } from 'react'
import './App.scss'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Project from './components/Project/Project'


function App() {
  const projectRef = useRef()
  const contactRef = useRef()
  const dropdownRef = useRef()
  const [showDropdown, setShowDropdown] = useState(false)
  const [checkDropdown, setCheckDropdown] = useState(false)
  const [contactTop, setContactTop] = useState()
  const [projectTop, setProjectTop] = useState()
  useEffect(() => {
    setContactTop(contactRef.current?.getBoundingClientRect().top + window.scrollY)
    setProjectTop(projectRef.current?.getBoundingClientRect().top + window.scrollY)
  })

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  },[])

  

  return (
    <div className={`app`}
    >
      {
        checkDropdown && <div className="appBg"
        onClick={() => setShowDropdown(prev => !prev)}
        ></div>
      }
      
      <Navbar
        contactTop={contactTop}
        projectTop={projectTop}
        ref={dropdownRef}
        setCheckDropdown={setCheckDropdown}
        showDropdown={showDropdown}
        setShowDropdown = {setShowDropdown}
      />
      <Hero/>
      <Project ref={projectRef}/>
      <Contact ref={contactRef}/>
    </div>
  )
}

export default App
