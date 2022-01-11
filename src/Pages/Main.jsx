import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import MyProfile from "./MyProfile";
import {Home} from "./Home";
import App from "../App";

const Main = () => {
  return (
    
      <Routes>
          <Route exact path="/" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/MyProfile" element={<MyProfile />} />
       
        
      </Routes>
    
  );
}
export default Main;
