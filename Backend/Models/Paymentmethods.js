const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PaymentMethodSchema = new Schema({
id: Number,
name: {type: String, required: true},
steps: [{step: Number, description: String}],
});

module.exports = mongoose.model('PaymentMethod', PaymentSchema, 'paymentmethods');