var Payment = require('../Models/Payment')
const Payments = module.exports

Payments.createPayment = (payment) => {
    return Payment.create(payment)
}

Payments.listAll = () => {
    return Payment.find()
                  .sort({paymentdate: 1})
                  .exec()
}

Payments.listAllByAssociate = (associateNumber) => {
    return Payment.find({associateNumber: associateNumber})
                  .sort({payment_date: 1})
                  .exec()
}
