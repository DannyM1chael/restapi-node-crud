const express = require('express');
const cors = require('cors');

const db = require('./db');
const Route = require('./routes');
const app = express();

db.on('error', console.error.bind(console, 'Server is failed'));
app.use(cors());
app.use(express.json());
app.use('/api', Route);
app.use((req, res) => {
  res.status(404).send('URL not found');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is up and running on ${PORT}`));
