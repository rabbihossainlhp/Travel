import React from 'react';
import Navbar from '../components/Navbar';
import { menueData } from '../components/NavItems';

const About = () => {
    return (
        <div>
            <Navbar sendItemsData={menueData}/>
            <h2>Hello about</h2>
        </div>
    );
};

export default About;