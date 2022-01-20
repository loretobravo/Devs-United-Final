import React, {  useState,useContext } from "react";
import { firestore } from "../Firebase";
import {AppContext} from "../Context/AppContext";
import Tweets from "./Tweets";
import "./submittweet.css"

const SubmitTweet = () => {

  const { user}= useContext(AppContext);

    const [body, setBody] = useState({
    tweet: "",
    autor: "",
    id: "",
    mail: "",
    image: "",
  });


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
    setBody({...body,
      tweet: ""})
  };
  return (
          <div>
            
        <form>
          <textarea
            value={body.tweet}
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
