const mongoose = require('mongoose');
const createServer = require('./server');

const { CONFIG } = require('./config');

mongoose
  .connect(CONFIG.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    const app = createServer();
    app.listen(CONFIG.PORT, () =>
      console.log(`Listening on port ${CONFIG.PORT}`)
    );
  })
  .catch((err) => console.log(err));
