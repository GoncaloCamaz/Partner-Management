const mongoose = require('mongoose');
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const PaymentMethodSchema = new Schema({
    name: {type: String, required: true, unique: true},
    steps: [{stepId: Number, stepDescription: String}]
});

PaymentMethodSchema.plugin(uniqueValidator)

module.exports = mongoose.model('PaymentMethod', PaymentMethodSchema, 'paymentmethods');