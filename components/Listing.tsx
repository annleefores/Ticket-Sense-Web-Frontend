import axios from "axios";
import React, { useEffect, useState } from "react";
import { TrashX } from "tabler-icons-react";
import dayjs from "dayjs";
import no_image from "../assets/image/no_image.png";
import Image from "next/image";
import { useContextStore } from "../context/AuthContext";

const Listing = () => {
  const { newpost, user } = useContextStore();

  const [mainData, setmainData] = useState([]);

  const [displayData, setdisplayData] = useState([]);

  const [buttonValue, setButtonValue] = useState("all");

  const getData = async () => {
    if (user) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URI}api/getdata/${user}/`)
        .then((response) => {
          const data = response.data.map((item: any, id: number) => item);
          setmainData(data);
          setdisplayData(data);
          setButtonValue("all");
        });
    }
  };

  const filterType = (site: string) => {
    setButtonValue(site);
    if (site === "all") {
      setdisplayData(mainData);
    } else {
      setdisplayData(
        mainData.filter((item: any) => {
          return item.site === site;
        })
      );
    }
  };

  useEffect(() => {
    if (newpost === true) {
      getData();
    }
  }, [newpost]);

  useEffect(() => {
    getData();
  }, [user]);

  const deleteShow = (id: any) => {
    axios
      .put(`${process.env.NEXT_PUBLIC_API_URI}api/trigger/${id}/`)
      .then((response) => {
        getData();
      });
  };

  return (
    <div className="max-w-[1640px] mt-4 m-auto px-4 py-8">
      <p className="font-bold text-xl m-2 flex justify-center md:justify-start ">
        Added Notifications
      </p>
      <div>
        <div className="flex justify-center md:justify-start flex-wrap">
          <button
            onClick={() => filterType("all")}
            className={
              buttonValue === "all"
                ? "border text-xs rounded bg-[#00df9a] border-[#00df9a] text-black p-1 px-4 m-2"
                : "border text-xs rounded hover:border-[#00df9a] hover:text-[#00df9a]  p-1 px-4 m-2"
            }
          >
            All
          </button>
          <button
            onClick={() => filterType("bms")}
            className={
              buttonValue === "bms"
                ? "border text-xs rounded bg-[#00df9a] border-[#00df9a] text-black p-1 m-2"
                : "border text-xs rounded hover:border-[#00df9a] hover:text-[#00df9a] p-1 m-2"
            }
          >
            BookMyShow
          </button>
          <button
            onClick={() => filterType("tk")}
            className={
              buttonValue === "tk"
                ? "border text-xs rounded bg-[#00df9a] border-[#00df9a] text-black p-1 m-2"
                : "border text-xs rounded hover:border-[#00df9a] hover:text-[#00df9a] p-1 m-2"
            }
          >
            Ticket New
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-4 mt-4">
        {displayData.map((item: any, index: number) => (
          <div
            key={index}
            className="shadow-lg relative rounded hover:scale-105 duration-500 w-full h-full"
          >
            <Image
              src={
                item?.poster
                  ? `https://image.tmdb.org/t/p/w300${item?.poster}`
                  : no_image
              }
              alt={item.movie}
              width={200}
              height={300}
              className="object-cover rounded hover:brightness-[0.15]"
            />

            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 cursor-pointer opacity-0 hover:opacity-100 rounded text-white ">
              <div className="flex flex-col justify-center items-center h-full text-center ">
                <p className="white-space-normal text-xs md:text-sm font-bold w-full p-1 text-ellipsis overflow-hidden">
                  {item?.movie}
                </p>
                <p className="p-1 w-full mx-auto text-ellipsis overflow-hidden font-normal text-xs text-gray-300">
                  {item?.theater}
                </p>
                <p className="w-full mx-auto font-light text-xs text-gray-300">
                  {dayjs(item?.date).format("DD-MM-YYYY")}
                </p>
              </div>

              <p onClick={() => deleteShow(item?.id)}>
                <TrashX
                  size={20}
                  className="absolute top-1 right-1 text-gray-500  hover:text-gray-300"
                />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
