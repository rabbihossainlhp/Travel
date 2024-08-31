import React from 'react';
import Navbar from '../components/Navbar';
import { menueData } from '../components/NavItems';

const Service = () => {
    return (
        <div>
            <Navbar sendItemsData={menueData}/>
            <h1>service Page is coming soon.</h1>
        </div>
    );
};

export default Service;