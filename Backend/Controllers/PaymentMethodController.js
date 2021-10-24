var PaymentMethod = require('../Models/Paymentmethods')
const PaymentMethods = module.exports

/**
 * Creates new payment method
 */
PaymentMethods.create = (paymentmethod) => {
    return PaymentMethod.create(paymentmethod)
}

/**
 * Delete payment method
 */
PaymentMethods.delete = (name) => {
    return PaymentMethod.findOneAndDelete({name: name})
                        .exec()
}

/**
 * Lists all payment methods
 */
PaymentMethods.listAll = () => {
    return PaymentMethod.find()
                        .exec()
}
