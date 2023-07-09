import { createContext, useState } from "react";

export const AuthContext = createContext(false);

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
