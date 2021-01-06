import React from "react";
import { Link } from "react-router-dom";

const Movies = ({ movies }) => {
  //   console.log(movies);
  //   console.log(movies.movies);

  if (movies.length === 0) {
    return (
      <div className="bg-indigo-100 h-screen w-full grid place-items-center ">
        <div className="">
          <h1 className="mb-4">Leider gibt es keine Suchanfrage :(</h1>
          <Link
            className="px-2 py-1 bg-indigo-600 text-indigo-200 font-semibold text-xl rounded"
            to="/"
          >
            Zurück zur Suche
          </Link>
        </div>
      </div>
    );
  }
  const { Title, Year, Poster, Actors, Plot } = movies.movies;
  return (
    <div className="bg-indigo-100 h-screen w-full grid place-items-center">
      <div className="md:w-1/2  text-center">
        <h1 className="text-3xl text-indigo-600 font-semibold">{Title}</h1>
        <h1 className="text-lg text-indigo-400 font-bold italic">{Year}</h1>
        <div className="flex justify-center">
          <img src={Poster} alt={Title} />
        </div>
        <h1 className="text-xl text-indigo-500">
          <span className="text-indigo-600 font-bold mt-4">Staring:</span>{" "}
          {Actors}
        </h1>
        <h1 className="text-lg text-indigo-400 my-4">
          <span className="text-indigo-600 font-bold">Plot:</span> {Plot}
        </h1>
        <Link
          className="px-2 py-1 bg-indigo-600 text-indigo-200 font-semibold text-xl rounded"
          to="/"
        >
          Zurück zur Suche
        </Link>
      </div>
    </div>
  );
};

export default Movies;
