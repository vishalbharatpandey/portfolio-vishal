import React, { useState } from 'react'
import './index.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const MyBioMain = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  window.onresize = () => setWindowWidth(window.innerWidth)
  return (
    <div className='myBioContainer'>
      <p className='header1'> HELLO EVERYBODY, I AM</p>
      <p className='header2'>VISHAL BHARAT PANDEY</p>
      <p className='header3'>SOFTWARE ENGINEER</p>
      <p className='bioDetail'> A passionate front-end web developer, with working experience on
        frameworks like ReactJS, AngularJS.</p>
      {windowWidth >= 450 &&
        <div>
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
  )
}

export default MyBioMain