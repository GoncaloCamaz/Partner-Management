require('dotenv').config()
const express = require('express')
const connection = require('./db')
const Grid = require('gridfs-stream')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 8083;

let gfs;
connection();

const conn = mongoose.connection
conn.once("open", function() {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("photos");
})

app.use("/file", require('.Routes/FileRoute'));

app.get('file/:filename', async (req, res) => {
    try {
        const file = await gfs.files.findOne({filename: req.params.filename})
        const readStream = gfs.createReadStream(file.filename);

        readStream.pipe(res)
    } catch{
        res.send('Something went wrong!')
    }
})

app.delete("file/:filename", async (req, res) => {
    try {
        await gfs.files.deleteOne({filename: req.params.filename})
        res.send("Image deleted!")
    } catch (error) {
        res.send("Something went wrong!")
    }
})

app.listen(port, console.log("Listening on port ${port}..."));

var cors = require('cors')
app.use(cors());

