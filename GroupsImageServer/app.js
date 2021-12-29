const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const groupRoutes = require("./Routes/GroupsRoute");

var dbNetworkName = process.env.NETWORK || "localhost"
var dbPort = process.env.DBPORT || 27017
var dbName = process.env.DBNAME || "pmdb"
var dbUsername = process.env.DBUSERNAME || "admin"
var dbPassword = process.env.DBPASSWORD || "password"
var dbAuthentication = process.env.DBAUTHENTICATIONREQUIRED === true ? dbUsername + ':' + dbPassword + '@' : "" 

let connectionQuery = "mongodb://" 
  + dbAuthentication
  + dbNetworkName
  + ':' 
  + dbPort
  + '/' 
  + dbName

mongoose.connect(connectionQuery, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecting: ' +  connectionQuery))
  .then(()=> console.log('Mongo running... status: ' + mongoose.connection.readyState))
  .catch(()=> console.log('Mongo: connection error!'))
mongoose.Promise = global.Promise;

app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
app.use("/", groupRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

port = process.env.PORT || 8083;
app.listen(port);

module.exports = app;