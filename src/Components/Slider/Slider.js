import './Slider.scss';
import { SliderData } from './Slider_data';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import { useEffect, useState } from 'react';


const Slider = () => {
    const [currentSlide, setCurrenSlide] = useState(0)
    const sliderLength = SliderData.length;

    // ⁡⁣⁢⁡⁣⁣⁢Auto Scroll Variables for slider⁡⁡
    const autoScroll = true;
    let sliderInterval;
    let intervalTime = 4000;

    // ⁡⁣⁣⁢Methods for prev,next button slider⁡
    const nextSlide = () => {
        setCurrenSlide(currentSlide === sliderLength -1 ? 0 :
            currentSlide +1);
    };
    const prevSlide = () => {
        setCurrenSlide(currentSlide === 0 ? sliderLength -1 :
            currentSlide -1);
    };
    // ⁡⁣⁣⁢auto function⁡
    const auto = () =>{
        sliderInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
      setCurrenSlide(0)
    
   
    }, [])

    useEffect(() => {
     if(autoScroll){
        auto()
     }
    return () => clearInterval(sliderInterval)
   
    }, [currentSlide])
    
    
  return (
    <div className='slider' id='home'>
        <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide}/>
        <AiOutlineArrowRight className='arrow next' onClick={nextSlide}/>

        {SliderData.map((slide, index) => {
            const {image,heading,desc} = slide
            return(
                <div key={index} className={index === currentSlide
                ? 'slide current' : 'slide'}>
                    {index === currentSlide && (
                        <>
                        <img src={image} alt='slider'/>
                        <div className='content'>
                            <h2>{heading}</h2>
                            <p>{desc}</p>
                            <hr/>
                            <a href='#program' className='btn'>
                            Enroll Now
                            </a>
                        </div>
                        </>
                    )}

               </div>
            )
        })}

    </div>
  )
}

export default Slider