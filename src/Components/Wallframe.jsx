import React from 'react';
import frame1 from '../Assets/frame1.png';
import frame2 from '../Assets/frame2.png';
import frame3 from '../Assets/frame3.png';
import frame4 from '../Assets/frame4.png';
import image1 from '../Assets/frameone.png';
import image2 from '../Assets/frametwo.png';
import image3 from '../Assets/framethree.png';
import image4 from '../Assets/framefour.png';
import lockIcon from '../Assets/lock-icon.png';
import imageIcon from '../Assets/image-icon.png';
import userIcon from '../Assets/user-icon.png';
import giftIcon from '../Assets/gift-icon.png';

const Wallframe = () => {
  return (
    <section className='wall-frame'>
        {/* <img className='vector' src={vector} alt="vector" /> */}
        <div className='frame-one'>
            <img className='lock-icon' src={lockIcon} alt="lock-icon" />
            <img className='frame1' src={frame1} alt="frame1" />
            <img className='image1' src={image1} alt="image" />
        </div> 
        <div className='frame-two'> 
            <img className='image-icon' src={imageIcon} alt="lock-icon" />
            <img className='image2' src={image2} alt="image" />
            <img className='frame2' src={frame2} alt="frame2" />
        </div>
        <div className='frame-three'>
            <img className='user-icon' src={userIcon} alt="user-icon" />
            <img className='frame3' src={frame3} alt="frame3" />
            <img className='image3' src={image3} alt="image" />
        </div>
        <div className='frame-four'>
            <img className='gift-icon' src={giftIcon} alt="gift-icon" />
            <img className='image4' src={image4} alt="image" />
            <img className='frame4' src={frame4} alt="frame4" />
        </div>
    </section>
  )
}

export default Wallframe