import React from 'react';
import Navbar from '../components/Navbar';
import { menueData } from '../components/NavItems';

const Service = () => {
    return (
        <div>
            <Navbar sendItemsData={menueData}/>
            <h1>wse service</h1>
        </div>
    );
};

export default Service;