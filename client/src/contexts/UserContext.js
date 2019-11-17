import React, { useState, createContext } from "react";

export const UserContext = createContext();


const initUser  =() => {
  return {
    id: "",
    firstName: "",
    lastName: ""
  }
}
export const UserProvider = props => {
  const [isAuth, setAuth] = useState(false)
  return (
    <UserContext.Provider value={[isAuth, setAuth]}>
      {props.children}
    </UserContext.Provider>
  )
}