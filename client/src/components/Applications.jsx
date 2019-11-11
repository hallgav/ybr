import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import "./Applications.css";
import { YbrDataContext } from "../contexts/YbrDataContext";

const Applications = props => {
  const value = useContext(YbrDataContext);
  const { headings, applications } = value;
  return (
    <div className="app-body">
      <h2>{value.client}</h2>
      <div className="application-sub-heading">
        <h3>Applications:</h3>{" "}
        <h5 className="application-sub-heading__count">
          <Badge variant="primary">{value.servers.length}</Badge>
        </h5>
      </div>
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
