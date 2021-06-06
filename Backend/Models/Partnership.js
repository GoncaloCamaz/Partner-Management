const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PartnershipSchema = new Schema({
id: Number,
name: String,
phone_number: Number,
email: String,
start_date: Date,
end_date: Date,
advantages: [String]
});

module.exports = mongoose.model('Partnership', PartnershipSchema, 'partnerships');