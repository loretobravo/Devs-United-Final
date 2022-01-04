import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../Firebase";

const Home = () => {
  const [tweets, setTweets] = useState([]);

  const getTweets = () => {
    firestore
      .collection("tweets")
      .get()
      .then((snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          return {
            message: doc.data().message,
            user: doc.data().user,
            id: doc.id
          };
        });
        setTweets(tweets);
      });
  };
  useEffect(() => {
    getTweets();
  }, []);

  return (
    <div>
      Devs United
      {tweets.map((tweet,id) => {
        return (
          <div key={tweet.id}>
            <p>{tweet.user}</p>
            <p>{tweet.message}</p>
            <hr/>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
