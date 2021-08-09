import mongoose from 'mongoose';
import createServer from './server';

require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/rageshipper', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    const app = createServer();
    app.listen(process.env.PORT || 5000, () => console.log('Listening..'));
  })
  .catch((err: any) => console.log(err));
