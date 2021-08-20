import express, { Request, Response, NextFunction, Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import dotenv from 'dotenv';

import CREATE_ROUTER from './routes/create';
import UPDATE_ROUTER from './routes/update';

import { typeDefs } from './schema/typedefs';
import { resolvers } from './schema/resolvers';

dotenv.config();

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

const createServer = (): Application => {
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
    apis: ['./routes/*.ts', './models/*.ts']
  };

  const swaggerDocs = swaggerJsDoc(swaggerOptions);

  app.use(cors());
  app.use(express.json());

  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app });

  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocs, { explorer: true })
  );

  app.use(
    '/create',
    (req: Request, res: Response, next: NextFunction) => next(),
    CREATE_ROUTER
  );
  app.use(
    '/update',
    (req: Request, res: Response, next: NextFunction) => next(),
    UPDATE_ROUTER
  );

  app.get('/', (req: Request, res: Response) =>
    res.json('Welcome to Dungeon Master!')
  );

  return app;
};

export default createServer;
