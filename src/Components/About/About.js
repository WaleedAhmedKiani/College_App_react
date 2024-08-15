import React from 'react'
import './About.css';
import aboutImg from "../Assets/about.png";
import PlayIcon from '../Assets/play-icon.png';

const About = () => {
  return (
    <div className='about' id="about">
        <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
            <h1>Nurturing Tomorrow's Leaders Today</h1>
            <p>Proximity to industry hubs, cultural centers, and natural attractions.
               Climate and geographic setting.Local community and amenities.
               Integration of technology in teaching and learning. 
               Access to cutting-edge tools and software.
               Programs in emerging fields and interdisciplinary studies.</p>
            <p>Commitment to fostering a diverse student body.
               Inclusive policies and practices.
               Support for international students.
               Programs that promote cultural awareness and understanding.</p>
            <p>Modern and well-maintained classrooms and laboratories.
               Libraries with extensive collections and digital resources.
               Recreational and sports facilities.
               On-campus housing and dining options.</p>
           
        </div>
        <div className='about-left'>
        <img src={aboutImg} alt='aboutimage ' className='aboutImg'/>
        <img src={PlayIcon} alt='playIcon' className='play'/>
        </div>
    </div>
  )
}

export default About