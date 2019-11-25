import React, { useState, useEffect } from "react";
import Ybr from "../components/Ybr";
import { API } from "aws-amplify";

const getYbrData = ybr_id => {
  //Use the ybr_id to get the ybr data
  return {
    ybrId: 1,
    client: "MLC Insurance LTD"
  };
};

const YbrContainer = props => {
  const [ybr, setYbr] = useState(() => getYbrData(props.ybrId));
  const [applications, setApplications] = useState([
    ["", "", "", "", "", "", "", "", "", "", ""]
  ]);
  const [servers, setServers] = useState([
    ["", "", "", "", "", "", "", "", "", ""]
  ]);
  const [isServersLoading, setIsServersLoading] = useState(false);
  const [isApplicationsLoading, setIsApplicationsLoading] = useState(false);

  useEffect(() => {
    setIsServersLoading(true);
    setIsApplicationsLoading(true);
    const corsHeader = {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    };

    const getApplications = async () =>
      await API.get(
        "ybrApiCall",
        "/ybr/" + props.ybrId + "/applications",
        corsHeader
      );
    const getServers = async () =>
      await API.get(
        "ybrApiCall",
        "/ybr/" + props.ybrId + "/servers",
        corsHeader
      );

    getServers()
      .then(data => {
        console.log("we got the servers ------------------------>", data);
        setServers(data);
        setIsServersLoading(false);
      })
      .catch(error => {
        console.error("Error loading Servers --------------: ", error);
        setIsServersLoading(false);
      });

    getApplications()
      .then(data => {
        console.log("we got the applications ------------------------>", data);
        setApplications(data);
        setIsApplicationsLoading(false);
      })
      .catch(error => {
        console.error("Error loading Applications --------------: ", error);
        setIsApplicationsLoading(false);
      });
  }, []);

  return (
    <Ybr
      value={ybr}
      servers={[servers, setServers, isServersLoading]}
      applications={[applications, setApplications, isApplicationsLoading]}
    />
  );
};

export default YbrContainer;
