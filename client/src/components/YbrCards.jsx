import React, { useContext } from "react";

import YbrCard from "./YbrCard";
import { CompanyDataContext } from "../contexts/CompanyDataContext";

const YbrCards = () => {
  const value = useContext(CompanyDataContext);

  console.log("value **************", value);
  return (
    <>
      {value.map(y => (
        <YbrCard card={y} />
      ))}
    </>
  );
};

export default YbrCards;
