import React from "react";

import YbrCards from "../components/YbrCards";
import { CompanyDataProvider } from "../contexts/CompanyDataContext";

import "./Home.css";
import SideMenu from "./SideMenu";
import PageNav from "../components/PageNav";

function Home() {
  return (
    <CompanyDataProvider>
      <div className="home">
        <SideMenu />
        <PageNav heading="YBR Home" showLogIn>
          <Ybrs />
        </PageNav>

      </div>
    </CompanyDataProvider>
  );
}

export default Home;

const Ybrs = props => {
  return (
    <div>
      <h3>Recent</h3>
      <div className="home-body__recent">
        <YbrCards></YbrCards>
      </div>

      <h3>Favourites</h3>
      <div className="home-body__favourite"></div>
    </div>
  );
};
