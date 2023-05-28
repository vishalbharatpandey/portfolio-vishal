import React from 'react'
import './index.css'
import PhoneIcon from '@mui/icons-material/CallOutlined';
import MailIcon from '@mui/icons-material/Mail'
import Twitter  from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';

const Contact = () => {
    return (
        <div className='contacts'>

            <div class="container">
                <h2>Contact Me</h2>

                <div class="contact-method">
                    <span><PhoneIcon /></span>
                    <a href="tel:7355638695">+91-7355638695</a>
                </div>

                <div class="contact-method">
                    <span><MailIcon /></span>
                    <a href="mailto:vishalbharatpandey@gmail.com">vishalbharatpandey@gmail.com</a>
                </div>

                <div class="contact-method">
                    <span><Twitter /></span>
                    <a target="_blank" href="https://twitter.com/vishalbharatpa0?t=YSQ08vM8GyiKvI6r57U1Ww&s=08">Twitter</a>
                </div>

                <div class="contact-method">
                    <span><LinkedIn /></span>
                    <a target="_blank" href="https://www.linkedin.com/in/vishal-bharat-pandey-2b3a5b189">LinkedIn</a>
                </div>

                <div class="contact-method">
                    <span><Facebook /></span>
                    <a target="_blank" href="https://www.facebook.com/vishalbharat.pandey?mibextid=LQQJ4d">Facebook</a>
                </div>

                <div class="contact-method">
                    <span><Instagram /></span>
                    <a target="_blank" href="https://instagram.com/vishal_bharat_pandey?igshid=OGQ5ZDc2ODk2ZA==">Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default Contact