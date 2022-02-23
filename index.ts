import mongoose from 'mongoose';
import createServer from './server';

import { CONFIG } from './config';

const MONGO_URI =
  CONFIG.ENVIRONMENT === 'production'
    ? CONFIG.MONGODB_URI_PRODUCTION
    : CONFIG.MONGODB_URI_DEVELOPMENT;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    const app = createServer();
    app.listen(CONFIG.PORT, () =>
      console.log(`Listening on port ${CONFIG.PORT}`)
    );
  })
  .catch((err: any) => console.log(err));
