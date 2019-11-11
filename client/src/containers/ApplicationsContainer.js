import React from 'react';
import {YbrDataProvider} from "../contexts/YbrDataContext"
import Applications from "../components/Applications"
const useParams = require("react-router-dom").useParams;


const ApplicationsContainer = props => {
  const {id}  = useParams()
  return (
    <YbrDataProvider ybrId={id}>
      <Applications/>
    </YbrDataProvider>
  );
}

export default ApplicationsContainer;