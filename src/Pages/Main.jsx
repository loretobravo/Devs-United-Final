import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import MyProfile from "./MyProfile";
import {Home} from "./Home";
import MyFavs from "../Components/MyFavs"
import MyTweets from "../Components/MyTweets"

const Main = () => {
  return (
    
      <Routes>
          <Route exact path="/" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/MyFavs" element={<MyFavs />} />
        <Route path="/MyTweets" element={<MyTweets />} />
       
        
      </Routes>
    
  );
}
export default Main;
