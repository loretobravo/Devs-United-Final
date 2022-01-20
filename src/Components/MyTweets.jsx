import React, {useContext} from "react";
import {AppContext} from "../Context/AppContext";
import NavBarProfile from "../Components/NavBarProfile";
import "./mytweets.css"

const MyTweets = () => {

    const {tweets,user,deleteTweet,showLikes}= useContext(AppContext);

   return (
    <div className="tweets">
       <NavBarProfile/>
        
         {tweets.map((tweet) => {
        {if (tweet.email === user.email){
      return (
             <div className="tweet"key={tweet.id}>       
        <div className="usertweet" >
        <span className="autor">{tweet.autor}</span>{user !== null && user.email === tweet.email &&
              <img className="trash"src="./svgs/trash.svg" onClick={() => deleteTweet(tweet.id)}/>} 
              <img className="autorpic" src={tweet.image} alt="" />
          <p>{tweet.tweet}</p>
          <span className="liked"> {showLikes(tweet)} {tweet.likedBy.length}</span>
        </div>
  
    </div>
      )}

    }}
         )}
  </div>
   )        
} 

export default MyTweets
