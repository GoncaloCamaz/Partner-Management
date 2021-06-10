const mongoose = require('mongoose');
const Schema = mongoose.Schema

const DefinitionsSchema = new Schema({
ecard_url: String,
share_value: {type: Number, required: true}
});

module.exports = mongoose.model('Definition', DefinitionsSchema, 'definitions');