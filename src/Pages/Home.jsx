import React, { useEffect, useState,useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import Tweets from "../Components/Tweets"
import SubmitTweet from "../Components/SubmitTweet";
import { auth,loginGoogle,logout} from '../Firebase';
import {AppContext} from "../Context/AppContext";
import GoogleLogin from "../Components/GoogleLogin";
import NavBar from "../Components/NavBar";

 export const Home = () => {
  const {tweets,setTweets, user,setUser, deleteTweet, showLikes, likeTweet,dislikeTweet}= useContext(AppContext);


  if (!user) return <Navigate to ="/"/>
return (
<div>
  <NavBar/>
  {/* <GoogleLogin/>    */}
<SubmitTweet/> 
  </div>
)};
