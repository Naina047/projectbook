import React from 'react';
import lady from '../Assets/lady-reading.png';
import man from '../Assets/man-reading.png';
import beige from '../Assets/vectorTwo.png';
import pink from '../Assets/vectorFour.png';
import white1 from '../Assets/vectorThree.png';
import white2 from '../Assets/vectorSix.png';

const Quote = () => {
  return (
    <section className='section-quote'>
        <div className='header'>
            <p>Wave goodbye to expensive fees and embrace the chance to author your life story.</p>
        </div>
        <div className='mask-image'>
            <img className='lady-reading' src={lady} alt="lady" />
        </div>
        <img className='man-reading' src={man} alt="man" />
        <img className='beige' src={beige} alt="beige" />
        <img className='white1' src={white1} alt="white" />
        <img className='pink' src={pink} alt="pink" />
        <img className='white2' src={white2} alt="white" />
    </section>
  )
}

export default Quote