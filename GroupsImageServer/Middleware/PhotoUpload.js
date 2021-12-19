const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')

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

const storage = new GridFsStorage({
    url: connectionQuery,
    options: {useNewUrlParser: true, useUnifiedTopology: true},
    file: (_req, file) => {
        const match = ["image/png","image/jpeg"];

        if(match.indexOf(file.mimetype) === -1){
            const filename = '${file.originalname}';
            return filename;
        }
        return {
            bucketName: "photos",
            filename: '${file.originalname}'
        }
    }
})

module.exports = multer({storage})