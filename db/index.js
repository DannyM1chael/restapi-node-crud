const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose
  .connect(
    process.env.DB_CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    console.log('Connection is successful'),
  )
  .catch((error) => {
    console.log('Connection is failed', { message: error });
    process.env(1);
  });

const db = mongoose.connection;

module.exports = db;
