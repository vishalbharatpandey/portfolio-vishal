import React, { useState } from 'react'
import MyBioMain from '../../myBioMain'
import myImage from '../../../images/myImage.jpg'
import './../../landing-page/index.css'
import './../../myBioMain/index.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const MainContent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    window.addEventListener('resize',()=>setWindowWidth(window.innerWidth))
    
    return (
        <div className='mainContent'>
            <div className='myImage'>
                <div className='imageDiv'><img src={myImage} height="80%" width="90%" /></div>
                {windowWidth < 450 &&
                    <div style={{position:"relative", top:"-30px"}} className='myBioContainer'>
                        <div>
                            <CalendarMonthIcon className='shieftIcons' /> <span style={{ paddingLeft: "8%" }}>30th October, 1998</span>
                        </div>
                        <div style={{ marginTop: "5%" }}>
                            <PhoneIcon className='shieftIcons' /> <span style={{ paddingLeft: "8%" }}>+91 7355638695</span>
                        </div>
                        <div style={{ marginTop: "5%" }}>
                            <MailIcon className='shieftIcons' /> <span style={{ paddingLeft: "8%" }}>vishalbharatpandey@gmail.com</span>
                        </div>
                        <div className='socialProfiles'>
                            <a >
                                <FontAwesomeIcon color='blue' icon={faLinkedin} size='2x' />
                            </a>
                            <a>
                                <FontAwesomeIcon color='red' icon={faInstagram} size='2x' />
                            </a>
                            <a>
                                <FontAwesomeIcon color='blue' icon={faFacebook} size='2x' />
                            </a>
                            <a>
                                <FontAwesomeIcon icon={faTwitter} size='2x' />
                            </a>
                        </div>
                    </div>
                }
            </div>
            <div className='myBioMain'>
                <MyBioMain />
            </div>
        </div>
    )
}

export default MainContent