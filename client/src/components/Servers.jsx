import React, { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import "./Servers.css";
import { YbrDataContext } from "../contexts/YbrDataContext";
import GridToolbar from "../components/GridToolbar";
import Grid from "../components/Grid";
import Server from "./Server";

const onDeleteHandler = () => {
  alert("Will delete the selected server");
};

const Servers = props => {
  const setDefaultValue = () => {
    return { name: "Gavin Hall" };
  };

  const [ybr, setYbr] = useContext(YbrDataContext);
  const { client, headings, servers } = ybr;
  const [modalShow, setModalShow] = React.useState(false);
  const [server, setServer] = useState(setDefaultValue());

  const onAddHandler = () => {
    setServer(setDefaultValue());
    setModalShow(true);
  };

  const onChangeHandler = e => {
    //e.preventDefault();
    const new_server = { ...server };
    switch (e.target.name) {
      case "server-name":
        new_server.name = e.target.value;
        setServer(new_server);
        break;

      default:
        break;
    }
  };

  const onSaveHandler = () => {
    const newYbr = { ...ybr };
    let server_arr = Object.values(server)
    newYbr.servers = [...newYbr.servers, server_arr];
    setYbr(newYbr);
    setModalShow(false);
  };

  return (
    <div className="server-body">
      <h2>{client}</h2>
      <GridToolbar
        heading="Servers:"
        count={servers.length}
        onAdd={onAddHandler}
        onDelete={onDeleteHandler}
      />
      <Grid data={servers} headings={headings.servers} />
      <Server
        show={modalShow}
        value={server}
        onChange={onChangeHandler}
        onCancel={() => setModalShow(false)}
        onSave={onSaveHandler}
      />
    </div>
  );
};

export default Servers;
