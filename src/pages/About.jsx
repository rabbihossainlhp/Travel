import React from 'react';
import Navbar from '../components/Navbar';
import { menueData, socialLink } from '../components/NavItems';
import { aboutSectionData } from '../components/NavItems';
import "./about.css";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div className='rootab'>
            <Navbar sendItemsData={menueData}/>
            <h1 className='abus'>About Us.</h1>
            {
                aboutSectionData.map((items)=>{
                    return(
                        <div className="mainabSection">
                            <div className="abSection">
                                <div className="textSection">
                                    <h1>{items.title}</h1> 
                                    <p>{items.text}</p>    
                                </div>
                                <div className="imgSection">
                                    <img src={items.imgSrc} alt="about us img" />
                                </div>
                            
                            </div>                            
                        </div>
                    )
                })
            }
            <div className="navDiv">
                <Footer setSocial={socialLink} setMenue={menueData}/>
            </div>
        </div>
    );
};

export default About;