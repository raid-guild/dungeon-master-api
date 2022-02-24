import express, { Request, Response, Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';

import CREATE_ROUTER from './routes/create';
import UPDATE_ROUTER from './routes/update';

import { typeDefs } from './schema/typedefs';
import { resolvers } from './schema/resolvers';
import { verifyToken, validateRequest } from './middlewares/auth';

const createServer = (): Application => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      if (!verifyToken(req)) throw Error('Unauthorized');
    }
  });

  server.applyMiddleware({ app });

  // ---------- CREATE ROUTES ----------
  app.use('/create', validateRequest, CREATE_ROUTER);

  // ---------- UPDATE ROUTES ----------
  app.use('/update', validateRequest, UPDATE_ROUTER);

  // ---------- ROOT REQUEST ----------
  app.get('/', (req: Request, res: Response) =>
    res.json('Welcome to Dungeon Master!')
  );

  return app;
};

export default createServer;
