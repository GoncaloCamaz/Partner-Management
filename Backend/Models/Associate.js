const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const AssociateSchema = new Schema({
associate_number: { type: Number, required: true, unique: true},
name: {type: String, required: true,  max : [127, "Max Length is 127 characters"]},
phone_number: Number,
address: String,
city: String,
postal_code: String,
nickname: String,
active: {type: Boolean, required: true},
email: {type: String, required: true, unique: true, max : [127, "Max Length is 127 characters"]},
password: {type: String, required: true},
user_role: {type: String, required: true},
joined_in: Date,
groups: [{group_name: String}],
paid_until_year: Number
});

AssociateSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Associate', AssociateSchema, 'associates');