const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const GroupSchema = new Schema({
    name: {type: String, required: true, unique: true, max : [100, "Max Length is 100 characters"]},
    initials: {type: String, required: true, unique: true, max : [10, "Max Length is 10 characters"]},
    imagePath: {type: String}
});

GroupSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Group', GroupSchema, 'groups');