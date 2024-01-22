require('dotenv').config();
const db = require('./db/db');
const app = require('./app');

const { PORT = 3000 } = process.env;
app.listen(PORT);
