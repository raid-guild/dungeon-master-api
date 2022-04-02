const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');

const CREATE_ROUTER = require('./routes/create');
const UPDATE_ROUTER = require('./routes/update');

const { typeDefs } = require('./schema/typedefs');
const { resolvers } = require('./schema/resolvers');
const { verifyToken, validateRequest } = require('./middlewares/auth');
const { devMode } = require('./config');

const createServer = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      if (!devMode) {
        if (!verifyToken(req)) throw Error('Unauthorized');
      }
    }
  });

  server.applyMiddleware({ app });

  // ---------- CREATE ROUTES ----------
  app.use('/create', () => !devMode && validateRequest, CREATE_ROUTER);

  // ---------- UPDATE ROUTES ----------
  app.use('/update', () => !devMode && validateRequest, UPDATE_ROUTER);

  // ---------- ROOT REQUEST ----------
  app.get('/', (req, res) => res.json('Welcome to Dungeon Master!'));

  return app;
};

module.exports = createServer;
