import React from 'react'
import './index.css'

const Projects = () => {
    return (
        <div className='mainContent'>
            <div className='projects'>
                <h2>Projects</h2>
                <ul style={{ textAlign: "left" }}>
                    <li>
                        <p><b>Prototype of my current project with client</b></p>
                        <p>Developed a fully functional prototype of my current project with client, with purpose to demonstrate
                            all the important functionalities of current project. The prototype had the capability to help the client
                            in analysing the chemical experiment results. 
                            <i> Technologies - React.js, Redux, HTML, CSS, Javascript, jQuery</i></p>
                    </li>
                    <li>
                        <p><b>NewsByte- A fully functional news app</b></p>
                        <p>Developed a fully functional news application with modern and reponsive UI for different screen
                            sizes. It has all the basic features like Saving articles to read later, different categories of news, a
                            night mode, searching for a topic, filtering news articles etc. Used API from newsapi.org. 
                            <i> Technologies- React.js, Javascript, React Material UI, HTML,CSS, Tailwind CSS</i></p>
                    </li>
                    <li>
                        <p><b>TravelAway App for travel package bookings</b></p>
                        <p>Developed a fully functional travel packages booking application with functionalities like create
                            account, sign in, view list of packages with searching sorting, booking of packages etc. 
                            <i> Technologies- Angular, HTML, CSS, .NET core, SQL Server</i>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Projects