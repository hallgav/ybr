import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import "./Applications.css";
import { YbrDataContext } from "../contexts/YbrDataContext";
import GridToolbar from "../components/GridToolbar"


const Applications = props => {
  const value = useContext(YbrDataContext);
  const { headings, applications } = value;
  return (
    <div className="app-body">
      <h2>{value.client}</h2>
      <GridToolbar heading="Applications:" count={value.applications.length}/>
      <div className="app-body__grid">
        <Table className="application-table" striped bordered hover size="sm">
          <thead>
            <tr>
              {headings.applications.map(h => (
                <th>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {applications.map(a => (
              <tr>
                <td>{a.app}</td>
                <td>{a.version}</td>
                <td>{a.vendor}</td>
                <td>{a.description}</td>
                <td>{a.platform}</td>
                <td>{a.hosting}</td>
                <td>{a.sixR}</td>
                <td>{a.notes}</td>
                <td>{a.status}</td>
                <td>{a.assignee}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Applications;
