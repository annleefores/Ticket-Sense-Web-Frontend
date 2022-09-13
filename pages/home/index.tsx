import React, { useEffect, useState } from "react";
import DatePickerSelect from "../../components/DatePickerSelect";
import LocationSelect from "../../components/LocationSelect";
import MovieSearch from "../../components/MovieSearch";
import SlideControl from "../../components/SlideControl";
import TheatreSelect from "../../components/TheatreSelect";
import { useContextStore } from "../../context/AuthContext";

const Index = () => {
  const { site, setSite, setLocdata, Locdata } = useContextStore();

  const [movie, setMovie] = useState("");

  const LocDataFunc = async (params: string) => {
    setLocdata(params);
  };

  return (
    <div className="flex justify-center mt-[100px] w-full h-full">
      <div className="flex flex-col w-full max-w-[700px] gap-1">
        <SlideControl LocDataFunc={LocDataFunc} />
        <MovieSearch setMovie={setMovie} movie={movie} />
        <LocationSelect />
        <TheatreSelect />
        <DatePickerSelect />
      </div>
    </div>
  );
};

export default Index;
