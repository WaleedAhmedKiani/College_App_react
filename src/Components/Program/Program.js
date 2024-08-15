import React from 'react'
import './Program.css';
import P1 from '../Assets/program-1.png';
import P2 from '../Assets/program-2.png';
import P3 from '../Assets/program-3.png';
import PIcon1 from '../Assets/program-icon-1.png';
import PIcon2 from '../Assets/program-icon-2.png';
import PIcon3 from '../Assets/program-icon-3.png';


const Program = () => {
  return (
    <div className='programs' id='program'>
        <div className='program'>
            <img src={P1} alt='Program1' />
            <div className='caption'>
                <img src={PIcon1} alt=''/>
                <p>Graduation Degree</p>
            </div>
        </div>

        <div className='program'>
            <img src={P2} alt='Program2' />
            <div className='caption'>
                <img src={PIcon2} alt=''/>
                <p>Master Degree</p>
            </div>
        </div>

        <div className='program'>
            <img src={P3} alt='Program3' />
            <div className='caption'>
                <img src={PIcon3} alt=''/>
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}

export default Program