const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const { ApolloServer } = require('apollo-server-express');

const CREATE_ROUTER = require('./routes/create');
const UPDATE_ROUTER = require('./routes/update');

const { typeDefs } = require('./schema/typedefs');
const { resolvers } = require('./schema/resolvers');

require('dotenv').config();

/**
 * @swagger
 * tags:
 *   name: Consultations
 *   description: Consultation management
 */

/**
 * @swagger
 * tags:
 *   name: Applications
 *   description: Application management
 */

/**
 * @swagger
 * tags:
 *   name: Members
 *   description: Member management
 */

/**
 * @swagger
 * tags:
 *   name: Raids
 *   description: Raid management
 */

/**
 * @swagger
 * tags:
 *   name: Portfolios
 *   description: Portfolio management
 */

/**
 * @swagger
 * tags:
 *   name: RaidParties
 *   description: RaidParty management
 */

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Comment management
 */

function createServer() {
  const app = express();

  const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Dungeon Master API',
        version: '1.0.0',
        description: 'Internal API Reference for Dungeon Master'
      },
      servers: [
        {
          url: 'http://localhost:5000/'
        }
      ]
    },
    apis: ['./routes/*.js', './models/*.js']
  };

  const swaggerDocs = swaggerJsDoc(swaggerOptions);

  app.use(express.json());

  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app });

  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocs, { explorer: true })
  );

  app.use('/create', (req, res, next) => next(), CREATE_ROUTER);
  app.use('/update', (req, res, next) => next(), UPDATE_ROUTER);

  return app;
}

module.exports = createServer;
