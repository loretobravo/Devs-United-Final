import React, { useEffect, useState,useContext } from "react";
import { firestore } from "../Firebase";
import {AppContext} from "../Context/AppContext";
import Tweets from "./Tweets";
import SubmitTweet from "./SubmitTweet";
import { Navigate, Link } from "react-router-dom";
import { auth,loginGoogle,logout} from '../Firebase';
import NavBarProfile from "../Components/NavBarProfile";
import "./mytweets.css"

const MyTweets = () => {

    const {tweets,setTweets, user,setUser}= useContext(AppContext);

  const deleteTweet = (id) => {
    // borramos el tweet en firebase
    // console.log(id)
     firestore.doc(`tweets/${id}`)
     .delete()
     .then(()=> console.log("borrado exitosamente"))
     .catch (()=> console.log("algo salio mal"))
   };


   const likeTweet = (tweet) =>{
    let newLikedBy = [...tweet.likedBy, user.email];

     firestore.doc(`tweets/${tweet.id}`)
     .update({ likedBy: newLikedBy })
     .then(()=> console.log("exito"))
     .catch (()=> console.log("algo salio mal"))
   };


   const dislikeTweet = (tweet) =>{
    let newLikedBy = tweet.likedBy.filter((like)=> like !== user.email)

     firestore.doc(`tweets/${tweet.id}`)
     .update({ likedBy: newLikedBy })
     .then(()=> console.log("exito"))
     .catch (()=> console.log("algo salio mal"))
   };


   const showLikes = (tweet)=>{
     if (tweet.likedBy && user.email){
       const isLiked = tweet.likedBy.findIndex((liked)=> user.email === liked);
       if (isLiked < 0){
         return (
           <>
            <img className="like"src="./svgs/whiteheart.svg" onClick={() => likeTweet(tweet)}/>
            </>
         )
       }
       else {
         return (
           <>
           <img className="dislike"src="./svgs/redheart.svg" onClick={() => dislikeTweet(tweet)}/>
           </>
         )
       }

     }

   }
   return (
    <div className="tweets">
       <NavBarProfile/>
        
         {tweets.map((tweet) => {
        {if (tweet.email === user.email){
      return (
             <div className="tweet">       
        <div className="usertweet" key={tweet.id}>
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
