const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

const CREATE_ROUTER = require('./routes/create');

const { typeDefs } = require('./schema/typedefs');
const { resolvers } = require('./schema/resolvers');

const app = express();

const DB_HOST = 'mongo:27017' // localhost;

mongoose.connect(`mongodb://${DB_HOST}/rageshipper`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.use(express.json());
app.use('/create', (req, res, next) => next(), CREATE_ROUTER);

app.listen(5000, () => console.log('Listening..'));
