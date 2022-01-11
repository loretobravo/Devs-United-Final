import React, { useEffect, useState,useContext } from "react";
import Tweet from "./Tweet"
import { firestore } from "../Firebase";
import {AppContext} from "../Context/AppContext";

const Tweets = () => {

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
            <button onClick={() => likeTweet(tweet)}>Like</button>
            </>
         )
       }
       else {
         return (
           <>
 <button onClick={() => dislikeTweet(tweet)}>disLike</button>
           </>
         )
       }

     }

   }
 
    return (
        <div>
            {tweets.map((tweet) => {
          return (
                 <div>
                   
            <div key={tweet.id}>
              <h2>{tweet.tweet}</h2>
              <h4>{tweet.email}</h4>
              <h4>by: {tweet.autor}</h4>
              <h4>{tweet.likedBy.length}</h4>
           
            </div>
        <button onClick={() => deleteTweet(tweet.id)}>Delete</button>
{showLikes(tweet)}
        </div>
          )
            })}
            </div>
    )};
          

export default Tweets;
