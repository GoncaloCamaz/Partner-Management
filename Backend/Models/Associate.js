const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AssociateSchema = new Schema({
id: Number,
associate_number: { type: Number, required: true},
name: {type: String, required: true,  max : [127, "Max Length is 127 characters"]},
phone_number: Number,
active: Boolean,
email: {type: String, required: true,  max : [127, "Max Length is 127 characters"]},
password: {type: String, required: true},
user_role: {type: String, required: true},
joined_in: Date,
groups: [{group_name: String, group_associate_nickname: String}],
paid_until_year: Number
});

module.exports = mongoose.model('Associate', AssociateSchema, 'associates');