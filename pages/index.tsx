import type { NextPage } from "next";
import Head from "next/head";
import { useContextStore } from "../context/AuthContext";
import React from "react";
import TelegramLoginButton from "react-telegram-login";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  const { setUserFunc } = useContextStore();

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
        <div className="max-w-[860px] mt-[-160px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <h1 className=" text-[#00df9a] text-5xl mt-[45px] font-bold flex justify-center p-2 md:text-6xl sm:text-5xl md:py-6">
            Ticket Sense
          </h1>

          <p className="md:text-2xl text-[1rem] font-bold mt-3 text-gray-400">
            Get notified about ticket sales at your preferred theater before
            anyone else.
          </p>
          <div className="flex justify-center items-center  w-full h-[50px] mt-[60px]">
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
      </div>
    </>
  );
};

export default Home;
