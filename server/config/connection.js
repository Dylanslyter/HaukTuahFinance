const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/net-worth-tracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;



