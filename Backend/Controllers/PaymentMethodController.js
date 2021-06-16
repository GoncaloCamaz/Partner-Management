var PaymentMethod = require('../Models/PaymentMethods')
const PaymentMethods = module.exports

PaymentMethods.create = (paymentmethod) => {
    return PaymentMethod.create(paymentmethod)
}

PaymentMethods.listAll = () => {
    return PaymentMethod.find()
                        .exec()
}
