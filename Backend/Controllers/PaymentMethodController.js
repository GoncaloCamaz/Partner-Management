var PaymentMethod = require('../Models/PaymentMethods')
const PaymentMethods = module.exports

/**
 * Creates new payment method
 */
PaymentMethods.create = (paymentmethod) => {
    return PaymentMethod.create(paymentmethod)
}

/**
 * Lists all payment methods
 */
PaymentMethods.listAll = () => {
    return PaymentMethod.find()
                        .exec()
}
