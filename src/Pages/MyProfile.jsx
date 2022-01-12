import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyFavs from '../Components/MyFavs';
import MyTweets from '../Components/MyTweets';

const MyProfile = ({deleteTweet,likeTweet, dislikeTweet}) => {
    return (
        <div>
            
            <Link to="/">Back to Home</Link>
            <MyTweets
             deleteTweet={deleteTweet}
             likeTweet={likeTweet}
             dislikeTweet={dislikeTweet}
            
            />
            <MyFavs
             deleteTweet={deleteTweet}
             likeTweet={likeTweet}
             dislikeTweet={dislikeTweet}
            
            />

        </div>
         
    )
}

export default MyProfile
