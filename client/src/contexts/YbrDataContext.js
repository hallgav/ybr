import React, { useState, createContext } from "react";

const getYbrData = (ybr_id) => {
  //Use the ybr_id to get the ybr data
  return {
    ybrId: 1,
    client: "MLC Insurence LTD",
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
    servers: [
      {
        name: "ART02DLDVDB01",
        noOfVMs: 1,
        vCPU: 12,
        peakCpuUtilization: 0.9,
        vRAM: 64,
        peakRamUtilization: 0.9,
        provisionedStorage: 3450,
        usableStorage: 3450,
        guestOS: "Microsoft Windows Server 2016 (64-bit)"
      },
      {
        name: "END02SNDBOXAP20",
        noOfVMs: 1,
        vCPU: 2,
        peakCpuUtilization: 0.8,
        vRAM: 64,
        peakRamUtilization: 0.9,
        provisionedStorage: 64,
        usableStorage: 64,
        guestOS: "Red Hat Enterprise Linux 7 (64-bit)"
      }
    ],
    applications: [
      {
        app: "CAS",
        version: "",
        vendor: "",
        description:
          "CAS (Compliance Automation Server)  enables insurance organizations to automate monitoring and protection against leading edge fraud and leakage",
        platform: "",
        hosting: "",
        sixR: "Rehost",
        notes: "",
        status: "",
        assignee: "Gavin"
      },
      {
        app: "SecureWorks",
        version: "",
        vendor: "SecureWorks. Partnered with Dell",
        description: "MSSP for digital platform.",
        platform: "SEC",
        hosting: "",
        sixR: "Rehost",
        notes: "",
        status: "Complete",
        assignee: "Gavin"
      }
    ]
  };
};

export const YbrDataContext = createContext();

export const YbrDataProvider = props => {
  const [ybr, setYbr] = useState(() => getYbrData(props.ybrId));
  return (
    <YbrDataContext.Provider value={ybr}>
      {props.children}
    </YbrDataContext.Provider>
  );
};
