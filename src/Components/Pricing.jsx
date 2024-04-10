import React from 'react';
import image from '../Assets/pricingImage.png';
import iconUp from '../Assets/up-icon.png';
import icondown from '../Assets/down-icon.png';
import popular from '../Assets/popular-icon.png';
import vector from '../Assets/vectorFive.png';


const Pricing = () => {
  return (
    <section className='pricing'>
        <div className='main-pricing-box'>
            <div className='top-pricing'> 
                <img src={vector} alt="vectortop" />
                <h1>Unleash <span>Your Memories</span></h1>
                <p>Every story is unique, and so should be the book that holds it. At OttoStory, we offer three distinct book sizes to accommodate your autobiography. Choose the one that suits your narrative best</p>
            </div>
            <div className='bottom-pricing'>
                <div className='left-pricing'>
                    <img src={image} alt="pricing" />
                </div>
                <div className='right-pricing'>
                    <div className='otto-lite'>
                        <h1>Otto<span>Lite</span></h1>
                        <div className='otto-lite-right'>
                            <p>$299</p>
                            <p>OR</p>
                            <p><span>$30</span> /month</p>
                            <img src={iconUp} alt="icon" />
                        </div>
                    </div>
                    <ul className='otto-content'>
                        <li>Enjoy a vibrant, 60-page full color book filled with your life's story</li>
                        <li>Personalize your memoir with up to 30 high-resolution photos</li>
                        <li>Custom book cover with control of imagery and text</li>
                        <li>Celebrate diversity with free multilingual translations</li>
                        <li>Access to OttoStory Bookstore to sell your autobiography & earn</li>
                    </ul>
                    <button className='primary-button'>Start Writing</button>
                    <div className='otto-lite'>
                        <div className='popular'>
                            <h1>Otto<span>Premium</span></h1>
                            <img src={popular} alt="popular" />
                        </div>
                        <div className='otto-lite-right'>
                            <p className='popular-item'>$599</p>
                            <p>$499</p>
                            <img src={icondown} alt="icon" />
                        </div>
                    </div>
                    <div className='otto-lite'>
                        <h1>Otto<span>Deluxe</span></h1>
                        <div className='otto-lite-right'>
                            <p>$999</p>
                            <p>OR</p>
                            <p><span>$90</span> /month</p>
                            <img src={icondown} alt="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pricing