import React from 'react';
import "./HeroSection.css";

const HeroSection = (props) => {
    return (
        <div>
            <div className="imgDiv">
                <img src={props.info} alt="HeroImg" />
            </div>
            <div className="HeroText">
                <h1 className='HeroTitle'>Descover Your Next Adventure.</h1>
                <p className='HeroP'>{props.titleP}</p>
                <a href="#"><button className='bookingBtn'>Tap to booking</button></a>
            </div>

        </div>
    );
};

export default HeroSection;