const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PartnershipSchema = new Schema({
id: Number,
name: {type: String, required: true, max : [127, "Max Length is 127 characters"]},
phone_number: Number,
email: String,
start_date: {type: Date, required: true},
end_date: {type: Date, required: true},
advantages: [String]
});

module.exports = mongoose.model('Partnership', PartnershipSchema, 'partnerships');