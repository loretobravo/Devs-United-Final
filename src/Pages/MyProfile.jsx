import React, { useEffect, useState,useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyFavs from '../Components/MyFavs';
import MyTweets from '../Components/MyTweets';
import { auth,loginGoogle,logout} from '../Firebase';
import {AppContext} from "../Context/AppContext";

const MyProfile = () => {
    const {tweets,setTweets, user,setUser, deleteTweet, showLikes, likeTweet,dislikeTweet}= useContext(AppContext);

    
    return (
        <div>
            
            {/* <Link to="/">Back to Home</Link> */}
            {/* <button onClick={logout}>Log out</button> */}
            <MyTweets/>
            <MyFavs/>

        </div>
         
    )
}

export default MyProfile
