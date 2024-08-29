import React from 'react';
import "./home.css";
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import {menueData,socialLink} from "../components/NavItems";
import HomeHeroImg from "../assets/eight.jpg";
import {Destination} from "../components/DestinationData";
import img1 from "../assets/teen.jpg";
import img2 from "../assets/twielve.jpg";
import img3 from "../assets/fifth.jpg";
import img4 from "../assets/first.jpg";
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar sendItemsData={menueData}/>            
            <HeroSection info={HomeHeroImg} 
                titleP = "Explore the world's most beautiful destinations with unforgotable experience tailord just for you."/>
        
            <div className="simpleDscr">
                <h1>Populer Spots</h1>
                <p>Discover the best place to visit around the world.</p>
            </div>

            <div className="DescriptionPlace1">
                <div className="sec1">
                    <h2>{Destination[0].title1}</h2>
                    <p>{Destination[0].text1}</p>
                </div>
                <div className="sec2">
                    <img src={img1} alt="img1" />
                    <img src={img2} alt="img2" />
                </div>
            </div>
            
            {/* new same section from here */}

            <div className="DescriptionPlace2">
                <div className="sec1">
                    <h2>{Destination[1].title2}</h2>
                    <p>{Destination[1].text2}</p>
                </div>
                <div className="sec2">
                    <img src={img3} alt="img1" />
                    <img src={img4} alt="img2" />
                </div>
            </div>
        

            <Footer setMenue = {menueData} setSocial ={socialLink}/>
        </div>
    );
};

export default Home;