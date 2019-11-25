import React from "react";
import Applications from "../components/Applications";

const ApplicationsContainer = props => {
  const [applications, setApplications, isApplicationsLoading] = props.value;

  const onUpdateHandler = (value, index) => {
    const newApplications = [...applications];
    newApplications[index] = value;
    setApplications(newApplications);
  };

  const onAddHandler = application_arr => {
    setApplications([...applications, application_arr]);
  };

  const onDeleteHandler = value => {
    const newApplications = applications.filter((a, index) => index !== value);

    setApplications(newApplications);
  };

  return (
    <Applications
      value={applications}
      onUpdate={onUpdateHandler}
      onDelete={onDeleteHandler}
      onAdd={onAddHandler}
      isLoading={isApplicationsLoading}
    />
  );
};

export default ApplicationsContainer;
