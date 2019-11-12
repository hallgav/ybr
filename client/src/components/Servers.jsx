import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import "./Servers.css";
import { YbrDataContext } from "../contexts/YbrDataContext";
import GridToolbar from "../components/GridToolbar"

const Servers = props => {
  const value = useContext(YbrDataContext);
  const { headings, servers } = value;
  return (
    <div className="server-body">
      <h2>{value.client}</h2>
      <GridToolbar heading="Servers:" count={value.servers.length}/>
      <div className="server-body__grid">
        <Table className="server-table" striped bordered hover size="sm">
          <thead>
            <tr>
              {headings.servers.map(h => (
                <th>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {servers.map(s => (
              <tr>
                <td>{s.name}</td>
                <td>{s.noOfVMs}</td>
                <td>{s.vCPU}</td>
                <td>{s.peakCpuUtilization}</td>
                <td>{s.vRAM}</td>
                <td>{s.peakRamUtilization}</td>
                <td>{s.provisionedStorage}</td>
                <td>{s.usableStorage}</td>
                <td>{s.guestOS}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Servers;
