import React from 'react';
import "./footer.css"
import { NavLink } from 'react-router-dom';

const Footer = (props) => {
    return (
        <div className='root'>
            <div className="rightReserveSection">
                <h1>.Tour@im.</h1>
                <p>
                ©2024 .Tur@im. All rights reserved. .Tur@im is a registered trademark of [Your Company Name]. This website and its contents, including text, images, and graphics, are protected by copyright and trademark laws. Unauthorized use or reproduction of any materials on this site is prohibited. By accessing and using this site, you agree to comply with our  <a href="#">Privacy Policy</a> and  <a href="#">Terms and Conditions</a>. For any questions or concerns, please contact us at <a href="#">contact@yourdomain.com.</a> 
                </p>
            </div>
            <div className="GeneralSection">
                {
                    props.setMenue.map((item)=>{
                        return(
                            <NavLink to={item.src}>{item.name}</NavLink>
                        )
                    })
                }
            </div>
            <div className="SocialSection">
                {
                    props.setSocial.map((item)=>{
                        return(
                            <a href={item.url}><i className={item.ClassName}></i>{item.name}</a>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Footer;