require('dotenv').config();
var express = require('express'),
app = express(),
port = process.env.PORT || 8082;
app.listen(port);

var cors = require('cors')
app.use(cors());

var dbNetworkName = process.env.DBNETWORK || "localhost"
var dbPort = process.env.DBPORT || 27017
var dbName = process.env.DBNAME || "pmdb"
var dbUsername = process.env.DBUSERNAME || "admin"
var dbPassword = process.env.DBPASSWORD || "password"
var dbAuthentication = dbUsername + ':' + dbPassword + '@'

var mongoose = require('mongoose');
let connectionQuery = "mongodb://" 
  + dbAuthentication
  + dbNetworkName
  + ':' 
  + dbPort
  + '/' 
  + dbName
  + '?authSource=admin'

mongoose.connect(connectionQuery, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log('Connecting: ' +  connectionQuery))
  .then(()=> console.log('Mongo running... status: ' + mongoose.connection.readyState))
  .catch(()=> console.log('Mongo: connection error! ' + connectionQuery))

app.use(function (_req, res, next) {
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
app.use('/paymentmethods', require('./Routes/PaymentMethodsRoute'));
app.use('/partners', require('./Routes/PartnersRoute'));
app.use('/all', require('./Routes/GeneralRoute'))

module.exports = app;