import React from 'react';
import Navbar from '../components/Navbar';
import { menueData } from '../components/NavItems';
import "./signin.css";

const SignIn = () => {
    return (
        <div className='signInRoot'>
            <Navbar sendItemsData={menueData}/>
            <div className="boxDiv">
                <div className="signUp">
                    <h1>Sign Up Here</h1>
                    <form>
                        <input type="text" placeholder='Ente First name' />
                        <input type="text" placeholder='Enter Last Name' />
                        <input type="gmail" placeholder='Your Gmail' />
                        <input type="number"  placeholder='Age' />
                        <input type="password" placeholder='Password' />
                        <input type="password" placeholder='Again Password' />
                        <button type='submit'>Create New</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;