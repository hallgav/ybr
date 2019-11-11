import React, { useState, useContext, useEffect } from "react";

import YbrCards from "../components/YbrCards";
import {CompanyDataProvider, CompanyDataContext} from "../contexts/CompanyDataContext"

import "./Home.css";


function Home() {



  return (
    <CompanyDataProvider>
        
        <div className="home">

        <div>
          <div className="home-header">
            <h2>JBR Home</h2>
          </div>
          <h3>Recent</h3>
          <div className="home-body__recent">
            <YbrCards></YbrCards>
          </div>

          <h3>Favourites</h3>
          <div className="home-body__favourite"></div>
        </div>
      </div>    
    </CompanyDataProvider>

  );
}

export default Home;
