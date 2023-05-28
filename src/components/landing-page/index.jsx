import React, { useState } from 'react'
import { LandingPageMenu } from './landingPage.constants'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import Education from '../tab-components/Education'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContent from './main-content'
import { Tabs, Tab, Box } from '@mui/material'
import Skills from '../tab-components/Skills'
import Projects from '../tab-components/Projects'
import About from '../tab-components/About'
import Contact from '../tab-components/Contact'

const LandingPage = () => {
    const [value, setValue] = useState(0)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const navigate=useNavigate()

    window.addEventListener('resize',()=>setWindowWidth(window.innerWidth))

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='landingPage'>
            <div className='topMenuPanel'>
                {windowWidth > 700 &&
                    <div className='menuItems'>
                        <div>
                            <span><Link to="/">{LandingPageMenu.HOME}</Link></span>
                            <span><Link to="/about">{LandingPageMenu.ABOUT}</Link></span>
                        </div>
                        <div>
                            <span><Link to="/education">{LandingPageMenu.EDUCATION}</Link></span>
                            <span><Link to='/skills'>{LandingPageMenu.SKILLS}</Link></span>
                        </div>
                        <div>
                            <span><Link to="/projects">{LandingPageMenu.PROJECTS}</Link></span>
                            <span><Link to="/contact">{LandingPageMenu.CONTACT}</Link></span>
                        </div>
                    </div>
                }
                {windowWidth <= 700 &&
                    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'inherit', color: 'white' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons
                            allowScrollButtonsMobile
                            aria-label="scrollable force tabs example"
                        >
                            <Tab onClick={()=>navigate("/")} label={LandingPageMenu.HOME} />
                            <Tab onClick={()=> navigate("/about")} label={LandingPageMenu.ABOUT} />
                            <Tab onClick={()=>navigate("/education")} label={LandingPageMenu.EDUCATION} />
                            <Tab onClick={()=>navigate('/skills')} label={LandingPageMenu.SKILLS} />
                            <Tab onClick={()=>navigate("/projects")} label={LandingPageMenu.PROJECTS} />
                            <Tab onClick={()=>navigate("/contact")} label={LandingPageMenu.CONTACT} />
                        </Tabs>
                    </Box>
                }
            </div>
            <div className='mainContentContainer'>

                <Routes>
                    <Route path='/' element={<MainContent />} />
                    <Route path='/portfolio-vishal/' element={<MainContent />} />
                    <Route path='/education' element={<Education />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>

            </div>
            {/* <div className="contact">
                <Contact />
            </div> */}
        </div>
    )
}

export default LandingPage