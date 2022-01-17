import React, { useEffect, useState,useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import Tweets from "../Components/Tweets"
import SubmitTweet from "../Components/SubmitTweet";
import { auth,loginGoogle,logout} from '../Firebase';
import {AppContext} from "../Context/AppContext";
import GoogleLogin from "../Components/GoogleLogin";

const NavBar = () => {

    const {tweets,setTweets, user,setUser, deleteTweet, showLikes, likeTweet,dislikeTweet}= useContext(AppContext);

    return (
        <div>
            <img src={user.photoURL} alt=""/>
            <Link to="/MyProfile">MyProfile</Link>
            <button onClick={logout}>Log out</button>
            
        </div>
    )
}

export default NavBar
