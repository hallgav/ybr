import React, {useState, useEffect} from 'react';
import Ybr from '../components/Ybr';
import {API} from "aws-amplify";

const getYbrData = ybr_id => {
  //Use the ybr_id to get the ybr data
  return {
    ybrId: 1,
    client: "MLC Insurance LTD"
  };
};


const YbrContainer = (props) => {
  const [ybr, setYbr] = useState(() => getYbrData(props.ybrId));
  const [applications, setApplications] = useState([["", "", "", "", "", "", "", "", "", "", ""]])
  const [servers, setServers] = useState([["", "", "", "", "", "", "", "", "", ""]])

  
  useEffect(() => {
    const corsHeader = {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    };
    
    const getApplications = async () => await API.get("ybrApiCall", "/ybr/" + props.ybrId + "/applications", corsHeader);
    const getServers = async () => await API.get("ybrApiCall", "/ybr/" + props.ybrId + "/servers", corsHeader);
  
    getServers()
    .then(data => {
      console.log("we got the servers ------------------------>", data);
      setServers(data);
    })
    .catch(error => {
      console.error("Error loading Servers --------------: ", error)
    }
    )

    getApplications()
    .then(data => {
      console.log("we got the applications ------------------------>", data);
      setApplications(data);
    })
  }, [])
  
  return ( 
      <Ybr value={ybr} servers={[servers, setServers]} applications={[applications, setApplications]}/>
   );
}
 
export default YbrContainer;