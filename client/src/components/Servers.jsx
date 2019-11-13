import React, { useContext, useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./Servers.css";
import { YbrDataContext } from "../contexts/YbrDataContext";
import GridToolbar from "../components/GridToolbar";
import Grid from "../components/Grid";
import Server from "./Server";

const fields = {
  serverName: { name: "server-name", id: "server_name", defaultValue: "" },
  noVms: { name: "no_vms", id: "no_vms", defaultValue: 0 },
  vCpu: { name: "v-cpu", id: "v_cpu", defaultValue: 0 },
  peakCpu: { name: "peak-cpu", id: "peak_cpu", defaultValue: 0 },
  vRam: { name: "v-ram", id: "v_ram", defaultValue: 0 },
  peakRam: { name: "peak-ram", id: "prak_ram", defaultValue: 0 },
  provStore: { name: "prov-store", id: "prov_store", defaultValue: 0 },
  useStore: { name: "use-store", id: "use_store", defaultValue: 0 },
  guestOs: { name: "guest-os", id: "guest_os", defaultValue: "" }
};

const Servers = props => {
  const setDefaultValue = () => {
    return {
      serverName: fields.serverName.defaultValue,
      noVms: fields.noVms.defaultValue,
      vCpu: fields.vCpu.defaultValue,
      peakCpu: fields.peakCpu.defaultValue,
      vRam: fields.vRam.defaultValue,
      peakRam: fields.peakRam.defaultValue,
      provStore: fields.provStore.defaultValue,
      useStore: fields.useStore.defaultValue,
      guestOs: fields.guestOs.defaultValue
    };
  };

  const [ybr, setYbr] = useContext(YbrDataContext);
  const { client, headings, servers } = ybr;
  const [modalShow, setModalShow] = React.useState(false);
  const [server, setServer] = useState(setDefaultValue());

  const onAddHandler = () => {
    setServer(setDefaultValue());
    setModalShow(true);
  };

  const onDeleteHandler = () => {
    setModalShow(true);
  };

  const onRowClickHandler = (e, row) => {
    //Set the server object to the current clicked row
    const cur_server = setDefaultValue();

    let i = 0;
    for (let key in cur_server) {
      cur_server[key] = row[i];
      i++;
    }
    try {
      setServer(cur_server);
    } catch (error) {
      console.error(error);
    }    

  };

  const onChangeHandler = e => {
    const new_server = { ...server };
    switch (e.target.name) {
      case fields.serverName.name:
        new_server.serverName = e.target.value;
        break;
      case fields.noVms.name:
        new_server.noVms = e.target.value;
        break;
      case fields.vCpu.name:
        new_server.vCpu = e.target.value;
        break;
      case fields.peakCpu.name:
        new_server.peakCpu = e.target.value;
        break;
      case fields.vRam.name:
        new_server.vRam = e.target.value;
        break;
      case fields.peakRam.name:
        new_server.peakRam = e.target.value;
        break;
      case fields.provStore.name:
        new_server.provStore = e.target.value;
        break;
      case fields.useStore.name:
        new_server.useStore = e.target.value;
        break;
      case fields.guestOs.name:
        new_server.guestOs = e.target.value;
        break;
      default:
        break;
    }
    setServer(new_server);
  };

  const onSaveHandler = () => {
    const newYbr = { ...ybr };
    let server_arr = Object.values(server);
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
      <Grid
        data={servers}
        headings={headings.servers}
        onRowClick={onRowClickHandler}
        onRowLinkClick={() => setModalShow(true)}
      />
      {/* Modal Server only shown when Add and Update */}
      <Server
        show={modalShow}
        value={server}
        fields={fields}
        onChange={onChangeHandler}
        onCancel={() => setModalShow(false)}
        onHide={() => setModalShow(false)}
        onSave={onSaveHandler}
      />      
    </div>
  );
};

export default Servers;
