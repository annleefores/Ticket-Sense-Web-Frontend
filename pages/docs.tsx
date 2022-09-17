/* eslint-disable react/no-unescaped-entities */

import type { NextPage } from "next";
import React from "react";
import Navbar from "../components/Navbar";

const Docs: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col  justify-center p-6 tracking-normal leading-relaxed  md:leading-loose mx-auto mt-[50px] md:max-w-[800px]">
        <h1 className="text-3xl font-bold mb-4">Ticket Sense</h1>

        <div className="mt-8">
          <p className="text-lg font-semibold mb-4 ">
            How to use Ticket Sense ?
          </p>
          <ul className="list-disc px-8">
            <li>Login with Telegram</li>
            <li>Proceed by entering your Telegram phone number.</li>
            <li>
              You will receive a message on your Telegram app; please approve
              it.
            </li>
            <li>
              Return to the website and accept the bot; you will be redirected
              to the home page.
            </li>
            <li>Toggle the button to select the booking website.</li>
            <li>
              Enter the title of the film and select from the dropdown menu.
            </li>
            <li>
              Enter the theater&apos;s address and select from the dropdown
              menu.
            </li>
            <li>
              Enter the name of the theatre and select from the dropdown menu.
            </li>
            <li>Choose a booking date</li>
            <li>Click Enable Ticket Sense</li>
          </ul>
          <p className="mt-4 ">
            That&rsquo;s it, you should see the movie poster appear below in the
            added notifications section, make sure that its the same movie you
            are looking for. When our system finds ticket going on sale we will
            notify you through our telegram bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Docs;
