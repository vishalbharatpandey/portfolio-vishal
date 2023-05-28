import React from 'react'
import HTMLLogo from './../../../images/HTMLLogo.jpeg'
import CSSLogo from './../../../images/CSSLogo.jpeg'
import JSLogo from './../../../images/JSLogo.jpeg'
import ReactLogo from './../../../images/ReactLogo.jpeg'
import GitLogo from './../../../images/GitLogo.jpeg'
import MUILogo from './../../../images/MUILogo.jpeg'
import './index.css'

const Skills = () => {
    return (
        <div className='mainContent'>
            <div className='skills'>
                <h2>
                    Skills
                </h2>
                <div className='skillsRow'>
                    <div>
                        <img src={ReactLogo} />
                        <p>Working experience of 2+ years with the knowledge in Redux, Jest and Enzyme</p>
                    </div>
                    <div>
                        <img src={CSSLogo} />
                        <p>CSS knowledge including SCSS and Tailwind CSS</p>
                    </div>
                    <div>
                        <img src={JSLogo} />
                        <p>2+ years with Javascript including DOM manipulation, session management etc</p>
                    </div>
                </div>
                <div className='skillsRow'>
                    <div>
                        <img src={MUILogo} />
                        <p>Work experience of 2+ years with React material UI library</p>
                    </div>
                    <div>
                        <img src={HTMLLogo} />
                        <p>Work experience of 2+ years</p>
                    </div>
                    <div>
                        <img src={GitLogo} />
                        <p>Knowledge of version control system along with Gitlab</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills