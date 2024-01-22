const db = require('mongoose');
db.connect(process.env.DATABASE_URI);
module.exports = db;
