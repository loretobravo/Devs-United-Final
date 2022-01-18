import React, { useEffect, useState,useContext } from "react";
import { firestore } from "../Firebase";
import {AppContext} from "../Context/AppContext";
import Tweets from "./Tweets";
import "./submittweet.css"

const SubmitTweet = () => {

  const {utweets,setTweets, user,setUser, deleteTweet, showLikes, likeTweet,dislikeTweet}= useContext(AppContext);
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
        // console.log(tweets);
        setTweets(tweets);
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
    // console.log(newTweet)
    setBody(newTweet);
  };


  const createTweet = (e) => {
    e.preventDefault();
    // enviamos el tweet a la colección
    firestore.collection("tweets")
    .add(body)
    .then(()=> console.log("creado exitosamente"))
    .catch (()=> console.log("algo salio mal"))
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
