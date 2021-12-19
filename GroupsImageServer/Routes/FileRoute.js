let router = require('express').Router();
const upload = require('../Middleware/PhotoUpload')
const serverUrl = process.env.SERVERURL || "http://localhost:8083"

router.post('/upload',upload.single("file"), (req, res) => {
    if(req.file === undefined) 
        return res.send("Please select a file.");
    
    const imagePath = serverUrl + '/file/${req.file.filename}'
    return res.send(imagePath)
})