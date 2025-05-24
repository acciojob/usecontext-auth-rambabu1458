import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isHuman, setIsHuman] = useState(false);

  return (
    <AuthContext.Provider value={{ isHuman, setIsHuman }}>
      {children}
    </AuthContext.Provider>
  );
};
