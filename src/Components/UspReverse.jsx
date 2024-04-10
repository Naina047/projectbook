import React from 'react';
import iconOne from '../Assets/iconone.png';
import iconCheck from '../Assets/iconCheck.png';
import vectorOne from '../Assets/vectorOne.png';

const UspReverse = () => {
  return (
    <div className='section-usp'>
        <div className='middle-section'>
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
            <div className='left-section'>
                <img src="https://s3-alpha-sig.figma.com/img/5f66/1565/e2a0e46a1e8953e26abbfe642f3868ac?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jqXWvT0ScJG1ORHlj8HqPt61~BncSvCdMjXdasjEf0TvC7gBQ2oT015YJw2LrMa~CYCqx~Zjpzoi21uUzRDMYnIK0V8nWdibN4aZA-Xyd671VEUBzFxihWcbk~X04~0-V4unbJRLYx7ulxdm~7HelViqIdTM-cQ7aHoIfWu1oOnbgSEAcVGXtF5X6WdfNVPMEDmcA6F40sDcn4JsQBcwBqLfWyZdE3kJ78ugbUPKjJOzKxGA7Tw9iUpn~FBkpB5JsY4ZM-twd0QVlIT6vI9UMkgBjNzat8797OQ3ATbZjq7PnDk2UF~Wum6abxbBtsPE5bRjR83tKONf~ufAu7txiw__" alt="lady" />
            </div>
        </div>
    </div>
  )
}

export default UspReverse