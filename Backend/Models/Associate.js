const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AssociateSchema = new Schema({
id: Number,
associate_number: Number,
name: String,
phone_number: Number,
email: String,
joined_in: Date,
groups: [{group_name: String, group_associate_nickname: String}],
paid_until_year: Number,
user_role: String
});

module.exports = mongoose.model('Associate', AssociateSchema, 'associates');