const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const dotenv = require("dotenv");
const typeDefs = require("./graphql/schema");
const { Query } = require("./graphql/resolvers/query");
dotenv.config();
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
  },
});

server.applyMiddleware({ app });
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`SERVER RENNT AUF PORT ${PORT}`);
});
