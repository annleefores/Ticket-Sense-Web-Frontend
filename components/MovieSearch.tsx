import { Autocomplete } from "@mantine/core";
import React, { useContext, useEffect, useState } from "react";
import { Movie } from "tabler-icons-react";
import dayjs from "dayjs";
import axios from "axios";
import { useContextStore } from "../context/AuthContext";

const MovieSearch = ({ setMovie, movie }: { setMovie: any; movie: string }) => {
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const { setMoviedata, moviedata } = useContextStore();

  useEffect(() => {
    if (movie.length > 1) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${movie}&page=1&include_adult=false`
        )
        .then((response) => {
          const movietitle = response.data.results.map(
            (item: any, id: number) => ({
              key: id,
              value: `${item?.title} (${dayjs(item?.release_date).format(
                "YYYY"
              )})`,
            })
          );

          setMoviedata(movietitle);
        });
    } else {
      setMoviedata([]);
    }
  }, [movie]);

  return (
    <div className="flex w-full h-full justify-center">
      <Autocomplete
        className="w-full px-2 m-2 sm:w-2/3"
        placeholder="Movie Name"
        required
        limit={8}
        size="md"
        icon={<Movie size={16} />}
        value={movie}
        onChange={setMovie}
        data={moviedata}
      />
    </div>
  );
};

export default MovieSearch;
