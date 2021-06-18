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

Payments.listAllByAssociate = (associate_number) => {
    return Payment.find({associate_number: associate_number})
                  .sort({payment_date: 1})
                  .exec()
}
