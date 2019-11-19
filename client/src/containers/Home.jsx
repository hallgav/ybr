import React from "react";

import YbrCards from "../components/YbrCards";
import { CompanyDataProvider } from "../contexts/CompanyDataContext";

import "./Home.css";
import SideMenu from "./SideMenu";
import PageNav from "../components/PageNav";

function Home() {
  return (
    <CompanyDataProvider>
      <PageNav heading="YBR Home" showLogIn>
        <div id="home__root">
          <SideMenu />
          <Ybrs />
        </div>
      </PageNav>
    </CompanyDataProvider>
  );
}

export default Home;

const Ybrs = props => {
  return (
    <div className="home-body">
      <h3>Recent</h3>
      <div className="home-body__cards">
        <YbrCards></YbrCards>
      </div>

      <h3>Favourites</h3>
      <div className="home-body__cards"></div>
    </div>
  );
};
