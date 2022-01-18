import React, {useState,useEffect, useContext} from "react";
import { Navigate} from "react-router-dom";
import GoogleLogin from "../Components/GoogleLogin";
import {AppContext} from "../Context/AppContext";


const Login = () => {
    const {user}= useContext(AppContext);

    if (user) return <Navigate to ="/Home"/>
    return (
        <div>
          <GoogleLogin/>  
          </div>     
        
      );
}

export default Login
