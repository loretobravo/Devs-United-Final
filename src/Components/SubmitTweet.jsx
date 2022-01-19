import React, { useEffect, useState,useContext } from "react";
import { firestore } from "../Firebase";
import {AppContext} from "../Context/AppContext";
import Tweets from "./Tweets";
import "./submittweet.css"

const SubmitTweet = () => {

  const {setTweets, user, setIsLoading}= useContext(AppContext);
    const [body, setBody] = useState({
    tweet: "",
    autor: "",
    id: "",
    mail: "",
    image: "",
  });


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


    const handleChange = (e) => {
     
    let newTweet = {
      tweet: e.target.value,
      email: user.email,
      autor: user.displayName,
      image: user.photoURL,
      likedBy: []
    };
    
    setBody(newTweet);
  };


  const createTweet = (e) => {
    e.preventDefault();
   
    firestore.collection("tweets")
    .add(body)
    .then(()=> console.log("created"))
    .catch (()=> console.log("something went wrong"))
  };
  return (
          <div>
            
        <form>
          <textarea
            defaultValue={body.tweet}
            onChange={handleChange}
            placeholder="What´s happening?"
            name="tweet" 
         />
            <button className="postbtn" onClick={createTweet}>POST</button>
            </form>
      
        <Tweets/>
    </div>
  );
};


export default SubmitTweet
