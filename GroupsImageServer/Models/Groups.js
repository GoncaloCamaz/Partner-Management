const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    initials: { type: String, required: true },
    imagePath: { type: String }
});

module.exports = mongoose.model('Group', groupSchema, 'groups');