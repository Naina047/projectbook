import React from 'react';
import vector from '../Assets/vectorFive.png';
import logo from '../Assets/logo.png';
import instaIcon from '../Assets/insta-icon.png';
import twitterIcon from '../Assets/twitter-icon.png';

const Footer = () => {
  return (
    <section className='footer'>
    <div className='footer-inner-box'>
        <div className='top-footer'> 
            <div className='footer-header'>    
                <img src={vector} alt="vectortop" />
                <h1>Preserve meaningful moments & memories in a beautiful <span>OttoBook.</span></h1>
            </div>
            <button  className='primary-button'>Start Writing</button>
        </div>
        <div className='bottom-footer'>
            <div className='footer-one'>
                <img src={logo} alt="logo" />
            </div>
            <div className='footer-two'>
                <ul>
                    <li><a href="#"></a>Home</li>
                    <li><a href="#"></a>Features</li>
                    <li><a href="#"></a>OTTO Story</li>
                    <li><a href="#"></a>Contact</li>
                </ul>
            </div>
            <div className='footer-three'>
                <ul>
                    <li><a href="#"></a>FAQs</li>
                    <li><a href="#"></a>Terms and Conditions</li>
                    <li><a href="#"></a>Privacy Policy</li>                    
                </ul>
            </div>
        </div>
        <div className='rock-bottom'>
            <p>© 2023 - 2024 OttoStory. All Rights Reserved.</p>
            <div className='socials'>
                <img src={instaIcon} alt="insta" />
                <img src={twitterIcon} alt="twitter" />
            </div>
        </div>
    </div>
</section>
  )
}

export default Footer