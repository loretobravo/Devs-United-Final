import React, {useState,useEffect, useContext} from "react";
import { Navigate, Link } from "react-router-dom";
import GoogleLogin from "../Components/GoogleLogin";
import {AppContext} from "../Context/AppContext";


const Login = () => {
    const {tweets,setTweets, user,setUser, deleteTweet, showLikes, likeTweet,dislikeTweet}= useContext(AppContext);

    if (user) return <Navigate to ="/Home"/>
    return (
        <div>
          <GoogleLogin/>
          
          </div>
          
        
      );
}

export default Login
