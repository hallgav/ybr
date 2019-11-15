import React, { useState, useContext } from "react";
import "./Applications.css";
import { YbrDataContext } from "../contexts/YbrDataContext";
import GridToolbar from "../components/GridToolbar";
import Grid from "../components/Grid";
import ApplicationDialog from "./ApplicationDialog";

const fields = {
  applicationName: { name: "application-name", id: "application_name", defaultValue: "" },
  version: { name: "version_no", id: "version-no", defaultValue: 0 },
  vendor: { name: "vendor", id: "vendor", defaultValue: 0 },
  description: { name: "app_desc", id: "app-desc", defaultValue: 0 },
  platform: { name: "platform", id: "platform", defaultValue: 0 },
  hosting: { name: "hosting", id: "hosting", defaultValue: 0 },
  sixR: { name: "six_r", id: "six-r", defaultValue: 0 },
  notes: { name: "notes", id: "notes", defaultValue: 0 },
  status: { name: "app_status", id: "app-status", defaultValue: "" },
  assignee: { name: "assignee", id: "assignee", defaultValue: "" }
};

const setDefaultValue = () => {
  return {
    applicationName: fields.applicationName.defaultValue,
    version: fields.version.defaultValue,
    vendor: fields.vendor.defaultValue,
    description: fields.description.defaultValue,
    platform: fields.platform.defaultValue,
    hosting: fields.hosting.defaultValue,
    sixR: fields.sixR.defaultValue,
    notes: fields.notes.defaultValue,
    status: fields.status.defaultValue,
    assignee: fields.assignee.defaultValue
  };
};



const Applications = props => {
 
  const ACTION_ADD = "ADD";
  const ACTION_UPDATE = "UPDATE";

  const [ybr, setYbr] = useContext(YbrDataContext);
  const {client, headings, applications } = ybr;
  const [modalShow, setModalShow] = useState(false);
  const [application, setApplication] = useState({index: 0, value: setDefaultValue()});
  const [action, setAction] = useState(ACTION_ADD)

  const onAddClickHandler = () => {
    setApplication({index: 0, value: setDefaultValue()});
    setAction(ACTION_ADD);
    setModalShow(true);
  };
  
  const onUpdateClickHandler = () => {
    setAction(ACTION_UPDATE);
    setModalShow(true);
  };

  const onRowClickHandler = (e, row, index) => {
    //Set the application object to the current clicked row
    const cur_application = {index: index, value: setDefaultValue()};

    let i = 0;
    for (let key in cur_application.value) {
      cur_application.value[key] = row[i];
      i++;
    }
    try {
      setApplication(cur_application);
    } catch (error) {
      console.error(error);
    }    

  };

  const onChangeHandler = e => {
    const new_application = { ...application };
    switch (e.target.name) {
      case fields.applicationName.name:
        new_application.value.applicationName = e.target.value;
        break;
      case fields.version.name:
        new_application.value.version = e.target.value;
        break;
      case fields.vendor.name:
        new_application.value.vendor = e.target.value;
        break;
      case fields.description.name:
        new_application.value.description = e.target.value;
        break;
      case fields.platform.name:
        new_application.value.platform = e.target.value;
        break;
      case fields.hosting.name:
        new_application.value.hosting = e.target.value;
        break;
      case fields.sixR.name:
        new_application.value.sixR = e.target.value;
        break;
      case fields.notes.name:
        new_application.value.notes = e.target.value;
        break;
      case fields.status.name:
        new_application.value.status = e.target.value;
        break;
      case fields.assignee.name:
        new_application.value.assignee = e.target.value;
        break;
      default:
        break;
    }
    setApplication(new_application);
  };

  const onSaveHandler = () => {

    const newYbr = { ...ybr };
    let application_arr = Object.values(application.value);
    switch (action) {
      case ACTION_ADD:
        newYbr.applications = [...newYbr.applications, application_arr];
        break;
      case ACTION_UPDATE:
        newYbr.applications[application.index] = application_arr;
        break;    
      default:
        break;
    }
    setYbr(newYbr);
    setModalShow(false);
  };

  const onDeleteHandler = () => {
    const newYbr = { ...ybr };
    newYbr.applications = ybr.applications.filter((s, index) => index !== application.index)
    setYbr(newYbr);
    setModalShow(false);
  };

  return (
    <div className="application-body">
      <h2>{client}</h2>
      <GridToolbar
        heading="Applications:"
        count={applications.length}
        onAdd={onAddClickHandler}
      />
      <Grid
        data={applications}
        headings={headings.applications}
        onRowClick={onRowClickHandler}
        onRowLinkClick={onUpdateClickHandler}
      />
      {/* Modal application only shown when Add and Update */}
      <ApplicationDialog
        show={modalShow}
        onHide={() => setModalShow(false)}
        value={application.value}
        fields={fields}
        onChange={onChangeHandler}
        onCancel={() => setModalShow(false)}
        onDelete={onDeleteHandler}
        onSave={onSaveHandler}
      />      
    </div>
  );
};

export default Applications;
