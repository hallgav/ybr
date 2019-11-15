import React from 'react';
import {YbrDataProvider} from "../contexts/YbrDataContext"
import Servers from "../components/Servers"
const useParams = require("react-router-dom").useParams;


const ServersContainer = props => {
  const {id}  = useParams()
  return (
    <YbrDataProvider ybrId={id}>
      <Servers/>
    </YbrDataProvider>
  );
}

export default ServersContainer;