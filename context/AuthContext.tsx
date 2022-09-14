import { useSessionStorage } from "@mantine/hooks";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

interface authContextType {
  user: any;
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
  moviedata: any;
  setMoviedata: any;
  newpost: boolean;
  setNewpost: any;

  movie: any;
  setMovie: any;
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
  moviedata: "",
  setMoviedata: () => {},
  newpost: false,
  setNewpost: () => {},

  movie: "",
  setMovie: () => {},
};

const AuthContext = createContext(authContextDefaultValues);

export function useContextStore() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: Props) {
  const [movie, setMovie] = useState("");
  const [moviedata, setMoviedata] = useState([]);
  const [user, setUser] = useState("");
  const [site, setSite] = useState("");
  const [Locdata, setLocdata] = useState([]);
  const [location, setLocation] = useState([]);
  const [theater, setTheater] = useState([]);
  const [theaterdata, setTheaterdata] = useState([{ value: "", label: "" }]);
  const [date, dateChange] = useState(null);
  const [newpost, setNewpost] = useState(false);

  const setUserFunc = async (params: any) => {
    setUser(params);
  };

  useEffect(() => {
    if (user) {
      sessionStorage.setItem("user", user);
    } else if (!user) {
      const userSession = sessionStorage.getItem("user");
      setUserFunc(userSession);
    }
  }, []);

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
    moviedata,
    setMoviedata,
    newpost,
    setNewpost,
    movie,
    setMovie,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
