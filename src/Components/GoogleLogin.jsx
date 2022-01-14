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
        <button className="loginbutton" onClick={loginGoogle}>
          Sign in with google
        </button>
        </div>
      )}
        </div>
    );
};
export default GoogleLogin;