import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { menueData, socialLink } from '../components/NavItems';
import "./signin.css";
import fbImg from "../assets/images.png";
import gImg from "../assets/Google__G__logo.svg.png"
import Footer from '../components/Footer';





const SignIn = () => {

    const [dataCollect,setdataCollect] = useState({
        First_Name: "",
        Last_Name: "",
        Gmail:"",
        Age:"",
        Password:"",
        Confirm_Password:""
    });


    //try to store data into dataCollection .....with onchange...
    const onchangeHandle = (property,val)=>{
        setdataCollect(previousInfo=>({
            ...previousInfo,
            [property]:val
        }))
    }

    const storeData=(e)=>{
        e.preventDefault();
        
        //Store and get this data from web as json formate...
    

        try {

            console.log(dataCollect);
            // alert(JSON.stringify(dataCollect));

            
            setdataCollect({
                First_Name: "",
                Last_Name: "",
                Gmail:"",
                Age:"",
                Password:"",
                Confirm_Password:""
            });

            
        } catch ( derror) {
            console.log("Error occur to store data into local storage",derror);
        }

        
}



    return (
        <div className='signInRoot'>
            <Navbar sendItemsData={menueData}/>
            <div className="boxDiv">
                <div className="signUp">
                
                    <h1>Sign Up Here</h1>
                
                    <form onSubmit={storeData}>
                        <input name='fname'     onChange={(e)=>{onchangeHandle("First_Name",e.target.value)}}   value={dataCollect.First_Name}        type="text" placeholder='Ente First name' />
                        <input name='lname'     onChange={(e)=>{onchangeHandle("Last_Name",e.target.value)}}   value={dataCollect.Last_Name}         type="text" placeholder='Enter Last Name' />
                        <input name='gmail'     onChange={(e)=>{onchangeHandle("Gmail",e.target.value)}}   value={dataCollect.Gmail}             type="gmail" placeholder='Your Gmail' />
                        <input name='number'    onChange={(e)=>{onchangeHandle("Age",e.target.value)}}   value={dataCollect.Age}               type="number"  placeholder='Age' />
                        <input name='password'  onChange={(e)=>{onchangeHandle("Password",e.target.value)}}   value={dataCollect.Password}          type="password" placeholder='Password' />
                        <input name='password2' onChange={(e)=>{onchangeHandle("Confirm_Password",e.target.value)}}   value={dataCollect.Confirm_Password}  type="password" placeholder='Again Password' />
                        <button type='submit'>Create New</button>
                    </form>
                    
                    <p>Or</p>
                    
                    <div className="ConnectGGL">
                        <h3>Connect with</h3>
                        <div className="optionGGL">
                            <div className="GGL">
                                <img src={gImg} alt="" />
                                Google
                                </div>
                            <div className="FB">
                                <img src={fbImg} alt="" />
                                Facebook
                                </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="signInFooter">
                <Footer setMenue={menueData} setSocial={socialLink}/>
            </div>
            
        </div>
    );
};

export default SignIn;