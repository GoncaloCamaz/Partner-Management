const mongoose = require('mongoose')

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

module.exports = async function connection(){
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }

        await mongoose.connect(connectionQuery, connectionParams)
        console.log("Connected to database " + connectionQuery)
    } catch (error) {
        console.log("Something went wrong!")
        console.log(error)
    }
}