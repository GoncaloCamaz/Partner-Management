require('dotenv').config();
var express = require('express'),
app = express(),
port = process.env.PORT || 1234;
app.listen(port);

var cors = require('cors')
app.use(cors());
/*
var mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Mongo running... status: ' + mongoose.connection.readyState))
  .catch(()=> console.log('Mongo: connection error!'))
*/
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, PATCH,OPTIONS');
  res.header('Access-Control-Allow-Credentials', true)
  next();
});

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

/**
 * Routes
 */

app.use('/', require('./Routes/AuthenticationRoute'));
app.use('/associates', require('./Routes/AssociatesRoute'));
app.use('/payments', require('./Routes/PaymentsRoute'));
app.use('/groups', require('./Routes/GroupsRoute'));
app.use('/partnerships', require('./Routes/PartnersRoute'));
app.use('/definitions', require('./Routes/DefinitionsRoute'));

module.exports = app;