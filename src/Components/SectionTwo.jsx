import React from 'react';
import img1 from '../Assets/Rectangle 54.png';
import img2 from '../Assets/Rectangle 55.png';
import img3 from '../Assets/Rectangle 56.png';
import img4 from '../Assets/Rectangle 57.png';


const SectionTwo = () => {
  return (
    <section className='section2'>
        <div className='container'>
            <div className='left-section'>
                <div className="content-box">
                    <h1>You've shown the world chapters of your life,<i> now give them the complete book.</i></h1>
                    <div className='content'>
                        <p>Everyone has a unique story, and at OttoStory, we turn it into an extraordinary autobiography. Meet Otto, your AI biographer, guiding you through a reflective journey of your life's experiences.</p>
                        <p>Say goodbye to professional writers and high costs. Otto helps transform your cherished memories into a captivating memoir, allowing you to share your journey or simply reflect on your life. With OttoStory, your story is immortalized in a personal hardback book.</p>
                        <p>Begin with us today and watch your life's narrative come alive in print. Welcome to OttoStory</p>
                    </div>
                </div>
            </div>
            <div className='right-section'>
                <img className='image-top' src={img1} alt="one" />
                <img src={img2} alt="two" />
                <img src={img3} alt="three" />
                <img src={img4} alt="four" />
            </div>
        </div>
    </section>

  )
}

export default SectionTwo;