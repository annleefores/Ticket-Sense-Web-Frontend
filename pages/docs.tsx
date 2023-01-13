/* eslint-disable react/no-unescaped-entities */

import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import logo from "../assets/image/logo.png";
import telegram from "../assets/image/telegram.png";
import Link from "next/link";

const Docs: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col  justify-center px-6 tracking-normal leading-relaxed  md:leading-loose mx-auto mt-[50px]  sm:max-w-[700px]">
        <div className="mb-6">
          <p className="font-semibold text-lg mb-4 px-2 text-white">About</p>
          <p className="px-4">
            The ultimate solution for movie-goers. With ticket sense, we'll
            notify you the moment tickets for your favorite movies go on sale.
            Never miss out on the chance to see the latest blockbuster or indie
            hit again. Get first dibs on tickets before they sell out. Sign up
            now and never miss a movie again.
          </p>
        </div>
        <ul>
          <li>
            <div className="flex flex-row mt-2 gap-2">
              <div>
                <p className="font-semibold text-md mb-4 px-2 text-white">
                  Login with Telegram
                </p>
              </div>
            </div>
            <ul className="list-disc px-6  mt-1">
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
            <p className="mt-2 px-2">
              Now you have successfully logged in with telegram.
            </p>
            <p className="mt-2 px-2">
              To logout, go to Telegram Service Notification on telegram and
              click terminate session.
            </p>
            <p className="mt-2 px-2">
              To fully cancel this service click on Disconnect.
            </p>
          </li>
          <li>
            <div className="flex flex-row mt-6 gap-2">
              <div>
                <p className="font-semibold text-md my-4 px-2 text-white">
                  Using Ticket Sense
                </p>
              </div>
            </div>
            <ul className="list-disc px-6 mt-1">
              <li>Select the booking website.</li>
              <li>
                Enter the title of the film and select from the dropdown menu.
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
            <p className="mt-2 px-2">
              That&rsquo;s it, you should see the movie poster appear below in
              the added notifications section, make sure that its the same movie
              you are looking for.
            </p>
            <p className="mt-2 px-2">
              When our system finds tickets going on sale we will notify you
              through our telegram bot.
            </p>
            <p className="mt-2 px-2">
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
