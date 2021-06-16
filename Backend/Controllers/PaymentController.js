var Payment = require('../Models/Payment')
const Payments = module.exports

Payments.createPayment = (payment) => {
    return Payment.create(payment)
}

Payments.listAll = () => {
    return Payment.find()
                  .sort({payment_date: 1})
                  .exec()
}
