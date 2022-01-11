import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyFavs from '../Components/MyFavs';
import MyTweets from '../Components/MyTweets';

const MyProfile = () => {
    return (
        <div>
            
            <Link to="/">Back to Home</Link>
            <MyTweets/>
            <MyFavs/>

        </div>
         
    )
}

export default MyProfile
