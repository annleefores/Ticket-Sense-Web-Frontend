import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";

type Props = {
  children: ReactNode;
};

interface authContextType {
  user: string;
  setUserFunc: any;
  site: string;
  setSite: any;
  Locdata: any;
  setLocdata: any;
  location: any;
  setLocation: any;
  theater: any;
  setTheater: any;
  theaterdata: any;
  setTheaterdata: any;
  date: any;
  dateChange: any;
}

const authContextDefaultValues: authContextType = {
  user: "",
  setUserFunc: () => {},
  site: "",
  setSite: () => {},
  Locdata: null,
  setLocdata: () => {},
  location: null,
  setLocation: () => {},
  theater: null,
  setTheater: () => {},
  theaterdata: null,
  setTheaterdata: () => {},
  date: null,
  dateChange: () => {},
};

const AuthContext = createContext(authContextDefaultValues);

export function useContextStore() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState("");
  const [site, setSite] = useState("");
  const [Locdata, setLocdata] = useState([]);
  const [location, setLocation] = useState([]);
  const [theater, setTheater] = useState([]);
  const [theaterdata, setTheaterdata] = useState([{ value: "", label: "" }]);
  const [date, dateChange] = useState(null);

  const setUserFunc = async (params: string) => {
    setUser(params);
  };

  const value = {
    user,
    setUserFunc,
    setSite,
    site,
    Locdata,
    setLocdata,
    location,
    setLocation,
    theater,
    setTheater,
    theaterdata,
    setTheaterdata,
    date,
    dateChange,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
