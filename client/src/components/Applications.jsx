import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import "./Applications.css";
import { YbrDataContext } from "../contexts/YbrDataContext";
import GridToolbar from "../components/GridToolbar"
import Grid from "../components/Grid"


const Applications = props => {
  const [ybr, setYbr] = useContext(YbrDataContext);

  const onAddHandler = (props) => {
    alert("Will add a new application")
  }

  const onDeleteHandler = (props) => {
    alert("Will delete the selected application")
  }

  const { client, headings, applications } = ybr;
  return (
    <div className="app-body">
      <h2>{client}</h2>
      <GridToolbar heading="Applications:" count={applications.length} onAdd={onAddHandler} onDelete={onDeleteHandler}/>
      <Grid data={applications} headings={headings.applications}/>
    </div>
  );
};

export default Applications;
