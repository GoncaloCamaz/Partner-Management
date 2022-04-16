const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const AssociateSchema = new Schema({
    associateNumber: { type: Number, required: true, unique: true},
    name: {type: String, required: true,  max : [127, "Max Length is 127 characters"]},
    phoneNumber: String,
    address: String,
    city: String,
    postalCode: String,
    nickname: String,
    active: {type: Boolean, required: true},
    email: {type: String, required: true, unique: true, max : [127, "Max Length is 127 characters"]},
    password: {type: String, required: true},
    userRole: {type: String, required: true},
    joinedIn: Date,
    groups: [String],
    currentFeeYear: { type: Number, required: true},
});

AssociateSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Associate', AssociateSchema, 'associates');