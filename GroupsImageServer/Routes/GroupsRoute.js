const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.filename);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

const Group = require("../Models/Groups");

router.get("/", (req, res, next) => {
  Group.find()
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        groups: docs.map(doc => {
          return {
            name: doc.name,
            initials: doc.initials,
            groupImage: doc.groupImage,
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post("/create", upload.single('groupImage'), (req, res, next) => {
  const group = new Group({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    initials: req.body.initials,
    groupImage: req.file.path 
  });
  group
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created Group successfully",
        createdGroup: {
            name: result.name,
            initials: result.initials,
            _id: result._id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/:name", (req, res, next) => {
  const id = req.params.name;
  Group.findById(id)
    .select('name initials groupImage')
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
            group: doc
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.delete("/:name", (req, res, next) => {
  const id = req.params.name;
  Group.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Group deleted'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;