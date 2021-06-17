const mongoose = require('mongoose');
const Schema = mongoose.Schema

const DefinitionsSchema = new Schema({
ecard_url: String,
share_value: {type: Number, required: true},
gmail_host: {type: String, required: true},
gmail_port: {type: Number, required: true},
gmail_username: {type: String, required: true},
gmail_password: {type: String, required: true}
});

module.exports = mongoose.model('Definition', DefinitionsSchema, 'definitions');