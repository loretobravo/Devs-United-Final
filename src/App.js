import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {firestore} from "./Firebase"
import "./index.css";
import './App.css';
import Home from "./Pages/Home";


function App() {

  return (
    
      <Home/>
    
  );
}

export default App;
