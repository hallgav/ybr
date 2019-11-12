import React, {useEffect} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import './Server.css'

const Server = (props) => {

  return ( 
        <Modal
          show={props.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Server
            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="contained-modal-body">
            <label htmlFor="server_name">Name: </label>
            <input className="form-control" type="text" name="server-name" id="server_name" onChange={props.onChange} value={props.value.name}/>

            <label htmlFor="no_vms"># of VMs: </label>
            <input className="form-control" type="text" name="no-vms" id="no_vms"/>

            <label htmlFor="v_cpu">Virtual CPU: </label>
            <input className="form-control" type="text" name="v-cpu-vms" id="v_cpu"/>
            
            <label htmlFor="peak_cpu">Peak CPU Utilization (%): </label>
            <input className="form-control" type="text" name="peak-cpu" id="peak_cpu"/>

            <label htmlFor="v_ram">Virtual RAM (GB): </label>
            <input className="form-control" type="text" name="v-ram" id="v_ram"/>

            <label htmlFor="prak_vram">Peak vRAM Utilization (%): </label>
            <input className="form-control" type="text" name="peak-ram" id="prak_vram"/>

            <label htmlFor="prov_store">Provisioned Storage (GB): </label>
            <input className="form-control" type="text" name="prov-store" id="prov_store"/>

            <label htmlFor="use_store">Usable Storage (GB): </label>
            <input className="form-control" type="text" name="use-store" id="use_store"/>
            
            <label htmlFor="guest_os">Guest OS: </label>
            <input className="form-control" type="text" name="guest-os" id="guest_os"/>

          </Modal.Body>
          <Modal.Footer>
            <Button size="sm" onClick={props.onSave}>Save</Button>
            <Button size="sm" onClick={props.onCancel}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      );
}
 
export default Server;