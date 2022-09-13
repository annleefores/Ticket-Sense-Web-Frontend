import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContextStore } from "../context/AuthContext";

const Home: NextPage = () => {
  const { user, setUserFunc, site, setSiteFunc } = useContextStore();

  return (
    <div className="  text-5xl font-bold flex  justify-center w-full h-screen items-center">
      Hello
    </div>
  );
};

export default Home;
