const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PartnershipSchema = new Schema({
name: {type: String, required: true, unique: true, max : [127, "Max Length is 127 characters"]},
phoneNumber: String,
email: String,
website: String,
addresses: [{address: {type: String, required: true}, city: {type: String, required: true}, postalCode: String, latitude: {type: String, required: true}, longitude: {type: String, required: true}}],
startDate: {type: String},
active: {type: Boolean, required: true},
advantages: [String]
});

module.exports = mongoose.model('Partnership', PartnershipSchema, 'partnerships');