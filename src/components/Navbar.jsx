import React, { useState } from 'react';
import "./navbar.css"
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    const [openMenue,setOpenMenue]=useState(false);
    const toggleOpenMenue=()=>{
        setOpenMenue(!openMenue);
    }
    return (
        <nav className='navItems'>
            <h1 className='navbar-logo'>.Tour@im.'</h1>
            <div className={`menueItems ${openMenue?"show":"hidden"}`}>
                <ul className='Nav-Unorder'>
                    {props.sendItemsData.map((items,index)=>{
                        return(
                            <li key={index}>
                                <i className={items.icon}></i>
                                <NavLink to={items.src} className={items.ClassName}>{items.name}</NavLink>
                            </li>
                        )
                    })}
                </ul>
                <button className='signBtn'>Sign Up</button>                
            </div>
            <div className="open-close" onClick={toggleOpenMenue}>
                <i className={`fa-solid ${openMenue?"fa-xmark":"fa-bars"}`}></i>
            </div>
        </nav>
    );
};

export default Navbar;