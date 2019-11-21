import React, {useState} from "react";
import "./Ybr.css";
import SideMenu from "../containers/SideMenu";
import PageNav from "./PageNav";
import ApplicationsContainer from "../containers/ApplicationsContainer";
import ServersContainer from "../containers/ServersContainer";
import {Button} from "react-bootstrap";

const Ybr = props => {
  const [selectedAsset, setSelectAsset] = useState("Servers");

  return (
    <div>
      <PageNav heading={props.value.client} showLogOut>
        <div className="ybr-flexbox">
          <SideMenu />
          <div id="ybr-flexbox-body">
            <div className="ybr-flexbox__panel">
              ASSETS
              <ul id="nav">
                <li key="1">
                  <Button>Servers</Button>
                </li>
                <li key="2">
                  <Button>Applications</Button>
                </li>
              </ul>
            </div>
            <div className="ybr-flexbox__content">
              {selectedAsset === "Servers" ? <ServersContainer value={props.servers}/> : <ApplicationsContainer value={props.applications}/>}
            </div>
          </div>
        </div>
      </PageNav>
    </div>
  );
};

export default Ybr;
