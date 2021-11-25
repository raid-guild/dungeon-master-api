import express, { Request, Response, NextFunction, Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import YAML from 'yamljs';

import CREATE_ROUTER from './routes/create';
import UPDATE_ROUTER from './routes/update';

import { typeDefs } from './schema/typedefs';
import { resolvers } from './schema/resolvers';
import { authenticate } from './auth/token';

const apiDoc = YAML.load('./swagger.yaml');

function initializeApiDocs(_app) {
  _app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(apiDoc, { explorer: true })
  );
}

const createServer = (): Application => {
  const app = express();

  initializeApiDocs(app);

  app.use(cors());
  app.use(express.json());

  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app });

  app.use(
    '/create',
    authenticate,
    (req: Request, res: Response, next: NextFunction) => next(),
    CREATE_ROUTER
  );
  app.use(
    '/update',
    authenticate,
    (req: Request, res: Response, next: NextFunction) => next(),
    UPDATE_ROUTER
  );

  app.get('/', (req: Request, res: Response) =>
    res.json('Welcome to Dungeon Master!')
  );

  return app;
};

export default createServer;
