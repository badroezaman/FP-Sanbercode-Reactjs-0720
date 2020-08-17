import React, { useState, createContext } from "react";

export const RegisterContext = createContext();

export const RegisterProvider = (props) => {
  const [user, setUser] = useState({
    lists: null,
    selectedId: 0,
    statusForm: "create",
  });

  return (
    <RegisterContext.Provider value={[user, setUser]}>
      {props.children}
    </RegisterContext.Provider>
  );
};
