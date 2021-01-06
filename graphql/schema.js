const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    movie(name: String!): Movie
  }
  type Movie {
    title: String
    year: String
    image: String
    actors: String
    plot: String
  }
`;

module.exports = typeDefs;
