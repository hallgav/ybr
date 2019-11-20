import React, { useState, createContext, useEffect } from "react";
import { API } from "aws-amplify";

const getYbrData = ybr_id => {
  //Use the ybr_id to get the ybr data
  return {
    ybrId: 1,
    client: "MLC Insurance LTD",
    headings: {
      servers: [
        "Name",
        "# of VMs",
        "vCPU",
        "Peak CPU Utilization (%)",
        "vRAM (GB)",
        "Peak vRAM Utilization (%)",
        "Provisioned Storage (GB)",
        "Usable Storage (GB)",
        "Guest OS"
      ],
      applications: [
        "App/ Vendor",
        "Version (if applicable)",
        "Vendor",
        "Description",
        "Platform",
        "Hosting",
        "6R",
        "Notes",
        "Status",
        "Assignee"
      ]
    },
    servers: [["", 0, 0, 0, 0, 0, 0, 0, ""]],
    applications: [["", "", "", "", "", "", "", "", "", ""]]
  };
};

export const YbrDataContext = createContext();

export const YbrDataProvider = props => {
  const [ybr, setYbr] = useState(() => getYbrData(props.ybrId));

  const corsHeader = {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  };
  const getApplications = async () => await API.get("ybrApiCall", "/applications", corsHeader);

  getApplications()
  .then(data => {
    console.log("we got the data ------------------------>", data);
    let newYbr = { ...ybr };
    newYbr.applications = data;
    setYbr(newYbr);
  })

  return (
    <YbrDataContext.Provider value={[ybr, setYbr]}>
      {props.children}
    </YbrDataContext.Provider>
  );
};
