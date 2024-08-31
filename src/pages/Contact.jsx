import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import "./contact.css";
import { menueData, socialLink } from '../components/NavItems';
import Footer from '../components/Footer';
const Contact = () => {
    const [save,saveChange]=useState({Name:"",Email:"",D_Msg:""})

    const changeSave=(prop,val)=>{
        saveChange(prevVal=>({
            ...prevVal,
            [prop]:val
        }))
    }

    const viewDetails=(e)=>{
        e.preventDefault();
        alert(JSON.stringify(save));
        
    }



    return (
        <div>
            <Navbar sendItemsData={menueData}/>
            <div className="manage">
                <div className="title"><h1>Let's Connect With Us.</h1></div>
                <div className="Mainsection">
                    <div className="section1">
                        <h2>.Tur@im.</h2>
                        <p>
                            1234 Wanderlust Avenue
                            Suite 567
                            <br />
                            Travel City, TC 89012
                            <br />
                            Country: Adventureland
                            <br />
                            Phone: +1 (555) 123-4567
                            <br />
                            Email: contact@tur@im.com
                        </p>
                    </div>

                    <div className="section2">
                        <form onSubmit={viewDetails}>
                            <input onChange={(e)=>{changeSave("Name",e.target.value)}} value={save.Name} type="text" placeholder='Your Full Name' />
                            <input onChange={(e)=>{changeSave("Email",e.target.value)}} value={save.Email} type="email" placeholder='Your Email'/>
                            <textarea onChange={(e)=>{changeSave("D_Msg",e.target.value)}} onBlur={save.D_Msg} name="textDetails" id="details_Msg" placeholder='Write Your Message Here...'></textarea>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>                    
                </div>

            </div>
            
            <div className="footerHolder">
                <Footer setMenue = {menueData} setSocial ={socialLink}/>
            </div>

        </div>
    );
};

export default Contact;