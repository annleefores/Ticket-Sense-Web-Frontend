/* eslint-disable react/no-unescaped-entities */

import type { NextPage } from "next";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Docs: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col  justify-center p-4 tracking-normal leading-relaxed  md:leading-loose mx-auto mt-[50px]  sm:max-w-[700px]">
        <h1 className="text-3xl font-bold mb-4">Ticket Sense</h1>

        <ul>
          <li>
            <p className="font-semibold mt-6">Login with Telegram</p>
            <ul className="list-disc px-4 mt-1">
              <li>
                Select country and enter you telegram account phone number and
                click next.
              </li>
              <li>
                You will get a message on telegram from Telegram Service
                Notification.
              </li>
              <li>Read it and click confirm.</li>
              <li>
                Now go back to the website, if there&rsquo;s an accept page,
                accept it after reading the conditions.
              </li>
            </ul>
            <p className="mt-2">
              Now you have successfully logged in with telegram.
            </p>
            <p>
              To logout, go to Telegram Service Notification on telegram and
              click terminate session.
            </p>
            <p>To fully cancel this service click on Disconnect.</p>
          </li>
          <li>
            <p className="font-semibold mt-6">Using Ticket Sense</p>
            <ul className="list-disc px-4 mt-1">
              <li>Select the booking website.</li>
              <li>
                Enter the title of the film (check google for correct spelling)
                and select from the dropdown menu.
              </li>
              <li>
                Enter the theater&apos;s location and select from the dropdown
                menu.
              </li>
              <li>
                Enter the name of the theatre and select from the dropdown menu.
              </li>
              <li>Choose a booking date</li>
              <li>Click Enable Ticket Sense</li>
            </ul>
            <p className="mt-2">
              That&rsquo;s it, you should see the movie poster appear below in
              the added notifications section, make sure that its the same movie
              you are looking for.
            </p>
            <p>
              When our system finds tickets going on sale we will notify you
              through our telegram bot.
            </p>
            <p>
              To delete the notification, simply tap on the poster and click the
              delete option.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Docs;
