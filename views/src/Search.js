import React from "react";
import { useHistory } from "react-router-dom";

const Search = ({ movie, setMovie }) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(movie);

    history.push("/movies");
    // setTimeout(() => {
    //   setMovie("");
    // }, 3000);
  };
  return (
    <div className="bg-indigo-100 h-screen w-full grid place-items-center">
      <div>
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            className="text-xl pl-1 rounded"
            placeholder="Suche ein Film"
            type="text"
            value={movie}
            onChange={(e) => {
              setMovie(e.target.value);
            }}
          ></input>
          <button
            type="submit"
            className="px-2 py-1 bg-indigo-600 text-indigo-200 font-semibold text-xl rounded"
          >
            Suche
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
