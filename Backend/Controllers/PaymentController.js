const { paymentDTOMapper } = require('../DTO/PaymentDTO')
var Payment = require('../Models/Payment')
const Payments = module.exports

Payments.createPayment = (payment) => {
	const paymentDTO = paymentDTOMapper(payment);
    return Payment.create(paymentDTO)
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
