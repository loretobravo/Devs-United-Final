import React, { useEffect, useState,useContext } from "react";
import Tweets from "./Tweets"
import { firestore } from "../Firebase";
import {AppContext} from "../Context/AppContext";
import MyFavs from "./MyFavs";
import MyTweets from "./MyTweets";
import SubmitTweet from "./SubmitTweet";
import MyProfile from "../Pages/MyProfile";



const TweetsHelpers = () => {

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
            <SubmitTweet
            deleteTweet={deleteTweet}
            likeTweet={likeTweet}
            dislikeTweet={dislikeTweet}
            />
           

            <MyProfile
            deleteTweet={deleteTweet}
            likeTweet={likeTweet}
            dislikeTweet={dislikeTweet}

             />
            

            
            
        </div>
    )
}

export default TweetsHelpers
