import React, { useRef } from 'react';
import "./Testimonial.css";
import next_icon from "../../Components/Assets/next-icon.png";
import back_icon from "../../Components/Assets/back-icon.png";
import User_1 from "../../Components/Assets/user-1.png";
import User_2 from "../../Components/Assets/user-2.png";
import User_3 from "../../Components/Assets/user-3.png";
import User_4 from "../../Components/Assets/user-4.png";


const Testimonial = () => {

    const Sliding = useRef();
    let tx = 0;

    const ForwardSlide = () => {
        if(tx > -50) {
            tx -=25;
        }
        Sliding.current.style.transform = `translateX(${tx}%)`
    }

    const BackwardSlide = () => {
        if(tx < 0) {
            tx +=25;
        }
        Sliding.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn' onClick={ForwardSlide}/>
        <img src={back_icon} alt='' className='back-btn' onClick={BackwardSlide}/>

        <div className='slider2'>
            <ul ref={Sliding}>
                <li>
                    <div className='slide_02'>
                        <div className='user-info'>
                            <img src={User_1} alt=''/>
                            <div>
                                <h3>Daisy Jack</h3>
                                <span>Landon, Uk</span>
                            </div>
                        </div>
                        <p>The professors are highly knowledgeable and passionate about their subjects.
                           The coursework is challenging but rewarding, and I feel well-prepared for my career.</p>
                    </div>
                </li>

                <li>
                    <div className='slide_02'>
                        <div className='user-info'>
                            <img src={User_2} alt='' />
                            <div>
                                <h3>Noah Leo</h3>
                                <span>Liverpol, Uk</span>
                            </div>
                        </div>
                        <p>The professors are highly knowledgeable and passionate about their subjects.
                        The coursework is challenging but rewarding, and I feel well-prepared for my career.</p>
                    </div>
                </li>

                <li>
                    <div className='slide_02'>
                        <div className='user-info'>
                            <img src={User_3} alt=''/>
                            <div>
                                <h3>Amelia </h3>
                                <span>Reading, Uk</span>
                            </div>
                        </div>
                        <p>The professors are highly knowledgeable and passionate about their subjects.
                        The coursework is challenging but rewarding, and I feel well-prepared for my career.</p>
                    </div>
                </li>

                <li>
                    <div className='slide_02'>
                        <div className='user-info'>
                            <img src={User_4} alt=''/>
                            <div>
                                <h3>James</h3>
                                <span>Birmingham, Uk</span>
                            </div>
                        </div>
                        <p>The professors are highly knowledgeable and passionate about their subjects.
                        The coursework is challenging but rewarding, and I feel well-prepared for my career.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonial;