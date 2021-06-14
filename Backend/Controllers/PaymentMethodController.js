var PaymentMethod = require('../Models/PaymentMethods')
const PaymentMethods = module.exports

PaymentMethods.listAll = () => {
    return PaymentMethod.find()
                        .exec()
}
