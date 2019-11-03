import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Home.css";

function Home() {
  return (
    <>
      <div className="Home-header">
        <h2>JBR Home</h2>
      </div>
      <div className="Home-body">
        <div className="Home-body__recent">
          <h3>Recent</h3>
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="Home-body__favourite">
          <h3>Favourites</h3>
        </div>
      </div>
    </>
  );
}

export default Home;
