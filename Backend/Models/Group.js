const mongoose = require('mongoose');
const Schema = mongoose.Schema

const GroupSchema = new Schema({
id: Number,
name: {type: String, required: true,  max : [100, "Max Length is 100 characters"]},
initials: {type: String, required: true, max : [10, "Max Length is 10 characters"]}
});

module.exports = mongoose.model('Group', GroupSchema, 'groups');