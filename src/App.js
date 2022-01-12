import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {firestore} from "./Firebase"
import "./index.css";
import './App.css';
import Main  from "./Pages/Main";
import Login from "./Pages/Login";
import {Home} from "./Pages/Home";
import MyProfile from "./Pages/MyProfile";
import TweetsHelpers from "../src/Components/TweetsHelpers"


function App() {

  return (
    <div>
      <Main/>
  
      </div>
    
  );
}

export default App;
