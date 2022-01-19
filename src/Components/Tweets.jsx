import React, {useContext } from "react";
import { firestore } from "../Firebase";
import {AppContext} from "../Context/AppContext";
import { confirmAlert } from 'react-confirm-alert';
import './react-confirm-alert.css'; 
import "./tweets.css"
import Loading from "./Loading";


const Tweets = () => {

  const {tweets,user, isLoading, setIsLoading}= useContext(AppContext);

    const deleteTweet = (id) => {
     
      confirmAlert({
        title: 'Confirm Delete',
        message: 'Are you sure you want to delete this post?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              firestore.doc(`tweets/${id}`)
              .delete()
              .then(()=> console.log("deleted"))
              .catch (()=> console.log("something went wrong"))
            }
          },
          {
            label: 'No'
          }
        ]
      });

    };

   const likeTweet = (tweet) =>{
    let newLikedBy = [...tweet.likedBy, user.email];

     firestore.doc(`tweets/${tweet.id}`)
     .update({ likedBy: newLikedBy })
     .then(()=> console.log("success"))
     .catch (()=> console.log("something went wrong"))
   };


   const dislikeTweet = (tweet) =>{
    let newLikedBy = tweet.likedBy.filter((like)=> like !== user.email)

     firestore.doc(`tweets/${tweet.id}`)
     .update({ likedBy: newLikedBy })
     .then(()=> console.log("success"))
     .catch (()=> console.log("something went wrong"))
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
   if (isLoading) return <Loading/>
    return (
        <div className="tweets">

       
          
            {tweets.map((tweet) => {
          return (
                 <div className="tweet">     
            <div className= "usertweet"key={tweet.id}>
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


