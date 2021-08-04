const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PartnershipSchema = new Schema({
name: {type: String, required: true, unique: true, max : [127, "Max Length is 127 characters"]},
phone_number: Number,
email: String,
address: String,
category: {type: String, required: true, unique: true, max : [20, "Max Length is 127 characters"]},
start_date: {type: Date},
end_date: {type: Date},
advantages: [String]
});

module.exports = mongoose.model('Partnership', PartnershipSchema, 'partnerships');