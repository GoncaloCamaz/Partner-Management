const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PaymentSchema = new Schema({
associate_number: {type: Number, required: true},
payment_date: {type: Date, required: true},
value_received: {type: Number, required: true},
years_paid: {type: Number, required: true},
});

module.exports = mongoose.model('Payment', PaymentSchema, 'payments');