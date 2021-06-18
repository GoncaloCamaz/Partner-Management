const mongoose = require('mongoose');
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const PartnershipSchema = new Schema({
name: {type: String, required: true, unique: true, max : [127, "Max Length is 127 characters"]},
phone_number: Number,
email: String,
address: String,
active: {type: Boolean, required: true},
start_date: {type: Date},
end_date: {type: Date},
advantages: [String]
});

PartnershipSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Partnership', PartnershipSchema, 'partnerships');