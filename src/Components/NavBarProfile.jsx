import React, { useEffect, useState,useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import Tweets from "../Components/Tweets"
import SubmitTweet from "../Components/SubmitTweet";
import { auth,loginGoogle,logout} from '../Firebase';
import {AppContext} from "../Context/AppContext";
import GoogleLogin from "../Components/GoogleLogin";
import "./navbarprofile.css"

const NavBarProfile = () => {

    const {tweets,setTweets, user,setUser, deleteTweet, showLikes, likeTweet,dislikeTweet}= useContext(AppContext);

    return (
        <header>
        <nav className="navprofile">
            <Link to="/Home"><img className="back" src="./svgs/back.svg" alt="back" /></Link><span className="user">{user.displayName}</span>
            <Link to="/"><img className="logout" src="./svgs/logout.svg" alt="logout" onClick={logout} /></Link>
            
        </nav>
        <div className="bigprofile">
            <img className="userpicture" src={user.photoURL} alt="" />
            <div className="autorname">{user.displayName}</div>
            </div>
            <div className="postfavs">
            <Link to="/MyTweets"><div className="posts">post</div></Link>
                <Link to="/MyFavs"><div className="favs">favorites</div></Link>
            </div>
            
        </header>
    )
}

export default NavBarProfile
