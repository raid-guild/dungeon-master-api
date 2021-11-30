import express, { Request, Response, NextFunction, Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import YAML from 'yamljs';

import AUTH_ROUTER from './routes/auth';
import CREATE_ROUTER from './routes/create';
import UPDATE_ROUTER from './routes/update';

import { typeDefs } from './schema/typedefs';
import { resolvers } from './schema/resolvers';

import { validateRequest } from './auth/token';
import { CONFIG } from './config';

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

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      if (CONFIG.NODE_ENV === 'production') {
        return validateRequest(req.headers.authorization);
      }
      return req;
    }
  });

  server.applyMiddleware({ app });

  // ---------- TOKEN ROUTES ----------
  app.use(
    '/auth',
    (req: Request, res: Response, next: NextFunction) => next(),
    AUTH_ROUTER
  );

  // ---------- CREATE ROUTES ----------
  app.use(
    '/create',
    (req: Request, res: Response, next: NextFunction) => {
      if (CONFIG.NODE_ENV === 'production') {
        try {
          validateRequest(req.headers.authorization);
          next();
        } catch (err) {
          res.status(401).send('Unauthorized');
        }
      }
    },
    CREATE_ROUTER
  );

  // ---------- UPDATE ROUTES ----------
  app.use(
    '/update',
    (req: Request, res: Response, next: NextFunction) => {
      if (CONFIG.NODE_ENV === 'production') {
        try {
          validateRequest(req.headers.authorization);
          next();
        } catch (err) {
          res.status(401).send('Unauthorized');
        }
      }
    },
    UPDATE_ROUTER
  );

  // ---------- ROOT REQUEST ----------
  app.get('/', (req: Request, res: Response) =>
    res.json('Welcome to Dungeon Master!')
  );

  return app;
};

export default createServer;
