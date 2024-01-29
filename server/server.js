const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
const path = require('path');
const db = require('./config/connection');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
