import Image from "next/image";
import React from "react";
import booking from "../assets/image/booking.png";
import time from "../assets/image/time.png";
import notify from "../assets/image/notify.png";
import AboutElem from "./AboutElem";

const About = () => {
  return (
    <div>
      <div className="grid grid-cols-1  md:grid-cols-3 w-full h-full sm:gap-16 md:gap-20 gap-6 ">
        <AboutElem
          image={booking}
          content={"Works with theatres that are listed on"}
          addcontent1={{
            link: "https://in.bookmyshow.com/",
            content: "BookMyShow",
          }}
          addcontent2={{
            link: "https://www.ticketnew.com/",
            content: "TicketNew",
          }}
        />
        <AboutElem
          image={time}
          content={
            "Constantly monitors ticket booking services for ticket releases"
          }
        />
        <AboutElem
          image={notify}
          content={"Get alerts as soon as bookings open through"}
          addcontent1={{
            link: "https://telegram.org/",
            content: "Telegram",
          }}
        />
      </div>
    </div>
  );
};

export default About;
