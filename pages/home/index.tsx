import axios from "axios";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React, { useState } from "react";
import DatePickerSelect from "../../components/DatePickerSelect";
import Listing from "../../components/Listing";
import LocationSelect from "../../components/LocationSelect";
import MovieSearch from "../../components/MovieSearch";
import SlideControl from "../../components/SlideControl";
import TheatreSelect from "../../components/TheatreSelect";
import { useContextStore } from "../../context/AuthContext";

dayjs.extend(customParseFormat);

const Index = () => {
  const {
    site,
    date,
    location,
    theater,
    setMoviedata,
    dateChange,
    setLocation,
    setTheater,
    setTheaterdata,
    setNewpost,
  } = useContextStore();

  const [movie, setMovie] = useState("");

  // convert output from calendar to date format
  const dateFormat = dayjs(date).format("YYYY-MM-DD");

  const log = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setNewpost(false);

    const loc = JSON.parse(location);
    const thea = JSON.parse(theater);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URI}api/trigger/`, {
        site: site,
        date: dateFormat,
        film: movie,
        location: loc,
        theater: thea,
        // tg_user_id: user_data,
        tg_user_id: "378882317",
      })
      .then((response) => {
        if (response.data.message === "success") {
          setNewpost(true);
        }
      });

    setMovie("");
    setMoviedata([]);
    dateChange(null);
    setLocation([]);
    setTheater([]);
    setTheaterdata([{ value: "", label: "" }]);
  };

  return (
    <div className="flex flex-col mt-[80px] w-full h-full">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full max-w-[700px] gap-1">
          <form className="w-full h-full" onSubmit={log}>
            <SlideControl />
            <MovieSearch setMovie={setMovie} movie={movie} />
            <LocationSelect />
            <TheatreSelect />
            <DatePickerSelect />
            <div className="flex justify-center items-center">
              <button className=" bg-[#00df9a] text-black rounded-md shadow-lg font-medium m-4 mt-8 p-3 w-[200px]">
                Enable Ticket Sense
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="h-full w-full">
        <Listing />
      </div>
    </div>
  );
};

export default Index;
