const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");


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

const storage = new GridFsStorage({
    url: connectionQuery,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "photos",
            filename: `${file.originalname}`,
        };
    },
});

module.exports = multer({ storage });