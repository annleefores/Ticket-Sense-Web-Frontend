import type { NextPage } from "next";
import Head from "next/head";
import { useContextStore } from "../context/AuthContext";
import React from "react";
import TelegramLoginButton from "react-telegram-login";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import About from "../components/About";

const Home: NextPage = () => {
  const { user, setUserFunc } = useContextStore();

  const router = useRouter();

  const loginUser = async (responsefromtg: {
    id: any;
    first_name?: string;
    last_name?: string;
    hash: string;
    auth_date: number;
    username: string;
  }) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URI}api/verifyuser/`, responsefromtg)
      .then((response) => {
        if (response.data.id === responsefromtg.id) {
          router.push("/home");
          setUserFunc(response.data.id);
        } else {
          setUserFunc(response.data.id);
          alert("User authentication invalid!!");
        }
      });
  };

  const handleTelegramResponse = (responsefromtg: any) => {
    loginUser(responsefromtg);
  };

  return (
    <>
      <Navbar />

      <div className="text-white">
        <div className="max-w-[860px]  mt-[100px] w-full h-full mx-auto text-center flex flex-col justify-center ">
          <h1 className="text-6xl text-emerald-500 mt-[45px] font-semibold  flex justify-center p-2 md:text-[80px]  md:py-6">
            Ticket Sense
          </h1>

          <p className="md:text-2xl text-lg font-semibold  mt-2 text-neutral-400 p-2">
            Get notified about ticket sales at your preferred theater before
            anyone else.
          </p>
          {/* <p className="text-neutral-400">
            
          </p> */}
          <div className="flex justify-center items-center w-full h-[50px] mt-[60px]">
            <div className="flex ">
              <TelegramLoginButton
                dataOnauth={handleTelegramResponse}
                botName="ticketsense_bot"
                usePic="false"
                cornerRadius="5"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[200px] ">
          <About />
        </div>
      </div>
    </>
  );
};

export default Home;
