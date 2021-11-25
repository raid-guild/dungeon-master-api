import mongoose from 'mongoose';
import createServer from './server';

import { CONFIG } from './config';

mongoose
  .connect(CONFIG.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    const app = createServer();
    app.listen(CONFIG.PORT, () => console.log('Listening..'));
  })
  .catch((err: any) => console.log(err));
