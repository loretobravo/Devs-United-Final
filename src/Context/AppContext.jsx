import React, { createContext, useState } from "react";


export const AppContext = createContext();

export const AppProvider = (props) => {

 

  const [ user, setUser] = useState(null);
  const [tweets, setTweets] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

//   const deleteTweet = (id) => {
//      firestore.doc(`tweets/${id}`)
//      .delete()
//      .then(()=> console.log("borrado exitosamente"))
//      .catch (()=> console.log("algo salio mal"))
//    };

//    const likeTweet = (tweet) =>{
//     let newLikedBy = [...tweet.likedBy, user.email];
//      firestore.doc(`tweets/${tweet.id}`)
//      .update({ likedBy: newLikedBy })
//      .then(()=> console.log("exito"))
//      .catch (()=> console.log("algo salio mal"))
//    };

//    const dislikeTweet = (tweet) =>{
//     let newLikedBy = tweet.likedBy.filter((like)=> like !== user.email)
//      firestore.doc(`tweets/${tweet.id}`)
//      .update({ likedBy: newLikedBy })
//      .then(()=> console.log("exito"))
//      .catch (()=> console.log("algo salio mal"))
//    };

//    const showLikes = (tweet)=>{
//      if (tweet.likedBy && user.email){
//        const isLiked = tweet.likedBy.findIndex((liked)=> user.email === liked);
//        if (isLiked < 0){
//          return (
//            <>
//             <button onClick={() => likeTweet(tweet)}>Like</button>
//             </>
//          )
//        }
//        else {
//          return (
//            <>
//  <button onClick={() => dislikeTweet(tweet)}>disLike</button>
//            </>
//          )
//        }

//      }

//    }
 

  
  return (
    <AppContext.Provider value={{ 
      user, 
      setUser,
       tweets, 
       setTweets,
       isLoading,
       setIsLoading,}}>
      {props.children}
    </AppContext.Provider>
  );
};