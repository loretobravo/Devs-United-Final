import React, { useEffect, useState,useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import Tweets from "../Components/Tweets"
import SubmitTweet from "../Components/SubmitTweet";
import { auth,loginGoogle,logout} from '../Firebase';
import {AppContext} from "../Context/AppContext";
import GoogleLogin from "../Components/GoogleLogin";

 export const Home = () => {
  const {tweets,setTweets, user,setUser, deleteTweet, showLikes, likeTweet,dislikeTweet}= useContext(AppContext);


  if (!user) return <Navigate to ="/"/>
return (
<div>
  
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/MyProfile">MyProfile</Link>
          </li>
         
        </ul>
      </nav>
      <GoogleLogin/>
      <button onClick={logout}>Log out</button>
      
<SubmitTweet/> 



  </div>
)};
