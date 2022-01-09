const upload = require("../Middleware/upload");
const express = require("express");
const router = express.Router();
var controller = require('../Controllers/GroupController')

router.post("/", upload.single("file"), async (req, res) => {
    if (req.file === undefined) return res.send("you must select a file.");
    const imgUrl = `http://localhost/api/groups/file/${req.file.filename}`;
    return res.send(imgUrl);
});

router.get("/list", async (_req,res) => {
    return controller.listAll()
            .then(data => res.jsonp(data))
            .catch(error => res.status(500).jsonp(error))
})

router.post("/create", async (req,res) => {
    return controller.createGroup(req.body)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

router.post("/update", async (req,res) => {
    return controller.updateGroup(req.body)
            .then(data => res.jsonp(data))
            .catch(error => res.status(500).jsonp(error))
})

router.delete("/delete/:name", async(req,res) => {
    return controller.deleteGroup(req.params.name)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})


module.exports = router;