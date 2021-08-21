import React from "react";
import { useQuery } from "react-query";
import { FilmContent } from "../Components/FilmContent/index.js";
import { fetchFilms } from "../Service";

export const FilmsPage = () => {
  const { data, status } = useQuery("films", fetchFilms);
  return (
    <div>
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && <FilmContent data={data} />}
    </div>
  );
};
