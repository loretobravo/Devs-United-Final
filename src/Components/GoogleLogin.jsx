import React, {useContext, useEffect} from "react";
import { Navigate, Link } from "react-router-dom";
import { auth,loginGoogle,logout} from '../Firebase';
import {AppContext} from "../Context/AppContext";
import "./googleLogin.css"


const GoogleLogin = () => {
    const {user,setUser}= useContext(AppContext);
    
   useEffect(() => {
  
       auth.onAuthStateChanged((user)=>{
           setUser(user);
               });
               
            },[]);
    return (
        <div>
            {user ? (
        
          <div>
            <img src={user.photoURL} alt="" />
            <p>¡Hola {user.displayName}!</p>
            {/* <button onClick={logout}>Log out</button> */}
          </div>
        
      ) : (
        <div className="loginGoogle">
          <img src="./svgs/logo.svg" alt="logo" className="logo" />
          <div className="loginGoogle2">
          <h1 className="title"> WELCOME!</h1>
          <p className="title2">Begin your journey to the Front End Developer World</p>
        
        <img className="loginbutton"src="./svgs/google.png" onClick={loginGoogle}/>
        <p className="copyright">© 2021 Devs_United - <em>BETA</em></p>
     
        </div>
       
        </div>
      )}
        </div>
        
    );
};
export default GoogleLogin;

