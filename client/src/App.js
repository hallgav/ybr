import  React, {useState } from "react";
import SideMenu from "./containers/SideMenu";

export default () => {
  const [ybrSelected, setYbrSelected] = useState(false);

  return (
    <div>
      <SideMenu />
      <div>
        <p>You clicked {ybrSelected} times</p>
        <button onClick={() => setYbrSelected(true)}>Click me</button>
      </div>
    </div>
  );
};
