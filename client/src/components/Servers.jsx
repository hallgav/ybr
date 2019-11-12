import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import "./Servers.css";
import { YbrDataContext } from "../contexts/YbrDataContext";
import GridToolbar from "../components/GridToolbar"
import Grid from "../components/Grid"

const Servers = props => {
  const [ybr, setYbr] = useContext(YbrDataContext);
  const { client, headings, servers } = ybr;

  const onAddHandler = (e) => {
    //Open a model window and link to a callback on save

    
  }

  const onSaveHandler = e => {
    const new_server =       {
      name: "",
      noOfVMs: 0,
      vCPU: 0,
      peakCpuUtilization: 0,
      vRAM: 0,
      peakRamUtilization: 0,
      provisionedStorage: 0,
      usableStorage: 0,
      guestOS: ""
    }
    
    const newYbr = {...ybr}
    newYbr.servers = [...newYbr.servers, new_server]
    setYbr(newYbr)
  }

  const onDeleteHandler = () => {
    alert("Will delete the selected server")
  }

  return (
    <div className="server-body">
      <h2>{client}</h2>
      <GridToolbar heading="Servers:" count={servers.length} onAdd={onAddHandler} onDelete={onDeleteHandler}/>
      <Grid data={servers} headings={headings.servers}/>
    </div>
  );
};

export default Servers;
