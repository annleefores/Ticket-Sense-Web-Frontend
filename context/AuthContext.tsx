import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";

type Props = {
  children: ReactNode;
};

interface authContextType {
  user: string;
  setUserFunc: any;
}

const authContextDefaultValues: authContextType = {
  user: "",

  setUserFunc: () => {},
};

const AuthContext = createContext(authContextDefaultValues);

export function useContextStore() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState("");

  const setUserFunc = async (params: string) => {
    setUser(params);
  };

  const value = {
    user,
    setUserFunc,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
