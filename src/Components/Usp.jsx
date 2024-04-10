import React from 'react';
import iconOne from '../Assets/iconone.png';
import iconCheck from '../Assets/iconCheck.png';
import vectorOne from '../Assets/vectorOne.png';
import image1 from '../Assets/Usp-image1.png';
import image2 from '../Assets/Usp-image2.png';
import image3 from '../Assets/Usp-image3.png';
import image4 from '../Assets/Usp-image4.png';

const Usp = () => {
  return (
    <section className='usp'>
        <div className='section-usp'>
            <div className='middle-section'>
                <div className='left-section'>
                    <img src={image1} alt="lady" />
                </div>
                <div className='right-section'>
                    <img className='vector-one' src={vectorOne} alt="vector" />
                    <div className='prompt-one'>
                        <img src={iconOne} alt='icon'/>
                        <p>Kick-starting Your Story</p>
                    </div>
                    <h1 className='heading'>
                        Your Story<span> Starts Here</span>
                    </h1>
                    <div className='heading-content'>
                        <p> Begin your storytelling by diving into a random chapter presented by Otto, navigate through your life's timeline divided into distinct periods like childhood, adolescence, and beyond, or revise your previous drafts.</p>
                        <p>Each question you encounter has been meticulously designed by experienced psychologists, ensuring meaningful and reflective storytelling. Your journey through the past, present, and future is just a story-start away.</p>
                        <div className='check-pointers'>
                            <div className='pointer'>
                                <img src={iconCheck} alt="icon" />
                                <p>Carefully curated questions and prompts</p>
                            </div>
                            <div className='pointer'>
                                <img src={iconCheck} alt="icon" />
                                <p>Organize your story by key lifetime events or milestones</p>
                            </div>
                            <div className='pointer'>
                                <img src={iconCheck} alt="icon" />
                                <p>Timeline structure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='section-usp'>
        <div className='middle-section'>
            <div className='right-section'>
                <img className='vector-one' src={vectorOne} alt="vector" />
                <div className='prompt-one'>
                    <img src={iconOne} alt='icon'/>
                    <p>Kick-starting Your Story</p>
                </div>
                <h1 className='heading'>
                    Your Story,<span> Your Way</span>
                </h1>
                <div className='heading-content'>
                    <p> Begin your storytelling by diving into a random chapter presented by Otto, navigate through your life's timeline divided into distinct periods like childhood, adolescence, and beyond, or revise your previous drafts.</p>
                    <p>Each question you encounter has been meticulously designed by experienced psychologists, ensuring meaningful and reflective storytelling. Your journey through the past, present, and future is just a story-start away.</p>
                    <div className='check-pointers'>
                        <div className='pointer'>
                            <img src={iconCheck} alt="icon" />
                            <p>Carefully curated questions and prompts</p>
                        </div>
                        <div className='pointer'>
                            <img src={iconCheck} alt="icon" />
                            <p>Organize your story by key lifetime events or milestones</p>
                        </div>
                        <div className='pointer'>
                            <img src={iconCheck} alt="icon" />
                            <p>Timeline structure</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='left-section'>
                <img src={image2} alt="lady" />
            </div>
        </div>
    </div>
    <div className='section-usp'>
            <div className='middle-section'>
                <div className='left-section'>
                    <img src={image3} alt="lady" />
                </div>
                <div className='right-section'>
                    <img className='vector-one' src={vectorOne} alt="vector" />
                    <div className='prompt-one'>
                        <img src={iconOne} alt='icon'/>
                        <p>Kick-starting Your Story</p>
                    </div>
                    <h1 className='heading'>
                        From Digital Pages to<span> Tangible Keepsake</span>
                    </h1>
                    <div className='heading-content'>
                        <p> Begin your storytelling by diving into a random chapter presented by Otto, navigate through your life's timeline divided into distinct periods like childhood, adolescence, and beyond, or revise your previous drafts.</p>
                        <p>Each question you encounter has been meticulously designed by experienced psychologists, ensuring meaningful and reflective storytelling. Your journey through the past, present, and future is just a story-start away.</p>
                        <div className='check-pointers'>
                            <div className='pointer'>
                                <img src={iconCheck} alt="icon" />
                                <p>Carefully curated questions and prompts</p>
                            </div>
                            <div className='pointer'>
                                <img src={iconCheck} alt="icon" />
                                <p>Organize your story by key lifetime events or milestones</p>
                            </div>
                            <div className='pointer'>
                                <img src={iconCheck} alt="icon" />
                                <p>Timeline structure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div className='section-usp'>
        <div className='middle-section'>
            <div className='right-section'>
                <img className='vector-one' src={vectorOne} alt="vector" />
                <div className='prompt-one'>
                    <img src={iconOne} alt='icon'/>
                    <p>Kick-starting Your Story</p>
                </div>
                <h1 className='heading'>
                    Memoir Meet<span> Marketplace</span>
                </h1>
                <div className='heading-content'>
                    <p> Begin your storytelling by diving into a random chapter presented by Otto, navigate through your life's timeline divided into distinct periods like childhood, adolescence, and beyond, or revise your previous drafts.</p>
                    <p>Each question you encounter has been meticulously designed by experienced psychologists, ensuring meaningful and reflective storytelling. Your journey through the past, present, and future is just a story-start away.</p>
                    <div className='check-pointers'>
                        <div className='pointer'>
                            <img src={iconCheck} alt="icon" />
                            <p>Carefully curated questions and prompts</p>
                        </div>
                        <div className='pointer'>
                            <img src={iconCheck} alt="icon" />
                            <p>Organize your story by key lifetime events or milestones</p>
                        </div>
                        <div className='pointer'>
                            <img src={iconCheck} alt="icon" />
                            <p>Timeline structure</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='left-section'>
                <img src={image4} alt="lady" />
            </div>
        </div>
    </div>
    </section>
    
  )
}

export default Usp