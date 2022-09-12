import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";

interface authContextType {
  user: string;
  site: string;
  setUserFunc: () => void;
  setSiteFunc: () => void;
}

const authContextDefaultValues: authContextType = {
  user: "",
  site: "",
  setUserFunc: () => {},
  setSiteFunc: () => {},
};

const AuthContext = createContext<authContextType>();

export function useContextStore() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState("");
  const [site, setSite] = useState("");

  const setUserFunc = async ({ params }: { params: string }) => {
    setUser(params);
  };

  const setSiteFunc = async ({ params }: { params: string }) => {
    setSite(params);
  };

  const value = {
    user,
    setUserFunc,
    site,
    setSiteFunc,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
