import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const GET_MOVIE = gql`
  query GetMovie($name: String!) {
    movie(name: $name) {
      title
      year
      image
      actors
      plot
    }
  }
`;

const Movies = ({ movie }) => {
  const { loading, data, error } = useQuery(GET_MOVIE, {
    variables: { name: movie },
  });

  if (loading) {
    return (
      <div className="bg-indigo-100 h-screen w-full grid place-items-center">
        <div className="md:w-1/2  text-center">
          <h1>Loading ...</h1>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="bg-indigo-100 h-screen w-full grid place-items-center">
        <div className="md:w-1/2  text-center">
          <h1>Irgendwas ist schief gelaufen :/</h1>
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
  // console.log(data.movie);
  return (
    <div className="bg-indigo-100 h-screen w-full grid place-items-center">
      <div className="md:w-1/2  text-center">
        <h1 className="text-3xl text-indigo-600 font-semibold">
          {data.movie.title}
        </h1>
        <h1 className="text-lg text-indigo-400 font-bold italic">
          {data.movie.year}
        </h1>
        <div className="flex justify-center">
          <img src={data.movie.image} alt={data.movie.title} />
        </div>
        <h1 className="text-xl text-indigo-500">
          <span className="text-indigo-600 font-bold mt-4">Staring:</span>{" "}
          {data.movie.actors}
        </h1>
        <h1 className="text-lg text-indigo-400 my-4">
          <span className="text-indigo-600 font-bold">Plot:</span>{" "}
          {data.movie.plot}
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
