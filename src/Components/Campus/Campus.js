import React from 'react';
import './Campus.css';
import gallery_1 from "../Assets/gallery-1.png";
import gallery_2 from "../Assets/gallery-2.png";
import gallery_3 from "../Assets/gallery-3.png";
import gallery_4 from '../Assets/gallery-4.png';
import WArrow from '../Assets/white-arrow.png';


const Campus = () => {
  return (
    <div className='campus' id="campus">
        <div className='gallery'>
            <img src={gallery_1} alt='Gallery-Img1'/>
            <img src={gallery_2} alt='Gallery-Img2'/>
            <img src={gallery_3} alt='Gallery-Img3'/>
            <img src={gallery_4} alt='Gallery-Img4'/>
        </div>
        <button className='btn'>See more <img src={WArrow} alt=''/></button>
    </div>
  )
}

export default Campus