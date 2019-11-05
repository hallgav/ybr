import React, { useState, useEffect } from "react";

import YbrCard from "./YbrCard";

import "./Home.css";
import SideMenu from "./SideMenu";

const initialState = () => [
  {
    id: 1000,
    header: "MLC Insurence",
    title: "YBR for DevOps team",
    text: "YBR to migrate data centre to AWS cloud",
    path: "/ybr/1000/server"
  },
  {
    id: 2000,
    header: "MLC Insurence",
    title: "YBR for DevOps team",
    text: "YBR to migrate data centre to AWS cloud",
    path: "/ybr/2000/server"
  },
  {
    id: 3000,
    header: "MLC Insurence",
    title: "YBR for DevOps team",
    text: "YBR to migrate data centre to AWS cloud",
    path: "/ybr/3000/server"
  },
  {
    id: 4000,
    header: "MLC Insurence",
    title: "YBR for DevOps team",
    text: "YBR to migrate data centre to AWS cloud",
    path: "/ybr/4000/server"
  },
  {
    id: 5000,
    header: "MLC Insurence",
    title: "YBR for DevOps team",
    text: "YBR to migrate data centre to AWS cloud",
    path: "/ybr/5000/server"
  }
];
function Home() {
  const [cards, setCards] = useState(initialState);

  return (
    <div className="home">
      <div>
        <SideMenu />
      </div>
      <div>
        <div className="home-header">
          <h2>JBR Home</h2>
        </div>
        <h3>Recent</h3>
        <div className="home-body__recent">
          {cards.map(c => (
            <YbrCard card={c} />
          ))}
        </div>

        <h3>Favourites</h3>
        <div className="home-body__favourite"></div>
      </div>
    </div>
  );
}

export default Home;
