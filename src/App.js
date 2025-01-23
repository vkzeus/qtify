import React from "react";
import Navbar from "./Navbar.js";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import {  grey } from "@mui/material/colors";
 import Hero from "./HeroSection.js";

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Navbar />
       <Hero/>
      </BrowserRouter>
    </div>
  );
}

export default App;
