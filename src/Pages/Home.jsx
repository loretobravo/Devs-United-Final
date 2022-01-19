import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import SubmitTweet from "../Components/SubmitTweet";
import {AppContext} from "../Context/AppContext";
import NavBar from "../Components/NavBar";


 export const Home = () => {
  const {user}= useContext(AppContext);


  if (!user) return <Navigate to ="/"/>
return (
<div>
  <NavBar/>
<SubmitTweet/> 

  </div>
)};
