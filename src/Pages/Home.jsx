import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {firestore} from "../Firebase"

const Home = () => {

    useEffect(()=>{
        firestore
          .collection("tweets")
          .get()
          .then(snapshot =>{
            snapshot.forEach(doc=>{
              console.log(doc.data());
            })
          })
      })
    return (
        <div>
            <h1>
                Devs United
            </h1>
            
        </div>
    )
}

export default Home
