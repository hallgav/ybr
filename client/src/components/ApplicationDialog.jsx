import React from "react";
import {Button, Modal} from "react-bootstrap";
import Input from "./Input";

import "./ApplicationDialog.css";

const ApplicationDialog = props => {
  const { fields } = props;
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Application</Modal.Title>
      </Modal.Header>
      <Modal.Body id="contained-modal-body">
        <Input
          label="Name:"
          name={fields.applicationName.name}
          id={fields.applicationName.id}
          onChange={props.onChange}
          value={props.value.applicationName}
        />

        <Input
          label="Version:"
          name={fields.version.name}
          id={fields.version.id}
          onChange={props.onChange}
          value={props.value.version}
        />
        <Input
          label="Vendor:"
          name={fields.vendor.name}
          id={fields.vendor.id}
          onChange={props.onChange}
          value={props.value.vendor}
        />
        <Input
          label="Description:"
          name={fields.description.name}
          id={fields.description.id}
          onChange={props.onChange}
          value={props.value.description}
        />

        <Input           
          label="Platform:"
          name={fields.platform.name}
          id={fields.platform.id}
          onChange={props.onChange}
          value={props.value.platform}
        />

        <Input
          label="Hosting:"
          name={fields.hosting.name}
          id={fields.hosting.id}
          onChange={props.onChange}
          value={props.value.hosting}
        />

        <Input
          label="Six R's:"
          name={fields.sixR.name}
          id={fields.sixR.id}
          onChange={props.onChange}
          value={props.value.sixR}
        />

        <Input
          label="Notes:"
          name={fields.notes.name}
          id={fields.notes.id}
          onChange={props.onChange}
          value={props.value.notes}
        />

        <Input
          label="Status:"
          name={fields.status.name}
          id={fields.status.id}
          onChange={props.onChange}
          value={props.value.status}
        />
        <Input
          label="Assignee:"
          name={fields.assignee.name}
          id={fields.assignee.id}
          onChange={props.onChange}
          value={props.value.assignee}
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

export default ApplicationDialog;
