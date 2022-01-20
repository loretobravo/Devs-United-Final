import React, { useEffect, useState,createContext} from "react";
import { firestore } from "../Firebase";
import { confirmAlert } from 'react-confirm-alert';
import './react-confirm-alert.css'; 


export const AppContext = createContext();

export const AppProvider = (props) => {

 

  const [ user, setUser] = useState(null);
  const [tweets, setTweets] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const desuscribir = firestore
      .collection("tweets")
      .onSnapshot((snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          return {
            tweet: doc.data().tweet,
            autor: doc.data().autor,
            id: doc.id,
            email: doc.data().email,      
            likedBy: doc.data().likedBy,
            image: doc.data().image
          };
        });
        
        setTweets(tweets);
        setIsLoading(false);
       
      });
    return () => desuscribir();
  }, []);


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

 
 

  
  return (
    <AppContext.Provider value={{ 
      user, 
      setUser,
       tweets, 
       setTweets,
       isLoading,
       setIsLoading,
       deleteTweet,
       likeTweet,
       dislikeTweet,
       showLikes,}}>
      {props.children}
    </AppContext.Provider>
  );
};