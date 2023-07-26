import { createContext } from "react";

const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={null}>
      {children}
    </AuthContext.Provider>
  );
}
