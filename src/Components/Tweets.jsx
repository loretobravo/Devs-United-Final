import React, {useContext } from "react";
import {AppContext} from "../Context/AppContext";
import "./tweets.css"
import Loading from "./Loading";


const Tweets = () => {

  const {tweets,user, isLoading, deleteTweet,showLikes}= useContext(AppContext);

   if (isLoading) return <Loading/>
    return (
        <div className="tweets">

       
          
            {tweets.map((tweet) => {
          return (
                 <div className="tweet" key={tweet.id}>     
            <div className= "usertweet">
            <span className="autor">{tweet.autor}</span>{user !== null && user.email === tweet.email &&
              <img className="trash"src="./svgs/trash.svg" onClick={() => deleteTweet(tweet.id)}/>} 
            <img className="autorpic" src={tweet.image} alt="" />
              <p>{tweet.tweet}</p>
              <span className="liked"> {showLikes(tweet)} {tweet.likedBy.length}</span>
            </div>
        </div>
          )
            })}
            </div>
            
    )
   
  };
          

export default Tweets;


