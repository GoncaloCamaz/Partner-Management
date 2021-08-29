const mongoose = require('mongoose');
const Schema = mongoose.Schema

const DefinitionsSchema = new Schema({
ecardUrl: String,
shareValue: {type: Number, required: true},
gmailHost: {type: String, required: true},
gmailPort: {type: Number, required: true},
gmailUsername: {type: String, required: true},
gmailPassword: {type: String, required: true}
});

module.exports = mongoose.model('Definition', DefinitionsSchema, 'definitions');