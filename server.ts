import express, { Request, Response, NextFunction, Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';

import AUTH_ROUTER from './routes/auth';
import CREATE_ROUTER from './routes/create';
import UPDATE_ROUTER from './routes/update';

import { typeDefs } from './schema/typedefs';
import { resolvers } from './schema/resolvers';

import { expressAuth, graphAuth } from './middleware/auth';

const createServer = (): Application => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      graphAuth(req);
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
  app.use('/create', expressAuth, CREATE_ROUTER);

  // ---------- UPDATE ROUTES ----------
  app.use('/update', expressAuth, UPDATE_ROUTER);

  // ---------- ROOT REQUEST ----------
  app.get('/', (req: Request, res: Response) =>
    res.json('Welcome to Dungeon Master!')
  );

  return app;
};

export default createServer;
