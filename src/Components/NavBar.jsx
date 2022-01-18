import React, { useEffect, useState,useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import Tweets from "../Components/Tweets"
import SubmitTweet from "../Components/SubmitTweet";
import { auth,loginGoogle,logout} from '../Firebase';
import {AppContext} from "../Context/AppContext";
import GoogleLogin from "../Components/GoogleLogin";
import "./navbar.css"

const NavBar = () => {

    const {tweets,setTweets, user,setUser, deleteTweet, showLikes, likeTweet,dislikeTweet}= useContext(AppContext);

    return (
        <nav>
            <Link to="/MyProfile"><img className="user_picture" src={user.photoURL} alt="" /></Link>
            <img className="logonav"src="./svgs/logo small.svg"/>
            <img className=""src="./svgs/title.svg"/>
            <button className="logoutbtn" onClick={logout}>Log out</button>
            
            
        </nav>
    )
}

export default NavBar
