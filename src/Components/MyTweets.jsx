import React, {useContext,useEffect } from "react";
import { firestore } from "../Firebase";
import {AppContext} from "../Context/AppContext";
import NavBarProfile from "../Components/NavBarProfile";
import "./mytweets.css"

const MyTweets = () => {

    const {tweets,user, isLoading, deleteTweet,showLikes, likeTweet, dislikeTweet}= useContext(AppContext);




  //   useEffect(() => {
  //     const desuscribir = firestore
  //       .collection("tweets")
  //       .onSnapshot((snapshot) => {
  //         const tweets = snapshot.docs.map((doc) => {
  //           return {
  //             tweet: doc.data().tweet,
  //             autor: doc.data().autor,
  //             id: doc.id,
  //             email: doc.data().email,      
  //             likedBy: doc.data().likedBy,
  //             image: doc.data().image
  //           };
  //         });
          
  //         setTweets(tweets);
  //         setIsLoading(false);
         
  //       });
  //     return () => desuscribir();
  //   }, []);

  // const deleteTweet = (id) => {
  //    firestore.doc(`tweets/${id}`)
  //    .delete()
  //    .then(()=> console.log("deleted"))
  //    .catch (()=> console.log("something went wrong"))
  //  };


  //  const likeTweet = (tweet) =>{
  //   let newLikedBy = [...tweet.likedBy, user.email];

  //    firestore.doc(`tweets/${tweet.id}`)
  //    .update({ likedBy: newLikedBy })
  //    .then(()=> console.log("success"))
  //    .catch (()=> console.log("something went wrong"))
  //  };


  //  const dislikeTweet = (tweet) =>{
  //   let newLikedBy = tweet.likedBy.filter((like)=> like !== user.email)

  //    firestore.doc(`tweets/${tweet.id}`)
  //    .update({ likedBy: newLikedBy })
  //    .then(()=> console.log("success"))
  //    .catch (()=> console.log("something went wrong"))
  //  };


  //  const showLikes = (tweet)=>{
  //    if (tweet.likedBy && user.email){
  //      const isLiked = tweet.likedBy.findIndex((liked)=> user.email === liked);
  //      if (isLiked < 0){
  //        return (
  //          <>
  //           <img className="like"src="./svgs/whiteheart.svg" onClick={() => likeTweet(tweet)}/>
  //           </>
  //        )
  //      }
  //      else {
  //        return (
  //          <>
  //          <img className="dislike"src="./svgs/redheart.svg" onClick={() => dislikeTweet(tweet)}/>
  //          </>
  //        )
  //      }

  //    }

  //  }
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
