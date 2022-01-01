const mongoose = require("mongoose");

var dbNetworkName = process.env.DBNETWORK || "localhost"
var dbPort = process.env.DBPORT || 27017
var dbName = process.env.DBNAME || "pmdb"
var dbUsername = process.env.DBUSERNAME || "admin"
var dbPassword = process.env.DBPASSWORD || "password"
var dbAuthentication = dbUsername + ':' + dbPassword + '@'

let connectionQuery = "mongodb://" 
  + dbAuthentication
  + dbNetworkName
  + ':' 
  + dbPort
  + '/' 
  + dbName
  + '?authSource=admin'

module.exports = async function connection() {
    console.log(connectionQuery)
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(connectionQuery, connectionParams);
        console.log("connected to database");
    } catch (error) {
        console.log(error);
        console.log("could not connect to database");
    }
};