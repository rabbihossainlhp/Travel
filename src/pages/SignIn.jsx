import React, { useState ,useEffect} from 'react';
import Navbar from '../components/Navbar';
import { menueData, socialLink } from '../components/NavItems';
import "./signin.css";
import fbImg from "../assets/images.png";
import gImg from "../assets/Google__G__logo.svg.png"
import Footer from '../components/Footer';





const SignIn = () => {

    const [click,setCllick]=useState(false);

    const changeAction=()=>{
        setCllick(!click);
    }


    const [dataCollect,setdataCollect] = useState({
        First_Name: "",
        Last_Name: "",
        Gmail:"",
        Age:"",
        Password:"",
        Confirm_Password:""
    });


    const [loginData,setLoginData] = useState({
        Email:"",
        Pass:"",
        Conf_Pass:""
    })


    //try to store data into dataCollection .....with onchange...
    const onchangeHandle = (property,val)=>{
        setdataCollect(previousInfo=>({
            ...previousInfo,
            [property]:val
        }))
    }


    const onchangeHandleLogin=(property,val)=>{
        setLoginData(prevState=>({
            ...prevState,
            [property]:val
        }))
    }


    const storeData=(e)=>{
        e.preventDefault();
        
        //Store and get this data from web as json formate...

        // console.log(dataCollect);
        // // alert(JSON.stringify(dataCollect));
        // console.log(loginData);

        //this all about only sign up page
        (async ()=>{
                
            let ExixtingData = await fetch("https://json-travel-4.onrender.com/user");
            let resData = await ExixtingData.json();
            let newId;
            if(resData.length>0){
                let validID = resData.map(user=>user.id).filter(id=> id !== null && id !== undefined);
                
                if(validID.length>0){
                    newId = Math.max(...validID)+1;
                }else{
                    newId = 1;
                }
            }else{
                newId = 1;
            }

            // console.log(newId);

            let newSequentialIdwithData = {
                id:newId,
                ...dataCollect
            }



            await fetch("https://json-travel-4.onrender.com/user",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(newSequentialIdwithData)
            })

            // console.log("Success",dataCollect);

            setdataCollect({
                First_Name: "",
                Last_Name: "",
                Gmail:"",
                Age:"",
                Password:"",
                Confirm_Password:""
        });

        })()

}


const storeForLogin=(e)=>{
    e.preventDefault();
    (async()=>{
        let fetchData = await fetch("https://json-travel-4.onrender.com/ExistUser");
        let response = await fetchData.json();

        let newID;
        if(response.length>0){
            let validData = response.map(ids=>ids.id).filter(id=> id !== null && id !==undefined);
            if(validData.length>0){
                newID = Math.max(...validData)+1;
            }else{
                newID = 1;
            }
        }else{
            newID = 1;
        }


        let sequentialLoginId = {
            id:newID,
            ...loginData
        }

        await fetch("https://json-travel-4.onrender.com/ExistUser",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
                },
            body:JSON.stringify(sequentialLoginId)
        });


        setLoginData({
            Email:"",
            Pass:"",
            Conf_Pass:""
        })
    })()    

    console.log(loginData);
}




    return (
        <div className='signInRoot'>
            <Navbar sendItemsData={menueData}/>
            <div className="boxDiv">
                <div className="signUp">
                
                    <div className="h1_login">
                        <h1>{click?"Login easily":"Sign up here"}</h1>
                        <button 
                        className='loginSide'
                        onClick={changeAction}
                        >{click?'SignUp':'Login'}
                        </button>
                    </div>

                    {click?
                    (<form className='SignIn' onSubmit={storeForLogin}>
                        <input onChange={(e)=>{onchangeHandleLogin("Email",e.target.value)}} value={loginData.Email} type='email' placeholder='Enter you Gmail' />
                        <input onChange={(e)=>{onchangeHandleLogin("Pass",e.target.value)}} value={loginData.Pass} type="password" placeholder='Enter Your Password'/>
                        <input onChange={(e)=>{onchangeHandleLogin("Conf_Pass",e.target.value)}} value={loginData.Conf_Pass} type="password" placeholder='Confirm Password'/>
                        <button type='submit'>Login</button>
                    </form>):    
                
                    (<form onSubmit={storeData}>
                        <input name='fname'     onChange={(e)=>{onchangeHandle("First_Name",e.target.value)}}   value={dataCollect.First_Name}        type="text" placeholder='Ente First name' />
                        <input name='lname'     onChange={(e)=>{onchangeHandle("Last_Name",e.target.value)}}   value={dataCollect.Last_Name}         type="text" placeholder='Enter Last Name' />
                        <input name='gmail'     onChange={(e)=>{onchangeHandle("Gmail",e.target.value)}}   value={dataCollect.Gmail}             type="email" placeholder='Your Gmail' />
                        <input name='number'    onChange={(e)=>{onchangeHandle("Age",e.target.value)}}   value={dataCollect.Age}               type="number"  placeholder='Age' />
                        <input name='password'  onChange={(e)=>{onchangeHandle("Password",e.target.value)}}   value={dataCollect.Password}          type="password" placeholder='Password' />
                        <input name='password2' onChange={(e)=>{onchangeHandle("Confirm_Password",e.target.value)}}   value={dataCollect.Confirm_Password}  type="password" placeholder='Again Password' />
                        <button type='submit'>Create New</button>
                    </form>)

                    }
                    
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