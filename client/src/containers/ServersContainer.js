import React from 'react';
import Servers from "../components/Servers"


const ServersContainer = props => {
  
  const [servers, setServers, isServersLoading] = props.value;

  const onUpdateHandler = (value, index) => {
    const newServers = [...servers];
    newServers[index] = value;
    setServers(newServers);
  };

  const onAddHandler = server_arr => {
    setServers([...servers, server_arr]);
  };

  const onDeleteHandler = value => {
    const newServers = servers.filter((a, index) => index !== value);

    setServers(newServers);
  };

  return (
    <Servers
      value={servers}
      onUpdate={onUpdateHandler}
      onDelete={onDeleteHandler}
      onAdd={onAddHandler}
      isLoading={isServersLoading}
    />
  );
}

export default ServersContainer;