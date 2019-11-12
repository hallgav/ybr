import React, { useState, createContext } from "react";

const getYbrData = (ybr_id) => {
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
    servers: [
      [
        "ART02DLDVDB01",
        1,
        12,
        0.9,
        64,
        0.9,
        3450,
        3450,
        "Microsoft Windows Server 2016 (64-bit)"
      ],
      [
        "END02SNDBOXAP20",
        1,
        2,
        0.8,
        64,
        0.9,
        64,
        64,
        "Red Hat Enterprise Linux 7 (64-bit)"
      ]
    ],
    applications: [
      [
        "CAS",
        "",
        "",
        "CAS (Compliance Automation Server)  enables insurance organizations to automate monitoring and protection against leading edge fraud and leakage",
        "",
        "",
        "Rehost",
        "",
        "",
        "Gavin"
      ],
      [
        "SecureWorks",
        "",
        "SecureWorks. Partnered with Dell",
         "MSSP for digital platform.",
        "SEC",
        "",
        "Rehost",
        "",
        "Complete",
        "Gavin"
      ]
    ]
  };
};

export const YbrDataContext = createContext();

export const YbrDataProvider = props => {
  const [ybr, setYbr] = useState(() => getYbrData(props.ybrId));
  return (
    <YbrDataContext.Provider value={[ybr, setYbr]}>
      {props.children}
    </YbrDataContext.Provider>
  );
};
