import React, { useEffect } from "react";
import Navbar from "./Navbar.js";
import './App.css';
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {  grey } from "@mui/material/colors";
 import Hero from "./HeroSection.js";
import { Card } from "@mui/material";
import { Grid2 } from "@mui/material"; 
import CustomCard from "./cardComp.js";
import Section from "./Section.js";

function App() {
  

  
  return (
    <div className="App"style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <BrowserRouter>
        <Navbar />
       <Hero/>
       {/* <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"5px",padding:"5px",backgroundColor:"black"}}> <CustomCard/>
       <CustomCard/></div> */}
       <Section heading="Top Albums" apiUrl="https://qtify-backend-labs.crio.do/albums/top" />
       <Section heading="New Albums" apiUrl="https://qtify-backend-labs.crio.do/albums/new" />

      
      </BrowserRouter>
    </div>
  );
}

export default App;
