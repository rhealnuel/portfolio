import React from "react";
import profilepic from '../images/first pics.png';
import heropics from '../images/hero pics.png';
import './Hero.css';

function Hero() {
    return (
        <div className='Hero'>
            <div className='herotext'>
                <h4 className='heroh4'>Designer, Frontend Developer & Mentor</h4>
                <p className='herop'> I design and code beautifully simple things, and I love what I do.</p>
            </div>
            <div className="heroprofile">
                <img src={profilepic} alt="profilepic" className='profilepics' />
            </div>
            <div className="heromain">
                <img src={heropics} alt="heropics" className="heropics" />
            </div>
        </div>
    )

}
export default Hero;