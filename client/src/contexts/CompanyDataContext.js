import React, { useState, createContext } from "react";

const getYbrs = () => [
  {
    id: 1000,
    header: "MLC Insurence",
    title: "YBR for DevOps team",
    text: "YBR to migrate data centre to AWS cloud",
    path: "/ybr/1000"
  },
  {
    id: 2000,
    header: "MLC Insurence",
    title: "YBR for DevOps team",
    text: "YBR to migrate data centre to AWS cloud",
    path: "/ybr/2000"
  },
  {
    id: 3000,
    header: "MLC Insurence",
    title: "YBR for DevOps team",
    text: "YBR to migrate data centre to AWS cloud",
    path: "/ybr/3000"
  },
  {
    id: 4000,
    header: "MLC Insurence",
    title: "YBR for DevOps team",
    text: "YBR to migrate data centre to AWS cloud",
    path: "/ybr/4000"
  },
  {
    id: 5000,
    header: "MLC Insurence",
    title: "YBR for DevOps team",
    text: "YBR to migrate data centre to AWS cloud",
    path: "/ybr/5000"
  }
];

export const CompanyDataContext = createContext();

export const CompanyDataProvider = props => {
  const [ybrs, setYbrs] = useState(() => getYbrs());
   return (
    <CompanyDataContext.Provider value={ybrs}>{props.children}</CompanyDataContext.Provider>
  );
};
