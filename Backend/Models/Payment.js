const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PaymentSchema = new Schema({
id: Number,
associate_number: Number,
payment_date: Date,
value_received: Number,
years_paid: Number
});

module.exports = mongoose.model('Payment', PaymentSchema, 'payments');