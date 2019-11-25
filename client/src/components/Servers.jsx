import React, { useContext, useState } from "react";
import "./Servers.css";
import GridToolbar from "../components/GridToolbar";
import Grid from "../components/Grid";
import ServerDialog from "./ServerDialog";

const headings = [
  "Name",
  "# of VMs",
  "vCPU",
  "Peak CPU Utilization (%)",
  "vRAM (GB)",
  "Peak vRAM Utilization (%)",
  "Provisioned Storage (GB)",
  "Usable Storage (GB)",
  "Guest OS"
];

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
const Servers = props => {
  const ACTION_ADD = "ADD";
  const ACTION_UPDATE = "UPDATE";

  const servers = props.value;

  const [modalShow, setModalShow] = useState(false);
  const [server, setServer] = useState({ index: 0, value: setDefaultValue() });
  const [action, setAction] = useState(ACTION_ADD);

  const onAddClickHandler = () => {
    setServer({ index: 0, value: setDefaultValue() });
    setAction(ACTION_ADD);
    setModalShow(true);
  };

  const onUpdateClickHandler = () => {
    setAction(ACTION_UPDATE);
    setModalShow(true);
  };

  const onRowClickHandler = (e, row, index) => {
    //Set the server object to the current clicked row
    const cur_server = { index: index, value: setDefaultValue() };

    let i = 0;
    for (let key in cur_server.value) {
      cur_server.value[key] = row[i];
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
        new_server.value.serverName = e.target.value;
        break;
      case fields.noVms.name:
        new_server.value.noVms = e.target.value;
        break;
      case fields.vCpu.name:
        new_server.value.vCpu = e.target.value;
        break;
      case fields.peakCpu.name:
        new_server.value.peakCpu = e.target.value;
        break;
      case fields.vRam.name:
        new_server.value.vRam = e.target.value;
        break;
      case fields.peakRam.name:
        new_server.value.peakRam = e.target.value;
        break;
      case fields.provStore.name:
        new_server.value.provStore = e.target.value;
        break;
      case fields.useStore.name:
        new_server.value.useStore = e.target.value;
        break;
      case fields.guestOs.name:
        new_server.value.guestOs = e.target.value;
        break;
      default:
        break;
    }
    setServer(new_server);
  };

  const onSaveHandler = () => {
    let server_arr = Object.values(server.value);
    switch (action) {
      case ACTION_ADD:
        props.onAdd(server_arr);
        break;
      case ACTION_UPDATE:
        props.onUpdate(server_arr, server.index);
        break;
      default:
        break;
    }
    setModalShow(false);
  };

  const onDeleteHandler = () => {
    props.onDelete(server.index);
    setModalShow(false);
  };

  return (
    <div className="server-body">
      <GridToolbar
        heading="Servers:"
        count={servers.length}
        onAdd={onAddClickHandler}
      />
      <Grid
        data={servers}
        headings={headings}
        onRowClick={onRowClickHandler}
        onRowLinkClick={onUpdateClickHandler}
        isLoading={props.isLoading}
      />
      {/* Modal Server only shown when Add and Update */}
      <ServerDialog
        show={modalShow}
        onHide={() => setModalShow(false)}
        value={server.value}
        fields={fields}
        onChange={onChangeHandler}
        onCancel={() => setModalShow(false)}
        onDelete={onDeleteHandler}
        onSave={onSaveHandler}
      />
    </div>
  );
};

export default Servers;
