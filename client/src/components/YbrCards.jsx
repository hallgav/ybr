import React, { useContext } from "react";

import YbrCard from "./YbrCard";
import { CompanyDataContext } from "../contexts/CompanyDataContext";

const YbrCards = () => {
  const value = useContext(CompanyDataContext);

  return (
    <>
      {value.map((y, index) => (
        <YbrCard key={index} card={y} />
      ))}
    </>
  );
};

export default YbrCards;
