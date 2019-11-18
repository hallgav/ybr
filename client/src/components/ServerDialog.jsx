import React from "react";
import {Button, Modal} from "react-bootstrap";
import Input from "./Input";

import "./ServerDialog.css";

const ServerDialog = props => {
  const { fields } = props;
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Server</Modal.Title>
      </Modal.Header>
      <Modal.Body id="contained-modal-body">
        <Input
          label="Name:"
          name={fields.serverName.name}
          id={fields.serverName.id}
          onChange={props.onChange}
          value={props.value.serverName}
        />

        <Input
          label="# of VMs:"
          name={fields.noVms.name}
          id={fields.noVms.id}
          onChange={props.onChange}
          value={props.value.noVms}
        />
        <Input
          label="Virtual CPU:"
          name={fields.vCpu.name}
          id={fields.vCpu.id}
          onChange={props.onChange}
          value={props.value.vCpu}
        />
        <Input
          label="Peak CPU Utilization (%):"
          name={fields.peakCpu.name}
          id={fields.peakCpu.id}
          onChange={props.onChange}
          value={props.value.peakCpu}
        />

        <Input           
          label="Virtual RAM (GB)"
          name={fields.vRam.name}
          id={fields.vRam.id}
          onChange={props.onChange}
          value={props.value.vRam}
        />

        <Input
          label="Peak vRAM Utilization (%)"
          name={fields.peakRam.name}
          id={fields.peakRam.id}
          onChange={props.onChange}
          value={props.value.peakRam}
        />

        <Input
          label="Provisioned Storage (GB):"
          name={fields.provStore.name}
          id={fields.provStore.id}
          onChange={props.onChange}
          value={props.value.provStore}
        />

        <Input
          label="Usable Storage (GB):"
          name={fields.useStore.name}
          id={fields.useStore.id}
          onChange={props.onChange}
          value={props.value.useStore}
        />

        <Input
          label="Guest OS:"
          name={fields.guestOs.name}
          id={fields.guestOs.id}
          onChange={props.onChange}
          value={props.value.guestOs}
        />
      </Modal.Body>
      <Modal.Footer>
      <Button size="sm" onClick={props.onDelete}>
          Delete
        </Button>
        <Button size="sm" onClick={props.onSave}>
          Save
        </Button>
        <Button size="sm" onClick={props.onCancel}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ServerDialog;
