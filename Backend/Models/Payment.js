const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PaymentSchema = new Schema({
associateNumber: {type: Number, required: true},
associateName: {type: String, required: true},
associateGroup: {type: String, required: true},
paymentDate: {type: Date, required: true},
valueReceived: {type: Number, required: true},
yearsPaid: {type: Number, required: true},
});

module.exports = mongoose.model('Payment', PaymentSchema, 'payments');