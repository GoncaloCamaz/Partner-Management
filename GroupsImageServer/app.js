require("dotenv").config();
const upload = require("./Routes/Upload");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");
const mongodb = require('mongodb')
const connection = require("./db");
const express = require("express");
const app = express();
const mime = require('mime')

let gfs;
connection();

const conn = mongoose.connection;
conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("photos");
});

app.use("/upload", upload);

// media routes
app.get("/file/:filename", async (req, res) => {
    try {
        const filename = req.params.filename
        gfs.files.findOne({ filename: filename }, (err, file) => {
          if (err) {
              // report the error
              console.log(err);
          } else {
              // detect the content type and set the appropriate response headers.
              let mimeType = file.contentType;
              if (!mimeType) {
                  mimeType = mime.lookup(file.filename);
              }
              res.set({
                  'Content-Type': mimeType,
                  'Content-Disposition': 'attachment; filename=' + file.filename
              });

              const readStream = gfs.createReadStream({
                  filename: file.filename
              });
              readStream.on('error', err => {
                  // report stream error
                  console.log(err);
              });
              // the response will be the file itself.
              readStream.pipe(res);
          }
      });
    } catch (error) {
        res.send("not found");
    }
});

app.delete("/file/:filename", async (req, res) => {
    try {
        await gfs.files.deleteOne({ filename: req.params.filename });
        res.send("success");
    } catch (error) {
        console.log(error);
        res.send("An error occured.");
    }
});

const port = process.env.PORT || 8083;
app.listen(port, console.log(`Listening on port ${port}...`));