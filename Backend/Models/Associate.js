const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AssociateSchema = new Schema({
id: Number,
associate_number: Number,
name: String,
nickname: String,
phone_number: Number,
email: String,
joined_in: Date,
groups: [{name: String, joined_in: Date}],
paid_year: Number,

});

module.exports = mongoose.model('Partner', AssociateSchema, 'partners');