const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  Query: {
    movie: async (parent, args, context, info) => {
      const { name } = args;
      const response = await fetch(
        `http://www.omdbapi.com/?t=${name}&apikey=${process.env.API_KEY}`
      );
      const data = await response.json();
      const {
        Title: title,
        Year: year,
        Actors: actors,
        Plot: plot,
        Poster: image,
      } = data;
      //   console.log(title);
      return { title, year, actors, plot, image };
    },
  },
};
