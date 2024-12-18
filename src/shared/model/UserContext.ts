import React from "react";

export const UserContext = React.createContext({
  role: 3,
  setRole: (role: number) => {},
});
