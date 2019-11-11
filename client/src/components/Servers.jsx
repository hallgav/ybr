import React, {useContext} from 'react';
import Table from "react-bootstrap/Table";
import './Servers.css'
import {YbrDataContext} from "../contexts/YbrDataContext"



const Servers = props => {
  const value = useContext(YbrDataContext)
  return (
    <div className="server-body">
      <h2>{value.client}</h2>
      <div className="server-body__grid">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>

  );
}

export default Servers;