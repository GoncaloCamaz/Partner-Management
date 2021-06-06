const mongoose = require('mongoose');
const Schema = mongoose.Schema

const GroupSchema = new Schema({
id: Number,
name: String,
initials: String,
});

module.exports = mongoose.model('Group', GroupSchema, 'groups');